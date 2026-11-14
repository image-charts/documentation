const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const querystring = require('node:querystring');
const { scan, signText } = require('./sign-chart-urls');
const { spawnScript } = require('./test-cli');

const KEYS = { accountId: 'documentation', secretKey: 'test-secret-key' };
const SIGNATURE = /(?:&|&amp;)icac=documentation(?:&|&amp;)ichm=([0-9a-f]{64})/g;

function hmac(secretKey, query) {
  return crypto.createHmac('sha256', secretKey).update(query).digest('hex');
}

/**
 * The server rule, restated from charts `_isSignatureValid`.
 * It tries the query without ichm as received.
 * Then decoded and re-joined, then decoded twice and re-joined.
 */
function serverAccepts(ichm, secretKey, query) {
  const withoutIchm = query
    .split('&')
    .filter(param => param.split('=')[0] !== 'ichm')
    .join('&');
  const rejoin = decode => {
    const params = querystring.parse(withoutIchm, '&', '=', { decodeURIComponent: decode, maxKeys: 1000 });
    return querystring.stringify(params, '&', '=', { encodeURIComponent: value => value });
  };
  return [withoutIchm, rejoin(querystring.unescape), rejoin(value => unescape(unescape(value)))].some(
    candidate => hmac(secretKey, candidate) === ichm
  );
}

/** The ichm values that `signText` appended, in order. */
function signatures(text) {
  return [...text.matchAll(SIGNATURE)].map(match => match[1]);
}

// Name, source line, then the query the browser sends.
// The appended icac and ichm are left out.
// Queries come from an MDX render, read through WHATWG URL.
const LOADED = [
  ['markdown image with &, |', '![a](https://image-charts.com/chart?cht=p&chd=t:1,2&chl=a|b&chs=100x100)', 'cht=p&chd=t:1,2&chl=a%7Cb&chs=100x100'],
  ['markdown link with parentheses', '[link](https://image-charts.com/chart?cht=p&chl=(a)b&chd=t:1,2&chs=100x100)', 'cht=p&chl=(a)b&chd=t:1,2&chs=100x100'],
  [
    'markdown image with a JSON c= config',
    '![js](https://image-charts.com/chart.js/2.8.0?bkg=white&c={"type":"pie","data":{"datasets":[{"data":[1,2]}]}})',
    'bkg=white&c=%7B%22type%22:%22pie%22,%22data%22:%7B%22datasets%22:%5B%7B%22data%22:%5B1,2%5D%7D%5D%7D%7D',
  ],
  [
    'HTML attribute with &amp; and &quot;',
    '<img src="https://image-charts.com/chart?cht=p&amp;chl=a&quot;b&amp;chd=t:1,2&amp;chs=100x100" />',
    'cht=p&chl=a%22b&chd=t:1,2&chs=100x100',
  ],
  ['HTML attribute with a newline', '<img src="https://image-charts.com/chart?cht=p&chd=t:1,2\n&chs=100x100" />', 'cht=p&chd=t:1,2&chs=100x100'],
  ['markdown image with &#38;', '![x](https://image-charts.com/chart?cht=p&#38;chd=t:1,2&chs=100x100)', 'cht=p&chd=t:1,2&chs=100x100'],
  [
    'editor link with the chart URL in its hash',
    '[e](https://editor.image-charts.com/?tab_viewer=image&tab_editor=form#https:/image-charts.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8)',
    'chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8',
  ],
  ['markdown image with a raw non-ASCII label', '![u](https://image-charts.com/chart?cht=p&chl=5€|20°C&chd=t:1,2)', 'cht=p&chl=5%E2%82%AC%7C20%C2%B0C&chd=t:1,2'],
  ['markdown image with a +', '![p](https://image-charts.com/chart?cht=p&chl=a+b&chd=t:1,2)', 'cht=p&chl=a+b&chd=t:1,2'],
  [
    'editor link with the chart query in its path',
    '[e](https://editor.image-charts.com/chart?cht=gv&chl=graph%20%7Ba%20--%20b;%7D&chs=700x200)',
    'cht=gv&chl=graph%20%7Ba%20--%20b;%7D&chs=700x200',
  ],
];

for (const [name, source, sentQuery] of LOADED) {
  test(`signs a ${name} so the server accepts what the browser sends`, () => {
    const { text } = signText(`Intro\n\n${source}\n`, KEYS);
    const [ichm] = signatures(text);
    assert.ok(ichm, `no icac=documentation&ichm= appended in:\n${text}`);
    assert.ok(serverAccepts(ichm, KEYS.secretKey, `${sentQuery}&icac=documentation&ichm=${ichm}`));
    assert.deepEqual(
      scan(text, KEYS).map(url => url.state),
      ['signed']
    );
  });
}

