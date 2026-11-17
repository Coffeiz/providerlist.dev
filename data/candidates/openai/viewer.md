# openai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `openai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-17T05:43:15.111Z |
| 前一候选指纹 | `sha256:1690a3de40285bb18b29c20788bc8e4494e47daa6fb46d5c90a7f06e69a09978` |
| 本次候选指纹 | `sha256:af788514d64146a7f82884c1d9a517854f8b1d64440506fec7752acfeeb03288` |
| 来源快照 | 11 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 90 项，更新 4 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / openai-image-generation

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：Use the Image API’s `POST /v1/images/edits` endpoint for markup-guided edits with supported GPT-Image-2.5 and GPT-Image-2.6 models. For regional edits with the Responses API, use a [mask](#edit-an-image-using-a-mask). Use an annotation layer to show where a change should happen and describe the change in `prompt`. | 差异项（新增；相同内容已省略）：For markup-guided edits with supported GPT-Image-2.5 and GPT-Image-2.6 models, use the `POST /v1/images/edits` endpoint in the Image API. For regional edits with the Responses API, use a [mask](#edit-an-image-using-a-mask). Use an annotation layer to show where a change should happen and describe the change in `prompt`. |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：GPT-Image-2.6 includes [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) for detailed visual work and [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) for fast iteration. Both models support complexity control, markup-guided edits, SVG output, and animated GIF output through the Image API. The existing examples below use GPT-Image-2.5. | 差异项（新增；相同内容已省略）：GPT-Image-2.6 includes [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) for detailed visual work and [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) for fast iteration. Both models support complexity control, markup-guided edits, SVG output, and animated GIF output through the Image API. Explore [Sunburst examples and their generation settings](https://developers.openai.com/api/docs/guides/image-generation?gallery=open). |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：GPT-Image-2.6 includes [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) for detailed visual work and [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) for fast iteration. Both models support complexity control, markup-guided edits, SVG output, and animated GIF output through the Image API. The existing examples below use GPT-Image-2.5. | 差异片段（新增；相同内容已省略）：GPT-Image-2.6 includes [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) for detailed visual work and [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) for fast iteration. Both models support complexity control, markup-guided edits, SVG output, and animated GIF output through the Image API. Explore [Sunburst examples and their generation settings](https://developers.openai.com/api/docs/guides/image-generation?gallery=open). |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：Use the Image API’s `POST /v1/images/edits` endpoint for markup-guided edits with supported GPT-Image-2.5 and GPT-Image-2.6 models. For regional edits with the Responses API, use a [mask](#edit-an-image-using-a-mask). Use an annotation layer to show where a change should happen and describe the change in `prompt`. | 差异项（新增；相同内容已省略）：GPT-Image-2.6 includes [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) for detailed visual work and [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) for fast iteration. Both models support complexity control, markup-guided edits, SVG output, and animated GIF output through the Image API. Explore [Sunburst examples and their generation settings](https://developers.openai.com/api/docs/guides/image-generation?gallery=open).<br>For markup-guided edits with supported GPT-Image-2.5 and GPT-Image-2.6 models, use the `POST /v1/images/edits` endpoint in the Image API. For regional edits with the Responses API, use a [mask](#edit-an-image-using-a-mask). Use an annotation layer to show where a change should happen and describe the change in `prompt`. |

### 市场 / global

#### Model / chatgpt-image-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 chatgpt-image-latest › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 chatgpt-image-latest › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4.1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4.1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4o-mini-tts

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4o-mini-tts › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini-tts › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4o-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4o-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4o

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4o › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5-nano › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-nano › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.1 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.2-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.2-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4-nano › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-nano › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.5-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.5-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.6-luna

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.6-luna › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-luna › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.6-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.6-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-sol › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.6-terra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.6-terra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-terra › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6-astra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6-astra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-astra › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6-luna

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6-luna › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-luna › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-sol › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6.1-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6.1-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-sol › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6.1-terra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6.1-terra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-terra › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-audio-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-audio-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-1.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-audio-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-audio-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-audio

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-audio › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.5-flare

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.5-flare › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-flare › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.5-sunburst

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.5-sunburst › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-sunburst › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.6-flare

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.6-flare › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-flare › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.6-sunburst

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.6-sunburst › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-sunburst › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-1.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-2.1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-2.1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-2.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-2.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime › operation ref | 新增 | 未记录 | 未记录 |

#### Model / o3-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 o3-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / o3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 o3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3 › operation ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `openai-models` · OpenAI API 模型指南（含产品范围说明） | https://developers.openai.com/api/docs/models.md | 2026-11-17T05:43:14.793Z | 200 | `sha256:3dc24546aac5dde41d3889dc1d9209c014faed09458e33d0b745450715dccff4` |
| global | `openai-models-all` · OpenAI 通用完整模型目录与状态标签 | https://developers.openai.com/api/docs/models/all | 2026-11-17T05:43:14.812Z | 200 | `sha256:6903f9c3b53da9ee97f6575d3c9575fcfed444316cf9a3a6b5a2a03946d5cc0f` |
| global | `openai-pricing` · OpenAI API 模型与功能定价 | https://developers.openai.com/api/docs/pricing.md | 2026-11-14T04:02:24.361Z | 200 | `sha256:a1d8bbfbb336a18083d576e6df763a31648c08043f5d43b3e0e8dd3704c9a8be` |
| global | `openai-models-list-api` · OpenAI Models API 清单端点说明（调用需账号 API Key） | https://developers.openai.com/api/reference/resources/models/methods/list | 2026-11-05T04:13:48.742Z | 200 | `sha256:ba65a9a1ae1f860f8a6e518b818787c7bc40e605523ef02f462965da86c5e698` |
| global | `openai-responses-api` · OpenAI Responses API 通用端点文档 | https://developers.openai.com/api/docs/guides/text | 2026-11-13T04:04:29.480Z | 200 | `sha256:16ec5de400846c85e94590e50b2b327606484accbbb0aa3ebcf77c1927c67a58` |
| global | `openai-web-search` · OpenAI Responses API Web Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-web-search.md?api-mode=responses | 2026-11-13T04:04:29.480Z | 200 | `sha256:0808dd53a860f3eef48086ab5181fdd0f9f2c9ff0a5700c6aa9787c3c2c99ca1` |
| global | `openai-file-search` · OpenAI Responses API File Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-file-search.md | 2026-11-13T04:04:29.551Z | 200 | `sha256:68f6c0e0945d7f82adb990dd906245780fc9ada6e7c5cb4b7de4eb747c4af7f7` |
| global | `openai-code-interpreter` · OpenAI Responses API Code Interpreter 输入与输出 | https://developers.openai.com/api/docs/guides/tools-code-interpreter | 2026-11-13T04:04:29.604Z | 200 | `sha256:500281b1276ca08068e49135f975f8308ad5c957fb8b76682396598c6e7d45ba` |
| global | `openai-image-generation` · OpenAI Responses API Image Generation 工具文档 | https://developers.openai.com/api/docs/guides/image-generation.md?generate-images-api=responses | 2026-11-17T05:43:14.967Z | 200 | `sha256:7c749817eba754faccae79a729518be353d52e96037b2f1deeb0470f78d8f5d2` |
| global | `openai-audio-api` · OpenAI Audio API 通用能力与端点文档 | https://developers.openai.com/api/docs/guides/audio | 2026-11-05T04:13:48.936Z | 200 | `sha256:306f3d9fb7bab2d692a1ee37d261e531e9ddbd4f5030890921b5080d60b5af30` |
| global | `openai-chatgpt-pricing` · OpenAI ChatGPT 与 Codex 套餐定价 | https://learn.chatgpt.com/docs/pricing.md?site_locale=en | 2026-11-17T05:43:15.111Z | 200 | `sha256:edb635491bbd9500197ab8a52fd32692d909e69ea93e6efaa29732be8d3a2694` |

## openai 专属证据与核对说明

### OpenAI 官方通用资料采集候选

- 来源快照：11 份
- 文档观察：11 份；模型 ID 提及：281 条
- 已生成 Offering：105 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- GET /v1/models 返回认证账号可见范围，不调用需 Key 的真实接口。
- 公开模型文档混有 API、ChatGPT、预览/弃用与推荐模型范围；候选只记录文档 ID 提及，不能用它充当可调用全集。
- 模型目录和价格按精确 Provider 模型 ID 记录；规范模型规格由维护者手工维护。
