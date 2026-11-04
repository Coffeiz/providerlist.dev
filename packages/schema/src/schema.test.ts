/**
 * 公开 JSON Schema 测试。
 *
 * 这些测试防的具体回归：
 * - Schema 与 TS 类型漂移（字段改名、必填项变化）→ 夹具校验失败
 * - Schema 本身写坏（语法错误、$ref 指错）→ 编译期报错
 * - Schema 失去约束力（`additionalProperties` 被去掉、必填项被删）→ 反向用例失败
 *
 * 语义等价的重构不应造成无关失败：改描述文案、调整 $defs 顺序都不影响断言。
 */

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import Ajv2020, { type ValidateFunction } from 'ajv/dist/2020.js';

const here = path.resolve(import.meta.dirname);
const repoRoot = path.resolve(here, '../../..');
const schemaDir = path.join(here, '..', 'schema');
const fixturesDir = path.join(repoRoot, 'pipeline', 'src', 'fixtures', 'data', 'providers');

async function loadSchema(name: string): Promise<Record<string, unknown>> {
  return JSON.parse(await readFile(path.join(schemaDir, name), 'utf8')) as Record<
    string,
    unknown
  >;
}

async function compile(name: string): Promise<ValidateFunction> {
  const schema = await loadSchema(name);
  const ajv = new Ajv2020({ strict: false, allErrors: true });
  return ajv.compile(schema);
}

async function loadFixtures(): Promise<Record<string, unknown>[]> {
  const { readdir } = await import('node:fs/promises');
  const names = (await readdir(fixturesDir)).filter((n) => n.endsWith('.json'));
  const out: Record<string, unknown>[] = [];
  for (const name of names) {
    out.push(JSON.parse(await readFile(path.join(fixturesDir, name), 'utf8')));
  }
  return out;
}

test('Provider Schema 本身是合法的 JSON Schema', async () => {
  const validate = await compile('provider.schema.json');
  assert.equal(typeof validate, 'function');
});

test('全部 Provider 夹具通过公开 Schema 校验', async () => {
  const validate = await compile('provider.schema.json');
  const fixtures = await loadFixtures();
  assert.ok(fixtures.length > 0, '应有夹具可校验');

  for (const fixture of fixtures) {
    const valid = validate(fixture);
    assert.ok(
      valid,
      `夹具未通过公开 Schema 校验：${JSON.stringify(validate.errors, null, 2)}`,
    );
  }
});

test('Schema 拒绝缺失必填字段的文档', async () => {
  const validate = await compile('provider.schema.json');
  const [fixture] = await loadFixtures();
  assert.ok(fixture);

  const broken = { ...fixture } as Record<string, unknown>;
  delete broken.provider;

  assert.equal(validate(broken), false, '缺少 provider 必须被拒绝');
  assert.ok(
    validate.errors?.some((e) => e.keyword === 'required'),
    '应报 required 错误',
  );
});

test('Schema 拒绝未知的额外字段（防止契约悄悄扩张）', async () => {
  const validate = await compile('provider.schema.json');
  const [fixture] = await loadFixtures();
  assert.ok(fixture);

  const polluted = {
    ...fixture,
    provider: { ...(fixture.provider as Record<string, unknown>), not_a_real_field: 1 },
  };

  assert.equal(validate(polluted), false, '未知字段必须被拒绝');
});

test('Schema 拒绝非法金额表示（金额必须是十进制字符串）', async () => {
  const validate = await compile('provider.schema.json');
  const fixture = (await loadFixtures()).find((doc) => (doc.services as Array<{ offerings?: Array<{ pricing?: unknown[] }> }>).some((service) => service.offerings?.some((offering) => offering.pricing?.length)));
  assert.ok(fixture);

  const bad = structuredClone(fixture) as Record<string, unknown>;
  const service = (bad.services as Array<Record<string, unknown>>).find((item) => Array.isArray(item.offerings) && (item.offerings as unknown[]).length > 0);
  const offering = (service?.offerings as Array<Record<string, unknown>> | undefined)?.find((item) => Array.isArray(item.pricing) && (item.pricing as unknown[]).length > 0);
  const group = (offering?.pricing as Array<Record<string, unknown>> | undefined)?.[0];
  const rate = (group?.rates as Array<Record<string, unknown>> | undefined)?.[0];
  assert.ok(rate, '夹具应含 Offering pricing rate');
  rate.value = 1.5; // number 而非十进制字符串

  assert.equal(validate(bad), false, '数字金额必须被拒绝');
});

