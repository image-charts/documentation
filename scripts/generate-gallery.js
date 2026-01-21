#!/usr/bin/env node
/**
 * Generates GENERATED-gallery.md from Image-Charts Gallery API
 * Source: https://image-charts.com/gallery.json
 *
 * Requires ACCOUNT_ID and SECRET_KEY environment variables for signing URLs
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const querystring = require('querystring');

const GALLERY_API_URL = 'https://image-charts.com/gallery.json';
const OUTPUT_FILE = path.join(__dirname, '../docs/GENERATED-gallery.md');

function sign(secretKey, query) {
  return crypto
    .createHmac('sha256', secretKey)
    .update(query)
    .digest('hex');
}

function groupBy(array, keyFn) {
  return array.reduce((result, item) => {
    const key = keyFn(item);
    (result[key] = result[key] || []).push(item);
    return result;
  }, {});
}

async function main() {
  const ACCOUNT_ID = process.env.ACCOUNT_ID;
  const SECRET_KEY = process.env.SECRET_KEY;

  if (!ACCOUNT_ID || !SECRET_KEY) {
    console.error('Error: ACCOUNT_ID and SECRET_KEY environment variables are required');
    console.error('These are needed to sign gallery chart URLs');
    process.exit(1);
  }

  console.log('Fetching gallery from', GALLERY_API_URL);

  const response = await fetch(GALLERY_API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch gallery: ${response.status} ${response.statusText}`);
  }

  const charts = await response.json();
  const chartByCategory = groupBy(charts, chart => chart.category);

  const html = Object.keys(chartByCategory)
    .map(categoryName => {
      const categoryCharts = chartByCategory[categoryName]
        .map(chart => {
          const url = new URL(chart.url);
          const params = new URLSearchParams(url.search);

          // Remove existing signature params
          params.delete('ichm');
          params.delete('icac');

          let publicUrl;

          if (url.pathname === '/chart') {
            params.set('icac', ACCOUNT_ID);
            const rawQuerystring = params.toString();
            const signature = sign(SECRET_KEY, rawQuerystring);
            publicUrl = `https://image-charts.com/chart?${rawQuerystring}&ichm=${signature}`;
          } else if (url.pathname.startsWith('/chart.js/')) {
            const chartConfig = params.get('c');
            const queryBase64 = Buffer.from(chartConfig).toString('base64');
            const queryObject = {
              bkg: 'white',
              icac: ACCOUNT_ID,
              c: queryBase64,
              encoding: 'base64',
            };
            const rawQuerystring = querystring.stringify(queryObject);
            const signature = sign(SECRET_KEY, rawQuerystring);
            publicUrl = `https://image-charts.com${url.pathname}?${rawQuerystring}&ichm=${signature}`;
          } else {
            publicUrl = chart.url;
          }

          return `<a class="gallery-items" href="${publicUrl}"><img class="gallery-items__img" src="${publicUrl}" /><p class="gallery-label">${chart.title}</p></a>`;
        })
        .join('\n');

      return `## ${categoryName}
<div class="gallery-flex">
${categoryCharts}
</div>`;
    })
    .join('\n\n');

  fs.writeFileSync(OUTPUT_FILE, html);
  console.log(`Generated ${OUTPUT_FILE} with ${charts.length} charts in ${Object.keys(chartByCategory).length} categories`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
