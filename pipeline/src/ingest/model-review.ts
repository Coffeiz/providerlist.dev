import type { Offering, ProviderDocument } from '@providerlist/schema/types';
import { serviceMarketForId } from '@providerlist/schema/types';

interface OfferingBundle {
  readonly serviceId: string;
  readonly market: string;
  readonly offering: Offering;
}

interface OfferingComparison {
  readonly before?: OfferingBundle;
  readonly after?: OfferingBundle;
  readonly fields: readonly { readonly path: string; readonly before: unknown; readonly after: unknown; readonly status: string }[];
}

function asProviderDocument(value: unknown): ProviderDocument | undefined {
  if (!value || typeof value !== 'object' || !('services' in value) || !Array.isArray(value.services)) return undefined;
  return value as ProviderDocument;
}

function modelBundles(document: ProviderDocument | undefined): Map<string, OfferingBundle> {
  const result = new Map<string, OfferingBundle>();
  if (!document) return result;

  for (const service of document.services) {
    for (const offering of service.offerings ?? []) {
      // 每个 Service 内，原始 Provider 调用 ID 是 Offering 的唯一身份。
      result.set(`${service.id}\0${offering.id}`, {
        serviceId: service.id,
        market: serviceMarketForId(service.id)!,
        offering,
      });
    }
  }
  return result;
}

function flattenValue(value: unknown, prefix: string, output: Map<string, unknown>): void {
  if (Array.isArray(value)) {
    if (value.length === 0) output.set(prefix, value);
    else value.forEach((item, index) => flattenValue(item, `${prefix}[${index}]`, output));
    return;
  }
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value);
    if (entries.length === 0) output.set(prefix, value);
    else entries.forEach(([key, item]) => flattenValue(item, prefix ? `${prefix}.${key}` : key, output));
    return;
  }
  output.set(prefix, value);
}

function reviewValue(value: unknown): string {
  if (value === undefined) return '未记录';
  if (value === null) return '明确未知（null）';
  if (Array.isArray(value) && value.length === 0) return '[]（明确空集合）';
  if (typeof value === 'string') return value;
  return JSON.stringify(value);
}

const FIELD_LABELS: Readonly<Record<string, string>> = {
  account_market: '账号市场', service_id: '服务线 ID', offering: '模型供应项',
  availability: '可用性', evidence_refs: '来源证据',
  state: '供应状态', display_name: '展示名称', id: 'Provider 调用模型 ID', modalities: '输入与输出模态', refs: '引用',
  model: '模型信息', model_type: '模型类型',
  type: '类型', operations: '支持的操作', kind: '操作类型', routes: '调用路由', document_ref: '说明文档引用',
  endpoint_ref: 'API 端点引用', callability: '可调用状态', method: 'HTTP 方法',
  path_template: 'API 路径', protocol: '接口协议', parameters: '请求参数', enum: '可选值',
  name: '名称', required: '是否必填', default: '默认值', minimum: '最小值', maximum: '最大值',
  limits: '使用限制', context: '上下文长度', context_window: '上下文长度', max_output_tokens: '最大输出 tokens',
  input: '输入', output: '输出', media: '媒体约束', duration: '时长限制', duration_seconds: '时长限制（秒）', seconds: '秒',
  max: '最大值', min: '最小值', pricing: '价格', rates: '费率', currency: '币种',
  conditions: '适用条件',
  value: '金额', list_value: '原价', metric: '计费指标', quantity: '计费数量',
  unit: '计量单位', availability_status: '供应状态',
  reasoning: '推理能力', effort: '推理强度', tool_calling: '工具调用', structured_output: '结构化输出',
  constraints: '参数约束', properties: '参数定义', fields: '字段', description: '说明',
  resolution: '分辨率', fps: '帧率', sample_rate: '采样率', channels: '声道数',
  temperature: '温度范围', top_p: 'Top-p 范围', stop: '停止序列', seed: '随机种子',
  cache: '缓存', cache_read: '缓存读取', cache_write: '缓存写入', prompt_cache: '提示词缓存',
  source_id: '来源 ID', source_ref: '来源引用', source_name: '来源名称', assertion: '来源声明',
};

