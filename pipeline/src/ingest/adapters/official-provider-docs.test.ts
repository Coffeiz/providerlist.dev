import assert from 'node:assert/strict';
import { test } from 'node:test';
import { anthropicCollectorConfig } from './anthropic/collect.ts';
import { googleCollectorConfig } from './google/collect.ts';
import { metaCollectorConfig } from './meta/collect.ts';
import { mapOpenAIProviderFacts, openaiCollectorConfig } from './openai/collect.ts';
import { xaiCollectorConfig } from './xai/collect.ts';
import { officialDocsParser } from './official-provider-docs.ts';
import { renderCandidateReview } from '../candidate-review.ts';
import type { CapturedDocument } from './document-set.ts';
import type { SnapshotMetadata } from '../types.ts';
import { validateProviderCollectionIR } from '../ir/collector-validation.test-utils.ts';
import { projectProviderCollectionIR } from '../ir/conversion.ts';

const providers = [
  { config: anthropicCollectorConfig, id: 'claude-opus-5-5' },
  { config: openaiCollectorConfig, id: 'gpt-test-model-1.2-alpha' },
  { config: googleCollectorConfig, id: 'gemini-3-8-flash' },
  { config: xaiCollectorConfig, id: 'grok-4.7' },
  { config: metaCollectorConfig, id: 'muse-spark-1.3' },
] as const;

for (const { config, id } of providers) {
  test(`${config.providerId} retains public model ID mentions without claiming current availability`, () => {
    const catalogSource = config.sources.find(({ scope }) => scope === 'model_catalog');
    const pricingSource = config.sources.find(({ scope }) => scope === 'pricing');
    assert.ok(catalogSource);
    assert.ok(pricingSource);
    const documents: CapturedDocument[] = [
      { source: catalogSource, metadata: { retrieved_at: '2026-10-25T00:00:00.000Z' } as CapturedDocument['metadata'], body: `<h1>Models</h1><p>${id} is documented.</p>\n| Model ID | Context |\n| --- | --- |\n| ${id} | Not disclosed |` },
      { source: pricingSource, metadata: { retrieved_at: '2026-10-25T01:00:00.000Z' } as CapturedDocument['metadata'], body: '<table><tr><th>Model</th><th>Input</th><th>Output</th></tr><tr><td>Example</td><td>$1</td><td>$2</td></tr></table>' },
    ];
    const facts = officialDocsParser.sourceGapFacts(documents, config);
    const ids = facts.model_id_mentions.flatMap(({ ids: sourceIds }) => sourceIds);
    assert.ok(ids.includes(id));
    assert.equal('current_model_ids' in facts, false);
    assert.ok(facts.coverage_gaps.some(({ area }) => area.includes('上下文')));
    assert.ok(facts.coverage_gaps.some(({ area }) => area.includes('API Host')));
    assert.equal(facts.pricing_source_ids[0], pricingSource.id);
    assert.ok(facts.coverage_gaps.some(({ area }) => area.includes('逐模型价格')));
    const ir = officialDocsParser.toCollectionIR(config.providerId, documents, facts);
    assert.equal(ir.provider_id, config.providerId);
    assert.equal(ir.services.length, 0, '文档提及不能直接创建当前 Offering');
    assert.equal(ir.coverage.every(({ status }) => status === 'not_parsed'), true);
    assert.ok(ir.document_observations.some(({ model_id_mentions }) => model_id_mentions.includes(id)));
    assert.ok(ir.review_items.some(({ kind, message }) => kind === 'incomplete_coverage' && message.includes('逐模型价格')));
    const candidate = {
      provider_id: config.providerId,
      candidate_kind: 'official-public-doc-observation',
      observed_at: '2026-10-25T00:00:00.000Z',
      previous_candidate_hash: null,
      candidate_hash: `sha256:${'0'.repeat(64)}`,
      sources: [],
      previous: null,
      current: facts,
    };
    // per-provider 片段只负责声明核对边界：模型 ID 提及不构成「当前供应」的证据。
    const fragment = officialDocsParser.renderReview(candidate, config.displayName);
    assert.match(fragment, /适配器核对边界/);
    assert.match(fragment, /模型 ID 提及不单独证明当前供应/);
    // 具体事实由共享外框统一渲染——评审里必须看得见型号与覆盖缺口，
    // 否则「评审」就退化成一句免责声明。
    const review = renderCandidateReview(candidate, fragment);
    assert.match(review, new RegExp(id.replace(/\./g, '\\.')));
    assert.match(review, /上下文/);
    assert.match(review, /API Host/);
  });
}

