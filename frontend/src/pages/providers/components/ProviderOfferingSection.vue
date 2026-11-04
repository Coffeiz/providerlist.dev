<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { KNOWN_MODEL_TYPES } from '@providerlist/schema/model-types';
import { isTokenUnit } from '@providerlist/shared/pricing';
import CopyButton from '../../../components/CopyButton.vue';
import InputModalityList from '../../../components/InputModalityList.vue';
import PriceEntryList from '../../../components/PriceEntryList.vue';
import SortableTableHeader from '../../../components/SortableTableHeader.vue';
import SelectPopup from '../../../components/SelectPopup.vue';
import StatusBadge from '../../../components/StatusBadge.vue';
import { amountPerMillionTokens, groupPriceEntriesByTier, otherPricePresentation, priceTierLabel, videoResolutionCondition, videoResolutionOrder } from '../../../composables/pricing-display';
import {
  describeCondition,
  describeStatus,
  formatNumber,
  formatRule,
  fxStatus,
  isCurrentSupply,
  isUnconditional,
  mediaDurationSummary,
  formatCurrencyAmount,
  modelTypeLabel,
  metricLabel,
  metricQualifierLabel,
  priceMetricGroup,
  pricingGroupConditions,
  resolutionSummary,
  outputDimensionsSummary,
} from '../../../composables/format';
import { getModel } from '../../../composables/catalog';
import type { Offering, PricingGroup, ProviderDocument, Service } from '../../../types';
import type { PriceEntryView } from '../../../types/price-entry';
import { t } from '../../../i18n';
import { useTableSort } from '../../../composables/table-sort';

const props = defineProps<{ doc: ProviderDocument; service: Service; focusedOfferingAnchor?: string }>();
const activeService = computed(() => props.service);
const activeServiceId = computed(() => props.service.id);

function offeringAnchorId(offeringId: string): string {
  const codePoints = Array.from(offeringId, (character) => character.codePointAt(0)!.toString(16));
  return `offering-${codePoints.join('-')}`;
}

/** Offering 价格作为一个整体记录。 */
function pricingFor(offering: Offering): PricingGroup[] {
  return [...(offering.pricing ?? [])];
}

const showOtherStatuses = ref(false);
const typeFilter = ref<string>('all');
const inputFilter = ref<string>('all');
function modelFor(offering: Offering) { return getModel(offering.model_ref); }
function modelTypeFor(offering: Offering): string { return modelFor(offering)?.type ?? 'unknown'; }

function priceMetricLabel(label: string): string {
  return `${label}${t('输入') === 'Input' ? ':' : '：'}`;
}

function inputModalityKey(value: string): string {
  const normalized = value.toLowerCase();
  if (normalized === 'text' || normalized.startsWith('text/')) return 'text';
  if (normalized === 'image' || normalized.startsWith('image/')) return 'image';
  if (normalized === 'audio' || normalized.startsWith('audio/')) return 'audio';
  if (normalized === 'video' || normalized.startsWith('video/')) return 'video';
  if (normalized === 'file' || normalized.startsWith('application/')) return 'file';
  return value;
}

function inputModalityLabel(value: string): string {
  const labels: Readonly<Record<string, string>> = {
    text: t('文本输入'), image: t('图像输入'), audio: t('音频输入'),
    video: t('视频输入'), file: t('文件输入'),
  };
  return labels[value] ?? value;
}

watch(
  () => activeServiceId.value,
  () => {
    typeFilter.value = 'all';
    inputFilter.value = 'all';
  },
);

const visibleOfferings = computed<Offering[]>(() => {
  const offerings = activeService.value?.offerings ?? [];
  if (props.focusedOfferingAnchor) {
    const target = offerings.find((offering) => offeringAnchorId(offering.id) === props.focusedOfferingAnchor);
    if (target) return [target];
  }
  return offerings.filter((offering) => {
    if (!showOtherStatuses.value && !isCurrentSupply(offering.status)) return false;
    if (typeFilter.value !== 'all' && modelTypeFor(offering) !== typeFilter.value) return false;
    if (inputFilter.value !== 'all') {
      const inputs = modelFor(offering)?.modalities?.input ?? [];
      if (!inputs.some((value) => inputModalityKey(value) === inputFilter.value)) return false;
    }
    return true;
  });
});