const VALUE_LABELS: Readonly<Record<string, string>> = {
  available: '供应中', unavailable: '不可用', unknown: '待核实', suspected_missing: '疑似缺席，待核实',
  documented_only: '文档有说明，尚未实测', standard: '标准服务', priority: '优先服务',
  chat: '对话', embedding: '向量', realtime: '实时交互', rerank: '重排序', image: '图像', audio: '音频', video: '视频', text: '文本',
  text_to_video: '文本生成视频', 'text-to-video': '文本生成视频', image_to_video: '图像生成视频', 'image-to-video': '图像生成视频',
  video_to_video: '视频转换', 'video-to-video': '视频转换', text_to_speech: '文本转语音', 'text-to-speech': '文本转语音',
  speech_to_text: '语音识别', 'speech-to-text': '语音识别', transcription: '语音转录',
  chat_completions: '对话补全', 'chat-completions': '对话补全', responses: 'Responses API', embeddings: '向量嵌入',
  image_generation: '图像生成', 'image-generation': '图像生成', video_generation: '视频生成', 'video-generation': '视频生成',
  structured: '结构化数据', input: '输入', output: '输出', cache_read: '缓存读取', cache_write: '缓存写入',
  per_1m_tokens: '每百万 tokens', per_1k_tokens: '每千 tokens', per_token: '每 token', per_image: '每张图像',
  exclusive: '互斥', additive: '可叠加', usage: '按量计费', subscription: '订阅',
  cn: '中国市场', CN: '中国市场', global: '国际市场', GLOBAL: '国际市场', CNY: '人民币（CNY）', USD: '美元（USD）',
};

function humanizeFieldPath(path: string): string {
  const segments = path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
  return segments.map((segment, index) => {
    if (/^\d+$/.test(segment)) return `第 ${Number(segment) + 1} 项`;
    if (segment === 'type' && segments[index - 1] === 'model') return '模型类型';
    if (segment === 'type' && segments[index - 1] === 'parameters') return '参数类型';
    return FIELD_LABELS[segment] ?? segment;
  }).join(' › ');
}

function valueCell(value: unknown): string {
  const raw = reviewValue(value);
  if (value === undefined || value === null) return markdownCell(raw);
  if (typeof value === 'boolean') return `${value ? '是' : '否'} <code>${String(value)}</code>`;
  if (typeof value !== 'string') return markdownCell(raw);
  const translated = VALUE_LABELS[value];
  if (!translated) return markdownCell(raw);
  return `${markdownCell(translated)} <code>${escapeHtml(raw)}</code>`;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function markdownCell(value: string): string {
  return value.split(/\r?\n/).map((line) => line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\|/g, '&#124;'))
    .join('<br>');
}

function comparisonData(bundle: OfferingBundle): unknown {
  return {
    service_id: bundle.serviceId,
    account_market: bundle.market,
    offering: bundle.offering,
    pricing: bundle.offering.pricing ?? [],
  };
}

function collectComparisons(current: unknown, generated: ProviderDocument): OfferingComparison[] {
  const before = modelBundles(asProviderDocument(current));
  const after = modelBundles(generated);
  const result: OfferingComparison[] = [];

  for (const key of [...new Set([...before.keys(), ...after.keys()])].sort()) {
    const oldBundle = before.get(key);
    const newBundle = after.get(key);
    const oldLeaves = new Map<string, unknown>();
    const newLeaves = new Map<string, unknown>();
    if (oldBundle) flattenValue(comparisonData(oldBundle), '', oldLeaves);
    if (newBundle) flattenValue(comparisonData(newBundle), '', newLeaves);
    const fields = [...new Set([...oldLeaves.keys(), ...newLeaves.keys()])].map((fieldPath) => {
      const oldValue = oldLeaves.get(fieldPath);
      const newValue = newLeaves.get(fieldPath);
      const same = JSON.stringify(oldValue) === JSON.stringify(newValue);
      return {
        path: fieldPath,
        before: oldValue,
        after: newValue,
        status: same ? '未变化' : oldValue === undefined ? '新增' : newValue === undefined ? '移除（待核实）' : '变化',
      };
    }).sort((left, right) => Number(left.status === '未变化') - Number(right.status === '未变化') || left.path.localeCompare(right.path));
    if (fields.some((field) => field.status !== '未变化')) result.push({ before: oldBundle, after: newBundle, fields });
  }
  return result;
}

