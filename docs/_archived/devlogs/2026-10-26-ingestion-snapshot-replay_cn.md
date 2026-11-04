# 采集快照双基线回放报告

**日期**：2026-10-26
**影响范围**：Pipeline Provider 采集器、正式 Provider / Model / 来源与生命周期数据只读保护

## 回放方式

- 使用本机 `data/upstream/snapshots/` 中每个登记来源的最新快照；脚本将快照文件以硬链接放入临时工作区，不修改本机快照缓存。
- 全局 `fetch` 被固定快照映射替代；未命中快照时立即拒绝请求，不访问网络。
- 分别在现有 Provider 数据和空 Provider 数据临时工作区运行全部采集入口；空基线保留共享 Model Registry，供 IR 身份解析使用。
- 比较旧候选/IR 候选指纹、快照数，以及使用共同 Model Registry 且不依赖当前 Provider 文件的 IR 投影指纹。
- 比较现有正式数据工作区回放前后的 Provider、Model、来源和生命周期文件指纹。
- 对具备旧候选的 Provider，在隔离副本中以同一份现有正式数据为基线运行旧转换与 IR 预览；IR 只读沿用本轮未采集的必填档案值，并在预览备注标明待补来源。对照忽略 data_version、generated_at、provider.updated_at 等生成元数据，字段差异值超过 280 字符时仅在报告中截断展示。

## 结果

- 登记来源：640；可用本地快照：640；缺少快照：无。
- 采集入口：16；通过：16；失败：0。
- 现有正式数据只读：通过（sha256:8eed93a2f3c65a6a5479184d1a8cf35208364e0f4c7463c82577c114928b552c → sha256:8eed93a2f3c65a6a5479184d1a8cf35208364e0f4c7463c82577c114928b552c）。
- 空基线未生成正式数据：通过（sha256:48e88240845389166391c45857f6dc5bd04847c2cac6728a3cf361b693e88663 → sha256:48e88240845389166391c45857f6dc5bd04847c2cac6728a3cf361b693e88663）。
- 旧转换与 IR 输出对照：7 个 Provider 可比，0 个因旧候选或完整 IR 投影不足而阻塞；可比不代表等价，所有字段差异仍需审阅。
- 完整字段级对照（含全部旧值、新值和差异路径）：[机器可读 JSON](2026-10-27-ingestion-ir-migration-comparison.json)。

| Provider | 档案 | Offerings | Route / Endpoint | Capability | Price | Plan | 其他 |
|---|---:|---:|---:|---:|---:|---:|---:|
| `alibaba` | 4 | 289 | 0 | 0 | 399 | 25 | 4 |
| `deepseek` | 0 | 20 | 28 | 8 | 17 | 0 | 2 |
| `moonshotai` | 0 | 86 | 6 | 0 | 42 | 0 | 0 |
| `stepfun` | 0 | 33 | 0 | 0 | 14 | 0 | 3 |
| `tencent-tokenhub` | 3 | 71 | 1 | 0 | 6 | 0 | 1 |
| `volcengine` | 0 | 3 | 0 | 0 | 2 | 0 | 1 |
| `xiaomi` | 3 | 12 | 0 | 0 | 12 | 0 | 2 |

分类仅按 Provider 字段 JSON Pointer 的对象路径统计；来源台账证据与 binding 的增删另列在完整 JSON。此汇总帮助定位差异域，不替代逐项解释或审核。

| 采集入口 | 结果 | 快照数 | 旧候选指纹（现有/空） | IR 候选指纹（现有/空） | 预览状态（现有/空） | 预览文档（现有/空） | IR 投影指纹（现有/空） | 说明 |
|---|---|---:|---|---|---|---|---|---|
| `alibaba` | 通过 | 311 | — / — | sha256:ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b / sha256:ecd84b1d2ea6fef1412c29a05842f96136bd198a8d471ff181cf5fe98c4fbe8b | needs_review / needs_review | 有 / 有 | sha256:232286bea3c16654edc9a9863a116b0efe6a79ebf96ef440557e315aaf1da351 / sha256:232286bea3c16654edc9a9863a116b0efe6a79ebf96ef440557e315aaf1da351 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `volcengine` | 通过 | 13 | — / — | sha256:9ecc6fe569926496ac2b121e05800c70bde767108c76f9363490288f6f39e78b / sha256:9ecc6fe569926496ac2b121e05800c70bde767108c76f9363490288f6f39e78b | needs_review / needs_review | 有 / 无 | sha256:50183c773682b17eb4625e412bdc86ed767a8db18d98840dfa34fc17b5dcb11f / sha256:50183c773682b17eb4625e412bdc86ed767a8db18d98840dfa34fc17b5dcb11f | 候选与不依赖 Provider 现值的投影指纹稳定；只读文档可用性不同，因为现有基线可提供未采集的必填档案值，空基线不会凭空补值。 |
| `bailing` | 通过 | 12 | — / — | sha256:059aec3da0723511225a26e324c43c5a7798a1f0b3addc4f59a99f907fd1d749 / sha256:059aec3da0723511225a26e324c43c5a7798a1f0b3addc4f59a99f907fd1d749 | needs_review / needs_review | 有 / 有 | sha256:80301a6fc34476ffb0d5b02fabae2861ba8221d5bf239275478e8214197b8797 / sha256:80301a6fc34476ffb0d5b02fabae2861ba8221d5bf239275478e8214197b8797 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `stepfun` | 通过 | 60 | — / — | sha256:27aedb37c58d36cb1b0292e710c3b1fd2e2fdfdb68291efb2f872bae1a21b4c0 / sha256:27aedb37c58d36cb1b0292e710c3b1fd2e2fdfdb68291efb2f872bae1a21b4c0 | needs_review / needs_review | 有 / 有 | sha256:6dbf1643c70d7134f14c86f8f1b0ff69cb2a08a6f933a24ecec9367112b814d4 / sha256:6dbf1643c70d7134f14c86f8f1b0ff69cb2a08a6f933a24ecec9367112b814d4 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `deepseek` | 通过 | 13 | — / — | sha256:c77773a479c8edf6fb2955fe8b5821e9e6a0817f98dc40348789c5393aaa1ed0 / sha256:c77773a479c8edf6fb2955fe8b5821e9e6a0817f98dc40348789c5393aaa1ed0 | needs_review / needs_review | 有 / 有 | sha256:7a5ab46d6184d007fd365759c31f5def3965f8ceed5cd6a033b49eba540962eb / sha256:7a5ab46d6184d007fd365759c31f5def3965f8ceed5cd6a033b49eba540962eb | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `tencent-tokenhub` | 通过 | 23 | — / — | sha256:192199a028c750901397c1aa0bf0698a4a7fecdadad382001baacdfdd5ee8733 / sha256:192199a028c750901397c1aa0bf0698a4a7fecdadad382001baacdfdd5ee8733 | needs_review / needs_review | 有 / 有 | sha256:6d295e563b67e433f91b6ab241e98542e92c95323a4b914afa00548b64acf557 / sha256:6d295e563b67e433f91b6ab241e98542e92c95323a4b914afa00548b64acf557 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `xiaomi` | 通过 | 16 | — / — | sha256:a63cda5c081b5956f260573e3520fe2372db281c5e61c7b540a67ee3fd97dac2 / sha256:a63cda5c081b5956f260573e3520fe2372db281c5e61c7b540a67ee3fd97dac2 | needs_review / needs_review | 有 / 有 | sha256:eb530c0f418d221c4f95e02c4b85fe463f900e9c9d90f633b21aa0a7a9b77254 / sha256:eb530c0f418d221c4f95e02c4b85fe463f900e9c9d90f633b21aa0a7a9b77254 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `moonshotai` | 通过 | 28 | — / — | sha256:473fa0395d6e2b9b77a17c40bec16cc2eac8ec7593e72d2ab10f7e881439c00f / sha256:473fa0395d6e2b9b77a17c40bec16cc2eac8ec7593e72d2ab10f7e881439c00f | needs_review / needs_review | 有 / 无 | sha256:40d372fdcbfb37a852374821baf91ca65432be2456650603122a3e32641d79ad / sha256:40d372fdcbfb37a852374821baf91ca65432be2456650603122a3e32641d79ad | 候选与不依赖 Provider 现值的投影指纹稳定；只读文档可用性不同，因为现有基线可提供未采集的必填档案值，空基线不会凭空补值。 |
| `zhipu` | 通过 | 54 | sha256:b4c965c61139073c1d6a52df3012e8f1dc5c6ec790e59c94dae556ee124015e6 / sha256:b4c965c61139073c1d6a52df3012e8f1dc5c6ec790e59c94dae556ee124015e6 | sha256:e982740ffe015cf8dadfccfcaf80e49e6de92d396508dcf57fbd42fcf4e9565c / sha256:e982740ffe015cf8dadfccfcaf80e49e6de92d396508dcf57fbd42fcf4e9565c | — / — | — / — | — / — | 两种 Provider 数据基线的候选/IR 指纹、投影状态与快照数一致。 |
| `minimax` | 通过 | 29 | sha256:2eebc8a983129d8e779aad39bb68410e861aab8de68c834735e36c12271b4f8f / sha256:2eebc8a983129d8e779aad39bb68410e861aab8de68c834735e36c12271b4f8f | sha256:f3db14e57b8f62c596473d61f6e070b297d448af6a6234b03894df3d332a99e1 / sha256:f3db14e57b8f62c596473d61f6e070b297d448af6a6234b03894df3d332a99e1 | — / — | — / — | — / — | 两种 Provider 数据基线的候选/IR 指纹、投影状态与快照数一致。 |
| `anthropic` | 通过 | 9 | — / — | sha256:1e024cd6a04c09e06adbc50ba7d7e616ce14c3098c5969a971c19dde881107e0 / sha256:1e024cd6a04c09e06adbc50ba7d7e616ce14c3098c5969a971c19dde881107e0 | needs_review / needs_review | 有 / 有 | sha256:be2a438043a8756a67cb2bbab1505519e245926bc69164dabdbca590b0046034 / sha256:be2a438043a8756a67cb2bbab1505519e245926bc69164dabdbca590b0046034 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `openai` | 通过 | 11 | — / — | sha256:55e631f7656a278f1586e2a4a24e36224101a04aebf05e518cffd60f6dfe8274 / sha256:55e631f7656a278f1586e2a4a24e36224101a04aebf05e518cffd60f6dfe8274 | needs_review / needs_review | 有 / 有 | sha256:518f2f5cc74d11507e99f8981f8515d5c89012840444ffa1dcb6e85fafda3402 / sha256:518f2f5cc74d11507e99f8981f8515d5c89012840444ffa1dcb6e85fafda3402 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `google` | 通过 | 6 | — / — | sha256:55143da2be95a8d235762e9068d72ad79ef9f7d6aca170748a110c68e2b5ea37 / sha256:55143da2be95a8d235762e9068d72ad79ef9f7d6aca170748a110c68e2b5ea37 | needs_review / needs_review | 有 / 有 | sha256:a261dd7502deaf46ccb75a81c871b79061909fdcc62794ff714048c4237eda6b / sha256:a261dd7502deaf46ccb75a81c871b79061909fdcc62794ff714048c4237eda6b | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `xai` | 通过 | 6 | — / — | sha256:b2f9e6bbb54d6fb28288c57f1421e199220b89f2e64d2259ec899f4482d941fd / sha256:b2f9e6bbb54d6fb28288c57f1421e199220b89f2e64d2259ec899f4482d941fd | needs_review / needs_review | 有 / 有 | sha256:0af8a54e64c63a5f45b91fc692854b315201fab6e6f077d4bff617d3ab4ac4e2 / sha256:0af8a54e64c63a5f45b91fc692854b315201fab6e6f077d4bff617d3ab4ac4e2 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `meta` | 通过 | 11 | — / — | sha256:98cd6a49186e866a95b3220da6c7bc692546f71fec5ce9d88dc7f2cabdacc546 / sha256:98cd6a49186e866a95b3220da6c7bc692546f71fec5ce9d88dc7f2cabdacc546 | needs_review / needs_review | 有 / 有 | sha256:aeffc84e6d469d947086b83277256576802969e2a9562bbbdef773296cdbbff8 / sha256:aeffc84e6d469d947086b83277256576802969e2a9562bbbdef773296cdbbff8 | 两种数据基线均生成只读 ProviderDocument，但状态为 needs_review；差异仅供审阅，不允许自动写入。 |
| `volcengine:global` | 通过 | 22 | sha256:5daa19d24aa636c55f7e31be1f2e81e57ad473a1512fce74ce806bda323aad77 / sha256:5daa19d24aa636c55f7e31be1f2e81e57ad473a1512fce74ce806bda323aad77 | — / — | — / — | — / — | — / — | 两种 Provider 数据基线的候选/IR 指纹、投影状态与快照数一致。 |

## IR 投影阻塞项

以下列出待核对预览中的结构性阻塞项，帮助区分 coverage/review 提醒与无法生成字段差异的投影错误。每个 Provider 最多展示 8 项；完整结果保存在本次命令的 JSON 输出中。

### alibaba

- /services/cn/offerings/4/model_ref 需要人工核对：未自动关联：Provider 调用 ID「deepseek-v4.1-flash」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/9/model_ref 需要人工核对：未自动关联：Provider 调用 ID「MiniMax-M3.1-Flash」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/10/model_ref 需要人工核对：未自动关联：Provider 调用 ID「mimo-v2.5-pro」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/73/model_ref 需要人工核对：未自动关联：Provider 调用 ID「MiniMax-M2.5」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/265/model_ref 需要人工核对：未自动关联：Provider 调用 ID「speech-biasing」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/316/model_ref 需要人工核对：未自动关联：Provider 调用 ID「deepseek-v3.2」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/320/model_ref 需要人工核对：未自动关联：Provider 调用 ID「deepseek-v3.2-think」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/326/model_ref 需要人工核对：未自动关联：Provider 调用 ID「mimo-v2.6-pro-ultraspeed」没有匹配的规范 Model，保持 model_ref 为 null。
- 另有 2 项阻塞项。

### volcengine

- /services/cn/offerings/27/model_ref 需要人工核对：未自动关联：Provider 调用 ID「doubao-seedance-1-0-pro-250528」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/28/model_ref 需要人工核对：未自动关联：Provider 调用 ID「doubao-seedance-1-0-pro-fast-251015」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/38/model_ref 需要人工核对：未自动关联：Provider 调用 ID「doubao-embedding-vision-250615」没有匹配的规范 Model，保持 model_ref 为 null。

### tencent-tokenhub

- /services/cn/offerings/32/model_ref 需要人工核对：未自动关联：Provider 调用 ID「qwen3.5-flash」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/33/model_ref 需要人工核对：未自动关联：Provider 调用 ID「qwen3.5-plus」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/50/model_ref 需要人工核对：未自动关联：Provider 调用 ID「hy-image-v3.0」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/51/model_ref 需要人工核对：未自动关联：Provider 调用 ID「hy-image-lite」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/66/model_ref 需要人工核对：未自动关联：Provider 调用 ID「kl-video-v3」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/67/model_ref 需要人工核对：未自动关联：Provider 调用 ID「kl-video-v2-6」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/68/model_ref 需要人工核对：未自动关联：Provider 调用 ID「kl-video-v2-5-turbo」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/cn/offerings/69/model_ref 需要人工核对：未自动关联：Provider 调用 ID「kl-video-v2-1-master」没有匹配的规范 Model，保持 model_ref 为 null。
- 另有 17 项阻塞项。

### openai

- /services/global/offerings/16/model_ref 需要人工核对：未自动关联：Provider 调用 ID「gpt-4o-transcribe」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/17/model_ref 需要人工核对：未自动关联：Provider 调用 ID「gpt-4o-mini-transcribe」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/18/model_ref 需要人工核对：未自动关联：Provider 调用 ID「gpt-4o-transcribe-diarize」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/19/model_ref 需要人工核对：未自动关联：Provider 调用 ID「whisper-1」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/20/model_ref 需要人工核对：未自动关联：Provider 调用 ID「gpt-4o-mini-tts」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/38/model_ref 需要人工核对：未自动关联：Provider 调用 ID「gpt-5」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/39/model_ref 需要人工核对：未自动关联：Provider 调用 ID「gpt-5-mini」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/40/model_ref 需要人工核对：未自动关联：Provider 调用 ID「gpt-5-nano」没有匹配的规范 Model，保持 model_ref 为 null。
- 另有 21 项阻塞项。

### meta

- /services/global/offerings/0/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-wonder-1.0」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/1/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-spark-1.3」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/2/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-spark-1.3-contributor」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/3/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-spark-1.2」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/4/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-spark-1.2-contributor」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/5/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-spark-1.1」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/6/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-image-1.0」没有匹配的规范 Model，保持 model_ref 为 null。
- /services/global/offerings/7/model_ref 需要人工核对：未自动关联：Provider 调用 ID「muse-voice-transcribe-1.0」没有匹配的规范 Model，保持 model_ref 为 null。
- 另有 1 项阻塞项。

## 旧转换与 IR 字段对照

以下对照在隔离临时目录中以当前正式 Provider 与来源台账作为共同基线，分别运行旧 TFacts 转换与 IR 预览，不写入正式仓库数据。IR 预览沿用本轮未采集的必填档案值以便显示字段变更，并将其标记为未由本次来源核验；空基线的回放仍独立检查不会凭空补值。比较忽略 data_version、generated_at、provider.updated_at 等生成元数据；长字段值为可读性截断。字段差异属于待审阅证据，不自动等于迁移通过。

| Provider | 旧转换 | IR 投影 | Provider 字段差异 | 来源台账差异 | 结论 |
|---|---|---|---:|---:|---|
| `alibaba` | needs_review | needs_review | 721 | 7516 | 已生成字段级差异；比较时忽略 data_version、generated_at、provider.updated_at 等生成元数据，差异仍需领域审阅，不自动判定等价。 |
| `deepseek` | needs_review | needs_review | 75 | 245 | 已生成字段级差异；比较时忽略 data_version、generated_at、provider.updated_at 等生成元数据，差异仍需领域审阅，不自动判定等价。 |
| `moonshotai` | needs_review | needs_review | 134 | 816 | 已生成字段级差异；比较时忽略 data_version、generated_at、provider.updated_at 等生成元数据，差异仍需领域审阅，不自动判定等价。 |
| `stepfun` | needs_review | needs_review | 50 | 177 | 已生成字段级差异；比较时忽略 data_version、generated_at、provider.updated_at 等生成元数据，差异仍需领域审阅，不自动判定等价。 |
| `tencent-tokenhub` | needs_review | needs_review | 82 | 1726 | 已生成字段级差异；比较时忽略 data_version、generated_at、provider.updated_at 等生成元数据，差异仍需领域审阅，不自动判定等价。 |
| `volcengine` | needs_review | needs_review | 6 | 289 | 已生成字段级差异；比较时忽略 data_version、generated_at、provider.updated_at 等生成元数据，差异仍需领域审阅，不自动判定等价。 |
| `xiaomi` | needs_review | needs_review | 29 | 174 | 已生成字段级差异；比较时忽略 data_version、generated_at、provider.updated_at 等生成元数据，差异仍需领域审阅，不自动判定等价。 |

### alibaba 字段差异

