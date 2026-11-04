<script setup lang="ts">
/**
 * 设计系统页。
 *
 * 这是**规范的可视化出口**，不是装饰页：
 * - 读取真实 CSS 变量渲染——改令牌即改这里，不会与实现脱节。
 * - 展示的就是站点在用的那套令牌，没有第二份副本。
 *
 * 分区结构沿用「目录 + 编号章节」的形式：左侧 sticky 目录，右侧主内容。
 * 每一节右���都标注该节的口径（比如 `blur(22px) · 72%`），
 * 让人不用读正文就知道这一节在讲什么。
 */
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { getState } from '../../composables/catalog';
import ApiSection from './components/ApiSection.vue';
import ColorSection from './components/ColorSection.vue';
import ComponentGallerySection from './components/ComponentGallerySection.vue';
import HandoffSection from './components/HandoffSection.vue';
import ScaleSection from './components/ScaleSection.vue';
import SurfaceSection from './components/SurfaceSection.vue';
import TypographySection from './components/TypographySection.vue';
import type { ProviderSummary } from '../../types';
import { t } from '../../i18n';

const state = getState();
const theme = ref<'light' | 'dark'>(
  (localStorage.getItem('pl-theme') as 'light' | 'dark' | null) ?? 'light',
);
const toast = ref('');
const activeSection = ref('design-colors');
let toastTimer: number | undefined;

function setTheme(next: 'light' | 'dark'): void {
  theme.value = next;
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('pl-theme', next);
}

function readToken(token: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

/** 复制令牌声明——点击色卡/语义角色/圆角块都走这里。 */
async function copy(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    showToast('已复制');
  } catch {
    showToast('复制失败，请手动复制');
  }
}

function showToast(message: string): void {
  toast.value = message;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.value = '';
  }, 1800);
}

// ---------------------------------------------------------------------------
// 章节
// ---------------------------------------------------------------------------

const sections = [
  { id: 'design-colors', index: '01', label: '色板' },
  { id: 'design-surfaces', index: '02', label: '表面与玻璃' },
  { id: 'design-type', index: '03', label: '字体排版' },
  { id: 'design-scale', index: '04', label: '间距与圆角' },
  { id: 'design-components', index: '05', label: '组件预览' },
  { id: 'design-api', index: '06', label: 'API 区域' },
  { id: 'design-handoff', index: '07', label: '开发交付' },
];

// ---------------------------------------------------------------------------
// 色板
// ---------------------------------------------------------------------------

interface Swatch {
  readonly name: string;
  readonly token: string;
}

/** 中性阶：表面 3 档 + 墨 3 档。 */
const neutralSwatches: readonly Swatch[] = [
  { name: 'surface-soft', token: '--pl-surface-soft' },
  { name: 'surface-medium', token: '--pl-surface-medium' },
  { name: 'surface-hard', token: '--pl-surface-hard' },
  { name: 'ink-soft', token: '--pl-ink-soft' },
  { name: 'ink-medium', token: '--pl-ink-medium' },
  { name: 'ink-hard', token: '--pl-ink-hard' },
];

/** 状态阶：三条色阶，每条 3 档（弱→中→强）。 */
const statusSwatches: readonly Swatch[] = [
  { name: 'success-soft', token: '--pl-success-soft' },
  { name: 'success-medium', token: '--pl-success-medium' },
  { name: 'success-hard', token: '--pl-success-hard' },
  { name: 'warning-soft', token: '--pl-warning-soft' },
  { name: 'warning-medium', token: '--pl-warning-medium' },
  { name: 'warning-hard', token: '--pl-warning-hard' },
  { name: 'danger-soft', token: '--pl-danger-soft' },
  { name: 'danger-medium', token: '--pl-danger-medium' },
  { name: 'danger-hard', token: '--pl-danger-hard' },
];

