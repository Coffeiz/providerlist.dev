# 自动采集

自动采集从预先登记的官方来源提取候选数据，生成 Pull Request 供维护者审查。采集器不直接发布数据；改动合并后，才会进入正常构建和发布流程。

Provider 专属的来源、解析方式和覆盖范围见各适配器目录中的 `README.md`。数据字段定义见[数据 Schema](../data/schema_cn.md)，供应状态规则见[数据策略](../data/data-policy_cn.md)。

## 数据放置

| 路径 | 内容 |
|---|---|
| `data/providers/` | Provider 供应数据 |
| `data/models/` | 规范 Model 事实 |
| `data/candidates/` | 采集候选与审阅记录 |
| `data/collector/providers.json` | 采集来源与最近采集时间 |
| `data/ingestion-lifecycle/` | 候选 PR 处理记录 |
| `data/upstream/snapshots/` | 临时原始快照，不提交到 Git |
| `dist/v1/` | 构建生成的公开 JSON |

Provider 数据记录供应与接入信息；Model 数据记录开发厂商公布的规格。新发现的模型 ID 先进入候选清单，由维护者确认后再补录 Model。

Provider 和 Model 正式源文件使用 TOML；目录构建读取这些文件，并继续生成 `/v1/` 下的公开 JSON。采集候选和采集元数据仍使用原有 JSON 格式。

## 采集流程

```text
固定官方来源
      │
      ▼
抓取快照并生成候选
      │
      ▼
Sync 汇总变更并创建 PR
      │
      ▼
CI 校验 + 维护者审阅
      │
      ▼
合并后构建并发布
```

Sync 每天 UTC 00:00 运行，也支持手动采集全部或单个有效 A 类 Provider。暂停的采集器不参与定时或手动采集。Anthropic 因国内网络无法访问官方文档端点，目前已停用。单家采集失败不会影响其他 Provider 或改变正式数据。名单见[Provider 采集分类](../data/provider-classes_cn.md)。

采集结果以候选和差异进入 PR。经维护者审阅并合并后，数据才会发布；目录或价格信息不代表账号资格或 API 可用性已验证。

## 采集规则

- 只采集代码中登记的 HTTPS 来源，并限制请求时长和响应大小。
- 数据以来源为准；未知值不猜，币种、单位和条件不推断。
- 模型、价格和套餐清单应从官方页面逐条解析，不用代码里的名称白名单决定采集范围。可以按站点结构配置选择器和字段映射，但不能因此漏掉不熟悉的新条目。
- 页面提供官方 ID 时优先使用；没有 ID 时，用共享规则从名称生成稳定 ID，并报告冲突或无法转换的记录。覆盖范围应按实际解析的页面记录计算，不与硬编码的预期名单比较。
- 单个模型的特殊规则不能限制通用目录发现。只有官方文档明确该事实专属于某个型号，且来源符合采集要求时，才使用固定型号规则。
- 页面结构相同时复用公共解析与归一化逻辑；各 Provider 仍可按自己的页面字段映射数据。
- 单次抓取失败、目录不完整或记录缺失，不代表供应结束。同一市场的官方模型目录连续两次完整观察（间隔至少 24 小时）仍未列出旧 Offering 时，采集器会在 ingestion PR 中提议将其 `status` 改为 `retired`。PR 附带来源观察记录，仍须维护者审核并合并后才生效；模型重新出现会清除缺席计数。
- 自动采集信息写入 `data/collector/providers.json`；手动修改在 PR 中附来源 URL。不得保存访问凭证。

## 候选审阅

审阅时核对变更和来源。信息有误、来源不足或无法可靠映射的内容，应在合并前修正或移出正式数据。

新发现的模型 ID 保存在 `data/candidates/<provider-id>/model-ids.json`，仅作待核对清单。维护者确认开发厂商资料后，再将 Model 规格写入 `data/models/`。

`supply_status` 是正式供应状态。达到连续完整目录缺席阈值只会生成待审的 `retired` 源文件变更，不会自动合并或发布；`data/ingestion-lifecycle/` 记录候选 PR 的处理结果。

## 保留期限

| 内容 | 保留方式 |
|---|---|
| 开放 PR 的候选 | PR 关闭前保留 |
| 已决、已取代或所属 PR 已关闭的候选正文 | 下次聚合或 PR 生命周期清理时删除；GitHub PR 历史保留评审记录 |
| 原始响应快照 | 仅在被开放候选引用时保留；每次清理删除未引用快照 |
| Sync Workflow Artifact | 保留 1 天；每个 Provider 只包含一个聚合压缩包，且仅收录候选实际引用的来源版本 |
| 处理记录与最新采集状态 | 长期保留 |

候选正文只在 PR 开放期间保存在自动化状态分支。PR 关闭后清理当前状态树中的候选，GitHub PR 历史保留评审差异。原始快照不提交到 Git，仅在开放候选需要时保留。精简生命周期记录和最新采集状态继续用于后续差异比较。

每个 Provider 的 Sync Artifact 将候选引用的原始正文与对应元数据打成一个 `snapshot-bundle.tar.gz`；同一来源版本只收录一次，不复制来源目录中的历史版本。清单记录来源数、版本数及压缩前后体积。未被候选引用的快照不会进入 Artifact，缺少或校验失败的引用会让打包失败，避免丢失评审证据。

聚合打包发生在候选生成与差异判定之后。候选变化仍由规范化 Provider Collection IR 的语义指纹判定；原始快照哈希仅用于来源追溯，压缩包格式和体积不参与比对。

## 常用命令

```bash
pnpm ingest:sources                         # 查看已登记来源
pnpm ingest:source -- <source_id>            # 抓取单个已登记来源
pnpm ingest:sync -- all                      # 运行全部 A 类 Provider
pnpm ingest:sync -- provider <provider_id>   # 运行单个 A 类 Provider
pnpm ingest:cleanup                          # 清理到期候选和快照
```

Provider 专属采集说明见对应适配器的 `README.md`。通用实现和命令见[采集器文档](../../pipeline/src/ingest/README.md)。
