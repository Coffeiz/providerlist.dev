# xiaomi 采集评审

**采集状态：needs_review** — 小米公开 API 目录无法确认 CN、SGP、AMS 各市场与 Token Plan 的供应归属；需人工核实。

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xiaomi` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | 未分市场 |
| 观察时间（UTC） | 2026-11-05T13:36:19.645Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:a8176c0dc6d897557d1dd6b86f34c98e7eb05300b6ee3287a8688a5be21c8a8c` |
| 来源快照 | 14 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 793 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / xiaomi

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • API Host 与模型目录列表不证明服务市场、账号授权或当前可调用性。<br>• Model 规格由维护者手动维护；价格仅匹配目录中的精确模型 ID。 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | xiaomi |
| source refs | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>xiaomi-api-models</li><li>xiaomi-model-list-doc</li><li>xiaomi-api-pricing</li><li>xiaomi-token-plan</li><li>xiaomi-deep-thinking</li><li>xiaomi-structured-output</li><li>xiaomi-batch-api</li><li>xiaomi-openai-chat</li><li>xiaomi-openai-responses</li><li>xiaomi-anthropic-messages</li><li>xiaomi-web-search</li><li>xiaomi-asr-api</li><li>xiaomi-tts-api</li><li>xiaomi-platform-updates</li></ul></details> |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 xiaomi-anthropic-messages › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-anthropic-messages › scope | 新增 | 未记录 | api |
| 记录 xiaomi-anthropic-messages › source ref | 新增 | 未记录 | xiaomi-anthropic-messages |
| 记录 xiaomi-anthropic-messages › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-api-models › note | 新增 | 未记录 | 目录响应结构已解析；仅价格文档有精确报价的型号映射为市场 Offering，未建立目录整体的账号市场与 Token Plan 关系。 |
| 记录 xiaomi-api-models › record count | 新增 | 未记录 | 8 |
| 记录 xiaomi-api-models › record unit | 新增 | 未记录 | recognized model IDs |
| 记录 xiaomi-api-models › scope | 新增 | 未记录 | model_catalog |
| 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| 记录 xiaomi-api-models › 状态（status） | 新增 | 未记录 | partial |
| 记录 xiaomi-api-pricing › note | 新增 | 未记录 | 国内/海外 Token 与 ASR 价格按原币种、计量单位和实时/批量条件映射；TTS 限时免费与联网服务计费仍待核验。 |
| 记录 xiaomi-api-pricing › record count | 新增 | 未记录 | 10 |
| 记录 xiaomi-api-pricing › record unit | 新增 | 未记录 | recognized price rows |
| 记录 xiaomi-api-pricing › scope | 新增 | 未记录 | pricing |
| 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 记录 xiaomi-api-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 xiaomi-asr-api › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-asr-api › scope | 新增 | 未记录 | api |
| 记录 xiaomi-asr-api › source ref | 新增 | 未记录 | xiaomi-asr-api |
| 记录 xiaomi-asr-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-batch-api › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-batch-api › scope | 新增 | 未记录 | api |
| 记录 xiaomi-batch-api › source ref | 新增 | 未记录 | xiaomi-batch-api |
| 记录 xiaomi-batch-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-deep-thinking › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-deep-thinking › scope | 新增 | 未记录 | capability |
| 记录 xiaomi-deep-thinking › source ref | 新增 | 未记录 | xiaomi-deep-thinking |
| 记录 xiaomi-deep-thinking › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-model-list-doc › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-model-list-doc › scope | 新增 | 未记录 | model_catalog |
| 记录 xiaomi-model-list-doc › source ref | 新增 | 未记录 | xiaomi-model-list-doc |
| 记录 xiaomi-model-list-doc › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-openai-chat › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-openai-chat › scope | 新增 | 未记录 | api |
| 记录 xiaomi-openai-chat › source ref | 新增 | 未记录 | xiaomi-openai-chat |
| 记录 xiaomi-openai-chat › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-openai-responses › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-openai-responses › scope | 新增 | 未记录 | api |
| 记录 xiaomi-openai-responses › source ref | 新增 | 未记录 | xiaomi-openai-responses |
| 记录 xiaomi-openai-responses › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-platform-updates › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-platform-updates › scope | 新增 | 未记录 | documentation |
| 记录 xiaomi-platform-updates › source ref | 新增 | 未记录 | xiaomi-platform-updates |
| 记录 xiaomi-platform-updates › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-structured-output › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-structured-output › scope | 新增 | 未记录 | capability |
| 记录 xiaomi-structured-output › source ref | 新增 | 未记录 | xiaomi-structured-output |
| 记录 xiaomi-structured-output › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-token-plan › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-token-plan › scope | 新增 | 未记录 | plan |
| 记录 xiaomi-token-plan › source ref | 新增 | 未记录 | xiaomi-token-plan |
| 记录 xiaomi-token-plan › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-tts-api › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-tts-api › scope | 新增 | 未记录 | api |
| 记录 xiaomi-tts-api › source ref | 新增 | 未记录 | xiaomi-tts-api |
| 记录 xiaomi-tts-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 xiaomi-web-search › note | 新增 | 未记录 | 来源正文保留为 DocumentObservation，尚未归一为对应领域事实。 |
| 记录 xiaomi-web-search › scope | 新增 | 未记录 | capability |
| 记录 xiaomi-web-search › source ref | 新增 | 未记录 | xiaomi-web-search |
| 记录 xiaomi-web-search › 状态（status） | 新增 | 未记录 | not_parsed |

### 文档观察

