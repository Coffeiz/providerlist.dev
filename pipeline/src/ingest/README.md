# 自动采集脚本规范

本目录存放离线采集入口、来源白名单、快照存储和来源适配器。默认采集命令负责取得可追溯的公开证据并形成待评审候选；候选转换器是显式、独立的步骤，可在本地工作区生成符合统一 Schema 的正式源文件，供人工检查并纳入 PR。采集和转换都不发布网站数据。

## 目录与运行方式

| 路径 | 约定 |
|---|---|
| `registry.ts` / `adapters/index.ts` | 汇总各 Provider 子目录中的来源白名单；CLI 只接受这里登记的 `source_id` |
| `types.ts` | 来源与快照元数据类型 |
| `snapshot.ts` | 通用受限 HTTP 获取、哈希、不可变原始快照与带校验的条件请求缓存；同一文件系统中缓存正文硬链接到快照，跨文件系统时回退复制 |
| `candidate-review.ts` | 所有 Provider 候选评审 Markdown 的统一摘要、字段差异与来源快照版式 |
| `semantic-diff.ts` | 比较前后事实时忽略无意义的键与稳定身份数组顺序变化 |
| `ir/observed.ts` | IR 来源事实的可复用证据包装原语；各 Provider 的来源解析和业务映射仍由适配器负责 |
| `cli.ts` | 来源抓取只接受已登记的 `source_id`；Feed discovery 只生成候选 URL，不发网络请求 |
| `feed-discovery.ts` | 离线生成 Feed URL 候选，并列出 Provider 下的 Service、Offering、Capability 和 Plan ID |
| `adapters/<provider-id>/` | Provider 专属来源表、解析器、合并器、夹具和测试集中放置；共用采集能力仍放在 `ingest/` |
| `data/upstream/snapshots/<source_id>/` | 原始响应正文与并列快照元数据 |
| `.cache/provider-ingest/<source_id>/` | 最新成功的正文及 ETag / Last-Modified；本地或 Actions 缓存损坏时自动回退为完整请求 |
| `data/candidates/<provider>/` | 最近观察状态和发生语义变化时生成的评审候选；机器 JSON 使用紧凑序列化，review 目录另写人工评审 Markdown |
| `data/candidates/<provider>/decisions/` | 已接受、拒绝或被新候选取代的精简决策记录 |
| Provider Sync Artifact | 每个 Provider 一个 `snapshot-bundle.tar.gz`，只打包候选实际引用的来源版本；不复制来源目录中的历史版本 |

```bash
pnpm ingest:sources
pnpm ingest:source -- <source_id>
pnpm ingest:feed-discovery
pnpm ingest:minimax
pnpm ingest:minimax:merge
pnpm ingest:global-merges
pnpm ingest:deepseek:merge
pnpm ingest:decision -- minimax <sha256> accepted --reviewer <name> --reference <PR URL>
pnpm ingest:cleanup
```

添加适配器时，在 `adapters/<provider-id>/sources.ts` 登记固定来源，在 `adapters/index.ts` 汇总，再实现解析和夹具。一个 Provider 可以有多个市场和文档源；市场、币种或供应条件不同的事实必须分开输出，除非有明确证据可合并。

`pnpm ingest:feed-discovery` 从正式 Provider 文件生成地址和数据 ID 候选，不检查 URL 是否存在、不读取 Feed，也不创建 `FeedSubscription`。清单只供接入时选择；域名与品牌审核通过后，ProviderList 仍需单独登记 Feed URL 及允许提交的 Service 和字段。发现结果本身不授予权限。

仅维护 `docs/data/provider-classes.md` 中列出的 A 类适配器。B 类没有来源登记、适配器实现或手动采集入口；若要支持某个 B 类 Provider，先调整分类并将其纳入 A 类。通用文档观察解析位于 `adapters/document-observation.ts`，不得据此恢复 B 类采集。

`pnpm ingest:global-merges` 和 `pnpm ingest:<provider>:merge` 统一读取 IR 候选并生成只读字段投影预览。它们不会更新正式 Provider 或采集记录；候选缺失或 coverage 不完整时明确输出待审状态。Sync 聚合 workflow 会将可校验投影提案写入自动采集 PR；PR 获批合并后才进入正式数据，发布仍由独立构建与发布流程完成。旧配置投影只保留在 `ingest/migration/legacy-merges.ts`，供固定快照生成迁移差异，不属于采集或预览运行路径。

