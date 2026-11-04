# IR `needs_review` 审阅清单

> 此文档汇总当前工作区已保存的最新 IR 候选中的 ReviewItem、非 complete 来源 coverage，以及与同一候选指纹匹配的投影阻塞项。它是审阅材料，不是批准或写入正式 Provider 数据的凭据。

- 生成日期：2026-10-27
- 范围：当前工作区中存在 `data/candidates/*/ir/state.json` 或 `ir-global/state.json` 的全部候选；目前覆盖 6 个 Provider、7 个候选范围。
- 汇总：70 条 ReviewItem、169 条纳入审阅的非 complete coverage 记录；另列出 76 条当前 IR 投影阻塞项，按未关联 `model_ref` 统计。
- 合并状态：2026-10-27 按用户指示，将可投影 IR 写入 Alibaba、Meta、OpenAI、Tencent TokenHub、Volcengine 中国区正式数据及来源台账。未映射字段与未完成 coverage 仍保留在 IR Review；MiniMax 与 Volcengine 国际候选没有可安全投影的领域记录，未写入正式 Provider。
- Alibaba 范围：按当前采集规范，Model Registry / 模型规格由人工录入，不属于采集器 coverage Review；候选中的 281 条 `model_catalog` 未完成 coverage 已排除。价格、API Route、能力与 Plan 仍按各自采集职责保留。
- 完整性边界：本清单覆盖已持久化的最新 IR 候选；没有 `state.json` 的采集入口没有可供汇总的当前候选，不推断其 Review 为空。重新采集后需按新 candidate hash 更新本清单。
- 审阅边界：`partial` / `not_parsed` 表示来源覆盖不足或未归一；不表示能力/价格不存在。`unsupported_mapping` 和 `unmatched` 不自动删改正式字段。

## 按 Provider 汇总

| Provider | 观察时间 | ReviewItem | 非 complete coverage | 投影阻塞项 | 候选 |
|---|---|---:|---:|---:|---|
| `alibaba` | `2026-10-27T03:23:29.214Z` | 16 | 63 | 10 | [JSON](../../../data/candidates/alibaba/ir/reviews/ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b.json) · 人读版（临时文件已按 7 天保留策略清理） · [投影预览](../../../data/candidates/alibaba/ir/conversion-preview.md) |
| `meta` | `2026-10-26T15:52:11.407Z` | 9 | 11 | 9 | [JSON](../../../data/candidates/meta/ir/reviews/b9801dd283ccbc42647a1879ee18657e7633134dea8f7380a4adb2328a00db1d.json) · 人读版（临时文件已按 7 天保留策略清理） · [投影预览](../../../data/candidates/meta/ir/conversion-preview.md) |
| `minimax` | `2026-10-26T19:48:49.782Z` | 1 | 29 | 0 | [JSON](../../../data/candidates/minimax/ir/reviews/f3db14e57b8f62c596473d61f6e070b297d448af6a6234b03894df3d332a99e1.json) · 人读版（临时文件已按 7 天保留策略清理） |
| `openai` | `2026-10-26T15:09:17.277Z` | 38 | 10 | 29 | [JSON](../../../data/candidates/openai/ir/reviews/50c803cbd75dc07f76dca110e2dca3ae28952270e5691b4a9657f7c560259888.json) · 人读版（临时文件已按 7 天保留策略清理） · [投影预览](../../../data/candidates/openai/ir/conversion-preview.md) |
| `tencent-tokenhub` | `2026-10-25T17:03:26.463Z` | 1 | 22 | 25 | [JSON](../../../data/candidates/tencent-tokenhub/ir/reviews/bfd392101a2034167cdc34bbac902fff4c11cb0567798a050c053c55152e5500.json) · 人读版（临时文件已按 7 天保留策略清理） · [投影预览](../../../data/candidates/tencent-tokenhub/ir/conversion-preview.md) |
| `volcengine` | `2026-10-26T00:43:33.005Z` | 2 | 12 | 3 | [JSON](../../../data/candidates/volcengine/ir/reviews/7085c92f27906cdecd3b7d266db8378ef984ae7d2e704a22a0e6aae0a896759f.json) · 人读版（临时文件已按 7 天保留策略清理） · [投影预览](../../../data/candidates/volcengine/ir/conversion-preview.md) |
| `volcengine-global` | `2026-10-26T00:48:49.280Z` | 3 | 22 | 0 | [JSON](../../../data/candidates/volcengine/ir-global/reviews/2ca384f272421a5a6b96e492d03fd2d8b39c3a535909897e99980e3c97cd7637.json) · 人读版（临时文件已按 7 天保留策略清理） |

---

## alibaba

- Candidate hash：`sha256:ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b`
- Observed at：`2026-10-27T03:23:29.214Z`
- Review items：16；non-complete coverage：344；匹配指纹的投影阻塞项：0
- 候选：[JSON](../../../data/candidates/alibaba/ir/reviews/ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b.json) · 人读版（临时文件已按 7 天保留策略清理）
- [当前候选的投影预览](../../../data/candidates/alibaba/ir/conversion-preview.md)

### ReviewItem

