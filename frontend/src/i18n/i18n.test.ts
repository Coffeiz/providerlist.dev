/**
 * i18n 覆盖度测试。
 *
 * 防的具体回归：界面新增了中文文案却**没登记英文**——
 * 切到英文后那块文字仍然显示中文。功能测试抓不到这种问题，
 * 但它会让「中英 i18n」变成半成品。
 *
 * 判定方式：扫源码里的**中文文案候选**，与英文词典比对。
 * 候选有三类：
 * 1. 字面量调用 `t('…')`；
 * 2. 作为界面文案属性的字符串字面量（label / title / summary …）——
 *    它们通常通过 `t(item.label)` 间接翻译，同样必须登记；
 * 3. `<script>` 段里的中文字符串字面量（例如状态词典的取值）。
 *
 * - 用了但没登记 → 失败（漏翻）
 * - 登记了但没人用 → 失败（死条目，词典会越滚越脏）
 * - 译文与原文相同 → 失败（等于没翻）。只在**原文含中文**时判定：
 *   英文专名（品牌名、协议名）两种语言下本来就是同一个词，原样是正确结果。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

import { EN_DICTIONARY } from './dictionary.ts';

const srcDir = path.resolve(import.meta.dirname, '..');

/** 作为界面文案属性的字段名——它们的值会被 `t(...)` 间接取用。 */
const INDIRECT_PROPS = [
  'label',
  'title',
  'sample',
  'basis',
  'meaning',
  'note',
  'summary',
  'detail',
];

/** 递归收集源码文件。 */
async function collectSources(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') continue;
      out.push(...(await collectSources(full)));
    } else if (/\.(vue|ts)$/.test(entry.name) && !entry.name.endsWith('.test.ts')) {
      out.push(full);
    }
  }
  return out;
}

/** 去掉注释，避免把注释里的中文当成界面文案。 */
function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

/** 取出脚本段：`.ts` 文件整个算脚本，`.vue` 取 `<script setup>`。 */
function scriptSection(source: string, file: string): string {
  if (file.endsWith('.ts')) return source;
  const match = /<script setup lang="ts">([\s\S]*?)<\/script>/.exec(source);
  return match?.[1] ?? '';
}

const HAS_CHINESE = /[一-鿿]/;

/** 收集一个文件里的全部中文文案候选。 */
function candidatesIn(source: string, file: string): Set<string> {
  const candidates = new Set<string>();
  const script = stripComments(scriptSection(source, file));
  const template = stripComments(source);

  // 1) 字面量 t('…')——模板与脚本两处都要看
  for (const match of template.matchAll(/\bt\(\s*'((?:[^'\\]|\\.)*)'/g)) {
    const key = match[1] ?? '';
    // 字面量调用一律登记：占位符型键（如 `{min} ~ {max}`）不含中文，
    // 但它同样是界面文案，漏翻就会在英文模式下露出原始占位符。
    candidates.add(key);
  }

  // 2) 界面文案属性的字符串字面量
  const propPattern = new RegExp(`\\b(?:${INDIRECT_PROPS.join('|')}):\\s*'((?:[^'\\\\]|\\\\.)*)'`, 'g');
  for (const match of script.matchAll(propPattern)) {
    const key = match[1] ?? '';
    if (HAS_CHINESE.test(key)) candidates.add(key);
  }

  // 3) 脚本段里剩下的中文字符串字面量（状态词典取值等）
  const literalPattern = /'((?:[^'\\\n]|\\.)*)'/g;
  for (const match of script.matchAll(literalPattern)) {
    const key = match[1] ?? '';
    if (!HAS_CHINESE.test(key)) continue;
    if (key.startsWith('t(')) continue;
    candidates.add(key);
  }

  // 4) 模板里的中文文本节点
  const withoutInterpolation = template.replace(/\{\{[\s\S]*?\}\}/g, '');
  for (const match of withoutInterpolation.matchAll(/>([^<>{}]*[一-鿿][^<>{}]*)</g)) {
    const text = (match[1] ?? '').trim();
    if (text) candidates.add(text);
  }

  return candidates;
}

describe('i18n 词典覆盖度', () => {
  it('所有界面文案都有英文翻译', async () => {
    const files = await collectSources(srcDir);
    const missing: string[] = [];

    for (const file of files) {
      // 词典文件本身不算「使用方」——它是定义，不是调用。
      if (path.basename(file) === 'dictionary.ts') continue;
      const source = await readFile(file, 'utf8');
      for (const key of candidatesIn(source, file)) {
        if (!(key in EN_DICTIONARY)) {
          missing.push(`${path.relative(srcDir, file)}：${key}`);
        }
      }
    }

    assert.deepEqual(
      missing,
      [],
      `以下界面文案缺少英文翻译：\n${missing.join('\n')}`,
    );
  });

  it('词典里没有没人用的死条目', async () => {
    const files = await collectSources(srcDir);
    const used = new Set<string>();
    for (const file of files) {
      if (path.basename(file) === 'i18n.ts') continue;
      const source = await readFile(file, 'utf8');
      for (const key of candidatesIn(source, file)) used.add(key);
    }

    const unused = Object.keys(EN_DICTIONARY).filter((key) => !used.has(key));
    assert.deepEqual(unused, [], `词典里这些条目没有被使用：\n${unused.join('\n')}`);
  });

  it('英文译文不为空', () => {
    for (const [key, value] of Object.entries(EN_DICTIONARY)) {
      assert.ok(value.trim().length > 0, `译文为空：${key}`);
      // 「译文与原文相同」只有在**原文含中文**时才是问题：
      // 中文原文原样抄一遍 = 等于没翻；而英文专名（品牌名、协议名）
      // 两种语言下本来就是同一个词，译文与原文相同才是对的。
      // 纯占位符模式的译文也本来就与原文同形，一并跳过。
      if (!key.includes('{') && HAS_CHINESE.test(key)) {
        assert.notEqual(value, key, `译文与原文相同（等于没翻）：${key}`);
      }
    }
  });
});
