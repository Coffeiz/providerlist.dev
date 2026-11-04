/**
 * 目录编译器。
 *
 * 输出分层：
 * - `/v1/` —— 稳定公开 Provider / ModelRegistry / ModelList / OfferingList / Manifest / Schema
 * - `/assets/datasets/` —— 仅供站点使用的搜索、目录、汇率和源详情数据
 *
 * 原子性要求：同一构建产物内生成清单与全部 JSON，校验 hash，统一部署。
 * **不要在构建开始时先更新 manifest。**
 */

import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { readdir, readFile, mkdir, writeFile, rm, rmdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

import type {
  CatalogCurrent,
  CatalogStats,
  CurrentOffering,
  FxReference,
  FxReferenceDocument,
  Manifest,
  Model,
  ModelDocument,
  ModelRegistryDocument,
  ProviderDocument,
  ProviderSummary,
  SearchIndexEntry,
} from '@providerlist/schema/types';
import {
  KNOWN_MODEL_TYPES,
  MODEL_TYPE_DESCRIPTORS,
  modelTypeLabel,
  type ModelType,
} from '@providerlist/schema/model-types';
import { serviceMarketForId } from '@providerlist/schema/types';
import {
  validateFxReference,
  validateFxReferenceDocument,
  validateProviderDocument,
  validateModelRegistryDocument,
  type ValidationIssue,
} from '@providerlist/schema/validation';
import { collectModelTypes, countCatalog } from '../normalize/stats.ts';
import { buildPublicResources } from './public-api.ts';
import { loadProviderDocumentsFromDirectory } from '../data/provider-store.ts';
import { parseToml } from '../data/toml.ts';
import { pricingCurrencies, serviceBillingCurrencies } from './currency-summary.ts';

export interface BuildOptions {
  readonly dataDir: string;
  readonly outDir: string;
  readonly dataVersion?: string;
  readonly schemaVersion?: string;
  readonly generatedAt?: string;
}

export interface BuildResult {
  readonly dataVersion: string;
  readonly files: readonly { path: string; sha256: string; bytes: number }[];
  readonly issues: readonly ValidationIssue[];
  readonly stats: CatalogStats;
}

const DEFAULT_SCHEMA_VERSION = '1.0.0';

/**
 * 公开 JSON Schema 的目录。
 *
 * 通过 `require.resolve` 定位 `@providerlist/schema` 包，避免写死相对路径——
 * monorepo 布局调整时不需要改这里。
 */
function resolveSchemaDir(): string {
  const require = createRequire(import.meta.url);
  return path.join(path.dirname(require.resolve('@providerlist/schema/package.json')), 'schema');
}

/** 随产物一起发布的公开 Schema 文件。 */
const PUBLIC_SCHEMA_FILES = [
  'public-provider.schema.json',
  'model-registry.schema.json',
  'model.schema.json',
  'model-list.schema.json',
  'offering-list.schema.json',
  'manifest.schema.json',
  'fx-reference.schema.json',
] as const;

export async function loadProviderDocuments(dataDir: string): Promise<ProviderDocument[]> {
  return loadProviderDocumentsFromDirectory(dataDir);
}

function stripProvenance<T>(value: T): T {
  if (Array.isArray(value)) return value.map((item) => stripProvenance(item)) as T;
  if (!value || typeof value !== 'object') return value;
  const out: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (['sources', 'evidence', 'evidence_refs', 'field_origin_refs', 'source_refs', 'data_source_kinds', 'source_bindings'].includes(key)) continue;
    out[key] = stripProvenance(item);
  }
  return out as T;
}

interface ModelRegistrySourceDocument {
  readonly models: readonly Model[];
}