| ID | 类型 | Subject | 待核内容 | 来源与定位 |
|---|---|---|---|---|
| `api-unparsed-001` | `unsupported_mapping` | — | 官方代码示例列出 ap-southeast-1 的精确 model ID，但该 Workspace Endpoint 同时映射到多个账号市场 Service；Route 市场归属待核对。 | [alibaba-openai-chat-api](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions) `#ap-southeast-1/request` — — |
| `api-unparsed-002` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 us-east-1 Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-openai-chat-api](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions) `#us-east-1/request` — — |
| `api-unparsed-003` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 cn-beijing Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-openai-chat-api](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions) `#cn-beijing/request` — — |
| `api-unparsed-004` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 cn-hongkong Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-openai-chat-api](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions) `#cn-hongkong/request` — — |
| `api-unparsed-005` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 eu-central-1 Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-openai-chat-api](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions) `#eu-central-1/request` — — |
| `api-unparsed-006` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 ap-northeast-1 Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-openai-chat-api](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions) `#ap-northeast-1/request` — — |
| `api-unparsed-007` | `unsupported_mapping` | — | 官方代码示例列出 ap-southeast-1 的精确 model ID，但该 Workspace Endpoint 同时映射到多个账号市场 Service；Route 市场归属待核对。 | [alibaba-anthropic-messages-api](https://www.alibabacloud.com/help/en/model-studio/anthropic-api-messages) `#ap-southeast-1/request` — — |
| `api-unparsed-008` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 eu-central-1 Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-anthropic-messages-api](https://www.alibabacloud.com/help/en/model-studio/anthropic-api-messages) `#eu-central-1/request` — — |
| `api-unparsed-009` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 us-east-1 Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-anthropic-messages-api](https://www.alibabacloud.com/help/en/model-studio/anthropic-api-messages) `#us-east-1/request` — — |
| `api-unparsed-010` | `unsupported_mapping` | — | **待关联 Model ID：无（该区域的官方请求示例没有给出可确认的具体 Model ID）。** 文档只证明存在 ap-northeast-1 Route；没有某个特定型号被遗漏或等待查找，因此暂不把 Route 关联到模型。 | [alibaba-anthropic-messages-api](https://www.alibabacloud.com/help/en/model-studio/anthropic-api-messages) `#ap-northeast-1/request` — — |
| `pricing-partial-cn` | `incomplete_coverage` | — | 价格来源有 15 条 Token 价格行未迁入领域 IR。这是采集/转换覆盖缺口，不表示价格缺少区域信息，也不要求补 Route；当前汇总没有列出具体模型、区域和未迁入原因，不能据此要求人工判断价格。 | [alibaba-model-pricing](https://docs.bailian.console.aliyun.com/zh/model-studio/model-pricing.md) `#pricing-tables` — 来源按模型和区域列价；待补行级转换原因。 |
| `pricing-partial-global` | `incomplete_coverage` | — | 价格来源有 22 条 Token 价格行未迁入领域 IR。这是采集/转换覆盖缺口，不表示价格缺少区域信息，也不要求补 Route；当前汇总没有列出具体模型、区域和未迁入原因，不能据此要求人工判断价格。 | [alibaba-global-model-pricing](https://docs.modelstudio.console.alibabacloud.com/zh/model-studio/model-pricing.md) `#pricing-tables` — 来源按模型、部署区域、范围和输入档位列价；待补行级转换原因。 |
| `plan-partial-alibaba-global-token-plan` | `incomplete_coverage` | — | 套餐价格与 Credits 已按明确档位写入 PlanFact；购买资格、促销期限、额度使用限制及团队席位变更规则仍需核对。 | [alibaba-global-token-plan](https://www.alibabacloud.com/help/en/model-studio/token-plan-overview) `#plan-pricing` — 该来源的主要套餐档位已解析，仍有订购与额度规则未结构化。 |
| `plan-partial-alibaba-token-plan-personal` | `incomplete_coverage` | — | 套餐价格与 Credits 已按明确档位写入 PlanFact；购买资格、促销期限、额度使用限制及团队席位变更规则仍需核对。 | [alibaba-token-plan-personal](https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-personal-overview.md) `#plan-pricing` — 该来源的主要套餐档位已解析，仍有订购与额度规则未结构化。 |
| `plan-partial-alibaba-token-plan` | `incomplete_coverage` | — | 套餐价格与 Credits 已按明确档位写入 PlanFact；购买资格、促销期限、额度使用限制及团队席位变更规则仍需核对。 | [alibaba-token-plan](https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-overview.md) `#plan-pricing` — 该来源的主要套餐档位已解析，仍有订购与额度规则未结构化。 |
| `plan-partial-alibaba-token-plan-team` | `incomplete_coverage` | — | 套餐价格与 Credits 已按明确档位写入 PlanFact；购买资格、促销期限、额度使用限制及团队席位变更规则仍需核对。 | [alibaba-token-plan-team](https://help.aliyun.com/zh/model-studio/token-plan-team-overview) `#plan-pricing` — 该来源的主要套餐档位已解析，仍有订购与额度规则未结构化。 |

### 未完成来源覆盖

| 来源 | 数据域 | 市场 | 状态 | 记录数 / 单位 | 说明 |
|---|---|---|---|---|---|
| [alibaba-openai-chat-api](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions) | `api` | `—` | `partial` | 8 `recognized API source records` | 仅表示 API Endpoint / Route 与可明确关联模型解析覆盖，不代表账号权限或全模型 API 可用性。 |
| [alibaba-anthropic-messages-api](https://www.alibabacloud.com/help/en/model-studio/anthropic-api-messages) | `api` | `—` | `partial` | 6 `recognized API source records` | 仅表示 API Endpoint / Route 与可明确关联模型解析覆盖，不代表账号权限或全模型 API 可用性。 |
| [alibaba-model-detail-031](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-audio-3-0-tts-plus.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-042](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-image-3-0.md) | `pricing` | `cn` | `partial` | 8 `recognized non-Token price rows` | 已映射 8 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-043](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-image-3-0-pro.md) | `pricing` | `cn` | `partial` | 8 `recognized non-Token price rows` | 已映射 8 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-103](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-7-image-pro.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-109](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-image-2-1-pro.md) | `pricing` | `cn` | `partial` | 5 `recognized non-Token price rows` | 已映射 5 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-110](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-image-2-1-turbo.md) | `pricing` | `cn` | `partial` | 5 `recognized non-Token price rows` | 已映射 5 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-111](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-image-2-0-pro.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-112](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-image-2-0.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-113](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-mt-image.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-114](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-mt-image-2-0.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-115](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-7-image.md) | `pricing` | `cn` | `partial` | 3 `recognized non-Token price rows` | 已映射 3 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-116](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-6-image.md) | `pricing` | `cn` | `partial` | 4 `recognized non-Token price rows` | 已映射 4 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-117](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-6-t2i.md) | `pricing` | `cn` | `partial` | 4 `recognized non-Token price rows` | 已映射 4 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-118](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-5-i2i.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-119](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-5-t2i.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-120](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-2-t2i-flash.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-121](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-2-t2i-plus.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-122](https://docs.bailian.console.aliyun.com/zh/model-studio/wanx2-1-imageedit.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-123](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-1-t2i-plus.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-124](https://docs.bailian.console.aliyun.com/zh/model-studio/wanx2-1-t2i-plus.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-125](https://docs.bailian.console.aliyun.com/zh/model-studio/wan2-1-t2i-turbo.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-126](https://docs.bailian.console.aliyun.com/zh/model-studio/wanx2-1-t2i-turbo.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-127](https://docs.bailian.console.aliyun.com/zh/model-studio/wanx2-0-t2i-turbo.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-129](https://docs.bailian.console.aliyun.com/zh/model-studio/wanx-sketch-to-image-lite.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-130](https://docs.bailian.console.aliyun.com/zh/model-studio/wanx-style-repaint-v1.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-131](https://docs.bailian.console.aliyun.com/zh/model-studio/wanx-v1.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-134](https://docs.bailian.console.aliyun.com/zh/model-studio/z-image-turbo.md) | `pricing` | `cn` | `partial` | 4 `recognized non-Token price rows` | 已映射 4 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-140](https://docs.bailian.console.aliyun.com/zh/model-studio/kling-v3-image-generation.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-141](https://docs.bailian.console.aliyun.com/zh/model-studio/kling-v3-omni-image-generation.md) | `pricing` | `cn` | `partial` | 3 `recognized non-Token price rows` | 已映射 3 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-142](https://docs.bailian.console.aliyun.com/zh/model-studio/vidu-image-reference2image.md) | `pricing` | `cn` | `partial` | 3 `recognized non-Token price rows` | 已映射 3 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-143](https://docs.bailian.console.aliyun.com/zh/model-studio/vidu-image-pro-reference2image.md) | `pricing` | `cn` | `partial` | 3 `recognized non-Token price rows` | 已映射 3 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-144](https://docs.bailian.console.aliyun.com/zh/model-studio/vidu-image-lite-reference2image.md) | `pricing` | `cn` | `partial` | 3 `recognized non-Token price rows` | 已映射 3 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-145](https://docs.bailian.console.aliyun.com/zh/model-studio/viduq2-fast-reference2image.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-146](https://docs.bailian.console.aliyun.com/zh/model-studio/viduq2-pro-reference2image.md) | `pricing` | `cn` | `partial` | 3 `recognized non-Token price rows` | 已映射 3 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-147](https://docs.bailian.console.aliyun.com/zh/model-studio/viduq3-fast-reference2image.md) | `pricing` | `cn` | `partial` | 3 `recognized non-Token price rows` | 已映射 3 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-234](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-audio-3-1-tts-plus.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-235](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-audio-3-0-tts-flash.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-236](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen3-tts-flash.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-237](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen3-tts-flash-realtime.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-238](https://docs.bailian.console.aliyun.com/zh/model-studio/qwen-voice-enrollment.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-239](https://docs.bailian.console.aliyun.com/zh/model-studio/cosyvoice-v3-5-flash.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-240](https://docs.bailian.console.aliyun.com/zh/model-studio/cosyvoice-v3-5-plus.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-241](https://docs.bailian.console.aliyun.com/zh/model-studio/cosyvoice-v3-flash.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-242](https://docs.bailian.console.aliyun.com/zh/model-studio/cosyvoice-v3-plus.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-243](https://docs.bailian.console.aliyun.com/zh/model-studio/cosyvoice-v2.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-244](https://docs.bailian.console.aliyun.com/zh/model-studio/sambert.md) | `pricing` | `cn` | `partial` | 1 `recognized non-Token price rows` | 已映射 1 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-246](https://docs.bailian.console.aliyun.com/zh/model-studio/speech-2-8-hd.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-247](https://docs.bailian.console.aliyun.com/zh/model-studio/speech-2-8-turbo.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-248](https://docs.bailian.console.aliyun.com/zh/model-studio/speech-02-hd.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-model-detail-249](https://docs.bailian.console.aliyun.com/zh/model-studio/speech-02-turbo.md) | `pricing` | `cn` | `partial` | 2 `recognized non-Token price rows` | 已映射 2 条有明确币种、计费项、单位和区域的逐模型非 Token 价格；未识别价格行仍待核对。 |
| [alibaba-web-search](https://docs.bailian.console.aliyun.com/zh/model-studio/web-search.md) | `capability` | `cn` | `partial` | 9 `model IDs with built-in tool support` | 仅将官方文档明确列出的 9 个模型映射为模型 API 内置工具；未创建独立 Service Capability。 |
| [alibaba-global-web-search](https://www.alibabacloud.com/help/en/model-studio/web-search) | `capability` | `global` | `partial` | 3 `model IDs with built-in tool support` | 仅将官方文档明确列出的 3 个模型映射为模型 API 内置工具；未创建独立 Service Capability。 |
| [alibaba-web-extractor](https://docs.bailian.console.aliyun.com/zh/model-studio/web-extractor.md) | `capability` | `cn` | `partial` | 6 `model IDs with built-in tool support` | 仅将官方文档明确列出的 6 个模型映射为模型 API 内置工具；未创建独立 Service Capability。 |
| [alibaba-model-pricing](https://docs.bailian.console.aliyun.com/zh/model-studio/model-pricing.md) | `pricing` | `cn` | `partial` | 576 `recognized Token price rows` | 仅映射与同市场 API 示例模型精确匹配的结构化 Token 价格；其它模型、非 Token 价格及促销行仍待核对（本次映射 576 条）。 |
| [alibaba-global-model-pricing](https://docs.modelstudio.console.alibabacloud.com/zh/model-studio/model-pricing.md) | `pricing` | `global` | `partial` | 522 `recognized Token price rows` | 仅映射与同市场 API 示例模型精确匹配的结构化 Token 价格；其它模型、非 Token 价格及促销行仍待核对（本次映射 522 条）。 |
| [alibaba-coding-plan](https://docs.bailian.console.aliyun.com/zh/model-studio/coding-plan.md) | `plan` | `cn` | `partial` | 1 `PlanFact records` | 按官方档位映射可辨认的月费、促销价和 Credits；购买资格、促销有效期、额度适用限制及席位变更规则仍留待 Review。 |
| [alibaba-global-coding-plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan) | `plan` | `global` | `partial` | 1 `PlanFact records` | 按官方档位映射可辨认的月费、促销价和 Credits；购买资格、促销有效期、额度适用限制及席位变更规则仍留待 Review。 |
| [alibaba-token-plan-personal](https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-personal-overview.md) | `plan` | `cn` | `partial` | 4 `PlanFact records` | 按官方档位映射可辨认的月费、促销价和 Credits；购买资格、促销有效期、额度适用限制及席位变更规则仍留待 Review。 |
| [alibaba-token-plan](https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-overview.md) | `plan` | `cn` | `partial` | 5 `PlanFact records` | 按官方档位映射可辨认的月费、促销价和 Credits；购买资格、促销有效期、额度适用限制及席位变更规则仍留待 Review。 |
| [alibaba-token-plan-team](https://help.aliyun.com/zh/model-studio/token-plan-team-overview) | `plan` | `cn` | `partial` | 1 `PlanFact records` | 按官方档位映射可辨认的月费、促销价和 Credits；购买资格、促销有效期、额度适用限制及席位变更规则仍留待 Review。 |
| [alibaba-global-token-plan](https://www.alibabacloud.com/help/en/model-studio/token-plan-overview) | `plan` | `global` | `partial` | 9 `PlanFact records` | 按官方档位映射可辨认的月费、促销价和 Credits；购买资格、促销有效期、额度适用限制及席位变更规则仍留待 Review。 |

### 阻止自动写入的投影项

当前同指纹投影预览没有列出阻塞项。

---

## meta

- Candidate hash：`sha256:b9801dd283ccbc42647a1879ee18657e7633134dea8f7380a4adb2328a00db1d`
- Observed at：`2026-10-26T15:52:11.407Z`
- Review items：9；non-complete coverage：11；当前投影阻塞项：9 个未关联 `model_ref`
- 候选：[JSON](../../../data/candidates/meta/ir/reviews/b9801dd283ccbc42647a1879ee18657e7633134dea8f7380a4adb2328a00db1d.json) · 人读版（临时文件已按 7 天保留策略清理） · [投影预览](../../../data/candidates/meta/ir/conversion-preview.md)

### ReviewItem

| ID | 类型 | Subject | 待核内容 | 来源与定位 |
|---|---|---|---|---|
| `coverage-gap-01` | `incomplete_coverage` | — | 公开模型目录完整性：保留目录页面与模型 ID 线索；未将页面提及自动判定为账号可调用目录。 | [meta-models](https://dev.meta.ai/docs/models) `—` — not_structured |
| `coverage-gap-02` | `incomplete_coverage` | — | 账号可用模型清单：官方接口说明表明清单按凭证/账号返回；本采集器不使用凭证调用。 | [meta-models](https://dev.meta.ai/docs/models) `—` — account_scoped |
| `coverage-gap-04` | `incomplete_coverage` | — | Provider/Service 独立能力：未登记 Provider/Service 独立能力来源。 | [meta-models](https://dev.meta.ai/docs/models) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-pricing](https://dev.meta.ai/docs/pricing-rate-limits) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-subscriptions](https://dev.meta.ai/docs/muse-code/subscriptions) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-models-list](https://dev.meta.ai/docs/api-reference/models/list-models) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-api-reference](https://dev.meta.ai/docs/api-reference) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-protocols](https://dev.meta.ai/docs/protocols) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-image-create-api](https://dev.meta.ai/docs/api-reference/images/create-image) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-image-edit-api](https://dev.meta.ai/docs/api-reference/images/edit-image) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-image-schemas](https://dev.meta.ai/docs/api-reference/images/schemas) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-voice-transcribe-api](https://dev.meta.ai/docs/api-reference/voice/transcribe) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。<br>[meta-voice-realtime-api](https://dev.meta.ai/docs/api-reference/voice/realtime) `—` — not_in_sources；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。 |
| `coverage-gap-05` | `incomplete_coverage` | — | 逐模型价格与计量条件：价格来源的表格和原始金额线索已保留；币种、计量单位、阈值、折扣及模型适用范围尚未映射成 PriceRule。 | [meta-pricing](https://dev.meta.ai/docs/pricing-rate-limits) `—` — not_structured<br>[meta-subscriptions](https://dev.meta.ai/docs/muse-code/subscriptions) `—` — not_structured |
| `coverage-gap-06` | `incomplete_coverage` | — | 逐模型上下文与最大输出：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 | [meta-models](https://dev.meta.ai/docs/models) `—` — not_structured |
| `coverage-gap-07` | `incomplete_coverage` | — | 逐模型输入/输出模态与限制：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 | [meta-models](https://dev.meta.ai/docs/models) `—` — not_structured |
| `coverage-gap-08` | `incomplete_coverage` | — | 逐模型发布日期与生命周期：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 | [meta-models](https://dev.meta.ai/docs/models) `—` — not_structured |
| `coverage-gap-09` | `incomplete_coverage` | — | 计划价格与资格条件：计划来源虽已登记，具体价格、周期、市场/账号资格及模型权益仍需按来源逐项核验；候选不推断其覆盖范围。 | [meta-pricing](https://dev.meta.ai/docs/pricing-rate-limits) `—` — not_structured<br>[meta-subscriptions](https://dev.meta.ai/docs/muse-code/subscriptions) `—` — not_structured |
| `meta-api-model-route-mapping-incomplete` | `incomplete_coverage` | — | 已映射通用文本、Muse Image 图片生成/编辑及 Muse Voice Transcribe 文件/实时 Route；SAM 视频/图像分割、文件与状态 API、Muse Image 的 Responses 工具模式及仍未收录的请求/响应约束继续 Review。 | [meta-api-reference](https://dev.meta.ai/docs/api-reference) `Base URL / Models` — API Reference 描述通用 API Host 与需凭证访问的 models.list。<br>[meta-protocols](https://dev.meta.ai/docs/protocols) `Format / Endpoint` — 官方协议页列出通用请求协议，但没有证明它们对每个当前模型均可调用。 |

### 未完成来源覆盖

| 来源 | 数据域 | 市场 | 状态 | 记录数 / 单位 | 说明 |
|---|---|---|---|---|---|
| [meta-models](https://dev.meta.ai/docs/models) | `model_catalog` | `global` | `partial` | 9 `current Offering records` | 已将公开目录中明确标记可用于 Model API 的型号和单独列出的 Model ID 记录为当前供应；账号级 models.list 目录不在本次匿名采集范围内。 |
| [meta-pricing](https://dev.meta.ai/docs/pricing-rate-limits) | `pricing` | `global` | `partial` | 10 `Offering PriceFact records` | 已映射公开页面可按章节唯一关联到当前 Model API 型号的价格；Muse Code 订阅计划和未解析费率仍未投影。 |
| [meta-subscriptions](https://dev.meta.ai/docs/muse-code/subscriptions) | `plan` | `global` | `not_parsed` | 0 `PlanFact records` | 已收录 Muse Code 订阅说明，但未发现可核实的公开固定价格；不从权益描述推导 PlanFact。 |
| [meta-models-list](https://dev.meta.ai/docs/api-reference/models/list-models) | `api` | `global` | `not_parsed` | 0 `account-scoped model catalog records` | models.list 只返回认证账号可见型号；本采集不使用 API Key，因此不把匿名文档观察当作完整账号目录。 |
| [meta-api-reference](https://dev.meta.ai/docs/api-reference) | `api` | `global` | `partial` | 24 `Route records` | 已映射官方 Base URL、通用文本协议、图片生成/编辑端点及语音文件/实时端点；SAM 分割、文件/状态 API、Responses 图像工具模式和通用请求 Schema 仍待核对。 |
| [meta-protocols](https://dev.meta.ai/docs/protocols) | `api` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [meta-image-create-api](https://dev.meta.ai/docs/api-reference/images/create-image) | `api` | `global` | `partial` | 1 `Route records` | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |
| [meta-image-edit-api](https://dev.meta.ai/docs/api-reference/images/edit-image) | `api` | `global` | `partial` | 1 `Route records` | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |
| [meta-image-schemas](https://dev.meta.ai/docs/api-reference/images/schemas) | `api` | `global` | `partial` | 1 `image schema groups` | 已采纳来源说明的图片请求字段、范围与响应形式；官方 Schema 更新仍需持续复核。 |
| [meta-voice-transcribe-api](https://dev.meta.ai/docs/api-reference/voice/transcribe) | `api` | `global` | `partial` | 1 `Route records` | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |
| [meta-voice-realtime-api](https://dev.meta.ai/docs/api-reference/voice/realtime) | `api` | `global` | `partial` | 1 `Route records` | 已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。 |

---

## minimax

- Candidate hash：`sha256:f3db14e57b8f62c596473d61f6e070b297d448af6a6234b03894df3d332a99e1`
- Observed at：`2026-10-26T19:48:49.782Z`
- Review items：1；non-complete coverage：29；匹配指纹的投影阻塞项：0
- 候选：[JSON](../../../data/candidates/minimax/ir/reviews/f3db14e57b8f62c596473d61f6e070b297d448af6a6234b03894df3d332a99e1.json) · 人读版（临时文件已按 7 天保留策略清理）

### ReviewItem

| ID | 类型 | Subject | 待核内容 | 来源与定位 |
|---|---|---|---|---|
| `minimax-observations-await-complete-domain-mapping` | `unsupported_mapping` | — | 目录状态、Token 价格、提示缓存、视频/语音 API、协议参数和计划权益仍需按市场映射到 IR 领域字段；当前统一候选只保留来源观察。 | [minimax-cn-model-catalog](https://platform.minimax.cn/docs/faq/models.md) `—` — market=cn<br>[minimax-cn-pricing](https://platform.minimax.cn/docs/pricing/overview.md) `—` — market=cn<br>[minimax-cn-video-api](https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md) `—` — market=cn<br>[minimax-cn-video-guide](https://platform.minimax.cn/docs/guides/video-generation.md) `—` — market=cn<br>[minimax-cn-asr-api](https://platform.minimax.cn/docs/api-reference/speech-to-text.md) `—` — market=cn<br>[minimax-cn-audio-guide](https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md) `—` — market=cn<br>[minimax-cn-image-guide](https://platform.minimax.cn/docs/guides/image-generation.md) `—` — market=cn<br>[minimax-cn-music-guide](https://platform.minimax.cn/docs/guides/music-generation.md) `—` — market=cn<br>[minimax-cn-model-overview](https://platform.minimax.cn/docs/guides/models-intro.md) `—` — market=cn<br>[minimax-cn-anthropic-api](https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md) `—` — market=cn<br>[minimax-cn-function-call-api](https://platform.minimax.cn/docs/guides/text-m3-function-call.md) `—` — market=cn<br>[minimax-cn-responses-api](https://platform.minimax.cn/docs/api-reference/responses-create.md) `—` — market=cn<br>[minimax-cn-file-upload-api](https://platform.minimax.cn/docs/api-reference/file-management-upload.md) `—` — market=cn<br>[minimax-cn-mcp-guide](https://platform.minimax.cn/docs/m-plan/mcp-guide.md) `—` — market=cn<br>[minimax-cn-m-plan-page](https://www.minimax.cn/m-plan) `—` — market=cn<br>[minimax-cn-prompt-caching](https://platform.minimax.cn/docs/api-reference/text-prompt-caching.md) `—` — market=cn<br>[minimax-global-model-catalog](https://platform.minimax.io/docs/faq/models.md) `—` — market=global<br>[minimax-global-video-guide](https://platform.minimax.io/docs/guides/video-generation.md) `—` — market=global<br>[minimax-global-audio-guide](https://platform.minimax.io/docs/guides/speech-t2a-websocket.md) `—` — market=global<br>[minimax-global-image-guide](https://platform.minimax.io/docs/guides/image-generation.md) `—` — market=global<br>[minimax-global-music-guide](https://platform.minimax.io/docs/guides/music-generation.md) `—` — market=global<br>[minimax-global-model-overview](https://platform.minimax.io/docs/guides/models-intro.md) `—` — market=global<br>[minimax-global-pricing](https://platform.minimax.io/docs/pricing/overview.md) `—` — market=global<br>[minimax-global-file-upload-api](https://platform.minimax.io/docs/api-reference/file-management-upload.md) `—` — market=global<br>[minimax-global-mcp-guide](https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md) `—` — market=global<br>[minimax-global-prompt-caching](https://platform.minimax.io/docs/api-reference/text-prompt-caching.md) `—` — market=global<br>[minimax-global-anthropic-api](https://platform.minimax.io/docs/api-reference/text-anthropic-api.md) `—` — market=global<br>[minimax-global-function-call-api](https://platform.minimax.io/docs/guides/text-m3-function-call.md) `—` — market=global<br>[minimax-global-m-plan-page](https://www.minimax.io/m-plan) `—` — market=global |

### 未完成来源覆盖

| 来源 | 数据域 | 市场 | 状态 | 记录数 / 单位 | 说明 |
|---|---|---|---|---|---|
| [minimax-cn-model-catalog](https://platform.minimax.cn/docs/faq/models.md) | `model_catalog` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-pricing](https://platform.minimax.cn/docs/pricing/overview.md) | `pricing` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-video-api](https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-video-guide](https://platform.minimax.cn/docs/guides/video-generation.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-asr-api](https://platform.minimax.cn/docs/api-reference/speech-to-text.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-audio-guide](https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-image-guide](https://platform.minimax.cn/docs/guides/image-generation.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-music-guide](https://platform.minimax.cn/docs/guides/music-generation.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-model-overview](https://platform.minimax.cn/docs/guides/models-intro.md) | `model_catalog` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [minimax-cn-anthropic-api](https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-function-call-api](https://platform.minimax.cn/docs/guides/text-m3-function-call.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-responses-api](https://platform.minimax.cn/docs/api-reference/responses-create.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-file-upload-api](https://platform.minimax.cn/docs/api-reference/file-management-upload.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-mcp-guide](https://platform.minimax.cn/docs/m-plan/mcp-guide.md) | `capability` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-m-plan-page](https://www.minimax.cn/m-plan) | `plan` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-cn-prompt-caching](https://platform.minimax.cn/docs/api-reference/text-prompt-caching.md) | `api` | `cn` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-model-catalog](https://platform.minimax.io/docs/faq/models.md) | `model_catalog` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-video-guide](https://platform.minimax.io/docs/guides/video-generation.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-audio-guide](https://platform.minimax.io/docs/guides/speech-t2a-websocket.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-image-guide](https://platform.minimax.io/docs/guides/image-generation.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-music-guide](https://platform.minimax.io/docs/guides/music-generation.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-model-overview](https://platform.minimax.io/docs/guides/models-intro.md) | `model_catalog` | `global` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [minimax-global-pricing](https://platform.minimax.io/docs/pricing/overview.md) | `pricing` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-file-upload-api](https://platform.minimax.io/docs/api-reference/file-management-upload.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-mcp-guide](https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md) | `capability` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-prompt-caching](https://platform.minimax.io/docs/api-reference/text-prompt-caching.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-anthropic-api](https://platform.minimax.io/docs/api-reference/text-anthropic-api.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-function-call-api](https://platform.minimax.io/docs/guides/text-m3-function-call.md) | `api` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| [minimax-global-m-plan-page](https://www.minimax.io/m-plan) | `plan` | `global` | `partial` | — | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |

---

## openai

- Candidate hash：`sha256:50c803cbd75dc07f76dca110e2dca3ae28952270e5691b4a9657f7c560259888`
- Observed at：`2026-10-26T15:09:17.277Z`
- Review items：38；non-complete coverage：10；匹配指纹的投影阻塞项：0
- 候选：[JSON](../../../data/candidates/openai/ir/reviews/50c803cbd75dc07f76dca110e2dca3ae28952270e5691b4a9657f7c560259888.json) · 人读版（临时文件已按 7 天保留策略清理）
- [当前候选的投影预览](../../../data/candidates/openai/ir/conversion-preview.md)

### ReviewItem

| ID | 类型 | Subject | 待核内容 | 来源与定位 |
|---|---|---|---|---|
| `coverage-gap-02` | `incomplete_coverage` | — | 账号可用模型清单：官方接口说明表明清单按凭证/账号返回；本采集器不使用凭证调用。 | [openai-models](https://developers.openai.com/api/docs/models.md) `—` — account_scoped<br>[openai-models-all](https://developers.openai.com/api/docs/models/all) `—` — account_scoped<br>[openai-deprecations](https://developers.openai.com/api/docs/deprecations.md) `—` — account_scoped |
| `coverage-gap-03` | `incomplete_coverage` | — | API Host、Route 与 Method：API 文档快照与通用端点线索已保留；尚未规范映射到 Provider/Service/Route，也不从通用协议推断逐模型支持。 | [openai-models-list-api](https://developers.openai.com/api/reference/resources/models/methods/list) `—` — not_structured<br>[openai-responses-api](https://developers.openai.com/api/docs/guides/text) `—` — not_structured<br>[openai-gpt-6-astra](https://developers.openai.com/api/docs/models/gpt-6-astra.md) `—` — not_structured |
| `coverage-gap-04` | `incomplete_coverage` | — | Provider/Service 独立能力：能力文档片段已保留；尚未映射到独立 Service 或明确关联的 Offering。 | [openai-web-search](https://developers.openai.com/api/docs/guides/tools-web-search.md?api-mode=responses) `—` — not_structured<br>[openai-file-search](https://developers.openai.com/api/docs/guides/tools-file-search.md) `—` — not_structured<br>[openai-audio-api](https://developers.openai.com/api/docs/guides/audio) `—` — not_structured |
| `coverage-gap-05` | `incomplete_coverage` | — | 逐模型价格与计量条件：价格来源的表格和原始金额线索已保留；币种、计量单位、阈值、折扣及模型适用范围尚未映射成 PriceRule。 | [openai-pricing](https://developers.openai.com/api/docs/data/pricing.md) `—` — not_structured<br>[openai-chatgpt-pricing](https://learn.chatgpt.com/docs/data/pricing.md?site_locale=en) `—` — not_structured |
| `coverage-gap-06` | `incomplete_coverage` | — | 逐模型上下文与最大输出：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 | [openai-models](https://developers.openai.com/api/docs/models.md) `—` — not_structured<br>[openai-models-all](https://developers.openai.com/api/docs/models/all) `—` — not_structured<br>[openai-deprecations](https://developers.openai.com/api/docs/deprecations.md) `—` — not_structured |
| `coverage-gap-07` | `incomplete_coverage` | — | 逐模型输入/输出模态与限制：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 | [openai-models](https://developers.openai.com/api/docs/models.md) `—` — not_structured<br>[openai-models-all](https://developers.openai.com/api/docs/models/all) `—` — not_structured<br>[openai-deprecations](https://developers.openai.com/api/docs/deprecations.md) `—` — not_structured |
| `coverage-gap-08` | `incomplete_coverage` | — | 逐模型发布日期与生命周期：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 | [openai-models](https://developers.openai.com/api/docs/models.md) `—` — not_structured<br>[openai-models-all](https://developers.openai.com/api/docs/models/all) `—` — not_structured<br>[openai-deprecations](https://developers.openai.com/api/docs/deprecations.md) `—` — not_structured |
| `coverage-gap-09` | `incomplete_coverage` | — | 计划价格与资格条件：计划来源虽已登记，具体价格、周期、市场/账号资格及模型权益仍需按来源逐项核验；候选不推断其覆盖范围。 | [openai-pricing](https://developers.openai.com/api/docs/data/pricing.md) `—` — not_structured<br>[openai-chatgpt-pricing](https://learn.chatgpt.com/docs/data/pricing.md?site_locale=en) `—` — not_structured |
| `openai-chatgpt-plan-scope-limited` | `incomplete_coverage` | — | Learn 定价页说明的是 ChatGPT 与 Codex 方案权益，不承诺覆盖 ChatGPT 全部订阅目录；未出现在此页的已有套餐应保留并人工核对。 | [openai-chatgpt-pricing](https://learn.chatgpt.com/docs/data/pricing.md?site_locale=en) `#pricing-options` — 页面明确标注 Codex pricing plans，并将 ChatGPT 功能描述为方案权益的一部分。 |
| `openai-deprecated-gpt-4o-transcribe` | `unsupported_mapping` | global/gpt-4o-transcribe | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4o-transcribe` — Deprecated |
| `openai-deprecated-gpt-4o-mini-transcribe` | `unsupported_mapping` | global/gpt-4o-mini-transcribe | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4o-mini-transcribe` — Deprecated |
| `openai-deprecated-gpt-4o-transcribe-diarize` | `unsupported_mapping` | global/gpt-4o-transcribe-diarize | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4o-transcribe-diarize` — Deprecated |
| `openai-deprecated-whisper-1` | `unsupported_mapping` | global/whisper-1 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#whisper-1` — Deprecated |
| `openai-deprecated-gpt-4o-mini-tts` | `unsupported_mapping` | global/gpt-4o-mini-tts | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4o-mini-tts` — Deprecated |
| `openai-deprecated-gpt-5` | `unsupported_mapping` | global/gpt-5 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-5` — Deprecated |
| `openai-deprecated-gpt-5-mini` | `unsupported_mapping` | global/gpt-5-mini | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-5-mini` — Deprecated |
| `openai-deprecated-gpt-5-nano` | `unsupported_mapping` | global/gpt-5-nano | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-5-nano` — Deprecated |
| `openai-deprecated-gpt-5-pro` | `unsupported_mapping` | global/gpt-5-pro | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-5-pro` — Deprecated |
| `openai-deprecated-o3-pro` | `unsupported_mapping` | global/o3-pro | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#o3-pro` — Deprecated |
| `openai-deprecated-o3` | `unsupported_mapping` | global/o3 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#o3` — Deprecated |
| `openai-deprecated-gpt-daybreak-red-latest` | `unsupported_mapping` | global/gpt-daybreak-red-latest | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-daybreak-red-latest` — Deprecated |
| `openai-deprecated-gpt-daybreak-blue-latest` | `unsupported_mapping` | global/gpt-daybreak-blue-latest | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-daybreak-blue-latest` — Deprecated |
| `openai-deprecated-gpt-5.4-nano` | `unsupported_mapping` | global/gpt-5.4-nano | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-5.4-nano` — Deprecated |
| `openai-deprecated-gpt-5.3-codex` | `unsupported_mapping` | global/gpt-5.3-codex | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-5.3-codex` — Deprecated |
| `openai-deprecated-gpt-5.1` | `unsupported_mapping` | global/gpt-5.1 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-5.1` — Deprecated |
| `openai-deprecated-gpt-realtime` | `unsupported_mapping` | global/gpt-realtime | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-realtime` — Deprecated |
| `openai-deprecated-gpt-audio` | `unsupported_mapping` | global/gpt-audio | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-audio` — Deprecated |
| `openai-deprecated-gpt-4.1` | `unsupported_mapping` | global/gpt-4.1 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4.1` — Deprecated |
| `openai-deprecated-gpt-4.1-mini` | `unsupported_mapping` | global/gpt-4.1-mini | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4.1-mini` — Deprecated |
| `openai-deprecated-gpt-4o-mini` | `unsupported_mapping` | global/gpt-4o-mini | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4o-mini` — Deprecated |
| `openai-deprecated-tts-1` | `unsupported_mapping` | global/tts-1 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#tts-1` — Deprecated |
| `openai-deprecated-tts-1-hd` | `unsupported_mapping` | global/tts-1-hd | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#tts-1-hd` — Deprecated |
| `openai-deprecated-gpt-image-1.5` | `unsupported_mapping` | global/gpt-image-1.5 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-image-1.5` — Deprecated |
| `openai-deprecated-chatgpt-image-latest` | `unsupported_mapping` | global/chatgpt-image-latest | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#chatgpt-image-latest` — Deprecated |
| `openai-deprecated-gpt-image-1-mini` | `unsupported_mapping` | global/gpt-image-1-mini | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-image-1-mini` — Deprecated |
| `openai-deprecated-gpt-realtime-mini` | `unsupported_mapping` | global/gpt-realtime-mini | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-realtime-mini` — Deprecated |
| `openai-deprecated-gpt-audio-mini` | `unsupported_mapping` | global/gpt-audio-mini | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-audio-mini` — Deprecated |
| `openai-deprecated-gpt-4o` | `unsupported_mapping` | global/gpt-4o | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 | [openai-models-all](https://developers.openai.com/api/docs/models/all) `#gpt-4o` — Deprecated |

### 未完成来源覆盖

| 来源 | 数据域 | 市场 | 状态 | 记录数 / 单位 | 说明 |
|---|---|---|---|---|---|
| [openai-models](https://developers.openai.com/api/docs/models.md) | `model_catalog` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [openai-pricing](https://developers.openai.com/api/docs/data/pricing.md) | `pricing` | `global` | `partial` | 49 | 已从精确目录 ID 匹配并解析 49 个型号的支持价格档位；未匹配型号、非 Token 价格及其他定价范围仍未映射。 |
| [openai-deprecations](https://developers.openai.com/api/docs/deprecations.md) | `documentation` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [openai-models-list-api](https://developers.openai.com/api/reference/resources/models/methods/list) | `api` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [openai-responses-api](https://developers.openai.com/api/docs/guides/text) | `api` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [openai-gpt-6-astra](https://developers.openai.com/api/docs/models/gpt-6-astra.md) | `api` | `global` | `partial` | 1 | 已解析 GPT-6 Astra 端点支持矩阵；其他型号仍未解析。 |
| [openai-web-search](https://developers.openai.com/api/docs/guides/tools-web-search.md?api-mode=responses) | `capability` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [openai-file-search](https://developers.openai.com/api/docs/guides/tools-file-search.md) | `capability` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [openai-audio-api](https://developers.openai.com/api/docs/guides/audio) | `capability` | `global` | `not_parsed` | — | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| [openai-chatgpt-pricing](https://learn.chatgpt.com/docs/data/pricing.md?site_locale=en) | `plan` | `global` | `partial` | 8 | 来源覆盖 ChatGPT 与 Codex 套餐价格信息，但不保证列出 ChatGPT 全部套餐；未出现的既有套餐保留待核对。 |

### 阻止自动写入的投影项

当前同指纹投影预览没有列出阻塞项。

---

## tencent-tokenhub

- Candidate hash：`sha256:bfd392101a2034167cdc34bbac902fff4c11cb0567798a050c053c55152e5500`
- Observed at：`2026-10-25T17:03:26.463Z`
- Review items：1；non-complete coverage：22；匹配指纹的投影阻塞项：0
- 候选：[JSON](../../../data/candidates/tencent-tokenhub/ir/reviews/bfd392101a2034167cdc34bbac902fff4c11cb0567798a050c053c55152e5500.json) · 人读版（临时文件已按 7 天保留策略清理）
- [当前候选的投影预览](../../../data/candidates/tencent-tokenhub/ir/conversion-preview.md)

### ReviewItem

| ID | 类型 | Subject | 待核内容 | 来源与定位 |
|---|---|---|---|---|
| `tencent-tokenhub-domain-migration-incomplete` | `incomplete_coverage` | service/cn | 已将目录中的 138 个调用 ID 映射为 listed_current Offering，并按官方矩阵生成 101 条语言模型 Route 及 6 条模型内置联网搜索 Operation；其他模型价格、API 参数、能力与 Plan 仍需领域映射，不能据此替换完整 Provider 记录。 | [tencent-model-list](https://cloud.tencent.com/document/product/1823/130051) `#model-categories` — —<br>[tencent-model-pricing](https://cloud.tencent.com/document/product/1823/130055) `#pricing-categories` — —<br>[tencent-vector-api](https://cloud.tencent.com/document/product/1823/133515) `#embedding-api` — — |

### 未完成来源覆盖

| 来源 | 数据域 | 市场 | 状态 | 记录数 / 单位 | 说明 |
|---|---|---|---|---|---|
| [tencent-model-pricing](https://cloud.tencent.com/document/product/1823/130055) | `pricing` | `cn` | `partial` | 6 `mapped PriceFact records` | 当前仅映射 Kinfra 向量模型价格；其他模型价格和非 Token 价格仍保留来源观察。 |
| [tencent-api-usage](https://cloud.tencent.com/document/product/1823/130078) | `api` | `cn` | `partial` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-language-api](https://cloud.tencent.com/document/product/1823/130079) | `api` | `cn` | `partial` | 101 `Route records` | 按官方语言协议支持矩阵映射当前目录型号的 Chat Completions、Responses 与 Anthropic Messages 路由；参数和完整输入输出约束仍待映射。 |
| [tencent-vector-api](https://cloud.tencent.com/document/product/1823/133515) | `api` | `cn` | `partial` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-web-search](https://cloud.tencent.com/document/product/1823/132358) | `capability` | `cn` | `partial` | 5 `model IDs with built-in tool support` | 按官方矩阵将联网搜索作为具体模型内置 Operation 表达；采集来源没有建立独立 Service Capability。 |
| [tencent-api-guide-index](https://cloud.tencent.com/document/product/1823/130077) | `documentation` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-image-api-index](https://cloud.tencent.com/document/product/1823/135743) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-video-api-index](https://cloud.tencent.com/document/product/1823/135324) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-3d-api-index](https://cloud.tencent.com/document/product/1823/136142) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-speech-api-index](https://cloud.tencent.com/document/product/1823/135321) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-multimodal-api-index](https://cloud.tencent.com/document/product/1823/130988) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-image-api-overview](https://cloud.tencent.com/document/product/1823/135744) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-hy-image-api](https://cloud.tencent.com/document/product/1823/135745) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-video-api-overview](https://cloud.tencent.com/document/product/1823/135738) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-world-api-overview](https://cloud.tencent.com/document/product/1823/136579) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-speech-api-overview](https://cloud.tencent.com/document/product/1823/138804) | `api` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-image-understanding-api](https://cloud.tencent.com/document/product/1823/136956) | `capability` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-video-understanding-api](https://cloud.tencent.com/document/product/1823/136957) | `capability` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-product-overview](https://cloud.tencent.com/document/product/1823/130050) | `documentation` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-coding-plan](https://cloud.tencent.com/document/product/1823/130092) | `plan` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-token-plan](https://cloud.tencent.com/document/product/1823/130060) | `plan` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |
| [tencent-product-dynamics](https://cloud.tencent.com/document/product/1823/130675) | `documentation` | `cn` | `not_parsed` | — | 未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。 |

### 阻止自动写入的投影项

当前同指纹投影预览没有列出阻塞项。

---

## volcengine

- Candidate hash：`sha256:7085c92f27906cdecd3b7d266db8378ef984ae7d2e704a22a0e6aae0a896759f`
- Observed at：`2026-10-26T00:43:33.005Z`
- Review items：2；non-complete coverage：12；匹配指纹的投影阻塞项：0
- 候选：[JSON](../../../data/candidates/volcengine/ir/reviews/7085c92f27906cdecd3b7d266db8378ef984ae7d2e704a22a0e6aae0a896759f.json) · 人读版（临时文件已按 7 天保留策略清理）
- [当前候选的投影预览](../../../data/candidates/volcengine/ir/conversion-preview.md)

### ReviewItem

| ID | 类型 | Subject | 待核内容 | 来源与定位 |
|---|---|---|---|---|
| `ark-domain-mapping-incomplete` | `incomplete_coverage` | — | 中国区当前目录已映射为 listed_current Offering；3D 价格已映射为 PriceFact，其他价格、API Route、能力与套餐尚未完成领域映射。 | [volcengine-model-list](https://ark.volcengine.com/region:cn-beijing/docs/model-list.md) `#model-list` — 39 个精确模型 ID 已映射到中国市场 Service。<br>[volcengine-model-pricing](https://ark.volcengine.com/region:cn-beijing/docs/model-pricing.md) `—` — 3 条 3D PriceFact 已结构化；官方其他计价章节仍需逐类归一。 |
| `plans-not-payg-pricing` | `unsupported_mapping` | — | Coding Plan 与 Agent Plan 套餐和按量价格属于不同计费事实；当前仅保留套餐来源原文，不合并或折算为按量价格。 | [volcengine-model-pricing](https://ark.volcengine.com/region:cn-beijing/docs/model-pricing.md) `—` — —<br>[volcengine-coding-plan-overview](https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-plan-overview.md) `—` — —<br>[volcengine-coding-plan-faq](https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-faq.md) `—` — —<br>[volcengine-agent-plan-overview](https://ark.volcengine.com/region:cn-beijing/docs/agent-plan-personal-plan-overview.md) `—` — —<br>[volcengine-agent-plan-faq](https://ark.volcengine.com/region:cn-beijing/docs/agent-plan-personal-faq.md) `—` — — |

### 未完成来源覆盖

| 来源 | 数据域 | 市场 | 状态 | 记录数 / 单位 | 说明 |
|---|---|---|---|---|---|
| [volcengine-model-pricing](https://ark.volcengine.com/region:cn-beijing/docs/model-pricing.md) | `pricing` | `cn` | `partial` | 3 `mapped PriceFact records` | 3D 每次生成价格及 Hitem3D 输出模式已映射；Token、向量、图片、批量、在线阶梯价格仍需映射或 Review。 |
| [volcengine-model-billing](https://ark.volcengine.com/region:cn-beijing/docs/model-service-pricing.md) | `pricing` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-chat-api](https://ark.volcengine.com/region:cn-beijing/docs/chat-api.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-create-model-responses-api](https://ark.volcengine.com/region:cn-beijing/docs/create-model-responses-api.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-messages-api](https://ark.volcengine.com/region:cn-beijing/docs/messages-api.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-web-search](https://ark.volcengine.com/region:cn-beijing/docs/web-search.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-responses-api-migration](https://ark.volcengine.com/region:cn-beijing/docs/responses-api-migration.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-integrate-third-party-tools](https://ark.volcengine.com/region:cn-beijing/docs/integrate-third-party-tools.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-coding-plan-overview](https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-plan-overview.md) | `plan` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-coding-plan-faq](https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-faq.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-agent-plan-overview](https://ark.volcengine.com/region:cn-beijing/docs/agent-plan-personal-plan-overview.md) | `plan` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| [volcengine-agent-plan-faq](https://ark.volcengine.com/region:cn-beijing/docs/agent-plan-personal-faq.md) | `documentation` | `cn` | `not_parsed` | — | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |

### 阻止自动写入的投影项

当前同指纹投影预览没有列出阻塞项。

---


## volcengine-global

- Candidate hash：`sha256:2ca384f272421a5a6b96e492d03fd2d8b39c3a535909897e99980e3c97cd7637`
- Observed at：`2026-10-26T00:48:49.280Z`
- Review items：3；non-complete coverage：22；可投影 Provider 领域记录：0
- 候选：[JSON](../../../data/candidates/volcengine/ir-global/reviews/2ca384f272421a5a6b96e492d03fd2d8b39c3a535909897e99980e3c97cd7637.json) · 人读版（临时文件已按 7 天保留策略清理）
- 处理：仅保留 BytePlus ModelArk 来源观察；Provider 身份与火山引擎国际市场边界尚未确认，因此未投影为正式 Provider/Service/Offering。
