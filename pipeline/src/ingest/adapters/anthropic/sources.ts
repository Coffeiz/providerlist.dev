import type { IngestSource } from '../../types.ts';

/** Anthropic 全球 API 的公开通用模型、价格与接入资料。 */
export const ANTHROPIC_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['models', 'Claude 当前模型概览与 API ID', 'https://platform.claude.com/docs/en/models/overview', 'model_catalog', 'public'],
    ['pricing', 'Claude API 模型与功能定价', 'https://platform.claude.com/docs/en/about-claude/pricing', 'pricing', 'public'],
    ['models-list-api', 'Models API 清单端点说明（调用需账号 API Key）', 'https://platform.claude.com/docs/en/api/models/list', 'api', 'account_scoped'],
    ['messages-api', 'Messages API 通用接口说明', 'https://platform.claude.com/docs/en/api/messages', 'api', 'public'],
    ['tool-use', 'Tool use 能力与通用调用说明', 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview', 'capability', 'public'],
    ['web-search', 'Web Search 服务端工具及调用说明', 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool', 'capability', 'public'],
    ['tool-search', 'Tool Search 服务端工具输入与结果格式', 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool', 'capability', 'public'],
    ['code-execution', 'Code execution 工具输入与结果格式', 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool', 'capability', 'public'],
    ['consumer-pricing', 'Claude 个人、Team 与 Enterprise 套餐价格', 'https://claude.com/pricing', 'plan', 'public'],
    ['consumer-plan-guide', 'Claude Max 套餐分档与价格', 'https://support.claude.com/en/articles/11049741-what-is-the-max-plan', 'plan', 'public'],
  ] as const).map(([suffix, name, url, scope, access_scope]) => ({
    id: `anthropic-${suffix}`, provider_id: 'anthropic', market: 'global' as const, name: `Anthropic ${name}`, url,
    enabled: true, accept: 'text/markdown, text/html;q=0.9', max_bytes: 6 * 1024 * 1024, timeout_ms: 60_000,
    adapter_id: 'anthropic', scope, access_scope, extraction: 'html' as const,
  })),
];