function offeringSortValue(offering: Offering, key: string): unknown {
  const model = modelFor(offering);
  switch (key) {
    case 'model': return offering.id;
    case 'context': return model?.limits?.context;
    case 'inputLimit': return model?.limits?.input;
    case 'output': return model?.limits?.output;
    case 'dimensions': return outputDimensionsSummary(model);
    case 'duration': return mediaDurationSummary(model);
    case 'resolution': return resolutionSummary(model);
    case 'inputPrice': case 'outputPrice': case 'otherPrice': {
      const group = key === 'inputPrice' ? 'input' : key === 'outputPrice' ? 'output' : 'other';
      return priceEntriesFor(offering, group).map((entry) => entry.amount || entry.detail || '')
        .filter(Boolean).sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))[0];
    }
    case 'status': return offering.status;
    default: return undefined;
  }
}

const { activeSortKey, direction, sortedItems: sortedOfferings, toggleSort } = useTableSort(
  () => visibleOfferings.value,
  offeringSortValue,
);

interface OfferingGroup {
  readonly type: string;
  readonly offerings: readonly Offering[];
  readonly hasTokenPricing: boolean;
  readonly hasInputPricing: boolean;
  readonly hasOutputPricing: boolean;
  readonly hasOtherPricing: boolean;
  readonly showContext: boolean;
  readonly showOutput: boolean;
}

function releaseDateSortKey(value: string | undefined): number | null {
  if (!value) return null;
  const match = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = match[3] ? Number(match[3]) : 0;
  if (month < 1 || month > 12 || day > 31) return null;
  return year * 10_000 + month * 100 + day;
}

function compareReleaseDateDescending(left: Offering, right: Offering): number {
  const leftKey = releaseDateSortKey(modelFor(left)?.release_date);
  const rightKey = releaseDateSortKey(modelFor(right)?.release_date);
  if (leftKey === null) return rightKey === null ? 0 : 1;
  if (rightKey === null) return -1;
  return rightKey - leftKey;
}

const offeringGroups = computed<OfferingGroup[]>(() => {
  const groups = new Map<string, Offering[]>();
  for (const offering of visibleOfferings.value) {
    const type = modelTypeFor(offering);
    const group = groups.get(type) ?? [];
    group.push(offering);
    groups.set(type, group);
  }
  return [...groups.entries()]
    .sort(([left], [right]) => {
      const leftIndex = KNOWN_MODEL_TYPES.indexOf(left as (typeof KNOWN_MODEL_TYPES)[number]);
      const rightIndex = KNOWN_MODEL_TYPES.indexOf(right as (typeof KNOWN_MODEL_TYPES)[number]);
      return (leftIndex < 0 ? KNOWN_MODEL_TYPES.length : leftIndex) -
        (rightIndex < 0 ? KNOWN_MODEL_TYPES.length : rightIndex);
    })
    .map(([type, offerings]) => {
      const sortedOrder = new Map(sortedOfferings.value.map((offering, index) => [offering.id, index]));
      const orderedOfferings = activeSortKey.value
        ? [...offerings].sort((left, right) => (sortedOrder.get(left.id) ?? 0) - (sortedOrder.get(right.id) ?? 0))
        : [...offerings].sort(compareReleaseDateDescending);
      const items = orderedOfferings.flatMap((offering) =>
        pricingFor(offering).flatMap((pricing) => pricing.rates),
      );
      const isOtherType = !KNOWN_MODEL_TYPES.includes(type as (typeof KNOWN_MODEL_TYPES)[number]);
      const hasAny = (value: (offering: Offering) => unknown) => orderedOfferings.some((offering) => value(offering) != null);
      return {
        type,
        offerings: orderedOfferings,
        hasTokenPricing: items.some((item) => isTokenUnit(item.unit)),
        hasInputPricing: items.some((item) => priceMetricGroup(type, item) === 'input'),
        hasOutputPricing: items.some((item) => priceMetricGroup(type, item) === 'output'),
        hasOtherPricing: items.some((item) => priceMetricGroup(type, item) === 'other'),
        // Unknown model types are grouped under “Other”. Hide spec/capability columns
        // there only when no model in that group has a disclosed value.
        showContext: isAudioSpeechType(type)
          ? hasAny((offering) => modelFor(offering)?.limits?.context)
          : !isOtherType || hasAny((offering) => modelFor(offering)?.limits?.context),
        showOutput: isAudioSpeechType(type)
          ? hasAny((offering) => modelFor(offering)?.limits?.output)
          : !isOtherType || hasAny((offering) => modelFor(offering)?.limits?.output),
      };
    });
});

