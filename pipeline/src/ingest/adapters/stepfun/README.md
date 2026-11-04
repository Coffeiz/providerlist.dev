# 阶跃星辰适配器

`pnpm ingest:stepfun` 按中国市场与国际市场分别采集阶跃星辰开放平台固定官方通用文档，并生成 `data/candidates/stepfun/` 待审候选；候选明确分开两个市场，不能把中国区的模型供应、价格、端点、套餐或能力复制到国际区。

中国区模型来源只有全部公开模型目录和 API 定价；国际区模型来源只有 Model Overview 和 API Pricing。采集器只从这两类来源获取模型 ID、展示名及价格，不抓模型详情、发布记录、迁移或生命周期页面；上下文、模态、限制、发布日期及其他 Model 规格由维护者手动写入 `data/models/`。中国区其他来源用于网页搜索能力、套餐与 API/协议；国际区其他来源用于套餐、独立能力与 API/协议。采集器不请求需要 Key 的模型列表 API。当前目录若未直接给出 API 模型 ID，仅当目录展示名与同市场官方价格表中的精确 ID 可通过适配器维护的映射表对应时，才生成当前模型观察。路由抽取支持 HTTPS 与 WebSocket。国际官方索引未列出 Web Search 专页，因此候选将其列为来源缺口；不能因价格页列出 Internet Search 收费项就推断国际 API 已有对应文档或等同中国区实现。

候选中的“当前目录观察”不等于 `available`。币种、套餐权益、价格单位、模型规格与 Operation 应在人工评审及后续调查中分别核对。

API 价格依据同一市场官方定价页精确的 `Model ID` 与当前供应模型匹配后录入对应 Offering 的 `pricing`；Token、字符、音频时长、音色和请求计费分别保留官方单位。限时免费只记录官方明确列出的模型和零价，不推测结束日期。Step Plan 月/季/年套餐和一次性加油包单独录入 `plans`，不会混入 API 按量价格；仅当价格页模型或能力与当前目录存在精确匹配时才进入正式数据，未匹配的价格行仍留在候选中。国际价格页中的 V0–V4 限流门槛和 Step Plan Credits 规则作为市场商业接入证据保留，不折算成模型价格。

协议路由仅按 API 文档明确展示的模型记录。中国区 Chat Completions 使用 `api.stepfun.com`；Messages API 使用普通 API Base URL `https://api.stepfun.com` 与 `/v1/messages`，Step Plan 使用 `https://api.stepfun.com/step_plan` 与相同路径；Responses API 使用 `https://api.stepfun.com/v1` 与 `/responses`。国际区固定来源则单独记录 `api.stepfun.ai` 下的 Chat Completions、Messages、Responses、语音/文件等 HTTP 路由及 Realtime、流式 TTS、双向 ASR WebSocket 路由，也保留 Step Plan 的 `/step_plan` 路径。Messages、Responses 与 Step Plan 支持列表按各自文档抽取，不跨协议或市场继承。没有逐模型文档依据的 Offering 不自动继承这些 Route；各 Route 的 `callability` 保持 `documented_only`，表示有官方文档记录，不代表已实测。

采集 IR 按中国区与国际区分别映射当前目录中可对应的 `listed_current` Offering、市场 Service 和官方展示名。价格只在同市场目录精确模型 ID 与价格行完全匹配，且输入未命中缓存、输入命中缓存、输出费率及 Token 计量单位均明确时映射为 `PriceFact`；中国区也支持有明确“元／百万 tokens”单位的语音 Token 表。字符、时长、音色、请求、文件、网页搜索、套餐和限时免费价格继续保留在来源观察，不混入 Token 价。Step 5 Preview 当前缓存命中价格映射为 0.70 元／百万 tokens，同时在 Review 标出已使用按量 API 的用户仍保留 0.35 元费率这一账号分群尚未建模的限制。Provider `kind`、逐模型 Route、Operation、能力与 Plan 仍待核验/映射。

静态夹具测试覆盖模型目录证据、原始价格单元格、币种/单位精度、两市场 Token 价格映射和缺列拒绝，且不把其它计量价格误映射成 Token 价格。

## IR 投影预览

运行 `pnpm ingest:stepfun:merge` 对最新 IR 候选生成只读字段预览，不写正式 Provider 数据。CN / Global 目录和已精确匹配的 Token 费率进入 IR；其他计量、Route、能力、套餐、促销期限和账号等级费率仍在 Review。需先重新采集以生成当前 IR 候选；命令不再执行历史 StepFun 专用合并。
