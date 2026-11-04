/**
 * 展示层格式化助手。
 *
 * 规则：
 * - 金额用十进制字符串处理，**不**用 Number 做计费展示计算。
 * - 未知值显示「未知」，不显示「无限制」或猜测值。
 * - 数据单位始终显示完整，如 `¥ / 1M input tokens`。
 * - 状态不只靠颜色，必须带文案。
 * - **原币价永远是第一屏事实**：参考换算是追加的派生视图，
 *   换不出来就不显示，绝不用 1:1 或任何猜测值顶替。
 */

import {
  CURRENCY_SYMBOLS as UPSTREAM_CURRENCY_SYMBOLS,
  metricLabel as upstreamMetricLabel,
  metricQualifierLabel as upstreamMetricQualifierLabel,
  rateMeasureLabel as upstreamRateMeasureLabel,
  unitLabel as upstreamUnitLabel,
} from '@providerlist/shared/pricing/units';
import { buildFxIndex, convertWithFx } from '@providerlist/shared/pricing/fx';
import { compareDecimal, roundDecimal } from '@providerlist/shared/pricing/decimal';
import { isTokenUnit } from '@providerlist/shared/pricing/units';
import { serviceCapabilityLabel as upstreamServiceCapabilityLabel } from '@providerlist/shared/capabilities/service-capabilities';
import { modelTypeLabel as upstreamModelTypeLabel } from '@providerlist/schema/model-types';

import { getState } from './catalog.ts';
import { t } from '../i18n/index.ts';
import { prefs } from './prefs.ts';

import type {
  OfferingStatus,
  ModelType,
  Model,
  OfficialIntegration,
  ProviderSummary,
} from '../types.ts';

/**
 * 账号市场标签留在前端：它是**展示层口径**，不属于数据契约。
 *
 * 模型类型 / 计费单位 / 货币符号 / 计量指标一律取上游词典——
 * 手抄副本会漂移，而且已经真的漂移过一次：前端手写的模型类型标签把
 * 「图像生成 / 编辑」缩成了「图像生成」，站点显示的名字和契约定义不一致。
 */
const ACCOUNT_MARKET_LABELS: Record<string, { zh: string; en: string }> = {
  CN: { zh: '中国', en: 'China' },
  GLOBAL: { zh: '国际', en: 'Global' },
  OTHER: { zh: '其他', en: 'Other' },
  UNKNOWN: { zh: '未知', en: 'Unknown' },
};

const PROVIDER_KIND_LABELS: Record<string, { zh: string; en: string }> = {
  first_party: { zh: '原厂', en: 'First-party' },
  aggregator: { zh: '聚合平台', en: 'Aggregator' },
  cloud_platform: { zh: '云平台', en: 'Cloud platform' },
  other: { zh: '其他', en: 'Other' },
};

/**
 * Keep the source-language Provider name in catalog data and use a recorded Latin-script alias in English UI.
 * Prefer the most descriptive alias so a company name such as "Moonshot AI" is not shortened to a product name.
 */
export function providerDisplayName(provider: Pick<ProviderSummary, 'name' | 'aliases'>): string {
  if (prefs.lang !== 'en' || !/\p{Script=Han}/u.test(provider.name)) return provider.name;
  const englishAliases = provider.aliases.filter((alias) => !/\p{Script=Han}/u.test(alias));
  return englishAliases.sort((left, right) => right.length - left.length)[0] ?? provider.name;
}

export function modelTypeLabel(type: ModelType): string {
  return upstreamModelTypeLabel(type, prefs.lang);
}

export function serviceCapabilityLabel(kind: string): string {
  return upstreamServiceCapabilityLabel(kind, prefs.lang);
}

export function unitLabel(unit: string): string {
  return upstreamUnitLabel(unit, prefs.lang);
}

export function metricLabel(metric: string): string {
  return upstreamMetricLabel(metric, prefs.lang);
}

export function metricQualifierLabel(qualifier: { readonly ttl?: string; readonly context?: string }): string {
  if (!qualifier.context) return upstreamMetricQualifierLabel(qualifier, prefs.lang);

  const contextRange = numericContextRange(qualifier.context);
  if (!contextRange) return upstreamMetricQualifierLabel(qualifier, prefs.lang);

  const contextLabel = t('上下文范围：{value}', { value: contextRange });
  const ttlLabel = qualifier.ttl ? `TTL ${qualifier.ttl}` : undefined;
  const values = [contextLabel, ttlLabel].filter((value): value is string => Boolean(value));
  return prefs.lang === 'zh' ? `（${values.join('，')}）` : ` (${values.join('; ')})`;
}

