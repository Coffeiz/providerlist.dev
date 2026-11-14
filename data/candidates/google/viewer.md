# google 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `google` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-14T04:01:51.491Z |
| 前一候选指纹 | `sha256:998ff72cba8abc6291527557fc2e6a3286b997ea37bd34038e6cc1887901b136` |
| 本次候选指纹 | `sha256:e9f244e4937b9eb0cfe1187e637f4002696a8fa1b74cad5f8aa09bfe856ffdf5` |
| 来源快照 | 17 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 5 项，更新 19 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / google-batch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：model="gemini-3.8-flash",<br>model: 'gemini-3.8-flash', | 差异片段（新增；相同内容已省略）：model="gemini-4-hydrogen",<br>model: 'gemini-4-hydrogen', |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：gemini-3.8-flash | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |

#### 来源 / google-code-execution

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：model="gemini-3.8-flash",<br>model: "gemini-3.8-flash",<br>.model("gemini-3.8-flash") | 差异片段（新增；相同内容已省略）：model="gemini-4-hydrogen",<br>model: "gemini-4-hydrogen",<br>.model("gemini-4-hydrogen") |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：gemini-3.8-flash | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |

#### 来源 / google-consumer-plans-us

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：check Gemini app access with double the usage limits than without a Google AI plan, plus access to our Flash models | 差异片段（新增；相同内容已省略）：check Gemini app access with double the usage limits than without a Google AI plan, plus access to our Hydrogen model |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：check Gemini app access with double the usage limits than without a Google AI plan, plus access to our Flash models | 差异项（新增；相同内容已省略）：check Gemini app access with double the usage limits than without a Google AI plan, plus access to our Hydrogen model |

#### 来源 / google-files-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：model="gemini-3.8-flash",<br>model: "gemini-3.8-flash", | 差异片段（新增；相同内容已省略）：model="gemini-4-hydrogen",<br>model: "gemini-4-hydrogen", |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 [Gemini 4 Hydrogen](/docs/models/gemini-4-hydrogen) | 新增 | 未记录 | • [Gemini 4 Hydrogen](/docs/models/gemini-4-hydrogen)<br>• ✔️ |

#### 来源 / google-google-maps

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：model='gemini-3.8-flash',<br>model: "gemini-3.8-flash",<br>curl -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent' \ | 差异片段（新增；相同内容已省略）：model='gemini-4-hydrogen',<br>model: "gemini-4-hydrogen",<br>curl -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent' \ |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 [Gemini 4 Hydrogen](/docs/models/gemini-4-hydrogen) | 新增 | 未记录 | • [Gemini 4 Hydrogen](/docs/models/gemini-4-hydrogen)<br>• ✔️ |

#### 来源 / google-google-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：model="gemini-3.8-flash",<br>model: "gemini-3.8-flash",<br>curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent" \ | 差异片段（新增；相同内容已省略）：model="gemini-4-hydrogen",<br>model: "gemini-4-hydrogen",<br>curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \ |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：gemini-3.8-flash | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 Gemini 4 Hydrogen | 新增 | 未记录 | • Gemini 4 Hydrogen<br>• ✔️ |

#### 来源 / google-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |

#### 来源 / google-openai-compatibility

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：model="gemini-3.8-flash",<br>model: "gemini-3.8-flash",<br>"model": "gemini-3.8-flash",<br>* **`model="gemini-3.8-flash"`**: Choose a compatible Gemini model<br>from openai import OpenAI | 差异片段（新增；相同内容已省略）：model="gemini-4-hydrogen",<br>model: "gemini-4-hydrogen",<br>"model": "gemini-4-hydrogen",<br>* **`model="gemini-4-hydrogen"`**: Choose a compatible Gemini model<br>&#124; `xhigh` &#124; `xhigh` (`gemini-4-hydrogen` only) &#124; Not supported &#124; Not supported &#124; Not supported &#124; |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |
| tables › 记录 Thinking  {% id="thinking" %} › rows › 记录 `xhigh` | 新增 | 未记录 | • `xhigh`<br>• `xhigh` (`gemini-4-hydrogen` only)<br>• Not supported<br>• Not supported<br>• Not supported |

#### 来源 / google-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：* $0.375<br>* $1.875<br>* $6.00, prompts 200k tokens<br>* $0.10, prompts 200k tokens<br>Equivalent to $0.001125 per 10s audio{% sup /%} through December 31, 2026. | 差异项（新增；相同内容已省略）：* $7.50<br>* $0.075<br>* $3.75<br>* $13.50<br>* $0.135 |

