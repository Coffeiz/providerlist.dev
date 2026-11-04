<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import AppIcon from './components/AppIcon.vue';
import SearchPopup from './components/SearchPopup.vue';
import SelectPopup from './components/SelectPopup.vue';
import TableViewportControls from './components/TableViewportControls.vue';
import { getState, loadCatalog } from './composables/catalog';
import { formatDateTime, formatUtcTimestamp } from './composables/format';
import { t } from './i18n';
import { DISPLAY_CURRENCIES, LANGUAGES, applyTheme, prefs, type ThemeMode } from './composables/prefs';
import { applyRouteMetadata } from './router';

const route = useRoute();
const router = useRouter();
const state = getState();
const isNotFound = computed(() => route.name === 'not-found');
const searchOpen = ref(false);
const mobileNavOpen = ref(false);
const themeLabels: Record<ThemeMode, string> = {
  system: '自适应',
  light: '亮色',
  dark: '暗色',
};
const themeModeLabel = computed(() => t(themeLabels[prefs.theme]));
const themeIcon = computed(() =>
  prefs.theme === 'system' ? 'computer' : prefs.theme === 'light' ? 'sun' : 'moon',
);
let systemThemeQuery: MediaQueryList | null = null;

onMounted(async () => {
  applyTheme(prefs.theme);
  systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  systemThemeQuery.addEventListener('change', onSystemThemeChange);
  await loadCatalog();
});

onBeforeUnmount(() => {
  systemThemeQuery?.removeEventListener('change', onSystemThemeChange);
});

// 语言一变，浏览器标签页的标题也要跟着变。
watch(
  () => prefs.lang,
  () => applyRouteMetadata(route),
);

watch(
  () => route.path,
  () => { mobileNavOpen.value = false; },
);

function onSystemThemeChange(): void {
  if (prefs.theme === 'system') applyTheme('system');
}

function cycleTheme(): void {
  const modes: readonly ThemeMode[] = ['system', 'light', 'dark'];
  const currentIndex = modes.indexOf(prefs.theme);
  prefs.theme = modes[(currentIndex + 1) % modes.length] ?? 'system';
  applyTheme(prefs.theme);
}

function openSearch(): void {
  mobileNavOpen.value = false;
  searchOpen.value = true;
}

function selectSearchResult(href: string): void {
  searchOpen.value = false;
  void router.push(href);
}

function onGlobalKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && mobileNavOpen.value) {
    mobileNavOpen.value = false;
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    void openSearch();
  }
}

