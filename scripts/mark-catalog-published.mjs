import { readFile, writeFile } from 'node:fs/promises';

const manifestPath = new URL('../dist/v1/manifest.json', import.meta.url);
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

if (manifest.catalog_status !== 'draft') {
  throw new Error(`Expected a draft catalog before publishing, got: ${manifest.catalog_status}`);
}

manifest.catalog_status = 'published';
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
