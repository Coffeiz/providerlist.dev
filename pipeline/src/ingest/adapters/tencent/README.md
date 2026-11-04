# 腾讯云 TokenHub 采集器

运行 `pnpm ingest:tencent`，从固定的腾讯云官方通用文档白名单生成可审阅候选。当前白名单包含模型目录、分市场按量价格、Token Plan（中国与国际站）、Coding Plan、产品动态、API 接入、语言协议矩阵、向量、联网搜索、图像/视频/3D/语音/多模态 API 导航及概览，共 24 个来源。

采集器保留来源快照与字段证据供人工复核；候选不是正式供应状态，也不会自动覆盖 Provider 源数据。API Key 鉴权的 `/v1/models` 不调用。只从固定官方通用来源更新当前供应，禁止拼接或扫描单个模型专属页面。

## 市场与证据边界

- 模型目录、广州中国大陆价格、新加坡国际价格、默认及备用 Base URL 分开记录；不得跨区补价或据区域推断可用性。
- 价格页视频表中“输入图片前 N 张免费、第 N+1 张起按 tokens/张计费”的单元格按表格行解析；同时提取官方折合元/张金额，形成可评审候选，再转换为带输入图片序号条件的增量价格规则。不得把该附加费摊到输入视频或视频生成费率。
- TokenHub 目录中包含多家开发商的模型。合并时按完整规范 Model ID、唯一的 `/` 后型号段，或官方 `display_name` 与规范 Model `name` 精确匹配。名称比较只统一 Unicode 兼容形式、大小写和空白，不做标点删除、子串或相似度匹配。唯一命中时填写 `model_ref`；同名命中多个规范 Model（尤其跨开发商同名）时保留 `null` 并在 PR review 列出候选。review 逐项说明命中规则。不据此推断模型类型与发布规格。
- 当前目录列出仅表示在 TokenHub 当前目录中观察到；账号是否已开通或实测可调用仍为未知。
- 联网搜索是现有语言模型接口上的增强功能，按官方支持矩阵记录到具体 Offering；文档声明适用广州，因此不将此能力复制到国际 Service。
- Token Plan 与 Coding Plan 是交互式订阅权益，不是通用 API 调用权限，也不并入按量价格。
- Token Plan 个人版套餐描述从固定来源 `tencent-token-plan` 的套餐详情表“适用场景”单元格逐字采集，保留中文原文；通用与 Hy 两个系列分别映射四档套餐。文案缺失或页面结构变化时采集失败并进入 Review，不生成翻译或摘要。
- 国际站 Token Plan 使用新加坡区域官方来源 `tencent-token-plan-global`，仅映射国际个人版 Lite、Standard、Pro、Max 四档 USD 月费、月度 Credits 与英文 Recommended 原文；不与中国站套餐合并。
- 只有概览文档明确列出的模型 API 才录入协议与 Route；未披露的异步状态、轮询路径、参数与额度保持未知。
- IR 将官方模型目录的 142 个独立调用 ID 逐项记录为中国市场 `listed_current` Offering；目录中同一名称下以独立列表项列出的 ID 会分别保留，不合并成含空格的 ID。这不表示账号已开通或模型调用成功。按官方语言协议支持矩阵，对当前目录精确匹配型号映射 113 条 Chat Completions、Responses、Anthropic Messages Route；加上 4 条 Kinfra Embeddings Route，共 117 条模型 Route。联网搜索支持矩阵映射为 6 条模型内置 Operation，统一 IR 投影会将其转换成 Provider Service Capability 并保留精确支持模型 ID。Kinfra 型号保留已核实的维度与 Token 费率；官方视频表中能与目录调用参数精确匹配的输入图片超额费率按 `per_image` PriceFact 表达。其余类别的 API Route、价格、模型能力、Plan 与生命周期仍保留 Review，不推断目录外或跨市场供应。

本轮采集与人工录入复核见 `data/candidates/tencent-tokenhub/manual-review-2026-10-25.md`。
