import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { CapturedDocument } from '../document-set.ts';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { STEPFUN_INGEST_SOURCES } from './sources.ts';
import { stepfunParser, type StepFunCandidateFacts } from './collect.ts';

function document(id: string, body: string): CapturedDocument {
  const source = STEPFUN_INGEST_SOURCES.find((candidate) => candidate.id === id)!;
  return {
    source,
    metadata: { source_id: source.id, source_name: source.name, request_url: source.url, retrieved_at: '2026-10-25T00:00:00.000Z', http_status: 200, content_type: 'text/markdown', etag: null, last_modified: null, content_hash: '', byte_length: 0, collector_version: 'test', body_file: '' },
    body,
  };
}

function baseFacts(): StepFunCandidateFacts {
  return {
    market: 'cn',
    current_catalog_entries: [
      { display_name: 'Step 5 Preview', source_id: 'stepfun-model-catalog' },
      { display_name: 'StepAudio 2.5 Chat', source_id: 'stepfun-model-catalog' },
    ],
    current_models: [
      { model_id: 'step-5-preview', source_id: 'stepfun-model-catalog', evidence: '目录列出 Step 5 Preview；价格 ID 精确匹配。' },
      { model_id: 'stepaudio-2.5-chat', source_id: 'stepfun-model-catalog', evidence: '目录列出 StepAudio 2.5 Chat；价格 ID 精确匹配。' },
    ],
    api_price_rows: [], price_listed_model_ids: ['step-5-preview'], step_plan_rows: [], api_routes: [],
    international: {
      market: 'global',
      current_catalog_entries: [{ display_name: 'Step 5 Preview', source_id: 'stepfun-global-model-catalog' }],
      current_models: [{ model_id: 'step-5-preview', source_id: 'stepfun-global-model-catalog', evidence: 'catalog row' }],
      api_price_rows: [], step_plan_rows: [], api_routes: [], api_document_sources: [], capability_document_sources: [], source_gaps: [],
    },
    source_coverage: [],
  };
}

