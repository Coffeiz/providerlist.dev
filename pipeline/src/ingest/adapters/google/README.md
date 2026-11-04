# Google Gemini API 采集器

运行 `pnpm ingest:google`，采集 Google AI for Developers 的 Gemini 模型列表、价格、API 概览、Batch、内置工具、OpenAI 兼容接口、Live API、File Search 和计费说明；另登记美国 Google One AI 订阅页作为消费级 Plan 来源。`models.list` 需要 API Key；采集器不调用账号清单接口，不把 Vertex AI 或 Google Cloud 其它服务混入 Gemini Developer API。

Batch 按请求处理和折扣单独观察，不当作订阅计划。Google AI Plus / Pro / Ultra 是 Google One 消费订阅，不是 Gemini Developer API 额度。候选中的模型 ID 与价格行是不同来源范围的线索；逐模型供应、能力和价格关联需独立核对。通用来源未披露的上下文、最大输出、模态限制和发布日期列为待复查，不猜测；不解析单模型专属页面。

当前正式数据另外保留已核对的模型注册、费率、订阅计划、独立服务能力和路由记录。Code execution 的输入输出从官方工具文档采集，记录用户提示词、文档支持的文件输入，以及代码调用、执行结果和支持模型返回的内联图像；文件/图像能力不据此推断到未明确支持的型号。定价单元格中含多种计量或未能无歧义映射的项目不会被压成单一 Token 价格；请以候选评审报告中的来源链接和费率差异为准。

市场、来源 URL、范围、访问要求和内容上限见 [来源白名单](sources.ts)。

采集器从 Google Search、Google Maps、URL Context、File Search 和 Batch API 官方文档生成 Service Capability 的输入、输出与参数候选。Batch 字段依据 API Schema 中的 `GenerateContentBatch`、`InputConfig` 和输出结构映射；内置工具配置按 GenerateContent 的字段路径记录，不把 Interactions API 与 GenerateContent 的请求格式混为一项。国际市场 Capability 描述使用英文。字段证据关联到对应官方文档快照。若来源结构变化导致必要结构标记未识别，会标记 `not_parsed` 并进入 Review，不会以空字段覆盖正式记录。候选只供审阅与差异合并，不自动写入 `data/providers/`。
