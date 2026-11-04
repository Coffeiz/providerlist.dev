<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import CopyButton from '../CopyButton.vue';
import AppIcon from '../AppIcon.vue';
import { t } from '../../i18n';
import { providerDisplayName } from '../../composables/format';
import {
  BUILDER_FIELDS, getJsonBuilderCount, getJsonBuilderPreview,
  getJsonBuilderApiUrl, getJsonBuilderShareUrl, getJsonBuilderState, loadBuilderProviderDocs, loadJsonBuilder,
} from '../../composables/json-builder';

const state = getJsonBuilderState();
const count = getJsonBuilderCount();
const preview = getJsonBuilderPreview();
const shareUrlReady = ref(false);
const previewElement = ref<HTMLElement | null>(null);
const previewScrollTop = ref(0);
const previewViewportHeight = ref(480);
const previewLineHeight = ref(24);
const previewLines = computed(() => preview.value.split('\n'));
const previewRange = computed(() => {
  const overscan = 8;
  const start = Math.max(0, Math.floor(previewScrollTop.value / previewLineHeight.value) - overscan);
  const visibleCount = Math.ceil(previewViewportHeight.value / previewLineHeight.value) + overscan * 2;
  return { start, end: Math.min(previewLines.value.length, start + visibleCount) };
});
const visiblePreviewLines = computed(() => previewLines.value.slice(previewRange.value.start, previewRange.value.end));
const previewBottomSpace = computed(() => Math.max(0, previewLines.value.length - previewRange.value.end) * previewLineHeight.value);
const apiUrl = computed(() => getJsonBuilderApiUrl());
const labels: Record<string, string> = { input: '输入模态', limits: '上下文与输出限制', pricing: '价格', apis: 'API 接入' };
const marketOrder = ['CN', 'GLOBAL', 'OTHER', 'UNKNOWN'];
const markets = computed(() => {
  const available = new Set(state.offerings.filter((item) => item.type === 'chat').map((item) => item.market));
  return [
    ...marketOrder.filter((market) => available.has(market)),
    ...[...available].filter((market) => !marketOrder.includes(market)).sort(),
  ];
});
const currencyOptions = computed(() => [
  { value: 'original', label: t('原币种') },
  ...(state.fxReference ? [state.fxReference.base, ...state.fxReference.quotes.map((quote) => quote.currency)] : [])
    .map((currency) => ({ value: currency, label: currency })),
]);

function measurePreview(): void {
  const element = previewElement.value;
  if (!element) return;
  previewViewportHeight.value = element.clientHeight;
  const lineHeight = Number.parseFloat(getComputedStyle(element).lineHeight);
  if (Number.isFinite(lineHeight) && lineHeight > 0) previewLineHeight.value = lineHeight;
}

function updatePreviewScroll(event: Event): void {
  if (event.currentTarget instanceof HTMLElement) previewScrollTop.value = event.currentTarget.scrollTop;
}

onMounted(async () => {
  measurePreview();
  window.addEventListener('resize', measurePreview);
  await loadJsonBuilder();
  await loadBuilderProviderDocs(state.providerIds);
  shareUrlReady.value = true;
  syncShareUrl();
});
onBeforeUnmount(() => window.removeEventListener('resize', measurePreview));
watch(preview, () => {
  previewScrollTop.value = 0;
  if (previewElement.value) previewElement.value.scrollTop = 0;
});
watch(() => [state.providerIds.join(','), state.fields.join(','), state.markets.join(','), state.statuses.join(',')], () => {
  void loadBuilderProviderDocs(state.providerIds);
});
watch(() => [state.providerIds.join(','), state.fields.join(','), state.markets.join(','), state.statuses.join(','), state.currency], () => {
  if (shareUrlReady.value) syncShareUrl();
});

function toggle<T extends string>(items: T[], value: T): void {
  const index = items.indexOf(value);
  if (index < 0) items.push(value); else items.splice(index, 1);
}

function syncShareUrl(): void {
  history.replaceState(null, '', getJsonBuilderShareUrl());
}

