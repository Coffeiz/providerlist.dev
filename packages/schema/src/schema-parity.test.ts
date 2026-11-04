/**
 * TS 类型与公开 JSON Schema 的字段级同源校验。
 *
 * 为什么需要：夹具校验只能发现「夹具用到的字段」是否与 Schema 一致。
 * 那些**定义了但没有任何夹具用到**的字段，夹具测试看不见——
 * 改了名、删了字段、Schema 里忘了加，两边就会静默漂移。
 *
 * 这个测试直接比对 `packages/schema/src/types.ts` 里每个 interface 的字段集合
 * 与公开 Schema 里对应 `$defs` 的 properties 集合：
 * - TS 改了字段名 → 失败
 * - TS 删了字段 → 失败
 * - TS 加了字段但 Schema 没加 → 失败
 *
 * 语义等价的重构（改类型写法、调字段顺序、改描述）不应造成无关失败。
 */

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const here = path.resolve(import.meta.dirname);
const typesPath = path.join(here, 'types.ts');
const schemaDir = path.join(here, '..', 'schema');

/** 公开 Schema 文件与它们各自的根文档类型。 */
const SCHEMA_FILES = [
  { file: 'provider.schema.json', root: 'ProviderDocument' },
  { file: 'public-provider.schema.json', root: undefined },
  { file: 'model.schema.json', root: 'ModelDocument' },
  { file: 'model-registry.schema.json', root: 'ModelRegistryDocument' },
  { file: 'catalog.schema.json', root: undefined },
  { file: 'fx-reference.schema.json', root: 'FxReferenceDocument' },
] as const;

// These are ingestion-only types/fields. Collectors use them inside transient
// candidates, then remove them before writing Provider/Model data or public JSON.
const INTERNAL_INGESTION_TYPES = new Set(['Source', 'Evidence', 'FieldOrigin', 'RouteReasoningControl', 'RouteReasoningSpec']);
const INTERNAL_INGESTION_FIELDS = new Set([
  'sources', 'evidence', 'evidence_refs', 'source_refs', 'field_origin_refs',
  'data_source_kinds', 'source_bindings',
]);

