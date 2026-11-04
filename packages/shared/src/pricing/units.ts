/**
 * 计费单位与媒体计量。
 *
 * 核心规则（见 docs/data/pricing.md）：
 * - **计费单位必须归属于具体计量项**，不能默认整个定价组都是「每百万 Token」。
 * - 模型调用与独立 Search API 可能按不同指标收费。
 * - 「计价基准」与「展示基准」分离：TTS 按 1000 字符计费，网站可折合显示 1M 字符，
 *   但原始单位、换算倍率和官方来源必须留存。
 * - 不允许静默按 Token 换算媒体价格。
 */

export interface UnitDefinition {
  /** 稳定 ID。 */
  readonly id: string;
  readonly label: string;
  /** 英文标签。词典归领域包所有，展示层只按语言取用，不另抄一份。 */
  readonly label_en: string;
  /** 计量维度。 */
  readonly dimension: 'token' | 'image' | 'video' | 'video_item' | 'audio' | 'character' | 'voice' | 'request' | 'time' | 'storage' | 'credit';
  /** 每个「单位」包含多少个基本计量项，用于展示折算。 */
  readonly per_unit_quantity: number;
  /** 展示时的量纲名称，如「tokens」「张」「秒」「字符」。 */
  readonly quantity_label: string;
  /** 是否属于 token 维度（LLM 兼容路径）。 */
  readonly token_based: boolean;
}

/** 词典语言。目录字段本身不翻译——只有界面文案与词典随语言切换。 */
export type DictionaryLang = 'zh' | 'en';

export const BILLING_UNITS: readonly UnitDefinition[] = [
  { id: 'per_1m_tokens', label: '每百万 Token', label_en: 'Per 1M tokens', dimension: 'token', per_unit_quantity: 1_000_000, quantity_label: 'tokens', token_based: true },
  { id: 'per_1m_tokens_per_hour', label: '每百万 Token·小时', label_en: 'Per 1M tokens-hour', dimension: 'storage', per_unit_quantity: 1_000_000, quantity_label: 'token-hours', token_based: false },
  { id: 'per_1k_tokens', label: '每千 Token', label_en: 'Per 1K tokens', dimension: 'token', per_unit_quantity: 1_000, quantity_label: 'tokens', token_based: true },
  { id: 'per_token', label: '每 Token', label_en: 'Per token', dimension: 'token', per_unit_quantity: 1, quantity_label: 'tokens', token_based: true },
  { id: 'per_image', label: '每张图片', label_en: 'Per image', dimension: 'image', per_unit_quantity: 1, quantity_label: '张', token_based: false },
  { id: 'per_1k_images', label: '每千张图片', label_en: 'Per 1K images', dimension: 'image', per_unit_quantity: 1_000, quantity_label: '张', token_based: false },
  { id: 'per_megapixel', label: '每百万像素', label_en: 'Per megapixel', dimension: 'image', per_unit_quantity: 1, quantity_label: '像素', token_based: false },
  { id: 'per_video', label: '每个视频', label_en: 'Per video', dimension: 'video_item', per_unit_quantity: 1, quantity_label: '个', token_based: false },
  { id: 'per_second', label: '每秒', label_en: 'Per second', dimension: 'video', per_unit_quantity: 1, quantity_label: '秒', token_based: false },
  { id: 'per_1k_frames', label: '每千帧', label_en: 'Per 1K frames', dimension: 'video', per_unit_quantity: 1_000, quantity_label: '帧', token_based: false },
  { id: 'per_generated_second', label: '每生成秒', label_en: 'Per generated second', dimension: 'video', per_unit_quantity: 1, quantity_label: '秒', token_based: false },
  { id: 'per_input_audio_minute', label: '每输入音频分钟', label_en: 'Per input audio minute', dimension: 'audio', per_unit_quantity: 1, quantity_label: '分钟', token_based: false },
  { id: 'per_minute', label: '每分钟', label_en: 'Per minute', dimension: 'time', per_unit_quantity: 1, quantity_label: '分钟', token_based: false },
  { id: 'per_hour', label: '每小时', label_en: 'Per hour', dimension: 'time', per_unit_quantity: 1, quantity_label: '小时', token_based: false },
  { id: 'per_input_audio_hour', label: '每输入音频小时', label_en: 'Per input audio hour', dimension: 'audio', per_unit_quantity: 60, quantity_label: '分钟', token_based: false },
  { id: 'per_character', label: '每字符', label_en: 'Per character', dimension: 'character', per_unit_quantity: 1, quantity_label: '字符', token_based: false },
  { id: 'per_10k_characters', label: '每万字符', label_en: 'Per 10K characters', dimension: 'character', per_unit_quantity: 10_000, quantity_label: '字符', token_based: false },
  { id: 'per_1m_characters', label: '每百万字符', label_en: 'Per 1M characters', dimension: 'character', per_unit_quantity: 1_000_000, quantity_label: '字符', token_based: false },
  { id: 'per_song', label: '每首', label_en: 'Per song', dimension: 'audio', per_unit_quantity: 1, quantity_label: '首', token_based: false },
  { id: 'per_voice', label: '每个', label_en: 'Per', dimension: 'voice', per_unit_quantity: 1, quantity_label: 'voice', token_based: false },
  { id: 'per_request', label: '每次请求', label_en: 'Per request', dimension: 'request', per_unit_quantity: 1, quantity_label: '次', token_based: false },
  { id: 'per_animation', label: '每个动画', label_en: 'Per animation', dimension: 'request', per_unit_quantity: 1, quantity_label: '个动画', token_based: false },
  { id: 'per_credit', label: '每积分', label_en: 'Per credit', dimension: 'credit', per_unit_quantity: 1, quantity_label: '积分', token_based: false },
  { id: 'per_month', label: '每月', label_en: 'Per month', dimension: 'time', per_unit_quantity: 1, quantity_label: '月', token_based: false },
] as const;