/** Add an explicit label to numeric context qualifiers such as `<=100000`. */
function numericContextRange(context: string): string | undefined {
  const bounds = context.split(/\s*&\s*/u);
  if (bounds.length < 1 || bounds.length > 2) return undefined;

  let minimum: number | undefined;
  let maximum: number | undefined;
  for (const bound of bounds) {
    const match = bound.trim().match(/^(>=|>|<=|<|=)\s*(\d+)$/u);
    if (!match) return undefined;
    const value = Number(match[2]);
    if (!Number.isSafeInteger(value)) return undefined;
    if (match[1] === '>' || match[1] === '>=') minimum = value + (match[1] === '>' ? 1 : 0);
    else if (match[1] === '<' || match[1] === '<=') maximum = value - (match[1] === '<' ? 1 : 0);
    else {
      minimum = value;
      maximum = value;
    }
  }

  if (minimum !== undefined && maximum !== undefined) {
    if (minimum > maximum) return undefined;
    return `${formatNumber(minimum)}–${formatNumber(maximum)}`;
  }
  if (minimum !== undefined) return `≥ ${formatNumber(minimum)}`;
  if (maximum !== undefined) return `≤ ${formatNumber(maximum)}`;
  return undefined;
}

/** 统一把计量项归入输入价、输出价或其他价格列。 */
export function priceMetricGroup(
  modelType: string,
  item: { readonly unit: string; readonly metric: string; readonly context?: string },
): 'input' | 'output' | 'other' {
  if (item.metric === 'output' || item.metric === 'video_generation_token' || item.metric.startsWith('output_')) return 'output';
  if (item.metric.startsWith('input_')) return 'input';
  if (item.metric.startsWith('generated_')) return 'output';
  if (isTokenUnit(item.unit)) {
    if (
      ['input', 'input_text', 'input_image', 'input_audio', 'cache_read', 'cache_read_audio', 'cache_write', 'cache_write_audio', 'cache_storage'].includes(item.metric)
      || item.metric.startsWith('input_')
      || item.metric.startsWith('cache_read_')
      || item.metric.startsWith('cache_write_')
    ) return 'input';
  }
  if (modelType === 'video') {
    if (item.metric === 'image' || /^input_(?:video|image|audio)/.test(item.metric)) return 'input';
    if (/^(?:generated_|output_)/.test(item.metric)) return 'output';
  }
  return 'other';
}

export function currencySymbol(currency: string): string {
  return UPSTREAM_CURRENCY_SYMBOLS[currency] ?? `${currency} `;
}

export function accountMarketLabel(market: string): string {
  const label = ACCOUNT_MARKET_LABELS[market];
  if (!label) return market;
  return prefs.lang === 'en' ? label.en : label.zh;
}

export function providerKindLabel(kind: string): string {
  const label = PROVIDER_KIND_LABELS[kind];
  if (!label) return prefs.lang === 'en' ? 'Other' : '其他';
  return prefs.lang === 'en' ? label.en : label.zh;
}

export interface RateDisplay {
  /** 原币完整标签，如 `¥ / 1M 输入 tokens`。 */
  readonly label: string;
  /** 条件价格提示；无条件时为 undefined。 */
  readonly conditional?: string;
  /** 参考换算标签；仅当展示币种与原币不同、且参考汇率可得。 */
  readonly reference?: string;
}

interface RateItemView {
  readonly metric: string;
  readonly amount: string;
  readonly unit: string;
  readonly ttl?: string;
  readonly context?: string;
}

function collectItems(rule: {
    readonly rates?: readonly {
      readonly metric: string;
      readonly unit: string;
      readonly quantity?: number;
      readonly value: string;
      readonly ttl?: string;
      readonly context?: string;
    }[];
  },
): RateItemView[] {
  const items: RateItemView[] = [];
  if (rule.rates && rule.rates.length > 0) {
    for (const item of rule.rates) {
      items.push({ metric: item.metric, amount: item.value, unit: item.unit, ...(item.ttl ? { ttl: item.ttl } : {}), ...(item.context ? { context: item.context } : {}) });
    }
  }
  return items;
}

