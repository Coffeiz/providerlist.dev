# 智谱 / Z.AI 适配器

本目录维护智谱中国站（`docs.bigmodel.cn`）和 Z.AI 国际站（`docs.z.ai`）的专属来源、解析器和候选结构。两个市场单独采集；候选只保留官方页面中的目录、价格表、API/协议、能力与计划证据，不把订阅计划混入按量模型价格。

来源以官方文档索引确认，精确登记在 `sources.ts`。适配器只输出评审候选，不生成或覆盖 `data/providers/zhipu/`；模型类别、供应生命周期、价格规则和能力归属需在评审后明确映射到公共契约。

```bash
pnpm ingest:sources
pnpm ingest:zhipu
```

本轮实现保留模型 ID、模型目录表格行、价格原始表格行、匹配模型的说明片段、API 路径片段、Chat API 请求 Schema 中的模型能力与参数，以及每一市场的来源快照元数据。模型或价格行解析为空会失败，避免把文档结构变化静默记成空目录。原始快照保存在被 Git 忽略的 `data/upstream/snapshots/`。

## 采集边界

- 中国站使用 CNY 计价文档；国际站定价明确以 USD 表示。采集器保存原始行，不做换算。
- 目录与价格中出现的模型都会留在候选中，并附带其出现来源；只有目录证据可说明目录列出，价格或通用 API 页面单独出现不裁定当前供应。
- OpenAI/Claude/Responses API、工具调用、结构化输出和独立工具文档作为来源证据保存。Provider 通用兼容说明不证明每个模型都支持相同能力。
- 中国站与国际站的标准模型 API、Agent API 与 GLM Coding Plan 按官方文档分别登记。Coding Plan 的 Anthropic、OpenAI Chat Completions、OpenAI Responses 端点来自各自市场的官方快速开始文档；其 API Key 与标准模型 API Key 分开管理，不应合并为同一接入配置。
- 国际站 API 目录还覆盖异步图像/视频结果、音频转写、Tokenizer、OCR、Web Reader、翻译/视频/幻灯片 Agent。模型绑定的图像、视频、转写和 OCR 路由记录在对应 offering；Web Search、Web Reader、Tokenizer、文件上传和 Agent 作为不绑定模型的 Provider 独立能力记录。
- 逐模型详情页与发布记录不在自动来源白名单中。开发厂商发布的上下文、最大输出、输入/输出类型、媒体限制和发布日期统一维护在 `data/models/<developer_id>/<model>.toml`；API Operation 输入/输出作为 Provider API 事实写入 Offering，不属于共享 Model 规格。
- 中国站 API 索引中批量处理、网页阅读、内容安全、Tokenizer、同步/异步文件解析、OCR 服务与托管 Agent 参考页面均登记为独立快照来源；这些通用 API 页面只用于接入方式和独立能力，不取代逐模型规格维护。
- Chat API 的性能字段只从官方 OpenAPI 请求 Schema 的模型枚举和对应字段映射：`reasoning`、`tool_calling`、`structured_output` 写入 offering 能力；`temperature` 写入 Chat Operation 参数。Schema 明确列出但不支持的能力记为 `false`；没有列入对应模型 Schema 的模型保留未知，不从同系列名称推断。温度只记录文档给出的范围与精度，不把示例值或 Schema 的通用 `default` 当作每个模型的默认值。
- 输入模态按证据来源分开维护：当前目录和价格页只有明确列出的输入字段可作为目录观察；通用 API 请求 Schema 用于验证 Route/请求能力；逐模型模态与媒体限制写入手工规格文件。视频模型类别本身不推断视频输入，未明示输入的模型保持未知。
- 定价表“上下文”单元格中的输入/输出长度区间进入价格规则条件，和价格一起保留为阶梯；官方明确标注“不支持”的计量项进入 `unsupported_metrics`。空白或未列出仍为未知，免费使用金额 `0`，不得互相替代。
- 智谱当前定价不再列出缓存存储价格；即使旧快照或单一区域仍有该列，也不采集为当前价格。
- Coding Plan 是独立订阅产品，来源快照供单独评审；它不代表标准 API 的模型列表、API Key 或价格。
- 官方模型概览/定价页面会变化。若页面有结构调整导致无法抽出表格或模型 ID，应停止生成候选并更新解析，不通过空候选掩盖。

`pnpm ingest:zhipu:merge` 只生成通用 IR 字段投影预览，不写正式 Provider 或生命周期文件。字段未记录、明确未知和空集合在 Review 中分别展示；目录缺席只作为待核实观察。
