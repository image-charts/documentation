#!/usr/bin/env node
/**
 * Checks the chart requests of the built site.
 * Each one must be signed by the documentation account.
 * Usage: see "Signed chart URLs" in CLAUDE.md.
 */

const fs = require('node:fs');
const path = require('node:path');
const { parseDocument, DomUtils } = require('htmlparser2');
const { urlState, listFiles } = require('./sign-chart-urls');

// comply-ignore: node-no-process-env — single config read, like sign-chart-urls.js
const { SECRET_KEY } = process.env;
const KEYS = { accountId: 'documentation', secretKey: SECRET_KEY };

const BUILD_DIR = path.join(__dirname, '..', 'build');
const SITE_URL = 'https://documentation.image-charts.com/';
const EXTENSIONS = new Set(['.html', '.css', '.js']);
const MAX_FILES = 5000;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const MAX_REPORTED = 200;
const MAX_SHOWN_URL = 160;

const CHART_HOSTS = new Set(['image-charts.com', 'www.image-charts.com']);
const EDITOR_HOST = 'editor.image-charts.com';
const WEB_PROTOCOLS = new Set(['http:', 'https:']);
// `/chart` or `/chart.js/<version>`, slashes merged.
const CHART_PATH = /^\/chart(?:\.js\/[^/]+)?\/?$/i;
const REPEATED_SLASHES = /\/{2,}/g;
const TRAILING_DOT = /\.$/;
// Attributes holding one URL, then attributes holding a srcset.
const URL_ATTRIBUTES = new Set(['src', 'href', 'poster', 'data', 'background', 'action', 'formaction', 'xlink:href']);
const SRCSET_ATTRIBUTES = new Set(['srcset', 'imagesrcset']);
// A srcset candidate: its URL, then trailing commas or descriptors.
// The URL is a run of non-whitespace.
const SRCSET_CANDIDATE = /[\s,]*(\S*[^\s,])(?:,+(?=\s|$)|\s+[^,]*)?/g;
// A CSS url(): double-quoted, single-quoted or bare.
const CSS_URL = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)\s"']*))/gi;
// A JS URL prop, up to its opening quote.
const JS_URL_PROP = /\b(?:src|href|srcSet|srcset|poster|imageSrcSet)\s*:\s*["'`]/g;
// A JS string literal at the text start.
// The capture is its body, escapes included.
const JS_STRING_LITERALS = new Map([
  // A double-quoted string.
  ['"', /^"((?:[^"\\]|\\[\s\S])*)"/],
  // A single-quoted string.
  ["'", /^'((?:[^'\\]|\\[\s\S])*)'/],
  // A template string.
  ['`', /^`((?:[^`\\]|\\[\s\S])*)`/],
]);
const JS_ESCAPED_QUOTE = /\\(["'])/g;
// A JS escape: `\u{…}`, `\uXXXX`, `\xXX`, or one escaped character.
const JS_ESCAPE = /\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|[\s\S])/g;
// The marks around the hex digits of an escape.
const JS_CODE_MARKS = /^u\{?|^x|\}$/g;
const JS_SIMPLE_ESCAPES = new Map([
  ['n', '\n'],
  ['r', '\r'],
  ['t', '\t'],
]);

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
    return [url.search.slice(1)];
  }
  // The editor requests the chart URL of its hash.
  // It sends the query as received.
  const hash = url.hash.slice(1).split('#', 1).at(0);
  const isEditorHash = host === EDITOR_HOST && hash !== '' && chartQueries(hash, undefined).length > 0;
  return isEditorHash ? [hash.slice(hash.indexOf('?') + 1)] : [];
}

/** URLs of a srcset, split as the browser does. */
function srcsetUrls(srcset) {
  return [...srcset.matchAll(SRCSET_CANDIDATE)].map(match => match[1]);
}

function cssUrls(css) {
  return [...css.matchAll(CSS_URL)].map(match => ({ index: match.index, url: match.slice(1).join('') }));
}

function attributeUrls(tag, name, attribute) {
  const isMetaContent = tag === 'meta' && name === 'content';
  if (URL_ATTRIBUTES.has(name) || isMetaContent) {
    return [attribute];
  }
  if (SRCSET_ATTRIBUTES.has(name)) {
    return srcsetUrls(attribute);
  }
  return name === 'style' ? cssUrls(attribute).map(found => found.url) : [];
}

function lineAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

/** Chart requests of `urls`, found at `place.index` of `place.text`. */
function requestsAt(place, urls, base) {
  const line = lineAt(place.text, place.index);
  return urls.flatMap(url => chartQueries(url, base).map(query => ({ line, where: place.where, url, query })));
}

function chartRequestsInCss(css, base) {
  return cssUrls(css).flatMap(found => requestsAt({ text: css, index: found.index, where: 'url()' }, [found.url], base));
}

function unescapeJs(escape, sequence) {
  if (sequence.length > 1) {
    return String.fromCodePoint(Number.parseInt(sequence.replaceAll(JS_CODE_MARKS, ''), 16));
  }
  return JS_SIMPLE_ESCAPES.has(sequence) ? JS_SIMPLE_ESCAPES.get(sequence) : sequence;
}

/** Value of the JS string literal opening at `quoteIndex`. */
function jsStringAt(js, quoteIndex) {
  const literal = js.slice(quoteIndex).match(JS_STRING_LITERALS.get(js.at(quoteIndex)));
  return literal ? literal[1].replaceAll(JS_ESCAPE, unescapeJs) : '';
}

/**
 * Chart requests of a JS bundle.
 * They are URL props and CSS url() in strings.
 * Text children are not requests.
 */
function chartRequestsInJs(js, base) {
  const props = [...js.matchAll(JS_URL_PROP)].flatMap(match => {
    const propString = jsStringAt(js, match.index + match.at(0).length - 1);
    const urls = match.at(0).toLowerCase().includes('srcset') ? srcsetUrls(propString) : [propString];
    return requestsAt({ text: js, index: match.index, where: 'JS URL prop' }, urls, base);
  });
  const unquoted = js.replaceAll(JS_ESCAPED_QUOTE, '$1');
  const styles = cssUrls(unquoted).flatMap(found =>
    requestsAt({ text: unquoted, index: found.index, where: 'JS url()' }, [found.url], base)
  );
  return [...props, ...styles];
}

const RAW_TEXT_CHECKERS = new Map([
  ['style', chartRequestsInCss],
  ['script', chartRequestsInJs],
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
      return requestsAt(place, attributeUrls(element.name, name, attribute), base);
    });
    return [...attributeRequests, ...rawTextRequests(html, element, base)];
  });
}

const CHECKERS = new Map([
  ['.html', chartRequestsInHtml],
  ['.css', chartRequestsInCss],
  ['.js', chartRequestsInJs],
]);

function checkFile(file) {
  const relative = path.relative(BUILD_DIR, file);
  // comply-ignore: security-detect-non-literal-fs-filename — file comes from listFiles(BUILD_DIR)
  const text = fs.readFileSync(file, 'utf8');
  if (Buffer.byteLength(text) > MAX_FILE_BYTES) {
    throw new Error(`build/${relative} is larger than ${MAX_FILE_BYTES} bytes`);
  }
  const base = `${SITE_URL}${relative.split(path.sep).join('/')}`;
  return CHECKERS.get(path.extname(file))(text, base).map(request => ({
    ...request,
    ...urlState(request.query, KEYS),
    file: `build/${relative}`,
  }));
}

function main() {
  const files = listFiles(BUILD_DIR, EXTENSIONS);
  if (!files.some(file => file.endsWith('.html'))) {
    throw new Error('build/ has no HTML page: run `docusaurus build` first');
  }
  if (files.length > MAX_FILES) {
    throw new Error(`More than ${MAX_FILES} files to check in build/`);
  }
  const requests = files.flatMap(checkFile);
  const bad = requests.filter(request => request.state !== 'signed');
  for (const request of bad.slice(0, MAX_REPORTED)) {
    const reason = Object.hasOwn(request, 'problem') ? request.problem : `${request.state} chart request`;
    const url = request.url.length > MAX_SHOWN_URL ? `${request.url.slice(0, MAX_SHOWN_URL)}…` : request.url;
    console.log(`${request.file}:${request.line}: ${reason} in ${request.where}: ${url}`);
  }
  if (bad.length > MAX_REPORTED) {
    console.log(`... and ${bad.length - MAX_REPORTED} more`);
  }
  const count = state => requests.filter(request => request.state === state).length;
  const scope = SECRET_KEY ? '' : ' (presence only, signatures not checked)';
  console.log(
    `Built chart requests: ${count('signed')} signed, ${count('unsigned')} unsigned, ${count('invalid')} invalid, ` +
      `${count('foreign')} of another account${scope}`
  );
  if (bad.length > 0) {
    console.error(
      'The built site requests charts that count against the free rate limit: ' +
        'run `source .envrc && npm run sign:chart-urls`, or sign by hand a shape it cannot rewrite (see CLAUDE.md)'
    );
    process.exit(1);
  }
}

module.exports = { chartRequestsInHtml, chartRequestsInCss, chartRequestsInJs };

if (require.main === module) {
  main();
}
