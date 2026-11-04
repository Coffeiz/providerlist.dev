import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { writeProviderCollectionCandidate, type CapturedDocument } from '../document-set.ts';
import { VOLCENGINE_GLOBAL_INGEST_SOURCES } from './global-sources.ts';
import { volcengineGlobalParser, type VolcengineGlobalCandidateFacts } from './global-collect.ts';

function document(sourceId: string, index: number): CapturedDocument {
  const source = VOLCENGINE_GLOBAL_INGEST_SOURCES.find(({ id }) => id === sourceId);
  assert.ok(source, `fixture source exists: ${sourceId}`);
  return {
    source,
    body: `# ${source.name}\nOfficial source excerpt`,
    metadata: {
      source_id: source.id,
      market: source.market,
      source_name: source.name,
      request_url: source.url,
      retrieved_at: `2026-10-26T00:0${index}:00.000Z`,
      http_status: 200,
      content_type: 'text/html',
      etag: null,
      last_modified: null,
      content_hash: `sha256:${String(index).padStart(64, '0')}`,
      byte_length: 24,
      collector_version: 'test',
      body_file: `${source.id}.body`,
    },
  };
}

function facts(): VolcengineGlobalCandidateFacts {
  return {
    product: 'BytePlus ModelArk',
    market: 'global',
    provider_relationship: 'BytePlus ModelArk is confirmed as the volcengine global service',
    model_catalog: [{ model_id: 'seed-test', label: 'Seed Test', source_id: 'byteplus-modelark-model-list', region_ids: ['US'] }],
    pricing_evidence: [{ source_id: 'byteplus-modelark-model-pricing', mentioned_model_ids: ['seed-test'], text: 'USD pricing row' }],
    regions: [{ region_id: 'US', base_url: 'https://ark.us.example.com/api/v3', source_id: 'byteplus-modelark-region-availability' }],
    api_routes: [{ api_name: 'Chat API', method: 'POST', path: '/chat/completions', base_url: 'https://ark.us.example.com/api/v3', source_id: 'byteplus-modelark-chat-api' }],
    api_capability_evidence: [],
    featured_model_capability_evidence: [{ model_name: 'Seed Test', evidence: 'Supports tools' }],
    plan_evidence: [],
    service_capability_evidence: [],
    regional_availability_evidence: [],
    source_coverage: [],
  };
}

test('火山方舟国际 IR 映射已确认的 Service、目录 Offering 和 Endpoint，并保留未归一价格与 Route 观察', () => {
  const documents = [
    document('byteplus-modelark-model-list', 0),
    document('byteplus-modelark-model-pricing', 1),
    document('byteplus-modelark-base-url-authentication', 2),
    document('byteplus-modelark-chat-api', 3),
    document('byteplus-modelark-product-overview', 4),
    document('byteplus-modelark-region-availability', 5),
  ];
  const current = facts();
  const ir = volcengineGlobalParser.toVolcengineGlobalIR(documents, current);

  assert.deepEqual(ir.document_observations.find(({ source_ref }) => source_ref === 'byteplus-modelark-model-list')?.model_id_mentions, ['seed-test']);
  assert.deepEqual(ir.document_observations.find(({ source_ref }) => source_ref === 'byteplus-modelark-model-list')?.structured_records, [
    current.model_catalog[0], current.featured_model_capability_evidence[0],
  ]);
  assert.deepEqual(ir.document_observations.find(({ source_ref }) => source_ref === 'byteplus-modelark-model-pricing')?.structured_records, [current.pricing_evidence[0]]);
  assert.deepEqual(ir.document_observations.find(({ source_ref }) => source_ref === 'byteplus-modelark-region-availability')?.structured_records, [current.regions[0]]);
  assert.deepEqual(ir.document_observations.find(({ source_ref }) => source_ref === 'byteplus-modelark-chat-api')?.structured_records, [current.api_routes[0]]);
  assert.equal(ir.services.length, 1);
  assert.equal(ir.services[0]?.id.value, 'global');
  assert.equal(ir.services[0]?.id.value, 'global');
  assert.equal(ir.services[0]?.endpoints.length, 1);
  assert.equal(ir.services[0]?.endpoints[0]?.base_url.value, facts().regions[0]?.base_url);
  assert.equal(ir.services[0]?.offerings.length, 1);
  assert.equal(ir.services[0]?.offerings[0]?.provider_model_id.value, 'seed-test');
  assert.equal(ir.services[0]?.offerings[0]?.supply_observations[0]?.kind, 'listed_current');
  assert.deepEqual(ir.services[0]?.offerings[0]?.operations, []);
  assert.deepEqual(ir.services[0]?.offerings[0]?.prices, []);
  assert.ok(ir.review_items.some(({ id }) => id === 'global-domain-facts-not-normalized'));
  assert.ok(!ir.review_items.some(({ kind }) => kind === 'ambiguous_identity'));
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

test('火山方舟国际采集只写 ir-global 候选，不再生成旧格式 global 候选', async () => {
  const repoRoot = await mkdtemp(path.join(os.tmpdir(), 'providerlist-volcengine-global-'));
  try {
    const documents = [
      document('byteplus-modelark-model-list', 0),
      document('byteplus-modelark-model-pricing', 1),
      document('byteplus-modelark-product-overview', 2),
      document('byteplus-modelark-region-availability', 3),
    ];
    const ir = volcengineGlobalParser.toVolcengineGlobalIR(documents, facts());
    const result = await writeProviderCollectionCandidate({
      repoRoot,
      providerId: 'volcengine',
      candidateScope: 'ir-global',
      documents,
      current: ir,
      modelCount: 1,
      renderReview: () => 'international adapter review appendix',
    });

    assert.equal(result.candidateScope, 'ir-global');
    assert.match(result.reviewPath ?? '', /^data\/candidates\/volcengine\/ir-global\/reviews\//u);
    assert.match(result.reviewMarkdownPath ?? '', /^data\/candidates\/volcengine\/ir-global\/reviews\/.*\.md$/u);
    const review = await readFile(path.join(repoRoot, result.reviewMarkdownPath!), 'utf8');
    assert.match(review, /international adapter review appendix/u);
    await assert.rejects(readFile(path.join(repoRoot, 'data/candidates/volcengine/global/state.json'), 'utf8'), { code: 'ENOENT' });
  } finally {
    await rm(repoRoot, { recursive: true, force: true });
  }
});
