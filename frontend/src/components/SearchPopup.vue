<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { trackAnalyticsEvent, trackSearch } from '../composables/analytics';
import AppIcon from './AppIcon.vue';
import FlipChevron from './FlipChevron.vue';
import ProviderLogo from './ProviderLogo.vue';
import { getProviders, getSearchIndex, getState, loadSearchIndex } from '../composables/catalog';
import { providerDisplayName, providerKindLabel } from '../composables/format';
import { t } from '../i18n';
import type { SearchIndexEntry } from '../types';

const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{
  close: [];
  select: [href: string];
}>();

const state = getState();
watch(() => props.open, (open) => { if (open) void loadSearchIndex(); }, { immediate: true });

const query = ref('');
const inputRef = ref<HTMLInputElement | null>(null);
const activeIndex = ref(-1);
const hoveredIndex = ref<number | null>(null);
const hoveredGroup = ref<'providers' | 'models' | null>(null);
const backdropPointerDown = ref(false);
const PROVIDER_TOP_K = 5;
const MODEL_TOP_K = 5;
const collapsedGroups = ref({ providers: false, models: false });
const showAllGroups = ref({ providers: false, models: false });
const viewportTop = ref(0);
const viewportHeight = ref(0);
const allProviders = computed(() => getProviders());
const providersById = computed(() => new Map(allProviders.value.map((provider) => [provider.id, provider])));
const overlayStyle = computed(() => ({
  '--search-visual-viewport-top': `${viewportTop.value}px`,
  '--search-visual-viewport-height': viewportHeight.value > 0 ? `${viewportHeight.value}px` : '100dvh',
}));

type PageScrollLock = {
  bodyOverflow: string;
  rootOverflow: string;
};

let pageScrollLock: PageScrollLock | undefined;
let lastTouchY: number | undefined;

function updateVisualViewport(): void {
  const viewport = window.visualViewport;
  viewportTop.value = viewport?.offsetTop ?? 0;
  viewportHeight.value = viewport?.height ?? window.innerHeight;
}

