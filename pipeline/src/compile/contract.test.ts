/**
 * 端到端契约测试：构建产物必须通过自己发布的公开 JSON Schema。
 *
 * 这是消费者视角的保证——第三方使用 `/v1/schema/*.schema.json`
 * 校验他们下载到的文件时，必须能过。
 *
 * 防的具体回归：
 * - generator 写出结构与 Schema 不一致 → 校验失败
 * - Schema 改了但产物没跟着变 → 校验失败
 * - Schema 没被发布到产物里 → 文件缺失，失败
 */

import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import Ajv2020 from 'ajv/dist/2020.js';

import { buildCatalog } from './build.ts';

const FIXTURES = path.resolve(import.meta.dirname, '../fixtures/data');

async function build(): Promise<string> {
  const outDir = await mkdtemp(path.join(tmpdir(), 'providerlist-contract-'));
  await buildCatalog({
    dataDir: FIXTURES,
    outDir,
    dataVersion: 'v-contract-1',
  });
  return outDir;
}

async function readJson<T>(root: string, relative: string): Promise<T> {
  return JSON.parse(await readFile(path.join(root, relative), 'utf8')) as T;
}

test('构建产物包含当前公开 API v1 的 Schema 文件', async () => {
  const outDir = await build();
  try {
    for (const name of [
      'public-provider.schema.json',
      'model-registry.schema.json',
      'model.schema.json',
      'model-list.schema.json',
      'offering-list.schema.json',
      'manifest.schema.json',
    ]) {
      const content = await readFile(path.join(outDir, 'v1', 'schema', name), 'utf8');
      assert.ok(content.length > 0, `${name} 不应为空`);
    }
  } finally {
    await rm(outDir, { recursive: true, force: true });
  }
});

test('Provider 资源产物通过公开 Provider Schema 校验', async () => {
  const outDir = await build();
  try {
    const schema = await readJson<Record<string, unknown>>(
      outDir,
      'v1/schema/public-provider.schema.json',
    );
    const ajv = new Ajv2020({ strict: false, allErrors: true });
    const validate = ajv.compile(schema);

    const doc = await readJson<unknown>(outDir, 'v1/providers/example-ai.json');
    const valid = validate(doc);
    assert.ok(valid, `Provider 产物未通过公开 Schema 校验：${JSON.stringify(validate.errors, null, 2)}`);
  } finally {
    await rm(outDir, { recursive: true, force: true });
  }
});

test('公开 Model、Offering 与 Manifest 产物分别通过对应 Schema 校验', async () => {
  const outDir = await build();
  try {
    const ajv = new Ajv2020({ strict: false, allErrors: true });
    for (const schemaName of [
      'public-provider.schema.json', 'model-registry.schema.json', 'model.schema.json',
      'model-list.schema.json', 'offering-list.schema.json', 'manifest.schema.json',
    ]) {
      ajv.addSchema(await readJson<Record<string, unknown>>(outDir, `v1/schema/${schemaName}`));
    }
    const registry = await readJson<{ models: { id: string }[] }>(outDir, 'v1/models.json');
    const firstModelId = registry.models[0]?.id;
    assert.ok(firstModelId, '应构建至少一个 Model');
    const [developerId, slug] = firstModelId.split('/');
    assert.ok(developerId && slug, `Model ID 格式无效：${firstModelId}`);
    const checks = [
      ['v1/models.json', 'v1/schema/model-registry.schema.json'],
      [`v1/models/${developerId}/${slug}.json`, 'v1/schema/model.schema.json'],
      ['v1/models/type/all.json', 'v1/schema/model-list.schema.json'],
      ['v1/offerings.json', 'v1/schema/offering-list.schema.json'],
      ['v1/manifest.json', 'v1/schema/manifest.schema.json'],
    ] as const;
    for (const [file, schemaFile] of checks) {
      const schema = await readJson<Record<string, unknown>>(outDir, schemaFile);
      const validate = ajv.getSchema(String(schema.$id));
      assert.ok(validate, `${schemaFile} 应在 AJV 中注册`);
      const doc = await readJson<unknown>(outDir, file);
      const valid = validate(doc);
      assert.ok(
        valid,
        `${file} 未通过 ${schemaFile} 校验：${JSON.stringify(validate.errors, null, 2)}`,
      );
    }
  } finally {
    await rm(outDir, { recursive: true, force: true });
  }
});

test('manifest 收录的每个文件都真实存在且哈希匹配', async () => {
  const outDir = await build();
  try {
    const manifest = await readJson<{
      files: { path: string; sha256: string; bytes: number }[];
    }>(outDir, 'v1/manifest.json');

    const { createHash } = await import('node:crypto');
    for (const file of manifest.files) {
      const relative = file.path.replace(/^\/v1\//, '');
      const content = await readFile(path.join(outDir, 'v1', relative));
      assert.equal(content.byteLength, file.bytes, `${file.path} 字节数不匹配`);
      const digest = `sha256:${createHash('sha256').update(content).digest('hex')}`;
      assert.equal(digest, file.sha256, `${file.path} 哈希不匹配`);
    }
  } finally {
    await rm(outDir, { recursive: true, force: true });
  }
});