/** 语义角色：一个角色一个值，不成组。 */
const semanticRoles: readonly Swatch[] = [
  { name: 'bg-canvas', token: '--pl-bg-canvas' },
  { name: 'bg-surface', token: '--pl-bg-surface' },
  { name: 'bg-subtle', token: '--pl-bg-subtle' },
  { name: 'bg-muted', token: '--pl-bg-muted' },
  { name: 'bg-inverse', token: '--pl-bg-inverse' },
  { name: 'text-primary', token: '--pl-text-primary' },
  { name: 'text-secondary', token: '--pl-text-secondary' },
  { name: 'text-tertiary', token: '--pl-text-tertiary' },
  { name: 'text-inverse', token: '--pl-text-inverse' },
  { name: 'selection-bg', token: '--pl-selection-bg' },
  { name: 'selection-text', token: '--pl-selection-text' },
  { name: 'price-cache', token: '--pl-price-cache' },
  { name: 'price-native', token: '--pl-price-native' },
  { name: 'price-cache-native', token: '--pl-price-cache-native' },
  { name: 'border-subtle', token: '--pl-border-subtle' },
  { name: 'border-strong', token: '--pl-border-strong' },
  { name: 'border-focus', token: '--pl-border-focus' },
];

/**
 * API 区域的组件层令牌。
 *
 * 这组是**组件层**——它消费语义层，不新增颜色，
 * 因此亮暗两套主题共用一份定义（见 styles/tokens.css 第 5 节）。
 */
const apiTokens: readonly Swatch[] = [
  { name: 'api-panel-bg', token: '--pl-api-panel-bg' },
  { name: 'api-panel-border', token: '--pl-api-panel-border' },
  { name: 'api-panel-radius', token: '--pl-api-panel-radius' },
  { name: 'api-panel-padding', token: '--pl-api-panel-padding' },
  { name: 'api-card-bg', token: '--pl-api-card-bg' },
  { name: 'api-card-border', token: '--pl-api-card-border' },
  { name: 'api-card-radius', token: '--pl-api-card-radius' },
  { name: 'api-card-padding', token: '--pl-api-card-padding' },
  { name: 'api-card-gap', token: '--pl-api-card-gap' },
  { name: 'api-card-list-margin', token: '--pl-api-card-list-margin' },
  { name: 'api-path-color', token: '--pl-api-path-color' },
  { name: 'api-path-size', token: '--pl-api-path-size' },
  { name: 'api-code-bg', token: '--pl-api-code-bg' },
  { name: 'api-code-radius', token: '--pl-api-code-radius' },
  { name: 'api-code-padding', token: '--pl-api-code-padding' },
  { name: 'api-code-max-height', token: '--pl-api-code-max-height' },
  { name: 'api-note-border', token: '--pl-api-note-border' },
  { name: 'api-note-radius', token: '--pl-api-note-radius' },
  { name: 'api-note-padding', token: '--pl-api-note-padding' },
];

// ---------------------------------------------------------------------------
// 刻度
// ---------------------------------------------------------------------------

const spacingScale = [
  { name: 'space-xs', token: '--pl-space-xs', px: 4 },
  { name: 'space-sm', token: '--pl-space-sm', px: 8 },
  { name: 'space-md', token: '--pl-space-md', px: 12 },
  { name: 'space-lg', token: '--pl-space-lg', px: 16 },
  { name: 'space-xl', token: '--pl-space-xl', px: 32 },
];

const radiusScale = [
  { name: 'radius-xs', token: '--pl-radius-xs', px: 6 },
  { name: 'radius-sm', token: '--pl-radius-sm', px: 8 },
  { name: 'radius-md', token: '--pl-radius-md', px: 12 },
  { name: 'radius-lg', token: '--pl-radius-lg', px: 17 },
  { name: 'radius-full', token: '--pl-radius-full', px: 9999 },
];

/**
 * 字号体系。
 *
 * 样例用**真实中文文案**而不是 token 名——token 名只能证明「这一档存在」，
 * 中文样例才能让人判断这一档在正文里读起来是什么感觉。
 */
