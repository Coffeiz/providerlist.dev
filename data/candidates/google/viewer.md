# google 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `google` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-24T07:35:06.257Z |
| 前一候选指纹 | `sha256:154f5b11500f6410ac66e25fe7ac388d6ef875091412bb65a30c889502ccdfdc` |
| 本次候选指纹 | `sha256:cfec69c80a82c3e3f039b76d28769093cfcd7cb6221781aa926809ac8f6dabb0` |
| 来源快照 | 17 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 0 项，更新 5 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / google-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：Previous generation video generation and editing model. Effective December 3, | 差异项（新增；相同内容已省略）：Previous generation video generation and editing model. |

#### 来源 / google-tools

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：its iterative reasoning process.<br>* Charged for embeddings at [Gemini Embedding](/docs/pricing#gemini-embedding)<br>[Gemini Embedding 2](/docs/pricing#gemini-embedding-2) rates. |
| excerpt | 更新 | 差异片段（删除 51 项）<details><summary>展开完整差异</summary><ul><li>See the [Pricing page](/docs/pricing#pricing-for-tools) for details</li><li>on costs associated with specific tools.</li><li>## How tools execution works {% id="how-tools-execution-works" %}</li><li>Tools allow the model to request actions during a conversation. The flow differs</li><li>depending on whether the tool is built-in (managed by Google) or custom (managed</li><li>by you).</li><li>### Built-in tool flow {% id="built-in-tool-flow" %}</li><li>For built-in tools (Google Search, Google Maps, URL Context, File Search,</li><li>Code Execution), the entire process happens within one API call:</li><li>1. **You** send a prompt: "What is the square root of the latest stock price of</li><li>GOOG?"</li><li>2. **Gemini** decides it needs tools and executes them on Google's servers</li><li>(e.g., searches for the stock price, then runs Python code to calculate the</li><li>square root).</li><li>3. **Gemini** sends back the final answer grounded in the tool results.</li><li>### Custom tool flow (Function calling) {% id="custom-tool-flow-function-calling" %}</li><li>For custom tools and Computer Use, your application handles the execution:</li><li>1. **You** send a prompt along with functions (tools) declarations.</li><li>2. **Gemini** might send back structured JSON to call a specific function</li><li>(for example, `{"name": "get_order_status", "args": {"order_id": "123"}}`),</li><li>always with a unique `id`.</li><li>3. **You** execute the function in your application or environment.</li><li>4. **You** send the function results, with the same `id` as the function call,</li><li>back to Gemini.</li><li>5. **Gemini** uses the results to generate a final response or another tool</li><li>call.</li><li>{% callout type="note" %}</li><li>Preview: For those building with a mix of bash and custom tools, Gemini 3.1 Pro</li><li>Preview comes with a separate endpoint available via the API called</li><li>[`gemini-3.1-pro-preview-customtools`](/docs/models/gemini-3.1-pro-preview#gemini-31-pro-preview-customtools).</li><li>{% /callout %}</li><li>Learn more in the [Function calling guide](/docs/function-calling).</li><li>### Combining built-in and custom tools flow {% id="combining-built-in-and-custom-tools-flow" %}</li><li>{% callout type="note" %}</li><li>Preview: Gemini 4 and Gemini 3 series models support the option to combine built-in tools</li><li>with custom tools in a single turn.</li><li>{% /callout %}</li><li>For requests that combine built-in tools and custom tools (function calls), the</li><li>model uses [tool context circulation](/docs/tool-combination) to</li><li>coordinate execution across different environments:</li><li>1. **You** send a prompt and declare the built-in tools and custom functions you</li><li>want to enable, setting a flag to turn on combination support.</li><li>2. **Gemini** executes built-in tools and yields to the user if any</li><li>client-side function calls are generated (which executes first depends on the</li><li>prompt and what the model decides). It sends back a response with:</li><li>* Confirmation of the tool call</li><li>* Results of the tool response (this may come after the JSON if the model</li><li>generated two parallel function calls)</li><li>* Structured JSON to call your function</li><li>* Encrypted thought signatures to preserve context</li><li>3. **You** execute the function in your application or environment.</li></ul></details> | 差异片段（新增 51 项）<details><summary>展开完整差异</summary><ul><li>See [Pricing](/docs/tools#pricing) below for details on costs associated with</li><li>specific tools.</li><li>## Pricing {% id="pricing" %}</li><li>{% table %}</li><li>* Feature</li><li>* Free Tier</li><li>* Paid Tier, per 1M tokens in USD</li><li>---</li><li>* [Google Search](/docs/google-search#pricing)</li><li>* 500 RPD free (limit shared for Flash and Flash-Lite).</li><li>Not available for Pro.</li><li>* Gemini 2.5 models:</li><li>1,500 RPD free (limit shared for Flash and Flash-Lite).</li><li>Then $35 / 1,000 grounded prompts</li><li>Gemini 3 and newer models:</li><li>5,000 free search requests per month (shared across all Gemini 3 and newer</li><li>models), then $14 per 1,000 requests. (Subject to a default daily cap of</li><li>1,500 requests per day (RPD) per project on the Gemini Developer API.)</li><li>---</li><li>* [Google Maps](/docs/maps-grounding#pricing-and-rate-limits)</li><li>* 500 RPD</li><li>Not available for Pro.</li><li>* Gemini 2.5 models:</li><li>1,500 RPD free (limit shared for Flash and Flash-Lite)</li><li>10,000 RPD free for Pro.</li><li>Then $25 / 1,000 grounded prompts</li><li>Gemini 3 and newer models:</li><li>5,000 requests per month (free, shared across all Gemini 3 and newer models), then</li><li>$14 / 1,000 search queries.</li><li>---</li><li>* [Code execution](/docs/code-execution#billing)</li><li>* Free of charge</li><li>* Code execution is billed at the standard token rates for the selected model.</li><li>Costs are determined solely by tool usage; no charges accrue for session</li><li>runtime. Generated code and execution results are billed as **Output</li><li>tokens** when created, and as **Input tokens** when used by the model in</li><li>its iterative reasoning process.</li><li>---</li><li>* [URL context](/docs/url-context#limitations)</li><li>* Free of charge</li><li>* Charged as input tokens per model pricing.</li><li>---</li><li>* [Computer use](/docs/computer-use)</li><li>* Not available</li><li>* Charged as regular tokens per model pricing (e.g., standard [Gemini 3.8 Flash](/docs/pricing#gemini-3.8-flash) pricing).</li><li>---</li><li>* [File search](/docs/file-search#pricing)</li><li>* Free of charge</li><li>* Charged for embeddings at [Gemini Embedding](/docs/pricing#gemini-embedding)</li><li>($0.15 / 1M tokens) or</li><li>[Gemini Embedding 2](/docs/pricing#gemini-embedding-2) rates.</li></ul></details> |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-3.8-flash<br>gemini-embedding<br>gemini-embedding-2 |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：* Paid Tier, per 1M tokens in USD<br>Then $35 / 1,000 grounded prompts<br>models), then $14 per 1,000 requests. (Subject to a default daily cap of<br>Then $25 / 1,000 grounded prompts<br>$14 / 1,000 search queries.<br>($0.15 / 1M tokens) or |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `google-models` · Google Gemini API 模型指南 | https://aistudio.google.com/docs/models?hl=en | 2026-11-24T07:35:05.362Z | 200 | `sha256:4383dbcef15ffa7c1179acbc9d20a486854bc10e0ab073d84997e096450bc48c` |
| global | `google-pricing` · Google Gemini Developer API 定价 | https://aistudio.google.com/docs/pricing?hl=en | 2026-11-24T07:35:05.367Z | 200 | `sha256:3d7b87d69e839c4b969a0d953ff29f4b8f4ce5e5771f37fb95beb01459c2cfcc` |
| global | `google-models-api` · Google models.list / models.get API 参考（实际清单需 API Key） | https://aistudio.google.com/api-reference/models?hl=en | 2026-11-24T07:35:05.415Z | 200 | `sha256:5b73d2f248d6277f4878c3f1de9911075626131da7f330bf326af7126b92f604` |
| global | `google-api-overview` · Google Gemini API 通用端点与能力概览 | https://aistudio.google.com/api-reference?hl=en | 2026-11-24T07:35:05.453Z | 200 | `sha256:a434927096f4c091448c9dfd21d6019a35ea3c91e925a804d218e06a4118cccf` |
| global | `google-generate-content-api` · Google Gemini GenerateContent 工具配置与 API Schema | https://aistudio.google.com/api-reference/generate-content?hl=en | 2026-11-24T07:35:05.555Z | 200 | `sha256:829dabb8cb4b90bcbff71c53197ba8d834fc5dfb136294eaa9a1364a1b39a215` |
| global | `google-batch` · Google Gemini API Batch 模式与计费说明 | https://aistudio.google.com/docs/batch-api | 2026-11-24T07:35:05.514Z | 200 | `sha256:eb44b7b33dd07def08e7c6063bc4edbf53681dc394a5386982990dfd2e8db473` |
| global | `google-batch-api-schema` · Google Gemini API Batch 请求与响应 Schema | https://aistudio.google.com/api-reference/batch-api?hl=en | 2026-11-24T07:35:05.656Z | 200 | `sha256:22fe8141b85f08a8487987bcd2ee4f65834d5f201046860eddf30f0656c109a7` |
| global | `google-tools` · Google Gemini API 内置工具与能力说明 | https://aistudio.google.com/docs/tools?hl=en | 2026-11-24T07:35:05.606Z | 200 | `sha256:5efd5e7118223af91f946598f650bd825859087f301b761d074d2aec93578d70` |
| global | `google-code-execution` · Google Gemini API Code execution 输入与结果格式 | https://aistudio.google.com/docs/code-execution | 2026-11-24T07:35:05.746Z | 200 | `sha256:030ae6a1da68d6001fb5fd49f9da231670058f67f8ee3d3c683cdbf946b77834` |
| global | `google-google-search` · Google Gemini API Grounding with Google Search 输入与响应 | https://aistudio.google.com/docs/google-search?generate-content=true&amp;hl=en | 2026-11-24T07:35:05.752Z | 200 | `sha256:195077b2271e2d8c082e2bf5e50f835550be9c338f5c791a487077d2d50194df` |
| global | `google-google-maps` · Google Gemini API Grounding with Google Maps 输入与响应 | https://aistudio.google.com/docs/maps-grounding?generate-content=true&amp;hl=en | 2026-11-24T07:35:05.832Z | 200 | `sha256:2e5d6aae90262251db56a778aa42e46b28cfb9034523df6f51f92e55858391d3` |
| global | `google-url-context` · Google Gemini API URL Context 输入与响应 | https://aistudio.google.com/docs/url-context?generate-content=true&amp;hl=en | 2026-11-24T07:35:05.841Z | 200 | `sha256:4223e563fc46e65f55b3fb91f1887c81731df213d0999f63bd6f357f91458797` |
| global | `google-openai-compatibility` · Google Gemini API OpenAI 兼容接口 | https://aistudio.google.com/docs/openai?hl=en | 2026-11-24T07:35:05.932Z | 200 | `sha256:6774d2033076538f31341f73098f7ad163db9442ddc2775224f534f4005dea08` |
| global | `google-live-api` · Google Gemini API Live WebSocket 接口参考 | https://aistudio.google.com/api-reference/live | 2026-11-24T07:35:05.927Z | 200 | `sha256:9064b020b88a8aca0e435761ece7ab740bc9a12191570a8033949e62bcce7689` |
| global | `google-billing` · Google Gemini API Free/Paid 层级与付款方式 | https://aistudio.google.com/docs/billing?hl=en | 2026-11-24T07:35:06.020Z | 200 | `sha256:0d94c72046f8d518d76fc7e499c5f4ea49c4ba668283243441d6cdf6fe54c9d5` |
| global | `google-consumer-plans-us` · Google Google One 美国 Google AI 订阅计划 | https://one.google.com/about/plans?hl=en_US | 2026-11-24T07:35:06.177Z | 200 | `sha256:dfe8007573314bdf80d36b4d0d283e4c0cdda5d5fa6ae26942d4ab4510d385e3` |
| global | `google-files-api` · Google Gemini API Files 与 File Search API | https://aistudio.google.com/docs/file-search?hl=en | 2026-11-24T07:35:06.257Z | 200 | `sha256:6259d07354238fe6a660ea4f3c07c9b2fa32740cb2519faa631a92e678bfd81b` |

## google 专属证据与核对说明

### Google Gemini API 官方通用资料采集候选

- 来源快照：17 份
- 文档观察：17 份；模型 ID 提及：211 条
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
