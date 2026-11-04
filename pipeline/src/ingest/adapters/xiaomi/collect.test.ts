import assert from 'node:assert/strict';
import test from 'node:test';

import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import type { CapturedDocument } from '../document-set.ts';
import { XIAOMI_INGEST_SOURCES } from './sources.ts';
import { xiaomiParser, type XiaomiCandidateFacts } from './collect.ts';

function document(sourceId: string, body: string): CapturedDocument {
  const source = XIAOMI_INGEST_SOURCES.find(({ id }) => id === sourceId)!;
  return {
    source,
    body,
    metadata: {
      source_id: source.id,
      market: source.market,
      source_name: source.name,
      request_url: source.url,
      retrieved_at: '2026-10-26T00:00:00.000Z',
      http_status: 200,
      content_type: source.extraction === 'json' ? 'application/json' : 'text/html',
      etag: null,
      last_modified: null,
      content_hash: `sha256:${'c'.repeat(64)}`,
      byte_length: body.length,
      collector_version: 'test',
      body_file: `${source.id}.body`,
    },
  };
}

test('小米模型目录只保留模型身份，其他字段需由手工 Model 数据维护', () => {
  const catalog = document('xiaomi-api-models', JSON.stringify({
    data: [{ id: 'mimo-v2.5-pro', name: 'MiMo V2.5 Pro', context_length: 262144, description: 'ignored model details', pricing: { prompt: 7 } }],
  }));
  const pricing = document('xiaomi-api-pricing', '<h1>定价</h1><p>按百万 Token 计费</p>');
  const tokenPlan = document('xiaomi-token-plan', '<h1>Token Plan</h1>');
  const profile = document('xiaomi-model-list-doc', '<title>Xiaomi MiMo Home</title><a href="https://mimo.xiaomi.com/">官网</a><p>Copyright©2026 Xiaomi. All Rights Reserved</p>');
  const current: XiaomiCandidateFacts = {
    api_catalog_models: [{ id: 'mimo-v2.5-pro', name: 'MiMo V2.5 Pro' }],
    source_id: catalog.source.id,
    price_currency_and_unit: 'not_declared_in_catalog_payload',
    market_scope: 'api_host_scope_requires_review',
    models_dev_entries: ['xiaomi'],
    official_observations: [],
  };

  const ir = xiaomiParser.toXiaomiIR([catalog, pricing, tokenPlan, profile], current);
  const catalogObservation = ir.document_observations.find(({ source_ref }) => source_ref === catalog.source.id);

  assert.equal(ir.services.length, 2);
  assert.deepEqual(catalogObservation?.model_id_mentions, ['mimo-v2.5-pro']);
  assert.equal(catalogObservation?.structured_records.length, 1);
  assert.equal(ir.coverage.find(({ source_ref }) => source_ref === catalog.source.id)?.status, 'partial');
  assert.equal(ir.coverage.find(({ source_ref }) => source_ref === pricing.source.id)?.status, 'partial');
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === pricing.source.id).map(({ record_count, record_unit }) => [record_count, record_unit]), [
    [0, 'recognized price rows'],
  ]);
  assert.equal(ir.review_items.some(({ kind }) => kind === 'source_conflict'), false);
  assert.equal(ir.review_items.some(({ id }) => id === 'api-catalog-market-and-supply-unresolved'), true);
  assert.equal(ir.profile?.name?.value, 'Xiaomi MiMo');
  assert.equal(ir.profile?.kind?.value, 'first_party');
  assert.equal(ir.services.every(({ offerings }) => offerings.length === 0), true, '档案和目录来源不能推断没有价格证据的当前供应');
  assert.deepEqual(xiaomiParser.parseModels(catalog), [{ id: 'mimo-v2.5-pro', name: 'MiMo V2.5 Pro' }]);
  assert.deepEqual(validateProviderCollectionIR(ir, [catalog, pricing, tokenPlan, profile].map(({ metadata }) => metadata)), []);
});