function lockPageScroll(): void {
  if (pageScrollLock) return;
  const body = document.body.style;
  pageScrollLock = {
    bodyOverflow: body.overflow,
    rootOverflow: document.documentElement.style.overflow,
  };
  body.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

function unlockPageScroll(): void {
  const lock = pageScrollLock;
  if (!lock) return;
  const body = document.body.style;
  body.overflow = lock.bodyOverflow;
  document.documentElement.style.overflow = lock.rootOverflow;
  pageScrollLock = undefined;
}

function removeVisualViewportListeners(): void {
  window.removeEventListener('resize', updateVisualViewport);
  window.visualViewport?.removeEventListener('resize', updateVisualViewport);
  window.visualViewport?.removeEventListener('scroll', updateVisualViewport);
}

function onOverlayTouchStart(event: TouchEvent): void {
  lastTouchY = event.touches[0]?.clientY;
}

function onOverlayTouchMove(event: TouchEvent): void {
  const touchY = event.touches[0]?.clientY;
  if (touchY === undefined) return;

  const target = event.target;
  const scrollRegion = target instanceof Element
    ? target.closest<HTMLElement>('.pl-search-popup-results')
    : null;
  const deltaY = (lastTouchY ?? touchY) - touchY;
  lastTouchY = touchY;

  // iOS Safari can chain native modal scrolling to the document with the
  // keyboard open. Keep the gesture in the dialog and scroll only its results.
  event.preventDefault();
  if (scrollRegion) scrollRegion.scrollTop += deltaY;
}

function onOverlayTouchEnd(): void {
  lastTouchY = undefined;
}

function focusSearchInput(): void {
  inputRef.value?.focus({ preventScroll: true });
}

watch(() => props.open, (open) => {
  if (open) {
    lockPageScroll();
    updateVisualViewport();
    window.addEventListener('resize', updateVisualViewport);
    window.visualViewport?.addEventListener('resize', updateVisualViewport);
    window.visualViewport?.addEventListener('scroll', updateVisualViewport);
    return;
  }
  removeVisualViewportListeners();
  unlockPageScroll();
  viewportTop.value = 0;
  viewportHeight.value = 0;
}, { immediate: true });

onBeforeUnmount(() => {
  removeVisualViewportListeners();
  unlockPageScroll();
});

const rankedResults = computed(() => {
  const keyword = query.value.trim().toLocaleLowerCase();
  const entries = getSearchIndex();
  const terms = keyword.split(/\s+/).filter(Boolean);
  const matches = keyword
    ? entries.flatMap((entry) => {
        const provider = providersById.value.get(entry.provider_id);
        const providerText = [provider?.name ?? '', provider?.id ?? '', ...(provider?.aliases ?? [])]
          .join(' ')
          .toLocaleLowerCase();
        const modelId = entry.kind === 'offering' ? (entry.keywords[0] ?? '').toLocaleLowerCase() : '';
        const searchableText = [entry.title, entry.subtitle ?? '', ...entry.keywords]
          .join(' ')
          .toLocaleLowerCase();
        if (!terms.every((term) => searchableText.includes(term) || providerText.includes(term))) return [];

        const providerHits = terms.filter((term) => providerText.includes(term)).length;
        const modelHits = entry.kind === 'offering' ? terms.filter((term) => modelId.includes(term)).length : 0;
        const providerMatches = providerHits === terms.length;
        const modelIdMatches = entry.kind === 'offering' && modelHits === terms.length;
        const textMatches = terms.every((term) => searchableText.includes(term));
        const rank = entry.kind === 'offering'
          ? (providerHits > 0 && modelHits > 0 ? 1_000 + modelHits * 10 + providerHits : modelIdMatches ? 800 : providerMatches ? 500 : 200)
          : (providerMatches ? 900 : textMatches ? 400 : 100);
        return [{ entry, rank }];
      })
    : entries.map((entry) => ({ entry, rank: 0 }));

  const sortResults = (kind: SearchIndexEntry['kind']) => matches
    .filter(({ entry }) => entry.kind === kind)
    .sort((left, right) => right.rank - left.rank || left.entry.title.localeCompare(right.entry.title));

  return {
    providers: sortResults('provider').map(({ entry }) => entry),
    models: sortResults('offering').map(({ entry }) => entry),
  };
});

const recordSearch = trackSearch('global', () => rankedResults.value.providers.length + rankedResults.value.models.length);
watch(query, recordSearch);
watch(() => props.open, (open) => { if (!open) recordSearch(''); });

const displayGroups = computed(() => {
  const groups = [
    {
      key: 'providers' as const,
      kind: 'provider' as const,
      label: t('服务商'),
      topK: PROVIDER_TOP_K,
      all: rankedResults.value.providers,
      collapsed: collapsedGroups.value.providers,
      showAll: showAllGroups.value.providers,
    },
    {
      key: 'models' as const,
      kind: 'offering' as const,
      label: t('模型'),
      topK: MODEL_TOP_K,
      all: rankedResults.value.models,
      collapsed: collapsedGroups.value.models,
      showAll: showAllGroups.value.models,
    },
  ].filter((group) => group.all.length > 0);

  let offset = 0;
  return groups.map((group) => {
    const entries = group.collapsed
      ? []
      : group.showAll
        ? group.all
        : group.all.slice(0, group.topK);
    const display = { ...group, entries, offset };
    offset += entries.length;
    return display;
  });
});

const visibleResults = computed(() => displayGroups.value.flatMap((group) => group.entries));

watch(
  () => props.open,
  async (open) => {
    if (!open) return;
    query.value = '';
    activeIndex.value = -1;
    hoveredIndex.value = null;
    hoveredGroup.value = null;
    collapsedGroups.value = { providers: false, models: false };
    showAllGroups.value = { providers: false, models: false };
    await nextTick();
    focusSearchInput();
  },
);

watch(visibleResults, () => {
  activeIndex.value = -1;
  hoveredIndex.value = null;
  hoveredGroup.value = null;
});

function selectResult(entry: SearchIndexEntry | undefined): void {
  if (!entry) return;
  if (entry.kind === 'provider') trackAnalyticsEvent({ type: 'search_result_open', result_type: 'provider', provider_id: entry.provider_id });
  else if (entry.keywords[0]) trackAnalyticsEvent({ type: 'search_result_open', result_type: 'model', provider_id: entry.provider_id, model_id: entry.keywords[0] });
  emit('select', entry.href);
}

function clearQuery(): void {
  query.value = '';
  focusSearchInput();
}

function resultTitle(entry: SearchIndexEntry): string {
  if (entry.kind === 'offering') return entry.keywords[0] ?? entry.title;
  if (entry.kind === 'provider') {
    const provider = providersById.value.get(entry.provider_id);
    if (provider) return providerDisplayName(provider);
  }
  return entry.title;
}

function resultSubtitle(entry: SearchIndexEntry): string {
  const provider = providersById.value.get(entry.provider_id);
  const providerName = provider ? providerDisplayName(provider) : entry.provider_id;
  if (entry.kind === 'provider') return provider ? providerKindLabel(provider.kind) : entry.subtitle ?? entry.provider_id;
  const sourceProviderName = provider?.name ?? entry.provider_id;
  const serviceName = (entry.subtitle ?? '').replace(`${sourceProviderName} · `, '');
  return `${providerName} · ${serviceName}`;
}

function toggleGroup(group: 'providers' | 'models'): void {
  collapsedGroups.value[group] = !collapsedGroups.value[group];
  activeIndex.value = -1;
}

function toggleShowAll(group: 'providers' | 'models'): void {
  showAllGroups.value[group] = !showAllGroups.value[group];
  activeIndex.value = -1;
}

function onOverlayPointerDown(event: PointerEvent): void {
  backdropPointerDown.value = event.target === event.currentTarget;
}

function onOverlayClick(event: MouseEvent): void {
  const clickedBackdrop = event.target === event.currentTarget;
  if (clickedBackdrop && backdropPointerDown.value) emit('close');
  backdropPointerDown.value = false;
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    event.preventDefault();
    emit('close');
    return;
  }
  if (visibleResults.value.length === 0) return;
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    hoveredIndex.value = null;
    activeIndex.value = activeIndex.value < 0 ? 0 : (activeIndex.value + 1) % visibleResults.value.length;
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    hoveredIndex.value = null;
    activeIndex.value = activeIndex.value <= 0 ? visibleResults.value.length - 1 : activeIndex.value - 1;
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (activeIndex.value >= 0) selectResult(visibleResults.value[activeIndex.value]);
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="search-popup">
      <div
        v-if="props.open"
        class="pl-search-overlay"
        :style="overlayStyle"
        @pointerdown="onOverlayPointerDown"
        @pointercancel="backdropPointerDown = false"
        @click="onOverlayClick"
        @keydown="onKeydown"
        @touchstart.passive="onOverlayTouchStart"
        @touchmove="onOverlayTouchMove"
        @touchend="onOverlayTouchEnd"
        @touchcancel="onOverlayTouchEnd"
      >
        <section
          class="pl-search-dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="t('搜索 Provider')"
        >
          <div class="pl-search-popup-field">
            <AppIcon name="search" />
            <input
              ref="inputRef"
              v-model="query"
              type="search"
              :placeholder="t('搜索 Provider、模型 ID、别名或能力…')"
              autocomplete="off"
              spellcheck="false"
            />
            <button
              v-if="query"
              type="button"
              class="pl-icon-button"
              :aria-label="t('清除搜索内容')"
              @mousedown.prevent
              @click="clearQuery"
            >
              <AppIcon name="close" />
            </button>
            <button
              type="button"
              class="pl-icon-button"
              :aria-label="t('关闭搜索')"
              @click="emit('close')"
            >
              <AppIcon name="close" />
            </button>
          </div>

          <div class="pl-search-popup-results">
            <p v-if="state.searchLoading" class="pl-search-empty" role="status">{{ t('正在加载搜索索引…') }}</p>
            <p v-else-if="state.searchLoadError" class="pl-search-empty" role="alert">{{ t('搜索索引加载失败') }}：{{ state.searchLoadError }}</p>
            <section v-for="group in displayGroups" :key="group.key" class="pl-search-result-group" :aria-label="group.label">
              <button
                type="button"
                class="pl-search-result-group-toggle"
                :class="{ 'is-hovered': hoveredGroup === group.key }"
                :aria-expanded="!group.collapsed"
                @pointermove="hoveredGroup = group.key"
                @pointerleave="hoveredGroup = null"
                @click="toggleGroup(group.key)"
              >
                <span>{{ group.label }}</span>
                <small>{{ t('显示 Top {topK} · 共 {count} 项', { topK: group.topK, count: group.all.length }) }}</small>
                <FlipChevron :open="!group.collapsed" />
              </button>
              <div v-if="!group.collapsed" role="listbox" :aria-label="group.label">
                <button
                  v-for="(entry, index) in group.entries"
                  :key="`${entry.kind}:${entry.provider_id}:${entry.id ?? ''}`"
                  type="button"
                  class="pl-search-result"
                  :class="{
                    'is-active': activeIndex === group.offset + index,
                    'is-hovered': hoveredIndex === group.offset + index,
                  }"
                  role="option"
                  :aria-selected="activeIndex === group.offset + index"
                  @pointermove="activeIndex = -1; hoveredIndex = group.offset + index"
                  @pointerleave="hoveredIndex = null"
                  @click="selectResult(entry)"
                >
                  <ProviderLogo
                    :name="providersById.get(entry.provider_id)?.name ?? entry.provider_id"
                    :src="providersById.get(entry.provider_id)?.logo"
                    size="inline"
                  />
                  <span class="pl-search-result-copy">
                    <strong>{{ resultTitle(entry) }}</strong>
                    <small>{{ resultSubtitle(entry) }}</small>
                  </span>
                  <AppIcon name="arrowRight" />
                </button>
                <button
                  v-if="group.all.length > group.topK && !group.showAll"
                  type="button"
                  class="pl-search-result-more"
                  @click="toggleShowAll(group.key)"
                >
                  {{ t('显示剩余 {count} 项', { count: group.all.length - group.topK }) }}
                </button>
                <button
                  v-else-if="group.showAll && group.all.length > group.topK"
                  type="button"
                  class="pl-search-result-more"
                  @click="toggleShowAll(group.key)"
                >
                  {{ t('收起到 Top {topK}', { topK: group.topK }) }}
                </button>
              </div>
            </section>
            <p v-if="!state.searchLoading && !state.searchLoadError && displayGroups.length === 0" class="pl-search-empty">
              {{ t('没有找到匹配的 Provider') }}
            </p>
          </div>

          <footer class="pl-search-popup-hint">
            <span>{{ t('方向键选择') }}</span>
            <span>↵ {{ t('打开 Provider') }}</span>
            <span>Esc {{ t('关闭') }}</span>
          </footer>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.pl-search-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--pl-z-modal);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: calc(12vh + var(--search-visual-viewport-top, 0px)) var(--pl-space-lg) var(--pl-space-lg);
  background: var(--pl-bg-overlay);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.pl-search-dialog {
  width: min(100%, 640px);
  max-height: min(72vh, 640px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--pl-glass-border-strong);
  border-radius: var(--pl-radius-lg);
  background: var(--pl-glass-bg-strong);
  box-shadow: var(--pl-glass-shadow);
  backdrop-filter: var(--pl-glass-blur);
  -webkit-backdrop-filter: var(--pl-glass-blur);
}

