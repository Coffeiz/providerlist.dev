import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import type { ProviderDocument } from '@providerlist/schema/types';
import { loadModelRegistrySource } from '../compile/build.ts';
import { loadProviderDocumentsFromDirectory, writeProviderSource } from './provider-store.ts';

function plain<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

test('Provider TOML round trip derives market fields and maps unknown Model references', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'providerlist-source-toml-'));
  try {
    const source: ProviderDocument = {
      schema_version: '1.0.0',
      data_version: 'fixture',
      generated_at: '2026-01-01T00:00:00Z',
      provider: { id: 'example', name: 'Example', aliases: [], kind: 'other' },
      services: [{
        id: 'cn', provider_id: 'example', name: 'ignored source identity', website: 'https://example.com',
        offerings: [{ id: 'call-id', service_id: 'cn', model_ref: null, status: 'active' }],
        capabilities: [{
          kind: 'web_search',
          input: [{ name: 'query', kind: 'text', required: true }],
          output: [{ kind: 'structured', fields: ['results'] }],
        }],
      }],
      plans: [{
        id: 'pro', service_ref: 'cn', billing_options: [{ billing_period: 'month', price: '10.00' }],
      }],
    };

    await writeProviderSource(root, source);
    const loaded = (await loadProviderDocumentsFromDirectory(root))[0]!;

    assert.deepEqual(plain(loaded.provider), source.provider);
    assert.deepEqual(plain(loaded.services), [{
      id: 'cn', provider_id: 'example', name: '中国市场', website: 'https://example.com',
      plan_ids: ['pro'],
      offerings: [{ id: 'call-id', model_ref: null, status: 'active', service_id: 'cn' }],
      capabilities: [{
        kind: 'web_search',
        input: [{ name: 'query', kind: 'text', required: true }],
        output: [{ kind: 'structured', fields: ['results'] }],
      }],
    }]);
    assert.deepEqual(plain(loaded.plans), [{
      id: 'pro', service_ref: 'cn', billing_options: [{ billing_period: 'month', price: '10.00' }],
    }]);
    await stat(path.join(root, 'providers/example/provider.toml'));
    await stat(path.join(root, 'providers/example/cn/service.toml'));
    await stat(path.join(root, 'providers/example/cn/offerings/call-id.toml'));
    await stat(path.join(root, 'providers/example/cn/plans.toml'));
    const serviceToml = await readFile(path.join(root, 'providers/example/cn/service.toml'), 'utf8');
    assert.match(serviceToml, /\[\[capabilities\.input\]\]/u);
    assert.match(serviceToml, /\[\[capabilities\.output\]\]/u);
    assert.doesNotMatch(serviceToml, /input_slots|output_specs/u);
    await assert.rejects(readFile(path.join(root, 'providers/example/provider.json')));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('Provider source writer only reports files whose persisted content changed', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'providerlist-source-diff-'));
  try {
    const source: ProviderDocument = {
      schema_version: '1.0.0',
      data_version: 'fixture',
      generated_at: '2026-01-01T00:00:00Z',
      provider: { id: 'example', name: 'Example', aliases: [], kind: 'other' },
      services: [{
        id: 'global', provider_id: 'example', name: 'ignored source identity',
        offerings: [{ id: 'call-id', service_id: 'global', model_ref: null, status: 'active' }],
      }],
    };
    await writeProviderSource(root, source);

    assert.deepEqual(await writeProviderSource(root, source), [], 'reapplying identical data must not rewrite any source file');

    const changed: ProviderDocument = {
      ...source,
      services: source.services.map((service) => ({
        ...service,
        offerings: service.offerings?.map((offering) => ({ ...offering, status: 'restricted' })),
      })),
    };
    assert.deepEqual(
      await writeProviderSource(root, changed),
      [path.join(root, 'providers/example/global/offerings/call-id.toml')],
      'a change to one Offering must write only that Offering file',
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('Model TOML derives identity and inherits the developer display name with per-model override', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'providerlist-model-toml-'));
  const models = path.join(root, 'models/example');
  try {
    const { mkdir, writeFile } = await import('node:fs/promises');
    await mkdir(models, { recursive: true });
    await writeFile(path.join(models, 'developer.toml'), 'id = "example"\nname = "Example AI"\n');
    await writeFile(path.join(models, 'model-a.toml'), 'name = "Model A"\ntype = "chat"\n');
    await writeFile(path.join(models, 'model-b.toml'), 'name = "Model B"\ndeveloper_name = "Example Labs"\n');

    const result = await loadModelRegistrySource(root);
    assert.deepEqual(result.models, [
      { name: 'Model A', type: 'chat', id: 'example/model-a', developer_id: 'example', developer_name: 'Example AI' },
      { name: 'Model B', id: 'example/model-b', developer_id: 'example', developer_name: 'Example Labs' },
    ]);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
