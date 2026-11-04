# xAI 采集器

运行 `pnpm ingest:xai`，采集 xAI 官方模型、价格、区域、API、Batch、Files、Collections、Voice、Imagine 与服务端工具文档。Models API 按 API Key 返回，采集器只保存接口文档，不调用认证接口。

当前模型来自官方 API 价格表中的精确模型 ID；全球与 US regional host、市场范围和费率分别记录。Token 长上下文、Batch 折扣、Priority 倍率、区域加价，以及图像、视频、语音、文件和集合用量价格均按原币种/单位映射。只明确列出的模型才获得区域 Route；旧模型、账号专属产品方案和未证实的逐模型能力不升级为当前供应。

xAI 新 X Subscription 计划通过官方 [X Subscription 定价文档](https://docs.x.ai/x-subscription/pricing)按独立 `plan` 来源采集个人 Free / Plus / Premium / Super / Ultra、Teams Premium / Super / Ultra。个人月付和年付、团队席位月费及官方公布的用量倍率分别记录；订阅共享用量不代表 API 调用额度，也不并入按量 API 价格。既有 SuperGrok、Cursor 和 X Premium 计划仍可续用；当前来源不推断旧计划价格或 Enterprise 固定价格。

Batch、Files、Collections、STT、TTS 与 Responses API 中的 Web Search、X Search、Code Execution 均作为 Service 能力记录，不推导逐模型支持矩阵。Batch 输入项和请求参数从官方 Batch 工作流示例提取，响应字段从独立 Batches REST API Reference 示例提取；STT 从官方指南表格提取 REST multipart 输入与参数、WebSocket query 参数、默认值和转写响应字段，并从示例识别流式事件；Web Search 和 X Search 从对应工具指南提取提示词输入、配置参数与响应字段；Code Execution 的提示词输入来自官方 Responses 请求示例，工具输出可见性按官方 `code_interpreter_call.outputs` 说明记录。没有文档样例时保留未知，不补写说明。Models API 仍需账号 Key，模型目录完整性、模型专属参数和生命周期作为待核覆盖，不发起推理请求。

市场、来源 URL、范围、访问要求和内容上限见 [来源白名单](sources.ts)。
