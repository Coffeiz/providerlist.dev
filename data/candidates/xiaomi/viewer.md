# xiaomi 采集评审

**采集状态：needs_review** — 小米公开 API 目录无法确认 CN、SGP、AMS 各市场与 Token Plan 的供应归属；需人工核实。

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xiaomi` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | 未分市场 |
| 观察时间（UTC） | 2026-11-19T05:00:55.967Z |
| 前一候选指纹 | `sha256:a8176c0dc6d897557d1dd6b86f34c98e7eb05300b6ee3287a8688a5be21c8a8c` |
| 本次候选指纹 | `sha256:ffeee1b8354c7d65c7df45ece3bac0179a50e5142ac8fc54531503ae29c585f0` |
| 来源快照 | 14 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 12 项，更新 2 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / xiaomi-api-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：mimo-v2.5-pro 、 mimo-v2.5 模型已于北京时间 2026.10.21 10:00 正式下线，建议尽快切换至新版模型。详见 模型下线 。<br>mimo-v2.5-pro 、 mimo-v2.5 模型已于北京时间 2026.10.21 10:00 正式下线，建议尽快切换至新版模型。详见 模型下线 。 | 差异片段（新增；相同内容已省略）：联网服务插件定价<br>服务项 |

#### 来源 / xiaomi-platform-updates

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：Update Time November 03, 2026<br>Products<br>Xiaomi MiMo API Xiaomi MiMo Desktop Xiaomi MiMo Claw Xiaomi MiMo Studio Xiaomi MiMo Code<br>Open Platform<br>Docs FAQ API Pricing Token Plan<br>Updates<br>News Changelog MiMo Blog | 差异片段（新增；相同内容已省略）：V2.2.2（2026-11-12）<br>Support for refund revocation<br>After a refund request is submitted, the full refund can be revoked before the system initiates the refund, with a limit of one revocation per natural day (UTC 00:00–24:00). Upon revocation, the refunded amount will be immediately returned to the account balance, and the model will resume normal invocation.<br>V2.2.1（2026-11-05）<br>Batch API Result File Download Optimization<br>After a Batch task finishes processing, the result file takes some time to be assembled (depending on the data volume). During this period, clicking the download button now shows a status message so users know the current file state: "File is being generated. Please try downloading again later."<br>Update Time November 18, 2026 |

### 市场 / cn

#### Model / mimo-v2.6-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 mimo-v2.6-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-flash › operation ref | 新增 | 未记录 | 未记录 |

#### Model / mimo-v2.6-pro-ultraspeed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 mimo-v2.6-pro-ultraspeed › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › operation ref | 新增 | 未记录 | 未记录 |

#### Model / mimo-v2.6-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 mimo-v2.6-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro › operation ref | 新增 | 未记录 | 未记录 |

### 市场 / global

#### Model / mimo-v2.6-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 mimo-v2.6-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-flash › operation ref | 新增 | 未记录 | 未记录 |

#### Model / mimo-v2.6-pro-ultraspeed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 mimo-v2.6-pro-ultraspeed › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › operation ref | 新增 | 未记录 | 未记录 |

#### Model / mimo-v2.6-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 mimo-v2.6-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro › operation ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| 未分市场 | `xiaomi-api-models` · 小米 MiMo API 模型目录响应 | https://platform.xiaomimimo.com/api/v1/models | 2026-11-19T05:00:52.867Z | 200 | `sha256:eb111affb536fb21ab5c07445aeb8d23a77f88b83ec801ec4ff022c30503fc48` |
| 未分市场 | `xiaomi-model-list-doc` · 小米 MiMo 官方模型目录说明 | https://mimo.mi.com/docs/zh-CN/api/model/list-models | 2026-11-19T05:00:53.078Z | 200 | `sha256:090b154c99a235783b318bd06d5c04149501740b9571d308544db24baabf9556` |
| 未分市场 | `xiaomi-api-pricing` · 小米 MiMo 官方按量 API 定价（国内与海外） | https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go | 2026-11-19T05:00:53.533Z | 200 | `sha256:5b0827b59f4e991acad2f69029d4dbed8976f2d80182028cf5062d252324f17f` |
| 未分市场 | `xiaomi-token-plan` · 小米 MiMo Token Plan 套餐、Credits 与额度规则 | https://mimo.mi.com/docs/zh-CN/price/token-plan | 2026-11-19T05:00:54.016Z | 200 | `sha256:fc44c8b4e521f81c1a1c552b1d7a256da30e044f9e46ef14070ea90349e7dd11` |
| 未分市场 | `xiaomi-deep-thinking` · 小米 MiMo 深度思考能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/deep-thinking | 2026-11-19T05:00:54.248Z | 200 | `sha256:db431107321ef345738ff87971cab5dfd25a105118abd0cc6dc9b3aa44d56374` |
| 未分市场 | `xiaomi-structured-output` · 小米 MiMo 结构化输出能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/structured-output | 2026-11-19T05:00:54.469Z | 200 | `sha256:8dc017ca726386996a58d2961c7b16ccd71365af5be31b7a01b299835c2f17ed` |
| 未分市场 | `xiaomi-batch-api` · 小米 MiMo Batch API 接口与批量计费 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/batch-api | 2026-11-19T05:00:54.698Z | 200 | `sha256:063e9dd5ce4a0e70d76e58166e57e69978a69ab306d14f743500ebab2f0738f0` |
| 未分市场 | `xiaomi-openai-chat` · 小米 MiMo OpenAI Chat Completions API | https://mimo.mi.com/docs/zh-CN/api/chat/openai-api | 2026-11-19T05:00:54.849Z | 200 | `sha256:090b154c99a235783b318bd06d5c04149501740b9571d308544db24baabf9556` |
| 未分市场 | `xiaomi-openai-responses` · 小米 MiMo OpenAI Responses API | https://mimo.mi.com/docs/zh-CN/api/chat/responses | 2026-11-19T05:00:55.220Z | 200 | `sha256:090b154c99a235783b318bd06d5c04149501740b9571d308544db24baabf9556` |
| 未分市场 | `xiaomi-anthropic-messages` · 小米 MiMo Anthropic Messages API | https://mimo.mi.com/docs/zh-CN/api/chat/anthropic-api | 2026-11-19T05:00:55.225Z | 200 | `sha256:090b154c99a235783b318bd06d5c04149501740b9571d308544db24baabf9556` |
| 未分市场 | `xiaomi-web-search` · 小米 MiMo 联网搜索能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/tool-calling/web-search | 2026-11-19T05:00:55.454Z | 200 | `sha256:d9daa1c0db893c3c8b19a48ac48ae6cd5b31f359aaac9288aabb91ee4d58c482` |
| 未分市场 | `xiaomi-asr-api` · 小米 MiMo ASR API | https://mimo.mi.com/docs/zh-CN/api/audio/Speech-Recognition | 2026-11-19T05:00:55.597Z | 200 | `sha256:090b154c99a235783b318bd06d5c04149501740b9571d308544db24baabf9556` |
| 未分市场 | `xiaomi-tts-api` · 小米 MiMo TTS API | https://mimo.mi.com/docs/zh-CN/api/audio/tts | 2026-11-19T05:00:55.967Z | 200 | `sha256:090b154c99a235783b318bd06d5c04149501740b9571d308544db24baabf9556` |
| 未分市场 | `xiaomi-platform-updates` · 小米 MiMo API 平台功能更新 | https://mimo.mi.com/docs/en-US/updates/feature/platform | 2026-11-19T05:00:55.827Z | 200 | `sha256:0d91302496382343ecad6a115dbd7ffb13d25577796e7ddc73da72a0a6590c22` |

## xiaomi 专属证据与核对说明

### 小米 MiMo 官方资料 IR 观察候选

- IR 指纹：`sha256:ffeee1b8354c7d65c7df45ece3bac0179a50e5142ac8fc54531503ae29c585f0`
- API 目录模型 ID 观察：8 项；正式 Offering：6 项
- API 市场、供应状态、价格单位与 Token Plan 关系未被目录响应证明。

#### 覆盖缺口与冲突

- API 目录没有说明账号市场或 Token Plan 归属；仅将按量价格文档精确列出的模型映射至 CN/GLOBAL，目录中其他 ID 继续保留观察。
- Token Plan 的 CN、SGP、AMS 账号归属、额度及 API 使用资格尚未映射；套餐事实保留在来源观察中。
- 官方價格表列出 mimo-v2.5-asr，但 API 目录未包含该精确 ID；保留观察，不创建 Offering。
- 官方價格表列出 mimo-v2.5-asr，但 API 目录未包含该精确 ID；保留观察，不创建 Offering。
- 官方定价页列出三个 TTS 型号限时免费，但没有给出结束时间；保留为价格观察，不将其转换为长期零价。
- 联网服务按千次计价，说明包含网页搜索和解析；调用计量与独立能力 API 的准确边界尚未形成 IR 事实。
- Batch 文档的 Base URL 含 ${region} 变量，尚无证据将该变量映射到具体市场和地域；批量能力与接口线索保留观察，不生成 Endpoint/Route。

#### 来源快照

- `xiaomi-api-models`：https://platform.xiaomimimo.com/api/v1/models
- `xiaomi-model-list-doc`：https://mimo.mi.com/docs/zh-CN/api/model/list-models
- `xiaomi-api-pricing`：https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go
- `xiaomi-token-plan`：https://mimo.mi.com/docs/zh-CN/price/token-plan
- `xiaomi-deep-thinking`：https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/deep-thinking
- `xiaomi-structured-output`：https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/structured-output
- `xiaomi-batch-api`：https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/batch-api
- `xiaomi-openai-chat`：https://mimo.mi.com/docs/zh-CN/api/chat/openai-api
- `xiaomi-openai-responses`：https://mimo.mi.com/docs/zh-CN/api/chat/responses
- `xiaomi-anthropic-messages`：https://mimo.mi.com/docs/zh-CN/api/chat/anthropic-api
- `xiaomi-web-search`：https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/tool-calling/web-search
- `xiaomi-asr-api`：https://mimo.mi.com/docs/zh-CN/api/audio/Speech-Recognition
- `xiaomi-tts-api`：https://mimo.mi.com/docs/zh-CN/api/audio/tts
- `xiaomi-platform-updates`：https://mimo.mi.com/docs/en-US/updates/feature/platform