/** 为正式数据保护提醒生成完整的模型与价格新旧对照。 */
export function renderProviderModelComparison(current: unknown, generated: ProviderDocument): string {
  const comparisons = collectComparisons(current, generated);
  const lines = [
    '## 模型完整数据对照',
    '',
    '以下逐个对比当前正式数据与本次生成结果，包含完整 Offering 与其价格；按服务 ID 与 Provider 模型 ID 区分市场。字段缺失显示为“未记录”，`null` 显示为明确未知，空数组显示为明确空集合。模型从本次目录消失时只标为待核实。',
  ];

  if (comparisons.length === 0) {
    lines.push('', '模型与价格没有字段差异。');
  } else {
    for (const comparison of comparisons) {
      const bundle = comparison.after ?? comparison.before;
      if (!bundle) continue;
      const changedCount = comparison.fields.filter((field) => field.status !== '未变化').length;
      const state = !comparison.before ? `新增 · ${changedCount} 项` : !comparison.after ? `目录缺席（待核实） · ${changedCount} 项` : `数据变化 · ${changedCount} 项`;
      lines.push(
        '',
        '<details>',
        `<summary>${markdownCell(`${bundle.offering.id} · ${bundle.market} · ${state}`)}</summary>`,
        '',
        '| 字段 | 当前正式数据 | 本次生成数据 | 对照 |',
        '|---|---|---|---|',
        ...comparison.fields.map((field) => `| ${markdownCell(humanizeFieldPath(field.path))}<br><code>${escapeHtml(field.path)}</code> | ${valueCell(field.before)} | ${valueCell(field.after)} | ${field.status} |`),
        '',
        '</details>',
      );
    }
  }
  return `${lines.join('\n')}\n\n${renderProviderModelReferenceReview(generated)}`;
}

/** Summarize deterministic Model ID linking and keep the exact rule visible to reviewers. */
export function renderProviderModelReferenceReview(document: ProviderDocument): string {
  const evidenceById = new Map((document.evidence ?? []).map((item) => [item.id, item]));
  const rows = document.services.flatMap((service) => (service.offerings ?? []).flatMap((offering) => {
    const evidence = (offering.evidence_refs ?? [])
      .map((id) => evidenceById.get(id))
      .find((item) => item?.field.endsWith('/model_ref'));
    if (!evidence) return [];
    return [{ offering, evidence }];
  }));
  const linked = rows.filter(({ offering }) => offering.model_ref !== null);
  const retained = linked.filter(({ evidence }) => (evidence.assertion ?? '').includes('沿用上一版 Provider 数据'));
  const exact = linked.filter(({ evidence }) => !(evidence.assertion ?? '').includes('沿用上一版 Provider 数据') && (evidence.assertion ?? '').includes('完全一致'));
  const suffix = linked.filter(({ evidence }) => !(evidence.assertion ?? '').includes('沿用上一版 Provider 数据') && (evidence.assertion ?? '').includes('斜杠后的型号段'));
  const unmatched = rows.filter(({ offering }) => offering.model_ref === null);
  const lines = [
    '## Model ID 自动关联 review',
    '',
    '规则：Provider 调用 ID 与规范 Model ID 完全相同则精确关联；否则取 Provider ID 最后一段，与规范 Model ID 的型号段做精确比较。后缀只有唯一规范 Model 时才自动关联；多条命中或无命中时保持 `model_ref: null`。若同一服务与调用 ID 在上一版已有 model_ref，且目标 Model 仍在注册表，则保留既有关联并在下表注明；自动关联仍需 review 核对开发商和型号身份。',
    '',
    `- 完整 ID 匹配：${exact.length} 项`,
    `- 斜杠后型号段唯一匹配：${suffix.length} 项`,
    `- 沿用仍有效的既有关联：${retained.length} 项`,
    `- 未关联或存在歧义：${unmatched.length} 项`,
    '',
    '| 服务 | Provider 调用模型 ID | model_ref | review 说明 |',
    '|---|---|---|---|',
    ...rows.map(({ offering, evidence }) => {
      const modelRef = offering.model_ref ? `\`${markdownCell(offering.model_ref)}\`` : '`null`';
      return `| ${markdownCell(offering.service_id)} | \`${markdownCell(offering.id)}\` | ${modelRef} | ${markdownCell(evidence.assertion ?? '')} |`;
    }),
  ];
  return lines.join('\n');
}
