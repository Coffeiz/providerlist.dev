# google 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `google` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-19T05:00:09.716Z |
| 前一候选指纹 | `sha256:7ae0638b97f25c2d29ba3ac4c66cf2c66abd49ab7704c77774741214155c4ad5` |
| 本次候选指纹 | `sha256:c7719623bb40480327fc1dd5bf54feff6117df65c04831a604035311125ea674` |
| 来源快照 | 17 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 4 项，更新 16 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / google-batch-api-schema

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：Optional. Content layers to return. If empty, defaults to [FRAMES, AUDIO].<br>- `FRAMES`: Extract video frames.<br>- `AUDIO`: Extract audio track.<br>- `TRANSCRIPT`: Extract audio transcript.<br>Optional. Content layers to return. If empty, defaults to [PAGE_IMAGE] when DocumentMetadata is set. When DocumentMetadata is not set, default document processing is used (for example, page images for PDFs).<br>- `PAGE_IMAGE`: Rendered page images.<br>- `VISUAL`: A rendered image of the sheet.<br>**audioMetadata**: `AudioMetadata`<br>Optional. Audio metadata. The metadata should only be specified while the audio data is presented in inline_data or file_data.<br>Optional. The start offset of the audio, relative to the start of the audio stream.<br>Optional. The end offset of the audio, relative to the start of the audio stream. |

#### 来源 / google-consumer-plans-us

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：‫עברית‬ | 差异片段（新增；相同内容已省略）：YouTube Premium Lite benefits with Google AI Pro aren't available if you already have a YouTube Premium or YouTube Premium Lite subscription, nor during a trial plan. YouTube Individual plans can't be shared. YouTube Premium Family requires family manager purchase, and family members must be in the same household. Learn more |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：YouTube Premium Lite benefits with Google AI Pro aren't available if you already have a YouTube Premium or YouTube Premium Lite subscription, nor during a trial plan. YouTube Individual plans can't be shared. YouTube Premium Family requires family manager purchase, and family members must be in the same household. Learn more |

#### 来源 / google-files-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-neon |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 [Gemini 4 Neon](/docs/models/gemini-4-neon) | 新增 | 未记录 | • [Gemini 4 Neon](/docs/models/gemini-4-neon)<br>• ✔️ |

#### 来源 / google-generate-content-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：- `SMART`: Smart transcription mode.<br>**realtimeInputConfig**: `RealtimeInputConfig`<br>Optional. Configures the handling of realtime input.<br>**startOfSpeechSensitivity**: `string enum`<br>Optional. Determines how likely speech is to be detected.<br>- `START_SENSITIVITY_HIGH`: Automatic detection will detect the start of speech more often.<br>- `START_SENSITIVITY_LOW`: Automatic detection will detect the start of speech less often.<br>Optional. The required duration of detected speech before start-of-speech is committed. The lower this value, the more sensitive the start-of-speech detection is and shorter speech can be recognized. However, this also increases the probability of false positives.<br>**endOfSpeechSensitivity**: `string enum`<br>Optional. Determines how likely detected speech is ended.<br>- `END_SENSITIVITY_HIGH`: Automatic detection ends speech more often. | 差异项（新增；相同内容已省略）：Optional. Content layers to return. If empty, defaults to [FRAMES, AUDIO].<br>- `FRAMES`: Extract video frames.<br>- `AUDIO`: Extract audio track.<br>- `TRANSCRIPT`: Extract audio transcript.<br>Optional. Content layers to return. If empty, defaults to [PAGE_IMAGE] when DocumentMetadata is set. When DocumentMetadata is not set, default document processing is used (for example, page images for PDFs).<br>- `PAGE_IMAGE`: Rendered page images.<br>- `VISUAL`: A rendered image of the sheet.<br>**audioMetadata**: `AudioMetadata`<br>Optional. Audio metadata. The metadata should only be specified while the audio data is presented in inline_data or file_data.<br>Optional. The start offset of the audio, relative to the start of the audio stream.<br>Optional. The end offset of the audio, relative to the start of the audio stream. |

#### 来源 / google-google-maps

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-neon |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：prompt = "Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner."<br>const prompt = "Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner.";<br>"text": "Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner." |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 [Gemini 4 Neon](/docs/models/gemini-4-neon) | 新增 | 未记录 | • [Gemini 4 Neon](/docs/models/gemini-4-neon)<br>• ✔️ |

