/**
 * Test helper: spawns a copy of a chart URL script.
 */

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { env: parentEnv, execPath } = require('node:process');
const { spawnSync } = require('node:child_process');

const SCRIPTS = ['sign-chart-urls.js', 'check-built-chart-urls.js', 'generate-gallery.js'];
const MAX_SCRIPT_MS = 30_000;

/** Writes each file of `tree` under `root`. */
function writeTree(root, tree) {
  for (const [file, content] of Object.entries(tree)) {
    const target = path.join(root, file);
    // comply-ignore: security-detect-non-literal-fs-filename — target is under the test's own temp directory
    fs.mkdirSync(path.dirname(target), { recursive: true });
    // comply-ignore: security-detect-non-literal-fs-filename — target is under the test's own temp directory
    fs.writeFileSync(target, content);
  }
}

/**
 * Runs a copy of `script` on a tree of `files`.
 * Its environment is `PATH` plus `env`, never caller secrets.
 * Returns its output and the files afterwards.
 */
function spawnScript(script, files, args, env) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'test_chart_urls_'));
  try {
    const scripts = SCRIPTS.map(name => [
      `scripts/${name}`,
      // comply-ignore: security-detect-non-literal-fs-filename — name is one of SCRIPTS
      fs.readFileSync(path.join(__dirname, name), 'utf8'),
    ]);
    writeTree(root, { ...Object.fromEntries(scripts), 'docs/.keep': '', 'src/.keep': '', ...files });
    fs.symlinkSync(path.join(__dirname, '..', 'node_modules'), path.join(root, 'node_modules'));
    const child = spawnSync(execPath, [path.join(root, 'scripts', script), ...args], {
      env: { PATH: parentEnv.PATH, ...env },
      encoding: 'utf8',
      timeout: MAX_SCRIPT_MS,
    });
    const written = Object.keys(files).map(file => [
      file,
      // comply-ignore: security-detect-non-literal-fs-filename — file was written by writeTree under root
      fs.readFileSync(path.join(root, file), 'utf8'),
    ]);
    return { ...child, written: Object.fromEntries(written) };
  } finally {
    // comply-ignore: security-detect-non-literal-fs-filename — root is the test's own temp directory
    fs.rmSync(root, { recursive: true, force: true });
  }
}

module.exports = { spawnScript };
