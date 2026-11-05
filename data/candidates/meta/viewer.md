# meta 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `meta` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-05T08:15:26.496Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:96f2d2d56464812e3fe8d2c7d7d5b04afc320d2a7d242ab784a81c6f09c0945b` |
| 来源快照 | 18 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 2491 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / meta

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • 官方通用 Models 页面区分 Model API、Muse Code 与开放权重范围；团队实时授权目录由需 Key 的 models.list 返回，本采集器不请求该接口。<br>• Muse Code 订阅与 Model API 按量计费是不同计划；订阅页的权益不等于公开 API 按量价格，计划价格/地区资格需独立核验。<br>• Llama/Muse Spark Open 开放权重模型不是 Meta 托管推理 API；第三方托管商的 API、路线与价格不归入 Meta Model API。<br>• 对消费数据的使用选项可能造成同一系列不同 Offering/费率，需要保留差异，不能按名称去重合并。<br>• 公开通用页面未逐项披露全部 API 路由、能力参数和逐模型限制；需从通用参考逐字段补充，不能用专属页面补洞。<br>• Llama、Muse Spark Open、Muse Glimmer 等自托管开放权重及第三方托管服务不作为 Meta Model API 当前供应。 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | meta |
| source refs | 新增 | 未记录 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>meta-models</li><li>meta-pricing</li><li>meta-subscriptions</li><li>meta-models-list</li><li>meta-api-reference</li><li>meta-files-upload-api</li><li>meta-files-list-api</li><li>meta-files-retrieve-api</li><li>meta-files-content-api</li><li>meta-files-delete-api</li><li>meta-files-schemas</li><li>meta-protocols</li><li>meta-search-grounding</li><li>meta-image-create-api</li><li>meta-image-edit-api</li><li>meta-image-schemas</li><li>meta-voice-transcribe-api</li><li>meta-voice-realtime-api</li></ul></details> |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 meta-api-reference › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-api-reference › note | 新增 | 未记录 | 已映射官方 Base URL、通用文本协议、文件管理、图片生成/编辑端点及语音文件/实时端点；SAM 分割、状态 API、Responses 图像工具模式和通用请求 Schema 仍待核对。 |
| 记录 meta-api-reference › record count | 新增 | 未记录 | 20 |
| 记录 meta-api-reference › record unit | 新增 | 未记录 | Route records |
| 记录 meta-api-reference › scope | 新增 | 未记录 | api |
| 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 记录 meta-api-reference › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-files-content-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-files-content-api › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 meta-files-content-api › scope | 新增 | 未记录 | api |
| 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| 记录 meta-files-content-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-files-delete-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-files-delete-api › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 meta-files-delete-api › scope | 新增 | 未记录 | api |
| 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| 记录 meta-files-delete-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-files-list-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-files-list-api › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 meta-files-list-api › scope | 新增 | 未记录 | api |
| 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| 记录 meta-files-list-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-files-retrieve-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-files-retrieve-api › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 meta-files-retrieve-api › scope | 新增 | 未记录 | api |
| 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| 记录 meta-files-retrieve-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-files-schemas › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-files-schemas › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 meta-files-schemas › scope | 新增 | 未记录 | api |
| 记录 meta-files-schemas › source ref | 新增 | 未记录 | meta-files-schemas |
| 记录 meta-files-schemas › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-files-upload-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-files-upload-api › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 meta-files-upload-api › scope | 新增 | 未记录 | api |
| 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| 记录 meta-files-upload-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-image-create-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-image-create-api › note | 新增 | 未记录 | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |
| 记录 meta-image-create-api › record count | 新增 | 未记录 | 1 |
| 记录 meta-image-create-api › record unit | 新增 | 未记录 | Route records |
| 记录 meta-image-create-api › scope | 新增 | 未记录 | api |
| 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| 记录 meta-image-create-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-image-edit-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-image-edit-api › note | 新增 | 未记录 | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |
| 记录 meta-image-edit-api › record count | 新增 | 未记录 | 1 |
| 记录 meta-image-edit-api › record unit | 新增 | 未记录 | Route records |
| 记录 meta-image-edit-api › scope | 新增 | 未记录 | api |
| 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| 记录 meta-image-edit-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-image-schemas › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-image-schemas › note | 新增 | 未记录 | 已采纳来源说明的图片请求字段、范围与响应形式；官方 Schema 更新仍需持续复核。 |
| 记录 meta-image-schemas › record count | 新增 | 未记录 | 1 |
| 记录 meta-image-schemas › record unit | 新增 | 未记录 | image schema groups |
| 记录 meta-image-schemas › scope | 新增 | 未记录 | api |
| 记录 meta-image-schemas › source ref | 新增 | 未记录 | meta-image-schemas |
| 记录 meta-image-schemas › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-models-list › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-models-list › note | 新增 | 未记录 | models.list 只返回认证账号可见型号；本采集不使用 API Key，因此不把匿名文档观察当作完整账号目录。 |
| 记录 meta-models-list › record count | 新增 | 未记录 | 0 |
| 记录 meta-models-list › record unit | 新增 | 未记录 | account-scoped model catalog records |
| 记录 meta-models-list › scope | 新增 | 未记录 | api |
| 记录 meta-models-list › source ref | 新增 | 未记录 | meta-models-list |
| 记录 meta-models-list › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-models › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-models › note | 新增 | 未记录 | 已将公开目录中明确标记可用于 Model API 的型号和单独列出的 Model ID 记录为当前供应；账号级 models.list 目录不在本次匿名采集范围内。 |
| 记录 meta-models › record count | 新增 | 未记录 | 9 |
| 记录 meta-models › record unit | 新增 | 未记录 | current Offering records |
| 记录 meta-models › scope | 新增 | 未记录 | model_catalog |
| 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 记录 meta-models › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-pricing › note | 新增 | 未记录 | 已映射公开页面可按章节唯一关联到当前 Model API 型号的价格；Muse Code 订阅计划和未解析费率仍未投影。 |
| 记录 meta-pricing › record count | 新增 | 未记录 | 10 |
| 记录 meta-pricing › record unit | 新增 | 未记录 | Offering PriceFact records |
| 记录 meta-pricing › scope | 新增 | 未记录 | pricing |
| 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| 记录 meta-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-protocols › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-protocols › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 meta-protocols › scope | 新增 | 未记录 | api |
| 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| 记录 meta-protocols › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-search-grounding › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-search-grounding › note | 新增 | 未记录 | 只映射官方示例明确指定的型号及 Responses 路由；其他型号、Messages 变体及搜索费用待进一步映射。 |
| 记录 meta-search-grounding › record count | 新增 | 未记录 | 1 |
| 记录 meta-search-grounding › record unit | 新增 | 未记录 | recognized search-enabled example models |
| 记录 meta-search-grounding › scope | 新增 | 未记录 | capability |
| 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| 记录 meta-search-grounding › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-subscriptions › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-subscriptions › note | 新增 | 未记录 | 已收录 Muse Code 订阅说明，但未发现可核实的公开固定价格；不从权益描述推导 PlanFact。 |
| 记录 meta-subscriptions › record count | 新增 | 未记录 | 0 |
| 记录 meta-subscriptions › record unit | 新增 | 未记录 | PlanFact records |
| 记录 meta-subscriptions › scope | 新增 | 未记录 | plan |
| 记录 meta-subscriptions › source ref | 新增 | 未记录 | meta-subscriptions |
| 记录 meta-subscriptions › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 meta-voice-realtime-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-voice-realtime-api › note | 新增 | 未记录 | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |
| 记录 meta-voice-realtime-api › record count | 新增 | 未记录 | 1 |
| 记录 meta-voice-realtime-api › record unit | 新增 | 未记录 | Route records |
| 记录 meta-voice-realtime-api › scope | 新增 | 未记录 | api |
| 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| 记录 meta-voice-realtime-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 meta-voice-transcribe-api › 市场（market） | 新增 | 未记录 | global |
| 记录 meta-voice-transcribe-api › note | 新增 | 未记录 | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |
| 记录 meta-voice-transcribe-api › record count | 新增 | 未记录 | 1 |
| 记录 meta-voice-transcribe-api › record unit | 新增 | 未记录 | Route records |
| 记录 meta-voice-transcribe-api › scope | 新增 | 未记录 | api |
| 记录 meta-voice-transcribe-api › source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| 记录 meta-voice-transcribe-api › 状态（status） | 新增 | 未记录 | partial |

### 文档观察

#### 来源 / meta-api-reference

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • Meta Model API is an HTTP API served at https://api.meta.ai/v1 and authenticated with a bearer token. This reference documents each resource's request and response schema. For a task-oriented introduction, start with the Quickstart ; to choose a request format, see Choosing an API .<br>• Base URL https://api.meta.ai/v1<br>• Responses : POST /v1/responses and related endpoints — server-managed, agentic generation with reasoning replay. OpenAI-compatible.<br>• Chat completions : POST /v1/chat/completions — the OpenAI-compatible messages-array endpoint.<br>• Messages : POST /v1/messages — the Anthropic Messages-compatible endpoint.<br>• Files : POST /v1/files (upload), GET /v1/files (list), GET / DELETE /v1/files/{file_id} (retrieve/delete a single file) — upload and manage files referenced in requests.<br>• Models : GET /v1/models — list available models and retrieve model details.<br>• Status : GET /v1/status — unauthenticated service-health endpoint. |
| capability mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Responses : POST /v1/responses and related endpoints — server-managed, agentic generation with reasoning replay. OpenAI-compatible.</li></ul></details> |
| excerpt | 新增 | 未记录 | API reference — Meta Model API - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • Auth header Authorization: Bearer $MODEL_API_KEY |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-api-reference |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Base URL and authentication › headers | 新增 | 未记录 | • Base URL<br>• https://api.meta.ai/v1 |
| tables › 记录 Base URL and authentication › heading | 新增 | 未记录 | Base URL and authentication |
| tables › 记录 Base URL and authentication › rows › 记录 Auth header | 新增 | 未记录 | • Auth header<br>• Authorization: Bearer $MODEL_API_KEY |
| tables › 记录 Base URL and authentication › rows › 记录 Env var | 新增 | 未记录 | • Env var<br>• MODEL_API_KEY |
| title | 新增 | 未记录 | API reference — Meta Model API - Meta Model API |

#### 来源 / meta-files-content-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl -X GET "https://api.meta.ai/v1/files/file_abc123/content" \ |
| capability mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li></ul></details> |
| excerpt | 新增 | 未记录 | Retrieve file content - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $MODEL_API_KEY" |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-files-content-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Path parameters › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Path parameters › heading | 新增 | 未记录 | Path parameters |
| tables › 记录 Path parameters › rows › 记录 file_id | 新增 | 未记录 | • file_id<br>• string<br>• Yes<br>• Identifier of the file to act on. |
| title | 新增 | 未记录 | Retrieve file content - Meta Model API |

#### 来源 / meta-files-delete-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.meta.ai/v1" ,<br>• "https://api.meta.ai/v1/files/file_abc123" ,<br>• curl -X DELETE "https://api.meta.ai/v1/files/file_abc123" \ |
| capability mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li></ul></details> |
| excerpt | 新增 | 未记录 | Delete a file - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $MODEL_API_KEY" |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-files-delete-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Path parameters › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Path parameters › heading | 新增 | 未记录 | Path parameters |
| tables › 记录 Path parameters › rows › 记录 file_id | 新增 | 未记录 | • file_id<br>• string<br>• Yes<br>• Identifier of the file to act on. |
| title | 新增 | 未记录 | Delete a file - Meta Model API |

#### 来源 / meta-files-list-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.meta.ai/v1" ,<br>• "https://api.meta.ai/v1/files" ,<br>• curl -X GET "https://api.meta.ai/v1/files" \ |
| capability mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li></ul></details> |
| excerpt | 新增 | 未记录 | List files - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $MODEL_API_KEY" |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-files-list-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Query parameters › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Query parameters › heading | 新增 | 未记录 | Query parameters |
| tables › 记录 Query parameters › rows › 记录 after | 新增 | 未记录 | • after<br>• string<br>• No<br>• A cursor for use in pagination. after is a file ID that defines your place in the list. |
| tables › 记录 Query parameters › rows › 记录 limit | 新增 | 未记录 | • limit<br>• integer<br>• No<br>• Maximum number of files to return, from 1 to 10,000. Defaults to 10,000. |
| tables › 记录 Query parameters › rows › 记录 order | 新增 | 未记录 | • order<br>• enum ('asc', 'desc')<br>• No<br>• Sort direction: asc for oldest first, desc for newest first. Files are ordered by when each was added, which can differ from created_at , so neighboring created_at values are not always in order. |
| tables › 记录 Query parameters › rows › 记录 purpose | 新增 | 未记录 | • purpose<br>• string<br>• No<br>• Return only files with this purpose. |
| title | 新增 | 未记录 | List files - Meta Model API |

#### 来源 / meta-files-retrieve-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.meta.ai/v1" ,<br>• "https://api.meta.ai/v1/files/file_abc123" ,<br>• curl -X GET "https://api.meta.ai/v1/files/file_abc123" \ |
| capability mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li></ul></details> |
| excerpt | 新增 | 未记录 | Retrieve a file - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $MODEL_API_KEY" |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-files-retrieve-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Path parameters › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Path parameters › heading | 新增 | 未记录 | Path parameters |
| tables › 记录 Path parameters › rows › 记录 file_id | 新增 | 未记录 | • file_id<br>• string<br>• Yes<br>• Identifier of the file to act on. |
| title | 新增 | 未记录 | Retrieve a file - Meta Model API |

#### 来源 / meta-files-schemas

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>purpose enum ('user_data', 'batch') Yes The intended purpose of the uploaded file. Use user_data for files that requests reference, such as images and videos, and batch for Batch input files. OpenAI purposes that this endpoint does not serve, such as fine-tune and evals , are rejected with a 400 error.</li></ul></details> |
| excerpt | 新增 | 未记录 | Files schemas - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-files-schemas |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Create File Request › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Create File Request › heading | 新增 | 未记录 | Create File Request |
| tables › 记录 Create File Request › rows › 记录 expires_after | 新增 | 未记录 | • expires_after<br>• FileExpiresAfter<br>• No<br>• Optional expiration policy, measured from file creation. |
| tables › 记录 Create File Request › rows › 记录 file | 新增 | 未记录 | • file<br>• string (binary)<br>• Yes<br>• The file to upload. |
| tables › 记录 Create File Request › rows › 记录 purpose | 新增 | 未记录 | • purpose<br>• enum ('user_data', 'batch')<br>• Yes<br>• The intended purpose of the uploaded file. Use user_data for files that requests reference, such as images and videos, and batch for Batch input files. OpenAI purposes that this endpoint does not serve, such as fine-tune and evals , are rejected with a 400 error. |
| tables › 记录 Delete File Response › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Delete File Response › heading | 新增 | 未记录 | Delete File Response |
| tables › 记录 Delete File Response › rows › 记录 deleted | 新增 | 未记录 | • deleted<br>• boolean<br>• Yes<br>• 空字符串 |
| tables › 记录 Delete File Response › rows › 记录 id | 新增 | 未记录 | • id<br>• string<br>• Yes<br>• 空字符串 |
| tables › 记录 Delete File Response › rows › 记录 object | 新增 | 未记录 | • object<br>• enum ('file')<br>• Yes<br>• 空字符串 |
| tables › 记录 File Expires After › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 File Expires After › heading | 新增 | 未记录 | File Expires After |
| tables › 记录 File Expires After › rows › 记录 anchor | 新增 | 未记录 | • anchor<br>• enum ('created_at')<br>• Yes<br>• The timestamp anchor for the expiration policy. |
| tables › 记录 File Expires After › rows › 记录 seconds | 新增 | 未记录 | • seconds<br>• integer (int64)<br>• Yes<br>• The number of seconds after the anchor time when the file expires. (minimum: 3600, maximum: 2592000) |
| tables › 记录 File Object › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 File Object › heading | 新增 | 未记录 | File Object |
| tables › 记录 File Object › rows › 记录 bytes | 新增 | 未记录 | • bytes<br>• integer (int64)<br>• Yes<br>• Size of the file in bytes. |
| tables › 记录 File Object › rows › 记录 created_at | 新增 | 未记录 | • created_at<br>• integer (int64)<br>• Yes<br>• Unix timestamp (seconds) for when the file was created. |
| tables › 记录 File Object › rows › 记录 expires_at | 新增 | 未记录 | • expires_at<br>• integer (int64) &#124; null<br>• Yes<br>• Unix timestamp (seconds) at which the file expires. An explicit policy uses created_at + expires_after.seconds . Non-expiring files return null rather than omitting this field. |
| tables › 记录 File Object › rows › 记录 filename | 新增 | 未记录 | • filename<br>• string<br>• Yes<br>• Name of the file. |
| tables › 记录 File Object › rows › 记录 id | 新增 | 未记录 | • id<br>• string<br>• Yes<br>• Identifier for the file. Format is file-&lt;numeric&gt; . |
| tables › 记录 File Object › rows › 记录 object | 新增 | 未记录 | • object<br>• enum ('file')<br>• Yes<br>• Object type; always file . |
| tables › 记录 File Object › rows › 记录 purpose | 新增 | 未记录 | • purpose<br>• enum ('batch', 'fine-tune', 'evals', 'user_data')<br>• Yes<br>• The intended purpose of the file. |
| tables › 记录 File Object › rows › 记录 status | 新增 | 未记录 | • status<br>• enum ('uploaded', 'processed', 'error')<br>• Yes<br>• Deprecated. The current status of the file, which can be either uploaded , processed , or error . |
| tables › 记录 File Object › rows › 记录 status_details | 新增 | 未记录 | • status_details<br>• string<br>• No<br>• Deprecated. Details about why the file failed validation. |
| tables › 记录 List Files Response › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 List Files Response › heading | 新增 | 未记录 | List Files Response |
| tables › 记录 List Files Response › rows › 记录 data | 新增 | 未记录 | • data<br>• array of FileObject<br>• Yes<br>• 空字符串 |
| tables › 记录 List Files Response › rows › 记录 first_id | 新增 | 未记录 | • first_id<br>• string<br>• Yes<br>• 空字符串 |
| tables › 记录 List Files Response › rows › 记录 has_more | 新增 | 未记录 | • has_more<br>• boolean<br>• Yes<br>• 空字符串 |
| tables › 记录 List Files Response › rows › 记录 last_id | 新增 | 未记录 | • last_id<br>• string<br>• Yes<br>• 空字符串 |
| tables › 记录 List Files Response › rows › 记录 object | 新增 | 未记录 | • object<br>• enum ('list')<br>• Yes<br>• 空字符串 |
| title | 新增 | 未记录 | Files schemas - Meta Model API |

