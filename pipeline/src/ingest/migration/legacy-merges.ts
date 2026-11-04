import { createHash } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Model, ProviderDocument, Service, Offering, Route, Source, Evidence, Plan, PricingGroup, PricingRate, PriceCondition } from '@providerlist/schema/types';
import { validateProviderDocument } from '@providerlist/schema/validation';
import { loadModelRegistrySource } from '../../compile/build.ts';
import type { CandidateEnvelope, SnapshotMetadata } from '../types.ts';
import { readableDocumentationUrl } from '../documentation-url.ts';
import { resolveModelRefPreservingExisting } from '../model-reference.ts';
import { renderProviderModelReferenceReview } from '../model-review.ts';
import { stripTransientEvidence } from '../provenance.ts';
import { mergeCollectedSources } from '../collector-registry.ts';
import { readProviderSource, writeProviderSource } from '../../data/provider-store.ts';

type JsonObject = Record<string, unknown>;
type Candidate = CandidateEnvelope<JsonObject>;

// Private adapter intermediate used while parsing source tables. It is converted
// to the public entity-level `pricing.rates` shape before ProviderDocument output.
interface CollectorRateDraft extends Omit<PricingRate, 'value' | 'list_value'> {
  readonly amount_decimal: string;
  readonly list_amount_decimal?: string;
}
interface CollectorRuleDraft {
  readonly id: string;
  readonly deployment?: string;
  readonly region?: string;
  readonly conditions?: readonly PriceCondition[];
  readonly when?: PriceCondition;
  readonly rate_items: readonly CollectorRateDraft[];
  readonly unsupported_metrics?: readonly string[];
  readonly source_refs?: readonly string[];
}
interface CollectorPriceDraft {
  readonly id: string;
  readonly offering_ref: string;
  readonly service_ref: string;
  readonly currency: string;
  readonly unit: PricingRate['unit'];
    readonly rules: readonly CollectorRuleDraft[];
  readonly source_refs?: readonly string[];
}

function normalizeCollectorPrices(drafts: readonly CollectorPriceDraft[]): PricingGroup[] {
  return drafts.flatMap((draft) => draft.rules.map((rule) => ({
    currency: draft.currency,
    rates: rule.rate_items.map(({ amount_decimal, list_amount_decimal, ...rate }) => ({
      ...rate,
      value: amount_decimal,
      ...(list_amount_decimal ? { list_value: list_amount_decimal } : {}),
    })),
    ...(rule.deployment ? { deployment: rule.deployment } : {}),
    ...(rule.region ? { region: rule.region } : {}),
    ...((rule.conditions?.length ? rule.conditions : rule.when ? [rule.when] : []).length
      ? { conditions: rule.conditions?.length ? rule.conditions : [rule.when!] }
      : {}),
    ...(rule.unsupported_metrics?.length ? { unsupported_metrics: rule.unsupported_metrics } : {}),
    ...(rule.source_refs?.length || draft.source_refs?.length
      ? { evidence_refs: [...new Set([...(rule.source_refs ?? []), ...(draft.source_refs ?? [])])] }
      : {}),
  })));
}
function sourceKey(value: string): string {
  return createHash('sha1').update(value).digest('hex').slice(0, 12);
}
function pointerToken(value: string): string {
  return value.replaceAll('~', '~0').replaceAll('/', '~1');
}
function offeringPricingPath(modelId: string, market: string): string {
  const serviceId = market === 'CN' ? 'cn' : market === 'GLOBAL' ? 'global' : 'unknown';
  return `/services/${serviceId}/offerings/${pointerToken(modelId)}/pricing`;
}
const routeKey = (route: Route): string => JSON.stringify(route);

function mergeEndpointRecords(
  previous: NonNullable<Service['endpoints']> = [],
  proposed: NonNullable<Service['endpoints']> = [],
): NonNullable<Service['endpoints']> {
  const merged = new Map(previous.map((endpoint) => [endpoint.id, endpoint]));
  for (const endpoint of proposed) {
    const matching = [...merged.values()].find((item) => item.id === endpoint.id || item.base_url === endpoint.base_url);
    if (!matching) {
      merged.set(endpoint.id, endpoint);
      continue;
    }
    const routes = new Map((matching.routes ?? []).map((route) => [routeKey(route), route]));
    for (const route of endpoint.routes ?? []) routes.set(routeKey(route), route);
    merged.set(matching.id, {
      ...matching,
      ...endpoint,
      id: matching.id,
      ...(routes.size ? { routes: [...routes.values()] } : {}),
    });
  }
  return [...merged.values()];
}

interface ModelPath {
  readonly path: readonly string[];
  readonly idKey?: string;
  readonly idsKey?: string;
  readonly nameKey?: string;
  readonly sourceId?: string;
  readonly sourceKey?: string;
  readonly marketKey?: string;
  readonly statusKey?: string;
  readonly categoryKey?: string;
  readonly filter?: (item: JsonObject) => boolean;
}

interface ApiEndpointConfig {
  readonly serviceId: 'cn' | 'global' | 'unknown';
  readonly id: string;
  readonly baseUrl: string;
  readonly apiRegion: string;
  readonly sourceId: string;
}

interface ApiRouteConfig {
  readonly serviceId: 'cn' | 'global' | 'unknown';
  readonly endpointId: string;
  readonly protocol: string;
  readonly method: string;
  readonly path: string;
  readonly sourceId: string;
}

interface AdapterConfig {
  readonly id: string;
  readonly name: string;
  readonly aliases: readonly string[];
  readonly kind: 'first_party' | 'aggregator' | 'cloud_platform';
  readonly docs: Readonly<Record<string, string>>;
  readonly logo: string;
  readonly models?: ModelPath;
  readonly additionalModels?: readonly ModelPath[];
  readonly apiEndpoints?: readonly ApiEndpointConfig[];
  readonly apiRoutes?: readonly ApiRouteConfig[];
  readonly planTiers?: { readonly sourceId: string; readonly serviceId: string; readonly rowsPath: readonly string[]; readonly tiers: readonly { readonly key: string; readonly name: string }[] };
  readonly unresolved: readonly string[];
}

export interface GlobalMergeResult {
  readonly providerId: string;
  readonly status: 'converted' | 'needs_review';
  readonly offeringCount: number;
  readonly providerPath?: string;
  readonly reportPath: string;
}

