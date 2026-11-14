#!/usr/bin/env node
/**
 * Checks the chart requests of the built site.
 * Each one must be signed by the documentation account.
 * Usage: see "Signed chart URLs" in CLAUDE.md.
 */

const fs = require('node:fs');
const path = require('node:path');
const acorn = require('acorn');
const { parseDocument, DomUtils } = require('htmlparser2');
const valueParser = require('postcss-value-parser');
const { KEYS, urlState, listFiles, fixLines, report, lineAt } = require('./sign-chart-urls');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const SITE_URL = 'https://documentation.image-charts.com/';
const EXTENSIONS = new Set(['.html', '.css', '.js']);
const MAX_FILES = 5000;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const MAX_SHOWN_URL = 160;

const CHART_HOSTS = new Set(['image-charts.com', 'www.image-charts.com']);
const EDITOR_HOST = 'editor.image-charts.com';
const WEB_PROTOCOLS = new Set(['http:', 'https:']);
// `/chart` or `/chart.js/<version>`, slashes merged.
const CHART_PATH = /^\/chart(?:\.js\/[^/]+)?\/?$/i;
const REPEATED_SLASHES = /\/{2,}/g;
const TRAILING_DOT = /\.$/;
// Attributes holding one URL, then attributes holding a srcset.
// A lazy loader copies `data-src` into `src`.
const URL_ATTRIBUTES = new Set(['src', 'data-src', 'href', 'poster', 'data', 'background', 'action', 'formaction', 'xlink:href']);
const SRCSET_ATTRIBUTES = new Set(['srcset', 'data-srcset', 'imagesrcset']);
// `ping` holds URLs split by whitespace.
const PING_ATTRIBUTE = 'ping';
const WHITESPACE_RUN = /\s+/;
// What precedes the URL of a meta refresh.
// That is its delay, a separator and `url=`.
const META_REFRESH_PREFIX = /^\s*[\d.]*\s*[;,]?\s*(?:url\s*=\s*)?/i;
const QUOTES = new Set(['"', "'"]);
const REFRESH = 'refresh';
// A srcset candidate: its URL, then trailing commas or descriptors.
// The URL is a run of non-whitespace.
const SRCSET_CANDIDATE = /[\s,]*(\S*[^\s,])(?:,+(?=\s|$)|\s+[^,]*)?/g;
const CSS_URL_FUNCTION = 'url';
const CSS_IMAGE_SET_FUNCTIONS = new Set(['image-set', '-webkit-image-set']);
const CSS_URL_NODES = new Set(['word', 'string']);
// A chart host URL in text.
// A quote, a space or a bracket ends it.
const CHART_HOST_URL = /(?:https?:)?\/\/[\w.-]*image-charts\.com[^\s"'`<>\\]*/gi;
// JS props holding one URL, then props holding a srcset.
const JS_URL_PROPS = new Set(['src', 'href', 'poster', 'srcSet', 'srcset', 'imageSrcSet']);
const JS_SRCSET_PROPS = new Set(['srcSet', 'srcset', 'imageSrcSet']);
const JS_STRING_TOKENS = new Set([acorn.tokTypes.string, acorn.tokTypes.template]);
const JS_OPTIONS = { ecmaVersion: 'latest' };
// JSON held in a JS string escapes slashes.
const JSON_SLASH = String.raw`\/`;
// Highlighting spans split the text of a code block.
const CODE_ELEMENTS = new Set(['code', 'pre']);
const RAW_TEXT_ELEMENTS = new Set(['script', 'style']);

function isRenderedText(node) {
  return DomUtils.isText(node) && !RAW_TEXT_ELEMENTS.has(node.parent.name);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

/** The query the chart server receives for `value`, or none. */
function chartQueries(value, base) {
  if (!URL.canParse(value, base)) {
    return [];
  }
  const url = new URL(value, base);
  const host = url.hostname.replace(TRAILING_DOT, '');
  if (!WEB_PROTOCOLS.has(url.protocol)) {
    return [];
  }
  const isChartPath = CHART_PATH.test(url.pathname.replaceAll(REPEATED_SLASHES, '/'));
  const isChartHost = CHART_HOSTS.has(host) || host === EDITOR_HOST;
  if (isChartHost && isChartPath) {
    // The editor keeps a signed query byte for byte.
    // A `#` stays, so the check reports where the browser cuts.
    return [`${url.search.slice(1)}${url.hash}`];
  }
  // The editor requests the chart URL of its hash.
  // It sends the query as received.
  const hash = url.hash.slice(1);
  const isEditorHash = host === EDITOR_HOST && hash !== '' && chartQueries(hash, undefined).length > 0;
  return isEditorHash ? [hash.slice(hash.indexOf('?') + 1)] : [];
}

/** URLs of a srcset, split as the browser does. */
function srcsetUrls(srcset) {
  return [...srcset.matchAll(SRCSET_CANDIDATE)].map(match => match[1]);
}

/** CSS function nodes of `nodes`, nested ones included. */
function cssFunctions(nodes) {
  return nodes.flatMap(node => (node.type === 'function' ? [node, ...cssFunctions(node.nodes)] : []));
}

/** CSS url() and image-set() URLs, with their place. */
function cssUrls(css) {
  return cssFunctions(valueParser(css).nodes).flatMap(node => {
    const name = node.value.toLowerCase();
    const place = { index: node.sourceIndex, end: node.sourceEndIndex };
    if (name === CSS_URL_FUNCTION) {
      return node.nodes.filter(child => CSS_URL_NODES.has(child.type)).map(child => ({ ...place, url: child.value, kind: 'url()' }));
    }
    const strings = CSS_IMAGE_SET_FUNCTIONS.has(name) ? node.nodes.filter(child => child.type === 'string') : [];
    return strings.map(child => ({ ...place, url: child.value, kind: 'image-set()' }));
  });
}

/** The URL a meta refresh navigates to, or none. */
function metaRefreshUrls(content) {
  const rest = content.replace(META_REFRESH_PREFIX, '');
  const quote = rest.at(0);
  // A quoted URL ends at its closing quote.
  const unquoted = QUOTES.has(quote) ? rest.slice(1).split(quote, 1) : [rest];
  const url = unquoted.at(0).trim();
  return url === '' ? [] : [url];
}

function attributeUrls(element, name, attribute) {
  const isMetaContent = element.name === 'meta' && name === 'content';
  const isRefresh = isMetaContent && String(element.attribs['http-equiv']).toLowerCase() === REFRESH;
  if (isRefresh) {
    return metaRefreshUrls(attribute);
  }
  if (URL_ATTRIBUTES.has(name) || isMetaContent) {
    return [attribute];
  }
  if (SRCSET_ATTRIBUTES.has(name)) {
    return srcsetUrls(attribute);
  }
  if (name === PING_ATTRIBUTE) {
    return attribute.split(WHITESPACE_RUN).filter(url => url !== '');
  }
  return name === 'style' ? cssUrls(attribute).map(cssUrl => cssUrl.url) : [];
}

/** Chart requests of `urls`, found at `place.index` of `place.text`. */
function requestsAt(place, urls, base) {
  const requests = urls.flatMap(url => chartQueries(url, base).map(query => ({ where: place.where, url, query })));
  // Bundles are large: compute the line for requests only.
  return requests.length > 0 ? requests.map(request => ({ ...request, line: lineAt(place.text, place.index) })) : [];
}

function chartRequestsInCss(css, base) {
  return cssUrls(css).flatMap(cssUrl => requestsAt({ text: css, index: cssUrl.index, where: cssUrl.kind }, [cssUrl.url], base));
}

/** Chart host URLs written in `text`. */
function chartHostUrls(text) {
  return [...text.matchAll(CHART_HOST_URL)].map(match => ({ index: match.index, url: match.at(0) }));
}

/**
 * Chart queries a page renders.
 * They are in its text nodes, code blocks and attributes.
 * Each text is read alone.
 * No prose is glued to a URL.
 */
function renderedChartQueries(html, base) {
  const document = parseDocument(html);
  const elements = DomUtils.findAll(() => true, document.children);
  const texts = DomUtils.filter(isRenderedText, document.children).map(node => node.data);
  const code = elements.filter(element => CODE_ELEMENTS.has(element.name)).map(element => DomUtils.textContent(element));
  const attributes = elements.flatMap(element => Object.values(element.attribs));
  return [...texts, ...code, ...attributes].flatMap(chartHostUrls).flatMap(hostUrl => chartQueries(hostUrl.url, base));
}

/**
 * String and template values of a script, decoded by acorn.
 * `prop` is the URL prop set to the value.
 */
function jsStrings(js) {
  const tokens = [...acorn.tokenizer(js, JS_OPTIONS)];
  return tokens.flatMap((token, index) => {
    if (!JS_STRING_TOKENS.has(token.type)) {
      return [];
    }
    const key = index >= 2 && tokens[index - 1].type === acorn.tokTypes.colon ? String(tokens[index - 2].value) : '';
    const text = typeof token.value === 'string' ? token.value.replaceAll(JSON_SLASH, '/') : '';
    return [{ index: token.start, text, prop: JS_URL_PROPS.has(key) ? key : '' }];
  });
}

function propUrls(string) {
  if (string.prop === '') {
    return [];
  }
  return JS_SRCSET_PROPS.has(string.prop) ? srcsetUrls(string.text) : [string.text];
}

/**
 * Chart requests of a JS bundle or inline script.
 * They are URL props, url() and image-set() in strings.
 * The browser sets a chart URL that no page renders.
 * `<BrowserOnly>` does that: such a URL counts too.
 * Text children are rendered, so they are not requests.
 */
function chartRequestsInJs(js, base, renderedQueries) {
  return jsStrings(js).flatMap(string => {
    const place = where => ({ text: js, index: string.index, where });
    const props = requestsAt(place('JS URL prop'), propUrls(string), base);
    const css = cssUrls(string.text);
    const styles = css.flatMap(cssUrl => requestsAt(place(`JS ${cssUrl.kind}`), [cssUrl.url], base));
    const known = new Set([...props, ...styles].map(request => request.query));
    const textUrls = chartHostUrls(string.text).filter(url => !css.some(cssUrl => url.index >= cssUrl.index && url.index < cssUrl.end));
    const textRequests = textUrls.flatMap(url => requestsAt(place('JS string no page renders'), [url.url], base));
    const clientOnly = textRequests.filter(request => !renderedQueries.has(request.query) && !known.has(request.query));
    return [...props, ...styles, ...clientOnly];
  });
}

// Nothing renders the text of an inline script.
// So every chart URL in it counts.
const NOTHING_RENDERED = new Set();
const RAW_TEXT_CHECKERS = new Map([
  ['style', chartRequestsInCss],
  ['script', (js, base) => chartRequestsInJs(js, base, NOTHING_RENDERED)],
]);

/** Chart requests of an inline `<style>` or `<script>`. */
function rawTextRequests(html, element, base) {
  const isRawText = RAW_TEXT_CHECKERS.has(element.name) && element.children.length > 0;
  if (!isRawText) {
    return [];
  }
  const lineOffset = lineAt(html, element.children.at(0).startIndex) - 1;
  const requests = RAW_TEXT_CHECKERS.get(element.name)(DomUtils.textContent(element), base);
  return requests.map(request => ({ ...request, line: request.line + lineOffset, where: `<${element.name}> ${request.where}` }));
}

/**
 * Chart requests of a page.
 * They are URL attributes, inline styles and scripts.
 * Text, code blocks included, is not a request.
 */
function chartRequestsInHtml(html, base) {
  const document = parseDocument(html, { withStartIndices: true });
  return DomUtils.findAll(() => true, document.children).flatMap(element => {
    const attributeRequests = Object.entries(element.attribs).flatMap(([name, attribute]) => {
      const place = { text: html, index: element.startIndex, where: `<${element.name} ${name}>` };
      return requestsAt(place, attributeUrls(element, name, attribute), base);
    });
    return [...attributeRequests, ...rawTextRequests(html, element, base)];
  });
}

const CHECKERS = new Map([
  ['.html', chartRequestsInHtml],
  ['.css', chartRequestsInCss],
  ['.js', chartRequestsInJs],
]);

// What to change by hand, per built request state.
const BUILT_FIXES = new Map([
  [
    'signable',
    'Unsigned or invalid in the build only, the signer cannot rewrite them: ' +
      'write each one as a markdown image or a quoted src/href attribute and sign it, or sign it by hand',
  ],
  ['broken', 'Cut by "#": encode "#" as %23 by hand'],
  ['foreign', 'Signed by another account: use icac=documentation and its ichm by hand'],
]);

function readFile(file) {
  const relative = path.relative(BUILD_DIR, file);
  // comply-ignore: security-detect-non-literal-fs-filename — file comes from listFiles(BUILD_DIR)
  const text = fs.readFileSync(file, 'utf8');
  if (Buffer.byteLength(text) > MAX_FILE_BYTES) {
    fail(`build/${relative} is larger than ${MAX_FILE_BYTES} bytes`);
  }
  return {
    file: `build/${relative}`,
    extension: path.extname(file),
    text,
    base: `${SITE_URL}${relative.split(path.sep).join('/')}`,
  };
}

/** Chart requests of a file. Unparsable JS stops the check. */
function fileRequests(built, renderedQueries) {
  try {
    return CHECKERS.get(built.extension)(built.text, built.base, renderedQueries);
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }
    return fail(`${built.file}: its JS does not parse, so its chart URLs cannot be checked (${error.message})`);
  }
}

function checkFile(built, renderedQueries) {
  return fileRequests(built, renderedQueries).map(request => ({
    ...request,
    ...urlState(request.query, KEYS),
    file: built.file,
  }));
}

function main() {
  const files = listFiles(BUILD_DIR, EXTENSIONS);
  if (!files.some(file => file.endsWith('.html'))) {
    fail('build/ has no HTML page: run `docusaurus build` first');
  }
  if (files.length > MAX_FILES) {
    fail(`More than ${MAX_FILES} files to check in build/`);
  }
  const builtFiles = files.map(readFile);
  const pages = builtFiles.filter(built => built.extension === '.html');
  const renderedQueries = new Set(pages.flatMap(page => renderedChartQueries(page.text, page.base)));
  const requests = builtFiles.flatMap(built => checkFile(built, renderedQueries));
  const bad = requests.filter(request => request.state !== 'signed');
  const lines = bad.map(request => {
    const reason = Object.hasOwn(request, 'problem') ? request.problem : `${request.state} chart request`;
    const url = request.url.length > MAX_SHOWN_URL ? `${request.url.slice(0, MAX_SHOWN_URL)}…` : request.url;
    return `${request.file}:${request.line}: ${reason} in ${request.where}: ${url}`;
  });
  report('Built chart requests', lines, requests.map(request => request.state));
  if (bad.length > 0) {
    const leftUnsigned = bad.map(request => ({
      fix: BUILT_FIXES.has(request.state) ? request.state : 'signable',
      location: `${request.file}:${request.line}`,
    }));
    const intro = 'The built site requests charts that count against the free rate limit.';
    console.error([intro, ...fixLines(leftUnsigned, BUILT_FIXES)].join('\n'));
    process.exit(1);
  }
}

module.exports = { chartRequestsInHtml, chartRequestsInCss, chartRequestsInJs, renderedChartQueries };

if (require.main === module) {
  main();
}
