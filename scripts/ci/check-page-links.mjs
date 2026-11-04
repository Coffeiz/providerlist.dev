import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const providerDirectory = join(root, 'data/providers');
const frontendDirectory = join(root, 'frontend/src');

function isMarkdownTarget(value) {
  if (typeof value !== 'string') return false;
  try {
    return /\.md$/i.test(new URL(value).pathname);
  } catch {
    return /\.md(?:[?#].*)?$/i.test(value);
  }
}

function collectPageLinks(value, path = '$', links = []) {
  if (!value || typeof value !== 'object') return links;

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectPageLinks(item, `${path}[${index}]`, links));
    return links;
  }

  for (const [key, child] of Object.entries(value)) {
    const childPath = `${path}.${key}`;
    if (key === 'documentation' && typeof child === 'string') {
      links.push({ path: childPath, url: child });
    } else if ((key === 'docs' || key === 'links') && child && typeof child === 'object') {
      for (const [name, url] of Object.entries(child)) {
        if (typeof url === 'string') links.push({ path: `${childPath}.${name}`, url });
      }
    } else if (child && typeof child === 'object') {
      collectPageLinks(child, childPath, links);
    }
  }

  return links;
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

async function main() {
  const violations = [];
  for (const file of (await walk(providerDirectory)).filter((path) => path.endsWith('.json'))) {
    const provider = JSON.parse(await readFile(file, 'utf8'));
    for (const link of collectPageLinks(provider)) {
      if (isMarkdownTarget(link.url)) violations.push(`${file}: ${link.path} -> ${link.url}`);
    }
  }

  for (const file of (await walk(frontendDirectory)).filter((path) => path.endsWith('.vue') || path.endsWith('.ts'))) {
    const source = await readFile(file, 'utf8');
    const literalHref = /\bhref\s*=\s*["']([^"']+)["']/g;
    for (const match of source.matchAll(literalHref)) {
      if (isMarkdownTarget(match[1])) violations.push(`${file}: literal href -> ${match[1]}`);
    }
  }

  if (violations.length) {
    console.error('页面链接禁止直接跳转到 .md 文件，请改为用户可读的官方文档页面：');
    for (const violation of violations) console.error(`- ${violation}`);
    process.exitCode = 1;
  } else {
    console.log('页面链接检查通过：未发现指向 .md 文件的按钮或文档链接。');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();

export { collectPageLinks, isMarkdownTarget };
