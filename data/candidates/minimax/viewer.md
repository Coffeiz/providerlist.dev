# minimax 自动采集结果

**采集状态：invalid_data** — 候选报告存在变化，但没有生成完整的候选 JSON 和评审 Markdown

---

# minimax 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `minimax` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-20T04:51:51.154Z |
| 前一候选指纹 | `sha256:022bc0ebdb9f18dce10e282bcabe6f0a6fb8726951e7dbaca6ee5991d4cf5473` |
| 本次候选指纹 | `sha256:00e07fc4395bfd060c51a94daba35abc4ae6f05dbb1d4a98b8fb298128ca70c7` |
| 来源快照 | 28 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 56 项，更新 8 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / minimax-cn-anthropic-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-asr-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-audio-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-function-call-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-image-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-m-plan-intro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-m-plan-page

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-mcp-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：&gt; **4K 生图限时 5 折：** **即日起至 2026 年 11 月 18 日 00:00**（北京时间，结束时刻不含），MiniMax-H3-Image 和 MiniMax-H3-Image-Highspeed 最终交付图片的宽 × 高 ≥ 1660 万像素，即享整次请求费用 5 折。 | 差异项（新增；相同内容已省略）：&gt; **4K 生图限时 5 折：** MiniMax-H3-Image 和 MiniMax-H3-Image-Highspeed 最终交付图片的宽 × 高 ≥ 1660 万像素，即享整次请求费用 5 折。 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-video-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：可通过可选参数 `generate_audio` 控制视频是否包含音频：默认 `true`，输出有声视频；设置为 `false`，输出无声视频。<br>无声视频（generate_audio=false）:<br>summary: 生成无声视频<br>generate_audio: false<br>generate_audio:<br>控制生成的视频是否包含音频。可选，默认 `true`。<br>- `true`：输出有声视频。<br>- `false`：输出无声视频。 |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：required: true<br>responses:<br>'200':<br>description: &gt;-<br>创建成功后返回 `task_id`。使用该 `task_id`<br>调用[查询任务](/api-reference/video-generation-v2-query)接口获取任务状态与结果。<br>**查询任务成功响应示例**<br>```json | 差异片段（新增；相同内容已省略）：可通过可选参数 `generate_audio` 控制视频是否包含音频：默认 `true`，输出有声视频；设置为 `false`，输出无声视频。<br>无声视频（generate_audio=false）:<br>summary: 生成无声视频<br>value:<br>model: MiniMax-H3<br>content:<br>- type: text<br>text: 一艘小纸船缓缓漂过平静的池塘。 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>如果已有符合 MiniMax-H3 768P 输出规格的成片，可以调用[创建视频再生成任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-regeneration.md)接口输出 2K 视频。请求时需原样提交生成 768P 视频时使用的全部 `content`，并额外加入且仅加入一个 `type=video_url`、`role=base_video` 的源视频项。 | 差异项（新增 15 项）<details><summary>展开完整差异</summary><ul><li>## 控制视频声音</li><li>创建视频任务时，可通过可选布尔参数 `generate_audio` 控制视频是否包含音频，默认值为 `true`。</li><li>* `true`：输出有声视频。</li><li>* `false`：输出无声视频。</li><li>文生视频、图生视频和多模态参考生视频均可在请求体中设置该参数。</li><li>下方示例默认输出有声视频；调用 `invoke_text_to_video(generate_audio=False)` 可生成无声视频。</li><li>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:</li><li>"generate_audio": generate_audio,</li><li># task_id = invoke_text_to_video(generate_audio=False)  # 文生视频，无声视频</li><li>如果已有符合 MiniMax-H3 768P 输出规格的视频，可以调用[创建视频再生成任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-regeneration.md)接口输出 2K 视频，选择以下一种方式：</li><li>* **按源视频**：原样提交生成 768P 视频时实际送入模型的全部 `content`（包括 H3-Context-IR 处理后的最终 prompt），再加入且仅加入一个 `type=video_url`、`role=base_video` 的源视频项。`base_video` 必须包含音轨。</li><li>再生成时也可设置 `generate_audio`：</li><li>* **按源视频**：默认 `true`，输出有声视频；设置为 `false`，输出无声视频。</li><li>* **按任务 ID**：不传时沿用源任务设置。若源任务设置了 `generate_audio=false`，结果始终为无声视频；否则，传 `true` 输出有声视频，传 `false` 输出无声视频。</li><li>无音轨的 `base_video` 会在异步媒体校验阶段被拒绝。返回 `task_id` 不代表媒体校验通过，请查询任务终态。</li></ul></details> |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>"content": [<br>{"type": "text", "text": "A little girl grows up."},<br># role=first_frame 指定起始画面<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},<br># role=last_frame 指定结束画面<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/97b7cd08-764e-4b8b-a7bf-87a0bd898575.jpeg"}, "role": "last_frame"},<br>], | 差异片段（新增；相同内容已省略）：## 控制视频声音<br>创建视频任务时，可通过可选布尔参数 `generate_audio` 控制视频是否包含音频，默认值为 `true`。<br>* `true`：输出有声视频。<br>* `false`：输出无声视频。<br>文生视频、图生视频和多模态参考生视频均可在请求体中设置该参数。<br>下方示例默认输出有声视频；调用 `invoke_text_to_video(generate_audio=False)` 可生成无声视频。<br>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:<br>"generate_audio": generate_audio, |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-anthropic-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-audio-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-function-call-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-image-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-m-plan-intro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-m-plan-page

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-mcp-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：&gt; **Limited-Time Offer: 50% Off 4K Image Generation:** **From now until November 17, 2026, at 16:00 UTC** (exclusive), enjoy 50% off the total request cost for MiniMax-H3-Image and MiniMax-H3-Image-Highspeed when the final delivered image has at least 16,600,000 pixels (width × height). | 差异项（新增；相同内容已省略）：&gt; **Limited-Time Offer: 50% Off 4K Image Generation:** Enjoy 50% off the total request cost for MiniMax-H3-Image and MiniMax-H3-Image-Highspeed when the final delivered image has at least 16,600,000 pixels (width × height). |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>If you have a video that meets the MiniMax-H3 768P output specifications, use [Create Video Regeneration Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-regeneration.md) to produce a 2K video. The request must reproduce all `content` used to generate the 768P video and add exactly one source-video item with `type=video_url` and `role=base_video`. | 差异项（新增 15 项）<details><summary>展开完整差异</summary><ul><li>## Control Video Audio</li><li>Use the optional boolean `generate_audio` parameter when creating a video task to control whether the video includes audio. The default is `true`.</li><li>* `true`: output a video with audio.</li><li>* `false`: output a silent video.</li><li>Set this parameter in the request body for text-to-video, image-to-video, or reference generation.</li><li>The example below outputs a video with audio by default. Call `invoke_text_to_video(generate_audio=False)` to generate a silent video.</li><li>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:</li><li>"generate_audio": generate_audio,</li><li># task_id = invoke_text_to_video(generate_audio=False)  # Text-to-video, silent video</li><li>To produce a 2K video from a video that meets the MiniMax-H3 768P output specifications, use [Create Video Regeneration Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-regeneration.md) and choose one input mode:</li><li>* **By source video**: reproduce all `content` actually sent to the model for the 768P generation, including the final prompt after H3-Context-IR processing, then add exactly one source-video item with `type=video_url` and `role=base_video`. The `base_video` must contain an audio track.</li><li>Regeneration also supports `generate_audio`:</li><li>* **By source video**: defaults to `true` to output a video with audio; `false` outputs a silent video.</li><li>* **By task ID**: inherits the source task setting when omitted. If the source task was created with `generate_audio=false`, the result is always a silent video. Otherwise, `true` outputs a video with audio and `false` outputs a silent video.</li><li>A `base_video` without an audio track is rejected during asynchronous media validation. Receiving a `task_id` does not mean media validation has passed; query the final task status.</li></ul></details> |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>payload = {<br>"model": MODEL,<br>"content": [<br>{"type": "text", "text": "A little girl grows up."},<br># role=first_frame specifies the opening frame<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},<br># role=last_frame specifies the ending frame | 差异片段（新增；相同内容已省略）：## Control Video Audio<br>Use the optional boolean `generate_audio` parameter when creating a video task to control whether the video includes audio. The default is `true`.<br>* `true`: output a video with audio.<br>* `false`: output a silent video.<br>Set this parameter in the request body for text-to-video, image-to-video, or reference generation.<br>The example below outputs a video with audio by default. Call `invoke_text_to_video(generate_audio=False)` to generate a silent video.<br>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:<br>"generate_audio": generate_audio, |
| extraction | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `minimax-cn-model-catalog` · MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-20T04:51:47.634Z | 200 | `sha256:ad27a06064bd5ea1130bc38ed6c95383a363e1e9485174c96310dde2c664d3dc` |
| cn | `minimax-cn-pricing` · MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-20T04:51:47.674Z | 200 | `sha256:27173a027ea69cf5b1e73a2bf530be892ed269282a8d5e7f80436406572d2b6c` |
| cn | `minimax-cn-video-api` · MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-20T04:51:51.154Z | 200 | `sha256:685b347f6fbf1fdda56c350275fe52c68de05e78e9d2d63d0a8d54cf8c2ed8ac` |
| cn | `minimax-cn-video-guide` · MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-20T04:51:48.092Z | 200 | `sha256:1d928087e3c926cf6e747608c3819c693d69705656ecaa6936cc3c42238b4615` |
| cn | `minimax-cn-asr-api` · MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-20T04:51:48.493Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | `minimax-cn-audio-guide` · MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-20T04:51:48.429Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | `minimax-cn-image-guide` · MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-20T04:51:48.441Z | 200 | `sha256:e91c10f1f267455fa8baa24ab837950fa7fc2a562d2a492592486e12e5b6018f` |
| cn | `minimax-cn-model-overview` · MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-20T04:51:48.484Z | 200 | `sha256:d581cf3bc0db9f4eb5db70d3f1658634f35b41153ed6908d619a1b44b7231730` |
| cn | `minimax-cn-anthropic-api` · MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-20T04:51:49.600Z | 200 | `sha256:a93a53d22ca1ba023144ddb12993da88c1f146058e23bba41a017dec3ec475d7` |
| cn | `minimax-cn-function-call-api` · MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-20T04:51:48.902Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | `minimax-cn-responses-api` · MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-20T04:51:51.009Z | 200 | `sha256:50e8dcf38940e962869f3d60cfa527b30ff56fedd94c04cd68e3c93caeacfdbb` |
| cn | `minimax-cn-file-upload-api` · MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-20T04:51:49.680Z | 200 | `sha256:11b6a9b800ded4ce14deed175239816d5149053f3ad839cd282506deab7e20c1` |
| cn | `minimax-cn-mcp-guide` · MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-20T04:51:50.088Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | `minimax-cn-m-plan-page` · MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-20T04:51:50.886Z | 200 | `sha256:beb5a1a7a9061d0f679eb8fc32cebb7326b969a78bd1d01cc9cbee0d8981bd9b` |
| cn | `minimax-cn-m-plan-intro` · MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-20T04:51:50.057Z | 200 | `sha256:95b089500d8fa4854e03ee2621548845f7552c03104e46bcf9a96ca79cb846c8` |
| global | `minimax-global-model-catalog` · MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-20T04:51:49.142Z | 200 | `sha256:0183792f121a53fe2ad6bb724a4fc464b20543959175d85a707025884f37a96d` |
| global | `minimax-global-video-guide` · MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-20T04:51:49.173Z | 200 | `sha256:52f32aa591e77cf6ae81ce4007cd01c5e53ca46264eecc0dbfc5214b5be44c39` |
| global | `minimax-global-audio-guide` · MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-20T04:51:49.171Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | `minimax-global-image-guide` · MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-20T04:51:49.188Z | 200 | `sha256:f05a8b9aeb8e1609e0240399f2fe441184d19fda045a57f298a3db987519c560` |
| global | `minimax-global-model-overview` · MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-20T04:51:49.152Z | 200 | `sha256:90cd6051d407dc84ff953240d12397ad284fc5de04472765ef1246fe56cdb5eb` |
| global | `minimax-global-pricing` · MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-20T04:51:49.156Z | 200 | `sha256:c7c3906d609bbbddd2d203daae2b0320b087d08063ca0cd80b98b5f84733b1a1` |
| global | `minimax-global-file-upload-api` · MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-20T04:51:49.180Z | 200 | `sha256:e032377205c22f839667b23c8ee96e46d80d5c37c95352e0ca9b4fab6970b411` |
| global | `minimax-global-mcp-guide` · MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-20T04:51:49.143Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | `minimax-global-anthropic-api` · MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-20T04:51:49.182Z | 200 | `sha256:c622367780ee9de862cb6be5c48f0d9e77ca272363a23843a20d2a5b1e3b3e39` |
| global | `minimax-global-responses-api` · MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-20T04:51:49.154Z | 200 | `sha256:ada2c3bb40e24dffb8ba23f5f487c8811436012df5c16306ebf45f67e2a9c646` |
| global | `minimax-global-function-call-api` · MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-20T04:51:49.166Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | `minimax-global-m-plan-page` · MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-20T04:51:49.198Z | 200 | `sha256:a0cb41e1219a52adb496bf9934d3c1ef8089a3d776d7c2857dd8193a100980e9` |
| global | `minimax-global-m-plan-intro` · MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-20T04:51:49.192Z | 200 | `sha256:5066155c189b75927fd7cf910a7c7044398cb5441468797f0cdd71fb6c602484` |

## minimax 专属证据与核对说明

### MiniMax IR 观察候选

- IR 指纹：`sha256:00e07fc4395bfd060c51a94daba35abc4ae6f05dbb1d4a98b8fb298128ca70c7`
- 来源快照：28 份
- 当前输出保留 CN/Global 目录、价格和 API 文档观察，不投影领域字段。

#### 待人工核对

- 目录状态、Token 价格、视频/语音 API、协议参数和计划权益仍需按市场映射到 IR 领域字段；当前统一候选只保留来源观察。

#### 来源快照

- `minimax-cn-model-catalog`：https://platform.minimax.cn/docs/faq/models.md
- `minimax-cn-pricing`：https://platform.minimax.cn/docs/pricing/overview.md
- `minimax-cn-video-api`：https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md
- `minimax-cn-video-guide`：https://platform.minimax.cn/docs/guides/video-generation.md
- `minimax-cn-asr-api`：https://platform.minimax.cn/docs/api-reference/speech-to-text.md
- `minimax-cn-audio-guide`：https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md
- `minimax-cn-image-guide`：https://platform.minimax.cn/docs/guides/image-generation.md
- `minimax-cn-model-overview`：https://platform.minimax.cn/docs/guides/models-intro.md
- `minimax-cn-anthropic-api`：https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md
- `minimax-cn-function-call-api`：https://platform.minimax.cn/docs/guides/text-m3-function-call.md
- `minimax-cn-responses-api`：https://platform.minimax.cn/docs/api-reference/responses-create.md
- `minimax-cn-file-upload-api`：https://platform.minimax.cn/docs/api-reference/file-management-upload.md
- `minimax-cn-mcp-guide`：https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md
- `minimax-cn-m-plan-page`：https://www.minimax.cn/m-plan
- `minimax-cn-m-plan-intro`：https://platform.minimax.cn/docs/m-plan/intro.md
- `minimax-global-model-catalog`：https://platform.minimax.io/docs/faq/models.md
- `minimax-global-video-guide`：https://platform.minimax.io/docs/guides/video-generation.md
- `minimax-global-audio-guide`：https://platform.minimax.io/docs/guides/speech-t2a-websocket.md
- `minimax-global-image-guide`：https://platform.minimax.io/docs/guides/image-generation.md
- `minimax-global-model-overview`：https://platform.minimax.io/docs/guides/models-intro.md
- `minimax-global-pricing`：https://platform.minimax.io/docs/pricing/overview.md
- `minimax-global-file-upload-api`：https://platform.minimax.io/docs/api-reference/file-management-upload.md
- `minimax-global-mcp-guide`：https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md
- `minimax-global-anthropic-api`：https://platform.minimax.io/docs/api-reference/text-anthropic-api.md
- `minimax-global-responses-api`：https://platform.minimax.io/docs/api-reference/responses-create.md
- `minimax-global-function-call-api`：https://platform.minimax.io/docs/guides/text-m3-function-call.md
- `minimax-global-m-plan-page`：https://www.minimax.io/m-plan
- `minimax-global-m-plan-intro`：https://platform.minimax.io/docs/m-plan/intro.md
