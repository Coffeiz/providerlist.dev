import assert from 'node:assert/strict';
import test from 'node:test';

import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import type { CapturedDocument } from '../document-set.ts';
import type { SnapshotMetadata } from '../../types.ts';
import { toZhipuIR, zhipuParser, type ZhipuMarketObservation } from './collect.ts';

const source = (id: string, market: 'cn' | 'global') => ({
  id, provider_id: 'zhipu', market, name: id, url: `https://docs.example/${id}`, enabled: true,
  accept: 'text/markdown', max_bytes: 1024, adapter_id: 'zhipu', scope: 'model_catalog' as const,
  access_scope: 'public' as const, extraction: 'markdown' as const,
});

function document(id: string, market: 'cn' | 'global'): CapturedDocument {
  const item = source(id, market);
  return {
    source: item,
    body: `# ${id}\nGLM-5 current model`,
    metadata: {
      source_id: id, market, source_name: id, request_url: item.url,
      retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200, content_type: 'text/markdown',
      etag: null, last_modified: null, content_hash: `sha256:${(id === 'zhipu-cn-models' ? 'a' : 'b').repeat(64)}`,
      byte_length: 20, collector_version: 'test', body_file: `${id}.body`,
    },
  };
}

test('智谱 IR 按市场保留目录和模型级证据，且不擅自生成领域供应事实', () => {
  const docs = [document('zhipu-cn-models', 'cn'), document('zhipu-global-models', 'global')];
  const models: ZhipuMarketObservation[] = (['cn', 'global'] as const).map((market) => ({
    market,
    models: [{
      model_id: 'GLM-5',
      catalog_rows: [{ source_id: `zhipu-${market}-models`, section: 'GLM', headers: ['Model'], cells: ['GLM-5'], text: '| GLM-5 |' }],
      pricing_rows: [],
      documentation_mentions: [],
    }],
    api_routes: [], capabilities: [], source_coverage: [],
  }));
  const ir = toZhipuIR(docs, models);

  assert.deepEqual(ir.document_observations.map(({ source_ref, model_id_mentions }) => [source_ref, model_id_mentions]), [
    ['zhipu-cn-models', ['GLM-5']], ['zhipu-global-models', ['GLM-5']],
  ]);
  assert.deepEqual(ir.services, []);
  assert.ok(ir.review_items.some(({ id }) => id === 'zhipu-market-facts-await-domain-mapping'));
  assert.deepEqual(validateProviderCollectionIR(ir, docs.map(({ metadata }) => metadata)), []);
});

test('智谱模型目录结构变化时拒绝生成空市场候选', () => {
  const catalogId = 'zhipu-cn-model-catalog';
  const metadata = {
    source_id: catalogId, market: 'cn', source_name: catalogId, request_url: `https://docs.example/${catalogId}`,
    retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200, content_type: 'text/markdown',
    etag: null, last_modified: null, content_hash: `sha256:${'c'.repeat(64)}`, byte_length: 10,
    collector_version: 'test', body_file: `${catalogId}.body`,
  } as SnapshotMetadata;
  assert.throws(() => zhipuParser.inspectMarket('cn', [metadata], new Map([
    [catalogId, '# Changed catalog layout\nNo recognized model table'],
    ['zhipu-cn-chat-api', 'GLM-5 is mentioned in this API example, not in a catalog row.'],
  ])), /市场模型概览解析不到模型目录行/u);
});
