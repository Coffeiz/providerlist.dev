import { conversionFactor } from '@providerlist/shared/pricing';
import { t } from '../i18n/index.ts';

export interface PriceDisplayEntry {
  readonly ruleId: string;
  readonly condition?: string;
  readonly tierLabel?: string;
  readonly serviceTier?: boolean;
  readonly context?: string;
  /** Same complete rate vector under a distinct service tier may share one display group. */
  readonly tierSignature?: string;
  readonly cacheMetric?: string;
}

export interface OtherPricePresentationInput {
  readonly converted?: string;
  readonly convertedDetail?: string;
  readonly detail?: string;
  readonly amount?: string;
}

/** Prefer the selected display currency in the Other column and retain the source price as secondary text. */
export function otherPricePresentation(entry: OtherPricePresentationInput): { readonly primary: string; readonly native?: string } {
  const converted = entry.convertedDetail ?? entry.converted;
  const primary = converted ?? entry.detail ?? entry.amount ?? '';
  const native = entry.convertedDetail ? entry.detail : entry.converted ? entry.amount : undefined;
  return { primary, ...(native ? { native } : {}) };
}

export interface PriceRuleDisplayGroup<T extends PriceDisplayEntry> {
  readonly id: string;
  readonly entries: readonly T[];
  readonly condition?: string;
}

export interface PriceTierDisplayGroup<T extends PriceDisplayEntry> {
  readonly id: string;
  readonly tierLabel?: string;
  readonly rules: readonly PriceRuleDisplayGroup<T>[];
}

/** 按价格规则和服务层级分组，供 Provider 详情与模型目录共享展示。 */
export function groupPriceEntriesByTier<T extends PriceDisplayEntry>(
  entries: readonly T[],
): PriceTierDisplayGroup<T>[] {
  const rules = new Map<string, T[]>();
  for (const entry of entries) {
    const group = rules.get(entry.ruleId) ?? [];
    group.push(entry);
    rules.set(entry.ruleId, group);
  }

  const tiers = new Map<string, { tierLabel?: string; rules: PriceRuleDisplayGroup<T>[]; signature?: string; labels: string[] }>();
  const equivalentTiers = new Map<string, string>();
  for (const [id, ruleEntries] of rules) {
    const orderedEntries = [...ruleEntries].sort((left, right) =>
      contextOrder(left.context) - contextOrder(right.context) ||
      cacheMetricOrder(left.cacheMetric) - cacheMetricOrder(right.cacheMetric),
    );
    const tierLabel = ruleEntries.find((entry) => entry.tierLabel)?.tierLabel;
    const condition = ruleEntries.find((entry) => entry.condition)?.condition;
    const signature = ruleEntries.find((entry) => entry.tierSignature)?.tierSignature;
    const existingTierId = signature ? equivalentTiers.get(signature) : undefined;
    const tierId = existingTierId ?? (tierLabel ?? '');
    const tier = tiers.get(tierId) ?? { ...(tierLabel ? { tierLabel } : {}), rules: [], ...(signature ? { signature } : {}), labels: [] };
    if (tierLabel && !tier.labels.includes(tierLabel)) tier.labels.push(tierLabel);
    if (signature && !existingTierId) equivalentTiers.set(signature, tierId);
    if (existingTierId) {
      tier.tierLabel = tier.labels.join(' · ');
      tiers.set(tierId, tier);
      continue;
    }
    tier.rules.push({
      id,
      entries: orderedEntries,
      ...(condition ? { condition } : {}),
    });
    if (tier.labels.length > 1) tier.tierLabel = tier.labels.join(' · ');
    tiers.set(tierId, tier);
  }

  const hasNamedServiceTier = [...rules.values()].some((ruleEntries) =>
    ruleEntries.some((entry) => entry.serviceTier),
  );
  if (hasNamedServiceTier) {
    for (const tier of tiers.values()) {
      if (!tier.tierLabel && !tier.rules.some((rule) => rule.entries.some((entry) => entry.serviceTier))) {
        tier.tierLabel = t('标准服务');
      }
    }
  }

  return [...tiers].map(([id, tier]) => ({ id, ...tier }));
}

/** 从视频价格条件中提取分辨率作为展示分组，并返回剩余计价条件。 */
export function videoResolutionCondition(conditions: unknown): { label: string; condition?: unknown } | undefined {
  const resolutions = new Set<string>();
  const remaining = Array.isArray(conditions)
    ? conditions.map((item) => withoutVideoResolutionCondition(item, resolutions)).filter((item) => item !== undefined)
    : [withoutVideoResolutionCondition(conditions, resolutions)].filter((item) => item !== undefined);
  const condition = remaining.length === 0 ? undefined : remaining;
  if (resolutions.size === 0) return undefined;
  const ordered = [...resolutions].sort((left, right) => videoResolutionOrder(left) - videoResolutionOrder(right));
  return { label: ordered.join(' / '), ...(condition === undefined ? {} : { condition }) };
}

