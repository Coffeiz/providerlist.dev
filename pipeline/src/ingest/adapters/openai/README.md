# OpenAI 采集器

运行 `pnpm ingest:openai`，采集 OpenAI API 模型列表、定价及 API/Audio 通用文档，并从 [ChatGPT Learn Pricing](https://learn.chatgpt.com/docs/pricing?site_locale=en#mainContent) 的 Markdown 内容解析 Free、Go、Plus、Pro、Business 和 Enterprise/Edu 方案。页面说明 ChatGPT 与 Codex 共用使用额度；当前采集到的是该页面展示的 Codex 套餐卡片，套餐进入 `global` 市场 Service 的 Plan（ADR 0019），不另建同市场 Service。Learn 页面展示的 Pro 档位和 Business 月付/年付价格按卡片录入；Enterprise/Edu 未公开固定价格，按自定义报价记录。该页面不保证列出 ChatGPT 全部套餐，因此套餐覆盖标为 `partial`，未在页面出现的既有套餐不能据此删除。模型来源仅用于提取模型 ID、名称和价格；上下文、模态、限制、发布日期与退役状态由维护者手动维护在 `data/models/`。运行 `pnpm ingest:openai:merge` 只生成 IR 字段投影预览，不写正式 Provider 数据。

`GET /v1/models` 需要账号 API Key，当前适配器只记录其公开接口文档，不请求私有账号范围。静态模型文档不是账号可用目录。模型供应只从通用官方目录与价格来源采集；不抓取 GPT-6 Astra 等单模型详情页。Web Search、File Search、Code Interpreter 与 Image Generation 文档也明确展示 Responses API 工具，因此仅记录有官方证据的 Route 和工具。Service Capability 按能力类型汇总 Route、输入、参数和输出，不保存逐模型支持清单。四个工具均记录 Responses API 的提示词输入和工具参数/输出；Web Search 记录搜索调用与 URL 引用，File Search 记录向量存储参数、检索调用及文件引用，Code Interpreter 记录 `input`、容器 `file_ids`、`code_interpreter_call` 输出与生成文件引用，Image Generation 记录提示词/可选图片输入、图像生成选项和 `image_generation_call` 结果。价格表与 Audio 文档尚未映射为 PriceRule 或完整逐模型 Route；上下文、输出限制、模态、发布日期也未字段化时，会在候选报告列为待复查，不补猜值；逐模型上下文、模态、限制、发布日期与能力均由 `data/models/` 手动维护。

市场、来源 URL、范围、访问要求和内容上限见 [来源白名单](sources.ts)。ChatGPT 订阅价格和 API 按量价格属于不同产品；API 按量费率仍只从 API 定价文档采集。
