# xai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-15T03:48:32.311Z |
| 前一候选指纹 | `sha256:774d7fdf06c0640a700e1abc2a8f6ea3e6d784b5db781a904c9feed3c4cef39c` |
| 本次候选指纹 | `sha256:10912edd228c31d4db7b9ee65f9fb73a5ffed0b90eafc072dfe0065d0fd93ab7` |
| 来源快照 | 25 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 32 项，更新 4 项，缺席待核实 673 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 xai-models › note | 更新 | 由官方定价精确模型 ID 映射当前价格模型；目前 15 条。目录中的未计价文案不自动升级为供应。 | 由官方定价精确模型 ID 映射当前价格模型；目前 10 条。目录中的未计价文案不自动升级为供应。 |

### 文档观察

#### 来源 / xai-imagine

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：The Imagine API lets you generate and edit images and videos with Grok Imagine models. Use it for image generation, image editing with up to 5 reference images, video generation from text or still images, video editing, and more.<br>Generate new images from text prompts with Grok Imagine models. Configure output count (up to 10 images per request), aspect ratio, resolution, and response format.<br>Edit a source image with natural language. Provide a public image URL or base64-encoded data URI, then describe the change you want Grok Imagine to apply. Multi-image editing supports up to 5 source images in a single request for combining subjects, transferring styles, and composing scenes.<br>Beyond the top use cases above, the Imagine API supports several additional workflows. The [Video Overview](/developers/model-capabilities/video/overview) compares the video models and shows each mode with real inputs and outputs. | 差异项（新增 7 项）<details><summary>展开完整差异</summary><ul><li># Image &amp; Video Overview</li><li>The image &amp; video API lets you generate and edit images and videos with Grok image &amp; video models. Use it for image generation, image editing with up to 5 reference images, video generation from text or still images, video editing, and more.</li><li>Generate new images from text prompts with Grok image models. Configure output count (up to 10 images per request), aspect ratio, resolution, and response format.</li><li>Edit a source image with natural language. Provide a public image URL or base64-encoded data URI, then describe the change you want the model to apply. Multi-image editing supports up to 5 source images in a single request for combining subjects, transferring styles, and composing scenes.</li><li>Beyond the top use cases above, the image &amp; video API supports several additional workflows. The [Video Overview](/developers/model-capabilities/video/overview) compares the video models and shows each mode with real inputs and outputs.</li><li>* **[Files API Integration](/developers/model-capabilities/imagine/files)** — Reference stored files as image &amp; video inputs by ID, persist generated assets to the Files API, and optionally create a permanent shareable public URL — all in a single request.</li><li>The image &amp; video APIs are built for production workloads with strict security and compliance requirements. Generated media is subject to content policy review and is not used for training.</li></ul></details> |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：# Imagine Overview<br>The Imagine API lets you generate and edit images and videos with Grok Imagine models. Use it for image generation, image editing with up to 5 reference images, video generation from text or still images, video editing, and more.<br>Generate new images from text prompts with Grok Imagine models. Configure output count (up to 10 images per request), aspect ratio, resolution, and response format.<br>Edit a source image with natural language. Provide a public image URL or base64-encoded data URI, then describe the change you want Grok Imagine to apply. Multi-image editing supports up to 5 source images in a single request for combining subjects, transferring styles, and composing scenes. | 差异片段（新增；相同内容已省略）：# Image &amp; Video Overview<br>The image &amp; video API lets you generate and edit images and videos with Grok image &amp; video models. Use it for image generation, image editing with up to 5 reference images, video generation from text or still images, video editing, and more.<br>Generate new images from text prompts with Grok image models. Configure output count (up to 10 images per request), aspect ratio, resolution, and response format.<br>Edit a source image with natural language. Provide a public image URL or base64-encoded data URI, then describe the change you want the model to apply. Multi-image editing supports up to 5 source images in a single request for combining subjects, transferring styles, and composing scenes. |

