/**
 * 覆盖统计口径。
 *
 * 关键区分（见 docs/data/data-policy.md §6）：
 * - `canonical_model_count`：去重模型本体总数；**不等于**所有 Provider 模型记录之和。
 * - `active_offering_count`：当前 Service/Provider 提供的有效 Offering 数，退役记录不计入。
 * - `service_capability_count`：独立 Provider 能力项数；**不计入**模型供应数。
 */

import type {
  Offering,
  Model,
  ProviderDocument,
  Service,
  ServiceCapability,
} from '@providerlist/schema/types';
import { isKnownModelType, type ModelType } from '@providerlist/schema/model-types';

export interface CatalogCounts {
  readonly provider_count: number;
  readonly service_count: number;
  readonly canonical_model_count: number;
  readonly active_offering_count: number;
  readonly active_offering_count_by_type: Readonly<Record<string, number>>;
  readonly service_capability_count: number;
  readonly first_party_direct_offering_count: number;
  readonly official_feed_coverage: {
    /** 已接入官方数据源的 Provider 数。 */
    readonly provider_count: number;
    /** 这些 Provider 已发布的官方数据覆盖的 Offering 数。 */
    readonly offering_count: number;
  };
}

export function countCatalog(documents: readonly ProviderDocument[], models: ReadonlyMap<string, Model>): CatalogCounts {
  const modelRefs = new Set<string>();
  const typeCounts: Record<string, number> = {};
  let serviceCount = 0;
  let activeOfferingCount = 0;
  let capabilityCount = 0;
  let firstPartyDirect = 0;
  let officialProviderCount = 0;
  let officialOfferingCount = 0;

  for (const doc of documents) {
    // 官方接入覆盖：只统计「已连接且已发布」的 Provider。
    // 域名已绑定但尚未发布的，不算覆盖——徽章规则与此一致。
    const official = doc.provider.official_integration;
    if (official?.state === 'connected') {
      officialProviderCount += 1;
      officialOfferingCount += official.coverage?.offering_count ?? 0;
    }

    for (const service of doc.services) {
      serviceCount += 1;
      for (const offering of service.offerings ?? []) {
        const model = offering.model_ref ? models.get(offering.model_ref) : undefined;
        if (model) modelRefs.add(model.id);

        const status = offering.status ?? 'unknown';
        if (status !== 'active' && status !== 'restricted') continue;

        activeOfferingCount += 1;
        const type = model?.type ?? 'unknown';
        const bucket = isKnownModelType(type) ? type : 'unknown';
        typeCounts[bucket] = (typeCounts[bucket] ?? 0) + 1;

        if (doc.provider.kind === 'first_party') {
          firstPartyDirect += 1;
        }
      }
      capabilityCount += service.capabilities?.length ?? 0;
    }
  }

  return {
    provider_count: documents.length,
    service_count: serviceCount,
    canonical_model_count: modelRefs.size,
    active_offering_count: activeOfferingCount,
    active_offering_count_by_type: typeCounts,
    service_capability_count: capabilityCount,
    first_party_direct_offering_count: firstPartyDirect,
    official_feed_coverage: {
      provider_count: officialProviderCount,
      offering_count: officialOfferingCount,
    },
  };
}

/** 提取一个 Provider 下所有 active Offering 的模型类型集合。 */
export function collectModelTypes(doc: ProviderDocument, models: ReadonlyMap<string, Model>): ModelType[] {
  const types = new Set<ModelType>();
  for (const service of doc.services) {
    for (const offering of service.offerings ?? []) {
      if (offering.status === 'active' || offering.status === 'restricted') {
        types.add((offering.model_ref ? models.get(offering.model_ref)?.type : undefined) ?? 'unknown');
      }
    }
  }
  return [...types].sort();
}

/** 查找某个 Service 下的 Offering。 */
export function findOffering(
  doc: ProviderDocument,
  serviceId: string,
  offeringId: string,
): Offering | undefined {
  const service = doc.services.find((s) => s.id === serviceId);
  return service?.offerings?.find((o) => o.id === offeringId);
}

/** 查找某个 Service 下的独立 Capability。 */
export function findCapability(
  doc: ProviderDocument,
  serviceId: string,
  capabilityKind: string,
): ServiceCapability | undefined {
  const service = doc.services.find((s) => s.id === serviceId);
  return service?.capabilities?.find((c) => c.kind === capabilityKind);
}

/** 所有 Service 的扁平列表。 */
export function allServices(doc: ProviderDocument): Service[] {
  return [...doc.services];
}
