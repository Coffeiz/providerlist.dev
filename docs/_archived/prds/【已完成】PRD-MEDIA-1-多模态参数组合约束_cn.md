# PRD-MEDIA-1 · 多模态参数组合约束与异步执行

> 状态：✅ 已实施 · 对应设计文档 v1.2 §4.16 / §4.17 / §4.18
> 实施范围：`packages/shared/src/capabilities/`

## 1. 背景

多模态 API 的参数**不是独立枚举的笛卡尔积**。

一个真实的视频 API 可能这样规定：
- 可选时长 5 秒或 10 秒；
- 可选分辨率 720p 或 1080p；
- **但 1080p 只能选 10 秒**。

如果网站把 `resolution` 和 `duration_seconds` 渲染成两个独立下拉框，
用户就能选出 `1080p + 5s`——一个服务端必然拒绝的组合。
**自动生成 GUI 的系统在这里一定会出错。**

同理，如果只描述「支持异步任务」而不记录任务 ID 字段、状态查询路径、
产物有效期，接入方就只能靠猜——而异步任务猜错的代价（轮询不到结果、
下载了已过期的 URL）比普通参数错更严重。

## 2. 目标

1. 约束是**一等公民**：用有限 AST 表达组合限制。
2. 非法组合在 **GUI 与只读 SDK 同时**被阻止。
3. 异步任务完整描述：创建 / 状态 / 结果 / 取消。
4. 输入与输出的媒体约束**分开**存储。
5. 未知限制**不等于**无限制。

## 3. 非目标

- 不做参数推荐——只描述合法范围。
- 不执行任何 Provider 协议——只记录声明式映射。
- 不实现通用规则引擎——DSL 是**有限** AST，不是脚本。

## 4. 验收标准

- [x] 约束 DSL 只接受 `all/any/not/eq/in/lt/lte/gt/gte/requires/excludes`。
- [x] 引用未声明的参数/slot → **校验失败**（阻止发布）。
- [x] `1080p + 5s` 被判定为非法组合。
- [x] `allowedValues()` 能算出某参数在当前上下文下的合法取值
      （GUI 用来禁用非法选项）。
- [x] 输入与输出的 MediaSpec 独立存储，不合并。
- [x] `max_bytes = 0` 不被当作未知。
- [x] 未知限制展示为「未披露」，**不**是「无限制」。
- [x] 音频用 `sample_rate_hz`，视频用 `fps`，**不混用**。
- [x] 异步任务记录 `task_id_pointer` / `status_path_template` /
      `result_path_template` / `status_mapping`。
- [x] 未知时 `supports_cancel` / `expires_in_seconds` / `recommended_interval_seconds`
      保持 `null`，**不**凭空填。
- [x] 约束与价格的语义隔离——改价格不改变请求合法性判定。
- [x] `image_to_video` 的参数**不**从兄弟 Operation `text_to_video` 继承。

## 5. 影响的契约

- `Operation.input_slots` / `output_specs` / `parameters` / `constraints` / `execution`。
- `MediaSpec` / `InputSlot` / `OutputSpec` / `ParameterSpec` / `ConstraintRule` /
  `ExecutionSpec`。
- `Route.task_id_pointer` / `status_path_template` / `result_path_template` /
  `cancel_path_template`。

## 6. 五个必过夹具

| 夹具 | 覆盖点 | 位置 |
|---|---|---|
| 视频异步任务 | `async_job`、任务 ID Pointer、状态映射、产物有效期未知 | `example-ai` → `example-video` |
| 图像参数组合 | `1080p-only-10s` 约束 | `example-ai` → `example-video` |
| ASR 输入约束 | MIME / 大小 / 时长 / 采样率 / 传输 | `example-ai` → `example-asr` |
| TTS 输出格式 | 输出 MIME / 采样率 / 声道 / `pcm-requires-16k` | `demo-cloud` → `demo-tts` |
| 独立 Web Search | 独立服务能力，不计入模型数 | `example-ai` → `service_capabilities[0]` |

## 7. 风险

| 风险 | 缓解 |
|---|---|
| 约束表达力不足 | 有限 AST 覆盖已知场景；无法结构化的条件标 `manual_adapter_required` |
| 规则循环依赖 / 永远不可满足 | 必须阻止自动发布 |
| GUI 与 SDK 判定不一致 | 两侧共用同一套约束求值逻辑（`packages/shared`） |
| 参数被跨 Operation 继承 | 夹具显式验证 `image_to_video` 只有 720p |

## 8. 验证

```bash
pnpm --filter @providerlist/shared/capabilities test
```

关键用例：`1080p + 5s` 非法、引用未声明字段失败、
输入输出 MediaSpec 分离、上下文不足不当作允许。
