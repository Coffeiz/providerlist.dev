import assert from 'node:assert/strict';
import test from 'node:test';

import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { parseMiniMaxMarketFacts, parseMiniMaxModelCatalog, parseMiniMaxPlanDescriptions, toMiniMaxIR } from './collect.ts';
import type { CapturedDocument } from '../document-set.ts';
import { MINIMAX_INGEST_SOURCES } from './sources.ts';

const CN_CATALOG = `
## 可用模型

### 语言模型
| 模型名称 | 描述 |
| :- | :- |
| MiniMax-M3.1-Flash | 原生多模态 |
| MiniMax-M3 | 长上下文 |

## 历史模型
| 模型名称 | 类型 | 状态 |
| :- | :- | :- |
| MiniMax-M2.7 | 语言模型 | 已下线 |
`;

const EN_CATALOG = `
## Available Models

### LLM
| Model | Description |
| :- | :- |
| MiniMax-M3.1-Flash | Multimodal |
| MiniMax-M3 | Long context |

## Retired Models
| Model | Type | Status |
| :- | :- | :- |
| MiniMax-M2.7 | LLM | Retired |
`;

const CN_M_PLAN_INTRO = `
## 用量额度
| 档位 | 用量（相对 Go） | 使用参考 |
| :- | :- | :- |
| Go | - | 入门使用，完成简单调研、轻量写作或小范围的代码修改。 |
| Explore | 3 倍 | 每天使用，日常辅助编程、写作与资料整理，处理多轮任务。 |
| Build | 12 倍 | 高频使用，处理长上下文、复杂的编程任务或大量多模态创作。 |
`;

const EN_M_PLAN_INTRO = `
## Usage limits
| Tier | Usage relative to Go | Usage guide |
| :- | :- | :- |
| Go | - | Getting started with simple research, light writing, or small code changes. |
| Explore | 3x | Daily use for coding, writing, organizing information, and multi-turn tasks. |
| Build | 7.5x | Frequent use for long-context work, complex coding tasks, or extensive multimodal creation. |
`;

function docs(catalog: string, pricing: string, cache: string) {
  return {
    catalog,
    pricing,
    prompt_caching: cache,
  };
}

test('解析中英文官方模型目录，保留目录类别和退役原文但不采集规格描述', () => {
  assert.deepEqual(parseMiniMaxModelCatalog(CN_CATALOG), [
    { model_id: 'MiniMax-M2.7', source_category: '语言模型', source_listing: 'historical', source_status: '已下线' },
    { model_id: 'MiniMax-M3', source_category: '语言模型', source_listing: 'available' },
    { model_id: 'MiniMax-M3.1-Flash', source_category: '语言模型', source_listing: 'available' },
  ]);
  assert.deepEqual(parseMiniMaxModelCatalog(EN_CATALOG).map((model) => model.model_id), [
    'MiniMax-M2.7', 'MiniMax-M3', 'MiniMax-M3.1-Flash',
  ]);
});

test('模型事实只保留目录与价格；规格和缓存支持范围由手工层维护', () => {
  const pricingCn = `以下价格均以人民币计价。\n## 语言模型\n| 模型 | 输入价格 元/百万 tokens | 输出价格 元/百万 tokens | 缓存读取 元/百万 tokens |\n| :- | :- | :- | :- |\n| MiniMax-M3.1-Flash | 1.00 | 4.00 | 0.20 |`;
  const pricingGlobal = `All prices are in USD.\n## LLM\n| Model | Input $ / M tokens | Output $ / M tokens | Prompt caching Read $ / M tokens |\n| :- | :- | :- | :- |\n| MiniMax-M3.1-Flash | $0.15 | $0.60 | $0.015 |\n| MiniMax-M3 ≤ 512k input tokens Permanent 50% off | ~~$0.60~~ $0.30 | ~~$2.40~~ $1.20 | ~~$0.12~~ $0.06 |`;
  const cacheCn = `支持模型：MiniMax-M3.1-Flash、MiniMax-M3、MiniMax-M2.7 系列\n缓存适用于 512 个及以上的输入 token 数量。`;
  const cacheGlobal = `Supported models: MiniMax-M3.1-Flash, MiniMax-M3, MiniMax-M2.7 series\nCache applies to 512 or more input tokens.`;
  const cn = parseMiniMaxMarketFacts('cn', docs(CN_CATALOG, pricingCn, cacheCn));
  const global = parseMiniMaxMarketFacts(
    'global',
    docs(EN_CATALOG, pricingGlobal, cacheGlobal),
  );

  const cnFlash = cn.models.find((model) => model.model_id === 'MiniMax-M3.1-Flash');
  const globalFlash = global.models.find((model) => model.model_id === 'MiniMax-M3.1-Flash');
  assert.equal(cn.market, 'cn');
  assert.equal(global.market, 'global');
  assert.equal('context_window_tokens' in (cnFlash ?? {}), false);
  assert.equal('prompt_cache_supported' in (cnFlash ?? {}), false);
  assert.equal('minimum_cacheable_input_tokens' in (cnFlash ?? {}), false);
  assert.equal(cnFlash?.pricing_rows[0]?.values[1], '1.00');
  assert.equal(cnFlash?.pricing_rows[0]?.currency_code, 'CNY');
  assert.equal(cnFlash?.pricing_rows[0]?.normalized_rates[0]?.amount_decimal, '1.00');
  assert.equal(cnFlash?.pricing_rows[0]?.normalized_rates[0]?.unit, 'per_1m_tokens');
  assert.match(cnFlash?.pricing_rows[0]?.currency_evidence ?? '', /人民币/);
  assert.equal(globalFlash?.pricing_rows[0]?.values[1], '$0.15');
  assert.equal(globalFlash?.pricing_rows[0]?.currency_code, 'USD');
  assert.equal(globalFlash?.pricing_rows[0]?.normalized_rates[0]?.amount_decimal, '0.15');
  assert.equal(globalFlash?.pricing_rows[0]?.normalized_rates[0]?.unit, 'per_1m_tokens');
  assert.equal(globalFlash?.pricing_rows[0]?.normalized_rates[2]?.metric, 'cache_read');
  assert.equal(globalFlash?.pricing_rows[0]?.normalized_rates[2]?.amount_decimal, '0.015');
  const globalM3 = global.models.find((model) => model.model_id === 'MiniMax-M3');
  assert.equal(globalM3?.pricing_rows[0]?.normalized_rates[0]?.list_amount_decimal, '0.60');
  assert.equal(globalM3?.pricing_rows[0]?.normalized_rates[0]?.amount_decimal, '0.30');
  assert.equal(globalM3?.pricing_rows[0]?.normalized_rates[1]?.list_amount_decimal, '2.40');
  assert.equal(globalM3?.pricing_rows[0]?.normalized_rates[2]?.list_amount_decimal, '0.12');
  assert.equal('minimum_cacheable_input_tokens' in (globalFlash ?? {}), false);
  assert.equal('prompt_cache_supported' in (cn.models.find((model) => model.model_id === 'MiniMax-M2.7') ?? {}), false);
});