const CONFIGS: readonly AdapterConfig[] = [
  {
    id: 'alibaba', name: '阿里云百炼', aliases: ['Alibaba Cloud Bailian', 'Model Studio'], kind: 'cloud_platform',
    docs: { overview: 'https://docs.bailian.console.aliyun.com/zh/model-studio/' }, logo: '/logos/providers/alibaba.svg',
    models: { path: ['gallery_models'], idsKey: 'model_ids', sourceId: 'alibaba-models-gallery', categoryKey: 'section' },
    additionalModels: [
      { path: ['global_gallery_models'], idsKey: 'model_ids', sourceId: 'alibaba-global-model-catalog', categoryKey: 'section' },
      { path: ['full_model_catalog'], idsKey: 'model_ids', sourceKey: 'source_id', categoryKey: 'section' },
      {
        path: ['token_pricing_rows'], idKey: 'model_id', sourceKey: 'source_id', categoryKey: 'section',
        filter: (item) => ['alibaba-model-pricing', 'alibaba-global-model-pricing'].includes(String(item.source_id))
          && typeof item.input_price === 'string' && typeof item.output_price === 'string',
      },
    ],
    apiEndpoints: [
      { serviceId: 'cn', id: 'cn-openai', baseUrl: 'https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '华北2（北京）', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', id: 'sg-openai', baseUrl: 'https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '新加坡', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', id: 'us-openai', baseUrl: 'https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '美国（弗吉尼亚）', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', id: 'cn-anthropic', baseUrl: 'https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/apps/anthropic', apiRegion: '华北2（北京）', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', id: 'sg-anthropic', baseUrl: 'https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/apps/anthropic', apiRegion: '新加坡', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'global', id: 'global-sg-openai', baseUrl: 'https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '新加坡', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-jp-openai', baseUrl: 'https://{WorkspaceId}.ap-northeast-1.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '日本（东京）', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-de-openai', baseUrl: 'https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '德国（法兰克福）', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-us-openai', baseUrl: 'https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '美国（弗吉尼亚）', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-hk-openai', baseUrl: 'https://{WorkspaceId}.cn-hongkong.maas.aliyuncs.com/compatible-mode/v1', apiRegion: '中国香港', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-sg-anthropic', baseUrl: 'https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/apps/anthropic', apiRegion: '新加坡', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-jp-anthropic', baseUrl: 'https://{WorkspaceId}.ap-northeast-1.maas.aliyuncs.com/apps/anthropic', apiRegion: '日本（东京）', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-de-anthropic', baseUrl: 'https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/apps/anthropic', apiRegion: '德国（法兰克福）', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-us-anthropic', baseUrl: 'https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/apps/anthropic', apiRegion: '美国（弗吉尼亚）', sourceId: 'alibaba-global-api-base-url' },
      { serviceId: 'global', id: 'global-hk-anthropic', baseUrl: 'https://{WorkspaceId}.cn-hongkong.maas.aliyuncs.com/apps/anthropic', apiRegion: '中国香港', sourceId: 'alibaba-global-api-base-url' },
    ],
    apiRoutes: [
      { serviceId: 'cn', endpointId: 'cn-openai', protocol: 'chat-completions', method: 'POST', path: '/chat/completions', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', endpointId: 'sg-openai', protocol: 'chat-completions', method: 'POST', path: '/chat/completions', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', endpointId: 'us-openai', protocol: 'chat-completions', method: 'POST', path: '/chat/completions', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', endpointId: 'cn-anthropic', protocol: 'messages', method: 'POST', path: '/v1/messages', sourceId: 'alibaba-api-compatibility' },
      { serviceId: 'cn', endpointId: 'sg-anthropic', protocol: 'messages', method: 'POST', path: '/v1/messages', sourceId: 'alibaba-api-compatibility' },
      ...(['sg', 'jp', 'de', 'us', 'hk'] as const).flatMap((region) => [
        { serviceId: 'global' as const, endpointId: `global-${region}-openai`, protocol: 'chat-completions', method: 'POST', path: '/chat/completions', sourceId: 'alibaba-global-api-compatibility' },
        { serviceId: 'global' as const, endpointId: `global-${region}-anthropic`, protocol: 'messages', method: 'POST', path: '/v1/messages', sourceId: 'alibaba-global-api-compatibility' },
      ]),
    ],
    unresolved: ['模型 API 列表需要 API Key 与业务空间 ID；模型目录来源用于对应市场的公共目录供应观察，不表示任意账号均有权限。', '价格按官方部署地域建模；套餐价、促销价和缓存价不混入标准按量 Token 费率。', '公开端点 URL 含 {WorkspaceId} 模板，调用前必须替换为账号实际业务空间 ID。', '联网搜索与网页抓取仅关联官方文档精确提及的模型 ID；按量价格保留官方地域条件。'],
  },
  { id: 'deepseek', name: 'DeepSeek', aliases: ['DeepSeek'], kind: 'first_party', docs: { overview: 'https://api-docs.deepseek.com/' }, logo: '/logos/providers/deepseek.svg', models: { path: ['current_models'], idKey: '', sourceId: 'deepseek-models-api' }, additionalModels: [{ path: ['cn_current_models'], idKey: '', sourceId: 'deepseek-cn-models-api' }], apiEndpoints: [{ serviceId: 'global', id: 'openai-compatible', baseUrl: 'https://api.deepseek.com', apiRegion: '全球', sourceId: 'deepseek-chat-api' }, { serviceId: 'global', id: 'anthropic-compatible', baseUrl: 'https://api.deepseek.com/anthropic', apiRegion: '全球', sourceId: 'deepseek-anthropic-api' }, { serviceId: 'cn', id: 'openai-compatible', baseUrl: 'https://api.deepseek.com', apiRegion: '全球', sourceId: 'deepseek-cn-chat-api' }, { serviceId: 'cn', id: 'anthropic-compatible', baseUrl: 'https://api.deepseek.com/anthropic', apiRegion: '全球', sourceId: 'deepseek-cn-anthropic-api' }], apiRoutes: [{ serviceId: 'global', endpointId: 'openai-compatible', protocol: 'chat-completions', method: 'POST', path: '/chat/completions', sourceId: 'deepseek-chat-api' }, { serviceId: 'global', endpointId: 'openai-compatible', protocol: 'responses', method: 'POST', path: '/responses', sourceId: 'deepseek-responses-api' }, { serviceId: 'global', endpointId: 'anthropic-compatible', protocol: 'messages', method: 'POST', path: '/v1/messages', sourceId: 'deepseek-anthropic-api' }, { serviceId: 'cn', endpointId: 'openai-compatible', protocol: 'chat-completions', method: 'POST', path: '/chat/completions', sourceId: 'deepseek-cn-chat-api' }, { serviceId: 'cn', endpointId: 'openai-compatible', protocol: 'responses', method: 'POST', path: '/responses', sourceId: 'deepseek-cn-responses-api' }, { serviceId: 'cn', endpointId: 'anthropic-compatible', protocol: 'messages', method: 'POST', path: '/v1/messages', sourceId: 'deepseek-cn-anthropic-api' }], unresolved: ['Search / Fetch 为独立 API，按市场分别记录，不能关联成模型 API 内置工具。', 'API 模型目录接口需 API Key；当前目录和能力依据公开文档，不代表具体账号权限或实测。', '旧兼容 ID 仅保留候选证据'] },
  { id: 'moonshotai', name: '月之暗面', aliases: ['Kimi', 'Moonshot AI'], kind: 'first_party', docs: { overview: 'https://platform.kimi.com/docs' }, logo: '/logos/providers/moonshotai.svg', models: { path: ['current_models'], sourceKey: 'source_id', marketKey: 'market', statusKey: 'status' }, apiEndpoints: [{ serviceId: 'cn', id: 'openai-compatible', baseUrl: 'https://api.moonshot.cn/v1', apiRegion: '中国', sourceId: 'moonshotai-api-list-models' }], unresolved: ['推理、Batch 与联网搜索价格页未取得可转换表格', '模型能力不从 API 示例推断'] },
  { id: 'stepfun', name: '阶跃星辰', aliases: ['StepFun'], kind: 'first_party', docs: { overview: 'https://platform.stepfun.com/docs' }, logo: '/logos/providers/stepfun.svg', models: { path: ['current_models'], sourceKey: 'source_id', marketKey: 'market' }, apiEndpoints: [{ serviceId: 'cn', id: 'openai-compatible', baseUrl: 'https://api.stepfun.com/v1', apiRegion: '中国', sourceId: 'stepfun-quickstart' }], unresolved: ['仅收录通用目录明确给出的精确 API ID；其他价格表 ID 未并入目录'] },
  { id: 'tencent-tokenhub', name: '腾讯云 TokenHub', aliases: ['Tencent TokenHub', '腾讯混元 TokenHub'], kind: 'cloud_platform', docs: { overview: 'https://cloud.tencent.com/document/product/1729' }, logo: '/logos/providers/tencent-tokenhub.svg', models: { path: ['model_ids'] }, unresolved: ['当前仅解析视频模型的输入图片阶梯价格；其他按量价格仍待逐类映射，Coding Plan 与 Token Plan 保持独立', '未将账户列表响应视为所有账号可用', '套餐专属端点和旧混元按量端点不能替代 TokenHub 通用推理端点；候选尚未采集后者的 Base URL 与协议'] },
  {
    id: 'volcengine', name: '火山方舟', aliases: ['Volcengine Ark'], kind: 'cloud_platform', docs: { overview: 'https://www.volcengine.com/docs/82379/1099320' }, logo: '/logos/providers/volcengine.svg',
    models: { path: ['model_catalog_evidence'], idsKey: 'model_ids', filter: (item) => ['推荐模型', '**其他模型**', '其他模型'].includes(String(item.section ?? '')) },
    additionalModels: [{
      path: ['model_catalog_evidence'], idsKey: 'model_ids', sourceId: 'volcengine-model-list', categoryKey: 'section',
      filter: (item) => {
        const currentIds = new Set([
          'doubao-seedance-2-5-260628', 'doubao-seedance-2-0-260128', 'doubao-seedance-2-0-fast-260128', 'doubao-seedance-2-0-mini-260615',
          'doubao-seed3d-2-0-260328', 'hyper3d-gen2-260112', 'hitem3d-2-0-251223', 'doubao-embedding-vision-251215',
        ]);
        return ['视频生成能力', '3D生成能力', '向量化能力'].includes(String(item.section ?? ''))
          && Array.isArray(item.model_ids)
          && (item.model_ids as unknown[]).every((id) => typeof id === 'string' && currentIds.has(id));
      },
    }],
    unresolved: ['仅纳入当前模型目录明确列出的 Seedance、3D 与向量型号；其他类别及待下线型号保持未确认', '价格按模态与计量单位映射；Seedance 条件价按官方维度保留', '批量推理费率按输入长度和音频/文本维度记录；精调模型专属费率不映射到基础模型 Offering', '候选只保存了 Coding Plan 交互式端点；不将它冒充标准模型 API 接口'],
  },
  { id: 'xiaomi', name: '小米 MiMo', aliases: ['Xiaomi MiMo'], kind: 'first_party', docs: { overview: 'https://platform.xiaomimimo.com/#/docs' }, logo: '/logos/providers/xiaomi.svg', models: { path: ['api_catalog_models'], idKey: 'id', nameKey: 'name', sourceKey: 'source_id' }, apiEndpoints: [{ serviceId: 'global', id: 'openai-compatible', baseUrl: 'https://api.xiaomimimo.com/v1', apiRegion: '全球', sourceId: 'xiaomi-api-model-list-doc' }, { serviceId: 'global', id: 'anthropic-compatible', baseUrl: 'https://api.xiaomimimo.com/anthropic', apiRegion: '全球', sourceId: 'xiaomi-api-model-list-doc' }], unresolved: ['5 项通用退役表与 API 目录冲突，冲突项不写为供应中', '价格载荷未声明币种、计量单位与市场'] },
];

const CURRENT_CATALOG_IDS = new Set(['alibaba', 'deepseek', 'moonshotai', 'stepfun', 'volcengine']);

function getPath(root: unknown, keys: readonly string[]): unknown {
  let current = root;
  for (const key of keys) {
    if (!current || typeof current !== 'object') return undefined;
    current = (current as JsonObject)[key];
  }
  return current;
}

function stringValue(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function inferModelType(item: JsonObject, config: AdapterConfig, modelId = ''): string {
  if (config.id === 'anthropic') return 'chat';
  const modelPath = config.models;
  const explicit = modelPath?.categoryKey ? stringValue(item[modelPath.categoryKey]) : undefined;
  const normalized = explicit?.toLowerCase();
  if (normalized && ['chat', 'image', 'video', 'embedding', 'reranking', 'decision', 'transcription', 'speech', 'realtime', 'music'].includes(normalized)) return normalized;
  if (config.id === 'alibaba' && explicit) {
    if (/文本生成|全模态|omni-modal/i.test(explicit)) return 'chat';
    if (/视觉理解|理解/.test(explicit)) return 'chat';
    if (/图像.*生成|图像生成/.test(explicit)) return 'image';
    if (/视频.*生成|视频生成|世界模型|world models/i.test(explicit)) return 'video';
    if (/语音识别|音频识别|speech recognition/i.test(explicit)) return 'transcription';
    if (/语音合成|音频生成|speech synthesis|audio generation/i.test(explicit)) return 'speech';
    if (/语音转语音|speech.to.speech/i.test(explicit)) return 'realtime';
    if (/向量与重排序|embedding and reranking/i.test(explicit)) return /rerank/i.test(modelId) ? 'reranking' : 'embedding';
    if (/向量|embedding/i.test(explicit)) return 'embedding';
    if (/重排序|reranking/i.test(explicit)) return 'reranking';
    if (/决策模型|decision model/i.test(explicit)) return 'decision';
    if (/生成/.test(explicit)) return /wan[0-9.]*-video|video/i.test(modelId) ? 'video' : 'image';
  }
  if (config.id === 'alibaba') {
    if (/embedding/i.test(modelId)) return 'embedding';
    if (/rerank/i.test(modelId)) return 'reranking';
    if (/wan[0-9.]*-video|video-generation/i.test(modelId)) return 'video';
    if (/qwen-image|image-generation/i.test(modelId)) return 'image';
    if (/asr|speech-recognition|transcription/i.test(modelId)) return 'transcription';
    if (/tts|speech-synthesis/i.test(modelId)) return 'speech';
    if (/realtime|real-time/i.test(modelId)) return 'realtime';
    if (/^(?:deepseek|kimi(?:\/|[-.])|glm-|minimax-|mimo-|qwen)/i.test(modelId)) return 'chat';
  }
  if (config.id === 'volcengine') {
    if (/seedance/i.test(modelId)) return 'video';
    if (/seed3d|hyper3d|hitem3d/i.test(modelId)) return '3d';
    if (/embedding/i.test(modelId)) return 'embedding';
    if (/seedream|seededit/i.test(modelId)) return 'image';
    if (/^(deepseek|glm-|kimi-|dola-seed-|seed-[0-9])/i.test(modelId)) return 'chat';
  }
  return 'unknown';
}

function hash(value: unknown): string {
  return `sha256:${createHash('sha256').update(JSON.stringify(value)).digest('hex')}`;
}

function selectSource(candidate: Candidate, preferred?: string): SnapshotMetadata {
  const source = preferred ? candidate.sources.find(({ source_id }) => source_id === preferred) : undefined;
  const selected = source ?? candidate.sources.find(({ http_status }) => http_status >= 200 && http_status < 300);
  if (!selected) throw new Error(`${candidate.provider_id} 候选缺少成功来源快照`);
  return selected;
}

function modelRows(candidate: Candidate, config: AdapterConfig): { id: string; name: string; market: 'CN' | 'GLOBAL' | 'UNKNOWN'; source: SnapshotMetadata; type: string; observedStatus?: string }[] {
  if (!config.models) return [];
  const rows: { id: string; name: string; market: 'CN' | 'GLOBAL' | 'UNKNOWN'; source: SnapshotMetadata; type: string; observedStatus?: string }[] = [];
  if (config.id === 'anthropic') {
    const observations = Array.isArray(candidate.current.observations) ? candidate.current.observations as JsonObject[] : [];
    const modelObservation = observations.find(({ source_id }) => source_id === 'anthropic-models');
    const tables = Array.isArray(modelObservation?.tables) ? modelObservation.tables as JsonObject[] : [];
    const table = tables.find(({ heading }) => heading === 'Compare models');
    const headers = Array.isArray(table?.headers) ? table.headers.map(String) : [];
    const modelIds = (Array.isArray(table?.rows) ? table.rows as unknown[][] : [])
      .find((row) => row[0] === 'Claude API ID')
      ?.slice(1)
      .map((value) => stringValue(value)?.replaceAll('`', '')) ?? [];
    const source = candidate.sources.find(({ source_id }) => source_id === 'anthropic-models');
    if (!source || !headers.length || !modelIds.length) return [];
    for (const [index, rawId] of modelIds.entries()) {
      const id = stringValue(rawId);
      if (!id) continue;
      rows.push({ id, name: headers[index + 1] ?? id, market: 'GLOBAL', source, type: 'chat' });
    }
    return rows;
  }
  const sourceMarkets = new Map(candidate.sources.map(({ source_id, market }) => [source_id, market]));
  const authoritativeAlibabaCatalogIds = config.id === 'alibaba'
    ? (Array.isArray(getPath(candidate.current, ['full_model_catalog'])) ? getPath(candidate.current, ['full_model_catalog']) as JsonObject[] : [])
      .flatMap((group) => {
        const sourceId = stringValue(group.source_id);
        if (!sourceId || sourceMarkets.get(sourceId) !== 'cn' || !Array.isArray(group.model_ids)) return [];
        return (group.model_ids as unknown[]).map(stringValue).filter((id): id is string => Boolean(id));
      })
    : [];
  for (const modelPath of [config.models, ...(config.additionalModels ?? [])]) {
    const values = getPath(candidate.current, modelPath.path);
    if (!Array.isArray(values)) continue;
    for (const value of values) {
      const item: JsonObject = typeof value === 'string' ? { value } : (value && typeof value === 'object' ? value as JsonObject : {});
      if (modelPath.filter && !modelPath.filter(item)) continue;
      const rawIds = modelPath.idsKey ? item[modelPath.idsKey] : undefined;
      const candidateIds = Array.isArray(rawIds) ? rawIds : [modelPath.idKey === '' ? value : modelPath.idKey ? item[modelPath.idKey] : item.model_id ?? item.id ?? item.value];
      for (const rawId of candidateIds) {
        const id = stringValue(rawId);
        if (!id) continue;
        const name = stringValue(modelPath.nameKey ? item[modelPath.nameKey] : item.display_name ?? item.model_name ?? item.name) ?? id;
        const sourceId = modelPath.sourceId ?? stringValue(modelPath.sourceKey ? item[modelPath.sourceKey] : undefined);
        const source = selectSource(candidate, sourceId);
        const marketValue = modelPath.marketKey === '' ? undefined : stringValue(modelPath.marketKey ? item[modelPath.marketKey] : undefined) ?? source.market;
        const market = marketValue === 'cn' ? 'CN' : marketValue === 'global' ? 'GLOBAL' : 'UNKNOWN';
        if (config.id === 'alibaba' && !id.includes('/')) {
          const exactCatalogSuffixes = authoritativeAlibabaCatalogIds.filter((catalogId) =>
            catalogId !== id && (catalogId.split('/').at(-1) ?? catalogId) === id,
          );
          if (exactCatalogSuffixes.length === 1) continue;
        }
        if (config.id === 'alibaba' && modelPath.path[0] === 'token_pricing_rows' && !id.includes('/')) {
          const uniqueCatalogMatch = rows.filter((existing) =>
            existing.market === market
            && (existing.id.split('/').at(-1) ?? existing.id) === id,
          );
          // 价格表省略命名空间前缀，且斜杠后型号段唯一匹配目录调用 ID 时，
          // 将价格留给该调用 ID，不再仅凭价格表创建一个重复 Offering。
          if (uniqueCatalogMatch.length === 1 && uniqueCatalogMatch[0]!.id !== id) continue;
        }
        const observedStatus = modelPath.statusKey && stringValue(item[modelPath.statusKey])
          ? stringValue(item[modelPath.statusKey])
          : config.id === 'volcengine'
            ? String(item.raw ?? '').includes('即将下线') ? 'listed_retiring' : 'listed_current'
            : undefined;
        rows.push({ id, name, market, source, type: inferModelType(item, config, id), ...(observedStatus ? { observedStatus } : {}) });
      }
    }
  }
  const seen = new Set<string>();
  return rows.filter((row) => {
    const key = `${row.market}:${row.id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function anthropicSupplyStatusRows(candidate: Candidate): { id: string; status: 'Deprecated' | 'Retired'; deprecatedAt?: string; retirementAt?: string }[] {
  const observations = Array.isArray(candidate.current.observations) ? candidate.current.observations as JsonObject[] : [];
  const observation = observations.find(({ source_id }) => source_id === 'anthropic-deprecations');
  const table = (Array.isArray(observation?.tables) ? observation.tables as JsonObject[] : []).find(({ heading }) => heading === 'Model status');
  if (!table || !Array.isArray(table.headers) || !Array.isArray(table.rows)) return [];
  const headers = table.headers.map(String);
  const idIndex = headers.indexOf('API model name');
  const statusIndex = headers.indexOf('Current state');
  const deprecatedIndex = headers.indexOf('Deprecated');
  const retirementIndex = headers.indexOf('Tentative retirement date');
  if ([idIndex, statusIndex, deprecatedIndex, retirementIndex].some((index) => index < 0)) return [];
  return (table.rows as unknown[][]).flatMap((row) => {
    const id = stringValue(row[idIndex]);
    const status = stringValue(row[statusIndex]);
    if (!id || (status !== 'Deprecated' && status !== 'Retired')) return [];
    const parseDate = (value: unknown): string | undefined => {
      const text = stringValue(value);
      if (!text || /^(?:n\/a|to be announced)$/i.test(text)) return undefined;
      const date = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})$/i.exec(text);
      if (!date) return undefined;
      const month = new Date(`${date[1]} 1, 2000 UTC`).getUTCMonth();
      return new Date(Date.UTC(Number(date[3]), month, Number(date[2]))).toISOString();
    };
    return [{ id, status, ...(parseDate(row[deprecatedIndex]) ? { deprecatedAt: parseDate(row[deprecatedIndex]) } : {}), ...(parseDate(row[retirementIndex]) ? { retirementAt: parseDate(row[retirementIndex]) } : {}) }];
  });
}

function amount(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim().replace(/[$¥￥,]/g, '');
  return /^\d+(?:\.\d+)?$/.test(normalized) ? normalized : undefined;
}

function rateItem(metric: string, price: unknown, unit: CollectorRateDraft['unit'] = 'per_1m_tokens', listPrice?: unknown): CollectorRateDraft | undefined {
  const amountDecimal = amount(price);
  if (!amountDecimal) return undefined;
  const listAmount = amount(listPrice);
  return { metric, unit, quantity: 1, amount_decimal: amountDecimal, ...(listAmount && listAmount !== amountDecimal ? { list_amount_decimal: listAmount } : {}) };
}

function volcengineCollectorPriceDrafts(candidate: Candidate, model: ReturnType<typeof modelRows>[number], evidence: Evidence[]): CollectorPriceDraft[] {
  if (model.market !== 'CN') return [];
  const source = candidate.sources.find(({ source_id }) => source_id === 'volcengine-model-pricing');
  const values = getPath(candidate.current, ['pricing_evidence']);
  if (!source || !Array.isArray(values)) return [];
  const rows = values as JsonObject[];
  const ref = `pricing-volcengine-${sourceKey(model.id)}`;
  const batchCollectorPriceDraft = volcengineBatchCollectorPriceDraft(model, rows, source.source_id, ref, evidence);
  const videoIds: Readonly<Record<string, string>> = {
    'doubao-seedance-2-5-260628': 'doubao-seedance-2.5',
    'doubao-seedance-2-0-260128': 'doubao-seedance-2.0',
    'doubao-seedance-2-0-fast-260128': 'doubao-seedance-2.0-fast',
    'doubao-seedance-2-0-mini-260615': 'doubao-seedance-2.0-mini',
  };
  const videoId = videoIds[model.id];
  if (videoId) {
    const priceRows = rows.filter((row) => row.section === '按token单价' && Array.isArray(row.model_ids) && (row.model_ids as unknown[]).includes(videoId));
    let resolutions: string[] = [];
    const rules: CollectorRuleDraft[] = [];
    for (const row of priceRows) {
      const raw = String(row.raw ?? '');
      const resolutionText = raw.match(/输出视频分辨率为\s*([^|]+)/)?.[1];
      if (resolutionText) resolutions = [...resolutionText.matchAll(/(?:\d{3,4}p|4k)/gi)].map((match) => match[0]!.toLowerCase());
      const price = raw.match(/输入(不含|包含)视频：\s*(\d+(?:\.\d+)?)/);
      if (!price || !resolutions.length) continue;
      const resolution: NonNullable<CollectorRuleDraft['conditions']>[number] = resolutions.length === 1
        ? { field: 'video.output_resolution', operator: 'eq', value: resolutions[0] }
        : { any: resolutions.map((value) => ({ field: 'video.output_resolution', operator: 'eq' as const, value })) };
      const item = rateItem('video_generation_token', price[2]);
      if (item) rules.push({
        id: `video-price-${rules.length + 1}`,
        conditions: [resolution, { field: 'video.input_includes_video', operator: 'eq', value: price[1] === '包含' }],
        rate_items: [item],
      });
    }
    if (!rules.length) return [];
    evidence.push({ id: ref, source_ref: source.source_id, field: offeringPricingPath(model.id, model.market), assertion: `火山方舟官方价格页列出 ${videoId} 的视频 Token 单价，并按输出分辨率与输入是否含视频分档。` });
    return [{ id: `volcengine-${sourceKey(model.id)}-video`, offering_ref: model.id, service_ref: 'cn', currency: 'CNY', unit: 'per_1m_tokens', rules: rules.map((rule) => ({ ...rule, source_refs: [ref] })), source_refs: [ref] }];
  }

  const vectorId = model.id === 'doubao-embedding-vision-251215' ? 'doubao-embedding-vision' : undefined;
  if (vectorId) {
    const row = rows.find((item) => item.section === '向量模型' && Array.isArray(item.model_ids) && (item.model_ids as unknown[]).includes(vectorId) && String(item.raw ?? '').includes('|'));
    const cells = String(row?.raw ?? '').split('|').map((cell) => cell.trim());
    const textPrice = rateItem('input_text', cells[2]);
    const imagePrice = rateItem('input_image', cells[3]);
    if (!textPrice || !imagePrice) return [];
    evidence.push({ id: ref, source_ref: source.source_id, field: offeringPricingPath(model.id, model.market), assertion: `火山方舟官方向量价格页列出 ${vectorId} 的文本与图片输入价格。` });
    return [{ id: `volcengine-${sourceKey(model.id)}-embedding`, offering_ref: model.id, service_ref: 'cn', currency: 'CNY', unit: 'per_1m_tokens', rules: [{ id: 'embedding-input-prices', rate_items: [textPrice, imagePrice], source_refs: [ref] }], source_refs: [ref] }];
  }

  const threeDIds: Readonly<Record<string, string>> = {
    'doubao-seed3d-2-0-260328': 'doubao-seed3d-2.0',
    'hyper3d-gen2-260112': 'Hyper3d-Gen2',
    'hitem3d-2-0-251223': 'Hitem3d-2.0',
  };
  const threeDId = threeDIds[model.id];
  if (!threeDId) return batchCollectorPriceDraft ? [batchCollectorPriceDraft] : [];
  const priceRows = rows.filter((row) => row.section === '3D 生成模型' && Array.isArray(row.model_ids) && (row.model_ids as unknown[]).includes(threeDId));
  const rules: CollectorRuleDraft[] = [];
  if (threeDId === 'Hitem3d-2.0') {
    const modes = [['标准白模', 'standard_white', '5.80'], ['标准纹理模型', 'standard_textured', '10.15'], ['高精白模', 'high_detail_white', '8.70'], ['高精纹理模型', 'high_detail_textured', '13.05']] as const;
    for (const [label, value, price] of modes) {
      if (priceRows.some((row) => String(row.raw ?? '').includes(label) && String(row.raw ?? '').includes(price))) rules.push({ id: `hitem-${value}`, conditions: [{ field: 'output_mode', value }], rate_items: [{ metric: 'generated_3d_asset', unit: 'per_request', quantity: 1, amount_decimal: price }] });
    }
  } else {
    const row = priceRows.find((item) => String(item.raw ?? '').startsWith(`|${threeDId} `));
    const cells = String(row?.raw ?? '').split('|').map((cell) => cell.trim());
    const price = amount(cells[3]);
    if (price) rules.push({ id: 'generated-3d-asset', rate_items: [{ metric: 'generated_3d_asset', unit: 'per_request', quantity: 1, amount_decimal: price }] });
  }
  if (!rules.length) return [];
  evidence.push({ id: ref, source_ref: source.source_id, field: offeringPricingPath(model.id, model.market), assertion: `火山方舟官方 3D 价格页列出 ${threeDId} 的生成价格，按每次产物计价；Hitem3D 按产物模式分档。` });
  return [{ id: `volcengine-${sourceKey(model.id)}-3d`, offering_ref: model.id, service_ref: 'cn', currency: 'CNY', unit: 'per_request', rules: rules.map((rule) => ({ ...rule, source_refs: [ref] })), source_refs: [ref] }];
}

function volcengineBatchCollectorPriceDraft(
  model: ReturnType<typeof modelRows>[number],
  rows: readonly JsonObject[],
  sourceId: string,
  evidenceRef: string,
  evidence: Evidence[],
): CollectorPriceDraft | undefined {
  const normalizedModelId = model.id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-\d{6,}$/, '').replace(/-ga$/, '');
  const batchRows = rows.filter((row) => row.section === '批量推理'
    && Array.isArray(row.model_ids)
    && !String(row.raw ?? '').includes('调整前价格')
    && (row.model_ids as unknown[]).some((value) => String(value).toLowerCase().replace(/\./g, '-') === normalizedModelId));
  if (!batchRows.length) return undefined;

  const rules: CollectorRuleDraft[] = [];
  const uniqueRules = new Set<string>();
  const unsupported = new Set<string>();
  for (const row of batchRows) {
    const cells = String(row.raw ?? '').split('|').map((cell) => cell.trim());
    const conditionText = cells[2] ?? '';
    const lengthRange = conditionText.match(/\[\s*(\d+)\s*,\s*(\d+)\s*\]|\(\s*(\d+)\s*,\s*(\d+)\s*\]/);
    const period = conditionText.includes('空闲时段') ? 'off_peak' : conditionText.includes('高峰时段') ? 'peak' : undefined;
    const upper = Number(lengthRange?.[2] ?? lengthRange?.[4] ?? 0);
    const lower = Number(lengthRange?.[1] ?? lengthRange?.[3] ?? 0);
    const maxTokens = Number.isFinite(upper) && upper > 0 ? upper * 1000 : undefined;
    if (!maxTokens && !period && !['-', '\\-', ''].includes(conditionText)) continue;
    const conditions: PriceCondition[] = [
      { field: 'request.mode', operator: 'eq', value: 'batch' },
    ];
    if (maxTokens) conditions.push({ field: 'usage.input_tokens', operator: 'lte', value: maxTokens });
    if (conditionText.startsWith('(') && lower > 0) conditions.push({ field: 'usage.input_tokens', operator: 'gt', value: lower * 1000 });
    if (period) conditions.push({ field: 'time_period', operator: 'eq', value: period });
    const rateItems: CollectorRateDraft[] = [];
    const metricColumns = [
      ['input', cells[3]], ['input_audio', cells[4]], ['cache_read', cells[5]],
      ['cache_read_audio', cells[6]], ['output', cells[7]],
    ] as const;
    for (const [metric, value] of metricColumns) {
      const parsed = rateItem(metric, value);
      if (parsed) rateItems.push(parsed);
      else if (value === '-' || value === '\\-') unsupported.add(metric);
    }
    if (!rateItems.length) continue;
    const ruleKey = JSON.stringify({ conditions, rateItems });
    if (uniqueRules.has(ruleKey)) continue;
    uniqueRules.add(ruleKey);
    rules.push({
      id: `batch-input-${lengthRange ? `${lower}-${upper}` : 'all'}`,
      conditions,
      rate_items: rateItems,
      ...(unsupported.size ? { unsupported_metrics: [...unsupported] } : {}),
    });
  }
  if (!rules.length) return undefined;
  evidence.push({
    id: evidenceRef,
    source_ref: sourceId,
    field: `${offeringPricingPath(model.id, model.market)}/batch`,
    assertion: `火山方舟官方价格页列出 ${model.id} 所属型号的批量推理 Token 价格，并按输入长度区间、文本或音频输入计价。`,
  });
  return {
    id: `volcengine-${sourceKey(model.id)}-batch`,
    offering_ref: model.id,
    service_ref: 'cn',
    currency: 'CNY',
    unit: 'per_1m_tokens',
    rules: rules.map((rule) => ({ ...rule, source_refs: [evidenceRef] })),
    source_refs: [evidenceRef],
  };
}

function deepSeekCollectorPriceDrafts(candidate: Candidate, model: ReturnType<typeof modelRows>[number], ref: string): CollectorPriceDraft[] {
  if (model.market !== 'GLOBAL' && model.market !== 'CN') return [];
  const rows = getPath(candidate.current, [model.market === 'CN' ? 'cn_pricing_rows' : 'pricing_rows']);
  if (!Array.isArray(rows)) return [];
  const header = rows.find((row) => Array.isArray((row as JsonObject).cells) && String(((row as JsonObject).cells as unknown[])[0]).toUpperCase() === (model.market === 'CN' ? '模型' : 'MODEL')) as JsonObject | undefined;
  const cells = header?.cells as unknown[] | undefined;
  const column = cells?.findIndex((cell) => typeof cell === 'string' && cell.replace(/\s*\(\d+\)$/, '') === model.id) ?? -1;
  if (column < 1) return [];
  const values: Record<string, Record<'peak' | 'off_peak', string>> = { cache_read: { peak: '', off_peak: '' }, input: { peak: '', off_peak: '' }, output: { peak: '', off_peak: '' } };
  let metric: 'cache_read' | 'input' | 'output' | undefined;
  for (const rowValue of rows) {
    const row = rowValue as JsonObject;
    const rowCells = Array.isArray(row.cells) ? row.cells as unknown[] : [];
    const label = String(rowCells[0] ?? '').toUpperCase();
    const pricingMetric = String(rowCells[1] ?? '').toUpperCase();
    if (label.startsWith('PRICING') && pricingMetric.includes('CACHE HIT')) metric = 'cache_read';
    else if (label.startsWith('PRICING') && pricingMetric.includes('CACHE MISS')) metric = 'input';
    else if (label.startsWith('PRICING') && pricingMetric.includes('OUTPUT TOKENS')) metric = 'output';
    if (/百万TOKENS输入.*缓存命中/.test(label.replace(/[\s（）()]/g, '')) || label.includes('百万TOKENS输入') && label.includes('缓存命中')) metric = 'cache_read';
    else if (label.includes('百万TOKENS输入') && label.includes('缓存未命中')) metric = 'input';
    else if (label.includes('百万TOKENS输出')) metric = 'output';
    if (label.includes('CACHE HIT')) metric = 'cache_read';
    else if (label.includes('CACHE MISS')) metric = 'input';
    else if (label.includes('OUTPUT TOKENS')) metric = 'output';
    if (!metric) continue;
    const periodLabel = label.startsWith('PRICING') || label.includes('百万TOKENS') ? String(rowCells[2] ?? '').toUpperCase() : label.includes('高峰时段') ? 'PEAK' : label.includes('空闲时段') ? 'OFF-PEAK' : ['PEAK', 'OFF-PEAK'].includes(label) ? label : String(rowCells[1] ?? '').toUpperCase();
    const period = periodLabel.includes('PEAK') && !periodLabel.includes('OFF-PEAK') ? 'peak' : periodLabel.includes('OFF-PEAK') ? 'off_peak' : undefined;
    const value = label === 'PEAK' || label.includes('高峰时段') ? rowCells[column] : label.startsWith('PRICING') ? rowCells[column + 2] : label.includes('百万TOKENS') ? rowCells[column + 2] : rowCells[column + 1];
    const parsed = typeof value === 'string' ? value.replace(/^\$/, '').replace(/[¥￥元,\s]/g, '') : undefined;
    if (period && parsed && /^\d+(?:\.\d+)?$/.test(parsed)) values[metric]![period] = parsed;
  }
  const rules: CollectorRuleDraft[] = [];
  for (const period of ['off_peak', 'peak'] as const) {
    const items = (['input', 'cache_read', 'output'] as const)
      .map((key) => rateItem(key, values[key]![period] ?? ''))
      .filter((item): item is CollectorRateDraft => item !== undefined);
    if (items.length !== 3) return [];
    rules.push({ id: `deepseek-${period}`, conditions: [{ field: 'time_period', operator: 'eq', value: period }], rate_items: items, source_refs: [ref] });
  }
  return [{ id: `deepseek-${sourceKey(model.id)}-${model.market === 'CN' ? 'cny' : 'usd'}`, service_ref: model.market === 'CN' ? 'cn' : 'global', offering_ref: model.id, currency: model.market === 'CN' ? 'CNY' : 'USD', unit: 'per_1m_tokens', rules, source_refs: [ref] }];
}

function stepFunCollectorPriceDrafts(candidate: Candidate, model: ReturnType<typeof modelRows>[number], ref: string): CollectorPriceDraft[] {
  if (model.market !== 'CN' || model.source.source_id !== 'stepfun-model-catalog') return [];
  const rows = getPath(candidate.current, ['api_price_rows']);
  if (!Array.isArray(rows)) return [];
  const cards: CollectorPriceDraft[] = [];
  for (const rowValue of rows) {
    const row = rowValue as JsonObject;
    if (row.source_id !== 'stepfun-api-pricing' || !Array.isArray(row.headers) || !Array.isArray(row.cells)) continue;
    const headers = row.headers as unknown[];
    const cells = row.cells as unknown[];
    if (String(cells[0] ?? '').replaceAll('`', '').trim() !== model.id) continue;
    if (!/输入价格（缓存未命中）/.test(String(headers[1] ?? '')) || !/输入价格（缓存命中）/.test(String(headers[2] ?? '')) || !/输出价格/.test(String(headers[3] ?? ''))) continue;
    const items = [rateItem('input', cells[1]), rateItem('cache_read', cells[2]), rateItem('output', cells[3])].filter((item): item is CollectorRateDraft => item !== undefined);
    if (items.length !== 3) continue;
    cards.push({ id: `stepfun-${sourceKey(model.id)}-cny`, service_ref: 'cn', offering_ref: model.id, currency: 'CNY', unit: 'per_1m_tokens', rules: [{ id: 'stepfun-token-rates', rate_items: items, source_refs: [ref] }], source_refs: [ref] });
  }
  return cards;
}

function tencentVideoInputImageCollectorPriceDrafts(candidate: Candidate, model: ReturnType<typeof modelRows>[number], evidence: Evidence[]): CollectorPriceDraft[] {
  if (model.market !== 'CN') return [];
  const rows = getPath(candidate.current, ['video_input_image_pricing_rows']);
  if (!Array.isArray(rows)) return [];
  const row = (rows as JsonObject[]).find((item) =>
    stringValue(item.model_name)?.toLowerCase() === model.id.toLowerCase()
    && typeof item.amount_per_image === 'string'
    && typeof item.tokens_per_image === 'string'
    && Number.isSafeInteger(item.free_image_count)
    && Number.isSafeInteger(item.billed_from_image),
  );
  const source = candidate.sources.find(({ source_id }) => source_id === 'tencent-model-pricing');
  if (!row || !source) return [];
  const freeCount = Number(row.free_image_count);
  const billedFromImage = Number(row.billed_from_image);
  const amountDecimal = amount(row.amount_per_image);
  if (!amountDecimal || billedFromImage !== freeCount + 1) return [];
  const id = `pricing-tencent-video-input-image-${createHash('sha1').update(model.id).digest('hex').slice(0, 10)}`;
  evidence.push({
    id,
    source_ref: source.source_id,
    field: `${offeringPricingPath(model.id, model.market)}/input_image`,
    assertion: `腾讯云 TokenHub 官方价格页列出 ${model.id} 输入图片前 ${freeCount} 张免费，第 ${billedFromImage} 张起每张 ${row.tokens_per_image} tokens，折合 ¥${amountDecimal} / 张。`,
  });
  return [{
    id: `tencent-${sourceKey(model.id)}-input-image-pricing`,
    offering_ref: model.id,
    service_ref: 'cn',
    currency: 'CNY',
    unit: 'per_image',
    rules: [{
      id: `from-image-${billedFromImage}`,
      conditions: [{ field: 'usage.input_image_index', operator: 'gt', value: freeCount }],
      rate_items: [{ metric: 'input_image', unit: 'per_image', quantity: 1, amount_decimal: amountDecimal }],
      source_refs: [source.source_id],
    }],
    source_refs: [source.source_id],
  }];
}

function anthropicCollectorPriceDrafts(candidate: Candidate, model: Pick<ReturnType<typeof modelRows>[number], 'id' | 'name' | 'market'>, evidence: Evidence[]): CollectorPriceDraft[] {
  const source = candidate.sources.find(({ source_id }) => source_id === 'anthropic-pricing');
  if (!source) return [];
  const observations = Array.isArray(candidate.current.observations) ? candidate.current.observations as JsonObject[] : [];
  const pricingObservation = observations.find(({ source_id }) => source_id === 'anthropic-pricing');
  const tables = Array.isArray(pricingObservation?.tables) ? pricingObservation.tables as JsonObject[] : [];
  const table = tables.find(({ heading }) => heading === 'Model pricing');
  if (!Array.isArray(table?.rows)) return [];
  const rows = (table.rows as unknown[][]).filter((row) =>
    typeof row[0] === 'string' && (row[0] === model.name || row[0].startsWith(`${model.name} (`)),
  );
  const metrics: { metric: string; ttl?: string }[] = [
    { metric: 'input' }, { metric: 'cache_write', ttl: '5min' }, { metric: 'cache_write', ttl: '1h' },
    { metric: 'cache_read' }, { metric: 'output' },
  ];
  const rules: CollectorRuleDraft[] = [];
  for (const [index, row] of rows.entries()) {
    const rateItems = metrics.flatMap((rate, metricIndex) => {
      const cell = row[metricIndex + 1];
      if (typeof cell !== 'string') return [];
      const match = cell.match(/\$([\d,]+(?:\.\d+)?)\s*\/\s*MTok\b/i);
      if (!match?.[1]) return [];
      return [{ ...rate, unit: 'per_1m_tokens' as const, quantity: 1, amount_decimal: match[1].replaceAll(',', '') }];
    });
    if (rateItems.length !== metrics.length) continue;
    const label = String(row[0]);
    const when = /prompts up to 100,000 tokens/i.test(label)
      ? { field: 'usage.input_tokens', operator: 'lte' as const, value: 100000 }
      : /prompts over 100,000 tokens/i.test(label)
        ? { field: 'usage.input_tokens', operator: 'gt' as const, value: 100000 }
        : undefined;
    const evidenceId = `anthropic-price-${createHash('sha1').update(`${model.id}/${label}`).digest('hex').slice(0, 12)}`;
    evidence.push({
      id: evidenceId,
      source_ref: source.source_id,
      field: `${offeringPricingPath(model.id, model.market)}/${index}`,
      assertion: `Anthropic 官方 API 价格表按精确模型名称「${label}」列出输入、5 分钟缓存写入、1 小时缓存写入、缓存读取和输出费率；单位为 USD / MTok。`,
    });
    rules.push({ id: `anthropic-pricing-${index + 1}`, ...(when ? { when } : {}), rate_items: rateItems, source_refs: [evidenceId] });
  }
  if (!rules.length) return [];
  return [{
    id: `anthropic-${sourceKey(model.id)}-usd`,
    service_ref: 'global',
    offering_ref: model.id,
    currency: 'USD',
    unit: 'per_1m_tokens',
    rules,
    source_refs: rules.flatMap(({ source_refs }) => source_refs ?? []),
  }];
}

function alibabaTokenLimit(inputRange: string): PriceCondition | undefined {
  if (!inputRange || /无阶梯计价/.test(inputRange)) return undefined;
  const match = inputRange.replaceAll('\\<', '<').replaceAll(',', '').match(/(\d+(?:\.\d+)?)\s*([KM]?)\s*<\s*Token\s*≤\s*(\d+(?:\.\d+)?)\s*([KM]?)/i);
  if (!match) return undefined;
  const tokens = (value: string, suffix: string) => String(Number(value) * (suffix.toUpperCase() === 'M' ? 1_000_000 : suffix.toUpperCase() === 'K' ? 1_000 : 1));
  return { all: [
    { field: 'usage.input_tokens', operator: 'gt', value: tokens(match[1]!, match[2]!) },
    { field: 'usage.input_tokens', operator: 'lte', value: tokens(match[3]!, match[4]!) },
  ] };
}

export function alibabaPriceRowsForMarket(
  rows: readonly JsonObject[],
  sourceMarkets: ReadonlyMap<string, string | undefined>,
  modelId: string,
  market: 'cn' | 'global',
): JsonObject[] {
  const currency = market === 'cn' ? 'CNY' : 'USD';
  return rows.filter((row) =>
    row.model_id === modelId
    && sourceMarkets.get(String(row.source_id)) === market
    && row.currency === currency,
  );
}

export function alibabaPriceCardId(modelId: string, serviceId: 'cn' | 'global', region: string, scope: string, currency: 'CNY' | 'USD'): string {
  const suffix = createHash('sha1').update(serviceId + '/' + region + '/' + scope + '/' + currency).digest('hex').slice(0, 6);
  return `alibaba-${sourceKey(modelId)}-${suffix}`;
}

function alibabaCollectorPriceDrafts(candidate: Candidate, model: ReturnType<typeof modelRows>[number], evidence: Evidence[], allModels: ReturnType<typeof modelRows>): CollectorPriceDraft[] {
  const rows = getPath(candidate.current, ['token_pricing_rows']);
  const tokenRows = Array.isArray(rows) ? rows : [];
  const expectedMarket = model.market === 'CN' ? 'cn' : model.market === 'GLOBAL' ? 'global' : undefined;
  if (!expectedMarket) return [];
  const sourceMarkets = new Map(candidate.sources.map(({ source_id, market }) => [source_id, market]));
  const knownModels = allModels.filter((item) => item.market === model.market);
  const modelSuffix = model.id.split('/').at(-1) ?? model.id;
  const suffixMatches = knownModels.filter((item) => (item.id.split('/').at(-1) ?? item.id) === modelSuffix);
  const matchableModelIds = new Set([model.id, ...(suffixMatches.length === 1 && modelSuffix !== model.id ? [modelSuffix] : [])]);
  const applicable = (tokenRows as JsonObject[]).filter((row) =>
    matchableModelIds.has(String(row.model_id))
    && sourceMarkets.get(String(row.source_id)) === expectedMarket
    && row.currency === (expectedMarket === 'cn' ? 'CNY' : 'USD'),
  );
  const byRegionAndScope = new Map<string, JsonObject[]>();
  for (const row of applicable) {
    const region = stringValue(row.api_region);
    if (!region) continue;
    const scope = stringValue(row.deployment_scope) ?? '';
    const unit = stringValue(row.unit) ?? 'per_1m_tokens';
    const key = region + '\u0000' + scope + '\u0000' + unit;
    byRegionAndScope.set(key, [...(byRegionAndScope.get(key) ?? []), row]);
  }
  const tokenCards = [...byRegionAndScope].map(([key, regionRows]) => {
    const [region = '', scope = '', unit = 'per_1m_tokens'] = key.split('\u0000');
    const sourceId = String(regionRows[0]!.source_id);
    const serviceId = expectedMarket === 'global' ? 'global' : 'cn';
    const currency = expectedMarket === 'global' ? 'USD' as const : 'CNY' as const;
    const ref = 'pricing-alibaba-' + createHash('sha1').update(model.id + '/' + region + '/' + scope + '/' + currency).digest('hex').slice(0, 10);
    const usedSuffixAlias = regionRows.some((row) => row.model_id !== model.id);
    const modalities = [...new Set(regionRows.map((row) => stringValue(row.input_modality)).filter((value): value is string => Boolean(value)))];
    evidence.push({ id: ref, source_ref: sourceId, field: offeringPricingPath(model.id, model.market), assertion: '阿里云百炼官方' + (serviceId === 'global' ? '国际站' : '中国区') + '按量价格表列出 ' + model.id + (usedSuffixAlias ? '；价格表型号段与唯一供应调用 ID 的斜杠后型号段匹配，已在本次转换中按唯一结果关联' : '') + ' 在' + region + (scope ? '（' + scope + '部署范围）' : '') + '的费率；保留原币种、计量单位、输入长度条件' + (modalities.length ? '及输入模态分档' : '') + '。' });
    const rules = regionRows.map((row, index) => ({
      id: `alibaba-${index + 1}`,
      ...(() => {
        const tokenLimit = alibabaTokenLimit(String(row.input_range ?? ''));
        const inputModality = stringValue(row.input_modality);
        const modalityCondition = inputModality ? { field: 'usage.input_modality', operator: 'eq' as const, value: inputModality } : undefined;
        const conditions = [tokenLimit, modalityCondition].filter((condition): condition is NonNullable<typeof condition> => condition !== undefined);
        return {
          ...(stringValue(row.deployment_scope) ? { deployment: stringValue(row.deployment_scope)! } : {}),
          region,
          ...(conditions.length ? { conditions } : {}),
        };
      })(),
      rate_items: [
        rateItem('input', row.input_price, unit as CollectorRateDraft['unit']),
        rateItem('cache_read', row.cache_read_price, unit as CollectorRateDraft['unit']),
        rateItem('output', row.output_price, unit as CollectorRateDraft['unit']),
      ].filter((item): item is CollectorRateDraft => item !== undefined),
      source_refs: [ref],
    }));
    return {
      id: alibabaPriceCardId(model.id, serviceId, region, scope, currency),
      offering_ref: model.id,
      service_ref: serviceId,
      currency,
      unit: unit as CollectorRateDraft['unit'],
      rules,
      source_refs: [ref],
    };
  });
  if (tokenCards.length) return tokenCards;

  // 逐模型详情页的价格表采用“计费项 / 价格 / 单位”格式，且可能包含非 Token 计费。
  // 目前只把中国区详情页中明确标注的北京价格并入 CN 账号市场，避免把人民币价格
  // 错配到 GLOBAL 账号市场或把其他部署地域误当成账号市场。
  if (expectedMarket !== 'cn') return [];
  const detailSpecs = getPath(candidate.current, ['model_detail_specs']);
  if (!Array.isArray(detailSpecs)) return [];
  const detailRows: JsonObject[] = detailSpecs.flatMap((specValue) => {
    const spec = specValue as JsonObject;
    if (spec.model_id !== model.id || sourceMarkets.get(String(spec.source_id)) !== 'cn' || !Array.isArray(spec.price_rows)) return [];
    return (spec.price_rows as JsonObject[])
      .filter((row) => row.api_region === '华北2（北京）' && row.currency === 'CNY')
      .map((row) => ({ ...row, source_id: spec.source_id }));
  });
  const byUnit = new Map<string, JsonObject[]>();
  for (const row of detailRows) {
    const unit = stringValue(row.unit);
    if (!unit) continue;
    byUnit.set(unit, [...(byUnit.get(unit) ?? []), row]);
  }
  return [...byUnit].map(([unit, unitRows]) => {
    const sourceId = String(unitRows[0]!.source_id);
    const ref = `pricing-alibaba-detail-${createHash('sha1').update(model.id + '/' + unit + '/' + sourceId).digest('hex').slice(0, 10)}`;
    const ttsOutputFree = model.id === 'qwen-audio-3.0-tts-plus' && sourceMarkets.get('alibaba-model-pricing') === 'cn';
    const zeroOutputRef = 'pricing-alibaba-tts-output-free';
    const evidenceRefs = [ref, ...(ttsOutputFree ? [zeroOutputRef] : [])];
    evidence.push({ id: ref, source_ref: sourceId, field: offeringPricingPath(model.id, model.market), assertion: `阿里云百炼官方模型详情页列出 ${model.id} 在华北2（北京）的计费项价格；保留原币种与计量单位。${ttsOutputFree ? '官方价格规则同时明确该系列此模型按输入字符计费、输出不计费，输出按零价记录。' : ''}` });
    if (ttsOutputFree) evidence.push({ id: zeroOutputRef, source_ref: 'alibaba-model-pricing', field: offeringPricingPath(model.id, model.market), assertion: '阿里云百炼官方 Qwen-Audio-TTS 计费规则明确：除单独注明的 3.1 TTS Flash 外，其他模型按输入文本字符数计费，输出不计费；该模型输出单价按零价记录。' });
    const rateItems = [
      ...unitRows.map((row) => rateItem(String(row.metric), row.amount, unit as CollectorRateDraft['unit'])),
      ...(ttsOutputFree ? [rateItem('output', '0', unit as CollectorRateDraft['unit'])] : []),
    ]
      .filter((item): item is CollectorRateDraft => item !== undefined);
    return {
      id: `alibaba-${sourceKey(model.id)}-detail-${createHash('sha1').update(unit).digest('hex').slice(0, 6)}`,
      offering_ref: model.id,
      service_ref: 'cn',
      currency: 'CNY' as const,
      unit: unit as CollectorRateDraft['unit'],
      rules: [{ id: 'alibaba-detail-price', conditions: [{ field: 'deployment.region', operator: 'eq' as const, value: '华北2（北京）' }], rate_items: rateItems, source_refs: evidenceRefs }],
      source_refs: evidenceRefs,
    };
  });
}

function pricingDraftsFor(candidate: Candidate, config: AdapterConfig, model: ReturnType<typeof modelRows>[number], evidence: Evidence[], allModels: ReturnType<typeof modelRows>): CollectorPriceDraft[] {
  if (config.id === 'anthropic') return anthropicCollectorPriceDrafts(candidate, model, evidence);
  if (config.id === 'volcengine') return volcengineCollectorPriceDrafts(candidate, model, evidence);
  const sourceId = config.id === 'deepseek' ? (model.market === 'CN' ? 'deepseek-cn-pricing' : 'deepseek-pricing') : config.id === 'stepfun' ? 'stepfun-api-pricing' : undefined;
  const source = sourceId ? candidate.sources.find(({ source_id }) => source_id === sourceId) : undefined;
  const refs: string[] = [];
  if (source) {
    const ref = `pricing-${config.id}-${createHash('sha1').update(`${source.source_id}/${model.id}`).digest('hex').slice(0, 10)}`;
    evidence.push({ id: ref, source_ref: source.source_id, field: offeringPricingPath(model.id, model.market), assertion: `${config.name}官方价格表明确列出模型 ${model.id} 的费率；按官方表头和币种转为价格规则。` });
    refs.push(ref);
  }
  if (config.id === 'deepseek') return deepSeekCollectorPriceDrafts(candidate, model, refs[0] ?? '');
  if (config.id === 'stepfun') return stepFunCollectorPriceDrafts(candidate, model, refs[0] ?? '');
  if (config.id === 'alibaba') return alibabaCollectorPriceDrafts(candidate, model, evidence, allModels);
  if (config.id === 'tencent-tokenhub') return tencentVideoInputImageCollectorPriceDrafts(candidate, model, evidence);
  return [];
}

function planRows(candidate: Candidate, config: AdapterConfig, evidence: Evidence[]): Plan[] {
  const planConfig = config.planTiers;
  if (!planConfig) return [];
  const source = candidate.sources.find(({ source_id }) => source_id === planConfig.sourceId);
  const pricingRows = getPath(candidate.current, planConfig.rowsPath);
  if (!source || !Array.isArray(pricingRows)) return [];
  const tiers: Plan[] = [];
  for (const tier of planConfig.tiers) {
    const escapedKey = tier.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const line = pricingRows.find((value): value is string => typeof value === 'string' && value.startsWith(tier.key));
    const row = line?.match(new RegExp(`^${escapedKey}\\s*[¥￥]([\\d,]+)\\s*[¥￥]([\\d,]+)\\s*([\\d,]+)\\s*Credits\\b`));
    if (!row) continue;
    const id = `${config.id}-token-plan-${tier.key}`;
    const ref = `plan-${tier.key}-${createHash('sha1').update(`${config.id}/${tier.key}`).digest('hex').slice(0, 8)}`;
    evidence.push({ id: ref, source_ref: source.source_id, field: `/plans/${id}/billing_options/0`, assertion: `官方 Token Plan 页面列出${tier.name}月费原价 ¥${row[1]}、活动价 ¥${row[2]}，月度额度 ${row[3]} Credits。` });
    tiers.push({
      id,
      service_ref: planConfig.serviceId,
      name: `Token Plan ${tier.name}`,
      currency: 'CNY',
      billing_options: [{ billing_period: 'month' as const, price: row[1]!.replaceAll(',', ''), sale_price: row[2]!.replaceAll(',', ''), evidence_refs: [ref] }],
      allowance: { credits: Number(row[3]!.replaceAll(',', '')) },
      links: { documentation: source.request_url },
      evidence_refs: [ref],
    });
  }
  return tiers;
}

function documentFor(candidate: Candidate, config: AdapterConfig, models: ReturnType<typeof modelRows>, modelRegistry: readonly Model[], previousProvider?: ProviderDocument): ProviderDocument {
  const sourceById = new Map<string, Source>();
  for (const metadata of candidate.sources) {
    sourceById.set(metadata.source_id, {
      id: metadata.source_id,
      kind: 'official_doc',
      url: metadata.request_url,
      retrieved_at: metadata.retrieved_at,
      content_hash: metadata.content_hash,
      locator: metadata.source_name,
    });
  }
  const evidence: Evidence[] = [];
  const plans = planRows(candidate, config, evidence);
  const groups = new Map<string, Offering[]>();
  for (const [index, model] of models.entries()) {
    const serviceId = model.market === 'CN' ? 'cn' : model.market === 'GLOBAL' ? 'global' : 'unknown';
    const ref = `catalog-${index}-${createHash('sha1').update(`${serviceId}/${model.id}`).digest('hex').slice(0, 8)}`;
    const pricingDrafts = pricingDraftsFor(candidate, config, model, evidence, models);
    const pricing = normalizeCollectorPrices(pricingDrafts);
    const directorySourceConfirmsCurrent = config.id === 'alibaba'
      ? ['alibaba-models-gallery', 'alibaba-global-model-catalog', 'alibaba-model-list-text-generation', 'alibaba-model-pricing', 'alibaba-global-model-pricing'].includes(model.source.source_id)
      : true;
    const directoryConfirmsCurrent = CURRENT_CATALOG_IDS.has(config.id) && directorySourceConfirmsCurrent && (!model.observedStatus || model.observedStatus === 'listed_current');
    const previousOffering = previousProvider?.services
      .find(({ id }) => id === serviceId)?.offerings
      ?.find(({ id }) => id === model.id);
    const preservedModelRef = resolveModelRefPreservingExisting(model.id, modelRegistry, previousOffering?.model_ref);
    const modelRef = preservedModelRef.model_ref;
    const modelRefAssertion = preservedModelRef.assertion;
    const modelRefEvidenceId = `model-ref-${createHash('sha1').update(`${config.id}/${serviceId}/${model.id}/${modelRef ?? preservedModelRef.rule}`).digest('hex').slice(0, 12)}`;
    const offering: Offering = {
      id: model.id,
      service_id: serviceId,
      model_ref: modelRef,
      status: directoryConfirmsCurrent ? 'active' : model.observedStatus === 'shut_down' ? 'retired' : 'unknown',
      links: { documentation: readableDocumentationUrl(model.source.request_url) ?? model.source.request_url },
      ...(pricing.length ? { pricing } : {}),
      evidence_refs: [ref, modelRefEvidenceId],
    };
    evidence.push({
      id: modelRefEvidenceId,
      source_ref: model.source.source_id,
      field: `/services/${serviceId}/offerings/${offering.id}/model_ref`,
      assertion: modelRefAssertion,
    });
    const list = groups.get(serviceId) ?? [];
    list.push(offering);
    groups.set(serviceId, list);
    evidence.push({ id: ref, source_ref: model.source.source_id, field: `/services/${serviceId}/offerings/${offering.id}/id`, assertion: directoryConfirmsCurrent
      ? `${config.name} 官方当前模型目录明确列出模型 ID「${model.id}」；该状态来自公开资料观察，不代表已实测特定账号权限。`
      : model.observedStatus === 'shut_down'
        ? `${config.name} 官方完整模型目录将模型 ID「${model.id}」明确标为 Shut down；未据此推断实际停服日期。`
        : `官方来源候选列出精确模型 ID「${model.id}」；候选状态${model.observedStatus ?? '未披露'}，未据此确认现售或账号可用性。` });
  }
  if (config.id === 'anthropic') {
    const source = candidate.sources.find(({ source_id }) => source_id === 'anthropic-deprecations');
    if (source) {
      const serviceId = 'global';
      const offerings = groups.get(serviceId) ?? [];
      const seenIds = new Set(offerings.map(({ id }) => id));
      for (const row of anthropicSupplyStatusRows(candidate)) {
        if (seenIds.has(row.id)) continue;
        const id = row.id;
        const modelRef = `anthropic/${row.id}`;
        const canonicalModel = modelRegistry.find((model) => model.id === modelRef);
        const modelRefEvidenceId = `model-ref-${createHash('sha1').update(`${serviceId}/${id}/${modelRef}`).digest('hex').slice(0, 12)}`;
        const evidenceId = `supply-status-${createHash('sha1').update(`${config.id}/${row.id}/${row.status}/${row.retirementAt ?? ''}`).digest('hex').slice(0, 12)}`;
        const modelPageUrl = readableDocumentationUrl(source.request_url) ?? source.request_url;
        const pricing = canonicalModel && row.status === 'Deprecated'
          ? normalizeCollectorPrices(anthropicCollectorPriceDrafts(candidate, { id: row.id, name: canonicalModel.name, market: 'GLOBAL' }, evidence))
          : [];
        offerings.push({
          id,
          service_id: serviceId,
          model_ref: canonicalModel ? modelRef : null,
          status: row.status === 'Retired' ? 'retired' : 'deprecated',
          links: { documentation: modelPageUrl },
          ...(pricing.length ? { pricing } : {}),
          evidence_refs: [evidenceId],
        });
        if (canonicalModel) {
          evidence.push({
            id: modelRefEvidenceId,
            source_ref: source.source_id,
            field: `/services/${serviceId}/offerings/${id}/model_ref`,
            assertion: `Anthropic Offering「${row.id}」已关联到规范模型「${modelRef}」。`,
          });
        }
        const statusEvidence = `Anthropic 官方 Model status 表将 ${row.id} 标记为 ${row.status}${row.deprecatedAt ? `，弃用日期 ${row.deprecatedAt.slice(0, 10)}` : ''}${row.retirementAt ? `，退役日期 ${row.retirementAt.slice(0, 10)}` : '，未公布退役日期'}。`;
        evidence.push({
          id: evidenceId,
          source_ref: source.source_id,
          field: `/services/${serviceId}/offerings/${id}/status`,
          assertion: statusEvidence,
        });
        seenIds.add(row.id);
      }
      groups.set(serviceId, offerings);
    }
  }
  const markets = [...groups.keys()];
  const endpoints = (serviceId: string): NonNullable<Service['endpoints']> => (config.apiEndpoints ?? [])
    .filter((endpoint) => endpoint.serviceId === serviceId && sourceById.has(endpoint.sourceId))
    .map((endpoint, index) => {
      const source = candidate.sources.find(({ source_id }) => source_id === endpoint.sourceId)!;
      const ref = `endpoint-${serviceId}-${createHash('sha1').update(`${endpoint.id}/${endpoint.baseUrl}`).digest('hex').slice(0, 8)}`;
      evidence.push({ id: ref, source_ref: endpoint.sourceId, field: `/services/${serviceId}/endpoints/${index}`, assertion: `官方文档给出 ${endpoint.id} API 兼容格式的 Base URL：${endpoint.baseUrl}。` });
      const routes = (config.apiRoutes ?? []).filter((route) => route.serviceId === serviceId && route.endpointId === endpoint.id && sourceById.has(route.sourceId));
      const routeViews: Route[] = routes.map((route) => {
        const routeSource = candidate.sources.find(({ source_id }) => source_id === route.sourceId)!;
        return { protocol: route.protocol, method: route.method, path: route.path, callability: 'documented_only', documentation: readableDocumentationUrl(routeSource.request_url) ?? routeSource.request_url };
      });
      return { id: endpoint.id, base_url: endpoint.baseUrl, api_region: endpoint.apiRegion, documentation: readableDocumentationUrl(source.request_url) ?? source.request_url, ...(routeViews.length ? { routes: routeViews } : {}) };
    });
  const endpointsByService = new Map(markets.map((serviceId) => [serviceId, endpoints(serviceId)]));
  const services: Service[] = markets.map((serviceId) => {
    const serviceEndpoints = endpointsByService.get(serviceId) ?? [];
    const serviceOfferings = groups.get(serviceId) ?? [];
    for (const endpoint of serviceEndpoints) {
      (endpoint as { routes?: readonly Route[] }).routes = [...(endpoint.routes ?? [])].sort((left, right) => routeKey(left).localeCompare(routeKey(right)));
    }
    return {
      id: serviceId,
      provider_id: config.id,
      name: serviceId === 'cn' ? '中国市场' : serviceId === 'global' ? '国际市场' : '市场未确认',
      ...(config.docs ? { docs: config.docs } : {}),
      offerings: serviceOfferings,
      sources: [...new Set([...models.filter((model) => (model.market === 'CN' ? 'cn' : model.market === 'GLOBAL' ? 'global' : 'unknown') === serviceId).map(({ source }) => source.source_id), ...(config.id === 'anthropic' && serviceId === 'global' ? ['anthropic-deprecations'] : []), ...(config.apiEndpoints ?? []).filter((endpoint) => endpoint.serviceId === serviceId && sourceById.has(endpoint.sourceId)).map(({ sourceId }) => sourceId)])],
      ...(serviceEndpoints.length ? { endpoints: serviceEndpoints } : {}),
      ...(serviceId === config.planTiers?.serviceId && plans.length ? { plan_ids: plans.map(({ id }) => id) } : {}),
    };
  });
  const document: ProviderDocument = {
    schema_version: '1.0.0',
    data_version: hash({ provider_id: config.id, candidate_hash: candidate.candidate_hash, models }),
    generated_at: candidate.observed_at,
    provider: {
      id: config.id,
      name: config.name,
      aliases: config.aliases,
      kind: config.kind,
      logo: config.logo,
      sources: [...sourceById.keys()],
    },
    services,
    sources: [...sourceById.values()],
    evidence,
    ...(plans.length ? { plans } : {}),
  };
  return document;
}

async function writeJson(filePath: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const temp = `${filePath}.${process.pid}.tmp`;
  await writeFile(temp, `${JSON.stringify(value, null, 2)}\n`, { flag: 'wx' });
  try { await rename(temp, filePath); } catch (error) { await rm(temp, { force: true }); throw error; }
}

function reportFor(candidate: Candidate, config: AdapterConfig, count: number, status: GlobalMergeResult['status'], endpointCount: number, routeCount: number, pricingGroupCount: number, document: ProviderDocument): string {
  const current = candidate.current;
  const pricingAliasSummary = config.id === 'alibaba' ? (() => {
    const rows = Array.isArray(current.token_pricing_rows) ? current.token_pricing_rows as JsonObject[] : [];
    const sourceMarkets = new Map(candidate.sources.map(({ source_id, market }) => [source_id, market]));
    const models = modelRows(candidate, config);
    const matches = new Map<string, { priceId: string; modelId: string; market: string; sourceId: string }>();
    for (const row of rows) {
      const priceId = stringValue(row.model_id);
      const sourceId = stringValue(row.source_id);
      const market = sourceId ? sourceMarkets.get(sourceId) : undefined;
      if (!priceId || !sourceId || !market || priceId.includes('/')) continue;
      const sameMarket = models.filter((model) =>
        (model.market === 'CN' ? 'cn' : model.market === 'GLOBAL' ? 'global' : undefined) === market,
      );
      const suffixMatches = sameMarket.filter((model) => (model.id.split('/').at(-1) ?? model.id) === priceId);
      if (suffixMatches.length !== 1 || suffixMatches[0]!.id === priceId) continue;
      const modelId = suffixMatches[0]!.id;
      matches.set(`${market}/${priceId}/${modelId}`, { priceId, modelId, market, sourceId });
    }
    if (!matches.size) return [];
    return [
      '## 价格表型号段关联复核', '',
      '价格表省略命名空间前缀时，仅在同市场目录中斜杠后型号段唯一匹配时关联；不据此新增重复 Offering。', '',
      '| 市场 | 价格表 ID | 供应调用 ID | 来源 |',
      '|---|---|---|---|',
      ...[...matches.values()].map(({ priceId, modelId, market, sourceId }) => `| ${market} | \`${priceId}\` | \`${modelId}\` | \`${sourceId}\` |`),
      '',
    ];
  })() : [];
  const detailSummary = config.id === 'alibaba' ? (() => {
    const details = Array.isArray(current.model_detail_specs) ? current.model_detail_specs as JsonObject[] : [];
    const catalog = Array.isArray(current.full_model_catalog) ? current.full_model_catalog as JsonObject[] : [];
    const countField = (key: string) => details.filter((item) => Array.isArray(item[key]) && (item[key] as unknown[]).length > 0).length;
    const countLimit = (key: string) => details.filter((item) => item.limits && typeof item.limits === 'object' && typeof (item.limits as JsonObject)[key] === 'number').length;
    return [
      '## 官方模型目录与详情页', '',
      `- CN 服务支持分类目录：${catalog.length} 个分类、${catalog.reduce((sum, item) => sum + (Array.isArray(item.model_ids) ? item.model_ids.length : 0), 0)} 个目录条目`,
      ...catalog.map((item) => `  - ${String(item.section)}：${Array.isArray(item.model_ids) ? item.model_ids.length : 0} 个`),
      `- 精确标题匹配的模型详情页：${details.length} 个`,
      `- 输入模态：${countField('input_modalities')} 个模型；输出模态：${countField('output_modalities')} 个模型`,
      ...(['context', 'input', 'output', 'rpm', 'tpm'] as const).map((key) => `- ${key} 限制：${countLimit(key)} 个模型`),
      `- 逐模型能力记录：${details.filter((item) => item.capabilities && Object.keys(item.capabilities as object).length > 0).length} 个模型`, '',
    ];
  })() : [];
  const featureSummary = config.id === 'alibaba' ? [
    '## 模态与能力覆盖', '',
    `- 输入模态：${new Set((Array.isArray(current.modality_model_ids) ? current.modality_model_ids : []).flatMap((row) => {
      const value = row as JsonObject;
      return Array.isArray(value.model_ids) ? value.model_ids.map((id) => `${String(value.modality)}:${String(id)}`) : [];
    })).size} 个模型-模态事实`,
    `- 深度思考：${Array.isArray(current.reasoning_model_ids) ? current.reasoning_model_ids.length : 0} 个模型`,
    `- 工具调用：${Array.isArray(current.tool_calling_model_ids) ? current.tool_calling_model_ids.length : 0} 个模型`,
    `- 结构化输出：${Array.isArray(current.structured_output_model_ids) ? current.structured_output_model_ids.length : 0} 个模型`,
    `- temperature：${Array.isArray(current.temperature_model_ids) ? current.temperature_model_ids.length : 0} 个模型，范围 [0, 2)`, '',
  ] : [];
  return [
    `# ${config.name} 候选转换报告`, '',
    `- 转换状态：${status === 'converted' ? `已转换；${config.id === 'alibaba' ? '按量价格页中的明确模型 ID 也作为该市场的供应观察，' : ''}账号权限和实际调用仍未实测` : '待判断；本轮不生成正式 Provider 文件'}`,
    `- 候选指纹：\`${candidate.candidate_hash}\``, `- 观察时间：${candidate.observed_at}`, `- 精确模型 ID：${count} 项`, `- 已转换 API Base URL：${endpointCount} 项`, `- 已转换协议 Route：${routeCount} 项`, `- 已转换价格组：${pricingGroupCount} 组`, '',
    `- 候选详情：[reviews/${candidate.review_markdown_file ?? `${candidate.candidate_hash.slice(7)}.md`}](reviews/${candidate.review_markdown_file ?? `${candidate.candidate_hash.slice(7)}.md`})`, '',
    ...pricingAliasSummary,
    ...detailSummary,
    ...featureSummary,
    renderProviderModelReferenceReview(document),
    '## 未自动转换项', '', ...config.unresolved.map((item) => `- ${item}`), '',
    '## 来源快照', '', ...candidate.sources.map((source) => `- \`${source.source_id}\` ${source.source_name}：${source.request_url}（${source.content_hash}）`), '',
    `${config.id === 'alibaba' ? '阿里云百炼按量价格页中结构化列出的精确模型 ID 按项目约定纳入对应市场供应观察；' : ''}模型类型、账号可用性及价格未由候选明确证明时均保留未知；公共资料观察不代表具体账号权限或 API 实测。本报告不会把页面缺席解释成不支持或退役。`, '',
  ].join('\n');
}

export async function mergeGlobalCandidate(options: { readonly repoRoot: string; readonly providerId: string }): Promise<GlobalMergeResult> {
  const config = CONFIGS.find(({ id }) => id === options.providerId);
  if (!config) throw new Error(`没有已配置的批量转换器：${options.providerId}`);
  const candidateRoot = path.join(options.repoRoot, 'data/candidates', config.id);
  const state = JSON.parse(await readFile(path.join(candidateRoot, 'state.json'), 'utf8')) as { provider_id?: string; candidate_hash?: string };
  if (state.provider_id !== config.id || !state.candidate_hash || !/^sha256:[a-f0-9]{64}$/i.test(state.candidate_hash)) throw new Error(`${config.id} 最近候选状态无效`);
  const candidate = JSON.parse(await readFile(path.join(candidateRoot, 'reviews', `${state.candidate_hash.slice(7)}.json`), 'utf8')) as Candidate;
  if (candidate.provider_id !== config.id || candidate.candidate_hash !== state.candidate_hash) throw new Error(`${config.id} 候选指纹不匹配`);
  const models = modelRows(candidate, config);
  const modelRegistry = await loadModelRegistrySource(path.join(options.repoRoot, 'data'));
  const providerDataDir = path.join(options.repoRoot, 'data');
  const currentProvider = await readOptionalProvider(providerDataDir, config.id);
  const built = documentFor(candidate, config, models, modelRegistry.models, currentProvider as ProviderDocument | undefined);
  let document = built;
  const cleanDocument = stripTransientEvidence(document);
  const validation = validateProviderDocument(cleanDocument);
  const errors = validation.issues.filter(({ severity }) => severity === 'error');
  const status = models.length > 0 && errors.length === 0 ? 'converted' : 'needs_review';
  const reportPath = path.join(candidateRoot, 'conversion-report.md');
  const baselinePath = path.join(candidateRoot, 'conversion-baseline.json');
  const baseline = await readOptionalJson(baselinePath) as { provider_hash?: string } | undefined;
  const providerDivergence = currentProvider !== undefined && (!baseline?.provider_hash || hash(currentProvider) !== baseline.provider_hash);
  const manualDivergence = providerDivergence;
  const protectedByManualData = manualDivergence && status === 'converted';
  if (status === 'converted' && !protectedByManualData) {
    await writeProviderSource(providerDataDir, cleanDocument);
    await writeJson(baselinePath, { schema_version: '1.0.0', provider_id: config.id, provider_hash: hash(cleanDocument) });
    await mergeCollectedSources(options.repoRoot, config.id, candidate.sources);
  }
  const finalStatus = protectedByManualData ? 'needs_review' : status;
  const endpointCount = document.services.reduce((sum, service) => sum + (service.endpoints?.length ?? 0), 0);
  const routeCount = document.services.reduce((sum, service) => sum + (service.endpoints ?? []).reduce((endpointSum, endpoint) => endpointSum + (endpoint.routes?.length ?? 0), 0), 0);
  const report = reportFor(candidate, config, models.length, finalStatus, endpointCount, routeCount, document.services.reduce((total, service) => total + (service.offerings ?? []).reduce((count, offering) => count + (offering.pricing?.length ?? 0), 0), 0), document);
  const protectedNote = protectedByManualData ? `\n## 人工数据保护\n\nProvider 事实与自动转换基线不一致，本次未覆盖。Provider 当前/生成指纹：\`${currentProvider === undefined ? '文件不存在' : hash(currentProvider)}\` / \`${hash(cleanDocument)}\`。\n` : '';
  await writeFile(reportPath, `${report}${protectedNote}${errors.length ? `\n## Schema 错误\n\n${errors.map(({ code, path: issuePath }) => `- ${code}：${issuePath}`).join('\n')}\n` : ''}`, 'utf8');
  return { providerId: config.id, status: finalStatus, offeringCount: models.length, ...(status === 'converted' && !protectedByManualData ? { providerPath: `data/providers/${config.id}/` } : {}), reportPath: path.relative(options.repoRoot, reportPath) };
}

/** 将 BytePlus ModelArk 国际候选作为 volcengine 的 global Service 增量合并，保留现有 CN 和人工记录。 */
export async function mergeVolcengineGlobalCandidate(options: { readonly repoRoot: string }): Promise<GlobalMergeResult> {
  const providerId = 'volcengine';
  const config = CONFIGS.find(({ id }) => id === providerId)!;
  const candidateRoot = path.join(options.repoRoot, 'data/candidates/volcengine/global');
  const state = JSON.parse(await readFile(path.join(candidateRoot, 'state.json'), 'utf8')) as { provider_id?: string; candidate_hash?: string };
  if (state.provider_id !== providerId || !state.candidate_hash || !/^sha256:[a-f0-9]{64}$/i.test(state.candidate_hash)) throw new Error('volcengine 国际候选状态无效');
  const candidate = JSON.parse(await readFile(path.join(candidateRoot, 'reviews', `${state.candidate_hash.slice(7)}.json`), 'utf8')) as Candidate;
  if (candidate.provider_id !== providerId || candidate.candidate_hash !== state.candidate_hash || candidate.current.market !== 'global') throw new Error('volcengine 国际候选指纹或市场不匹配');

  const globalConfig: AdapterConfig = {
    ...config,
    models: { path: ['model_catalog'], idKey: 'model_id', nameKey: 'label', sourceKey: 'source_id' },
    additionalModels: [],
    apiEndpoints: [
      { serviceId: 'global', id: 'ap-southeast-1-v3', baseUrl: 'https://ark.ap-southeast.bytepluses.com/api/v3', apiRegion: 'ap-southeast-1（新加坡）', sourceId: 'byteplus-modelark-region-availability' },
      { serviceId: 'global', id: 'eu-west-1-v3', baseUrl: 'https://ark.eu-west.bytepluses.com/api/v3', apiRegion: 'eu-west-1（都柏林）', sourceId: 'byteplus-modelark-region-availability' },
      { serviceId: 'global', id: 'ap-southeast-1-compatible', baseUrl: 'https://ark.ap-southeast.bytepluses.com/api/compatible/v1', apiRegion: 'ap-southeast-1（新加坡）', sourceId: 'byteplus-modelark-messages-api' },
    ],
    apiRoutes: [
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: 'chat-completions', method: 'POST', path: '/chat/completions', sourceId: 'byteplus-modelark-chat-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: 'responses', method: 'POST', path: '/responses', sourceId: 'byteplus-modelark-responses-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-compatible', protocol: 'messages', method: 'POST', path: '/messages', sourceId: 'byteplus-modelark-messages-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: 'image-generation', method: 'POST', path: '/images/generations', sourceId: 'byteplus-modelark-image-generation-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: 'video-generation', method: 'POST', path: '/contents/generations/tasks', sourceId: 'byteplus-modelark-create-video-generation-task-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: 'video-generation', method: 'GET', path: '/contents/generations/tasks/{id}', sourceId: 'byteplus-modelark-get-video-generation-task-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: 'multimodal-embedding', method: 'POST', path: '/embeddings/multimodal', sourceId: 'byteplus-modelark-multimodal-vectorization-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: '3d-generation', method: 'POST', path: '/contents/generations/tasks', sourceId: 'byteplus-modelark-hyper3d-create-task-api' },
      { serviceId: 'global', endpointId: 'ap-southeast-1-v3', protocol: '3d-generation', method: 'POST', path: '/contents/generations/tasks', sourceId: 'byteplus-modelark-hitem3d-create-task-api' },
    ],
    unresolved: [
      '目录页明确列出国际市场当前模型；这只证明公开目录供应观察，不代表账号权限或实际调用已验证。',
      '模型价格页是动态表格，候选保留相邻原文但未结构化逐型号费率，因此未生成 CollectorPriceDraft。',
      'EU 模型支持范围在官方目录与区域文档之间存在冲突；已记录 EU Base URL，不把 EU 可用性推广到所有模型。',
      'BytePlus ModelArk 按用户指示并入 volcengine Provider 的 global Service；具体供应品牌映射仍依据独立来源与本次合并决定。',
      '未有官方可解析的独立 ServiceCapability 结构数据；文档中的产品能力摘录保留在候选与证据，不提升成独立能力。',
    ],
  };
  const models = modelRows(candidate, globalConfig);
  const modelRegistry = await loadModelRegistrySource(path.join(options.repoRoot, 'data'));
  const providerDataDir = path.join(options.repoRoot, 'data');
  const reportPath = path.join(candidateRoot, 'conversion-report.md');
  const currentProvider = await readProviderSource(providerDataDir, 'volcengine');
  const built = documentFor(candidate, globalConfig, models, modelRegistry.models, currentProvider);
  const incoming = built.services.find(({ id }) => id === 'global');
  const catalogCount = Array.isArray(candidate.current.model_catalog) ? candidate.current.model_catalog.length : 0;
  if (!incoming || models.length !== catalogCount) throw new Error(`volcengine 国际目录解析不完整：${models.length}/${catalogCount}`);
  const convertedRouteCount = (incoming.endpoints ?? []).reduce((sum, endpoint) => sum + (endpoint.routes?.length ?? 0), 0);
  const existing = currentProvider.services.find(({ id }) => id === 'global');
  const serviceIndex = existing ? currentProvider.services.findIndex(({ id }) => id === 'global') : currentProvider.services.length;
  const newOfferings = incoming.offerings?.filter((offering) => !existing?.offerings?.some(({ id }) => id === offering.id)) ?? [];
  const mergedService: Service = {
    ...incoming,
    ...(existing ?? {}),
    id: 'global', provider_id: providerId, name: '国际市场',
    docs: { ...(existing?.docs ?? {}), overview: existing?.docs?.overview ?? 'https://docs.byteplus.com/en/docs/ModelArk/model-list?redirect=1' },
    sources: [...new Set([...(existing?.sources ?? []), ...(incoming.sources ?? [])])],
    endpoints: mergeEndpointRecords(existing?.endpoints, incoming.endpoints),
    offerings: [...(existing?.offerings ?? []), ...newOfferings],
  };
  const services = [...currentProvider.services];
  if (existing) services[serviceIndex] = mergedService;
  else services.push(mergedService);
  const provider: ProviderDocument = {
    ...currentProvider,
    generated_at: candidate.observed_at,
    data_version: hash({ provider_id: providerId, candidate_hash: candidate.candidate_hash, services }),
    provider: currentProvider.provider,
    services,
  };
  const cleanProvider = stripTransientEvidence(provider);
  const validation = validateProviderDocument(cleanProvider);
  const errors = validation.issues.filter(({ severity }) => severity === 'error');
  if (errors.length) throw new Error(`volcengine 国际数据 Schema 校验失败：${errors.map(({ code, path: issuePath }) => `${code} ${issuePath}`).join('; ')}`);
  await writeProviderSource(providerDataDir, cleanProvider);
  await mergeCollectedSources(options.repoRoot, providerId, candidate.sources);
  const convertedGlobal = services.find(({ id }) => id === 'global');
  const endpointCount = convertedGlobal?.endpoints?.length ?? 0;
  const report = reportFor(candidate, globalConfig, models.length, 'converted', endpointCount, convertedRouteCount, services.reduce((total, service) => total + (service.offerings ?? []).reduce((count, offering) => count + (offering.pricing?.length ?? 0), 0), 0), built);
  await writeFile(reportPath, `${report}\n## 增量合并\n\n- global Offering 合并后共 ${(mergedService.offerings ?? []).length} 项；本次新增 ${newOfferings.length} 项。\n- 保留 cn Service、现有人工 Offering 和价格卡。\n- 国际价格页未完成结构化逐型号解析，本次没有新增国际 CollectorPriceDraft。\n`, 'utf8');
  return { providerId, status: 'converted', offeringCount: newOfferings.length, providerPath: 'data/providers/volcengine/', reportPath: path.relative(options.repoRoot, reportPath) };
}

async function readOptionalProvider(dataDir: string, providerId: string): Promise<ProviderDocument | undefined> {
  try { return await readProviderSource(dataDir, providerId); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return undefined;
    throw error;
  }
}

async function readOptionalJson(filePath: string): Promise<unknown | undefined> {
  try { return JSON.parse(await readFile(filePath, 'utf8')) as unknown; }
  catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') return undefined;
    throw error;
  }
}

export const GLOBAL_MERGE_PROVIDER_IDS = CONFIGS.map(({ id }) => id);