`ingest:ir:apply` 将投影写入正式源文件以供 PR 审阅；写入器逐文件比较序列化内容，只写新增或内容变化的 TOML 文件，未变化的 Provider、Service、Offering 和 Plan 文件不会被重写。

采集评审 Markdown 按 Provider、市场、Model / Capability 和字段分组，旧值与新值直接并列显示；长文本和大型结构可展开查看完整差异。

统一转换器从本地审核过的品牌资源路径写入 Provider `logo` 字段，不复制采集页面的 SVG。候选行包含多个明确的模型 ID 时，转换器按 ID 展开并保留对应来源；不能可靠映射成通用目录的登录态列表、套餐范围和宣传型号继续留在 `needs_review` 报告。

成功运行 `ingest:source` 或 `ingest:minimax` 时会自动执行一次保留清理；也可单独运行 `pnpm ingest:cleanup`。聚合采集 PR 合并且当前 head 存在人工批准时，Sync 会按 viewer 中的候选哈希自动记录 `accepted`；未合并关闭只记录 `closed_unmerged`，不会自动拒绝。新候选替代旧候选时记录 `superseded`。自动决定和生命周期事件保存在 `provider-ingest-state` 分支。其它明确拒绝或无 PR 的决定仍可用 `pnpm ingest:decision` 写入；该命令要求 `--reviewer`，可选提供原因与 PR 链接。未明确登记决定的候选始终按待处理保留。

Sync 为每个 Provider 生成一个压缩快照包，内容仅含候选 JSON 实际引用的原始正文及对应元数据；相同的来源/版本只收录一次。包清单记录来源数、版本数、压缩前后字节数。没有候选引用的快照不会进入 Artifact，缺失或校验不一致的引用会让打包失败，避免静默丢失评审证据。

打包发生在候选生成和差异判定之后。候选变化仍由规范化 Provider Collection IR 的语义指纹判定；原始快照内容哈希仅用于来源追溯，聚合包格式和压缩字节数不参与比对。

## 来源与抓取规则

- 来源 URL 必须是仓库代码中预先登记的精确 HTTPS URL。禁止从命令行、页面或候选数据拼接任意地址。
- 禁止跨主机重定向；设置请求超时、响应大小上限和合理的 `Accept`。失败或超限时不写入半成品快照。
- 上游网页、Markdown、JSON 和响应头都是不可信输入。只解析预期字段；不执行、不动态导入响应内容，不把原始 HTML/SVG 直接注入页面。
- 原始快照不可覆盖，文件名由内容哈希确定；每份快照元数据记录来源、市场、请求 URL、UTC `retrieved_at`、HTTP 状态、内容类型、`ETag`、`Last-Modified`、SHA-256、字节数和采集器版本。
- `retrieved_at` 是取回时间；`Last-Modified` 是来源提供的更新时间；`observed_at` 是采集器观察到语义状态的时间；`published_at` 是上线时间。不得互相代替。人工审查时间由 GitHub PR 记录追溯。
- 不记录密钥、Cookie、授权头或其他凭证。公开数据来源本身也必须遵守许可和约定采集范围。

## 解析和规范化规则

- 适配器抽取来源明示的事实，不替 ProviderList 做最终裁决。未知字段省略或保留为未知，不从地区、模型名称、符号习惯或相邻型号推断。
- 保留足以复核的原始字段：价格表的原始表头、单元格、所属章节和来源证据不能被规范化结果替代。
- 价格字段将 `currency_code`（ISO 4217，例如 `CNY`、`USD`）与金额字符串分开。币种只从来源明确文字或明确币种代码确定；单独出现 `$`、`¥`、`元` 或市场区域不足以判定时，代码留空并保留原文。
- 金额使用十进制字符串，不转成 JavaScript `Number`。只有能无歧义抽出一个有效金额时才输出 `amount_decimal`；官方以划线标出的单一原价另存 `list_amount_decimal`，当前价仍放 `amount_decimal`，并保留 `source_value`。区间价或复杂条件价不强行归一。
- 计价指标和计量单位需要由表头明确支持。保留原始表头；未知或组合单位不生成猜测后的标准值。
- 手工规格中的模型发布日期应来自官方发布记录并保留日期粒度；不能用网页修改时间或本次抓取时间替代。
- 市场隔离应体现在候选结构中。不同市场可有不同目录、价格、可用性和路由；不要按同名模型自动合并市场事实。
- 所有 Provider `description`（Plan、独立 Capability 的输入、参数和约束）必须依据固定官方来源并保留原文语义；禁止手动编造、翻译、摘要或拼接。没有可靠来源时省略，并在 Review 说明缺口。描述变化要反映到 IR 字段差异和同一 PR 的正式字段提案；PR 获批合并后才生效。抓取快照与解析证据留在候选和评审材料中，正式 Provider 数据不保存字段级证据。

