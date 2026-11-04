# ADR-0010 · 公开 JSON Schema 与语义校验器分工

> 状态：已接受 · 日期：2026-10-23

## 背景

`AGENTS.md` 的项目结构把 `packages/schema/` 描述为「公共 JSON Schema、TS 类型、
九类模型类型」，但仓库里**只有 `.ts`**——没有任何 JSON Schema 文件。

设计文档 §8.2 把 `/v1/schema/provider.schema.json` 列为 **P0** 端点，
`/v1/schema/provider-feed.schema.json` 列为 P1。也就是说「对外公开可校验的
契约」是这个项目的核心交付物之一，却是唯一没落实的。

同时，`validation.ts` 已经承担了大量校验：交叉引用、生命周期证据、
币种白名单、约束字段引用。JSON Schema 表达不了其中任何一项。

## 决策

**契约分三层，三层必须一致。**

| 层 | 位置 | 表达什么 | 谁消费 |
|---|---|---|---|
| 结构契约 | `packages/schema/schema/*.json` | 字段、类型、必填、枚举、格式 | 第三方、只读 SDK、CI |
| TS 投影 | `packages/schema/src/types.ts` | 结构契约的 TypeScript 表达 | 本仓代码 |
| 语义契约 | `packages/schema/src/validation.ts` | 跨文件引用、跨字段语义、证据要求 | 本仓构建与 CI |

三份公开 Schema：

| 文件 | 校验对象 |
|---|---|
| `provider.schema.json` | `/v1/providers/{id}.json` |
| `catalog.schema.json` | `manifest.json` / `providers.json` / `catalog-current.json` / `search-index.json` |
| `lifecycle-event.schema.json` | `data/sources/lifecycle/*.json` |

它们随产物发布在 `/v1/schema/*.json`，**原样复制**源文件——
发布字节必须与 `packages/schema/schema/` 一致，否则第三方拿到的 Schema
和实际数据可能对不上。

## 为什么不是「用 Schema 取代 validation.ts」

JSON Schema 2020-12 表达不了：

- **跨文件交叉引用**：Route→Endpoint、RateCard→Source、event→Offering
- **状态与证据的矛盾**：`stage=retired` 却没有任何 evidence
- **生命周期推进规则**：连续缺席如何升级、何时必须人工复核
- **币种白名单**：ISO 4217 是开放集合，但本站只认一份名单

用 Schema 硬凑这些，要么表达不了，要么写出一堆自定义关键字让第三方无法使用。
**分层是刻意的，不是遗漏**：Schema 管「这份 JSON 长什么样」，
校验器管「这些字段之间说不说得通」。

## 如何防止漂移

这是本 ADR 真正要解决的问题。手写 JSON Schema 与手写 TS 类型，
两边必然会漂——而且没人能发现。

三层防线：

1. **同源校验**（`packages/schema/src/schema-parity.test.ts`）
   直接比对 TS interface 的字段集合与 Schema `properties` 的字段集合。
   TS 改字段名、删字段、加字段但 Schema 没加——全部失败。
   这条测试抓到了开发过程中我自己写错的一处（`DecimalMoney.amount`
   被我写成 `amount_decimal`）。
2. **夹具校验**（`schema.test.ts`）
   用 ajv 校验全部夹具通过公开 Schema，并配反向用例证明 Schema 有约束力
   （拒绝缺必填、拒绝未知字段、拒绝数字金额、拒绝 `RMB`）。
3. **产物契约校验**（`pipeline/src/compile/contract.test.ts`）
   构建后用发布的 Schema 校验**产物本身**，并核对 manifest 的哈希。

第 1 条是关键：夹具校验看不见「定义了但没有夹具用到」的字段，
同源校验能看见。

## 代价

- 多了一层要同步的产物：TS 类型 ↔ JSON Schema。
  靠同源校验把它变成**编译期错误**而不是运行期意外。
- `ajv` 作为 devDependency 引入（`packages/schema` 与 `pipeline`）。
  只在测试里用，不进运行时，也不进浏览器包。
- Schema 是手写的，改动成本真实存在。
  备选方案是引入代码生成（`json-schema-to-typescript` 一类），
  但那会引入另一条构建链和另一套漂移风险（生成的代码没人 review）。
  当前项目阶段手写 + 强制同源校验更合适。
