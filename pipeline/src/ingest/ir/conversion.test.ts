import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { SnapshotMetadata } from '../types.ts';
import type { ModelReferenceResolution, ProviderCollectionIR } from './provider-collection.ts';
import { projectProviderCollectionIR } from './conversion.ts';

const snapshot: SnapshotMetadata = {
  source_id: 'official-facts',
  source_name: '官方事实页',
  request_url: 'https://example.com/provider',
  retrieved_at: '2026-10-26T00:00:00.000Z',
  http_status: 200,
  content_type: 'text/html',
  etag: null,
  last_modified: null,
  content_hash: `sha256:${'a'.repeat(64)}`,
  byte_length: 1,
  collector_version: 'test',
  body_file: 'provider.body',
};

const evidence = [{ source_ref: snapshot.source_id, locator: '#models', assertion: '官方资料明确列出该字段。' }];
const observed = <T>(value: T) => ({ value, evidence });

function completeIR(): ProviderCollectionIR {
  return {
    ir_version: '1.0.0',
    provider_id: 'example',
    observed_at: '2026-10-26T00:00:00.000Z',
    source_refs: [snapshot.source_id],
    coverage: [{ source_ref: snapshot.source_id, scope: 'model_catalog', status: 'complete', record_count: 1, record_unit: 'unique model IDs' }],
    document_observations: [],
    profile: {
      name: observed('Example Provider'),
      aliases: observed(['Example']),
      kind: observed('first_party'),
      docs: observed({ overview: snapshot.request_url }),
    },
    services: [{
      id: observed('global'),
      name: observed('Example Global'),
      endpoints: [{
        id: observed('api'),
        base_url: observed('https://api.example.com/v1'),
        api_region: observed('Global'),
        documentation: observed(snapshot.request_url),
      }],
      offerings: [{
        provider_model_id: observed('tenant/example-model'),
        display_name: observed('Example Model'),
        service_id: observed('global'),
        supply_observations: [{ kind: 'listed_current', evidence }],
        api_capabilities: observed({ reasoning: true }),
        operations: [{
          id: observed('generate'),
          kind: observed('text_generation'),
          routes: [{
            id: observed('chat'),
            endpoint_ref: observed('api'),
            protocol: observed('chat-completions'),
            method: observed('POST'),
            path_template: observed('/chat/completions'),
            operation_kind: observed('text_generation'),
          }],
        }],
        prices: [{
          provider_model_id: observed('tenant/example-model'),
          currency: observed('USD'),
          unit: observed('per_1m_tokens'),
          rules: observed([{
            rate_items: [{ metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.10' }],
            evidence,
          }]),
        }],
      }],
      capabilities: [{
        id: observed('web-search'),
        kind: observed('web_search'),
        operations: [{
          id: observed('search'),
          kind: observed('web_search'),
          input: observed([{ name: 'query', kind: 'text', required: true }]),
          output: observed([{ kind: 'structured', fields: ['results'] }]),
          parameters: observed([{ name: 'limit', type: 'integer', required: false, route_mappings: ['/search:query.limit'] }]),
          routes: [],
        }],
        prices: [{
          capability_ref: observed('web-search'),
          currency: observed('USD'),
          unit: observed('per_request'),
          rules: observed([{
            rate_items: [{ metric: 'request', unit: 'per_request', quantity: 1000, amount_decimal: '0.75' }],
            evidence,
          }]),
        }],
      }],
      plans: [],
    }],
    review_items: [],
  };
}

function resolution(match: ModelReferenceResolution['match']): ModelReferenceResolution {
  return {
    provider_model_id: 'tenant/example-model',
    service_id: 'global',
    model_ref: 'example/example-model',
    match,
    candidates: ['example/example-model'],
    review_note: '唯一斜杠后缀匹配规范 Model ID。',
  };
}

describe('ProviderCollectionIR 通用字段投影', () => {
  it('将旧 IR 的 url_context 统一投影为 web_fetch 并合并重复分类', () => {
    const ir = JSON.parse(JSON.stringify(completeIR())) as Record<string, any>;
    ir.services[0].capabilities.push({
      id: observed('url-context'),
      kind: observed('url_context'),
      operations: [],
    });

    const result = projectProviderCollectionIR({
      ir: ir as unknown as ProviderCollectionIR,
      snapshots: [snapshot],
      identityResolutions: [resolution('model_id_after_slash')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    });

    assert.equal(result.status, 'projected');
    const capabilities = result.document?.services[0]?.capabilities ?? [];
    assert.equal(capabilities.filter(({ kind }) => kind === 'web_fetch').length, 1);
    assert.equal(capabilities.some(({ kind }) => kind === 'url_context'), false);
  });

  it('读取已保存的旧 IR 字段，并投影为公开契约字段', () => {
    const ir = JSON.parse(JSON.stringify(completeIR())) as Record<string, any>;
    const operation = ir.services[0].capabilities[0].operations[0];
    operation.input_slots = operation.input;
    operation.output_specs = operation.output;
    delete operation.input;
    delete operation.output;

    const result = projectProviderCollectionIR({
      ir: ir as unknown as ProviderCollectionIR,
      snapshots: [snapshot],
      identityResolutions: [resolution('model_id_after_slash')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    });

    assert.deepEqual(result.document?.services[0]?.capabilities?.[0]?.input, [{ name: 'query', kind: 'text', required: true }]);
    assert.deepEqual(result.document?.services[0]?.capabilities?.[0]?.output, [{ kind: 'structured', fields: ['results'] }]);
  });

  it('将经过来源引用校验的 IR 投影到 ProviderDocument 的实体价格，并保留斜杠匹配说明', () => {
    const result = projectProviderCollectionIR({
      ir: completeIR(),
      snapshots: [snapshot],
      identityResolutions: [resolution('model_id_after_slash')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    });

    assert.equal(result.status, 'projected');
    assert.ok(result.document);
    const offering = result.document.services[0]?.offerings?.[0];
    assert.equal(offering?.model_ref, 'example/example-model');
    assert.equal(offering?.pricing?.length, 1);
    assert.equal(offering?.pricing?.[0]?.rates?.[0]?.value, '0.10');
    const capabilityRate = result.document.services[0]?.capabilities?.find(({ kind }) => kind === 'web_search')?.pricing?.[0];
    assert.equal(capabilityRate?.rates?.[0]?.quantity, 1000);
    assert.ok(result.document.evidence?.some(({ source_ref }) => source_ref === snapshot.source_id));
    const searchCapability = result.document.services[0]?.capabilities?.[0];
    assert.deepEqual(searchCapability?.input, [{ name: 'query', kind: 'text', required: true }]);
    assert.deepEqual(searchCapability?.output, [{ kind: 'structured', fields: ['results'] }]);
    assert.deepEqual(searchCapability?.parameters, [{ name: 'limit', type: 'integer', required: false, route_mappings: ['/search:query.limit'] }]);
    assert.ok(result.document.evidence?.some(({ source_ref, field }) => source_ref === snapshot.source_id && /\/input$/u.test(field)));
    assert.ok(result.document.evidence?.some(({ source_ref, field }) => source_ref === snapshot.source_id && /\/output$/u.test(field)));
    assert.ok(result.document.evidence?.some(({ source_ref, field }) => source_ref === snapshot.source_id && /\/parameters$/u.test(field)));
    assert.match(result.review_notes[0] ?? '', /model_id_after_slash/u);
    const projectedProvider = JSON.stringify(result.document);
    assert.equal('output_dimensions' in (offering ?? {}), false);
    assert.equal('modalities' in (offering ?? {}), false);
    assert.equal('limits' in (offering ?? {}), false);
    assert.equal('capabilities' in (offering ?? {}), false);
    assert.equal(projectedProvider.includes('"context":128000'), false);
    assert.equal(projectedProvider.includes('"model_capability_probe":true'), false);

  });

  it('不会把旧采集器遗留的 Operation 专属简介投影到 ProviderDocument', () => {
    const ir = completeIR();
    const legacyIR = ir as unknown as {
      services: Array<{
        offerings: Array<{
          operations: Array<Record<string, unknown>>;
        }>;
      }>;
    };
    legacyIR.services[0]!.offerings[0]!.operations[0]!.schema_operation = {
      value: { description: '旧采集器留下的专属简介' },
      evidence,
    };

    const result = projectProviderCollectionIR({
      ir: ir as unknown as ProviderCollectionIR,
      snapshots: [snapshot],
      identityResolutions: [resolution('exact_id')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    });

    assert.equal(result.status, 'projected');
    const offering = result.document?.services[0]?.offerings?.[0];
    assert.ok(offering);
    assert.equal('operations' in offering, false);
  });

  it('部分覆盖和待核对项仍生成只读字段差异文档，但状态保持 needs_review', () => {
    const ir = completeIR();
    const result = projectProviderCollectionIR({
      ir: {
        ...ir,
        coverage: [{ source_ref: snapshot.source_id, scope: 'model_catalog', status: 'partial', note: '只解析了可识别模型卡。' }],
        review_items: [{ id: 'unparsed-pricing', kind: 'unparsed_fact', message: '另有非结构化价格未归一。', evidence }],
      },
      snapshots: [snapshot],
      identityResolutions: [resolution('exact_id')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    });

    assert.equal(result.status, 'needs_review');
    assert.ok(result.document, '差异预览需要候选文档，即使它不能自动写入正式数据');
    assert.ok(result.review_notes.some((note) => note.includes('model_catalog 覆盖为 partial')));
    assert.ok(result.review_notes.some((note) => note.includes('unparsed-pricing')));
  });

  it('缺少 Provider 必填资料时不生成半成品文档', () => {
    const ir = completeIR();
    const result = projectProviderCollectionIR({
      ir: (({ profile: _profile, ...withoutProfile }) => withoutProfile)(ir),
      snapshots: [snapshot],
      identityResolutions: [resolution('exact_id')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    });

    assert.equal(result.status, 'needs_review');
    assert.equal(result.document, null);
    assert.ok(result.issues.some((message) => message.includes('profile.name')));
  });

  it('评审预览只沿用既有必填档案值并标为待核，不把它们当作本次 IR 事实', () => {
    const ir = completeIR();
    const baseline = projectProviderCollectionIR({
      ir,
      snapshots: [snapshot],
      identityResolutions: [resolution('exact_id')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    }).document;
    assert.ok(baseline);

    const { profile: _profile, ...withoutProfile } = ir;
    const service = withoutProfile.services[0]!;
    const { name: _name, ...serviceWithoutMetadata } = service;
    const result = projectProviderCollectionIR({
      ir: { ...withoutProfile, services: [serviceWithoutMetadata] },
      snapshots: [snapshot],
      identityResolutions: [resolution('exact_id')],
      generatedAt: '2026-10-26T00:00:00.000Z',
      preserveFrom: baseline,
    });

    assert.equal(result.status, 'needs_review');
    assert.equal(result.document?.provider.name, baseline.provider.name);
    assert.equal(result.document?.services[0]?.name, baseline.services[0]?.name);
    assert.ok(result.review_notes.some((note) => note.includes('/provider/name') && note.includes('沿用正式数据中的现值')));
    assert.ok(result.review_notes.some((note) => note.includes('/services/global/name') && note.includes('沿用正式数据中的现值')));
    assert.equal(result.issues.length, 0);
  });

  it('将旧 Operation 关联价格并入 Offering 定价', () => {
    const ir = completeIR();
    const service = ir.services[0]!;
    const offering = service.offerings[0]!;
    const associatedIR: ProviderCollectionIR = {
      ...ir,
      services: [{
        ...service,
        offerings: [{
          ...offering,
          prices: [{ ...offering.prices[0]!, operation_ref: observed('generate') }],
        }],
      }],
    };
    const result = projectProviderCollectionIR({
      ir: associatedIR,
      snapshots: [snapshot],
      identityResolutions: [resolution('model_id_after_slash')],
      generatedAt: '2026-10-26T00:00:00.000Z',
    });

    assert.equal(result.status, 'projected');
    const pricing = result.document?.services[0]?.offerings?.[0]?.pricing?.[0];
    assert.equal(pricing?.rates?.[0]?.metric, 'input');
  });
});