#### 来源 / xai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| tables › 记录 Image &amp; Video Pricing › headers | 新增 | 未记录 | • Model<br>• Cost |
| tables › 记录 Image &amp; Video Pricing › heading | 新增 | 未记录 | Image &amp; Video Pricing |
| tables › 记录 Image &amp; Video Pricing › rows › 记录 grok-imagine-image | 新增 | 未记录 | • grok-imagine-image<br>• $0.02 / image |
| tables › 记录 Image &amp; Video Pricing › rows › 记录 grok-imagine-image-2.0 | 新增 | 未记录 | • grok-imagine-image-2.0<br>• $0.04 / image |
| tables › 记录 Image &amp; Video Pricing › rows › 记录 grok-imagine-video | 新增 | 未记录 | • grok-imagine-video<br>• $0.050 / sec |
| tables › 记录 Image &amp; Video Pricing › rows › 记录 grok-imagine-video-1.5 | 新增 | 未记录 | • grok-imagine-video-1.5<br>• $0.080 / sec |
| tables › 记录 Image &amp; Video Pricing › rows › 记录 grok-imagine-video-1.5-lite | 新增 | 未记录 | • grok-imagine-video-1.5-lite<br>• $0.020 / sec |
| tables › 记录 Imagine Pricing › headers | 缺席待核实 | • Model<br>• Cost | 未记录 |
| tables › 记录 Imagine Pricing › heading | 缺席待核实 | Imagine Pricing | 未记录 |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-image | 缺席待核实 | • grok-imagine-image<br>• $0.02 / image | 未记录 |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-image-2.0 | 缺席待核实 | • grok-imagine-image-2.0<br>• $0.04 / image | 未记录 |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-video | 缺席待核实 | • grok-imagine-video<br>• $0.050 / sec | 未记录 |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-video-1.5 | 缺席待核实 | • grok-imagine-video-1.5<br>• $0.080 / sec | 未记录 |
| tables › 记录 Imagine Pricing › rows › 记录 grok-imagine-video-1.5-lite | 缺席待核实 | • grok-imagine-video-1.5-lite<br>• $0.020 / sec | 未记录 |
| tables › 记录 Tool Invocation Costs › rows › 记录 Image Generation | 更新 | 差异项（删除；相同内容已省略）：[Imagine API rates](/developers/pricing#imagine-api-pricing) | 差异项（新增；相同内容已省略）：[Image API rates](/developers/pricing#imagine-api-pricing) |

### 市场 / global

#### Capability / collection-management

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / file-storage

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / text-to-speech

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-0309-non-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-0309-non-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-non-reasoning › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-0309-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-0309-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-reasoning › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-multi-agent-0309

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-multi-agent-0309 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-multi-agent-0309 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.3 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.6

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.6 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.6 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.7

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.7 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.7 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-build-0.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-build-0.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-build-0.1 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-imagine-image-2.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 使用官方精确模型 ID。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 展示名称（display_name） | 缺席待核实 | grok-imagine-image-2.0 | 未记录 |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 Images API 文档定义图像生成请求。 | 未记录 |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › ID（id） | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 Images API 文档定义图像生成请求。 | 未记录 |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › 类别（kind） | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Images API 参考列出图像编辑路径。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） | 缺席待核实 | image-edits | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 按官方用途 image_generation 分类。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /images/edits。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） | 缺席待核实 | /images/edits | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › assertion | 缺席待核实 | openai-images API 协议。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol | 缺席待核实 | openai-images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-image-2.0；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids | 缺席待核实 | • grok-imagine-image-2.0 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Images API 参考列出图像生成与编辑路径。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） | 缺席待核实 | image-generations | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 按官方用途 image_generation 分类。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /images/generations。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） | 缺席待核实 | /images/generations | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › assertion | 缺席待核实 | openai-images API 协议。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol | 缺席待核实 | openai-images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-image-2.0；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids | 缺席待核实 | • grok-imagine-image-2.0 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Images API 参考列出异步生成结果查询路径。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） | 缺席待核实 | image-results | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出 GET 方法。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） | 缺席待核实 | GET | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 按官方用途 image_generation 分类。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /images/{request_id}。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） | 缺席待核实 | /images/{request_id} | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › assertion | 缺席待核实 | openai-images API 协议。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol | 缺席待核实 | openai-images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-image-2.0；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids | 缺席待核实 | • grok-imagine-image-2.0 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › operation ref › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 按定价表所在 API 能力映射。 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › operation ref › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › operation ref | 缺席待核实 | image_generation | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价页明确价格币种为 USD。 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | USD | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-image-2.0 的 0.04 USD/per_image 价格。 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-image-2.0 的 0.04 USD/per_image 价格。 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计费指标（metric） | 缺席待核实 | generated_image | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计量单位（unit） | 缺席待核实 | per_image | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image | 缺席待核实 | 0.04 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价表以精确模型 ID 列价。 | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image-2.0 › 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-image-2.0 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-image-2.0 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI API 定价来源属于 global Service。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | global | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | priced_current | 未记录 |

#### Model / grok-imagine-image

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 使用官方精确模型 ID。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 展示名称（display_name） | 缺席待核实 | grok-imagine-image | 未记录 |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 Images API 文档定义图像生成请求。 | 未记录 |
| operations › 记录 image_generation › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › ID（id） | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 Images API 文档定义图像生成请求。 | 未记录 |
| operations › 记录 image_generation › 类别（kind） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › 类别（kind） | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Images API 参考列出图像编辑路径。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › ID（id） | 缺席待核实 | image-edits | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 按官方用途 image_generation 分类。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › operation kind | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /images/edits。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › API 路径（path_template） | 缺席待核实 | /images/edits | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › assertion | 缺席待核实 | openai-images API 协议。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › protocol | 缺席待核实 | openai-images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-image；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-edits › provider model ids | 缺席待核实 | • grok-imagine-image | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Images API 参考列出图像生成与编辑路径。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › ID（id） | 缺席待核实 | image-generations | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 按官方用途 image_generation 分类。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › operation kind | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /images/generations。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › API 路径（path_template） | 缺席待核实 | /images/generations | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › assertion | 缺席待核实 | openai-images API 协议。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › protocol | 缺席待核实 | openai-images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-image；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-generations › provider model ids | 缺席待核实 | • grok-imagine-image | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › callability › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Images API 参考列出异步生成结果查询路径。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › ID（id） | 缺席待核实 | image-results | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出 GET 方法。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › HTTP 方法（method） | 缺席待核实 | GET | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › assertion | 缺席待核实 | Route 按官方用途 image_generation 分类。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › operation kind | 缺席待核实 | image_generation | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /images/{request_id}。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › API 路径（path_template） | 缺席待核实 | /images/{request_id} | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › assertion | 缺席待核实 | openai-images API 协议。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › protocol | 缺席待核实 | openai-images | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-image；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids › evidence › 记录 xai-images-api › source ref | 缺席待核实 | xai-images-api | 未记录 |
| operations › 记录 image_generation › routes › 记录 image-results › provider model ids | 缺席待核实 | • grok-imagine-image | 未记录 |
| prices › 记录 grok-imagine-image › operation ref › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 按定价表所在 API 能力映射。 | 未记录 |
| prices › 记录 grok-imagine-image › operation ref › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image › operation ref | 缺席待核实 | image_generation | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价页明确价格币种为 USD。 | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | USD | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-image 的 0.02 USD/per_image 价格。 | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-image 的 0.02 USD/per_image 价格。 | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计费指标（metric） | 缺席待核实 | generated_image | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image › 计量单位（unit） | 缺席待核实 | per_image | 未记录 |
| prices › 记录 grok-imagine-image › 价格信息（pricing） › 记录 0 › rates › 记录 generated_image | 缺席待核实 | 0.02 | 未记录 |
| prices › 记录 grok-imagine-image › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价表以精确模型 ID 列价。 | 未记录 |
| prices › 记录 grok-imagine-image › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-image › 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-image | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-image | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI API 定价来源属于 global Service。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | global | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | priced_current | 未记录 |

#### Model / grok-imagine-video-1.5-lite

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 使用官方精确模型 ID。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 展示名称（display_name） | 缺席待核实 | grok-imagine-video-1.5-lite | 未记录 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 Videos API 文档定义异步视频生成请求。 | 未记录 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › ID（id） | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 Videos API 文档定义异步视频生成请求。 | 未记录 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › 类别（kind） | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频编辑端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） | 缺席待核实 | video-edits | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/edits。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） | 缺席待核实 | /videos/edits | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids | 缺席待核实 | • grok-imagine-video-1.5-lite | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频延展端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） | 缺席待核实 | video-extensions | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/extensions。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） | 缺席待核实 | /videos/extensions | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids | 缺席待核实 | • grok-imagine-video-1.5-lite | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频生成、编辑、延展与状态查询端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） | 缺席待核实 | video-generations | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/generations。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） | 缺席待核实 | /videos/generations | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids | 缺席待核实 | • grok-imagine-video-1.5-lite | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出以 request_id 查询异步任务结果的路径。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） | 缺席待核实 | video-results | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 GET 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） | 缺席待核实 | GET | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/{request_id}。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） | 缺席待核实 | /videos/{request_id} | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5-lite；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids | 缺席待核实 | • grok-imagine-video-1.5-lite | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › operation ref › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 按定价表所在 API 能力映射。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › operation ref › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › operation ref | 缺席待核实 | video_generation | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价页明确价格币种为 USD。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | USD | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-video-1.5-lite 的 0.020 USD/per_generated_second 价格。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-video-1.5-lite 的 0.020 USD/per_generated_second 价格。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计费指标（metric） | 缺席待核实 | generated_second | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计量单位（unit） | 缺席待核实 | per_generated_second | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second | 缺席待核实 | 0.020 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价表以精确模型 ID 列价。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5-lite › 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-video-1.5-lite | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-video-1.5-lite | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI API 定价来源属于 global Service。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | global | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | priced_current | 未记录 |

#### Model / grok-imagine-video-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 使用官方精确模型 ID。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 展示名称（display_name） | 缺席待核实 | grok-imagine-video-1.5 | 未记录 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 Videos API 文档定义异步视频生成请求。 | 未记录 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › ID（id） | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 Videos API 文档定义异步视频生成请求。 | 未记录 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › 类别（kind） | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频编辑端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） | 缺席待核实 | video-edits | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/edits。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） | 缺席待核实 | /videos/edits | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids | 缺席待核实 | • grok-imagine-video-1.5 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频延展端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） | 缺席待核实 | video-extensions | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/extensions。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） | 缺席待核实 | /videos/extensions | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids | 缺席待核实 | • grok-imagine-video-1.5 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频生成、编辑、延展与状态查询端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） | 缺席待核实 | video-generations | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/generations。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） | 缺席待核实 | /videos/generations | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids | 缺席待核实 | • grok-imagine-video-1.5 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出以 request_id 查询异步任务结果的路径。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） | 缺席待核实 | video-results | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 GET 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） | 缺席待核实 | GET | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/{request_id}。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） | 缺席待核实 | /videos/{request_id} | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video-1.5；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids | 缺席待核实 | • grok-imagine-video-1.5 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › operation ref › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 按定价表所在 API 能力映射。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › operation ref › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › operation ref | 缺席待核实 | video_generation | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价页明确价格币种为 USD。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | USD | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-video-1.5 的 0.080 USD/per_generated_second 价格。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-video-1.5 的 0.080 USD/per_generated_second 价格。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计费指标（metric） | 缺席待核实 | generated_second | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计量单位（unit） | 缺席待核实 | per_generated_second | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second | 缺席待核实 | 0.080 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价表以精确模型 ID 列价。 | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video-1.5 › 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-video-1.5 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-video-1.5 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI API 定价来源属于 global Service。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | global | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | priced_current | 未记录 |

#### Model / grok-imagine-video

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 使用官方精确模型 ID。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 展示名称（display_name） | 缺席待核实 | grok-imagine-video | 未记录 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 Videos API 文档定义异步视频生成请求。 | 未记录 |
| operations › 记录 video_generation › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › ID（id） | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 Videos API 文档定义异步视频生成请求。 | 未记录 |
| operations › 记录 video_generation › 类别（kind） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › 类别（kind） | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频编辑端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › ID（id） | 缺席待核实 | video-edits | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/edits。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › API 路径（path_template） | 缺席待核实 | /videos/edits | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-edits › provider model ids | 缺席待核实 | • grok-imagine-video | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频延展端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › ID（id） | 缺席待核实 | video-extensions | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/extensions。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › API 路径（path_template） | 缺席待核实 | /videos/extensions | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-extensions › provider model ids | 缺席待核实 | • grok-imagine-video | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出异步视频生成、编辑、延展与状态查询端点。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › ID（id） | 缺席待核实 | video-generations | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/generations。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › API 路径（path_template） | 缺席待核实 | /videos/generations | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-generations › provider model ids | 缺席待核实 | • grok-imagine-video | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Videos API 参考列出以 request_id 查询异步任务结果的路径。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › ID（id） | 缺席待核实 | video-results | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出 GET 方法。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › HTTP 方法（method） | 缺席待核实 | GET | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | Route 按官方用途 video_generation 分类。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › operation kind | 缺席待核实 | video_generation | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 官方 API 文档列出路径 /videos/{request_id}。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › API 路径（path_template） | 缺席待核实 | /videos/{request_id} | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | rest-json API 协议。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › protocol | 缺席待核实 | rest-json | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › assertion | 缺席待核实 | 价格表确认模型 ID grok-imagine-video；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids › evidence › 记录 xai-videos-api › source ref | 缺席待核实 | xai-videos-api | 未记录 |
| operations › 记录 video_generation › routes › 记录 video-results › provider model ids | 缺席待核实 | • grok-imagine-video | 未记录 |
| prices › 记录 grok-imagine-video › operation ref › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 按定价表所在 API 能力映射。 | 未记录 |
| prices › 记录 grok-imagine-video › operation ref › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video › operation ref | 缺席待核实 | video_generation | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价页明确价格币种为 USD。 | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | USD | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-video 的 0.050 USD/per_generated_second 价格。 | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI 定价表列出 grok-imagine-video 的 0.050 USD/per_generated_second 价格。 | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计费指标（metric） | 缺席待核实 | generated_second | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second › 计量单位（unit） | 缺席待核实 | per_generated_second | 未记录 |
| prices › 记录 grok-imagine-video › 价格信息（pricing） › 记录 0 › rates › 记录 generated_second | 缺席待核实 | 0.050 | 未记录 |
| prices › 记录 grok-imagine-video › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方定价表以精确模型 ID 列价。 | 未记录 |
| prices › 记录 grok-imagine-video › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-imagine-video › 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-video | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 当前 Imagine 价格表含精确模型行，作为公开按量供应证据。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-imagine-video | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI API 定价来源属于 global Service。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | global | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 逐条映射官方定价表。 | 未记录 |
| supply observations › 记录 0 › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | priced_current | 未记录 |

#### Model / grok-voice-3.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-voice-3.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-voice-3.0 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-voice-transcribe-2.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-voice-transcribe-2.0 › capability ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `xai-subscription-pricing` · xAI X Subscription 套餐周期、价格与用量倍率 | https://docs.x.ai/x-subscription/pricing | 2026-11-15T03:48:29.888Z | 200 | `sha256:1c317f26e6820635b393c4ff3bf4da97d066d441dfaeb26c2ad2f4a0f00763d5` |
| global | `xai-models` · xAI Grok 与多模态模型目录 | https://docs.x.ai/developers/models | 2026-11-15T03:48:29.889Z | 200 | `sha256:2fd1eea4ca4d27ec7376f3a4ab6e75e076d792031cb27bf10818be4f2b505cad` |
| global | `xai-pricing` · xAI xAI API 模型与功能定价 | https://docs.x.ai/developers/pricing | 2026-11-15T03:48:29.968Z | 200 | `sha256:fc804af10dbe9e5256c2dd760d617f205194afb45b92612c93b3dc29cded80c4` |
| global | `xai-models-api` · xAI Inference API 模型清单端点（调用需账号 API Key） | https://docs.x.ai/developers/rest-api-reference/inference/models | 2026-11-15T03:48:30.176Z | 200 | `sha256:fa8ebbc9bda427b4a9eabd3e3cdf8ede1546b664d2686105a80de1d72ba0513b` |
| global | `xai-chat-completions` · xAI Chat Completions API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions | 2026-11-15T03:48:30.308Z | 200 | `sha256:6e0fc6cee129b0511520035eb31b756b94898a3cef46e2fe9873463c5484b4a5` |
| global | `xai-responses` · xAI Responses API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/responses | 2026-11-15T03:48:30.280Z | 200 | `sha256:c3df54cc89e58d274ce0d5bedd348994d96e415654388898b1e1f7765e35087a` |
| global | `xai-images-api` · xAI Images API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/images | 2026-11-15T03:48:30.411Z | 200 | `sha256:e8ff958abc419b52ffc75f6c7b852976f27994ecf099fbc95b79ce2a56bcff2a` |
| global | `xai-videos-api` · xAI Videos API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 2026-11-15T03:48:30.537Z | 200 | `sha256:43b8c3d4bc01ab3aa4927c2c17b18d85687371364d8d0436437b9dd8d5494587` |
| global | `xai-batch-api` · xAI Batch API 文档 | https://docs.x.ai/developers/advanced-api-usage/batch-api | 2026-11-15T03:48:30.633Z | 200 | `sha256:a876e803b0e657f3295b378d23237855d25010063e40f1d372fc44186774e601` |
| global | `xai-batches-api-reference` · xAI Batches REST API Schema | https://docs.x.ai/developers/rest-api-reference/inference/batches | 2026-11-15T03:48:30.630Z | 200 | `sha256:061f8d496e68551d144d10ef50d07bdfe32f115ef6917da31d6de0154d63bc94` |
| global | `xai-files-api` · xAI Files API 管理文档 | https://docs.x.ai/developers/files/managing-files | 2026-11-15T03:48:30.803Z | 200 | `sha256:a32a2451cb838a3ce7af9f6c9faf5cd51dbf642e1108bd0a74d40e8d432248fb` |
| global | `xai-collections-api` · xAI Collections 管理 API 参考 | https://docs.x.ai/developers/rest-api-reference/collections/collection | 2026-11-15T03:48:30.818Z | 200 | `sha256:f69cd4a1c6083248f482da1f402c0015cf4da0840c1fa03211daee777e8cef5c` |
| global | `xai-tools-overview` · xAI 服务端工具总览 | https://docs.x.ai/developers/tools/overview | 2026-11-15T03:48:30.979Z | 200 | `sha256:4454ac7fb13009472a45550f4cd29bf7800dcf146b6ae85c65645077d13a2da8` |
| global | `xai-web-search` · xAI Web Search 工具文档 | https://docs.x.ai/developers/tools/web-search | 2026-11-15T03:48:30.978Z | 200 | `sha256:112076794096ad8111271025ba1e26dc51408665db316f71259b9b91fcfd6a87` |
| global | `xai-x-search` · xAI X Search 工具文档 | https://docs.x.ai/developers/tools/x-search | 2026-11-15T03:48:31.148Z | 200 | `sha256:f4fe7f828dda626dd9dadc8adf7d2c2b959729cfc7da91c87fb57afd8864688a` |
| global | `xai-collections-search` · xAI Collections Search 工具与 Responses API 文件搜索 | https://docs.x.ai/developers/tools/collections-search | 2026-11-15T03:48:31.069Z | 200 | `sha256:37905942248ba5a42e4d0153034fa623ec0685a2049e2e1e85d27f37ac9db215` |
| global | `xai-code-execution` · xAI Code Execution 工具输入与处理说明 | https://docs.x.ai/developers/tools/code-execution | 2026-11-15T03:48:31.606Z | 200 | `sha256:1750ed48bafa4729c61e97842270322262269603043ef4d6bab6812973d14cfc` |
| global | `xai-tool-streaming-sync` · xAI 服务端工具调用输入与结果输出方式 | https://docs.x.ai/developers/tools/streaming-and-sync | 2026-11-15T03:48:31.321Z | 200 | `sha256:298effb1665326421d6ba2afd47655d7dc87ff3bb778537eca097e41336e3887` |
| global | `xai-voice` · xAI Voice API 通用能力与价格说明 | https://docs.x.ai/developers/model-capabilities/audio/voice | 2026-11-15T03:48:31.909Z | 200 | `sha256:119aa6307beda51e7737c8d448929424befe561acda3af7f28a9bf1f67fd745b` |
| global | `xai-speech-to-speech` · xAI Speech-to-Speech WebSocket 协议与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech | 2026-11-15T03:48:31.688Z | 200 | `sha256:9ede1e7ccb477a8168bf59c01e2f1e18763b50d1534274ca041e5eb124aa2dfc` |
| global | `xai-speech-to-text` · xAI Speech-to-Text 默认模型与接口 | https://docs.x.ai/developers/models/speech-to-text | 2026-11-15T03:48:32.064Z | 200 | `sha256:61d50dc9470f4e7620cfe647e0b97ce9d9c81eb790cc174e6aff7926e2b2f585` |
| global | `xai-speech-to-text-guide` · xAI Speech-to-Text 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text | 2026-11-15T03:48:32.126Z | 200 | `sha256:cbc45c83cfaab2b46b12d5dd8ab836e51f446763d283a37d29f02bf3cd92baed` |
| global | `xai-text-to-speech` · xAI Text-to-Speech 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/text-to-speech | 2026-11-15T03:48:32.219Z | 200 | `sha256:c524ce270c69eace531ebeeb3f32347b714ee00a65eabf5f975ece9f7c1d0410` |
| global | `xai-regions` · xAI 区域端点与模型可用范围 | https://docs.x.ai/developers/advanced-api-usage/regions | 2026-11-15T03:48:32.187Z | 200 | `sha256:c92f04f2c5d0da0282c1372402f97ff0d3fe53db561007495931b1fa15b41130` |
| global | `xai-imagine` · xAI Imagine API 图像与视频能力说明 | https://docs.x.ai/developers/model-capabilities/imagine | 2026-11-15T03:48:32.311Z | 200 | `sha256:78c6aef0fe85e3f2e412e907d3e647394cd436a415b27ff2992b96666c0b4f9a` |

## xai 专属证据与核对说明

### xAI 官方通用资料采集候选

- 来源快照：25 份
- 文档观察：25 份；模型 ID 提及：96 条
- 已生成 Offering：10 个

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
