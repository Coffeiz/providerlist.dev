import assert from 'node:assert/strict';
import test from 'node:test';
import { deepseekParser } from './collect.ts';
import type { CapturedDocument } from '../document-set.ts';
import { DEEPSEEK_INGEST_SOURCES } from './sources.ts';

function priceRows(sourceId: string, values: readonly [string, string, string, string, string, string]): { source_id: string; cells: string[] }[] {
  const [flashCacheIdle, proCacheIdle, flashCachePeak, proCachePeak, flashInputIdle, proInputIdle] = values;
  const chinese = sourceId.includes('-cn-');
  const pricing = chinese ? '价格' : 'PRICING';
  const header = chinese ? '模型' : 'MODEL';
  const inputPeak = chinese ? ['2', '9'] : ['0.3', '1.32'];
  const outputIdle = chinese ? ['4', '13.5'] : ['0.6', '1.98'];
  const outputPeak = chinese ? ['8', '27'] : ['1.2', '3.96'];
  return [
    { source_id: sourceId, cells: [header, 'deepseek-flash', 'deepseek-v4-pro'] },
    { source_id: sourceId, cells: [pricing, chinese ? '百万tokens输入（缓存命中）' : '1M INPUT TOKENS(CACHE HIT)', chinese ? '空闲时段' : 'OFF-PEAK', flashCacheIdle, proCacheIdle] },
    { source_id: sourceId, cells: [chinese ? '高峰时段' : 'PEAK', flashCachePeak, proCachePeak] },
    { source_id: sourceId, cells: [chinese ? '百万tokens输入（缓存未命中）' : '1M INPUT TOKENS(CACHE MISS)', chinese ? '空闲时段' : 'OFF-PEAK', flashInputIdle, proInputIdle] },
    { source_id: sourceId, cells: [chinese ? '高峰时段' : 'PEAK', ...inputPeak] },
    { source_id: sourceId, cells: [chinese ? '百万tokens输出' : '1M OUTPUT TOKENS', chinese ? '空闲时段' : 'OFF-PEAK', ...outputIdle] },
    { source_id: sourceId, cells: [chinese ? '高峰时段' : 'PEAK', ...outputPeak] },
  ];
}

test('DeepSeek 当前模型来自官方价格表，旧兼容名不混入当前目录', () => {
  const document = { source: { id: 'deepseek-pricing' }, metadata: {}, body: '| MODEL | deepseek-flash | deepseek-v4-pro |\n|---|---|---|\n| INPUT PRICE | $0.15 | $0.66 |\nlegacy deepseek-v4-flash' } as CapturedDocument;
  assert.deepEqual(deepseekParser.currentModels(document), ['deepseek-flash', 'deepseek-v4-pro']);
});

test('DeepSeek 价格表保留峰谷价与缓存阶梯原始行', () => {
  const document = { source: { id: 'deepseek-pricing' }, metadata: {}, body: '| MODEL | deepseek-flash | deepseek-v4-pro |\n|---|---|---|\n| CACHE HIT PEAK | $0.006 | $0.044 |' } as CapturedDocument;
  assert.deepEqual(deepseekParser.rows(document), [
    { source_id: 'deepseek-pricing', cells: ['MODEL', 'deepseek-flash', 'deepseek-v4-pro'] },
    { source_id: 'deepseek-pricing', cells: ['CACHE HIT PEAK', '$0.006', '$0.044'] },
  ]);
});

