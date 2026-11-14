const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const {
  chartRequestsInHtml,
  chartRequestsInCss,
  chartRequestsInJs,
  renderedChartQueries,
  isRenderedIn,
} = require('./check-built-chart-urls');
const { urlState } = require('./sign-chart-urls');

const KEYS = { accountId: 'documentation', secretKey: 'test-secret-key' };
const PAGE = 'https://documentation.image-charts.com/chart-js/index.html';

function signedQuery(query, secretKey = KEYS.secretKey) {
  const withAccount = `${query}&icac=documentation`;
  return `${withAccount}&ichm=${crypto.createHmac('sha256', secretKey).update(withAccount).digest('hex')}`;
}

/** [line, state] of each chart request of the page. */
function statesOfHtml(html, keys = KEYS) {
  return chartRequestsInHtml(html, PAGE).map(request => [request.line, urlState(request.query, keys).state]);
}

// Each line of the page loads one unsigned chart.
const LOADED_SHAPES = [
  '<img src="https://image-charts.com/chart?cht=p&amp;chd=t:1,2&amp;chs=100x101"/>',
  '<img src="HTTPS://IMAGE-CHARTS.COM/chart?cht=p&amp;chs=100x102"/>',
  '<img src="https://image-charts.com:443/chart?cht=p&amp;chs=100x103"/>',
  '<img src="//image-charts.com/chart?cht=p&amp;chs=100x104"/>',
  '<img src="http://image-charts.com/chart?cht=p&amp;chs=100x105"/>',
  '<img src="https://www.image-charts.com/chart?cht=p&amp;chs=100x106"/>',
  '<img src="https:&#x2F;&#x2F;image-charts.com/chart?cht=p&amp;chs=100x107"/>',
  '<img src="https://image-charts.com//chart?cht=p&amp;chs=100x108"/>',
  '<img src="https://image-charts.com/chart.js/2.8.0?bkg=white&amp;c=%7B%7D"/>',
  '<img src="/img/x.png" srcset="/img/x.png 1x, https://image-charts.com/chart?cht=p&amp;chd=t:1,2&amp;chs=100x110 2x"/>',
  '<div style="background-image:url(&quot;https://image-charts.com/chart?cht=p&amp;chs=100x111&quot;)"></div>',
  '<meta property="og:image" content="https://image-charts.com/chart?cht=p&amp;chs=100x112"/>',
  '<link rel="preload" as="image" href="https://image-charts.com/chart?cht=p\n&amp;chs=100x113"/>',
  '<a href="https://editor.image-charts.com/?tab_viewer=image#https:/image-charts.com/chart?cht=qr&amp;chl=x">edit</a>',
  '<a href="https://editor.image-charts.com/chart.js/2.8.0?bkg=white&amp;c=%7B%7D">edit</a>',
  '<a href="https://image-charts.com/chart?cht=p&amp;chs=100x116">open</a>',
  '<style>.x{background:url("https://image-charts.com/chart?cht=p&chs=100x117")}</style>',
  '<script>window.x={src:"https://image-charts.com/chart?cht=p&chs=100x118"}</script>',
];

test('every shape the browser loads is a chart request, unsigned', () => {
  const html = LOADED_SHAPES.join('\n');
  assert.deepEqual(
    statesOfHtml(html),
    LOADED_SHAPES.map((shape, index) => [index + 1 + (index > 12 ? 1 : 0), 'unsigned'])
  );
});

test('text, code and other hosts are not chart requests', () => {
  const html = [
    '<pre><code>https://image-charts.com/chart?cht=p&amp;chd=t:1,2</code></pre>',
    '<p>See https://image-charts.com/chart?cht=p for the API.</p>',
    '<img src="https://documentation.image-charts.com/img/chart.png" alt="https://image-charts.com/chart?cht=p"/>',
    '<img src="https://acme.image-charts.com/chart?cht=p"/>',
    '<a href="https://image-charts.com/pricing">pricing</a>',
    '<a href="https://editor.image-charts.com/">editor</a>',
    '<a href="https://editor.image-charts.com/?tab_viewer=image#https:/example.com/chart?cht=p">elsewhere</a>',
  ].join('\n');
  assert.deepEqual(statesOfHtml(html), []);
});