const typeScale = [
  { name: 'text-xs', token: '--pl-text-xs', px: 11, sample: '辅助说明 · 未知' },
  { name: 'text-sm', token: '--pl-text-sm', px: 13, sample: '正文基准 · ¥1.000 / 1M 输入 tokens' },
  { name: 'text-md', token: '--pl-text-md', px: 16, sample: '强调正文 · 模型与能力' },
  { name: 'text-lg', token: '--pl-text-lg', px: 23, sample: '区块标题 · 当前供应' },
  { name: 'text-xl', token: '--pl-text-xl', px: 34, sample: '页面标题 · Provider 目录' },
];

const weightScale = [
  { name: 'weight-regular', token: '--pl-weight-regular', label: '正文' },
  { name: 'weight-medium', token: '--pl-weight-medium', label: '控件与标签' },
  { name: 'weight-semibold', token: '--pl-weight-semibold', label: '区块标题' },
  { name: 'weight-strong', token: '--pl-weight-strong', label: '页面标题' },
  { name: 'weight-bold', token: '--pl-weight-bold', label: '品牌与计数' },
];

// ---------------------------------------------------------------------------
// 组件预览用数据
// ---------------------------------------------------------------------------

/** 预览用的 Provider 摘要——从真实目录里取，取不到就用一份最小样例。 */
const previewProvider = computed<ProviderSummary | null>(() => {
  const real = state.catalog?.providers[0];
  if (real) return real;
  return {
    id: 'demo-provider',
    name: '示例平台',
    aliases: [],
    kind: 'cloud_platform',
    account_markets: ['CN'],
    billing_currencies: ['CNY'],
    model_types: ['chat', 'image', 'video'],
    active_offering_count: 4,
    service_capability_count: 1,
  };
});

// ---------------------------------------------------------------------------
// 目录高亮
// ---------------------------------------------------------------------------

let observer: IntersectionObserver | undefined;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) activeSection.value = visible[0].target.id;
    },
    { rootMargin: '-90px 0px -60% 0px', threshold: 0 },
  );
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  }
});

onUnmounted(() => {
  observer?.disconnect();
  window.clearTimeout(toastTimer);
});

/** 交付区展示语义层与共享组件层变量；原始色阶在色板章节列全。 */
const handoffTokens = [
  '--pl-bg-canvas',
  '--pl-bg-surface',
  '--pl-bg-subtle',
  '--pl-bg-muted',
  '--pl-bg-inverse',
  '--pl-text-primary',
  '--pl-text-secondary',
  '--pl-text-tertiary',
  '--pl-text-inverse',
  '--pl-selection-bg',
  '--pl-selection-text',
  '--pl-border-subtle',
  '--pl-border-strong',
  '--pl-border-focus',
  '--pl-price-cache',
  '--pl-price-native',
  '--pl-price-cache-native',
  '--pl-glass-bg',
  '--pl-glass-bg-strong',
  '--pl-glass-border',
  '--pl-glass-border-strong',
  '--pl-glass-blur',
  '--pl-glass-shadow',
  '--pl-atmosphere',
  '--pl-checkbox-size',
  '--pl-checkbox-radius',
  '--pl-checkbox-bg',
  '--pl-checkbox-border',
  '--pl-checkbox-checked-bg',
  '--pl-checkbox-checked-border',
  '--pl-checkbox-checkmark',
  '--pl-checkbox-focus-shadow',
  '--pl-radio-size',
  '--pl-radio-bg',
  '--pl-radio-border',
  '--pl-radio-dot-size',
  '--pl-radio-checked-border',
  '--pl-radio-dot',
  '--pl-radio-focus-shadow',
];

const cssPayload = computed(() =>
  handoffTokens
    .map((token) => `  ${token}: ${readToken(token)};`)
    .join('\n'),
);
</script>

