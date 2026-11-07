# minimax 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `minimax` |
| 候选类型 | `regional_current_supply_observation` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-07T03:43:39.176Z |
| 前一候选指纹 | `sha256:e2c4a4286cd5afbc382ddf893522451bca1c892ce141a4b172e8289d39eabc9c` |
| 本次候选指纹 | `sha256:06fb4b901390af51414c0267e8e30d40fc83cd3586b251ba367b9bde561bc770` |
| 来源快照 | 28 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 0 项，更新 4 项，缺席待核实 0 项。

## 字段变化

### 记录 cn

#### Record / cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| models › 记录 MiniMax-H3-Max › source category | 更新 | 视频模型 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Max › source listing | 更新 | available | price_listed |

### 记录 global

#### Record / global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| models › 记录 MiniMax-H3-Max › source category | 更新 | Video Models | 官方价格表列示 |
| models › 记录 MiniMax-H3-Max › source listing | 更新 | available | price_listed |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `minimax-cn-model-catalog` · MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-07T03:43:35.650Z | 200 | `sha256:7d0e42963ba9a0794e6e959324e56842610e3f3299f7186bdcbb932c879eff3a` |
| cn | `minimax-cn-pricing` · MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-07T03:43:35.629Z | 200 | `sha256:9f4599551b6ba270dacf59c8d92177468a8b49de961e12440cbfabe3d00ff27c` |
| cn | `minimax-cn-video-api` · MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-07T03:43:36.079Z | 200 | `sha256:9a7276b7418755a8e7c5ff8e3819dd58b498eb7901fbdc5c5bf25df206905914` |
| cn | `minimax-cn-video-guide` · MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-07T03:43:35.997Z | 200 | `sha256:ac488c697aded1730769d9c7d0b93b13642ade8bbe6779e30a7f1ba52b6797fa` |
| cn | `minimax-cn-asr-api` · MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-07T03:43:37.439Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | `minimax-cn-audio-guide` · MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-07T03:43:37.428Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | `minimax-cn-image-guide` · MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-07T03:43:36.505Z | 200 | `sha256:3e526755c01aa08b42c952a920d4a7cf4201611328ed579501540d2b3d767d87` |
| cn | `minimax-cn-model-overview` · MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-07T03:43:36.505Z | 200 | `sha256:841aeb3ef4ada4551b778b29d142635e59698b5ffd63d4d8500ee75d456e113e` |
| cn | `minimax-cn-anthropic-api` · MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-07T03:43:37.082Z | 200 | `sha256:cbb574d27cee8da9ee052be1cfa1897f55eb2f36eda15b28b6cc0543eeec835c` |
| cn | `minimax-cn-function-call-api` · MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-07T03:43:37.013Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | `minimax-cn-responses-api` · MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-07T03:43:38.602Z | 200 | `sha256:80a696108b9e34f39677e6ce092a7c6ac291a64cb10953c8b1c44f586d98aa6d` |
| cn | `minimax-cn-file-upload-api` · MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-07T03:43:37.524Z | 200 | `sha256:06409fe8aea3d900c63a2f55c06690f8c8335a8935b96baa4c9dd75eea7d9c9f` |
| cn | `minimax-cn-mcp-guide` · MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-07T03:43:37.919Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | `minimax-cn-m-plan-page` · MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-07T03:43:38.438Z | 200 | `sha256:479e0405f8d486cf4b45a946cfadca65fc66993e2f7c11ff1df480fb78dea0cf` |
| cn | `minimax-cn-m-plan-intro` · MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-07T03:43:37.953Z | 200 | `sha256:70a203c1e5ee7c554b09c4443b30562d85dc7d5039aeec9e680342d7f0328201` |
| global | `minimax-global-model-catalog` · MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-07T03:43:37.120Z | 200 | `sha256:a54cd0fb8287aae731b374b7505c89b88ef70448519c16b5bec2dd1d17398c6d` |
| global | `minimax-global-video-guide` · MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-07T03:43:37.186Z | 200 | `sha256:dc74ab9682067530450f2ba21b74d8aa7c71c349de09569d0d5f86a725007a3b` |
| global | `minimax-global-audio-guide` · MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-07T03:43:37.137Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | `minimax-global-image-guide` · MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-07T03:43:37.231Z | 200 | `sha256:3dde0949bd6bbda3f797c4be55176f5c8d065353ce44f6799d1e2913f1bac7e5` |
| global | `minimax-global-model-overview` · MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-07T03:43:37.250Z | 200 | `sha256:2d1c470744605b2244951f5a5a4f5a0052808d2964d27ab4aff69d8256456f24` |
| global | `minimax-global-pricing` · MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-07T03:43:37.341Z | 200 | `sha256:a2f7baec37f2da21cead2f3e2afcef3202af374f61cbaca4c7e26ab5d9cfe4fe` |
| global | `minimax-global-file-upload-api` · MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-07T03:43:37.229Z | 200 | `sha256:5633e9f67131ecacfc5f23dcf0a883156b487948fc2b29e93bc0a683bd35747d` |
| global | `minimax-global-mcp-guide` · MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-07T03:43:37.143Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | `minimax-global-anthropic-api` · MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-07T03:43:37.169Z | 200 | `sha256:0af82734b75b96914237bb36551a1b2b25ea29892452a5e8e7f560eb7e863e68` |
| global | `minimax-global-responses-api` · MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-07T03:43:37.248Z | 200 | `sha256:dbad05069e19afac83a48463187e42a2c5dd12b815f30423fe97aaa2ffe76b35` |
| global | `minimax-global-function-call-api` · MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-07T03:43:37.338Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | `minimax-global-m-plan-page` · MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-07T03:43:39.176Z | 200 | `sha256:d7f1261b6d429a1833bbd4f04013176081aa4bcdc1e9ed132aa572975d780605` |
| global | `minimax-global-m-plan-intro` · MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-07T03:43:37.244Z | 200 | `sha256:583172b21eac14a84c3a68b335f46ebf2eeae7471c6d289e9d4ed5624788ea83` |

