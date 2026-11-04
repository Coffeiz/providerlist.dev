# Current Collectors and Official Sources

This inventory describes collectors currently maintained for Class A Providers. Class B Providers have no collector, source allowlist, or manual collection entry point. `sources.ts` is the executable source-allowlist authority. Per-model specification pages and release announcements are not included in automated collection; verified developer specifications are stored in `data/models/<developer_id>/<model>.toml`. Update the Provider adapter README and this reference whenever a source is added or removed.

## Anthropic

The adapter is in `pipeline/src/ingest/adapters/anthropic/`. It collects the general Claude API model overview, API pricing, deprecations, Models API endpoint documentation, Messages API, and Tool Use guides. Public documentation IDs do not equal an account's available catalog; the Models API requires a key and is not called. `pnpm ingest:anthropic` creates candidates for general official information; specifications still require field-by-field review.

## OpenAI

The adapter is in `pipeline/src/ingest/adapters/openai/`. It collects API model guides, pricing, deprecation notices, documentation for the key-protected Models API, and general Responses and Audio guides. Documentation may cover API, ChatGPT, preview, or deprecated scopes; it does not represent a complete callable catalog. Run `pnpm ingest:openai`.

## Google Gemini API

The adapter is in `pipeline/src/ingest/adapters/google/`. It collects Gemini Developer API model guides, pricing, deprecations, documentation for the key-protected `models.list`, API overview, and Batch documentation. Gemini Developer API and Vertex AI are separate. Batch is a request-processing mode/discount, not a subscription plan. Run `pnpm ingest:google`.

## xAI

The adapter is in `pipeline/src/ingest/adapters/xai/`. It collects models, on-demand pricing, X Subscription plans, release notes, documentation for the key-protected Models API, and general Voice and Imagine guides. Keep subscription fees and subscription usage multipliers separate from API on-demand prices. Do not merge the catalog, pricing, or processing boundaries of the US Regional Endpoint and global endpoint. Preserve original billing units for multimodal prices. Run `pnpm ingest:xai`.

## Meta Model API

The adapter is in `pipeline/src/ingest/adapters/meta/`. It collects Meta's general Models, API pricing and limits, Muse Code plans, API Reference, key-protected `models.list` reference, and protocol documentation. Keep Muse Code benefits separate from Model API on-demand pricing. The live team catalog requires credentials and is not requested by this collector. Keep Meta-hosted APIs, open-weight downloads, and third-party hosting separate. Run `pnpm ingest:meta`.

These five adapters create candidates for general official information backed by source snapshots; they do not write formal Provider data. Context, maximum output, per-model modalities/limits, release dates, and similar fields that were not structured from registered sources are explicitly listed as candidate coverage gaps. A gap does not mean the Provider explicitly lacks support.

## MiniMax

The Provider-specific adapter is in `pipeline/src/ingest/adapters/minimax/`, covering `platform.minimax.cn` and `platform.minimax.io`. Automated collection covers current/historical catalogs, pricing, cache pricing, and explicitly registered protocol/API, independent-service, and plan pages. It does not fetch per-model specification pages or release announcements.

| Market | Official material | URL |
|---|---|---|
| China | Model catalog | `https://platform.minimax.cn/docs/faq/models.md` |
| China | Pricing | `https://platform.minimax.cn/docs/pricing/overview.md` |
| China | Anthropic Messages | `https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md` |
| China | OpenAI Responses | `https://platform.minimax.cn/docs/api-reference/responses-create.md` |
| China | M3 tool calls and interleaved thinking | `https://platform.minimax.cn/docs/guides/text-m3-function-call.md` |
| China | Prompt caching | `https://platform.minimax.cn/docs/api-reference/text-prompt-caching.md` |
| China | Video generation | `https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md` |
| China | Speech recognition | `https://platform.minimax.cn/docs/api-reference/speech-to-text.md` |
| Global | Model catalog | `https://platform.minimax.io/docs/faq/models.md` |
| Global | Pricing | `https://platform.minimax.io/docs/pricing/overview.md` |
| Global | Anthropic Messages | `https://platform.minimax.io/docs/api-reference/text-anthropic-api.md` |
| Global | M3 tool calls and interleaved thinking | `https://platform.minimax.io/docs/guides/text-m3-function-call.md` |
| Global | Prompt caching | `https://platform.minimax.io/docs/api-reference/text-prompt-caching.md` |