<template>
  <div class="pl-container design design-scope">
    <div class="design-layout">
      <!-- 目录 -->
      <nav class="design-sidebar" :aria-label="t('设计系统目录')">
        <div class="side-header">
          <span class="side-title">{{ t('目录') }}</span>
          <span class="mono muted">{{ String(sections.length).padStart(2, '0') }}</span>
        </div>
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="nav-link"
          :class="{ active: activeSection === section.id }"
        >
          <span class="nav-index">{{ section.index }}</span>
          <span>{{ t(section.label) }}</span>
        </a>

        <div class="side-divider"></div>

        <div class="side-tuning">
          <div class="side-header">
            <span class="side-title">{{ t('主题') }}</span>
          </div>
          <div class="seg">
            <button
              type="button"
              :class="{ selected: theme === 'light' }"
              @click="setTheme('light')"
            >
              {{ t('亮色') }}
            </button>
            <button
              type="button"
              :class="{ selected: theme === 'dark' }"
              @click="setTheme('dark')"
            >
              {{ t('暗色') }}
            </button>
          </div>
          <p class="side-note">
            {{ t('本页读取真实 CSS 变量渲染。改') }} <code class="pl-code">tokens.css</code>
            {{ t('即改这里，不会与实现脱节。') }}
          </p>
        </div>
      </nav>

      <main class="design-main">
        <div class="design-intro">
          <div>
            <h1>{{ t('设计令牌') }}</h1>
            <p class="description">
              {{ t('ProviderList v1.3 · 全卡片、灰阶、轻毛玻璃。所有变量可直接复制与复用。') }}
            </p>
          </div>
          <span class="preview-info mono">LIGHT / DARK · ZH / EN · CSS VARS</span>
        </div>

        <ColorSection :neutral-swatches="neutralSwatches" :status-swatches="statusSwatches" :semantic-roles="semanticRoles" :read-token="readToken" :copy="copy" />
        <SurfaceSection  />
        <TypographySection :type-scale="typeScale" :weight-scale="weightScale" :read-token="readToken" />
        <ScaleSection :spacing-scale="spacingScale" :radius-scale="radiusScale" :read-token="readToken" :copy="copy" />
        <ComponentGallerySection :preview-provider="previewProvider" />
        <ApiSection :api-tokens="apiTokens" :read-token="readToken" :copy="copy" />
        <HandoffSection :css-payload="cssPayload" :copy="copy" />
      </main>
    </div>

    <div v-if="toast" class="design-toast" role="status">{{ toast }}</div>
  </div>
</template>

<style>

.design-scope {
  padding-top: var(--pl-space-lg);
  padding-bottom: var(--pl-space-xl);
}
.design-scope .design-layout {
  display: grid;
  grid-template-columns: 206px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}