#### 来源 / google-google-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 Gemini 4 Neon | 新增 | 未记录 | • Gemini 4 Neon<br>• ✔️ |

#### 来源 / google-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-neon |

#### 来源 / google-openai-compatibility

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：&#124; `xhigh` &#124; `xhigh` (`gemini-4-hydrogen` only) &#124; Not supported &#124; Not supported &#124; Not supported &#124; | 差异片段（新增；相同内容已省略）：&#124; `xhigh` &#124; `xhigh` (`gemini-4-neon` and `gemini-4-hydrogen` only) &#124; Not supported &#124; Not supported &#124; Not supported &#124; |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-neon |
| tables › 记录 Thinking  {% id="thinking" %} › rows › 记录 `xhigh` | 更新 | 差异项（删除；相同内容已省略）：`xhigh` (`gemini-4-hydrogen` only) | 差异项（新增；相同内容已省略）：`xhigh` (`gemini-4-neon` and `gemini-4-hydrogen` only) |

#### 来源 / google-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：Equivalent to $0.00075 per 10s audio{% sup /%} through December 31, 2026. | 差异项（新增；相同内容已省略）：and pay-as-you-go pricing for your production-ready applications. To compare reasoning depth, speed, and cost trade-offs across models, see [Choosing a model](/docs/choosing-a-model). |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：and pay-as-you-go pricing for your production-ready applications. | 差异片段（新增；相同内容已省略）：and pay-as-you-go pricing for your production-ready applications. To compare reasoning depth, speed, and cost trade-offs across models, see [Choosing a model](/docs/choosing-a-model). |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-neon |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：Equivalent to $0.00225 per 10s audio{% sup /%} through December 31, 2026.<br>Equivalent to $0.0045 per 10s audio{% sup /%} starting January 1, 2027.<br>* $0.25 (text) through December 31, 2026.<br>$0.50 (text) starting January 1, 2027.<br>* $4.50 (audio) through December 31, 2026.<br>$9.00 (audio) starting January 1, 2027. | 差异项（新增；相同内容已省略）：* $3.00<br>* $15.00<br>* $0.15<br>* $5.40<br>* $27.00<br>* $0.27 |