export async function loadModelRegistrySource(dataDir: string): Promise<ModelRegistrySourceDocument> {
  const modelsDir = path.join(dataDir, 'models');
  if (!existsSync(modelsDir)) throw new BuildError('缺少 Model 注册表源目录', [{ severity: 'error', code: 'model_registry.missing', path: '/data/models', message: '需要 data/models/<developer_id>/developer.toml 和每个 Model 的 TOML 源文件' }]);

  const developers = (await readdir(modelsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const models: Model[] = [];

  for (const developerId of developers) {
    const developerDir = path.join(modelsDir, developerId);
    const entries = (await readdir(developerDir, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && /\.(?:toml|json)$/.test(entry.name) && entry.name !== 'developer.toml')
      .map((entry) => entry.name)
      .sort();
    const developerPath = path.join(developerDir, 'developer.toml');
    const developer = existsSync(developerPath)
      ? parseToml<{ id: string; name: string }>(await readFile(developerPath, 'utf8'), developerPath)
      : undefined;
    if (developer && (developer.id !== developerId || typeof developer.name !== 'string' || !developer.name.trim())) {
      throw new BuildError('Developer 源文件与目录身份不一致', [{
        severity: 'error', code: 'model_registry.developer_identity',
        path: `/${path.relative(dataDir, developerPath).split(path.sep).join('/')}`,
        message: `developer.toml 必须包含 id="${developerId}" 和非空 name`,
      }]);
    }
    if (developer && entries.some((name) => name.endsWith('.json'))) {
      throw new BuildError('Model 源目录不能混用 JSON 和 TOML', [{
        severity: 'error', code: 'model_registry.mixed_source_formats',
        path: `/${path.relative(dataDir, developerDir).split(path.sep).join('/')}`,
        message: '迁移完成后只允许 TOML Model 源文件',
      }]);
    }
    for (const name of entries) {
      const file = path.join(developerDir, name);
      const model = name.endsWith('.toml')
        ? readTomlModel(await readFile(file, 'utf8'), file, developerId, developer)
        : (JSON.parse(await readFile(file, 'utf8')) as { readonly model: Model }).model;
      const expectedFilename = `${model.id.split('/').at(-1)?.replace(/\./g, '-')}.${name.endsWith('.toml') ? 'toml' : 'json'}`;
      if (model.developer_id !== developerId || expectedFilename !== name) {
        throw new BuildError('Model 源文件路径与身份不一致', [{
          severity: 'error',
          code: 'model_registry.path_identity',
          path: `/${path.relative(dataDir, file).split(path.sep).join('/')}`,
          message: `目录、文件名必须对应 ${model.developer_id}/${expectedFilename}`,
        }]);
      }
      models.push(model);
    }
  }

  if (models.length === 0) throw new BuildError('Model 注册表没有型号源文件', [{ severity: 'error', code: 'model_registry.empty', path: '/data/models', message: '至少需要一个 data/models/<developer_id>/<model>.toml 文件' }]);

  return { models };
}

function readTomlModel(
  source: string,
  filePath: string,
  developerId: string,
  developer: { id: string; name: string } | undefined,
): Model {
  const record = parseToml<Record<string, unknown>>(source, filePath);
  for (const field of ['id', 'developer_id']) {
    if (Object.hasOwn(record, field)) throw new Error(`Model ${field} is derived from the directory and filename: ${filePath}`);
  }
  if (typeof record.name !== 'string' || !record.name.trim()) throw new Error(`Model name is required: ${filePath}`);
  if (typeof developer?.name !== 'string') throw new Error(`Missing developer.toml for ${filePath}`);
  const modelSlug = path.basename(filePath, '.toml');
  const developerName = typeof record.developer_name === 'string' ? record.developer_name : developer.name;
  const { developer_name: _developerName, ...modelFields } = record;
  return {
    ...modelFields,
    id: `${developerId}/${modelSlug}`,
    developer_id: developerId,
    developer_name: developerName,
  } as unknown as Model;
}

/**
 * 加载参考汇率快照（`data/fx/*.json`）。
 *
 * 快照是**可选**的：没有快照时站点只显示原币价——
 * 「未取得可信汇率」不等于「汇率是 1:1」，更不等于可以拿一个猜的汇率顶上。
 */
export async function loadFxReference(dataDir: string): Promise<FxReference | null> {
  const fxDir = path.join(dataDir, 'upstream', 'fx');
  if (!existsSync(fxDir)) return null;

  const entries = (await readdir(fxDir, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => entry.name)
    .sort();

  if (entries.length === 0) return null;
  if (entries.length > 1) {
    throw new BuildError('参考汇率快照只能有一份', [
      {
        severity: 'error',
        code: 'fx.multiple_snapshots',
        path: '/assets/datasets/fx.json',
        message: `data/upstream/fx/ 下存在多份快照：${entries.join(', ')}`,
      },
    ]);
  }

  const raw = await readFile(path.join(fxDir, entries[0] as string), 'utf8');
  return JSON.parse(raw) as FxReference;
}

export async function buildCatalog(options: BuildOptions): Promise<BuildResult> {
  const schemaVersion = options.schemaVersion ?? DEFAULT_SCHEMA_VERSION;
  const generatedAt = options.generatedAt ?? new Date().toISOString();
  const sourceDocuments = await loadProviderDocuments(options.dataDir);
  const modelSource = await loadModelRegistrySource(options.dataDir);
  const fxReference = await loadFxReference(options.dataDir);

  const issues: ValidationIssue[] = [];
  for (const document of sourceDocuments) {
    const report = validateProviderDocument(document);
    issues.push(...report.issues);
  }
  const modelRegistryInput = {
    schema_version: schemaVersion,
    data_version: 'pending',
    generated_at: generatedAt,
    ...modelSource,
  };
  issues.push(...validateModelRegistryDocument(modelRegistryInput, sourceDocuments).issues);

  // 参考汇率是**可选派生层**：有快照就校验并发布，没有就只发一条提示——
  // 站点退化成「只显示原币价」，而不是拿猜的汇率顶上。
  if (fxReference) {
    const fxReport = validateFxReference(fxReference);
    issues.push(...fxReport.issues);
  } else {
    issues.push({
      severity: 'warning',
      code: 'fx.snapshot_absent',
      path: '/assets/datasets/fx.json',
      message: '未找到参考汇率快照，站点将只展示原币价（不提供参考换算）',
    });
  }

  const documents = sourceDocuments;

  const dataVersion = options.dataVersion ?? deriveDataVersion(documents, modelSource, generatedAt);
  const modelsById = new Map(modelSource.models.map((model) => [model.id, model]));
  const updateTimestamps = gitFileTimestamps(path.resolve(options.dataDir, '..'));
  const providerUpdatedAt = new Map(documents.map((doc) => {
    const prefix = `data/providers/${doc.provider.id}/`;
    const changedAt = [...updateTimestamps.entries()]
      .filter(([file]) => file.startsWith(prefix))
      .map(([, time]) => time)
      .sort()
      .at(-1);
    return [doc.provider.id, changedAt ?? updateTimestamps.get(`data/providers/${doc.provider.id}.json`) ?? generatedAt] as const;
  }));
  const modelUpdatedAt = new Map(modelSource.models.map((model) => {
    const slug = model.id.split('/').at(-1)!.replace(/\./g, '-');
    return [model.id, updateTimestamps.get(`data/models/${model.developer_id}/${slug}.toml`)
      ?? updateTimestamps.get(`data/models/${model.developer_id}/${slug}.json`)
      ?? generatedAt] as const;
  }));
  const modelRegistry: ModelRegistryDocument = { ...modelRegistryInput, data_version: dataVersion };
  const stats = countCatalog(documents, modelsById);

  const files: { path: string; sha256: string; bytes: number }[] = [];
  const datasetFiles: string[] = [];
  const v1Dir = path.join(options.outDir, 'v1');
  const datasetsDir = path.join(options.outDir, 'assets', 'datasets');

  const write = async (relativePath: string, content: string): Promise<void> => {
    const target = path.join(options.outDir, relativePath);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content, 'utf8');
    files.push({
      path: `/${relativePath}`,
      sha256: `sha256:${createHash('sha256').update(content).digest('hex')}`,
      bytes: Buffer.byteLength(content, 'utf8'),
    });
  };
  const writeDataset = async (relativePath: string, content: string): Promise<void> => {
    const target = path.join(options.outDir, 'assets', 'datasets', relativePath);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content, 'utf8');
    datasetFiles.push(relativePath);
  };

  // 0) 公开 JSON Schema —— 原样复制，保证发布字节与源文件一致。
  //    第三方按 `/v1/schema/public-provider.schema.json` 校验他们下载到的 JSON。
  const schemaDir = resolveSchemaDir();
  for (const name of PUBLIC_SCHEMA_FILES) {
    const source = path.join(schemaDir, name);
    if (!existsSync(source)) {
      throw new BuildError('公开 Schema 缺失，终止构建', [
        {
          severity: 'error',
          code: 'public_schema_missing',
          path: `/v1/schema/${name}`,
          message: `未找到公开 Schema 文件：${source}`,
        },
      ]);
    }
    const content = await readFile(source, 'utf8');
    await write(`v1/schema/${name}`, content);
  }

  // Stable public v1 uses its own projection. Site-only catalog indexes remain under
  // /assets/datasets and are deliberately excluded from the public API manifest.
  const publicResources = buildPublicResources(documents, modelSource.models, {
    schema_version: schemaVersion, data_version: dataVersion, generated_at: generatedAt,
  });

  // 1) Public Provider documents
  for (const document of documents) {
    const projection = publicResources.providerDocs.find((item) => item.provider.id === document.provider.id);
    const content = `${JSON.stringify(projection, null, 2)}\n`;
    await write(`v1/providers/${document.provider.id}.json`, content);
    // 不可变快照
  }

  // Site-only source-shaped data powers the existing UI. This is not a public contract.
  for (const document of documents) {
    const stamped = {
      ...document,
      schema_version: schemaVersion,
      data_version: dataVersion,
      generated_at: generatedAt,
      updated_at: providerUpdatedAt.get(document.provider.id),
    };
    await writeDataset(`providers/${document.provider.id}.json`, `${JSON.stringify(stamped, null, 2)}\n`);
  }

  // 2) Site indexes
  const summaries = documents.map((doc) => toSummary(doc, modelsById));
  await writeDataset(
    'providers.json',
    `${JSON.stringify(
      {
        schema_version: schemaVersion,
        data_version: dataVersion,
        generated_at: generatedAt,
        providers: summaries,
      },
      null,
      2,
    )}\n`,
  );

  // 3) 当前目录全量 —— Offering 粒度的供应集视图
  const catalog: CatalogCurrent = {
    schema_version: schemaVersion,
    data_version: dataVersion,
    generated_at: generatedAt,
    providers: summaries,
    offerings: collectCurrentOfferings(documents, modelsById),
    stats,
  };
  await writeDataset('catalog-current.json', `${JSON.stringify(stripProvenance(catalog), null, 2)}\n`);

  // 4) 搜索索引
  const searchIndex = buildSearchIndex(documents, modelsById, schemaVersion, dataVersion, generatedAt);
  await writeDataset('search-index.json', `${JSON.stringify(searchIndex, null, 2)}\n`);
  const siteModelRegistry = { ...modelRegistry, models: modelRegistry.models.map((model) => ({ ...model, updated_at: modelUpdatedAt.get(model.id) })) };
  await writeDataset('models.json', `${JSON.stringify(siteModelRegistry, null, 2)}\n`);

  // 5) 模型类型字典
  await writeDataset(
    'model-types.json',
    `${JSON.stringify(
      {
        schema_version: schemaVersion,
        data_version: dataVersion,
        generated_at: generatedAt,
        types: MODEL_TYPE_DESCRIPTORS.map((descriptor) => ({
          id: descriptor.id,
          label: descriptor.label,
          label_en: descriptor.label_en,
          note: descriptor.note,
          active_offering_count: stats.active_offering_count_by_type[descriptor.id] ?? 0,
        })),
        unknown_type_count: stats.active_offering_count_by_type.unknown ?? 0,
        unknown_type_display: '其他',
      },
      null,
      2,
    )}\n`,
  );

  // 6) 独立 Capability 索引（只返回稳定引用，不重复载入媒体约束）
  await writeDataset(
    'capabilities.json',
    `${JSON.stringify(
      {
        schema_version: schemaVersion,
        data_version: dataVersion,
        generated_at: generatedAt,
        capabilities: buildCapabilityIndex(documents),
      },
      null,
      2,
    )}\n`,
  );

  // 8) 参考汇率快照 —— 派生层：只提供参考换算的原始材料，不改写任何权威原价。
  if (fxReference) {
    const fxDocument: FxReferenceDocument = {
      schema_version: schemaVersion,
      data_version: dataVersion,
      generated_at: generatedAt,
      fx_reference: fxReference,
    };
    const fxReport = validateFxReferenceDocument(fxDocument);
    const fxErrors = fxReport.issues.filter((i) => i.severity === 'error');
    if (fxErrors.length > 0) {
      throw new BuildError('参考汇率文档校验未通过，终止构建', fxErrors);
    }
    const content = `${JSON.stringify(fxDocument, null, 2)}\n`;
    await writeDataset('fx.json', content);
    await write('v1/fx.json', content);
  }

  const datasetEnvelope = { schema_version: schemaVersion, data_version: dataVersion, generated_at: generatedAt };
  const publicModelRegistry = stripProvenance(modelRegistry);
  const publicModelRegistryJson = `${JSON.stringify(publicModelRegistry, null, 2)}\n`;
  await write('v1/models.json', publicModelRegistryJson);
  for (const model of publicModelRegistry.models) {
    const [developerId, modelSlug] = model.id.split('/');
    if (!developerId || !modelSlug) continue;
    const modelDocument: ModelDocument = {
      schema_version: schemaVersion,
      data_version: dataVersion,
      generated_at: generatedAt,
      model,
    };
    const modelJson = `${JSON.stringify(modelDocument, null, 2)}\n`;
    await write(`v1/models/${encodeURIComponent(developerId)}/${encodeURIComponent(modelSlug)}.json`, modelJson);
  }
  await write('v1/offerings.json', `${JSON.stringify(publicResources.offeringList, null, 2)}\n`);
  for (const [type, listing] of publicResources.modelLists) {
    await write(`v1/models/type/${encodeURIComponent(type)}.json`, `${JSON.stringify(listing, null, 2)}\n`);
  }
  await write('v1/models/type/all.json', `${JSON.stringify(publicResources.allModelList, null, 2)}\n`);
  await writeDataset('offerings.json', `${JSON.stringify({ ...publicResources.offeringDataset, ...datasetEnvelope }, null, 2)}\n`);
  // 9) Manifest —— 最后生成，保证清单描述的是已写完的产物
  const manifest: Manifest = {
    schema_version: schemaVersion,
    data_version: dataVersion,
    generated_at: generatedAt,
    catalog_status: 'draft',
    files: files.slice().sort((a, b) => a.path.localeCompare(b.path)),
  };
  await write('v1/manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);

  // 10) 清理陈旧产物。
  //
  // 放在最后一步：构建中途失败时旧产物仍在，不会留下半新半旧的目录。
  // 清理后 `dist/v1/**` 与 manifest 清单严格一致——
  // 否则从 data/ 删除的 Provider 会以「幽灵」形式留在发布目录里，
  // 还能被直接 fetch 到，但它已经不在当前目录中。
  //
  const removed = await pruneStaleFiles(v1Dir, files);
  for (const rel of removed) {
    issues.push({
      severity: 'warning',
      code: 'stale_output_removed',
      path: `/v1/${rel}`,
      message: `已清理不在当前清单中的陈旧产物：${rel}`,
    });
  }
  await pruneStaleDatasetFiles(datasetsDir, datasetFiles);

  return { dataVersion, files: manifest.files, issues, stats };
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

/** 递归列出目录下所有文件的相对路径。目录不存在时返回空数组。 */
async function listFilesRecursively(dir: string, base = dir): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const out: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await listFilesRecursively(full, base)));
    } else if (entry.isFile()) {
      out.push(path.relative(base, full));
    }
  }
  return out;
}

