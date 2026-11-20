# xiaomi 采集评审

**采集状态：needs_review** — 小米公开 API 目录无法确认 CN、SGP、AMS 各市场与 Token Plan 的供应归属；需人工核实。

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xiaomi` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | 未分市场 |
| 观察时间（UTC） | 2026-11-20T04:52:24.254Z |
| 前一候选指纹 | `sha256:ffeee1b8354c7d65c7df45ece3bac0179a50e5142ac8fc54531503ae29c585f0` |
| 本次候选指纹 | `sha256:a948855c77a2db702652016494ce02e316967643e0bba38aa3fd5490f704be76` |
| 来源快照 | 14 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 12 项，更新 4 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / xiaomi-platform-updates

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：TokenPlan now supports UltraSpeed, the ultra-fast flagship reasoning model, for a limited time |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：Update Time November 18, 2026<br>News Changelog MiMo Blog<br>About Us<br>Terms of Service Privacy Policy Transparency | 差异片段（新增；相同内容已省略）：V2.2.3（2026-11-19）<br>TokenPlan now supports UltraSpeed, the ultra-fast flagship reasoning model, for a limited time<br>TokenPlan Pro and Max plans now offer MiMo-V2.6-Pro-UltraSpeed for a limited time, combining flagship-level intelligence with faster responses for more efficient model calls and smoother interactions.<br>Update Time November 19, 2026 |

#### 来源 / xiaomi-token-plan

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：覆盖旗舰模型 — 各套餐均支持最新旗舰模型 mimo-v2.6-pro、mimo-v2.6-flash，以及 ASR 和 TTS 模型。采用 Token 折算机制，额度透明可控<br>每月固定额度<br>每年固定额度<br>每月固定额度<br>每席每月固定额度 | 差异片段（新增；相同内容已省略）：覆盖旗舰模型 — 各套餐均支持最新旗舰模型 mimo-v2.6-pro、mimo-v2.6-flash，以及 ASR 和 TTS 模型。Pro、Max 额外支持 mimo-v2.6-pro-ultraspeed。采用 Token 折算机制，额度透明可控<br>每月额度<br>每年额度<br>每月额度<br>每席每月额度 |
| tables | 更新 | 列表（7 项）<details><summary>展开完整内容</summary><ul><li>heading：月度套餐<br>headers：• 空字符串<br>• Lite<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $6/月，¥39/月<br>• $16/月，¥99/月<br>• $50/月，¥329/月<br>• $100/月，¥659/月<br>• • 每月固定额度<br>• 41 亿 Credits<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits</li><li>heading：年度套餐<br>headers：• 空字符串<br>• Lite<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $63.36/年，¥408/年<br>• $168.96/年，¥1044/年<br>• $528.00/年，¥3468/年<br>• $1056.00/年，¥6948/年<br>• • 每年固定额度<br>• 492 亿 Credits<br>• 1320 亿 Credits<br>• 4560 亿 Credits<br>• 9840 亿 Credits</li><li>heading：月度套餐<br>headers：• 空字符串<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $16/席/月，¥99/席/月<br>• $50/席/月，¥329/席/月<br>• $100/席/月，¥659/席/月<br>• • 每月固定额度<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits</li><li>heading：年度套餐<br>headers：• 空字符串<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $168.96/席/年，¥1,044/席/年<br>• $528/席/年，¥3,468/席/年<br>• $1,056/席/年，¥6,948/席/年<br>• • 每席每月固定额度<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits</li><li>heading：适用场景<br>headers：• 空字符串<br>• Lite（仅个人版）<br>• Standard<br>• Pro<br>• Max<br>rows：• • 适用场景<br>• 适合首次体验龙虾的尝鲜用户 使用 mimo-v2.6-flash作为基准，可执行约 200 轮中等～复杂任务<br>• 适合经常使用 AI 为自己提效的办公达人 使用 mimo-v2.6-flash 作为基准，可执行约 1600 轮中等～复杂任务<br>• 适合每天高频使用 AI 的开发者和专业效率达人 使用 mimo-v2.6-flash 作为基准，可执行约 5600 轮中等～复杂任务<br>• 适合把 AI 当核心生产力工具的高强度、重度用户 使用 mimo-v2.6-flash 作为基准，可执行约 12800 轮中等～复杂任务</li><li>heading：额度消耗规则<br>headers：• 模型<br>• 输入（命中缓存）Token<br>• 输入（未命中缓存）Token<br>• 输出 Token<br>rows：• • mimo-v2.6-pro<br>• 2.5 Credits<br>• 300 Credits<br>• 600 Credits<br>• • mimo-v2.6-flash<br>• 2 Credits<br>• 100 Credits<br>• 200 Credits</li><li>heading：额度消耗规则<br>headers：• 模型<br>• 输入音频时长（h)<br>rows：• • mimo-v2.5-asr<br>• 30M Credits</li></ul></details> | 列表（7 项）<details><summary>展开完整内容</summary><ul><li>heading：月度套餐<br>headers：• 空字符串<br>• Lite<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $6/月，¥39/月<br>• $16/月，¥99/月<br>• $50/月，¥329/月<br>• $100/月，¥659/月<br>• • 每月额度<br>• 41 亿 Credits<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits</li><li>heading：年度套餐<br>headers：• 空字符串<br>• Lite<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $63.36/年，¥408/年<br>• $168.96/年，¥1044/年<br>• $528.00/年，¥3468/年<br>• $1056.00/年，¥6948/年<br>• • 每年额度<br>• 492 亿 Credits<br>• 1320 亿 Credits<br>• 4560 亿 Credits<br>• 9840 亿 Credits</li><li>heading：月度套餐<br>headers：• 空字符串<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $16/席/月，¥99/席/月<br>• $50/席/月，¥329/席/月<br>• $100/席/月，¥659/席/月<br>• • 每月额度<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits</li><li>heading：年度套餐<br>headers：• 空字符串<br>• Standard<br>• Pro<br>• Max<br>rows：• • 定价<br>• $168.96/席/年，¥1,044/席/年<br>• $528/席/年，¥3,468/席/年<br>• $1,056/席/年，¥6,948/席/年<br>• • 每席每月额度<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits</li><li>heading：适用场景<br>headers：• 空字符串<br>• Lite（仅个人版）<br>• Standard<br>• Pro<br>• Max<br>rows：• • 适用场景<br>• 适合首次体验龙虾的尝鲜用户 使用 mimo-v2.6-flash作为基准，可执行约 200 轮中等～复杂任务<br>• 适合经常使用 AI 为自己提效的办公达人 使用 mimo-v2.6-flash 作为基准，可执行约 1600 轮中等～复杂任务<br>• 适合每天高频使用 AI 的开发者和专业效率达人 使用 mimo-v2.6-flash 作为基准，可执行约 5600 轮中等～复杂任务<br>• 适合把 AI 当核心生产力工具的高强度、重度用户 使用 mimo-v2.6-flash 作为基准，可执行约 12800 轮中等～复杂任务</li><li>heading：额度消耗规则<br>headers：• 模型<br>• 输入（命中缓存）Token<br>• 输入（未命中缓存）Token<br>• 输出 Token<br>rows：• • mimo-v2.6-pro<br>• 2.5 Credits<br>• 300 Credits<br>• 600 Credits<br>• • mimo-v2.6-flash<br>• 2 Credits<br>• 100 Credits<br>• 200 Credits<br>• • mimo-v2.6-pro-ultraspeed<br>• 25 Credits<br>• 3000 Credits<br>• 6000 Credits</li><li>heading：额度消耗规则<br>headers：• 模型<br>• 输入音频时长（h)<br>rows：• • mimo-v2.5-asr<br>• 30M Credits</li></ul></details> |

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
| 未分市场 | `xiaomi-api-models` · 小米 MiMo API 模型目录响应 | https://platform.xiaomimimo.com/api/v1/models | 2026-11-20T04:52:21.216Z | 200 | `sha256:eb111affb536fb21ab5c07445aeb8d23a77f88b83ec801ec4ff022c30503fc48` |
| 未分市场 | `xiaomi-model-list-doc` · 小米 MiMo 官方模型目录说明 | https://mimo.mi.com/docs/zh-CN/api/model/list-models | 2026-11-20T04:52:21.367Z | 200 | `sha256:62ded651f4bbc1c020e2635021435f3b378dad702c3a79c819438faf83e869d9` |
| 未分市场 | `xiaomi-api-pricing` · 小米 MiMo 官方按量 API 定价（国内与海外） | https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go | 2026-11-20T04:52:21.821Z | 200 | `sha256:368fca7d337cbb87fddb8f245fe6f31807cadcc137160be16c5659e5cbe282d1` |
| 未分市场 | `xiaomi-token-plan` · 小米 MiMo Token Plan 套餐、Credits 与额度规则 | https://mimo.mi.com/docs/zh-CN/price/token-plan | 2026-11-20T04:52:22.306Z | 200 | `sha256:8eca9b1efbc27c928f235ea793387ea5edebe6e5b0cebde0efdf33ca8e8950a0` |
| 未分市场 | `xiaomi-deep-thinking` · 小米 MiMo 深度思考能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/deep-thinking | 2026-11-20T04:52:22.540Z | 200 | `sha256:587912643d04ddcdd24ce7d462291ff94fed0167a848f24832165d5fd40395c3` |
| 未分市场 | `xiaomi-structured-output` · 小米 MiMo 结构化输出能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/structured-output | 2026-11-20T04:52:22.759Z | 200 | `sha256:36f23e5057cdc0fc39972e82fdcdfecc251cc5d36b31aa53451de8bf364029bf` |
| 未分市场 | `xiaomi-batch-api` · 小米 MiMo Batch API 接口与批量计费 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/batch-api | 2026-11-20T04:52:22.993Z | 200 | `sha256:a91322f32eb50f07b823f6f52e76ab2c750e07fcb66da64423481ffdb9d7a03a` |
| 未分市场 | `xiaomi-openai-chat` · 小米 MiMo OpenAI Chat Completions API | https://mimo.mi.com/docs/zh-CN/api/chat/openai-api | 2026-11-20T04:52:23.133Z | 200 | `sha256:62ded651f4bbc1c020e2635021435f3b378dad702c3a79c819438faf83e869d9` |
| 未分市场 | `xiaomi-openai-responses` · 小米 MiMo OpenAI Responses API | https://mimo.mi.com/docs/zh-CN/api/chat/responses | 2026-11-20T04:52:23.507Z | 200 | `sha256:62ded651f4bbc1c020e2635021435f3b378dad702c3a79c819438faf83e869d9` |
| 未分市场 | `xiaomi-anthropic-messages` · 小米 MiMo Anthropic Messages API | https://mimo.mi.com/docs/zh-CN/api/chat/anthropic-api | 2026-11-20T04:52:23.505Z | 200 | `sha256:62ded651f4bbc1c020e2635021435f3b378dad702c3a79c819438faf83e869d9` |
| 未分市场 | `xiaomi-web-search` · 小米 MiMo 联网搜索能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/tool-calling/web-search | 2026-11-20T04:52:23.739Z | 200 | `sha256:b616ba7e38d66205b1558ff95fa82584fb7b74c37a65b3e08f134dac206137cc` |
| 未分市场 | `xiaomi-asr-api` · 小米 MiMo ASR API | https://mimo.mi.com/docs/zh-CN/api/audio/Speech-Recognition | 2026-11-20T04:52:23.880Z | 200 | `sha256:62ded651f4bbc1c020e2635021435f3b378dad702c3a79c819438faf83e869d9` |
| 未分市场 | `xiaomi-tts-api` · 小米 MiMo TTS API | https://mimo.mi.com/docs/zh-CN/api/audio/tts | 2026-11-20T04:52:24.254Z | 200 | `sha256:62ded651f4bbc1c020e2635021435f3b378dad702c3a79c819438faf83e869d9` |
| 未分市场 | `xiaomi-platform-updates` · 小米 MiMo API 平台功能更新 | https://mimo.mi.com/docs/en-US/updates/feature/platform | 2026-11-20T04:52:24.110Z | 200 | `sha256:8a2a80076cb8808c7b27490360b5ed714fd9627ae7cd44b5bf8e609a5075e4b1` |

## xiaomi 专属证据与核对说明

### 小米 MiMo 官方资料 IR 观察候选

- IR 指纹：`sha256:a948855c77a2db702652016494ce02e316967643e0bba38aa3fd5490f704be76`
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
