# MiMo「Pro 系列不是多模态」查证

**日期**：2026-10-25
**影响范围**：数据 / 小米 MiMo Provider 与规范 Model 注册表（`data/models/xiaomi/`、`data/sources/models/xiaomi/`）

## 现象

用户提出疑问：**MiMo 的 Pro 系列好像不是多模态**。

核对规范 Model 注册表后，实际情况与疑问相反——仓库把 V2.6 三个型号都声明成了多模态：

| Model | type | 输入模态 | 输出模态 |
|---|---|---|---|
| `xiaomi/mimo-v2-6-pro` | chat | text, image, audio, video | text |
| `xiaomi/mimo-v2-6-flash` | chat | text, image, audio, video | text |
| `xiaomi/mimo-v2-6-pro-ultraspeed` | chat | text, image, audio, video | text |
| `xiaomi/mimo-v2-5-pro` | chat | text | text |
| `xiaomi/mimo-v2-5` | chat | text, image, audio, video | text |

也就是说：**「Pro 是纯文本」只在 V2.5 及更早成立，V2.6 的 Pro 已经是原生全模态。**
用户的印象来自 V2 那一代的命名分工（`MiMo-V2-Pro` 纯文本旗舰 vs `MiMo-V2-Omni` 全模态），
V2.6 把这条线合并了。

## 假设与排除

| 假设 | 如何验证 | 结果 |
|---|---|---|
| 仓库把 Pro 错标成多模态 | 查官方图像/音频/视频理解说明的「Supported models」段落 | **排除**。三份文档一致写明支持 `mimo-v2.6-flash` / `mimo-v2.6-pro` / `mimo-v2.6-pro-ultraspeed` |
| 「全模态」只是营销措辞 | 查官方多模态理解文档的请求示例与响应 | **排除**。示例以 `image_url` / `input_audio` / `video_url` 内容块请求 `mimo-v2.6-pro`，响应里带 `image_tokens` / `audio_tokens` / `video_tokens` |
| 只有图像、音频或视频三者之一成立 | 分别查三份理解说明 | **排除**。三者都成立，Supported models 段落文字完全一致 |
| 输出也是多模态 | 查示例响应的 `message.content` | **排除**。响应正文是文本字符串，官方未提供原生图像/音视频输出 |
| 证据链本身不可靠（所以数据可疑） | 查 `data/sources/models/xiaomi/mimo-v2-6-pro.json` | **成立**。模态证据指向 Chat Completions API 页——该页并不声明模态列表，且状态是 `unverified` |

## 根因

**数据是对的，证据链是错的。**

`xiaomi-model-mimo-v2-6-pro-modalities` 这条证据的 `source_ref` 指向
`xiaomi-openai-chat`（OpenAI Chat Completions API 页），断言文字写的是
「官方 API 文档说明 mimo-v2.6-pro 输入/输出模态为 text, image, audio, video / text」——
但那页**并不含这个模态声明**，而且状态是 `unverified`（既没人工确认，也没跨源核对）。

这正是疑问的来源：一条**指不到出处**的模态声明，看起来就像随手填的。

同系列三个 V2.6 型号（pro / flash / pro-ultraspeed）都是同样的问题。

## 修复

只改**证据链**，不动任何已发布事实——`modalities` 的值本来就是对的。

在 `data/sources/models/xiaomi/` 三个 V2.6 台账里：

- 新增 4 个官方来源（三个文件内容逐字一致，避免编译期 `model_registry.source_conflict`）：
  - `xiaomi-multimodal-image` / `xiaomi-multimodal-audio` / `xiaomi-multimodal-video`
    —— 官方多模态理解说明的 `.md` 机器可读版
  - `xiaomi-v2-6-release` —— 官方 MiMo-V2.6 发布公告
- 删除指不到出处的 `...-modalities` 证据，换成 5 条可复核的字段级证据
  （image / audio / video / release / output），每条锚定一个具体来源。
- 状态从 `unverified` 升到 `cross_checked` + `cross_source`，
  `checker` 记为 `llm_extractor`——**由 LLM 跨源核对，不冒充人工**。
  按约定不用 `api_verified`（那是 API 探测才能下的结论）。

`.md` 版本而非 HTML 页：官方站是 SPA，HTML 里没有正文，页面内容由 JS 渲染；
`.md` 是同一份内容的纯文本形态，URL 稳定、可被 `curl | shasum -a 256` 复算，
与仓库快照层「对原始响应字节做 sha256」的口径一致。

**未改**：`mimo-v2-5-pro`（纯文本，证据已由阿里云百炼型号详情页 `doc_confirmed`）与
`mimo-v2-5`（全模态，官方 V2.5 发布公告有明确表述，但本次未动其台账）。

