# MiniMax 适配器

本目录只放 MiniMax 专属的采集、解析、候选映射与测试。通用来源白名单、HTTP 快照、保留策略和命令入口放在上级 `ingest/`。

| 文件 | 职责 |
|---|---|
| `sources.ts` | MiniMax 中英文站固定 HTTPS 来源白名单 |
| `collect.ts` | 抓取已登记的 MiniMax 中英文站来源，并映射为 ProviderCollectionIR 候选 |
| `collect.test.ts` | 用静态文档夹具验证目录与价格解析 |

## 来源与解析范围

中国站 `platform.minimax.cn` 与国际站 `platform.minimax.io` 的模型自动采集范围只有官方模型列表和价格来源。目录用于提取模型 ID、名称、分类或状态，价格页用于提取价格；不请求模型详情页、发布记录页或其他逐模型规格来源，也不把上下文、模态、限制、发布日期、能力或 API 行为写入 Offering。所有 Model 规格由维护者手动写入 `data/models/`。其他已登记来源仅用于 Provider API/协议、独立服务能力和套餐，不用来推导逐模型规格或支持矩阵。

M Plan 档位与使用参考从中国站和国际站官方 `/docs/m-plan/intro.md` 文档按市场逐行提取；采集器不限定档位名称或数量。候选保留来源原文，不互相翻译或复用；空档位、重复档位、缺少使用参考或市场语言不符时，本轮解析失败。

候选按市场分别保留模型目录 ID/分类/状态和价格原始表头、单元格及价格表中的费率。API Operation 输入/输出、参数及独立能力按 Provider Service 维护，不关联或推导逐模型规格。未披露的 Model 字段保持未知，由维护者依据开发厂商官方资料手动写入 `data/models/<developer_id>/<model>.toml`。

独立服务能力与模型列表分开采集和转换。中英文站文件管理文档均列出 `POST /v1/files/upload`，分别生成对应按量服务下的 `file_storage` 能力及文件上传 Operation。中英文站的 M Plan MCP 指南都列出 `web_search` 与 `understand_image`；对应参数从各市场工具参数表采集。MCP 需要订阅 Key，因此两项能力记录在独立的 M Plan 订阅服务下，不挂到按量服务。调用方式是本地 stdio MCP server 暴露的工具，文档未定义 HTTP Route，因此不伪造 HTTP 路径或 Endpoint。能力记录只表达官方文档记载，不推断账号已开通或运行时可调用。

价格处理保留来源原文；只有来源明示币种且金额无歧义时才拆出 ISO 4217 币种和十进制金额。官方划线原价写入 `list_amount_decimal`，当前价写入 `amount_decimal`；标准与优先价格分区、规格阶梯和明确条件分别保留。无法确定币种或单位时不依据市场或符号猜测。价格行并列列出多个模型 ID 时，为每个模型生成价格事实；图像价格“元/张”映射为 `generated_image / per_image`。

只从目录或价格表生成模型 ID 候选；API 文档中出现的模型 ID 不生成 Offering。逐模型规格文件不创建或恢复目录成员。模型从某个来源消失只进入差异候选，不自动退役。

中国站和国际站分别登记 Anthropic Messages、OpenAI Chat Completions 与 Responses API 文档。通用协议页面只用于核对 Service API 接入；不按模型提取协议、参数或调用能力。正式数据中，同一聊天 Operation 下的不同协议应保留为独立 Route，不能按协议分别建 `kind: chat` 的 Operation。

完整流程：

```bash
pnpm ingest:minimax       # 只抓取并生成候选
pnpm ingest:minimax:merge # 生成通用 IR 字段投影预览
pnpm validate:data
pnpm build:catalog
```

新增 Provider 时，按 `adapters/<provider-id>/` 建立独立子目录，在 `sources.ts` 维护来源白名单，并从 `adapters/index.ts` 汇总。这样来源、解析器、字段映射和测试都按 Provider 收纳，公共抓取能力继续复用。合并器只按官方明确证据填写事实；抓取结果不等于人工核实，价格表或接口文档单独列出的模型保持供应状态未知。

`pnpm ingest:minimax` 生成 ProviderCollectionIR 候选。`pnpm ingest:minimax:merge` 只将 IR 投影为只读字段报告，不更新 `data/providers/minimax/` 或生命周期文件。API 文档中的新模型不自动成为当前供应；当前供应候选只依据模型目录与价格。采集观察不代表真实账号下 API 调用成功，候选须通过 PR 审查。

旧 MiniMax 全量重建器已移除；当前字段差异由通用 IR Review 生成。正式数据人工修改保护仍由 IR 投影与独立审核流程负责。
