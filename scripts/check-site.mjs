import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(project, 'docs/.vitepress/dist');
const base = '/plain-white-tee-studio/';
const origin = 'https://kaw393939.github.io';
const problems = [];
const htmlCache = new Map();
let checked = 0;

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const name = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(name) : [name];
  }));
  return nested.flat();
}

async function exists(file) {
  try { return (await stat(file)).isFile(); }
  catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return false;
    throw error;
  }
}

async function html(file) {
  if (!htmlCache.has(file)) htmlCache.set(file, await readFile(file, 'utf8'));
  return htmlCache.get(file);
}

function decodeEntities(value) {
  return value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

async function checkLink(source, raw) {
  const value = decodeEntities(raw);
  if (!value || /^(?:data:|mailto:|tel:|javascript:)/i.test(value)) return;
  const sourcePath = path.relative(output, source).split(path.sep).join('/');
  let url;
  try { url = new URL(value, origin + base + sourcePath); }
  catch { problems.push(`${sourcePath}: invalid URL ${value}`); return; }
  if (url.origin !== origin) return;
  if (!url.pathname.startsWith(base)) {
    // A full URL may intentionally link to another project on the same host.
    if (/^https?:\/\//i.test(value)) return;
    problems.push(`${sourcePath}: URL escapes the GitHub Pages base: ${value}`);
    return;
  }
  checked++;
  let relative;
  try { relative = decodeURIComponent(url.pathname.slice(base.length)); }
  catch { problems.push(`${sourcePath}: malformed URL encoding ${value}`); return; }
  const candidate = path.resolve(output, relative);
  if (candidate !== output && !candidate.startsWith(output + path.sep)) {
    problems.push(`${sourcePath}: URL escapes build output: ${value}`);
    return;
  }
  const options = relative.endsWith('/') || !relative
    ? [path.join(candidate, 'index.html')]
    : [candidate, candidate + '.html', path.join(candidate, 'index.html')];
  let target;
  for (const option of options) {
    if (await exists(option)) { target = option; break; }
  }
  if (!target) { problems.push(`${sourcePath}: missing target ${value}`); return; }
  if (url.hash && target.endsWith('.html')) {
    let anchor;
    try { anchor = decodeURIComponent(url.hash.slice(1)); }
    catch { problems.push(`${sourcePath}: malformed anchor ${value}`); return; }
    const ids = [...(await html(target)).matchAll(/\bid\s*=\s*["']([^"']+)["']/g)]
      .map((match) => decodeEntities(match[1]));
    if (anchor && !ids.includes(anchor)) problems.push(`${sourcePath}: missing anchor ${value}`);
  }
}

const pages = (await filesIn(output)).filter((file) => file.endsWith('.html'));
if (!pages.length) throw new Error('No built HTML found. Run npm run build first.');
for (const page of pages) {
  const content = await html(page);
  const links = [...content.matchAll(/\b(?:href|src)\s*=\s*["']([^"']*)["']/g)];
  for (const [, value] of links) await checkLink(page, value);
}
if (problems.length) {
  console.error(`Found ${problems.length} broken local links or assets:\n${problems.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${pages.length} HTML pages and ${checked} local links/assets, including page anchors.`);
}