test('Schema 拒绝非法币种（RMB 不是 ISO 4217 代码）', async () => {
  const validate = await compile('provider.schema.json');
  const fixture = (await loadFixtures()).find((doc) => (doc.services as Array<{ offerings?: Array<{ pricing?: unknown[] }> }>).some((service) => service.offerings?.some((offering) => offering.pricing?.length)));
  assert.ok(fixture);

  const bad = structuredClone(fixture) as Record<string, unknown>;
  const service = (bad.services as Array<Record<string, unknown>>).find((item) => Array.isArray(item.offerings) && (item.offerings as unknown[]).length > 0);
  const offering = (service?.offerings as Array<Record<string, unknown>> | undefined)?.find((item) => Array.isArray(item.pricing) && (item.pricing as unknown[]).length > 0);
  const group = (offering?.pricing as Array<Record<string, unknown>> | undefined)?.[0];
  assert.ok(group, '夹具应含 Offering pricing group');
  group.currency = 'RMB';

  assert.equal(validate(bad), false, 'RMB 必须被拒绝——它不是 ISO 4217 代码');
});

test('Schema 拒绝 Provider Offering 中的 Model 类型与模态字段', async () => {
  const validate = await compile('provider.schema.json');
  const base = {
    schema_version: '1.0.0',
    data_version: 'test',
    generated_at: '2026-10-25T00:00:00Z',
    provider: {
      id: 'test-provider', name: '测试', aliases: [], kind: 'first_party',
    },
    services: [{
      id: 'cn', provider_id: 'test-provider', name: '服务',
      offerings: [{ id: 'test-offering', service_id: 'cn', model_ref: null, display_name: '模型' }],
    }],
  };
  for (const field of ['type', 'model_type', 'modalities', 'api_modalities']) {
    const custom = structuredClone(base) as typeof base;
    Object.assign(custom.services[0]!.offerings[0]!, { [field]: field.includes('modalities') ? { input: ['text'] } : 'chat' });
    assert.equal(validate(custom), false, `${field} 必须被 Provider Offering Schema 拒绝`);
    assert.ok(validate.errors?.some((error) => error.keyword === 'additionalProperties'), `${field} 应触发 additionalProperties`);
  }
});

test('Schema 拒绝能力 Operation 的专属简介字段', async () => {
  const validate = await compile('provider.schema.json');
  const [fixture] = await loadFixtures();
  assert.ok(fixture);

  const polluted = structuredClone(fixture) as Record<string, unknown>;
  const service = (polluted.services as Array<Record<string, unknown>>)[0]!;
  service.capabilities = [{
    id: 'web-search',
    kind: 'web_search',
    operations: [{ id: 'search', kind: 'web_search', description: '能力简介' }],
  }];

  assert.equal(validate(polluted), false, 'Operation 简介不得进入正式数据');
  assert.ok(
    validate.errors?.some((error) => error.keyword === 'additionalProperties'),
    '简介字段应因不属于 Operation 契约而被拒绝',
  );
});

test('参考汇率 Schema 校验真实快照（编译产物形态）', async () => {
  const validate = await compile('fx-reference.schema.json');

  const snapshot = JSON.parse(
    await readFile(path.join(repoRoot, 'data', 'upstream', 'fx', 'eur-reference.json'), 'utf8'),
  ) as Record<string, unknown>;

  const document = {
    schema_version: '1.0.0',
    data_version: 'v-test-1',
    generated_at: '2026-10-23T00:00:00Z',
    fx_reference: snapshot,
  };

  assert.equal(validate(document), true, JSON.stringify(validate.errors));
});

test('参考汇率 Schema 拒绝非法汇率表示与非法日期', async () => {
  const validate = await compile('fx-reference.schema.json');

  const snapshot = JSON.parse(
    await readFile(path.join(repoRoot, 'data', 'upstream', 'fx', 'eur-reference.json'), 'utf8'),
  ) as { quotes: { rate_decimal: unknown }[]; as_of_date: string };

  const base = {
    schema_version: '1.0.0',
    data_version: 'v-test-1',
    generated_at: '2026-10-23T00:00:00Z',
    fx_reference: structuredClone(snapshot),
  };

  const numericRate = structuredClone(base) as unknown as {
    fx_reference: { quotes: { rate_decimal: unknown }[] };
  };
  numericRate.fx_reference.quotes[0]!.rate_decimal = 1.1205; // number 而非十进制字符串
  assert.equal(validate(numericRate), false, '数字汇率必须被拒绝');

  const badDate = structuredClone(base) as unknown as { fx_reference: { as_of_date: string } };
  badDate.fx_reference.as_of_date = '2026/10/22';
  assert.equal(validate(badDate), false, '非法日期格式必须被拒绝');

  const badCurrency = structuredClone(base) as unknown as {
    fx_reference: { quotes: { currency: string }[] };
  };
  badCurrency.fx_reference.quotes[0]!.currency = 'rmb';
  assert.equal(validate(badCurrency), false, '非大写三字母币种必须被拒绝');
});