## 回归防护

- `pnpm validate:data`：10 个 Provider、10 个事件文件，0 错误 0 警告。
- `pnpm build:catalog`：构建通过。编译期 `validateModelRegistryDocument` 会校验
  evidence 必须锚定本文件内已登记的 source、必须属于该 Model 的字段路径、
  且 `modalities` 等字段必须有字段级证据——本次改动全部过闸。
- 发布产物 `dist/v1/models.json` 的事实值未变（输入仍为 text/image/audio/video，
  输出 text）；证据链按设计只在仓库源数据里保留，不进公开 JSON。
- 人工复核：下次有人质疑 MiMo 模态时，先看
  `data/sources/models/xiaomi/mimo-v2-6-pro.json` 的四条官方来源，
  必要时用记录的 `content_hash` 复算原文。

## 未解决事项

### 多模态对话的媒体约束在契约里无处安放（本次查证的副产品）

查证过程中发现一个**通用**契约层限制，不是 MiMo 的数据错误：

- `ModelModalities` 只有 `{ input?, output? }`——只能说明"支持哪些模态"，装不下约束；
- `MediaSpec`（`mime_types` / `max_bytes` / `duration_seconds` / `dimensions` / `fps`…）
  只挂在 `Operation.input_slots[]` 与 `output_specs[]` 上；
- 而对话的 wire 形态是**单个 `messages` 参数、内容块多态**
  （`image_url` / `input_audio` / `video_url` 都在 messages 数组里，没有独立参数），
  `InputSlot.kind` 是单值字符串，**表达不了多态**。

后果：官方明确给出的媒体限制——例如 MiMo 图像单文件 ≤ 50 MB
（JPEG/PNG/GIF/WebP/BMP）、音频 URL ≤ 100 MB（MP3/WAV/FLAC/M4A/OGG）、
视频 URL ≤ 300 MB（MP4/MOV/AVI/WMV）——**当前目录里任何位置都放不下**。
全仓只有 3 个槽位带 `media`，全是专用 ASR 操作；199 个 `text_generation` 操作一个都没有。

**为什么现在不改**：这不是 MiMo 一家的数据问题，而是目录里每一个多模态对话模型
（GPT-4o、Qwen-VL、kimi-vl…）共同的问题。修它要先做契约设计：

1. 槽位多态怎么表达——`kind` 改数组？加 `kinds[]`？还是引入 content-block 概念？
2. `MediaSpec` 现在是"每个槽位一份"，多模态槽位需要**按模态拆开**
   （image ≤ 50 MB 与 video ≤ 300 MB 同槽并存），否则限制依旧无处安放；
3. 199 个对话操作要不要回填、回填到什么口径（没有媒体限制的模型写不写）。

这三步要同时动公开 JSON Schema、TS 投影、语义校验器、展示层与 `docs/data/media-operations.md`，
还要决定"采齐"的范围（每个多模态对话模型的每种模态）。
在当前重构未收尾、HEAD 本身还有 35 个 typecheck 错误的情况下再落一次半迁移，
风险高于收益。

**候选方案（待设计）**：把媒体约束放在**模型层**而不是操作层——
`ModelModalities` 增一个按模态索引的媒体约束映射
（`image → MediaSpec`、`audio → …`、`video → …`）。
这与仓库既有分层一致（「模型的感知模态记在规范 Model 注册表」，
offering 层面还被明令禁止重复模态字段），且绕开了 `InputSlot.kind` 的多态难题。
代价仍需同步三层契约 + 校验器 + 采集口径。

**触发时机**：当需要回答"这个 API 能传多大的图、什么格式"时，
或当要在能力页展示多模态对话的媒体限制时——而不是现在。

## 参考资料

- [图像理解](https://mimo.mi.com/static/docs/quick-start/usage-guide/multimodal-understanding/image-understanding.md)
  · [音频理解](https://mimo.mi.com/static/docs/quick-start/usage-guide/multimodal-understanding/audio-understanding.md)
  · [视频理解](https://mimo.mi.com/static/docs/quick-start/usage-guide/multimodal-understanding/video-understanding.md)
  —— 三份的「Supported models」段落均列出 `mimo-v2.6-flash` / `mimo-v2.6-pro` / `mimo-v2.6-pro-ultraspeed`
- [MiMo-V2.6 发布公告](https://mimo.mi.com/static/docs/news/latest/v2-6.md)
  —— 「The MiMo-V2.6 series comprises two native fully multimodal models, namely Pro and Flash.」
- [MiMo-V2.5 发布公告](https://mimo.mi.com/static/docs/news/latest/v2.5-news.md)
  —— 「mimo-v2.5 is a native full-modal large model」；`mimo-v2.5-pro` 为纯文本 Agent 旗舰
