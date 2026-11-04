# ProviderList 架构

本文说明 ProviderList 当前的系统组成、数据流和部署边界。源数据结构见[源数据 Schema](data/schema_cn.md)，公开 JSON 见[API Schema](api/schema_cn.md)，采集与发布细节见[采集指南](guides/ingestion_cn.md)和[运维指南](guides/operations_cn.md)。

## 系统概览

ProviderList 将人工维护的数据与自动采集的候选统一存放在 Git 中，经离线流水线校验和编译后，生成网站数据与对外 JSON，并通过受保护的发布流程部署到 Cloudflare。

```text
   官方公开文档                   维护者录入 / 社区贡献
        │                               │
        ▼                               ▼
 固定来源采集器 ──▶ 候选数据/IR ──▶ Pull Request 审查
                                        │
                                        ▼
                              PR 分支上的正式源数据
                                        │
                                        ▼
                                  CI 校验与构建
                                        │ 通过并合并
                                        ▼
                         Publish 重新校验并离线编译
                                        │
                      ┌─────────────────┴─────────────────┐
                      ▼                                   ▼
           对外静态 JSON：dist/v1/          站点数据：dist/assets/datasets/
                      │                                   │
                      └─────────────────┬─────────────────┘
                                        ▼
                              Vue 网站构建 + JSON
                                        │
                                        ▼
                                统一发布目录 dist/
                                        │
                                        ▼
                           SEO 静态页 + sitemap/robots
                                        │
                                        ▼
                              受保护的 Publish 部署
                                        │
                                        ▼
                                Cloudflare 静态资源
                             │          │          │
                             ▼          ▼          ▼
                         网站       标准 API   Worker 查询路由
                                          /v1/providerlist.json
                                               读取站点数据集
```

前端构建会为 Provider、Model 和模型类型页面生成带有页面元数据与首屏正文的静态 HTML，并生成 `sitemap.xml` 和 `robots.txt`。Cloudflare 直接托管这些文件；独立的轻量 Worker 将 `www.providerlist.dev` 永久跳转到 `providerlist.dev`。

## 仓库目录与组件

### 目录树

```text
providerlist/
├── apps/
│   └── worker/src/             # 只读查询路由与 JSON 404 保护
├── data/
│   ├── providers/              # TOML Provider / Service / Offering 源数据
│   ├── models/<developer_id>/ # TOML 规范 Model 事实，一文件一个 Model
│   ├── collector/
│   │   └── providers.json      # 自动采集来源 URL 与最近采集时间
│   ├── candidates/             # 自动采集候选与 PR 评审材料
│   ├── ingestion-lifecycle/    # 采集 PR 流程记录
│   └── upstream/
│       └── snapshots/          # 上游原始响应与快照元数据
├── frontend/src/
│   ├── pages/                  # Providers、Models、Capabilities、API 等页面
│   ├── components/             # 共用展示组件
│   ├── composables/            # 数据读取与展示逻辑
│   ├── data/                   # 站点展示所需的静态配置
│   ├── i18n/                   # 界面语言
│   ├── router/                 # 页面路由
│   └── styles/                 # 设计令牌与页面样式
├── packages/
│   ├── schema/
│   │   ├── schema/             # 发布给 API 消费者的 JSON Schema
│   │   └── src/                # TypeScript 类型与校验
│   └── shared/src/             # 前端与流水线共用的领域逻辑
├── pipeline/src/
│   ├── ingest/
│   │   ├── adapters/           # Provider 专属来源与解析适配器
│   │   ├── ir/                 # 采集 IR 与投影
│   │   └── migration/          # 一次性数据迁移工具
│   ├── normalize/              # 归一化与统计
│   ├── validate/               # 数据与引用校验
│   ├── compile/                # 公开 API、Manifest、站点数据集
│   └── fixtures/               # 测试用数据样本
├── .github/workflows/
│   ├── ci.yml                  # PR 与 main 的只读验证
│   ├── sync.yml                # 定时或手动采集并生成候选 PR
│   └── publish.yml             # 受保护的生产构建与部署
├── agentskills/                # 开发领域说明与工作约定
├── docs/                       # 当前架构、契约、政策与指南
│   ├── api/                    # 对外 API 文档
│   ├── data/                   # 数据契约、分类与政策
│   ├── feeds/                  # 官方 Provider Feed 规范
│   ├── guides/                 # 贡献、采集与发布流程
│   ├── development/            # 开发相关参考
│   ├── adr/                    # 架构决策记录
│   └── _archived/              # 历史 PRD 与调查日志
├── scripts/                    # 构建、CI 与数据维护脚本
├── dist/                       # 生成的本地发布目录，不手工修改
├── package.json                # 仓库级命令入口
└── wrangler.jsonc              # Cloudflare Worker 与静态资源配置
```

## 目录职责

| 路径 | 职责 |
|---|---|
| `data/providers/` | Provider 供应数据 |
| `data/models/<developer_id>/` | 规范 Model 数据 |
| `data/collector/providers.json` | 自动采集来源 URL 与采集时间 |
| `data/upstream/` | 上游数据与抓取快照 |
| `data/candidates/` | 自动采集候选与评审材料 |
| `data/ingestion-lifecycle/` | 采集 PR 处理记录 |
| `pipeline/src/ingest/` | 来源抓取与候选生成 |
| `pipeline/src/normalize/` | 数据归一化与统计 |
| `pipeline/src/validate/` | 数据校验 |
| `pipeline/src/compile/` | 生成 API 与站点数据 |
| `packages/schema/` | Schema、类型与语义校验 |
| `packages/shared/` | 前端和流水线共用逻辑 |
| `frontend/` | Vue 网站 |
| `apps/worker/` | JSON 查询路由与 404 保护 |
| `dist/` | 最终发布产物 |