function downloadJson(): void {
  const url = URL.createObjectURL(new Blob([preview.value], { type: 'application/json' }));
  const link = document.createElement('a'); link.href = url; link.download = 'providerlist-custom.json'; link.click();
  URL.revokeObjectURL(url);
}
</script>

<template>
  <section id="json-builder" class="json-builder" :aria-label="t('自定义 JSON API')">
    <header class="builder-heading">
      <div><h2>{{ t('自定义 JSON API') }}</h2><p>{{ t('按需选择服务商、市场和模型字段，在浏览器本地生成 Chat JSON。') }}</p></div>
      <span class="pl-text-sm pl-text-tertiary">{{ t('匹配模型：{count}', { count }) }}</span>
    </header>

    <p v-if="state.error" class="builder-error" role="alert">{{ t('数据加载失败：{message}', { message: state.error }) }}</p>
    <p v-else-if="state.loading" class="pl-text-sm pl-text-tertiary">{{ t('正在加载 Builder 数据…') }}</p>
    <template v-else>
      <div class="builder-controls">
        <fieldset><legend>{{ t('服务商') }}</legend><label v-for="provider in state.providers" :key="provider.id"><input class="pl-checkbox" type="checkbox" :checked="state.providerIds.includes(provider.id)" @change="toggle(state.providerIds, provider.id)"> {{ providerDisplayName(provider) }}</label></fieldset>
        <fieldset><legend>{{ t('市场') }}</legend><label v-for="market in markets" :key="market"><input class="pl-checkbox" type="checkbox" :checked="state.markets.includes(market)" @change="toggle(state.markets, market)"> {{ market }}</label></fieldset>
        <fieldset><legend>{{ t('供应状态') }}</legend><label v-for="status in ['active', 'restricted', 'deprecated', 'retired', 'unknown'] as const" :key="status"><input class="pl-checkbox" type="checkbox" :checked="state.statuses.includes(status)" @change="toggle(state.statuses, status)"> {{ t(status === 'active' ? '供应中' : status === 'restricted' ? '受限可用' : status === 'deprecated' ? '已弃用' : status === 'retired' ? '已退役' : '未知') }}</label></fieldset>
        <fieldset v-if="state.fields.includes('pricing')" class="builder-currency"><legend>{{ t('价格币种') }}</legend><label v-for="option in currencyOptions" :key="option.value"><input v-model="state.currency" class="pl-radio" type="radio" name="builder-price-currency" :value="option.value"> {{ option.label }}</label></fieldset>
        <fieldset class="builder-fields"><legend>{{ t('包含字段') }}</legend><label v-for="field in BUILDER_FIELDS" :key="field"><input class="pl-checkbox" type="checkbox" :checked="state.fields.includes(field)" @change="toggle(state.fields, field)"> {{ t(labels[field] ?? field) }}</label></fieldset>
      </div>
      <div class="builder-api">
        <h3>{{ t('API 地址') }}</h3>
        <code>{{ apiUrl }}</code>
        <div class="builder-api-actions">
          <button type="button" class="pl-button builder-download-button" @click="downloadJson"><AppIcon name="download" /><span>{{ t('下载 JSON') }}</span></button>
          <CopyButton class="builder-api-copy-button" icon="copy" :value="apiUrl" analytics-kind="api_url" :label="t('复制 API 地址')" :title="t('复制 API 地址')" />
        </div>
      </div>
      <div class="builder-preview-heading"><h3>{{ t('JSON 预览') }}</h3><span class="pl-text-xs pl-text-tertiary">{{ t('Schema：{schema} · 数据生成时间：{time}', { schema: state.schemaVersion, time: state.generatedAt }) }}</span></div>
      <pre ref="previewElement" class="api-codebox builder-preview" :aria-label="t('JSON 预览')" @scroll="updatePreviewScroll"><code><span class="builder-preview-spacer" aria-hidden="true" :style="{ height: `${previewRange.start * previewLineHeight}px` }" /><span v-for="(line, index) in visiblePreviewLines" :key="previewRange.start + index" class="builder-preview-line">{{ line }}</span><span class="builder-preview-spacer" aria-hidden="true" :style="{ height: `${previewBottomSpace}px` }" /></code></pre>
      <p class="pl-text-xs pl-text-tertiary">{{ t('结果按 Provider 和市场分组；价格按来源规则归一到每百万 Token，并保留币种、输入/输出单价和区域、用量档位等条件。') }}</p>
      <p v-if="state.fields.includes('pricing') && state.currency !== 'original'" class="pl-text-xs pl-text-tertiary">{{ t('价格使用参考汇率换算；没有可用汇率的规则保留原币种。汇率仅供参考，不用于结算。') }}</p>
      <p class="pl-text-xs pl-text-tertiary">{{ t('结果只包含当前静态数据中的记录；未知状态不会自动推断为供应中。') }}</p>
    </template>
  </section>
