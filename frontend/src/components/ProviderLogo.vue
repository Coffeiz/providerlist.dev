<script setup lang="ts">
import { computed, ref } from 'vue';
import logoLayouts from '../data/provider-logo-layouts.json';
import logoBrandColors from '../data/provider-logo-brand-colors.json';

const props = withDefaults(defineProps<{
  name: string;
  src?: string | null;
  size?: 'card' | 'detail' | 'inline';
}>(), { size: 'card' });

const failedSrc = ref<string | null>(null);
const safeSrc = computed(() => {
  const value = props.src;
  return typeof value === 'string' && /^\/logos\/providers\/[a-z0-9][a-z0-9.-]*\.svg$/i.test(value)
    ? value
    : null;
});
const logoId = computed(() => safeSrc.value?.split('/').at(-1)?.replace(/\.svg$/i, '') ?? '');
const layout = computed(() => logoLayouts.wordmarks[logoId.value as keyof typeof logoLayouts.wordmarks]);
const markScale = computed(() => logoLayouts.markScale[logoId.value as keyof typeof logoLayouts.markScale] ?? 1);
const isRaster = computed(() => logoLayouts.raster.includes(logoId.value));
const isFullColor = computed(() => logoLayouts.fullColor.includes(logoId.value));
const isImageAsset = computed(() => isRaster.value || isFullColor.value);
const isFramed = computed(() => logoLayouts.framed.includes(logoId.value));
const isWordmark = computed(() => Boolean(layout.value) && !isFramed.value);
const isAvailable = computed(() => safeSrc.value !== null && failedSrc.value !== safeSrc.value);
const markStyle = computed(() => {
  const ratio = isFramed.value ? 1 : layout.value?.aspectRatio ?? 1;
  const height = props.size === 'inline'
    ? (isWordmark.value ? 16 : 18)
    : props.size === 'detail'
      ? (isWordmark.value ? 20 : 88)
      : isWordmark.value ? 20 : 24;
  return {
    '--provider-logo-width': `${height * ratio}px`,
    '--provider-logo-height': `${height}px`,
    '--provider-logo-scale': markScale.value,
    ...(logoBrandColors[logoId.value as keyof typeof logoBrandColors]
      ? { color: logoBrandColors[logoId.value as keyof typeof logoBrandColors] }
      : {}),
    ...(safeSrc.value ? { '--provider-logo-mask': `url("${safeSrc.value}")` } : {}),
  };
});
</script>

<template>
  <span
    class="provider-logo"
    :class="[
      `provider-logo--${size}`,
      { 'provider-logo--wordmark': isWordmark },
    ]"
    aria-hidden="true"
  >
    <img
      v-if="isAvailable && isImageAsset"
      class="provider-logo-mark provider-logo-image"
      :src="safeSrc ?? undefined"
      :style="markStyle"
      alt=""
      @error="failedSrc = safeSrc"
    />
    <span
      v-else-if="isAvailable"
      class="provider-logo-mark provider-logo-mask"
      :style="markStyle"
    ></span>
    <span v-else>{{ name.slice(0, 1) }}</span>
  </span>
</template>

<style scoped>
.provider-logo {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  background: var(--pl-bg-subtle);
  border: 1px solid var(--pl-glass-border);
  color: var(--pl-text-primary);
  overflow: hidden;
}

.provider-logo--card {
  width: 40px;
  height: 40px;
  border-radius: 11px;
  font-size: var(--pl-text-md);
  font-weight: var(--pl-weight-strong);
  letter-spacing: -0.045em;
}

.provider-logo--detail {
  width: 120px;
  height: 120px;
  border-color: var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  color: var(--pl-text-secondary);
  font-size: var(--pl-text-lg);
  font-weight: var(--pl-weight-semibold);
}

.provider-logo--inline {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-semibold);
}

.provider-logo--wordmark {
  width: max-content;
  min-width: 40px;
  background: transparent;
  border-color: transparent;
  overflow: visible;
}

.provider-logo--card.provider-logo--wordmark {
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: var(--pl-bg-subtle);
  border-color: var(--pl-glass-border);
  overflow: hidden;
}

.provider-logo--card.provider-logo--wordmark .provider-logo-mark {
  max-width: 32px;
  max-height: 20px;
}

.provider-logo--detail.provider-logo--wordmark {
  min-width: 48px;
  height: 48px;
}
.provider-logo--inline.provider-logo--wordmark { min-width: 20px; }

.provider-logo-mark {
  display: block;
  flex: 0 0 auto;
  width: var(--provider-logo-width);
  height: var(--provider-logo-height);
  transform: scale(var(--provider-logo-scale, 1));
}

.provider-logo-image { object-fit: contain; }
.provider-logo--inline .provider-logo-mark { max-width: 24px; }

.provider-logo-mask {
  background-color: currentColor;
  -webkit-mask-image: var(--provider-logo-mask);
  mask-image: var(--provider-logo-mask);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  mask-mode: alpha;
}
</style>
