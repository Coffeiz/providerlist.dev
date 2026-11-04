# ADR 0034：槽位模态类型改为开放枚举

- 状态：已接受
- 日期：2026-10-25
- 决策人：用户
- 关联：ADR 0033（3D 生成作为标准模型类型）、ADR 0032（Model 模态与类型唯一归属模型注册表）、ADR 0010（公开 JSON Schema 与语义校验器分工）

## 背景

`SlotKind` 是 Operation 里 `input_slots[].kind` 与 `output_specs[].kind` 的取值域，表示槽位承载的**模态**。它此前是封闭枚举，只有 `text` / `image` / `video` / `audio` / `file` / `structured` 六个值。

补录腾讯 TokenHub 当前目录时出现了两种真实模态：混元 World 的三维资产输出记为 `3d`，Kinfra 向量型号的输出记为 `embedding`。两者都不属于原有六值，公开 Schema 校验直接判非法。

封闭枚举的代价是：每出现一个新模态就要同时改公开 JSON Schema、TypeScript 类型、语义校验器和文档三处；改晚一步，已发布的合法数据会在下一次构建时突然校验不过。模型主类别 `model_type` 早就因为同样的问题改成了开放枚举（ADR 0033 沿用该规则），槽位模态却还停在旧写法。

## 决策

1. `SlotKind` 改为**开放枚举**，与 `model_type` 同一套口径：
   - 公开 JSON Schema 用 `{"type": "string", "pattern": "^[a-z0-9][a-z0-9]*(?:[._-][a-z0-9]+)*$"}` 表达，不再列封闭枚举；
   - TypeScript 侧给出已知值清单 `KNOWN_SLOT_KINDS` 与开放类型 `SlotKind = KnownSlotKind | (string & {})`；
   - 语义校验器分两级：词法非法是**错误**（`schema.invalid_slot_kind`），未知模态只是**警告**（`schema.unknown_slot_kind`）。
2. 已知模态为八个：`text` / `image` / `video` / `audio` / `file` / `structured` / `3d` / `embedding`。
3. 未知模态**保留原值**，不静默归并到 `text` 或任何其他已知模态。展示层原样显示原值——槽位出现在 Operation 技术详情页，原值比归并后的「其他」更有信息量。
4. 槽位模态与模型主类别仍是两件事：`kind` 只描述槽位承载什么，不改变「模型主类别只写在 Model 注册表」这条规则（ADR 0032）。

## 备选方案

- 封闭枚举加 `3d` / `embedding` 两值：拒绝。改动更小，但下一个新模态会重演同样的问题——每加一个值就要动契约三处加文档。
- 把这两个值改成现有六值之一（如 `embedding` → `structured`、`3d` → `file`）：拒绝。会丢掉模态事实，公开目录就会声称向量输出是结构化输出、三维资产是普通文件。
- 完全不校验 `kind`：拒绝。词法约束能挡住脏数据（如带空格、大写的 ID），这层错误应该是硬错误。

## 后果

- 腾讯的三维与向量输出可以按真实模态入库，不需要改写成别的模态。
- 以后再出现新模态，只需要在 `packages/schema/src/slot-kinds.ts` 的已知值清单里补一行（可选），不必改公开 Schema 的表达方式。
- 公开 JSON Schema 的 `SlotKind` 不再列举取值，第三方校验器拿到的是形状约束而非闭集；语义上的「未知模态」提示由本仓库的语义校验器承担（ADR 0010 的分工）。
- 已知值清单集中在 `packages/schema/src/slot-kinds.ts`，与 `model-types.ts` 对称，展示层从领域包取用，不另抄一份。
