#!/usr/bin/env node
/**
 * Signs the chart URLs that the documentation pages load.
 * Usage: see "Signed chart URLs" in CLAUDE.md.
 */

const fs = require('node:fs');
const path = require('node:path');
const querystring = require('node:querystring');
const { sign } = require('./generate-gallery');

// comply-ignore: node-no-process-env — single config read, like generate-gallery.js
const { ACCOUNT_ID, SECRET_KEY } = process.env;

const REPO_ROOT = path.join(__dirname, '..');
const ROOTS = ['docs', 'src'].map(dir => path.join(REPO_ROOT, dir));
const EXTENSIONS = new Set(['.md', '.mdx', '.html']);
const MAX_FILES = 2000;
const MAX_DEPTH = 10;
const MAX_FILE_BYTES = 2 * 1024 * 1024;
const MAX_REPORTED = 200;

// A chart URL start: `/chart?` or `/chart.js/<version>?`.
// The lookbehind skips editor.image-charts.com and URLs nested in other URLs.
const CHART_URL = /(?<![\w./%-])https:\/\/image-charts\.com\/chart(?:\.js\/[\w.]+)?\?/g;
// A fenced code block, up to its closing fence.
// An unclosed one runs to the end of the text.
const FENCED_CODE = /^[ \t]*(`{3,}|~{3,})[\s\S]*?(?:^[ \t]*\1|(?![\s\S]))/gm;
// An inline code span on one line.
const INLINE_CODE = /(?<!`)(`+)[^`\n][^\n]*?(?<!`)\1(?!`)/g;
const NOT_NEWLINE = /[^\n]/g;
const WHITESPACE = /\s/;
// Markdown destination tokens: escapes, parentheses, other characters.
const DESTINATION_TOKEN = /\\.|[()]|[^\\()]+/g;
// A markdown backslash escape of an ASCII punctuation character.
const MARKDOWN_ESCAPE = /\\([!-/:-@[-`{-~])/g;
// Characters remark percent-encodes: a lone `%`, or unsafe ones.
const REMARK_ENCODED = /%(?![0-9A-Za-z]{2})|[^!#$&-;=?-Z_a-z~%]/gu;
// Characters the browser percent-encodes in a query.
// Controls, space, quotes, angle brackets and non-ASCII.
const BROWSER_ENCODED = /[\0- "'<>\u{7F}-\u{10FFFF}]/gu;

// The two characters before a URL tell where it sits.
const URL_KINDS = new Map([
  ['](', 'markdown'],
  ['="', 'attribute'],
  ["='", 'attribute'],
]);
const FIX_LABELS = new Map([
  ['unsigned', 'signed'],
  ['invalid', 're-signed'],
]);

function listFiles(dir, depth = 0) {
  if (depth > MAX_DEPTH) {
    throw new Error(`${dir} is nested deeper than ${MAX_DEPTH} levels`);
  }
  // comply-ignore: security-detect-non-literal-fs-filename — dir is ROOTS or one of their subdirectories
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(dirent => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      return listFiles(fullPath, depth + 1);
    }
    return EXTENSIONS.has(path.extname(dirent.name)) ? [fullPath] : [];
  });
}

function rangesOf(regex, text) {
  return [...text.matchAll(regex)].map(match => [match.index, match.index + match.at(0).length]);
}

/** Ranges of fenced code blocks and inline code spans. */
function codeRanges(text) {
  const withoutFences = text.replaceAll(FENCED_CODE, block => block.replaceAll(NOT_NEWLINE, ' '));
  return [...rangesOf(FENCED_CODE, text), ...rangesOf(INLINE_CODE, withoutFences)];
}

/** Length of a destination: it stops at the first unbalanced `)`. */
function destinationLength(tokens, index = 0, depth = 0) {
  const token = tokens.at(index);
  const closesDestination = token === ')' && depth === 0;
  if (index >= tokens.length || closesDestination) {
    return 0;
  }
  const nextDepth = depth + Number(token === '(') - Number(token === ')');
  return token.length + destinationLength(tokens, index + 1, nextDepth);
}

/** End of the URL starting at `start`, from its kind. */
function urlEnd(text, start, before) {
  if (URL_KINDS.get(before) === 'markdown') {
    const untilWhitespace = text.slice(start).split(WHITESPACE, 1).at(0);
    const tokens = untilWhitespace.match(DESTINATION_TOKEN);
    return start + destinationLength(tokens);
  }
  const closingQuote = text.indexOf(before[1], start);
  return closingQuote === -1 ? text.length : closingQuote;
}

/** Query the browser sends for a source URL. */
function sentQuery(rawQuery, kind) {
  const unescaped = rawQuery.replaceAll('&amp;', '&');
  const query =
    kind === 'markdown' ? unescaped.replaceAll(MARKDOWN_ESCAPE, '$1').replaceAll(REMARK_ENCODED, encodeURIComponent) : unescaped;
  if (query.includes('#')) {
    throw new Error('unencoded "#" in a chart URL query: the browser cuts the URL there');
  }
  return query.replaceAll(BROWSER_ENCODED, encodeURIComponent);
}

/** The decoded query, re-joined without encoding. */
function canonicalQuery(query, decode = querystring.unescape) {
  const params = querystring.parse(query, '&', '=', { decodeURIComponent: decode, maxKeys: 1000 });
  return querystring.stringify(params, '&', '=', { encodeURIComponent: value => value });
}

/** Mirrors the server check: raw, then decoded, then double-decoded query. */
function isSignatureValid(ichm, secretKey, query) {
  const queryWithoutIchm = query
    .split('&')
    .filter(param => param.split('=')[0] !== 'ichm')
    .join('&');
  return [
    queryWithoutIchm,
    canonicalQuery(queryWithoutIchm),
    canonicalQuery(queryWithoutIchm, value => unescape(unescape(value))),
  ].some(candidate => sign(secretKey, candidate) === ichm);
}

/** Signature state; validity is only known with the secret key. */
function signatureState(params, secretKey, query) {
  if (!params.has('ichm')) {
    return 'unsigned';
  }
  const isInvalid = Boolean(secretKey) && !isSignatureValid(params.get('ichm'), secretKey, query);
  return isInvalid ? 'invalid' : 'signed';
}

function describeUrl(text, match, before, secretKey) {
  const start = match.index;
  const kind = URL_KINDS.get(before);
  const end = urlEnd(text, start, before);
  const base = match.at(0);
  const rawQuery = text.slice(start + base.length, end);
  const params = new URLSearchParams(rawQuery.replaceAll('&amp;', '&'));
  return {
    start,
    end,
    kind,
    rawQuery,
    params,
    base,
    line: text.slice(0, start).split('\n').length,
    separator: rawQuery.includes('&amp;') ? '&amp;' : '&',
    state: signatureState(params, secretKey, sentQuery(rawQuery, kind)),
  };
}

/** Every chart URL of `text` that the browser requests. */
function scan(text, secretKey) {
  const code = codeRanges(text);
  return [...text.matchAll(CHART_URL)].flatMap(match => {
    const before = text.slice(Math.max(0, match.index - 2), match.index);
    const isInCode = code.some(([from, to]) => match.index >= from && match.index < to);
    return URL_KINDS.has(before) && !isInCode ? [describeUrl(text, match, before, secretKey)] : [];
  });
}

/** Source form of `url` with icac and a fresh ichm. */
function signUrl(url, accountId, secretKey) {
  const icac = url.params.get('icac');
  if (url.params.has('icac') && icac !== accountId) {
    throw new Error(`icac=${icac} is not the documentation account`);
  }
  const kept = url.rawQuery.split(url.separator).filter(segment => segment.split('=')[0] !== 'ichm');
  const segments = url.params.has('icac') ? kept : [...kept, `icac=${accountId}`];
  const query = segments.join(url.separator);
  const signature = sign(secretKey, canonicalQuery(sentQuery(query, url.kind)));
  return `${url.base}${query}${url.separator}ichm=${signature}`;
}

/** `text` with each URL replaced by `replace(url)`. */
function replaceUrls(text, urls, replace) {
  const previousEnd = index => (index === 0 ? 0 : urls[index - 1].end);
  const replaced = urls.map((url, index) => {
    const unchanged = text.slice(previousEnd(index), url.start);
    return unchanged + replace(url);
  });
  return replaced.join('') + text.slice(previousEnd(urls.length));
}

function signFile(file, check) {
  const relative = path.relative(REPO_ROOT, file);
  // comply-ignore: security-detect-non-literal-fs-filename — file comes from listFiles(ROOTS)
  const text = fs.readFileSync(file, 'utf8');
  if (Buffer.byteLength(text) > MAX_FILE_BYTES) {
    throw new Error(`${relative} is larger than ${MAX_FILE_BYTES} bytes`);
  }
  const urls = scan(text, SECRET_KEY);
  const toFix = urls.filter(url => url.state !== 'signed');
  // Only their generator writes GENERATED-*.md files.
  const rewrite = !check && !path.basename(file).startsWith('GENERATED-');
  if (rewrite && toFix.length > 0) {
    // comply-ignore: security-detect-non-literal-fs-filename — file comes from listFiles(ROOTS)
    fs.writeFileSync(file, replaceUrls(text, toFix, url => signUrl(url, ACCOUNT_ID, SECRET_KEY)));
  }
  return {
    states: urls.map(url => url.state),
    messages: toFix.map(url => {
      const label = rewrite ? FIX_LABELS.get(url.state) : `${url.state} chart URL`;
      return `${relative}:${url.line}: ${label}`;
    }),
  };
}

function report(messages, states) {
  const count = state => states.filter(urlState => urlState === state).length;
  for (const message of messages.slice(0, MAX_REPORTED)) {
    console.log(message);
  }
  if (messages.length > MAX_REPORTED) {
    console.log(`... and ${messages.length - MAX_REPORTED} more`);
  }
  const scope = SECRET_KEY ? '' : ' (presence only, signatures not checked)';
  console.log(`Chart URLs: ${count('signed')} signed, ${count('unsigned')} unsigned, ${count('invalid')} invalid${scope}`);
}

function main() {
  const check = process.argv.includes('--check');
  if (!check && (!ACCOUNT_ID || !SECRET_KEY)) {
    console.error('Error: ACCOUNT_ID and SECRET_KEY environment variables are required to sign chart URLs');
    process.exit(1);
  }
  const files = ROOTS.flatMap(root => listFiles(root));
  if (files.length > MAX_FILES) {
    throw new Error(`More than ${MAX_FILES} files to scan`);
  }
  const fileReports = files.map(file => signFile(file, check));
  const states = fileReports.flatMap(fileReport => fileReport.states);
  report(
    fileReports.flatMap(fileReport => fileReport.messages),
    states
  );
  if (check && states.some(state => state !== 'signed')) {
    console.error('Unsigned chart URLs count against the free rate limit: run `npm run sign:chart-urls`');
    process.exit(1);
  }
}

module.exports = { scan, sentQuery };

if (require.main === module) {
  main();
}