## 数据分层

Provider 记录各市场当前提供的服务；Model 记录开发厂商定义的模型规格：

```text
Model（开发厂商发布了什么）
  data/models/<developer_id>/developer.toml
  data/models/<developer_id>/<model>.toml

Offering（某 Provider 在某市场怎样供应）
  data/providers/<provider_id>/provider.toml
  data/providers/<provider_id>/<market>/service.toml
  data/providers/<provider_id>/<market>/offerings/<转义后的模型 ID>.toml  # 一个文件一条 Offering
  data/providers/<provider_id>/<market>/plans.toml

自动采集记录
  data/collector/providers.json
```

Provider 和 Model 源数据使用 TOML，便于社区审阅。离线构建会校验源数据并生成 `/v1/` 下的现有公开 JSON；API 路径与 JSON Schema 保持不变。

Offering 文件名使用 Provider 接受的模型 ID；其中 `/` 写作 `·`，例如 `vendor/model-name` 对应 `vendor·model-name.toml`。这只影响文件名，TOML 和公开 JSON 中仍保存原始 ID。

- Offering 的 `id` 保存 Provider API 接受的原始模型调用 ID，并通过 `model_ref` 关联规范 Model；不再另存内部 Offering ID 或 `provider_model_id`。
- Provider 文件按市场和 Offering 归类，便于逐项审阅。市场目录名会作为当前契约中的 `service_id` 使用。
- Model 记录开发厂商公布的类型、上下文、模态、限制和发布日期。采集器发现新调用 ID 时只提交 ID 候选；Model 规格仍由维护者根据来源资料录入。
- 自动采集记录只保存登记来源 URL 和最近采集时间。快照与评审证据留在候选中；手动修改在 PR 中附来源链接。

## 自动采集怎样进入正式数据

自动采集按以下流程产生待审核变更：

1. **采集：** 适配器只访问代码登记的 HTTPS 来源，生成候选和来源记录。
2. **汇总：** Sync 每日 UTC 00:00 执行，也可手动运行全部或指定的 A 类 Provider。任务并行处理，单家失败不会影响其他 Provider 的数据。
3. **提 PR：** 系统汇总变更并生成一个采集 PR，附上有变化 Provider 的评审视图。开放 PR 期间保留候选和其引用的来源快照；PR 关闭后清理，GitHub PR 历史保留评审差异。传递用 Artifact 保留 1 天，精简生命周期记录和最新观察状态继续用于后续差异比较。
4. **人工审核：** PR 中包含 TOML 正式数据变更提案和差异视图。维护者核对来源后合并批准的变更。新模型只提交 Provider 模型 ID 候选，Model 规格由维护者录入。
5. **校验发布：** CI 校验候选状态、Schema、数据引用、类型、测试和构建。只有审核合并后的正式数据会进入发布构建。

采集器只生成候选，不写入生产或直接部署；单次抓取失败或目录缺席也不会触发退役。来源、候选和保留规则见[采集指南](guides/ingestion_cn.md)。

## 从源文件到网站和公开 API

`pnpm build` 依次完成三个阶段：

1. **目录编译（`build:catalog`）**：校验 `data/`，生成公开 JSON、Schema、Manifest 和站点数据集。
2. **网站构建（`build:frontend`）**：构建 Vue 网站，并复制运行所需的数据。
3. **发布合并（`build:release`）**：将网站文件与公开数据合并到最终目录 `dist/`。

最终部署目录是 `dist/`：

- `/v1/`：对外版本化 JSON 资源，清单见 [API 文档](api/api_cn.md) 和 `/v1/manifest.json`。
- `/assets/datasets/`：网站使用的数据集，由构建生成，不属于公共 API。

标准 `/v1/*.json` 资源是静态文件。`/v1/providerlist.json` 由 Worker 从同次部署的数据集中按允许的参数筛选并生成结果；不访问数据库或供应商接口，也不保存用户配置。JSON Builder 在浏览器本地生成预览和订阅 URL。

Worker 也确保缺失的 API JSON 返回 JSON 404，而不会落入 SPA 的 `index.html`。官方 Feed 控制面尚未实现，当前 `/api/*` 返回 501。

## CI、Sync 与 Publish

- **CI**：在 PR、`main` 更新或手动触发时运行检查和构建；只读，不写数据或部署。
- **Sync**：每日 UTC 00:00 或手动采集 A 类 Provider，将 TOML 变更提案写入评审 PR 并更新采集状态；不会改动 `main` 或部署生产。PR 审核合并后，提案才成为正式数据。
- **Publish**：在 `main` 更新或手动触发时重新校验、构建和部署，并进行线上检查；部署前须通过 GitHub `production` 环境审批。

只有 Publish 持有生产部署权限。Sync 仅有创建采集 PR 和更新采集状态所需的权限。

## 依赖关系

```text
frontend ───────▶ packages/shared ───────▶ packages/schema
pipeline ───────▶ packages/shared
pipeline ───────▶ packages/schema
```

- `packages/schema` 定义各层共用的数据契约。
- `packages/shared` 提供前端和流水线共用的规则。
- `pipeline` 离线校验并编译数据。
- `frontend` 展示构建产物。
- Worker 处理只读查询和 API 路由保护。

## 相关文档

- [文档导航](README.md)
- [公开 API 与 JSON Builder](api/api_cn.md)
- [数据契约](data/schema_cn.md)
- [自动采集流程](guides/ingestion_cn.md)
- [CI 与发布运维](guides/operations_cn.md)
- [贡献指南](guides/contributing_cn.md)
- [架构决策记录](adr/README.md)
