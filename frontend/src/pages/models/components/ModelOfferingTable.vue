<script setup lang="ts">
import VirtualTableBody from '../../../components/VirtualTableBody.vue';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import CopyButton from '../../../components/CopyButton.vue';
import { useRoute } from 'vue-router';
import { trackAnalyticsEvent } from '../../../composables/analytics';
import InputModalityList from '../../../components/InputModalityList.vue';
import ProviderLogo from '../../../components/ProviderLogo.vue';
import StatusBadge from '../../../components/StatusBadge.vue';
import SortableTableHeader from '../../../components/SortableTableHeader.vue';
import PriceEntryList from '../../../components/PriceEntryList.vue';
import { useTableSort } from '../../../composables/table-sort';
import { groupPriceEntriesByTier, videoResolutionOrder } from '../../../composables/pricing-display';
import { accountMarketLabel, describeStatus, formatDateTime, formatNumber, mediaDurationSummary, metricLabel, metricQualifierLabel, modelTypeLabel, outputDimensionsSummary, resolutionSummary } from '../../../composables/format';
import type { ModelTableRow } from '../types';
import type { PriceEntryView } from '../../../types/price-entry';
import { t } from '../../../i18n';

const route = useRoute();
function trackSearchOpen(providerId: string): void {
  if (typeof route.query.q === 'string' && route.query.q.trim()) trackAnalyticsEvent({ type: 'search_result_open', result_type: 'provider', provider_id: providerId });
}

const props = defineProps<{ modelType: string; rows: readonly ModelTableRow[] }>();
const modelType = computed(() => props.modelType);
const rows = computed(() => props.rows);
function sortValue(row: ModelTableRow, key: string): unknown {
  const prices = key === 'inputPrice' ? row.inputPrices : key === 'outputPrice' ? row.outputPrices : row.otherPrices;
  const offering = row.offering;
  switch (key) {
    case 'provider': return row.providerName;
    case 'model': return offering.id;
    case 'developer': return row.model?.developer_id;
    case 'context': return row.model?.limits?.context;
    case 'inputLimit': return row.model?.limits?.input;
    case 'output': return row.model?.limits?.output;
    case 'dimensions': return outputDimensionsSummary(row.model);
    case 'duration': return mediaDurationSummary(row.model);
    case 'resolution': return resolutionSummary(row.model);
    case 'inputPrice': case 'outputPrice': case 'otherPrice':
      return prices.map((price) => price.amount || price.detail || '')
        .filter(Boolean).sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))[0];
    case 'status': return offering.status;
    case 'releaseDate': return row.releaseDate;
    default: return undefined;
  }
}
const { activeSortKey, direction, sortedItems: sortedRows, toggleSort } = useTableSort(() => rows.value, sortValue);
const hasTokenPricing = computed(() => rows.value.some((row) => row.inputPrices.length > 0 || row.outputPrices.length > 0));
const hasInputPricing = computed(() => modelType.value === 'video' || rows.value.some((row) => row.inputPrices.length > 0));
const hasOutputPricing = computed(() => modelType.value === 'video' || rows.value.some((row) => row.outputPrices.length > 0));
const hasOtherPricing = computed(() => rows.value.some((row) => row.otherPrices.length > 0));
const hasMediaDurationColumn = computed(() => ['video', 'transcription', 'speech'].includes(modelType.value));
const hasStandardLimitColumns = computed(() => !hasMediaDurationColumn.value && !['embedding', 'image', 'decision'].includes(modelType.value));
const hasResolutionColumn = computed(() => ['image', 'video'].includes(modelType.value));
function priceGroups(entries: ModelTableRow['inputPrices']) {
  const groups = groupPriceEntriesByTier(entries);
  return modelType.value === 'video'
    ? [...groups].sort((left, right) => videoResolutionOrder(left.tierLabel) - videoResolutionOrder(right.tierLabel))
    : groups;
}
function cacheMetricLabel(metric: string | undefined): string {
  return metric ? metricLabel(metric) : t('缓存');
}
function priceQualifierLabel(entry: ModelTableRow['inputPrices'][number]): string | undefined {
  if (!entry.cacheTtl && !entry.cacheContext) return undefined;
  return metricQualifierLabel({ ttl: entry.cacheTtl, context: entry.cacheContext })
    .trim()
    .replace(/^[（(]/u, '')
    .replace(/[）)]$/u, '')
    .trim();
}
function priceEntryViews(entries: ModelTableRow['inputPrices']): PriceEntryView[] {
  return entries.map((entry) => {
    const label = entry.cacheMetric
      ? cacheMetricLabel(entry.cacheMetric)
      : entry.metricLabel ?? (!entry.detail ? t('常规') : undefined);
    const qualifier = priceQualifierLabel(entry);
    return {
      id: entry.id,
      ...(label ? { label } : {}),
      value: entry.unsupported ? t('不支持') : entry.detail ?? entry.converted ?? entry.amount,
      ...(entry.converted ? { nativeValue: entry.amount } : {}),
      ...(qualifier ? { qualifier } : {}),
      ...(entry.cacheMetric ? { cache: true } : {}),
      ...(entry.unsupported ? { unsupported: true } : {}),
    };
  });
}
</script>

