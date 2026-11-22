# xai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-22T04:01:18.258Z |
| 前一候选指纹 | `sha256:585bfa67cb6a329ac0c993b7255f7ac1f4a3424aa8601a8bbe7f187bbff5817f` |
| 本次候选指纹 | `sha256:508c4be1a22f2a1a97219949b1ed3a07002c4ab074347c6b23f3d5d77d4790b2` |
| 来源快照 | 25 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 229 项，更新 11 项，缺席待核实 0 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 xai-models › note | 更新 | 由官方定价精确模型 ID 映射当前价格模型；目前 9 条。目录中的未计价文案不自动升级为供应。 | 由官方定价精确模型 ID 映射当前价格模型；目前 10 条。目录中的未计价文案不自动升级为供应。 |

### 文档观察

#### 来源 / xai-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：grok-build-0.1 |

#### 来源 / xai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：grok-build-0.1 |
| tables › 记录 Text API Pricing › rows › 记录 grok-build-0.1 (&lt; 200k prompt tokens) | 新增 | 未记录 | • grok-build-0.1 (&lt; 200k prompt tokens)<br>• 500k<br>• $1.00<br>• $0.20<br>• $2.00 |
| tables › 记录 Text API Pricing › rows › 记录 grok-build-0.1 (≥ 200k prompt tokens) | 新增 | 未记录 | • grok-build-0.1 (≥ 200k prompt tokens)<br>• 500k<br>• $2.00<br>• $0.40<br>• $4.00 |

