# Meta 采集器

运行 `pnpm ingest:meta`，采集 Meta 官方通用 Models、API 定价与限额、Muse Code 订阅、API Reference、Models List、协议说明，以及图片生成/编辑和语音文件/实时 API 参考与 Schema。Provider 是 Meta，Meta Model API 是其 Service 产品名；当前目录列出的型号经生命周期事件审核后显示为当前供应。通用模型页区分 Model API、Muse Code 和开放权重产品；实时团队目录需带 Key 调用 `models.list`，采集器不会请求账号接口，也不执行推理请求。

同一系列里带不同数据使用条件的型号是不同模型 ID/商业条件，不得按家族合并。Muse Code 的月订阅与 Model API 按量计费分开记录；公开计划权益不代表已取得订阅价格或全球资格。IR 按模型目录家族协议、协议方法/路径和精确 API ID 关联通用 Route；Muse Image 的图片生成/编辑 Route 及 Muse Voice Transcribe 的文件/实时 WebSocket Route 独立记录，Realtime 使用单独的 `wss` Endpoint。公开目录中的类型与输入/输出模态写入 Model Registry 观察，不等于规范 Model 已注册或已建立 `model_ref`。图片端点的已披露参数与输出、语音 Route 会映射；未完整解析的 OpenAPI 请求/响应结构、SAM 分割及账号目录仍用 partial/not_parsed coverage 和 Review 标示。候选不自动生成正式 Offering；字段级规格仍需复核，不解析单模型专属页。Llama、Muse Spark Open 自托管权重及第三方托管服务不作为 Meta 托管 API 供应。

市场、来源 URL、范围、访问要求和内容上限见 [来源白名单](sources.ts)。

Web Search 通过官方 Search grounding 示例按精确模型 ID 映射为模型内置 `web_search` Operation，目前示例明确指定 `muse-spark-1.3` 和 Responses API；其他型号、Messages 变体及搜索费用保持待核。API Reference 中列出的 Files 上传、列表、读取与删除接口映射为不绑定模型的 `file_storage` 能力。两者均使用官方来源与字段证据，采集仅生成 IR 候选，正式数据需按现有流程合并。
