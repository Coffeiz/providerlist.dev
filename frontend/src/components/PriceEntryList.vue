<script setup lang="ts">
import { computed } from 'vue';
import type { PriceEntryView } from '../types/price-entry';
import { t } from '../i18n';

const props = defineProps<{ entries: readonly PriceEntryView[] }>();
const displayGroups = computed(() => {
  const groups: { id: string; qualifier?: string; entries: PriceEntryView[] }[] = [];
  const byQualifier = new Map<string, (typeof groups)[number]>();
  for (const entry of props.entries) {
    const qualifier = entry.qualifier;
    const group = qualifier ? byQualifier.get(qualifier) : undefined;
    if (group) group.entries.push(entry);
    else {
      const next = { id: entry.id, ...(qualifier ? { qualifier } : {}), entries: [entry] };
      groups.push(next);
      if (qualifier) byQualifier.set(qualifier, next);
    }
  }
  return groups;
});
</script>

<template>
  <div class="pl-price-entry-list">
    <div v-for="group in displayGroups" :key="group.id" class="pl-price-entry-item">
      <div class="pl-price-entry-line">
        <span v-for="entry in group.entries" :key="entry.id" class="pl-price-entry-pair-item">
          <span v-if="entry.label" class="pl-price-entry-label" :class="{ 'pl-text-price-cache': entry.cache }">{{ entry.label }}</span>
          <del v-if="entry.originalValue" class="detail-price-original" :class="{ 'pl-text-price-cache': entry.cache }">{{ entry.originalValue }}</del>
          <span v-if="entry.value" :class="entry.unsupported ? 'pl-text-tertiary' : entry.cache ? 'pl-text-price-cache' : undefined" :title="entry.unsupported ? t('官方资料明确标注该计费项不支持；未列出的价格仍为未知。') : undefined">{{ entry.value }}</span>
          <span v-if="entry.nativeValue" class="pl-price-native detail-price-native-value" :class="{ 'pl-price-native-cache': entry.cache }">{{ entry.nativeValue }}</span>
        </span>
      </div>
      <div v-if="group.qualifier" class="detail-price-qualifier">{{ group.qualifier }}</div>
    </div>
  </div>
</template>
