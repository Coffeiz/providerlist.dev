import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { factsFromDocuments, parseMoonshotModelCatalog, toMoonshotIR } from './collect.ts';
import type { CapturedDocument } from '../document-set.ts';
import { MOONSHOTAI_INGEST_SOURCES } from './sources.ts';

describe('Kimi 官方通用模型目录解析', () => {
  it('将当前模型与下线模型分区，且不把文档中的迁移目标当成当前模型', () => {
    const result = parseMoonshotModelCatalog(`
# 模型列表
## 多模态模型
| 模型名称 | 描述 |
| - | - |
| \`kimi-k3.1-pro\` | 当前旗舰模型；建议由 moonshot-v1 迁移。 |
| \`kimi-k2.6\` | 当前模型 |
## 已下线模型
| 模型名称 | 描述 |
| - | - |
| \`moonshot-v1-32k\` | 已下线 |
`);
    assert.deepEqual(result.current, ['kimi-k3.1-pro', 'kimi-k2.6']);
    assert.deepEqual(result.retired, ['moonshot-v1-32k']);
  });

  it('官方目录缺少当前/下线边界时拒绝解析', () => {
    assert.throws(() => parseMoonshotModelCatalog('# 模型列表\n| 模型名称 | 说明 |\n| - | - |\n| `kimi-k3` | 当前 |'), /缺少已下线模型分界/);
  });
});

