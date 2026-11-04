# Alibaba IR 差异 Review（表格版）

**复核 IR 候选**：`sha256:ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b`  
**复核时间**：`2026-10-27T03:32:52.429Z`  
**范围**：机器比较器列出的 24 条价格/条件建议已获用户确认，并仅按 IR 更新到 Alibaba 正式价格数据；不代表批准整份候选。

## 审阅摘要

本次复核使用仓库现存的 311 份 Alibaba 来源快照重建候选，并完成 640/640 固定快照、16/16 入口双基线回放。IR 候选含 435 个 Offering。下表将字段级变化翻译为价格和条件；原始 JSON Pointer 与机器比较值可在[机器报告](2026-10-27-ingestion-ir-migration-comparison.json)中查阅。

| 差异类型 | 建议数 | 审阅关注点 |
|---|---:|---|
| 语音计费项 | 2 | metric、计费单位及价格是否保留 |
| Token 条件 AST | 8 | 输入 Token 边界及对应费率 |
| 重复 Token 规则 | 4 | 相同条件和金额是否保留为单条报价 |
| 图像价格档位 | 10 | 费率金额与地域档位 |
| **合计** | **24** | **已按 IR 更新正式价格数据** |

## 价格与条件差异表

金额按候选数据中的原始十进制字符串显示。Token 单位为每百万 Token，图像单位为每张，语音遵循列出的计量单位。重复 Token 的优先级 10/20 两条建议合并为一行展示，所以表格共 22 行。