## 保留与清理

| 产物 | 保留期 | 清理条件 |
|---|---:|---|
| 仍待 PR 审核的 review 候选 | PR 关闭前 | 保留最新候选及其引用的快照，供当前 PR 审阅与复现 |
| 已接受、已拒绝、已取代或 PR 已关闭的 review 候选 | 清理时立即删除 | Sync 聚合或 PR 关闭事件记录生命周期后，删除候选 JSON 与配套 Markdown 评审表；GitHub PR 历史保留审阅记录 |
| 候选决策记录 | 长期保留 | 只保存哈希、决定、UTC 时间、审阅者、原因和 PR 引用，不保存候选正文 |
| 原始快照 | 仅在仍被待审候选引用时保留 | 每次清理删除未被待审候选引用的正文与元数据 |
| 最近观察状态 | 长期保留 | 保持每个适配器的最新语义指纹和事实，用于后续变化比较 |

原始快照目录已加入 `.gitignore`，防止把抓取正文和每次内容变化写入 Git。清理器保护仍待审候选引用的快照；候选决策或 PR 关闭后，在下一次自动聚合/清理时删除候选正文与不再引用的快照。Sync Workflow Artifact 只保留 1 天，用于同一次工作流内的聚合。PR diff、审阅与合并记录由 GitHub 保留；自动化状态分支只保留后续差异计算所需的最新观察状态和精简生命周期记录。

## 候选与正式 Schema 的边界

中间候选不是公开数据契约。每个 Provider 适配器可按其来源结构定义 `previous` / `current` 事实；不要求所有适配器把内容摊平成统一的 `FieldObservation` 列表，也不要求候选使用 `ProviderDocument` 的字段布局。

跨 Provider 共用的 `ProviderCollectionIR` 位于 `ir/`。官方来源登记必须注明适用的 `scope`（数据域）和市场；IR `coverage` 要为每个登记的来源、数据域和市场给出状态。只要提供 `record_count`，就必须同时提供可读的 `record_unit`。直接统计 IR PriceFact、PlanFact、Endpoint、Route、Capability action、当前 Offering、Batch 或文档观察的单位由校验器按来源证据核对数量。若采集器统计的是解析出的源记录（这些记录可能留在 Review，或在投影时拆分/合并），单位应以 `recognized ...` 开头；此类源侧计数不会被误当成 IR 事实数。Review 并列展示数量与单位。

跨适配器只共用候选元信息 envelope：`provider_id`、`candidate_kind`、UTC `observed_at`、前后候选指纹、来源快照元数据，以及适配器自有结构的 `previous` / `current`。TS 类型 `CandidateEnvelope<TFacts>` 中的 `TFacts` 由适配器定义。评审 Markdown 使用统一外框与通用字段路径差异表；Provider 适配器仍保留自己的事实类型、来源解释、领域表格和人工核对说明，不为统一展示而丢失来源语义。

```json
{
  "provider_id": "minimax",
  "candidate_kind": "regional_current_supply_observation",
  "observed_at": "2026-10-24T00:00:00Z",
  "previous_candidate_hash": null,
  "candidate_hash": "sha256:<semantic-fingerprint>",
  "sources": [{ "source_id": "minimax-cn-pricing", "market": "cn", "source_name": "官方价格表", "request_url": "https://example.invalid/pricing", "retrieved_at": "2026-10-24T00:00:00Z", "http_status": 200, "content_type": "text/markdown", "etag": null, "last_modified": null, "content_hash": "sha256:<source-hash>", "byte_length": 1234, "collector_version": "1.0.0", "body_file": "data/upstream/snapshots/minimax-cn-pricing/<sha256>.body" }],
  "previous": null,
  "current": [{ "market": "cn", "models": [{ "model_id": "provider-model-id", "pricing_rows": [] }] }]
}
```