it('Kimi IR 分市场映射当前 Offering 与精确匹配的 Token PriceFact，下线目录仍只保留观察', () => {
  const catalogDocuments: CapturedDocument[] = (['moonshotai-model-catalog', 'moonshotai-global-model-catalog'] as const).map((id, index) => {
    const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
    const market = index === 0 ? 'cn' : 'global';
    const body = [
      '# 模型列表',
      '| 模型名称 | 描述 |', '| - | - |', '| `kimi-k3` | 当前模型 |', '| `kimi-k2.6` | 当前模型 |',
      '## 已下线模型', '| 模型名称 | 描述 |', '| - | - |', '| `moonshot-v1-32k` | 已下线 |',
    ].join('\n');
    return {
      source, body,
      metadata: {
        source_id: id, market, source_name: source.name, request_url: source.url,
        retrieved_at: `2026-10-26T00:0${index}:00.000Z`, http_status: 200, content_type: 'text/markdown',
        etag: null, last_modified: null, content_hash: `sha256:${String(index).padStart(64, '0')}`,
        byte_length: body.length, collector_version: 'test', body_file: `${id}.body`,
      },
    };
  });
  const apiOverviewDocuments: CapturedDocument[] = (['moonshotai-api-overview', 'moonshotai-global-api-overview'] as const).map((id, index) => {
    const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
    const market = index === 0 ? 'cn' : 'global';
    const apiHost = market === 'cn' ? 'api.moonshot.cn' : 'api.moonshot.ai';
    const docsHost = market === 'cn' ? 'platform.kimi.com' : 'platform.kimi.ai';
    const body = [
      '# API 概述',
      `https://${apiHost}`,
      '| 兼容 API | base\\_url | 接口 | 可用工具 |', '| - | - | - | - |',
      `| OpenAI Chat Completions | \`https://${apiHost}/v1\` | [/chat/completions](https://${docsHost}/docs/api/chat) | SDK |`,
      `| OpenAI Responses | \`https://${apiHost}/v1\` | [/responses](https://${docsHost}/docs/api/responses) | SDK |`,
      `| Anthropic Messages | \`https://${apiHost}/anthropic\` | [/messages](https://${docsHost}/docs/api/messages) | SDK |`,
      '',
      '| 端点 | 方法 | 协议 | 说明 |', '| - | - | - | - |',
      `| \`/v1/tools/search\` | POST | Kimi | [联网搜索 Basic](https://${docsHost}/docs/api/tools-search.md) |`,
      `| \`/v1/tools/search_pro\` | POST | Kimi | [联网搜索 Pro](https://${docsHost}/docs/api/tools-search-pro.md) |`,
      `| \`/v1/tools/fetch\` | POST | Kimi | [网页抓取](https://${docsHost}/docs/api/tools-fetch.md) |`,
    ].join('\n');
    return {
      source, body,
      metadata: {
        source_id: id, market, source_name: source.name, request_url: source.url,
        retrieved_at: `2026-10-26T00:0${index + 4}:00.000Z`, http_status: 200, content_type: 'text/markdown',
        etag: null, last_modified: null, content_hash: `sha256:${String(index + 4).padStart(64, '0')}`,
        byte_length: body.length, collector_version: 'test', body_file: `${id}.body`,
      },
    };
  });
  const modelApiDocuments: CapturedDocument[] = (['chat-api', 'responses-api', 'messages-api'] as const).flatMap((suffix, suffixIndex) =>
    (['moonshotai-', 'moonshotai-global-'] as const).map((prefix, marketIndex) => {
      const id = `${prefix}${suffix}`;
      const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
      const market = marketIndex === 0 ? 'cn' : 'global';
      const path = suffix === 'chat-api' ? '/v1/chat/completions'
        : suffix === 'responses-api' ? '/v1/responses' : '/anthropic/v1/messages';
      const models = suffix === 'chat-api' ? ['kimi-k3', 'kimi-k2.6']
        : ['kimi-k3'];
      const modelSchema = suffix === 'responses-api'
        ? `        model:\n          type: string\n          description: 本接口当前支持 ${models.map((model) => `\`${model}\``).join('、')}。\n          example: kimi-k3`
        : `        model:\n          type: string\n          enum:\n${models.map((model) => `            - ${model}`).join('\n')}`;
      const reasoningSchema = suffix === 'chat-api'
        ? '\n        reasoning_effort:\n          type: string\n          enum:\n            - low\n            - high\n            - max\n          default: max'
        : suffix === 'responses-api'
          ? '\n        reasoning:\n          type: object\n          properties:\n            effort:\n              type: string\n              enum:\n                - low\n                - high\n                - max\n              default: max'
          : '';
      const body = [
        `# ${suffix}`,
        '## OpenAPI',
        '```yaml',
        'openapi: 3.1.0',
        'paths:',
        `  ${path}:`,
        '    post:',
        '      requestBody:',
        '        content:',
        '          application/json:',
        '            schema:',
        '              properties:',
        modelSchema,
        reasoningSchema,
        '```',
      ].join('\n');
      return {
        source, body,
        metadata: {
          source_id: id, market, source_name: source.name, request_url: source.url,
          retrieved_at: `2026-10-26T00:${String(suffixIndex + 8).padStart(2, '0')}:${marketIndex}0.000Z`, http_status: 200, content_type: 'text/markdown',
          etag: null, last_modified: null, content_hash: `sha256:${String(suffixIndex + marketIndex + 8).padStart(64, '0')}`,
          byte_length: body.length, collector_version: 'test', body_file: `${id}.body`,
        },
      };
    }),
  );
  const pricingDocuments: CapturedDocument[] = (['moonshotai-chat-pricing', 'moonshotai-global-chat-pricing'] as const).map((id, index) => {
    const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
    const market = index === 0 ? 'cn' : 'global';
    const headers = market === 'cn'
      ? ['模型', '输入', '输出', '缓存命中', '缓存写入（5min）', '缓存写入（1h）']
      : ['Model', 'Input', 'Output', 'Cached Input', '5m writes', '1h writes'];
    const prices = market === 'cn'
      ? ['¥20.00 / MTok', '¥100.00 / MTok', '¥2.00 / MTok', '¥20.00 / MTok', '¥40.00 / MTok']
      : ['$3.00 / MTok', '$15.00 / MTok', '$0.30 / MTok', '$3.00 / MTok', '$6.00 / MTok'];
    const body = 'columns:[' + headers.map((header) => '{title:`' + header + '`}').join(',')
      + '],rows:[[`kimi-k3`,' + prices.map((price) => '`' + price + '`').join(',') + ']]';
    return {
      source, body,
      metadata: {
        source_id: id, market, source_name: source.name, request_url: source.url,
        retrieved_at: `2026-10-26T00:0${index + 2}:00.000Z`, http_status: 200, content_type: 'text/html',
        etag: null, last_modified: null, content_hash: `sha256:${String(index + 2).padStart(64, '0')}`,
        byte_length: body.length, collector_version: 'test', body_file: `${id}.body`,
      },
    };
  });
  const toolPricingDocuments: CapturedDocument[] = (['moonshotai-websearch-pricing', 'moonshotai-global-websearch-pricing'] as const).map((id, index) => {
    const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
    const market = index === 0 ? 'cn' : 'global';
    const body = market === 'cn'
      ? '<h2>联网搜索 Basic / 联网搜索 Pro 计费逻辑</h2><p>联网搜索 Basic ￥0.01/次，联网搜索 Pro ￥0.015/次</p><h2>网页抓取计费逻辑</h2><p>网页抓取费用（￥0.01/次）</p>'
      : '<h2>Web Search Basic / Web Search Pro Billing Logic</h2><p>$0.002 per call for Web Search Basic, $0.003 per call for Web Search Pro</p><h2>URL Fetch Billing Logic</h2><p>$0.002 per call</p>';
    return {
      source, body,
      metadata: {
        source_id: id, market, source_name: source.name, request_url: source.url,
        retrieved_at: `2026-10-26T00:0${index + 6}:00.000Z`, http_status: 200, content_type: 'text/html',
        etag: null, last_modified: null, content_hash: `sha256:${String(index + 6).padStart(64, '0')}`,
        byte_length: body.length, collector_version: 'test', body_file: `${id}.body`,
      },
    };
  });
  const toolApiDocuments: CapturedDocument[] = (['cn', 'global'] as const).flatMap((market, index) => {
    const prefix = market === 'global' ? 'moonshotai-global-' : 'moonshotai-';
    const searchId = `${prefix}websearch-api`;
    const fetchId = `${prefix}webfetch-api`;
    const makeDocument = (id: string, body: string): CapturedDocument => {
      const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
      return {
        source, body,
        metadata: {
          source_id: id, market, source_name: source.name, request_url: source.url,
          retrieved_at: `2026-10-26T00:1${index}:00.000Z`, http_status: 200, content_type: 'text/markdown',
          etag: null, last_modified: null, content_hash: `sha256:${String(index + id.length).padStart(64, '0')}`,
          byte_length: body.length, collector_version: 'test', body_file: `${id}.body`,
        },
      };
    };
    const searchSchema = [
      '# Search API', '> | HTTP 状态码 | error.type | message |', '> | 400 | invalid_request | bad request |', '> | 429 | rate_limited | too many requests |', '```yaml', 'openapi: 3.1.0', 'components:', '  schemas:', '    ToolsSearchRequest:', '      type: object', '      properties:',
      '        text_query:', '          type: string', '          description: Search query.',
      '        timeout_seconds:', '          type: integer', '          minimum: 1', '          maximum: 60',
      '        limit:', '          type: integer', '          minimum: 1', '          maximum: 20', '          default: 5',
      '        include_content:', '          type: boolean', '          default: false', '      required:', '        - text_query',
      '    ToolsSearchResponse:', '      type: object', '      properties:', '        search_results:', '          type: array', '          description: Search results may be an empty array.', '      required:', '        - search_results',
      '    ErrorResponse:', '      type: object', '      properties:', '        error:', '          type: object', '      required:', '        - error',
      '```',
    ].join('\n');
    const fetchSchema = [
      '# Fetch API', '```yaml', 'openapi: 3.1.0', 'components:', '  schemas:', '    ToolsFetchRequest:', '      type: object', '      properties:',
      '        url:', '          type: string', '          format: uri', `          description: ${market === 'cn' ? '要抓取的网页 URL，仅支持 http 和 https 协议。' : 'URL of the page to fetch. Only http and https are supported.'}`, '      required:', '        - url',
      '    ToolsFetchResponse:', '      type: object', '      properties:',
      '        url:', '          type: string', '        markdown:', '          type: string', '        title:', '          type: string',
      '```',
    ].join('\n');
    return [makeDocument(searchId, searchSchema), makeDocument(fetchId, fetchSchema)];
  });
  const documents = [...catalogDocuments, ...apiOverviewDocuments, ...modelApiDocuments, ...pricingDocuments, ...toolPricingDocuments, ...toolApiDocuments];
  const facts = factsFromDocuments(documents);
  const ir = toMoonshotIR(documents, facts);
  assert.deepEqual(ir.document_observations.filter(({ source_ref }) => /model-catalog$|pricing$/.test(source_ref)).map(({ source_ref, model_id_mentions }) => [source_ref, model_id_mentions]), [
    ['moonshotai-model-catalog', ['kimi-k3', 'kimi-k2.6', 'moonshot-v1-32k']],
    ['moonshotai-global-model-catalog', ['kimi-k3', 'kimi-k2.6', 'moonshot-v1-32k']],
    ['moonshotai-chat-pricing', []],
    ['moonshotai-global-chat-pricing', []],
    ['moonshotai-websearch-pricing', []],
    ['moonshotai-global-websearch-pricing', []],
  ]);
  assert.deepEqual(ir.services.map(({ id, name, offerings, endpoints }) => ({
    id: id.value,
    name: name?.value,
    models: offerings.map(({ provider_model_id, display_name, supply_observations }) => [
      provider_model_id.value,
      display_name?.value,
      display_name?.evidence[0]?.source_ref,
      supply_observations[0]?.kind,
    ]),
    endpoints: endpoints.map(({ id: endpointId, base_url, api_region, documentation }) => [endpointId.value, base_url.value, api_region.value, documentation?.value]),
  })), [
    { id: 'cn', name: '中国市场', models: [['kimi-k3', 'kimi-k3', 'moonshotai-model-catalog', 'listed_current'], ['kimi-k2.6', 'kimi-k2.6', 'moonshotai-model-catalog', 'listed_current']], endpoints: [
      ['openai-compatible-cn', 'https://api.moonshot.cn/v1', '中国', 'https://platform.kimi.com/docs/api/chat'],
      ['anthropic-compatible-cn', 'https://api.moonshot.cn/anthropic', '中国', 'https://platform.kimi.com/docs/api/messages'],
      ['moonshot-tools-api-cn', 'https://api.moonshot.cn', '中国', 'https://platform.kimi.com/docs/api/overview'],
    ] },
    { id: 'global', name: '国际市场', models: [['kimi-k3', 'kimi-k3', 'moonshotai-global-model-catalog', 'listed_current'], ['kimi-k2.6', 'kimi-k2.6', 'moonshotai-global-model-catalog', 'listed_current']], endpoints: [
      ['openai-compatible-global', 'https://api.moonshot.ai/v1', '全球', 'https://platform.kimi.ai/docs/api/chat'],
      ['anthropic-compatible-global', 'https://api.moonshot.ai/anthropic', '全球', 'https://platform.kimi.ai/docs/api/messages'],
      ['moonshot-tools-api-global', 'https://api.moonshot.ai', '全球', 'https://platform.kimi.ai/docs/api/overview'],
    ] },
  ]);
  assert.deepEqual(ir.services.map(({ id, offerings }) => {
    const price = offerings[0]?.prices[0];
    const rates = price?.rules.value[0]?.rate_items.map(({ metric, ttl, amount_decimal }) => [metric, ttl ?? null, amount_decimal]);
    return [id.value, price?.currency.value, price?.unit.value, rates];
  }), [
    ['cn', 'CNY', 'per_1m_tokens', [
      ['input', null, '20.00'], ['output', null, '100.00'], ['cache_read', null, '2.00'],
      ['cache_write', '5min', '20.00'], ['cache_write', '1h', '40.00'],
    ]],
    ['global', 'USD', 'per_1m_tokens', [
      ['input', null, '3.00'], ['output', null, '15.00'], ['cache_read', null, '0.30'],
      ['cache_write', '5min', '3.00'], ['cache_write', '1h', '6.00'],
    ]],
  ]);
  assert.deepEqual(ir.services.flatMap(({ offerings }) => offerings.map(({ provider_model_id, prices, operations }) => [provider_model_id.value, prices.length, operations.length])), [
    ['kimi-k3', 1, 3], ['kimi-k2.6', 0, 1], ['kimi-k3', 1, 3], ['kimi-k2.6', 0, 1],
  ]);
  const modelRoutes = ir.services.flatMap(({ offerings }) => offerings.flatMap(({ provider_model_id, operations }) =>
    operations.flatMap(({ routes }) => routes.map(({ protocol, path_template, reasoning }) => [
      provider_model_id.value, protocol.value, path_template.value, reasoning?.value,
    ]))));
  assert.deepEqual(modelRoutes.map(([modelId, protocol, routePath]) => [modelId, protocol, routePath]), [
    ['kimi-k3', 'chat-completions', '/chat/completions'],
    ['kimi-k3', 'responses', '/responses'],
    ['kimi-k3', 'messages', '/v1/messages'],
    ['kimi-k2.6', 'chat-completions', '/chat/completions'],
    ['kimi-k3', 'chat-completions', '/chat/completions'],
    ['kimi-k3', 'responses', '/responses'],
    ['kimi-k3', 'messages', '/v1/messages'],
    ['kimi-k2.6', 'chat-completions', '/chat/completions'],
  ]);
  assert.deepEqual(modelRoutes.filter(([modelId, protocol]) => modelId === 'kimi-k3' && ['chat-completions', 'responses'].includes(String(protocol)))
    .map(([, protocol, , reasoning]) => [protocol, (reasoning as { controls?: { wire_path?: string[]; values?: string[] }[] } | undefined)?.controls?.[0]?.wire_path, (reasoning as { controls?: { wire_path?: string[]; values?: string[] }[] } | undefined)?.controls?.[0]?.values]), [
      ['chat-completions', ['reasoning_effort'], ['low', 'high', 'max']],
      ['responses', ['reasoning', 'effort'], ['low', 'high', 'max']],
      ['chat-completions', ['reasoning_effort'], ['low', 'high', 'max']],
      ['responses', ['reasoning', 'effort'], ['low', 'high', 'max']],
    ]);
  assert.deepEqual(modelRoutes.filter(([modelId]) => modelId === 'kimi-k2.6')
    .map(([, , , reasoning]) => (reasoning as { controls?: { wire_path?: string[] }[] } | undefined)?.controls?.[0]?.wire_path), [['thinking', 'type'], ['thinking', 'type']]);
  assert.deepEqual(ir.services.map(({ capabilities }) => capabilities.map(({ id, kind, operations, prices }) => ({
    id: id.value,
    kind: kind.value,
    paths: operations.flatMap(({ routes }) => routes.map(({ path_template, method }) => [method.value, path_template.value])),
    prices: prices?.map(({ currency, unit, operation_ref, capability_ref, rules }) => [
      currency.value,
      unit.value,
      operation_ref?.value,
      capability_ref?.value,
      rules.value[0]?.rate_items[0]?.amount_decimal,
      rules.value[0]?.conditions?.[0],
    ]),
  }))), [
    [
      { id: 'web-search', kind: 'web_search', paths: [['POST', '/v1/tools/search'], ['POST', '/v1/tools/search_pro']], prices: [
        ['CNY', 'per_request', 'web_search_basic-cn', 'web-search', '0.01', { field: 'response.search_results.non_empty', operator: 'eq', value: true }],
        ['CNY', 'per_request', 'web_search_pro-cn', 'web-search', '0.015', { field: 'response.search_results.non_empty', operator: 'eq', value: true }],
      ] },
      { id: 'web-fetch', kind: 'web_fetch', paths: [['POST', '/v1/tools/fetch']], prices: [
        ['CNY', 'per_request', 'web_fetch-cn', 'web-fetch', '0.01', { field: 'response.markdown.non_empty', operator: 'eq', value: true }],
      ] },
    ],
    [
      { id: 'web-search', kind: 'web_search', paths: [['POST', '/v1/tools/search'], ['POST', '/v1/tools/search_pro']], prices: [
        ['USD', 'per_request', 'web_search_basic-global', 'web-search', '0.002', { field: 'response.search_results.non_empty', operator: 'eq', value: true }],
        ['USD', 'per_request', 'web_search_pro-global', 'web-search', '0.003', { field: 'response.search_results.non_empty', operator: 'eq', value: true }],
      ] },
      { id: 'web-fetch', kind: 'web_fetch', paths: [['POST', '/v1/tools/fetch']], prices: [
        ['USD', 'per_request', 'web_fetch-global', 'web-fetch', '0.002', { field: 'response.markdown.non_empty', operator: 'eq', value: true }],
      ] },
    ],
  ]);
  const toolOperations = ir.services.flatMap(({ capabilities }) => capabilities.flatMap(({ operations }) => operations));
  assert.deepEqual(toolOperations.find(({ id }) => id.value === 'web_search_basic-cn')?.parameters?.value.map(({ name, required, min, max }) => [name, required, min, max]), [
    ['text_query', true, undefined, undefined], ['timeout_seconds', false, 1, 60], ['limit', false, 1, 20], ['include_content', false, undefined, undefined],
  ]);
  assert.deepEqual(toolOperations.find(({ id }) => id.value === 'web_search_basic-cn')?.input?.value.map(({ name, kind, required }) => [name, kind, required]), [['text_query', 'text', true]]);
  assert.deepEqual(toolOperations.find(({ id }) => id.value === 'web_search_basic-cn')?.output?.value[0]?.fields, ['search_results']);
  for (const [operationId, description] of [
    ['web_fetch-cn', '要抓取的网页 URL，仅支持 http 和 https 协议。'],
    ['web_fetch-global', 'URL of the page to fetch. Only http and https are supported.'],
  ] as const) {
    const fetchOperation = toolOperations.find(({ id }) => id.value === operationId);
    assert.deepEqual(fetchOperation?.parameters?.value.map(({ name, type, required, route_mappings, description: parameterDescription }) => [name, type, required, route_mappings, parameterDescription]), [
      ['url', 'string', true, ['/request/url'], description],
    ]);
    assert.deepEqual(fetchOperation?.input?.value.map(({ name, required, description: slotDescription }) => [name, required, slotDescription]), [
      ['url', true, description],
    ]);
    assert.deepEqual(fetchOperation?.output?.value[0], { kind: 'structured', fields: ['url', 'markdown', 'title'] });
  }
  const searchResponseReview = ir.review_items.find(({ id }) => id === 'moonshot-tool-response-contract-moonshotai-websearch-api');
  assert.ok(searchResponseReview);
  assert.match(searchResponseReview.message, /Search results may be an empty array/u);
  assert.match(searchResponseReview.message, /响应必填字段：search_results/u);
  assert.match(searchResponseReview.message, /文档错误 HTTP 状态码：400, 429/u);
  assert.match(searchResponseReview.message, /不能表达必填字段、空结果约束或错误响应状态\/结构/u);
  assert.equal(searchResponseReview.evidence[0]?.locator, 'openapi/components/schemas/ToolsSearchResponse');
  assert.ok(ir.services.flatMap(({ capabilities }) => capabilities.flatMap(({ operations }) => operations.flatMap(({ routes }) => routes)))
    .every(({ documentation }) => !documentation?.value.endsWith('.md')));
  assert.deepEqual(ir.coverage.filter(({ scope }) => scope === 'model_catalog').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['complete', 2, 'unique current model IDs'], ['complete', 2, 'unique current model IDs'],
  ]);
  assert.deepEqual(ir.coverage.filter(({ scope }) => scope === 'pricing').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['partial', 1, 'recognized Token price rows'], ['partial', 1, 'recognized Token price rows'],
    ['partial', 3, 'independent tool price facts'], ['partial', 3, 'independent tool price facts'],
  ]);
  assert.deepEqual(ir.coverage.filter(({ scope }) => scope === 'api').map(({ source_ref, status, record_count }) => [source_ref, status, record_count]), [
    ['moonshotai-api-overview', 'partial', 3], ['moonshotai-global-api-overview', 'partial', 3],
    ['moonshotai-chat-api', 'partial', 2], ['moonshotai-global-chat-api', 'partial', 2],
    ['moonshotai-responses-api', 'partial', 1], ['moonshotai-global-responses-api', 'partial', 1],
    ['moonshotai-messages-api', 'partial', 1], ['moonshotai-global-messages-api', 'partial', 1],
    ['moonshotai-websearch-api', 'partial', 2], ['moonshotai-webfetch-api', 'partial', 1],
    ['moonshotai-global-websearch-api', 'partial', 2], ['moonshotai-global-webfetch-api', 'partial', 1],
  ]);
  assert.equal(ir.services.flatMap(({ offerings }) => offerings).length, 4);
  assert.ok(ir.document_observations
    .filter(({ source_ref }) => source_ref.endsWith('model-catalog'))
    .every(({ model_id_mentions }) => model_id_mentions.includes('moonshot-v1-32k')));
  assert.ok(ir.review_items.some(({ kind, message, evidence }) => kind === 'unsupported_mapping'
    && message.includes('按协议分别生成 Operation') && message.includes('oneOf 联合类型')
    && evidence.some(({ source_ref }) => source_ref === 'moonshotai-model-catalog')));
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

