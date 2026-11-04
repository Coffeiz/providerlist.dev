import { createHash } from 'node:crypto';
import { cp, link, mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { INGEST_SOURCES } from './registry.ts';
import { MANUAL_PROVIDER_IDS, runRegisteredCollector } from './sync.ts';
import { collectVolcengineGlobal } from './adapters/volcengine/global-collect.ts';
import { GLOBAL_MERGE_PROVIDER_IDS, mergeGlobalCandidate } from './migration/legacy-merges.ts';
import { previewLatestProviderIRCandidate, previewProviderDocumentChanges } from './ir/preview.ts';
import { stripTransientEvidence } from './provenance.ts';
import type { ProviderDocument } from '@providerlist/schema/types';
import type { SnapshotMetadata } from './types.ts';
import { readProviderSource } from '../data/provider-store.ts';

interface SnapshotFixture {
  readonly metadata: SnapshotMetadata;
  readonly metadataPath: string;
  readonly bodyPath: string;
  readonly body: Buffer;
}

interface ReplayResult {
  readonly collector: string;
  readonly status: 'pass' | 'fail';
  readonly existingFingerprint: string | null;
  readonly emptyFingerprint: string | null;
  readonly existingIRFingerprint: string | null;
  readonly emptyIRFingerprint: string | null;
  readonly existingPreviewStatus: 'needs_review' | 'converted' | null;
  readonly emptyPreviewStatus: 'needs_review' | 'converted' | null;
  readonly existingPreviewDocumentAvailable: boolean | null;
  readonly emptyPreviewDocumentAvailable: boolean | null;
  readonly existingPreviewFingerprint: string | null;
  readonly emptyPreviewFingerprint: string | null;
  readonly existingProjectionIssues: readonly string[];
  readonly emptyProjectionIssues: readonly string[];
  readonly snapshots: number | null;
  readonly message: string;
}

interface MigrationComparison {
  readonly providerId: string;
  readonly status: 'compared' | 'blocked' | 'failed';
  readonly legacyStatus?: string;
  readonly irStatus?: string;
  readonly providerFieldChanges: readonly string[];
  readonly message: string;
}

const FORMAL_DATA_PATHS = [
  'data/collector',
  'data/models',
  'data/providers',
] as const;

async function walkFiles(root: string): Promise<string[]> {
  let entries;
  try { entries = await readdir(root, { withFileTypes: true }); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return [];
    throw error;
  }
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...await walkFiles(fullPath));
    else if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

async function fingerprintPaths(root: string, paths: readonly string[]): Promise<string> {
  const hash = createHash('sha256');
  for (const relative of paths) {
    const fullPath = path.join(root, relative);
    const files = await walkFiles(fullPath);
    hash.update(relative).update('\0');
    for (const file of files.sort()) {
      hash.update(path.relative(root, file)).update('\0');
      hash.update(await readFile(file));
      hash.update('\0');
    }
  }
  return `sha256:${hash.digest('hex')}`;
}

async function fixtureForSource(repoRoot: string, sourceId: string): Promise<SnapshotFixture | null> {
  const sourceDir = path.join(repoRoot, 'data/upstream/snapshots', sourceId);
  let names: string[];
  try { names = await readdir(sourceDir); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return null;
    throw error;
  }
  const candidates: { metadata: SnapshotMetadata; metadataPath: string }[] = [];
  for (const name of names.filter((entry) => entry.endsWith('.json'))) {
    const metadataPath = path.join(sourceDir, name);
    const metadata = JSON.parse(await readFile(metadataPath, 'utf8')) as SnapshotMetadata;
    if (metadata.source_id === sourceId && typeof metadata.retrieved_at === 'string') candidates.push({ metadata, metadataPath });
  }
  candidates.sort((a, b) => a.metadata.retrieved_at.localeCompare(b.metadata.retrieved_at));
  const latest = candidates.at(-1);
  if (!latest) return null;
  const bodyPath = path.join(sourceDir, latest.metadata.body_file);
  try {
    const body = await readFile(bodyPath);
    return { ...latest, bodyPath, body };
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return null;
    throw error;
  }
}

async function installFixtures(repoRoot: string, fixtures: ReadonlyMap<string, SnapshotFixture>): Promise<void> {
  for (const [sourceId, fixture] of fixtures) {
    const destinationDir = path.join(repoRoot, 'data/upstream/snapshots', sourceId);
    await mkdir(destinationDir, { recursive: true });
    await link(fixture.bodyPath, path.join(destinationDir, fixture.metadata.body_file));
    await link(fixture.metadataPath, path.join(destinationDir, `${fixture.metadata.content_hash.replace(':', '-')}.json`));
  }
}

async function prepareRoot(root: string, baseline: 'existing' | 'empty', fixtures: ReadonlyMap<string, SnapshotFixture>, sourceRoot: string): Promise<void> {
  await mkdir(path.join(root, 'data/models'), { recursive: true });
  if (baseline === 'empty') {
    // IR projection requires the canonical Model Registry for identity resolution.
    // Keep that shared reference input while clearing Provider/current-source baselines.
    for (const relative of ['data/models']) {
      const sourcePath = path.join(sourceRoot, relative);
      try {
        if ((await stat(sourcePath)).isDirectory()) await cp(sourcePath, path.join(root, relative), { recursive: true, errorOnExist: false });
      } catch (error) {
        if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
      }
    }
  }
  if (baseline === 'existing') {
    for (const relative of FORMAL_DATA_PATHS) {
      const sourcePath = path.join(sourceRoot, relative);
      try {
        if ((await stat(sourcePath)).isDirectory()) await cp(sourcePath, path.join(root, relative), { recursive: true, errorOnExist: false });
      } catch (error) {
        if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
      }
    }
  }
  await installFixtures(root, fixtures);
}

async function prepareComparisonRoot(root: string, sourceRoot: string, providerId: string): Promise<void> {
  await mkdir(path.join(root, 'docs'), { recursive: true });
  await mkdir(path.join(root, 'data'), { recursive: true });
  await mkdir(path.join(root, 'data/providers'), { recursive: true });
  for (const relative of [
    'docs/data/provider-classes.md',
    'data/models',
    'data/candidates/' + providerId,
  ]) {
    const sourcePath = path.join(sourceRoot, relative);
    try {
      await cp(sourcePath, path.join(root, relative), { recursive: true, errorOnExist: false });
    } catch (error) {
      if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    }
  }
  const providerSource = path.join(sourceRoot, 'data/providers', providerId);
  try {
    if ((await stat(providerSource)).isDirectory()) await cp(providerSource, path.join(root, 'data/providers', providerId), { recursive: true, errorOnExist: false });
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    const legacyProvider = path.join(sourceRoot, 'data/providers', `${providerId}.json`);
    try { await cp(legacyProvider, path.join(root, 'data/providers', `${providerId}.json`), { errorOnExist: false }); }
    catch (legacyError) { if (!(legacyError instanceof Error && 'code' in legacyError && legacyError.code === 'ENOENT')) throw legacyError; }
  }
}

function normalizeGeneratedMetadata(document: ProviderDocument): ProviderDocument {
  const normalized = structuredClone(document) as unknown as {
    data_version: string;
    generated_at: string;
  } & Record<string, unknown>;
  normalized.data_version = '<generated>';
  normalized.generated_at = '<generated>';
  return normalized as unknown as ProviderDocument;
}

function migrationChangeBreakdown(changes: readonly string[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const change of changes) {
    const fieldPath = change.split('|')[2]?.trim() ?? '';
    let category = 'other';
    if (fieldPath.startsWith('/pricing/') || fieldPath.startsWith('/rate_cards/')) category = 'pricing';
    else if (fieldPath.startsWith('/plans/')) category = 'plans';
    else if (fieldPath.startsWith('/provider/')) category = 'provider_profile';
    else if (fieldPath.includes('/offerings/')) category = 'offerings';
    else if (fieldPath.includes('/operations/') || fieldPath.includes('/endpoints/')) category = 'routes_and_endpoints';
    else if (fieldPath.includes('/capabilities/') || fieldPath.includes('/service_capabilities/')) category = 'capabilities';
    else if (fieldPath.startsWith('/sources/')) category = 'source_links';
    counts[category] = (counts[category] ?? 0) + 1;
  }
  return counts;
}

async function compareLegacyAndIR(sourceRoot: string, tempRoot: string, providerId: string, legacyCandidateRoot: string): Promise<MigrationComparison> {
  const legacyRoot = path.join(tempRoot, `${providerId}-legacy`);
  const irRoot = path.join(tempRoot, `${providerId}-ir`);
  try {
    await Promise.all([
      prepareComparisonRoot(legacyRoot, sourceRoot, providerId),
      prepareComparisonRoot(irRoot, sourceRoot, providerId),
    ]);
    // The replay root contains fresh IR output but intentionally has no legacy candidate.
    // Seed only the archived legacy state/review into the isolated old-converter root.
    const archivedCandidateRoot = path.join(legacyCandidateRoot, 'data/candidates', providerId);
    const legacyCandidateRootInReplay = path.join(legacyRoot, 'data/candidates', providerId);
    try {
      const archivedState = JSON.parse(await readFile(path.join(archivedCandidateRoot, 'state.json'), 'utf8')) as { candidate_hash?: string };
      if (!archivedState.candidate_hash) throw new Error(`旧候选状态缺少 candidate_hash：${providerId}`);
      await mkdir(path.join(legacyCandidateRootInReplay, 'reviews'), { recursive: true });
      await cp(path.join(archivedCandidateRoot, 'state.json'), path.join(legacyCandidateRootInReplay, 'state.json'));
      await cp(
        path.join(archivedCandidateRoot, 'reviews', `${archivedState.candidate_hash.slice(7)}.json`),
        path.join(legacyCandidateRootInReplay, 'reviews', `${archivedState.candidate_hash.slice(7)}.json`),
      );
    } catch (error) {
      if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    }
    const ir = await previewLatestProviderIRCandidate({ repoRoot: irRoot, providerId });
    if (!existsSync(path.join(legacyRoot, 'data/candidates', providerId, 'state.json'))) {
      return {
        providerId,
        status: 'blocked',
        legacyStatus: 'no_legacy_candidate',
        irStatus: ir?.status ?? 'no_domain_ir',
        providerFieldChanges: [],
        message: '该入口只写 IR 候选，没有可运行的旧格式输入；不伪造旧/新输出等价结论。',
      };
    }
    const legacy = await mergeGlobalCandidate({ repoRoot: legacyRoot, providerId });
    let legacyDocument: ProviderDocument | undefined;
    try { legacyDocument = await readProviderSource(path.join(legacyRoot, 'data'), providerId); }
    catch (error) {
      if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    }
    const irFacts = ir?.document ? stripTransientEvidence(ir.document) : null;
    if (!legacyDocument || !ir?.document || !irFacts) {
      return {
        providerId,
        status: 'blocked',
        legacyStatus: legacy.status,
        irStatus: ir?.status ?? 'no_domain_ir',
        providerFieldChanges: [],
        message: '旧转换或 IR 未生成可比较的 ProviderDocument；保留待迁移状态。',
      };
    }
    const legacyFacts = stripTransientEvidence(legacyDocument);
    const providerFieldChanges = previewProviderDocumentChanges(
      normalizeGeneratedMetadata(legacyFacts),
      normalizeGeneratedMetadata(irFacts),
    );
    return {
      providerId,
      status: 'compared',
      legacyStatus: legacy.status,
      irStatus: ir.status,
      providerFieldChanges,
      message: providerFieldChanges.length
        ? '已生成 Provider 业务字段差异；比较时忽略 data_version 和 generated_at，差异仍需领域审阅，不自动判定等价。'
        : '忽略生成元数据后，Provider 业务字段完全一致。',
    };
  } catch (error) {
    return {
      providerId,
      status: 'failed',
      providerFieldChanges: [],
      message: error instanceof Error ? error.message : String(error),
    };
  } finally {
    await Promise.all([
      rm(legacyRoot, { recursive: true, force: true }),
      rm(irRoot, { recursive: true, force: true }),
    ]);
  }
}

function deterministicSnapshotResponse(url: URL, fixturesByUrl: ReadonlyMap<string, SnapshotFixture>): Response {
  const fixture = fixturesByUrl.get(url.toString());
  if (!fixture) throw new Error(`离线快照缺失，拒绝访问网络：${url.toString()}`);
  return new Response(fixture.body, {
    status: fixture.metadata.http_status,
    headers: {
      ...(fixture.metadata.content_type ? { 'content-type': fixture.metadata.content_type } : {}),
      ...(fixture.metadata.etag ? { etag: fixture.metadata.etag } : {}),
      ...(fixture.metadata.last_modified ? { 'last-modified': fixture.metadata.last_modified } : {}),
    },
  });
}

async function main(): Promise<void> {
  const cwd = path.resolve(process.cwd());
  const repoRoot = path.resolve(process.argv[2] ?? (existsSync(path.join(cwd, 'data/upstream/snapshots')) ? cwd : path.resolve(cwd, '..')));
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), 'providerlist-snapshot-replay-'));
  const fixtures = new Map<string, SnapshotFixture>();
  const missingSources: string[] = [];
  for (const source of INGEST_SOURCES) {
    const fixture = await fixtureForSource(repoRoot, source.id);
    if (!fixture) {
      missingSources.push(source.id);
      continue;
    }
    const normalizedUrl = new URL(source.url).toString();
    const existing = fixtures.get(normalizedUrl);
    if (existing && existing.metadata.content_hash !== fixture.metadata.content_hash) {
      throw new Error(`同一来源 URL 对应不同快照，不能安全回放：${source.url}`);
    }
    fixtures.set(normalizedUrl, fixture);
  }

  const fixtureByUrl = fixtures;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input) => deterministicSnapshotResponse(new URL(input instanceof Request ? input.url : String(input)), fixtureByUrl);
  const existingRoot = path.join(tempRoot, 'existing');
  const emptyRoot = path.join(tempRoot, 'empty');
  const results: ReplayResult[] = [];
  try {
    await prepareRoot(existingRoot, 'existing', new Map([...fixtures.values()].map((fixture) => [fixture.metadata.source_id, fixture])), repoRoot);
    await prepareRoot(emptyRoot, 'empty', new Map([...fixtures.values()].map((fixture) => [fixture.metadata.source_id, fixture])), repoRoot);
    const initialFormalFingerprint = await fingerprintPaths(existingRoot, FORMAL_DATA_PATHS);
    const initialEmptyFormalFingerprint = await fingerprintPaths(emptyRoot, FORMAL_DATA_PATHS);

    const collectors = [
      ...MANUAL_PROVIDER_IDS.map((providerId) => ({ id: providerId, run: (root: string) => runRegisteredCollector(root, providerId) })),
      { id: 'volcengine:global', providerId: 'volcengine', candidateScope: 'ir-global' as const, run: (root: string) => collectVolcengineGlobal({ repoRoot: root }) },
    ];
    for (const collector of collectors) {
      try {
        const existing = await collector.run(existingRoot);
        const empty = await collector.run(emptyRoot);
        const existingLegacyFingerprint = existing.candidateScope === 'ir' ? null : existing.fingerprint;
        const emptyLegacyFingerprint = empty.candidateScope === 'ir' ? null : empty.fingerprint;
        const existingIRFingerprint = existing.irCandidate?.fingerprint ?? (existing.candidateScope === 'ir' ? existing.fingerprint : null);
        const emptyIRFingerprint = empty.irCandidate?.fingerprint ?? (empty.candidateScope === 'ir' ? empty.fingerprint : null);
        let existingPreviewStatus: 'needs_review' | 'converted' | null = null;
        let emptyPreviewStatus: 'needs_review' | 'converted' | null = null;
        let existingPreviewDocumentAvailable: boolean | null = null;
        let emptyPreviewDocumentAvailable: boolean | null = null;
        let existingPreviewFingerprint: string | null = null;
        let emptyPreviewFingerprint: string | null = null;
        let existingProjectionIssues: readonly string[] = [];
        let emptyProjectionIssues: readonly string[] = [];
        if (existingIRFingerprint && emptyIRFingerprint) {
          const previewProviderId = 'providerId' in collector ? collector.providerId : collector.id;
          const defaultPreviewScope = 'candidateScope' in collector ? collector.candidateScope : undefined;
          const existingPreviewScope = existing.irCandidate?.candidateScope ?? (existing.candidateScope === 'ir' ? 'ir' : defaultPreviewScope);
          const emptyPreviewScope = empty.irCandidate?.candidateScope ?? (empty.candidateScope === 'ir' ? 'ir' : defaultPreviewScope);
          const existingPreview = await previewLatestProviderIRCandidate({ repoRoot: existingRoot, providerId: previewProviderId, ...(existingPreviewScope ? { candidateScope: existingPreviewScope } : {}) });
          const emptyPreview = await previewLatestProviderIRCandidate({ repoRoot: emptyRoot, providerId: previewProviderId, ...(emptyPreviewScope ? { candidateScope: emptyPreviewScope } : {}) });
          existingPreviewStatus = existingPreview?.status ?? null;
          emptyPreviewStatus = emptyPreview?.status ?? null;
          existingPreviewDocumentAvailable = existingPreview ? existingPreview.document !== null : null;
          emptyPreviewDocumentAvailable = emptyPreview ? emptyPreview.document !== null : null;
          existingPreviewFingerprint = existingPreview?.projectionFingerprint ?? null;
          emptyPreviewFingerprint = emptyPreview?.projectionFingerprint ?? null;
          existingProjectionIssues = existingPreview?.projectionIssues ?? [];
          emptyProjectionIssues = emptyPreview?.projectionIssues ?? [];
        }
        const stable = existingLegacyFingerprint === emptyLegacyFingerprint && existingIRFingerprint === emptyIRFingerprint &&
          existing.snapshotCount === empty.snapshotCount && existingPreviewStatus === emptyPreviewStatus &&
          existingPreviewFingerprint === emptyPreviewFingerprint;
        results.push({
          collector: collector.id,
          status: stable ? 'pass' : 'fail',
          existingFingerprint: existingLegacyFingerprint,
          emptyFingerprint: emptyLegacyFingerprint,
          existingIRFingerprint,
          emptyIRFingerprint,
          existingPreviewStatus,
          emptyPreviewStatus,
          existingPreviewDocumentAvailable,
          emptyPreviewDocumentAvailable,
          existingPreviewFingerprint,
          emptyPreviewFingerprint,
          existingProjectionIssues,
          emptyProjectionIssues,
          snapshots: existing.snapshotCount,
          message: stable
            ? existingPreviewStatus === 'needs_review'
              ? existingPreviewDocumentAvailable === emptyPreviewDocumentAvailable
                ? existingPreviewDocumentAvailable
                  ? '两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。'
                  : '两种数据基线均处于 needs_review，且没有生成可审阅的 ProviderDocument。'
                : '候选与不依赖 Provider 现值的投影指纹稳定；只读文档可用性不同，因为现有基线可提供未采集的必填档案值，空基线不会凭空补值。'
              : '两种 Provider 数据基线的候选/IR 指纹、投影状态与快照数一致。'
            : '候选/IR 指纹、不依赖现值的投影状态/指纹或快照数因数据基线不同而变化。',
        });
      } catch (error) {
        results.push({
          collector: collector.id,
          status: 'fail',
          existingFingerprint: null,
          emptyFingerprint: null,
          existingIRFingerprint: null,
          emptyIRFingerprint: null,
          existingPreviewStatus: null,
          emptyPreviewStatus: null,
          existingPreviewDocumentAvailable: null,
          emptyPreviewDocumentAvailable: null,
          existingPreviewFingerprint: null,
          emptyPreviewFingerprint: null,
          existingProjectionIssues: [],
          emptyProjectionIssues: [],
          snapshots: null,
          message: error instanceof Error ? error.message : String(error),
        });
      }
    }

    const candidateProviders = new Set(results.filter(({ status, existingIRFingerprint }) => status === 'pass' && existingIRFingerprint).map(({ collector }) => collector));
    const migrationComparisons = await Promise.all(GLOBAL_MERGE_PROVIDER_IDS
      .filter((providerId) => candidateProviders.has(providerId))
      .map((providerId) => compareLegacyAndIR(existingRoot, tempRoot, providerId, repoRoot)));

    const afterFormalFingerprint = await fingerprintPaths(existingRoot, FORMAL_DATA_PATHS);
    const afterEmptyFormalFingerprint = await fingerprintPaths(emptyRoot, FORMAL_DATA_PATHS);
    const formalUnchanged = initialFormalFingerprint === afterFormalFingerprint;
    const emptyFormalUnchanged = initialEmptyFormalFingerprint === afterEmptyFormalFingerprint;
    const report = {
      generated_at: new Date().toISOString(),
      mode: 'offline_snapshot_replay',
      snapshot_source_count: fixtures.size,
      registered_source_count: INGEST_SOURCES.length,
      missing_sources: missingSources,
      formal_data_fingerprint_before: initialFormalFingerprint,
      formal_data_fingerprint_after: afterFormalFingerprint,
      formal_data_unchanged: formalUnchanged,
      empty_formal_data_fingerprint_before: initialEmptyFormalFingerprint,
      empty_formal_data_fingerprint_after: afterEmptyFormalFingerprint,
      empty_formal_data_unchanged: emptyFormalUnchanged,
      collector_results: results,
      migration_comparisons: migrationComparisons,
      summary: {
        passed: results.filter(({ status }) => status === 'pass').length,
        failed: results.filter(({ status }) => status === 'fail').length,
        total: results.length,
      },
    };
    console.log(JSON.stringify(report, null, 2));
    const outputPath = path.join(repoRoot, 'docs/_archived/devlogs/2026-10-26-ingestion-snapshot-replay_cn.md');
    const diffOutputPath = path.join(repoRoot, 'docs/_archived/devlogs/2026-10-27-ingestion-ir-migration-comparison.json');
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(diffOutputPath, `${JSON.stringify({ generated_at: report.generated_at, migration_comparisons: migrationComparisons }, null, 2)}\n`);
    const markdown = [
      '# 采集快照双基线回放报告',
      '',
      '**日期**：2026-10-26',
      '**影响范围**：Pipeline Provider 采集器、正式 Provider / Model / 采集来源数据只读保护',
      '',
      '## 回放方式',
      '',
      '- 使用本机 `data/upstream/snapshots/` 中每个登记来源的最新快照；脚本将快照文件以硬链接放入临时工作区，不修改本机快照缓存。',
      '- 全局 `fetch` 被固定快照映射替代；未命中快照时立即拒绝请求，不访问网络。',
      '- 分别在现有 Provider 数据和空 Provider 数据临时工作区运行全部采集入口；空基线保留共享 Model Registry，供 IR 身份解析使用。',
      '- 比较旧候选/IR 候选指纹、快照数，以及使用共同 Model Registry 且不依赖当前 Provider 文件的 IR 投影指纹。',
      '- 比较现有正式数据工作区回放前后的 Provider、Model 和采集来源文件指纹。',
      '- 对具备旧候选的 Provider，在隔离副本中以同一份现有正式数据为基线运行旧转换与 IR 预览；IR 只读沿用本轮未采集的必填档案值，并在预览备注标明待补来源。对照忽略 data_version、generated_at、站点生成时间等编译期元数据，字段差异值超过 280 字符时仅在报告中截断展示。',
      '',
      '## 结果',
      '',
      `- 登记来源：${INGEST_SOURCES.length}；可用本地快照：${fixtures.size}；缺少快照：${missingSources.length ? missingSources.map((id) => `\`${id}\``).join('、') : '无'}。`,
      `- 采集入口：${report.summary.total}；通过：${report.summary.passed}；失败：${report.summary.failed}。`,
      `- 现有正式数据只读：${formalUnchanged ? '通过' : '失败'}（${initialFormalFingerprint} → ${afterFormalFingerprint}）。`,
      `- 空基线未生成正式数据：${emptyFormalUnchanged ? '通过' : '失败'}（${initialEmptyFormalFingerprint} → ${afterEmptyFormalFingerprint}）。`,
      `- 旧转换与 IR 输出对照：${migrationComparisons.filter(({ status }) => status === 'compared').length} 个 Provider 可比，${migrationComparisons.filter(({ status }) => status === 'blocked').length} 个因旧候选或完整 IR 投影不足而阻塞；可比不代表等价，所有字段差异仍需审阅。`,
      `- 完整字段级对照（含全部旧值、新值和差异路径）：[机器可读 JSON](2026-10-27-ingestion-ir-migration-comparison.json)。`,
      '',
      '| Provider | 档案 | Offerings | Route / Endpoint | Capability | Price | Plan | 其他 |',
      '|---|---:|---:|---:|---:|---:|---:|---:|',
      ...migrationComparisons.map((comparison) => {
        const counts = migrationChangeBreakdown(comparison.providerFieldChanges);
        return `| \`${comparison.providerId}\` | ${counts.provider_profile ?? 0} | ${counts.offerings ?? 0} | ${counts.routes_and_endpoints ?? 0} | ${counts.capabilities ?? 0} | ${counts.pricing ?? 0} | ${counts.plans ?? 0} | ${counts.other ?? 0} |`;
      }),
      '',
      '分类仅按 Provider 字段 JSON Pointer 的对象路径统计；此汇总按业务字段路径帮助定位差异，不替代逐项解释或审核。',
      '',
      '| 采集入口 | 结果 | 快照数 | 旧候选指纹（现有/空） | IR 候选指纹（现有/空） | 预览状态（现有/空） | 预览文档（现有/空） | IR 投影指纹（现有/空） | 说明 |',
      '|---|---|---:|---|---|---|---|---|---|',
      ...results.map((result) => `| \`${result.collector}\` | ${result.status === 'pass' ? '通过' : '失败'} | ${result.snapshots ?? '—'} | ${result.existingFingerprint ?? '—'} / ${result.emptyFingerprint ?? '—'} | ${result.existingIRFingerprint ?? '—'} / ${result.emptyIRFingerprint ?? '—'} | ${result.existingPreviewStatus ?? '—'} / ${result.emptyPreviewStatus ?? '—'} | ${result.existingPreviewDocumentAvailable === null ? '—' : result.existingPreviewDocumentAvailable ? '有' : '无'} / ${result.emptyPreviewDocumentAvailable === null ? '—' : result.emptyPreviewDocumentAvailable ? '有' : '无'} | ${result.existingPreviewFingerprint ?? '—'} / ${result.emptyPreviewFingerprint ?? '—'} | ${result.message.replace(/[|\r\n]/g, ' ')} |`),
      '',
      '## IR 投影阻塞项',
      '',
      '以下列出待核对预览中的结构性阻塞项，帮助区分 coverage/review 提醒与无法生成字段差异的投影错误。每个 Provider 最多展示 8 项；完整结果保存在本次命令的 JSON 输出中。',
      '',
      ...results.filter(({ existingProjectionIssues }) => existingProjectionIssues.length).flatMap((result) => [
        `### ${result.collector}`,
        '',
        ...result.existingProjectionIssues.slice(0, 8).map((issue) => `- ${issue.replace(/[|\r\n]/g, ' ')}`),
        ...(result.existingProjectionIssues.length > 8 ? [`- 另有 ${result.existingProjectionIssues.length - 8} 项阻塞项。`] : []),
        '',
      ]),
      ...(results.every(({ existingProjectionIssues }) => existingProjectionIssues.length === 0) ? ['- 所有可生成预览的 IR 均无结构性阻塞项。', ''] : []),
      '## 旧转换与 IR 字段对照',
      '',
      '以下对照在隔离临时目录中以当前正式 Provider 数据作为共同基线，分别运行旧 TFacts 转换与 IR 预览，不写入正式仓库数据。IR 预览沿用本轮未采集的必填档案值以便显示字段变更，并将其标记为未由本次来源核验；空基线的回放仍独立检查不会凭空补值。比较忽略 data_version、generated_at、站点生成时间等编译期元数据；长字段值为可读性截断。字段差异属于待审阅证据，不自动等于迁移通过。',
      '',
      '| Provider | 旧转换 | IR 投影 | Provider 字段差异 | 结论 |',
      '|---|---|---|---:|---|',
      ...migrationComparisons.map((comparison) => `| \`${comparison.providerId}\` | ${comparison.legacyStatus ?? '—'} | ${comparison.irStatus ?? '—'} | ${comparison.providerFieldChanges.length} | ${comparison.message.replace(/[|\r\n]/g, ' ')} |`),
      '',
      ...migrationComparisons.flatMap((comparison) => comparison.status === 'compared' && comparison.providerFieldChanges.length ? [
        `### ${comparison.providerId} 字段差异`, '',
        ...comparison.providerFieldChanges.slice(0, 100),
        ...(comparison.providerFieldChanges.length > 100 ? [`- 另有 ${comparison.providerFieldChanges.length - 100} 项 Provider 差异，详见 JSON 回放结果。`] : []),
        '',
      ] : []),
      '## 证据边界',
      '',
      '- 这是固定本地快照回放，不证明当前上游页面仍与快照内容一致。',
      '- 缺少的来源快照不会用空正文代替；相关入口应明确失败并补齐静态快照后重跑。',
      '- 两种 Provider 数据基线的候选/IR 指纹和预览状态相同，表示采集事实及是否可投影不依赖既有 Provider 文件。仅当状态为 `converted` 时才比较 ProviderDocument 指纹；`needs_review` 的空投影不视为转换通过。空基线共享规范 Model Registry，因为身份解析需要该参考输入。正式文件只读指纹用于检测误写。',
      '',
    ].join('\n');
    await writeFile(outputPath, `${markdown}\n`);
    if (!formalUnchanged || !emptyFormalUnchanged || missingSources.length
      || results.some(({ status }) => status === 'fail')
      || migrationComparisons.some(({ status }) => status !== 'compared')) process.exitCode = 1;
  } finally {
    globalThis.fetch = originalFetch;
    await rm(tempRoot, { recursive: true, force: true });
  }
}

await main();
