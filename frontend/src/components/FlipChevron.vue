<script setup lang="ts">
/**
 * 开合箭头。
 *
 * 收起朝右、展开转为朝下——全站通用语义，不需要每个调用方传方向；
 * 个别需要「收起朝下、展开朝上」的场景才显式传 `direction="up-down"`。
 *
 * 尺寸用 `em` 跟着字号走，因此不需要自己的尺寸令牌；
 * 颜色继承 `currentColor`。
 */
withDefaults(
  defineProps<{
    /** 弹层是否展开。 */
    open?: boolean;
    direction?: 'right-down' | 'up-down';
  }>(),
  { open: false, direction: 'right-down' },
);
</script>

<template>
  <svg
    class="pl-flip-chevron"
    :class="{ 'is-open': open }"
    :data-dir="direction === 'up-down' ? 'up-down' : undefined"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M2 3.5l3 3 3-3" />
  </svg>
</template>

<style scoped>
.pl-flip-chevron {
  flex-shrink: 0;
  width: 0.85em;
  height: 0.85em;
  color: var(--pl-text-tertiary);
  transform: rotate(-90deg);
  transition: transform var(--pl-duration-fast) var(--pl-ease-standard);
}

.pl-flip-chevron.is-open {
  transform: rotate(0deg);
}

/* 上-下方向：收起朝下，展开朝上。 */
.pl-flip-chevron[data-dir='up-down'] {
  transform: none;
}

.pl-flip-chevron[data-dir='up-down'].is-open {
  transform: rotate(180deg);
}
</style>