onMounted(() => window.addEventListener('keydown', onGlobalKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', onGlobalKeydown));

const navItems = [
  { to: '/providers', label: '服务商' },
  { to: '/models', label: '模型' },
  { to: '/capabilities', label: '服务能力' },
  { to: '/docs/api', label: '数据 API' },
];

const currencyLabels: Record<string, string> = {
  CNY: 'CNY ¥',
  USD: 'USD $',
  EUR: 'EUR €',
};

/** 顶栏两个选择器的选项。 */
const languageOptions = computed(() =>
  LANGUAGES.map((lang) => ({ value: lang.id, label: lang.label })),
);

const currencyOptions = computed(() =>
  DISPLAY_CURRENCIES.map((code) => ({ value: code, label: currencyLabels[code] ?? code })),
);
</script>

<template>
  <div class="app-shell" :class="{ 'is-not-found': isNotFound }">
    <a v-if="!isNotFound" class="skip-link" href="#main">{{ t('跳到主内容') }}</a>

    <header v-if="!isNotFound" class="app-header">
      <div class="app-header-inner">
        <RouterLink to="/providers" class="brand" :aria-label="t('ProviderList 首页')">
          <span class="brand-text">ProviderList</span>
        </RouterLink>

        <span class="app-header-divider" aria-hidden="true"></span>

        <nav class="app-nav" :aria-label="t('主导航')">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="app-nav-link"
            :class="{ 'is-active': route.path.startsWith(item.to) }"
          >
            {{ t(item.label) }}
          </RouterLink>
        </nav>

        <div class="app-header-actions">
          <div class="app-select">
            <SelectPopup
              v-model="prefs.lang"
              variant="header"
              leading-icon="translate2"
              :options="languageOptions"
              :aria-label="t('语言')"
            />
          </div>

          <div class="app-select">
            <SelectPopup
              v-model="prefs.currency"
              variant="header"
              :options="currencyOptions"
              :aria-label="t('展示币种')"
            />
          </div>

          <button
            type="button"
            class="pl-button app-header-icon-action app-search-toggle"
            :aria-label="t('搜索 Provider')"
            :title="t('搜索 Provider')"
            @click="openSearch"
          >
            <AppIcon name="search" />
          </button>

          <button
            type="button"
            class="pl-button app-header-icon-action"
            :aria-label="t('主题模式：{mode}，点击切换', { mode: themeModeLabel })"
            :title="t('主题模式：{mode}，点击切换', { mode: themeModeLabel })"
            @click="cycleTheme"
          >
            <AppIcon :name="themeIcon" />
          </button>

          <a class="app-icon-btn app-github-btn" href="https://github.com/Coffeiz/providerlist.dev" target="_blank" rel="noopener noreferrer" :aria-label="t('GitHub 仓库')" :title="t('GitHub 仓库')">
            <AppIcon name="github" />
          </a>

          <button
            type="button"
            class="pl-button app-header-icon-action app-mobile-nav-toggle"
            :aria-label="t('主导航')"
            aria-controls="mobile-navigation"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <AppIcon :name="mobileNavOpen ? 'close' : 'menu'" />
          </button>
        </div>
      </div>
    </header>

    <div v-if="!isNotFound" v-show="mobileNavOpen" class="app-mobile-menu-layer" :aria-hidden="!mobileNavOpen" :inert="!mobileNavOpen">
      <nav id="mobile-navigation" class="app-mobile-menu" :aria-label="t('主导航')">
        <div class="app-mobile-menu-links">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="app-mobile-menu-link"
            :class="{ 'is-active': route.path.startsWith(item.to) }"
          >
            {{ t(item.label) }}
          </RouterLink>
        </div>

        <div class="app-mobile-menu-controls">
          <SelectPopup
            v-model="prefs.lang"
            variant="form"
            leading-icon="translate2"
            :options="languageOptions"
            :aria-label="t('语言')"
          />

          <SelectPopup
            v-model="prefs.currency"
            variant="form"
            :options="currencyOptions"
            :aria-label="t('展示币种')"
          />

          <a class="pl-button app-mobile-menu-action" href="https://github.com/Coffeiz/providerlist.dev" target="_blank" rel="noopener noreferrer">
            <AppIcon name="github" />
            <span>{{ t('GitHub') }}</span>
          </a>

          <button
            type="button"
            class="pl-button app-mobile-menu-action"
            :aria-label="t('主题模式：{mode}，点击切换', { mode: themeModeLabel })"
            @click="cycleTheme"
          >
            <AppIcon :name="themeIcon" />
            <span>{{ themeModeLabel }}</span>
          </button>
        </div>
      </nav>
    </div>

    <main id="main" class="app-main" :inert="mobileNavOpen" :aria-busy="!state.loaded || state.pageLoading">
      <div v-if="!state.loaded || state.pageLoading" class="pl-route-progress" role="status">
        <span class="pl-sr-only">{{ t('正在加载页面…') }}</span>
      </div>
      <RouterView />
    </main>

    <TableViewportControls v-if="!isNotFound" />

    <SearchPopup
      v-if="!isNotFound"
      :open="searchOpen"
      @close="searchOpen = false"
      @select="selectSearchResult"
    />

    <footer v-if="!isNotFound" class="app-footer" :inert="mobileNavOpen">
      <div class="app-footer-inner">
        <p v-if="state.manifest" class="pl-text-xs pl-text-tertiary">
          {{ t('数据版本') }} {{ state.manifest.data_version }} ·
          {{ t('数据时间') }} {{ formatUtcTimestamp(state.manifest.generated_at) }}
        </p>

        <p class="pl-text-xs pl-text-tertiary">
          {{ t('ProviderList · AI Provider 供应与能力目录。状态基于公开来源，不代表实时 API 可用性。') }}
        </p>

        <!-- 参考汇率署名：ECB 数据再利用要求署名，并说明衍生计算方式。 -->
        <p v-if="state.fx" class="pl-text-xs pl-text-tertiary">
          {{
            t('参考汇率来源：{source} · 数据日期 {date} · 非结算汇率', {
              source: t('ECB 欧元参考汇率'),
              date: formatDateTime(state.fx.as_of_date),
            })
          }}
          <a :href="state.fx.source.url" target="_blank" rel="noopener">{{ t('来源链接') }}</a>
        </p>

        <p v-if="state.loadError" class="pl-text-xs pl-text-warning">
          {{ t('未能加载公开数据产物（{error}）。本站不提供替代数据，请检查 dist/v1 是否已编译并随站点一同发布。', { error: state.loadError }) }}
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: var(--pl-z-toast);
  padding: var(--pl-space-sm) var(--pl-space-lg);
  background: var(--pl-bg-inverse);
  color: var(--pl-text-inverse);
  border-radius: 0 0 var(--pl-radius-md) 0;
}

.skip-link:focus {
  left: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

/* 顶栏：悬浮玻璃条——四周留白让它从页面里「浮起来」，
   而不是像普通吸顶栏那样压着内容。 */
.app-header {
  position: sticky;
  top: var(--pl-topbar-offset);
  z-index: var(--pl-z-header);
  width: 100%;
  max-width: var(--pl-layout-max);
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 var(--pl-layout-gutter);
  pointer-events: none;
}

.app-header-inner {
  position: relative;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  height: var(--pl-header-height);
  display: flex;
  align-items: center;
  gap: var(--pl-space-lg);
  padding: 0 var(--pl-space-lg);
  background: var(--pl-glass-bg-strong);
  backdrop-filter: var(--pl-glass-blur);
  -webkit-backdrop-filter: var(--pl-glass-blur);
  border: 1px solid var(--pl-glass-border);
  border-radius: var(--pl-radius-lg);
  box-shadow: var(--pl-glass-shadow);
  pointer-events: auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  color: var(--pl-text-primary);
  font-weight: var(--pl-weight-bold);
  letter-spacing: -0.045em;
  font-size: var(--pl-text-md);
  white-space: nowrap;
}
.brand:hover { text-decoration: none; }

.app-header-divider {
  width: 1px;
  height: 22px;
  flex: 0 0 1px;
  margin: 0 var(--pl-space-xs);
  background: var(--pl-border-strong);
}

.app-nav {
  display: flex;
  align-items: center;
  gap: var(--pl-space-xs);
  flex: 1;
  min-width: 0;
}

.app-nav-link {
  padding: var(--pl-space-sm) var(--pl-space-md);
  border-radius: var(--pl-radius-sm);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-sm);
  font-weight: var(--pl-weight-medium);
  white-space: nowrap;
  transition:
    background var(--pl-duration-fast) var(--pl-ease-standard),
    color var(--pl-duration-fast) var(--pl-ease-standard);
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .app-nav-link:hover {
  background: var(--pl-bg-subtle);
  color: var(--pl-text-primary);
  text-decoration: none;
}
}

.app-nav-link.is-active {
  background: var(--pl-bg-subtle);
  color: var(--pl-text-primary);
  font-weight: var(--pl-weight-strong);
}

.app-header-actions {
  display: flex;
  align-items: center;
  gap: var(--pl-space-sm);
  margin-left: auto;
}

.app-header-icon-action {
  width: 35px;
  min-width: 35px;
  height: 35px;
  padding: 0;
}
.app-header-icon-action .pl-icon { width: 16px; height: 16px; }

.app-mobile-nav-toggle { display: none; }
.app-mobile-menu-layer { display: none; }

/* 顶栏选择器：外观由 SelectPopup 的 header 形态负责，这里只限宽。 */
.app-select {
  display: inline-flex;
  max-width: 120px;
}

.app-icon-btn {
  display: grid;
  place-items: center;
  width: 33px;
  height: 33px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--pl-radius-sm);
  background: transparent;
  color: var(--pl-text-primary);
  cursor: pointer;
  transition:
    background var(--pl-duration-fast) var(--pl-ease-standard),
    border-color var(--pl-duration-fast) var(--pl-ease-standard);
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .app-icon-btn:hover {
  background: var(--pl-bg-subtle);
  border-color: var(--pl-glass-border);
}
}