MiniMax merge review:

- Treat the two markets as separate Services. API hosts are `api.minimax.cn` and `api.minimax.io`; never copy prices or supply status across markets.
- Current official pricing includes M3 input-token thresholds and `standard` / `priority` tiers. Preserve separate USD/CNY tables, cache rates, conditions, and struck-through original prices. Parse both `~~$0.60~~ $0.30` and struck-through prices without currency symbols.
- China separately registers Responses, video, and ASR pages. Do not infer international support when no corresponding international source is registered.
- Anthropic, Chat Completions, and Responses are Routes for the same chat Operation only when the source explicitly lists them for that market/model. Link tool-calling capability to the relevant official guide; protocol compatibility alone does not prove structured output or API callability.
- The exact source allowlist, byte limits, and market metadata are in `pipeline/src/ingest/adapters/minimax/sources.ts`. Model extraction and merge details are in that directory's `README.md`, `collect.ts`, and `merge.ts`.
- Developer-published context, modalities, limits, and release dates belong in `data/models/<developer_id>/<model>.toml`. API Operation inputs/outputs are Provider API facts in Provider records.

## Zhipu / Z.AI

The adapter is in `pipeline/src/ingest/adapters/zhipu/`, covering China (`docs.bigmodel.cn`) and global (`docs.z.ai`) documentation. Both markets separately collect model catalogs, pricing, API access instructions, protocol compatibility, tools/structured output, independent tools, and Coding Plan documents. Per-model detail pages and release announcements are not fetched; plan sources are not merged into on-demand model pricing.

| Market | Official material | URL |
|---|---|---|
| China | Model catalog | `https://docs.bigmodel.cn/cn/guide/start/model-overview.md` |
| China | API pricing | `https://docs.bigmodel.cn/cn/guide/start/pricing.md` |
| China | HTTP API | `https://docs.bigmodel.cn/cn/guide/develop/http/introduction.md` |
| China | OpenAI / Claude / Responses compatibility | Corresponding `/cn/guide/develop/{openai,claude,responses}/introduction.md` pages |
| China | Tool calls, structured output, web search, file parsing | Pages under `/cn/guide/capabilities/` and `/cn/guide/tools/` |
| China | GLM Coding Plan | `https://docs.bigmodel.cn/cn/coding-plan/overview.md` |
| Global | Model catalog | `https://docs.z.ai/guides/overview/overview.md` |
| Global | API pricing (USD) | `https://docs.z.ai/guides/overview/pricing.md` |
| Global | HTTP API and Chat Completion | `https://docs.z.ai/guides/develop/http/introduction.md`; `https://docs.z.ai/api-reference/llm/chat-completion.md` |
| Global | Tools, structured output, search, file upload | Pages under `https://docs.z.ai/guides/capabilities/` and `/api-reference/` |
| Global | GLM Coding Plan | `https://docs.z.ai/devpack/overview.md` |

Zhipu candidate review:

- Preserve the source type for model IDs found in catalogs and pricing. A catalog row is catalog evidence; a pricing row is pricing evidence. A general API page mentioning an ID does not establish current supply.
- Developer-published context, modalities, limits, and release dates belong in `data/models/<developer_id>/<model>.toml`. API Operation inputs/outputs are Provider API facts in Provider records.
- China pricing is in CNY; Z.AI pricing explicitly uses USD. Preserve official rows and sources; do not convert amounts.
- General protocol introductions and tool guides establish only that Provider documentation describes a capability; do not copy it to every model. Convert to the formal schema only after model-level confirmation.
- GLM Coding Plan is a separate subscription product. Do not mix its plan models, dedicated key/API host, or multipliers into standard on-demand API services.
- Source allowlist, snapshot parsing, and command entry points are in `pipeline/src/ingest/adapters/zhipu/`. Commands: `pnpm ingest:zhipu` and `pnpm ingest:zhipu:merge`. Keep China and global data separate. Conversion protects manual specifications and formal files that differ from the automated baseline.

## Kimi

