# DeepSeek 采集器

`pnpm ingest:deepseek` 捕获官方 API 价格表、模型列表文档及 Search/Fetch 文档，生成待审候选。模型来源只收集模型 ID/名称和价格；模型规格与发布/退役记录由维护者手动维护。高峰 / 非高峰与缓存命中 / 未命中价保留原始表格行；需账户 API Key 的实时模型列表不会被请求。

## IR 投影预览

运行 `pnpm ingest:deepseek:merge` 读取最新 IR 候选并生成只读字段预览；批量入口为 `pnpm ingest:global-merges`。只投影带精确来源的字段，未确定的模型类型、供应状态、市场与价格继续保持未知。候选范围不足时报告保留待核对；命令不会写正式模型目录。

## 覆盖范围与人工规格

采集器同时抓取 DeepSeek 国际与国内（人民币）用户文档，分别保留模型目录示例、价格表、Chat Completions、Responses、Anthropic 兼容 API，以及 Search/Fetch 接口和价格。候选中的 `current_models` 与 `cn_current_models` 按市场分开记录；两市场名称相同不代表结算市场相同。

上下文、最大输出、输入模态、模型类别等规范模型字段人工核对官方模型列表示例后维护在 `data/models/<developer_id>/<model>.toml`；Offering 上的接口限制与协议 Route、温度和推理参数保留在 Provider 文件。Search / Fetch 按独立 `ServiceCapability` 建模，不关联到任何模型。自动采集仅保留目录 ID/名称与价格；上下文、最大输出、输入模态、模型类别等规范字段由维护者手工录入 `data/models/`。
