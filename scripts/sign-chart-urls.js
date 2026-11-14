#!/usr/bin/env node
/**
 * Signs the chart URLs that the documentation pages load.
 * Usage: see "Signed chart URLs" in CLAUDE.md.
 */

const fs = require('node:fs');
const path = require('node:path');
const querystring = require('node:querystring');
const { decodeHTMLStrict } = require('entities');
const { sign } = require('./generate-gallery');

// comply-ignore: node-no-process-env — single config read, like generate-gallery.js
const { ACCOUNT_ID, SECRET_KEY } = process.env;
const DOCUMENTATION_ACCOUNT = 'documentation';
const KEYS = { accountId: DOCUMENTATION_ACCOUNT, secretKey: SECRET_KEY };

const REPO_ROOT = path.join(__dirname, '..');
const ROOTS = ['docs', 'src'].map(dir => path.join(REPO_ROOT, dir));
const EXTENSIONS = new Set(['.md', '.mdx', '.html']);
const MAX_FILES = 2000;
const MAX_DEPTH = 10;
const MAX_FILE_BYTES = 2 * 1024 * 1024;
const MAX_REPORTED = 200;
const MAX_LISTED = 5;

// A chart URL start, up to its query.
// Editor links load a chart too.
// They use the same path, or the URL as hash.
// The lookbehind skips nested URLs.
const CHART_URL =
  /(?<![\w./%-])https:\/\/(?:editor\.image-charts\.com\/[^\s"'()#]*#https:\/\/?|(?:editor\.)?)image-charts\.com\/chart(?:\.js\/[\w.]+)?\?/g;
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
// Characters the browser removes from a URL.
const TAB_OR_NEWLINE = /[\t\n\r]/g;
const SIGNATURE_PARAMS = new Set(['icac', 'ichm']);

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
// What to do for each kind of URL left unsigned.
const SOURCE_FIXES = new Map([
  ['signable', 'Unsigned or invalid, the signer fixes them: run `source .envrc && npm run sign:chart-urls`'],
  ['generated', 'In GENERATED-*.md, never rewritten: fix their generator'],
  ['broken', 'Cut by "#", the signer cannot rewrite them: encode "#" as %23 by hand'],
  ['foreign', 'Signed by another account, the signer cannot rewrite them: remove icac and ichm by hand, then sign'],
]);

/** Files of `dir` with one of `extensions`, recursively. */
function listFiles(dir, extensions, depth = 0) {
  if (depth > MAX_DEPTH) {
    throw new Error(`${dir} is nested deeper than ${MAX_DEPTH} levels`);
  }
  // comply-ignore: security-detect-non-literal-fs-filename — dir is a root of the caller or one of its subdirectories
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(dirent => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      return listFiles(fullPath, extensions, depth + 1);
    }
    return extensions.has(path.extname(dirent.name)) ? [fullPath] : [];
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

/**
 * Query the browser sends for a source URL.
 * Character references are decoded, as MDX does. A `#` stays: the browser cuts the URL there.
 */
function sentQuery(rawQuery, kind) {
  const decoded = decodeHTMLStrict(rawQuery);
  const query =
    kind === 'markdown' ? decoded.replaceAll(MARKDOWN_ESCAPE, '$1').replaceAll(REMARK_ENCODED, encodeURIComponent) : decoded;
  return query.replaceAll(TAB_OR_NEWLINE, '').replaceAll(BROWSER_ENCODED, encodeURIComponent);
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

/**
 * State of the chart request the server receives.
 * A problem is one the signer cannot fix.
 * Validity is only known with the secret key.
 */
function urlState(query, { accountId, secretKey }) {
  if (query.includes('#')) {
    return { state: 'broken', problem: 'unencoded "#" in a chart URL query: the browser cuts the URL there, encode it as %23' };
  }
  const params = new URLSearchParams(query);
  const icac = params.has('icac') ? params.get('icac') : '';
  if (icac !== '' && icac !== accountId) {
    return { state: 'foreign', problem: `chart URL signed by icac=${icac}, not ${accountId}` };
  }
  if (icac === '' || !params.get('ichm')) {
    return { state: 'unsigned' };
  }
  const isInvalid = Boolean(secretKey) && !isSignatureValid(params.get('ichm'), secretKey, query);
  return { state: isInvalid ? 'invalid' : 'signed' };
}

function describeUrl(text, match, before, keys) {
  const start = match.index;
  const kind = URL_KINDS.get(before);
  const end = urlEnd(text, start, before);
  const base = match.at(0);
  const rawQuery = text.slice(start + base.length, end);
  return {
    start,
    end,
    kind,
    rawQuery,
    base,
    line: text.slice(0, start).split('\n').length,
    separator: rawQuery.includes('&amp;') ? '&amp;' : '&',
    ...urlState(sentQuery(rawQuery, kind), keys),
  };
}

/** Every chart URL of `text` that the browser requests. */
function scan(text, keys) {
  const code = codeRanges(text);
  return [...text.matchAll(CHART_URL)].flatMap(match => {
    const before = text.slice(Math.max(0, match.index - 2), match.index);
    const isInCode = code.some(([from, to]) => match.index >= from && match.index < to);
    return URL_KINDS.has(before) && !isInCode ? [describeUrl(text, match, before, keys)] : [];
  });
}

/** Source form of `url` with icac and a fresh ichm. */
function signUrl(url, { accountId, secretKey }) {
  const kept = url.rawQuery.split(url.separator).filter(segment => !SIGNATURE_PARAMS.has(segment.split('=')[0]));
  const query = [...kept, `icac=${accountId}`].join(url.separator);
  const signature = sign(secretKey, canonicalQuery(sentQuery(query, url.kind)));
  return `${url.base}${query}${url.separator}ichm=${signature}`;
}

/**
 * Signs the unsigned and invalid chart URLs of `text`.
 * Returns the new text and the URLs as found.
 */
function signText(text, keys) {
  const urls = scan(text, keys);
  const toSign = urls.filter(url => FIX_LABELS.has(url.state));
  return { urls, text: replaceUrls(text, toSign, url => signUrl(url, keys)) };
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

function urlMessage(relative, url, rewrite) {
  if (url.problem) {
    return `${relative}:${url.line}: ${url.problem}${rewrite ? ', left as written' : ''}`;
  }
  const checkLabel = `${url.state} chart URL`;
  return `${relative}:${url.line}: ${rewrite ? FIX_LABELS.get(url.state) : checkLabel}`;
}

/** What signing (or checking) `file` gives, without writing it. */
function planFile(file, check) {
  const relative = path.relative(REPO_ROOT, file);
  // comply-ignore: security-detect-non-literal-fs-filename — file comes from listFiles(ROOTS)
  const text = fs.readFileSync(file, 'utf8');
  if (Buffer.byteLength(text) > MAX_FILE_BYTES) {
    throw new Error(`${relative} is larger than ${MAX_FILE_BYTES} bytes`);
  }
  // Only their generator writes GENERATED-*.md files.
  const isGenerated = path.basename(file).startsWith('GENERATED-');
  const rewrite = !check && !isGenerated;
  const signed = rewrite ? signText(text, KEYS) : { urls: scan(text, KEYS), text };
  const notSigned = signed.urls.filter(url => url.state !== 'signed');
  const leftUnsigned = notSigned.filter(url => !rewrite || url.problem);
  const fixOf = url => {
    if (url.problem) {
      return url.state;
    }
    return isGenerated ? 'generated' : 'signable';
  };
  return {
    file,
    text: signed.text,
    isChanged: signed.text !== text,
    states: signed.urls.map(url => url.state),
    leftUnsigned: leftUnsigned.map(url => ({ fix: fixOf(url), location: `${relative}:${url.line}` })),
    messages: notSigned.map(url => urlMessage(relative, url, rewrite)),
  };
}

/**
 * One line per kind of URL left unsigned.
 * Each says what to change, then where.
 */
function fixLines(leftUnsigned, fixes) {
  // Every fix of `leftUnsigned` is a key of `fixes`.
  const locationsByFix = new Map(Array.from(fixes.keys(), fix => [fix, []]));
  for (const url of leftUnsigned) {
    // comply-ignore: no-mutating-methods — fills the local arrays of the line above, one pass instead of a filter per fix
    locationsByFix.get(url.fix).push(url.location);
  }
  return [...fixes].flatMap(([fix, todo]) => {
    const locations = locationsByFix.get(fix);
    const more = locations.length > MAX_LISTED ? `, and ${locations.length - MAX_LISTED} more` : '';
    return locations.length > 0 ? [`${todo} (${locations.slice(0, MAX_LISTED).join(', ')}${more})`] : [];
  });
}

function report(messages, states) {
  const count = state => states.filter(urlStateName => urlStateName === state).length;
  for (const message of messages.slice(0, MAX_REPORTED)) {
    console.log(message);
  }
  if (messages.length > MAX_REPORTED) {
    console.log(`... and ${messages.length - MAX_REPORTED} more`);
  }
  const scope = SECRET_KEY ? '' : ' (presence only, signatures not checked)';
  console.log(
    `Chart URLs: ${count('signed')} signed, ${count('unsigned')} unsigned, ${count('invalid')} invalid, ` +
      `${count('foreign')} of another account, ${count('broken')} cut by "#"${scope}`
  );
}

function main() {
  const check = process.argv.includes('--check');
  const hasDocumentationKey = ACCOUNT_ID === DOCUMENTATION_ACCOUNT && Boolean(SECRET_KEY);
  if (!check && !hasDocumentationKey) {
    console.error(`Error: ACCOUNT_ID=${DOCUMENTATION_ACCOUNT} and its SECRET_KEY are required to sign chart URLs: source .envrc`);
    process.exit(1);
  }
  const files = ROOTS.flatMap(root => listFiles(root, EXTENSIONS));
  if (files.length > MAX_FILES) {
    throw new Error(`More than ${MAX_FILES} files to scan`);
  }
  // Every file is planned before any write.
  // An error then leaves the tree as it was.
  const plans = files.map(file => planFile(file, check));
  for (const plan of plans.filter(filePlan => filePlan.isChanged)) {
    // comply-ignore: security-detect-non-literal-fs-filename — plan.file comes from listFiles(ROOTS)
    fs.writeFileSync(plan.file, plan.text);
  }
  report(
    plans.flatMap(plan => plan.messages),
    plans.flatMap(plan => plan.states)
  );
  const leftUnsigned = plans.flatMap(plan => plan.leftUnsigned);
  if (leftUnsigned.length > 0) {
    const intro = 'Chart URLs left unsigned count against the free rate limit.';
    console.error([intro, ...fixLines(leftUnsigned, SOURCE_FIXES)].join('\n'));
    process.exit(1);
  }
}

module.exports = { scan, signText, urlState, isSignatureValid, listFiles, fixLines };

if (require.main === module) {
  main();
}
