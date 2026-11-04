# Anthropic 采集器

> **已暂停：** Anthropic 官方文档端点会按当前网络出口重定向到地区不可用页。Anthropic 已从来源注册表、手动命令和 Class A CI 清单中移除；现有 Provider 数据与适配器源码保留。恢复前需先确认有可用的官方来源访问路径。

采集器实现覆盖 Claude 官方模型列表、API 价格、Messages API、Tool use、Web Search 和消费者套餐文档，候选只用于人工审阅，不自动写入正式 Provider 数据。

消费者 Free、Pro、Max、Team 与 Enterprise 套餐归入 `global` 市场 Service（ADR 0019），不另建同市场 Service——套餐与 API 模型及按量价格在同一个市场 Service 内区分。Claude 定价页作为 Team/Enterprise 的官方价格来源，帮助中心 Max 方案页核对 Max 5x/20x 档位金额；Pro 年付按官方一次性收费 $200 记录，页面折合每月 $17 保留在说明中；Team 和 Enterprise 年付按每席位官方年付月单价乘 12 记录完整年费，并在说明/计费注记中明确折算口径。美元仅为官方公开参考价，不推断地区本地化价格、税费或应用商店结算价。

官方 `Models overview` 将 `Compare models` 明确标为当前模型阵容，因此仅把该表精确列出的型号作为公开目录中的当前供应观察；这不代表任一账号的具体权限或 API 实测。`GET /v1/models` 及其逐账号能力字段需要 API Key，不调用。采集器只从当前目录提取模型 ID/名称并匹配官方价格，不提取上下文、最大输出等模型规格；这些字段由 `data/models/` 手动维护。Model pricing 表按完整展示名与规范模型名精确匹配，未匹配的价格继续留在候选；适配器不采集模型弃用、迁移或逐模型规格页面。IR 将输入、输出、5 分钟/1 小时缓存写入、缓存读取分别保留为费率项；Haiku 5.5 的 100,000 Token 长上下文门槛作为 `usage.input_tokens` 价格条件。解析或匹配失败的当前模型保留未知价格并进入 Review，定价 coverage 随匹配完整度标记。Messages Route 现映射主要普通请求参数、messages 文本/图像输入、文本与流式输出，以及 thinking token 下限约束；接口其余请求字段、header 和完整输入限制仍未覆盖，API coverage 保持 partial。模型采集仅保留目录身份与官方价格；上下文、最大输出、模态、限制、发布日期及逐模型能力均由 `data/models/` 手动维护，不从概览表写入候选。Web Search 只按官方文档明确展示的 `claude-opus-5-5` 示例记录 Provider API 内置工具能力，不外推到其他型号；采集器将必填搜索输入 `query`、`web_search_tool_result` 结果块和最终文本 `citations` 字段一并映射为 Operation 输入/输出规格，并为这些字段记录文档证据。统一 IR 投影按 `kind` 汇总 Service Capability，不输出逐模型支持清单。文档中的模型示例仅作为采集来源，不据此扩展页面上的模型关联。

Provider Offering 的供应状态由维护者根据当前目录与价格证据审核维护；采集器不生成生命周期事件。只有精确模型 ID 已进入 `data/models/anthropic/` 后才关联规范 `model_ref`；Model 规格由维护者按开发商官方资料手动维护，来源 URL 在 PR 中提供。官方 API 价格、模型选择建议不单独转换为供应状态；上下文、最大输出、逐模型模态与能力未确认时保持未知。Web Search 与 Code execution 作为 Service Capability 分别采集搜索 query/结果引用和模型生成的子工具输入/Bash 与文件操作结果；不把工具调用推广为所有型号的支持矩阵。通用 API 文档仅用于独立 Service Capability 与接入层事实，不按模型关联。候选报告保留所登记来源供复查。

详情页默认同时显示 `active` 与 `deprecated` Offering；deprecated 有明确退役日期时标注「即将退役」和日期，尚无日期时标注「已弃用」，且不计入 active 供应统计。进入 `retired` 后默认隐藏，可通过状态开关查看历史型号。

Tool Search 独立 Service Capability 的输入、输出和参数从官方 Tool Search 文档生成候选，分别保留 Regex/BM25 版本化变体、工具名称、Regex `pattern`（最多 200 字符）、BM25 `query`（最多 500 字符）、可选 `limit`（1–10,000，默认 5），以及 `tool_search_tool_result` 中的 `tool_references`。采集失败会进入 Review；候选需经人工审核后再合并到正式数据。

市场、来源 URL、范围、访问要求和内容上限见 [来源白名单](sources.ts)。