示例中的模型和价格结构仅用于说明边界。候选事实可以保留来源原文、表头和适配器解析结果；币种、计量单位、金额仍按 `docs/data/pricing.md` 及 `packages/shared` 规则处理。来源冲突要留在候选评审中，不得按抓取顺序静默覆盖。

正式源数据按 Provider、Service 和 Offering 分层保存：`data/providers/<provider>/provider.toml` 保存 Provider 信息，市场目录中的 `service.toml` 保存 API 接入和独立能力，`offerings/<转义后的模型 ID>.toml` 每个文件保存一条 Offering 及其 `pricing`，`plans.toml` 保存套餐。Offering 的 `id` 就是 Provider API 接受的原始模型调用 ID；文件名中的 `/` 写作 `·`，`service_id` 由目录补齐。模型价格跟随 Offering；独立服务能力费用放在 Capability 的 `pricing`。目录 Loader 组合这些文件时保留实体级结构，不创建独立费率卡或跨文件价格引用。IR 通用投影负责把 IR 字段映射到 `ProviderDocument`；只读 `*-merge` 命令用于本地预览，Sync 聚合 workflow 会把校验通过的 Provider 投影和自动采集记录写入同一待审 PR。候选和原始快照用于追溯，不作为公开目录输入。投影不自动写生命周期或 Model Registry；只有 PR 获批并合并后，Provider 字段才进入正式目录。

先对解析后的语义事实计算稳定指纹，再决定是否产生候选。抓取时间、响应顺序、空白和排版变化不得单独触发评审；字段值、适用市场、来源状态或明确计价条件变化应进入评审。原始快照哈希独立保存，用于追溯证据。

重复观察到相同语义指纹时不得重复创建评审项。每次运行仍可新增不可变原始快照；这不代表目录语义发生变化。

## 自动 PR 与差异评审文案

- 所有采集器的评审 Markdown 共用相同顺序：采集摘要、变更统计与逐字段新旧值、来源快照、Provider 专属证据与核对说明。MiniMax、智谱和使用 `writeDocumentCandidate` 的适配器都走同一个渲染器。
- 差异基线是 `previous` 中最近一次成功记录的语义事实；新旧事实按稳定字段路径比较，逐项列出新增、更新和缺席待核实的路径，不重复未变化的路径。差异表按“变化 / 字段 / 原始路径 / 旧值 / 新值”横向呈现，同一行直接展示完整的新旧值，不截断、不折叠；首次观察将本次取得的事实列为新增。MiniMax 专属差异表和 IR 投影预览同样采用横向新旧值表格，投影预览另附字段证据定位。
- Provider 适配器的专属评审说明紧跟在通用差异之后，展示模型、价格、计划、目录范围或来源冲突等领域语义。候选 JSON 继续作为机器可读的完整 `current` 与 `previous`，用于复现和转换；正式 PR 展示转换后的 Schema 差异。
- 来源快照统一列出市场、来源、官方页面、取回时间、HTTP 状态和内容哈希。模型或来源从本次页面消失时只标记“缺席待核实”，不得自动写成退役。
- 正式数据保护提醒中的模型对照表将 Schema 字段名和常见状态、类型、计费枚举转为中文；原始字段路径与机器值仍保留，方便定位和校验。
- PR 正文继续使用 `.github/templates/ingestion-pr.md`，其摘要、变化行、来源证据和人工审核项与评审 Markdown 使用同一口径；人工贡献继续使用独立的 `.github/PULL_REQUEST_TEMPLATE.md`。

## 禁止事项与人工门禁

- Provider 采集器不得写入 `data/providers/`、`dist/` 或正式发布目录，也不得声称抓取观察证明了真实账号下的 API 调用成功。Sync 聚合器只把通过 Schema/语义校验且转换状态为 `converted` 的 IR 投影写入自动采集 PR 分支；这只是待审正式源文件提案，不代表接受或发布。
- 单次缺席、请求失败、分页不完整、结构变化或解析为空都不能触发退役或清空字段；结构异常应显式失败并保留上一份状态。
- 自动采集不自动接受候选、不自动合并人工核实值、不自动提交或发布。适配器转换生成的正式数据需经过证据核对、Schema 映射和数据校验，并通过 PR 评审后进入正式目录。
- 采集不得挂入默认构建、CI 写入任务或发布流程。定时运行与自动创建评审请求需要单独设计和批准。

## 当前实现

