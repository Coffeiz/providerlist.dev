# ADR-0013 · 目录结构升级：frontend / pipeline / packages.shared

> 状态：已接受 · 日期：2026-10-23
> 取代：[ADR-0009](0009-demo独立于生产站点.md) 的目录部分（其「demo 独立于生产站点」的结论**仍然成立**，被取代的只是目录形态与命名）

## 背景

ADR-0009 定的形态是：`demo/` 是当前唯一的前端实现，`apps/web/` 暂不创建，
「生产化时把 `demo/` 迁过去」。当时这么定的理由是 M0/M1 阶段要避免
「空壳目录」和「两份前端」。

到 2026-10-23，前端已经度过原型期：

- 信息架构、视觉层、令牌体系、交互模式都已定型（见 ADR-0012）；
- 站点消费的是**真实编译产物** `/v1/*.json`，验证的是公开契约而不是内部实现；
- i18n、参考汇率并列展示、API 页、能力分组等能力都已经在站点上跑通。

也就是说，**「demo 会不会变成第二份实现」这个风险已经消失**，
而「叫 demo 却承担正式站点职责」的认知成本一直在增加：
文档、脚本、CI、Agent 提示里全是 `demo/`，读代码的人分不清它是原型还是产品。

同时，仓库里另外两个问题也到了该收的时候：

1. **领域包按「历史演进」而不是「依赖方向」划分**——
   `pricing`、`capabilities` 只被前端用，`catalog`、`generator` 只被流水线用，
   但四个包平铺在 `packages/` 下，看不出谁和谁是一伙的。
2. **流水线只有一个入口**——`pipeline` 里同时装着编译、校验、
   生命周期事件求值，加上散在 `scripts/` 里的取数脚本，
   「离线处理」这件事在目录上看不出来。

外部给出的目标目录形态是：

```
frontend/   站点（Vue 3 + Vite）
pipeline/   离线数据处理（ingest / normalize / validate / compile）
packages/   schema（契约）+ shared（前端与流水线共用）
data/       upstream / providers / models / pricing / sources / fixtures
```

## 决策

### 1. `demo/` → `frontend/`（正式站点）

- 前端**唯一实现**，不再叫 demo；
- 内部按前端惯例重排：
  - `views/` → `pages/`；
  - `data/` 拆为 `composables/`（catalog / format / capabilities / api / prefs）、
    `i18n/`（`dictionary.ts` 词典 + `index.ts` 翻译入口）、
    `components/icons.ts`（图标路径数据）、`types.ts`（契约类型转发层）；
- 包名 `@providerlist/demo` → `@providerlist/frontend`；
- 命令 `pnpm dev:frontend` / `pnpm build:frontend` → `pnpm dev:frontend` / `pnpm build:frontend`。

**仍然成立**的部分（原 ADR-0009 的核心约束）：

- 前端**不读 `data/`**，只消费编译产物 `dist/v1/**`；
- 前端**不提供内置种子数据或示例回退**，加载失败时显示显式错误空态；
- 演示数据必须是虚构的。

### 2. `packages/` 只留两个包

| 包 | 内容 | 依赖方 |
|---|---|---|
| `packages/schema` | JSON Schema、TS 类型、语义校验器、九类模型类型 | 前端、流水线、SDK |
| `packages/shared` | 十进制金额、条件价匹配、计量单位、Operation 词典、媒体约束 | 前端、流水线 |

`packages/shared` 用子路径保留领域分组，导入路径形如
`@providerlist/shared/pricing/units`、`@providerlist/shared/capabilities/operations`。

**为什么不拆回多个包**：`pricing` 与 `capabilities` 都是「前端与流水线都要用」的，
放在一起是为了让「同一份词典只有一个真源」在目录结构上也看得出来——
拆成多个包时，迟早有人在新包里再抄一份（ADR-0009 修订节记录过一次真实漂移）。

