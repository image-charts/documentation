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

## Tech Stack

- Docusaurus 3.x
- React 19
- Node.js 18+

## Deployment

Automated via Netlify on push to master branch.

## File Structure

```
scripts/
  generate-error-codes.js   # Fetches error codes from API
  generate-google-fonts.js  # Fetches font list from Swagger
  generate-gallery.js       # Generates signed gallery URLs
docs/
  GENERATED-*.md            # Auto-generated files (do not edit manually)
```
