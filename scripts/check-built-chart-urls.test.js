const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const {
  chartRequestsInHtml,
  chartRequestsInCss,
  chartRequestsInJs,
  renderedChartQueries,
} = require('./check-built-chart-urls');
const { urlState } = require('./sign-chart-urls');
const { spawnScript } = require('./test-cli');

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
  '<meta http-equiv="refresh" content="0;url=https://image-charts.com/chart?cht=p&amp;chs=100x119"/>',
  '<meta http-equiv="Refresh" content="5; URL=\'https://image-charts.com/chart?cht=p&amp;chs=100x120\'"/>',
  '<a href="/x" ping="/track https://image-charts.com/chart?cht=p&amp;chs=100x121">x</a>',
  '<map name="m"><area href="/x" ping="https://image-charts.com/chart?cht=p&amp;chs=100x122"></map>',
  '<object data="https://image-charts.com/chart?cht=p&amp;chs=100x123"></object>',
  '<table background="https://image-charts.com/chart?cht=p&amp;chs=100x124"></table>',
  '<link rel="preload" as="image" imagesrcset="https://image-charts.com/chart?cht=p&amp;chs=100x125 1x"/>',
  '<video poster="https://image-charts.com/chart?cht=p&amp;chs=100x126"></video>',
  '<script>var u="https://image-charts.com/chart?cht=p&chs=100x127";document.images[0].src=u</script>',
  '<img data-src="https://image-charts.com/chart?cht=p&amp;chs=100x128"/>',
  '<img data-srcset="/img/x.png 1x, https://image-charts.com/chart?cht=p&amp;chs=100x129 2x"/>',
];

test('every shape the browser loads is a chart request, unsigned', () => {
  const html = LOADED_SHAPES.join('\n');
  const lineOf = shape => html.slice(0, html.indexOf(shape)).split('\n').length;
  assert.deepEqual(
    statesOfHtml(html),
    LOADED_SHAPES.map(shape => [lineOf(shape), 'unsigned'])
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
    '<meta http-equiv="refresh" content="30"/>',
    '<meta http-equiv="refresh" content="0;url=/chart-js/"/>',
    '<a href="/x" ping="/track /count">x</a>',
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

test('a "#" in an editor link is reported where the browser cuts', () => {
  const html = [
    '<a href="https://editor.image-charts.com/?a=1#https:/image-charts.com/chart?cht=p&amp;chco=#ff0000&amp;icac=documentation&amp;ichm=abc">e</a>',
    '<a href="https://editor.image-charts.com/chart?cht=p&amp;chco=#ff0000&amp;icac=documentation&amp;ichm=abc">e</a>',
  ].join('\n');
  assert.deepEqual(statesOfHtml(html), [
    [1, 'broken'],
    [2, 'broken'],
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
    '(0,i.jsx)("div",{style:{backgroundImage:"url(https://image-charts.com/chart?cht=p\\u0026chs=1x1)"}})',
    '(0,i.jsx)(n.code,{children:"https://image-charts.com/chart?cht=p&chs=1x1"})',
  ].join('\n');
  const rendered = new Set(['cht=p&chs=1x1']);
  const requests = chartRequestsInJs(js, 'https://documentation.image-charts.com/assets/js/main.js', rendered);
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
    'const q="https://image-charts.com/chart?cht=qr&chs=150x150&chl=Hello";',
  ].join('\n');
  const html = [
    '<pre><code>curl https://image-charts.com/chart?cht=p&amp;chs=100x905</code></pre>',
    '<p>At the start (<code>https://image-charts.com/chart?{QUERY_STRING}&amp;ichm=HASH</code>), at the end</p>',
    '<pre><code><span>curl https://image-charts.com/chart?cht=qr&amp;chs=150x150</span><span>&amp;chl=Hello%20world</span></code></pre>',
  ].join('\n');
  const rendered = new Set(renderedChartQueries(html, PAGE));
  const requests = chartRequestsInJs(js, 'https://documentation.image-charts.com/assets/js/main.js', rendered);
  assert.deepEqual(
    requests.map(request => [request.line, request.query]),
    [
      [1, 'cht=p&chs=100x902'],
      [2, 'cht=p&chs=100x903'],
      [3, 'cht=p&chs=100x904'],
      [6, 'cht=qr&chs=150x150&chl=Hello'],
    ]
  );
});

/** Runs a copy of the built gate on `pages`. */
function runBuiltCli(pages, env = {}) {
  return spawnScript('check-built-chart-urls.js', pages, [], env);
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
  assert.match(run.stdout, /^Built chart requests: 0 signed, 1 unsigned, 0 invalid, 1 of another account, 1 cut by "#"/m);
});

test('a build without pages fails on one line, without a stack trace', () => {
  const run = runBuiltCli({ 'build/assets/js/a.js': 'var a=1;' });
  assert.equal(run.status, 1);
  assert.match(run.stderr, /^Error: build\/ has no HTML page: run `docusaurus build` first$/m);
  assert.doesNotMatch(run.stderr + run.stdout, /\n\s+at /);
});

test('a bundle or inline script that does not parse fails on one line naming its file, never skipped', () => {
  const page = '<p>ok</p>';
  for (const [files, file] of [
    [{ 'build/index.html': page, 'build/assets/js/bad.js': 'var u = "https://image-charts.com/chart?cht=p' }, 'build/assets/js/bad.js'],
    [{ 'build/index.html': '<script>var u = "unclosed</script>' }, 'build/index.html'],
  ]) {
    const run = runBuiltCli(files);
    assert.equal(run.status, 1);
    const escapedFile = file.replaceAll('.', String.raw`\.`);
    assert.match(run.stderr, new RegExp(`^Error: ${escapedFile}: .*JS.*$`, 'm'));
    assert.doesNotMatch(run.stderr + run.stdout, /\n\s+at /);
  }
});

test('a build whose pages, CSS and bundles are all signed passes with the key', () => {
  const query = signedQuery('cht=p&chd=t:1,2&chs=100x100');
  const url = `https://image-charts.com/chart?${query}`;
  const run = runBuiltCli(
    {
      'build/index.html': `<img src="${url.replaceAll('&', '&amp;')}"/>`,
      'build/assets/css/a.css': `.a{background:url("${url}")}`,
      'build/assets/js/a.js': `(0,i.jsx)("img",{src:"${url}"})`,
    },
    { SECRET_KEY: KEYS.secretKey }
  );
  assert.equal(run.status, 0, run.stderr);
  assert.match(run.stdout, /^Built chart requests: 3 signed, 0 unsigned, 0 invalid, 0 of another account, 0 cut by "#"$/m);
});
