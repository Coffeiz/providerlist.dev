#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runIngestionSync, writeSyncOutputs } from './sync.ts';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../../..');
const [scope, providerId] = process.argv.slice(2);

if (scope !== 'all' && scope !== 'provider') {
  console.error('用法：pnpm ingest:sync -- all | provider <provider_id>');
  process.exitCode = 2;
} else if (scope === 'provider' && !providerId) {
  console.error('单 Provider 运行需要 provider_id');
  process.exitCode = 2;
} else {
  try {
    const results = await runIngestionSync({ repoRoot, ...(providerId ? { providerId } : {}) });
    await writeSyncOutputs({ repoRoot, results });
    console.log(`采集完成：${results.length} 家 Provider；${results.filter(({ status }) => status === 'collection_failed').length} 家采集失败。`);
  } catch (error) {
    console.error(`Sync 运行失败：${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  }
}
