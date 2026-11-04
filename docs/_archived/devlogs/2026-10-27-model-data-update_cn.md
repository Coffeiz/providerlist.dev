# 当前 Provider 模型数据核查与补录报告

**核查日期**：2026-10-27  
**范围**：当前 12 个 Provider 的所有未退役 Offering、规范模型注册表及模型来源台账  
**状态**：已完成本轮可验证数据补录与清单刷新；整个模型字段补全仍未完成，缺口见下文。  
**校验**：`pnpm validate:data`，0 错误、4 个 `unknown_model_type` 警告。

## 覆盖概况

| 指标 | 数量 | 说明 |
|---|---:|---|
| Provider | 12 | 当前 `data/providers/` 目录 |
| 规范模型记录 | 594 | 当前 `data/models/` 目录 |
| 未退役 Offering | 927 | 包括 `active`、`unknown`、`deprecated` 和 lifecycle 未填写的记录；不能将其全部视为已确认现售 |
| 已关联 Offering | 918 | `model_ref` 指向规范模型 |
| 未关联 Offering | 9 | 8 个不同 Provider model ID；其中部分是独立服务/工具而非基础模型 |
| 已关联规范模型 | 589 | 对当前 Offering 去重 |
| 模型来源记录 | 719 | 来源索引中的来源条目；同一来源可支持多个模型 |
| 仍有至少一项模型字段缺失 | 499 / 589 | 缺失表示未取得可信值，不表示不支持 |

927 条未退役 Offering 的生命周期状态为：`active` 512、`unknown` 263、`deprecated` 3、缺少 lifecycle stage 149。明确 `retired` 的 20 条不纳入当前供应覆盖率。

## Provider 覆盖与模型字段缺口

字段数按当前已关联规范模型去重。`family`、`release_date`、`limits`、`capabilities` 统计的是字段整体缺失；部分模型虽然有对象，但单个能力键仍可能未知。`output_dimensions` 只对 `embedding` 类型统计。

| Provider | Offering 总数 | 未退役 | 已关联 | 未关联 | 已关联模型 | 缺失字段数：family / release_date / limits / capabilities / modalities / type |
|---|---:|---:|---:|---:|---:|---|
| Alibaba | 413 | 413 | 410 | 3 | 286 | 237 / 222 / 205 / 111 / 0 / 0 |
| Anthropic | 12 | 12 | 12 | 0 | 12 | 1 / 1 / 0 / 1 / 0 / 0 |
| 蚂蚁百灵 | 11 | 7 | 7 | 0 | 7 | 0 / 7 / 0 / 3 / 6 / 3 |
| DeepSeek | 4 | 4 | 4 | 0 | 2 | 0 / 0 / 0 / 0 / 0 / 0 |
| MiniMax | 74 | 74 | 74 | 0 | 37 | 27 / 19 / 28 / 27 / 10 / 5 |
| Moonshot AI | 12 | 12 | 12 | 0 | 6 | 0 / 0 / 0 / 0 / 0 / 0 |
| OpenAI | 72 | 72 | 72 | 0 | 72 | 47 / 47 / 8 / 46 / 7 / 0 |
| 阶跃星辰 | 38 | 26 | 26 | 0 | 13 | 0 / 12 / 8 / 7 / 0 / 0 |
| 腾讯 TokenHub | 146 | 146 | 140 | 6 | 105 | 90 / 83 / 76 / 86 / 0 / 0 |
| 火山方舟 | 69 | 69 | 69 | 0 | 49 | 47 / 44 / 18 / 37 / 0 / 0 |
| 小米 MiMo | 21 | 17 | 17 | 0 | 10 | 10 / 7 / 4 / 4 / 0 / 0 |
| 智谱 / Z.AI | 75 | 75 | 75 | 0 | 53 | 53 / 31 / 25 / 53 / 17 / 1 |
| **合计** | **947** | **927** | **918** | **9** | **589** | **512 / 473 / 372 / 375 / 40 / 9** |

其他关键缺口：24 个当前关联模型属于 `embedding`，其中 1 个没有官方向量维度；589 个已关联模型中有 478 个未登记 family、453 个未登记 release date、361 个未登记 limits、347 个未登记 capabilities 对象。能力对象缺键不等于不支持；逐模型的缺失键在主 CSV 中列出。当前规范表中有 9 个模型缺 `type`，40 个缺 `modalities`。

