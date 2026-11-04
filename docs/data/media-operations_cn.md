# 媒体约束、参数组合与异步任务

本文只说明市场级独立服务能力的输入输出、参数和异步任务字段。模型 Offering 不再记录 Operations、API 参数或调用路由；市场 API 接入统一记录在 Endpoint。字段结构见 [`schema_cn.md`](schema_cn.md)；计费条件见 [`pricing_cn.md`](pricing_cn.md)。

实现：`packages/shared/src/capabilities/media.ts`、`packages/shared/src/capabilities/constraints.ts`。

## 1. 独立能力字段

独立 Service Capability 可记录接口动作的输入输出与执行方式：

| 字段 | 内容 |
|---|---|
| `input` | 输入项、必填性、数量和媒体限制 |
| `output` | 输出类型、媒体限制和产物形式 |
| `parameters` | 参数类型、可选值、范围、默认值和 Route 映射 |
| `constraints` | 参数或输入项之间的组合限制 |
| `execution` | 同步、流式、异步任务或双向实时模式 |
| `routes` | 各协议与 Endpoint 的调用方式 |

**参数限制可能互相依赖。** 例如，1080p 只支持 10 秒。若把分辨率和时长当作互不相关的选项，界面或 SDK 就可能生成无效请求。因此组合限制要写入 `constraints`，不能只放在说明文字中。

## 2. 输入与输出

### 输入项 `CapabilityInput`

| 字段 | 含义 |
|---|---|
| `name` | 输入名，如 `prompt`、`first_frame`、`audio_file` |
| `kind` | 类型，如 `text`、`image`、`video`、`audio`、`file`、`structured`、`3d`、`embedding`；未知值原样保留 |
| `required` | 是否必填；条件必填可由组合限制表达 |
| `cardinality` | 资源数量范围，如参考图数量 |
| `media` | MIME、大小、时长、分辨率、传输方式等媒体限制 |

数量限制和单个资源的媒体限制是两回事。例如，“最多 8 张图”和“每张不超过 10 MB”需要分别记录。

### 媒体限制 `MediaSpec`

可记录的限制包括：`mime_types`、`max_bytes`、`duration_seconds`、`dimensions`（含宽高、像素和宽高比）、`fps`、`sample_rate_hz`、`channels`、`codec`、`container` 和 `transports`。

- 输入和输出的 `MediaSpec` 必须分开；输入大小不能推断输出大小。
- 缺少 `mime_types` 表示未披露，不代表允许所有格式。
- 未知限制用 `null` 或省略；`max_bytes: 0` 是明确的零限制。
- 音频使用 `sample_rate_hz` / `channels`；视频帧率使用 `fps`。
- 输入与输出可支持不同的 `transports`。
- 未知不等于无限制；界面应显示“未知”或“未披露”，不能显示“无限制”。

### 输出项 `CapabilityOutput`

输出项记录 `kind`、输出媒体限制 `media`、产物方式 `artifact`、是否流式 `streaming`，以及结构化输出字段 `fields`。输出类型是开放枚举；未知值原样保留。

`artifact.expires_in_seconds`、`streaming` 等未知时保留 `null`，不能猜测默认值或有效时长。

## 3. 参数与组合限制

### 参数 `ParameterSpec`

参数可声明名称、类型、必填性、`nullable`、`enum` 或 `min` / `max` / `step`、`default` 和 `route_mappings`。

- 只有来源明确给出默认值时才填写 `default`。
- Route 映射用于记录参数在请求中的 JSON Pointer、表单字段或 Query/Header 位置。

### 约束 `ConstraintRule`

约束用有限 AST 表达条件和结果，例如“分辨率为 1080p 时，时长必须为 10 秒”。只允许以下操作符：

```text
all / any / not
eq / in / lt / lte / gt / gte / requires / excludes
```

字段引用必须指向同一 Capability 已声明的参数或输入项；否则校验失败。约束 ID 应在同一 Capability 内保持唯一，以便识别违规规则。

禁止字符串脚本、可执行的任意正则表达式、循环依赖和永远无法满足的规则。

约束只判断请求是否有效；`PriceRule.conditions` 只决定价格。两者可以复用解析工具，但字段范围和用途必须分开，价格变化不能改变请求是否合法。

求值时，缺失字段不算满足条件。界面和只读 SDK 应使用同一规则拒绝无效组合，并可禁用不适用的选项。

## 4. 执行模式与异步任务

| `execution.mode` | 典型场景 | 需要记录 |
|---|---|---|
| `sync` | Embedding、短文本、部分图像任务 | 请求与响应映射 |
| `stream` | LLM、ASR、流式 TTS | 流协议、事件和完成信号 |
| `async_job` | 视频、Batch、部分图像任务 | 创建、查询、取结果及可选取消的 Route |
| `bidirectional_realtime` | 实时对话或音频交互 | 连接、帧编码、流控和会话限制 |

异步任务应记录创建响应中的任务 ID、状态查询和结果路径，以及有依据时的取消路径和状态映射。取消能力、轮询间隔等未知时保留 `null`。

异步产物如返回临时 URL，可记录官方公布的有效期和下载限制。不得把真实用户生成的产物 URL 写入静态数据。

## 5. 数据填写原则

以下是独立服务能力的常见字段方向，并非必填清单。只录入该 Provider 的来源明确支持的字段。

| 独立服务能力 | 常见输入与限制 |
|---|---|
| `web_search`（Service） | 查询、地区、语言、引用和返回条数 |
| `web_fetch` / `file_storage` / `batch`（Service） | URL、文件限制、保留、并发和任务轮询 |

## 6. 校验边界

`packages/schema/src/validation.ts` 检查约束引用的字段是否已声明。`packages/shared` 负责参数取值、必填项、组合规则及合法选项计算。

未知值不能当作允许；不满足约束的组合不能进入可选项。