.pl-search-popup-field {
  display: flex;
  align-items: center;
  gap: var(--pl-space-md);
  min-height: 64px;
  padding: 0 var(--pl-space-lg);
  border-bottom: 1px solid var(--pl-border-subtle);
  color: var(--pl-text-tertiary);
}
.pl-search-popup-field > .pl-icon { width: 20px; height: 20px; }
.pl-search-popup-field input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  color: var(--pl-text-primary);
  font: inherit;
  font-size: var(--pl-text-md);
}
.pl-search-popup-field input:focus {
  outline: none;
}
.pl-search-popup-field input::placeholder { color: var(--pl-text-tertiary); }
.pl-search-popup-field input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}
.pl-search-popup-field .pl-icon-button { font-size: var(--pl-text-md); }

.pl-search-popup-results {
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: var(--pl-space-sm);
  overscroll-behavior: contain;
}

.pl-search-result-group + .pl-search-result-group { margin-top: 1px; }
.pl-search-result-group-toggle {
  display: flex;
  align-items: center;
  gap: var(--pl-space-sm);
  width: 100%;
  min-height: 40px;
  padding: var(--pl-space-sm) var(--pl-space-md);
  border: 0;
  border-radius: var(--pl-radius-sm);
  background: transparent;
  color: var(--pl-text-primary);
  text-align: left;
  cursor: pointer;
}
.pl-search-result-group-toggle.is-hovered { background: var(--pl-bg-subtle); }
.pl-search-result-group-toggle:focus-visible {
  outline: 2px solid var(--pl-border-focus);
  outline-offset: 2px;
}
.pl-search-result-group-toggle > span { font-size: var(--pl-text-sm); font-weight: var(--pl-weight-semibold); }
.pl-search-result-group-toggle > small { flex: 1; color: var(--pl-text-tertiary); font-size: var(--pl-text-xs); }