/**
 * 参考换算的可得性。
 *
 * 三种状态，缺一不可：
 * - `not_needed`：展示币种就是原币，不需要换算。
 * - `available`：有参考汇率快照，可以给出派生参考价。
 * - `unavailable`：**没有**可用汇率——此时只显示原币价，不做任何替代。
 */
export type FxStatus =
  | { readonly kind: 'not_needed' }
  | {
      readonly kind: 'available';
      readonly source: string;
      readonly date: string;
      readonly formula: string;
    }
  | { readonly kind: 'unavailable' };

export function fxStatus(nativeCurrency?: string): FxStatus {
  const target = prefs.currency;
  if (nativeCurrency && nativeCurrency === target) return { kind: 'not_needed' };
  const fx = getState().fx;
  if (!fx) return { kind: 'unavailable' };
  return {
    kind: 'available',
    source: t('ECB 欧元参考汇率'),
    date: formatDateTime(fx.as_of_date),
    formula: fx.derivation.formula,
  };
}

/**
 * 金额展示最多四舍五入到三位小数，并去除尾随零；内部和源数据仍保留完整精度。
 * 小于半毫单位的正数显示为 `<0.001`，避免把非零价格误显示成免费。
 */
export function displayPriceAmount(value: string): string {
  const rounded = roundDecimal(value, 3);
  if (compareDecimal(value, '0') > 0 && compareDecimal(rounded, '0') === 0) return '<0.001';
  const [integer = '0', fraction = ''] = rounded.split('.');
  const significantFraction = fraction.replace(/0+$/, '');
  return significantFraction ? `${integer}.${significantFraction}` : integer;
}

/** 金额的完整界面显示：确认免费不带币种符号，其余金额最多保留三位或显示小额标记。 */
export function formatCurrencyAmount(value: string, currency: string): string {
  if (compareDecimal(value, '0') === 0) return t('免费');
  return `${currencySymbol(currency)}${displayPriceAmount(value)}`;
}

export interface CurrencyAmountDisplay {
  /** 用户选择币种下的参考金额；没有参考汇率时退回原币金额。 */
  readonly primary: string;
  /** 原币金额；仅在成功换算且币种不同时提供。 */
  readonly native?: string;
}

/** 将独立金额按用户偏好换算，并保留原币金额作为小字参考。 */
export function formatCurrencyReference(amount: string, currency: string): CurrencyAmountDisplay {
  const native = formatCurrencyAmount(amount, currency);
  const target = prefs.currency;
  if (compareDecimal(amount, '0') === 0) return { primary: native };
  if (target === currency) return { primary: native };

  const fx = getState().fx;
  if (!fx) return { primary: native };
  const result = convertWithFx(amount, currency, target, buildFxIndex(fx), { scale: 8 });
  if (!result.ok) return { primary: native };

  return {
    primary: formatCurrencyAmount(result.conversion.amount, target),
    native,
  };
}

/**
 * 生成参考换算标签。
 *
 * 任何一项换不出来就不给参考价——宁可少给，也不给半截数据。
 */
function buildReference(items: readonly RateItemView[], currency: string): string | undefined {
  const target = prefs.currency;
  if (target === currency) return undefined;
  if (items.every((item) => compareDecimal(item.amount, '0') === 0)) return undefined;
  const fx = getState().fx;
  if (!fx) return undefined;

  const index = buildFxIndex(fx);
  const parts: string[] = [];
  for (const item of items) {
    const result = convertWithFx(item.amount, currency, target, index, { scale: 8 });
    if (!result.ok) return undefined;
    parts.push(`${formatCurrencyAmount(result.conversion.amount, target)} / ` +
      upstreamRateMeasureLabel(item.unit, item.metric, prefs.lang, item));
  }
  return parts.join(' · ');
}

/**
 * 渲染一个 PricingGroup 的价格。
 * 条件价格**不伪装成固定单价**——必须带条件说明。
 */
export function formatRule(
  currency: string,
  _unit: string,
  rule: {
    readonly rates?: readonly {
      readonly metric: string;
      readonly unit: string;
      readonly quantity?: number;
      readonly value: string;
      readonly ttl?: string;
      readonly context?: string;
    }[];
    readonly conditions?: unknown;
  },
): RateDisplay {
  const items = collectItems(rule);

  if (items.length === 0) {
    return {
      label: t('未取得可信价格'),
      conditional: t('来源未提供价格条款'),
    };
  }

  const label = items
    .map(
      (item) =>
        `${formatCurrencyAmount(item.amount, currency)} / ${upstreamRateMeasureLabel(item.unit, item.metric, prefs.lang, item)}`,
    )
    .join(' · ');

  const reference = buildReference(items, currency);

  return {
    label,
    conditional: hasCondition(rule.conditions) ? t('条件价格') : undefined,
    ...(reference ? { reference } : {}),
  };
}

