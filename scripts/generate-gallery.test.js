const test = require('node:test');
const assert = require('node:assert');
const { categoryHeading, galleryAlt, escapeHtml } = require('./generate-gallery');

test('categoryHeading turns gallery.json category names into plain headings', () => {
  assert.strictEqual(categoryHeading("Bar Chart's"), 'Bar charts');
  assert.strictEqual(categoryHeading("Area chart's"), 'Area charts');
  assert.strictEqual(categoryHeading("GraphViz chart's"), 'GraphViz charts');
  assert.strictEqual(categoryHeading("QR Codes chart's"), 'QR codes');
  assert.strictEqual(categoryHeading('Linear scale'), 'Linear scale');
  assert.strictEqual(categoryHeading('Legend'), 'Legend');
});

test('galleryAlt names the chart and its category', () => {
  assert.strictEqual(galleryAlt('Vertical', 'Bar charts'), 'Vertical - Bar charts example made with Image-Charts');
});

test('escapeHtml keeps alt attributes well formed', () => {
  assert.strictEqual(escapeHtml('A "quoted" <b> & co'), 'A &quot;quoted&quot; &lt;b&gt; &amp; co');
});