#### 来源 / meta-files-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.meta.ai/v1" ,<br>• "https://api.meta.ai/v1/files" ,<br>• curl -X POST "https://api.meta.ai/v1/files" \ |
| capability mentions | 新增 | 未记录 | 列表（17 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>with open ( "/path/to/image.png" , "rb" ) as f :</li><li>-F "file=@/path/to/image.png"</li></ul></details> |
| excerpt | 新增 | 未记录 | Upload a file - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • with open ( "/path/to/image.png" , "rb" ) as f :<br>• -H "Authorization: Bearer $MODEL_API_KEY" \<br>• -F "file=@/path/to/image.png" |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-files-upload-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Upload a file - Meta Model API |

#### 来源 / meta-image-create-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.meta.ai/v1" ,<br>• "https://api.meta.ai/v1/images/generations" ,<br>• curl -X POST "https://api.meta.ai/v1/images/generations" \ |
| capability mentions | 新增 | 未记录 | 列表（27 项）<details><summary>展开完整内容</summary><ul><li>Generate an image - Meta Model API</li><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Generate one or more images from a text prompt.</li><li>POST /images/generations</li><li>CreateImageRequest</li><li>ImagesResponse</li><li>ImageGenStreamEvent</li><li>response = client . images . generate (</li><li>model = "muse-image-1.0" ,</li><li>"https://api.meta.ai/v1/images/generations" ,</li><li>"model" : "muse-image-1.0" ,</li><li>curl -X POST "https://api.meta.ai/v1/images/generations" \</li><li>For prompts, sizing, and worked examples, see the Image generation feature page.</li></ul></details> |
| excerpt | 新增 | 未记录 | Generate an image - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-image-1.0</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • POST /images/generations<br>• "https://api.meta.ai/v1/images/generations" ,<br>• curl -X POST "https://api.meta.ai/v1/images/generations" \<br>• -H "Authorization: Bearer $MODEL_API_KEY" \ |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-image-create-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Generate an image - Meta Model API |

#### 来源 / meta-image-edit-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • "https://api.meta.ai/v1/images/edits" ,<br>• curl -X POST "https://api.meta.ai/v1/images/edits" \ |
| capability mentions | 新增 | 未记录 | 列表（31 项）<details><summary>展开完整内容</summary><ul><li>Edit an image - Meta Model API</li><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Edit, transform, or compose one or more input images, guided by a text prompt.</li><li>With the OpenAI SDK, upload the input image(s) as multipart/form-data — client.images.edit(image=..., prompt=..., model=...) , passing a list of files to compose several inputs. Over raw HTTP you can instead send a JSON body with an images array of image_url / file_id items (shown below); the OpenAI SDK does not send this JSON shape.</li><li>POST /images/edits</li><li>Edit one or more input images from a text prompt.</li><li>EditImageBodyJsonParam</li><li>CreateImageEditRequest</li><li>ImagesResponse</li><li>ImageEditStreamEvent</li><li>"https://api.meta.ai/v1/images/edits" ,</li><li>"model" : "muse-image-1.0" ,</li><li>"images" : [</li><li>"image_url" : "data:image/webp;base64,UklGR..." ,</li><li>curl -X POST "https://api.meta.ai/v1/images/edits" \</li><li>"image_url" : "data:image/webp;base64,UklGR..."</li><li>For reference images, multi-image composition, and worked examples, see the Image generation feature page.</li></ul></details> |
| excerpt | 新增 | 未记录 | Edit an image - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-image-1.0</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • POST /images/edits<br>• "https://api.meta.ai/v1/images/edits" ,<br>• curl -X POST "https://api.meta.ai/v1/images/edits" \<br>• -H "Authorization: Bearer $MODEL_API_KEY" \ |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-image-edit-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Edit an image - Meta Model API |

#### 来源 / meta-image-schemas

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（91 项）<details><summary>展开完整内容</summary><ul><li>Images schemas - Meta Model API</li><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Images schemas</li><li>The full schema and model definitions referenced by the Images endpoints. Each endpoint page links here for the detailed shape of its request and response objects.</li><li>Create Image Edit Request</li><li>image string (binary) No Image to edit. PNG format.</li><li>n integer No Number of edited images to generate. Range: 1-10. Defaults to 1. (minimum: 1, maximum: 10, default: 1)</li><li>size string No Requested image shape as width x height (e.g., '1024x1024'). The values set the aspect ratio; the image is produced at the generator's own resolution, so the returned pixel dimensions will not necessarily match the numbers supplied.</li><li>response_format enum ('url', 'b64_json') No Format for the edited images. One of url or b64_json . Default: b64_json . (default: b64_json)</li><li>reasoning_strength enum ('low', 'high') No How much reasoning the image generator applies before producing the edited image. One of low or high . low returns after a single generation pass (no self-refinement); high (the default) lets the generator iteratively refine. (default: high)</li><li>partial_images integer No Number of partial images to generate during streaming. Range: 0-3. Accepted but ignored. (minimum: 0, maximum: 3, default: 0)</li><li>tool_enablement ImageToolEnablement No Per-tool controls for the image generator's planner. Omit to keep the default (all tools available).</li><li>Create Image Request</li><li>model string Yes Model ID for image generation.</li><li>prompt string Yes Text description of the images to generate.</li><li>n integer No Number of images to generate. Range: 1-10. Defaults to 1. (minimum: 1, maximum: 10, default: 1)</li><li>size string No Requested image shape as width x height (e.g., '1024x1024'). The value is converted into an aspect ratio only; the image is produced at the generator's own fixed output resolution, so the returned pixel dimensions stay constant regardless of the numbers supplied — only the aspect ratio changes.</li><li>response_format enum ('url', 'b64_json') No Format for returned images. One of: url , b64_json . Defaults to b64_json . (default: b64_json)</li><li>output_format string No Requested file type for the generated images. One of png , jpeg , or webp . Defaults to webp when omitted; any other value is rejected.</li><li>reasoning_strength enum ('low', 'high') No How much reasoning the image generator applies before producing the image. One of low or high . low returns after a single generation pass (no self-refinement); high (the default) lets the generator iteratively refine. (default: high)</li><li>temperature number No Sampling temperature for the model's planning step (prompt writing and refinement), between 0 and 2. It does not change how the image itself is sampled. Omit it to keep the model default. (minimum: 0, maximum: 2)</li><li>user string No A stable end-user identifier that helps detect and mitigate abuse. Use it on the images endpoints; on the Responses and Chat Completions endpoints, use safety_identifier instead.</li><li>Edit Image Body Json Param</li><li>images array of ImageInputItem Yes Images to edit. (minItems: 1)</li><li>output_format string No Requested file type for the edited images. One of png , jpeg , or webp . Defaults to webp when omitted; any other value is rejected.</li><li>Image Edit Completed Event</li><li>Image edit completed event.</li><li>type enum ('image_edit.completed') Yes Event type; always image_edit.completed .</li><li>b64_json string Yes Base64-encoded edited image data.</li><li>output_index integer (int64) Yes Zero-based index of the edited image in the response.</li><li>size string No Requested image shape as width x height. The values set the aspect ratio; the image is produced at the generator's own resolution, so the returned pixel dimensions will not necessarily match the numbers supplied.</li><li>quality string No Quality setting for the edited images. Accepted but ignored.</li><li>background string No Background setting for the edited images. Accepted but ignored.</li><li>output_format string No Output format for the edited images.</li><li>usage ImageGenUsage No Aggregate token usage for the image edit request. Present only on the final completed event.</li><li>Image Edit Partial Image Event</li><li>Image edit partial image event.</li><li>type enum ('image_edit.partial_image') Yes Event type; always image_edit.partial_image .</li><li>b64_json string Yes Base64-encoded partial image data.</li><li>output_format string No Output format for the edited images. Accepted but ignored.</li><li>partial_image_index integer Yes Zero-based index for the partial image.</li><li>Image Edit Stream Event</li><li>Type: ImageEditPartialImageEvent &#124; ImageEditCompletedEvent</li><li>Image Gen Completed Event</li><li>Image generation completed event.</li><li>type enum ('image_generation.completed') Yes Event type; always image_generation.completed .</li><li>b64_json string Yes Base64-encoded image data.</li><li>output_index integer (int64) Yes Zero-based index of the generated image in the response.</li><li>quality string No Quality setting for the generated images. Accepted but ignored.</li><li>background string No Background setting for the generated images. Accepted but ignored.</li><li>output_format string No Output format for the generated images.</li><li>usage ImageGenUsage No Aggregate token usage for the image generation request. Present only on the final completed event.</li><li>Image Gen Partial Image Event</li><li>Image generation partial image event.</li><li>type enum ('image_generation.partial_image') Yes Event type; always image_generation.partial_image .</li><li>output_format string No Output format for the generated images. Accepted but ignored.</li><li>partial_image_index integer Yes Zero-based index of the partial image in the streaming sequence.</li><li>Image Gen Stream Event</li><li>Type: ImageGenPartialImageEvent &#124; ImageGenCompletedEvent</li><li>Image Gen Usage</li><li>input_tokens_details.image_tokens integer No Number of image tokens in the input.</li><li>Image Input Item</li><li>image_url string No Image URL.</li><li>Image Object</li><li>b64_json string No Base64-encoded image data.</li><li>url string No Image URL.</li><li>revised_prompt string No Revised prompt used for the image.</li><li>Image Tool Enablement</li><li>Per-tool controls for the image generator's agentic planner. Omit to keep the default (all tools available); set a field to false to disable that tool for the request.</li><li>enable_image_search boolean No Whether the image generator may search the web for visual references. false disables it.</li><li>enable_web_search boolean No Whether the image generator may search the web for facts. false disables it (also drops the browser tools).</li><li>enable_shell boolean No Whether the image generator may run code to build layouts and charts. false disables it.</li><li>Images Response</li><li>created integer Yes Unix timestamp (seconds) for when the images were created.</li><li>data array of ImageObject Yes Array of generated images.</li><li>output_format string No File type of the generated images. Echoes the requested output_format ( png , jpeg , or webp ); webp when omitted.</li><li>usage ImageGenUsage No Token usage for the image generation request.</li></ul></details> |
| excerpt | 新增 | 未记录 | Images schemas - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li><li>Sampling</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-image-schemas |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Create Image Edit Request › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Create Image Edit Request › heading | 新增 | 未记录 | Create Image Edit Request |
| tables › 记录 Create Image Edit Request › rows › 记录 image | 新增 | 未记录 | • image<br>• string (binary)<br>• No<br>• Image to edit. PNG format. |
| tables › 记录 Create Image Edit Request › rows › 记录 model | 新增 | 未记录 | • model<br>• string<br>• Yes<br>• Model ID. |
| tables › 记录 Create Image Edit Request › rows › 记录 moderation | 新增 | 未记录 | • moderation<br>• string<br>• No<br>• Moderation level for the safety pipeline. One of auto or low . Enabled per model: on models where it is not enabled, any moderation value returns 400 ( code: unsupported_parameter , param: moderation ); omitting moderation is always valid. On enabled models, unknown or empty values return 400 . |
| tables › 记录 Create Image Edit Request › rows › 记录 n | 新增 | 未记录 | • n<br>• integer<br>• No<br>• Number of edited images to generate. Range: 1-10. Defaults to 1. (minimum: 1, maximum: 10, default: 1) |
| tables › 记录 Create Image Edit Request › rows › 记录 partial_images | 新增 | 未记录 | • partial_images<br>• integer<br>• No<br>• Number of partial images to generate during streaming. Range: 0-3. Accepted but ignored. (minimum: 0, maximum: 3, default: 0) |
| tables › 记录 Create Image Edit Request › rows › 记录 prompt | 新增 | 未记录 | • prompt<br>• string<br>• Yes<br>• Text description of the edits to apply. |
| tables › 记录 Create Image Edit Request › rows › 记录 reasoning_strength | 新增 | 未记录 | • reasoning_strength<br>• enum ('low', 'high')<br>• No<br>• How much reasoning the image generator applies before producing the edited image. One of low or high . low returns after a single generation pass (no self-refinement); high (the default) lets the generator iteratively refine. (default: high) |
| tables › 记录 Create Image Edit Request › rows › 记录 response_format | 新增 | 未记录 | • response_format<br>• enum ('url', 'b64_json')<br>• No<br>• Format for the edited images. One of url or b64_json . Default: b64_json . (default: b64_json) |
| tables › 记录 Create Image Edit Request › rows › 记录 size | 新增 | 未记录 | • size<br>• string<br>• No<br>• Requested image shape as width x height (e.g., '1024x1024'). The values set the aspect ratio; the image is produced at the generator's own resolution, so the returned pixel dimensions will not necessarily match the numbers supplied. |
| tables › 记录 Create Image Edit Request › rows › 记录 stream | 新增 | 未记录 | • stream<br>• boolean<br>• No<br>• If true, streams the response as server-sent events. Defaults to false. (default: false) |
| tables › 记录 Create Image Edit Request › rows › 记录 tool_enablement | 新增 | 未记录 | • tool_enablement<br>• ImageToolEnablement<br>• No<br>• Per-tool controls for the image generator's planner. Omit to keep the default (all tools available). |
| tables › 记录 Create Image Request › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Create Image Request › heading | 新增 | 未记录 | Create Image Request |
| tables › 记录 Create Image Request › rows › 记录 model | 新增 | 未记录 | • model<br>• string<br>• Yes<br>• Model ID for image generation. |
| tables › 记录 Create Image Request › rows › 记录 moderation | 新增 | 未记录 | • moderation<br>• string<br>• No<br>• Moderation level for the safety pipeline. One of auto or low . Enabled per model: on models where it is not enabled, any moderation value returns 400 ( code: unsupported_parameter , param: moderation ); omitting moderation is always valid. On enabled models, unknown or empty values return 400 . |
| tables › 记录 Create Image Request › rows › 记录 n | 新增 | 未记录 | • n<br>• integer<br>• No<br>• Number of images to generate. Range: 1-10. Defaults to 1. (minimum: 1, maximum: 10, default: 1) |
| tables › 记录 Create Image Request › rows › 记录 output_format | 新增 | 未记录 | • output_format<br>• string<br>• No<br>• Requested file type for the generated images. One of png , jpeg , or webp . Defaults to webp when omitted; any other value is rejected. |
| tables › 记录 Create Image Request › rows › 记录 prompt | 新增 | 未记录 | • prompt<br>• string<br>• Yes<br>• Text description of the images to generate. |
| tables › 记录 Create Image Request › rows › 记录 reasoning_strength | 新增 | 未记录 | • reasoning_strength<br>• enum ('low', 'high')<br>• No<br>• How much reasoning the image generator applies before producing the image. One of low or high . low returns after a single generation pass (no self-refinement); high (the default) lets the generator iteratively refine. (default: high) |
| tables › 记录 Create Image Request › rows › 记录 response_format | 新增 | 未记录 | • response_format<br>• enum ('url', 'b64_json')<br>• No<br>• Format for returned images. One of: url , b64_json . Defaults to b64_json . (default: b64_json) |
| tables › 记录 Create Image Request › rows › 记录 size | 新增 | 未记录 | • size<br>• string<br>• No<br>• Requested image shape as width x height (e.g., '1024x1024'). The value is converted into an aspect ratio only; the image is produced at the generator's own fixed output resolution, so the returned pixel dimensions stay constant regardless of the numbers supplied — only the aspect ratio changes. |
| tables › 记录 Create Image Request › rows › 记录 stream | 新增 | 未记录 | • stream<br>• boolean<br>• No<br>• If true, streams the response as server-sent events. Defaults to false. (default: false) |
| tables › 记录 Create Image Request › rows › 记录 temperature | 新增 | 未记录 | • temperature<br>• number<br>• No<br>• Sampling temperature for the model's planning step (prompt writing and refinement), between 0 and 2. It does not change how the image itself is sampled. Omit it to keep the model default. (minimum: 0, maximum: 2) |
| tables › 记录 Create Image Request › rows › 记录 tool_enablement | 新增 | 未记录 | • tool_enablement<br>• ImageToolEnablement<br>• No<br>• Per-tool controls for the image generator's planner. Omit to keep the default (all tools available). |
| tables › 记录 Create Image Request › rows › 记录 user | 新增 | 未记录 | • user<br>• string<br>• No<br>• A stable end-user identifier that helps detect and mitigate abuse. Use it on the images endpoints; on the Responses and Chat Completions endpoints, use safety_identifier instead. |
| tables › 记录 Edit Image Body Json Param › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Edit Image Body Json Param › heading | 新增 | 未记录 | Edit Image Body Json Param |
| tables › 记录 Edit Image Body Json Param › rows › 记录 images | 新增 | 未记录 | • images<br>• array of ImageInputItem<br>• Yes<br>• Images to edit. (minItems: 1) |
| tables › 记录 Edit Image Body Json Param › rows › 记录 model | 新增 | 未记录 | • model<br>• string<br>• Yes<br>• Model ID. |
| tables › 记录 Edit Image Body Json Param › rows › 记录 moderation | 新增 | 未记录 | • moderation<br>• string<br>• No<br>• Moderation level for the safety pipeline. One of auto or low . Enabled per model: on models where it is not enabled, any moderation value returns 400 ( code: unsupported_parameter , param: moderation ); omitting moderation is always valid. On enabled models, unknown or empty values return 400 . |
| tables › 记录 Edit Image Body Json Param › rows › 记录 n | 新增 | 未记录 | • n<br>• integer<br>• No<br>• Number of edited images to generate. Range: 1-10. Defaults to 1. (minimum: 1, maximum: 10, default: 1) |
| tables › 记录 Edit Image Body Json Param › rows › 记录 output_format | 新增 | 未记录 | • output_format<br>• string<br>• No<br>• Requested file type for the edited images. One of png , jpeg , or webp . Defaults to webp when omitted; any other value is rejected. |
| tables › 记录 Edit Image Body Json Param › rows › 记录 prompt | 新增 | 未记录 | • prompt<br>• string<br>• Yes<br>• Text description of the edits to apply. |
| tables › 记录 Edit Image Body Json Param › rows › 记录 reasoning_strength | 新增 | 未记录 | • reasoning_strength<br>• enum ('low', 'high')<br>• No<br>• How much reasoning the image generator applies before producing the edited image. One of low or high . low returns after a single generation pass (no self-refinement); high (the default) lets the generator iteratively refine. (default: high) |
| tables › 记录 Edit Image Body Json Param › rows › 记录 response_format | 新增 | 未记录 | • response_format<br>• enum ('url', 'b64_json')<br>• No<br>• Format for the edited images. One of url or b64_json . Default: b64_json . (default: b64_json) |
| tables › 记录 Edit Image Body Json Param › rows › 记录 size | 新增 | 未记录 | • size<br>• string<br>• No<br>• Requested image shape as width x height (e.g., '1024x1024'). The value is converted into an aspect ratio only; the image is produced at the generator's own fixed output resolution, so the returned pixel dimensions stay constant regardless of the numbers supplied — only the aspect ratio changes. |
| tables › 记录 Edit Image Body Json Param › rows › 记录 stream | 新增 | 未记录 | • stream<br>• boolean<br>• No<br>• If true, streams the response as server-sent events. Defaults to false. (default: false) |
| tables › 记录 Edit Image Body Json Param › rows › 记录 temperature | 新增 | 未记录 | • temperature<br>• number<br>• No<br>• Sampling temperature for the model's planning step (prompt writing and refinement), between 0 and 2. It does not change how the image itself is sampled. Omit it to keep the model default. (minimum: 0, maximum: 2) |
| tables › 记录 Edit Image Body Json Param › rows › 记录 tool_enablement | 新增 | 未记录 | • tool_enablement<br>• ImageToolEnablement<br>• No<br>• Per-tool controls for the image generator's planner. Omit to keep the default (all tools available). |
| tables › 记录 Edit Image Body Json Param › rows › 记录 user | 新增 | 未记录 | • user<br>• string<br>• No<br>• A stable end-user identifier that helps detect and mitigate abuse. Use it on the images endpoints; on the Responses and Chat Completions endpoints, use safety_identifier instead. |
| tables › 记录 Image Edit Completed Event › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Edit Completed Event › heading | 新增 | 未记录 | Image Edit Completed Event |
| tables › 记录 Image Edit Completed Event › rows › 记录 b64_json | 新增 | 未记录 | • b64_json<br>• string<br>• Yes<br>• Base64-encoded edited image data. |
| tables › 记录 Image Edit Completed Event › rows › 记录 background | 新增 | 未记录 | • background<br>• string<br>• No<br>• Background setting for the edited images. Accepted but ignored. |
| tables › 记录 Image Edit Completed Event › rows › 记录 created_at | 新增 | 未记录 | • created_at<br>• integer<br>• Yes<br>• Unix timestamp (seconds) for when the event was created. |
| tables › 记录 Image Edit Completed Event › rows › 记录 output_format | 新增 | 未记录 | • output_format<br>• string<br>• No<br>• Output format for the edited images. |
| tables › 记录 Image Edit Completed Event › rows › 记录 output_index | 新增 | 未记录 | • output_index<br>• integer (int64)<br>• Yes<br>• Zero-based index of the edited image in the response. |
| tables › 记录 Image Edit Completed Event › rows › 记录 quality | 新增 | 未记录 | • quality<br>• string<br>• No<br>• Quality setting for the edited images. Accepted but ignored. |
| tables › 记录 Image Edit Completed Event › rows › 记录 size | 新增 | 未记录 | • size<br>• string<br>• No<br>• Requested image shape as width x height. The values set the aspect ratio; the image is produced at the generator's own resolution, so the returned pixel dimensions will not necessarily match the numbers supplied. |
| tables › 记录 Image Edit Completed Event › rows › 记录 type | 新增 | 未记录 | • type<br>• enum ('image_edit.completed')<br>• Yes<br>• Event type; always image_edit.completed . |
| tables › 记录 Image Edit Completed Event › rows › 记录 usage | 新增 | 未记录 | • usage<br>• ImageGenUsage<br>• No<br>• Aggregate token usage for the image edit request. Present only on the final completed event. |
| tables › 记录 Image Edit Partial Image Event › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Edit Partial Image Event › heading | 新增 | 未记录 | Image Edit Partial Image Event |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 b64_json | 新增 | 未记录 | • b64_json<br>• string<br>• Yes<br>• Base64-encoded partial image data. |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 background | 新增 | 未记录 | • background<br>• string<br>• No<br>• Background setting for the edited images. Accepted but ignored. |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 created_at | 新增 | 未记录 | • created_at<br>• integer<br>• Yes<br>• Unix timestamp (seconds) for when the event was created. |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 output_format | 新增 | 未记录 | • output_format<br>• string<br>• No<br>• Output format for the edited images. Accepted but ignored. |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 partial_image_index | 新增 | 未记录 | • partial_image_index<br>• integer<br>• Yes<br>• Zero-based index for the partial image. |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 quality | 新增 | 未记录 | • quality<br>• string<br>• No<br>• Quality setting for the edited images. Accepted but ignored. |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 size | 新增 | 未记录 | • size<br>• string<br>• No<br>• Requested image shape as width x height. The values set the aspect ratio; the image is produced at the generator's own resolution, so the returned pixel dimensions will not necessarily match the numbers supplied. |
| tables › 记录 Image Edit Partial Image Event › rows › 记录 type | 新增 | 未记录 | • type<br>• enum ('image_edit.partial_image')<br>• Yes<br>• Event type; always image_edit.partial_image . |
| tables › 记录 Image Gen Completed Event › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Gen Completed Event › heading | 新增 | 未记录 | Image Gen Completed Event |
| tables › 记录 Image Gen Completed Event › rows › 记录 b64_json | 新增 | 未记录 | • b64_json<br>• string<br>• Yes<br>• Base64-encoded image data. |
| tables › 记录 Image Gen Completed Event › rows › 记录 background | 新增 | 未记录 | • background<br>• string<br>• No<br>• Background setting for the generated images. Accepted but ignored. |
| tables › 记录 Image Gen Completed Event › rows › 记录 created_at | 新增 | 未记录 | • created_at<br>• integer<br>• Yes<br>• Unix timestamp (seconds) for when the event was created. |
| tables › 记录 Image Gen Completed Event › rows › 记录 output_format | 新增 | 未记录 | • output_format<br>• string<br>• No<br>• Output format for the generated images. |
| tables › 记录 Image Gen Completed Event › rows › 记录 output_index | 新增 | 未记录 | • output_index<br>• integer (int64)<br>• Yes<br>• Zero-based index of the generated image in the response. |
| tables › 记录 Image Gen Completed Event › rows › 记录 quality | 新增 | 未记录 | • quality<br>• string<br>• No<br>• Quality setting for the generated images. Accepted but ignored. |
| tables › 记录 Image Gen Completed Event › rows › 记录 size | 新增 | 未记录 | • size<br>• string<br>• No<br>• Requested image shape as width x height. The values set the aspect ratio; the image is produced at the generator's own resolution, so the returned pixel dimensions will not necessarily match the numbers supplied. |
| tables › 记录 Image Gen Completed Event › rows › 记录 type | 新增 | 未记录 | • type<br>• enum ('image_generation.completed')<br>• Yes<br>• Event type; always image_generation.completed . |
| tables › 记录 Image Gen Completed Event › rows › 记录 usage | 新增 | 未记录 | • usage<br>• ImageGenUsage<br>• No<br>• Aggregate token usage for the image generation request. Present only on the final completed event. |
| tables › 记录 Image Gen Partial Image Event › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Gen Partial Image Event › heading | 新增 | 未记录 | Image Gen Partial Image Event |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 b64_json | 新增 | 未记录 | • b64_json<br>• string<br>• Yes<br>• Base64-encoded partial image data. |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 background | 新增 | 未记录 | • background<br>• string<br>• No<br>• Background setting for the generated images. Accepted but ignored. |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 created_at | 新增 | 未记录 | • created_at<br>• integer<br>• Yes<br>• Unix timestamp (seconds) for when the event was created. |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 output_format | 新增 | 未记录 | • output_format<br>• string<br>• No<br>• Output format for the generated images. Accepted but ignored. |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 partial_image_index | 新增 | 未记录 | • partial_image_index<br>• integer<br>• Yes<br>• Zero-based index of the partial image in the streaming sequence. |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 quality | 新增 | 未记录 | • quality<br>• string<br>• No<br>• Quality setting for the generated images. Accepted but ignored. |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 size | 新增 | 未记录 | • size<br>• string<br>• No<br>• Requested image shape as width x height. The values set the aspect ratio; the image is produced at the generator's own resolution, so the returned pixel dimensions will not necessarily match the numbers supplied. |
| tables › 记录 Image Gen Partial Image Event › rows › 记录 type | 新增 | 未记录 | • type<br>• enum ('image_generation.partial_image')<br>• Yes<br>• Event type; always image_generation.partial_image . |
| tables › 记录 Image Gen Usage › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Gen Usage › heading | 新增 | 未记录 | Image Gen Usage |
| tables › 记录 Image Gen Usage › rows › 记录 input_tokens | 新增 | 未记录 | • input_tokens<br>• integer<br>• No<br>• Number of input tokens. |
| tables › 记录 Image Gen Usage › rows › 记录 input_tokens_details | 新增 | 未记录 | • input_tokens_details<br>• object<br>• No<br>• Breakdown of input tokens by modality. |
| tables › 记录 Image Gen Usage › rows › 记录 input_tokens_details.image_tokens | 新增 | 未记录 | • input_tokens_details.image_tokens<br>• integer<br>• No<br>• Number of image tokens in the input. |
| tables › 记录 Image Gen Usage › rows › 记录 input_tokens_details.text_tokens | 新增 | 未记录 | • input_tokens_details.text_tokens<br>• integer<br>• No<br>• Number of text tokens in the input. |
| tables › 记录 Image Gen Usage › rows › 记录 output_tokens | 新增 | 未记录 | • output_tokens<br>• integer<br>• No<br>• Number of output tokens. |
| tables › 记录 Image Gen Usage › rows › 记录 total_tokens | 新增 | 未记录 | • total_tokens<br>• integer<br>• No<br>• Total number of tokens. |
| tables › 记录 Image Input Item › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Input Item › heading | 新增 | 未记录 | Image Input Item |
| tables › 记录 Image Input Item › rows › 记录 file_id | 新增 | 未记录 | • file_id<br>• string<br>• No<br>• File ID. |
| tables › 记录 Image Input Item › rows › 记录 image_url | 新增 | 未记录 | • image_url<br>• string<br>• No<br>• Image URL. |
| tables › 记录 Image Object › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Object › heading | 新增 | 未记录 | Image Object |
| tables › 记录 Image Object › rows › 记录 b64_json | 新增 | 未记录 | • b64_json<br>• string<br>• No<br>• Base64-encoded image data. |
| tables › 记录 Image Object › rows › 记录 revised_prompt | 新增 | 未记录 | • revised_prompt<br>• string<br>• No<br>• Revised prompt used for the image. |
| tables › 记录 Image Object › rows › 记录 url | 新增 | 未记录 | • url<br>• string<br>• No<br>• Image URL. |
| tables › 记录 Image Tool Enablement › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Image Tool Enablement › heading | 新增 | 未记录 | Image Tool Enablement |
| tables › 记录 Image Tool Enablement › rows › 记录 enable_image_search | 新增 | 未记录 | • enable_image_search<br>• boolean<br>• No<br>• Whether the image generator may search the web for visual references. false disables it. |
| tables › 记录 Image Tool Enablement › rows › 记录 enable_shell | 新增 | 未记录 | • enable_shell<br>• boolean<br>• No<br>• Whether the image generator may run code to build layouts and charts. false disables it. |
| tables › 记录 Image Tool Enablement › rows › 记录 enable_web_search | 新增 | 未记录 | • enable_web_search<br>• boolean<br>• No<br>• Whether the image generator may search the web for facts. false disables it (also drops the browser tools). |
| tables › 记录 Images Response › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Images Response › heading | 新增 | 未记录 | Images Response |
| tables › 记录 Images Response › rows › 记录 background | 新增 | 未记录 | • background<br>• string<br>• No<br>• Background setting for the generated images. Accepted but ignored. |
| tables › 记录 Images Response › rows › 记录 created | 新增 | 未记录 | • created<br>• integer<br>• Yes<br>• Unix timestamp (seconds) for when the images were created. |
| tables › 记录 Images Response › rows › 记录 data | 新增 | 未记录 | • data<br>• array of ImageObject<br>• Yes<br>• Array of generated images. |
| tables › 记录 Images Response › rows › 记录 output_format | 新增 | 未记录 | • output_format<br>• string<br>• No<br>• File type of the generated images. Echoes the requested output_format ( png , jpeg , or webp ); webp when omitted. |
| tables › 记录 Images Response › rows › 记录 usage | 新增 | 未记录 | • usage<br>• ImageGenUsage<br>• No<br>• Token usage for the image generation request. |
| title | 新增 | 未记录 | Images schemas - Meta Model API |

#### 来源 / meta-models-list

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | account_scoped |
| api mentions | 新增 | 未记录 | • base_url = "https://api.meta.ai/v1" ,<br>• "https://api.meta.ai/v1/models" ,<br>• curl -X GET "https://api.meta.ai/v1/models" \ |
| capability mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li></ul></details> |
| excerpt | 新增 | 未记录 | List models - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $MODEL_API_KEY" |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-models-list |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Query parameters › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Query parameters › heading | 新增 | 未记录 | Query parameters |
| tables › 记录 Query parameters › rows › 记录 client | 新增 | 未记录 | • client<br>• string<br>• No<br>• Optional client-specific model catalog view. |
| title | 新增 | 未记录 | List models - Meta Model API |

#### 来源 / meta-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（32 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>llama.cpp</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-image-1.0</li><li>muse-spark</li><li>muse-spark-1.1</li><li>muse-spark-1.2</li><li>muse-spark-1.2-contributor</li><li>muse-spark-1.3</li><li>muse-spark-1.3-contributor</li><li>muse-spark-availability</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse-voice-transcribe-1.0</li><li>muse-voice-transcribe-pricing</li><li>muse-wonder</li><li>muse-wonder-1.0</li><li>muse-wonder-availability</li><li>muse-wonder-model-card</li><li>muse-wonder-or-muse-spark</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sam-3</li><li>sam-3.1</li><li>same</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | meta-models |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Models - Meta Model API |

#### 来源 / meta-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（32 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Use our models with pay-as-you-go billing on Meta Model API and in Muse Code , or in Muse Code with a monthly subscription . This page covers pay-as-you-go: Model API bills text models per token, image generation per image, Muse Voice Transcribe by the hour of audio processed, and Segment Anything Model (SAM) per image or video frame segmented, with no minimums or upfront commitment.</li><li>Muse Image search is included</li><li>Muse Image 's built-in web and image search is part of its per-image price and isn't charged separately. See Muse Image pricing .</li><li>Generated image $0.01 per image</li><li>Muse Image is billed at a flat rate per generated image. The price is the same regardless of prompt length, reasoning_strength , or the tools the model uses during generation, including its built-in web and image search, which isn't charged separately. A request that returns n images is billed for n images. You're billed only for images the model successfully generates and returns: images that fail to generate, or that are removed by safety filtering before they're returned, aren't counted. Imag</li><li>Muse Voice Transcribe is billed by audio processed, metered in whole seconds.</li><li>Audio processed $0.18 per hour</li><li>Streaming and non-streaming transcription are priced the same. Zero data retention (ZDR) is priced at parity with Standard mode. Contributor mode isn't available for Muse Voice Transcribe. Audio time is billed as a separate line item from token usage, rounded down to whole seconds; other endpoints aren't billed for audio time.</li><li>SAM 3.1 segmentation is billed per image and per video frame, not per token. The same prices apply to streaming and non-streaming requests. Each video request is billed for at least 50 frames, so a clip or tracking range shorter than 50 frames is billed as 50. The response's usage.video_frames_processed reports the frames billed for that request.</li><li>Image segmentation $2.50 per 1,000 images</li><li>Video segmentation $0.20 per 1,000 frames</li><li>muse-image-1.0 150 None</li><li>muse-voice-transcribe-1.0 None None 256 concurrent streams; 16,000 streams per hour</li><li>SAM 3.1 is billed per image or frame and Muse Image is priced per image , so neither has a TPM limit.</li><li>Muse Voice Transcribe is billed by audio processed , so it's limited by streams rather than requests or tokens. Concurrent streams caps how many transcription sessions you hold open at once; streams per hour caps how many you start. Realtime and file transcription share the same budget.</li><li>Handle Muse Voice Transcribe rejections</li><li>A realtime stream rejected for exceeding a stream limit closes with 1013 . A rejected file-transcription request returns HTTP 429 Too Many Requests . Transcription responses don't include the x-ratelimit-* headers.</li></ul></details> |
| excerpt | 新增 | 未记录 | Pricing and rate limits - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（31 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-image-1.0</li><li>muse-spark</li><li>muse-spark-1.1</li><li>muse-spark-1.2</li><li>muse-spark-1.2-contributor</li><li>muse-spark-1.3</li><li>muse-spark-1.3-contributor</li><li>muse-spark-open</li><li>muse-spark-pricing</li><li>muse-voice-transcribe</li><li>muse-voice-transcribe-1.0</li><li>muse-voice-transcribe-pricing</li><li>muse-voice-transcribe-rate-limits</li><li>muse-wonder</li><li>muse-wonder-1.0</li><li>muse-wonder-pricing</li><li>muse.png</li><li>sam</li><li>SAM</li><li>sam-3</li><li>sam-3.1</li><li>sam-pricing</li><li>same</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • Use our models with pay-as-you-go billing on Meta Model API and in Muse Code , or in Muse Code with a monthly subscription . This page covers pay-as-you-go: Model API bills text models per token, image generation per image, Muse Voice Transcribe by the hour of audio processed, and Segment Anything Model (SAM) per image or video frame segmented, with no minimums or upfront commitment.<br>• Cached input $0.20 Not available<br>• Input $4.00 Not available<br>• Output $20.00 Not available<br>• Cached input $0.15 $0.002<br>• Input $1.25 $0.10<br>• Output $4.25 $0.20<br>• Web search grounding : $2.50 per 1,000 search queries , in addition to the request's token cost. This applies to the web_search tool on text models such as Muse Wonder and Muse Spark .<br>• Generated image $0.01 per image<br>• Audio processed $0.18 per hour<br>• Image segmentation $2.50 per 1,000 images<br>• Video segmentation $0.20 per 1,000 frames |
| scope | 新增 | 未记录 | pricing |
| source ref | 新增 | 未记录 | meta-pricing |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Muse Image › headers | 新增 | 未记录 | • Usage<br>• Price |
| tables › 记录 Muse Image › heading | 新增 | 未记录 | Muse Image |
| tables › 记录 Muse Image › rows › 记录 Generated image | 新增 | 未记录 | • Generated image<br>• $0.01 per image |
| tables › 记录 Muse Spark › headers | 新增 | 未记录 | • Usage<br>• Standard mode (per 1M tokens)<br>• Contributor mode (per 1M tokens) |
| tables › 记录 Muse Spark › heading | 新增 | 未记录 | Muse Spark |
| tables › 记录 Muse Spark › rows › 记录 Cached input | 新增 | 未记录 | • Cached input<br>• $0.15<br>• $0.002 |
| tables › 记录 Muse Spark › rows › 记录 Input | 新增 | 未记录 | • Input<br>• $1.25<br>• $0.10 |
| tables › 记录 Muse Spark › rows › 记录 Output | 新增 | 未记录 | • Output<br>• $4.25<br>• $0.20 |
| tables › 记录 Muse Voice Transcribe › headers | 新增 | 未记录 | • Usage<br>• Price |
| tables › 记录 Muse Voice Transcribe › heading | 新增 | 未记录 | Muse Voice Transcribe |
| tables › 记录 Muse Voice Transcribe › rows › 记录 Audio processed | 新增 | 未记录 | • Audio processed<br>• $0.18 per hour |
| tables › 记录 Muse Wonder › headers | 新增 | 未记录 | • Usage<br>• Standard mode (per 1M tokens)<br>• Contributor mode (per 1M tokens) |
| tables › 记录 Muse Wonder › heading | 新增 | 未记录 | Muse Wonder |
| tables › 记录 Muse Wonder › rows › 记录 Cached input | 新增 | 未记录 | • Cached input<br>• $0.20<br>• Not available |
| tables › 记录 Muse Wonder › rows › 记录 Input | 新增 | 未记录 | • Input<br>• $4.00<br>• Not available |
| tables › 记录 Muse Wonder › rows › 记录 Output | 新增 | 未记录 | • Output<br>• $20.00<br>• Not available |
| tables › 记录 Rate limits › headers | 新增 | 未记录 | • Model<br>• Requests per minute (RPM)<br>• Tokens per minute (TPM)<br>• Other limits |
| tables › 记录 Rate limits › heading | 新增 | 未记录 | Rate limits |
| tables › 记录 Rate limits › rows › 记录 muse-image-1.0 | 新增 | 未记录 | • muse-image-1.0<br>• 150<br>• None<br>• 空字符串 |
| tables › 记录 Rate limits › rows › 记录 muse-spark-1.1 | 新增 | 未记录 | • muse-spark-1.1<br>• 3,000<br>• 4,000,000<br>• 空字符串 |
| tables › 记录 Rate limits › rows › 记录 muse-spark-1.2 | 新增 | 未记录 | • muse-spark-1.2<br>• 3,000<br>• 4,000,000<br>• 空字符串 |
| tables › 记录 Rate limits › rows › 记录 muse-spark-1.2-contributor | 新增 | 未记录 | • muse-spark-1.2-contributor<br>• 150<br>• 3,000,000<br>• 空字符串 |
| tables › 记录 Rate limits › rows › 记录 muse-spark-1.3 | 新增 | 未记录 | • muse-spark-1.3<br>• 3,000<br>• 4,000,000<br>• 空字符串 |
| tables › 记录 Rate limits › rows › 记录 muse-spark-1.3-contributor | 新增 | 未记录 | • muse-spark-1.3-contributor<br>• 150<br>• 3,000,000<br>• 空字符串 |
| tables › 记录 Rate limits › rows › 记录 muse-voice-transcribe-1.0 | 新增 | 未记录 | • muse-voice-transcribe-1.0<br>• None<br>• None<br>• 256 concurrent streams; 16,000 streams per hour |
| tables › 记录 Rate limits › rows › 记录 muse-wonder-1.0 | 新增 | 未记录 | • muse-wonder-1.0<br>• 3,000<br>• 4,000,000<br>• 空字符串 |
| tables › 记录 Rate limits › rows › 记录 sam-3.1 | 新增 | 未记录 | • sam-3.1<br>• 3,000<br>• None<br>• 空字符串 |
| tables › 记录 Read rate-limit headers › headers | 新增 | 未记录 | • Header<br>• Description |
| tables › 记录 Read rate-limit headers › heading | 新增 | 未记录 | Read rate-limit headers |
| tables › 记录 Read rate-limit headers › rows › 记录 x-ratelimit-limit-requests | 新增 | 未记录 | • x-ratelimit-limit-requests<br>• Total request budget for the current window. |
| tables › 记录 Read rate-limit headers › rows › 记录 x-ratelimit-limit-tokens | 新增 | 未记录 | • x-ratelimit-limit-tokens<br>• Total token budget for the current window. |
| tables › 记录 Read rate-limit headers › rows › 记录 x-ratelimit-remaining-requests | 新增 | 未记录 | • x-ratelimit-remaining-requests<br>• Requests remaining before you hit the limit. |
| tables › 记录 Read rate-limit headers › rows › 记录 x-ratelimit-remaining-tokens | 新增 | 未记录 | • x-ratelimit-remaining-tokens<br>• Tokens remaining before you hit the limit. |
| tables › 记录 Segment Anything Model 3.1 › headers | 新增 | 未记录 | • Usage<br>• Price |
| tables › 记录 Segment Anything Model 3.1 › heading | 新增 | 未记录 | Segment Anything Model 3.1 |
| tables › 记录 Segment Anything Model 3.1 › rows › 记录 Image segmentation | 新增 | 未记录 | • Image segmentation<br>• $2.50 per 1,000 images |
| tables › 记录 Segment Anything Model 3.1 › rows › 记录 Video segmentation | 新增 | 未记录 | • Video segmentation<br>• $0.20 per 1,000 frames |
| title | 新增 | 未记录 | Pricing and rate limits - Meta Model API |

#### 来源 / meta-protocols

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • Responses POST /v1/responses Agents and multi-step tool loops; the full feature set Yes — encrypted replay or previous_response_id<br>• Chat Completions POST /v1/chat/completions Dropping into existing OpenAI messages-array code No (reasoning is not carried between turns)<br>• Messages POST /v1/messages Anthropic-format tools such as Claude Code Yes — via Anthropic thinking replay<br>• The recommended default for new work. It is OpenAI-compatible and exposes the full feature set: cross-turn reasoning replay (stateless encrypted items or server-managed previous_response_id ), search grounding , tool search , background execution, and file inputs . Reach for it for agentic and coding workloads where reasoning continuity across tool turns matters. Use the OpenAI SDK pointed at https://api.meta.ai/v1 . See the Responses API guide . |
| capability mentions | 新增 | 未记录 | 列表（21 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Format Endpoint Best for Reasoning across turns</li><li>Chat Completions POST /v1/chat/completions Dropping into existing OpenAI messages-array code No (reasoning is not carried between turns)</li><li>The recommended default for new work. It is OpenAI-compatible and exposes the full feature set: cross-turn reasoning replay (stateless encrypted items or server-managed previous_response_id ), search grounding , tool search , background execution, and file inputs . Reach for it for agentic and coding workloads where reasoning continuity across tool turns matters. Use the OpenAI SDK pointed at https://api.meta.ai/v1 . See the Responses API guide .</li><li>The classic OpenAI messages-array endpoint. It is the simplest drop-in if your code already calls /v1/chat/completions : point the client at the base URL, swap the key, and keep the rest. It does not carry reasoning across turns for external keys, and search grounding and tool search run only on the Responses and Messages APIs. Tool calling with function tools is fully supported. See the Chat Completions guide .</li><li>Building an agent or coding workflow : use the Responses API for reasoning continuity, search grounding, and background execution.</li><li>Already have OpenAI chat.completions code : start with Chat Completions for the fastest drop-in, and move to Responses when you need reasoning replay or search grounding.</li></ul></details> |
| excerpt | 新增 | 未记录 | Choosing an API — Meta Model API - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>same</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-protocols |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 At a glance › headers | 新增 | 未记录 | • Format<br>• Endpoint<br>• Best for<br>• Reasoning across turns |
| tables › 记录 At a glance › heading | 新增 | 未记录 | At a glance |
| tables › 记录 At a glance › rows › 记录 Chat Completions | 新增 | 未记录 | • Chat Completions<br>• POST /v1/chat/completions<br>• Dropping into existing OpenAI messages-array code<br>• No (reasoning is not carried between turns) |
| tables › 记录 At a glance › rows › 记录 Messages | 新增 | 未记录 | • Messages<br>• POST /v1/messages<br>• Anthropic-format tools such as Claude Code<br>• Yes — via Anthropic thinking replay |
| tables › 记录 At a glance › rows › 记录 Responses | 新增 | 未记录 | • Responses<br>• POST /v1/responses<br>• Agents and multi-step tool loops; the full feature set<br>• Yes — encrypted replay or previous_response_id |
| title | 新增 | 未记录 | Choosing an API — Meta Model API - Meta Model API |

#### 来源 / meta-search-grounding

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url = "https://api.meta.ai/v1" ,<br>• baseURL : 'https://api.meta.ai/v1' ,<br>• "https://api.meta.ai/v1/responses" ,<br>• curl -X POST "https://api.meta.ai/v1/responses" \ |
| capability mentions | 新增 | 未记录 | 列表（19 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Muse Image searches differently</li><li>This page covers the web_search tool for text models such as Muse Spark . Muse Image does its own web and image search automatically while generating, with no web_search tool to add. See Automatic grounding .</li><li>"text": "**Muse Spark** was announced by Meta on **Wednesday, April 8, 2026**.\n\n- It was unveiled as the first AI model from Meta's new \"Muse\" family, developed by Meta Superintelligence Labs \n- Meta described it as a \"small and fast by design\" multimodal model built for real-time reasoning across WhatsApp, Instagram, Facebook, and Meta's smart glasses \n\nThe announcement came in a blog post on April 8, kicking off the week of April 6–10 that TechTarget covered in its roundup published A</li><li>Pair citations with structured output when you need grounded answers in a reliable JSON shape.</li></ul></details> |
| excerpt | 新增 | 未记录 | Search grounding - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark</li><li>muse-spark-1.1-ai-bets-big-on-superintelligence-push</li><li>muse-spark-1.3</li><li>Muse-Spark-debut-and-US-infrastructure-disruption</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse.png</li><li>sam</li><li>SAM</li><li>same</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $MODEL_API_KEY" \ |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | meta-search-grounding |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Controlling search context › headers | 新增 | 未记录 | • Value<br>• Behavior |
| tables › 记录 Controlling search context › heading | 新增 | 未记录 | Controlling search context |
| tables › 记录 Controlling search context › rows › 记录 "high" | 新增 | 未记录 | • "high"<br>• Maximum context. Best for complex queries that benefit from more sources. |
| tables › 记录 Controlling search context › rows › 记录 "low" | 新增 | 未记录 | • "low"<br>• Minimal context. Fastest responses, lowest token usage. |
| tables › 记录 Controlling search context › rows › 记录 "medium" | 新增 | 未记录 | • "medium"<br>• Balanced context. Good default for most queries. |
| tables › 记录 Inspect the raw search results › headers | 新增 | 未记录 | • Field<br>• Description |
| tables › 记录 Inspect the raw search results › heading | 新增 | 未记录 | Inspect the raw search results |
| tables › 记录 Inspect the raw search results › rows › 记录 snippet | 新增 | 未记录 | • snippet<br>• Extracted text the model saw from the page. |
| tables › 记录 Inspect the raw search results › rows › 记录 title | 新增 | 未记录 | • title<br>• Title of the retrieved page. |
| tables › 记录 Inspect the raw search results › rows › 记录 type | 新增 | 未记录 | • type<br>• Result kind; text_result for a web page. |
| tables › 记录 Inspect the raw search results › rows › 记录 url | 新增 | 未记录 | • url<br>• Source URL. |
| tables › 记录 Localize results with user location › headers | 新增 | 未记录 | • Field<br>• Description |
| tables › 记录 Localize results with user location › heading | 新增 | 未记录 | Localize results with user location |
| tables › 记录 Localize results with user location › rows › 记录 city | 新增 | 未记录 | • city<br>• City as free text, such as San Francisco . |
| tables › 记录 Localize results with user location › rows › 记录 country | 新增 | 未记录 | • country<br>• Two-letter ISO 3166-1 (opens in new tab) code, such as GB . |
| tables › 记录 Localize results with user location › rows › 记录 region | 新增 | 未记录 | • region<br>• Region as free text, such as California . |
| tables › 记录 Localize results with user location › rows › 记录 timezone | 新增 | 未记录 | • timezone<br>• IANA time zone (opens in new tab) name, such as America/Los_Angeles . |
| tables › 记录 Localize results with user location › rows › 记录 type | 新增 | 未记录 | • type<br>• Location approximation type. Optional; defaults to "approximate" , the only supported value. |
| tables › 记录 Working with citations › headers | 新增 | 未记录 | • Field<br>• Description |
| tables › 记录 Working with citations › heading | 新增 | 未记录 | Working with citations |
| tables › 记录 Working with citations › rows › 记录 end_index | 新增 | 未记录 | • end_index<br>• Character offset where the cited passage ends in text |
| tables › 记录 Working with citations › rows › 记录 start_index | 新增 | 未记录 | • start_index<br>• Character offset where the cited passage begins in text |
| tables › 记录 Working with citations › rows › 记录 title | 新增 | 未记录 | • title<br>• Page title of the source |
| tables › 记录 Working with citations › rows › 记录 url | 新增 | 未记录 | • url<br>• Source URL the model cited |
| title | 新增 | 未记录 | Search grounding - Meta Model API |

#### 来源 / meta-subscriptions

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（17 项）<details><summary>展开完整内容</summary><ul><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Access to Muse Spark, Muse Wonder and Muse Image</li><li>Send 10-50 prompts every 5 hours, including image and video uploads</li></ul></details> |
| excerpt | 新增 | 未记录 | Subscriptions - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（17 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>muse</li><li>Muse</li><li>MUSE_CONTRIBUTOR_MODE</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse-wonder-availability</li><li>muse.png</li><li>sam</li><li>SAM</li><li>same</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 列表（30 项）<details><summary>展开完整内容</summary><ul><li>With a Muse Code subscription, you pay a flat monthly rate for usage of Muse Code , instead of paying per token. Subscription benefits and availability may vary by region. Available benefits will be shown to you during onboarding before you subscribe.</li><li>To sign up for a Muse Code subscription, you will need a Meta Account. Using your Meta Account, you can create an associated Meta Model API account and sign up for a subscription. The subscription applies to the Muse Code API key that is automatically connected in the Muse Code CLI onboarding process. This credential is for use with Muse Code only. Any additional API keys you create under your Meta Model API account will be billed through pay-as-you-go .</li><li>You must be 18 or the age of majority in your country to subscribe. Your subscription is subject to the Meta Subscription Terms of Service (opens in new tab) , and your use of Muse Code and the Meta Model API is governed by the Meta Model API Terms of Service and the Meta Model API Acceptable Use Policy .</li><li>There are 4 subscription plans available for Muse Code:</li><li>Everything from the Everyday Usage plan</li><li>5x more usage than the Everyday Usage plan</li><li>Everything from the High Usage plan</li><li>20x more usage than the Everyday Usage plan</li><li>Everything from the Power Usage plan</li><li>80x more usage than the Everyday Usage plan</li><li>Muse Code subscriptions default to Contributor mode. In Contributor mode, you get more usage from your plan in exchange for letting Meta use your content to train future Meta models. Contributor mode is a setting in Muse Code, and you can turn it off at any time, at which point your future content is not used to train Meta models (unless you turn it back on in your settings).</li><li>Muse Wonder and Muse Wonder Full are each available in either mode on the plans that include them. For the models each plan includes, see Muse Wonder availability .</li><li>The Contributor mode row appears only while you're signed in with an active Muse Code subscription. It doesn't appear if:</li><li>Choose pay-as-you-go or a subscription</li><li>Subscription : a flat monthly rate (see the plans above). It works only through the Muse Code CLI while signed in with your Meta Model API account.</li><li>If you reach your plan's usage limit, you can upgrade to the next plan, or wait until your limit refreshes. If you are on the Maximum Usage plan, you must wait for your limit to refresh. Usage through any additional API keys you create is billed pay-as-you-go.</li><li>Select Muse Code , then choose a plan and complete checkout.</li><li>On success, you will see a confirmation screen with a link to your receipt and the option to Manage your subscription .</li><li>Change or cancel your plan</li><li>Manage your plan from Manage your subscription on the Subscriptions page in Accounts Center (opens in new tab) . From an interactive session, type /upgrade to open Accounts Center in your browser.</li><li>Upgrade : A plan upgrade takes effect immediately. You will be charged a prorated amount for the rest of the current billing cycle.</li><li>Downgrade : A plan downgrade takes effect at the start of your next billing cycle. You will keep your current plan's usage limit until the next billing cycle.</li><li>Cancel : From Accounts Center, go to Manage your subscription and select Cancel subscription . Your subscription stays active until the end of the current billing cycle, then you lose access to all benefits. Cancel at least 24 hours before your next billing date to avoid future charges.</li><li>What happens when your subscription ends</li><li>A subscription ends one of 2 ways: you can cancel it (see Change or cancel your plan ), or Meta can revoke it.</li><li>Revocation is different from cancellation. When your subscription is revoked, you lose access immediately instead of at the end of your billing cycle. Meta may revoke a subscription for various reasons, including:</li><li>Policy violation : your account violates the Model API terms , Meta's Community Standards (opens in new tab) or Meta Subscription Terms of Service (opens in new tab) .</li><li>Account deletion or deactivation : deleting your account cancels the subscription immediately. Deactivating your account keeps the subscription active for 30 days. If you don't reactivate within that window, Meta revokes it.</li><li>Your subscription renews automatically each month on the date you first subscribed. If that date doesn't exist in a given month (for example, the 31st in a 30-day month), you're charged on the last day of that month instead.</li><li>No refunds for canceled subscriptions : if you cancel your subscription, you won't receive a credit or refund unless required by law.</li></ul></details> |
| scope | 新增 | 未记录 | plan |
| source ref | 新增 | 未记录 | meta-subscriptions |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Subscriptions - Meta Model API |

#### 来源 / meta-voice-realtime-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • Connect to wss://api.meta.ai/v1/asr/realtime , send the handshake as the first JSON text frame within 10 seconds, then stream raw PCM as binary frames. This endpoint does not read the HTTP Authorization header; the credential travels in the handshake. Send {"type": "endStream"} to end input and keep reading until the server closes with 1000 .<br>• ASR_URI = f"wss://api.meta.ai/v1/asr/realtime?sessionId={SESSION_ID}" |
| capability mentions | 新增 | 未记录 | 列表（34 项）<details><summary>展开完整内容</summary><ul><li>Transcribe in realtime - Meta Model API</li><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Stream audio over a WebSocket and receive transcripts, turn boundaries, and speaker labels as the audio arrives.</li><li>Connect to wss://api.meta.ai/v1/asr/realtime , send the handshake as the first JSON text frame within 10 seconds, then stream raw PCM as binary frames. This endpoint does not read the HTTP Authorization header; the credential travels in the handshake. Send {"type": "endStream"} to end input and keep reading until the server closes with 1000 .</li><li>WS /asr/realtime</li><li>Open a realtime transcription session.</li><li>RealtimeHandshakeRequest</li><li>RealtimeHandshakeResponse</li><li>ASR_URI = f"wss://api.meta.ai/v1/asr/realtime?sessionId={SESSION_ID}"</li><li>async def transcribe_stream() -&gt; None:</li><li>"audioEncoding": "PCM_24KHZ",</li><li>"model": "muse-voice-transcribe-1.0",</li><li>if event.get("type") == "transcript":</li><li>print(event["transcript"], end=end, flush=True)</li><li>with open("recording.pcm", "rb") as audio:</li><li>while chunk := audio.read(FRAME_BYTES):</li><li>asyncio.run(transcribe_stream())</li><li>Audio is sent as binary frames. The only client text frame after the handshake is the end-of-input marker, which half-closes the client-to-server direction and leaves the socket open so the server can flush pending results. Closing the socket instead also ends input, but can discard pending events.</li><li>1008 Invalid request, or a streaming-policy failure such as backlog or below-real-time ingress Correct the configuration or the audio pacing. Retrying the same request fails again.</li><li>For modes, endpointing, diarization, session limits, and worked examples, see the Speech to text feature page.</li></ul></details> |
| excerpt | 新增 | 未记录 | Transcribe in realtime - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse-voice-transcribe-1.0</li><li>muse.png</li><li>sam</li><li>SAM</li><li>same</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-voice-realtime-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Close codes › headers | 新增 | 未记录 | • Code<br>• Meaning<br>• What to do |
| tables › 记录 Close codes › heading | 新增 | 未记录 | Close codes |
| tables › 记录 Close codes › rows › 记录 1000 | 新增 | 未记录 | • 1000<br>• Normal completion<br>• Finish after consuming the final result. |
| tables › 记录 Close codes › rows › 记录 1008 | 新增 | 未记录 | • 1008<br>• Invalid request, or a streaming-policy failure such as backlog or below-real-time ingress<br>• Correct the configuration or the audio pacing. Retrying the same request fails again. |
| tables › 记录 Close codes › rows › 记录 1011 | 新增 | 未记录 | • 1011<br>• Internal or backend failure<br>• Retry with backoff. When the reason is Max session duration reached , open a new session. |
| tables › 记录 Close codes › rows › 记录 1013 | 新增 | 未记录 | • 1013<br>• Rate limited<br>• Back off before reconnecting. |
| tables › 记录 Query parameters › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Query parameters › heading | 新增 | 未记录 | Query parameters |
| tables › 记录 Query parameters › rows › 记录 sessionId | 新增 | 未记录 | • sessionId<br>• string<br>• No<br>• Correlation id used in server-side logs and returned in the handshake response. When omitted, the server generates one. It is supplied here rather than in the handshake so it is known before the handshake frame arrives. |
| title | 新增 | 未记录 | Transcribe in realtime - Meta Model API |

#### 来源 / meta-voice-transcribe-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl -X POST "https://api.meta.ai/v1/asr/transcribe" \<br>• "https://api.meta.ai/v1/asr/transcribe" , |
| capability mentions | 新增 | 未记录 | 列表（33 项）<details><summary>展开完整内容</summary><ul><li>Transcribe a recording - Meta Model API</li><li>Tool calling</li><li>Image understanding</li><li>Image generation</li><li>Speech to text</li><li>Video understanding</li><li>Reasoning</li><li>Structured output</li><li>Muse Image</li><li>Muse Voice Transcribe</li><li>Images</li><li>Images Overview</li><li>Generate an image</li><li>Edit an image</li><li>Transcribe a recording</li><li>Transcribe in realtime</li><li>Transcribe one complete audio recording in a single request.</li><li>Send multipart/form-data with two parts: request , the transcription settings as JSON, and audio , the clip. The Accept header selects between a buffered JSON body, a server-sent event stream, and plain text.</li><li>POST /asr/transcribe</li><li>Transcribe a complete audio recording.</li><li>HTTP 200 — The transcript, in the shape selected by Accept . application/json , */* , or an absent header returns the buffered body. text/event-stream returns the realtime event stream, which ends after the last event and appends no summary. text/plain returns one turn per line in ENDPOINTING , or lines of the form A:Hello in DIARIZATION (a turn the model never attributed renders as unknown:&lt;transcript&gt; ).</li><li>TranscribeResponse</li><li>HTTP 400 — The audio is not a supported WAV file, the audio exceeds 10 minutes, or the body is not multipart/form-data .</li><li>HTTP 500 — Transcription failed, or processing exceeded the server budget. Once an event stream has started there is no status left to set, so the failure arrives as a terminal error event on the open stream under HTTP 200 .</li><li>curl -X POST "https://api.meta.ai/v1/asr/transcribe" \</li><li>-F 'request={"model":"muse-voice-transcribe-1.0","audioEncoding":"WAV","mode":"PUSH_TO_TALK"};type=application/json' \</li><li>-F "audio=@recording.wav;type=audio/wav"</li><li>with open ( "recording.wav" , "rb" ) as audio :</li><li>"https://api.meta.ai/v1/asr/transcribe" ,</li><li>"model" : "muse-voice-transcribe-1.0" ,</li><li>"audioEncoding" : "WAV" ,</li><li>"audio" : ( "recording.wav" , audio , "audio/wav" ) ,</li><li>For audio conversion, modes, and worked examples, see the Speech to text feature page.</li></ul></details> |
| excerpt | 新增 | 未记录 | Transcribe a recording - Meta Model API<br>Skip to content Meta Model API Search<br>Product<br>Dashboard<br>Start here<br>Overview<br>Quickstart<br>Authentication<br>Models<br>Pricing and rate limits<br>SDKs and libraries<br>Capabilities<br>Tool calling<br>Tool search<br>Search grounding<br>Image understanding<br>Image generation<br>Speech to text<br>Video understanding<br>Media segmentation<br>File handling<br>Reasoning<br>Structured output<br>Prompt caching<br>Token counting<br>Protocols<br>Choosing an API<br>Responses API<br>Chat Completions API<br>Messages API<br>Cookbook<br>All recipes<br>Meta Model API<br>Meta Model API API fundamentals<br>Agent patterns<br>Use cases<br>Building with Muse Code<br>Muse Image<br>Muse Voice Transcribe<br>Segment Anything Model<br>Open-weight models<br>Open-weight models Run locally<br>Post-training<br>Muse Code<br>Overview<br>Authentication and billing<br>Subscriptions<br>Permissions and safety<br>Working with the agent<br>Workflows<br>Session messaging<br>Rewind a conversation<br>Configuration and context<br>Extending and automating<br>Changelog<br>Open-weight models<br>Overview<br>Muse Spark Open<br>Muse Spark Open Overview<br>Get the model<br>Prompting guide<br>Recommended settings<br>Run inference<br>Hardware platforms<br>Post-training<br>Muse Glimmer<br>Muse Glimmer Overview<br>Get the model<br>Prompting guide<br>Quantization<br>Speculative decoding<br>Run inference<br>Hardware platforms<br>Post-training<br>Agent guides<br>Coding agents<br>Agent frameworks<br>Computer use<br>SAM<br>Overview<br>Segmenting with prompts<br>Reading segmentation output<br>Client libraries<br>API reference<br>Introduction<br>Error handling<br>Responses<br>Responses Overview<br>Create a response<br>Retrieve a response<br>Delete a response<br>Cancel a response<br>Count input tokens<br>Schemas<br>Chat completions<br>Chat completions Overview<br>Create a chat completion<br>Schemas<br>Messages<br>Messages Overview |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>llama-theme</li><li>Muse</li><li>muse-code</li><li>muse-glimmer</li><li>muse-image</li><li>muse-spark-open</li><li>muse-voice-transcribe</li><li>muse-voice-transcribe-1.0</li><li>muse.png</li><li>sam</li><li>SAM</li><li>same</li><li>sample_rand</li><li>sample_rate</li><li>sampled</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $MODEL_API_KEY" \ |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Query parameters › headers | 新增 | 未记录 | • Field<br>• Type<br>• Required<br>• Description |
| tables › 记录 Query parameters › heading | 新增 | 未记录 | Query parameters |
| tables › 记录 Query parameters › rows › 记录 sessionId | 新增 | 未记录 | • sessionId<br>• string<br>• No<br>• Correlation id used in server-side logs and echoed in the response. When omitted, the server generates one. |
| title | 新增 | 未记录 | Transcribe a recording - Meta Model API |

### Provider / meta

#### 档案

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| profile › aliases › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 页面标题标识产品为 Meta Model API。 |
| profile › aliases › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| profile › aliases | 新增 | 未记录 | • Meta Model API |
| profile › docs › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 文档入口。 |
| profile › docs › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| profile › docs › evidence › 记录 meta-models › assertion | 新增 | 未记录 | Meta Model API 官方模型目录文档入口。 |
| profile › docs › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| profile › docs › api | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference |
| profile › docs › image | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/images/create-image |
| profile › docs › overview | 新增 | 未记录 | https://dev.meta.ai/docs/models |
| profile › docs › speech | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/voice/realtime |
| profile › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方目录描述 Meta 自有模型系列，且 Model API 文档由 Meta 官方开发者站点发布。 |
| profile › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| profile › 类别（kind） | 新增 | 未记录 | first_party |
| profile › 名称（name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | Meta 官方模型目录以 Meta 名称描述其自有模型系列。 |
| profile › 名称（name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| profile › 名称（name） | 新增 | 未记录 | Meta |

### 待核对项目

#### 项目 / coverage-gap-01

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| ID（id） | 新增 | 未记录 | coverage-gap-01 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 公开模型目录完整性：保留目录页面与模型 ID 线索；未将页面提及自动判定为账号可调用目录。 |

#### 项目 / coverage-gap-02

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-models › assertion | 新增 | 未记录 | account_scoped |
| evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| ID（id） | 新增 | 未记录 | coverage-gap-02 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 账号可用模型清单：官方接口说明表明清单按凭证/账号返回；本采集器不使用凭证调用。 |

#### 项目 / coverage-gap-04

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| ID（id） | 新增 | 未记录 | coverage-gap-04 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | Provider/Service 独立能力：能力文档片段已保留；尚未映射到独立 Service 或明确关联的 Offering。 |

#### 项目 / coverage-gap-05

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| evidence › 记录 meta-subscriptions › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-subscriptions › source ref | 新增 | 未记录 | meta-subscriptions |
| ID（id） | 新增 | 未记录 | coverage-gap-05 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型价格与计量条件：价格来源的表格和原始金额线索已保留；币种、计量单位、阈值、折扣及模型适用范围尚未映射成 PriceRule。 |

#### 项目 / coverage-gap-06

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| ID（id） | 新增 | 未记录 | coverage-gap-06 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型上下文与最大输出：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-07

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| ID（id） | 新增 | 未记录 | coverage-gap-07 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型输入/输出模态与限制：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-08

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| ID（id） | 新增 | 未记录 | coverage-gap-08 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型发布日期与生命周期：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-09

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| evidence › 记录 meta-subscriptions › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 meta-subscriptions › source ref | 新增 | 未记录 | meta-subscriptions |
| ID（id） | 新增 | 未记录 | coverage-gap-09 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 计划价格与资格条件：计划来源虽已登记，具体价格、周期、市场/账号资格及模型权益仍需按来源逐项核验；候选不推断其覆盖范围。 |

#### 项目 / meta-api-model-route-mapping-incomplete

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | API Reference 描述通用 API Host 与需凭证访问的 models.list。 |
| evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议页列出通用请求协议，但没有证明它们对每个当前模型均可调用。 |
| evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| ID（id） | 新增 | 未记录 | meta-api-model-route-mapping-incomplete |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 已映射通用文本、Files、Muse Image 图片生成/编辑及 Muse Voice Transcribe 文件/实时 Route；SAM 视频/图像分割、状态 API、Muse Image 的 Responses 工具模式及仍未收录的请求/响应约束继续 Review。 |

### 市场 / global

#### Capability / files

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API 参考列出 Files 的上传、列表、读取和删除接口。 |
| ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| ID（id） | 新增 | 未记录 | files |
| 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API 参考列出 Files 的上传、列表、读取和删除接口。 |
| 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 类别（kind） | 新增 | 未记录 | file_storage |
| links › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API 参考列出 Files 的上传、列表、读取和删除接口。 |
| links › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| links › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference |

#### Capability / files › Operation / delete-file

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| ID（id） › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| ID（id） | 新增 | 未记录 | delete-file |
| 类别（kind） › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| 类别（kind） › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| 类别（kind） | 新增 | 未记录 | file_storage |
| 输出（output） › evidence › 记录 meta-files-schemas › assertion | 新增 | 未记录 | 响应字段来自官方 Files API Schema。 |
| 输出（output） › evidence › 记录 meta-files-schemas › source ref | 新增 | 未记录 | meta-files-schemas |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• deleted |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 参数来自官方 Files API Route 文档。 |
| 参数（parameters） › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| 参数（parameters） › 记录 file_id › 名称（name） | 新增 | 未记录 | file_id |
| 参数（parameters） › 记录 file_id › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 file_id › 参数路径（route_mappings） | 新增 | 未记录 | • path.file_id |
| 参数（parameters） › 记录 file_id › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 delete-file › documentation › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| routes › 记录 delete-file › documentation › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| routes › 记录 delete-file › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/files/delete-file |
| routes › 记录 delete-file › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| routes › 记录 delete-file › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| routes › 记录 delete-file › endpoint ref | 新增 | 未记录 | meta-model-api |
| routes › 记录 delete-file › ID（id） › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| routes › 记录 delete-file › ID（id） › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| routes › 记录 delete-file › ID（id） | 新增 | 未记录 | delete-file |
| routes › 记录 delete-file › HTTP 方法（method） › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| routes › 记录 delete-file › HTTP 方法（method） › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| routes › 记录 delete-file › HTTP 方法（method） | 新增 | 未记录 | DELETE |
| routes › 记录 delete-file › operation kind › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| routes › 记录 delete-file › operation kind › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| routes › 记录 delete-file › operation kind | 新增 | 未记录 | file_storage |
| routes › 记录 delete-file › API 路径（path_template） › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| routes › 记录 delete-file › API 路径（path_template） › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| routes › 记录 delete-file › API 路径（path_template） | 新增 | 未记录 | /v1/files/{file_id} |
| routes › 记录 delete-file › protocol › evidence › 记录 meta-files-delete-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 DELETE /v1/files/{file_id} Route。 |
| routes › 记录 delete-file › protocol › evidence › 记录 meta-files-delete-api › source ref | 新增 | 未记录 | meta-files-delete-api |
| routes › 记录 delete-file › protocol | 新增 | 未记录 | openai_files |

#### Capability / files › Operation / get-file-content

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| ID（id） › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| ID（id） | 新增 | 未记录 | get-file-content |
| 类别（kind） › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| 类别（kind） › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| 类别（kind） | 新增 | 未记录 | file_storage |
| 输出（output） › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| 输出（output） › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | file |
| 参数（parameters） › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 参数来自官方 Files API Route 文档。 |
| 参数（parameters） › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| 参数（parameters） › 记录 file_id › 名称（name） | 新增 | 未记录 | file_id |
| 参数（parameters） › 记录 file_id › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 file_id › 参数路径（route_mappings） | 新增 | 未记录 | • path.file_id |
| 参数（parameters） › 记录 file_id › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 get-file-content › documentation › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| routes › 记录 get-file-content › documentation › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| routes › 记录 get-file-content › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/files/retrieve-file-content |
| routes › 记录 get-file-content › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| routes › 记录 get-file-content › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| routes › 记录 get-file-content › endpoint ref | 新增 | 未记录 | meta-model-api |
| routes › 记录 get-file-content › ID（id） › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| routes › 记录 get-file-content › ID（id） › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| routes › 记录 get-file-content › ID（id） | 新增 | 未记录 | get-file-content |
| routes › 记录 get-file-content › HTTP 方法（method） › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| routes › 记录 get-file-content › HTTP 方法（method） › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| routes › 记录 get-file-content › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 get-file-content › operation kind › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| routes › 记录 get-file-content › operation kind › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| routes › 记录 get-file-content › operation kind | 新增 | 未记录 | file_storage |
| routes › 记录 get-file-content › API 路径（path_template） › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| routes › 记录 get-file-content › API 路径（path_template） › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| routes › 记录 get-file-content › API 路径（path_template） | 新增 | 未记录 | /v1/files/{file_id}/content |
| routes › 记录 get-file-content › protocol › evidence › 记录 meta-files-content-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id}/content Route。 |
| routes › 记录 get-file-content › protocol › evidence › 记录 meta-files-content-api › source ref | 新增 | 未记录 | meta-files-content-api |
| routes › 记录 get-file-content › protocol | 新增 | 未记录 | openai_files |

#### Capability / files › Operation / get-file

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| ID（id） › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| ID（id） | 新增 | 未记录 | get-file |
| 类别（kind） › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| 类别（kind） › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| 类别（kind） | 新增 | 未记录 | file_storage |
| 输出（output） › evidence › 记录 meta-files-schemas › assertion | 新增 | 未记录 | 响应字段来自官方 Files API Schema。 |
| 输出（output） › evidence › 记录 meta-files-schemas › source ref | 新增 | 未记录 | meta-files-schemas |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• bytes<br>• created_at<br>• expires_at<br>• filename<br>• object<br>• purpose<br>• status<br>• status_details |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 参数来自官方 Files API Route 文档。 |
| 参数（parameters） › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| 参数（parameters） › 记录 file_id › 名称（name） | 新增 | 未记录 | file_id |
| 参数（parameters） › 记录 file_id › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 file_id › 参数路径（route_mappings） | 新增 | 未记录 | • path.file_id |
| 参数（parameters） › 记录 file_id › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 get-file › documentation › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| routes › 记录 get-file › documentation › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| routes › 记录 get-file › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/files/retrieve-file |
| routes › 记录 get-file › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| routes › 记录 get-file › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| routes › 记录 get-file › endpoint ref | 新增 | 未记录 | meta-model-api |
| routes › 记录 get-file › ID（id） › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| routes › 记录 get-file › ID（id） › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| routes › 记录 get-file › ID（id） | 新增 | 未记录 | get-file |
| routes › 记录 get-file › HTTP 方法（method） › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| routes › 记录 get-file › HTTP 方法（method） › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| routes › 记录 get-file › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 get-file › operation kind › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| routes › 记录 get-file › operation kind › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| routes › 记录 get-file › operation kind | 新增 | 未记录 | file_storage |
| routes › 记录 get-file › API 路径（path_template） › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| routes › 记录 get-file › API 路径（path_template） › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| routes › 记录 get-file › API 路径（path_template） | 新增 | 未记录 | /v1/files/{file_id} |
| routes › 记录 get-file › protocol › evidence › 记录 meta-files-retrieve-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files/{file_id} Route。 |
| routes › 记录 get-file › protocol › evidence › 记录 meta-files-retrieve-api › source ref | 新增 | 未记录 | meta-files-retrieve-api |
| routes › 记录 get-file › protocol | 新增 | 未记录 | openai_files |

#### Capability / files › Operation / get-files

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| ID（id） › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| ID（id） | 新增 | 未记录 | get-files |
| 类别（kind） › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| 类别（kind） › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| 类别（kind） | 新增 | 未记录 | file_storage |
| 输出（output） › evidence › 记录 meta-files-schemas › assertion | 新增 | 未记录 | 响应字段来自官方 Files API Schema。 |
| 输出（output） › evidence › 记录 meta-files-schemas › source ref | 新增 | 未记录 | meta-files-schemas |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • object<br>• data<br>• first_id<br>• last_id<br>• has_more |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 参数来自官方 Files API Route 文档。 |
| 参数（parameters） › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| 参数（parameters） › 记录 after › 名称（name） | 新增 | 未记录 | after |
| 参数（parameters） › 记录 after › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 after › 参数路径（route_mappings） | 新增 | 未记录 | • query.after |
| 参数（parameters） › 记录 after › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 limit › 最大值（max） | 新增 | 未记录 | 10,000 |
| 参数（parameters） › 记录 limit › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 limit › 名称（name） | 新增 | 未记录 | limit |
| 参数（parameters） › 记录 limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 limit › 参数路径（route_mappings） | 新增 | 未记录 | • query.limit |
| 参数（parameters） › 记录 limit › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 order › 可选值（enum） | 新增 | 未记录 | • asc<br>• desc |
| 参数（parameters） › 记录 order › 名称（name） | 新增 | 未记录 | order |
| 参数（parameters） › 记录 order › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 order › 参数路径（route_mappings） | 新增 | 未记录 | • query.order |
| 参数（parameters） › 记录 order › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 purpose › 名称（name） | 新增 | 未记录 | purpose |
| 参数（parameters） › 记录 purpose › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 purpose › 参数路径（route_mappings） | 新增 | 未记录 | • query.purpose |
| 参数（parameters） › 记录 purpose › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 get-files › documentation › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| routes › 记录 get-files › documentation › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| routes › 记录 get-files › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/files/list-files |
| routes › 记录 get-files › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| routes › 记录 get-files › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| routes › 记录 get-files › endpoint ref | 新增 | 未记录 | meta-model-api |
| routes › 记录 get-files › ID（id） › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| routes › 记录 get-files › ID（id） › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| routes › 记录 get-files › ID（id） | 新增 | 未记录 | get-files |
| routes › 记录 get-files › HTTP 方法（method） › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| routes › 记录 get-files › HTTP 方法（method） › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| routes › 记录 get-files › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 get-files › operation kind › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| routes › 记录 get-files › operation kind › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| routes › 记录 get-files › operation kind | 新增 | 未记录 | file_storage |
| routes › 记录 get-files › API 路径（path_template） › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| routes › 记录 get-files › API 路径（path_template） › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| routes › 记录 get-files › API 路径（path_template） | 新增 | 未记录 | /v1/files |
| routes › 记录 get-files › protocol › evidence › 记录 meta-files-list-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 GET /v1/files Route。 |
| routes › 记录 get-files › protocol › evidence › 记录 meta-files-list-api › source ref | 新增 | 未记录 | meta-files-list-api |
| routes › 记录 get-files › protocol | 新增 | 未记录 | openai_files |

#### Capability / files › Operation / post-files

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| ID（id） › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| ID（id） | 新增 | 未记录 | post-files |
| 输入（input） › evidence › 记录 meta-files-schemas › assertion | 新增 | 未记录 | 官方上传 Schema 将必填 file 字段声明为 binary。 |
| 输入（input） › evidence › 记录 meta-files-schemas › source ref | 新增 | 未记录 | meta-files-schemas |
| 输入（input） › 记录 file › 类别（kind） | 新增 | 未记录 | file |
| 输入（input） › 记录 file › 名称（name） | 新增 | 未记录 | file |
| 输入（input） › 记录 file › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| 类别（kind） › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| 类别（kind） | 新增 | 未记录 | file_upload |
| 输出（output） › evidence › 记录 meta-files-schemas › assertion | 新增 | 未记录 | 响应字段来自官方 Files API Schema。 |
| 输出（output） › evidence › 记录 meta-files-schemas › source ref | 新增 | 未记录 | meta-files-schemas |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• bytes<br>• created_at<br>• expires_at<br>• filename<br>• object<br>• purpose<br>• status<br>• status_details |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 meta-files-schemas › assertion | 新增 | 未记录 | 请求参数来自官方 CreateFileRequest Schema。 |
| 参数（parameters） › evidence › 记录 meta-files-schemas › source ref | 新增 | 未记录 | meta-files-schemas |
| 参数（parameters） › 记录 expires_after › 名称（name） | 新增 | 未记录 | expires_after |
| 参数（parameters） › 记录 expires_after › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 expires_after › 参数路径（route_mappings） | 新增 | 未记录 | • multipart/form-data.expires_after |
| 参数（parameters） › 记录 expires_after › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 file › 名称（name） | 新增 | 未记录 | file |
| 参数（parameters） › 记录 file › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 file › 参数路径（route_mappings） | 新增 | 未记录 | • multipart/form-data.file |
| 参数（parameters） › 记录 file › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 purpose › 可选值（enum） | 新增 | 未记录 | • user_data<br>• batch |
| 参数（parameters） › 记录 purpose › 名称（name） | 新增 | 未记录 | purpose |
| 参数（parameters） › 记录 purpose › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 purpose › 参数路径（route_mappings） | 新增 | 未记录 | • multipart/form-data.purpose |
| 参数（parameters） › 记录 purpose › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 post-files › documentation › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| routes › 记录 post-files › documentation › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| routes › 记录 post-files › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/files/upload-file |
| routes › 记录 post-files › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| routes › 记录 post-files › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| routes › 记录 post-files › endpoint ref | 新增 | 未记录 | meta-model-api |
| routes › 记录 post-files › ID（id） › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| routes › 记录 post-files › ID（id） › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| routes › 记录 post-files › ID（id） | 新增 | 未记录 | post-files |
| routes › 记录 post-files › HTTP 方法（method） › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| routes › 记录 post-files › HTTP 方法（method） › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| routes › 记录 post-files › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 post-files › operation kind › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| routes › 记录 post-files › operation kind › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| routes › 记录 post-files › operation kind | 新增 | 未记录 | file_upload |
| routes › 记录 post-files › API 路径（path_template） › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| routes › 记录 post-files › API 路径（path_template） › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| routes › 记录 post-files › API 路径（path_template） | 新增 | 未记录 | /v1/files |
| routes › 记录 post-files › protocol › evidence › 记录 meta-files-upload-api › assertion | 新增 | 未记录 | 官方 Files API 文档列出 POST /v1/files Route。 |
| routes › 记录 post-files › protocol › evidence › 记录 meta-files-upload-api › source ref | 新增 | 未记录 | meta-files-upload-api |
| routes › 记录 post-files › protocol | 新增 | 未记录 | openai_files |

#### API endpoint / meta-model-api-realtime

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | 来源没有声明该 Host 的物理部署 Region。 |
| api region › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| api region | 新增 | 未记录 | 未标注 |
| API 地址（base_url） › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | 官方实时转录文档列出的 WebSocket Host。 |
| API 地址（base_url） › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| API 地址（base_url） | 新增 | 未记录 | https://api.meta.ai |
| documentation › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | 官方实时转录 API 参考。 |
| documentation › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/voice/realtime |
| ID（id） › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | 官方语音 API 参考将实时转录定义为 WebSocket。 |
| ID（id） › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| ID（id） | 新增 | 未记录 | meta-model-api-realtime |

#### API endpoint / meta-model-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方文档没有声明该 API Host 的物理部署 Region；global 是账号市场标签，不用来推断 API Region。 |
| api region › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| api region | 新增 | 未记录 | 未标注 |
| API 地址（base_url） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| API 地址（base_url） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| API 地址（base_url） | 新增 | 未记录 | https://api.meta.ai/v1 |
| documentation › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| documentation › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference |
| ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| ID（id） | 新增 | 未记录 | meta-model-api |

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| ID（id） | 新增 | 未记录 | global |
| 名称（name） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 名称（name） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 名称（name） | 新增 | 未记录 | Meta Model API |
| plans | 新增 | 未记录 | 空列表 |

#### Model / muse-image-1.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Image |
| operations › 记录 image_generation › ID（id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › ID（id） › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Image/muse-image-1.0 |
| operations › 记录 image_generation › ID（id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › ID（id） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › ID（id） › evidence › 第 2 项 › locator | 新增 | 未记录 | POST /v1/images/generations |
| operations › 记录 image_generation › ID（id） › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › ID（id） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › ID（id） › evidence › 第 3 项 › locator | 新增 | 未记录 | Muse Image/muse-image-1.0 |
| operations › 记录 image_generation › ID（id） › evidence › 第 3 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › ID（id） › evidence › 第 4 项 › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › ID（id） › evidence › 第 4 项 › locator | 新增 | 未记录 | POST /v1/images/edits |
| operations › 记录 image_generation › ID（id） › evidence › 第 4 项 › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › ID（id） | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › 输入（input） › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | 图片编辑文档说明可提供一个或多个参考图像。 |
| operations › 记录 image_generation › 输入（input） › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › 输入（input） › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | 图片编辑文档说明可提供一个或多个参考图像。 |
| operations › 记录 image_generation › 输入（input） › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › 输入（input） › 记录 images[] › 类别（kind） | 新增 | 未记录 | image |
| operations › 记录 image_generation › 输入（input） › 记录 images[] › 名称（name） | 新增 | 未记录 | images[] |
| operations › 记录 image_generation › 输入（input） › 记录 images[] › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Image/muse-image-1.0 |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 2 项 › locator | 新增 | 未记录 | POST /v1/images/generations |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 3 项 › locator | 新增 | 未记录 | Muse Image/muse-image-1.0 |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 3 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 4 项 › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 4 项 › locator | 新增 | 未记录 | POST /v1/images/edits |
| operations › 记录 image_generation › 类别（kind） › evidence › 第 4 项 › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › 类别（kind） | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › 输出（output） › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | 图片 API 返回图像数据或临时签名 URL。 |
| operations › 记录 image_generation › 输出（output） › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › 输出（output） › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | 图片 API 返回图像数据或临时签名 URL。 |
| operations › 记录 image_generation › 输出（output） › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › 输出（output） › 记录 0 › artifact › expires in seconds | 新增 | 未记录 | 明确未知 |
| operations › 记录 image_generation › 输出（output） › 记录 0 › artifact › 类别（kind） | 新增 | 未记录 | url |
| operations › 记录 image_generation › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • data[].b64_json<br>• data[].url<br>• output_format |
| operations › 记录 image_generation › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | image |
| operations › 记录 image_generation › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 image_generation › 参数（parameters） › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | 图像请求字段来自 Meta 图片 API 官方请求 Schema。 |
| operations › 记录 image_generation › 参数（parameters） › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › 参数（parameters） › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | 图像请求字段来自 Meta 图片 API 官方请求 Schema。 |
| operations › 记录 image_generation › 参数（parameters） › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › 参数（parameters） › evidence › 记录 meta-image-schemas › assertion | 新增 | 未记录 | 图片生成与编辑参数、取值范围和必填性来自官方 Schema。 |
| operations › 记录 image_generation › 参数（parameters） › evidence › 记录 meta-image-schemas › source ref | 新增 | 未记录 | meta-image-schemas |
| operations › 记录 image_generation › 参数（parameters） › 记录 image › 名称（name） | 新增 | 未记录 | image |
| operations › 记录 image_generation › 参数（parameters） › 记录 image › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 image_generation › 参数（parameters） › 记录 image › 参数路径（route_mappings） | 新增 | 未记录 | • form:image |
| operations › 记录 image_generation › 参数（parameters） › 记录 image › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 image_generation › 参数（parameters） › 记录 images › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 image_generation › 参数（parameters） › 记录 images › 名称（name） | 新增 | 未记录 | images |
| operations › 记录 image_generation › 参数（parameters） › 记录 images › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 image_generation › 参数（parameters） › 记录 images › 参数路径（route_mappings） | 新增 | 未记录 | • /images |
| operations › 记录 image_generation › 参数（parameters） › 记录 images › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 image_generation › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • muse-image-1.0 |
| operations › 记录 image_generation › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 image_generation › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 image_generation › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 image_generation › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 image_generation › 参数（parameters） › 记录 n › 默认值（default） | 新增 | 未记录 | 1 |
| operations › 记录 image_generation › 参数（parameters） › 记录 n › 最大值（max） | 新增 | 未记录 | 10 |
| operations › 记录 image_generation › 参数（parameters） › 记录 n › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 image_generation › 参数（parameters） › 记录 n › 名称（name） | 新增 | 未记录 | n |
| operations › 记录 image_generation › 参数（parameters） › 记录 n › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 image_generation › 参数（parameters） › 记录 n › 参数路径（route_mappings） | 新增 | 未记录 | • /n |
| operations › 记录 image_generation › 参数（parameters） › 记录 n › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 image_generation › 参数（parameters） › 记录 output_format › 默认值（default） | 新增 | 未记录 | webp |
| operations › 记录 image_generation › 参数（parameters） › 记录 output_format › 可选值（enum） | 新增 | 未记录 | • webp<br>• png<br>• jpeg |
| operations › 记录 image_generation › 参数（parameters） › 记录 output_format › 名称（name） | 新增 | 未记录 | output_format |
| operations › 记录 image_generation › 参数（parameters） › 记录 output_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 image_generation › 参数（parameters） › 记录 output_format › 参数路径（route_mappings） | 新增 | 未记录 | • /output_format |
| operations › 记录 image_generation › 参数（parameters） › 记录 output_format › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 image_generation › 参数（parameters） › 记录 prompt › 名称（name） | 新增 | 未记录 | prompt |
| operations › 记录 image_generation › 参数（parameters） › 记录 prompt › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 image_generation › 参数（parameters） › 记录 prompt › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt |
| operations › 记录 image_generation › 参数（parameters） › 记录 prompt › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 image_generation › 参数（parameters） › 记录 response_format › 默认值（default） | 新增 | 未记录 | b64_json |
| operations › 记录 image_generation › 参数（parameters） › 记录 response_format › 可选值（enum） | 新增 | 未记录 | • url<br>• b64_json |
| operations › 记录 image_generation › 参数（parameters） › 记录 response_format › 名称（name） | 新增 | 未记录 | response_format |
| operations › 记录 image_generation › 参数（parameters） › 记录 response_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 image_generation › 参数（parameters） › 记录 response_format › 参数路径（route_mappings） | 新增 | 未记录 | • /response_format |
| operations › 记录 image_generation › 参数（parameters） › 记录 response_format › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 image_generation › 参数（parameters） › 记录 size › 名称（name） | 新增 | 未记录 | size |
| operations › 记录 image_generation › 参数（parameters） › 记录 size › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 image_generation › 参数（parameters） › 记录 size › 参数路径（route_mappings） | 新增 | 未记录 | • /size |
| operations › 记录 image_generation › 参数（parameters） › 记录 size › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 image_generation › routes › 记录 image-edit › documentation › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › routes › 记录 image-edit › documentation › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › routes › 记录 image-edit › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/images/edit-image |
| operations › 记录 image_generation › routes › 记录 image-edit › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 image_generation › routes › 记录 image-edit › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 image_generation › routes › 记录 image-edit › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 image_generation › routes › 记录 image-edit › ID（id） › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › routes › 记录 image-edit › ID（id） › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › routes › 记录 image-edit › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › routes › 记录 image-edit › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › routes › 记录 image-edit › ID（id） | 新增 | 未记录 | image-edit |
| operations › 记录 image_generation › routes › 记录 image-edit › HTTP 方法（method） › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › routes › 记录 image-edit › HTTP 方法（method） › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › routes › 记录 image-edit › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 image_generation › routes › 记录 image-edit › operation kind › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › routes › 记录 image-edit › operation kind › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › routes › 记录 image-edit › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › routes › 记录 image-edit › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › routes › 记录 image-edit › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-edit › API 路径（path_template） › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › routes › 记录 image-edit › API 路径（path_template） › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › routes › 记录 image-edit › API 路径（path_template） | 新增 | 未记录 | /v1/images/edits |
| operations › 记录 image_generation › routes › 记录 image-edit › protocol › evidence › 记录 meta-image-edit-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/edits，用于编辑/合成图像。 |
| operations › 记录 image_generation › routes › 记录 image-edit › protocol › evidence › 记录 meta-image-edit-api › source ref | 新增 | 未记录 | meta-image-edit-api |
| operations › 记录 image_generation › routes › 记录 image-edit › protocol | 新增 | 未记录 | openai_images |
| operations › 记录 image_generation › routes › 记录 image-edit › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › routes › 记录 image-edit › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › routes › 记录 image-edit › provider model ids | 新增 | 未记录 | • muse-image-1.0 |
| operations › 记录 image_generation › routes › 记录 image-generate › documentation › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › routes › 记录 image-generate › documentation › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › routes › 记录 image-generate › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/images/create-image |
| operations › 记录 image_generation › routes › 记录 image-generate › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 image_generation › routes › 记录 image-generate › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 image_generation › routes › 记录 image-generate › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 image_generation › routes › 记录 image-generate › ID（id） › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › routes › 记录 image-generate › ID（id） › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › routes › 记录 image-generate › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › routes › 记录 image-generate › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › routes › 记录 image-generate › ID（id） | 新增 | 未记录 | image-generate |
| operations › 记录 image_generation › routes › 记录 image-generate › HTTP 方法（method） › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › routes › 记录 image-generate › HTTP 方法（method） › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › routes › 记录 image-generate › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 image_generation › routes › 记录 image-generate › operation kind › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › routes › 记录 image-generate › operation kind › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › routes › 记录 image-generate › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › routes › 记录 image-generate › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › routes › 记录 image-generate › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-generate › API 路径（path_template） › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › routes › 记录 image-generate › API 路径（path_template） › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › routes › 记录 image-generate › API 路径（path_template） | 新增 | 未记录 | /v1/images/generations |
| operations › 记录 image_generation › routes › 记录 image-generate › protocol › evidence › 记录 meta-image-create-api › assertion | 新增 | 未记录 | Meta 图片 API 文档明确列出 POST /v1/images/generations，用于生成图像。 |
| operations › 记录 image_generation › routes › 记录 image-generate › protocol › evidence › 记录 meta-image-create-api › source ref | 新增 | 未记录 | meta-image-create-api |
| operations › 记录 image_generation › routes › 记录 image-generate › protocol | 新增 | 未记录 | openai_images |
| operations › 记录 image_generation › routes › 记录 image-generate › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 image_generation › routes › 记录 image-generate › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 image_generation › routes › 记录 image-generate › provider model ids | 新增 | 未记录 | • muse-image-1.0 |
| operations › 记录 muse-image-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-image-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-image-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 muse-image-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-image-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › ID（id） | 新增 | 未记录 | muse-image-1.0-text-generation-responses |
| operations › 记录 muse-image-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-image-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-image-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 muse-image-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-image-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › ID（id） | 新增 | 未记录 | muse-image-1.0-responses |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-image-1.0-text-generation-responses › routes › 记录 muse-image-1.0-responses › provider model ids | 新增 | 未记录 | • muse-image-1.0 |
| prices › 记录 muse-image-1.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-image-1.0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Generated image 的计量价格 $0.01 per image. |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Generated image 的计量价格 $0.01 per image. |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Generated image 的计量价格 $0.01 per image. |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Generated image 的计量价格 $0.01 per image. |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计费指标（metric） | 新增 | 未记录 | generated_image |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| prices › 记录 muse-image-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image | 新增 | 未记录 | 0.01 |
| prices › 记录 muse-image-1.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| prices › 记录 muse-image-1.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-image-1.0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-image-1.0 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-image-1.0 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-image-1.0 列出该型号。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / muse-spark-1.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Spark 1.1 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.1-text-generation-anthropic_messages |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.1-anthropic_messages |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › protocol | 新增 | 未记录 | anthropic_messages |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-anthropic_messages › routes › 记录 muse-spark-1.1-anthropic_messages › provider model ids | 新增 | 未记录 | • muse-spark-1.1 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.1-text-generation-openai_chat_completions |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.1-openai_chat_completions |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › API 路径（path_template） | 新增 | 未记录 | /v1/chat/completions |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › protocol | 新增 | 未记录 | openai_chat_completions |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.1-openai_chat_completions › provider model ids | 新增 | 未记录 | • muse-spark-1.1 |
| operations › 记录 muse-spark-1.1-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › ID（id） | 新增 | 未记录 | muse-spark-1.1-text-generation-responses |
| operations › 记录 muse-spark-1.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › ID（id） | 新增 | 未记录 | muse-spark-1.1-responses |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.1-text-generation-responses › routes › 记录 muse-spark-1.1-responses › provider model ids | 新增 | 未记录 | • muse-spark-1.1 |
| prices › 记录 muse-spark-1.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.1 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | usage.mode |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | Standard mode |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 定价表以美元符号标注金额。 |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.15 |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 1.25 |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.1 › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 4.25 |
| prices › 记录 muse-spark-1.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| prices › 记录 muse-spark-1.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-spark-1.1 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.1 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.1 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.1 标记为可用于 Model API 按量服务。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / muse-spark-1.2-contributor

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Spark 1.2 Contributor |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.2-contributor-text-generation-anthropic_messages |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.2-contributor-anthropic_messages |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › protocol | 新增 | 未记录 | anthropic_messages |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-contributor-anthropic_messages › provider model ids | 新增 | 未记录 | • muse-spark-1.2-contributor |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.2-contributor-text-generation-openai_chat_completions |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.2-contributor-openai_chat_completions |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › API 路径（path_template） | 新增 | 未记录 | /v1/chat/completions |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › protocol | 新增 | 未记录 | openai_chat_completions |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-contributor-openai_chat_completions › provider model ids | 新增 | 未记录 | • muse-spark-1.2-contributor |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › ID（id） | 新增 | 未记录 | muse-spark-1.2-contributor-text-generation-responses |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › ID（id） | 新增 | 未记录 | muse-spark-1.2-contributor-responses |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-contributor-text-generation-responses › routes › 记录 muse-spark-1.2-contributor-responses › provider model ids | 新增 | 未记录 | • muse-spark-1.2-contributor |
| prices › 记录 muse-spark-1.2-contributor › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.2-contributor › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Contributor mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | usage.mode |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | Contributor mode |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 定价表以美元符号标注金额。 |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Contributor mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Contributor mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.002 |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 0.10 |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.2-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 0.20 |
| prices › 记录 muse-spark-1.2-contributor › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| prices › 记录 muse-spark-1.2-contributor › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-spark-1.2-contributor › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.2-contributor |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.2-contributor |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2-contributor 标记为可用于 Model API 按量服务。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / muse-spark-1.2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Spark 1.2 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.2-text-generation-anthropic_messages |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.2-anthropic_messages |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › protocol | 新增 | 未记录 | anthropic_messages |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-anthropic_messages › routes › 记录 muse-spark-1.2-anthropic_messages › provider model ids | 新增 | 未记录 | • muse-spark-1.2 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.2-text-generation-openai_chat_completions |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.2-openai_chat_completions |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › API 路径（path_template） | 新增 | 未记录 | /v1/chat/completions |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › protocol | 新增 | 未记录 | openai_chat_completions |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.2-openai_chat_completions › provider model ids | 新增 | 未记录 | • muse-spark-1.2 |
| operations › 记录 muse-spark-1.2-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › ID（id） | 新增 | 未记录 | muse-spark-1.2-text-generation-responses |
| operations › 记录 muse-spark-1.2-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › ID（id） | 新增 | 未记录 | muse-spark-1.2-responses |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.2-text-generation-responses › routes › 记录 muse-spark-1.2-responses › provider model ids | 新增 | 未记录 | • muse-spark-1.2 |
| prices › 记录 muse-spark-1.2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.2 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | usage.mode |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | Standard mode |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 定价表以美元符号标注金额。 |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.15 |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 1.25 |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.2 › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 4.25 |
| prices › 记录 muse-spark-1.2 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| prices › 记录 muse-spark-1.2 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-spark-1.2 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.2 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.2 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.2 标记为可用于 Model API 按量服务。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / muse-spark-1.3-contributor

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Spark 1.3 Contributor |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.3-contributor-text-generation-anthropic_messages |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.3-contributor-anthropic_messages |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › protocol | 新增 | 未记录 | anthropic_messages |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-contributor-anthropic_messages › provider model ids | 新增 | 未记录 | • muse-spark-1.3-contributor |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.3-contributor-text-generation-openai_chat_completions |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.3-contributor-openai_chat_completions |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › API 路径（path_template） | 新增 | 未记录 | /v1/chat/completions |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › protocol | 新增 | 未记录 | openai_chat_completions |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-contributor-openai_chat_completions › provider model ids | 新增 | 未记录 | • muse-spark-1.3-contributor |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › ID（id） | 新增 | 未记录 | muse-spark-1.3-contributor-text-generation-responses |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › ID（id） | 新增 | 未记录 | muse-spark-1.3-contributor-responses |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-contributor-text-generation-responses › routes › 记录 muse-spark-1.3-contributor-responses › provider model ids | 新增 | 未记录 | • muse-spark-1.3-contributor |
| prices › 记录 muse-spark-1.3-contributor › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.3-contributor › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Contributor mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | usage.mode |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | Contributor mode |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 定价表以美元符号标注金额。 |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Contributor mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Contributor mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.002 |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 0.10 |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.3-contributor › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 0.20 |
| prices › 记录 muse-spark-1.3-contributor › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| prices › 记录 muse-spark-1.3-contributor › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-spark-1.3-contributor › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.3-contributor |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.3-contributor |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3-contributor 标记为可用于 Model API 按量服务。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / muse-spark-1.3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Spark 1.3 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.3-text-generation-anthropic_messages |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › ID（id） | 新增 | 未记录 | muse-spark-1.3-anthropic_messages |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › protocol | 新增 | 未记录 | anthropic_messages |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-anthropic_messages › routes › 记录 muse-spark-1.3-anthropic_messages › provider model ids | 新增 | 未记录 | • muse-spark-1.3 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.3-text-generation-openai_chat_completions |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-spark-1.3-openai_chat_completions |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › API 路径（path_template） | 新增 | 未记录 | /v1/chat/completions |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › protocol | 新增 | 未记录 | openai_chat_completions |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-openai_chat_completions › routes › 记录 muse-spark-1.3-openai_chat_completions › provider model ids | 新增 | 未记录 | • muse-spark-1.3 |
| operations › 记录 muse-spark-1.3-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › ID（id） | 新增 | 未记录 | muse-spark-1.3-text-generation-responses |
| operations › 记录 muse-spark-1.3-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › ID（id） | 新增 | 未记录 | muse-spark-1.3-responses |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-spark-1.3-text-generation-responses › routes › 记录 muse-spark-1.3-responses › provider model ids | 新增 | 未记录 | • muse-spark-1.3 |
| operations › 记录 web-search › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › ID（id） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › ID（id） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › ID（id） | 新增 | 未记录 | web-search |
| operations › 记录 web-search › 输入（input） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › 输入（input） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › 输入（input） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › 输入（input） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 web-search › 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| operations › 记录 web-search › 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 web-search › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › 类别（kind） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › 类别（kind） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › 类别（kind） | 新增 | 未记录 | web_search |
| operations › 记录 web-search › 输出（output） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › 输出（output） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › 输出（output） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › 输出（output） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › 输出（output） › 第 1 项 › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 web-search › 输出（output） › 第 2 项 › fields | 新增 | 未记录 | • output[].type=web_search_call<br>• output[].content[].annotations[].type=url_citation |
| operations › 记录 web-search › 输出（output） › 第 2 项 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 web-search › 参数（parameters） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › 参数（parameters） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › 参数（parameters） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › 参数（parameters） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • web_search |
| operations › 记录 web-search › 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| operations › 记录 web-search › 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 web-search › 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/type |
| operations › 记录 web-search › 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › documentation › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › documentation › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › documentation › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › documentation › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › endpoint ref › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › endpoint ref › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › endpoint ref › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › endpoint ref › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › ID（id） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › ID（id） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › ID（id） | 新增 | 未记录 | muse-spark-1.3-web-search-responses |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › HTTP 方法（method） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › HTTP 方法（method） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › HTTP 方法（method） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › HTTP 方法（method） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › operation kind › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › operation kind › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › operation kind | 新增 | 未记录 | web_search |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › API 路径（path_template） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › API 路径（path_template） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › API 路径（path_template） › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › API 路径（path_template） › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › protocol › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › protocol › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › protocol › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › protocol › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › provider model ids › evidence › 记录 meta-search-grounding › assertion | 新增 | 未记录 | 官方网页搜索示例以 muse-spark-1.3 调用 Responses API 的 web_search 工具。 |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › provider model ids › evidence › 记录 meta-search-grounding › source ref | 新增 | 未记录 | meta-search-grounding |
| operations › 记录 web-search › routes › 记录 muse-spark-1.3-web-search-responses › provider model ids | 新增 | 未记录 | • muse-spark-1.3 |
| prices › 记录 muse-spark-1.3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.3 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | usage.mode |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | Standard mode |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 定价表以美元符号标注金额。 |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Spark 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.15 |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 1.25 |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-spark-1.3 › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 4.25 |
| prices › 记录 muse-spark-1.3 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| prices › 记录 muse-spark-1.3 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-spark-1.3 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.3 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-spark-1.3 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-spark-1.3 标记为可用于 Model API 按量服务。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / muse-voice-transcribe-1.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Voice Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › ID（id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › ID（id） › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › ID（id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › ID（id） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › ID（id） › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › ID（id） › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › ID（id） | 新增 | 未记录 | muse-voice-transcribe-1.0-speech-recognition |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › 类别（kind） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › 类别（kind） › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › 类别（kind） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › 类别（kind） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › 类别（kind） › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › 类别（kind） › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › 类别（kind） | 新增 | 未记录 | speech_recognition |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › documentation › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › documentation › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › documentation › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › documentation › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › documentation › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › documentation › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › ID（id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › ID（id） › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › ID（id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › ID（id） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › ID（id） › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › ID（id） › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › ID（id） | 新增 | 未记录 | muse-voice-transcribe-1.0-meta-speech-transcription |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › HTTP 方法（method） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › HTTP 方法（method） › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › HTTP 方法（method） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › HTTP 方法（method） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › HTTP 方法（method） › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › HTTP 方法（method） › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › operation kind › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › operation kind › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › operation kind › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › operation kind › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › operation kind › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › operation kind › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › operation kind | 新增 | 未记录 | speech_recognition |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › API 路径（path_template） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › API 路径（path_template） › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › API 路径（path_template） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › API 路径（path_template） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › API 路径（path_template） › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › API 路径（path_template） › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › API 路径（path_template） | 新增 | 未记录 | /v1/asr/transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › protocol › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › protocol › evidence › 第 1 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › protocol › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › protocol › evidence › 第 2 项 › assertion | 新增 | 未记录 | Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint ( wss://api.meta.ai/v1/asr/realtime ) for live audio, or the file endpoint ( POST /v1/asr/transcribe ) for a recording you already have. |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › protocol › evidence › 第 2 项 › locator | 新增 | 未记录 | Muse Voice Transcribe/Transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › protocol › evidence › 第 2 项 › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › protocol | 新增 | 未记录 | meta-speech-transcription |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-meta-speech-transcription › provider model ids | 新增 | 未记录 | • muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › documentation › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › documentation › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › documentation › evidence › 记录 meta-voice-transcribe-api › assertion | 新增 | 未记录 | 官方语音转写文档的请求示例列出该文件转写 API 路由。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › documentation › evidence › 记录 meta-voice-transcribe-api › source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/voice/transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › ID（id） › evidence › 记录 meta-voice-transcribe-api › assertion | 新增 | 未记录 | 官方语音转写文档的请求示例列出该文件转写 API 路由。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › ID（id） › evidence › 记录 meta-voice-transcribe-api › source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › ID（id） | 新增 | 未记录 | muse-voice-transcribe-1.0-speech-transcription |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › HTTP 方法（method） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › HTTP 方法（method） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › HTTP 方法（method） › evidence › 记录 meta-voice-transcribe-api › assertion | 新增 | 未记录 | 官方语音转写文档的请求示例列出该文件转写 API 路由。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › HTTP 方法（method） › evidence › 记录 meta-voice-transcribe-api › source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › operation kind › evidence › 记录 meta-voice-transcribe-api › assertion | 新增 | 未记录 | 官方语音转写文档的请求示例列出该文件转写 API 路由。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › operation kind › evidence › 记录 meta-voice-transcribe-api › source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › operation kind | 新增 | 未记录 | speech_recognition |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › API 路径（path_template） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › API 路径（path_template） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › API 路径（path_template） › evidence › 记录 meta-voice-transcribe-api › assertion | 新增 | 未记录 | 官方语音转写文档的请求示例列出该文件转写 API 路由。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › API 路径（path_template） › evidence › 记录 meta-voice-transcribe-api › source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › API 路径（path_template） | 新增 | 未记录 | /v1/asr/transcribe |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › protocol › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › protocol › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › protocol › evidence › 记录 meta-voice-transcribe-api › assertion | 新增 | 未记录 | 官方语音转写文档的请求示例列出该文件转写 API 路由。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › protocol › evidence › 记录 meta-voice-transcribe-api › source ref | 新增 | 未记录 | meta-voice-transcribe-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › protocol | 新增 | 未记录 | meta-speech-transcription |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 muse-voice-transcribe-1.0-speech-transcription › provider model ids | 新增 | 未记录 | • muse-voice-transcribe-1.0 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › documentation › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | Muse Voice Transcribe 通过 WebSocket 实时转录音频。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › documentation › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/api-reference/voice/realtime |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › endpoint ref › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | Muse Voice Transcribe 通过 WebSocket 实时转录音频。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › endpoint ref › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › endpoint ref | 新增 | 未记录 | meta-model-api-realtime |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › ID（id） › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | Muse Voice Transcribe 通过 WebSocket 实时转录音频。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › ID（id） › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › ID（id） | 新增 | 未记录 | speech-realtime |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › HTTP 方法（method） › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | Muse Voice Transcribe 通过 WebSocket 实时转录音频。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › HTTP 方法（method） › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › HTTP 方法（method） | 新增 | 未记录 | WS |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › operation kind › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | Muse Voice Transcribe 通过 WebSocket 实时转录音频。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › operation kind › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › operation kind | 新增 | 未记录 | speech_recognition |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › API 路径（path_template） › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | Muse Voice Transcribe 通过 WebSocket 实时转录音频。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › API 路径（path_template） › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › API 路径（path_template） | 新增 | 未记录 | /v1/asr/realtime |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › protocol › evidence › 记录 meta-voice-realtime-api › assertion | 新增 | 未记录 | Muse Voice Transcribe 通过 WebSocket 实时转录音频。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › protocol › evidence › 记录 meta-voice-realtime-api › source ref | 新增 | 未记录 | meta-voice-realtime-api |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › protocol | 新增 | 未记录 | websocket |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-voice-transcribe-1.0-speech-recognition › routes › 记录 speech-realtime › provider model ids | 新增 | 未记录 | • muse-voice-transcribe-1.0 |
| prices › 记录 muse-voice-transcribe-1.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-voice-transcribe-1.0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Audio processed 的计量价格 $0.18 per hour. |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Audio processed 的计量价格 $0.18 per hour. |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Audio processed 的计量价格 $0.18 per hour. |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方价格表列出 Audio processed 的计量价格 $0.18 per hour. |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 audio_processed › 计费指标（metric） | 新增 | 未记录 | audio_processed |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 audio_processed › 计量单位（unit） | 新增 | 未记录 | per_hour |
| prices › 记录 muse-voice-transcribe-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 audio_processed | 新增 | 未记录 | 0.18 |
| prices › 记录 muse-voice-transcribe-1.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| prices › 记录 muse-voice-transcribe-1.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-voice-transcribe-1.0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-voice-transcribe-1.0 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-voice-transcribe-1.0 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID muse-voice-transcribe-1.0 列出该型号。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / muse-wonder-1.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Muse Wonder |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › ID（id） | 新增 | 未记录 | muse-wonder-1.0-text-generation-anthropic_messages |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › ID（id） | 新增 | 未记录 | muse-wonder-1.0-anthropic_messages |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/messages 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Messages 格式关联到 POST /v1/messages。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › protocol | 新增 | 未记录 | anthropic_messages |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-anthropic_messages › routes › 记录 muse-wonder-1.0-anthropic_messages › provider model ids | 新增 | 未记录 | • muse-wonder-1.0 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-wonder-1.0-text-generation-openai_chat_completions |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › ID（id） | 新增 | 未记录 | muse-wonder-1.0-openai_chat_completions |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/chat/completions 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › API 路径（path_template） | 新增 | 未记录 | /v1/chat/completions |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Chat Completions 格式关联到 POST /v1/chat/completions。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › protocol | 新增 | 未记录 | openai_chat_completions |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-openai_chat_completions › routes › 记录 muse-wonder-1.0-openai_chat_completions › provider model ids | 新增 | 未记录 | • muse-wonder-1.0 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › ID（id） | 新增 | 未记录 | muse-wonder-1.0-text-generation-responses |
| operations › 记录 muse-wonder-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › ID（id） | 新增 | 未记录 | muse-wonder-1.0-responses |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 muse-wonder-1.0-text-generation-responses › routes › 记录 muse-wonder-1.0-responses › provider model ids | 新增 | 未记录 | • muse-wonder-1.0 |
| prices › 记录 muse-wonder-1.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-wonder-1.0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Wonder 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | usage.mode |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › operator | 新增 | 未记录 | eq |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | Standard mode |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 定价表以美元符号标注金额。 |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Wonder 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › assertion | 新增 | 未记录 | 官方 Muse Wonder 价格表列出 Standard mode 的每百万 Token 费率。 |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 meta-pricing › source ref | 新增 | 未记录 | meta-pricing |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.20 |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 4.00 |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 muse-wonder-1.0 › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 20.00 |
| prices › 记录 muse-wonder-1.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| prices › 记录 muse-wonder-1.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| prices › 记录 muse-wonder-1.0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-wonder-1.0 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | muse-wonder-1.0 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方型号表将 muse-wonder-1.0 标记为可用于 Model API 按量服务。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / sam-3.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| 展示名称（display_name） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 展示名称（display_name） | 新增 | 未记录 | Segment Anything Model |
| operations › 记录 sam-3.1-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 sam-3.1-text-generation-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 sam-3.1-text-generation-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| operations › 记录 sam-3.1-text-generation-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 sam-3.1-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › ID（id） | 新增 | 未记录 | sam-3.1-text-generation-responses |
| operations › 记录 sam-3.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 sam-3.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 sam-3.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| operations › 记录 sam-3.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 sam-3.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › 类别（kind） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › documentation › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › documentation › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › documentation | 新增 | 未记录 | https://dev.meta.ai/docs/protocols |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › endpoint ref › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta Model API 官方 API Reference 将 Base URL 列为 https://api.meta.ai/v1。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › endpoint ref › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › endpoint ref | 新增 | 未记录 | meta-model-api |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › ID（id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › ID（id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › ID（id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › ID（id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › ID（id） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › ID（id） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › ID（id） | 新增 | 未记录 | sam-3.1-responses |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › HTTP 方法（method） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › operation kind › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | Meta API Reference 明确列出 POST /v1/responses 路由。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › operation kind › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › operation kind › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › operation kind › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › operation kind › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › operation kind › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › API 路径（path_template） › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › API 路径（path_template） › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › API 路径（path_template） | 新增 | 未记录 | /v1/responses |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › protocol › evidence › 记录 meta-protocols › assertion | 新增 | 未记录 | 官方协议目录将 Responses 格式关联到 POST /v1/responses。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › protocol › evidence › 记录 meta-protocols › source ref | 新增 | 未记录 | meta-protocols |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › provider model ids › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › provider model ids › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| operations › 记录 sam-3.1-text-generation-responses › routes › 记录 sam-3.1-responses › provider model ids | 新增 | 未记录 | • sam-3.1 |
| prices › 第 1 项 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 第 1 项 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Image segmentation 的计量价格 $2.50 per 1,000 images. |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Image segmentation |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Image segmentation 的计量价格 $2.50 per 1,000 images. |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Image segmentation |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Image segmentation 的计量价格 $2.50 per 1,000 images. |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Image segmentation |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Image segmentation 的计量价格 $2.50 per 1,000 images. |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Image segmentation |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | image_segmentation |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1k_images |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model/sam-3.1 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | sam-3.1 |
| prices › 第 2 项 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 第 2 项 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Video segmentation 的计量价格 $0.20 per 1,000 frames. |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Video segmentation |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Video segmentation 的计量价格 $0.20 per 1,000 frames. |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Video segmentation |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Video segmentation 的计量价格 $0.20 per 1,000 frames. |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Video segmentation |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方价格表列出 Video segmentation 的计量价格 $0.20 per 1,000 frames. |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model 3.1/Video segmentation |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | video_segmentation |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1k_frames |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › locator | 新增 | 未记录 | Segment Anything Model/sam-3.1 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | meta-models |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | sam-3.1 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | sam-3.1 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › assertion | 新增 | 未记录 | 官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。 |
| 服务线 ID（service_id） › evidence › 记录 meta-api-reference › source ref | 新增 | 未记录 | meta-api-reference |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 meta-models › assertion | 新增 | 未记录 | 官方 Model API 目录以精确 ID sam-3.1 列出该型号。 |
| supply observations › 记录 0 › evidence › 记录 meta-models › source ref | 新增 | 未记录 | meta-models |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `meta-models` · Meta Model API 通用模型目录与规格 | https://dev.meta.ai/docs/models | 2026-11-05T08:15:22.184Z | 200 | `sha256:cc572d62534c612b2c261c9f41f54e4ee01db2c3089190e0147b6a2fe6324752` |
| global | `meta-pricing` · Meta Model API 按量定价与限额 | https://dev.meta.ai/docs/pricing-rate-limits | 2026-11-05T08:15:22.186Z | 200 | `sha256:f5e5285f88adc27be7393202e484baf041edaaf44b6dc7ae8604a5a33a28a7cc` |
| global | `meta-subscriptions` · Muse Code 订阅计划与权益 | https://dev.meta.ai/docs/muse-code/subscriptions | 2026-11-05T08:15:22.657Z | 200 | `sha256:8f2486fbe7eedcaf8da6f827848e351fc5749f0654e0dfbdc1af3d6b776b12e6` |
| global | `meta-models-list` · Meta models.list 账号可用目录 API 参考（实际调用需 Key） | https://dev.meta.ai/docs/api-reference/models/list-models | 2026-11-05T08:15:22.628Z | 200 | `sha256:5651e31e0c8ba271537d4f3e0a9902c588a36884a9822d7d99aec999d4957900` |
| global | `meta-api-reference` · Meta Model API 通用 API 参考 | https://dev.meta.ai/docs/api-reference | 2026-11-05T08:15:23.178Z | 200 | `sha256:616f8fb329136948f1a052642ae95c9cb04530809876248d7b151a2123547292` |
| global | `meta-files-upload-api` · Files API 上传文件参考 | https://dev.meta.ai/docs/api-reference/files/upload-file | 2026-11-05T08:15:23.208Z | 200 | `sha256:c1e33e628dbef9ff56c04b0132e4b7931e7396bd064fb5aa8c8eb5865f980ff1` |
| global | `meta-files-list-api` · Files API 列表参考 | https://dev.meta.ai/docs/api-reference/files/list-files | 2026-11-05T08:15:23.669Z | 200 | `sha256:fe50e1cfbccbeab5da6a2a4eaaff8b3c8d87e0b4177c6882ced5ff30d1de76b2` |
| global | `meta-files-retrieve-api` · Files API 读取文件参考 | https://dev.meta.ai/docs/api-reference/files/retrieve-file | 2026-11-05T08:15:23.619Z | 200 | `sha256:00d121b76de1bf8368018c75019feac7a848864d0bb5a705594949b46b45136c` |
| global | `meta-files-content-api` · Files API 下载文件内容参考 | https://dev.meta.ai/docs/api-reference/files/retrieve-file-content | 2026-11-05T08:15:24.075Z | 200 | `sha256:461b6b76d2bea69a305f616be7550fc3275712f7143db2530ef6fc17c59c464e` |
| global | `meta-files-delete-api` · Files API 删除文件参考 | https://dev.meta.ai/docs/api-reference/files/delete-file | 2026-11-05T08:15:24.136Z | 200 | `sha256:1bafc18364ed9904d87938fd766bbb922d9ddba35f70d107b5ffa2739746f13b` |
| global | `meta-files-schemas` · Files API 请求与响应 Schema | https://dev.meta.ai/docs/api-reference/files/schemas | 2026-11-05T08:15:24.637Z | 200 | `sha256:a1119245ef6a8f4ffaa2dd08a50982210183955363a44a8ea606432e89418bed` |
| global | `meta-protocols` · Responses、Chat Completions 与 Messages 协议 | https://dev.meta.ai/docs/protocols | 2026-11-05T08:15:24.482Z | 200 | `sha256:205a2e5c6d2bd003c43046bc4274672fe1a8846a2cda35176d406855ec07e7a6` |
| global | `meta-search-grounding` · Meta Model API 网页搜索工具 | https://dev.meta.ai/docs/search-grounding | 2026-11-05T08:15:25.234Z | 200 | `sha256:1ec978e242f0fed4053c9e08a66dfdc826c4838d1900b632e1a10c4e267efb39` |
| global | `meta-image-create-api` · Muse Image 图片生成 API 参考 | https://dev.meta.ai/docs/api-reference/images/create-image | 2026-11-05T08:15:25.198Z | 200 | `sha256:958a71900cbbe06b7cdc3053b268e865f76dceda50c52e921f93f5e48fbb69bd` |
| global | `meta-image-edit-api` · Muse Image 图片编辑 API 参考 | https://dev.meta.ai/docs/api-reference/images/edit-image | 2026-11-05T08:15:25.739Z | 200 | `sha256:063edafcbbf80cf9febc0f45f3fca0f433b3a8afc8118ce3bf4c33598061bcc1` |
| global | `meta-image-schemas` · Muse Image 请求与响应 Schema | https://dev.meta.ai/docs/api-reference/images/schemas | 2026-11-05T08:15:25.879Z | 200 | `sha256:1add3c60c8ebba320411ebee6c47c42f836b6218c3851a72da08b0990bd99c5f` |
| global | `meta-voice-transcribe-api` · Muse Voice Transcribe 文件转录 API 参考 | https://dev.meta.ai/docs/api-reference/voice/transcribe | 2026-11-05T08:15:26.496Z | 200 | `sha256:6556bdca94dd081bc53fbb84c7b7d93a5af5f079b9cb3930a18a744b6e3da380` |
| global | `meta-voice-realtime-api` · Muse Voice Transcribe 实时 WebSocket API 参考 | https://dev.meta.ai/docs/api-reference/voice/realtime | 2026-11-05T08:15:26.475Z | 200 | `sha256:6c6c382a57f6f625c24794b83f8fa8ee5f47a99caa838b862665d222b47ea3db` |

## meta 专属证据与核对说明

### Meta Model API 官方通用资料采集候选

- 来源快照：18 份
- 文档观察：18 份；模型 ID 提及：288 条
- 已生成 Offering：9 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- 官方通用 Models 页面区分 Model API、Muse Code 与开放权重范围；团队实时授权目录由需 Key 的 models.list 返回，本采集器不请求该接口。
- Muse Code 订阅与 Model API 按量计费是不同计划；订阅页的权益不等于公开 API 按量价格，计划价格/地区资格需独立核验。
- Llama/Muse Spark Open 开放权重模型不是 Meta 托管推理 API；第三方托管商的 API、路线与价格不归入 Meta Model API。
- 对消费数据的使用选项可能造成同一系列不同 Offering/费率，需要保留差异，不能按名称去重合并。
- 公开通用页面未逐项披露全部 API 路由、能力参数和逐模型限制；需从通用参考逐字段补充，不能用专属页面补洞。
- Llama、Muse Spark Open、Muse Glimmer 等自托管开放权重及第三方托管服务不作为 Meta Model API 当前供应。
