# PRD-DATA-2 · 生命周期状态机与退役策略

> 状态：✅ 已实施 · 对应设计文档 v1.2 §4.8 / §4.9 / §6
> 实施范围：`pipeline/src/normalize/lifecycle.ts`

## 1. 背景

一个模型从供应商的模型列表里消失，可能有五种完全不同的原因：

1. 官方宣布停服了；
2. 官方宣布弃用，还没到停服日；
3. 上游接口故障 / 限流；
4. 我们的 API Key 权限被收窄了；
5. 抓取脚本的分页逻辑出了 bug。

只有第 1 种是「退役」。

如果按「扫不到就删」处理，一次上游抖动就会让网站上的模型大面积消失，
用户据此做的技术选型直接作废。**这是最不可接受的失败模式**——
比数据缺失严重得多。

## 2. 目标

1. 退役判定**必须由证据驱动**，不由「没扫到」驱动。
2. 单次缺席只产生 `suspected_missing`，**绝不**触发退役。
3. 官方公告**未生效**时只到 `deprecated`，**不提前** retired。
4. 来源不完整时**保留上次可信快照**并标 stale。
5. 退役是 **Offering + Service + Route（按粒度）** 级别——
   不因某 Provider 停服就删掉 canonical 模型。

## 3. 非目标

- 不做自动退役的「智能猜测」——保守优先。
- 不追求「实时反映供应状态」——`active` 只表示「截至最近一次可信证据有效」。

## 4. 判定顺序

| 顺序 | 条件 | 结果 | 可自动发布 |
|---|---|---|---|
| 1 | 官方停服公告且 `effective_at` 已过 | `retired` | 有证据时 |
| 2 | 官方预告退役且未到 `effective_at` | `deprecated` | 是 |
| 3 | 官方宣布弃用（无停服日） | `deprecated` | 是 |
| 4 | 连续 ≥2 次完整列表缺失且跨 ≥24h | `unknown` | **否** |
| 5 | 本次来源不完整 | 保持原状态 + `stale` | **否** |
| 6 | 官方宣布恢复供应 | `active` | 是 |

## 5. 验收标准

- [x] 单次缺席 → 不退役，生成 `suspected_missing`。
- [x] 连续 2 次完整列表缺失 + 跨 24h → `review_required`，**不**直接 retired。
- [x] 官方停服公告未到生效日 → `deprecated`，保留展示。
- [x] 官方停服公告已到生效日 + 有证据 → `retired`。
- [x] 官方停服公告已到生效日但**无证据** → 转人工审核。
- [x] 来源不完整 → 保留上次可信状态并标 stale。
- [x] `retired` 状态必须在来源台账中关联 Evidence（校验器强制）；公开 JSON 不输出 `evidence_refs`（按 [ADR 0029](../../adr/0029-来源证据台账与公开数据分离.md) 调整展示契约）。
- [x] `unknown` 不计入 `active_offering_count`，但可在「待核实」筛选中出现。
- [x] `deprecated` 在默认视图中**继续显示**并有清晰提示。

## 6. 影响的契约

- `Lifecycle.stage` / `announcement` / `retire_at` / `observed_at`；Evidence 与引用保存在内部来源台账。
- `availability.state` 与 lifecycle **正交**——两者可同时是未知。
- 公开过滤规则：`retired` 默认隐藏，`deprecated` 保留。

## 7. 风险

| 风险 | 缓解 |
|---|---|
| 过度保守导致退役信息滞后 | Provider 详情页设「待核实」分区；状态变化有明确时间戳 |
| 误把 stale 当 retired | 来源完整性单独判定（判定顺序第 5 条在缺席逻辑之前） |
| 公告日期解析错误 | 要求 `effective_at` 必须可解析；不可解析则视为未生效 |

## 8. 验证

```bash
pnpm --filter @providerlist/catalog test
```

关键用例：单次缺席不退役、连续缺失不直接退役、未生效公告只到 deprecated、
已生效公告 + 证据 → retired、来源不完整保留原状态。