/** 从 TS 源码里抽出每个 interface 的顶层字段名集合。 */
function parseInterfaceFields(source: string): Map<string, Set<string>> {
  const result = new Map<string, Set<string>>();
  const lines = source.split('\n');

  let current: string | null = null;
  let depth = 0;

  for (const line of lines) {
    const decl = /^export interface ([A-Za-z_][A-Za-z_0-9]*)\s*\{/.exec(line);
    if (decl && current === null) {
      const name = decl[1];
      if (name) {
        current = name;
        depth = 1;
        result.set(name, new Set());
      }
      continue;
    }
    if (current === null) continue;

    if (line.trimEnd().endsWith('}')) {
      depth -= 1;
      if (depth === 0) {
        current = null;
        continue;
      }
    }

    // 顶层字段：两个空格缩进的 readonly 声明
    const field = /^ {2}readonly ([A-Za-z_][A-Za-z_0-9]*)\??\s*:/.exec(line);
    if (field && field[1]) {
      result.get(current)?.add(field[1]);
    }
  }

  return result;
}

interface LoadedSchema {
  readonly defs: Record<string, { properties?: Record<string, unknown>; type?: string }>;
  readonly rootProperties?: Record<string, unknown>;
}

async function loadSchemas(): Promise<Map<string, LoadedSchema>> {
  const out = new Map<string, LoadedSchema>();
  for (const { file } of SCHEMA_FILES) {
    const parsed = JSON.parse(
      await readFile(path.join(schemaDir, file), 'utf8'),
    ) as {
      $defs?: LoadedSchema['defs'];
      properties?: Record<string, unknown>;
    };
    out.set(file, {
      defs: parsed.$defs ?? {},
      ...(parsed.properties ? { rootProperties: parsed.properties } : {}),
    });
  }
  return out;
}

test('每个 interface 都在公开 Schema 中有对应定义', async () => {
  const source = await readFile(typesPath, 'utf8');
  const schemas = await loadSchemas();
  const interfaces = parseInterfaceFields(source);

  // 收集所有已定义的名字：各文件 $defs + 根文档
  const defined = new Set<string>();
  for (const loaded of schemas.values()) {
    for (const name of Object.keys(loaded.defs)) defined.add(name);
  }
  defined.add('ProviderDocument');
  defined.add('ModelDocument');
  defined.add('ModelRegistryDocument');

  const publicDefs = schemas.get('public-provider.schema.json')?.defs;
  if (publicDefs?.PricingRate) defined.add('PublicPricingRate');
  if (publicDefs?.PricingGroup) defined.add('PublicPricingGroup');
  const missing = [...interfaces.keys()].filter((name) => !defined.has(name) && !INTERNAL_INGESTION_TYPES.has(name));
  assert.deepEqual(
    missing,
    [],
    `以下 interface 在公开 Schema 中缺少对应定义：${missing.join(', ')}`,
  );
});

test('TS interface 字段与公开 Schema 的 properties 完全一致', async () => {
  const source = await readFile(typesPath, 'utf8');
  const schemas = await loadSchemas();
  const interfaces = parseInterfaceFields(source);

  // 汇总所有 $defs（同名以先出现者为准）
  const defs: Record<string, { properties?: Record<string, unknown>; type?: string }> = {};
  for (const loaded of schemas.values()) {
    for (const [name, def] of Object.entries(loaded.defs)) {
      defs[name] ??= def;
    }
  }

  const problems: string[] = [];

  for (const [name, allFields] of interfaces) {
    if (INTERNAL_INGESTION_TYPES.has(name)) continue;
    const fields = new Set([...allFields].filter((field) => !INTERNAL_INGESTION_FIELDS.has(field)));
    const publicSchema = schemas.get('public-provider.schema.json');
    const def = name === 'PublicPricingRate' ? publicSchema?.defs.PricingRate
      : name === 'PublicPricingGroup' ? publicSchema?.defs.PricingGroup : defs[name];
    if (!def || def.type !== 'object' || !def.properties) continue;

    const schemaFields = new Set(Object.keys(def.properties).filter((field) => !INTERNAL_INGESTION_FIELDS.has(field)));
    const inTsOnly = [...fields].filter((f) => !schemaFields.has(f));
    const inSchemaOnly = [...schemaFields].filter((f) => !fields.has(f));

    if (inTsOnly.length > 0) {
      problems.push(`${name}：TS 有但 Schema 缺 ${inTsOnly.join(', ')}`);
    }
    if (inSchemaOnly.length > 0) {
      problems.push(`${name}：Schema 有但 TS 缺 ${inSchemaOnly.join(', ')}`);
    }
  }

  assert.deepEqual(problems, [], `TS 类型与公开 Schema 字段不一致：\n${problems.join('\n')}`);
});

test('根文档字段与 Schema 根 properties 一致', async () => {
  const source = await readFile(typesPath, 'utf8');
  const interfaces = parseInterfaceFields(source);
  const schemas = await loadSchemas();

  const checks: [string, string][] = [
    ['ProviderDocument', 'provider.schema.json'],
    ['ModelDocument', 'model.schema.json'],
    ['ModelRegistryDocument', 'model-registry.schema.json'],
    ['FxReferenceDocument', 'fx-reference.schema.json'],
  ];

  const problems: string[] = [];
  for (const [typeName, file] of checks) {
    const fields = interfaces.get(typeName);
    assert.ok(fields, `应能解析出 ${typeName}`);
    const rootProperties = schemas.get(file)?.rootProperties;
    assert.ok(rootProperties, `${file} 应有根 properties`);

    const schemaFields = new Set(Object.keys(rootProperties));
    const contractFields = new Set([...fields].filter((field) => !INTERNAL_INGESTION_FIELDS.has(field)));
    const inTsOnly = [...contractFields].filter((f) => !schemaFields.has(f));
    const inSchemaOnly = [...schemaFields].filter((f) => !contractFields.has(f));
    if (inTsOnly.length > 0) {
      problems.push(`${typeName}：TS 有但 Schema 缺 ${inTsOnly.join(', ')}`);
    }
    if (inSchemaOnly.length > 0) {
      problems.push(`${typeName}：Schema 有但 TS 缺 ${inSchemaOnly.join(', ')}`);
    }
  }

  assert.deepEqual(problems, [], problems.join('\n'));
});
