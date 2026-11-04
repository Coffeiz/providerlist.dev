# 小米 MiMo 采集器

适配器将公开 API 模型目录、按量 API 价格、Token Plan Credits、协议接口和服务能力分别保存为来源快照与审阅候选。`xiaomi-api-models` 返回的 `pricing` 字段按原始 JSON 保留；接口目录没有自述币种和单位时，不从数字格式推测价格语义。

## 来源与边界

- `xiaomi-api-models`：平台公开模型 API 目录响应。采集器仅保留模型 ID 和名称；上下文、模态、限制、发布日期及其他规格由维护者写入 `data/models/`。该接口响应中的价格字段没有自述币种和计量单位，不参与价格换算。
- `xiaomi-model-list-doc`：官方公开 API 模型列表说明。它是可调用 ID 的目录证据；用于确认模型 ID 和名称；其他规格由维护者手动维护。
- `xiaomi-api-pricing`：官方按量价格页同时披露国内人民币价和海外美元价；Batch API 有单独优惠价格。各市场的费率只绑定其原始币种和计量口径。
- `xiaomi-token-plan`：个人版、团队版、月/年套餐价格与 Credits 额度。Credits 不是 API Token 价格，不能换算成倍率或 API 价格。
- `xiaomi-deep-thinking`、`xiaomi-structured-output`、`xiaomi-web-search`：模型能力和参数证据。只按文档列出的模型或 Service 明确登记，不外推到所有 Offering。
- `xiaomi-openai-chat`、`xiaomi-openai-responses`、`xiaomi-anthropic-messages`、`xiaomi-asr-api`、`xiaomi-tts-api`：官方协议与 Route 文档。
- `xiaomi-batch-api`：Batch API 的异步任务、文件与 Route 文档；CN/SGP/AMS host 使用地区占位符，采集候选不得替用户选定地区。
- `xiaomi-platform-updates`：通用平台变更线索。

官方通用页面的表格与价格/API/能力摘录进入候选评审文件；原始页面留在不可变快照中。模型专属页面不登记为采集来源。批量取回来源时最多同时请求两个。

## 本轮核对发现与未决项

- API 模型目录响应可能包含规格字段；候选只保留模型 ID 和名称，未匹配到目录身份的价格行不自动创建 Offering。Model 规格和供应状态由维护者手动核对。
- 按量定价页同时提供国内与海外价格，但一般 API 文档只列统一 `api.xiaomimimo.com` Host；市场账户归属、区域资格与 API Host 是否有差异，仍需按官方账户/接入信息复核。
- Token Plan 的 CN、SGP、AMS 接入 Host 按各自区域保留；产品价格页未把不同套餐价格映射到具体 API 区域时，不自动归属到某个服务市场。
- 网页联网搜索属于需模型调用的插件能力，定价页另列每千次价格；不把它误记为无模型依赖的独立搜索 API。Batch API 是独立异步处理服务，但地区 Host 由 `${region}` 决定，候选中不臆造 CN/海外具体域名。
- 服务能力与 Route 依据通用产品文档采集；Model 规格不从能力文档推导。
- 定价页上的 API 价格、套餐 Credits、套餐倍率和限时优惠属于不同口径，候选中不得互相合并或换算。

## IR 投影预览

运行 `pnpm ingest:xiaomi` 采集所有登记来源并生成 IR 审阅候选。`pnpm ingest:xiaomi:merge` 只生成通用 IR 字段投影预览；来源快照、价格/套餐观察和 API Route 文档不会自动写入正式供应数据，未确认的供应状态、地区映射、模型能力和价格继续保持未知。