well-known Feed 地址候选生成已实现为离线命令；官方 Feed 网络探测、域名挑战、授权 Registry、持久队列、定期 Pull、Refresh 和发布闭环尚未实现。

历史记录：2026-10 首轮曾新增 Kimi、阶跃星辰、LongCat、ModelScope API-Inference、Inceptron、DeepSeek、七牛云、阿里云百炼、火山方舟与腾讯云 TokenHub 适配器。当前只维护 `docs/data/provider-classes.md` 中的 A 类 Provider 采集器；LongCat、ModelScope、Inceptron、七牛等 B 类适配器已移除，其历史候选保留。A 类适配器细节以各自目录和 [当前采集器与官方来源](../../../agentskills/provider-ingestion/references/current-adapters.md) 为准。

DeepSeek 当前价格文档列出两个模型名并记录峰谷 / 缓存层阶梯；需密钥的 `/models` 实时 API 列表不请求。

阿里百炼模型调用价格页含多地域、多模态和阶梯表，候选保留可识别模型 ID 对应的原始价格行；模型大全页只提供部分示例型号。Coding Plan 与 Token Plan 独立记录，Credits 套餐不折算为 API token 价格。models.dev 对应六个条目，条目市场边界、目录完整性和历史型号生命周期需人工逐项复核。

小米 MiMo 的公开模型 API 本轮返回 8 个目录条目，并包含规格与原始价格字段；币种、计量单位和 API 市场边界未在响应声明，保持待核。

蚂蚁百灵使用十二个官方来源交叉采集当前可用目录、OpenAI/Anthropic/语音 Routes、API 能力、原厂定价、FAQ 与计费升级；原厂人民币价格与第三方美元报价分开，当前目录四项与 FAQ 两项的差异、以及 Ling-3.0-tiny 尚无原厂价格均保留待核。采集器不记录 Model 规格。

火山方舟价格候选按公开文档保留文本、视频、图像、3D、向量、微调与资源计费行；Coding Plan 的模型支持范围按套餐文档单独归档。当前账号可用模型、区域差异和价格仍以登录态控制台为准，未从公开价格表推断。

目前已有通用白名单采集器与 `adapters/minimax/` MiniMax 中英文站适配器。每个 Provider 的来源解析、字段映射和对应测试集中在独立子目录；快照 HTTP、来源白名单、保留策略、CLI 等 Provider 无关能力留在 `ingest/`。MiniMax 候选观察两站的当前/历史目录、Prompt 缓存、定价表，以及协议、独立服务和计划文档；开发厂商发布的逐模型规格现统一维护在 `data/models/<developer_id>/<model>.toml`。Provider API 地址、协议和路径按市场写入 Endpoint；独立服务能力的输入、参数和任务细节写入 Capability；模型类型、模态和模型本身的推理、工具调用、结构化输出能力由维护者按开发厂商资料维护在 Model 注册表，采集器不从 Provider API 文档推断这些事实。Provider Offering 不保存 Model 规格副本。中国站另采集 Responses API，并仅将请求示例明确列出的模型关联到 `responses` Route，同时采集 H3 视频接口与 ASR 接口文档。适配器解析 HTML/Markdown 定价表，保留明确的原价/现价和来源表头；视频与 ASR 接口规格作为候选事实一并输出。价格行并列列出多个模型时，会为每个模型生成价格观察；图像章节的“元/张”会规范化为 `generated_image / per_image`。价格表列出的新模型标记为 `price_listed`，只有接口文档明确列出的模型才标记为 `documented`，这些值不等于正式供应状态。

`pnpm ingest:minimax` 只采集并生成 IR 候选，不改写正式目录。显式运行 `pnpm ingest:minimax:merge` 只生成通用 IR 投影和差异报告；正式文件与生命周期数据不在采集/本地预览命令中重建。Sync 聚合阶段会将已转换且通过校验的 IR Provider 投影与自动采集记录到待审 PR；未通过转换或校验的候选只留在报告中。采集状态仅是来源观察，不证明真实账号下的 API 调用成功。清理命令会递归处理 Provider 根目录和候选 Scope 下的 review：未决 PR 候选及其引用快照继续保留，已决、已取代或 PR 已关闭的候选在清理时删除；未被候选引用的快照每次清理都会删除。A 类定时采集和聚合 PR 已由 `pnpm ingest:sync` / `.github/workflows/sync.yml` 接入，正式字段只有 PR 获批并合并后生效。
