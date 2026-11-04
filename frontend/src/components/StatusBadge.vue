<script setup lang="ts">
/**
 * 状态徽章。
 * 状态**不只靠颜色表达**——始终带文案，tone 只影响配色。
 */
withDefaults(
  defineProps<{
    label: string;
    tone?: 'success' | 'warning' | 'danger' | 'neutral' | 'inverse';
    detail?: string;
  }>(),
  { tone: 'neutral', detail: undefined },
);
</script>

<template>
  <span
    class="pl-badge"
    :class="`pl-badge-${tone}`"
    :title="detail"
  >
    <span class="status-dot" aria-hidden="true" />
    {{ label }}
  </span>
</template>

<style scoped>
.status-dot {
  width: 5px;
  height: 5px;
  border-radius: var(--pl-radius-full);
  background: currentColor;
  flex-shrink: 0;
}
</style>