test('小米按官方定价表映射两市场 Token 与 ASR 价格，保留批量条件和小时单位', () => {
  const catalog = document('xiaomi-api-models', JSON.stringify({ data: [
    { id: 'xiaomi/mimo-v2.6-pro', name: 'MiMo V2.6 Pro' },
    { id: 'xiaomi/mimo-v2.6-flash', name: 'MiMo V2.6 Flash' },
    { id: 'xiaomi/mimo-v2.5-asr' },
  ] }));
  const pricing = document('xiaomi-api-pricing', [
    '<p>计费单位：国内：元 / 百万 tokens；海外：美元 / 百万 tokens</p>',
    '<h2>模型国内定价</h2><table><tr><th>推理类型</th><th>模型名称</th><th>输入（命中缓存）</th><th>输入（未命中缓存）</th><th>输出</th></tr>',
    '<tr><td>实时推理</td><td>mimo-v2.6-pro</td><td>¥0.025</td><td>¥3.00</td><td>¥6.00</td></tr>',
    '<tr><td>mimo-v2.6-flash</td><td>¥0.02</td><td>¥1.00</td><td>¥2.00</td></tr>',
    '<tr><td>批量推理</td><td>mimo-v2.6-pro</td><td>¥0.0125</td><td>¥1.50</td><td>¥3.00</td></tr></table>',
    '<table><tr><th>模型名称</th><th>输入音频时长</th></tr><tr><td>mimo-v2.5-asr</td><td>¥0.5 /小时</td></tr></table>',
    '<h2>模型海外定价</h2><table><tr><th>推理类型</th><th>模型名称</th><th>输入（命中缓存）</th><th>输入（未命中缓存）</th><th>输出</th></tr>',
    '<tr><td>实时推理</td><td>mimo-v2.6-pro</td><td>$0.0036</td><td>$0.435</td><td>$0.87</td></tr></table>',
    '<table><tr><th>模型名称</th><th>输入音频时长</th></tr><tr><td>mimo-v2.5-asr</td><td>$0.074 /小时</td></tr></table>',
  ].join(''));
  const current: XiaomiCandidateFacts = {
    api_catalog_models: [
      { id: 'xiaomi/mimo-v2.6-pro', name: 'MiMo V2.6 Pro' },
      { id: 'xiaomi/mimo-v2.6-flash', name: 'MiMo V2.6 Flash' },
      { id: 'xiaomi/mimo-v2.5-asr' },
    ],
    source_id: catalog.source.id,
    price_currency_and_unit: 'not_declared_in_catalog_payload', market_scope: 'api_host_scope_requires_review',
    models_dev_entries: [], official_observations: [],
  };
  const ir = xiaomiParser.toXiaomiIR([catalog, pricing], current);
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === pricing.source.id).map(({ record_count, record_unit }) => [record_count, record_unit]), [
    [6, 'recognized price rows'],
  ]);
  const cn = ir.services.find(({ id }) => id.value === 'cn')!;
  const global = ir.services.find(({ id }) => id.value === 'global')!;
  const cnPro = cn.offerings.find(({ provider_model_id }) => provider_model_id.value === 'mimo-v2.6-pro')!;
  const cnFlash = cn.offerings.find(({ provider_model_id }) => provider_model_id.value === 'mimo-v2.6-flash')!;
  const cnAsr = cn.offerings.find(({ provider_model_id }) => provider_model_id.value === 'mimo-v2.5-asr')!;
  const globalPro = global.offerings.find(({ provider_model_id }) => provider_model_id.value === 'mimo-v2.6-pro')!;
  const batchRule = cnPro.prices[0]!.rules.value.find(({ conditions }) => conditions?.[0] && 'field' in conditions[0] && conditions[0].value === 'batch')!;
  assert.equal(cn.id.value, 'cn');
  assert.equal(global.id.value, 'global');
  assert.equal(cnPro.display_name?.value, 'MiMo V2.6 Pro');
  assert.equal(cnPro.prices[0]!.currency.value, 'CNY');
  assert.equal(cnFlash.prices[0]!.rules.value[0]!.rate_items[0]!.amount_decimal, '0.02', '合并行中的 rowspan 单元格缺位时，仍按精确模型 ID 读取价格列');
  assert.deepEqual(batchRule.rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal]), [
    ['cache_read', '0.0125'], ['input', '1.50'], ['output', '3.00'],
  ]);
  assert.equal(globalPro.prices[0]!.currency.value, 'USD');
  assert.equal(cnAsr.prices[0]!.unit.value, 'per_hour');
  assert.deepEqual(validateProviderCollectionIR(ir, [catalog, pricing].map(({ metadata }) => metadata)), []);
});