/** Combine group-level deployment region with the remaining rule conditions for display. */
export function pricingGroupConditions(group: {
  readonly deployment?: string;
  readonly region?: string;
  readonly conditions?: readonly unknown[];
}): unknown[] | undefined {
  const conditions = [...(group.conditions ?? [])];
  if (group.deployment) conditions.unshift({ field: 'deployment.scope', value: group.deployment });
  if (group.region) conditions.unshift({ field: 'deployment.region', value: group.region });
  return conditions.length ? conditions : undefined;
}

/** 规则是否带有实际生效的条件。 */
export function hasCondition(conditions: unknown): boolean {
  return Array.isArray(conditions) && conditions.length > 0;
}

/**
 * 条件规则的可读描述。
 * PriceRule.conditions 是隐式 AND 的条件数组，叶节点使用 `{ field, operator?, value }`。
 */
export function describeCondition(
  when: unknown,
  options: { readonly omitFields?: readonly string[] } = {},
): string {
  if (Array.isArray(when)) {
    const items = when.map((item) => describeCondition(item, options)).filter(Boolean);
    if (items.length) return items.join(` ${t('且')} `);
    return when.length ? '' : t('无条件');
  }
  if (!when || typeof when !== 'object') return t('无条件');
  const record = when as Record<string, unknown>;

  if (Array.isArray(record.all)) {
    const items = (record.all as unknown[]).map((item) => describeCondition(item, options)).filter(Boolean);
    return items.length > 0 ? items.join(` ${t('且')} `) : record.all.length > 0 ? '' : t('无条件');
  }
  if (Array.isArray(record.any)) {
    const items = (record.any as unknown[]).map((item) => describeCondition(item, options)).filter(Boolean);
    return items.length > 0 ? items.join(` ${t('或')} `) : record.any.length > 0 ? '' : t('无条件');
  }
  if ('not' in record) {
    return `非（${describeCondition(record.not, options)}）`;
  }

  // `{ field, op, value }` 形态（价格条件）
  if (typeof record.field === 'string') {
    const field = record.field;
    const op = typeof record.operator === 'string' ? record.operator : 'eq';
    const value = record.value;
    if (options.omitFields?.includes(field)) return '';
    const fieldLabel = priceConditionFieldLabel(field);
    const valueLabel = priceConditionValueLabel(field, value);
    switch (op) {
      case 'eq':
        return t('{field}：{value}', { field: fieldLabel, value: valueLabel });
      case 'lt':
        return `${fieldLabel} < ${valueLabel}`;
      case 'lte':
        return `${fieldLabel} ≤ ${valueLabel}`;
      case 'gt':
        return `${fieldLabel} > ${valueLabel}`;
      case 'gte':
        return `${fieldLabel} ≥ ${valueLabel}`;
      case 'between':
        return Array.isArray(value)
          ? `${fieldLabel} ∈ [${value.map((item) => priceConditionValueLabel(field, item)).join(', ')}]`
          : `${fieldLabel} ∈ ${priceConditionValueLabel(field, value)}`;
      default:
        return `${fieldLabel} ${op} ${valueLabel}`;
    }
  }

  // `[field, value]` 数组形态（参数约束）
  if ('eq' in record) {
    const [field, value] = record.eq as [string, unknown];
    return `${field} = ${String(value)}`;
  }
  if ('in' in record) {
    const [field, values] = record.in as [string, unknown[]];
    return `${field} ∈ [${values.map(String).join(', ')}]`;
  }
  if ('lt' in record) {
    const [field, value] = record.lt as [string, unknown];
    return `${field} < ${String(value)}`;
  }
  if ('lte' in record) {
    const [field, value] = record.lte as [string, unknown];
    return `${field} ≤ ${String(value)}`;
  }
  if ('gt' in record) {
    const [field, value] = record.gt as [string, unknown];
    return `${field} > ${String(value)}`;
  }
  if ('gte' in record) {
    const [field, value] = record.gte as [string, unknown];
    return `${field} ≥ ${String(value)}`;
  }
  if ('requires' in record) {
    return t('需要 {field}', { field: String((record.requires as string[])[0]) });
  }
  if ('excludes' in record) {
    return t('排除 {field}', { field: String((record.excludes as string[])[0]) });
  }
  return t('无条件');
}