export function videoResolutionOrder(label: string | undefined): number {
  if (!label) return Number.MAX_SAFE_INTEGER;
  const match = /^(\d+)(p|k)$/i.exec(label.split(' / ')[0] ?? '');
  if (!match) return Number.MAX_SAFE_INTEGER;
  return Number(match[1]) * (match[2]?.toLowerCase() === 'k' ? 1000 : 1);
}

function withoutVideoResolutionCondition(value: unknown, resolutions: Set<string>): unknown {
  if (!value || typeof value !== 'object') return value;
  const record = value as Record<string, unknown>;
  if (Array.isArray(record.all)) {
    const remaining = record.all
      .map((item) => withoutVideoResolutionCondition(item, resolutions))
      .filter((item) => item !== undefined);
    if (remaining.length === 0) return undefined;
    return remaining.length === 1 ? remaining[0] : { all: remaining };
  }
  if (Array.isArray(record.any)) {
    const values = record.any.map(videoResolutionValue);
    if (values.length > 0 && values.every((item): item is string => item !== undefined)) {
      values.forEach((item) => resolutions.add(item));
      return undefined;
    }
    return value;
  }
  const resolution = videoResolutionValue(value);
  if (resolution !== undefined) {
    resolutions.add(resolution);
    return undefined;
  }
  return value;
}

function videoResolutionValue(value: unknown): string | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const record = value as Record<string, unknown>;
  if (!['video.output_resolution', 'resolution'].includes(String(record.field)) || (record.operator ?? 'eq') !== 'eq' || typeof record.value !== 'string') {
    return undefined;
  }
  const match = /^(\d+)(p|k)$/i.exec(record.value);
  if (!match) return undefined;
  return `${match[1]}${match[2]?.toLowerCase() === 'k' ? 'K' : 'p'}`;
}

/** 常规价格先显示，缓存读取和写入价格随后显示；同类价格保持源数据顺序。 */
function cacheMetricOrder(metric: string | undefined): number {
  if (!metric) return 0;
  if (metric === 'cache_read') return 1;
  if (metric === 'cache_write' || metric?.startsWith('cache_write_ttl_')) return 2;
  return 3;
}

function contextOrder(context: string | undefined): number {
  if (!context) return 0;
  if (context === 'short') return 1;
  if (context === 'long') return 2;
  return 3;
}

/** 从有限条件树中提取服务层级标题。 */
export function priceTierLabel(when: unknown): string | undefined {
  if (Array.isArray(when)) {
    for (const condition of when) {
      const label = priceTierLabel(condition);
      if (label) return label;
    }
    return undefined;
  }
  if (!when || typeof when !== 'object') return undefined;
  const record = when as Record<string, unknown>;
  if (Array.isArray(record.all) || Array.isArray(record.any)) {
    const conditions = (Array.isArray(record.all) ? record.all : record.any) as unknown[];
    for (const condition of conditions) {
      const label = priceTierLabel(condition);
      if (label) return label;
    }
    return undefined;
  }
  if (!['service_tier', 'request.service_tier', 'request.mode'].includes(String(record.field)) || (record.operator ?? 'eq') !== 'eq' || typeof record.value !== 'string') return undefined;
  if (record.value === 'standard') return t('标准服务');
  if (record.value === 'priority') return t('优先服务');
  if (record.value === 'batch' || record.value === 'batch_inference') {
    return t(record.field === 'request.mode' ? '批量推理' : '批量服务');
  }
  if (record.value === 'low_priority') return t('低优先级');
  if (record.value === 'flex') return t('灵活服务');
  if (record.value === 'online') return t('在线推理');
  if (record.value === 'offline') return t('离线推理');
  if (record.value === 'fast') return t('快速模式');
  if (record.value === 'ultrafast') return t('超快速模式');
  return record.value;
}

/** 将精确十进制价格按契约单位折算为每百万 Token，不使用浮点运算。 */
export function amountPerMillionTokens(amount: string, unit: string): string {
  const factor = conversionFactor(unit, 'per_1m_tokens');
  if (factor === null) return amount;

  const factorText = String(factor);
  if (!/^10*$/.test(factorText)) return amount;
  const exponent = factorText.length - 1;
  if (exponent === 0) return amount;

  const negative = amount.startsWith('-');
  const unsigned = negative ? amount.slice(1) : amount;
  const [integer = '0', fraction = ''] = unsigned.split('.');
  const digits = `${integer}${fraction}`;
  const decimalIndex = integer.length + exponent;
  const scaled = decimalIndex >= digits.length
    ? `${digits}${'0'.repeat(decimalIndex - digits.length)}.00`
    : `${digits.slice(0, decimalIndex)}.${digits.slice(decimalIndex)}`;
  const [scaledInteger = '0', scaledFraction = ''] = scaled.split('.');
  const normalizedInteger = scaledInteger.replace(/^0+(?=\d)/, '') || '0';
  return `${negative ? '-' : ''}${normalizedInteger}.${scaledFraction.padEnd(2, '0')}`;
}
