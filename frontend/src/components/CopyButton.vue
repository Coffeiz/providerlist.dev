<script setup lang="ts">
/**
 * 复制按钮。
 *
 * 两种形态：
 * - 文字按钮：带可见文案，适合「复制 Base URL」这类需要说清复制对象的地方；
 * - 图标按钮（`variant="icon"`）：只有图形，适合端点卡片右上角这种窄位置。
 *
 * 两种形态都必须在**图标之外**给出可访问名称——
 * 图标按钮靠 `aria-label`，状态变化靠屏幕阅读器可读的实时区域。
 */
import { computed, ref } from 'vue';

import AppIcon from './AppIcon.vue';
import { useRoute } from 'vue-router';
import { trackAnalyticsEvent } from '../composables/analytics';
import { t } from '../i18n';

const props = withDefaults(
  defineProps<{
    value: string;
    /** 按钮可见文案；缺省时用通用的「复制」。图标形态不使用。 */
    label?: string;
    variant?: 'default' | 'ghost' | 'primary' | 'icon';
    /** 悬浮提示；用于说明「复制的是什么」。 */
    title?: string;
    /** 文字形态下可选的前置图标。 */
    icon?: 'copy';
    analyticsKind?: 'provider_id' | 'model_id' | 'base_url' | 'api_url' | 'share_link';
  }>(),
  { label: undefined, variant: 'default', title: undefined, icon: undefined },
);

const route = useRoute();
const copied = ref(false);
const failed = ref(false);
let timer: number | undefined;

const visibleLabel = computed(() => props.label ?? t('复制'));

/**
 * 无障碍名称。
 *
 * 调用方习惯把可见文案写成「复制 XXX」，这时再拼一次前缀会变成
 * 「复制复制 XXX」——朗读出来很怪。所以已经以「复制」开头就不再加前缀。
 * 判断用的是**当前语言**下的「复制」，否则英文模式会拼成「复制Copy XXX」。
 */
const ariaLabel = computed(() => {
  const word = t('复制');
  const label = visibleLabel.value;
  return label.startsWith(word) ? label : `${word}${label}`;
});

/** 图标形态下没有可见文案，状态变化只能靠实时区域播报。 */
const statusText = computed(() => {
  if (copied.value) return t('已复制');
  if (failed.value) return t('复制失败');
  return '';
});

async function copy(): Promise<void> {
  try {
    await navigator.clipboard.writeText(props.value);
    const page = String(route.name ?? 'unknown');
    if (props.analyticsKind === 'provider_id' || props.analyticsKind === 'model_id') {
      trackAnalyticsEvent({ type: 'id_copy', object_type: props.analyticsKind === 'provider_id' ? 'provider' : 'model', object_id: props.value, page });
    } else if (props.analyticsKind) {
      trackAnalyticsEvent({ type: 'url_copy', url_type: props.analyticsKind, page });
    }
    copied.value = true;
    failed.value = false;
  } catch {
    failed.value = true;
    copied.value = false;
  }
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    copied.value = false;
    failed.value = false;
  }, 2000);
}
</script>

<template>
  <button
    v-if="variant === 'icon'"
    type="button"
    class="pl-icon-button copy-button"
    :class="{ 'copy-button--failed': failed }"
    :aria-label="ariaLabel"
    :title="title ?? ariaLabel"
    @click="copy"
  >
    <AppIcon :name="copied ? 'check' : 'copy'" />
    <span class="pl-sr-only" role="status" aria-live="polite">{{ statusText }}</span>
  </button>

  <button
    v-else
    type="button"
    class="pl-button copy-button"
    :class="{
      'pl-button-ghost': variant === 'ghost',
      'pl-button-primary': variant === 'primary',
    }"
    :aria-label="ariaLabel"
    :title="title"
    @click="copy"
  >
    <AppIcon v-if="props.icon" :name="copied ? 'check' : props.icon" />
    <span class="copy-button__label-stack">
      <span class="copy-button__label-reserve" aria-hidden="true">{{ visibleLabel }}</span>
      <span class="copy-button__label-reserve" aria-hidden="true">{{ t('复制失败') }}</span>
      <span
        v-if="copied"
        class="copy-button__label-current"
        :class="variant === 'primary' ? 'copy-button__label--inverse' : 'pl-text-success'"
      >{{ t('已复制') }}</span>
      <span v-else-if="failed" class="copy-button__label-current pl-text-danger">{{ t('复制失败') }}</span>
      <span v-else class="copy-button__label-current">{{ visibleLabel }}</span>
    </span>
  </button>
</template>

<style scoped>
.copy-button--failed {
  color: var(--pl-status-danger);
}

.copy-button__label--inverse {
  color: var(--pl-text-inverse);
}

.copy-button__label-stack {
  display: grid;
}

.copy-button__label-reserve,
.copy-button__label-current {
  grid-area: 1 / 1;
}

.copy-button__label-reserve {
  visibility: hidden;
}
</style>