## 本轮补录与修正

本轮新增/完善了阿里云当前模型快照与别名关联，并修正 MiniMax 音乐模型的来源证据绑定；向量模型维度补入了有官方明确值的记录。还为 `alibaba/text-embedding-async-v1` 补入 `limits.input: 2048`，依据是阿里云官方批处理接口说明中的单行最大输入 Token 数。该页面没有公布 async-v1 的向量维度，因此维度仍为空。[阿里云批处理接口 API 文档](https://help.aliyun.com/zh/model-studio/text-embedding-batch-api)

官方依据包括阿里云的 [模型发布与更新记录](https://help.aliyun.com/zh/model-studio/newly-released-models)、[Qwen-VL-OCR 文档](https://help.aliyun.com/zh/model-studio/qwen-vl-ocr)、[Qwen Deep Research 文档](https://help.aliyun.com/zh/model-studio/qwen-deep-research)、[Qwen Math Plus 文档](https://help.aliyun.com/zh/model-studio/qwen-math-plus)、[Qwen Flash Character 文档](https://help.aliyun.com/zh/model-studio/qwen-flash-character)、[多模态向量 API 文档](https://help.aliyun.com/zh/model-studio/multimodal-embedding-api-reference)，以及腾讯、火山等开发商官方模型页。每个模型的具体来源 URL、证据字段、检索时间和内容哈希请见来源 CSV 与模型 sidecar。

对能以明确 ID 对上的历史快照、当前别名和市场上架项建立了关联。没有仅根据相似名称强行合并；热词偏置、绑骨/动画/格式转换、声音克隆/设计等服务或工具项不伪造为基础模型。对于官方资料没有给出的限额、发布日期、family、能力或维度，保留未知。

## 尚未关联的 9 条未退役 Offering

| Provider / ID | 数量 | 处理结论 |
|---|---:|---|
| Alibaba `qwen-tts-flash` | 2 | 中国区和国际区均有记录；仍未找到能把此精确 ID 对应至规范模型的官方文档，保留未关联 |
| Alibaba `speech-biasing` | 1 | 热词偏置功能，属于能力/服务，不是独立基础模型 |
| Tencent TokenHub `tripo-3d-rigging-check`、`tripo-3d-rigging`、`tripo-3d-animation`、`tripo-3d-format` | 4 | Tripo 处理工具/API，不是规范基础模型 |
| Tencent TokenHub `minimax-voice-clone`、`minimax-voice-design` | 2 | 独立声音处理能力，不是规范基础模型 |

另外有 12 条 StepFun 已退役 Offering 没有 `model_ref`，已列入未关联明细附件，但不计入当前供应缺口。

## 未完成项与解释

1. 当前覆盖率中的 918 条关联代表每个 Offering 都能指向规范 Model；不代表这 589 个模型的所有字段都已补齐。
2. 至少一项字段缺失的关联模型有 499 个。大量官方页面只提供当前调用 ID、类别或部分限额；其余资料未披露、无法精确匹配，或仍需逐项核对。不能把未知填成“不支持”。
3. 当前有 149 条 Offering 缺生命周期状态、263 条标为 `unknown`。它们仍属于本报告的未退役盘点范围，但不应被理解为官方确认的现售。
4. models.dev 是可用的第三方补充来源，但直接目录端点在本轮环境返回 403，不能据其批量写入数据；既有模型来源台账若含第三方记录，仍按其自身验证状态保留，不升级为官方确认。
5. 校验的 4 条警告是开放枚举的 `computer_use`（1 条）和 `world_model`（3 条）。依项目约定保留未知类型，不静默改成 `chat`；校验没有数据错误。

## 完整明细与复核入口

- [594 条规范模型字段、当前 Offering 覆盖、字段缺项及证据引用](model-data-update-2026-10-27.csv)
- [逐模型来源索引（719 条来源记录）](model-data-sources-2026-10-27.csv)
- [当前未关联及已退役未关联 Offering（共 21 条）](unlinked-provider-model-offerings-2026-10-27.csv)
- 单条字段证据：`data/sources/models/<developer_id>/<model>.json`
- Provider 到 Model 的供应、别名及状态证据：`data/sources/providers/<provider>.json`

CSV 由当前源数据和来源台账重新生成，未手动修改 `dist/`。本轮只运行数据校验，没有运行测试套件。
