import assert from 'node:assert/strict';
import { cp, mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { readProviderSource } from '../data/provider-store.ts';
import { OPENAI_INGEST_SOURCES } from './adapters/openai/sources.ts';
import { previewLatestProviderIRCandidate } from './ir/preview.ts';
import { runIngestionSync } from './sync.ts';

const OPENAI_FIXTURES: Readonly<Record<string, string>> = {
  'openai-models-all': '<a href="/api/docs/models/gpt-6-astra"><div class="font-semibold">GPT-6 Astra</div></a>',
  'openai-pricing': [
    '### Standard pricing data',
    '| Model | Input | Output | Cached input |',
    '| --- | --- | --- | --- |',
    '| gpt-6-astra | $10.00 | $50.00 | $1.00 |',
  ].join('\n'),
  'openai-models-list-api': 'curl https://api.openai.com/v1/models',
  'openai-gpt-6-astra': [
    '# GPT-6 Astra',
    '',
    'Model ID: `gpt-6-astra`',
    '',
    '## Supported features',
    '- function_calling',
    '',
    '## Supported tools',
    '- web_search',
    '',
    '| Endpoint | Route | Support |',
    '| --- | --- | --- |',
    '| Responses | `v1/responses` | Supported |',
  ].join('\n'),
};

test('Sync 接受并隔离 IR 候选，不覆盖旧候选状态', async () => {
  const repoRoot = await mkdtemp(path.join(os.tmpdir(), 'providerlist-ir-sync-'));
  const originalFetch = globalThis.fetch;
  const legacyState = '{"provider_id":"openai","candidate_hash":"sha256:legacy"}\n';
  try {
    await mkdir(path.join(repoRoot, 'docs/data'), { recursive: true });
    await cp(new URL('../../../docs/data/provider-classes.md', import.meta.url), path.join(repoRoot, 'docs/data/provider-classes.md'));
    await cp(new URL('../../../data/models', import.meta.url), path.join(repoRoot, 'data/models'), { recursive: true });
    await mkdir(path.join(repoRoot, 'data/providers'), { recursive: true });
    await cp(new URL('../../../data/providers/openai/', import.meta.url), path.join(repoRoot, 'data/providers/openai'), { recursive: true });
    const formalProviderBefore = JSON.stringify(await readProviderSource(path.join(repoRoot, 'data'), 'openai'));
    await mkdir(path.join(repoRoot, 'data/candidates/openai'), { recursive: true });
    await writeFile(path.join(repoRoot, 'data/candidates/openai/state.json'), legacyState);

    globalThis.fetch = async (input) => {
      const url = input instanceof Request ? input.url : String(input);
      const source = OPENAI_INGEST_SOURCES.find(({ url: registeredUrl }) => registeredUrl === url);
      if (!source) throw new Error(`测试禁止访问未登记来源：${url}`);
      const body = OPENAI_FIXTURES[source.id] ?? `# ${source.name}\n\nNo structured facts in fixture.`;
      return new Response(body, { status: 200, headers: { 'content-type': 'text/markdown' } });
    };

    const first = await runIngestionSync({ repoRoot, providerId: 'openai' });
    assert.equal(first.length, 1);
    assert.equal(first[0]?.status, 'changed_ready', JSON.stringify(first[0]));
    assert.equal(first[0]?.candidateScope, 'ir');
    assert.equal(first[0]?.viewerPath, 'data/candidates/openai/viewer.md');
    assert.equal(await readFile(path.join(repoRoot, 'data/candidates/openai/state.json'), 'utf8'), legacyState);
    const irState = JSON.parse(await readFile(path.join(repoRoot, 'data/candidates/openai/ir/state.json'), 'utf8')) as { candidate_hash: string };
    assert.equal(irState.candidate_hash, first[0]?.fingerprint);
    assert.ok(await readFile(path.join(repoRoot, 'data/candidates/openai/viewer.md'), 'utf8'));
    assert.ok(first[0]?.sources?.some(({ sourceId }) => sourceId === 'openai-pricing'));

    const preview = await previewLatestProviderIRCandidate({ repoRoot, providerId: 'openai' });
    assert.ok(preview);
    assert.equal(preview.providerId, 'openai');
    assert.equal(preview.status, 'needs_review', '覆盖不完整的 IR 只生成待核对预览');
    assert.ok(preview.document, '对照工具可读取内存投影结果，预览仍不写正式文件');
    assert.ok(Array.isArray(preview.projectionIssues), '预览结果应返回投影结构阻塞项，供离线对照报告解释无法投影的原因');
    assert.ok(Array.isArray(preview.reviewNotes), '预览结果应返回 coverage/来源核对提醒，和结构阻塞项区分');
    assert.equal(preview.document.provider.id, 'openai');
    const previewMarkdown = await readFile(path.join(repoRoot, preview.reportPath), 'utf8');
    assert.match(previewMarkdown, /字段变更预览/u);
    assert.match(previewMarkdown, /preserved_existing/u, '预览须说明保留的既有 Model 关联');
    assert.equal(JSON.stringify(await readProviderSource(path.join(repoRoot, 'data'), 'openai')), formalProviderBefore, 'IR 预览不得改写正式 Provider 文件');

    const second = await runIngestionSync({ repoRoot, providerId: 'openai' });
    assert.equal(second[0]?.status, 'unchanged', '同一 IR 快照重跑应稳定命中 IR 自己的候选基线');
    assert.equal(second[0]?.fingerprint, first[0]?.fingerprint);
    assert.equal(await readFile(path.join(repoRoot, 'data/candidates/openai/state.json'), 'utf8'), legacyState);
  } finally {
    globalThis.fetch = originalFetch;
    await rm(repoRoot, { recursive: true, force: true });
  }
});

