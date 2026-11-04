<script lang="ts">
/**
 * 弹层里的一项。
 *
 * 放在普通 `<script>` 块里导出，页面可以直接引用这个类型；
 * 类型会被编译期擦除，不产生运行时依赖。
 */
export interface SelectOption {
  value: string;
  label: string;
}
</script>

<script setup lang="ts">
/**
 * 列表弹层选择器。
 *
 * 为什么不用原生 `<select>`：原生下拉是操作系统控件，
 * 在暗色主题与玻璃背景里样式不可控，也拿不到「展开时箭头翻转」这类反馈。
 * 这里自绘一层：触发器仍是 `<button>`，弹层是 `role="listbox"`，
 * 键盘可以完整操作（上下移动、Home/End、Enter 选中、Esc 关闭）。
 *
 * 三种形态对应三处用法：
 * - `form`：表单里的独立选择器（默认）；
 * - `compact`：筛选条 chip 内的选择器（只有文字 + 箭头，不带边框）；
 * - `header`：顶栏里的紧凑选择器。
 *
 * 弹层用 Teleport 挂到 `body` 并按触发器位置定位——
 * 留在原位会被祖先的 `overflow` 裁掉。
 * 下方空间不够时向上翻转（flip），始终留在视口内。
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue';

import FlipChevron from './FlipChevron.vue';
import AppIcon from './AppIcon.vue';
import type { IconName } from './icons.ts';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: readonly SelectOption[];
    /** 没有命中项时的占位文案。 */
    placeholder?: string;
    /**
     * 字段标签，渲染在触发器里（筛选条上那种「模型类型 全部」）。
     *
     * 标签放在**触发器内部**而不是外面——这样触发器本身就是整个 chip，
     * 弹层才能和它左对齐、宽度也不短于它。
     */
    label?: string;
    /** 触发器值前的图标。 */
    leadingIcon?: IconName;
    disabled?: boolean;
    variant?: 'form' | 'compact' | 'header';
    /** 触发器的可访问名称。 */
    ariaLabel?: string;
    /** 触发器元素 id，供外部 `<label for>` 关联。 */
    id?: string;
  }>(),
  {
    placeholder: '',
    label: undefined,
    disabled: false,
    variant: 'form',
    ariaLabel: undefined,
    id: undefined,
  },
);

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

/** 弹层与触发器之间的间距（px）。 */
const POPUP_GAP = 6;

const listId = useId();
const triggerRef = ref<HTMLButtonElement | null>(null);
const rootRef = ref<HTMLElement | null>(null);
const listRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const activeIndex = ref(-1);
/**
 * 弹层样式。
 *
 * 初始就带 `position: fixed`：弹层一旦被固定定位，宽度就按内容收缩，
 * 量到的是真实宽度；否则它在定位前还是普通块级元素，量出来的是整页宽，
 * 拿这个宽度钳位会把弹层顶到视口左边缘。
 */
const popupStyle = ref<Record<string, string>>({ position: 'fixed' });

const selectedLabel = computed(
  () => props.options.find((option) => option.value === props.modelValue)?.label ?? props.placeholder,
);

function optionId(index: number): string {
  return `${listId}-option-${index}`;
}

// ---- 定位 -----------------------------------------------------------------

/**
 * 按触发器位置给弹层定坐标。
 *
 * 下方放不下就翻到上方；左右也钳在视口内，保证弹层永远可见。
 *
 * 前提：弹层必须**已经固定定位**——否则它量到的宽度是整页宽，
 * 钳位会把弹层推到视口左边，与按钮错开。
 */