.app-icon-btn .pl-icon {
  width: 17px;
  height: 17px;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.app-main {
  flex: 1;
  width: 100%;
  min-width: 0;
}

.app-shell.is-not-found .app-main {
  display: flex;
}

.app-footer {
  border-top: 1px solid var(--pl-border-subtle);
  padding: var(--pl-space-lg) 0 max(var(--pl-space-lg), env(safe-area-inset-bottom, 0px));
  margin-top: var(--pl-space-xl);
}

.app-footer-inner {
  max-width: var(--pl-layout-max);
  margin: 0 auto;
  padding: 0 var(--pl-layout-gutter);
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-sm);
}

@media (max-width: 768px) {
  .app-header {
    top: 0;
    max-width: none;
    margin: 0;
    padding: 0;
  }
  .app-header-inner {
    height: calc(58px + env(safe-area-inset-top, 0px));
    gap: var(--pl-space-sm);
    padding: env(safe-area-inset-top, 0px) max(var(--pl-space-lg), env(safe-area-inset-right, 0px)) 0 max(var(--pl-space-lg), env(safe-area-inset-left, 0px));
    border: 0;
    border-bottom: 1px solid var(--pl-border-subtle);
    border-radius: 0;
    background: var(--pl-bg-canvas);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
  }
  .app-select { max-width: 84px; }
  .app-nav { display: none; }
  .app-mobile-menu-layer {
    position: fixed;
    z-index: var(--pl-z-overlay);
    inset: 0;
    display: block;
    overflow-y: auto;
    overscroll-behavior: contain;
    background: var(--pl-bg-canvas);
  }
  .app-mobile-menu {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
    padding: calc(78px + env(safe-area-inset-top, 0px)) max(var(--pl-layout-gutter), env(safe-area-inset-right, 0px)) max(var(--pl-space-xl), env(safe-area-inset-bottom, 0px)) max(var(--pl-layout-gutter), env(safe-area-inset-left, 0px));
  }
  .app-mobile-menu-links { display: grid; gap: var(--pl-space-xs); width: min(100%, 560px); margin: 0 auto; }
  .app-mobile-menu-link { display: flex; min-height: 56px; align-items: center; padding: 0 var(--pl-space-lg); border-radius: var(--pl-radius-md); color: var(--pl-text-secondary); font-size: var(--pl-text-lg); text-decoration: none; }
  .app-mobile-menu-link:hover { text-decoration: none; }
  .app-mobile-menu-link.is-active { color: var(--pl-text-inverse); background: var(--pl-bg-inverse); font-weight: var(--pl-weight-semibold); }
  .app-mobile-menu-controls { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--pl-space-sm); width: min(100%, 560px); margin: auto auto 0; padding-top: var(--pl-space-lg); border-top: 1px solid var(--pl-border-subtle); }
  .app-mobile-menu-action { display: flex; min-height: 44px; align-items: center; justify-content: flex-start; gap: var(--pl-space-sm); padding: 0 var(--pl-space-md); border: 1px solid var(--pl-border-subtle); border-radius: var(--pl-radius-md); color: var(--pl-text-secondary); background: var(--pl-bg-surface); font-size: var(--pl-text-sm); }
  .app-mobile-menu-action:hover { text-decoration: none; }
  .app-mobile-menu-action .pl-icon { flex: 0 0 auto; width: 18px; height: 18px; }
  .app-mobile-menu-controls :deep(.pl-select) { width: 100%; min-height: 44px; }
  .app-mobile-menu-controls :deep(.pl-select-trigger) { width: 100%; min-height: 44px; justify-content: flex-start; padding-inline: var(--pl-space-md); }
  .app-mobile-menu-controls :deep(.pl-select-chevron) { flex: 0 0 auto; margin-left: auto; }
  .app-header-divider { display: none; }
  .app-mobile-nav-toggle { display: inline-flex; flex: 0 0 44px; }
  .app-header-actions { gap: var(--pl-space-xs); }
  .app-header-actions > .app-select,
  .app-github-btn { display: none; }
  .app-header-actions > .app-header-icon-action { display: none; }
  .app-header-actions > .app-header-icon-action.app-search-toggle { display: inline-flex; }
  .app-header-actions > .app-mobile-nav-toggle { display: inline-flex; }
  .app-header-icon-action { width: 44px; min-width: 44px; height: 44px; }
  .app-main { padding-top: var(--pl-space-lg); }
}

@media (prefers-reduced-transparency: reduce) and (max-width: 768px) {
  .app-mobile-menu-layer { background: var(--pl-bg-surface); }
}
</style>