## minimax 专属证据与核对说明

### MiniMax 数据变更评审表

- Provider：`minimax`
- 候选类型：`regional_current_supply_observation`
- 观察时间（UTC）：2026-11-07T03:43:39.176Z
- 候选指纹：`sha256:06fb4b901390af51414c0267e8e30d40fc83cd3586b251ba367b9bde561bc770`
- 前一候选指纹：`sha256:e2c4a4286cd5afbc382ddf893522451bca1c892ce141a4b172e8289d39eabc9c`
- 新增字段：0 项；更新字段：4 项；缺席待核实：0 项

#### 本次变化

仅列出相对上一份已观察数据新增或变化的字段，共 4 项。新模型或此前未取得的字段会完整列出本次取得的内容；未变化的数据不重复展开。列表缺席只表示待核实，不构成退役结论。

| 变化 | 市场 | 模型 ID | 字段 | 旧值 | 新值 |
|---|---|---|---|---|---|
| 更新 | cn | MiniMax-H3-Max | model.source&#95;category | 视频模型 | 官方价格表列示 |
| 更新 | cn | MiniMax-H3-Max | model.source&#95;listing | available | price&#95;listed |
| 更新 | global | MiniMax-H3-Max | model.source&#95;category | Video Models | 官方价格表列示 |
| 更新 | global | MiniMax-H3-Max | model.source&#95;listing | available | price&#95;listed |

#### 来源快照