test('a valid signature is signed; an edited query is invalid with the key, signed without it', () => {
  const query = signedQuery('cht=p&chd=t:1,2&chs=100x100');
  const valid = `<img src="https://image-charts.com/chart?${query.replaceAll('&', '&amp;')}"/>`;
  const edited = valid.replace('chd=t:1,2', 'chd=t:1,3');
  assert.deepEqual(statesOfHtml(valid), [[1, 'signed']]);
  assert.deepEqual(statesOfHtml(edited), [[1, 'invalid']]);
  assert.deepEqual(statesOfHtml(edited, { accountId: 'documentation', secretKey: '' }), [[1, 'signed']]);
});

test('a newline inside a signed URL is removed, as the browser does', () => {
  const query = signedQuery('cht=p&chd=t:1,2&chs=100x100').replace('&chs', '\n&chs');
  assert.deepEqual(statesOfHtml(`<img src="https://image-charts.com/chart?${query}"/>`), [[1, 'signed']]);
});

test('editor links are checked on the chart query the editor requests', () => {
  const query = signedQuery('cht=qr&chl=Hello%20world&chs=150x150');
  const html = [
    `<a href="https://editor.image-charts.com/?tab_viewer=image#https:/image-charts.com/chart?${query}">e</a>`,
    `<a href="https://editor.image-charts.com/chart?${query}">e</a>`,
    `<a href="https://editor.image-charts.com/chart?${signedQuery('cht=qr&chl=x', 'another-key')}">e</a>`,
  ].join('\n');
  assert.deepEqual(statesOfHtml(html), [
    [1, 'signed'],
    [2, 'signed'],
    [3, 'invalid'],
  ]);
});

test('a chart of another account is reported as foreign', () => {
  const html = '<img src="https://image-charts.com/chart?cht=p&amp;icac=someone_else&amp;ichm=abc"/>';
  assert.deepEqual(statesOfHtml(html), [[1, 'foreign']]);
});

test('CSS url() values are chart requests', () => {
  const css = '.a{color:red}\n.b{background:url(https://image-charts.com/chart?cht=p&chs=1x1)}\n.c{background:url("/img/x.png")}';
  assert.deepEqual(
    chartRequestsInCss(css, 'https://documentation.image-charts.com/assets/css/styles.css').map(request => request.line),
    [2]
  );
});

test('JS bundles: URL props and CSS url() are chart requests, text children are not', () => {
  const js = [
    '(0,i.jsx)("img",{src:"https://image-charts.com/chart?cht=p\\u0026chs=1x1",alt:"chart"})',
    "(0,i.jsx)(n.a,{href:'https://editor.image-charts.com/chart?cht=p&chs=1x1',children:\"edit\"})",
    '(0,i.jsx)("div",{style:{backgroundImage:"url(https://image-charts.com/chart?cht=p&chs=1x1)"}})',
    '(0,i.jsx)(n.code,{children:"https://image-charts.com/chart?cht=p&chs=1x1"})',
  ].join('\n');
  const rendered = new Set(['cht=p&chs=1x1']);
  const isRendered = query => rendered.has(query);
  const requests = chartRequestsInJs(js, 'https://documentation.image-charts.com/assets/js/main.js', isRendered);
  assert.deepEqual(
    requests.map(request => [request.line, request.query]),
    [
      [1, 'cht=p&chs=1x1'],
      [2, 'cht=p&chs=1x1'],
      [3, 'cht=p&chs=1x1'],
    ]
  );
});

test('CSS image-set() candidates are chart requests: strings and url(), in style attributes, <style> and CSS files', () => {
  const html = [
    '<div style="background:image-set(&quot;https://image-charts.com/chart?cht=p&amp;chs=100x411&quot; 1x)"></div>',
    "<div style=\"background:-webkit-image-set('https://image-charts.com/chart?cht=p&amp;chs=100x412' 1x, &quot;/img/x.png&quot; 2x)\"></div>",
    '<div style="background:image-set(url(&quot;https://image-charts.com/chart?cht=p&amp;chs=100x413&quot;) 1x)"></div>',
    '<style>.x{background:image-set("https://image-charts.com/chart?cht=p&chs=100x414" 1x)}</style>',
  ].join('\n');
  assert.deepEqual(statesOfHtml(html), [
    [1, 'unsigned'],
    [2, 'unsigned'],
    [3, 'unsigned'],
    [4, 'unsigned'],
  ]);
  const css =
    '.a{color:red}\n.b{background-image:image-set("https://image-charts.com/chart?cht=p&chs=1x1" type("image/png") 1x)}';
  assert.deepEqual(
    chartRequestsInCss(css, 'https://documentation.image-charts.com/assets/css/styles.css').map(request => request.line),
    [2]
  );
});

