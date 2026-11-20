# bailing 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `bailing` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn |
| 观察时间（UTC） | 2026-11-20T04:51:34.616Z |
| 前一候选指纹 | `sha256:c22a62f0736e5160ad2f092b3e64c7d39ae800a6863c385ea83cb51955db7d6b` |
| 本次候选指纹 | `sha256:463f978008184cc7e2f2a421a5dd6f2b8c0bc1fcdd5ceac9666c6379ff904503` |
| 来源快照 | 12 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 0 项，更新 4 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / bailing-faq

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：免费额度说明 | 差异片段（新增；相同内容已省略）：本文整理了蚂蚁百灵（Ant Ling）使用过程中的常见问题及解决方案，方便您快速定位和解决问题。 |

#### 来源 / bailing-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：Ling-3.2-flash 上线前 2 周限时免费 ！活动结束后恢复原价，请注意您的账户余额。 | 差异片段（新增；相同内容已省略）：Ling-3.2-flash 最新一代原生多模态版 ¥2.00 百万 token ¥6.00 百万 token ¥0.40 百万 token |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：Ling-3.2-flash 最新一代原生多模态版 ¥2.00 百万 token ¥6.00 百万 token ¥0.40 百万 token<br>Ling-3.2-flash $0.30 $0.90 $0.06 |

### 待核对项目

#### 项目 / bailing-price-catalog-crosscheck

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-pricing › assertion | 更新 | 价格页型号：Ling-3.1-flash、Ling-3.0-flash-VL、Ling-3.0-flash | 价格页型号：Ling-3.2-flash、Ling-3.1-flash、Ling-3.0-flash-VL、Ling-3.0-flash |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `bailing-models` · 蚂蚁百灵 模型家族与选型目录 | https://developer.ant-ling.com/zh-CN/docs/models/ | 2026-11-20T04:51:28.065Z | 200 | `sha256:6367e1786ae5ccbf7a086495420c77f1785d6220d2326553e3cb9822b461a3ad` |
| cn | `bailing-api-overview` · 蚂蚁百灵 API 概述与 API 模型说明 | https://developer.ant-ling.com/zh-CN/docs/api-reference/ | 2026-11-20T04:51:27.998Z | 200 | `sha256:8a2b7c8c62a1d309fe3e118cd62b84cc03f624cdf5b9ee37779a6632ae890fa1` |
| cn | `bailing-api-openai` · 蚂蚁百灵 OpenAI 兼容接口与 Chat Completions Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai | 2026-11-20T04:51:29.404Z | 200 | `sha256:d3137df08fcdb3d18661174570638cffbe62c8a796a367c666b797953e220b0f` |
| cn | `bailing-api-anthropic` · 蚂蚁百灵 Anthropic 兼容接口与 Messages Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ | 2026-11-20T04:51:29.414Z | 200 | `sha256:395e8c3b22ec7ecd60d2ef1e6b5fff6245ce77ff2fec4bd8928c4247ae06e2a3` |
| cn | `bailing-api-asr` · 蚂蚁百灵 语音识别 API Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/asr | 2026-11-20T04:51:30.746Z | 200 | `sha256:6eb6e3cd2c8135fc88e06e3477a06ed5ec513862c8eaa121f0707058a4386fa5` |
| cn | `bailing-api-tts` · 蚂蚁百灵 语音合成 API Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/tts/ | 2026-11-20T04:51:30.734Z | 200 | `sha256:2295aadce44b567af8d192c98a543c199a21737289881daecba0d8472a8577f1` |
| cn | `bailing-current-models` · 蚂蚁百灵 当前可用模型与下架说明 | https://developer.ant-ling.com/zh-CN/docs/models/deprecation/ | 2026-11-20T04:51:32.079Z | 200 | `sha256:824bf36baa4a07062127b1644185d0f5d2c58f992ff96039d97400e2a7001b0a` |
| cn | `bailing-pricing` · 蚂蚁百灵 官方按量定价 | https://developer.ant-ling.com/zh-CN/docs/models/price/ | 2026-11-20T04:51:31.926Z | 200 | `sha256:829fa01bdc689f7901c5ed19ada9b862f354c098891c6e2ccf08f41b6af080be` |
| cn | `bailing-faq` · 蚂蚁百灵 API 支持模型与计费 FAQ | https://developer.ant-ling.com/zh-CN/docs/faq/ | 2026-11-20T04:51:32.857Z | 200 | `sha256:566ec909336063af67c6e4b1f9db389c5cdee4f8c8fe0b3f37134016e0818215` |
| cn | `bailing-structured-output` · 蚂蚁百灵 结构化输出 API 能力 | https://developer.ant-ling.com/zh-CN/docs/tutorials/structured-outputs/ | 2026-11-20T04:51:33.549Z | 200 | `sha256:115f0ebb2d107f883de7f0c0c31f50953e3f02248d22cd391c6e03353f70f0b9` |
| cn | `bailing-multimodal-api` · 蚂蚁百灵 多模态 API 接入能力 | https://developer.ant-ling.com/zh-CN/docs/tutorials/multimodal-understanding/ | 2026-11-20T04:51:34.301Z | 200 | `sha256:96e4a4b196d3d2352c157a7fc37f650cbc84178ecffd953c5bff64a9cc04043c` |
| cn | `bailing-billing-upgrade` · 蚂蚁百灵 计量计费服务升级与额度说明 | https://developer.ant-ling.com/zh-CN/docs/getting-started/changelog/billing-upgrade/ | 2026-11-20T04:51:34.616Z | 200 | `sha256:cae3bcba6ac92146f64d88e43f2cc4faffc13080693532a6888057e696d3154b` |

