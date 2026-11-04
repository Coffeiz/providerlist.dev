# 火山方舟采集器

运行 `pnpm --filter @providerlist/pipeline ingest:volcengine`，分别采集官方模型列表、模型价格、计费说明、Chat / Responses / Messages API、联网搜索工具、Responses API 兼容范围、OpenAI / Anthropic 兼容接入，以及 Coding Plan、Agent Plan 的方案与额度文档。

目录、价格、推荐型号、即将下线标记与 Coding Plan / Agent Plan 证据分开保存。逐型号图像输出分辨率、视频输出时长和分辨率由维护者单独录入全局 Model spec；Provider 采集器不从 API 文档生成这些规格。模型类型和输入/输出模态也只从全局 Model spec 读取。价格转换覆盖 Seedance 视频 Token 分辨率/输入视频条件、3D 按任务或产物模式计价、向量文本/图片输入，以及普通模型批量推理的输入长度和音频/文本价格。精调模型专属价格不映射到基础模型 Offering。Coding Plan 与 Agent Plan 都是订阅事实，不等于通用 API 价格；Coding Plan 只供受支持的编程工具使用。Agent Plan 的月度 AFP、周期额度与按档权益来自独立套餐文档。促销金额必须有独立证据和有效期，不从动态活动卡片推断。候选不覆盖正式 Provider 数据。

IR 当前把中国区官方模型列表中的精确 ID 映射为 `cn` Service 下的 `listed_current` Offering；这仅表示目录列出型号，不表示账号已开通或 API 调用成功。3D 生成官方价格已按当前目录 ID 映射为 CNY `PriceFact`，Hitem3D 的输出模式条件分别保留。Token、向量、图片、在线阶梯、批量价格，以及模型 Route、工具能力和套餐仍未完整映射，保留原始观察并阻止转换切换。产品主页、别名和总览文档未由本次目录来源明确给出时，IR 留空以沿用正式 Provider 字段并提示未核验，不从导航品牌链接推断。

火山方舟国际市场以 **BytePlus ModelArk** 品牌运营。运行 `pnpm ingest:volcengine:global` 独立采集国际模型目录、价格、区域可用性、Base URL，以及 Chat / Responses / Messages、图像生成、视频任务、多模态向量和 3D 生成 API。另采 Coding Plan 个人版/团队版概览、订阅价格查询说明和 Agent Plan 接入线索；国际公开价格目前列出 Coding Plan，Agent Plan 未找到公开档位与订阅价，不从中国区方案推断。采集器保留 API 参数与能力证据、精选型号能力说明和服务能力原文；快照和候选写入 `data/upstream/snapshots/byteplus-modelark-*` 与 `data/candidates/volcengine/global/`。按用户确认，BytePlus ModelArk 作为火山方舟 Provider 下独立的 `global` Service，与 `cn` 分开。官方快速开始说明 ModelArk 不提供内置联网搜索、图像处理和知识搜索工具。当前官方资料对 EU 模型清单存在冲突；价格页的动态表格只保留相邻原文证据，未核对前不作为正式模型价格映射。

Chat、Responses 与 Messages API 来源用于登记服务端点和模型 Route。联网搜索文档描述 Responses / Messages 请求中的服务端工具配置，不构成独立搜索端点；只记录为协议/工具证据，不据此推断所有模型均支持搜索。

## IR 投影预览

运行 `pnpm ingest:volcengine:merge` 预览中国区 IR，运行 `pnpm ingest:volcengine:global-merge` 预览国际区 IR；批量入口 `pnpm ingest:global-merges` 只生成报告，不写正式 Provider 数据。Plan、区域端点和价格适用范围仍按各自 IR coverage / Review 核对；EU 逐型号支持冲突继续保留在候选。