.design-scope /* ---------- 目录 ---------- */
.design-sidebar {
  position: sticky;
  top: calc(var(--pl-header-height) + var(--pl-topbar-offset) + 12px);
  padding: 17px;
  border-radius: var(--pl-radius-lg);
  background: var(--pl-glass-bg-strong);
  backdrop-filter: var(--pl-glass-blur);
  -webkit-backdrop-filter: var(--pl-glass-blur);
  border: 1px solid var(--pl-glass-border);
  box-shadow: var(--pl-glass-shadow);
}
.design-scope .side-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 2px 6px;
}
.design-scope .side-title {
  font-size: var(--pl-text-xs);
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-weight: var(--pl-weight-bold);
  color: var(--pl-text-tertiary);
}
.design-scope .nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 35px;
  border-radius: var(--pl-radius-md);
  padding: 0 10px;
  margin: 3px 0;
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-medium);
  transition: background var(--pl-duration-fast) var(--pl-ease-standard), color var(--pl-duration-fast) var(--pl-ease-standard);
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
.design-scope .nav-link:hover {
  background: var(--pl-bg-subtle);
  color: var(--pl-text-primary);
  text-decoration: none;
}
}
.design-scope .nav-link.active {
  background: var(--pl-bg-subtle);
  color: var(--pl-text-primary);
  font-weight: var(--pl-weight-bold);
}
.design-scope .nav-index {
  font-family: var(--pl-font-mono);
  font-size: 10px;
  opacity: 0.56;
  width: 18px;
}
.design-scope .side-divider {
  height: 1px;
  background: var(--pl-border-subtle);
  margin: 19px 0 15px;
}
.design-scope .side-note {
  margin-top: 13px;
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  line-height: var(--pl-leading-relaxed);
  padding: 11px;
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  background: var(--pl-bg-subtle);
}
.design-scope /* 分段控件 —— 主题切换用。选中态是实底，不是描边。 */
.seg {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: var(--pl-radius-full);
  background: var(--pl-bg-muted);
  border: 1px solid var(--pl-border-subtle);
}
.design-scope .seg button {
  flex: 1;
  min-height: 30px;
  border: 0;
  border-radius: var(--pl-radius-full);
  background: transparent;
  color: var(--pl-text-tertiary);
  font-family: inherit;
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-medium);
  cursor: pointer;
  transition: background var(--pl-duration-fast) var(--pl-ease-standard), color var(--pl-duration-fast) var(--pl-ease-standard);
}
.design-scope .seg button.selected {
  background: var(--pl-bg-surface);
  color: var(--pl-text-primary);
  box-shadow: var(--pl-shadow-xs);
}
.design-scope /* ---------- 主区 ---------- */
.design-main {
  min-width: 0;
}
.design-scope .design-intro {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 22px;
  padding: 6px 1px 14px;
}
.design-scope .design-intro h1 {
  font-size: 30px;
  font-weight: var(--pl-weight-bold);
  letter-spacing: -0.037em;
}
.design-scope .description {
  color: var(--pl-text-tertiary);
  max-width: 660px;
  margin-top: 8px;
  font-size: 12px;
  line-height: var(--pl-leading-relaxed);
}
.design-scope .preview-info {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  white-space: nowrap;
  margin-bottom: 5px;
}
.design-scope .design-section {
  margin-top: var(--pl-space-xl);
  scroll-margin-top: 104px;
}
.design-scope .section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
  gap: 15px;
  flex-wrap: wrap;
}
.design-scope .section-title h2 {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: var(--pl-text-lg);
  font-weight: var(--pl-weight-bold);
  letter-spacing: -0.03em;
}
.design-scope .section-index {
  font-family: var(--pl-font-mono);
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  font-weight: var(--pl-weight-medium);
}
.design-scope .section-note {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
}
.design-scope .cards {
  display: grid;
  gap: 14px;
  margin-bottom: 14px;
}
.design-scope .cards-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.design-scope .cards-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.design-scope .design-card {
  padding: 18px;
  min-width: 0;
  background: var(--pl-glass-bg-strong);
  backdrop-filter: var(--pl-glass-blur);
  -webkit-backdrop-filter: var(--pl-glass-blur);
  border: 1px solid var(--pl-glass-border);
  border-radius: var(--pl-radius-lg);
  box-shadow: var(--pl-glass-shadow);
}
.design-scope .card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
}
.design-scope .card-head h3 {
  font-size: var(--pl-text-md);
  font-weight: var(--pl-weight-strong);
  letter-spacing: -0.02em;
}
.design-scope .caption {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
}
.design-scope /* ---------- 色板 ---------- */
.swatch-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
}
.design-scope .swatch {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border: 0;
  background: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
}
.design-scope .swatch-color {
  height: 62px;
  width: 100%;
  border-radius: var(--pl-radius-md);
  border: 1px solid rgb(0 0 0 / 8%);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: transform var(--pl-duration-fast) var(--pl-ease-standard), outline-color var(--pl-duration-fast) var(--pl-ease-standard);
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
.design-scope .swatch:hover .swatch-color {
  transform: translateY(-3px);
  outline-color: var(--pl-border-strong);
}
}
.design-scope .swatch-num {
  font-family: var(--pl-font-mono);
  font-size: 10px;
  padding-top: 7px;
  font-weight: var(--pl-weight-bold);
}
.design-scope .swatch-hex {
  font-family: var(--pl-font-mono);
  font-size: 9px;
  color: var(--pl-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.design-scope .semantic-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 9px;
}
.design-scope .semantic {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
  padding: 10px 11px;
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  cursor: pointer;
  background: var(--pl-bg-subtle);
  text-align: left;
  font-family: inherit;
  transition: border-color var(--pl-duration-fast) var(--pl-ease-standard), background var(--pl-duration-fast) var(--pl-ease-standard);
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
.design-scope .semantic:hover {
  border-color: var(--pl-border-strong);
  background: var(--pl-bg-muted);
}
}
.design-scope .semantic-chip {
  width: 30px;
  height: 30px;
  border: 1px solid var(--pl-border-strong);
  border-radius: var(--pl-radius-md);
  flex: none;
}
.design-scope .semantic-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.design-scope .semantic-name {
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-semibold);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.design-scope .semantic-value {
  font-size: 10px;
  color: var(--pl-text-tertiary);
  font-family: var(--pl-font-mono);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.design-scope /* ---------- 表面舞台 ---------- */
.surface-stage {
  background: radial-gradient(ellipse 210px 140px at 9% 10%, rgb(150 152 158 / 12%), transparent 88%), radial-gradient(ellipse 230px 170px at 92% 82%, rgb(100 102 112 / 12%), transparent 90%), var(--pl-bg-muted);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  height: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  overflow: hidden;
  position: relative;
}
.design-scope .surface-demo {
  width: 100%;
  max-width: 280px;
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-lg);
  padding: 15px;
  box-shadow: var(--pl-glass-shadow);
}
.design-scope .surface-demo strong {
  font-size: var(--pl-text-sm);
  font-weight: var(--pl-weight-strong);
}
.design-scope .surface-demo p {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  margin-top: 6px;
}
.design-scope .mini-line {
  display: block;
  margin-top: 10px;
  width: 58px;
  height: 6px;
  border-radius: 7px;
  background: var(--pl-border-strong);
}
.design-scope .surface-desc {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-top: 12px;
}
.design-scope .surface-desc strong {
  font-size: var(--pl-text-xs);
}
.design-scope .surface-desc span {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
}
.design-scope /* ---------- 排版 ---------- */
.type-list {
  display: flex;
  flex-direction: column;
}
.design-scope .type-spec {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 14px;
  border-bottom: 1px solid var(--pl-border-subtle);
  padding: 12px 0;
}
.design-scope .type-spec:last-child {
  border: 0;
}
.design-scope .type-meta {
  width: 86px;
  flex: none;
  font-family: var(--pl-font-mono);
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
}
.design-scope .type-visual {
  flex: 1;
  min-width: 0;
  letter-spacing: -0.02em;
}
.design-scope .type-value {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  text-align: right;
  flex: none;
}
.design-scope .rules {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--pl-border-subtle);
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  line-height: var(--pl-leading-relaxed);
}
.design-scope .rules p {
  margin-bottom: 4px;
}
.design-scope .rules strong {
  color: var(--pl-text-primary);
}
.design-scope /* ---------- 刻度 ---------- */
.space-list {
  display: flex;
  flex-direction: column;
}
.design-scope .space-line {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 12px;
  font-size: var(--pl-text-xs);
}
.design-scope .space-line:first-child {
  margin-top: 0;
}
.design-scope .space-code {
  font-family: var(--pl-font-mono);
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  width: 62px;
}
.design-scope .space-bar {
  height: 11px;
  border-radius: 3px;
  background: var(--pl-bg-inverse);
  opacity: 0.68;
  min-width: 4px;
}
.design-scope .space-px {
  margin-left: auto;
  color: var(--pl-text-tertiary);
  font-family: var(--pl-font-mono);
  font-size: var(--pl-text-xs);
}
.design-scope .radii-row {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}
.design-scope .radius-tile {
  text-align: center;
  cursor: pointer;
  border: 1px solid var(--pl-border-subtle);
  background: var(--pl-bg-subtle);
  border-radius: var(--pl-radius-md);
  padding: 14px 4px 10px;
  font-family: inherit;
  transition: border-color var(--pl-duration-fast) var(--pl-ease-standard), background var(--pl-duration-fast) var(--pl-ease-standard);
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
.design-scope .radius-tile:hover {
  border-color: var(--pl-border-strong);
  background: var(--pl-bg-muted);
}
}
.design-scope .radius-shape {
  display: block;
  margin: 0 auto 10px;
  background: var(--pl-bg-inverse);
  width: 41px;
  height: 37px;
  opacity: 0.78;
}
.design-scope .radius-label {
  display: block;
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-semibold);
}
.design-scope .radius-px {
  display: block;
  font-family: var(--pl-font-mono);
  font-size: 10px;
  color: var(--pl-text-tertiary);
}
.design-scope /* ---------- 组件预览 ---------- */
.state-list {
  display: flex;
  flex-direction: column;
}
.design-scope .state-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9px;
  padding: 10px 0;
  border-bottom: 1px solid var(--pl-border-subtle);
}
.design-scope .state-row:last-child {
  border: 0;
}
.design-scope .state-label {
  display: block;
  font-size: var(--pl-text-sm);
  font-weight: var(--pl-weight-medium);
}
.design-scope .state-sub {
  display: block;
  font-size: 10px;
  color: var(--pl-text-tertiary);
  margin-top: 2px;
}
.design-scope /* 等宽文本的三种处理：端点值 / 标识符 / 代码片段 */
.mono-list {
  display: flex;
  flex-direction: column;
}
.design-scope .mono-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 9px;
  padding: 10px 0;
  border-bottom: 1px solid var(--pl-border-subtle);
}
.design-scope .mono-row:last-child {
  border: 0;
}
.design-scope .mono-label {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  font-weight: var(--pl-weight-medium);
  flex-shrink: 0;
}
.design-scope /* 按钮预览：与站内真实按钮同一套类，不重画 */
.button-preview {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
.design-scope .field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 12px;
}
.design-scope .field-label {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  font-weight: var(--pl-weight-medium);
}
.design-scope .design-input {
  border: 1px solid var(--pl-border-strong);
  border-radius: var(--pl-radius-md);
  background: var(--pl-bg-surface);
  min-height: 38px;
  padding: 0 12px;
  width: 100%;
  font-family: inherit;
  font-size: var(--pl-text-xs);
  color: var(--pl-text-primary);
  transition: border-color var(--pl-duration-fast) var(--pl-ease-standard), box-shadow var(--pl-duration-fast) var(--pl-ease-standard);
}
.design-scope .design-input:focus {
  outline: none;
  border-color: var(--pl-border-focus);
  box-shadow: var(--pl-control-focus-shadow);
}
.design-scope .design-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 21px;
}
.design-scope .design-chip {
  border: 1px solid var(--pl-border-subtle);
  padding: 4px 8px;
  border-radius: var(--pl-radius-xs);
  background: var(--pl-bg-subtle);
  font-family: var(--pl-font-mono);
  font-size: 10px;
  color: var(--pl-text-tertiary);
}
.design-scope .money {
  font-family: var(--pl-font-mono);
  font-size: 21px;
  font-weight: var(--pl-weight-strong);
  letter-spacing: -0.045em;
}
.design-scope .money-note {
  margin-top: 4px;
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
}
.design-scope .money-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid var(--pl-border-subtle);
  font-size: var(--pl-text-xs);
}
.design-scope .money-native {
  padding-inline-start: var(--pl-space-xs);
  border-inline-start: 1px solid var(--pl-border-subtle);
  color: var(--pl-price-native);
}
.design-scope .money-native-cache {
  color: var(--pl-price-cache-native);
}
.design-scope .money-tag {
  padding: 4px 8px;
  border-radius: var(--pl-radius-full);
  border: 1px solid var(--pl-border-strong);
  font-size: 10px;
  font-weight: var(--pl-weight-semibold);
  color: var(--pl-text-tertiary);
}
.design-scope .preview-foot {
  margin-top: 21px;
  padding-top: 12px;
  border-top: 1px solid var(--pl-border-subtle);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
  line-height: var(--pl-leading-relaxed);
}
.design-scope /* ---------- 交付 ---------- */
.design-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 12px;
  font-family: inherit;
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-semibold);
  color: var(--pl-text-primary);
  background: var(--pl-glass-bg);
  border: 1px solid var(--pl-border-strong);
  border-radius: var(--pl-radius-md);
  cursor: pointer;
  transition: background var(--pl-duration-fast) var(--pl-ease-standard), transform var(--pl-duration-fast) var(--pl-ease-standard);
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
.design-scope .design-btn:hover {
  background: var(--pl-bg-subtle);
}
}
.design-scope .design-btn:active {
  transform: translateY(1px);
}
.design-scope .design-code {
  margin: 0;
  overflow: auto;
  padding: 14px;
  font-family: var(--pl-font-mono);
  font-size: 11px;
  line-height: 1.75;
  max-height: 300px;
  tab-size: 2;
  color: var(--pl-text-primary);
  background: var(--pl-bg-muted);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  white-space: pre;
}
.design-scope .design-toast {
  position: fixed;
  bottom: 23px;
  left: 50%;
  transform: translate(-50%, 10px);
  background: var(--pl-bg-inverse);
  color: var(--pl-text-inverse);
  border-radius: var(--pl-radius-md);
  padding: 11px 14px;
  font-size: var(--pl-text-xs);
  box-shadow: var(--pl-glass-shadow-hover);
  z-index: var(--pl-z-toast);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--pl-duration-base) var(--pl-ease-standard), transform var(--pl-duration-base) var(--pl-ease-standard);
}
.design-scope .design-toast {
  opacity: 1;
  transform: translate(-50%, 0);
}
.design-scope /* ---------- API 区域令牌清单 ---------- */
.api-token-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}
.design-scope .api-token {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  min-width: 0;
  padding: 7px 10px;
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-sm);
  background: var(--pl-bg-subtle);
  cursor: pointer;
  text-align: left;
  transition: border-color var(--pl-duration-fast) var(--pl-ease-standard);
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
.design-scope .api-token:hover {
  border-color: var(--pl-border-strong);
}
}
.design-scope .api-token-name {
  font-family: var(--pl-font-mono);
  font-size: 11px;
  color: var(--pl-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.design-scope .api-token-value {
  font-size: 10px;
  color: var(--pl-text-tertiary);
  white-space: nowrap;
}
.design-scope /* ---------- 响应式 ---------- */
@media (max-width: 900px) {
  .design-layout { grid-template-columns: minmax(0, 1fr);
}
.design-sidebar {
  position: relative;
  top: auto;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 9px;
  overflow-x: auto;
  white-space: nowrap;
}
.side-header, .side-divider, .side-tuning {
  display: none;
}
.nav-link {
  margin: 0;
  flex: none;
  min-height: 32px;
  padding: 0 10px;
}
.cards-2, .cards-3 {
  grid-template-columns: minmax(0, 1fr);
}
.semantic-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.api-token-list {
  grid-template-columns: minmax(0, 1fr);
}
}
@media (max-width: 680px) {
.design-scope .design-intro { padding: 13px 3px 2px;
  flex-direction: column;
  align-items: flex-start;
}
.design-scope .design-intro h1 {
  font-size: var(--pl-text-lg);
}
.design-scope .preview-info {
  display: none;
}
.design-scope .section-title h2 {
  font-size: var(--pl-text-md);
}
.design-scope .swatch-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.design-scope .radii-row {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 5px;
}
.design-scope .radius-shape {
  width: 27px;
  height: 27px;
}
.design-scope .radius-tile {
  padding: 10px 3px 7px;
}
.design-scope .type-meta {
  width: 58px;
}
.design-scope .type-value {
  width: 55px;
  font-size: 10px;
}
}

</style>