<template>
    <section class="pl-panel model-list-panel" :aria-label="modelTypeLabel(modelType)">
      <div class="pl-table-wrap">
        <table class="pl-table model-list-table">
          <colgroup>
            <col class="col-provider" />
            <col class="col-model" />
            <col class="col-developer" />
            <col v-if="modelType !== 'image'" :class="modelType === 'embedding' ? 'col-input-limit' : 'col-limit'" />
            <col v-if="modelType === 'embedding'" class="col-limit-small" />
            <col v-if="hasResolutionColumn" class="col-limit-small" />
            <col v-else-if="hasStandardLimitColumns" class="col-limit-small" />
            <col v-if="hasInputPricing" class="col-input-price" />
            <col v-if="hasOutputPricing" class="col-output-price" />
            <col v-if="hasOtherPricing || (!hasInputPricing && !hasOutputPricing)" class="col-other-price" />
            <col class="col-status" />
            <col class="col-date" />
          </colgroup>
          <thead>
            <tr>
              <SortableTableHeader :label="t('服务商')" sort-key="provider" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('模型 ID')" sort-key="model" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('开发商')" sort-key="developer" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-if="hasMediaDurationColumn" :label="t('时长')" sort-key="duration" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-else-if="modelType === 'embedding'" class="model-input-limit-header" :label="t('单条输入 Token 上限')" sort-key="inputLimit" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-else-if="hasStandardLimitColumns" :label="t('上下文')" sort-key="context" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-if="modelType === 'embedding'" :label="t('输出维度')" sort-key="dimensions" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-if="hasResolutionColumn" :label="t('分辨率')" sort-key="resolution" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-else-if="hasStandardLimitColumns" :label="t('输出')" sort-key="output" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-if="hasInputPricing" :label="t('输入价')" sort-key="inputPrice" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-if="hasOutputPricing" :label="t('输出价')" sort-key="outputPrice" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader v-if="hasOtherPricing || (!hasInputPricing && !hasOutputPricing)" :label="t('其他价格')" sort-key="otherPrice" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('状态')" sort-key="status" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('发布日期')" sort-key="releaseDate" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
            </tr>
          </thead>
          <VirtualTableBody :items="sortedRows" :item-key="(row) => `${row.providerId}-${row.serviceId}-${row.offering.id}`">
              <template #default="{ item: row }">
              <td :data-label="t('服务商')">
                <div class="model-provider-link">
                  <RouterLink
                    :to="`/providers/${row.providerId}?service=${row.serviceId}`"
                    @click="trackSearchOpen(row.providerId)"
                  >
                    <span class="model-provider-identity">
                      <ProviderLogo :name="row.providerName" :src="row.providerLogo" size="inline" />
                      <span class="model-provider-name">{{ row.providerName }}</span>
                    </span>
                    <span
                      v-if="row.accountMarket !== 'UNKNOWN'"
                      class="pl-badge pl-badge-neutral model-provider-market"
                    >{{ accountMarketLabel(row.accountMarket) }}</span>
                  </RouterLink>
                </div>
              </td>
              <td>
                <div class="detail-model-id-row">
                  <RouterLink
                    v-if="row.model"
                    :to="`/models/${encodeURIComponent(row.model.developer_id)}/${encodeURIComponent(row.model.id.slice(row.model.developer_id.length + 1))}`"
                    class="detail-model-id-link"
                  ><code class="pl-mono detail-model-id">{{ row.offering.id }}</code></RouterLink>
                  <code v-else class="pl-mono detail-model-id">{{ row.offering.id }}</code>
                  <CopyButton
                    :value="row.offering.id" analytics-kind="model_id"
                    :label="t('复制模型 ID')"
                    :title="t('复制 Provider API 使用的模型 ID')"
                    variant="icon"
                  />
                  <span v-if="row.model?.developer_id" class="model-mobile-developer pl-text-tertiary">
                    <span aria-hidden="true">·</span>
                    <span class="model-mobile-developer-name">{{ row.model.developer_id }}</span>
                    <CopyButton
                      :value="row.model.developer_id"
                      :label="t('复制开发商 ID')"
                      :title="t('复制用于拼接规范模型 JSON 地址的开发商 ID')"
                      variant="icon"
                    />
                  </span>
                  <div class="model-mobile-status">
                    <StatusBadge
                      :label="describeStatus(row.offering.status).label"
                      :tone="describeStatus(row.offering.status).tone"
                      :detail="describeStatus(row.offering.status).detail"
                    />
                  </div>
                </div>
                <InputModalityList v-if="modelType !== 'image'" :modalities="row.model?.modalities?.input ?? []" />
                <div v-if="row.releaseDate" class="model-mobile-release-date pl-text-xs pl-text-tertiary">
                  {{ t('发布日期') }} · {{ row.releaseDate }}
                </div>
              </td>
              <td class="model-developer-cell" :data-label="t('开发商')" :class="{ 'pl-text-tertiary': !row.model?.developer_id }">
                <div v-if="row.model?.developer_id" class="detail-model-id-row">
                  <code class="pl-mono detail-model-id">{{ row.model.developer_id }}</code>
                  <CopyButton
                    :value="row.model.developer_id"
                    :label="t('复制开发商 ID')"
                    :title="t('复制用于拼接规范模型 JSON 地址的开发商 ID')"
                    variant="icon"
                  />
                </div>
                <span v-else>{{ t('未知') }}</span>
              </td>
              <td v-if="hasMediaDurationColumn" :data-label="t('时长')" :class="{ 'pl-text-tertiary': mediaDurationSummary(row.model) === t('未知') }">{{ mediaDurationSummary(row.model) }}</td>
              <td v-else-if="modelType === 'embedding'" :data-label="t('单条输入 Token 上限')" :class="{ 'pl-text-tertiary': row.model?.limits?.input == null }">{{ row.model?.limits?.input == null ? t('未知') : formatNumber(row.model.limits.input) }}</td>
              <td v-else-if="hasStandardLimitColumns" :data-label="t('上下文')" :class="{ 'pl-text-tertiary': row.model?.limits?.context == null }">{{ row.model?.limits?.context == null ? t('未知') : formatNumber(row.model.limits.context) }}</td>
              <td v-if="modelType === 'embedding'" :data-label="t('输出维度')" :class="{ 'pl-text-tertiary': outputDimensionsSummary(row.model) === t('未知') }">{{ outputDimensionsSummary(row.model) }}</td>
              <td v-if="hasResolutionColumn" :data-label="t('分辨率')" :class="{ 'pl-text-tertiary': resolutionSummary(row.model) === t('未知') }">{{ resolutionSummary(row.model) }}</td>
              <td v-else-if="hasStandardLimitColumns" :data-label="t('输出')" :class="{ 'pl-text-tertiary': row.model?.limits?.output == null }">{{ row.model?.limits?.output == null ? t('未知') : formatNumber(row.model.limits.output) }}</td>
              <td v-if="hasInputPricing" :data-label="t('输入价')" class="detail-price-cell">
                <div v-for="tierGroup in priceGroups(row.inputPrices)" :key="tierGroup.id" class="pl-price-tier-group">
                  <div v-if="tierGroup.tierLabel" class="pl-price-tier-title">{{ tierGroup.tierLabel }}</div>
                  <div v-for="group in tierGroup.rules" :key="group.id" class="pl-price-rule">
                    <PriceEntryList :entries="priceEntryViews(group.entries)" />
                    <div v-if="group.condition" class="detail-price-condition pl-text-xs pl-text-tertiary">{{ t('条件：{value}', { value: group.condition }) }}</div>
                  </div>
                </div>
                <span v-if="row.inputPrices.length === 0" class="pl-text-xs pl-text-tertiary">{{ t('未知') }}</span>
              </td>
              <td v-if="hasOutputPricing" :data-label="t('输出价')" class="detail-price-cell">
                <div v-for="tierGroup in priceGroups(row.outputPrices)" :key="tierGroup.id" class="pl-price-tier-group">
                  <div v-if="tierGroup.tierLabel" class="pl-price-tier-title">{{ tierGroup.tierLabel }}</div>
                  <div v-for="group in tierGroup.rules" :key="group.id" class="pl-price-rule">
                    <PriceEntryList :entries="priceEntryViews(group.entries)" />
                    <div v-if="group.condition" class="detail-price-condition pl-text-xs pl-text-tertiary">{{ t('条件：{value}', { value: group.condition }) }}</div>
                  </div>
                </div>
                <span v-if="row.outputPrices.length === 0" class="pl-text-xs pl-text-tertiary">{{ t('未知') }}</span>
              </td>
              <td v-if="hasOtherPricing || (!hasInputPricing && !hasOutputPricing)" :data-label="t('其他价格')" class="detail-price-cell">
                <template v-if="modelType === 'video'">
                  <div v-for="tierGroup in priceGroups(row.otherPrices)" :key="tierGroup.id" class="pl-price-tier-group">
                    <div v-if="tierGroup.tierLabel" class="pl-price-tier-title">{{ tierGroup.tierLabel }}</div>
                    <div v-for="group in tierGroup.rules" :key="group.id" class="pl-price-rule">
                      <div v-for="entry in group.entries" :key="entry.id" class="pl-price-entry">
                        <div><span v-if="entry.cacheMetric" class="pl-text-price-cache">{{ entry.convertedDetail ?? entry.detail }}</span><template v-else>{{ entry.convertedDetail ?? entry.detail }}</template></div>
                        <div v-if="entry.convertedDetail" class="pl-price-native">{{ entry.detail }}</div>
                      </div>
                      <div v-if="group.condition" class="detail-price-condition pl-text-xs pl-text-tertiary">{{ t('条件：{value}', { value: group.condition }) }}</div>
                    </div>
                  </div>
                </template>
                <div v-else v-for="entry in row.otherPrices" :key="entry.id" class="pl-price-entry">
                  <div><span v-if="entry.cacheMetric" class="pl-text-price-cache">{{ entry.convertedDetail ?? entry.detail }}</span><template v-else>{{ entry.convertedDetail ?? entry.detail }}</template></div>
                  <div v-if="entry.convertedDetail" class="pl-price-native">{{ entry.detail }}</div>
                  <div v-if="entry.condition" class="pl-text-xs pl-text-tertiary">{{ t('条件：{value}', { value: entry.condition }) }}</div>
                </div>
                <span v-if="row.otherPrices.length === 0" class="pl-text-xs pl-text-tertiary">{{ t('未知') }}</span>
              </td>
              <td :data-label="t('状态')" class="model-mobile-status-cell"><StatusBadge :label="describeStatus(row.offering.status).label" :tone="describeStatus(row.offering.status).tone" :detail="describeStatus(row.offering.status).detail" /></td>
              <td :data-label="t('发布日期')" class="model-release-date-cell" :class="{ 'pl-text-tertiary': !row.releaseDate }">{{ row.releaseDate ? formatDateTime(row.releaseDate) : t('未知') }}</td>
            </template>
          </VirtualTableBody>
        </table>
      </div>
      <div v-if="hasTokenPricing" class="model-list-note pl-text-xs pl-text-tertiary">
        {{ t('Token 价格按每百万计') }}
      </div>
    </section>
</template>
