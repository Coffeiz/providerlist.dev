/** Dictionary for independent ServiceCapability kinds. */
export interface ServiceCapabilityDescriptor {
  readonly id: string;
  readonly label: string;
  readonly label_en: string;
}

export const SERVICE_CAPABILITY_DICTIONARY: readonly ServiceCapabilityDescriptor[] = [
  { id: 'agent', label: '智能体', label_en: 'Agent' },
  { id: 'batch', label: '批处理', label_en: 'Batch processing' },
  { id: 'code_execution', label: '代码执行', label_en: 'Code execution' },
  { id: 'collections', label: '集合管理', label_en: 'Collections' },
  { id: 'file_storage', label: '文件管理', label_en: 'File management' },
  { id: 'file_search', label: '文件搜索', label_en: 'File search' },
  { id: 'google_maps', label: 'Google 地图', label_en: 'Google Maps' },
  { id: 'image_generation', label: '图像生成', label_en: 'Image generation' },
  { id: 'image_understanding', label: '图像理解', label_en: 'Image understanding' },
  { id: 'speech_generation', label: '语音生成', label_en: 'Speech generation' },
  { id: 'tokenizer', label: '分词器', label_en: 'Tokenizer' },
  { id: 'transcription', label: '语音转写', label_en: 'Transcription' },
  { id: 'tool_search', label: '工具搜索', label_en: 'Tool search' },
  { id: 'web_fetch', label: '网页抓取', label_en: 'Web fetch' },
  { id: 'web_search', label: '网页搜索', label_en: 'Web search' },
  { id: 'x_search', label: 'X 搜索', label_en: 'X search' },
] as const;

const BY_ID = new Map(SERVICE_CAPABILITY_DICTIONARY.map((item) => [item.id, item]));

/** Unknown open-enum values stay visible as their original IDs. */
export function serviceCapabilityLabel(id: string, lang: 'zh' | 'en' = 'zh'): string {
  const descriptor = BY_ID.get(id);
  if (!descriptor) return id;
  return lang === 'en' ? descriptor.label_en : descriptor.label;
}