## bailing 专属证据与核对说明

### 蚂蚁百灵 Provider 采集 IR 候选

- 当前供应 Offering：5 个
- Token PriceFact：0 个
- 模型级 Route：10 条
- 文档观察：12 份
- 待核对：12 项

当前 IR 已映射官方当前可用清单、原厂人民币 Token 价格，以及 OpenAI Chat Completions / Anthropic Messages 的模型级 Route。Route 仅来自文档 model 枚举与当前清单的精确交集；请求参数、输入输出 Schema、音频 Route、能力和套餐仍未映射，不得把未完成覆盖解释为不支持。

#### 当前 API 型号

- `Ling-3.0-flash`
- `Ling-3.0-flash-VL`
- `Ling-3.0-tiny`
- `Ling-3.1-flash`
- `Ling-3.2-flash`

#### 已映射 Route

- `POST /chat/completions` (chat-completions) · `Ling-3.0-flash`
- `POST /v1/messages` (messages) · `Ling-3.0-flash`
- `POST /chat/completions` (chat-completions) · `Ling-3.0-flash-VL`
- `POST /v1/messages` (messages) · `Ling-3.0-flash-VL`
- `POST /chat/completions` (chat-completions) · `Ling-3.0-tiny`
- `POST /v1/messages` (messages) · `Ling-3.0-tiny`
- `POST /chat/completions` (chat-completions) · `Ling-3.1-flash`
- `POST /v1/messages` (messages) · `Ling-3.1-flash`
- `POST /chat/completions` (chat-completions) · `Ling-3.2-flash`
- `POST /v1/messages` (messages) · `Ling-3.2-flash`

#### 覆盖缺口

- `bailing-models`（model_catalog）：not_parsed
- `bailing-api-overview`（api）：not_parsed
- `bailing-api-openai`（api）：partial
- `bailing-api-anthropic`（api）：partial
- `bailing-api-asr`（api）：not_parsed
- `bailing-api-tts`（api）：not_parsed
- `bailing-pricing`（pricing）：not_parsed
- `bailing-faq`（documentation）：not_parsed
- `bailing-structured-output`（capability）：not_parsed
- `bailing-multimodal-api`（capability）：not_parsed
- `bailing-billing-upgrade`（pricing）：not_parsed
