import test from 'node:test';
import assert from 'node:assert/strict';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { volcengineParser, type VolcengineCandidateFacts } from './collect.ts';
import type { CapturedDocument } from '../document-set.ts';
import { VOLCENGINE_INGEST_SOURCES } from './sources.ts';

test('火山方舟候选保留按量价格行、模型 ID 和价格章节', () => {
  const rows = volcengineParser.parseEvidence([
    '# 大语言模型',
    'doubao-seed-2.0-pro | 输入长度 [0, 32] | 1.20 元/百万 token | 7.20 元/百万 token',
    '# 视频生成模型',
    'doubao-seedance-2.5 | 在线推理 | 70 元/百万 token',
  ].join('\n'));
  assert.deepEqual(rows.map(({ section, model_ids }) => ({ section, model_ids })), [
    { section: '大语言模型', model_ids: ['doubao-seed-2.0-pro'] },
    { section: '视频生成模型', model_ids: ['doubao-seedance-2.5'] },
  ]);
});

test('火山方舟解析不把无模型 ID 的计费说明作为模型行', () => {
  assert.deepEqual(volcengineParser.parseEvidence('按 token 后付费，价格低至 50%'), []);
});

test('火山方舟价格采集按官方表头区分非音频、峰谷时段、低优先级和批量价格', () => {
  const rows = volcengineParser.parseEvidence([
    '# 在线推理（常规）',
    '|模型名称|条件|输入（非音频）|输入（音频）|缓存存储|缓存命中（非音频）|缓存命中（音频）|输出|',
    '|---|---|---:|---:|---:|---:|---:|---:|',
    '|deepseek-v4-1-flash|空闲时段|1.25|\\-|0.017|0.03|\\-|5.00|',
    '||高峰时段|2.50|\\-|0.017|0.06|\\-|10.00|',
    '# 在线推理（低优）',
    '|模型名称|条件|输入（非音频）|输入（音频）|缓存命中（非音频）|缓存命中（音频）|输出|',
    '|---|---|---:|---:|---:|---:|---:|',
    '|deepseek-v4-1-flash|空闲时段|0.60|\\-|0.03|\\-|2.50|',
    '|^^|高峰时段|1.20|\\-|0.06|\\-|5.00|',
    '# 批量推理',
    '|模型名称|条件|输入（非音频）|输入（音频）|缓存命中（非音频）|缓存命中（音频）|输出|',
    '|---|---|---:|---:|---:|---:|---:|',
    '|deepseek-v4-1-flash|空闲时段|0.40|\\-|0.02|\\-|1.80|',
    '|^^|高峰时段|0.80|\\-|0.04|\\-|3.60|',
  ].join('\n'));
  const [fact] = volcengineParser.tokenPriceFacts('deepseek-v4-1-flash-260910', ['deepseek-v4-1-flash'], rows, 'volcengine-model-pricing');

  assert.ok(fact);
  const rules = fact.rules.value;
  assert.equal(rules.length, 6);
  assert.deepEqual(rules.map(({ conditions, rate_items }) => ({
    conditions: conditions?.map((condition) => 'field' in condition ? [condition.field, condition.value] : condition),
    rates: rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal]),
  })), [
    { conditions: [['time_period', 'off_peak']], rates: [['input', '1.25'], ['cache_storage', '0.017'], ['cache_read', '0.03'], ['output', '5.00']] },
    { conditions: [['time_period', 'peak']], rates: [['input', '2.50'], ['cache_storage', '0.017'], ['cache_read', '0.06'], ['output', '10.00']] },
    { conditions: [['time_period', 'off_peak'], ['service_tier', 'low_priority']], rates: [['input', '0.60'], ['cache_read', '0.03'], ['output', '2.50']] },
    { conditions: [['time_period', 'peak'], ['service_tier', 'low_priority']], rates: [['input', '1.20'], ['cache_read', '0.06'], ['output', '5.00']] },
    { conditions: [['time_period', 'off_peak'], ['request.mode', 'batch_inference']], rates: [['input', '0.40'], ['cache_read', '0.02'], ['output', '1.80']] },
    { conditions: [['time_period', 'peak'], ['request.mode', 'batch_inference']], rates: [['input', '0.80'], ['cache_read', '0.04'], ['output', '3.60']] },
  ]);
  assert.equal(rules[0]!.unsupported_metrics, undefined);
});

