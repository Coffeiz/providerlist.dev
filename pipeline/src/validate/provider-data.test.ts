/**
 * 正式 Provider 数据的结构不变量。
 *
 * 这条不变量保护 ADR 0019：Service 按账号市场划分，订阅套餐用 Plan 表达，
 * 不为套餐复制 Service——否则同一市场会被拆成多条服务线，套餐也会被误看成
 * 另一套 API 产品线。
 *
 * 校验器对重复市场只给警告（同一市场下确实可能存在合法但需 ADR 背书的
 * 不同接入面），所以这里对**正式目录**用错误级别断言，让越界在 CI 里失败。
 */
import { describe, it } from 'node:test';
import { serviceMarketForId } from '@providerlist/schema/types';
import assert from 'node:assert/strict';
import path from 'node:path';
import { loadProviderDocumentsFromDirectory } from '../data/provider-store.ts';

const DATA_DIR = path.resolve(import.meta.dirname, '../../../data');

interface ServiceShape {
  readonly id: string;
  readonly plan_ids?: readonly string[];
  readonly capabilities?: readonly CapabilityShape[];
}

interface CapabilityShape {
  readonly kind: string;
  readonly routes?: readonly unknown[];
  readonly parameters?: readonly { readonly name: string }[];
  readonly input?: readonly unknown[];
  readonly output?: readonly { readonly fields?: readonly string[] }[];
}

interface ProviderShape {
  readonly provider: { readonly id: string; readonly capabilities?: readonly CapabilityShape[] };
  readonly services: readonly ServiceShape[];
  readonly capabilities?: readonly CapabilityShape[];
  readonly plans?: readonly { readonly id: string; readonly service_ref: string; readonly description?: string }[];
}


async function loadProviders(): Promise<ProviderShape[]> {
  return loadProviderDocumentsFromDirectory(DATA_DIR) as Promise<ProviderShape[]>;
}

describe('正式 Provider 数据的 Service/Plan 结构', () => {
  it('每个 Provider 的每个账号市场只有一个 Service', async () => {
    for (const document of await loadProviders()) {
      const byMarket = new Map<string, string[]>();
      for (const service of document.services) {
        const market = serviceMarketForId(service.id);
        assert.ok(market, `${document.provider.id}：未知 Service ID ${service.id}`);
        const ids = byMarket.get(market) ?? [];
        ids.push(service.id);
        byMarket.set(market, ids);
      }
      for (const [market, ids] of byMarket) {
        assert.equal(
          ids.length,
          1,
          `${document.provider.id}：账号市场 ${market} 出现多个 Service（${ids.join('、')}）。套餐应作为 Plan 挂在同一个市场 Service 上。`,
        );
      }
    }
  });

  it('套餐挂在本 Provider 真实存在的 Service 上，并与 plan_ids 互相引用', async () => {
    for (const document of await loadProviders()) {
      const serviceIds = new Set(document.services.map((service) => service.id));
      const planIdsByService = new Map<string, Set<string>>(
        document.services.map((service) => [service.id, new Set(service.plan_ids ?? [])]),
      );
      for (const plan of document.plans ?? []) {
        assert.ok(
          serviceIds.has(plan.service_ref),
          `${document.provider.id}：套餐 ${plan.id} 的 service_ref 指向不存在的 Service ${plan.service_ref}`,
        );
        assert.ok(
          planIdsByService.get(plan.service_ref)?.has(plan.id),
          `${document.provider.id}：套餐 ${plan.id} 未被 Service ${plan.service_ref} 的 plan_ids 引用`,
        );
      }
    }
  });


});

describe('官方独立能力的请求与响应契约', () => {
  it('已登记的文件和批处理能力保留官方输入、输出与参数字段', async () => {
    const documents = new Map((await loadProviders()).map((document) => [document.provider.id, document]));
    const getCapability = (providerId: string, capabilityKind: string, market?: string) => {
      const provider = documents.get(providerId);
      const serviceCapabilities = market
        ? provider?.services.find((service) => service.id === market)?.capabilities
        : provider?.services.flatMap((service) => service.capabilities ?? []);
      return serviceCapabilities?.find((capability) => capability.kind === capabilityKind);
    };

    for (const market of ['cn', 'global'] as const) {
      const batch = getCapability('moonshotai', 'batch', market);
      assert.deepEqual(batch?.parameters?.map(({ name }) => name), ['input_file_id', 'endpoint', 'completion_window', 'metadata']);
      assert.ok(batch?.output?.[0]?.fields?.includes('output_file_id'));
    }
    for (const market of ['cn', 'global'] as const) {
      const batch = getCapability('xiaomi', 'batch', market);
      assert.deepEqual(batch?.parameters?.map(({ name }) => name), ['input_file_id', 'endpoint', 'completion_window', 'name']);
      assert.ok(batch?.output?.some((output) => output.fields?.includes('request_counts.completed')));
    }

    const google = getCapability('google', 'file_storage', 'global');
    assert.deepEqual(google?.parameters?.map(({ name }) => name), ['displayName', 'embeddingModel']);
    assert.ok(google?.input?.length);
    assert.ok(google?.output?.[0]?.fields?.includes('activeDocumentsCount'));

    const meta = getCapability('meta', 'file_storage', 'global');
    assert.deepEqual(meta?.routes?.length, 10);
    assert.ok(meta?.parameters?.some(({ name }) => name === 'purpose'));
    const metaResponseFields = new Set(meta?.output?.flatMap((output) => output.fields ?? []));
    for (const field of ['filename', 'purpose', 'data', 'has_more', 'deleted']) {
      assert.ok(metaResponseFields.has(field), `Meta response includes ${field}`);
    }
  });
});
