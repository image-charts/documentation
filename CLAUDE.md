# Image-Charts Documentation - Project Instructions

## Prerequisites

**CRITICAL**: Before any build operation, you MUST source the `.envrc` file:

```bash
source .envrc
```

The `.envrc` file contains required environment variables:
- `ACCOUNT_ID` - Image-Charts account identifier (used for signing gallery URLs)
- `SECRET_KEY` - HMAC secret key for URL signing
- `GOOGLE_ANALYTICS_TOKEN` - Analytics tracking
- Python/pyenv configuration

Without these variables, the `generate:gallery` script will fail.

## Build Commands

```bash
# Full build (generates docs + builds site)
source .envrc && npm run build

# Development server
source .envrc && npm run start

# Generate only (without full build)
source .envrc && npm run generate

# Serve production build locally
npm run serve
```

## Generation Scripts

The build process runs three generation scripts that fetch data from the Image-Charts API:

| Script | Source | Output | Requires Env |
|--------|--------|--------|--------------|
| `generate:error-codes` | `https://image-charts.com/errors.json` | `docs/GENERATED-error-codes.md` | No |
| `generate:google-fonts` | `https://image-charts.com/swagger.json` | `docs/GENERATED-google-fonts.md` | No |
| `generate:gallery` | `https://image-charts.com/gallery.json` | `docs/GENERATED-gallery.md` | **Yes** (ACCOUNT_ID, SECRET_KEY) |

The gallery script signs chart URLs using HMAC-SHA256 with the `SECRET_KEY`.

## Signed chart URLs

Every chart the pages load must carry `icac=documentation` and a valid `ichm`: unsigned charts count against the free rate limit of the visitor's IP (10/min), and a page with many charts gets `429`. This covers markdown image/link destinations and HTML/JSX `src`/`href` attributes pointing at:

- `https://image-charts.com/chart?…` or `/chart.js/<version>?…`;
- the editor, which loads the chart from the reader's IP when the link is clicked (`src/editor.js` opens it in the page): `https://editor.image-charts.com/chart?…` (path form, the editor keeps a signed query byte for byte) and `https://editor.image-charts.com/?…#https:/image-charts.com/chart?…` (hash form). The editor keeps an incoming signature until the reader's first edit (editor MR https://gitlab.com/image-charts/editor/-/merge_requests/17).

URLs inside code blocks and inline code are text, never requested, and stay as written.

```bash
# After adding or editing a chart URL in docs/: sign new URLs, re-sign edited ones (in place, idempotent)
source .envrc && npm run sign:chart-urls

# List file:line of unsigned URLs (and of invalid signatures when SECRET_KEY is set), exit 1 if any
npm run check:chart-urls

# Tests of both scripts (node:test, run by GitHub Actions before the build)
npm test
```

`npm run build` runs two gates:

1. `check:chart-urls` on the sources, after `generate`: names `file:line` of each unsigned or stale URL. It reads the shapes above; a URL signed by another account, or with an unencoded `#` (the browser cuts the URL there), is reported and left as written.
2. `check:built-chart-urls` on `build/`, after `docusaurus build`: the authoritative gate. It parses every page with htmlparser2 and reads what the browser requests (`src`, `data-src`, `href`, `poster`, `data`, `background`, every `srcset`/`data-srcset`/`imagesrcset` candidate, every `ping` URL, the URL of a `<meta http-equiv=refresh>`, inline `style` and `<style>` `url()` and `image-set()`, `<meta content>`), with entities decoded and URLs parsed as the browser does (`http://`, `//`, `www.`, upper case host, `:443`, newlines). CSS is read with postcss-value-parser and JS with the acorn tokenizer, whose string values come decoded (`https:\/\/`, `\u0026`…). It reads the URL props (`src:`, `href:`…), `url()` and `image-set()` of the strings of `build/**/*.js`, of inline JS `<script>` (no `type`, a JS MIME type or `module`) and of the `.css` files. Each JS string is read alone: any other chart URL in it counts too (set only in the browser, like `<BrowserOnly>`), except the whole string value of a `children` key (`{children:"…"}`), the text React renders (code blocks included); a string in a `children` array, a ternary or a call counts. An inline `<script>` of another type (`application/ld+json`…) is read as text: every chart URL in it counts. A shape the source signer does not rewrite (JSX expression `src={…}`, reference links, `srcset`, `style`) fails here: sign it by hand. A build without a page, a file too large, JS that acorn cannot parse, or an unknown option (the signer takes only `--check`, the built gate none) stops the gate with one `Error: …` line naming the file: nothing is skipped.

On failure, each gate ends with one line per kind of URL, what to do and its `file:line`: the signer command only for unsigned or stale URLs it rewrites, a change by hand for the rest (unencoded `#`, another account, `GENERATED-*.md`, built-only shapes).

Both gates check signatures against the key when `SECRET_KEY` is set (Netlify and GitHub Actions), presence only otherwise. The signature covers the decoded query (the server also checks signatures against the decoded query), so it survives the re-encoding done by MDX and the browser. `docs/GENERATED-*.md` are checked but never rewritten: fix their generator instead.

## Tech Stack

- Docusaurus 3.x
- React 19
- Node.js 20+

## Deployment

Automated via Netlify on push to master branch.

## File Structure

```
scripts/
  generate-error-codes.js   # Fetches error codes from API
  generate-google-fonts.js  # Fetches font list from Swagger
  generate-gallery.js       # Generates signed gallery URLs
  sign-chart-urls.js        # Signs chart URLs in docs/ (--check: fails on unsigned ones)
  check-built-chart-urls.js # Fails when a page of build/ requests an unsigned chart
  *.test.js                 # node:test tests of both (npm test)
docs/
  GENERATED-*.md            # Auto-generated files (do not edit manually)
```
