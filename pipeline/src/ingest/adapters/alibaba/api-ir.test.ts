import assert from 'node:assert/strict';
import test from 'node:test';
import type { CapturedDocument } from '../document-set.ts';
import type { IngestSource, SnapshotMetadata } from '../../types.ts';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { mapAlibabaApiIR } from './api-ir.ts';
import { extractAlibabaApiFacts } from './api-parser.ts';

function document(id: string, scope: IngestSource['scope'], body: string, market?: 'cn' | 'global'): CapturedDocument {
  const source: IngestSource = {
    id, provider_id: 'alibaba', ...(market ? { market } : {}), name: id,
    url: `https://docs.example.test/${id}`, enabled: true, accept: 'text/html', max_bytes: 100_000,
    scope, access_scope: 'public', extraction: 'html',
  };
  const metadata: SnapshotMetadata = {
    source_id: id, ...(market ? { market } : {}), source_name: id, request_url: source.url,
    retrieved_at: '2026-10-26T00:00:00Z', http_status: 200, content_type: 'text/html',
    etag: null, last_modified: null, content_hash: 'sha256:abc', byte_length: body.length,
    collector_version: 'test', body_file: 'sha256-abc.json',
  };
  return { source, metadata, body };
}

test('百炼 API IR 仅关联同区域代码示例中的精确模型，并通过引用校验', () => {
  const documents = [
    document('alibaba-api-compatibility', 'api', [
      '### 按量计费 <table>',
      '<tr><td>OpenAI</td><td>https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1 https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1 https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/compatible-mode/v1</td></tr>',
      '<tr><td>Anthropic</td><td>https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/apps/anthropic https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/apps/anthropic</td></tr>',
      '</table>',
    ].join(''), 'cn'),
    document('alibaba-global-api-base-url', 'api', [
      '<h3 id="workspace-dedicated-domain">Workspace-dedicated Domain</h3><table><tr><th>Region</th><th>OpenAI-compatible</th><th>Anthropic-compatible</th></tr>',
      '<tr><td>China (Beijing)</td><td>https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1</td><td>https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/apps/anthropic</td></tr>',
      '<tr><td>Singapore</td><td>https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1</td><td>https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/apps/anthropic</td></tr>',
      '<tr><td>Japan (Tokyo)</td><td>https://{WorkspaceId}.ap-northeast-1.maas.aliyuncs.com/compatible-mode/v1</td><td>https://{WorkspaceId}.ap-northeast-1.maas.aliyuncs.com/apps/anthropic</td></tr>',
      '<tr><td>Germany (Frankfurt)</td><td>https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1</td><td>https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/apps/anthropic</td></tr>',
      '<tr><td>US (Virginia)</td><td>https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/compatible-mode/v1</td><td>https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/apps/anthropic</td></tr>',
      '<tr><td>Hong Kong</td><td>https://{WorkspaceId}.cn-hongkong.maas.aliyuncs.com/compatible-mode/v1</td><td>https://{WorkspaceId}.cn-hongkong.maas.aliyuncs.com/apps/anthropic</td></tr>',
      '</table>',
    ].join(''), 'global'),
    document('alibaba-openai-chat-api', 'api', 'POST https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/chat/completions <pre>base_url="https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1" model="qwen3.8-max"</pre>'),
    document('alibaba-openai-responses-api', 'api', 'Web search Searches the internet for current information. Properties type string (required) Fixed as `web_search`. Example: [{"type":"web_search"}] POST https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1/responses <pre>base_url="https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1" model="qwen3.8-max"</pre>'),
    document('alibaba-anthropic-messages-api', 'api', 'POST https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/apps/anthropic/v1/messages <pre>base_url="https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/apps/anthropic" model="qwen3.8-max"</pre>'),
    document('alibaba-model-pricing', 'pricing', '价格 CNY', 'cn'),
    document('alibaba-global-model-pricing', 'pricing', '价格 USD', 'global'),
    document('alibaba-models-gallery', 'model_catalog', 'qwen3.8-max', 'cn'),
    document('alibaba-global-model-catalog', 'model_catalog', 'qwen3.8-max', 'global'),
    document('alibaba-service-model-catalog', 'documentation', 'Alibaba Cloud Model Studio service catalog', 'global'),
    document('alibaba-web-search', 'capability', '联网搜索 支持的模型 qwen3.8-max', 'cn'),
    document('alibaba-global-web-search', 'capability', 'Web search Global qwen3.8-max', 'global'),
    document('alibaba-web-extractor', 'capability', '网页抓取 支持的模型 qwen3.8-max', 'cn'),
    document('alibaba-coding-plan', 'plan', 'Pro 高级套餐 价格 ¥200/月；新客首月 ¥39.90。', 'cn'),
    document('alibaba-global-coding-plan', 'plan', 'Pro plan Price $50/month.', 'global'),
    document('alibaba-token-plan-personal', 'plan', 'Token Plan Lite/Essential/Standard/Pro prices and credits.', 'cn'),
    document('alibaba-token-plan', 'plan', 'Token Plan overview.', 'cn'),
    document('alibaba-token-plan-team', 'plan', 'Token Plan team seat prices.', 'cn'),
    document('alibaba-global-token-plan', 'plan', 'Global Token Plan tiers and prices.', 'global'),
  ];
  const apiFacts = extractAlibabaApiFacts(documents);
  const unboundRoute = {
    ...apiFacts.routes.find(({ endpoint_id }) => endpoint_id === 'cn-openai')!,
    provider_model_ids: [] as string[],
    locator: '#unbound-route',
  };
  const ir = mapAlibabaApiIR(documents, {
    api_endpoints: apiFacts.endpoints,
    api_routes: [...apiFacts.routes, unboundRoute],
    api_review_items: [...apiFacts.review_items, {
      source_id: 'alibaba-openai-chat-api', locator: '#unbound-route', message: 'Route 线索暂时没有精确模型关联。',
    }],
    gallery_models: [{ section: '文本生成', model_ids: ['qwen3.8-max', 'qwen3.8-flash'] }],
    full_model_catalog: [],
    global_gallery_models: [{ section: '推荐模型', model_ids: ['qwen3.8-max'] }],
    token_pricing_rows: [
      { source_id: 'alibaba-model-pricing', locator: '#千问Max/table/1/row/2', api_region: '华北2（北京）', deployment_scope: '', currency: 'CNY', section: 'text', model_id: 'qwen3.8-max', unit: 'per_1m_tokens', input_price: '12', cache_read_price: '3', output_price: '36', input_range: '0<Token≤1M', is_limited_time_free: false },
      { source_id: 'alibaba-model-pricing', locator: '#千问Max/table/1/row/3', api_region: '华北2（北京）', deployment_scope: '', currency: 'CNY', section: 'text', model_id: 'qwen3.8-max', unit: 'per_1m_tokens', input_price: '0', output_price: '0', input_range: '0<Token≤1M', is_limited_time_free: true },
      { source_id: 'alibaba-global-model-pricing', locator: '#千问Max/table/1/row/2', api_region: '德国（法兰克福）', deployment_scope: '全球', currency: 'USD', section: 'text', model_id: 'qwen3.8-max', unit: 'per_1m_tokens', input_price: '1.65', output_price: '4.951', input_range: '0<Token≤1M', is_limited_time_free: false },
    ],
    plan_evidence: [
      { source_id: 'alibaba-coding-plan', relevant_lines: ['Pro 高级套餐', '价格 | ¥ 200 /月', '新客首月特惠：首次订阅 Pro 套餐可享首月 ¥39.90（官网目录价 ¥200/月），后续按 ¥200/月 续费，具体以下单页为准。'] },
      { source_id: 'alibaba-global-coding-plan', relevant_lines: ['Pro plan', 'Price | $ 50 /month'] },
      { source_id: 'alibaba-token-plan-personal', relevant_lines: ['每月限额 | 11,500 Credits | 25,500 Credits | 45,000 Credits | 180,000 Credits'] },
      { source_id: 'alibaba-token-plan', relevant_lines: [
        '定价 | 原价 60 元/月 限时 39 元/月 | 原价 120 元/月 限时 79 元/月 | 原价 180 元/月 限时 139 元/月 | 原价 600 元/月 限时 499 元/月 | 100 元/个/月 20,000 Credits/个 最多同时持有 5 个',
      ] },
      { source_id: 'alibaba-token-plan-team', relevant_lines: [
        '标准座席 | 原价 ¥198/坐席/月 限时 ¥150/坐席/月 | 25,000 Credits/坐席/月 | 轻度使用 AI 辅助的团队成员',
        '高级座席 | 原价 ¥698/坐席/月 限时 ¥550/坐席/月 | 100,000 Credits/坐席/月 | 日常高频使用 AI 编程或办公的团队成员',
        '尊享座席 | ¥1,398/坐席/月 | 250,000 Credits/坐席/月 | 重度依赖 AI 的核心开发者',
        'Token Plan 团队版 - 共享用量包 | ¥5,000/个 | 625,000 Credits/个',
      ] },
      { source_id: 'alibaba-global-token-plan', relevant_lines: [
        'Pricing | Original price $8/month Limited-time $6/month | Original price $16/month Limited-time $10/month | Original price $25/month Limited-time $18/month | Original price $80/month Limited-time $68/month | $15/bundle/month 20,000 Credits/bundle Up to 5 at a time',
        'Monthly quota | 11,500 Credits | 25,500 Credits | 45,000 Credits | 180,000 Credits | Not included in plan quota',
        'Pricing | Original price $30/seat/month Limited-time $20/seat/month | Original price $100/seat/month Limited-time $75/seat/month | $200/seat/month | $700/pack/month',
        'Monthly quota | 25,000 Credits/seat/month | 100,000 Credits/seat/month | 250,000 Credits/seat/month | 625,000 Credits/pack',
      ] },
    ],
  });

  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
  const cn = ir.services.find(({ id }) => id.value === 'cn')!;
  const global = ir.services.find(({ id }) => id.value === 'global')!;
  assert.equal(cn.endpoints.length, 5);
  assert.equal(global.endpoints.length, 10);
  for (const sourceRef of ['alibaba-api-compatibility', 'alibaba-global-api-base-url']) {
    const sourceRecordCount = ir.services.reduce((count, service) => count
      + service.endpoints.filter(({ id }) => id.evidence.some(({ source_ref }) => source_ref === sourceRef)).length
      + service.offerings.flatMap(({ operations }) => operations.flatMap(({ routes }) => routes))
        .filter(({ id }) => id.evidence.some(({ source_ref }) => source_ref === sourceRef)).length, 0);
    assert.deepEqual(ir.coverage.filter(({ source_ref, scope }) => source_ref === sourceRef && scope === 'api')
      .map(({ record_count, record_unit }) => [record_count, record_unit]), [[sourceRecordCount, 'recognized API source records']],
    `${sourceRef} API coverage counts source-backed Endpoints and Routes`);
  }
  assert.equal(global.endpoints.find(({ id }) => id.value === 'global-de-openai')?.base_url.value, 'https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1');
  assert.equal(cn.offerings.length, 2);
  assert.equal(global.offerings.length, 1);
  assert.deepEqual(global.offerings[0]!.supply_observations.map(({ kind }) => kind), ['listed_current', 'priced_current']);
  assert.equal(cn.plans.length, 10);
  assert.equal(global.plans.length, 10);
  assert.equal(cn.plans[0]!.id.value, 'cn-coding-plan-pro');
  assert.deepEqual(cn.plans[0]!.billing_options.value, [{
    billing_period: 'month',
    subscription_fee: { currency: 'CNY', amount: '200' },
  }]);
  assert.equal(global.plans[0]!.billing_options.value[0]!.subscription_fee?.amount, '50');
  assert.equal(global.plans[0]!.billing_options.value[0]!.subscription_fee?.currency, 'USD');
  assert.equal(cn.plans[0]!.links?.value.official, 'https://docs.example.test/alibaba-coding-plan');
  const cnLite = cn.plans.find(({ id }) => id.value === 'cn-token-plan-personal-lite')!;
  assert.deepEqual(cnLite.billing_options.value[0], {
    billing_period: 'month', subscription_fee: { currency: 'CNY', amount: '60' },
    promotional_fee: { currency: 'CNY', amount: '39' },
  });
  assert.equal(cnLite.credits?.value, 11500);
  assert.equal(cn.plans.find(({ id }) => id.value === 'cn-token-plan-team-pro-seat')?.credits?.value, 100000);
  assert.equal(cn.plans.find(({ id }) => id.value === 'cn-token-plan-team-shared-pack')?.billing_options.value[0]?.subscription_fee?.amount, '5000');
  const globalPro = global.plans.find(({ id }) => id.value === 'global-token-plan-personal-pro')!;
  assert.equal(globalPro.billing_options.value[0]?.subscription_fee?.amount, '80');
  assert.equal(globalPro.billing_options.value[0]?.promotional_fee?.amount, '68');
  assert.equal(globalPro.credits?.value, 180000);
  assert.equal(global.plans.find(({ id }) => id.value === 'global-token-plan-team-shared-pack')?.credits?.value, 625000);
  const catalogOnly = cn.offerings.find(({ provider_model_id }) => provider_model_id.value === 'qwen3.8-flash')!;
  assert.deepEqual(catalogOnly.supply_observations.map(({ kind }) => kind), ['listed_current']);
  assert.deepEqual(catalogOnly.operations, [], '目录供应不应被扩展成未证明的 API Route');
  assert.equal(cn.offerings[0]!.api_limits, undefined, '模型规格观察不得自动并入 Provider Offering');
  assert.equal(cn.offerings[0]!.api_capabilities, undefined, 'model-specific capability support is not attached to individual Offerings');
  assert.deepEqual(cn.offerings[0]!.operations, [], 'generic API documentation does not imply model-specific Routes');
  for (const source_ref of ['alibaba-web-search', 'alibaba-global-web-search', 'alibaba-web-extractor']) {
    assert.ok(ir.coverage.some((record) => record.source_ref === source_ref && record.scope === 'capability'
      && record.status === 'partial' && record.record_count === 0), `${source_ref} stays unstructured rather than claiming a mapped capability`);
  }
  assert.ok(ir.coverage.some(({ source_ref, scope, status, record_count }) => source_ref === 'alibaba-coding-plan'
    && scope === 'plan' && status === 'partial' && record_count === 1));
  assert.ok(ir.coverage.some(({ source_ref, scope, status, record_count }) => source_ref === 'alibaba-global-token-plan'
    && scope === 'plan' && status === 'partial' && record_count === 9));
  assert.ok(ir.coverage.some(({ source_ref, scope, status, record_count }) => source_ref === 'alibaba-token-plan-personal'
    && scope === 'plan' && status === 'partial' && record_count === 4));
  assert.ok(ir.review_items.some(({ id, message }) => id === 'plan-partial-alibaba-token-plan-team'
    && message.includes('席位变更规则')));
  assert.ok(!ir.review_items.some(({ id }) => id.includes('not-parsed-alibaba-token-plan')),
    '已结构化的套餐价格/额度不应继续标成完全未解析');
  assert.deepEqual(cn.offerings[0]!.operations, []);
  assert.deepEqual(global.offerings[0]!.operations, []);
  assert.equal(cn.offerings[0]!.prices.length, 1, 'limited-time free promotion rows are not emitted as separate price records');
  assert.equal(cn.offerings[0]!.prices[0]!.rules.value.length, 1, '限时免费促销不应混入标准价格卡');
  assert.equal(cn.offerings[0]!.prices[0]!.currency.value, 'CNY');
  assert.deepEqual(cn.offerings[0]!.prices[0]!.rules.value[0]!.rate_items, [
    { metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '12' },
    { metric: 'cache_read', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '3' },
    { metric: 'output', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '36' },
  ]);
  assert.equal(cn.offerings[0]!.prices[0]!.rules.value[0]!.region, '华北2（北京）');
  assert.deepEqual(cn.offerings[0]!.prices[0]!.rules.value[0]!.conditions, [
    { field: 'usage.input_tokens', operator: 'gt', value: '0' },
    { field: 'usage.input_tokens', operator: 'lte', value: '1000000' },
  ]);
  assert.equal(cn.offerings[0]!.prices[0]!.rules.value[0]!.evidence[0]!.locator, '#千问Max/table/1/row/2');
  assert.equal(cn.offerings[0]!.prices.some(({ unit }) => unit.value === 'per_image'), false);
  assert.equal(global.offerings[0]!.prices.some((price) => price.rules.value.some((rule) => rule.evidence.some(({ source_ref }) => source_ref.includes('model-detail')))), false);
  assert.equal(global.offerings[0]!.prices[0]!.rules.value[0]!.deployment, '全球');
  assert.equal(global.offerings[0]!.prices[0]!.rules.value[0]!.region, '德国（法兰克福）');
  assert.deepEqual(global.offerings[0]!.prices[0]!.rules.value[0]!.conditions, [
    { field: 'usage.input_tokens', operator: 'gt', value: '0' },
    { field: 'usage.input_tokens', operator: 'lte', value: '1000000' },
  ]);
  const openaiObservation = ir.document_observations.find(({ source_ref }) => source_ref === 'alibaba-openai-chat-api');
  assert.ok(openaiObservation?.structured_records.some((record) =>
    typeof record === 'object' && record !== null && 'record_type' in record && record.record_type === 'api_route_observation'
      && 'provider_model_ids' in record && Array.isArray(record.provider_model_ids) && record.provider_model_ids.length === 0,
  ));
  assert.equal(ir.review_items.length, 6);
  assert.match(ir.review_items[0]!.message, /没有精确模型关联/);
  assert.match(ir.review_items.find(({ id }) => id === 'pricing-partial-cn')!.message, /Token 价格行未迁入领域 IR/);
  assert.equal(ir.review_items.filter(({ id }) => id.startsWith('plan-partial-')).length, 4);
});