</template>

<style scoped>
.json-builder { display: grid; gap: var(--pl-space-md); padding: var(--pl-space-lg); border: 1px solid var(--pl-border-subtle); border-radius: var(--pl-radius-lg); background: var(--pl-bg-surface); }
.builder-heading { display: flex; align-items: start; justify-content: space-between; gap: var(--pl-space-md); }
.builder-heading h2 { font-size: var(--pl-text-lg); }
.builder-heading p { margin-top: var(--pl-space-xs); color: var(--pl-text-secondary); font-size: var(--pl-text-sm); }
.builder-api { display: grid; grid-template-columns: minmax(0, 1fr) auto; grid-template-rows: auto auto; align-items: center; gap: var(--pl-space-sm) var(--pl-space-md); min-width: 0; padding: var(--pl-space-md); border: 1px solid var(--pl-border-subtle); border-radius: var(--pl-radius-md); }
.builder-api h3 { font-size: var(--pl-text-md); font-weight: var(--pl-weight-semibold); }
.builder-api code { grid-column: 1; min-width: 0; overflow-wrap: anywhere; white-space: normal; color: var(--pl-text-secondary); font-size: var(--pl-text-sm); }
.builder-api-actions { grid-column: 2; grid-row: 1 / 3; display: flex; align-items: center; gap: var(--pl-space-xs); }
.builder-api-actions .builder-download-button { order: 1; }
.builder-api-actions :deep(.builder-api-copy-button) { order: 2; }
.builder-api-actions :deep(.pl-button) { height: 2.5rem; box-sizing: border-box; }
.builder-preview-heading { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: var(--pl-space-xs) var(--pl-space-md); }
.builder-preview-heading h3 { margin: 0; }
.builder-controls { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--pl-space-md); }
fieldset { display: flex; flex-wrap: wrap; gap: var(--pl-space-sm) var(--pl-space-md); min-width: 0; padding: var(--pl-space-md); border: 1px solid var(--pl-border-subtle); border-radius: var(--pl-radius-md); }
legend { padding: 0 var(--pl-space-xs); color: var(--pl-text-secondary); font-size: var(--pl-text-xs); }
fieldset label { display: inline-flex; align-items: center; gap: var(--pl-space-xs); color: var(--pl-text-primary); font-size: var(--pl-text-sm); }
.builder-fields { grid-column: 1 / -1; }
.builder-currency { align-content: start; }
.builder-preview { height: min(34rem, 70vh); min-height: 18rem; max-height: none; white-space: pre; line-height: 1.5rem; overflow-wrap: normal; }
.builder-preview code { display: block; white-space: pre; }
.builder-preview-line, .builder-preview-spacer { display: block; height: 1.5rem; line-height: 1.5rem; }
.builder-error { color: var(--pl-danger); }
@media (max-width: 720px) { .builder-controls { grid-template-columns: 1fr; } .builder-fields, .builder-currency { grid-column: auto; } .builder-heading { flex-direction: column; } .builder-api { grid-template-columns: minmax(0, 1fr); grid-template-rows: auto auto auto; } .builder-api code, .builder-api-actions { grid-column: 1; grid-row: auto; } .builder-api-actions { justify-content: flex-end; } }
</style>