.pl-search-result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--pl-space-md);
  width: 100%;
  padding: var(--pl-space-md);
  border: 1px solid transparent;
  border-radius: var(--pl-radius-md);
  background: transparent;
  color: var(--pl-text-primary);
  text-align: left;
  cursor: pointer;
  transition: background var(--pl-duration-fast) var(--pl-ease-standard), border-color var(--pl-duration-fast) var(--pl-ease-standard);
}
.pl-search-result.is-hovered,
.pl-search-result.is-active {
  border-color: var(--pl-border-subtle);
  background: var(--pl-bg-subtle);
}
.pl-search-result-copy { display: grid; flex: 1; gap: var(--pl-space-xs); min-width: 0; }
.pl-search-result-copy strong { overflow-wrap: anywhere; font-size: var(--pl-text-sm); }
.pl-search-result-copy small { color: var(--pl-text-tertiary); font-size: var(--pl-text-xs); line-height: 1.45; overflow-wrap: anywhere; }
.pl-search-result > .pl-icon { color: var(--pl-text-tertiary); }
.pl-search-result-more { width: 100%; padding: var(--pl-space-sm); border: 0; background: transparent; color: var(--pl-text-secondary); font: inherit; font-size: var(--pl-text-xs); cursor: pointer; }
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .pl-search-result-more:hover { color: var(--pl-text-primary); }
}
.pl-search-empty { padding: var(--pl-space-xl) var(--pl-space-md); color: var(--pl-text-tertiary); text-align: center; font-size: var(--pl-text-sm); }
.pl-search-dialog ::selection {
  background: var(--pl-selection-bg);
  color: var(--pl-selection-text);
}
.pl-search-popup-hint { display: flex; flex-wrap: wrap; gap: var(--pl-space-md); padding: var(--pl-space-md) var(--pl-space-lg); border-top: 1px solid var(--pl-border-subtle); color: var(--pl-text-tertiary); font-size: var(--pl-text-xs); }

.search-popup-enter-active,
.search-popup-leave-active { transition: opacity var(--pl-duration-fast) var(--pl-ease-standard); }
.search-popup-enter-active .pl-search-dialog,
.search-popup-leave-active .pl-search-dialog { transition: transform var(--pl-duration-fast) var(--pl-ease-standard); }
.search-popup-enter-from,
.search-popup-leave-to { opacity: 0; }
.search-popup-enter-from .pl-search-dialog,
.search-popup-leave-to .pl-search-dialog { transform: translateY(-8px) scale(.99); }

@media (max-width: 768px) {
  .pl-search-overlay { padding: calc(var(--search-visual-viewport-top, 0px) + var(--pl-space-md)) var(--pl-space-md) var(--pl-space-md); }
  .pl-search-dialog { max-height: calc(var(--search-visual-viewport-height, 100dvh) - 2 * var(--pl-space-md)); }
  .pl-search-popup-field { min-height: 58px; padding: 0 var(--pl-space-md); }
}

@media (prefers-reduced-motion: reduce) {
  .search-popup-enter-active,
  .search-popup-leave-active,
  .search-popup-enter-active .pl-search-dialog,
  .search-popup-leave-active .pl-search-dialog { transition-duration: 0.01ms; }
}
</style>