#### 来源 / xiaomi-anthropic-messages

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xiaomi-anthropic-messages |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-api-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | json |
| model id mentions | 新增 | 未记录 | • xiaomi/mimo-v2-flash<br>• xiaomi/mimo-v2-pro<br>• xiaomi/mimo-v2-omni<br>• xiaomi/mimo-v2.5-pro<br>• xiaomi/mimo-v2.5<br>• xiaomi/mimo-v2.6-pro<br>• xiaomi/mimo-v2.6-flash<br>• xiaomi/mimo-v2.6-pro-ultraspeed |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | xiaomi-api-models |
| structured records › 记录 xiaomi/mimo-v2-flash › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2-flash |
| structured records › 记录 xiaomi/mimo-v2-flash › 名称（name） | 新增 | 未记录 | Xiaomi MiMo：MiMo-V2-Flash |
| structured records › 记录 xiaomi/mimo-v2-omni › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2-omni |
| structured records › 记录 xiaomi/mimo-v2-omni › 名称（name） | 新增 | 未记录 | Xiaomi MiMo:MiMo-V2-Omni |
| structured records › 记录 xiaomi/mimo-v2-pro › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2-pro |
| structured records › 记录 xiaomi/mimo-v2-pro › 名称（name） | 新增 | 未记录 | Xiaomi MiMo:MiMo-V2-Pro |
| structured records › 记录 xiaomi/mimo-v2.5-pro › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2.5-pro |
| structured records › 记录 xiaomi/mimo-v2.5-pro › 名称（name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.5-pro |
| structured records › 记录 xiaomi/mimo-v2.5 › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2.5 |
| structured records › 记录 xiaomi/mimo-v2.5 › 名称（name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.5 |
| structured records › 记录 xiaomi/mimo-v2.6-flash › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2.6-flash |
| structured records › 记录 xiaomi/mimo-v2.6-flash › 名称（name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-flash |
| structured records › 记录 xiaomi/mimo-v2.6-pro-ultraspeed › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2.6-pro-ultraspeed |
| structured records › 记录 xiaomi/mimo-v2.6-pro-ultraspeed › 名称（name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-pro-ultraspeed |
| structured records › 记录 xiaomi/mimo-v2.6-pro › ID（id） | 新增 | 未记录 | xiaomi/mimo-v2.6-pro |
| structured records › 记录 xiaomi/mimo-v2.6-pro › 名称（name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-pro |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xiaomi-api-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • ASR 系列模型按照输入音频时长计费：时长统计精确到秒，最终折算成小时计费<br>• 推理类型<br>• 实时推理<br>• 批量推理<br>• 不支持批量推理： mimo-v2.6-pro-ultraspeed<br>• 输入音频时长 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home<br>Xiaomi MiMo-V2.5-Pro、MiMo-V2.5 已于 2026.10.21 10:00（UTC+8）正式下线，原模型名称已失效，请及时核对并完成 V2.6 系列的切换。 查看详情 →<br>文档<br>研究<br>模型<br>动态<br>价格<br>联系我们 中文<br>控制台<br>文档<br>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>价格 按量计费 API<br>Ctrl<br>按量计费 API<br>Token Plan<br>邀请好友<br>API 定价<br>Xiaomi MiMo API 的按量计费使用开放平台普通 API Key，并按实际 Token 用量消耗账户余额，与 Token Plan 套餐额度不互通。<br>计费说明<br>计费单位：国内：元 / 百万 tokens ；海外：美元 / 百万 tokens<br>缓存命中：当请求的前缀内容命中 Prompt Cache 时，按命中缓存价格计费<br>缓存写入： 限时免费<br>ASR 系列模型按照输入音频时长计费：时长统计精确到秒，最终折算成小时计费<br>联网搜索按调用次数独立计费，不含在 Token 价格中<br>模型国内定价<br>mimo-v2.5-pro 、 mimo-v2.5 模型已于北京时间 2026.10.21 10:00 正式下线，建议尽快切换至新版模型。详见 模型下线 。<br>语言模型<br>推理类型<br>模型名称<br>输入（命中缓存）<br>输入（未命中缓存）<br>输出<br>实时推理<br>mimo-v2.6-pro<br>¥0.025<br>¥3.00<br>¥6.00<br>mimo-v2.6-flash<br>¥0.02<br>¥1.00<br>¥2.00<br>mimo-v2.6-pro-ultraspeed<br>¥0.25<br>¥30.00<br>¥60.00<br>批量推理<br>mimo-v2.6-pro<br>¥0.0125<br>¥1.50<br>¥3.00<br>mimo-v2.6-flash<br>¥0.01<br>¥0.50<br>¥1.00<br>不支持批量推理： mimo-v2.6-pro-ultraspeed<br>ASR 系列<br>模型名称<br>输入音频时长<br>mimo-v2.5-asr<br>¥0.5 /小时<br>TTS 系列<br>限时免费： mimo-v2.5-tts 、 mimo-v2.5-tts-voiceclone 、 mimo-v2.5-tts-voicedesign<br>模型海外定价<br>mimo-v2.5-pro 、 mimo-v2.5 模型已于北京时间 2026.10.21 10:00 正式下线，建议尽快切换至新版模型。详见 模型下线 。<br>语言模型<br>推理类型<br>模型名称<br>输入（命中缓存）<br>输入（未命中缓存）<br>输出<br>实时推理<br>mimo-v2.6-pro<br>$0.0036<br>$0.435<br>$0.87<br>mimo-v2.6-flash<br>$0.0028<br>$0.14<br>$0.28<br>mimo-v2.6-pro-ultraspeed<br>$0.036<br>$4.35<br>$8.7<br>批量推理<br>mimo-v2.6-pro<br>$0.0018<br>$0.2175<br>$0.435<br>mimo-v2.6-flash<br>$0.0014<br>$0.07<br>$0.14<br>不支持批量推理： mimo-v2.6-pro-ultraspeed<br>ASR 系列<br>模型名称<br>输入音频时长<br>mimo-v2.5-asr<br>$0.074 /小时<br>TTS 系列<br>限时免费： mimo-v2.5-tts 、 mimo-v2.5-tts-voiceclone 、 mimo-v2.5-tts-voicedesign |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（35 项）<details><summary>展开完整内容</summary><ul><li>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话</li><li>Token Plan</li><li>Xiaomi MiMo API 的按量计费使用开放平台普通 API Key，并按实际 Token 用量消耗账户余额，与 Token Plan 套餐额度不互通。</li><li>¥0.025</li><li>¥3.00</li><li>¥6.00</li><li>¥0.02</li><li>¥1.00</li><li>¥2.00</li><li>¥0.25</li><li>¥30.00</li><li>¥60.00</li><li>¥0.0125</li><li>¥1.50</li><li>¥0.01</li><li>¥0.50</li><li>¥0.5 /小时</li><li>$0.0036</li><li>$0.435</li><li>$0.87</li><li>$0.0028</li><li>$0.14</li><li>$0.28</li><li>$0.036</li><li>$4.35</li><li>$8.7</li><li>$0.0018</li><li>$0.2175</li><li>$0.0014</li><li>$0.07</li><li>$0.074 /小时</li><li>¥16 /1000 次</li><li>$5 /1000 次</li><li>查询日账单 Token Plan</li><li>文档中心 常见问题 API 定价 Token Plan</li></ul></details> |
| scope | 新增 | 未记录 | pricing |
| source ref | 新增 | 未记录 | xiaomi-api-pricing |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • 推理类型<br>• 模型名称<br>• 输入（命中缓存）<br>• 输入（未命中缓存）<br>• 输出 |
| tables › 第 1 项 › heading | 新增 | 未记录 | 模型国内定价 |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • 实时推理<br>• mimo-v2.6-pro<br>• ¥0.025<br>• ¥3.00<br>• ¥6.00 |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • mimo-v2.6-flash<br>• ¥0.02<br>• ¥1.00<br>• ¥2.00 |
| tables › 第 1 项 › rows › 第 3 项 | 新增 | 未记录 | • mimo-v2.6-pro-ultraspeed<br>• ¥0.25<br>• ¥30.00<br>• ¥60.00 |
| tables › 第 1 项 › rows › 第 4 项 | 新增 | 未记录 | • 批量推理<br>• mimo-v2.6-pro<br>• ¥0.0125<br>• ¥1.50<br>• ¥3.00 |
| tables › 第 1 项 › rows › 第 5 项 | 新增 | 未记录 | • mimo-v2.6-flash<br>• ¥0.01<br>• ¥0.50<br>• ¥1.00 |
| tables › 第 2 项 › headers | 新增 | 未记录 | • 模型名称<br>• 输入音频时长 |
| tables › 第 2 项 › heading | 新增 | 未记录 | 模型国内定价 |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • mimo-v2.5-asr<br>• ¥0.5 /小时 |
| tables › 第 3 项 › headers | 新增 | 未记录 | • 推理类型<br>• 模型名称<br>• 输入（命中缓存）<br>• 输入（未命中缓存）<br>• 输出 |
| tables › 第 3 项 › heading | 新增 | 未记录 | 模型海外定价 |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • 实时推理<br>• mimo-v2.6-pro<br>• $0.0036<br>• $0.435<br>• $0.87 |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • mimo-v2.6-flash<br>• $0.0028<br>• $0.14<br>• $0.28 |
| tables › 第 3 项 › rows › 第 3 项 | 新增 | 未记录 | • mimo-v2.6-pro-ultraspeed<br>• $0.036<br>• $4.35<br>• $8.7 |
| tables › 第 3 项 › rows › 第 4 项 | 新增 | 未记录 | • 批量推理<br>• mimo-v2.6-pro<br>• $0.0018<br>• $0.2175<br>• $0.435 |
| tables › 第 3 项 › rows › 第 5 项 | 新增 | 未记录 | • mimo-v2.6-flash<br>• $0.0014<br>• $0.07<br>• $0.14 |
| tables › 第 4 项 › headers | 新增 | 未记录 | • 模型名称<br>• 输入音频时长 |
| tables › 第 4 项 › heading | 新增 | 未记录 | 模型海外定价 |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • mimo-v2.5-asr<br>• $0.074 /小时 |
| tables › 第 5 项 › headers | 新增 | 未记录 | • 服务项<br>• 价格<br>• 说明 |
| tables › 第 5 项 › heading | 新增 | 未记录 | 联网服务插件定价 |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • 国内联网服务<br>• ¥16 /1000 次<br>• 包含网页搜索和网页解析，用于国内区域联网搜索相关内容 |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • 海外联网服务<br>• $5 /1000 次<br>• 包含网页搜索和网页解析，用于海外区域联网搜索相关内容 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-asr-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xiaomi-asr-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-batch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl -X POST https://batch-api- ${region} .xiaomimimo.com/v1/batches \<br>• curl -X POST https://batch-api- ${region} .xiaomimimo.com/v1/batches/batch_c089f12dde664f07aeadd8c7/cancel \<br>• base_url = "https://batch-api-${region}.xiaomimimo.com/v1" |
| capability mentions | 新增 | 未记录 | 列表（45 项）<details><summary>展开完整内容</summary><ul><li>快速开始 使用指南 文本生成 批量推理（Batch API）</li><li>工具调用</li><li>结构化输出</li><li>批量推理（Batch API）</li><li>音频理解</li><li>视频理解</li><li>语音</li><li>语音识别（MiMo-V2.5-ASR）</li><li>语音合成（MiMo-V2.5-TTS 系列）</li><li>批量推理（Batch API）是无需实时响应需求的离线大批量数据处理方案，接口兼容 OpenAI，适合执行模型评测、数据标注、批量回归等场景，支持通过 SDK 或 控制台创建异步任务处理请求。批量推理（Batch API）的优势如下：</li><li>⭐ 成本相对更低 ：批量推理（Batch API） 价格为实时 API 的 50%</li><li>批量推理支持的模型为 mimo-v2.6-pro 、 mimo-v2.6-flash ，使用模型调用批量推理服务时，模型名需小写</li><li>摘要、翻译、结构化提取</li><li>批量推理 API 价格</li><li>批量推理（Batch API） 价格 = 实时 API 价格 × 50%</li><li>批量推理目前支持 mimo-v2.6-pro 、 mimo-v2.6-flash 模型，下列出 2 款模型批量推理在国内、海外的定价</li><li>批量推理支持的 API Key 格式： sk-xxxxx ，前往 API Keys 创建 API Key</li><li>推理类型</li><li>实时推理API</li><li>批量推理API</li><li>快速上手批量推理</li><li>使用 批量推理（ Batch API ） 前，需完成以下步骤：</li><li>获取Base URL，前往 批量推理 页面获取</li><li>下面分别是包含 2 个请求的输入文件的示例（.jsonl文件），分别对应批量推理支持的 3 种url， 需注意，通过页面控制台使用批量推理，目前仅支持 OpenAI &#124; completions 文件格式上传，使用接口使用批量推理则更加灵活，支持 3 种文件格式</li><li>Base URL：前往 批量推理 页面获取</li><li>默认最大文件大小 128 MB；单个文件只能包含一个批量推理接入点的请求。</li><li>步骤二：创建批量推理任务</li><li>在 批量推理 页面，单击 创建批量推理任务 。</li><li>通过页面控制台使用批量推理，目前仅支持 OpenAI &#124; completions 文件格式上传，使用接口使用批量推理则更加灵活，支持 3 种文件格式。</li><li>在 账单明细 页面，筛选并查看批量推理的用量统计。</li><li>查看数据概览 ： 选择时间 ，将 推理类型 选为 批量推理 ，选择 API Key ，查看批量推理的模型调用概览。</li><li>可以通过 Curl 上传任务文件至 文件服务的 bucket 中，后续网关平台会读取文件里的请求信息进行批量推理。</li><li>batch（批量推理文件）</li><li>步骤三：查询批量推理任务状态</li><li>批量推理任务状态与对应描述如下：</li><li>步骤四：下载批量推理任务结果</li><li>批量推理任务运行结束后，可以通过 curl 方式下载结果文件。其中结果文件包含 2 类文件：</li><li>取消批量推理任务</li><li>刪除批量推理任务</li><li>批量推理（Batch API） 兼容 OpenAI 协议，可直接使用 OpenAI Python SDK：</li><li>批量推理（Batch API）采用 闲时调度 策略：系统会根据线上资源情况自动调度，无需您手动干预，资源紧张时，任务启动和执行可能延迟。</li><li>批量推理（Batch API） 暂 不支持任务内重试或续跑 。如遇任务失败，您需要：</li><li>不能 。使用 批量推理（Batch API） 前必须完成实名认证。未实名的用户进入批量推理页面时，会看到引导页并跳转到实名认证页面。</li><li>不支持 。批量推理（Batch API） 仅按实际 Token 用量消耗账户现金余额，与 Token Plan 套餐额度不互通。</li><li>结构化输出 图片理解</li></ul></details> |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home<br>Xiaomi MiMo-V2.5-Pro、MiMo-V2.5 已于 2026.10.21 10:00（UTC+8）正式下线，原模型名称已失效，请及时核对并完成 V2.6 系列的切换。 查看详情 →<br>文档<br>研究<br>模型<br>动态<br>价格<br>联系我们 中文<br>控制台<br>文档<br>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>快速开始 使用指南 文本生成 批量推理（Batch API）<br>Ctrl<br>概述<br>欢迎使用<br>首次调用 API<br>模型列表<br>使用指南<br>文本生成<br>工具调用<br>联网搜索<br>深度思考<br>结构化输出<br>批量推理（Batch API）<br>多模态理解<br>图片理解<br>音频理解<br>视频理解<br>语音<br>语音识别（MiMo-V2.5-ASR）<br>语音合成（MiMo-V2.5-TTS 系列）<br>精彩活动<br>邀请有礼<br>首充专享<br>常见问题<br>账号与认证<br>付费<br>API 接入<br>Token Plan<br>套餐与价格<br>有效期与到期<br>用量与额度<br>团队版权益相关<br>Token Plan 与 Desktop 会员<br>活动<br>其他<br>条款与协议<br>服务协议<br>隐私政策<br>透明度<br>邀请好友<br>批量推理（Batch API）<br>批量推理（Batch API）是无需实时响应需求的离线大批量数据处理方案，接口兼容 OpenAI，适合执行模型评测、数据标注、批量回归等场景，支持通过 SDK 或 控制台创建异步任务处理请求。批量推理（Batch API）的优势如下：<br>⭐ 成本相对更低 ：批量推理（Batch API） 价格为实时 API 的 50%<br>批量推理支持的模型为 mimo-v2.6-pro 、 mimo-v2.6-flash ，使用模型调用批量推理服务时，模型名需小写<br>⭐ 闲时智能调度 ：任务提交后由系统自动调度到闲时执行（夜间1点~8点），充分利用低峰算力<br>⭐ 使用方式灵活 ：提供接口、控制台2种使用方式，可通过接口、开放平台控制台完成任务全流程管理<br>⭐ OpenAI 兼容 ：接口协议与 OpenAI 一致，从 OpenAI Batch 迁移改造简单<br>适用场景<br>场景<br>说明<br>数据标注<br>大批量文本、图片打标签<br>模型评测<br>Benchmark 测试、回归验证<br>内容审核<br>离线批量分类、过滤<br>批量生成<br>摘要、翻译、结构化提取<br>学术研究<br>大规模数据实验、论文数据处理<br>批量推理 API 价格<br>Xiaomi MiMo API 的按量计费使用开放平台普通 API Key，并按实际 Token 用量消耗账户余额，与 Token Plan 套餐额度不互通。<br>计费说明<br>批量推理（Batch API） 价格 = 实时 API 价格 × 50%<br>计费单位：国内：元 / 百万 tokens ；海外：美元 / 百万 tokens<br>缓存命中：当请求的前缀内容命中 Prompt Cache 时，按命中缓存价格计费<br>批量推理目前支持 mimo-v2.6-pro 、 mimo-v2.6-flash 模型，下列出 2 款模型批量推理在国内、海外的定价<br>批量推理支持的 API Key 格式： sk-xxxxx ，前往 API Keys 创建 API Key<br>模型国内定价<br>推理类型<br>实时推理API<br>批量推理API<br>MiMo-V2.6 系列<br>输入（命中缓存）<br>输入（未命中缓存）<br>输出<br>输入（命中缓存）<br>输入（未命中缓存）<br>输出<br>mimo-v2.6-pro<br>¥0.025<br>¥3.00<br>¥6.00<br>¥0.0125<br>¥1.50<br>¥3.00<br>mimo-v2.6-flash<br>¥0.02<br>¥1.00 |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（39 项）<details><summary>展开完整内容</summary><ul><li>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话</li><li>Token Plan</li><li>Token Plan 与 Desktop 会员</li><li>Xiaomi MiMo API 的按量计费使用开放平台普通 API Key，并按实际 Token 用量消耗账户余额，与 Token Plan 套餐额度不互通。</li><li>¥0.025</li><li>¥3.00</li><li>¥6.00</li><li>¥0.0125</li><li>¥1.50</li><li>¥0.02</li><li>¥1.00</li><li>¥2.00</li><li>¥0.01</li><li>¥0.50</li><li>$0.0036</li><li>$0.435</li><li>$0.87</li><li>$0.0018</li><li>$0.2175</li><li>$0.0028</li><li>$0.14</li><li>$0.28</li><li>$0.0014</li><li>$0.07</li><li>curl https : //batch-api-${region}.xiaomimimo.com/v1/files \</li><li>-H "Authorization: Bearer $ARK_API_KEY" \</li><li>curl -X POST https://batch-api- ${region} .xiaomimimo.com/v1/batches \</li><li>-H "Authorization: Bearer $ARK_API_KEY " \</li><li>"input_file_id": "$FILE_ID",</li><li>curl https://batch-api- ${region} .xiaomimimo.com/v1/batches/ $BATCH_ID \</li><li>-H "Authorization: Bearer $ARK_API_KEY "</li><li>curl https://batch-api- ${region} .xiaomimimo.com/v1/files/ ${结果文件id} /content \</li><li>curl https://batch-api- ${region} .xiaomimimo.com/v1/files/ ${错误文件id} /content \</li><li>curl -X POST https://batch-api- ${region} .xiaomimimo.com/v1/batches/batch_c089f12dde664f07aeadd8c7/cancel \</li><li>"https://batch-api-${region}.xiaomimimo.com/v1/batches/batch_01H8abc123..." \</li><li>base_url = "https://batch-api-${region}.xiaomimimo.com/v1"</li><li>是否支持 Token Plan 抵扣？</li><li>不支持 。批量推理（Batch API） 仅按实际 Token 用量消耗账户现金余额，与 Token Plan 套餐额度不互通。</li><li>文档中心 常见问题 API 定价 Token Plan</li></ul></details> |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xiaomi-batch-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • 场景<br>• 说明 |
| tables › 第 1 项 › heading | 新增 | 未记录 | 适用场景 |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • 数据标注<br>• 大批量文本、图片打标签 |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • 模型评测<br>• Benchmark 测试、回归验证 |
| tables › 第 1 项 › rows › 第 3 项 | 新增 | 未记录 | • 内容审核<br>• 离线批量分类、过滤 |
| tables › 第 1 项 › rows › 第 4 项 | 新增 | 未记录 | • 批量生成<br>• 摘要、翻译、结构化提取 |
| tables › 第 1 项 › rows › 第 5 项 | 新增 | 未记录 | • 学术研究<br>• 大规模数据实验、论文数据处理 |
| tables › 第 2 项 › headers | 新增 | 未记录 | • 推理类型<br>• 实时推理API<br>• 批量推理API<br>• 空字符串<br>• 空字符串 |
| tables › 第 2 项 › heading | 新增 | 未记录 | 批量推理 API 价格 |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • MiMo-V2.6 系列<br>• 输入（命中缓存）<br>• 输入（未命中缓存）<br>• 输出<br>• 输入（命中缓存）<br>• 输入（未命中缓存）<br>• 输出 |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • mimo-v2.6-pro<br>• ¥0.025<br>• ¥3.00<br>• ¥6.00<br>• ¥0.0125<br>• ¥1.50<br>• ¥3.00 |
| tables › 第 2 项 › rows › 第 3 项 | 新增 | 未记录 | • mimo-v2.6-flash<br>• ¥0.02<br>• ¥1.00<br>• ¥2.00<br>• ¥0.01<br>• ¥0.50<br>• ¥1.00 |
| tables › 第 3 项 › headers | 新增 | 未记录 | • 推理类型<br>• 实时推理API<br>• 批量推理API |
| tables › 第 3 项 › heading | 新增 | 未记录 | 批量推理 API 价格 |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • MiMo-V2.6 系列<br>• 输入（命中缓存）<br>• 输入（未命中缓存）<br>• 输出<br>• 输入（命中缓存）<br>• 输入（未命中缓存）<br>• 输出 |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • mimo-v2.6-pro<br>• $0.0036<br>• $0.435<br>• $0.87<br>• $0.0018<br>• $0.2175<br>• $0.435 |
| tables › 第 3 项 › rows › 第 3 项 | 新增 | 未记录 | • mimo-v2.6-flash<br>• $0.0028<br>• $0.14<br>• $0.28<br>• $0.0014<br>• $0.07<br>• $0.14 |
| tables › 第 4 项 › headers | 新增 | 未记录 | • 步骤<br>• 说明 |
| tables › 第 4 项 › heading | 新增 | 未记录 | 前置准备 |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • 1. 注册账号<br>• 注册 Xiaomi MiMo 开放平台账号 |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • 2. 实名认证<br>• 完成实名认证 |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • 3. 账户充值<br>• 充值账户余额（ Batch API 需从余额扣费） |
| tables › 第 4 项 › rows › 第 4 项 | 新增 | 未记录 | • 4. 获取 API Key<br>• 创建可用的 API Key - 接口创建的 Batch 任务：使用你创建的API Key - 页面控制台创建的 Batch 任务：默认挂靠到平台默认的API Key，无需使用自己创建的API Key， |
| tables › 第 4 项 › rows › 第 5 项 | 新增 | 未记录 | • 5.获取Base URL<br>• 获取Base URL，前往 批量推理 页面获取 |
| tables › 第 5 项 › headers | 新增 | 未记录 | • 字段<br>• 描述 |
| tables › 第 5 项 › heading | 新增 | 未记录 | 步骤一：上传任务文件至文件服务 |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • id<br>• 文件唯一标识符，格式为 file- + UUID 前缀 |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • object<br>• 对象类型，固定值 "file" ，标识这是一个文件资源 |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • purpose<br>• 文件分类。 "batch" 表示用于批量处理（batch processing） |
| tables › 第 5 项 › rows › 第 4 项 | 新增 | 未记录 | • filename<br>• 原始文件名 |
| tables › 第 5 项 › rows › 第 5 项 | 新增 | 未记录 | • bytes<br>• 文件大小，单位为 字节 |
| tables › 第 5 项 › rows › 第 6 项 | 新增 | 未记录 | • status<br>• 文件状态。"active" 表示文件可用；其他可能值有 "pending"（处理中）、"error"（失败）等 |
| tables › 第 5 项 › rows › 第 7 项 | 新增 | 未记录 | • error<br>• 错误信息，无错误时为 null；出错时包含具体错误描述 |
| tables › 第 5 项 › rows › 第 8 项 | 新增 | 未记录 | • metadata<br>• 自定义元数据，用户可附加的键值对信息，暂未使用到 |
| tables › 第 5 项 › rows › 第 9 项 | 新增 | 未记录 | • mime_type<br>• MIME 类型 |
| tables › 第 5 项 › rows › 第 10 项 | 新增 | 未记录 | • created_at<br>• 创建时间，Unix 时间戳（秒） |
| tables › 第 5 项 › rows › 第 11 项 | 新增 | 未记录 | • expire_at<br>• 过期时间，Unix 时间戳。到期后文件可能被自动清理 |
| tables › 第 6 项 › headers | 新增 | 未记录 | • 字段<br>• 类型<br>• 说明 |
| tables › 第 6 项 › heading | 新增 | 未记录 | 步骤二：创建批量推理任务 |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • id<br>• string<br>• Batch Job 唯一标识，格式为 batch_ + 随机 ID |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • object<br>• string<br>• 对象类型，固定为 "batch" |
| tables › 第 6 项 › rows › 第 3 项 | 新增 | 未记录 | • endpoint<br>• string<br>• 本次 Batch 调用的 API 端点，如 /v1/chat/completions |
| tables › 第 6 项 › rows › 第 4 项 | 新增 | 未记录 | • errors<br>• object/null<br>• 错误信息，无错误时为 null |
| tables › 第 6 项 › rows › 第 5 项 | 新增 | 未记录 | • input_file_id<br>• string<br>• 输入文件 ID，指向上传的 .jsonl 文件 |
| tables › 第 6 项 › rows › 第 6 项 | 新增 | 未记录 | • completion_window<br>• string<br>• 完成时间窗口，当前固定 "24h"，超时则变为 expired |
| tables › 第 6 项 › rows › 第 7 项 | 新增 | 未记录 | • status<br>• string<br>• 当前状态，9 种取值（见上一条消息） |
| tables › 第 6 项 › rows › 第 8 项 | 新增 | 未记录 | • output_file_id<br>• string/null<br>• 输出文件 ID，完成后才有值，可下载处理结果 |
| tables › 第 6 项 › rows › 第 9 项 | 新增 | 未记录 | • error_file_id<br>• string/null<br>• 错误文件 ID，存在失败请求时才有值，记录每条失败原因 |
| tables › 第 6 项 › rows › 第 10 项 | 新增 | 未记录 | • created_at<br>• int<br>• 创建时间（Unix 时间戳，秒） |
| tables › 第 6 项 › rows › 第 11 项 | 新增 | 未记录 | • in_progress_at<br>• int/null<br>• 进入处理中的时间，尚未开始处理时为 null |
| tables › 第 6 项 › rows › 第 12 项 | 新增 | 未记录 | • expires_at<br>• int<br>• 过期时间，即 created_at + completion_window |
| tables › 第 6 项 › rows › 第 13 项 | 新增 | 未记录 | • finalizing_at<br>• int/null<br>• 进入收尾阶段的时间 |
| tables › 第 6 项 › rows › 第 14 项 | 新增 | 未记录 | • completed_at<br>• int/null<br>• 完成时间，仅 completed 状态时有值 |
| tables › 第 6 项 › rows › 第 15 项 | 新增 | 未记录 | • failed_at<br>• int/null<br>• 失败时间，仅 failed 状态时有值 |
| tables › 第 6 项 › rows › 第 16 项 | 新增 | 未记录 | • expired_at<br>• int/null<br>• 过期时间，仅 expired 状态时有值 |
| tables › 第 6 项 › rows › 第 17 项 | 新增 | 未记录 | • cancelling_at<br>• int/null<br>• 发起取消的时间 |
| tables › 第 6 项 › rows › 第 18 项 | 新增 | 未记录 | • cancelled_at<br>• int/null<br>• 取消完成的时间，仅 cancelled 状态时有值 |
| tables › 第 6 项 › rows › 第 19 项 | 新增 | 未记录 | • request_counts<br>• object<br>• 请求计数器 |
| tables › 第 6 项 › rows › 第 20 项 | 新增 | 未记录 | • request_counts.total<br>• int<br>• 总请求数 |
| tables › 第 6 项 › rows › 第 21 项 | 新增 | 未记录 | • request_counts.completed<br>• int<br>• 已完成请求数 |
| tables › 第 6 项 › rows › 第 22 项 | 新增 | 未记录 | • request_counts.failed<br>• int<br>• 失败请求数 |
| tables › 第 7 项 › headers | 新增 | 未记录 | • 状态<br>• 状态码<br>• 描述 |
| tables › 第 7 项 › heading | 新增 | 未记录 | 步骤三：查询批量推理任务状态 |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • 初始化中<br>• validating<br>• 任务在初始化中。 |
| tables › 第 7 项 › rows › 第 2 项 | 新增 | 未记录 | • 运行中<br>• in_progress<br>• 任务运行中。 |
| tables › 第 7 项 › rows › 第 3 项 | 新增 | 未记录 | • 完成<br>• Completed<br>• 任务已全部完成。 |
| tables › 第 7 项 › rows › 第 4 项 | 新增 | 未记录 | • 失败<br>• Failed<br>• 任务执行失败，原因可能是超时等原因。 |
| tables › 第 7 项 › rows › 第 5 项 | 新增 | 未记录 | • 取消中<br>• cancelling<br>• 用户主动取消任务 |
| tables › 第 7 项 › rows › 第 6 项 | 新增 | 未记录 | • 已取消<br>• cancelled<br>• 用户主动取消成功，任务已终止 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-deep-thinking

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.xiaomimimo.com/v1" |
| capability mentions | 新增 | 未记录 | 列表（53 项）<details><summary>展开完整内容</summary><ul><li>工具调用</li><li>结构化输出</li><li>批量推理（Batch API）</li><li>音频理解</li><li>视频理解</li><li>语音</li><li>语音识别（MiMo-V2.5-ASR）</li><li>语音合成（MiMo-V2.5-TTS 系列）</li><li>深度思考让模型在生成最终回答前进行深度推理，通过内部思维链（Chain of Thought）逐步分析问题，显著提升复杂任务的准确性。适用于复杂推理、代码生成、数学计算、多步骤分析等需要深度分析的场景。</li><li>深度推理 ：将复杂问题拆解为多个步骤逐步分析，提升推理准确性</li><li>在 Agent 类产品的多轮会话中开启深度思考，且历史会话中存在工具调用时，后续所有 user 交互轮次中回传的 assistant 如果包含了工具调用， 必须完整回传 reasoning_content 字段，否则 API 将返回 400 错误 。正确回传方式请参考调用示例的“深度思考下的多轮工具调用”。</li><li>历史 reasoning_content 一旦缺失，模型上下文将不完整，可能表现出指令遵循下降，幻觉增多等现象。</li><li>响应时间 ：开启深度思考会增加响应延迟，复杂任务尤为明显。建议结合 stream: true 实时查看思考过程。</li><li>"content" : "Machine learning is a branch of artificial intelligence that enables computers to learn from data and improve their performance over time without being explicitly programmed for every task. It works by feeding algorithms large datasets, allowing them to identify patterns, make predictions, or take actions based on what they've learned. Common applications include spam filters, recommendation systems, image recognition, and language translation, making it a powerful tool that is resh</li><li>"tool_calls" : null ,</li><li>"reasoning_content" : "The user wants a concise three-sentence introduction to machine learning."</li><li>"reasoning_tokens" : 14</li><li>"tool_calls" : null</li><li>"reasoning_tokens" : 0</li><li>流式响应时，思考内容与回答内容依次输出：首先通过 reasoning_content 逐步返回思考过程，思考完成后，再通过 content 逐步输出最终回答。</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : "" , "role" : "assistant" , "tool_calls" : null , "reasoning_content" : null } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008592 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : null , "role" : null , "tool_calls" : null , "reasoning_content" : "The user is asking" } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008592 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : null , "role" : null , "tool_calls" : null , "reasoning_content" : " for tips to" } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008592 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : null , "role" : null , "tool_calls" : null , "reasoning_content" : " improve work efficiency." } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008592 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : null , "role" : null , "tool_calls" : null , "reasoning_content" : " tips" } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008593 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : null , "role" : null , "tool_calls" : null , "reasoning_content" : "." } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008593 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : "# Tips" , "role" : null , "tool_calls" : null , "reasoning_content" : null } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008593 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : " for Improving Work" , "role" : null , "tool_calls" : null , "reasoning_content" : null } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008593 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : "? " , "role" : null , "tool_calls" : null , "reasoning_content" : null } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008602 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : "😊" , "role" : null , "tool_calls" : null , "reasoning_content" : null } , "finish_reason" : null , "index" : 0 } ] , "created" : 1790008602 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ { "delta" : { "content" : null , "role" : null , "tool_calls" : null , "reasoning_content" : null } , "finish_reason" : "stop" , "index" : 0 } ] , "created" : 1790008602 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" , "usage" : null }</li><li>data : { "id" : "ac06ba44-79d8-419a-830f-8e443a15b962_f3425553986841e7bd6d1799bbb89be8" , "choices" : [ ] , "created" : 1790008602 , "model" : "mimo-v2.6-pro" , "object" : "chat.completion.chunk" , "usage" : { "completion_tokens" : 467 , "prompt_tokens" : 61 , "total_tokens" : 528 , "completion_tokens_details" : { "reasoning_tokens" : 29 } , "prompt_tokens_details" : { "cached_tokens" : 0 } } }</li><li>思考模式下的多轮工具调用</li><li>在深度思考的多轮对话中，若涉及工具调用，回传 reasoning_content 可确保思考连续性，提升模型输出质量。</li><li>print ( f"reasoning_content: { assistant_message . reasoning_content } " )</li><li>print ( f"tool_calls: { assistant_message . tool_calls } " )</li><li># If no tool calls, we have the final answer</li><li>if not assistant_message . tool_calls :</li><li># Execute each tool call and append results</li><li>for tool_call in assistant_message . tool_calls :</li><li>func_name = tool_call . function . name</li><li>func_args = json . loads ( tool_call . function . arguments )</li><li>"tool_call_id" : tool_call . id ,</li><li># Turn 2: reasoning_content from Turn 1 is already in messages via assistant_message</li><li>reasoning_content: The user wants both weather and time in Beijing. I can call both in parallel. Weather: get_current_weather ( location: Beijing ) . Time: Beijing timezone is Asia/Shanghai. Call both together.</li><li>tool_calls: [ ChatCompletionMessageFunctionToolCall ( id = 'call_01e402113df94ebfb85e3056' , function = Function ( arguments = '{"location": "Beijing"}' , name = 'get_current_weather' ) , type = 'function' ) , ChatCompletionMessageFunctionToolCall ( id = 'call_f2bf1ab9f73842baa64e93d3' , function = Function ( arguments = '{"timezone": "Asia/Shanghai"}' , name = 'get_time' ) , type = 'function' ) ]</li><li>reasoning_content: Present both results clearly.</li><li>tool_calls: None</li><li>第二轮： 用户追问上海天气并与北京对比。由于第一轮的 assistant 消息（包含 reasoning_content 、 content 、 tool_calls ）已通过 messages.append() 累积到对话历史中，模型能直接从上下文获取北京 25°C 的信息，只需再调用 get_current_weather 查询上海（Request 2-1），然后基于两个城市的天气数据进行对比回答（Request 2-2）。</li><li>reasoning_content: Need weather and time for Shanghai, and compare to Beijing 's 25°C. Call weather and time for Shanghai in parallel. The comparison only needs weather, but the previous pattern included time — the user asked "How about Shanghai?" which could mean both. I' ll fetch both to be thorough, or just weather since the question focuses on comparison. I 'll get both since it' s ambiguous and follows the previous context.</li><li>tool_calls: [ ChatCompletionMessageFunctionToolCall ( id = 'call_7e1e7118be8a49ef9de2e8f8' , function = Function ( arguments = '{"location": "Shanghai"}' , name = 'get_current_weather' ) , type = 'function' ) , ChatCompletionMessageFunctionToolCall ( id = 'call_3ea278a5658443258c92b3de' , function = Function ( arguments = '{"timezone": "Asia/Shanghai"}' , name = 'get_time' ) , type = 'function' ) ]</li><li>reasoning_content: Shanghai: cloudy, 22 °C vs Beijing sunny 25 °C. Shanghai is 3 °C colder. Both cities share the same timezone ( Asia/Shanghai ) , so the time is the same.</li><li>联网搜索 结构化输出</li></ul></details> |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home<br>Xiaomi MiMo-V2.5-Pro、MiMo-V2.5 已于 2026.10.21 10:00（UTC+8）正式下线，原模型名称已失效，请及时核对并完成 V2.6 系列的切换。 查看详情 →<br>文档<br>研究<br>模型<br>动态<br>价格<br>联系我们 中文<br>控制台<br>文档<br>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>快速开始 使用指南 文本生成 深度思考<br>Ctrl<br>概述<br>欢迎使用<br>首次调用 API<br>模型列表<br>使用指南<br>文本生成<br>工具调用<br>联网搜索<br>深度思考<br>结构化输出<br>批量推理（Batch API）<br>多模态理解<br>图片理解<br>音频理解<br>视频理解<br>语音<br>语音识别（MiMo-V2.5-ASR）<br>语音合成（MiMo-V2.5-TTS 系列）<br>精彩活动<br>邀请有礼<br>首充专享<br>常见问题<br>账号与认证<br>付费<br>API 接入<br>Token Plan<br>套餐与价格<br>有效期与到期<br>用量与额度<br>团队版权益相关<br>Token Plan 与 Desktop 会员<br>活动<br>其他<br>条款与协议<br>服务协议<br>隐私政策<br>透明度<br>邀请好友<br>深度思考<br>深度思考让模型在生成最终回答前进行深度推理，通过内部思维链（Chain of Thought）逐步分析问题，显著提升复杂任务的准确性。适用于复杂推理、代码生成、数学计算、多步骤分析等需要深度分析的场景。<br>核心能力<br>深度推理 ：将复杂问题拆解为多个步骤逐步分析，提升推理准确性<br>思考过程透明 ：返回完整思考过程，增强可解释性<br>灵活控制 ：支持开启/关闭，可根据任务复杂度按需使用<br>支持的模型<br>当前支持 mimo-v2.6-flash ， mimo-v2.6-pro ， mimo-v2.6-pro-ultraspeed 模型。<br>请求参数<br>在请求中设置 thinking.type 参数控制深度思考开关： enabled 开启思考或 disabled 关闭思考。<br>默认状态：<br>默认开启： mimo-v2.6-flash ， mimo-v2.6-pro ， mimo-v2.6-pro-ultraspeed<br>注意事项<br>参数限制<br>在深度思考下， mimo-v2.6-flash ， mimo-v2.6-pro ， mimo-v2.6-pro-ultraspeed 模型不支持自定义 temperature 和 top_p 参数。即使传入该参数，实际生效值也会被模型强制采用其推荐默认值 1.0 和 0.95 。<br>多轮对话回传要求<br>在 Agent 类产品的多轮会话中开启深度思考，且历史会话中存在工具调用时，后续所有 user 交互轮次中回传的 assistant 如果包含了工具调用， 必须完整回传 reasoning_content 字段，否则 API 将返回 400 错误 。正确回传方式请参考调用示例的“深度思考下的多轮工具调用”。<br>历史 reasoning_content 一旦缺失，模型上下文将不完整，可能表现出指令遵循下降，幻觉增多等现象。<br>受影响的 Agent 产品：<br>协议<br>受影响的 Agent 产品<br>OpenAI 兼容协议<br>TRAE、Cursor、Roo Code、Codex、GitHub Copilot CLI、Zed、AutoGen、Goose<br>Anthropic 兼容协议<br>TRAE、GitHub Copilot CLI、AutoGen、Goose、OpenClaw、OpenCode、Kilo Code<br>其他说明<br>输出长度限制 ： max_completion_tokens 限制的是思考内容与最终回答的总长度。若思考过程较长，留给最终回答的 token 空间会相应减少。建议设置足够的 max_completion_tokens 以避免回答被截断。<br>响应时间 ：开启深度思考会增加响应延迟，复杂任务尤为明显。建议结合 stream: true 实时查看思考过程。<br>调用示例<br>thinking 字段并非 OpenAI 标准参数。通过 OpenAI Python SDK 传入思考相关参数时，需将其置于 extra_body 中传递。<br>开启思考<br>Python SDK<br>Curl<br>import os<br>from openai import OpenAI<br>client = OpenAI (<br>api_key = os . environ . get ( "MIMO_API_KEY" ) ,<br>base_url = "https://api.xiaomimimo.com/v1"<br>)<br>completion = client . chat . completions . create (<br>model = "mimo-v2.6-pro" ,<br>messages = [<br>{<br>"role" : "system" ,<br>"content" : "You are MiMo, an AI assistant developed by Xiaomi. Today is date: Tuesday, December 16, 2025. Your knowledge cutoff date is December 2024."<br>} ,<br>{<br>"role" : "user" ,<br>"content" : "Introduce machine learning in three sentences." |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • 快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>• Token Plan<br>• Token Plan 与 Desktop 会员<br>• 文档中心 常见问题 API 定价 Token Plan |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xiaomi-deep-thinking |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 多轮对话回传要求 › headers | 新增 | 未记录 | • 协议<br>• 受影响的 Agent 产品 |
| tables › 记录 多轮对话回传要求 › heading | 新增 | 未记录 | 多轮对话回传要求 |
| tables › 记录 多轮对话回传要求 › rows › 记录 Anthropic 兼容协议 | 新增 | 未记录 | • Anthropic 兼容协议<br>• TRAE、GitHub Copilot CLI、AutoGen、Goose、OpenClaw、OpenCode、Kilo Code |
| tables › 记录 多轮对话回传要求 › rows › 记录 OpenAI 兼容协议 | 新增 | 未记录 | • OpenAI 兼容协议<br>• TRAE、Cursor、Roo Code、Codex、GitHub Copilot CLI、Zed、AutoGen、Goose |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-model-list-doc

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | xiaomi-model-list-doc |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-openai-chat

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xiaomi-openai-chat |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-openai-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xiaomi-openai-responses |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-platform-updates

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home<br>Xiaomi MiMo-V2.5-Pro and MiMo-V2.5 were retired on Oct 21, 2026, at 10:00 (UTC+8), and their model IDs no longer work. Please update your integrations to use the V2.6 series. View details →<br>Documentation<br>Research<br>Models<br>Updates<br>Pricing<br>Contact Us English<br>Console<br>Documentation<br>Quick Start API Reference Pricing Token Plan News Update Log Token Plan MiMo Claw Chat with MiMo<br>Update Log Feature Updates Xiaomi MiMo API Platform<br>Ctrl<br>Model Release<br>Model Deprecation<br>Feature Updates<br>Xiaomi MiMo API Platform<br>Xiaomi MiMo Desktop<br>Xiaomi MiMo Claw<br>Xiaomi MiMo Studio<br>Xiaomi MiMo Code<br>Invite friends<br>Xiaomi MiMo API Platform<br>V2.2.0（2026-11-03）<br>Launch of Billing Query OpenAPI<br>Daily Usage &amp; Daily Billing Query: Query the token usage, request count, and consumption amount of models and plugins on a daily basis; the bill breaks down into original price, discount reduction, bonus write-off, and final actual payment amount, which is suitable for cost allocation and financial reconciliation.<br>Balance &amp; Package Remaining Query: It supports real-time query of cash balance, bonus balance, credit control balance and remaining package resources, which facilitates the integration of balance warning and automatic recharge reminder, making the consumption progress clear and controllable.<br>V2.1.0 (2026-9-22)<br>Batch Inference (Batch API) &amp; Team Edition TokenPlan Feature Launched<br>Batch Inference：Batch Inference is an offline solution for processing large volumes of data that don't require real-time responses. With an OpenAI-compatible API, it's ideal for use cases such as model evaluation, data labeling, and batch regression testing. You can create asynchronous tasks via the SDK or the console.<br>Team TokenPlan：A model subscription service tailored for development teams and enterprises. It retains all the benefits of the individual plan at the same price; enables unified management of seats, usage and billing for more comprehensive team administration; and allows your team to focus on delivery with clear and controllable costs.<br>2026-9-15 In-App Messages Now Available<br>Platform announcements and system notifications are now delivered in real time via in-app messages, ensuring that no critical updates go unnoticed.<br>2026-6-23 Support for OpenAI Responses API<br>Supports OpenAI Responses API-compatible endpoints, enabling integration with coding tools such as Codex.<br>2026-6-11 Refer &amp; earn New Upgrade<br>Invite friends to buy their first Token Plan. You get cash back, and they get a first-order discount.<br>2026-4-29 Refer &amp; earn New Release<br>Invite builders to try Xiaomi's flagship MiMo V2.5 — sign up to instantly get $2 in trial credits, redeemable for API calls (Token Plan not supported).<br>2026-4-23 Token Plan Auto-Renewal Now Available<br>Monthly and annual subscription plans available, with options to renew your current plan or upgrade to a new one.<br>Five new models added to all plans: mimo-v2.5-pro、mimo-v2.5、mimo-v2.5-tts-voiceclone、mimo-v2.5-tts-voicedesign、mimo-v2.5-tts.<br>Tiered token consumption based on context length has been removed for all models (previously 2x consumption for 256K–1M context).<br>Multiple limited-time promotions are now available:<br>Returning user bonus : exclusive "usage reset" reward for existing users.<br>First-time auto-renewal discount : new users who have never subscribed get 23% off; returning users enabling auto-renewal for the first time get 30% off. This discount cannot be combined with the first-purchase discount. Limited to one per account.<br>Annual plan savings : 12% off compared to monthly auto-renewal. First-purchase and first-time auto-renewal discounts do not apply to annual plans.<br>Off-peak discount rate : 0.8x token consumption during off-peak hours (12:00 AM – 8:00 AM Beijing Time / 4:00 PM – 12:00 AM UTC).<br>2026-4-3 Token Plan New Release<br>Offers four tiers of packages, a unified Credit quota system, calculates consumption based on Token usage, and supports package upgrades and usage queries<br>Flexibly call mimo-v2-pro / omni / tts, sharing quota<br>Compatible with mainstream AI programming tools: OpenClaw &#124; Claude Code &#124; OpenCode &#124; Kilocode &#124; Cline...<br>2026-03-03 mimo-v2-flash Update<br>Model Plugin Capabilities<br>mimo-v2-flash supports Web Search tool to access real-time public network information<br>2026-02-10 Real-name authentication of enterprises and corporate payment functions are launched<br>Real-name authentication of enterprise accounts and domestic non-mainland users<br>Added real-name authentication for enterprises<br>Added real-name authentication for domestic non-mainland users<br>Changed the account that supports real-name authentication to an enterprise account<br>B2B corporate online banking top-up<br>Corporate accounts support payment through corporate online banking<br>Support corporate order refunds and invoicing<br>2026-01-26 Billing Function Launched<br>Model inference service billing<br>The model inference service is billed based on token consumption, and supports viewing and downloading bills and checking real-time balance.<br>2026-01-20 The Recharge Function Launched<br>Recharge and invoicing<br>Domestic users: Personal real-name authentication.<br>Global users: Recharge, refund, invoicing, balance alerts, metering and billing, and billing.<br>Bill details<br>Existing users' free credit will be automatically credited, and new users will receive free credit upon registration.<br>2025-12-16 Xiaomi MiMo API Open Platform Released<br>API Key Management and Usage Tracking<br>Supports quick creation and configuration of API keys in the console to achieve model call authentication.<br>Real-time viewing and export of usage data such as token consumption and call count.<br>One-stop developer documentation center<br>Provides a quick guide to getting started with the platform, model API documentation, and integration extension methods<br>Includes model introduction, debugging examples, and troubleshooting scenarios<br>Update Time November 03, 2026<br>Model Deprecation Xiaomi MiMo Desktop<br>Table of Contents<br>Scroll to top<br>Official Account<br>Open Platform WeChat<br>Open Platform Feishu<br>Products<br>Xiaomi MiMo API Xiaomi MiMo Desktop Xiaomi MiMo Claw Xiaomi MiMo Studio Xiaomi MiMo Code<br>Open Platform<br>Docs FAQ API Pricing Token Plan<br>Updates<br>News Changelog MiMo Blog<br>About Us<br>Terms of Service Privacy Policy Transparency<br>Products<br>Xiaomi MiMo API Xiaomi MiMo Desktop Xiaomi MiMo Claw Xiaomi MiMo Studio Xiaomi MiMo Code<br>Open Platform<br>Docs FAQ API Pricing Token Plan<br>Updates<br>News Changelog MiMo Blog |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • Quick Start API Reference Pricing Token Plan News Update Log Token Plan MiMo Claw Chat with MiMo<br>• Team TokenPlan：A model subscription service tailored for development teams and enterprises. It retains all the benefits of the individual plan at the same price; enables unified management of seats, usage and billing for more comprehensive team administration; and allows your team to focus on delivery with clear and controllable costs.<br>• Invite friends to buy their first Token Plan. You get cash back, and they get a first-order discount.<br>• Invite builders to try Xiaomi's flagship MiMo V2.5 — sign up to instantly get $2 in trial credits, redeemable for API calls (Token Plan not supported).<br>• 2026-4-23 Token Plan Auto-Renewal Now Available<br>• Monthly and annual subscription plans available, with options to renew your current plan or upgrade to a new one.<br>• Annual plan savings : 12% off compared to monthly auto-renewal. First-purchase and first-time auto-renewal discounts do not apply to annual plans.<br>• 2026-4-3 Token Plan New Release<br>• Docs FAQ API Pricing Token Plan |
| scope | 新增 | 未记录 | documentation |
| source ref | 新增 | 未记录 | xiaomi-platform-updates |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-structured-output

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.xiaomimimo.com/v1" |
| capability mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>快速开始 使用指南 文本生成 结构化输出</li><li>工具调用</li><li>结构化输出</li><li>批量推理（Batch API）</li><li>音频理解</li><li>视频理解</li><li>语音</li><li>语音识别（MiMo-V2.5-ASR）</li><li>语音合成（MiMo-V2.5-TTS 系列）</li><li>"content" : "You are MiMo, an AI assistant developed by Xiaomi. Today is date: Tuesday, December 16, 2025. Your knowledge cutoff date is December 2024.\nDo not add any explanations outside JSON. Parse meeting information and return nested structured JSON: {\"meeting_meta\": {\"meeting_topic\": string &#124; null, \"start_time\": string &#124; null, \"participants\": array&lt;string&gt;}, \"action_items\": [{\"task\": string, \"responsible_person\": string, \"deadline\": string}]}\nFill null for unknown fields."</li><li>"content" : "Product iteration meeting at 14:00 tomorrow. Attendees: Li Ming, Wang Hua. Task: Complete API document revision by Friday, taken by Wang Hua."</li><li>"content" : "{\"meeting_meta\": {\"meeting_topic\": \"Product iteration meeting\", \"start_time\": \"2025-12-17 14:00\", \"participants\": [\"Li Ming\", \"Wang Hua\"]}, \"action_items\": [{\"task\": \"Complete API document revision\", \"responsible_person\": \"Wang Hua\", \"deadline\": \"2025-12-19\"}]}" ,</li><li>"tool_calls" : null ,</li><li>"reasoning_content" : "The user wants me to parse meeting information and return structured JSON.\n\nMeeting: Product iteration meeting\nTime: 14:00 tomorrow\nParticipants: Li Ming, Wang Hua\nTask: Complete API document revision by Friday, responsible: Wang Hua\n\nI need to fill unknown fields with null. Today's date is Tuesday, December 16, 2025, so tomorrow is December 17, 2025. But I should probably just put what was given: \"14:00 tomorrow\" — I could interpret it. The instruction says to fi</li><li>"reasoning_tokens" : 253</li><li>深度思考 批量推理（Batch API）</li></ul></details> |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home<br>Xiaomi MiMo-V2.5-Pro、MiMo-V2.5 已于 2026.10.21 10:00（UTC+8）正式下线，原模型名称已失效，请及时核对并完成 V2.6 系列的切换。 查看详情 →<br>文档<br>研究<br>模型<br>动态<br>价格<br>联系我们 中文<br>控制台<br>文档<br>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>快速开始 使用指南 文本生成 结构化输出<br>Ctrl<br>概述<br>欢迎使用<br>首次调用 API<br>模型列表<br>使用指南<br>文本生成<br>工具调用<br>联网搜索<br>深度思考<br>结构化输出<br>批量推理（Batch API）<br>多模态理解<br>图片理解<br>音频理解<br>视频理解<br>语音<br>语音识别（MiMo-V2.5-ASR）<br>语音合成（MiMo-V2.5-TTS 系列）<br>精彩活动<br>邀请有礼<br>首充专享<br>常见问题<br>账号与认证<br>付费<br>API 接入<br>Token Plan<br>套餐与价格<br>有效期与到期<br>用量与额度<br>团队版权益相关<br>Token Plan 与 Desktop 会员<br>活动<br>其他<br>条款与协议<br>服务协议<br>隐私政策<br>透明度<br>邀请好友<br>结构化输出<br>支持的模型<br>当前支持 mimo-v2.6-flash ， mimo-v2.6-pro ， mimo-v2.6-pro-ultraspeed 模型。<br>请求参数<br>response_format ：响应格式控制参数，传入 {"type": "json_object"} 开启 JSON 模式输出能力。<br>messages ：需在系统消息或用户消息中明确告知模型：要求只返回 JSON 并且完整定义返回 JSON 的字段、层级、数据类型，附带示例更佳。<br>注意合理规划 max_completion_tokens 的值。设置过小可能导致输出被截断，JSON 不完整无法解析。<br>调用示例<br>基础调用<br>Python SDK<br>Curl<br>import os<br>import json<br>from openai import OpenAI<br>client = OpenAI (<br>api_key = os . environ . get ( "MIMO_API_KEY" ) ,<br>base_url = "https://api.xiaomimimo.com/v1"<br>)<br>completion = client . chat . completions . create (<br>model = "mimo-v2.6-pro" ,<br>messages = [<br>{<br>"role" : "system" ,<br>"content" : "You are MiMo, an AI assistant developed by Xiaomi. Today is date: Tuesday, December 16, 2025. Your knowledge cutoff date is December 2024.\nDo not add any explanations outside JSON. Parse meeting information and return nested structured JSON: {\"meeting_meta\": {\"meeting_topic\": string &#124; null, \"start_time\": string &#124; null, \"participants\": array&lt;string&gt;}, \"action_items\": [{\"task\": string, \"responsible_person\": string, \"deadline\": string}]}\nFill null for unknown fields."<br>} ,<br>{<br>"role" : "user" ,<br>"content" : "Product iteration meeting at 14:00 tomorrow. Attendees: Li Ming, Wang Hua. Task: Complete API document revision by Friday, taken by Wang Hua."<br>}<br>] ,<br>response_format = {<br>"type" : "json_object"<br>}<br>)<br>result = completion . choices [ 0 ] . message . content<br>try :<br>parsed_json_data = json . loads ( result )<br>print ( json . dumps ( parsed_json_data , indent = 4 , ensure_ascii = False ) )<br>except json . JSONDecodeError as e :<br>print ( f"JSON parsing failed: { str ( e ) } " )<br>print ( f"Raw complete content: { result } " )<br>响应示例<br>{<br>"id" : "d7bbc231-ed6a-4884-a9e4-d7caff96cf25_c37a9ce97e9542079b9d948b07c10209" ,<br>"choices" : [<br>{<br>"finish_reason" : "stop" ,<br>"index" : 0 ,<br>"message" : { |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • 快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>• Token Plan<br>• Token Plan 与 Desktop 会员<br>• "content" : "Plan a 3-day city trip focusing on museums and local food with a moderate budget."<br>• 文档中心 常见问题 API 定价 Token Plan |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xiaomi-structured-output |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-token-plan

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • 语言模型按 Token 数扣除 Credits 额度；ASR 模型按输入音频时长扣除 Credits 额度（时长统计精确到秒，折算为小时计费）；TTS 系列模型限时免费，不消耗套餐 Credits。具体折算规则如下。<br>• 输入音频时长（h)<br>• 例如，您订购了 Lite 套餐（4.1B Credits），可单独或混合调用 MiMo-V2.6 系列模型，当您使用了 10M mimo-v2.6-pro 的输入（未命中缓存）token 后，相当于消耗了 3000 M Credits，仍可享受 1100M mimo-v2.5-flash 的 Credits 额度。此外，若您将 Lite 套餐的额度全部专用于 ASR模型，每月可用 4100M ÷ 30M/小时 = 136.6 小时（相当于每天处理 4.5 小时的音频，可连续使用 1 个月）。可在 Token Plan 查看当前套餐的额度及用量。 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home<br>Xiaomi MiMo-V2.5-Pro、MiMo-V2.5 已于 2026.10.21 10:00（UTC+8）正式下线，原模型名称已失效，请及时核对并完成 V2.6 系列的切换。 查看详情 →<br>文档<br>研究<br>模型<br>动态<br>价格<br>联系我们 中文<br>控制台<br>文档<br>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>价格 Token Plan<br>Ctrl<br>按量计费 API<br>Token Plan<br>邀请好友<br>Token Plan<br>Token Plan 是面向 AI 编程场景推出的专属订阅方案，您可使用高性价比的订阅资源包，在各类主流 AI 开发工具中调用 MiMo 旗舰大模型。平台目前支持个人版和团队版两种类型。<br>核心优势<br>覆盖旗舰模型 — 各套餐均支持最新旗舰模型 mimo-v2.6-pro、mimo-v2.6-flash，以及 ASR 和 TTS 模型。采用 Token 折算机制，额度透明可控<br>弹性订阅方案 — 个人版和团队版均设梯度套餐，满足个人和团队开发者各类开发需求<br>多生态开箱即用 — 兼容 OpenCode、OpenClaw、Claude Code 等主流开发工具链<br>团队版专属权益 — 继承个人版全部权益的基础上，独享空间席位统一管理、团队用量控制分析、集中式账单与发票管理等权益<br>个人版定价与额度<br>月度套餐<br>Lite<br>Standard<br>Pro<br>Max<br>定价<br>$6/月，¥39/月<br>$16/月，¥99/月<br>$50/月，¥329/月<br>$100/月，¥659/月<br>每月固定额度<br>41 亿 Credits<br>110 亿 Credits<br>380 亿 Credits<br>820 亿 Credits<br>年度套餐<br>Lite<br>Standard<br>Pro<br>Max<br>定价<br>$63.36/年，¥408/年<br>$168.96/年，¥1044/年<br>$528.00/年，¥3468/年<br>$1056.00/年，¥6948/年<br>每年固定额度<br>492 亿 Credits<br>1320 亿 Credits<br>4560 亿 Credits<br>9840 亿 Credits<br>团队版定价与额度<br>月度套餐<br>Standard<br>Pro<br>Max<br>定价<br>$16/席/月，¥99/席/月<br>$50/席/月，¥329/席/月<br>$100/席/月，¥659/席/月<br>每月固定额度<br>110 亿 Credits<br>380 亿 Credits<br>820 亿 Credits<br>年度套餐<br>Standard<br>Pro<br>Max<br>定价<br>$168.96/席/年，¥1,044/席/年<br>$528/席/年，¥3,468/席/年<br>$1,056/席/年，¥6,948/席/年<br>每席每月固定额度<br>110 亿 Credits<br>380 亿 Credits<br>820 亿 Credits<br>适用场景<br>Lite（仅个人版）<br>Standard<br>Pro<br>Max<br>适用场景<br>适合首次体验龙虾的尝鲜用户<br>使用 mimo-v2.6-flash作为基准，可执行约 200 轮中等～复杂任务<br>适合经常使用 AI 为自己提效的办公达人<br>使用 mimo-v2.6-flash 作为基准，可执行约 1600 轮中等～复杂任务<br>适合每天高频使用 AI 的开发者和专业效率达人<br>使用 mimo-v2.6-flash 作为基准，可执行约 5600 轮中等～复杂任务<br>适合把 AI 当核心生产力工具的高强度、重度用户<br>使用 mimo-v2.6-flash 作为基准，可执行约 12800 轮中等～复杂任务<br>上述为月度套餐的场景范围，年度套餐的任务处理数量级约为月度套餐的 12 倍<br>额度消耗规则<br>个人版与团队版 TokenPlan 的额度消耗规则相同<br>语言模型按 Token 数扣除 Credits 额度；ASR 模型按输入音频时长扣除 Credits 额度（时长统计精确到秒，折算为小时计费）；TTS 系列模型限时免费，不消耗套餐 Credits。具体折算规则如下。<br>语言模型<br>模型<br>输入（命中缓存）Token |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（20 项）<details><summary>展开完整内容</summary><ul><li>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话</li><li>价格 Token Plan</li><li>Token Plan</li><li>Token Plan 是面向 AI 编程场景推出的专属订阅方案，您可使用高性价比的订阅资源包，在各类主流 AI 开发工具中调用 MiMo 旗舰大模型。平台目前支持个人版和团队版两种类型。</li><li>$6/月，¥39/月</li><li>$16/月，¥99/月</li><li>$50/月，¥329/月</li><li>$100/月，¥659/月</li><li>$63.36/年，¥408/年</li><li>$168.96/年，¥1044/年</li><li>$528.00/年，¥3468/年</li><li>$1056.00/年，¥6948/年</li><li>$16/席/月，¥99/席/月</li><li>$50/席/月，¥329/席/月</li><li>$100/席/月，¥659/席/月</li><li>$168.96/席/年，¥1,044/席/年</li><li>$528/席/年，¥3,468/席/年</li><li>$1,056/席/年，¥6,948/席/年</li><li>例如，您订购了 Lite 套餐（4.1B Credits），可单独或混合调用 MiMo-V2.6 系列模型，当您使用了 10M mimo-v2.6-pro 的输入（未命中缓存）token 后，相当于消耗了 3000 M Credits，仍可享受 1100M mimo-v2.5-flash 的 Credits 额度。此外，若您将 Lite 套餐的额度全部专用于 ASR模型，每月可用 4100M ÷ 30M/小时 = 136.6 小时（相当于每天处理 4.5 小时的音频，可连续使用 1 个月）。可在 Token Plan 查看当前套餐的额度及用量。</li><li>文档中心 常见问题 API 定价 Token Plan</li></ul></details> |
| scope | 新增 | 未记录 | plan |
| source ref | 新增 | 未记录 | xiaomi-token-plan |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • 空字符串<br>• Lite<br>• Standard<br>• Pro<br>• Max |
| tables › 第 1 项 › heading | 新增 | 未记录 | 月度套餐 |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • 定价<br>• $6/月，¥39/月<br>• $16/月，¥99/月<br>• $50/月，¥329/月<br>• $100/月，¥659/月 |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • 每月固定额度<br>• 41 亿 Credits<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits |
| tables › 第 2 项 › headers | 新增 | 未记录 | • 空字符串<br>• Lite<br>• Standard<br>• Pro<br>• Max |
| tables › 第 2 项 › heading | 新增 | 未记录 | 年度套餐 |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • 定价<br>• $63.36/年，¥408/年<br>• $168.96/年，¥1044/年<br>• $528.00/年，¥3468/年<br>• $1056.00/年，¥6948/年 |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • 每年固定额度<br>• 492 亿 Credits<br>• 1320 亿 Credits<br>• 4560 亿 Credits<br>• 9840 亿 Credits |
| tables › 第 3 项 › headers | 新增 | 未记录 | • 空字符串<br>• Standard<br>• Pro<br>• Max |
| tables › 第 3 项 › heading | 新增 | 未记录 | 月度套餐 |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • 定价<br>• $16/席/月，¥99/席/月<br>• $50/席/月，¥329/席/月<br>• $100/席/月，¥659/席/月 |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • 每月固定额度<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits |
| tables › 第 4 项 › headers | 新增 | 未记录 | • 空字符串<br>• Standard<br>• Pro<br>• Max |
| tables › 第 4 项 › heading | 新增 | 未记录 | 年度套餐 |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • 定价<br>• $168.96/席/年，¥1,044/席/年<br>• $528/席/年，¥3,468/席/年<br>• $1,056/席/年，¥6,948/席/年 |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • 每席每月固定额度<br>• 110 亿 Credits<br>• 380 亿 Credits<br>• 820 亿 Credits |
| tables › 第 5 项 › headers | 新增 | 未记录 | • 空字符串<br>• Lite（仅个人版）<br>• Standard<br>• Pro<br>• Max |
| tables › 第 5 项 › heading | 新增 | 未记录 | 适用场景 |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • 适用场景<br>• 适合首次体验龙虾的尝鲜用户 使用 mimo-v2.6-flash作为基准，可执行约 200 轮中等～复杂任务<br>• 适合经常使用 AI 为自己提效的办公达人 使用 mimo-v2.6-flash 作为基准，可执行约 1600 轮中等～复杂任务<br>• 适合每天高频使用 AI 的开发者和专业效率达人 使用 mimo-v2.6-flash 作为基准，可执行约 5600 轮中等～复杂任务<br>• 适合把 AI 当核心生产力工具的高强度、重度用户 使用 mimo-v2.6-flash 作为基准，可执行约 12800 轮中等～复杂任务 |
| tables › 第 6 项 › headers | 新增 | 未记录 | • 模型<br>• 输入（命中缓存）Token<br>• 输入（未命中缓存）Token<br>• 输出 Token |
| tables › 第 6 项 › heading | 新增 | 未记录 | 额度消耗规则 |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • mimo-v2.6-pro<br>• 2.5 Credits<br>• 300 Credits<br>• 600 Credits |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • mimo-v2.6-flash<br>• 2 Credits<br>• 100 Credits<br>• 200 Credits |
| tables › 第 7 项 › headers | 新增 | 未记录 | • 模型<br>• 输入音频时长（h) |
| tables › 第 7 项 › heading | 新增 | 未记录 | 额度消耗规则 |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • mimo-v2.5-asr<br>• 30M Credits |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-tts-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xiaomi-tts-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

