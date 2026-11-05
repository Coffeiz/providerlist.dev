# minimax 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `minimax` |
| 候选类型 | `regional_current_supply_observation` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-05T13:35:57.057Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:e2c4a4286cd5afbc382ddf893522451bca1c892ce141a4b172e8289d39eabc9c` |
| 来源快照 | 28 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 1690 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### 记录 cn

#### Record / cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 能力（capabilities） › 记录 file-management › ID（id） | 新增 | 未记录 | file-management |
| 能力（capabilities） › 记录 file-management › 输入（input） › 记录 file › 类别（kind） | 新增 | 未记录 | file |
| 能力（capabilities） › 记录 file-management › 输入（input） › 记录 file › 名称（name） | 新增 | 未记录 | file |
| 能力（capabilities） › 记录 file-management › 输入（input） › 记录 file › 是否必填（required） | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 file-management › 类别（kind） | 新增 | 未记录 | file_storage |
| 能力（capabilities） › 记录 file-management › HTTP 方法（method） | 新增 | 未记录 | POST |
| 能力（capabilities） › 记录 file-management › 操作 ID（operation_id） | 新增 | 未记录 | file-upload |
| 能力（capabilities） › 记录 file-management › operation kind | 新增 | 未记录 | file_upload |
| 能力（capabilities） › 记录 file-management › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • file.file_id<br>• file.bytes<br>• file.created_at<br>• file.filename<br>• file.purpose<br>• base_resp.status_code<br>• base_resp.status_msg |
| 能力（capabilities） › 记录 file-management › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 可选值（enum） | 新增 | 未记录 | • voice_clone<br>• prompt_audio<br>• t2a_async_input<br>• video_understanding<br>• video_generation_input |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 名称（name） | 新增 | 未记录 | purpose |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 是否必填（required） | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 参数路径（route_mappings） | 新增 | 未记录 | • multipart/form-data.purpose |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 类型（type） | 新增 | 未记录 | string |
| 能力（capabilities） › 记录 file-management › 路径（path） | 新增 | 未记录 | /files/upload |
| 能力（capabilities） › 记录 file-management › requires plan | 新增 | 未记录 | 否 |
| 能力（capabilities） › 记录 file-management › source suffix | 新增 | 未记录 | file-upload-api |
| 能力（capabilities） › 记录 image-understanding › ID（id） | 新增 | 未记录 | image-understanding |
| 能力（capabilities） › 记录 image-understanding › 类别（kind） | 新增 | 未记录 | image_understanding |
| 能力（capabilities） › 记录 image-understanding › 操作 ID（operation_id） | 新增 | 未记录 | understand-image-mcp |
| 能力（capabilities） › 记录 image-understanding › operation kind | 新增 | 未记录 | image_understanding |
| 能力（capabilities） › 记录 image-understanding › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 能力（capabilities） › 记录 image-understanding › requires plan | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 image-understanding › source suffix | 新增 | 未记录 | mcp-guide |
| 能力（capabilities） › 记录 web-search › ID（id） | 新增 | 未记录 | web-search |
| 能力（capabilities） › 记录 web-search › 类别（kind） | 新增 | 未记录 | web_search |
| 能力（capabilities） › 记录 web-search › 操作 ID（operation_id） | 新增 | 未记录 | web-search-mcp |
| 能力（capabilities） › 记录 web-search › operation kind | 新增 | 未记录 | web_search |
| 能力（capabilities） › 记录 web-search › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 能力（capabilities） › 记录 web-search › requires plan | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 web-search › source suffix | 新增 | 未记录 | mcp-guide |
| 市场（market） | 新增 | 未记录 | cn |
| models › 记录 M2-her › 模型 ID（model_id） | 新增 | 未记录 | M2-her |
| models › 记录 M2-her › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 M2-her › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 M2-her › source listing | 新增 | 未记录 | historical |
| models › 记录 M2-her › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-H3-Context-IR › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Context-IR |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型/接口<br>• 输入价格 每百万 tokens<br>• 输出价格 每百万 tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 金额（amount_decimal） | 新增 | 未记录 | 5.80 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source header | 新增 | 未记录 | 输入价格 每百万 tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source value | 新增 | 未记录 | ¥5.80 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 金额（amount_decimal） | 新增 | 未记录 | 23.00 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source header | 新增 | 未记录 | 输出价格 每百万 tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source value | 新增 | 未记录 | ¥23.00 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • MiniMax-H3-Context-IR<br>• ¥5.80<br>• ¥23.00 |
| models › 记录 MiniMax-H3-Context-IR › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Context-IR › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.40 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.40 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.40 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.40 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      兼顾质量与速度，适合日常内容创作<br>• 768P<br>• ¥0.40<br>• ¥0.40<br>• ¥0.20 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.26 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.26 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      兼顾质量与速度，适合日常内容创作<br>• 480P<br>• ¥0.26<br>• ¥0.26<br>• ¥0.20 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-Highspeed<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| models › 记录 MiniMax-H3-Highspeed › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Highspeed › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Lite › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.26 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.26 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.13 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      更低的成本，适合创意尝试与批量生成<br>• 768P<br>• ¥0.26<br>• ¥0.26<br>• ¥0.13 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.16 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.16 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.16 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.16 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.13 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      更低的成本，适合创意尝试与批量生成<br>• 480P<br>• ¥0.16<br>• ¥0.16<br>• ¥0.13 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-Lite<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| models › 记录 MiniMax-H3-Lite › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Lite › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Max › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.97 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.97 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      支持图片、视频和音频参考，适合多素材视频创作<br>• 768P<br>• ¥0.50<br>• ¥0.97<br>• ¥0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.33 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.33 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.37 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.37 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      支持图片、视频和音频参考，适合多素材视频创作<br>• 480P<br>• ¥0.33<br>• ¥0.37<br>• ¥0.50 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-Max<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| models › 记录 MiniMax-H3-Max › source category | 新增 | 未记录 | 视频模型 |
| models › 记录 MiniMax-H3-Max › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-H3-Regeneration › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Regeneration |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型/接口<br>• 规格<br>• 输出视频 每秒<br>• 输入视频 每秒<br>• 输入图片 每张 超出免费额度后 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › 金额（amount_decimal） | 新增 | 未记录 | 0.30 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › source header | 新增 | 未记录 | 输出视频 每秒 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › source value | 新增 | 未记录 | ¥0.30 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › 金额（amount_decimal） | 新增 | 未记录 | 0.15 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › source header | 新增 | 未记录 | 输入图片 每张 超出免费额度后 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › source value | 新增 | 未记录 | ¥0.15 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › 金额（amount_decimal） | 新增 | 未记录 | 0.30 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › source header | 新增 | 未记录 | 输入视频 每秒 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › source value | 新增 | 未记录 | ¥0.30 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 视频再生成 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • MiniMax-H3-Regeneration<br>• 768P → 2K<br>• ¥0.30<br>• ¥0.30<br>• ¥0.15 |
| models › 记录 MiniMax-H3-Regeneration › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Regeneration › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.80 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.80 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.80 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.80 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3\<br>      画质优先，适合高品质视频创作<br>• 2K<br>• ¥0.80<br>• ¥0.80<br>• ¥0.20 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | ¥ |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.50 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.50 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3\<br>      画质优先，适合高品质视频创作<br>• 768P<br>• ¥0.50<br>• ¥0.50<br>• ¥0.20 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • 对比项<br>• 语音资源包<br>• 视频资源包 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | 适用范围 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • 适用模型<br>• HD 与 Turbo 系列分别对应各自资源包<br>• Hailuo 系列；暂不支持 MiniMax H3 |
| models › 记录 MiniMax-H3 › source category | 新增 | 未记录 | 视频模型 |
| models › 记录 MiniMax-H3 › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-Hailuo-02 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 文生视频，图生视频，768P 6s<br>• 2.00 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 文生视频，图生视频，768P 10s<br>• 4.00 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 文生视频，图生视频，1080P 6s<br>• 3.50 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 图生视频，512P 6s<br>• 0.60 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 图生视频，512P 10s<br>• 1.00 |
| models › 记录 MiniMax-Hailuo-02 › source category | 新增 | 未记录 | 视频模型 |
| models › 记录 MiniMax-Hailuo-02 › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• 图生视频，768P 6s<br>• 1.35 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• 图生视频，768P 10s<br>• 2.25 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• 图生视频，1080P 6s<br>• 2.31 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › source category | 新增 | 未记录 | 视频模型 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-Hailuo-2.3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• 文生视频，图生视频，768P 6s<br>• 2.00 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• 文生视频，图生视频，768P 10s<br>• 4.00 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• 文生视频，图生视频，1080P 6s<br>• 3.50 |
| models › 记录 MiniMax-Hailuo-2.3 › source category | 新增 | 未记录 | 视频模型 |
| models › 记录 MiniMax-Hailuo-2.3 › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-M2.1-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1-highspeed |
| models › 记录 MiniMax-M2.1-highspeed › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.1-highspeed › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M2.1-highspeed › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.1-highspeed › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-M2.1 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1 |
| models › 记录 MiniMax-M2.1 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.1 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M2.1 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.1 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-M2.5-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5-highspeed |
| models › 记录 MiniMax-M2.5-highspeed › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.5-highspeed › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M2.5-highspeed › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.5-highspeed › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-M2.5 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5 |
| models › 记录 MiniMax-M2.5 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.5 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M2.5 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.5 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-M2.7-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7-highspeed |
| models › 记录 MiniMax-M2.7-highspeed › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.7-highspeed › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M2.7-highspeed › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.7-highspeed › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-M2.7 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7 |
| models › 记录 MiniMax-M2.7 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.7 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M2.7 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.7 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-M2 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2 |
| models › 记录 MiniMax-M2 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M2 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 MiniMax-M3.1-Flash › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3.1-Flash |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › 金额（amount_decimal） | 新增 | 未记录 | 0.10 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › source value | 新增 | 未记录 | 0.10 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 金额（amount_decimal） | 新增 | 未记录 | 1.00 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source value | 新增 | 未记录 | 1.00 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 金额（amount_decimal） | 新增 | 未记录 | 4.00 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source value | 新增 | 未记录 | 4.00 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • MiniMax-M3.1-Flash<br>• 1.00<br>• 4.00<br>• 0.10 |
| models › 记录 MiniMax-M3.1-Flash › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M3.1-Flash › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-M3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.10 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 4.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~4.20~~ 2.10 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 8.40 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 16.80 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~16.80~~ 8.40 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.42 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.84 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~0.84~~ 0.42 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k 输入 tokens 永久五折<br>• ~~4.20~~ 2.10<br>• ~~16.80~~ 8.40<br>• ~~0.84~~ 0.42 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 4.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 8.40 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~8.40~~ 4.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 16.80 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 33.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~33.60~~ 16.80 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.84 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 1.68 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~1.68~~ 0.84 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k 输入 tokens\* 永久五折<br>• ~~8.40~~ 4.20<br>• ~~33.60~~ 16.80<br>• ~~1.68~~ 0.84 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.15 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 6.30 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~6.30~~ 3.15 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 12.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 25.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~25.20~~ 12.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.63 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 1.26 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~1.26~~ 0.63 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k 输入 tokens 永久五折<br>• ~~6.30~~ 3.15<br>• ~~25.20~~ 12.60<br>• ~~1.26~~ 0.63 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 6.30 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 12.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~12.60~~ 6.30 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 25.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 50.40 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~50.40~~ 25.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.26 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 2.52 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~2.52~~ 1.26 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k 输入 tokens 永久五折<br>• ~~12.60~~ 6.30<br>• ~~50.40~~ 25.20<br>• ~~2.52~~ 1.26 |
| models › 记录 MiniMax-M3 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 MiniMax-M3 › source listing | 新增 | 未记录 | available |
| models › 记录 Music-2.0 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.0 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 金额（amount_decimal） | 新增 | 未记录 | 0.25 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › quantity | 新增 | 未记录 | 1 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source header | 新增 | 未记录 | 单价  元/首 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source value | 新增 | 未记录 | 0.25 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计量单位（unit） | 新增 | 未记录 | per_song |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 计费与使用 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.0（已下线）<br>• 0.25 |
| models › 记录 Music-2.0 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 Music-2.0 › source listing | 新增 | 未记录 | historical |
| models › 记录 Music-2.0 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 Music-2.5+ › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5+ |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › quantity | 新增 | 未记录 | 1 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source header | 新增 | 未记录 | 单价  元/首 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source value | 新增 | 未记录 | 1.0 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计量单位（unit） | 新增 | 未记录 | per_song |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 计费与使用 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.5+（已下线）<br>• 1.0 |
| models › 记录 Music-2.5+ › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 Music-2.5+ › source listing | 新增 | 未记录 | historical |
| models › 记录 Music-2.5+ › source status | 新增 | 未记录 | 已下线 |
| models › 记录 Music-2.5 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › quantity | 新增 | 未记录 | 1 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source header | 新增 | 未记录 | 单价  元/首 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source value | 新增 | 未记录 | 1.0 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计量单位（unit） | 新增 | 未记录 | per_song |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 计费与使用 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.5（已下线）<br>• 1.0 |
| models › 记录 Music-2.5 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 Music-2.5 › source listing | 新增 | 未记录 | historical |
| models › 记录 Music-2.5 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 image-01-live › 模型 ID（model_id） | 新增 | 未记录 | image-01-live |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 接口说明<br>• 单价  元/张 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 计费指标（metric） | 新增 | 未记录 | generated_image |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › quantity | 新增 | 未记录 | 1 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › source header | 新增 | 未记录 | 单价  元/张 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › source value | 新增 | 未记录 | 0.025 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 图像 |
| models › 记录 image-01-live › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • image-01 image-01-live<br>• 支持用户通过文本描述或参考图片生成图片<br>• 0.025 |
| models › 记录 image-01-live › source category | 新增 | 未记录 | 图像模型 |
| models › 记录 image-01-live › source listing | 新增 | 未记录 | available |
| models › 记录 image-01 › 模型 ID（model_id） | 新增 | 未记录 | image-01 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 接口说明<br>• 单价  元/张 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 计费指标（metric） | 新增 | 未记录 | generated_image |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › quantity | 新增 | 未记录 | 1 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › source header | 新增 | 未记录 | 单价  元/张 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › source value | 新增 | 未记录 | 0.025 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 图像 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • image-01 image-01-live<br>• 支持用户通过文本描述或参考图片生成图片<br>• 0.025 |
| models › 记录 image-01 › source category | 新增 | 未记录 | 图像模型 |
| models › 记录 image-01 › source listing | 新增 | 未记录 | available |
| models › 记录 music-2.6-free › 模型 ID（model_id） | 新增 | 未记录 | music-2.6-free |
| models › 记录 music-2.6-free › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-2.6-free › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 music-2.6-free › source listing | 新增 | 未记录 | historical |
| models › 记录 music-2.6-free › source status | 新增 | 未记录 | 已下线 |
| models › 记录 music-2.6 › 模型 ID（model_id） | 新增 | 未记录 | music-2.6 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › quantity | 新增 | 未记录 | 1 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source header | 新增 | 未记录 | 单价  元/首 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source value | 新增 | 未记录 | 1.0 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计量单位（unit） | 新增 | 未记录 | per_song |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 计费与使用 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.6（已下线）<br>• 1.0 |
| models › 记录 music-2.6 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 music-2.6 › source listing | 新增 | 未记录 | historical |
| models › 记录 music-2.6 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 music-3.0-free › 模型 ID（model_id） | 新增 | 未记录 | music-3.0-free |
| models › 记录 music-3.0-free › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-3.0-free › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 music-3.0-free › source listing | 新增 | 未记录 | historical |
| models › 记录 music-3.0-free › source status | 新增 | 未记录 | 已下线 |
| models › 记录 music-3.0 › 模型 ID（model_id） | 新增 | 未记录 | music-3.0 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | CNY |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › quantity | 新增 | 未记录 | 1 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source header | 新增 | 未记录 | 单价  元/首 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › source value | 新增 | 未记录 | 1.0 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_audio › 计量单位（unit） | 新增 | 未记录 | per_song |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | 计费与使用 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-3.0（已下线）<br>• 1.0 |
| models › 记录 music-3.0 › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 music-3.0 › source listing | 新增 | 未记录 | historical |
| models › 记录 music-3.0 › source status | 新增 | 未记录 | 已下线 |
| models › 记录 music-cover-free › 模型 ID（model_id） | 新增 | 未记录 | music-cover-free |
| models › 记录 music-cover-free › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-cover-free › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 music-cover-free › source listing | 新增 | 未记录 | historical |
| models › 记录 music-cover-free › source status | 新增 | 未记录 | 已下线 |
| models › 记录 music-cover › 模型 ID（model_id） | 新增 | 未记录 | music-cover |
| models › 记录 music-cover › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-cover › source category | 新增 | 未记录 | 语言模型 |
| models › 记录 music-cover › source listing | 新增 | 未记录 | historical |
| models › 记录 music-cover › source status | 新增 | 未记录 | 已下线 |
| models › 记录 speech-02-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-02-hd |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| models › 记录 speech-02-hd › source category | 新增 | 未记录 | 语音模型 |
| models › 记录 speech-02-hd › source listing | 新增 | 未记录 | available |
| models › 记录 speech-02-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-02-turbo |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| models › 记录 speech-02-turbo › source category | 新增 | 未记录 | 语音模型 |
| models › 记录 speech-02-turbo › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.6-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-hd |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| models › 记录 speech-2.6-hd › source category | 新增 | 未记录 | 语音模型 |
| models › 记录 speech-2.6-hd › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.6-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-turbo |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 音色管理 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| models › 记录 speech-2.6-turbo › source category | 新增 | 未记录 | 语音模型 |
| models › 记录 speech-2.6-turbo › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.8-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 语音合成（TTS） |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.8-hd<br>• 支持音量、语调、语速调整和混音，支持比特率、采样率相关参数调整，支持音频时长、音频大小等返回参数。适用于短文本快速合成，如闲聊、对话等场景。<br>• 3.50 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 语音合成（TTS） |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.8-hd<br>• 支持文本到语音的异步生成，单次最大支持 100 万字符，生成结果支持异步检索。<br>• 3.50 |
| models › 记录 speech-2.8-hd › source category | 新增 | 未记录 | 语音模型 |
| models › 记录 speech-2.8-hd › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.8-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 语音合成（TTS） |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.8-turbo<br>• 同上，速度更快、成本更低。<br>• 2.00 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | CNY |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | 元 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 语音合成（TTS） |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.8-turbo<br>• 同上，速度更快、成本更低。<br>• 2.00 |
| models › 记录 speech-2.8-turbo › source category | 新增 | 未记录 | 语音模型 |
| models › 记录 speech-2.8-turbo › source listing | 新增 | 未记录 | available |
| music model overview › access notice | 新增 | 未记录 | 自 2026 年 8 月 20 日起，付费接口（音乐生成、歌词生成）不再面向新用户提供服务，历史付费用户可继续使用现有 API 服务；免费音乐生成接口（Music-3.0-free、Music-2.6-free、music-cover-free）停止服务。 |
| music model overview › current model ids | 新增 | 未记录 | • music-2.6<br>• music-3.0<br>• music-cover |
| music model overview › legacy model ids | 新增 | 未记录 | 空列表 |
| plan descriptions › 第 1 项 › 说明（description） | 新增 | 未记录 | 入门使用，完成简单调研、轻量写作或小范围的代码修改。 |
| plan descriptions › 第 1 项 › locator | 新增 | 未记录 | #用量额度/table/1 |
| plan descriptions › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-intro |
| plan descriptions › 第 1 项 › 服务档位（tier） | 新增 | 未记录 | Go |
| plan descriptions › 第 2 项 › 说明（description） | 新增 | 未记录 | 每天使用，日常辅助编程、写作与资料整理，处理多轮任务。 |
| plan descriptions › 第 2 项 › locator | 新增 | 未记录 | #用量额度/table/2 |
| plan descriptions › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-intro |
| plan descriptions › 第 2 项 › 服务档位（tier） | 新增 | 未记录 | Explore |
| plan descriptions › 第 3 项 › 说明（description） | 新增 | 未记录 | 高频使用，处理长上下文、复杂的编程任务或大量多模态创作。 |
| plan descriptions › 第 3 项 › locator | 新增 | 未记录 | #用量额度/table/3 |
| plan descriptions › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-intro |
| plan descriptions › 第 3 项 › 服务档位（tier） | 新增 | 未记录 | Build |
| plan multipliers | 新增 | 未记录 | 空列表 |

### 记录 global

#### Record / global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 能力（capabilities） › 记录 file-management › ID（id） | 新增 | 未记录 | file-management |
| 能力（capabilities） › 记录 file-management › 输入（input） › 记录 file › 类别（kind） | 新增 | 未记录 | file |
| 能力（capabilities） › 记录 file-management › 输入（input） › 记录 file › 名称（name） | 新增 | 未记录 | file |
| 能力（capabilities） › 记录 file-management › 输入（input） › 记录 file › 是否必填（required） | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 file-management › 类别（kind） | 新增 | 未记录 | file_storage |
| 能力（capabilities） › 记录 file-management › HTTP 方法（method） | 新增 | 未记录 | POST |
| 能力（capabilities） › 记录 file-management › 操作 ID（operation_id） | 新增 | 未记录 | file-upload |
| 能力（capabilities） › 记录 file-management › operation kind | 新增 | 未记录 | file_upload |
| 能力（capabilities） › 记录 file-management › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • file.file_id<br>• file.bytes<br>• file.created_at<br>• file.filename<br>• file.purpose<br>• base_resp.status_code<br>• base_resp.status_msg |
| 能力（capabilities） › 记录 file-management › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 可选值（enum） | 新增 | 未记录 | • voice_clone<br>• prompt_audio<br>• t2a_async_input<br>• video_understanding<br>• video_generation_input |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 名称（name） | 新增 | 未记录 | purpose |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 是否必填（required） | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 参数路径（route_mappings） | 新增 | 未记录 | • multipart/form-data.purpose |
| 能力（capabilities） › 记录 file-management › 参数（parameters） › 记录 purpose › 类型（type） | 新增 | 未记录 | string |
| 能力（capabilities） › 记录 file-management › 路径（path） | 新增 | 未记录 | /files/upload |
| 能力（capabilities） › 记录 file-management › requires plan | 新增 | 未记录 | 否 |
| 能力（capabilities） › 记录 file-management › source suffix | 新增 | 未记录 | file-upload-api |
| 能力（capabilities） › 记录 image-understanding › ID（id） | 新增 | 未记录 | image-understanding |
| 能力（capabilities） › 记录 image-understanding › 类别（kind） | 新增 | 未记录 | image_understanding |
| 能力（capabilities） › 记录 image-understanding › 操作 ID（operation_id） | 新增 | 未记录 | understand-image-mcp |
| 能力（capabilities） › 记录 image-understanding › operation kind | 新增 | 未记录 | image_understanding |
| 能力（capabilities） › 记录 image-understanding › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 能力（capabilities） › 记录 image-understanding › requires plan | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 image-understanding › source suffix | 新增 | 未记录 | mcp-guide |
| 能力（capabilities） › 记录 web-search › ID（id） | 新增 | 未记录 | web-search |
| 能力（capabilities） › 记录 web-search › 类别（kind） | 新增 | 未记录 | web_search |
| 能力（capabilities） › 记录 web-search › 操作 ID（operation_id） | 新增 | 未记录 | web-search-mcp |
| 能力（capabilities） › 记录 web-search › operation kind | 新增 | 未记录 | web_search |
| 能力（capabilities） › 记录 web-search › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 能力（capabilities） › 记录 web-search › requires plan | 新增 | 未记录 | 是 |
| 能力（capabilities） › 记录 web-search › source suffix | 新增 | 未记录 | mcp-guide |
| 市场（market） | 新增 | 未记录 | global |
| models › 记录 M2-her › 模型 ID（model_id） | 新增 | 未记录 | M2-her |
| models › 记录 M2-her › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 M2-her › source category | 新增 | 未记录 | LLM |
| models › 记录 M2-her › source listing | 新增 | 未记录 | historical |
| models › 记录 M2-her › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-H3-Context-IR › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Context-IR |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model / API<br>• Input Price per M tokens<br>• Output Price per M tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 金额（amount_decimal） | 新增 | 未记录 | 0.90 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source header | 新增 | 未记录 | Input Price per M tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source value | 新增 | 未记录 | $0.90 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 金额（amount_decimal） | 新增 | 未记录 | 3.60 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source header | 新增 | 未记录 | Output Price per M tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source value | 新增 | 未记录 | $3.60 |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-H3-Context-IR › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • MiniMax-H3-Context-IR<br>• $0.90<br>• $3.60 |
| models › 记录 MiniMax-H3-Context-IR › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Context-IR › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.06 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.06 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.03 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.03 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 768P<br>• $0.06<br>• $0.06<br>• $0.03 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.03 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.03 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 480P<br>• $0.04<br>• $0.04<br>• $0.03 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Highspeed › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-Highspeed<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3-Highspeed › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Highspeed › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Lite › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.02 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.02 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 768P<br>• $0.04<br>• $0.04<br>• $0.02 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.025 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.025 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.02 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.02 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 480P<br>• $0.025<br>• $0.025<br>• $0.02 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Lite › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-Lite<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3-Lite › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Lite › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Max › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.08 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.08 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.143 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.143 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.074 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.074 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 768P<br>• $0.08<br>• $0.143<br>• $0.074 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.05 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.05 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.0553 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.0553 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.074 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.074 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 480P<br>• $0.05<br>• $0.0553<br>• $0.074 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-Max<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3-Max › source category | 新增 | 未记录 | Video Models |
| models › 记录 MiniMax-H3-Max › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-H3-Regeneration › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Regeneration |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model / API<br>• Spec<br>• Output Video per second<br>• Input Video per second<br>• Input Image per image beyond free quota |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › 金额（amount_decimal） | 新增 | 未记录 | 0.05 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › source header | 新增 | 未记录 | Output Video per second |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › source value | 新增 | 未记录 | $0.05 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_video › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › source header | 新增 | 未记录 | Input Image per image beyond free quota |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › source value | 新增 | 未记录 | $0.025 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › 金额（amount_decimal） | 新增 | 未记录 | 0.05 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › source header | 新增 | 未记录 | Input Video per second |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › source value | 新增 | 未记录 | $0.05 |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input_video › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Video Regeneration |
| models › 记录 MiniMax-H3-Regeneration › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • MiniMax-H3-Regeneration<br>• 768P → 2K<br>• $0.05<br>• $0.05<br>• $0.025 |
| models › 记录 MiniMax-H3-Regeneration › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Regeneration › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.13 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.13 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 2K<br>• $0.13<br>• $0.13<br>• $0.04 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.08 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.08 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.08 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.08 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 768P<br>• $0.08<br>• $0.08<br>• $0.04 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • Feature<br>• Audio<br>• Video |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | Coverage |
| models › 记录 MiniMax-H3 › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • Supported models<br>• All speech models<br>• Hailuo video models; MiniMax H3 is not supported yet |
| models › 记录 MiniMax-H3 › source category | 新增 | 未记录 | Video Models |
| models › 记录 MiniMax-H3 › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-Hailuo-02 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.28 per 768P, 6s video |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.56 per 768P, 10s video |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.49 per 1080P, 6s video |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.10 per 512P, 6s video |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-02 › 价格记录（pricing_rows） › 第 5 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.15 per 512P, 10s video |
| models › 记录 MiniMax-Hailuo-02 › source category | 新增 | 未记录 | Video Models |
| models › 记录 MiniMax-Hailuo-02 › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• $0.19 per 768P, 6s video |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• $0.32 per 768P, 10s video |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3-Fast › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• $0.33 per 1080P, 6s video |
| models › 记录 MiniMax-Hailuo-2.3-Fast › source category | 新增 | 未记录 | Video Models |
| models › 记录 MiniMax-Hailuo-2.3-Fast › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-Hailuo-2.3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• $0.28 per 768P, 6s video |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• $0.56 per 768P, 10s video |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | Context-IR |
| models › 记录 MiniMax-Hailuo-2.3 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• $0.49 per 1080P, 6s video |
| models › 记录 MiniMax-Hailuo-2.3 › source category | 新增 | 未记录 | Video Models |
| models › 记录 MiniMax-Hailuo-2.3 › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-M2.1-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1-highspeed |
| models › 记录 MiniMax-M2.1-highspeed › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.1-highspeed › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M2.1-highspeed › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.1-highspeed › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-M2.1 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1 |
| models › 记录 MiniMax-M2.1 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.1 › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M2.1 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.1 › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-M2.5-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5-highspeed |
| models › 记录 MiniMax-M2.5-highspeed › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.5-highspeed › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M2.5-highspeed › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.5-highspeed › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-M2.5 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5 |
| models › 记录 MiniMax-M2.5 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.5 › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M2.5 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.5 › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-M2.7-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7-highspeed |
| models › 记录 MiniMax-M2.7-highspeed › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.7-highspeed › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M2.7-highspeed › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.7-highspeed › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-M2.7 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7 |
| models › 记录 MiniMax-M2.7 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2.7 › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M2.7 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2.7 › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-M2 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2 |
| models › 记录 MiniMax-M2 › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-M2 › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M2 › source listing | 新增 | 未记录 | historical |
| models › 记录 MiniMax-M2 › source status | 新增 | 未记录 | Retired |
| models › 记录 MiniMax-M3.1-Flash › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3.1-Flash |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › 金额（amount_decimal） | 新增 | 未记录 | 0.015 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › source value | 新增 | 未记录 | $0.015 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 金额（amount_decimal） | 新增 | 未记录 | 0.15 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source header | 新增 | 未记录 | Input $ / M tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › source value | 新增 | 未记录 | $0.15 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 金额（amount_decimal） | 新增 | 未记录 | 0.60 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source header | 新增 | 未记录 | Output $ / M tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › source value | 新增 | 未记录 | $0.60 |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M3.1-Flash › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • MiniMax-M3.1-Flash<br>• $0.15<br>• $0.60<br>• $0.015 |
| models › 记录 MiniMax-M3.1-Flash › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M3.1-Flash › source listing | 新增 | 未记录 | available |
| models › 记录 MiniMax-M3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.30 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 0.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$0.60~~ $0.30 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 2.40 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$2.40~~ $1.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.12 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.12~~ $0.06 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.60~~ $0.30<br>• ~~$2.40~~ $1.20<br>• ~~$0.12~~ $0.06 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 1.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$1.20~~ $0.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.40 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 4.80 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$4.80~~ $2.40 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.12 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.24 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.24~~ $0.12 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k input tokens\* Permanent 50% off<br>• ~~$1.20~~ $0.60<br>• ~~$4.80~~ $2.40<br>• ~~$0.24~~ $0.12 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.45 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 0.90 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$0.90~~ $0.45 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.80 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 3.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$3.60~~ $1.80 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.09 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.18 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.18~~ $0.09 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.90~~ $0.45<br>• ~~$3.60~~ $1.80<br>• ~~$0.18~~ $0.09 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.90 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 1.80 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$1.80~~ $0.90 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 7.20 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$7.20~~ $3.60 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.18 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.36 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.36~~ $0.18 |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M3 › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k input tokens Permanent 50% off<br>• ~~$1.80~~ $0.90<br>• ~~$7.20~~ $3.60<br>• ~~$0.36~~ $0.18 |
| models › 记录 MiniMax-M3 › source category | 新增 | 未记录 | LLM |
| models › 记录 MiniMax-M3 › source listing | 新增 | 未记录 | available |
| models › 记录 Music-2.0 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.0 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Billing and Usage |
| models › 记录 Music-2.0 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.0<br>• $0.03 per track (up to 5 minutes) |
| models › 记录 Music-2.0 › source category | 新增 | 未记录 | LLM |
| models › 记录 Music-2.0 › source listing | 新增 | 未记录 | historical |
| models › 记录 Music-2.0 › source status | 新增 | 未记录 | Retired |
| models › 记录 Music-2.5+ › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5+ |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Billing and Usage |
| models › 记录 Music-2.5+ › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.5+<br>• $0.15 per track (up to 5 minutes) |
| models › 记录 Music-2.5+ › source category | 新增 | 未记录 | LLM |
| models › 记录 Music-2.5+ › source listing | 新增 | 未记录 | historical |
| models › 记录 Music-2.5+ › source status | 新增 | 未记录 | Retired |
| models › 记录 Music-2.5 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Billing and Usage |
| models › 记录 Music-2.5 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.5<br>• $0.15 per track (up to 5 minutes) |
| models › 记录 Music-2.5 › source category | 新增 | 未记录 | LLM |
| models › 记录 Music-2.5 › source listing | 新增 | 未记录 | historical |
| models › 记录 Music-2.5 › source status | 新增 | 未记录 | Retired |
| models › 记录 image-01-live › 模型 ID（model_id） | 新增 | 未记录 | image-01-live |
| models › 记录 image-01-live › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 image-01-live › source category | 新增 | 未记录 | Image Models |
| models › 记录 image-01-live › source listing | 新增 | 未记录 | available |
| models › 记录 image-01 › 模型 ID（model_id） | 新增 | 未记录 | image-01 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 金额（amount_decimal） | 新增 | 未记录 | 0.0035 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 计费指标（metric） | 新增 | 未记录 | generated_image |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › quantity | 新增 | 未记录 | 1 |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › source header | 新增 | 未记录 | Price |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › source value | 新增 | 未记录 | $0.0035 per image |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_image › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Image |
| models › 记录 image-01 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • image-01<br>• $0.0035 per image |
| models › 记录 image-01 › source category | 新增 | 未记录 | Image Models |
| models › 记录 image-01 › source listing | 新增 | 未记录 | available |
| models › 记录 music-2.6-free › 模型 ID（model_id） | 新增 | 未记录 | music-2.6-free |
| models › 记录 music-2.6-free › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-2.6-free › source category | 新增 | 未记录 | LLM |
| models › 记录 music-2.6-free › source listing | 新增 | 未记录 | historical |
| models › 记录 music-2.6-free › source status | 新增 | 未记录 | Retired |
| models › 记录 music-2.6 › 模型 ID（model_id） | 新增 | 未记录 | music-2.6 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Billing and Usage |
| models › 记录 music-2.6 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-2.6<br>• $0.15 per track (up to 5 minutes) |
| models › 记录 music-2.6 › source category | 新增 | 未记录 | LLM |
| models › 记录 music-2.6 › source listing | 新增 | 未记录 | historical |
| models › 记录 music-2.6 › source status | 新增 | 未记录 | Retired |
| models › 记录 music-3.0-free › 模型 ID（model_id） | 新增 | 未记录 | music-3.0-free |
| models › 记录 music-3.0-free › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-3.0-free › source category | 新增 | 未记录 | LLM |
| models › 记录 music-3.0-free › source listing | 新增 | 未记录 | historical |
| models › 记录 music-3.0-free › source status | 新增 | 未记录 | Retired |
| models › 记录 music-3.0 › 模型 ID（model_id） | 新增 | 未记录 | music-3.0 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • Model<br>• Price |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Billing and Usage |
| models › 记录 music-3.0 › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • Music-3.0<br>• $0.15 per track (up to 5 minutes) |
| models › 记录 music-3.0 › source category | 新增 | 未记录 | LLM |
| models › 记录 music-3.0 › source listing | 新增 | 未记录 | historical |
| models › 记录 music-3.0 › source status | 新增 | 未记录 | Retired |
| models › 记录 music-cover-free › 模型 ID（model_id） | 新增 | 未记录 | music-cover-free |
| models › 记录 music-cover-free › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-cover-free › source category | 新增 | 未记录 | LLM |
| models › 记录 music-cover-free › source listing | 新增 | 未记录 | historical |
| models › 记录 music-cover-free › source status | 新增 | 未记录 | Retired |
| models › 记录 music-cover › 模型 ID（model_id） | 新增 | 未记录 | music-cover |
| models › 记录 music-cover › 价格记录（pricing_rows） | 新增 | 未记录 | 空列表 |
| models › 记录 music-cover › source category | 新增 | 未记录 | LLM |
| models › 记录 music-cover › source listing | 新增 | 未记录 | historical |
| models › 记录 music-cover › source status | 新增 | 未记录 | Retired |
| models › 记录 speech-02-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-02-hd |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source header | 新增 | 未记录 | Price |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source value | 新增 | 未记录 | $100/M characters |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Voice Management |
| models › 记录 speech-02-hd › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters |
| models › 记录 speech-02-hd › source category | 新增 | 未记录 | Speech Models |
| models › 记录 speech-02-hd › source listing | 新增 | 未记录 | available |
| models › 记录 speech-02-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-02-turbo |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source header | 新增 | 未记录 | Price |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source value | 新增 | 未记录 | $60/M characters |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Voice Management |
| models › 记录 speech-02-turbo › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters |
| models › 记录 speech-02-turbo › source category | 新增 | 未记录 | Speech Models |
| models › 记录 speech-02-turbo › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.6-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-hd |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source header | 新增 | 未记录 | Price |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source value | 新增 | 未记录 | $100/M characters |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Voice Management |
| models › 记录 speech-2.6-hd › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters |
| models › 记录 speech-2.6-hd › source category | 新增 | 未记录 | Speech Models |
| models › 记录 speech-2.6-hd › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.6-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-turbo |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source header | 新增 | 未记录 | Price |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › source value | 新增 | 未记录 | $60/M characters |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › normalized rates › 记录 generated_character › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › section | 新增 | 未记录 | Voice Management |
| models › 记录 speech-2.6-turbo › 价格记录（pricing_rows） › 记录 0 › values | 新增 | 未记录 | • T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters |
| models › 记录 speech-2.6-turbo › source category | 新增 | 未记录 | Speech Models |
| models › 记录 speech-2.6-turbo › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.8-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $100 / M characters |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • T2A (Sync)<br>• speech-2.8-hd<br>• Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio.<br>• $100 / M characters |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $100 / M characters |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| models › 记录 speech-2.8-hd › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • T2A Async<br>• speech-2.8-hd<br>• Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously.<br>• $100 / M characters |
| models › 记录 speech-2.8-hd › source category | 新增 | 未记录 | Speech Models |
| models › 记录 speech-2.8-hd › source listing | 新增 | 未记录 | available |
| models › 记录 speech-2.8-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $60 / M characters |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • T2A (Sync)<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $60 / M characters |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| models › 记录 speech-2.8-turbo › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • T2A Async<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters |
| models › 记录 speech-2.8-turbo › source category | 新增 | 未记录 | Speech Models |
| models › 记录 speech-2.8-turbo › source listing | 新增 | 未记录 | available |
| music model overview › access notice | 新增 | 未记录 | Starting August 20, 2026, the paid APIs (Music Generation and Lyrics Generation) will no longer be available to new users; existing paying users can continue to use the current API services. The free music generation APIs (Music-3.0-free, Music-2.6-free, music-cover-free) will be discontinued. |
| music model overview › current model ids | 新增 | 未记录 | • music-2.0<br>• music-2.6<br>• music-3.0<br>• music-cover |
| music model overview › legacy model ids | 新增 | 未记录 | 空列表 |
| plan descriptions › 第 1 项 › 说明（description） | 新增 | 未记录 | Getting started with simple research, light writing, or small code changes. |
| plan descriptions › 第 1 项 › locator | 新增 | 未记录 | #usage-limits/table/1 |
| plan descriptions › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-intro |
| plan descriptions › 第 1 项 › 服务档位（tier） | 新增 | 未记录 | Go |
| plan descriptions › 第 2 项 › 说明（description） | 新增 | 未记录 | Daily use for coding, writing, organizing information, and multi-turn tasks. |
| plan descriptions › 第 2 项 › locator | 新增 | 未记录 | #usage-limits/table/2 |
| plan descriptions › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-intro |
| plan descriptions › 第 2 项 › 服务档位（tier） | 新增 | 未记录 | Explore |
| plan descriptions › 第 3 项 › 说明（description） | 新增 | 未记录 | Frequent use for long-context work, complex coding tasks, or extensive multimodal creation. |
| plan descriptions › 第 3 项 › locator | 新增 | 未记录 | #usage-limits/table/3 |
| plan descriptions › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-intro |
| plan descriptions › 第 3 项 › 服务档位（tier） | 新增 | 未记录 | Build |
| plan multipliers | 新增 | 未记录 | 空列表 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `minimax-cn-model-catalog` · MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-05T12:30:16.581Z | 200 | `sha256:a222962f400cae8a8e000a9ff777abb2875bd1e43e92e841fb1ef40a2be17878` |
| cn | `minimax-cn-pricing` · MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-05T12:30:15.333Z | 200 | `sha256:e23bbc8a65e411efbcf7a573ba68540d60f01b6b0b29fcbbaf895cde19b0bea9` |
| cn | `minimax-cn-video-api` · MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-05T12:30:16.496Z | 200 | `sha256:9a7276b7418755a8e7c5ff8e3819dd58b498eb7901fbdc5c5bf25df206905914` |
| cn | `minimax-cn-video-guide` · MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-05T12:30:15.709Z | 200 | `sha256:ac488c697aded1730769d9c7d0b93b13642ade8bbe6779e30a7f1ba52b6797fa` |
| cn | `minimax-cn-asr-api` · MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-05T12:30:15.510Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | `minimax-cn-audio-guide` · MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-05T12:30:16.763Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | `minimax-cn-image-guide` · MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-05T12:30:16.022Z | 200 | `sha256:3e526755c01aa08b42c952a920d4a7cf4201611328ed579501540d2b3d767d87` |
| cn | `minimax-cn-model-overview` · MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-05T12:30:15.834Z | 200 | `sha256:f1310b1fb757cb0cf804530fc2c2a7d8d9f8a346a4d314396c2bbfdcc70a4819` |
| cn | `minimax-cn-anthropic-api` · MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-05T12:30:16.057Z | 200 | `sha256:cbb574d27cee8da9ee052be1cfa1897f55eb2f36eda15b28b6cc0543eeec835c` |
| cn | `minimax-cn-function-call-api` · MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-05T12:30:16.973Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | `minimax-cn-responses-api` · MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-05T12:30:18.157Z | 200 | `sha256:80a696108b9e34f39677e6ce092a7c6ac291a64cb10953c8b1c44f586d98aa6d` |
| cn | `minimax-cn-file-upload-api` · MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-05T12:30:18.539Z | 200 | `sha256:06409fe8aea3d900c63a2f55c06690f8c8335a8935b96baa4c9dd75eea7d9c9f` |
| cn | `minimax-cn-mcp-guide` · MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-05T12:30:16.708Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | `minimax-cn-m-plan-page` · MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-05T13:35:57.057Z | 200 | `sha256:479e0405f8d486cf4b45a946cfadca65fc66993e2f7c11ff1df480fb78dea0cf` |
| cn | `minimax-cn-m-plan-intro` · MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-05T12:30:19.010Z | 200 | `sha256:70a203c1e5ee7c554b09c4443b30562d85dc7d5039aeec9e680342d7f0328201` |
| global | `minimax-global-model-catalog` · MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-05T12:30:16.480Z | 200 | `sha256:2768cac752b3950fe0e4664c6a9ab029ba491f3a4a889dcd1f187fed368903df` |
| global | `minimax-global-video-guide` · MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-05T12:30:16.648Z | 200 | `sha256:dc74ab9682067530450f2ba21b74d8aa7c71c349de09569d0d5f86a725007a3b` |
| global | `minimax-global-audio-guide` · MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-05T12:30:16.548Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | `minimax-global-image-guide` · MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-05T12:30:16.778Z | 200 | `sha256:3dde0949bd6bbda3f797c4be55176f5c8d065353ce44f6799d1e2913f1bac7e5` |
| global | `minimax-global-model-overview` · MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-05T12:30:16.502Z | 200 | `sha256:2d1c470744605b2244951f5a5a4f5a0052808d2964d27ab4aff69d8256456f24` |
| global | `minimax-global-pricing` · MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-05T12:30:16.668Z | 200 | `sha256:0f68524c7eea27db3c54380f776e344fe40ef63a61c966ed4ec0c1b3f8894863` |
| global | `minimax-global-file-upload-api` · MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-05T12:30:16.664Z | 200 | `sha256:5633e9f67131ecacfc5f23dcf0a883156b487948fc2b29e93bc0a683bd35747d` |
| global | `minimax-global-mcp-guide` · MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-05T12:30:16.787Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | `minimax-global-anthropic-api` · MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-05T12:30:16.543Z | 200 | `sha256:0af82734b75b96914237bb36551a1b2b25ea29892452a5e8e7f560eb7e863e68` |
| global | `minimax-global-responses-api` · MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-05T12:30:16.568Z | 200 | `sha256:dbad05069e19afac83a48463187e42a2c5dd12b815f30423fe97aaa2ffe76b35` |
| global | `minimax-global-function-call-api` · MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-05T12:30:16.683Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | `minimax-global-m-plan-page` · MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-05T13:35:56.987Z | 200 | `sha256:d7f1261b6d429a1833bbd4f04013176081aa4bcdc1e9ed132aa572975d780605` |
| global | `minimax-global-m-plan-intro` · MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-05T12:30:16.616Z | 200 | `sha256:583172b21eac14a84c3a68b335f46ebf2eeae7471c6d289e9d4ed5624788ea83` |

## minimax 专属证据与核对说明

### MiniMax 数据变更评审表

- Provider：`minimax`
- 候选类型：`regional_current_supply_observation`
- 观察时间（UTC）：2026-11-05T13:35:57.057Z
- 候选指纹：`sha256:e2c4a4286cd5afbc382ddf893522451bca1c892ce141a4b172e8289d39eabc9c`
- 前一候选指纹：`首次观察`
- 新增字段：2068 项；更新字段：0 项；缺席待核实：0 项

#### 本次变化

仅列出相对上一份已观察数据新增或变化的字段，共 2068 项。新模型或此前未取得的字段会完整列出本次取得的内容；未变化的数据不重复展开。列表缺席只表示待核实，不构成退役结论。

| 变化 | 市场 | 模型 ID | 字段 | 旧值 | 新值 |
|---|---|---|---|---|---|
| 新增 | cn | M2-her | model.model&#95;id | 未记录 | M2-her |
| 新增 | cn | M2-her | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | M2-her | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | M2-her | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | M2-her | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-H3 | model.model&#95;id | 未记录 | MiniMax-H3 |
| 新增 | cn | MiniMax-H3 | model.source&#95;category | 未记录 | 视频模型 |
| 新增 | cn | MiniMax-H3 | model.source&#95;listing | 未记录 | available |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3\<br>      画质优先，适合高品质视频创作 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 2K |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ¥0.80 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | ¥0.80 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.80 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.80 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.80 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.80 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.20 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3\<br>      画质优先，适合高品质视频创作 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.50 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.50 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.20 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 文生 t2v |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 图生 i2v |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | 首尾帧 fl2v |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | 参考生 ref |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | 图片、视频、音频 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.section | 未记录 | 适用范围 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | 对比项 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | 语音资源包 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;2&#93; | 未记录 | 视频资源包 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | 适用模型 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | HD 与 Turbo 系列分别对应各自资源包 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.values&#91;2&#93; | 未记录 | Hailuo 系列；暂不支持 MiniMax H3 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-H3-Context-IR | model.model&#95;id | 未记录 | MiniMax-H3-Context-IR |
| 新增 | cn | MiniMax-H3-Context-IR | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | cn | MiniMax-H3-Context-IR | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型/接口 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 输入价格 每百万 tokens |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出价格 每百万 tokens |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Context-IR |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | ¥5.80 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ¥23.00 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 5.80 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输入价格 每百万 tokens |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥5.80 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 23.00 |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输出价格 每百万 tokens |
| 新增 | cn | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥23.00 |
| 新增 | cn | MiniMax-H3-Highspeed | model.model&#95;id | 未记录 | MiniMax-H3-Highspeed |
| 新增 | cn | MiniMax-H3-Highspeed | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | cn | MiniMax-H3-Highspeed | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Highspeed\<br>      兼顾质量与速度，适合日常内容创作 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ¥0.40 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | ¥0.40 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.40 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.40 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.40 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.40 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.20 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Highspeed\<br>      兼顾质量与速度，适合日常内容创作 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.26 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.26 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.20 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.20 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 文生 t2v |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 图生 i2v |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | 首尾帧 fl2v |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | 参考生 ref |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Highspeed |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | 图片、视频、音频 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-H3-Lite | model.model&#95;id | 未记录 | MiniMax-H3-Lite |
| 新增 | cn | MiniMax-H3-Lite | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | cn | MiniMax-H3-Lite | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Lite\<br>      更低的成本，适合创意尝试与批量生成 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | ¥0.13 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.26 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.26 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.26 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.13 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.13 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Lite\<br>      更低的成本，适合创意尝试与批量生成 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | ¥0.16 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | ¥0.16 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | ¥0.13 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.16 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.16 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.16 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.16 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.13 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.13 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 文生 t2v |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 图生 i2v |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | 首尾帧 fl2v |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | 参考生 ref |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Lite |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | 图片、视频、音频 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-H3-Max | model.model&#95;id | 未记录 | MiniMax-H3-Max |
| 新增 | cn | MiniMax-H3-Max | model.source&#95;category | 未记录 | 视频模型 |
| 新增 | cn | MiniMax-H3-Max | model.source&#95;listing | 未记录 | available |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max\<br>      支持图片、视频和音频参考，适合多素材视频创作 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | ¥0.97 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.97 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.97 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 输出分辨率 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max\<br>      支持图片、视频和音频参考，适合多素材视频创作 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | ¥0.33 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | ¥0.37 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.33 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.33 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.37 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频\<br>      每秒 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.37 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.50 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 文生 t2v |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 图生 i2v |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | 首尾帧 fl2v |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | 参考生 ref |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | 支持 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | 图片、视频、音频 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-H3-Regeneration | model.model&#95;id | 未记录 | MiniMax-H3-Regeneration |
| 新增 | cn | MiniMax-H3-Regeneration | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | cn | MiniMax-H3-Regeneration | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 视频再生成 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型/接口 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 规格 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出视频 每秒 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 输入视频 每秒 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | 输入图片 每张 超出免费额度后 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Regeneration |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P → 2K |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ¥0.30 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | ¥0.30 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | ¥0.15 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | ¥ |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.30 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输出视频 每秒 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ¥0.30 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.30 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输入视频 每秒 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ¥0.30 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.15 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 输入图片 每张 超出免费额度后 |
| 新增 | cn | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ¥0.15 |
| 新增 | cn | MiniMax-Hailuo-02 | model.model&#95;id | 未记录 | MiniMax-Hailuo-02 |
| 新增 | cn | MiniMax-Hailuo-02 | model.source&#95;category | 未记录 | 视频模型 |
| 新增 | cn | MiniMax-Hailuo-02 | model.source&#95;listing | 未记录 | available |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 文生视频，图生视频，768P 6s |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 2.00 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 文生视频，图生视频，768P 10s |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 4.00 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 文生视频，图生视频，1080P 6s |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | 3.50 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | 图生视频，512P 6s |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.values&#91;2&#93; | 未记录 | 0.60 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.values&#91;1&#93; | 未记录 | 图生视频，512P 10s |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.values&#91;2&#93; | 未记录 | 1.00 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.model&#95;id | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.source&#95;category | 未记录 | 视频模型 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.source&#95;listing | 未记录 | available |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 文生视频，图生视频，768P 6s |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 2.00 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 文生视频，图生视频，768P 10s |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 4.00 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 文生视频，图生视频，1080P 6s |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | 3.50 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.model&#95;id | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.source&#95;category | 未记录 | 视频模型 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.source&#95;listing | 未记录 | available |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 图生视频，768P 6s |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 1.35 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 图生视频，768P 10s |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 2.25 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | Context-IR |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 功能 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 单价  元/视频 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 图生视频，1080P 6s |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | 2.31 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M2 | model.model&#95;id | 未记录 | MiniMax-M2 |
| 新增 | cn | MiniMax-M2 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M2 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | MiniMax-M2 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | MiniMax-M2 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M2.1 | model.model&#95;id | 未记录 | MiniMax-M2.1 |
| 新增 | cn | MiniMax-M2.1 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M2.1 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | MiniMax-M2.1 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | MiniMax-M2.1 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M2.1-highspeed | model.model&#95;id | 未记录 | MiniMax-M2.1-highspeed |
| 新增 | cn | MiniMax-M2.1-highspeed | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M2.1-highspeed | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | MiniMax-M2.1-highspeed | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | MiniMax-M2.1-highspeed | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M2.5 | model.model&#95;id | 未记录 | MiniMax-M2.5 |
| 新增 | cn | MiniMax-M2.5 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M2.5 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | MiniMax-M2.5 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | MiniMax-M2.5 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M2.5-highspeed | model.model&#95;id | 未记录 | MiniMax-M2.5-highspeed |
| 新增 | cn | MiniMax-M2.5-highspeed | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M2.5-highspeed | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | MiniMax-M2.5-highspeed | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | MiniMax-M2.5-highspeed | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M2.7 | model.model&#95;id | 未记录 | MiniMax-M2.7 |
| 新增 | cn | MiniMax-M2.7 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M2.7 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | MiniMax-M2.7 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | MiniMax-M2.7 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M2.7-highspeed | model.model&#95;id | 未记录 | MiniMax-M2.7-highspeed |
| 新增 | cn | MiniMax-M2.7-highspeed | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M2.7-highspeed | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | MiniMax-M2.7-highspeed | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | MiniMax-M2.7-highspeed | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | MiniMax-M3 | model.model&#95;id | 未记录 | MiniMax-M3 |
| 新增 | cn | MiniMax-M3 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M3 | model.source&#95;listing | 未记录 | available |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 ≤ 512k 输入 tokens 永久五折 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | ~~4.20~~ 2.10 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ~~16.80~~ 8.40 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | ~~0.84~~ 0.42 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 2.10 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 4.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~4.20~~ 2.10 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 8.40 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 16.80 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~16.80~~ 8.40 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.42 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 0.84 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~0.84~~ 0.42 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 &gt; 512k 输入 tokens\&#42; 永久五折 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | ~~8.40~~ 4.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | ~~33.60~~ 16.80 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | ~~1.68~~ 0.84 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 4.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 8.40 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~8.40~~ 4.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 16.80 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 33.60 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~33.60~~ 16.80 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.84 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 1.68 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~1.68~~ 0.84 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 ≤ 512k 输入 tokens 永久五折 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | ~~6.30~~ 3.15 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | ~~25.20~~ 12.60 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | ~~1.26~~ 0.63 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 3.15 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 6.30 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~6.30~~ 3.15 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 12.60 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 25.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~25.20~~ 12.60 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.63 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 1.26 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~1.26~~ 0.63 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.section | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;2&#93; | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;3&#93; | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 &gt; 512k 输入 tokens 永久五折 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | ~~12.60~~ 6.30 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;2&#93; | 未记录 | ~~50.40~~ 25.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;3&#93; | 未记录 | ~~2.52~~ 1.26 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 6.30 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 12.60 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~12.60~~ 6.30 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 25.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 50.40 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~50.40~~ 25.20 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 1.26 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 2.52 |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~2.52~~ 1.26 |
| 新增 | cn | MiniMax-M3.1-Flash | model.model&#95;id | 未记录 | MiniMax-M3.1-Flash |
| 新增 | cn | MiniMax-M3.1-Flash | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M3.1-Flash | model.source&#95;listing | 未记录 | available |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 语言模型 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3.1-Flash |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 1.00 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 4.00 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | 0.10 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 1.00 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 输入价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 1.00 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 4.00 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | 输出价格  元/百万 tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | 4.00 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.10 |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | 缓存读取  元/百万 tokens |
| 新增 | cn | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | 0.10 |
| 新增 | cn | Music-2.0 | model.model&#95;id | 未记录 | Music-2.0 |
| 新增 | cn | Music-2.0 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | Music-2.0 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | Music-2.0 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 计费与使用 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 单价  元/首 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.0（已下线） |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 0.25 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;audio |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;song |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.25 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价  元/首 |
| 新增 | cn | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 0.25 |
| 新增 | cn | Music-2.5 | model.model&#95;id | 未记录 | Music-2.5 |
| 新增 | cn | Music-2.5 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | Music-2.5 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | Music-2.5 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 计费与使用 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 单价  元/首 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.5（已下线） |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 1.0 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;audio |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;song |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 1.0 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价  元/首 |
| 新增 | cn | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 1.0 |
| 新增 | cn | Music-2.5+ | model.model&#95;id | 未记录 | Music-2.5+ |
| 新增 | cn | Music-2.5+ | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | Music-2.5+ | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | Music-2.5+ | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 计费与使用 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 单价  元/首 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.5+（已下线） |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 1.0 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;audio |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;song |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 1.0 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价  元/首 |
| 新增 | cn | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 1.0 |
| 新增 | cn | image-01 | model.model&#95;id | 未记录 | image-01 |
| 新增 | cn | image-01 | model.source&#95;category | 未记录 | 图像模型 |
| 新增 | cn | image-01 | model.source&#95;listing | 未记录 | available |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 图像 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 接口说明 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价  元/张 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | image-01 image-01-live |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 支持用户通过文本描述或参考图片生成图片 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 0.025 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;image |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.025 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价  元/张 |
| 新增 | cn | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 0.025 |
| 新增 | cn | image-01-live | model.model&#95;id | 未记录 | image-01-live |
| 新增 | cn | image-01-live | model.source&#95;category | 未记录 | 图像模型 |
| 新增 | cn | image-01-live | model.source&#95;listing | 未记录 | available |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 图像 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 接口说明 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价  元/张 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | image-01 image-01-live |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 支持用户通过文本描述或参考图片生成图片 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 0.025 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;image |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;image |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.025 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价  元/张 |
| 新增 | cn | image-01-live | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 0.025 |
| 新增 | cn | music-2.6 | model.model&#95;id | 未记录 | music-2.6 |
| 新增 | cn | music-2.6 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | music-2.6 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | music-2.6 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 计费与使用 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 单价  元/首 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.6（已下线） |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 1.0 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;audio |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;song |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 1.0 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价  元/首 |
| 新增 | cn | music-2.6 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 1.0 |
| 新增 | cn | music-2.6-free | model.model&#95;id | 未记录 | music-2.6-free |
| 新增 | cn | music-2.6-free | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | music-2.6-free | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | music-2.6-free | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | music-2.6-free | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | music-3.0 | model.model&#95;id | 未记录 | music-3.0 |
| 新增 | cn | music-3.0 | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | music-3.0 | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | music-3.0 | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 计费与使用 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 模型 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 单价  元/首 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-3.0（已下线） |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 1.0 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;audio |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;song |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 1.0 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价  元/首 |
| 新增 | cn | music-3.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 1.0 |
| 新增 | cn | music-3.0-free | model.model&#95;id | 未记录 | music-3.0-free |
| 新增 | cn | music-3.0-free | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | music-3.0-free | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | music-3.0-free | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | music-3.0-free | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | music-cover | model.model&#95;id | 未记录 | music-cover |
| 新增 | cn | music-cover | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | music-cover | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | music-cover | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | music-cover | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | music-cover-free | model.model&#95;id | 未记录 | music-cover-free |
| 新增 | cn | music-cover-free | model.source&#95;category | 未记录 | 语言模型 |
| 新增 | cn | music-cover-free | model.source&#95;listing | 未记录 | historical |
| 新增 | cn | music-cover-free | model.source&#95;status | 未记录 | 已下线 |
| 新增 | cn | music-cover-free | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | cn | speech-02-hd | model.model&#95;id | 未记录 | speech-02-hd |
| 新增 | cn | speech-02-hd | model.source&#95;category | 未记录 | 语音模型 |
| 新增 | cn | speech-02-hd | model.source&#95;listing | 未记录 | available |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | 同步语音合成 T2A |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-hd / speech-02-hd |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 3.50 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 3.50 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 3.50 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | 异步长文本语音合成 T2A Async |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.6-hd / speech-02-hd |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 3.50 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 3.50 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 3.50 |
| 新增 | cn | speech-02-turbo | model.model&#95;id | 未记录 | speech-02-turbo |
| 新增 | cn | speech-02-turbo | model.source&#95;category | 未记录 | 语音模型 |
| 新增 | cn | speech-02-turbo | model.source&#95;listing | 未记录 | available |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | 同步语音合成 T2A |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-turbo / speech-02-turbo |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 2.00 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 2.00 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 2.00 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | 异步长文本语音合成 T2A Async |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.6-turbo / speech-02-turbo |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 2.00 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 2.00 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-02-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 2.00 |
| 新增 | cn | speech-2.6-hd | model.model&#95;id | 未记录 | speech-2.6-hd |
| 新增 | cn | speech-2.6-hd | model.source&#95;category | 未记录 | 语音模型 |
| 新增 | cn | speech-2.6-hd | model.source&#95;listing | 未记录 | available |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | 同步语音合成 T2A |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-hd / speech-02-hd |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 3.50 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 3.50 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 3.50 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | 异步长文本语音合成 T2A Async |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.6-hd / speech-02-hd |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 3.50 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 3.50 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 3.50 |
| 新增 | cn | speech-2.6-turbo | model.model&#95;id | 未记录 | speech-2.6-turbo |
| 新增 | cn | speech-2.6-turbo | model.source&#95;category | 未记录 | 语音模型 |
| 新增 | cn | speech-2.6-turbo | model.source&#95;listing | 未记录 | available |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | 同步语音合成 T2A |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-turbo / speech-02-turbo |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 2.00 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 2.00 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 2.00 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | 音色管理 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | 异步长文本语音合成 T2A Async |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.6-turbo / speech-02-turbo |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 2.00 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 2.00 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.6-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 2.00 |
| 新增 | cn | speech-2.8-hd | model.model&#95;id | 未记录 | speech-2.8-hd |
| 新增 | cn | speech-2.8-hd | model.source&#95;category | 未记录 | 语音模型 |
| 新增 | cn | speech-2.8-hd | model.source&#95;listing | 未记录 | available |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 语音合成（TTS） |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 接口说明 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | 同步语音合成 T2A |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.8-hd |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 支持音量、语调、语速调整和混音，支持比特率、采样率相关参数调整，支持音频时长、音频大小等返回参数。适用于短文本快速合成，如闲聊、对话等场景。 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | 3.50 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 3.50 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 3.50 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | 语音合成（TTS） |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 接口说明 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | 异步长文本语音合成 T2A Async |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.8-hd |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 支持文本到语音的异步生成，单次最大支持 100 万字符，生成结果支持异步检索。 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | 3.50 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 3.50 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 3.50 |
| 新增 | cn | speech-2.8-turbo | model.model&#95;id | 未记录 | speech-2.8-turbo |
| 新增 | cn | speech-2.8-turbo | model.source&#95;category | 未记录 | 语音模型 |
| 新增 | cn | speech-2.8-turbo | model.source&#95;listing | 未记录 | available |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | 语音合成（TTS） |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | 接口说明 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | 同步语音合成 T2A |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.8-turbo |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | 同上，速度更快、成本更低。 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | 2.00 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 2.00 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 2.00 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | 语音合成（TTS） |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | 计费项 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | 模型 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | 接口说明 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | 异步长文本语音合成 T2A Async |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.8-turbo |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | 同上，速度更快、成本更低。 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | 2.00 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | CNY |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | 元 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | 以下价格均以人民币计价。 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;10k&#95;characters |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 2.00 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | 单价 元/万字符 |
| 新增 | cn | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | 2.00 |
| 新增 | global | M2-her | model.model&#95;id | 未记录 | M2-her |
| 新增 | global | M2-her | model.source&#95;category | 未记录 | LLM |
| 新增 | global | M2-her | model.source&#95;listing | 未记录 | historical |
| 新增 | global | M2-her | model.source&#95;status | 未记录 | Retired |
| 新增 | global | M2-her | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3 | model.model&#95;id | 未记录 | MiniMax-H3 |
| 新增 | global | MiniMax-H3 | model.source&#95;category | 未记录 | Video Models |
| 新增 | global | MiniMax-H3 | model.source&#95;listing | 未记录 | available |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3\<br>      Quality first, for high-quality video creation. |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 2K |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;0.13 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.13 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.13 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.13 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.13 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.13 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3\<br>      Quality first, for high-quality video creation. |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.08 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.08 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3 |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.section | 未记录 | Coverage |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | Feature |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | Audio |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;2&#93; | 未记录 | Video |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | Supported models |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | All speech models |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.values&#91;2&#93; | 未记录 | Hailuo video models; MiniMax H3 is not supported yet |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3-Context-IR | model.model&#95;id | 未记录 | MiniMax-H3-Context-IR |
| 新增 | global | MiniMax-H3-Context-IR | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-Context-IR | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model / API |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Input Price per M tokens |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output Price per M tokens |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Context-IR |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.90 |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;3.60 |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.90 |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Input Price per M tokens |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.90 |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 3.60 |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Output Price per M tokens |
| 新增 | global | MiniMax-H3-Context-IR | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;3.60 |
| 新增 | global | MiniMax-H3-Highspeed | model.model&#95;id | 未记录 | MiniMax-H3-Highspeed |
| 新增 | global | MiniMax-H3-Highspeed | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-Highspeed | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation. |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.06 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.06 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.03 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation. |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.03 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Highspeed |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Highspeed | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3-Lite | model.model&#95;id | 未记录 | MiniMax-H3-Lite |
| 新增 | global | MiniMax-H3-Lite | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-Lite | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation. |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | &#36;0.02 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.02 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.02 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation. |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | &#36;0.02 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.025 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.025 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.02 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.02 |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Lite |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Lite | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3-Max | model.model&#95;id | 未记录 | MiniMax-H3-Max |
| 新增 | global | MiniMax-H3-Max | model.source&#95;category | 未记录 | Video Models |
| 新增 | global | MiniMax-H3-Max | model.source&#95;listing | 未记录 | available |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation. |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.143 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | &#36;0.074 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.08 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.143 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.143 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.074 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.074 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation. |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;0.0553 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | &#36;0.074 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.05 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.0553 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.0553 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.074 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.074 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3-Regeneration | model.model&#95;id | 未记录 | MiniMax-H3-Regeneration |
| 新增 | global | MiniMax-H3-Regeneration | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-Regeneration | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Video Regeneration |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model / API |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Spec |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output Video per second |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Input Video per second |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Image per image beyond free quota |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Regeneration |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P → 2K |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.05 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video per second |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.05 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video per second |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.025 |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image per image beyond free quota |
| 新增 | global | MiniMax-H3-Regeneration | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-Hailuo-02 | model.model&#95;id | 未记录 | MiniMax-Hailuo-02 |
| 新增 | global | MiniMax-Hailuo-02 | model.source&#95;category | 未记录 | Video Models |
| 新增 | global | MiniMax-Hailuo-02 | model.source&#95;listing | 未记录 | available |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.28 per 768P, 6s video |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | &#36;0.56 per 768P, 10s video |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | &#36;0.49 per 1080P, 6s video |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | &#36;0.10 per 512P, 6s video |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-02 |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.values&#91;1&#93; | 未记录 | &#36;0.15 per 512P, 10s video |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-02 | model.pricing&#95;rows&#91;4&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-2.3 | model.model&#95;id | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | global | MiniMax-Hailuo-2.3 | model.source&#95;category | 未记录 | Video Models |
| 新增 | global | MiniMax-Hailuo-2.3 | model.source&#95;listing | 未记录 | available |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.28 per 768P, 6s video |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | &#36;0.56 per 768P, 10s video |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3 |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | &#36;0.49 per 1080P, 6s video |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-2.3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.model&#95;id | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.source&#95;category | 未记录 | Video Models |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.source&#95;listing | 未记录 | available |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.19 per 768P, 6s video |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | &#36;0.32 per 768P, 10s video |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | Context-IR |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-Hailuo-2.3-Fast |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | &#36;0.33 per 1080P, 6s video |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-Hailuo-2.3-Fast | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M2 | model.model&#95;id | 未记录 | MiniMax-M2 |
| 新增 | global | MiniMax-M2 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M2 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | MiniMax-M2 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | MiniMax-M2 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M2.1 | model.model&#95;id | 未记录 | MiniMax-M2.1 |
| 新增 | global | MiniMax-M2.1 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M2.1 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | MiniMax-M2.1 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | MiniMax-M2.1 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M2.1-highspeed | model.model&#95;id | 未记录 | MiniMax-M2.1-highspeed |
| 新增 | global | MiniMax-M2.1-highspeed | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M2.1-highspeed | model.source&#95;listing | 未记录 | historical |
| 新增 | global | MiniMax-M2.1-highspeed | model.source&#95;status | 未记录 | Retired |
| 新增 | global | MiniMax-M2.1-highspeed | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M2.5 | model.model&#95;id | 未记录 | MiniMax-M2.5 |
| 新增 | global | MiniMax-M2.5 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M2.5 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | MiniMax-M2.5 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | MiniMax-M2.5 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M2.5-highspeed | model.model&#95;id | 未记录 | MiniMax-M2.5-highspeed |
| 新增 | global | MiniMax-M2.5-highspeed | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M2.5-highspeed | model.source&#95;listing | 未记录 | historical |
| 新增 | global | MiniMax-M2.5-highspeed | model.source&#95;status | 未记录 | Retired |
| 新增 | global | MiniMax-M2.5-highspeed | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M2.7 | model.model&#95;id | 未记录 | MiniMax-M2.7 |
| 新增 | global | MiniMax-M2.7 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M2.7 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | MiniMax-M2.7 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | MiniMax-M2.7 | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M2.7-highspeed | model.model&#95;id | 未记录 | MiniMax-M2.7-highspeed |
| 新增 | global | MiniMax-M2.7-highspeed | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M2.7-highspeed | model.source&#95;listing | 未记录 | historical |
| 新增 | global | MiniMax-M2.7-highspeed | model.source&#95;status | 未记录 | Retired |
| 新增 | global | MiniMax-M2.7-highspeed | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-M3 | model.model&#95;id | 未记录 | MiniMax-M3 |
| 新增 | global | MiniMax-M3 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M3 | model.source&#95;listing | 未记录 | available |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | LLM |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 ≤ 512k input tokens Permanent 50% off |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | ~~&#36;0.60~~ &#36;0.30 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | ~~&#36;2.40~~ &#36;1.20 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | ~~&#36;0.12~~ &#36;0.06 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.30 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 0.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~&#36;0.60~~ &#36;0.30 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 1.20 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 2.40 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~&#36;2.40~~ &#36;1.20 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.06 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 0.12 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~&#36;0.12~~ &#36;0.06 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | LLM |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 &gt; 512k input tokens\&#42; Permanent 50% off |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | ~~&#36;1.20~~ &#36;0.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | ~~&#36;4.80~~ &#36;2.40 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | ~~&#36;0.24~~ &#36;0.12 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 1.20 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~&#36;1.20~~ &#36;0.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 2.40 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 4.80 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~&#36;4.80~~ &#36;2.40 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.12 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 0.24 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~&#36;0.24~~ &#36;0.12 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.section | 未记录 | LLM |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 ≤ 512k input tokens Permanent 50% off |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | ~~&#36;0.90~~ &#36;0.45 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | ~~&#36;3.60~~ &#36;1.80 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | ~~&#36;0.18~~ &#36;0.09 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.45 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 0.90 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~&#36;0.90~~ &#36;0.45 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 1.80 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 3.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~&#36;3.60~~ &#36;1.80 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.09 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 0.18 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~&#36;0.18~~ &#36;0.09 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.section | 未记录 | LLM |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;2&#93; | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.headers&#91;3&#93; | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3 &gt; 512k input tokens Permanent 50% off |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | ~~&#36;1.80~~ &#36;0.90 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;2&#93; | 未记录 | ~~&#36;7.20~~ &#36;3.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.values&#91;3&#93; | 未记录 | ~~&#36;0.36~~ &#36;0.18 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.90 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.list&#95;amount&#95;decimal | 未记录 | 1.80 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | ~~&#36;1.80~~ &#36;0.90 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 3.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.list&#95;amount&#95;decimal | 未记录 | 7.20 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | ~~&#36;7.20~~ &#36;3.60 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.18 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.list&#95;amount&#95;decimal | 未记录 | 0.36 |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3 | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | ~~&#36;0.36~~ &#36;0.18 |
| 新增 | global | MiniMax-M3.1-Flash | model.model&#95;id | 未记录 | MiniMax-M3.1-Flash |
| 新增 | global | MiniMax-M3.1-Flash | model.source&#95;category | 未记录 | LLM |
| 新增 | global | MiniMax-M3.1-Flash | model.source&#95;listing | 未记录 | available |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | LLM |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-M3.1-Flash |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.15 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;0.60 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.015 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | input |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.15 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Input &#36; / M tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.15 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | output |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.60 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Output &#36; / M tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.60 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | cache&#95;read |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;1m&#95;tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0.015 |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Prompt caching Read &#36; / M tokens |
| 新增 | global | MiniMax-M3.1-Flash | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.015 |
| 新增 | global | Music-2.0 | model.model&#95;id | 未记录 | Music-2.0 |
| 新增 | global | Music-2.0 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | Music-2.0 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | Music-2.0 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Billing and Usage |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.0 |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.03 per track (up to 5 minutes) |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | Music-2.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | Music-2.5 | model.model&#95;id | 未记录 | Music-2.5 |
| 新增 | global | Music-2.5 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | Music-2.5 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | Music-2.5 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Billing and Usage |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.5 |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.15 per track (up to 5 minutes) |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | Music-2.5 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | Music-2.5+ | model.model&#95;id | 未记录 | Music-2.5+ |
| 新增 | global | Music-2.5+ | model.source&#95;category | 未记录 | LLM |
| 新增 | global | Music-2.5+ | model.source&#95;listing | 未记录 | historical |
| 新增 | global | Music-2.5+ | model.source&#95;status | 未记录 | Retired |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Billing and Usage |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.5+ |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.15 per track (up to 5 minutes) |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | Music-2.5+ | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | image-01 | model.model&#95;id | 未记录 | image-01 |
| 新增 | global | image-01 | model.source&#95;category | 未记录 | Image Models |
| 新增 | global | image-01 | model.source&#95;listing | 未记录 | available |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Image |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | image-01 |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.0035 per image |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;image |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.0035 |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | image-01 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.0035 per image |
| 新增 | global | image-01-live | model.model&#95;id | 未记录 | image-01-live |
| 新增 | global | image-01-live | model.source&#95;category | 未记录 | Image Models |
| 新增 | global | image-01-live | model.source&#95;listing | 未记录 | available |
| 新增 | global | image-01-live | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | music-2.6 | model.model&#95;id | 未记录 | music-2.6 |
| 新增 | global | music-2.6 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | music-2.6 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | music-2.6 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Billing and Usage |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-2.6 |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.15 per track (up to 5 minutes) |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | music-2.6 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | music-2.6-free | model.model&#95;id | 未记录 | music-2.6-free |
| 新增 | global | music-2.6-free | model.source&#95;category | 未记录 | LLM |
| 新增 | global | music-2.6-free | model.source&#95;listing | 未记录 | historical |
| 新增 | global | music-2.6-free | model.source&#95;status | 未记录 | Retired |
| 新增 | global | music-2.6-free | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | music-3.0 | model.model&#95;id | 未记录 | music-3.0 |
| 新增 | global | music-3.0 | model.source&#95;category | 未记录 | LLM |
| 新增 | global | music-3.0 | model.source&#95;listing | 未记录 | historical |
| 新增 | global | music-3.0 | model.source&#95;status | 未记录 | Retired |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Billing and Usage |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Price |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | Music-3.0 |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | &#36;0.15 per track (up to 5 minutes) |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | music-3.0 | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | music-3.0-free | model.model&#95;id | 未记录 | music-3.0-free |
| 新增 | global | music-3.0-free | model.source&#95;category | 未记录 | LLM |
| 新增 | global | music-3.0-free | model.source&#95;listing | 未记录 | historical |
| 新增 | global | music-3.0-free | model.source&#95;status | 未记录 | Retired |
| 新增 | global | music-3.0-free | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | music-cover | model.model&#95;id | 未记录 | music-cover |
| 新增 | global | music-cover | model.source&#95;category | 未记录 | LLM |
| 新增 | global | music-cover | model.source&#95;listing | 未记录 | historical |
| 新增 | global | music-cover | model.source&#95;status | 未记录 | Retired |
| 新增 | global | music-cover | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | music-cover-free | model.model&#95;id | 未记录 | music-cover-free |
| 新增 | global | music-cover-free | model.source&#95;category | 未记录 | LLM |
| 新增 | global | music-cover-free | model.source&#95;listing | 未记录 | historical |
| 新增 | global | music-cover-free | model.source&#95;status | 未记录 | Retired |
| 新增 | global | music-cover-free | model.pricing&#95;rows | 未记录 | &#91;&#93; |
| 新增 | global | speech-02-hd | model.model&#95;id | 未记录 | speech-02-hd |
| 新增 | global | speech-02-hd | model.source&#95;category | 未记录 | Speech Models |
| 新增 | global | speech-02-hd | model.source&#95;listing | 未记录 | available |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Voice Management |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Price |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | T2A |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-hd / speech-02-hd |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;100/M characters |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 100 |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-02-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;100/M characters |
| 新增 | global | speech-02-turbo | model.model&#95;id | 未记录 | speech-02-turbo |
| 新增 | global | speech-02-turbo | model.source&#95;category | 未记录 | Speech Models |
| 新增 | global | speech-02-turbo | model.source&#95;listing | 未记录 | available |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Voice Management |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Price |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | T2A |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-turbo / speech-02-turbo |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;60/M characters |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 60 |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-02-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;60/M characters |
| 新增 | global | speech-2.6-hd | model.model&#95;id | 未记录 | speech-2.6-hd |
| 新增 | global | speech-2.6-hd | model.source&#95;category | 未记录 | Speech Models |
| 新增 | global | speech-2.6-hd | model.source&#95;listing | 未记录 | available |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Voice Management |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Price |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | T2A |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-hd / speech-02-hd |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;100/M characters |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 100 |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-2.6-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;100/M characters |
| 新增 | global | speech-2.6-turbo | model.model&#95;id | 未记录 | speech-2.6-turbo |
| 新增 | global | speech-2.6-turbo | model.source&#95;category | 未记录 | Speech Models |
| 新增 | global | speech-2.6-turbo | model.source&#95;listing | 未记录 | available |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Voice Management |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Price |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | T2A |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.6-turbo / speech-02-turbo |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | &#36;60/M characters |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 60 |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-2.6-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;60/M characters |
| 新增 | global | speech-2.8-hd | model.model&#95;id | 未记录 | speech-2.8-hd |
| 新增 | global | speech-2.8-hd | model.source&#95;category | 未记录 | Speech Models |
| 新增 | global | speech-2.8-hd | model.source&#95;listing | 未记录 | available |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Text-to-Speech (TTS) |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Description |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Price |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | T2A (Sync) |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.8-hd |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio. |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;100 / M characters |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 100 |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;100 / M characters |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Text-to-Speech (TTS) |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Description |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Price |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | T2A Async |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.8-hd |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously. |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;100 / M characters |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 100 |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-2.8-hd | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;100 / M characters |
| 新增 | global | speech-2.8-turbo | model.model&#95;id | 未记录 | speech-2.8-turbo |
| 新增 | global | speech-2.8-turbo | model.source&#95;category | 未记录 | Speech Models |
| 新增 | global | speech-2.8-turbo | model.source&#95;listing | 未记录 | available |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.section | 未记录 | Text-to-Speech (TTS) |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Description |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Price |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | T2A (Sync) |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | speech-2.8-turbo |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | Same capabilities as hd, optimized for speed and cost. |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;60 / M characters |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 60 |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;60 / M characters |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.section | 未记录 | Text-to-Speech (TTS) |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | API |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Model |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Description |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Price |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | T2A Async |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | speech-2.8-turbo |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | Same capabilities as hd, optimized for speed and cost. |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;60 / M characters |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;character |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;1m&#95;characters |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 60 |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Price |
| 新增 | global | speech-2.8-turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;60 / M characters |

#### 来源快照

| 市场 | 来源 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---|---:|---|
| cn | MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-05T12:30:16.581Z | 200 | `sha256:a222962f400cae8a8e000a9ff777abb2875bd1e43e92e841fb1ef40a2be17878` |
| cn | MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-05T12:30:15.333Z | 200 | `sha256:e23bbc8a65e411efbcf7a573ba68540d60f01b6b0b29fcbbaf895cde19b0bea9` |
| cn | MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-05T12:30:16.496Z | 200 | `sha256:9a7276b7418755a8e7c5ff8e3819dd58b498eb7901fbdc5c5bf25df206905914` |
| cn | MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-05T12:30:15.709Z | 200 | `sha256:ac488c697aded1730769d9c7d0b93b13642ade8bbe6779e30a7f1ba52b6797fa` |
| cn | MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-05T12:30:15.510Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-05T12:30:16.763Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-05T12:30:16.022Z | 200 | `sha256:3e526755c01aa08b42c952a920d4a7cf4201611328ed579501540d2b3d767d87` |
| cn | MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-05T12:30:15.834Z | 200 | `sha256:f1310b1fb757cb0cf804530fc2c2a7d8d9f8a346a4d314396c2bbfdcc70a4819` |
| cn | MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-05T12:30:16.057Z | 200 | `sha256:cbb574d27cee8da9ee052be1cfa1897f55eb2f36eda15b28b6cc0543eeec835c` |
| cn | MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-05T12:30:16.973Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-05T12:30:18.157Z | 200 | `sha256:80a696108b9e34f39677e6ce092a7c6ac291a64cb10953c8b1c44f586d98aa6d` |
| cn | MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-05T12:30:18.539Z | 200 | `sha256:06409fe8aea3d900c63a2f55c06690f8c8335a8935b96baa4c9dd75eea7d9c9f` |
| cn | MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-05T12:30:16.708Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-05T13:35:57.057Z | 200 | `sha256:479e0405f8d486cf4b45a946cfadca65fc66993e2f7c11ff1df480fb78dea0cf` |
| cn | MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-05T12:30:19.010Z | 200 | `sha256:70a203c1e5ee7c554b09c4443b30562d85dc7d5039aeec9e680342d7f0328201` |
| global | MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-05T12:30:16.480Z | 200 | `sha256:2768cac752b3950fe0e4664c6a9ab029ba491f3a4a889dcd1f187fed368903df` |
| global | MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-05T12:30:16.648Z | 200 | `sha256:dc74ab9682067530450f2ba21b74d8aa7c71c349de09569d0d5f86a725007a3b` |
| global | MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-05T12:30:16.548Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-05T12:30:16.778Z | 200 | `sha256:3dde0949bd6bbda3f797c4be55176f5c8d065353ce44f6799d1e2913f1bac7e5` |
| global | MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-05T12:30:16.502Z | 200 | `sha256:2d1c470744605b2244951f5a5a4f5a0052808d2964d27ab4aff69d8256456f24` |
| global | MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-05T12:30:16.668Z | 200 | `sha256:0f68524c7eea27db3c54380f776e344fe40ef63a61c966ed4ec0c1b3f8894863` |
| global | MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-05T12:30:16.664Z | 200 | `sha256:5633e9f67131ecacfc5f23dcf0a883156b487948fc2b29e93bc0a683bd35747d` |
| global | MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-05T12:30:16.787Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-05T12:30:16.543Z | 200 | `sha256:0af82734b75b96914237bb36551a1b2b25ea29892452a5e8e7f560eb7e863e68` |
| global | MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-05T12:30:16.568Z | 200 | `sha256:dbad05069e19afac83a48463187e42a2c5dd12b815f30423fe97aaa2ffe76b35` |
| global | MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-05T12:30:16.683Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-05T13:35:56.987Z | 200 | `sha256:d7f1261b6d429a1833bbd4f04013176081aa4bcdc1e9ed132aa572975d780605` |
| global | MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-05T12:30:16.616Z | 200 | `sha256:583172b21eac14a84c3a68b335f46ebf2eeae7471c6d289e9d4ed5624788ea83` |

> 本文件供人工评审；候选 JSON 保留完整机器可读结构。自动采集不等于核验或发布。

---

# minimax 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `minimax` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-05T13:35:57.057Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:0bae7dac9ec3945a2106b046119194229d5c1ee3eecf69ab5c3ba1470b27d079` |
| 来源快照 | 28 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 2387 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / minimax

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • 中国站与国际站事实分开保留。<br>• 模型只从目录与价格来源收集；模型规格和 API 支持由人工维护或按 Service 独立记录。<br>• 官方价格原文和转换费率同时保存；未核对过的计量条件不自动提升为 PriceFact。 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | minimax |
| source refs | 新增 | 未记录 | 列表（28 项）<details><summary>展开完整内容</summary><ul><li>minimax-cn-model-catalog</li><li>minimax-cn-pricing</li><li>minimax-cn-video-api</li><li>minimax-cn-video-guide</li><li>minimax-cn-asr-api</li><li>minimax-cn-audio-guide</li><li>minimax-cn-image-guide</li><li>minimax-cn-model-overview</li><li>minimax-cn-anthropic-api</li><li>minimax-cn-function-call-api</li><li>minimax-cn-responses-api</li><li>minimax-cn-file-upload-api</li><li>minimax-cn-mcp-guide</li><li>minimax-cn-m-plan-page</li><li>minimax-cn-m-plan-intro</li><li>minimax-global-model-catalog</li><li>minimax-global-video-guide</li><li>minimax-global-audio-guide</li><li>minimax-global-image-guide</li><li>minimax-global-model-overview</li><li>minimax-global-pricing</li><li>minimax-global-file-upload-api</li><li>minimax-global-mcp-guide</li><li>minimax-global-anthropic-api</li><li>minimax-global-responses-api</li><li>minimax-global-function-call-api</li><li>minimax-global-m-plan-page</li><li>minimax-global-m-plan-intro</li></ul></details> |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 minimax-cn-anthropic-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-anthropic-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-anthropic-api › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-anthropic-api › source ref | 新增 | 未记录 | minimax-cn-anthropic-api |
| 记录 minimax-cn-anthropic-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-asr-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-asr-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-asr-api › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-asr-api › source ref | 新增 | 未记录 | minimax-cn-asr-api |
| 记录 minimax-cn-asr-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-audio-guide › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-audio-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-audio-guide › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-audio-guide › source ref | 新增 | 未记录 | minimax-cn-audio-guide |
| 记录 minimax-cn-audio-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-file-upload-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-file-upload-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-file-upload-api › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-file-upload-api › source ref | 新增 | 未记录 | minimax-cn-file-upload-api |
| 记录 minimax-cn-file-upload-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-function-call-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-function-call-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-function-call-api › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-function-call-api › source ref | 新增 | 未记录 | minimax-cn-function-call-api |
| 记录 minimax-cn-function-call-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-image-guide › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-image-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-image-guide › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-image-guide › source ref | 新增 | 未记录 | minimax-cn-image-guide |
| 记录 minimax-cn-image-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-m-plan-intro › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-m-plan-intro › note | 新增 | 未记录 | 套餐档位和使用参考按官方表格实际行提取。 |
| 记录 minimax-cn-m-plan-intro › record count | 新增 | 未记录 | 3 |
| 记录 minimax-cn-m-plan-intro › record unit | 新增 | 未记录 | M Plan tier descriptions |
| 记录 minimax-cn-m-plan-intro › scope | 新增 | 未记录 | plan |
| 记录 minimax-cn-m-plan-intro › source ref | 新增 | 未记录 | minimax-cn-m-plan-intro |
| 记录 minimax-cn-m-plan-intro › 状态（status） | 新增 | 未记录 | complete |
| 记录 minimax-cn-m-plan-page › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-m-plan-page › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-m-plan-page › scope | 新增 | 未记录 | plan |
| 记录 minimax-cn-m-plan-page › source ref | 新增 | 未记录 | minimax-cn-m-plan-page |
| 记录 minimax-cn-m-plan-page › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-mcp-guide › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-mcp-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-mcp-guide › scope | 新增 | 未记录 | capability |
| 记录 minimax-cn-mcp-guide › source ref | 新增 | 未记录 | minimax-cn-mcp-guide |
| 记录 minimax-cn-mcp-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-model-catalog › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-model-catalog › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-model-catalog › scope | 新增 | 未记录 | model_catalog |
| 记录 minimax-cn-model-catalog › source ref | 新增 | 未记录 | minimax-cn-model-catalog |
| 记录 minimax-cn-model-catalog › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-model-overview › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-model-overview › note | 新增 | 未记录 | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| 记录 minimax-cn-model-overview › scope | 新增 | 未记录 | model_catalog |
| 记录 minimax-cn-model-overview › source ref | 新增 | 未记录 | minimax-cn-model-overview |
| 记录 minimax-cn-model-overview › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 minimax-cn-pricing › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-pricing › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-pricing › scope | 新增 | 未记录 | pricing |
| 记录 minimax-cn-pricing › source ref | 新增 | 未记录 | minimax-cn-pricing |
| 记录 minimax-cn-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-responses-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-responses-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-responses-api › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-responses-api › source ref | 新增 | 未记录 | minimax-cn-responses-api |
| 记录 minimax-cn-responses-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-video-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-video-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-video-api › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-video-api › source ref | 新增 | 未记录 | minimax-cn-video-api |
| 记录 minimax-cn-video-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-cn-video-guide › 市场（market） | 新增 | 未记录 | cn |
| 记录 minimax-cn-video-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-cn-video-guide › scope | 新增 | 未记录 | api |
| 记录 minimax-cn-video-guide › source ref | 新增 | 未记录 | minimax-cn-video-guide |
| 记录 minimax-cn-video-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-anthropic-api › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-anthropic-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-anthropic-api › scope | 新增 | 未记录 | api |
| 记录 minimax-global-anthropic-api › source ref | 新增 | 未记录 | minimax-global-anthropic-api |
| 记录 minimax-global-anthropic-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-audio-guide › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-audio-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-audio-guide › scope | 新增 | 未记录 | api |
| 记录 minimax-global-audio-guide › source ref | 新增 | 未记录 | minimax-global-audio-guide |
| 记录 minimax-global-audio-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-file-upload-api › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-file-upload-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-file-upload-api › scope | 新增 | 未记录 | api |
| 记录 minimax-global-file-upload-api › source ref | 新增 | 未记录 | minimax-global-file-upload-api |
| 记录 minimax-global-file-upload-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-function-call-api › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-function-call-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-function-call-api › scope | 新增 | 未记录 | api |
| 记录 minimax-global-function-call-api › source ref | 新增 | 未记录 | minimax-global-function-call-api |
| 记录 minimax-global-function-call-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-image-guide › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-image-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-image-guide › scope | 新增 | 未记录 | api |
| 记录 minimax-global-image-guide › source ref | 新增 | 未记录 | minimax-global-image-guide |
| 记录 minimax-global-image-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-m-plan-intro › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-m-plan-intro › note | 新增 | 未记录 | 套餐档位和使用参考按官方表格实际行提取。 |
| 记录 minimax-global-m-plan-intro › record count | 新增 | 未记录 | 3 |
| 记录 minimax-global-m-plan-intro › record unit | 新增 | 未记录 | M Plan tier descriptions |
| 记录 minimax-global-m-plan-intro › scope | 新增 | 未记录 | plan |
| 记录 minimax-global-m-plan-intro › source ref | 新增 | 未记录 | minimax-global-m-plan-intro |
| 记录 minimax-global-m-plan-intro › 状态（status） | 新增 | 未记录 | complete |
| 记录 minimax-global-m-plan-page › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-m-plan-page › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-m-plan-page › scope | 新增 | 未记录 | plan |
| 记录 minimax-global-m-plan-page › source ref | 新增 | 未记录 | minimax-global-m-plan-page |
| 记录 minimax-global-m-plan-page › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-mcp-guide › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-mcp-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-mcp-guide › scope | 新增 | 未记录 | capability |
| 记录 minimax-global-mcp-guide › source ref | 新增 | 未记录 | minimax-global-mcp-guide |
| 记录 minimax-global-mcp-guide › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-model-catalog › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-model-catalog › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-model-catalog › scope | 新增 | 未记录 | model_catalog |
| 记录 minimax-global-model-catalog › source ref | 新增 | 未记录 | minimax-global-model-catalog |
| 记录 minimax-global-model-catalog › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-model-overview › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-model-overview › note | 新增 | 未记录 | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| 记录 minimax-global-model-overview › scope | 新增 | 未记录 | model_catalog |
| 记录 minimax-global-model-overview › source ref | 新增 | 未记录 | minimax-global-model-overview |
| 记录 minimax-global-model-overview › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 minimax-global-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-pricing › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-pricing › scope | 新增 | 未记录 | pricing |
| 记录 minimax-global-pricing › source ref | 新增 | 未记录 | minimax-global-pricing |
| 记录 minimax-global-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-responses-api › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-responses-api › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-responses-api › scope | 新增 | 未记录 | api |
| 记录 minimax-global-responses-api › source ref | 新增 | 未记录 | minimax-global-responses-api |
| 记录 minimax-global-responses-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 minimax-global-video-guide › 市场（market） | 新增 | 未记录 | global |
| 记录 minimax-global-video-guide › note | 新增 | 未记录 | 适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。 |
| 记录 minimax-global-video-guide › scope | 新增 | 未记录 | api |
| 记录 minimax-global-video-guide › source ref | 新增 | 未记录 | minimax-global-video-guide |
| 记录 minimax-global-video-guide › 状态（status） | 新增 | 未记录 | partial |

### 文档观察

#### 来源 / minimax-cn-anthropic-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • export ANTHROPIC_BASE_URL=https://api.minimax.cn/anthropic<br>• curl https://api.minimax.cn/anthropic/v1/messages \ |
| capability mentions | 新增 | 未记录 | • &#124; `messages` &#124; 部分支持 &#124; `MiniMax-M3.1-Flash` 和 `MiniMax-M3` 支持文本、图片、视频、工具调用、工具结果和 thinking 内容块。M2.7、M2.5、M2.1 和 M2 系列仅支持文本与工具调用相关内容块，不支持图片和视频输入 &#124;<br>• &gt; model "MiniMax-M3.1-Flash" requires adaptive thinking; thinking.type="disabled" (including reasoning.effort=none) is not allowed (2013)<br>• 当响应包含 `thinking` 内容块时，后续轮次中应原样保留这些内容块，尤其是在工具调用对话中。<br>• &#124; `type="image"` &#124; 仅 M3.1-Flash / M3 &#124; 通过 URL 或 base64 输入图片，支持 JPEG、PNG、GIF、WEBP &#124;<br>• &#124; `type="video"` &#124; 仅 M3.1-Flash / M3 &#124; 通过 URL、base64 或 `mm_file://{file_id}` 输入视频，支持 MP4、AVI、MOV、MKV &#124;<br>• &#124; `type="tool_use"` &#124; 完全支持 &#124; 工具调用 &#124;<br>• &#124; `type="tool_result"` &#124; 完全支持 &#124; 工具调用结果 &#124;<br>• &#124; `type="thinking"` &#124; 完全支持 &#124; 推理内容。多轮 thinking 对话中需要原样回带 &#124;<br>• 对 `MiniMax-M3.1-Flash` 和 `MiniMax-M3`，URL 或 base64 视频最大 50 MB，图片最大 10 MB，请求体最大 64 MB。更大的视频请通过 Files API 上传后传入 `mm_file://{file_id}`，Files API 视频最大 512 MB。<br>• reasoning_buffer = ""<br>• reasoning_buffer += new_thinking<br>• &gt; 3. `MiniMax-M3.1-Flash` 和 `MiniMax-M3` 支持通过 Anthropic 兼容内容块输入图片和视频 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Anthropic SDK<br>&gt; 通过 Anthropic SDK 调用 MiniMax 模型<br>为了满足开发者对 Anthropic API 生态的使用需求，我们的 API 新增了对 Anthropic API 格式的支持。通过简单的配置，即可将 MiniMax 的能力接入到 Anthropic API 生态中。<br>## 快速开始<br>### 1. 安装 Anthropic SDK<br>```bash Python theme={null}<br>pip install anthropic<br>```<br>```bash Node.js theme={null}<br>npm install @anthropic-ai/sdk<br>```<br>### 2. 配置环境变量<br>```bash theme={null}<br>export ANTHROPIC_BASE_URL=https://api.minimax.cn/anthropic<br>export ANTHROPIC_API_KEY=${YOUR_API_KEY}<br>```<br>配置方法见[配置环境变量](https://platform.minimaxi.com/docs/guides/quickstart-preparation.md#env-vars)。<br>### 3. 调用 API<br>```python Python theme={null}<br>import anthropic<br>client = anthropic.Anthropic()<br>message = client.messages.create(<br>model="MiniMax-M3.1-Flash",<br>output_config={"effort": "max"},<br>max_tokens=4096,<br>system="You are a helpful assistant.",<br>messages=[<br>{<br>"role": "user",<br>"content": [<br>{<br>"type": "text",<br>"text": "Hi, how are you?"<br>}<br>]<br>}<br>]<br>)<br>for block in message.content:<br>if block.type == "thinking":<br>print(f"Thinking:\n{block.thinking}\n")<br>elif block.type == "text":<br>print(f"Text:\n{block.text}\n")<br>```<br>### 4. 特别注意<br>在多轮 Function Call 对话中，必须将完整的模型返回（即 assistant 消息）添加到对话历史，以保持思维链的连续性：<br>* 将完整的 `response.content`（包含 thinking/text/tool\_use 等所有块）添加到消息历史<br>* `response.content` 是一个列表，包含多种类型的内容块，必须完整回传<br>## 支持的模型<br>使用 Anthropic SDK 时，支持以下模型。<br>&#124; 模型名称 &#124; 上下文窗口 &#124; 模型介绍 &#124;<br>&#124; :- &#124; :-: &#124; :- &#124;<br>&#124; MiniMax-M3.1-Flash &#124; 1,000,000 &#124; **原生多模态、1M 上下文的 Frontier Coding 模型，思考深度可调** &#124;<br>&#124; MiniMax-M3 &#124; 1,000,000 &#124; **原生多模态、1M 上下文的 Frontier Coding 模型** &#124;<br>&gt; [!NOTE]<br>&gt;<br>&gt; TPS（Tokens Per Second）的计算方式详见[常见问题 &gt; 接口相关](https://platform.minimaxi.com/docs/faq/about-apis.md#%E9%97%AE%EF%BC%9A%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84-tps%EF%BC%88tokens-per-second%EF%BC%89%E6%98%AF%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97%E7%9A%84)。<br>&gt; [!NOTE]<br>&gt;<br>&gt; Anthropic API 兼容接口支持 `MiniMax-M3.1-Flash` `MiniMax-M3`<br>&gt; 模型。如需使用其他模型，请使用标准的 MiniMax API 接口。<br>## 兼容性说明<br>### 支持的参数<br>在使用 Anthropic SDK 接入时，我们支持以下输入参数：<br>&#124; 参数 &#124; 支持状态 &#124; 说明 &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; `model` &#124; 完全支持 &#124; 支持 `MiniMax-M3.1-Flash` `MiniMax-M3` 模型 &#124;<br>&#124; `messages` &#124; 部分支持 &#124; `MiniMax-M3.1-Flash` 和 `MiniMax-M3` 支持文本、图片、视频、工具调用、工具结果和 thinking 内容块。M2.7、M2.5、M2.1 和 M2 系列仅支持文本与工具调用相关内容块，不支持图片和视频输入 &#124;<br>&#124; `max_tokens` &#124; 完全支持 &#124; 最大生成 token 数。思考 token 也计入此上限，设置过小会导致 `stop_reason` 为 `max_tokens` 且无文本输出 &#124;<br>&#124; `stream` &#124; 完全支持 &#124; 流式响应 &#124;<br>&#124; `system` &#124; 完全支持 &#124; 系统提示词 &#124;<br>&#124; `tool_choice` &#124; 部分支持 &#124; 工具选择策略，仅支持 `auto` &#124;<br>&#124; `tools` &#124; 完全支持 &#124; 工具定义 &#124;<br>&#124; `thinking` &#124; 完全支持 &#124; `MiniMax-M3.1-Flash` 强制开启 thinking，传入 `disabled` 会返回 `400`。`MiniMax-M3` 默认关闭 thinking，可通过 `adaptive` 开启。 &#124;<br>&#124; `output_config.effort` &#124; 完全支持 &#124; 调节 `MiniMax-M3.1-Flash` 的思考深度，可取 `low`、`medium`、`high`、`xhigh`、`max`；省略时默认为 `max`。 &#124;<br>&#124; `metadata` &#124; 完全支持 &#124; 元信息 &#124;<br>&#124; `service_tier` &#124; 完全支持 &#124; 请求准入服务层级。支持的取值为 `standard` 和 `priority`；省略时默认使用 `standard`。`priority` 的[价格](https://platform.minimaxi.com/docs/pricing/overview.md#models/text)为 `standard` 的 1.5 倍，并会确保请求获得优先准入，使其排在其他请求之前处理，从而带来更快响应并减少失败。`MiniMax-M3.1-Flash` 不支持该字段。 &#124;<br>&#124; `temperature` &#124; 忽略 &#124; 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 1 &#124;<br>&#124; `top_p` &#124; 忽略 &#124; 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 0.95。若传入，取值需在 (0, 1] 范围内 &#124;<br>&#124; `top_k` &#124; 忽略 &#124; 该参数会被忽略 &#124;<br>&#124; `stop_sequences` &#124; 忽略 &#124; 该参数会被忽略 &#124;<br>&#124; `mcp_servers` &#124; 忽略 &#124; 该参数会被忽略 &#124;<br>&#124; `context_management` &#124; 忽略 &#124; 该参数会被忽略 &#124;<br>&#124; `container` &#124; 忽略 &#124; 该参数会被忽略 &#124;<br>### Thinking 控制<br>`thinking` 参数用于控制模型是否可以输出 `thinking` 内容块。不同模型的行为不同：<br>&#124; 模型 &#124; 省略 `thinking` &#124; `{"type": "adaptive"}` &#124; `{"type": "disabled"}` &#124;<br>&#124; :- &#124; :- &#124; :- &#124; :- &#124;<br>&#124; `MiniMax-M3.1-Flash` &#124; 开启 thinking &#124; 开启 thinking &#124; **返回 `400`**，thinking 无法关闭 &#124;<br>&#124; `MiniMax-M3` &#124; 关闭 thinking &#124; 开启 thinking &#124; 保持 thinking 关闭 &#124;<br>&gt; [!NOTE]<br>&gt;<br>&gt; 传入 `thinking: {"type": "disabled"}` 时返回的错误信息：<br>&gt;<br>&gt; ```text theme={null}<br>&gt; model "MiniMax-M3.1-Flash" requires adaptive thinking; thinking.type="disabled" (including reasoning.effort=none) is not allowed (2013)<br>&gt; ``` |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • export ANTHROPIC_API_KEY=${YOUR_API_KEY} |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-anthropic-api |
| source ref | 新增 | 未记录 | minimax-cn-anthropic-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • 模型名称<br>• 上下文窗口<br>• 模型介绍 |
| tables › 第 1 项 › heading | 新增 | 未记录 | 支持的模型 |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • MiniMax-M3.1-Flash<br>• 1,000,000<br>• **原生多模态、1M 上下文的 Frontier Coding 模型，思考深度可调** |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • MiniMax-M3<br>• 1,000,000<br>• **原生多模态、1M 上下文的 Frontier Coding 模型** |
| tables › 第 2 项 › headers | 新增 | 未记录 | • 参数<br>• 支持状态<br>• 说明 |
| tables › 第 2 项 › heading | 新增 | 未记录 | 支持的参数 |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • `model`<br>• 完全支持<br>• 支持 `MiniMax-M3.1-Flash` `MiniMax-M3` 模型 |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • `messages`<br>• 部分支持<br>• `MiniMax-M3.1-Flash` 和 `MiniMax-M3` 支持文本、图片、视频、工具调用、工具结果和 thinking 内容块。M2.7、M2.5、M2.1 和 M2 系列仅支持文本与工具调用相关内容块，不支持图片和视频输入 |
| tables › 第 2 项 › rows › 第 3 项 | 新增 | 未记录 | • `max_tokens`<br>• 完全支持<br>• 最大生成 token 数。思考 token 也计入此上限，设置过小会导致 `stop_reason` 为 `max_tokens` 且无文本输出 |
| tables › 第 2 项 › rows › 第 4 项 | 新增 | 未记录 | • `stream`<br>• 完全支持<br>• 流式响应 |
| tables › 第 2 项 › rows › 第 5 项 | 新增 | 未记录 | • `system`<br>• 完全支持<br>• 系统提示词 |
| tables › 第 2 项 › rows › 第 6 项 | 新增 | 未记录 | • `tool_choice`<br>• 部分支持<br>• 工具选择策略，仅支持 `auto` |
| tables › 第 2 项 › rows › 第 7 项 | 新增 | 未记录 | • `tools`<br>• 完全支持<br>• 工具定义 |
| tables › 第 2 项 › rows › 第 8 项 | 新增 | 未记录 | • `thinking`<br>• 完全支持<br>• `MiniMax-M3.1-Flash` 强制开启 thinking，传入 `disabled` 会返回 `400`。`MiniMax-M3` 默认关闭 thinking，可通过 `adaptive` 开启。 |
| tables › 第 2 项 › rows › 第 9 项 | 新增 | 未记录 | • `output_config.effort`<br>• 完全支持<br>• 调节 `MiniMax-M3.1-Flash` 的思考深度，可取 `low`、`medium`、`high`、`xhigh`、`max`；省略时默认为 `max`。 |
| tables › 第 2 项 › rows › 第 10 项 | 新增 | 未记录 | • `metadata`<br>• 完全支持<br>• 元信息 |
| tables › 第 2 项 › rows › 第 11 项 | 新增 | 未记录 | • `service_tier`<br>• 完全支持<br>• 请求准入服务层级。支持的取值为 `standard` 和 `priority`；省略时默认使用 `standard`。`priority` 的[价格](https://platform.minimaxi.com/docs/pricing/overview.md#models/text)为 `standard` 的 1.5 倍，并会确保请求获得优先准入，使其排在其他请求之前处理，从而带来更快响应并减少失败。`MiniMax-M3.1-Flash` 不支持该字段。 |
| tables › 第 2 项 › rows › 第 12 项 | 新增 | 未记录 | • `temperature`<br>• 忽略<br>• 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 1 |
| tables › 第 2 项 › rows › 第 13 项 | 新增 | 未记录 | • `top_p`<br>• 忽略<br>• 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 0.95。若传入，取值需在 (0, 1] 范围内 |
| tables › 第 2 项 › rows › 第 14 项 | 新增 | 未记录 | • `top_k`<br>• 忽略<br>• 该参数会被忽略 |
| tables › 第 2 项 › rows › 第 15 项 | 新增 | 未记录 | • `stop_sequences`<br>• 忽略<br>• 该参数会被忽略 |
| tables › 第 2 项 › rows › 第 16 项 | 新增 | 未记录 | • `mcp_servers`<br>• 忽略<br>• 该参数会被忽略 |
| tables › 第 2 项 › rows › 第 17 项 | 新增 | 未记录 | • `context_management`<br>• 忽略<br>• 该参数会被忽略 |
| tables › 第 2 项 › rows › 第 18 项 | 新增 | 未记录 | • `container`<br>• 忽略<br>• 该参数会被忽略 |
| tables › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 省略 `thinking`<br>• `{"type": "adaptive"}`<br>• `{"type": "disabled"}` |
| tables › 第 3 项 › heading | 新增 | 未记录 | Thinking 控制 |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • `MiniMax-M3.1-Flash`<br>• 开启 thinking<br>• 开启 thinking<br>• **返回 `400`**，thinking 无法关闭 |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • `MiniMax-M3`<br>• 关闭 thinking<br>• 开启 thinking<br>• 保持 thinking 关闭 |
| tables › 第 4 项 › headers | 新增 | 未记录 | • 字段类型<br>• 支持状态<br>• 说明 |
| tables › 第 4 项 › heading | 新增 | 未记录 | Messages 字段支持 |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • `type="text"`<br>• 完全支持<br>• 文本消息 |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • `type="image"`<br>• 仅 M3.1-Flash / M3<br>• 通过 URL 或 base64 输入图片，支持 JPEG、PNG、GIF、WEBP |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • `type="video"`<br>• 仅 M3.1-Flash / M3<br>• 通过 URL、base64 或 `mm_file://{file_id}` 输入视频，支持 MP4、AVI、MOV、MKV |
| tables › 第 4 项 › rows › 第 4 项 | 新增 | 未记录 | • `type="tool_use"`<br>• 完全支持<br>• 工具调用 |
| tables › 第 4 项 › rows › 第 5 项 | 新增 | 未记录 | • `type="tool_result"`<br>• 完全支持<br>• 工具调用结果 |
| tables › 第 4 项 › rows › 第 6 项 | 新增 | 未记录 | • `type="thinking"`<br>• 完全支持<br>• 推理内容。多轮 thinking 对话中需要原样回带 |
| tables › 第 5 项 › headers | 新增 | 未记录 | • `detail`<br>• 单张图片粗略 token 用量 |
| tables › 第 5 项 › heading | 新增 | 未记录 | Messages 字段支持 |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • `low`<br>• 通常为几百 token，最高约 600 |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • `default`<br>• 通常约 1k-3k token，最高约 5k |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • `high`<br>• 通常为数千 token，最高约 15k+ |
| title | 新增 | 未记录 | Anthropic SDK |

#### 来源 / minimax-cn-asr-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • ````yaml api-reference/speech/speech-to-text/api/openapi.json POST /v1/speech_to_text<br>• POST /v1/speech_to_text |
| capability mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li># 语音识别</li><li>&gt; 使用本接口，将音频文件转写为文本，支持流式返回、说话人分离与字幕导出。</li><li>````yaml api-reference/speech/speech-to-text/api/openapi.json POST /v1/speech_to_text</li><li>description: MiniMax 语音识别（Speech-to-Text）API，支持一次性返回与流式返回</li><li>/v1/speech_to_text:</li><li>- SpeechToText</li><li>summary: 语音识别</li><li>operationId: speechToText</li><li>语言标签](https://www.rfc-editor.org/info/bcp47/)，用于提示音频中的主要语言。不传该请求头或传空值时，启用混合语言识别。</li><li>待识别的音频文件，填写文件的路径地址。</li><li>上传的音频文件需遵从以下规范：</li><li>语音识别不依赖高采样率与立体声，未压缩的高规格音频容易超过大小上限（如 500 秒 48 kHz 立体声 WAV 约</li><li>为音频时长（单位秒，仅终止事件返回）。客户端应按 `index` 顺序拼接所有 `delta`，并在收到</li><li>description: 输入音频的时长，单位为秒。计费以该时长为准。</li><li>invalid params, audio duration 623.4s exceeds the limit of 500s</li><li>message: audio content contains sensitive content (1026)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 语音识别<br>&gt; 使用本接口，将音频文件转写为文本，支持流式返回、说话人分离与字幕导出。<br>## OpenAPI<br>````yaml api-reference/speech/speech-to-text/api/openapi.json POST /v1/speech_to_text<br>openapi: 3.1.0<br>info:<br>title: MiniMax ASR API<br>description: MiniMax 语音识别（Speech-to-Text）API，支持一次性返回与流式返回<br>license:<br>name: MIT<br>version: 1.0.0<br>servers:<br>- url: https://api.minimax.cn<br>security:<br>- bearerAuth: []<br>paths:<br>/v1/speech_to_text:<br>post:<br>tags:<br>- SpeechToText<br>summary: 语音识别<br>operationId: speechToText<br>parameters:<br>- name: Content-Type<br>in: header<br>required: true<br>description: 请求体的媒介类型，固定为 `multipart/form-data`。<br>schema:<br>type: string<br>enum:<br>- multipart/form-data<br>default: multipart/form-data<br>- name: language<br>in: header<br>required: false<br>description: &gt;-<br>可选的 [BCP-47<br>语言标签](https://www.rfc-editor.org/info/bcp47/)，用于提示音频中的主要语言。不传该请求头或传空值时，启用混合语言识别。<br>当前支持：`zh`（中文）、`yue`（粤语）、`en`（英语）、`ja`（日语）、`ko`（韩语）、`th`（泰语）、`vi`（越南语）、`id`（印尼语）、`ms`（马来语）、`fil`（菲律宾语）、`ar`（阿拉伯语）、`tr`（土耳其语）、`fr`（法语）、`de`（德语）、`es`（西班牙语）、`it`（意大利语）、`pt`（葡萄牙语）、`pl`（波兰语）、`ru`（俄语）和<br>`uk`（乌克兰语）。<br>schema:<br>type: string<br>default: ''<br>example: en<br>requestBody:<br>required: true<br>content:<br>multipart/form-data:<br>schema:<br>type: object<br>required:<br>- model<br>- file<br>properties:<br>model:<br>type: string<br>description: 本次调用的模型版本。<br>enum:<br>- asr-1.0<br>default: asr-1.0<br>example: asr-1.0<br>file:<br>type: string<br>format: binary<br>description: &gt;-<br>待识别的音频文件，填写文件的路径地址。<br>上传的音频文件需遵从以下规范：<br>&#124; 项 &#124; 约束 &#124;<br>&#124; --- &#124; --- &#124;<br>&#124; 格式 &#124; `wav` / `aiff` / `flac` / `alac`(m4a) / `mp3` / `aac`<br>/ `opus` / `ogg` &#124;<br>&#124; 时长 &#124; 不超过 **500 秒**；超出会返回 `400` 而不会被截断 &#124;<br>&#124; 大小 &#124; 不超过 **50 MB**；超出返回 `413` &#124;<br>不支持无容器的裸 PCM 数据。<br>语音识别不依赖高采样率与立体声，未压缩的高规格音频容易超过大小上限（如 500 秒 48 kHz 立体声 WAV 约<br>92 MB）。建议先转为单声道 16 kHz，或改用 `mp3` / `aac` / `opus`<br>等压缩格式，识别结果不受影响。<br>response_format:<br>type: string<br>description: &gt;-<br>识别结果的返回格式。<br>&#124; 取值 &#124; 返回内容 &#124; 响应类型 &#124;<br>&#124; --- &#124; --- &#124; --- &#124;<br>&#124; `json` &#124; `text` + `duration` &#124; `application/json` &#124;<br>&#124; `verbose_json` &#124; `text` + `duration` + `segments` +<br>`n_speakers`（含说话人分离与时间戳） &#124; `application/json` &#124;<br>&#124; `srt` &#124; SRT 字幕 &#124; `text/plain` &#124;<br>&#124; `vtt` &#124; WebVTT 字幕 &#124; `text/vtt` &#124;<br>`verbose_json` / `srt` / `vtt` 会启用说话人分离与时间戳对齐，因此**不能与<br>`stream=true` 同时使用**。<br>`srt` 的响应体：<br>```<br>1<br>00:00:00,100 --&gt; 00:00:01,660<br>嘎嘎会，可以，这把稳了。<br>2<br>00:00:02,000 --&gt; 00:00:06,100 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/AsrResp'<br>• $ref: '#/components/responses/Err400'<br>• $ref: '#/components/responses/Err401'<br>• $ref: '#/components/responses/Err402'<br>• $ref: '#/components/responses/Err413'<br>• $ref: '#/components/responses/Err422'<br>• $ref: '#/components/responses/Err429'<br>• $ref: '#/components/responses/Err500'<br>• $ref: '#/components/schemas/AsrSegment'<br>• $ref: '#/components/schemas/OaiErrorDetail'<br>• $ref: '#/components/schemas/OaiError' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-asr-api |
| source ref | 新增 | 未记录 | minimax-cn-asr-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 语音识别 |

#### 来源 / minimax-cn-audio-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • &#124; [同步语音合成（HTTP）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-http.md) &#124; `https://api.minimax.cn/v1/t2a_v2` &#124; `https://api-bj.minimaxi.com/v1/t2a_v2` &#124;<br>• &#124; [同步语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket.md) &#124; `wss://api.minimax.cn/ws/v1/t2a_v2` &#124; `wss://api-bj.minimaxi.com/ws/v1/t2a_v2` &#124;<br>• &#124; [双向流式语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket-bidi.md) &#124; `wss://api.minimax.cn/ws/v1/t2a_v2_bidi` &#124; `wss://api-bj.minimaxi.com/ws/v1/t2a_v2_bidi` &#124;<br>• url = "wss://api.minimax.cn/ws/v1/t2a_v2" |
| capability mentions | 新增 | 未记录 | 列表（51 项）<details><summary>展开完整内容</summary><ul><li># 同步语音合成</li><li>&gt; 同步语音合成支持基于文本到语音的同步生成，单次可处理最长 10,000 字符的文本。</li><li>以下为 MiniMax 提供的语音模型及其特性说明。</li><li>&#124; speech-2.8-hd &#124; 情绪渲染融合语气词，重塑自然听感 &#124;</li><li>&#124; speech-2.8-turbo &#124; 极致生成速度，更自然逼真的音频效果 &#124;</li><li>&#124; speech-2.6-hd &#124; 超低延时，归一化升级，更高自然度 &#124;</li><li>&#124; speech-2.6-turbo &#124; 极速版，更快更优惠，更适用于语音聊天和数字人场景 &#124;</li><li>&#124; speech-02-hd &#124; 拥有出色的韵律、稳定性和复刻相似度，音质表现突出 &#124;</li><li>&#124; speech-02-turbo &#124; 拥有出色的韵律和稳定性，小语种能力加强，性能表现出色 &#124;</li><li>MiniMax 的语音合成模型具备卓越的跨语言能力，全面支持 40 种全球广泛使用的语言。我们致力于打破语言壁垒，构建真正意义上的全球通用人工智能模型。</li><li>控制语音合成前如何将书面文本转换为口语文本。</li><li>文本归一化会把书面写法转换为更适合朗读的形式。例如数字、日期、时间、货币、电话号码等结构化表达，往往需要结合上下文进行展开或解读。</li><li>它使用基于规则的归一化系统，在生成语音前处理常见的书面表达。</li><li>对于大多数语音合成请求，`basic` 能在归一化质量、稳定性和延迟之间取得良好平衡。</li><li>&gt; `quality` 目前仅对非流式 HTTP 请求（`stream=false`）生效，且仅支持 `speech-2.8-hd`、`speech-2.8-turbo`、`speech-2.6-hd`、`speech-2.6-turbo`。流式请求（包括 WebSocket）或其他模型传入 `quality` 时按 `basic` 处理，不会报错。</li><li>同步语音合成的 3 个接口均支持以下域名，华北地区建议接入 `api-bj.minimaxi.com`，首包延迟更低。</li><li>&#124; [同步语音合成（HTTP）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-http.md) &#124; `https://api.minimax.cn/v1/t2a_v2` &#124; `https://api-bj.minimaxi.com/v1/t2a_v2` &#124;</li><li>&#124; [同步语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket.md) &#124; `wss://api.minimax.cn/ws/v1/t2a_v2` &#124; `wss://api-bj.minimaxi.com/ws/v1/t2a_v2` &#124;</li><li>&#124; [双向流式语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket-bidi.md) &#124; `wss://api.minimax.cn/ws/v1/t2a_v2_bidi` &#124; `wss://api-bj.minimaxi.com/ws/v1/t2a_v2_bidi` &#124;</li><li>本指南指导，流式播放返回的音频文件，并保存完整音频文件。</li><li>⚠️ 注意，为实时播放音频流，需要先安装 [mpv 播放器](https://mpv.io/installation/)。并且，需要先将密钥信息写入环境变量 `MINIMAX_API_KEY`（[配置方法](https://platform.minimaxi.com/docs/guides/quickstart-preparation.md#env-vars)）。</li><li>model = "speech-2.8-hd"</li><li>class StreamAudioPlayer:</li><li>def play_audio_chunk(self, hex_audio):</li><li>"""Play audio chunk"""</li><li>audio_bytes = bytes.fromhex(hex_audio)</li><li>self.mpv_process.stdin.write(audio_bytes)</li><li>"audio_setting": {</li><li>"""Send continue request and stream play audio"""</li><li>total_audio_size = 0</li><li>audio_data = b""</li><li>if "data" in response and "audio" in response["data"]:</li><li>audio = response["data"]["audio"]</li><li>if audio:</li><li>audio_bytes = bytes.fromhex(audio)</li><li>if player.play_audio_chunk(audio):</li><li>total_audio_size += len(audio_bytes)</li><li>audio_data += audio_bytes</li><li>print(f"Audio synthesis completed: {chunk_counter-1} chunks")</li><li># Save audio to file</li><li>f.write(audio_data)</li><li>print(f"Audio saved as output.{file_format}")</li><li>estimated_duration = total_audio_size * 0.0625 / 1000</li><li>player = StreamAudioPlayer()</li><li>&gt; [card] [同步语音合成（HTTP）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-http.md)</li><li>&gt; 通过 HTTP 请求一次提交完整文本并返回合成音频，支持流式输出。</li><li>&gt; [card] [同步语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket.md)</li><li>&gt; 通过 WebSocket 连接由客户端按句发送文本，流式返回合成音频，适合低延迟的实时播报。</li><li>&gt; [card] [双向流式语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket-bidi.md)</li><li>&gt; [card] [产品定价](https://platform.minimaxi.com/docs/pricing/overview.md#models/speech)</li><li>&gt; [card] [速率限制](https://platform.minimaxi.com/docs/guides/rate-limits.md#语音)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 同步语音合成<br>&gt; 同步语音合成支持基于文本到语音的同步生成，单次可处理最长 10,000 字符的文本。<br>## 支持模型<br>以下为 MiniMax 提供的语音模型及其特性说明。<br>&#124; 模型 &#124; 特性 &#124;<br>&#124; :- &#124; :- &#124;<br>&#124; speech-2.8-hd &#124; 情绪渲染融合语气词，重塑自然听感 &#124;<br>&#124; speech-2.8-turbo &#124; 极致生成速度，更自然逼真的音频效果 &#124;<br>&#124; speech-2.6-hd &#124; 超低延时，归一化升级，更高自然度 &#124;<br>&#124; speech-2.6-turbo &#124; 极速版，更快更优惠，更适用于语音聊天和数字人场景 &#124;<br>&#124; speech-02-hd &#124; 拥有出色的韵律、稳定性和复刻相似度，音质表现突出 &#124;<br>&#124; speech-02-turbo &#124; 拥有出色的韵律和稳定性，小语种能力加强，性能表现出色 &#124;<br>## 支持语言<br>MiniMax 的语音合成模型具备卓越的跨语言能力，全面支持 40 种全球广泛使用的语言。我们致力于打破语言壁垒，构建真正意义上的全球通用人工智能模型。<br>目前支持的语言包含：<br>&#124; 支持语种 &#124; &#124; &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; 1. 中文（Chinese） &#124; 15. 土耳其语（Turkish） &#124; 28. 马来语（Malay） &#124;<br>&#124; 2. 粤语（Cantonese） &#124; 16. 荷兰语（Dutch） &#124; 29. 波斯语（Persian） &#124;<br>&#124; 3. 英语（English） &#124; 17. 乌克兰语（Ukrainian） &#124; 30. 斯洛伐克语（Slovak） &#124;<br>&#124; 4. 西班牙语（Spanish） &#124; 18. 泰语（Thai） &#124; 31. 瑞典语（Swedish） &#124;<br>&#124; 5. 法语（French） &#124; 19. 波兰语（Polish） &#124; 32. 克罗地亚语（Croatian） &#124;<br>&#124; 6. 俄语（Russian） &#124; 20. 罗马尼亚语（Romanian） &#124; 33. 菲律宾语（Filipino） &#124;<br>&#124; 7. 德语（German） &#124; 21. 希腊语（Greek） &#124; 34. 匈牙利语（Hungarian） &#124;<br>&#124; 8. 葡萄牙语（Portuguese） &#124; 22. 捷克语（Czech） &#124; 35. 挪威语（Norwegian） &#124;<br>&#124; 9. 阿拉伯语（Arabic） &#124; 23. 芬兰语（Finnish） &#124; 36. 斯洛文尼亚语（Slovenian） &#124;<br>&#124; 10. 意大利语（Italian） &#124; 24. 印地语（Hindi） &#124; 37. 加泰罗尼亚语（Catalan） &#124;<br>&#124; 11. 日语（Japanese） &#124; 25. 保加利亚语（Bulgarian） &#124; 38. 尼诺斯克语（Nynorsk） &#124;<br>&#124; 12. 韩语（Korean） &#124; 26. 丹麦语（Danish） &#124; 39. 泰米尔语（Tamil） &#124;<br>&#124; 13. 印尼语（Indonesian） &#124; 27. 希伯来语（Hebrew） &#124; 40. 阿非利卡语（Afrikaans） &#124;<br>&#124; 14. 越南语（Vietnamese） &#124; &#124; &#124;<br>## 文本归一化<br>控制语音合成前如何将书面文本转换为口语文本。<br>文本归一化会把书面写法转换为更适合朗读的形式。例如数字、日期、时间、货币、电话号码等结构化表达，往往需要结合上下文进行展开或解读。<br>不传 `text_normalization_mode` 时，沿用 `voice_setting.text_normalization` 的设置（默认关闭）。<br>通过 `text_normalization_mode` 字段控制归一化策略：<br>* `basic`：基于规则的快速文本归一化，延迟低<br>* `quality`：采用 LLM + 规则的混合方案，归一化质量更高，但会增加额外延迟<br>### Basic 模式<br>`basic` 面向低延迟的文本归一化。<br>它使用基于规则的归一化系统，在生成语音前处理常见的书面表达。<br>对于大多数语音合成请求，`basic` 能在归一化质量、稳定性和延迟之间取得良好平衡。<br>```json theme={null}<br>{<br>"text_normalization_mode": "basic"<br>}<br>```<br>### Quality 模式<br>`quality` 适用于归一化质量比延迟更重要的场景。<br>它采用 LLM + 规则的混合方案，系统会根据输入文本自动将请求路由到规则分支或 LLM 分支。<br>与 `basic` 相比，该模式对更复杂、更依赖上下文的输入有更好的归一化效果。<br>```json theme={null}<br>{<br>"text_normalization_mode": "quality"<br>}<br>```<br>&gt; [!NOTE]<br>&gt;<br>&gt; `quality` 目前仅对非流式 HTTP 请求（`stream=false`）生效，且仅支持 `speech-2.8-hd`、`speech-2.8-turbo`、`speech-2.6-hd`、`speech-2.6-turbo`。流式请求（包括 WebSocket）或其他模型传入 `quality` 时按 `basic` 处理，不会报错。<br>### 延迟<br>`quality` 会增加额外的预处理延迟：<br>* 选择规则分支时约 30 ms<br>* 触发 LLM 分支时约 100 ms<br>分支由系统根据输入文本自动选择。<br>### 如何选择<br>大多数应用推荐使用 `basic`。<br>当归一化准确性更重要、且可以接受额外的预处理延迟时，使用 `quality`。<br>## 接入地址<br>同步语音合成的 3 个接口均支持以下域名，华北地区建议接入 `api-bj.minimaxi.com`，首包延迟更低。<br>&#124; 接口 &#124; 默认地址 &#124; 华北地区建议接入 &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; [同步语音合成（HTTP）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-http.md) &#124; `https://api.minimax.cn/v1/t2a_v2` &#124; `https://api-bj.minimaxi.com/v1/t2a_v2` &#124;<br>&#124; [同步语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket.md) &#124; `wss://api.minimax.cn/ws/v1/t2a_v2` &#124; `wss://api-bj.minimaxi.com/ws/v1/t2a_v2` &#124;<br>&#124; [双向流式语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket-bidi.md) &#124; `wss://api.minimax.cn/ws/v1/t2a_v2_bidi` &#124; `wss://api-bj.minimaxi.com/ws/v1/t2a_v2_bidi` &#124;<br>## 流式请求示例<br>本指南指导，流式播放返回的音频文件，并保存完整音频文件。<br>⚠️ 注意，为实时播放音频流，需要先安装 [mpv 播放器](https://mpv.io/installation/)。并且，需要先将密钥信息写入环境变量 `MINIMAX_API_KEY`（[配置方法](https://platform.minimaxi.com/docs/guides/quickstart-preparation.md#env-vars)）。<br>请求示例<br>```python theme={null}<br>import asyncio<br>import websockets<br>import json<br>import ssl<br>import subprocess<br>import os<br>model = "speech-2.8-hd"<br>file_format = "mp3"<br>class StreamAudioPlayer:<br>def __init__(self):<br>self.mpv_process = None<br>def start_mpv(self):<br>"""Start MPV player process"""<br>try:<br>mpv_command = ["mpv", "--no-cache", "--no-terminal", "--", "fd://0"]<br>self.mpv_process = subprocess.Popen(<br>mpv_command,<br>stdin=subprocess.PIPE, |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-audio-guide |
| source ref | 新增 | 未记录 | minimax-cn-audio-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 接入地址 › headers | 新增 | 未记录 | • 接口<br>• 默认地址<br>• 华北地区建议接入 |
| tables › 记录 接入地址 › heading | 新增 | 未记录 | 接入地址 |
| tables › 记录 接入地址 › rows › 记录 [双向流式语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket-bidi.md) | 新增 | 未记录 | • [双向流式语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket-bidi.md)<br>• `wss://api.minimax.cn/ws/v1/t2a_v2_bidi`<br>• `wss://api-bj.minimaxi.com/ws/v1/t2a_v2_bidi` |
| tables › 记录 接入地址 › rows › 记录 [同步语音合成（HTTP）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-http.md) | 新增 | 未记录 | • [同步语音合成（HTTP）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-http.md)<br>• `https://api.minimax.cn/v1/t2a_v2`<br>• `https://api-bj.minimaxi.com/v1/t2a_v2` |
| tables › 记录 接入地址 › rows › 记录 [同步语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket.md) | 新增 | 未记录 | • [同步语音合成（WebSocket）](https://platform.minimaxi.com/docs/api-reference/speech-t2a-websocket.md)<br>• `wss://api.minimax.cn/ws/v1/t2a_v2`<br>• `wss://api-bj.minimaxi.com/ws/v1/t2a_v2` |
| tables › 记录 支持模型 › headers | 新增 | 未记录 | • 模型<br>• 特性 |
| tables › 记录 支持模型 › heading | 新增 | 未记录 | 支持模型 |
| tables › 记录 支持模型 › rows › 记录 speech-02-hd | 新增 | 未记录 | • speech-02-hd<br>• 拥有出色的韵律、稳定性和复刻相似度，音质表现突出 |
| tables › 记录 支持模型 › rows › 记录 speech-02-turbo | 新增 | 未记录 | • speech-02-turbo<br>• 拥有出色的韵律和稳定性，小语种能力加强，性能表现出色 |
| tables › 记录 支持模型 › rows › 记录 speech-2.6-hd | 新增 | 未记录 | • speech-2.6-hd<br>• 超低延时，归一化升级，更高自然度 |
| tables › 记录 支持模型 › rows › 记录 speech-2.6-turbo | 新增 | 未记录 | • speech-2.6-turbo<br>• 极速版，更快更优惠，更适用于语音聊天和数字人场景 |
| tables › 记录 支持模型 › rows › 记录 speech-2.8-hd | 新增 | 未记录 | • speech-2.8-hd<br>• 情绪渲染融合语气词，重塑自然听感 |
| tables › 记录 支持模型 › rows › 记录 speech-2.8-turbo | 新增 | 未记录 | • speech-2.8-turbo<br>• 极致生成速度，更自然逼真的音频效果 |
| tables › 记录 支持语言 › headers | 新增 | 未记录 | • 支持语种<br>• 空字符串<br>• 空字符串 |
| tables › 记录 支持语言 › heading | 新增 | 未记录 | 支持语言 |
| tables › 记录 支持语言 › rows › 记录 1. 中文（Chinese） | 新增 | 未记录 | • 1. 中文（Chinese）<br>• 15. 土耳其语（Turkish）<br>• 28. 马来语（Malay） |
| tables › 记录 支持语言 › rows › 记录 10. 意大利语（Italian） | 新增 | 未记录 | • 10. 意大利语（Italian）<br>• 24. 印地语（Hindi）<br>• 37. 加泰罗尼亚语（Catalan） |
| tables › 记录 支持语言 › rows › 记录 11. 日语（Japanese） | 新增 | 未记录 | • 11. 日语（Japanese）<br>• 25. 保加利亚语（Bulgarian）<br>• 38. 尼诺斯克语（Nynorsk） |
| tables › 记录 支持语言 › rows › 记录 12. 韩语（Korean） | 新增 | 未记录 | • 12. 韩语（Korean）<br>• 26. 丹麦语（Danish）<br>• 39. 泰米尔语（Tamil） |
| tables › 记录 支持语言 › rows › 记录 13. 印尼语（Indonesian） | 新增 | 未记录 | • 13. 印尼语（Indonesian）<br>• 27. 希伯来语（Hebrew）<br>• 40. 阿非利卡语（Afrikaans） |
| tables › 记录 支持语言 › rows › 记录 14. 越南语（Vietnamese） | 新增 | 未记录 | • 14. 越南语（Vietnamese）<br>• 空字符串<br>• 空字符串 |
| tables › 记录 支持语言 › rows › 记录 2. 粤语（Cantonese） | 新增 | 未记录 | • 2. 粤语（Cantonese）<br>• 16. 荷兰语（Dutch）<br>• 29. 波斯语（Persian） |
| tables › 记录 支持语言 › rows › 记录 3. 英语（English） | 新增 | 未记录 | • 3. 英语（English）<br>• 17. 乌克兰语（Ukrainian）<br>• 30. 斯洛伐克语（Slovak） |
| tables › 记录 支持语言 › rows › 记录 4. 西班牙语（Spanish） | 新增 | 未记录 | • 4. 西班牙语（Spanish）<br>• 18. 泰语（Thai）<br>• 31. 瑞典语（Swedish） |
| tables › 记录 支持语言 › rows › 记录 5. 法语（French） | 新增 | 未记录 | • 5. 法语（French）<br>• 19. 波兰语（Polish）<br>• 32. 克罗地亚语（Croatian） |
| tables › 记录 支持语言 › rows › 记录 6. 俄语（Russian） | 新增 | 未记录 | • 6. 俄语（Russian）<br>• 20. 罗马尼亚语（Romanian）<br>• 33. 菲律宾语（Filipino） |
| tables › 记录 支持语言 › rows › 记录 7. 德语（German） | 新增 | 未记录 | • 7. 德语（German）<br>• 21. 希腊语（Greek）<br>• 34. 匈牙利语（Hungarian） |
| tables › 记录 支持语言 › rows › 记录 8. 葡萄牙语（Portuguese） | 新增 | 未记录 | • 8. 葡萄牙语（Portuguese）<br>• 22. 捷克语（Czech）<br>• 35. 挪威语（Norwegian） |
| tables › 记录 支持语言 › rows › 记录 9. 阿拉伯语（Arabic） | 新增 | 未记录 | • 9. 阿拉伯语（Arabic）<br>• 23. 芬兰语（Finnish）<br>• 36. 斯洛文尼亚语（Slovenian） |
| title | 新增 | 未记录 | 同步语音合成 |

#### 来源 / minimax-cn-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • ````yaml api-reference/file/management/api/openapi.json POST /v1/files/upload<br>• POST /v1/files/upload |
| capability mentions | 新增 | 未记录 | • 2. __prompt_audio__: 音色复刻的示例音频，（支持mp3、m4a、wav格式）<br>• 3. __t2a_async_input__: 异步长文本语音生成合成中，请求体中的文本文件（支持text、zip格式）<br>• 4. __video_understanding__: 多模态理解使用的视频文件，在对话请求中以<br>• 5. __video_generation_input__: 视频生成的输入素材（首帧图 / 参考图 / 参考视频 /<br>• 参考音频），在生成请求 content 的 `url` 字段以 `mm_file://{file_id}`<br>• `video_generation_input` 支持格式与单文件大小上限：<br>• &#124; 参考视频 &#124; mp4 / mov &#124; 50 MB &#124;<br>• &#124; 参考音频 &#124; wav / mp3 &#124; 15 MB &#124;<br>• - prompt_audio<br>• - video_understanding<br>• - video_generation_input |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 文件上传<br>&gt; 使用本接口，在 MiniMax 开放平台，上传所需文件。<br>## OpenAPI<br>````yaml api-reference/file/management/api/openapi.json POST /v1/files/upload<br>openapi: 3.1.0<br>info:<br>title: MiniMax File Management API<br>description: &gt;-<br>MiniMax file management API for uploading, retrieving, listing, and deleting<br>files<br>license:<br>name: MIT<br>version: 1.0.0<br>servers:<br>- url: https://api.minimax.cn<br>security:<br>- bearerAuth: []<br>paths:<br>/v1/files/upload:<br>post:<br>tags:<br>- Files<br>summary: Upload File<br>operationId: uploadFile<br>parameters:<br>- name: Content-Type<br>in: header<br>required: true<br>description: '请求体的媒介类型 `multipart/form-data` '<br>schema:<br>type: string<br>enum:<br>- multipart/form-data<br>default: multipart/form-data<br>requestBody:<br>description: ''<br>content:<br>multipart/form-data:<br>schema:<br>type: object<br>required:<br>- purpose<br>- file<br>properties:<br>purpose:<br>type: string<br>description: &gt;-<br>文件使用目的。取值及支持格式如下：<br>1. __voice_clone__: 快速复刻原始文件，（支持mp3、m4a、wav格式）<br>2. __prompt_audio__: 音色复刻的示例音频，（支持mp3、m4a、wav格式）<br>3. __t2a_async_input__: 异步长文本语音生成合成中，请求体中的文本文件（支持text、zip格式）<br>4. __video_understanding__: 多模态理解使用的视频文件，在对话请求中以<br>`mm_file://{file_id}` 形式引用，最长保存时间为 7 天（支持 MP4、AVI、MOV、MKV<br>格式）<br>5. __video_generation_input__: 视频生成的输入素材（首帧图 / 参考图 / 参考视频 /<br>参考音频），在生成请求 content 的 `url` 字段以 `mm_file://{file_id}`<br>形式引用，有效期 7 天（过期后发起生成返回 file expired，需重新上传）；上传即校验规格，不合格返回 400<br>且不留存，heic/heif 宽高由服务端解析、无需客户端转码。<br>`video_generation_input` 支持格式与单文件大小上限：<br>&#124; 类型 &#124; 扩展名 &#124; 单文件上限 &#124;<br>&#124; --- &#124; --- &#124; --- &#124;<br>&#124; 图片 &#124; jpg / jpeg / png / webp / heic / heif &#124; 30 MB &#124;<br>&#124; 参考视频 &#124; mp4 / mov &#124; 50 MB &#124;<br>&#124; 参考音频 &#124; wav / mp3 &#124; 15 MB &#124;<br>enum:<br>- voice_clone<br>- prompt_audio<br>- t2a_async_input<br>- video_understanding<br>- video_generation_input<br>example: t2a_async_input<br>file:<br>type: string<br>format: binary<br>description: 需要上传的文件。填写文件的路径地址<br>required: true<br>responses:<br>'200':<br>description: ''<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/UploadFileResp'<br>components:<br>schemas:<br>UploadFileResp:<br>type: object<br>properties:<br>file:<br>$ref: '#/components/schemas/FileObject'<br>base_resp:<br>$ref: '#/components/schemas/UploadFileBaseResp'<br>example:<br>file:<br>file_id: ${file_id}<br>bytes: 5896337<br>created_at: 1700469398 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/UploadFileResp'<br>• $ref: '#/components/schemas/FileObject'<br>• $ref: '#/components/schemas/UploadFileBaseResp'<br>• file_id: ${file_id} |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-file-upload-api |
| source ref | 新增 | 未记录 | minimax-cn-file-upload-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 文件上传 |

#### 来源 / minimax-cn-function-call-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • export ANTHROPIC_BASE_URL=https://api.minimax.cn/anthropic<br>• export OPENAI_BASE_URL=https://api.minimax.cn/v1 |
| capability mentions | 新增 | 未记录 | 列表（26 项）<details><summary>展开完整内容</summary><ul><li>下面我们通过具体的案例，说明 MiniMax-M3.1-Flash 在 Tool Use 和 Interleaved Thinking 上的最佳实践，它的核心是：回传每一次模型 Response 的全部信息，尤其是其中的思考字段（`thinking` / `reasoning_content`）。</li><li>* `thinking` / `reasoning_content`: 模型的思考（thinking）</li><li>* `tool_use` / `tool_calls`: 模型决定调用工具</li><li>* `input` / `function.arguments`: 工具调用参数（OpenAI 格式下为 JSON 字符串）</li><li>* `id`: 工具调用的唯一标识符</li><li>&gt; MiniMax-M3.1-Flash 按需思考：在简单的工具调用中，模型可能直接调用工具而不输出思考内容，此时该轮响应中没有 `thinking` 内容块或 `reasoning_content` 字段。解析时请先判断字段是否存在，无论本轮是否包含思考内容，都需要完整回传模型返回的消息。</li><li>* 将完整的 `response_message` 对象（包含 `reasoning_content` 和 `tool_calls` 字段）添加到消息历史</li><li>* 模型的思考内容通过 `reasoning_content` 字段返回，回传时需要一并保留</li><li># 2. 模型返回第一轮响应（可能包含工具调用）</li><li># 3. 如果有工具调用，执行工具并继续对话</li><li>通过 OpenAI SDK 调用 MiniMax-M3.1-Flash 时，思考内容通过 `reasoning_content` 字段返回，可以直接用于展示。</li><li>&gt; 重要提醒：为了保证 Interleaved Thinking 的生效、模型思维链不被打断，包含 `reasoning_content` 在内的完整 `response_message` 必须被保留在 Message History 中，在下一轮调用中回传给模型。如此才能发挥模型的最佳性能！</li><li># 2. 模型返回工具调用</li><li>if response_message.tool_calls:</li><li>tool_call = response_message.tool_calls[0]</li><li>function_args = json.loads(tool_call.function.arguments)</li><li>if getattr(response_message, "reasoning_content", None):</li><li>print(f"💭 Thinking&gt;\t {response_message.reasoning_content}")</li><li>print(f"🔧 Tool&gt;\t {tool_call.function.name}({function_args['location']})")</li><li># ⚠️ 关键：完整回传 response_message（包含 reasoning_content 和 tool_calls）</li><li>"tool_call_id": tool_call.id,</li><li>if getattr(final_message, "reasoning_content", None):</li><li>print(f"💭 Thinking&gt;\t {final_message.reasoning_content}")</li><li>"finish_reason": "tool_calls",</li><li>"tool_calls": [</li><li>"audio_content": ""</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 工具使用 &amp; 交错思维链<br>&gt; MiniMax-M3.1-Flash 是一款 Agentic Model，具备优秀的工具使用 (Tool Use) 能力。<br>MiniMax-M3.1-Flash 原生支持 Interleaved Thinking。它能够在每轮 Tool Use 前，根据环境或工具的返回 (Output) 进行思考，并决策下一步行动。<br>![](https://filecdn.minimax.chat/public/4f4b43c1-f0a5-416a-8770-1a4f80feeb1e.png)<br>这种能力使其在长程、复杂任务中表现出色，并在 SWE、BrowseComp、xBench 等 Code &amp; Agent Benchmark 上达到了 SOTA 水平。<br>下面我们通过具体的案例，说明 MiniMax-M3.1-Flash 在 Tool Use 和 Interleaved Thinking 上的最佳实践，它的核心是：回传每一次模型 Response 的全部信息，尤其是其中的思考字段（`thinking` / `reasoning_content`）。<br>## 参数说明<br>### 请求参数说明<br>* `tools`: 定义可调用的函数列表，包含函数名、描述和参数规范<br>### 响应参数说明<br>工具使用响应中的关键字段：<br>* `thinking` / `reasoning_content`: 模型的思考（thinking）<br>* `text` / `content`: 模型输出的文本<br>* `tool_use` / `tool_calls`: 模型决定调用工具<br>* `name` / `function.name`: 被调用的工具名称<br>* `input` / `function.arguments`: 工具调用参数（OpenAI 格式下为 JSON 字符串）<br>* `id`: 工具调用的唯一标识符<br>&gt; [!NOTE]<br>&gt;<br>&gt; MiniMax-M3.1-Flash 按需思考：在简单的工具调用中，模型可能直接调用工具而不输出思考内容，此时该轮响应中没有 `thinking` 内容块或 `reasoning_content` 字段。解析时请先判断字段是否存在，无论本轮是否包含思考内容，都需要完整回传模型返回的消息。<br>## 特别注意<br>在多轮 Function Call 对话中，必须将完整的模型返回（即 assistant 消息）添加到对话历史，以保持思维链的连续性：<br>**OpenAI SDK:**<br>* 将完整的 `response_message` 对象（包含 `reasoning_content` 和 `tool_calls` 字段）添加到消息历史<br>* 模型的思考内容通过 `reasoning_content` 字段返回，回传时需要一并保留<br>**Anthropic SDK:**<br>* 将完整的 `response.content`（包含 thinking/text/tool\_use 等所有块）添加到消息历史<br>* `response.content` 是一个列表，包含多种类型的内容块，必须完整回传<br>## 请求示例<br>### Anthropic SDK<br>#### 配置环境变量<br>```bash theme={null}<br>export ANTHROPIC_BASE_URL=https://api.minimax.cn/anthropic<br>export ANTHROPIC_API_KEY=${YOUR_API_KEY}<br>```<br>配置方法见[配置环境变量](https://platform.minimaxi.com/docs/guides/quickstart-preparation.md#env-vars)。<br>#### 示例代码<br>```python theme={null}<br>import anthropic<br>import json<br># 初始化客户端<br>client = anthropic.Anthropic()<br># 定义工具：天气查询<br>tools = [<br>{<br>"name": "get_weather",<br>"description": "Get weather of a location, the user should supply a location first.",<br>"input_schema": {<br>"type": "object",<br>"properties": {<br>"location": {<br>"type": "string",<br>"description": "The city and state, e.g. San Francisco, US",<br>}<br>},<br>"required": ["location"]<br>}<br>}<br>]<br>def send_messages(messages):<br>params = {<br>"model": "MiniMax-M3.1-Flash",<br>"max_tokens": 4096,<br>"messages": messages,<br>"tools": tools,<br>}<br>response = client.messages.create(**params)<br>return response<br>def process_response(response):<br>thinking_blocks = []<br>text_blocks = []<br>tool_use_blocks = []<br># 遍历所有内容块<br>for block in response.content:<br>if block.type == "thinking":<br>thinking_blocks.append(block)<br>print(f"💭 Thinking&gt;\n{block.thinking}\n")<br>elif block.type == "text":<br>text_blocks.append(block)<br>print(f"💬 Model&gt;\t{block.text}")<br>elif block.type == "tool_use":<br>tool_use_blocks.append(block)<br>print(f"🔧 Tool&gt;\t{block.name}({json.dumps(block.input, ensure_ascii=False)})")<br>return thinking_blocks, text_blocks, tool_use_blocks<br># 1. 用户提问<br>messages = [{"role": "user", "content": "How's the weather in San Francisco?"}]<br>print(f"\n👤 User&gt;\t {messages[0]['content']}")<br># 2. 模型返回第一轮响应（可能包含工具调用）<br>response = send_messages(messages)<br>thinking_blocks, text_blocks, tool_use_blocks = process_response(response)<br># 3. 如果有工具调用，执行工具并继续对话<br>if tool_use_blocks:<br># ⚠️ 关键：将助手的完整响应回传到消息历史<br># response.content 包含所有块的列表：[thinking块, text块, tool_use块]<br># 必须完整回传，否则后续对话会丢失上下文信息<br>messages.append({<br>"role": "assistant", |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • export ANTHROPIC_API_KEY=${YOUR_API_KEY}<br>• export OPENAI_API_KEY=${YOUR_API_KEY}<br>• &gt; [card] [在 AI 编程工具里使用 MiniMax-M3.1-Flash](https://platform.minimaxi.com/docs/m-plan/openclaw.md) |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-function-call-api |
| source ref | 新增 | 未记录 | minimax-cn-function-call-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 工具使用 &amp; 交错思维链 |

#### 来源 / minimax-cn-image-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • url = "https://api.minimax.cn/v1/image_generation" |
| capability mentions | 新增 | 未记录 | • &gt; 图片生成服务提供文生图（text-to-image）与图生图（image-to-image）两种核心功能。<br>• url = "https://api.minimax.cn/v1/image_generation"<br>• "model": "image-01",<br>• "prompt": "men Dressing in white t shirt, full-body stand front view image :25, outdoor, Venice beach sign, full-body image, Los Angeles, Fashion photography of 90s, documentary, Film grain, photorealistic",<br>• images = response.json()["data"]["image_base64"]<br>• for i in range(len(images)):<br>• f.write(base64.b64decode(images[i]))<br>• "image_file": "https://cdn.hailuoai.com/prod/2025-08-12-17/video_cover/1754990600020238321-411603868533342214-cover.jpg",<br>• &gt; [card] [文生图接口](https://platform.minimaxi.com/docs/api-reference/image-generation-t2i.md)<br>• &gt; [card] [图生图接口](https://platform.minimaxi.com/docs/api-reference/image-generation-i2i.md)<br>• &gt; [card] [产品定价](https://platform.minimaxi.com/docs/pricing/overview.md#models/image) |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 图片生成<br>&gt; 图片生成服务提供文生图（text-to-image）与图生图（image-to-image）两种核心功能。<br>## 根据文本生成图片<br>根据详尽的文本描述（prompt），直接生成与之匹配的图片。<br>```python 请求示例 theme={null}<br>import base64<br>import requests<br>import os<br>url = "https://api.minimax.cn/v1/image_generation"<br>api_key = os.environ.get("MINIMAX_API_KEY")<br>headers = {"Authorization": f"Bearer {api_key}"}<br>payload = {<br>"model": "image-01",<br>"prompt": "men Dressing in white t shirt, full-body stand front view image :25, outdoor, Venice beach sign, full-body image, Los Angeles, Fashion photography of 90s, documentary, Film grain, photorealistic",<br>"aspect_ratio": "16:9",<br>"response_format": "base64",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>images = response.json()["data"]["image_base64"]<br>for i in range(len(images)):<br>with open(f"output-{i}.jpeg", "wb") as f:<br>f.write(base64.b64decode(images[i]))<br>```<br>生成结果：<br>![图片描述](https://filecdn.minimax.chat/public/5d969bc8-047c-424d-b7f8-87ece21e8f13.jpeg)<br>## 结合参考图生成图片<br>此功能允许提供一张包含清晰主体的参考图（支持网络图片链接），并结合 prompt 描述，生成一张保留了主体特征的新图片。当前每次请求仅支持传入一张参考图。该功能尤其适用于需要保持人物形象一致性的场景，例如为同一个虚拟角色生成不同情境下的图片。<br>```python 请求示例 theme={null}<br>import base64<br>import requests<br>import os<br>url = "https://api.minimax.cn/v1/image_generation"<br>api_key = os.environ.get("MINIMAX_API_KEY")<br>headers = {"Authorization": f"Bearer {api_key}"}<br>payload = {<br>"model": "image-01",<br>"prompt": "女孩在图书馆的窗户前，看向远方",<br>"aspect_ratio": "16:9",<br>"subject_reference": [<br>{<br>"type": "character",<br>"image_file": "https://cdn.hailuoai.com/prod/2025-08-12-17/video_cover/1754990600020238321-411603868533342214-cover.jpg",<br>}<br>],<br>"response_format": "base64",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>images = response.json()["data"]["image_base64"]<br>for i in range(len(images)):<br>with open(f"output-{i}.jpeg", "wb") as f:<br>f.write(base64.b64decode(images[i]))<br>```<br>生成结果：<br>![图片描述](https://filecdn.minimax.chat/public/0a70cf90-9ae2-4593-b4a3-84ec9ab3429a.jpeg)<br>## 推荐阅读<br>&gt; [card] [文生图接口](https://platform.minimaxi.com/docs/api-reference/image-generation-t2i.md)<br>&gt;<br>&gt; 使用 API 接口，输入文本描述，进行图片生成。<br>&gt; [card] [图生图接口](https://platform.minimaxi.com/docs/api-reference/image-generation-i2i.md)<br>&gt;<br>&gt; 使用 API 接口，输入图片内容，进行图片生成。<br>&gt; [card] [产品定价](https://platform.minimaxi.com/docs/pricing/overview.md#models/image)<br>&gt;<br>&gt; 各模型的定价说明、计费方式及使用限制。<br>&gt; [card] [速率限制](https://platform.minimaxi.com/docs/guides/rate-limits.md#3、我们的-api-的限速具体数值)<br>&gt;<br>&gt; 为保证资源的高效使用，引入速率限制，以确保服务的可用性、稳定性。 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • url = "https://api.minimax.cn/v1/image_generation"<br>• &gt; [card] [文生图接口](https://platform.minimaxi.com/docs/api-reference/image-generation-t2i.md)<br>• &gt; [card] [图生图接口](https://platform.minimaxi.com/docs/api-reference/image-generation-i2i.md)<br>• &gt; [card] [产品定价](https://platform.minimaxi.com/docs/pricing/overview.md#models/image) |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-image-guide |
| source ref | 新增 | 未记录 | minimax-cn-image-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 图片生成 |

#### 来源 / minimax-cn-m-plan-intro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • [**M Plan**](https://www.minimax.cn/m-plan) 是专为个人打造的 AI 订阅，汇集 MiniMax 主流模型，涵盖文本、视频、图像与音频生成，让你在工作与爱好中都能得心应手。订阅分为 Go、Explore 和 Build 三个档位，可按使用强度选择。[立即订阅](https://www.minimax.cn/m-plan)<br>• &#124; 视频模型 &#124; 不可用 &#124; 可用 H3 &#124; 可用 H3 &#124;<br>• &#124; 其他多模态 &#124; 图像与音频模型 &#124; 图像与音频模型 &#124; 图像与音频模型 &#124;<br>• 各档位用量的实际消耗会因模型、上下文长度和任务复杂度而不同，其中视频生成的消耗远高于文本，经常生成视频时额度会用得更快。你可以参考下表，按自己的实际使用习惯、任务场景来灵活选择档位。 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># M Plan 概览<br>&gt; 了解 M Plan 的档位、可用模型、用量与支持的产品。<br>[**M Plan**](https://www.minimax.cn/m-plan) 是专为个人打造的 AI 订阅，汇集 MiniMax 主流模型，涵盖文本、视频、图像与音频生成，让你在工作与爱好中都能得心应手。订阅分为 Go、Explore 和 Build 三个档位，可按使用强度选择。[立即订阅](https://www.minimax.cn/m-plan)<br>## 可用模型<br>&gt; [!NOTE]<br>&gt;<br>&gt; MiniMax-M3.1-Flash-Preview 已下线，旧名称的请求将由 MiniMax-M3.1-Flash 提供服务。<br>&#124; 模型 &#124; Go &#124; Explore &#124; Build &#124;<br>&#124; :- &#124; :- &#124; :- &#124; :- &#124;<br>&#124; 文本模型 &#124; 可用 M3.1 Flash &#124; 可用 M3.1 Flash &#124; 可用 M3.1 Flash &#124;<br>&#124; 视频模型 &#124; 不可用 &#124; 可用 H3 &#124; 可用 H3 &#124;<br>&#124; 其他多模态 &#124; 图像与音频模型 &#124; 图像与音频模型 &#124; 图像与音频模型 &#124;<br>## 用量额度<br>各档位用量的实际消耗会因模型、上下文长度和任务复杂度而不同，其中视频生成的消耗远高于文本，经常生成视频时额度会用得更快。你可以参考下表，按自己的实际使用习惯、任务场景来灵活选择档位。<br>&#124; 档位 &#124; 用量（相对 Go） &#124; 使用参考 &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; Go &#124; - &#124; 入门使用，完成简单调研、轻量写作或小范围的代码修改。 &#124;<br>&#124; Explore &#124; 3 倍 &#124; 每天使用，日常辅助编程、写作与资料整理，处理多轮任务。 &#124;<br>&#124; Build &#124; 12 倍 &#124; 高频使用，处理长上下文、复杂的编程任务或大量多模态创作。 &#124;<br>## 支持的产品<br>订阅 M Plan 后，你可以通过以下两种方式使用：<br>&gt; [card] [MiniMax Code · 官方推荐](https://platform.minimaxi.com/docs/m-plan/minimax-code.md)<br>&gt;<br>&gt; 从本地项目开发到日常工作，使用 MiniMax 官方 Agent 应用，登录即可享有 M Plan 会员权益，无需另行订阅或配置 API Key。<br>**其他 AI 工具：** 获取 M Plan 的 [API Key](https://platform.minimax.cn/console/plan)，将模型接入 Claude Code、Codex、Cursor、OpenCode 等其他你习惯用的 AI 工具。<br>&gt; [card] [Claude Code](https://platform.minimaxi.com/docs/m-plan/claude-code.md)<br>&gt; [card] [Codex](https://platform.minimaxi.com/docs/m-plan/codex.md)<br>&gt; [card] [Cursor](https://platform.minimaxi.com/docs/m-plan/cursor.md)<br>&gt; [card] [OpenCode](https://platform.minimaxi.com/docs/m-plan/opencode.md)<br>&gt; [card] [Pi](https://platform.minimaxi.com/docs/m-plan/pi.md)<br>&gt; [card] [Hermes Agent](https://platform.minimaxi.com/docs/m-plan/hermes-agent.md)<br>&gt; [card] [OpenClaw](https://platform.minimaxi.com/docs/m-plan/openclaw.md)<br>&gt; [card] [其他工具](https://platform.minimaxi.com/docs/m-plan/other-tools.md) |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li># M Plan 概览</li><li>&gt; 了解 M Plan 的档位、可用模型、用量与支持的产品。</li><li>[**M Plan**](https://www.minimax.cn/m-plan) 是专为个人打造的 AI 订阅，汇集 MiniMax 主流模型，涵盖文本、视频、图像与音频生成，让你在工作与爱好中都能得心应手。订阅分为 Go、Explore 和 Build 三个档位，可按使用强度选择。[立即订阅](https://www.minimax.cn/m-plan)</li><li>订阅 M Plan 后，你可以通过以下两种方式使用：</li><li>&gt; [card] [MiniMax Code · 官方推荐](https://platform.minimaxi.com/docs/m-plan/minimax-code.md)</li><li>&gt; 从本地项目开发到日常工作，使用 MiniMax 官方 Agent 应用，登录即可享有 M Plan 会员权益，无需另行订阅或配置 API Key。</li><li>**其他 AI 工具：** 获取 M Plan 的 [API Key](https://platform.minimax.cn/console/plan)，将模型接入 Claude Code、Codex、Cursor、OpenCode 等其他你习惯用的 AI 工具。</li><li>&gt; [card] [Claude Code](https://platform.minimaxi.com/docs/m-plan/claude-code.md)</li><li>&gt; [card] [Codex](https://platform.minimaxi.com/docs/m-plan/codex.md)</li><li>&gt; [card] [Cursor](https://platform.minimaxi.com/docs/m-plan/cursor.md)</li><li>&gt; [card] [OpenCode](https://platform.minimaxi.com/docs/m-plan/opencode.md)</li><li>&gt; [card] [Pi](https://platform.minimaxi.com/docs/m-plan/pi.md)</li><li>&gt; [card] [Hermes Agent](https://platform.minimaxi.com/docs/m-plan/hermes-agent.md)</li><li>&gt; [card] [OpenClaw](https://platform.minimaxi.com/docs/m-plan/openclaw.md)</li><li>&gt; [card] [其他工具](https://platform.minimaxi.com/docs/m-plan/other-tools.md)</li></ul></details> |
| scope | 新增 | 未记录 | plan |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-intro |
| source ref | 新增 | 未记录 | minimax-cn-m-plan-intro |
| structured records › 第 1 项 › 说明（description） | 新增 | 未记录 | 入门使用，完成简单调研、轻量写作或小范围的代码修改。 |
| structured records › 第 1 项 › locator | 新增 | 未记录 | #用量额度/table/1 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-intro |
| structured records › 第 1 项 › 服务档位（tier） | 新增 | 未记录 | Go |
| structured records › 第 2 项 › 说明（description） | 新增 | 未记录 | 每天使用，日常辅助编程、写作与资料整理，处理多轮任务。 |
| structured records › 第 2 项 › locator | 新增 | 未记录 | #用量额度/table/2 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-intro |
| structured records › 第 2 项 › 服务档位（tier） | 新增 | 未记录 | Explore |
| structured records › 第 3 项 › 说明（description） | 新增 | 未记录 | 高频使用，处理长上下文、复杂的编程任务或大量多模态创作。 |
| structured records › 第 3 项 › locator | 新增 | 未记录 | #用量额度/table/3 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-intro |
| structured records › 第 3 项 › 服务档位（tier） | 新增 | 未记录 | Build |
| tables › 记录 可用模型 › headers | 新增 | 未记录 | • 模型<br>• Go<br>• Explore<br>• Build |
| tables › 记录 可用模型 › heading | 新增 | 未记录 | 可用模型 |
| tables › 记录 可用模型 › rows › 记录 其他多模态 | 新增 | 未记录 | • 其他多模态<br>• 图像与音频模型<br>• 图像与音频模型<br>• 图像与音频模型 |
| tables › 记录 可用模型 › rows › 记录 文本模型 | 新增 | 未记录 | • 文本模型<br>• 可用 M3.1 Flash<br>• 可用 M3.1 Flash<br>• 可用 M3.1 Flash |
| tables › 记录 可用模型 › rows › 记录 视频模型 | 新增 | 未记录 | • 视频模型<br>• 不可用<br>• 可用 H3<br>• 可用 H3 |
| tables › 记录 用量额度 › headers | 新增 | 未记录 | • 档位<br>• 用量（相对 Go）<br>• 使用参考 |
| tables › 记录 用量额度 › heading | 新增 | 未记录 | 用量额度 |
| tables › 记录 用量额度 › rows › 记录 Build | 新增 | 未记录 | • Build<br>• 12 倍<br>• 高频使用，处理长上下文、复杂的编程任务或大量多模态创作。 |
| tables › 记录 用量额度 › rows › 记录 Explore | 新增 | 未记录 | • Explore<br>• 3 倍<br>• 每天使用，日常辅助编程、写作与资料整理，处理多轮任务。 |
| tables › 记录 用量额度 › rows › 记录 Go | 新增 | 未记录 | • Go<br>• -<br>• 入门使用，完成简单调研、轻量写作或小范围的代码修改。 |
| title | 新增 | 未记录 | M Plan 概览 |

#### 来源 / minimax-cn-m-plan-page

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • 视频生成<br>• 语音&amp;音乐<br>• MiniMax Speech 2.8 MiniMax Music 3.0<br>• MiniMax Speech 2.8 NEW |
| excerpt | 新增 | 未记录 | M Plan - MiniMax API 平台 模型<br>语言模型<br>MiniMax M3.1 Flash MiniMax M3<br>视频生成<br>MiniMax H3<br>语音&amp;音乐<br>MiniMax Speech 2.8 MiniMax Music 3.0<br>API M Plan MiniMax Code 研究 关于我们<br>公司介绍 新闻 投资者关系 加入我们<br>登录<br>MiniMax Code API 开放平台<br>登录<br>MiniMax Code API 开放平台<br>模型<br>语言模型<br>MiniMax M3.1 Flash NEW<br>MiniMax M3 NEW<br>视频生成<br>MiniMax H3 NEW<br>语音&amp;音乐<br>MiniMax Speech 2.8 NEW<br>MiniMax Music 3.0 NEW<br>API<br>M Plan<br>MiniMax Code<br>研究<br>关于我们<br>公司介绍<br>新闻<br>投资者关系<br>加入我们 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • M Plan - MiniMax API 平台 模型<br>• API M Plan MiniMax Code 研究 关于我们<br>• M Plan |
| scope | 新增 | 未记录 | plan |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-m-plan-page |
| source ref | 新增 | 未记录 | minimax-cn-m-plan-page |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | M Plan - MiniMax API 平台 |

#### 来源 / minimax-cn-mcp-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • &gt; [accordion] understand\_image<br>• &gt; &#124; image\_source &#124; string &#124; ✓ &#124; 图片来源，支持 HTTP/HTTPS URL 或本地文件路径 &#124;<br>• 进入 Claude Code 后输入 `/mcp`，能看到 `web_search` 和 `understand_image`，说明配置成功。 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># M Plan MCP<br>&gt; M Plan MCP 提供了两个专属工具：**网络搜索** 和  **图片理解**，帮助开发者在编码过程中快速获取信息和理解图片内容。<br>&gt; [!TIP]<br>&gt;<br>&gt; 推荐使用 [MiniMax CLI](https://platform.minimaxi.com/docs/m-plan/minimax-cli.md) 替代 MCP，配置更简单、使用更高效。<br>## 工具说明<br>&gt; [accordion] web\_search<br>&gt;<br>&gt; 根据搜索查询词进行网络搜索，返回搜索结果和相关搜索建议。<br>&gt;<br>&gt; &#124; 参数 &#124; 类型 &#124; 必需 &#124; 说明 &#124;<br>&gt; &#124; :- &#124; :- &#124; :-: &#124; :- &#124;<br>&gt; &#124; query &#124; string &#124; ✓ &#124; 搜索查询词 &#124;<br>&gt; [accordion] understand\_image<br>&gt;<br>&gt; 对图片进行理解和分析，支持多种图片输入方式。<br>&gt;<br>&gt; &#124; 参数 &#124; 类型 &#124; 必需 &#124; 说明 &#124;<br>&gt; &#124; :- &#124; :- &#124; :-: &#124; :- &#124;<br>&gt; &#124; prompt &#124; string &#124; ✓ &#124; 对图片的提问或分析要求 &#124;<br>&gt; &#124; image\_source &#124; string &#124; ✓ &#124; 图片来源，支持 HTTP/HTTPS URL 或本地文件路径 &#124;<br>&gt;<br>&gt; **支持格式**：JPEG、PNG、WebP<br>## 前置准备<br>**1. 获取 API Key**<br>访问 [订阅管理 &gt; M Plan](https://platform.minimax.cn/user-center/payment/token-plan) 查看您的订阅 Key。该 Key 需要拥有 M Plan 席位或已购积分权限后，才能使用付费资源。<br>**2. 安装 uvx**<br>&gt; [tab] macOS / Linux<br>&gt;<br>&gt; ```bash theme={null}<br>&gt; curl -LsSf https://astral.sh/uv/install.sh &#124; sh<br>&gt; ```<br>&gt; [tab] Windows<br>&gt;<br>&gt; ```powershell theme={null}<br>&gt; powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 &#124; iex"<br>&gt; ```<br>&gt; [!NOTE]<br>&gt;<br>&gt; 其他安装方式可参考 [uv 仓库](https://github.com/astral-sh/uv)。<br>**3. 验证安装**<br>&gt; [tab] macOS / Linux<br>&gt;<br>&gt; ```bash theme={null}<br>&gt; which uvx<br>&gt; ```<br>&gt; [tab] Windows<br>&gt;<br>&gt; ```powershell theme={null}<br>&gt; (Get-Command uvx).source<br>&gt; ```<br>&gt; [!NOTE]<br>&gt;<br>&gt; 若正确安装，会显示路径（如 `/usr/local/bin/uvx`）。若报错 `spawn uvx ENOENT`，需配置绝对路径。<br>## 在 Claude Code 中使用<br>**1. 下载 Claude Code**<br>在 [Claude Code 官网](https://www.claude.com/product/claude-code)下载并安装 Claude Code<br>**2. 配置 MCP**<br>&gt; [tab] 一键安装<br>&gt;<br>&gt; 在终端运行以下命令，将`api_key`替换为您的 API Key：<br>&gt;<br>&gt; ```bash theme={null}<br>&gt; claude mcp add -s user MiniMax --env MINIMAX_API_KEY=api_key --env MINIMAX_API_HOST=https://api.minimax.cn -- uvx minimax-coding-plan-mcp<br>&gt; ```<br>&gt; [tab] 手动配置<br>&gt;<br>&gt; 编辑配置文件 `~/.claude.json`，添加以下 MCP 配置：<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "mcpServers": {<br>&gt;     "MiniMax": {<br>&gt;       "command": "uvx",<br>&gt;       "args": ["minimax-coding-plan-mcp"],<br>&gt;       "env": {<br>&gt;         "MINIMAX_API_KEY": "MINIMAX_API_KEY",<br>&gt;         "MINIMAX_API_HOST": "https://api.minimax.cn"<br>&gt;       }<br>&gt;     }<br>&gt;   }<br>&gt; }<br>&gt; ```<br>**3. 验证配置**<br>进入 Claude Code 后输入 `/mcp`，能看到 `web_search` 和 `understand_image`，说明配置成功。<br>![](https://filecdn.minimax.chat/public/59a2ac4d-fe8a-42d9-8898-e81aea641622.png)<br>&gt; [!NOTE]<br>&gt;<br>&gt; 如果您在 IDE（如 TRAE）中使用 MCP，还需要在对应 IDE 的 MCP 配置中进行设置<br>## 在 Cursor 中使用<br>**1. 下载 Cursor**<br>通过 [Cursor 官网](https://cursor.com/) 下载并安装 Cursor<br>**2. 打开 MCP 配置**<br>打开 `Customize -&gt; MCPs`，点击 `New` 创建 MCP Server<br>![在 Cursor 中新建 MCP Server](https://filecdn.minimax.chat/public/agent-tool/mcp/cursor-entry/20260904-143832.png)<br>**3. 添加配置**<br>在 `mcp.json` 文件中添加以下配置： |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • # M Plan MCP<br>• &gt; M Plan MCP 提供了两个专属工具：**网络搜索** 和  **图片理解**，帮助开发者在编码过程中快速获取信息和理解图片内容。<br>• &gt; 推荐使用 [MiniMax CLI](https://platform.minimaxi.com/docs/m-plan/minimax-cli.md) 替代 MCP，配置更简单、使用更高效。<br>• 访问 [订阅管理 &gt; M Plan](https://platform.minimax.cn/user-center/payment/token-plan) 查看您的订阅 Key。该 Key 需要拥有 M Plan 席位或已购积分权限后，才能使用付费资源。<br>• &gt; claude mcp add -s user MiniMax --env MINIMAX_API_KEY=api_key --env MINIMAX_API_HOST=https://api.minimax.cn -- uvx minimax-coding-plan-mcp<br>• &gt;       "args": ["minimax-coding-plan-mcp"],<br>• "args": ["minimax-coding-plan-mcp"],<br>• "$schema": "https://opencode.ai/config.json",<br>• "command": ["uvx", "minimax-coding-plan-mcp"], |
| scope | 新增 | 未记录 | capability |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-mcp-guide |
| source ref | 新增 | 未记录 | minimax-cn-mcp-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | M Plan MCP |

#### 来源 / minimax-cn-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 列表（32 项）<details><summary>展开完整内容</summary><ul><li>image-01</li><li>image-01-live</li><li>M2-her</li><li>MiniMax-H3</li><li>MiniMax-H3-Max</li><li>MiniMax-Hailuo-02</li><li>MiniMax-Hailuo-2.3</li><li>MiniMax-Hailuo-2.3-Fast</li><li>MiniMax-M2</li><li>MiniMax-M2.1</li><li>MiniMax-M2.1-highspeed</li><li>MiniMax-M2.5</li><li>MiniMax-M2.5-highspeed</li><li>MiniMax-M2.7</li><li>MiniMax-M2.7-highspeed</li><li>MiniMax-M3</li><li>MiniMax-M3.1-Flash</li><li>Music-2.0</li><li>Music-2.5</li><li>Music-2.5+</li><li>music-2.6</li><li>music-2.6-free</li><li>music-3.0</li><li>music-3.0-free</li><li>music-cover</li><li>music-cover-free</li><li>speech-02-hd</li><li>speech-02-turbo</li><li>speech-2.6-hd</li><li>speech-2.6-turbo</li><li>speech-2.8-hd</li><li>speech-2.8-turbo</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-model-catalog |
| source ref | 新增 | 未记录 | minimax-cn-model-catalog |
| structured records › 记录 M2-her › 模型 ID（model_id） | 新增 | 未记录 | M2-her |
| structured records › 记录 MiniMax-H3-Max › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 记录 MiniMax-H3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 记录 MiniMax-Hailuo-02 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 记录 MiniMax-Hailuo-2.3-Fast › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 记录 MiniMax-Hailuo-2.3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 记录 MiniMax-M2.1-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1-highspeed |
| structured records › 记录 MiniMax-M2.1 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1 |
| structured records › 记录 MiniMax-M2.5-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5-highspeed |
| structured records › 记录 MiniMax-M2.5 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5 |
| structured records › 记录 MiniMax-M2.7-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7-highspeed |
| structured records › 记录 MiniMax-M2.7 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7 |
| structured records › 记录 MiniMax-M2 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2 |
| structured records › 记录 MiniMax-M3.1-Flash › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3.1-Flash |
| structured records › 记录 MiniMax-M3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 记录 Music-2.0 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.0 |
| structured records › 记录 Music-2.5+ › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5+ |
| structured records › 记录 Music-2.5 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5 |
| structured records › 记录 image-01-live › 模型 ID（model_id） | 新增 | 未记录 | image-01-live |
| structured records › 记录 image-01 › 模型 ID（model_id） | 新增 | 未记录 | image-01 |
| structured records › 记录 music-2.6-free › 模型 ID（model_id） | 新增 | 未记录 | music-2.6-free |
| structured records › 记录 music-2.6 › 模型 ID（model_id） | 新增 | 未记录 | music-2.6 |
| structured records › 记录 music-3.0-free › 模型 ID（model_id） | 新增 | 未记录 | music-3.0-free |
| structured records › 记录 music-3.0 › 模型 ID（model_id） | 新增 | 未记录 | music-3.0 |
| structured records › 记录 music-cover-free › 模型 ID（model_id） | 新增 | 未记录 | music-cover-free |
| structured records › 记录 music-cover › 模型 ID（model_id） | 新增 | 未记录 | music-cover |
| structured records › 记录 speech-02-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-02-hd |
| structured records › 记录 speech-02-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-02-turbo |
| structured records › 记录 speech-2.6-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-hd |
| structured records › 记录 speech-2.6-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-turbo |
| structured records › 记录 speech-2.8-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| structured records › 记录 speech-2.8-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 模型列表 |

#### 来源 / minimax-cn-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | • music-2.6<br>• music-3.0<br>• music-cover |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-model-overview |
| source ref | 新增 | 未记录 | minimax-cn-model-overview |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 概览 |

#### 来源 / minimax-cn-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（96 项）<details><summary>展开完整内容</summary><ul><li>[视频](#models/video)</li><li>[语音](#models/speech)</li><li>[图像](#models/image)</li><li>[语音资源包](#packages/speech)</li><li>[视频资源包](#packages/video)</li><li>&gt; [视频](#models/video)</li><li>&gt; [语音](#models/speech)</li><li>&gt; [图像](#models/image)</li><li>&gt; [语音资源包](#packages/speech)</li><li>&gt; [视频资源包](#packages/video)</li><li>查看 MiniMax 开放平台的模型与工具价格，选购语音、视频资源包，或了解计费规则。</li><li>## 视频</li><li>输出视频\</li><li>输入视频\</li><li>画质优先，适合高品质视频创作</li><li>* **图片输入**：每次任务前 **5 张**免费，超出部分按张计费；单价不随图片或输出视频分辨率变化。</li><li>* **视频输入**：按输入时长及所选模型的输出分辨率计费。</li><li>* **任务类型**：同一模型、同一分辨率下，各任务类型单价相同；音频输入免费。</li><li>&gt; 图片、视频、音频</li><li>支持图片、视频和音频参考，适合多素材视频创作</li><li>* **MiniMax-H3-Max**：每次任务前 **2 张**图片免费，超出部分按张计费；输入视频按时长及输出分辨率计费。音频输入免费。</li><li>### 视频再生成</li><li>将 MiniMax-H3 生成的 768P 视频再生成为 2K。</li><li>&#124; **模型/接口** &#124; **规格** &#124; **输出视频** 每秒 &#124; **输入视频** 每秒 &#124; **输入图片** 每张 超出免费额度后 &#124;</li><li>* 原任务的输入素材重新计费：图片前 **5 张**免费，超出部分按张计费；视频按原输入时长计费；音频免费。</li><li>* 再生成费用在原任务费用之外单独收取，包含再生成视频输出费及输入素材费。</li><li>&gt; &#124; **模型** &#124; **功能** &#124; **单价** 元/视频 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; 图生视频，768P 6s &#124; 1.35 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; 图生视频，768P 10s &#124; 2.25 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; 图生视频，1080P 6s &#124; 2.31 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; 文生视频，图生视频，768P 6s &#124; 2.00 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; 文生视频，图生视频，768P 10s &#124; 4.00 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; 文生视频，图生视频，1080P 6s &#124; 3.50 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; 文生视频，图生视频，768P 6s &#124; 2.00 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; 文生视频，图生视频，768P 10s &#124; 4.00 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; 文生视频，图生视频，1080P 6s &#124; 3.50 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; 图生视频，512P 6s &#124; 0.60 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; 图生视频，512P 10s &#124; 1.00 &#124;</li><li>## 语音</li><li>**语音识别（ASR）**</li><li>&#124; 语音识别 &#124; Speech-to-Text &#124; 音频转文本，支持流式返回、说话人分离与字幕（srt/vtt）导出。 &#124; 2.50 &#124;</li><li>**语音合成（TTS）**</li><li>&#124; 同步语音合成 T2A &#124; speech-2.8-hd &#124; 支持音量、语调、语速调整和混音，支持比特率、采样率相关参数调整，支持音频时长、音频大小等返回参数。适用于短文本快速合成，如闲聊、对话等场景。 &#124; 3.50 &#124;</li><li>&#124; 同步语音合成 T2A &#124; speech-2.8-turbo &#124; 同上，速度更快、成本更低。 &#124; 2.00 &#124;</li><li>&#124; 异步长文本语音合成 T2A Async &#124; speech-2.8-hd &#124; 支持文本到语音的异步生成，单次最大支持 100 万字符，生成结果支持异步检索。 &#124; 3.50 &#124;</li><li>&#124; 异步长文本语音合成 T2A Async &#124; speech-2.8-turbo &#124; 同上，速度更快、成本更低。 &#124; 2.00 &#124;</li><li>&#124; **音色设计** Voice Design &#124; 基于用户输入的声音描述 prompt 生成音色（voice\_id），可用于同步/异步语音合成接口。 &#124; 9.90 &#124; 生成音色时不立即收费，首次使用该音色进行合成时才计入。接口内的试听语音合成按 2.00 元/万字符计费。 &#124;</li><li>&#124; **快速复刻** Voice Cloning &#124; 基于大语言模型的音色克隆，无需超长时长的高质量原音频，即可在极短时间内完成音色复刻，并保持与原音色的高保真还原。 &#124; 9.90 &#124; 复刻音色时不立即收费，首次使用该音色进行合成时才计入。试听字符按所选试听模型的单价计费。 &#124;</li><li>&gt; &#124; 同步语音合成 T2A &#124; speech-2.6-hd / speech-02-hd &#124; 3.50 &#124;</li><li>&gt; &#124; 同步语音合成 T2A &#124; speech-2.6-turbo / speech-02-turbo &#124; 2.00 &#124;</li><li>&gt; &#124; 异步长文本语音合成 T2A Async &#124; speech-2.6-hd / speech-02-hd &#124; 3.50 &#124;</li><li>&gt; &#124; 异步长文本语音合成 T2A Async &#124; speech-2.6-turbo / speech-02-turbo &#124; 2.00 &#124;</li><li>## 图像</li><li>&#124; image-01 image-01-live &#124; 支持用户通过文本描述或参考图片生成图片 &#124; 0.025 &#124;</li><li>&#124; API-vlm &#124; 通过 **M Plan MCP** 插件或工具自带的视觉接口调用 &#124; 0.025 &#124;</li><li>## 语音资源包</li><li>[立即购买](https://platform.minimax.cn/console/resource-packs/buy/audio/hd)</li><li>&#124; **分类** &#124; **语音套餐一** **（节省 10%）** &#124; **语音套餐二** **（节省 15%）** &#124; **语音套餐三** **（节省 20%）** &#124; **商务定制** &#124;</li><li>[立即购买](https://platform.minimax.cn/console/resource-packs/buy/audio/turbo)</li><li>## 视频资源包</li><li>[立即购买](https://platform.minimax.cn/console/resource-packs/buy/video)</li><li>视频资源包支持 Hailuo 系列视频模型，暂不支持 MiniMax H3</li><li>需要使用 H3？请点击 [按量购买 API](#models/video)，或联系销售定制。</li><li>&#124; **类型** &#124; **视频基础包** **（节省 5%）** &#124; **视频高级包** **（节省 10%）** &#124; **视频进阶包** **（节省 15%）** &#124; **视频企业包** **（节省 20%）** &#124; **商务定制** &#124;</li><li>&#124; 视频点数总量 &#124; 3,680 &#124; 8,330 &#124; 17,650 &#124; 25,000 &#124; —— &#124;</li><li>&#124; 功能 &#124; 支持 video generation 接口 RPM：20 &#124; 支持 video generation 接口 RPM：30 &#124; 支持 video generation 接口 RPM：40 &#124; 支持 video generation 接口 RPM：50 &#124; 无限 RPM/TPM 模型更新优先体验 专属的安全和稳定性保障 &#124;</li><li>视频资源包相关事项如下：</li><li>1. 不同模型生成视频的扣减次数不同</li><li>* \[MiniMax-Hailuo-2.3-Fast]，生成单条768p，6s视频，扣减0.7视频点数</li><li>* \[MiniMax-Hailuo-2.3-Fast]，生成单条768p，10s视频，扣减1.1视频点数</li><li>* \[MiniMax-Hailuo-2.3-Fast]，生成单条1080p，6s视频，扣减1.3视频点数</li><li>* \[MiniMax-Hailuo-02]，生成单条512p，6s视频，扣减0.3视频点数</li><li>* \[MiniMax-Hailuo-02]，生成单条512p，10s视频，扣减0.5视频点数</li><li>* \[MiniMax-Hailuo-02] \[MiniMax-Hailuo-2.3]，生成单条768p，6s视频，扣减1视频点数</li><li>* \[MiniMax-Hailuo-02] \[MiniMax-Hailuo-2.3]，生成单条768p，10s视频，扣减2视频点数</li><li>* \[MiniMax-Hailuo-02] \[MiniMax-Hailuo-2.3]，生成单条1080p，6s视频，扣减2视频点数</li><li>2. 生成失败或命中安全审核的视频不会扣减视频点数</li><li>&#124; 适用场景 &#124; 支持 MiniMax 全部模型与工具，按实际使用量计费，灵活满足多元化业务场景及各类调用需求 &#124; 明确使用语音或视频模型，预计可在有效期内用完预购额度的业务场景。 &#124;</li><li>&#124; 支持范围 &#124; MiniMax全系模型及工具 &#124; 语音 HD / Turbo、Hailuo 系列视频 &#124;</li><li>&#124; 计费单位 &#124; 按模型、规格与计费项确定 &#124; 语音字符数、视频点数 &#124;</li><li>&#124; 开始使用 &#124; [立即充值](https://platform.minimax.cn/user-center/payment/balance) &#124; [立即购买](https://platform.minimax.cn/console/resource-packs/buy/audio/turbo) &#124;</li><li>请核对适用模型、额度与有效期。语音 HD 与 Turbo 资源包分别适用于对应模型系列；视频资源包支持 Hailuo 系列，暂不支持 MiniMax H3。</li><li>[查看语音资源包](#packages/speech) · [查看视频资源包](#packages/video) · [查看使用规则](#guides/packages)</li><li>* **价格选择：**根据实际调用的模型、接口及规格匹配单价。例如，语言模型的输入长度与服务等级、视频的输出分辨率可能对应不同价格。</li><li>具体单价见左侧模型价格与工具价格。语音、视频还可选购对应的资源包，详见[付费方式对比](#guides/compare)。</li><li>&#124; 对比项 &#124; 语音资源包 &#124; 视频资源包 &#124;</li><li>&#124; 适用接口 &#124; 同步语音合成、异步长文本语音合成 &#124; 视频生成 &#124;</li><li>&#124; 额度单位 &#124; 字符数 &#124; 视频点数 &#124;</li><li>&#124; 套餐详情 &#124; [语音资源包](#packages/speech) &#124; [视频资源包](#packages/video) &#124;</li><li>* **语音字符：**1 个汉字计 2 个字符；英文字母、希腊字母、标点、特殊符号、空格、回车等各计 1 个字符。</li><li>* **视频点数：**不同模型、分辨率与视频时长对应不同点数，点数不等同于视频条数。详见[视频点数扣减规则](#packages/video/package-rules)。</li><li>* **失败任务：**生成失败或命中安全审核的视频，不扣减视频点数。</li><li>&gt; [accordion] 视频价格包含输入素材费用吗？</li><li>&gt; H3 视频生成的输出与输入素材分别计费。输入图片超过免费张数后需额外付费，输入视频按时长及生成分辨率计费。视频再生成也需重新计算原任务使用的输入素材费用。</li><li>&gt; 资源包有明确的适用范围。语音包区分 HD 与 Turbo 系列；视频包支持 Hailuo 系列，暂不支持 H3。购买前请核对适用模型、额度和有效期，详见 [资源包使用规则](#guides/packages)。</li><li>&gt; 音乐模型已于 2026 年 8 月 20 日下线，不再面向新用户提供服务，历史付费用户可继续使用现有 API 服务。如需体验或使用音乐生成能力，可前往 [**MiniMax Audio**](https://www.minimax.cn/audio)，或使用已发布在 [**Hugging Face**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) 和 [**魔搭 ModelScope**](https://modelscope.cn/models/MiniMax/MiniMax-Music3) 的 MiniMax Music 3 开源模型。</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 定价概览<br>[定价概览](#overview)<br>模型价格<br>[语言模型](#models/text)<br>[视频](#models/video)<br>[语音](#models/speech)<br>[图像](#models/image)<br>工具价格<br>[MCP](#tools/mcp)<br>[服务端工具](#tools/tools)<br>资源包<br>[语音资源包](#packages/speech)<br>[视频资源包](#packages/video)<br>计费指南<br>[付费方式对比](#guides/compare)<br>[按量计费说明](#guides/billing)<br>[资源包使用规则](#guides/packages)<br>[常见问题](#guides/faq)<br>&gt; [accordion] 定价目录<br>&gt;<br>&gt; [定价概览](#overview)<br>&gt;<br>&gt; 模型价格<br>&gt;<br>&gt; [语言模型](#models/text)<br>&gt; [视频](#models/video)<br>&gt; [语音](#models/speech)<br>&gt; [图像](#models/image)<br>&gt;<br>&gt; 工具价格<br>&gt;<br>&gt; [MCP](#tools/mcp)<br>&gt; [服务端工具](#tools/tools)<br>&gt;<br>&gt; 资源包<br>&gt;<br>&gt; [语音资源包](#packages/speech)<br>&gt; [视频资源包](#packages/video)<br>&gt;<br>&gt; 计费指南<br>&gt;<br>&gt; [付费方式对比](#guides/compare)<br>&gt; [按量计费说明](#guides/billing)<br>&gt; [资源包使用规则](#guides/packages)<br>&gt; [常见问题](#guides/faq)<br>查看 MiniMax 开放平台的模型与工具价格，选购语音、视频资源包，或了解计费规则。<br>## 语言模型<br>[立即充值](https://platform.minimax.cn/user-center/payment/balance)<br>&#124; **模型** &#124; **输入价格** 元/百万 tokens &#124; **输出价格** 元/百万 tokens &#124; **缓存读取** 元/百万 tokens &#124;<br>&#124; :- &#124; :-: &#124; :-: &#124; :-: &#124;<br>&#124; **MiniMax-M3.1-Flash** &#124; 1.00 &#124; 4.00 &#124; 0.10 &#124;<br>&gt; [tab] 标准<br>&gt;<br>&gt; &#124; **模型** &#124; **输入价格** 元/百万 tokens &#124; **输出价格** 元/百万 tokens &#124; **缓存读取** 元/百万 tokens &#124;<br>&gt; &#124; :- &#124; :-: &#124; :-: &#124; :-: &#124;<br>&gt; &#124; **MiniMax-M3** ≤ 512k 输入 tokens 永久五折 &#124; ~~4.20~~ 2.10 &#124; ~~16.80~~ 8.40 &#124; ~~0.84~~ 0.42 &#124;<br>&gt; &#124; **MiniMax-M3** &gt; 512k 输入 tokens\* 永久五折 &#124; ~~8.40~~ 4.20 &#124; ~~33.60~~ 16.80 &#124; ~~1.68~~ 0.84 &#124;<br>&gt; [tab] 优先\*<br>&gt;<br>&gt; &#124; **模型** &#124; **输入价格** 元/百万 tokens &#124; **输出价格** 元/百万 tokens &#124; **缓存读取** 元/百万 tokens &#124;<br>&gt; &#124; :- &#124; :-: &#124; :-: &#124; :-: &#124;<br>&gt; &#124; **MiniMax-M3** ≤ 512k 输入 tokens 永久五折 &#124; ~~6.30~~ 3.15 &#124; ~~25.20~~ 12.60 &#124; ~~1.26~~ 0.63 &#124;<br>&gt; &#124; **MiniMax-M3** &gt; 512k 输入 tokens 永久五折 &#124; ~~12.60~~ 6.30 &#124; ~~50.40~~ 25.20 &#124; ~~2.52~~ 1.26 &#124;<br>&gt;<br>&gt; \* 优先服务可让请求获得优先准入，从而更快响应并降低失败率。调用时将 `service_tier` 设为 `priority` 即可启用。该层级按标准价格的 1.5 倍计费。<br>&gt; [!NOTE]<br>&gt;<br>&gt; 请注意：<br>&gt;<br>&gt; 1. 计费项是token数；tokens字符比值根据使用场景的不同略有浮动，以实际消耗为准，字符数包括标点等<br>&gt; 2. Token与字符比（估算）：1600 中文字符约消耗 1000 tokens<br>## 视频<br>[立即充值](https://platform.minimax.cn/user-center/payment/balance)<br>### H3 系列旗舰模型<br>模型<br>输出分辨率<br>输出视频\<br>每秒<br>输入视频\<br>每秒<br>输入图片\<br>每张\<br>超出免费额度后<br>**MiniMax-H3**\<br>画质优先，适合高品质视频创作<br>2K<br>¥0.80<br>¥0.80<br>¥0.20<br>768P<br>¥0.50<br>¥0.50<br>¥0.20<br>**MiniMax-H3-Highspeed**\<br>兼顾质量与速度，适合日常内容创作<br>768P<br>¥0.40 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（26 项）<details><summary>展开完整内容</summary><ul><li>[图像](#models/image)</li><li>&gt; [图像](#models/image)</li><li>每张\</li><li>¥0.80</li><li>¥0.20</li><li>¥0.50</li><li>¥0.40</li><li>¥0.26</li><li>¥0.13</li><li>¥0.16</li><li>¥0.97</li><li>¥0.33</li><li>¥0.37</li><li>&#124; **模型/接口** &#124; **规格** &#124; **输出视频** 每秒 &#124; **输入视频** 每秒 &#124; **输入图片** 每张 超出免费额度后 &#124;</li><li>&#124; MiniMax-H3-Regeneration &#124; 768P → 2K &#124; ¥0.30 &#124; ¥0.30 &#124; ¥0.15 &#124;</li><li>&#124; **模型/接口** &#124; **输入价格** 每百万 tokens &#124; **输出价格** 每百万 tokens &#124;</li><li>&#124; MiniMax-H3-Context-IR &#124; ¥5.80 &#124; ¥23.00 &#124;</li><li>&#124; API-vlm &#124; 通过 **M Plan MCP** 插件或工具自带的视觉接口调用 &#124; 0.025 &#124;</li><li>通过 M Plan 调用 API-vlm 时，会按其按量计费价格扣减套餐内 M Plan 额度；套餐内额度耗尽且已购积分可用时，超出部分可由已购积分自动补充支付。</li><li>🔔 **定价调整预告**：自2026年7月22日起，API-vlm 按量价格调整为 ¥0.025 元/次。M Plan 套餐内单次 API-vlm 调用扣减的 token 额度将同步减少，同等套餐可支持更多次调用。接口与能力保持不变，无需任何代码调整。</li><li>&#124; 折扣价 &#124; ¥630 &#124; ¥5,950 &#124; ¥56,000 &#124; 基于量级的额外折扣 &#124;</li><li>&#124; 原价 &#124; ¥700 &#124; ¥7,000 &#124; ¥70,000 &#124; —— &#124;</li><li>&#124; 折扣价 &#124; ¥360 &#124; ¥3,400 &#124; ¥32,000 &#124; 基于量级的额外折扣 &#124;</li><li>&#124; 原价 &#124; ¥400 &#124; ¥4,000 &#124; ¥40,000 &#124; —— &#124;</li><li>&#124; 折扣价 &#124; ¥7,000 &#124; ¥15,000 &#124; ¥30,000 &#124; ¥40,000 &#124; —— &#124;</li><li>&#124; 原价 &#124; ¥7,368 &#124; ¥16,667 &#124; ¥35,294 &#124; ¥50,000 &#124; &#124;</li></ul></details> |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-pricing |
| source ref | 新增 | 未记录 | minimax-cn-pricing |
| structured records › 第 1 项 › 模型 ID（model_id） | 新增 | 未记录 | image-01 |
| structured records › 第 1 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 1 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 1 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 1 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 接口说明<br>• 单价  元/张 |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_image |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价  元/张 |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 0.025 |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 1 项 › pricing row › section | 新增 | 未记录 | 图像 |
| structured records › 第 1 项 › pricing row › values | 新增 | 未记录 | • image-01 image-01-live<br>• 支持用户通过文本描述或参考图片生成图片<br>• 0.025 |
| structured records › 第 2 项 › 模型 ID（model_id） | 新增 | 未记录 | image-01-live |
| structured records › 第 2 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 2 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 2 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 2 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 接口说明<br>• 单价  元/张 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_image |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价  元/张 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 0.025 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 2 项 › pricing row › section | 新增 | 未记录 | 图像 |
| structured records › 第 2 项 › pricing row › values | 新增 | 未记录 | • image-01 image-01-live<br>• 支持用户通过文本描述或参考图片生成图片<br>• 0.025 |
| structured records › 第 3 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 3 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 3 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 3 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 3 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.80 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.80 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.80 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.80 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 3 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 3 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3\<br>      画质优先，适合高品质视频创作<br>• 2K<br>• ¥0.80<br>• ¥0.80<br>• ¥0.20 |
| structured records › 第 4 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 4 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 4 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 4 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 4 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 4 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.50 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 4 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 4 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.50 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 4 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 4 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| structured records › 第 4 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 4 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 4 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3\<br>      画质优先，适合高品质视频创作<br>• 768P<br>• ¥0.50<br>• ¥0.50<br>• ¥0.20 |
| structured records › 第 5 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 5 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 5 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 5 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| structured records › 第 5 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 5 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 5 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| structured records › 第 6 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 6 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 6 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 6 项 › pricing row › headers | 新增 | 未记录 | • 对比项<br>• 语音资源包<br>• 视频资源包 |
| structured records › 第 6 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 6 项 › pricing row › section | 新增 | 未记录 | 适用范围 |
| structured records › 第 6 项 › pricing row › values | 新增 | 未记录 | • 适用模型<br>• HD 与 Turbo 系列分别对应各自资源包<br>• Hailuo 系列；暂不支持 MiniMax H3 |
| structured records › 第 7 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Context-IR |
| structured records › 第 7 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 7 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 7 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 7 项 › pricing row › headers | 新增 | 未记录 | • 模型/接口<br>• 输入价格 每百万 tokens<br>• 输出价格 每百万 tokens |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 5.80 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格 每百万 tokens |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥5.80 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 23.00 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格 每百万 tokens |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥23.00 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 7 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 7 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Context-IR<br>• ¥5.80<br>• ¥23.00 |
| structured records › 第 8 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| structured records › 第 8 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 8 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 8 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 8 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.40 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.40 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.40 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.40 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 8 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 8 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      兼顾质量与速度，适合日常内容创作<br>• 768P<br>• ¥0.40<br>• ¥0.40<br>• ¥0.20 |
| structured records › 第 9 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| structured records › 第 9 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 9 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 9 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 9 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 9 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.26 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 9 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 9 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.26 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 9 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.20 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 9 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.20 |
| structured records › 第 9 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 9 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 9 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      兼顾质量与速度，适合日常内容创作<br>• 480P<br>• ¥0.26<br>• ¥0.26<br>• ¥0.20 |
| structured records › 第 10 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| structured records › 第 10 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 10 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 10 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| structured records › 第 10 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 10 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 10 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Highspeed<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| structured records › 第 11 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| structured records › 第 11 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 11 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 11 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 11 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.26 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.26 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.26 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.13 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 11 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 11 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      更低的成本，适合创意尝试与批量生成<br>• 768P<br>• ¥0.26<br>• ¥0.26<br>• ¥0.13 |
| structured records › 第 12 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| structured records › 第 12 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 12 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 12 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 12 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.16 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 12 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.16 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 12 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.16 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 12 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.16 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 12 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 12 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.13 |
| structured records › 第 12 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 12 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 12 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      更低的成本，适合创意尝试与批量生成<br>• 480P<br>• ¥0.16<br>• ¥0.16<br>• ¥0.13 |
| structured records › 第 13 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| structured records › 第 13 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 13 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 13 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| structured records › 第 13 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 13 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 13 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Lite<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| structured records › 第 14 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 第 14 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 14 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 14 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 14 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.50 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.97 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.97 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.50 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 14 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 14 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      支持图片、视频和音频参考，适合多素材视频创作<br>• 768P<br>• ¥0.50<br>• ¥0.97<br>• ¥0.50 |
| structured records › 第 15 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 第 15 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 15 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 15 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 15 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输出分辨率<br>• 输出视频\<br>      每秒<br>• 输入视频\<br>      每秒<br>• 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.33 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 15 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频\<br>      每秒 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.33 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 15 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.37 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 15 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频\<br>      每秒 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.37 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 15 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.50 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 15 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片\<br>      每张\<br>      超出免费额度后 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.50 |
| structured records › 第 15 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 15 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 15 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      支持图片、视频和音频参考，适合多素材视频创作<br>• 480P<br>• ¥0.33<br>• ¥0.37<br>• ¥0.50 |
| structured records › 第 16 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 第 16 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 16 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 16 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 文生 t2v<br>• 图生 i2v<br>• 首尾帧 fl2v<br>• 参考生 ref |
| structured records › 第 16 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 16 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 16 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Max<br>• 支持<br>• 支持<br>• 支持<br>• 图片、视频、音频 |
| structured records › 第 17 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Regeneration |
| structured records › 第 17 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 17 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 17 项 › pricing row › currency symbol | 新增 | 未记录 | ¥ |
| structured records › 第 17 项 › pricing row › headers | 新增 | 未记录 | • 模型/接口<br>• 规格<br>• 输出视频 每秒<br>• 输入视频 每秒<br>• 输入图片 每张 超出免费额度后 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.30 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 17 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输出视频 每秒 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ¥0.30 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 17 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.30 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 17 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输入视频 每秒 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ¥0.30 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 17 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.15 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 17 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 输入图片 每张 超出免费额度后 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ¥0.15 |
| structured records › 第 17 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 17 项 › pricing row › section | 新增 | 未记录 | 视频再生成 |
| structured records › 第 17 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Regeneration<br>• 768P → 2K<br>• ¥0.30<br>• ¥0.30<br>• ¥0.15 |
| structured records › 第 18 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 18 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 18 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 18 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 18 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 18 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 18 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 18 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 文生视频，图生视频，768P 6s<br>• 2.00 |
| structured records › 第 19 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 19 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 19 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 19 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 19 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 19 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 19 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 19 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 文生视频，图生视频，768P 10s<br>• 4.00 |
| structured records › 第 20 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 20 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 20 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 20 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 20 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 20 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 20 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 20 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 文生视频，图生视频，1080P 6s<br>• 3.50 |
| structured records › 第 21 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 21 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 21 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 21 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 21 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 21 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 21 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 21 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 图生视频，512P 6s<br>• 0.60 |
| structured records › 第 22 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 22 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 22 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 22 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 22 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 22 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 22 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 22 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• 图生视频，512P 10s<br>• 1.00 |
| structured records › 第 23 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 第 23 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 23 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 23 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 23 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 23 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 23 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 23 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• 文生视频，图生视频，768P 6s<br>• 2.00 |
| structured records › 第 24 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 第 24 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 24 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 24 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 24 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 24 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 24 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 24 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• 文生视频，图生视频，768P 10s<br>• 4.00 |
| structured records › 第 25 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 第 25 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 25 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 25 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 25 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 25 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 25 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 25 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• 文生视频，图生视频，1080P 6s<br>• 3.50 |
| structured records › 第 26 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 第 26 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 26 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 26 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 26 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 26 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 26 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 26 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• 图生视频，768P 6s<br>• 1.35 |
| structured records › 第 27 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 第 27 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 27 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 27 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 27 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 27 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 27 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 27 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• 图生视频，768P 10s<br>• 2.25 |
| structured records › 第 28 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 第 28 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 28 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 28 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 28 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 功能<br>• 单价  元/视频 |
| structured records › 第 28 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 28 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 28 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• 图生视频，1080P 6s<br>• 2.31 |
| structured records › 第 29 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 29 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 29 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 29 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 29 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.10 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 4.20 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~4.20~~ 2.10 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 8.40 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 16.80 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~16.80~~ 8.40 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.42 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.84 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~0.84~~ 0.42 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 29 项 › pricing row › section | 新增 | 未记录 | 语言模型 |
| structured records › 第 29 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k 输入 tokens 永久五折<br>• ~~4.20~~ 2.10<br>• ~~16.80~~ 8.40<br>• ~~0.84~~ 0.42 |
| structured records › 第 30 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 30 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 30 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 30 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 30 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 4.20 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 8.40 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~8.40~~ 4.20 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 16.80 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 33.60 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~33.60~~ 16.80 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.84 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 1.68 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~1.68~~ 0.84 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 30 项 › pricing row › section | 新增 | 未记录 | 语言模型 |
| structured records › 第 30 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k 输入 tokens\* 永久五折<br>• ~~8.40~~ 4.20<br>• ~~33.60~~ 16.80<br>• ~~1.68~~ 0.84 |
| structured records › 第 31 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 31 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 31 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 31 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 31 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.15 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 6.30 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~6.30~~ 3.15 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 12.60 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 25.20 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~25.20~~ 12.60 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.63 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 1.26 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~1.26~~ 0.63 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 31 项 › pricing row › section | 新增 | 未记录 | 语言模型 |
| structured records › 第 31 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k 输入 tokens 永久五折<br>• ~~6.30~~ 3.15<br>• ~~25.20~~ 12.60<br>• ~~1.26~~ 0.63 |
| structured records › 第 32 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 32 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 32 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 32 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 32 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 6.30 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 12.60 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~12.60~~ 6.30 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 25.20 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 50.40 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~50.40~~ 25.20 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.26 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 2.52 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~2.52~~ 1.26 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 32 项 › pricing row › section | 新增 | 未记录 | 语言模型 |
| structured records › 第 32 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k 输入 tokens 永久五折<br>• ~~12.60~~ 6.30<br>• ~~50.40~~ 25.20<br>• ~~2.52~~ 1.26 |
| structured records › 第 33 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3.1-Flash |
| structured records › 第 33 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 33 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 33 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 33 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 输入价格  元/百万 tokens<br>• 输出价格  元/百万 tokens<br>• 缓存读取  元/百万 tokens |
| structured records › 第 33 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.00 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 33 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 输入价格  元/百万 tokens |
| structured records › 第 33 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 1.00 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 33 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 4.00 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 33 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | 输出价格  元/百万 tokens |
| structured records › 第 33 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | 4.00 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 33 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.10 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 33 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | 缓存读取  元/百万 tokens |
| structured records › 第 33 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | 0.10 |
| structured records › 第 33 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 33 项 › pricing row › section | 新增 | 未记录 | 语言模型 |
| structured records › 第 33 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3.1-Flash<br>• 1.00<br>• 4.00<br>• 0.10 |
| structured records › 第 34 项 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.0 |
| structured records › 第 34 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 34 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 34 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 34 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| structured records › 第 34 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.25 |
| structured records › 第 34 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| structured records › 第 34 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 34 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价  元/首 |
| structured records › 第 34 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 0.25 |
| structured records › 第 34 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_song |
| structured records › 第 34 项 › pricing row › section | 新增 | 未记录 | 计费与使用 |
| structured records › 第 34 项 › pricing row › values | 新增 | 未记录 | • Music-2.0（已下线）<br>• 0.25 |
| structured records › 第 35 项 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5 |
| structured records › 第 35 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 35 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 35 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 35 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| structured records › 第 35 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| structured records › 第 35 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| structured records › 第 35 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 35 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价  元/首 |
| structured records › 第 35 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 1.0 |
| structured records › 第 35 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_song |
| structured records › 第 35 项 › pricing row › section | 新增 | 未记录 | 计费与使用 |
| structured records › 第 35 项 › pricing row › values | 新增 | 未记录 | • Music-2.5（已下线）<br>• 1.0 |
| structured records › 第 36 项 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5+ |
| structured records › 第 36 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 36 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 36 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 36 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| structured records › 第 36 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| structured records › 第 36 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| structured records › 第 36 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 36 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价  元/首 |
| structured records › 第 36 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 1.0 |
| structured records › 第 36 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_song |
| structured records › 第 36 项 › pricing row › section | 新增 | 未记录 | 计费与使用 |
| structured records › 第 36 项 › pricing row › values | 新增 | 未记录 | • Music-2.5+（已下线）<br>• 1.0 |
| structured records › 第 37 项 › 模型 ID（model_id） | 新增 | 未记录 | music-2.6 |
| structured records › 第 37 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 37 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 37 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 37 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| structured records › 第 37 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| structured records › 第 37 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| structured records › 第 37 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 37 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价  元/首 |
| structured records › 第 37 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 1.0 |
| structured records › 第 37 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_song |
| structured records › 第 37 项 › pricing row › section | 新增 | 未记录 | 计费与使用 |
| structured records › 第 37 项 › pricing row › values | 新增 | 未记录 | • Music-2.6（已下线）<br>• 1.0 |
| structured records › 第 38 项 › 模型 ID（model_id） | 新增 | 未记录 | music-3.0 |
| structured records › 第 38 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 38 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 38 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 38 项 › pricing row › headers | 新增 | 未记录 | • 模型<br>• 单价  元/首 |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.0 |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_audio |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价  元/首 |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 1.0 |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_song |
| structured records › 第 38 项 › pricing row › section | 新增 | 未记录 | 计费与使用 |
| structured records › 第 38 项 › pricing row › values | 新增 | 未记录 | • Music-3.0（已下线）<br>• 1.0 |
| structured records › 第 39 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-02-hd |
| structured records › 第 39 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 39 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 39 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 39 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 39 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 39 项 › pricing row › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| structured records › 第 40 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-02-hd |
| structured records › 第 40 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 40 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 40 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 40 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 40 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 40 项 › pricing row › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| structured records › 第 41 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-02-turbo |
| structured records › 第 41 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 41 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 41 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 41 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 41 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 41 项 › pricing row › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| structured records › 第 42 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-02-turbo |
| structured records › 第 42 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 42 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 42 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 42 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 42 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 42 项 › pricing row › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| structured records › 第 43 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-hd |
| structured records › 第 43 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 43 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 43 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 43 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 43 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 43 项 › pricing row › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| structured records › 第 44 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-hd |
| structured records › 第 44 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 44 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 44 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 44 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 44 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 44 项 › pricing row › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-hd / speech-02-hd<br>• 3.50 |
| structured records › 第 45 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-turbo |
| structured records › 第 45 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 45 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 45 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 45 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 45 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 45 项 › pricing row › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| structured records › 第 46 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-turbo |
| structured records › 第 46 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 46 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 46 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 46 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 单价 元/万字符 |
| structured records › 第 46 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| structured records › 第 46 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 46 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 46 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 46 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| structured records › 第 46 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 46 项 › pricing row › section | 新增 | 未记录 | 音色管理 |
| structured records › 第 46 项 › pricing row › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.6-turbo / speech-02-turbo<br>• 2.00 |
| structured records › 第 47 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| structured records › 第 47 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 47 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 47 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 47 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| structured records › 第 47 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| structured records › 第 47 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 47 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 47 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 47 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| structured records › 第 47 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 47 项 › pricing row › section | 新增 | 未记录 | 语音合成（TTS） |
| structured records › 第 47 项 › pricing row › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.8-hd<br>• 支持音量、语调、语速调整和混音，支持比特率、采样率相关参数调整，支持音频时长、音频大小等返回参数。适用于短文本快速合成，如闲聊、对话等场景。<br>• 3.50 |
| structured records › 第 48 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| structured records › 第 48 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 48 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 48 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 48 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| structured records › 第 48 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.50 |
| structured records › 第 48 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 48 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 48 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 48 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 3.50 |
| structured records › 第 48 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 48 项 › pricing row › section | 新增 | 未记录 | 语音合成（TTS） |
| structured records › 第 48 项 › pricing row › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.8-hd<br>• 支持文本到语音的异步生成，单次最大支持 100 万字符，生成结果支持异步检索。<br>• 3.50 |
| structured records › 第 49 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| structured records › 第 49 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 49 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 49 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 49 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| structured records › 第 49 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| structured records › 第 49 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 49 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 49 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 49 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| structured records › 第 49 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 49 项 › pricing row › section | 新增 | 未记录 | 语音合成（TTS） |
| structured records › 第 49 项 › pricing row › values | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.8-turbo<br>• 同上，速度更快、成本更低。<br>• 2.00 |
| structured records › 第 50 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| structured records › 第 50 项 › pricing row › currency code | 新增 | 未记录 | CNY |
| structured records › 第 50 项 › pricing row › currency evidence | 新增 | 未记录 | 以下价格均以人民币计价。 |
| structured records › 第 50 项 › pricing row › currency symbol | 新增 | 未记录 | 元 |
| structured records › 第 50 项 › pricing row › headers | 新增 | 未记录 | • 计费项<br>• 模型<br>• 接口说明<br>• 单价 元/万字符 |
| structured records › 第 50 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.00 |
| structured records › 第 50 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 50 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 50 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | 单价 元/万字符 |
| structured records › 第 50 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | 2.00 |
| structured records › 第 50 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_10k_characters |
| structured records › 第 50 项 › pricing row › section | 新增 | 未记录 | 语音合成（TTS） |
| structured records › 第 50 项 › pricing row › values | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.8-turbo<br>• 同上，速度更快、成本更低。<br>• 2.00 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • **模型**<br>• **输入价格** 元/百万 tokens<br>• **输出价格** 元/百万 tokens<br>• **缓存读取** 元/百万 tokens |
| tables › 第 1 项 › heading | 新增 | 未记录 | 语言模型 |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • **MiniMax-M3.1-Flash**<br>• 1.00<br>• 4.00<br>• 0.10 |
| tables › 第 2 项 › headers | 新增 | 未记录 | • **模型/接口**<br>• **规格**<br>• **输出视频** 每秒<br>• **输入视频** 每秒<br>• **输入图片** 每张 超出免费额度后 |
| tables › 第 2 项 › heading | 新增 | 未记录 | 视频再生成 |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • MiniMax-H3-Regeneration<br>• 768P → 2K<br>• ¥0.30<br>• ¥0.30<br>• ¥0.15 |
| tables › 第 3 项 › headers | 新增 | 未记录 | • **模型/接口**<br>• **输入价格** 每百万 tokens<br>• **输出价格** 每百万 tokens |
| tables › 第 3 项 › heading | 新增 | 未记录 | Context-IR |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • MiniMax-H3-Context-IR<br>• ¥5.80<br>• ¥23.00 |
| tables › 第 4 项 › headers | 新增 | 未记录 | • **计费项**<br>• **接口**<br>• **接口说明**<br>• **单价** 元/小时 |
| tables › 第 4 项 › heading | 新增 | 未记录 | 语音 |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • 语音识别<br>• Speech-to-Text<br>• 音频转文本，支持流式返回、说话人分离与字幕（srt/vtt）导出。<br>• 2.50 |
| tables › 第 5 项 › headers | 新增 | 未记录 | • **计费项**<br>• **模型**<br>• **接口说明**<br>• **单价** 元/万字符 |
| tables › 第 5 项 › heading | 新增 | 未记录 | 语音 |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.8-hd<br>• 支持音量、语调、语速调整和混音，支持比特率、采样率相关参数调整，支持音频时长、音频大小等返回参数。适用于短文本快速合成，如闲聊、对话等场景。<br>• 3.50 |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • 同步语音合成 T2A<br>• speech-2.8-turbo<br>• 同上，速度更快、成本更低。<br>• 2.00 |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.8-hd<br>• 支持文本到语音的异步生成，单次最大支持 100 万字符，生成结果支持异步检索。<br>• 3.50 |
| tables › 第 5 项 › rows › 第 4 项 | 新增 | 未记录 | • 异步长文本语音合成 T2A Async<br>• speech-2.8-turbo<br>• 同上，速度更快、成本更低。<br>• 2.00 |
| tables › 第 6 项 › headers | 新增 | 未记录 | • **计费项**<br>• **接口说明**<br>• **单价** 元/音色<br>• **计费说明** |
| tables › 第 6 项 › heading | 新增 | 未记录 | 语音 |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • **音色设计** Voice Design<br>• 基于用户输入的声音描述 prompt 生成音色（voice\_id），可用于同步/异步语音合成接口。<br>• 9.90<br>• 生成音色时不立即收费，首次使用该音色进行合成时才计入。接口内的试听语音合成按 2.00 元/万字符计费。 |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • **快速复刻** Voice Cloning<br>• 基于大语言模型的音色克隆，无需超长时长的高质量原音频，即可在极短时间内完成音色复刻，并保持与原音色的高保真还原。<br>• 9.90<br>• 复刻音色时不立即收费，首次使用该音色进行合成时才计入。试听字符按所选试听模型的单价计费。 |
| tables › 第 7 项 › headers | 新增 | 未记录 | • **模型**<br>• **接口说明**<br>• **单价** 元/张 |
| tables › 第 7 项 › heading | 新增 | 未记录 | 图像 |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • image-01 image-01-live<br>• 支持用户通过文本描述或参考图片生成图片<br>• 0.025 |
| tables › 第 8 项 › headers | 新增 | 未记录 | • **模型**<br>• **接口说明**<br>• **输入价格** 元/次 |
| tables › 第 8 项 › heading | 新增 | 未记录 | MCP |
| tables › 第 8 项 › rows › 第 1 项 | 新增 | 未记录 | • API-vlm<br>• 通过 **M Plan MCP** 插件或工具自带的视觉接口调用<br>• 0.025 |
| tables › 第 9 项 › headers | 新增 | 未记录 | • **服务端工具**<br>• **接口说明**<br>• **单价** 元/次 |
| tables › 第 9 项 › heading | 新增 | 未记录 | 服务端工具&amp;#x20; |
| tables › 第 9 项 › rows › 第 1 项 | 新增 | 未记录 | • **web\_search**<br>• 联网搜索，模型在服务端自动执行搜索并基于结果作答，详见[服务端工具](https://platform.minimaxi.com/docs/guides/server-tools.md)<br>• 0.03 |
| tables › 第 10 项 › headers | 新增 | 未记录 | • **分类**<br>• **语音套餐一** **（节省 10%）**<br>• **语音套餐二** **（节省 15%）**<br>• **语音套餐三** **（节省 20%）**<br>• **商务定制** |
| tables › 第 10 项 › heading | 新增 | 未记录 | HD 系列 |
| tables › 第 10 项 › rows › 第 1 项 | 新增 | 未记录 | • 折扣价<br>• ¥630<br>• ¥5,950<br>• ¥56,000<br>• 基于量级的额外折扣 |
| tables › 第 10 项 › rows › 第 2 项 | 新增 | 未记录 | • 原价<br>• ¥700<br>• ¥7,000<br>• ¥70,000<br>• —— |
| tables › 第 10 项 › rows › 第 3 项 | 新增 | 未记录 | • 有效期<br>• 1 个月<br>• 3 个月<br>• 1 年<br>• —— |
| tables › 第 10 项 › rows › 第 4 项 | 新增 | 未记录 | • 总字符数量<br>• 2,000,000 字符<br>• 20,000,000 字符<br>• 200,000,000 字符<br>• —— |
| tables › 第 10 项 › rows › 第 5 项 | 新增 | 未记录 | • 功能<br>• 支持 T2A v2 / T2A async v2 接口 RPM：60 支持 HD 系列模型 赠送 10 个快速克隆音色<br>• 支持 T2A v2 / T2A async v2 接口 RPM：200 支持 HD 系列模型 赠送 30 个快速克隆音色<br>• 支持 T2A v2 / T2A async v2 接口 RPM：500 支持 HD 系列模型 赠送 300 个快速克隆音色<br>• 无限 RPM/TPM 模型更新优先体验 专属的安全和稳定性保障 |
| tables › 第 11 项 › headers | 新增 | 未记录 | • **分类**<br>• **语音套餐一** **（节省 10%）**<br>• **语音套餐二** **（节省 15%）**<br>• **语音套餐三** **（节省 20%）**<br>• **商务定制** |
| tables › 第 11 项 › heading | 新增 | 未记录 | Turbo 系列 |
| tables › 第 11 项 › rows › 第 1 项 | 新增 | 未记录 | • 折扣价<br>• ¥360<br>• ¥3,400<br>• ¥32,000<br>• 基于量级的额外折扣 |
| tables › 第 11 项 › rows › 第 2 项 | 新增 | 未记录 | • 原价<br>• ¥400<br>• ¥4,000<br>• ¥40,000<br>• —— |
| tables › 第 11 项 › rows › 第 3 项 | 新增 | 未记录 | • 有效期<br>• 1 个月<br>• 3 个月<br>• 1 年<br>• —— |
| tables › 第 11 项 › rows › 第 4 项 | 新增 | 未记录 | • 总字符数量<br>• 2,000,000 字符<br>• 20,000,000 字符<br>• 200,000,000 字符<br>• —— |
| tables › 第 11 项 › rows › 第 5 项 | 新增 | 未记录 | • 功能<br>• 支持 T2A v2 / T2A async v2 接口 RPM：60 支持 Turbo 系列模型 赠送 10 个快速克隆音色<br>• 支持 T2A v2 / T2A async v2 接口 RPM：200 支持 Turbo 系列模型 赠送 30 个快速克隆音色<br>• 支持 T2A v2 / T2A async v2 接口 RPM：500 支持 Turbo 系列模型 赠送 300 个快速克隆音色<br>• 无限 RPM/TPM 模型更新优先体验 专属的安全和稳定性保障 |
| tables › 第 12 项 › headers | 新增 | 未记录 | • **类型**<br>• **视频基础包** **（节省 5%）**<br>• **视频高级包** **（节省 10%）**<br>• **视频进阶包** **（节省 15%）**<br>• **视频企业包** **（节省 20%）**<br>• **商务定制** |
| tables › 第 12 项 › heading | 新增 | 未记录 | 视频资源包 |
| tables › 第 12 项 › rows › 第 1 项 | 新增 | 未记录 | • 折扣价<br>• ¥7,000<br>• ¥15,000<br>• ¥30,000<br>• ¥40,000<br>• —— |
| tables › 第 12 项 › rows › 第 2 项 | 新增 | 未记录 | • 原价<br>• ¥7,368<br>• ¥16,667<br>• ¥35,294<br>• ¥50,000<br>• 空字符串 |
| tables › 第 12 项 › rows › 第 3 项 | 新增 | 未记录 | • 有效期<br>• 1 个月<br>• 1 个月<br>• 1 个月<br>• 1 个月<br>• —— |
| tables › 第 12 项 › rows › 第 4 项 | 新增 | 未记录 | • 视频点数总量<br>• 3,680<br>• 8,330<br>• 17,650<br>• 25,000<br>• —— |
| tables › 第 12 项 › rows › 第 5 项 | 新增 | 未记录 | • 功能<br>• 支持 video generation 接口 RPM：20<br>• 支持 video generation 接口 RPM：30<br>• 支持 video generation 接口 RPM：40<br>• 支持 video generation 接口 RPM：50<br>• 无限 RPM/TPM 模型更新优先体验 专属的安全和稳定性保障 |
| tables › 第 13 项 › headers | 新增 | 未记录 | • 对比项<br>• 按量计费<br>• 资源包 |
| tables › 第 13 项 › heading | 新增 | 未记录 | 按量计费与资源包 |
| tables › 第 13 项 › rows › 第 1 项 | 新增 | 未记录 | • 适用场景<br>• 支持 MiniMax 全部模型与工具，按实际使用量计费，灵活满足多元化业务场景及各类调用需求<br>• 明确使用语音或视频模型，预计可在有效期内用完预购额度的业务场景。 |
| tables › 第 13 项 › rows › 第 2 项 | 新增 | 未记录 | • 付费方式<br>• 充值账户，按实际用量扣费<br>• 预付购买，在有效期内使用对应额度 |
| tables › 第 13 项 › rows › 第 3 项 | 新增 | 未记录 | • 支持范围<br>• MiniMax全系模型及工具<br>• 语音 HD / Turbo、Hailuo 系列视频 |
| tables › 第 13 项 › rows › 第 4 项 | 新增 | 未记录 | • 计费单位<br>• 按模型、规格与计费项确定<br>• 语音字符数、视频点数 |
| tables › 第 13 项 › rows › 第 5 项 | 新增 | 未记录 | • 开始使用<br>• [立即充值](https://platform.minimax.cn/user-center/payment/balance)<br>• [立即购买](https://platform.minimax.cn/console/resource-packs/buy/audio/turbo) |
| tables › 第 14 项 › headers | 新增 | 未记录 | • 对比项<br>• 语音资源包<br>• 视频资源包 |
| tables › 第 14 项 › heading | 新增 | 未记录 | 适用范围 |
| tables › 第 14 项 › rows › 第 1 项 | 新增 | 未记录 | • 适用模型<br>• HD 与 Turbo 系列分别对应各自资源包<br>• Hailuo 系列；暂不支持 MiniMax H3 |
| tables › 第 14 项 › rows › 第 2 项 | 新增 | 未记录 | • 适用接口<br>• 同步语音合成、异步长文本语音合成<br>• 视频生成 |
| tables › 第 14 项 › rows › 第 3 项 | 新增 | 未记录 | • 额度单位<br>• 字符数<br>• 视频点数 |
| tables › 第 14 项 › rows › 第 4 项 | 新增 | 未记录 | • 有效期<br>• 标准套餐按套餐分别为 1 个月、3 个月或 1 年<br>• 四档标准套餐均为 1 个月 |
| tables › 第 14 项 › rows › 第 5 项 | 新增 | 未记录 | • 到期规则<br>• 余量不继承，到期清零<br>• 余量不继承，到期清零 |
| tables › 第 14 项 › rows › 第 6 项 | 新增 | 未记录 | • 套餐详情<br>• [语音资源包](#packages/speech)<br>• [视频资源包](#packages/video) |
| title | 新增 | 未记录 | 定价概览 |

#### 来源 / minimax-cn-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • ````yaml api-reference/text/api/openapi-responses.json POST /v1/responses<br>• POST /v1/responses |
| capability mentions | 新增 | 未记录 | 列表（58 项）<details><summary>展开完整内容</summary><ul><li>reasoning:</li><li>- type: input_image</li><li>image_url: &gt;-</li><li>视频理解:</li><li>text: 这个视频里发生了什么？</li><li>- type: input_video</li><li>video_url: &gt;-</li><li>工具调用:</li><li>type: reasoning</li><li>- type: reasoning_text</li><li>reasoning_tokens: 75</li><li>parallel_tool_calls: true</li><li>We need answer Chinese. Need describe image. We</li><li>reasoning_tokens: 70</li><li>We need answer in Chinese likely describe video.</li><li>It's a generated/edited video perhaps cat in</li><li>"这个视频里发生了什么？" likely concise Chinese description.</li><li>venue/competition or whether real. Say video</li><li>AI-generated due image/video artifacts/watermarks</li><li>"视频中，一只带斑纹的猫在类似奥运会跳水馆的跳板/池边窄台上向前奔跑，背景有奥运五环和观众。跑到尽头后纵身跃起，身体在空中翻转，随后头朝下扎入泳池，激起大片水花；最后水面只剩涟漪和逐渐消散的水花。"</li><li>视频里，一只带斑纹的猫沿着奥运跳水馆池边的窄平台向前奔跑，背景有奥运五环和观众。跑到尽头后，它纵身跃起，在空中翻转后头朝下跳入泳池，激起一大片水花，最后水面只剩下逐渐扩散的涟漪。</li><li>reasoning_tokens: 369</li><li>type: reasoning_text</li><li>- type: response.reasoning_text.delta</li><li>delta: ' Chinese describe image. Need be careful child, identity unknown. Need content: close-up portrait of young girl, brown'</li><li>- type: response.reasoning_text.done</li><li>We need answer Chinese describe image. Need be careful</li><li>We need answer Chinese describe image. Need be</li><li>reasoning_tokens: 24</li><li>最大输出 token 数。推理 token 也计入此上限，设置过小会导致 `status` 为 `incomplete` 且</li><li>推理控制。默认值随模型不同，因此未在 schema 层声明统一默认值。</li><li>- `MiniMax-M3.1-Flash`：推理始终开启，省略 `reasoning` 时也会推理。`effort` 可取</li><li>`low`、`medium`、`high`、`xhigh` 或 `max`，并且确实会调节推理深度；省略时默认使用 `max`</li><li>- `MiniMax-M3`：默认关闭推理；将 `effort` 设为非 `none` 值可开启推理，但不会调节推理深度。</li><li>- M2.x 模型：推理无法关闭，传入 `effort: "none"` 会被接收但不生效。</li><li>parallel_tool_calls:</li><li>`function_call_output` / `reasoning`</li><li>- reasoning</li><li>description: 工具调用 ID（仅当 `type` 为 `function_call` 或 `function_call_output` 时使用）</li><li>description: 思维链段落数组（仅当 `type` 为 `reasoning` 时使用）</li><li>- title: Reasoning</li><li>description: 思维链输出（仅开启推理时返回）</li><li>- reasoning_text</li><li>description: 工具调用</li><li>description: 工具调用 ID，用于关联 `function_call_output`</li><li>reasoning_tokens:</li><li>description: 思维链消耗的 token 数（仅开启推理时计入）</li><li>- input_image</li><li>- input_video</li><li>- `input_image`: 图片输入</li><li>- `input_video`: 视频输入</li><li>image_url:</li><li>description: 图片输入（当 `type` 为 `input_image` 时）。支持的格式：JPEG、PNG、GIF、WEBP</li><li>video_url:</li><li>description: 视频输入（当 `type` 为 `input_video` 时）。支持的格式：MP4、AVI、MOV、MKV</li><li>description: 视频链接或 Base64 编码，大文件建议使用 File API 上传</li><li>description: 视频理解的精细度档位</li><li>description: 视频帧最长边的像素约束</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 对话生成<br>&gt; OpenAI Responses API 兼容的主接口调用MiniMax 模型，生成模型回复，支持流式与非流式。<br>## OpenAPI<br>````yaml api-reference/text/api/openapi-responses.json POST /v1/responses<br>openapi: 3.1.0<br>info:<br>title: MiniMax Responses API<br>description: MiniMax OpenAI Responses API 兼容接口，支持对话生成和 Token 估算<br>license:<br>name: MIT<br>version: 1.0.0<br>servers:<br>- url: https://api.minimax.cn<br>security:<br>- bearerAuth: []<br>paths:<br>/v1/responses:<br>post:<br>tags:<br>- Responses<br>summary: 对话生成<br>operationId: createResponse<br>parameters:<br>- name: Content-Type<br>in: header<br>required: true<br>description: 请求体的媒介类型，请设置为 `application/json`，确保请求数据的格式为 JSON<br>schema:<br>type: string<br>enum:<br>- application/json<br>default: application/json<br>requestBody:<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/CreateResponseReq'<br>examples:<br>深度思考:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input: 9.11 和 9.9 哪个更大？<br>图片理解:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input:<br>- role: user<br>content:<br>- type: input_text<br>text: 这张图片的内容是什么？<br>- type: input_image<br>image_url: &gt;-<br>https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg<br>视频理解:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input:<br>- role: user<br>content:<br>- type: input_text<br>text: 这个视频里发生了什么？<br>- type: input_video<br>video_url: &gt;-<br>https://filecdn.minimax.chat/public/ee8c1648-21f1-41b7-8397-65022d22ffe5.mp4<br>流式:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input:<br>- role: user<br>content:<br>- type: input_text<br>text: 这张图片的内容是什么？<br>- type: input_image<br>image_url: &gt;-<br>https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg<br>stream: true<br>工具调用:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input: 旧金山现在天气怎么样？<br>tools:<br>- type: function<br>name: get_weather<br>description: Get the current weather for a given location.<br>parameters:<br>type: object<br>properties: |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/CreateResponseReq'<br>• $ref: '#/components/schemas/CreateResponseResp'<br>• $ref: '#/components/schemas/InputItem'<br>• $ref: '#/components/schemas/Tool'<br>• $ref: '#/components/schemas/OutputItem'<br>• $ref: '#/components/schemas/Usage'<br>• $ref: '#/components/schemas/ContentPart' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-responses-api |
| source ref | 新增 | 未记录 | minimax-cn-responses-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 对话生成 |

#### 来源 / minimax-cn-video-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • ````yaml api-reference/video/generation/api/v2-video-generation.json POST /v2/video_generation<br>• POST /v2/video_generation |
| capability mentions | 新增 | 未记录 | 列表（83 项）<details><summary>展开完整内容</summary><ul><li># 创建视频生成任务</li><li>&gt; 视频生成 V2 接口，通过多模态 content 数组输入（文本 / 图片 / 视频 / 音频），可通过 `model` 字段切换 MiniMax H3、MiniMax H3 Highspeed、MiniMax H3 Lite 与 MiniMax H3 Max，覆盖文生视频、图生视频（首尾帧）、多模态参考生视频，最高 2K 输出。&lt;br /&gt;&lt;br /&gt;提示：若需要使用 MiniMax H3、MiniMax H3 Highspeed、MiniMax H3 Lite 或 MiniMax H3 Max，请点击 [按量购买 API](https://platform.minimax.cn/docs/pricing/overview#models/video)。</li><li>````yaml api-reference/video/generation/api/v2-video-generation.json POST /v2/video_generation</li><li>description: MiniMax video generation V2 (Hailuo-03) API</li><li>/v2/video_generation:</li><li>- Video V2</li><li>summary: 创建视频生成任务</li><li>创建视频生成任务。模型依据传入的文本、图片、视频、音频等多模态信息生成视频。本接口为异步接口，创建成功后返回</li><li>`task_id`，需通过[查询任务](/api-reference/video-generation-v2-query)接口轮询任务状态，任务成功后获取生成视频。</li><li>operationId: videoGenerationV2Create</li><li>$ref: '#/components/schemas/VideoGenerationV2Req'</li><li>文生视频 (t2va):</li><li>图生视频 (i2va):</li><li>- type: image_url</li><li>image_url:</li><li>多模态参考生视频 (r2va):</li><li>enjoy the moment，音色参考音频1</li><li>- type: video_url</li><li>video_url:</li><li>https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/297573323635_00_%E8%A7%86%E9%A2%911_YnyRbxEwio_video_20260525_163755_1927e9d3.mp4</li><li>role: reference_video</li><li>- type: audio_url</li><li>audio_url:</li><li>role: reference_audio</li><li>调用[查询任务](/api-reference/video-generation-v2-query)接口获取任务状态与结果。</li><li>"input_image_count": 0</li><li>"modality": "video"</li><li>$ref: '#/components/schemas/VideoGenerationV2Resp'</li><li>VideoGenerationV2Req:</li><li>- **`MiniMax-H3`**：**适合高品质视频创作的版本**。支持文生视频、图生视频（首帧 /</li><li>尾帧）与多模态参考生视频；分辨率 `768P` / `2K`，时长 4~15 秒。</li><li>- **`MiniMax-H3-Highspeed`**：**兼顾生成质量与速度的版本**。支持文生视频、图生视频（首帧 /</li><li>尾帧）与多模态参考生视频（参考图 / 参考视频 / 参考音频）；分辨率 `480P` / `768P`，**不支持 `2K`**；时长</li><li>- **`MiniMax-H3-Lite`**：**轻量版本**。支持文生视频、图生视频（首帧 / 尾帧）与多模态参考生视频（参考图 /</li><li>参考视频 / 参考音频）；分辨率 `480P` / `768P`，**不支持 `2K`**；时长 4~15 秒。</li><li>- **`MiniMax-H3-Max`**：**极速生成版本**。支持文生视频、图生视频（首帧 / 尾帧）与多模态参考生视频（参考图</li><li>/ 参考视频 / 参考音频）；分辨率 `480P` / `768P`，**不支持 `2K`**；时长 5~15 秒。</li><li>多模态输入内容数组，描述用于生成视频的信息。每个元素通过 `type` 区分类型（`text` / `image_url` /</li><li>`video_url` / `audio_url`），并可通过 `role` 标注用途。</li><li>- **文生视频**：仅一个 `text` 元素。</li><li>- **图生视频-首帧**：`text` + 1 张 `image_url`（`role=first_frame` 或不填）。</li><li>- **图生视频-尾帧**：`text` + 1 张 `image_url`（`role=last_frame`）。</li><li>- **图生视频-首尾帧**：`text` + 2 张 `image_url`（`role` 分别为</li><li>- **多模态参考生视频**：`text` + 参考图片（`role=reference_image`）+</li><li>参考视频（`role=reference_video`）+ 参考音频（`role=reference_audio`）的组合。</li><li>&gt; **图生视频与多模态参考生视频互斥**：content 中出现 `reference_image` /</li><li>`reference_video` / `reference_audio` 任一 role，就不能再出现 `first_frame` /</li><li>图片 `image_url`：</li><li>视频 `video_url`（仅多模态参考场景）：</li><li>&#124; 编码 &#124; 视频 H.264/AVC、H.265/HEVC；音频 AAC、MP3 &#124;</li><li>音频 `audio_url`（仅多模态参考场景）：</li><li>视频分辨率。不同模型支持的档位不同：</li><li>生成视频时长（秒），必选，整数。不同模型可用值不同：</li><li>生成视频的宽高比，默认 `adaptive`（自动，由输入自适应选择最合适的宽高比，实际比例可在查询接口的 `ratio`</li><li>**文生视频（t2va，content 仅含 `text`）**：`ratio` 必填，且不能为 `adaptive`；可用值</li><li>**图生视频（i2va，content 含 `first_frame` / `last_frame`</li><li>**多模态参考生视频（r2va，content 含 `reference_image` / `reference_video` /</li><li>`reference_audio`）**：`ratio` 可选，默认</li><li>推送，推送体结构与[查询任务](/api-reference/video-generation-v2-query)接口的响应一致。</li><li>description: 是否在生成视频中添加 AIGC 标识水印，默认 `false`。</li><li>VideoGenerationV2Resp:</li><li>- image_url</li><li>- video_url</li><li>- audio_url</li><li>文本提示词（prompt），**必填**：所有场景都需包含一个非空 `text`，描述期望生成的视频。按字符数计算长度，单个</li><li>description: 当 `type=image_url` 时的图片对象（格式 / 大小 / 尺寸 / 数量限制见上方 content 说明）。</li><li>file_id);`data:image/&lt;格式&gt;;base64,&lt;Base64&gt;` data URI(`&lt;格式&gt;` 小写)。</li><li>当 `type=video_url` 时的视频对象（参考视频，仅多模态参考场景；格式 / 大小 / 时长限制见上方 content</li><li>视频地址,支持:公网 URL;`mm_file://{file_id}`(引用平台已有文件的</li><li>file_id);`data:video/mp4;base64,&lt;Base64&gt;` data URI。注意请求体总大小 ≤ 64</li><li>MB、Base64 会放大约 33%,大视频请用公网 URL 或 mm_file://。</li><li>当 `type=audio_url` 时的音频对象（参考音频，仅多模态参考场景；格式 / 大小 / 时长限制见上方 content</li><li>音频地址,支持:公网 URL;`mm_file://{file_id}`(引用平台已有文件的</li><li>file_id);`data:audio/&lt;格式&gt;;base64,&lt;Base64&gt;` data URI(`&lt;格式&gt;` 小写)。</li><li>- `first_frame`：首帧图片（图生视频；仅一张图且不填 role 时默认按 first_frame 处理）。</li><li>- `last_frame`：尾帧图片（图生视频-首尾帧，需与 first_frame 成对）。</li><li>- `reference_image`：参考图片（多模态参考生视频）。</li><li>- `reference_video`：参考视频（多模态参考生视频）。</li><li>- `reference_audio`：参考音频（多模态参考生视频）。</li><li>- reference_image</li><li>- reference_video</li><li>- reference_audio</li><li>message: video description contains sensitive content (1026)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 创建视频生成任务<br>&gt; 视频生成 V2 接口，通过多模态 content 数组输入（文本 / 图片 / 视频 / 音频），可通过 `model` 字段切换 MiniMax H3、MiniMax H3 Highspeed、MiniMax H3 Lite 与 MiniMax H3 Max，覆盖文生视频、图生视频（首尾帧）、多模态参考生视频，最高 2K 输出。&lt;br /&gt;&lt;br /&gt;提示：若需要使用 MiniMax H3、MiniMax H3 Highspeed、MiniMax H3 Lite 或 MiniMax H3 Max，请点击 [按量购买 API](https://platform.minimax.cn/docs/pricing/overview#models/video)。<br>## OpenAPI<br>````yaml api-reference/video/generation/api/v2-video-generation.json POST /v2/video_generation<br>openapi: 3.1.0<br>info:<br>title: MiniMax API<br>description: MiniMax video generation V2 (Hailuo-03) API<br>license:<br>name: MIT<br>version: 2.0.0<br>servers:<br>- url: https://api.minimax.cn<br>security:<br>- bearerAuth: []<br>paths:<br>/v2/video_generation:<br>post:<br>tags:<br>- Video V2<br>summary: 创建视频生成任务<br>description: &gt;-<br>创建视频生成任务。模型依据传入的文本、图片、视频、音频等多模态信息生成视频。本接口为异步接口，创建成功后返回<br>`task_id`，需通过[查询任务](/api-reference/video-generation-v2-query)接口轮询任务状态，任务成功后获取生成视频。<br>当前支持模型：`MiniMax-H3`、`MiniMax-H3-Highspeed`、`MiniMax-H3-Lite`、`MiniMax-H3-Max`。<br>operationId: videoGenerationV2Create<br>parameters:<br>- name: Content-Type<br>in: header<br>required: true<br>description: 请求体的媒介类型，请设置为 `application/json`。<br>schema:<br>type: string<br>enum:<br>- application/json<br>default: application/json<br>requestBody:<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/VideoGenerationV2Req'<br>examples:<br>文生视频 (t2va):<br>value:<br>model: MiniMax-H3<br>content:<br>- type: text<br>text: &gt;-<br>史诗级太空歌剧院线预告：女舰长独自站在巨大观景窗前，最后一支舰队正在集结并跃迁离去，强光爆闪、舰桥震动，她被留在原地。<br>resolution: 2K<br>duration: 5<br>ratio: '16:9'<br>图生视频 (i2va):<br>value:<br>model: MiniMax-H3<br>content:<br>- type: text<br>text: &gt;-<br>Pull focus to the people in the background and add more<br>steam to the ramen bowl.<br>- type: image_url<br>image_url:<br>url: &gt;-<br>https://cdn.hailuoai.com/prod/hailuo_demo/testsets/H3_AA_I2VA/gallery/sr_v17_variants_seed42_43_20260724/inputs/4a3a90bf9100_KDmcbkhzYo5sjjxr9FqcVmWVnzb.png<br>role: first_frame<br>resolution: 2K<br>duration: 5<br>ratio: adaptive<br>多模态参考生视频 (r2va):<br>value:<br>model: MiniMax-H3<br>content:<br>- type: text<br>text: &gt;-<br>角色说话：Follow the wind, live free.Leave worries behind,<br>enjoy the moment，音色参考音频1<br>- type: video_url<br>video_url:<br>url: &gt;-<br>https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/297573323635_00_%E8%A7%86%E9%A2%911_YnyRbxEwio_video_20260525_163755_1927e9d3.mp4<br>role: reference_video<br>- type: audio_url<br>audio_url:<br>url: &gt;-<br>https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/f463d523c5ce_01_%E9%9F%B3%E9%A2%911_RSLcbpzJPo_6%E6%9C%885%E6%97%A5(1).mp3<br>role: reference_audio<br>resolution: 2K<br>duration: 5<br>ratio: adaptive<br>required: true<br>responses:<br>'200':<br>description: &gt;-<br>创建成功后返回 `task_id`。使用该 `task_id`<br>调用[查询任务](/api-reference/video-generation-v2-query)接口获取任务状态与结果。<br>**查询任务成功响应示例**<br>```json |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/VideoGenerationV2Req'<br>• $ref: '#/components/schemas/VideoGenerationV2Resp'<br>• $ref: '#/components/responses/Err400'<br>• $ref: '#/components/responses/Err401'<br>• $ref: '#/components/responses/Err402'<br>• $ref: '#/components/responses/Err422'<br>• $ref: '#/components/responses/Err429'<br>• $ref: '#/components/responses/Err500'<br>• $ref: '#/components/schemas/ContentItem'<br>• $ref: '#/components/schemas/OaiErrorDetail'<br>• $ref: '#/components/schemas/OaiError' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-video-api |
| source ref | 新增 | 未记录 | minimax-cn-video-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 创建视频生成任务 |

#### 来源 / minimax-cn-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • BASE_URL = "https://api.minimax.cn"<br>• url = f"{BASE_URL}/v2/video_generation"<br>• url = f"{BASE_URL}/v2/query/video_generation/{task_id}" |
| capability mentions | 新增 | 未记录 | 列表（80 项）<details><summary>展开完整内容</summary><ul><li># 视频生成</li><li>&gt; 本文档介绍 MiniMax 视频生成服务（MiniMax-H3）的使用方法，助力高效创作视频内容。</li><li>MiniMax 视频生成目前提供 **MiniMax-H3** 模型：</li><li>* **MiniMax-H3**：开放通用的多模态视频模型，可以统一理解文本、图片、视频和音频输入，完成视频生成、参考创作与视频编辑。</li><li>提示：若需要使用 MiniMax-H3，请点击 [按量购买 API](https://platform.minimaxi.com/docs/pricing/overview.md#models/video)。</li><li>&#124; 文生视频 &#124; Prompt &#124; 根据文字描述从零生成视频 &#124;</li><li>&#124; 图生视频 &#124; Prompt + 首帧图片和/或尾帧图片 &#124; 控制视频的开始或结束画面，让指定画面自然动起来 &#124;</li><li>&#124; 全能参考生成 &#124; Prompt + 参考图片、视频或音频 &#124; 参考角色、动作、镜头、风格、声音或剪辑节奏 &#124;</li><li>输出时长仅支持整数值；支持多种常见宽高比或自适应，[详见 API 文档](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-create.md)。</li><li>&#124; &#124; 无图片输入时为文生视频模式 &#124;</li><li>&#124; &#124; 视频：≤ 3 段；单段时长 \[2, 15] 秒；总时长 ≤ 15 秒；宽高范围 \[256, 5760]；宽高比 5:2～2:5 范围内 &#124;</li><li>&#124; &#124; 音频：≤ 3 段；单段时长 \[2, 15] 秒；总时长 ≤ 15 秒 &#124;</li><li>&#124; &#124; 无图片、视频、音频输入时为文生视频模式 &#124;</li><li>&#124; **输入格式支持** &#124; 视频：H.264/AVC、H.265/HEVC；视频内音频：AAC、MP3 &#124;</li><li>&#124; &#124; 音频：WAV、MP3 &#124;</li><li>&#124; **传入大小限制** &#124; 视频单个 50 MB；图片单个 30 MB；音频单个 15 MB（加起来的不限制，限制都在单个素材上） &#124;</li><li>视频生成是一个异步过程，包含以下三个步骤：</li><li>1. 创建生成任务：提交一个视频生成请求，获得任务 ID (`task_id`)</li><li>3. 获取视频文件：下载 `content.url` 指向的视频并保存到本地</li><li># --- 步骤 1: 发起视频生成任务 ---</li><li># MiniMax-H3 使用多模态 content[] 结构：每个元素通过 type（text / image_url / video_url / audio_url）区分，</li><li># 并可用 role 标注用途。以下四个函数分别对应文生视频、图生视频、首尾帧、多模态参考四种模式，</li><li>def invoke_text_to_video() -&gt; str:</li><li>"""（模式一）纯文本生成视频（t2va）。t2va 场景 ratio 必填且不能为 adaptive。"""</li><li>url = f"{BASE_URL}/v2/video_generation"</li><li># type=text 为必填项，用于描述视频的动态内容。</li><li>def invoke_image_to_video() -&gt; str:</li><li>"""（模式二）首帧图 + 文本生成视频（i2va）。"""</li><li># role=first_frame 指定视频起始帧；图生视频场景下宽高比由输入图片决定，ratio 恒为 adaptive。</li><li>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/85c96368-6ead-4eae-af9c-116be878eac3.png"}, "role": "first_frame"},</li><li>def invoke_start_end_to_video() -&gt; str:</li><li>"""（模式三）首帧图 + 尾帧图 + 文本生成视频。"""</li><li>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},</li><li>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/97b7cd08-764e-4b8b-a7bf-87a0bd898575.jpeg"}, "role": "last_frame"},</li><li>def invoke_reference_to_video() -&gt; str:</li><li>"""（模式四）多模态参考生视频（r2va）：可组合参考图 / 参考视频 / 参考音频。"""</li><li>{"type": "text", "text": "人物参考视频1的动作，表演街舞，人物参考图1 图2"},</li><li>{"type": "image_url", "image_url": {"url": "https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/9d5c7a33fa6e_01_%E5%9B%BE1_MHGgbVga3o_gpt4o-image-1780651118146.png"}, "role": "reference_image"},</li><li>{"type": "image_url", "image_url": {"url": "https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/7af326902315_00_%E5%9B%BE2_YqtKbY1jpo_u4391985813_Young_male_wearing_cream_hoodie_and_dark_brown_sh_45d56ed0-d626-4c37-9a5b-77f51f374982_1.png"}, "role": "reference_image"},</li><li>{"type": "video_url", "video_url": {"url": "https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/d9060f5cb9ab_02_%E8%A7%86%E9%A2%911_HDvmbpQrEo_%E8%A1%97%E8%88%9E3.mp4"}, "role": "reference_video"},</li><li># 视频生成是一个耗时过程，因此 API 设计为异步模式。</li><li>url = f"{BASE_URL}/v2/query/video_generation/{task_id}"</li><li>raise Exception(f"视频生成未成功: status={status}, error={task.get('error')}")</li><li># --- 步骤 3: 下载并保存视频文件 ---</li><li>def fetch_video(download_url: str):</li><li>video_response = requests.get(download_url)</li><li>video_response.raise_for_status()</li><li>f.write(video_response.content)</li><li>print("视频已成功保存至 output.mp4")</li><li># 该部分演示了从发起任务到最终保存视频的完整调用链路。</li><li>task_id = invoke_text_to_video()  # 方式一：文生视频</li><li># task_id = invoke_image_to_video() # 方式二：图生视频</li><li># task_id = invoke_start_end_to_video() # 方式三: 根据首尾帧生成视频</li><li># task_id = invoke_reference_to_video() # 方式四: 多模态参考生视频</li><li>print(f"视频生成任务已提交，任务 ID: {task_id}")</li><li>fetch_video(download_url)</li><li>## 生成视频结果</li><li>### 文生视频</li><li>只提供一段文字描述，模型即可根据描述生成视频。为了对视频内容进行更精细的控制，可在关键描述后添加 `[运镜]` 指令，来引导镜头调度。</li><li>&lt;video controls src="https://filecdn.minimax.chat/docs/video-generation-v2/text-to-video.mp4" /&gt;</li><li>### 首帧/尾帧生成视频</li><li>提供首帧图片、尾帧图片，或同时提供两张，再结合文字描述生成视频。视频的起始或结束画面完全可控，适合让静态图片"动起来"或补完自然的过渡画面。</li><li>&lt;video controls src="https://filecdn.minimax.chat/docs/video-generation-v2/first-last-frame.mp4" /&gt;</li><li>提供参考图片、参考视频或参考音频（可组合使用），并结合文字描述生成视频，在生成过程中保持参考主体或素材的特征一致性。</li><li>&lt;video controls src="https://filecdn.minimax.chat/docs/video-generation-v2/reference.mp4" /&gt;</li><li>如需在生成视频前获得更完整的提示词，可以[创建 H3-Context-IR 任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-h3-context-ir.md)。H3-Context-IR 会深度理解文本、图像、音频和视频等多模态上下文及其相互关系，通过复杂逻辑推理生成结构化表达，并在尽量保持用户原始意图的前提下丰富语义细节。本接口只返回增强提示词，不创建视频。</li><li>H3-Context-IR 采用异步任务形式。创建成功后，使用[查询任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-query.md)或[查询任务列表](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-list.md)获取结果；任务成功后从 `content.prompt` 获取增强提示词，并可通过 `task_type=h3_context_ir` 识别该任务。</li><li>## 视频再生成</li><li>如果已有符合 MiniMax-H3 768P 输出规格的成片，可以调用[创建视频再生成任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-regeneration.md)接口输出 2K 视频。请求时需原样提交生成 768P 视频时使用的全部 `content`，并额外加入且仅加入一个 `type=video_url`、`role=base_video` 的源视频项。</li><li>再生成任务与其他 H3 任务共用[查询任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-query.md)、[查询任务列表](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-list.md)以及[取消或删除任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-delete.md)接口；可通过 `task_type=regeneration` 识别。</li><li>&gt; [card] [创建视频生成任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-create.md)</li><li>&gt; 使用本接口通过多模态 content 输入，创建 MiniMax-H3 视频生成任务。</li><li>&gt; [card] [创建 H3-Context-IR 任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-h3-context-ir.md)</li><li>&gt; 深度理解视频生成的多模态上下文，并生成结构化增强提示词。</li><li>&gt; [card] [创建视频再生成任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-regeneration.md)</li><li>&gt; 对符合 MiniMax-H3 768P 输出规格的源视频进行再生成，输出 2K 视频。</li><li>&gt; [card] [查询任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-query.md)</li><li>&gt; [card] [查询任务列表](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-list.md)</li><li>&gt; [card] [取消或删除任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-delete.md)</li><li>&gt; [card] [产品定价](https://platform.minimaxi.com/docs/pricing/overview.md#models/video)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimaxi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 视频生成<br>&gt; 本文档介绍 MiniMax 视频生成服务（MiniMax-H3）的使用方法，助力高效创作视频内容。<br>MiniMax 视频生成目前提供 **MiniMax-H3** 模型：<br>* **MiniMax-H3**：开放通用的多模态视频模型，可以统一理解文本、图片、视频和音频输入，完成视频生成、参考创作与视频编辑。<br>提示：若需要使用 MiniMax-H3，请点击 [按量购买 API](https://platform.minimaxi.com/docs/pricing/overview.md#models/video)。<br>## 支持的生成方式<br>### MiniMax-H3<br>&#124; 生成方式 &#124; 输入内容 &#124; 适用场景 &#124;<br>&#124; - &#124; - &#124; - &#124;<br>&#124; 文生视频 &#124; Prompt &#124; 根据文字描述从零生成视频 &#124;<br>&#124; 图生视频 &#124; Prompt + 首帧图片和/或尾帧图片 &#124; 控制视频的开始或结束画面，让指定画面自然动起来 &#124;<br>&#124; 全能参考生成 &#124; Prompt + 参考图片、视频或音频 &#124; 参考角色、动作、镜头、风格、声音或剪辑节奏 &#124;<br>## 模型规格与输入条件<br>### 输出规格<br>&#124; 模型名称 &#124; 输出分辨率 &#124; 输出时长 &#124;<br>&#124; - &#124; - &#124; - &#124;<br>&#124; `MiniMax-H3` &#124; 768P / 2K &#124; 4～15 秒 &#124;<br>输出时长仅支持整数值；支持多种常见宽高比或自适应，[详见 API 文档](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-create.md)。<br>### 输入条件<br>&#124; 项目 &#124; 要求 &#124;<br>&#124; - &#124; - &#124;<br>&#124; **首/尾帧入口** &#124; 图片：0、1、2 张；宽高范围 \[256, 5760]；宽高比 5:2～2:5 范围内 &#124;<br>&#124; &#124; 无图片输入时为文生视频模式 &#124;<br>&#124; **全能参考入口** &#124; 图片：≤ 9 张；宽高范围 \[256, 5760]；宽高比 5:2～2:5 范围内 &#124;<br>&#124; &#124; 视频：≤ 3 段；单段时长 \[2, 15] 秒；总时长 ≤ 15 秒；宽高范围 \[256, 5760]；宽高比 5:2～2:5 范围内 &#124;<br>&#124; &#124; 音频：≤ 3 段；单段时长 \[2, 15] 秒；总时长 ≤ 15 秒 &#124;<br>&#124; &#124; 混合输入的总上限是 12 个文件 &#124;<br>&#124; &#124; 无图片、视频、音频输入时为文生视频模式 &#124;<br>&#124; **输入格式支持** &#124; 视频：H.264/AVC、H.265/HEVC；视频内音频：AAC、MP3 &#124;<br>&#124; &#124; 图片：JPG、JPEG、PNG、WEBP、HEIC、HEIF &#124;<br>&#124; &#124; 音频：WAV、MP3 &#124;<br>&#124; **传入大小限制** &#124; 视频单个 50 MB；图片单个 30 MB；音频单个 15 MB（加起来的不限制，限制都在单个素材上） &#124;<br>&#124; &#124; API 请求体 64 MB（推荐使用 URL 传入素材） &#124;<br>&#124; **提示词字数上限** &#124; 不超过 7000 字符 &#124;<br>## 工作流程<br>视频生成是一个异步过程，包含以下三个步骤：<br>1. 创建生成任务：提交一个视频生成请求，获得任务 ID (`task_id`)<br>2. 查询任务状态：使用 `task_id` 轮询任务状态。任务成功后，直接返回成片下载地址 (`content.url`)<br>3. 获取视频文件：下载 `content.url` 指向的视频并保存到本地<br>## 功能与代码示例<br>为了简化代码，我们将轮询和下载的逻辑封装为公共函数，并举例了四种模式下如何创建任务。<br>```python theme={null}<br>import os<br>import time<br>import requests<br>api_key = os.environ["MINIMAX_API_KEY"]<br>headers = {"Authorization": f"Bearer {api_key}"}<br>BASE_URL = "https://api.minimax.cn"<br>MODEL = "MiniMax-H3"<br># --- 步骤 1: 发起视频生成任务 ---<br># MiniMax-H3 使用多模态 content[] 结构：每个元素通过 type（text / image_url / video_url / audio_url）区分，<br># 并可用 role 标注用途。以下四个函数分别对应文生视频、图生视频、首尾帧、多模态参考四种模式，<br># 都会发起一个异步任务并返回唯一的 task_id。<br>def invoke_text_to_video() -&gt; str:<br>"""（模式一）纯文本生成视频（t2va）。t2va 场景 ratio 必填且不能为 adaptive。"""<br>url = f"{BASE_URL}/v2/video_generation"<br>payload = {<br>"model": MODEL,<br>"content": [<br># type=text 为必填项，用于描述视频的动态内容。<br>{"type": "text", "text": "镜头拍摄一个女性坐在咖啡馆里，女人抬头看着窗外，镜头缓缓移动拍摄到窗外的街道，画面呈现暖色调，色彩浓郁，氛围轻松惬意。"},<br>],<br>"duration": 5,<br>"resolution": "2K",<br>"ratio": "16:9",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>return response.json()["task_id"]<br>def invoke_image_to_video() -&gt; str:<br>"""（模式二）首帧图 + 文本生成视频（i2va）。"""<br>url = f"{BASE_URL}/v2/video_generation"<br>payload = {<br>"model": MODEL,<br>"content": [<br>{"type": "text", "text": "Contemporary dance, the people in the picture are performing contemporary dance."},<br># role=first_frame 指定视频起始帧；图生视频场景下宽高比由输入图片决定，ratio 恒为 adaptive。<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/85c96368-6ead-4eae-af9c-116be878eac3.png"}, "role": "first_frame"},<br>],<br>"duration": 5,<br>"resolution": "2K",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>return response.json()["task_id"]<br>def invoke_start_end_to_video() -&gt; str:<br>"""（模式三）首帧图 + 尾帧图 + 文本生成视频。"""<br>url = f"{BASE_URL}/v2/video_generation"<br>payload = {<br>"model": MODEL,<br>"content": [<br>{"type": "text", "text": "A little girl grows up."},<br># role=first_frame 指定起始画面<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},<br># role=last_frame 指定结束画面<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/97b7cd08-764e-4b8b-a7bf-87a0bd898575.jpeg"}, "role": "last_frame"},<br>], |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • # MiniMax-H3 使用多模态 content[] 结构：每个元素通过 type（text / image_url / video_url / audio_url）区分， |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-cn-video-guide |
| source ref | 新增 | 未记录 | minimax-cn-video-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 MiniMax-H3 › headers | 新增 | 未记录 | • 生成方式<br>• 输入内容<br>• 适用场景 |
| tables › 记录 MiniMax-H3 › heading | 新增 | 未记录 | MiniMax-H3 |
| tables › 记录 MiniMax-H3 › rows › 记录 全能参考生成 | 新增 | 未记录 | • 全能参考生成<br>• Prompt + 参考图片、视频或音频<br>• 参考角色、动作、镜头、风格、声音或剪辑节奏 |
| tables › 记录 MiniMax-H3 › rows › 记录 图生视频 | 新增 | 未记录 | • 图生视频<br>• Prompt + 首帧图片和/或尾帧图片<br>• 控制视频的开始或结束画面，让指定画面自然动起来 |
| tables › 记录 MiniMax-H3 › rows › 记录 文生视频 | 新增 | 未记录 | • 文生视频<br>• Prompt<br>• 根据文字描述从零生成视频 |
| tables › 记录 输入条件 › headers | 新增 | 未记录 | • 项目<br>• 要求 |
| tables › 记录 输入条件 › heading | 新增 | 未记录 | 输入条件 |
| tables › 记录 输入条件 › rows › 第 1 项 | 新增 | 未记录 | • **首/尾帧入口**<br>• 图片：0、1、2 张；宽高范围 \[256, 5760]；宽高比 5:2～2:5 范围内 |
| tables › 记录 输入条件 › rows › 第 2 项 | 新增 | 未记录 | • 空字符串<br>• 无图片输入时为文生视频模式 |
| tables › 记录 输入条件 › rows › 第 3 项 | 新增 | 未记录 | • **全能参考入口**<br>• 图片：≤ 9 张；宽高范围 \[256, 5760]；宽高比 5:2～2:5 范围内 |
| tables › 记录 输入条件 › rows › 第 4 项 | 新增 | 未记录 | • 空字符串<br>• 视频：≤ 3 段；单段时长 \[2, 15] 秒；总时长 ≤ 15 秒；宽高范围 \[256, 5760]；宽高比 5:2～2:5 范围内 |
| tables › 记录 输入条件 › rows › 第 5 项 | 新增 | 未记录 | • 空字符串<br>• 音频：≤ 3 段；单段时长 \[2, 15] 秒；总时长 ≤ 15 秒 |
| tables › 记录 输入条件 › rows › 第 6 项 | 新增 | 未记录 | • 空字符串<br>• 混合输入的总上限是 12 个文件 |
| tables › 记录 输入条件 › rows › 第 7 项 | 新增 | 未记录 | • 空字符串<br>• 无图片、视频、音频输入时为文生视频模式 |
| tables › 记录 输入条件 › rows › 第 8 项 | 新增 | 未记录 | • **输入格式支持**<br>• 视频：H.264/AVC、H.265/HEVC；视频内音频：AAC、MP3 |
| tables › 记录 输入条件 › rows › 第 9 项 | 新增 | 未记录 | • 空字符串<br>• 图片：JPG、JPEG、PNG、WEBP、HEIC、HEIF |
| tables › 记录 输入条件 › rows › 第 10 项 | 新增 | 未记录 | • 空字符串<br>• 音频：WAV、MP3 |
| tables › 记录 输入条件 › rows › 第 11 项 | 新增 | 未记录 | • **传入大小限制**<br>• 视频单个 50 MB；图片单个 30 MB；音频单个 15 MB（加起来的不限制，限制都在单个素材上） |
| tables › 记录 输入条件 › rows › 第 12 项 | 新增 | 未记录 | • 空字符串<br>• API 请求体 64 MB（推荐使用 URL 传入素材） |
| tables › 记录 输入条件 › rows › 第 13 项 | 新增 | 未记录 | • **提示词字数上限**<br>• 不超过 7000 字符 |
| tables › 记录 输出规格 › headers | 新增 | 未记录 | • 模型名称<br>• 输出分辨率<br>• 输出时长 |
| tables › 记录 输出规格 › heading | 新增 | 未记录 | 输出规格 |
| tables › 记录 输出规格 › rows › 记录 `MiniMax-H3` | 新增 | 未记录 | • `MiniMax-H3`<br>• 768P / 2K<br>• 4～15 秒 |
| title | 新增 | 未记录 | 视频生成 |

#### 来源 / minimax-global-anthropic-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • export ANTHROPIC_BASE_URL=https://api.minimax.io/anthropic<br>• curl https://api.minimax.io/anthropic/v1/messages \ |
| capability mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>In multi-turn function call conversations, the complete model response (i.e., the assistant message) must be append to the conversation history to maintain the continuity of the reasoning chain.</li><li>&#124; `messages` &#124; Partial support &#124; `MiniMax-M3.1-Flash` and `MiniMax-M3` support text, image, video, tool use, tool result, and thinking blocks. The M2.7, M2.5, M2.1, and M2 series support text and tool-call content blocks only; they do not support image or video input &#124;</li><li>&gt; model "MiniMax-M3.1-Flash" requires adaptive thinking; thinking.type="disabled" (including reasoning.effort=none) is not allowed (2013)</li><li>&#124; `type="image"` &#124; M3.1-Flash / M3 only &#124; Image input via URL or base64. Supports JPEG, PNG, GIF, WEBP &#124;</li><li>&#124; `type="video"` &#124; M3.1-Flash / M3 only &#124; Video input via URL, base64, or `mm_file://{file_id}`. Supports MP4, AVI, MOV, MKV &#124;</li><li>&#124; `type="tool_use"` &#124; Fully supported &#124; Tool calls &#124;</li><li>&#124; `type="tool_result"` &#124; Fully supported &#124; Tool call results &#124;</li><li>&#124; `type="thinking"` &#124; Fully supported &#124; Reasoning content. Return the block unchanged in multi-turn thinking conversations &#124;</li><li>For `MiniMax-M3.1-Flash` and `MiniMax-M3`, URL or base64 videos can be up to 50 MB, images can be up to 10 MB, and the request body can be up to 64 MB. For larger videos, upload through the Files API and pass `mm_file://{file_id}`; Files API videos can be up to 512 MB.</li><li>Image token usage depends on image size and content. Use this as a rough single-image heuristic; check `POST /anthropic/v1/messages/count_tokens` or response `usage` for exact usage:</li><li>&#124; `detail` &#124; Rough single-image token usage &#124;</li><li>reasoning_buffer = ""</li><li>reasoning_buffer += new_thinking</li><li>&gt; 3. `MiniMax-M3.1-Flash` and `MiniMax-M3` support image and video input through Anthropic-compatible content blocks</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Anthropic SDK<br>&gt; Call MiniMax models using the Anthropic SDK<br>To meet developers' needs for the Anthropic API ecosystem, our API now supports the Anthropic API format. With simple configuration, you can integrate MiniMax capabilities into the Anthropic API ecosystem.<br>## Quick Start<br>### 1. Install Anthropic SDK<br>```bash Python theme={null}<br>pip install anthropic<br>```<br>```bash Node.js theme={null}<br>npm install @anthropic-ai/sdk<br>```<br>### 2. Configure Environment Variables<br>```bash theme={null}<br>export ANTHROPIC_BASE_URL=https://api.minimax.io/anthropic<br>export ANTHROPIC_API_KEY=${YOUR_API_KEY}<br>```<br>See [Configure Environment Variables](https://platform.minimax.io/docs/guides/quickstart-preparation.md#env-vars).<br>### 3. Call API<br>```python Python theme={null}<br>import anthropic<br>client = anthropic.Anthropic()<br>message = client.messages.create(<br>model="MiniMax-M3.1-Flash",<br>output_config={"effort": "max"},<br>max_tokens=4096,<br>system="You are a helpful assistant.",<br>messages=[<br>{<br>"role": "user",<br>"content": [<br>{<br>"type": "text",<br>"text": "Hi, how are you?"<br>}<br>]<br>}<br>]<br>)<br>for block in message.content:<br>if block.type == "thinking":<br>print(f"Thinking:\n{block.thinking}\n")<br>elif block.type == "text":<br>print(f"Text:\n{block.text}\n")<br>```<br>### 4. Important Note<br>In multi-turn function call conversations, the complete model response (i.e., the assistant message) must be append to the conversation history to maintain the continuity of the reasoning chain.<br>* Append the full `response.content` list to the message history (includes all content blocks: thinking/text/tool\_use)<br>## Supported Models<br>When using the Anthropic SDK, the following models are supported.<br>&#124; Model Name &#124; Context Window &#124; Description &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; MiniMax-M3.1-Flash &#124; 1,000,000 &#124; **Frontier multimodal coding model with 1M context window and tunable thinking depth** &#124;<br>&#124; MiniMax-M3 &#124; 1,000,000 &#124; **Frontier multimodal coding model with 1M context window** &#124;<br>&gt; [!NOTE]<br>&gt;<br>&gt; For details on how tps (Tokens Per Second) is calculated, please refer to [FAQ &gt; About APIs](https://platform.minimax.io/docs/faq/about-apis.md#q-how-is-tps-tokens-per-second-calculated-for-llms).<br>&gt; [!NOTE]<br>&gt;<br>&gt; The Anthropic API compatibility interface currently only supports the<br>&gt; `MiniMax-M3.1-Flash` `MiniMax-M3` models. For other models, please use the standard MiniMax API<br>&gt; interface.<br>## Compatibility<br>### Supported Parameters<br>When using the Anthropic SDK, we support the following input parameters:<br>&#124; Parameter &#124; Support Status &#124; Description &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; `model` &#124; Fully supported &#124; supports `MiniMax-M3.1-Flash` `MiniMax-M3` models &#124;<br>&#124; `messages` &#124; Partial support &#124; `MiniMax-M3.1-Flash` and `MiniMax-M3` support text, image, video, tool use, tool result, and thinking blocks. The M2.7, M2.5, M2.1, and M2 series support text and tool-call content blocks only; they do not support image or video input &#124;<br>&#124; `max_tokens` &#124; Fully supported &#124; Maximum number of tokens to generate. Thinking tokens count toward it too, so a value that is too small yields `stop_reason: "max_tokens"` with no text output &#124;<br>&#124; `stream` &#124; Fully supported &#124; Streaming response &#124;<br>&#124; `system` &#124; Fully supported &#124; System prompt &#124;<br>&#124; `tool_choice` &#124; Partial support &#124; Tool selection strategy; only `auto` is supported &#124;<br>&#124; `tools` &#124; Fully supported &#124; Tool definitions &#124;<br>&#124; `metadata` &#124; Fully Supported &#124; Metadata &#124;<br>&#124; `thinking` &#124; Fully Supported &#124; `MiniMax-M3.1-Flash` always thinks and returns `400` if `disabled` is sent. Thinking is off by default for `MiniMax-M3` and can be enabled with `adaptive`. &#124;<br>&#124; `output_config.effort` &#124; Fully Supported &#124; Tunes thinking depth for `MiniMax-M3.1-Flash`. Accepts `low`, `medium`, `high`, `xhigh`, and `max`; defaults to `max` when omitted. &#124;<br>&#124; `service_tier` &#124; Fully Supported &#124; Request admission tier. Supported values are `standard` and `priority`; if omitted, requests use `standard`. The `priority` [price](https://platform.minimax.io/docs/pricing/overview.md#models/text) is 1.5 times the `standard` price and ensures priority admission so the request is processed ahead of other requests, leading to faster responses and fewer failures. `MiniMax-M3.1-Flash` does not support this field. &#124;<br>&#124; `temperature` &#124; Ignored &#124; Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 1 &#124;<br>&#124; `top_p` &#124; Ignored &#124; Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 0.95. If passed, the value must be within (0, 1] &#124;<br>&#124; `top_k` &#124; Ignored &#124; This parameter will be ignored &#124;<br>&#124; `stop_sequences` &#124; Ignored &#124; This parameter will be ignored &#124;<br>&#124; `mcp_servers` &#124; Ignored &#124; This parameter will be ignored &#124;<br>&#124; `context_management` &#124; Ignored &#124; This parameter will be ignored &#124;<br>&#124; `container` &#124; Ignored &#124; This parameter will be ignored &#124;<br>### Thinking Control<br>The `thinking` parameter controls whether the model can emit `thinking` content blocks. Behavior differs per model:<br>&#124; Model &#124; `thinking` omitted &#124; `{"type": "adaptive"}` &#124; `{"type": "disabled"}` &#124;<br>&#124; :- &#124; :- &#124; :- &#124; :- &#124;<br>&#124; `MiniMax-M3.1-Flash` &#124; Thinking on &#124; Thinking on &#124; **Returns `400`** — thinking cannot be disabled &#124;<br>&#124; `MiniMax-M3` &#124; Thinking off &#124; Thinking on &#124; Thinking stays off &#124;<br>&gt; [!NOTE]<br>&gt;<br>&gt; The error returned for `thinking: {"type": "disabled"}`:<br>&gt;<br>&gt; ```text theme={null}<br>&gt; model "MiniMax-M3.1-Flash" requires adaptive thinking; thinking.type="disabled" (including reasoning.effort=none) is not allowed (2013)<br>&gt; ``` |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • export ANTHROPIC_API_KEY=${YOUR_API_KEY} |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-anthropic-api |
| source ref | 新增 | 未记录 | minimax-global-anthropic-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • Model Name<br>• Context Window<br>• Description |
| tables › 第 1 项 › heading | 新增 | 未记录 | Supported Models |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • MiniMax-M3.1-Flash<br>• 1,000,000<br>• **Frontier multimodal coding model with 1M context window and tunable thinking depth** |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • MiniMax-M3<br>• 1,000,000<br>• **Frontier multimodal coding model with 1M context window** |
| tables › 第 2 项 › headers | 新增 | 未记录 | • Parameter<br>• Support Status<br>• Description |
| tables › 第 2 项 › heading | 新增 | 未记录 | Supported Parameters |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • `model`<br>• Fully supported<br>• supports `MiniMax-M3.1-Flash` `MiniMax-M3` models |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • `messages`<br>• Partial support<br>• `MiniMax-M3.1-Flash` and `MiniMax-M3` support text, image, video, tool use, tool result, and thinking blocks. The M2.7, M2.5, M2.1, and M2 series support text and tool-call content blocks only; they do not support image or video input |
| tables › 第 2 项 › rows › 第 3 项 | 新增 | 未记录 | • `max_tokens`<br>• Fully supported<br>• Maximum number of tokens to generate. Thinking tokens count toward it too, so a value that is too small yields `stop_reason: "max_tokens"` with no text output |
| tables › 第 2 项 › rows › 第 4 项 | 新增 | 未记录 | • `stream`<br>• Fully supported<br>• Streaming response |
| tables › 第 2 项 › rows › 第 5 项 | 新增 | 未记录 | • `system`<br>• Fully supported<br>• System prompt |
| tables › 第 2 项 › rows › 第 6 项 | 新增 | 未记录 | • `tool_choice`<br>• Partial support<br>• Tool selection strategy; only `auto` is supported |
| tables › 第 2 项 › rows › 第 7 项 | 新增 | 未记录 | • `tools`<br>• Fully supported<br>• Tool definitions |
| tables › 第 2 项 › rows › 第 8 项 | 新增 | 未记录 | • `metadata`<br>• Fully Supported<br>• Metadata |
| tables › 第 2 项 › rows › 第 9 项 | 新增 | 未记录 | • `thinking`<br>• Fully Supported<br>• `MiniMax-M3.1-Flash` always thinks and returns `400` if `disabled` is sent. Thinking is off by default for `MiniMax-M3` and can be enabled with `adaptive`. |
| tables › 第 2 项 › rows › 第 10 项 | 新增 | 未记录 | • `output_config.effort`<br>• Fully Supported<br>• Tunes thinking depth for `MiniMax-M3.1-Flash`. Accepts `low`, `medium`, `high`, `xhigh`, and `max`; defaults to `max` when omitted. |
| tables › 第 2 项 › rows › 第 11 项 | 新增 | 未记录 | • `service_tier`<br>• Fully Supported<br>• Request admission tier. Supported values are `standard` and `priority`; if omitted, requests use `standard`. The `priority` [price](https://platform.minimax.io/docs/pricing/overview.md#models/text) is 1.5 times the `standard` price and ensures priority admission so the request is processed ahead of other requests, leading to faster responses and fewer failures. `MiniMax-M3.1-Flash` does not support this field. |
| tables › 第 2 项 › rows › 第 12 项 | 新增 | 未记录 | • `temperature`<br>• Ignored<br>• Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 1 |
| tables › 第 2 项 › rows › 第 13 项 | 新增 | 未记录 | • `top_p`<br>• Ignored<br>• Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 0.95. If passed, the value must be within (0, 1] |
| tables › 第 2 项 › rows › 第 14 项 | 新增 | 未记录 | • `top_k`<br>• Ignored<br>• This parameter will be ignored |
| tables › 第 2 项 › rows › 第 15 项 | 新增 | 未记录 | • `stop_sequences`<br>• Ignored<br>• This parameter will be ignored |
| tables › 第 2 项 › rows › 第 16 项 | 新增 | 未记录 | • `mcp_servers`<br>• Ignored<br>• This parameter will be ignored |
| tables › 第 2 项 › rows › 第 17 项 | 新增 | 未记录 | • `context_management`<br>• Ignored<br>• This parameter will be ignored |
| tables › 第 2 项 › rows › 第 18 项 | 新增 | 未记录 | • `container`<br>• Ignored<br>• This parameter will be ignored |
| tables › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• `thinking` omitted<br>• `{"type": "adaptive"}`<br>• `{"type": "disabled"}` |
| tables › 第 3 项 › heading | 新增 | 未记录 | Thinking Control |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • `MiniMax-M3.1-Flash`<br>• Thinking on<br>• Thinking on<br>• **Returns `400`** — thinking cannot be disabled |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • `MiniMax-M3`<br>• Thinking off<br>• Thinking on<br>• Thinking stays off |
| tables › 第 4 项 › headers | 新增 | 未记录 | • Field Type<br>• Support Status<br>• Description |
| tables › 第 4 项 › heading | 新增 | 未记录 | Messages Field Support |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • `type="text"`<br>• Fully supported<br>• Text messages |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • `type="image"`<br>• M3.1-Flash / M3 only<br>• Image input via URL or base64. Supports JPEG, PNG, GIF, WEBP |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • `type="video"`<br>• M3.1-Flash / M3 only<br>• Video input via URL, base64, or `mm_file://{file_id}`. Supports MP4, AVI, MOV, MKV |
| tables › 第 4 项 › rows › 第 4 项 | 新增 | 未记录 | • `type="tool_use"`<br>• Fully supported<br>• Tool calls |
| tables › 第 4 项 › rows › 第 5 项 | 新增 | 未记录 | • `type="tool_result"`<br>• Fully supported<br>• Tool call results |
| tables › 第 4 项 › rows › 第 6 项 | 新增 | 未记录 | • `type="thinking"`<br>• Fully supported<br>• Reasoning content. Return the block unchanged in multi-turn thinking conversations |
| tables › 第 5 项 › headers | 新增 | 未记录 | • `detail`<br>• Rough single-image token usage |
| tables › 第 5 项 › heading | 新增 | 未记录 | Messages Field Support |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • `low`<br>• Usually a few hundred tokens, up to \~600 |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • `default`<br>• Often \~1k-3k tokens, up to \~5k |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • `high`<br>• Often several thousand tokens, up to \~15k+ |
| title | 新增 | 未记录 | Anthropic SDK |

#### 来源 / minimax-global-audio-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • &#124; [Synchronous Text to Speech (HTTP)](https://platform.minimax.io/docs/api-reference/speech-t2a-http.md) &#124; `https://api.minimax.io/v1/t2a_v2` &#124; `https://api-uw.minimax.io/v1/t2a_v2` &#124;<br>• &#124; [Synchronous Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket.md) &#124; `wss://api.minimax.io/ws/v1/t2a_v2` &#124; `wss://api-uw.minimax.io/ws/v1/t2a_v2` &#124;<br>• &#124; [Bidirectional Streaming Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket-bidi.md) &#124; `wss://api.minimax.io/ws/v1/t2a_v2_bidi` &#124; `wss://api-uw.minimax.io/ws/v1/t2a_v2_bidi` &#124;<br>• url = "wss://api.minimax.io/ws/v1/t2a_v2" |
| capability mentions | 新增 | 未记录 | 列表（50 项）<details><summary>展开完整内容</summary><ul><li># Synchronous Text-to-Speech Guide (WebSocket)</li><li>&gt; Synchronous TTS allows real-time text-to-speech synthesis, handling up to 10,000 characters per request.</li><li>Below are the MiniMax speech models and their key features.</li><li>&#124; speech-2.8-hd &#124; Ultra-realistic quality featuring sound tags. &#124;</li><li>&#124; speech-2.8-turbo &#124; Seamless speed meets natural flow &#124;</li><li>&#124; speech-2.6-hd &#124; Ultra-low latency, intelligence parsing, and enhanced naturalness. &#124;</li><li>&#124; speech-2.6-turbo &#124; Faster, more affordable, and ideal for your agent. &#124;</li><li>&#124; speech-02-hd &#124; Superior rhythm and stability, with outstanding performance in replication similarity and sound quality. &#124;</li><li>&#124; speech-02-turbo &#124; Superior rhythm and stability, with enhanced multilingual capabilities and excellent performance. &#124;</li><li>Control how written text is converted into spoken text before speech generation.</li><li>Text normalization converts written forms into forms that are more natural to speak. For example, numbers, dates, times, currencies, phone numbers, and other structured expressions may need to be expanded or interpreted based on their context.</li><li>It uses a rule-based normalization system to handle common written expressions before speech generation.</li><li>&gt; Currently, `quality` takes effect only for non-streaming HTTP requests (`stream=false`) with `speech-2.8-hd`, `speech-2.8-turbo`, `speech-2.6-hd`, and `speech-2.6-turbo`. For streaming requests (including WebSocket) or other models, `quality` is processed as `basic` and no error is returned.</li><li>All three synchronous TTS APIs support the following domains. For US West, `api-uw.minimax.io` is recommended, with reduced Time to First Audio (TTFA).</li><li>&#124; [Synchronous Text to Speech (HTTP)](https://platform.minimax.io/docs/api-reference/speech-t2a-http.md) &#124; `https://api.minimax.io/v1/t2a_v2` &#124; `https://api-uw.minimax.io/v1/t2a_v2` &#124;</li><li>&#124; [Synchronous Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket.md) &#124; `wss://api.minimax.io/ws/v1/t2a_v2` &#124; `wss://api-uw.minimax.io/ws/v1/t2a_v2` &#124;</li><li>&#124; [Bidirectional Streaming Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket-bidi.md) &#124; `wss://api.minimax.io/ws/v1/t2a_v2_bidi` &#124; `wss://api-uw.minimax.io/ws/v1/t2a_v2_bidi` &#124;</li><li>This guide demonstrates streaming playback of synthesized audio while saving the full audio file.</li><li>⚠️ Note: To play audio streams in real-time, install [MPV player](https://mpv.io/installation/) first. Also, ensure your API Key is set in the environment variable `MINIMAX_API_KEY` ([how to set it](https://platform.minimax.io/docs/guides/quickstart-preparation.md#env-vars)).</li><li>model = "speech-2.8-hd"</li><li>class StreamAudioPlayer:</li><li>def play_audio_chunk(self, hex_audio):</li><li>"""Play audio chunk"""</li><li>audio_bytes = bytes.fromhex(hex_audio)</li><li>self.mpv_process.stdin.write(audio_bytes)</li><li>"audio_setting": {</li><li>"""Send continue request and stream play audio"""</li><li>total_audio_size = 0</li><li>audio_data = b""</li><li>if "data" in response and "audio" in response["data"]:</li><li>audio = response["data"]["audio"]</li><li>if audio:</li><li>audio_bytes = bytes.fromhex(audio)</li><li>if player.play_audio_chunk(audio):</li><li>total_audio_size += len(audio_bytes)</li><li>audio_data += audio_bytes</li><li>print(f"Audio synthesis completed: {chunk_counter-1} chunks")</li><li># Save audio to file</li><li>f.write(audio_data)</li><li>print(f"Audio saved as output.{file_format}")</li><li>estimated_duration = total_audio_size * 0.0625 / 1000</li><li>player = StreamAudioPlayer()</li><li>&gt; [card] [Synchronous Text to Speech (HTTP)](https://platform.minimax.io/docs/api-reference/speech-t2a-http.md)</li><li>&gt; Submit the full text in a single HTTP request and get the synthesized audio back, with optional streaming output.</li><li>&gt; [card] [Synchronous Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket.md)</li><li>&gt; Send text sentence by sentence over a WebSocket connection and receive streamed audio, suited for low-latency real-time playback.</li><li>&gt; [card] [Bidirectional Streaming Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket-bidi.md)</li><li>&gt; Stream text over a WebSocket connection at any granularity (even character by character); the server buffers it into sentences before synthesis, ideal for piping LLM streaming output into speech.</li><li>&gt; [card] [Pricing](https://platform.minimax.io/docs/pricing/overview.md#models/speech)</li><li>&gt; [card] [Rate Limits](https://platform.minimax.io/docs/guides/rate-limits.md#speech)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Synchronous Text-to-Speech Guide (WebSocket)<br>&gt; Synchronous TTS allows real-time text-to-speech synthesis, handling up to 10,000 characters per request.<br>## Supported Models<br>Below are the MiniMax speech models and their key features.<br>&#124; Model &#124; Description &#124;<br>&#124; - &#124; - &#124;<br>&#124; speech-2.8-hd &#124; Ultra-realistic quality featuring sound tags. &#124;<br>&#124; speech-2.8-turbo &#124; Seamless speed meets natural flow &#124;<br>&#124; speech-2.6-hd &#124; Ultra-low latency, intelligence parsing, and enhanced naturalness. &#124;<br>&#124; speech-2.6-turbo &#124; Faster, more affordable, and ideal for your agent. &#124;<br>&#124; speech-02-hd &#124; Superior rhythm and stability, with outstanding performance in replication similarity and sound quality. &#124;<br>&#124; speech-02-turbo &#124; Superior rhythm and stability, with enhanced multilingual capabilities and excellent performance. &#124;<br>## Supported Languages<br>MiniMax TTS models provide strong cross-lingual capabilities, supporting 40 widely used global languages. Our goal is to break language barriers and build truly universal AI models.<br>&#124; Support Languages &#124; &#124; &#124;<br>&#124; - &#124; - &#124; - &#124;<br>&#124; 1. Chinese &#124; 15. Turkish &#124; 28. Malay &#124;<br>&#124; 2. Cantonese &#124; 16. Dutch &#124; 29. Persian &#124;<br>&#124; 3. English &#124; 17. Ukrainian &#124; 30. Slovak &#124;<br>&#124; 4. Spanish &#124; 18. Thai &#124; 31. Swedish &#124;<br>&#124; 5. French &#124; 19. Polish &#124; 32. Croatian &#124;<br>&#124; 6. Russian &#124; 20. Romanian &#124; 33. Filipino &#124;<br>&#124; 7. German &#124; 21. Greek &#124; 34. Hungarian &#124;<br>&#124; 8. Portuguese &#124; 22. Czech &#124; 35. Norwegian &#124;<br>&#124; 9. Arabic &#124; 23. Finnish &#124; 36. Slovenian &#124;<br>&#124; 10. Italian &#124; 24. Hindi &#124; 37. Catalan &#124;<br>&#124; 11. Japanese &#124; 25. Bulgarian &#124; 38. Nynorsk &#124;<br>&#124; 12. Korean &#124; 26. Danish &#124; 39. Tamil &#124;<br>&#124; 13. Indonesian &#124; 27. Hebrew &#124; 40. Afrikaans &#124;<br>&#124; 14. Vietnamese &#124; &#124; &#124;<br>## Text Normalization<br>Control how written text is converted into spoken text before speech generation.<br>Text normalization converts written forms into forms that are more natural to speak. For example, numbers, dates, times, currencies, phone numbers, and other structured expressions may need to be expanded or interpreted based on their context.<br>If `text_normalization_mode` is omitted, the `voice_setting.text_normalization` setting applies (disabled by default).<br>You control the normalization strategy with the `text_normalization_mode` field:<br>* `basic` — fast, rule-based text normalization with low latency.<br>* `quality` — higher-quality text normalization using a hybrid LLM + rule-based approach, with additional latency.<br>### Basic mode<br>`basic` is designed for low-latency text normalization.<br>It uses a rule-based normalization system to handle common written expressions before speech generation.<br>For most TTS requests, `basic` provides a good balance of normalization quality, stability, and latency.<br>```json theme={null}<br>{<br>"text_normalization_mode": "basic"<br>}<br>```<br>### Quality mode<br>`quality` is designed for scenarios where text normalization quality is more important than latency.<br>It uses a hybrid LLM + rule-based approach. Based on the input text, the system automatically routes the request to either the rule-based branch or the LLM branch.<br>Compared with `basic`, this mode provides better normalization for more complex or context-dependent inputs.<br>```json theme={null}<br>{<br>"text_normalization_mode": "quality"<br>}<br>```<br>&gt; [!NOTE]<br>&gt;<br>&gt; Currently, `quality` takes effect only for non-streaming HTTP requests (`stream=false`) with `speech-2.8-hd`, `speech-2.8-turbo`, `speech-2.6-hd`, and `speech-2.6-turbo`. For streaming requests (including WebSocket) or other models, `quality` is processed as `basic` and no error is returned.<br>### Latency<br>`quality` introduces additional preprocessing latency:<br>* approximately 30 ms when the rule-based branch is selected<br>* approximately 100 ms when the LLM branch is triggered<br>The branch is selected automatically based on the input text.<br>### Which mode should I use?<br>For most applications, we recommend using `basic`.<br>Use `quality` when normalization accuracy is more important and the additional preprocessing latency is acceptable.<br>## Endpoints<br>All three synchronous TTS APIs support the following domains. For US West, `api-uw.minimax.io` is recommended, with reduced Time to First Audio (TTFA).<br>&#124; API &#124; Default &#124; Recommended for US West &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; [Synchronous Text to Speech (HTTP)](https://platform.minimax.io/docs/api-reference/speech-t2a-http.md) &#124; `https://api.minimax.io/v1/t2a_v2` &#124; `https://api-uw.minimax.io/v1/t2a_v2` &#124;<br>&#124; [Synchronous Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket.md) &#124; `wss://api.minimax.io/ws/v1/t2a_v2` &#124; `wss://api-uw.minimax.io/ws/v1/t2a_v2` &#124;<br>&#124; [Bidirectional Streaming Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket-bidi.md) &#124; `wss://api.minimax.io/ws/v1/t2a_v2_bidi` &#124; `wss://api-uw.minimax.io/ws/v1/t2a_v2_bidi` &#124;<br>## Streaming Request Example<br>This guide demonstrates streaming playback of synthesized audio while saving the full audio file.<br>⚠️ Note: To play audio streams in real-time, install [MPV player](https://mpv.io/installation/) first. Also, ensure your API Key is set in the environment variable `MINIMAX_API_KEY` ([how to set it](https://platform.minimax.io/docs/guides/quickstart-preparation.md#env-vars)).<br>Request example:<br>```python theme={null}<br>import asyncio<br>import websockets<br>import json<br>import ssl<br>import subprocess<br>import os<br>model = "speech-2.8-hd"<br>file_format = "mp3"<br>class StreamAudioPlayer:<br>def __init__(self):<br>self.mpv_process = None<br>def start_mpv(self):<br>"""Start MPV player process"""<br>try:<br>mpv_command = ["mpv", "--no-cache", "--no-terminal", "--", "fd://0"]<br>self.mpv_process = subprocess.Popen(<br>mpv_command,<br>stdin=subprocess.PIPE,<br>stdout=subprocess.DEVNULL, |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-audio-guide |
| source ref | 新增 | 未记录 | minimax-global-audio-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Endpoints › headers | 新增 | 未记录 | • API<br>• Default<br>• Recommended for US West |
| tables › 记录 Endpoints › heading | 新增 | 未记录 | Endpoints |
| tables › 记录 Endpoints › rows › 记录 [Bidirectional Streaming Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket-bidi.md) | 新增 | 未记录 | • [Bidirectional Streaming Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket-bidi.md)<br>• `wss://api.minimax.io/ws/v1/t2a_v2_bidi`<br>• `wss://api-uw.minimax.io/ws/v1/t2a_v2_bidi` |
| tables › 记录 Endpoints › rows › 记录 [Synchronous Text to Speech (HTTP)](https://platform.minimax.io/docs/api-reference/speech-t2a-http.md) | 新增 | 未记录 | • [Synchronous Text to Speech (HTTP)](https://platform.minimax.io/docs/api-reference/speech-t2a-http.md)<br>• `https://api.minimax.io/v1/t2a_v2`<br>• `https://api-uw.minimax.io/v1/t2a_v2` |
| tables › 记录 Endpoints › rows › 记录 [Synchronous Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket.md) | 新增 | 未记录 | • [Synchronous Text to Speech (WebSocket)](https://platform.minimax.io/docs/api-reference/speech-t2a-websocket.md)<br>• `wss://api.minimax.io/ws/v1/t2a_v2`<br>• `wss://api-uw.minimax.io/ws/v1/t2a_v2` |
| tables › 记录 Supported Languages › headers | 新增 | 未记录 | • Support Languages<br>• 空字符串<br>• 空字符串 |
| tables › 记录 Supported Languages › heading | 新增 | 未记录 | Supported Languages |
| tables › 记录 Supported Languages › rows › 记录 1. Chinese | 新增 | 未记录 | • 1. Chinese<br>• 15. Turkish<br>• 28. Malay |
| tables › 记录 Supported Languages › rows › 记录 10. Italian | 新增 | 未记录 | • 10. Italian<br>• 24. Hindi<br>• 37. Catalan |
| tables › 记录 Supported Languages › rows › 记录 11. Japanese | 新增 | 未记录 | • 11. Japanese<br>• 25. Bulgarian<br>• 38. Nynorsk |
| tables › 记录 Supported Languages › rows › 记录 12. Korean | 新增 | 未记录 | • 12. Korean<br>• 26. Danish<br>• 39. Tamil |
| tables › 记录 Supported Languages › rows › 记录 13. Indonesian | 新增 | 未记录 | • 13. Indonesian<br>• 27. Hebrew<br>• 40. Afrikaans |
| tables › 记录 Supported Languages › rows › 记录 14. Vietnamese | 新增 | 未记录 | • 14. Vietnamese<br>• 空字符串<br>• 空字符串 |
| tables › 记录 Supported Languages › rows › 记录 2. Cantonese | 新增 | 未记录 | • 2. Cantonese<br>• 16. Dutch<br>• 29. Persian |
| tables › 记录 Supported Languages › rows › 记录 3. English | 新增 | 未记录 | • 3. English<br>• 17. Ukrainian<br>• 30. Slovak |
| tables › 记录 Supported Languages › rows › 记录 4. Spanish | 新增 | 未记录 | • 4. Spanish<br>• 18. Thai<br>• 31. Swedish |
| tables › 记录 Supported Languages › rows › 记录 5. French | 新增 | 未记录 | • 5. French<br>• 19. Polish<br>• 32. Croatian |
| tables › 记录 Supported Languages › rows › 记录 6. Russian | 新增 | 未记录 | • 6. Russian<br>• 20. Romanian<br>• 33. Filipino |
| tables › 记录 Supported Languages › rows › 记录 7. German | 新增 | 未记录 | • 7. German<br>• 21. Greek<br>• 34. Hungarian |
| tables › 记录 Supported Languages › rows › 记录 8. Portuguese | 新增 | 未记录 | • 8. Portuguese<br>• 22. Czech<br>• 35. Norwegian |
| tables › 记录 Supported Languages › rows › 记录 9. Arabic | 新增 | 未记录 | • 9. Arabic<br>• 23. Finnish<br>• 36. Slovenian |
| tables › 记录 Supported Models › headers | 新增 | 未记录 | • Model<br>• Description |
| tables › 记录 Supported Models › heading | 新增 | 未记录 | Supported Models |
| tables › 记录 Supported Models › rows › 记录 speech-02-hd | 新增 | 未记录 | • speech-02-hd<br>• Superior rhythm and stability, with outstanding performance in replication similarity and sound quality. |
| tables › 记录 Supported Models › rows › 记录 speech-02-turbo | 新增 | 未记录 | • speech-02-turbo<br>• Superior rhythm and stability, with enhanced multilingual capabilities and excellent performance. |
| tables › 记录 Supported Models › rows › 记录 speech-2.6-hd | 新增 | 未记录 | • speech-2.6-hd<br>• Ultra-low latency, intelligence parsing, and enhanced naturalness. |
| tables › 记录 Supported Models › rows › 记录 speech-2.6-turbo | 新增 | 未记录 | • speech-2.6-turbo<br>• Faster, more affordable, and ideal for your agent. |
| tables › 记录 Supported Models › rows › 记录 speech-2.8-hd | 新增 | 未记录 | • speech-2.8-hd<br>• Ultra-realistic quality featuring sound tags. |
| tables › 记录 Supported Models › rows › 记录 speech-2.8-turbo | 新增 | 未记录 | • speech-2.8-turbo<br>• Seamless speed meets natural flow |
| title | 新增 | 未记录 | Synchronous Text-to-Speech Guide (WebSocket) |

#### 来源 / minimax-global-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • ````yaml api-reference/file/management/api/openapi.json POST /v1/files/upload<br>• POST /v1/files/upload |
| capability mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>2. __prompt_audio__: Sample audio for voice cloning</li><li>asynchronous long-text-to-speech synthesis.</li><li>4. __video_understanding__: Video file for multimodal</li><li>5. __video_generation_input__: Input materials for video</li><li>generation (first-frame image / reference image / reference</li><li>video / reference audio), referenced in the generation</li><li>`video_generation_input`:</li><li>&#124; Image &#124; jpg / jpeg / png / webp / heic / heif &#124; 30 MB &#124;</li><li>&#124; Reference video &#124; mp4 / mov &#124; 50 MB &#124;</li><li>&#124; Reference audio &#124; wav / mp3 &#124; 15 MB &#124;</li><li>- prompt_audio</li><li>- video_understanding</li><li>- video_generation_input</li><li>1026, The image description contains sensitive content</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Upload File<br>&gt; Upload a file on the MiniMax API Platform.<br>## OpenAPI<br>````yaml api-reference/file/management/api/openapi.json POST /v1/files/upload<br>openapi: 3.1.0<br>info:<br>title: MiniMax File Management API<br>description: &gt;-<br>MiniMax file management API for uploading, retrieving, listing, and deleting<br>files<br>license:<br>name: MIT<br>version: 1.0.0<br>servers:<br>- url: https://api.minimax.io<br>security:<br>- bearerAuth: []<br>paths:<br>/v1/files/upload:<br>post:<br>tags:<br>- Files<br>summary: Upload File<br>operationId: uploadFile<br>parameters:<br>- name: Content-Type<br>in: header<br>required: true<br>description: Indicates the request is a multipart file upload.<br>schema:<br>type: string<br>enum:<br>- multipart/form-data<br>default: multipart/form-data<br>requestBody:<br>description: ''<br>content:<br>multipart/form-data:<br>schema:<br>type: object<br>required:<br>- purpose<br>- file<br>properties:<br>purpose:<br>type: string<br>description: &gt;-<br>The purpose of the file. The values and supported formats<br>are as follows:<br>1. __voice_clone__: For quick cloning of the original voice<br>file (supports mp3, m4a, wav formats).<br>2. __prompt_audio__: Sample audio for voice cloning<br>(supports mp3, m4a, wav formats).<br>3. __t2a_async_input__: Text file in the request body for<br>asynchronous long-text-to-speech synthesis.<br>4. __video_understanding__: Video file for multimodal<br>understanding, referenced in chat requests as<br>`mm_file://{file_id}` and retained for up to 7 days<br>(supports MP4, AVI, MOV, MKV formats).<br>5. __video_generation_input__: Input materials for video<br>generation (first-frame image / reference image / reference<br>video / reference audio), referenced in the generation<br>request's content `url` field as `mm_file://{file_id}`,<br>valid for 7 days (after expiry, generation returns file<br>expired and you must re-upload); specs are validated on<br>upload, invalid files are rejected with 400 and not<br>retained, and heic/heif dimensions are parsed server-side<br>(no client-side transcoding).<br>Supported formats and per-file size limits for<br>`video_generation_input`:<br>&#124; Type &#124; Extensions &#124; Per-file limit &#124;<br>&#124; --- &#124; --- &#124; --- &#124;<br>&#124; Image &#124; jpg / jpeg / png / webp / heic / heif &#124; 30 MB &#124;<br>&#124; Reference video &#124; mp4 / mov &#124; 50 MB &#124;<br>&#124; Reference audio &#124; wav / mp3 &#124; 15 MB &#124;<br>enum:<br>- voice_clone<br>- prompt_audio<br>- t2a_async_input<br>- video_understanding<br>- video_generation_input<br>example: t2a_async_input<br>file:<br>type: string<br>format: binary<br>description: The file to be uploaded.<br>required: true<br>responses:<br>'200':<br>description: ''<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/UploadFileResp'<br>components:<br>schemas:<br>UploadFileResp: |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/UploadFileResp'<br>• $ref: '#/components/schemas/FileObject'<br>• $ref: '#/components/schemas/UploadFileBaseResp'<br>• file_id: ${file_id} |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-file-upload-api |
| source ref | 新增 | 未记录 | minimax-global-file-upload-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Upload File |

#### 来源 / minimax-global-function-call-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • export ANTHROPIC_BASE_URL=https://api.minimax.io/anthropic<br>• export OPENAI_BASE_URL=https://api.minimax.io/v1 |
| capability mentions | 新增 | 未记录 | 列表（28 项）<details><summary>展开完整内容</summary><ul><li>This ability allows the model to excel at long-horizon and complex tasks, achieving state-of-the-art (SOTA) results on benchmarks such as SWE, BrowseComp, and xBench, which test both coding and agentic reasoning performance.</li><li>In the following examples, we’ll illustrate best practices for Tool Use and Interleaved Thinking with MiniMax-M3.1-Flash. The key principle is to return the model’s full response each time—especially the thinking fields (`thinking` / `reasoning_content`).</li><li>* `thinking` / `reasoning_content`: The model's thinking/reasoning process</li><li>* `tool_use` / `tool_calls`: The tool calls the model has decided to make</li><li>* `id`: Unique identifier for the tool call</li><li>&gt; MiniMax-M3.1-Flash thinks on demand: for simple tool calls, the model may call the tool directly without producing thinking content, in which case that turn has no `thinking` block or `reasoning_content` field. Check whether the field exists before reading it, and always append the full returned message to the history whether or not it contains thinking.</li><li>In multi-turn function call conversations, the complete model response (i.e., the assistant message) must be appended to the conversation history to maintain the continuity of the reasoning chain.</li><li>* Append the full `response_message` object (including the `reasoning_content` and `tool_calls` fields) to the message history</li><li>* The model's thinking is returned in the `reasoning_content` field and must be kept when passing the message back</li><li># 2. Model returns first response (may include tool calls)</li><li># 3. If tool calls exist, execute tools and continue conversation</li><li>When calling MiniMax-M3.1-Flash via the OpenAI SDK, the thinking content is returned in the `reasoning_content` field and can be displayed directly.</li><li>&gt; Important: To ensure that Interleaved Thinking works properly and the model’s chain of thought remains uninterrupted, the entire `response_message`, including `reasoning_content`, must be kept in the message history and passed back to the model in the next request. This is essential for achieving the model’s best performance.</li><li># 2. Model returns tool call</li><li>if response_message.tool_calls:</li><li>tool_call = response_message.tool_calls[0]</li><li>function_args = json.loads(tool_call.function.arguments)</li><li>if getattr(response_message, "reasoning_content", None):</li><li>print(f"💭 Thinking&gt;\t {response_message.reasoning_content}")</li><li>print(f"🔧 Tool&gt;\t {tool_call.function.name}({function_args['location']})")</li><li># ⚠️ Critical: Append the complete response_message (including reasoning_content and tool_calls)</li><li>"tool_call_id": tool_call.id,</li><li>if getattr(final_message, "reasoning_content", None):</li><li>print(f"💭 Thinking&gt;\t {final_message.reasoning_content}")</li><li>"finish_reason": "tool_calls",</li><li>"tool_calls": [</li><li>"audio_content": ""</li><li>&gt; MiniMax-M3.1-Flash excels at code understanding, dialogue, and reasoning.</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Tool Use &amp; Interleaved Thinking<br>&gt; MiniMax-M3.1-Flash is an Agentic Model with exceptional Tool Use capabilities.<br>MiniMax-M3.1-Flash natively supports Interleaved Thinking, enabling it to reason between each round of tool interactions. Before every Tool Use, the model reflects on the current environment and the tool outputs to decide its next action.<br>![](https://filecdn.minimax.chat/public/4f4b43c1-f0a5-416a-8770-1a4f80feeb1e.png)<br>This ability allows the model to excel at long-horizon and complex tasks, achieving state-of-the-art (SOTA) results on benchmarks such as SWE, BrowseComp, and xBench, which test both coding and agentic reasoning performance.<br>In the following examples, we’ll illustrate best practices for Tool Use and Interleaved Thinking with MiniMax-M3.1-Flash. The key principle is to return the model’s full response each time—especially the thinking fields (`thinking` / `reasoning_content`).<br>## Parameters<br>### Request Parameters<br>* `tools`: Defines the list of callable functions, including function names, descriptions, and parameter schemas<br>### Response Parameters<br>Key fields in Tool Use responses:<br>* `thinking` / `reasoning_content`: The model's thinking/reasoning process<br>* `text` / `content`: The text content output by the model<br>* `tool_use` / `tool_calls`: The tool calls the model has decided to make<br>* `name` / `function.name`: The name of the function being called<br>* `input` / `function.arguments`: Function call parameters (a JSON string in the OpenAI format)<br>* `id`: Unique identifier for the tool call<br>&gt; [!NOTE]<br>&gt;<br>&gt; MiniMax-M3.1-Flash thinks on demand: for simple tool calls, the model may call the tool directly without producing thinking content, in which case that turn has no `thinking` block or `reasoning_content` field. Check whether the field exists before reading it, and always append the full returned message to the history whether or not it contains thinking.<br>## Important Note<br>In multi-turn function call conversations, the complete model response (i.e., the assistant message) must be appended to the conversation history to maintain the continuity of the reasoning chain.<br>**OpenAI SDK:**<br>* Append the full `response_message` object (including the `reasoning_content` and `tool_calls` fields) to the message history<br>* The model's thinking is returned in the `reasoning_content` field and must be kept when passing the message back<br>**Anthropic SDK:**<br>* Append the full `response.content` list to the message history (includes all content blocks: thinking/text/tool\_use)<br>See examples below for implementation details.<br>## Examples<br>### Anthropic SDK<br>#### Configure Environment Variables<br>```bash theme={null}<br>export ANTHROPIC_BASE_URL=https://api.minimax.io/anthropic<br>export ANTHROPIC_API_KEY=${YOUR_API_KEY}<br>```<br>See [Configure Environment Variables](https://platform.minimax.io/docs/guides/quickstart-preparation.md#env-vars).<br>#### Example<br>```python theme={null}<br>import anthropic<br>import json<br># Initialize client<br>client = anthropic.Anthropic()<br># Define tool: weather query<br>tools = [<br>{<br>"name": "get_weather",<br>"description": "Get weather of a location, the user should supply a location first.",<br>"input_schema": {<br>"type": "object",<br>"properties": {<br>"location": {<br>"type": "string",<br>"description": "The city and state, e.g. San Francisco, US",<br>}<br>},<br>"required": ["location"]<br>}<br>}<br>]<br>def send_messages(messages):<br>params = {<br>"model": "MiniMax-M3.1-Flash",<br>"max_tokens": 4096,<br>"messages": messages,<br>"tools": tools,<br>}<br>response = client.messages.create(**params)<br>return response<br>def process_response(response):<br>thinking_blocks = []<br>text_blocks = []<br>tool_use_blocks = []<br># Iterate through all content blocks<br>for block in response.content:<br>if block.type == "thinking":<br>thinking_blocks.append(block)<br>print(f"💭 Thinking&gt;\n{block.thinking}\n")<br>elif block.type == "text":<br>text_blocks.append(block)<br>print(f"💬 Model&gt;\t{block.text}")<br>elif block.type == "tool_use":<br>tool_use_blocks.append(block)<br>print(f"🔧 Tool&gt;\t{block.name}({json.dumps(block.input, ensure_ascii=False)})")<br>return thinking_blocks, text_blocks, tool_use_blocks<br># 1. User query<br>messages = [{"role": "user", "content": "How's the weather in San Francisco?"}]<br>print(f"\n👤 User&gt;\t {messages[0]['content']}")<br># 2. Model returns first response (may include tool calls)<br>response = send_messages(messages)<br>thinking_blocks, text_blocks, tool_use_blocks = process_response(response)<br># 3. If tool calls exist, execute tools and continue conversation<br>if tool_use_blocks:<br># ⚠️ Critical: Append the assistant's complete response to message history<br># response.content contains a list of all blocks: [thinking block, text block, tool_use block]<br># Must be fully preserved, otherwise subsequent conversation will lose context<br>messages.append({<br>"role": "assistant", |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • export ANTHROPIC_API_KEY=${YOUR_API_KEY}<br>• export OPENAI_API_KEY=${YOUR_API_KEY}<br>• &gt; [card] [MiniMax-M3.1-Flash for AI Coding Tools](https://platform.minimax.io/docs/m-plan/openclaw.md) |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-function-call-api |
| source ref | 新增 | 未记录 | minimax-global-function-call-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Tool Use &amp; Interleaved Thinking |

#### 来源 / minimax-global-image-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • url = "https://api.minimax.io/v1/image_generation" |
| capability mentions | 新增 | 未记录 | 列表（19 项）<details><summary>展开完整内容</summary><ul><li># Image Generation Guide</li><li>&gt; The Image Generation service provides two core capabilities: **Text-to-Image** and **Image-to-Image**.</li><li>## Generate Images from Text</li><li>Create images directly from detailed text descriptions (prompts) that specify the desired content.</li><li>url = "https://api.minimax.io/v1/image_generation"</li><li>"model": "image-01",</li><li>"prompt": "men Dressing in white t shirt, full-body stand front view image :25, outdoor, Venice beach sign, full-body image, Los Angeles, Fashion photography of 90s, documentary, Film grain, photorealistic",</li><li>images = response.json()["data"]["image_base64"]</li><li>for i in range(len(images)):</li><li>f.write(base64.b64decode(images[i]))</li><li>## Generate Images with Reference Images</li><li>This feature allows you to supply a reference image (including online image URLs) that contains a clear subject. Combined with a text prompt, the service generates a new image that preserves the subject’s key characteristics. Only a single reference image is supported per request.\</li><li>This is particularly useful for scenarios that require consistent visual identity, such as generating images of the same virtual character in different contexts.</li><li>"image_file": "https://cdn.hailuoai.com/prod/2025-08-12-17/video_cover/1754990600020238321-411603868533342214-cover.jpg",</li><li>&gt; [card] [Text to Image Generation](https://platform.minimax.io/docs/api-reference/image-generation-t2i.md)</li><li>&gt; Use this API to generate images from text input.</li><li>&gt; [card] [Image-to-Image Generation](https://platform.minimax.io/docs/api-reference/image-generation-i2i.md)</li><li>&gt; Use this API to generate images from image input.</li><li>&gt; [card] [Pricing](https://platform.minimax.io/docs/pricing/overview.md#models/image)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Image Generation Guide<br>&gt; The Image Generation service provides two core capabilities: **Text-to-Image** and **Image-to-Image**.<br>## Generate Images from Text<br>Create images directly from detailed text descriptions (prompts) that specify the desired content.<br>```python theme={null}<br>import base64<br>import requests<br>import os<br>url = "https://api.minimax.io/v1/image_generation"<br>api_key = os.environ["MINIMAX_API_KEY"]<br>headers = {"Authorization": f"Bearer {api_key}"}<br>payload = {<br>"model": "image-01",<br>"prompt": "men Dressing in white t shirt, full-body stand front view image :25, outdoor, Venice beach sign, full-body image, Los Angeles, Fashion photography of 90s, documentary, Film grain, photorealistic",<br>"aspect_ratio": "16:9",<br>"response_format": "base64",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>images = response.json()["data"]["image_base64"]<br>for i in range(len(images)):<br>with open(f"output-{i}.jpeg", "wb") as f:<br>f.write(base64.b64decode(images[i]))<br>```<br>The generated picture：<br>![图片描述](https://filecdn.minimax.chat/public/b2c8d2e7-e0bf-4f00-8e91-6b7b18c17bda.jpeg)<br>## Generate Images with Reference Images<br>This feature allows you to supply a reference image (including online image URLs) that contains a clear subject. Combined with a text prompt, the service generates a new image that preserves the subject’s key characteristics. Only a single reference image is supported per request.\<br>This is particularly useful for scenarios that require consistent visual identity, such as generating images of the same virtual character in different contexts.<br>```python theme={null}<br>import base64<br>import requests<br>import os<br>url = "https://api.minimax.io/v1/image_generation"<br>api_key = os.environ["MINIMAX_API_KEY"]<br>headers = {"Authorization": f"Bearer {api_key}"}<br>payload = {<br>"model": "image-01",<br>"prompt": "A girl stands by the library window, gazing into the distance",<br>"aspect_ratio": "16:9",<br>"subject_reference": [<br>{<br>"type": "character",<br>"image_file": "https://cdn.hailuoai.com/prod/2025-08-12-17/video_cover/1754990600020238321-411603868533342214-cover.jpg",<br>}<br>],<br>"response_format": "base64",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>images = response.json()["data"]["image_base64"]<br>for i in range(len(images)):<br>with open(f"output-{i}.jpeg", "wb") as f:<br>f.write(base64.b64decode(images[i]))<br>```<br>The generated picture：<br>![图片描述](https://filecdn.minimax.chat/public/5fc99b37-d323-4d8c-9bd5-ecedf88a985a.jpeg)<br>## Recommended Reading<br>&gt; [card] [Text to Image Generation](https://platform.minimax.io/docs/api-reference/image-generation-t2i.md)<br>&gt;<br>&gt; Use this API to generate images from text input.<br>&gt; [card] [Image-to-Image Generation](https://platform.minimax.io/docs/api-reference/image-generation-i2i.md)<br>&gt;<br>&gt; Use this API to generate images from image input.<br>&gt; [card] [Pricing](https://platform.minimax.io/docs/pricing/overview.md#models/image)<br>&gt;<br>&gt; Detailed information on model pricing and API packages.<br>&gt; [card] [Rate Limits](https://platform.minimax.io/docs/guides/rate-limits.md#3-rate-limits-for-our-api)<br>&gt;<br>&gt; Rate limits are restrictions that our API imposes on the number of times a<br>&gt; user or client can access our services within a specified period of time. |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • url = "https://api.minimax.io/v1/image_generation"<br>• &gt; [card] [Text to Image Generation](https://platform.minimax.io/docs/api-reference/image-generation-t2i.md)<br>• &gt; [card] [Image-to-Image Generation](https://platform.minimax.io/docs/api-reference/image-generation-i2i.md)<br>• &gt; [card] [Pricing](https://platform.minimax.io/docs/pricing/overview.md#models/image) |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-image-guide |
| source ref | 新增 | 未记录 | minimax-global-image-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Image Generation Guide |

#### 来源 / minimax-global-m-plan-intro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • [**M Plan**](https://www.minimax.io/m-plan) is MiniMax’s subscription for individuals, giving you unified access to our flagship text, video, image, and audio models. Built for both daily productivity and creative projects, it offers three flexible tiers—Go, Explore, and Build—to match your usage. [Subscribe Now](https://www.minimax.io/m-plan)<br>• &#124; Video model &#124; Not included &#124; H3 &#124; H3 &#124;<br>• &#124; Other modalities &#124; Image and audio models &#124; Image and audio models &#124; Image and audio models &#124;<br>• Actual consumption varies with the model, context length, and task complexity. Video generation uses more of your quota than text generation, so frequent video use can exhaust it faster. Use the table below to choose a tier that suits your usage habits and tasks. |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Introduction<br>&gt; Learn about M Plan tiers, available models, usage, and supported products.<br>[**M Plan**](https://www.minimax.io/m-plan) is MiniMax’s subscription for individuals, giving you unified access to our flagship text, video, image, and audio models. Built for both daily productivity and creative projects, it offers three flexible tiers—Go, Explore, and Build—to match your usage. [Subscribe Now](https://www.minimax.io/m-plan)<br>## Available models<br>&gt; [!NOTE]<br>&gt;<br>&gt; MiniMax-M3.1-Flash-Preview has been retired. Requests using the old name are now served by MiniMax-M3.1-Flash.<br>&#124; Model &#124; Go &#124; Explore &#124; Build &#124;<br>&#124; :- &#124; :- &#124; :- &#124; :- &#124;<br>&#124; Text model &#124; M3.1 Flash &#124; M3.1 Flash &#124; M3.1 Flash &#124;<br>&#124; Video model &#124; Not included &#124; H3 &#124; H3 &#124;<br>&#124; Other modalities &#124; Image and audio models &#124; Image and audio models &#124; Image and audio models &#124;<br>## Usage limits<br>Actual consumption varies with the model, context length, and task complexity. Video generation uses more of your quota than text generation, so frequent video use can exhaust it faster. Use the table below to choose a tier that suits your usage habits and tasks.<br>&#124; Tier &#124; Usage quota relative to Go &#124; Usage guide &#124;<br>&#124; :- &#124; :- &#124; :- &#124;<br>&#124; Go &#124; 1× &#124; Getting started with simple research, light writing, or small code changes. &#124;<br>&#124; Explore &#124; 3× &#124; Daily use for coding, writing, organizing information, and multi-turn tasks. &#124;<br>&#124; Build &#124; 7.5× &#124; Frequent use for long-context work, complex coding tasks, or extensive multimodal creation. &#124;<br>## Supported products<br>You can use M Plan through MiniMax Code or other supported AI tools.<br>&gt; [card] [MiniMax Code · Recommended](https://platform.minimax.io/docs/m-plan/minimax-code.md)<br>&gt;<br>&gt; Use MiniMax's official agent app for local development and everyday work. Sign in to access your M Plan benefits, with no separate subscription or M Plan API key setup.<br>**Other AI tools:** Get your [M Plan API key](https://platform.minimax.io/console/plan), then connect models to Claude Code, Codex, Cursor, OpenCode, or other AI tools you already use.<br>&gt; [card] [Claude Code](https://platform.minimax.io/docs/m-plan/claude-code.md)<br>&gt; [card] [Codex](https://platform.minimax.io/docs/m-plan/codex.md)<br>&gt; [card] [Cursor](https://platform.minimax.io/docs/m-plan/cursor.md)<br>&gt; [card] [OpenCode](https://platform.minimax.io/docs/m-plan/opencode.md)<br>&gt; [card] [Pi](https://platform.minimax.io/docs/m-plan/pi.md)<br>&gt; [card] [Hermes Agent](https://platform.minimax.io/docs/m-plan/hermes-agent.md)<br>&gt; [card] [OpenClaw](https://platform.minimax.io/docs/m-plan/openclaw.md)<br>&gt; [card] [Other tools](https://platform.minimax.io/docs/m-plan/other-tools.md) |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>&gt; Learn about M Plan tiers, available models, usage, and supported products.</li><li>[**M Plan**](https://www.minimax.io/m-plan) is MiniMax’s subscription for individuals, giving you unified access to our flagship text, video, image, and audio models. Built for both daily productivity and creative projects, it offers three flexible tiers—Go, Explore, and Build—to match your usage. [Subscribe Now](https://www.minimax.io/m-plan)</li><li>You can use M Plan through MiniMax Code or other supported AI tools.</li><li>&gt; [card] [MiniMax Code · Recommended](https://platform.minimax.io/docs/m-plan/minimax-code.md)</li><li>&gt; Use MiniMax's official agent app for local development and everyday work. Sign in to access your M Plan benefits, with no separate subscription or M Plan API key setup.</li><li>**Other AI tools:** Get your [M Plan API key](https://platform.minimax.io/console/plan), then connect models to Claude Code, Codex, Cursor, OpenCode, or other AI tools you already use.</li><li>&gt; [card] [Claude Code](https://platform.minimax.io/docs/m-plan/claude-code.md)</li><li>&gt; [card] [Codex](https://platform.minimax.io/docs/m-plan/codex.md)</li><li>&gt; [card] [Cursor](https://platform.minimax.io/docs/m-plan/cursor.md)</li><li>&gt; [card] [OpenCode](https://platform.minimax.io/docs/m-plan/opencode.md)</li><li>&gt; [card] [Pi](https://platform.minimax.io/docs/m-plan/pi.md)</li><li>&gt; [card] [Hermes Agent](https://platform.minimax.io/docs/m-plan/hermes-agent.md)</li><li>&gt; [card] [OpenClaw](https://platform.minimax.io/docs/m-plan/openclaw.md)</li><li>&gt; [card] [Other tools](https://platform.minimax.io/docs/m-plan/other-tools.md)</li></ul></details> |
| scope | 新增 | 未记录 | plan |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-intro |
| source ref | 新增 | 未记录 | minimax-global-m-plan-intro |
| structured records › 第 1 项 › 说明（description） | 新增 | 未记录 | Getting started with simple research, light writing, or small code changes. |
| structured records › 第 1 项 › locator | 新增 | 未记录 | #usage-limits/table/1 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-intro |
| structured records › 第 1 项 › 服务档位（tier） | 新增 | 未记录 | Go |
| structured records › 第 2 项 › 说明（description） | 新增 | 未记录 | Daily use for coding, writing, organizing information, and multi-turn tasks. |
| structured records › 第 2 项 › locator | 新增 | 未记录 | #usage-limits/table/2 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-intro |
| structured records › 第 2 项 › 服务档位（tier） | 新增 | 未记录 | Explore |
| structured records › 第 3 项 › 说明（description） | 新增 | 未记录 | Frequent use for long-context work, complex coding tasks, or extensive multimodal creation. |
| structured records › 第 3 项 › locator | 新增 | 未记录 | #usage-limits/table/3 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-intro |
| structured records › 第 3 项 › 服务档位（tier） | 新增 | 未记录 | Build |
| tables › 记录 Available models › headers | 新增 | 未记录 | • Model<br>• Go<br>• Explore<br>• Build |
| tables › 记录 Available models › heading | 新增 | 未记录 | Available models |
| tables › 记录 Available models › rows › 记录 Other modalities | 新增 | 未记录 | • Other modalities<br>• Image and audio models<br>• Image and audio models<br>• Image and audio models |
| tables › 记录 Available models › rows › 记录 Text model | 新增 | 未记录 | • Text model<br>• M3.1 Flash<br>• M3.1 Flash<br>• M3.1 Flash |
| tables › 记录 Available models › rows › 记录 Video model | 新增 | 未记录 | • Video model<br>• Not included<br>• H3<br>• H3 |
| tables › 记录 Usage limits › headers | 新增 | 未记录 | • Tier<br>• Usage quota relative to Go<br>• Usage guide |
| tables › 记录 Usage limits › heading | 新增 | 未记录 | Usage limits |
| tables › 记录 Usage limits › rows › 记录 Build | 新增 | 未记录 | • Build<br>• 7.5×<br>• Frequent use for long-context work, complex coding tasks, or extensive multimodal creation. |
| tables › 记录 Usage limits › rows › 记录 Explore | 新增 | 未记录 | • Explore<br>• 3×<br>• Daily use for coding, writing, organizing information, and multi-turn tasks. |
| tables › 记录 Usage limits › rows › 记录 Go | 新增 | 未记录 | • Go<br>• 1×<br>• Getting started with simple research, light writing, or small code changes. |
| title | 新增 | 未记录 | Introduction |

#### 来源 / minimax-global-m-plan-page

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • VIDEO<br>• SPEECH &amp; MUSIC<br>• MiniMax Speech 2.8 MiniMax Music 3.0<br>• MiniMax Speech 2.8 NEW |
| excerpt | 新增 | 未记录 | M Plan - MiniMax API Platform Models<br>LLM<br>MiniMax M3.1 Flash MiniMax M3<br>VIDEO<br>MiniMax H3<br>SPEECH &amp; MUSIC<br>MiniMax Speech 2.8 MiniMax Music 3.0<br>API M Plan MiniMax Code Research Company<br>About News Investor Relations<br>Contact Us Log in<br>MiniMax Code API Platform<br>Log in<br>MiniMax Code API Platform<br>Models<br>LLM<br>MiniMax M3.1 Flash NEW<br>MiniMax M3 NEW<br>VIDEO<br>MiniMax H3 NEW<br>SPEECH &amp; MUSIC<br>MiniMax Speech 2.8 NEW<br>MiniMax Music 3.0 NEW<br>API<br>M Plan<br>MiniMax Code<br>Research<br>Company<br>About<br>News<br>Investor Relations |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • M Plan - MiniMax API Platform Models<br>• API M Plan MiniMax Code Research Company<br>• M Plan |
| scope | 新增 | 未记录 | plan |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-m-plan-page |
| source ref | 新增 | 未记录 | minimax-global-m-plan-page |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | M Plan - MiniMax API Platform |

#### 来源 / minimax-global-mcp-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • &gt; M Plan MCP provides two exclusive tools: **web_search** and **understand_image**, helping developers quickly access information and understand image content during coding.<br>• &gt; [accordion] understand\_image<br>• &gt; Performs image understanding and analysis, supporting multiple image input methods.<br>• &gt; &#124; prompt &#124; string &#124; ✓ &#124; Question or analysis request for the image &#124;<br>• &gt; &#124; image\_source &#124; string &#124; ✓ &#124; Image source, supports HTTP/HTTPS URL or local file path &#124;<br>• After entering Claude Code, type `/mcp`. If you can see `web_search` and `understand_image`, the configuration is successful. |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># M Plan MCP Guide<br>&gt; M Plan MCP provides two exclusive tools: **web_search** and **understand_image**, helping developers quickly access information and understand image content during coding.<br>&gt; [!TIP]<br>&gt;<br>&gt; We recommend using [MiniMax CLI](https://platform.minimax.io/docs/m-plan/minimax-cli.md) instead of MCP for simpler setup and better experience.<br>## Tool Description<br>&gt; [accordion] web\_search<br>&gt;<br>&gt; Performs web searches based on search queries, returning search results and related suggestions.<br>&gt;<br>&gt; &#124; Parameter &#124; Type &#124; Required &#124; Description &#124;<br>&gt; &#124; :- &#124; :- &#124; :-: &#124; :- &#124;<br>&gt; &#124; query &#124; string &#124; ✓ &#124; Search query &#124;<br>&gt; [accordion] understand\_image<br>&gt;<br>&gt; Performs image understanding and analysis, supporting multiple image input methods.<br>&gt;<br>&gt; &#124; Parameter &#124; Type &#124; Required &#124; Description &#124;<br>&gt; &#124; :- &#124; :- &#124; :-: &#124; :- &#124;<br>&gt; &#124; prompt &#124; string &#124; ✓ &#124; Question or analysis request for the image &#124;<br>&gt; &#124; image\_source &#124; string &#124; ✓ &#124; Image source, supports HTTP/HTTPS URL or local file path &#124;<br>&gt;<br>&gt; **Supported formats**: JPEG, PNG, WebP<br>## Prerequisites<br>**1. Get API Key**<br>Visit [Billing &gt; M Plan](https://platform.minimax.io/user-center/payment/token-plan) to view your Subscription Key. The key needs an M Plan seat or purchased Credits access to use paid resources.<br>**2. Install uvx**<br>&gt; [tab] macOS / Linux<br>&gt;<br>&gt; ```bash theme={null}<br>&gt; curl -LsSf https://astral.sh/uv/install.sh &#124; sh<br>&gt; ```<br>&gt; [tab] Windows<br>&gt;<br>&gt; ```powershell theme={null}<br>&gt; powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 &#124; iex"<br>&gt; ```<br>&gt; [!NOTE]<br>&gt;<br>&gt; For other installation methods, refer to the [uv repository](https://github.com/astral-sh/uv).<br>**3. Verify Installation**<br>&gt; [tab] macOS / Linux<br>&gt;<br>&gt; ```bash theme={null}<br>&gt; which uvx<br>&gt; ```<br>&gt; [tab] Windows<br>&gt;<br>&gt; ```powershell theme={null}<br>&gt; (Get-Command uvx).source<br>&gt; ```<br>&gt; [!NOTE]<br>&gt;<br>&gt; If installed correctly, a path will be shown (e.g., `/usr/local/bin/uvx`). If you get `spawn uvx ENOENT` error, you need to configure the absolute path.<br>## Use in Claude Code<br>**1. Download Claude Code**<br>Download and install Claude Code from [Claude Code official website](https://www.claude.com/product/claude-code)<br>**2. Configure MCP**<br>&gt; [tab] Quick Install<br>&gt;<br>&gt; Run the following command in terminal, replace `api_key` with your API Key:<br>&gt;<br>&gt; ```bash theme={null}<br>&gt; claude mcp add -s user MiniMax --env MINIMAX_API_KEY=api_key --env MINIMAX_API_HOST=https://api.minimax.io -- uvx minimax-coding-plan-mcp<br>&gt; ```<br>&gt; [tab] Manual Configuration<br>&gt;<br>&gt; Edit the config file `~/.claude.json`, add the following MCP configuration:<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "mcpServers": {<br>&gt;     "MiniMax": {<br>&gt;       "command": "uvx",<br>&gt;       "args": ["minimax-coding-plan-mcp"],<br>&gt;       "env": {<br>&gt;         "MINIMAX_API_KEY": "MINIMAX_API_KEY",<br>&gt;         "MINIMAX_API_HOST": "https://api.minimax.io"<br>&gt;       }<br>&gt;     }<br>&gt;   }<br>&gt; }<br>&gt; ```<br>**3. Verify Configuration**<br>After entering Claude Code, type `/mcp`. If you can see `web_search` and `understand_image`, the configuration is successful.<br>![](https://filecdn.minimax.chat/public/59a2ac4d-fe8a-42d9-8898-e81aea641622.png)<br>&gt; [!NOTE]<br>&gt;<br>&gt; If you use MCP in an IDE (like TRAE), you also need to configure MCP in the corresponding IDE settings<br>## Use in Cursor<br>**1. Download Cursor**<br>Download and install Cursor from [Cursor official website](https://cursor.com/)<br>**2. Open MCP Configuration**<br>Open `Customize -&gt; MCPs`, then click `New` to create an MCP server.<br>![Create an MCP server in Cursor](https://file.cdn.minimax.io/public/agent-tool/mcp/cursor-entry/20260904-143832.png)<br>**3. Add Configuration**<br>Add the following configuration to `mcp.json` file: |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • # M Plan MCP Guide<br>• &gt; M Plan MCP provides two exclusive tools: **web_search** and **understand_image**, helping developers quickly access information and understand image content during coding.<br>• &gt; We recommend using [MiniMax CLI](https://platform.minimax.io/docs/m-plan/minimax-cli.md) instead of MCP for simpler setup and better experience.<br>• Visit [Billing &gt; M Plan](https://platform.minimax.io/user-center/payment/token-plan) to view your Subscription Key. The key needs an M Plan seat or purchased Credits access to use paid resources.<br>• &gt; claude mcp add -s user MiniMax --env MINIMAX_API_KEY=api_key --env MINIMAX_API_HOST=https://api.minimax.io -- uvx minimax-coding-plan-mcp<br>• &gt;       "args": ["minimax-coding-plan-mcp"],<br>• "args": ["minimax-coding-plan-mcp"],<br>• "$schema": "https://opencode.ai/config.json",<br>• "command": ["uvx", "minimax-coding-plan-mcp"], |
| scope | 新增 | 未记录 | capability |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-mcp-guide |
| source ref | 新增 | 未记录 | minimax-global-mcp-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | M Plan MCP Guide |

#### 来源 / minimax-global-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 列表（32 项）<details><summary>展开完整内容</summary><ul><li>image-01</li><li>image-01-live</li><li>M2-her</li><li>MiniMax-H3</li><li>MiniMax-H3-Max</li><li>MiniMax-Hailuo-02</li><li>MiniMax-Hailuo-2.3</li><li>MiniMax-Hailuo-2.3-Fast</li><li>MiniMax-M2</li><li>MiniMax-M2.1</li><li>MiniMax-M2.1-highspeed</li><li>MiniMax-M2.5</li><li>MiniMax-M2.5-highspeed</li><li>MiniMax-M2.7</li><li>MiniMax-M2.7-highspeed</li><li>MiniMax-M3</li><li>MiniMax-M3.1-Flash</li><li>Music-2.0</li><li>Music-2.5</li><li>Music-2.5+</li><li>music-2.6</li><li>music-2.6-free</li><li>music-3.0</li><li>music-3.0-free</li><li>music-cover</li><li>music-cover-free</li><li>speech-02-hd</li><li>speech-02-turbo</li><li>speech-2.6-hd</li><li>speech-2.6-turbo</li><li>speech-2.8-hd</li><li>speech-2.8-turbo</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-model-catalog |
| source ref | 新增 | 未记录 | minimax-global-model-catalog |
| structured records › 记录 M2-her › 模型 ID（model_id） | 新增 | 未记录 | M2-her |
| structured records › 记录 MiniMax-H3-Max › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 记录 MiniMax-H3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 记录 MiniMax-Hailuo-02 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 记录 MiniMax-Hailuo-2.3-Fast › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 记录 MiniMax-Hailuo-2.3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 记录 MiniMax-M2.1-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1-highspeed |
| structured records › 记录 MiniMax-M2.1 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.1 |
| structured records › 记录 MiniMax-M2.5-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5-highspeed |
| structured records › 记录 MiniMax-M2.5 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.5 |
| structured records › 记录 MiniMax-M2.7-highspeed › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7-highspeed |
| structured records › 记录 MiniMax-M2.7 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2.7 |
| structured records › 记录 MiniMax-M2 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M2 |
| structured records › 记录 MiniMax-M3.1-Flash › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3.1-Flash |
| structured records › 记录 MiniMax-M3 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 记录 Music-2.0 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.0 |
| structured records › 记录 Music-2.5+ › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5+ |
| structured records › 记录 Music-2.5 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5 |
| structured records › 记录 image-01-live › 模型 ID（model_id） | 新增 | 未记录 | image-01-live |
| structured records › 记录 image-01 › 模型 ID（model_id） | 新增 | 未记录 | image-01 |
| structured records › 记录 music-2.6-free › 模型 ID（model_id） | 新增 | 未记录 | music-2.6-free |
| structured records › 记录 music-2.6 › 模型 ID（model_id） | 新增 | 未记录 | music-2.6 |
| structured records › 记录 music-3.0-free › 模型 ID（model_id） | 新增 | 未记录 | music-3.0-free |
| structured records › 记录 music-3.0 › 模型 ID（model_id） | 新增 | 未记录 | music-3.0 |
| structured records › 记录 music-cover-free › 模型 ID（model_id） | 新增 | 未记录 | music-cover-free |
| structured records › 记录 music-cover › 模型 ID（model_id） | 新增 | 未记录 | music-cover |
| structured records › 记录 speech-02-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-02-hd |
| structured records › 记录 speech-02-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-02-turbo |
| structured records › 记录 speech-2.6-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-hd |
| structured records › 记录 speech-2.6-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-turbo |
| structured records › 记录 speech-2.8-hd › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| structured records › 记录 speech-2.8-turbo › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Model List |

#### 来源 / minimax-global-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | • music-2.0<br>• music-2.6<br>• music-3.0<br>• music-cover |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-model-overview |
| source ref | 新增 | 未记录 | minimax-global-model-overview |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Models |

#### 来源 / minimax-global-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（100 项）<details><summary>展开完整内容</summary><ul><li>[Video](#models/video)</li><li>[Audio](#models/speech)</li><li>[Image](#models/image)</li><li>[Audio](#packages/speech)</li><li>[Video](#packages/video)</li><li>&gt; [Video](#models/video)</li><li>&gt; [Audio](#models/speech)</li><li>&gt; [Image](#models/image)</li><li>&gt; [Audio](#packages/speech)</li><li>&gt; [Video](#packages/video)</li><li>Explore MiniMax model and tool pricing, choose an Audio or Video Package, or learn about billing.</li><li>## Video</li><li>Output Video\</li><li>Input Video\</li><li>Input Image\</li><li>per image\</li><li>Quality first, for high-quality video creation.</li><li>* **Image input**: The first **5 images** per task are free; additional images are billed per image. The unit price does not vary with image or output video resolution.</li><li>* **Video input**: Billed by input duration at the output resolution of the selected model.</li><li>* **Task types**: For the same model and resolution, all task types share the same unit price. Audio input is free.</li><li>&gt; Text-to-video t2v</li><li>&gt; Image-to-video i2v</li><li>&gt; Image, video, audio</li><li>Supports image, video, and audio references, for multi-asset video creation.</li><li>* **MiniMax-H3-Max**: The first **2 images** per task are free; additional images are billed per image. Input video is billed by duration at the output resolution. Audio input is free.</li><li>### Video Regeneration</li><li>Regenerate a 768P video produced by MiniMax-H3 into 2K.</li><li>&#124; **Model / API** &#124; **Spec** &#124; **Output Video** per second &#124; **Input Video** per second &#124; **Input Image** per image beyond free quota &#124;</li><li>* Input materials from the original task are billed again: the first **5 images** are free and additional images are billed per image; video is billed by the original input duration; audio is free.</li><li>* The regeneration fee is charged separately from the original task fee and includes the regenerated video output fee and input material fees.</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; \$0.19 per 768P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; \$0.32 per 768P, 10s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; \$0.33 per 1080P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; \$0.28 per 768P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; \$0.56 per 768P, 10s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; \$0.49 per 1080P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.28 per 768P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.56 per 768P, 10s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.49 per 1080P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.10 per 512P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.15 per 512P, 10s video &#124;</li><li>## Audio</li><li>**Automatic Speech Recognition (ASR)**</li><li>&#124; Speech Recognition &#124; Speech-to-Text &#124; Audio-to-text transcription with streaming, speaker diarization, and subtitle (srt/vtt) export. &#124; \$0.38 / hour &#124;</li><li>**Text-to-Speech (TTS)**</li><li>&#124; **T2A** (Sync) &#124; speech-2.8-hd &#124; Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio. &#124; \$100 / M characters &#124;</li><li>&#124; **T2A** (Sync) &#124; speech-2.8-turbo &#124; Same capabilities as hd, optimized for speed and cost. &#124; \$60 / M characters &#124;</li><li>&#124; **T2A Async** &#124; speech-2.8-hd &#124; Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously. &#124; \$100 / M characters &#124;</li><li>&#124; **T2A Async** &#124; speech-2.8-turbo &#124; Same capabilities as hd, optimized for speed and cost. &#124; \$60 / M characters &#124;</li><li>&#124; **Rapid Voice Cloning** &#124; LLM-powered voice cloning that produces a high-fidelity replica in seconds, without long high-quality reference audio. &#124; \$1.5 per voice &#124; Charged when the cloned voice is first used for synthesis, not at cloning time. Preview characters are billed at the selected preview model's rate. &#124;</li><li>&gt; &#124; **T2A** &#124; speech-2.6-turbo / speech-02-turbo &#124; \$60/M characters &#124;</li><li>&gt; &#124; **T2A** &#124; speech-2.6-hd / speech-02-hd &#124; \$100/M characters &#124;</li><li>## Image</li><li>&#124; image-01 &#124; \$0.0035 per image &#124;</li><li>[Purchase Now](https://platform.minimax.io/console/resource-packs/buy/audio)</li><li>&#124; **Audio points per month** &#124; 100,000 &#124; 300,000 &#124; 1,100,000 &#124; 3,300,000 &#124; 20,000,000 &#124; As many audio points as you need &#124;</li><li>&#124; **Functions** &#124; • Voice slots: 10 • RPM: 10 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models &#124; • Voice slots: 100 • RPM: 50 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models &#124; • Voice slots: 250 • RPM: 200 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models &#124; • Voice slots: 500 • RPM: 500 • Faster speed of generating speech • Supports T2A v2, T</li><li>[Purchase Now](https://platform.minimax.io/console/resource-packs/buy/video)</li><li>Video packages support Hailuo video models. MiniMax H3 is not supported yet</li><li>[pay-as-you-go API](#models/video), or contact sales for a custom plan.</li><li>&#124; **Total video points** &#124; 3,760 video points &#124; 9,920 video points &#124; 18,900 video points &#124; 26,780 video points &#124; As many video points as you need &#124;</li><li>&#124; **Functions** &#124; • Supports Video Generation API • RPM: 20 &#124; • Supports Video Generation API • RPM: 30 &#124; • Supports Video Generation API • RPM: 40 &#124; • Supports Video Generation API • RPM: 50 &#124; • Unlimited RPM/TPM • Priority access to model updates • Exclusive security and stability guarantees &#124;</li><li>1. The deduction times for generating videos differ depending on the model:</li><li>* For model \[MiniMax-Hailuo-2.3-Fast], generating a single 768p,6s video will deduct 0.7 video points</li><li>* For model \[MiniMax-Hailuo-2.3-Fast], generating a single 768p,10s video will deduct 1.1 video points</li><li>* For model \[MiniMax-Hailuo-2.3-Fast], generating a single 1080p,6s video will deduct 1.3 video points</li><li>* For model \[MiniMax-Hailuo-2.3] \[MiniMax-Hailuo-02], generating a single 768p,6s video will deduct 1 video point</li><li>* For model \[MiniMax-Hailuo-2.3] \[MiniMax-Hailuo-02], generating a single 768p,10s video will deduct 2 video points</li><li>* For model \[MiniMax-Hailuo-2.3] \[MiniMax-Hailuo-02], generating a single 1080p,6s video will deduct 2 video points</li><li>* For model \[MiniMax-Hailuo-02], generating a single 512p,6s video will deduct 0.3 video points</li><li>* For model \[MiniMax-Hailuo-02], generating a single 512p,10s video will deduct 0.5 video points</li><li>2. Video generation failures or videos that trigger security review will not result in a deduction.</li><li>MiniMax offers pay-as-you-go billing, Audio and Video Packages. Choose a billing option based on the models you use, how much you expect to use them, and for how long.</li><li>&#124; Use cases &#124; Use any MiniMax model or tool and pay for what you use, with the flexibility to support a wide range of business needs and API workloads. &#124; For speech or video workloads where you expect to make good use of the included points. &#124;</li><li>&#124; How you pay &#124; Add funds to your account and pay for what you use &#124; Purchase an Audio or Video Package &#124;</li><li>&#124; Coverage &#124; All MiniMax models and tools &#124; All speech models; Hailuo video models &#124;</li><li>&#124; Billing units &#124; Varies by model, configuration, and type of usage &#124; Audio points per month; video points &#124;</li><li>&#124; Get started &#124; [Recharge Now](https://platform.minimax.io/user-center/payment/balance) &#124; [View Audio](#packages/speech) · [View Video](#packages/video) &#124;</li><li>Check the supported models, included points, and how long the package lasts. Audio packages support all speech models. Video Packages support Hailuo Video models; MiniMax H3 is not yet supported.</li><li>[View Audio](#packages/speech) · [View Video](#packages/video) · [View Usage Rules](#guides/packages)</li><li>* **Billing units:** Depending on the service, charges are based on tokens, characters, duration, images, voices, or requests. See the relevant pricing table for the exact unit.</li><li>* **Rates:** Rates vary by model, API, and configuration. For example, LLM input length and service tier, or video output resolution, can affect pricing.</li><li>See Model Pricing and Tool Pricing for individual rates. Audio and Video Packages are also available for supported models. To compare these options, see [Payment Methods](#guides/compare).</li><li>Audio and Video Packages include points for use with supported models and APIs. Before purchasing, check which models are supported, how many points are included, and how long the package lasts.</li><li>&#124; Feature &#124; Audio &#124; Video &#124;</li><li>&#124; Supported models &#124; All speech models &#124; Hailuo video models; MiniMax H3 is not supported yet &#124;</li><li>&#124; Supported APIs &#124; T2A v2 and T2A large v2 &#124; Video Generation API &#124;</li><li>&#124; Included points &#124; Audio points per month &#124; Video points &#124;</li><li>&#124; Plan details &#124; [Audio](#packages/speech) &#124; [Video](#packages/video) &#124;</li><li>* **Audio points:** Starter, Standard, Pro, Scale, and Business each include a monthly allowance of audio points. The allowance varies by plan. See the [Audio package pricing table](#packages/speech) for included points, voice slots, and rate limits.</li><li>* **Video points:** Points used depend on the model, resolution, and video duration. One point does not equal one video. See the [video point deduction rules](#packages/video/package-rules).</li><li>* **Failed video tasks:** No points are deducted when video generation fails or a video triggers a security review.</li><li>Unused video points expire with the package and do not roll over. Your video point balance resets to zero when the package expires. For Audio packages, see the pricing table for available terms, monthly audio points, and plan features. Rate limits and other included features are listed in the relevant pricing tables.</li><li>Find answers to common questions about pay-as-you-go billing, Audio and Video Packages. See the relevant pricing tables for exact prices and included features.</li><li>&gt; [accordion] Does video output pricing include charges for input media?</li><li>&gt; H3 video output and input media are billed separately. Images beyond the free allowance incur an additional charge. Input video is billed based on its duration and the output resolution. If you regenerate a video, the input media from the original task is billed again. See the video pricing tables for the applicable rates.</li><li>&gt; You can use Audio Packages with all speech models via the T2A v2 and T2A large v2 APIs. Video Packages support Hailuo video models, but do not currently support MiniMax H3. Before you buy, check the supported models, included points, and plan duration. For details, see [Package Usage Rules](#guides/packages).</li><li>&gt; [accordion] What happens to unused video points when my package expires?</li><li>&gt; Any unused video points expire when your package ends, and your video point balance resets to zero. Each of the four standard video packages is valid for one month.</li><li>&gt; To generate music, visit [**MiniMax Audio**](https://www.minimax.io/audio) or try the open-source **MiniMax Music 3** model on [**Hugging Face**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) or [**ModelScope**](https://modelscope.cn/models/MiniMax/MiniMax-Music3).</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Pricing Overview<br>[Pricing Overview](#overview)<br>Model Pricing<br>[LLM](#models/text)<br>[Video](#models/video)<br>[Audio](#models/speech)<br>[Image](#models/image)<br>Tool Pricing<br>[MCP](#tools/mcp)<br>[Server Tools](#tools/tools)<br>Packages<br>[Audio](#packages/speech)<br>[Video](#packages/video)<br>Billing Guides<br>[Payment Methods](#guides/compare)<br>[Pay-as-you-go Billing](#guides/billing)<br>[Package Usage Rules](#guides/packages)<br>[FAQ](#guides/faq)<br>&gt; [accordion] Pricing navigation<br>&gt;<br>&gt; [Pricing Overview](#overview)<br>&gt;<br>&gt; Model Pricing<br>&gt;<br>&gt; [LLM](#models/text)<br>&gt; [Video](#models/video)<br>&gt; [Audio](#models/speech)<br>&gt; [Image](#models/image)<br>&gt;<br>&gt; Tool Pricing<br>&gt;<br>&gt; [MCP](#tools/mcp)<br>&gt; [Server Tools](#tools/tools)<br>&gt;<br>&gt; Packages<br>&gt;<br>&gt; [Audio](#packages/speech)<br>&gt; [Video](#packages/video)<br>&gt;<br>&gt; Billing Guides<br>&gt;<br>&gt; [Payment Methods](#guides/compare)<br>&gt; [Pay-as-you-go Billing](#guides/billing)<br>&gt; [Package Usage Rules](#guides/packages)<br>&gt; [FAQ](#guides/faq)<br>Explore MiniMax model and tool pricing, choose an Audio or Video Package, or learn about billing.<br>## LLM<br>[Recharge Now](https://platform.minimax.io/user-center/payment/balance)<br>&#124; **Model** &#124; **Input** \$ / M tokens &#124; **Output** \$ / M tokens &#124; **Prompt caching Read** \$ / M tokens &#124;<br>&#124; :- &#124; :-: &#124; :-: &#124; :-: &#124;<br>&#124; **MiniMax-M3.1-Flash** &#124; \$0.15 &#124; \$0.60 &#124; \$0.015 &#124;<br>&gt; [tab] Standard<br>&gt;<br>&gt; &#124; **Model** &#124; **Input** \$ / M tokens &#124; **Output** \$ / M tokens &#124; **Prompt caching Read** \$ / M tokens &#124;<br>&gt; &#124; :- &#124; :-: &#124; :-: &#124; :-: &#124;<br>&gt; &#124; **MiniMax-M3** ≤ 512k input tokens Permanent 50% off &#124; ~~\$0.60~~ \$0.30 &#124; ~~\$2.40~~ \$1.20 &#124; ~~\$0.12~~ \$0.06 &#124;<br>&gt; &#124; **MiniMax-M3** &gt; 512k input tokens\* Permanent 50% off &#124; ~~\$1.20~~ \$0.60 &#124; ~~\$4.80~~ \$2.40 &#124; ~~\$0.24~~ \$0.12 &#124;<br>&gt; [tab] Priority\*<br>&gt;<br>&gt; &#124; **Model** &#124; **Input** \$ / M tokens &#124; **Output** \$ / M tokens &#124; **Prompt caching Read** \$ / M tokens &#124;<br>&gt; &#124; :- &#124; :-: &#124; :-: &#124; :-: &#124;<br>&gt; &#124; **MiniMax-M3** ≤ 512k input tokens Permanent 50% off &#124; ~~\$0.90~~ \$0.45 &#124; ~~\$3.60~~ \$1.80 &#124; ~~\$0.18~~ \$0.09 &#124;<br>&gt; &#124; **MiniMax-M3** &gt; 512k input tokens Permanent 50% off &#124; ~~\$1.80~~ \$0.90 &#124; ~~\$7.20~~ \$3.60 &#124; ~~\$0.36~~ \$0.18 &#124;<br>&gt;<br>&gt; \* Priority provides priority admission for faster response times and improved request reliability. Set `service_tier` to `priority` to enable it. Pricing is 1.5x standard.<br>&gt; [!NOTE]<br>&gt;<br>&gt; Note:<br>&gt;<br>&gt; 1. The billing item is token count; the token-to-character ratio varies slightly depending on the usage scenario, subject to actual consumption<br>&gt; 2. Token to English word ratio (estimate): approximately 750 English words consume 1000 tokens<br>## Video<br>[Recharge Now](https://platform.minimax.io/user-center/payment/balance)<br>### H3 Series Flagship Models<br>Model<br>Output Resolution<br>Output Video\<br>per second<br>Input Video\<br>per second<br>Input Image\<br>per image\<br>beyond free quota<br>**MiniMax-H3**\<br>Quality first, for high-quality video creation.<br>2K<br>\$0.13<br>\$0.13<br>\$0.04<br>768P<br>\$0.08<br>\$0.08<br>\$0.04<br>**MiniMax-H3-Highspeed**\<br>Balances quality and speed, for everyday content creation.<br>768P<br>\$0.06 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（63 项）<details><summary>展开完整内容</summary><ul><li>[Image](#models/image)</li><li>&gt; [Image](#models/image)</li><li>&#124; **Model** &#124; **Input** \$ / M tokens &#124; **Output** \$ / M tokens &#124; **Prompt caching Read** \$ / M tokens &#124;</li><li>&#124; **MiniMax-M3.1-Flash** &#124; \$0.15 &#124; \$0.60 &#124; \$0.015 &#124;</li><li>&gt; &#124; **Model** &#124; **Input** \$ / M tokens &#124; **Output** \$ / M tokens &#124; **Prompt caching Read** \$ / M tokens &#124;</li><li>&gt; &#124; **MiniMax-M3** ≤ 512k input tokens Permanent 50% off &#124; ~~\$0.60~~ \$0.30 &#124; ~~\$2.40~~ \$1.20 &#124; ~~\$0.12~~ \$0.06 &#124;</li><li>&gt; &#124; **MiniMax-M3** &gt; 512k input tokens\* Permanent 50% off &#124; ~~\$1.20~~ \$0.60 &#124; ~~\$4.80~~ \$2.40 &#124; ~~\$0.24~~ \$0.12 &#124;</li><li>&gt; &#124; **MiniMax-M3** ≤ 512k input tokens Permanent 50% off &#124; ~~\$0.90~~ \$0.45 &#124; ~~\$3.60~~ \$1.80 &#124; ~~\$0.18~~ \$0.09 &#124;</li><li>&gt; &#124; **MiniMax-M3** &gt; 512k input tokens Permanent 50% off &#124; ~~\$1.80~~ \$0.90 &#124; ~~\$7.20~~ \$3.60 &#124; ~~\$0.36~~ \$0.18 &#124;</li><li>\$0.13</li><li>\$0.04</li><li>\$0.08</li><li>\$0.06</li><li>\$0.03</li><li>\$0.02</li><li>\$0.025</li><li>\$0.143</li><li>\$0.074</li><li>\$0.05</li><li>\$0.0553</li><li>&#124; MiniMax-H3-Regeneration &#124; 768P → 2K &#124; \$0.05 &#124; \$0.05 &#124; \$0.025 &#124;</li><li>&#124; MiniMax-H3-Context-IR &#124; \$0.90 &#124; \$3.60 &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; \$0.19 per 768P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; \$0.32 per 768P, 10s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3-Fast &#124; \$0.33 per 1080P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; \$0.28 per 768P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; \$0.56 per 768P, 10s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-2.3 &#124; \$0.49 per 1080P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.28 per 768P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.56 per 768P, 10s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.49 per 1080P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.10 per 512P, 6s video &#124;</li><li>&gt; &#124; MiniMax-Hailuo-02 &#124; \$0.15 per 512P, 10s video &#124;</li><li>&#124; Speech Recognition &#124; Speech-to-Text &#124; Audio-to-text transcription with streaming, speaker diarization, and subtitle (srt/vtt) export. &#124; \$0.38 / hour &#124;</li><li>&#124; **T2A** (Sync) &#124; speech-2.8-hd &#124; Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio. &#124; \$100 / M characters &#124;</li><li>&#124; **T2A** (Sync) &#124; speech-2.8-turbo &#124; Same capabilities as hd, optimized for speed and cost. &#124; \$60 / M characters &#124;</li><li>&#124; **T2A Async** &#124; speech-2.8-hd &#124; Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously. &#124; \$100 / M characters &#124;</li><li>&#124; **T2A Async** &#124; speech-2.8-turbo &#124; Same capabilities as hd, optimized for speed and cost. &#124; \$60 / M characters &#124;</li><li>&#124; **Voice Design** &#124; Generate a voice (voice\_id) from a natural-language description; usable in both sync and async T2A endpoints. &#124; \$3 per voice &#124; Charged when the designed voice is first used for synthesis, not at generation time. In-API preview synthesis is billed at \$60 / M characters. &#124;</li><li>&#124; **Rapid Voice Cloning** &#124; LLM-powered voice cloning that produces a high-fidelity replica in seconds, without long high-quality reference audio. &#124; \$1.5 per voice &#124; Charged when the cloned voice is first used for synthesis, not at cloning time. Preview characters are billed at the selected preview model's rate. &#124;</li><li>&gt; &#124; **T2A** &#124; speech-2.6-turbo / speech-02-turbo &#124; \$60/M characters &#124;</li><li>&gt; &#124; **T2A** &#124; speech-2.6-hd / speech-02-hd &#124; \$100/M characters &#124;</li><li>&#124; image-01 &#124; \$0.0035 per image &#124;</li><li>&#124; **API-vlm** &#124; \$0.01 / request &#124;</li><li>When API-vlm is called through M Plan, usage deducts from the included M Plan quota according to its pay-as-you-go price. If the included quota is exhausted and purchased Credits are available, additional usage can be automatically covered by purchased Credits.</li><li>🔔 **Pricing Update Notice** — Effective July 22, 2026, the API-vlm price will be adjusted to \$0.01 per call. Accordingly, the token quota deducted per API-vlm call under M Plan subscriptions will decrease, allowing the same plan to support more calls. API endpoints and model capabilities remain unchanged — no code changes required.</li><li>&#124; **web\_search** &#124; Web search; the model runs the search on the server and answers based on the results. See [Server Tools](https://platform.minimax.io/docs/guides/server-tools.md). &#124; \$0.01 / request &#124;</li><li>&#124; **Monthly Subscription** &#124; \$5 &#124; \$30 &#124; \$99 &#124; \$249 &#124; \$999 &#124; / &#124;</li><li>&#124; **3-month Subscription** (10% off) &#124; \$13.5 &#124; \$81 &#124; \$267 &#124; \$672 &#124; \$2,697 &#124; / &#124;</li><li>&#124; **Yearly Subscription** (20% off) &#124; \$48 &#124; \$288 &#124; \$950 &#124; \$2,390 &#124; \$9,590 &#124; / &#124;</li><li>[pay-as-you-go API](#models/video), or contact sales for a custom plan.</li><li>&#124; **Discounted Price** &#124; \$1,000 &#124; \$2,500 &#124; \$4,500 &#124; \$6,000 &#124; - &#124;</li><li>With pay-as-you-go billing, you use standard Open Platform API keys and pay from your account balance based on usage. All prices are in USD.</li><li>&#124; Plan details &#124; [Audio](#packages/speech) &#124; [Video](#packages/video) &#124;</li><li>* **Audio points:** Starter, Standard, Pro, Scale, and Business each include a monthly allowance of audio points. The allowance varies by plan. See the [Audio package pricing table](#packages/speech) for included points, voice slots, and rate limits.</li><li>Unused video points expire with the package and do not roll over. Your video point balance resets to zero when the package expires. For Audio packages, see the pricing table for available terms, monthly audio points, and plan features. Rate limits and other included features are listed in the relevant pricing tables.</li><li>&gt; You can use Audio Packages with all speech models via the T2A v2 and T2A large v2 APIs. Video Packages support Hailuo video models, but do not currently support MiniMax H3. Before you buy, check the supported models, included points, and plan duration. For details, see [Package Usage Rules](#guides/packages).</li><li>&gt; &#124; Music-3.0 &#124; \$0.15 per track (up to 5 minutes) &#124;</li><li>&gt; &#124; Music-2.6 &#124; \$0.15 per track (up to 5 minutes) &#124;</li><li>&gt; &#124; Lyrics Generation &#124; \$0.01 per song &#124;</li><li>&gt; &#124; Music-2.5+ &#124; \$0.15 per track (up to 5 minutes) &#124;</li><li>&gt; &#124; Music-2.5 &#124; \$0.15 per track (up to 5 minutes) &#124;</li><li>&gt; &#124; Music-2.0 &#124; \$0.03 per track (up to 5 minutes) &#124;</li></ul></details> |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-pricing |
| source ref | 新增 | 未记录 | minimax-global-pricing |
| structured records › 第 1 项 › 模型 ID（model_id） | 新增 | 未记录 | image-01 |
| structured records › 第 1 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 1 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 1 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 1 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.0035 |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_image |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.0035 per image |
| structured records › 第 1 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 1 项 › pricing row › section | 新增 | 未记录 | Image |
| structured records › 第 1 项 › pricing row › values | 新增 | 未记录 | • image-01<br>• $0.0035 per image |
| structured records › 第 2 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 2 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 2 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 2 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 2 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.13 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 2 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.13 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 2 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 2 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.13 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 2 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 2 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 2 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.04 |
| structured records › 第 2 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 2 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 2 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 2K<br>• $0.13<br>• $0.13<br>• $0.04 |
| structured records › 第 3 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 3 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 3 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 3 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 3 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.08 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.08 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.08 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.08 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.04 |
| structured records › 第 3 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 3 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 3 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 768P<br>• $0.08<br>• $0.08<br>• $0.04 |
| structured records › 第 4 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 4 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 4 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 4 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| structured records › 第 4 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 4 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 4 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| structured records › 第 5 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3 |
| structured records › 第 5 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 5 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 5 项 › pricing row › headers | 新增 | 未记录 | • Feature<br>• Audio<br>• Video |
| structured records › 第 5 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 5 项 › pricing row › section | 新增 | 未记录 | Coverage |
| structured records › 第 5 项 › pricing row › values | 新增 | 未记录 | • Supported models<br>• All speech models<br>• Hailuo video models; MiniMax H3 is not supported yet |
| structured records › 第 6 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Context-IR |
| structured records › 第 6 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 6 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 6 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 6 项 › pricing row › headers | 新增 | 未记录 | • Model / API<br>• Input Price per M tokens<br>• Output Price per M tokens |
| structured records › 第 6 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.90 |
| structured records › 第 6 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 6 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 6 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input Price per M tokens |
| structured records › 第 6 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.90 |
| structured records › 第 6 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 6 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.60 |
| structured records › 第 6 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 6 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 6 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output Price per M tokens |
| structured records › 第 6 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $3.60 |
| structured records › 第 6 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 6 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 6 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Context-IR<br>• $0.90<br>• $3.60 |
| structured records › 第 7 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| structured records › 第 7 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 7 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 7 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 7 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.06 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.06 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 7 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.03 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 7 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 7 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.03 |
| structured records › 第 7 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 7 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 7 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 768P<br>• $0.06<br>• $0.06<br>• $0.03 |
| structured records › 第 8 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| structured records › 第 8 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 8 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 8 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 8 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.04 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.04 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.03 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.03 |
| structured records › 第 8 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 8 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 8 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 480P<br>• $0.04<br>• $0.04<br>• $0.03 |
| structured records › 第 9 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Highspeed |
| structured records › 第 9 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 9 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 9 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| structured records › 第 9 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 9 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 9 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Highspeed<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| structured records › 第 10 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| structured records › 第 10 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 10 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 10 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 10 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 10 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 10 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 10 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.04 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 10 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 10 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 10 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.04 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 10 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.02 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 10 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 10 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.02 |
| structured records › 第 10 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 10 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 10 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 768P<br>• $0.04<br>• $0.04<br>• $0.02 |
| structured records › 第 11 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| structured records › 第 11 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 11 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 11 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 11 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.025 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.025 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.02 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.02 |
| structured records › 第 11 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 11 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 11 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 480P<br>• $0.025<br>• $0.025<br>• $0.02 |
| structured records › 第 12 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Lite |
| structured records › 第 12 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 12 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 12 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| structured records › 第 12 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 12 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 12 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Lite<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| structured records › 第 13 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 第 13 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 13 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 13 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 13 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 13 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.08 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 13 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 13 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.08 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 13 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.143 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 13 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 13 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.143 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 13 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.074 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 13 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 13 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.074 |
| structured records › 第 13 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 13 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 13 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 768P<br>• $0.08<br>• $0.143<br>• $0.074 |
| structured records › 第 14 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 第 14 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 14 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 14 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 14 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.05 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.05 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.0553 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.0553 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.074 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image\<br>      beyond free quota |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.074 |
| structured records › 第 14 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 14 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 14 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 480P<br>• $0.05<br>• $0.0553<br>• $0.074 |
| structured records › 第 15 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max |
| structured records › 第 15 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 15 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 15 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| structured records › 第 15 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 15 项 › pricing row › section | 新增 | 未记录 | 空字符串 |
| structured records › 第 15 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Max<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| structured records › 第 16 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Regeneration |
| structured records › 第 16 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 16 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 16 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 16 项 › pricing row › headers | 新增 | 未记录 | • Model / API<br>• Spec<br>• Output Video per second<br>• Input Video per second<br>• Input Image per image beyond free quota |
| structured records › 第 16 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.05 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| structured records › 第 16 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video per second |
| structured records › 第 16 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.05 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 16 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.05 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| structured records › 第 16 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video per second |
| structured records › 第 16 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.05 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| structured records › 第 16 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| structured records › 第 16 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image per image beyond free quota |
| structured records › 第 16 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.025 |
| structured records › 第 16 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| structured records › 第 16 项 › pricing row › section | 新增 | 未记录 | Video Regeneration |
| structured records › 第 16 项 › pricing row › values | 新增 | 未记录 | • MiniMax-H3-Regeneration<br>• 768P → 2K<br>• $0.05<br>• $0.05<br>• $0.025 |
| structured records › 第 17 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 17 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 17 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 17 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 17 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 17 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 17 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 17 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.28 per 768P, 6s video |
| structured records › 第 18 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 18 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 18 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 18 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 18 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 18 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 18 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 18 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.56 per 768P, 10s video |
| structured records › 第 19 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 19 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 19 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 19 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 19 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 19 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 19 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 19 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.49 per 1080P, 6s video |
| structured records › 第 20 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 20 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 20 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 20 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 20 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 20 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 20 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 20 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.10 per 512P, 6s video |
| structured records › 第 21 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-02 |
| structured records › 第 21 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 21 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 21 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 21 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 21 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 21 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 21 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-02<br>• $0.15 per 512P, 10s video |
| structured records › 第 22 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 第 22 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 22 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 22 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 22 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 22 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 22 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 22 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• $0.28 per 768P, 6s video |
| structured records › 第 23 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 第 23 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 23 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 23 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 23 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 23 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 23 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 23 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• $0.56 per 768P, 10s video |
| structured records › 第 24 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3 |
| structured records › 第 24 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 24 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 24 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 24 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 24 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 24 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 24 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3<br>• $0.49 per 1080P, 6s video |
| structured records › 第 25 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 第 25 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 25 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 25 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 25 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 25 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 25 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 25 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• $0.19 per 768P, 6s video |
| structured records › 第 26 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 第 26 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 26 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 26 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 26 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 26 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 26 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 26 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• $0.32 per 768P, 10s video |
| structured records › 第 27 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-Hailuo-2.3-Fast |
| structured records › 第 27 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 27 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 27 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 27 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 27 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 27 项 › pricing row › section | 新增 | 未记录 | Context-IR |
| structured records › 第 27 项 › pricing row › values | 新增 | 未记录 | • MiniMax-Hailuo-2.3-Fast<br>• $0.33 per 1080P, 6s video |
| structured records › 第 28 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 28 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 28 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 28 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 28 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| structured records › 第 28 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.30 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 0.60 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 28 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| structured records › 第 28 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$0.60~~ $0.30 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 28 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.20 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 2.40 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 28 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| structured records › 第 28 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$2.40~~ $1.20 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 28 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.12 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 28 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| structured records › 第 28 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.12~~ $0.06 |
| structured records › 第 28 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 28 项 › pricing row › section | 新增 | 未记录 | LLM |
| structured records › 第 28 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.60~~ $0.30<br>• ~~$2.40~~ $1.20<br>• ~~$0.12~~ $0.06 |
| structured records › 第 29 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 29 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 29 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 29 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 29 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.60 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 1.20 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$1.20~~ $0.60 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 2.40 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 4.80 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$4.80~~ $2.40 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.12 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.24 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.24~~ $0.12 |
| structured records › 第 29 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 29 项 › pricing row › section | 新增 | 未记录 | LLM |
| structured records › 第 29 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k input tokens\* Permanent 50% off<br>• ~~$1.20~~ $0.60<br>• ~~$4.80~~ $2.40<br>• ~~$0.24~~ $0.12 |
| structured records › 第 30 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 30 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 30 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 30 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 30 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.45 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 0.90 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$0.90~~ $0.45 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 1.80 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 3.60 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$3.60~~ $1.80 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.09 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.18 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.18~~ $0.09 |
| structured records › 第 30 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 30 项 › pricing row › section | 新增 | 未记录 | LLM |
| structured records › 第 30 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.90~~ $0.45<br>• ~~$3.60~~ $1.80<br>• ~~$0.18~~ $0.09 |
| structured records › 第 31 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3 |
| structured records › 第 31 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 31 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 31 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 31 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.90 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › list amount decimal | 新增 | 未记录 | 1.80 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | ~~$1.80~~ $0.90 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 3.60 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › list amount decimal | 新增 | 未记录 | 7.20 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | ~~$7.20~~ $3.60 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.18 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › list amount decimal | 新增 | 未记录 | 0.36 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | ~~$0.36~~ $0.18 |
| structured records › 第 31 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 31 项 › pricing row › section | 新增 | 未记录 | LLM |
| structured records › 第 31 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3 &gt; 512k input tokens Permanent 50% off<br>• ~~$1.80~~ $0.90<br>• ~~$7.20~~ $3.60<br>• ~~$0.36~~ $0.18 |
| structured records › 第 32 项 › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-M3.1-Flash |
| structured records › 第 32 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 32 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 32 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 32 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.15 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Input $ / M tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.15 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.60 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Output $ / M tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.60 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.015 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Prompt caching Read $ / M tokens |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.015 |
| structured records › 第 32 项 › pricing row › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| structured records › 第 32 项 › pricing row › section | 新增 | 未记录 | LLM |
| structured records › 第 32 项 › pricing row › values | 新增 | 未记录 | • MiniMax-M3.1-Flash<br>• $0.15<br>• $0.60<br>• $0.015 |
| structured records › 第 33 项 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.0 |
| structured records › 第 33 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 33 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 33 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 33 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 33 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 33 项 › pricing row › section | 新增 | 未记录 | Billing and Usage |
| structured records › 第 33 项 › pricing row › values | 新增 | 未记录 | • Music-2.0<br>• $0.03 per track (up to 5 minutes) |
| structured records › 第 34 项 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5 |
| structured records › 第 34 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 34 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 34 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 34 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 34 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 34 项 › pricing row › section | 新增 | 未记录 | Billing and Usage |
| structured records › 第 34 项 › pricing row › values | 新增 | 未记录 | • Music-2.5<br>• $0.15 per track (up to 5 minutes) |
| structured records › 第 35 项 › 模型 ID（model_id） | 新增 | 未记录 | Music-2.5+ |
| structured records › 第 35 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 35 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 35 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 35 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 35 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 35 项 › pricing row › section | 新增 | 未记录 | Billing and Usage |
| structured records › 第 35 项 › pricing row › values | 新增 | 未记录 | • Music-2.5+<br>• $0.15 per track (up to 5 minutes) |
| structured records › 第 36 项 › 模型 ID（model_id） | 新增 | 未记录 | music-2.6 |
| structured records › 第 36 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 36 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 36 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 36 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 36 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 36 项 › pricing row › section | 新增 | 未记录 | Billing and Usage |
| structured records › 第 36 项 › pricing row › values | 新增 | 未记录 | • Music-2.6<br>• $0.15 per track (up to 5 minutes) |
| structured records › 第 37 项 › 模型 ID（model_id） | 新增 | 未记录 | music-3.0 |
| structured records › 第 37 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 37 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 37 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 37 项 › pricing row › headers | 新增 | 未记录 | • Model<br>• Price |
| structured records › 第 37 项 › pricing row › normalized rates | 新增 | 未记录 | 空列表 |
| structured records › 第 37 项 › pricing row › section | 新增 | 未记录 | Billing and Usage |
| structured records › 第 37 项 › pricing row › values | 新增 | 未记录 | • Music-3.0<br>• $0.15 per track (up to 5 minutes) |
| structured records › 第 38 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-02-hd |
| structured records › 第 38 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 38 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 38 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 38 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $100/M characters |
| structured records › 第 38 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 38 项 › pricing row › section | 新增 | 未记录 | Voice Management |
| structured records › 第 38 项 › pricing row › values | 新增 | 未记录 | • T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters |
| structured records › 第 39 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-02-turbo |
| structured records › 第 39 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 39 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 39 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 39 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $60/M characters |
| structured records › 第 39 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 39 项 › pricing row › section | 新增 | 未记录 | Voice Management |
| structured records › 第 39 项 › pricing row › values | 新增 | 未记录 | • T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters |
| structured records › 第 40 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-hd |
| structured records › 第 40 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 40 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 40 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 40 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $100/M characters |
| structured records › 第 40 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 40 项 › pricing row › section | 新增 | 未记录 | Voice Management |
| structured records › 第 40 项 › pricing row › values | 新增 | 未记录 | • T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters |
| structured records › 第 41 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.6-turbo |
| structured records › 第 41 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 41 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 41 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 41 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Price |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $60/M characters |
| structured records › 第 41 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 41 项 › pricing row › section | 新增 | 未记录 | Voice Management |
| structured records › 第 41 项 › pricing row › values | 新增 | 未记录 | • T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters |
| structured records › 第 42 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| structured records › 第 42 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 42 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 42 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 42 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $100 / M characters |
| structured records › 第 42 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 42 项 › pricing row › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| structured records › 第 42 项 › pricing row › values | 新增 | 未记录 | • T2A (Sync)<br>• speech-2.8-hd<br>• Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio.<br>• $100 / M characters |
| structured records › 第 43 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-hd |
| structured records › 第 43 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 43 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 43 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 43 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 100 |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $100 / M characters |
| structured records › 第 43 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 43 项 › pricing row › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| structured records › 第 43 项 › pricing row › values | 新增 | 未记录 | • T2A Async<br>• speech-2.8-hd<br>• Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously.<br>• $100 / M characters |
| structured records › 第 44 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| structured records › 第 44 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 44 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 44 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 44 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $60 / M characters |
| structured records › 第 44 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 44 项 › pricing row › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| structured records › 第 44 项 › pricing row › values | 新增 | 未记录 | • T2A (Sync)<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters |
| structured records › 第 45 项 › 模型 ID（model_id） | 新增 | 未记录 | speech-2.8-turbo |
| structured records › 第 45 项 › pricing row › currency code | 新增 | 未记录 | USD |
| structured records › 第 45 项 › pricing row › currency evidence | 新增 | 未记录 | All prices are in USD. |
| structured records › 第 45 项 › pricing row › currency symbol | 新增 | 未记录 | $ |
| structured records › 第 45 项 › pricing row › headers | 新增 | 未记录 | • API<br>• Model<br>• Description<br>• Price |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 60 |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_character |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Price |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $60 / M characters |
| structured records › 第 45 项 › pricing row › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_characters |
| structured records › 第 45 项 › pricing row › section | 新增 | 未记录 | Text-to-Speech (TTS) |
| structured records › 第 45 项 › pricing row › values | 新增 | 未记录 | • T2A Async<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters |
| tables › 第 1 项 › headers | 新增 | 未记录 | • **Model**<br>• **Input** \$ / M tokens<br>• **Output** \$ / M tokens<br>• **Prompt caching Read** \$ / M tokens |
| tables › 第 1 项 › heading | 新增 | 未记录 | LLM |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • **MiniMax-M3.1-Flash**<br>• \$0.15<br>• \$0.60<br>• \$0.015 |
| tables › 第 2 项 › headers | 新增 | 未记录 | • **Model / API**<br>• **Spec**<br>• **Output Video** per second<br>• **Input Video** per second<br>• **Input Image** per image beyond free quota |
| tables › 第 2 项 › heading | 新增 | 未记录 | Video Regeneration |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • MiniMax-H3-Regeneration<br>• 768P → 2K<br>• \$0.05<br>• \$0.05<br>• \$0.025 |
| tables › 第 3 项 › headers | 新增 | 未记录 | • **Model / API**<br>• **Input Price** per M tokens<br>• **Output Price** per M tokens |
| tables › 第 3 项 › heading | 新增 | 未记录 | Context-IR |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • MiniMax-H3-Context-IR<br>• \$0.90<br>• \$3.60 |
| tables › 第 4 项 › headers | 新增 | 未记录 | • **API**<br>• **Endpoint**<br>• **Description**<br>• **Price** |
| tables › 第 4 项 › heading | 新增 | 未记录 | Audio |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • Speech Recognition<br>• Speech-to-Text<br>• Audio-to-text transcription with streaming, speaker diarization, and subtitle (srt/vtt) export.<br>• \$0.38 / hour |
| tables › 第 5 项 › headers | 新增 | 未记录 | • **API**<br>• **Model**<br>• **Description**<br>• **Price** |
| tables › 第 5 项 › heading | 新增 | 未记录 | Audio |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • **T2A** (Sync)<br>• speech-2.8-hd<br>• Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio.<br>• \$100 / M characters |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • **T2A** (Sync)<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• \$60 / M characters |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • **T2A Async**<br>• speech-2.8-hd<br>• Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously.<br>• \$100 / M characters |
| tables › 第 5 项 › rows › 第 4 项 | 新增 | 未记录 | • **T2A Async**<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• \$60 / M characters |
| tables › 第 6 项 › headers | 新增 | 未记录 | • **API**<br>• **Description**<br>• **Price**<br>• **Notes** |
| tables › 第 6 项 › heading | 新增 | 未记录 | Audio |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • **Voice Design**<br>• Generate a voice (voice\_id) from a natural-language description; usable in both sync and async T2A endpoints.<br>• \$3 per voice<br>• Charged when the designed voice is first used for synthesis, not at generation time. In-API preview synthesis is billed at \$60 / M characters. |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • **Rapid Voice Cloning**<br>• LLM-powered voice cloning that produces a high-fidelity replica in seconds, without long high-quality reference audio.<br>• \$1.5 per voice<br>• Charged when the cloned voice is first used for synthesis, not at cloning time. Preview characters are billed at the selected preview model's rate. |
| tables › 第 7 项 › headers | 新增 | 未记录 | • Model<br>• Price |
| tables › 第 7 项 › heading | 新增 | 未记录 | Image |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • image-01<br>• \$0.0035 per image |
| tables › 第 8 项 › headers | 新增 | 未记录 | • Model<br>• Input Price |
| tables › 第 8 项 › heading | 新增 | 未记录 | MCP |
| tables › 第 8 项 › rows › 第 1 项 | 新增 | 未记录 | • **API-vlm**<br>• \$0.01 / request |
| tables › 第 9 项 › headers | 新增 | 未记录 | • Server Tool<br>• Description<br>• Price |
| tables › 第 9 项 › heading | 新增 | 未记录 | Server Tools&amp;#x20; |
| tables › 第 9 项 › rows › 第 1 项 | 新增 | 未记录 | • **web\_search**<br>• Web search; the model runs the search on the server and answers based on the results. See [Server Tools](https://platform.minimax.io/docs/guides/server-tools.md).<br>• \$0.01 / request |
| tables › 第 10 项 › headers | 新增 | 未记录 | • Category<br>• Starter<br>• Standard<br>• Pro<br>• Scale<br>• Business<br>• Customer Pricing |
| tables › 第 10 项 › heading | 新增 | 未记录 | Audio |
| tables › 第 10 项 › rows › 第 1 项 | 新增 | 未记录 | • **Monthly Subscription**<br>• \$5<br>• \$30<br>• \$99<br>• \$249<br>• \$999<br>• / |
| tables › 第 10 项 › rows › 第 2 项 | 新增 | 未记录 | • **3-month Subscription** (10% off)<br>• \$13.5<br>• \$81<br>• \$267<br>• \$672<br>• \$2,697<br>• / |
| tables › 第 10 项 › rows › 第 3 项 | 新增 | 未记录 | • **Yearly Subscription** (20% off)<br>• \$48<br>• \$288<br>• \$950<br>• \$2,390<br>• \$9,590<br>• / |
| tables › 第 10 项 › rows › 第 4 项 | 新增 | 未记录 | • **Audio points per month**<br>• 100,000<br>• 300,000<br>• 1,100,000<br>• 3,300,000<br>• 20,000,000<br>• As many audio points as you need |
| tables › 第 10 项 › rows › 第 5 项 | 新增 | 未记录 | • **Functions**<br>• • Voice slots: 10 • RPM: 10 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models<br>• • Voice slots: 100 • RPM: 50 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models<br>• • Voice slots: 250 • RPM: 200 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models<br>• • Voice slots: 500 • RPM: 500 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models<br>• • Voice slots: 800 • RPM: 800 • Faster speed of generating speech • Supports T2A v2, T2A large v2 API • Supports all speech models<br>• • Unlimited RPM/TPM • Priority access to model updates • More voices and more cloning options • Exclusive security and stability guarantees |
| tables › 第 11 项 › headers | 新增 | 未记录 | • Package Category<br>• Standard (SAVE 5%)<br>• Pro (SAVE 10%)<br>• Scale (SAVE 15%)<br>• Business (SAVE 20%)<br>• Custom Pricing |
| tables › 第 11 项 › heading | 新增 | 未记录 | Video |
| tables › 第 11 项 › rows › 第 1 项 | 新增 | 未记录 | • **Discounted Price**<br>• \$1,000<br>• \$2,500<br>• \$4,500<br>• \$6,000<br>• - |
| tables › 第 11 项 › rows › 第 2 项 | 新增 | 未记录 | • **Valid**<br>• 1 month<br>• 1 month<br>• 1 month<br>• 1 month<br>• - |
| tables › 第 11 项 › rows › 第 3 项 | 新增 | 未记录 | • **Total video points**<br>• 3,760 video points<br>• 9,920 video points<br>• 18,900 video points<br>• 26,780 video points<br>• As many video points as you need |
| tables › 第 11 项 › rows › 第 4 项 | 新增 | 未记录 | • **Functions**<br>• • Supports Video Generation API • RPM: 20<br>• • Supports Video Generation API • RPM: 30<br>• • Supports Video Generation API • RPM: 40<br>• • Supports Video Generation API • RPM: 50<br>• • Unlimited RPM/TPM • Priority access to model updates • Exclusive security and stability guarantees |
| tables › 第 12 项 › headers | 新增 | 未记录 | • Feature<br>• Pay-as-you-go<br>• Packages |
| tables › 第 12 项 › heading | 新增 | 未记录 | Compare Billing Options |
| tables › 第 12 项 › rows › 第 1 项 | 新增 | 未记录 | • Use cases<br>• Use any MiniMax model or tool and pay for what you use, with the flexibility to support a wide range of business needs and API workloads.<br>• For speech or video workloads where you expect to make good use of the included points. |
| tables › 第 12 项 › rows › 第 2 项 | 新增 | 未记录 | • How you pay<br>• Add funds to your account and pay for what you use<br>• Purchase an Audio or Video Package |
| tables › 第 12 项 › rows › 第 3 项 | 新增 | 未记录 | • Coverage<br>• All MiniMax models and tools<br>• All speech models; Hailuo video models |
| tables › 第 12 项 › rows › 第 4 项 | 新增 | 未记录 | • Billing units<br>• Varies by model, configuration, and type of usage<br>• Audio points per month; video points |
| tables › 第 12 项 › rows › 第 5 项 | 新增 | 未记录 | • Get started<br>• [Recharge Now](https://platform.minimax.io/user-center/payment/balance)<br>• [View Audio](#packages/speech) · [View Video](#packages/video) |
| tables › 第 13 项 › headers | 新增 | 未记录 | • Feature<br>• Audio<br>• Video |
| tables › 第 13 项 › heading | 新增 | 未记录 | Coverage |
| tables › 第 13 项 › rows › 第 1 项 | 新增 | 未记录 | • Supported models<br>• All speech models<br>• Hailuo video models; MiniMax H3 is not supported yet |
| tables › 第 13 项 › rows › 第 2 项 | 新增 | 未记录 | • Supported APIs<br>• T2A v2 and T2A large v2<br>• Video Generation API |
| tables › 第 13 项 › rows › 第 3 项 | 新增 | 未记录 | • Included points<br>• Audio points per month<br>• Video points |
| tables › 第 13 项 › rows › 第 4 项 | 新增 | 未记录 | • Package duration<br>• 1 month, 3 months (10% off), or 1 year (20% off)<br>• 1 month for all four standard packages |
| tables › 第 13 项 › rows › 第 5 项 | 新增 | 未记录 | • Plan details<br>• [Audio](#packages/speech)<br>• [Video](#packages/video) |
| title | 新增 | 未记录 | Pricing Overview |

#### 来源 / minimax-global-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • ````yaml api-reference/text/api/openapi-responses.json POST /v1/responses<br>• POST /v1/responses |
| capability mentions | 新增 | 未记录 | 列表（64 项）<details><summary>展开完整内容</summary><ul><li>reasoning:</li><li>Image Understanding:</li><li>text: What does this image show?</li><li>- type: input_image</li><li>image_url: &gt;-</li><li>Video Understanding:</li><li>text: What is happening in this video?</li><li>- type: input_video</li><li>video_url: &gt;-</li><li>type: reasoning</li><li>- type: reasoning_text</li><li>reasoning_tokens: 36</li><li>parallel_tool_calls: true</li><li>We need answer describe image. Need be careful</li><li>neutral blurred background. Maybe image appears</li><li>reasoning_tokens: 71</li><li>We need answer describe video. Need inspect</li><li>generated video concept "cat at Olympics". Need</li><li>reasoning_tokens: 299</li><li>type: reasoning_text</li><li>- type: response.reasoning_text.delta</li><li>delta: ' image description. Need be careful: appears young girl, close-up portrait, brown curly hair bangs, white lace'</li><li>delta: . User asks what image shows. Concise.</li><li>- type: response.reasoning_text.done</li><li>We need answer image description. Need be careful:</li><li>image shows. Concise.</li><li>User asks what image shows. Concise.</li><li>We need answer image description. Need be</li><li>asks what image shows. Concise.</li><li>reasoning_tokens: 62</li><li>Maximum output token count. Reasoning tokens count toward it too, so</li><li>Reasoning control. The default depends on the model, so no</li><li>- `MiniMax-M3.1-Flash`: reasoning is always on, including when</li><li>`reasoning` is omitted. `effort` accepts `low`, `medium`, `high`,</li><li>`xhigh` or `max`, and does tune reasoning depth. When omitted, it</li><li>- `MiniMax-M3`: reasoning is off unless `effort` is set to a</li><li>non-`none` value, which turns reasoning on but does not tune its</li><li>- M2.x models: reasoning cannot be disabled; `effort: "none"` is</li><li>parallel_tool_calls:</li><li>`reasoning`</li><li>- reasoning</li><li>Tool call ID (only when `type` is `function_call` or</li><li>description: Reasoning segment array (only when `type` is `reasoning`)</li><li>description: Reasoning text</li><li>- title: Reasoning</li><li>description: Reasoning output (only returned when reasoning is enabled)</li><li>description: Reasoning summary</li><li>- reasoning_text</li><li>description: Tool call ID, used to correlate with `function_call_output`</li><li>reasoning_tokens:</li><li>Tokens consumed by reasoning (only counted when reasoning is</li><li>- input_image</li><li>- input_video</li><li>- `input_image`: Image input</li><li>- `input_video`: Video input</li><li>image_url:</li><li>Image input (when `type` is `input_image`). Supported formats: JPEG,</li><li>description: Image URL or Base64 encoding</li><li>description: Image understanding precision tier</li><li>video_url:</li><li>Video input (when `type` is `input_video`). Supported formats: MP4,</li><li>Video URL or Base64 encoding. Use the File API to upload</li><li>description: Video understanding precision tier</li><li>description: Pixel constraint on the longest side of video frames</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Create Response<br>&gt; Call MiniMax models via the OpenAI Responses API compatible main endpoint. Generates model replies, supports streaming and non-streaming.<br>## OpenAPI<br>````yaml api-reference/text/api/openapi-responses.json POST /v1/responses<br>openapi: 3.1.0<br>info:<br>title: MiniMax Responses API<br>description: &gt;-<br>MiniMax OpenAI Responses API compatible endpoints, supporting chat<br>generation and token estimation<br>license:<br>name: MIT<br>version: 1.0.0<br>servers:<br>- url: https://api.minimax.io<br>security:<br>- bearerAuth: []<br>paths:<br>/v1/responses:<br>post:<br>tags:<br>- Responses<br>summary: Create Response<br>operationId: createResponse<br>parameters:<br>- name: Content-Type<br>in: header<br>required: true<br>description: Media type of the request body. Must be set to `application/json`<br>schema:<br>type: string<br>enum:<br>- application/json<br>default: application/json<br>requestBody:<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/CreateResponseReq'<br>examples:<br>Deep Thinking:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input: Which is bigger, 9.11 or 9.9?<br>Image Understanding:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input:<br>- role: user<br>content:<br>- type: input_text<br>text: What does this image show?<br>- type: input_image<br>image_url: &gt;-<br>https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg<br>Video Understanding:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input:<br>- role: user<br>content:<br>- type: input_text<br>text: What is happening in this video?<br>- type: input_video<br>video_url: &gt;-<br>https://filecdn.minimax.chat/public/ee8c1648-21f1-41b7-8397-65022d22ffe5.mp4<br>Stream:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input:<br>- role: user<br>content:<br>- type: input_text<br>text: What does this image show?<br>- type: input_image<br>image_url: &gt;-<br>https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg<br>stream: true<br>Tool Use:<br>value:<br>model: MiniMax-M3.1-Flash<br>reasoning:<br>effort: max<br>input: How's the weather in San Francisco?<br>tools:<br>- type: function<br>name: get_weather<br>description: Get the current weather for a given location.<br>parameters: |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/CreateResponseReq'<br>• $ref: '#/components/schemas/CreateResponseResp'<br>• $ref: '#/components/schemas/InputItem'<br>• $ref: '#/components/schemas/Tool'<br>• $ref: '#/components/schemas/OutputItem'<br>• $ref: '#/components/schemas/Usage'<br>• $ref: '#/components/schemas/ContentPart' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-responses-api |
| source ref | 新增 | 未记录 | minimax-global-responses-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Create Response |

#### 来源 / minimax-global-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| api mentions | 新增 | 未记录 | • BASE_URL = "https://api.minimax.io"<br>• url = f"{BASE_URL}/v2/video_generation"<br>• url = f"{BASE_URL}/v2/query/video_generation/{task_id}" |
| capability mentions | 新增 | 未记录 | 列表（91 项）<details><summary>展开完整内容</summary><ul><li># Video Generation</li><li>&gt; MiniMax's video models (MiniMax-H3) enable efficient video content creation.</li><li>MiniMax currently offers the **MiniMax-H3** video generation model:</li><li>* **MiniMax-H3**: an open, general-purpose multimodal video model. It understands text, image, video, and audio inputs in a unified way, and supports video generation, reference-based creation, and video editing.</li><li>Note: To use MiniMax-H3, please select the [Pay-as-you-go API](https://platform.minimax.io/docs/pricing/overview.md#models/video).</li><li>&#124; Text-to-Video &#124; Prompt &#124; Generate a video from a text description, from scratch &#124;</li><li>&#124; Image-to-Video &#124; Prompt + first-frame image and/or last-frame image &#124; Control the starting or ending frame; bring a specific frame naturally to life &#124;</li><li>&#124; Reference Generation &#124; Prompt + reference images, videos, or audio &#124; Reference character, motion, camera, style, voice, or editing rhythm &#124;</li><li>Output duration accepts integer values only. MiniMax-H3 supports common aspect ratios or adaptive; [see the API reference](https://platform.minimax.io/docs/api-reference/video-generation-v2-create.md) for details.</li><li>&#124; **First/last-frame entry** &#124; Images: 0, 1, or 2; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 &#124;</li><li>&#124; &#124; With no image input, this becomes Text-to-Video &#124;</li><li>&#124; **Reference entry** &#124; Images: ≤ 9; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 &#124;</li><li>&#124; &#124; Videos: ≤ 3 clips; per-clip duration \[2, 15] s; total duration ≤ 15 s; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 &#124;</li><li>&#124; &#124; Audio: ≤ 3 clips; per-clip duration \[2, 15] s; total duration ≤ 15 s &#124;</li><li>&#124; &#124; With no image, video, or audio input, this becomes Text-to-Video &#124;</li><li>&#124; **Supported input formats** &#124; Video: H.264/AVC, H.265/HEVC; in-video audio: AAC, MP3 &#124;</li><li>&#124; &#124; Image: JPG, JPEG, PNG, WEBP, HEIC, HEIF &#124;</li><li>&#124; &#124; Audio: WAV, MP3 &#124;</li><li>&#124; **File size limits** &#124; Video ≤ 50 MB per file; image ≤ 30 MB per file; audio ≤ 15 MB per file (limits apply per asset, not in aggregate) &#124;</li><li>Video generation is an asynchronous process consisting of three steps:</li><li>1. **Create a generation task**: Submit a video generation request and receive a task ID (`task_id`).</li><li>2. **Check task status**: Poll the task status using the `task_id`. Once successful, the response directly returns the video download URL (`content.url`).</li><li>3. **Retrieve video file**: Download the video from `content.url` and save it locally.</li><li># --- Step 1: Create a video generation task ---</li><li># (text / image_url / video_url / audio_url) and can be labeled with a role. Each function below</li><li># corresponds to one mode (text-to-video, image-to-video, first-and-last-frame, reference-to-video),</li><li>def invoke_text_to_video() -&gt; str:</li><li>"""(Mode 1) Text-to-video (t2va). For t2va, ratio is required and cannot be 'adaptive'."""</li><li>url = f"{BASE_URL}/v2/video_generation"</li><li># A type=text item is required and defines the video's content and motion.</li><li>def invoke_image_to_video() -&gt; str:</li><li>"""(Mode 2) Image-to-video (i2va) using a first-frame image and text."""</li><li># role=first_frame specifies the opening frame; for image-to-video the aspect ratio is</li><li># determined by the input image and ratio is always 'adaptive'.</li><li>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/85c96368-6ead-4eae-af9c-116be878eac3.png"}, "role": "first_frame"},</li><li>def invoke_start_end_to_video() -&gt; str:</li><li>"""(Mode 3) First-frame + last-frame image + text."""</li><li>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},</li><li>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/97b7cd08-764e-4b8b-a7bf-87a0bd898575.jpeg"}, "role": "last_frame"},</li><li>def invoke_reference_to_video() -&gt; str:</li><li>"""(Mode 4) Reference-to-video (r2va): combine reference images / videos / audio."""</li><li>{"type": "text", "text": "The character performs street dance, following the motion in reference video 1; the character's appearance follows reference images 1 and 2."},</li><li>{"type": "image_url", "image_url": {"url": "https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/9d5c7a33fa6e_01_%E5%9B%BE1_MHGgbVga3o_gpt4o-image-1780651118146.png"}, "role": "reference_image"},</li><li>{"type": "image_url", "image_url": {"url": "https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/7af326902315_00_%E5%9B%BE2_YqtKbY1jpo_u4391985813_Young_male_wearing_cream_hoodie_and_dark_brown_sh_45d56ed0-d626-4c37-9a5b-77f51f374982_1.png"}, "role": "reference_image"},</li><li>{"type": "video_url", "video_url": {"url": "https://cdn.hailuoai.com/prod/hailuo_demo/testsets/h3_promo_eval_ref2va/gallery/sr_v2p26_trio_seed42_20260724/inputs/d9060f5cb9ab_02_%E8%A7%86%E9%A2%911_HDvmbpQrEo_%E8%A1%97%E8%88%9E3.mp4"}, "role": "reference_video"},</li><li># Since video generation is time-consuming, the API works asynchronously.</li><li># returns the video download URL (content.url) — no file_id exchange is needed.</li><li>"""Poll task status by task_id and return the video download URL on success."""</li><li>url = f"{BASE_URL}/v2/query/video_generation/{task_id}"</li><li># On success, task.content.url is the video download URL.</li><li>raise Exception(f"Video generation did not succeed: status={status}, error={task.get('error')}")</li><li># --- Step 3: Download and save the video file ---</li><li>def fetch_video(download_url: str):</li><li>"""Download the video and save it locally."""</li><li>video_response = requests.get(download_url)</li><li>video_response.raise_for_status()</li><li>f.write(video_response.content)</li><li>print("Video successfully saved as output.mp4")</li><li># Demonstrates the full workflow from task creation to video retrieval.</li><li>task_id = invoke_text_to_video()  # Mode 1: Text-to-Video</li><li># task_id = invoke_image_to_video() # Mode 2: Image-to-Video</li><li># task_id = invoke_start_end_to_video() # Mode 3: First-and-Last-Frame Video</li><li># task_id = invoke_reference_to_video() # Mode 4: Reference-to-Video</li><li>print(f"Video generation task submitted, Task ID: {task_id}")</li><li>print(f"Task succeeded, video URL: {download_url}")</li><li>fetch_video(download_url)</li><li>## Video Generation Results</li><li>### Text-to-Video</li><li>Provide a text description only, and the model generates a video from it. For finer control, add camera motion instructions (e.g., \[pan], \[zoom], \[static]) directly after key descriptions to guide the camera work.</li><li>&lt;video controls src="https://filecdn.minimax.chat/docs/video-generation-v2/text-to-video.mp4" /&gt;</li><li>### First/Last-Frame Image-to-Video</li><li>Provide a first-frame image, a last-frame image, or both, along with a text description. The opening or ending frame is fully controlled — ideal for bringing a static image to life or filling in a natural transition.</li><li>&lt;video controls src="https://filecdn.minimax.chat/docs/video-generation-v2/first-last-frame.mp4" /&gt;</li><li>Provide reference images, reference videos, or reference audio (any combination), together with a text description. The model keeps the features of the reference subject or asset consistent throughout the generated video.</li><li>&lt;video controls src="https://filecdn.minimax.chat/docs/video-generation-v2/reference.mp4" /&gt;</li><li>To obtain a more complete prompt before generating a video, [create an H3-Context-IR task](https://platform.minimax.io/docs/api-reference/video-generation-v2-h3-context-ir.md). H3-Context-IR deeply interprets multimodal context across text, images, audio, and video, reasons about the relationships among those inputs, and produces a structured representation with richer semantic detail while preserving the user's original intent as much as possible. This endpoint only returns an enhanced prompt a</li><li>H3-Context-IR runs asynchronously. After creating the task, use [Query Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-query.md) or [List Tasks](https://platform.minimax.io/docs/api-reference/video-generation-v2-list.md); retrieve the enhanced prompt from `content.prompt` when the task succeeds and identify the task by `task_type=h3_context_ir`.</li><li>## Video Regeneration</li><li>If you have a video that meets the MiniMax-H3 768P output specifications, use [Create Video Regeneration Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-regeneration.md) to produce a 2K video. The request must reproduce all `content` used to generate the 768P video and add exactly one source-video item with `type=video_url` and `role=base_video`.</li><li>Regeneration tasks share [Query Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-query.md), [List Tasks](https://platform.minimax.io/docs/api-reference/video-generation-v2-list.md), and [Cancel or Delete Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-delete.md) with other H3 tasks. Identify them by `task_type=regeneration`.</li><li>&gt; [card] [Create Video Generation Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-create.md)</li><li>&gt; Use this API to create a MiniMax-H3 video generation task from multimodal content input.</li><li>&gt; [card] [Create H3-Context-IR Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-h3-context-ir.md)</li><li>&gt; Deeply interpret multimodal video-generation context and produce a structured, enhanced prompt.</li><li>&gt; [card] [Create Video Regeneration Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-regeneration.md)</li><li>&gt; Regenerate a source video that meets the MiniMax-H3 768P output specifications and produce a 2K video.</li><li>&gt; [card] [Query Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-query.md)</li><li>&gt; Use this API to query task status by task\_id and retrieve the video download URL.</li><li>&gt; [card] [List Tasks](https://platform.minimax.io/docs/api-reference/video-generation-v2-list.md)</li><li>&gt; [card] [Cancel or Delete Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-delete.md)</li><li>&gt; [card] [Pricing](https://platform.minimax.io/docs/pricing/overview.md#models/video)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.minimax.io/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Video Generation<br>&gt; MiniMax's video models (MiniMax-H3) enable efficient video content creation.<br>MiniMax currently offers the **MiniMax-H3** video generation model:<br>* **MiniMax-H3**: an open, general-purpose multimodal video model. It understands text, image, video, and audio inputs in a unified way, and supports video generation, reference-based creation, and video editing.<br>Note: To use MiniMax-H3, please select the [Pay-as-you-go API](https://platform.minimax.io/docs/pricing/overview.md#models/video).<br>## Supported Generation Modes<br>### MiniMax-H3<br>&#124; Mode &#124; Input &#124; Typical Use Case &#124;<br>&#124; - &#124; - &#124; - &#124;<br>&#124; Text-to-Video &#124; Prompt &#124; Generate a video from a text description, from scratch &#124;<br>&#124; Image-to-Video &#124; Prompt + first-frame image and/or last-frame image &#124; Control the starting or ending frame; bring a specific frame naturally to life &#124;<br>&#124; Reference Generation &#124; Prompt + reference images, videos, or audio &#124; Reference character, motion, camera, style, voice, or editing rhythm &#124;<br>## Model Specs &amp; Input Requirements<br>### Output Specs<br>&#124; Model name &#124; Output resolution &#124; Output duration &#124;<br>&#124; - &#124; - &#124; - &#124;<br>&#124; `MiniMax-H3` &#124; 768P / 2K &#124; 4–15 seconds &#124;<br>Output duration accepts integer values only. MiniMax-H3 supports common aspect ratios or adaptive; [see the API reference](https://platform.minimax.io/docs/api-reference/video-generation-v2-create.md) for details.<br>### Input Requirements<br>&#124; Item &#124; Requirement &#124;<br>&#124; - &#124; - &#124;<br>&#124; **First/last-frame entry** &#124; Images: 0, 1, or 2; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 &#124;<br>&#124; &#124; With no image input, this becomes Text-to-Video &#124;<br>&#124; **Reference entry** &#124; Images: ≤ 9; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 &#124;<br>&#124; &#124; Videos: ≤ 3 clips; per-clip duration \[2, 15] s; total duration ≤ 15 s; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 &#124;<br>&#124; &#124; Audio: ≤ 3 clips; per-clip duration \[2, 15] s; total duration ≤ 15 s &#124;<br>&#124; &#124; Mixed input is capped at 12 files in total &#124;<br>&#124; &#124; With no image, video, or audio input, this becomes Text-to-Video &#124;<br>&#124; **Supported input formats** &#124; Video: H.264/AVC, H.265/HEVC; in-video audio: AAC, MP3 &#124;<br>&#124; &#124; Image: JPG, JPEG, PNG, WEBP, HEIC, HEIF &#124;<br>&#124; &#124; Audio: WAV, MP3 &#124;<br>&#124; **File size limits** &#124; Video ≤ 50 MB per file; image ≤ 30 MB per file; audio ≤ 15 MB per file (limits apply per asset, not in aggregate) &#124;<br>&#124; &#124; API request body ≤ 64 MB (URL input is recommended for large assets) &#124;<br>&#124; **Prompt length limit** &#124; ≤ 7000 characters &#124;<br>## Workflow<br>Video generation is an asynchronous process consisting of three steps:<br>1. **Create a generation task**: Submit a video generation request and receive a task ID (`task_id`).<br>2. **Check task status**: Poll the task status using the `task_id`. Once successful, the response directly returns the video download URL (`content.url`).<br>3. **Retrieve video file**: Download the video from `content.url` and save it locally.<br>## Features and Code Examples<br>For simplicity, we encapsulate polling and downloading logic into reusable functions. The following examples demonstrate how to create tasks in four different modes.<br>```python theme={null}<br>import os<br>import time<br>import requests<br>api_key = os.environ["MINIMAX_API_KEY"]<br>headers = {"Authorization": f"Bearer {api_key}"}<br>BASE_URL = "https://api.minimax.io"<br>MODEL = "MiniMax-H3"<br># --- Step 1: Create a video generation task ---<br># MiniMax-H3 uses a multimodal content[] structure: each element is distinguished by type<br># (text / image_url / video_url / audio_url) and can be labeled with a role. Each function below<br># corresponds to one mode (text-to-video, image-to-video, first-and-last-frame, reference-to-video),<br># starts an asynchronous task, and returns a unique task_id.<br>def invoke_text_to_video() -&gt; str:<br>"""(Mode 1) Text-to-video (t2va). For t2va, ratio is required and cannot be 'adaptive'."""<br>url = f"{BASE_URL}/v2/video_generation"<br>payload = {<br>"model": MODEL,<br>"content": [<br># A type=text item is required and defines the video's content and motion.<br>{"type": "text", "text": "A tiktok dancer is dancing on a drone, doing flips and tricks."},<br>],<br>"duration": 5,<br>"resolution": "2K",<br>"ratio": "16:9",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>return response.json()["task_id"]<br>def invoke_image_to_video() -&gt; str:<br>"""(Mode 2) Image-to-video (i2va) using a first-frame image and text."""<br>url = f"{BASE_URL}/v2/video_generation"<br>payload = {<br>"model": MODEL,<br>"content": [<br>{"type": "text", "text": "Contemporary dance, the people in the picture are performing contemporary dance."},<br># role=first_frame specifies the opening frame; for image-to-video the aspect ratio is<br># determined by the input image and ratio is always 'adaptive'.<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/85c96368-6ead-4eae-af9c-116be878eac3.png"}, "role": "first_frame"},<br>],<br>"duration": 5,<br>"resolution": "2K",<br>}<br>response = requests.post(url, headers=headers, json=payload)<br>response.raise_for_status()<br>return response.json()["task_id"]<br>def invoke_start_end_to_video() -&gt; str:<br>"""(Mode 3) First-frame + last-frame image + text."""<br>url = f"{BASE_URL}/v2/video_generation"<br>payload = {<br>"model": MODEL,<br>"content": [<br>{"type": "text", "text": "A little girl grows up."},<br># role=first_frame specifies the opening frame<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},<br># role=last_frame specifies the ending frame |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • # (text / image_url / video_url / audio_url) and can be labeled with a role. Each function below |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | minimax-global-video-guide |
| source ref | 新增 | 未记录 | minimax-global-video-guide |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Input Requirements › headers | 新增 | 未记录 | • Item<br>• Requirement |
| tables › 记录 Input Requirements › heading | 新增 | 未记录 | Input Requirements |
| tables › 记录 Input Requirements › rows › 第 1 项 | 新增 | 未记录 | • **First/last-frame entry**<br>• Images: 0, 1, or 2; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 |
| tables › 记录 Input Requirements › rows › 第 2 项 | 新增 | 未记录 | • 空字符串<br>• With no image input, this becomes Text-to-Video |
| tables › 记录 Input Requirements › rows › 第 3 项 | 新增 | 未记录 | • **Reference entry**<br>• Images: ≤ 9; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 |
| tables › 记录 Input Requirements › rows › 第 4 项 | 新增 | 未记录 | • 空字符串<br>• Videos: ≤ 3 clips; per-clip duration \[2, 15] s; total duration ≤ 15 s; width/height in \[256, 5760]; aspect ratio (width/height) in 2:5 – 5:2 |
| tables › 记录 Input Requirements › rows › 第 5 项 | 新增 | 未记录 | • 空字符串<br>• Audio: ≤ 3 clips; per-clip duration \[2, 15] s; total duration ≤ 15 s |
| tables › 记录 Input Requirements › rows › 第 6 项 | 新增 | 未记录 | • 空字符串<br>• Mixed input is capped at 12 files in total |
| tables › 记录 Input Requirements › rows › 第 7 项 | 新增 | 未记录 | • 空字符串<br>• With no image, video, or audio input, this becomes Text-to-Video |
| tables › 记录 Input Requirements › rows › 第 8 项 | 新增 | 未记录 | • **Supported input formats**<br>• Video: H.264/AVC, H.265/HEVC; in-video audio: AAC, MP3 |
| tables › 记录 Input Requirements › rows › 第 9 项 | 新增 | 未记录 | • 空字符串<br>• Image: JPG, JPEG, PNG, WEBP, HEIC, HEIF |
| tables › 记录 Input Requirements › rows › 第 10 项 | 新增 | 未记录 | • 空字符串<br>• Audio: WAV, MP3 |
| tables › 记录 Input Requirements › rows › 第 11 项 | 新增 | 未记录 | • **File size limits**<br>• Video ≤ 50 MB per file; image ≤ 30 MB per file; audio ≤ 15 MB per file (limits apply per asset, not in aggregate) |
| tables › 记录 Input Requirements › rows › 第 12 项 | 新增 | 未记录 | • 空字符串<br>• API request body ≤ 64 MB (URL input is recommended for large assets) |
| tables › 记录 Input Requirements › rows › 第 13 项 | 新增 | 未记录 | • **Prompt length limit**<br>• ≤ 7000 characters |
| tables › 记录 MiniMax-H3 › headers | 新增 | 未记录 | • Mode<br>• Input<br>• Typical Use Case |
| tables › 记录 MiniMax-H3 › heading | 新增 | 未记录 | MiniMax-H3 |
| tables › 记录 MiniMax-H3 › rows › 记录 Image-to-Video | 新增 | 未记录 | • Image-to-Video<br>• Prompt + first-frame image and/or last-frame image<br>• Control the starting or ending frame; bring a specific frame naturally to life |
| tables › 记录 MiniMax-H3 › rows › 记录 Reference Generation | 新增 | 未记录 | • Reference Generation<br>• Prompt + reference images, videos, or audio<br>• Reference character, motion, camera, style, voice, or editing rhythm |
| tables › 记录 MiniMax-H3 › rows › 记录 Text-to-Video | 新增 | 未记录 | • Text-to-Video<br>• Prompt<br>• Generate a video from a text description, from scratch |
| tables › 记录 Output Specs › headers | 新增 | 未记录 | • Model name<br>• Output resolution<br>• Output duration |
| tables › 记录 Output Specs › heading | 新增 | 未记录 | Output Specs |
| tables › 记录 Output Specs › rows › 记录 `MiniMax-H3` | 新增 | 未记录 | • `MiniMax-H3`<br>• 768P / 2K<br>• 4–15 seconds |
| title | 新增 | 未记录 | Video Generation |

### 待核对项目

#### 项目 / minimax-observations-await-complete-domain-mapping

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 minimax-cn-anthropic-api › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-anthropic-api › source ref | 新增 | 未记录 | minimax-cn-anthropic-api |
| evidence › 记录 minimax-cn-asr-api › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-asr-api › source ref | 新增 | 未记录 | minimax-cn-asr-api |
| evidence › 记录 minimax-cn-audio-guide › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-audio-guide › source ref | 新增 | 未记录 | minimax-cn-audio-guide |
| evidence › 记录 minimax-cn-file-upload-api › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-file-upload-api › source ref | 新增 | 未记录 | minimax-cn-file-upload-api |
| evidence › 记录 minimax-cn-function-call-api › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-function-call-api › source ref | 新增 | 未记录 | minimax-cn-function-call-api |
| evidence › 记录 minimax-cn-image-guide › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-image-guide › source ref | 新增 | 未记录 | minimax-cn-image-guide |
| evidence › 记录 minimax-cn-m-plan-intro › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-m-plan-intro › source ref | 新增 | 未记录 | minimax-cn-m-plan-intro |
| evidence › 记录 minimax-cn-m-plan-page › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-m-plan-page › source ref | 新增 | 未记录 | minimax-cn-m-plan-page |
| evidence › 记录 minimax-cn-mcp-guide › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-mcp-guide › source ref | 新增 | 未记录 | minimax-cn-mcp-guide |
| evidence › 记录 minimax-cn-model-catalog › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-model-catalog › source ref | 新增 | 未记录 | minimax-cn-model-catalog |
| evidence › 记录 minimax-cn-model-overview › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-model-overview › source ref | 新增 | 未记录 | minimax-cn-model-overview |
| evidence › 记录 minimax-cn-pricing › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-pricing › source ref | 新增 | 未记录 | minimax-cn-pricing |
| evidence › 记录 minimax-cn-responses-api › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-responses-api › source ref | 新增 | 未记录 | minimax-cn-responses-api |
| evidence › 记录 minimax-cn-video-api › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-video-api › source ref | 新增 | 未记录 | minimax-cn-video-api |
| evidence › 记录 minimax-cn-video-guide › assertion | 新增 | 未记录 | market=cn |
| evidence › 记录 minimax-cn-video-guide › source ref | 新增 | 未记录 | minimax-cn-video-guide |
| evidence › 记录 minimax-global-anthropic-api › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-anthropic-api › source ref | 新增 | 未记录 | minimax-global-anthropic-api |
| evidence › 记录 minimax-global-audio-guide › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-audio-guide › source ref | 新增 | 未记录 | minimax-global-audio-guide |
| evidence › 记录 minimax-global-file-upload-api › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-file-upload-api › source ref | 新增 | 未记录 | minimax-global-file-upload-api |
| evidence › 记录 minimax-global-function-call-api › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-function-call-api › source ref | 新增 | 未记录 | minimax-global-function-call-api |
| evidence › 记录 minimax-global-image-guide › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-image-guide › source ref | 新增 | 未记录 | minimax-global-image-guide |
| evidence › 记录 minimax-global-m-plan-intro › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-m-plan-intro › source ref | 新增 | 未记录 | minimax-global-m-plan-intro |
| evidence › 记录 minimax-global-m-plan-page › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-m-plan-page › source ref | 新增 | 未记录 | minimax-global-m-plan-page |
| evidence › 记录 minimax-global-mcp-guide › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-mcp-guide › source ref | 新增 | 未记录 | minimax-global-mcp-guide |
| evidence › 记录 minimax-global-model-catalog › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-model-catalog › source ref | 新增 | 未记录 | minimax-global-model-catalog |
| evidence › 记录 minimax-global-model-overview › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-model-overview › source ref | 新增 | 未记录 | minimax-global-model-overview |
| evidence › 记录 minimax-global-pricing › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-pricing › source ref | 新增 | 未记录 | minimax-global-pricing |
| evidence › 记录 minimax-global-responses-api › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-responses-api › source ref | 新增 | 未记录 | minimax-global-responses-api |
| evidence › 记录 minimax-global-video-guide › assertion | 新增 | 未记录 | market=global |
| evidence › 记录 minimax-global-video-guide › source ref | 新增 | 未记录 | minimax-global-video-guide |
| ID（id） | 新增 | 未记录 | minimax-observations-await-complete-domain-mapping |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录状态、Token 价格、视频/语音 API、协议参数和计划权益仍需按市场映射到 IR 领域字段；当前统一候选只保留来源观察。 |

### 市场 / 未知市场

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 完整记录 | 新增 | 未记录 | 空列表 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `minimax-cn-model-catalog` · MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-05T12:30:16.581Z | 200 | `sha256:a222962f400cae8a8e000a9ff777abb2875bd1e43e92e841fb1ef40a2be17878` |
| cn | `minimax-cn-pricing` · MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-05T12:30:15.333Z | 200 | `sha256:e23bbc8a65e411efbcf7a573ba68540d60f01b6b0b29fcbbaf895cde19b0bea9` |
| cn | `minimax-cn-video-api` · MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-05T12:30:16.496Z | 200 | `sha256:9a7276b7418755a8e7c5ff8e3819dd58b498eb7901fbdc5c5bf25df206905914` |
| cn | `minimax-cn-video-guide` · MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-05T12:30:15.709Z | 200 | `sha256:ac488c697aded1730769d9c7d0b93b13642ade8bbe6779e30a7f1ba52b6797fa` |
| cn | `minimax-cn-asr-api` · MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-05T12:30:15.510Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | `minimax-cn-audio-guide` · MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-05T12:30:16.763Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | `minimax-cn-image-guide` · MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-05T12:30:16.022Z | 200 | `sha256:3e526755c01aa08b42c952a920d4a7cf4201611328ed579501540d2b3d767d87` |
| cn | `minimax-cn-model-overview` · MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-05T12:30:15.834Z | 200 | `sha256:f1310b1fb757cb0cf804530fc2c2a7d8d9f8a346a4d314396c2bbfdcc70a4819` |
| cn | `minimax-cn-anthropic-api` · MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-05T12:30:16.057Z | 200 | `sha256:cbb574d27cee8da9ee052be1cfa1897f55eb2f36eda15b28b6cc0543eeec835c` |
| cn | `minimax-cn-function-call-api` · MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-05T12:30:16.973Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | `minimax-cn-responses-api` · MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-05T12:30:18.157Z | 200 | `sha256:80a696108b9e34f39677e6ce092a7c6ac291a64cb10953c8b1c44f586d98aa6d` |
| cn | `minimax-cn-file-upload-api` · MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-05T12:30:18.539Z | 200 | `sha256:06409fe8aea3d900c63a2f55c06690f8c8335a8935b96baa4c9dd75eea7d9c9f` |
| cn | `minimax-cn-mcp-guide` · MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-05T12:30:16.708Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | `minimax-cn-m-plan-page` · MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-05T13:35:57.057Z | 200 | `sha256:479e0405f8d486cf4b45a946cfadca65fc66993e2f7c11ff1df480fb78dea0cf` |
| cn | `minimax-cn-m-plan-intro` · MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-05T12:30:19.010Z | 200 | `sha256:70a203c1e5ee7c554b09c4443b30562d85dc7d5039aeec9e680342d7f0328201` |
| global | `minimax-global-model-catalog` · MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-05T12:30:16.480Z | 200 | `sha256:2768cac752b3950fe0e4664c6a9ab029ba491f3a4a889dcd1f187fed368903df` |
| global | `minimax-global-video-guide` · MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-05T12:30:16.648Z | 200 | `sha256:dc74ab9682067530450f2ba21b74d8aa7c71c349de09569d0d5f86a725007a3b` |
| global | `minimax-global-audio-guide` · MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-05T12:30:16.548Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | `minimax-global-image-guide` · MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-05T12:30:16.778Z | 200 | `sha256:3dde0949bd6bbda3f797c4be55176f5c8d065353ce44f6799d1e2913f1bac7e5` |
| global | `minimax-global-model-overview` · MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-05T12:30:16.502Z | 200 | `sha256:2d1c470744605b2244951f5a5a4f5a0052808d2964d27ab4aff69d8256456f24` |
| global | `minimax-global-pricing` · MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-05T12:30:16.668Z | 200 | `sha256:0f68524c7eea27db3c54380f776e344fe40ef63a61c966ed4ec0c1b3f8894863` |
| global | `minimax-global-file-upload-api` · MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-05T12:30:16.664Z | 200 | `sha256:5633e9f67131ecacfc5f23dcf0a883156b487948fc2b29e93bc0a683bd35747d` |
| global | `minimax-global-mcp-guide` · MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-05T12:30:16.787Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | `minimax-global-anthropic-api` · MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-05T12:30:16.543Z | 200 | `sha256:0af82734b75b96914237bb36551a1b2b25ea29892452a5e8e7f560eb7e863e68` |
| global | `minimax-global-responses-api` · MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-05T12:30:16.568Z | 200 | `sha256:dbad05069e19afac83a48463187e42a2c5dd12b815f30423fe97aaa2ffe76b35` |
| global | `minimax-global-function-call-api` · MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-05T12:30:16.683Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | `minimax-global-m-plan-page` · MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-05T13:35:56.987Z | 200 | `sha256:d7f1261b6d429a1833bbd4f04013176081aa4bcdc1e9ed132aa572975d780605` |
| global | `minimax-global-m-plan-intro` · MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-05T12:30:16.616Z | 200 | `sha256:583172b21eac14a84c3a68b335f46ebf2eeae7471c6d289e9d4ed5624788ea83` |

## minimax 专属证据与核对说明

### MiniMax IR 观察候选

- IR 指纹：`sha256:0bae7dac9ec3945a2106b046119194229d5c1ee3eecf69ab5c3ba1470b27d079`
- 来源快照：28 份
- 当前输出保留 CN/Global 目录、价格和 API 文档观察，不投影领域字段。

#### 待人工核对

- 目录状态、Token 价格、视频/语音 API、协议参数和计划权益仍需按市场映射到 IR 领域字段；当前统一候选只保留来源观察。

#### 来源快照

- `minimax-cn-model-catalog`：https://platform.minimax.cn/docs/faq/models.md
- `minimax-cn-pricing`：https://platform.minimax.cn/docs/pricing/overview.md
- `minimax-cn-video-api`：https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md
- `minimax-cn-video-guide`：https://platform.minimax.cn/docs/guides/video-generation.md
- `minimax-cn-asr-api`：https://platform.minimax.cn/docs/api-reference/speech-to-text.md
- `minimax-cn-audio-guide`：https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md
- `minimax-cn-image-guide`：https://platform.minimax.cn/docs/guides/image-generation.md
- `minimax-cn-model-overview`：https://platform.minimax.cn/docs/guides/models-intro.md
- `minimax-cn-anthropic-api`：https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md
- `minimax-cn-function-call-api`：https://platform.minimax.cn/docs/guides/text-m3-function-call.md
- `minimax-cn-responses-api`：https://platform.minimax.cn/docs/api-reference/responses-create.md
- `minimax-cn-file-upload-api`：https://platform.minimax.cn/docs/api-reference/file-management-upload.md
- `minimax-cn-mcp-guide`：https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md
- `minimax-cn-m-plan-page`：https://www.minimax.cn/m-plan
- `minimax-cn-m-plan-intro`：https://platform.minimax.cn/docs/m-plan/intro.md
- `minimax-global-model-catalog`：https://platform.minimax.io/docs/faq/models.md
- `minimax-global-video-guide`：https://platform.minimax.io/docs/guides/video-generation.md
- `minimax-global-audio-guide`：https://platform.minimax.io/docs/guides/speech-t2a-websocket.md
- `minimax-global-image-guide`：https://platform.minimax.io/docs/guides/image-generation.md
- `minimax-global-model-overview`：https://platform.minimax.io/docs/guides/models-intro.md
- `minimax-global-pricing`：https://platform.minimax.io/docs/pricing/overview.md
- `minimax-global-file-upload-api`：https://platform.minimax.io/docs/api-reference/file-management-upload.md
- `minimax-global-mcp-guide`：https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md
- `minimax-global-anthropic-api`：https://platform.minimax.io/docs/api-reference/text-anthropic-api.md
- `minimax-global-responses-api`：https://platform.minimax.io/docs/api-reference/responses-create.md
- `minimax-global-function-call-api`：https://platform.minimax.io/docs/guides/text-m3-function-call.md
- `minimax-global-m-plan-page`：https://www.minimax.io/m-plan
- `minimax-global-m-plan-intro`：https://platform.minimax.io/docs/m-plan/intro.md