function serviceTierLabel(value: string): string {
  if (value === 'standard') return t('标准服务');
  if (value === 'priority') return t('优先服务');
  if (value === 'batch') return t('批量服务');
  if (value === 'flex') return t('灵活服务');
  if (value === 'fast') return t('快速模式');
  if (value === 'ultrafast') return t('超快速模式');
  if (value === 'low_latency') return t('低延迟');
  if (value === 'low_priority') return t('低优先级');
  return value;
}

function billingPeriodLabel(value: string): string {
  if (value === 'off_peak') return t('空闲时段');
  if (value === 'peak') return t('高峰时段');
  return value;
}

/** 将价格条件中的数据键和值转成产品文案；未识别值仍原样保留。 */
function priceConditionFieldLabel(field: string): string {
  const labels: Readonly<Record<string, string>> = {
    'usage.input_tokens': '输入量',
    'usage.output_tokens': '输出量',
    'usage.mode': '使用模式',
    api_mode: 'API 模式',
    prompt_tokens: '提示词 Token 数',
    input_tokens: '输入量',
    'request.input_tokens': '输入量',
    'request.output_pixels': '输出像素',
    'usage.input_image_index': '输入图片序号',
    resolution: '分辨率',
    'video.output_resolution': '输出分辨率',
    'video.duration_seconds': '视频时长（秒）',
    'video.input_includes_video': '是否包含视频输入',
    'request.video_audio': '视频是否包含音频',
    'request.generation_mode': '生成方式',
    output_mode: '输出模式',
    'request.output_mode': '输出模式',
    'request.mode': '推理模式',
    inference_type: '推理类型',
    'request.service_tier': '服务等级',
    service_tier: '服务等级',
    'request.time_period': '计费时段',
    time_period: '计费时段',
    'deployment.region': '部署地域',
    'deployment.scope': '部署范围',
    api_region: 'API 地域',
    transport: '传输方式',
    'usage.input_modality': '输入模态',
    'entitlement.program_id': '项目资格',
  };
  return t(labels[field] ?? field);
}

function priceConditionValueLabel(field: string, value: unknown): string {
  if (typeof value === 'boolean') {
    return t(value ? '是' : '否');
  }
  if (typeof value === 'number') {
    if (field === 'request.output_pixels') return `${formatNumber(value)} ${t('像素')}`;
    if (['usage.input_tokens', 'usage.output_tokens', 'input_tokens', 'request.input_tokens'].includes(field)) {
      return `${formatNumber(value)} tokens`;
    }
    return formatNumber(value);
  }
  if (typeof value !== 'string') return String(value);

  if (field === 'usage.mode') {
    const labels: Readonly<Record<string, string>> = {
      'Standard mode': '标准模式',
      'Contributor mode': '贡献模式',
    };
    return t(labels[value] ?? value);
  }

  if (field === 'service_tier' || field === 'request.service_tier') return serviceTierLabel(value);
  if (field === 'inference_type') {
    const labels: Readonly<Record<string, string>> = {
      realtime: '实时推理',
      batch: '批量推理',
    };
    return t(labels[value] ?? value);
  }
  if (field === 'api_mode' && value === 'batch') return t('批量推理');
  if (field === 'time_period' || field === 'request.time_period') return billingPeriodLabel(value);
  if (field === 'api_region') {
    const labels: Readonly<Record<string, string>> = {
      'United States': '美国',
      Global: '全球',
    };
    return t(labels[value] ?? value);
  }
  if (field === 'transport' && value === 'streaming') return t('流式');
  if (field === 'deployment.region' || field === 'deployment.scope') return t(value);
  if (field === 'usage.input_modality') {
    const labels: Readonly<Record<string, string>> = {
      text: '输入模态：文本', document: '输入模态：文档', image: '输入模态：图片', audio: '输入模态：音频',
    };
    return t(labels[value] ?? value);
  }
  if (field === 'request.mode') {
    const labels: Readonly<Record<string, string>> = {
      batch: '批量推理', batch_inference: '批量推理', flex: '灵活服务', priority: '优先服务',
      online: '在线推理', offline: '离线推理', layer_split: '图层拆分', single_image: '单图生成',
    };
    return t(labels[value] ?? value);
  }
  if (field === 'request.generation_mode') {
    const labels: Readonly<Record<string, string>> = { single_image: '单图生成', layer_decomposition: '图层拆分', text_to_video: '文生视频', image_to_video: '图生视频' };
    return t(labels[value] ?? value);
  }
  if (field === 'output_mode' || field === 'request.output_mode') {
    const labels: Readonly<Record<string, string>> = {
      standard_white: '标准白模', standard_textured: '标准纹理模型',
      high_detail_white: '高精度白模', high_detail_textured: '高精度纹理模型',
      high_precision_white: '高精度白模', high_precision_textured: '高精度纹理模型',
    };
    return t(labels[value] ?? value);
  }
  if (field === 'video.output_resolution' || field === 'resolution') {
    if (value.toLowerCase() === '4k') return '4K';
    if (/^\d+p$/i.test(value)) return value.toLowerCase();
  }
  return value;
}