| 市场 | 来源 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---|---:|---|
| cn | MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-07T03:43:35.650Z | 200 | `sha256:7d0e42963ba9a0794e6e959324e56842610e3f3299f7186bdcbb932c879eff3a` |
| cn | MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-07T03:43:35.629Z | 200 | `sha256:9f4599551b6ba270dacf59c8d92177468a8b49de961e12440cbfabe3d00ff27c` |
| cn | MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-07T03:43:36.079Z | 200 | `sha256:9a7276b7418755a8e7c5ff8e3819dd58b498eb7901fbdc5c5bf25df206905914` |
| cn | MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-07T03:43:35.997Z | 200 | `sha256:ac488c697aded1730769d9c7d0b93b13642ade8bbe6779e30a7f1ba52b6797fa` |
| cn | MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-07T03:43:37.439Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-07T03:43:37.428Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-07T03:43:36.505Z | 200 | `sha256:3e526755c01aa08b42c952a920d4a7cf4201611328ed579501540d2b3d767d87` |
| cn | MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-07T03:43:36.505Z | 200 | `sha256:841aeb3ef4ada4551b778b29d142635e59698b5ffd63d4d8500ee75d456e113e` |
| cn | MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-07T03:43:37.082Z | 200 | `sha256:cbb574d27cee8da9ee052be1cfa1897f55eb2f36eda15b28b6cc0543eeec835c` |
| cn | MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-07T03:43:37.013Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-07T03:43:38.602Z | 200 | `sha256:80a696108b9e34f39677e6ce092a7c6ac291a64cb10953c8b1c44f586d98aa6d` |
| cn | MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-07T03:43:37.524Z | 200 | `sha256:06409fe8aea3d900c63a2f55c06690f8c8335a8935b96baa4c9dd75eea7d9c9f` |
| cn | MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-07T03:43:37.919Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-07T03:43:38.438Z | 200 | `sha256:479e0405f8d486cf4b45a946cfadca65fc66993e2f7c11ff1df480fb78dea0cf` |
| cn | MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-07T03:43:37.953Z | 200 | `sha256:70a203c1e5ee7c554b09c4443b30562d85dc7d5039aeec9e680342d7f0328201` |
| global | MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-07T03:43:37.120Z | 200 | `sha256:a54cd0fb8287aae731b374b7505c89b88ef70448519c16b5bec2dd1d17398c6d` |
| global | MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-07T03:43:37.186Z | 200 | `sha256:dc74ab9682067530450f2ba21b74d8aa7c71c349de09569d0d5f86a725007a3b` |
| global | MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-07T03:43:37.137Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-07T03:43:37.231Z | 200 | `sha256:3dde0949bd6bbda3f797c4be55176f5c8d065353ce44f6799d1e2913f1bac7e5` |
| global | MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-07T03:43:37.250Z | 200 | `sha256:2d1c470744605b2244951f5a5a4f5a0052808d2964d27ab4aff69d8256456f24` |
| global | MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-07T03:43:37.341Z | 200 | `sha256:a2f7baec37f2da21cead2f3e2afcef3202af374f61cbaca4c7e26ab5d9cfe4fe` |
| global | MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-07T03:43:37.229Z | 200 | `sha256:5633e9f67131ecacfc5f23dcf0a883156b487948fc2b29e93bc0a683bd35747d` |
| global | MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-07T03:43:37.143Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-07T03:43:37.169Z | 200 | `sha256:0af82734b75b96914237bb36551a1b2b25ea29892452a5e8e7f560eb7e863e68` |
| global | MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-07T03:43:37.248Z | 200 | `sha256:dbad05069e19afac83a48463187e42a2c5dd12b815f30423fe97aaa2ffe76b35` |
| global | MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-07T03:43:37.338Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-07T03:43:39.176Z | 200 | `sha256:d7f1261b6d429a1833bbd4f04013176081aa4bcdc1e9ed132aa572975d780605` |
| global | MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-07T03:43:37.244Z | 200 | `sha256:583172b21eac14a84c3a68b335f46ebf2eeae7471c6d289e9d4ed5624788ea83` |

> 本文件供人工评审；候选 JSON 保留完整机器可读结构。自动采集不等于核验或发布。

---

# minimax 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `minimax` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-07T03:43:39.176Z |
| 前一候选指纹 | `sha256:0bae7dac9ec3945a2106b046119194229d5c1ee3eecf69ab5c3ba1470b27d079` |
| 本次候选指纹 | `sha256:e14aa79da7634af035aa6c2fca63df33291f63c03c8e00fb93ef3b396a6d8418` |
| 来源快照 | 28 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 56 项，更新 4 项，缺席待核实 2 项。

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
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：MiniMax-H3-Max | 差异项（新增；相同内容已省略）：无 |
| structured records › 记录 MiniMax-H3-Max › 模型 ID（model_id） | 缺席待核实 | MiniMax-H3-Max | 未记录 |

#### 来源 / minimax-cn-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：🔔 **定价调整预告**：自2026年7月22日起，API-vlm 按量价格调整为 ¥0.025 元/次。M Plan 套餐内单次 API-vlm 调用扣减的 token 额度将同步减少，同等套餐可支持更多次调用。接口与能力保持不变，无需任何代码调整。 | 差异项（新增；相同内容已省略）：无 |

#### 来源 / minimax-cn-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-video-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
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
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：MiniMax-H3-Max | 差异项（新增；相同内容已省略）：无 |
| structured records › 记录 MiniMax-H3-Max › 模型 ID（model_id） | 缺席待核实 | MiniMax-H3-Max | 未记录 |

#### 来源 / minimax-global-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：🔔 **Pricing Update Notice** — Effective July 22, 2026, the API-vlm price will be adjusted to \$0.01 per call. Accordingly, the token quota deducted per API-vlm call under M Plan subscriptions will decrease, allowing the same plan to support more calls. API endpoints and model capabilities remain unchanged — no code changes required. | 差异项（新增；相同内容已省略）：无 |

