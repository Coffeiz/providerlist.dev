import { readdir, readFile } from 'node:fs/promises';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const virtualStore = join(root, 'node_modules/.pnpm');
const workspacePatterns = ['apps', 'packages', 'pipeline', 'frontend', 'sdk'];
const compareText = (left, right) => (left < right ? -1 : left > right ? 1 : 0);

async function readJson(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

async function walkPackageManifests(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walkPackageManifests(path));
    else if (entry.name === 'package.json') files.push(path);
  }
  return files;
}

function normalizeRepository(repository) {
  if (typeof repository === 'string') return repository;
  return repository?.url ?? '';
}

function detectLicense(packagePath, info) {
  const declared = typeof info.license === 'string' ? info.license : info.license?.type;
  if (declared) return declared;

  let filenames;
  try {
    filenames = readdirSync(packagePath);
  } catch {
    return 'Unknown';
  }
  const licenseFile = filenames.find((name) => /^(license|copying|notice)(?:\.|$)/i.test(name));
  if (!licenseFile) return 'Unknown';

  let text;
  try {
    text = readFileSync(join(packagePath, licenseFile), 'utf8').slice(0, 8192);
  } catch {
    return 'Unknown';
  }
  const spdx = text.match(/SPDX-License-Identifier:\s*([^\s*]+)/i)?.[1];
  if (spdx) return spdx;
  if (/^\s*The MIT License(?:\s*\(MIT\))?/i.test(text)) return 'MIT';
  if (/^\s*Apache License\s*\n\s*Version 2\.0/i.test(text)) return 'Apache-2.0';
  if (/^\s*BSD [23]-Clause License/i.test(text)) return text.match(/^\s*(BSD [23]-Clause License)/i)?.[1] ?? 'Unknown';
  if (/^\s*Mozilla Public License Version 2\.0/i.test(text)) return 'MPL-2.0';
  return 'Unknown';
}

async function collectInstalledPackages() {
  try {
    await readdir(virtualStore);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('未找到 pnpm 虚拟依赖目录，请先运行 pnpm install。');
    }
    throw error;
  }

  const packages = new Map();
  for (const virtualPackage of (await readdir(virtualStore)).sort()) {
    const moduleRoot = join(virtualStore, virtualPackage, 'node_modules');
    let entries;
    try {
      entries = await readdir(moduleRoot);
    } catch (error) {
      if (error.code === 'ENOENT' || error.code === 'ENOTDIR') continue;
      throw error;
    }

    for (const entry of entries.sort()) {
      const entryPath = join(moduleRoot, entry);
      let packagePaths;
      if (entry.startsWith('@')) {
        let names;
        try {
          names = await readdir(entryPath);
        } catch (error) {
          if (error.code === 'ENOENT') continue;
          throw error;
        }
        packagePaths = names.sort().map((name) => join(entryPath, name));
      } else {
        packagePaths = [entryPath];
      }

      for (const packagePath of packagePaths) {
        let info;
        try {
          info = await readJson(join(packagePath, 'package.json'));
        } catch (error) {
          if (error.code === 'ENOENT') continue;
          throw error;
        }
        if (!info.name || !info.version) continue;
        const key = `${info.name}@${info.version}`;
        packages.set(key, {
          name: info.name,
          version: info.version,
          license: detectLicense(packagePath, info),
          homepage: info.homepage ?? '',
          repository: normalizeRepository(info.repository),
        });
      }
    }
  }
  return [...packages.values()].sort((a, b) => compareText(a.name, b.name) || compareText(a.version, b.version));
}

async function collectDirectDependencies() {
  const packageFiles = [join(root, 'package.json')];
  for (const pattern of workspacePatterns) {
    packageFiles.push(...await walkPackageManifests(join(root, pattern)));
  }

  const dependencies = new Set();
  for (const file of [...new Set(packageFiles)].sort()) {
    let manifest;
    try {
      manifest = await readJson(file);
    } catch (error) {
      if (error.code === 'ENOENT') continue;
      throw error;
    }
    for (const section of ['dependencies', 'devDependencies', 'optionalDependencies']) {
      for (const [name, range] of Object.entries(manifest[section] ?? {})) {
        if (typeof range === 'string' && !range.startsWith('workspace:')) dependencies.add(name);
      }
    }
  }
  return [...dependencies].sort();
}

export async function collectLicenseInventory() {
  const dependencies = await collectInstalledPackages();
  const directDependencies = await collectDirectDependencies();
  const available = new Set(dependencies.map((dependency) => dependency.name));
  return {
    project: 'javascript',
    label: 'ProviderList / JavaScript workspace',
    packageManager: 'pnpm',
    packageManifests: ['package.json', 'pnpm-lock.yaml', 'apps/*/package.json', 'packages/*/package.json', 'pipeline/package.json', 'frontend/package.json', 'sdk/*/package.json'],
    dependencyCount: dependencies.length,
    directDependencies,
    missingDirectDependencies: directDependencies.filter((name) => !available.has(name)),
    dependencies,
  };
}

export function renderLicenseArtifacts(inventory) {
  const manifest = {
    projects: [{
      project: inventory.project,
      label: inventory.label,
      packageManifests: inventory.packageManifests,
      dependencyCount: inventory.dependencies.length,
    }],
    dependencies: inventory.dependencies,
  };
  const markdown = [
    '# Third-party notices',
    '',
    '> Generated by `pnpm licenses:generate`. Do not edit manually.',
    '',
    `依赖包数量：${inventory.dependencies.length}。版本取自 pnpm 当前安装结果，并由 pnpm-lock.yaml 锁定。`,
    '',
    '| Package | Version | License | Links |',
    '| --- | ---: | --- | --- |',
    ...inventory.dependencies.map((dependency) => {
      const links = [dependency.homepage, dependency.repository].filter(Boolean).join(' · ');
      const escape = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
      return `| ${escape(dependency.name)} | ${escape(dependency.version)} | ${escape(dependency.license)} | ${escape(links)} |`;
    }),
    '',
  ].join('\n');
  return new Map([
    ['licenses/javascript.json', `${JSON.stringify(inventory, null, 2)}\n`],
    ['licenses/manifest.json', `${JSON.stringify(manifest, null, 2)}\n`],
    ['licenses/THIRD-PARTY-NOTICES.md', markdown],
  ]);
}
