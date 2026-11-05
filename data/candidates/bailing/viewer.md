# bailing 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `bailing` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn |
| 观察时间（UTC） | 2026-11-05T12:30:06.086Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:c22a62f0736e5160ad2f092b3e64c7d39ae800a6863c385ea83cb51955db7d6b` |
| 来源快照 | 12 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 680 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / bailing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • 当前供应 IR 映射官方“当前可用模型”清单、原厂人民币 Token 价格、API 文档明确给出的 Service Endpoint，以及 model Schema 可选值和当前目录精确交集内的模型级 Route。参数/输入输出 Schema、能力与额度仍保留在 Review 或并行旧候选。<br>• ModelScope/第三方市场模型价格已由旧采集器排除，不进入本 Provider IR。 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | bailing |
| source refs | 新增 | 未记录 | • bailing-models<br>• bailing-api-overview<br>• bailing-api-openai<br>• bailing-api-anthropic<br>• bailing-api-asr<br>• bailing-api-tts<br>• bailing-current-models<br>• bailing-pricing<br>• bailing-faq<br>• bailing-structured-output<br>• bailing-multimodal-api<br>• bailing-billing-upgrade |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 bailing-api-anthropic › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-api-anthropic › note | 新增 | 未记录 | 已按官方 model 可选值和当前清单的精确交集映射逐模型 Route；参数/输入输出 Schema 仍未完整映射。 |
| 记录 bailing-api-anthropic › record count | 新增 | 未记录 | 5 |
| 记录 bailing-api-anthropic › record unit | 新增 | 未记录 | Route records |
| 记录 bailing-api-anthropic › scope | 新增 | 未记录 | api |
| 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| 记录 bailing-api-anthropic › 状态（status） | 新增 | 未记录 | partial |
| 记录 bailing-api-asr › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-api-asr › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-api-asr › scope | 新增 | 未记录 | api |
| 记录 bailing-api-asr › source ref | 新增 | 未记录 | bailing-api-asr |
| 记录 bailing-api-asr › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-api-openai › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-api-openai › note | 新增 | 未记录 | 已按官方 model 可选值和当前清单的精确交集映射逐模型 Route；参数/输入输出 Schema 仍未完整映射。 |
| 记录 bailing-api-openai › record count | 新增 | 未记录 | 5 |
| 记录 bailing-api-openai › record unit | 新增 | 未记录 | Route records |
| 记录 bailing-api-openai › scope | 新增 | 未记录 | api |
| 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| 记录 bailing-api-openai › 状态（status） | 新增 | 未记录 | partial |
| 记录 bailing-api-overview › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-api-overview › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-api-overview › scope | 新增 | 未记录 | api |
| 记录 bailing-api-overview › source ref | 新增 | 未记录 | bailing-api-overview |
| 记录 bailing-api-overview › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-api-tts › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-api-tts › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-api-tts › scope | 新增 | 未记录 | api |
| 记录 bailing-api-tts › source ref | 新增 | 未记录 | bailing-api-tts |
| 记录 bailing-api-tts › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-billing-upgrade › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-billing-upgrade › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-billing-upgrade › scope | 新增 | 未记录 | pricing |
| 记录 bailing-billing-upgrade › source ref | 新增 | 未记录 | bailing-billing-upgrade |
| 记录 bailing-billing-upgrade › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-current-models › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-current-models › note | 新增 | 未记录 | 已解析官方“当前可用模型”清单；仅该来源范围可据以形成当前供应观察。 |
| 记录 bailing-current-models › record count | 新增 | 未记录 | 5 |
| 记录 bailing-current-models › record unit | 新增 | 未记录 | unique current model IDs |
| 记录 bailing-current-models › scope | 新增 | 未记录 | model_catalog |
| 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 记录 bailing-current-models › 状态（status） | 新增 | 未记录 | complete |
| 记录 bailing-faq › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-faq › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-faq › scope | 新增 | 未记录 | documentation |
| 记录 bailing-faq › source ref | 新增 | 未记录 | bailing-faq |
| 记录 bailing-faq › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-models › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-models › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-models › scope | 新增 | 未记录 | model_catalog |
| 记录 bailing-models › source ref | 新增 | 未记录 | bailing-models |
| 记录 bailing-models › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-multimodal-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-multimodal-api › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-multimodal-api › scope | 新增 | 未记录 | capability |
| 记录 bailing-multimodal-api › source ref | 新增 | 未记录 | bailing-multimodal-api |
| 记录 bailing-multimodal-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-pricing › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-pricing › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-pricing › scope | 新增 | 未记录 | pricing |
| 记录 bailing-pricing › source ref | 新增 | 未记录 | bailing-pricing |
| 记录 bailing-pricing › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 bailing-structured-output › 市场（market） | 新增 | 未记录 | cn |
| 记录 bailing-structured-output › note | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| 记录 bailing-structured-output › scope | 新增 | 未记录 | capability |
| 记录 bailing-structured-output › source ref | 新增 | 未记录 | bailing-structured-output |
| 记录 bailing-structured-output › 状态（status） | 新增 | 未记录 | not_parsed |

### 文档观察

#### 来源 / bailing-api-anthropic

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • POST https://api.ant-ling.com/anthropic/v1/messages<br>• --url https://api.ant-ling.com/anthropic/v1/messages \<br>• base_url = "https://api.ant-ling.com/anthropic" , |
| capability mentions | 新增 | 未记录 | • 语音<br>• 语音识别<br>• 语音合成<br>• 图像<br>• 图像生成<br>• 图像编辑<br>• 结构化输出<br>• 接入 Ling-3.2-flash 时，原生支持输入文本、图片和视频，具备多模态理解能力。详情请见 多模态理解 。<br>• 说明 ：控制 3.0 系列模型、3.1 系列模型、3.2 系列模型是否开启推理<br>• OpenAI 语音识别 |
| excerpt | 新增 | 未记录 | Anthropic 兼容接口<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>请求地址<br>授权<br>Authorization<br>x-api-key<br>请求头<br>Content-Type<br>请求体<br>概览<br>model<br>messages<br>messages.role<br>messages.content<br>max_tokens<br>stream<br>system<br>tools<br>tool_choice<br>stop_sequences<br>temperature<br>top_p<br>thinking |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ling-3.2-flash<br>• Ling-3.1-flash<br>• Ling-3.0-flash-VL<br>• Ling-3.0-flash<br>• Ling-3.0-tiny<br>• AntAngelMed<br>• Ling-VL<br>• Ming-Image-0.1-Design<br>• Ring-2.6-1T<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | bailing-api-anthropic |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Anthropic 兼容接口 |

#### 来源 / bailing-api-asr

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • POST https://api.ant-ling.com/v1/audio/transcriptions<br>• --url https://api.ant-ling.com/v1/audio/transcriptions \<br>• base_url = "https://api.ant-ling.com/v1" ,<br>• baseURL: 'https://api.ant-ling.com/v1' , |
| capability mentions | 新增 | 未记录 | 列表（27 项）<details><summary>展开完整内容</summary><ul><li>创建语音识别</li><li>语音</li><li>语音识别</li><li>语音合成</li><li>图像</li><li>图像生成</li><li>图像编辑</li><li>结构化输出</li><li>API 参考 语音 语音识别</li><li>使用本接口将音频转录为文本。接口格式与 OpenAI audio/transcriptions 协议兼容。</li><li>POST https://api.ant-ling.com/v1/audio/transcriptions</li><li>说明 ：请求体的媒体类型。音频文件以表单形式上传，必须为 multipart/form-data 。</li><li>file file 是 — 需要转录的音频文件</li><li>language string 否 — 音频中的主要语言提示</li><li>说明 ：需要转录的音频文件。</li><li>规格限制 ：文件大小 ≤ 10 MB 、音频时长 ≤ 30 秒</li><li>说明 ：用于提示音频中的主要语言。不传该参数或传空值时，启用混合语言识别。</li><li>说明 ：在长文本场景中，可以提供之前的转录结果作为上下文，提升转写连贯性。建议小于 60 字。</li><li>以下 OpenAI audio/transcriptions 的属性，当前接口 不支持 ：</li><li>响应对象遵循 OpenAI audio/transcriptions 协议的 Transcription 结构。</li><li>说明 ：消耗的输入 Token 数，包含音频与文本 Token。</li><li>audio_tokens — 音频输入消耗的 Token 数。</li><li>--url https://api.ant-ling.com/v1/audio/transcriptions \</li><li>response = client.audio.transcriptions.create(</li><li>const response = await client.audio.transcriptions. create ({</li><li>"audio_tokens" : 218 ,</li><li>Anthropic 语音合成</li></ul></details> |
| excerpt | 新增 | 未记录 | 创建语音识别<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>请求地址<br>授权<br>Authorization<br>请求头<br>Content-Type<br>请求体<br>概览<br>model<br>file<br>language<br>prompt<br>response_format<br>temperature<br>不支持的属性<br>响应体<br>text<br>usage<br>usage.input_tokens<br>usage.output_tokens<br>usage.total_tokens<br>usage.input_token_details |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ming-3.0-asr-tiny<br>• Ming-Image-0.1-Design<br>• Ring-2.6-1T<br>• Ling-3.0-flash-VL<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | bailing-api-asr |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 创建语音识别 |

#### 来源 / bailing-api-openai

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • POST https://api.ant-ling.com/v1/chat/completions<br>• --url https://api.ant-ling.com/v1/chat/completions \<br>• base_url = "https://api.ant-ling.com/v1/" ,<br>• baseURL: 'https://api.ant-ling.com/v1/' , |
| capability mentions | 新增 | 未记录 | • 语音<br>• 语音识别<br>• 语音合成<br>• 图像<br>• 图像生成<br>• 图像编辑<br>• 结构化输出<br>• 可选值 ： Ling-3.2-flash 、 Ling-3.1-flash 、 Ling-3.0-flash-VL 、 Ling-3.0-flash 、 Ling-3.0-tiny 、 Ming-3.0-audio-flash 、 AntAngelMed<br>• 接入 Ling-3.2-flash 时，原生支持输入文本、图片和视频，具备多模态理解能力。图片使用 image_url 内容块，视频使用 video_url 内容块。详情请见 多模态理解 。<br>• 接入 Ling-3.0-flash-VL 时，支持输入文本、图片和视频。图片使用 image_url 内容块，视频使用 video_url 内容块。详情请见 多模态理解 。<br>• 接入 Ming-3.0-audio-flash 时，支持输入文本和音频，音频使用 audio_url 内容块。详情请见 多模态理解 。<br>• 说明 ：控制 3.0 系列模型、3.1 系列模型、3.2 系列模型是否开启推理 |
| excerpt | 新增 | 未记录 | OpenAI 兼容接口<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>请求地址<br>授权<br>Authorization<br>请求头<br>Content-Type<br>请求体<br>概览<br>model<br>messages<br>messages.role<br>messages.content<br>stream<br>tools<br>temperature<br>top_p<br>enable_search<br>search_options<br>search_options.forced_search<br>thinking<br>thinking.type<br>请求与响应 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ling-3.2-flash<br>• Ling-3.1-flash<br>• Ling-3.0-flash-VL<br>• Ling-3.0-flash<br>• Ling-3.0-tiny<br>• Ming-3.0-audio-flash<br>• AntAngelMed<br>• Ming-Image-0.1-Design<br>• Ring-2.6-1T |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | bailing-api-openai |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | OpenAI 兼容接口 |

#### 来源 / bailing-api-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>语音</li><li>语音识别</li><li>语音合成</li><li>图像</li><li>图像生成</li><li>图像编辑</li><li>结构化输出</li><li>图像生成与编辑</li><li>蚂蚁百灵 API 功能概述，包括对话、思考、语音和图像。</li><li>智能对话 API 推荐使用 Ling-3.2-flash 、 Ling-3.1-flash 、 Ling-3.0-flash-VL 、 Ling-3.0-flash 、 Ling-3.0-tiny 以及 AntAngelMed 来执行对话任务、推理思考，并支持根据上下文触发工具调用。</li><li>Ling-3.2-flash 1M 最新一代原生多模态模型，支持图像、文本与视频输入，重点强化复杂视觉理解、多模态长程 Agent、3D 理解与交互、医疗多模态四大能力。</li><li>Ling-3.1-flash 1M 新一代长流程混合推理模型，专为日常办公、长周期研发与复杂 Agent 任务设计。</li><li>Ling-3.0-flash 256K 新一代高性价比 Agent 模型，成本低、响应快、工具调用稳定。</li><li>图像 API 兼容 OpenAI Image 协议，支持根据文本提示生成图像，以及编辑输入图片和释放图层信息。</li><li>Ming-Image-0.1-Design 文生图、图片编辑 文生图使用 images/generations ，图片编辑使用 images/edits 。</li><li>Ming-Image-0.1-Design-Layer 图层解耦 仅通过 images/edits 解耦输入图片的图层信息。</li><li>通过 OpenAI 兼容接口根据文本提示生成图像。</li><li>图像生成 上传输入图片，完成图片编辑或图层解耦。</li></ul></details> |
| excerpt | 新增 | 未记录 | API 概述<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>准备工作<br>文本对话<br>模型速览<br>查看详情<br>图像生成与编辑<br>模型速览<br>查看详情<br>回到顶部<br>API 参考<br>API 概述<br>蚂蚁百灵 API 功能概述，包括对话、思考、语音和图像。<br>准备工作<br>在根据本文进行 API 调用前，请先前往 API 控制台 创建令牌，详细说明请参见： 完成准备工作 。<br>文本对话<br>智能对话 API 推荐使用 Ling-3.2-flash 、 Ling-3.1-flash 、 Ling-3.0-flash-VL 、 Ling-3.0-flash 、 Ling-3.0-tiny 以及 AntAngelMed 来执行对话任务、推理思考，并支持根据上下文触发工具调用。<br>可以通过 HTTP 请求、OpenAI SDK 或 Anthropic SDK 访问。<br>模型速览<br>型号名称 上下文窗口 描述<br>Ling-3.2-flash 1M 最新一代原生多模态模型，支持图像、文本与视频输入，重点强化复杂视觉理解、多模态长程 Agent、3D 理解与交互、医疗多模态四大能力。<br>Ling-3.1-flash 1M 新一代长流程混合推理模型，专为日常办公、长周期研发与复杂 Agent 任务设计。<br>Ling-3.0-flash 256K 新一代高性价比 Agent 模型，成本低、响应快、工具调用稳定。 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ling-3.2-flash<br>• Ling-3.1-flash<br>• Ling-3.0-flash-VL<br>• Ling-3.0-flash<br>• Ling-3.0-tiny<br>• AntAngelMed<br>• Ming-Image-0.1-Design<br>• Ming-Image-0.1-Design-Layer<br>• Ring-2.6-1T<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | bailing-api-overview |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | API 概述 |

#### 来源 / bailing-api-tts

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • POST https://api.ant-ling.com/v1/audio/speech<br>• --url https://api.ant-ling.com/v1/audio/speech \<br>• base_url = "https://api.ant-ling.com/v1" ,<br>• baseURL: 'https://api.ant-ling.com/v1' , |
| capability mentions | 新增 | 未记录 | 列表（78 项）<details><summary>展开完整内容</summary><ul><li>创建语音合成</li><li>语音</li><li>语音识别</li><li>语音合成</li><li>图像</li><li>图像生成</li><li>图像编辑</li><li>结构化输出</li><li>references[].audio</li><li>speech.audio.delta</li><li>speech.audio.done</li><li>音频二进制流</li><li>API 参考 语音 语音合成</li><li>使用本接口将文本合成为语音。接口格式与 OpenAI audio/speech 协议兼容。</li><li>POST https://api.ant-ling.com/v1/audio/speech</li><li>input string 是 — 要合成语音的文本内容</li><li>voice string 否 — 生成语音时使用的音色</li><li>references object[] 否 — 声音克隆的参考音频</li><li>instructions string 否 — 语音控制指令</li><li>response_format string 否 流式 pcm ，同步 wav 输出音频的格式</li><li>sample_rate number 否 44100 输出音频的采样率，单位为 Hz</li><li>speed number 否 1.0 生成语音的速度</li><li>volume number 否 1.0 生成语音的音量</li><li>pitch number 否 1.0 生成语音的音调</li><li>stream_format string 否 不开启流式 音频数据的流式返回方式</li><li>说明 ：要合成语音的文本内容。最大长度 2048 字符 。不能为 null 或空字符串。</li><li>说明 ：生成语音时使用的音色，支持 系统音色 。如需使用自定义音色克隆，请改用 references 参数。</li><li>说明 ：用于无状态声音克隆的参考音频列表，作为生成语音时使用的自定义音色。当前模型最多支持 1 条，每条最长 10 秒 、不超过 2 MB ，支持格式： WAV 。</li><li>说明 ：语音样本的音频 Base64 编码数据。为获得最佳效果，请使用 6–10 秒清晰、背景噪声尽可能少的语音。支持格式： WAV 。</li><li>将音频文件转换为 Base64 编码字符串后传入，转换后的 Base64 编码字符串大小不能超过 3 MB 。请在 Base64 编码前携带前缀： data:{MIME_TYPE};base64,$BASE64_AUDIO ：</li><li>{MIME_TYPE} — 音频的 MIME 类型（媒体类型），用于标识音频格式，需替换为实际音频对应的 MIME 值，例如 audio/wav 。</li><li>$BASE64_AUDIO — 音频文件的纯 Base64 编码字符串（不含任何前缀）。</li><li>说明 ：音频样本中所说内容的逐字转录文本。音频与该文本的准确性对声音克隆质量非常重要。</li><li>说明 ：生成语音时的语音控制指令，用于音色风格描述。</li><li>说明 ：输出音频的格式。</li><li>说明 ：输出音频的采样率，单位为 Hz。</li><li>说明 ：生成语音的速度。范围 [0.25, 4.0] 。</li><li>说明 ：生成语音的音量。范围 [0.5, 2.0] 。</li><li>说明 ：生成语音的音调。范围 [0.5, 2.0] 。</li><li>说明 ：开启流式返回音频数据，适用于低延迟、边生成边播放的场景。</li><li>sse 以 Server-Sent Events 格式流式返回，音频数据经 Base64 编码后通过 SSE 事件推送</li><li>audio 以 chunked transfer encoding 直接流式返回原始音频二进制数据</li><li>Ming-3.0-tts-0.5B 目前仅支持 sse ，不支持 audio 。</li><li>sse 模式适合浏览器端通过 EventSource 接收，有明确的事件边界和结束信号； audio 模式适合服务端或原生客户端直接消费音频流，开销更低。</li><li>响应类型为 file — 音频二进制内容。HTTP 响应的 Content-Type 根据 response_format 参数变化：</li><li>mp3 audio/mpeg</li><li>opus audio/opus</li><li>aac audio/aac</li><li>wav audio/wav</li><li>pcm audio/pcm</li><li>说明 ：增量音频片段事件。</li><li>data: { "type" : "speech.audio.delta" , "audio" : "//uQxAAAAAANIAAAAAExBTUUzLjEw..." }</li><li>type — 固定值 speech.audio.delta 。</li><li>audio — 一段 Base64 编码的音频数据片段。</li><li>说明 ：音频合成完成的终止事件。</li><li>data: { "type" : "speech.audio.done" , "usage" : { "prompt_tokens" : 12 , "completion_tokens" : 80 , "total_tokens" : 92 }}</li><li>type — 固定值 speech.audio.done 。</li><li>说明 ：响应为原始音频二进制流，通过 HTTP chunked transfer encoding 流式返回。</li><li>--url https://api.ant-ling.com/v1/audio/speech \</li><li>speech = client.audio.speech.create(</li><li>speech.stream_to_file( "/path/to/output.pcm" )</li><li>const response = await client.audio.speech. create ({</li><li>"audio": "data:audio/wav;base64,$BASE64_AUDIO",</li><li>音频二进制流响应</li><li>stream_format 不设置时，默认不开启流式，返回对应格式的音频文件二进制内容。</li><li>Content-Type: audio/wav</li><li>&lt;音频二进制数据&gt;</li><li>stream_format 设置为 sse 时，通过 SSE 事件逐步推送音频数据，响应 Content-Type 为 text/event-stream 。每帧为 data: &lt;json&gt;\n\n ，JSON 内容遵循 TTS Event 结构。</li><li>speech.audio.delta ：包含一段 Base64 编码的音频数据片段，字段名为 audio 。</li><li>speech.audio.done ：音频合成完成（终止事件），包含 usage 统计信息。</li><li>data: {"type": "speech.audio.delta", "audio": "//uQxAAAAAANIAAAAAExBTUUzLjEw..."}</li><li>data: {"type": "speech.audio.delta", "audio": "VVVVVVVVVVVVVVVVVVVVVVVVVVVV..."}</li><li>data: {"type": "speech.audio.done", "usage": {"prompt_tokens": 12, "completion_tokens": 80, "total_tokens": 92}}</li><li>stream_format 设置为 audio 时，返回原始音频二进制流。响应 Content-Type 与 response_format 对应，通过 HTTP chunked transfer encoding 直接流式返回原始音频二进制数据。客户端按 chunk 逐段接收音频二进制流，可直接写入播放器或文件，无需 Base64 解码。数据流结束时连接关闭。</li><li>Content-Type: audio/mpeg</li><li>&lt;音频二进制数据 chunk 1&gt;</li><li>&lt;音频二进制数据 chunk 2&gt;</li><li>语音识别 图像生成</li></ul></details> |
| excerpt | 新增 | 未记录 | 创建语音合成<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>请求地址<br>授权<br>Authorization<br>请求头<br>Content-Type<br>请求体<br>概览<br>model<br>input<br>voice<br>references<br>references[].audio<br>references[].text<br>instructions<br>response_format<br>sample_rate<br>speed<br>volume<br>pitch<br>stream_format<br>响应体 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ming-3.0-tts-0.5B<br>• Ming-3.0-tts<br>• Ming-Image-0.1-Design<br>• Ring-2.6-1T<br>• Ling-3.0-flash-VL<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | • 将音频文件转换为 Base64 编码字符串后传入，转换后的 Base64 编码字符串大小不能超过 3 MB 。请在 Base64 编码前携带前缀： data:{MIME_TYPE};base64,$BASE64_AUDIO ：<br>• $BASE64_AUDIO — 音频文件的纯 Base64 编码字符串（不含任何前缀）。<br>• "audio": "data:audio/wav;base64,$BASE64_AUDIO", |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | bailing-api-tts |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 创建语音合成 |

#### 来源 / bailing-billing-upgrade

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • 语音<br>• 语音识别<br>• 语音合成<br>• 图像<br>• 图像生成<br>• 图像编辑<br>• 结构化输出<br>• 1. 消费记录实时更新<br>• 新平台支持实时计量计费，请求完成后可更快查看消费金额和明细，无需等待延迟出账。<br>• 当模型请求命中缓存时，可按更优惠的规则计价，帮助您降低重复内容的调用成本。实际价格以百灵官方实时公布的模型计价规则为准。 |
| excerpt | 新增 | 未记录 | 百灵计量计费服务升级说明<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>一、本次升级带来了哪些提升<br>1. 消费记录实时更新<br>2. 支持缓存命中优惠计价<br>3. 资金和账单管理更清晰<br>4. 升级后享有专属福利<br>5. 免费权益升级<br>二、不同用户将如何完成升级<br>新用户<br>历史用户，小程序云钱包余额已为 0<br>历史用户，小程序云钱包仍有余额<br>三、小程序云钱包余额如何处理<br>四、请在统一切换前关注新钱包余额<br>五、历史记录和发票在哪里查看<br>六、您需要做什么<br>七、常见问题<br>1. 小程序云钱包余额会转入百灵新钱包吗？<br>2. 升级会清空小程序云钱包余额吗？<br>3. 必须立即申请提现吗？<br>4. 为什么我已经给百灵新钱包充值，还在优先使用小程序云钱包？<br>5. 切换时正在进行的 API 请求会受影响吗？<br>6. 新老平台的历史记录会合并吗？ |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ming-Image-0.1-Design<br>• Ring-2.6-1T<br>• Ling-3.0-flash-VL<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | pricing |
| source ref | 新增 | 未记录 | bailing-billing-upgrade |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 百灵计量计费服务升级说明 |

#### 来源 / bailing-current-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>Ling-2.6-1T</li><li>Ling-3.1-flash</li><li>Ring-2.6-1T</li><li>Ling-2.6-flash</li><li>Ling-1T</li><li>Ring-1T</li><li>Ling-2.5-1T</li><li>Ring-2.5-1T</li><li>Ling-3.2-flash</li><li>Ling-3.0-flash-VL</li><li>Ling-3.0-flash</li><li>Ling-3.0-tiny</li><li>Ming-Image-0.1-Design</li><li>Ming-3.0-audio-flash</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | bailing-current-models |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 下架 |

#### 来源 / bailing-faq

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • 语音<br>• 语音识别<br>• 语音合成<br>• 图像<br>• 图像生成<br>• 图像编辑<br>• 结构化输出 |
| excerpt | 新增 | 未记录 | 常见问题<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>模型相关<br>蚂蚁百灵（Ant Ling）与通义千问有什么区别？<br>哪些模型版本支持 API 调用？<br>各版本支持的上下文长度是多少？<br>API 接入<br>如何通过 API 接入蚂蚁百灵（Ant Ling）？<br>如何获取 API Token？<br>支持哪些协议调用？<br>为什么无法在某些 IDE（如 Trae）使用？<br>当前的 QPS 限制是多少，能否提升？<br>计费与额度<br>计费标准是什么？<br>为什么需要绑定支付宝？<br>我的余额显示还大于 0，为什么模型已经无法调用了？<br>免费额度说明<br>如何寻求企业合作？<br>第三方平台集成<br>有哪些集成示例？<br>回到顶部<br>FAQ<br>常见问题 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ling-3.2-flash<br>• Ling-3.1-flash<br>• Ling-3.0-flash<br>• Ming-Image-0.1-Design<br>• Ring-2.6-1T<br>• Ling-3.0-flash-VL<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | documentation |
| source ref | 新增 | 未记录 | bailing-faq |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 常见问题 |

#### 来源 / bailing-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ming-Image-0.1-Design<br>• Ring-2.6-1T<br>• Ling-3.0-flash-VL<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | bailing-models |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 模型家族 |

#### 来源 / bailing-multimodal-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl --location --request POST 'https://api.ant-ling.com/v1/chat/completions' \<br>• curl --location --request POST 'https://api.ant-ling.com/anthropic/v1/messages' \ |
| capability mentions | 新增 | 未记录 | 列表（50 项）<details><summary>展开完整内容</summary><ul><li>语音</li><li>语音识别</li><li>语音合成</li><li>图像</li><li>图像生成</li><li>图像编辑</li><li>结构化输出</li><li>视频理解</li><li>音频理解</li><li>Ling-3.2-flash 是百灵最新一代原生多模态模型，原生支持文本、图片和视频输入； Ling-3.0-flash-VL 是支持多模态输入的视觉语言模型，能够同时理解文本、图片和视频内容； Ming-3.0-audio-flash 是语音理解模型，与 VL 模型的区别是仅支持语音理解，不支持图片和视频。本文档介绍它们的能力、调用方式与限制。</li><li>OpenAI API 兼容的 Chat Completions 支持在选择 Ling-3.2-flash 时输入文本、图片和视频，原生多模态理解。图片使用 image_url 内容块，视频使用 video_url 内容块。</li><li>OpenAI API 兼容的 Chat Completions 支持在选择 Ling-3.0-flash-VL 时输入文本、图片和视频。图片使用 image_url 内容块，视频使用 video_url 内容块。</li><li>OpenAI API 兼容的 Chat Completions 支持在选择 Ming-3.0-audio-flash 时输入文本、音频。音频使用 audio_url 内容块。</li><li>Anthropic API 兼容的 Messages 支持在选择 Ling-3.2-flash 时输入文本、图片和视频。</li><li>图像大小 ： 单图像素 不超过 16384*784</li><li>请在 Base64 编码前携带前缀： data:{MIME_TYPE};base64,$BASE64_IMAGE</li><li>{MIME_TYPE} ：图像的 MIME 类型（媒体类型），用于标识图像格式，需替换为实际图像对应的 MIME 值。例如 image/jpeg ， image/png 。</li><li>$BASE64_IMAGE ：图像文件的纯 Base64 编码字符串（不含任何前缀）。</li><li>"type": "image_url",</li><li>"image_url": {</li><li>"url": "data:{MIME_TYPE};base64,$BASE64_IMAGE"</li><li>"text": "please describe the content of the image"</li><li>"type": "image",</li><li>"data": "$BASE64_IMAGE"</li><li>messages.content.image_url.detail ：控制图片解析分辨率，推理引擎内置默认值为 default 。</li><li>视频理解模型可以根据您传入的视频进行回答，支持视频 Base64 编码传入方式。</li><li>视频格式：MP4，MOV，WMV。</li><li>视频大小：视频时长不超过 30s 。</li><li>Base64 方式传入：单个视频文件 Base64 编码后的字符串大小不能超过 32 MiB。</li><li>视频数量：限制 1 个视频。</li><li>视频理解的精细度：采样帧率固定 2fps，帧数上限 32 帧。</li><li>"type": "video_url",</li><li>"video_url": {</li><li>"url": "data:{MIME_TYPE};base64,$BASE64_VIDEO"</li><li>音频理解模型可以根据您传入的音频进行回答，支持 Base64 编码传入方式。</li><li>音频格式 ：mp3，wav。</li><li>音频大小 ：单个文件大小不超过 100 MB，音频时长不超过 3600s 。</li><li>Base64 编码传入：单音频 Base64 编码字符串大小不超过 32 MiB。</li><li>音频数量 ：限制 1 个音频。</li><li>将音频文件转换为 Base64 编码字符串后传入。转换后的 Base64 编码的字符串大小不能超过 32 MiB。</li><li>请在 Base64 编码前携带前缀： data:{MIME_TYPE};base64,$BASE64_AUDIO</li><li>{MIME_TYPE} ：音频的 MIME 类型（媒体类型），用于标识音频格式，需替换为实际音频对应的 MIME 值。例如 audio/mpeg ， audio/wav 。</li><li>$BASE64_AUDIO ：音频文件的纯 Base64 编码字符串（不含任何前缀）。</li><li>"model": "Ming-3.0-audio-flash",</li><li>"type": "audio_url",</li><li>"audio_url": {</li><li>"url": "data:{MIME_TYPE};base64,$BASE64_AUDIO"</li><li>"text": "please describe the content of the audio"</li><li>messages.content.input_audio ：音频的 URL 或 Base64 编码的音频数据。</li><li>结构化输出 第三方平台</li></ul></details> |
| excerpt | 新增 | 未记录 | 多模态理解<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>图片理解<br>Base64 编码传入<br>OpenAI Chat Completions API<br>Anthropic Messages API<br>不支持属性<br>OpenAI Chat Completions API<br>视频理解<br>OpenAI Chat Completions API<br>音频理解<br>Base64 编码传入<br>OpenAI Chat Completions API<br>不支持属性<br>OpenAI Chat Completions API<br>回到顶部<br>教程 多模态理解<br>多模态理解<br>Ling-3.2-flash 是百灵最新一代原生多模态模型，原生支持文本、图片和视频输入； Ling-3.0-flash-VL 是支持多模态输入的视觉语言模型，能够同时理解文本、图片和视频内容； Ming-3.0-audio-flash 是语音理解模型，与 VL 模型的区别是仅支持语音理解，不支持图片和视频。本文档介绍它们的能力、调用方式与限制。<br>OpenAI API 兼容的 Chat Completions 支持在选择 Ling-3.2-flash 时输入文本、图片和视频，原生多模态理解。图片使用 image_url 内容块，视频使用 video_url 内容块。<br>OpenAI API 兼容的 Chat Completions 支持在选择 Ling-3.0-flash-VL 时输入文本、图片和视频。图片使用 image_url 内容块，视频使用 video_url 内容块。<br>OpenAI API 兼容的 Chat Completions 支持在选择 Ming-3.0-audio-flash 时输入文本、音频。音频使用 audio_url 内容块。<br>Anthropic API 兼容的 Messages 支持在选择 Ling-3.2-flash 时输入文本、图片和视频。 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ling-3.0-flash-VL<br>• Ming-3.0-audio-flash<br>• Ling-3.2-flash<br>• Ming-Image-0.1-Design<br>• Ring-2.6-1T |
| plan or price mentions | 新增 | 未记录 | • 请在 Base64 编码前携带前缀： data:{MIME_TYPE};base64,$BASE64_IMAGE<br>• $BASE64_IMAGE ：图像文件的纯 Base64 编码字符串（不含任何前缀）。<br>• "url": "data:{MIME_TYPE};base64,$BASE64_IMAGE"<br>• "data": "$BASE64_IMAGE"<br>• "url": "data:{MIME_TYPE};base64,$BASE64_VIDEO"<br>• 请在 Base64 编码前携带前缀： data:{MIME_TYPE};base64,$BASE64_AUDIO<br>• $BASE64_AUDIO ：音频文件的纯 Base64 编码字符串（不含任何前缀）。<br>• "url": "data:{MIME_TYPE};base64,$BASE64_AUDIO" |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | bailing-multimodal-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 多模态理解 |

#### 来源 / bailing-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • 语音<br>• 语音识别<br>• 语音合成<br>• 图像<br>• 图像生成<br>• 图像编辑<br>• 结构化输出<br>• Ling-3.1-flash 2.5 折，Ling-3.0-flash-VL、Ling-3.0-flash 2.8 折，Ming-Image-0.1-Design、Ming-Image-0.1-Design-Layer 3 折 优惠中 ！优惠结束后将逐步恢复原价，请注意您的账户余额。<br>• Ming-Image-0.1-Design 设计图生成 — — ¥0.10 ¥0.03 张 — —<br>• Ming-Image-0.1-Design-Layer 透明图层拆解 — — ¥0.10 ¥0.03 张 — — |
| excerpt | 新增 | 未记录 | 定价<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>模型定价<br>第三方平台<br>OpenRouter<br>ZenMux<br>计费说明<br>账户管理<br>常见问题<br>回到顶部<br>模型家族 定价<br>定价<br>按量计费，根据实际 token 消耗计算费用，无最低消费门槛。<br>限时福利 ：<br>Ling-3.2-flash 上线前 2 周限时免费 ！活动结束后恢复原价，请注意您的账户余额。<br>Ling-3.1-flash 2.5 折，Ling-3.0-flash-VL、Ling-3.0-flash 2.8 折，Ming-Image-0.1-Design、Ming-Image-0.1-Design-Layer 3 折 优惠中 ！优惠结束后将逐步恢复原价，请注意您的账户余额。<br>活动期内，OpenRouter 与 ZenMux 上的同款模型同步优惠中，具体折扣以各平台官方价格为准，活动结束后恢复原价。<br>模型定价<br>以下价格均以人民币（RMB）计价。<br>模型 定位 输入价格 单位 输出价格 单位 缓存读取 单位<br>Ling-3.1-flash 新一代长流程版 ¥2.00 ¥0.50 百万 token ¥6.00 ¥1.50 百万 token ¥0.40 ¥0.10 百万 token<br>Ling-3.0-flash-VL 原生多模态版 ¥0.50 ¥0.14 百万 token ¥1.50 ¥0.42 百万 token ¥0.10 ¥0.028 百万 token<br>Ling-3.0-flash 最新高速执行版 ¥0.50 ¥0.14 百万 token ¥1.50 ¥0.42 百万 token ¥0.10 ¥0.028 百万 token |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ling-3.2-flash<br>• Ling-3.1-flash<br>• Ling-3.0-flash-VL<br>• Ling-3.0-flash<br>• Ming-Image-0.1-Design<br>• Ming-Image-0.1-Design-Layer<br>• Ring-2.6-1T<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | • Ling-3.1-flash 新一代长流程版 ¥2.00 ¥0.50 百万 token ¥6.00 ¥1.50 百万 token ¥0.40 ¥0.10 百万 token<br>• Ling-3.0-flash-VL 原生多模态版 ¥0.50 ¥0.14 百万 token ¥1.50 ¥0.42 百万 token ¥0.10 ¥0.028 百万 token<br>• Ling-3.0-flash 最新高速执行版 ¥0.50 ¥0.14 百万 token ¥1.50 ¥0.42 百万 token ¥0.10 ¥0.028 百万 token<br>• Ming-Image-0.1-Design 设计图生成 — — ¥0.10 ¥0.03 张 — —<br>• Ming-Image-0.1-Design-Layer 透明图层拆解 — — ¥0.10 ¥0.03 张 — —<br>• 以下价格均以美元（USD）计价。<br>• 模型 输入价格（每百万 token） 输出价格（每百万 token） 缓存读取（每百万 token）<br>• Ling-3.1-flash $0.30 $0.075 $0.90 $0.225 $0.06 $0.015<br>• Ling-3.0-flash-VL $0.075 $0.021 $0.22 $0.062 $0.015 $0.0042<br>• Ling-3.0-flash $0.06 $0.0168 $0.18 $0.0504 $0.012 $0.0034 |
| scope | 新增 | 未记录 | pricing |
| source ref | 新增 | 未记录 | bailing-pricing |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 定价 |

#### 来源 / bailing-structured-output

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.ant-ling.com/v1/" ,<br>• baseURL: 'https://api.ant-ling.com/v1/' ,<br>• curl https://api.ant-ling.com/v1/chat/completions \ |
| capability mentions | 新增 | 未记录 | 列表（26 项）<details><summary>展开完整内容</summary><ul><li>结构化输出</li><li>语音</li><li>语音识别</li><li>语音合成</li><li>图像</li><li>图像生成</li><li>图像编辑</li><li>为什么使用结构化输出？</li><li>结构化输出的优势</li><li>4. 多步骤推理结果</li><li>与工具调用的对比</li><li>Q4: 流式输出支持结构化输出吗？</li><li>Q5: 结构化输出会增加延迟吗？</li><li>教程 结构化输出</li><li>结构化输出（Structured Outputs）让模型生成严格符合 JSON Schema 的数据，而非自由文本。这使得输出结果更可控、易于解析，特别适合数据提取、API 响应格式化、配置生成等场景。</li><li>需要结构化数据 ：使用 response_format 指定 JSON Schema</li><li>复杂数据提取 ：配合工具调用（Function Calling）使用</li><li># 结构化输出：直接获得符合 Schema 的数据</li><li>从非结构化文本中提取结构化信息：</li><li>将复杂推理过程分解为结构化步骤：</li><li>特性 结构化输出 工具调用（Function Calling）</li><li>只需要结构化数据 → 使用 结构化输出</li><li>需要调用 API、查询数据库等 → 使用 工具调用</li><li>结构化输出需要额外的验证和约束处理，可能会有轻微延迟增加。建议：</li><li>对于实时性要求高的场景，权衡使用结构化输出的必要性</li><li>流式输出 - 实时获取同步响应</li></ul></details> |
| excerpt | 新增 | 未记录 | 结构化输出<br>Skip to Content<br>文档 博客<br>搜索...<br>⌘ K<br>Command Palette<br>Search for a command to run...<br>English<br>博客 文档<br>English<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>简介<br>入门与准备<br>准备工作<br>快速开始<br>更新日志 百灵计量计费服务升级说明<br>模型家族 Ling<br>Ming<br>定价<br>下架<br>API 参考 对话<br>OpenAI<br>Anthropic<br>语音<br>语音识别<br>语音合成<br>图像<br>图像生成<br>图像编辑<br>API 指引<br>调用限制<br>错误码<br>教程 Prompt<br>采样<br>流式输出<br>结构化输出<br>多模态理解<br>第三方平台 OpenRouter<br>ZenMux<br>集成与接入 OpenClaw<br>Claude Code<br>Kilo Code<br>Hermes Agent<br>FAQ<br>联系我们<br>本页大纲<br>核心概念<br>为什么使用结构化输出？<br>传统方式的痛点<br>结构化输出的优势<br>快速开始<br>基础用法：JSON 对象模式<br>高级用法：JSON Schema 严格模式<br>JSON Schema 详解<br>支持的类型<br>常用约束<br>嵌套结构<br>典型应用场景<br>1. 数据提取与解析<br>2. API 响应格式化<br>3. 配置生成<br>4. 多步骤推理结果<br>与工具调用的对比<br>最佳实践<br>1. 提供清晰的描述<br>2. 合理使用 required<br>3. 使用 enum 限制取值 |
| extraction | 新增 | 未记录 | docs |
| model id mentions | 新增 | 未记录 | • Ling-3.2-flash<br>• Ling-3.0-flash<br>• Ming-Image-0.1-Design<br>• Ring-2.6-1T<br>• Ling-3.0-flash-VL<br>• Ming-3.0-audio-flash |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | bailing-structured-output |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 结构化输出 |

### Provider / bailing

#### 档案

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| profile › aliases › evidence › 记录 bailing-models › assertion | 新增 | 未记录 | 官方开发者文档导航使用 Ant Ling 品牌标识。 |
| profile › aliases › evidence › 记录 bailing-models › source ref | 新增 | 未记录 | bailing-models |
| profile › aliases | 新增 | 未记录 | • Ant Ling |
| profile › docs › evidence › 记录 bailing-api-overview › assertion | 新增 | 未记录 | Provider API 概览文档入口。 |
| profile › docs › evidence › 记录 bailing-api-overview › source ref | 新增 | 未记录 | bailing-api-overview |
| profile › docs › evidence › 记录 bailing-pricing › assertion | 新增 | 未记录 | Provider 按量价格文档入口。 |
| profile › docs › evidence › 记录 bailing-pricing › source ref | 新增 | 未记录 | bailing-pricing |
| profile › docs › overview | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/ |
| profile › docs › 价格信息（pricing） | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/models/price/ |
| profile › 类别（kind） › evidence › 记录 bailing-api-overview › assertion | 新增 | 未记录 | 该官方 API 文档属于同一 Ant Ling 开发者站点。 |
| profile › 类别（kind） › evidence › 记录 bailing-api-overview › source ref | 新增 | 未记录 | bailing-api-overview |
| profile › 类别（kind） › evidence › 记录 bailing-models › assertion | 新增 | 未记录 | Provider 官方开发者文档以 Ant Ling 品牌发布模型目录。 |
| profile › 类别（kind） › evidence › 记录 bailing-models › source ref | 新增 | 未记录 | bailing-models |
| profile › 类别（kind） | 新增 | 未记录 | first_party |
| profile › 名称（name） › evidence › 记录 bailing-models › assertion | 新增 | 未记录 | 蚂蚁百灵官方模型文档的页面描述和关键词明确标识产品名称。 |
| profile › 名称（name） › evidence › 记录 bailing-models › source ref | 新增 | 未记录 | bailing-models |
| profile › 名称（name） | 新增 | 未记录 | 蚂蚁百灵 |

### 待核对项目

#### 项目 / bailing-coverage-01

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-models › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-models › source ref | 新增 | 未记录 | bailing-models |
| ID（id） | 新增 | 未记录 | bailing-coverage-01 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | model_catalog 来源 bailing-models 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-02

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-api-overview › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-api-overview › source ref | 新增 | 未记录 | bailing-api-overview |
| ID（id） | 新增 | 未记录 | bailing-coverage-02 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | api 来源 bailing-api-overview 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-03

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 已按官方 model 可选值和当前清单的精确交集映射逐模型 Route；参数/输入输出 Schema 仍未完整映射。 |
| evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| ID（id） | 新增 | 未记录 | bailing-coverage-03 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | api 来源 bailing-api-openai 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-04

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 已按官方 model 可选值和当前清单的精确交集映射逐模型 Route；参数/输入输出 Schema 仍未完整映射。 |
| evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| ID（id） | 新增 | 未记录 | bailing-coverage-04 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | api 来源 bailing-api-anthropic 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-05

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-api-asr › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-api-asr › source ref | 新增 | 未记录 | bailing-api-asr |
| ID（id） | 新增 | 未记录 | bailing-coverage-05 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | api 来源 bailing-api-asr 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-06

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-api-tts › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-api-tts › source ref | 新增 | 未记录 | bailing-api-tts |
| ID（id） | 新增 | 未记录 | bailing-coverage-06 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | api 来源 bailing-api-tts 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-07

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-pricing › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-pricing › source ref | 新增 | 未记录 | bailing-pricing |
| ID（id） | 新增 | 未记录 | bailing-coverage-07 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | pricing 来源 bailing-pricing 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-08

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-faq › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-faq › source ref | 新增 | 未记录 | bailing-faq |
| ID（id） | 新增 | 未记录 | bailing-coverage-08 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | documentation 来源 bailing-faq 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-09

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-structured-output › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-structured-output › source ref | 新增 | 未记录 | bailing-structured-output |
| ID（id） | 新增 | 未记录 | bailing-coverage-09 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | capability 来源 bailing-structured-output 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-10

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-multimodal-api › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-multimodal-api › source ref | 新增 | 未记录 | bailing-multimodal-api |
| ID（id） | 新增 | 未记录 | bailing-coverage-10 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | capability 来源 bailing-multimodal-api 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-coverage-11

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-billing-upgrade › assertion | 新增 | 未记录 | 原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。 |
| evidence › 记录 bailing-billing-upgrade › source ref | 新增 | 未记录 | bailing-billing-upgrade |
| ID（id） | 新增 | 未记录 | bailing-coverage-11 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | pricing 来源 bailing-billing-upgrade 尚未映射为 IR 领域事实。 |

#### 项目 / bailing-price-catalog-crosscheck

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 当前型号：Ling-3.2-flash、Ling-3.1-flash、Ling-3.0-flash-VL、Ling-3.0-flash、Ling-3.0-tiny |
| evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| evidence › 记录 bailing-pricing › assertion | 新增 | 未记录 | 价格页型号：Ling-3.1-flash、Ling-3.0-flash-VL、Ling-3.0-flash |
| evidence › 记录 bailing-pricing › source ref | 新增 | 未记录 | bailing-pricing |
| ID（id） | 新增 | 未记录 | bailing-price-catalog-crosscheck |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 价格目录与当前 API 型号清单存在差异；逐行核对未映射价格并保留来源证据。 |

### 市场 / cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 能力（capabilities） | 新增 | 未记录 | 空列表 |
| ID（id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 来源登记的市场为 cn。 |
| ID（id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| ID（id） | 新增 | 未记录 | cn |
| 名称（name） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 来源明确登记为中国市场；该名称用于展示对应市场线路。 |
| 名称（name） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 名称（name） | 新增 | 未记录 | 中国市场 |
| plans | 新增 | 未记录 | 空列表 |

#### API endpoint / anthropic-compatible

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 该文档属于蚂蚁百灵中国市场 API。 |
| api region › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| api region | 新增 | 未记录 | 中国 |
| API 地址（base_url） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API 文档示例明确给出 Anthropic Messages 请求地址；Base URL 按该地址的协议前缀登记。 |
| API 地址（base_url） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| API 地址（base_url） | 新增 | 未记录 | https://api.ant-ling.com/anthropic |
| documentation › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API 文档示例明确给出 Anthropic Messages 请求地址；Base URL 按该地址的协议前缀登记。 |
| documentation › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ |
| ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API 文档示例明确给出 Anthropic Messages 请求地址；Base URL 按该地址的协议前缀登记。 |
| ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| ID（id） | 新增 | 未记录 | anthropic-compatible |

#### API endpoint / openai-compatible

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 该文档属于蚂蚁百灵中国市场 API。 |
| api region › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| api region | 新增 | 未记录 | 中国 |
| API 地址（base_url） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API 文档示例明确给出 OpenAI Chat Completions 请求地址；Base URL 按该地址的协议前缀登记。 |
| API 地址（base_url） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| API 地址（base_url） | 新增 | 未记录 | https://api.ant-ling.com/v1 |
| documentation › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API 文档示例明确给出 OpenAI Chat Completions 请求地址；Base URL 按该地址的协议前缀登记。 |
| documentation › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai |
| ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API 文档示例明确给出 OpenAI Chat Completions 请求地址；Base URL 按该地址的协议前缀登记。 |
| ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| ID（id） | 新增 | 未记录 | openai-compatible |

#### Model / Ling-3.0-flash-VL

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单使用精确 API ID 标识模型；在没有独立展示名时沿用该官方标识。 |
| 展示名称（display_name） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 展示名称（display_name） | 新增 | 未记录 | Ling-3.0-flash-VL |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › ID（id） | 新增 | 未记录 | text-generation |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | openai-compatible |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /chat/completions。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • Ling-3.0-flash-VL |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref | 新增 | 未记录 | anthropic-compatible |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /v1/messages。 |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › protocol | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash-VL；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids | 新增 | 未记录 | • Ling-3.0-flash-VL |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | Ling-3.0-flash-VL |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 该型号列于中国市场 API 当前可用清单。 |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / Ling-3.0-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单使用精确 API ID 标识模型；在没有独立展示名时沿用该官方标识。 |
| 展示名称（display_name） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 展示名称（display_name） | 新增 | 未记录 | Ling-3.0-flash |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › ID（id） | 新增 | 未记录 | text-generation |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | openai-compatible |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /chat/completions。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • Ling-3.0-flash |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref | 新增 | 未记录 | anthropic-compatible |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /v1/messages。 |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › protocol | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids | 新增 | 未记录 | • Ling-3.0-flash |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | Ling-3.0-flash |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 该型号列于中国市场 API 当前可用清单。 |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / Ling-3.0-tiny

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单使用精确 API ID 标识模型；在没有独立展示名时沿用该官方标识。 |
| 展示名称（display_name） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 展示名称（display_name） | 新增 | 未记录 | Ling-3.0-tiny |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › ID（id） | 新增 | 未记录 | text-generation |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | openai-compatible |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /chat/completions。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • Ling-3.0-tiny |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref | 新增 | 未记录 | anthropic-compatible |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /v1/messages。 |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › protocol | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.0-tiny；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids | 新增 | 未记录 | • Ling-3.0-tiny |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | Ling-3.0-tiny |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 该型号列于中国市场 API 当前可用清单。 |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / Ling-3.1-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单使用精确 API ID 标识模型；在没有独立展示名时沿用该官方标识。 |
| 展示名称（display_name） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 展示名称（display_name） | 新增 | 未记录 | Ling-3.1-flash |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › ID（id） | 新增 | 未记录 | text-generation |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | openai-compatible |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /chat/completions。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • Ling-3.1-flash |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref | 新增 | 未记录 | anthropic-compatible |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /v1/messages。 |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › protocol | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.1-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids | 新增 | 未记录 | • Ling-3.1-flash |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | Ling-3.1-flash |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 该型号列于中国市场 API 当前可用清单。 |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / Ling-3.2-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单使用精确 API ID 标识模型；在没有独立展示名时沿用该官方标识。 |
| 展示名称（display_name） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 展示名称（display_name） | 新增 | 未记录 | Ling-3.2-flash |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › ID（id） | 新增 | 未记录 | text-generation |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › 类别（kind） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | openai-compatible |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /chat/completions。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 bailing-api-openai › source ref | 新增 | 未记录 | bailing-api-openai |
| operations › 记录 text-generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • Ling-3.2-flash |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › documentation › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › documentation | 新增 | 未记录 | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 该 API 请求示例与登记的同协议 Service Endpoint 一致。 |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › endpoint ref | 新增 | 未记录 | anthropic-compatible |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › ID（id） | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求定义明确使用 POST。 |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › operation kind › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方请求 URL 明确包含路径 /v1/messages。 |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › protocol › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › protocol | 新增 | 未记录 | messages |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › assertion | 新增 | 未记录 | 官方 API Schema 的 model 可选值明确包含 Ling-3.2-flash；仅与当前 API 型号清单精确相交时映射模型级 Route。 |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids › evidence › 记录 bailing-api-anthropic › source ref | 新增 | 未记录 | bailing-api-anthropic |
| operations › 记录 text-generation › routes › 记录 messages › provider model ids | 新增 | 未记录 | • Ling-3.2-flash |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | Ling-3.2-flash |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 该型号列于中国市场 API 当前可用清单。 |
| 服务线 ID（service_id） › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › assertion | 新增 | 未记录 | 官方当前可用模型清单明确列出该 API 型号。 |
| supply observations › 记录 0 › evidence › 记录 bailing-current-models › source ref | 新增 | 未记录 | bailing-current-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `bailing-models` · 蚂蚁百灵 模型家族与选型目录 | https://developer.ant-ling.com/zh-CN/docs/models/ | 2026-11-05T12:29:54.528Z | 200 | `sha256:55e9790564a0b171f17e4236d5aa06aabfee7e02bccbfa503d6f2bd4bd61deaf` |
| cn | `bailing-api-overview` · 蚂蚁百灵 API 概述与 API 模型说明 | https://developer.ant-ling.com/zh-CN/docs/api-reference/ | 2026-11-05T12:29:54.527Z | 200 | `sha256:9c3e934f93f5328d15d2a11052cf351495e896d4b6c7a33b34e9a2487dbf0aa4` |
| cn | `bailing-api-openai` · 蚂蚁百灵 OpenAI 兼容接口与 Chat Completions Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai | 2026-11-05T12:29:57.030Z | 200 | `sha256:4028f70a245b203f3f81c338eedaa8683946145ba5456ec783408e788adc8b9b` |
| cn | `bailing-api-anthropic` · 蚂蚁百灵 Anthropic 兼容接口与 Messages Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/ | 2026-11-05T12:29:56.950Z | 200 | `sha256:712b7eb83eb468634a6176b36979d0835046f3c4c76455bfe6556e56cd6ddd2c` |
| cn | `bailing-api-asr` · 蚂蚁百灵 语音识别 API Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/asr | 2026-11-05T12:29:59.411Z | 200 | `sha256:ac77e7ffefa9a84a712910df8db8177f7235b8f1efa27b7795e70ed6fe93b5da` |
| cn | `bailing-api-tts` · 蚂蚁百灵 语音合成 API Route | https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/tts/ | 2026-11-05T12:29:58.586Z | 200 | `sha256:e30ee4d50d0564ca3721a38e09ca69ea30a4a9af7781872cfd180315ea0b43aa` |
| cn | `bailing-current-models` · 蚂蚁百灵 当前可用模型与下架说明 | https://developer.ant-ling.com/zh-CN/docs/models/deprecation/ | 2026-11-05T12:30:02.155Z | 200 | `sha256:0288c5d4db9d72fdbddb2fa0decdfa530f5aff70f5c0cf5e895fabef906601ad` |
| cn | `bailing-pricing` · 蚂蚁百灵 官方按量定价 | https://developer.ant-ling.com/zh-CN/docs/models/price/ | 2026-11-05T12:30:00.887Z | 200 | `sha256:23e721f988f8b4b83dcc7ab6efe8d8eb68224827664d54c30ad5cc9e22edd54d` |
| cn | `bailing-faq` · 蚂蚁百灵 API 支持模型与计费 FAQ | https://developer.ant-ling.com/zh-CN/docs/faq/ | 2026-11-05T12:30:03.647Z | 200 | `sha256:6070cdbe74633b86fa8d689aa279cc15691f8ff8ce5d0aab461d56a9ded744f1` |
| cn | `bailing-structured-output` · 蚂蚁百灵 结构化输出 API 能力 | https://developer.ant-ling.com/zh-CN/docs/tutorials/structured-outputs/ | 2026-11-05T12:30:03.892Z | 200 | `sha256:86c30895683f73e3f8ec2dd9cdad325c740f19991dd1b2d55ea794a986bc7afb` |
| cn | `bailing-multimodal-api` · 蚂蚁百灵 多模态 API 接入能力 | https://developer.ant-ling.com/zh-CN/docs/tutorials/multimodal-understanding/ | 2026-11-05T12:30:06.086Z | 200 | `sha256:10989346213479001a8e2fd39ba2a34e4bd367e0b9f625c82df9d40de45751ae` |
| cn | `bailing-billing-upgrade` · 蚂蚁百灵 计量计费服务升级与额度说明 | https://developer.ant-ling.com/zh-CN/docs/getting-started/changelog/billing-upgrade/ | 2026-11-05T12:30:04.778Z | 200 | `sha256:d53d1377133a552aff8298cf28affaad0ef443766bdb863558810231c526d2f8` |

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
