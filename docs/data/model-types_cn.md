# 模型类型

> 对应实现：`packages/schema/src/model-types.ts`

`model_type` 用于给规范模型做主类别分类。它不代表 API 协议、Provider 服务或具体调用方式。

模型类型、输入/输出模态和模型规格分别记录：类型是单值分类；模态可以多选；上下文、输出限制及发布日期按开发厂商资料维护。Provider 的 API 接入和独立服务能力记录在各自市场数据中，不从模型类型推断。

规范 Model 使用 `id` 作为目录身份、`name` 保存开发商公布名称，不另设模型别名字段。Provider 的实际调用 ID 保存在 Offering 中，并通过 `model_ref` 关联规范 Model。`capabilities.reasoning` 用 `true` / `false` 表示推理支持状态，或用字符串数组记录官方公布的档位；数组不保证每条 Route 都支持全部档位。

---

## 2. 十三类标准模型类型

基础类型以 Models.dev V2 为起点，并增加由官方资料支持的 `music`、`3d`、`world_model` 与 `computer_use`。

| `model_type` | 中文 | 说明 |
|---|---|---|---|
| `chat` | 对话 | 可包含文本、图像或音频输入；具体模态按开发商资料记录 |
| `image` | 图像生成 | 生成或编辑图像 |
| `video` | 视频生成 | 生成或处理视频 |
| `3d` | 3D 生成 | 生成三维资产或场景 |
| `embedding` | 向量 | 生成向量表示 |
| `reranking` | 重排序 | 对候选内容重新排序 |
| `decision` | 决策 / 评估 | 保留开发商发布的类别定义 |
| `transcription` | 语音识别 | 将语音或音频转为文本 |
| `speech` | 语音生成 | 生成语音或语音响应 |
| `realtime` | 实时交互 | 描述持续实时会话形态 |
| `music` | 音乐生成 | 生成音乐内容 |
| `world_model` | 世界模型 | 生成或模拟可探索、可交互的数字世界 |
| `computer_use` | 电脑操控 | 理解屏幕并通过工具操作电脑界面 |

### 2.1 Type 是单值，模态是多值

- `model.type` 是**单值**的主类别。
- `modalities.input` / `modalities.output` 是**多值**。
- `Model.modalities.input` / `output` 保存开发厂商发布的模型输入输出类型；优先保留官方 MIME 类型，只有官方仅声明类别时才记录 `text` / `image` / `audio` / `video` 等类别。未取得依据时省略，不根据模型主类别猜测。
- 输入/输出模态是全局 Model 事实，只在 Model 注册表中维护；Provider Offering 通过 `model_ref` 展示，不得存放 `modalities` 或 `api_modalities`。Provider API 的协议与路径统一记录在所属市场的 Endpoint 中。
- Model 文件记录型号分类、开发商规格、发布事实，以及模型本身的推理、推理档位、工具调用、结构化输出和采样参数能力。API 地址、路由和请求字段映射仍由 Provider 的市场接入信息表达。

**类型只负责分类，不用于推断模型规格或 Provider 接入能力。**

### 2.2 开放枚举与前向兼容

Type 是**开放枚举**：

- Schema 接受未识别的字符串（满足 ID 词法约束）。
- 发布校验器报 `unknown_model_type`（warning，不阻止发布）。
- 网站归入**「其他」**，并显示原始 ID。
- **绝不**把所有未知类静默强制归成 `chat`。

ID 词法约束：`^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)*$`
（允许 `chat`，也允许上游可能带点的 `vendor.chat`）。

### 2.3 `decision` 与 `realtime` 的特例

这两个保留上游语义，**不做泛化**：

- `decision` —— 决策/评估类。保留上游定义，不代表所有决策 API 都是 LLM。
- `realtime` —— 实时交互。这其实是**交互形态**，可能同时输入音频/视频、
  输出音频/文本。不要把它和 `speech` 混为一谈：
  `speech` 描述模态（语音生成），`realtime` 描述交互方式（持续会话）。

### 2.4 音乐生成：标准类型 `music`

音乐生成不是 TTS。`music` 是标准 `model_type`，网站归入“音乐生成”类别。MiniMax [音乐生成 API 文档](https://platform.minimax.cn/docs/api-reference/music-generation)提供模型接口依据，[定价概览](https://platform.minimax.cn/docs/pricing/overview#-5)列出按首计费的型号价格；已下线型号保留历史价格与不可用状态，不视为当前可供应。

### 2.5 三维生成：标准类型 `3d`

`3d` 用于开发商明确发布的三维资产或场景生成模型，网站归入“3D 生成”类别。输入和输出模态按开发商资料独立记录；绑骨、动画重定向、网格编辑和格式转换等后处理服务不因此变成模型类型。

模型类型只负责分类；Provider 的接入信息由所属市场统一记录。

### 2.6 世界模型：标准类型 `world_model`

`world_model` 用于生成可实时探索或交互的数字世界。阿里云将 HappyOyster 系列明确定位为世界模型，并区分 Adventure、Directing、Acting 三种交互模式；因此这三个型号归入「世界模型」，而不是仅因输出视频归为普通视频生成。世界创建、实时视频流和客户端交互属于 Provider 的接入能力。参考：[HappyOyster 概览](https://www.alibabacloud.com/help/en/model-studio/happyoyster-overview)、[HappyOyster 指南](https://www.alibabacloud.com/help/en/model-studio/happyoyster-guide)。

### 2.7 电脑操控：标准类型 `computer_use`

`computer_use` 用于通过屏幕理解和电脑交互工具完成桌面操作的模型。它表示模型的主要用途；输入输出模态和具体 API 调用方式仍分别由 Model 与 Provider 数据记录。
