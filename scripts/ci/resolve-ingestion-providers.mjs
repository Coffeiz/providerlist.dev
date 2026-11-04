#!/usr/bin/env node
import { appendFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const repositoryRoot = process.cwd();
const eventPath = process.env.GITHUB_EVENT_PATH;
const outputPath = process.env.GITHUB_OUTPUT;
if (!eventPath || !outputPath) throw new Error('缺少 GitHub Actions 事件或输出路径');

const event = JSON.parse(await readFile(eventPath, 'utf8'));
const eventName = process.env.GITHUB_EVENT_NAME;
let providers;

const registeredProviders = (await readdir(path.join(repositoryRoot, 'data/providers'), { withFileTypes: true }))
  .filter((entry) => (entry.isFile() && entry.name.endsWith('.json'))
    || (entry.isDirectory() && providerSourceExists(path.join(repositoryRoot, 'data/providers', entry.name)))
  )
  .map((entry) => entry.isFile() ? entry.name.slice(0, -'.json'.length) : entry.name);
const aClassProviders = await readAClassRoster();

if (eventName === 'schedule') {
  providers = aClassProviders;
} else if (eventName === 'workflow_dispatch') {
  const { scope, provider } = event.inputs ?? {};
  if (scope === 'all') providers = aClassProviders;
  else if (scope === 'provider' && typeof provider === 'string' && aClassProviders.includes(provider) && registeredProviders.includes(provider)) providers = [provider];
  else throw new Error('手动采集范围无效；只能选择全部 A 类或一个 A 类 Provider');
} else {
  throw new Error(`不支持的采集触发：${eventName}`);
}

if (!providers.length || new Set(providers).size !== providers.length) throw new Error('采集 Provider 清单为空或存在重复项');
await appendFile(outputPath, `providers=${JSON.stringify(providers)}\n`);
await appendFile(process.env.GITHUB_STEP_SUMMARY, [
  '## Provider 并行采集计划',
  '',
  `本次独立采集任务：${providers.length} 家。`,
  '',
  ...providers.map((provider) => `- \`${provider}\``),
  '',
].join('\n'));

async function readAClassRoster() {
  const source = await readFile(path.join(repositoryRoot, 'docs/data/provider-classes.md'), 'utf8');
  const section = source.split('## Class A')[1]?.split('## Class B')[0] ?? '';
  const providers = [...section.matchAll(/\|[^|]+\|\s*`([a-z0-9-]+)`\s*\|/g)].map((match) => match[1]).sort();
  const unknown = providers.filter((provider) => !registeredProviders.includes(provider));
  if (unknown.length) throw new Error(`A 类清单含未登记 Provider：${unknown.join(', ')}`);
  return providers;
}

function providerSourceExists(providerDir) {
  return existsSync(path.join(providerDir, 'provider.toml')) || existsSync(path.join(providerDir, 'provider.json'));
}
