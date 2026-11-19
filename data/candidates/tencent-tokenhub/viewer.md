# tencent-tokenhub 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `tencent-tokenhub` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-19T05:01:01.046Z |
| 前一候选指纹 | `sha256:22bdedfb6ef56027198a696d70f29e09f58cf4cf2246a3fdee94f808cb40439f` |
| 本次候选指纹 | `sha256:669e185490781813553f03759d3c57fb840acd037f49ac568b1790e7c0742075` |
| 来源快照 | 29 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 12 项，更新 5 项，缺席待核实 42 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 tencent-model-list › record count | 更新 | 159 | 156 |

### 文档观察

#### 来源 / tencent-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：base_url = "https://tokenhub.tencentmaas.com" , |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：不同模型的默认思考开关和默认推理强度不同。以下默认策略与 深度思考 文档保持一致：<br>hy4 ：默认思考开关为开启，默认推理强度为 high 。<br>hy3 ：默认思考开关为开启，默认推理强度为 high 。<br>deepseek-v4-pro、deepseek-v4-pro-0813 ：默认思考开关为开启，默认推理强度为 high 。<br>deepseek-v4.1-flash、deepseek-v4.1-flash-1017 ：默认思考开关为开启，默认推理强度为 high 。<br>如不希望响应中返回思维链内容，请不要依赖模型默认策略，建议在请求中显式关闭思考。Chat API 使用 reasoning_effort ，Responses API 使用 reasoning.effort 。<br>delta.reasoning_content ：思维链的流式增量文本。开启思维链时可能出现；部分模型默认开启思维链，默认策略请参见上方 思维链默认策略 说明。<br>Responses API 使用 reasoning.effort 控制思维链推理强度；Chat API 对应字段为 reasoning_effort 。可选值包括 none 、 low 、 medium 、 high 。如不希望响应中返回思维链内容，请显式设置 reasoning.effort 为 none 。<br>include: ["reasoning.summary"] 用于请求返回思维链摘要，仅在启用思维链时生效。当 reasoning.effort 为 none 时，即使请求中包含 include: ["reasoning.summary"] ，也不会返回思维链摘要。<br>面向终端用户展示时，建议仅展示最终回答内容和引用来源，不要直接透传思维链相关内容。请按需过滤 output 数组中的 reasoning 类型项，以及流式响应中的 response.reasoning_summary_text.delta 事件。 | 差异项（新增；相同内容已省略）：不同模型的默认思考开关和默认推理强度不同，具体默认策略请参见 深度思考 文档。<br>delta.reasoning_content ：思维链的流式增量文本。开启思维链时可能出现；部分模型默认开启思维链，默认策略请参见 深度思考 文档。<br>联网搜索可与思维链组合使用。如需调整思维链（设置推理强度、关闭思维链、获取思维链摘要等），请参见 深度思考 文档。 |
| excerpt | 更新 | 差异片段（删除 15 项）<details><summary>展开完整差异</summary><ul><li>Responses API、Chat API</li><li>/v1/responses 、 /v1/chat/completions</li><li>Responses API、Chat API</li><li>/v1/responses 、 /v1/chat/completions</li><li>Chat API</li><li>/v1/chat/completions</li><li>Chat API</li><li>/v1/chat/completions</li><li>不同模型的默认思考开关和默认推理强度不同。以下默认策略与 深度思考 文档保持一致：</li><li>hy4 ：默认思考开关为开启，默认推理强度为 high 。</li><li>hy3 ：默认思考开关为开启，默认推理强度为 high 。</li><li>deepseek-v4-pro、deepseek-v4-pro-0813 ：默认思考开关为开启，默认推理强度为 high 。</li><li>deepseek-v4.1-flash、deepseek-v4.1-flash-1017 ：默认思考开关为开启，默认推理强度为 high 。</li><li>如不希望响应中返回思维链内容，请不要依赖模型默认策略，建议在请求中显式关闭思考。Chat API 使用 reasoning_effort ，Responses API 使用 reasoning.effort 。</li><li>联网搜索用于补充模型知识时效性。基础调用参数、鉴权、BaseURL 和通用响应结构请参见 语言模型调用概览 ，本文只说明联网搜索相关差异。完整请求示例请参见 Chat 协议 和 Responses 协议 。</li></ul></details> | 差异片段（新增 15 项）<details><summary>展开完整差异</summary><ul><li>Responses API、Chat API、Message API</li><li>/v1/responses 、 /v1/chat/completions 、 /v1/messages</li><li>Responses API、Chat API、Message API</li><li>/v1/responses 、 /v1/chat/completions 、 /v1/messages</li><li>Chat API、Message API</li><li>/v1/chat/completions 、 /v1/messages</li><li>Chat API、Message API</li><li>/v1/chat/completions 、 /v1/messages</li><li>不同模型的默认思考开关和默认推理强度不同，具体默认策略请参见 深度思考 文档。</li><li>联网搜索用于补充模型知识时效性。基础调用参数、鉴权、BaseURL 和通用响应结构请参见 语言模型调用概览 ，本文只说明联网搜索相关差异。完整请求示例请参见 Chat 协议 、 Responses 协议 和 Message 协议 。</li><li>Chat API</li><li>Responses API</li><li>{</li><li>"web_search_options" : {</li><li>"enable" : true ,</li></ul></details> |

### 待核对项目

#### 项目 / tencent-tokenhub-domain-migration-incomplete

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| message | 更新 | 已将目录中的 159 个调用 ID 映射为 listed_current Offering，并按官方矩阵生成 104 条语言模型 Route，以及 2 条带输入项和响应字段的 Provider 联网搜索协议操作；语言、图像、视频、语音、3D、联网搜索和 Plan 仍有未完成映射，不能据此替换完整 Provider 记录。 | 已将目录中的 156 个调用 ID 映射为 listed_current Offering，并按官方矩阵生成 104 条语言模型 Route，以及 2 条带输入项和响应字段的 Provider 联网搜索协议操作；语言、图像、视频、语音、3D、联网搜索和 Plan 仍有未完成映射，不能据此替换完整 Provider 记录。 |

### 市场 / cn

#### Model / kinfra-text-embedding-0.6b

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 kinfra-text-embedding-0.6b › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kinfra-text-embedding-0.6b › operation ref | 新增 | 未记录 | 未记录 |

#### Model / kinfra-text-embedding-4b

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 kinfra-text-embedding-4b › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kinfra-text-embedding-4b › operation ref | 新增 | 未记录 | 未记录 |

#### Model / kinfra-vl-embedding-2b

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 kinfra-vl-embedding-2b › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kinfra-vl-embedding-2b › operation ref | 新增 | 未记录 | 未记录 |

#### Model / kinfra-vl-embedding-8b

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 kinfra-vl-embedding-8b › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kinfra-vl-embedding-8b › operation ref | 新增 | 未记录 | 未记录 |

#### Model / minimax-video-h3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 minimax-video-h3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 minimax-video-h3 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / miora-3d-1.2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型调用参数和名称来自腾讯云 TokenHub 官方当前模型目录。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 展示名称（display_name） | 缺席待核实 | Miora-3D-1.2 | 未记录 |
| operations | 缺席待核实 | 空列表 | 未记录 |
| prices | 缺席待核实 | 空列表 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型调用参数和名称来自腾讯云 TokenHub 官方当前模型目录。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | miora-3d-1.2 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 来源属于腾讯云 TokenHub 中国市场。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | cn | 未记录 |
| supply observations › 记录 0 › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型列于腾讯云 TokenHub 当前模型目录。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | listed_current | 未记录 |

#### Model / miora-3d-t1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型调用参数和名称来自腾讯云 TokenHub 官方当前模型目录。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 展示名称（display_name） | 缺席待核实 | Miora-3d-T1 | 未记录 |
| operations | 缺席待核实 | 空列表 | 未记录 |
| prices | 缺席待核实 | 空列表 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型调用参数和名称来自腾讯云 TokenHub 官方当前模型目录。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | miora-3d-t1 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 来源属于腾讯云 TokenHub 中国市场。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | cn | 未记录 |
| supply observations › 记录 0 › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型列于腾讯云 TokenHub 当前模型目录。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | listed_current | 未记录 |

#### Model / miora-3d

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型调用参数和名称来自腾讯云 TokenHub 官方当前模型目录。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 展示名称（display_name） | 缺席待核实 | Miora-3D | 未记录 |
| operations | 缺席待核实 | 空列表 | 未记录 |
| prices | 缺席待核实 | 空列表 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型调用参数和名称来自腾讯云 TokenHub 官方当前模型目录。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | miora-3d | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 来源属于腾讯云 TokenHub 中国市场。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | cn | 未记录 |
| supply observations › 记录 0 › evidence › 记录 tencent-model-list › assertion | 缺席待核实 | 模型列于腾讯云 TokenHub 当前模型目录。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 tencent-model-list › source ref | 缺席待核实 | tencent-model-list | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | listed_current | 未记录 |

#### Model / wand-vega-video-1.0-lite

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 wand-vega-video-1.0-lite › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 wand-vega-video-1.0-lite › operation ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `tencent-model-list` · 腾讯云 TokenHub 模型列表 | https://cloud.tencent.com/document/product/1823/130051 | 2026-11-19T05:00:46.545Z | 200 | `sha256:342a136be2c7e72af886f8513442ea7c53dada11d5e79ac386a73d540f0b8d94` |
| cn | `tencent-model-pricing` · 腾讯云 TokenHub 模型价格 | https://cloud.tencent.com/document/product/1823/130055 | 2026-11-19T05:00:46.325Z | 200 | `sha256:4d8800ba57850da8d7c299dcf30be3cfca25abe98edcc7f04949f06d6e70234e` |
| cn | `tencent-api-usage` · 腾讯云 TokenHub API 使用说明 | https://cloud.tencent.com/document/product/1823/130078 | 2026-11-19T05:00:47.536Z | 200 | `sha256:d44491a6643b66cb4c1aa131fad652361a5920bec334f41b4d7171fe6f216435` |
| cn | `tencent-language-api` · 腾讯云 TokenHub 语言模型调用概览 | https://cloud.tencent.com/document/product/1823/130079 | 2026-11-19T05:00:47.602Z | 200 | `sha256:8ef2233d73e5262c632f9077fee53a06effb46aa4eda6c204db272b732425b30` |
| cn | `tencent-vector-api` · 腾讯云 TokenHub 向量模型 API | https://cloud.tencent.com/document/product/1823/133515 | 2026-11-19T05:00:48.895Z | 200 | `sha256:5be495430294c88f61934f738f7718a814d811ecaffcb3cb3ea73a01532cbdfb` |
| cn | `tencent-web-search` · 腾讯云 TokenHub 联网搜索能力 | https://cloud.tencent.com/document/product/1823/132358 | 2026-11-19T05:00:48.858Z | 200 | `sha256:e9a226e90dd2781573117446bc98ad9188e78393d4e790dba5de321f1c806e67` |
| cn | `tencent-api-guide-index` · 腾讯云 TokenHub 调用指南导航 | https://cloud.tencent.com/document/product/1823/130077 | 2026-11-19T05:00:49.683Z | 200 | `sha256:f0226673131003f27bc789ba1714aa177640c398da6656ea6ce4a8bb46246899` |
| cn | `tencent-image-api-index` · 腾讯云 TokenHub 图像生成调用指南导航 | https://cloud.tencent.com/document/product/1823/135743 | 2026-11-19T05:00:49.652Z | 200 | `sha256:92dd21eac39e131f7beb4f477855e8116b6f5d62a7880512806faf7a4f0ebc1e` |
| cn | `tencent-video-api-index` · 腾讯云 TokenHub 视频生成调用指南导航 | https://cloud.tencent.com/document/product/1823/135324 | 2026-11-19T05:00:50.444Z | 200 | `sha256:d8b8c65d6cf1ac89892112d42f5559f7159cd976fd2f87283f55e2096833508b` |
| cn | `tencent-3d-api-index` · 腾讯云 TokenHub 3D 生成调用指南导航 | https://cloud.tencent.com/document/product/1823/136142 | 2026-11-19T05:00:50.442Z | 200 | `sha256:f0010b798478cb8bbbc03ca95cf8ce776ce75c765780d05fd8581c1a8da1f9fa` |
| cn | `tencent-speech-api-index` · 腾讯云 TokenHub 语音模型调用指南导航 | https://cloud.tencent.com/document/product/1823/135321 | 2026-11-19T05:00:51.206Z | 200 | `sha256:7c1464a73344684e3b7c3e031509101fdb7f28ece2edb37d8c3df762cf87b223` |
| cn | `tencent-multimodal-api-index` · 腾讯云 TokenHub 多模态理解调用指南导航 | https://cloud.tencent.com/document/product/1823/130988 | 2026-11-19T05:00:51.202Z | 200 | `sha256:f6a020d71b493cf11bfc0752f085398148fe761d63facaa2e0a90543445b4b7a` |
| cn | `tencent-image-api-overview` · 腾讯云 TokenHub 图像生成模型调用概览 | https://cloud.tencent.com/document/product/1823/135744 | 2026-11-19T05:00:52.205Z | 200 | `sha256:2c1669f0e7efa97f6f623e06e37ad09ff486906a59f7a9b20af7431e92e97dff` |
| cn | `tencent-hy-image-api` · 腾讯云 TokenHub Hy 生图调用指南（系列通用） | https://cloud.tencent.com/document/product/1823/135745 | 2026-11-19T05:00:52.289Z | 200 | `sha256:5c671fd4223f07da6c22a711078a24c28f2c96f5821fb3ab0adbf15be420d260` |
| cn | `tencent-video-api-overview` · 腾讯云 TokenHub 视频生成模型调用概览 | https://cloud.tencent.com/document/product/1823/135738 | 2026-11-19T05:00:53.289Z | 200 | `sha256:45f88d1b5a9959ce05cfefa97ea11c9efdca27bfe826c6d3b1df59ddf5945791` |
| cn | `tencent-world-api-overview` · 腾讯云 TokenHub 世界模型调用概览 | https://cloud.tencent.com/document/product/1823/136579 | 2026-11-19T05:00:53.296Z | 200 | `sha256:0e76941022be21cf1bf25233064386b3804140adbd002b663823c080b433c042` |
| cn | `tencent-speech-api-overview` · 腾讯云 TokenHub 语音模型调用概览 | https://cloud.tencent.com/document/product/1823/138804 | 2026-11-19T05:00:54.305Z | 200 | `sha256:54453354985e23a30f0f9f791361f1c3e50d2beb6a1b141adcef32cab35041b9` |
| cn | `tencent-image-understanding-api` · 腾讯云 TokenHub 图片理解 API 说明 | https://cloud.tencent.com/document/product/1823/136956 | 2026-11-19T05:00:54.299Z | 200 | `sha256:46212e940a537062d961aab222463aa61933cf6bab3ef080f9c837aa094cb0bd` |
| cn | `tencent-video-understanding-api` · 腾讯云 TokenHub 视频理解 API 说明 | https://cloud.tencent.com/document/product/1823/136957 | 2026-11-19T05:00:55.325Z | 200 | `sha256:fd4099454654a01528aea4dff1e5f763c01d4317d926d303b3b343498cdf23fa` |
| cn | `tencent-product-overview` · 腾讯云 TokenHub 产品概述 | https://cloud.tencent.com/document/product/1823/130050 | 2026-11-19T05:00:55.320Z | 200 | `sha256:3963bf46de5bc9d820f0e7cd19a1f12d2fbd567aaa96dbcb48b9f0a79651cfab` |
| cn | `tencent-coding-plan` · 腾讯云 TokenHub Coding Plan 概述 | https://cloud.tencent.com/document/product/1823/130092 | 2026-11-19T05:00:56.375Z | 200 | `sha256:4b8cf85ab942d47ad61ab52071a1834c39019e36876a0b50b95d05430d79f6fa` |
| cn | `tencent-token-plan` · 腾讯云 TokenHub Token Plan 个人版概览 | https://cloud.tencent.com/document/product/1823/130060 | 2026-11-19T05:00:56.340Z | 200 | `sha256:06f50ce30c7a37311b589804cf5fe3533aff9879e05522de1e6eef0ff2a871c4` |
| cn | `tencent-product-dynamics` · 腾讯云 TokenHub 产品动态与新增模型公告 | https://cloud.tencent.com/document/product/1823/130675 | 2026-11-19T05:00:57.316Z | 200 | `sha256:f5068fd763c8908beb6fb6701b9d5c59e8ca42b421fbe4901f4fd0db949f4674` |
| global | `tencent-token-plan-global` · Tencent Cloud Token Plan Overview (Global Personal Edition) | https://www.tencentcloud.com/document/product/1300/81315 | 2026-11-19T05:00:56.990Z | 200 | `sha256:0964f08059bcb4e53a3b29a3ff4d001c15994f95fff4143f2863d37de661ba05` |
| global | `tencent-global-product-overview` · Tencent Cloud TokenHub Product Overview (Global) | https://intl.cloud.tencent.com/document/product/1300/78933 | 2026-11-19T05:00:58.375Z | 200 | `sha256:4797719de0b50066ec469843ef8a84eac1622e46553e97f7d0685160bdfcbb93` |
| global | `tencent-global-model-list` · Tencent Cloud TokenHub Model List (Global) | https://intl.cloud.tencent.com/document/product/1300/78934 | 2026-11-19T05:00:58.955Z | 200 | `sha256:14f96bb93b389000b9c8d41ed0ba14cdc6337380deba38d886d3d5b502f81d64` |
| global | `tencent-global-model-pricing` · Tencent Cloud TokenHub Model Pricing (Global) | https://intl.cloud.tencent.com/document/product/1300/78937 | 2026-11-19T05:01:00.218Z | 200 | `sha256:aa8ad16534c991375283129d93be78b715391845e0cb249ffa27631a95d9ef5e` |
| global | `tencent-global-api-usage` · Tencent Cloud TokenHub API Usage Instructions (Global) | https://intl.cloud.tencent.com/document/product/1300/78941 | 2026-11-19T05:00:59.796Z | 200 | `sha256:f27d0d1f46da288de10d38184c429be6d36ed348d9cdabec4ab2831cc4eb85a2` |
| global | `tencent-global-language-api` · Tencent Cloud TokenHub Language Model API Overview (Global) | https://intl.cloud.tencent.com/document/product/1300/80632 | 2026-11-19T05:01:01.046Z | 200 | `sha256:06dec2aef3072932464256cbdbfaa964adcf45fe036dba20d5907d699295459e` |

## tencent-tokenhub 专属证据与核对说明

#### IR 覆盖摘要

本候选包含 156 个精确匹配的向量模型，其中 6 个有可结构化价格。模型目录、维度、向量 Route 与价格均保留字段级来源。

语言、图像、视频、语音、3D、联网搜索及订阅 Plan 目前仅保留来源观察，尚未完成领域字段映射；此候选不用于更新正式 Provider 数据。