test('MiniMax 模型目录结构改变时显式失败', () => {
  assert.throws(() => parseMiniMaxModelCatalog('# 未知页面'), /找不到可用模型与历史模型章节/);
});

test('M Plan 描述按市场逐字取自对应文档，避免国际市场复用中文文案', () => {
  const cn = parseMiniMaxPlanDescriptions('cn', CN_M_PLAN_INTRO);
  const global = parseMiniMaxPlanDescriptions('global', EN_M_PLAN_INTRO);
  assert.equal(cn[0]?.description, '入门使用，完成简单调研、轻量写作或小范围的代码修改。');
  assert.equal(global[0]?.description, 'Getting started with simple research, light writing, or small code changes.');
  assert.deepEqual(cn.map(({ tier }) => tier), ['Go', 'Explore', 'Build']);
  assert.deepEqual(global.map(({ tier }) => tier), ['Go', 'Explore', 'Build']);
  assert.ok(global.every(({ source_id }) => source_id === 'minimax-global-m-plan-intro'));
  assert.throws(() => parseMiniMaxPlanDescriptions('global', CN_M_PLAN_INTRO), /来源市场语言不符/);
});

test('只有货币符号时保留符号和原文，不猜 ISO 币种代码', () => {
  const facts = parseMiniMaxMarketFacts('global', docs(
    EN_CATALOG,
    `## LLM\n| Model | Input per M tokens |\n| :- | :- |\n| MiniMax-M3.1-Flash | ¥1.00 |`,
    '',
  ));
  const price = facts.models.find((model) => model.model_id === 'MiniMax-M3.1-Flash')?.pricing_rows[0];
  assert.equal(price?.currency_code, undefined);
  assert.equal(price?.currency_symbol, '¥');
  assert.equal(price?.values[1], '¥1.00');
  assert.equal(price?.normalized_rates[0]?.amount_decimal, '1.00');
});

test('MiniMax IR 按市场保留目录与价格观察，不将混合来源直接转成领域事实', () => {
  const markets = [
    parseMiniMaxMarketFacts('cn', { ...docs(CN_CATALOG, '| 模型 | 输入价格 |\n|---|---|\n| MiniMax-M3 | ¥1.00 |', ''), m_plan_intro: CN_M_PLAN_INTRO }),
    parseMiniMaxMarketFacts('global', { ...docs(EN_CATALOG, '| Model | Input price |\n|---|---|\n| MiniMax-M3 | $0.10 |', ''), m_plan_intro: EN_M_PLAN_INTRO }),
  ];
  const documents: CapturedDocument[] = MINIMAX_INGEST_SOURCES.map((source, index) => {
    const body = source.id.includes('model-catalog') ? (source.market === 'cn' ? CN_CATALOG : EN_CATALOG)
      : source.id === 'minimax-cn-m-plan-intro' ? CN_M_PLAN_INTRO
        : source.id === 'minimax-global-m-plan-intro' ? EN_M_PLAN_INTRO
          : 'Official documentation evidence.';
    return {
      source, body,
      metadata: {
        source_id: source.id, market: source.market, source_name: source.name, request_url: source.url,
        retrieved_at: `2026-10-26T00:0${index % 10}:00.000Z`, http_status: 200, content_type: 'text/markdown',
        etag: null, last_modified: null, content_hash: `sha256:${String(index).padStart(64, '0')}`,
        byte_length: body.length, collector_version: 'test', body_file: `${source.id}.body`,
      },
    };
  });
  const ir = toMiniMaxIR(documents, markets);
  assert.deepEqual(ir.document_observations.find(({ source_ref }) => source_ref === 'minimax-cn-model-catalog')?.model_id_mentions, ['MiniMax-M2.7', 'MiniMax-M3', 'MiniMax-M3.1-Flash']);
  assert.equal((ir.document_observations.find(({ source_ref }) => source_ref === 'minimax-global-m-plan-intro')?.structured_records[0] as { description?: string } | undefined)?.description,
    'Getting started with simple research, light writing, or small code changes.');
  assert.equal(ir.coverage.find(({ source_ref }) => source_ref === 'minimax-global-m-plan-intro')?.status, 'complete');
  assert.equal(ir.coverage.find(({ source_ref }) => source_ref === 'minimax-global-pricing')?.status, 'partial');
  assert.deepEqual(ir.services, []);
  assert.ok(ir.review_items.some(({ id }) => id === 'minimax-observations-await-complete-domain-mapping'));
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});