function updatePosition(): void {
  const anchor = rootRef.value;
  const list = listRef.value;
  if (!anchor || !list) return;

  const rect = anchor.getBoundingClientRect();
  // Measure at a known viewport position. Otherwise a fixed popup near the
  // right edge is shrink-to-fit before we can calculate its leftward position.
  const maxWidth = Math.max(0, window.innerWidth - POPUP_GAP * 2);
  list.style.left = `${POPUP_GAP}px`;
  list.style.right = 'auto';
  list.style.width = 'max-content';
  list.style.maxWidth = `${maxWidth}px`;
  const width = list.offsetWidth;
  // 清掉上次计算出的高度限制，避免视口变大后弹层仍被旧高度卡住。
  list.style.maxHeight = '';
  const height = list.offsetHeight;
  const header = document.querySelector<HTMLElement>('.app-header');
  const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
  const isHeaderControl = Boolean(anchor.closest('.app-header'));
  const topBoundary = Math.max(POPUP_GAP, headerBottom + POPUP_GAP);
  const belowTop = isHeaderControl
    ? rect.bottom + POPUP_GAP
    : Math.max(rect.bottom + POPUP_GAP, topBoundary);
  const roomBelow = Math.max(0, window.innerHeight - belowTop - POPUP_GAP);
  const roomAbove = Math.max(0, rect.top - topBoundary - POPUP_GAP);
  const flip = roomBelow < height && roomAbove > roomBelow;
  const availableHeight = flip ? roomAbove : roomBelow;
  const visibleHeight = Math.min(height, availableHeight);
  const top = flip ? rect.top - visibleHeight - POPUP_GAP : belowTop;
  const rightSpace = window.innerWidth - rect.left - POPUP_GAP;
  const left = rightSpace < width
    ? Math.max(POPUP_GAP, window.innerWidth - width - POPUP_GAP)
    : rect.left;

  popupStyle.value = {
    position: 'fixed',
    left: `${left}px`,
    right: 'auto',
    width: 'max-content',
    maxWidth: `${maxWidth}px`,
    top: `${top}px`,
    minWidth: `${rect.width}px`,
    maxHeight: `${availableHeight}px`,
  };
  // 滚动事件里直接同步 DOM，避免等 Vue 下一轮渲染后弹层才追上触发器。
  Object.assign(list.style, popupStyle.value);
}

// ---- 开关与选中 ------------------------------------------------------------

async function openList(): Promise<void> {
  if (props.disabled) return;
  isOpen.value = true;
  activeIndex.value = props.options.findIndex((option) => option.value === props.modelValue);
  await nextTick();
  updatePosition();
  focusActive();
}

function closeList(): void {
  isOpen.value = false;
  triggerRef.value?.focus();
}

function toggle(): void {
  if (props.disabled) return;
  if (isOpen.value) closeList();
  else void openList();
}

function select(value: string): void {
  emit('update:modelValue', value);
  closeList();
}

// ---- 键盘 -----------------------------------------------------------------

/** 把焦点移到当前高亮项。 */
function focusActive(): void {
  const list = listRef.value;
  if (!list) return;
  const items = list.querySelectorAll<HTMLElement>('[role="option"]');
  items[activeIndex.value]?.focus();
}

function onTriggerKeydown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    void openList();
    return;
  }
  if (event.key === 'Escape') {
    isOpen.value = false;
  }
}

function onListKeydown(event: KeyboardEvent): void {
  const count = props.options.length;
  if (count === 0) return;

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      activeIndex.value = (activeIndex.value + 1) % count;
      focusActive();
      break;
    case 'ArrowUp':
      event.preventDefault();
      activeIndex.value = (activeIndex.value - 1 + count) % count;
      focusActive();
      break;
    case 'Home':
      event.preventDefault();
      activeIndex.value = 0;
      focusActive();
      break;
    case 'End':
      event.preventDefault();
      activeIndex.value = count - 1;
      focusActive();
      break;
    case 'Enter':
    case ' ': {
      event.preventDefault();
      const option = props.options[activeIndex.value];
      if (option) select(option.value);
      break;
    }
    case 'Escape':
      event.preventDefault();
      closeList();
      break;
    case 'Tab':
      isOpen.value = false;
      break;
    default:
      break;
  }
}

// ---- 外部交互 -------------------------------------------------------------

function onDocumentMouseDown(event: MouseEvent): void {
  if (!isOpen.value) return;
  const target = event.target as Node | null;
  if (!target) return;
  if (rootRef.value?.contains(target) || listRef.value?.contains(target)) return;
  isOpen.value = false;
}

function onViewportChange(): void {
  if (!isOpen.value) return;

  const anchor = rootRef.value;
  const rect = anchor?.getBoundingClientRect();
  if (!anchor || !rect) return;

  const header = document.querySelector<HTMLElement>('.app-header');
  const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
  const isHeaderControl = Boolean(anchor.closest('.app-header'));
  const isBehindHeader = !isHeaderControl && rect.top < headerBottom;
  const isOutsideViewport =
    rect.bottom <= 0 ||
    rect.top >= window.innerHeight ||
    rect.right <= 0 ||
    rect.left >= window.innerWidth;

  if (isBehindHeader || isOutsideViewport) {
    isOpen.value = false;
    return;
  }

  updatePosition();
}