test('official document IR does not invent observation time when source snapshots are missing', () => {
  const facts = officialDocsParser.sourceGapFacts([], openaiCollectorConfig);
  assert.throws(
    () => officialDocsParser.toCollectionIR('openai', [], facts),
    /缺少快照，无法确定观察时间或来源覆盖/,
  );

  const source = openaiCollectorConfig.sources[0]!;
  assert.throws(
    () => officialDocsParser.toCollectionIR('openai', [{ source, metadata: {} as CapturedDocument['metadata'], body: '' }], facts),
    /缺少有效 retrieved_at，无法确定观察时间/,
  );
});

test('OpenAI model mentions retain dotted version segments from the official catalog', () => {
  const documentedIds = [
    'gpt-test-5.5',
    'gpt-test-5.6-sol',
    'gpt-test-6.1-sol',
    'gpt-image-test-2.5-sunburst',
    'gpt-audio-test-1.5',
    'gpt-test-astra',
  ];
  const ids = `${documentedIds.join(' ')} gpt-test-5.6-sol.md gpt-test-5.6-sol.png gpt-test-5.6-sol.webp`;
  assert.deepEqual(ids.match(openaiCollectorConfig.modelIdPattern), documentedIds);
  assert.equal('prefixgpt-test-6.1-sol'.match(openaiCollectorConfig.modelIdPattern), null);
});

test('OpenAI official catalog cards preserve current, deprecated, and shut-down status labels', () => {
  const source = openaiCollectorConfig.sources.find(({ id }) => id === 'openai-models-all');
  assert.ok(source);
  const documents: CapturedDocument[] = [{
    source,
    metadata: {} as CapturedDocument['metadata'],
    body: '<a href="/api/docs/models/gpt-test-6.1-sol"><div class="font-semibold">GPT Test 6.1 Sol</div><div class="text-sm text-secondary">Current fixture model</div></a><a href="/api/docs/models/gpt-test-4o"><div class="font-semibold">GPT Test 4o</div><div class="rounded-full border border-default px-1.5 py-0.5 text-xs text-tertiary group-hover:border-gray-200">Deprecated</div><div class="text-sm text-secondary">Legacy fixture model</div></a><a href="/api/docs/models/gpt-test-shutdown"><div class="font-semibold">GPT Test Shutdown</div><div class="rounded-full border border-default px-1.5 py-0.5 text-xs text-tertiary group-hover:border-gray-200">Shut down</div><div class="text-sm text-secondary">Unavailable fixture model</div></a>',
  }];
  const facts = officialDocsParser.sourceGapFacts(documents, openaiCollectorConfig);
  assert.deepEqual(facts.model_catalog_records, [
    { model_id: 'gpt-test-6.1-sol', display_name: 'GPT Test 6.1 Sol', status: 'listed_current', source_id: source.id },
    { model_id: 'gpt-test-4o', display_name: 'GPT Test 4o', status: 'deprecated', source_id: source.id },
    { model_id: 'gpt-test-shutdown', display_name: 'GPT Test Shutdown', status: 'shut_down', source_id: source.id },
  ]);
});