const typeOptions = computed(() => [...new Set((activeService.value?.offerings ?? []).map(modelTypeFor))].sort());
const inputOptions = computed(() => {
  const values = new Set<string>();
  for (const offering of activeService.value?.offerings ?? []) {
    for (const modality of modelFor(offering)?.modalities?.input ?? []) values.add(inputModalityKey(modality));
  }
  const order = ['text', 'image', 'audio', 'video', 'file'];
  return [...values].sort((left, right) => {
    const leftIndex = order.indexOf(left);
    const rightIndex = order.indexOf(right);
    if (leftIndex < 0) return rightIndex < 0 ? left.localeCompare(right) : 1;
    if (rightIndex < 0) return -1;
    return leftIndex - rightIndex;
  });
});

const typeSelectOptions = computed(() => [
  { value: 'all', label: t('全部') },
  ...typeOptions.value.map((value) => ({ value, label: modelTypeLabel(value) })),
]);
const inputSelectOptions = computed(() => [
  { value: 'all', label: t('全部') },
  ...inputOptions.value.map((value) => ({ value, label: inputModalityLabel(value) })),
]);

interface PriceEntry {
  readonly id: string;
  readonly ruleId: string;
  readonly amount: string;
  readonly listAmount?: string;
  readonly cacheMetric?: string;
  readonly cacheTtl?: string;
  readonly cacheContext?: string;
  readonly detail?: string;
  readonly converted?: string;
  readonly listConverted?: string;
  readonly convertedDetail?: string;
  readonly metricLabel?: string;
  readonly metricQualifier?: string;
  readonly condition?: string;
  readonly tierLabel?: string;
  readonly serviceTier?: boolean;
  readonly tierSignature?: string;
  readonly unsupported?: boolean;
}
function priceEntryViews(entries: readonly PriceEntry[]): PriceEntryView[] {
  return entries.map((entry) => {
    const label = entry.cacheMetric
      ? cacheMetricLabel(entry.cacheMetric)
      : entry.metricLabel
        ? priceMetricLabel(entry.metricLabel)
        : !entry.detail
          ? t('常规')
          : undefined;
    const originalValue = entry.listConverted ?? entry.listAmount;
    return {
      id: entry.id,
      ...(label ? { label } : {}),
      value: entry.unsupported
        ? t('不支持')
        : entry.cacheMetric
          ? entry.converted ?? entry.amount
          : entry.detail ?? entry.converted ?? entry.amount,
      ...(entry.converted ? { nativeValue: entry.amount } : {}),
      ...(originalValue ? { originalValue } : {}),
      ...(entry.metricQualifier ? { qualifier: entry.metricQualifier } : {}),
      ...(entry.cacheMetric ? { cache: true } : {}),
      ...(entry.unsupported ? { unsupported: true } : {}),
    };
  });
}
/** 保留每个价格规则的条件和参考换算，并按计量项分到表格列。 */
function priceEntriesFor(offering: Offering, group: 'input' | 'output' | 'other'): PriceEntry[] {
  const entries: PriceEntry[] = [];
  for (const [ruleIndex, rule] of pricingFor(offering).entries()) {
      const items = rule.rates;
      const conditions = pricingGroupConditions(rule);
      const simpleTierLabel = singleServiceTierLabel(conditions);
      const videoResolution = modelTypeFor(offering) === 'video' ? videoResolutionCondition(conditions) : undefined;
      const tierSignature = simpleTierLabel
        ? JSON.stringify({
            offering: offering.id,
            currency: rule.currency,
            rates: items,
            unsupported: [...(rule.unsupported_metrics ?? [])].sort(),
          })
        : undefined;
      const inputPriceIndexes = items.flatMap((item, index) => priceMetricGroup(modelTypeFor(offering), item) === 'input' ? [index] : []);
      const outputPriceIndexes = items.flatMap((item, index) => priceMetricGroup(modelTypeFor(offering), item) === 'output' ? [index] : []);
      const modalityPriceMetrics = new Set(
        items
          .filter((item) => ['input', 'output'].includes(priceMetricGroup(modelTypeFor(offering), item)) && !item.metric.startsWith('cache_'))
          .map((item) => item.metric),
      );
      const otherPriceIndex = items.findIndex((item) => priceMetricGroup(modelTypeFor(offering), item) === 'other');
      const conditionOwnerIndex = group === 'input'
        ? inputPriceIndexes.at(-1) ?? -1
        : group === 'output'
          ? outputPriceIndexes.at(-1) ?? -1
          : otherPriceIndex;

      for (const [itemIndex, item] of items.entries()) {
        const tokenPrice = isTokenUnit(item.unit);
        const cacheMetric = item.metric.startsWith('cache_') ? item.metric : undefined;
        const entryGroup = priceMetricGroup(modelTypeFor(offering), item);
        if (entryGroup !== group) continue;

        const unit = tokenPrice ? 'per_1m_tokens' : item.unit;
        const exactAmount = tokenPrice ? amountPerMillionTokens(item.value, item.unit) : item.value;
        const amount = formatCurrencyAmount(exactAmount, rule.currency);
        const displayItem = modelTypeFor(offering) === 'video' && item.metric === 'image'
          ? { ...item, metric: 'input_image' }
          : item;
        const display = formatRule(rule.currency, unit, {
          conditions: conditions,
          rates: [{ ...displayItem, value: exactAmount, unit }],
        });
        const exactListAmount = item.list_value
          ? tokenPrice ? amountPerMillionTokens(item.list_value, item.unit) : item.list_value
          : undefined;
        const listAmountValue = exactListAmount ? formatCurrencyAmount(exactListAmount, rule.currency) : undefined;
        const listDisplay = exactListAmount
          ? formatRule(rule.currency, unit, {
              conditions: conditions,
              rates: [{ ...displayItem, value: exactListAmount, unit }],
            })
          : undefined;
        const converted = tokenPrice ? display.reference?.split(' / ')[0] : undefined;
        const detail = group === 'other' && tokenPrice ? undefined : !tokenPrice ? display.label : undefined;
        const isConditionOwner = itemIndex === conditionOwnerIndex && conditions && !isUnconditional(conditions);
        const condition = isConditionOwner && !(group === 'other' && simpleTierLabel)
          ? videoResolution?.condition
            ? describeCondition(videoResolution.condition, { omitFields: group === 'other' ? [] : ['service_tier', 'request.mode'] })
            : videoResolution
              ? ''
              : describeCondition(conditions, { omitFields: group === 'other' ? [] : ['service_tier', 'request.mode'] })
          : '';
        const tierLabel = isConditionOwner
          ? videoResolution?.label ?? (group === 'other' ? simpleTierLabel : priceTierLabel(conditions))
          : undefined;
        const serviceTier = Boolean(priceTierLabel(conditions));
        entries.push({
          id: `${offering.id}:${ruleIndex}:${itemIndex}`,
          ruleId: `${offering.id}:${ruleIndex}`,
          amount: tokenPrice ? amount : '',
          ...(listAmountValue && tokenPrice
            ? { listAmount: listAmountValue }
            : {}),
          ...(cacheMetric ? { cacheMetric } : {}),
          ...(item.ttl ? { cacheTtl: item.ttl } : {}),
          ...(item.context ? { cacheContext: item.context } : {}),
          ...(item.ttl || item.context ? { metricQualifier: priceMetricQualifierLabel(item) } : {}),
          ...(detail ? { detail } : {}),
          ...(group === 'other' && tokenPrice ? { metricLabel: metricLabel(displayItem.metric) } : {}),
          ...(group !== 'other' && ((modalityPriceMetrics.size > 1 && !item.metric.startsWith('cache_')) || item.ttl || item.context)
            ? { metricLabel: metricLabel(item.metric) }
            : {}),
          ...(converted ? { converted } : {}),
          ...(listDisplay?.reference ? { listConverted: listDisplay.reference.split(' / ')[0] } : {}),
          ...(!tokenPrice && display.reference ? { convertedDetail: display.reference } : {}),
          ...(condition ? { condition } : {}),
          ...(tierLabel ? { tierLabel } : {}),
          ...(serviceTier ? { serviceTier } : {}),
          ...(tierSignature ? { tierSignature } : {}),
        });
      }
      for (const metric of rule.unsupported_metrics ?? []) {
        const unit = metric === 'cache_storage' ? 'per_1m_tokens_per_hour' : 'per_1m_tokens';
        const entryGroup = priceMetricGroup(modelTypeFor(offering), { metric, unit });
        if (entryGroup !== group) continue;
        const isConditionOwner = conditions && !isUnconditional(conditions);
        const condition = isConditionOwner && !(group === 'other' && simpleTierLabel)
          ? videoResolution?.condition
            ? describeCondition(videoResolution.condition, { omitFields: group === 'other' ? [] : ['service_tier', 'request.mode'] })
            : videoResolution
              ? ''
              : describeCondition(conditions!, { omitFields: group === 'other' ? [] : ['service_tier', 'request.mode'] })
          : '';
        const tierLabel = isConditionOwner
          ? videoResolution?.label ?? (group === 'other' ? simpleTierLabel : priceTierLabel(conditions!))
          : undefined;
        const serviceTier = Boolean(priceTierLabel(conditions));
        entries.push({
          id: `${offering.id}:${ruleIndex}:unsupported:${metric}`,
          ruleId: `${offering.id}:${ruleIndex}`,
          amount: '',
          cacheMetric: metric.startsWith('cache_') ? metric : undefined,
          detail: t('不支持'),
          unsupported: true,
          ...(!metric.startsWith('cache_') ? { metricLabel: metricLabel(metric) } : {}),
          ...(condition ? { condition } : {}),
          ...(tierLabel ? { tierLabel } : {}),
          ...(serviceTier ? { serviceTier } : {}),
          ...(tierSignature ? { tierSignature } : {}),
        });
      }
  }
  return entries;
}

