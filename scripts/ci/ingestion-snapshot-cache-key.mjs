#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const provider = process.env.INGEST_PROVIDER;
const outputPath = process.env.GITHUB_OUTPUT;
if (!provider || !/^[a-z0-9-]+$/.test(provider) || !outputPath) {
  throw new Error('缺少有效的 Provider 或 GitHub Actions 输出路径');
}

const root = path.join(process.cwd(), '.cache/provider-ingest');
const entries = [];
for (const sourceId of (await readdir(root, { withFileTypes: true }).catch((error) => {
  if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return [];
  throw error;
})).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort()) {
  const metadataPath = path.join(root, sourceId, 'latest.json');
  try {
    const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
    if (metadata.metadata?.source_id === sourceId && typeof metadata.metadata.content_hash === 'string') {
      entries.push(`${sourceId}\0${metadata.accept ?? ''}\0${metadata.metadata.content_hash}`);
    }
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }
}
if (!entries.length) throw new Error(`Provider ${provider} 没有可缓存的成功来源快照`);

const digest = createHash('sha256').update(entries.join('\n')).digest('hex').slice(0, 24);
await writeFile(outputPath, `key=provider-ingestion-${provider}-${digest}\n`, { flag: 'a' });