| 类型 | 模型 / 市场 | 原记录 | IR 候选记录 | 审阅结论 |
|---|---|---|---|---|
| Token 条件 | glm-5 · 中国市场 | 华北2（北京）；0 < tokens ≤ 32000；input 4, output 18 | 0 < tokens ≤ 32000: CNY input 4, output 18；32000 < tokens ≤ 198000: CNY input 6, output 22 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| Token 条件 | glm-5 · 中国市场 | 华北2（北京）；32000 < tokens ≤ 198000；input 6, output 22 | 0 < tokens ≤ 32000: CNY input 4, output 18；32000 < tokens ≤ 198000: CNY input 6, output 22 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| Token 条件 | glm-5 · 国际市场 | 华北2（北京）；0 < tokens ≤ 32000；input 0.573, output 2.580 | 0 < tokens ≤ 32000: USD input 0.573, output 2.580；32000 < tokens ≤ 166000: USD input 0.860, output 3.154 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| Token 条件 | glm-5 · 国际市场 | 华北2（北京）；32000 < tokens ≤ 166000；input 0.860, output 3.154 | 0 < tokens ≤ 32000: USD input 0.573, output 2.580；32000 < tokens ≤ 166000: USD input 0.860, output 3.154 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| 重复 Token 规则 | kimi/kimi-k2.6 | 中国市场；同条件、同金额规则 2 条（优先级 10 / 20）；input 6.5, output 27 | 华北2（北京）：CNY input 6.5, output 27 | 折叠为一条等价报价 |
| 图像价格档位 | kling/kling-v3-image-generation · 中国市场 | 0.2, 0.2 | 华北2（北京）: 0.2, 0.2 | 旧档位与 IR 分地域档位并列核对 |
| 图像价格档位 | kling/kling-v3-omni-image-generation · 中国市场 | 0.2, 0.2, 0.4 | 华北2（北京）: 0.2, 0.2, 0.4 | 旧档位与 IR 分地域档位并列核对 |
| 重复 Token 规则 | MiniMax/MiniMax-M2.5 | 中国市场；同条件、同金额规则 2 条（优先级 10 / 20）；input 2.1, output 8.4 | 华北2（北京）：CNY input 2.1, output 8.4 | 折叠为一条等价报价 |
| 语音计费项 | MiniMax/speech-2.8-hd · 中国市场 | output 3.5 / 每万字符 | 华北2（北京）：input 3.5 / 每万字符；request 9.9 / 每次请求 | 价格保留，计费项改为 input，另含请求计费 |
| 语音计费项 | qwen-audio-3.0-tts-plus · 中国市场 | input 1.4, output 0 / 每万字符 | 华北2（北京）：input 1.4 / 每万字符；新加坡：input 1.49884 / 每万字符 | 北京价格保留；国际费率按 IR 条件列出 |
| 图像价格档位 | qwen-image-3.0 · 中国市场 | 0.18, 0.18 | 华北2（北京）: 0.18, 0.18；德国（法兰克福）: 0.18, 0.18；美国（弗吉尼亚）: 0.18, 0.18；日本（东京）: 0.18, 0.18 | 旧档位与 IR 分地域档位并列核对 |
| 图像价格档位 | qwen-image-3.0-pro · 中国市场 | 0.25, 0.5 | 华北2（北京）: 0.25, 0.5；德国（法兰克福）: 0.25, 0.5；美国（弗吉尼亚）: 0.25, 0.5；日本（东京）: 0.03438, 0.068761 | 旧档位与 IR 分地域档位并列核对 |
| Token 条件 | qwen3.7-max-2026-05-17 · 中国市场 | 华北2（北京）；0 < tokens ≤ 1000000；input 12, output 36 | 0 < tokens ≤ 1000000: CNY input 12, output 36 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| Token 条件 | qwen3.7-max-2026-05-17 · 国际市场 | 新加坡；0 < tokens ≤ 1000000；input 2.5, output 7.5 | 0 < tokens ≤ 1000000: USD input 2.5, output 7.5 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| Token 条件 | qwen3.7-max-preview · 中国市场 | 华北2（北京）；0 < tokens ≤ 1000000；input 12, output 36 | 0 < tokens ≤ 1000000: CNY input 12, output 36 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| Token 条件 | qwen3.7-max-preview · 国际市场 | 新加坡；0 < tokens ≤ 1000000；input 2.5, output 7.5 | 0 < tokens ≤ 1000000: USD input 2.5, output 7.5 | 只移除旧嵌套 AST；输入区间和费率仍在 IR |
| 图像价格档位 | vidu/vidu-image-lite_reference2image · 中国市场 | 0.3125, 0.34375, 0.40625 | 华北2（北京）: 0.3125, 0.34375, 0.40625 | 旧档位与 IR 分地域档位并列核对 |
| 图像价格档位 | vidu/vidu-image-pro_reference2image · 中国市场 | 1.6875, 3.1875, 5.125 | 华北2（北京）: 1.6875, 3.1875, 5.125 | 旧档位与 IR 分地域档位并列核对 |
| 图像价格档位 | vidu/vidu-image_reference2image · 中国市场 | 0.625, 1, 1.46875 | 华北2（北京）: 0.625, 1, 1.46875 | 旧档位与 IR 分地域档位并列核对 |
| 图像价格档位 | vidu/viduq2-pro_reference2image · 中国市场 | 0.9375, 0.9375, 1.71875 | 华北2（北京）: 0.9375, 0.9375, 1.71875 | 旧档位与 IR 分地域档位并列核对 |
| 图像价格档位 | vidu/viduq3-fast_reference2image · 中国市场 | 0.46875, 0.78125, 1.09375 | 华北2（北京）: 0.46875, 0.78125, 1.09375 | 旧档位与 IR 分地域档位并列核对 |
| 图像价格档位 | z-image-turbo · 中国市场 | 0.1, 0.2 | 华北2（北京）: 0.1, 0.2；新加坡: 0.110089, 0.220177 | 旧档位与 IR 分地域档位并列核对 |

## 落地结果

已将 20 张受影响的 RateCard 按 IR 规则更新，共替换 53 条价格规则；同步更新 53 条对应证据、14 个来源快照及 94 处来源绑定。仅改动这 24 条差异覆盖的价格/条件，其他字段未从整份 IR 候选批量覆盖。

候选合并预览仍为 `needs_review`，因为未匹配的 `model_ref` 等项目尚未审阅；这不影响已批准的价格差异。`pnpm validate:data` 通过（0 错误，4 个既有 model_type 警告），`pnpm build:catalog` 完成。

## 复核边界

本次在线重采集因 `alibaba-model-detail-005` 返回 HTTP 403 中止；使用其已有固定快照离线重建。该详情来源对应 MiniMax-M3.1，与表中差异无关。候选合并预览仍为 `needs_review`；未匹配的 `model_ref` 等其他项目仍需单独审阅。本次只更新 Alibaba 正式 Provider 价格卡及其来源台账；Model 正式数据未改。

## 机器证据

- [字段级迁移比较报告](2026-10-27-ingestion-ir-migration-comparison.json)：完整 JSON Pointer、旧值 / 新值。
- [IR 候选 JSON](../../../data/candidates/alibaba/ir/reviews/ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b.json)。
- IR 候选人读版：临时候选产物，已按候选数据 7 天保留策略清理；对应哈希 `ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b`。