describe('阶跃星辰官方通用目录解析', () => {
  it('只将目录明确标注的 API 模型 ID 作为当前目录观察', () => {
    const catalog = document('stepfun-model-catalog', [
      '## 全部公开模型',
      'Step 5 Preview旗舰模型',
      '最大上下文1M',
      '# 模型列表',
      '描述：最大上下文 1M。API 模型 ID：`step-5-preview`。',
      '替代模型 `step-3.7-flash`。',
      'API 模型 ID：`stepaudio-3-tts`。',
      'StepAudio 3 TTS真人级生成。',
      'TTS 服务说明。',
    ].join('\n'));
    const parsed = stepfunParser.parseCurrentModels(catalog);
    assert.deepEqual(parsed.map(({ model_id }) => model_id), ['step-5-preview', 'stepaudio-3-tts']);
    assert.deepEqual(stepfunParser.parseCatalogEntries(catalog).map(({ display_name }) => display_name), ['Step 5 Preview旗舰模型', 'StepAudio 3 TTS真人级生成。']);
  });

  it('价格表保留原始币种和单位', () => {
    const priceRows = stepfunParser.markdownTables(document('stepfun-api-pricing', [
      '## 文本与多模态模型',
      '| Model ID | 输入价格 | 输出价格 |',
      '| - | - | - |',
      '| `step-5-preview` | 7 元／百万 tokens | 20 元／百万 tokens |',
    ].join('\n')));
    assert.equal(priceRows[0]?.cells[1], '7 元／百万 tokens');
    assert.equal(priceRows[0]?.source_id, 'stepfun-api-pricing');
  });

  it('按市场映射当前目录供应及完整 Token 价格，并拒绝不完整价格表', () => {
    const cnCatalog = document('stepfun-model-catalog', '## 全部公开模型\nStep 5 Preview');
    const cnPrice = document('stepfun-api-pricing', [
      '# API 定价', '单价以人民币计价。', '## 文本与多模态模型', '单位：元／百万 tokens。',
      '| Model ID | 输入价格（缓存未命中） | 输入价格（缓存命中） | 输出价格 |',
      '| - | - | - | - |', '| `step-5-preview` | 7 | 0.70 | 20 |',
      '## 语音模型', '### 按 Token 计费', '单位：元／百万 tokens。',
      '| Model ID | 输入价格（缓存未命中） | 输入价格（缓存命中） | 输出价格 | 状态 |',
      '| - | - | - | - | - |', '| `stepaudio-2.5-chat` | 10 | 2 | 25 | 按量计费 |',
    ].join('\n'));
    const globalCatalog = document('stepfun-global-model-catalog', '## All public models\nStep 5 Preview');
    const globalPrice = document('stepfun-global-api-pricing', [
      '# Pricing and Rate Limits', '## Pricing Details', '### Pricing for Reasoning Models',
      '| Model | Billing unit | Input (cache miss) | Input (cache hit) | Output |',
      '| :- | :- | :- | :- | :- |', '| `step-5-preview` | 1M tokens | \\$1.00 | \\$0.10 | \\$2.70 |',
    ].join('\n'));
    const facts: StepFunCandidateFacts = {
      ...baseFacts(),
      api_price_rows: stepfunParser.markdownTables(cnPrice),
      international: { ...baseFacts().international, api_price_rows: stepfunParser.markdownTables(globalPrice) },
    };
    const ir = stepfunParser.toStepfunIR([cnCatalog, cnPrice, globalCatalog, globalPrice], facts);

    assert.equal(ir.profile?.kind?.value, 'first_party');
    assert.equal(ir.profile?.kind?.evidence[0]?.source_ref, 'stepfun-model-catalog');
    assert.equal(ir.services.length, 2);
    const cnOfferings = ir.services.find(({ id }) => id.value === 'cn')?.offerings ?? [];
    assert.equal(cnOfferings.length, 2);
    const cnOffering = cnOfferings.find(({ provider_model_id }) => provider_model_id.value === 'step-5-preview');
    assert.equal(cnOffering?.provider_model_id.value, 'step-5-preview');
    assert.ok(cnOffering?.display_name?.value.startsWith('Step 5 Preview'));
    assert.deepEqual(cnOffering?.prices[0]?.rules.value[0]?.rate_items.map(({ amount_decimal }) => amount_decimal), ['7', '0.70', '20']);
    assert.equal(cnOffering?.prices[0]?.currency.value, 'CNY');
    const audioTokenOffering = cnOfferings.find(({ provider_model_id }) => provider_model_id.value === 'stepaudio-2.5-chat');
    assert.deepEqual(audioTokenOffering?.prices[0]?.rules.value[0]?.rate_items.map(({ amount_decimal }) => amount_decimal), ['10', '2', '25']);
    const globalOffering = ir.services.find(({ id }) => id.value === 'global')?.offerings[0];
    assert.equal(globalOffering?.prices[0]?.currency.value, 'USD');
    assert.deepEqual(globalOffering?.prices[0]?.rules.value[0]?.rate_items.map(({ amount_decimal }) => amount_decimal), ['1.00', '0.10', '2.70']);
    assert.deepEqual(ir.source_refs, ['stepfun-model-catalog', 'stepfun-api-pricing', 'stepfun-global-model-catalog', 'stepfun-global-api-pricing']);
    assert.equal(ir.coverage.find(({ source_ref }) => source_ref === 'stepfun-api-pricing')?.market, 'cn');
    assert.equal(ir.coverage.find(({ source_ref }) => source_ref === 'stepfun-global-model-catalog')?.market, 'global');
    assert.deepEqual(cnOffering?.prices[0]?.rules.value[0]?.evidence.map(({ source_ref }) => source_ref), ['stepfun-api-pricing']);
    assert.equal(ir.coverage.find(({ source_ref }) => source_ref === 'stepfun-api-pricing')?.record_count, 2);
    assert.equal(ir.coverage.find(({ source_ref }) => source_ref === 'stepfun-api-pricing')?.record_unit, 'PriceFact records');
    assert.equal(ir.review_items.length, 1);
    assert.ok(ir.review_items.some(({ id }) => id === 'stepfun-domain-facts-not-normalized'));
    assert.deepEqual(validateProviderCollectionIR(ir, [cnCatalog, cnPrice, globalCatalog, globalPrice].map(({ metadata }) => metadata)), []);

    const incompletePrice = document('stepfun-api-pricing', [
      '## 文本与多模态模型',
      '| Model ID | 输入价格（缓存未命中） | 缓存命中价格 | 输出价格 |',
      '| - | - | - | - |', '| `step-5-preview` | 7 | 0.70 | 20 |',
    ].join('\n'));
    const incompleteIR = stepfunParser.toStepfunIR([cnCatalog, incompletePrice, globalCatalog, globalPrice], facts);
    assert.equal(incompleteIR.services.find(({ id }) => id.value === 'cn')?.offerings[0]?.prices.length, 0);
  });

  it('缺少任一市场模型目录时拒绝生成 IR', () => {
    const cnCatalog = document('stepfun-model-catalog', '## 全部公开模型\nStep 5 Preview');
    assert.throws(() => stepfunParser.toStepfunIR([cnCatalog], baseFacts()), /中国区或国际区模型目录来源缺失/);
  });
});