const UNIT_BY_ID = new Map(BILLING_UNITS.map((u) => [u.id, u]));

export function describeUnit(id: string): UnitDefinition | undefined {
  return UNIT_BY_ID.get(id);
}

/** 按语言取计费单位标签。未知单位回退到 ID 本身，不猜含义。 */
export function unitLabel(id: string, lang: DictionaryLang = 'zh'): string {
  const unit = UNIT_BY_ID.get(id);
  if (!unit) return id;
  return lang === 'en' ? unit.label_en : unit.label;
}

/** 该单位是否属于 token 维度（决定能否走 LLM 兼容的价格展示路径）。 */
export function isTokenUnit(id: string): boolean {
  return UNIT_BY_ID.get(id)?.token_based ?? false;
}

/**
 * 把展示单位折算到目标单位，返回折算倍率。
 * 例如 `per_character` → `per_1m_characters`（若存在）倍率 1_000_000。
 * 无法折算时返回 null——**不得**跨维度折算（秒不能折成 token）。
 */
export function conversionFactor(fromUnitId: string, toUnitId: string): number | null {
  const from = UNIT_BY_ID.get(fromUnitId);
  const to = UNIT_BY_ID.get(toUnitId);
  if (!from || !to) return null;
  if (from.dimension !== to.dimension) return null;
  if (from.id === to.id) return 1;
  return to.per_unit_quantity / from.per_unit_quantity;
}

/**
 * 展示格式化：把计量项渲染为「¥ / 1M input tokens」这样的完整表述。
 * 数据单位必须始终显示完整，不允许只显示 `¥1.0`。
 */
export function formatRateLabel(
  currency: string,
  amount: string,
  unitId: string,
  metric: string,
  lang: DictionaryLang = 'zh',
  qualifier?: { readonly ttl?: string; readonly context?: string },
): string {
  const symbol = CURRENCY_SYMBOLS[currency] ?? `${currency} `;
  return `${symbol}${amount} / ${rateMeasureLabel(unitId, metric, lang, qualifier)}`;
}

