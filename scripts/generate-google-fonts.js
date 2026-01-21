#!/usr/bin/env node
/**
 * Generates GENERATED-google-fonts.md from Image-Charts Swagger API
 * Source: https://image-charts.com/swagger.json
 */

const fs = require('fs');
const path = require('path');

const SWAGGER_API_URL = 'https://image-charts.com/swagger.json';
const OUTPUT_FILE = path.join(__dirname, '../docs/GENERATED-google-fonts.md');

async function main() {
  console.log('Fetching swagger spec from', SWAGGER_API_URL);

  const response = await fetch(SWAGGER_API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch swagger: ${response.status} ${response.statusText}`);
  }

  const swagger = await response.json();

  // Find the icff parameter enum values
  let fonts = [];
  for (const pathObj of Object.values(swagger.paths)) {
    const params = pathObj.get?.parameters || [];
    const icffParam = params.find(p => p.name === 'icff');
    if (icffParam && icffParam.enum) {
      fonts = icffParam.enum;
      break;
    }
  }

  if (fonts.length === 0) {
    throw new Error('Could not find icff parameter in swagger spec');
  }

  const markdown = fonts.map(font => `\`${font}\``).join(', ');

  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`Generated ${OUTPUT_FILE} with ${fonts.length} fonts`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