test('an editor link and the chart image it wraps are both signed', () => {
  const source =
    '[![qr](https://image-charts.com/chart?chs=150x150&cht=qr&chl=x)](https://editor.image-charts.com/?tab_viewer=image#https:/image-charts.com/chart?chs=150x150&cht=qr&chl=x)';
  const { text } = signText(source, KEYS);
  assert.equal(signatures(text).length, 2);
  assert.deepEqual(
    scan(text, KEYS).map(url => url.state),
    ['signed', 'signed']
  );
});

test('inline code and fenced code stay as written', () => {
  const source = [
    'Use `https://image-charts.com/chart?cht=p&chd=t:1,2` in your page.',
    '',
    '```',
    '![a](https://image-charts.com/chart?cht=p&chd=t:1,2&chs=100x100)',
    '<img src="https://image-charts.com/chart?cht=p&chd=t:1,2" />',
    '```',
    '',
  ].join('\n');
  assert.deepEqual(scan(source, KEYS), []);
  assert.equal(signText(source, KEYS).text, source);
});

test('signing twice changes nothing', () => {
  const source = LOADED.map(([, line]) => line).join('\n\n');
  const once = signText(source, KEYS).text;
  assert.notEqual(once, source);
  assert.equal(signText(once, KEYS).text, once);
});

test('a query edited after signing is invalid with the key, signed (presence only) without it', () => {
  const { text } = signText('![a](https://image-charts.com/chart?cht=p&chd=t:1,2&chs=100x100)', KEYS);
  const edited = text.replace('chd=t:1,2', 'chd=t:1,3');
  assert.deepEqual(
    scan(edited, KEYS).map(url => url.state),
    ['invalid']
  );
  assert.deepEqual(
    scan(edited, { accountId: 'documentation', secretKey: '' }).map(url => url.state),
    ['signed']
  );
  const resigned = signText(edited, KEYS).text;
  const [ichm] = signatures(resigned);
  assert.ok(serverAccepts(ichm, KEYS.secretKey, `cht=p&chd=t:1,3&chs=100x100&icac=documentation&ichm=${ichm}`));
});

test('an empty ichm counts as unsigned and gets signed', () => {
  const source = '![a](https://image-charts.com/chart?cht=p&chd=t:1,2&icac=documentation&ichm)';
  assert.deepEqual(
    scan(source, { accountId: 'documentation', secretKey: '' }).map(url => url.state),
    ['unsigned']
  );
  const [ichm] = signatures(signText(source, KEYS).text);
  assert.ok(serverAccepts(ichm, KEYS.secretKey, `cht=p&chd=t:1,2&icac=documentation&ichm=${ichm}`));
});

test('a URL of another account and a URL cut by "#" are reported and left as written', () => {
  const foreign = '![f](https://image-charts.com/chart?cht=p&chs=100x100&icac=someone_else&ichm=abc)';
  const cut = '![c](https://image-charts.com/chart?cht=p&chco=#ff0000&chs=100x100)';
  const plain = '![p](https://image-charts.com/chart?cht=p&chs=100x100)';
  const { text, urls } = signText([foreign, cut, plain].join('\n'), KEYS);
  const [kept1, kept2, signed] = text.split('\n');
  assert.equal(kept1, foreign);
  assert.equal(kept2, cut);
  assert.equal(signatures(signed).length, 1);
  assert.deepEqual(
    urls.map(url => [url.line, url.state]),
    [
      [1, 'foreign'],
      [2, 'broken'],
      [3, 'unsigned'],
    ]
  );
  assert.match(urls[0].problem, /icac=someone_else/);
  assert.match(urls[1].problem, /"#"/);
});

/** Runs a copy of the signer on a temp tree. */
function runCli(files, args, env) {
  return spawnScript('sign-chart-urls.js', files, args, env);
}

test('--check names file:line, without a stack trace, and says how to sign without typing the secret', () => {
  const run = runCli({ 'docs/a.md': '# A\n\n![x](https://image-charts.com/chart?cht=p&#38;chd=t:1,2&chs=1x1)\n' }, ['--check'], {});
  assert.equal(run.status, 1);
  assert.match(run.stdout, /^docs\/a\.md:3: unsigned chart URL$/m);
  assert.match(run.stderr, /run `source \.envrc && npm run sign:chart-urls`/);
  assert.doesNotMatch(run.stderr + run.stdout, /\n\s+at /);
});