#### 来源 / google-url-context

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：model_id = "gemini-3.8-flash"<br>model: "gemini-3.8-flash",<br>curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent" \ | 差异片段（新增；相同内容已省略）：model_id = "gemini-4-hydrogen"<br>model: "gemini-4-hydrogen",<br>curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \ |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-4-hydrogen |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 [Gemini 4 Hydrogen](/docs/models/gemini-4-hydrogen) | 新增 | 未记录 | • [Gemini 4 Hydrogen](/docs/models/gemini-4-hydrogen)<br>• ✔️ |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `google-models` · Google Gemini API 模型指南 | https://aistudio.google.com/docs/models?hl=en | 2026-11-14T04:01:50.432Z | 200 | `sha256:a60af4004277761c88d64b0089b52c247c4dc3a78aa64baf8742ff06f4d1d1f3` |
| global | `google-pricing` · Google Gemini Developer API 定价 | https://aistudio.google.com/docs/pricing?hl=en | 2026-11-14T04:01:50.534Z | 200 | `sha256:2185b4ebe9b296fe5d6827fba6b9879ddef5c80ca7e41e7cedfe54d3e340085b` |
| global | `google-models-api` · Google models.list / models.get API 参考（实际清单需 API Key） | https://aistudio.google.com/api-reference/models?hl=en | 2026-11-14T04:01:50.585Z | 200 | `sha256:7845018f98cf4dfed4bf945d1201c89fb8f7243fcf9da5661e2bda05bd5417c3` |
| global | `google-api-overview` · Google Gemini API 通用端点与能力概览 | https://aistudio.google.com/api-reference?hl=en | 2026-11-14T04:01:50.588Z | 200 | `sha256:7e66971e5699e5b0aea05b13b3e9030c811004fbdda0cd964c5f87bbabf9f6c4` |
| global | `google-generate-content-api` · Google Gemini GenerateContent 工具配置与 API Schema | https://aistudio.google.com/api-reference/generate-content?hl=en | 2026-11-14T04:01:50.717Z | 200 | `sha256:75de66c2bc7fb35373a832838468ca339c20a77df8ed795b7f42cb8b7d04f9e6` |
| global | `google-batch` · Google Gemini API Batch 模式与计费说明 | https://aistudio.google.com/docs/batch-api | 2026-11-14T04:01:50.771Z | 200 | `sha256:319d458bb16d8ce4ddb5ff4c00ef300cae038876f7fba23e2743d41b764d28da` |
| global | `google-batch-api-schema` · Google Gemini API Batch 请求与响应 Schema | https://aistudio.google.com/api-reference/batch-api?hl=en | 2026-11-14T04:01:50.891Z | 200 | `sha256:0d713db5d523f75862196f140454ab9958cf167a4dcff3ecd9c9d816e793a7b3` |
| global | `google-tools` · Google Gemini API 内置工具与能力说明 | https://aistudio.google.com/docs/tools?hl=en | 2026-11-14T04:01:50.823Z | 200 | `sha256:d769848638bd05137b98dce445ea49a9c4e603dee79cf6c545cb2b17d3723c49` |
| global | `google-code-execution` · Google Gemini API Code execution 输入与结果格式 | https://aistudio.google.com/docs/code-execution | 2026-11-14T04:01:51.006Z | 200 | `sha256:446407d986a31d2585ceb53d2829d33b956fde717882d2b48bf652e1c4eef04b` |
| global | `google-google-search` · Google Gemini API Grounding with Google Search 输入与响应 | https://aistudio.google.com/docs/google-search?generate-content=true&amp;hl=en | 2026-11-14T04:01:51.010Z | 200 | `sha256:c6fb6bf7988c4af06c4c2aa274d44b8e70cb9744e6ae5cf537c81ebea142ca8f` |
| global | `google-google-maps` · Google Gemini API Grounding with Google Maps 输入与响应 | https://aistudio.google.com/docs/maps-grounding?generate-content=true&amp;hl=en | 2026-11-14T04:01:51.069Z | 200 | `sha256:f1dd1ef47c4df85b1637fc50b0bff40f9dedc907e289b900eae1cccdce6fb631` |
| global | `google-url-context` · Google Gemini API URL Context 输入与响应 | https://aistudio.google.com/docs/url-context?generate-content=true&amp;hl=en | 2026-11-14T04:01:51.140Z | 200 | `sha256:d092e5cfa88bb8a4189c0c90be7882b20496ac46e1a007acf15ccca01870cd91` |
| global | `google-openai-compatibility` · Google Gemini API OpenAI 兼容接口 | https://aistudio.google.com/docs/openai?hl=en | 2026-11-14T04:01:51.234Z | 200 | `sha256:d167c9abe224348ef1a4884da929bd60e6729bd7b90a2c8a2185a96043639948` |
| global | `google-live-api` · Google Gemini API Live WebSocket 接口参考 | https://aistudio.google.com/api-reference/live | 2026-11-14T04:01:51.189Z | 200 | `sha256:7d49c031352f0055b25b9c5bef6b182184c1cf4c728279d6eea49d330f55b1a6` |
| global | `google-billing` · Google Gemini API Free/Paid 层级与付款方式 | https://aistudio.google.com/docs/billing?hl=en | 2026-11-14T04:01:51.294Z | 200 | `sha256:3033467a7be46ec1b3e45602e7a659cbd930c4a027a987d3dd2c0b6a8f9e8667` |
| global | `google-consumer-plans-us` · Google Google One 美国 Google AI 订阅计划 | https://one.google.com/about/plans?hl=en_US | 2026-11-14T04:01:51.438Z | 200 | `sha256:5ae4ddccc3d5ac64e3b87b21aa4c5466924160a9450daf52438b8b5d3be73f39` |
| global | `google-files-api` · Google Gemini API Files 与 File Search API | https://aistudio.google.com/docs/file-search?hl=en | 2026-11-14T04:01:51.491Z | 200 | `sha256:be2ed6d5d53747286fb4b8e408f0cedcd3039c836304c4ef165be00ce440ce49` |

## google 专属证据与核对说明

### Google Gemini API 官方通用资料采集候选

- 来源快照：17 份
- 文档观察：17 份；模型 ID 提及：187 条
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