#### 来源 / minimax-global-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `minimax-cn-model-catalog` · MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-07T03:43:35.650Z | 200 | `sha256:7d0e42963ba9a0794e6e959324e56842610e3f3299f7186bdcbb932c879eff3a` |
| cn | `minimax-cn-pricing` · MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-07T03:43:35.629Z | 200 | `sha256:9f4599551b6ba270dacf59c8d92177468a8b49de961e12440cbfabe3d00ff27c` |
| cn | `minimax-cn-video-api` · MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-07T03:43:36.079Z | 200 | `sha256:9a7276b7418755a8e7c5ff8e3819dd58b498eb7901fbdc5c5bf25df206905914` |
| cn | `minimax-cn-video-guide` · MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-07T03:43:35.997Z | 200 | `sha256:ac488c697aded1730769d9c7d0b93b13642ade8bbe6779e30a7f1ba52b6797fa` |
| cn | `minimax-cn-asr-api` · MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-07T03:43:37.439Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | `minimax-cn-audio-guide` · MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-07T03:43:37.428Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | `minimax-cn-image-guide` · MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-07T03:43:36.505Z | 200 | `sha256:3e526755c01aa08b42c952a920d4a7cf4201611328ed579501540d2b3d767d87` |
| cn | `minimax-cn-model-overview` · MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-07T03:43:36.505Z | 200 | `sha256:841aeb3ef4ada4551b778b29d142635e59698b5ffd63d4d8500ee75d456e113e` |
| cn | `minimax-cn-anthropic-api` · MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-07T03:43:37.082Z | 200 | `sha256:cbb574d27cee8da9ee052be1cfa1897f55eb2f36eda15b28b6cc0543eeec835c` |
| cn | `minimax-cn-function-call-api` · MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-07T03:43:37.013Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | `minimax-cn-responses-api` · MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-07T03:43:38.602Z | 200 | `sha256:80a696108b9e34f39677e6ce092a7c6ac291a64cb10953c8b1c44f586d98aa6d` |
| cn | `minimax-cn-file-upload-api` · MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-07T03:43:37.524Z | 200 | `sha256:06409fe8aea3d900c63a2f55c06690f8c8335a8935b96baa4c9dd75eea7d9c9f` |
| cn | `minimax-cn-mcp-guide` · MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-07T03:43:37.919Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | `minimax-cn-m-plan-page` · MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-07T03:43:38.438Z | 200 | `sha256:479e0405f8d486cf4b45a946cfadca65fc66993e2f7c11ff1df480fb78dea0cf` |
| cn | `minimax-cn-m-plan-intro` · MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-07T03:43:37.953Z | 200 | `sha256:70a203c1e5ee7c554b09c4443b30562d85dc7d5039aeec9e680342d7f0328201` |
| global | `minimax-global-model-catalog` · MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-07T03:43:37.120Z | 200 | `sha256:a54cd0fb8287aae731b374b7505c89b88ef70448519c16b5bec2dd1d17398c6d` |
| global | `minimax-global-video-guide` · MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-07T03:43:37.186Z | 200 | `sha256:dc74ab9682067530450f2ba21b74d8aa7c71c349de09569d0d5f86a725007a3b` |
| global | `minimax-global-audio-guide` · MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-07T03:43:37.137Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | `minimax-global-image-guide` · MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-07T03:43:37.231Z | 200 | `sha256:3dde0949bd6bbda3f797c4be55176f5c8d065353ce44f6799d1e2913f1bac7e5` |
| global | `minimax-global-model-overview` · MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-07T03:43:37.250Z | 200 | `sha256:2d1c470744605b2244951f5a5a4f5a0052808d2964d27ab4aff69d8256456f24` |
| global | `minimax-global-pricing` · MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-07T03:43:37.341Z | 200 | `sha256:a2f7baec37f2da21cead2f3e2afcef3202af374f61cbaca4c7e26ab5d9cfe4fe` |
| global | `minimax-global-file-upload-api` · MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-07T03:43:37.229Z | 200 | `sha256:5633e9f67131ecacfc5f23dcf0a883156b487948fc2b29e93bc0a683bd35747d` |
| global | `minimax-global-mcp-guide` · MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-07T03:43:37.143Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | `minimax-global-anthropic-api` · MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-07T03:43:37.169Z | 200 | `sha256:0af82734b75b96914237bb36551a1b2b25ea29892452a5e8e7f560eb7e863e68` |
| global | `minimax-global-responses-api` · MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-07T03:43:37.248Z | 200 | `sha256:dbad05069e19afac83a48463187e42a2c5dd12b815f30423fe97aaa2ffe76b35` |
| global | `minimax-global-function-call-api` · MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-07T03:43:37.338Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | `minimax-global-m-plan-page` · MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-07T03:43:39.176Z | 200 | `sha256:d7f1261b6d429a1833bbd4f04013176081aa4bcdc1e9ed132aa572975d780605` |
| global | `minimax-global-m-plan-intro` · MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-07T03:43:37.244Z | 200 | `sha256:583172b21eac14a84c3a68b335f46ebf2eeae7471c6d289e9d4ed5624788ea83` |

## minimax 专属证据与核对说明

### MiniMax IR 观察候选

- IR 指纹：`sha256:e14aa79da7634af035aa6c2fca63df33291f63c03c8e00fb93ef3b396a6d8418`
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