test('sign mode signs every file, reports a foreign account with file:line and keeps it, without a stack trace', () => {
  const foreign = '![f](https://image-charts.com/chart?cht=p&chs=1x1&icac=someone_else&ichm=abc)\n';
  const run = runCli(
    {
      'docs/a.md': foreign,
      'docs/b.md': '![p](https://image-charts.com/chart?cht=p&chs=1x1)\n',
    },
    [],
    { ACCOUNT_ID: KEYS.accountId, SECRET_KEY: KEYS.secretKey }
  );
  assert.equal(run.status, 1);
  assert.match(run.stdout, /^docs\/a\.md:1: .*icac=someone_else.*left as written$/m);
  assert.match(run.stdout, /^docs\/b\.md:1: signed$/m);
  assert.doesNotMatch(run.stderr + run.stdout, /\n\s+at /);
  assert.equal(run.written['docs/a.md'], foreign);
  assert.equal(signatures(run.written['docs/b.md']).length, 1);
});

test('--check closing message matches each category: the signer for unsigned, by hand with file:line for the rest', () => {
  const run = runCli(
    {
      'docs/a.md': '![x](https://image-charts.com/chart?cht=p&chs=1x1)\n',
      'docs/b.md': '# B\n![c](https://image-charts.com/chart?cht=p&chco=#ff0000)\n',
      'docs/c.md': '![f](https://image-charts.com/chart?cht=p&icac=someone_else&ichm=abc)\n',
      'docs/GENERATED-d.md': '![g](https://image-charts.com/chart?cht=p&chs=2x2)\n',
    },
    ['--check'],
    {}
  );
  assert.equal(run.status, 1);
  assert.match(run.stderr, /^Unsigned or invalid.*run `source \.envrc && npm run sign:chart-urls` \(docs\/a\.md:1\)$/m);
  assert.match(run.stderr, /^Cut by "#".*%23 by hand \(docs\/b\.md:2\)$/m);
  assert.match(run.stderr, /^Signed by another account.*by hand.*\(docs\/c\.md:1\)$/m);
  assert.match(run.stderr, /^In GENERATED-\*\.md.*generator.*\(docs\/GENERATED-d\.md:1\)$/m);
});

test('sign mode never tells to run the signer for what it left as written', () => {
  const run = runCli(
    { 'docs/a.md': '![c](https://image-charts.com/chart?cht=p&chco=#ff0000)\n![p](https://image-charts.com/chart?cht=p)\n' },
    [],
    { ACCOUNT_ID: KEYS.accountId, SECRET_KEY: KEYS.secretKey }
  );
  assert.equal(run.status, 1);
  assert.doesNotMatch(run.stderr, /npm run sign:chart-urls`/);
  assert.match(run.stderr, /^Cut by "#".*\(docs\/a\.md:1\)$/m);
});

test('sign mode leaves a GENERATED-*.md file as written and names its generator', () => {
  const generated = '![g](https://image-charts.com/chart?cht=p&chs=2x2)\n';
  const run = runCli({ 'docs/GENERATED-d.md': generated }, [], { ACCOUNT_ID: KEYS.accountId, SECRET_KEY: KEYS.secretKey });
  assert.equal(run.status, 1);
  assert.equal(run.written['docs/GENERATED-d.md'], generated);
  assert.match(run.stderr, /fix their generator \(docs\/GENERATED-d\.md:1\)$/m);
});

test('sign mode with another ACCOUNT_ID fails on one line and writes nothing', () => {
  const unsigned = '![p](https://image-charts.com/chart?cht=p&chs=1x1)\n';
  const run = runCli({ 'docs/a.md': unsigned }, [], { ACCOUNT_ID: 'other', SECRET_KEY: KEYS.secretKey });
  assert.equal(run.status, 1);
  assert.equal(run.written['docs/a.md'], unsigned);
  assert.match(run.stderr, /^Error: ACCOUNT_ID=documentation and its SECRET_KEY are required/m);
  assert.doesNotMatch(run.stderr + run.stdout, /\n\s+at /);
});

test('an unknown option fails on one line naming --check, and writes nothing', () => {
  const unsigned = '![p](https://image-charts.com/chart?cht=p&chs=1x1)\n';
  for (const option of ['--chek', '--check=true', '--CHECK', '-c']) {
    const run = runCli({ 'docs/a.md': unsigned }, [option], { ACCOUNT_ID: KEYS.accountId, SECRET_KEY: KEYS.secretKey });
    assert.equal(run.status, 1, option);
    assert.equal(run.written['docs/a.md'], unsigned, option);
    assert.equal(run.stdout, '', option);
    assert.match(run.stderr, /^Error: [^\n]*\n$/, option);
    assert.ok(run.stderr.includes(`unknown option ${option}`) && run.stderr.includes('--check'), run.stderr);
  }
});