test('OpenAI IR 将目录、型号专属 Route 和能力映射为带来源的字段事实', () => {
  const pricingFixture = [
    '### Standard pricing data',
    '| Model | Short context input | Short context output | Short context cached input | Short context 30m write | Short context 12h write | Long context input | Long context output | Long context cached input | Long context 30m write | Long context 12h write |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    '| gpt-6-astra | $10.00 | $50.00 | $1.00 | $12.50 | $25.00 | $20.00 | $75.00 | $2.00 | $25.00 | $50.00 |',
    '### Standard pricing data',
    '| Model | Modality | Input | Output | Cached input |',
    '| --- | --- | --- | --- | --- |',
    '| gpt-test-deprecated | Audio | $3.50 | $7.25 | $0.35 |',
    '### Pricing Table data',
    '| Model | Training | Input | Output | Cached input |',
    '| --- | --- | --- | --- | --- |',
    '| gpt-test-deprecated | $100.00 / hour | $4.00 | $16.00 | $2.00 |',
    '### Batch pricing data',
    '#### Batch',
    '| Model | Short context input | Short context output |',
    '| --- | --- | --- |',
    '| gpt-6-astra | $5.00 | $25.00 |',
    '#### Flex',
    '| Model | Short context input | Short context output |',
    '| --- | --- | --- |',
    '| gpt-6-astra | $5.00 | $25.00 |',
    '### Fast pricing data',
    '| Model | Short context input | Short context output |',
    '| --- | --- | --- |',
    '| gpt-6-astra | $20.00 | $100.00 |',
    '### Ultrafast pricing data',
    '| Model | Short context input | Short context output |',
    '| --- | --- | --- |',
    '| gpt-6-astra | $60.00 | $300.00 |',
  ].join('\n');
  const documents: CapturedDocument[] = openaiCollectorConfig.sources.map((source) => ({
    source,
    metadata: {
      source_id: source.id,
      source_name: source.name,
      request_url: source.url,
      retrieved_at: '2026-10-26T00:00:00.000Z',
      http_status: 200,
      content_type: 'text/html',
      etag: null,
      last_modified: null,
      content_hash: `sha256:${'a'.repeat(64)}`,
      byte_length: 1,
      collector_version: 'test',
      body_file: `${source.id}.body`,
    } as SnapshotMetadata,
    body: source.id === 'openai-models-all'
      ? '<a href="/api/docs/models/gpt-6-astra"><div class="font-semibold">GPT-6 Astra</div></a>'
        + '<a href="/api/docs/models/gpt-test-deprecated"><div class="font-semibold">GPT Test Deprecated</div><div class="rounded-full border border-default">Deprecated</div></a>'
        + '<a href="/api/docs/models/gpt-test-shutdown"><div class="font-semibold">GPT Test Shutdown</div><div class="rounded-full border border-default">Shut down</div></a>'
      : source.id === 'openai-gpt-6-astra'
        ? '# GPT-6 Astra\n\nModel ID: `gpt-6-astra`\n\n## Supported features\n- reasoning token support\n- structured_outputs\n- function_calling\n- prompt_caching\n- web_search\n- file_search\n\n## Supported tools\n- web_search\n- file_search\n\n| Endpoint | Route | Support |\n| --- | --- | --- |\n| Chat Completions | `v1/chat/completions` | Supported |\n| Responses | `v1/responses` | Supported |\n| Embeddings | `v1/embeddings` | Not supported |'
        : source.id === 'openai-models-list-api'
          ? 'curl https://api.openai.com/v1/models'
          : source.id === 'openai-pricing'
            ? pricingFixture
            : '',
  }));
  const facts = officialDocsParser.sourceGapFacts(documents, openaiCollectorConfig);
  const baseIR = officialDocsParser.toCollectionIR('openai', documents, facts);
  const ir = mapOpenAIProviderFacts(documents, facts, baseIR);
  const issues = validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata));

  assert.deepEqual(issues, []);
  const service = ir.services[0];
  assert.equal(service?.offerings.length, 3);
  const astra = service?.offerings.find(({ provider_model_id }) => provider_model_id.value === 'gpt-6-astra');
  assert.equal(astra?.operations.length, 0, 'the collector does not attach model-specific Routes to individual Offerings');
  assert.equal(astra?.api_capabilities, undefined, 'model-specific API support stays out of the provider collection projection');
  assert.equal(astra?.prices.length, 1);
  const price = astra?.prices[0];
  assert.equal(price?.rules.value.length, 5);
  assert.deepEqual(price?.rules.value.map(({ conditions }) => conditions?.[0] && 'value' in conditions[0] ? conditions[0].value : null), ['standard', 'batch', 'flex', 'fast', 'ultrafast']);
  assert.equal(price?.rules.value[0]?.rate_items[0]?.amount_decimal, '10.00', 'decimal strings must keep official precision');
  assert.equal(price?.rules.value[0]?.rate_items.length, 10);
  assert.ok(price?.rules.value.every(({ evidence }) => evidence[0]?.source_ref === 'openai-pricing'));
  const genericPrice = service?.offerings.find(({ provider_model_id }) => provider_model_id.value === 'gpt-test-deprecated')?.prices[0];
  assert.equal(genericPrice?.rules.value.length, 1, 'training prices must not be mixed into hosted API model rates');
  assert.deepEqual(genericPrice?.rules.value[0]?.rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal]), [
    ['input_audio', '3.50'],
    ['output_audio', '7.25'],
    ['cache_read_audio', '0.35'],
  ]);
  assert.deepEqual(genericPrice?.rules.value[0]?.conditions, [{ field: 'service_tier', value: 'standard' }]);
  assert.deepEqual(price?.rules.value.map(({ conditions, rate_items }) => ({
    conditions,
    rates: rate_items.map(({ metric, ttl, context, amount_decimal }) => [metric, ttl ?? null, context ?? null, amount_decimal]),
  })), [
    { conditions: [{ field: 'service_tier', value: 'standard' }], rates: [
      ['input', null, 'short', '10.00'], ['output', null, 'short', '50.00'], ['cache_read', null, 'short', '1.00'],
      ['cache_write', '30min', 'short', '12.50'], ['cache_write', '12h', 'short', '25.00'],
      ['input', null, 'long', '20.00'], ['output', null, 'long', '75.00'], ['cache_read', null, 'long', '2.00'],
      ['cache_write', '30min', 'long', '25.00'], ['cache_write', '12h', 'long', '50.00'],
    ] },
    { conditions: [{ field: 'service_tier', value: 'batch' }], rates: [['input', null, 'short', '5.00'], ['output', null, 'short', '25.00']] },
    { conditions: [{ field: 'service_tier', value: 'flex' }], rates: [['input', null, 'short', '5.00'], ['output', null, 'short', '25.00']] },
    { conditions: [{ field: 'service_tier', value: 'fast' }], rates: [['input', null, 'short', '20.00'], ['output', null, 'short', '100.00']] },
    { conditions: [{ field: 'service_tier', value: 'ultrafast' }], rates: [['input', null, 'short', '60.00'], ['output', null, 'short', '300.00']] },
  ], 'IR 价格按官方原始行逐档保留精确计量项和金额');
  assert.equal(service?.offerings.find(({ provider_model_id }) => provider_model_id.value === 'gpt-test-deprecated')?.supply_observations[0]?.kind, 'unknown');
  assert.equal(service?.offerings.find(({ provider_model_id }) => provider_model_id.value === 'gpt-test-shutdown')?.supply_observations[0]?.kind, 'listed_historical');
  assert.equal(ir.coverage.find(({ source_ref }) => source_ref === 'openai-models-all')?.status, 'complete');
  assert.ok(ir.coverage.some(({ source_ref, scope, status }) => source_ref === 'openai-pricing' && scope === 'pricing' && status === 'partial'));

  const projection = projectProviderCollectionIR({
    ir,
    snapshots: documents.map(({ metadata }) => metadata),
    identityResolutions: service!.offerings.map(({ provider_model_id }) => ({
      provider_model_id: provider_model_id.value,
      service_id: 'global',
      model_ref: `openai/${provider_model_id.value}`,
      match: 'exact_id' as const,
      candidates: [`openai/${provider_model_id.value}`],
      review_note: 'Fixture uses exact Model ID match.',
    })),
    generatedAt: '2026-10-26T00:00:00.000Z',
  });
  assert.ok(projection.document, projection.issues.join('\n'));
  assert.equal(projection.status, 'needs_review', '未解析定价来源应在投影 Review 中保持可见');
  assert.ok(projection.document!.services?.[0]?.offerings?.some(({ id }) => id === 'gpt-6-astra'));
  const projectedAstra = projection.document!.services?.[0]?.offerings?.find(({ id }) => id === 'gpt-6-astra');
  const projectedPricing = projectedAstra?.pricing;
  assert.equal(projectedPricing?.length, 5, 'IR projection must preserve each official service tier');
  assert.deepEqual(projectedPricing?.map(({ conditions }) => conditions?.[0] && 'value' in conditions[0] ? conditions[0].value : null), ['standard', 'batch', 'flex', 'fast', 'ultrafast']);
  assert.equal(projectedPricing?.[0]?.rates?.[0]?.value, '10.00');
});

test('Meta explicitly distinguishes open weights from its hosted API observations', () => {
  assert.ok(metaCollectorConfig.excludedModelNotes?.some((note) => note.includes('Llama')));
  assert.ok(metaCollectorConfig.knownLimitations.some((note) => note.includes('第三方托管')));
});
