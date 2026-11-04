import assert from 'node:assert/strict';
import path from 'node:path';
import { describe, it } from 'node:test';
import type { ProviderDocument } from '@providerlist/schema/types';
import { readProviderSource } from '../../data/provider-store.ts';
import type { SnapshotMetadata } from '../types.ts';
import { mergePartialProviderProjection, previewChangesWithEvidence, previewCoverageRows, previewProviderDocumentChanges, previewStatusLabel, summarizeSemanticPriceChanges } from './preview.ts';
import type { ProviderCollectionIR } from './provider-collection.ts';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
type Mutable<T> = T extends readonly (infer U)[] ? Mutable<U>[] : T extends object ? { -readonly [K in keyof T]: Mutable<T[K]> } : T;

describe('IR ProviderDocument 字段差异预览', () => {
  it('明确区分待核对状态与可投影状态，避免把待审候选当成批准', () => {
    assert.equal(previewStatusLabel('needs_review'), '待核对；不会写入正式数据');
    assert.equal(previewStatusLabel('converted'), '可投影；仍需单独审核和生成正式数据变更');
  });

  it('字段变更表为稳定 ID 路径附加对应来源定位', () => {
    const document = {
      services: [{ id: 'cn', name: 'CN' }],
      evidence: [{ id: 'evidence-name', source_ref: 'catalog', field: '/services/0/name', assertion: '官方目录名称' }],
    } as unknown as ProviderDocument;
    const ir = {
      services: [{ name: { value: 'CN', evidence: [
        { source_ref: 'catalog', locator: 'table/models', assertion: '官方目录名称' },
        { source_ref: 'catalog', locator: 'section/summary', assertion: '官方目录名称' },
      ] } }],
    } as unknown as ProviderCollectionIR;
    const changes = previewChangesWithEvidence(['| 更新 | /services/cn/name | Old | New |'], document, ir);
    assert.match(changes[0]!, /catalog · table\/models, section\/summary · 官方目录名称/u);
  });

  it('按 Provider API 调用 ID 对齐 Offering，避免重复报告新增和移除', () => {
    const previous = { services: [{ id: 'cn', offerings: [{ id: 'qwen-plus', service_id: 'cn', display_name: 'Qwen Plus' }] }] };
    const proposed = { services: [{ id: 'cn', offerings: [{ id: 'qwen-plus', service_id: 'cn', display_name: 'Qwen Plus 最新版' }] }] };
    const changes = previewProviderDocumentChanges(previous, proposed).join('\n');

    assert.match(changes, /\/services\/cn\/offerings\/qwen-plus\/display_name/u);
    assert.doesNotMatch(changes, /\| 新增 \| \/services\/cn\/offerings\/qwen-plus \|/u);
    assert.doesNotMatch(changes, /\| 移除建议 \| \/services\/cn\/offerings\/qwen-plus \|/u);
  });

  it('价格明细按 metric 对齐，数组顺序变化不会伪报价格变更', () => {
    const previous = { services: [{ id: 'cn', offerings: [{ id: 'qwen-plus', pricing: [{ currency: 'CNY', rates: [
      { metric: 'input', unit: 'per_1m_tokens', value: '30' },
      { metric: 'cache_read', unit: 'per_1m_tokens', value: '0.25' },
      { metric: 'output', unit: 'per_1m_tokens', value: '60' },
    ] }] }] }] };
    const reordered = { services: [{ id: 'cn', offerings: [{ id: 'qwen-plus', pricing: [{ currency: 'CNY', rates: [
      { metric: 'cache_read', unit: 'per_1m_tokens', value: '0.25' },
      { metric: 'input', unit: 'per_1m_tokens', value: '30' },
      { metric: 'output', unit: 'per_1m_tokens', value: '60' },
    ] }] }] }] };
    assert.deepEqual(previewProviderDocumentChanges(previous, reordered), []);

    const changed = structuredClone(reordered);
    changed.services[0]!.offerings[0]!.pricing[0]!.rates[1]!.value = '31';
    assert.deepEqual(previewProviderDocumentChanges(previous, changed), [
      '| 更新 | /services/cn/offerings/qwen-plus/pricing/0/rates/input/value | <code>"30"</code> | <code>"31"</code> |',
    ]);
  });

  it('按价格卡、规则条件和计量项汇总价格变化，并忽略 evidence/source 引用顺序', () => {
    const previous = { services: [{ id: 'cn', offerings: [{ id: 'qwen-plus', pricing: [{ currency: 'CNY',
      region: '华北2', evidence_refs: ['pricing-a', 'pricing-b'], rates: [
        { metric: 'input', unit: 'per_1m_tokens', quantity: 1, value: '1' },
        { metric: 'output', unit: 'per_1m_tokens', quantity: 1, value: '2' },
      ],
    }] }] }] };
    const proposed = structuredClone(previous);
    proposed.services[0]!.offerings[0]!.pricing[0]!.evidence_refs = ['pricing-b', 'pricing-a'];
    proposed.services[0]!.offerings[0]!.pricing[0]!.rates = [
      { metric: 'output', unit: 'per_1m_tokens', quantity: 1, value: '2' },
      { metric: 'input', unit: 'per_1m_tokens', quantity: 1, value: '3' },
    ];

    assert.deepEqual(summarizeSemanticPriceChanges(previous, proposed), [
      '价格调整 /services/0/offerings/0/pricing/0 · CNY · input 1 per_1m_tokens → 3 per_1m_tokens',
    ]);
  });

  it('来源 coverage 表保留显式零记录，并区分未登记记录数', () => {
    const rows = previewCoverageRows([
      { source_ref: 'empty-catalog', scope: 'model_catalog', status: 'complete', record_count: 0, record_unit: 'unique model IDs' },
      { source_ref: 'partial-price', scope: 'pricing', status: 'partial', note: '页面部分可读' },
    ], [
      { source_id: 'empty-catalog', source_name: '空目录' } as SnapshotMetadata,
      { source_id: 'partial-price', source_name: '部分价格' } as SnapshotMetadata,
    ]);
    assert.match(rows[0]!, /complete \| 0 \| unique model IDs/u);
    assert.match(rows[1]!, /partial \| — \| — \| 页面部分可读/u);
  });

  it('比较 Endpoint、嵌套价格和新增字段，确保评审无需自行打开 JSON 找变化', async () => {
    const previous = await readProviderSource(path.join(repoRoot, 'data'), 'openai');
    const proposed = JSON.parse(JSON.stringify(previous)) as Mutable<ProviderDocument>;
    const endpoint = proposed.services.flatMap(({ endpoints }) => endpoints ?? [])[0];
    assert.ok(endpoint);
    endpoint.base_url = `${endpoint.base_url}/changed`;
    const firstPricing = proposed.services.flatMap(({ offerings }) => offerings ?? []).find(({ pricing }) => pricing?.length)?.pricing?.[0];
    assert.ok(firstPricing?.rates?.[0]);
    firstPricing.rates[0].value = '999.01';
    proposed.services[0]!.account_requirements = ['key'];

    const changes = previewProviderDocumentChanges(previous, proposed as unknown as ProviderDocument).join('\n');
    assert.match(changes, /\/services\/[^|]+\/endpoints\/[^|]+\/base_url/u);
    assert.match(changes, /\/services\/[^|]+\/offerings\/[^|]+\/pricing\/[^|]+\/rates\/[^/]+\/value/u);
    assert.match(changes, /\/services\/[^|]+\/account_requirements/u);
    assert.match(changes, /999\.01/u);
  });

  it('长字段值完整显示在同一变更行，不折叠或截断', () => {
    const changes = previewProviderDocumentChanges({ value: 'old' }, { value: 'x'.repeat(1000) });
    assert.equal(changes.length, 1);
    assert.match(changes[0]!, /<code>"old"<\/code>/u);
    assert.doesNotMatch(changes[0]!, /<details>/u);
    assert.match(changes[0]!, /"x{1000}"/u);
  });

  it('API 局部覆盖只合并端点与 Route，不建议删除未采集的模型、价格、套餐和能力', () => {
    const previous = {
      schema_version: '1.0.0', data_version: 'old', generated_at: '2026-10-25T00:00:00Z',
      provider: { id: 'sample', name: 'Sample', aliases: [], kind: 'first_party', sources: [] },
      services: [{
        id: 'cn', provider_id: 'sample', name: 'CN', website: 'https://example.com', docs: { overview: 'https://example.com/overview' },
        endpoints: [{ id: 'old', base_url: 'https://old.example/v1', api_region: '北京', routes: [{ protocol: 'chat-completions', method: 'POST', path: '/chat/completions' }] }],
        offerings: [{
          id: 'qwen-a', service_id: 'cn', model_ref: 'qwen-a', display_name: 'Qwen A',
          pricing: [{ currency: 'CNY', rates: [{ metric: 'input', unit: 'per_1m_tokens', value: '1' }] }],
        }],
        capabilities: [{ kind: 'batch' }],
        plan_ids: ['token-plan'], sources: ['old-source'],
      }],
      plans: [{ id: 'token-plan', service_ref: 'cn', billing_options: [] }],
    } as unknown as ProviderDocument;
    const proposed = {
      ...previous,
      data_version: 'new', generated_at: '2026-10-26T00:00:00Z',
      provider: { ...previous.provider, sources: ['api-source'] },
      services: [{
        ...previous.services[0]!,
        docs: { ...previous.services[0]!.docs, 'alibaba-api': 'https://example.com/api' },
        endpoints: [{ id: 'new', base_url: 'https://new.example/v1', api_region: '北京', routes: [{ protocol: 'chat-completions', method: 'POST', path: '/chat/completions' }] }],
        offerings: [{
          ...previous.services[0]!.offerings![0]!,
        }],
      }],
    } as unknown as ProviderDocument;
    const ir = {
      ir_version: '1.0.0', provider_id: 'sample', observed_at: '2026-10-26T00:00:00Z', source_refs: ['api-source'],
      coverage: [{ source_ref: 'api-source', scope: 'api', market: 'cn', status: 'partial' }],
      document_observations: [], review_items: [],
      services: [{ id: { value: 'cn', evidence: [] }, }],
    } as unknown as ProviderCollectionIR;

    const merged = mergePartialProviderProjection(previous, proposed, ir);
    const service = merged.services[0]!;
    assert.deepEqual(service.endpoints?.map(({ id }) => id), ['old', 'new']);
    assert.deepEqual(service.endpoints?.flatMap((endpoint) => endpoint.routes?.map(({ path }) => path) ?? []), ['/chat/completions', '/chat/completions']);
    assert.equal('operations' in (service.offerings?.[0] ?? {}), false);
    assert.equal(service.capabilities?.[0]?.kind, 'batch');
    assert.deepEqual(service.plan_ids, ['token-plan']);
    assert.equal(merged.plans?.[0]?.id, 'token-plan');
    assert.equal(service.offerings?.[0]?.pricing?.[0]?.rates?.[0]?.value, '1');
    assert.deepEqual(service.docs, {
      overview: 'https://example.com/overview',
      'alibaba-api': 'https://example.com/api',
    });
  });

  it('API 完整覆盖可替换端点及同一 operation 的 Route，仍保留其他数据域', () => {
    const previous = {
      schema_version: '1.0.0', data_version: 'old', generated_at: '2026-10-25T00:00:00Z',
      provider: { id: 'sample', name: 'Sample', aliases: [], kind: 'first_party', sources: [] },
      services: [{
        id: 'cn', provider_id: 'sample', name: 'CN',
        endpoints: [{ id: 'old', base_url: 'https://old.example/v1', api_region: '北京', routes: [{ protocol: 'chat-completions', method: 'POST', path: '/chat/completions' }] }],
        offerings: [{ id: 'qwen-a', service_id: 'cn', model_ref: 'qwen-a', display_name: 'Qwen A' }],
        capabilities: [{ kind: 'batch' }], plan_ids: ['token-plan'],
      }], plans: [{ id: 'token-plan', service_ref: 'cn', billing_options: [] }],
    } as unknown as ProviderDocument;
    const proposed = JSON.parse(JSON.stringify(previous)) as Mutable<ProviderDocument>;
    proposed.services[0]!.endpoints = [{ id: 'new', base_url: 'https://new.example/v1', api_region: '北京' }];
    proposed.services[0]!.endpoints[0]!.routes = [{ protocol: 'chat-completions', method: 'POST', path: '/chat/completions' }];
    const ir = {
      ir_version: '1.0.0', provider_id: 'sample', observed_at: '2026-10-26T00:00:00Z', source_refs: ['api-source'],
      coverage: [{ source_ref: 'api-source', scope: 'api', market: 'cn', status: 'complete' }],
      document_observations: [], review_items: [], services: [{ id: { value: 'cn', evidence: [] }, }],
    } as unknown as ProviderCollectionIR;

    const merged = mergePartialProviderProjection(previous, proposed as unknown as ProviderDocument, ir);
    assert.deepEqual(merged.services[0]?.endpoints?.map(({ id }) => id), ['new']);
    assert.deepEqual(merged.services[0]?.endpoints?.flatMap((endpoint) => endpoint.routes?.map(({ path }) => path) ?? []), ['/chat/completions']);
    assert.equal('operations' in (merged.services[0]?.offerings?.[0] ?? {}), false);
    assert.equal(merged.services[0]?.capabilities?.[0]?.kind, 'batch');
    assert.equal(merged.plans?.[0]?.id, 'token-plan');
  });

  it('API 部分覆盖更新 Route 时保留未采集的可调用状态字段', () => {
    const previous = {
      schema_version: '1.0.0', data_version: 'old', generated_at: '2026-10-25T00:00:00Z',
      provider: { id: 'sample', name: 'Sample', aliases: [], kind: 'first_party', sources: [] },
      services: [{
        id: 'global', provider_id: 'sample', name: 'Global',
        endpoints: [{ id: 'api', base_url: 'https://api.example/v1', api_region: 'Global', routes: [{
          protocol: 'responses', method: 'POST', path: '/responses', callability: 'documented_only',
        }] }],
        offerings: [{
          id: 'model-a', service_id: 'global', model_ref: 'sample/model-a', display_name: 'Model A',
        }],
      }],
    } as unknown as ProviderDocument;
    const proposed = JSON.parse(JSON.stringify(previous)) as Mutable<ProviderDocument>;
    proposed.services[0]!.endpoints![0]!.routes![0]!.path = '/v1/responses';
    delete proposed.services[0]!.endpoints![0]!.routes![0]!.callability;
    const ir = {
      ir_version: '1.0.0', provider_id: 'sample', observed_at: '2026-10-26T00:00:00Z', source_refs: ['api-source'],
      coverage: [{ source_ref: 'api-source', scope: 'api', market: 'global', status: 'partial' }],
      document_observations: [], review_items: [],
      services: [{ id: { value: 'global', evidence: [] }, }],
    } as unknown as ProviderCollectionIR;

    const routes = mergePartialProviderProjection(previous, proposed as unknown as ProviderDocument, ir).services[0]?.endpoints?.[0]?.routes ?? [];
    assert.ok(routes.some((route) => route.path === '/v1/responses'));
    assert.ok(routes.some((route) => route.path === '/responses' && route.callability === 'documented_only'));
  });

  it('模型、价格、能力和 Plan 的局部覆盖按 ID 补充，并保留未采集字段', () => {
    const previous = {
      schema_version: '1.0.0', data_version: 'old', generated_at: '2026-10-25T00:00:00Z',
      provider: { id: 'sample', name: 'Sample', aliases: [], kind: 'first_party', sources: [] },
      services: [{
        id: 'cn', provider_id: 'sample', name: 'CN',
        endpoints: [{
          id: 'old', base_url: 'https://old.example/v1', api_region: '北京',
          routes: [{ protocol: 'chat-completions', method: 'POST', path: '/chat/completions' }],
        }],
        offerings: [{
          id: 'qwen-a', service_id: 'cn', model_ref: 'qwen-a', display_name: 'Qwen A', api_limits: { context: 128000 },
          pricing: [{ currency: 'CNY', rates: [{ metric: 'input', unit: 'per_1m_tokens', value: '1' }] }],
        }],
        capabilities: [{ kind: 'batch' }], plan_ids: ['old-plan'], sources: ['old-source'],
      }],
      plans: [{
        id: 'old-plan', service_ref: 'cn', name: '旧套餐名称',
        currency: 'CNY', billing_options: [{ billing_period: 'month', price: '100', evidence_refs: ['old-plan-price'] }],
        allowance: { requests_monthly: 9000 }, links: { official: 'https://old.example/plan' }, evidence_refs: ['old-plan'],
      }],
    } as unknown as ProviderDocument;
    const proposed = JSON.parse(JSON.stringify(previous)) as Mutable<ProviderDocument>;
    proposed.data_version = 'new';
    proposed.generated_at = '2026-10-26T00:00:00Z';
    proposed.services[0]!.offerings = [
      {
        ...proposed.services[0]!.offerings![0]!,
        model_ref: 'developer/qwen-a',
        pricing: [{ currency: 'CNY', rates: [{ metric: 'output', unit: 'per_1m_tokens', value: '2' }] }],
      },
      { id: 'qwen-b', service_id: 'cn', model_ref: null },
    ];
    proposed.services[0]!.capabilities!.push({ kind: 'web_search' });
    proposed.services[0]!.plan_ids!.push('new-plan');
    proposed.plans![0] = {
      id: 'old-plan', service_ref: 'cn', name: '新套餐名称',
      currency: 'CNY', billing_options: [{ billing_period: 'month', price: '200', sale_price: '39.90', evidence_refs: ['new-plan-price'] }],
      links: { pricing: 'https://new.example/plan' }, evidence_refs: ['new-plan'],
    };
    proposed.plans!.push({ id: 'new-plan', service_ref: 'cn', billing_options: [] });
    const ir = {
      ir_version: '1.0.0', provider_id: 'sample', observed_at: '2026-10-26T00:00:00Z', source_refs: ['source'],
      coverage: [
        { source_ref: 'source', scope: 'model_catalog', market: 'cn', status: 'partial' },
        { source_ref: 'source', scope: 'pricing', market: 'cn', status: 'partial' },
        { source_ref: 'source', scope: 'capability', market: 'cn', status: 'partial' },
        { source_ref: 'source', scope: 'plan', market: 'cn', status: 'partial' },
      ],
      document_observations: [], review_items: [],
      services: [{ id: { value: 'cn', evidence: [] }, }],
    } as unknown as ProviderCollectionIR;

    const merged = mergePartialProviderProjection(previous, proposed as unknown as ProviderDocument, ir);
    const service = merged.services[0]!;
    const offeringA = service.offerings?.find(({ id }) => id === 'qwen-a');
    assert.equal(offeringA?.model_ref, 'developer/qwen-a');
    assert.equal(offeringA?.api_limits?.context, 128000, '未覆盖的 API 限制应保留');
    assert.deepEqual(offeringA?.pricing?.[0]?.rates?.map(({ metric }) => metric), ['input', 'output']);
    assert.equal('operations' in (offeringA ?? {}), false);
    assert.ok(service.offerings?.some(({ id }) => id === 'qwen-b'));
    assert.deepEqual(service.capabilities?.map(({ kind }) => kind), ['batch', 'web_search']);
    assert.deepEqual(service.plan_ids, ['old-plan', 'new-plan']);
    assert.deepEqual(merged.plans?.map(({ id }) => id), ['old-plan', 'new-plan']);
    const mergedPlan = merged.plans?.find(({ id }) => id === 'old-plan')!;
    assert.equal(mergedPlan.name, '新套餐名称');
    assert.equal(mergedPlan.billing_options[0]!.price, '200', '新证据应更新相同周期的套餐标准价');
    assert.equal(mergedPlan.billing_options[0]!.sale_price, '39.90');
    assert.deepEqual(mergedPlan.billing_options[0]!.evidence_refs, ['old-plan-price', 'new-plan-price']);
    assert.deepEqual(mergedPlan.allowance, { requests_monthly: 9000 }, 'partial PlanFact 不应删除尚未采集的套餐额度');
    assert.deepEqual(mergedPlan.links, { official: 'https://old.example/plan', pricing: 'https://new.example/plan' });
    assert.deepEqual(mergedPlan.evidence_refs, ['old-plan', 'new-plan']);
  });

  it('按市场隔离 coverage，国内来源不得改写国际 Service', () => {
    const previous = {
      schema_version: '1.0.0', data_version: 'old', generated_at: '2026-10-25T00:00:00Z',
      provider: { id: 'sample', name: 'Sample', aliases: [], kind: 'first_party', sources: [] },
      services: [
        { id: 'cn', provider_id: 'sample', name: 'CN',  endpoints: [{ id: 'cn-old', base_url: 'https://cn-old.example/v1', api_region: '北京' }] },
        { id: 'global', provider_id: 'sample', name: 'Global',  endpoints: [{ id: 'global-old', base_url: 'https://global-old.example/v1', api_region: 'US' }] },
      ],
    } as unknown as ProviderDocument;
    const proposed = JSON.parse(JSON.stringify(previous)) as Mutable<ProviderDocument>;
    proposed.data_version = 'new';
    proposed.generated_at = '2026-10-26T00:00:00Z';
    proposed.services[0]!.endpoints = [{ id: 'cn-new', base_url: 'https://cn-new.example/v1', api_region: '北京' }];
    proposed.services[1]!.endpoints = [{ id: 'global-new', base_url: 'https://global-new.example/v1', api_region: 'US' }];
    const ir = {
      ir_version: '1.0.0', provider_id: 'sample', observed_at: '2026-10-26T00:00:00Z', source_refs: ['cn-source'],
      coverage: [{ source_ref: 'cn-source', scope: 'api', market: 'cn', status: 'partial' }],
      document_observations: [], review_items: [],
      services: [
        { id: { value: 'cn', evidence: [] }, },
        { id: { value: 'global', evidence: [] }, },
      ],
    } as unknown as ProviderCollectionIR;

    const merged = mergePartialProviderProjection(previous, proposed as unknown as ProviderDocument, ir);
    assert.deepEqual(merged.services.find(({ id }) => id === 'cn')?.endpoints?.map(({ id }) => id), ['cn-old', 'cn-new']);
    assert.deepEqual(merged.services.find(({ id }) => id === 'global')?.endpoints?.map(({ id }) => id), ['global-old']);
  });
  it('partial pricing preserves every existing context tier and distinguishes service modes', () => {
    const rate = (context: string, value: string) => ({ metric: 'input', unit: 'per_1m_tokens', context, value });
    const make = (pricing: unknown[]) => ({ provider: { id: 'sample', aliases: [] }, services: [{ id: 'cn', offerings: [{ id: 'model', pricing }] }] }) as unknown as ProviderDocument;
    const prior = make([
      { currency: 'CNY', rates: [rate('<=32000', '1')] },
      { currency: 'CNY', rates: [rate('>32000', '2')] },
      { currency: 'CNY', conditions: [{ field: 'time_period', value: 'peak' }], rates: [rate('<=32000', '3')] },
    ]);
    const next = make([
      { currency: 'CNY', rates: [rate('<=32000', '1.5'), rate('>32000', '2.5')] },
      { currency: 'CNY', conditions: [{ field: 'time_period', operator: 'eq', value: 'peak' }], rates: [rate('<=32000', '3')] },
      { currency: 'CNY', conditions: [{ field: 'request.mode', operator: 'eq', value: 'batch_inference' }], rates: [rate('<=32000', '0.5')] },
    ]);
    const ir = { coverage: [{ scope: 'pricing', market: 'cn', status: 'partial' }], services: [{ id: { value: 'cn' } }] } as unknown as ProviderCollectionIR;
    const groups = mergePartialProviderProjection(prior, next, ir).services[0]!.offerings![0]!.pricing!;
    assert.equal(groups.length, 4);
    assert.deepEqual(groups.slice(0, 2).map(g => g.rates[0]!.value), ['1.5', '2.5']);
    assert.equal(groups[2]!.rates[0]!.value, '3');
    assert.equal(groups[3]!.rates[0]!.value, '0.5');
  });

});