/** 递归列出目录下所有子目录的相对路径（由深到浅，便于自底向上清理空目录）。 */
async function listDirsRecursively(dir: string, base = dir): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const out: string[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    out.push(path.relative(base, full));
    out.push(...(await listDirsRecursively(full, base)));
  }
  return out.sort((a, b) => b.length - a.length);
}

/** 删除当前目录中不在 Manifest 清单内的文件。 */
async function pruneStaleFiles(
  v1Dir: string,
  written: readonly { path: string }[],
): Promise<string[]> {
  const expected = new Set(
    written.map((f) => f.path.replace(/^\/v1\//, '')).filter((p) => p.length > 0),
  );

  const removed: string[] = [];
  for (const rel of await listFilesRecursively(v1Dir)) {
    if (expected.has(rel)) continue;
    await rm(path.join(v1Dir, rel), { force: true });
    removed.push(rel);
  }

  // 顺带清掉因删文件而变空的目录（例如 providers/ 下 Provider 全被移除）
  for (const rel of await listDirsRecursively(v1Dir)) {
    const full = path.join(v1Dir, rel);
    try {
      const remaining = await readdir(full);
      if (remaining.length === 0) await rmdir(full);
    } catch {
      // 目录已被清理，忽略
    }
  }

  return removed.sort();
}

async function pruneStaleDatasetFiles(root: string, written: readonly string[]): Promise<void> {
  const expected = new Set(written);
  for (const rel of await listFilesRecursively(root)) {
    if (!expected.has(rel)) await rm(path.join(root, rel), { force: true });
  }
  for (const rel of await listDirsRecursively(root)) {
    try { if ((await readdir(path.join(root, rel))).length === 0) await rmdir(path.join(root, rel)); } catch { /* already removed */ }
  }
}

/**
 * 收集当前供应集的 Offering 粒度视图。
 *
 * 非当前项仍然列出并带 `status`——静态托管无法按查询参数产生不同内容，
 * 过滤由客户端按明确规则完成（见 docs/architecture.md）。
 */
export function collectCurrentOfferings(
  documents: readonly ProviderDocument[],
  models: ReadonlyMap<string, Model>,
): readonly CurrentOffering[] {
  const out: CurrentOffering[] = [];
  for (const document of documents) {
    for (const service of document.services) {
      for (const offering of service.offerings ?? []) {
        out.push({
          provider_id: document.provider.id,
          service_id: service.id,
          id: offering.id,
          model_ref: offering.model_ref,
          model_type: (offering.model_ref ? models.get(offering.model_ref)?.type : undefined) ?? 'unknown',
          account_market: serviceMarketForId(service.id)!,
          billing_currencies: pricingCurrencies(offering.pricing),
          status: offering.status ?? 'unknown',
          pricing: offering.pricing ?? [],
          ...(offering.links ? { links: offering.links } : {}),
        });
      }
    }
  }
  return out;
}

export function toSummary(doc: ProviderDocument, models: ReadonlyMap<string, Model>): ProviderSummary {
  const accountMarkets = new Set<ProviderSummary['account_markets'][number]>();
  const currencies = new Set<string>();
  for (const service of doc.services) {
    accountMarkets.add(serviceMarketForId(service.id)!);
    for (const currency of serviceBillingCurrencies(doc, service)) currencies.add(currency);
  }

  let activeOfferingCount = 0;
  let capabilityCount = 0;
  for (const service of doc.services) {
    for (const offering of service.offerings ?? []) {
      if (offering.status === 'active' || offering.status === 'restricted') activeOfferingCount += 1;
    }
    capabilityCount += service.capabilities?.length ?? 0;
  }

  return {
    id: doc.provider.id,
    name: doc.provider.name,
    aliases: doc.provider.aliases,
    kind: doc.provider.kind,
    ...(doc.provider.logo ? { logo: doc.provider.logo } : {}),
    account_markets: [...accountMarkets],
    billing_currencies: [...currencies].sort(),
    model_types: collectModelTypes(doc, models),
    active_offering_count: activeOfferingCount,
    service_capability_count: capabilityCount,
    ...(doc.provider.official_integration
      ? { official_integration: doc.provider.official_integration }
      : {}),
  };
}

export function buildSearchIndex(
  documents: readonly ProviderDocument[],
  models: ReadonlyMap<string, Model>,
  schemaVersion: string,
  dataVersion: string,
  generatedAt: string,
): {
  schema_version: string;
  data_version: string;
  generated_at: string;
  entries: SearchIndexEntry[];
} {
  const entries: SearchIndexEntry[] = [];

  for (const doc of documents) {
    const provider = doc.provider;
    entries.push({
      kind: 'provider',
      provider_id: provider.id,
      title: provider.name,
      subtitle: provider.kind,
      keywords: [...provider.aliases, provider.id],
      href: `/providers/${provider.id}`,
    });

    for (const service of doc.services) {
      for (const offering of service.offerings ?? []) {
        if (offering.status !== 'active' && offering.status !== 'restricted') continue;
        entries.push({
          kind: 'offering',
          provider_id: provider.id,
          id: offering.id,
          title: offering.id,
          subtitle: `${provider.name} · ${service.name}`,
          keywords: [offering.id, models.get(offering.model_ref ?? '')?.type ?? 'unknown'],
          model_type: models.get(offering.model_ref ?? '')?.type ?? 'unknown',
          href: `/providers/${encodeURIComponent(provider.id)}?service=${encodeURIComponent(service.id)}#${offeringAnchorId(offering.id)}`,
        });
      }
    }
  }

  return {
    schema_version: schemaVersion,
    data_version: dataVersion,
    generated_at: generatedAt,
    entries,
  };
}

/** A CSS-selector-safe and reversible-by-comparison anchor for arbitrary Offering IDs. */
function offeringAnchorId(offeringId: string): string {
  const codePoints = Array.from(offeringId, (character) => character.codePointAt(0)!.toString(16));
  return `offering-${codePoints.join('-')}`;
}

interface CapabilityIndexEntry {
  readonly provider_id: string;
  readonly service_id: string;
  readonly kind: string;
  readonly href: string;
}

function buildCapabilityIndex(documents: readonly ProviderDocument[]): CapabilityIndexEntry[] {
  const entries: CapabilityIndexEntry[] = [];
  for (const doc of documents) {
    for (const service of doc.services) {
      for (const capability of service.capabilities ?? []) {
        entries.push({
          provider_id: doc.provider.id,
          service_id: service.id,
          kind: capability.kind,
          href: `/providers/${doc.provider.id}/capabilities/${capability.kind}?service=${encodeURIComponent(service.id)}`,
        });
      }
    }
  }
  return entries;
}

/** Read the latest commit timestamp for each source file in one Git traversal. */
function gitFileTimestamps(repoRoot: string): Map<string, string> {
  try {
    const output = execFileSync('git', ['log', '--format=@@%cI', '--name-only', '--', 'data/providers', 'data/models'], {
      cwd: repoRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
    });
    const timestamps = new Map<string, string>();
    let current = '';
    for (const line of output.split(/\r?\n/)) {
      if (line.startsWith('@@')) { current = line.slice(2); continue; }
      if (line && current && !timestamps.has(line)) timestamps.set(line, current);
    }
    return timestamps;
  } catch {
    // Temporary fixture builds have no Git history; generatedAt keeps them deterministic.
    return new Map();
  }
}

/** 数据版本号：优先用显式提供，否则按内容哈希派生（保证可重现）。 */
function deriveDataVersion(documents: readonly ProviderDocument[], models: ModelRegistrySourceDocument, generatedAt: string): string {
  const hash = createHash('sha256');
  for (const document of documents) {
    hash.update(JSON.stringify(document));
  }
  hash.update(JSON.stringify(models));
  const datePart = generatedAt.slice(0, 10).replace(/-/g, '');
  return `${datePart}.${hash.digest('hex').slice(0, 6)}`;
}

export class BuildError extends Error {
  readonly issues: readonly ValidationIssue[];
  constructor(message: string, issues: readonly ValidationIssue[]) {
    super(message);
    this.name = 'BuildError';
    this.issues = issues;
  }
}

export { KNOWN_MODEL_TYPES, modelTypeLabel };
export type { ModelType };