test('DeepSeek 模型列表 API 解析真实响应 JSON，并跳过 schema 示例', () => {
  const source = DEEPSEEK_INGEST_SOURCES.find(({ id }) => id === 'deepseek-models-api')!;
  const document = {
    source,
    metadata: {},
    body: '<pre><code>{ "data": [{ "id": "string" }] }</code></pre><pre><code>{ "object": "list", "data": [{ "id": "deepseek-flash", "name": "DeepSeek-V4.1-Flash", "context_window": 1048576, "max_output_tokens": 393216, "input_modalities": ["text", "image"], "effort": { "supported_levels": ["low", "high", "max"] }, "api_capabilities": { "anthropic_messages": { "system_prompt_update": "in-history" } } }] }</code></pre>',
  } as CapturedDocument;
  assert.deepEqual(deepseekParser.extractModelApiMetadata(document), [{
    id: 'deepseek-flash', name: 'DeepSeek-V4.1-Flash', context_window: 1048576, max_output_tokens: 393216,
    input_modalities: ['text', 'image'], effort: { supported_levels: ['low', 'high', 'max'] },
    api_capabilities: { anthropic_messages: { system_prompt_update: 'in-history' } },
  }]);
});

test('DeepSeek 价格目录结构变化或空响应时拒绝生成当前型号清单', () => {
  const pricing = { source: { id: 'deepseek-pricing' }, metadata: {}, body: '# Pricing\nNo model pricing rows' } as CapturedDocument;
  assert.throws(() => deepseekParser.currentModels(pricing), /未解析到带模型列的当前价格表/);
});

test('DeepSeek 价格 IR 保留各市场、缓存与高峰/空闲阶梯，金额不转浮点数', () => {
  const global = priceRows('deepseek-pricing', ['$0.003', '$0.022', '$0.006', '$0.044', '$0.15', '$0.66']);
  const cn = priceRows('deepseek-cn-pricing', ['0.02元', '0.15元', '0.04元', '0.30元', '1元', '4.5元']);
  const globalRules = deepseekParser.priceRules(global, 'deepseek-flash', 'global');
  const cnRules = deepseekParser.priceRules(cn, 'deepseek-flash', 'cn');
  assert.equal(globalRules.length, 2);
  assert.deepEqual(globalRules[0]?.rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal]), [
    ['input', '0.15'], ['cache_read', '0.003'], ['output', '0.6'],
  ]);
  assert.equal(globalRules[1]?.conditions?.[0] && 'value' in globalRules[1].conditions[0] ? globalRules[1].conditions[0].value : null, 'peak');
  assert.deepEqual(cnRules[0]?.rate_items.map(({ amount_decimal }) => amount_decimal), ['1', '0.02', '4']);
  assert.equal(cnRules[0]?.evidence[0]?.source_ref, 'deepseek-cn-pricing');
  assert.equal(deepseekParser.priceRules(cn.slice(0, 4), 'deepseek-flash', 'cn').length, 0);
});

