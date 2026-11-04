/**
 * 独立服务能力（Service Capability）的分组视图数据。
 *
 * 独立能力**不绑定模型**——它按「能力类型」分组展示：
 * 每种类型一张卡，卡里列出提供这一能力的服务商，
 * 而不是把「服务商 × 能力」的所有组合平铺成列表。
 *
 * 能力类型的标签取自 `@providerlist/shared/capabilities` 的独立服务能力词典。
 * 未知类型**保留原值**——不静默归并到某一类（见 AGENTS.md「未知就是未知」）。
 */
import { SERVICE_CAPABILITY_DICTIONARY } from '@providerlist/shared/capabilities/service-capabilities';
import { serviceMarketForId } from '@providerlist/schema/types';

import { getProviderDocument, getProviders } from './catalog.ts';
import { providerDisplayName, serviceCapabilityLabel } from './format.ts';
import type { IconName } from '../components/icons.ts';

export interface CapabilityProvider {
  readonly providerId: string;
  readonly providerName: string;
  readonly providerLogo?: string;
  readonly accountMarket?: string;
  readonly serviceId: string;
  readonly capabilityKind: string;
}

export interface CapabilityGroup {
  /** 能力类型（契约取值，可能是未知类型）。 */
  readonly kind: string;
  /** 能力类型标签（按当前语言取自领域词典）。 */
  readonly label: string;
  /** 提供该能力的服务商。 */
  readonly providers: readonly CapabilityProvider[];
  readonly providerCount: number;
}

/**
 * 能力类型 → 图标。
 *
 * 这是**展示层专属**口径：图标不是契约数据，领域包不管图标。
 * 未知类型回落到 `grid`——图标只影响观感，不影响信息表达。
 */
const KIND_ICONS: Readonly<Record<string, IconName>> = {
  agent: 'agent',
  batch: 'batch',
  code_execution: 'code',
  collections: 'collections',
  file_search: 'fileSearch',
  google_maps: 'map',
  image_generation: 'imageGeneration',
  image_understanding: 'imageUnderstanding',
  speech_generation: 'textToSpeech',
  tokenizer: 'fontColor',
  transcription: 'speechToText',
  tool_search: 'tools',
  web_search: 'globe',
  web_fetch: 'pages',
  x_search: 'twitterX',
  file_storage: 'folder',
};

/** 固定优先展示的能力顺序。 */
const KIND_PRIORITY = new Map<string, number>([
  ['web_search', 0],
  ['web_fetch', 1],
  ['file_storage', 2],
  ['batch', 3],
]);
/** 同数量时按领域词典顺序展示；未知类型之间按 ID 排序。 */
const KIND_ORDER = new Map(SERVICE_CAPABILITY_DICTIONARY.map((item, index) => [item.id, index]));

export function capabilityIcon(kind: string): IconName {
  return KIND_ICONS[kind] ?? 'grid';
}

export interface CapabilityGroupsResult {
  /** 按类型分组的卡片数据。 */
  readonly groups: readonly CapabilityGroup[];
  /** 供应项总数（服务商 × 能力的组合数），不是分组数。 */
  readonly entryCount: number;
}

/**
 * 从目录数据里取出独立能力并按类型分组。
 *
 * 目录中记录的能力都作为当前登记项展示；移除项必须经采集差异审阅。
 * 同一个服务商在同一类型下有多条能力时只出现一次——卡片是「谁能提供这类能力」，
 * 不是逐条供应项台账。
 */
export function getCapabilityGroups(): CapabilityGroupsResult {
  const groups = new Map<string, CapabilityProvider[]>();
  const seen = new Set<string>();
  let entryCount = 0;

  for (const provider of getProviders()) {
    const doc = getProviderDocument(provider.id);
    if (!doc) continue;
    for (const service of doc.services) {
      for (const capability of service.capabilities ?? []) {
        entryCount += 1;
        const accountMarket = serviceMarketForId(service.id) ?? 'UNKNOWN';
        const key = `${capability.kind}::${provider.id}::${accountMarket}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const list = groups.get(capability.kind) ?? [];
        list.push({
          providerId: provider.id,
          providerName: providerDisplayName(provider),
          ...(provider.logo ? { providerLogo: provider.logo } : {}),
          accountMarket,
          serviceId: service.id,
          capabilityKind: capability.kind,
        });
        groups.set(capability.kind, list);
      }
    }
  }

  const sorted = [...groups.entries()].sort(([a, providersA], [b, providersB]) => {
    const priorityA = KIND_PRIORITY.get(a);
    const priorityB = KIND_PRIORITY.get(b);
    if (priorityA !== undefined || priorityB !== undefined) {
      if (priorityA === undefined) return 1;
      if (priorityB === undefined) return -1;
      return priorityA - priorityB;
    }
    const countA = new Set(providersA.map((provider) => provider.providerId)).size;
    const countB = new Set(providersB.map((provider) => provider.providerId)).size;
    if (countA !== countB) return countB - countA;
    const orderA = KIND_ORDER.get(a);
    const orderB = KIND_ORDER.get(b);
    if (orderA === undefined && orderB !== undefined) return 1;
    if (orderA !== undefined && orderB === undefined) return -1;
    return orderA !== undefined && orderB !== undefined ? orderA - orderB : a.localeCompare(b);
  });

  return {
    groups: sorted.map(([kind, providers]) => ({
      kind,
      label: serviceCapabilityLabel(kind),
      providers,
      providerCount: new Set(providers.map((provider) => provider.providerId)).size,
    })),
    entryCount,
  };
}