/** 判断价格条件是否实际无约束（空 all 数组或缺失）。 */
export function isUnconditional(when: unknown): boolean {
  if (Array.isArray(when)) return when.length === 0;
  if (!when || typeof when !== 'object') return true;
  const record = when as Record<string, unknown>;
  if (Array.isArray(record.all)) return record.all.length === 0;
  if (Array.isArray(record.any)) return record.any.length === 0;
  return false;
}

// ---------------------------------------------------------------------------
// 状态
// ---------------------------------------------------------------------------

export interface StatusDisplay {
  readonly label: string;
  readonly tone: 'success' | 'warning' | 'danger' | 'neutral';
  readonly detail?: string;
}

/** 默认列表只显示 active 和 restricted；弃用、退役及未知状态需显式展开。 */
export function isCurrentSupply(status: OfferingStatus | undefined): boolean {
  return status === 'active' || status === 'restricted';
}

export function describeStatus(status: OfferingStatus | undefined): StatusDisplay {
  const stage: OfferingStatus = status ?? 'unknown';

  if (stage === 'retired') {
    return {
      label: t('已退役'),
      tone: 'danger',
    };
  }
  if (stage === 'deprecated') {
    return {
      label: t('已弃用'),
      tone: 'warning',
      detail: t('官方已公告弃用'),
    };
  }
  if (stage === 'restricted') {
    return { label: t('受限可用'), tone: 'warning', detail: t('需特定账号资格') };
  }
  if (stage === 'active') {
    return { label: t('供应中'), tone: 'success' };
  }
  return { label: t('状态待核实'), tone: 'neutral' };
}

// ---------------------------------------------------------------------------
// 官方接入
// ---------------------------------------------------------------------------

export interface OfficialBadge {
  readonly label: string;
  readonly tone: 'inverse' | 'neutral' | 'warning' | 'danger';
  readonly detail: string;
}

/**
 * 官方接入徽章。
 * 关键规则：仅完成域名挑战但未发布任何数据时，显示「域名已绑定（尚未发布）」，
 * **不得**显示官方接入徽章。
 */
export function describeOfficial(
  official: OfficialIntegration | undefined,
): OfficialBadge {
  if (!official || official.state === 'none') {
    return {
      label: t('社区整理'),
      tone: 'neutral',
      detail: t('由站点整理，不代表厂商参与'),
    };
  }
  if (official.state === 'domain_bound') {
    return {
      label: t('域名已绑定'),
      tone: 'warning',
      detail: t('尚未发布任何官方数据'),
    };
  }
  if (official.state === 'revoked') {
    return {
      label: t('接入已撤销'),
      tone: 'danger',
      detail: t('授权失效，历史来源保留'),
    };
  }
  if (official.state === 'stale') {
    return {
      label: t('接入数据陈旧'),
      tone: 'warning',
      detail: t('官方源长时间未更新'),
    };
  }

  const offeringCount = official.coverage?.offering_count ?? 0;
  const scope = official.coverage?.service_ids?.join(', ') ?? '';
  return {
    label: t('官方接入'),
    tone: 'inverse',
    detail:
      t('来源 {host}', { host: official.source_hostname ?? t('未知域名') }) +
      (scope ? ` · ${t('覆盖 {scope}', { scope })}` : '') +
      ` · ${t('已发布 {count} 项供应', { count: offeringCount })}` +
      (official.last_published_at
        ? ` · ${t('最近发布 {date}', { date: formatDateTime(official.last_published_at) })}`
        : ''),
  };
}

