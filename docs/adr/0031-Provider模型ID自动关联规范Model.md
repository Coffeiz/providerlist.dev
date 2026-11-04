# ADR 0031：Provider 模型 ID 自动关联规范 Model

- 状态：已接受
- 日期：2026-10-25
- 决策人：用户
- 取代：[ADR 0030](0030-规范Model-ID归一化与供应商调用ID分离.md) 第 5 项的“相同尾段不构成关联依据”限制

## 背景

Provider 采集合并器能够得到真实 `provider_model_id`，仓库也维护全局规范 `Model.id`，但合并器此前一律写入 `model_ref: null`。完全相同的 ID 和供应商 ID 中带开发商前缀的写法（如 `provider/model-slug`）因此没有自动关联，重复规格和人工映射工作增加。

## 决策

1. Provider `provider_model_id` 与规范 `Model.id` 完全相同时，自动填写该 `model_ref`。
2. 完整 ID 不匹配时，取 Provider ID 最后一个 `/` 后的型号段，与规范 Model ID 最后一个 `/` 后的型号段精确比较。仅有一个匹配 Model 时自动填写 `model_ref`。
3. 后缀命中多个规范 Model 时不选择任意一个，保持 `model_ref: null` 并在 review 中列出歧义候选；没有命中也保持 `null`。
4. 上述 ID 规则未命中时，允许使用 Provider 官方 `display_name`、Provider ID 原文或其 `/` 后的型号段，与规范 Model `name` 做完整字符串匹配。匹配前只统一 Unicode 兼容形式、大小写及连续/首尾空白；不删除或替换标点，不做子串、词干或相似度匹配。
5. 名称命中唯一规范 Model 时自动填写 `model_ref`。名称命中多个规范 Model 时不选择任意一个，保持 `model_ref: null`，并在 PR review 中列出候选；这包括同名但开发商不同的情况。多个候选即使属于同一开发商也不能唯一确定具体 Model，仍须 review。
6. 每条自动关联必须生成字段级 Evidence，并在转换 review 中展示 Provider ID、Provider 展示名、匹配后的 `model_ref` 和命中规则；review 提醒维护者核对开发商与型号身份。未匹配/歧义也在 review 中说明。
7. `provider_model_id` 始终保留上游原始调用 ID；该关联不表示 Provider API 能力等于规范 Model 发布能力。

## 后果

- 唯一精确 ID 匹配减少重复的人工关联；带路由前缀的 ID 也可复用已维护的规范 Model。
- 型号尾段并非全球唯一身份，故后缀匹配只接受唯一命中，并必须在 review 中可见以便人工复核。
- 唯一完整名称可作为自动关联依据；重名会保留为 review，不因开发商名推断而随意选择。