#### 来源 / google-url-context

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-neon |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 [Gemini 4 Neon](/docs/models/gemini-4-neon) | 新增 | 未记录 | • [Gemini 4 Neon](/docs/models/gemini-4-neon)<br>• ✔️ |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `google-models` · Google Gemini API 模型指南 | https://aistudio.google.com/docs/models?hl=en | 2026-11-19T05:00:08.651Z | 200 | `sha256:d57058ba7e895aa65521f90dce1a332babf4aa1e8a11e403e4f4a0d0ec4b61cb` |
| global | `google-pricing` · Google Gemini Developer API 定价 | https://aistudio.google.com/docs/pricing?hl=en | 2026-11-19T05:00:08.644Z | 200 | `sha256:9c7ea643955f30d793c3b18d0b49ee85d5eb946c7d5cda3dcef3170f4b8ef92d` |
| global | `google-models-api` · Google models.list / models.get API 参考（实际清单需 API Key） | https://aistudio.google.com/api-reference/models?hl=en | 2026-11-19T05:00:08.738Z | 200 | `sha256:5b73d2f248d6277f4878c3f1de9911075626131da7f330bf326af7126b92f604` |
| global | `google-api-overview` · Google Gemini API 通用端点与能力概览 | https://aistudio.google.com/api-reference?hl=en | 2026-11-19T05:00:08.702Z | 200 | `sha256:a434927096f4c091448c9dfd21d6019a35ea3c91e925a804d218e06a4118cccf` |
| global | `google-generate-content-api` · Google Gemini GenerateContent 工具配置与 API Schema | https://aistudio.google.com/api-reference/generate-content?hl=en | 2026-11-19T05:00:08.877Z | 200 | `sha256:eeecece18d7e9c6ed000800cf7ca359bb60d3ba18a474c72e3575839d23d09a5` |
| global | `google-batch` · Google Gemini API Batch 模式与计费说明 | https://aistudio.google.com/docs/batch-api | 2026-11-19T05:00:08.844Z | 200 | `sha256:eb44b7b33dd07def08e7c6063bc4edbf53681dc394a5386982990dfd2e8db473` |
| global | `google-batch-api-schema` · Google Gemini API Batch 请求与响应 Schema | https://aistudio.google.com/api-reference/batch-api?hl=en | 2026-11-19T05:00:09.007Z | 200 | `sha256:6eafa781c4d4b6fdf8d5c59b779c8c1cc7b0d08f4c663456cb71edc79f58e0c1` |
| global | `google-tools` · Google Gemini API 内置工具与能力说明 | https://aistudio.google.com/docs/tools?hl=en | 2026-11-19T05:00:08.963Z | 200 | `sha256:83a3498a0b97c0ea4cd2590ad229ce19112f45f38b086ee9064f38230fc3019f` |
| global | `google-code-execution` · Google Gemini API Code execution 输入与结果格式 | https://aistudio.google.com/docs/code-execution | 2026-11-19T05:00:09.120Z | 200 | `sha256:d58c7032003b8dddb20564cc2064f499f2700e745f2553d5f362195b616457aa` |
| global | `google-google-search` · Google Gemini API Grounding with Google Search 输入与响应 | https://aistudio.google.com/docs/google-search?generate-content=true&amp;hl=en | 2026-11-19T05:00:09.102Z | 200 | `sha256:195077b2271e2d8c082e2bf5e50f835550be9c338f5c791a487077d2d50194df` |
| global | `google-google-maps` · Google Gemini API Grounding with Google Maps 输入与响应 | https://aistudio.google.com/docs/maps-grounding?generate-content=true&amp;hl=en | 2026-11-19T05:00:09.221Z | 200 | `sha256:2e5d6aae90262251db56a778aa42e46b28cfb9034523df6f51f92e55858391d3` |
| global | `google-url-context` · Google Gemini API URL Context 输入与响应 | https://aistudio.google.com/docs/url-context?generate-content=true&amp;hl=en | 2026-11-19T05:00:09.275Z | 200 | `sha256:4223e563fc46e65f55b3fb91f1887c81731df213d0999f63bd6f357f91458797` |
| global | `google-openai-compatibility` · Google Gemini API OpenAI 兼容接口 | https://aistudio.google.com/docs/openai?hl=en | 2026-11-19T05:00:09.371Z | 200 | `sha256:6774d2033076538f31341f73098f7ad163db9442ddc2775224f534f4005dea08` |
| global | `google-live-api` · Google Gemini API Live WebSocket 接口参考 | https://aistudio.google.com/api-reference/live | 2026-11-19T05:00:09.331Z | 200 | `sha256:7abbca6d2e88cda514ab7d9bbf8bcbe7d7d47c36471b8461d610c03f0ef3f6ce` |
| global | `google-billing` · Google Gemini API Free/Paid 层级与付款方式 | https://aistudio.google.com/docs/billing?hl=en | 2026-11-19T05:00:09.437Z | 200 | `sha256:0d94c72046f8d518d76fc7e499c5f4ea49c4ba668283243441d6cdf6fe54c9d5` |
| global | `google-consumer-plans-us` · Google Google One 美国 Google AI 订阅计划 | https://one.google.com/about/plans?hl=en_US | 2026-11-19T05:00:09.599Z | 200 | `sha256:e19aa5a179ef52d50eb99debd2cbc6f243cb59bf51fc77eb62a92fe2ee6a1dd3` |
| global | `google-files-api` · Google Gemini API Files 与 File Search API | https://aistudio.google.com/docs/file-search?hl=en | 2026-11-19T05:00:09.716Z | 200 | `sha256:6259d07354238fe6a660ea4f3c07c9b2fa32740cb2519faa631a92e678bfd81b` |

## google 专属证据与核对说明

### Google Gemini API 官方通用资料采集候选

- 来源快照：17 份
- 文档观察：17 份；模型 ID 提及：208 条
- 已生成 Offering：0 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- models.list 需要 API Key 且按项目/API 权限列出账号可见模型；不使用凭证调用。
- Gemini Developer API 与 Vertex AI Model Garden 是不同服务与授权面；只采集已登记的 Gemini Developer API 来源。
- 模型指南、定价页与模型清单接口覆盖范围不同；价格页提及不能证明当前供应，API 行为示例不能证明逐模型能力。
- Batch 是请求处理模式与折扣，不是订阅 Plan，也不单独构成模型 Offering。