// ---------------------------------------------------------------------------
// 媒体限制
// ---------------------------------------------------------------------------

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

export function describeMediaLimit(media: unknown): string[] {
  if (!media || typeof media !== 'object') return [t('未知')];
  const spec = media as Record<string, any>;
  const parts: string[] = [];

  parts.push(
    Array.isArray(spec.mime_types) && spec.mime_types.length > 0
      ? t('格式 {formats}', { formats: spec.mime_types.join(' / ') })
      : t('格式未知'),
  );
  parts.push(
    typeof spec.max_bytes === 'number' ? `≤ ${formatBytes(spec.max_bytes)}` : t('大小上限未知'),
  );
  if (spec.duration_seconds) {
    const { min, max } = spec.duration_seconds;
    parts.push(t('时长 {min}s ~ {max}s', { min: min ?? t('不限'), max: max ?? t('不限') }));
  }
  if (Array.isArray(spec.transports) && spec.transports.length > 0) {
    parts.push(t('传输 {transports}', { transports: spec.transports.join(' / ') }));
  }
  return parts;
}

/** 视频与语音类模型优先展示媒体规格里的时长，不把 Token 限制混作媒体限制。 */
export function mediaDurationSummary(model?: Model): string {
  const modelRange = model?.specifications?.video_duration_seconds ?? model?.specifications?.audio_duration_seconds;
  if (modelRange && (modelRange.min !== undefined || modelRange.max !== undefined)) {
    const min = modelRange.min === undefined ? undefined : formatNumber(modelRange.min);
    const max = modelRange.max === undefined ? undefined : formatNumber(modelRange.max);
    return min === undefined
      ? t('最多 {max} 秒', { max: max ?? '' })
      : max === undefined
        ? t('至少 {min} 秒', { min })
        : t('{min}–{max} 秒', { min, max });
  }
  return t('未知');
}

/** 展示规范 Model 中明确记录的图像或视频输出分辨率。 */
export function resolutionSummary(model?: Model): string {
  const values = new Set<string>([
    ...(model?.specifications?.image_output_resolutions ?? []),
    ...(model?.specifications?.video_output_resolutions ?? []),
  ]);
  return values.size ? [...values].join(' / ') : t('未知');
}

/** 展示原厂公布的向量维度及默认值；缺失时保留未知。 */
export function outputDimensionsSummary(model: Model | undefined): string {
  const dimensions = model?.output_dimensions;
  if (!dimensions) return t('未知');
  const values = [
    ...(dimensions.supported?.length ? [dimensions.supported.map(formatNumber).join(' / ')] : []),
    ...(dimensions.min !== undefined && dimensions.max !== undefined ? [`${formatNumber(dimensions.min)}–${formatNumber(dimensions.max)}`] : []),
  ].join(' / ');
  if (!values) return t('未知');
  return dimensions.default === undefined ? values : `${values} (${t('默认')} ${formatNumber(dimensions.default)})`;
}

/** 格式化时间戳。 */
export function formatDateTime(value: string | undefined): string {
  if (!value) return t('未知');
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(
    date.getUTCDate(),
  ).padStart(2, '0')} UTC`;
}

/** 格式化包含时分的 UTC 时间戳。 */
export function formatUtcTimestamp(value: string | undefined): string {
  if (!value) return t('未知');
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(
    date.getUTCDate(),
  ).padStart(2, '0')} ${String(date.getUTCHours()).padStart(2, '0')}:${String(
    date.getUTCMinutes(),
  ).padStart(2, '0')} UTC`;
}

/** 相对时间，例如「3 天前」。 */
export function formatRelative(value: string | undefined): string {
  if (!value) return t('未知');
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const diffMs = Date.now() - date.getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return t('刚刚');
  if (minutes < 60) return t('{n} 分钟前', { n: minutes });
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return t('{n} 小时前', { n: hours });
  const days = Math.floor(hours / 24);
  if (days < 30) return t('{n} 天前', { n: days });
  const months = Math.floor(days / 30);
  if (months < 12) return t('{n} 个月前', { n: months });
  return t('{n} 年前', { n: Math.floor(months / 12) });
}

/** 数字千分位。 */
export function formatNumber(value: number): string {
  return value.toLocaleString('zh-CN');
}