let visualViewport: VisualViewport | null = null;

onMounted(() => {
  visualViewport = window.visualViewport;
  document.addEventListener('mousedown', onDocumentMouseDown);
  window.addEventListener('resize', onViewportChange);
  window.addEventListener('scroll', onViewportChange, { capture: true, passive: true });
  visualViewport?.addEventListener('resize', onViewportChange);
  visualViewport?.addEventListener('scroll', onViewportChange, { passive: true });
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocumentMouseDown);
  window.removeEventListener('resize', onViewportChange);
  window.removeEventListener('scroll', onViewportChange, true);
  visualViewport?.removeEventListener('resize', onViewportChange);
  visualViewport?.removeEventListener('scroll', onViewportChange);
});

// 选项集变了（筛选结果增减）就把高亮项夹回有效范围。
watch(
  () => props.options.length,
  (length) => {
    if (activeIndex.value >= length) activeIndex.value = length - 1;
  },
);
</script>

<template>
  <div ref="rootRef" class="pl-select" :class="`pl-select--${variant}`">
    <button
      ref="triggerRef"
      type="button"
      class="pl-select-trigger"
      :class="{ 'is-open': isOpen }"
      :id="id"
      :disabled="disabled"
      :aria-label="ariaLabel"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :aria-controls="isOpen ? listId : undefined"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      <span v-if="label" class="pl-select-label">{{ label }}</span>
      <AppIcon v-if="leadingIcon" :name="leadingIcon" class="pl-select-leading-icon" />
      <span class="pl-select-value">{{ selectedLabel }}</span>
      <FlipChevron :open="isOpen" class="pl-select-chevron" />
    </button>

    <Teleport to="body">
      <div
        v-if="isOpen"
        :id="listId"
        ref="listRef"
        class="pl-select-popup"
        :class="`pl-select-popup--${variant}`"
        :style="popupStyle"
        role="listbox"
        :aria-label="ariaLabel"
        @keydown="onListKeydown"
      >
        <button
          v-for="(option, index) in options"
          :key="option.value"
          type="button"
          class="pl-select-item"
          :class="{ 'is-active': option.value === modelValue }"
          role="option"
          :id="optionId(index)"
          :aria-selected="option.value === modelValue"
          tabindex="-1"
          @mousedown.prevent
          @click="select(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.pl-select {
  position: relative;
  display: inline-flex;
  min-width: 0;
}

.pl-select--form {
  display: flex;
  width: 100%;
}

.pl-select-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--pl-space-sm);
  min-width: 0;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    border-color var(--pl-duration-fast) var(--pl-ease-standard),
    background var(--pl-duration-fast) var(--pl-ease-standard),
    color var(--pl-duration-fast) var(--pl-ease-standard);
}

.pl-select-trigger:disabled {
  color: var(--pl-text-disabled);
  cursor: not-allowed;
  opacity: 0.7;
}

.pl-select-trigger:focus-visible {
  outline: 2px solid var(--pl-border-focus);
  outline-offset: 2px;
}

/* 值与箭头是两个独立子元素：整行宽的控件里，箭头因此钉在最右端；
   内容宽的 chip 里，它们自然紧挨着。 */
.pl-select-value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pl-select-label {
  flex-shrink: 0;
}

.pl-select-chevron {
  color: var(--pl-text-tertiary);
}

.pl-select-leading-icon {
  flex: none;
  width: 15px;
  height: 15px;
  color: var(--pl-text-secondary);
}

/* ---------- form：表单里的独立选择器 ---------- */

.pl-select--form .pl-select-trigger {
  width: 100%;
  padding: var(--pl-space-sm) var(--pl-space-md);
  border-radius: var(--pl-radius-md);
  border: 1px solid var(--pl-control-border);
  background: var(--pl-control-bg);
  color: var(--pl-text-primary);
  font-size: var(--pl-text-sm);
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .pl-select--form .pl-select-trigger:hover:not(:disabled) {
  border-color: var(--pl-glass-border-strong);
}
}