#### 来源 / xai-speech-to-text-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：Transcribe audio files into text with a single API call, or stream audio in real time over WebSocket. The API supports 15 audio formats, word-level timestamps, multichannel transcription, and text formatting.<br>&#124; `keyterm` &#124; string &#124; &#124; &#124; A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters. &#124;<br>&#124; `400` &#124; Bad request &#124; Missing `file`/`url`, unsupported format, missing `sample_rate` for raw audio, `format=true` without `language` &#124;<br>* [Voice Overview](/developers/model-capabilities/audio/voice) — Overview of all SpaceXSI voice capabilities<br>* [Text to Speech](/developers/model-capabilities/audio/text-to-speech) — Convert text to speech<br>* [API Reference — Speech to text](/developers/rest-api-reference/inference/voice#speech-to-text---rest) — Full REST endpoint specification | 差异项（新增；相同内容已省略）：Transcribe audio files into text with a single API call, or stream audio in real time over WebSocket. The API supports 15 audio formats, word-level timestamps, multichannel transcription, text formatting, and redaction of sensitive data.<br>&#124; `keyterm` &#124; string &#124; &#124; &#124; A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand The Universe`). Max 100 terms, each up to 50 characters. &#124;<br>Set `redact` to replace sensitive values in the transcript with tags such as `[NAME_1]`, on both the REST and WebSocket endpoints.<br>* If redaction cannot run, the request fails instead of returning the unredacted transcript: `503` on REST, an `error` event on WebSocket.<br>`pii` leaves card details, bank account numbers, and routing numbers in the transcript. Add `pci`, `bank_account`, and `routing_number` to redact them.<br>Redaction is tuned for English, Spanish, French, German, and Portuguese. It costs $0.05 per hour of audio on top of transcription. |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：Transcribe audio files into text with a single API call, or stream audio in real time over WebSocket. The API supports 15 audio formats, word-level timestamps, multichannel transcription, and text formatting. | 差异片段（新增；相同内容已省略）：Transcribe audio files into text with a single API call, or stream audio in real time over WebSocket. The API supports 15 audio formats, word-level timestamps, multichannel transcription, text formatting, and redaction of sensitive data. |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：Redaction is tuned for English, Spanish, French, German, and Portuguese. It costs $0.05 per hour of audio on top of transcription. |
| tables | 更新 | 列表（12 项）<details><summary>展开完整内容</summary><ul><li>heading：Model Selection<br>headers：• Model<br>• Description<br>rows：• • `grok-voice-transcribe-2.0`<br>• Our best transcription model. Default when `model` is omitted.</li><li>heading：Supported Languages<br>headers：• Language<br>• Code<br>• 空字符串<br>• Language<br>• Code<br>rows：列表（19 项）<details><summary>展开完整内容</summary><ul><li>• Arabic<br>• `ar`<br>• 空字符串<br>• Italian<br>• `it`</li><li>• Bosnian<br>• `bs`<br>• 空字符串<br>• Japanese<br>• `ja`</li><li>• Bulgarian<br>• `bg`<br>• 空字符串<br>• Korean<br>• `ko`</li><li>• Cantonese<br>• `yue`<br>• 空字符串<br>• Macedonian<br>• `mk`</li><li>• Catalan<br>• `ca`<br>• 空字符串<br>• Malay<br>• `ms`</li><li>• Chinese (Mandarin)<br>• `zh`<br>• 空字符串<br>• Norwegian (Bokmål)<br>• `nb`</li><li>• Croatian<br>• `hr`<br>• 空字符串<br>• Persian<br>• `fa`</li><li>• Czech<br>• `cs`<br>• 空字符串<br>• Polish<br>• `pl`</li><li>• Danish<br>• `da`<br>• 空字符串<br>• Portuguese<br>• `pt`</li><li>• Dutch<br>• `nl`<br>• 空字符串<br>• Romanian<br>• `ro`</li><li>• English<br>• `en`<br>• 空字符串<br>• Russian<br>• `ru`</li><li>• Filipino<br>• `fil`<br>• 空字符串<br>• Slovak<br>• `sk`</li><li>• Finnish<br>• `fi`<br>• 空字符串<br>• Spanish<br>• `es`</li><li>• French<br>• `fr`<br>• 空字符串<br>• Swedish<br>• `sv`</li><li>• German<br>• `de`<br>• 空字符串<br>• Thai<br>• `th`</li><li>• Greek<br>• `el`<br>• 空字符串<br>• Turkish<br>• `tr`</li><li>• Hindi<br>• `hi`<br>• 空字符串<br>• Ukrainian<br>• `uk`</li><li>• Hungarian<br>• `hu`<br>• 空字符串<br>• Urdu<br>• `ur`</li><li>• Indonesian<br>• `id`<br>• 空字符串<br>• Vietnamese<br>• `vi`</li></ul></details></li><li>heading：Supported Languages<br>headers：• Language<br>• Base code<br>• Regional codes<br>rows：• • Spanish<br>• `es` (Mexican Spanish, `es-MX`)<br>• `es-ES` (European Spanish)<br>• • Portuguese<br>• `pt` (Brazilian Portuguese, `pt-BR`)<br>• `pt-PT` (European Portuguese)<br>• • Arabic<br>• `ar` (Egyptian Arabic, `ar-EG`)<br>• `ar-AE` (Emirati Arabic), `ar-SA` (Saudi Arabic)</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Request Body</li><li>headers：• Parameter<br>• Type<br>• Default<br>• Required<br>• Description</li><li>rows：列表（13 项）<details><summary>展开完整内容</summary><ul><li>• `file`<br>• file<br>• 空字符串<br>• ✓†<br>• Audio file to transcribe. Max **500 MB**. See [Supported Formats](#supported-audio-formats). Must be the last field in the multipart form.</li><li>• `url`<br>• string<br>• 空字符串<br>• ✓†<br>• URL of an audio file to download and transcribe (server-side).</li><li>• `model`<br>• string<br>• `grok-voice-transcribe-2.0`<br>• 空字符串<br>• `grok-voice-transcribe-2.0` (default).</li><li>• `audio_format`<br>• string<br>• 空字符串<br>• 空字符串<br>• Format hint for raw/headerless audio: `pcm`, `mulaw`, `alaw`. Container formats are auto-detected — do not set this field for MP3, WAV, etc.</li><li>• `sample_rate`<br>• integer<br>• 空字符串<br>• 空字符串<br>• Sample rate in Hz. Only required for raw audio (`pcm`, `mulaw`, `alaw`). Supported: `8000`, `16000`, `22050`, `24000`, `44100`, `48000`.</li><li>• `language`<br>• string<br>• 空字符串<br>• 空字符串<br>• Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages).</li><li>• `format`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, enables Inverse Text Normalization — converts spoken numbers/currency to written form (e.g. "one hundred dollars" → "$100"). Requires `language`. See [Supported Languages](#supported-languages) for coverage.</li><li>• `multichannel`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, transcribes each audio channel independently. Results returned in the `channels` array.</li><li>• `channels`<br>• integer<br>• 空字符串<br>• 空字符串<br>• Number of audio channels (2–8). Only required for multichannel raw audio. Auto-detected for container formats.</li><li>• `diarize`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, enables speaker diarization. Each word in the response includes a `speaker` field (integer) identifying the detected speaker.</li><li>• `keyterm`<br>• string<br>• 空字符串<br>• 空字符串<br>• A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters.</li><li>• `filler_words`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, filler words (e.g. "uh", "um", "er") are included in the transcript. When `false` (default), filler words are automatically removed from the transcript text and the `words` array.</li><li>• `vad_threshold`<br>• number<br>• `0.5`<br>• 空字符串<br>• Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio segments scoring below the threshold are treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate.</li></ul></details></li></ul></details></li><li>heading：Response<br>headers：• Field<br>• Type<br>• Description<br>rows：• • `text`<br>• string<br>• Full transcript text.<br>• • `language`<br>• string<br>• Detected language as a BCP-47 code (e.g. `en`, `es-mx`).<br>• • `duration`<br>• number<br>• Audio duration in seconds (3 d.p.).<br>• • `words`<br>• array<br>• Word-level segments with `text`, `start`, `end`, and `speaker` (integer, only when `diarize=true`).<br>• • `channels`<br>• array<br>• Per-channel transcripts (only when `multichannel=true`). Each entry has `index`, `text`, and `words`.</li><li>heading：Container formats (auto-detected)<br>headers：• Format<br>• Extension<br>• Description<br>rows：• • WAV<br>• `.wav`<br>• Waveform Audio — lossless, best quality input<br>• • MP3<br>• `.mp3`<br>• MPEG Audio Layer 3 — widely supported<br>• • OGG<br>• `.ogg`<br>• Ogg container — open format<br>• • Opus<br>• `.opus`<br>• Opus codec — low-latency, high quality<br>• • FLAC<br>• `.flac`<br>• Free Lossless Audio Codec — lossless compression<br>• • AAC<br>• `.aac`<br>• Advanced Audio Coding<br>• • MP4<br>• `.mp4`<br>• MPEG-4 container<br>• • M4A<br>• `.m4a`<br>• MPEG-4 Audio — Apple ecosystem standard<br>• • MKV<br>• `.mkv`<br>• Matroska container — supports MP3, AAC, and FLAC audio codecs<br>• • WebM<br>• `.webm`<br>• WebM container — typically Opus audio from browsers<br>• • AVI<br>• `.avi`<br>• Audio Video Interleave<br>• • MOV<br>• `.mov`<br>• QuickTime container</li><li>heading：Raw formats (require `audio_format` and `sample_rate`)<br>headers：• Format<br>• `audio_format` value<br>• Description<br>rows：• • PCM<br>• `pcm`<br>• Signed 16-bit little-endian (2 bytes/sample)<br>• • µ-law<br>• `mulaw`<br>• G.711 µ-law (1 byte/sample)<br>• • A-law<br>• `alaw`<br>• G.711 A-law (1 byte/sample)</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Query Parameters</li><li>headers：• Parameter<br>• Type<br>• Default<br>• Description</li><li>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• `sample_rate`<br>• integer<br>• `16000`<br>• Audio sample rate in Hz. Ignored for `encoding=opus` — Opus packets are sample-rate-agnostic.</li><li>• `encoding`<br>• string<br>• `pcm`<br>• Audio encoding: `pcm`, `mulaw`, `alaw`, or `opus`. See [Opus Streaming](#opus-streaming).</li><li>• `interim_results`<br>• boolean<br>• `false`<br>• When `true`, emit partial transcripts `is_final=false` every ~500 ms.</li><li>• `endpointing`<br>• integer<br>• `400`<br>• Silence duration (ms) before utterance-final event. Range: 0–5000. `0` = fire on any VAD silence boundary.</li><li>• `language`<br>• string<br>• 空字符串<br>• Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages).</li><li>• `format`<br>• boolean<br>• `false`<br>• When `true`, converts spoken numbers, currencies, and units to written form. Requires `language`. See [Supported Languages](#supported-languages) for coverage.</li><li>• `model`<br>• string<br>• `grok-voice-transcribe-2.0`<br>• `grok-voice-transcribe-2.0` (default).</li><li>• `diarize`<br>• boolean<br>• 空字符串<br>• When `true`, enables speaker diarization. Words include a `speaker` field identifying the detected speaker.</li><li>• `filler_words`<br>• boolean<br>• `false`<br>• When `true`, filler words (e.g. `uh`, `um`, `er`) are included in the transcript. When `false` (default), filler words are automatically removed.</li><li>• `multichannel`<br>• boolean<br>• `false`<br>• Per-channel transcription. Requires `channels` ≥ 2. Not supported with `encoding=opus`.</li><li>• `channels`<br>• integer<br>• `1`<br>• Number of interleaved audio channels (max 8).</li><li>• `keyterm`<br>• string<br>• 空字符串<br>• A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the parameter for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters.</li><li>• `smart_turn`<br>• number<br>• 空字符串<br>• End-of-turn detection threshold (0.0–1.0). When set, enables Smart Turn — an ML model predicts whether the speaker has finished their thought at each silence boundary. See [Smart Turn](#smart-turn).</li><li>• `smart_turn_timeout`<br>• integer<br>• 空字符串<br>• Maximum silence duration (ms) before forcing `speech_final`, even when the Smart Turn model predicts the speaker hasn't finished. Range: 1–5000. Only applies when `smart_turn` is enabled. See [Smart Turn](#smart-turn).</li><li>• `vad_threshold`<br>• number<br>• `0.08`<br>• Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio in chunks scoring below the threshold is treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate. Does not affect endpointing or `speech_final` timing.</li></ul></details></li></ul></details></li><li>heading：Server Events<br>headers：• Event<br>• Description<br>rows：• • `transcript.created`<br>• Server ready — wait for this before sending audio.<br>• • `transcript.partial`<br>• Transcript result with `text`, `words`, `is_final`, `speech_final`, `start`, `duration`. Includes `channel_index` when `multichannel=true`. Includes `end_of_turn_confidence` when `smart_turn` is enabled.<br>• • `transcript.done`<br>• Final transcript after `audio.done`. `duration` always present. Includes `channel_index` when `multichannel=true` — one event sent per channel. Connection closes after this.<br>• • `error`<br>• Error with `message` field. Most errors (including undecodable audio frames) close the connection; client message parse errors keep it open.</li><li>heading：Server Events<br>headers：• `is_final`<br>• `speech_final`<br>• Meaning<br>rows：• • `false`<br>• `false`<br>• **Interim** — text may change (only when `interim_results=true`)<br>• • `true`<br>• `false`<br>• **Chunk final** — text locked, ~3s of speech finalized. When `smart_turn` is enabled, silence pauses where the model's confidence is below the threshold are demoted to chunk final instead of utterance final.<br>• • `true`<br>• `true`<br>• **Utterance final** — speaker stopped, complete stitched utterance. When `smart_turn` is enabled, only fires when the model's end-of-turn confidence exceeds the threshold, or when `smart_turn_timeout` is exceeded.</li><li>heading：Smart Turn<br>headers：• Threshold<br>• Behavior<br>rows：• • `0.5`<br>• Balanced — catches most natural turn endings<br>• • `0.7`<br>• Conservative — requires higher confidence to end a turn, better for dictation and number sequences<br>• • `0.9`<br>• Very conservative — only ends on highly confident turn completions</li><li>heading：Error Handling<br>headers：• Status<br>• Meaning<br>• Action<br>rows：• • `200`<br>• Success<br>• Transcription in the response body<br>• • `400`<br>• Bad request<br>• Missing `file`/`url`, unsupported format, missing `sample_rate` for raw audio, `format=true` without `language`<br>• • `401`<br>• Unauthorized<br>• API key is missing or invalid<br>• • `413`<br>• Payload too large<br>• File exceeds 500 MB<br>• • `429`<br>• Rate limited<br>• Back off and retry with exponential delay<br>• • `502`<br>• Bad gateway<br>• URL download failed (when using `url`)<br>• • `503`<br>• Service unavailable<br>• Backend not available — retry</li></ul></details> | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>heading：Model Selection<br>headers：• Model<br>• Description<br>rows：• • `grok-voice-transcribe-2.0`<br>• Our best transcription model. Default when `model` is omitted.</li><li>heading：Supported Languages<br>headers：• Language<br>• Code<br>• 空字符串<br>• Language<br>• Code<br>rows：列表（19 项）<details><summary>展开完整内容</summary><ul><li>• Arabic<br>• `ar`<br>• 空字符串<br>• Italian<br>• `it`</li><li>• Bosnian<br>• `bs`<br>• 空字符串<br>• Japanese<br>• `ja`</li><li>• Bulgarian<br>• `bg`<br>• 空字符串<br>• Korean<br>• `ko`</li><li>• Cantonese<br>• `yue`<br>• 空字符串<br>• Macedonian<br>• `mk`</li><li>• Catalan<br>• `ca`<br>• 空字符串<br>• Malay<br>• `ms`</li><li>• Chinese (Mandarin)<br>• `zh`<br>• 空字符串<br>• Norwegian (Bokmål)<br>• `nb`</li><li>• Croatian<br>• `hr`<br>• 空字符串<br>• Persian<br>• `fa`</li><li>• Czech<br>• `cs`<br>• 空字符串<br>• Polish<br>• `pl`</li><li>• Danish<br>• `da`<br>• 空字符串<br>• Portuguese<br>• `pt`</li><li>• Dutch<br>• `nl`<br>• 空字符串<br>• Romanian<br>• `ro`</li><li>• English<br>• `en`<br>• 空字符串<br>• Russian<br>• `ru`</li><li>• Filipino<br>• `fil`<br>• 空字符串<br>• Slovak<br>• `sk`</li><li>• Finnish<br>• `fi`<br>• 空字符串<br>• Spanish<br>• `es`</li><li>• French<br>• `fr`<br>• 空字符串<br>• Swedish<br>• `sv`</li><li>• German<br>• `de`<br>• 空字符串<br>• Thai<br>• `th`</li><li>• Greek<br>• `el`<br>• 空字符串<br>• Turkish<br>• `tr`</li><li>• Hindi<br>• `hi`<br>• 空字符串<br>• Ukrainian<br>• `uk`</li><li>• Hungarian<br>• `hu`<br>• 空字符串<br>• Urdu<br>• `ur`</li><li>• Indonesian<br>• `id`<br>• 空字符串<br>• Vietnamese<br>• `vi`</li></ul></details></li><li>heading：Supported Languages<br>headers：• Language<br>• Base code<br>• Regional codes<br>rows：• • Spanish<br>• `es` (Mexican Spanish, `es-MX`)<br>• `es-ES` (European Spanish)<br>• • Portuguese<br>• `pt` (Brazilian Portuguese, `pt-BR`)<br>• `pt-PT` (European Portuguese)<br>• • Arabic<br>• `ar` (Egyptian Arabic, `ar-EG`)<br>• `ar-AE` (Emirati Arabic), `ar-SA` (Saudi Arabic)</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Request Body</li><li>headers：• Parameter<br>• Type<br>• Default<br>• Required<br>• Description</li><li>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• `file`<br>• file<br>• 空字符串<br>• ✓†<br>• Audio file to transcribe. Max **500 MB**. See [Supported Formats](#supported-audio-formats). Must be the last field in the multipart form.</li><li>• `url`<br>• string<br>• 空字符串<br>• ✓†<br>• URL of an audio file to download and transcribe (server-side).</li><li>• `model`<br>• string<br>• `grok-voice-transcribe-2.0`<br>• 空字符串<br>• `grok-voice-transcribe-2.0` (default).</li><li>• `audio_format`<br>• string<br>• 空字符串<br>• 空字符串<br>• Format hint for raw/headerless audio: `pcm`, `mulaw`, `alaw`. Container formats are auto-detected — do not set this field for MP3, WAV, etc.</li><li>• `sample_rate`<br>• integer<br>• 空字符串<br>• 空字符串<br>• Sample rate in Hz. Only required for raw audio (`pcm`, `mulaw`, `alaw`). Supported: `8000`, `16000`, `22050`, `24000`, `44100`, `48000`.</li><li>• `language`<br>• string<br>• 空字符串<br>• 空字符串<br>• Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages).</li><li>• `format`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, enables Inverse Text Normalization — converts spoken numbers/currency to written form (e.g. "one hundred dollars" → "$100"). Requires `language`. See [Supported Languages](#supported-languages) for coverage.</li><li>• `multichannel`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, transcribes each audio channel independently. Results returned in the `channels` array.</li><li>• `channels`<br>• integer<br>• 空字符串<br>• 空字符串<br>• Number of audio channels (2–8). Only required for multichannel raw audio. Auto-detected for container formats.</li><li>• `diarize`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, enables speaker diarization. Each word in the response includes a `speaker` field (integer) identifying the detected speaker.</li><li>• `keyterm`<br>• string<br>• 空字符串<br>• 空字符串<br>• A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand The Universe`). Max 100 terms, each up to 50 characters.</li><li>• `filler_words`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, filler words (e.g. "uh", "um", "er") are included in the transcript. When `false` (default), filler words are automatically removed from the transcript text and the `words` array.</li><li>• `vad_threshold`<br>• number<br>• `0.5`<br>• 空字符串<br>• Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio segments scoring below the threshold are treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate.</li><li>• `redact`<br>• string<br>• 空字符串<br>• 空字符串<br>• Types of sensitive data to replace with tags: `pii`, `pci`, `phi`, or a single type such as `ssn`. Repeat the field for multiple values. See [Redaction](#redaction).</li><li>• `show_redacted_text`<br>• boolean<br>• `false`<br>• 空字符串<br>• When `true`, each redacted word in the response includes a `redacted_text` field with the original words. Only applies with `redact`.</li></ul></details></li></ul></details></li><li>heading：Response<br>headers：• Field<br>• Type<br>• Description<br>rows：• • `text`<br>• string<br>• Full transcript text.<br>• • `language`<br>• string<br>• Detected language as a BCP-47 code (e.g. `en`, `es-mx`).<br>• • `duration`<br>• number<br>• Audio duration in seconds (3 d.p.).<br>• • `words`<br>• array<br>• Word-level segments with `text`, `start`, `end`, `speaker` (integer, only when `diarize=true`), and `redacted_text` (only when `show_redacted_text=true`).<br>• • `channels`<br>• array<br>• Per-channel transcripts (only when `multichannel=true`). Each entry has `index`, `text`, and `words`.</li><li>heading：Redaction<br>headers：• Value<br>• Types<br>rows：• • `pii`<br>• `name`, `name_given`, `name_family`, `name_medical_professional`, `username`, `password`, `phone_number`, `email_address`, `ip_address`, `url`, `filename`, `location`, `location_address`, `location_city`, `location_state`, `location_zip`, `location_country`, `location_coordinate`, `ssn`, `passport_number`, `vehicle_id`, `healthcare_number`, `account_number`, `numerical_pii`, `dob`, `age`, `date`, `date_interval`, `time`, `duration`, `money`, `organization`, `organization_medical_facility`, `occupation`, `event`, `language`, `origin`, `religion`, `political_affiliation`, `marital_status`, `gender_sexuality`, `physical_attribute`, `zodiac_sign`<br>• • `pci`<br>• `credit_card`, `credit_card_expiration`, `cvv`<br>• • `phi`<br>• `condition`, `drug`, `dose`, `injury`, `blood_type`, `medical_process`, `statistics`<br>• • Ungrouped<br>• `bank_account`, `routing_number`, `drivers_license`, `pin`</li><li>heading：Container formats (auto-detected)<br>headers：• Format<br>• Extension<br>• Description<br>rows：• • WAV<br>• `.wav`<br>• Waveform Audio — lossless, best quality input<br>• • MP3<br>• `.mp3`<br>• MPEG Audio Layer 3 — widely supported<br>• • OGG<br>• `.ogg`<br>• Ogg container — open format<br>• • Opus<br>• `.opus`<br>• Opus codec — low-latency, high quality<br>• • FLAC<br>• `.flac`<br>• Free Lossless Audio Codec — lossless compression<br>• • AAC<br>• `.aac`<br>• Advanced Audio Coding<br>• • MP4<br>• `.mp4`<br>• MPEG-4 container<br>• • M4A<br>• `.m4a`<br>• MPEG-4 Audio — Apple ecosystem standard<br>• • MKV<br>• `.mkv`<br>• Matroska container — supports MP3, AAC, and FLAC audio codecs<br>• • WebM<br>• `.webm`<br>• WebM container — typically Opus audio from browsers<br>• • AVI<br>• `.avi`<br>• Audio Video Interleave<br>• • MOV<br>• `.mov`<br>• QuickTime container</li><li>heading：Raw formats (require `audio_format` and `sample_rate`)<br>headers：• Format<br>• `audio_format` value<br>• Description<br>rows：• • PCM<br>• `pcm`<br>• Signed 16-bit little-endian (2 bytes/sample)<br>• • µ-law<br>• `mulaw`<br>• G.711 µ-law (1 byte/sample)<br>• • A-law<br>• `alaw`<br>• G.711 A-law (1 byte/sample)</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Query Parameters</li><li>headers：• Parameter<br>• Type<br>• Default<br>• Description</li><li>rows：列表（16 项）<details><summary>展开完整内容</summary><ul><li>• `sample_rate`<br>• integer<br>• `16000`<br>• Audio sample rate in Hz. Ignored for `encoding=opus` — Opus packets are sample-rate-agnostic.</li><li>• `encoding`<br>• string<br>• `pcm`<br>• Audio encoding: `pcm`, `mulaw`, `alaw`, or `opus`. See [Opus Streaming](#opus-streaming).</li><li>• `interim_results`<br>• boolean<br>• `false`<br>• When `true`, emit partial transcripts `is_final=false` every ~500 ms.</li><li>• `endpointing`<br>• integer<br>• `400`<br>• Silence duration (ms) before utterance-final event. Range: 0–5000. `0` = fire on any VAD silence boundary.</li><li>• `language`<br>• string<br>• 空字符串<br>• Language code (e.g. `en`, `fr`, `de`). Biases transcription toward that language and selects the formatting rules for `format=true`. See [Supported Languages](#supported-languages).</li><li>• `format`<br>• boolean<br>• `false`<br>• When `true`, converts spoken numbers, currencies, and units to written form. Requires `language`. See [Supported Languages](#supported-languages) for coverage.</li><li>• `model`<br>• string<br>• `grok-voice-transcribe-2.0`<br>• `grok-voice-transcribe-2.0` (default).</li><li>• `diarize`<br>• boolean<br>• 空字符串<br>• When `true`, enables speaker diarization. Words include a `speaker` field identifying the detected speaker.</li><li>• `filler_words`<br>• boolean<br>• `false`<br>• When `true`, filler words (e.g. `uh`, `um`, `er`) are included in the transcript. When `false` (default), filler words are automatically removed.</li><li>• `multichannel`<br>• boolean<br>• `false`<br>• Per-channel transcription. Requires `channels` ≥ 2. Not supported with `encoding=opus`.</li><li>• `channels`<br>• integer<br>• `1`<br>• Number of interleaved audio channels (max 8).</li><li>• `keyterm`<br>• string<br>• 空字符串<br>• A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the parameter for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters.</li><li>• `smart_turn`<br>• number<br>• 空字符串<br>• End-of-turn detection threshold (0.0–1.0). When set, enables Smart Turn — an ML model predicts whether the speaker has finished their thought at each silence boundary. See [Smart Turn](#smart-turn).</li><li>• `smart_turn_timeout`<br>• integer<br>• 空字符串<br>• Maximum silence duration (ms) before forcing `speech_final`, even when the Smart Turn model predicts the speaker hasn't finished. Range: 1–5000. Only applies when `smart_turn` is enabled. See [Smart Turn](#smart-turn).</li><li>• `vad_threshold`<br>• number<br>• `0.08`<br>• Speech-probability threshold for the voice-activity gate (0.0–1.0). Audio in chunks scoring below the threshold is treated as non-speech and skipped for transcription. Lower values transcribe quieter or noisier speech (e.g. narrowband telephony) but may produce spurious text for background noise. `0` disables the gate. Does not affect endpointing or `speech_final` timing.</li><li>• `redact`<br>• string<br>• 空字符串<br>• Types of sensitive data to replace with tags. Repeat the parameter for multiple values. Interim results are not sent when set. See [Redaction](#redaction).</li></ul></details></li></ul></details></li><li>heading：Server Events<br>headers：• Event<br>• Description<br>rows：• • `transcript.created`<br>• Server ready — wait for this before sending audio.<br>• • `transcript.partial`<br>• Transcript result with `text`, `words`, `is_final`, `speech_final`, `start`, `duration`. Includes `channel_index` when `multichannel=true`. Includes `end_of_turn_confidence` when `smart_turn` is enabled.<br>• • `transcript.done`<br>• Final transcript after `audio.done`. `duration` always present. Includes `channel_index` when `multichannel=true` — one event sent per channel. Connection closes after this.<br>• • `error`<br>• Error with `message` field. Most errors (including undecodable audio frames) close the connection; client message parse errors keep it open.</li><li>heading：Server Events<br>headers：• `is_final`<br>• `speech_final`<br>• Meaning<br>rows：• • `false`<br>• `false`<br>• **Interim** — text may change (only when `interim_results=true`)<br>• • `true`<br>• `false`<br>• **Chunk final** — text locked, ~3s of speech finalized. When `smart_turn` is enabled, silence pauses where the model's confidence is below the threshold are demoted to chunk final instead of utterance final.<br>• • `true`<br>• `true`<br>• **Utterance final** — speaker stopped, complete stitched utterance. When `smart_turn` is enabled, only fires when the model's end-of-turn confidence exceeds the threshold, or when `smart_turn_timeout` is exceeded.</li><li>heading：Smart Turn<br>headers：• Threshold<br>• Behavior<br>rows：• • `0.5`<br>• Balanced — catches most natural turn endings<br>• • `0.7`<br>• Conservative — requires higher confidence to end a turn, better for dictation and number sequences<br>• • `0.9`<br>• Very conservative — only ends on highly confident turn completions</li><li>heading：Error Handling<br>headers：• Status<br>• Meaning<br>• Action<br>rows：• • `200`<br>• Success<br>• Transcription in the response body<br>• • `400`<br>• Bad request<br>• Missing `file`/`url`, unsupported format, missing `sample_rate` for raw audio, `format=true` without `language`, unsupported `redact` value<br>• • `401`<br>• Unauthorized<br>• API key is missing or invalid<br>• • `413`<br>• Payload too large<br>• File exceeds 500 MB<br>• • `429`<br>• Rate limited<br>• Back off and retry with exponential delay<br>• • `502`<br>• Bad gateway<br>• URL download failed (when using `url`)<br>• • `503`<br>• Service unavailable<br>• Backend not available, or redaction could not run — retry</li></ul></details> |

### 市场 / global

#### Capability / collection-management

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / file-storage

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / speech-to-text › Operation / transcription

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 参数（parameters） › 记录 keyterm › 说明（description） | 更新 | A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand+The+Universe`). Max 100 terms, each up to 50 characters. | A key term to bias transcription toward (e.g. product names, proper nouns). Repeat the field for multiple terms (e.g. `keyterm=Understand The Universe`). Max 100 terms, each up to 50 characters. |
| 参数（parameters） › 记录 redact › 说明（description） | 新增 | 未记录 | Types of sensitive data to replace with tags: `pii`, `pci`, `phi`, or a single type such as `ssn`. Repeat the field for multiple values. See [Redaction](#redaction). |
| 参数（parameters） › 记录 redact › 名称（name） | 新增 | 未记录 | redact |
| 参数（parameters） › 记录 redact › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 redact › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.redact<br>• /stt:query.redact |
| 参数（parameters） › 记录 redact › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 show_redacted_text › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 show_redacted_text › 说明（description） | 新增 | 未记录 | When `true`, each redacted word in the response includes a `redacted_text` field with the original words. Only applies with `redact`. |
| 参数（parameters） › 记录 show_redacted_text › 名称（name） | 新增 | 未记录 | show_redacted_text |
| 参数（parameters） › 记录 show_redacted_text › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 show_redacted_text › 参数路径（route_mappings） | 新增 | 未记录 | • /stt:body.show_redacted_text |
| 参数（parameters） › 记录 show_redacted_text › 类型（type） | 新增 | 未记录 | boolean |

#### Capability / text-to-speech

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-0309-non-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-0309-non-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-non-reasoning › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-0309-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-0309-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-reasoning › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-multi-agent-0309

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-multi-agent-0309 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-multi-agent-0309 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence | 更新 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） | 更新 | 列表（6 项）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1.25<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.16<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.32<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：4<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.4<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.8<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：10<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li></ul></details> | 列表（6 项）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1.25<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.16<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.32<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：4<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.4<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.8<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：10<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li></ul></details> |
| supply observations › 记录 0 › evidence | 更新 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |

#### Model / grok-4.3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.3 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.6

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.6 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.6 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.7

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.7 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.7 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-build-0.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 展示名称（display_name） | 新增 | 未记录 | grok-build-0.1 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-build-0.1，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 官方价格表列出 grok-build-0.1，并有通用文本推理 API 参考。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | API 参考列出文本与图像 chat prompt 的推理端点。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /chat/completions。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | chat-completions API 协议。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-build-0.1；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 新增 | 未记录 | xai-chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 新增 | 未记录 | • grok-build-0.1 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 已由官方 API 文档描述，未实测 API 调用。 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 链接指向对应官方可读 API 文档。 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 新增 | 未记录 | https://docs.x.ai/developers/rest-api-reference/inference/responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 该 Route 使用 global Endpoint。 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 新增 | 未记录 | global |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | API 参考列出 Responses 推理端点。 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出 POST 方法。 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | Route 按官方用途 text_generation 分类。 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 官方 API 文档列出路径 /responses。 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | responses API 协议。 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 新增 | 未记录 | 价格表确认模型 ID grok-build-0.1；该 Route 文档说明其所属 API。 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 新增 | 未记录 | xai-responses |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 新增 | 未记录 | • grok-build-0.1 |
| prices › 记录 grok-build-0.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-build-0.1 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 2 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.4 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &lt;200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | priority |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 官方定价页明确所有价格均为 USD。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #key-information |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 4 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.8 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | &gt;=200000 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 8 |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 价格表以精确的 Provider 模型 ID 列价。 |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-build-0.1 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | 当前价格表含精确模型行，作为公开按量供应证据。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | grok-build-0.1 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 新增 | 未记录 | xAI API 定价来源属于 global Service。 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 新增 | 未记录 | xai-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 第 1 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 1 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:13 |
| supply observations › 记录 0 › evidence › 第 1 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 2 项 › assertion | 新增 | 未记录 | xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。 |
| supply observations › 记录 0 › evidence › 第 2 项 › locator | 新增 | 未记录 | #text-api-pricing/table:Text API Pricing/row:14 |
| supply observations › 记录 0 › evidence › 第 2 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 3 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 3 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › assertion | 新增 | 未记录 | 官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 |
| supply observations › 记录 0 › evidence › 第 4 项 › locator | 新增 | 未记录 | #priority-processing-pricing |
| supply observations › 记录 0 › evidence › 第 4 项 › source ref | 新增 | 未记录 | xai-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / grok-voice-3.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-voice-3.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-voice-3.0 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-voice-transcribe-2.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-voice-transcribe-2.0 › capability ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `xai-subscription-pricing` · xAI X Subscription 套餐周期、价格与用量倍率 | https://docs.x.ai/x-subscription/pricing | 2026-11-22T04:01:16.889Z | 200 | `sha256:1c317f26e6820635b393c4ff3bf4da97d066d441dfaeb26c2ad2f4a0f00763d5` |
| global | `xai-models` · xAI Grok 与多模态模型目录 | https://docs.x.ai/developers/models | 2026-11-22T04:01:16.886Z | 200 | `sha256:31d52e77653e42f0fd61034b6dfb7a824a0232bcbd28a8c36daab9282903f90c` |
| global | `xai-pricing` · xAI xAI API 模型与功能定价 | https://docs.x.ai/developers/pricing | 2026-11-22T04:01:17.018Z | 200 | `sha256:634bacf2609157ccf9dc48b97abf8f2f3be4698a2ca19de1bb746608f59bf393` |
| global | `xai-models-api` · xAI Inference API 模型清单端点（调用需账号 API Key） | https://docs.x.ai/developers/rest-api-reference/inference/models | 2026-11-22T04:01:17.076Z | 200 | `sha256:fa8ebbc9bda427b4a9eabd3e3cdf8ede1546b664d2686105a80de1d72ba0513b` |
| global | `xai-chat-completions` · xAI Chat Completions API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions | 2026-11-22T04:01:17.256Z | 200 | `sha256:6e0fc6cee129b0511520035eb31b756b94898a3cef46e2fe9873463c5484b4a5` |
| global | `xai-responses` · xAI Responses API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/responses | 2026-11-22T04:01:17.145Z | 200 | `sha256:c3df54cc89e58d274ce0d5bedd348994d96e415654388898b1e1f7765e35087a` |
| global | `xai-images-api` · xAI Images API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/images | 2026-11-22T04:01:17.326Z | 200 | `sha256:e8ff958abc419b52ffc75f6c7b852976f27994ecf099fbc95b79ce2a56bcff2a` |
| global | `xai-videos-api` · xAI Videos API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 2026-11-22T04:01:17.321Z | 200 | `sha256:43b8c3d4bc01ab3aa4927c2c17b18d85687371364d8d0436437b9dd8d5494587` |
| global | `xai-batch-api` · xAI Batch API 文档 | https://docs.x.ai/developers/advanced-api-usage/batch-api | 2026-11-22T04:01:17.397Z | 200 | `sha256:a876e803b0e657f3295b378d23237855d25010063e40f1d372fc44186774e601` |
| global | `xai-batches-api-reference` · xAI Batches REST API Schema | https://docs.x.ai/developers/rest-api-reference/inference/batches | 2026-11-22T04:01:17.394Z | 200 | `sha256:061f8d496e68551d144d10ef50d07bdfe32f115ef6917da31d6de0154d63bc94` |
| global | `xai-files-api` · xAI Files API 管理文档 | https://docs.x.ai/developers/files/managing-files | 2026-11-22T04:01:17.466Z | 200 | `sha256:a32a2451cb838a3ce7af9f6c9faf5cd51dbf642e1108bd0a74d40e8d432248fb` |
| global | `xai-collections-api` · xAI Collections 管理 API 参考 | https://docs.x.ai/developers/rest-api-reference/collections/collection | 2026-11-22T04:01:17.459Z | 200 | `sha256:f69cd4a1c6083248f482da1f402c0015cf4da0840c1fa03211daee777e8cef5c` |
| global | `xai-tools-overview` · xAI 服务端工具总览 | https://docs.x.ai/developers/tools/overview | 2026-11-22T04:01:17.534Z | 200 | `sha256:4454ac7fb13009472a45550f4cd29bf7800dcf146b6ae85c65645077d13a2da8` |
| global | `xai-web-search` · xAI Web Search 工具文档 | https://docs.x.ai/developers/tools/web-search | 2026-11-22T04:01:17.637Z | 200 | `sha256:112076794096ad8111271025ba1e26dc51408665db316f71259b9b91fcfd6a87` |
| global | `xai-x-search` · xAI X Search 工具文档 | https://docs.x.ai/developers/tools/x-search | 2026-11-22T04:01:17.701Z | 200 | `sha256:f4fe7f828dda626dd9dadc8adf7d2c2b959729cfc7da91c87fb57afd8864688a` |
| global | `xai-collections-search` · xAI Collections Search 工具与 Responses API 文件搜索 | https://docs.x.ai/developers/tools/collections-search | 2026-11-22T04:01:17.703Z | 200 | `sha256:37905942248ba5a42e4d0153034fa623ec0685a2049e2e1e85d27f37ac9db215` |
| global | `xai-code-execution` · xAI Code Execution 工具输入与处理说明 | https://docs.x.ai/developers/tools/code-execution | 2026-11-22T04:01:17.766Z | 200 | `sha256:1750ed48bafa4729c61e97842270322262269603043ef4d6bab6812973d14cfc` |
| global | `xai-tool-streaming-sync` · xAI 服务端工具调用输入与结果输出方式 | https://docs.x.ai/developers/tools/streaming-and-sync | 2026-11-22T04:01:17.895Z | 200 | `sha256:298effb1665326421d6ba2afd47655d7dc87ff3bb778537eca097e41336e3887` |
| global | `xai-voice` · xAI Voice API 通用能力与价格说明 | https://docs.x.ai/developers/model-capabilities/audio/voice | 2026-11-22T04:01:18.005Z | 200 | `sha256:119aa6307beda51e7737c8d448929424befe561acda3af7f28a9bf1f67fd745b` |
| global | `xai-speech-to-speech` · xAI Speech-to-Speech WebSocket 协议与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech | 2026-11-22T04:01:17.966Z | 200 | `sha256:9ede1e7ccb477a8168bf59c01e2f1e18763b50d1534274ca041e5eb124aa2dfc` |
| global | `xai-speech-to-text` · xAI Speech-to-Text 默认模型与接口 | https://docs.x.ai/developers/models/speech-to-text | 2026-11-22T04:01:18.070Z | 200 | `sha256:4ac70847490171af8298df5dc681984ebee2c1f8c8fd684ed44de4ac21fbaf6c` |
| global | `xai-speech-to-text-guide` · xAI Speech-to-Text 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text | 2026-11-22T04:01:18.073Z | 200 | `sha256:0bfa698d0c9c2cb236ce00d1f0a51463605d33b745c2c01c1950933e9812be83` |
| global | `xai-text-to-speech` · xAI Text-to-Speech 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/text-to-speech | 2026-11-22T04:01:18.141Z | 200 | `sha256:c524ce270c69eace531ebeeb3f32347b714ee00a65eabf5f975ece9f7c1d0410` |
| global | `xai-regions` · xAI 区域端点与模型可用范围 | https://docs.x.ai/developers/advanced-api-usage/regions | 2026-11-22T04:01:18.138Z | 200 | `sha256:c92f04f2c5d0da0282c1372402f97ff0d3fe53db561007495931b1fa15b41130` |
| global | `xai-imagine` · xAI Imagine API 图像与视频能力说明 | https://docs.x.ai/developers/model-capabilities/imagine | 2026-11-22T04:01:18.258Z | 200 | `sha256:11f0ab3edcbd12cede027388a296aab92016f7705e4cc50e7ea40cd066d617e9` |

## xai 专属证据与核对说明

### xAI 官方通用资料采集候选

- 来源快照：25 份
- 文档观察：25 份；模型 ID 提及：96 条
- 已生成 Offering：10 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- Inference API `/v1/models` 返回认证 API Key 可见型号；本适配器不携带凭证请求该接口。
- 当前供应仅由官方当前定价表中的精确模型价格行证明；目录中的别名、旧型号和文案提及不自动等同于可计价供应。
- US regional endpoint 仅适用于官方明确列出的 grok-4.7 / grok-4.6；global 和 US 区域不合并费率。
- X Subscription 产品订阅与按量 API 费率分开；付费订阅中的 API access 不等于包含 API 调用额度。
- X Subscription 是账号产品订阅，并非 API 按量费率；不能把订阅用量倍率当成 API 价格倍率。
- 本轮未检出固定 Enterprise 价格；官方公开文档只列自助订阅及 Teams 席位价格。
- 本候选未请求需 API Key 的 Models API。
