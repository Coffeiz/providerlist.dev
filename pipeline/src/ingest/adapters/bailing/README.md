# 蚂蚁百灵采集器

该适配器按需采集蚂蚁百灵中国区公开的当前可用目录、官方定价、API Routes、协议能力、计量额度和套餐线索，产物写入 `data/candidates/bailing/`。它不写正式 Provider/Model 数据，也不测试账号是否已开通。

## 来源与边界

| 来源 ID | 官方通用来源 | 候选用途 |
|---|---|---|
| `bailing-models` | <https://developer.ant-ling.com/zh-CN/docs/models/> | 模型家族和系列宣传；不单独证明 API 当前可调用 |
| `bailing-api-overview` | <https://developer.ant-ling.com/zh-CN/docs/api-reference/> | API 推荐型号、接入方式和通用规格证据 |
| `bailing-api-openai` | <https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai> | OpenAI Chat Completions 方法、路径与 API 行为 |
| `bailing-api-anthropic` | <https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/> | Anthropic Messages 方法、路径与 API 行为 |
| `bailing-api-asr` | <https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/asr> | 语音识别 API Route |
| `bailing-api-tts` | <https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/tts/> | 语音合成 API Route |
| `bailing-current-models` | <https://developer.ant-ling.com/zh-CN/docs/models/deprecation/> | 官方明确标记为当前可用的模型清单；用于和价格/FAQ 清单交叉核对 |
| `bailing-pricing` | <https://developer.ant-ling.com/zh-CN/docs/models/price/> | 原厂按量价格、促销、免费额度；第三方平台价格保留在原文但不计入原厂价 |
| `bailing-faq` | <https://developer.ant-ling.com/zh-CN/docs/faq/> | FAQ 明确列出的 API 支持型号、规格和计费说明 |
| `bailing-structured-output` | <https://developer.ant-ling.com/zh-CN/docs/tutorials/structured-outputs/> | 结构化输出 API 能力 |
| `bailing-multimodal-api` | <https://developer.ant-ling.com/zh-CN/docs/tutorials/multimodal-understanding/> | 多模态 API 调用能力；不迁入 Model 规格 |
| `bailing-billing-upgrade` | <https://developer.ant-ling.com/zh-CN/docs/getting-started/changelog/billing-upgrade/> | 新旧计量平台、Token 抵扣券与额度变更 |

API 调用需要用户注册并创建令牌。采集器只读取公开资料，不调用账号接口，不保存凭证；公开目录观察不能证明真实账号下的 API 调用成功。

## 目录口径与字段映射

- `documented_api_models` 使用「下架」页面明确标记的当前可用清单；FAQ 型号与 API 推荐型号分别保留，三者差异进入 `price_catalog_mismatches` 供人工核对。
- `pricing_model_ids` 只从官方 CNY 原厂定价表提取；OpenRouter、Zenmux 等第三方美元价格仅留作页面证据，不混入原厂价格。
- API Route、协议、结构化输出、多模态 API、按量计费、免费额度与计费升级分别按来源保留原文证据。企业合作提及的包月服务若属于蚂蚁数科 MaaS，不等同百灵 API Service 的 Plan。
- 适配器不采集模型类型、上下文/输出、模态、发布日期或推理/工具/温度等 Model 规格；这些字段只能由人工依据开发厂商证据维护在 `data/models/`。
- 模型清单、价格表和 FAQ 互相不一致时保留差异，不按系列推断，不因价格行或目录单次缺席自动退役。

## 运行

```bash
pnpm --filter @providerlist/pipeline ingest:bailing
```

命令重新抓取十二个白名单来源，保存 IR 候选 JSON 与 Markdown 评审稿，并输出通用字段投影预览。IR 候选保存在 `data/candidates/bailing/ir/`。它不会生成 `data/providers/bailing/` 下的 Provider 数据、Model 规格、生命周期事件或发布产物。候选变化后应检查当前可用目录、原厂价格、Route/能力证据、额度规则，以及清单间差异。

## 正式数据转换

运行 `pnpm ingest:bailing:merge` 可生成通用 IR 字段投影和差异报告；批量入口为 `pnpm ingest:global-merges`。该命令只读预览，不转换或覆盖正式数据。未确定的价格适用期、Route、能力和供应状态继续留在 IR Review / partial；Model 规格不会由此采集器写入。历史旧格式候选仅为迁移对照保留，不再由采集器写入。
## IR mapping notes

- Current token prices are extracted only from the provider-owned CNY table and only from the green current-price spans. Struck-through list prices and the OpenRouter / ZenMux marketplace tables are excluded.
- Price facts are attached only when the exact model ID also appears in the current API model list. Amounts stay decimal strings and use the source's per-million-token unit.
- When the page marks a price as a limited-time promotion without an end date, the current displayed value is represented as a promotion and an explicit Review item records the unresolved expiry. No expiry is inferred.
- OpenAI Chat Completions and Anthropic Messages routes are mapped per model only from the exact intersection of each official `model` enum and the current API model list. Request parameters and input/output schemas are still incomplete and remain in Review.
- Audio routes, capability facts, and plans that lack sufficient evidence remain in IR Review / partial coverage; they are not emitted into a parallel legacy candidate.