The adapter is in `pipeline/src/ingest/adapters/moonshotai/` and covers only the China API market of the Kimi Open Platform.

| Official material | URL |
|---|---|
| General model list (including retired section) | `https://platform.kimi.com/docs/models.md` |
| List models / Chat Completions API | `https://platform.kimi.com/docs/api/list-models.md`; `https://platform.kimi.com/docs/api/chat.md` |
| Reasoning / Batch / web-search pricing | `https://platform.kimi.com/docs/pricing/chat.md`; `https://platform.kimi.com/docs/pricing/batch.md`; `https://platform.kimi.com/docs/pricing/websearch.md` |

Run `pnpm ingest:moonshotai`; merge with `pnpm ingest:moonshotai:merge`. Do not call the key-protected account model-list API. If Markdown pricing documents do not return table data, do not guess prices. Exact catalog IDs may become Offerings with unknown status; keep pricing unknown.

## StepFun

The adapter is in `pipeline/src/ingest/adapters/stepfun/`, covering the StepFun Open Platform China market.

| Official material | URL |
|---|---|
| Public model catalog / deprecation migration | `https://platform.stepfun.com/docs/zh/guides/models/list.md`; `https://platform.stepfun.com/docs/zh/guides/models/deprecations.md` |
| API pricing / Step Plan | `https://platform.stepfun.com/docs/zh/guides/pricing/details.md`; `https://platform.stepfun.com/docs/zh/step-plan/pricing.md` |
| Models API / Chat API | `https://platform.stepfun.com/docs/zh/api-reference/models/list.md`; `https://platform.stepfun.com/docs/zh/api-reference/chat/chat-completion-create.md` |

Run `pnpm ingest:stepfun`; merge with `pnpm ingest:stepfun:merge`. Convert only exact API Model IDs explicitly present in the catalog. IDs in pricing tables that do not exactly match the catalog are excluded from formal data.

## Shared batch conversion

`pnpm ingest:global-merges` converts candidates for supported Providers; it does not fetch sources. Collectors cover Class A Providers only; legacy Class B candidates are retained as historical research material. MiniMax and Zhipu use their existing merge tools; other adapters use shared source references, Schema validation, baseline protection, and local Logo paths. When candidates lack evidence for a general inference endpoint, plan-specific URLs and model-list URLs are not presented as callable Base URLs. Unknown fields are not converted to zero, unsupported, or active. Conversion rules for historical Class B candidates do not imply that a collector or trigger still exists.

## DeepSeek

The adapter is in `pipeline/src/ingest/adapters/deepseek/`, covering official DeepSeek API global-market model pricing, release notes, and API documentation.

| Official material | URL |
|---|---|
| Current models and pricing | `https://api-docs.deepseek.com/quick_start/pricing/` |
| Models API / release announcements | `https://api-docs.deepseek.com/api/list-models/`; `https://api-docs.deepseek.com/updates/` |
| Chat / Responses / Search pricing | `https://api-docs.deepseek.com/api/create-chat-completion/`; `https://api-docs.deepseek.com/api/create-response/`; `https://api-docs.deepseek.com/guides/search/` |

Run `pnpm ingest:deepseek`. Record current model IDs separately from legacy IDs accepted by compatible proxies. Preserve peak/off-peak rates, cache-hit tier, and per-request Search/Fetch prices.

## Alibaba Cloud Model Studio

The adapter is in `pipeline/src/ingest/adapters/alibaba/`. It collects model-call pricing, model catalog, context caching, Coding Plan, and Token Plan public documentation by product scope. Six models.dev entries are kept in one subject candidate pending split review. The official live model-list API requires an API Key and Workspace ID and is not called. Model candidate facts are limited to catalog IDs and pricing; do not fetch or retain per-model specification pages or fields. Historical models and plan-only model scope are not automatically classified as current supply.

| Official material | URL |
|---|---|
| Model-call pricing / catalog / live-list API docs | `https://help.aliyun.com/zh/model-studio/model-pricing`; `https://help.aliyun.com/zh/model-studio/models?disableWebsiteRedirect=true`; `https://help.aliyun.com/zh/model-studio/list-models` |
| Context cache / Coding Plan / Token Plan | `https://help.aliyun.com/zh/model-studio/context-cache`; `https://help.aliyun.com/zh/model-studio/coding-plan`; `https://help.aliyun.com/zh/model-studio/token-plan-personal-overview`; `https://help.aliyun.com/zh/model-studio/token-plan-overview` |