test('JS bundles: a chart URL only in the bundle is a chart request, one the pages render is not', () => {
  const js = [
    '(0,i.jsx)(s.A,{children:()=>{const e="https://image-charts.com/chart?cht=p\\u0026chs=100x902";return(0,i.jsx)("img",{src:e})}})',
    String.raw`JSON.parse('{"u":"https:\\/\\/image-charts.com\\/chart?cht=p&chs=100x903"}')`,
    String.raw`const t="https:\/\/image-charts.com\/chart?cht=p&chs=100x904\nsecond line";`,
    '(0,i.jsx)(n.code,{children:"curl https://image-charts.com/chart?cht=p&chs=100x905"})',
    '(0,i.jsx)(n.code,{children:"https://image-charts.com/chart?{QUERY_STRING}&ichm=HASH"}),"), at the end"',
  ].join('\n');
  const html = [
    '<pre><code>curl https://image-charts.com/chart?cht=p&amp;chs=100x905</code></pre>',
    '<p>At the start (<code>https://image-charts.com/chart?{QUERY_STRING}&amp;ichm=HASH</code>), at the end</p>',
  ].join('\n');
  const isRendered = isRenderedIn(renderedChartQueries(html, PAGE));
  const requests = chartRequestsInJs(js, 'https://documentation.image-charts.com/assets/js/main.js', isRendered);
  assert.deepEqual(
    requests.map(request => [request.line, request.query]),
    [
      [1, 'cht=p&chs=100x902'],
      [2, 'cht=p&chs=100x903'],
      [3, 'cht=p&chs=100x904'],
    ]
  );
});

const BUILT_CLI_SCRIPTS = ['check-built-chart-urls.js', 'sign-chart-urls.js', 'generate-gallery.js'];

/**
 * Runs a copy of the built gate.
 * Its temp build/ holds `pages`.
 */
function runBuiltCli(pages) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'test_check_built_chart_urls_'));
  try {
    // comply-ignore: security-detect-non-literal-fs-filename — script is one of BUILT_CLI_SCRIPTS
    const scripts = BUILT_CLI_SCRIPTS.map(script => [`scripts/${script}`, fs.readFileSync(path.join(__dirname, script), 'utf8')]);
    for (const [file, content] of Object.entries({ ...Object.fromEntries(scripts), ...pages })) {
      // comply-ignore: security-detect-non-literal-fs-filename — file is under the test's own temp directory
      fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
      // comply-ignore: security-detect-non-literal-fs-filename — file is under the test's own temp directory
      fs.writeFileSync(path.join(root, file), content);
    }
    fs.symlinkSync(path.join(__dirname, '..', 'node_modules'), path.join(root, 'node_modules'));
    return spawnSync(process.execPath, [path.join(root, 'scripts', 'check-built-chart-urls.js')], {
      env: { PATH: process.env.PATH },
      encoding: 'utf8',
      timeout: 30_000,
    });
  } finally {
    // comply-ignore: security-detect-non-literal-fs-filename — root is the test's own temp directory
    fs.rmSync(root, { recursive: true, force: true });
  }
}

test('the closing message says what to change by hand, per category, with file:line, never to run the signer', () => {
  const run = runBuiltCli({
    'build/a/index.html': [
      '<img src="https://image-charts.com/chart?cht=p&amp;chs=1x1"/>',
      '<img src="https://image-charts.com/chart?cht=p&amp;chco=#ff0000"/>',
      '<img src="https://image-charts.com/chart?cht=p&amp;icac=someone_else&amp;ichm=abc"/>',
    ].join('\n'),
  });
  assert.equal(run.status, 1);
  assert.doesNotMatch(run.stderr, /npm run sign:chart-urls`/);
  assert.match(run.stderr, /^Unsigned or invalid.*by hand.*\(build\/a\/index\.html:1\)$/m);
  assert.match(run.stderr, /^Cut by "#".*%23.*\(build\/a\/index\.html:2\)$/m);
  assert.match(run.stderr, /^Signed by another account.*icac=documentation.*\(build\/a\/index\.html:3\)$/m);
});