test('火山方舟官方目录链接的型号别名用于关联日期版模型价格', () => {
  const source = VOLCENGINE_INGEST_SOURCES.find(({ id }) => id === 'volcengine-model-list')!;
  const rows = volcengineParser.parseModelCatalog({
    source,
    body: '|[deepseek-v4-1-flash-260910](https://ark.volcengine.com/region:cn-beijing/model/detail?name=deepseek-v4-1-flash)|规格|',
  } as CapturedDocument);
  assert.deepEqual(rows.map(({ model_ids, pricing_alias }) => ({ model_ids, pricing_alias })), [
    { model_ids: ['deepseek-v4-1-flash-260910'], pricing_alias: 'deepseek-v4-1-flash' },
  ]);
});

test('火山方舟目录结构变化时不把空目录继续写成有效候选', () => {
  const catalogSource = VOLCENGINE_INGEST_SOURCES.find(({ id }) => id === 'volcengine-model-list')!;
  const documents: CapturedDocument[] = VOLCENGINE_INGEST_SOURCES.map((source, index) => ({
    source,
    body: source.id === 'volcengine-model-list' ? '<html><body>Catalog layout changed</body></html>' : 'registered source fixture',
    metadata: {
      source_id: source.id, market: source.market, source_name: source.name, request_url: source.url,
      retrieved_at: `2026-10-26T00:${String(index).padStart(2, '0')}:00.000Z`, http_status: 200, content_type: 'text/html',
      etag: null, last_modified: null, content_hash: `sha256:${String(index + 1).padStart(64, '0')}`,
      byte_length: 10, collector_version: 'test', body_file: `${source.id}.body`,
    },
  }));
  assert.equal(volcengineParser.parseModelCatalog(documents.find(({ source }) => source.id === catalogSource.id)!).length, 0);
  assert.throws(() => volcengineParser.facts(documents), /模型列表官方目录未解析到模型 ID/);
});

test('火山方舟 IR 按来源保留模型、价格和计划观察，防止价格/套餐线索被误作正式事实', () => {
  const catalogSource = VOLCENGINE_INGEST_SOURCES.find(({ id }) => id === 'volcengine-model-list')!;
  const pricingSource = VOLCENGINE_INGEST_SOURCES.find(({ id }) => id === 'volcengine-model-pricing')!;
  const docs: CapturedDocument[] = [catalogSource, pricingSource].map((source, index) => ({
    source,
    body: index === 0
      ? '<title>模型列表 - 火山方舟 - 火山引擎</title><a class="volcfe-nav-logo" href="//www.volcengine.com"></a><div class="title">火山方舟</div>'
      : `# ${source.id}\n官方内容`,
    metadata: {
      source_id: source.id, market: source.market, source_name: source.name, request_url: source.url,
      retrieved_at: `2026-10-26T00:0${index}:00.000Z`, http_status: 200, content_type: 'text/markdown',
      etag: null, last_modified: null, content_hash: `sha256:${String(index).padStart(64, '0')}`,
      byte_length: 10, collector_version: 'test', body_file: `${source.id}.body`,
    },
  }));
  const facts: VolcengineCandidateFacts = {
    model_catalog_evidence: [{ section: '大语言模型', raw: 'doubao-seed-2.0-pro', model_ids: ['doubao-seed-2.0-pro'] }],
    pricing_evidence: [{ section: '大语言模型', raw: 'doubao-seed-2.0-pro | 1.20', model_ids: ['doubao-seed-2.0-pro'] }],
    api_evidence: [], coding_plan_evidence: [], current_model_api: 'not_called', models_dev_entries: ['volcengine'],
  };
  const ir = volcengineParser.toVolcengineIR(docs, facts);
  assert.deepEqual(ir.document_observations.find(({ source_ref }) => source_ref === catalogSource.id)?.model_id_mentions, ['doubao-seed-2.0-pro']);
  assert.equal(ir.document_observations.find(({ source_ref }) => source_ref === pricingSource.id)?.structured_records.length, 1);
  assert.equal(ir.services.length, 1);
  assert.deepEqual(ir.services[0]!.offerings.map(({ provider_model_id }) => provider_model_id.value), ['doubao-seed-2.0-pro']);
  assert.equal(ir.profile?.name.value, '火山方舟');
  assert.equal(ir.profile?.kind.value, 'cloud_platform');
  assert.ok(ir.review_items.some(({ id }) => id === 'plans-not-payg-pricing'));
  assert.deepEqual(validateProviderCollectionIR(ir, docs.map(({ metadata }) => metadata)), []);
});