it('MoonshotAI 固定 OpenAPI 快照按 Route 分别映射模型请求参数、输入和响应结构', () => {
  const sourceIds = [
    'moonshotai-model-catalog', 'moonshotai-global-model-catalog',
    'moonshotai-api-overview', 'moonshotai-global-api-overview',
    'moonshotai-chat-pricing', 'moonshotai-global-chat-pricing',
    ...(['chat-api', 'responses-api', 'messages-api'] as const).flatMap((suffix) => [`moonshotai-${suffix}`, `moonshotai-global-${suffix}`]),
  ];
  const documents: CapturedDocument[] = sourceIds.map((id) => {
    const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
    const global = id.includes('-global-');
    const apiHost = global ? 'api.moonshot.ai' : 'api.moonshot.cn';
    const docsHost = global ? 'platform.kimi.ai' : 'platform.kimi.com';
    const suffix = id.endsWith('responses-api') ? 'responses' : id.endsWith('messages-api') ? 'messages' : 'chat';
    const route = suffix === 'chat' ? '/v1/chat/completions' : suffix === 'responses' ? '/v1/responses' : '/anthropic/v1/messages';
    const request = suffix === 'chat' ? 'ChatRequest' : suffix === 'responses' ? 'ResponsesRequest' : 'MessagesRequest';
    const response = suffix === 'chat' ? 'ChatCompletionResponse' : suffix === 'responses' ? 'ResponsesResponse' : 'MessagesResponse';
    const input = suffix === 'responses' ? 'input' : 'messages';
    const output = suffix === 'chat' ? 'choices' : suffix === 'responses' ? 'output' : 'content';
    const fields = suffix === 'chat'
      ? ['        max_completion_tokens:', '          type: integer', '        reasoning_effort:', '          type: string', '          enum:', '            - low', '            - high', '            - max']
      : suffix === 'responses' ? ['        max_output_tokens:', '          type: integer', '        text:', '          type: object']
        : ['        max_tokens:', '          type: integer', '          minimum: 1'];
    const api = ['# API', 'openapi: 3.1.0', 'paths:', `  ${route}:`, '    post:', 'components:', '  schemas:', `    ${request}:`, '      properties:', '        model:', '          type: string', '          enum:', '            - kimi-k3.1-pro', `        ${input}:`, ...(suffix === 'responses' ? ['          oneOf:', '            - type: string', '            - type: array'] : ['          type: array']), ...fields, '        stream:', '          type: boolean', '      required:', `        - ${input}`, `    ${response}:`, '      properties:', `        ${output}:`, '          type: array'].join('\n');
    const overview = [`https://${apiHost}`, '| 兼容 API | base_url | 接口 | 可用工具 |', '| - | - | - | - |', `| OpenAI Chat Completions | https://${apiHost}/v1 | https://${docsHost}/docs/api/chat | SDK |`, `| OpenAI Responses | https://${apiHost}/v1 | https://${docsHost}/docs/api/responses | SDK |`, `| Anthropic Messages | https://${apiHost}/anthropic | https://${docsHost}/docs/api/messages | SDK |`].join('\n');
    const body = id.includes('model-catalog') ? '# 模型列表\n| 模型名称 | 描述 |\n| - | - |\n| `kimi-k3.1-pro` | 当前模型 |\n## 已下线模型\n| 模型名称 | 描述 |\n| - | - |\n| `moonshot-v1-32k` | 已下线 |' : id.includes('api-overview') ? overview : id.endsWith('-api') ? api : '# Pricing';
    return { source, body, metadata: { source_id: id, source_name: source.name, request_url: source.url, retrieved_at: '2026-10-26T00:00:00Z', http_status: 200, content_type: 'text/markdown', etag: null, last_modified: null, content_hash: `sha256:${'a'.repeat(64)}`, byte_length: body.length, collector_version: 'test', body_file: `${id}.body` } };
  });
  const ir = toMoonshotIR(documents, factsFromDocuments(documents));
  for (const service of ir.services) {
    const offering = service.offerings.find(({ provider_model_id }) => provider_model_id.value === 'kimi-k3.1-pro');
    assert.ok(offering, `${service.id.value} contains the current Kimi K3.1 Pro model`);
    const operationFor = (protocol: string) => offering.operations.find(({ routes }) => routes.some(({ protocol: routeProtocol }) => routeProtocol.value === protocol));
    const chat = operationFor('chat-completions');
    assert.ok(chat?.parameters?.value.some(({ name }) => name === 'max_completion_tokens'));
    assert.deepEqual(chat?.parameters?.value.find(({ name }) => name === 'reasoning_effort')?.enum, ['low', 'high', 'max']);
    assert.equal(chat?.input?.value.find(({ name }) => name === 'messages')?.required, true);
    assert.ok(chat?.output?.value[0]?.fields?.includes('choices'));
    assert.equal(chat?.output?.value[0]?.streaming, true, 'Chat Request Schema declares a boolean stream switch');

    const responses = operationFor('responses');
    assert.ok(!responses?.parameters?.value.some(({ name }) => name === 'input'), 'oneOf string/array input is not flattened into an inaccurate single ParameterType');
    assert.equal(responses?.parameters?.value.find(({ name }) => name === 'max_output_tokens')?.type, 'integer');
    assert.equal(responses?.parameters?.value.find(({ name }) => name === 'text')?.type, 'object');
    assert.equal(responses?.parameters?.value.find(({ name }) => name === 'text')?.enum, undefined, 'nested format enums do not become an enum on the parent object');
    assert.equal(responses?.input?.value.find(({ name }) => name === 'input')?.required, true);
    assert.ok(responses?.output?.value[0]?.fields?.includes('output'));
    assert.equal(responses?.output?.value[0]?.streaming, true, 'Responses Request Schema declares a boolean stream switch');

    const messages = operationFor('messages');
    assert.equal(messages?.parameters?.value.find(({ name }) => name === 'messages')?.required, true);
    assert.equal(messages?.parameters?.value.find(({ name }) => name === 'max_tokens')?.min, 1);
    assert.equal(messages?.input?.value.find(({ name }) => name === 'messages')?.required, true);
    assert.ok(messages?.output?.value[0]?.fields?.includes('content'));
    assert.equal(messages?.output?.value[0]?.streaming, true, 'Messages Request Schema declares a boolean stream switch');
  }
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

it('Kimi Batch IR 按官方型号范围、异步创建 API 和 60% 价格映射，且保留 Operation 价格关联', () => {
  const makeDocument = (id: string, market: 'cn' | 'global', body: string, contentType = 'text/markdown'): CapturedDocument => {
    const source = MOONSHOTAI_INGEST_SOURCES.find(({ id: sourceId }) => sourceId === id)!;
    return {
      source,
      body,
      metadata: {
        source_id: id, market, source_name: source.name, request_url: source.url,
        retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200, content_type: contentType,
        etag: null, last_modified: null, content_hash: `sha256:${'1'.repeat(64)}`,
        byte_length: body.length, collector_version: 'test', body_file: `${id}.body`,
      },
    };
  };
  const documents = (['cn', 'global'] as const).flatMap((market) => {
    const prefix = market === 'global' ? 'moonshotai-global-' : 'moonshotai-';
    const host = market === 'global' ? 'api.moonshot.ai' : 'api.moonshot.cn';
    const docsHost = market === 'global' ? 'platform.kimi.ai' : 'platform.kimi.com';
    const isGlobal = market === 'global';
    const catalog = [
      '# Model catalog', '| Model name | Description |', '| - | - |', '| `kimi-k2.6` | Current |',
      '## Deprecated Models', '| Model name | Description |', '| - | - |', '| `moonshot-v1-32k` | Retired |',
    ].join('\n');
    const overview = [
      '# API overview', `https://${host}`,
      '| 兼容 API | base\\_url | 接口 | 可用工具 |', '| - | - | - | - |',
      `| OpenAI Chat Completions | \`https://${host}/v1\` | [Chat](https://${docsHost}/docs/api/chat) | SDK |`,
    ].join('\n');
    const chatPricing = [
      '| Model | Input | Output | Cached Input |', '| - | - | - | - |',
      isGlobal ? '| kimi-k2.6 | $5.00 / MTok | $10.00 / MTok | $1.00 / MTok |' : '| kimi-k2.6 | ¥5.00 / MTok | ¥10.00 / MTok | ¥1.00 / MTok |',
    ].join('\n');
    const batchPricing = isGlobal
      ? '<p>Batch API inference costs are 60% of the standard model price. Batch API supports kimi-k2.6 models.</p>'
      : '<p>批量推理 API 费用为标准模型价格的 60%。Batch API 支持 kimi-k2.6 模型。</p>';
    const batchCreate = [
      '# Batch create API', '```yaml', 'openapi: 3.1.0', 'paths:', '  /v1/batches:', '    post:', '      summary: Create batch',
      'components:', '  schemas:', '    BatchCreateRequest:', '      type: object', '      properties:',
      '        input_file_id:', '          type: string', '        endpoint:', '          type: string', '          enum:', '            - /v1/chat/completions',
      '        completion_window:', '          type: string', '        metadata:', '          type: object', '      required:', '        - input_file_id', '        - endpoint', '        - completion_window', '```',
    ].join('\n');
    return [
      makeDocument(`${prefix}model-catalog`, market, catalog),
      makeDocument(`${prefix}api-overview`, market, overview),
      makeDocument(`${prefix}chat-pricing`, market, chatPricing),
      makeDocument(`${prefix}batch-pricing`, market, batchPricing, 'text/html'),
      makeDocument(`${prefix}batch-create-api`, market, batchCreate),
    ];
  });
  const ir = toMoonshotIR(documents, factsFromDocuments(documents));
  for (const service of ir.services) {
    const offering = service.offerings[0]!;
    const operation = offering.operations.find(({ id }) => id.value === 'batch_inference');
    assert.ok(operation, `${service.id.value} Batch API Operation exists for the officially eligible model`);
    assert.equal(operation.routes[0]?.path_template.value, '/batches');
    assert.equal(operation.schema_operation?.value.execution?.mode, 'async_job');
    assert.deepEqual(operation.parameters?.value.map(({ name, required }) => [name, required]), [
      ['input_file_id', true], ['endpoint', true], ['completion_window', true], ['metadata', false],
    ]);
    const batchPrice = offering.prices.find(({ operation_ref }) => operation_ref?.value === 'batch_inference');
    assert.ok(batchPrice, `${service.id.value} Batch price is attached to the Batch operation`);
    assert.deepEqual(batchPrice.rules.value[0]?.rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal]), [
      ['input', service.id.value === 'cn' ? '3' : '3'],
      ['output', service.id.value === 'cn' ? '6' : '6'],
      ['cache_read', '0.6'],
    ]);
  }
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});