export const METRIC_LABELS: Readonly<Record<string, string>> = {
  input: '输入',
  output: '输出',
  input_text: '文本输入',
  input_audio: '音频输入',
  text_input: '文本输入',
  output_audio: '音频输出',
  audio_processed: '音频处理量',
  cache_read_audio: '音频缓存读取',
  cache_read_image: '图像缓存读取',
  cache_read: '缓存读取',
  cache_write: '缓存写入',
  cache_storage: '缓存存储',
  generated_second: '生成时长',
  image: '图片',
  character: '字符',
  generated_character: '生成字符',
  generated_audio: '生成音频',
  generated_video: '生成视频',
  generated_3d_asset: '生成 3D 模型',
  input_audio_minute: '输入音频',
  input_audio_hour: '输入音频',
  input_audio_duration: '输入音频时长',
  audio_duration: '音频时长',
  input_video: '输入视频',
  image_segmentation: '图像分割',
  video_segmentation: '视频分割',
  input_video_second: '输入视频时长',
  input_image: '输入图片',
  input_image_video: '图像 / 视频输入',
  generated_image: '生成图片',
  request: '请求',
  search_query: '搜索查询',
  page: '页面',
  cloned_voice: '复刻音色',
};

export const METRIC_LABELS_EN: Readonly<Record<string, string>> = {
  input: 'input',
  output: 'output',
  input_text: 'text input',
  input_audio: 'audio input',
  text_input: 'text input',
  output_audio: 'audio output',
  audio_processed: 'audio processed',
  cache_read_audio: 'audio cache read',
  cache_read_image: 'image cache read',
  cache_read: 'cache read',
  cache_write: 'cache write',
  cache_storage: 'cache storage',
  generated_second: 'generated duration',
  image: 'image',
  character: 'character',
  generated_character: 'generated characters',
  generated_audio: 'generated audio',
  generated_video: 'generated video',
  generated_3d_asset: 'generated 3D asset',
  input_audio_minute: 'input audio',
  input_audio_hour: 'input audio',
  input_audio_duration: 'input audio duration',
  audio_duration: 'audio duration',
  input_video: 'input video',
  input_image_video: 'image / video input',
  image_segmentation: 'image segmentation',
  video_segmentation: 'video segmentation',
  input_video_second: 'input video duration',
  input_image: 'input image',
  generated_image: 'generated image',
  request: 'request',
  search_query: 'search query',
  page: 'page',
  cloned_voice: 'cloned voice',
};

/** 按语言取计量指标标签。未知指标回退到原始 ID。 */
export function metricLabel(metric: string, lang: DictionaryLang = 'zh'): string {
  if (lang === 'en') return METRIC_LABELS_EN[metric] ?? metric;
  return METRIC_LABELS[metric] ?? metric;
}

/** Display normalized TTL/context qualifiers without folding them into the metric ID. */
export function metricQualifierLabel(
  qualifier: { readonly ttl?: string; readonly context?: string },
  lang: DictionaryLang = 'zh',
): string {
  const values: string[] = [];
  if (qualifier.context) {
    const context = qualifier.context === 'short' ? (lang === 'zh' ? '短上下文' : 'short context')
      : qualifier.context === 'long' ? (lang === 'zh' ? '长上下文' : 'long context')
        : qualifier.context;
    values.push(context);
  }
  if (qualifier.ttl) values.push(lang === 'zh' ? `TTL ${qualifier.ttl}` : `TTL ${qualifier.ttl}`);
  if (!values.length) return '';
  return lang === 'zh' ? `（${values.join('，')}）` : ` (${values.join('; ')})`;
}

/** 组合单位与计量项；中文标签相接时省去多余空格，英文保留自然间隔。 */
export function rateMeasureLabel(
  unitId: string,
  metric: string,
  lang: DictionaryLang = 'zh',
  qualifier?: { readonly ttl?: string; readonly context?: string },
): string {
  const unitText = unitLabel(unitId, lang);
  if (metric === 'request') return `${unitText}${qualifier ? metricQualifierLabel(qualifier, lang) : ''}`;
  const metricText = metricLabel(metric, lang);
  const qualifierText = qualifier ? metricQualifierLabel(qualifier, lang) : '';
  if (unitText.includes(metricText)) return `${unitText}${qualifierText}`;
  const joinsChinese = lang === 'zh' && /[\u3400-\u9fff]$/.test(unitText) && /^[\u3400-\u9fff]/.test(metricText);
  return `${joinsChinese ? `${unitText}${metricText}` : `${unitText} ${metricText}`}${qualifierText}`;
}

export const CURRENCY_SYMBOLS: Readonly<Record<string, string>> = {
  CNY: '¥',
  USD: '$',
  EUR: '€',
  JPY: '¥',
  GBP: '£',
};
