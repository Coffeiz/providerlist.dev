/**
 * 架构边界断言：契约类型与领域词典**只有一个真源**。
 *
 * 这是一条结构断言，不是行为断言——它守的是「依赖方向」这类架构边界，
 * 与 AGENTS.md「源码/结构断言仅用于架构与安全边界」一致。
 *
 * 背景：前端曾手抄一份契约类型和五张领域词典。手抄副本会**静默漂移**，
 * 且没有任何机制能发现它。真的漂移过一次——模型类型标签把
 * 「图像生成 / 编辑」缩成了「图像生成」，站点显示的名字和契约定义不一致。
 *
 * 这些断言防的具体回归：
 * - 有人在 demo 里重新 `export interface ProviderSummary { ... }` → 断言失败
 * - 有人在 format.ts 里重新开一张 `MODEL_TYPE_LABELS` → 断言失败
 * - 语义等价的重构（把转发层改名、调整 import 顺序）→ 不应失败
 */

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const SRC = path.resolve(import.meta.dirname);

async function read(relative: string): Promise<string> {
  return readFile(path.join(SRC, relative), 'utf8');
}

test('types.ts 只做转发，不本地定义契约类型', async () => {
  const source = await read('types.ts');

  // 本地定义会长这样：export interface X { 或 export type X = ...
  const localInterfaces = source.match(/^export\s+interface\s+\w+/gm) ?? [];
  const localTypes = source.match(/^export\s+type\s+\w+\s*=/gm) ?? [];

  assert.deepEqual(
    localInterfaces,
    [],
    `types.ts 不得本地定义 interface，应改为从 @providerlist/schema 转发。发现：${localInterfaces.join(', ')}`,
  );
  assert.deepEqual(
    localTypes,
    [],
    `types.ts 不得本地定义 type，应改为从 @providerlist/schema 转发。发现：${localTypes.join(', ')}`,
  );

  // 转发层必须真的指向 schema
  assert.match(
    source,
    /export\s+type\s*\{[^}]*\}\s*from\s*'@providerlist\/schema\/types'/s,
    'types.ts 应从 @providerlist/schema/types 转发类型',
  );
});

test('format.ts 不手抄上游领域词典', async () => {
  const source = await read('composables/format.ts');

  // 这些词典在 schema / capabilities / pricing 里已有唯一真源
  const upstreamTables = [
    'MODEL_TYPE_LABELS',
    'UNIT_LABELS',
    'METRIC_LABELS',
    'CURRENCY_SYMBOLS',
  ];

  for (const table of upstreamTables) {
    const declaration = new RegExp(`^const\\s+${table}\\b`, 'm');
    assert.ok(
      !declaration.test(source),
      `format.ts 不得本地声明 ${table}，应从 @providerlist/schema、@providerlist/shared/capabilities 或 @providerlist/shared/pricing 取`,
    );
  }

  // 且必须真的用了上游
  assert.match(
    source,
    /from\s+'@providerlist\/schema\/model-types'/,
    'format.ts 应从 @providerlist/schema/model-types 取模型类型标签',
  );
  assert.match(
    source,
    /from\s+'@providerlist\/shared\/pricing\/units'/,
    'format.ts 应从 @providerlist/shared/pricing/units 取计费单位与货币符号',
  );
});

test('站点显示的模型类型名与契约定义一致', async () => {
  const schema = await read('../../packages/schema/src/model-types.ts');
  const format = await read('composables/format.ts');

  // schema 的 descriptor 是真源；demo 必须调用它而不是自建表
  assert.ok(
    schema.includes('MODEL_TYPE_DESCRIPTORS'),
    'schema 应导出模型类型词典',
  );
  assert.match(
    format,
    /upstreamModelTypeLabel|modelTypeLabel\s*\(/,
    'format.ts 的 modelTypeLabel 应委托给 schema 的实现',
  );
});
