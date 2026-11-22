# zhipu 采集评审

**采集状态：invalid_data** — 候选 JSON 无法读取：ENOENT: no such file or directory, open '/home/runner/work/providerlist.dev/providerlist.dev/data/candidates/zhipu/ir/reviews/45f8ecd9d441a9e63c43de67e25cc33b12d013fcd79ddc6ca75b4938c6971730.json'

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `zhipu` |
| 候选类型 | `regional_model_and_api_observation` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-22T04:01:34.897Z |
| 前一候选指纹 | `sha256:11b6b0f2339ab8d179707e811143a706db41f34706d4992ac5fce84efe46acf1` |
| 本次候选指纹 | `sha256:d2f6c32a142e349863419c132a7ed8627299d6eea669c0f1b54111aae091980b` |
| 来源快照 | 54 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 0 项，更新 6 项，缺席待核实 0 项。

## 字段变化

### 记录 global

#### Record / global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| models › 记录 GLM-4.6 › 目录记录（catalog_rows） › 记录 zhipu-global-model-catalog › section | 更新 | Text Models | Language Models |
| models › 记录 GLM-4.7 › 目录记录（catalog_rows） › 记录 zhipu-global-model-catalog › section | 更新 | Text Models | Language Models |
| models › 记录 GLM-5.1 › 目录记录（catalog_rows） › 记录 zhipu-global-model-catalog › section | 更新 | Text Models | Language Models |
| models › 记录 GLM-5.2 › 目录记录（catalog_rows） › 记录 zhipu-global-model-catalog › section | 更新 | Text Models | Language Models |
| models › 记录 GLM-5.3-FlashX-Legal › 目录记录（catalog_rows） › 记录 zhipu-global-model-catalog › section | 更新 | Text Models | Language Models |
| models › 记录 GLM-5 › 目录记录（catalog_rows） › 记录 zhipu-global-model-catalog › section | 更新 | Text Models | Language Models |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `zhipu-cn-model-catalog` · 智谱中国站模型概览 | https://docs.bigmodel.cn/cn/guide/start/model-overview.md | 2026-11-22T04:01:34.681Z | 200 | `sha256:e7cddc8dcdf035210b3b1497f61b69fa8fa49e92b2d542e1b8338be9a07cd95f` |
| cn | `zhipu-cn-pricing` · 智谱中国站API 定价 | https://docs.bigmodel.cn/cn/guide/start/pricing.md | 2026-11-22T04:01:34.673Z | 200 | `sha256:615f8993915c2aea98f5ed05b401a7701dc0381db7325553fadd680e71bec70b` |
| cn | `zhipu-cn-api-overview` · 智谱中国站HTTP API 与区域入口 | https://docs.bigmodel.cn/cn/guide/develop/http/introduction.md | 2026-11-22T04:01:34.761Z | 200 | `sha256:754e47a07859e1235caabcadf7912f6cdc96c7c99e662baa6ad4b1e636840660` |
| cn | `zhipu-cn-openai-api` · 智谱中国站OpenAI API 兼容 | https://docs.bigmodel.cn/cn/guide/develop/openai/introduction.md | 2026-11-22T04:01:34.626Z | 200 | `sha256:f8b08086034a78997b59238ec572279b39ab3edb7b571402b68da33178ab242f` |
| cn | `zhipu-cn-claude-api` · 智谱中国站Claude API 兼容 | https://docs.bigmodel.cn/cn/guide/develop/claude/introduction.md | 2026-11-22T04:01:34.827Z | 200 | `sha256:9cdf8869acfbaf710f1c253488b2ee540f7bfc13856542358be733799a908f02` |
| cn | `zhipu-cn-responses-api` · 智谱中国站Response API 兼容 | https://docs.bigmodel.cn/cn/guide/develop/responses/introduction.md | 2026-11-22T04:01:34.839Z | 200 | `sha256:92584dba6298fb144b4c6c593aaa06201a4324379b78fd65fdb1e55bb5163af8` |
| cn | `zhipu-cn-chat-api` · 智谱中国站对话补全 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E5%AF%B9%E8%AF%9D%E8%A1%A5%E5%85%A8.md | 2026-11-22T04:01:34.725Z | 200 | `sha256:2f7e2b795c218899ff08cbd06dbbead757e15600464ebb4e6e9b1bafbe595ef4` |
| cn | `zhipu-cn-image-api` · 智谱中国站图像生成 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E5%9B%BE%E5%83%8F%E7%94%9F%E6%88%90.md | 2026-11-22T04:01:34.807Z | 200 | `sha256:9e70e1fb7b4c4b162f12835f5dd49960393d54fc24464c553d445aa6af514166` |
| cn | `zhipu-cn-video-api` · 智谱中国站视频生成 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90%E5%BC%82%E6%AD%A5.md | 2026-11-22T04:01:34.691Z | 200 | `sha256:03ed4a4e78b259cdda87a509a45051f90f2e440c5c4ff12dd690a8aaed148c09` |
| cn | `zhipu-cn-speech-api` · 智谱中国站语音转文本 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E8%AF%AD%E9%9F%B3%E8%BD%AC%E6%96%87%E6%9C%AC.md | 2026-11-22T04:01:34.897Z | 200 | `sha256:8c496eed38c3ae9c46ab9ef26f5ad6c4391575bdb4fb901b5f9873ca1025a767` |
| cn | `zhipu-cn-tts-api` · 智谱中国站文本转语音 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%AD%E9%9F%B3.md | 2026-11-22T04:01:34.819Z | 200 | `sha256:fe86be78170aa73ba08cf96824f4d8aecf1149fb6d6e7879866da00a358affad` |
| cn | `zhipu-cn-embedding-api` · 智谱中国站文本嵌入 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E6%96%87%E6%9C%AC%E5%B5%8C%E5%85%A5.md | 2026-11-22T04:01:34.833Z | 200 | `sha256:390972f1e47fb262f297a754b061ab88cd1aaf8cf34625e3da560d7a2878aca4` |
| cn | `zhipu-cn-rerank-api` · 智谱中国站文本重排序 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E6%96%87%E6%9C%AC%E9%87%8D%E6%8E%92%E5%BA%8F.md | 2026-11-22T04:01:34.816Z | 200 | `sha256:faf10cb273956a7b4dae3c1f7ee502d082fb85888b4e4e0d08b72ae99b975494` |
| cn | `zhipu-cn-ocr-api` · 智谱中国站文档解析 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E6%96%87%E6%A1%A3%E8%A7%A3%E6%9E%90.md | 2026-11-22T04:01:34.828Z | 200 | `sha256:9bab240d8f58ab1d4b6b41ec49b875be4ec572e1fb277ea7ddb72bb1eb94b46c` |
| cn | `zhipu-cn-tokenizer-api` · 智谱中国站文本分词器 API | https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E6%96%87%E6%9C%AC%E5%88%86%E8%AF%8D%E5%99%A8.md | 2026-11-22T04:01:34.846Z | 200 | `sha256:39271b481cda1e865ac80280d560eafefcaecce7f01fb95345b399b81fc6dff8` |
| cn | `zhipu-cn-web-search-api` · 智谱中国站网络搜索 API | https://docs.bigmodel.cn/api-reference/%E5%B7%A5%E5%85%B7-api/%E7%BD%91%E7%BB%9C%E6%90%9C%E7%B4%A2.md | 2026-11-22T04:01:34.828Z | 200 | `sha256:79a7cddfe7b8bfc2ead333c8903283c3ca199b4a1198a06544a91acc6a589721` |
| cn | `zhipu-cn-web-reader-api` · 智谱中国站网页阅读 API | https://docs.bigmodel.cn/api-reference/%E5%B7%A5%E5%85%B7-api/%E7%BD%91%E9%A1%B5%E9%98%85%E8%AF%BB.md | 2026-11-22T04:01:34.841Z | 200 | `sha256:8fb79b82bf211288e910f898949d2c81362d5fd0d6524ca21584d2a51c2ecbfb` |
| cn | `zhipu-cn-content-safety-api` · 智谱中国站内容安全 API | https://docs.bigmodel.cn/api-reference/%E5%B7%A5%E5%85%B7-api/%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8.md | 2026-11-22T04:01:34.833Z | 200 | `sha256:f4eb2017112ecbbfde8b604d046f829de6e7bde5d6de08b087b9370179d47c73` |
| cn | `zhipu-cn-file-parser-sync-api` · 智谱中国站文件解析同步 API | https://docs.bigmodel.cn/api-reference/%E5%B7%A5%E5%85%B7-api/%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90%E5%90%8C%E6%AD%A5.md | 2026-11-22T04:01:34.829Z | 200 | `sha256:eecbdb1dc9e9143c20ae899602038061051a5937a7bf6e36ad0f0f246843ec24` |
| cn | `zhipu-cn-file-parser-result-api` · 智谱中国站文件解析结果 API | https://docs.bigmodel.cn/api-reference/%E5%B7%A5%E5%85%B7-api/%E8%A7%A3%E6%9E%90%E7%BB%93%E6%9E%9C.md | 2026-11-22T04:01:34.810Z | 200 | `sha256:297480c75f794de44d0abe056d8dc3d82773d9687a901119ac213ca85710f3df` |
| cn | `zhipu-cn-ocr-service-api` · 智谱中国站OCR 服务 API | https://docs.bigmodel.cn/api-reference/%E5%B7%A5%E5%85%B7-api/ocr-%E6%9C%8D%E5%8A%A1.md | 2026-11-22T04:01:34.829Z | 200 | `sha256:7d8dd05e30e96c5e9988fe070af3d1f1cfc6d9e9cfb107ef9f563bcf1aeedd03` |
| cn | `zhipu-cn-file-api` · 智谱中国站文件上传 API | https://docs.bigmodel.cn/api-reference/%E6%96%87%E4%BB%B6-api/%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6.md | 2026-11-22T04:01:34.821Z | 200 | `sha256:acd4b4bb64e2c78df748fbd6d09beb940a5f80ac3d49068f1238a86b5501bcb6` |
| cn | `zhipu-cn-tool-calling` · 智谱中国站工具调用 | https://docs.bigmodel.cn/cn/guide/capabilities/function-calling.md | 2026-11-22T04:01:34.829Z | 200 | `sha256:30cc2776ac8d5f04f36970ec8f0f0a4eacaf1b993e3361d379cb17e27289d052` |
| cn | `zhipu-cn-structured-output` · 智谱中国站结构化输出 | https://docs.bigmodel.cn/cn/guide/capabilities/struct-output.md | 2026-11-22T04:01:34.847Z | 200 | `sha256:d668582522f0b0a44eff0a91a47e34815764c3ab3c5bf647d8b1a291b93944c5` |
| cn | `zhipu-cn-web-search` · 智谱中国站联网搜索 | https://docs.bigmodel.cn/cn/guide/tools/web-search.md | 2026-11-22T04:01:34.682Z | 200 | `sha256:c30ac57caa2333c7db26dea381c084dc7bd728d17d107ee1b8b938b93dd4d118` |
| cn | `zhipu-cn-file-parser` · 智谱中国站文件解析 | https://docs.bigmodel.cn/cn/guide/tools/file-parser.md | 2026-11-22T04:01:34.816Z | 200 | `sha256:f84759137eabffe417f02bc51aee8462461f825df8f0a880a1b3aeb3a310225a` |
| cn | `zhipu-cn-batch-api` · 智谱中国站批量处理 API | https://docs.bigmodel.cn/cn/guide/tools/batch.md | 2026-11-22T04:01:34.717Z | 200 | `sha256:ad90e54b312bfee111cc3c7108ac68cd444b869bbecf4d5bbf9a989eaccdefb9` |
| cn | `zhipu-cn-managed-agents-overview` · 智谱中国站托管 Agent 服务 | https://docs.bigmodel.cn/cn/managed-agents/overview.md | 2026-11-22T04:01:34.684Z | 200 | `sha256:716e719ae13ca2c4f4c0c5ba6e47073012a087189e2b49c9fd437b65ee8762ff` |
| cn | `zhipu-cn-managed-agents-api` · 智谱中国站托管 Agent API 参考 | https://docs.bigmodel.cn/cn/managed-agents/api-reference.md | 2026-11-22T04:01:34.832Z | 200 | `sha256:a97486a3c7b3f909e91a73ea6b988c57dd3e9958814c833f000f6a0d47f97a0d` |
| cn | `zhipu-cn-coding-plan` · 智谱中国站GLM Coding Plan 套餐 | https://docs.bigmodel.cn/cn/coding-plan/overview.md | 2026-11-22T04:01:34.695Z | 200 | `sha256:86ccd790d2a8464454c851fd46f8370271b511ba3b38244d3ce664543c7d680e` |
| cn | `zhipu-cn-coding-plan-quick-start` · 智谱中国站GLM Coding Plan API 接入端点 | https://docs.bigmodel.cn/cn/coding-plan/quick-start.md | 2026-11-22T04:01:34.712Z | 200 | `sha256:b3aa7e2bacca16a6e748fc8ae658d12b9ff09738d759743a57a5004f01740afa` |
| global | `zhipu-global-model-catalog` · Z.AI Model Overview | https://docs.z.ai/guides/overview/overview.md | 2026-11-22T04:01:34.568Z | 200 | `sha256:d5ddb928dbf0ad4ec903d1c46babc7afceec318a2c7f59566cf4876951c326c6` |
| global | `zhipu-global-pricing` · Z.AI API Pricing | https://docs.z.ai/guides/overview/pricing.md | 2026-11-22T04:01:34.567Z | 200 | `sha256:4ee3a3e9eab6eab9d8a06309fe6984d82db7351586786bb8422deee1f16f78bf` |
| global | `zhipu-global-api-overview` · Z.AI HTTP API and regional endpoint | https://docs.z.ai/guides/develop/http/introduction.md | 2026-11-22T04:01:34.613Z | 200 | `sha256:ba0321b6e6d5fee502f3944dde133ce76f37853544afe19a80fa05b365093d90` |
| global | `zhipu-global-chat-api` · Z.AI Chat Completion API reference | https://docs.z.ai/api-reference/llm/chat-completion.md | 2026-11-22T04:01:34.569Z | 200 | `sha256:5e608d3c82b283ed8dac0b7991187b625e378ca706a060f0eaa40ddf90d1e110` |
| global | `zhipu-global-image-api` · Z.AI Image Generation API | https://docs.z.ai/api-reference/image/generate-image.md | 2026-11-22T04:01:34.603Z | 200 | `sha256:49735a8b4b1731eb6f330cb3ce5b539ebdf43ae109a000d0d8b0b29757dd1214` |
| global | `zhipu-global-image-async-api` · Z.AI Asynchronous Image Generation API | https://docs.z.ai/api-reference/image/generate-image-async.md | 2026-11-22T04:01:34.568Z | 200 | `sha256:049b1db2b4fbd2b90e2c66d4ad582cd5dd9c50aa75398da56370c44118f8abb2` |
| global | `zhipu-global-image-result-api` · Z.AI Asynchronous Image Result API | https://docs.z.ai/api-reference/image/get-image-status.md | 2026-11-22T04:01:34.634Z | 200 | `sha256:3477068ea4d31eb233008c40e7786e80104690b2a9aec925e591af73cbd36a49` |
| global | `zhipu-global-video-api` · Z.AI Video Generation API | https://docs.z.ai/api-reference/video/generate-video.md | 2026-11-22T04:01:34.608Z | 200 | `sha256:37858eaa9a2f11009c66347145fd97b5fc8918634e2823feee7d0eaee9d0d92e` |
| global | `zhipu-global-video-result-api` · Z.AI Asynchronous Video Result API | https://docs.z.ai/api-reference/video/get-video-status.md | 2026-11-22T04:01:34.674Z | 200 | `sha256:3477068ea4d31eb233008c40e7786e80104690b2a9aec925e591af73cbd36a49` |
| global | `zhipu-global-speech-api` · Z.AI Audio Transcriptions API | https://docs.z.ai/api-reference/audio/audio-transcriptions.md | 2026-11-22T04:01:34.671Z | 200 | `sha256:7b85cd2bb0a692102608aceb490258ca550ec9a559214f592b7eb746057047f0` |
| global | `zhipu-global-tokenizer-api` · Z.AI Tokenizer API | https://docs.z.ai/api-reference/tools/tokenizer.md | 2026-11-22T04:01:34.684Z | 200 | `sha256:d0feb016a06ee5b41e13b7aae6bc0746cbc2c5d23c194c6d56df7af62af4f8ba` |
| global | `zhipu-global-ocr-api` · Z.AI Layout Parsing API | https://docs.z.ai/api-reference/tools/layout-parsing.md | 2026-11-22T04:01:34.661Z | 200 | `sha256:b12e2601a6982eb4681c69ce2cb22043fd41a88aaf4cb55e7e38c2299bd9720c` |
| global | `zhipu-global-tool-calling` · Z.AI Function Calling | https://docs.z.ai/guides/capabilities/function-calling.md | 2026-11-22T04:01:34.677Z | 200 | `sha256:2ba181d80f8088aad6a5fb19ad3d7295685d44d0b04becd5bd5d1f4ce78531ae` |
| global | `zhipu-global-structured-output` · Z.AI Structured Output | https://docs.z.ai/guides/capabilities/struct-output.md | 2026-11-22T04:01:34.662Z | 200 | `sha256:309d887bad4953579a0240465eeecbd2d6d7f6dfaa47096615dace7334957cff` |
| global | `zhipu-global-web-search` · Z.AI Web Search | https://docs.z.ai/api-reference/tools/web-search.md | 2026-11-22T04:01:34.671Z | 200 | `sha256:2ade723e8e4346a50ab46712d44a85515c5a4f74427a5b41fbc5c330e2478823` |
| global | `zhipu-global-web-reader` · Z.AI Web Reader | https://docs.z.ai/api-reference/tools/web-reader.md | 2026-11-22T04:01:34.688Z | 200 | `sha256:bf2b4609b55ffff3af7ade4798901a5bdf445d3297bb8d99e48a1d0886408776` |
| global | `zhipu-global-file-upload` · Z.AI File Upload | https://docs.z.ai/api-reference/agents/file-upload.md | 2026-11-22T04:01:34.691Z | 200 | `sha256:0ce323aaaba1bed7885a0ad4ee57bd9b97d2926295f9cf6c9aa91e0441be5d99` |
| global | `zhipu-global-agent-api` · Z.AI Agent API | https://docs.z.ai/api-reference/agents/agent.md | 2026-11-22T04:01:34.672Z | 200 | `sha256:9d707d34691cfdb85d504751a3a81a2cf79d429fad2d36c85b6b71f28aeba2c8` |
| global | `zhipu-global-agent-result-api` · Z.AI Asynchronous Agent Result API | https://docs.z.ai/api-reference/agents/get-async-result.md | 2026-11-22T04:01:34.700Z | 200 | `sha256:64adf7d5bbb9119a7209cb8ffd95335edcbc66f615a458d3b9a3dee78aaf4326` |
| global | `zhipu-global-agent-conversation-api` · Z.AI Agent Conversation History API | https://docs.z.ai/api-reference/agents/agent-conversation.md | 2026-11-22T04:01:34.721Z | 200 | `sha256:659741bbddea8361078f16ccc7c4e3f84ab40bf9acbe38ba794b79b8f39b9ad0` |
| global | `zhipu-global-coding-plan` · Z.AI GLM Coding Plan | https://docs.z.ai/devpack/overview.md | 2026-11-22T04:01:34.677Z | 200 | `sha256:ad12c78eba450fa09f13d8761424922691223e46a19d515e3af11ddf8f481313` |
| global | `zhipu-global-coding-plan-quick-start` · Z.AI GLM Coding Plan API Endpoints | https://docs.z.ai/devpack/quick-start.md | 2026-11-22T04:01:34.681Z | 200 | `sha256:222252027a804c0e0f949b1e4b034ae329bd72505278535409123f911a4600f6` |
| global | `zhipu-global-coding-plan-key-management` · Z.AI Coding Plan and Standard API Key Management | https://docs.z.ai/devpack/notice/api-key-management.md | 2026-11-22T04:01:34.703Z | 200 | `sha256:5e487aa8e2f99171733f112c558610a0fbe0a24a101a9411453a6cd26eb866e7` |

## zhipu 专属证据与核对说明

#### 适配器核对边界

本节不重复展开当前目录、价格原文、模型清单或完整 API 路径。字段级新增、更新与缺席待核实项仅见上方变更摘要；来源快照与完整机器事实保存在候选 JSON。

候选仅表示官方来源观察，不代表字段已核验、供应已确认或数据已发布。目录缺席不单独构成退役结论。
