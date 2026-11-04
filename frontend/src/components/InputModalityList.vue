<script setup lang="ts">
import AppIcon from './AppIcon.vue';
import type { IconName } from './icons.ts';
import { t } from '../i18n';

const props = defineProps<{ modalities: readonly string[] }>();

function iconFor(modality: string): IconName {
  const normalized = modality.toLowerCase();
  if (normalized === 'text' || normalized.startsWith('text/')) return 'modalityText';
  if (normalized === 'image' || normalized.startsWith('image/')) return 'modalityImage';
  if (normalized === 'audio' || normalized.startsWith('audio/')) return 'modalityAudio';
  if (normalized === 'video' || normalized.startsWith('video/')) return 'modalityVideo';
  return 'modalityFile';
}

function labelFor(modality: string): string {
  const normalized = modality.toLowerCase();
  if (normalized === 'text' || normalized.startsWith('text/')) return t('文本输入');
  if (normalized === 'image' || normalized.startsWith('image/')) return t('图像输入');
  if (normalized === 'audio' || normalized.startsWith('audio/')) return t('音频输入');
  if (normalized === 'video' || normalized.startsWith('video/')) return t('视频输入');
  if (normalized === 'file' || normalized.startsWith('application/')) return t('文件输入');
  return modality;
}
</script>

<template>
  <div v-if="props.modalities.length" class="detail-input-modalities" :aria-label="t('输入类型')">
    <span
      v-for="modality in props.modalities"
      :key="modality"
      class="detail-input-modality"
      :title="`${labelFor(modality)} · ${modality}`"
      :aria-label="`${labelFor(modality)} · ${modality}`"
    >
      <AppIcon :name="iconFor(modality)" />
    </span>
  </div>
</template>