### 3. `packages/generator` + `packages/catalog` → `pipeline/`

`pipeline/` 是**离线数据处理**，按阶段分目录：

```
pipeline/src/
├── ingest/     上游快照取数（当前只有 ECB 汇率取数脚本）
├── normalize/  生命周期求值、字段级合并、覆盖统计（原 packages/catalog）
├── validate/   数据级校验
└── compile/    编译 dist/v1 公开 JSON + manifest + 搜索索引（原 packages/generator）
```

- 包名 `@providerlist/pipeline`；
- 依赖 `packages/schema` + `packages/shared`；
- **反向依赖不成立**：前端不依赖流水线，流水线不进站点产物。

### 4. `data/` 按「事实层 / 上游层 / 证据层」重整

| 目录 | 内容 |
|---|---|
| `data/providers/` | Provider / Service 档案——当前目录的**事实层** |
| `data/upstream/` | 上游快照（当前：`fx/eur-reference.json`，取自 ECB 公开数据 API） |
| `data/sources/` | 来源与证据记录（当前：`lifecycle/` 供应事件） |

供应事件从 `data/lifecycle/` 移到 `data/sources/lifecycle/`：
事件是**观测记录**，带证据引用，归在「来源与证据」层比单独挂一层更准确，
同时也不打乱「档案 = 事实、事件 = 观测」这条分界。

`data/models/`、`data/pricing/`、`data/fixtures/` 目前**尚未落地**——
模型与价格仍内嵌在 Provider 文档里。空目录只会误导人，因此不预建；
等真的拆出模型主表或人工价格层时再建。

### 5. `apps/worker/` 保留

官方接入控制面（Cloudflare Worker）是**独立的第四条路径**，
不参与前端/流水线划分，继续留在 `apps/worker/`。

## 备选方案

### A. 只把 `demo/` 改名，其余不动

**不选**：领域包按历史演进划分、流水线入口分散这两个问题会留着，
下次还要再来一次结构整理。

### B. 保留 `packages/pricing`、`packages/capabilities`，另加 `packages/shared`

**不选**：`packages/shared` 会变成空壳——「共用」这件事在目录上要看得见，
而不是靠约定。

### C. 前端迁到 `apps/web/`

**不选**：本仓库的 Worker 已经是 `apps/worker/`，而前端是**唯一**的 Web 消费方，
放进 `apps/` 反而暗示它和 Worker 是同一类东西。
外部给出的目标形态也是顶层 `frontend/`。

### D. 一次性把模型拆成独立的 `data/models/`

**不选**：那是数据模型的改动，不是目录改动。
模型与价格内嵌在 Provider 文档里是当前契约的一部分（`docs/data/schema.md`），
拆表要单独走契约评审，不能和目录迁移混在一起。

## 后果

**好处**：

- 目录即文档：看一眼就知道谁是运行时、谁是离线处理、谁被谁依赖；
- `packages/shared` 让「词典只有一个真源」有结构保障；
- `pipeline/` 按阶段分目录后，「哪一步出的问题」可以直接对到目录；
- 前后端与流水线的边界更硬：前端不读 `data/`，流水线不进站点产物。

**代价**：

- 一次性改动面很大：包名、导入路径、脚本、CI、文档全要跟着改；
- `@providerlist/frontend` 这个包名消失，外部若引用过会断（当前无外部引用）；
- `data/` 的三个目标目录只落地了一个半，`models/` `pricing/` `fixtures/` 仍是空的。

**新增的约束**：

- 前端目录按前端惯例组织，但**不得**因此引入 UI 框架、状态库或 CSS-in-JS；
- `packages/shared` 里不许出现只有单侧（前端或流水线）使用的代码——
  那种代码属于 `pipeline/src/` 或 `frontend/src/`；
- 新增顶层目录前先问「它是运行时消费方、离线处理、还是契约」——
  三者之外的位置说明白不放进来。