function outputPriceTierGroupsFor(offering: Offering) {
  return priceTierGroupsFor(offering, 'output');
}

function inputPriceTierGroupsFor(offering: Offering) {
  return priceTierGroupsFor(offering, 'input');
}

function otherPriceTierGroupsFor(offering: Offering) {
  return priceTierGroupsFor(offering, 'other');
}

function priceTierGroupsFor(offering: Offering, group: 'input' | 'output' | 'other') {
  const groups = groupPriceEntriesByTier(priceEntriesFor(offering, group));
  if (modelTypeFor(offering) !== 'video') return groups;
  return [...groups].sort((left, right) => videoResolutionOrder(left.tierLabel) - videoResolutionOrder(right.tierLabel));
}

function hasMediaDurationColumn(type: string): boolean {
  return ['video', 'transcription', 'speech', 'music'].includes(type);
}

function isAudioSpeechType(type: string): boolean {
  return ['transcription', 'speech', 'music'].includes(type);
}

function hasContextColumn(group: OfferingGroup): boolean {
  return group.showContext && (hasStandardLimitColumns(group.type) || isAudioSpeechType(group.type));
}

function hasOutputColumn(group: OfferingGroup): boolean {
  return group.showOutput && (hasStandardLimitColumns(group.type) || isAudioSpeechType(group.type));
}