.pl-select--form .pl-select-trigger.is-open {
  border-color: var(--pl-glass-border-strong);
  background: var(--pl-control-bg-hover);
}

/* ---------- compact：筛选条上的 chip ---------- */

/* 触发器**就是**整个 chip（标签 + 值 + 箭头）——
   弹层以它为锚点，左边缘与它对齐，宽度也不短于它。 */
.pl-select--compact .pl-select-trigger {
  height: 34px;
  padding: 0 var(--pl-space-sm) 0 var(--pl-space-md);
  border-radius: var(--pl-radius-sm);
  border: 1px solid var(--pl-glass-border);
  background: var(--pl-glass-bg);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
  white-space: nowrap;
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .pl-select--compact .pl-select-trigger:hover:not(:disabled) {
  border-color: var(--pl-glass-border-strong);
  background: var(--pl-glass-bg-strong);
}
}

.pl-select--compact .pl-select-label {
  color: var(--pl-text-tertiary);
  font-weight: var(--pl-weight-regular);
}

.pl-select--compact .pl-select-value {
  max-width: 150px;
  color: var(--pl-text-primary);
  font-weight: var(--pl-weight-medium);
}

/* ---------- header：顶栏里的紧凑选择器 ---------- */

.pl-select--header .pl-select-trigger {
  height: 33px;
  padding: 0 var(--pl-space-sm);
  border-radius: var(--pl-radius-sm);
  border: 1px solid var(--pl-glass-border);
  background: var(--pl-glass-bg-strong);
  color: var(--pl-text-primary);
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-medium);
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .pl-select--header .pl-select-trigger:hover:not(:disabled) {
  border-color: var(--pl-glass-border-strong);
}
}

/* ---------- 弹层 ---------- */

/* 浮在最上层的实体：强玻璃 + 投影。 */
.pl-select-popup {
  z-index: var(--pl-z-overlay);
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-xs);
  max-height: calc(100dvh - var(--pl-space-xl));
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: var(--pl-space-xs);
  border: 1px solid var(--pl-glass-border);
  border-radius: var(--pl-radius-md);
  background: var(--pl-glass-bg-strong);
  box-shadow: var(--pl-glass-shadow);
  backdrop-filter: var(--pl-glass-blur);
  -webkit-backdrop-filter: var(--pl-glass-blur);
  /* 焦点在弹层里的选项上，容器不画焦点环——否则会套出一圈浏览器默认蓝环。 */
  outline: none;
}

.pl-select-popup--header {
  z-index: calc(var(--pl-z-header) + 1);
}

.pl-select-item {
  display: flex;
  align-items: center;
  gap: var(--pl-space-sm);
  width: 100%;
  padding: var(--pl-space-xs) var(--pl-space-sm);
  border: 0;
  border-radius: var(--pl-radius-sm);
  background: transparent;
  color: var(--pl-text-primary);
  font-family: inherit;
  font-size: var(--pl-text-sm);
  text-align: left;
  cursor: pointer;
  transition:
    background var(--pl-duration-fast) var(--pl-ease-standard),
    color var(--pl-duration-fast) var(--pl-ease-standard);
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .pl-select-item:hover {
  background: var(--pl-bg-subtle);
}
}

.pl-select-item:focus-visible {
  outline: 2px solid var(--pl-border-focus);
  outline-offset: -2px;
}

/* 当前选中项：实一点的底 + 稍重的字重，不靠颜色单独表达。 */
.pl-select-item.is-active {
  background: var(--pl-bg-muted);
  font-weight: var(--pl-weight-medium);
}

.pl-select-popup--compact .pl-select-item,
.pl-select-popup--header .pl-select-item {
  font-size: var(--pl-text-xs);
}

@media (max-width: 768px) {
  .pl-select-popup {
    max-width: calc(100vw - 2rem);
    max-height: calc(100vh - 4rem);
    max-height: calc(100dvh - max(4rem, env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px)));
    -webkit-overflow-scrolling: touch;
  }

  .pl-select-popup .pl-select-item {
    min-height: 44px;
    padding: var(--pl-space-sm) var(--pl-space-md);
    font-size: var(--pl-text-sm);
  }
}
</style>
