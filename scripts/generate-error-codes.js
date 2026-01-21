#!/usr/bin/env node
/**
 * Generates GENERATED-error-codes.md from Image-Charts API
 * Source: https://image-charts.com/errors.json
 */

const fs = require('fs');
const path = require('path');

const ERRORS_API_URL = 'https://image-charts.com/errors.json';
const OUTPUT_FILE = path.join(__dirname, '../docs/GENERATED-error-codes.md');

async function main() {
  console.log('Fetching error codes from', ERRORS_API_URL);

  const response = await fetch(ERRORS_API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch errors: ${response.status} ${response.statusText}`);
  }

  const errors = await response.json();

  const markdown = errors
    .map(error => `- \`${error.code}\`: ${error.description}`)
    .join('\n');

  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`Generated ${OUTPUT_FILE} with ${errors.length} error codes`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