function hasResolutionColumn(type: string): boolean {
  return ['image', 'video'].includes(type);
}

function hasStandardLimitColumns(type: string): boolean {
  return !hasMediaDurationColumn(type) && !['embedding', 'image', 'decision'].includes(type);
}

function cacheMetricLabel(metric: string | undefined): string {
  return metric ? metricLabel(metric) : t('缓存');
}

function priceMetricQualifierLabel(qualifier: { readonly ttl?: string; readonly context?: string }): string | undefined {
  const values: string[] = [];
  if (qualifier.context) {
    const range = tokenContextRange(qualifier.context);
    if (range) values.push(t('输入上下文范围：{value}', { value: range }));
    else {
      const label = metricQualifierLabel({ context: qualifier.context });
      const value = label.trim().replace(/^[（(]/u, '').replace(/[）)]$/u, '').trim();
      if (value) values.push(value);
    }
  }
  if (qualifier.ttl) {
    const label = metricQualifierLabel({ ttl: qualifier.ttl });
    const value = label.trim().replace(/^[（(]/u, '').replace(/[）)]$/u, '').trim();
    if (value) values.push(value);
  }
  return values.length ? values.join(' · ') : undefined;
}

/** 把采集到的整数 Token 条件显示成可读范围；无法识别时保留原始条件。 */
function tokenContextRange(context: string): string | undefined {
  const bounds = context.split(/\s*&\s*/u);
  if (bounds.length < 1 || bounds.length > 2) return undefined;

  let minimum: number | undefined;
  let maximum: number | undefined;
  for (const bound of bounds) {
    const match = bound.trim().match(/^(>=|>|<=|<|=)\s*(\d+)$/u);
    if (!match) return undefined;
    const value = Number(match[2]);
    if (!Number.isSafeInteger(value)) return undefined;
    if (match[1] === '>' || match[1] === '>=') {
      minimum = value + (match[1] === '>' ? 1 : 0);
    } else if (match[1] === '<' || match[1] === '<=') {
      maximum = value - (match[1] === '<' ? 1 : 0);
    } else {
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

function singleServiceTierLabel(when: unknown): string | undefined {
  if (!when || typeof when !== 'object') return undefined;
  const condition = when as Record<string, unknown>;
  if (!['service_tier', 'request.service_tier', 'request.mode'].includes(String(condition.field)) || (condition.operator ?? 'eq') !== 'eq' || typeof condition.value !== 'string') return undefined;
  return priceTierLabel(when);
}

function limitLabel(value: number | null | undefined): string {
  return value == null ? t('未知') : formatNumber(value);
}

/** 参考汇率说明：可得就写清来源与日期，不可得就明说没有。 */
const fxNote = computed(() => {
  const status = fxStatus();
  if (status.kind === 'not_needed') return '';
  if (status.kind === 'unavailable') return t('本次未取得参考汇率，仅显示原币价。');
  return t('参考汇率来源：{source} · 数据日期 {date} · 非结算汇率', {
    source: status.source,
    date: status.date,
  });
});

function statusFor(offering: Offering) {
  return describeStatus(offering.status);
}

</script>

<template>
      <!-- 按主模型类型分区的模型列表 -->
      <section class="pl-stack detail-section" aria-labelledby="detail-offerings">
        <div class="pl-row-between pl-wrap detail-offerings-toolbar">
          <h2 id="detail-offerings" class="pl-text-lg detail-section-heading">
            {{ t('模型列表') }}
            <span class="detail-section-count">
              {{ visibleOfferings.length }} {{ t('个模型') }}
            </span>
          </h2>
          <label
            class="pl-row pl-text-sm detail-state-toggle"
            :class="{ 'is-active': showOtherStatuses }"
            :aria-label="t('显示待核实及其他状态模型')"
            :title="t('显示待核实及其他状态模型')"
          >
            <input v-model="showOtherStatuses" class="pl-checkbox" type="checkbox" />
            {{ t('其他状态') }}
          </label>
        </div>

        <div class="pl-row pl-wrap detail-filters">
          <div class="detail-filter-field">
            <label class="pl-label" for="detail-type">{{ t('模型类型') }}</label>
            <SelectPopup
              id="detail-type"
              v-model="typeFilter"
              :options="typeSelectOptions"
              :aria-label="t('按模型类型筛选')"
            />
          </div>
          <div class="detail-filter-field">
            <label class="pl-label" for="detail-input">{{ t('输入类型') }}</label>
            <SelectPopup
              id="detail-input"
              v-model="inputFilter"
              :options="inputSelectOptions"
              :aria-label="t('按输入类型筛选')"
            />
          </div>
        </div>

        <p v-if="fxNote" class="pl-text-xs pl-text-tertiary detail-fx-note">
          {{ fxNote }}
        </p>

        <p v-if="offeringGroups.length === 0" class="pl-card pl-text-secondary">
          {{ t('没有符合条件的模型') }}
        </p>

        <section
          v-for="group in offeringGroups"
          :key="group.type"
          class="detail-model-group"
          :class="{ 'detail-model-group-decision': group.type === 'decision' }"
          :aria-label="modelTypeLabel(group.type)"
        >
          <div class="pl-row-between detail-model-group-heading">
            <h3 class="pl-text-md">{{ modelTypeLabel(group.type) }}</h3>
            <div class="pl-row pl-wrap detail-group-meta">
              <span v-if="group.hasTokenPricing" class="pl-text-xs pl-text-tertiary">
                {{ t('Token 价格按每百万计') }}
              </span>
              <span class="pl-text-xs pl-text-tertiary">{{ group.offerings.length }} {{ t('个模型') }}</span>
            </div>
          </div>
          <div class="pl-panel">
            <div class="pl-table-wrap">
              <table class="pl-table detail-model-table">
                <thead>
                  <tr>
                    <SortableTableHeader :label="t('模型 ID')" sort-key="model" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="hasMediaDurationColumn(group.type)" :label="t('时长')" sort-key="duration" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="group.type === 'embedding'" :label="t('单条输入 Token 上限')" sort-key="inputLimit" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="hasContextColumn(group)" :label="t('上下文')" sort-key="context" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="group.type === 'embedding'" :label="t('输出维度')" sort-key="dimensions" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="hasResolutionColumn(group.type)" :label="t('分辨率')" sort-key="resolution" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="hasOutputColumn(group)" :label="t('输出')" sort-key="output" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="group.hasInputPricing || group.type === 'video'" :label="t('输入价')" sort-key="inputPrice" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="group.hasOutputPricing || group.type === 'video'" :label="t('输出价')" sort-key="outputPrice" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader v-if="group.hasOtherPricing || (!group.hasInputPricing && !group.hasOutputPricing)" :label="t('其他价格')" sort-key="otherPrice" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
                    <SortableTableHeader :label="t('状态')" sort-key="status" :active-sort-key="activeSortKey" :direction="direction" class="detail-status-cell" @activate="toggleSort" />
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="offering in group.offerings" :id="offeringAnchorId(offering.id)" :key="offering.id">
                    <td>
                      <div class="detail-model-id-row">
                        <code class="pl-mono detail-model-id">{{ offering.id }}</code>
                        <CopyButton
                          :value="offering.id" analytics-kind="model_id"
                          :label="t('复制模型 ID')"
                          :title="t('复制 Provider API 使用的模型 ID')"
                          variant="icon"
                        />
                        <div class="detail-mobile-status">
                          <StatusBadge
                            :label="statusFor(offering).label"
                            :tone="statusFor(offering).tone"
                            :detail="statusFor(offering).detail"
                          />
                        </div>
                      </div>
                      <InputModalityList
                        v-if="group.type !== 'image'"
                        :modalities="modelFor(offering)?.modalities?.input ?? []"
                      />
                      <div v-if="modelFor(offering)?.release_date" class="pl-text-xs pl-text-tertiary">
                        {{ t('发布日期') }} · {{ modelFor(offering)?.release_date }}
                      </div>
                    </td>
                    <td v-if="hasMediaDurationColumn(group.type)" :data-label="t('时长')" :class="{ 'pl-text-tertiary': mediaDurationSummary(modelFor(offering)) === t('未知') }">
                      {{ mediaDurationSummary(modelFor(offering)) }}
                    </td>
                    <td v-if="group.type === 'embedding'" :data-label="t('单条输入 Token 上限')" :class="{ 'pl-text-tertiary': modelFor(offering)?.limits?.input == null }">
                      {{ limitLabel(modelFor(offering)?.limits?.input) }}
                    </td>
                    <td v-if="hasContextColumn(group)" :data-label="t('上下文')" :class="{ 'pl-text-tertiary': modelFor(offering)?.limits?.context == null }">
                      {{ limitLabel(modelFor(offering)?.limits?.context) }}
                    </td>
                    <td v-if="group.type === 'embedding'" :data-label="t('输出维度')" :class="{ 'pl-text-tertiary': outputDimensionsSummary(modelFor(offering)) === t('未知') }">
                      {{ outputDimensionsSummary(modelFor(offering)) }}
                    </td>
                    <td v-if="hasResolutionColumn(group.type)" :data-label="t('分辨率')" :class="{ 'pl-text-tertiary': resolutionSummary(modelFor(offering)) === t('未知') }">
                      {{ resolutionSummary(modelFor(offering)) }}
                    </td>
                    <td v-if="hasOutputColumn(group)" :data-label="t('输出')" :class="{ 'pl-text-tertiary': modelFor(offering)?.limits?.output == null }">
                      {{ limitLabel(modelFor(offering)?.limits?.output) }}
                    </td>
                    <td v-if="group.hasInputPricing || group.type === 'video'" :data-label="t('输入价')" class="detail-price-cell">
                      <div
                        v-for="tierGroup in inputPriceTierGroupsFor(offering)"
                        :key="tierGroup.id"
                        class="pl-price-tier-group"
                      >
                        <div v-if="tierGroup.tierLabel" class="pl-price-tier-title">{{ tierGroup.tierLabel }}</div>
                        <div
                          v-for="priceGroup in tierGroup.rules"
                          :key="priceGroup.id"
                          class="pl-price-rule"
                        >
                          <PriceEntryList :entries="priceEntryViews(priceGroup.entries)" />
                          <div
                            v-if="priceGroup.condition"
                            class="detail-price-condition pl-text-xs pl-text-tertiary"
                          >
                            {{ t('条件：{value}', { value: priceGroup.condition }) }}
                          </div>
                        </div>
                      </div>
                      <span
                        v-if="inputPriceTierGroupsFor(offering).length === 0"
                        class="pl-text-xs pl-text-tertiary"
                      >{{ t('未知') }}</span>
                    </td>
                    <td v-if="group.hasOutputPricing || group.type === 'video'" :data-label="t('输出价')" class="detail-price-cell">
                      <div
                        v-for="tierGroup in outputPriceTierGroupsFor(offering)"
                        :key="tierGroup.id"
                        class="pl-price-tier-group"
                      >
                        <div v-if="tierGroup.tierLabel" class="pl-price-tier-title">{{ tierGroup.tierLabel }}</div>
                        <div
                          v-for="priceGroup in tierGroup.rules"
                          :key="priceGroup.id"
                          class="pl-price-rule"
                        >
                          <PriceEntryList :entries="priceEntryViews(priceGroup.entries)" />
                          <div v-if="priceGroup.condition" class="detail-price-condition pl-text-xs pl-text-tertiary">
                            {{ t('条件：{value}', { value: priceGroup.condition }) }}
                          </div>
                        </div>
                      </div>
                      <span
                        v-if="outputPriceTierGroupsFor(offering).length === 0"
                        class="pl-text-xs pl-text-tertiary"
                      >{{ t('未知') }}</span>
                    </td>
                    <td v-if="group.hasOtherPricing || (!group.hasInputPricing && !group.hasOutputPricing)" :data-label="t('其他价格')" class="detail-price-cell">
                      <div
                        v-for="tierGroup in otherPriceTierGroupsFor(offering)"
                        :key="tierGroup.id"
                        class="pl-price-tier-group"
                      >
                        <div v-if="tierGroup.tierLabel" class="pl-price-tier-title">{{ tierGroup.tierLabel }}</div>
                        <div v-for="priceGroup in tierGroup.rules" :key="priceGroup.id" class="pl-price-rule">
                          <div v-for="entry in priceGroup.entries" :key="entry.id" class="pl-price-entry">
                            <del
                              v-if="entry.listConverted ?? entry.listAmount"
                              class="detail-price-original"
                              :class="{ 'pl-text-price-cache': entry.cacheMetric }"
                            >{{ entry.listConverted ?? entry.listAmount }}</del>
                            <span v-if="entry.cacheMetric" class="pl-text-price-cache">{{ otherPricePresentation(entry).primary }}</span>
                            <template v-else>{{ otherPricePresentation(entry).primary }}</template>
                            <span v-if="otherPricePresentation(entry).native" class="pl-price-native detail-price-inline-native">{{ otherPricePresentation(entry).native }}</span>
                            <span v-if="entry.metricLabel" class="pl-text-xs pl-text-tertiary detail-price-metric">{{ entry.metricLabel }}</span>
                            <div v-if="entry.metricQualifier" class="detail-price-qualifier">{{ entry.metricQualifier }}</div>
                          </div>
                          <div v-if="priceGroup.condition" class="detail-price-condition pl-text-xs pl-text-tertiary">
                            {{ t('条件：{value}', { value: priceGroup.condition }) }}
                          </div>
                        </div>
                      </div>
                      <span
                        v-if="priceEntriesFor(offering, 'other').length === 0"
                        class="pl-text-xs pl-text-tertiary"
                      >{{ t('未取得可信价格') }}</span>
                    </td>
                    <td :data-label="t('状态')" class="detail-status-cell">
                      <StatusBadge
                        :label="statusFor(offering).label"
                        :tone="statusFor(offering).tone"
                        :detail="statusFor(offering).detail"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>

</template>