test('DeepSeek IR 把当前定价型号分市场映射，并明确 API/能力部分覆盖', () => {
  const globalRows = priceRows('deepseek-pricing', ['$0.003', '$0.022', '$0.006', '$0.044', '$0.15', '$0.66']);
  const cnRows = priceRows('deepseek-cn-pricing', ['0.02元', '0.15元', '0.04元', '0.30元', '1元', '4.5元']);
  const documents = [
    ...(['deepseek-pricing', 'deepseek-cn-pricing', 'deepseek-models-api', 'deepseek-cn-models-api', 'deepseek-search-pricing', 'deepseek-cn-search-guide', 'deepseek-chat-api', 'deepseek-cn-chat-api', 'deepseek-responses-api', 'deepseek-cn-responses-api', 'deepseek-anthropic-api', 'deepseek-cn-anthropic-api'] as const).map((id) => {
      const source = DEEPSEEK_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
      const sourceBody = id.includes('models-api')
        ? '<pre><code>{ "object": "list", "data": [{ "id": "deepseek-flash", "name": "DeepSeek-V4.1-Flash", "context_window": 1048576, "max_output_tokens": 393216, "input_modalities": ["text", "image"], "effort": { "supported_levels": ["low", "high", "max"] }, "api_capabilities": { "anthropic_messages": { "system_prompt_update": "in-history" } } }, { "id": "deepseek-v4-pro", "name": "DeepSeek-V4-Pro", "context_window": 1048576, "max_output_tokens": 393216, "input_modalities": ["text"], "effort": { "supported_levels": ["low", "high", "max"] }, "api_capabilities": { "anthropic_messages": { "system_prompt_update": "leading-only" } } }] }</code></pre>'
        : id === 'deepseek-search-pricing' ? 'Base URL: https://api.deepseek.com Search POST https://api.deepseek.com/v1/tools/search Fetch POST https://api.deepseek.com/v1/tools/fetch Search Per 1,000 successful requests $0.75 Fetch Per 1,000 successful requests $0.75'
          : id === 'deepseek-cn-search-guide' ? 'Base URL 为 https://api.deepseek.com Search POST https://api.deepseek.com/v1/tools/search Fetch POST https://api.deepseek.com/v1/tools/fetch Search 每 1,000 次成功请求 5元 Fetch 每 1,000 次成功请求 5元'
          : id.includes('anthropic-api') ? 'base_url https://api.deepseek.com/anthropic model deepseek-flash'
            : id.includes('chat-api') ? 'POST /chat/completions deepseek-flash deepseek-v4-pro'
              : id.includes('responses-api') ? 'POST /responses deepseek-flash deepseek-v4-pro' : '';
      const toolSchema = id === 'deepseek-cn-search-guide' ? [
        '## Search 接口 请求字段',
        '| 字段 | 类型 | 必填 | 默认值 | 说明 |', '| - | - | - | - | - |',
        '| query | string | 是 | - | 搜索词。 |', '| count | integer | 否 | 10 | 返回数量，1～50。 |',
        '| ori_question | string | 否 | - | 原始问题。 |', '| localization | string | 否 | "" | 本地 IP。 |',
        '| need_content | boolean | 否 | false | 返回正文。 |',
        '## Search 接口 响应', '| 字段 | 类型 | 说明 |', '| - | - | - |',
        '| rerank_score | number | 排序。 |', '| title | string | 标题。 |', '| url | string | 链接。 |',
        '## Fetch 接口 请求字段', '| 字段 | 类型 | 必填 | 说明 |', '| - | - | - | - |', '| url | string | 是 | 网页地址。 |',
        '## Fetch 接口 响应', '| 字段 | 类型 | 说明 |', '| - | - | - |', '| title | string | 标题。 |', '| content | string | 正文。 |',
      ].join('\n') : [
        '## Search API Request fields',
        '| Field | Type | Required | Default | Description |', '| - | - | - | - | - |',
        '| query | string | Yes | - | Search query. |', '| count | integer | No | 10 | Between 1 and 50. |',
        '| ori_question | string | No | - | Original question. |', '| localization | string | No | "" | Localized IP address. |',
        '| need_content | boolean | No | false | Return page content. |',
        '## Search API Response', '| Field | Type | Description |', '| - | - | - |',
        '| rerank_score | number | Relevance. |', '| title | string | Result title. |', '| url | string | Result URL. |',
        '## Fetch API Request fields', '| Field | Type | Required | Description |', '| - | - | - | - |', '| url | string | Yes | HTTP or HTTPS page URL. |',
        '## Fetch API Response', '| Field | Type | Description |', '| - | - | - |', '| title | string | Page title. |', '| content | string | Markdown content. |',
      ].join('\n');
      const body = sourceBody + (id === 'deepseek-search-pricing' || id === 'deepseek-cn-search-guide' ? `\n${toolSchema}` : '');
      return {
        source,
        metadata: { source_id: id, source_name: source.name, request_url: source.url, retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200, content_type: 'text/html', etag: null, last_modified: null, content_hash: 'sha256:test', byte_length: 0, collector_version: 'test', body_file: 'test.body' },
        body,
      } satisfies CapturedDocument;
    }),
  ];
  const facts = {
    current_models: ['deepseek-flash', 'deepseek-v4-pro'],
    cn_current_models: ['deepseek-flash', 'deepseek-v4-pro'],
    current_api_models: [], cn_current_api_models: [],
    model_api_metadata: [
      { id: 'deepseek-flash', name: 'DeepSeek-V4.1-Flash', context_window: 1048576, max_output_tokens: 393216, input_modalities: ['text', 'image'], effort: { supported_levels: ['low', 'high', 'max'] }, api_capabilities: { anthropic_messages: { system_prompt_update: 'in-history' } } },
      { id: 'deepseek-v4-pro', name: 'DeepSeek-V4-Pro', context_window: 1048576, max_output_tokens: 393216, input_modalities: ['text'], effort: { supported_levels: ['low', 'high', 'max'] }, api_capabilities: { anthropic_messages: { system_prompt_update: 'leading-only' } } },
    ],
    cn_model_api_metadata: [
      { id: 'deepseek-flash', name: 'DeepSeek-V4.1-Flash', context_window: 1048576, max_output_tokens: 393216, input_modalities: ['text', 'image'], effort: { supported_levels: ['low', 'high', 'max'] }, api_capabilities: { anthropic_messages: { system_prompt_update: 'in-history' } } },
      { id: 'deepseek-v4-pro', name: 'DeepSeek-V4-Pro', context_window: 1048576, max_output_tokens: 393216, input_modalities: ['text'], effort: { supported_levels: ['low', 'high', 'max'] }, api_capabilities: { anthropic_messages: { system_prompt_update: 'leading-only' } } },
    ],
    pricing_rows: globalRows, cn_pricing_rows: cnRows, search_pricing_rows: [], api_routes: [
      { source_id: 'deepseek-chat-api', method: 'POST', path: '/chat/completions' },
      { source_id: 'deepseek-responses-api', method: 'POST', path: '/responses' },
      { source_id: 'deepseek-cn-chat-api', method: 'POST', path: '/chat/completions' },
      { source_id: 'deepseek-cn-responses-api', method: 'POST', path: '/responses' },
      { source_id: 'deepseek-search-pricing', method: 'POST', path: '/v1/tools/search' },
      { source_id: 'deepseek-search-pricing', method: 'POST', path: '/v1/tools/fetch' },
      { source_id: 'deepseek-cn-search-guide', method: 'POST', path: '/v1/tools/search' },
      { source_id: 'deepseek-cn-search-guide', method: 'POST', path: '/v1/tools/fetch' },
    ],
  };
  const ir = deepseekParser.toCollectionIR(documents, facts);
  assert.deepEqual(ir.services.map(({ id }) => id.value), ['global', 'cn']);
  assert.deepEqual(ir.services.map(({ offerings }) => offerings.length), [2, 2]);
  assert.deepEqual(ir.services.map(({ offerings }) => offerings[0]?.prices[0]?.currency.value), ['USD', 'CNY']);
  assert.ok(ir.coverage.filter(({ scope }) => scope === 'api' || scope === 'capability').every(({ status }) => status === 'partial'));
  assert.equal(ir.services[0]?.offerings[0]?.prices[0]?.rules.value.length, 2);
  assert.equal(ir.services[0]?.offerings[0]?.api_limits, undefined, 'model specifications remain in the manually maintained canonical Model registry');
  assert.equal(ir.services[0]?.offerings[0]?.api_capabilities, undefined, 'the collector does not project per-model API details');
  assert.equal(ir.services[0]?.offerings[0]?.display_name?.value, 'DeepSeek-V4.1-Flash');
  assert.deepEqual(ir.coverage.filter(({ scope, source_ref }) => scope === 'pricing' && ['deepseek-pricing', 'deepseek-cn-pricing'].includes(source_ref)).map(({ source_ref, status, record_count, record_unit }) => [source_ref, status, record_count, record_unit]), [
    ['deepseek-pricing', 'complete', 2, 'models with mapped price facts'],
    ['deepseek-cn-pricing', 'complete', 2, 'models with mapped price facts'],
  ]);
  assert.deepEqual(ir.coverage.filter(({ scope, source_ref }) => scope === 'api' && source_ref === 'deepseek-search-pricing').map(({ record_count, record_unit }) => [record_count, record_unit]), [
    [3, 'recognized API source records'],
  ]);
  assert.deepEqual(ir.services[0]?.endpoints.map(({ id }) => id.value), ['openai-compatible', 'anthropic-compatible']);
  assert.deepEqual(ir.services[0]?.offerings[0]?.operations, [], 'generic API references do not create model-specific Routes');
  assert.deepEqual(ir.services.map(({ capabilities }) => capabilities.map(({ id, prices }) => [id.value, prices?.[0]?.rules.value[0]?.rate_items[0]?.amount_decimal])), [
    [['global-web-search', '0.75'], ['global-web-fetch', '0.75']],
    [['cn-web-search', '5'], ['cn-web-fetch', '5']],
  ]);
  assert.deepEqual(ir.services.map(({ capabilities }) => capabilities.map(({ id, links, operations }) => [
    id.value, links?.value, operations[0]?.id.value,
  ])), [
    [
      ['global-web-search', { documentation: 'https://api-docs.deepseek.com/guides/search/' }, 'search'],
      ['global-web-fetch', { documentation: 'https://api-docs.deepseek.com/guides/search/' }, 'fetch'],
    ],
    [
      ['cn-web-search', { documentation: 'https://api-docs.deepseek.com/zh-cn/guides/search/' }, 'search'],
      ['cn-web-fetch', { documentation: 'https://api-docs.deepseek.com/zh-cn/guides/search/' }, 'fetch'],
    ],
  ]);
  const globalSearch = ir.services[0]!.capabilities[0]!.operations[0]!;
  assert.deepEqual(globalSearch.input?.value.map(({ name, required }) => [name, required]), [['query', true]]);
  assert.deepEqual(globalSearch.parameters?.value.map(({ name, type, min, max, default: defaultValue }) => [name, type, min, max, defaultValue]), [
    ['count', 'integer', 1, 50, 10],
    ['ori_question', 'string', undefined, undefined, undefined],
    ['localization', 'string', undefined, undefined, ''],
    ['need_content', 'boolean', undefined, undefined, false],
  ]);
  assert.deepEqual(globalSearch.output?.value[0]?.fields, ['results[].rerank_score', 'results[].title', 'results[].url']);
  assert.equal(globalSearch.routes[0]?.callability?.value, 'documented_only');
  const globalFetch = ir.services[0]!.capabilities[1]!.operations[0]!;
  assert.deepEqual(globalFetch.input?.value.map(({ name, required }) => [name, required]), [['url', true]]);
  assert.deepEqual(globalFetch.output?.value[0]?.fields, ['title', 'content']);
  const cnSearch = ir.services[1]!.capabilities[0]!.operations[0]!;
  assert.deepEqual(cnSearch.parameters?.value.map(({ name, min, max, default: defaultValue }) => [name, min, max, defaultValue]), [
    ['count', 1, 50, 10], ['ori_question', undefined, undefined, undefined],
    ['localization', undefined, undefined, ''], ['need_content', undefined, undefined, false],
  ]);
  assert.deepEqual(ir.services[1]!.capabilities[1]!.operations[0]!.output?.value[0]?.fields, ['title', 'content']);

  const partialCnFacts = {
    ...facts,
    cn_pricing_rows: cnRows.map((row) => ({ ...row, cells: row.cells.length > 2 ? row.cells.slice(0, -1) : row.cells })),
  };
  const partialCnIr = deepseekParser.toCollectionIR(documents, partialCnFacts);
  assert.deepEqual(partialCnIr.coverage.filter(({ scope, source_ref }) => scope === 'pricing' && ['deepseek-pricing', 'deepseek-cn-pricing'].includes(source_ref)).map(({ source_ref, status, record_count }) => [source_ref, status, record_count]), [
    ['deepseek-pricing', 'complete', 2],
    ['deepseek-cn-pricing', 'partial', 1],
  ]);
});