test('小米不猜动态 Batch 地域、限时免费有效期或目录中不存在的价格型号', () => {
  const catalog = document('xiaomi-api-models', JSON.stringify({ data: [{ id: 'xiaomi/mimo-v2.6-pro' }] }));
  const pricing = document('xiaomi-api-pricing', '<p>限时免费：mimo-v2.5-tts</p><table><tr><th>模型名称</th><th>输入（命中缓存）</th><th>输入（未命中缓存）</th><th>输出</th></tr><tr><td>mimo-v2.6-flash</td><td>¥0.02</td><td>¥1.00</td><td>¥2.00</td></tr></table>');
  const batch = document('xiaomi-batch-api', '<p>Base URL: https://batch-api-${region}.xiaomimimo.com/v1</p>');
  const current: XiaomiCandidateFacts = {
  api_catalog_models: [{ id: 'xiaomi/mimo-v2.6-pro' }], source_id: catalog.source.id,
    price_currency_and_unit: 'not_declared_in_catalog_payload', market_scope: 'api_host_scope_requires_review',
    models_dev_entries: [], official_observations: [],
  };
  const ir = xiaomiParser.toXiaomiIR([catalog, pricing, batch], current);
  assert.equal(ir.services.every(({ offerings }) => offerings.length === 0), true);
  assert.equal(ir.review_items.some(({ id }) => id.startsWith('pricing-model-not-in-catalog-cn-mimo-v2.6-flash')), true);
  assert.equal(ir.review_items.some(({ id }) => id === 'limited-free-tts-duration-unknown'), true);
  assert.equal(ir.review_items.some(({ id }) => id === 'batch-endpoint-region-placeholder-unresolved'), true);
  assert.equal(ir.services.every(({ endpoints }) => endpoints.length === 0), true);
});

test('小米不会从 API 文档补充目录缺失的模型身份', () => {
  const catalog = document('xiaomi-api-models', JSON.stringify({ data: [{ id: 'xiaomi/mimo-v2.6-pro' }] }));
  const asrApi = document('xiaomi-asr-api', '<h1>语音识别（MiMo‑V2.5-ASR）- OpenAI API 兼容</h1><p>POST 语音识别。</p>');
  const pricing = document('xiaomi-api-pricing', [
    '<table><tr><th>模型名称</th><th>输入音频时长</th></tr><tr><td>mimo-v2.5-asr</td><td>¥0.5 /小时</td></tr></table>',
    '<table><tr><th>模型名称</th><th>输入音频时长</th></tr><tr><td>mimo-v2.5-asr</td><td>$0.074 /小时</td></tr></table>',
  ].join(''));
  const current: XiaomiCandidateFacts = {
  api_catalog_models: [{ id: 'xiaomi/mimo-v2.6-pro' }], source_id: catalog.source.id,
    price_currency_and_unit: 'not_declared_in_catalog_payload', market_scope: 'api_host_scope_requires_review',
    models_dev_entries: [], official_observations: [],
  };
  const ir = xiaomiParser.toXiaomiIR([catalog, asrApi, pricing], current);
  const cnAsr = ir.services.find(({ id }) => id.value === 'cn')!.offerings.find(({ provider_model_id }) => provider_model_id.value === 'mimo-v2.5-asr');
  const globalAsr = ir.services.find(({ id }) => id.value === 'global')!.offerings.find(({ provider_model_id }) => provider_model_id.value === 'mimo-v2.5-asr');
  assert.equal(cnAsr, undefined);
  assert.equal(globalAsr, undefined);
  assert.equal(ir.review_items.some(({ id }) => id.includes('pricing-model-not-in-catalog')), true);
  assert.deepEqual(validateProviderCollectionIR(ir, [catalog, asrApi, pricing].map(({ metadata }) => metadata)), []);
});

test('小米 IR 不接受空目录或缺少目录来源', () => {
  const catalog = document('xiaomi-api-models', '{"data":[]}');
  assert.throws(() => xiaomiParser.parseModels(catalog), /为空/);
  assert.throws(() => xiaomiParser.toXiaomiIR([], {
  api_catalog_models: [], source_id: 'xiaomi-api-models',
    price_currency_and_unit: 'not_declared_in_catalog_payload', market_scope: 'api_host_scope_requires_review',
    models_dev_entries: [], official_observations: [],
  }), /来源缺失/);
});