Run `pnpm ingest:alibaba`. Candidates preserve original pricing rows and catalog categories. The converter imports exact IDs from pricing rows and excludes models explicitly marked offline; it does not infer rates from price prose. Market, plan scope, and current lifecycle for the six models.dev entries require manual split review.

## Volcengine Ark

The adapter is in `pipeline/src/ingest/adapters/volcengine/`. It collects public model-service pricing and Coding Plan documentation; review on-demand API and coding plans separately. Pricing candidates preserve source text for different modalities and billing units. Official pricing does not prove a model is currently available to a particular account or region.

| Official material | URL |
|---|---|
| Model pricing / billing | `https://ark.volcengine.com/region:cn-beijing/docs/model-pricing.md`; `https://ark.volcengine.com/region:cn-beijing/docs/model-service-pricing.md` |
| Coding Plan overview / FAQ | `https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-plan-overview.md`; `https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-faq.md` |

Run `pnpm ingest:volcengine`. Catalog conversion uses exact IDs from recommended/other model rows and keeps lifecycle unknown. “Soon to be deprecated” labels do not automatically become retired. Coding Plan documentation says it is for AI coding tools, not general API access.

## Tencent Cloud TokenHub

The adapter is in `pipeline/src/ingest/adapters/tencent/`, covering the official model list, pricing, Coding Plan, Token Plan, and addition/deprecation notices. TokenHub aggregates first- and third-party models; candidates preserve public source rows and do not mistake the public catalog for account enablement.

| Official material | URL |
|---|---|
| Model list / pricing | `https://cloud.tencent.com/document/product/1823/130051`; `https://cloud.tencent.com/document/product/1823/130055` |
| Coding Plan / Token Plan / product updates | `https://cloud.tencent.com/document/product/1823/130092`; `https://cloud.tencent.com/document/product/1823/130060`; `https://cloud.tencent.com/document/product/1823/130675` |

Run `pnpm ingest:tencent`. Review the models.dev TokenHub on-demand, Coding Plan, and Token Plan entries separately for market and plan restrictions. Coding Plan is not a general API catalog.

## Xiaomi MiMo

The adapter is in `pipeline/src/ingest/adapters/xiaomi/`. It collects the official public MiMo API model list and pricing fields; Model specifications remain manually maintained.

| Official material | URL |
|---|---|
| Current model list | `https://platform.xiaomimimo.com/api/v1/models` |

Run `pnpm ingest:xiaomi`. The response does not declare currency or billing units; the boundaries between on-demand API and CN/SGP/AMS Token Plans also require manual review.

## Ant Ling

The adapter is in `pipeline/src/ingest/adapters/bailing/`. It collects twelve Ant Ling official sources: model families, current availability list, original pricing, FAQ, OpenAI/Anthropic/speech API Routes, structured output, multimodal APIs, and metering updates. It creates internal candidates only and does not alter formal Provider or Model data.

| Official material | URL |
|---|---|
| Model families / API overview / pricing / FAQ | `https://developer.ant-ling.com/zh-CN/docs/models/`; `https://developer.ant-ling.com/zh-CN/docs/api-reference/`; `https://developer.ant-ling.com/zh-CN/docs/models/price/`; `https://developer.ant-ling.com/zh-CN/docs/faq/` |

Run `pnpm ingest:bailing`. Keep official CNY on-demand prices separate from third-party USD prices such as OpenRouter/ZenMux. Preserve and compare the current availability list, FAQ, and pricing-page model lists independently. The collector does not write Model type, context, modalities, release dates, or other release specifications; those fields are maintained manually in the Model registry.

## When adding a Provider

Record in the adapter README and source inventory: official company/API hosts, regions and account markets; current catalog, pricing, and specification maintenance strategy; general documentation URLs for each protocol/API; page formats and pagination/table characteristics; fields not collected or not confirmed; and parser fixture locations. Per-model detail pages are maintained manually by default and are not fetched automatically. This inventory records source facts; it does not claim that sources alone prove callability or current supply.
