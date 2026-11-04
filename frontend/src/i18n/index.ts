/**
 * 界面文案的翻译入口。
 *
 * 词典在 `dictionary.ts`，这里只提供调用方式：
 * - `t('中文原文')` —— 模板里用；语言一变会自动重渲染；
 * - `translate(lang, text)` —— 不依赖响应式状态的纯函数。
 */
import { prefs, type Lang } from '../composables/prefs.ts';

import { EN_DICTIONARY } from './dictionary.ts';

/** 语言选项。 */
export const LANG_OPTIONS: readonly { id: Lang; label: string }[] = [
  { id: 'zh', label: '简体中文' },
  { id: 'en', label: 'English' },
];

/** 按当前语言翻译一段文案。 */
export function translate(lang: Lang, text: string): string {
  if (lang === 'zh') return text;
  return EN_DICTIONARY[text] ?? text;
}

/**
 * 模板里用的翻译函数。
 *
 * 读取响应式的 `prefs.lang`，因此语言一变，依赖它的组件会自动重渲染。
 * 支持 `{name}` 占位符，便于把日期、数量插进句子。
 */
export function t(text: string, vars?: Readonly<Record<string, string | number>>): string {
  let out = translate(prefs.lang, text);
  if (vars) {
    for (const [key, value] of Object.entries(vars)) {
      out = out.replaceAll(`{${key}}`, String(value));
    }
  }
  return out;
}