#### 来源 / xiaomi-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.xiaomimimo.com/v1" |
| capability mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>快速开始 使用指南 文本生成 工具调用 联网搜索</li><li>工具调用</li><li>结构化输出</li><li>批量推理（Batch API）</li><li>音频理解</li><li>视频理解</li><li>语音</li><li>语音识别（MiMo-V2.5-ASR）</li><li>语音合成（MiMo-V2.5-TTS 系列）</li><li>联网搜索是一款基础联网搜索工具，能为您的大模型获取实时的公开网络信息（如新闻、商品、天气等）。</li><li>"tool_calls" : null</li><li>"reasoning_tokens" : 0</li><li>模型判断无需联网 ：模型判断当前问题不涉及实时信息，可直接使用自身知识回答。如需强制联网，请设置 force_search: true 。</li></ul></details> |
| excerpt | 新增 | 未记录 | Xiaomi MiMo Home<br>Xiaomi MiMo-V2.5-Pro、MiMo-V2.5 已于 2026.10.21 10:00（UTC+8）正式下线，原模型名称已失效，请及时核对并完成 V2.6 系列的切换。 查看详情 →<br>文档<br>研究<br>模型<br>动态<br>价格<br>联系我们 中文<br>控制台<br>文档<br>快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>快速开始 使用指南 文本生成 工具调用 联网搜索<br>Ctrl<br>概述<br>欢迎使用<br>首次调用 API<br>模型列表<br>使用指南<br>文本生成<br>工具调用<br>联网搜索<br>深度思考<br>结构化输出<br>批量推理（Batch API）<br>多模态理解<br>图片理解<br>音频理解<br>视频理解<br>语音<br>语音识别（MiMo-V2.5-ASR）<br>语音合成（MiMo-V2.5-TTS 系列）<br>精彩活动<br>邀请有礼<br>首充专享<br>常见问题<br>账号与认证<br>付费<br>API 接入<br>Token Plan<br>套餐与价格<br>有效期与到期<br>用量与额度<br>团队版权益相关<br>Token Plan 与 Desktop 会员<br>活动<br>其他<br>条款与协议<br>服务协议<br>隐私政策<br>透明度<br>邀请好友<br>联网搜索<br>联网搜索是一款基础联网搜索工具，能为您的大模型获取实时的公开网络信息（如新闻、商品、天气等）。<br>核心能力<br>联网搜索方式灵活 ：支持强制搜索和意图识别两种方式，开通意图识别后，将自主判断是否进行联网搜索，无需手动触发。<br>提前返回搜索来源 ：流式响应中，首包会返回所有搜索来源。<br>多工具混合调用 ：可与自定义 Function、工具协同使用，模型会自动判断调用优先级与必要性。<br>响应模式灵活 ：支持流式和非流式两种响应，两种方式都将返回搜索、总结内容。<br>快速开始<br>使用前需要开通 联网服务插件 。<br>开通服务<br>访问 控制台-插件管理 ，选择开通联网服务插件。<br>联网服务插件收费参考 定价策略 ，注意， 是否触发搜索调用由模型判断，一轮搜索调用（若模型判定需要）可能会发起多个关键词同时搜索，会多次使用联网内容插件，您可以通过 max_keyword 参数来限制一轮搜索最大的关键词数量，进一步控制调用频次与成本。<br>说明：获取 API Key 等准备工作，请参考 首次调用API 。<br>示例代码<br>Python SDK<br>Curl<br>import os<br>from openai import OpenAI<br>client = OpenAI (<br>api_key = os . environ . get ( "MIMO_API_KEY" ) ,<br>base_url = "https://api.xiaomimimo.com/v1"<br>)<br>completion = client . chat . completions . create (<br>model = "mimo-v2.6-pro" ,<br>messages = [<br>{<br>"role" : "system" ,<br>"content" : "You are MiMo, an AI assistant developed by Xiaomi. Today is date: Tuesday, December 16, 2025. Your knowledge cutoff date is December 2024."<br>} ,<br>{<br>"role" : "user" ,<br>"content" : "武汉明天天气怎么样？"<br>}<br>] ,<br>max_completion_tokens = 1024 ,<br>temperature = 1.0 ,<br>top_p = 0.95 ,<br>stream = False ,<br>stop = None ,<br>frequency_penalty = 0 ,<br>presence_penalty = 0 ,<br>extra_body = {<br>"thinking" : { "type" : "disabled" }<br>} ,<br>tools = [<br>{<br>"type" : "web_search" ,<br>"max_keyword" : 3 ,<br>"force_search" : True , |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • 快速开始 API 文档 价格 Token Plan 新闻 更新日志 Token Plan MiMo Claw 与 MiMo 对话<br>• Token Plan<br>• Token Plan 与 Desktop 会员<br>• 联网搜索工具每 1000 次调用费用：国内 ¥16 / 1000 次；海外 $5 / 1000 次。<br>• 文档中心 常见问题 API 定价 Token Plan |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xiaomi-web-search |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Xiaomi MiMo Home |

### Provider / xiaomi

#### 档案

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| profile › aliases › evidence › 记录 xiaomi-model-list-doc › assertion | 新增 | 未记录 | 官方页面标题以 Xiaomi MiMo 标识该产品；MiMo 是其中的产品名。 |
| profile › aliases › evidence › 记录 xiaomi-model-list-doc › source ref | 新增 | 未记录 | xiaomi-model-list-doc |
| profile › aliases | 新增 | 未记录 | • MiMo |
| profile › docs › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方按量定价文档入口。 |
| profile › docs › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| profile › docs › evidence › 记录 xiaomi-model-list-doc › assertion | 新增 | 未记录 | 官方模型目录文档入口。 |
| profile › docs › evidence › 记录 xiaomi-model-list-doc › source ref | 新增 | 未记录 | xiaomi-model-list-doc |
| profile › docs › evidence › 记录 xiaomi-token-plan › assertion | 新增 | 未记录 | 官方 Token Plan 文档入口。 |
| profile › docs › evidence › 记录 xiaomi-token-plan › source ref | 新增 | 未记录 | xiaomi-token-plan |
| profile › docs › overview | 新增 | 未记录 | https://mimo.mi.com/docs/zh-CN/api/model/list-models |
| profile › docs › plans | 新增 | 未记录 | https://mimo.mi.com/docs/zh-CN/price/token-plan |
| profile › docs › 价格信息（pricing） | 新增 | 未记录 | https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go |
| profile › 类别（kind） › evidence › 记录 xiaomi-model-list-doc › assertion | 新增 | 未记录 | 官方平台页面版权声明归属于 Xiaomi。 |
| profile › 类别（kind） › evidence › 记录 xiaomi-model-list-doc › source ref | 新增 | 未记录 | xiaomi-model-list-doc |
| profile › 类别（kind） | 新增 | 未记录 | first_party |
| profile › 名称（name） › evidence › 记录 xiaomi-model-list-doc › assertion | 新增 | 未记录 | 官方模型目录页标题标识为 Xiaomi MiMo。 |
| profile › 名称（name） › evidence › 记录 xiaomi-model-list-doc › source ref | 新增 | 未记录 | xiaomi-model-list-doc |
| profile › 名称（name） | 新增 | 未记录 | Xiaomi MiMo |

### 待核对项目

#### 项目 / api-catalog-market-and-supply-unresolved

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | 8 个模型 ID 来自公开 API 模型目录响应。 |
| evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| ID（id） | 新增 | 未记录 | api-catalog-market-and-supply-unresolved |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | API 目录没有说明账号市场或 Token Plan 归属；仅将按量价格文档精确列出的模型映射至 CN/GLOBAL，目录中其他 ID 继续保留观察。 |

#### 项目 / batch-endpoint-region-placeholder-unresolved

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xiaomi-batch-api › assertion | 新增 | 未记录 | 官方地址为 batch-api-${region}.xiaomimimo.com，region 取值与账号市场映射未明确。 |
| evidence › 记录 xiaomi-batch-api › source ref | 新增 | 未记录 | xiaomi-batch-api |
| ID（id） | 新增 | 未记录 | batch-endpoint-region-placeholder-unresolved |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | Batch 文档的 Base URL 含 ${region} 变量，尚无证据将该变量映射到具体市场和地域；批量能力与接口线索保留观察，不生成 Endpoint/Route。 |

#### 项目 / limited-free-tts-duration-unknown

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方注明“限时免费”，但没有明确活动截止时间。 |
| evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| ID（id） | 新增 | 未记录 | limited-free-tts-duration-unknown |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 官方定价页列出三个 TTS 型号限时免费，但没有给出结束时间；保留为价格观察，不将其转换为长期零价。 |

#### 项目 / pricing-model-not-in-catalog-cn-mimo-v2.5-asr

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | 当前 API 目录未找到该精确 ID。 |
| evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | ASR 价格表列出模型 ID 和按小时价格。 |
| evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| ID（id） | 新增 | 未记录 | pricing-model-not-in-catalog-cn-mimo-v2.5-asr |
| 类别（kind） | 新增 | 未记录 | ambiguous_identity |
| message | 新增 | 未记录 | 官方價格表列出 mimo-v2.5-asr，但 API 目录未包含该精确 ID；保留观察，不创建 Offering。 |
| subject ref | 新增 | 未记录 | cn/mimo-v2.5-asr |

#### 项目 / pricing-model-not-in-catalog-global-mimo-v2.5-asr

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | 当前 API 目录未找到该精确 ID。 |
| evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | ASR 价格表列出模型 ID 和按小时价格。 |
| evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| ID（id） | 新增 | 未记录 | pricing-model-not-in-catalog-global-mimo-v2.5-asr |
| 类别（kind） | 新增 | 未记录 | ambiguous_identity |
| message | 新增 | 未记录 | 官方價格表列出 mimo-v2.5-asr，但 API 目录未包含该精确 ID；保留观察，不创建 Offering。 |
| subject ref | 新增 | 未记录 | global/mimo-v2.5-asr |

#### 项目 / token-plan-market-and-entitlement-unresolved

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xiaomi-token-plan › assertion | 新增 | 未记录 | Token Plan 来源未建立套餐资格、服务市场与目录模型之间的可验证映射。 |
| evidence › 记录 xiaomi-token-plan › source ref | 新增 | 未记录 | xiaomi-token-plan |
| ID（id） | 新增 | 未记录 | token-plan-market-and-entitlement-unresolved |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | Token Plan 的 CN、SGP、AMS 账号归属、额度及 API 使用资格尚未映射；套餐事实保留在来源观察中。 |

#### 项目 / web-search-bundled-pricing-and-api-unresolved

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 国内/海外联网服务按调用次数计价，并将搜索和网页解析作为一个服务包描述。 |
| evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| ID（id） | 新增 | 未记录 | web-search-bundled-pricing-and-api-unresolved |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 联网服务按千次计价，说明包含网页搜索和解析；调用计量与独立能力 API 的准确边界尚未形成 IR 事实。 |

### 市场 / cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 能力（capabilities） | 新增 | 未记录 | 空列表 |
| endpoints | 新增 | 未记录 | 空列表 |
| ID（id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格页单列中国区市场价格。 |
| ID（id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| ID（id） | 新增 | 未记录 | cn |
| 名称（name） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格页使用中国区定价标题。 |
| 名称（name） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 名称（name） | 新增 | 未记录 | 中国区 |
| plans | 新增 | 未记录 | 空列表 |

#### Model / mimo-v2.6-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | API 目录对精确匹配的当前报价模型声明该展示名称。 |
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| 展示名称（display_name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-flash |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 mimo-v2.6-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-flash › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格规则按官方模型、计价市场及实时/批量推理类型逐行提取。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | realtime |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明中国区使用 CNY 计价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 中国区计费单位 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[2] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[2] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明中国区使用 CNY 计价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 中国区计费单位 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[5] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[5] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 mimo-v2.6-flash › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格表中的精确模型 ID 对应该 PriceFact。 |
| prices › 记录 mimo-v2.6-flash › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-flash |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 当前官方价格表按精确模型 ID 列出该型号；同一市场的官方价格证明其按量供应。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-flash |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档明确标注中国区计价区域。 |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[2] |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 批量推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | table[1]/row[5] |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / mimo-v2.6-pro-ultraspeed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | API 目录对精确匹配的当前报价模型声明该展示名称。 |
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| 展示名称（display_name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-pro-ultraspeed |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格规则按官方模型、计价市场及实时/批量推理类型逐行提取。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | realtime |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档声明中国区使用 CNY 计价。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.25 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 30.00 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 60.00 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格表中的精确模型 ID 对应该 PriceFact。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro-ultraspeed |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 当前官方价格表按精确模型 ID 列出该型号；同一市场的官方价格证明其按量供应。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro-ultraspeed |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档明确标注中国区计价区域。 |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / mimo-v2.6-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | API 目录对精确匹配的当前报价模型声明该展示名称。 |
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| 展示名称（display_name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 mimo-v2.6-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格规则按官方模型、计价市场及实时/批量推理类型逐行提取。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | realtime |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明中国区使用 CNY 计价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 中国区计费单位 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[1] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[1] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.025 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 3.00 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 6.00 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明中国区使用 CNY 计价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 中国区计费单位 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[4] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[4] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.0125 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.50 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 3.00 |
| prices › 记录 mimo-v2.6-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格表中的精确模型 ID 对应该 PriceFact。 |
| prices › 记录 mimo-v2.6-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 当前官方价格表按精确模型 ID 列出该型号；同一市场的官方价格证明其按量供应。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档明确标注中国区计价区域。 |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 实时推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[1]/row[1] |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 中国区 价格表列出 批量推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | table[1]/row[4] |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

### 市场 / global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 能力（capabilities） | 新增 | 未记录 | 空列表 |
| endpoints | 新增 | 未记录 | 空列表 |
| ID（id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格页单列国际区市场价格。 |
| ID（id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| ID（id） | 新增 | 未记录 | global |
| 名称（name） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格页使用国际区定价标题。 |
| 名称（name） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 名称（name） | 新增 | 未记录 | 国际区 |
| plans | 新增 | 未记录 | 空列表 |

#### Model / mimo-v2.6-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | API 目录对精确匹配的当前报价模型声明该展示名称。 |
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| 展示名称（display_name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-flash |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 mimo-v2.6-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-flash › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格规则按官方模型、计价市场及实时/批量推理类型逐行提取。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | realtime |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明国际区使用 USD 计价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 国际区计费单位 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[2] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[2] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.0028 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.14 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.28 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明国际区使用 USD 计价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 国际区计费单位 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[5] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[5] |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.0014 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.07 |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.14 |
| prices › 记录 mimo-v2.6-flash › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格表中的精确模型 ID 对应该 PriceFact。 |
| prices › 记录 mimo-v2.6-flash › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-flash › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-flash |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 当前官方价格表按精确模型 ID 列出该型号；同一市场的官方价格证明其按量供应。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-flash |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档明确标注国际区计价区域。 |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[2] |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 批量推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | table[3]/row[5] |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / mimo-v2.6-pro-ultraspeed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | API 目录对精确匹配的当前报价模型声明该展示名称。 |
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| 展示名称（display_name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-pro-ultraspeed |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格规则按官方模型、计价市场及实时/批量推理类型逐行提取。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | realtime |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档声明国际区使用 USD 计价。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.036 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 4.35 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 8.7 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格表中的精确模型 ID 对应该 PriceFact。 |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro-ultraspeed › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro-ultraspeed |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 当前官方价格表按精确模型 ID 列出该型号；同一市场的官方价格证明其按量供应。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro-ultraspeed |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档明确标注国际区计价区域。 |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / mimo-v2.6-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › assertion | 新增 | 未记录 | API 目录对精确匹配的当前报价模型声明该展示名称。 |
| 展示名称（display_name） › evidence › 记录 xiaomi-api-models › source ref | 新增 | 未记录 | xiaomi-api-models |
| 展示名称（display_name） | 新增 | 未记录 | Xiaomi MiMo:mimo-v2.6-pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 mimo-v2.6-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格规则按官方模型、计价市场及实时/批量推理类型逐行提取。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | realtime |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明国际区使用 USD 计价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 国际区计费单位 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[1] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[1] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.0036 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.435 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.87 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | inference_type |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格文档声明国际区使用 USD 计价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | excerpt / 国际区计费单位 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[4] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 批量推理的 Token 单价。 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[4] |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.0018 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.2175 |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 mimo-v2.6-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.435 |
| prices › 记录 mimo-v2.6-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 价格表中的精确模型 ID 对应该 PriceFact。 |
| prices › 记录 mimo-v2.6-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| prices › 记录 mimo-v2.6-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 当前官方价格表按精确模型 ID 列出该型号；同一市场的官方价格证明其按量供应。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | mimo-v2.6-pro |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › assertion | 新增 | 未记录 | 官方价格文档明确标注国际区计价区域。 |
| 服务线 ID（service_id） › evidence › 记录 xiaomi-api-pricing › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 实时推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | table[3]/row[1] |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 国际区 价格表列出 批量推理的 Token 单价。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | table[3]/row[4] |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xiaomi-api-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| 未分市场 | `xiaomi-api-models` · 小米 MiMo API 模型目录响应 | https://platform.xiaomimimo.com/api/v1/models | 2026-11-05T13:36:19.645Z | 200 | `sha256:eb111affb536fb21ab5c07445aeb8d23a77f88b83ec801ec4ff022c30503fc48` |
| 未分市场 | `xiaomi-model-list-doc` · 小米 MiMo 官方模型目录说明 | https://mimo.mi.com/docs/zh-CN/api/model/list-models | 2026-11-05T04:14:14.859Z | 200 | `sha256:c37a6b810c233a461fa9cc75160ddb853cb4591e9b47df693349639c0b97893d` |
| 未分市场 | `xiaomi-api-pricing` · 小米 MiMo 官方按量 API 定价（国内与海外） | https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go | 2026-11-05T04:14:15.263Z | 200 | `sha256:f5e198a7e387b16b436e8f3403b6ed5428263110615dcbb33f2dae0076fb7988` |
| 未分市场 | `xiaomi-token-plan` · 小米 MiMo Token Plan 套餐、Credits 与额度规则 | https://mimo.mi.com/docs/zh-CN/price/token-plan | 2026-11-05T04:14:15.665Z | 200 | `sha256:426cad17e6beb59f7a95ecc8b410c761cc21300d94c273f5cc95361a15994be5` |
| 未分市场 | `xiaomi-deep-thinking` · 小米 MiMo 深度思考能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/deep-thinking | 2026-11-05T04:14:16.069Z | 200 | `sha256:ca9c223bafa15cc69a066e3a17fe9044ac9b7d4c27ac401c630176765d176f27` |
| 未分市场 | `xiaomi-structured-output` · 小米 MiMo 结构化输出能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/structured-output | 2026-11-05T04:14:15.873Z | 200 | `sha256:fa30735ec6ac7079b4beb5ecf153b17a8866dd11476f7172b1e19c9912c92db3` |
| 未分市场 | `xiaomi-batch-api` · 小米 MiMo Batch API 接口与批量计费 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/batch-api | 2026-11-05T04:14:16.277Z | 200 | `sha256:a45bad02a57d13dd7a17044cb626246fa275c9a3b240eb666bb2c71d9629d211` |
| 未分市场 | `xiaomi-openai-chat` · 小米 MiMo OpenAI Chat Completions API | https://mimo.mi.com/docs/zh-CN/api/chat/openai-api | 2026-11-05T04:14:16.422Z | 200 | `sha256:c37a6b810c233a461fa9cc75160ddb853cb4591e9b47df693349639c0b97893d` |
| 未分市场 | `xiaomi-openai-responses` · 小米 MiMo OpenAI Responses API | https://mimo.mi.com/docs/zh-CN/api/chat/responses | 2026-11-05T04:14:16.770Z | 200 | `sha256:c37a6b810c233a461fa9cc75160ddb853cb4591e9b47df693349639c0b97893d` |
| 未分市场 | `xiaomi-anthropic-messages` · 小米 MiMo Anthropic Messages API | https://mimo.mi.com/docs/zh-CN/api/chat/anthropic-api | 2026-11-05T04:14:16.780Z | 200 | `sha256:c37a6b810c233a461fa9cc75160ddb853cb4591e9b47df693349639c0b97893d` |
| 未分市场 | `xiaomi-web-search` · 小米 MiMo 联网搜索能力说明 | https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/tool-calling/web-search | 2026-11-05T04:14:16.986Z | 200 | `sha256:c6ba8e86784a208586539ec4df9b8c20c714003f86b15ff9dc5d1c06854e5d10` |
| 未分市场 | `xiaomi-asr-api` · 小米 MiMo ASR API | https://mimo.mi.com/docs/zh-CN/api/audio/Speech-Recognition | 2026-11-05T04:14:17.128Z | 200 | `sha256:c37a6b810c233a461fa9cc75160ddb853cb4591e9b47df693349639c0b97893d` |
| 未分市场 | `xiaomi-tts-api` · 小米 MiMo TTS API | https://mimo.mi.com/docs/zh-CN/api/audio/tts | 2026-11-05T04:14:17.484Z | 200 | `sha256:c37a6b810c233a461fa9cc75160ddb853cb4591e9b47df693349639c0b97893d` |
| 未分市场 | `xiaomi-platform-updates` · 小米 MiMo API 平台功能更新 | https://mimo.mi.com/docs/en-US/updates/feature/platform | 2026-11-05T04:14:17.333Z | 200 | `sha256:fa735f7ab45b8b6ec44d6c795964bac9062765ab080122304c5853f0355c1134` |

## xiaomi 专属证据与核对说明

### 小米 MiMo 官方资料 IR 观察候选

- IR 指纹：`sha256:a8176c0dc6d897557d1dd6b86f34c98e7eb05300b6ee3287a8688a5be21c8a8c`
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
