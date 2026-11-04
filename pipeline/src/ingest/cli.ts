#!/usr/bin/env node
/** 固定来源采集命令；所有入参只能指向 registry 中登记的 source_id。 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadProviderDocuments } from '../compile/build.ts';
import { findIngestSource, INGEST_SOURCES } from './registry.ts';
import { captureSnapshot } from './snapshot.ts';
import { generateFeedDiscoveryCandidates } from './feed-discovery.ts';
import { collectMiniMax } from './adapters/minimax/collect.ts';
import { collectZhipu } from './adapters/zhipu/collect.ts';
import { collectMoonshotai } from './adapters/moonshotai/collect.ts';
import { collectStepfun } from './adapters/stepfun/collect.ts';
import { collectDeepseek } from './adapters/deepseek/collect.ts';
import { collectAlibaba } from './adapters/alibaba/collect.ts';
import { collectVolcengine } from './adapters/volcengine/collect.ts';
import { collectVolcengineGlobal } from './adapters/volcengine/global-collect.ts';
import { collectTencent } from './adapters/tencent/collect.ts';
import { collectXiaomi } from './adapters/xiaomi/collect.ts';
import { collectBailing } from './adapters/bailing/collect.ts';
import { collectOpenAI } from './adapters/openai/collect.ts';
import { previewLatestProviderIRCandidate } from './ir/preview.ts';
import { applyLatestProviderIRCandidate } from './ir/apply.ts';
import { pruneUnregisteredCollectorSources } from './collector-registry.ts';
import { collectGoogle } from './adapters/google/collect.ts';
import { collectXAI } from './adapters/xai/collect.ts';
import { collectMeta } from './adapters/meta/collect.ts';
import {
  pruneIngestArtifacts,
  recordCandidateDecision,
  type CandidateDecision,
} from './retention.ts';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = process.env.INGEST_REPO_ROOT
  ? path.resolve(process.env.INGEST_REPO_ROOT)
  : path.resolve(here, '../../..');

const documentCollectors = {
  moonshotai: { label: 'Kimi 官方模型目录', note: '读取官方定价页 HTML 表格；未取得可解析行的价格保持未知。', collect: collectMoonshotai },
  stepfun: { label: '阶跃星辰官方模型目录', note: 'API 价格与 Step Plan 套餐保留为带来源的原始表格。', collect: collectStepfun },
  deepseek: { label: 'DeepSeek 官方 API 模型与价格', note: '保留高峰/非高峰、缓存阶梯与旧 ID 兼容路由差异。', collect: collectDeepseek },
  alibaba: { label: '阿里云百炼官方模型目录与计划', note: '六个条目按主体采集公开文档；不调用需账号凭证的模型 API。', collect: collectAlibaba },
  volcengine: { label: '火山方舟官方价格与 Coding Plan / Agent Plan', note: '按量价格与 Coding Plan、Agent Plan 套餐分开候选；按量价格保留不同模态计价原文。', collect: collectVolcengine },
  'volcengine-global': { label: 'BytePlus ModelArk 国际市场官方资料', note: '国际模型目录、USD 价格、区域可用性和 API 路由独立保存；与火山方舟国区分开，Provider 映射和 EU 冲突留待复核。', collect: collectVolcengineGlobal },
  tencent: { label: '腾讯云 TokenHub 模型与套餐目录', note: '模型列表、按量价格、Coding Plan、Token Plan 和生命周期动态分别保留。', collect: collectTencent },
  xiaomi: { label: '小米 MiMo 官方 API 模型目录与价格', note: '模型候选只保留目录 ID、名称和精确匹配价格；其他规格由维护者在 Model 文件中管理。', collect: collectXiaomi },
  bailing: { label: '蚂蚁百灵当前目录、API、能力与计价资料', note: '采集十二个官方来源；分离 FAQ/推荐清单、原厂价格与第三方报价，不采集 Model 规格。', collect: collectBailing },
  openai: { label: 'OpenAI 官方 API 模型、ChatGPT 方案、价格与文档', note: 'ChatGPT/Codex 方案价格从 Learn Markdown 卡片采集，并保持套餐目录 partial；区分 API、预览与弃用范围，不调用需 Key 的 Models API。', collect: collectOpenAI },
  google: { label: 'Google Gemini Developer API 模型、价格与文档', note: '不请求需 Key 的 models.list；Gemini API 与 Vertex AI 保持分离。', collect: collectGoogle },
  xai: { label: 'xAI Grok / Imagine / Voice 官方模型与价格', note: '保留区域端点与多模态计量边界；不调用需 Key 的模型清单接口。', collect: collectXAI },
  meta: { label: 'Meta Model API 官方模型与价格', note: '只把 Meta Model API 视为 Meta 托管供应；Llama 开放权重及第三方托管单独排除。', collect: collectMeta },
} as const;

// Collectors without a legacy merger are handled by the generic IR preview path.
const COLLECTOR_COMMANDS = Object.keys(documentCollectors);

function candidateTarget(command: string): { readonly providerId: string; readonly candidateScope?: 'ir' | 'ir-global' } | undefined {
  if (!(command in documentCollectors) && !['minimax', 'zhipu'].includes(command)) return undefined;
  if (command === 'tencent') return { providerId: 'tencent-tokenhub' };
  if (command === 'volcengine-global') return { providerId: 'volcengine', candidateScope: 'ir-global' };
  return { providerId: command };
}

async function runDocumentCollector(command: string): Promise<boolean> {
  if (!(command in documentCollectors)) return false;
  const collector = documentCollectors[command as keyof typeof documentCollectors];
  const result = await collector.collect({ repoRoot });
  console.log(`${collector.label}：${result.modelCount} 项；候选指纹 ${result.fingerprint}`);
  console.log(result.changed ? `已生成待审候选：${result.reviewPath}` : '规范化数据未变化，不创建新候选。');
  if (result.reviewMarkdownPath) console.log(`人工评审表：${result.reviewMarkdownPath}`);
  const irCandidate = result.irCandidate ?? (result.candidateScope === 'ir' || result.candidateScope === 'ir-global'
    ? { ...result, candidateScope: result.candidateScope }
    : undefined);
  if (irCandidate) {
    console.log(`IR 候选：${irCandidate.modelCount} 个 Offering；指纹 ${irCandidate.fingerprint}`);
    if (irCandidate.reviewMarkdownPath) console.log(`IR 人工评审表：${irCandidate.reviewMarkdownPath}`);
    const preview = await previewLatestProviderIRCandidate({ repoRoot, providerId: command, candidateScope: irCandidate.candidateScope });
    if (preview) console.log(`IR 字段变更预览：${preview.status}；${preview.reportPath}`);
  }
  console.log(`官方来源快照：${result.snapshotCount} 份；${collector.note}`);
  await pruneAndReport();
  return true;
}

async function runGlobalMerges(providerId?: string): Promise<boolean> {
  const targets = [...COLLECTOR_COMMANDS, 'minimax', 'zhipu']
    .map((command) => candidateTarget(command))
    .filter((target) => target !== undefined);
  if (providerId && !targets.some((target) => target.providerId === providerId)) return false;
  const results = [];
  for (const target of providerId ? targets.filter((item) => item.providerId === providerId) : targets) {
    const result = await previewLatestProviderIRCandidate({ repoRoot, ...target });
    if (!result) {
      console.log(`${target.providerId}：没有可用 IR 候选；未执行转换。`);
      continue;
    }
    results.push(result);
    console.log(`${result.providerId}：${result.status}；模型 ${result.offeringCount} 项；只读报告 ${result.reportPath}`);
  }
  if (!providerId) {
    console.log(`批量只读预览：${results.filter(({ status }) => status === 'converted').length} 家可投影，${results.filter(({ status }) => status === 'needs_review').length} 家待核对；没有写入正式数据。`);
  }
  return true;
}

async function pruneAndReport(): Promise<void> {
  const result = await pruneIngestArtifacts({ repoRoot });
  const unregisteredSourcesRemoved = await pruneUnregisteredCollectorSources(repoRoot);
  if (result.reviews_removed || result.snapshots_removed) {
    console.log(
      `保留策略清理：候选 ${result.reviews_removed} 份；快照 ${result.snapshots_removed} 份；` +
        `释放原始正文 ${result.snapshot_bytes_removed} bytes。`,
    );
  }
  if (unregisteredSourcesRemoved) console.log(`采集来源清理：移除已取消注册的 URL ${unregisteredSourcesRemoved} 条。`);
}

function parseOptions(args: readonly string[]): Map<string, string> {
  const options = new Map<string, string>();
  for (let index = 0; index < args.length; index += 2) {
    const name = args[index];
    const value = args[index + 1];
    if (!name?.startsWith('--') || !value || options.has(name) ||
      !['--reviewer', '--reason', '--reference'].includes(name)) {
      throw new Error('选项格式为 --name value，且不能重复');
    }
    options.set(name, value);
  }
  return options;
}

async function main(): Promise<number> {
  const [command, ...args] = process.argv.slice(2).filter((argument) => argument !== '--');
  const sourceId = args[0];

  if (command === 'sources') {
    if (INGEST_SOURCES.length === 0) {
      console.log('尚未登记 Provider 数据源。新增来源前先确认官方 URL、许可与采集范围。');
      return 0;
    }
    for (const source of INGEST_SOURCES) {
      console.log(`${source.enabled ? '启用' : '停用'}\t${source.id}\t${source.name}`);
    }
    return 0;
  }

  if (command === 'feed-discovery') {
    const providers = await loadProviderDocuments(path.join(repoRoot, 'data'));
    const candidates = generateFeedDiscoveryCandidates(providers);
    console.log(JSON.stringify(candidates, null, 2));
    console.error('以上仅为由官网地址推导的发现候选：未探测 Feed、未验证域名，也未授予 Provider、Service 或字段权限。');
    return 0;
  }

  if (command === 'fetch') {
    if (!sourceId) {
      console.error('用法：pnpm ingest:source -- <source_id>');
      return 2;
    }
    const source = findIngestSource(sourceId);
    if (!source) {
      console.error(`来源未登记：${sourceId}。可运行 pnpm ingest:sources 查看白名单。`);
      return 2;
    }
    const snapshot = await captureSnapshot(source, { repoRoot });
    console.log(
      `${snapshot.created ? '已保存' : '内容未变，复用'}原始快照：` +
        `${source.id} ${snapshot.metadata.content_hash} (${snapshot.metadata.byte_length} bytes)`,
    );
    console.log(`首次取回时间 UTC：${snapshot.metadata.retrieved_at}`);
    await pruneAndReport();
    return 0;
  }

  if (command === 'minimax') {
    const result = await collectMiniMax({ repoRoot });
    console.log(`MiniMax 中英文站模型记录：${result.modelCount} 项；候选指纹 ${result.fingerprint}`);
    console.log(result.changed ? `数据有变化，已生成评审候选：${result.reviewPath}` : '规范化数据未变化，不创建评审候选。');
    if (result.reviewMarkdownPath) console.log(`人工评审表：${result.reviewMarkdownPath}`);
    console.log(`原始来源快照：${result.snapshotCount} 份；当前/历史目录、API 能力、价格和缓存信息进入语义候选，逐模型规格由手工规格文件维护。`);
    await pruneAndReport();
    return 0;
  }

  if (command === 'zhipu') {
    const result = await collectZhipu({ repoRoot });
    console.log(`智谱 / Z.AI 国内与国际站模型观察：${result.marketCounts.cn} / ${result.marketCounts.global} 项；候选指纹 ${result.fingerprint}`);
    console.log(result.changed ? `数据有变化，已生成评审候选：${result.reviewPath}` : '规范化数据未变化，不创建评审候选。');
    if (result.reviewMarkdownPath) console.log(`人工评审表：${result.reviewMarkdownPath}`);
    console.log(`官方来源快照：${result.snapshotCount} 份；候选保留模型目录、价格表、API/协议、能力及计划文档的原始片段。`);
    await pruneAndReport();
    return 0;
  }

  if (await runDocumentCollector(command ?? '')) return 0;

  if (command === 'decision') {
    const [providerId, candidateHash, decisionValue, ...optionArgs] = args;
    if (!providerId || !candidateHash || !decisionValue) {
      console.error('用法：pnpm ingest:decision -- <provider_id> <candidate_hash> <accepted|rejected|superseded> --reviewer <name> [--reason <text>] [--reference <url>]');
      return 2;
    }
    const options = parseOptions(optionArgs);
    const reviewer = options.get('--reviewer');
    if (!reviewer) throw new Error('缺少 --reviewer');
    const decisionPath = await recordCandidateDecision({
      repoRoot,
      providerId,
      candidateHash,
      decision: decisionValue as CandidateDecision,
      reviewedBy: reviewer,
      ...(options.has('--reason') ? { reason: options.get('--reason') } : {}),
      ...(options.has('--reference') ? { reference: options.get('--reference') } : {}),
    });
    console.log(`已记录候选处理决定：${decisionPath}`);
    await pruneAndReport();
    return 0;
  }

  if (command === 'cleanup') {
    await pruneAndReport();
    return 0;
  }

  if (command === 'global-merges') {
    await runGlobalMerges();
    return 0;
  }

  if (command === 'apply-ir') {
    const providerId = args[0];
    const candidateScope = args[1] === 'ir-global' ? 'ir-global' : 'ir';
    if (!providerId || !/^[a-z0-9-]+$/.test(providerId)) {
      console.error('用法：pnpm --filter @providerlist/pipeline ingest:ir:apply -- <provider_id> [ir|ir-global]');
      return 2;
    }
    const result = await applyLatestProviderIRCandidate({ repoRoot, providerId, candidateScope });
    if (!result) {
      console.log(`${providerId}/${candidateScope}：没有可用 IR 候选。`);
      return 0;
    }
    console.log(`${providerId}/${candidateScope}：${result.status}${result.providerPath ? `；${result.providerPath}` : ''}${result.reason ? `；${result.reason}` : ''}`);
    return result.status === 'needs_review' ? 1 : 0;
  }

  if (command?.endsWith('-merge')) {
    const alias = command.slice(0, -'-merge'.length);
    const target = candidateTarget(alias);
    const providerId = target?.providerId ?? (alias === 'tencent' ? 'tencent-tokenhub' : alias);
    if (target?.candidateScope) {
      const preview = await previewLatestProviderIRCandidate({ repoRoot, ...target });
      if (!preview) {
        console.log(`${target.providerId}：没有可用 IR 候选；未执行转换。`);
        return 0;
      }
      console.log(`${preview.providerId}：${preview.status}；模型 ${preview.offeringCount} 项；只读报告 ${preview.reportPath}`);
      return 0;
    }
    if (await runGlobalMerges(providerId)) return 0;
  }

  console.error('用法：pnpm ingest:sources | pnpm ingest:source -- <source_id> | pnpm ingest:feed-discovery | pnpm ingest:global-merges | pnpm ingest:ir:apply -- <provider_id> [ir|ir-global] | pnpm ingest:<provider>:merge | pnpm ingest:decision -- <provider_id> <candidate_hash> <accepted|rejected|superseded> --reviewer <name> | pnpm ingest:cleanup');
  return 2;
}

main().then((code) => {
  process.exitCode = code;
}).catch((error: unknown) => {
  console.error(`自动采集失败：${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
