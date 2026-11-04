/**
 * 站点偏好：语言、展示币种、主题。
 *
 * 三项偏好都只影响**展示**，不影响已发布数据：
 * - Language switches UI copy; catalog facts such as Provider names retain their source values, while the presentation layer may use recorded aliases.
 * - 展示币种只影响**参考换算视图**；原币价永远同时显示，静态 JSON 的原价不变。
 * - 主题是纯视觉。
 *
 * 偏好存在 localStorage：刷新后保持，但**不写进 URL**——
 * URL 里放的是「看哪一页、看哪条供应」，不是「我偏好什么」。
 */

import { reactive, watch } from 'vue';

export type Lang = 'zh' | 'en';

/** 可选展示币种。与设计文档 §5.5 的 `display_currency=CNY|USD|EUR` 一致。 */
export type DisplayCurrency = 'CNY' | 'USD' | 'EUR';
export type ThemeMode = 'system' | 'light' | 'dark';

export const LANGUAGES: readonly { readonly id: Lang; readonly label: string }[] = [
  { id: 'zh', label: '简体中文' },
  { id: 'en', label: 'English' },
];

export const DISPLAY_CURRENCIES: readonly DisplayCurrency[] = ['CNY', 'USD', 'EUR'];

const STORAGE_KEY = 'pl-prefs';

interface StoredPrefs {
  readonly lang?: string;
  readonly currency?: string;
  readonly theme?: string;
}

function readStored(): StoredPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as StoredPrefs;
  } catch {
    // 存储不可用（隐私模式等）不算错误，退回默认值即可。
    return {};
  }
}

const stored = readStored();

function browserLocale(): string {
  if (typeof navigator === 'undefined') return 'en-US';
  return navigator.languages?.[0] ?? navigator.language ?? 'en-US';
}

function defaultLang(): Lang {
  return browserLocale().toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function displayCurrencyForLocale(locale: string): DisplayCurrency {
  const normalizedLocale = locale.replaceAll('_', '-');
  let region: string | undefined;
  try {
    region = new Intl.Locale(normalizedLocale).region?.toUpperCase();
  } catch {
    // Invalid or non-BCP-47 locale tags use the same fallback as an unknown region.
  }
  if (region === 'CN') return 'CNY';

  // Use EUR for the euro area; the selector only offers CNY, USD and EUR.
  const euroArea = new Set([
    'AD', 'AT', 'BE', 'CY', 'DE', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'IE', 'IT',
    'LT', 'LU', 'LV', 'MC', 'ME', 'MT', 'NL', 'PT', 'SI', 'SK', 'SM', 'VA', 'XK',
  ]);
  return region && euroArea.has(region) ? 'EUR' : 'USD';
}

function defaultCurrency(): DisplayCurrency {
  return displayCurrencyForLocale(browserLocale());
}

function pickLang(value: string | undefined): Lang {
  if (value === 'zh' || value === 'en') return value;
  return defaultLang();
}

function pickCurrency(value: string | undefined): DisplayCurrency {
  if (DISPLAY_CURRENCIES.includes(value as DisplayCurrency)) return value as DisplayCurrency;
  return defaultCurrency();
}

function pickTheme(value: string | undefined): ThemeMode {
  return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
}

export const prefs = reactive<{
  lang: Lang;
  currency: DisplayCurrency;
  theme: ThemeMode;
}>({
  lang: pickLang(stored.lang),
  currency: pickCurrency(stored.currency),
  theme: pickTheme(stored.theme),
});

watch(
  () => [prefs.lang, prefs.currency, prefs.theme] as const,
  () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          lang: prefs.lang,
          currency: prefs.currency,
          theme: prefs.theme,
        }),
      );
    } catch {
      // 存不下就存不下——偏好只是便利，不影响功能。
    }
  },
);

/** 把主题写到根元素，供 CSS 变量切换使用。 */
export function applyTheme(theme: ThemeMode): void {
  const resolvedTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;
  document.documentElement.setAttribute('data-theme', resolvedTheme);
}
