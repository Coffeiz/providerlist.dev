# Kimi 适配器

`pnpm ingest:moonshotai` 分别采集 Kimi 开放平台中国和国际市场的固定官方通用文档，并生成 `data/candidates/moonshotai/` 待审候选；不会读取需要 API Key 的模型列表接口，也不会抓取单个模型专有页。

两市场分别采集模型当前/下线目录、API 概述、Chat Completions / Responses / Anthropic Messages 文档、推理 / Batch / 联网搜索价格，以及搜索、网页抓取、文件与 Batch 通用 API 文档。国际站页面使用英文目录，因此解析器同时识别 `Deprecated Models` 与中文下线分区。采集器不请求需要 `MOONSHOT_API_KEY` 的 `/v1/models` API；文档原文只作为 API 接入和候选证据。

模型 ID 仅从官方通用模型目录的当前和下线表格提取，并按中国 / 国际市场分别保存。IR 将两个市场当前目录中的精确模型 ID 映射为对应 Service 的 `listed_current` Offering，并将官方「模型名称」字段映射为带来源定位的 `display_name`；当前/下线目录分界分别计入 coverage，已下线 ID 只留在观察中。Service 名称和结算币种分别依据市场目录及明确的 Token 价格原币种记录；API 概述中列出的 OpenAI-compatible 与 Anthropic-compatible base URL 映射为市场隔离的 Endpoint。模型级 Chat Completions、Responses 和 Anthropic Messages Route 按各自官方 OpenAPI 请求模型枚举关联到 Offering，并按协议分别生成 Operation，避免混合各 Route 的请求/响应契约；提取 IR 可表示的直接类型请求参数、messages/input 文本输入项、结构化响应外层字段，以及 Kimi K3 / K2 推理控制。`oneOf` 联合类型、复杂嵌套消息与媒体结构、完整响应约束和错误边界继续标记为 partial / Review，不会压缩成错误的单一类型。联网搜索 Basic / Pro 与网页抓取映射为不绑定 Model 的 Service Capability，路由来自官方 API 概述端点清单，按次费率与“成功且结果非空才计费”的条件来自两市场官方定价页。公开文档链接使用官方可读页面 URL，不暴露抓取用的 `.md` 原文地址。搜索/抓取的请求参数、文本输入项和主要响应字段已按各市场 OpenAPI 映射。官方按量 Token 价格只按同市场、精确模型 ID 映射为 `PriceFact`，保留输入、输出、缓存命中和明确标注 TTL 的缓存写入价及原币种。无法解析或无法精确关联的价格保留 Review。Batch 页面明确支持 `kimi-k2.7-code` 与 `kimi-k2.6`，采集器按市场将其映射为异步 `batch_inference` Operation，记录创建 API 的必需参数、受限 endpoint、任务状态/结果字段，以及标准模型 Token 价格的 60% 费率；费率采用十进制精确计算，并同时关联对应 Offering 和 Operation。会员计划规则仍待核对。价格页面改用官方 HTML 文档采集，以读取自定义表格在 Markdown 版本中缺失的表格内容；候选继续保留官方表头、单元格原文和来源 ID。

静态夹具测试覆盖当前 / 下线分区，避免把迁移目标从描述文字中误识别成当前模型。

## IR 投影预览

运行 `pnpm ingest:moonshotai:merge` 读取最新 IR 候选并生成只读字段预览；批量入口为 `pnpm ingest:global-merges`。只投影带精确来源的字段，未确定的模型类型、供应状态、市场与价格继续保持未知。候选范围不足时报告保留待核对；命令不会写正式模型目录。
