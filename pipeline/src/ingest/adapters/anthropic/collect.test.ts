import assert from 'node:assert/strict';
import test from 'node:test';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import type { CapturedDocument } from '../document-set.ts';
import { officialDocsParser } from '../official-provider-docs.ts';
import { anthropicCollectorConfig, anthropicParser } from './collect.ts';
import { extractAnthropicPlans } from './collect.ts';
import { assertOfficialProviderObservationAdapter } from '../official-provider-entrypoint-test.ts';

test('Anthropic 采集入口保留官方模型观察，不把文档提及变成供应事实', () => {
  assertOfficialProviderObservationAdapter(anthropicCollectorConfig, 'claude-sonnet-4-5');
});

test('Anthropic Messages 文档明确请求 URL 时映射 Global API Endpoint，但不生成模型供应', () => {
  const source = anthropicCollectorConfig.sources.find(({ id }) => id === 'anthropic-messages-api')!;
  const body = 'curl https://api.anthropic.com/v1/messages';
  const document = {
    source,
    body,
    metadata: {
      source_id: source.id, source_name: source.name, request_url: source.url,
      retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200,
      content_type: 'text/markdown', etag: null, last_modified: null,
      content_hash: `sha256:${'c'.repeat(64)}`, byte_length: body.length,
      collector_version: 'test', body_file: `${source.id}.body`,
    },
  } as CapturedDocument;
  const codeSource = anthropicCollectorConfig.sources.find(({ id }) => id === 'anthropic-code-execution')!;
  const codeBody = [
    '"type": "code_execution_20250825"', '"type": "code_execution_20260120"', '"type": "code_execution_20260521"',
    '"allowed_callers": ["direct"]', '"type": "server_tool_use"', '"command": "ls -la"',
    '"stdout": "files"', '"stderr": ""', '"return_code": 0', '"type": "bash_code_execution_tool_result"',
    '"type": "text_editor_code_execution_tool_result"', '"file_id": "file_123"',
  ].join('\n');
  const codeDocument = { ...document, source: codeSource, body: codeBody, metadata: { ...document.metadata, source_id: codeSource.id, source_name: codeSource.name, request_url: codeSource.url, content_type: 'text/markdown', byte_length: codeBody.length, body_file: `${codeSource.id}.body` } } as CapturedDocument;
  const documents = [document, codeDocument];
  const facts = officialDocsParser.sourceGapFacts(documents, anthropicCollectorConfig);
  const observationIR = officialDocsParser.toCollectionIR('anthropic', documents, facts);
  const ir = anthropicParser.mapAnthropicEndpoint(documents, observationIR);

  assert.equal(ir.services[0]?.id.value, 'global');
  assert.deepEqual(ir.services[0]?.endpoints.map(({ id, base_url, api_region }) => [id.value, base_url.value, api_region.value]), [
    ['anthropic-api', 'https://api.anthropic.com', 'Global'],
  ]);
  assert.deepEqual(ir.services[0]?.offerings, []);
  const codeExecution = ir.services[0]?.capabilities.find(({ kind }) => kind.value === 'code_execution')?.operations[0];
  assert.deepEqual(codeExecution?.input?.value.map(({ name }) => name), ['server_tool_use.input']);
  assert.deepEqual(codeExecution?.parameters?.value.find(({ name }) => name === 'tools[].type')?.enum, ['code_execution_20250825', 'code_execution_20260120', 'code_execution_20260521']);
  assert.ok(codeExecution?.parameters?.value.some(({ name }) => name === 'tools[].allowed_callers[]'));
  assert.ok(codeExecution?.output?.value[0]?.fields?.includes('content[].content.stdout'));
  assert.ok(codeExecution?.output?.value[0]?.fields?.includes('content[].content.content[].file_id'));
  assert.deepEqual(ir.coverage.filter(({ source_ref, scope }) => source_ref === source.id && scope === 'api').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['partial', 1, 'API Endpoint records'],
  ]);
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

test('Anthropic Consumer 套餐只记录来源明确的价格，缺少 Enterprise 价格时保持未知', () => {
  const captured = (sourceId: string, body: string): CapturedDocument => {
    const source = anthropicCollectorConfig.sources.find(({ id }) => id === sourceId)!;
    return {
      source, body,
      metadata: {
        source_id: source.id, source_name: source.name, request_url: source.url,
        retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200,
        content_type: 'text/html', etag: null, last_modified: null,
        content_hash: 'sha256:' + 'd'.repeat(64), byte_length: body.length,
        collector_version: 'test', body_file: source.id + '.body',
      },
    };
  };
  const pricing = captured('anthropic-consumer-pricing', [
    'Free $0',
    'Pro $20 if billed monthly $200 billed up front',
    'Standard seat $20 Per seat / month if billed annually. $25 if billed monthly.',
    'Premium seat $100 Per seat / month if billed annually. $125 if billed monthly.',
    'Enterprise',
  ].join(' '));
  const guide = captured('anthropic-consumer-plan-guide', 'Max 5x: $100 per month. Max 20x: $200 per month.');
  const messages = captured('anthropic-messages-api', [
    'curl https://api.anthropic.com/v1/messages',
    '- `model: Model`',
    ...['claude-fable-5-1', 'claude-opus-5-5', 'claude-sonnet-5-5', 'claude-haiku-5-5'].map((id) => `  - \`"${id}"\``),
    '- `cache_control: optional CacheControlEphemeral or null`',
  ].join('\n'));
  const tick = String.fromCharCode(96);
  const catalog = captured('anthropic-models', [
    'Compare models',
    '| Model name | Claude API ID | Context window | Max output |',
    '| --- | --- | --- | --- |',
    ...[
      ['Claude Fable 5.1', 'claude-fable-5-1', '1M tokens', '128K tokens'],
      ['Claude Opus 5.5', 'claude-opus-5-5', '1M tokens', '64K tokens'],
      ['Claude Sonnet 5.5', 'claude-sonnet-5-5', '200K tokens', '64K tokens'],
      ['Claude Haiku 5.5', 'claude-haiku-5-5', '200K tokens', '32K tokens'],
      ['Claude Opus 4.8', 'claude-opus-4-8', '200K tokens', '32K tokens'],
    ].map(([name, id, context, output]) => `| ${name} | ${tick}${id}${tick} | ${context} | ${output} |`),
  ].join('\n'));
  const apiPricing = captured('anthropic-pricing', [
    '| Model | Base input tokens | 5m cache writes | 1h cache writes | Cache hits and refreshes | Output tokens |',
    '| --- | --- | --- | --- | --- | --- |',
    '| Claude Fable 5.1 | $10 / MTok | $12.50 / MTok | $20 / MTok | $0.25 / MTok 1 | $50 / MTok |',
    '| Claude Opus 5.5 | $4 / MTok | $5 / MTok | $8 / MTok | $0.20 / MTok 2 | $20 / MTok |',
    '| Claude Sonnet 5.5 | $3 / MTok | $3.75 / MTok | $6 / MTok | $0.30 / MTok | $15 / MTok |',
    '| Claude Haiku 5.5 (for prompts up to 100,000 tokens) | $0.10 / MTok | $0.125 / MTok | $0.20 / MTok | $0.01 / MTok | $0.50 / MTok |',
    '| Claude Haiku 5.5 (for prompts over 100,000 tokens) | $0.50 / MTok | $0.625 / MTok | $1 / MTok | $0.05 / MTok | $2.50 / MTok |',
    '| Claude Opus 4.8 | $5 / MTok | $6.25 / MTok | $10 / MTok | $0.50 / MTok | $25 / MTok |',
  ].join('\n'));

  const result = extractAnthropicPlans([pricing, guide]);
  const byId = new Map(result.plans.map((plan) => [plan.id.value, plan]));
  assert.deepEqual([...byId.keys()], [
    'claude-free', 'claude-pro', 'claude-max-5x', 'claude-max-20x',
    'claude-team-standard', 'claude-team-premium', 'claude-enterprise',
  ]);
  assert.equal(byId.get('claude-free')?.billing_options.value[0]?.subscription_fee?.amount, '0');
  assert.equal(byId.get('claude-pro')?.billing_options.value[0]?.subscription_fee?.amount, '20');
  assert.equal(byId.get('claude-pro')?.billing_options.value[1]?.subscription_fee?.amount, '200');
  assert.equal(byId.get('claude-max-5x')?.billing_options.value[0]?.subscription_fee?.amount, '100');
  assert.equal(byId.get('claude-max-20x')?.billing_options.value[0]?.subscription_fee?.amount, '200');
  assert.equal(byId.get('claude-team-standard')?.billing_options.value[0]?.subscription_fee?.amount, '25');
  assert.equal(byId.get('claude-team-standard')?.billing_options.value[1]?.subscription_fee?.amount, '240');
  assert.equal(byId.get('claude-team-premium')?.billing_options.value[0]?.subscription_fee?.amount, '125');
  assert.equal(byId.get('claude-team-premium')?.billing_options.value[1]?.subscription_fee?.amount, '1200');
  assert.deepEqual(byId.get('claude-enterprise')?.billing_options.value, []);
  assert.ok(result.reviewItems.some(({ subject_ref }) => subject_ref === 'global/claude-enterprise'));
  assert.ok(result.plans.every((plan) => plan.id.evidence.every(({ source_ref }) => [pricing.source.id, guide.source.id].includes(source_ref))));

  const documents = [pricing, guide, catalog, messages, apiPricing];
  const facts = officialDocsParser.sourceGapFacts(documents, anthropicCollectorConfig);
  const observationIR = officialDocsParser.toCollectionIR('anthropic', documents, facts);
  const ir = anthropicParser.mapAnthropicEndpoint(documents, observationIR);
  const globalService = ir.services.find(({ id }) => id.value === 'global');
  assert.equal(ir.profile?.name?.value, 'Anthropic');
  assert.deepEqual(ir.profile?.aliases?.value, ['Claude API']);
  assert.equal(ir.profile?.kind?.value, 'first_party');
  assert.equal(ir.profile?.docs?.value.overview, catalog.source.url);
  assert.equal(globalService?.name?.value, '国际市场');
  assert.deepEqual(globalService?.offerings.map(({ provider_model_id }) => provider_model_id.value), [
    'claude-fable-5-1', 'claude-opus-5-5', 'claude-sonnet-5-5', 'claude-haiku-5-5',
    'claude-opus-4-8',
  ]);
  const priceByModelId = new Map(globalService?.offerings.map(({ provider_model_id, prices }) => [provider_model_id.value, prices[0]]));
  const fablePrice = priceByModelId.get('claude-fable-5-1');
  assert.equal(fablePrice?.currency.value, 'USD');
  assert.equal(fablePrice?.unit.value, 'per_1m_tokens');
  assert.deepEqual(fablePrice?.rules.value[0]?.rate_items.map(({ metric, ttl, amount_decimal }) => [metric, ttl ?? null, amount_decimal]), [
    ['input', null, '10'], ['cache_write', '5min', '12.50'], ['cache_write', '1h', '20'],
    ['cache_read', null, '0.25'], ['output', null, '50'],
  ]);
  const haikuRules = priceByModelId.get('claude-haiku-5-5')?.rules.value ?? [];
  assert.deepEqual(haikuRules.map(({ when }) => when), [
    { field: 'usage.input_tokens', operator: 'lte', value: 100_000 },
    { field: 'usage.input_tokens', operator: 'gt', value: 100_000 },
  ]);
  assert.equal(haikuRules[0]?.rate_items[0]?.amount_decimal, '0.10');
  assert.equal(haikuRules[1]?.rate_items[4]?.amount_decimal, '2.50');
  assert.ok(globalService?.offerings.slice(0, 4).every(({ supply_observations, operations }) => supply_observations[0]?.kind === 'listed_current' && operations.length === 0));
  assert.equal(globalService?.offerings[4]?.operations.length, 0);
  assert.ok(globalService?.offerings.every(({ operations }) => operations.length === 0), 'generic Messages documentation does not become a per-model Route');
  assert.equal(ir.coverage.find(({ source_ref, scope }) => source_ref === pricing.source.id && scope === 'plan')?.status, 'partial');
  assert.equal(ir.coverage.find(({ source_ref, scope }) => source_ref === guide.source.id && scope === 'plan')?.status, 'complete');
  assert.equal(ir.coverage.find(({ source_ref, scope }) => source_ref === catalog.source.id && scope === 'model_catalog')?.status, 'complete');
  assert.equal(ir.coverage.find(({ source_ref, scope }) => source_ref === apiPricing.source.id && scope === 'pricing')?.status, 'complete');
  assert.deepEqual(ir.coverage.filter(({ source_ref, scope }) => source_ref === apiPricing.source.id && scope === 'pricing').map(({ record_count, record_unit }) => [record_count, record_unit]), [
    [5, 'models with mapped price facts'],
  ]);
  assert.match(ir.coverage.find(({ source_ref, scope }) => source_ref === messages.source.id && scope === 'api')?.note ?? '', /Model-specific Route support is not inferred/);
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});
