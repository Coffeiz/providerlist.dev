# xai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-05T08:16:05.483Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:d0120dae263c740b5f0e63bdb3ef839b8a9cae20caeb4499802e08914c753c14` |
| 来源快照 | 25 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 5768 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / xai

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • Inference API `/v1/models` 返回认证 API Key 可见型号；本适配器不携带凭证请求该接口。<br>• 当前供应仅由官方当前定价表中的精确模型价格行证明；目录中的别名、旧型号和文案提及不自动等同于可计价供应。<br>• US regional endpoint 仅适用于官方明确列出的 grok-4.7 / grok-4.6；global 和 US 区域不合并费率。<br>• X Subscription 产品订阅与按量 API 费率分开；付费订阅中的 API access 不等于包含 API 调用额度。<br>• X Subscription 是账号产品订阅，并非 API 按量费率；不能把订阅用量倍率当成 API 价格倍率。<br>• 本轮未检出固定 Enterprise 价格；官方公开文档只列自助订阅及 Teams 席位价格。<br>• 本候选未请求需 API Key 的 Models API。 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | xai |
| source refs | 新增 | 未记录 | 列表（25 项）<details><summary>展开完整内容</summary><ul><li>xai-subscription-pricing</li><li>xai-models</li><li>xai-pricing</li><li>xai-models-api</li><li>xai-chat-completions</li><li>xai-responses</li><li>xai-images-api</li><li>xai-videos-api</li><li>xai-batch-api</li><li>xai-batches-api-reference</li><li>xai-files-api</li><li>xai-collections-api</li><li>xai-tools-overview</li><li>xai-web-search</li><li>xai-x-search</li><li>xai-collections-search</li><li>xai-code-execution</li><li>xai-tool-streaming-sync</li><li>xai-voice</li><li>xai-speech-to-speech</li><li>xai-speech-to-text</li><li>xai-speech-to-text-guide</li><li>xai-text-to-speech</li><li>xai-regions</li><li>xai-imagine</li></ul></details> |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 xai-batch-api › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-batch-api › note | 新增 | 未记录 | 独立批处理 API 已映射；逐模型批量折扣见价格来源。 |
| 记录 xai-batch-api › scope | 新增 | 未记录 | capability |
| 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| 记录 xai-batch-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-batches-api-reference › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-batches-api-reference › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-batches-api-reference › scope | 新增 | 未记录 | api |
| 记录 xai-batches-api-reference › source ref | 新增 | 未记录 | xai-batches-api-reference |
| 记录 xai-batches-api-reference › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-chat-completions › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-chat-completions › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-chat-completions › scope | 新增 | 未记录 | api |
| 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| 记录 xai-chat-completions › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-code-execution › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-code-execution › note | 新增 | 未记录 | 已映射 Code Execution 的 Responses input 与代码执行输出；输出字段由 Streaming &amp; Sync 文档补充。 |
| 记录 xai-code-execution › scope | 新增 | 未记录 | capability |
| 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| 记录 xai-code-execution › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-collections-api › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-collections-api › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-collections-api › scope | 新增 | 未记录 | capability |
| 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| 记录 xai-collections-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-collections-search › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-collections-search › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-collections-search › scope | 新增 | 未记录 | capability |
| 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| 记录 xai-collections-search › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-files-api › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-files-api › note | 新增 | 未记录 | Files/Collections 能力与用量计费已映射。 |
| 记录 xai-files-api › scope | 新增 | 未记录 | capability |
| 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| 记录 xai-files-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-images-api › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-images-api › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-images-api › scope | 新增 | 未记录 | api |
| 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| 记录 xai-images-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-imagine › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-imagine › note | 新增 | 未记录 | Imagine 的图像/视频模型、价格与公开 API 路由已映射。 |
| 记录 xai-imagine › scope | 新增 | 未记录 | capability |
| 记录 xai-imagine › source ref | 新增 | 未记录 | xai-imagine |
| 记录 xai-imagine › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-models-api › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-models-api › note | 新增 | 未记录 | 账号 API Key 范围接口未调用；此端点的模型列表无法公开采集。 |
| 记录 xai-models-api › scope | 新增 | 未记录 | api |
| 记录 xai-models-api › source ref | 新增 | 未记录 | xai-models-api |
| 记录 xai-models-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-models › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-models › note | 新增 | 未记录 | 由官方定价精确模型 ID 映射当前价格模型；目前 15 条。目录中的未计价文案不自动升级为供应。 |
| 记录 xai-models › scope | 新增 | 未记录 | model_catalog |
| 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| 记录 xai-models › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-pricing › note | 新增 | 未记录 | 结构化映射公开按量 API 模型和能力价格；这些费率与 X Subscription 订阅费分开记录。 |
| 记录 xai-pricing › scope | 新增 | 未记录 | pricing |
| 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 记录 xai-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-regions › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-regions › note | 新增 | 未记录 | 仅 grok-4.7 与 grok-4.6 映射到 US regional Endpoint；不把该区域可用性扩展到其它 API。 |
| 记录 xai-regions › scope | 新增 | 未记录 | api |
| 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| 记录 xai-regions › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-responses › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-responses › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-responses › scope | 新增 | 未记录 | api |
| 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| 记录 xai-responses › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-speech-to-speech › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-speech-to-speech › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-speech-to-speech › scope | 新增 | 未记录 | capability |
| 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| 记录 xai-speech-to-speech › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-speech-to-text-guide › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-speech-to-text-guide › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-speech-to-text-guide › scope | 新增 | 未记录 | capability |
| 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| 记录 xai-speech-to-text-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-speech-to-text › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-speech-to-text › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-speech-to-text › scope | 新增 | 未记录 | model_catalog |
| 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| 记录 xai-speech-to-text › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-subscription-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-subscription-pricing › note | 新增 | 未记录 | 覆盖官方当前 X Subscription 个人月付/年付与 Teams 席位月付；不推断既有 SuperGrok / Cursor / X Premium 旧订阅价格，也不将订阅用量视为 API 调用额度。 |
| 记录 xai-subscription-pricing › record count | 新增 | 未记录 | 8 |
| 记录 xai-subscription-pricing › record unit | 新增 | 未记录 | PlanFact records |
| 记录 xai-subscription-pricing › scope | 新增 | 未记录 | plan |
| 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 记录 xai-subscription-pricing › 状态（status） | 新增 | 未记录 | complete |
| 记录 xai-text-to-speech › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-text-to-speech › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-text-to-speech › scope | 新增 | 未记录 | capability |
| 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| 记录 xai-text-to-speech › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-tool-streaming-sync › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-tool-streaming-sync › note | 新增 | 未记录 | 映射同步文本结果与服务端工具输出选项。 |
| 记录 xai-tool-streaming-sync › scope | 新增 | 未记录 | capability |
| 记录 xai-tool-streaming-sync › source ref | 新增 | 未记录 | xai-tool-streaming-sync |
| 记录 xai-tool-streaming-sync › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-tools-overview › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-tools-overview › note | 新增 | 未记录 | 工具为模型请求内置服务端工具，不作为独立无模型服务；按公开说明在模型操作上展示。 |
| 记录 xai-tools-overview › scope | 新增 | 未记录 | capability |
| 记录 xai-tools-overview › source ref | 新增 | 未记录 | xai-tools-overview |
| 记录 xai-tools-overview › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-videos-api › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-videos-api › note | 新增 | 未记录 | 对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。 |
| 记录 xai-videos-api › scope | 新增 | 未记录 | api |
| 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| 记录 xai-videos-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-voice › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-voice › note | 新增 | 未记录 | Voice STS、STT、TTS 能力已映射；价格来源中 STS 模型 ID 与 STT 默认模型需分开解释。 |
| 记录 xai-voice › scope | 新增 | 未记录 | capability |
| 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| 记录 xai-voice › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-web-search › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-web-search › note | 新增 | 未记录 | Web Search is mapped as an independent Service capability from the official tool guide; this does not infer per-model support. |
| 记录 xai-web-search › scope | 新增 | 未记录 | capability |
| 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| 记录 xai-web-search › 状态（status） | 新增 | 未记录 | partial |
| 记录 xai-x-search › 市场（market） | 新增 | 未记录 | global |
| 记录 xai-x-search › note | 新增 | 未记录 | 已采集为模型 API 服务端工具，不推导全模型支持矩阵。 |
| 记录 xai-x-search › scope | 新增 | 未记录 | capability |
| 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| 记录 xai-x-search › 状态（status） | 新增 | 未记录 | partial |

### 文档观察

#### 来源 / xai-batch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 列表（21 项）<details><summary>展开完整内容</summary><ul><li>curl -X POST https://api.x.ai/v1/batches \\</li><li>const response = await fetch("https://api.x.ai/v1/batches", {</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \\</li><li>const response = await fetch(\`https://api.x.ai/v1/batches/\${batchId}/requests\`, {</li><li>curl https://api.x.ai/v1/batches/{batch_id} \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}\`,</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/results?limit=100" \\</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/results?limit=100&amp;pagination_token={token}" \\</li><li>const url = new URL(\`https://api.x.ai/v1/batches/\${batchId}/results\`);</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}:cancel \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}:cancel\`,</li><li>curl "https://api.x.ai/v1/batches?limit=20" \\</li><li>"https://api.x.ai/v1/batches?limit=20",</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/requests?limit=50" \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}/requests?limit=50\`,</li><li>curl -s "https://api.x.ai/v1/batches/{batch_id}/results?limit=100" \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}/results?limit=100\`,</li><li>const BASE_URL = "https://api.x.ai/v1";</li><li>curl -X POST https://api.x.ai/v1/files \\</li><li>const uploadRes = await fetch("https://api.x.ai/v1/files", {</li><li>const batchRes = await fetch("https://api.x.ai/v1/batches", {</li></ul></details> |
| capability mentions | 新增 | 未记录 | 列表（61 项）<details><summary>展开完整内容</summary><ul><li>&#124; Image &#124; `image.prepare()` &#124;</li><li>&#124; Video &#124; `video.prepare()` &#124;</li><li>&#124; Video extension &#124; `video.prepare_extension()` &#124;</li><li>// Image generation</li><li>image_generation: {</li><li>model: "grok-imagine-image-2.0",</li><li>// Image edit</li><li>image_edit: {</li><li>image: { url: "https://picsum.photos/800", type: "image_url" },</li><li>// Video generation</li><li>video_generation: {</li><li>model: "grok-imagine-video-1.5",</li><li>// Video edit</li><li>model: "grok-imagine-video",</li><li>video: { url: "https://lorem.video/cat_360p_3s" },</li><li>// Video extension</li><li>video_extension: {</li><li># Image generation</li><li>image_req = client.image.prepare(</li><li>model="grok-imagine-image-2.0",</li><li>batch_requests.append(image_req)</li><li># Image edit</li><li>image_edit_req = client.image.prepare(</li><li>image_url="https://picsum.photos/800",</li><li>batch_requests.append(image_edit_req)</li><li># Video generation</li><li>video_req = client.video.prepare(</li><li>model="grok-imagine-video-1.5",</li><li>batch_requests.append(video_req)</li><li># Video edit</li><li>video_edit_req = client.video.prepare(</li><li>model="grok-imagine-video",</li><li>video_url="https://lorem.video/cat_360p_3s",</li><li>batch_requests.append(video_edit_req)</li><li># Video extension</li><li>video_ext_req = client.video.prepare_extension(</li><li>batch_requests.append(video_ext_req)</li><li>&#124; Image &#124; `result.image_response` &#124; `.url`, `.base64`, `.usage`, `.model` &#124;</li><li>&#124; Video &#124; `result.video_response` &#124; `.url`, `.duration`, `.usage`, `.model` &#124;</li><li>These are the same response types returned by the regular `client.image.sample()` and `client.video.generate()` methods.</li><li>if (response?.chat_get_completion &#124;&#124; response?.image_generation &#124;&#124; response?.video_generation) {</li><li>?? response.image_generation?.data[0].url</li><li>?? response.video_generation?.video.url;</li><li>elif resp.HasField("image_response"):</li><li># Image generation response</li><li>print(f"[{rid}] Image URL: {result.image_response.url}")</li><li>elif resp.HasField("video_response"):</li><li># Video generation response</li><li>print(f"[{rid}] Video URL: {result.video_response.url}")</li><li>{"custom_id": "img-1", "method": "POST", "url": "/v1/images/generations", "body": {"model": "grok-imagine-image-2.0", "prompt": "A futuristic city skyline at sunset"}}</li><li>{"custom_id": "img-edit-1", "method": "POST", "url": "/v1/images/edits", "body": {"model": "grok-imagine-image-2.0", "prompt": "Add a rainbow", "image": {"url": "https://picsum.photos/800"}}}</li><li>{"custom_id": "vid-1", "method": "POST", "url": "/v1/videos/generations", "body": {"model": "grok-imagine-video-1.5", "prompt": "A rocket launching from Mars", "duration": 8}}</li><li>{"custom_id": "vid-edit-1", "method": "POST", "url": "/v1/videos/edits", "body": {"model": "grok-imagine-video", "prompt": "Make it slow motion", "video": {"url": "https://lorem.video/cat_360p_3s"}}}</li><li>{"custom_id": "vid-ext-1", "method": "POST", "url": "/v1/videos/extensions", "body": {"model": "grok-imagine-video", "prompt": "The camera slowly pans to reveal a sunset", "video": {"url": "https://lorem.video/cat_360p_3s"}, "duration": 6}}</li><li>&#124; `/v1/images/generations` &#124; [Image generation](/developers/model-capabilities/images/generation) &#124;</li><li>&#124; `/v1/images/edits` &#124; [Image editing](/developers/model-capabilities/images/editing) &#124;</li><li>&#124; `/v1/videos/generations` or `/v1/videos` &#124; [Video generation](/developers/model-capabilities/video/generation) &#124;</li><li>&#124; `/v1/videos/edits` &#124; [Video editing](/developers/model-capabilities/video/editing) &#124;</li><li>&#124; `/v1/videos/extensions` &#124; [Video extension](/developers/model-capabilities/video/extension) &#124;</li><li>* Image and video results contain signed URLs that expire after **1 hour**. Download the media promptly after retrieving results.</li><li>* **Client-side function tools** are supported: the model returns `tool_calls` in the response for you to handle offline. Multi-turn tool calling requires submitting a new batch request with the tool result messages included in the conversation.</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Advanced API Usage<br># Batch API<br>The Batch API lets you process large volumes of requests asynchronously with reduced pricing and higher rate limits. For pricing details, see [Batch API Pricing](/developers/pricing#batch-api-pricing). If you need lower latency on real-time requests instead, see [Priority Processing](/developers/advanced-api-usage/priority-processing).<br>&gt; [!NOTE]<br>&gt; Model support<br>&gt;<br>&gt; Not every model accepts Batch API requests. See Details on each [model page](/developers/models). Unsupported models reject batch requests.<br>## What is the Batch API?<br>When you make a standard API call to Grok, you send a request and wait for an immediate response. This approach is perfect for interactive applications like chatbots, real-time assistants, or any use case where users are waiting for a response.<br>The Batch API takes a different approach. Instead of processing requests immediately, you submit them to a queue where they're processed in the background. You don't get an instant response—instead, you check back later to retrieve your results.<br>**Key differences from real-time API requests:**<br>&#124; &#124; Real-time API &#124; Batch API &#124;<br>&#124;---&#124;---&#124;---&#124;<br>&#124; **Response time** &#124; Immediate (seconds) &#124; Typically within 24 hours\* &#124;<br>&#124; **Cost** &#124; Standard pricing &#124; Reduced pricing ([see details](/developers/pricing#batch-api-pricing)) &#124;<br>&#124; **Rate limits** &#124; Per-minute limits apply &#124; Requests don't count towards rate limits &#124;<br>&#124; **Use case** &#124; Interactive, real-time &#124; Background processing, bulk jobs &#124;<br>\* **Processing time:** Most batch requests complete within **24 hours**, though processing time may vary depending on system load and batch size. Completion time is best effort and not guaranteed.<br>&gt; [!NOTE]<br>&gt;<br>&gt; You can also create, monitor, and manage batches through the [xAI Console](https://console.x.ai/team/default/batches?utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-advanced-api-usage-batch-api\&amp;utm_content=batches). The Console provides a visual interface for tracking batch progress and viewing results.<br>## When to use the Batch API<br>The Batch API is ideal when you don't need immediate results and want to **reduce your API costs**:<br>* **Running evaluations and benchmarks** - Test model performance across thousands of prompts<br>* **Processing large datasets** - Analyze customer feedback, classify support tickets, extract entities<br>* **Content moderation at scale** - Review backlogs of user-generated content<br>* **Document summarization** - Process reports, research papers, or legal documents in bulk<br>* **Data enrichment pipelines** - Add AI-generated insights to database records<br>* **Scheduled overnight jobs** - Generate daily reports or prepare data for dashboards<br>## How it works<br>The Batch API workflow consists of four main steps:<br>1. **Create a batch** - A batch is a container that groups related requests together<br>2. **Add requests** - Submit your inference requests to the batch queue<br>3. **Monitor progress** - Poll the batch status to track completion<br>4. **Retrieve results** - Fetch responses for all processed requests<br>Let's walk through each step.<br>## Step 1: Create a batch<br>A batch acts as a container for your requests. Think of it as a folder that groups related work together—you might create separate batches for different datasets, experiments, or job types.<br>When you create a batch, you receive a `batch_id` that you'll use to add requests and retrieve results.<br>```bash<br>curl -X POST https://api.x.ai/v1/batches \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>-d '{<br>"name": "customer_feedback_analysis"<br>}'<br>```<br>```javascriptWithoutSDK<br>// Create a batch with a descriptive name<br>const response = await fetch("https://api.x.ai/v1/batches", {<br>method: "POST",<br>headers: {<br>"Content-Type": "application/json",<br>Authorization: \`Bearer \${process.env.XAI_API_KEY}\`,<br>},<br>body: JSON.stringify({ name: "customer_feedback_analysis" }),<br>});<br>const batch = await response.json();<br>console.log(\`Created batch: \${batch.batch_id}\`);<br>// Store the batch_id for later use<br>const batchId = batch.batch_id;<br>```<br>```pythonXAI<br>from xai_sdk import Client<br>client = Client()<br># Create a batch with a descriptive name<br>batch = client.batch.create(batch_name="customer_feedback_analysis")<br>print(f"Created batch: {batch.batch_id}")<br># Store the batch_id for later use<br>batch_id = batch.batch_id<br>```<br>## Step 2: Add requests to the batch<br>With your batch created, you can now add requests to it. Each request will be processed asynchronously.<br>With the xAI SDK, build each request with the method for its type, then pass them as a list:<br>&#124; Request type &#124; SDK method &#124;<br>&#124;---&#124;---&#124;<br>&#124; Text &#124; `chat.create()` &#124;<br>&#124; Image &#124; `image.prepare()` &#124;<br>&#124; Video &#124; `video.prepare()` &#124;<br>&#124; Video extension &#124; `video.prepare_extension()` &#124;<br>You can also upload a [JSONL file](#jsonl-file-upload) if you prefer.<br>**Important:** Assign a unique `batch_request_id` to each request.<br>* The ID lets you match results back to their original requests. This matters when you process hundreds or thousands of items.<br>* If you don't provide an ID, we generate a UUID for you.<br>* Your own IDs are useful for idempotency (ensuring a request is only processed once).<br>* They also let you link batch requests to records in your own system.<br>```bash<br>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>-d '{<br>"batch_requests": [<br>{<br>"batch_request_id": "feedback_001",<br>"batch_request": {<br>"responses": {<br>"input": [<br>{"role": "system", "content": "Classify the sentiment as positive, negative, or neutral."},<br>{"role": "user", "content": "The product exceeded my expectations!"}<br>], |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.3<br>• grok-imagine-image-2.0<br>• grok-imagine-video<br>• grok-imagine-video-1.5 |
| plan or price mentions | 新增 | 未记录 | 列表（49 项）<details><summary>展开完整内容</summary><ul><li>-H "Authorization: Bearer $XAI_API_KEY" \\</li><li>Authorization: \`Bearer \${process.env.XAI_API_KEY}\`,</li><li>console.log(\`Created batch: \${batch.batch_id}\`);</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \\</li><li>// Image generation</li><li>// Image edit</li><li>const response = await fetch(\`https://api.x.ai/v1/batches/\${batchId}/requests\`, {</li><li>if (!response.ok) throw new Error(\`Failed to add requests: \${await response.text()}\`);</li><li>console.log(\`Added \${batchRequests.length} requests to batch\`);</li><li>-H "Authorization: Bearer $XAI_API_KEY"</li><li>\`https://api.x.ai/v1/batches/\${batchId}\`,</li><li>{ headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` } }</li><li>console.log(\`Progress: \${completed}/\${num_requests} complete, \${num_pending} pending\`);</li><li>const url = new URL(\`https://api.x.ai/v1/batches/\${batchId}/results\`);</li><li>headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` },</li><li>console.log(\`Successfully processed: \${allSucceeded.length} requests\`);</li><li>console.log(\`[\${result.batch_request_id}] \${content}\`);</li><li>if (tokens != null) console.log(\` Tokens used: \${tokens}\`);</li><li>console.log(\`\\nFailed: \${allFailed.length} requests\`);</li><li>console.log(\`[\${result.batch_request_id}] Error: \${result.error_message}\`);</li><li>\`https://api.x.ai/v1/batches/\${batchId}:cancel\`,</li><li>{ method: "POST", headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` } }</li><li>console.log(\`Cancelled batch: \${cancelledBatch.batch_id}\`);</li><li>console.log(\`Completed before cancellation: \${cancelledBatch.state.num_success} requests\`);</li><li>console.log(\`\${batch.name} (\${batch.batch_id}): \${status}\`);</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/requests?limit=50" \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}/requests?limit=50\`,</li><li>console.log(\`Request \${req.batch_request_id}: \${req.state}\`);</li><li># Cost is returned in ticks (1e-10 USD) for precision</li><li>\`https://api.x.ai/v1/batches/\${batchId}/results?limit=100\`,</li><li>// Cost is returned in ticks (1e-10 USD) for precision</li><li>console.log(\`Total cost: $\${(totalTicks / 1e10).toFixed(4)}\`);</li><li>print("Total cost: $%.4f" % total_cost_usd)</li><li>const headers = { "Content-Type": "application/json", Authorization: \`Bearer \${process.env.XAI_API_KEY}\` };</li><li>const batchRes = await fetch(\`\${BASE_URL}/batches\`, {</li><li>console.log(\`Batch created: \${batchId}\`);</li><li>const response = await fetch(\`\${BASE_URL}/batches/\${batchId}/requests\`, {</li><li>console.log(\`Added \${feedbackData.length} requests\`);</li><li>const statusRes = await fetch(\`\${BASE_URL}/batches/\${batchId}\`, { headers });</li><li>console.log(\` \${num_success + num_error}/\${num_requests} complete\`);</li><li>const resultsRes = await fetch(\`\${BASE_URL}/batches/\${batchId}/results?limit=100\`, { headers });</li><li>console.log(\`[\${sentiment.toUpperCase()}] \${originalText.slice(0, 50)}...\`);</li><li>console.log(\`[\${result.batch_request_id}] \${result.error_message}\`);</li><li>console.log(\`\\nTotal cost: $\${(totalTicks / 1e10).toFixed(4)}\`);</li><li>print("\\nTotal cost: $%.4f" % cost_usd)</li><li>{"custom_id": "img-1", "method": "POST", "url": "/v1/images/generations", "body": {"model": "grok-imagine-image-2.0", "prompt": "A futuristic city skyline at sunset"}}</li><li>{"custom_id": "img-edit-1", "method": "POST", "url": "/v1/images/edits", "body": {"model": "grok-imagine-image-2.0", "prompt": "Add a rainbow", "image": {"url": "https://picsum.photos/800"}}}</li><li>&#124; `/v1/images/generations` &#124; [Image generation](/developers/model-capabilities/images/generation) &#124;</li><li>&#124; `/v1/images/edits` &#124; [Image editing](/developers/model-capabilities/images/editing) &#124;</li></ul></details> |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-batch-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • 空字符串<br>• Real-time API<br>• Batch API |
| tables › 第 1 项 › heading | 新增 | 未记录 | What is the Batch API? |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • **Response time**<br>• Immediate (seconds)<br>• Typically within 24 hours\* |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • **Cost**<br>• Standard pricing<br>• Reduced pricing ([see details](/developers/pricing#batch-api-pricing)) |
| tables › 第 1 项 › rows › 第 3 项 | 新增 | 未记录 | • **Rate limits**<br>• Per-minute limits apply<br>• Requests don't count towards rate limits |
| tables › 第 1 项 › rows › 第 4 项 | 新增 | 未记录 | • **Use case**<br>• Interactive, real-time<br>• Background processing, bulk jobs |
| tables › 第 2 项 › headers | 新增 | 未记录 | • Request type<br>• SDK method |
| tables › 第 2 项 › heading | 新增 | 未记录 | Step 2: Add requests to the batch |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • Text<br>• `chat.create()` |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • Image<br>• `image.prepare()` |
| tables › 第 2 项 › rows › 第 3 项 | 新增 | 未记录 | • Video<br>• `video.prepare()` |
| tables › 第 2 项 › rows › 第 4 项 | 新增 | 未记录 | • Video extension<br>• `video.prepare_extension()` |
| tables › 第 3 项 › headers | 新增 | 未记录 | • Counter<br>• Description |
| tables › 第 3 项 › heading | 新增 | 未记录 | Understanding batch states |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • `num_requests`<br>• Total number of requests added to the batch |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • `num_pending`<br>• Requests waiting to be processed |
| tables › 第 3 项 › rows › 第 3 项 | 新增 | 未记录 | • `num_success`<br>• Requests that completed successfully |
| tables › 第 3 项 › rows › 第 4 项 | 新增 | 未记录 | • `num_error`<br>• Requests that failed with an error |
| tables › 第 3 项 › rows › 第 5 项 | 新增 | 未记录 | • `num_cancelled`<br>• Requests that were cancelled |
| tables › 第 4 项 › headers | 新增 | 未记录 | • State<br>• Description |
| tables › 第 4 项 › heading | 新增 | 未记录 | Understanding batch states |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • `pending`<br>• Request is queued and waiting to be processed |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • `succeeded`<br>• Request completed successfully, result is available |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • `failed`<br>• Request encountered an error during processing |
| tables › 第 4 项 › rows › 第 4 项 | 新增 | 未记录 | • `cancelled`<br>• Request was cancelled (e.g., when the batch was cancelled before this request was processed) |
| tables › 第 5 项 › headers | 新增 | 未记录 | • Request type<br>• Accessor<br>• Fields |
| tables › 第 5 项 › heading | 新增 | 未记录 | Step 4: Retrieve results |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • Chat completion<br>• `result.response`<br>• `.content`, `.usage`, `.finish_reason`, and more |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • Image<br>• `result.image_response`<br>• `.url`, `.base64`, `.usage`, `.model` |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • Video<br>• `result.video_response`<br>• `.url`, `.duration`, `.usage`, `.model` |
| tables › 第 6 项 › headers | 新增 | 未记录 | • Field<br>• Description |
| tables › 第 6 项 › heading | 新增 | 未记录 | JSONL File Upload |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • `custom_id`<br>• Unique identifier. Maps to `batch_request_id`. |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • `method`<br>• Always `"POST"`. |
| tables › 第 6 项 › rows › 第 3 项 | 新增 | 未记录 | • `url`<br>• API endpoint path. |
| tables › 第 6 项 › rows › 第 4 项 | 新增 | 未记录 | • `body`<br>• The JSON request payload, matching the [REST API reference](/developers/rest-api-reference) for that endpoint. |
| tables › 第 7 项 › headers | 新增 | 未记录 | • URL<br>• Description |
| tables › 第 7 项 › heading | 新增 | 未记录 | JSONL File Upload |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • `/v1/chat/completions`<br>• [Chat completions](/developers/model-capabilities/text/generate-text) |
| tables › 第 7 项 › rows › 第 2 项 | 新增 | 未记录 | • `/v1/responses`<br>• [Model responses](/developers/model-capabilities/text/generate-text) |
| tables › 第 7 项 › rows › 第 3 项 | 新增 | 未记录 | • `/v1/images/generations`<br>• [Image generation](/developers/model-capabilities/images/generation) |
| tables › 第 7 项 › rows › 第 4 项 | 新增 | 未记录 | • `/v1/images/edits`<br>• [Image editing](/developers/model-capabilities/images/editing) |
| tables › 第 7 项 › rows › 第 5 项 | 新增 | 未记录 | • `/v1/videos/generations` or `/v1/videos`<br>• [Video generation](/developers/model-capabilities/video/generation) |
| tables › 第 7 项 › rows › 第 6 项 | 新增 | 未记录 | • `/v1/videos/edits`<br>• [Video editing](/developers/model-capabilities/video/editing) |
| tables › 第 7 项 › rows › 第 7 项 | 新增 | 未记录 | • `/v1/videos/extensions`<br>• [Video extension](/developers/model-capabilities/video/extension) |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-batches-api-reference

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • ## POST /v1/batches<br>• ## GET /v1/batches<br>• ## GET /v1/batches/\{batch\_id}<br>• ## GET /v1/batches/\{batch\_id}/requests<br>• ## POST /v1/batches/\{batch\_id}/requests<br>• ## GET /v1/batches/\{batch\_id}/results<br>• ## POST /v1/batches/\{batch\_id}:cancel |
| capability mentions | 新增 | 未记录 | 列表（17 项）<details><summary>展开完整内容</summary><ul><li>* `frequency_penalty` (number &#124; null) — (Not supported by reasoning models) Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.</li><li>* `max_completion_tokens` (integer &#124; null) — An upper bound for the number of tokens that can be generated for a completion, only applies to visible output tokens (i.e. does not apply to tokens used for reasoning or function calls). Defaults to None, meaning the model will generate as many tokens as needed up until the model's maximum context length.</li><li>* `messages` (array\ ) — A list of messages that make up the the chat conversation. Different models support different message types, such as image and text.</li><li>* `parallel_tool_calls` (boolean &#124; null) — If set to false, the model can perform maximum one tool call.</li><li>* `presence_penalty` (number &#124; null) — (Not supported by \`grok-3\` and reasoning models) Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.</li><li>* `reasoning_effort` (string &#124; null) — Constrains how hard a reasoning model thinks before responding. Higher efforts use more reasoning tokens for deeper thinking. The supported values and the default depend on the model.</li><li>* `mode` (string &#124; null) — Choose the mode to query realtime data:</li><li>* `stop` (array &#124; null) — (Not supported by reasoning models) Up to 4 sequences where the API will stop generating further tokens.</li><li>* `reasoning_content` (string &#124; null) — The reasoning trace generated by the model.</li><li>* `tool_calls` (array &#124; null) — A list of tool calls asked by model for user to perform.</li><li>* `audio_tokens` (integer, required) — Audio input tokens generated by the model.</li><li>* `reasoning_tokens` (integer, required) — Tokens generated by the model for reasoning.</li><li>* `audio_tokens` (integer, required) — Audio prompt token used.</li><li>* `image_tokens` (integer, required) — Image prompt token used.</li><li>"audio_tokens": 0,</li><li>"image_tokens": 0,</li><li>"reasoning_tokens": 99,</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Inference API<br># Batches<br>## POST /v1/batches<br>Create a new batch for processing requests.<br>### Request Body<br>* `name` (string, required) — The name of the batch created.<br>### Response Body<br>* `batch_id` (string, required) — The ID of the batch.<br>* `cancel_by_xai_message` (string &#124; null) — If the batch was cancelled by xAI, an error message explaining why.<br>* `cancel_time` (string &#124; null) — Time when the batch was cancelled.<br>* `create_api_key_id` (string, required) — ID of the API key that was used to create the batch.<br>* `create_time` (string, required) — The time when the batch was created.<br>* `expire_time` (string &#124; null) — The time when the batch expires.<br>* `name` (string, required) — The human-readable name of the batch.<br>* `state` (object, required) — Holds aggregate information about the current state of a batch process.<br>* `num_cancelled` (integer, required) — Total number of requests that have been cancelled.<br>* `num_error` (integer, required) — Total number of requests that finished with an error.<br>* `num_pending` (integer, required) — Total number of pending requests.<br>* `num_requests` (integer, required) — Total number of requests in the batch.<br>* `num_success` (integer, required) — Total number of requests that have finished successfully.<br>\*\*Request example:\*\*<br>```json<br>{<br>"name": "My New Batch"<br>}<br>```<br>\*\*Response example:\*\*<br>```json<br>{<br>"batch_id": "batch_1934e8b5-f3dc-45f1-8329-9841b0aee9d8",<br>"name": "My New Batch",<br>"create_time": "2025-11-11",<br>"expire_time": "2025-11-12",<br>"create_api_key_id": "********-****-****-****-************",<br>"cancel_time": null,<br>"cancel_by_xai_message": null,<br>"state": {<br>"num_requests": 0,<br>"num_pending": 0,<br>"num_success": 0,<br>"num_error": 0,<br>"num_cancelled": 0<br>}<br>}<br>```<br>***<br>## GET /v1/batches<br>List all batches for the current team.<br>### Query Parameters<br>* `limit` (integer &#124; null) — Number of elements to return.<br>* `pagination_token` (string &#124; null) — Optional page token to retrieve a specific page. Provided by \`pagination\_token\` in \`ListBatchesResponse\`.<br>### Response Body<br>* `batches` (array\ , required) — The information about the batches.<br>* `batch_id` (string, required) — The ID of the batch.<br>* `cancel_by_xai_message` (string &#124; null) — If the batch was cancelled by xAI, an error message explaining why.<br>* `cancel_time` (string &#124; null) — Time when the batch was cancelled.<br>* `create_api_key_id` (string, required) — ID of the API key that was used to create the batch.<br>* `create_time` (string, required) — The time when the batch was created.<br>* `expire_time` (string &#124; null) — The time when the batch expires.<br>* `name` (string, required) — The human-readable name of the batch.<br>* `state` (object, required) — Holds aggregate information about the current state of a batch process.<br>* `num_cancelled` (integer, required) — Total number of requests that have been cancelled.<br>* `num_error` (integer, required) — Total number of requests that finished with an error.<br>* `num_pending` (integer, required) — Total number of pending requests.<br>* `num_requests` (integer, required) — Total number of requests in the batch.<br>* `num_success` (integer, required) — Total number of requests that have finished successfully.<br>* `pagination_token` (string &#124; null) — The page token to retrieve batches from the next page. Will be empty if this is the last page.<br>\*\*Response example:\*\*<br>```json<br>{<br>"batches": [<br>{<br>"batch_id": "batch_1934e8b5-f3dc-45f1-8329-9841b0aee9d8",<br>"name": "My New Batch",<br>"create_time": "2025-11-11",<br>"expire_time": "2025-11-12",<br>"create_api_key_id": "********-****-****-****-************",<br>"cancel_time": null,<br>"cancel_by_xai_message": null,<br>"state": {<br>"num_requests": 0,<br>"num_pending": 0,<br>"num_success": 0,<br>"num_error": 0,<br>"num_cancelled": 0<br>}<br>},<br>{<br>"batch_id": "batch_bac0e657-6bbf-46ba-a671-1d73a67c132a",<br>"name": "MyNewBatch",<br>"create_time": "2025-11-09",<br>"expire_time": "2025-11-10",<br>"create_api_key_id": "********-****-****-****-************",<br>"cancel_time": "2025-11-09",<br>"cancel_by_xai_message": null,<br>"state": {<br>"num_requests": 1,<br>"num_pending": 0,<br>"num_success": 1,<br>"num_error": 0, |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-3<br>• grok-4<br>• grok-4-code-eapi-lap4-unified-sblbm-0 |
| plan or price mentions | 新增 | 未记录 | • ## GET /v1/batches/\{batch\_id}/requests<br>• ## POST /v1/batches/\{batch\_id}/requests |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xai-batches-api-reference |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-chat-completions

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • ## POST /v1/chat/completions<br>• ## GET /v1/chat/deferred-completion/\{request\_id} |
| capability mentions | 新增 | 未记录 | 列表（20 项）<details><summary>展开完整内容</summary><ul><li>Create a chat response from text/image chat prompts. This is the endpoint for making requests to chat and image understanding models.</li><li>* `frequency_penalty` (number &#124; null) — (Not supported by reasoning models) Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.</li><li>* `max_completion_tokens` (integer &#124; null) — An upper bound for the number of tokens that can be generated for a completion, only applies to visible output tokens (i.e. does not apply to tokens used for reasoning or function calls). Defaults to 128,000 when unset; set a larger value to allow longer generations.</li><li>* `messages` (array\ ) — A list of messages that make up the chat conversation. Different models support different message types, such as image and text.</li><li>* `parallel_tool_calls` (boolean &#124; null) — If set to false, the model can perform maximum one tool call.</li><li>* `presence_penalty` (number &#124; null) — (Not supported by \`grok-3\` and reasoning models) Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.</li><li>* `reasoning_effort` (string &#124; null) — Constrains how hard a reasoning model thinks before responding. Higher efforts use more reasoning tokens for deeper thinking. The supported values and the default depend on the model.</li><li>* `mode` (string &#124; null) — Choose the mode to query realtime data:</li><li>* `stop` (array &#124; null) — (Not supported by reasoning models) Up to 4 sequences where the API will stop generating further tokens.</li><li>* `reasoning_content` (string &#124; null) — The reasoning trace generated by the model.</li><li>* `tool_calls` (array &#124; null) — A list of tool calls asked by model for user to perform.</li><li>* `audio_tokens` (integer, required) — Audio input tokens generated by the model.</li><li>* `reasoning_tokens` (integer, required) — Tokens generated by the model for reasoning.</li><li>* `audio_tokens` (integer, required) — Audio prompt token used.</li><li>* `image_tokens` (integer, required) — Image prompt token used.</li><li>* `image_generation_calls` (integer, required) — Number of image generation calls.</li><li>"audio_tokens": 0,</li><li>"image_tokens": 0,</li><li>"reasoning_tokens": 94,</li><li>"reasoning_tokens": 0,</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Inference API<br># Chat Completions<br>The Chat Completions API is the stateless, OpenAI-compatible predecessor of the [Responses API](/developers/rest-api-reference/inference/responses). New integrations should use Responses; see [Migrating from Chat Completions](/developers/model-capabilities/text/comparison).<br>Sampling uses at most `temperature` 1 and at most the model's default `top_p`. Requests may send `temperature` from 0 to 2 and `top_p` up to 1; a value above a cap is sampled as that cap. See [Sampling parameters](/developers/model-capabilities/text/best-practices#sampling-parameters).<br>***<br>## POST /v1/chat/completions<br>Create a chat response from text/image chat prompts. This is the endpoint for making requests to chat and image understanding models.<br>### Request Body<br>* `deferred` (boolean &#124; null) — If set to \`true\`, the request returns a \`request\_id\`. You can then get the deferred response by GET \`/v1/chat/deferred-completion/\{request\_id}\`.<br>* `frequency_penalty` (number &#124; null) — (Not supported by reasoning models) Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.<br>* `guidelines` (array &#124; null) — Per-category instructions for model output. See \[\`Guideline\`].<br>Omitted requests leave this unset. A request whose guidelines cannot be<br>applied, for example on a multi-agent model or with \`stop\`, fails with<br>400\.<br>* `logit_bias` (object &#124; null) — (Unsupported) A JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.<br>* `logprobs` (boolean &#124; null) — Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message. Not supported by models \`grok-4.20\` and newer; the field will be silently ignored if set.<br>* `max_completion_tokens` (integer &#124; null) — An upper bound for the number of tokens that can be generated for a completion, only applies to visible output tokens (i.e. does not apply to tokens used for reasoning or function calls). Defaults to 128,000 when unset; set a larger value to allow longer generations.<br>* `max_tokens` (integer &#124; null) — \\\[DEPRECATED\\] The maximum number of tokens that can be generated in the chat completion. Deprecated in favor of \`max\_completion\_tokens\`.<br>* `messages` (array\ ) — A list of messages that make up the chat conversation. Different models support different message types, such as image and text.<br>* `model` (string) — Model name for the model to use. Obtainable from \ or \ .<br>* `n` (integer &#124; null) — How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs.<br>* `parallel_tool_calls` (boolean &#124; null) — If set to false, the model can perform maximum one tool call.<br>* `presence_penalty` (number &#124; null) — (Not supported by \`grok-3\` and reasoning models) Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.<br>* `prompt_cache_key` (string &#124; null) — A stable cache key for best-effort sticky routing / prompt-cache hits<br>across requests sharing a prompt prefix. Plumbed to \`x-grok-conv-id\`,<br>same as on \`/v1/responses\`.<br>* `reasoning_effort` (string &#124; null) — Constrains how hard a reasoning model thinks before responding. Higher efforts use more reasoning tokens for deeper thinking. The supported values and the default depend on the model.<br>* `response_format` (object &#124; object &#124; object)<br>* `safety_identifier` (string &#124; null) — Supplied by the API client to identify the end user behind this request. A stable string that uniquely identifies each of your users; hash your internal user id or username rather than sending an email or name. Stored with the request metadata so a usage-policy violation can be attributed to that user rather than to the API key.<br>* `search_parameters` (object)<br>* `from_date` (string &#124; null) — Date from which to consider the results in ISO-8601 YYYY-MM-DD. See<br>\ .<br>* `max_search_results` (integer &#124; null) — Maximum number of search results to use.<br>* `mode` (string &#124; null) — Choose the mode to query realtime data:<br>\* \`off\`: no search performed and no external will be considered.<br>\* \`on\` (default): the model will search in every sources for relevant data.<br>\* \`auto\`: the model choose whether to search data or not and where to search the data.<br>* `return_citations` (boolean &#124; null) — Whether to return citations in the response or not.<br>* `sources` (array &#124; null) — List of sources to search in. If no sources specified, the model will look over the web and X by default.<br>* `to_date` (string &#124; null) — Date up to which to consider the results in ISO-8601 YYYY-MM-DD. See<br>\ .<br>* `seed` (integer &#124; null) — If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same \`seed\` and parameters should return the same result. Determinism is not guaranteed, and you should refer to the \`system\_fingerprint\` response parameter to monitor changes in the backend.<br>* `service_tier` ("default" &#124; "priority" &#124; "fast")<br>* `stop` (array &#124; null) — (Not supported by reasoning models) Up to 4 sequences where the API will stop generating further tokens.<br>* `stream` (boolean &#124; null) — If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a \`data: \[DONE]\` message.<br>* `stream_options` (object)<br>* `include_usage` (boolean, required) — Set an additional chunk to be streamed before the \`data: \[DONE]\` message. The other chunks will return \`null\` in \`usage\` field.<br>* `temperature` (number &#124; null) — What sampling temperature to use, between 0 and 2. Values above 1 are sampled at 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.<br>* `tool_choice` (string &#124; object)<br>* `tools` (array &#124; null) — A list of tools the model may call in JSON-schema. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 1000 functions are supported.<br>* `top_logprobs` (integer &#124; null) — An integer between 0 and 8 specifying the number of most likely tokens to return at each token position, each with an associated log probability. logprobs must be set to true if this parameter is used. Not supported by models \`grok-4.20\` and newer; the field will be silently ignored if set.<br>* `top_p` (number &#124; null) — An alternative to sampling with \`temperature\`, called nucleus sampling, where the model considers the results of the tokens with \`top\_p\` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. It is generally recommended to alter this or \`temperature\` but not both. Values above the model's default top\_p, 0.95 for Grok models, are sampled at that default.<br>* `user` (string &#124; null) — A unique identifier representing your end-user, which can help xAI to monitor and detect abuse.<br>* `web_search_options` (object)<br>* `filters` (object) — Only included for compatibility.<br>* `search_context_size` (string &#124; null) — This field included for compatibility reason with OpenAI's API. It is mapped to \`max\_search\`.<br>* `user_location` (object) — Only included for compatibility.<br>### Response Body<br>* `choices` (array\ , required) — A list of response choices from the model. The length corresponds to the \`n\` in request body (default to 1).<br>* `finish_reason` (string &#124; null) — Finish reason. \`"stop"\` means the inference has reached a model-defined or user-supplied stop sequence in \`stop\`. \`"length"\` means the inference result has reached models' maximum allowed token length or user defined value in \`max\_tokens\`. \`"end\_turn"\` or \`null\` in streaming mode when the chunk is not the last.<br>* `index` (integer, required) — Index of the choice within the response choices, starting from 0.<br>* `logprobs` (object)<br>* `content` (array &#124; null) — An array the log probabilities of each output token returned.<br>* `message` (object, required)<br>* `content` (string &#124; null) — The content of the message.<br>* `reasoning_content` (string &#124; null) — The reasoning trace generated by the model.<br>* `refusal` (string &#124; null) — The reason given by model if the model is unable to generate a response. null if model is able to generate.<br>* `role` (string, required) — The role that the message belongs to, the response from model is always \`"assistant"\`.<br>* `tool_calls` (array &#124; null) — A list of tool calls asked by model for user to perform.<br>* `citations` (array &#124; null) — List of all the external pages used by the model to answer.<br>* `created` (integer, required) — The chat completion creation time in Unix timestamp.<br>* `id` (string, required) — A unique ID for the chat response.<br>* `model` (string, required) — Model ID used to create chat completion.<br>* `object` (string, required) — The object type, which is always \`"chat.completion"\`.<br>* `output_files` (array &#124; null) — Files generated during the response (e.g., by the code execution tool).<br>Only populated when \`code\_execution\_files\_output\` is included.<br>* `service_tier` ("default" &#124; "priority" &#124; "fast", required) — Processing tier for a request. \`Fast\` and \`Priority\` are interchangeable: the model's fast<br>deployment and its rates where configured, else higher scheduling priority at a higher price.<br>* `system_fingerprint` (string &#124; null) — System fingerprint, used to indicate xAI system configuration changes.<br>* `usage` (object)<br>* `completion_tokens` (integer, required) — Total completion token used.<br>* `completion_tokens_details` (object, required) — Details of completion usage.<br>* `accepted_prediction_tokens` (integer, required) — The number of tokens in the prediction that appeared in the completion.<br>* `audio_tokens` (integer, required) — Audio input tokens generated by the model.<br>* `reasoning_tokens` (integer, required) — Tokens generated by the model for reasoning.<br>* `rejected_prediction_tokens` (integer, required) — The number of tokens in the prediction that did not appear in the completion.<br>* `cost_in_usd_ticks` (integer, required) — Accurate cost of this request in USD ticks, where "tick" is defined as follows:<br>TICKS\_IN\_USD\_CENT: i64 = 100\_000\_000<br>which means there is 10'000'000'000 ticks in one \*dollar\*.<br>* `num_sources_used` (integer, required) — Number of individual live search source used.<br>* `prompt_tokens` (integer, required) — Total prompt token used.<br>* `prompt_tokens_details` (object, required) — Details of prompt usage.<br>* `audio_tokens` (integer, required) — Audio prompt token used.<br>* `cached_tokens` (integer, required) — Token cached by xAI from previous requests and reused for this request.<br>* `image_tokens` (integer, required) — Image prompt token used.<br>* `text_tokens` (integer, required) — Total text prompt token used (cached + non-cached text tokens).<br>* `server_side_tool_usage_details` (object)<br>* `code_interpreter_calls` (integer, required) — Number of code interpreter calls.<br>* `document_search_calls` (integer, required) — Number of document search calls.<br>* `file_search_calls` (integer, required) — Number of file search calls. |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-3<br>• grok-4.20<br>• grok-conv-id |
| plan or price mentions | 新增 | 未记录 | • Create a chat response from text/image chat prompts. This is the endpoint for making requests to chat and image understanding models.<br>• * `cost_in_usd_ticks` (integer, required) — Accurate cost of this request in USD ticks, where "tick" is defined as follows: |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xai-chat-completions |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-code-execution

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url="https://api.x.ai/v1",<br>• url = "https://api.x.ai/v1/responses"<br>• curl https://api.x.ai/v1/responses \\ |
| capability mentions | 新增 | 未记录 | • model="grok-4.7", # reasoning model<br>• # View the server-side tool calls as they are being made in real-time<br>• for tool_call in chunk.tool_calls:<br>• print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>• if response.usage.reasoning_tokens and is_thinking:<br>• print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>• print("\\n\\nServer Side Tool Calls:")<br>• print(response.tool_calls)<br>• * **Model**: Use reasoning models like `grok-4.7` for better code generation |
| excerpt | 新增 | 未记录 | #### Tools<br># Code Execution Tool<br>The code execution tool enables Grok to write and execute Python code in real-time, dramatically expanding its capabilities beyond text generation. This powerful feature allows Grok to perform precise calculations, complex data analysis, statistical computations, and solve mathematical problems that would be impossible through text alone.<br>## Key Capabilities<br>* **Mathematical Computations**: Solve complex equations, perform statistical analysis, and handle numerical calculations with precision<br>* **Data Analysis**: Process datasets, and extract insights from the prompt<br>* **Financial Modeling**: Build financial models, calculate risk metrics, and perform quantitative analysis<br>* **Scientific Computing**: Handle scientific calculations, simulations, and data transformations<br>* **Code Generation &amp; Testing**: Write, test, and debug Python code snippets in real-time<br>## When to Use Code Execution<br>The code execution tool is particularly valuable for:<br>* **Numerical Problems**: When you need exact calculations rather than approximations<br>* **Data Processing**: Analyzing complex data from the prompt<br>* **Complex Logic**: Multi-step calculations that require intermediate results<br>* **Verification**: Double-checking mathematical results or validating assumptions<br>## SDK Support<br>The code execution tool is available across multiple SDKs and APIs with different naming conventions:<br>&#124; SDK/API &#124; Tool Name &#124; Description &#124;<br>&#124;---------&#124;-----------&#124;-------------&#124;<br>&#124; xAI SDK &#124; `code_execution` &#124; Native xAI SDK implementation &#124;<br>&#124; OpenAI Responses API &#124; `code_interpreter` &#124; Compatible with OpenAI's API format &#124;<br>&#124; Vercel AI SDK &#124; `xai.tools.codeExecution()` &#124; Vercel AI SDK integration &#124;<br>This tool is also supported in all Responses API compatible SDKs.<br>## Implementation Example<br>Below are comprehensive examples showing how to integrate the code execution tool across different platforms and use cases.<br>### Basic Calculations<br>```javascriptAISDK<br>import { xai } from '@ai-sdk/xai';<br>import { generateText } from 'ai';<br>const { text } = await generateText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'Calculate the compound interest for $10,000 at 5% annually for 10 years',<br>tools: {<br>code_execution: xai.tools.codeExecution(),<br>},<br>});<br>console.log(text);<br>```<br>```pythonOpenAISDK<br>import os<br>from openai import OpenAI<br>api_key = os.getenv("XAI_API_KEY")<br>client = OpenAI(<br>api_key=api_key,<br>base_url="https://api.x.ai/v1",<br>)<br>response = client.responses.create(<br>model="grok-4.7",<br>input=[<br>{<br>"role": "user",<br>"content": "Calculate the compound interest for $10,000 at 5% annually for 10 years",<br>},<br>],<br>tools=[<br>{<br>"type": "code_interpreter",<br>},<br>],<br>)<br>print(response)<br>```<br>```pythonRequests<br>import os<br>import requests<br>url = "https://api.x.ai/v1/responses"<br>headers = {<br>"Content-Type": "application/json",<br>"Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"<br>}<br>payload = {<br>"model": "grok-4.7",<br>"input": [<br>{<br>"role": "user",<br>"content": "Calculate the compound interest for $10,000 at 5% annually for 10 years"<br>}<br>],<br>"tools": [<br>{<br>"type": "code_interpreter",<br>}<br>]<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>print(response.json())<br>```<br>```bash<br>curl https://api.x.ai/v1/responses \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>-d '{<br>"model": "grok-4.7",<br>"input": [<br>{<br>"role": "user",<br>"content": "Calculate the compound interest for $10,000 at 5% annually for 10 years"<br>}<br>],<br>"tools": [ |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.7 |
| plan or price mentions | 新增 | 未记录 | • prompt: 'Calculate the compound interest for $10,000 at 5% annually for 10 years',<br>• "content": "Calculate the compound interest for $10,000 at 5% annually for 10 years",<br>• "content": "Calculate the compound interest for $10,000 at 5% annually for 10 years"<br>• -H "Authorization: Bearer $XAI_API_KEY" \\<br>• chat.append(user("Calculate the compound interest for $10,000 at 5% annually for 10 years"))<br>• Please calculate monthly profit margins and identify the best-performing month. |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-code-execution |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 SDK Support › headers | 新增 | 未记录 | • SDK/API<br>• Tool Name<br>• Description |
| tables › 记录 SDK Support › heading | 新增 | 未记录 | SDK Support |
| tables › 记录 SDK Support › rows › 记录 OpenAI Responses API | 新增 | 未记录 | • OpenAI Responses API<br>• `code_interpreter`<br>• Compatible with OpenAI's API format |
| tables › 记录 SDK Support › rows › 记录 Vercel AI SDK | 新增 | 未记录 | • Vercel AI SDK<br>• `xai.tools.codeExecution()`<br>• Vercel AI SDK integration |
| tables › 记录 SDK Support › rows › 记录 xAI SDK | 新增 | 未记录 | • xAI SDK<br>• `code_execution`<br>• Native xAI SDK implementation |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-collections-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • The base URL for `collection` management is shared with [Management API](/developers/rest-api-reference/management) at `https://management-api.x.ai/`.<br>• ## POST /v1/collections<br>• ## GET /v1/collections<br>• ## GET /v1/collections/\{collection\_id}<br>• ## DELETE /v1/collections/\{collection\_id}<br>• ## PUT /v1/collections/\{collection\_id}<br>• ## POST /v1/collections/\{collection\_id}/documents/\{file\_id}<br>• ## GET /v1/collections/\{collection\_id}/documents<br>• ## GET /v1/collections/\{collection\_id}/documents/\{file\_id}<br>• ## PATCH /v1/collections/\{collection\_id}/documents/\{file\_id}<br>• ## DELETE /v1/collections/\{collection\_id}/documents/\{file\_id}<br>• ## GET /v1/collections/\{collection\_id}/documents:batchGet |
| capability mentions | 新增 | 未记录 | • &gt; For more details on provisioning xAI Management API key and using Management API, you can visit<br>• * `model_name` (string) — Embedding model that would make the conversion.<br>• "model_name": "grok-embedding-small" |
| excerpt | 新增 | 未记录 | #### Collections API<br># Collection Management<br>The base URL for `collection` management is shared with [Management API](/developers/rest-api-reference/management) at `https://management-api.x.ai/`.<br>You have to authenticate using **xAI Management API Key** with the header `Authorization: Bearer `.<br>&gt; [!NOTE]<br>&gt;<br>&gt; For more details on provisioning xAI Management API key and using Management API, you can visit<br>&gt;<br>&gt; [Using Management API](/developers/management-api-guide)<br>***<br>## POST /v1/collections<br>Create a collection.<br>### Request Body<br>* `team_id` (string) — The ID of the team that will own this new collection.<br>If not provided, the team ID will be derived from your request credentials.<br>* `collection_name` (string, required) — Name to use for the new collection.<br>* `index_configuration` (object)<br>* `model_name` (string) — Embedding model that would make the conversion.<br>* `chunk_configuration` (object)<br>* `chars_configuration` (object)<br>* `max_chunk_size_chars` (integer) — Max length per chunk.<br>* `chunk_overlap_chars` (integer) — Overlap between chunks, both sides.<br>* `tokens_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `chunk_overlap_tokens` (integer) — Overlap between chunks, both sides.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `ast_configuration` (object) — Deprecated: Use CodeTokensConfiguration or CodeCharsConfiguration instead.<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `table_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `markdown_tokens_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `chunk_overlap_tokens` (integer) — Overlap between chunks, both sides.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `markdown_chars_configuration` (object)<br>* `max_chunk_size_chars` (integer) — Max length per chunk.<br>* `chunk_overlap_chars` (integer) — Overlap between chunks, both sides.<br>* `code_tokens_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `chunk_overlap_tokens` (integer) — Overlap between chunks, both sides.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `code_chars_configuration` (object)<br>* `max_chunk_size_chars` (integer) — Max length per chunk.<br>* `chunk_overlap_chars` (integer) — Overlap between chunks, both sides.<br>* `bytes_configuration` (object)<br>* `max_chunk_size_bytes` (integer) — Max length per chunk in bytes.<br>* `chunk_overlap_bytes` (integer) — Overlap between chunks in bytes.<br>* `strip_whitespace` (boolean) — Remove leading/trailing whitespce.<br>* `inject_name_into_chunks` (boolean) — Inject name into produced chunks.<br>* `metric_space` ("HNSW\_METRIC\_UNKNOWN" &#124; "HNSW\_METRIC\_COSINE" &#124; "HNSW\_METRIC\_EUCLIDEAN" &#124; "HNSW\_METRIC\_INNER\_PRODUCT") — Distance space for the HNSW index.<br>* `version` (integer) — Internal only.<br>Version number of the Collection API used under the hood.<br>This is an internal only setting so it is okay to be left ambiguous (no enum).<br>* `field_definitions` (array\ )<br>* `key` (string, required) — The key/name of the field (e.g., "title", "author", "isbn").<br>* `required` (boolean) — If true, this field must be provided for every document added to the collection.<br>Documents missing required fields will be rejected at upload time.<br>* `inject_into_chunk` (boolean) — If true, this field's value will be injected at the start of each chunk<br>generated from documents (for contextual retrieval).<br>Improves retrieval accuracy by providing context about the document.<br>* `unique` (boolean) — If true, this field's value must be unique across all documents<br>within this collection. Duplicate values will be rejected.<br>* `description` (string) — Optional description of what this field represents.<br>* `collection_description` (string) — Human-friendly description displayed to users and agents.<br>### Response Body<br>* `collection_id` (string) — UUIDv4 that represents an ID of the collection.<br>* `collection_name` (string) — Name of the collection.<br>* `created_at` (string) — The Unix timestamp for when the document was created.<br>* `index_configuration` (object)<br>* `model_name` (string) — Embedding model that would make the conversion.<br>* `chunk_configuration` (object)<br>* `chars_configuration` (object)<br>* `max_chunk_size_chars` (integer) — Max length per chunk.<br>* `chunk_overlap_chars` (integer) — Overlap between chunks, both sides.<br>* `tokens_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `chunk_overlap_tokens` (integer) — Overlap between chunks, both sides.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `ast_configuration` (object) — Deprecated: Use CodeTokensConfiguration or CodeCharsConfiguration instead.<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `table_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `markdown_tokens_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `chunk_overlap_tokens` (integer) — Overlap between chunks, both sides.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `markdown_chars_configuration` (object)<br>* `max_chunk_size_chars` (integer) — Max length per chunk.<br>* `chunk_overlap_chars` (integer) — Overlap between chunks, both sides.<br>* `code_tokens_configuration` (object)<br>* `max_chunk_size_tokens` (integer) — Max length per chunk.<br>* `chunk_overlap_tokens` (integer) — Overlap between chunks, both sides.<br>* `encoding_name` (string) — Name of the encoding to use for the tokenizer.<br>* `code_chars_configuration` (object)<br>* `max_chunk_size_chars` (integer) — Max length per chunk.<br>* `chunk_overlap_chars` (integer) — Overlap between chunks, both sides. |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-embedding-small |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-collections-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-collections-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • baseURL: 'https://api.x.ai/v1',<br>• base_url="https://api.x.ai/v1",<br>• url = "https://api.x.ai/v1/responses"<br>• curl https://api.x.ai/v1/responses \\ |
| capability mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>* **Knowledge Base Integration**: Seamlessly integrate your proprietary data with Grok's reasoning</li><li>model="grok-4.7", # Use a reasoning model for better analysis</li><li># Step 5: Stream the response and display reasoning progress</li><li># View server-side tool calls as they happen</li><li>for tool_call in chunk.tool_calls:</li><li>print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")</li><li>if response.usage.reasoning_tokens and is_thinking:</li><li>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)</li><li>print("\\n\\nTool Calls:")</li><li>print(latest_response.tool_calls)</li><li>reasoning_tokens: 3352</li><li>Tool Calls:</li><li>2. **Reasoning Process**: The output shows reasoning tokens accumulating (199 → 3,352 tokens), demonstrating how the model thinks through the problem before generating the final response.</li><li>4. **Structured Analysis**: The final response breaks down the methodology, shows calculations, and clearly states assumptions and limitations (e.g., Q4 2025 data not yet available).</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Tools<br># Collections Search Tool<br>The collections search tool enables Grok to search through your uploaded knowledge bases (collections), allowing it to retrieve relevant information from your documents to provide more accurate and contextually relevant responses. This tool is particularly powerful for analyzing complex documents like financial reports, legal contracts, or technical documentation, where Grok can autonomously search through multiple documents and synthesize information to answer sophisticated analytical questions.<br>For an introduction to Collections, please check out the [Collections documentation](/developers/files/collections).<br>## Key Capabilities<br>* **Document Retrieval**: Search across uploaded files and collections to find relevant information<br>* **Semantic Search**: Find documents based on meaning and context, not just keywords<br>* **Knowledge Base Integration**: Seamlessly integrate your proprietary data with Grok's reasoning<br>* **RAG Applications**: Power retrieval-augmented generation workflows<br>* **Multi-format Support**: Search across PDFs, text files, CSVs, and other supported formats<br>## When to Use Collections Search<br>The collections search tool is particularly valuable for:<br>* **Enterprise Knowledge Bases**: When you need Grok to reference internal documents and policies<br>* **Financial Analysis**: Analyzing SEC filings, earnings reports, and financial statements across multiple documents<br>* **Customer Support**: Building chatbots that can answer questions based on your product documentation<br>* **Research &amp; Due Diligence**: Synthesizing information from academic papers, technical reports, or industry analyses<br>* **Compliance &amp; Legal**: Ensuring responses are grounded in your official guidelines and regulations<br>* **Personal Knowledge Management**: Organizing and querying your personal document collections<br>## SDK Support<br>The collections search tool is available across multiple SDKs and APIs with different naming conventions:<br>&#124; SDK/API &#124; Tool Name &#124; Description &#124;<br>&#124;---------&#124;-----------&#124;-------------&#124;<br>&#124; xAI SDK &#124; `collections_search` &#124; Native xAI SDK implementation &#124;<br>&#124; OpenAI Responses API &#124; `file_search` &#124; Compatible with OpenAI's API format &#124;<br>This tool is also supported in all Responses API compatible SDKs.<br>## Implementation Example<br>### End-to-End Financial Analysis Example<br>This comprehensive example demonstrates analyzing Tesla's SEC filings using the collections search tool. It covers:<br>1. Creating a collection for document storage<br>2. Uploading multiple financial documents concurrently (10-Q and 10-K filings)<br>3. Using Grok with collections search to analyze and synthesize information across documents in an agentic manner<br>4. Enabling code execution to allow the model to perform calculations and mathematical analysis effectively should it be needed.<br>5. Receiving cited responses and tool usage information<br>This pattern is applicable to any document analysis workflow where you need to search through and reason over multiple documents.<br>```javascriptAISDK<br>import { createOpenAI } from '@ai-sdk/openai';<br>import { streamText } from 'ai';<br>const openai = createOpenAI({<br>baseURL: 'https://api.x.ai/v1',<br>apiKey: process.env.XAI_API_KEY,<br>});<br>const result = streamText({<br>model: openai('grok-4.7'),<br>prompt: 'What documents do you have access to?',<br>tools: {<br>file_search: openai.tools.fileSearch({<br>vectorStoreIds: ['your-vector-store-id'],<br>maxNumResults: 5,<br>}),<br>},<br>});<br>```<br>```pythonOpenAISDK<br>import os<br>from openai import OpenAI<br># Using OpenAI SDK with xAI API (requires pre-created collection)<br>api_key = os.getenv("XAI_API_KEY")<br>client = OpenAI(<br>api_key=api_key,<br>base_url="https://api.x.ai/v1",<br>)<br># Note: You must create the collection and upload documents first using either the xAI console (console.x.ai) or the xAI SDK<br># The collection_id below should be replaced with your actual collection ID<br>response = client.responses.create(<br>model="grok-4.7",<br>input=[<br>{<br>"role": "user",<br>"content": "How many consumer vehicles did Tesla produce in total in 2024 and 2025? Show your working and cite your sources.",<br>},<br>],<br>tools=[<br>{<br>"type": "file_search",<br>"vector_store_ids": ["your_collection_id_here"], # Replace with actual collection ID<br>"max_num_results": 10<br>},<br>{"type": "code_interpreter"}, # Enable code execution for calculations<br>],<br>)<br>print(response)<br>```<br>```pythonRequests<br>import os<br>import requests<br># Using raw requests (requires pre-created collection)<br>url = "https://api.x.ai/v1/responses"<br>headers = {<br>"Content-Type": "application/json",<br>"Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"<br>}<br>payload = {<br>"model": "grok-4.7",<br>"input": [<br>{<br>"role": "user",<br>"content": "How many consumer vehicles did Tesla produce in total in 2024 and 2025? Show your working and cite your sources."<br>}<br>],<br>"tools": [ |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.7 |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $XAI_API_KEY" \\<br>• Calling tool: collections_search with arguments: {"query":"Tesla annual vehicle production 2024 total","limit":5}<br>• 1. **Autonomous Search Strategy**: Grok autonomously performs 13 different searches across the documents, progressively refining queries to find specific quarterly and annual production data. |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-collections-search |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 SDK Support › headers | 新增 | 未记录 | • SDK/API<br>• Tool Name<br>• Description |
| tables › 记录 SDK Support › heading | 新增 | 未记录 | SDK Support |
| tables › 记录 SDK Support › rows › 记录 OpenAI Responses API | 新增 | 未记录 | • OpenAI Responses API<br>• `file_search`<br>• Compatible with OpenAI's API format |
| tables › 记录 SDK Support › rows › 记录 xAI SDK | 新增 | 未记录 | • xAI SDK<br>• `collections_search`<br>• Native xAI SDK implementation |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-files-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>base_url="https://api.x.ai/v1",</li><li>url = "https://api.x.ai/v1/files"</li><li>baseURL: "https://api.x.ai/v1",</li><li>const response = await fetch("https://api.x.ai/v1/files", {</li><li>curl https://api.x.ai/v1/files \\</li><li>const response = await fetch(\`https://api.x.ai/v1/files?\${params}\`, {</li><li>url = f"https://api.x.ai/v1/files/{file_id}"</li><li>const response = await fetch("https://api.x.ai/v1/files/file-abc123", {</li><li>curl https://api.x.ai/v1/files/file-abc123 \\</li><li>url = f"https://api.x.ai/v1/files/{file_id}/content"</li><li>const response = await fetch("https://api.x.ai/v1/files/file-abc123/content", {</li><li>curl https://api.x.ai/v1/files/file-abc123/content \\</li><li>curl -X DELETE https://api.x.ai/v1/files/file-abc123 \\</li></ul></details> |
| capability mentions | 新增 | 未记录 | • * Structured documents (with clear sections, headings) |
| excerpt | 新增 | 未记录 | #### Files &amp; Collections<br># Managing Files<br>The Files API provides a complete set of operations for managing your files. If your files are publicly accessible, you can reference them directly by URL in chat conversations — see [Attaching Files](/developers/model-capabilities/files/chat-with-files#attaching-files). For files that aren't publicly accessible, upload them using one of the methods described below.<br>You can also view and manage all of your uploaded files from the [Files page](https://console.x.ai/team/default/files?utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-files-managing-files\&amp;utm_content=files) on the xAI Console.<br>## Uploading Files<br>You can upload files in several ways: from a file path, raw bytes, BytesIO object, or an open file handle.<br>### Upload from File Path<br>```pythonOpenAISDK<br>import os<br>from openai import OpenAI<br>client = OpenAI(<br>api_key=os.getenv("XAI_API_KEY"),<br>base_url="https://api.x.ai/v1",<br>)<br># Upload a file<br>with open("/path/to/your/document.pdf", "rb") as f:<br>file = client.files.create(<br>file=f,<br>purpose="assistants"<br>)<br>print(f"File ID: {file.id}")<br>print(f"Filename: {file.filename}")<br>```<br>```pythonRequests<br>import os<br>import requests<br>url = "https://api.x.ai/v1/files"<br>headers = {<br>"Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"<br>}<br>with open("/path/to/your/document.pdf", "rb") as f:<br>files = {"file": f}<br>data = {"purpose": "assistants"}<br>response = requests.post(url, headers=headers, files=files, data=data)<br>file_data = response.json()<br>print(f"File ID: {file_data['id']}")<br>print(f"Filename: {file_data['filename']}")<br>```<br>```javascriptOpenAISDK<br>import OpenAI from "openai";<br>import fs from "fs";<br>const client = new OpenAI({<br>apiKey: process.env.XAI_API_KEY,<br>baseURL: "https://api.x.ai/v1",<br>});<br>// Upload a file<br>const file = await client.files.create({<br>file: fs.createReadStream("/path/to/your/document.pdf"),<br>purpose: "assistants",<br>});<br>console.log("File ID: " + file.id);<br>console.log("Filename: " + file.filename);<br>```<br>```javascriptWithoutSDK<br>import fs from "fs";<br>const formData = new FormData();<br>formData.append("file", new Blob([fs.readFileSync("/path/to/your/document.pdf")]), "document.pdf");<br>formData.append("purpose", "assistants");<br>const response = await fetch("https://api.x.ai/v1/files", {<br>method: "POST",<br>headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` },<br>body: formData,<br>});<br>const file = await response.json();<br>console.log("File ID: " + file.id);<br>console.log("Filename: " + file.filename);<br>```<br>```bash<br>curl https://api.x.ai/v1/files \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>-F file=@/path/to/your/document.pdf \\<br>-F purpose=assistants<br>```<br>```pythonXAI<br>import os<br>from xai_sdk import Client<br>client = Client(api_key=os.getenv("XAI_API_KEY"))<br># Upload a file from disk<br>file = client.files.upload("/path/to/your/document.pdf")<br>print(f"File ID: {file.id}")<br>print(f"Filename: {file.filename}")<br>print(f"Size: {file.size} bytes")<br>print(f"Created at: {file.created_at}")<br>```<br>### Upload from Bytes<br>```pythonXAI<br>import os<br>from xai_sdk import Client<br>client = Client(api_key=os.getenv("XAI_API_KEY"))<br># Upload file content directly from bytes<br>content = b"This is my document content.\\nIt can span multiple lines."<br>file = client.files.upload(content, filename="document.txt")<br>print(f"File ID: {file.id}")<br>print(f"Filename: {file.filename}")<br>```<br>### Upload from file object<br>```pythonXAI<br>import os<br>from xai_sdk import Client<br>client = Client(api_key=os.getenv("XAI_API_KEY")) |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` },<br>• -H "Authorization: Bearer $XAI_API_KEY" \\<br>• console.log(\`File: \${file.filename} (ID: \${file.id})\`);<br>• -H "Authorization: Bearer $XAI_API_KEY"<br>• const response = await fetch(\`https://api.x.ai/v1/files?\${params}\`, {<br>• console.log(\`Total files: \${allFiles.length}\`); |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-files-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 The File Object › headers | 新增 | 未记录 | • Field<br>• Type<br>• Description |
| tables › 记录 The File Object › heading | 新增 | 未记录 | The File Object |
| tables › 记录 The File Object › rows › 记录 `bytes` | 新增 | 未记录 | • `bytes`<br>• integer<br>• File size in bytes. |
| tables › 记录 The File Object › rows › 记录 `created_at` | 新增 | 未记录 | • `created_at`<br>• integer<br>• Upload time as a Unix timestamp (seconds). |
| tables › 记录 The File Object › rows › 记录 `expires_at` | 新增 | 未记录 | • `expires_at`<br>• integer or null<br>• Unix timestamp at which the file will be deleted. `null` for permanent files; set when the file was uploaded with `expires_after`. |
| tables › 记录 The File Object › rows › 记录 `filename` | 新增 | 未记录 | • `filename`<br>• string<br>• Original filename you supplied at upload time. |
| tables › 记录 The File Object › rows › 记录 `id` | 新增 | 未记录 | • `id`<br>• string<br>• Unique file identifier (e.g. `file_a128090d-f0c9-4873-bd84-e499777e7417`). Use this anywhere a `file_id` is expected, including chat attachments. |
| tables › 记录 The File Object › rows › 记录 `object` | 新增 | 未记录 | • `object`<br>• string<br>• Always `"file"`. Returned for OpenAI compatibility. |
| tables › 记录 The File Object › rows › 记录 `purpose` | 新增 | 未记录 | • `purpose`<br>• string<br>• Echoes the `purpose` value sent at upload time. SpaceXSI does not enforce or interpret this field; it is stored for OpenAI SDK compatibility. Setting `"assistants"` is the conventional choice. |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-images-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>## POST /v1/images/generations</li><li>image is generated in the background. Poll \`GET /v1/images/\{request\_id}\`</li><li>base_url="https://api.x.ai/v1",</li><li>curl -s https://api.x.ai/v1/images/generations \</li><li>baseURL: "https://api.x.ai/v1",</li><li>## POST /v1/images/edits</li><li>edit is generated in the background. Poll \`GET /v1/images/\{request\_id}\`</li><li>curl -s https://api.x.ai/v1/images/edits \</li><li>const response = await fetch("https://api.x.ai/v1/images/edits", {</li><li>"https://api.x.ai/v1/images/edits",</li><li>## GET /v1/images/\{request\_id}</li><li>\`GET /v1/images/\{request\_id}\`: 202 while pending, 200 with \`data\` when</li><li>curl -s "https://api.x.ai/v1/images/$IMAGE_REQUEST_ID" \</li><li>`https://api.x.ai/v1/images/${process.env.IMAGE_REQUEST_ID}`,</li><li>f"https://api.x.ai/v1/images/{request_id}",</li></ul></details> |
| capability mentions | 新增 | 未记录 | 列表（59 项）<details><summary>展开完整内容</summary><ul><li># Images</li><li>## POST /v1/images/generations</li><li>Generate an image based on a prompt. This is the endpoint for making generation requests to image generation models.</li><li>image is generated in the background. Poll \`GET /v1/images/\{request\_id}\`</li><li>* `n` (integer &#124; null) — Number of images to be generated</li><li>* `upload_urls` (array\ , required) — Signed URLs to upload the generated images via HTTP PUT, one per</li><li>image: the list length must equal \`n\` (default 1). Each PUT sends a</li><li>\`Content-Type\` equal to the image's \`mime\_type\` in the response</li><li>(\`image/jpeg\` unless the requested quality produces PNG), so sign the</li><li>* `prompt` (string) — Prompt for image generation.</li><li>* `response_format` (string &#124; null) — Response format to return the image in. Can be url or b64\_json. If b64\_json is specified, the image will be returned as a base64-encoded string instead of a url to the generated image file.</li><li>* `data` (array\ , required) — A list of generated image objects.</li><li>* `b64_json` (string &#124; null) — A base64-encoded string representation of the generated image (without the data-URI prefix), if \`b64\_json\` is specified as \`response\_format\` in the request.</li><li>* `mime_type` (string &#124; null) — The MIME type of the generated image (e.g. \`image/png\`, \`image/jpeg\`, \`image/webp\`).</li><li>* `url` (string &#124; null) — A url to the generated image, if \`response\_format\` is not specified or with \`url\` in the request.</li><li>* `input_tokens` (integer &#124; null) — Total input tokens: prompt text tokens + input image tokens</li><li>* `image_tokens` (integer, required) — Input image tokens, as reported by the image engine.</li><li>* `output_tokens` (integer &#124; null) — Total output tokens: rewritten-prompt text tokens + reasoning tokens</li><li>\+ generated image tokens (the sum of \`output\_tokens\_details\`).</li><li>* `image_tokens` (integer, required) — Generated image tokens, as reported by the image engine.</li><li>* `reasoning_tokens` (integer, required) — Reasoning (thinking) tokens generated by the prompt-rewriting</li><li>(upsampler) LLM, excluding reasoning tokens.</li><li>response = client.images.generate(</li><li>model="grok-imagine-image-2.0",</li><li>curl -s https://api.x.ai/v1/images/generations \</li><li>"model": "grok-imagine-image-2.0",</li><li>const response = await client.images.generate({</li><li>model: "grok-imagine-image-2.0",</li><li>## POST /v1/images/edits</li><li>Edit an image based on a prompt. This is the endpoint for making edit requests to image generation models.</li><li>edit is generated in the background. Poll \`GET /v1/images/\{request\_id}\`</li><li>* `image` (object)</li><li>The file must be an image (JPEG, PNG, or WebP) and fully uploaded.</li><li>* `url` (string) — Public URL or base64-encoded data URL of the image (JPEG, PNG, or WebP).</li><li>Also accepts \`image\_url\` for compatibility.</li><li>* `images` (array\ ) — List of input images for multi-reference editing.</li><li>Mutually exclusive with \`image\`. When multiple images are provided,</li><li>* `n` (integer &#124; null) — Number of image edits to be generated.</li><li>* `prompt` (string, required) — Prompt for image editing.</li><li>* `response_format` (string &#124; null) — Response format to return the image in. Can be \`url\` or \`b64\_json\`. If \`b64\_json\` is specified, the image will be returned as a base64-encoded string instead of a url to the generated image file.</li><li>curl -s https://api.x.ai/v1/images/edits \</li><li>"image": {</li><li>"url": "https://docs.x.ai/assets/api-examples/images/style-realistic.png",</li><li>"type": "image_url"</li><li>const response = await fetch("https://api.x.ai/v1/images/edits", {</li><li>image: {</li><li>url: "https://docs.x.ai/assets/api-examples/images/style-realistic.png",</li><li>type: "image_url",</li><li>"https://api.x.ai/v1/images/edits",</li><li>"type": "image_url",</li><li>## GET /v1/images/\{request\_id}</li><li>\`GET /v1/images/\{request\_id}\`: 202 while pending, 200 with \`data\` when</li><li>* `request_id` (string, required) — The deferred request id returned by a previous image request.</li><li>* `data` (array &#124; null) — The generated images. Present when done.</li><li>curl -s "https://api.x.ai/v1/images/$IMAGE_REQUEST_ID" \</li><li>`https://api.x.ai/v1/images/${process.env.IMAGE_REQUEST_ID}`,</li><li>request_id = os.environ["IMAGE_REQUEST_ID"]</li><li>f"https://api.x.ai/v1/images/{request_id}",</li><li>"image_cost": 2000000</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Inference API<br># Images<br>## POST /v1/images/generations<br>Generate an image based on a prompt. This is the endpoint for making generation requests to image generation models.<br>### Request Body<br>* `aspect_ratio` ("1:1" &#124; "3:4" &#124; "4:3" &#124; "9:16" &#124; "16:9" &#124; "2:3" &#124; "3:2" &#124; "9:19.5" &#124; "19.5:9" &#124; "9:20" &#124; "20:9" &#124; "1:2" &#124; "2:1" &#124; "21:9" &#124; "5:2" &#124; "auto")<br>* `deferred` (boolean &#124; null) — If set, the request returns immediately with a \`request\_id\` and the<br>image is generated in the background. Poll \`GET /v1/images/\{request\_id}\`<br>for the result. Only \`response\_format: "url"\` is supported in this mode.<br>* `model` (string &#124; null) — Model to be used.<br>* `n` (integer &#124; null) — Number of images to be generated<br>* `output` (object)<br>* `upload_urls` (array\ , required) — Signed URLs to upload the generated images via HTTP PUT, one per<br>image: the list length must equal \`n\` (default 1). Each PUT sends a<br>\`Content-Type\` equal to the image's \`mime\_type\` in the response<br>(\`image/jpeg\` unless the requested quality produces PNG), so sign the<br>URL for that type or without a Content-Type constraint. Azure Blob SAS<br>URLs also get \`x-ms-blob-type: BlockBlob\`.<br>* `prompt` (string) — Prompt for image generation.<br>* `resolution` ("1k" &#124; "2k" &#124; "1.5k")<br>* `response_format` (string &#124; null) — Response format to return the image in. Can be url or b64\_json. If b64\_json is specified, the image will be returned as a base64-encoded string instead of a url to the generated image file.<br>* `storage_options` (object)<br>* `expires_after` (integer &#124; null) — Seconds from now until the file auto-expires. Maximum 2592000 (30 days).<br>If omitted, the file does not expire.<br>* `filename` (string, required) — Filename for the stored file.<br>* `public_url` (boolean &#124; object)<br>* `user` (string &#124; null) — A unique identifier representing your end-user, which can help xAI to monitor and detect abuse.<br>### Response Body<br>* `data` (array\ , required) — A list of generated image objects.<br>* `b64_json` (string &#124; null) — A base64-encoded string representation of the generated image (without the data-URI prefix), if \`b64\_json\` is specified as \`response\_format\` in the request.<br>* `file_output` (object)<br>* `expires_at` (integer &#124; null) — Unix timestamp (seconds) when the stored file expires and will be<br>automatically deleted. Only present when the file has an expiration.<br>* `file_id` (string, required) — Files API file\_id of the stored file.<br>* `filename` (string, required) — Filename of the stored file.<br>* `public_url` (string &#124; null) — Public URL for the stored file. Only present when the request included<br>\`storage\_options.public\_url\` and creation succeeded.<br>* `public_url_error` (string &#124; null) — Human-readable error when \`storage\_options.public\_url\` was set but<br>public URL creation failed. The file was stored successfully.<br>* `public_url_expires_at` (integer &#124; null) — Unix timestamp (seconds) when the public URL expires. Present when<br>the public URL has an expiry, either from an explicit \`expires\_after\`<br>in the request or inherited from the file's TTL.<br>* `mime_type` (string &#124; null) — The MIME type of the generated image (e.g. \`image/png\`, \`image/jpeg\`, \`image/webp\`).<br>* `storage_error` (string &#124; null) — Human-readable error when \`storage\_options\` was set but the upload<br>failed. Absent on success or when storage was not requested.<br>* `url` (string &#124; null) — A url to the generated image, if \`response\_format\` is not specified or with \`url\` in the request.<br>* `usage` (object)<br>* `cost_in_usd_ticks` (integer, required) — The cost of this request expressed in USD ticks.<br>One USD cent equals 100,000,000 ticks, so one US dollar equals<br>10,000,000,000 ticks.<br>* `input_tokens` (integer &#124; null) — Total input tokens: prompt text tokens + input image tokens<br>(the sum of \`input\_tokens\_details\`, where \`cached\_tokens\` is a subset<br>of \`text\_tokens\`, not additive).<br>* `input_tokens_details` (object)<br>* `cached_tokens` (integer, required) — Text tokens served from cache from previous requests (a subset of<br>\`text\_tokens\`).<br>* `image_tokens` (integer, required) — Input image tokens, as reported by the image engine.<br>* `text_tokens` (integer, required) — Prompt text tokens consumed by the prompt-rewriting (upsampler) LLM,<br>including any served from cache.<br>* `output_tokens` (integer &#124; null) — Total output tokens: rewritten-prompt text tokens + reasoning tokens<br>\+ generated image tokens (the sum of \`output\_tokens\_details\`).<br>* `output_tokens_details` (object)<br>* `image_tokens` (integer, required) — Generated image tokens, as reported by the image engine.<br>* `reasoning_tokens` (integer, required) — Reasoning (thinking) tokens generated by the prompt-rewriting<br>(upsampler) LLM.<br>* `text_tokens` (integer, required) — Rewritten-prompt text tokens generated by the prompt-rewriting<br>(upsampler) LLM, excluding reasoning tokens.<br>* `total_tokens` (integer &#124; null) — Total tokens (input + output).<br>### Code Examples<br>```pythonOpenAISDK<br>import os<br>from openai import OpenAI<br>client = OpenAI(<br>api_key=os.environ["XAI_API_KEY"],<br>base_url="https://api.x.ai/v1",<br>)<br>response = client.images.generate(<br>model="grok-imagine-image-2.0",<br>prompt="A collage of London landmarks in a stenciled street‑art style",<br>)<br>print(response.model_dump_json(indent=2))<br>```<br>```bash<br>curl -s https://api.x.ai/v1/images/generations \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-d '{<br>"model": "grok-imagine-image-2.0",<br>"prompt": "A collage of London landmarks in a stenciled street‑art style"<br>}'<br>```<br>```javascriptOpenAISDK<br>import OpenAI from "openai";<br>const client = new OpenAI({<br>apiKey: process.env.XAI_API_KEY,<br>baseURL: "https://api.x.ai/v1",<br>});<br>const response = await client.images.generate({<br>model: "grok-imagine-image-2.0",<br>prompt: "A collage of London landmarks in a stenciled street‑art style", |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-imagine-image-2.0 |
| plan or price mentions | 新增 | 未记录 | 列表（20 项）<details><summary>展开完整内容</summary><ul><li>## POST /v1/images/generations</li><li>image is generated in the background. Poll \`GET /v1/images/\{request\_id}\`</li><li>* `cost_in_usd_ticks` (integer, required) — The cost of this request expressed in USD ticks.</li><li>One USD cent equals 100,000,000 ticks, so one US dollar equals</li><li>curl -s https://api.x.ai/v1/images/generations \</li><li>-H "Authorization: Bearer $XAI_API_KEY" \</li><li>## POST /v1/images/edits</li><li>edit is generated in the background. Poll \`GET /v1/images/\{request\_id}\`</li><li>curl -s https://api.x.ai/v1/images/edits \</li><li>"url": "https://docs.x.ai/assets/api-examples/images/style-realistic.png",</li><li>const response = await fetch("https://api.x.ai/v1/images/edits", {</li><li>Authorization: `Bearer ${process.env.XAI_API_KEY}`,</li><li>url: "https://docs.x.ai/assets/api-examples/images/style-realistic.png",</li><li>"https://api.x.ai/v1/images/edits",</li><li>## GET /v1/images/\{request\_id}</li><li>\`GET /v1/images/\{request\_id}\`: 202 while pending, 200 with \`data\` when</li><li>curl -s "https://api.x.ai/v1/images/$IMAGE_REQUEST_ID" \</li><li>-H "Authorization: Bearer $XAI_API_KEY"</li><li>`https://api.x.ai/v1/images/${process.env.IMAGE_REQUEST_ID}`,</li><li>f"https://api.x.ai/v1/images/{request_id}",</li></ul></details> |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xai-images-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-imagine

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url="https://api.x.ai/v1",<br>• curl -X POST https://api.x.ai/v1/images/generations \<br>• curl -X POST https://api.x.ai/v1/images/edits \<br>• REQUEST_ID=$(curl -s -X POST https://api.x.ai/v1/videos/generations \<br>• RESULT=$(curl -s https://api.x.ai/v1/videos/$REQUEST_ID \ |
| capability mentions | 新增 | 未记录 | 列表（51 项）<details><summary>展开完整内容</summary><ul><li>The Imagine API lets you generate and edit images and videos with Grok Imagine models. Use it for image generation, image editing with up to 5 reference images, video generation from text or still images, video editing, and more.</li><li>Image generation uses flat per-image pricing regardless of prompt length. Each generated image incurs a fixed fee. Image edits are billed for both the input image and the generated output image. Video generation uses per-second pricing where both duration and resolution affect the total cost. For full pricing details, see the [pricing page](/developers/pricing#imagine-api-pricing).</li><li>## Image Generation</li><li>Generate new images from text prompts with Grok Imagine models. Configure output count (up to 10 images per request), aspect ratio, resolution, and response format.</li><li>import { generateImage } from "ai";</li><li>const { image } = await generateImage({</li><li>model: xai.image("grok-imagine-image-2.0"),</li><li>console.log(image.base64);</li><li>response = client.images.generate(</li><li>model="grok-imagine-image-2.0",</li><li>curl -X POST https://api.x.ai/v1/images/generations \</li><li>"model": "grok-imagine-image-2.0",</li><li>response = client.image.sample(</li><li>## Image Editing</li><li>Edit a source image with natural language. Provide a public image URL or base64-encoded data URI, then describe the change you want Grok Imagine to apply. Multi-image editing supports up to 5 source images in a single request for combining subjects, transferring styles, and composing scenes.</li><li>// Load image and encode as base64</li><li>const imageBuffer = fs.readFileSync("photo.png");</li><li>const base64Image = imageBuffer.toString("base64");</li><li>images: [`data:image/png;base64,${base64Image}`],</li><li># Using a public URL as the source image</li><li>curl -X POST https://api.x.ai/v1/images/edits \</li><li>"image": {</li><li>"url": "https://docs.x.ai/assets/api-examples/images/style-realistic.png",</li><li>"type": "image_url"</li><li># Load image from file and encode as base64</li><li>image_data = base64.b64encode(f.read()).decode("utf-8")</li><li>image_url=f"data:image/png;base64,{image_data}",</li><li>## Video Generation</li><li>Animate a still image with a text prompt. The source image becomes the starting point for the generated video. Video requests are asynchronous: start a request, poll with the returned request ID, and use the completed video URL when ready. The xAI SDK and AI SDK handle polling for you.</li><li>import { experimental_generateVideo as generateVideo } from "ai";</li><li>const result = await generateVideo({</li><li>model: xai.video("grok-imagine-video-1.5"),</li><li>image: "https://docs.x.ai/assets/api-examples/video/waterfall-still.png",</li><li>const videoUrl = result.providerMetadata?.xai?.videoUrl;</li><li>console.log(videoUrl);</li><li># Start the video generation request</li><li>REQUEST_ID=$(curl -s -X POST https://api.x.ai/v1/videos/generations \</li><li>"model": "grok-imagine-video-1.5",</li><li>"image": {"url": "https://docs.x.ai/assets/api-examples/video/waterfall-still.png"},</li><li># Poll until the video is ready</li><li>RESULT=$(curl -s https://api.x.ai/v1/videos/$REQUEST_ID \</li><li>echo "$RESULT" &#124; jq -r '.video.url'</li><li>response = client.video.generate(</li><li>model="grok-imagine-video-1.5",</li><li>image_url="https://docs.x.ai/assets/api-examples/video/waterfall-still.png",</li><li>Beyond the top use cases above, the Imagine API supports several additional workflows. The [Video Overview](/developers/model-capabilities/video/overview) compares the video models and shows each mode with real inputs and outputs.</li><li>* **[Multi-Image Editing](/developers/model-capabilities/images/multi-image-editing)** — Combine up to 5 source images in a single edit for compositing subjects, transferring styles, and building scenes from multiple references.</li><li>* **[Video Generation](/developers/model-capabilities/video/generation)** — Generate videos from text prompts with configurable duration (up to 15s), aspect ratio, and resolution.</li><li>* **[Video Editing](/developers/model-capabilities/video/editing)** — Modify an existing video with a text prompt on `grok-imagine-video`.</li><li>* **[Reference-to-Video](/developers/model-capabilities/video/reference-to-video)** — Guide a video with up to 14 reference images and 3 voice references on `grok-imagine-video-1.5`, and pin first, last, and mid-video frames.</li><li>* **[Video Extension](/developers/model-capabilities/video/extension)** — Continue an existing video from its last frame, combining the original and extension into one clip.</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Model Capabilities<br># Imagine Overview<br>The Imagine API lets you generate and edit images and videos with Grok Imagine models. Use it for image generation, image editing with up to 5 reference images, video generation from text or still images, video editing, and more.<br>## Pricing<br>Image generation uses flat per-image pricing regardless of prompt length. Each generated image incurs a fixed fee. Image edits are billed for both the input image and the generated output image. Video generation uses per-second pricing where both duration and resolution affect the total cost. For full pricing details, see the [pricing page](/developers/pricing#imagine-api-pricing).<br>## Image Generation<br>Generate new images from text prompts with Grok Imagine models. Configure output count (up to 10 images per request), aspect ratio, resolution, and response format.<br>```javascript customLanguage="javascriptAISDK"<br>import { xai } from "@ai-sdk/xai";<br>import { generateImage } from "ai";<br>const { image } = await generateImage({<br>model: xai.image("grok-imagine-image-2.0"),<br>prompt: "A collage of London landmarks in a stenciled street‑art style",<br>});<br>console.log(image.base64);<br>```<br>```python customLanguage="pythonOpenAISDK"<br>from openai import OpenAI<br>client = OpenAI(<br>base_url="https://api.x.ai/v1",<br>api_key="YOUR_API_KEY",<br>)<br>response = client.images.generate(<br>model="grok-imagine-image-2.0",<br>prompt="A collage of London landmarks in a stenciled street‑art style",<br>)<br>print(response.data[0].url)<br>```<br>```bash<br>curl -X POST https://api.x.ai/v1/images/generations \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-d '{<br>"model": "grok-imagine-image-2.0",<br>"prompt": "A collage of London landmarks in a stenciled street‑art style"<br>}'<br>```<br>```python customLanguage="pythonXAI"<br>import xai_sdk<br>client = xai_sdk.Client()<br>response = client.image.sample(<br>prompt="A collage of London landmarks in a stenciled street‑art style",<br>model="grok-imagine-image-2.0",<br>)<br>print(response.url)<br>```<br>## Image Editing<br>Edit a source image with natural language. Provide a public image URL or base64-encoded data URI, then describe the change you want Grok Imagine to apply. Multi-image editing supports up to 5 source images in a single request for combining subjects, transferring styles, and composing scenes.<br>```javascript customLanguage="javascriptAISDK"<br>import { xai } from "@ai-sdk/xai";<br>import { generateImage } from "ai";<br>import fs from "fs";<br>// Load image and encode as base64<br>const imageBuffer = fs.readFileSync("photo.png");<br>const base64Image = imageBuffer.toString("base64");<br>const { image } = await generateImage({<br>model: xai.image("grok-imagine-image-2.0"),<br>prompt: {<br>text: "Render this as a pencil sketch with detailed shading",<br>images: [`data:image/png;base64,${base64Image}`],<br>},<br>});<br>console.log(image.base64);<br>```<br>```bash<br># Using a public URL as the source image<br>curl -X POST https://api.x.ai/v1/images/edits \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-d '{<br>"model": "grok-imagine-image-2.0",<br>"prompt": "Render this as a pencil sketch with detailed shading",<br>"image": {<br>"url": "https://docs.x.ai/assets/api-examples/images/style-realistic.png",<br>"type": "image_url"<br>}<br>}'<br>```<br>```python customLanguage="pythonXAI"<br>import base64<br>import xai_sdk<br>client = xai_sdk.Client()<br># Load image from file and encode as base64<br>with open("photo.png", "rb") as f:<br>image_data = base64.b64encode(f.read()).decode("utf-8")<br>response = client.image.sample(<br>prompt="Render this as a pencil sketch with detailed shading",<br>model="grok-imagine-image-2.0",<br>image_url=f"data:image/png;base64,{image_data}",<br>)<br>print(response.url)<br>```<br>## Video Generation<br>Animate a still image with a text prompt. The source image becomes the starting point for the generated video. Video requests are asynchronous: start a request, poll with the returned request ID, and use the completed video URL when ready. The xAI SDK and AI SDK handle polling for you.<br>```javascript customLanguage="javascriptAISDK"<br>import { xai } from "@ai-sdk/xai";<br>import { experimental_generateVideo as generateVideo } from "ai";<br>const result = await generateVideo({<br>model: xai.video("grok-imagine-video-1.5"),<br>prompt: { |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-imagine-image-2.0<br>• grok-imagine-video<br>• grok-imagine-video-1.5<br>• imagine-api-pricing |
| plan or price mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>curl -X POST https://api.x.ai/v1/images/generations \</li><li>-H "Authorization: Bearer $XAI_API_KEY" \</li><li>images: [`data:image/png;base64,${base64Image}`],</li><li>curl -X POST https://api.x.ai/v1/images/edits \</li><li>"url": "https://docs.x.ai/assets/api-examples/images/style-realistic.png",</li><li>REQUEST_ID=$(curl -s -X POST https://api.x.ai/v1/videos/generations \</li><li>RESULT=$(curl -s https://api.x.ai/v1/videos/$REQUEST_ID \</li><li>-H "Authorization: Bearer $XAI_API_KEY")</li><li>STATUS=$(echo "$RESULT" &#124; jq -r '.status')</li><li>if [ "$STATUS" = "done" ]; then</li><li>echo "$RESULT" &#124; jq -r '.video.url'</li><li>elif [ "$STATUS" = "failed" ] &#124;&#124; [ "$STATUS" = "expired" ]; then</li><li>echo "Request $STATUS"; echo "$RESULT" &#124; jq .</li><li>* **[Multi-Image Editing](/developers/model-capabilities/images/multi-image-editing)** — Combine up to 5 source images in a single edit for compositing subjects, transferring styles, and building scenes from multiple references.</li></ul></details> |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-imagine |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-models-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | account_scoped |
| api mentions | 新增 | 未记录 | • ## GET /v1/models<br>• ## GET /v1/models/\{model\_id}<br>• ## GET /v1/language-models<br>• ## GET /v1/language-models/\{model\_id}<br>• ## GET /v1/image-generation-models<br>• ## GET /v1/image-generation-models/\{model\_id}<br>• ## GET /v1/video-generation-models<br>• ## GET /v1/video-generation-models/\{model\_id} |
| capability mentions | 新增 | 未记录 | 列表（40 项）<details><summary>展开完整内容</summary><ul><li>* `default_reasoning_effort` (string &#124; null) — Model-wide default when effort is omitted; aliases may have their own defaults.</li><li>* `reasoning_effort` (array\ , required) — The values the model accepts for \`reasoning\_effort\` or \`reasoning.effort\`.</li><li>* `image_price` (integer &#124; null) — Price per image in USD cents (image generation models).</li><li>* `pricing` (array\ ) — Per-image prices by (quality, resolution) tier (image generation</li><li>(see \`image\_price\`).</li><li>* `price_per_image` (integer, required) — Price per generated image, in 1/100,000,000ths of a USD cent.</li><li>* `prompt_image_token_price` (integer &#124; null) — Price of the prompt image token in USD cents per 100 million tokens.</li><li>"prompt_image_token_price": 12500,</li><li>"id": "grok-420-reasoning",</li><li>"prompt_image_token_price": 0,</li><li>"reasoning_effort": [</li><li>"default_reasoning_effort": "high"</li><li>"id": "grok-imagine-image",</li><li>"image_price": 200000000</li><li>List all chat and image understanding models available to the authenticating API key with full information. Additional information compared to /v1/models includes modalities, fingerprint and alias(es).</li><li>* `input_modalities` (array\ , required) — The input modalities supported by the model, e.g. \`"text"\`, \`"image"\`.</li><li>* `output_modalities` (array\ , required) — The output modalities supported by the model, e.g. \`"text"\`, \`"image"\`.</li><li>* `prompt_image_token_price` (integer, required) — Price of the prompt image token in USD cents per 100 million token.</li><li>"image"</li><li>Get full information about a chat or image understanding model with its model\_id.</li><li>## GET /v1/image-generation-models</li><li>List all image generation models available to the authenticating API key with full information. Additional information compared to /v1/models includes modalities, fingerprint and alias(es).</li><li>* `models` (array\ , required) — Array of available image generation models.</li><li>* `image_price` (integer, required) — Price of a single image in USD cents.</li><li>* `pricing` (array\ ) — Per-image prices by (quality, resolution) tier. One entry per</li><li>qualities identically (see \`image\_price\`).</li><li>"prompt_image_token_price": 100000,</li><li>"generated_image_token_price": 100000,</li><li>## GET /v1/image-generation-models/\{model\_id}</li><li>Get full information about an image generation model with its model\_id.</li><li>## GET /v1/video-generation-models</li><li>List all video generation models available to the authenticating API key with full information.</li><li>* `models` (array\ , required) — Array of available video generation models.</li><li>* `input_modalities` (array\ , required) — The input modalities supported by the model (e.g. "text", "image";</li><li>"audio" for models accepting reference audio).</li><li>* `output_modalities` (array\ , required) — The output modalities supported by the model (e.g. "video").</li><li>"id": "grok-imagine-video",</li><li>"video"</li><li>## GET /v1/video-generation-models/\{model\_id}</li><li>Get full information about a video generation model with its model\_id.</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Inference API<br># Models<br>## GET /v1/models<br>List all models available to the authenticating API key, including model names (ID), creation times, and pricing.<br>### Response Body<br>* `data` (array\ , required) — A list of models with with minimalized information.<br>* `aliases` (array\ , required) — Alias ID(s) of the model that user can use in a request's model field.<br>* `cached_prompt_text_token_price` (integer &#124; null) — Price of a prompt text token (in USD cents per 100 million tokens) that was cached previously.<br>* `cached_prompt_text_token_price_long_context` (integer &#124; null) — Price of the cached prompt text token for long context requests (USD cents per 100 million tokens).<br>* `capabilities` (object)<br>* `default_reasoning_effort` (string &#124; null) — Model-wide default when effort is omitted; aliases may have their own defaults.<br>* `reasoning_effort` (array\ , required) — The values the model accepts for \`reasoning\_effort\` or \`reasoning.effort\`.<br>* `completion_text_token_price` (integer &#124; null) — Price of the completion text token in USD cents per 100 million tokens.<br>* `completion_text_token_price_long_context` (integer &#124; null) — Price of the completion text token for long context requests (USD cents per 100 million tokens).<br>* `context_length` (integer &#124; null) — The maximum context length supported by the model, in tokens.<br>* `created` (integer, required) — Model creation time in Unix timestamp.<br>* `id` (string, required) — Model ID. Obtainable from \ or \ .<br>* `image_price` (integer &#124; null) — Price per image in USD cents (image generation models).<br>The default tier: medium quality at the default (1k) resolution. See<br>\`pricing\` for the full quality/resolution matrix.<br>* `long_context_threshold` (integer &#124; null) — Token count at or above which the long context prices apply.<br>* `object` (string, required) — The object type, which is always \`"model"\`.<br>* `owned_by` (string, required) — Owner of the model.<br>* `pricing` (array\ ) — Per-image prices by (quality, resolution) tier (image generation<br>models). Omitted when the model prices all qualities identically<br>(see \`image\_price\`).<br>* `price_per_image` (integer, required) — Price per generated image, in 1/100,000,000ths of a USD cent.<br>* `quality` (string, required) — Quality tier this price applies to: \`"low"\`, \`"medium"\`, or \`"high"\`.<br>Medium is the default quality a request serves at when it leaves<br>\`quality\` unset.<br>* `resolution` (string, required) — Output resolution this price applies to: \`"1k"\`, \`"1.5k"\`, or \`"2k"\`.<br>1k is the default when a request leaves \`resolution\` unset.<br>* `prompt_image_token_price` (integer &#124; null) — Price of the prompt image token in USD cents per 100 million tokens.<br>* `prompt_text_token_price` (integer &#124; null) — Price of the prompt text token in USD cents per 100 million tokens.<br>* `prompt_text_token_price_long_context` (integer &#124; null) — Price of the prompt text token for long context requests (USD cents per 100 million tokens).<br>* `object` (string, required) — The object type of \`data\` field, which is always \`"list"\`.<br>\*\*Response example:\*\*<br>```json<br>{<br>"data": [<br>{<br>"id": "latest",<br>"aliases": [],<br>"context_length": 131072,<br>"created": 1776556800,<br>"object": "model",<br>"owned_by": "xai",<br>"prompt_text_token_price": 12500,<br>"cached_prompt_text_token_price": 2000,<br>"prompt_image_token_price": 12500,<br>"completion_text_token_price": 25000<br>},<br>{<br>"id": "grok-420-reasoning",<br>"aliases": [],<br>"context_length": 256000,<br>"created": 1768003200,<br>"object": "model",<br>"owned_by": "xai",<br>"prompt_text_token_price": 20000,<br>"cached_prompt_text_token_price": 2000,<br>"prompt_image_token_price": 0,<br>"completion_text_token_price": 80000,<br>"prompt_text_token_price_long_context": 40000,<br>"completion_text_token_price_long_context": 160000,<br>"long_context_threshold": 128000,<br>"capabilities": {<br>"reasoning_effort": [<br>"low",<br>"medium",<br>"high",<br>"xhigh"<br>],<br>"default_reasoning_effort": "high"<br>}<br>},<br>{<br>"id": "grok-imagine-image",<br>"aliases": [],<br>"context_length": 1024,<br>"created": 1769472000,<br>"object": "model",<br>"owned_by": "xai",<br>"image_price": 200000000<br>}<br>],<br>"object": "list"<br>}<br>```<br>***<br>## GET /v1/models/\{model\_id}<br>Get information about a model with its model\_id, including pricing.<br>### Path Parameters<br>* `model_id` (string, required) — ID of the model to get.<br>### Response Body<br>* `aliases` (array\ , required) — Alias ID(s) of the model that user can use in a request's model field.<br>* `cached_prompt_text_token_price` (integer &#124; null) — Price of a prompt text token (in USD cents per 100 million tokens) that was cached previously.<br>* `cached_prompt_text_token_price_long_context` (integer &#124; null) — Price of the cached prompt text token for long context requests (USD cents per 100 million tokens).<br>* `capabilities` (object)<br>* `default_reasoning_effort` (string &#124; null) — Model-wide default when effort is omitted; aliases may have their own defaults. |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4<br>• grok-4-latest<br>• grok-4.3-latest<br>• grok-420-reasoning<br>• grok-imagine-image<br>• grok-imagine-video |
| plan or price mentions | 新增 | 未记录 | 列表（20 项）<details><summary>展开完整内容</summary><ul><li>* `cached_prompt_text_token_price` (integer &#124; null) — Price of a prompt text token (in USD cents per 100 million tokens) that was cached previously.</li><li>* `cached_prompt_text_token_price_long_context` (integer &#124; null) — Price of the cached prompt text token for long context requests (USD cents per 100 million tokens).</li><li>* `completion_text_token_price` (integer &#124; null) — Price of the completion text token in USD cents per 100 million tokens.</li><li>* `completion_text_token_price_long_context` (integer &#124; null) — Price of the completion text token for long context requests (USD cents per 100 million tokens).</li><li>* `image_price` (integer &#124; null) — Price per image in USD cents (image generation models).</li><li>* `price_per_image` (integer, required) — Price per generated image, in 1/100,000,000ths of a USD cent.</li><li>* `prompt_image_token_price` (integer &#124; null) — Price of the prompt image token in USD cents per 100 million tokens.</li><li>* `prompt_text_token_price` (integer &#124; null) — Price of the prompt text token in USD cents per 100 million tokens.</li><li>* `prompt_text_token_price_long_context` (integer &#124; null) — Price of the prompt text token for long context requests (USD cents per 100 million tokens).</li><li>* `cached_prompt_text_token_price` (integer, required) — Price of a prompt text token (in USD cents per 100 million tokens) that was cached previously.</li><li>* `cached_prompt_text_token_price_long_context` (integer, required) — Price of the cached prompt text token for long context requests (USD cents per 100 million tokens).</li><li>* `completion_text_token_price` (integer, required) — Price of the completion text token in USD cents per 100 million token.</li><li>* `completion_text_token_price_long_context` (integer, required) — Price of the completion text token for long context requests (USD cents per 100 million tokens).</li><li>* `prompt_image_token_price` (integer, required) — Price of the prompt image token in USD cents per 100 million token.</li><li>* `prompt_text_token_price` (integer, required) — Price of the prompt text token in USD cents per 100 million token.</li><li>* `prompt_text_token_price_long_context` (integer, required) — Price of the prompt text token for long context requests (USD cents per 100 million tokens).</li><li>* `search_price` (integer, required) — Price of the search in USD cents per 100 million searches.</li><li>## GET /v1/image-generation-models</li><li>* `image_price` (integer, required) — Price of a single image in USD cents.</li><li>## GET /v1/image-generation-models/\{model\_id}</li></ul></details> |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xai-models-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>grok-4.20</li><li>grok-4.20-0309-non-reasoning</li><li>grok-4.20-0309-reasoning</li><li>grok-4.20-multi-agent-0309</li><li>grok-4.3</li><li>grok-4.5</li><li>grok-4.6</li><li>grok-4.7</li><li>grok-build-0.1</li><li>grok-imagine-image</li><li>grok-imagine-image-2.0</li><li>grok-imagine-video</li><li>grok-imagine-video-1.5</li><li>grok-imagine-video-1.5-lite</li><li>grok-voice-2.0</li><li>grok-voice-3.0</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | xai-models |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • Requests sent to the [US regional endpoint](/developers/advanced-api-usage/regions), `https://us.api.x.ai/v1`, run inference in the United States; their token usage is billed at **1.1x** the global token rates, a 10% premium.<br>• &#124; Base URL &#124; `https://api.x.ai/v1` &#124; `https://us.api.x.ai/v1` &#124; |
| capability mentions | 新增 | 未记录 | • &gt; The batch discount applies to text and language models only. Image and video generation are supported in the Batch API but are billed at standard rates. See [Batch API documentation](/developers/advanced-api-usage/batch-api) for full details.<br>• The 2x multiplier applies to all token types — input, output, cached, and reasoning. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier.<br>• &gt; Priority Processing is available for Chat Completions and Responses endpoints only. It is not supported for image generation, video generation, or [Batch API](/developers/advanced-api-usage/batch-api) requests. See [Priority Processing documentation](/developers/advanced-api-usage/priority-processing) for full details. |
| excerpt | 新增 | 未记录 | #### Key Information<br># Pricing<br>All prices are in USD. For per-model details, see the [models page](/developers/models).<br>### Text API Pricing<br>&#124; Model &#124; Context &#124; Input / 1M tokens &#124; Cached input / 1M tokens &#124; Output / 1M tokens &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; grok-4.7 ( [!NOTE]<br>&gt;<br>&gt; The batch discount applies to text and language models only. Image and video generation are supported in the Batch API but are billed at standard rates. See [Batch API documentation](/developers/advanced-api-usage/batch-api) for full details.<br>## Priority Processing Pricing<br>[Priority Processing](/developers/advanced-api-usage/priority-processing) gives text requests higher scheduling priority for lower latency. Priority requests are billed at a **2x** premium over standard rates.<br>&#124; &#124; Standard &#124; Priority &#124;<br>&#124;---&#124;---&#124;---&#124;<br>&#124; Token pricing &#124; Standard rates &#124; **2x** standard rates &#124;<br>&#124; Response time &#124; Standard scheduling priority &#124; Higher scheduling priority &#124;<br>The 2x multiplier applies to all token types — input, output, cached, and reasoning. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier.<br>You are only billed at the priority rate when the response confirms `"service_tier": "priority"`. If the request is served at the default tier instead, standard rates apply.<br>&gt; [!NOTE]<br>&gt;<br>&gt; Priority Processing is available for Chat Completions and Responses endpoints only. It is not supported for image generation, video generation, or [Batch API](/developers/advanced-api-usage/batch-api) requests. See [Priority Processing documentation](/developers/advanced-api-usage/priority-processing) for full details.<br>## Grok 4.7 Fast pricing (Cursor and Grok Build only)<br>Grok 4.7 Fast is the same Grok 4.7 model served on faster infrastructure. It costs 2x the standard token rates, or 1.5x for long-context requests. It's available only in [Cursor](https://cursor.com) and [Grok Build](/build/overview), and is billed through your plan there. It is not available on the public xAI API, and Grok Build's free tier does not include it.<br>&#124; Prompt tokens &#124; Input &#124; Cached input &#124; Output &#124;<br>&#124;---&#124;---&#124;---&#124;---&#124;<br>&#124; Below 200k &#124; $4.00 / 1M &#124; $1.00 / 1M &#124; $12.00 / 1M &#124;<br>&#124; Above 200k &#124; $6.00 / 1M &#124; $1.50 / 1M &#124; $18.00 / 1M &#124;<br>Long-context rates apply once a request's prompt exceeds 200k tokens. Cursor bills its own fast variant through your Cursor plan.<br>## US Regional Endpoint Pricing<br>Requests sent to the [US regional endpoint](/developers/advanced-api-usage/regions), `https://us.api.x.ai/v1`, run inference in the United States; their token usage is billed at **1.1x** the global token rates, a 10% premium.<br>&#124; &#124; Global endpoint &#124; US regional endpoint &#124;<br>&#124;---&#124;---&#124;---&#124;<br>&#124; Base URL &#124; `https://api.x.ai/v1` &#124; `https://us.api.x.ai/v1` &#124;<br>&#124; Token pricing &#124; Standard rates &#124; **1.1x** standard rates &#124;<br>&#124; Models &#124; All models available to your team &#124; Currently `grok-4.7` and `grok-4.6` only &#124;<br>For `grok-4.7` this is $2.20 / $0.55 / $6.60 per 1M tokens (input / cached input / output) below 200k prompt tokens, and $4.40 / $1.10 / $13.20 above. The 1.1x multiplier applies to input, output, and cached input tokens, including long-context rates. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier. See the [Regional Endpoints documentation](/developers/advanced-api-usage/regions) for the scope of the US processing and storage guarantee.<br>## Files and Collections Pricing<br>Files and collections stored on the SpaceXSI platform are billed based on the amount of storage used.<br>&#124; Resource &#124; Rate &#124;<br>&#124;---&#124;---:&#124;<br>&#124; File storage &#124; $0.025 / GiB / day &#124;<br>&#124; Collection storage &#124; $0.10  / GiB / day &#124;<br>### Download Costs<br>Downloading data from files and collections is charged at a flat rate based on the amount of data transferred:<br>&#124; Resource &#124; Rate &#124;<br>&#124;---&#124;---:&#124;<br>&#124; File downloads &#124; $0.20 / GiB downloaded &#124;<br>&#124; Collection downloads &#124; $0.20 / GiB downloaded &#124;<br>You can view and manage your [files](https://console.x.ai/team/default/files?utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-pricing\&amp;utm_content=files) and [collections](https://console.x.ai/team/default/collections?utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-pricing\&amp;utm_content=collections) through the xAI console or the [xAI API](/developers/files/managing-files).<br>## Usage Guidelines Violation Fee<br>When your request is deemed to be in violation of our usage guideline by our system, we will still charge for the generation of the request.<br>For violations that are caught before generation in the Responses API, we will charge a $0.05 usage guideline violation fee per request.<br>## Billing and Availability<br>Your model access might vary depending on various factors such as geographical location, account limitations, etc.<br>For how the **bills are charged**, visit [Manage Billing](/console/billing) for more information.<br>For the most up-to-date information on **your team's model availability**, visit [Models Page](https://console.x.ai/team/default/models?utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-pricing\&amp;utm_content=models) on xAI Console. |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>grok-4.20-0309-non-reasoning</li><li>grok-4.20-0309-reasoning</li><li>grok-4.20-multi-agent-0309</li><li>grok-4.3</li><li>grok-4.5</li><li>grok-4.6</li><li>grok-4.7</li><li>grok-build-0.1</li><li>grok-imagine-image</li><li>grok-imagine-image-2.0</li><li>grok-imagine-video</li><li>grok-imagine-video-1.5</li><li>grok-imagine-video-1.5-lite</li><li>grok-voice-2.0</li><li>grok-voice-3.0</li><li>imagine-api-pricing</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 列表（12 项）<details><summary>展开完整内容</summary><ul><li>All prices are in USD. For per-model details, see the [models page](/developers/models).</li><li>&#124; Model &#124; Context &#124; Input / 1M tokens &#124; Cached input / 1M tokens &#124; Output / 1M tokens &#124;</li><li>Grok 4.7 Fast is the same Grok 4.7 model served on faster infrastructure. It costs 2x the standard token rates, or 1.5x for long-context requests. It's available only in [Cursor](https://cursor.com) and [Grok Build](/build/overview), and is billed through your plan there. It is not available on the public xAI API, and Grok Build's free tier does not include it.</li><li>&#124; Below 200k &#124; $4.00 / 1M &#124; $1.00 / 1M &#124; $12.00 / 1M &#124;</li><li>&#124; Above 200k &#124; $6.00 / 1M &#124; $1.50 / 1M &#124; $18.00 / 1M &#124;</li><li>Long-context rates apply once a request's prompt exceeds 200k tokens. Cursor bills its own fast variant through your Cursor plan.</li><li>For `grok-4.7` this is $2.20 / $0.55 / $6.60 per 1M tokens (input / cached input / output) below 200k prompt tokens, and $4.40 / $1.10 / $13.20 above. The 1.1x multiplier applies to input, output, and cached input tokens, including long-context rates. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier. See the [Regional Endpoints documentation](/developers/advanced-api-usage/regions) for the scope of the US processing and storage guarantee</li><li>&#124; File storage &#124; $0.025 / GiB / day &#124;</li><li>&#124; Collection storage &#124; $0.10  / GiB / day &#124;</li><li>&#124; File downloads &#124; $0.20 / GiB downloaded &#124;</li><li>&#124; Collection downloads &#124; $0.20 / GiB downloaded &#124;</li><li>For violations that are caught before generation in the Responses API, we will charge a $0.05 usage guideline violation fee per request.</li></ul></details> |
| scope | 新增 | 未记录 | pricing |
| source ref | 新增 | 未记录 | xai-pricing |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Batch API Pricing › headers | 新增 | 未记录 | • 空字符串<br>• Real-time API<br>• Batch API |
| tables › 记录 Batch API Pricing › heading | 新增 | 未记录 | Batch API Pricing |
| tables › 记录 Batch API Pricing › rows › 记录 Rate limits | 新增 | 未记录 | • Rate limits<br>• Per-minute limits apply<br>• Requests don't count towards rate limits |
| tables › 记录 Batch API Pricing › rows › 记录 Response time | 新增 | 未记录 | • Response time<br>• Immediate (seconds)<br>• Typically within 24 hours |
| tables › 记录 Batch API Pricing › rows › 记录 Token pricing | 新增 | 未记录 | • Token pricing<br>• Standard rates<br>• Discounted rates (varies by model) |
| tables › 记录 Download Costs › headers | 新增 | 未记录 | • Resource<br>• Rate |
| tables › 记录 Download Costs › heading | 新增 | 未记录 | Download Costs |
| tables › 记录 Download Costs › rows › 记录 Collection downloads | 新增 | 未记录 | • Collection downloads<br>• $0.20 / GiB downloaded |
| tables › 记录 Download Costs › rows › 记录 File downloads | 新增 | 未记录 | • File downloads<br>• $0.20 / GiB downloaded |
| tables › 记录 Files and Collections Pricing › headers | 新增 | 未记录 | • Resource<br>• Rate |
| tables › 记录 Files and Collections Pricing › heading | 新增 | 未记录 | Files and Collections Pricing |
| tables › 记录 Files and Collections Pricing › rows › 记录 Collection storage | 新增 | 未记录 | • Collection storage<br>• $0.10 / GiB / day |
| tables › 记录 Files and Collections Pricing › rows › 记录 File storage | 新增 | 未记录 | • File storage<br>• $0.025 / GiB / day |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › headers | 新增 | 未记录 | • Prompt tokens<br>• Input<br>• Cached input<br>• Output |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › heading | 新增 | 未记录 | Grok 4.7 Fast pricing (Cursor and Grok Build only) |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › rows › 记录 Above 200k | 新增 | 未记录 | • Above 200k<br>• $6.00 / 1M<br>• $1.50 / 1M<br>• $18.00 / 1M |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › rows › 记录 Below 200k | 新增 | 未记录 | • Below 200k<br>• $4.00 / 1M<br>• $1.00 / 1M<br>• $12.00 / 1M |
| tables › 记录 Imagine Pricing › headers | 新增 | 未记录 | • Model<br>• Cost |
| tables › 记录 Imagine Pricing › heading | 新增 | 未记录 | Imagine Pricing |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-image | 新增 | 未记录 | • grok-imagine-image<br>• $0.02 / image |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-image-2.0 | 新增 | 未记录 | • grok-imagine-image-2.0<br>• $0.04 / image |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-video | 新增 | 未记录 | • grok-imagine-video<br>• $0.050 / sec |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-video-1.5 | 新增 | 未记录 | • grok-imagine-video-1.5<br>• $0.080 / sec |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-video-1.5-lite | 新增 | 未记录 | • grok-imagine-video-1.5-lite<br>• $0.020 / sec |
| tables › 记录 Priority Processing Pricing › headers | 新增 | 未记录 | • 空字符串<br>• Standard<br>• Priority |
| tables › 记录 Priority Processing Pricing › heading | 新增 | 未记录 | Priority Processing Pricing |
| tables › 记录 Priority Processing Pricing › rows › 记录 Response time | 新增 | 未记录 | • Response time<br>• Standard scheduling priority<br>• Higher scheduling priority |
| tables › 记录 Priority Processing Pricing › rows › 记录 Token pricing | 新增 | 未记录 | • Token pricing<br>• Standard rates<br>• **2x** standard rates |
| tables › 记录 Text API Pricing › headers | 新增 | 未记录 | • Model<br>• Context<br>• Input / 1M tokens<br>• Cached input / 1M tokens<br>• Output / 1M tokens |
| tables › 记录 Text API Pricing › heading | 新增 | 未记录 | Text API Pricing |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.20-0309-non-reasoning (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-4.20-0309-non-reasoning (&lt; 200k prompt tokens)<br>• 1M<br>• $1.25<br>• $0.20<br>• $2.50 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.20-0309-non-reasoning (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-4.20-0309-non-reasoning (≥ 200k prompt tokens)<br>• 1M<br>• $2.50<br>• $0.40<br>• $5.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.20-0309-reasoning (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-4.20-0309-reasoning (&lt; 200k prompt tokens)<br>• 1M<br>• $1.25<br>• $0.20<br>• $2.50 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.20-0309-reasoning (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-4.20-0309-reasoning (≥ 200k prompt tokens)<br>• 1M<br>• $2.50<br>• $0.40<br>• $5.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.20-multi-agent-0309 (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-4.20-multi-agent-0309 (&lt; 200k prompt tokens)<br>• 1M<br>• $1.25<br>• $0.20<br>• $2.50 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.20-multi-agent-0309 (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-4.20-multi-agent-0309 (≥ 200k prompt tokens)<br>• 1M<br>• $2.50<br>• $0.40<br>• $5.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.3 (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-4.3 (&lt; 200k prompt tokens)<br>• 1M<br>• $1.25<br>• $0.20<br>• $2.50 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.3 (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-4.3 (≥ 200k prompt tokens)<br>• 1M<br>• $2.50<br>• $0.40<br>• $5.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.5 (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-4.5 (&lt; 200k prompt tokens)<br>• 500k<br>• $2.00<br>• $0.30<br>• $6.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.5 (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-4.5 (≥ 200k prompt tokens)<br>• 500k<br>• $4.00<br>• $0.60<br>• $12.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.6 (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-4.6 (&lt; 200k prompt tokens)<br>• 500k<br>• $2.00<br>• $0.50<br>• $6.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.6 (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-4.6 (≥ 200k prompt tokens)<br>• 500k<br>• $4.00<br>• $1.00<br>• $12.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.7 (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-4.7 (&lt; 200k prompt tokens)<br>• 500k<br>• $2.00<br>• $0.50<br>• $6.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-4.7 (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-4.7 (≥ 200k prompt tokens)<br>• 500k<br>• $4.00<br>• $1.00<br>• $12.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-build-0.1 (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-build-0.1 (&lt; 200k prompt tokens)<br>• 256k<br>• $1.00<br>• $0.20<br>• $2.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-build-0.1 (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-build-0.1 (≥ 200k prompt tokens)<br>• 256k<br>• $2.00<br>• $0.40<br>• $4.00 |
| tables › 记录 Tool Invocation Costs › headers | 新增 | 未记录 | • Tool<br>• Tool Name<br>• Description<br>• Cost / 1k Calls |
| tables › 记录 Tool Invocation Costs › heading | 新增 | 未记录 | Tool Invocation Costs |
| tables › 记录 Tool Invocation Costs › rows › 记录 Code Execution | 新增 | 未记录 | • Code Execution<br>• `code_execution`, `code_interpreter`†<br>• Run Python code in a sandboxed environment<br>• $5 |
| tables › 记录 Tool Invocation Costs › rows › 记录 Collections Search | 新增 | 未记录 | • Collections Search<br>• `collections_search`, `file_search`†<br>• Query your uploaded document collections (RAG)<br>• $2.50 |
| tables › 记录 Tool Invocation Costs › rows › 记录 File Attachments | 新增 | 未记录 | • File Attachments<br>• `attachment_search`<br>• Search through files attached to messages<br>• $5 |
| tables › 记录 Tool Invocation Costs › rows › 记录 Image Generation | 新增 | 未记录 | • Image Generation<br>• `image_generation`<br>• Generate and edit images<br>• [Imagine API rates](/developers/pricing#imagine-api-pricing) |
| tables › 记录 Tool Invocation Costs › rows › 记录 Image Understanding | 新增 | 未记录 | • Image Understanding<br>• `view_image`<br>• Analyze images found during Web Search and X Search\*<br>• Token-based |
| tables › 记录 Tool Invocation Costs › rows › 记录 Remote MCP Tools | 新增 | 未记录 | • Remote MCP Tools<br>• Set by MCP server<br>• Connect and use custom MCP tool servers<br>• Token-based |
| tables › 记录 Tool Invocation Costs › rows › 记录 Web Search | 新增 | 未记录 | • Web Search<br>• `web_search`<br>• Search the internet and browse web pages<br>• $5 |
| tables › 记录 Tool Invocation Costs › rows › 记录 X Search | 新增 | 未记录 | • X Search<br>• `x_search`<br>• Search X posts, user profiles, and threads<br>• $5 / 1k posts, $10 / 1k profiles |
| tables › 记录 Tool Invocation Costs › rows › 记录 X Video Understanding | 新增 | 未记录 | • X Video Understanding<br>• `view_x_video`<br>• Analyze videos found during X Search\*<br>• Token-based |
| tables › 记录 US Regional Endpoint Pricing › headers | 新增 | 未记录 | • 空字符串<br>• Global endpoint<br>• US regional endpoint |
| tables › 记录 US Regional Endpoint Pricing › heading | 新增 | 未记录 | US Regional Endpoint Pricing |
| tables › 记录 US Regional Endpoint Pricing › rows › 记录 Base URL | 新增 | 未记录 | • Base URL<br>• `https://api.x.ai/v1`<br>• `https://us.api.x.ai/v1` |
| tables › 记录 US Regional Endpoint Pricing › rows › 记录 Models | 新增 | 未记录 | • Models<br>• All models available to your team<br>• Currently `grok-4.7` and `grok-4.6` only |
| tables › 记录 US Regional Endpoint Pricing › rows › 记录 Token pricing | 新增 | 未记录 | • Token pricing<br>• Standard rates<br>• **1.1x** standard rates |
| tables › 记录 Voice Pricing › headers | 新增 | 未记录 | • Mode<br>• Cost |
| tables › 记录 Voice Pricing › heading | 新增 | 未记录 | Voice Pricing |
| tables › 记录 Voice Pricing › rows › 记录 Speech to Speech (grok-voice-2.0) — Deprecated | 新增 | 未记录 | • Speech to Speech (grok-voice-2.0) — Deprecated<br>• $0.08 / min ($4.80 / hr) $0.004 / text input |
| tables › 记录 Voice Pricing › rows › 记录 Speech to Speech (grok-voice-3.0) | 新增 | 未记录 | • Speech to Speech (grok-voice-3.0)<br>• $0.08 / min ($4.80 / hr) $0.004 / text input |
| tables › 记录 Voice Pricing › rows › 记录 Speech to Text | 新增 | 未记录 | • Speech to Text<br>• $0.10 / hr (REST), $0.20 / hr (Streaming) |
| tables › 记录 Voice Pricing › rows › 记录 Text to Speech | 新增 | 未记录 | • Text to Speech<br>• $15.00 / 1M chars |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-regions

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • If you need API request handling and model inference to happen in the United States, use the US regional endpoint, `https://us.api.x.ai/v1`. It is available to every team, and your existing API keys work on both endpoints.<br>• Point your client at `https://us.api.x.ai/v1`; the Python SDK (`xai_sdk`) takes the bare host, `us.api.x.ai`.<br>• baseURL: 'https://us.api.x.ai/v1',<br>• base_url="https://us.api.x.ai/v1",<br>• curl https://us.api.x.ai/v1/responses \<br>• `grok-4.7` and `grok-4.6` are currently the only models available on the US endpoint; the [models page in the console](https://console.x.ai/team/default/models?cluster=us-central-1\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-advanced-api-usage-regions\&amp;utm_content=models) and `GET https://us.api.x.ai/v1/models` always show the current list. Requesting a model that is not on that list, including `grok-latest`, fails with `404 Not Found`:<br>• When you call `https://us.api.x.ai/v1`, SpaceXSI guarantees that the following happen in the United States: |
| capability mentions | 新增 | 未记录 | 列表（6 项）<details><summary>展开完整内容</summary><ul><li>&gt; The US endpoint currently serves two models, `grok-4.7` and `grok-4.6`, and none of the image generation, video generation, or voice APIs. Token usage costs 10% more than on the global endpoint. The US guarantee covers API request handling, inference, moderation, and retained request data. It does not cover Files, Collections, server-side tools, or the network path from your systems to SpaceXSI. See [What the guarantee covers](#what-the-guarantee-covers).</li><li>"error": "The model grok-4-1-fast-reasoning does not exist or your team does not have access to it. If you believe this is a mistake, please contact support and quote your team ID and the model name."</li><li>If a request for a globally available model returns this error, confirm that your client is calling the intended endpoint before troubleshooting model access. The image generation, video generation, and voice APIs are not served by the US endpoint; use the global endpoint for those.</li><li>The image generation, video generation, and voice APIs are not served by the US endpoint. [Files](/developers/files), [Collections](/developers/files/collections), and server-side tools such as [web search](/developers/tools/web-search), [X search](/developers/tools/x-search), and [code execution](/developers/tools/code-execution) still work on the US endpoint, but they are outside the US guarantee and may process data outside the United States. If your requirements cover these features as well,</li><li>### Does the US endpoint support tools, files, and structured outputs?</li><li>Yes. Requests to the US endpoint accept the same parameters as the global endpoint, including function calling, server-side tools, file attachments, and structured outputs. However, server-side tools and files are outside the US guarantee; see [What the guarantee covers](#what-the-guarantee-covers).</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Advanced API Usage<br># Regional Endpoints<br>`https://api.x.ai` is the global endpoint. SpaceXSI may route requests between regions for capacity or reliability, so the processing location is not guaranteed.<br>If you need API request handling and model inference to happen in the United States, use the US regional endpoint, `https://us.api.x.ai/v1`. It is available to every team, and your existing API keys work on both endpoints.<br>&gt; [!NOTE]<br>&gt;<br>&gt; The US endpoint currently serves two models, `grok-4.7` and `grok-4.6`, and none of the image generation, video generation, or voice APIs. Token usage costs 10% more than on the global endpoint. The US guarantee covers API request handling, inference, moderation, and retained request data. It does not cover Files, Collections, server-side tools, or the network path from your systems to SpaceXSI. See [What the guarantee covers](#what-the-guarantee-covers).<br>## Using the US endpoint<br>Point your client at `https://us.api.x.ai/v1`; the Python SDK (`xai_sdk`) takes the bare host, `us.api.x.ai`.<br>```javascript customLanguage="javascriptAISDK"<br>import { createXai } from '@ai-sdk/xai';<br>import { generateText } from 'ai';<br>const xai = createXai({<br>apiKey: process.env.XAI_API_KEY,<br>baseURL: 'https://us.api.x.ai/v1',<br>});<br>const { text } = await generateText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'Explain latency versus throughput in two sentences.',<br>});<br>console.log(text);<br>```<br>```python customLanguage="pythonOpenAISDK"<br>import os<br>from openai import OpenAI<br>client = OpenAI(<br>api_key=os.getenv("XAI_API_KEY"),<br>base_url="https://us.api.x.ai/v1",<br>)<br>response = client.responses.create(<br>model="grok-4.7",<br>input="Explain latency versus throughput in two sentences.",<br>)<br>print(response.output_text)<br>```<br>```javascript customLanguage="javascriptOpenAISDK"<br>import OpenAI from 'openai';<br>const client = new OpenAI({<br>apiKey: process.env.XAI_API_KEY,<br>baseURL: 'https://us.api.x.ai/v1',<br>});<br>const response = await client.responses.create({<br>model: 'grok-4.7',<br>input: 'Explain latency versus throughput in two sentences.',<br>});<br>console.log(response.output_text);<br>```<br>```bash customLanguage="bash"<br>curl https://us.api.x.ai/v1/responses \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-H "Content-Type: application/json" \<br>-d '{<br>"model": "grok-4.7",<br>"input": "Explain latency versus throughput in two sentences."<br>}'<br>```<br>```python customLanguage="pythonXAI"<br>import os<br>from xai_sdk import Client<br>from xai_sdk.chat import user<br>client = Client(<br>api_key=os.getenv("XAI_API_KEY"),<br>api_host="us.api.x.ai",<br>)<br>chat = client.chat.create(model="grok-4.7")<br>chat.append(user("Explain latency versus throughput in two sentences."))<br>print(chat.sample().content)<br>```<br>### Model availability<br>`grok-4.7` and `grok-4.6` are currently the only models available on the US endpoint; the [models page in the console](https://console.x.ai/team/default/models?cluster=us-central-1\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-advanced-api-usage-regions\&amp;utm_content=models) and `GET https://us.api.x.ai/v1/models` always show the current list. Requesting a model that is not on that list, including `grok-latest`, fails with `404 Not Found`:<br>```json customLanguage="json"<br>{<br>"code": "not-found",<br>"error": "The model grok-4-1-fast-reasoning does not exist or your team does not have access to it. If you believe this is a mistake, please contact support and quote your team ID and the model name."<br>}<br>```<br>If a request for a globally available model returns this error, confirm that your client is calling the intended endpoint before troubleshooting model access. The image generation, video generation, and voice APIs are not served by the US endpoint; use the global endpoint for those.<br>## Pricing<br>Token usage on the US endpoint costs 10% more than on the global endpoint. The premium applies to input, output, and cached input tokens, including long-context rates, and [prompt caching](/developers/advanced-api-usage/prompt-caching) discounts still apply. The current per-token rates are on each model's detail page, reached from the [models page](/developers/models), and on the [Pricing](/developers/pricing) page.<br>## What the guarantee covers<br>When you call `https://us.api.x.ai/v1`, SpaceXSI guarantees that the following happen in the United States:<br>* Handling of the request by SpaceXSI's API servers.<br>* Inference for the model you request.<br>* Safety moderation of the request and the response.<br>* Storage of the request metadata, prompt inputs, and model outputs that SpaceXSI retains. The [Security FAQ](/developers/faq/security#does-spacexsi-train-on-customers-api-requests) describes what is retained and for how long.<br>The image generation, video generation, and voice APIs are not served by the US endpoint. [Files](/developers/files), [Collections](/developers/files/collections), and server-side tools such as [web search](/developers/tools/web-search), [X search](/developers/tools/x-search), and [code execution](/developers/tools/code-execution) still work on the US endpoint, but they are outside the US guarantee and may process data outside the United States. If your requirements cover these features as well, avoid them when calling the US endpoint, or contact [support@x.ai](mailto:support@x.ai) to discuss your configuration.<br>The guarantee also does not cover the network path between your own users or infrastructure and the endpoint.<br>&gt; [!WARNING]<br>&gt;<br>&gt; A regional endpoint is not, by itself, a comprehensive data-residency guarantee. If you have contractual requirements about where your data is processed or stored, contact [sales@x.ai](mailto:sales@x.ai) before relying on the US endpoint for compliance.<br>## FAQ<br>### Does the US endpoint support tools, files, and structured outputs?<br>Yes. Requests to the US endpoint accept the same parameters as the global endpoint, including function calling, server-side tools, file attachments, and structured outputs. However, server-side tools and files are outside the US guarantee; see [What the guarantee covers](#what-the-guarantee-covers).<br>### Do prompt caches carry over between endpoints?<br>Prompt cache hits are not guaranteed across endpoints. Keep each conversation on one endpoint and set a [`prompt_cache_key`](/developers/advanced-api-usage/prompt-caching/maximizing-cache-hits) so its requests are routed together.<br>### Does Zero Data Retention apply on the US endpoint?<br>Yes. [Zero Data Retention](/developers/faq/security#what-is-zero-data-retention-zdr) is a team-level setting, so it applies to every request your team makes regardless of the endpoint. |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4-1-fast-reasoning<br>• grok-4.6<br>• grok-4.7<br>• grok-latest |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $XAI_API_KEY" \ |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xai-regions |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • ## POST /v1/responses<br>• base_url="https://api.x.ai/v1",<br>• curl -s https://api.x.ai/v1/responses \<br>• baseURL: "https://api.x.ai/v1",<br>• ## GET /v1/responses/\{response\_id}<br>• ## DELETE /v1/responses/\{response\_id}<br>• ## POST /v1/responses/compact<br>• curl -s https://api.x.ai/v1/responses/compact \ |
| capability mentions | 新增 | 未记录 | 列表（26 项）<details><summary>展开完整内容</summary><ul><li>The Responses API is the primary interface for text generation, reasoning, and tool use. See the [Text Generation guide](/developers/model-capabilities/text/generate-text) for usage.</li><li>Generates a response based on text or image prompts. The response ID can be used to retrieve the response later or to continue the conversation without repeating prior context. New responses will be stored for 30 days and then permanently deleted.</li><li>\`reasoning.encrypted\_content\` (encrypted reasoning tokens) and tool-output options.</li><li>* `max_output_tokens` (integer &#124; null) — Max number of tokens that can be generated in a response. Only applies to visible output tokens (i.e. does not apply to tokens used for reasoning or function calls). Defaults to 128,000 when unset; set a larger value to allow longer generations.</li><li>* `max_turns` (integer &#124; null) — Maximum number of agentic tool calling turns allowed for this request.</li><li>* `parallel_tool_calls` (boolean &#124; null) — Whether to allow the model to run parallel tool calls.</li><li>* `reasoning` (object)</li><li>* `effort` (string &#124; null) — Constrains how hard a reasoning model thinks before responding. Higher efforts use more reasoning tokens for deeper thinking. The supported values and the default depend on the model.</li><li>* `summary` (string &#124; null) — A summary of the model's reasoning process. Possible values are \`auto\`, \`concise\` and \`detailed\`. Only included for compatibility. The model shall always return \`detailed\`.</li><li>* `reasoning_effort` (string &#124; null) — Non-standard alternative to \`reasoning.effort\` that accepts the same values. We only look at this if the reasoning field is unset.</li><li>* `mode` (string &#124; null) — Choose the mode to query realtime data:</li><li>* `max_output_tokens` (integer &#124; null) — Max number of tokens that can be generated in a response. Only applies to visible output tokens (i.e. does not apply to tokens used for reasoning or function calls).</li><li>* `max_tool_calls` (integer &#124; null) — The maximum number of tool calls allowed for this response.</li><li>* `parallel_tool_calls` (boolean, required) — Whether to allow the model to run parallel tool calls.</li><li>* `output_tokens` (integer, required) — Completion + reasoning tokens in the latest context (sourced from</li><li>* `reasoning_tokens` (integer, required) — Tokens generated by the model for reasoning.</li><li>* `image_generation_calls` (integer, required) — Number of image generation calls.</li><li>"parallel_tool_calls": true,</li><li>"reasoning": null,</li><li>"reasoning_tokens": 110</li><li>"type": "reasoning",</li><li>"audio_tokens": 0,</li><li>"image_tokens": 0,</li><li>"reasoning_tokens": 110,</li><li>* `reasoning_tokens` (integer, required) — Number of reasoning tokens generated during compaction.</li><li>* `total_tokens` (integer, required) — Total number of tokens used (input + output, including reasoning).</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Inference API<br># Responses<br>The Responses API is the primary interface for text generation, reasoning, and tool use. See the [Text Generation guide](/developers/model-capabilities/text/generate-text) for usage.<br>Sampling uses at most `temperature` 1 and at most the model's default `top_p`. Requests may send `temperature` from 0 to 2 and `top_p` up to 1, and the response echoes the values you sent. A value above a cap is sampled as that cap. See [Sampling parameters](/developers/model-capabilities/text/best-practices#sampling-parameters).<br>***<br>## POST /v1/responses<br>Generates a response based on text or image prompts. The response ID can be used to retrieve the response later or to continue the conversation without repeating prior context. New responses will be stored for 30 days and then permanently deleted.<br>### Request Body<br>* `background` (boolean &#124; null) — (Unsupported) Whether to process the response asynchronously in the background.<br>* `context_management` (array &#124; null) — Optional context-management directives (e.g. compaction). Parsed but not yet executed.<br>* `guidelines` (array &#124; null) — Per-category instructions for model output. See \[\`Guideline\`].<br>Omitted requests leave this unset. A request whose guidelines cannot be<br>applied, for example on a multi-agent model or with \`stop\`, fails with<br>400\.<br>* `include` (array &#124; null) — What additional output data to include in the response. Supported values include<br>\`reasoning.encrypted\_content\` (encrypted reasoning tokens) and tool-output options.<br>OpenAI's \`message.output\_text.logprobs\` is accepted for compatibility but silently ignored.<br>* `input` (string &#124; array\ , required) — Content of the input passed to a \`/v1/response\` request.<br>* `instructions` (string &#124; null) — An alternate way to specify the system prompt. Note that this cannot be used alongside \`previous\_response\_id\`, where the system prompt of the previous message will be used.<br>* `logprobs` (boolean &#124; null) — Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message. Not supported by models \`grok-4.20\` and newer; the field will be silently ignored if set.<br>* `max_output_tokens` (integer &#124; null) — Max number of tokens that can be generated in a response. Only applies to visible output tokens (i.e. does not apply to tokens used for reasoning or function calls). Defaults to 128,000 when unset; set a larger value to allow longer generations.<br>* `max_turns` (integer &#124; null) — Maximum number of agentic tool calling turns allowed for this request.<br>If not set, defaults to the server's global cap.<br>This parameter will be ignored for any non-agentic requests, and for<br>agentic SLOP requests that have neither a server-side tool nor a file<br>attachment.<br>* `metadata` (object) — Not supported. Only maintained for compatibility reasons.<br>* `min_p` (number &#124; null) — Min-p sampling: tokens whose probability is below \`min\_p\` times the probability of the most likely token are excluded from sampling. Disabled when unset.<br>* `model` (string) — Model name for the model to use. Obtainable from \ or \ .<br>* `parallel_tool_calls` (boolean &#124; null) — Whether to allow the model to run parallel tool calls.<br>* `previous_response_id` (string &#124; null) — The ID of the previous response from the model.<br>* `prompt_cache_key` (string &#124; null) — Plumbed to x-grok-conv-id for Open Responses compatibility, used for routing.<br>* `reasoning` (object)<br>* `effort` (string &#124; null) — Constrains how hard a reasoning model thinks before responding. Higher efforts use more reasoning tokens for deeper thinking. The supported values and the default depend on the model.<br>* `generate_summary` (string &#124; null) — Only included for compatibility.<br>* `summary` (string &#124; null) — A summary of the model's reasoning process. Possible values are \`auto\`, \`concise\` and \`detailed\`. Only included for compatibility. The model shall always return \`detailed\`.<br>* `reasoning_effort` (string &#124; null) — Non-standard alternative to \`reasoning.effort\` that accepts the same values. We only look at this if the reasoning field is unset.<br>* `safety_identifier` (string &#124; null) — Supplied by the API client to identify the end user behind this request. A stable string that uniquely identifies each of your users; hash your internal user id or username rather than sending an email or name. Stored with the request metadata so a usage-policy violation can be attributed to that user rather than to the API key.<br>* `search_parameters` (object)<br>* `from_date` (string &#124; null) — Date from which to consider the results in ISO-8601 YYYY-MM-DD. See<br>\ .<br>* `max_search_results` (integer &#124; null) — Maximum number of search results to use.<br>* `mode` (string &#124; null) — Choose the mode to query realtime data:<br>\* \`off\`: no search performed and no external will be considered.<br>\* \`on\` (default): the model will search in every sources for relevant data.<br>\* \`auto\`: the model choose whether to search data or not and where to search the data.<br>* `return_citations` (boolean &#124; null) — Whether to return citations in the response or not.<br>* `sources` (array &#124; null) — List of sources to search in. If no sources specified, the model will look over the web and X by default.<br>* `to_date` (string &#124; null) — Date up to which to consider the results in ISO-8601 YYYY-MM-DD. See<br>\ .<br>* `service_tier` ("default" &#124; "priority" &#124; "fast")<br>* `store` (boolean &#124; null) — Whether to store the input message(s) and model response for later retrieval.<br>* `stream` (boolean &#124; null) — If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a \`data: \[DONE]\` message.<br>* `temperature` (number &#124; null) — What sampling temperature to use, between 0 and 2. Values above 1 are sampled at 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.<br>* `text` (object)<br>* `format` (object &#124; object &#124; object)<br>* `tool_choice` (string &#124; object)<br>* `tools` (array &#124; null) — A list of tools the model may call in JSON-schema. Currently, only functions and web search are supported as tools. A max of 1000 tools are supported.<br>* `top_k` (integer &#124; null) — Top-k sampling: only the \`top\_k\` most probable tokens are considered at each sampling step. Disabled when unset.<br>* `top_logprobs` (integer &#124; null) — An integer between 0 and 8 specifying the number of most likely tokens to return at each token position, each with an associated log probability. logprobs must be set to true if this parameter is used. Not supported by models \`grok-4.20\` and newer; the field will be silently ignored if set.<br>* `top_p` (number &#124; null) — An alternative to sampling with \`temperature\`, called nucleus sampling, where the model considers the results of the tokens with \`top\_p\` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. It is generally recommended to alter this or \`temperature\` but not both. Values above the model's default top\_p, 0.95 for Grok models, are sampled at that default.<br>* `truncation` (string &#124; null) — Not supported. Only maintained for compatibility reasons.<br>* `user` (string &#124; null) — A unique identifier representing your end-user, which can help xAI to monitor and detect abuse.<br>### Response Body<br>* `background` (boolean, required) — OpenResponses compatibility fields.<br>Not used at the moment. Just for OpenResponses compatibility.<br>Whether to process the response asynchronously in the background.<br>* `completed_at` (integer &#124; null) — The Unix timestamp (in seconds) for the response completion time. Only set when the response is completed.<br>* `created_at` (integer, required) — The Unix timestamp (in seconds) for the response creation time.<br>* `error` (object) — An error object returned when the model fails to generate a response.<br>* `frequency_penalty` (number, required) — (NOT SUPPORTED in Responses API) Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.<br>* `id` (string, required) — Unique ID of the response.<br>* `incomplete_details` (object &#124; object &#124; object &#124; object)<br>* `instructions` (string &#124; null) — A system (or developer) message inserted into the model's context.<br>* `max_output_tokens` (integer &#124; null) — Max number of tokens that can be generated in a response. Only applies to visible output tokens (i.e. does not apply to tokens used for reasoning or function calls).<br>* `max_tool_calls` (integer &#124; null) — The maximum number of tool calls allowed for this response.<br>* `metadata` (object, required) — Only included for compatibility.<br>* `model` (string, required) — Model name used to generate the response.<br>* `object` (string, required) — The object type of this resource. Always set to \`response\`.<br>* `output` (array\ , required) — The response generated by the model.<br>* `parallel_tool_calls` (boolean, required) — Whether to allow the model to run parallel tool calls.<br>* `presence_penalty` (number, required) — (NOT SUPPORTED in Responses API) Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.<br>* `previous_response_id` (string &#124; null) — The ID of the previous response from the model.<br>* `prompt_cache_key` (string &#124; null) — The cache key used for the prompt for routing to the correct engine.<br>* `reasoning` (object)<br>* `effort` (string &#124; null) — Constrains how hard a reasoning model thinks before responding. Higher efforts use more reasoning tokens for deeper thinking. The supported values and the default depend on the model.<br>* `generate_summary` (string &#124; null) — Only included for compatibility.<br>* `summary` (string &#124; null) — A summary of the model's reasoning process. Possible values are \`auto\`, \`concise\` and \`detailed\`. Only included for compatibility. The model shall always return \`detailed\`.<br>* `safety_identifier` (string &#124; null) — A stable identifier used to help detect users of your application that may be violating xAI's usage policies.<br>* `service_tier` ("default" &#124; "priority" &#124; "fast", required)<br>* `status` (string, required) — Status of the response. One of \`completed\`, \`in\_progress\` or \`incomplete\`.<br>* `store` (boolean, required) — Whether to store the input message(s) and model response for later retrieval.<br>* `temperature` (number &#124; null) — Sampling temperature echoed from the request, or the model's default when the request omits it. Between 0 and 2. Sampling uses at most 1, so a sent value above 1 is echoed here and sampled as 1.<br>* `text` (object, required)<br>* `format` (object &#124; object &#124; object)<br>* `tool_choice` (string &#124; object, required) — Parameter to control how model chooses the tools.<br>* `name` (string, required) — Name of the function to use.<br>* `type` (string, required) — Type is always \`"function"\`.<br>* `tools` (array\ , required) — A list of tools the model may call in JSON-schema. Currently, only functions and web search are supported as tools. A max of 1000 tools are supported.<br>* `top_logprobs` (integer, required) — An integer between 0 and 8 specifying the number of most likely tokens to return at each token position. |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.20<br>• grok-4.7<br>• grok-conv-id |
| plan or price mentions | 新增 | 未记录 | • * `cost_in_usd_ticks` (integer &#124; null) — Accurate cost of this request in USD ticks, where "tick" is defined as follows:<br>• -H "Authorization: Bearer $XAI_API_KEY" \ |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xai-responses |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-speech-to-speech

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>"wss://api.x.ai/v1/realtime?model=grok-voice-latest",</li><li>const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", {</li><li>const ws = new WebSocket("wss://api.x.ai/v1/realtime",</li><li>url = f"wss://api.x.ai/v1/realtime?model={MODEL}"</li><li>const url = `wss://api.x.ai/v1/realtime?model=${MODEL}`;</li><li>The same roster of voices works across the Speech to Speech API and Text to Speech API. Browse the full list with tone descriptions and samples in the [voice table](/developers/model-capabilities/audio/text-to-speech#voices), or fetch it programmatically via [`GET /v1/tts/voices`](/developers/rest-api-reference/inference/voice). Pass the lowercase voice ID as the `voice` parameter on `session.update`.</li><li>let url = `wss://api.x.ai/v1/realtime?model=${MODEL}`;</li><li>const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", [</li><li>base_url="https://api.x.ai/v1",</li><li>baseURL: "https://api.x.ai/v1",</li><li># url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview"</li><li>url = "wss://api.x.ai/v1/realtime?model=grok-voice-latest"</li><li>// const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview";</li><li>const url = "wss://api.x.ai/v1/realtime?model=grok-voice-latest";</li><li>The Grok Speech to Speech API is compatible with the [OpenAI Realtime API](https://developers.openai.com/api/docs/guides/realtime-conversations). Most OpenAI client libraries and SDKs work with the SpaceXSI endpoint by changing the base URL to `wss://api.x.ai/v1/realtime`. This section documents event naming differences and unsupported events.</li></ul></details> |
| capability mentions | 新增 | 未记录 | 列表（120 项）<details><summary>展开完整内容</summary><ul><li># Speech to Speech</li><li>Build real-time voice applications powered by Grok. Stream audio and text bidirectionally via WebSocket for voice assistants, phone agents, and interactive voice systems.</li><li>Connect to the Speech to Speech API and start a conversation:</li><li>"wss://api.x.ai/v1/realtime?model=grok-voice-latest",</li><li># Receive audio/text responses</li><li>const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", {</li><li>const ws = new WebSocket("wss://api.x.ai/v1/realtime",</li><li>[Get API Key →](https://console.x.ai/team/default/api-keys?campaign=voice-docs-agent\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-speech-to-speech\&amp;utm_content=api-keys)</li><li>[API documentation](/developers/rest-api-reference/inference/voice#realtime)</li><li>* **[Ephemeral Tokens](/developers/model-capabilities/audio/ephemeral-tokens)** (recommended) — Short-lived tokens for client-side apps (browsers, mobile). Keeps your API key off the client.</li><li>Read more in our [API documentation](/developers/rest-api-reference/inference/voice#realtime).</li><li>Once the WebSocket is open, two-way events can begin. Client events are used to provide conversation information and send user audio to the Voice API, while server events include audio and text responses.</li><li>[API documentation →](/developers/rest-api-reference/inference/voice#realtime)</li><li>url = f"wss://api.x.ai/v1/realtime?model={MODEL}"</li><li>const url = `wss://api.x.ai/v1/realtime?model=${MODEL}`;</li><li>&#124; `instructions` &#124; string &#124; System prompt. See the [Prompting Guide](/developers/model-capabilities/audio/speech-to-speech/prompting-guide) for the recommended structure. &#124;</li><li>&#124; `reasoning.effort` &#124; `"high"` &#124; `"none"` &#124; optional &#124; Controls whether the model uses reasoning. Defaults to `"high"`. &#124;</li><li>&#124; `voice` &#124; string &#124; Voice selection: any built-in voice (e.g. `eve`) or a [custom voice ID](/developers/model-capabilities/audio/custom-voices) (see [Available Voices](#available-voices)) &#124;</li><li>&#124; `tools` &#124; array &#124; Tools available to the voice agent. Supports `file_search`, `web_search`, `x_search`, `mcp`, and `function` types. See [Using Tools](#using-tools-with-grok-speech-to-speech-api). &#124;</li><li>&#124; `turn_detection.idle_timeout_ms` &#124; number &#124; optional &#124; When set, the server proactively re-engages the user if no speech is detected for this many milliseconds after the assistant finishes responding. The timer re-arms after every response, so it fires repeatedly each `idle_timeout_ms` until the user speaks. Default: `null`. &#124;</li><li>&#124; `audio.input.format.type` &#124; string &#124; Input codec: `"audio/pcm"`, `"audio/pcmu"`, `"audio/pcma"`, or `"audio/opus"` &#124;</li><li>&#124; `audio.input.format.rate` &#124; number &#124; Input sample rate (PCM only): 8000, 16000, 22050, 24000, 32000, 44100, 48000 &#124;</li><li>&#124; `audio.input.transport` &#124; `"json"` &#124; `"binary"` &#124; optional &#124; Wire path for input audio. Default: `"json"` (base64 in `input_audio_buffer.append`). `"binary"`: raw codec bytes as WebSocket binary frames. See [Audio Transport](#audio-transport). &#124;</li><li>&#124; `audio.output.format.type` &#124; string &#124; Output codec: `"audio/pcm"`, `"audio/pcmu"`, `"audio/pcma"`, or `"audio/opus"` &#124;</li><li>&#124; `audio.output.format.rate` &#124; number &#124; Output sample rate (PCM only): 8000, 16000, 22050, 24000, 32000, 44100, 48000 &#124;</li><li>&#124; `audio.output.transport` &#124; `"json"` &#124; `"binary"` &#124; optional &#124; Wire path for assistant audio. Default: `"json"` (base64 in `response.output_audio.delta` / `response.audio.delta`). `"binary"`: raw codec bytes as WebSocket binary frames. Mid-session changes apply at the next response boundary. See [Audio Transport](#audio-transport). &#124;</li><li>&#124; `audio.input.transcription.language_hint` &#124; string &#124; BCP-47 language code (e.g. `"ja"`, `"ar"`, `"es-MX"`, `"pt-BR"`) to bias ASR transcription toward a specific language. Can be updated mid-session. See [Language Hint](#language-hint). &#124;</li><li>&#124; `audio.input.transcription.keyterms` &#124; array &#124; List of key terms (e.g. product names, proper nouns) to bias transcription toward. Max 100 terms, each up to 50 characters. Can be updated mid-session. See [Keyterms](#keyterms). &#124;</li><li>&#124; `audio.output.speed` &#124; number &#124; Playback speed multiplier for assistant audio output. Range: 0.7–1.5. Default: `1.0`. Values below 1.0 slow down speech; values above 1.0 speed it up. &#124;</li><li>&#124; `replace` &#124; object &#124; optional &#124; Map of phrases to spoken substitutions applied to the model's output before TTS, e.g. `{"Acme Mobile": "Acme Mobull"}`. Fixes pronunciation by changing the spoken audio without altering the transcript. See [Pronunciation Replacements](#pronunciation-replacements). &#124;</li><li>`instructions` is the system prompt. Write it in second person with a fixed section order so the agent stays close to the training distribution. See the [Prompting Guide](/developers/model-capabilities/audio/speech-to-speech/prompting-guide) for the recommended structure, tool hygiene, and escalation patterns.</li><li>The same roster of voices works across the Speech to Speech API and Text to Speech API. Browse the full list with tone descriptions and samples in the [voice table](/developers/model-capabilities/audio/text-to-speech#voices), or fetch it programmatically via [`GET /v1/tts/voices`](/developers/rest-api-reference/inference/voice). Pass the lowercase voice ID as the `voice` parameter on `session.update`.</li><li>Need a voice that isn't in this list? Clone any voice from a short reference clip with the [Custom Voices API](/developers/model-capabilities/audio/custom-voices). The resulting `voice_id` works as the `voice` parameter on `session.update` exactly like a built-in voice.</li><li># Audio format settings (these are the defaults if not specified)</li><li>"audio": {</li><li>"input": {"format": {"type": "audio/pcm", "rate": 24000}},</li><li>"output": {"format": {"type": "audio/pcm", "rate": 24000}}</li><li>// Audio format settings (these are the defaults if not specified)</li><li>audio: {</li><li>input: { format: { type: "audio/pcm", rate: 24000 } },</li><li>output: { format: { type: "audio/pcm", rate: 24000 } }</li><li>## Audio</li><li>When `turn_detection.type` is set to `server_vad`, we'll perform Voice Activity Detection (VAD) and automatically detect when the user is finished speaking. If you are using server VAD, you'll only need the [input\_audio\_buffer.append](/developers/rest-api-reference/inference/voice#input_audio_buffer.append) event.</li><li>Otherwise, you'll need to send the [commit](/developers/rest-api-reference/inference/voice#input_audio_buffer.commit) event once the user is finished speaking, and use [clear](/developers/rest-api-reference/inference/voice#input_audio_buffer.clear) to discard all audio that has been appended but not committed yet.</li><li>### Configuring Audio Format</li><li>Specify the audio codec and sample rate in the `audio` [session parameters](#session-parameters). Input and output are specified separately and do not need to match. Codec (`format`) is independent of wire path (`transport`); see [Audio Transport](#audio-transport).</li><li>&#124; **`audio/pcm`** (Default) &#124; Linear16, Little-endian &#124; Raw, WAV, AIFF &#124; Configurable (see below) &#124;</li><li>&#124; **`audio/pcmu`** &#124; G.711 μ-law (Mulaw) &#124; Raw &#124; 8000 Hz &#124;</li><li>&#124; **`audio/pcma`** &#124; G.711 A-law &#124; Raw &#124; 8000 Hz &#124;</li><li>&#124; **`audio/opus`** &#124; Opus &#124; Raw packets (one packet per payload) &#124; 24000 Hz &#124;</li><li>When using the `audio/pcm` format, you can configure the sample rate to one of the following supported values:</li><li>&#124; **16000 Hz** &#124; Wideband &#124; Good for speech recognition &#124;</li><li>&#124; **32000 Hz** &#124; Very High &#124; Enhanced audio clarity &#124;</li><li>&#124; **48000 Hz** &#124; Professional &#124; Studio-grade audio &#124;</li><li>You can configure the audio format and sample rate for both input and output in the session configuration:</li><li># Configure audio format with custom sample rate for input and output</li><li>"type": "audio/pcm", # or "audio/pcmu" or "audio/pcma"</li><li>"rate": 16000 # Only applicable for audio/pcm</li><li>// Configure audio format with custom sample rate for input and output</li><li>type: "audio/pcm", // or "audio/pcmu" or "audio/pcma"</li><li>rate: 16000 // Only applicable for audio/pcm</li><li>### Audio Transport</li><li>&#124; **`json`** (default) &#124; Base64 in [`input_audio_buffer.append`](/developers/rest-api-reference/inference/voice#input_audio_buffer.append) &#124; Base64 in [`response.output_audio.delta`](/developers/rest-api-reference/inference/voice#response.output_audio.delta) / `response.audio.delta` &#124;</li><li>&#124; **`binary`** &#124; Raw codec bytes as WebSocket **binary** frames (no protocol header) &#124; Same binary frames; lifecycle events (`response.created`, `response.done`, transcripts, etc.) stay JSON &#124;</li><li>**Output is strict:** assistant audio is emitted only on `output.transport`. Changing `output.transport` mid-session applies at the **next response boundary** so a single utterance never mixes JSON deltas and binary frames.</li><li>**Opus:** each JSON `delta` / `audio` field or each binary frame is one raw Opus packet (24 kHz mono). There is no extra framing header on binary frames.</li><li>"format": {"type": "audio/pcm", "rate": 24000},</li><li># Send mic audio as raw PCM16 little-endian frames (not base64 JSON)</li><li># Receive: binary messages are audio; text messages are JSON events</li><li># raw PCM16 (or Opus packets if format is audio/opus)</li><li># response.done, transcripts, etc.</li><li>format: { type: "audio/pcm", rate: 24000 },</li><li>// Send mic audio as raw PCM16 little-endian frames</li><li>// raw PCM16 (or Opus packets if format is audio/opus)</li><li>// response.done, transcripts, etc.</li><li>### Receiving and Playing Audio</li><li>Decode and play base64 PCM16 audio received from the API when `output.transport` is `"json"` (default). Use the same sample rate as configured. For `transport: "binary"`, play the binary frame payload directly (same codec bytes, no base64).</li><li>"type": "audio/pcm",</li><li># When processing audio, use the same sample rate</li><li># Convert audio data to PCM16 and base64</li><li>def audio_to_base64(audio_data: np.ndarray) -&gt; str:</li><li>"""Convert float32 audio array to base64 PCM16 string."""</li><li>audio_int16 = (audio_data * 32767).astype(np.int16)</li><li>audio_bytes = audio_int16.tobytes()</li><li>return base64.b64encode(audio_bytes).decode('utf-8')</li><li># Convert base64 PCM16 to audio data</li><li>def base64_to_audio(base64_audio: str) -&gt; np.ndarray:</li><li>"""Convert base64 PCM16 string to float32 audio array."""</li><li>audio_bytes = base64.b64decode(base64_audio)</li><li>audio_int16 = np.frombuffer(audio_bytes, dtype=np.int16)</li><li>return audio_int16.astype(np.float32) / 32768.0</li><li>type: "audio/pcm",</li><li>// When processing audio, use the same sample rate</li><li>// Create AudioContext with matching sample rate</li><li>const audioContext = new AudioContext({ sampleRate: SAMPLE_RATE });</li><li>&gt; MCP tools are server-side tools — SpaceXSI handles the connection and execution automatically. Unlike custom function tools, you don't need to handle tool call responses in your client code. For more details on MCP tool configuration, see the [Remote MCP Tools](/developers/tools/remote-mcp) guide.</li><li>elif event["type"] == "response.output_audio.delta":</li><li># Handle audio response</li><li>} else if (event.type === "response.output_audio.delta") {</li><li>// Handle audio response</li><li>### Parallel Tool Calling</li><li>When the model determines that multiple function calls are needed to fulfill a request, it will emit multiple `response.function_call_arguments.done` events before any audio response. In this case, you must resolve **all** function calls and send their results back before emitting `response.create`.</li><li>&#124; `item.interruptible` &#124; No &#124; `true` &#124; When `false`, caller audio is dropped until playback completes &#124;</li><li>The server injects a full response lifecycle (`response.created` → `response.output_audio.delta` → `response.done`) so the force message appears to clients like a normal model turn.</li><li>&gt; `force_message` is a SpaceXSI extension. It is not part of the OpenAI Realtime API.</li><li>By default a `/v1/realtime` connection loses its conversation history when the WebSocket closes. **Session resumption** caches each turn and replays the prior context on reconnect, so the model stays conditioned on what was said earlier.</li><li>let url = `wss://api.x.ai/v1/realtime?model=${MODEL}`;</li><li>Persisted and replayed: user and assistant transcripts, assistant tool calls, and your `function_call_output` results.</li><li>This section outlines key recommendations for building low-latency, reliable, and natural-feeling voice experiences using the SpaceXSI Speech to Speech API.</li><li>* Simultaneously begin capturing microphone audio (using `getUserMedia` in browsers or equivalent APIs on mobile/native platforms).</li><li>**Audio Buffering Example**</li><li>const stream = await navigator.mediaDevices.getUserMedia({ audio: true });</li><li>const audioContext = new AudioContext({ sampleRate: 24000 });</li><li>const source = audioContext.createMediaStreamSource(stream);</li><li>const processor = audioContext.createScriptProcessor(4096, 1, 1); // or AudioWorklet for better perf</li><li>processor.connect(audioContext.destination); // optional</li><li>let earlyAudioBuffer = []; // Float32Array[] or Int16Array[]</li><li>processor.onaudioprocess = (e) =&gt; {</li><li>earlyAudioBuffer.push(new Float32Array(input)); // or convert to PCM16</li><li>const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", [</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Model Capabilities<br># Speech to Speech<br>Build real-time voice applications powered by Grok. Stream audio and text bidirectionally via WebSocket for voice assistants, phone agents, and interactive voice systems.<br>## Quick Start<br>Connect to the Speech to Speech API and start a conversation:<br>```python customLanguage="pythonWithoutSDK"<br>import asyncio<br>import json<br>import os<br>import websockets<br>async def voice_agent():<br>async with websockets.connect(<br>"wss://api.x.ai/v1/realtime?model=grok-voice-latest",<br>additional_headers={"Authorization": f"Bearer {os.environ['XAI_API_KEY']}"}<br>) as ws:<br># Configure session<br>await ws.send(json.dumps({<br>"type": "session.update",<br>"session": {<br>"voice": "eve",<br>"instructions": "You are a helpful assistant.",<br>"turn_detection": {"type": "server_vad"}<br>}<br>}))<br># Send a text message<br>await ws.send(json.dumps({<br>"type": "conversation.item.create",<br>"item": {"type": "message", "role": "user",<br>"content": [{"type": "input_text", "text": "Hello!"}]}<br>}))<br>await ws.send(json.dumps({"type": "response.create"}))<br># Receive audio/text responses<br>async for msg in ws:<br>event = json.loads(msg)<br>print(f"Event: {event['type']}")<br>asyncio.run(voice_agent())<br>```<br>```javascript customLanguage="javascriptWithoutSDK"<br>import WebSocket from "ws";<br>const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", {<br>headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },<br>});<br>/*<br>Web browsers do not support WebSocket headers. Instead, pass an<br>Ephemeral Token (prefixed with xai-client-secret.) in the WebSocket protocol.<br>const ws = new WebSocket("wss://api.x.ai/v1/realtime",<br>[`xai-client-secret.${XAI_EPHEMERAL_TOKEN}`]);<br>*/<br>ws.on("open", () =&gt; {<br>// Configure session<br>ws.send(JSON.stringify({<br>type: "session.update",<br>session: {<br>voice: "eve",<br>instructions: "You are a helpful assistant.",<br>turn_detection: { type: "server_vad" }<br>}<br>}));<br>// Send a text message<br>ws.send(JSON.stringify({<br>type: "conversation.item.create",<br>item: { type: "message", role: "user",<br>content: [{ type: "input_text", text: "Hello!" }] }<br>}));<br>ws.send(JSON.stringify({ type: "response.create" }));<br>});<br>ws.on("message", (data) =&gt; {<br>const event = JSON.parse(data);<br>console.log("Event:", event.type);<br>});<br>```<br>[Get API Key →](https://console.x.ai/team/default/api-keys?campaign=voice-docs-agent\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-speech-to-speech\&amp;utm_content=api-keys)<br>[API documentation](/developers/rest-api-reference/inference/voice#realtime)<br>[Live Voice Demos](https://x.ai/api/voice)<br>[Pricing](/developers/pricing#voice-api-pricing)<br>### Get Started with Our Tester Apps<br>* **[iOS Tester App](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-mobile/swift)** — A Swift-based iOS app to act as a guide for setting up voice agents in your apps.<br>* **[Web Agent (WebSocket)](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-web)** — A web app voice agent using WebSocket.<br>* **[WebRTC Agent](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-webrtc)** — A web app voice agent using WebRTC.<br>* **[Telephony Agent](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-phone)** — A callable phone agent using Twilio.<br>## Authentication<br>Authenticate your WebSocket connection with either method:<br>* **[Ephemeral Tokens](/developers/model-capabilities/audio/ephemeral-tokens)** (recommended) — Short-lived tokens for client-side apps (browsers, mobile). Keeps your API key off the client.<br>* **API Key** — Pass your API key directly in the `Authorization` header. Server-side only.<br>Read more in our [API documentation](/developers/rest-api-reference/inference/voice#realtime).<br>## Events<br>Once the WebSocket is open, two-way events can begin. Client events are used to provide conversation information and send user audio to the Voice API, while server events include audio and text responses.<br>[API documentation →](/developers/rest-api-reference/inference/voice#realtime)<br>## Model Selection<br>Pass `model` as a query parameter; use a versioned name to pin to a specific release.<br>```python customLanguage="pythonWithoutSDK"<br>MODEL = "grok-voice-latest"<br>url = f"wss://api.x.ai/v1/realtime?model={MODEL}"<br>```<br>```javascript customLanguage="javascriptWithoutSDK"<br>const MODEL = "grok-voice-latest";<br>const url = `wss://api.x.ai/v1/realtime?model=${MODEL}`;<br>```<br>&#124; Model &#124; Description &#124;<br>&#124;-------&#124;-------------&#124; |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-speech-to-speech-api<br>• grok-transcribe<br>• grok-voice-2.0<br>• grok-voice-3.0<br>• grok-voice-latest<br>• voice-agent-mobile<br>• voice-agent-phone<br>• voice-agent-web<br>• voice-agent-webrtc<br>• voice-api-pricing<br>• voice-docs-agent |
| plan or price mentions | 新增 | 未记录 | • headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },<br>• [`xai-client-secret.${XAI_EPHEMERAL_TOKEN}`]);<br>• const url = `wss://api.x.ai/v1/realtime?model=${MODEL}`;<br>• const confirmation = \`CONF\${Math.floor(Math.random() * 9000) + 1000}\`;<br>• console.log(\`Function called: \${functionName\} with args:\`, args);<br>• // Request agent to continue with the result<br>• console.error(\`Unknown function: \${functionName\}\`);<br>• let url = `wss://api.x.ai/v1/realtime?model=${MODEL}`;<br>• if (resumeId) url += `&amp;conversation_id=${resumeId}`;<br>• `xai-client-secret.${token}`,<br>• // const headers = { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` };<br>• const headers = { Authorization: `Bearer ${process.env.XAI_API_KEY}` }; |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-speech-to-speech |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Description |
| tables › 第 1 项 › heading | 新增 | 未记录 | Model Selection |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • `grok-voice-latest`<br>• Alias for `grok-voice-3.0` |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • `grok-voice-3.0`<br>• Flagship voice model |
| tables › 第 1 项 › rows › 第 3 项 | 新增 | 未记录 | • `grok-voice-2.0`<br>• Previous-generation voice model |
| tables › 第 2 项 › headers | 新增 | 未记录 | • Parameter<br>• Type<br>• Description |
| tables › 第 2 项 › heading | 新增 | 未记录 | Session Parameters |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • `instructions`<br>• string<br>• System prompt. See the [Prompting Guide](/developers/model-capabilities/audio/speech-to-speech/prompting-guide) for the recommended structure. |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • `reasoning.effort`<br>• `"high"`<br>• `"none"`<br>• optional<br>• Controls whether the model uses reasoning. Defaults to `"high"`. |
| tables › 第 2 项 › rows › 第 3 项 | 新增 | 未记录 | • `voice`<br>• string<br>• Voice selection: any built-in voice (e.g. `eve`) or a [custom voice ID](/developers/model-capabilities/audio/custom-voices) (see [Available Voices](#available-voices)) |
| tables › 第 2 项 › rows › 第 4 项 | 新增 | 未记录 | • `tools`<br>• array<br>• Tools available to the voice agent. Supports `file_search`, `web_search`, `x_search`, `mcp`, and `function` types. See [Using Tools](#using-tools-with-grok-speech-to-speech-api). |
| tables › 第 2 项 › rows › 第 5 项 | 新增 | 未记录 | • `turn_detection.type`<br>• string<br>• null<br>• `"server_vad"` for automatic detection, `null` for manual text turns |
| tables › 第 2 项 › rows › 第 6 项 | 新增 | 未记录 | • `turn_detection.idle_timeout_ms`<br>• number<br>• optional<br>• When set, the server proactively re-engages the user if no speech is detected for this many milliseconds after the assistant finishes responding. The timer re-arms after every response, so it fires repeatedly each `idle_timeout_ms` until the user speaks. Default: `null`. |
| tables › 第 2 项 › rows › 第 7 项 | 新增 | 未记录 | • `resumption.enabled`<br>• boolean<br>• optional<br>• Opt in to [Session Resumption](#session-resumption): the server caches conversation turns keyed by `conversation_id` and replays them on reconnect so the model stays conditioned on prior context. Defaults to `false`. See [Session Resumption](#session-resumption). |
| tables › 第 2 项 › rows › 第 8 项 | 新增 | 未记录 | • `audio.input.format.type`<br>• string<br>• Input codec: `"audio/pcm"`, `"audio/pcmu"`, `"audio/pcma"`, or `"audio/opus"` |
| tables › 第 2 项 › rows › 第 9 项 | 新增 | 未记录 | • `audio.input.format.rate`<br>• number<br>• Input sample rate (PCM only): 8000, 16000, 22050, 24000, 32000, 44100, 48000 |
| tables › 第 2 项 › rows › 第 10 项 | 新增 | 未记录 | • `audio.input.transport`<br>• `"json"`<br>• `"binary"`<br>• optional<br>• Wire path for input audio. Default: `"json"` (base64 in `input_audio_buffer.append`). `"binary"`: raw codec bytes as WebSocket binary frames. See [Audio Transport](#audio-transport). |
| tables › 第 2 项 › rows › 第 11 项 | 新增 | 未记录 | • `audio.output.format.type`<br>• string<br>• Output codec: `"audio/pcm"`, `"audio/pcmu"`, `"audio/pcma"`, or `"audio/opus"` |
| tables › 第 2 项 › rows › 第 12 项 | 新增 | 未记录 | • `audio.output.format.rate`<br>• number<br>• Output sample rate (PCM only): 8000, 16000, 22050, 24000, 32000, 44100, 48000 |
| tables › 第 2 项 › rows › 第 13 项 | 新增 | 未记录 | • `audio.output.transport`<br>• `"json"`<br>• `"binary"`<br>• optional<br>• Wire path for assistant audio. Default: `"json"` (base64 in `response.output_audio.delta` / `response.audio.delta`). `"binary"`: raw codec bytes as WebSocket binary frames. Mid-session changes apply at the next response boundary. See [Audio Transport](#audio-transport). |
| tables › 第 2 项 › rows › 第 14 项 | 新增 | 未记录 | • `audio.input.transcription.language_hint`<br>• string<br>• BCP-47 language code (e.g. `"ja"`, `"ar"`, `"es-MX"`, `"pt-BR"`) to bias ASR transcription toward a specific language. Can be updated mid-session. See [Language Hint](#language-hint). |
| tables › 第 2 项 › rows › 第 15 项 | 新增 | 未记录 | • `audio.input.transcription.keyterms`<br>• array<br>• List of key terms (e.g. product names, proper nouns) to bias transcription toward. Max 100 terms, each up to 50 characters. Can be updated mid-session. See [Keyterms](#keyterms). |
| tables › 第 2 项 › rows › 第 16 项 | 新增 | 未记录 | • `audio.output.speed`<br>• number<br>• Playback speed multiplier for assistant audio output. Range: 0.7–1.5. Default: `1.0`. Values below 1.0 slow down speech; values above 1.0 speed it up. |
| tables › 第 2 项 › rows › 第 17 项 | 新增 | 未记录 | • `replace`<br>• object<br>• optional<br>• Map of phrases to spoken substitutions applied to the model's output before TTS, e.g. `{"Acme Mobile": "Acme Mobull"}`. Fixes pronunciation by changing the spoken audio without altering the transcript. See [Pronunciation Replacements](#pronunciation-replacements). |
| tables › 第 3 项 › headers | 新增 | 未记录 | • Format<br>• Encoding<br>• Container Types<br>• Sample Rate |
| tables › 第 3 项 › heading | 新增 | 未记录 | Configuring Audio Format |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • **`audio/pcm`** (Default)<br>• Linear16, Little-endian<br>• Raw, WAV, AIFF<br>• Configurable (see below) |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • **`audio/pcmu`**<br>• G.711 μ-law (Mulaw)<br>• Raw<br>• 8000 Hz |
| tables › 第 3 项 › rows › 第 3 项 | 新增 | 未记录 | • **`audio/pcma`**<br>• G.711 A-law<br>• Raw<br>• 8000 Hz |
| tables › 第 3 项 › rows › 第 4 项 | 新增 | 未记录 | • **`audio/opus`**<br>• Opus<br>• Raw packets (one packet per payload)<br>• 24000 Hz |
| tables › 第 4 项 › headers | 新增 | 未记录 | • Sample Rate<br>• Quality<br>• Description |
| tables › 第 4 项 › heading | 新增 | 未记录 | Configuring Audio Format |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • **8000 Hz**<br>• Telephone<br>• Narrowband, suitable for voice calls |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • **16000 Hz**<br>• Wideband<br>• Good for speech recognition |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • **22050 Hz**<br>• Standard<br>• Balanced quality and bandwidth |
| tables › 第 4 项 › rows › 第 4 项 | 新增 | 未记录 | • **24000 Hz** (Default)<br>• High<br>• Recommended for most use cases |
| tables › 第 4 项 › rows › 第 5 项 | 新增 | 未记录 | • **32000 Hz**<br>• Very High<br>• Enhanced audio clarity |
| tables › 第 4 项 › rows › 第 6 项 | 新增 | 未记录 | • **44100 Hz**<br>• CD Quality<br>• Standard for music / media |
| tables › 第 4 项 › rows › 第 7 项 | 新增 | 未记录 | • **48000 Hz**<br>• Professional<br>• Studio-grade audio |
| tables › 第 5 项 › headers | 新增 | 未记录 | • 空字符串<br>• **Input**<br>• **Output** |
| tables › 第 5 项 › heading | 新增 | 未记录 | Audio Transport |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • **`json`** (default)<br>• Base64 in [`input_audio_buffer.append`](/developers/rest-api-reference/inference/voice#input_audio_buffer.append)<br>• Base64 in [`response.output_audio.delta`](/developers/rest-api-reference/inference/voice#response.output_audio.delta) / `response.audio.delta` |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • **`binary`**<br>• Raw codec bytes as WebSocket **binary** frames (no protocol header)<br>• Same binary frames; lifecycle events (`response.created`, `response.done`, transcripts, etc.) stay JSON |
| tables › 第 6 项 › headers | 新增 | 未记录 | • Language<br>• Code |
| tables › 第 6 项 › heading | 新增 | 未记录 | Supported Languages |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • English<br>• `en` |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • Arabic (Egypt)<br>• `ar-EG` |
| tables › 第 6 项 › rows › 第 3 项 | 新增 | 未记录 | • Arabic (Saudi Arabia)<br>• `ar-SA` |
| tables › 第 6 项 › rows › 第 4 项 | 新增 | 未记录 | • Arabic (United Arab Emirates)<br>• `ar-AE` |
| tables › 第 6 项 › rows › 第 5 项 | 新增 | 未记录 | • Bengali<br>• `bn` |
| tables › 第 6 项 › rows › 第 6 项 | 新增 | 未记录 | • Chinese (Simplified)<br>• `zh` |
| tables › 第 6 项 › rows › 第 7 项 | 新增 | 未记录 | • French<br>• `fr` |
| tables › 第 6 项 › rows › 第 8 项 | 新增 | 未记录 | • German<br>• `de` |
| tables › 第 6 项 › rows › 第 9 项 | 新增 | 未记录 | • Hindi<br>• `hi` |
| tables › 第 6 项 › rows › 第 10 项 | 新增 | 未记录 | • Indonesian<br>• `id` |
| tables › 第 6 项 › rows › 第 11 项 | 新增 | 未记录 | • Italian<br>• `it` |
| tables › 第 6 项 › rows › 第 12 项 | 新增 | 未记录 | • Japanese<br>• `ja` |
| tables › 第 6 项 › rows › 第 13 项 | 新增 | 未记录 | • Korean<br>• `ko` |
| tables › 第 6 项 › rows › 第 14 项 | 新增 | 未记录 | • Portuguese (Brazil)<br>• `pt-BR` |
| tables › 第 6 项 › rows › 第 15 项 | 新增 | 未记录 | • Portuguese (Portugal)<br>• `pt-PT` |
| tables › 第 6 项 › rows › 第 16 项 | 新增 | 未记录 | • Russian<br>• `ru` |
| tables › 第 6 项 › rows › 第 17 项 | 新增 | 未记录 | • Spanish (Mexico)<br>• `es-MX` |
| tables › 第 6 项 › rows › 第 18 项 | 新增 | 未记录 | • Spanish (Spain)<br>• `es-ES` |
| tables › 第 6 项 › rows › 第 19 项 | 新增 | 未记录 | • Turkish<br>• `tr` |
| tables › 第 6 项 › rows › 第 20 项 | 新增 | 未记录 | • Vietnamese<br>• `vi` |
| tables › 第 7 项 › headers | 新增 | 未记录 | • Parameter<br>• Required<br>• Description |
| tables › 第 7 项 › heading | 新增 | 未记录 | Web Search Parameters |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • `allowed_domains`<br>• No<br>• Only include results from these domains (no protocol or path, e.g. `example.com`). Max 5. Mutually exclusive with `excluded_domains` — do not set both on the same tool. |
| tables › 第 7 项 › rows › 第 2 项 | 新增 | 未记录 | • `excluded_domains`<br>• No<br>• Exclude results from these domains. Max 5. Mutually exclusive with `allowed_domains` — do not set both on the same tool. |
| tables › 第 7 项 › rows › 第 3 项 | 新增 | 未记录 | • `enable_image_understanding`<br>• No<br>• Let the agent view images found during web search. |
| tables › 第 7 项 › rows › 第 4 项 | 新增 | 未记录 | • `location`<br>• No<br>• Bias results by location: `country` (ISO 3166-1 alpha-2 or full name), `city`, `region`, `timezone` (IANA, e.g. `America/Los_Angeles`). Also accepted under the text-API name `user_location`. |
| tables › 第 8 项 › headers | 新增 | 未记录 | • Parameter<br>• Required<br>• Description |
| tables › 第 8 项 › heading | 新增 | 未记录 | X Search Parameters |
| tables › 第 8 项 › rows › 第 1 项 | 新增 | 未记录 | • `allowed_x_handles`<br>• No<br>• Only include posts from these X handles (without `@`). Max 20. Mutually exclusive with `excluded_x_handles` — do not set both on the same tool. |
| tables › 第 8 项 › rows › 第 2 项 | 新增 | 未记录 | • `excluded_x_handles`<br>• No<br>• Exclude posts from these X handles. Max 20. Mutually exclusive with `allowed_x_handles` — do not set both on the same tool. |
| tables › 第 8 项 › rows › 第 3 项 | 新增 | 未记录 | • `from_date`<br>• No<br>• Only consider posts from this date, ISO-8601 `YYYY-MM-DD`. Must not be later than `to_date`. |
| tables › 第 8 项 › rows › 第 4 项 | 新增 | 未记录 | • `to_date`<br>• No<br>• Only consider posts up to this date, ISO-8601 `YYYY-MM-DD`. |
| tables › 第 8 项 › rows › 第 5 项 | 新增 | 未记录 | • `enable_image_understanding`<br>• No<br>• Let the agent view images in posts. |
| tables › 第 8 项 › rows › 第 6 项 | 新增 | 未记录 | • `enable_video_understanding`<br>• No<br>• Let the agent view videos in posts. |
| tables › 第 9 项 › headers | 新增 | 未记录 | • Parameter<br>• Required<br>• Description |
| tables › 第 9 项 › heading | 新增 | 未记录 | MCP Tool Parameters |
| tables › 第 9 项 › rows › 第 1 项 | 新增 | 未记录 | • `server_url`<br>• Yes<br>• The URL of the MCP server. Only Streaming HTTP and SSE transports are supported. |
| tables › 第 9 项 › rows › 第 2 项 | 新增 | 未记录 | • `server_label`<br>• Yes<br>• A label to identify the server (used for tool call prefixing). |
| tables › 第 9 项 › rows › 第 3 项 | 新增 | 未记录 | • `server_description`<br>• No<br>• A description of what the server provides. |
| tables › 第 9 项 › rows › 第 4 项 | 新增 | 未记录 | • `allowed_tools`<br>• No<br>• List of specific tool names to allow. If omitted, all tools from the server are available. |
| tables › 第 9 项 › rows › 第 5 项 | 新增 | 未记录 | • `authorization`<br>• No<br>• A token set in the `Authorization` header on requests to the MCP server. |
| tables › 第 9 项 › rows › 第 6 项 | 新增 | 未记录 | • `headers`<br>• No<br>• Additional headers to include in requests to the MCP server. |
| tables › 第 10 项 › headers | 新增 | 未记录 | • Event<br>• Direction<br>• Description |
| tables › 第 10 项 › heading | 新增 | 未记录 | Function Call Events |
| tables › 第 10 项 › rows › 第 1 项 | 新增 | 未记录 | • `response.function_call_arguments.done`<br>• Server → Client<br>• Function call triggered with complete arguments |
| tables › 第 10 项 › rows › 第 2 项 | 新增 | 未记录 | • `conversation.item.create` (function\_call\_output)<br>• Client → Server<br>• Send function execution result back |
| tables › 第 10 项 › rows › 第 3 项 | 新增 | 未记录 | • `response.create`<br>• Client → Server<br>• Request agent to continue processing |
| tables › 第 11 项 › headers | 新增 | 未记录 | • Field<br>• Required<br>• Default<br>• Description |
| tables › 第 11 项 › heading | 新增 | 未记录 | Do NOT send response.create — the force_message IS the turn. |
| tables › 第 11 项 › rows › 第 1 项 | 新增 | 未记录 | • `item.type`<br>• Yes<br>• —<br>• Must be `"force_message"` |
| tables › 第 11 项 › rows › 第 2 项 | 新增 | 未记录 | • `item.content[].text`<br>• Yes<br>• —<br>• Verbatim text to synthesize via TTS |
| tables › 第 11 项 › rows › 第 3 项 | 新增 | 未记录 | • `item.interruptible`<br>• No<br>• `true`<br>• When `false`, caller audio is dropped until playback completes |
| tables › 第 12 项 › headers | 新增 | 未记录 | • OpenAI Event<br>• Notes |
| tables › 第 12 项 › heading | 新增 | 未记录 | Unsupported Client Events |
| tables › 第 12 项 › rows › 第 1 项 | 新增 | 未记录 | • `conversation.item.retrieve`<br>• Not supported. |
| tables › 第 12 项 › rows › 第 2 项 | 新增 | 未记录 | • `output_audio_buffer.clear`<br>• WebRTC/SIP only. |
| tables › 第 13 项 › headers | 新增 | 未记录 | • OpenAI Event<br>• Notes |
| tables › 第 13 项 › heading | 新增 | 未记录 | Unsupported Server Events |
| tables › 第 13 项 › rows › 第 1 项 | 新增 | 未记录 | • `conversation.item.done`<br>• Not emitted. |
| tables › 第 13 项 › rows › 第 2 项 | 新增 | 未记录 | • `conversation.item.input_audio_transcription.failed`<br>• Not emitted. |
| tables › 第 13 项 › rows › 第 3 项 | 新增 | 未记录 | • `conversation.item.input_audio_transcription.segment`<br>• Not supported. |
| tables › 第 13 项 › rows › 第 4 项 | 新增 | 未记录 | • `conversation.item.retrieved`<br>• Not supported. |
| tables › 第 13 项 › rows › 第 5 项 | 新增 | 未记录 | • `output_audio_buffer.started`<br>• WebRTC/SIP only. |
| tables › 第 13 项 › rows › 第 6 项 | 新增 | 未记录 | • `output_audio_buffer.stopped`<br>• WebRTC/SIP only. |
| tables › 第 13 项 › rows › 第 7 项 | 新增 | 未记录 | • `output_audio_buffer.cleared`<br>• WebRTC/SIP only. |
| tables › 第 13 项 › rows › 第 8 项 | 新增 | 未记录 | • `rate_limits.updated`<br>• Not emitted. |
| tables › 第 14 项 › headers | 新增 | 未记录 | • Event / Feature<br>• Description |
| tables › 第 14 项 › heading | 新增 | 未记录 | SpaceXSI Extensions |
| tables › 第 14 项 › rows › 第 1 项 | 新增 | 未记录 | • `force_message`<br>• New `conversation.item.create` item type for TTS-synthesized scripted utterances. See [Force Message](#force-message). |
| tables › 第 14 项 › rows › 第 2 项 | 新增 | 未记录 | • `resumption`<br>• Field on `session.update` that caches conversation turns and replays them on reconnect. See [Session Resumption](#session-resumption). |
| tables › 第 14 项 › rows › 第 3 项 | 新增 | 未记录 | • `replace`<br>• Field on `session.update` that maps phrases to spoken substitutions applied before TTS to fix pronunciation without changing the transcript. See [Pronunciation Replacements](#pronunciation-replacements). |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-speech-to-text-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl -X POST https://api.x.ai/v1/stt \<br>• "https://api.x.ai/v1/stt",<br>• const response = await fetch("https://api.x.ai/v1/stt", {<br>• For real-time transcription, use the WebSocket API at `wss://api.x.ai/v1/stt`. The client streams raw audio as binary WebSocket frames and receives JSON transcript events as the audio is processed.<br>• **Endpoint:** `wss://api.x.ai/v1/stt`<br>• wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;encoding=opus&amp;interim_results=true<br>• wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;multichannel=true&amp;channels=2&amp;interim_results=true<br>• wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;interim_results=true&amp;smart_turn=0.7&amp;smart_turn_timeout=3000<br>• WS_URL = "wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;interim_results=true&amp;language=en&amp;keyterm=Understand+The+Universe"<br>• const url = "wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;interim_results=true&amp;language=en&amp;keyterm=Understand+The+Universe"; |
| capability mentions | 新增 | 未记录 | 列表（120 项）<details><summary>展开完整内容</summary><ul><li># Speech to Text</li><li>Transcribe audio files into text with a single API call, or stream audio in real time over WebSocket. The API supports 15 audio formats, word-level timestamps, multichannel transcription, and text formatting.</li><li>Transcribe an audio file with a single API call:</li><li>-F model=grok-voice-transcribe-2.0 \</li><li>-F file=@audio.mp3</li><li>files={"file": ("audio.mp3", open("audio.mp3", "rb"), "audio/mpeg")},</li><li>("model", "grok-voice-transcribe-2.0"),</li><li>formData.append("model", "grok-voice-transcribe-2.0");</li><li>formData.append("file", new Blob([fs.readFileSync("audio.mp3")]), "audio.mp3");</li><li>[Get API Key →](https://console.x.ai/team/default/api-keys?campaign=voice-docs-stt\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-speech-to-text\&amp;utm_content=api-keys)</li><li>&#124; `grok-voice-transcribe-2.0` &#124; Our best transcription model. Default when `model` is omitted. &#124;</li><li>`grok-voice-transcribe-2.0` transcribes 38+ languages, including every language listed below.</li><li>* When you know what's being spoken, set `language` to its code. The model then leans toward that language when the audio is ambiguous.</li><li>&#124; `file` &#124; file &#124; &#124; ✓† &#124; Audio file to transcribe. Max **500 MB**. See [Supported Formats](#supported-audio-formats). Must be the last field in the multipart form. &#124;</li><li>&#124; `url` &#124; string &#124; &#124; ✓† &#124; URL of an audio file to download and transcribe (server-side). &#124;</li><li>&#124; `model` &#124; string &#124; `grok-voice-transcribe-2.0` &#124; &#124; `grok-voice-transcribe-2.0` (default). &#124;</li><li>&#124; `audio_format` &#124; string &#124; &#124; &#124; Format hint for raw/headerless audio: `pcm`, `mulaw`, `alaw`. Container formats are auto-detected — do not set this field for MP3, WAV, etc. &#124;</li><li>&#124; `sample_rate` &#124; integer &#124; &#124; &#124; Sample rate in Hz. Only required for raw audio (`pcm`, `mulaw`, `alaw`). Supported: `8000`, `16000`, `22050`, `24000`, `44100`, `48000`. &#124;</li><li>&#124; `language` &#124; string &#124; &#124; &#124; Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages). &#124;</li><li>&#124; `multichannel` &#124; boolean &#124; `false` &#124; &#124; When `true`, transcribes each audio channel independently. Results returned in the `channels` array. &#124;</li><li>&#124; `channels` &#124; integer &#124; &#124; &#124; Number of audio channels (2–8). Only required for multichannel raw audio. Auto-detected for container formats. &#124;</li><li>&#124; `keyterm` &#124; string &#124; &#124; &#124; A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters. &#124;</li><li>&#124; `filler_words` &#124; boolean &#124; `false` &#124; &#124; When `true`, filler words (e.g. "uh", "um", "er") are included in the transcript. When `false` (default), filler words are automatically removed from the transcript text and the `words` array. &#124;</li><li>&#124; `vad_threshold` &#124; number &#124; `0.5` &#124; &#124; Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio segments scoring below the threshold are treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate. &#124;</li><li>The response includes the full transcript, audio duration, and word-level timestamps.</li><li>&#124; `text` &#124; string &#124; Full transcript text. &#124;</li><li>&#124; `duration` &#124; number &#124; Audio duration in seconds (2 d.p.). &#124;</li><li>&#124; `channels` &#124; array &#124; Per-channel transcripts (only when `multichannel=true`). Each entry has `index`, `text`, and `words`. &#124;</li><li>## Supported Audio Formats</li><li>&#124; WAV &#124; `.wav` &#124; Waveform Audio — lossless, best quality input &#124;</li><li>&#124; MP3 &#124; `.mp3` &#124; MPEG Audio Layer 3 — widely supported &#124;</li><li>&#124; FLAC &#124; `.flac` &#124; Free Lossless Audio Codec — lossless compression &#124;</li><li>&#124; AAC &#124; `.aac` &#124; Advanced Audio Coding &#124;</li><li>&#124; M4A &#124; `.m4a` &#124; MPEG-4 Audio — Apple ecosystem standard &#124;</li><li>&#124; MKV &#124; `.mkv` &#124; Matroska container — supports MP3, AAC, and FLAC audio codecs &#124;</li><li>&#124; WebM &#124; `.webm` &#124; WebM container — typically Opus audio from browsers &#124;</li><li>&#124; AVI &#124; `.avi` &#124; Audio Video Interleave &#124;</li><li>### Raw formats (require `audio_format` and `sample_rate`)</li><li>&#124; Format &#124; `audio_format` value &#124; Description &#124;</li><li>## Streaming Speech-to-Text (WebSocket)</li><li>For real-time transcription, use the WebSocket API at `wss://api.x.ai/v1/stt`. The client streams raw audio as binary WebSocket frames and receives JSON transcript events as the audio is processed.</li><li>Configuration is done via URL query parameters — no setup message required. Audio is sent as raw binary frames (no base64 encoding).</li><li>&#124; `sample_rate` &#124; integer &#124; `16000` &#124; Audio sample rate in Hz. Ignored for `encoding=opus` — Opus packets are sample-rate-agnostic. &#124;</li><li>&#124; `encoding` &#124; string &#124; `pcm` &#124; Audio encoding: `pcm`, `mulaw`, `alaw`, or `opus`. See [Opus Streaming](#opus-streaming). &#124;</li><li>&#124; `interim_results` &#124; boolean &#124; `false` &#124; When `true`, emit partial transcripts `is_final=false` every ~500 ms. &#124;</li><li>&#124; `language` &#124; string &#124; &#124; Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages). &#124;</li><li>&#124; `model` &#124; string &#124; `grok-voice-transcribe-2.0` &#124; `grok-voice-transcribe-2.0` (default). &#124;</li><li>&#124; `filler_words` &#124; boolean &#124; `false` &#124; When `true`, filler words (e.g. `uh`, `um`, `er`) are included in the transcript. When `false` (default), filler words are automatically removed. &#124;</li><li>&#124; `multichannel` &#124; boolean &#124; `false` &#124; Per-channel transcription. Requires `channels` ≥ 2. Not supported with `encoding=opus`. &#124;</li><li>&#124; `channels` &#124; integer &#124; `1` &#124; Number of interleaved audio channels (max 8). &#124;</li><li>&#124; `keyterm` &#124; string &#124; &#124; A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the parameter for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters. &#124;</li><li>&#124; `smart_turn_timeout` &#124; integer &#124; &#124; Maximum silence duration (ms) before forcing `speech_final`, even when the Smart Turn model predicts the speaker hasn't finished. Range: 1–5000. Only applies when `smart_turn` is enabled. See [Smart Turn](#smart-turn). &#124;</li><li>&#124; `vad_threshold` &#124; number &#124; `0.08` &#124; Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio in chunks scoring below the threshold is treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate. Does not affect endpointing or `speech_final` timing. &#124;</li><li>&#124; `transcript.created` &#124; Server ready — wait for this before sending audio. &#124;</li><li>&#124; `transcript.partial` &#124; Transcript result with `text`, `words`, `is_final`, `speech_final`, `start`, `duration`. Includes `channel_index` when `multichannel=true`. Includes `end_of_turn_confidence` when `smart_turn` is enabled. &#124;</li><li>&#124; `transcript.done` &#124; Final transcript after `audio.done`. `duration` always present. Includes `channel_index` when `multichannel=true` — one event sent per channel. Connection closes after this. &#124;</li><li>&#124; `error` &#124; Error with `message` field. Most errors (including undecodable audio frames) close the connection; client message parse errors keep it open. &#124;</li><li>The `transcript.partial` event uses `is_final` and `speech_final` to convey three states:</li><li>&#124; `is_final` &#124; `speech_final` &#124; Meaning &#124;</li><li>&#124; `true` &#124; `false` &#124; **Chunk final** — text locked, ~3s of speech finalized. When `smart_turn` is enabled, silence pauses where the model's confidence is below the threshold are demoted to chunk final instead of utterance final. &#124;</li><li>* **Binary frames** — raw audio in the specified encoding (streamed in real-time-paced chunks, e.g. 100 ms). With `encoding=opus`, each binary frame must contain exactly one Opus packet — see [Opus Streaming](#opus-streaming).</li><li>* **`{"type": "finalize"}`** — force the current utterance to finalize as `speech_final` immediately for PTT</li><li>* **`{"type": "audio.done"}`** — signal end of audio, triggers `transcript.done`</li><li>`transcript.done` tells the server no more audio will be sent and to flush the remaining transcript and close the websocket.</li><li>Set `encoding=opus` to stream compressed audio instead of raw PCM — roughly 4 KB/s versus 48 KB/s for PCM16 at 24 kHz, with no client-side resampling.</li><li>* Omit `sample_rate` — Opus packets don't carry one, and the parameter is ignored for this encoding. Encode at whatever rate your audio source produces.</li><li>* Send raw packets, not containers. To transcribe an Ogg-Opus or WebM file, use the [batch endpoint](#supported-audio-formats) instead — it auto-detects containers.</li><li>wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;encoding=opus&amp;interim_results=true</li><li>**Typical use case:** Dictation and live transcription from mobile or other bandwidth-constrained clients, where streaming raw PCM is wasteful. Most platform audio APIs and WebRTC stacks produce Opus packets natively.</li><li>When `multichannel=true` and `channels` ≥ 2, the server transcribes each audio channel independently. Send interleaved multichannel PCM (e.g. L,R,L,R,… for stereo) as binary frames, and the server de-interleaves and processes each channel in parallel.</li><li>* `transcript.created` is sent once (session-level — no `channel_index`).</li><li>* `transcript.partial` events include a `channel_index` field (0-based) identifying the source channel. Events from different channels arrive interleaved.</li><li>* `transcript.done` is sent **once per channel** after `audio.done`, each with its own `channel_index`.</li><li>wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;multichannel=true&amp;channels=2&amp;interim_results=true</li><li>**Typical use case:** Call center recordings with agent on channel 0 and customer on channel 1, enabling per-speaker transcription without requiring speaker diarization.</li><li>* When enabled via `smart_turn= `, the model evaluates accumulated audio at each VAD silence boundary.</li><li>* If the end-of-turn confidence exceeds the threshold, `speech_final=true` fires normally.</li><li>* If confidence is below the threshold, the event is demoted to `chunk_final` (`is_final=true`, `speech_final=false`) — the transcript text is locked but the utterance continues.</li><li>* Every `transcript.partial` event includes an `end_of_turn_confidence` field (0.0–1.0) when Smart Turn is enabled.</li><li>* During active speech, `end_of_turn_confidence` is `0.0` (the model only runs at silence boundaries).</li><li>When Smart Turn is enabled, the model has full control over when `speech_final` fires. To prevent sessions from hanging during extended silence (e.g. the user walks away), set `smart_turn_timeout` to a maximum silence duration in milliseconds (1–5000). If the model keeps predicting "not done" for longer than this duration, `speech_final` fires anyway as a safety net.</li><li>wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;interim_results=true&amp;smart_turn=0.7&amp;smart_turn_timeout=3000</li><li>Without `smart_turn_timeout`, the model has unlimited control — `speech_final` only fires when confidence exceeds the threshold.</li><li>"type": "transcript.partial",</li><li>"speech_final": true,</li><li>**Typical use case:** Voice assistants and conversational AI where you want to avoid cutting the user off mid-sentence. Without Smart Turn, a brief pause while dictating a phone number or thinking between clauses triggers `speech_final`. With Smart Turn, the model holds off until it detects a natural turn ending (confidence 0.95+) while correctly suppressing during mid-sentence pauses (confidence ~0.005).</li><li>WS_URL = "wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;interim_results=true&amp;language=en&amp;keyterm=Understand+The+Universe"</li><li>async def transcribe_stream(audio_file: str):</li><li>assert msg["type"] == "transcript.created"</li><li>with open(audio_file, "rb") as f:</li><li># Signal end of audio</li><li>await ws.send(json.dumps({"type": "audio.done"}))</li><li># Collect events until transcript.done</li><li>if event["type"] == "transcript.partial":</li><li>elif event["type"] == "transcript.done":</li><li>print(f"\nFull transcript: {event['text']}")</li><li>asyncio.run(transcribe_stream("audio.wav"))</li><li>const url = "wss://api.x.ai/v1/stt?model=grok-voice-transcribe-2.0&amp;sample_rate=16000&amp;encoding=pcm&amp;interim_results=true&amp;language=en&amp;keyterm=Understand+The+Universe";</li><li>case "transcript.created":</li><li>console.log("Server ready — streaming audio...");</li><li>const audio = fs.readFileSync("audio.wav").slice(44);</li><li>if (offset &gt;= audio.length) {</li><li>ws.send(JSON.stringify({ type: "audio.done" }));</li><li>ws.send(audio.slice(offset, offset + chunkSize));</li><li>case "transcript.partial":</li><li>case "transcript.done":</li><li>console.log(`\nFull transcript: ${event.text}`);</li><li>* **Live captions** — Real-time subtitles for video calls, meetings, and live streams</li><li>* **Voice assistants** — Transcribe user speech for natural language understanding pipelines</li><li>* **Call centers** — Real-time agent assistance with multichannel per-speaker transcription</li><li>* **Accessibility** — Live transcription for hearing-impaired users</li><li>* **Voice commands** — Low-latency speech-to-action for hands-free interfaces</li><li>* **Enable `interim_results`** for responsive UX — show transcription as the user speaks</li><li>* **Send 100 ms audio chunks** (3,200 bytes at 16 kHz PCM16) for a good balance of latency and efficiency</li><li>* **Wait for `transcript.created`** before sending audio — the server needs to initialize its ASR backend</li><li>&#124; `200` &#124; Success &#124; Transcription in the response body &#124;</li><li>&#124; `400` &#124; Bad request &#124; Missing `file`/`url`, unsupported format, missing `sample_rate` for raw audio, `format=true` without `language` &#124;</li><li>* [Voice Overview](/developers/model-capabilities/audio/voice) — Overview of all SpaceXSI voice capabilities</li><li>* [Text to Speech](/developers/model-capabilities/audio/text-to-speech) — Convert text to speech</li><li>* [API Reference — Speech to text](/developers/rest-api-reference/inference/voice#speech-to-text---rest) — Full REST endpoint specification</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Model Capabilities<br># Speech to Text<br>Transcribe audio files into text with a single API call, or stream audio in real time over WebSocket. The API supports 15 audio formats, word-level timestamps, multichannel transcription, and text formatting.<br>## Quick Start<br>Transcribe an audio file with a single API call:<br>```bash<br>curl -X POST https://api.x.ai/v1/stt \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-F model=grok-voice-transcribe-2.0 \<br>-F format=true \<br>-F language=en \<br>-F "keyterm=Understand The Universe" \<br>-F file=@audio.mp3<br>```<br>```python customLanguage="pythonWithoutSDK"<br>import os<br>import requests<br>response = requests.post(<br>"https://api.x.ai/v1/stt",<br>headers={"Authorization": f"Bearer {os.environ['XAI_API_KEY']}"},<br>files={"file": ("audio.mp3", open("audio.mp3", "rb"), "audio/mpeg")},<br>data=[<br>("model", "grok-voice-transcribe-2.0"),<br>("format", "true"),<br>("language", "en"),<br>("keyterm", "Understand The Universe"),<br>],<br>)<br>response.raise_for_status()<br>result = response.json()<br>print(result["text"])<br>print(f"Duration: {result['duration']}s")<br>for word in result.get("words", []):<br>print(f" {word['start']:.2f}s - {word['end']:.2f}s: {word['text']}")<br>```<br>```javascript customLanguage="javascriptWithoutSDK"<br>import fs from "fs";<br>const formData = new FormData();<br>formData.append("model", "grok-voice-transcribe-2.0");<br>formData.append("format", "true");<br>formData.append("language", "en");<br>formData.append("keyterm", "Understand The Universe");<br>formData.append("file", new Blob([fs.readFileSync("audio.mp3")]), "audio.mp3");<br>const response = await fetch("https://api.x.ai/v1/stt", {<br>method: "POST",<br>headers: {<br>Authorization: `Bearer ${process.env.XAI_API_KEY}`,<br>},<br>body: formData,<br>});<br>if (!response.ok) throw new Error(`STT error ${response.status}`);<br>const result = await response.json();<br>console.log(result.text);<br>console.log(`Duration: ${result.duration}s`);<br>for (const word of result.words ?? []) {<br>console.log(` ${word.start.toFixed(2)}s - ${word.end.toFixed(2)}s: ${word.text}`);<br>}<br>```<br>Note: The `file` parameter must be provided after all other parameters in the multipart form.<br>[Get API Key →](https://console.x.ai/team/default/api-keys?campaign=voice-docs-stt\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-speech-to-text\&amp;utm_content=api-keys)<br>[Live Voice Demos](https://x.ai/api/voice)<br>## Model Selection<br>Pass `model` on the REST form or as a WebSocket query parameter.<br>&#124; Model &#124; Description &#124;<br>&#124;-------&#124;-------------&#124;<br>&#124; `grok-voice-transcribe-2.0` &#124; Our best transcription model. Default when `model` is omitted. &#124;<br>## Supported Languages<br>`grok-voice-transcribe-2.0` transcribes 38+ languages, including every language listed below.<br>* The model detects the spoken language automatically.<br>* It follows language switches partway through a recording, so `language` is optional.<br>* When you know what's being spoken, set `language` to its code. The model then leans toward that language when the audio is ambiguous.<br>&#124; Language &#124; Code &#124; &#124; Language &#124; Code &#124;<br>&#124;----------&#124;------&#124;-&#124;----------&#124;------&#124;<br>&#124; Arabic &#124; `ar` &#124; &#124; Italian &#124; `it` &#124;<br>&#124; Bosnian &#124; `bs` &#124; &#124; Japanese &#124; `ja` &#124;<br>&#124; Bulgarian &#124; `bg` &#124; &#124; Korean &#124; `ko` &#124;<br>&#124; Cantonese &#124; `yue` &#124; &#124; Macedonian &#124; `mk` &#124;<br>&#124; Catalan &#124; `ca` &#124; &#124; Malay &#124; `ms` &#124;<br>&#124; Chinese (Mandarin) &#124; `zh` &#124; &#124; Norwegian (Bokmål) &#124; `nb` &#124;<br>&#124; Croatian &#124; `hr` &#124; &#124; Persian &#124; `fa` &#124;<br>&#124; Czech &#124; `cs` &#124; &#124; Polish &#124; `pl` &#124;<br>&#124; Danish &#124; `da` &#124; &#124; Portuguese &#124; `pt` &#124;<br>&#124; Dutch &#124; `nl` &#124; &#124; Romanian &#124; `ro` &#124;<br>&#124; English &#124; `en` &#124; &#124; Russian &#124; `ru` &#124;<br>&#124; Filipino &#124; `fil` &#124; &#124; Slovak &#124; `sk` &#124;<br>&#124; Finnish &#124; `fi` &#124; &#124; Spanish &#124; `es` &#124;<br>&#124; French &#124; `fr` &#124; &#124; Swedish &#124; `sv` &#124;<br>&#124; German &#124; `de` &#124; &#124; Thai &#124; `th` &#124;<br>&#124; Greek &#124; `el` &#124; &#124; Turkish &#124; `tr` &#124;<br>&#124; Hindi &#124; `hi` &#124; &#124; Ukrainian &#124; `uk` &#124;<br>&#124; Hungarian &#124; `hu` &#124; &#124; Urdu &#124; `ur` &#124;<br>&#124; Indonesian &#124; `id` &#124; &#124; Vietnamese &#124; `vi` &#124;<br>Spanish, Portuguese, and Arabic also accept regional codes:<br>&#124; Language &#124; Base code &#124; Regional codes &#124;<br>&#124;----------&#124;-----------&#124;----------------&#124;<br>&#124; Spanish &#124; `es` (Mexican Spanish, `es-MX`) &#124; `es-ES` (European Spanish) &#124;<br>&#124; Portuguese &#124; `pt` (Brazilian Portuguese, `pt-BR`) &#124; `pt-PT` (European Portuguese) &#124;<br>&#124; Arabic &#124; `ar` (Egyptian Arabic, `ar-EG`) &#124; `ar-AE` (Emirati Arabic), `ar-SA` (Saudi Arabic) &#124;<br>Text formatting (`format=true`) writes spoken numbers, currencies, and units in their written form. It works in these languages:<br>* Arabic |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-voice-transcribe-2.0<br>• voice-activity<br>• voice-docs-stt |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $XAI_API_KEY" \<br>• Authorization: `Bearer ${process.env.XAI_API_KEY}`,<br>• if (!response.ok) throw new Error(`STT error ${response.status}`);<br>• console.log(`Duration: ${result.duration}s`);<br>• console.log(` ${word.start.toFixed(2)}s - ${word.end.toFixed(2)}s: ${word.text}`);<br>• &#124; `format` &#124; boolean &#124; `false` &#124; &#124; When `true`, enables Inverse Text Normalization — converts spoken numbers/currency to written form (e.g. "one hundred dollars" → "$100"). Requires `language`. See [Supported Languages](#supported-languages) for coverage. &#124;<br>• "text": "The balance is $167,983.15.",<br>• { "text": "$167,983.15.", "start": 1.12, "end": 3.20 }<br>• const ws = new WebSocket(url, { headers: { Authorization: `Bearer ${apiKey}` } });<br>• console.log(`[${prefix}] ${event.text}`);<br>• console.log(`\nFull transcript: ${event.text}`);<br>• console.log(`Duration: ${event.duration}s`); |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Description |
| tables › 第 1 项 › heading | 新增 | 未记录 | Model Selection |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • `grok-voice-transcribe-2.0`<br>• Our best transcription model. Default when `model` is omitted. |
| tables › 第 2 项 › headers | 新增 | 未记录 | • Language<br>• Code<br>• 空字符串<br>• Language<br>• Code |
| tables › 第 2 项 › heading | 新增 | 未记录 | Supported Languages |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • Arabic<br>• `ar`<br>• 空字符串<br>• Italian<br>• `it` |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • Bosnian<br>• `bs`<br>• 空字符串<br>• Japanese<br>• `ja` |
| tables › 第 2 项 › rows › 第 3 项 | 新增 | 未记录 | • Bulgarian<br>• `bg`<br>• 空字符串<br>• Korean<br>• `ko` |
| tables › 第 2 项 › rows › 第 4 项 | 新增 | 未记录 | • Cantonese<br>• `yue`<br>• 空字符串<br>• Macedonian<br>• `mk` |
| tables › 第 2 项 › rows › 第 5 项 | 新增 | 未记录 | • Catalan<br>• `ca`<br>• 空字符串<br>• Malay<br>• `ms` |
| tables › 第 2 项 › rows › 第 6 项 | 新增 | 未记录 | • Chinese (Mandarin)<br>• `zh`<br>• 空字符串<br>• Norwegian (Bokmål)<br>• `nb` |
| tables › 第 2 项 › rows › 第 7 项 | 新增 | 未记录 | • Croatian<br>• `hr`<br>• 空字符串<br>• Persian<br>• `fa` |
| tables › 第 2 项 › rows › 第 8 项 | 新增 | 未记录 | • Czech<br>• `cs`<br>• 空字符串<br>• Polish<br>• `pl` |
| tables › 第 2 项 › rows › 第 9 项 | 新增 | 未记录 | • Danish<br>• `da`<br>• 空字符串<br>• Portuguese<br>• `pt` |
| tables › 第 2 项 › rows › 第 10 项 | 新增 | 未记录 | • Dutch<br>• `nl`<br>• 空字符串<br>• Romanian<br>• `ro` |
| tables › 第 2 项 › rows › 第 11 项 | 新增 | 未记录 | • English<br>• `en`<br>• 空字符串<br>• Russian<br>• `ru` |
| tables › 第 2 项 › rows › 第 12 项 | 新增 | 未记录 | • Filipino<br>• `fil`<br>• 空字符串<br>• Slovak<br>• `sk` |
| tables › 第 2 项 › rows › 第 13 项 | 新增 | 未记录 | • Finnish<br>• `fi`<br>• 空字符串<br>• Spanish<br>• `es` |
| tables › 第 2 项 › rows › 第 14 项 | 新增 | 未记录 | • French<br>• `fr`<br>• 空字符串<br>• Swedish<br>• `sv` |
| tables › 第 2 项 › rows › 第 15 项 | 新增 | 未记录 | • German<br>• `de`<br>• 空字符串<br>• Thai<br>• `th` |
| tables › 第 2 项 › rows › 第 16 项 | 新增 | 未记录 | • Greek<br>• `el`<br>• 空字符串<br>• Turkish<br>• `tr` |
| tables › 第 2 项 › rows › 第 17 项 | 新增 | 未记录 | • Hindi<br>• `hi`<br>• 空字符串<br>• Ukrainian<br>• `uk` |
| tables › 第 2 项 › rows › 第 18 项 | 新增 | 未记录 | • Hungarian<br>• `hu`<br>• 空字符串<br>• Urdu<br>• `ur` |
| tables › 第 2 项 › rows › 第 19 项 | 新增 | 未记录 | • Indonesian<br>• `id`<br>• 空字符串<br>• Vietnamese<br>• `vi` |
| tables › 第 3 项 › headers | 新增 | 未记录 | • Language<br>• Base code<br>• Regional codes |
| tables › 第 3 项 › heading | 新增 | 未记录 | Supported Languages |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • Spanish<br>• `es` (Mexican Spanish, `es-MX`)<br>• `es-ES` (European Spanish) |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • Portuguese<br>• `pt` (Brazilian Portuguese, `pt-BR`)<br>• `pt-PT` (European Portuguese) |
| tables › 第 3 项 › rows › 第 3 项 | 新增 | 未记录 | • Arabic<br>• `ar` (Egyptian Arabic, `ar-EG`)<br>• `ar-AE` (Emirati Arabic), `ar-SA` (Saudi Arabic) |
| tables › 第 4 项 › headers | 新增 | 未记录 | • Parameter<br>• Type<br>• Default<br>• Required<br>• Description |
| tables › 第 4 项 › heading | 新增 | 未记录 | Request Body |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • `file`<br>• file<br>• 空字符串<br>• ✓†<br>• Audio file to transcribe. Max **500 MB**. See [Supported Formats](#supported-audio-formats). Must be the last field in the multipart form. |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • `url`<br>• string<br>• 空字符串<br>• ✓†<br>• URL of an audio file to download and transcribe (server-side). |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • `model`<br>• string<br>• `grok-voice-transcribe-2.0`<br>• 空字符串<br>• `grok-voice-transcribe-2.0` (default). |
| tables › 第 4 项 › rows › 第 4 项 | 新增 | 未记录 | • `audio_format`<br>• string<br>• 空字符串<br>• 空字符串<br>• Format hint for raw/headerless audio: `pcm`, `mulaw`, `alaw`. Container formats are auto-detected — do not set this field for MP3, WAV, etc. |
| tables › 第 4 项 › rows › 第 5 项 | 新增 | 未记录 | • `sample_rate`<br>• integer<br>• 空字符串<br>• 空字符串<br>• Sample rate in Hz. Only required for raw audio (`pcm`, `mulaw`, `alaw`). Supported: `8000`, `16000`, `22050`, `24000`, `44100`, `48000`. |
| tables › 第 4 项 › rows › 第 6 项 | 新增 | 未记录 | • `language`<br>• string<br>• 空字符串<br>• 空字符串<br>• Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages). |
| tables › 第 4 项 › rows › 第 7 项 | 新增 | 未记录 | • `format`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, enables Inverse Text Normalization — converts spoken numbers/currency to written form (e.g. "one hundred dollars" → "$100"). Requires `language`. See [Supported Languages](#supported-languages) for coverage. |
| tables › 第 4 项 › rows › 第 8 项 | 新增 | 未记录 | • `multichannel`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, transcribes each audio channel independently. Results returned in the `channels` array. |
| tables › 第 4 项 › rows › 第 9 项 | 新增 | 未记录 | • `channels`<br>• integer<br>• 空字符串<br>• 空字符串<br>• Number of audio channels (2–8). Only required for multichannel raw audio. Auto-detected for container formats. |
| tables › 第 4 项 › rows › 第 10 项 | 新增 | 未记录 | • `diarize`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, enables speaker diarization. Each word in the response includes a `speaker` field (integer) identifying the detected speaker. |
| tables › 第 4 项 › rows › 第 11 项 | 新增 | 未记录 | • `keyterm`<br>• string<br>• 空字符串<br>• 空字符串<br>• A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters. |
| tables › 第 4 项 › rows › 第 12 项 | 新增 | 未记录 | • `filler_words`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, filler words (e.g. "uh", "um", "er") are included in the transcript. When `false` (default), filler words are automatically removed from the transcript text and the `words` array. |
| tables › 第 4 项 › rows › 第 13 项 | 新增 | 未记录 | • `vad_threshold`<br>• number<br>• `0.5`<br>• 空字符串<br>• Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio segments scoring below the threshold are treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate. |
| tables › 第 5 项 › headers | 新增 | 未记录 | • Field<br>• Type<br>• Description |
| tables › 第 5 项 › heading | 新增 | 未记录 | Response |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • `text`<br>• string<br>• Full transcript text. |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • `language`<br>• string<br>• Detected language as a BCP-47 code (e.g. `en`, `es-mx`). |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • `duration`<br>• number<br>• Audio duration in seconds (2 d.p.). |
| tables › 第 5 项 › rows › 第 4 项 | 新增 | 未记录 | • `words`<br>• array<br>• Word-level segments with `text`, `start`, `end`, and `speaker` (integer, only when `diarize=true`). |
| tables › 第 5 项 › rows › 第 5 项 | 新增 | 未记录 | • `channels`<br>• array<br>• Per-channel transcripts (only when `multichannel=true`). Each entry has `index`, `text`, and `words`. |
| tables › 第 6 项 › headers | 新增 | 未记录 | • Format<br>• Extension<br>• Description |
| tables › 第 6 项 › heading | 新增 | 未记录 | Container formats (auto-detected) |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • WAV<br>• `.wav`<br>• Waveform Audio — lossless, best quality input |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • MP3<br>• `.mp3`<br>• MPEG Audio Layer 3 — widely supported |
| tables › 第 6 项 › rows › 第 3 项 | 新增 | 未记录 | • OGG<br>• `.ogg`<br>• Ogg container — open format |
| tables › 第 6 项 › rows › 第 4 项 | 新增 | 未记录 | • Opus<br>• `.opus`<br>• Opus codec — low-latency, high quality |
| tables › 第 6 项 › rows › 第 5 项 | 新增 | 未记录 | • FLAC<br>• `.flac`<br>• Free Lossless Audio Codec — lossless compression |
| tables › 第 6 项 › rows › 第 6 项 | 新增 | 未记录 | • AAC<br>• `.aac`<br>• Advanced Audio Coding |
| tables › 第 6 项 › rows › 第 7 项 | 新增 | 未记录 | • MP4<br>• `.mp4`<br>• MPEG-4 container |
| tables › 第 6 项 › rows › 第 8 项 | 新增 | 未记录 | • M4A<br>• `.m4a`<br>• MPEG-4 Audio — Apple ecosystem standard |
| tables › 第 6 项 › rows › 第 9 项 | 新增 | 未记录 | • MKV<br>• `.mkv`<br>• Matroska container — supports MP3, AAC, and FLAC audio codecs |
| tables › 第 6 项 › rows › 第 10 项 | 新增 | 未记录 | • WebM<br>• `.webm`<br>• WebM container — typically Opus audio from browsers |
| tables › 第 6 项 › rows › 第 11 项 | 新增 | 未记录 | • AVI<br>• `.avi`<br>• Audio Video Interleave |
| tables › 第 6 项 › rows › 第 12 项 | 新增 | 未记录 | • MOV<br>• `.mov`<br>• QuickTime container |
| tables › 第 7 项 › headers | 新增 | 未记录 | • Format<br>• `audio_format` value<br>• Description |
| tables › 第 7 项 › heading | 新增 | 未记录 | Raw formats (require `audio_format` and `sample_rate`) |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • PCM<br>• `pcm`<br>• Signed 16-bit little-endian (2 bytes/sample) |
| tables › 第 7 项 › rows › 第 2 项 | 新增 | 未记录 | • µ-law<br>• `mulaw`<br>• G.711 µ-law (1 byte/sample) |
| tables › 第 7 项 › rows › 第 3 项 | 新增 | 未记录 | • A-law<br>• `alaw`<br>• G.711 A-law (1 byte/sample) |
| tables › 第 8 项 › headers | 新增 | 未记录 | • Parameter<br>• Type<br>• Default<br>• Description |
| tables › 第 8 项 › heading | 新增 | 未记录 | Query Parameters |
| tables › 第 8 项 › rows › 第 1 项 | 新增 | 未记录 | • `sample_rate`<br>• integer<br>• `16000`<br>• Audio sample rate in Hz. Ignored for `encoding=opus` — Opus packets are sample-rate-agnostic. |
| tables › 第 8 项 › rows › 第 2 项 | 新增 | 未记录 | • `encoding`<br>• string<br>• `pcm`<br>• Audio encoding: `pcm`, `mulaw`, `alaw`, or `opus`. See [Opus Streaming](#opus-streaming). |
| tables › 第 8 项 › rows › 第 3 项 | 新增 | 未记录 | • `interim_results`<br>• boolean<br>• `false`<br>• When `true`, emit partial transcripts `is_final=false` every ~500 ms. |
| tables › 第 8 项 › rows › 第 4 项 | 新增 | 未记录 | • `endpointing`<br>• integer<br>• `400`<br>• Silence duration (ms) before utterance-final event. Range: 0–5000. `0` = fire on any VAD silence boundary. |
| tables › 第 8 项 › rows › 第 5 项 | 新增 | 未记录 | • `language`<br>• string<br>• 空字符串<br>• Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages). |
| tables › 第 8 项 › rows › 第 6 项 | 新增 | 未记录 | • `format`<br>• boolean<br>• `false`<br>• When `true`, converts spoken numbers, currencies, and units to written form. Requires `language`. See [Supported Languages](#supported-languages) for coverage. |
| tables › 第 8 项 › rows › 第 7 项 | 新增 | 未记录 | • `model`<br>• string<br>• `grok-voice-transcribe-2.0`<br>• `grok-voice-transcribe-2.0` (default). |
| tables › 第 8 项 › rows › 第 8 项 | 新增 | 未记录 | • `diarize`<br>• boolean<br>• 空字符串<br>• When `true`, enables speaker diarization. Words include a `speaker` field identifying the detected speaker. |
| tables › 第 8 项 › rows › 第 9 项 | 新增 | 未记录 | • `filler_words`<br>• boolean<br>• `false`<br>• When `true`, filler words (e.g. `uh`, `um`, `er`) are included in the transcript. When `false` (default), filler words are automatically removed. |
| tables › 第 8 项 › rows › 第 10 项 | 新增 | 未记录 | • `multichannel`<br>• boolean<br>• `false`<br>• Per-channel transcription. Requires `channels` ≥ 2. Not supported with `encoding=opus`. |
| tables › 第 8 项 › rows › 第 11 项 | 新增 | 未记录 | • `channels`<br>• integer<br>• `1`<br>• Number of interleaved audio channels (max 8). |
| tables › 第 8 项 › rows › 第 12 项 | 新增 | 未记录 | • `keyterm`<br>• string<br>• 空字符串<br>• A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the parameter for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters. |
| tables › 第 8 项 › rows › 第 13 项 | 新增 | 未记录 | • `smart_turn`<br>• number<br>• 空字符串<br>• End-of-turn detection threshold (0.0–1.0). When set, enables Smart Turn — an ML model predicts whether the speaker has finished their thought at each silence boundary. See [Smart Turn](#smart-turn). |
| tables › 第 8 项 › rows › 第 14 项 | 新增 | 未记录 | • `smart_turn_timeout`<br>• integer<br>• 空字符串<br>• Maximum silence duration (ms) before forcing `speech_final`, even when the Smart Turn model predicts the speaker hasn't finished. Range: 1–5000. Only applies when `smart_turn` is enabled. See [Smart Turn](#smart-turn). |
| tables › 第 8 项 › rows › 第 15 项 | 新增 | 未记录 | • `vad_threshold`<br>• number<br>• `0.08`<br>• Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio in chunks scoring below the threshold is treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate. Does not affect endpointing or `speech_final` timing. |
| tables › 第 9 项 › headers | 新增 | 未记录 | • Event<br>• Description |
| tables › 第 9 项 › heading | 新增 | 未记录 | Server Events |
| tables › 第 9 项 › rows › 第 1 项 | 新增 | 未记录 | • `transcript.created`<br>• Server ready — wait for this before sending audio. |
| tables › 第 9 项 › rows › 第 2 项 | 新增 | 未记录 | • `transcript.partial`<br>• Transcript result with `text`, `words`, `is_final`, `speech_final`, `start`, `duration`. Includes `channel_index` when `multichannel=true`. Includes `end_of_turn_confidence` when `smart_turn` is enabled. |
| tables › 第 9 项 › rows › 第 3 项 | 新增 | 未记录 | • `transcript.done`<br>• Final transcript after `audio.done`. `duration` always present. Includes `channel_index` when `multichannel=true` — one event sent per channel. Connection closes after this. |
| tables › 第 9 项 › rows › 第 4 项 | 新增 | 未记录 | • `error`<br>• Error with `message` field. Most errors (including undecodable audio frames) close the connection; client message parse errors keep it open. |
| tables › 第 10 项 › headers | 新增 | 未记录 | • `is_final`<br>• `speech_final`<br>• Meaning |
| tables › 第 10 项 › heading | 新增 | 未记录 | Server Events |
| tables › 第 10 项 › rows › 第 1 项 | 新增 | 未记录 | • `false`<br>• `false`<br>• **Interim** — text may change (only when `interim_results=true`) |
| tables › 第 10 项 › rows › 第 2 项 | 新增 | 未记录 | • `true`<br>• `false`<br>• **Chunk final** — text locked, ~3s of speech finalized. When `smart_turn` is enabled, silence pauses where the model's confidence is below the threshold are demoted to chunk final instead of utterance final. |
| tables › 第 10 项 › rows › 第 3 项 | 新增 | 未记录 | • `true`<br>• `true`<br>• **Utterance final** — speaker stopped, complete stitched utterance. When `smart_turn` is enabled, only fires when the model's end-of-turn confidence exceeds the threshold, or when `smart_turn_timeout` is exceeded. |
| tables › 第 11 项 › headers | 新增 | 未记录 | • Threshold<br>• Behavior |
| tables › 第 11 项 › heading | 新增 | 未记录 | Smart Turn |
| tables › 第 11 项 › rows › 第 1 项 | 新增 | 未记录 | • `0.5`<br>• Balanced — catches most natural turn endings |
| tables › 第 11 项 › rows › 第 2 项 | 新增 | 未记录 | • `0.7`<br>• Conservative — requires higher confidence to end a turn, better for dictation and number sequences |
| tables › 第 11 项 › rows › 第 3 项 | 新增 | 未记录 | • `0.9`<br>• Very conservative — only ends on highly confident turn completions |
| tables › 第 12 项 › headers | 新增 | 未记录 | • Status<br>• Meaning<br>• Action |
| tables › 第 12 项 › heading | 新增 | 未记录 | Error Handling |
| tables › 第 12 项 › rows › 第 1 项 | 新增 | 未记录 | • `200`<br>• Success<br>• Transcription in the response body |
| tables › 第 12 项 › rows › 第 2 项 | 新增 | 未记录 | • `400`<br>• Bad request<br>• Missing `file`/`url`, unsupported format, missing `sample_rate` for raw audio, `format=true` without `language` |
| tables › 第 12 项 › rows › 第 3 项 | 新增 | 未记录 | • `401`<br>• Unauthorized<br>• API key is missing or invalid |
| tables › 第 12 项 › rows › 第 4 项 | 新增 | 未记录 | • `413`<br>• Payload too large<br>• File exceeds 500 MB |
| tables › 第 12 项 › rows › 第 5 项 | 新增 | 未记录 | • `429`<br>• Rate limited<br>• Back off and retry with exponential delay |
| tables › 第 12 项 › rows › 第 6 项 | 新增 | 未记录 | • `502`<br>• Bad gateway<br>• URL download failed (when using `url`) |
| tables › 第 12 项 › rows › 第 7 项 | 新增 | 未记录 | • `503`<br>• Service unavailable<br>• Backend not available — retry |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-speech-to-text

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-voice-transcribe-2.0<br>• voice-api-pricing |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | xai-speech-to-text |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-subscription-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | #### Plans and usage<br># Pricing<br>The X Subscription brings together Grok, Cursor, and X. Free includes standard X. Paid individual plans include X Premium benefits when you connect your X account.<br>New self-serve customers choose from The X Subscription plans. Existing Cursor, SuperGrok, and X Premium plans continue. Switching is optional.<br>## The X Subscription prices<br>List prices for The X Subscription:<br>&#124; Plan &#124; Monthly &#124; Annual &#124; Included usage &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; Free &#124; $0 &#124; $0 &#124; Limited &#124;<br>&#124; Plus &#124; $8/mo &#124; $80/yr ($7/mo) &#124; Base &#124;<br>&#124; Premium &#124; $30/mo &#124; $300/yr ($25/mo) &#124; 4x &#124;<br>&#124; Super &#124; $100/mo &#124; $1000/yr ($84/mo) &#124; 15x &#124;<br>&#124; Ultra &#124; $200/mo &#124; $2000/yr ($167/mo) &#124; 50x &#124;<br>For current prices, included usage, and terms, see [x.ai/pricing](https://x.ai/pricing).<br>**Grok Bot** is included on **Premium, Super, and Ultra.** Plus does not include Grok Bot. Bot usage draws from that seat’s shared weekly usage pool, not a separate additive pool. Details: [Grok Bot on The X Subscription](/x-subscription/grok-bot) and [Usage limits](/x-subscription/usage-limits).<br>The shared included usage pool covers Grok Bot usage, and Grok models across Grok and Cursor. Top-ups buy Additional Usage credits for usage beyond what's included. Third-party models in Cursor aren't part of the included usage, so they use these credits from the first use.<br>List prices do not include sales tax. Where required, tax may be added at checkout.<br>## The X Subscription for Teams<br>Team plans are available on Premium at **$30 per seat**, Super at **$100 per seat**, and Ultra at **$200 per seat**. Each seat includes the same usage as the matching individual tier. Team members can also get X benefits from their seat when they connect their X account.<br>Members of the same team can use different seat tiers, for example, three Premium seats and one Super seat. Team plans include centralized billing and administration, usage analytics, and the option to mix seat tiers. Plus isn't available for teams.<br>## Existing plans<br>Existing Cursor, SuperGrok, and X Premium plans continue unless you change or cancel them. See [Do I have to switch?](/x-subscription/do-i-have-to-switch)<br>## When you switch<br>When you switch, eligible monthly and annual plans are cancelled, and you get a prorated refund for unused time. The refund goes back to your original payment method separately from your checkout total, so your new plan is charged at full price. Refunds can take a few days to appear, depending on your bank. The X Subscription starts immediately.<br>If you pay for Cursor through the Apple App Store, switching doesn't cancel that subscription, and we can't refund it. Cancel it in your iPhone or iPad Settings so Apple stops billing you, and request any refund from Apple.<br>Google Play treatment is covered separately in [Google Play subscriptions](/x-subscription/google-play).<br>## Related<br>* [What is The X Subscription?](/x-subscription/overview)<br>* [How to unify accounts under The X Subscription](/x-subscription/unify-accounts)<br>* [Usage limits](/x-subscription/usage-limits)<br>* [Invoices &amp; Refunds](/x-subscription/invoices-and-refunds)<br>* [Team plans: workspaces, seats, and invites](/x-subscription/team-plans) |
| extraction | 新增 | 未记录 | markdown |
| model id mentions | 新增 | 未记录 | • grok-bot |
| plan or price mentions | 新增 | 未记录 | 列表（22 项）<details><summary>展开完整内容</summary><ul><li>The X Subscription brings together Grok, Cursor, and X. Free includes standard X. Paid individual plans include X Premium benefits when you connect your X account.</li><li>New self-serve customers choose from The X Subscription plans. Existing Cursor, SuperGrok, and X Premium plans continue. Switching is optional.</li><li>## The X Subscription prices</li><li>List prices for The X Subscription:</li><li>&#124; Plan &#124; Monthly &#124; Annual &#124; Included usage &#124;</li><li>&#124; Free &#124; $0 &#124; $0 &#124; Limited &#124;</li><li>&#124; Plus &#124; $8/mo &#124; $80/yr ($7/mo) &#124; Base &#124;</li><li>&#124; Premium &#124; $30/mo &#124; $300/yr ($25/mo) &#124; 4x &#124;</li><li>&#124; Super &#124; $100/mo &#124; $1000/yr ($84/mo) &#124; 15x &#124;</li><li>&#124; Ultra &#124; $200/mo &#124; $2000/yr ($167/mo) &#124; 50x &#124;</li><li>**Grok Bot** is included on **Premium, Super, and Ultra.** Plus does not include Grok Bot. Bot usage draws from that seat’s shared weekly usage pool, not a separate additive pool. Details: [Grok Bot on The X Subscription](/x-subscription/grok-bot) and [Usage limits](/x-subscription/usage-limits).</li><li>## The X Subscription for Teams</li><li>Team plans are available on Premium at **$30 per seat**, Super at **$100 per seat**, and Ultra at **$200 per seat**. Each seat includes the same usage as the matching individual tier. Team members can also get X benefits from their seat when they connect their X account.</li><li>Existing Cursor, SuperGrok, and X Premium plans continue unless you change or cancel them. See [Do I have to switch?](/x-subscription/do-i-have-to-switch)</li><li>When you switch, eligible monthly and annual plans are cancelled, and you get a prorated refund for unused time. The refund goes back to your original payment method separately from your checkout total, so your new plan is charged at full price. Refunds can take a few days to appear, depending on your bank. The X Subscription starts immediately.</li><li>If you pay for Cursor through the Apple App Store, switching doesn't cancel that subscription, and we can't refund it. Cancel it in your iPhone or iPad Settings so Apple stops billing you, and request any refund from Apple.</li><li>Google Play treatment is covered separately in [Google Play subscriptions](/x-subscription/google-play).</li><li>* [What is The X Subscription?](/x-subscription/overview)</li><li>* [How to unify accounts under The X Subscription](/x-subscription/unify-accounts)</li><li>* [Usage limits](/x-subscription/usage-limits)</li><li>* [Invoices &amp; Refunds](/x-subscription/invoices-and-refunds)</li><li>* [Team plans: workspaces, seats, and invites](/x-subscription/team-plans)</li></ul></details> |
| scope | 新增 | 未记录 | plan |
| source ref | 新增 | 未记录 | xai-subscription-pricing |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 The X Subscription prices › headers | 新增 | 未记录 | • Plan<br>• Monthly<br>• Annual<br>• Included usage |
| tables › 记录 The X Subscription prices › heading | 新增 | 未记录 | The X Subscription prices |
| tables › 记录 The X Subscription prices › rows › 记录 Free | 新增 | 未记录 | • Free<br>• $0<br>• $0<br>• Limited |
| tables › 记录 The X Subscription prices › rows › 记录 Plus | 新增 | 未记录 | • Plus<br>• $8/mo<br>• $80/yr ($7/mo)<br>• Base |
| tables › 记录 The X Subscription prices › rows › 记录 Premium | 新增 | 未记录 | • Premium<br>• $30/mo<br>• $300/yr ($25/mo)<br>• 4x |
| tables › 记录 The X Subscription prices › rows › 记录 Super | 新增 | 未记录 | • Super<br>• $100/mo<br>• $1000/yr ($84/mo)<br>• 15x |
| tables › 记录 The X Subscription prices › rows › 记录 Ultra | 新增 | 未记录 | • Ultra<br>• $200/mo<br>• $2000/yr ($167/mo)<br>• 50x |
| title | 新增 | 未记录 | Pricing |

#### 来源 / xai-text-to-speech

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>curl -X POST https://api.x.ai/v1/tts \</li><li>"https://api.x.ai/v1/tts",</li><li>const response = await fetch("https://api.x.ai/v1/tts", {</li><li>let url = URL(string: "https://api.x.ai/v1/tts")!</li><li># or the GET /v1/custom-voices endpoint.</li><li>curl -s https://api.x.ai/v1/tts/voices \</li><li>"https://api.x.ai/v1/tts/voices",</li><li>const response = await fetch("https://api.x.ai/v1/tts/voices", {</li><li>let url = URL(string: "https://api.x.ai/v1/tts/voices")!</li><li>const whisperResponse = await fetch("https://api.x.ai/v1/tts", {</li><li>var request = URLRequest(url: URL(string: "https://api.x.ai/v1/tts")!)</li><li>&#124; `404` &#124; Not found &#124; Unknown `voice_id` — verify via `GET /v1/tts/voices` (built-in) or `GET /v1/custom-voices` (custom) &#124;</li><li>GET /v1/tts?language=en&amp;voice=eve&amp;codec=mp3&amp;sample_rate=24000&amp;bit_rate=128000</li><li>uri = f"wss://api.x.ai/v1/tts?language={language}&amp;voice={voice}&amp;codec={codec}"</li><li>const uri = `wss://api.x.ai/v1/tts?language=${language}&amp;voice=${voice}&amp;codec=${codec}`;</li><li>let url = URL(string: "wss://api.x.ai/v1/tts?language=\(language)&amp;voice=\(voice)&amp;codec=\(codec)")!</li><li>const uri = `wss://api.x.ai/v1/tts?language=en&amp;voice=eve&amp;codec=mp3`;</li><li>let url = URL(string: "wss://api.x.ai/v1/tts?language=en&amp;voice=eve&amp;codec=mp3")!</li></ul></details> |
| capability mentions | 新增 | 未记录 | 列表（120 项）<details><summary>展开完整内容</summary><ul><li># Text to Speech</li><li>Convert text into spoken audio with a single API call. The API supports a rich set of expressive voices, inline speech tags for fine-grained delivery control, and output formats from high-fidelity MP3 to telephony-optimized μ-law.</li><li>Generate speech with a single API call:</li><li>"text": "Hello! Welcome to the SpaceXSI Text to Speech API.",</li><li>text: "Hello! Welcome to the SpaceXSI Text to Speech API.",</li><li>The response body contains raw audio bytes. Save directly to a file or pipe to an audio player.</li><li>[Try the Playground →](https://console.x.ai/team/default/voice/text-to-speech?campaign=voice-docs-tts\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-text-to-speech\&amp;utm_content=text-to-speech)</li><li>[Get API Key](https://console.x.ai/team/default/api-keys?campaign=voice-docs-tts\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-text-to-speech\&amp;utm_content=api-keys)</li><li>&#124; `text` &#124; string &#124; ✓ &#124; The text to convert to speech. Maximum **60,000 characters**. Supports [speech tags](#speech-tags). &#124;</li><li>&#124; `speed` &#124; number &#124; &#124; Speech speed multiplier. `1.0` is normal speed. Values below `1.0` slow down speech, values above `1.0` speed it up. Range: `0.7` to `1.5`. Defaults to `1.0`. &#124;</li><li>&#124; `optimize_streaming_latency` &#124; integer &#124; &#124; Latency optimization level for streaming synthesis. `0` (default): No optimization — best audio quality. `1`: Reduced first-chunk size for lower time-to-first-audio, with minor quality tradeoff at chunk boundaries. `2`: Further reduced first-chunk size for lowest time-to-first-audio, with more noticeable quality tradeoff at chunk boundaries. &#124;</li><li>&#124; `text_normalization` &#124; boolean &#124; &#124; Enable text normalization before synthesis. When `true`, the model normalizes written-form text (e.g. numbers, abbreviations, symbols) into spoken-form before generating audio. Defaults to `false`. &#124;</li><li>&#124; `with_timestamps` &#124; boolean &#124; &#124; Return character-level timing metadata alongside the audio. When `true`, the response is a JSON envelope containing base64-encoded audio plus per-character start/end times. Adds latency for the post-synthesis alignment pass. Defaults to `false`. See [Character-level timestamps](#character-level-timestamps). &#124;</li><li>"text": "Hello! This is a high-fidelity text to speech example.",</li><li>Voice IDs are **case-insensitive** - `eve`, `Eve`, and `EVE` all work. [Preview all voices in the playground →](https://console.x.ai/team/default/voice/text-to-speech?campaign=voice-docs-tts\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-text-to-speech\&amp;utm_content=text-to-speech)</li><li>Clone any voice from a short reference clip with the [Custom Voices API](/developers/model-capabilities/audio/custom-voices), or create one for free in the [console](https://console.x.ai/team/default/voice/voice-library?campaign=voice-docs-tts\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-text-to-speech\&amp;utm_content=voice-library). To find your custom voice ID in the console, click the three-dot menu on the voice card and select **Copy Voice ID**. Then p</li><li>You can also list voices programmatically with the [Text to speech - List voices](/developers/rest-api-reference/inference/voice#text-to-speech---list-voices) endpoint:</li><li>The model is also capable of generating speech in additional languages beyond those listed above, with varying degrees of accuracy.</li><li>## Speech Tags</li><li>Add inline speech tags to your text for expressive delivery. There are two types of tags:</li><li>**Tips for speech tags:**</li><li>Control the audio codec, sample rate, and bit rate with the `output_format` object. When omitted, the default is **MP3 at 24 kHz / 128 kbps**.</li><li>&#124; `mp3` &#124; `audio/mpeg` &#124; General use - wide compatibility, good compression &#124;</li><li>&#124; `wav` &#124; `audio/wav` &#124; Lossless audio - editing, post-production &#124;</li><li>&#124; `pcm` &#124; `audio/pcm` &#124; Raw audio - real-time processing pipelines &#124;</li><li>&#124; `mulaw` &#124; `audio/basic` &#124; Telephony (G.711 μ-law) &#124;</li><li>&#124; `alaw` &#124; `audio/alaw` &#124; Telephony (G.711 A-law) &#124;</li><li>&#124; `16000` &#124; Wideband - speech recognition &#124;</li><li>&#124; `48000` &#124; Professional - studio-grade audio &#124;</li><li>&#124; `64000` &#124; Medium - good for speech &#124;</li><li>"text": "Crystal clear audio at maximum quality.",</li><li>The response then changes from raw audio bytes to a JSON envelope (`Content-Type: application/json`) carrying the base64-encoded audio plus the character timings.</li><li>Add the flag to a normal request. The audio comes back inside the JSON body, not as raw bytes:</li><li># The audio is base64-encoded — decode it exactly like a normal response</li><li>f.write(base64.b64decode(payload["audio"]))</li><li>ts = payload["audio_timestamps"]</li><li>// The audio is base64-encoded — decode it exactly like a normal response</li><li>fs.writeFileSync("hello.mp3", Buffer.from(payload.audio, "base64"));</li><li>const { graph_chars, graph_times } = payload.audio_timestamps;</li><li>let audio: String</li><li>let audioTimestamps: AudioTimestamps?</li><li>struct AudioTimestamps: Decodable {</li><li>try Data(base64Encoded: payload.audio)!.write(to: URL(fileURLWithPath: "hello.mp3"))</li><li>if let ts = payload.audioTimestamps {</li><li>"audio": " ",</li><li>"content_type": "audio/mpeg",</li><li>"audio_timestamps": {</li><li>&#124; `audio` &#124; string &#124; Base64-encoded audio in the requested codec. Decode and play like a normal response. &#124;</li><li>&#124; `content_type` &#124; string &#124; MIME type of the decoded audio (e.g. `audio/mpeg`, `audio/wav`). &#124;</li><li>&#124; `duration` &#124; number &#124; Total audio duration in seconds. &#124;</li><li>&#124; `audio_timestamps.graph_chars` &#124; string\[] &#124; Each input character, in order, including spaces, punctuation, and speech tags. &#124;</li><li>&#124; `audio_timestamps.graph_times` &#124; number\[]\[] &#124; Parallel array of `[start, end]` pairs in seconds. &#124;</li><li>`graph_chars` mirrors your input one-for-one, including spaces, punctuation, and speech tags. When one written token is spoken as several words, its timing is assigned to the first character. The rest of the characters interpolate within that same time span.</li><li>Use `replace` to fix how specific words or phrases are pronounced. Each key is matched in your text and swapped for its replacement value **before** synthesis, so only the audio changes — you keep sending your original text, and you are billed on it.</li><li>This is useful for brand names, acronyms, and domain terms. Mapping `"Acme Mobile"` to `"Acme Mobull"` makes the audio say it correctly while your request body still reads "Acme Mobile".</li><li>The map is validated before any audio is generated, so a broken rule fails the request rather than silently dropping an entry:</li><li>The same `replace` map is available on the [Speech to Speech API](/developers/model-capabilities/audio/speech-to-speech#pronunciation-replacements) and on the [WebSocket endpoint](#session-configuration).</li><li>* **Keep unary requests under 60,000 characters.** For longer content, use the [bidirectional WebSocket endpoint](#streaming-tts-websocket) which has no text length limit, or split into logical segments (by paragraph or sentence) and concatenate the audio output.</li><li>The [Cloud Console playground](https://console.x.ai/team/default/voice/text-to-speech?campaign=voice-docs-tts\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-text-to-speech\&amp;utm_content=text-to-speech) includes ready-made **agent instructions** you can copy and paste into tools like Cursor, GitHub Copilot, or Windsurf. The instructions are pre-configured with your current voice and format settings - open the playground, tweak your settings, and copy the pr</li><li>* **Cache generated audio.** If the same text is requested repeatedly, cache the audio bytes to save API calls and reduce latency.</li><li>To play TTS audio in the browser, proxy the request through your backend and use the Web Audio API or an ` ` element:</li><li>const audio = new Audio(url);</li><li>audio.addEventListener("ended", () =&gt; URL.revokeObjectURL(url));</li><li>await audio.play();</li><li>**Safari returns `Infinity` for `audio.duration` on blob URLs.** The `loadedmetadata` event fires but `audio.duration` is `Infinity`, breaking seek bars and time displays. Use `AudioContext.decodeAudioData()` instead:</li><li>async function getAudioDuration(arrayBuffer) {</li><li>const AudioCtx = window.AudioContext &#124;&#124; window.webkitAudioContext;</li><li>const ctx = new AudioCtx();</li><li>// Clone the buffer - decodeAudioData detaches the original</li><li>const decoded = await ctx.decodeAudioData(arrayBuffer.slice(0));</li><li>**`AudioContext` must be created during a user gesture on Safari.** Safari permanently suspends an `AudioContext` created outside a click/tap handler, with no way to resume it. Chrome is more lenient. Always create or resume the context in your button's click handler, before any `await`:</li><li>// Create the AudioContext once, in a click handler</li><li>let audioCtx;</li><li>if (!audioCtx) audioCtx = new AudioContext();</li><li>if (audioCtx.state === "suspended") await audioCtx.resume();</li><li>// Now it's safe to fetch and play audio asynchronously</li><li>const decoded = await audioCtx.decodeAudioData(arrayBuffer);</li><li>const source = audioCtx.createBufferSource();</li><li>source.connect(audioCtx.destination);</li><li>**Raw codecs (pcm, mulaw, alaw) are not playable in the browser.** `AudioContext.decodeAudioData()` and ` ` elements only support container formats like MP3 and WAV. Use `mp3` or `wav` for browser playback. If you're working with raw formats server-side (e.g., piping to telephony), estimate duration from byte count:</li><li>a.download = "speech.mp3";</li><li>&#124; `200` &#124; Success &#124; Audio bytes in the response body &#124;</li><li>def generate_speech(text, language="en", voice_id="eve", max_retries=3):</li><li>async function generateSpeech(text, language = "en", voiceId = "eve", maxRetries = 3) {</li><li>func generateSpeech(text: String, language: String = "en", voiceId: String = "eve", maxRetries: Int = 3) async throws -&gt; Data {</li><li>Open a WebSocket connection with query parameters to configure language, voice, and audio format:</li><li>&#124; `voice` &#124; &#124; &#124; Any built-in voice ID (see [Voices](#voices)) or a [custom voice ID](/developers/model-capabilities/audio/custom-voices) &#124;</li><li>&#124; `speed` &#124; &#124; `1.0` &#124; Speech speed multiplier (`0.7` to `1.5`) &#124;</li><li>&#124; `optimize_streaming_latency` &#124; &#124; `0` &#124; `0` (off, best quality), `1` (moderate, lower time-to-first-audio), `2` (aggressive, lowest time-to-first-audio) &#124;</li><li>&#124; `with_timestamps` &#124; &#124; `false` &#124; `true`, `false`. When `true`, each `audio.delta` carries `audio_timestamps` and `audio_duration` for the characters in that chunk. &#124;</li><li>&#124; `text.done` &#124; Signals the end of the current utterance. The server will finish generating audio and send `audio.done`. &#124;</li><li>&#124; `text.clear` &#124; Cancel the current utterance. The server stops generating audio, discards any buffered data, and responds with `audio.clear`. &#124;</li><li>The server responds with base64-encoded audio chunks and a completion event:</li><li>{"type": "audio.delta", "delta": " "}</li><li>{"type": "audio.done", "trace_id": "uuid"}</li><li>{"type": "audio.clear"}</li><li>&#124; `audio.delta` &#124; A chunk of base64-encoded audio in the codec specified at connection time. Decode and enqueue for playback. When the connection was opened with `with_timestamps=true`, also carries `audio_timestamps` (`graph_chars` + `graph_times`) and `audio_duration` for the characters in that chunk. See [Character-level timestamps](#character-level-timestamps). &#124;</li><li>&#124; `audio.done` &#124; All audio for the current utterance has been sent. Includes a `trace_id` for debugging. &#124;</li><li>&#124; `audio.clear` &#124; Confirms that the current utterance was cancelled in response to `text.clear`. The connection is ready for the next utterance. &#124;</li><li>The connection stays open after `audio.done`. You can immediately send another round of `text.delta` → `text.done` messages to synthesize additional text without reconnecting. This is useful for conversational UIs where you generate audio for each assistant response in sequence.</li><li>2. Server responds with `audio.delta` chunks → `audio.done`</li><li>5. Server responds with `audio.delta` chunks → `audio.done`</li><li>Each `text.done` flushes the accumulated text to generate audio. Once you receive `audio.done`, you can send more text for the next turn. The audio from each turn is independent — content from turn 1 does not bleed into turn 2.</li><li>turn1_audio = bytearray()</li><li>if event["type"] == "audio.delta":</li><li>turn1_audio.extend(base64.b64decode(event["delta"]))</li><li>elif event["type"] == "audio.done":</li><li>print(f"Turn 1: {len(turn1_audio):,} bytes")</li><li>turn2_audio = bytearray()</li><li>turn2_audio.extend(base64.b64decode(event["delta"]))</li><li>print(f"Turn 2: {len(turn2_audio):,} bytes")</li><li>let audioChunks = [];</li><li>if (event.type === "audio.delta") {</li><li>audioChunks.push(Buffer.from(event.delta, "base64"));</li><li>} else if (event.type === "audio.done") {</li><li>const audio = Buffer.concat(audioChunks);</li><li>console.log(`Turn ${turn}: ${audio.length.toLocaleString()} bytes`);</li><li>audioChunks = [];</li><li>var turn1Audio = Data()</li><li>if type == "audio.delta", let delta = json["delta"] as? String,</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Model Capabilities<br># Text to Speech<br>Convert text into spoken audio with a single API call. The API supports a rich set of expressive voices, inline speech tags for fine-grained delivery control, and output formats from high-fidelity MP3 to telephony-optimized μ-law.<br>## Quick Start<br>Generate speech with a single API call:<br>```bash<br>curl -X POST https://api.x.ai/v1/tts \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-H "Content-Type: application/json" \<br>-d '{<br>"text": "Hello! Welcome to the SpaceXSI Text to Speech API.",<br>"voice_id": "eve",<br>"language": "en"<br>}' \<br>--output hello.mp3<br>```<br>```python customLanguage="pythonWithoutSDK"<br>import os<br>import requests<br>response = requests.post(<br>"https://api.x.ai/v1/tts",<br>headers={<br>"Authorization": f"Bearer {os.environ['XAI_API_KEY']}",<br>"Content-Type": "application/json",<br>},<br>json={<br>"text": "Hello! Welcome to the SpaceXSI Text to Speech API.",<br>"voice_id": "eve",<br>"language": "en",<br>},<br>)<br>response.raise_for_status()<br>with open("hello.mp3", "wb") as f:<br>f.write(response.content)<br>print(f"Saved {len(response.content):,} bytes to hello.mp3")<br>```<br>```javascript customLanguage="javascriptWithoutSDK"<br>import fs from "fs";<br>const response = await fetch("https://api.x.ai/v1/tts", {<br>method: "POST",<br>headers: {<br>Authorization: `Bearer ${process.env.XAI_API_KEY}`,<br>"Content-Type": "application/json",<br>},<br>body: JSON.stringify({<br>text: "Hello! Welcome to the SpaceXSI Text to Speech API.",<br>voice_id: "eve",<br>language: "en",<br>}),<br>});<br>if (!response.ok) throw new Error(`TTS error ${response.status}`);<br>const buffer = Buffer.from(await response.arrayBuffer());<br>fs.writeFileSync("hello.mp3", buffer);<br>console.log(`Saved ${buffer.length.toLocaleString()} bytes to hello.mp3`);<br>```<br>```swift<br>import Foundation<br>let apiKey = ProcessInfo.processInfo.environment["XAI_API_KEY"]!<br>let url = URL(string: "https://api.x.ai/v1/tts")!<br>var request = URLRequest(url: url)<br>request.httpMethod = "POST"<br>request.setValue("Bearer \(apiKey)", forHTTPHeaderField: "Authorization")<br>request.setValue("application/json", forHTTPHeaderField: "Content-Type")<br>request.httpBody = try JSONSerialization.data(withJSONObject: [<br>"text": "Hello! Welcome to the SpaceXSI Text to Speech API.",<br>"voice_id": "eve",<br>"language": "en",<br>])<br>let (data, _) = try await URLSession.shared.data(for: request)<br>let fileURL = URL(fileURLWithPath: "hello.mp3")<br>try data.write(to: fileURL)<br>print("Saved \(data.count) bytes to hello.mp3")<br>```<br>The response body contains raw audio bytes. Save directly to a file or pipe to an audio player.<br>[Try the Playground →](https://console.x.ai/team/default/voice/text-to-speech?campaign=voice-docs-tts\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-text-to-speech\&amp;utm_content=text-to-speech)<br>[Live Voice Demos](https://x.ai/api/voice)<br>[Get API Key](https://console.x.ai/team/default/api-keys?campaign=voice-docs-tts\&amp;utm_source=docs\&amp;utm_medium=referral\&amp;utm_campaign=developers-model-capabilities-audio-text-to-speech\&amp;utm_content=api-keys)<br>## Request Body<br>&#124; Parameter &#124; Type &#124; Required &#124; Description &#124;<br>&#124;-----------&#124;------&#124;----------&#124;-------------&#124;<br>&#124; `text` &#124; string &#124; ✓ &#124; The text to convert to speech. Maximum **60,000 characters**. Supports [speech tags](#speech-tags). &#124;<br>&#124; `voice_id` &#124; string &#124; &#124; Voice to use for synthesis. Defaults to `eve`. See [Voices](#voices). &#124;<br>&#124; `language` &#124; string &#124; ✓ &#124; BCP-47 language code (e.g. `en`, `zh`, `pt-BR`) or `auto` for automatic language detection. See [Supported Languages](#supported-languages). &#124;<br>&#124; `output_format` &#124; object &#124; &#124; Output format configuration. Defaults to MP3 at 24 kHz / 128 kbps. See [Output Formats](#output-formats). &#124;<br>&#124; `speed` &#124; number &#124; &#124; Speech speed multiplier. `1.0` is normal speed. Values below `1.0` slow down speech, values above `1.0` speed it up. Range: `0.7` to `1.5`. Defaults to `1.0`. &#124;<br>&#124; `optimize_streaming_latency` &#124; integer &#124; &#124; Latency optimization level for streaming synthesis. `0` (default): No optimization — best audio quality. `1`: Reduced first-chunk size for lower time-to-first-audio, with minor quality tradeoff at chunk boundaries. `2`: Further reduced first-chunk size for lowest time-to-first-audio, with more noticeable quality tradeoff at chunk boundaries. &#124;<br>&#124; `text_normalization` &#124; boolean &#124; &#124; Enable text normalization before synthesis. When `true`, the model normalizes written-form text (e.g. numbers, abbreviations, symbols) into spoken-form before generating audio. Defaults to `false`. &#124;<br>&#124; `with_timestamps` &#124; boolean &#124; &#124; Return character-level timing metadata alongside the audio. When `true`, the response is a JSON envelope containing base64-encoded audio plus per-character start/end times. Adds latency for the post-synthesis alignment pass. Defaults to `false`. See [Character-level timestamps](#character-level-timestamps). &#124;<br>&#124; `replace` &#124; object &#124; &#124; Map of phrases to spoken substitutions applied before synthesis. Values may be respellings (`{"Acme Mobile": "Acme Mobull"}`) or [IPA](#phonetic-pronunciations-with-ipa) phonetics (`{"nginx": "/ˈɛndʒɪn ˈɛks/"}`). See [Pronunciation Replacements](#pronunciation-replacements). &#124;<br>### Example with all options<br>```json<br>{<br>"text": "Hello! This is a high-fidelity text to speech example.",<br>"voice_id": "ara",<br>"language": "en",<br>"output_format": {<br>"codec": "mp3",<br>"sample_rate": 44100,<br>"bit_rate": 192000<br>}, |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • voice-docs-tts<br>• voice-library |
| plan or price mentions | 新增 | 未记录 | 列表（17 项）<details><summary>展开完整内容</summary><ul><li>-H "Authorization: Bearer $XAI_API_KEY" \</li><li>Authorization: `Bearer ${process.env.XAI_API_KEY}`,</li><li>if (!response.ok) throw new Error(`TTS error ${response.status}`);</li><li>console.log(`Saved ${buffer.length.toLocaleString()} bytes to hello.mp3`);</li><li>if (!response.ok) throw new Error(`TTS error ${response.status}: ${await response.text()}`);</li><li>-H "Authorization: Bearer $XAI_API_KEY"</li><li>headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },</li><li>voices.forEach((v) =&gt; console.log(`${v.voice_id} ${v.name}`));</li><li>console.log(`${JSON.stringify(char).padStart(5)} ${start.toFixed(2)}s – ${end.toFixed(2)}s`);</li><li>console.log(`duration: ${payload.duration.toFixed(2)}s`);</li><li>This mostly happens with [`text_normalization`](#request-body) enabled, which expands symbols and numbers into words. With normalization on, `$5` is spoken as "five dollars" but is still only two characters: the `$` gets the full span for "five dollars", and the `5` gets an interpolated time inside it. So always step through `graph_chars` in order rather than slicing the input text by index.</li><li>Authorization: `Bearer ${XAI_API_KEY}`,</li><li>throw new Error(`TTS error ${response.status}: ${await response.text()}`);</li><li>Authorization: Bearer $XAI_API_KEY</li><li>const uri = `wss://api.x.ai/v1/tts?language=${language}&amp;voice=${voice}&amp;codec=${codec}`;</li><li>headers: { Authorization: `Bearer ${apiKey}` },</li><li>console.log(`Turn ${turn}: ${audio.length.toLocaleString()} bytes`);</li></ul></details> |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-text-to-speech |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Bit Rates (MP3 only) › headers | 新增 | 未记录 | • Rate<br>• Quality |
| tables › 记录 Bit Rates (MP3 only) › heading | 新增 | 未记录 | Bit Rates (MP3 only) |
| tables › 记录 Bit Rates (MP3 only) › rows › 记录 `128000` | 新增 | 未记录 | • `128000`<br>• High - **default**, recommended |
| tables › 记录 Bit Rates (MP3 only) › rows › 记录 `192000` | 新增 | 未记录 | • `192000`<br>• Maximum - highest fidelity |
| tables › 记录 Bit Rates (MP3 only) › rows › 记录 `32000` | 新增 | 未记录 | • `32000`<br>• Low - smallest file size |
| tables › 记录 Bit Rates (MP3 only) › rows › 记录 `64000` | 新增 | 未记录 | • `64000`<br>• Medium - good for speech |
| tables › 记录 Bit Rates (MP3 only) › rows › 记录 `96000` | 新增 | 未记录 | • `96000`<br>• Standard - balanced |
| tables › 记录 Client → Server Messages › headers | 新增 | 未记录 | • Event<br>• Description |
| tables › 记录 Client → Server Messages › heading | 新增 | 未记录 | Client → Server Messages |
| tables › 记录 Client → Server Messages › rows › 记录 `session.update` | 新增 | 未记录 | • `session.update`<br>• Set or change the [`replace`](#session-configuration) map for the session. Accepted at any point; it takes effect on the next utterance to begin. |
| tables › 记录 Client → Server Messages › rows › 记录 `text.clear` | 新增 | 未记录 | • `text.clear`<br>• Cancel the current utterance. The server stops generating audio, discards any buffered data, and responds with `audio.clear`. |
| tables › 记录 Client → Server Messages › rows › 记录 `text.delta` | 新增 | 未记录 | • `text.delta`<br>• A chunk of text to synthesize. Individual deltas are capped at **60,000 characters**. |
| tables › 记录 Client → Server Messages › rows › 记录 `text.done` | 新增 | 未记录 | • `text.done`<br>• Signals the end of the current utterance. The server will finish generating audio and send `audio.done`. |
| tables › 记录 Codecs › headers | 新增 | 未记录 | • Codec<br>• Content-Type<br>• Best for |
| tables › 记录 Codecs › heading | 新增 | 未记录 | Codecs |
| tables › 记录 Codecs › rows › 记录 `alaw` | 新增 | 未记录 | • `alaw`<br>• `audio/alaw`<br>• Telephony (G.711 A-law) |
| tables › 记录 Codecs › rows › 记录 `mp3` | 新增 | 未记录 | • `mp3`<br>• `audio/mpeg`<br>• General use - wide compatibility, good compression |
| tables › 记录 Codecs › rows › 记录 `mulaw` | 新增 | 未记录 | • `mulaw`<br>• `audio/basic`<br>• Telephony (G.711 μ-law) |
| tables › 记录 Codecs › rows › 记录 `pcm` | 新增 | 未记录 | • `pcm`<br>• `audio/pcm`<br>• Raw audio - real-time processing pipelines |
| tables › 记录 Codecs › rows › 记录 `wav` | 新增 | 未记录 | • `wav`<br>• `audio/wav`<br>• Lossless audio - editing, post-production |
| tables › 记录 Connection › headers | 新增 | 未记录 | • Parameter<br>• Required<br>• Default<br>• Accepted values |
| tables › 记录 Connection › heading | 新增 | 未记录 | Connection |
| tables › 记录 Connection › rows › 记录 `bit_rate` | 新增 | 未记录 | • `bit_rate`<br>• 空字符串<br>• `128000`<br>• `32000`, `64000`, `96000`, `128000`, `192000` (MP3 only) |
| tables › 记录 Connection › rows › 记录 `codec` | 新增 | 未记录 | • `codec`<br>• 空字符串<br>• `mp3`<br>• `mp3`, `wav`, `pcm`, `mulaw` (or `ulaw`), `alaw` |
| tables › 记录 Connection › rows › 记录 `language` | 新增 | 未记录 | • `language`<br>• ✓<br>• 空字符串<br>• `auto` or BCP-47 codes (e.g. `en`, `zh`, `pt-BR`). See [Supported Languages](#supported-languages). |
| tables › 记录 Connection › rows › 记录 `optimize_streaming_latency` | 新增 | 未记录 | • `optimize_streaming_latency`<br>• 空字符串<br>• `0`<br>• `0` (off, best quality), `1` (moderate, lower time-to-first-audio), `2` (aggressive, lowest time-to-first-audio) |
| tables › 记录 Connection › rows › 记录 `sample_rate` | 新增 | 未记录 | • `sample_rate`<br>• 空字符串<br>• `24000`<br>• `8000`, `16000`, `22050`, `24000`, `44100`, `48000` |
| tables › 记录 Connection › rows › 记录 `speed` | 新增 | 未记录 | • `speed`<br>• 空字符串<br>• `1.0`<br>• Speech speed multiplier (`0.7` to `1.5`) |
| tables › 记录 Connection › rows › 记录 `text_normalization` | 新增 | 未记录 | • `text_normalization`<br>• 空字符串<br>• `false`<br>• `true`, `false` |
| tables › 记录 Connection › rows › 记录 `voice` | 新增 | 未记录 | • `voice`<br>• 空字符串<br>• 空字符串<br>• Any built-in voice ID (see [Voices](#voices)) or a [custom voice ID](/developers/model-capabilities/audio/custom-voices) |
| tables › 记录 Connection › rows › 记录 `with_timestamps` | 新增 | 未记录 | • `with_timestamps`<br>• 空字符串<br>• `false`<br>• `true`, `false`. When `true`, each `audio.delta` carries `audio_timestamps` and `audio_duration` for the characters in that chunk. |
| tables › 记录 Error Handling › headers | 新增 | 未记录 | • Status<br>• Meaning<br>• Action |
| tables › 记录 Error Handling › heading | 新增 | 未记录 | Error Handling |
| tables › 记录 Error Handling › rows › 记录 `200` | 新增 | 未记录 | • `200`<br>• Success<br>• Audio bytes in the response body |
| tables › 记录 Error Handling › rows › 记录 `400` | 新增 | 未记录 | • `400`<br>• Bad request<br>• Check: text is non-empty, under 60,000 chars; codec and sample rate are valid |
| tables › 记录 Error Handling › rows › 记录 `401` | 新增 | 未记录 | • `401`<br>• Unauthorized<br>• API key is missing or invalid |
| tables › 记录 Error Handling › rows › 记录 `404` | 新增 | 未记录 | • `404`<br>• Not found<br>• Unknown `voice_id` — verify via `GET /v1/tts/voices` (built-in) or `GET /v1/custom-voices` (custom) |
| tables › 记录 Error Handling › rows › 记录 `429` | 新增 | 未记录 | • `429`<br>• Rate limited<br>• Back off and retry with exponential delay |
| tables › 记录 Error Handling › rows › 记录 `500` | 新增 | 未记录 | • `500`<br>• Server error<br>• Retry with exponential backoff |
| tables › 记录 Error Handling › rows › 记录 `503` | 新增 | 未记录 | • `503`<br>• Service unavailable<br>• TTS service is temporarily unavailable - retry |
| tables › 记录 Inline Tags › headers | 新增 | 未记录 | • Category<br>• Tags |
| tables › 记录 Inline Tags › heading | 新增 | 未记录 | Inline Tags |
| tables › 记录 Inline Tags › rows › 记录 **Breathing** | 新增 | 未记录 | • **Breathing**<br>• 空字符串 |
| tables › 记录 Inline Tags › rows › 记录 **Laughter &amp; crying** | 新增 | 未记录 | • **Laughter &amp; crying**<br>• 空字符串 |
| tables › 记录 Inline Tags › rows › 记录 **Mouth sounds** | 新增 | 未记录 | • **Mouth sounds**<br>• 空字符串 |
| tables › 记录 Inline Tags › rows › 记录 **Pauses** | 新增 | 未记录 | • **Pauses**<br>• 空字符串 |
| tables › 记录 Limits and Behavior › headers | 新增 | 未记录 | • Property<br>• Value |
| tables › 记录 Limits and Behavior › heading | 新增 | 未记录 | Limits and Behavior |
| tables › 记录 Limits and Behavior › rows › 记录 **Billing** | 新增 | 未记录 | • **Billing**<br>• Recorded per session based on total input characters |
| tables › 记录 Limits and Behavior › rows › 记录 **Concurrent sessions** | 新增 | 未记录 | • **Concurrent sessions**<br>• 50 per team |
| tables › 记录 Limits and Behavior › rows › 记录 **Delta size** | 新增 | 未记录 | • **Delta size**<br>• Individual `text.delta` messages capped at 60,000 characters |
| tables › 记录 Limits and Behavior › rows › 记录 **Moderation** | 新增 | 未记录 | • **Moderation**<br>• Runs asynchronously on accumulated text after audio is sent (fail-open) |
| tables › 记录 Limits and Behavior › rows › 记录 **Session permit TTL** | 新增 | 未记录 | • **Session permit TTL**<br>• 600 seconds |
| tables › 记录 Limits and Behavior › rows › 记录 **Total text length** | 新增 | 未记录 | • **Total text length**<br>• No limit — send as many `text.delta` messages as needed |
| tables › 记录 Limits and Behavior › rows › 记录 **[`replace`](#map-limits) expansion** | 新增 | 未记录 | • **[`replace`](#map-limits) expansion**<br>• An utterance whose text exceeds 240,000 characters after substitution ends the session |
| tables › 记录 Limits › headers | 新增 | 未记录 | • 空字符串<br>• Unary &amp; server-streamed (`POST /v1/tts`)<br>• Bidirectional WebSocket (`wss://api.x.ai/v1/tts`) |
| tables › 记录 Limits › heading | 新增 | 未记录 | Limits |
| tables › 记录 Limits › rows › 记录 **Concurrent sessions** | 新增 | 未记录 | • **Concurrent sessions**<br>• —<br>• 50 per team |
| tables › 记录 Limits › rows › 记录 **Max text length** | 新增 | 未记录 | • **Max text length**<br>• 60,000 characters per request<br>• No limit — individual `text.delta` messages capped at 60,000 characters each |
| tables › 记录 Limits › rows › 记录 **Request timeout** | 新增 | 未记录 | • **Request timeout**<br>• 15 minutes<br>• No timeout (connection stays open) |
| tables › 记录 Limits › rows › 记录 **Text after `replace`** | 新增 | 未记录 | • **Text after `replace`**<br>• 240,000 characters<br>• 240,000 characters per utterance |
| tables › 记录 Limits › rows › 记录 **[`replace`](#map-limits) map** | 新增 | 未记录 | • **[`replace`](#map-limits) map**<br>• 200 entries; keys ≤ 100 and values ≤ 128 characters<br>• Same, per `session.update` |
| tables › 记录 Map limits › headers | 新增 | 未记录 | • Constraint<br>• Limit<br>• Error (`400`) |
| tables › 记录 Map limits › heading | 新增 | 未记录 | Map limits |
| tables › 记录 Map limits › rows › 记录 Entries per map | 新增 | 未记录 | • Entries per map<br>• 200<br>• `replace has too many entries` |
| tables › 记录 Map limits › rows › 记录 Key characters | 新增 | 未记录 | • Key characters<br>• letters, digits, apostrophes, spaces<br>• `replace key "C++" may not contain punctuation or symbols` |
| tables › 记录 Map limits › rows › 记录 Key length | 新增 | 未记录 | • Key length<br>• 100 characters<br>• `replace key "…" is too long` |
| tables › 记录 Map limits › rows › 记录 Keys distinct as phrases | 新增 | 未记录 | • Keys distinct as phrases<br>• compared case- and whitespace-insensitively<br>• `replace keys "ACME" and "Acme" are the same phrase; keep one` |
| tables › 记录 Map limits › rows › 记录 Keys non-blank | 新增 | 未记录 | • Keys non-blank<br>• —<br>• `replace keys must not be blank` |
| tables › 记录 Map limits › rows › 记录 Text after substitution | 新增 | 未记录 | • Text after substitution<br>• 240,000 characters<br>• `` `replace` expands the text to … characters `` |
| tables › 记录 Map limits › rows › 记录 Value length | 新增 | 未记录 | • Value length<br>• 128 characters<br>• `replace value for "…" is too long` |
| tables › 记录 Request Body › headers | 新增 | 未记录 | • Parameter<br>• Type<br>• Required<br>• Description |
| tables › 记录 Request Body › heading | 新增 | 未记录 | Request Body |
| tables › 记录 Request Body › rows › 记录 `language` | 新增 | 未记录 | • `language`<br>• string<br>• ✓<br>• BCP-47 language code (e.g. `en`, `zh`, `pt-BR`) or `auto` for automatic language detection. See [Supported Languages](#supported-languages). |
| tables › 记录 Request Body › rows › 记录 `optimize_streaming_latency` | 新增 | 未记录 | • `optimize_streaming_latency`<br>• integer<br>• 空字符串<br>• Latency optimization level for streaming synthesis. `0` (default): No optimization — best audio quality. `1`: Reduced first-chunk size for lower time-to-first-audio, with minor quality tradeoff at chunk boundaries. `2`: Further reduced first-chunk size for lowest time-to-first-audio, with more noticeable quality tradeoff at chunk boundaries. |
| tables › 记录 Request Body › rows › 记录 `output_format` | 新增 | 未记录 | • `output_format`<br>• object<br>• 空字符串<br>• Output format configuration. Defaults to MP3 at 24 kHz / 128 kbps. See [Output Formats](#output-formats). |
| tables › 记录 Request Body › rows › 记录 `replace` | 新增 | 未记录 | • `replace`<br>• object<br>• 空字符串<br>• Map of phrases to spoken substitutions applied before synthesis. Values may be respellings (`{"Acme Mobile": "Acme Mobull"}`) or [IPA](#phonetic-pronunciations-with-ipa) phonetics (`{"nginx": "/ˈɛndʒɪn ˈɛks/"}`). See [Pronunciation Replacements](#pronunciation-replacements). |
| tables › 记录 Request Body › rows › 记录 `speed` | 新增 | 未记录 | • `speed`<br>• number<br>• 空字符串<br>• Speech speed multiplier. `1.0` is normal speed. Values below `1.0` slow down speech, values above `1.0` speed it up. Range: `0.7` to `1.5`. Defaults to `1.0`. |
| tables › 记录 Request Body › rows › 记录 `text_normalization` | 新增 | 未记录 | • `text_normalization`<br>• boolean<br>• 空字符串<br>• Enable text normalization before synthesis. When `true`, the model normalizes written-form text (e.g. numbers, abbreviations, symbols) into spoken-form before generating audio. Defaults to `false`. |
| tables › 记录 Request Body › rows › 记录 `text` | 新增 | 未记录 | • `text`<br>• string<br>• ✓<br>• The text to convert to speech. Maximum **60,000 characters**. Supports [speech tags](#speech-tags). |
| tables › 记录 Request Body › rows › 记录 `voice_id` | 新增 | 未记录 | • `voice_id`<br>• string<br>• 空字符串<br>• Voice to use for synthesis. Defaults to `eve`. See [Voices](#voices). |
| tables › 记录 Request Body › rows › 记录 `with_timestamps` | 新增 | 未记录 | • `with_timestamps`<br>• boolean<br>• 空字符串<br>• Return character-level timing metadata alongside the audio. When `true`, the response is a JSON envelope containing base64-encoded audio plus per-character start/end times. Adds latency for the post-synthesis alignment pass. Defaults to `false`. See [Character-level timestamps](#character-level-timestamps). |
| tables › 记录 Response shape › headers | 新增 | 未记录 | • Field<br>• Type<br>• Description |
| tables › 记录 Response shape › heading | 新增 | 未记录 | Response shape |
| tables › 记录 Response shape › rows › 记录 `audio_timestamps.graph_chars` | 新增 | 未记录 | • `audio_timestamps.graph_chars`<br>• string\[]<br>• Each input character, in order, including spaces, punctuation, and speech tags. |
| tables › 记录 Response shape › rows › 记录 `audio_timestamps.graph_times` | 新增 | 未记录 | • `audio_timestamps.graph_times`<br>• number\[]\[]<br>• Parallel array of `[start, end]` pairs in seconds. |
| tables › 记录 Response shape › rows › 记录 `audio` | 新增 | 未记录 | • `audio`<br>• string<br>• Base64-encoded audio in the requested codec. Decode and play like a normal response. |
| tables › 记录 Response shape › rows › 记录 `content_type` | 新增 | 未记录 | • `content_type`<br>• string<br>• MIME type of the decoded audio (e.g. `audio/mpeg`, `audio/wav`). |
| tables › 记录 Response shape › rows › 记录 `duration` | 新增 | 未记录 | • `duration`<br>• number<br>• Total audio duration in seconds. |
| tables › 记录 Sample Rates › headers | 新增 | 未记录 | • Rate<br>• Description |
| tables › 记录 Sample Rates › heading | 新增 | 未记录 | Sample Rates |
| tables › 记录 Sample Rates › rows › 记录 `16000` | 新增 | 未记录 | • `16000`<br>• Wideband - speech recognition |
| tables › 记录 Sample Rates › rows › 记录 `22050` | 新增 | 未记录 | • `22050`<br>• Standard - balanced quality |
| tables › 记录 Sample Rates › rows › 记录 `24000` | 新增 | 未记录 | • `24000`<br>• High quality - **default**, recommended for most use cases |
| tables › 记录 Sample Rates › rows › 记录 `44100` | 新增 | 未记录 | • `44100`<br>• CD quality - media production |
| tables › 记录 Sample Rates › rows › 记录 `48000` | 新增 | 未记录 | • `48000`<br>• Professional - studio-grade audio |
| tables › 记录 Sample Rates › rows › 记录 `8000` | 新增 | 未记录 | • `8000`<br>• Narrowband - telephony |
| tables › 记录 Server → Client Messages › headers | 新增 | 未记录 | • Event<br>• Description |
| tables › 记录 Server → Client Messages › heading | 新增 | 未记录 | Server → Client Messages |
| tables › 记录 Server → Client Messages › rows › 记录 `audio.clear` | 新增 | 未记录 | • `audio.clear`<br>• Confirms that the current utterance was cancelled in response to `text.clear`. The connection is ready for the next utterance. |
| tables › 记录 Server → Client Messages › rows › 记录 `audio.delta` | 新增 | 未记录 | • `audio.delta`<br>• A chunk of base64-encoded audio in the codec specified at connection time. Decode and enqueue for playback. When the connection was opened with `with_timestamps=true`, also carries `audio_timestamps` (`graph_chars` + `graph_times`) and `audio_duration` for the characters in that chunk. See [Character-level timestamps](#character-level-timestamps). |
| tables › 记录 Server → Client Messages › rows › 记录 `audio.done` | 新增 | 未记录 | • `audio.done`<br>• All audio for the current utterance has been sent. Includes a `trace_id` for debugging. |
| tables › 记录 Server → Client Messages › rows › 记录 `error` | 新增 | 未记录 | • `error`<br>• An error occurred. The `message` field contains a human-readable description. |
| tables › 记录 Server → Client Messages › rows › 记录 `session.updated` | 新增 | 未记录 | • `session.updated`<br>• Acknowledges a `session.update` and echoes the `replace` map now in effect. |
| tables › 记录 Supported Languages › headers | 新增 | 未记录 | • Language<br>• Language Code |
| tables › 记录 Supported Languages › heading | 新增 | 未记录 | Supported Languages |
| tables › 记录 Supported Languages › rows › 记录 Arabic (Egypt) | 新增 | 未记录 | • Arabic (Egypt)<br>• `ar-EG` |
| tables › 记录 Supported Languages › rows › 记录 Arabic (Saudi Arabia) | 新增 | 未记录 | • Arabic (Saudi Arabia)<br>• `ar-SA` |
| tables › 记录 Supported Languages › rows › 记录 Arabic (United Arab Emirates) | 新增 | 未记录 | • Arabic (United Arab Emirates)<br>• `ar-AE` |
| tables › 记录 Supported Languages › rows › 记录 Auto-detect | 新增 | 未记录 | • Auto-detect<br>• `auto` |
| tables › 记录 Supported Languages › rows › 记录 Bengali | 新增 | 未记录 | • Bengali<br>• `bn` |
| tables › 记录 Supported Languages › rows › 记录 Chinese (Simplified) | 新增 | 未记录 | • Chinese (Simplified)<br>• `zh` |
| tables › 记录 Supported Languages › rows › 记录 English | 新增 | 未记录 | • English<br>• `en` |
| tables › 记录 Supported Languages › rows › 记录 French | 新增 | 未记录 | • French<br>• `fr` |
| tables › 记录 Supported Languages › rows › 记录 German | 新增 | 未记录 | • German<br>• `de` |
| tables › 记录 Supported Languages › rows › 记录 Hindi | 新增 | 未记录 | • Hindi<br>• `hi` |
| tables › 记录 Supported Languages › rows › 记录 Indonesian | 新增 | 未记录 | • Indonesian<br>• `id` |
| tables › 记录 Supported Languages › rows › 记录 Italian | 新增 | 未记录 | • Italian<br>• `it` |
| tables › 记录 Supported Languages › rows › 记录 Japanese | 新增 | 未记录 | • Japanese<br>• `ja` |
| tables › 记录 Supported Languages › rows › 记录 Korean | 新增 | 未记录 | • Korean<br>• `ko` |
| tables › 记录 Supported Languages › rows › 记录 Portuguese (Brazil) | 新增 | 未记录 | • Portuguese (Brazil)<br>• `pt-BR` |
| tables › 记录 Supported Languages › rows › 记录 Portuguese (Portugal) | 新增 | 未记录 | • Portuguese (Portugal)<br>• `pt-PT` |
| tables › 记录 Supported Languages › rows › 记录 Russian | 新增 | 未记录 | • Russian<br>• `ru` |
| tables › 记录 Supported Languages › rows › 记录 Spanish (Mexico) | 新增 | 未记录 | • Spanish (Mexico)<br>• `es-MX` |
| tables › 记录 Supported Languages › rows › 记录 Spanish (Spain) | 新增 | 未记录 | • Spanish (Spain)<br>• `es-ES` |
| tables › 记录 Supported Languages › rows › 记录 Turkish | 新增 | 未记录 | • Turkish<br>• `tr` |
| tables › 记录 Supported Languages › rows › 记录 Vietnamese | 新增 | 未记录 | • Vietnamese<br>• `vi` |
| tables › 记录 Wrapping Tags › headers | 新增 | 未记录 | • Category<br>• Tags |
| tables › 记录 Wrapping Tags › heading | 新增 | 未记录 | Wrapping Tags |
| tables › 记录 Wrapping Tags › rows › 记录 **Pitch &amp; speed** | 新增 | 未记录 | • **Pitch &amp; speed**<br>• 空字符串 |
| tables › 记录 Wrapping Tags › rows › 记录 **Vocal style** | 新增 | 未记录 | • **Vocal style**<br>• 空字符串 |
| tables › 记录 Wrapping Tags › rows › 记录 **Volume &amp; intensity** | 新增 | 未记录 | • **Volume &amp; intensity**<br>• 空字符串 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-tool-streaming-sync

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url="https://api.x.ai/v1",<br>• curl https://api.x.ai/v1/responses \\ |
| capability mentions | 新增 | 未记录 | • We strongly recommend using streaming mode when using agentic tool calling. It provides:<br>• * **Real-time observability** of tool calls as they happen<br>• * **Reasoning token counts** as the model thinks<br>• if (part.type === 'tool-call') {<br>• # View server-side tool calls in real-time<br>• for tool_call in chunk.tool_calls:<br>• print(f"\\nCalling tool: {tool_call.function.name}")<br>• if response.usage.reasoning_tokens and is_thinking:<br>• print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>• By default, server-side tool call outputs are not returned since they can be large. However, you can opt-in to receive them: |
| excerpt | 新增 | 未记录 | #### Tools<br># Streaming &amp; Synchronous Requests<br>Agentic requests can be executed in either streaming or synchronous mode. This page covers both approaches and how to use them effectively.<br>## Streaming Mode (Recommended)<br>We strongly recommend using streaming mode when using agentic tool calling. It provides:<br>* **Real-time observability** of tool calls as they happen<br>* **Immediate feedback** during potentially long-running requests<br>* **Reasoning token counts** as the model thinks<br>### Streaming Example<br>```javascriptAISDK<br>import { xai } from '@ai-sdk/xai';<br>import { streamText } from 'ai';<br>const { fullStream } = streamText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'What are the latest updates from SpaceXSI?',<br>tools: {<br>web_search: xai.tools.webSearch(),<br>x_search: xai.tools.xSearch(),<br>code_execution: xai.tools.codeExecution(),<br>},<br>});<br>for await (const part of fullStream) {<br>if (part.type === 'tool-call') {<br>console.log(\`Calling tool: \${part.toolName}\`);<br>} else if (part.type === 'text-delta') {<br>process.stdout.write(part.text);<br>} else if (part.type === 'source' &amp;&amp; part.sourceType === 'url') {<br>console.log(\`Citation: \${part.url}\`);<br>}<br>}<br>```<br>```pythonXAI<br>import os<br>from xai_sdk import Client<br>from xai_sdk.chat import user<br>from xai_sdk.tools import code_execution, web_search, x_search<br>client = Client(api_key=os.getenv("XAI_API_KEY"))<br>chat = client.chat.create(<br>model="grok-4.7",<br>tools=[<br>web_search(),<br>x_search(),<br>code_execution(),<br>],<br>include=["verbose_streaming"],<br>)<br>chat.append(user("What are the latest updates from SpaceXSI?"))<br>is_thinking = True<br>for response, chunk in chat.stream():<br># View server-side tool calls in real-time<br>for tool_call in chunk.tool_calls:<br>print(f"\\nCalling tool: {tool_call.function.name}")<br>if response.usage.reasoning_tokens and is_thinking:<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>if chunk.content and is_thinking:<br>print("\\n\\nFinal Response:")<br>is_thinking = False<br>if chunk.content and not is_thinking:<br>print(chunk.content, end="", flush=True)<br>print("\\nCitations:", response.citations)<br>```<br>## Synchronous Mode<br>For simpler use cases or when you want to wait for the complete agentic workflow to finish before processing the response, you can use synchronous requests:<br>```javascriptAISDK<br>import { xai } from '@ai-sdk/xai';<br>import { generateText } from 'ai';<br>// Synchronous request - waits for complete response<br>const { text, sources } = await generateText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'What is the latest update from SpaceXSI?',<br>tools: {<br>web_search: xai.tools.webSearch(),<br>x_search: xai.tools.xSearch(),<br>code_execution: xai.tools.codeExecution(),<br>},<br>});<br>console.log('Final Response:');<br>console.log(text);<br>console.log('\\nCitations:');<br>console.log(sources);<br>```<br>```pythonXAI<br>import os<br>from xai_sdk import Client<br>from xai_sdk.chat import user<br>from xai_sdk.tools import code_execution, web_search, x_search<br>client = Client(api_key=os.getenv("XAI_API_KEY"))<br>chat = client.chat.create(<br>model="grok-4.7",<br>tools=[<br>web_search(),<br>x_search(),<br>code_execution(),<br>],<br>)<br>chat.append(user("What is the latest update from SpaceXSI?"))<br># Get the final response in one go once it's ready<br>response = chat.sample()<br>print("Final Response:")<br>print(response.content) |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.7 |
| plan or price mentions | 新增 | 未记录 | • console.log(\`Calling tool: \${part.toolName}\`);<br>• console.log(\`Citation: \${part.url}\`);<br>• -H "Authorization: Bearer $XAI_API_KEY" \\ |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-tool-streaming-sync |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Responses API › headers | 新增 | 未记录 | • Tool<br>• Responses API tool name<br>• Value for `include` field |
| tables › 记录 Responses API › heading | 新增 | 未记录 | Responses API |
| tables › 记录 Responses API › rows › 记录 `"code_execution"` | 新增 | 未记录 | • `"code_execution"`<br>• `"code_interpreter"`<br>• `"code_interpreter_call.outputs"` |
| tables › 记录 Responses API › rows › 记录 `"collections_search"` | 新增 | 未记录 | • `"collections_search"`<br>• `"file_search"`<br>• `"file_search_call.results"` |
| tables › 记录 Responses API › rows › 记录 `"mcp"` | 新增 | 未记录 | • `"mcp"`<br>• `"mcp"`<br>• Always returned in Responses API |
| tables › 记录 Responses API › rows › 记录 `"web_search"` | 新增 | 未记录 | • `"web_search"`<br>• `"web_search"`<br>• `"web_search_call.action.sources"` |
| tables › 记录 xAI SDK › headers | 新增 | 未记录 | • Tool<br>• Value for `include` field |
| tables › 记录 xAI SDK › heading | 新增 | 未记录 | xAI SDK |
| tables › 记录 xAI SDK › rows › 记录 `"attachment_search"` | 新增 | 未记录 | • `"attachment_search"`<br>• `"attachment_search_call_output"` |
| tables › 记录 xAI SDK › rows › 记录 `"code_execution"` | 新增 | 未记录 | • `"code_execution"`<br>• `"code_execution_call_output"` |
| tables › 记录 xAI SDK › rows › 记录 `"collections_search"` | 新增 | 未记录 | • `"collections_search"`<br>• `"collections_search_call_output"` |
| tables › 记录 xAI SDK › rows › 记录 `"mcp"` | 新增 | 未记录 | • `"mcp"`<br>• `"mcp_call_output"` |
| tables › 记录 xAI SDK › rows › 记录 `"web_search"` | 新增 | 未记录 | • `"web_search"`<br>• `"web_search_call_output"` |
| tables › 记录 xAI SDK › rows › 记录 `"x_search"` | 新增 | 未记录 | • `"x_search"`<br>• `"x_search_call_output"` |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-tools-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url="https://api.x.ai/v1",<br>• curl https://api.x.ai/v1/responses \<br>• baseURL: "https://api.x.ai/v1", |
| capability mentions | 新增 | 未记录 | • The xAI API supports **tool calling**, enabling Grok to perform actions beyond generating text—like searching the web, executing code, querying your data, or calling your own custom functions. Tools extend what's possible with the API and let you build powerful, interactive applications.<br>• &#124; **Built-in Tools** &#124; Server-side tools managed by SpaceXSI that execute automatically &#124; Web Search, X Search, Code Interpreter, Image Generation, Collections Search &#124;<br>• 2. **Decides what to do next**: Make a tool call, or provide a final answer<br>• 3. **Executes the tool** (for built-in tools) or returns a tool call request (for function calling)<br>• * **[Image Generation](/developers/tools/image-generation)** - Generate and edit images in a conversation |
| excerpt | 新增 | 未记录 | #### Tools<br># Overview<br>The xAI API supports **tool calling**, enabling Grok to perform actions beyond generating text—like searching the web, executing code, querying your data, or calling your own custom functions. Tools extend what's possible with the API and let you build powerful, interactive applications.<br>## Types of Tools<br>The xAI API offers two categories of tools:<br>&#124; Type &#124; Description &#124; Examples &#124;<br>&#124;------&#124;-------------&#124;----------&#124;<br>&#124; **Built-in Tools** &#124; Server-side tools managed by SpaceXSI that execute automatically &#124; Web Search, X Search, Code Interpreter, Image Generation, Collections Search &#124;<br>&#124; **Function Calling** &#124; Custom functions you define that the model can invoke &#124; Database queries, API calls, custom business logic &#124;<br>Built-in tools run on SpaceXSI's servers—you provide the tool configuration, and the API handles execution and returns results. Function calling lets you define your own tools that the model can request, giving you full control over what happens when they're invoked.<br>## Pricing<br>Tool requests are priced based on two components: **token usage** and **tool invocations**. Since the model may call multiple tools to answer a query, costs scale with complexity.<br>For more details on Tools pricing, please check out [the pricing page](/developers/pricing#tools-pricing).<br>## How It Works<br>When you provide tools to a request, the xAI API can use them to gather information or perform actions:<br>1. **Analyzes the query** and determines what information or actions are needed<br>2. **Decides what to do next**: Make a tool call, or provide a final answer<br>3. **Executes the tool** (for built-in tools) or returns a tool call request (for function calling)<br>4. **Processes results** and continues until sufficient information is gathered<br>5. **Returns the final response** with citations where applicable<br>## Quick Start<br>```javascriptAISDK<br>import { xai } from '@ai-sdk/xai';<br>import { streamText } from 'ai';<br>const { fullStream } = streamText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'What are the latest updates from SpaceXSI?',<br>tools: {<br>web_search: xai.tools.webSearch(),<br>x_search: xai.tools.xSearch(),<br>code_execution: xai.tools.codeExecution(),<br>},<br>});<br>for await (const part of fullStream) {<br>if (part.type === 'text-delta') {<br>process.stdout.write(part.text);<br>} else if (part.type === 'source' &amp;&amp; part.sourceType === 'url') {<br>console.log(`Citation: ${part.url}`);<br>}<br>}<br>```<br>```pythonOpenAISDK<br>import os<br>from openai import OpenAI<br>client = OpenAI(<br>api_key=os.getenv("XAI_API_KEY"),<br>base_url="https://api.x.ai/v1",<br>)<br>response = client.responses.create(<br>model="grok-4.7",<br>input=[<br>{"role": "user", "content": "What are the latest updates from SpaceXSI?"}<br>],<br>tools=[<br>{"type": "web_search"},<br>{"type": "x_search"},<br>{"type": "code_interpreter"},<br>],<br>stream=True,<br>)<br>for event in response:<br>if event.type == "response.output_text.delta":<br>print(event.delta, end="", flush=True)<br>```<br>```bash customLanguage="bash"<br>curl https://api.x.ai/v1/responses \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-d '{<br>"model": "grok-4.7",<br>"stream": true,<br>"input": [<br>{<br>"role": "user",<br>"content": "What are the latest updates from SpaceXSI?"<br>}<br>],<br>"tools": [<br>{ "type": "web_search" },<br>{ "type": "x_search" },<br>{ "type": "code_interpreter" }<br>]<br>}'<br>```<br>```javascriptOpenAISDK<br>import OpenAI from "openai";<br>const client = new OpenAI({<br>apiKey: process.env.XAI_API_KEY,<br>baseURL: "https://api.x.ai/v1",<br>});<br>const stream = await client.responses.create({<br>model: "grok-4.7",<br>input: [<br>{ role: "user", content: "What are the latest updates from SpaceXSI?" }<br>],<br>tools: [<br>{ type: "web_search" },<br>{ type: "x_search" },<br>{ type: "code_interpreter" },<br>], |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.7 |
| plan or price mentions | 新增 | 未记录 | • console.log(`Citation: ${part.url}`);<br>• -H "Authorization: Bearer $XAI_API_KEY" \<br>• * **[Image Generation](/developers/tools/image-generation)** - Generate and edit images in a conversation |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-tools-overview |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Types of Tools › headers | 新增 | 未记录 | • Type<br>• Description<br>• Examples |
| tables › 记录 Types of Tools › heading | 新增 | 未记录 | Types of Tools |
| tables › 记录 Types of Tools › rows › 记录 **Built-in Tools** | 新增 | 未记录 | • **Built-in Tools**<br>• Server-side tools managed by SpaceXSI that execute automatically<br>• Web Search, X Search, Code Interpreter, Image Generation, Collections Search |
| tables › 记录 Types of Tools › rows › 记录 **Function Calling** | 新增 | 未记录 | • **Function Calling**<br>• Custom functions you define that the model can invoke<br>• Database queries, API calls, custom business logic |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-videos-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>## POST /v1/videos/generations</li><li>curl -s https://api.x.ai/v1/videos/generations \</li><li>const response = await fetch("https://api.x.ai/v1/videos/generations", {</li><li>"https://api.x.ai/v1/videos/generations",</li><li>## POST /v1/videos/edits</li><li>curl -s https://api.x.ai/v1/videos/edits \</li><li>const response = await fetch("https://api.x.ai/v1/videos/edits", {</li><li>"https://api.x.ai/v1/videos/edits",</li><li>## POST /v1/videos/extensions</li><li>## GET /v1/videos/\{request\_id}</li><li>curl -s "https://api.x.ai/v1/videos/$VIDEO_REQUEST_ID" \</li><li>`https://api.x.ai/v1/videos/${process.env.VIDEO_REQUEST_ID}`,</li><li>f"https://api.x.ai/v1/videos/{request_id}",</li></ul></details> |
| capability mentions | 新增 | 未记录 | 列表（80 项）<details><summary>展开完整内容</summary><ul><li># Videos</li><li>## POST /v1/videos/generations</li><li>Generate a video from a text prompt and optionally an image.</li><li>* `duration` (integer &#124; null) — Video duration in seconds. Range: \[1, 15]. Default: 8.</li><li>* `image` (object)</li><li>The file must be an image (JPEG, PNG, or WebP) and fully uploaded.</li><li>* `url` (string) — Public URL or base64-encoded data URL of the image (JPEG, PNG, or WebP).</li><li>Also accepts \`image\_url\` for compatibility.</li><li>* `keyframes` (array\ ) — Optional mid-video keyframe anchors, strictly between the endpoint</li><li>pins (\`image\` as the first frame, \`last\_frame\` as the last). Each</li><li>entry pins an image to appear literally at its timestamp. Only</li><li>supported by select video models; at most 4 entries.</li><li>* `image` (object, required) — Image input for generation and editing requests.</li><li>* `timestamp_s` (number, required) — Anchor time in seconds, strictly inside the clip (0 \ ) — Optional reference audio clips (voice identity) for reference-to-video</li><li>supported by select video models; at most 3 entries. May be provided</li><li>without \`reference\_images\` (audio-only reference-to-video) — at least</li><li>one reference of either kind selects the reference-to-video mode.</li><li>* `url` (string &#124; null) — Base64-encoded audio data URL (e.g. \`data:audio/wav;base64,...\`) or an</li><li>http(s) URL to a downloadable audio clip of at most 15 seconds.</li><li>* `reference_images` (array\ ) — Optional reference images for reference-to-video (R2V) generation.</li><li>When provided generates video using these images</li><li>curl -s https://api.x.ai/v1/videos/generations \</li><li>"model": "grok-imagine-video-1.5",</li><li>const response = await fetch("https://api.x.ai/v1/videos/generations", {</li><li>model: "grok-imagine-video-1.5",</li><li>"https://api.x.ai/v1/videos/generations",</li><li>## POST /v1/videos/edits</li><li>Edit a video based on a prompt.</li><li>* `upload_url` (string, required) — Signed URL to upload the generated video via HTTP PUT, e.g. an S3 / GCS</li><li>\`Content-Type: video/mp4\`, plus \`x-ms-blob-type: BlockBlob\` for Azure</li><li>* `prompt` (string, required) — Prompt for video editing.</li><li>* `video` (object, required) — Video input for editing and extension requests.</li><li>The file must be a video (e.g., MP4) and fully uploaded.</li><li>* `url` (string) — URL of the video (public URL or base64-encoded data URL).</li><li>The video must have the \`.mp4\` file extension and be encoded with \`.mp4\` supported codecs such as H.265, H.264, AV1, etc.</li><li>curl -s https://api.x.ai/v1/videos/edits \</li><li>\"model\": \"grok-imagine-video\",</li><li>\"video\": {</li><li>\"url\": \"$VIDEO_URL\"</li><li>const response = await fetch("https://api.x.ai/v1/videos/edits", {</li><li>model: "grok-imagine-video",</li><li>video: {</li><li>url: process.env.VIDEO_URL,</li><li>"https://api.x.ai/v1/videos/edits",</li><li>"model": "grok-imagine-video",</li><li>"video": {</li><li>"url": os.environ["VIDEO_URL"],</li><li>## POST /v1/videos/extensions</li><li>Extend a video by generating continuation content.</li><li>* `prompt` (string, required) — Prompt describing what should happen next in the video.</li><li>"url": "https://example.com/video.mp4"</li><li>## GET /v1/videos/\{request\_id}</li><li>Get the result of a deferred video generation request.</li><li>* `request_id` (string, required) — The deferred request id returned by a previous video generation request.</li><li>* `code` ("invalid\_argument" &#124; "permission\_denied" &#124; "failed\_precondition" &#124; "service\_unavailable" &#124; "internal\_error", required) — Machine-readable error codes for video generation failures.</li><li>These are the codes that can appear in \`VideoError.code\` when polling a</li><li>deferred video generation result. Authentication, model-not-found, and</li><li>appear in \`VideoError\`. Engine overload encountered mid-generation</li><li>* `model` (string &#124; null) — The model used to generate the video. Omitted when status is "failed".</li><li>* `progress` (integer &#124; null) — Approximate completion percentage for the video generation task (0-100).</li><li>* `status` (string, required) — Status of the video generation: "done" when the video is ready.</li><li>* `input_tokens` (integer &#124; null) — Total input tokens: prompt text tokens + input image tokens</li><li>* `image_tokens` (integer, required) — Input image tokens, as reported by the image engine.</li><li>* `output_tokens` (integer &#124; null) — Total output tokens: rewritten-prompt text tokens + reasoning tokens</li><li>\+ generated image tokens (the sum of \`output\_tokens\_details\`).</li><li>* `image_tokens` (integer, required) — Generated image tokens, as reported by the image engine.</li><li>* `reasoning_tokens` (integer, required) — Reasoning (thinking) tokens generated by the prompt-rewriting</li><li>(upsampler) LLM, excluding reasoning tokens.</li><li>* `video` (object)</li><li>* `duration` (integer, required) — Duration of the generated video in seconds.</li><li>* `respect_moderation` (boolean, required) — Whether the video generated by the model respects moderation rules.</li><li>The field will be true if the video respects moderation rules. Otherwise</li><li>the field will be false and the video url field will be empty.</li><li>* `url` (string &#124; null) — A url to the generated video.</li><li>curl -s "https://api.x.ai/v1/videos/$VIDEO_REQUEST_ID" \</li><li>`https://api.x.ai/v1/videos/${process.env.VIDEO_REQUEST_ID}`,</li><li>request_id = os.environ["VIDEO_REQUEST_ID"]</li><li>f"https://api.x.ai/v1/videos/{request_id}",</li><li>"url": "https://vidgen.x.ai/xai-vidgen-bucket/xai-video-{request_id}.mp4",</li><li>"model": "grok-imagine-video"</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Inference API<br># Videos<br>## POST /v1/videos/generations<br>Generate a video from a text prompt and optionally an image.<br>This is an asynchronous operation that returns a request\_id for polling.<br>### Request Body<br>* `aspect_ratio` ("1:1" &#124; "16:9" &#124; "9:16" &#124; "4:3" &#124; "3:4" &#124; "3:2" &#124; "2:3" &#124; "21:9" &#124; "5:2")<br>* `duration` (integer &#124; null) — Video duration in seconds. Range: \[1, 15]. Default: 8.<br>Also accepts \`seconds\` for OpenAI API compatibility.<br>Accepts both number (8) and string ("8") values.<br>* `image` (object)<br>* `file_id` (string &#124; null) — File ID from the xAI Files API. Mutually exclusive with \`url\`.<br>The file must be an image (JPEG, PNG, or WebP) and fully uploaded.<br>* `url` (string) — Public URL or base64-encoded data URL of the image (JPEG, PNG, or WebP).<br>Also accepts \`image\_url\` for compatibility.<br>Required when \`file\_id\` is not set.<br>* `keyframes` (array\ ) — Optional mid-video keyframe anchors, strictly between the endpoint<br>pins (\`image\` as the first frame, \`last\_frame\` as the last). Each<br>entry pins an image to appear literally at its timestamp. Only<br>supported by select video models; at most 4 entries.<br>* `image` (object, required) — Image input for generation and editing requests.<br>Accepts a public URL, a base64-encoded data URL, or a file\_id from the xAI Files API.<br>* `file_id` (string &#124; null) — File ID from the xAI Files API. Mutually exclusive with \`url\`.<br>The file must be an image (JPEG, PNG, or WebP) and fully uploaded.<br>* `url` (string) — Public URL or base64-encoded data URL of the image (JPEG, PNG, or WebP).<br>Also accepts \`image\_url\` for compatibility.<br>Required when \`file\_id\` is not set.<br>* `timestamp_s` (number, required) — Anchor time in seconds, strictly inside the clip (0 \ ) — Optional reference audio clips (voice identity) for reference-to-video<br>generation. Each entry supplies a clip via \`url\` or selects a voice via<br>\`voice\_id\`; caller-supplied clips must be at most 15 seconds long. Only<br>supported by select video models; at most 3 entries. May be provided<br>without \`reference\_images\` (audio-only reference-to-video) — at least<br>one reference of either kind selects the reference-to-video mode.<br>* `url` (string &#124; null) — Base64-encoded audio data URL (e.g. \`data:audio/wav;base64,...\`) or an<br>http(s) URL to a downloadable audio clip of at most 15 seconds.<br>Mutually exclusive with \`voice\_id\`.<br>* `voice_id` (string &#124; null) — Identifier of a first-party preset voice (e.g. "ara"; same voice<br>identifiers as the TTS API), resolved server-side to a curated<br>reference clip from the model's voice-preset catalog. Models configured<br>for custom voices also accept a custom voice identifier. Mutually<br>exclusive with \`url\`.<br>* `reference_images` (array\ ) — Optional reference images for reference-to-video (R2V) generation.<br>When provided generates video using these images<br>as style/content references.<br>* `file_id` (string &#124; null) — File ID from the xAI Files API. Mutually exclusive with \`url\`.<br>The file must be an image (JPEG, PNG, or WebP) and fully uploaded.<br>* `url` (string) — Public URL or base64-encoded data URL of the image (JPEG, PNG, or WebP).<br>Also accepts \`image\_url\` for compatibility.<br>Required when \`file\_id\` is not set.<br>* `resolution` ("480p" &#124; "720p" &#124; "1080p")<br>* `storage_options` (object)<br>* `expires_after` (integer &#124; null) — Seconds from now until the file auto-expires. Maximum 2592000 (30 days).<br>If omitted, the file does not expire.<br>* `filename` (string, required) — Filename for the stored file.<br>* `public_url` (boolean &#124; object)<br>* `user` (string &#124; null) — A unique identifier representing your end-user.<br>### Response Body<br>* `request_id` (string, required) — A unique request ID to poll for the result.<br>### Code Examples<br>```bash<br>curl -s https://api.x.ai/v1/videos/generations \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-d '{<br>"model": "grok-imagine-video-1.5",<br>"prompt": "A serene lake at sunrise with mist rolling over the water"<br>}'<br>```<br>```javascriptWithoutSDK<br>const response = await fetch("https://api.x.ai/v1/videos/generations", {<br>method: "POST",<br>headers: {<br>Authorization: `Bearer ${process.env.XAI_API_KEY}`,<br>"Content-Type": "application/json",<br>},<br>body: JSON.stringify({<br>model: "grok-imagine-video-1.5",<br>prompt: "A serene lake at sunrise with mist rolling over the water",<br>}),<br>});<br>console.log(JSON.stringify(await response.json(), null, 2));<br>```<br>```pythonWithoutSDK<br>import json<br>import os<br>import requests<br>response = requests.post(<br>"https://api.x.ai/v1/videos/generations",<br>headers={<br>"Authorization": f"Bearer {os.environ['XAI_API_KEY']}",<br>"Content-Type": "application/json",<br>},<br>json={<br>"model": "grok-imagine-video-1.5",<br>"prompt": "A serene lake at sunrise with mist rolling over the water",<br>},<br>)<br>print(json.dumps(response.json(), indent=2))<br>```<br>\*\*Response example:\*\* |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-imagine-video<br>• grok-imagine-video-1.5<br>• voice-preset |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $XAI_API_KEY" \<br>• Authorization: `Bearer ${process.env.XAI_API_KEY}`,<br>• \"url\": \"$VIDEO_URL\"<br>• * `cost_in_usd_ticks` (integer, required) — The cost of this request expressed in USD ticks.<br>• One USD cent equals 100,000,000 ticks, so one US dollar equals<br>• curl -s "https://api.x.ai/v1/videos/$VIDEO_REQUEST_ID" \<br>• -H "Authorization: Bearer $XAI_API_KEY"<br>• `https://api.x.ai/v1/videos/${process.env.VIDEO_REQUEST_ID}`, |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | xai-videos-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-voice

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • "wss://api.x.ai/v1/realtime?model=grok-voice-latest",<br>• const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", {<br>• curl -X POST https://api.x.ai/v1/tts \<br>• "https://api.x.ai/v1/tts",<br>• const response = await fetch("https://api.x.ai/v1/tts", {<br>• curl -X POST https://api.x.ai/v1/stt \<br>• "https://api.x.ai/v1/stt",<br>• const response = await fetch("https://api.x.ai/v1/stt", {<br>• curl -X POST https://api.x.ai/v1/custom-voices \<br>• "https://api.x.ai/v1/custom-voices",<br>• const create = await fetch("https://api.x.ai/v1/custom-voices", {<br>• const speech = await fetch("https://api.x.ai/v1/tts", { |
| capability mentions | 新增 | 未记录 | 列表（28 项）<details><summary>展开完整内容</summary><ul><li>## Speech to Speech</li><li>Build real-time, speech-to-speech voice agents over WebSockets, with low-latency turn-taking and tool use. For client-side apps, use [Ephemeral Tokens](/developers/model-capabilities/audio/ephemeral-tokens) to connect securely without exposing your API key.</li><li>"wss://api.x.ai/v1/realtime?model=grok-voice-latest",</li><li># Stream audio and receive responses</li><li>if event["type"] == "response.output_audio.delta":</li><li># Play audio: base64.b64decode(event["delta"])</li><li>const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", {</li><li>if (event.type === "response.output_audio.delta") {</li><li>// Play audio: Buffer.from(event.delta, "base64")</li><li>## Text to Speech</li><li>Convert text to spoken audio with a large roster of expressive voices. Inline speech tags (laughter, whispers, pauses) and output formats from high-fidelity MP3 to telephony μ-law. Unary requests or WebSocket streaming.</li><li>## Speech to Text</li><li>Transcribe audio files in a single call or stream over WebSocket. The default is `grok-voice-transcribe-2.0`. 15 audio formats, word-level timestamps, multichannel, speaker diarization, Smart Turn end-of-turn detection, and 38+ languages.</li><li>-F model=grok-voice-transcribe-2.0 \</li><li>files={"file": ("recording.mp3", open("recording.mp3", "rb"), "audio/mpeg")},</li><li>data={"model": "grok-voice-transcribe-2.0"},</li><li>formData.append("model", "grok-voice-transcribe-2.0");</li><li># 1. Create a custom voice from a reference audio clip (max 120s).</li><li>-F "file=@reference.wav;type=audio/wav"</li><li>files={"file": ("reference.wav", f, "audio/wav")},</li><li>speech = requests.post(</li><li>f.write(speech.content)</li><li>// 1. Create a custom voice from a reference audio clip (max 120s).</li><li>const speech = await fetch("https://api.x.ai/v1/tts", {</li><li>fs.writeFileSync("custom.mp3", Buffer.from(await speech.arrayBuffer()));</li><li>The custom `voice_id` also works with the streaming TTS WebSocket and the Speech to Speech realtime API. See the [Custom Voices guide](/developers/model-capabilities/audio/custom-voices) for the full API.</li><li>When using the Speech to Speech API or Text to Speech, you can choose from the full set of built-in voices. Each has its own personality and tone, and all of them can speak every supported language. Pick the one that best fits your application (`eve` is the default):</li><li>The SpaceXSI Voice APIs are built for production workloads with strict security and compliance requirements. With [Zero Data Retention (ZDR)](/developers/faq/security#what-is-zero-data-retention-zdr), all audio data is processed in real time and never stored or used for training.</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Model Capabilities<br># Voice Overview<br>The SpaceXSI Voice APIs offer a range of powerful voice capabilities, all powered by Grok, with enterprise-grade reliability and sub-second latency.<br>## Speech to Speech<br>Build real-time, speech-to-speech voice agents over WebSockets, with low-latency turn-taking and tool use. For client-side apps, use [Ephemeral Tokens](/developers/model-capabilities/audio/ephemeral-tokens) to connect securely without exposing your API key.<br>```python customLanguage="pythonWithoutSDK"<br>import asyncio<br>import json<br>import os<br>import websockets<br>async def voice_agent():<br>async with websockets.connect(<br>"wss://api.x.ai/v1/realtime?model=grok-voice-latest",<br>additional_headers={"Authorization": f"Bearer {os.environ['XAI_API_KEY']}"}<br>) as ws:<br># Configure voice and enable tools<br>await ws.send(json.dumps({<br>"type": "session.update",<br>"session": {<br>"voice": "eve",<br>"instructions": "You are a helpful customer support agent.",<br>"turn_detection": {"type": "server_vad"},<br>"tools": [{"type": "web_search"}]<br>}<br>}))<br># Stream audio and receive responses<br>async for message in ws:<br>event = json.loads(message)<br>if event["type"] == "response.output_audio.delta":<br># Play audio: base64.b64decode(event["delta"])<br>pass<br>asyncio.run(voice_agent())<br>```<br>```javascript customLanguage="javascriptWithoutSDK"<br>import WebSocket from "ws";<br>const ws = new WebSocket("wss://api.x.ai/v1/realtime?model=grok-voice-latest", {<br>headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },<br>});<br>ws.on("open", () =&gt; {<br>// Configure voice and enable tools<br>ws.send(JSON.stringify({<br>type: "session.update",<br>session: {<br>voice: "eve",<br>instructions: "You are a helpful customer support agent.",<br>turn_detection: { type: "server_vad" },<br>tools: [{ type: "web_search" }]<br>}<br>}));<br>});<br>ws.on("message", (data) =&gt; {<br>const event = JSON.parse(data);<br>if (event.type === "response.output_audio.delta") {<br>// Play audio: Buffer.from(event.delta, "base64")<br>}<br>});<br>```<br>**Demo Apps:** [Web Agent](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-web) · [Twilio Phone Agent](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-phone) · [WebRTC Agent](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-webrtc) · [iOS Tester App](https://github.com/xai-org/xai-cookbook/tree/main/examples/voice-agent-mobile/swift)<br>## Text to Speech<br>Convert text to spoken audio with a large roster of expressive voices. Inline speech tags (laughter, whispers, pauses) and output formats from high-fidelity MP3 to telephony μ-law. Unary requests or WebSocket streaming.<br>```bash<br>curl -X POST https://api.x.ai/v1/tts \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-H "Content-Type: application/json" \<br>-d '{<br>"text": "Welcome to SpaceXSI. How can I help you today?",<br>"voice_id": "eve",<br>"language": "en"<br>}' \<br>--output welcome.mp3<br>```<br>```python customLanguage="pythonWithoutSDK"<br>import os<br>import requests<br>response = requests.post(<br>"https://api.x.ai/v1/tts",<br>headers={<br>"Authorization": f"Bearer {os.environ['XAI_API_KEY']}",<br>"Content-Type": "application/json",<br>},<br>json={<br>"text": "Welcome to SpaceXSI. How can I help you today?",<br>"voice_id": "eve",<br>"language": "en",<br>},<br>)<br>with open("welcome.mp3", "wb") as f:<br>f.write(response.content)<br>```<br>```javascript customLanguage="javascriptWithoutSDK"<br>import fs from "fs";<br>const response = await fetch("https://api.x.ai/v1/tts", {<br>method: "POST",<br>headers: {<br>Authorization: `Bearer ${process.env.XAI_API_KEY}`,<br>"Content-Type": "application/json",<br>},<br>body: JSON.stringify({<br>text: "Welcome to SpaceXSI. How can I help you today?",<br>voice_id: "eve", |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-client<br>• grok-voice-latest<br>• grok-voice-transcribe-2.0<br>• voice-agent-mobile<br>• voice-agent-phone<br>• voice-agent-web<br>• voice-agent-webrtc |
| plan or price mentions | 新增 | 未记录 | • headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },<br>• -H "Authorization: Bearer $XAI_API_KEY" \<br>• Authorization: `Bearer ${process.env.XAI_API_KEY}`, |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-voice |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url="https://api.x.ai/v1",<br>• curl https://api.x.ai/v1/responses \\<br>• curl https://api.x.ai/v1/responses \ |
| capability mentions | 新增 | 未记录 | 列表（30 项）<details><summary>展开完整内容</summary><ul><li>model="grok-4.7", # reasoning model</li><li>for tool_call in chunk.tool_calls:</li><li>print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")</li><li>if response.usage.reasoning_tokens and is_thinking:</li><li>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)</li><li>&#124; `enable_image_understanding` &#124; Enable analysis of images found during browsing &#124;</li><li>&#124; `enable_image_search` &#124; Enable image search results that can be embedded in responses &#124;</li><li>### Enable Image Understanding</li><li>Setting `enable_image_understanding` to true equips the agent with access to the `view_image` tool, allowing it to analyze images encountered during the search process.</li><li>When enabled, you will see `SERVER_SIDE_TOOL_VIEW_IMAGE` in `response.server_side_tool_usage` along with the number of times it was called.</li><li>&gt; Enabling this parameter for Web Search will also enable the image understanding for X Search tool if it's also included in the request.</li><li>prompt: "What is included in the image in SpaceXSI's official website?",</li><li>enableImageUnderstanding: true,</li><li>"content": "What is included in the image in SpaceXSI's official website?",</li><li>"enable_image_understanding": True,</li><li>web_search(enable_image_understanding=True),</li><li>chat.append(user("What is included in the image in SpaceXSI's official website?"))</li><li>### Enable Image Search</li><li>Setting `enable_image_search` to true lets Grok search for relevant images and include them in the response as Markdown image embeds such as `![alt](url)`.</li><li>&gt; After Grok searches for images, the returned images are included in the model context used to write the response. This is separate from `enable_image_understanding`, which lets Grok inspect images it finds while browsing regular web pages.</li><li>The Vercel AI SDK does not yet expose `enableImageSearch`; the examples below use the Responses API and xAI Python SDK.</li><li>"content": "Show me images of Starship on the launch pad.",</li><li>"enable_image_search": True,</li><li>"content": "Show me images of Starship on the launch pad."</li><li>"enable_image_search": true</li><li>web_search(enable_image_search=True),</li><li>chat.append(user("Show me images of Starship on the launch pad."))</li><li>A response can include Markdown image embeds directly in the output text:</li><li>Here are several high-quality images of SpaceX's Starship on the launch pad at Starbase in Boca Chica, Texas.</li><li>In the xAI SDK, successful image search executions appear in `response.server_side_tool_usage` as `SERVER_SIDE_TOOL_IMAGE_SEARCH`.</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Tools<br># Web Search<br>The Web Search tool enables Grok to search the web in real-time and browse web pages to find information. This powerful tool allows the model to search the internet, access web pages, and extract relevant information to answer queries with up-to-date content.<br>## SDK Support<br>&#124; SDK/API &#124; Tool Name &#124;<br>&#124;---------&#124;-----------&#124;<br>&#124; xAI SDK &#124; `web_search` &#124;<br>&#124; OpenAI Responses API &#124; `web_search` &#124;<br>&#124; Vercel AI SDK &#124; `xai.tools.webSearch()` &#124;<br>This tool is also supported in all Responses API compatible SDKs.<br>## Basic Usage<br>```javascriptAISDK<br>import { xai } from '@ai-sdk/xai';<br>import { generateText } from 'ai';<br>const { text, sources } = await generateText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'What is SpaceXSI?',<br>tools: {<br>web_search: xai.tools.webSearch(),<br>},<br>});<br>console.log(text);<br>console.log('Citations:', sources);<br>```<br>```pythonOpenAISDK<br>import os<br>from openai import OpenAI<br>api_key = os.getenv("XAI_API_KEY")<br>client = OpenAI(<br>api_key=api_key,<br>base_url="https://api.x.ai/v1",<br>)<br>response = client.responses.create(<br>model="grok-4.7",<br>input=[<br>{<br>"role": "user",<br>"content": "What is SpaceXSI?",<br>},<br>],<br>tools=[<br>{<br>"type": "web_search",<br>},<br>],<br>)<br>print(response)<br>```<br>```bash<br>curl https://api.x.ai/v1/responses \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>-d '{<br>"model": "grok-4.7",<br>"input": [<br>{<br>"role": "user",<br>"content": "What is SpaceXSI?"<br>}<br>],<br>"tools": [<br>{<br>"type": "web_search"<br>}<br>]<br>}'<br>```<br>```pythonXAI<br>import os<br>from xai_sdk import Client<br>from xai_sdk.chat import user<br>from xai_sdk.tools import web_search<br>client = Client(api_key=os.getenv("XAI_API_KEY"))<br>chat = client.chat.create(<br>model="grok-4.7", # reasoning model<br>tools=[web_search()],<br>include=["verbose_streaming"],<br>)<br>chat.append(user("What is SpaceXSI?"))<br>is_thinking = True<br>for response, chunk in chat.stream():<br>for tool_call in chunk.tool_calls:<br>print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>if response.usage.reasoning_tokens and is_thinking:<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>if chunk.content and is_thinking:<br>print("\\n\\nFinal Response:")<br>is_thinking = False<br>if chunk.content and not is_thinking:<br>print(chunk.content, end="", flush=True)<br>print("\\n\\nCitations:")<br>print(response.citations)<br>```<br>## Web Search Parameters<br>&#124; Parameter &#124; Description &#124;<br>&#124;-----------&#124;-------------&#124;<br>&#124; `allowed_domains` &#124; Only search within specific domains (max 5) &#124;<br>&#124; `excluded_domains` &#124; Exclude specific domains from search (max 5) &#124;<br>&#124; `enable_image_understanding` &#124; Enable analysis of images found during browsing &#124;<br>&#124; `enable_image_search` &#124; Enable image search results that can be embedded in responses &#124; |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.7 |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $XAI_API_KEY" \\<br>• -H "Authorization: Bearer $XAI_API_KEY" \ |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-web-search |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 SDK Support › headers | 新增 | 未记录 | • SDK/API<br>• Tool Name |
| tables › 记录 SDK Support › heading | 新增 | 未记录 | SDK Support |
| tables › 记录 SDK Support › rows › 记录 OpenAI Responses API | 新增 | 未记录 | • OpenAI Responses API<br>• `web_search` |
| tables › 记录 SDK Support › rows › 记录 Vercel AI SDK | 新增 | 未记录 | • Vercel AI SDK<br>• `xai.tools.webSearch()` |
| tables › 记录 SDK Support › rows › 记录 xAI SDK | 新增 | 未记录 | • xAI SDK<br>• `web_search` |
| tables › 记录 Web Search Parameters › headers | 新增 | 未记录 | • Parameter<br>• Description |
| tables › 记录 Web Search Parameters › heading | 新增 | 未记录 | Web Search Parameters |
| tables › 记录 Web Search Parameters › rows › 记录 `allowed_domains` | 新增 | 未记录 | • `allowed_domains`<br>• Only search within specific domains (max 5) |
| tables › 记录 Web Search Parameters › rows › 记录 `enable_image_search` | 新增 | 未记录 | • `enable_image_search`<br>• Enable image search results that can be embedded in responses |
| tables › 记录 Web Search Parameters › rows › 记录 `enable_image_understanding` | 新增 | 未记录 | • `enable_image_understanding`<br>• Enable analysis of images found during browsing |
| tables › 记录 Web Search Parameters › rows › 记录 `excluded_domains` | 新增 | 未记录 | • `excluded_domains`<br>• Exclude specific domains from search (max 5) |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / xai-x-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url="https://api.x.ai/v1",<br>• curl https://api.x.ai/v1/responses \\<br>• client = OpenAI(api_key=os.getenv("XAI_API_KEY"), base_url="https://api.x.ai/v1")<br>• curl -s https://api.x.ai/v1/responses \ |
| capability mentions | 新增 | 未记录 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>&#124; `enable_image_understanding` &#124; boolean &#124; Let the model look at images in the posts it finds. Defaults to `false`. &#124;</li><li>&#124; `enable_video_understanding` &#124; boolean &#124; Let the model watch videos in the posts it finds. Defaults to `false`. &#124;</li><li>### Enable Image Understanding</li><li>Setting `enable_image_understanding` to true allows the agent to analyze images in X posts encountered during the search process.</li><li>prompt: 'Find X posts with images about AI',</li><li>enableImageUnderstanding: true,</li><li>input=[{"role": "user", "content": "Find X posts with images about AI"}],</li><li>"enable_image_understanding": True,</li><li>### Enable Video Understanding</li><li>Setting `enable_video_understanding` to true allows the agent to analyze videos in X posts. This is only available for X Search (not Web Search).</li><li>prompt: 'Find X posts with videos about AI',</li><li>enableVideoUnderstanding: true,</li><li>input=[{"role": "user", "content": "Find X posts with videos about AI"}],</li><li>"enable_video_understanding": True,</li><li>When you add `x_search` to `tools`, the model decides which of the functions below to call, and how often. It reads the posts it fetches and answers with citations. Each call appears in the response output as a `custom_tool_call` item named after the function, and the response reports the [usage counts](#usage-counts).</li><li>With [image](#enable-image-understanding) or [video understanding](#enable-video-understanding) turned on, the model can also view images and videos in the posts it finds, billed as image tokens.</li><li>To spend less, give the model less to fetch: narrow the handles and dates, ask for fewer rounds of searching with [`max_turns`](/developers/tools/tool-usage-details#limiting-tool-call-turns), and check the fetch counts in the response.</li><li>"image_generation_calls": 0</li></ul></details> |
| excerpt | 新增 | 未记录 | #### Tools<br># X Search<br>The X Search tool enables Grok to perform keyword search, semantic search, user search, and thread fetch on X (formerly Twitter). This powerful tool allows the model to access real-time social media content, analyze posts, and gather insights from X's vast data.<br>X Search is billed at $5 per 1k posts fetched and $10 per 1k user profiles fetched, in addition to token costs; see [tool invocation costs](/developers/pricing#tool-invocation-costs) for what counts as a fetched post or profile.<br>## SDK Support<br>&#124; SDK/API &#124; Tool Name &#124;<br>&#124;---------&#124;-----------&#124;<br>&#124; Responses API &#124; `x_search` &#124;<br>&#124; Vercel AI SDK &#124; `xai.tools.xSearch()` &#124;<br>This tool is also supported in all Responses API compatible SDKs.<br>## Basic Usage<br>```javascriptAISDK<br>import { xai } from '@ai-sdk/xai';<br>import { generateText } from 'ai';<br>const { text, sources } = await generateText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'What are people saying about SpaceXSI on X?',<br>tools: {<br>x_search: xai.tools.xSearch(),<br>},<br>});<br>console.log(text);<br>console.log('Citations:', sources);<br>```<br>```pythonOpenAISDK<br>import os<br>from openai import OpenAI<br>api_key = os.getenv("XAI_API_KEY")<br>client = OpenAI(<br>api_key=api_key,<br>base_url="https://api.x.ai/v1",<br>)<br>response = client.responses.create(<br>model="grok-4.7",<br>input=[<br>{<br>"role": "user",<br>"content": "What are people saying about SpaceXSI on X?",<br>},<br>],<br>tools=[<br>{<br>"type": "x_search",<br>},<br>],<br>)<br>print(response)<br>```<br>```bash<br>curl https://api.x.ai/v1/responses \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>-d '{<br>"model": "grok-4.7",<br>"input": [<br>{<br>"role": "user",<br>"content": "What are people saying about SpaceXSI on X?"<br>}<br>],<br>"tools": [<br>{<br>"type": "x_search"<br>}<br>]<br>}'<br>```<br>## X Search Parameters<br>&#124; Parameter &#124; Type &#124; Description &#124;<br>&#124;-----------&#124;------&#124;-------------&#124;<br>&#124; `allowed_x_handles` &#124; array of strings &#124; Only consider posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) &#124;<br>&#124; `excluded_x_handles` &#124; array of strings &#124; Ignore posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) &#124;<br>&#124; `from_date` &#124; string &#124; Start of the [date range](#date-range) (`YYYY-MM-DD`) &#124;<br>&#124; `to_date` &#124; string &#124; End of the [date range](#date-range) (`YYYY-MM-DD`) &#124;<br>&#124; `enable_image_understanding` &#124; boolean &#124; Let the model look at images in the posts it finds. Defaults to `false`. &#124;<br>&#124; `enable_video_understanding` &#124; boolean &#124; Let the model watch videos in the posts it finds. Defaults to `false`. &#124;<br>### Only Consider Posts from Specific Handles<br>Use `allowed_x_handles` to consider X posts only from a given list of X handles.<br>&gt; [!NOTE]<br>&gt;<br>&gt; `allowed_x_handles` cannot be set together with `excluded_x_handles` in the same request.<br>```javascriptAISDK<br>const { text } = await generateText({<br>model: xai.responses('grok-4.7'),<br>prompt: 'What has SpaceX posted about Starship recently?',<br>tools: {<br>x_search: xai.tools.xSearch({<br>allowedXHandles: ['SpaceX'],<br>}),<br>},<br>});<br>```<br>```pythonOpenAISDK<br>response = client.responses.create(<br>model="grok-4.7",<br>input=[{"role": "user", "content": "What has SpaceX posted about Starship recently?"}],<br>tools=[<br>{<br>"type": "x_search",<br>"allowed_x_handles": ["SpaceX"], |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • grok-4.7 |
| plan or price mentions | 新增 | 未记录 | • X Search is billed at $5 per 1k posts fetched and $10 per 1k user profiles fetched, in addition to token costs; see [tool invocation costs](/developers/pricing#tool-invocation-costs) for what counts as a fetched post or profile.<br>• -H "Authorization: Bearer $XAI_API_KEY" \\<br>• console.log(`x_posts_fetched: ${usage.server_side_tool_usage_details.x_posts_fetched}`);<br>• console.log(`x_users_fetched: ${usage.server_side_tool_usage_details.x_users_fetched}`);<br>• -H "Authorization: Bearer $XAI_API_KEY" \ |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | xai-x-search |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 How X Search Works › headers | 新增 | 未记录 | • Function<br>• What the model uses it for<br>• Billed as |
| tables › 记录 How X Search Works › heading | 新增 | 未记录 | How X Search Works |
| tables › 记录 How X Search Works › rows › 记录 `x_keyword_search` | 新增 | 未记录 | • `x_keyword_search`<br>• Keyword search with X's advanced search operators, sorted by `Top` or `Latest`<br>• Posts fetched |
| tables › 记录 How X Search Works › rows › 记录 `x_semantic_search` | 新增 | 未记录 | • `x_semantic_search`<br>• Search by meaning rather than exact words<br>• Posts fetched |
| tables › 记录 How X Search Works › rows › 记录 `x_thread_fetch` | 新增 | 未记录 | • `x_thread_fetch`<br>• Fetch one post with its parent posts and replies<br>• Posts fetched |
| tables › 记录 How X Search Works › rows › 记录 `x_user_search` | 新增 | 未记录 | • `x_user_search`<br>• Find users by name or description<br>• Profiles fetched |
| tables › 记录 SDK Support › headers | 新增 | 未记录 | • SDK/API<br>• Tool Name |
| tables › 记录 SDK Support › heading | 新增 | 未记录 | SDK Support |
| tables › 记录 SDK Support › rows › 记录 Responses API | 新增 | 未记录 | • Responses API<br>• `x_search` |
| tables › 记录 SDK Support › rows › 记录 Vercel AI SDK | 新增 | 未记录 | • Vercel AI SDK<br>• `xai.tools.xSearch()` |
| tables › 记录 Usage Counts › headers | 新增 | 未记录 | • Field<br>• Counts |
| tables › 记录 Usage Counts › heading | 新增 | 未记录 | Usage Counts |
| tables › 记录 Usage Counts › rows › 记录 `x_posts_fetched` | 新增 | 未记录 | • `x_posts_fetched`<br>• Posts returned by `x_keyword_search`, `x_semantic_search`, and `x_thread_fetch`, including parent and quoted posts and every post of a fetched thread |
| tables › 记录 Usage Counts › rows › 记录 `x_users_fetched` | 新增 | 未记录 | • `x_users_fetched`<br>• User profiles returned by `x_user_search` |
| tables › 记录 X Search Parameters › headers | 新增 | 未记录 | • Parameter<br>• Type<br>• Description |
| tables › 记录 X Search Parameters › heading | 新增 | 未记录 | X Search Parameters |
| tables › 记录 X Search Parameters › rows › 记录 `allowed_x_handles` | 新增 | 未记录 | • `allowed_x_handles`<br>• array of strings<br>• Only consider posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) |
| tables › 记录 X Search Parameters › rows › 记录 `enable_image_understanding` | 新增 | 未记录 | • `enable_image_understanding`<br>• boolean<br>• Let the model look at images in the posts it finds. Defaults to `false`. |
| tables › 记录 X Search Parameters › rows › 记录 `enable_video_understanding` | 新增 | 未记录 | • `enable_video_understanding`<br>• boolean<br>• Let the model watch videos in the posts it finds. Defaults to `false`. |
| tables › 记录 X Search Parameters › rows › 记录 `excluded_x_handles` | 新增 | 未记录 | • `excluded_x_handles`<br>• array of strings<br>• Ignore posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) |
| tables › 记录 X Search Parameters › rows › 记录 `from_date` | 新增 | 未记录 | • `from_date`<br>• string<br>• Start of the [date range](#date-range) (`YYYY-MM-DD`) |
| tables › 记录 X Search Parameters › rows › 记录 `to_date` | 新增 | 未记录 | • `to_date`<br>• string<br>• End of the [date range](#date-range) (`YYYY-MM-DD`) |
| title | 新增 | 未记录 | 明确未知 |

### Provider / xai

#### 档案

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| profile › aliases › evidence › 记录 xai-models › assertion | 新增 | 未记录 | 官方模型目录展示 Grok API 模型。 |
| profile › aliases › evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| profile › aliases | 新增 | 未记录 | • Grok API |
| profile › docs › evidence › 记录 xai-models › assertion | 新增 | 未记录 | 记录官方可读开发者文档链接。 |
| profile › docs › evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| profile › docs › api | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference |
| profile › docs › image | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/images |
| profile › docs › overview | 新增 | 未记录 | https://docs.x.ai/developers/models |
| profile › docs › 价格信息（pricing） | 新增 | 未记录 | https://docs.x.ai/developers/pricing |
| profile › docs › video | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| profile › docs › voice | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/voice |
| profile › 类别（kind） › evidence › 记录 xai-models › assertion | 新增 | 未记录 | 这是 xAI 自营 API。 |
| profile › 类别（kind） › evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| profile › 类别（kind） | 新增 | 未记录 | first_party |
| profile › 名称（name） › evidence › 记录 xai-models › assertion | 新增 | 未记录 | xAI 官方开发者站点。 |
| profile › 名称（name） › evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| profile › 名称（name） | 新增 | 未记录 | xAI |

### 待核对项目

#### 项目 / coverage-gap-01

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| ID（id） | 新增 | 未记录 | coverage-gap-01 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 公开模型目录完整性：保留目录页面与模型 ID 线索；未将页面提及自动判定为账号可调用目录。 |

#### 项目 / coverage-gap-02

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-models › assertion | 新增 | 未记录 | account_scoped |
| evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | account_scoped |
| evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| ID（id） | 新增 | 未记录 | coverage-gap-02 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 账号可用模型清单：官方接口说明表明清单按凭证/账号返回；本采集器不使用凭证调用。 |

#### 项目 / coverage-gap-03

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-batches-api-reference › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-batches-api-reference › source ref | 新增 | 未记录 | xai-batches-api-reference |
| evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| evidence › 记录 xai-models-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-models-api › source ref | 新增 | 未记录 | xai-models-api |
| evidence › 记录 xai-regions › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| evidence › 记录 xai-responses › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| ID（id） | 新增 | 未记录 | coverage-gap-03 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | API Host、Route 与 Method：API 文档快照与通用端点线索已保留；尚未规范映射到 Provider/Service/Route，也不从通用协议推断逐模型支持。 |

#### 项目 / coverage-gap-04

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| evidence › 记录 xai-imagine › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-imagine › source ref | 新增 | 未记录 | xai-imagine |
| evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| evidence › 记录 xai-tool-streaming-sync › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-tool-streaming-sync › source ref | 新增 | 未记录 | xai-tool-streaming-sync |
| evidence › 记录 xai-tools-overview › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-tools-overview › source ref | 新增 | 未记录 | xai-tools-overview |
| evidence › 记录 xai-voice › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| ID（id） | 新增 | 未记录 | coverage-gap-04 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | Provider/Service 独立能力：能力文档片段已保留；尚未映射到独立 Service 或明确关联的 Offering。 |

#### 项目 / coverage-gap-05

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | coverage-gap-05 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型价格与计量条件：价格来源的表格和原始金额线索已保留；币种、计量单位、阈值、折扣及模型适用范围尚未映射成 PriceRule。 |

#### 项目 / coverage-gap-06

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| ID（id） | 新增 | 未记录 | coverage-gap-06 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型上下文与最大输出：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-07

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| ID（id） | 新增 | 未记录 | coverage-gap-07 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型输入/输出模态与限制：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-08

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-models › source ref | 新增 | 未记录 | xai-models |
| evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| ID（id） | 新增 | 未记录 | coverage-gap-08 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型发布日期与生命周期：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-09

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | coverage-gap-09 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 计划价格与资格条件：计划来源虽已登记，具体价格、周期、市场/账号资格及模型权益仍需按来源逐项核验；候选不推断其覆盖范围。 |

#### 项目 / xai-model-bound-tools-unmapped

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | 工具文档说明如何在请求中启用 Web Search。 |
| evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | 工具文档说明如何在请求中启用 X Search。 |
| evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| ID（id） | 新增 | 未记录 | xai-model-bound-tools-unmapped |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 已采集 Web Search 与 X Search 工具文档和价格，但未找到通用来源中可确认支持这些工具的完整模型矩阵；保留为文档观察，不批量绑定每个模型。 |

### 市场 / global

#### Capability / batch-processing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方提供可异步排队处理的 Batch API。 |
| ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| ID（id） | 新增 | 未记录 | batch-processing |
| 类别（kind） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 独立批处理服务，不绑定单一模型。 |
| 类别（kind） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| 类别（kind） | 新增 | 未记录 | batch |
| links › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 Batch API 文档。 |
| links › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |

#### Capability / batch-processing › Operation / batch_processing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 批处理端点按官方工作流组织。 |
| ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| ID（id） | 新增 | 未记录 | batch_processing |
| 输入（input） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 输入项由官方批量请求与 JSONL 示例中的字段结构提取。 |
| 输入（input） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| 输入（input） › 记录 batch_requests › 类别（kind） | 新增 | 未记录 | structured |
| 输入（input） › 记录 batch_requests › 名称（name） | 新增 | 未记录 | batch_requests |
| 输入（input） › 记录 batch_requests › 是否必填（required） | 新增 | 未记录 | 是 |
| 输入（input） › 记录 input_file_id › 类别（kind） | 新增 | 未记录 | file |
| 输入（input） › 记录 input_file_id › media › max bytes | 新增 | 未记录 | 209,715,200 |
| 输入（input） › 记录 input_file_id › media › mime types | 新增 | 未记录 | • application/jsonl |
| 输入（input） › 记录 input_file_id › 名称（name） | 新增 | 未记录 | input_file_id |
| 输入（input） › 记录 input_file_id › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 批处理端点按官方工作流组织。 |
| 类别（kind） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| 类别（kind） | 新增 | 未记录 | batch_processing |
| 输出（output） › evidence › 记录 xai-batches-api-reference › assertion | 新增 | 未记录 | 输出字段由官方批处理响应示例、状态字段表与结果访问路径提取。 |
| 输出（output） › evidence › 记录 xai-batches-api-reference › source ref | 新增 | 未记录 | xai-batches-api-reference |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | 列表（39 项）<details><summary>展开完整内容</summary><ul><li>batch_id</li><li>name</li><li>create_time</li><li>expire_time</li><li>create_api_key_id</li><li>cancel_time</li><li>cancel_by_xai_message</li><li>state</li><li>state.num_requests</li><li>state.num_pending</li><li>state.num_success</li><li>state.num_error</li><li>state.num_cancelled</li><li>batches</li><li>batch_request_metadata</li><li>pagination_token</li><li>batch_request_id</li><li>endpoint</li><li>model</li><li>finish_time</li><li>results</li><li>batch_result</li><li>batch_result.response</li><li>num_requests</li><li>num_pending</li><li>num_success</li><li>num_error</li><li>num_cancelled</li><li>response</li><li>image_response</li><li>video_response</li><li>error_message</li><li>succeeded</li><li>failed</li><li>proto.response</li><li>response.content</li><li>response.usage.total_tokens</li><li>image_response.url</li><li>video_response.url</li></ul></details> |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 参数名称与类型由官方 Batch 请求示例提取。 |
| 参数（parameters） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| 参数（parameters） › 记录 batch_request › 名称（name） | 新增 | 未记录 | batch_request |
| 参数（parameters） › 记录 batch_request › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 batch_request › 参数路径（route_mappings） | 新增 | 未记录 | • /batches/{batch_id}/requests:body.batch_requests[].batch_request |
| 参数（parameters） › 记录 batch_request › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 batch_request_id › 名称（name） | 新增 | 未记录 | batch_request_id |
| 参数（parameters） › 记录 batch_request_id › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 batch_request_id › 参数路径（route_mappings） | 新增 | 未记录 | • /batches/{batch_id}/requests:body.batch_requests[].batch_request_id |
| 参数（parameters） › 记录 batch_request_id › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 batch_requests › 名称（name） | 新增 | 未记录 | batch_requests |
| 参数（parameters） › 记录 batch_requests › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 batch_requests › 参数路径（route_mappings） | 新增 | 未记录 | • /batches/{batch_id}/requests:body.batch_requests |
| 参数（parameters） › 记录 batch_requests › 类型（type） | 新增 | 未记录 | array |
| 参数（parameters） › 记录 input_file_id › 名称（name） | 新增 | 未记录 | input_file_id |
| 参数（parameters） › 记录 input_file_id › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 input_file_id › 参数路径（route_mappings） | 新增 | 未记录 | • /batches:body.input_file_id |
| 参数（parameters） › 记录 input_file_id › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 name › 名称（name） | 新增 | 未记录 | name |
| 参数（parameters） › 记录 name › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 name › 参数路径（route_mappings） | 新增 | 未记录 | • /batches:body.name |
| 参数（parameters） › 记录 name › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 add-requests › callability › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 add-requests › callability › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › callability | 新增 | 未记录 | documented_only |
| routes › 记录 add-requests › documentation › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 add-requests › documentation › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |
| routes › 记录 add-requests › endpoint ref › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 add-requests › endpoint ref › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 add-requests › ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Batch 文档中的批次工作流示例/说明列出 POST /batches/{batch_id}/requests。 |
| routes › 记录 add-requests › ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › ID（id） | 新增 | 未记录 | add-requests |
| routes › 记录 add-requests › HTTP 方法（method） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 add-requests › HTTP 方法（method） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 add-requests › operation kind › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 按官方用途 batch_processing 分类。 |
| routes › 记录 add-requests › operation kind › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › operation kind | 新增 | 未记录 | batch_processing |
| routes › 记录 add-requests › API 路径（path_template） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /batches/{batch_id}/requests。 |
| routes › 记录 add-requests › API 路径（path_template） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › API 路径（path_template） | 新增 | 未记录 | /batches/{batch_id}/requests |
| routes › 记录 add-requests › protocol › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 add-requests › protocol › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 add-requests › protocol | 新增 | 未记录 | https |
| routes › 记录 cancel-batch › callability › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 cancel-batch › callability › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › callability | 新增 | 未记录 | documented_only |
| routes › 记录 cancel-batch › documentation › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 cancel-batch › documentation › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |
| routes › 记录 cancel-batch › endpoint ref › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 cancel-batch › endpoint ref › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 cancel-batch › ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Batch 文档中的批次工作流示例/说明列出 POST /batches/{batch_id}:cancel。 |
| routes › 记录 cancel-batch › ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › ID（id） | 新增 | 未记录 | cancel-batch |
| routes › 记录 cancel-batch › HTTP 方法（method） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 cancel-batch › HTTP 方法（method） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 cancel-batch › operation kind › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 按官方用途 batch_processing 分类。 |
| routes › 记录 cancel-batch › operation kind › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › operation kind | 新增 | 未记录 | batch_processing |
| routes › 记录 cancel-batch › API 路径（path_template） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /batches/{batch_id}:cancel。 |
| routes › 记录 cancel-batch › API 路径（path_template） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › API 路径（path_template） | 新增 | 未记录 | /batches/{batch_id}:cancel |
| routes › 记录 cancel-batch › protocol › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 cancel-batch › protocol › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 cancel-batch › protocol | 新增 | 未记录 | https |
| routes › 记录 create-batch › callability › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 create-batch › callability › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › callability | 新增 | 未记录 | documented_only |
| routes › 记录 create-batch › documentation › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 create-batch › documentation › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |
| routes › 记录 create-batch › endpoint ref › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 create-batch › endpoint ref › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 create-batch › ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Batch 文档中的批次工作流示例/说明列出 POST /batches。 |
| routes › 记录 create-batch › ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › ID（id） | 新增 | 未记录 | create-batch |
| routes › 记录 create-batch › HTTP 方法（method） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 create-batch › HTTP 方法（method） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 create-batch › operation kind › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 按官方用途 batch_processing 分类。 |
| routes › 记录 create-batch › operation kind › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › operation kind | 新增 | 未记录 | batch_processing |
| routes › 记录 create-batch › API 路径（path_template） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /batches。 |
| routes › 记录 create-batch › API 路径（path_template） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › API 路径（path_template） | 新增 | 未记录 | /batches |
| routes › 记录 create-batch › protocol › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 create-batch › protocol › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 create-batch › protocol | 新增 | 未记录 | https |
| routes › 记录 get-batch › callability › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 get-batch › callability › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › callability | 新增 | 未记录 | documented_only |
| routes › 记录 get-batch › documentation › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 get-batch › documentation › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |
| routes › 记录 get-batch › endpoint ref › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 get-batch › endpoint ref › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 get-batch › ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Batch 文档中的批次工作流示例/说明列出 GET /batches/{batch_id}。 |
| routes › 记录 get-batch › ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › ID（id） | 新增 | 未记录 | get-batch |
| routes › 记录 get-batch › HTTP 方法（method） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 get-batch › HTTP 方法（method） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 get-batch › operation kind › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 按官方用途 batch_processing 分类。 |
| routes › 记录 get-batch › operation kind › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › operation kind | 新增 | 未记录 | batch_processing |
| routes › 记录 get-batch › API 路径（path_template） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /batches/{batch_id}。 |
| routes › 记录 get-batch › API 路径（path_template） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › API 路径（path_template） | 新增 | 未记录 | /batches/{batch_id} |
| routes › 记录 get-batch › protocol › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 get-batch › protocol › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-batch › protocol | 新增 | 未记录 | https |
| routes › 记录 get-requests › callability › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 get-requests › callability › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › callability | 新增 | 未记录 | documented_only |
| routes › 记录 get-requests › documentation › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 get-requests › documentation › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |
| routes › 记录 get-requests › endpoint ref › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 get-requests › endpoint ref › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 get-requests › ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Batch 文档中的批次工作流示例/说明列出 GET /batches/{batch_id}/requests。 |
| routes › 记录 get-requests › ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › ID（id） | 新增 | 未记录 | get-requests |
| routes › 记录 get-requests › HTTP 方法（method） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 get-requests › HTTP 方法（method） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 get-requests › operation kind › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 按官方用途 batch_processing 分类。 |
| routes › 记录 get-requests › operation kind › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › operation kind | 新增 | 未记录 | batch_processing |
| routes › 记录 get-requests › API 路径（path_template） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /batches/{batch_id}/requests。 |
| routes › 记录 get-requests › API 路径（path_template） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › API 路径（path_template） | 新增 | 未记录 | /batches/{batch_id}/requests |
| routes › 记录 get-requests › protocol › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 get-requests › protocol › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 get-requests › protocol | 新增 | 未记录 | https |
| routes › 记录 list-batches › callability › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 list-batches › callability › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › callability | 新增 | 未记录 | documented_only |
| routes › 记录 list-batches › documentation › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 list-batches › documentation › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |
| routes › 记录 list-batches › endpoint ref › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 list-batches › endpoint ref › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 list-batches › ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Batch 文档中的批次工作流示例/说明列出 GET /batches。 |
| routes › 记录 list-batches › ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › ID（id） | 新增 | 未记录 | list-batches |
| routes › 记录 list-batches › HTTP 方法（method） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 list-batches › HTTP 方法（method） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 list-batches › operation kind › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 按官方用途 batch_processing 分类。 |
| routes › 记录 list-batches › operation kind › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › operation kind | 新增 | 未记录 | batch_processing |
| routes › 记录 list-batches › API 路径（path_template） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /batches。 |
| routes › 记录 list-batches › API 路径（path_template） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › API 路径（path_template） | 新增 | 未记录 | /batches |
| routes › 记录 list-batches › protocol › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 list-batches › protocol › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-batches › protocol | 新增 | 未记录 | https |
| routes › 记录 list-results › callability › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 list-results › callability › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › callability | 新增 | 未记录 | documented_only |
| routes › 记录 list-results › documentation › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 list-results › documentation › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › documentation | 新增 | 未记录 | https://docs.x.ai/developers/advanced-api-usage/batch-api |
| routes › 记录 list-results › endpoint ref › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 list-results › endpoint ref › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 list-results › ID（id） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Batch 文档中的批次工作流示例/说明列出 GET /batches/{batch_id}/results。 |
| routes › 记录 list-results › ID（id） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › ID（id） | 新增 | 未记录 | list-results |
| routes › 记录 list-results › HTTP 方法（method） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 list-results › HTTP 方法（method） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 list-results › operation kind › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | Route 按官方用途 batch_processing 分类。 |
| routes › 记录 list-results › operation kind › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › operation kind | 新增 | 未记录 | batch_processing |
| routes › 记录 list-results › API 路径（path_template） › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /batches/{batch_id}/results。 |
| routes › 记录 list-results › API 路径（path_template） › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › API 路径（path_template） | 新增 | 未记录 | /batches/{batch_id}/results |
| routes › 记录 list-results › protocol › evidence › 记录 xai-batch-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 list-results › protocol › evidence › 记录 xai-batch-api › source ref | 新增 | 未记录 | xai-batch-api |
| routes › 记录 list-results › protocol | 新增 | 未记录 | https |

#### Capability / code-execution

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | xAI 官方文档提供 Code Execution 服务端工具。 |
| ID（id） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| ID（id） | 新增 | 未记录 | code-execution |
| 类别（kind） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | xAI Code Execution 是 Responses API 模型内置工具。 |
| 类别（kind） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| 类别（kind） | 新增 | 未记录 | code_execution |
| links › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | 链接指向官方 Code Execution 文档。 |
| links › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/code-execution |

#### Capability / code-execution › Operation / code-execution

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | Grok 根据用户提示调用服务端 Python 执行工具。 |
| ID（id） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| ID（id） | 新增 | 未记录 | code-execution |
| 输入（input） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | The official example supplies a natural-language prompt through Responses input. |
| 输入（input） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| 输入（input） › 记录 input[].content › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input[].content › 名称（name） | 新增 | 未记录 | input[].content |
| 输入（input） › 记录 input[].content › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | Grok 根据用户提示调用服务端 Python 执行工具。 |
| 类别（kind） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| 类别（kind） | 新增 | 未记录 | code_execution |
| 输出（output） › evidence › 记录 xai-tool-streaming-sync › assertion | 新增 | 未记录 | 官方文档将 code_execution 映射为 Responses API code_interpreter，并列出 outputs 的 include 字段；最终文本由同步调用返回。 |
| 输出（output） › evidence › 记录 xai-tool-streaming-sync › source ref | 新增 | 未记录 | xai-tool-streaming-sync |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • response.output[].type=code_interpreter_call<br>• code_interpreter_call.outputs<br>• response.output_text |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | The tool type is extracted from the official Responses API example. |
| 参数（parameters） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • code_interpreter |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 code-execution › callability › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 code-execution › callability › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › callability | 新增 | 未记录 | documented_only |
| routes › 记录 code-execution › documentation › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 code-execution › documentation › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/code-execution |
| routes › 记录 code-execution › endpoint ref › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 code-execution › endpoint ref › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 code-execution › ID（id） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | 官方 Code Execution 示例在 Responses API 中启用 code_interpreter。 |
| routes › 记录 code-execution › ID（id） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › ID（id） | 新增 | 未记录 | code-execution |
| routes › 记录 code-execution › HTTP 方法（method） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 code-execution › HTTP 方法（method） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 code-execution › operation kind › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | Route 按官方用途 code_execution 分类。 |
| routes › 记录 code-execution › operation kind › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › operation kind | 新增 | 未记录 | code_execution |
| routes › 记录 code-execution › API 路径（path_template） › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| routes › 记录 code-execution › API 路径（path_template） › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › API 路径（path_template） | 新增 | 未记录 | /responses |
| routes › 记录 code-execution › protocol › evidence › 记录 xai-code-execution › assertion | 新增 | 未记录 | responses API 协议。 |
| routes › 记录 code-execution › protocol › evidence › 记录 xai-code-execution › source ref | 新增 | 未记录 | xai-code-execution |
| routes › 记录 code-execution › protocol | 新增 | 未记录 | responses |

#### Capability / collection-management

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 Collections API 支持集合与文档管理。 |
| ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| ID（id） | 新增 | 未记录 | collection-management |
| 类别（kind） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 独立集合管理 API，需要 Management API Key。 |
| 类别（kind） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| 类别（kind） | 新增 | 未记录 | collections |
| links › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 Collections API 参考。 |
| links › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| prices › 记录 0 › capability ref › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 费率关联到 xAI Collections 管理服务。 |
| prices › 记录 0 › capability ref › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › capability ref | 新增 | 未记录 | collection-management |
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 保留 Collections 存储和下载费率。 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 定价页明确 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Collections 存储与下载按 GiB 计费。 |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/collections |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Collections 存储与下载按 GiB 计费。 |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/collections |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | stored_data |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_gib_day |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 定价页明确 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Collections 存储与下载按 GiB 计费。 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/collections |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Collections 存储与下载按 GiB 计费。 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/collections |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | downloaded_data |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_gib_download |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / collection-management › Operation / collection_management

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections 管理 API 端点。 |
| ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| ID（id） | 新增 | 未记录 | collection_management |
| 输入（input） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collection documents are added by referencing an uploaded file ID. |
| 输入（input） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| 输入（input） › 记录 document › 类别（kind） | 新增 | 未记录 | file |
| 输入（input） › 记录 document › 名称（name） | 新增 | 未记录 | document |
| 输入（input） › 记录 document › 是否必填（required） | 新增 | 未记录 | 否 |
| 类别（kind） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections 管理 API 端点。 |
| 类别（kind） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| 类别（kind） | 新增 | 未记录 | collection_management |
| 输出（output） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Fields are collected from official collection and document response schemas. |
| 输出（output） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • collection_id<br>• collection_name<br>• created_at<br>• index_configuration<br>• chunk_configuration<br>• documents_count<br>• collection_description<br>• documents.file_metadata<br>• documents.fields<br>• documents.status<br>• documents.error_message |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Parameters are collected from official collection request and route schemas. |
| 参数（parameters） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| 参数（parameters） › 记录 chunk_configuration › 名称（name） | 新增 | 未记录 | chunk_configuration |
| 参数（parameters） › 记录 chunk_configuration › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 chunk_configuration › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:body.chunk_configuration |
| 参数（parameters） › 记录 chunk_configuration › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 collection_description › 名称（name） | 新增 | 未记录 | collection_description |
| 参数（parameters） › 记录 collection_description › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 collection_description › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:body.collection_description |
| 参数（parameters） › 记录 collection_description › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 collection_id › 名称（name） | 新增 | 未记录 | collection_id |
| 参数（parameters） › 记录 collection_id › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 collection_id › 参数路径（route_mappings） | 新增 | 未记录 | • /collections/{collection_id} |
| 参数（parameters） › 记录 collection_id › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 collection_name › 名称（name） | 新增 | 未记录 | collection_name |
| 参数（parameters） › 记录 collection_name › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 collection_name › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:body.collection_name |
| 参数（parameters） › 记录 collection_name › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 fields › 名称（name） | 新增 | 未记录 | fields |
| 参数（parameters） › 记录 fields › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 fields › 参数路径（route_mappings） | 新增 | 未记录 | • /collections/{collection_id}/documents/{file_id}:body.fields |
| 参数（parameters） › 记录 fields › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 file_id › 名称（name） | 新增 | 未记录 | file_id |
| 参数（parameters） › 记录 file_id › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 file_id › 参数路径（route_mappings） | 新增 | 未记录 | • /collections/{collection_id}/documents/{file_id} |
| 参数（parameters） › 记录 file_id › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 filter › 名称（name） | 新增 | 未记录 | filter |
| 参数（parameters） › 记录 filter › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 filter › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:query.filter |
| 参数（parameters） › 记录 filter › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 index_configuration › 名称（name） | 新增 | 未记录 | index_configuration |
| 参数（parameters） › 记录 index_configuration › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 index_configuration › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:body.index_configuration |
| 参数（parameters） › 记录 index_configuration › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 limit › 名称（name） | 新增 | 未记录 | limit |
| 参数（parameters） › 记录 limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 limit › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:query.limit |
| 参数（parameters） › 记录 limit › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 order › 名称（name） | 新增 | 未记录 | order |
| 参数（parameters） › 记录 order › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 order › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:query.order |
| 参数（parameters） › 记录 order › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 pagination_token › 名称（name） | 新增 | 未记录 | pagination_token |
| 参数（parameters） › 记录 pagination_token › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 pagination_token › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:query.pagination_token |
| 参数（parameters） › 记录 pagination_token › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 sort_by › 名称（name） | 新增 | 未记录 | sort_by |
| 参数（parameters） › 记录 sort_by › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 sort_by › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:query.sort_by |
| 参数（parameters） › 记录 sort_by › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 team_id › 名称（name） | 新增 | 未记录 | team_id |
| 参数（parameters） › 记录 team_id › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 team_id › 参数路径（route_mappings） | 新增 | 未记录 | • /collections:query.team_id |
| 参数（parameters） › 记录 team_id › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 add-document › callability › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 add-document › callability › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › callability | 新增 | 未记录 | documented_only |
| routes › 记录 add-document › documentation › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 add-document › documentation › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| routes › 记录 add-document › endpoint ref › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 该 Route 使用 management Endpoint。 |
| routes › 记录 add-document › endpoint ref › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › endpoint ref | 新增 | 未记录 | management |
| routes › 记录 add-document › ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections API 参考列出 POST /collections/{collection_id}/documents/{file_id}；使用 Management API Key。 |
| routes › 记录 add-document › ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › ID（id） | 新增 | 未记录 | add-document |
| routes › 记录 add-document › HTTP 方法（method） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 add-document › HTTP 方法（method） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 add-document › operation kind › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 按官方用途 collection_management 分类。 |
| routes › 记录 add-document › operation kind › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › operation kind | 新增 | 未记录 | collection_management |
| routes › 记录 add-document › API 路径（path_template） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /collections/{collection_id}/documents/{file_id}。 |
| routes › 记录 add-document › API 路径（path_template） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › API 路径（path_template） | 新增 | 未记录 | /collections/{collection_id}/documents/{file_id} |
| routes › 记录 add-document › protocol › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 add-document › protocol › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 add-document › protocol | 新增 | 未记录 | rest-json |
| routes › 记录 create-collection › callability › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 create-collection › callability › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › callability | 新增 | 未记录 | documented_only |
| routes › 记录 create-collection › documentation › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 create-collection › documentation › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| routes › 记录 create-collection › endpoint ref › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 该 Route 使用 management Endpoint。 |
| routes › 记录 create-collection › endpoint ref › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › endpoint ref | 新增 | 未记录 | management |
| routes › 记录 create-collection › ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections API 参考列出 POST /collections；使用 Management API Key。 |
| routes › 记录 create-collection › ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › ID（id） | 新增 | 未记录 | create-collection |
| routes › 记录 create-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 create-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 create-collection › operation kind › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 按官方用途 collection_management 分类。 |
| routes › 记录 create-collection › operation kind › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › operation kind | 新增 | 未记录 | collection_management |
| routes › 记录 create-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /collections。 |
| routes › 记录 create-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › API 路径（path_template） | 新增 | 未记录 | /collections |
| routes › 记录 create-collection › protocol › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 create-collection › protocol › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 create-collection › protocol | 新增 | 未记录 | rest-json |
| routes › 记录 delete-collection › callability › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 delete-collection › callability › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › callability | 新增 | 未记录 | documented_only |
| routes › 记录 delete-collection › documentation › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 delete-collection › documentation › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| routes › 记录 delete-collection › endpoint ref › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 该 Route 使用 management Endpoint。 |
| routes › 记录 delete-collection › endpoint ref › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › endpoint ref | 新增 | 未记录 | management |
| routes › 记录 delete-collection › ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections API 参考列出 DELETE /collections/{collection_id}；使用 Management API Key。 |
| routes › 记录 delete-collection › ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › ID（id） | 新增 | 未记录 | delete-collection |
| routes › 记录 delete-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出 DELETE 方法。 |
| routes › 记录 delete-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › HTTP 方法（method） | 新增 | 未记录 | DELETE |
| routes › 记录 delete-collection › operation kind › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 按官方用途 collection_management 分类。 |
| routes › 记录 delete-collection › operation kind › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › operation kind | 新增 | 未记录 | collection_management |
| routes › 记录 delete-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /collections/{collection_id}。 |
| routes › 记录 delete-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › API 路径（path_template） | 新增 | 未记录 | /collections/{collection_id} |
| routes › 记录 delete-collection › protocol › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 delete-collection › protocol › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 delete-collection › protocol | 新增 | 未记录 | rest-json |
| routes › 记录 get-collection › callability › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 get-collection › callability › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › callability | 新增 | 未记录 | documented_only |
| routes › 记录 get-collection › documentation › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 get-collection › documentation › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| routes › 记录 get-collection › endpoint ref › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 该 Route 使用 management Endpoint。 |
| routes › 记录 get-collection › endpoint ref › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › endpoint ref | 新增 | 未记录 | management |
| routes › 记录 get-collection › ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections API 参考列出 GET /collections/{collection_id}；使用 Management API Key。 |
| routes › 记录 get-collection › ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › ID（id） | 新增 | 未记录 | get-collection |
| routes › 记录 get-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 get-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 get-collection › operation kind › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 按官方用途 collection_management 分类。 |
| routes › 记录 get-collection › operation kind › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › operation kind | 新增 | 未记录 | collection_management |
| routes › 记录 get-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /collections/{collection_id}。 |
| routes › 记录 get-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › API 路径（path_template） | 新增 | 未记录 | /collections/{collection_id} |
| routes › 记录 get-collection › protocol › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 get-collection › protocol › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 get-collection › protocol | 新增 | 未记录 | rest-json |
| routes › 记录 list-collections › callability › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 list-collections › callability › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › callability | 新增 | 未记录 | documented_only |
| routes › 记录 list-collections › documentation › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 list-collections › documentation › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| routes › 记录 list-collections › endpoint ref › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 该 Route 使用 management Endpoint。 |
| routes › 记录 list-collections › endpoint ref › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › endpoint ref | 新增 | 未记录 | management |
| routes › 记录 list-collections › ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections API 参考列出 GET /collections；使用 Management API Key。 |
| routes › 记录 list-collections › ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › ID（id） | 新增 | 未记录 | list-collections |
| routes › 记录 list-collections › HTTP 方法（method） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 list-collections › HTTP 方法（method） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 list-collections › operation kind › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 按官方用途 collection_management 分类。 |
| routes › 记录 list-collections › operation kind › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › operation kind | 新增 | 未记录 | collection_management |
| routes › 记录 list-collections › API 路径（path_template） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /collections。 |
| routes › 记录 list-collections › API 路径（path_template） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › API 路径（path_template） | 新增 | 未记录 | /collections |
| routes › 记录 list-collections › protocol › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 list-collections › protocol › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 list-collections › protocol | 新增 | 未记录 | rest-json |
| routes › 记录 remove-document › callability › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 remove-document › callability › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › callability | 新增 | 未记录 | documented_only |
| routes › 记录 remove-document › documentation › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 remove-document › documentation › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| routes › 记录 remove-document › endpoint ref › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 该 Route 使用 management Endpoint。 |
| routes › 记录 remove-document › endpoint ref › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › endpoint ref | 新增 | 未记录 | management |
| routes › 记录 remove-document › ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections API 参考列出 DELETE /collections/{collection_id}/documents/{file_id}；使用 Management API Key。 |
| routes › 记录 remove-document › ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › ID（id） | 新增 | 未记录 | remove-document |
| routes › 记录 remove-document › HTTP 方法（method） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出 DELETE 方法。 |
| routes › 记录 remove-document › HTTP 方法（method） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › HTTP 方法（method） | 新增 | 未记录 | DELETE |
| routes › 记录 remove-document › operation kind › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 按官方用途 collection_management 分类。 |
| routes › 记录 remove-document › operation kind › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › operation kind | 新增 | 未记录 | collection_management |
| routes › 记录 remove-document › API 路径（path_template） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /collections/{collection_id}/documents/{file_id}。 |
| routes › 记录 remove-document › API 路径（path_template） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › API 路径（path_template） | 新增 | 未记录 | /collections/{collection_id}/documents/{file_id} |
| routes › 记录 remove-document › protocol › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 remove-document › protocol › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 remove-document › protocol | 新增 | 未记录 | rest-json |
| routes › 记录 update-collection › callability › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 update-collection › callability › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › callability | 新增 | 未记录 | documented_only |
| routes › 记录 update-collection › documentation › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 update-collection › documentation › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/collections/collection |
| routes › 记录 update-collection › endpoint ref › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 该 Route 使用 management Endpoint。 |
| routes › 记录 update-collection › endpoint ref › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › endpoint ref | 新增 | 未记录 | management |
| routes › 记录 update-collection › ID（id） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Collections API 参考列出 PUT /collections/{collection_id}；使用 Management API Key。 |
| routes › 记录 update-collection › ID（id） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › ID（id） | 新增 | 未记录 | update-collection |
| routes › 记录 update-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出 PUT 方法。 |
| routes › 记录 update-collection › HTTP 方法（method） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › HTTP 方法（method） | 新增 | 未记录 | PUT |
| routes › 记录 update-collection › operation kind › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | Route 按官方用途 collection_management 分类。 |
| routes › 记录 update-collection › operation kind › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › operation kind | 新增 | 未记录 | collection_management |
| routes › 记录 update-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /collections/{collection_id}。 |
| routes › 记录 update-collection › API 路径（path_template） › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › API 路径（path_template） | 新增 | 未记录 | /collections/{collection_id} |
| routes › 记录 update-collection › protocol › evidence › 记录 xai-collections-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 update-collection › protocol › evidence › 记录 xai-collections-api › source ref | 新增 | 未记录 | xai-collections-api |
| routes › 记录 update-collection › protocol | 新增 | 未记录 | rest-json |

#### Capability / collections-file-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | The official guide exposes Collections Search through the Responses API file_search tool. |
| ID（id） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| ID（id） | 新增 | 未记录 | collections-file-search |
| 类别（kind） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | The Responses API-compatible file_search tool searches uploaded xAI collections. |
| 类别（kind） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| 类别（kind） | 新增 | 未记录 | file_search |
| links › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | Official Collections Search tool documentation. |
| links › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/collections-search |

#### Capability / collections-file-search › Operation / collections-file-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | The official Collections Search guide documents the Responses API file_search request and its collection settings. |
| ID（id） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| ID（id） | 新增 | 未记录 | collections-file-search |
| 输入（input） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | The official request example provides a user message through Responses input. |
| 输入（input） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| 输入（input） › 记录 input[].content › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input[].content › 名称（name） | 新增 | 未记录 | input[].content |
| 输入（input） › 记录 input[].content › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | The official Collections Search guide documents the Responses API file_search request and its collection settings. |
| 类别（kind） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| 类别（kind） | 新增 | 未记录 | file_search |
| 输出（output） › evidence › 记录 xai-tool-streaming-sync › assertion | 新增 | 未记录 | The official guide documents optional file_search results and response citations. |
| 输出（output） › evidence › 记录 xai-tool-streaming-sync › source ref | 新增 | 未记录 | xai-tool-streaming-sync |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • output[].type=file_search_call<br>• file_search_call.results[]<br>• response.output_text<br>• citations[] |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | The official Collections Search guide documents the Responses API file_search request and its collection settings. |
| 参数（parameters） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| 参数（parameters） › 记录 include[] › 可选值（enum） | 新增 | 未记录 | • file_search_call.results |
| 参数（parameters） › 记录 include[] › 名称（name） | 新增 | 未记录 | include[] |
| 参数（parameters） › 记录 include[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include[] › 参数路径（route_mappings） | 新增 | 未记录 | • body.include[] |
| 参数（parameters） › 记录 include[] › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].max_num_results › 名称（name） | 新增 | 未记录 | tools[].max_num_results |
| 参数（parameters） › 记录 tools[].max_num_results › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].max_num_results › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].max_num_results |
| 参数（parameters） › 记录 tools[].max_num_results › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • file_search |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 名称（name） | 新增 | 未记录 | tools[].vector_store_ids[] |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].vector_store_ids |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 类型（type） | 新增 | 未记录 | array |
| routes › 记录 collections-file-search › callability › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 collections-file-search › callability › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › callability | 新增 | 未记录 | documented_only |
| routes › 记录 collections-file-search › documentation › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 collections-file-search › documentation › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/collections-search |
| routes › 记录 collections-file-search › endpoint ref › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 collections-file-search › endpoint ref › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 collections-file-search › ID（id） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | The official Collections Search guide documents the Responses API file_search request and its collection settings. |
| routes › 记录 collections-file-search › ID（id） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › ID（id） | 新增 | 未记录 | collections-file-search |
| routes › 记录 collections-file-search › HTTP 方法（method） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 collections-file-search › HTTP 方法（method） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 collections-file-search › operation kind › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | Route 按官方用途 file_search 分类。 |
| routes › 记录 collections-file-search › operation kind › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › operation kind | 新增 | 未记录 | file_search |
| routes › 记录 collections-file-search › API 路径（path_template） › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| routes › 记录 collections-file-search › API 路径（path_template） › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › API 路径（path_template） | 新增 | 未记录 | /responses |
| routes › 记录 collections-file-search › protocol › evidence › 记录 xai-collections-search › assertion | 新增 | 未记录 | responses API 协议。 |
| routes › 记录 collections-file-search › protocol › evidence › 记录 xai-collections-search › source ref | 新增 | 未记录 | xai-collections-search |
| routes › 记录 collections-file-search › protocol | 新增 | 未记录 | responses |

#### Capability / file-storage

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Files API 支持上传、列出、读取、删除和下载文件。 |
| ID（id） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| ID（id） | 新增 | 未记录 | file-storage |
| 类别（kind） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 文件存储是独立 API 能力。 |
| 类别（kind） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| 类别（kind） | 新增 | 未记录 | file_storage |
| links › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 Files API 文档。 |
| links › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/files/managing-files |
| prices › 记录 0 › capability ref › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 费率关联到 xAI Files 存储服务。 |
| prices › 记录 0 › capability ref › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › capability ref | 新增 | 未记录 | file-storage |
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 保留 Files 存储与下载的公开官方计量价格。 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 定价页明确 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Files 存储费率为 USD/GiB/day。 |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/file-storage |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Files 存储费率为 USD/GiB/day。 |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/file-storage |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | stored_data |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_gib_day |
| prices › 记录 0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.025 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 定价页明确 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Files 下载费率为 USD/GiB downloaded。 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/file-downloads |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方 Files 下载费率为 USD/GiB downloaded。 |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #files-and-collections-pricing/file-downloads |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | downloaded_data |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_gib_download |
| prices › 记录 0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / file-storage › Operation / file_management

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 文件操作来自官方 Files API。 |
| ID（id） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| ID（id） | 新增 | 未记录 | file_management |
| 输入（input） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Input field names are extracted from official multipart upload examples. |
| 输入（input） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| 输入（input） › 记录 file › 类别（kind） | 新增 | 未记录 | file |
| 输入（input） › 记录 file › 名称（name） | 新增 | 未记录 | file |
| 输入（input） › 记录 file › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 文件操作来自官方 Files API。 |
| 类别（kind） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| 类别（kind） | 新增 | 未记录 | file_management |
| 输出（output） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Response fields and binary content are extracted from the official File Object table and content documentation. |
| 输出（output） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| 输出（output） › 第 1 项 › fields | 新增 | 未记录 | • id<br>• filename<br>• bytes<br>• created_at<br>• expires_at<br>• object<br>• purpose<br>• data[]<br>• pagination_token<br>• deleted |
| 输出（output） › 第 1 项 › 类别（kind） | 新增 | 未记录 | structured |
| 输出（output） › 第 2 项 › artifact › 类别（kind） | 新增 | 未记录 | binary |
| 输出（output） › 第 2 项 › 类别（kind） | 新增 | 未记录 | file |
| 参数（parameters） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Parameters and descriptions are extracted from official upload and list documentation. |
| 参数（parameters） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| 参数（parameters） › 记录 expires_after › 说明（description） | 新增 | 未记录 | `expires_after` is set in seconds, measured from upload time. It must be between `3600` (1 hour) and `2592000` (30 days), inclusive. Omit the field to keep the file permanently. |
| 参数（parameters） › 记录 expires_after › 最大值（max） | 新增 | 未记录 | 2,592,000 |
| 参数（parameters） › 记录 expires_after › 最小值（min） | 新增 | 未记录 | 3,600 |
| 参数（parameters） › 记录 expires_after › 名称（name） | 新增 | 未记录 | expires_after |
| 参数（parameters） › 记录 expires_after › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 expires_after › 参数路径（route_mappings） | 新增 | 未记录 | • /files:form.expires_after |
| 参数（parameters） › 记录 expires_after › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 file_id › 名称（name） | 新增 | 未记录 | file_id |
| 参数（parameters） › 记录 file_id › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 file_id › 参数路径（route_mappings） | 新增 | 未记录 | • /files/{file_id}:path.file_id |
| 参数（parameters） › 记录 file_id › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 limit › 默认值（default） | 新增 | 未记录 | 100 |
| 参数（parameters） › 记录 limit › 说明（description） | 新增 | 未记录 | Maximum number of files to return. If not specified, uses the server default of 100. Maximum is 100. |
| 参数（parameters） › 记录 limit › 最大值（max） | 新增 | 未记录 | 100 |
| 参数（parameters） › 记录 limit › 名称（name） | 新增 | 未记录 | limit |
| 参数（parameters） › 记录 limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 limit › 参数路径（route_mappings） | 新增 | 未记录 | • /files:query.limit |
| 参数（parameters） › 记录 limit › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 order › 说明（description） | 新增 | 未记录 | Sort order. Either `"asc"` (ascending) or `"desc"` (descending). Defaults to `"desc"`. |
| 参数（parameters） › 记录 order › 可选值（enum） | 新增 | 未记录 | • asc<br>• desc |
| 参数（parameters） › 记录 order › 名称（name） | 新增 | 未记录 | order |
| 参数（parameters） › 记录 order › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 order › 参数路径（route_mappings） | 新增 | 未记录 | • /files:query.order |
| 参数（parameters） › 记录 order › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 pagination_token › 说明（description） | 新增 | 未记录 | Pass the `pagination_token` returned by the previous response to fetch the next page. Omit it for the first page. |
| 参数（parameters） › 记录 pagination_token › 名称（name） | 新增 | 未记录 | pagination_token |
| 参数（parameters） › 记录 pagination_token › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 pagination_token › 参数路径（route_mappings） | 新增 | 未记录 | • /files:query.pagination_token |
| 参数（parameters） › 记录 pagination_token › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 purpose › 说明（description） | 新增 | 未记录 | Echoes the `purpose` value sent at upload time. SpaceXSI does not enforce or interpret this field; it is stored for OpenAI SDK compatibility. Setting `"assistants"` is the conventional choice. |
| 参数（parameters） › 记录 purpose › 名称（name） | 新增 | 未记录 | purpose |
| 参数（parameters） › 记录 purpose › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 purpose › 参数路径（route_mappings） | 新增 | 未记录 | • /files:form.purpose |
| 参数（parameters） › 记录 purpose › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 sort_by › 说明（description） | 新增 | 未记录 | Field to sort by. Options: `"created_at"`, `"filename"`, or `"size"`. Defaults to `"filename"`. |
| 参数（parameters） › 记录 sort_by › 可选值（enum） | 新增 | 未记录 | • created_at<br>• filename<br>• size |
| 参数（parameters） › 记录 sort_by › 名称（name） | 新增 | 未记录 | sort_by |
| 参数（parameters） › 记录 sort_by › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 sort_by › 参数路径（route_mappings） | 新增 | 未记录 | • /files:query.sort_by |
| 参数（parameters） › 记录 sort_by › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 delete-file › callability › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 delete-file › callability › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › callability | 新增 | 未记录 | documented_only |
| routes › 记录 delete-file › documentation › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 delete-file › documentation › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › documentation | 新增 | 未记录 | https://docs.x.ai/developers/files/managing-files |
| routes › 记录 delete-file › endpoint ref › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 delete-file › endpoint ref › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 delete-file › ID（id） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Files 文档列出 DELETE /files/{file_id} 操作。 |
| routes › 记录 delete-file › ID（id） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › ID（id） | 新增 | 未记录 | delete-file |
| routes › 记录 delete-file › HTTP 方法（method） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出 DELETE 方法。 |
| routes › 记录 delete-file › HTTP 方法（method） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › HTTP 方法（method） | 新增 | 未记录 | DELETE |
| routes › 记录 delete-file › operation kind › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 按官方用途 file_management 分类。 |
| routes › 记录 delete-file › operation kind › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › operation kind | 新增 | 未记录 | file_management |
| routes › 记录 delete-file › API 路径（path_template） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /files/{file_id}。 |
| routes › 记录 delete-file › API 路径（path_template） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › API 路径（path_template） | 新增 | 未记录 | /files/{file_id} |
| routes › 记录 delete-file › protocol › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 delete-file › protocol › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 delete-file › protocol | 新增 | 未记录 | https |
| routes › 记录 download-file › callability › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 download-file › callability › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › callability | 新增 | 未记录 | documented_only |
| routes › 记录 download-file › documentation › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 download-file › documentation › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › documentation | 新增 | 未记录 | https://docs.x.ai/developers/files/managing-files |
| routes › 记录 download-file › endpoint ref › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 download-file › endpoint ref › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 download-file › ID（id） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Files 文档列出 GET /files/{file_id}/content 操作。 |
| routes › 记录 download-file › ID（id） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › ID（id） | 新增 | 未记录 | download-file |
| routes › 记录 download-file › HTTP 方法（method） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 download-file › HTTP 方法（method） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 download-file › operation kind › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 按官方用途 file_management 分类。 |
| routes › 记录 download-file › operation kind › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › operation kind | 新增 | 未记录 | file_management |
| routes › 记录 download-file › API 路径（path_template） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /files/{file_id}/content。 |
| routes › 记录 download-file › API 路径（path_template） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › API 路径（path_template） | 新增 | 未记录 | /files/{file_id}/content |
| routes › 记录 download-file › protocol › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 download-file › protocol › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 download-file › protocol | 新增 | 未记录 | https |
| routes › 记录 get-file › callability › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 get-file › callability › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › callability | 新增 | 未记录 | documented_only |
| routes › 记录 get-file › documentation › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 get-file › documentation › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › documentation | 新增 | 未记录 | https://docs.x.ai/developers/files/managing-files |
| routes › 记录 get-file › endpoint ref › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 get-file › endpoint ref › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 get-file › ID（id） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Files 文档列出 GET /files/{file_id} 操作。 |
| routes › 记录 get-file › ID（id） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › ID（id） | 新增 | 未记录 | get-file |
| routes › 记录 get-file › HTTP 方法（method） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 get-file › HTTP 方法（method） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 get-file › operation kind › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 按官方用途 file_management 分类。 |
| routes › 记录 get-file › operation kind › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › operation kind | 新增 | 未记录 | file_management |
| routes › 记录 get-file › API 路径（path_template） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /files/{file_id}。 |
| routes › 记录 get-file › API 路径（path_template） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › API 路径（path_template） | 新增 | 未记录 | /files/{file_id} |
| routes › 记录 get-file › protocol › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 get-file › protocol › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 get-file › protocol | 新增 | 未记录 | https |
| routes › 记录 list-files › callability › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 list-files › callability › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › callability | 新增 | 未记录 | documented_only |
| routes › 记录 list-files › documentation › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 list-files › documentation › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › documentation | 新增 | 未记录 | https://docs.x.ai/developers/files/managing-files |
| routes › 记录 list-files › endpoint ref › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 list-files › endpoint ref › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 list-files › ID（id） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Files 文档列出 GET /files 操作。 |
| routes › 记录 list-files › ID（id） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › ID（id） | 新增 | 未记录 | list-files |
| routes › 记录 list-files › HTTP 方法（method） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 list-files › HTTP 方法（method） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 list-files › operation kind › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 按官方用途 file_management 分类。 |
| routes › 记录 list-files › operation kind › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › operation kind | 新增 | 未记录 | file_management |
| routes › 记录 list-files › API 路径（path_template） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /files。 |
| routes › 记录 list-files › API 路径（path_template） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › API 路径（path_template） | 新增 | 未记录 | /files |
| routes › 记录 list-files › protocol › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 list-files › protocol › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 list-files › protocol | 新增 | 未记录 | https |
| routes › 记录 upload-file › callability › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 upload-file › callability › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › callability | 新增 | 未记录 | documented_only |
| routes › 记录 upload-file › documentation › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 upload-file › documentation › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › documentation | 新增 | 未记录 | https://docs.x.ai/developers/files/managing-files |
| routes › 记录 upload-file › endpoint ref › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 upload-file › endpoint ref › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 upload-file › ID（id） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Files 文档列出 POST /files 操作。 |
| routes › 记录 upload-file › ID（id） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › ID（id） | 新增 | 未记录 | upload-file |
| routes › 记录 upload-file › HTTP 方法（method） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 upload-file › HTTP 方法（method） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 upload-file › operation kind › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | Route 按官方用途 file_management 分类。 |
| routes › 记录 upload-file › operation kind › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › operation kind | 新增 | 未记录 | file_management |
| routes › 记录 upload-file › API 路径（path_template） › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /files。 |
| routes › 记录 upload-file › API 路径（path_template） › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › API 路径（path_template） | 新增 | 未记录 | /files |
| routes › 记录 upload-file › protocol › evidence › 记录 xai-files-api › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 upload-file › protocol › evidence › 记录 xai-files-api › source ref | 新增 | 未记录 | xai-files-api |
| routes › 记录 upload-file › protocol | 新增 | 未记录 | https |

#### Capability / speech-to-text

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 官方 Voice 文档提供语音转文字 API。 |
| ID（id） › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| ID（id） | 新增 | 未记录 | speech-to-text |
| 类别（kind） › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 语音识别 API 作为独立操作展示；模型和模型价格保留在对应 Offering。 |
| 类别（kind） › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| 类别（kind） | 新增 | 未记录 | transcription |
| links › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 官方 Speech-to-Text 指南。 |
| links › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text |

#### Capability / speech-to-text › Operation / transcription

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 文档给出 REST/Streaming Speech-to-Text 能力。 |
| ID（id） › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| ID（id） | 新增 | 未记录 | transcription |
| 输入（input） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | The official guide documents REST audio file or URL input and raw binary audio frames for streaming. |
| 输入（input） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| 输入（input） › 记录 audio › 类别（kind） | 新增 | 未记录 | audio |
| 输入（input） › 记录 audio › media › max bytes | 新增 | 未记录 | 524,288,000 |
| 输入（input） › 记录 audio › 名称（name） | 新增 | 未记录 | audio |
| 输入（input） › 记录 audio › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 文档给出 REST/Streaming Speech-to-Text 能力。 |
| 类别（kind） › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| 类别（kind） | 新增 | 未记录 | transcription |
| 输出（output） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | REST response fields and streaming transcript events are collected from the official guide. |
| 输出（output） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| 输出（output） › 第 1 项 › fields | 新增 | 未记录 | • text<br>• language<br>• duration<br>• words<br>• channels |
| 输出（output） › 第 1 项 › 类别（kind） | 新增 | 未记录 | structured |
| 输出（output） › 第 2 项 › fields | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>event.type=transcript.created</li><li>event.type=transcript.partial</li><li>event.type=transcript.done</li><li>event.type=error</li><li>event.text</li><li>event.is_final</li><li>event.duration</li><li>event.language</li><li>event.words</li><li>event.channels</li><li>event.channel_index</li><li>event.speech_final</li><li>event.chunk_final</li><li>event.end_of_turn_confidence</li></ul></details> |
| 输出（output） › 第 2 项 › 类别（kind） | 新增 | 未记录 | structured |
| 输出（output） › 第 2 项 › streaming | 新增 | 未记录 | 是 |
| 参数（parameters） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | REST multipart fields and WebSocket query parameters are extracted from the official Speech-to-Text tables. |
| 参数（parameters） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| 参数（parameters） › 记录 audio_format › 说明（description） | 新增 | 未记录 | Format hint for raw/headerless audio: `pcm`, `mulaw`, `alaw`. Container formats are auto-detected — do not set this field for MP3, WAV, etc. |
| 参数（parameters） › 记录 audio_format › 名称（name） | 新增 | 未记录 | audio_format |
| 参数（parameters） › 记录 audio_format › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 audio_format › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.audio_format |
| 参数（parameters） › 记录 audio_format › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 channels › 说明（description） | 新增 | 未记录 | Number of audio channels (2–8). Only required for multichannel raw audio. Auto-detected for container formats. |
| 参数（parameters） › 记录 channels › 名称（name） | 新增 | 未记录 | channels |
| 参数（parameters） › 记录 channels › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 channels › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.channels<br>• /stt:query.channels |
| 参数（parameters） › 记录 channels › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 diarize › 说明（description） | 新增 | 未记录 | When `true`, enables speaker diarization. Each word in the response includes a `speaker` field (integer) identifying the detected speaker. |
| 参数（parameters） › 记录 diarize › 名称（name） | 新增 | 未记录 | diarize |
| 参数（parameters） › 记录 diarize › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 diarize › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.diarize<br>• /stt:query.diarize |
| 参数（parameters） › 记录 diarize › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 encoding › 默认值（default） | 新增 | 未记录 | pcm |
| 参数（parameters） › 记录 encoding › 说明（description） | 新增 | 未记录 | Audio encoding: `pcm`, `mulaw`, `alaw`, or `opus`. See [Opus Streaming](#opus-streaming). |
| 参数（parameters） › 记录 encoding › 可选值（enum） | 新增 | 未记录 | • pcm<br>• mulaw<br>• alaw<br>• opus |
| 参数（parameters） › 记录 encoding › 名称（name） | 新增 | 未记录 | encoding |
| 参数（parameters） › 记录 encoding › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 encoding › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:query.encoding |
| 参数（parameters） › 记录 encoding › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 endpointing › 默认值（default） | 新增 | 未记录 | 400 |
| 参数（parameters） › 记录 endpointing › 说明（description） | 新增 | 未记录 | Silence duration (ms) before utterance-final event. Range: 0–5000. `0` = fire on any VAD silence boundary. |
| 参数（parameters） › 记录 endpointing › 最大值（max） | 新增 | 未记录 | 5,000 |
| 参数（parameters） › 记录 endpointing › 最小值（min） | 新增 | 未记录 | 0 |
| 参数（parameters） › 记录 endpointing › 名称（name） | 新增 | 未记录 | endpointing |
| 参数（parameters） › 记录 endpointing › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 endpointing › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:query.endpointing |
| 参数（parameters） › 记录 endpointing › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 filler_words › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 filler_words › 说明（description） | 新增 | 未记录 | When `true`, filler words (e.g. "uh", "um", "er") are included in the transcript. When `false` (default), filler words are automatically removed from the transcript text and the `words` array. |
| 参数（parameters） › 记录 filler_words › 名称（name） | 新增 | 未记录 | filler_words |
| 参数（parameters） › 记录 filler_words › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 filler_words › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.filler_words<br>• /stt:query.filler_words |
| 参数（parameters） › 记录 filler_words › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 format › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 format › 说明（description） | 新增 | 未记录 | When `true`, enables Inverse Text Normalization — converts spoken numbers/currency to written form (e.g. "one hundred dollars" → "$100"). Requires `language`. See [Supported Languages](#supported-languages) for coverage. |
| 参数（parameters） › 记录 format › 名称（name） | 新增 | 未记录 | format |
| 参数（parameters） › 记录 format › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 format › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.format<br>• /stt:query.format |
| 参数（parameters） › 记录 format › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 interim_results › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 interim_results › 说明（description） | 新增 | 未记录 | When `true`, emit partial transcripts `is_final=false` every ~500 ms. |
| 参数（parameters） › 记录 interim_results › 名称（name） | 新增 | 未记录 | interim_results |
| 参数（parameters） › 记录 interim_results › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 interim_results › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:query.interim_results |
| 参数（parameters） › 记录 interim_results › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 keyterm › 说明（description） | 新增 | 未记录 | A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters. |
| 参数（parameters） › 记录 keyterm › 名称（name） | 新增 | 未记录 | keyterm |
| 参数（parameters） › 记录 keyterm › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 keyterm › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.keyterm<br>• /stt:query.keyterm |
| 参数（parameters） › 记录 keyterm › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 language › 说明（description） | 新增 | 未记录 | Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages). |
| 参数（parameters） › 记录 language › 名称（name） | 新增 | 未记录 | language |
| 参数（parameters） › 记录 language › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 language › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.language<br>• /stt:query.language |
| 参数（parameters） › 记录 language › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 model › 默认值（default） | 新增 | 未记录 | grok-voice-transcribe-2.0 |
| 参数（parameters） › 记录 model › 说明（description） | 新增 | 未记录 | `grok-voice-transcribe-2.0` (default). |
| 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.model<br>• /stt:query.model |
| 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 multichannel › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 multichannel › 说明（description） | 新增 | 未记录 | When `true`, transcribes each audio channel independently. Results returned in the `channels` array. |
| 参数（parameters） › 记录 multichannel › 名称（name） | 新增 | 未记录 | multichannel |
| 参数（parameters） › 记录 multichannel › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 multichannel › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.multichannel<br>• /stt:query.multichannel |
| 参数（parameters） › 记录 multichannel › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 sample_rate › 说明（description） | 新增 | 未记录 | Sample rate in Hz. Only required for raw audio (`pcm`, `mulaw`, `alaw`). Supported: `8000`, `16000`, `22050`, `24000`, `44100`, `48000`. |
| 参数（parameters） › 记录 sample_rate › 可选值（enum） | 新增 | 未记录 | • 8,000<br>• 16,000<br>• 22,050<br>• 24,000<br>• 44,100<br>• 48,000 |
| 参数（parameters） › 记录 sample_rate › 名称（name） | 新增 | 未记录 | sample_rate |
| 参数（parameters） › 记录 sample_rate › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 sample_rate › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.sample_rate<br>• /stt:query.sample_rate |
| 参数（parameters） › 记录 sample_rate › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 smart_turn › 说明（description） | 新增 | 未记录 | End-of-turn detection threshold (0.0–1.0). When set, enables Smart Turn — an ML model predicts whether the speaker has finished their thought at each silence boundary. See [Smart Turn](#smart-turn). |
| 参数（parameters） › 记录 smart_turn › 名称（name） | 新增 | 未记录 | smart_turn |
| 参数（parameters） › 记录 smart_turn › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 smart_turn › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:query.smart_turn |
| 参数（parameters） › 记录 smart_turn › 类型（type） | 新增 | 未记录 | number |
| 参数（parameters） › 记录 smart_turn_timeout › 说明（description） | 新增 | 未记录 | Maximum silence duration (ms) before forcing `speech_final`, even when the Smart Turn model predicts the speaker hasn't finished. Range: 1–5000. Only applies when `smart_turn` is enabled. See [Smart Turn](#smart-turn). |
| 参数（parameters） › 记录 smart_turn_timeout › 最大值（max） | 新增 | 未记录 | 5,000 |
| 参数（parameters） › 记录 smart_turn_timeout › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 smart_turn_timeout › 名称（name） | 新增 | 未记录 | smart_turn_timeout |
| 参数（parameters） › 记录 smart_turn_timeout › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 smart_turn_timeout › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:query.smart_turn_timeout |
| 参数（parameters） › 记录 smart_turn_timeout › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 url › 说明（description） | 新增 | 未记录 | URL of an audio file to download and transcribe (server-side). |
| 参数（parameters） › 记录 url › 名称（name） | 新增 | 未记录 | url |
| 参数（parameters） › 记录 url › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 url › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.url |
| 参数（parameters） › 记录 url › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 vad_threshold › 说明（description） | 新增 | 未记录 | Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio segments scoring below the threshold are treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate. |
| 参数（parameters） › 记录 vad_threshold › 名称（name） | 新增 | 未记录 | vad_threshold |
| 参数（parameters） › 记录 vad_threshold › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 vad_threshold › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.vad_threshold<br>• /stt:query.vad_threshold |
| 参数（parameters） › 记录 vad_threshold › 类型（type） | 新增 | 未记录 | number |
| routes › 记录 speech-to-text-streaming › callability › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 speech-to-text-streaming › callability › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › callability | 新增 | 未记录 | documented_only |
| routes › 记录 speech-to-text-streaming › documentation › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 speech-to-text-streaming › documentation › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text |
| routes › 记录 speech-to-text-streaming › endpoint ref › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 该 Route 使用 global-wss Endpoint。 |
| routes › 记录 speech-to-text-streaming › endpoint ref › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › endpoint ref | 新增 | 未记录 | global-wss |
| routes › 记录 speech-to-text-streaming › ID（id） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | The official Speech-to-Text guide documents real-time transcription over WebSocket. |
| routes › 记录 speech-to-text-streaming › ID（id） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › ID（id） | 新增 | 未记录 | speech-to-text-streaming |
| routes › 记录 speech-to-text-streaming › HTTP 方法（method） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| routes › 记录 speech-to-text-streaming › HTTP 方法（method） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › HTTP 方法（method） | 新增 | 未记录 | GET |
| routes › 记录 speech-to-text-streaming › operation kind › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | Route 按官方用途 transcription 分类。 |
| routes › 记录 speech-to-text-streaming › operation kind › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › operation kind | 新增 | 未记录 | transcription |
| routes › 记录 speech-to-text-streaming › API 路径（path_template） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /stt。 |
| routes › 记录 speech-to-text-streaming › API 路径（path_template） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › API 路径（path_template） | 新增 | 未记录 | /stt |
| routes › 记录 speech-to-text-streaming › protocol › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | websocket API 协议。 |
| routes › 记录 speech-to-text-streaming › protocol › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › protocol | 新增 | 未记录 | websocket |
| routes › 记录 speech-to-text-streaming › provider model ids › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-voice-transcribe-2.0；该 Route 文档说明其所属 API。 |
| routes › 记录 speech-to-text-streaming › provider model ids › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text-streaming › provider model ids | 新增 | 未记录 | • grok-voice-transcribe-2.0 |
| routes › 记录 speech-to-text › callability › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 speech-to-text › callability › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › callability | 新增 | 未记录 | documented_only |
| routes › 记录 speech-to-text › documentation › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 speech-to-text › documentation › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text |
| routes › 记录 speech-to-text › endpoint ref › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 speech-to-text › endpoint ref › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 speech-to-text › ID（id） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | The official Speech-to-Text guide documents file-based transcription through POST /stt. |
| routes › 记录 speech-to-text › ID（id） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › ID（id） | 新增 | 未记录 | speech-to-text |
| routes › 记录 speech-to-text › HTTP 方法（method） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 speech-to-text › HTTP 方法（method） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 speech-to-text › operation kind › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | Route 按官方用途 transcription 分类。 |
| routes › 记录 speech-to-text › operation kind › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › operation kind | 新增 | 未记录 | transcription |
| routes › 记录 speech-to-text › API 路径（path_template） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /stt。 |
| routes › 记录 speech-to-text › API 路径（path_template） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › API 路径（path_template） | 新增 | 未记录 | /stt |
| routes › 记录 speech-to-text › protocol › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | rest-json API 协议。 |
| routes › 记录 speech-to-text › protocol › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › protocol | 新增 | 未记录 | rest-json |
| routes › 记录 speech-to-text › provider model ids › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-voice-transcribe-2.0；该 Route 文档说明其所属 API。 |
| routes › 记录 speech-to-text › provider model ids › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| routes › 记录 speech-to-text › provider model ids | 新增 | 未记录 | • grok-voice-transcribe-2.0 |

#### Capability / text-to-speech

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | 官方 Text-to-Speech 文档提供文本转语音 API。 |
| ID（id） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| ID（id） | 新增 | 未记录 | text-to-speech |
| 类别（kind） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | 文本转语音 API 是独立服务，不在无精确模型 ID 时伪造 Offering。 |
| 类别（kind） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| 类别（kind） | 新增 | 未记录 | speech_generation |
| links › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | 官方 Text-to-Speech 文档。 |
| links › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/text-to-speech |
| prices › 记录 0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › operation ref › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 官方 TTS 价格按字符计费。 |
| prices › 记录 0 › operation ref › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| prices › 记录 0 › operation ref | 新增 | 未记录 | speech_generation |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 保留原始 USD/百万字符报价。 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 定价页明确所有价格为 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方列出 TTS 每百万字符费率。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方列出 TTS 每百万字符费率。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 character › 计费指标（metric） | 新增 | 未记录 | character |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 character › quantity | 新增 | 未记录 | 1,000,000 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 character › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 character | 新增 | 未记录 | 15.00 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / text-to-speech › Operation / speech_generation

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Text-to-Speech request and response are defined in the official API guide. |
| ID（id） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| ID（id） | 新增 | 未记录 | speech_generation |
| 输入（input） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Official TTS request schema requires text input. |
| 输入（input） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| 输入（input） › 记录 text › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 text › 名称（name） | 新增 | 未记录 | text |
| 输入（input） › 记录 text › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Text-to-Speech request and response are defined in the official API guide. |
| 类别（kind） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| 类别（kind） | 新增 | 未记录 | speech_generation |
| 输出（output） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Official TTS guide documents raw audio bytes, streaming, and optional timed audio response fields. |
| 输出（output） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • audio<br>• content_type<br>• duration<br>• audio_timestamps.graph_chars<br>• audio_timestamps.graph_times |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | audio |
| 输出（output） › 记录 0 › media › codec | 新增 | 未记录 | • mp3<br>• wav<br>• pcm<br>• mulaw<br>• alaw |
| 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| 参数（parameters） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Text-to-Speech parameters are extracted from the official Request Body table. |
| 参数（parameters） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| 参数（parameters） › 记录 language › 说明（description） | 新增 | 未记录 | BCP-47 language code (e.g. `en`, `zh`, `pt-BR`) or `auto` for automatic language detection. See [Supported Languages](#supported-languages). |
| 参数（parameters） › 记录 language › 名称（name） | 新增 | 未记录 | language |
| 参数（parameters） › 记录 language › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 language › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.language |
| 参数（parameters） › 记录 language › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 optimize_streaming_latency › 说明（description） | 新增 | 未记录 | Latency optimization level for streaming synthesis. `0` (default): No optimization — best audio quality. `1`: Reduced first-chunk size for lower time-to-first-audio, with minor quality tradeoff at chunk boundaries. `2`: Further reduced first-chunk size for lowest time-to-first-audio, with more noticeable quality tradeoff at chunk boundaries. |
| 参数（parameters） › 记录 optimize_streaming_latency › 名称（name） | 新增 | 未记录 | optimize_streaming_latency |
| 参数（parameters） › 记录 optimize_streaming_latency › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 optimize_streaming_latency › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.optimize_streaming_latency |
| 参数（parameters） › 记录 optimize_streaming_latency › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 output_format › 说明（description） | 新增 | 未记录 | Output format configuration. Defaults to MP3 at 24 kHz / 128 kbps. See [Output Formats](#output-formats). |
| 参数（parameters） › 记录 output_format › 名称（name） | 新增 | 未记录 | output_format |
| 参数（parameters） › 记录 output_format › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 output_format › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.output_format |
| 参数（parameters） › 记录 output_format › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 replace › 说明（description） | 新增 | 未记录 | Map of phrases to spoken substitutions applied before synthesis. Values may be respellings (`{"Acme Mobile": "Acme Mobull"}`) or [IPA](#phonetic-pronunciations-with-ipa) phonetics (`{"nginx": "/ˈɛndʒɪn ˈɛks/"}`). See [Pronunciation Replacements](#pronunciation-replacements). |
| 参数（parameters） › 记录 replace › 名称（name） | 新增 | 未记录 | replace |
| 参数（parameters） › 记录 replace › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 replace › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.replace |
| 参数（parameters） › 记录 replace › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 speed › 说明（description） | 新增 | 未记录 | Speech speed multiplier. `1.0` is normal speed. Values below `1.0` slow down speech, values above `1.0` speed it up. Range: `0.7` to `1.5`. Defaults to `1.0`. |
| 参数（parameters） › 记录 speed › 名称（name） | 新增 | 未记录 | speed |
| 参数（parameters） › 记录 speed › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 speed › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.speed |
| 参数（parameters） › 记录 speed › 类型（type） | 新增 | 未记录 | number |
| 参数（parameters） › 记录 text_normalization › 说明（description） | 新增 | 未记录 | Enable text normalization before synthesis. When `true`, the model normalizes written-form text (e.g. numbers, abbreviations, symbols) into spoken-form before generating audio. Defaults to `false`. |
| 参数（parameters） › 记录 text_normalization › 名称（name） | 新增 | 未记录 | text_normalization |
| 参数（parameters） › 记录 text_normalization › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 text_normalization › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.text_normalization |
| 参数（parameters） › 记录 text_normalization › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 voice_id › 说明（description） | 新增 | 未记录 | Voice to use for synthesis. Defaults to `eve`. See [Voices](#voices). |
| 参数（parameters） › 记录 voice_id › 名称（name） | 新增 | 未记录 | voice_id |
| 参数（parameters） › 记录 voice_id › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 voice_id › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.voice_id |
| 参数（parameters） › 记录 voice_id › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 with_timestamps › 说明（description） | 新增 | 未记录 | Return character-level timing metadata alongside the audio. When `true`, the response is a JSON envelope containing base64-encoded audio plus per-character start/end times. Adds latency for the post-synthesis alignment pass. Defaults to `false`. See [Character-level timestamps](#character-level-timestamps). |
| 参数（parameters） › 记录 with_timestamps › 名称（name） | 新增 | 未记录 | with_timestamps |
| 参数（parameters） › 记录 with_timestamps › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 with_timestamps › 参数路径（route_mappings） | 新增 | 未记录 | • /tts:body.with_timestamps |
| 参数（parameters） › 记录 with_timestamps › 类型（type） | 新增 | 未记录 | boolean |
| routes › 记录 text-to-speech › callability › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 text-to-speech › callability › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › callability | 新增 | 未记录 | documented_only |
| routes › 记录 text-to-speech › documentation › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 text-to-speech › documentation › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/text-to-speech |
| routes › 记录 text-to-speech › endpoint ref › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 text-to-speech › endpoint ref › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 text-to-speech › ID（id） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Text-to-Speech 文档列出 REST 与流式语音生成端点。 |
| routes › 记录 text-to-speech › ID（id） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › ID（id） | 新增 | 未记录 | text-to-speech |
| routes › 记录 text-to-speech › HTTP 方法（method） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 text-to-speech › HTTP 方法（method） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 text-to-speech › operation kind › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | Route 按官方用途 speech_generation 分类。 |
| routes › 记录 text-to-speech › operation kind › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › operation kind | 新增 | 未记录 | speech_generation |
| routes › 记录 text-to-speech › API 路径（path_template） › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /tts。 |
| routes › 记录 text-to-speech › API 路径（path_template） › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › API 路径（path_template） | 新增 | 未记录 | /tts |
| routes › 记录 text-to-speech › protocol › evidence › 记录 xai-text-to-speech › assertion | 新增 | 未记录 | https API 协议。 |
| routes › 记录 text-to-speech › protocol › evidence › 记录 xai-text-to-speech › source ref | 新增 | 未记录 | xai-text-to-speech |
| routes › 记录 text-to-speech › protocol | 新增 | 未记录 | https |

#### Capability / web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | The official documentation describes real-time web search and page browsing through Grok. |
| ID（id） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| ID（id） | 新增 | 未记录 | web-search |
| 类别（kind） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | Web Search is documented as a Responses API tool. |
| 类别（kind） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| 类别（kind） | 新增 | 未记录 | web_search |
| links › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | Official Web Search tool documentation. |
| links › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/web-search |

#### Capability / web-search › Operation / web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | Web Search is exposed as a server-side tool in the Responses API. |
| ID（id） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| ID（id） | 新增 | 未记录 | web-search |
| 输入（input） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | The official Responses API example supplies a user prompt through input[].content. |
| 输入（input） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| 输入（input） › 记录 input[].content › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input[].content › 名称（name） | 新增 | 未记录 | input[].content |
| 输入（input） › 记录 input[].content › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | Web Search is exposed as a server-side tool in the Responses API. |
| 类别（kind） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| 类别（kind） | 新增 | 未记录 | web_search |
| 输出（output） › evidence › 记录 xai-tool-streaming-sync › assertion | 新增 | 未记录 | Response fields and optional search source output are collected from official Web Search and Responses API documentation. |
| 输出（output） › evidence › 记录 xai-tool-streaming-sync › source ref | 新增 | 未记录 | xai-tool-streaming-sync |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • response.output[].type=web_search_call<br>• response.output_text<br>• response.citations[]<br>• response.output[].action.sources[] |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | Tool configuration parameters are collected from the official Web Search parameter table and request examples. |
| 参数（parameters） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| 参数（parameters） › 记录 include[] › 可选值（enum） | 新增 | 未记录 | • web_search_call.action.sources |
| 参数（parameters） › 记录 include[] › 名称（name） | 新增 | 未记录 | include[] |
| 参数（parameters） › 记录 include[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include[] › 参数路径（route_mappings） | 新增 | 未记录 | • body.include[] |
| 参数（parameters） › 记录 include[] › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].enable_image_search › 名称（name） | 新增 | 未记录 | tools[].enable_image_search |
| 参数（parameters） › 记录 tools[].enable_image_search › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].enable_image_search › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].enable_image_search |
| 参数（parameters） › 记录 tools[].enable_image_search › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 名称（name） | 新增 | 未记录 | tools[].enable_image_understanding |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].enable_image_understanding |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 名称（name） | 新增 | 未记录 | tools[].filters.allowed_domains[] |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].filters.allowed_domains[] |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 类型（type） | 新增 | 未记录 | array |
| 参数（parameters） › 记录 tools[].filters.excluded_domains[] › 名称（name） | 新增 | 未记录 | tools[].filters.excluded_domains[] |
| 参数（parameters） › 记录 tools[].filters.excluded_domains[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].filters.excluded_domains[] › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].filters.excluded_domains[] |
| 参数（parameters） › 记录 tools[].filters.excluded_domains[] › 类型（type） | 新增 | 未记录 | array |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • web_search |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 web-search › callability › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 web-search › callability › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › callability | 新增 | 未记录 | documented_only |
| routes › 记录 web-search › documentation › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 web-search › documentation › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/web-search |
| routes › 记录 web-search › endpoint ref › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 web-search › endpoint ref › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 web-search › ID（id） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | The official Web Search documentation provides the Responses API request example and supported tool options. |
| routes › 记录 web-search › ID（id） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › ID（id） | 新增 | 未记录 | web-search |
| routes › 记录 web-search › HTTP 方法（method） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 web-search › HTTP 方法（method） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 web-search › operation kind › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | Route 按官方用途 web_search 分类。 |
| routes › 记录 web-search › operation kind › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › operation kind | 新增 | 未记录 | web_search |
| routes › 记录 web-search › API 路径（path_template） › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| routes › 记录 web-search › API 路径（path_template） › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › API 路径（path_template） | 新增 | 未记录 | /responses |
| routes › 记录 web-search › protocol › evidence › 记录 xai-web-search › assertion | 新增 | 未记录 | responses API 协议。 |
| routes › 记录 web-search › protocol › evidence › 记录 xai-web-search › source ref | 新增 | 未记录 | xai-web-search |
| routes › 记录 web-search › protocol | 新增 | 未记录 | responses |

#### Capability / x-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | The official documentation describes X Search for keyword, semantic, user, and thread search on X. |
| ID（id） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| ID（id） | 新增 | 未记录 | x-search |
| 类别（kind） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | X Search is documented as a Responses API tool. |
| 类别（kind） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| 类别（kind） | 新增 | 未记录 | x_search |
| links › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | Official X Search tool documentation. |
| links › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| links › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/x-search |

#### Capability / x-search › Operation / x-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | X Search is exposed as a server-side tool in the Responses API. |
| ID（id） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| ID（id） | 新增 | 未记录 | x-search |
| 输入（input） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | The official Responses API example supplies a user prompt through input[].content. |
| 输入（input） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| 输入（input） › 记录 input[].content › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input[].content › 名称（name） | 新增 | 未记录 | input[].content |
| 输入（input） › 记录 input[].content › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | X Search is exposed as a server-side tool in the Responses API. |
| 类别（kind） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| 类别（kind） | 新增 | 未记录 | x_search |
| 输出（output） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | Response tool-call, citation, and usage fields are extracted from the official X Search response documentation. |
| 输出（output） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • response.output[].type=custom_tool_call<br>• response.output[].name<br>• usage.server_side_tool_usage_details.x_search_calls<br>• usage.server_side_tool_usage_details.x_posts_fetched<br>• usage.server_side_tool_usage_details.x_users_fetched<br>• response.output_text<br>• citations[] |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | X Search tool parameters are extracted from the official parameter table and examples. |
| 参数（parameters） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| 参数（parameters） › 记录 tools[].allowed_x_handles › 名称（name） | 新增 | 未记录 | tools[].allowed_x_handles |
| 参数（parameters） › 记录 tools[].allowed_x_handles › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].allowed_x_handles › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].allowed_x_handles |
| 参数（parameters） › 记录 tools[].allowed_x_handles › 类型（type） | 新增 | 未记录 | array |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 名称（name） | 新增 | 未记录 | tools[].enable_image_understanding |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].enable_image_understanding |
| 参数（parameters） › 记录 tools[].enable_image_understanding › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 tools[].enable_video_understanding › 名称（name） | 新增 | 未记录 | tools[].enable_video_understanding |
| 参数（parameters） › 记录 tools[].enable_video_understanding › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].enable_video_understanding › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].enable_video_understanding |
| 参数（parameters） › 记录 tools[].enable_video_understanding › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 tools[].excluded_x_handles › 名称（name） | 新增 | 未记录 | tools[].excluded_x_handles |
| 参数（parameters） › 记录 tools[].excluded_x_handles › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].excluded_x_handles › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].excluded_x_handles |
| 参数（parameters） › 记录 tools[].excluded_x_handles › 类型（type） | 新增 | 未记录 | array |
| 参数（parameters） › 记录 tools[].from_date › 名称（name） | 新增 | 未记录 | tools[].from_date |
| 参数（parameters） › 记录 tools[].from_date › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].from_date › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].from_date |
| 参数（parameters） › 记录 tools[].from_date › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].to_date › 名称（name） | 新增 | 未记录 | tools[].to_date |
| 参数（parameters） › 记录 tools[].to_date › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].to_date › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].to_date |
| 参数（parameters） › 记录 tools[].to_date › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • x_search |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 x-search › callability › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| routes › 记录 x-search › callability › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › callability | 新增 | 未记录 | documented_only |
| routes › 记录 x-search › documentation › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| routes › 记录 x-search › documentation › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › documentation | 新增 | 未记录 | https://docs.x.ai/developers/tools/x-search |
| routes › 记录 x-search › endpoint ref › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| routes › 记录 x-search › endpoint ref › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › endpoint ref | 新增 | 未记录 | global |
| routes › 记录 x-search › ID（id） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | The official Responses API example enables X Search with the x_search tool. |
| routes › 记录 x-search › ID（id） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › ID（id） | 新增 | 未记录 | x-search |
| routes › 记录 x-search › HTTP 方法（method） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| routes › 记录 x-search › HTTP 方法（method） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 x-search › operation kind › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | Route 按官方用途 x_search 分类。 |
| routes › 记录 x-search › operation kind › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › operation kind | 新增 | 未记录 | x_search |
| routes › 记录 x-search › API 路径（path_template） › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| routes › 记录 x-search › API 路径（path_template） › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › API 路径（path_template） | 新增 | 未记录 | /responses |
| routes › 记录 x-search › protocol › evidence › 记录 xai-x-search › assertion | 新增 | 未记录 | responses API 协议。 |
| routes › 记录 x-search › protocol › evidence › 记录 xai-x-search › source ref | 新增 | 未记录 | xai-x-search |
| routes › 记录 x-search › protocol | 新增 | 未记录 | responses |

#### API endpoint / global-wss

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| api region › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| api region | 新增 | 未记录 | Global |
| API 地址（base_url） › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| API 地址（base_url） › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| API 地址（base_url） | 新增 | 未记录 | https://api.x.ai/v1 |
| documentation › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| documentation › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/voice |
| ID（id） › evidence › 记录 xai-voice › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| ID（id） › evidence › 记录 xai-voice › source ref | 新增 | 未记录 | xai-voice |
| ID（id） | 新增 | 未记录 | global-wss |

#### API endpoint / global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| api region › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| api region | 新增 | 未记录 | Global |
| API 地址（base_url） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| API 地址（base_url） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| API 地址（base_url） | 新增 | 未记录 | https://api.x.ai/v1 |
| documentation › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| documentation › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| documentation | 新增 | 未记录 | https://docs.x.ai/developers/pricing |
| ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://api.x.ai/v1。 |
| ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| ID（id） | 新增 | 未记录 | global |

#### API endpoint / us-regional

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://us.api.x.ai/v1。 |
| api region › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| api region | 新增 | 未记录 | United States |
| API 地址（base_url） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://us.api.x.ai/v1。 |
| API 地址（base_url） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| API 地址（base_url） | 新增 | 未记录 | https://us.api.x.ai/v1 |
| documentation › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://us.api.x.ai/v1。 |
| documentation › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| documentation | 新增 | 未记录 | https://docs.x.ai/developers/pricing |
| ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://us.api.x.ai/v1。 |
| ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| ID（id） | 新增 | 未记录 | us-regional |
| region code › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方文档列出 API Endpoint：https://us.api.x.ai/v1。 |
| region code › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| region code | 新增 | 未记录 | US |

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | API 价格以 USD 公示，属于 xAI 全球按量 API Service。 |
| ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| ID（id） | 新增 | 未记录 | global |
| 名称（name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价页描述 xAI API。 |
| 名称（name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 名称（name） | 新增 | 未记录 | xAI API |

#### Model / grok-4.20-0309-non-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-4.20-0309-non-reasoning |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.20-0309-non-reasoning，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.20-0309-non-reasoning，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.20-0309-non-reasoning；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-4.20-0309-non-reasoning |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.20-0309-non-reasoning；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-4.20-0309-non-reasoning |
| prices › 记录 grok-4.20-0309-non-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-non-reasoning › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:11 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:12 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:11 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:11 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:12 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:12 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.16 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.32 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 2.5 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-non-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 | 新增 | 未记录 | 10 |
| prices › 记录 grok-4.20-0309-non-reasoning › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-4.20-0309-non-reasoning › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-non-reasoning › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.20-0309-non-reasoning |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.20-0309-non-reasoning |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:11 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-non-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:12 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-non-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-non-reasoning 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-4.20-0309-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-4.20-0309-reasoning |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.20-0309-reasoning，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.20-0309-reasoning，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.20-0309-reasoning；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-4.20-0309-reasoning |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.20-0309-reasoning；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-4.20-0309-reasoning |
| prices › 记录 grok-4.20-0309-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-reasoning › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:9 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:10 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:9 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:9 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:10 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:10 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.16 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.32 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 2.5 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-0309-reasoning › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 | 新增 | 未记录 | 10 |
| prices › 记录 grok-4.20-0309-reasoning › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-4.20-0309-reasoning › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-0309-reasoning › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.20-0309-reasoning |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.20-0309-reasoning |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:9 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-0309-reasoning 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:10 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-0309-reasoning Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-0309-reasoning 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-4.20-multi-agent-0309

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-4.20-multi-agent-0309 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.20-multi-agent-0309，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.20-multi-agent-0309，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.20-multi-agent-0309；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-4.20-multi-agent-0309 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.20-multi-agent-0309；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-4.20-multi-agent-0309 |
| prices › 记录 grok-4.20-multi-agent-0309 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-multi-agent-0309 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:15 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:16 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:15 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:15 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:16 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:16 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.16 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.32 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 2.5 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 | 新增 | 未记录 | 10 |
| prices › 记录 grok-4.20-multi-agent-0309 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.20-multi-agent-0309 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.20-multi-agent-0309 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.20-multi-agent-0309 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:15 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:16 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-4.3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-4.3 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.3，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.3，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.3；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-4.3 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.3；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-4.3 |
| prices › 记录 grok-4.3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.3 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:7 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:8 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:7 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:7 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:8 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:8 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.16 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.32 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 2.5 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 | 新增 | 未记录 | 5 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.3 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 | 新增 | 未记录 | 10 |
| prices › 记录 grok-4.3 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-4.3 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.3 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.3 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.3 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:7 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.3 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:8 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.3 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.3 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-4.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-4.5 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.5，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.5，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.5；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-4.5 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.5；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-4.5 |
| prices › 记录 grok-4.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.5 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:5 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:6 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:5 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:5 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.30 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 6.00 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:6 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:6 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 12.00 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.6 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.24 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 4.8 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 3.2 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.48 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 9.6 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 0.6 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 12 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 | 新增 | 未记录 | 8 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 | 新增 | 未记录 | 1.2 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.5 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 | 新增 | 未记录 | 24 |
| prices › 记录 grok-4.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-4.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.5 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.5 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.5 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:5 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.5 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:6 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.5 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.5 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-4.6

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-4.6 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.6，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.6，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › callability › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › callability › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › documentation › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › documentation › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › endpoint ref › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 该 Route 使用 us-regional Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › endpoint ref › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › endpoint ref | 新增 | 未记录 | us-regional |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › ID（id） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 区域端点文档仅列 grok-4.7 与 grok-4.6 可用，并列出 US regional Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › ID（id） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › ID（id） | 新增 | 未记录 | chat-completions-us |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › HTTP 方法（method） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › HTTP 方法（method） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › operation kind › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › operation kind › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › API 路径（path_template） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › API 路径（path_template） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › protocol › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › protocol › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › provider model ids › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.6；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › provider model ids › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › provider model ids | 新增 | 未记录 | • grok-4.6 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.6；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-4.6 |
| operations › 记录 text_generation › routes › 记录 responses-us › callability › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses-us › callability › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses-us › documentation › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses-us › documentation › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses-us › endpoint ref › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 该 Route 使用 us-regional Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses-us › endpoint ref › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › endpoint ref | 新增 | 未记录 | us-regional |
| operations › 记录 text_generation › routes › 记录 responses-us › ID（id） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 区域端点文档仅列 grok-4.7 与 grok-4.6 可用，并列出 US regional Base URL。 |
| operations › 记录 text_generation › routes › 记录 responses-us › ID（id） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › ID（id） | 新增 | 未记录 | responses-us |
| operations › 记录 text_generation › routes › 记录 responses-us › HTTP 方法（method） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses-us › HTTP 方法（method） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses-us › operation kind › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses-us › operation kind › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses-us › API 路径（path_template） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses-us › API 路径（path_template） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses-us › protocol › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses-us › protocol › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses-us › provider model ids › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.6；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses-us › provider model ids › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › provider model ids | 新增 | 未记录 | • grok-4.6 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.6；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-4.6 |
| prices › 记录 grok-4.6 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.6 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:3 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:4 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 7 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 7 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 7 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 8 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 8 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 8 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 9 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 9 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 9 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 10 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 10 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › evidence › 第 10 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:3 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:3 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 6.00 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:4 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:4 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 12.00 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.6 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 4.8 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 3.2 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 9.6 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 1 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 12 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 | 新增 | 未记录 | 8 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 | 新增 | 未记录 | 24 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 | 新增 | 未记录 | 2.2 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 | 新增 | 未记录 | 0.55 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 | 新增 | 未记录 | 6.6 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 | 新增 | 未记录 | 4.4 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 | 新增 | 未记录 | 1.1 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 | 新增 | 未记录 | 13.2 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 2 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 2 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 2 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 | 新增 | 未记录 | 4.4 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 | 新增 | 未记录 | 1.1 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 | 新增 | 未记录 | 13.2 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 2 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 2 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 2 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 | 新增 | 未记录 | 8.8 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 | 新增 | 未记录 | 2.2 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.6 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 | 新增 | 未记录 | 26.4 |
| prices › 记录 grok-4.6 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-4.6 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.6 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.6 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.6 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:3 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.6 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:4 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.6 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.6 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 7 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| supply observations › 记录 0 › evidence › 第 7 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| supply observations › 记录 0 › evidence › 第 7 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 8 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.6 区域价格。 |
| supply observations › 记录 0 › evidence › 第 8 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| supply observations › 记录 0 › evidence › 第 8 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 9 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| supply observations › 记录 0 › evidence › 第 9 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 9 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 10 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.6。 |
| supply observations › 记录 0 › evidence › 第 10 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 10 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-4.7

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-4.7 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.7，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-4.7，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › callability › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › callability › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › documentation › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › documentation › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › endpoint ref › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 该 Route 使用 us-regional Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › endpoint ref › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › endpoint ref | 新增 | 未记录 | us-regional |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › ID（id） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 区域端点文档仅列 grok-4.7 与 grok-4.6 可用，并列出 US regional Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › ID（id） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › ID（id） | 新增 | 未记录 | chat-completions-us |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › HTTP 方法（method） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › HTTP 方法（method） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › operation kind › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › operation kind › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › API 路径（path_template） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › API 路径（path_template） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › protocol › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › protocol › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › provider model ids › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.7；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › provider model ids › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 chat-completions-us › provider model ids | 新增 | 未记录 | • grok-4.7 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.7；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-4.7 |
| operations › 记录 text_generation › routes › 记录 responses-us › callability › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses-us › callability › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses-us › documentation › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses-us › documentation › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses-us › endpoint ref › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 该 Route 使用 us-regional Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses-us › endpoint ref › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › endpoint ref | 新增 | 未记录 | us-regional |
| operations › 记录 text_generation › routes › 记录 responses-us › ID（id） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 区域端点文档仅列 grok-4.7 与 grok-4.6 可用，并列出 US regional Base URL。 |
| operations › 记录 text_generation › routes › 记录 responses-us › ID（id） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › ID（id） | 新增 | 未记录 | responses-us |
| operations › 记录 text_generation › routes › 记录 responses-us › HTTP 方法（method） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses-us › HTTP 方法（method） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses-us › operation kind › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses-us › operation kind › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses-us › API 路径（path_template） › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses-us › API 路径（path_template） › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses-us › protocol › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses-us › protocol › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses-us › provider model ids › evidence › 记录 xai-regions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.7；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses-us › provider model ids › evidence › 记录 xai-regions › source ref | 新增 | 未记录 | xai-regions |
| operations › 记录 text_generation › routes › 记录 responses-us › provider model ids | 新增 | 未记录 | • grok-4.7 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-4.7；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-4.7 |
| prices › 记录 grok-4.7 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.7 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:1 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 7 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 7 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 7 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 8 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 8 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 8 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 9 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 9 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 9 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 10 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 10 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › evidence › 第 10 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:1 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:1 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 6.00 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 12.00 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.6 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 4.8 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_mode |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 3.2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 9.6 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 1 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 12 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 1 项 | 新增 | 未记录 | 8 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 2 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 6 项 › rates › 第 3 项 | 新增 | 未记录 | 24 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 1 项 | 新增 | 未记录 | 2.2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 2 项 | 新增 | 未记录 | 0.55 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 7 项 › rates › 第 3 项 | 新增 | 未记录 | 6.6 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 1 项 | 新增 | 未记录 | 4.4 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 2 项 | 新增 | 未记录 | 1.1 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 8 项 › rates › 第 3 项 | 新增 | 未记录 | 13.2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 2 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 2 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 适用条件（conditions） › 第 2 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 1 项 | 新增 | 未记录 | 4.4 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 2 项 | 新增 | 未记录 | 1.1 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 9 项 › rates › 第 3 项 | 新增 | 未记录 | 13.2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | api_region |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | United States |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 2 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 2 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 适用条件（conditions） › 第 2 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 1 项 | 新增 | 未记录 | 8.8 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 2 项 | 新增 | 未记录 | 2.2 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-4.7 › 价格信息（pricing） › 第 10 项 › rates › 第 3 项 | 新增 | 未记录 | 26.4 |
| prices › 记录 grok-4.7 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-4.7 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-4.7 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.7 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-4.7 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:1 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-4.7 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:2 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方按模型列出 grok-4.7 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #batch-api-pricing/discounts-by-model |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 5 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 5 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.7 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 6 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 6 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 7 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| supply observations › 记录 0 › evidence › 第 7 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| supply observations › 记录 0 › evidence › 第 7 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 8 项 › assertion | 新增 | 未记录 | 官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 grok-4.7 区域价格。 |
| supply observations › 记录 0 › evidence › 第 8 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing |
| supply observations › 记录 0 › evidence › 第 8 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 9 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| supply observations › 记录 0 › evidence › 第 9 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 9 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 10 项 › assertion | 新增 | 未记录 | US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 grok-4.7。 |
| supply observations › 记录 0 › evidence › 第 10 项 › locator | 新增 | 未记录 | #us-regional-endpoint-pricing#priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 10 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-build-0.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-build-0.1 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-build-0.1，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-build-0.1，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-build-0.1；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-build-0.1 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-build-0.1；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-build-0.1 |
| prices › 记录 grok-build-0.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-build-0.1 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 8 |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-build-0.1 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-build-0.1 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-imagine-image-2.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 使用官方精确模型 ID。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-imagine-image-2.0 |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 Images API 文档定义图像生成请求。 |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › ID（id） | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 Images API 文档定义图像生成请求。 |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › 类别（kind） | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › callability | 新增 | 未记录 | documented_only |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/images |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Images API 参考列出图像编辑路径。 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） | 新增 | 未记录 | image-edits |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 按官方用途 image_generation 分类。 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /images/edits。 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） | 新增 | 未记录 | /images/edits |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | openai-images API 协议。 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol | 新增 | 未记录 | openai-images |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-image-2.0；该 Route 文档说明其所属 API。 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids | 新增 | 未记录 | • grok-imagine-image-2.0 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › callability | 新增 | 未记录 | documented_only |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/images |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Images API 参考列出图像生成与编辑路径。 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） | 新增 | 未记录 | image-generations |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 按官方用途 image_generation 分类。 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /images/generations。 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） | 新增 | 未记录 | /images/generations |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | openai-images API 协议。 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol | 新增 | 未记录 | openai-images |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-image-2.0；该 Route 文档说明其所属 API。 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids | 新增 | 未记录 | • grok-imagine-image-2.0 |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › callability | 新增 | 未记录 | documented_only |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/images |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Images API 参考列出异步生成结果查询路径。 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） | 新增 | 未记录 | image-results |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） | 新增 | 未记录 | GET |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 按官方用途 image_generation 分类。 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /images/{request_id}。 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） | 新增 | 未记录 | /images/{request_id} |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | openai-images API 协议。 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › protocol | 新增 | 未记录 | openai-images |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-image-2.0；该 Route 文档说明其所属 API。 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids | 新增 | 未记录 | • grok-imagine-image-2.0 |
| prices › 记录 grok-imagine-image-2.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › operation ref › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 按定价表所在 API 能力映射。 |
| prices › 记录 grok-imagine-image-2.0 › operation ref › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image-2.0 › operation ref | 新增 | 未记录 | image_generation |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价页明确价格币种为 USD。 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-image-2.0 的 0.04 USD/per_image 价格。 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-image-2.0 的 0.04 USD/per_image 价格。 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计费指标（metric） | 新增 | 未记录 | generated_image |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image | 新增 | 未记录 | 0.04 |
| prices › 记录 grok-imagine-image-2.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价表以精确模型 ID 列价。 |
| prices › 记录 grok-imagine-image-2.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image-2.0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-image-2.0 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-image-2.0 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-imagine-image

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 使用官方精确模型 ID。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-imagine-image |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 Images API 文档定义图像生成请求。 |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › ID（id） | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 Images API 文档定义图像生成请求。 |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › 类别（kind） | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › callability | 新增 | 未记录 | documented_only |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/images |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Images API 参考列出图像编辑路径。 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） | 新增 | 未记录 | image-edits |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 按官方用途 image_generation 分类。 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /images/edits。 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） | 新增 | 未记录 | /images/edits |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | openai-images API 协议。 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol | 新增 | 未记录 | openai-images |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-image；该 Route 文档说明其所属 API。 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids | 新增 | 未记录 | • grok-imagine-image |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › callability | 新增 | 未记录 | documented_only |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/images |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Images API 参考列出图像生成与编辑路径。 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） | 新增 | 未记录 | image-generations |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 按官方用途 image_generation 分类。 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /images/generations。 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） | 新增 | 未记录 | /images/generations |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | openai-images API 协议。 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol | 新增 | 未记录 | openai-images |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-image；该 Route 文档说明其所属 API。 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids | 新增 | 未记录 | • grok-imagine-image |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › callability | 新增 | 未记录 | documented_only |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/images |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Images API 参考列出异步生成结果查询路径。 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） | 新增 | 未记录 | image-results |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） | 新增 | 未记录 | GET |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | Route 按官方用途 image_generation 分类。 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind | 新增 | 未记录 | image_generation |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /images/{request_id}。 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） | 新增 | 未记录 | /images/{request_id} |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | openai-images API 协议。 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › protocol | 新增 | 未记录 | openai-images |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-image；该 Route 文档说明其所属 API。 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › source ref | 新增 | 未记录 | xai-images-api |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids | 新增 | 未记录 | • grok-imagine-image |
| prices › 记录 grok-imagine-image › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-imagine-image › operation ref › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 按定价表所在 API 能力映射。 |
| prices › 记录 grok-imagine-image › operation ref › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image › operation ref | 新增 | 未记录 | image_generation |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价页明确价格币种为 USD。 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-image 的 0.02 USD/per_image 价格。 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-image 的 0.02 USD/per_image 价格。 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计费指标（metric） | 新增 | 未记录 | generated_image |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image | 新增 | 未记录 | 0.02 |
| prices › 记录 grok-imagine-image › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价表以精确模型 ID 列价。 |
| prices › 记录 grok-imagine-image › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-image › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-image |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-image |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-imagine-video-1.5-lite

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 使用官方精确模型 ID。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-imagine-video-1.5-lite |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 Videos API 文档定义异步视频生成请求。 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › ID（id） | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 Videos API 文档定义异步视频生成请求。 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › 类别（kind） | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频编辑端点。 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） | 新增 | 未记录 | video-edits |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/edits。 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） | 新增 | 未记录 | /videos/edits |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5-lite |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频延展端点。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） | 新增 | 未记录 | video-extensions |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/extensions。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） | 新增 | 未记录 | /videos/extensions |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5-lite |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频生成、编辑、延展与状态查询端点。 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） | 新增 | 未记录 | video-generations |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/generations。 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） | 新增 | 未记录 | /videos/generations |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5-lite |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出以 request_id 查询异步任务结果的路径。 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） | 新增 | 未记录 | video-results |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） | 新增 | 未记录 | GET |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/{request_id}。 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） | 新增 | 未记录 | /videos/{request_id} |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5-lite |
| prices › 记录 grok-imagine-video-1.5-lite › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › operation ref › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 按定价表所在 API 能力映射。 |
| prices › 记录 grok-imagine-video-1.5-lite › operation ref › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5-lite › operation ref | 新增 | 未记录 | video_generation |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价页明确价格币种为 USD。 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-video-1.5-lite 的 0.020 USD/per_generated_second 价格。 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-video-1.5-lite 的 0.020 USD/per_generated_second 价格。 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计费指标（metric） | 新增 | 未记录 | generated_second |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计量单位（unit） | 新增 | 未记录 | per_generated_second |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second | 新增 | 未记录 | 0.020 |
| prices › 记录 grok-imagine-video-1.5-lite › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价表以精确模型 ID 列价。 |
| prices › 记录 grok-imagine-video-1.5-lite › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5-lite › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-video-1.5-lite |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-video-1.5-lite |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-imagine-video-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 使用官方精确模型 ID。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-imagine-video-1.5 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 Videos API 文档定义异步视频生成请求。 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › ID（id） | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 Videos API 文档定义异步视频生成请求。 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › 类别（kind） | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频编辑端点。 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） | 新增 | 未记录 | video-edits |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/edits。 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） | 新增 | 未记录 | /videos/edits |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频延展端点。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） | 新增 | 未记录 | video-extensions |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/extensions。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） | 新增 | 未记录 | /videos/extensions |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频生成、编辑、延展与状态查询端点。 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） | 新增 | 未记录 | video-generations |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/generations。 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） | 新增 | 未记录 | /videos/generations |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出以 request_id 查询异步任务结果的路径。 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） | 新增 | 未记录 | video-results |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） | 新增 | 未记录 | GET |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/{request_id}。 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） | 新增 | 未记录 | /videos/{request_id} |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids | 新增 | 未记录 | • grok-imagine-video-1.5 |
| prices › 记录 grok-imagine-video-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › operation ref › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 按定价表所在 API 能力映射。 |
| prices › 记录 grok-imagine-video-1.5 › operation ref › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5 › operation ref | 新增 | 未记录 | video_generation |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价页明确价格币种为 USD。 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-video-1.5 的 0.080 USD/per_generated_second 价格。 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-video-1.5 的 0.080 USD/per_generated_second 价格。 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计费指标（metric） | 新增 | 未记录 | generated_second |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计量单位（unit） | 新增 | 未记录 | per_generated_second |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second | 新增 | 未记录 | 0.080 |
| prices › 记录 grok-imagine-video-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价表以精确模型 ID 列价。 |
| prices › 记录 grok-imagine-video-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video-1.5 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-video-1.5 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-video-1.5 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-imagine-video

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 使用官方精确模型 ID。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-imagine-video |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 Videos API 文档定义异步视频生成请求。 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › ID（id） | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 Videos API 文档定义异步视频生成请求。 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › 类别（kind） | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频编辑端点。 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） | 新增 | 未记录 | video-edits |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/edits。 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） | 新增 | 未记录 | /videos/edits |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids | 新增 | 未记录 | • grok-imagine-video |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频延展端点。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） | 新增 | 未记录 | video-extensions |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/extensions。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） | 新增 | 未记录 | /videos/extensions |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids | 新增 | 未记录 | • grok-imagine-video |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出异步视频生成、编辑、延展与状态查询端点。 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） | 新增 | 未记录 | video-generations |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/generations。 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） | 新增 | 未记录 | /videos/generations |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids | 新增 | 未记录 | • grok-imagine-video |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › callability | 新增 | 未记录 | documented_only |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/videos |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Videos API 参考列出以 request_id 查询异步任务结果的路径。 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） | 新增 | 未记录 | video-results |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） | 新增 | 未记录 | GET |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | Route 按官方用途 video_generation 分类。 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind | 新增 | 未记录 | video_generation |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /videos/{request_id}。 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） | 新增 | 未记录 | /videos/{request_id} |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › source ref | 新增 | 未记录 | xai-videos-api |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids | 新增 | 未记录 | • grok-imagine-video |
| prices › 记录 grok-imagine-video › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-imagine-video › operation ref › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 按定价表所在 API 能力映射。 |
| prices › 记录 grok-imagine-video › operation ref › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video › operation ref | 新增 | 未记录 | video_generation |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价页明确价格币种为 USD。 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-video 的 0.050 USD/per_generated_second 价格。 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI 定价表列出 grok-imagine-video 的 0.050 USD/per_generated_second 价格。 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计费指标（metric） | 新增 | 未记录 | generated_second |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计量单位（unit） | 新增 | 未记录 | per_generated_second |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second | 新增 | 未记录 | 0.050 |
| prices › 记录 grok-imagine-video › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价表以精确模型 ID 列价。 |
| prices › 记录 grok-imagine-video › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-imagine-video › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-video |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-imagine-video |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐条映射官方定价表。 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-voice-3.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 使用官方精确模型 ID。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-voice-3.0 |
| operations › 记录 speech_to_speech › ID（id） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | Voice 官方文档描述实时语音双向交互。 |
| operations › 记录 speech_to_speech › ID（id） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › ID（id） | 新增 | 未记录 | speech_to_speech |
| operations › 记录 speech_to_speech › 输入（input） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | The official Speech-to-Speech guide documents audio formats and JSON/binary transports. |
| operations › 记录 speech_to_speech › 输入（input） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › 输入（input） › 记录 audio › 类别（kind） | 新增 | 未记录 | audio |
| operations › 记录 speech_to_speech › 输入（input） › 记录 audio › media › codec | 新增 | 未记录 | • audio/pcm<br>• audio/pcmu<br>• audio/pcma<br>• audio/opus |
| operations › 记录 speech_to_speech › 输入（input） › 记录 audio › media › transports | 新增 | 未记录 | • websocket |
| operations › 记录 speech_to_speech › 输入（input） › 记录 audio › 名称（name） | 新增 | 未记录 | audio |
| operations › 记录 speech_to_speech › 输入（input） › 记录 audio › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 speech_to_speech › 类别（kind） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | Voice 官方文档描述实时语音双向交互。 |
| operations › 记录 speech_to_speech › 类别（kind） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › 类别（kind） | 新增 | 未记录 | speech_to_speech |
| operations › 记录 speech_to_speech › 输出（output） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | Official guide documents streamed assistant audio events and binary audio frames. |
| operations › 记录 speech_to_speech › 输出（output） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • response.output_audio.delta<br>• response.audio.delta |
| operations › 记录 speech_to_speech › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | audio |
| operations › 记录 speech_to_speech › 输出（output） › 记录 0 › media › codec | 新增 | 未记录 | • audio/pcm<br>• audio/pcmu<br>• audio/pcma<br>• audio/opus |
| operations › 记录 speech_to_speech › 输出（output） › 记录 0 › media › transports | 新增 | 未记录 | • websocket |
| operations › 记录 speech_to_speech › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 speech_to_speech › 参数（parameters） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | Session parameters are collected from official WebSocket setup and parameter docs. |
| operations › 记录 speech_to_speech › 参数（parameters） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 audio › 名称（name） | 新增 | 未记录 | audio |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 audio › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 audio › 参数路径（route_mappings） | 新增 | 未记录 | • /realtime:session.audio |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 audio › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 instructions › 名称（name） | 新增 | 未记录 | instructions |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 instructions › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 instructions › 参数路径（route_mappings） | 新增 | 未记录 | • /realtime:session.instructions |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 instructions › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • grok-voice-latest |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /realtime:query.model |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /realtime:session.tools |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 turn_detection › 名称（name） | 新增 | 未记录 | turn_detection |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 turn_detection › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 turn_detection › 参数路径（route_mappings） | 新增 | 未记录 | • /realtime:session.turn_detection |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 turn_detection › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 voice › 名称（name） | 新增 | 未记录 | voice |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 voice › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 voice › 参数路径（route_mappings） | 新增 | 未记录 | • /realtime:session.voice |
| operations › 记录 speech_to_speech › 参数（parameters） › 记录 voice › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › callability › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › callability › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › callability | 新增 | 未记录 | documented_only |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › documentation › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › documentation › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › endpoint ref › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | 该 Route 使用 global-wss Endpoint。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › endpoint ref › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › endpoint ref | 新增 | 未记录 | global-wss |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › ID（id） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | Voice 文档给出 WebSocket 实时语音端点及 grok-voice-latest 示例。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › ID（id） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › ID（id） | 新增 | 未记录 | realtime-voice |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › HTTP 方法（method） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | 官方 API 文档列出 GET 方法。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › HTTP 方法（method） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › HTTP 方法（method） | 新增 | 未记录 | GET |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › operation kind › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | Route 按官方用途 speech_to_speech 分类。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › operation kind › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › operation kind | 新增 | 未记录 | speech_to_speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › API 路径（path_template） › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /realtime。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › API 路径（path_template） › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › API 路径（path_template） | 新增 | 未记录 | /realtime |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › protocol › evidence › 记录 xai-speech-to-speech › assertion | 新增 | 未记录 | websocket API 协议。 |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › protocol › evidence › 记录 xai-speech-to-speech › source ref | 新增 | 未记录 | xai-speech-to-speech |
| operations › 记录 speech_to_speech › routes › 记录 realtime-voice › protocol | 新增 | 未记录 | websocket |
| prices › 记录 grok-voice-3.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-voice-3.0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐字保留官方计价数值和单位。 |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | Voice API 文档列出音频分钟费率和 text input 费率。 |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | Voice API 文档列出音频分钟费率和 text input 费率。 |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › 记录 input_audio_minute › 计费指标（metric） | 新增 | 未记录 | input_audio_minute |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › 记录 input_audio_minute › 计量单位（unit） | 新增 | 未记录 | per_input_audio_minute |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › 记录 input_audio_minute | 新增 | 未记录 | 0.08 |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › 记录 text_input › 计费指标（metric） | 新增 | 未记录 | text_input |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › 记录 text_input › 计量单位（unit） | 新增 | 未记录 | per_request |
| prices › 记录 grok-voice-3.0 › 价格信息（pricing） › 记录 0 › rates › 记录 text_input | 新增 | 未记录 | 0.004 |
| prices › 记录 grok-voice-3.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | Voice 定价行精确列出模型 ID。 |
| prices › 记录 grok-voice-3.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-3.0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-voice-3.0 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | Voice 价格表含精确模型 ID，作为公开供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-voice-3.0 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 逐字保留官方计价数值和单位。 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-voice-transcribe-2.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | 采用官方模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| 展示名称（display_name） | 新增 | 未记录 | grok-voice-transcribe-2.0 |
| operations › 记录 transcription › ID（id） › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | 官方列出该默认模型及 /stt REST API。 |
| operations › 记录 transcription › ID（id） › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| operations › 记录 transcription › ID（id） | 新增 | 未记录 | transcription |
| operations › 记录 transcription › 类别（kind） › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | 官方列出该默认模型及 /stt REST API。 |
| operations › 记录 transcription › 类别（kind） › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| operations › 记录 transcription › 类别（kind） | 新增 | 未记录 | transcription |
| operations › 记录 transcription › routes › 记录 speech-to-text › callability › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › callability › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › callability | 新增 | 未记录 | documented_only |
| operations › 记录 transcription › routes › 记录 speech-to-text › documentation › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › documentation › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › documentation | 新增 | 未记录 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text |
| operations › 记录 transcription › routes › 记录 speech-to-text › endpoint ref › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › endpoint ref › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 transcription › routes › 记录 speech-to-text › ID（id） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | The official Speech-to-Text guide documents file-based transcription through POST /stt. |
| operations › 记录 transcription › routes › 记录 speech-to-text › ID（id） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › ID（id） | 新增 | 未记录 | speech-to-text |
| operations › 记录 transcription › routes › 记录 speech-to-text › HTTP 方法（method） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › HTTP 方法（method） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 transcription › routes › 记录 speech-to-text › operation kind › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | Route 按官方用途 transcription 分类。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › operation kind › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › operation kind | 新增 | 未记录 | transcription |
| operations › 记录 transcription › routes › 记录 speech-to-text › API 路径（path_template） › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /stt。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › API 路径（path_template） › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › API 路径（path_template） | 新增 | 未记录 | /stt |
| operations › 记录 transcription › routes › 记录 speech-to-text › protocol › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | rest-json API 协议。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › protocol › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › protocol | 新增 | 未记录 | rest-json |
| operations › 记录 transcription › routes › 记录 speech-to-text › provider model ids › evidence › 记录 xai-speech-to-text-guide › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-voice-transcribe-2.0；该 Route 文档说明其所属 API。 |
| operations › 记录 transcription › routes › 记录 speech-to-text › provider model ids › evidence › 记录 xai-speech-to-text-guide › source ref | 新增 | 未记录 | xai-speech-to-text-guide |
| operations › 记录 transcription › routes › 记录 speech-to-text › provider model ids | 新增 | 未记录 | • grok-voice-transcribe-2.0 |
| prices › 记录 grok-voice-transcribe-2.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-voice-transcribe-2.0 › operation ref › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | REST/Streaming STT 操作价格。 |
| prices › 记录 grok-voice-transcribe-2.0 › operation ref › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| prices › 记录 grok-voice-transcribe-2.0 › operation ref | 新增 | 未记录 | transcription |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 保留 REST 与 Streaming 两个官方计费档位。 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 定价页明确所有价格为 USD。 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方列出 REST Speech-to-Text 每小时费率。 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #voice-pricing/speech-to-text |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方列出 REST Speech-to-Text 每小时费率。 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #voice-pricing/speech-to-text |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio_hour |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_input_audio_hour |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | transport |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | streaming |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 定价页明确所有价格为 USD。 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方列出 Streaming Speech-to-Text 每小时费率。 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #voice-pricing/speech-to-text |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方列出 Streaming Speech-to-Text 每小时费率。 |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #voice-pricing/speech-to-text |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio_hour |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_input_audio_hour |
| prices › 记录 grok-voice-transcribe-2.0 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 grok-voice-transcribe-2.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | 价格归属以默认模型说明与该操作价格共同映射。 |
| prices › 记录 grok-voice-transcribe-2.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| prices › 记录 grok-voice-transcribe-2.0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-voice-transcribe-2.0 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | 官方 Speech-to-Text 专属页面明确默认模型 ID。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-voice-transcribe-2.0 |
| 服务线 ID（service_id） › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | Speech-to-Text 为全球 API Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 xai-speech-to-text › assertion | 新增 | 未记录 | 官方 Speech-to-Text 页面说明此为默认模型。 |
| supply observations › 记录 0 › evidence › 记录 xai-speech-to-text › source ref | 新增 | 未记录 | xai-speech-to-text |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Plan / xai-global-subscription-free

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Free 月付与年付 USD 标价。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 第 1 项 › billing period | 新增 | 未记录 | month |
| billing options › 第 1 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 0 |
| billing options › 第 1 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| billing options › 第 2 项 › billing period | 新增 | 未记录 | year |
| billing options › 第 2 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 0 |
| billing options › 第 2 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方 X Subscription 套餐价格表列出 Free。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-subscription-free |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Free。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Free |

#### Plan / xai-global-subscription-plus

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Plus 月付与年付 USD 标价。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 第 1 项 › billing period | 新增 | 未记录 | month |
| billing options › 第 1 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 8 |
| billing options › 第 1 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| billing options › 第 2 项 › billing period | 新增 | 未记录 | year |
| billing options › 第 2 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 80 |
| billing options › 第 2 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方 X Subscription 套餐价格表列出 Plus。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-subscription-plus |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Plus。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Plus |

#### Plan / xai-global-subscription-premium

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Premium 月付与年付 USD 标价。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 第 1 项 › billing period | 新增 | 未记录 | month |
| billing options › 第 1 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 30 |
| billing options › 第 1 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| billing options › 第 2 项 › billing period | 新增 | 未记录 | year |
| billing options › 第 2 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 300 |
| billing options › 第 2 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方 X Subscription 套餐价格表列出 Premium。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-subscription-premium |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Premium。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Premium |
| ratio › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方将 Premium 用量列为 4x；比例相对 Plus 基础用量。 |
| ratio › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ratio | 新增 | 未记录 | 4 |

#### Plan / xai-global-subscription-super

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Super 月付与年付 USD 标价。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 第 1 项 › billing period | 新增 | 未记录 | month |
| billing options › 第 1 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 100 |
| billing options › 第 1 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| billing options › 第 2 项 › billing period | 新增 | 未记录 | year |
| billing options › 第 2 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 1000 |
| billing options › 第 2 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方 X Subscription 套餐价格表列出 Super。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-subscription-super |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Super。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Super |
| ratio › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方将 Super 用量列为 15x；比例相对 Plus 基础用量。 |
| ratio › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ratio | 新增 | 未记录 | 15 |

#### Plan / xai-global-subscription-ultra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Ultra 月付与年付 USD 标价。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 第 1 项 › billing period | 新增 | 未记录 | month |
| billing options › 第 1 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 200 |
| billing options › 第 1 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| billing options › 第 2 项 › billing period | 新增 | 未记录 | year |
| billing options › 第 2 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 2000 |
| billing options › 第 2 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方 X Subscription 套餐价格表列出 Ultra。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-subscription-ultra |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Ultra。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Ultra |
| ratio › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方将 Ultra 用量列为 50x；比例相对 Plus 基础用量。 |
| ratio › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ratio | 新增 | 未记录 | 50 |

#### Plan / xai-global-teams-and-ultra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Teams and Ultra 每席位每月 $200。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 200 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方团队套餐说明列出 and Ultra 每席位月费。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-teams-and-ultra |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方团队席位使用 and Ultra 档位。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Teams and Ultra |

#### Plan / xai-global-teams-premium

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Teams Premium 每席位每月 $30。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 30 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方团队套餐说明列出 Premium 每席位月费。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-teams-premium |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方团队席位使用 Premium 档位。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Teams Premium |
| ratio › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方套餐列表将 Premium 档列为 4x 用量。 |
| ratio › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ratio | 新增 | 未记录 | 4 |

#### Plan / xai-global-teams-super

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方列出 Teams Super 每席位每月 $100。 |
| billing options › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 100 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方团队套餐说明列出 Super 每席位月费。 |
| ID（id） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ID（id） | 新增 | 未记录 | xai-global-teams-super |
| links › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 套餐链接指向官方 X Subscription 价格文档。 |
| links › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| links › official | 新增 | 未记录 | https://docs.x.ai/x-subscription/pricing |
| 名称（name） › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方团队席位使用 Super 档位。 |
| 名称（name） › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| 名称（name） | 新增 | 未记录 | Teams Super |
| ratio › evidence › 记录 xai-subscription-pricing › assertion | 新增 | 未记录 | 官方套餐列表将 Super 档列为 15x 用量。 |
| ratio › evidence › 记录 xai-subscription-pricing › source ref | 新增 | 未记录 | xai-subscription-pricing |
| ratio | 新增 | 未记录 | 15 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `xai-subscription-pricing` · xAI X Subscription 套餐周期、价格与用量倍率 | https://docs.x.ai/x-subscription/pricing | 2026-11-05T08:16:03.138Z | 200 | `sha256:1c317f26e6820635b393c4ff3bf4da97d066d441dfaeb26c2ad2f4a0f00763d5` |
| global | `xai-models` · xAI Grok 与多模态模型目录 | https://docs.x.ai/developers/models | 2026-11-05T08:16:03.137Z | 200 | `sha256:a2619f5f3003e2e9b2d5f6d2abb6098ead56863df787d57b0b94ce00347b7ce3` |
| global | `xai-pricing` · xAI xAI API 模型与功能定价 | https://docs.x.ai/developers/pricing | 2026-11-05T08:16:03.234Z | 200 | `sha256:7fae57e7655b980dae06f35311c9d55afd9e7fea490cedfeff601faca2f5fff7` |
| global | `xai-models-api` · xAI Inference API 模型清单端点（调用需账号 API Key） | https://docs.x.ai/developers/rest-api-reference/inference/models | 2026-11-05T08:16:03.653Z | 200 | `sha256:fa8ebbc9bda427b4a9eabd3e3cdf8ede1546b664d2686105a80de1d72ba0513b` |
| global | `xai-chat-completions` · xAI Chat Completions API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions | 2026-11-05T08:16:03.745Z | 200 | `sha256:6e0fc6cee129b0511520035eb31b756b94898a3cef46e2fe9873463c5484b4a5` |
| global | `xai-responses` · xAI Responses API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/responses | 2026-11-05T08:16:03.805Z | 200 | `sha256:c3df54cc89e58d274ce0d5bedd348994d96e415654388898b1e1f7765e35087a` |
| global | `xai-images-api` · xAI Images API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/images | 2026-11-05T08:16:03.891Z | 200 | `sha256:e8ff958abc419b52ffc75f6c7b852976f27994ecf099fbc95b79ce2a56bcff2a` |
| global | `xai-videos-api` · xAI Videos API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 2026-11-05T08:16:03.960Z | 200 | `sha256:43b8c3d4bc01ab3aa4927c2c17b18d85687371364d8d0436437b9dd8d5494587` |
| global | `xai-batch-api` · xAI Batch API 文档 | https://docs.x.ai/developers/advanced-api-usage/batch-api | 2026-11-05T08:16:04.057Z | 200 | `sha256:a876e803b0e657f3295b378d23237855d25010063e40f1d372fc44186774e601` |
| global | `xai-batches-api-reference` · xAI Batches REST API Schema | https://docs.x.ai/developers/rest-api-reference/inference/batches | 2026-11-05T08:16:04.121Z | 200 | `sha256:061f8d496e68551d144d10ef50d07bdfe32f115ef6917da31d6de0154d63bc94` |
| global | `xai-files-api` · xAI Files API 管理文档 | https://docs.x.ai/developers/files/managing-files | 2026-11-05T08:16:04.293Z | 200 | `sha256:a32a2451cb838a3ce7af9f6c9faf5cd51dbf642e1108bd0a74d40e8d432248fb` |
| global | `xai-collections-api` · xAI Collections 管理 API 参考 | https://docs.x.ai/developers/rest-api-reference/collections/collection | 2026-11-05T08:16:04.270Z | 200 | `sha256:f69cd4a1c6083248f482da1f402c0015cf4da0840c1fa03211daee777e8cef5c` |
| global | `xai-tools-overview` · xAI 服务端工具总览 | https://docs.x.ai/developers/tools/overview | 2026-11-05T08:16:04.382Z | 200 | `sha256:4454ac7fb13009472a45550f4cd29bf7800dcf146b6ae85c65645077d13a2da8` |
| global | `xai-web-search` · xAI Web Search 工具文档 | https://docs.x.ai/developers/tools/web-search | 2026-11-05T08:16:04.431Z | 200 | `sha256:112076794096ad8111271025ba1e26dc51408665db316f71259b9b91fcfd6a87` |
| global | `xai-x-search` · xAI X Search 工具文档 | https://docs.x.ai/developers/tools/x-search | 2026-11-05T08:16:04.521Z | 200 | `sha256:f4fe7f828dda626dd9dadc8adf7d2c2b959729cfc7da91c87fb57afd8864688a` |
| global | `xai-collections-search` · xAI Collections Search 工具与 Responses API 文件搜索 | https://docs.x.ai/developers/tools/collections-search | 2026-11-05T08:16:04.579Z | 200 | `sha256:37905942248ba5a42e4d0153034fa623ec0685a2049e2e1e85d27f37ac9db215` |
| global | `xai-code-execution` · xAI Code Execution 工具输入与处理说明 | https://docs.x.ai/developers/tools/code-execution | 2026-11-05T08:16:04.670Z | 200 | `sha256:1750ed48bafa4729c61e97842270322262269603043ef4d6bab6812973d14cfc` |
| global | `xai-tool-streaming-sync` · xAI 服务端工具调用输入与结果输出方式 | https://docs.x.ai/developers/tools/streaming-and-sync | 2026-11-05T08:16:04.683Z | 200 | `sha256:298effb1665326421d6ba2afd47655d7dc87ff3bb778537eca097e41336e3887` |
| global | `xai-voice` · xAI Voice API 通用能力与价格说明 | https://docs.x.ai/developers/model-capabilities/audio/voice | 2026-11-05T08:16:04.815Z | 200 | `sha256:119aa6307beda51e7737c8d448929424befe561acda3af7f28a9bf1f67fd745b` |
| global | `xai-speech-to-speech` · xAI Speech-to-Speech WebSocket 协议与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech | 2026-11-05T08:16:04.951Z | 200 | `sha256:9ede1e7ccb477a8168bf59c01e2f1e18763b50d1534274ca041e5eb124aa2dfc` |
| global | `xai-speech-to-text` · xAI Speech-to-Text 默认模型与接口 | https://docs.x.ai/developers/models/speech-to-text | 2026-11-05T08:16:05.065Z | 200 | `sha256:61d50dc9470f4e7620cfe647e0b97ce9d9c81eb790cc174e6aff7926e2b2f585` |
| global | `xai-speech-to-text-guide` · xAI Speech-to-Text 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text | 2026-11-05T08:16:05.104Z | 200 | `sha256:cbc45c83cfaab2b46b12d5dd8ab836e51f446763d283a37d29f02bf3cd92baed` |
| global | `xai-text-to-speech` · xAI Text-to-Speech 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/text-to-speech | 2026-11-05T08:16:05.319Z | 200 | `sha256:c524ce270c69eace531ebeeb3f32347b714ee00a65eabf5f975ece9f7c1d0410` |
| global | `xai-regions` · xAI 区域端点与模型可用范围 | https://docs.x.ai/developers/advanced-api-usage/regions | 2026-11-05T08:16:05.196Z | 200 | `sha256:c92f04f2c5d0da0282c1372402f97ff0d3fe53db561007495931b1fa15b41130` |
| global | `xai-imagine` · xAI Imagine API 图像与视频能力说明 | https://docs.x.ai/developers/model-capabilities/imagine | 2026-11-05T08:16:05.483Z | 200 | `sha256:fc31caf42df6e962ddf4a76264b7452476b9cf97af64c5b22ff47eb3c322b334` |

## xai 专属证据与核对说明

### xAI 官方通用资料采集候选

- 来源快照：25 份
- 文档观察：25 份；模型 ID 提及：96 条
- 已生成 Offering：15 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- Inference API `/v1/models` 返回认证 API Key 可见型号；本适配器不携带凭证请求该接口。
- 当前供应仅由官方当前定价表中的精确模型价格行证明；目录中的别名、旧型号和文案提及不自动等同于可计价供应。
- US regional endpoint 仅适用于官方明确列出的 grok-4.7 / grok-4.6；global 和 US 区域不合并费率。
- X Subscription 产品订阅与按量 API 费率分开；付费订阅中的 API access 不等于包含 API 调用额度。
- X Subscription 是账号产品订阅，并非 API 按量费率；不能把订阅用量倍率当成 API 价格倍率。
- 本轮未检出固定 Enterprise 价格；官方公开文档只列自助订阅及 Teams 席位价格。
- 本候选未请求需 API Key 的 Models API。
