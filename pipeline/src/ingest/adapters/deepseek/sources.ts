import type { IngestSource } from '../../types.ts';

/** DeepSeek 官方国内与国际 API 模型列表、价格、能力及通用调用文档。 */
export const DEEPSEEK_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['pricing', '模型能力与价格', 'https://api-docs.deepseek.com/quick_start/pricing/', 'pricing', 'global'],
    ['models-api', '当前模型列表 API', 'https://api-docs.deepseek.com/api/list-models/', 'api', 'global'],
    ['chat-api', 'Chat Completions API', 'https://api-docs.deepseek.com/api/create-chat-completion/', 'api', 'global'],
    ['responses-api', 'Responses API', 'https://api-docs.deepseek.com/api/create-response/', 'api', 'global'],
    ['anthropic-api', 'Anthropic API', 'https://api-docs.deepseek.com/guides/anthropic_api/', 'api', 'global'],
    ['search-pricing', 'Search 与 Fetch 价格及接口', 'https://api-docs.deepseek.com/guides/search/', 'pricing', 'global'],
    ['cn-pricing', '国内模型能力与人民币价格', 'https://api-docs.deepseek.com/zh-cn/quick_start/pricing/', 'pricing', 'cn'],
    ['cn-models-api', '国内当前模型列表 API', 'https://api-docs.deepseek.com/zh-cn/api/list-models/', 'api', 'cn'],
    ['cn-chat-api', '国内 Chat Completions API', 'https://api-docs.deepseek.com/zh-cn/api/create-chat-completion/', 'api', 'cn'],
    ['cn-responses-api', '国内 Responses API', 'https://api-docs.deepseek.com/zh-cn/api/create-response/', 'api', 'cn'],
    ['cn-anthropic-api', '国内 Anthropic API', 'https://api-docs.deepseek.com/zh-cn/guides/anthropic_api/', 'api', 'cn'],
    ['cn-search-guide', '国内 Search 与 Fetch 接口', 'https://api-docs.deepseek.com/zh-cn/guides/search/', 'api', 'cn'],
  ] as const).map(([suffix, name, url, scope, market]) => ({
    id: `deepseek-${suffix}`,
    provider_id: 'deepseek',
    market: market as 'cn' | 'global',
    name: `DeepSeek ${name}`,
    url,
    enabled: true,
    accept: 'text/markdown, text/html;q=0.9',
    max_bytes: 3 * 1024 * 1024,
    adapter_id: 'deepseek',
    scope,
    access_scope: 'public' as const,
    extraction: 'docs' as const,
  })),
];