| 更新 | /plans/cn-coding-plan-pro/billing_options/0/promotion_note | "首次订阅首月 ¥39.90，后续按 ¥200/月续费；需以官方下单页为准。" | "官方标注的新客首月特惠；适用资格和购买库存以官方下单页为准。" |
| 更新 | /plans/cn-coding-plan-pro/description | "限量销售；额度按模型调用次数消耗，使用量在 Coding Plan 页面查看。专用套餐 Key 与 Base URL 仅限编程工具交互式使用，不适用于自动化脚本或应用后端。" | "限量订阅套餐，仅用于官方允许的交互式编程工具场景；额度与可购买状态以官方套餐页面和下单页为准。" |
| 更新 | /plans/cn-coding-plan-pro/links/official | "https://help.aliyun.com/zh/model-studio/coding-plan" | "https://docs.bailian.console.aliyun.com/zh/model-studio/coding-plan" |
| 更新 | /plans/cn-coding-plan-pro/name | "Pro（Coding Plan）" | "Coding Plan Pro" |
| 更新 | /plans/cn-token-plan-personal-essential/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/cn-token-plan-personal-essential/links/official | "https://help.aliyun.com/zh/model-studio/token-plan-personal-overview" | "https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-overview" |
| 更新 | /plans/cn-token-plan-personal-extra-bundle/links/official | "https://help.aliyun.com/zh/model-studio/token-plan-personal-overview" | "https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-overview" |
| 更新 | /plans/cn-token-plan-personal-extra-bundle/name | "Extra Bundle（个人用量包）" | "个人共享用量包" |
| 更新 | /plans/cn-token-plan-personal-lite/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/cn-token-plan-personal-lite/links/official | "https://help.aliyun.com/zh/model-studio/token-plan-personal-overview" | "https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-overview" |
| 更新 | /plans/cn-token-plan-personal-pro/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/cn-token-plan-personal-pro/links/official | "https://help.aliyun.com/zh/model-studio/token-plan-personal-overview" | "https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-overview" |
| 更新 | /plans/cn-token-plan-personal-standard/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/cn-token-plan-personal-standard/links/official | "https://help.aliyun.com/zh/model-studio/token-plan-personal-overview" | "https://docs.bailian.console.aliyun.com/zh/model-studio/token-plan-overview" |
| 更新 | /plans/cn-token-plan-team-shared-pack/name | "共享用量包（团队）" | "团队共享用量包" |
| 更新 | /plans/global-coding-plan-pro/description | "官网列出 Pro 套餐并注明名额有限，售罄后不可购买。仅限支持的编程工具交互式使用，不适用于自动化脚本或应用后端；使用专用套餐 API Key 和 Base URL。" | "限量订阅套餐，仅用于官方允许的交互式编程工具场景；额度与可购买状态以官方套餐页面和下单页为准。" |
| 更新 | /plans/global-coding-plan-pro/name | "Pro（Coding Plan）" | "Coding Plan Pro" |
| 更新 | /plans/global-token-plan-personal-essential/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/global-token-plan-personal-extra-bundle/name | "Extra Bundle（个人用量包）" | "个人共享用量包" |
| 更新 | /plans/global-token-plan-personal-lite/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/global-token-plan-personal-pro/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/global-token-plan-personal-standard/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/global-token-plan-team-pro-seat/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 更新 | /plans/global-token-plan-team-shared-pack/name | "Shared quota pack（Team Edition）" | "团队共享用量包" |
| 更新 | /plans/global-token-plan-team-standard-seat/billing_options/0/promotion_note | "官网列为限时优惠；截止日期未披露。" | "官方列示的限时优惠价；适用资格与有效期以官方订购页为准。" |
| 新增 | /provider/docs/alibaba-anthropic-messages-api | — | "https://www.alibabacloud.com/help/en/model-studio/anthropic-api-messages" |
| 新增 | /provider/docs/alibaba-api-compatibility | — | "https://docs.bailian.console.aliyun.com/zh/model-studio/more-tools" |
| 新增 | /provider/docs/alibaba-global-api-base-url | — | "https://www.alibabacloud.com/help/en/model-studio/base-url" |
| 新增 | /provider/docs/alibaba-openai-chat-api | — | "https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions" |
| 更新 | /rate_cards/alibaba-cosyvoice-v2-7517fe1f-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-cosyvoice-v3-5-flash-d7bfb2c3-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-cosyvoice-v3-5-plus-4a44ec8e-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-cosyvoice-v3-flash-fe3bfdf6-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 新增 | /rate_cards/alibaba-cosyvoice-v3-flash-fe3bfdf6-detail-53c5dc/rules/ir-price-rule-0b2ccdcc78cd | — | {"id":"ir-price-rule-0b2ccdcc78cd","priority":2,"when":{"field":"deployment.region","op":"eq","value":"新加坡"},"rate_items":[{"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"0.9541"}]} |
| 更新 | /rate_cards/alibaba-cosyvoice-v3-plus-8ed0f3ab-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 新增 | /rate_cards/alibaba-cosyvoice-v3-plus-8ed0f3ab-detail-53c5dc/rules/ir-price-rule-aca282008004 | — | {"id":"ir-price-rule-aca282008004","priority":2,"when":{"field":"deployment.region","op":"eq","value":"新加坡"},"rate_items":[{"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"1.9082"}]} |
| 更新 | /rate_cards/alibaba-deepseek-v3-1-terminus-ac3c41c0-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 移除建议 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-1/when/all/1/all | [{"field":"usage.input_tokens","op":"gt","value":"0"},{"field":"usage.input_tokens","op":"lte","value":"32000"}] | — |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-1/when/all/1/field | — | "usage.input_tokens" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-1/when/all/1/op | — | "gt" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-1/when/all/1/value | — | "0" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-1/when/all/2 | — | {"field":"usage.input_tokens","op":"lte","value":"32000"} |
| 更新 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-2/priority | 20 | 2 |
| 移除建议 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-2/when/all/1/all | [{"field":"usage.input_tokens","op":"gt","value":"32000"},{"field":"usage.input_tokens","op":"lte","value":"198000"}] | — |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-2/when/all/1/field | — | "usage.input_tokens" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-2/when/all/1/op | — | "gt" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-2/when/all/1/value | — | "32000" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-174cb0/rules/alibaba-2/when/all/2 | — | {"field":"usage.input_tokens","op":"lte","value":"198000"} |
| 更新 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-1/priority | 10 | 1 |
| 移除建议 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-1/when/all/1/all | [{"field":"usage.input_tokens","op":"gt","value":"0"},{"field":"usage.input_tokens","op":"lte","value":"32000"}] | — |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-1/when/all/1/field | — | "usage.input_tokens" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-1/when/all/1/op | — | "gt" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-1/when/all/1/value | — | "0" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-1/when/all/2 | — | {"field":"usage.input_tokens","op":"lte","value":"32000"} |
| 更新 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-2/priority | 20 | 2 |
| 移除建议 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-2/when/all/1/all | [{"field":"usage.input_tokens","op":"gt","value":"32000"},{"field":"usage.input_tokens","op":"lte","value":"166000"}] | — |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-2/when/all/1/field | — | "usage.input_tokens" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-2/when/all/1/op | — | "gt" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-2/when/all/1/value | — | "32000" |
| 新增 | /rate_cards/alibaba-glm-5-1d4f9e93-c4997c/rules/alibaba-2/when/all/2 | — | {"field":"usage.input_tokens","op":"lte","value":"166000"} |
| 更新 | /rate_cards/alibaba-kimi-kimi-k2-5-745cb1bc-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 移除建议 | /rate_cards/alibaba-kimi-kimi-k2-6-f253f768-174cb0/rules/alibaba-1 | {"id":"alibaba-1","priority":10,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_1m_tokens","quantity":1,"amount_decimal":"6.5"},{"metric":"output","unit":"per_1m_tokens","quantity":1,"amount_decimal":"27"}]} | — |
| 移除建议 | /rate_cards/alibaba-kimi-kimi-k2-6-f253f768-174cb0/rules/alibaba-2 | {"id":"alibaba-2","priority":20,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_1m_tokens","quantity":1,"amount_decimal":"6.5"},{"metric":"output","unit":"per_1m_tokens","quantity":1,"amount_decimal":"27"}]} | — |
| 新增 | /rate_cards/alibaba-kimi-kimi-k2-6-f253f768-174cb0/rules/ir-price-rule-656e4a038951 | — | {"id":"ir-price-rule-656e4a038951","priority":1,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_1m_tokens","quantity":1,"amount_decimal":"6.5"},{"metric":"output","unit":"per_1m_tokens","quantity":1,"amount_decimal":"2… (284 字符) |
| 更新 | /rate_cards/alibaba-kimi-kimi-k2-7-code-highspeed-fb676c8d-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 移除建议 | /rate_cards/alibaba-kling-kling-v3-image-generation-37ded839-detail-bad6bb/rules/alibaba-detail-price | {"id":"alibaba-detail-price","priority":10,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"},{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"}]} | — |
| 新增 | /rate_cards/alibaba-kling-kling-v3-image-generation-37ded839-detail-bad6bb/rules/ir-price-rule-288b992ffb27 | — | {"id":"ir-price-rule-288b992ffb27","priority":2,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"}]} |
| 新增 | /rate_cards/alibaba-kling-kling-v3-image-generation-37ded839-detail-bad6bb/rules/ir-price-rule-d03ab8b14899 | — | {"id":"ir-price-rule-d03ab8b14899","priority":1,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"}]} |
| 移除建议 | /rate_cards/alibaba-kling-kling-v3-omni-image-generation-1dbfe801-detail-bad6bb/rules/alibaba-detail-price | {"id":"alibaba-detail-price","priority":10,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"},{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"},{"metric"… (345 字符) | — |
| 新增 | /rate_cards/alibaba-kling-kling-v3-omni-image-generation-1dbfe801-detail-bad6bb/rules/ir-price-rule-1df1ba026475 | — | {"id":"ir-price-rule-1df1ba026475","priority":2,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"}]} |
| 新增 | /rate_cards/alibaba-kling-kling-v3-omni-image-generation-1dbfe801-detail-bad6bb/rules/ir-price-rule-75aa7d19c62d | — | {"id":"ir-price-rule-75aa7d19c62d","priority":3,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.4"}]} |
| 新增 | /rate_cards/alibaba-kling-kling-v3-omni-image-generation-1dbfe801-detail-bad6bb/rules/ir-price-rule-f02460737194 | — | {"id":"ir-price-rule-f02460737194","priority":1,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"image","unit":"per_image","quantity":1,"amount_decimal":"0.2"}]} |
| 更新 | /rate_cards/alibaba-minimax-minimax-m2-1-e862ced2-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 移除建议 | /rate_cards/alibaba-minimax-minimax-m2-5-a2e9fd61-174cb0/rules/alibaba-1 | {"id":"alibaba-1","priority":10,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_1m_tokens","quantity":1,"amount_decimal":"2.1"},{"metric":"output","unit":"per_1m_tokens","quantity":1,"amount_decimal":"8.4"}]} | — |
| 移除建议 | /rate_cards/alibaba-minimax-minimax-m2-5-a2e9fd61-174cb0/rules/alibaba-2 | {"id":"alibaba-2","priority":20,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_1m_tokens","quantity":1,"amount_decimal":"2.1"},{"metric":"output","unit":"per_1m_tokens","quantity":1,"amount_decimal":"8.4"}]} | — |
| 新增 | /rate_cards/alibaba-minimax-minimax-m2-5-a2e9fd61-174cb0/rules/ir-price-rule-fd9fda904764 | — | {"id":"ir-price-rule-fd9fda904764","priority":1,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_1m_tokens","quantity":1,"amount_decimal":"2.1"},{"metric":"output","unit":"per_1m_tokens","quantity":1,"amount_decimal":"8… (285 字符) |
| 更新 | /rate_cards/alibaba-minimax-minimax-m2-7-52eb72ca-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-minimax-minimax-m3-1-flash-fdff6d11-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-minimax-minimax-m3-afbe411b-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-minimax-speech-02-hd-82cf6d99-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-minimax-speech-02-turbo-b5b1cf2c-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-minimax-speech-2-8-hd-b5586819-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 新增 | /rate_cards/alibaba-minimax-speech-2-8-hd-b5586819-detail-53c5dc/rules/alibaba-detail-price/rate_items/input | — | {"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"3.5"} |
| 移除建议 | /rate_cards/alibaba-minimax-speech-2-8-hd-b5586819-detail-53c5dc/rules/alibaba-detail-price/rate_items/output | {"metric":"output","unit":"per_10k_characters","quantity":1,"amount_decimal":"3.5"} | — |
| 更新 | /rate_cards/alibaba-minimax-speech-2-8-turbo-60bfe1c0-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-qwen-audio-3-0-tts-flash-13951e6f-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 新增 | /rate_cards/alibaba-qwen-audio-3-0-tts-flash-13951e6f-detail-53c5dc/rules/ir-price-rule-b6cd3ba420db | — | {"id":"ir-price-rule-b6cd3ba420db","priority":2,"when":{"field":"deployment.region","op":"eq","value":"新加坡"},"rate_items":[{"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"1.12413"}]} |
| 移除建议 | /rate_cards/alibaba-qwen-audio-3-0-tts-plus-4dfcc656-detail-53c5dc/rules/alibaba-detail-price | {"id":"alibaba-detail-price","priority":10,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"1.4"},{"metric":"output","unit":"per_10k_characters","quantity":1,"amount_decima… (288 字符) | — |
| 新增 | /rate_cards/alibaba-qwen-audio-3-0-tts-plus-4dfcc656-detail-53c5dc/rules/ir-price-rule-26418c539e7b | — | {"id":"ir-price-rule-26418c539e7b","priority":1,"when":{"field":"deployment.region","op":"eq","value":"华北2（北京）"},"rate_items":[{"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"1.4"}]} |
| 新增 | /rate_cards/alibaba-qwen-audio-3-0-tts-plus-4dfcc656-detail-53c5dc/rules/ir-price-rule-de357726eda0 | — | {"id":"ir-price-rule-de357726eda0","priority":2,"when":{"field":"deployment.region","op":"eq","value":"新加坡"},"rate_items":[{"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"1.49884"}]} |
| 更新 | /rate_cards/alibaba-qwen-audio-3-1-tts-plus-52dbf47a-detail-53c5dc/rules/alibaba-detail-price/priority | 10 | 1 |
| 新增 | /rate_cards/alibaba-qwen-audio-3-1-tts-plus-52dbf47a-detail-53c5dc/rules/ir-price-rule-f704cd85214a | — | {"id":"ir-price-rule-f704cd85214a","priority":2,"when":{"field":"deployment.region","op":"eq","value":"新加坡"},"rate_items":[{"metric":"input","unit":"per_10k_characters","quantity":1,"amount_decimal":"2.19"}]} |
| 更新 | /rate_cards/alibaba-qwen-deep-research-2025-12-15-a941bd71-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-qwen-deep-research-5ffe4430-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-qwen-deep-research-5ffe4430-c4997c/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-qwen-doc-turbo-6fc9d02d-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-qwen-doc-turbo-6fc9d02d-c4997c/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-qwen-flash-character-2026-02-26-7a53df79-174cb0/rules/alibaba-1/priority | 10 | 1 |
| 更新 | /rate_cards/alibaba-qwen-image-2-0-cc6b0434-detail-bad6bb/rules/alibaba-detail-price/priority | 10 | 1 |
- 另有 621 项 Provider 差异，详见 JSON 回放结果。
| 新增 | /bindings/~1plans~10~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-b194b6a6e3c2" |
| 新增 | /bindings/~1plans~10~1evidence_refs/3 | — | "ir-evidence-64146ab584e9" |
| 新增 | /bindings/~1plans~10~1evidence_refs/4 | — | "ir-evidence-a0ebc876dbc7" |
| 新增 | /bindings/~1plans~10~1evidence_refs/5 | — | "ir-evidence-351fbff917e5" |
| 新增 | /bindings/~1plans~10~1evidence_refs/6 | — | "ir-evidence-b194b6a6e3c2" |
| 新增 | /bindings/~1plans~11~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-3193717caf75" |
| 新增 | /bindings/~1plans~11~1evidence_refs/3 | — | "ir-evidence-b41b6bed610c" |
| 新增 | /bindings/~1plans~11~1evidence_refs/4 | — | "ir-evidence-548555b460b2" |
| 新增 | /bindings/~1plans~11~1evidence_refs/5 | — | "ir-evidence-52563208209e" |
| 新增 | /bindings/~1plans~11~1evidence_refs/6 | — | "ir-evidence-3193717caf75" |
| 新增 | /bindings/~1plans~110~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-6e4808ecf5e1" |
| 新增 | /bindings/~1plans~110~1evidence_refs/3 | — | "ir-evidence-b8bdacf82b7d" |
| 新增 | /bindings/~1plans~110~1evidence_refs/4 | — | "ir-evidence-14d7aa30712f" |
| 新增 | /bindings/~1plans~110~1evidence_refs/5 | — | "ir-evidence-27eafbd50f3e" |
| 新增 | /bindings/~1plans~110~1evidence_refs/6 | — | "ir-evidence-6e4808ecf5e1" |
| 新增 | /bindings/~1plans~111~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-2a79137a4b3d" |
| 新增 | /bindings/~1plans~111~1evidence_refs/3 | — | "ir-evidence-21fc49ab5b0b" |
| 新增 | /bindings/~1plans~111~1evidence_refs/4 | — | "ir-evidence-50ca1fe162a5" |
| 新增 | /bindings/~1plans~111~1evidence_refs/5 | — | "ir-evidence-ae28b03d3855" |
| 新增 | /bindings/~1plans~111~1evidence_refs/6 | — | "ir-evidence-2a79137a4b3d" |
| 新增 | /bindings/~1plans~112~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-2279cb5053ce" |
| 新增 | /bindings/~1plans~112~1evidence_refs/3 | — | "ir-evidence-243fc18bf93a" |
| 新增 | /bindings/~1plans~112~1evidence_refs/4 | — | "ir-evidence-7e55200e7c1c" |
| 新增 | /bindings/~1plans~112~1evidence_refs/5 | — | "ir-evidence-e302f82a7922" |
| 新增 | /bindings/~1plans~112~1evidence_refs/6 | — | "ir-evidence-2279cb5053ce" |
| 新增 | /bindings/~1plans~113~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-4cf8baae18a6" |
| 新增 | /bindings/~1plans~113~1evidence_refs/3 | — | "ir-evidence-e38a38b3b97c" |
| 新增 | /bindings/~1plans~113~1evidence_refs/4 | — | "ir-evidence-4686bd6951d7" |
| 新增 | /bindings/~1plans~113~1evidence_refs/5 | — | "ir-evidence-7db2eb78b058" |
| 新增 | /bindings/~1plans~113~1evidence_refs/6 | — | "ir-evidence-4cf8baae18a6" |
| 新增 | /bindings/~1plans~114~1billing_options~10~1evidence_refs/1 | — | "ir-evidence-df15657a739a" |
| 新增 | /bindings/~1plans~114~1evidence_refs/2 | — | "ir-evidence-3b37a33111c9" |
| 新增 | /bindings/~1plans~114~1evidence_refs/3 | — | "ir-evidence-d1a57b271458" |
| 新增 | /bindings/~1plans~114~1evidence_refs/4 | — | "ir-evidence-cb2020e6a973" |
| 新增 | /bindings/~1plans~114~1evidence_refs/5 | — | "ir-evidence-df15657a739a" |
| 新增 | /bindings/~1plans~115~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-c5aa508b4066" |
| 新增 | /bindings/~1plans~115~1evidence_refs/3 | — | "ir-evidence-9edd0a1b45d2" |
| 新增 | /bindings/~1plans~115~1evidence_refs/4 | — | "ir-evidence-58d90f5119a7" |
| 新增 | /bindings/~1plans~115~1evidence_refs/5 | — | "ir-evidence-e973bcf16e0a" |
| 新增 | /bindings/~1plans~115~1evidence_refs/6 | — | "ir-evidence-c5aa508b4066" |
| 新增 | /bindings/~1plans~116~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-513a47759bdf" |
| 新增 | /bindings/~1plans~116~1evidence_refs/3 | — | "ir-evidence-aee2122851a6" |
| 新增 | /bindings/~1plans~116~1evidence_refs/4 | — | "ir-evidence-bdfc735af1ed" |
| 新增 | /bindings/~1plans~116~1evidence_refs/5 | — | "ir-evidence-8aff7388adf8" |
| 新增 | /bindings/~1plans~116~1evidence_refs/6 | — | "ir-evidence-513a47759bdf" |
| 新增 | /bindings/~1plans~117~1billing_options~10~1evidence_refs/1 | — | "ir-evidence-8bda21eb4557" |
| 新增 | /bindings/~1plans~117~1evidence_refs/2 | — | "ir-evidence-de293ca33fd0" |
| 新增 | /bindings/~1plans~117~1evidence_refs/3 | — | "ir-evidence-e248140cc58a" |
| 新增 | /bindings/~1plans~117~1evidence_refs/4 | — | "ir-evidence-309ba63a89f9" |
| 新增 | /bindings/~1plans~117~1evidence_refs/5 | — | "ir-evidence-8bda21eb4557" |
| 新增 | /bindings/~1plans~118~1billing_options~10~1evidence_refs/1 | — | "ir-evidence-6ae6097c441e" |
| 新增 | /bindings/~1plans~118~1evidence_refs/2 | — | "ir-evidence-ccef980d05bd" |
| 新增 | /bindings/~1plans~118~1evidence_refs/3 | — | "ir-evidence-9b24eb116408" |
| 新增 | /bindings/~1plans~118~1evidence_refs/4 | — | "ir-evidence-33933d3b242f" |
| 新增 | /bindings/~1plans~118~1evidence_refs/5 | — | "ir-evidence-6ae6097c441e" |
| 新增 | /bindings/~1plans~119~1billing_options~10~1evidence_refs/1 | — | "ir-evidence-06e2180a519e" |
| 新增 | /bindings/~1plans~119~1evidence_refs/3 | — | "ir-evidence-8559c6f4d1b3" |
| 新增 | /bindings/~1plans~119~1evidence_refs/4 | — | "ir-evidence-f753044414e5" |
| 新增 | /bindings/~1plans~119~1evidence_refs/5 | — | "ir-evidence-0e373373904f" |
| 新增 | /bindings/~1plans~119~1evidence_refs/6 | — | "ir-evidence-a7e8e523c9b9" |
| 新增 | /bindings/~1plans~119~1evidence_refs/7 | — | "ir-evidence-06e2180a519e" |
| 新增 | /bindings/~1plans~12~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-7bb5424a7b9b" |
| 新增 | /bindings/~1plans~12~1evidence_refs/3 | — | "ir-evidence-0f7f886a5ba8" |
| 新增 | /bindings/~1plans~12~1evidence_refs/4 | — | "ir-evidence-72265d7f3394" |
| 新增 | /bindings/~1plans~12~1evidence_refs/5 | — | "ir-evidence-78198c01bf71" |
| 新增 | /bindings/~1plans~12~1evidence_refs/6 | — | "ir-evidence-7bb5424a7b9b" |
| 新增 | /bindings/~1plans~13~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-71d6d5cbeb19" |
| 新增 | /bindings/~1plans~13~1evidence_refs/3 | — | "ir-evidence-310bb00c4727" |
| 新增 | /bindings/~1plans~13~1evidence_refs/4 | — | "ir-evidence-cdc9a605cfdb" |
| 新增 | /bindings/~1plans~13~1evidence_refs/5 | — | "ir-evidence-cb670e1370c9" |
| 新增 | /bindings/~1plans~13~1evidence_refs/6 | — | "ir-evidence-71d6d5cbeb19" |
| 新增 | /bindings/~1plans~14~1billing_options~10~1evidence_refs/1 | — | "ir-evidence-3f718a5af361" |
| 新增 | /bindings/~1plans~14~1evidence_refs/2 | — | "ir-evidence-e1a5424b5d99" |
| 新增 | /bindings/~1plans~14~1evidence_refs/3 | — | "ir-evidence-dafcca8cec0c" |
| 新增 | /bindings/~1plans~14~1evidence_refs/4 | — | "ir-evidence-bdab4cae08e4" |
| 新增 | /bindings/~1plans~14~1evidence_refs/5 | — | "ir-evidence-3f718a5af361" |
| 新增 | /bindings/~1plans~18~1billing_options~10~1evidence_refs/1 | — | "ir-evidence-924e36744e90" |
| 新增 | /bindings/~1plans~18~1evidence_refs/2 | — | "ir-evidence-fb214650ac64" |
| 新增 | /bindings/~1plans~18~1evidence_refs/3 | — | "ir-evidence-76d2e6073561" |
| 新增 | /bindings/~1plans~18~1evidence_refs/4 | — | "ir-evidence-0252e55e4277" |
| 新增 | /bindings/~1plans~18~1evidence_refs/5 | — | "ir-evidence-924e36744e90" |
| 新增 | /bindings/~1plans~19~1billing_options~10~1evidence_refs/2 | — | "ir-evidence-885622387659" |
| 新增 | /bindings/~1plans~19~1evidence_refs/2 | — | "ir-evidence-f00b09b792e4" |
| 新增 | /bindings/~1plans~19~1evidence_refs/3 | — | "ir-evidence-dc05d6b66ccf" |
| 新增 | /bindings/~1plans~19~1evidence_refs/4 | — | "ir-evidence-ab6550cc1035" |
| 新增 | /bindings/~1plans~19~1evidence_refs/5 | — | "ir-evidence-a5b8a03d44e2" |
| 新增 | /bindings/~1plans~19~1evidence_refs/6 | — | "ir-evidence-885622387659" |
| 新增 | /bindings/~1provider~1sources/325 | — | "alibaba-openai-chat-api" |
| 新增 | /bindings/~1provider~1sources/326 | — | "alibaba-anthropic-messages-api" |
| 新增 | /bindings/~1rate_cards~1103~1rules~10~1source_refs/1 | — | "ir-evidence-e65c3fe8688f" |
| 新增 | /bindings/~1rate_cards~1103~1source_refs/1 | — | "ir-evidence-d2c8707e1b74" |
| 新增 | /bindings/~1rate_cards~1156~1rules~10~1source_refs/1 | — | "ir-evidence-40f7969a3bea" |
| 新增 | /bindings/~1rate_cards~1156~1source_refs/1 | — | "ir-evidence-dae6857013fb" |
| 新增 | /bindings/~1rate_cards~1160~1rules~10~1source_refs/1 | — | "ir-evidence-34e6a8438bba" |
| 新增 | /bindings/~1rate_cards~1160~1source_refs/1 | — | "ir-evidence-1a15c78a99c1" |
| 新增 | /bindings/~1rate_cards~1165~1rules~10~1source_refs/1 | — | "ir-evidence-b953260f9b6c" |
| 新增 | /bindings/~1rate_cards~1165~1rules~11~1source_refs/1 | — | "ir-evidence-2fc2508ad811" |
| 新增 | /bindings/~1rate_cards~1165~1rules~12~1source_refs/1 | — | "ir-evidence-e4dbaac509e5" |
| 新增 | /bindings/~1rate_cards~1165~1rules~13~1source_refs/1 | — | "ir-evidence-504ef09d6d7e" |
| 新增 | /bindings/~1rate_cards~1165~1source_refs/1 | — | "ir-evidence-723848596ccf" |
- 另有 7416 项来源台账差异，详见 JSON 回放结果。

### deepseek 字段差异

| 新增 | /plans | — | [] |
| 更新 | /rate_cards/cn-web-fetch-price/rules/per-thousand-successful-requests/priority | 10 | 1 |
| 更新 | /rate_cards/cn-web-search-price/rules/per-thousand-successful-requests/priority | 10 | 1 |
| 更新 | /rate_cards/deepseek-flash-ade297f4-cny/rules/off-peak/priority | 10 | 1 |
| 更新 | /rate_cards/deepseek-flash-ade297f4-cny/rules/peak/priority | 20 | 2 |
| 更新 | /rate_cards/deepseek-flash-ade297f4-usd/rules/off-peak/priority | 10 | 1 |
| 更新 | /rate_cards/deepseek-flash-ade297f4-usd/rules/off-peak/rate_items/output/amount_decimal | "0.60" | "0.6" |
| 更新 | /rate_cards/deepseek-flash-ade297f4-usd/rules/peak/priority | 20 | 2 |
| 更新 | /rate_cards/deepseek-flash-ade297f4-usd/rules/peak/rate_items/input/amount_decimal | "0.30" | "0.3" |
| 更新 | /rate_cards/deepseek-flash-ade297f4-usd/rules/peak/rate_items/output/amount_decimal | "1.20" | "1.2" |
| 更新 | /rate_cards/deepseek-v4-pro-83bb6b28-cny/rules/off-peak/priority | 10 | 1 |
| 更新 | /rate_cards/deepseek-v4-pro-83bb6b28-cny/rules/peak/priority | 20 | 2 |
| 更新 | /rate_cards/deepseek-v4-pro-83bb6b28-cny/rules/peak/rate_items/input/amount_decimal | "9" | "9.0" |
| 更新 | /rate_cards/deepseek-v4-pro-83bb6b28-cny/rules/peak/rate_items/output/amount_decimal | "27" | "27.0" |
| 更新 | /rate_cards/deepseek-v4-pro-83bb6b28-usd/rules/off-peak/priority | 10 | 1 |
| 更新 | /rate_cards/deepseek-v4-pro-83bb6b28-usd/rules/peak/priority | 20 | 2 |
| 更新 | /rate_cards/global-web-fetch-price/rules/per-thousand-successful-requests/priority | 10 | 1 |
| 更新 | /rate_cards/global-web-search-price/rules/per-thousand-successful-requests/priority | 10 | 1 |
| 更新 | /services/cn/endpoints/cn-anthropic-compatible/api_region | "全球" | "未标注" |
| 更新 | /services/cn/endpoints/cn-openai-compatible/api_region | "全球" | "未标注" |
| 更新 | /services/cn/endpoints/cn-openai-compatible/documentation | "https://api-docs.deepseek.com/zh-cn/api/create-chat-completion/" | "https://api-docs.deepseek.com/zh-cn/guides/search/" |
| 更新 | /services/cn/name | "中国市场" | "中国区" |
| 新增 | /services/cn/offerings/deepseek-flash/api_capabilities/anthropic_messages | — | true |
| 新增 | /services/cn/offerings/deepseek-flash/api_capabilities/image_input | — | true |
| 更新 | /services/cn/offerings/deepseek-flash/display_name | "deepseek-flash" | "DeepSeek-V4.1-Flash" |
| 更新 | /services/cn/offerings/deepseek-flash/operations/text_generation/document_ref | "deepseek-chat-api" | "deepseek-cn-chat-api" |
| 新增 | /services/cn/offerings/deepseek-flash/operations/text_generation/routes/cn-chat-completions/request_model_id | — | "deepseek-flash" |
| 新增 | /services/cn/offerings/deepseek-flash/operations/text_generation/routes/cn-responses/request_model_id | — | "deepseek-flash" |
| 新增 | /services/cn/offerings/deepseek-v4-pro/api_capabilities/anthropic_messages | — | true |
| 更新 | /services/cn/offerings/deepseek-v4-pro/display_name | "deepseek-v4-pro" | "DeepSeek-V4-Pro" |
| 更新 | /services/cn/offerings/deepseek-v4-pro/operations/text_generation/document_ref | "deepseek-chat-api" | "deepseek-cn-chat-api" |
| 新增 | /services/cn/offerings/deepseek-v4-pro/operations/text_generation/routes/cn-chat-completions/request_model_id | — | "deepseek-v4-pro" |
| 新增 | /services/cn/offerings/deepseek-v4-pro/operations/text_generation/routes/cn-responses/request_model_id | — | "deepseek-v4-pro" |
| 更新 | /services/cn/service_capabilities/cn-web-fetch/availability/checked_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/cn/service_capabilities/cn-web-fetch/lifecycle/observed_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/cn/service_capabilities/cn-web-fetch/operations/fetch/input_slots/0/description | "HTTP/HTTPS 页面地址，最多 8192 字符。" | "要抓取的网页地址，长度不超过 8192，必须为含 host 的 HTTP/HTTPS URL，且不能携带用户名或密码。" |
| 更新 | /services/cn/service_capabilities/cn-web-fetch/operations/fetch/routes/fetch/protocol | "http" | "rest-json" |
| 更新 | /services/cn/service_capabilities/cn-web-search/availability/checked_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/cn/service_capabilities/cn-web-search/lifecycle/observed_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/cn/service_capabilities/cn-web-search/operations/search/input_slots/0/description | "1–128 个 Unicode 字符的搜索词。" | "搜索词，1～128 个 Unicode 字符，不能全为空白，支持下方列出的搜索语法。" |
| 新增 | /services/cn/service_capabilities/cn-web-search/operations/search/parameters/0/description | — | "返回条数，1～50。" |
| 新增 | /services/cn/service_capabilities/cn-web-search/operations/search/parameters/1/description | — | "触发搜索的用户原始问题，1～128 个字符，有助于更好地理解搜索意图，传 null 视为未提供。" |
| 新增 | /services/cn/service_capabilities/cn-web-search/operations/search/parameters/1/max | — | 128 |
| 新增 | /services/cn/service_capabilities/cn-web-search/operations/search/parameters/1/min | — | 1 |
| 新增 | /services/cn/service_capabilities/cn-web-search/operations/search/parameters/2/default | — | "" |
| 新增 | /services/cn/service_capabilities/cn-web-search/operations/search/parameters/2/description | — | "用于优先返回本地化搜索结果的 IP 地址。" |
| 新增 | /services/cn/service_capabilities/cn-web-search/operations/search/parameters/3/description | — | "是否在 content 中返回网页正文，为 false 时 content 恒为空字符串。" |
| 更新 | /services/cn/service_capabilities/cn-web-search/operations/search/routes/search/protocol | "http" | "rest-json" |
| 更新 | /services/global/endpoints/anthropic-compatible/api_region | "全球" | "未标注" |
| 更新 | /services/global/endpoints/openai-compatible/api_region | "全球" | "未标注" |
| 更新 | /services/global/endpoints/openai-compatible/documentation | "https://api-docs.deepseek.com/api/create-chat-completion/" | "https://api-docs.deepseek.com/guides/search/" |
| 新增 | /services/global/offerings/deepseek-flash/api_capabilities/anthropic_messages | — | true |
| 新增 | /services/global/offerings/deepseek-flash/api_capabilities/image_input | — | true |
| 更新 | /services/global/offerings/deepseek-flash/display_name | "deepseek-flash" | "DeepSeek-V4.1-Flash" |
| 新增 | /services/global/offerings/deepseek-flash/operations/text_generation/routes/chat-completions | — | {"id":"chat-completions","endpoint_ref":"openai-compatible","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"deepseek-flash","documentation":"https://api-docs.deepseek.com/api/create-chat-completion/"} |
| 新增 | /services/global/offerings/deepseek-flash/operations/text_generation/routes/responses | — | {"id":"responses","endpoint_ref":"openai-compatible","protocol":"responses","method":"POST","path_template":"/responses","request_model_id":"deepseek-flash","documentation":"https://api-docs.deepseek.com/api/create-response/"} |
| 新增 | /services/global/offerings/deepseek-v4-pro/api_capabilities/anthropic_messages | — | true |
| 更新 | /services/global/offerings/deepseek-v4-pro/display_name | "deepseek-v4-pro" | "DeepSeek-V4-Pro" |
| 新增 | /services/global/offerings/deepseek-v4-pro/operations/text_generation/routes/chat-completions | — | {"id":"chat-completions","endpoint_ref":"openai-compatible","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"deepseek-v4-pro","documentation":"https://api-docs.deepseek.com/api/create-chat-completion/"} |
| 新增 | /services/global/offerings/deepseek-v4-pro/operations/text_generation/routes/responses | — | {"id":"responses","endpoint_ref":"openai-compatible","protocol":"responses","method":"POST","path_template":"/responses","request_model_id":"deepseek-v4-pro","documentation":"https://api-docs.deepseek.com/api/create-response/"} |
| 更新 | /services/global/service_capabilities/global-web-fetch/availability/checked_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/global/service_capabilities/global-web-fetch/lifecycle/observed_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/global/service_capabilities/global-web-fetch/operations/fetch/input_slots/0/description | "HTTP/HTTPS 页面地址，最多 8192 字符。" | "The page URL to fetch, which must be at most 8192 characters, an HTTP or HTTPS URL with a host, and must not contain a username or password." |
| 更新 | /services/global/service_capabilities/global-web-fetch/operations/fetch/routes/fetch/protocol | "http" | "rest-json" |
| 更新 | /services/global/service_capabilities/global-web-search/availability/checked_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/global/service_capabilities/global-web-search/lifecycle/observed_at | "2026-10-25T06:47:34.471Z" | "2026-10-25T06:47:34.441Z" |
| 更新 | /services/global/service_capabilities/global-web-search/operations/search/input_slots/0/description | "1–128 个 Unicode 字符的搜索词。" | "The search query must contain 1 to 128 Unicode characters, cannot be all whitespace, and supports the query operators listed below." |
| 新增 | /services/global/service_capabilities/global-web-search/operations/search/parameters/0/description | — | "The number of results to return, between 1 and 50." |
| 新增 | /services/global/service_capabilities/global-web-search/operations/search/parameters/1/description | — | "The user's original question that triggered the search, between 1 and 128 characters, to improve query understanding, with null treated as not provided." |
| 新增 | /services/global/service_capabilities/global-web-search/operations/search/parameters/1/max | — | 128 |
| 新增 | /services/global/service_capabilities/global-web-search/operations/search/parameters/1/min | — | 1 |
| 新增 | /services/global/service_capabilities/global-web-search/operations/search/parameters/2/default | — | "" |
| 新增 | /services/global/service_capabilities/global-web-search/operations/search/parameters/2/description | — | "An optional IP address used to localize search results." |
| 新增 | /services/global/service_capabilities/global-web-search/operations/search/parameters/3/description | — | "Whether to return page content in content , which is always an empty string when false ." |
| 更新 | /services/global/service_capabilities/global-web-search/operations/search/routes/search/protocol | "http" | "rest-json" |
| 新增 | /bindings/~1provider~1sources | — | ["deepseek-pricing","deepseek-models-api","deepseek-updates","deepseek-chat-api","deepseek-responses-api","deepseek-anthropic-api","deepseek-search-pricing","deepseek-cn-pricing","deepseek-cn-models-api","deepseek-cn-chat-api","deepseek-cn-responses-api","deepseek-cn-anthropic-a… (310 字符) |
| 新增 | /bindings/~1rate_cards~10~1rules~10~1source_refs | — | ["ir-evidence-f1928955649b"] |
| 新增 | /bindings/~1rate_cards~10~1rules~11~1source_refs | — | ["ir-evidence-e26e9a773fbb"] |
| 新增 | /bindings/~1rate_cards~10~1source_refs | — | ["ir-evidence-f2ecadcf9127","ir-evidence-3f51298674d7"] |
| 新增 | /bindings/~1rate_cards~11~1rules~10~1source_refs | — | ["ir-evidence-afd4b78e8d62"] |
| 新增 | /bindings/~1rate_cards~11~1rules~11~1source_refs | — | ["ir-evidence-964fa608fee6"] |
| 新增 | /bindings/~1rate_cards~11~1source_refs | — | ["ir-evidence-bf511d1df8af","ir-evidence-ae2c15d55062"] |
| 新增 | /bindings/~1rate_cards~12~1rules~10~1source_refs | — | ["ir-evidence-eddd00b685e3"] |
| 新增 | /bindings/~1rate_cards~12~1rules~11~1source_refs | — | ["ir-evidence-05f6b9cfce4e"] |
| 新增 | /bindings/~1rate_cards~12~1source_refs | — | ["ir-evidence-03942475c409","ir-evidence-490ced2af465"] |
| 新增 | /bindings/~1rate_cards~13~1rules~10~1source_refs | — | ["ir-evidence-e1ac14896efe"] |
| 新增 | /bindings/~1rate_cards~13~1rules~11~1source_refs | — | ["ir-evidence-6043dff45155"] |
| 新增 | /bindings/~1rate_cards~13~1source_refs | — | ["ir-evidence-917a3c91e1ff","ir-evidence-ace7fe6f0f82"] |
| 新增 | /bindings/~1rate_cards~14~1rules~10~1source_refs | — | ["ir-evidence-f91cf6a8d5c1"] |
| 新增 | /bindings/~1rate_cards~14~1source_refs | — | ["ir-evidence-8a1e4b9832ae"] |
| 新增 | /bindings/~1rate_cards~15~1rules~10~1source_refs | — | ["ir-evidence-5d0ea7b5d7f9"] |
| 新增 | /bindings/~1rate_cards~15~1source_refs | — | ["ir-evidence-dc210fef6424"] |
| 新增 | /bindings/~1rate_cards~16~1rules~10~1source_refs | — | ["ir-evidence-451c62ea45ff"] |
| 新增 | /bindings/~1rate_cards~16~1source_refs | — | ["ir-evidence-16474aeea073"] |
| 新增 | /bindings/~1rate_cards~17~1rules~10~1source_refs | — | ["ir-evidence-ca53a78cf8af"] |
| 新增 | /bindings/~1rate_cards~17~1source_refs | — | ["ir-evidence-5f542459d173"] |
| 新增 | /bindings/~1services~10~1offerings~10~1evidence_refs | — | ["ir-evidence-348902d08e8d"] |
| 新增 | /bindings/~1services~10~1offerings~11~1evidence_refs | — | ["ir-evidence-d06b0aefa69c"] |
| 新增 | /bindings/~1services~10~1service_capabilities~10~1availability~1evidence_refs | — | ["ir-evidence-d554b8ad7137"] |
| 新增 | /bindings/~1services~10~1service_capabilities~10~1evidence_refs | — | ["ir-evidence-6665e9c6f40e"] |
| 新增 | /bindings/~1services~10~1service_capabilities~10~1lifecycle~1evidence_refs | — | ["ir-evidence-90a708f53b2a"] |
| 新增 | /bindings/~1services~10~1service_capabilities~11~1availability~1evidence_refs | — | ["ir-evidence-141fb4c0da1b"] |
| 新增 | /bindings/~1services~10~1service_capabilities~11~1evidence_refs | — | ["ir-evidence-aecb58bc4c35"] |
| 新增 | /bindings/~1services~10~1service_capabilities~11~1lifecycle~1evidence_refs | — | ["ir-evidence-21b0e5dc4d11"] |
| 新增 | /bindings/~1services~10~1sources | — | ["deepseek-pricing","deepseek-search-pricing","deepseek-anthropic-api","deepseek-models-api","deepseek-chat-api","deepseek-responses-api"] |
| 新增 | /bindings/~1services~11~1offerings~10~1evidence_refs | — | ["ir-evidence-8b81a3b95e5d"] |
| 新增 | /bindings/~1services~11~1offerings~11~1evidence_refs | — | ["ir-evidence-32deaa1d24a2"] |
| 新增 | /bindings/~1services~11~1service_capabilities~10~1availability~1evidence_refs | — | ["ir-evidence-b78a31ba50b6"] |
| 新增 | /bindings/~1services~11~1service_capabilities~10~1evidence_refs | — | ["ir-evidence-5fade740f5ce"] |
| 新增 | /bindings/~1services~11~1service_capabilities~10~1lifecycle~1evidence_refs | — | ["ir-evidence-59668e4d4e44"] |
| 新增 | /bindings/~1services~11~1service_capabilities~11~1availability~1evidence_refs | — | ["ir-evidence-59e96cbb155e"] |
| 新增 | /bindings/~1services~11~1service_capabilities~11~1evidence_refs | — | ["ir-evidence-8bedc3cf0d6a"] |
| 新增 | /bindings/~1services~11~1service_capabilities~11~1lifecycle~1evidence_refs | — | ["ir-evidence-659cdd535c27"] |
| 新增 | /bindings/~1services~11~1sources | — | ["deepseek-cn-pricing","deepseek-cn-search-guide","deepseek-cn-anthropic-api","deepseek-cn-models-api","deepseek-cn-chat-api","deepseek-cn-responses-api"] |
| 新增 | /evidence/ir-evidence-03942475c409 | — | {"id":"ir-evidence-03942475c409","source_ref":"deepseek-pricing","field":"/services/global/offerings/1/prices/0/rules","locator":"pricing/deepseek-v4-pro/off_peak","assertion":"国际官方价格表中 deepseek-v4-pro 的 空闲时段价格。"} |
| 新增 | /evidence/ir-evidence-05f6b9cfce4e | — | {"id":"ir-evidence-05f6b9cfce4e","source_ref":"deepseek-pricing","field":"/services/global/offerings/1/prices/0/rules/1/evidence/0","locator":"pricing/deepseek-v4-pro/peak","assertion":"国际官方价格表中 deepseek-v4-pro 的 高峰时段价格。"} |
| 新增 | /evidence/ir-evidence-062a7ece539a | — | {"id":"ir-evidence-062a7ece539a","source_ref":"deepseek-responses-api","field":"/services/global/offerings/1/operations/0/routes/1/endpoint_ref","locator":"#endpoint","assertion":"Route 关联同一市场官方文档所示 Base URL。"} |
| 新增 | /evidence/ir-evidence-07c91f7611ef | — | {"id":"ir-evidence-07c91f7611ef","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/operations/0/routes/0/path_template","locator":"#/v1/tools/fetch","assertion":"从官方文档端点示例提取。"} |
| 新增 | /evidence/ir-evidence-08f73855d258 | — | {"id":"ir-evidence-08f73855d258","source_ref":"deepseek-cn-responses-api","field":"/services/cn/offerings/1/operations/0/routes/1/endpoint_ref","locator":"#endpoint","assertion":"Route 关联同一市场官方文档所示 Base URL。"} |
| 新增 | /evidence/ir-evidence-09859d3c0f1c | — | {"id":"ir-evidence-09859d3c0f1c","source_ref":"deepseek-pricing","field":"/services/global/offerings/0/service_id","locator":"pricing/model/deepseek-flash"} |
| 新增 | /evidence/ir-evidence-09fcc755e3dc | — | {"id":"ir-evidence-09fcc755e3dc","source_ref":"deepseek-cn-responses-api","field":"/services/cn/offerings/0/operations/0/routes/1/operation_kind","locator":"#/responses","assertion":"官方端点用于创建模型生成响应。"} |
| 新增 | /evidence/ir-evidence-0bee4144076a | — | {"id":"ir-evidence-0bee4144076a","source_ref":"deepseek-cn-chat-api","field":"/services/cn/offerings/1/operations/0/kind","locator":"#text-generation","assertion":"官方端点用途为创建文本生成响应。"} |
| 新增 | /evidence/ir-evidence-0e8721fba526 | — | {"id":"ir-evidence-0e8721fba526","source_ref":"deepseek-chat-api","field":"/services/global/offerings/0/operations/0/routes/0/protocol","locator":"#/chat/completions","assertion":"从官方 API 文档协议格式映射。"} |
| 新增 | /evidence/ir-evidence-0ed9f9ad2043 | — | {"id":"ir-evidence-0ed9f9ad2043","source_ref":"deepseek-cn-pricing","field":"/services/cn/offerings/1/service_id","locator":"pricing/model/deepseek-v4-pro"} |
| 新增 | /evidence/ir-evidence-0f0e7bc8072d | — | {"id":"ir-evidence-0f0e7bc8072d","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/0/operations/0/routes/0/endpoint_ref","locator":"#base-url","assertion":"Route 使用同一官方资料列出的 Base URL。"} |
| 新增 | /evidence/ir-evidence-0f2da9d0610a | — | {"id":"ir-evidence-0f2da9d0610a","source_ref":"deepseek-cn-pricing","field":"/services/cn/billing_currencies","locator":"pricing/market"} |
| 新增 | /evidence/ir-evidence-0fd625986fe0 | — | {"id":"ir-evidence-0fd625986fe0","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/account_market","locator":"#market","assertion":"来源为对应市场官方文档。"} |
| 新增 | /evidence/ir-evidence-141fb4c0da1b | — | {"id":"ir-evidence-141fb4c0da1b","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/availability","locator":"#/v1/tools/fetch","assertion":"当前官方文档对该市场公开了此独立能力 API。"} |
| 新增 | /evidence/ir-evidence-14fb66d6c1c2 | — | {"id":"ir-evidence-14fb66d6c1c2","source_ref":"deepseek-cn-responses-api","field":"/services/cn/offerings/0/operations/0/routes/1/method","locator":"#/responses","assertion":"官方端点表列出 POST 方法。"} |
| 新增 | /evidence/ir-evidence-16474aeea073 | — | {"id":"ir-evidence-16474aeea073","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/prices/0/rules","locator":"pricing/search/per-1000-successful-requests","assertion":"官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。"} |
| 新增 | /evidence/ir-evidence-197e99e42640 | — | {"id":"ir-evidence-197e99e42640","source_ref":"deepseek-cn-anthropic-api","field":"/services/cn/endpoints/1/base_url","locator":"#base-url","assertion":"从官方 Anthropic 兼容文档样例读取 Base URL。"} |
| 新增 | /evidence/ir-evidence-1b587ddd83e3 | — | {"id":"ir-evidence-1b587ddd83e3","source_ref":"deepseek-cn-chat-api","field":"/services/cn/offerings/1/operations/0/routes/0/path_template","locator":"#/chat/completions","assertion":"从官方 API 文档端点表提取路径。"} |
| 新增 | /evidence/ir-evidence-1df3e33c8352 | — | {"id":"ir-evidence-1df3e33c8352","source_ref":"deepseek-search-pricing","field":"/services/global/endpoints/0/transport","locator":"#base-url","assertion":"官方 Base URL 使用 HTTPS。"} |
| 新增 | /evidence/ir-evidence-1eebe381a6aa | — | {"id":"ir-evidence-1eebe381a6aa","source_ref":"deepseek-pricing","field":"/services/global/id","locator":"pricing/market"} |
| 新增 | /evidence/ir-evidence-1fecda732207 | — | {"id":"ir-evidence-1fecda732207","source_ref":"deepseek-cn-pricing","field":"/services/cn/offerings/0/service_id","locator":"pricing/model/deepseek-flash"} |
| 新增 | /evidence/ir-evidence-20f49217df43 | — | {"id":"ir-evidence-20f49217df43","source_ref":"deepseek-cn-pricing","field":"/services/cn/account_market","locator":"pricing/market"} |
| 新增 | /evidence/ir-evidence-21b0e5dc4d11 | — | {"id":"ir-evidence-21b0e5dc4d11","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/lifecycle","locator":"#/v1/tools/fetch","assertion":"当前官方文档列出该独立能力端点。"} |
| 新增 | /evidence/ir-evidence-22f72c84c34a | — | {"id":"ir-evidence-22f72c84c34a","source_ref":"deepseek-pricing","field":"/services/global/billing_currencies","locator":"pricing/market"} |
| 新增 | /evidence/ir-evidence-230b7f2e730a | — | {"id":"ir-evidence-230b7f2e730a","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/operations/0/routes/0/callability","locator":"#/v1/tools/search","assertion":"官方文档列出端点与参数；本采集没有执行 API 调用探测。"} |
| 新增 | /evidence/ir-evidence-23155c13142f | — | {"id":"ir-evidence-23155c13142f","source_ref":"deepseek-cn-responses-api","field":"/services/cn/offerings/1/operations/0/routes/1/method","locator":"#/responses","assertion":"官方端点表列出 POST 方法。"} |
| 新增 | /evidence/ir-evidence-241ee1a9c59b | — | {"id":"ir-evidence-241ee1a9c59b","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/operations/0/routes/0/operation_kind","locator":"#/v1/tools/search","assertion":"官方端点功能映射。"} |
| 新增 | /evidence/ir-evidence-24bb0a014387 | — | {"id":"ir-evidence-24bb0a014387","source_ref":"deepseek-search-pricing","field":"/services/global/endpoints/0/base_url","locator":"#base-url","assertion":"从官方资料明示的 Base URL 读取，不拼接服务商域名。"} |
| 新增 | /evidence/ir-evidence-29bb5c9fbfdd | — | {"id":"ir-evidence-29bb5c9fbfdd","source_ref":"deepseek-cn-models-api","field":"/services/cn/offerings/1/display_name","locator":"#deepseek-v4-pro/name"} |
| 新增 | /evidence/ir-evidence-2c0a04584314 | — | {"id":"ir-evidence-2c0a04584314","source_ref":"deepseek-models-api","field":"/services/global/offerings/0/api_limits","locator":"#deepseek-flash","assertion":"官方模型列表响应列出上下文窗口和最大输出 Token。"} |
| 新增 | /evidence/ir-evidence-2dc8b3d0581f | — | {"id":"ir-evidence-2dc8b3d0581f","source_ref":"deepseek-responses-api","field":"/services/global/offerings/1/operations/0/routes/1/id","locator":"#/responses","assertion":"官方文档列出 POST /responses，且请求模型枚举包含 deepseek-v4-pro。"} |
| 新增 | /evidence/ir-evidence-2e172ecbe47d | — | {"id":"ir-evidence-2e172ecbe47d","source_ref":"deepseek-chat-api","field":"/services/global/offerings/1/operations/0/routes/0/endpoint_ref","locator":"#endpoint","assertion":"Route 关联同一市场官方文档所示 Base URL。"} |
| 新增 | /evidence/ir-evidence-2f7ddf5633ad | — | {"id":"ir-evidence-2f7ddf5633ad","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/0/operations/0/routes/0/operation_kind","locator":"#/v1/tools/search","assertion":"官方端点功能映射。"} |
| 新增 | /evidence/ir-evidence-31710ee6b86d | — | {"id":"ir-evidence-31710ee6b86d","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/operations/0/routes/0/path_template","locator":"#/v1/tools/search","assertion":"从官方文档端点示例提取。"} |
| 新增 | /evidence/ir-evidence-32deaa1d24a2 | — | {"id":"ir-evidence-32deaa1d24a2","source_ref":"deepseek-cn-pricing","field":"/services/cn/offerings/1/provider_model_id","locator":"pricing/model/deepseek-v4-pro"} |
| 新增 | /evidence/ir-evidence-348902d08e8d | — | {"id":"ir-evidence-348902d08e8d","source_ref":"deepseek-pricing","field":"/services/global/offerings/0/provider_model_id","locator":"pricing/model/deepseek-flash"} |
| 新增 | /evidence/ir-evidence-38a29375b411 | — | {"id":"ir-evidence-38a29375b411","source_ref":"deepseek-cn-anthropic-api","field":"/services/cn/endpoints/1/transport","locator":"#base-url","assertion":"官方 Base URL 使用 HTTPS。"} |
| 新增 | /evidence/ir-evidence-3a56e99dae6f | — | {"id":"ir-evidence-3a56e99dae6f","source_ref":"deepseek-cn-search-guide","field":"/services/cn/endpoints/0/base_url","locator":"#base-url","assertion":"从官方资料明示的 Base URL 读取，不拼接服务商域名。"} |
| 新增 | /evidence/ir-evidence-3f51298674d7 | — | {"id":"ir-evidence-3f51298674d7","source_ref":"deepseek-pricing","field":"/services/global/offerings/0/prices/0/rules","locator":"pricing/deepseek-flash/peak","assertion":"国际官方价格表中 deepseek-flash 的 高峰时段价格。"} |
| 新增 | /evidence/ir-evidence-416c46f1bc35 | — | {"id":"ir-evidence-416c46f1bc35","source_ref":"deepseek-responses-api","field":"/services/global/offerings/0/operations/0/routes/1/endpoint_ref","locator":"#endpoint","assertion":"Route 关联同一市场官方文档所示 Base URL。"} |
| 新增 | /evidence/ir-evidence-440cc9494414 | — | {"id":"ir-evidence-440cc9494414","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/1/operations/0/routes/0/protocol","locator":"#/v1/tools/fetch","assertion":"官方示例为 JSON over HTTPS。"} |
| 新增 | /evidence/ir-evidence-4473309a8bc7 | — | {"id":"ir-evidence-4473309a8bc7","source_ref":"deepseek-anthropic-api","field":"/services/global/endpoints/1/id","locator":"#base-url","assertion":"官方 Anthropic 兼容文档明确给出 Base URL。"} |
| 新增 | /evidence/ir-evidence-451c62ea45ff | — | {"id":"ir-evidence-451c62ea45ff","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/prices/0/rules/0/evidence/0","locator":"pricing/search/per-1000-successful-requests","assertion":"官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。"} |
| 新增 | /evidence/ir-evidence-47582cb0c3cb | — | {"id":"ir-evidence-47582cb0c3cb","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/operations/0/routes/0/protocol","locator":"#/v1/tools/fetch","assertion":"官方示例为 JSON over HTTPS。"} |
| 新增 | /evidence/ir-evidence-486396de269a | — | {"id":"ir-evidence-486396de269a","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/operations/0/routes/0/endpoint_ref","locator":"#base-url","assertion":"Route 使用同一官方资料列出的 Base URL。"} |
| 新增 | /evidence/ir-evidence-48b74d56a7dd | — | {"id":"ir-evidence-48b74d56a7dd","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/operations/0/routes/0/id","locator":"#/v1/tools/fetch","assertion":"官方文档列出 POST /v1/tools/fetch。"} |
| 新增 | /evidence/ir-evidence-490ced2af465 | — | {"id":"ir-evidence-490ced2af465","source_ref":"deepseek-pricing","field":"/services/global/offerings/1/prices/0/rules","locator":"pricing/deepseek-v4-pro/peak","assertion":"国际官方价格表中 deepseek-v4-pro 的 高峰时段价格。"} |
| 新增 | /evidence/ir-evidence-4cc297b4851f | — | {"id":"ir-evidence-4cc297b4851f","source_ref":"deepseek-cn-chat-api","field":"/services/cn/offerings/0/operations/0/routes/0/path_template","locator":"#/chat/completions","assertion":"从官方 API 文档端点表提取路径。"} |
| 新增 | /evidence/ir-evidence-4d014c9cded1 | — | {"id":"ir-evidence-4d014c9cded1","source_ref":"deepseek-cn-models-api","field":"/services/cn/offerings/1/api_capabilities","locator":"#deepseek-v4-pro","assertion":"官方模型列表响应列出模型级推理支持、协议能力和输入模态。"} |
| 新增 | /evidence/ir-evidence-4de6ed91b44a | — | {"id":"ir-evidence-4de6ed91b44a","source_ref":"deepseek-responses-api","field":"/services/global/offerings/0/operations/0/routes/1/method","locator":"#/responses","assertion":"官方端点表列出 POST 方法。"} |
| 新增 | /evidence/ir-evidence-4e257e48ac49 | — | {"id":"ir-evidence-4e257e48ac49","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/operations/0/id","locator":"#/v1/tools/search","assertion":"官方文档列出 Search 独立 API。"} |
| 新增 | /evidence/ir-evidence-50bd23b59ee2 | — | {"id":"ir-evidence-50bd23b59ee2","source_ref":"deepseek-cn-anthropic-api","field":"/services/cn/endpoints/1/id","locator":"#base-url","assertion":"官方 Anthropic 兼容文档明确给出 Base URL。"} |
| 新增 | /evidence/ir-evidence-50c39a43eb44 | — | {"id":"ir-evidence-50c39a43eb44","source_ref":"deepseek-models-api","field":"/services/global/offerings/0/display_name","locator":"#deepseek-flash/name"} |
| 新增 | /evidence/ir-evidence-5255da00aef4 | — | {"id":"ir-evidence-5255da00aef4","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/kind","locator":"#/v1/tools/search","assertion":"按官方 API 文档定义的独立服务类型映射。"} |
| 新增 | /evidence/ir-evidence-52b18f3eaaf6 | — | {"id":"ir-evidence-52b18f3eaaf6","source_ref":"deepseek-cn-responses-api","field":"/services/cn/offerings/0/operations/0/routes/1/endpoint_ref","locator":"#endpoint","assertion":"Route 关联同一市场官方文档所示 Base URL。"} |
| 新增 | /evidence/ir-evidence-5336bd21af64 | — | {"id":"ir-evidence-5336bd21af64","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/0/operations/0/kind","locator":"#/v1/tools/search","assertion":"官方端点功能映射。"} |
| 新增 | /evidence/ir-evidence-54b90e04162a | — | {"id":"ir-evidence-54b90e04162a","source_ref":"deepseek-cn-pricing","field":"/services/cn/id","locator":"pricing/market"} |
| 新增 | /evidence/ir-evidence-5831aee0fe9b | — | {"id":"ir-evidence-5831aee0fe9b","source_ref":"deepseek-search-pricing","field":"/services/global/service_capabilities/1/operations/0/kind","locator":"#/v1/tools/fetch","assertion":"官方端点功能映射。"} |
| 新增 | /evidence/ir-evidence-59668e4d4e44 | — | {"id":"ir-evidence-59668e4d4e44","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/0/lifecycle","locator":"#/v1/tools/search","assertion":"当前官方文档列出该独立能力端点。"} |
| 新增 | /evidence/ir-evidence-59ba634d5c92 | — | {"id":"ir-evidence-59ba634d5c92","source_ref":"deepseek-cn-chat-api","field":"/services/cn/offerings/1/operations/0/routes/0/protocol","locator":"#/chat/completions","assertion":"从官方 API 文档协议格式映射。"} |
| 新增 | /evidence/ir-evidence-59e96cbb155e | — | {"id":"ir-evidence-59e96cbb155e","source_ref":"deepseek-cn-search-guide","field":"/services/cn/service_capabilities/1/availability","locator":"#/v1/tools/fetch","assertion":"当前官方文档对该市场公开了此独立能力 API。"} |
- 另有 145 项来源台账差异，详见 JSON 回放结果。

### moonshotai 字段差异

| 新增 | /rate_cards/ir-rate-card-229c4b0eed6c | — | {"id":"ir-rate-card-229c4b0eed6c","offering_ref":"kimi-k2-6-29ab88af-global","operation_ref":"batch_inference","service_ref":"global","currency":"USD","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-c9c7d01c69e3","priority":1,"rate_items":[{"metric":… (515 字符) |
| 新增 | /rate_cards/ir-rate-card-381513571805 | — | {"id":"ir-rate-card-381513571805","offering_ref":"kimi-k2-6-29ab88af","operation_ref":"batch_inference","service_ref":"cn","currency":"CNY","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-ab44305465b9","priority":1,"rate_items":[{"metric":"input","un… (503 字符) |
| 新增 | /rate_cards/ir-rate-card-43e2d1624c29 | — | {"id":"ir-rate-card-43e2d1624c29","operation_ref":"web_search_pro-cn","capability_ref":"web-search","service_ref":"cn","currency":"CNY","unit":"per_request","offer_type":"standard","rules":[{"id":"ir-price-rule-3b2570e0f19a","priority":1,"when":{"field":"response.search_results.… (411 字符) |
| 新增 | /rate_cards/ir-rate-card-65477a215c08 | — | {"id":"ir-rate-card-65477a215c08","operation_ref":"web_fetch-global","capability_ref":"web-fetch","service_ref":"global","currency":"USD","unit":"per_request","offer_type":"standard","rules":[{"id":"ir-price-rule-98a8f1c12a85","priority":1,"when":{"field":"response.markdown.non_… (407 字符) |
| 新增 | /rate_cards/ir-rate-card-a52121aed6d8 | — | {"id":"ir-rate-card-a52121aed6d8","operation_ref":"web_search_basic-global","capability_ref":"web-search","service_ref":"global","currency":"USD","unit":"per_request","offer_type":"standard","rules":[{"id":"ir-price-rule-5ce4b9a0d57f","priority":1,"when":{"field":"response.searc… (421 字符) |
| 新增 | /rate_cards/ir-rate-card-b42fcc33d09d | — | {"id":"ir-rate-card-b42fcc33d09d","operation_ref":"web_fetch-cn","capability_ref":"web-fetch","service_ref":"cn","currency":"CNY","unit":"per_request","offer_type":"standard","rules":[{"id":"ir-price-rule-56f29650dad9","priority":1,"when":{"field":"response.markdown.non_empty","… (398 字符) |
| 新增 | /rate_cards/ir-rate-card-cab7f2277cc9 | — | {"id":"ir-rate-card-cab7f2277cc9","operation_ref":"web_search_basic-cn","capability_ref":"web-search","service_ref":"cn","currency":"CNY","unit":"per_request","offer_type":"standard","rules":[{"id":"ir-price-rule-3c1237725c8f","priority":1,"when":{"field":"response.search_result… (412 字符) |
| 新增 | /rate_cards/ir-rate-card-dfd07276e0fa | — | {"id":"ir-rate-card-dfd07276e0fa","offering_ref":"kimi-k2-7-code-73f24d98-global","operation_ref":"batch_inference","service_ref":"global","currency":"USD","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-1da6d727bf92","priority":1,"rate_items":[{"met… (520 字符) |
| 新增 | /rate_cards/ir-rate-card-ead862efa207 | — | {"id":"ir-rate-card-ead862efa207","offering_ref":"kimi-k2-7-code-73f24d98","operation_ref":"batch_inference","service_ref":"cn","currency":"CNY","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-661b2e888cdf","priority":1,"rate_items":[{"metric":"input… (508 字符) |
| 新增 | /rate_cards/ir-rate-card-f4969b980659 | — | {"id":"ir-rate-card-f4969b980659","operation_ref":"web_search_pro-global","capability_ref":"web-search","service_ref":"global","currency":"USD","unit":"per_request","offer_type":"standard","rules":[{"id":"ir-price-rule-5b7e30a54833","priority":1,"when":{"field":"response.search_… (419 字符) |
| 更新 | /rate_cards/kimi-k2-6-29ab88af-cny/rules/standard/rate_items/output/amount_decimal | "27" | "27.00" |
| 更新 | /rate_cards/kimi-k2-6-29ab88af-global-usd/rules/standard/rate_items/output/amount_decimal | "4" | "4.00" |
| 更新 | /rate_cards/kimi-k2-7-code-73f24d98-cny/rules/standard/rate_items/output/amount_decimal | "27" | "27.00" |
| 更新 | /rate_cards/kimi-k2-7-code-73f24d98-global-usd/rules/standard/rate_items/output/amount_decimal | "4" | "4.00" |
| 更新 | /rate_cards/kimi-k2-7-code-highspeed-fb794523-cny/rules/standard/rate_items/input/amount_decimal | "13" | "13.00" |
| 更新 | /rate_cards/kimi-k2-7-code-highspeed-fb794523-cny/rules/standard/rate_items/output/amount_decimal | "54" | "54.00" |
| 更新 | /rate_cards/kimi-k2-7-code-highspeed-fb794523-global-usd/rules/standard/rate_items/output/amount_decimal | "8" | "8.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-cny/rules/standard/rate_items/cache_write_ttl_1h/amount_decimal | "26" | "26.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-cny/rules/standard/rate_items/cache_write_ttl_5m/amount_decimal | "13" | "13.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-cny/rules/standard/rate_items/input/amount_decimal | "13" | "13.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-cny/rules/standard/rate_items/output/amount_decimal | "68" | "68.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-global-usd/rules/standard/rate_items/cache_write_ttl_1h/amount_decimal | "4" | "4.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-global-usd/rules/standard/rate_items/cache_write_ttl_5m/amount_decimal | "2" | "2.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-global-usd/rules/standard/rate_items/input/amount_decimal | "2" | "2.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-527b5e61-global-usd/rules/standard/rate_items/output/amount_decimal | "10" | "10.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-cny/rules/standard/rate_items/cache_write_ttl_1h/amount_decimal | "52" | "52.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-cny/rules/standard/rate_items/cache_write_ttl_5m/amount_decimal | "26" | "26.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-cny/rules/standard/rate_items/input/amount_decimal | "26" | "26.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-cny/rules/standard/rate_items/output/amount_decimal | "136" | "136.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-global-usd/rules/standard/rate_items/cache_write_ttl_1h/amount_decimal | "8" | "8.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-global-usd/rules/standard/rate_items/cache_write_ttl_5m/amount_decimal | "4" | "4.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-global-usd/rules/standard/rate_items/input/amount_decimal | "4" | "4.00" |
| 更新 | /rate_cards/kimi-k3-1-pro-highspeed-99733e35-global-usd/rules/standard/rate_items/output/amount_decimal | "20" | "20.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-cny/rules/standard/rate_items/cache_read/amount_decimal | "2" | "2.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-cny/rules/standard/rate_items/cache_write_ttl_1h/amount_decimal | "40" | "40.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-cny/rules/standard/rate_items/cache_write_ttl_5m/amount_decimal | "20" | "20.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-cny/rules/standard/rate_items/input/amount_decimal | "20" | "20.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-cny/rules/standard/rate_items/output/amount_decimal | "100" | "100.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-global-usd/rules/standard/rate_items/cache_write_ttl_1h/amount_decimal | "6" | "6.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-global-usd/rules/standard/rate_items/cache_write_ttl_5m/amount_decimal | "3" | "3.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-global-usd/rules/standard/rate_items/input/amount_decimal | "3" | "3.00" |
| 更新 | /rate_cards/kimi-k3-1b2f2db4-global-usd/rules/standard/rate_items/output/amount_decimal | "15" | "15.00" |
| 更新 | /services/cn/endpoints/anthropic-compatible-cn/documentation | "https://platform.kimi.com/docs/api/overview" | "https://platform.kimi.com/docs/api/messages" |
| 新增 | /services/cn/endpoints/moonshot-tools-api-cn | — | {"id":"moonshot-tools-api-cn","base_url":"https://api.moonshot.cn","api_region":"中国","service_id":"cn","transport":"https"} |
| 更新 | /services/cn/endpoints/openai-compatible-cn/documentation | "https://platform.kimi.com/docs/api/overview" | "https://platform.kimi.com/docs/api/chat" |
| 新增 | /services/cn/offerings/kimi-k2.6/operations/batch_inference | — | {"id":"batch_inference","kind":"batch_inference","execution":{"mode":"async_job","documentation":"批处理任务以状态字段跟踪执行进度。"},"output_specs":[{"kind":"structured","fields":["id","status","output_file_id","error_file_id"]}],"parameters":[{"name":"input_file_id","type":"string","required"… (1031 字符) |
| 新增 | /services/cn/offerings/kimi-k2.6/operations/text_generation/document_ref | — | "moonshotai-chat-api" |
| 新增 | /services/cn/offerings/kimi-k2.6/operations/text_generation/output_specs/0/fields | — | ["id","object","created","model","choices","usage"] |
| 更新 | /services/cn/offerings/kimi-k2.6/operations/text_generation/output_specs/0/kind | "text" | "structured" |
| 新增 | /services/cn/offerings/kimi-k2.6/operations/text_generation/parameters | — | [{"name":"logprobs","type":"boolean","required":false,"route_mappings":["/logprobs"],"default":false},{"name":"top_logprobs","type":"integer","required":false,"route_mappings":["/top_logprobs"],"min":0,"max":20},{"name":"prediction","type":"object","required":false,"route_mappin… (1821 字符) |
| 新增 | /services/cn/offerings/kimi-k2.6/operations/text_generation/routes/chat-completions-cn | — | {"id":"chat-completions-cn","endpoint_ref":"openai-compatible-cn","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"kimi-k2.6","reasoning":{"supported":true,"controls":[{"kind":"toggle","wire_path":["thinking","type"],"values":… (434 字符) |
| 新增 | /services/cn/offerings/kimi-k2.6/rate_card_ids/1 | — | "ir-rate-card-381513571805" |
| 新增 | /services/cn/offerings/kimi-k2.7-code/operations/batch_inference | — | {"id":"batch_inference","kind":"batch_inference","execution":{"mode":"async_job","documentation":"批处理任务以状态字段跟踪执行进度。"},"output_specs":[{"kind":"structured","fields":["id","status","output_file_id","error_file_id"]}],"parameters":[{"name":"input_file_id","type":"string","required"… (1031 字符) |
| 新增 | /services/cn/offerings/kimi-k2.7-code/operations/text_generation/document_ref | — | "moonshotai-chat-api" |
| 新增 | /services/cn/offerings/kimi-k2.7-code/operations/text_generation/output_specs/0/fields | — | ["id","object","created","model","choices","usage"] |
| 更新 | /services/cn/offerings/kimi-k2.7-code/operations/text_generation/output_specs/0/kind | "text" | "structured" |
| 新增 | /services/cn/offerings/kimi-k2.7-code/operations/text_generation/parameters | — | [{"name":"logprobs","type":"boolean","required":false,"route_mappings":["/logprobs"],"default":false},{"name":"top_logprobs","type":"integer","required":false,"route_mappings":["/top_logprobs"],"min":0,"max":20},{"name":"prediction","type":"object","required":false,"route_mappin… (1804 字符) |
| 新增 | /services/cn/offerings/kimi-k2.7-code/operations/text_generation/routes/chat-completions-cn | — | {"id":"chat-completions-cn","endpoint_ref":"openai-compatible-cn","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"kimi-k2.7-code","reasoning":{"supported":true},"documentation":"https://platform.kimi.com/docs/api/chat"} |
| 新增 | /services/cn/offerings/kimi-k2.7-code/rate_card_ids/1 | — | "ir-rate-card-ead862efa207" |
| 新增 | /services/cn/offerings/kimi-k2.7-code-highspeed/operations/text_generation/document_ref | — | "moonshotai-chat-api" |
| 新增 | /services/cn/offerings/kimi-k2.7-code-highspeed/operations/text_generation/output_specs/0/fields | — | ["id","object","created","model","choices","usage"] |
| 更新 | /services/cn/offerings/kimi-k2.7-code-highspeed/operations/text_generation/output_specs/0/kind | "text" | "structured" |
| 新增 | /services/cn/offerings/kimi-k2.7-code-highspeed/operations/text_generation/parameters | — | [{"name":"logprobs","type":"boolean","required":false,"route_mappings":["/logprobs"],"default":false},{"name":"top_logprobs","type":"integer","required":false,"route_mappings":["/top_logprobs"],"min":0,"max":20},{"name":"prediction","type":"object","required":false,"route_mappin… (1814 字符) |
| 新增 | /services/cn/offerings/kimi-k2.7-code-highspeed/operations/text_generation/routes/chat-completions-cn | — | {"id":"chat-completions-cn","endpoint_ref":"openai-compatible-cn","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"kimi-k2.7-code-highspeed","reasoning":{"supported":true},"documentation":"https://platform.kimi.com/docs/api/ch… (283 字符) |
| 新增 | /services/cn/offerings/kimi-k3/operations/text_generation/document_ref | — | "moonshotai-chat-api" |
| 新增 | /services/cn/offerings/kimi-k3/operations/text_generation/input_slots/0/description | — | "对话消息列表。" |
| 新增 | /services/cn/offerings/kimi-k3/operations/text_generation/output_specs/0/fields | — | ["id","object","created","model","choices","usage"] |
| 更新 | /services/cn/offerings/kimi-k3/operations/text_generation/output_specs/0/kind | "text" | "structured" |
| 新增 | /services/cn/offerings/kimi-k3/operations/text_generation/parameters | — | [{"name":"logprobs","type":"boolean","required":false,"route_mappings":["/logprobs"],"default":false},{"name":"top_logprobs","type":"integer","required":false,"route_mappings":["/top_logprobs"],"min":0,"max":20},{"name":"prediction","type":"object","required":false,"route_mappin… (1887 字符) |
| 新增 | /services/cn/offerings/kimi-k3/operations/text_generation/routes/chat-completions-cn | — | {"id":"chat-completions-cn","endpoint_ref":"openai-compatible-cn","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"kimi-k3","reasoning":{"supported":true,"controls":[{"kind":"effort","wire_path":["reasoning_effort"],"values":[… (404 字符) |
| 新增 | /services/cn/offerings/kimi-k3/operations/text_generation_messages | — | {"id":"text_generation_messages","kind":"text_generation","input_slots":[{"name":"messages","kind":"text","required":true,"description":"输入为协议定义的对话消息列表；复杂消息内容联合类型未在当前 IR 槽位中展开。"}],"output_specs":[{"kind":"structured","fields":["id","type","role","model","content","usage"],"strea… (1720 字符) |
| 新增 | /services/cn/offerings/kimi-k3/operations/text_generation_responses | — | {"id":"text_generation_responses","kind":"text_generation","input_slots":[{"name":"input","kind":"text","required":true,"description":"输入为协议定义的文本或结构化 Input Item；oneOf 结构未压缩为单一参数类型。"}],"output_specs":[{"kind":"structured","fields":["id","object","created_at","status","model","out… (2170 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation/document_ref | — | "moonshotai-chat-api" |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation/input_slots/0/description | — | "对话消息列表。" |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation/output_specs/0/fields | — | ["id","object","created","model","choices","usage"] |
| 更新 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation/output_specs/0/kind | "text" | "structured" |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation/parameters | — | [{"name":"logprobs","type":"boolean","required":false,"route_mappings":["/logprobs"],"default":false},{"name":"top_logprobs","type":"integer","required":false,"route_mappings":["/top_logprobs"],"min":0,"max":20},{"name":"prediction","type":"object","required":false,"route_mappin… (1893 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation/routes/chat-completions-cn | — | {"id":"chat-completions-cn","endpoint_ref":"openai-compatible-cn","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"kimi-k3.1-pro","reasoning":{"supported":true,"controls":[{"kind":"effort","wire_path":["reasoning_effort"],"val… (410 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation_messages | — | {"id":"text_generation_messages","kind":"text_generation","input_slots":[{"name":"messages","kind":"text","required":true,"description":"输入为协议定义的对话消息列表；复杂消息内容联合类型未在当前 IR 槽位中展开。"}],"output_specs":[{"kind":"structured","fields":["id","type","role","model","content","usage"],"strea… (1732 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text_generation_responses | — | {"id":"text_generation_responses","kind":"text_generation","input_slots":[{"name":"input","kind":"text","required":true,"description":"输入为协议定义的文本或结构化 Input Item；oneOf 结构未压缩为单一参数类型。"}],"output_specs":[{"kind":"structured","fields":["id","object","created_at","status","model","out… (2182 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation/document_ref | — | "moonshotai-chat-api" |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation/input_slots/0/description | — | "对话消息列表。" |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation/output_specs/0/fields | — | ["id","object","created","model","choices","usage"] |
| 更新 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation/output_specs/0/kind | "text" | "structured" |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation/parameters | — | [{"name":"logprobs","type":"boolean","required":false,"route_mappings":["/logprobs"],"default":false},{"name":"top_logprobs","type":"integer","required":false,"route_mappings":["/top_logprobs"],"min":0,"max":20},{"name":"prediction","type":"object","required":false,"route_mappin… (1903 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation/routes/chat-completions-cn | — | {"id":"chat-completions-cn","endpoint_ref":"openai-compatible-cn","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"kimi-k3.1-pro-highspeed","reasoning":{"supported":true,"controls":[{"kind":"effort","wire_path":["reasoning_eff… (420 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation_messages | — | {"id":"text_generation_messages","kind":"text_generation","input_slots":[{"name":"messages","kind":"text","required":true,"description":"输入为协议定义的对话消息列表；复杂消息内容联合类型未在当前 IR 槽位中展开。"}],"output_specs":[{"kind":"structured","fields":["id","type","role","model","content","usage"],"strea… (1752 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text_generation_responses | — | {"id":"text_generation_responses","kind":"text_generation","input_slots":[{"name":"input","kind":"text","required":true,"description":"输入为协议定义的文本或结构化 Input Item；oneOf 结构未压缩为单一参数类型。"}],"output_specs":[{"kind":"structured","fields":["id","object","created_at","status","model","out… (2202 字符) |
| 更新 | /services/global/endpoints/anthropic-compatible-global/documentation | "https://platform.kimi.ai/docs/api/overview" | "https://platform.kimi.ai/docs/api/messages" |
| 新增 | /services/global/endpoints/moonshot-tools-api-global | — | {"id":"moonshot-tools-api-global","base_url":"https://api.moonshot.ai","api_region":"全球","service_id":"global","transport":"https"} |
| 更新 | /services/global/endpoints/openai-compatible-global/documentation | "https://platform.kimi.ai/docs/api/overview" | "https://platform.kimi.ai/docs/api/chat" |
| 新增 | /services/global/offerings/kimi-k2.6/operations/batch_inference | — | {"id":"batch_inference","kind":"batch_inference","execution":{"mode":"async_job","documentation":"批处理任务以状态字段跟踪执行进度。"},"output_specs":[{"kind":"structured","fields":["id","status","output_file_id","error_file_id"]}],"parameters":[{"name":"input_file_id","type":"string","required"… (1045 字符) |
| 新增 | /services/global/offerings/kimi-k2.6/operations/text_generation/document_ref | — | "moonshotai-global-chat-api" |
| 新增 | /services/global/offerings/kimi-k2.6/operations/text_generation/output_specs/0/fields | — | ["id","object","created","model","choices","usage"] |
| 更新 | /services/global/offerings/kimi-k2.6/operations/text_generation/output_specs/0/kind | "text" | "structured" |
| 新增 | /services/global/offerings/kimi-k2.6/operations/text_generation/parameters | — | [{"name":"logprobs","type":"boolean","required":false,"route_mappings":["/logprobs"],"default":false},{"name":"top_logprobs","type":"integer","required":false,"route_mappings":["/top_logprobs"],"min":0,"max":20},{"name":"prediction","type":"object","required":false,"route_mappin… (1632 字符) |
| 新增 | /services/global/offerings/kimi-k2.6/operations/text_generation/routes/chat-completions-global | — | {"id":"chat-completions-global","endpoint_ref":"openai-compatible-global","protocol":"chat-completions","method":"POST","path_template":"/chat/completions","request_model_id":"kimi-k2.6","reasoning":{"supported":true,"controls":[{"kind":"toggle","wire_path":["thinking","type"],"… (441 字符) |
| 新增 | /services/global/offerings/kimi-k2.6/rate_card_ids/1 | — | "ir-rate-card-229c4b0eed6c" |
| 新增 | /services/global/offerings/kimi-k2.7-code/operations/batch_inference | — | {"id":"batch_inference","kind":"batch_inference","execution":{"mode":"async_job","documentation":"批处理任务以状态字段跟踪执行进度。"},"output_specs":[{"kind":"structured","fields":["id","status","output_file_id","error_file_id"]}],"parameters":[{"name":"input_file_id","type":"string","required"… (1045 字符) |
| 新增 | /services/global/offerings/kimi-k2.7-code/operations/text_generation/document_ref | — | "moonshotai-global-chat-api" |
- 另有 34 项 Provider 差异，详见 JSON 回放结果。
| 新增 | /bindings/~1rate_cards~10~1rules~10~1source_refs | — | ["ir-evidence-3dea1cffcb75"] |
| 新增 | /bindings/~1rate_cards~10~1source_refs | — | ["ir-evidence-629db9d6e7d8"] |
| 新增 | /bindings/~1rate_cards~11~1rules~10~1source_refs | — | ["ir-evidence-6d8c75f615fd"] |
| 新增 | /bindings/~1rate_cards~11~1source_refs | — | ["ir-evidence-7568837bcd1b"] |
| 新增 | /bindings/~1rate_cards~110~1rules~10~1source_refs | — | ["ir-evidence-cba204f0731c"] |
| 新增 | /bindings/~1rate_cards~110~1source_refs | — | ["ir-evidence-0829bd85613b"] |
| 新增 | /bindings/~1rate_cards~111~1rules~10~1source_refs | — | ["ir-evidence-0e0cbb5a05fb"] |
| 新增 | /bindings/~1rate_cards~111~1source_refs | — | ["ir-evidence-03f76bad0be0"] |
| 新增 | /bindings/~1rate_cards~112~1rules~10~1source_refs | — | ["ir-evidence-f8a147f6db3a"] |
| 新增 | /bindings/~1rate_cards~112~1source_refs | — | ["ir-evidence-a4f6336fc6c2"] |
| 新增 | /bindings/~1rate_cards~113~1rules~10~1source_refs | — | ["ir-evidence-da30e02d2d01"] |
| 新增 | /bindings/~1rate_cards~113~1source_refs | — | ["ir-evidence-39d136aa36c7"] |
| 新增 | /bindings/~1rate_cards~114~1rules~10~1source_refs | — | ["ir-evidence-388861f7eb0f"] |
| 新增 | /bindings/~1rate_cards~114~1source_refs | — | ["ir-evidence-dc49a83ee3db"] |
| 新增 | /bindings/~1rate_cards~115~1rules~10~1source_refs | — | ["ir-evidence-b34086ed8ff0","ir-evidence-0b8eab9c2a3f"] |
| 新增 | /bindings/~1rate_cards~115~1source_refs | — | ["ir-evidence-af39360d3189","ir-evidence-bb4c1b664cc0"] |
| 新增 | /bindings/~1rate_cards~116~1rules~10~1source_refs | — | ["ir-evidence-57428a25f62b","ir-evidence-1d9d4bc826c8"] |
| 新增 | /bindings/~1rate_cards~116~1source_refs | — | ["ir-evidence-c95f7556ea5d","ir-evidence-22a9eaf83cf1"] |
| 新增 | /bindings/~1rate_cards~117~1rules~10~1source_refs | — | ["ir-evidence-3f4f14b7b058"] |
| 新增 | /bindings/~1rate_cards~117~1source_refs | — | ["ir-evidence-a09f6450088a"] |
| 新增 | /bindings/~1rate_cards~118~1rules~10~1source_refs | — | ["ir-evidence-79cebde858c0"] |
| 新增 | /bindings/~1rate_cards~118~1source_refs | — | ["ir-evidence-1c20696504df"] |
| 新增 | /bindings/~1rate_cards~119~1rules~10~1source_refs | — | ["ir-evidence-4efc13b36de2"] |
| 新增 | /bindings/~1rate_cards~119~1source_refs | — | ["ir-evidence-baf3dceeeb70"] |
| 新增 | /bindings/~1rate_cards~12~1rules~10~1source_refs | — | ["ir-evidence-936f15f71125"] |
| 新增 | /bindings/~1rate_cards~12~1source_refs | — | ["ir-evidence-53c821855c5c"] |
| 新增 | /bindings/~1rate_cards~120~1rules~10~1source_refs | — | ["ir-evidence-cbc5c544551f","ir-evidence-3c199a5b2283"] |
| 新增 | /bindings/~1rate_cards~120~1source_refs | — | ["ir-evidence-2996e03af9f1","ir-evidence-fb6a9c1b6f70"] |
| 新增 | /bindings/~1rate_cards~121~1rules~10~1source_refs | — | ["ir-evidence-fae913858adc","ir-evidence-f541869643b0"] |
| 新增 | /bindings/~1rate_cards~121~1source_refs | — | ["ir-evidence-971024c44081","ir-evidence-418cacfd13ca"] |
| 新增 | /bindings/~1rate_cards~13~1rules~10~1source_refs | — | ["ir-evidence-8bccaf1b551a"] |
| 新增 | /bindings/~1rate_cards~13~1source_refs | — | ["ir-evidence-20cacfacb733"] |
| 新增 | /bindings/~1rate_cards~14~1rules~10~1source_refs | — | ["ir-evidence-da1eab00c9e9"] |
| 新增 | /bindings/~1rate_cards~14~1source_refs | — | ["ir-evidence-61441b2cc4fe"] |
| 新增 | /bindings/~1rate_cards~15~1rules~10~1source_refs | — | ["ir-evidence-2eb1fef074d9"] |
| 新增 | /bindings/~1rate_cards~15~1source_refs | — | ["ir-evidence-edf4c526f755"] |
| 新增 | /bindings/~1rate_cards~16~1rules~10~1source_refs | — | ["ir-evidence-f248a4fc8790"] |
| 新增 | /bindings/~1rate_cards~16~1source_refs | — | ["ir-evidence-828c1ec79fb8"] |
| 新增 | /bindings/~1rate_cards~17~1rules~10~1source_refs | — | ["ir-evidence-250ea1d907f9"] |
| 新增 | /bindings/~1rate_cards~17~1source_refs | — | ["ir-evidence-9da64faecce2"] |
| 新增 | /bindings/~1rate_cards~18~1rules~10~1source_refs | — | ["ir-evidence-c2e6e999d260"] |
| 新增 | /bindings/~1rate_cards~18~1source_refs | — | ["ir-evidence-238bfbf2b437"] |
| 新增 | /bindings/~1rate_cards~19~1rules~10~1source_refs | — | ["ir-evidence-81faa467f93b"] |
| 新增 | /bindings/~1rate_cards~19~1source_refs | — | ["ir-evidence-655816f4b357"] |
| 新增 | /bindings/~1services~10~1offerings~10~1evidence_refs | — | ["ir-evidence-bb6084d0a6f9"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~10~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~11~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~110~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~111~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~112~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~113~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~114~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~12~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~13~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~14~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~15~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~16~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~17~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~18~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~10~1parameters~19~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~10~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~11~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~110~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~12~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~13~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~14~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~15~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~16~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~17~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~18~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~11~1parameters~19~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~10~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~11~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~12~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~13~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~14~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~15~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~16~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~17~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~10~1operations~12~1parameters~18~1evidence_refs | — | ["moonshotai-messages-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1evidence_refs | — | ["ir-evidence-d1b9c8299520"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~10~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~11~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~110~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~111~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~112~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~113~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~114~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~12~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~13~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~14~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~15~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~16~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~17~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~18~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~10~1parameters~19~1evidence_refs | — | ["moonshotai-chat-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~11~1parameters~10~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~11~1parameters~11~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~11~1parameters~110~1evidence_refs | — | ["moonshotai-responses-api"] |
| 新增 | /bindings/~1services~10~1offerings~11~1operations~11~1parameters~12~1evidence_refs | — | ["moonshotai-responses-api"] |
- 另有 716 项来源台账差异，详见 JSON 回放结果。

### stepfun 字段差异

| 更新 | /rate_cards/stepfun-global-step-1o-audio-usd/rules/stepfun-global-step-1o-audio-usd-standard/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-global-step-1o-turbo-vision-usd/rules/stepfun-global-step-1o-turbo-vision-usd-standard/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-global-step-3-5-flash-2603-usd/rules/stepfun-global-step-3-5-flash-2603-usd-standard/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-global-step-3-5-flash-usd/rules/stepfun-global-step-3-5-flash-usd-standard/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-global-step-3-7-flash-usd/rules/stepfun-global-step-3-7-flash-usd-standard/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-global-step-5-preview-usd/rules/stepfun-global-step-5-preview-usd-standard/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-global-stepaudio-2-5-chat-usd/rules/stepfun-global-stepaudio-2-5-chat-usd-standard/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-step-5-preview-4e299f11-cny/rules/stepfun-token-rates/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-stepfun-step-1o-audio-cn-api-cny/rules/stepfun-stepfun-step-1o-audio-cn-api-cny-rule/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-stepfun-step-1o-turbo-vision-cn-api-cny/rules/stepfun-stepfun-step-1o-turbo-vision-cn-api-cny-rule/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-stepfun-step-3-5-flash-2603-cn-api-cny/rules/stepfun-stepfun-step-3-5-flash-2603-cn-api-cny-rule/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-stepfun-step-3-5-flash-cn-api-cny/rules/stepfun-stepfun-step-3-5-flash-cn-api-cny-rule/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-stepfun-step-3-7-flash-cn-api-cny/rules/stepfun-stepfun-step-3-7-flash-cn-api-cny-rule/priority | 10 | 1 |
| 更新 | /rate_cards/stepfun-stepfun-stepaudio-2-5-chat-cn-api-cny/rules/stepfun-stepfun-stepaudio-2-5-chat-cn-api-cny-rule/priority | 10 | 1 |
| 更新 | /services/cn/name | "中国市场" | "中国区" |
| 更新 | /services/cn/offerings/step-1o-audio/display_name | "step-1o-audio" | "Step-1o Audio稳定型" |
| 新增 | /services/cn/offerings/step-1o-audio/rate_card_ids | — | ["stepfun-stepfun-step-1o-audio-cn-api-cny"] |
| 更新 | /services/cn/offerings/step-1o-turbo-vision/display_name | "step-1o-turbo-vision" | "Step-1o Turbo Vision图像 / 视频理解" |
| 新增 | /services/cn/offerings/step-1o-turbo-vision/rate_card_ids | — | ["stepfun-stepfun-step-1o-turbo-vision-cn-api-cny"] |
| 更新 | /services/cn/offerings/step-3.5-flash/display_name | "step-3.5-flash" | "Step 3.5 Flash旗舰推理" |
| 新增 | /services/cn/offerings/step-3.5-flash/rate_card_ids | — | ["stepfun-stepfun-step-3-5-flash-cn-api-cny"] |
| 更新 | /services/cn/offerings/step-3.5-flash-2603/display_name | "step-3.5-flash-2603" | "Step 3.5 Flash 2603Agent 优化" |
| 新增 | /services/cn/offerings/step-3.5-flash-2603/rate_card_ids | — | ["stepfun-stepfun-step-3-5-flash-2603-cn-api-cny"] |
| 更新 | /services/cn/offerings/step-3.7-flash/display_name | "step-3.7-flash" | "Step 3.7 Flash多模态推理旗舰" |
| 新增 | /services/cn/offerings/step-3.7-flash/rate_card_ids | — | ["stepfun-stepfun-step-3-7-flash-cn-api-cny"] |
| 更新 | /services/cn/offerings/step-5-preview/display_name | "step-5-preview" | "Step 5 Preview新一代旗舰基模" |
| 新增 | /services/cn/offerings/step-5-preview/rate_card_ids | — | ["stepfun-step-5-preview-4e299f11-cny"] |
| 更新 | /services/cn/offerings/step-asr/display_name | "step-asr" | "Step ASR实时 / 离线识别" |
| 更新 | /services/cn/offerings/step-tts-mini/display_name | "step-tts-mini" | "Step TTS Mini高表现力 TTS" |
| 更新 | /services/cn/offerings/stepaudio-2-asr-pro/display_name | "stepaudio-2-asr-pro" | "StepAudio 2 ASR Pro32B ASR Pro" |
| 更新 | /services/cn/offerings/stepaudio-2.5-asr/display_name | "stepaudio-2.5-asr" | "StepAudio 2.5 ASR新一代流式 ASR 旗舰" |
| 更新 | /services/cn/offerings/stepaudio-2.5-chat/display_name | "stepaudio-2.5-chat" | "StepAudio 2.5 Chat活人感对话大模型" |
| 新增 | /services/cn/offerings/stepaudio-2.5-chat/rate_card_ids | — | ["stepfun-stepfun-stepaudio-2-5-chat-cn-api-cny"] |
| 更新 | /services/cn/offerings/stepaudio-3-realtime-preview/display_name | "stepaudio-3-realtime-preview" | "StepAudio 3 Realtime像真人一样聊，也能边想边做" |
| 更新 | /services/cn/offerings/stepaudio-3-tts/display_name | "stepaudio-3-tts" | "StepAudio 3 TTS真人级的说话表现" |
| 更新 | /services/global/name | "StepFun International" | "国际区" |
| 更新 | /services/global/offerings/step-1o-audio/display_name | "step-1o-audio" | "Step-1o Audio" |
| 更新 | /services/global/offerings/step-1o-turbo-vision/display_name | "step-1o-turbo-vision" | "Step-1o Turbo Vision" |
| 更新 | /services/global/offerings/step-3.5-flash/display_name | "step-3.5-flash" | "Step 3.5 Flash 2603" |
| 更新 | /services/global/offerings/step-3.5-flash-2603/display_name | "step-3.5-flash-2603" | "Step 3.5 Flash 2603" |
| 更新 | /services/global/offerings/step-3.7-flash/display_name | "step-3.7-flash" | "Step 3.7 Flash" |
| 更新 | /services/global/offerings/step-5-preview/display_name | "step-5-preview" | "Step 5 Preview" |
| 更新 | /services/global/offerings/step-asr/display_name | "step-asr" | "Step ASR" |
| 更新 | /services/global/offerings/step-tts-mini/display_name | "step-tts-mini" | "Step TTS Mini" |
| 更新 | /services/global/offerings/stepaudio-2-asr-pro/display_name | "stepaudio-2-asr-pro" | "StepAudio 2 ASR Pro" |
| 更新 | /services/global/offerings/stepaudio-2.5-asr/display_name | "stepaudio-2.5-asr" | "StepAudio 2.5 ASR" |
| 更新 | /services/global/offerings/stepaudio-2.5-chat/display_name | "stepaudio-2.5-chat" | "StepAudio 2.5 Chat" |
| 更新 | /services/global/offerings/stepaudio-3-realtime-preview/display_name | "stepaudio-3-realtime-preview" | "StepAudio 3 Realtime" |
| 更新 | /services/global/offerings/stepaudio-3-tts/display_name | "stepaudio-3-tts" | "StepAudio 3 TTS" |
| 新增 | /services/global/service_capabilities | — | [] |
| 新增 | /bindings/~1provider~1sources | — | ["stepfun-model-catalog","stepfun-model-deprecations","stepfun-web-search","stepfun-api-pricing","stepfun-step-plan-pricing","stepfun-models-api","stepfun-chat-api","stepfun-messages-api","stepfun-responses-api","stepfun-quickstart","stepfun-global-documentation-index","stepfun-… (1864 字符) |
| 新增 | /bindings/~1rate_cards~10~1rules~10~1source_refs/1 | — | "ir-evidence-e2de70541414" |
| 新增 | /bindings/~1rate_cards~10~1source_refs/1 | — | "ir-evidence-976b64b8876f" |
| 新增 | /bindings/~1rate_cards~11~1rules~10~1source_refs/1 | — | "ir-evidence-1bed0d71f8fd" |
| 新增 | /bindings/~1rate_cards~11~1source_refs/1 | — | "ir-evidence-2df9e98c54d6" |
| 新增 | /bindings/~1rate_cards~116~1rules~10~1source_refs/1 | — | "ir-evidence-45350d62c115" |
| 新增 | /bindings/~1rate_cards~116~1source_refs/1 | — | "ir-evidence-4207eff5a0ec" |
| 新增 | /bindings/~1rate_cards~117~1rules~10~1source_refs/1 | — | "ir-evidence-1ace2f4bb20a" |
| 新增 | /bindings/~1rate_cards~117~1source_refs/1 | — | "ir-evidence-96daf03386d6" |
| 新增 | /bindings/~1rate_cards~118~1rules~10~1source_refs/1 | — | "ir-evidence-88773dc565e4" |
| 新增 | /bindings/~1rate_cards~118~1source_refs/1 | — | "ir-evidence-348eefe818c0" |
| 新增 | /bindings/~1rate_cards~119~1rules~10~1source_refs/1 | — | "ir-evidence-e37a25d58d9d" |
| 新增 | /bindings/~1rate_cards~119~1source_refs/1 | — | "ir-evidence-45b8281a4e13" |
| 新增 | /bindings/~1rate_cards~12~1rules~10~1source_refs/1 | — | "ir-evidence-a33e6b3edf1b" |
| 新增 | /bindings/~1rate_cards~12~1source_refs/1 | — | "ir-evidence-b1b853f1380b" |
| 新增 | /bindings/~1rate_cards~120~1rules~10~1source_refs/1 | — | "ir-evidence-3c5e92462b90" |
| 新增 | /bindings/~1rate_cards~120~1source_refs/1 | — | "ir-evidence-c98bc11d7c82" |
| 新增 | /bindings/~1rate_cards~121~1rules~10~1source_refs/1 | — | "ir-evidence-e6c9c136e7e6" |
| 新增 | /bindings/~1rate_cards~121~1source_refs/1 | — | "ir-evidence-dde5a7d19134" |
| 新增 | /bindings/~1rate_cards~122~1rules~10~1source_refs/1 | — | "ir-evidence-705b7e1ddbf8" |
| 新增 | /bindings/~1rate_cards~122~1source_refs/1 | — | "ir-evidence-4c384d147067" |
| 新增 | /bindings/~1rate_cards~13~1rules~10~1source_refs/1 | — | "ir-evidence-d5fd247444d2" |
| 新增 | /bindings/~1rate_cards~13~1source_refs/1 | — | "ir-evidence-05fa84292e91" |
| 新增 | /bindings/~1rate_cards~14~1rules~10~1source_refs/1 | — | "ir-evidence-0881b2fc6cdc" |
| 新增 | /bindings/~1rate_cards~14~1source_refs/1 | — | "ir-evidence-975e4bae9dce" |
| 新增 | /bindings/~1rate_cards~15~1rules~10~1source_refs/1 | — | "ir-evidence-c9ac0c1a3145" |
| 新增 | /bindings/~1rate_cards~15~1source_refs/1 | — | "ir-evidence-cb450200c523" |
| 新增 | /bindings/~1rate_cards~16~1rules~10~1source_refs/1 | — | "ir-evidence-f57e7a354fe6" |
| 新增 | /bindings/~1rate_cards~16~1source_refs/1 | — | "ir-evidence-61fd0932ec7d" |
| 新增 | /bindings/~1services~10~1offerings~10~1evidence_refs/1 | — | "ir-evidence-440ce5235dbe" |
| 新增 | /bindings/~1services~10~1offerings~11~1evidence_refs/1 | — | "ir-evidence-6500f984c126" |
| 新增 | /bindings/~1services~10~1offerings~110~1evidence_refs/1 | — | "ir-evidence-824418f66109" |
| 新增 | /bindings/~1services~10~1offerings~111~1evidence_refs/1 | — | "ir-evidence-7c1cf1571563" |
| 新增 | /bindings/~1services~10~1offerings~112~1evidence_refs/1 | — | "ir-evidence-1455f1dbbb89" |
| 新增 | /bindings/~1services~10~1offerings~12~1evidence_refs/1 | — | "ir-evidence-abc035960976" |
| 新增 | /bindings/~1services~10~1offerings~13~1evidence_refs/1 | — | "ir-evidence-4329f9e99942" |
| 新增 | /bindings/~1services~10~1offerings~14~1evidence_refs/1 | — | "ir-evidence-5d3a3ebedda6" |
| 新增 | /bindings/~1services~10~1offerings~15~1evidence_refs/1 | — | "ir-evidence-c00b989b12c4" |
| 新增 | /bindings/~1services~10~1offerings~16~1evidence_refs/1 | — | "ir-evidence-52e0883ff60a" |
| 新增 | /bindings/~1services~10~1offerings~17~1evidence_refs/1 | — | "ir-evidence-aee7496cdb3a" |
| 新增 | /bindings/~1services~10~1offerings~18~1evidence_refs/1 | — | "ir-evidence-eedc2cb1695b" |
| 新增 | /bindings/~1services~10~1offerings~19~1evidence_refs/1 | — | "ir-evidence-05c7fb74dd1d" |
| 新增 | /bindings/~1services~10~1sources | — | ["stepfun-model-catalog","stepfun-api-pricing"] |
| 新增 | /bindings/~1services~11~1offerings~10~1evidence_refs/1 | — | "ir-evidence-4bc4bd6b063e" |
| 新增 | /bindings/~1services~11~1offerings~11~1evidence_refs/1 | — | "ir-evidence-415ae6b68185" |
| 新增 | /bindings/~1services~11~1offerings~110~1evidence_refs/1 | — | "ir-evidence-e8ad50d8da73" |
| 新增 | /bindings/~1services~11~1offerings~111~1evidence_refs/1 | — | "ir-evidence-d8c362344ab4" |
| 新增 | /bindings/~1services~11~1offerings~112~1evidence_refs/1 | — | "ir-evidence-f4844a9450e5" |
| 新增 | /bindings/~1services~11~1offerings~12~1evidence_refs/1 | — | "ir-evidence-82b2e5ec3743" |
| 新增 | /bindings/~1services~11~1offerings~13~1evidence_refs/1 | — | "ir-evidence-168af717131c" |
| 新增 | /bindings/~1services~11~1offerings~14~1evidence_refs/1 | — | "ir-evidence-937771d1cbfe" |
| 新增 | /bindings/~1services~11~1offerings~15~1evidence_refs/1 | — | "ir-evidence-8490344c7e66" |
| 新增 | /bindings/~1services~11~1offerings~16~1evidence_refs/1 | — | "ir-evidence-ed4fb145e02d" |
| 新增 | /bindings/~1services~11~1offerings~17~1evidence_refs/1 | — | "ir-evidence-40d6261112d0" |
| 新增 | /bindings/~1services~11~1offerings~18~1evidence_refs/1 | — | "ir-evidence-dfbc77772ab8" |
| 新增 | /bindings/~1services~11~1offerings~19~1evidence_refs/1 | — | "ir-evidence-c683fd10f03d" |
| 新增 | /evidence/ir-evidence-05c7fb74dd1d | — | {"id":"ir-evidence-05c7fb74dd1d","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/9/provider_model_id","locator":"model-catalog/stepaudio-2.5-asr","assertion":"官方当前目录列出型号「StepAudio 2.5 ASR」，官方定价表用精确 API 模型 ID「stepaudio-2.5-asr」标识；两来源交叉对应。"} |
| 新增 | /evidence/ir-evidence-05fa84292e91 | — | {"id":"ir-evidence-05fa84292e91","source_ref":"stepfun-api-pricing","field":"/services/cn/offerings/2/prices/0/rules","locator":"pricing/step-3.5-flash-2603/per-1m-tokens","assertion":"官方中国定价表按百万 Token 列出 step-3.5-flash-2603 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-0881b2fc6cdc | — | {"id":"ir-evidence-0881b2fc6cdc","source_ref":"stepfun-api-pricing","field":"/services/cn/offerings/4/prices/0/rules/0/evidence/0","locator":"pricing/step-1o-turbo-vision/per-1m-tokens","assertion":"官方中国定价表按百万 Token 列出 step-1o-turbo-vision 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-0a26e763ccbc | — | {"id":"ir-evidence-0a26e763ccbc","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/10/service_id","locator":"#market","assertion":"官方国际市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-1455f1dbbb89 | — | {"id":"ir-evidence-1455f1dbbb89","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/12/provider_model_id","locator":"model-catalog/step-1o-audio","assertion":"官方当前目录列出型号「Step-1o Audio」，官方定价表用精确 API 模型 ID「step-1o-audio」标识；两来源交叉对应。"} |
| 新增 | /evidence/ir-evidence-14f07b3242e2 | — | {"id":"ir-evidence-14f07b3242e2","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/3/service_id","locator":"#market","assertion":"官方国际市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-168af717131c | — | {"id":"ir-evidence-168af717131c","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/3/provider_model_id","locator":"model-catalog/step-3.5-flash","assertion":"Step 3.5 Flash's high-speed reasoning and tool-calling capabilities, it adds native multimo… (1081 字符) |
| 新增 | /evidence/ir-evidence-186f77cc5e46 | — | {"id":"ir-evidence-186f77cc5e46","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/12/service_id","locator":"#market","assertion":"官方中国市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-189feb342301 | — | {"id":"ir-evidence-189feb342301","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/2/display_name","locator":"model-catalog/Step 3.5 Flash 2603Agent 优化","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-1ace2f4bb20a | — | {"id":"ir-evidence-1ace2f4bb20a","source_ref":"stepfun-global-api-pricing","field":"/services/global/offerings/1/prices/0/rules/0/evidence/0","locator":"pricing/step-3.7-flash/per-1m-tokens","assertion":"官方国际定价表按百万 Token 列出 step-3.7-flash 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-1bed0d71f8fd | — | {"id":"ir-evidence-1bed0d71f8fd","source_ref":"stepfun-api-pricing","field":"/services/cn/offerings/1/prices/0/rules/0/evidence/0","locator":"pricing/step-3.7-flash/per-1m-tokens","assertion":"官方中国定价表按百万 Token 列出 step-3.7-flash 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-1df284db2f6c | — | {"id":"ir-evidence-1df284db2f6c","source_ref":"stepfun-global-model-catalog","field":"/provider/aliases","locator":"#title","assertion":"国际官方模型目录以 StepFun 作为品牌名。"} |
| 新增 | /evidence/ir-evidence-1ed65313f290 | — | {"id":"ir-evidence-1ed65313f290","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/4/service_id","locator":"#market","assertion":"官方国际市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-2431c2ba5aab | — | {"id":"ir-evidence-2431c2ba5aab","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/10/display_name","locator":"model-catalog/StepAudio 2 ASR Pro","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-2d5fc78e4473 | — | {"id":"ir-evidence-2d5fc78e4473","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/5/service_id","locator":"#market","assertion":"官方中国市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-2df9e98c54d6 | — | {"id":"ir-evidence-2df9e98c54d6","source_ref":"stepfun-api-pricing","field":"/services/cn/offerings/1/prices/0/rules","locator":"pricing/step-3.7-flash/per-1m-tokens","assertion":"官方中国定价表按百万 Token 列出 step-3.7-flash 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-2e8bfd83357b | — | {"id":"ir-evidence-2e8bfd83357b","source_ref":"stepfun-global-model-catalog","field":"/services/global/account_market","locator":"#market","assertion":"市场按独立官方平台目录来源区分。"} |
| 新增 | /evidence/ir-evidence-33a880946f6b | — | {"id":"ir-evidence-33a880946f6b","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/7/service_id","locator":"#market","assertion":"官方国际市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-348eefe818c0 | — | {"id":"ir-evidence-348eefe818c0","source_ref":"stepfun-global-api-pricing","field":"/services/global/offerings/3/prices/0/rules","locator":"pricing/step-3.5-flash/per-1m-tokens","assertion":"官方国际定价表按百万 Token 列出 step-3.5-flash 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-362d4646841e | — | {"id":"ir-evidence-362d4646841e","source_ref":"stepfun-global-api-pricing","field":"/services/global/billing_currencies","locator":"#pricing","assertion":"官方国际价格表使用美元符号列示金额。"} |
| 新增 | /evidence/ir-evidence-388294e08652 | — | {"id":"ir-evidence-388294e08652","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/11/display_name","locator":"model-catalog/Step ASR","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-3906049b7cf7 | — | {"id":"ir-evidence-3906049b7cf7","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/3/service_id","locator":"#market","assertion":"官方中国市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-3c2d7e7bb725 | — | {"id":"ir-evidence-3c2d7e7bb725","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/8/service_id","locator":"#market","assertion":"官方国际市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-3c5e92462b90 | — | {"id":"ir-evidence-3c5e92462b90","source_ref":"stepfun-global-api-pricing","field":"/services/global/offerings/4/prices/0/rules/0/evidence/0","locator":"pricing/step-1o-turbo-vision/per-1m-tokens","assertion":"官方国际定价表按百万 Token 列出 step-1o-turbo-vision 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-3e0d61ab1566 | — | {"id":"ir-evidence-3e0d61ab1566","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/1/service_id","locator":"#market","assertion":"官方中国市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-3f86b3e15546 | — | {"id":"ir-evidence-3f86b3e15546","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/4/service_id","locator":"#market","assertion":"官方中国市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-403f64a53db1 | — | {"id":"ir-evidence-403f64a53db1","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/4/display_name","locator":"model-catalog/Step-1o Turbo Vision","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-40d6261112d0 | — | {"id":"ir-evidence-40d6261112d0","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/7/provider_model_id","locator":"model-catalog/stepaudio-3-tts","assertion":"StepAudio 3 TTSHuman-level speaking performance The model closely follows natural human sp… (1081 字符) |
| 新增 | /evidence/ir-evidence-415ae6b68185 | — | {"id":"ir-evidence-415ae6b68185","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/1/provider_model_id","locator":"model-catalog/step-3.7-flash","assertion":"Step 3.7 FlashFlagship multimodal reasoning Max context256K StepFun's flagship multimodal r… (1079 字符) |
| 新增 | /evidence/ir-evidence-41f179f97ec9 | — | {"id":"ir-evidence-41f179f97ec9","source_ref":"stepfun-api-pricing","field":"/services/cn/billing_currencies","locator":"#pricing","assertion":"官方定价页明确说明 API 单价以人民币计价。"} |
| 新增 | /evidence/ir-evidence-4207eff5a0ec | — | {"id":"ir-evidence-4207eff5a0ec","source_ref":"stepfun-global-api-pricing","field":"/services/global/offerings/0/prices/0/rules","locator":"pricing/step-5-preview/per-1m-tokens","assertion":"官方国际定价表按百万 Token 列出 step-5-preview 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-4322d574d26b | — | {"id":"ir-evidence-4322d574d26b","source_ref":"stepfun-model-catalog","field":"/provider/kind","locator":"#title","assertion":"阶跃星辰开放平台由 StepFun 以自身品牌提供模型 API；按 Provider 分类语义归为原厂直连。"} |
| 新增 | /evidence/ir-evidence-4329f9e99942 | — | {"id":"ir-evidence-4329f9e99942","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/2/provider_model_id","locator":"model-catalog/step-3.5-flash-2603","assertion":"官方当前目录列出型号「Step 3.5 Flash 2603」，官方定价表用精确 API 模型 ID「step-3.5-flash-2603」标识；两来源交叉对应。"} |
| 新增 | /evidence/ir-evidence-440ce5235dbe | — | {"id":"ir-evidence-440ce5235dbe","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/0/provider_model_id","locator":"model-catalog/step-5-preview","assertion":"-create.md) **视觉** 视觉 ## 视觉理解模型 推理 / 多模态 Step 5 Preview新一代旗舰基模 最大上下文1M 面向真实任务的新一代旗舰基模，重点覆盖编程与专业知识工作，原生… (366 字符) |
| 新增 | /evidence/ir-evidence-44cc825d1373 | — | {"id":"ir-evidence-44cc825d1373","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/12/display_name","locator":"model-catalog/Step-1o Audio","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-45350d62c115 | — | {"id":"ir-evidence-45350d62c115","source_ref":"stepfun-global-api-pricing","field":"/services/global/offerings/0/prices/0/rules/0/evidence/0","locator":"pricing/step-5-preview/per-1m-tokens","assertion":"官方国际定价表按百万 Token 列出 step-5-preview 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-45b8281a4e13 | — | {"id":"ir-evidence-45b8281a4e13","source_ref":"stepfun-global-api-pricing","field":"/services/global/offerings/2/prices/0/rules","locator":"pricing/step-3.5-flash-2603/per-1m-tokens","assertion":"官方国际定价表按百万 Token 列出 step-3.5-flash-2603 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-460a3fb657ae | — | {"id":"ir-evidence-460a3fb657ae","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/4/display_name","locator":"model-catalog/Step-1o Turbo Vision图像 / 视频理解","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-46c24ecc82ee | — | {"id":"ir-evidence-46c24ecc82ee","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/5/display_name","locator":"model-catalog/StepAudio 3 Realtime像真人一样聊，也能边想边做","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-4bc4bd6b063e | — | {"id":"ir-evidence-4bc4bd6b063e","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/0/provider_model_id","locator":"model-catalog/step-5-preview","assertion":"Step 5 PreviewFlagship model for agentic work Max context1M StepFun's flagship model for ag… (1080 字符) |
| 新增 | /evidence/ir-evidence-4c384d147067 | — | {"id":"ir-evidence-4c384d147067","source_ref":"stepfun-global-api-pricing","field":"/services/global/offerings/12/prices/0/rules","locator":"pricing/step-1o-audio/per-1m-tokens","assertion":"官方国际定价表按百万 Token 列出 step-1o-audio 的未命中缓存输入、命中缓存输入和输出价格。"} |
| 新增 | /evidence/ir-evidence-4ded23fecec1 | — | {"id":"ir-evidence-4ded23fecec1","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/12/display_name","locator":"model-catalog/Step-1o Audio稳定型","assertion":"官方当前模型目录列出该展示名称。"} |
| 新增 | /evidence/ir-evidence-4ec4f00379ef | — | {"id":"ir-evidence-4ec4f00379ef","source_ref":"stepfun-global-model-catalog","field":"/services/global/offerings/12/service_id","locator":"#market","assertion":"官方国际市场模型目录列出该型号。"} |
| 新增 | /evidence/ir-evidence-5197e9da405e | — | {"id":"ir-evidence-5197e9da405e","source_ref":"stepfun-model-catalog","field":"/services/cn/offerings/7/display_name","locator":"model-catalog/StepAudio 3 TTS真人级的说话表现","assertion":"官方当前模型目录列出该展示名称。"} |
- 另有 77 项来源台账差异，详见 JSON 回放结果。

### tencent-tokenhub 字段差异

| 新增 | /provider/aliases/2 | — | "大模型服务平台 TokenHub" |
| 更新 | /provider/docs/api | "https://cloud.tencent.com/document/product/1823/130078" | "https://cloud.tencent.com/document/product/1823/130077" |
| 更新 | /provider/website | "https://cloud.tencent.com/product/ai-model" | "https://cloud.tencent.com" |
| 新增 | /rate_cards/ir-rate-card-8b63bf5ea11e | — | {"id":"ir-rate-card-8b63bf5ea11e","offering_ref":"wand-vega-video-1-0-lite-8f642fb8","service_ref":"cn","currency":"CNY","unit":"per_image","rules":[{"id":"ir-price-rule-b3f329063184","priority":1,"when":{"field":"usage.input_image_index","op":"gt","value":5},"rate_items":[{"met… (358 字符) |
| 新增 | /rate_cards/ir-rate-card-eee04bc1538f | — | {"id":"ir-rate-card-eee04bc1538f","offering_ref":"minimax-video-h3-c5392bd8","service_ref":"cn","currency":"CNY","unit":"per_image","rules":[{"id":"ir-price-rule-96948fff16dc","priority":1,"when":{"field":"usage.input_image_index","op":"gt","value":5},"rate_items":[{"metric":"in… (349 字符) |
| 更新 | /rate_cards/kinfra-text-embedding-0.6b-cn-pricing/rules/standard/priority | 10 | 1 |
| 更新 | /rate_cards/kinfra-text-embedding-4b-cn-pricing/rules/standard/priority | 10 | 1 |
| 更新 | /rate_cards/kinfra-vl-embedding-2b-cn-pricing/rules/standard/priority | 10 | 1 |
| 更新 | /rate_cards/kinfra-vl-embedding-8b-cn-pricing/rules/standard/priority | 10 | 1 |
| 新增 | /services/cn/endpoints/tokenhub-api | — | {"id":"tokenhub-api","base_url":"https://tokenhub.tencentmaas.com","api_region":"广州","service_id":"cn","transport":"https","documentation":"https://cloud.tencent.com/document/product/1823/130078"} |
| 新增 | /services/cn/offerings/deepseek-v4-flash/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek-v4-flash","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek-v4-flash"},{"id":"responses/deeps… (647 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-flash/operations/web-search-chat | — | {"id":"web-search-chat","kind":"web_search","output_specs":[{"kind":"structured","fields":["search_results[].index","search_results[].url","search_results[].name","search_results[].snippet","search_results[].site"]}],"parameters":[{"name":"enable","type":"boolean","required":tru… (903 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-flash-0731/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek-v4-flash-0731","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek-v4-flash-0731"},{"id":"respo… (677 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-flash-0731/operations/web-search-chat | — | {"id":"web-search-chat","kind":"web_search","output_specs":[{"kind":"structured","fields":["search_results[].index","search_results[].url","search_results[].name","search_results[].snippet","search_results[].site"]}],"parameters":[{"name":"enable","type":"boolean","required":tru… (913 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-flash-202605 deepseek~1deepseek-v4-flash-0731 deepseek~1deepseek-v4-flash | — | {"id":"ir-offering-81de079991b3","service_id":"cn","model_ref":"deepseek/deepseek-flash","provider_model_id":"deepseek-v4-flash-202605 deepseek/deepseek-v4-flash-0731 deepseek/deepseek-v4-flash","display_name":"DeepSeek-V4-Flash 0731 正式版 原厂直供","operations":[{"id":"text-generatio… (1303 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-pro/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek-v4-pro","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek-v4-pro"},{"id":"responses/deepseek-… (635 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-pro/operations/web-search-chat | — | {"id":"web-search-chat","kind":"web_search","output_specs":[{"kind":"structured","fields":["search_results[].index","search_results[].url","search_results[].name","search_results[].snippet","search_results[].site"]}],"parameters":[{"name":"enable","type":"boolean","required":tru… (899 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-pro-0813/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek-v4-pro-0813","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek-v4-pro-0813"},{"id":"responses… (665 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-pro-0813/operations/web-search-chat | — | {"id":"web-search-chat","kind":"web_search","output_specs":[{"kind":"structured","fields":["search_results[].index","search_results[].url","search_results[].name","search_results[].snippet","search_results[].site"]}],"parameters":[{"name":"enable","type":"boolean","required":tru… (909 字符) |
| 新增 | /services/cn/offerings/deepseek-v4-pro-202606 deepseek~1deepseek-v4-pro-0813 deepseek~1deepseek-v4-pro | — | {"id":"ir-offering-a636892542b2","service_id":"cn","model_ref":"deepseek/deepseek-v4-pro","provider_model_id":"deepseek-v4-pro-202606 deepseek/deepseek-v4-pro-0813 deepseek/deepseek-v4-pro","display_name":"DeepSeek-V4-Pro 0813 正式版 原厂直供","operations":[{"id":"text-generation","kin… (1260 字符) |
| 新增 | /services/cn/offerings/deepseek-v4.1-flash/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek-v4.1-flash","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek-v4.1-flash"},{"id":"responses/d… (659 字符) |
| 新增 | /services/cn/offerings/deepseek-v4.1-flash-1017/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek-v4.1-flash-1017","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek-v4.1-flash-1017"},{"id":"r… (689 字符) |
| 新增 | /services/cn/offerings/deepseek~1deepseek-flash/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek/deepseek-flash","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek/deepseek-flash"},{"id":"res… (683 字符) |
| 新增 | /services/cn/offerings/deepseek~1deepseek-v4-flash-vision-exp/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/deepseek/deepseek-v4-flash-vision-exp","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"deepseek/deepseek-v4-f… (767 字符) |
| 新增 | /services/cn/offerings/glm-5.2/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/glm-5.2","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"glm-5.2"},{"id":"responses/glm-5.2","endpoint_ref":"… (587 字符) |
| 新增 | /services/cn/offerings/glm-5.3/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/glm-5.3","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"glm-5.3"},{"id":"responses/glm-5.3","endpoint_ref":"… (587 字符) |
| 新增 | /services/cn/offerings/glm-5.3-flash/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/glm-5.3-flash","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"glm-5.3-flash"},{"id":"responses/glm-5.3-flash… (623 字符) |
| 新增 | /services/cn/offerings/glm-5.3-flashx/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/glm-5.3-flashx","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"glm-5.3-flashx"},{"id":"responses/glm-5.3-fla… (629 字符) |
| 更新 | /services/cn/offerings/glm-5v-turbo/display_name | "GLM-5V-Turbo" | "GLM-5V-Turbo （2026-10-30下线）" |
| 新增 | /services/cn/offerings/glm-5v-turbo/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/glm-5v-turbo","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"glm-5v-turbo"},{"id":"messages/glm-5v-turbo","e… (450 字符) |
| 新增 | /services/cn/offerings/hunyuan-role-latest/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/hunyuan-role-latest","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"hunyuan-role-latest"},{"id":"messages/hu… (478 字符) |
| 新增 | /services/cn/offerings/hy-image-lite | — | {"id":"ir-offering-9fc759681d95","service_id":"cn","model_ref":null,"provider_model_id":"hy-image-lite","display_name":"HY-Image-Lite （2026-09-15下线）"} |
| 更新 | /services/cn/offerings/hy-image-v3/display_name | "Hy-Image-3.0" | "Hy-Image-3.0 （2026-11-12 下线）" |
| 新增 | /services/cn/offerings/hy-image-v3.0 | — | {"id":"ir-offering-b63f88176687","service_id":"cn","model_ref":null,"provider_model_id":"hy-image-v3.0","display_name":"HY-Image-V3.0 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/hy-mt2-lite/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/hy-mt2-lite","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"hy-mt2-lite"}],"document_ref":"tencent-language-… (284 字符) |
| 新增 | /services/cn/offerings/hy-mt2-plus/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/hy-mt2-plus","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"hy-mt2-plus"}],"document_ref":"tencent-language-… (284 字符) |
| 新增 | /services/cn/offerings/hy-mt2-pro/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/hy-mt2-pro","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"hy-mt2-pro"}],"document_ref":"tencent-language-ap… (282 字符) |
| 新增 | /services/cn/offerings/hy-role/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/hy-role","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"hy-role"},{"id":"messages/hy-role","endpoint_ref":"t… (430 字符) |
| 新增 | /services/cn/offerings/hy3/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/hy3","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"hy3"},{"id":"responses/hy3","endpoint_ref":"tokenhub-api… (563 字符) |
| 新增 | /services/cn/offerings/hy3/operations/web-search-chat | — | {"id":"web-search-chat","kind":"web_search","output_specs":[{"kind":"structured","fields":["search_results[].index","search_results[].url","search_results[].name","search_results[].snippet","search_results[].site"]}],"parameters":[{"name":"enable","type":"boolean","required":tru… (875 字符) |
| 新增 | /services/cn/offerings/hy3/operations/web-search-responses | — | {"id":"web-search-responses","kind":"web_search","output_specs":[{"kind":"structured","fields":["output[].type","output[].action.query","output[].content[].annotations[].url","output[].content[].annotations[].title"]}],"parameters":[{"name":"tools[].type","type":"string","requir… (1120 字符) |
| 新增 | /services/cn/offerings/hy4-preview/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/hy4-preview","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"hy4-preview"},{"id":"responses/hy4-preview","end… (611 字符) |
| 新增 | /services/cn/offerings/kimi-k2.6/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/kimi-k2.6","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"kimi-k2.6"},{"id":"responses/kimi-k2.6","endpoint_… (599 字符) |
| 新增 | /services/cn/offerings/kimi-k2.7-code/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/kimi-k2.7-code","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"kimi-k2.7-code"},{"id":"messages/kimi-k2.7-co… (458 字符) |
| 新增 | /services/cn/offerings/kimi-k2.7-code-highspeed/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/kimi-k2.7-code-highspeed","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"kimi-k2.7-code-highspeed"},{"id":"m… (498 字符) |
| 新增 | /services/cn/offerings/kimi-k2.8-preview/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/kimi-k2.8-preview","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"kimi-k2.8-preview"},{"id":"messages/kimi-k… (470 字符) |
| 新增 | /services/cn/offerings/kimi-k3/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/kimi-k3","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"kimi-k3"},{"id":"responses/kimi-k3","endpoint_ref":"… (587 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/kimi-k3.1-pro","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"kimi-k3.1-pro"},{"id":"responses/kimi-k3.1-pro… (623 字符) |
| 新增 | /services/cn/offerings/kimi-k3.1-pro-highspeed/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/kimi-k3.1-pro-highspeed","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"kimi-k3.1-pro-highspeed"},{"id":"res… (683 字符) |
| 新增 | /services/cn/offerings/kinfra-text-embedding-0.6b/operations/embeddings | — | {"id":"embeddings","kind":"embedding","routes":[{"id":"openai-embeddings","endpoint_ref":"tokenhub-api","protocol":"openai_embeddings","method":"POST","path_template":"/v1/embeddings","request_model_id":"kinfra-text-embedding-0.6b"}],"document_ref":"tencent-vector-api"} |
| 新增 | /services/cn/offerings/kinfra-text-embedding-4b/operations/embeddings | — | {"id":"embeddings","kind":"embedding","routes":[{"id":"openai-embeddings","endpoint_ref":"tokenhub-api","protocol":"openai_embeddings","method":"POST","path_template":"/v1/embeddings","request_model_id":"kinfra-text-embedding-4b"}],"document_ref":"tencent-vector-api"} |
| 新增 | /services/cn/offerings/kinfra-vl-embedding-2b/operations/embeddings | — | {"id":"embeddings","kind":"embedding","routes":[{"id":"openai-embeddings","endpoint_ref":"tokenhub-api","protocol":"openai_embeddings","method":"POST","path_template":"/v1/embeddings","request_model_id":"kinfra-vl-embedding-2b"}],"document_ref":"tencent-vector-api"} |
| 新增 | /services/cn/offerings/kinfra-vl-embedding-8b/operations/embeddings | — | {"id":"embeddings","kind":"embedding","routes":[{"id":"openai-embeddings","endpoint_ref":"tokenhub-api","protocol":"openai_embeddings","method":"POST","path_template":"/v1/embeddings","request_model_id":"kinfra-vl-embedding-8b"}],"document_ref":"tencent-vector-api"} |
| 新增 | /services/cn/offerings/kl-video-v1 | — | {"id":"ir-offering-2f7c1c6e05b0","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v1","display_name":"Kling-Video-v1 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v1-5 | — | {"id":"ir-offering-68212e99f449","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v1-5","display_name":"Kling-Video-v1.5 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v1-6 | — | {"id":"ir-offering-e5a0dd19724d","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v1-6","display_name":"Kling-Video-v1.6 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v2-1 | — | {"id":"ir-offering-d186c7cdb6e2","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v2-1","display_name":"Kling-Video-v2.1 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v2-1-master | — | {"id":"ir-offering-a86a6933b6d2","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v2-1-master","display_name":"Kling-Video-v2.1-master （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v2-5-turbo | — | {"id":"ir-offering-d4f3ce6ecd26","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v2-5-turbo","display_name":"Kling-Video-v2.5-turbo （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v2-6 | — | {"id":"ir-offering-6cdd3e2d08f7","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v2-6","display_name":"Kling-Video-v2.6 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v2-master | — | {"id":"ir-offering-8cb08ec4798f","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v2-master","display_name":"Kling-Video-v2-master （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/kl-video-v3 | — | {"id":"ir-offering-8a505c6cb97b","service_id":"cn","model_ref":null,"provider_model_id":"kl-video-v3","display_name":"Kling-Video-v3 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/mimo-v2.5-pro/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/mimo-v2.5-pro","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"mimo-v2.5-pro"},{"id":"responses/mimo-v2.5-pro… (623 字符) |
| 新增 | /services/cn/offerings/mimo-v2.6-flash/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/mimo-v2.6-flash","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"mimo-v2.6-flash"},{"id":"responses/mimo-v2.6… (635 字符) |
| 新增 | /services/cn/offerings/mimo-v2.6-pro/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/mimo-v2.6-pro","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"mimo-v2.6-pro"},{"id":"responses/mimo-v2.6-pro… (623 字符) |
| 更新 | /services/cn/offerings/minimax-m2.7/display_name | "MiniMax-M2.7" | "MiniMax-M2.7 (2026-11-17下线)" |
| 新增 | /services/cn/offerings/minimax-m2.7/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/minimax-m2.7","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"minimax-m2.7"},{"id":"responses/minimax-m2.7","… (617 字符) |
| 新增 | /services/cn/offerings/minimax-m3/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/minimax-m3","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"minimax-m3"},{"id":"responses/minimax-m3","endpoi… (605 字符) |
| 新增 | /services/cn/offerings/minimax-m3.1-flash/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/minimax-m3.1-flash","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"minimax-m3.1-flash"},{"id":"responses/min… (653 字符) |
| 新增 | /services/cn/offerings/minimax-video-h3/rate_card_ids/1 | — | "ir-rate-card-eee04bc1538f" |
| 新增 | /services/cn/offerings/qwen3.5-flash | — | {"id":"ir-offering-21ff34966c67","service_id":"cn","model_ref":null,"provider_model_id":"qwen3.5-flash","display_name":"Qwen3.5-Flash （2026-09-08下线）","operations":[{"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/qwen3.5-flash","endpoint_ref":"t… (789 字符) |
| 新增 | /services/cn/offerings/qwen3.5-plus | — | {"id":"ir-offering-eefab4b3c110","service_id":"cn","model_ref":null,"provider_model_id":"qwen3.5-plus","display_name":"Qwen3.5-Plus （2026-09-08下线）","operations":[{"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/qwen3.5-plus","endpoint_ref":"toke… (781 字符) |
| 更新 | /services/cn/offerings/seedream-image-v5.0-lite/display_name | "Seedream-Image-v5.0-lite" | "Seedream-Image-v5.0-lite （2026-11-24 下线）" |
| 新增 | /services/cn/offerings/step-5-preview/operations/text-generation | — | {"id":"text-generation","kind":"text_generation","routes":[{"id":"chat-completions/step-5-preview","endpoint_ref":"tokenhub-api","protocol":"chat-completions","method":"POST","path_template":"/v1/chat/completions","request_model_id":"step-5-preview"},{"id":"messages/step-5-previ… (458 字符) |
| 新增 | /services/cn/offerings/vd-video-q2 | — | {"id":"ir-offering-1a494b461198","service_id":"cn","model_ref":null,"provider_model_id":"vd-video-q2","display_name":"Vidu-Video-q2 （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/vd-video-q2-pro | — | {"id":"ir-offering-ad0af734eea9","service_id":"cn","model_ref":null,"provider_model_id":"vd-video-q2-pro","display_name":"Vidu-Video-q2-pro （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/vd-video-q2-pro-fast | — | {"id":"ir-offering-5e374f396c70","service_id":"cn","model_ref":null,"provider_model_id":"vd-video-q2-pro-fast","display_name":"Vidu-Video-q2-pro-fast （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/vd-video-q2-turbo | — | {"id":"ir-offering-d746c1503a73","service_id":"cn","model_ref":null,"provider_model_id":"vd-video-q2-turbo","display_name":"Vidu-Video-q2-turbo （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/vd-video-q3-pro | — | {"id":"ir-offering-85597d4b9261","service_id":"cn","model_ref":null,"provider_model_id":"vd-video-q3-pro","display_name":"Vidu-Video-q3-pro （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/vd-video-q3-turbo | — | {"id":"ir-offering-8b2d1a2f70e4","service_id":"cn","model_ref":null,"provider_model_id":"vd-video-q3-turbo","display_name":"Vidu-Video-q3-turbo （2026-09-15下线）"} |
| 新增 | /services/cn/offerings/wand-vega-video-1.0-lite/rate_card_ids/1 | — | "ir-rate-card-8b63bf5ea11e" |
| 新增 | /services/cn/service_capabilities | — | [] |
| 新增 | /bindings/~1plans~10~1evidence_refs | — | ["plan-token-plan-general-lite"] |
| 新增 | /bindings/~1plans~11~1evidence_refs | — | ["plan-token-plan-general-standard"] |
| 新增 | /bindings/~1plans~12~1evidence_refs | — | ["plan-token-plan-general-pro"] |
| 新增 | /bindings/~1plans~13~1evidence_refs | — | ["plan-token-plan-general-max"] |
| 新增 | /bindings/~1plans~14~1evidence_refs | — | ["plan-token-plan-hy-lite"] |
| 新增 | /bindings/~1plans~15~1evidence_refs | — | ["plan-token-plan-hy-standard"] |
| 新增 | /bindings/~1plans~16~1evidence_refs | — | ["plan-token-plan-hy-pro"] |
| 新增 | /bindings/~1plans~17~1evidence_refs | — | ["plan-token-plan-hy-max"] |
| 新增 | /bindings/~1plans~18~1evidence_refs | — | ["plan-coding-plan-lite"] |
| 新增 | /bindings/~1plans~19~1evidence_refs | — | ["plan-coding-plan-pro"] |
| 新增 | /bindings/~1provider~1sources | — | ["tencent-model-list","tencent-model-pricing","tencent-api-usage","tencent-language-api","tencent-vector-api","tencent-web-search","tencent-api-guide-index","tencent-image-api-index","tencent-video-api-index","tencent-3d-api-index","tencent-speech-api-index","tencent-multimodal-… (595 字符) |
| 新增 | /bindings/~1rate_cards~10~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~11~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~110~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1100~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1101~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1102~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1103~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1104~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1105~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1106~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1107~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1108~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1109~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~111~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1110~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1111~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1112~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1113~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1114~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1115~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1116~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1117~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1118~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1119~1rules~10~1source_refs | — | ["ir-evidence-f59dd989e10d"] |
| 新增 | /bindings/~1rate_cards~1119~1source_refs | — | ["ir-evidence-529cf974fff1"] |
| 新增 | /bindings/~1rate_cards~112~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1120~1rules~10~1source_refs | — | ["ir-evidence-5fb5e50b7abb"] |
| 新增 | /bindings/~1rate_cards~1120~1source_refs | — | ["ir-evidence-c75a52aa899e"] |
| 新增 | /bindings/~1rate_cards~1121~1rules~10~1source_refs | — | ["ir-evidence-074d995986d7"] |
| 新增 | /bindings/~1rate_cards~1121~1source_refs | — | ["ir-evidence-056cd077468c"] |
| 新增 | /bindings/~1rate_cards~1122~1rules~10~1source_refs | — | ["ir-evidence-1014bcc682d9"] |
| 新增 | /bindings/~1rate_cards~1122~1source_refs | — | ["ir-evidence-7d44f04dab1e"] |
| 新增 | /bindings/~1rate_cards~1123~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1124~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1125~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1126~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1127~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1128~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1129~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~113~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1130~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1131~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1132~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1133~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1134~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1135~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1136~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1137~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1138~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1139~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~114~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1140~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1141~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1142~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1143~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1144~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1145~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~1146~1rules~10~1source_refs | — | ["ir-evidence-f8fd92e34b95"] |
| 新增 | /bindings/~1rate_cards~1146~1source_refs | — | ["ir-evidence-8b3380db779b"] |
| 新增 | /bindings/~1rate_cards~1147~1rules~10~1source_refs | — | ["ir-evidence-438086716ce6"] |
| 新增 | /bindings/~1rate_cards~1147~1source_refs | — | ["ir-evidence-328c2b095405"] |
| 新增 | /bindings/~1rate_cards~115~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~116~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~117~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~118~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~119~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~12~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~120~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~121~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~122~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~123~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~124~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~125~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~126~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~127~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~128~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~129~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~13~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~130~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~131~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~132~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~133~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~134~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~135~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~136~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~137~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~138~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~139~1source_refs | — | ["model-pricing-20261025"] |
| 新增 | /bindings/~1rate_cards~14~1source_refs | — | ["model-pricing-20261025"] |
- 另有 1626 项来源台账差异，详见 JSON 回放结果。

### volcengine 字段差异

| 更新 | /rate_cards/volcengine-doubao-seed3d-2-0-260328-dd2f6eb5-3d/rules/generated-3d-asset/priority | 10 | 1 |
| 更新 | /rate_cards/volcengine-hyper3d-gen2-260112-9c17718a-3d/rules/generated-3d-asset/priority | 10 | 1 |
| 更新 | /services/cn/name | "中国市场" | "中国区" |
| 新增 | /services/cn/offerings/doubao-embedding-vision-250615 | — | {"id":"ir-offering-f8df65f78571","service_id":"cn","model_ref":null,"provider_model_id":"doubao-embedding-vision-250615","display_name":"doubao-embedding-vision-250615"} |
| 新增 | /services/cn/offerings/doubao-seedance-1-0-pro-250528 | — | {"id":"ir-offering-781e40ef4c24","service_id":"cn","model_ref":null,"provider_model_id":"doubao-seedance-1-0-pro-250528","display_name":"doubao-seedance-1-0-pro-250528"} |
| 新增 | /services/cn/offerings/doubao-seedance-1-0-pro-fast-251015 | — | {"id":"ir-offering-018d9c45ce64","service_id":"cn","model_ref":null,"provider_model_id":"doubao-seedance-1-0-pro-fast-251015","display_name":"doubao-seedance-1-0-pro-fast-251015"} |
| 新增 | /bindings/~1plans~10~1billing_options~10~1evidence_refs | — | ["cn-volcengine-coding-lite-price-month"] |
| 新增 | /bindings/~1plans~10~1billing_options~11~1evidence_refs | — | ["cn-volcengine-coding-lite-price-quarter"] |
| 新增 | /bindings/~1plans~10~1evidence_refs | — | ["cn-volcengine-coding-lite-scope","cn-volcengine-coding-lite-price-month","cn-volcengine-coding-lite-price-quarter"] |
| 新增 | /bindings/~1plans~11~1billing_options~10~1evidence_refs | — | ["cn-volcengine-coding-pro-price-month"] |
| 新增 | /bindings/~1plans~11~1billing_options~11~1evidence_refs | — | ["cn-volcengine-coding-pro-price-quarter"] |
| 新增 | /bindings/~1plans~11~1evidence_refs | — | ["cn-volcengine-coding-pro-scope","cn-volcengine-coding-pro-price-month","cn-volcengine-coding-pro-price-quarter"] |
| 新增 | /bindings/~1plans~12~1billing_options~10~1evidence_refs | — | ["cn-volcengine-agent-small-price-month"] |
| 新增 | /bindings/~1plans~12~1evidence_refs | — | ["cn-volcengine-agent-small-price-month","cn-volcengine-agent-small-quota","cn-volcengine-agent-small-scope"] |
| 新增 | /bindings/~1plans~13~1billing_options~10~1evidence_refs | — | ["cn-volcengine-agent-medium-price-month"] |
| 新增 | /bindings/~1plans~13~1evidence_refs | — | ["cn-volcengine-agent-medium-price-month","cn-volcengine-agent-medium-quota","cn-volcengine-agent-medium-scope"] |
| 新增 | /bindings/~1plans~14~1billing_options~10~1evidence_refs | — | ["cn-volcengine-agent-large-price-month"] |
| 新增 | /bindings/~1plans~14~1evidence_refs | — | ["cn-volcengine-agent-large-price-month","cn-volcengine-agent-large-quota","cn-volcengine-agent-large-scope"] |
| 新增 | /bindings/~1plans~15~1billing_options~10~1evidence_refs | — | ["cn-volcengine-agent-max-price-month"] |
| 新增 | /bindings/~1plans~15~1evidence_refs | — | ["cn-volcengine-agent-max-price-month","cn-volcengine-agent-max-quota","cn-volcengine-agent-max-scope"] |
| 新增 | /bindings/~1plans~16~1billing_options~10~1evidence_refs | — | ["global-byteplus-coding-personal-lite-price-month"] |
| 新增 | /bindings/~1plans~16~1billing_options~11~1evidence_refs | — | ["global-byteplus-coding-personal-lite-price-quarter"] |
| 新增 | /bindings/~1plans~16~1evidence_refs | — | ["global-byteplus-coding-personal-lite-price-month","global-byteplus-coding-personal-lite-price-quarter","global-byteplus-coding-personal-lite-scope"] |
| 新增 | /bindings/~1plans~17~1billing_options~10~1evidence_refs | — | ["global-byteplus-coding-personal-pro-price-month"] |
| 新增 | /bindings/~1plans~17~1billing_options~11~1evidence_refs | — | ["global-byteplus-coding-personal-pro-price-quarter"] |
| 新增 | /bindings/~1plans~17~1evidence_refs | — | ["global-byteplus-coding-personal-pro-price-month","global-byteplus-coding-personal-pro-price-quarter","global-byteplus-coding-personal-pro-scope"] |
| 新增 | /bindings/~1plans~18~1billing_options~10~1evidence_refs | — | ["global-byteplus-coding-team-lite-price-month"] |
| 新增 | /bindings/~1plans~18~1evidence_refs | — | ["global-byteplus-coding-team-lite-price-month","global-byteplus-coding-team-lite-scope"] |
| 新增 | /bindings/~1plans~19~1billing_options~10~1evidence_refs | — | ["global-byteplus-coding-team-pro-price-month"] |
| 新增 | /bindings/~1plans~19~1evidence_refs | — | ["global-byteplus-coding-team-pro-price-month","global-byteplus-coding-team-pro-scope"] |
| 新增 | /bindings/~1provider~1sources/16 | — | "volcengine-agent-plan-overview" |
| 新增 | /bindings/~1provider~1sources/17 | — | "volcengine-agent-plan-faq" |
| 新增 | /bindings/~1provider~1sources/18 | — | "byteplus-modelark-coding-plan-personal-overview" |
| 新增 | /bindings/~1provider~1sources/19 | — | "byteplus-modelark-coding-plan-team-overview" |
| 新增 | /bindings/~1provider~1sources/20 | — | "byteplus-modelark-models-and-plans" |
| 新增 | /bindings/~1provider~1sources/21 | — | "byteplus-modelark-agent-plan-integration" |
| 新增 | /bindings/~1provider~1sources/22 | — | "byteplus-modelark-coding-plan-activity" |
| 新增 | /bindings/~1provider~1sources/23 | — | "byteplus-modelark-agent-plan-activity" |
| 新增 | /bindings/~1provider~1sources/24 | — | "volcengine-model-list" |
| 新增 | /bindings/~1provider~1sources/25 | — | "volcengine-model-pricing" |
| 新增 | /bindings/~1provider~1sources/26 | — | "volcengine-model-billing" |
| 新增 | /bindings/~1provider~1sources/27 | — | "volcengine-chat-api" |
| 新增 | /bindings/~1provider~1sources/28 | — | "volcengine-create-model-responses-api" |
| 新增 | /bindings/~1provider~1sources/29 | — | "volcengine-messages-api" |
| 新增 | /bindings/~1provider~1sources/30 | — | "volcengine-web-search" |
| 新增 | /bindings/~1provider~1sources/31 | — | "volcengine-responses-api-migration" |
| 新增 | /bindings/~1provider~1sources/32 | — | "volcengine-integrate-third-party-tools" |
| 新增 | /bindings/~1provider~1sources/33 | — | "volcengine-coding-plan-overview" |
| 新增 | /bindings/~1provider~1sources/34 | — | "volcengine-coding-plan-faq" |
| 新增 | /bindings/~1rate_cards~10~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~11~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~110~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~111~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~112~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~113~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~114~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~12~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~13~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~132~1rules~10~1source_refs | — | ["ir-evidence-37805435c9c3"] |
| 新增 | /bindings/~1rate_cards~132~1source_refs | — | ["ir-evidence-22cdd7e487c7","ir-evidence-7f5fdffc1542"] |
| 新增 | /bindings/~1rate_cards~133~1rules~10~1source_refs | — | ["ir-evidence-8d13f9bf6d6b"] |
| 新增 | /bindings/~1rate_cards~133~1source_refs | — | ["ir-evidence-5a61b1730559","ir-evidence-ecd7068eebb5","ir-evidence-3548bcd60a2f"] |
| 新增 | /bindings/~1rate_cards~134~1rules~10~1source_refs | — | ["ir-evidence-cf48743d92b7"] |
| 新增 | /bindings/~1rate_cards~134~1rules~11~1source_refs | — | ["ir-evidence-09d5db5b61fa"] |
| 新增 | /bindings/~1rate_cards~134~1rules~12~1source_refs | — | ["ir-evidence-98bc336322c5"] |
| 新增 | /bindings/~1rate_cards~134~1rules~13~1source_refs | — | ["ir-evidence-7ccce7015f1e"] |
| 新增 | /bindings/~1rate_cards~134~1source_refs | — | ["ir-evidence-5e92955deb06","ir-evidence-a5b4596a041c","ir-evidence-fc500b3599d2","ir-evidence-ba359b6b1989","ir-evidence-133d10f486c0","ir-evidence-f849c0837852","ir-evidence-cdfadb74849f","ir-evidence-b37cafb1054c"] |
| 新增 | /bindings/~1rate_cards~138~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~139~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~14~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~140~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~141~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~142~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~143~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~144~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~145~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~146~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~147~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~148~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~149~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~15~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~150~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~151~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~152~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~153~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~154~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~155~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~156~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~157~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~158~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~159~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~16~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~160~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~161~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~162~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~163~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~164~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~165~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~166~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~167~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~168~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~169~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~17~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~170~1source_refs | — | ["byteplus-modelark-model-pricing"] |
| 新增 | /bindings/~1rate_cards~171~1source_refs | — | ["volcengine-model-pricing"] |
| 新增 | /bindings/~1rate_cards~18~1source_refs | — | ["volcengine-model-pricing"] |
- 另有 189 项来源台账差异，详见 JSON 回放结果。

### xiaomi 字段差异

| 新增 | /provider/aliases/1 | — | "MiMo" |
| 更新 | /provider/name | "小米 MiMo" | "Xiaomi MiMo" |
| 更新 | /provider/website | "https://platform.xiaomimimo.com" | "https://mimo.xiaomi.com/" |
| 新增 | /rate_cards/ir-rate-card-620ca41fe4eb | — | {"id":"ir-rate-card-620ca41fe4eb","offering_ref":"xiaomi-mimo-v2-6-pro-global","service_ref":"global","currency":"USD","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-07666b59dde8","priority":1,"when":{"field":"inference_type","op":"eq","value":"real… (921 字符) |
| 新增 | /rate_cards/ir-rate-card-74d38272c50e | — | {"id":"ir-rate-card-74d38272c50e","offering_ref":"xiaomi-mimo-v2-6-flash-cn","service_ref":"cn","currency":"CNY","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-d33e8102def3","priority":1,"when":{"field":"inference_type","op":"eq","value":"realtime"}… (907 字符) |
| 新增 | /rate_cards/ir-rate-card-dd62f44f074e | — | {"id":"ir-rate-card-dd62f44f074e","offering_ref":"xiaomi-mimo-v2-6-pro-cn","service_ref":"cn","currency":"CNY","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-377609c050bd","priority":1,"when":{"field":"inference_type","op":"eq","value":"realtime"},"… (908 字符) |
| 新增 | /rate_cards/ir-rate-card-e5fa7e975c9b | — | {"id":"ir-rate-card-e5fa7e975c9b","offering_ref":"xiaomi-mimo-v2-6-flash-global","service_ref":"global","currency":"USD","unit":"per_1m_tokens","offer_type":"standard","rules":[{"id":"ir-price-rule-283f19c26200","priority":1,"when":{"field":"inference_type","op":"eq","value":"re… (919 字符) |
| 更新 | /rate_cards/xiaomi-mimo-v2-5-asr-cn-audio-cny/rules/audio-duration/priority | 10 | 1 |
| 更新 | /rate_cards/xiaomi-mimo-v2-5-asr-global-audio-usd/rules/audio-duration/priority | 10 | 1 |
| 更新 | /rate_cards/xiaomi-mimo-v2-6-pro-ultraspeed-cn-realtime-cny/rules/realtime/priority | 10 | 1 |
| 更新 | /rate_cards/xiaomi-mimo-v2-6-pro-ultraspeed-cn-realtime-cny/rules/realtime/rate_items/input/amount_decimal | "30" | "30.00" |
| 更新 | /rate_cards/xiaomi-mimo-v2-6-pro-ultraspeed-cn-realtime-cny/rules/realtime/rate_items/output/amount_decimal | "60" | "60.00" |
| 新增 | /rate_cards/xiaomi-mimo-v2-6-pro-ultraspeed-cn-realtime-cny/rules/realtime/when | — | {"field":"inference_type","op":"eq","value":"realtime"} |
| 更新 | /rate_cards/xiaomi-mimo-v2-6-pro-ultraspeed-global-realtime-usd/rules/realtime/priority | 10 | 1 |
| 新增 | /rate_cards/xiaomi-mimo-v2-6-pro-ultraspeed-global-realtime-usd/rules/realtime/when | — | {"field":"inference_type","op":"eq","value":"realtime"} |
| 更新 | /services/cn/name | "中国市场" | "中国区" |
| 更新 | /services/cn/offerings/mimo-v2.5-asr/display_name | "mimo-v2.5-asr" | "MiMo-V2.5-ASR" |
| 更新 | /services/cn/offerings/mimo-v2.6-flash/display_name | "mimo-v2.6-flash" | "Xiaomi MiMo:mimo-v2.6-flash" |
| 新增 | /services/cn/offerings/mimo-v2.6-flash/rate_card_ids/2 | — | "ir-rate-card-74d38272c50e" |
| 更新 | /services/cn/offerings/mimo-v2.6-pro/display_name | "mimo-v2.6-pro" | "Xiaomi MiMo:mimo-v2.6-pro" |
| 新增 | /services/cn/offerings/mimo-v2.6-pro/rate_card_ids/2 | — | "ir-rate-card-dd62f44f074e" |
| 更新 | /services/cn/offerings/mimo-v2.6-pro-ultraspeed/display_name | "mimo-v2.6-pro-ultraspeed" | "Xiaomi MiMo:mimo-v2.6-pro-ultraspeed" |
| 更新 | /services/global/name | "国际市场" | "国际区" |
| 更新 | /services/global/offerings/mimo-v2.5-asr/display_name | "mimo-v2.5-asr" | "MiMo-V2.5-ASR" |
| 更新 | /services/global/offerings/mimo-v2.6-flash/display_name | "mimo-v2.6-flash" | "Xiaomi MiMo:mimo-v2.6-flash" |
| 新增 | /services/global/offerings/mimo-v2.6-flash/rate_card_ids/2 | — | "ir-rate-card-e5fa7e975c9b" |
| 更新 | /services/global/offerings/mimo-v2.6-pro/display_name | "mimo-v2.6-pro" | "Xiaomi MiMo:mimo-v2.6-pro" |
| 新增 | /services/global/offerings/mimo-v2.6-pro/rate_card_ids/2 | — | "ir-rate-card-620ca41fe4eb" |
| 更新 | /services/global/offerings/mimo-v2.6-pro-ultraspeed/display_name | "mimo-v2.6-pro-ultraspeed" | "Xiaomi MiMo:mimo-v2.6-pro-ultraspeed" |
| 新增 | /bindings/~1plans~10~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~10~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~11~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~11~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~12~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~12~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~12~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~13~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~13~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~13~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~14~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~14~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~14~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~15~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~15~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~15~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~16~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~16~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~16~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~17~1billing_options~10~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~17~1billing_options~11~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1plans~17~1evidence_refs | — | ["xiaomi-evidence-token-plan"] |
| 新增 | /bindings/~1provider~1sources | — | ["xiaomi-api-models","xiaomi-model-list-doc","xiaomi-api-pricing","xiaomi-token-plan","xiaomi-rate-limits","xiaomi-deep-thinking","xiaomi-structured-output","xiaomi-batch-api","xiaomi-openai-chat","xiaomi-openai-responses","xiaomi-anthropic-messages","xiaomi-web-search","xiaomi-… (358 字符) |
| 新增 | /bindings/~1rate_cards~110~1rules~10~1source_refs | — | ["ir-evidence-245e2237e47b"] |
| 新增 | /bindings/~1rate_cards~110~1source_refs | — | ["ir-evidence-2fc1ad3c73aa"] |
| 新增 | /bindings/~1rate_cards~111~1rules~10~1source_refs | — | ["ir-evidence-96c52aab2a44"] |
| 新增 | /bindings/~1rate_cards~111~1source_refs | — | ["ir-evidence-48774c0a2448"] |
| 新增 | /bindings/~1rate_cards~114~1rules~10~1source_refs | — | ["ir-evidence-44b9a40cf88d"] |
| 新增 | /bindings/~1rate_cards~114~1rules~11~1source_refs | — | ["ir-evidence-5918c21b3ea0"] |
| 新增 | /bindings/~1rate_cards~114~1source_refs | — | ["ir-evidence-8dbee60f1e3c"] |
| 新增 | /bindings/~1rate_cards~115~1rules~10~1source_refs | — | ["ir-evidence-079bb8559ecc"] |
| 新增 | /bindings/~1rate_cards~115~1rules~11~1source_refs | — | ["ir-evidence-504b3257341b"] |
| 新增 | /bindings/~1rate_cards~115~1source_refs | — | ["ir-evidence-8a8cf01ccee6"] |
| 新增 | /bindings/~1rate_cards~116~1rules~10~1source_refs | — | ["ir-evidence-c3e92dbde0ad"] |
| 新增 | /bindings/~1rate_cards~116~1rules~11~1source_refs | — | ["ir-evidence-3ea63348a0dc"] |
| 新增 | /bindings/~1rate_cards~116~1source_refs | — | ["ir-evidence-31cbe87ed47c"] |
| 新增 | /bindings/~1rate_cards~117~1rules~10~1source_refs | — | ["ir-evidence-fbc54ac4204c"] |
| 新增 | /bindings/~1rate_cards~117~1rules~11~1source_refs | — | ["ir-evidence-cf78936caa32"] |
| 新增 | /bindings/~1rate_cards~117~1source_refs | — | ["ir-evidence-cd38ff11584d"] |
| 新增 | /bindings/~1rate_cards~14~1rules~10~1source_refs | — | ["ir-evidence-01d270f8408f"] |
| 新增 | /bindings/~1rate_cards~14~1source_refs | — | ["ir-evidence-f874b592c8d4"] |
| 新增 | /bindings/~1rate_cards~15~1rules~10~1source_refs | — | ["ir-evidence-de5afade1cc6"] |
| 新增 | /bindings/~1rate_cards~15~1source_refs | — | ["ir-evidence-53be5ecfe778"] |
| 新增 | /bindings/~1services~10~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~10~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~10~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-c044d1c1b817","ir-evidence-a0aabc6d0457"] |
| 新增 | /bindings/~1services~10~1offerings~10~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~11~1availability~1evidence_refs | — | ["xiaomi-evidence-deprecation-cn"] |
| 新增 | /bindings/~1services~10~1offerings~11~1evidence_refs/1 | — | "xiaomi-evidence-deprecation-cn" |
| 新增 | /bindings/~1services~10~1offerings~11~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-deprecation-cn"] |
| 新增 | /bindings/~1services~10~1offerings~12~1availability~1evidence_refs | — | ["xiaomi-evidence-deprecation-cn"] |
| 新增 | /bindings/~1services~10~1offerings~12~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-deprecation-cn"] |
| 新增 | /bindings/~1services~10~1offerings~13~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~13~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~13~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~14~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~14~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~14~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~15~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~15~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~15~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~16~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~16~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-a38f28175017"] |
| 新增 | /bindings/~1services~10~1offerings~16~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~17~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~17~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-7a5c9fa3e386"] |
| 新增 | /bindings/~1services~10~1offerings~17~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~18~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1offerings~18~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-b37aed2ea3b8"] |
| 新增 | /bindings/~1services~10~1offerings~18~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~10~1service_capabilities~10~1availability~1evidence_refs | — | ["xiaomi-evidence-capabilities"] |
| 新增 | /bindings/~1services~10~1service_capabilities~10~1evidence_refs | — | ["xiaomi-evidence-capabilities"] |
| 新增 | /bindings/~1services~10~1service_capabilities~10~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-capabilities"] |
| 新增 | /bindings/~1services~10~1service_capabilities~11~1availability~1evidence_refs | — | ["xiaomi-evidence-web-search-cn"] |
| 新增 | /bindings/~1services~10~1service_capabilities~11~1evidence_refs | — | ["xiaomi-evidence-web-search-cn"] |
| 新增 | /bindings/~1services~10~1service_capabilities~11~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-web-search-cn"] |
| 新增 | /bindings/~1services~10~1sources | — | ["xiaomi-api-pricing","xiaomi-api-models","xiaomi-asr-api"] |
| 新增 | /bindings/~1services~11~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~10~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~10~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-e52795b86ad2"] |
| 新增 | /bindings/~1services~11~1offerings~10~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~11~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~11~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-898da72df76c"] |
| 新增 | /bindings/~1services~11~1offerings~11~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~110~1availability~1evidence_refs | — | ["xiaomi-evidence-deprecation"] |
| 新增 | /bindings/~1services~11~1offerings~110~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-deprecation"] |
| 新增 | /bindings/~1services~11~1offerings~111~1availability~1evidence_refs | — | ["xiaomi-evidence-deprecation"] |
| 新增 | /bindings/~1services~11~1offerings~111~1evidence_refs/1 | — | "xiaomi-evidence-deprecation" |
| 新增 | /bindings/~1services~11~1offerings~111~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-deprecation"] |
| 新增 | /bindings/~1services~11~1offerings~12~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~12~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-043ba3bd6478"] |
| 新增 | /bindings/~1services~11~1offerings~12~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~13~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~13~1evidence_refs | — | ["xiaomi-evidence-current-model-list","ir-evidence-736296a7fc9e","ir-evidence-27cef88dbedf"] |
| 新增 | /bindings/~1services~11~1offerings~13~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~14~1availability~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~14~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
| 新增 | /bindings/~1services~11~1offerings~14~1lifecycle~1evidence_refs | — | ["xiaomi-evidence-current-model-list"] |
- 另有 74 项来源台账差异，详见 JSON 回放结果。

## 证据边界

- 这是固定本地快照回放，不证明当前上游页面仍与快照内容一致。
- 缺少的来源快照不会用空正文代替；相关入口应明确失败并补齐静态快照后重跑。
- 两种 Provider 数据基线的候选/IR 指纹和预览状态相同，表示采集事实及是否可投影不依赖既有 Provider 文件。仅当状态为 `converted` 时才比较 ProviderDocument 指纹；`needs_review` 的空投影不视为转换通过。空基线共享规范 Model Registry，因为身份解析需要该参考输入。正式文件只读指纹用于检测误写。

