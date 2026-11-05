# openai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `openai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-05T08:15:44.768Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:6fdd0a8ab725f9a74a2e865c88315795f13eebfe2c1a92e43ae02805705af9ed` |
| 来源快照 | 11 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 7820 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / openai

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • GET /v1/models 返回认证账号可见范围，不调用需 Key 的真实接口。<br>• 公开模型文档混有 API、ChatGPT、预览/弃用与推荐模型范围；候选只记录文档 ID 提及，不能用它充当可调用全集。<br>• 模型目录和价格按精确 Provider 模型 ID 记录；规范模型规格由维护者手工维护。 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | openai |
| source refs | 新增 | 未记录 | • openai-models<br>• openai-models-all<br>• openai-pricing<br>• openai-models-list-api<br>• openai-responses-api<br>• openai-web-search<br>• openai-file-search<br>• openai-code-interpreter<br>• openai-image-generation<br>• openai-audio-api<br>• openai-chatgpt-pricing |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 openai-audio-api › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-audio-api › note | 新增 | 未记录 | 来源已捕获，但当前解析器未能确认并映射完整 Capability 字段。 |
| 记录 openai-audio-api › record count | 新增 | 未记录 | 0 |
| 记录 openai-audio-api › record unit | 新增 | 未记录 | independent Capability records |
| 记录 openai-audio-api › scope | 新增 | 未记录 | capability |
| 记录 openai-audio-api › source ref | 新增 | 未记录 | openai-audio-api |
| 记录 openai-audio-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 openai-chatgpt-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-chatgpt-pricing › note | 新增 | 未记录 | 来源覆盖 ChatGPT 与 Codex 套餐价格信息，但不保证列出 ChatGPT 全部套餐；未出现的既有套餐保留待核对。 |
| 记录 openai-chatgpt-pricing › record count | 新增 | 未记录 | 8 |
| 记录 openai-chatgpt-pricing › record unit | 新增 | 未记录 | PlanFact records |
| 记录 openai-chatgpt-pricing › scope | 新增 | 未记录 | plan |
| 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 记录 openai-chatgpt-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 openai-code-interpreter › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-code-interpreter › note | 新增 | 未记录 | 官方工具文档已映射为带输入、参数、输出和 Route 的 Capability 候选；逐模型支持范围不在此 Service Capability 中表达。 |
| 记录 openai-code-interpreter › record count | 新增 | 未记录 | 1 |
| 记录 openai-code-interpreter › record unit | 新增 | 未记录 | independent Capability records |
| 记录 openai-code-interpreter › scope | 新增 | 未记录 | capability |
| 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| 记录 openai-code-interpreter › 状态（status） | 新增 | 未记录 | partial |
| 记录 openai-file-search › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-file-search › note | 新增 | 未记录 | 官方工具文档已映射为带输入、参数、输出和 Route 的 Capability 候选；逐模型支持范围不在此 Service Capability 中表达。 |
| 记录 openai-file-search › record count | 新增 | 未记录 | 1 |
| 记录 openai-file-search › record unit | 新增 | 未记录 | independent Capability records |
| 记录 openai-file-search › scope | 新增 | 未记录 | capability |
| 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| 记录 openai-file-search › 状态（status） | 新增 | 未记录 | partial |
| 记录 openai-image-generation › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-image-generation › note | 新增 | 未记录 | 官方工具文档已映射为带输入、参数、输出和 Route 的 Capability 候选；逐模型支持范围不在此 Service Capability 中表达。 |
| 记录 openai-image-generation › record count | 新增 | 未记录 | 1 |
| 记录 openai-image-generation › record unit | 新增 | 未记录 | independent Capability records |
| 记录 openai-image-generation › scope | 新增 | 未记录 | capability |
| 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| 记录 openai-image-generation › 状态（status） | 新增 | 未记录 | partial |
| 记录 openai-models-all › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-models-all › note | 新增 | 未记录 | 完整目录卡片已解析为精确模型 ID、展示名与官方状态标签。 |
| 记录 openai-models-all › record count | 新增 | 未记录 | 104 |
| 记录 openai-models-all › record unit | 新增 | 未记录 | unique model IDs |
| 记录 openai-models-all › scope | 新增 | 未记录 | model_catalog |
| 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 记录 openai-models-all › 状态（status） | 新增 | 未记录 | complete |
| 记录 openai-models-list-api › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-models-list-api › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 openai-models-list-api › scope | 新增 | 未记录 | api |
| 记录 openai-models-list-api › source ref | 新增 | 未记录 | openai-models-list-api |
| 记录 openai-models-list-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 openai-models › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-models › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 openai-models › scope | 新增 | 未记录 | model_catalog |
| 记录 openai-models › source ref | 新增 | 未记录 | openai-models |
| 记录 openai-models › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 openai-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-pricing › note | 新增 | 未记录 | 已从精确目录 ID 匹配并解析 46 个型号的支持价格档位；未匹配型号、非 Token 价格及其他定价范围仍未映射。 |
| 记录 openai-pricing › record count | 新增 | 未记录 | 46 |
| 记录 openai-pricing › record unit | 新增 | 未记录 | models with mapped price facts |
| 记录 openai-pricing › scope | 新增 | 未记录 | pricing |
| 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| 记录 openai-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 openai-responses-api › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-responses-api › note | 新增 | 未记录 | 文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。 |
| 记录 openai-responses-api › scope | 新增 | 未记录 | api |
| 记录 openai-responses-api › source ref | 新增 | 未记录 | openai-responses-api |
| 记录 openai-responses-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 openai-web-search › 市场（market） | 新增 | 未记录 | global |
| 记录 openai-web-search › note | 新增 | 未记录 | 官方工具文档已映射为带输入、参数、输出和 Route 的 Capability 候选；逐模型支持范围不在此 Service Capability 中表达。 |
| 记录 openai-web-search › record count | 新增 | 未记录 | 1 |
| 记录 openai-web-search › record unit | 新增 | 未记录 | independent Capability records |
| 记录 openai-web-search › scope | 新增 | 未记录 | capability |
| 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| 记录 openai-web-search › 状态（status） | 新增 | 未记录 | partial |

### 文档观察

#### 来源 / openai-audio-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li># Audio and voice</li><li>Connect your first conversation with the [WebRTC quickstart](https://developers.openai.com/api/docs/guides/voice-webrtc?api=live), then write a short [Live prompt](https://developers.openai.com/api/docs/guides/live-prompting). If you already have a Realtime application or text agent, follow [Migrate to GPT-Live](https://developers.openai.com/api/docs/guides/live-migration).</li><li>## Choose another audio workflow</li><li>Use the Realtime API when you need its session and tool model. For transcription, translation, or speech generation without a conversational agent, choose the dedicated API below.</li><li>&#124; A speech-to-speech agent using the Realtime session and tool model &#124; [Realtime API](https://developers.openai.com/api/docs/guides/realtime) &#124; Audio turns, session state, tools, and interruptions. &#124;</li><li>&#124; A voice interface for an existing text agent &#124; [Voice agents](https://developers.openai.com/api/docs/guides/voice-agents#build-a-chained-voice-workflow) &#124; Speech-to-text, the text-agent workflow, then text-to-speech. &#124;</li><li>&#124; A transcript of an audio file &#124; [File transcription](https://developers.openai.com/api/docs/guides/speech-to-text) &#124; File uploads, bounded requests, and supported transcript formats. &#124;</li><li>&#124; Live captions without assistant speech &#124; [Live transcription](https://developers.openai.com/api/docs/guides/realtime-transcription) &#124; Streaming audio and incremental transcript events. &#124;</li><li>&#124; Continuous speech translation &#124; [Live translation](https://developers.openai.com/api/docs/guides/realtime-translation) &#124; A dedicated translation session, not a voice-agent turn loop. &#124;</li><li>&#124; Narration or generated speech &#124; [Text to speech](https://developers.openai.com/api/docs/guides/text-to-speech) &#124; Text, voice, and output format. &#124;</li><li>&#124; Audio input or output in an existing chat app &#124; [Audio in Chat Completions](https://developers.openai.com/api/docs/guides/audio-chat-completions) &#124; Bounded multimodal chat requests. &#124;</li><li>Use [Voice agents](https://developers.openai.com/api/docs/guides/voice-agents) to compare architectures. Start with the prompting guide for [GPT-Live](https://developers.openai.com/api/docs/guides/live-prompting) or [Realtime](https://developers.openai.com/api/docs/guides/voice-prompting). Then use the shared guides for [custom voices](https://developers.openai.com/api/docs/guides/custom-voices), [evaluation](https://developers.openai.com/api/docs/guides/voice-agents#evaluate-your-voice-agent), </li><li>For browser audio, start with [WebRTC](https://developers.openai.com/api/docs/guides/voice-webrtc). For server audio pipelines, use [WebSockets](https://developers.openai.com/api/docs/guides/voice-websockets). For phone calls, see [Telephony and SIP](https://developers.openai.com/api/docs/guides/voice-sip). A [server-side control connection](https://developers.openai.com/api/docs/guides/voice-server-controls) lets a trusted backend observe and control a media session.</li><li>Select your API on each connection page. Sharing a transport does not make GPT-Live and Realtime handshakes, credentials, or event formats interchangeable. Check the connection guide for prerequisites and setup instructions.</li><li>## Add audio to your existing application</li><li>The Chat Completions examples now live in [Audio in Chat Completions](https://developers.openai.com/api/docs/guides/audio-chat-completions). For a browser voice-agent starter, use the [GPT-Live WebRTC quickstart](https://developers.openai.com/api/docs/guides/voice-webrtc?api=live).</li></ul></details> |
| excerpt | 新增 | 未记录 | # Audio and voice<br>&gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>For a new conversational voice application, start with **[GPT-Live](https://developers.openai.com/api/docs/guides/live)**. It can listen while speaking and keep the conversation moving while a backend agent reasons, uses tools, or completes a task.<br>Connect your first conversation with the [WebRTC quickstart](https://developers.openai.com/api/docs/guides/voice-webrtc?api=live), then write a short [Live prompt](https://developers.openai.com/api/docs/guides/live-prompting). If you already have a Realtime application or text agent, follow [Migrate to GPT-Live](https://developers.openai.com/api/docs/guides/live-migration).<br>## Choose another audio workflow<br>Use the Realtime API when you need its session and tool model. For transcription, translation, or speech generation without a conversational agent, choose the dedicated API below.<br>&#124; Build &#124; Start here &#124; What you control &#124;<br>&#124; ------------------------------------------------------------------ &#124; ---------------------------------------------------------------------------- &#124; ----------------------------------------------------------------- &#124;<br>&#124; A speech-to-speech agent using the Realtime session and tool model &#124; [Realtime API](https://developers.openai.com/api/docs/guides/realtime) &#124; Audio turns, session state, tools, and interruptions. &#124;<br>&#124; A voice interface for an existing text agent &#124; [Voice agents](https://developers.openai.com/api/docs/guides/voice-agents#build-a-chained-voice-workflow) &#124; Speech-to-text, the text-agent workflow, then text-to-speech. &#124;<br>&#124; A transcript of an audio file &#124; [File transcription](https://developers.openai.com/api/docs/guides/speech-to-text) &#124; File uploads, bounded requests, and supported transcript formats. &#124;<br>&#124; Live captions without assistant speech &#124; [Live transcription](https://developers.openai.com/api/docs/guides/realtime-transcription) &#124; Streaming audio and incremental transcript events. &#124;<br>&#124; Continuous speech translation &#124; [Live translation](https://developers.openai.com/api/docs/guides/realtime-translation) &#124; A dedicated translation session, not a voice-agent turn loop. &#124;<br>&#124; Narration or generated speech &#124; [Text to speech](https://developers.openai.com/api/docs/guides/text-to-speech) &#124; Text, voice, and output format. &#124;<br>&#124; Audio input or output in an existing chat app &#124; [Audio in Chat Completions](https://developers.openai.com/api/docs/guides/audio-chat-completions) &#124; Bounded multimodal chat requests. &#124;<br>## Build with voice<br>Use [Voice agents](https://developers.openai.com/api/docs/guides/voice-agents) to compare architectures. Start with the prompting guide for [GPT-Live](https://developers.openai.com/api/docs/guides/live-prompting) or [Realtime](https://developers.openai.com/api/docs/guides/voice-prompting). Then use the shared guides for [custom voices](https://developers.openai.com/api/docs/guides/custom-voices), [evaluation](https://developers.openai.com/api/docs/guides/voice-agents#evaluate-your-voice-agent), and [cost optimization](https://developers.openai.com/api/docs/guides/voice-latency-cost). Each guide distinguishes model- or API-specific behavior.<br>## Choose a connection<br>For browser audio, start with [WebRTC](https://developers.openai.com/api/docs/guides/voice-webrtc). For server audio pipelines, use [WebSockets](https://developers.openai.com/api/docs/guides/voice-websockets). For phone calls, see [Telephony and SIP](https://developers.openai.com/api/docs/guides/voice-sip). A [server-side control connection](https://developers.openai.com/api/docs/guides/voice-server-controls) lets a trusted backend observe and control a media session.<br>Select your API on each connection page. Sharing a transport does not make GPT-Live and Realtime handshakes, credentials, or event formats interchangeable. Check the connection guide for prerequisites and setup instructions.<br>## Add audio to your existing application<br>The Chat Completions examples now live in [Audio in Chat Completions](https://developers.openai.com/api/docs/guides/audio-chat-completions). For a browser voice-agent starter, use the [GPT-Live WebRTC quickstart](https://developers.openai.com/api/docs/guides/voice-webrtc?api=live). |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • GPT-Live |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | openai-audio-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 Choose another audio workflow › headers | 新增 | 未记录 | • Build<br>• Start here<br>• What you control |
| tables › 记录 Choose another audio workflow › heading | 新增 | 未记录 | Choose another audio workflow |
| tables › 记录 Choose another audio workflow › rows › 记录 A speech-to-speech agent using the Realtime session and tool model | 新增 | 未记录 | • A speech-to-speech agent using the Realtime session and tool model<br>• [Realtime API](https://developers.openai.com/api/docs/guides/realtime)<br>• Audio turns, session state, tools, and interruptions. |
| tables › 记录 Choose another audio workflow › rows › 记录 A transcript of an audio file | 新增 | 未记录 | • A transcript of an audio file<br>• [File transcription](https://developers.openai.com/api/docs/guides/speech-to-text)<br>• File uploads, bounded requests, and supported transcript formats. |
| tables › 记录 Choose another audio workflow › rows › 记录 A voice interface for an existing text agent | 新增 | 未记录 | • A voice interface for an existing text agent<br>• [Voice agents](https://developers.openai.com/api/docs/guides/voice-agents#build-a-chained-voice-workflow)<br>• Speech-to-text, the text-agent workflow, then text-to-speech. |
| tables › 记录 Choose another audio workflow › rows › 记录 Audio input or output in an existing chat app | 新增 | 未记录 | • Audio input or output in an existing chat app<br>• [Audio in Chat Completions](https://developers.openai.com/api/docs/guides/audio-chat-completions)<br>• Bounded multimodal chat requests. |
| tables › 记录 Choose another audio workflow › rows › 记录 Continuous speech translation | 新增 | 未记录 | • Continuous speech translation<br>• [Live translation](https://developers.openai.com/api/docs/guides/realtime-translation)<br>• A dedicated translation session, not a voice-agent turn loop. |
| tables › 记录 Choose another audio workflow › rows › 记录 Live captions without assistant speech | 新增 | 未记录 | • Live captions without assistant speech<br>• [Live transcription](https://developers.openai.com/api/docs/guides/realtime-transcription)<br>• Streaming audio and incremental transcript events. |
| tables › 记录 Choose another audio workflow › rows › 记录 Narration or generated speech | 新增 | 未记录 | • Narration or generated speech<br>• [Text to speech](https://developers.openai.com/api/docs/guides/text-to-speech)<br>• Text, voice, and output format. |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-chatgpt-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>choice, context, reasoning, tool use, retrieval, and caching all affect usage,</li><li>Image generations use included limits ~3-5x faster on average, depending on</li><li>image quality and size.</li><li>### How does image generation count toward usage limits?</li><li>Image generation counts toward the same general usage limits as local</li><li>messages and cloud chats. Image generations use included limits 3-5x faster on</li><li>average than similar turns without image generation, depending on</li><li>image quality and size. After you reach your included limits, image generation</li><li>Image generation isn't available on the Free plan. When you use Codex with an</li><li>API key, API pricing applies to image generation instead of included ChatGPT</li><li>GPT-Image-2 (image)</li><li>GPT-Image-2 (text)</li><li>separate approval and provisioning.</li></ul></details> |
| excerpt | 新增 | 未记录 | # Pricing<br>&gt; For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>**ChatGPT Work and Codex share usage.** ChatGPT Work usage inside<br>ChatGPT uses the same pricing, credits, and usage limits as Codex.<br>GPT-5.5 retires from Codex with ChatGPT sign-in on October 14, 2026, at noon<br>PDT (19:00 UTC). The OpenAI API and Codex sessions authenticated with an API<br>key aren't affected. See [GPT-5.5 retirement](https://learn.chatgpt.com/docs/models#gpt-55-retirement)<br>for migration guidance.<br>See [token rates](#token-rates) for credit-based plans and<br>[GPT-6.1 Sol model guidance](https://learn.chatgpt.com/docs/models#gpt-61-sol) for model details.<br>API token prices are separate from subscription usage; don't use them to<br>estimate included tasks.<br>Pricing options<br>- GPT-6 Luna at Standard speed in the desktop app, subject to rollout<br>- GPT-6 Luna at Standard speed in the desktop app, subject to rollout<br>- Codex on the web, in the CLI, in the IDE extension, and on iOS<br>- Cloud-based integrations like automatic code review and Slack<br>integration<br>- GPT-6.1 Sol and GPT-6 Luna<br>- Flexibly extend usage with [ChatGPT credits](#credits-overview)<br>- Other [ChatGPT features](https://chatgpt.com/pricing) as part of the<br>Plus plan<br>- Plans at $100, $200, or $500 USD per month<br>- [Ultrafast mode](https://learn.chatgpt.com/docs/agent-configuration/speed#ultrafast-mode)<br>access on Pro $500<br>- Other [ChatGPT features](https://chatgpt.com/pricing) as part of the<br>Pro plan<br>- Codex in the CLI, SDK, or IDE extension<br>- No cloud-based features (GitHub code review, Slack, etc.)<br>- Model availability follows the API models available to your key<br>- Pay for Codex usage based on [API pricing](https://developers.openai.com/api/docs/pricing)<br>- Access ChatGPT and Codex across desktop and mobile apps<br>- Larger virtual machines to run cloud chats faster<br>- Flexibly extend usage with [ChatGPT credits](#credits-overview)<br>- A secure, dedicated workspace with essential admin controls, SAML SSO,<br>and MFA<br>- No training on your business data by default. [Learn<br>more](https://openai.com/business-data/)<br>- Other [ChatGPT features](https://chatgpt.com/pricing) as part of the<br>Business plan<br>- Priority request processing<br>- Enterprise-level security and controls, including SCIM, EKM, user<br>analytics, domain verification, and role-based access control<br>([RBAC](https://help.openai.com/en/articles/11750701-rbac))<br>- Audit logs and usage monitoring via the [Compliance<br>API](https://chatgpt.com/public/admin/api-reference#tag/Codex%20Tasks)<br>- Data retention and data residency controls<br>- Other [ChatGPT features](https://chatgpt.com/pricing) as part of the<br>Enterprise plan<br>- Codex in the CLI, SDK, or IDE extension<br>- No cloud-based features (GitHub code review, Slack, etc.)<br>- Model availability follows the API models available to your key<br>- Pay for Codex usage based on [API pricing](https://developers.openai.com/api/docs/pricing)<br>## Invite friends and coworkers<br>Eligible users can send Codex invitations from the profile menu in the<br>lower-left corner of the app. Choose **Invite a friend** on an eligible personal<br>plan or **Invite a coworker** in an eligible Business workspace, enter the<br>recipient's email address, and send the invitation.<br>The invitation dialog shows the current reward, recipient requirements, invite<br>limits, and when rewards expire for your plan or promotion. Personal and<br>Business referral programs have separate rewards and eligibility rules.<br>Referrals aren't currently available for ChatGPT Enterprise.<br>Business referrals use separate shared-workspace credit rewards; review the<br>[current terms](https://help.openai.com/en/articles/20001271) before you send an<br>invitation.<br>## Frequently asked questions<br>### What are the usage limits for my plan?<br>The number of messages you can send depends on the model used, size and<br>complexity of your tasks, and whether you run them locally or in the cloud.<br>Small scripts or routine functions may consume only a fraction of your<br>allowance, while larger projects, long-running tasks, or extended sessions that<br>require the agent to hold more context will use significantly more per message.<br>Tasks that look similar can consume different amounts of your allowance. Model<br>choice, context, reasoning, tool use, retrieval, and caching all affect usage,<br>so prompt length alone isn't a reliable estimate.<br>For model recommendations, see [Models](https://learn.chatgpt.com/docs/models).<br>The estimates below show local messages per five-hour period for Plus and<br>Standard Business. Pro plans currently have no five-hour limit. Cloud tasks<br>may use more of your allowance than local messages. Usage depends on the model<br>and task. These estimates are not fixed message limits; check your<br>[usage dashboard](#where-can-i-see-my-current-usage-limits) for current limits<br>and reset times.<br>Model<br>Plus<br>Standard Business<br>GPT-6 Astra<br>5-45<br>5-45<br>GPT-6.1 Sol<br>15-160<br>15-160<br>GPT-6.1 Terra<br>35-285<br>35-285<br>GPT-6 Sol<br>15-150<br>15-150<br>GPT-6 Luna<br>350-3,000<br>350-3,000 |
| extraction | 新增 | 未记录 | markdown |
| model id mentions | 新增 | 未记录 | • GPT-5.5<br>• GPT-5.6<br>• gpt-55-retirement<br>• GPT-6<br>• GPT-6.1<br>• gpt-61-sol<br>• gpt-61-terra<br>• GPT-Image-2<br>• GPT-Live<br>• GPT-Rosalind-Research |
| plan or price mentions | 新增 | 未记录 | 列表（24 项）<details><summary>展开完整内容</summary><ul><li>API token prices are separate from subscription usage; don't use them to</li><li>Plus plan</li><li>- Plans at $100, $200, or $500 USD per month</li><li>access on Pro $500</li><li>Pro plan</li><li>Business plan</li><li>Enterprise plan</li><li>plan or **Invite a coworker** in an eligible Business workspace, enter the</li><li>limits, and when rewards expire for your plan or promotion. Personal and</li><li>### What are the usage limits for my plan?</li><li>Local messages and cloud chats share your plan's usage allowance. Weekly</li><li>GPT-6.1 Sol usage drawn from your subscription has no long-context surcharge</li><li>Fast and Ultrafast modes use included subscription limits and paid credits</li><li>&#124; Speed mode &#124; Included subscription usage &#124; Purchased credits and Enterprise pay-as-you-go usage &#124;</li><li>beta. Availability depends on your plan, region, and workspace settings.</li><li>Voice in Desktop uses your existing Codex usage budget at $0.05 per</li><li>separately at its applicable token rates. Voice and tasks share your plan's usage</li><li>credits to continue working without needing to upgrade their existing plan.</li><li>Image generation isn't available on the Free plan. When you use Codex with an</li><li>working. Credit purchase prices and applicable discounts depend on your plan</li><li>included subscription usage; check your</li><li>available, and Ultrafast mode uses 6x. Included subscription usage has</li><li>For Business and Enterprise/Edu credit billing, use the [credit-based rate card](https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing). If your Enterprise agreement specifies usage-based billing in USD, use the [Enterprise USD rate card](https://help.openai.com/en/articles/20001415-chatgpt-rate-card-enterprise-token-based-pricing) and your agreement instead. Workspace administrators can also review [ChatGPT Work usage and cost](https://learn.</li><li>administrator controls. Overall Work and Codex plan limits are unchanged.</li></ul></details> |
| scope | 新增 | 未记录 | plan |
| source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录 What are the usage limits for my plan? › headers | 新增 | 未记录 | • Speed mode<br>• Included subscription usage<br>• Purchased credits and Enterprise pay-as-you-go usage |
| tables › 记录 What are the usage limits for my plan? › heading | 新增 | 未记录 | What are the usage limits for my plan? |
| tables › 记录 What are the usage limits for my plan? › rows › 记录 Fast | 新增 | 未记录 | • Fast<br>• 2.5x<br>• 2x |
| tables › 记录 What are the usage limits for my plan? › rows › 记录 GPT-6 Astra Ultrafast | 新增 | 未记录 | • GPT-6 Astra Ultrafast<br>• 8x<br>• 6x |
| tables › 记录 What are the usage limits for my plan? › rows › 记录 GPT-6.1 Sol Ultrafast | 新增 | 未记录 | • GPT-6.1 Sol Ultrafast<br>• 8x<br>• 6x |
| title | 新增 | 未记录 | Pricing |

#### 来源 / openai-code-interpreter

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl https://api.openai.com/v1/responses \<br>• curl https://api.openai.com/v1/containers \ |
| capability mentions | 新增 | 未记录 | 列表（10 项）<details><summary>展开完整内容</summary><ul><li>- Generating files with data and images of graphs</li><li>- Inspecting images with [`gpt-6-astra`](https://developers.openai.com/api/docs/models/gpt-6-astra). Code Interpreter can crop, zoom, rotate, or read individual pixels using Python.</li><li>Here's an example of calling the [Responses API](https://developers.openai.com/api/reference/resources/responses) with a tool call to Code Interpreter:</li><li>When running Code Interpreter, the model can create its own files. For example, if you ask it to construct a plot, or create a CSV, it creates these images directly on your container. When it does so, it cites these files in the `annotations` of its next message. Here's an example:</li><li>"text": "Here is the histogram of the RGB channels for the uploaded image. Each curve represents the distribution of pixel intensities for the red, green, and blue channels. Peaks toward the high end of the intensity scale (right-hand side) suggest a lot of brightness and strong warm tones, matching the orange and light background in the image. If you want a different style of histogram (e.g., overall intensity, or quantized color groups), let me know!",</li><li>Files and images generated by the model are returned as annotations on the assistant's message. `container_file_citation` annotations point to files created in the container. They include the `container_id`, `file_id`, and `filename`. You can parse these annotations to surface download links or otherwise process the files.</li><li>&#124; `.jpeg` &#124; `image/jpeg` &#124;</li><li>&#124; `.jpg` &#124; `image/jpeg` &#124;</li><li>&#124; `.gif` &#124; `image/gif` &#124;</li><li>&#124; `.png` &#124; `image/png` &#124;</li></ul></details> |
| excerpt | 新增 | 未记录 | # Code Interpreter<br>&gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>The Code Interpreter tool allows models to write and run Python code in a sandboxed environment to solve complex problems in domains like data analysis, coding, and math. Use it for:<br>- Processing files with diverse data and formatting<br>- Generating files with data and images of graphs<br>- Writing and running code iteratively to solve problems—for example, a model that writes code that fails to run can keep rewriting and running that code until it succeeds<br>- Inspecting images with [`gpt-6-astra`](https://developers.openai.com/api/docs/models/gpt-6-astra). Code Interpreter can crop, zoom, rotate, or read individual pixels using Python.<br>Here's an example of calling the [Responses API](https://developers.openai.com/api/reference/resources/responses) with a tool call to Code Interpreter:<br>Use the Responses API with Code Interpreter<br>```bash<br>curl https://api.openai.com/v1/responses \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $OPENAI_API_KEY" \<br>-d '{<br>"model": "gpt-6-astra",<br>"tools": [{<br>"type": "code_interpreter",<br>"container": { "type": "auto", "memory_limit": "4g" }<br>}],<br>"instructions": "You are a personal math tutor. When asked a math question, write and run code using the python tool to answer the question.",<br>"input": "I need to solve the equation 3x + 11 = 14. Can you help me?"<br>}'<br>```<br>```javascript<br>import OpenAI from "openai";<br>const client = new OpenAI();<br>const instructions = `<br>You are a personal math tutor. When asked a math question,<br>write and run code using the python tool to answer the question.<br>`;<br>const resp = await client.responses.create({<br>model: "gpt-6-astra",<br>tools: [<br>{<br>type: "code_interpreter",<br>container: { type: "auto", memory_limit: "4g" },<br>},<br>],<br>instructions,<br>input: "I need to solve the equation 3x + 11 = 14. Can you help me?",<br>});<br>console.log(JSON.stringify(resp.output, null, 2));<br>```<br>```python<br>from openai import OpenAI<br>client = OpenAI()<br>instructions = """<br>You are a personal math tutor. When asked a math question,<br>write and run code using the python tool to answer the question.<br>"""<br>resp = client.responses.create(<br>model="gpt-6-astra",<br>tools=[<br>{<br>"type": "code_interpreter",<br>"container": {"type": "auto", "memory_limit": "4g"},<br>}<br>],<br>instructions=instructions,<br>input="I need to solve the equation 3x + 11 = 14. Can you help me?",<br>)<br>print(resp.output)<br>```<br>```go<br>package main<br>import (<br>"context"<br>"fmt"<br>"github.com/openai/openai-go/v3"<br>"github.com/openai/openai-go/v3/responses"<br>)<br>func main() {<br>client := openai.NewClient()<br>tool := responses.ToolParamOfCodeInterpreter(responses.ToolCodeInterpreterContainerCodeInterpreterContainerAutoParam{MemoryLimit: "4g"})<br>response, err := client.Responses.New(context.Background(), responses.ResponseNewParams{<br>Model: "gpt-6-astra",<br>Tools: []responses.ToolUnionParam{tool},<br>Instructions: openai.String("You are a personal math tutor. When asked a math question, write and run code using the python tool to answer the question."),<br>Input: responses.ResponseNewParamsInputUnion{OfString: openai.String("I need to solve the equation 3x + 11 = 14. Can you help me?")},<br>})<br>if err != nil {<br>panic(err)<br>}<br>fmt.Println(response.Output)<br>}<br>```<br>```java<br>import com.openai.client.OpenAIClient;<br>import com.openai.client.okhttp.OpenAIOkHttpClient;<br>import com.openai.models.responses.ResponseCreateParams;<br>import com.openai.models.responses.Tool;<br>ResponseCreateParams params =<br>ResponseCreateParams.builder()<br>.model("gpt-6-astra")<br>.input("I need to solve the equation 3x + 11 = 14. Can you help me?")<br>.instructions(<br>"You are a personal math tutor. Write and run Python code to answer each math question.")<br>.addCodeInterpreterTool(<br>Tool.CodeInterpreter.Container.CodeInterpreterToolAuto.builder()<br>.memoryLimit( |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • gpt-6-astra |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $OPENAI_API_KEY" \ |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | openai-code-interpreter |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录  › headers | 新增 | 未记录 | • API Availability<br>• Rate limits<br>• Notes |
| tables › 记录  › heading | 新增 | 未记录 | 空字符串 |
| tables › 记录  › rows › 记录 [Responses](https://developers.openai.com/api/reference/resources/responses) [Chat Completions](https://developers.openai.com/api/reference/resources/chat) [Assistants](https://developers.openai.com/api/reference/resources/beta/subresources/assistants) | 新增 | 未记录 | • [Responses](https://developers.openai.com/api/reference/resources/responses) [Chat Completions](https://developers.openai.com/api/reference/resources/chat) [Assistants](https://developers.openai.com/api/reference/resources/beta/subresources/assistants)<br>• 100 RPM per org<br>• [Pricing](https://developers.openai.com/api/docs/pricing#built-in-tools) [ZDR and data residency](https://developers.openai.com/api/docs/guides/your-data) |
| tables › 记录 Supported files › headers | 新增 | 未记录 | • File format<br>• MIME type |
| tables › 记录 Supported files › heading | 新增 | 未记录 | Supported files |
| tables › 记录 Supported files › rows › 第 1 项 | 新增 | 未记录 | • `.c`<br>• `text/x-c` |
| tables › 记录 Supported files › rows › 第 2 项 | 新增 | 未记录 | • `.cs`<br>• `text/x-csharp` |
| tables › 记录 Supported files › rows › 第 3 项 | 新增 | 未记录 | • `.cpp`<br>• `text/x-c++` |
| tables › 记录 Supported files › rows › 第 4 项 | 新增 | 未记录 | • `.csv`<br>• `text/csv` |
| tables › 记录 Supported files › rows › 第 5 项 | 新增 | 未记录 | • `.doc`<br>• `application/msword` |
| tables › 记录 Supported files › rows › 第 6 项 | 新增 | 未记录 | • `.docx`<br>• `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| tables › 记录 Supported files › rows › 第 7 项 | 新增 | 未记录 | • `.html`<br>• `text/html` |
| tables › 记录 Supported files › rows › 第 8 项 | 新增 | 未记录 | • `.java`<br>• `text/x-java` |
| tables › 记录 Supported files › rows › 第 9 项 | 新增 | 未记录 | • `.json`<br>• `application/json` |
| tables › 记录 Supported files › rows › 第 10 项 | 新增 | 未记录 | • `.md`<br>• `text/markdown` |
| tables › 记录 Supported files › rows › 第 11 项 | 新增 | 未记录 | • `.pdf`<br>• `application/pdf` |
| tables › 记录 Supported files › rows › 第 12 项 | 新增 | 未记录 | • `.php`<br>• `text/x-php` |
| tables › 记录 Supported files › rows › 第 13 项 | 新增 | 未记录 | • `.pptx`<br>• `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| tables › 记录 Supported files › rows › 第 14 项 | 新增 | 未记录 | • `.py`<br>• `text/x-python` |
| tables › 记录 Supported files › rows › 第 15 项 | 新增 | 未记录 | • `.py`<br>• `text/x-script.python` |
| tables › 记录 Supported files › rows › 第 16 项 | 新增 | 未记录 | • `.rb`<br>• `text/x-ruby` |
| tables › 记录 Supported files › rows › 第 17 项 | 新增 | 未记录 | • `.tex`<br>• `text/x-tex` |
| tables › 记录 Supported files › rows › 第 18 项 | 新增 | 未记录 | • `.txt`<br>• `text/plain` |
| tables › 记录 Supported files › rows › 第 19 项 | 新增 | 未记录 | • `.css`<br>• `text/css` |
| tables › 记录 Supported files › rows › 第 20 项 | 新增 | 未记录 | • `.js`<br>• `text/javascript` |
| tables › 记录 Supported files › rows › 第 21 项 | 新增 | 未记录 | • `.sh`<br>• `application/x-sh` |
| tables › 记录 Supported files › rows › 第 22 项 | 新增 | 未记录 | • `.ts`<br>• `application/typescript` |
| tables › 记录 Supported files › rows › 第 23 项 | 新增 | 未记录 | • `.csv`<br>• `application/csv` |
| tables › 记录 Supported files › rows › 第 24 项 | 新增 | 未记录 | • `.jpeg`<br>• `image/jpeg` |
| tables › 记录 Supported files › rows › 第 25 项 | 新增 | 未记录 | • `.jpg`<br>• `image/jpeg` |
| tables › 记录 Supported files › rows › 第 26 项 | 新增 | 未记录 | • `.gif`<br>• `image/gif` |
| tables › 记录 Supported files › rows › 第 27 项 | 新增 | 未记录 | • `.pkl`<br>• `application/octet-stream` |
| tables › 记录 Supported files › rows › 第 28 项 | 新增 | 未记录 | • `.png`<br>• `image/png` |
| tables › 记录 Supported files › rows › 第 29 项 | 新增 | 未记录 | • `.tar`<br>• `application/x-tar` |
| tables › 记录 Supported files › rows › 第 30 项 | 新增 | 未记录 | • `.xlsx`<br>• `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| tables › 记录 Supported files › rows › 第 31 项 | 新增 | 未记录 | • `.xml`<br>• `application/xml or "text/xml"` |
| tables › 记录 Supported files › rows › 第 32 项 | 新增 | 未记录 | • `.zip`<br>• `application/zip` |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-file-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | # File search<br>&gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>File search is a tool available in the [Responses API](https://developers.openai.com/api/reference/resources/responses).<br>It enables models to retrieve information in a knowledge base of previously uploaded files through semantic and keyword search.<br>By creating vector stores and uploading files to them, you can augment the models' inherent knowledge by giving them access to these knowledge bases or `vector_stores`.<br>To learn more about how vector stores and semantic search work, refer to our<br>[retrieval guide](https://developers.openai.com/api/docs/guides/retrieval).<br>This is a hosted tool managed by OpenAI, meaning you don't have to implement code on your end to handle its execution.<br>When the model decides to use it, it will automatically call the tool, retrieve information from your files, and return an output.<br>## How to use<br>Prior to using file search with the Responses API, you need to have set up a knowledge base in a vector store and uploaded files to it.<br>### Create a vector store and upload a file<br>Follow these steps to create a vector store and upload a file to it. You can use [this example file](https://cdn.openai.com/API/docs/deep_research_blog.pdf) or upload your own.<br>#### Upload the file to the File API<br>Upload a file<br>```javascript<br>import fs from "fs";<br>import OpenAI from "openai";<br>const openai = new OpenAI();<br>async function createFile(filePath) {<br>let result;<br>if (filePath.startsWith("http://") &#124;&#124; filePath.startsWith("https://")) {<br>// Download the file content from the URL<br>const res = await fetch(filePath);<br>const buffer = await res.arrayBuffer();<br>const urlParts = filePath.split("/");<br>const fileName = urlParts[urlParts.length - 1];<br>const file = new File([buffer], fileName);<br>result = await openai.files.create({<br>file: file,<br>purpose: "assistants",<br>});<br>} else {<br>// Handle local file path<br>const fileContent = fs.createReadStream(filePath);<br>result = await openai.files.create({<br>file: fileContent,<br>purpose: "assistants",<br>});<br>}<br>return result.id;<br>}<br>// Replace with your own file path or URL<br>const fileId = await createFile(<br>"https://cdn.openai.com/API/docs/deep_research_blog.pdf"<br>);<br>console.log(fileId);<br>```<br>```python<br>from io import BytesIO<br>import requests<br>from openai import OpenAI<br>client = OpenAI()<br>def create_file(client, file_path):<br>if file_path.startswith(("http://", "https://")):<br>response = requests.get(file_path, timeout=30)<br>response.raise_for_status()<br>file_content = BytesIO(response.content)<br>file_name = file_path.rsplit("/", 1)[-1]<br>result = client.files.create(<br>file=(file_name, file_content),<br>purpose="assistants",<br>)<br>else:<br>with open(file_path, "rb") as file_content:<br>result = client.files.create(<br>file=file_content,<br>purpose="assistants",<br>)<br>return result.id<br>file_id = create_file(<br>client,<br>"https://cdn.openai.com/API/docs/deep_research_blog.pdf",<br>)<br>print(file_id)<br>```<br>```go<br>package main<br>import (<br>"context"<br>"fmt"<br>"os"<br>"github.com/openai/openai-go/v3"<br>)<br>func main() {<br>file, err := os.Open("customer_policies.txt")<br>if err != nil {<br>panic(err)<br>}<br>defer file.Close()<br>client := openai.NewClient()<br>result, err := client.Files.New(context.Background(), openai.FileNewParams{<br>File: openai.File(file, "customer_policies.txt", "text/plain"),<br>Purpose: openai.FilePurposeAssistants,<br>})<br>if err != nil {<br>panic(err)<br>}<br>fmt.Println(result.ID)<br>} |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • gpt-6-astra |
| plan or price mentions | 新增 | 未记录 | • Console.WriteLine($"{result.Filename}: {result.Text}"); |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | openai-file-search |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录  › headers | 新增 | 未记录 | • API Availability<br>• Rate limits<br>• Notes |
| tables › 记录  › heading | 新增 | 未记录 | 空字符串 |
| tables › 记录  › rows › 记录 [Responses](https://developers.openai.com/api/reference/resources/responses) [Chat Completions](https://developers.openai.com/api/reference/resources/chat) [Assistants](https://developers.openai.com/api/reference/resources/beta/subresources/assistants) | 新增 | 未记录 | • [Responses](https://developers.openai.com/api/reference/resources/responses) [Chat Completions](https://developers.openai.com/api/reference/resources/chat) [Assistants](https://developers.openai.com/api/reference/resources/beta/subresources/assistants)<br>• **Build** 500 RPM **Launch and Grow** 1000 RPM<br>• [Pricing](https://developers.openai.com/api/docs/pricing#built-in-tools) [ZDR and data residency](https://developers.openai.com/api/docs/guides/your-data) |
| tables › 记录 Supported files › headers | 新增 | 未记录 | • File format<br>• MIME type |
| tables › 记录 Supported files › heading | 新增 | 未记录 | Supported files |
| tables › 记录 Supported files › rows › 第 1 项 | 新增 | 未记录 | • `.c`<br>• `text/x-c` |
| tables › 记录 Supported files › rows › 第 2 项 | 新增 | 未记录 | • `.cpp`<br>• `text/x-c++` |
| tables › 记录 Supported files › rows › 第 3 项 | 新增 | 未记录 | • `.cs`<br>• `text/x-csharp` |
| tables › 记录 Supported files › rows › 第 4 项 | 新增 | 未记录 | • `.css`<br>• `text/css` |
| tables › 记录 Supported files › rows › 第 5 项 | 新增 | 未记录 | • `.doc`<br>• `application/msword` |
| tables › 记录 Supported files › rows › 第 6 项 | 新增 | 未记录 | • `.docx`<br>• `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| tables › 记录 Supported files › rows › 第 7 项 | 新增 | 未记录 | • `.go`<br>• `text/x-golang` |
| tables › 记录 Supported files › rows › 第 8 项 | 新增 | 未记录 | • `.html`<br>• `text/html` |
| tables › 记录 Supported files › rows › 第 9 项 | 新增 | 未记录 | • `.java`<br>• `text/x-java` |
| tables › 记录 Supported files › rows › 第 10 项 | 新增 | 未记录 | • `.js`<br>• `text/javascript` |
| tables › 记录 Supported files › rows › 第 11 项 | 新增 | 未记录 | • `.json`<br>• `application/json` |
| tables › 记录 Supported files › rows › 第 12 项 | 新增 | 未记录 | • `.md`<br>• `text/markdown` |
| tables › 记录 Supported files › rows › 第 13 项 | 新增 | 未记录 | • `.pdf`<br>• `application/pdf` |
| tables › 记录 Supported files › rows › 第 14 项 | 新增 | 未记录 | • `.php`<br>• `text/x-php` |
| tables › 记录 Supported files › rows › 第 15 项 | 新增 | 未记录 | • `.pptx`<br>• `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| tables › 记录 Supported files › rows › 第 16 项 | 新增 | 未记录 | • `.py`<br>• `text/x-python` |
| tables › 记录 Supported files › rows › 第 17 项 | 新增 | 未记录 | • `.py`<br>• `text/x-script.python` |
| tables › 记录 Supported files › rows › 第 18 项 | 新增 | 未记录 | • `.rb`<br>• `text/x-ruby` |
| tables › 记录 Supported files › rows › 第 19 项 | 新增 | 未记录 | • `.sh`<br>• `application/x-sh` |
| tables › 记录 Supported files › rows › 第 20 项 | 新增 | 未记录 | • `.tex`<br>• `text/x-tex` |
| tables › 记录 Supported files › rows › 第 21 项 | 新增 | 未记录 | • `.ts`<br>• `application/typescript` |
| tables › 记录 Supported files › rows › 第 22 项 | 新增 | 未记录 | • `.txt`<br>• `text/plain` |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-image-generation

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl -X POST "https://api.openai.com/v1/images/generations" \<br>• -X POST "https://api.openai.com/v1/images/edits" \<br>• Use the Image API’s `POST /v1/images/edits` endpoint for markup-guided edits with supported GPT Image 2.5 and 2.6 models. For regional edits with the Responses API, use a [mask](#edit-an-image-using-a-mask). Use an annotation layer to show where a change should happen and describe the change in `prompt`.<br>• curl --fail --silent --show-error https://api.openai.com/v1/images/edits \<br>• Set `output_format: "gif"` on `POST /v1/images/generations`. Describe the subject, motion, and desired loop in your prompt. GIF output is for image generation; the image edit endpoint does not support GIF output. |
| capability mentions | 新增 | 未记录 | 列表（120 项）<details><summary>展开完整内容</summary><ul><li># Image generation</li><li>The API lets you generate and edit images from text prompts using `gpt-image-2.5-sunburst` and `gpt-image-2.5-flare`. Choose Sunburst for workflows where editing precision matters most, and Flare for fast, high-quality everyday image generation. You can access image generation capabilities through two APIs:</li><li>### Image API</li><li>The [Image API](https://developers.openai.com/api/reference/resources/images) provides two endpoints, each with distinct capabilities:</li><li>- **Generations**: [Generate images](#generate-images) from scratch based on a text prompt</li><li>- **Edits**: [Modify existing images](#edit-images) using a new prompt, either partially or entirely</li><li>The [Responses API](https://developers.openai.com/api/reference/resources/responses/methods/create#responses-create-tools) allows you to generate images as part of conversations or multi-step flows. It supports image generation as a [built-in tool](https://developers.openai.com/api/docs/guides/tools?api-mode=responses), and accepts image inputs and outputs within context.</li><li>Compared to the Image API, it adds:</li><li>- **Multi-turn editing**: Iteratively make high fidelity edits to images with prompting</li><li>- **Flexible inputs**: Accept image [File](https://developers.openai.com/api/reference/resources/files) IDs as input images, not just bytes</li><li>For mainline models that can call the image generation tool, refer to [supported models](#supported-models).</li><li>- If you only need to generate or edit a single image from one prompt, the Image API is your best choice.</li><li>- If you want to build conversational, editable image experiences with GPT Image, go with the Responses API.</li><li>With the Image API, set `model` to `gpt-image-2.5-sunburst` or `gpt-image-2.5-flare` directly. With the Responses API, select a supported mainline model at the top level and specify `gpt-image-2.5-sunburst` or `gpt-image-2.5-flare` in the image generation tool's `model` field.</li><li>Both APIs let you [customize output](#customize-image-output) by adjusting quality, size, format, and compression.</li><li>using GPT Image models.</li><li>### GPT Image 2.6</li><li>GPT Image 2.6 includes [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) for detailed visual work and [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) for fast iteration. Both models support complexity control, markup-guided edits, SVG output, and animated GIF output through the Image API. The existing examples below use GPT Image 2.5.</li><li>#### Set image complexity</li><li>Use the `complexity` request field to control how much the image model plans before rendering. Lower complexity can suit focused edits, such as changing a background or a sign. Higher complexity can help with dense text, complex layouts, and relationships between objects. Higher complexity can increase latency and introduce unwanted changes, so compare results for your task.</li><li>privacy-preserving `safety_identifier` in each [image generation](https://developers.openai.com/api/reference/resources/images/methods/generate)</li><li>or [image edit](https://developers.openai.com/api/reference/resources/images/methods/edit) request. Hash a</li><li>The Images API `user` parameter is deprecated. Send the same identifier as</li><li>## Generate Images</li><li>You can use the [image generation endpoint](https://developers.openai.com/api/reference/resources/images) to create images based on text prompts, or the [image generation tool](https://developers.openai.com/api/docs/guides/tools?api-mode=responses) in the Responses API to generate images as part of a conversation.</li><li>To learn more about customizing the output (size, quality, format, compression), refer to the [customize image output](#customize-image-output) section below.</li><li>You can set the `n` parameter to generate multiple images at once in a single request (by default, the API returns a single image).</li><li>Image API</li><li>Generate an image</li><li>const result = await openai.images.generate({</li><li>model: "gpt-image-2.5-sunburst",</li><li>// Save the image to a file</li><li>const image_base64 = result.data[0].b64_json;</li><li>const image_bytes = Buffer.from(image_base64, "base64");</li><li>fs.writeFileSync("otter.png", image_bytes);</li><li>result = client.images.generate(model="gpt-image-2.5-sunburst", prompt=prompt)</li><li>image_base64 = result.data[0].b64_json</li><li>image_bytes = base64.b64decode(image_base64)</li><li># Save the image to a file</li><li>f.write(image_bytes)</li><li>result, err := client.Images.Generate(context.Background(), openai.ImageGenerateParams{</li><li>Model: openai.ImageModel("gpt-image-2.5-sunburst"),</li><li>image, err := base64.StdEncoding.DecodeString(result.Data[0].B64JSON)</li><li>if err := os.WriteFile("otter.png", image, 0o600); err != nil {</li><li>import com.openai.models.images.ImageGenerateParams;</li><li>var images =</li><li>.images()</li><li>ImageGenerateParams.builder()</li><li>.model("gpt-image-2.5-sunburst")</li><li>Path.of("generated-image.png"),</li><li>Base64.getDecoder().decode(images.data().orElseThrow().get(0).b64Json().orElseThrow()));</li><li>using OpenAI.Images;</li><li>string model = "gpt-image-2.5-sunburst";</li><li>ImageClient client = new(model, key);</li><li>GeneratedImage image = await client.GenerateImageAsync(</li><li>await File.WriteAllBytesAsync("otter.png", image.ImageBytes.ToArray());</li><li>result = client.images.generate(</li><li>generated_image = result.data&amp;.first or raise "No image returned"</li><li>"generated-image.png",</li><li>Base64.strict_decode64(generated_image.b64_json)</li><li>curl -X POST "https://api.openai.com/v1/images/generations" \</li><li>"model": "gpt-image-2.5-sunburst",</li><li>openai images generate \</li><li>--model gpt-image-2.5-sunburst \</li><li>"Generate an image of gray tabby cat hugging an otter with an orange scarf",</li><li>tools: [{ type: "image_generation", model: "gpt-image-2.5-sunburst" }],</li><li>const imageData = response.output</li><li>.filter((output) =&gt; output.type === "image_generation_call")</li><li>if (imageData.length &gt; 0) {</li><li>const imageBase64 = imageData[0];</li><li>fs.writeFileSync("otter.png", Buffer.from(imageBase64, "base64"));</li><li>input="Generate an image of gray tabby cat hugging an otter with an orange scarf",</li><li>tools=[{"type": "image_generation", "model": "gpt-image-2.5-sunburst"}],</li><li>image_data = [</li><li>if output.type == "image_generation_call"</li><li>if image_data:</li><li>image_base64 = image_data[0]</li><li>f.write(base64.b64decode(image_base64))</li><li>OfString: openai.String("Generate an image of gray tabby cat hugging an otter with an orange scarf"),</li><li>Tools: []responses.ToolUnionParam{{OfImageGeneration: &amp;responses.ToolImageGenerationParam{Model: "gpt-image-2.5-sunburst"}}},</li><li>saveFirstGeneratedImage(response, "otter.png")</li><li>func saveFirstGeneratedImage(response *responses.Response, filename string) {</li><li>if output.Type != "image_generation_call" {</li><li>image, err := base64.StdEncoding.DecodeString(output.AsImageGenerationCall().Result)</li><li>if err := os.WriteFile(filename, image, 0o600); err != nil {</li><li>panic("response did not include an image generation call")</li><li>.input("Generate an image of a gray tabby cat hugging an otter with an orange scarf.")</li><li>.addTool(Tool.ImageGeneration.builder().build())</li><li>var image =</li><li>.flatMap(item -&gt; item.imageGenerationCall().stream())</li><li>.orElseThrow(() -&gt; new IllegalStateException("No image generation call returned"));</li><li>image.result().orElseThrow(() -&gt; new IllegalStateException("No image returned"));</li><li>"Generate an image of a gray tabby cat hugging an otter with an orange scarf."</li><li>options.Tools.Add(ResponseTool.CreateImageGenerationTool(model: "gpt-image-2.5-sunburst"));</li><li>ImageGenerationCallResponseItem image = response</li><li>?? throw new InvalidOperationException("No generated image was returned.");</li><li>await File.WriteAllBytesAsync("otter.png", image.ImageResultBytes.ToArray());</li><li>input: "Generate an image of a gray tabby cat hugging an otter with an orange scarf.",</li><li>type: :image_generation,</li><li>model: "gpt-image-2.5-sunburst"</li><li>image_call = response.output.find do &#124;item&#124;</li><li>item.is_a?(OpenAI::Models::Responses::ResponseOutputItem::ImageGenerationCall)</li><li>unless image_call.is_a?(OpenAI::Models::Responses::ResponseOutputItem::ImageGenerationCall)</li><li>raise "No image generation call returned"</li><li>encoded_image = image_call.result or raise "No image returned"</li><li>File.binwrite("otter.png", Base64.strict_decode64(encoded_image))</li><li>### Multi-turn image generation</li><li>With the Responses API, you can build multi-turn conversations involving image generation either by providing image generation calls outputs within context (you can also just use the image ID), or by using the [`previous_response_id` parameter](https://developers.openai.com/api/docs/guides/conversation-state?api-mode=responses#openai-apis-for-conversation-state).</li><li>This lets you iterate on images across multiple turns—refining prompts, applying new instructions, and evolving the visual output as the conversation progresses.</li><li>With the Responses API image generation tool, supported tool models can choose whether to generate a new image or edit one already in the conversation. The optional `action` parameter controls this behavior: keep `action: "auto"` to let the model decide, set `action: "generate"` to always create a new image, or set `action: "edit"` to force editing when an image is in context.</li><li>Force image creation with action</li><li>{ type: "image_generation", model: "gpt-image-2.5-sunburst", action: "generate" },</li><li>{"type": "image_generation", "model": "gpt-image-2.5-sunburst", "action": "generate"}</li><li>Tools: []responses.ToolUnionParam{{OfImageGeneration: &amp;responses.ToolImageGenerationParam{Model: "gpt-image-2.5-sunburst", Action: "generate"}}},</li><li>Tool.ImageGeneration.builder().action(Tool.ImageGeneration.Action.GENERATE).build())</li><li>String imageResult =</li><li>.orElseThrow(() -&gt; new IllegalStateException("No generated image returned"));</li><li>Files.write(output, Base64.getDecoder().decode(imageResult));</li><li>ResponseTool.CreateImageGenerationTool(</li><li>action: ImageGenerationToolAction.Generate</li></ul></details> |
| excerpt | 新增 | 未记录 | # Image generation<br>&gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>## Overview<br>The API lets you generate and edit images from text prompts using `gpt-image-2.5-sunburst` and `gpt-image-2.5-flare`. Choose Sunburst for workflows where editing precision matters most, and Flare for fast, high-quality everyday image generation. You can access image generation capabilities through two APIs:<br>### Image API<br>The [Image API](https://developers.openai.com/api/reference/resources/images) provides two endpoints, each with distinct capabilities:<br>- **Generations**: [Generate images](#generate-images) from scratch based on a text prompt<br>- **Edits**: [Modify existing images](#edit-images) using a new prompt, either partially or entirely<br>### Responses API<br>The [Responses API](https://developers.openai.com/api/reference/resources/responses/methods/create#responses-create-tools) allows you to generate images as part of conversations or multi-step flows. It supports image generation as a [built-in tool](https://developers.openai.com/api/docs/guides/tools?api-mode=responses), and accepts image inputs and outputs within context.<br>Compared to the Image API, it adds:<br>- **Multi-turn editing**: Iteratively make high fidelity edits to images with prompting<br>- **Flexible inputs**: Accept image [File](https://developers.openai.com/api/reference/resources/files) IDs as input images, not just bytes<br>For mainline models that can call the image generation tool, refer to [supported models](#supported-models).<br>### Choosing the right API<br>- If you only need to generate or edit a single image from one prompt, the Image API is your best choice.<br>- If you want to build conversational, editable image experiences with GPT Image, go with the Responses API.<br>With the Image API, set `model` to `gpt-image-2.5-sunburst` or `gpt-image-2.5-flare` directly. With the Responses API, select a supported mainline model at the top level and specify `gpt-image-2.5-sunburst` or `gpt-image-2.5-flare` in the image generation tool's `model` field.<br>Both APIs let you [customize output](#customize-image-output) by adjusting quality, size, format, and compression.<br>To ensure these models are used responsibly, you may need to complete the [API<br>Organization<br>Verification](https://help.openai.com/en/articles/10910291-api-organization-verification)<br>from your [developer<br>console](https://platform.openai.com/settings/organization/general) before<br>using GPT Image models.<br>### GPT Image 2.6<br>GPT Image 2.6 includes [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) for detailed visual work and [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) for fast iteration. Both models support complexity control, markup-guided edits, SVG output, and animated GIF output through the Image API. The existing examples below use GPT Image 2.5.<br>#### Set image complexity<br>Use the `complexity` request field to control how much the image model plans before rendering. Lower complexity can suit focused edits, such as changing a background or a sign. Higher complexity can help with dense text, complex layouts, and relationships between objects. Higher complexity can increase latency and introduce unwanted changes, so compare results for your task.<br>The supported complexity levels for Sunburst and Flare are `low`, `medium`, and `high`. If you omit `complexity`, both models use `high`. The separate `quality` setting controls rendering quality.<br>Adjusting complexity has no separate fee.<br>Sunburst generated these paper-cut football scenes from the same prompt at medium quality. Compare the trophy, the uniforms, and the placement of the “CHAMPIONS” sign as complexity changes.<br>Low complexity<br>![Players in red lift a trophy topped with a crown. A CHAMPIONS banner spans the foreground.]( )<br>Medium complexity<br>![Players in red shirts with team crests lift a trophy decorated with a laurel wreath above a CHAMPIONS banner.]( )<br>High complexity<br>![Players in folded blue paper jerseys fill the foreground. A CHAMPIONS sign hangs in the stands behind them.]( )<br>### Safety identifiers<br>If your application serves individual end users, include a stable,<br>privacy-preserving `safety_identifier` in each [image generation](https://developers.openai.com/api/reference/resources/images/methods/generate)<br>or [image edit](https://developers.openai.com/api/reference/resources/images/methods/edit) request. Hash a<br>username or email address instead of sending identifying information, and keep<br>the identifier to 128 characters or fewer. Safety identifiers are recommended<br>but not required.<br>The Images API `user` parameter is deprecated. Send the same identifier as<br>`safety_identifier` instead. Existing requests using `user` remain supported. A<br>nonempty `safety_identifier` takes precedence over `user`; when<br>`safety_identifier` is omitted, `null`, or an empty string, the API uses `user`<br>when available.<br>## Generate Images<br>You can use the [image generation endpoint](https://developers.openai.com/api/reference/resources/images) to create images based on text prompts, or the [image generation tool](https://developers.openai.com/api/docs/guides/tools?api-mode=responses) in the Responses API to generate images as part of a conversation.<br>To learn more about customizing the output (size, quality, format, compression), refer to the [customize image output](#customize-image-output) section below.<br>You can set the `n` parameter to generate multiple images at once in a single request (by default, the API returns a single image).<br>Image API<br>Generate an image<br>```javascript<br>import OpenAI from "openai";<br>import fs from "fs";<br>const openai = new OpenAI();<br>const prompt = `<br>A children's book drawing of a veterinarian using a stethoscope to<br>listen to the heartbeat of a baby otter.<br>`;<br>const result = await openai.images.generate({<br>model: "gpt-image-2.5-sunburst",<br>prompt,<br>});<br>// Save the image to a file<br>const image_base64 = result.data[0].b64_json;<br>const image_bytes = Buffer.from(image_base64, "base64");<br>fs.writeFileSync("otter.png", image_bytes);<br>```<br>```python<br>from openai import OpenAI<br>import base64<br>client = OpenAI()<br>prompt = """<br>A children's book drawing of a veterinarian using a stethoscope to<br>listen to the heartbeat of a baby otter.<br>"""<br>result = client.images.generate(model="gpt-image-2.5-sunburst", prompt=prompt)<br>image_base64 = result.data[0].b64_json<br>image_bytes = base64.b64decode(image_base64)<br># Save the image to a file<br>with open("otter.png", "wb") as f:<br>f.write(image_bytes)<br>```<br>```go<br>package main<br>import (<br>"context"<br>"encoding/base64"<br>"os"<br>"github.com/openai/openai-go/v3"<br>)<br>func main() {<br>client := openai.NewClient()<br>result, err := client.Images.Generate(context.Background(), openai.ImageGenerateParams{<br>Model: openai.ImageModel("gpt-image-2.5-sunburst"), |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • gpt-5<br>• gpt-5.5<br>• gpt-6-astra<br>• gpt-image-1<br>• gpt-image-2<br>• gpt-image-2-6-sunburst.gif<br>• gpt-image-2.5-flare<br>• gpt-image-2.5-sunburst<br>• gpt-image-2.6-flare<br>• gpt-image-2.6-sunburst<br>• gpt-image-models<br>• gpt-model-snapshots |
| plan or price mentions | 新增 | 未记录 | 列表（43 项）<details><summary>展开完整内容</summary><ul><li>The [Image API](https://developers.openai.com/api/reference/resources/images) provides two endpoints, each with distinct capabilities:</li><li>privacy-preserving `safety_identifier` in each [image generation](https://developers.openai.com/api/reference/resources/images/methods/generate)</li><li>or [image edit](https://developers.openai.com/api/reference/resources/images/methods/edit) request. Hash a</li><li>You can use the [image generation endpoint](https://developers.openai.com/api/reference/resources/images) to create images based on text prompts, or the [image generation tool](https://developers.openai.com/api/docs/guides/tools?api-mode=responses) in the Responses API to generate images as part of a conversation.</li><li>curl -X POST "https://api.openai.com/v1/images/generations" \</li><li>-H "Authorization: Bearer $OPENAI_API_KEY" \</li><li>saveBase64Image(`river-partial-${idx}.png`, event.partial_image_b64);</li><li>fs.writeFileSync(`river${idx}.png`, imageBuffer);</li><li>The [image edits](https://developers.openai.com/api/reference/resources/images) endpoint lets you:</li><li>image_url: `data:image/png;base64,${base64Image1}`,</li><li>image_url: `data:image/png;base64,${base64Image2}`,</li><li>-X POST "https://api.openai.com/v1/images/edits" \</li><li>Use the Image API’s `POST /v1/images/edits` endpoint for markup-guided edits with supported GPT Image 2.5 and 2.6 models. For regional edits with the Responses API, use a [mask](#edit-an-image-using-a-mask). Use an annotation layer to show where a change should happen and describe the change in `prompt`.</li><li>For example, download the [kitchen photo](https://developers.openai.com/images/platform/guides/image-prompting/kitchen.webp) and [transparent overlay](https://developers.openai.com/images/platform/guides/image-prompting/markup-vase-overlay-gpt-image-2-6.png) into the same directory. The overlay circles the vase to recolor.</li><li>curl --fail --silent --show-error https://api.openai.com/v1/images/edits \</li><li>Set `output_format: "gif"` on `POST /v1/images/generations`. Describe the subject, motion, and desired loop in your prompt. GIF output is for image generation; the image edit endpoint does not support GIF output.</li><li>// image edits, and Responses API tool calls that generate images.</li><li>Image output costs $30 per million billable tokens. Use the [calculator](#calculating-costs) to estimate the output cost for one image.</li><li>Both GPT Image 2.5 models use the same token rates: $8 per million image input tokens, $2 per million cached image input tokens, $30 per million image output tokens, $5 per million text input tokens, and $1.25 per million cached text input tokens. See [pricing](https://developers.openai.com/api/docs/pricing#image-generation).</li><li>For GPT Image 2 and GPT Image 2.5, cached input pricing applies only to the image generation tool in the Responses API. It doesn't apply to direct Images API requests, including `/v1/images/edits`.</li><li>costs](https://developers.openai.com/api/docs/guides/images-vision?api-mode=responses#calculating-costs)</li><li>Note that you will also need to account for [input tokens](https://developers.openai.com/api/docs/guides/images-vision?api-mode=responses#calculating-costs): text tokens for the prompt and image tokens for the input images if editing images.</li><li>$0.006</li><li>$0.005</li><li>$0.053</li><li>$0.041</li><li>$0.211</li><li>$0.165</li><li>$0.009</li><li>$0.013</li><li>$0.034</li><li>$0.05</li><li>$0.133</li><li>$0.2</li><li>$0.011</li><li>$0.016</li><li>$0.042</li><li>$0.063</li><li>$0.167</li><li>$0.25</li><li>$0.015</li><li>$0.036</li><li>$0.052</li></ul></details> |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | openai-image-generation |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • Partial 1<br>• Partial 2<br>• Final image |
| tables › 第 1 项 › heading | 新增 | 未记录 | Result |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • 空字符串<br>• 空字符串<br>• 空字符串 |
| tables › 第 2 项 › headers | 新增 | 未记录 | • Image<br>• Mask<br>• Output |
| tables › 第 2 项 › heading | 新增 | 未记录 | Save the image to a file |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • 空字符串<br>• 空字符串<br>• 空字符串 |
| tables › 第 3 项 › headers | 新增 | 未记录 | • Setting<br>• Options |
| tables › 第 3 项 › heading | 新增 | 未记录 | Size and quality options |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • Recommended sizes<br>• `1024x1024` (square), `1536x1024` (landscape), `1024x1536` (portrait) |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • Quality<br>• `low`, `medium`, `high`, `xhigh`, `max`, `auto` |
| tables › 第 4 项 › headers | 新增 | 未记录 | • Field<br>• Values<br>• Default |
| tables › 第 4 项 › heading | 新增 | 未记录 | Generate animated GIF output |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • `frame_count`<br>• 2–64 frames<br>• 9 |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • `frame_duration_ms`<br>• 20–2000 milliseconds per frame, rounded to 10 ms<br>• 200 |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • `size`<br>• `auto`, or `WIDTHxHEIGHT` with positive dimensions that are multiples of 16<br>• `auto` |
| tables › 第 5 项 › headers | 新增 | 未记录 | • Quality<br>• Square (1024×1024)<br>• Portrait (1024×1536)<br>• Landscape (1536×1024) |
| tables › 第 5 项 › heading | 新增 | 未记录 | Models prior to `gpt-image-2` |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • Low<br>• 272 tokens<br>• 408 tokens<br>• 400 tokens |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • Medium<br>• 1056 tokens<br>• 1584 tokens<br>• 1568 tokens |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • High<br>• 4160 tokens<br>• 6240 tokens<br>• 6208 tokens |
| tables › 第 6 项 › headers | 新增 | 未记录 | • "Generate an image of gray tabby cat hugging an otter with an orange scarf"<br>• 空字符串 |
| tables › 第 6 项 › heading | 新增 | 未记录 | 空字符串 |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • "Now make it look realistic"<br>• 空字符串 |
| tables › 第 7 项 › headers | 新增 | 未记录 | • Popular sizes<br>• `1024x1024` (square) `1536x1024` (landscape) `1024x1536` (portrait) `2048x2048` (2K square) `2048x1152` (2K landscape) `3840x2160` (4K landscape) `2160x3840` (4K portrait) `auto` (default) |
| tables › 第 7 项 › heading | 新增 | 未记录 | 空字符串 |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • Size constraints<br>• Maximum edge length must be less than or equal to `3840px` Both edges must be multiples of `16px` Long edge to short edge ratio must not exceed `3:1` Total pixels must be at least `655,360` and no more than `8,294,400` |
| tables › 第 7 项 › rows › 第 2 项 | 新增 | 未记录 | • Quality options<br>• `low` `medium` `high` `auto` (default) |
| tables › 第 8 项 › headers | 新增 | 未记录 | • Model<br>• Quality<br>• 1024 × 1024<br>• 1024 × 1536<br>• 1536 × 1024 |
| tables › 第 8 项 › heading | 新增 | 未记录 | 空字符串 |
| tables › 第 8 项 › rows › 第 1 项 | 新增 | 未记录 | • GPT Image 2 Additional sizes available<br>• Low<br>• $0.006<br>• $0.005<br>• $0.005 |
| tables › 第 8 项 › rows › 第 2 项 | 新增 | 未记录 | • Medium<br>• $0.053<br>• $0.041<br>• $0.041 |
| tables › 第 8 项 › rows › 第 3 项 | 新增 | 未记录 | • High<br>• $0.211<br>• $0.165<br>• $0.165 |
| tables › 第 8 项 › rows › 第 4 项 | 新增 | 未记录 | • GPT Image 1.5<br>• Low<br>• $0.009<br>• $0.013<br>• $0.013 |
| tables › 第 8 项 › rows › 第 5 项 | 新增 | 未记录 | • Medium<br>• $0.034<br>• $0.05<br>• $0.05 |
| tables › 第 8 项 › rows › 第 6 项 | 新增 | 未记录 | • High<br>• $0.133<br>• $0.2<br>• $0.2 |
| tables › 第 8 项 › rows › 第 7 项 | 新增 | 未记录 | • GPT Image 1<br>• Low<br>• $0.011<br>• $0.016<br>• $0.016 |
| tables › 第 8 项 › rows › 第 8 项 | 新增 | 未记录 | • Medium<br>• $0.042<br>• $0.063<br>• $0.063 |
| tables › 第 8 项 › rows › 第 9 项 | 新增 | 未记录 | • High<br>• $0.167<br>• $0.25<br>• $0.25 |
| tables › 第 8 项 › rows › 第 10 项 | 新增 | 未记录 | • GPT Image 1 Mini<br>• Low<br>• $0.005<br>• $0.006<br>• $0.006 |
| tables › 第 8 项 › rows › 第 11 项 | 新增 | 未记录 | • Medium<br>• $0.011<br>• $0.015<br>• $0.015 |
| tables › 第 8 项 › rows › 第 12 项 | 新增 | 未记录 | • High<br>• $0.036<br>• $0.052<br>• $0.052 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-models-all

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（138 项）<details><summary>展开完整内容</summary><ul><li>computer-use-preview</li><li>GPT-3</li><li>GPT-3.5</li><li>gpt-3.5-turbo</li><li>gpt-4</li><li>GPT-4</li><li>gpt-4-turbo</li><li>gpt-4-turbo-preview</li><li>gpt-4.1</li><li>GPT-4.1</li><li>gpt-4.1-mini</li><li>gpt-4.1-nano</li><li>GPT-4.5</li><li>gpt-4.5-preview</li><li>gpt-4o</li><li>GPT-4o</li><li>gpt-4o-audio-preview</li><li>gpt-4o-mini</li><li>gpt-4o-mini-audio-preview</li><li>gpt-4o-mini-realtime-preview</li><li>gpt-4o-mini-search-preview</li><li>gpt-4o-mini-transcribe</li><li>gpt-4o-mini-tts</li><li>gpt-4o-realtime-preview</li><li>gpt-4o-search-preview</li><li>gpt-4o-transcribe</li><li>gpt-4o-transcribe-diarize</li><li>gpt-5</li><li>GPT-5</li><li>gpt-5-chat-latest</li><li>gpt-5-codex</li><li>GPT-5-Codex</li><li>gpt-5-mini</li><li>gpt-5-nano</li><li>gpt-5-pro</li><li>gpt-5.1</li><li>GPT-5.1</li><li>gpt-5.1-chat-latest</li><li>gpt-5.1-codex</li><li>GPT-5.1-codex</li><li>GPT-5.1-Codex</li><li>gpt-5.1-codex-max</li><li>GPT-5.1-Codex-Max</li><li>gpt-5.1-codex-mini</li><li>gpt-5.2</li><li>GPT-5.2</li><li>gpt-5.2-chat-latest</li><li>gpt-5.2-codex</li><li>GPT-5.2-Codex</li><li>gpt-5.2-pro</li><li>GPT-5.3</li><li>gpt-5.3-chat-latest</li><li>gpt-5.3-codex</li><li>GPT-5.3-Codex</li><li>gpt-5.4</li><li>GPT-5.4</li><li>GPT-5.4-class</li><li>gpt-5.4-mini</li><li>gpt-5.4-nano</li><li>gpt-5.4-pro</li><li>gpt-5.5</li><li>GPT-5.5</li><li>gpt-5.5-pro</li><li>GPT-5.6</li><li>gpt-5.6-cyber</li><li>gpt-5.6-luna</li><li>gpt-5.6-sol</li><li>gpt-5.6-terra</li><li>GPT-6</li><li>gpt-6-astra</li><li>gpt-6-family</li><li>gpt-6-luna</li><li>gpt-6-sol</li><li>GPT-6.1</li><li>gpt-6.1-sol</li><li>gpt-6.1-terra</li><li>gpt-audio</li><li>GPT-Audio</li><li>gpt-audio-1.5</li><li>GPT-Audio-1.5</li><li>gpt-audio-mini</li><li>gpt-daybreak-blue-latest</li><li>gpt-daybreak-red-latest</li><li>gpt-image-1</li><li>GPT-Image-1</li><li>gpt-image-1-mini</li><li>gpt-image-1.5</li><li>GPT-Image-1.5</li><li>gpt-image-2</li><li>GPT-Image-2</li><li>GPT-Image-2.5</li><li>gpt-image-2.5-flare</li><li>gpt-image-2.5-sunburst</li><li>GPT-Image-2.6</li><li>gpt-image-2.6-flare</li><li>gpt-image-2.6-sunburst</li><li>GPT-Live</li><li>gpt-live-1</li><li>GPT-Live-1</li><li>gpt-live-transcribe</li><li>GPT-Live-Transcribe</li><li>gpt-oss</li><li>gpt-oss-120b</li><li>gpt-oss-20b</li><li>gpt-realtime</li><li>GPT-Realtime</li><li>gpt-realtime-1.5</li><li>GPT-Realtime-1.5</li><li>gpt-realtime-2</li><li>GPT-Realtime-2</li><li>gpt-realtime-2.1</li><li>GPT-Realtime-2.1</li><li>gpt-realtime-2.1-mini</li><li>gpt-realtime-mini</li><li>gpt-realtime-translate</li><li>GPT-Realtime-Translate</li><li>gpt-realtime-whisper</li><li>GPT-Realtime-Whisper</li><li>GPT-Rosalind</li><li>gpt-rosalind-research</li><li>gpt-transcribe</li><li>GPT-Transcribe</li><li>o1</li><li>o1-mini</li><li>o1-preview</li><li>o1-pro</li><li>o3</li><li>o3-deep-research</li><li>o3-mini</li><li>o3-pro</li><li>o4-mini</li><li>o4-mini-deep-research</li><li>omni-moderation</li><li>omni-moderation-latest</li><li>text-embedding-3-large</li><li>text-embedding-3-small</li><li>text-embedding-ada-002</li><li>whisper-1</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | openai-models-all |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | All models &#124; OpenAI API |

#### 来源 / openai-models-list-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | account_scoped |
| api mentions | 新增 | 未记录 | • curl https://api.openai.com/v1/models \ |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | &gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>## List models<br>**get** `/models`<br>Lists the currently available models, and provides basic information about each one such as the owner and availability.<br>### Returns<br>- `data: array of Model`<br>- `id: string`<br>The model identifier, which can be referenced in the API endpoints.<br>- `created: integer`<br>The Unix timestamp (in seconds) when the model was created.<br>`format: unixtime`<br>- `object: "model"`<br>The object type, which is always "model".<br>- `"model"`<br>- `owned_by: string`<br>The organization that owns the model.<br>- `shutdown_date: optional string or null`<br>The date when the model will shut down, or null if not announced.<br>`format: date`<br>- `object: "list"`<br>- `"list"`<br>### Example<br>```http<br>curl https://api.openai.com/v1/models \<br>-H "Authorization: Bearer $OPENAI_API_KEY"<br>```<br>#### 200 — Example<br>```json<br>{<br>"data": [<br>{<br>"id": "id",<br>"created": 0,<br>"object": "model",<br>"owned_by": "owned_by",<br>"shutdown_date": "2019-12-27"<br>}<br>],<br>"object": "list"<br>}<br>```<br>### Example<br>```http<br>curl https://api.openai.com/v1/models \<br>-H "Authorization: Bearer $OPENAI_API_KEY"<br>```<br>#### Response example<br>```json<br>{<br>"object": "list",<br>"data": [<br>{<br>"id": "model-id-0",<br>"object": "model",<br>"created": 1686935002,<br>"owned_by": "organization-owner",<br>"shutdown_date": null<br>},<br>{<br>"id": "model-id-1",<br>"object": "model",<br>"created": 1686935002,<br>"owned_by": "organization-owner",<br>"shutdown_date": null<br>},<br>{<br>"id": "model-id-2",<br>"object": "model",<br>"created": 1686935002,<br>"owned_by": "openai",<br>"shutdown_date": "2026-10-23"<br>}<br>]<br>}<br>``` |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $OPENAI_API_KEY" |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | openai-models-list-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（30 项）<details><summary>展开完整内容</summary><ul><li>GPT-5.2</li><li>GPT-5.4</li><li>GPT-5.5</li><li>GPT-5.6</li><li>GPT-6</li><li>gpt-6-astra</li><li>gpt-6-luna</li><li>GPT-6.1</li><li>gpt-6.1-sol</li><li>GPT-Audio-1.5</li><li>GPT-Image-2</li><li>GPT-Image-2.5</li><li>GPT-Image-2.6</li><li>GPT-Live</li><li>GPT-Live-Transcribe</li><li>gpt-oss-120b</li><li>gpt-oss-20b</li><li>GPT-Realtime-1.5</li><li>GPT-Realtime-2</li><li>GPT-Realtime-2.1</li><li>GPT-Realtime-Translate</li><li>GPT-Realtime-Whisper</li><li>GPT-Rosalind</li><li>gpt-rosalind-research</li><li>GPT-Transcribe</li><li>omni-moderation</li><li>omni-moderation-latest</li><li>text-embedding-3-large</li><li>text-embedding-3-small</li><li>text-embedding-ada-002</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| source ref | 新增 | 未记录 | openai-models |
| structured records | 新增 | 未记录 | 空列表 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 列表（76 项）<details><summary>展开完整内容</summary><ul><li>Realtime and audio generation models</li><li>&#124; gpt-realtime-2.1 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2.1 &#124; Text &#124; $4.00 &#124; $24.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2.1 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-realtime-2.1-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; $0.30 &#124;</li><li>&#124; gpt-realtime-2.1-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; $0.06 &#124;</li><li>&#124; gpt-realtime-2.1-mini &#124; Image &#124; $0.80 &#124; - &#124; $0.08 &#124;</li><li>&#124; gpt-realtime-2 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2 &#124; Text &#124; $4.00 &#124; $24.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-realtime-1.5 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-1.5 &#124; Text &#124; $4.00 &#124; $16.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-1.5 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-realtime-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; $0.30 &#124;</li><li>&#124; gpt-realtime-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; $0.06 &#124;</li><li>&#124; gpt-realtime-mini &#124; Image &#124; $0.80 &#124; - &#124; $0.08 &#124;</li><li>&#124; gpt-realtime &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime &#124; Text &#124; $4.00 &#124; $16.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-audio-1.5 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; - &#124;</li><li>&#124; gpt-audio-1.5 &#124; Text &#124; $2.50 &#124; $10.00 &#124; - &#124;</li><li>&#124; gpt-audio-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; - &#124;</li><li>&#124; gpt-audio-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; - &#124;</li><li>&#124; gpt-audio &#124; Audio &#124; $32.00 &#124; $64.00 &#124; - &#124;</li><li>&#124; gpt-audio &#124; Text &#124; $2.50 &#124; $10.00 &#124; - &#124;</li><li>&#124; gpt-4o-mini-tts &#124; Audio &#124; - &#124; $12.00 &#124; - &#124;</li><li>Image generation models</li><li>For image generation cost estimates, use the calculator in the image generation guide.</li><li>&#124; gpt-image-2.6-sunburst &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.6-sunburst &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2.6-flare &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.6-flare &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2 &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2 &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-1.5 &#124; Image &#124; $8.00 &#124; $32.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-1.5 &#124; Text &#124; $5.00 &#124; $10.00 &#124; $1.25 &#124;</li><li>&#124; gpt-image-1-mini &#124; Image &#124; $2.50 &#124; $8.00 &#124; $0.25 &#124;</li><li>&#124; gpt-image-1-mini &#124; Text &#124; $2.00 &#124; - &#124; $0.20 &#124;</li><li>&#124; chatgpt-image-latest &#124; Image &#124; $8.00 &#124; $32.00 &#124; $2.00 &#124;</li><li>&#124; chatgpt-image-latest &#124; Text &#124; $5.00 &#124; $10.00 &#124; $1.25 &#124;</li><li>Cached input rates for GPT Image 2 and GPT Image 2.5 only apply to images generated with the Responses API. [Learn more](https://developers.openai.com/api/docs/guides/image-generation#cached-input-pricing).</li><li>&#124; gpt-image-2 &#124; Image &#124; $4.00 &#124; $15.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-2 &#124; Text &#124; $2.50 &#124; - &#124; $0.625 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Image &#124; $4.00 &#124; $15.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Text &#124; $2.50 &#124; - &#124; $0.625 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Image &#124; $4.00 &#124; $15.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Text &#124; $2.50 &#124; - &#124; $0.625 &#124;</li><li>&#124; gpt-image-1.5 &#124; Image &#124; $4.00 &#124; $16.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-1.5 &#124; Text &#124; $2.50 &#124; $5.00 &#124; $0.63 &#124;</li><li>&#124; gpt-image-1-mini &#124; Image &#124; $1.25 &#124; $4.00 &#124; $0.13 &#124;</li><li>&#124; gpt-image-1-mini &#124; Text &#124; $1.00 &#124; - &#124; $0.10 &#124;</li><li>&#124; chatgpt-image-latest &#124; Image &#124; $4.00 &#124; $16.00 &#124; $1.00 &#124;</li><li>&#124; chatgpt-image-latest &#124; Text &#124; $2.50 &#124; $5.00 &#124; $0.63 &#124;</li><li>Transcription models</li><li>&#124; gpt-realtime-translate &#124; Live translation &#124; - &#124; - &#124; $0.034 / minute &#124;</li><li>&#124; gpt-live-transcribe &#124; Live transcription &#124; - &#124; - &#124; $0.017 / minute &#124;</li><li>&#124; gpt-realtime-whisper &#124; Live transcription &#124; - &#124; - &#124; $0.017 / minute &#124;</li><li>&#124; gpt-transcribe &#124; Transcription &#124; - &#124; - &#124; $0.0045 / minute &#124;</li><li>&#124; gpt-4o-transcribe &#124; Transcription &#124; $2.50 &#124; $10.00 &#124; $0.006 / minute &#124;</li><li>&#124; gpt-4o-mini-transcribe &#124; Transcription &#124; $1.25 &#124; $5.00 &#124; $0.003 / minute &#124;</li><li>&#124; gpt-4o-transcribe-diarize &#124; Transcription + diarization &#124; $2.50 &#124; $10.00 &#124; $0.006 / minute &#124;</li><li>&#124; Whisper &#124; Transcription &#124; - &#124; - &#124; $0.006 / minute &#124;</li><li>&#124; Web search &#124; Image Web search (all models) &#124; $10.00 / 1k calls + Search content tokens billed at model rates. &#124;</li><li>&#124; Web search &#124; Web search preview (reasoning models, including `gpt-5`, `o-series`) &#124; $10.00 / 1k calls + Search content tokens billed at model rates. &#124;</li><li>&#124; Web search &#124; Web search preview (non-reasoning models) &#124; $25.00 / 1k calls + Search content tokens are free. &#124;</li><li>&#124; File search &#124; Tool call &#124; $2.50 / 1k calls &#124;</li><li>&#124; Agent Kit &#124; ChatKit file and image upload storage &#124; $0.10 / GB-day after 1 GB free per account per month &#124;</li><li>Web search preview (reasoning models, including `gpt-5`, `o-series`)</li><li>Tokens used for built-in tools are billed at the chosen model's per-token rates. GB refers to binary gigabytes (also known as gibibytes), where 1 GB is 2^30 bytes. Web search content tokens are tokens retrieved from the search index and fed to the model alongside your prompt to generate an answer. For gpt-4o-mini and gpt-4.1-mini with the non-preview web search tool, search content tokens are billed as a fixed block of 8,000 input tokens per call. File search tool call pricing applies to the Res</li><li>&#124; Embedding &#124; text-embedding-3-small &#124; $0.02 &#124; - &#124; - &#124;</li><li>&#124; Embedding &#124; text-embedding-3-large &#124; $0.13 &#124; - &#124; - &#124;</li><li>&#124; Embedding &#124; text-embedding-ada-002 &#124; $0.10 &#124; - &#124; - &#124;</li></ul></details> |
| excerpt | 新增 | 未记录 | # Pricing<br>&gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>Flagship models<br>Speed<br>Prices per 1M tokens.<br>Standard<br>### Standard pricing data<br>&#124; Model &#124; Short context input &#124; Short context output &#124; Short context cached input &#124; Short context 30m write &#124; Short context 12h write &#124; Long context input &#124; Long context output &#124; Long context cached input &#124; Long context 30m write &#124; Long context 12h write &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; gpt-6-astra &#124; $10.00 &#124; $50.00 &#124; $1.00 &#124; $12.50 &#124; $25.00 &#124; $20.00 &#124; $75.00 &#124; $2.00 &#124; $25.00 &#124; $50.00 &#124;<br>&#124; gpt-6.1-sol &#124; $2.00 &#124; $10.00 &#124; $0.10 &#124; $2.50 &#124; $5.00 &#124; $4.00 &#124; $15.00 &#124; $0.20 &#124; $5.00 &#124; $10.00 &#124;<br>&#124; gpt-6.1-terra &#124; $1.00 &#124; $5.00 &#124; $0.05 &#124; $1.25 &#124; $2.50 &#124; $2.00 &#124; $7.50 &#124; $0.10 &#124; $2.50 &#124; $5.00 &#124;<br>&#124; gpt-6-luna &#124; $0.10 &#124; $0.50 &#124; $0.01 &#124; $0.125 &#124; $0.25 &#124; $0.20 &#124; $0.75 &#124; $0.02 &#124; $0.25 &#124; $0.50 &#124;<br>&#124; gpt-6-sol &#124; $2.00 &#124; $10.00 &#124; $0.20 &#124; $2.50 &#124; $5.00 &#124; $4.00 &#124; $15.00 &#124; $0.40 &#124; $5.00 &#124; $10.00 &#124;<br>&#124; gpt-5.6-sol &#124; $4.00 &#124; $20.00 &#124; $0.40 &#124; $5.00 &#124; $10.00 &#124; $8.00 &#124; $30.00 &#124; $0.80 &#124; $10.00 &#124; $20.00 &#124;<br>&#124; gpt-5.6-terra &#124; $2.00 &#124; $12.00 &#124; $0.20 &#124; $2.50 &#124; $5.00 &#124; $4.00 &#124; $18.00 &#124; $0.40 &#124; $5.00 &#124; $10.00 &#124;<br>&#124; gpt-5.6-luna &#124; $0.20 &#124; $1.20 &#124; $0.02 &#124; $0.25 &#124; $0.50 &#124; $0.40 &#124; $1.80 &#124; $0.04 &#124; $0.50 &#124; $1.00 &#124;<br>&#124; gpt-5.5 ( 272K input tokens.<br>Regional processing (data residency) endpoints are charged a 10% uplift for models released on or after March 5, 2026. FedRAMP endpoints are also charged a 10% uplift. Priority processing was renamed Fast mode on July 30, 2026. GPT-5.6 Sol’s promotional pricing is available until November 30, 2026.<br>Cyber models<br>Our latest Daybreak models.<br>Prices per 1M tokens.<br>### Standard pricing data<br>&#124; Model &#124; Short context input &#124; Short context output &#124; Short context cached input &#124; Short context 30m write &#124; Short context 12h write &#124; Long context input &#124; Long context output &#124; Long context cached input &#124; Long context 30m write &#124; Long context 12h write &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; gpt-5.6-sol &#124; $4.00 &#124; $20.00 &#124; $0.40 &#124; $5.00 &#124; $10.00 &#124; $8.00 &#124; $30.00 &#124; $0.80 &#124; $10.00 &#124; $20.00 &#124;<br>&#124; gpt-5.6-cyber &#124; $12.50 &#124; $75.00 &#124; $1.25 &#124; $15.625 &#124; $31.25 &#124; - &#124; - &#124; - &#124; - &#124; - &#124;<br>&#124; gpt-5.5-cyber &#124; $12.50 &#124; $75.00 &#124; $1.25 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124;<br>Life sciences models<br>Our latest Rosalind models.<br>Prices per 1M tokens.<br>### Standard pricing data<br>&#124; Model &#124; Short context input &#124; Short context output &#124; Short context cached input &#124; Short context 30m write &#124; Short context 12h write &#124; Long context input &#124; Long context output &#124; Long context cached input &#124; Long context 30m write &#124; Long context 12h write &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; gpt-6-rosalind &#124; $15.00 &#124; $75.00 &#124; $1.50 &#124; $18.75 &#124; $37.50 &#124; $30.00 &#124; $112.50 &#124; $3.00 &#124; $37.50 &#124; $75.00 &#124;<br>&#124; gpt-rosalind-research &#124; $5.00 &#124; $25.00 &#124; $0.50 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124;<br>&#124; gpt-rosalind-discovery &#124; $5.00 &#124; $25.00 &#124; $0.50 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124;<br>Access is limited to approved internal research through the [trusted-access program](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research). All eligible organizations will continue to get access to the latest GPT-Rosalind models as they’re released. Regional processing (data residency) endpoints are charged a 10% uplift for models released on or after March 5, 2026, that are eligible for data residency. See our [Your data](https://developers.openai.com/api/docs/guides/your-data) guide for supported regions and processing details.<br>Legal model configurations<br>Our latest legal model configurations.<br>Prices per 1M tokens.<br>### Grouped Pricing Table data<br>&#124; Model configuration &#124; Input &#124; Output &#124; Cached input &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; gpt-6-astra-law &#124; $10.00 &#124; $50.00 &#124; $1.00 &#124;<br>GPT-6 Astra for Law promotional pricing is available at least through December 31, 2026.<br>Multimodal models<br>GPT-Live sessions<br>[GPT-Live 1](https://developers.openai.com/api/docs/models/gpt-live-1) voice sessions are billed per second,<br>without rounding up to a whole minute. Backend model and tool usage is charged<br>separately.<br>### Pricing Table data<br>&#124; Model &#124; Price per minute &#124;<br>&#124; --- &#124; --- &#124;<br>&#124; gpt-live-1 &#124; $0.05 &#124;<br>Realtime and audio generation models<br>Prices per 1M tokens unless noted.<br>### Grouped Pricing Table data<br>&#124; Model &#124; Modality &#124; Input &#124; Output / cost &#124; Cached input &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; gpt-realtime-2.1 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime-2.1 &#124; Text &#124; $4.00 &#124; $24.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime-2.1 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;<br>&#124; gpt-realtime-2.1-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; $0.30 &#124;<br>&#124; gpt-realtime-2.1-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; $0.06 &#124;<br>&#124; gpt-realtime-2.1-mini &#124; Image &#124; $0.80 &#124; - &#124; $0.08 &#124;<br>&#124; gpt-realtime-2 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime-2 &#124; Text &#124; $4.00 &#124; $24.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime-2 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;<br>&#124; gpt-realtime-1.5 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime-1.5 &#124; Text &#124; $4.00 &#124; $16.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime-1.5 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;<br>&#124; gpt-realtime-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; $0.30 &#124;<br>&#124; gpt-realtime-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; $0.06 &#124;<br>&#124; gpt-realtime-mini &#124; Image &#124; $0.80 &#124; - &#124; $0.08 &#124;<br>&#124; gpt-realtime &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime &#124; Text &#124; $4.00 &#124; $16.00 &#124; $0.40 &#124;<br>&#124; gpt-realtime &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;<br>&#124; gpt-audio-1.5 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; - &#124;<br>&#124; gpt-audio-1.5 &#124; Text &#124; $2.50 &#124; $10.00 &#124; - &#124;<br>&#124; gpt-audio-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; - &#124;<br>&#124; gpt-audio-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; - &#124;<br>&#124; gpt-audio &#124; Audio &#124; $32.00 &#124; $64.00 &#124; - &#124;<br>&#124; gpt-audio &#124; Text &#124; $2.50 &#124; $10.00 &#124; - &#124;<br>&#124; gpt-4o-mini-tts &#124; Audio &#124; - &#124; $12.00 &#124; - &#124;<br>&#124; gpt-4o-mini-tts &#124; Text &#124; $0.60 &#124; - &#124; - &#124;<br>&#124; tts-1 &#124; Text &#124; $15.00 / 1M characters &#124; - &#124; - &#124;<br>&#124; tts-1-hd &#124; Text &#124; $30.00 / 1M characters &#124; - &#124; - &#124;<br>Image generation models<br>Prices per 1M tokens.<br>Standard<br>For image generation cost estimates, use the calculator in the image generation guide.<br>### Grouped Pricing Table data<br>&#124; Model &#124; Modality &#124; Input &#124; Output &#124; Cached input &#124;<br>&#124; --- &#124; --- &#124; --- &#124; --- &#124; --- &#124;<br>&#124; gpt-image-2.6-sunburst &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;<br>&#124; gpt-image-2.6-sunburst &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;<br>&#124; gpt-image-2.6-flare &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;<br>&#124; gpt-image-2.6-flare &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;<br>&#124; gpt-image-2.5-sunburst &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124; |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | 列表（73 项）<details><summary>展开完整内容</summary><ul><li>gpt-4.1</li><li>gpt-4.1-2025-04-14</li><li>gpt-4.1-mini</li><li>gpt-4.1-mini-2025-04-14</li><li>gpt-4o</li><li>gpt-4o-2024-08-06</li><li>gpt-4o-mini</li><li>gpt-4o-mini-2024-07-18</li><li>gpt-4o-mini-transcribe</li><li>gpt-4o-mini-tts</li><li>gpt-4o-transcribe</li><li>gpt-4o-transcribe-diarize</li><li>gpt-5</li><li>gpt-5-mini</li><li>gpt-5-nano</li><li>gpt-5-pro</li><li>gpt-5-search-api</li><li>gpt-5.1</li><li>gpt-5.2</li><li>gpt-5.2-pro</li><li>gpt-5.3-codex</li><li>gpt-5.4</li><li>gpt-5.4-mini</li><li>gpt-5.4-nano</li><li>gpt-5.4-pro</li><li>gpt-5.5</li><li>gpt-5.5-cyber</li><li>gpt-5.5-pro</li><li>GPT-5.6</li><li>gpt-5.6-cyber</li><li>gpt-5.6-luna</li><li>gpt-5.6-sol</li><li>gpt-5.6-terra</li><li>GPT-6</li><li>gpt-6-astra</li><li>gpt-6-astra-law</li><li>gpt-6-luna</li><li>gpt-6-rosalind</li><li>gpt-6-sol</li><li>gpt-6.1-sol</li><li>gpt-6.1-terra</li><li>gpt-audio</li><li>gpt-audio-1.5</li><li>gpt-audio-mini</li><li>gpt-image-1-mini</li><li>gpt-image-1.5</li><li>gpt-image-2</li><li>gpt-image-2.5-flare</li><li>gpt-image-2.5-sunburst</li><li>gpt-image-2.6-flare</li><li>gpt-image-2.6-sunburst</li><li>GPT-Live</li><li>gpt-live-1</li><li>gpt-live-transcribe</li><li>gpt-realtime</li><li>gpt-realtime-1.5</li><li>gpt-realtime-2</li><li>gpt-realtime-2.1</li><li>gpt-realtime-2.1-mini</li><li>gpt-realtime-mini</li><li>gpt-realtime-translate</li><li>gpt-realtime-whisper</li><li>GPT-Rosalind</li><li>gpt-rosalind-discovery</li><li>gpt-rosalind-for-life-sciences-research</li><li>gpt-rosalind-research</li><li>gpt-transcribe</li><li>o3</li><li>o3-pro</li><li>omni-moderation-latest</li><li>text-embedding-3-large</li><li>text-embedding-3-small</li><li>text-embedding-ada-002</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 列表（105 项）<details><summary>展开完整内容</summary><ul><li>&#124; gpt-6-astra &#124; $10.00 &#124; $50.00 &#124; $1.00 &#124; $12.50 &#124; $25.00 &#124; $20.00 &#124; $75.00 &#124; $2.00 &#124; $25.00 &#124; $50.00 &#124;</li><li>&#124; gpt-6.1-sol &#124; $2.00 &#124; $10.00 &#124; $0.10 &#124; $2.50 &#124; $5.00 &#124; $4.00 &#124; $15.00 &#124; $0.20 &#124; $5.00 &#124; $10.00 &#124;</li><li>&#124; gpt-6.1-terra &#124; $1.00 &#124; $5.00 &#124; $0.05 &#124; $1.25 &#124; $2.50 &#124; $2.00 &#124; $7.50 &#124; $0.10 &#124; $2.50 &#124; $5.00 &#124;</li><li>&#124; gpt-6-luna &#124; $0.10 &#124; $0.50 &#124; $0.01 &#124; $0.125 &#124; $0.25 &#124; $0.20 &#124; $0.75 &#124; $0.02 &#124; $0.25 &#124; $0.50 &#124;</li><li>&#124; gpt-6-sol &#124; $2.00 &#124; $10.00 &#124; $0.20 &#124; $2.50 &#124; $5.00 &#124; $4.00 &#124; $15.00 &#124; $0.40 &#124; $5.00 &#124; $10.00 &#124;</li><li>&#124; gpt-5.6-sol &#124; $4.00 &#124; $20.00 &#124; $0.40 &#124; $5.00 &#124; $10.00 &#124; $8.00 &#124; $30.00 &#124; $0.80 &#124; $10.00 &#124; $20.00 &#124;</li><li>&#124; gpt-5.6-terra &#124; $2.00 &#124; $12.00 &#124; $0.20 &#124; $2.50 &#124; $5.00 &#124; $4.00 &#124; $18.00 &#124; $0.40 &#124; $5.00 &#124; $10.00 &#124;</li><li>&#124; gpt-5.6-luna &#124; $0.20 &#124; $1.20 &#124; $0.02 &#124; $0.25 &#124; $0.50 &#124; $0.40 &#124; $1.80 &#124; $0.04 &#124; $0.50 &#124; $1.00 &#124;</li><li>&#124; gpt-5.6-cyber &#124; $12.50 &#124; $75.00 &#124; $1.25 &#124; $15.625 &#124; $31.25 &#124; - &#124; - &#124; - &#124; - &#124; - &#124;</li><li>&#124; gpt-5.5-cyber &#124; $12.50 &#124; $75.00 &#124; $1.25 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124;</li><li>&#124; gpt-6-rosalind &#124; $15.00 &#124; $75.00 &#124; $1.50 &#124; $18.75 &#124; $37.50 &#124; $30.00 &#124; $112.50 &#124; $3.00 &#124; $37.50 &#124; $75.00 &#124;</li><li>&#124; gpt-rosalind-research &#124; $5.00 &#124; $25.00 &#124; $0.50 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124;</li><li>&#124; gpt-rosalind-discovery &#124; $5.00 &#124; $25.00 &#124; $0.50 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124; - &#124;</li><li>&#124; gpt-6-astra-law &#124; $10.00 &#124; $50.00 &#124; $1.00 &#124;</li><li>&#124; gpt-live-1 &#124; $0.05 &#124;</li><li>&#124; gpt-realtime-2.1 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2.1 &#124; Text &#124; $4.00 &#124; $24.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2.1 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-realtime-2.1-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; $0.30 &#124;</li><li>&#124; gpt-realtime-2.1-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; $0.06 &#124;</li><li>&#124; gpt-realtime-2.1-mini &#124; Image &#124; $0.80 &#124; - &#124; $0.08 &#124;</li><li>&#124; gpt-realtime-2 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2 &#124; Text &#124; $4.00 &#124; $24.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-2 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-realtime-1.5 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-1.5 &#124; Text &#124; $4.00 &#124; $16.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime-1.5 &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-realtime-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; $0.30 &#124;</li><li>&#124; gpt-realtime-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; $0.06 &#124;</li><li>&#124; gpt-realtime-mini &#124; Image &#124; $0.80 &#124; - &#124; $0.08 &#124;</li><li>&#124; gpt-realtime &#124; Audio &#124; $32.00 &#124; $64.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime &#124; Text &#124; $4.00 &#124; $16.00 &#124; $0.40 &#124;</li><li>&#124; gpt-realtime &#124; Image &#124; $5.00 &#124; - &#124; $0.50 &#124;</li><li>&#124; gpt-audio-1.5 &#124; Audio &#124; $32.00 &#124; $64.00 &#124; - &#124;</li><li>&#124; gpt-audio-1.5 &#124; Text &#124; $2.50 &#124; $10.00 &#124; - &#124;</li><li>&#124; gpt-audio-mini &#124; Audio &#124; $10.00 &#124; $20.00 &#124; - &#124;</li><li>&#124; gpt-audio-mini &#124; Text &#124; $0.60 &#124; $2.40 &#124; - &#124;</li><li>&#124; gpt-audio &#124; Audio &#124; $32.00 &#124; $64.00 &#124; - &#124;</li><li>&#124; gpt-audio &#124; Text &#124; $2.50 &#124; $10.00 &#124; - &#124;</li><li>&#124; gpt-4o-mini-tts &#124; Audio &#124; - &#124; $12.00 &#124; - &#124;</li><li>&#124; gpt-4o-mini-tts &#124; Text &#124; $0.60 &#124; - &#124; - &#124;</li><li>&#124; tts-1 &#124; Text &#124; $15.00 / 1M characters &#124; - &#124; - &#124;</li><li>&#124; tts-1-hd &#124; Text &#124; $30.00 / 1M characters &#124; - &#124; - &#124;</li><li>&#124; gpt-image-2.6-sunburst &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.6-sunburst &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2.6-flare &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.6-flare &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-2 &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-2 &#124; Text &#124; $5.00 &#124; - &#124; $1.25 &#124;</li><li>&#124; gpt-image-1.5 &#124; Image &#124; $8.00 &#124; $32.00 &#124; $2.00 &#124;</li><li>&#124; gpt-image-1.5 &#124; Text &#124; $5.00 &#124; $10.00 &#124; $1.25 &#124;</li><li>&#124; gpt-image-1-mini &#124; Image &#124; $2.50 &#124; $8.00 &#124; $0.25 &#124;</li><li>&#124; gpt-image-1-mini &#124; Text &#124; $2.00 &#124; - &#124; $0.20 &#124;</li><li>&#124; chatgpt-image-latest &#124; Image &#124; $8.00 &#124; $32.00 &#124; $2.00 &#124;</li><li>&#124; chatgpt-image-latest &#124; Text &#124; $5.00 &#124; $10.00 &#124; $1.25 &#124;</li><li>Cached input rates for GPT Image 2 and GPT Image 2.5 only apply to images generated with the Responses API. [Learn more](https://developers.openai.com/api/docs/guides/image-generation#cached-input-pricing).</li><li>&#124; gpt-image-2 &#124; Image &#124; $4.00 &#124; $15.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-2 &#124; Text &#124; $2.50 &#124; - &#124; $0.625 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Image &#124; $4.00 &#124; $15.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-2.5-sunburst &#124; Text &#124; $2.50 &#124; - &#124; $0.625 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Image &#124; $4.00 &#124; $15.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-2.5-flare &#124; Text &#124; $2.50 &#124; - &#124; $0.625 &#124;</li><li>&#124; gpt-image-1.5 &#124; Image &#124; $4.00 &#124; $16.00 &#124; $1.00 &#124;</li><li>&#124; gpt-image-1.5 &#124; Text &#124; $2.50 &#124; $5.00 &#124; $0.63 &#124;</li><li>&#124; gpt-image-1-mini &#124; Image &#124; $1.25 &#124; $4.00 &#124; $0.13 &#124;</li><li>&#124; gpt-image-1-mini &#124; Text &#124; $1.00 &#124; - &#124; $0.10 &#124;</li><li>&#124; chatgpt-image-latest &#124; Image &#124; $4.00 &#124; $16.00 &#124; $1.00 &#124;</li><li>&#124; chatgpt-image-latest &#124; Text &#124; $2.50 &#124; $5.00 &#124; $0.63 &#124;</li><li>&#124; gpt-realtime-translate &#124; Live translation &#124; - &#124; - &#124; $0.034 / minute &#124;</li><li>&#124; gpt-live-transcribe &#124; Live transcription &#124; - &#124; - &#124; $0.017 / minute &#124;</li><li>&#124; gpt-realtime-whisper &#124; Live transcription &#124; - &#124; - &#124; $0.017 / minute &#124;</li><li>&#124; gpt-transcribe &#124; Transcription &#124; - &#124; - &#124; $0.0045 / minute &#124;</li><li>&#124; gpt-4o-transcribe &#124; Transcription &#124; $2.50 &#124; $10.00 &#124; $0.006 / minute &#124;</li><li>&#124; gpt-4o-mini-transcribe &#124; Transcription &#124; $1.25 &#124; $5.00 &#124; $0.003 / minute &#124;</li><li>&#124; gpt-4o-transcribe-diarize &#124; Transcription + diarization &#124; $2.50 &#124; $10.00 &#124; $0.006 / minute &#124;</li><li>&#124; Whisper &#124; Transcription &#124; - &#124; - &#124; $0.006 / minute &#124;</li><li>&#124; Web search &#124; Web search (all models) &#124; $10.00 / 1k calls + Search content tokens billed at model rates. &#124;</li><li>&#124; Web search &#124; Image Web search (all models) &#124; $10.00 / 1k calls + Search content tokens billed at model rates. &#124;</li><li>&#124; Web search &#124; Web search preview (reasoning models, including `gpt-5`, `o-series`) &#124; $10.00 / 1k calls + Search content tokens billed at model rates. &#124;</li><li>&#124; Web search &#124; Web search preview (non-reasoning models) &#124; $25.00 / 1k calls + Search content tokens are free. &#124;</li><li>&#124; Containers &#124; Hosted Shell and Code Interpreter &#124; 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session per container. &#124;</li><li>&#124; File search &#124; Storage &#124; $0.10 / GB per day (1 GB free) &#124;</li><li>&#124; File search &#124; Tool call &#124; $2.50 / 1k calls &#124;</li><li>&#124; Agent Kit &#124; ChatKit file and image upload storage &#124; $0.10 / GB-day after 1 GB free per account per month &#124;</li><li>$10.00 / 1k calls + Search content tokens billed at model rates.</li><li>$25.00 / 1k calls + Search content tokens are free.</li><li>&#124; ChatGPT &#124; chat-latest &#124; $5.00 &#124; $30.00 &#124; $0.50 &#124;</li><li>&#124; Codex &#124; gpt-5.3-codex &#124; $1.75 &#124; $14.00 &#124; $0.175 &#124;</li><li>&#124; Search &#124; gpt-5-search-api &#124; $1.25 &#124; $10.00 &#124; $0.125 &#124;</li><li>&#124; Embedding &#124; text-embedding-3-small &#124; $0.02 &#124; - &#124; - &#124;</li><li>&#124; Embedding &#124; text-embedding-3-large &#124; $0.13 &#124; - &#124; - &#124;</li><li>&#124; Embedding &#124; text-embedding-ada-002 &#124; $0.10 &#124; - &#124; - &#124;</li><li>&#124; Codex &#124; gpt-5.3-codex &#124; $3.50 &#124; $28.00 &#124; $0.35 &#124;</li><li>&#124; gpt-4.1-2025-04-14 &#124; $25.00 &#124; $3.00 &#124; $12.00 &#124; $0.75 &#124;</li><li>&#124; gpt-4.1-mini-2025-04-14 &#124; $5.00 &#124; $0.80 &#124; $3.20 &#124; $0.20 &#124;</li><li>&#124; gpt-4o-2024-08-06 &#124; $25.00 &#124; $3.75 &#124; $15.00 &#124; $1.875 &#124;</li><li>&#124; gpt-4o-mini-2024-07-18 &#124; $3.00 &#124; $0.30 &#124; $1.20 &#124; $0.15 &#124;</li><li>&#124; gpt-4.1-2025-04-14 &#124; $25.00 &#124; $1.50 &#124; $6.00 &#124; $0.50 &#124;</li><li>&#124; gpt-4.1-mini-2025-04-14 &#124; $5.00 &#124; $0.40 &#124; $1.60 &#124; $0.10 &#124;</li><li>&#124; gpt-4o-2024-08-06 &#124; $25.00 &#124; $2.225 &#124; $12.50 &#124; $0.90 &#124;</li><li>&#124; gpt-4o-mini-2024-07-18 &#124; $3.00 &#124; $0.15 &#124; $0.60 &#124; $0.075 &#124;</li></ul></details> |
| scope | 新增 | 未记录 | pricing |
| source ref | 新增 | 未记录 | openai-pricing |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write |
| tables › 第 1 项 › heading | 新增 | 未记录 | Standard pricing data |
| tables › 第 1 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-6-astra<br>• $10.00<br>• $50.00<br>• $1.00<br>• $12.50<br>• $25.00<br>• $20.00<br>• $75.00<br>• $2.00<br>• $25.00<br>• $50.00 |
| tables › 第 1 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-6.1-sol<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00 |
| tables › 第 1 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-6.1-terra<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00 |
| tables › 第 1 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-6-luna<br>• $0.10<br>• $0.50<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.75<br>• $0.02<br>• $0.25<br>• $0.50 |
| tables › 第 1 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00 |
| tables › 第 1 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00 |
| tables › 第 1 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-5.6-terra<br>• $2.00<br>• $12.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $18.00<br>• $0.40<br>• $5.00<br>• $10.00 |
| tables › 第 1 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-5.6-luna<br>• $0.20<br>• $1.20<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.80<br>• $0.04<br>• $0.50<br>• $1.00 |
| tables › 第 1 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-5.5 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• $10.00<br>• $45.00<br>• $1.00<br>• -<br>• - |
| tables › 第 1 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-5.5-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• - |
| tables › 第 1 项 › rows › 第 11 项 | 新增 | 未记录 | • gpt-5.4 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• - |
| tables › 第 1 项 › rows › 第 12 项 | 新增 | 未记录 | • gpt-5.4-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• - |
| tables › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached input |
| tables › 第 2 项 › heading | 新增 | 未记录 | Standard pricing data |
| tables › 第 2 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-5.4-mini<br>• $0.75<br>• $4.50<br>• $0.075 |
| tables › 第 2 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-5.4-nano<br>• $0.20<br>• $1.25<br>• $0.02 |
| tables › 第 2 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-5.2<br>• $1.75<br>• $14.00<br>• $0.175 |
| tables › 第 2 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-5.2-pro<br>• $21.00<br>• $168.00<br>• - |
| tables › 第 2 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-5.1<br>• $1.25<br>• $10.00<br>• $0.125 |
| tables › 第 2 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-5<br>• $1.25<br>• $10.00<br>• $0.125 |
| tables › 第 2 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-5-mini<br>• $0.25<br>• $2.00<br>• $0.025 |
| tables › 第 2 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-5-nano<br>• $0.05<br>• $0.40<br>• $0.005 |
| tables › 第 2 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-5-pro<br>• $15.00<br>• $120.00<br>• - |
| tables › 第 2 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-4.1<br>• $2.00<br>• $8.00<br>• $0.50 |
| tables › 第 2 项 › rows › 第 11 项 | 新增 | 未记录 | • gpt-4.1-mini<br>• $0.40<br>• $1.60<br>• $0.10 |
| tables › 第 2 项 › rows › 第 12 项 | 新增 | 未记录 | • gpt-4o<br>• $2.50<br>• $10.00<br>• $1.25 |
| tables › 第 2 项 › rows › 第 13 项 | 新增 | 未记录 | • gpt-4o-mini<br>• $0.15<br>• $0.60<br>• $0.075 |
| tables › 第 2 项 › rows › 第 14 项 | 新增 | 未记录 | • o3-pro<br>• $20.00<br>• $80.00<br>• - |
| tables › 第 2 项 › rows › 第 15 项 | 新增 | 未记录 | • o3<br>• $2.00<br>• $8.00<br>• $0.50 |
| tables › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write |
| tables › 第 3 项 › heading | 新增 | 未记录 | Batch |
| tables › 第 3 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00 |
| tables › 第 3 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00 |
| tables › 第 3 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50 |
| tables › 第 3 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25 |
| tables › 第 3 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00 |
| tables › 第 3 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00 |
| tables › 第 3 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00 |
| tables › 第 3 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50 |
| tables › 第 3 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• - |
| tables › 第 3 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 3 项 › rows › 第 11 项 | 新增 | 未记录 | • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• - |
| tables › 第 3 项 › rows › 第 12 项 | 新增 | 未记录 | • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• - |
| tables › 第 4 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached input |
| tables › 第 4 项 › heading | 新增 | 未记录 | Batch |
| tables › 第 4 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375 |
| tables › 第 4 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01 |
| tables › 第 4 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875 |
| tables › 第 4 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-5.2-pro<br>• $10.50<br>• $84.00<br>• - |
| tables › 第 4 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625 |
| tables › 第 4 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625 |
| tables › 第 4 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125 |
| tables › 第 4 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025 |
| tables › 第 4 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-5-pro<br>• $7.50<br>• $60.00<br>• - |
| tables › 第 4 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-4.1<br>• $1.00<br>• $4.00<br>• - |
| tables › 第 4 项 › rows › 第 11 项 | 新增 | 未记录 | • gpt-4.1-mini<br>• $0.20<br>• $0.80<br>• - |
| tables › 第 4 项 › rows › 第 12 项 | 新增 | 未记录 | • gpt-4o<br>• $1.25<br>• $5.00<br>• - |
| tables › 第 4 项 › rows › 第 13 项 | 新增 | 未记录 | • gpt-4o-mini<br>• $0.075<br>• $0.30<br>• - |
| tables › 第 4 项 › rows › 第 14 项 | 新增 | 未记录 | • o3-pro<br>• $10.00<br>• $40.00<br>• - |
| tables › 第 4 项 › rows › 第 15 项 | 新增 | 未记录 | • o3<br>• $1.00<br>• $4.00<br>• - |
| tables › 第 5 项 › headers | 新增 | 未记录 | • Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write |
| tables › 第 5 项 › heading | 新增 | 未记录 | Flex |
| tables › 第 5 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00 |
| tables › 第 5 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00 |
| tables › 第 5 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50 |
| tables › 第 5 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25 |
| tables › 第 5 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00 |
| tables › 第 5 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00 |
| tables › 第 5 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00 |
| tables › 第 5 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50 |
| tables › 第 5 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• - |
| tables › 第 5 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 5 项 › rows › 第 11 项 | 新增 | 未记录 | • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• - |
| tables › 第 5 项 › rows › 第 12 项 | 新增 | 未记录 | • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• - |
| tables › 第 6 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached input |
| tables › 第 6 项 › heading | 新增 | 未记录 | Flex |
| tables › 第 6 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375 |
| tables › 第 6 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01 |
| tables › 第 6 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875 |
| tables › 第 6 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625 |
| tables › 第 6 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625 |
| tables › 第 6 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125 |
| tables › 第 6 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025 |
| tables › 第 6 项 › rows › 第 8 项 | 新增 | 未记录 | • o3<br>• $1.00<br>• $4.00<br>• $0.25 |
| tables › 第 7 项 › headers | 新增 | 未记录 | • Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write |
| tables › 第 7 项 › heading | 新增 | 未记录 | Fast pricing data |
| tables › 第 7 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-6-astra<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• $40.00<br>• $150.00<br>• $4.00<br>• $50.00<br>• $100.00 |
| tables › 第 7 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-6.1-sol<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00 |
| tables › 第 7 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-6.1-terra<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00 |
| tables › 第 7 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-6-luna<br>• $0.20<br>• $1.00<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.50<br>• $0.04<br>• $0.50<br>• $1.00 |
| tables › 第 7 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00 |
| tables › 第 7 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-5.6-sol<br>• $8.00<br>• $40.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• $16.00<br>• $60.00<br>• $1.60<br>• $20.00<br>• $40.00 |
| tables › 第 7 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-5.6-terra<br>• $4.00<br>• $24.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $36.00<br>• $0.80<br>• $10.00<br>• $20.00 |
| tables › 第 7 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-5.6-luna<br>• $0.40<br>• $2.40<br>• $0.04<br>• $0.50<br>• $1.00<br>• $0.80<br>• $3.60<br>• $0.08<br>• $1.00<br>• $2.00 |
| tables › 第 7 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-5.5 (&lt;272K context length)<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 7 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-5.4 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 8 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached input |
| tables › 第 8 项 › heading | 新增 | 未记录 | Fast pricing data |
| tables › 第 8 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-5.4-mini<br>• $1.50<br>• $9.00<br>• $0.15 |
| tables › 第 8 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-5.2<br>• $3.50<br>• $28.00<br>• $0.35 |
| tables › 第 8 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-5.1<br>• $2.50<br>• $20.00<br>• $0.25 |
| tables › 第 8 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-5<br>• $2.50<br>• $20.00<br>• $0.25 |
| tables › 第 8 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-5-mini<br>• $0.45<br>• $3.60<br>• $0.045 |
| tables › 第 8 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-4.1<br>• $3.50<br>• $14.00<br>• $0.875 |
| tables › 第 8 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-4.1-mini<br>• $0.70<br>• $2.80<br>• $0.175 |
| tables › 第 8 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-4o<br>• $4.25<br>• $17.00<br>• $2.125 |
| tables › 第 8 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-4o-mini<br>• $0.25<br>• $1.00<br>• $0.125 |
| tables › 第 8 项 › rows › 第 10 项 | 新增 | 未记录 | • o3<br>• $3.50<br>• $14.00<br>• $0.875 |
| tables › 第 9 项 › headers | 新增 | 未记录 | • Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write |
| tables › 第 9 项 › heading | 新增 | 未记录 | Ultrafast pricing data |
| tables › 第 9 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-6-astra<br>• $60.00<br>• $300.00<br>• $6.00<br>• $75.00<br>• $150.00<br>• $120.00<br>• $450.00<br>• $12.00<br>• $150.00<br>• $300.00 |
| tables › 第 9 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-6.1-sol<br>• $12.00<br>• $60.00<br>• $0.60<br>• $15.00<br>• $30.00<br>• $24.00<br>• $90.00<br>• $1.20<br>• $30.00<br>• $60.00 |
| tables › 第 10 项 › headers | 新增 | 未记录 | • Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write |
| tables › 第 10 项 › heading | 新增 | 未记录 | Standard pricing data |
| tables › 第 10 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00 |
| tables › 第 10 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-5.6-cyber<br>• $12.50<br>• $75.00<br>• $1.25<br>• $15.625<br>• $31.25<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 10 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-5.5-cyber<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 11 项 › headers | 新增 | 未记录 | • Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write |
| tables › 第 11 项 › heading | 新增 | 未记录 | Standard pricing data |
| tables › 第 11 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-6-rosalind<br>• $15.00<br>• $75.00<br>• $1.50<br>• $18.75<br>• $37.50<br>• $30.00<br>• $112.50<br>• $3.00<br>• $37.50<br>• $75.00 |
| tables › 第 11 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-rosalind-research<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 11 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-rosalind-discovery<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• - |
| tables › 第 12 项 › headers | 新增 | 未记录 | • Model configuration<br>• Input<br>• Output<br>• Cached input |
| tables › 第 12 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 12 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-6-astra-law<br>• $10.00<br>• $50.00<br>• $1.00 |
| tables › 第 13 项 › headers | 新增 | 未记录 | • Model<br>• Price per minute |
| tables › 第 13 项 › heading | 新增 | 未记录 | Pricing Table data |
| tables › 第 13 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-live-1<br>• $0.05 |
| tables › 第 14 项 › headers | 新增 | 未记录 | • Model<br>• Modality<br>• Input<br>• Output / cost<br>• Cached input |
| tables › 第 14 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 14 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-realtime-2.1<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-realtime-2.1<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-realtime-2.1<br>• Image<br>• $5.00<br>• -<br>• $0.50 |
| tables › 第 14 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-realtime-2.1-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30 |
| tables › 第 14 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-realtime-2.1-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06 |
| tables › 第 14 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-realtime-2.1-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08 |
| tables › 第 14 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-realtime-2<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-realtime-2<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-realtime-2<br>• Image<br>• $5.00<br>• -<br>• $0.50 |
| tables › 第 14 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-realtime-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 11 项 | 新增 | 未记录 | • gpt-realtime-1.5<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 12 项 | 新增 | 未记录 | • gpt-realtime-1.5<br>• Image<br>• $5.00<br>• -<br>• $0.50 |
| tables › 第 14 项 › rows › 第 13 项 | 新增 | 未记录 | • gpt-realtime-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30 |
| tables › 第 14 项 › rows › 第 14 项 | 新增 | 未记录 | • gpt-realtime-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06 |
| tables › 第 14 项 › rows › 第 15 项 | 新增 | 未记录 | • gpt-realtime-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08 |
| tables › 第 14 项 › rows › 第 16 项 | 新增 | 未记录 | • gpt-realtime<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 17 项 | 新增 | 未记录 | • gpt-realtime<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40 |
| tables › 第 14 项 › rows › 第 18 项 | 新增 | 未记录 | • gpt-realtime<br>• Image<br>• $5.00<br>• -<br>• $0.50 |
| tables › 第 14 项 › rows › 第 19 项 | 新增 | 未记录 | • gpt-audio-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• - |
| tables › 第 14 项 › rows › 第 20 项 | 新增 | 未记录 | • gpt-audio-1.5<br>• Text<br>• $2.50<br>• $10.00<br>• - |
| tables › 第 14 项 › rows › 第 21 项 | 新增 | 未记录 | • gpt-audio-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• - |
| tables › 第 14 项 › rows › 第 22 项 | 新增 | 未记录 | • gpt-audio-mini<br>• Text<br>• $0.60<br>• $2.40<br>• - |
| tables › 第 14 项 › rows › 第 23 项 | 新增 | 未记录 | • gpt-audio<br>• Audio<br>• $32.00<br>• $64.00<br>• - |
| tables › 第 14 项 › rows › 第 24 项 | 新增 | 未记录 | • gpt-audio<br>• Text<br>• $2.50<br>• $10.00<br>• - |
| tables › 第 14 项 › rows › 第 25 项 | 新增 | 未记录 | • gpt-4o-mini-tts<br>• Audio<br>• -<br>• $12.00<br>• - |
| tables › 第 14 项 › rows › 第 26 项 | 新增 | 未记录 | • gpt-4o-mini-tts<br>• Text<br>• $0.60<br>• -<br>• - |
| tables › 第 14 项 › rows › 第 27 项 | 新增 | 未记录 | • tts-1<br>• Text<br>• $15.00 / 1M characters<br>• -<br>• - |
| tables › 第 14 项 › rows › 第 28 项 | 新增 | 未记录 | • tts-1-hd<br>• Text<br>• $30.00 / 1M characters<br>• -<br>• - |
| tables › 第 15 项 › headers | 新增 | 未记录 | • Model<br>• Modality<br>• Input<br>• Output<br>• Cached input |
| tables › 第 15 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 15 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-image-2.6-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00 |
| tables › 第 15 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-image-2.6-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25 |
| tables › 第 15 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-image-2.6-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00 |
| tables › 第 15 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-image-2.6-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25 |
| tables › 第 15 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-image-2.5-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00 |
| tables › 第 15 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-image-2.5-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25 |
| tables › 第 15 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-image-2.5-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00 |
| tables › 第 15 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-image-2.5-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25 |
| tables › 第 15 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-image-2<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00 |
| tables › 第 15 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-image-2<br>• Text<br>• $5.00<br>• -<br>• $1.25 |
| tables › 第 15 项 › rows › 第 11 项 | 新增 | 未记录 | • gpt-image-1.5<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00 |
| tables › 第 15 项 › rows › 第 12 项 | 新增 | 未记录 | • gpt-image-1.5<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25 |
| tables › 第 15 项 › rows › 第 13 项 | 新增 | 未记录 | • gpt-image-1-mini<br>• Image<br>• $2.50<br>• $8.00<br>• $0.25 |
| tables › 第 15 项 › rows › 第 14 项 | 新增 | 未记录 | • gpt-image-1-mini<br>• Text<br>• $2.00<br>• -<br>• $0.20 |
| tables › 第 15 项 › rows › 第 15 项 | 新增 | 未记录 | • chatgpt-image-latest<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00 |
| tables › 第 15 项 › rows › 第 16 项 | 新增 | 未记录 | • chatgpt-image-latest<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25 |
| tables › 第 16 项 › headers | 新增 | 未记录 | • Model<br>• Modality<br>• Input<br>• Output<br>• Cached input |
| tables › 第 16 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 16 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-image-2<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00 |
| tables › 第 16 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-image-2<br>• Text<br>• $2.50<br>• -<br>• $0.625 |
| tables › 第 16 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-image-2.5-sunburst<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00 |
| tables › 第 16 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-image-2.5-sunburst<br>• Text<br>• $2.50<br>• -<br>• $0.625 |
| tables › 第 16 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-image-2.5-flare<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00 |
| tables › 第 16 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-image-2.5-flare<br>• Text<br>• $2.50<br>• -<br>• $0.625 |
| tables › 第 16 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-image-1.5<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00 |
| tables › 第 16 项 › rows › 第 8 项 | 新增 | 未记录 | • gpt-image-1.5<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63 |
| tables › 第 16 项 › rows › 第 9 项 | 新增 | 未记录 | • gpt-image-1-mini<br>• Image<br>• $1.25<br>• $4.00<br>• $0.13 |
| tables › 第 16 项 › rows › 第 10 项 | 新增 | 未记录 | • gpt-image-1-mini<br>• Text<br>• $1.00<br>• -<br>• $0.10 |
| tables › 第 16 项 › rows › 第 11 项 | 新增 | 未记录 | • chatgpt-image-latest<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00 |
| tables › 第 16 项 › rows › 第 12 项 | 新增 | 未记录 | • chatgpt-image-latest<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63 |
| tables › 第 17 项 › headers | 新增 | 未记录 | • Model<br>• Use case<br>• Input<br>• Output<br>• Estimated cost |
| tables › 第 17 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 17 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-realtime-translate<br>• Live translation<br>• -<br>• -<br>• $0.034 / minute |
| tables › 第 17 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-live-transcribe<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute |
| tables › 第 17 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-realtime-whisper<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute |
| tables › 第 17 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-transcribe<br>• Transcription<br>• -<br>• -<br>• $0.0045 / minute |
| tables › 第 17 项 › rows › 第 5 项 | 新增 | 未记录 | • gpt-4o-transcribe<br>• Transcription<br>• $2.50<br>• $10.00<br>• $0.006 / minute |
| tables › 第 17 项 › rows › 第 6 项 | 新增 | 未记录 | • gpt-4o-mini-transcribe<br>• Transcription<br>• $1.25<br>• $5.00<br>• $0.003 / minute |
| tables › 第 17 项 › rows › 第 7 项 | 新增 | 未记录 | • gpt-4o-transcribe-diarize<br>• Transcription + diarization<br>• $2.50<br>• $10.00<br>• $0.006 / minute |
| tables › 第 17 项 › rows › 第 8 项 | 新增 | 未记录 | • Whisper<br>• Transcription<br>• -<br>• -<br>• $0.006 / minute |
| tables › 第 18 项 › headers | 新增 | 未记录 | • Tool<br>• Details<br>• Pricing |
| tables › 第 18 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 18 项 › rows › 第 1 项 | 新增 | 未记录 | • Web search<br>• Web search (all models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates. |
| tables › 第 18 项 › rows › 第 2 项 | 新增 | 未记录 | • Web search<br>• Image Web search (all models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates. |
| tables › 第 18 项 › rows › 第 3 项 | 新增 | 未记录 | • Web search<br>• Web search preview (reasoning models, including `gpt-5`, `o-series`)<br>• $10.00 / 1k calls + Search content tokens billed at model rates. |
| tables › 第 18 项 › rows › 第 4 项 | 新增 | 未记录 | • Web search<br>• Web search preview (non-reasoning models)<br>• $25.00 / 1k calls + Search content tokens are free. |
| tables › 第 18 项 › rows › 第 5 项 | 新增 | 未记录 | • Containers<br>• Hosted Shell and Code Interpreter<br>• 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session per container. |
| tables › 第 18 项 › rows › 第 6 项 | 新增 | 未记录 | • File search<br>• Storage<br>• $0.10 / GB per day (1 GB free) |
| tables › 第 18 项 › rows › 第 7 项 | 新增 | 未记录 | • File search<br>• Tool call<br>• $2.50 / 1k calls |
| tables › 第 18 项 › rows › 第 8 项 | 新增 | 未记录 | • Agent Kit<br>• ChatKit file and image upload storage<br>• $0.10 / GB-day after 1 GB free per account per month |
| tables › 第 19 项 › headers | 新增 | 未记录 | • Category<br>• Model<br>• Input<br>• Output<br>• Cached input |
| tables › 第 19 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 19 项 › rows › 第 1 项 | 新增 | 未记录 | • ChatGPT<br>• chat-latest<br>• $5.00<br>• $30.00<br>• $0.50 |
| tables › 第 19 项 › rows › 第 2 项 | 新增 | 未记录 | • Codex<br>• gpt-5.3-codex<br>• $1.75<br>• $14.00<br>• $0.175 |
| tables › 第 19 项 › rows › 第 3 项 | 新增 | 未记录 | • Search<br>• gpt-5-search-api<br>• $1.25<br>• $10.00<br>• $0.125 |
| tables › 第 19 项 › rows › 第 4 项 | 新增 | 未记录 | • Embedding<br>• text-embedding-3-small<br>• $0.02<br>• -<br>• - |
| tables › 第 19 项 › rows › 第 5 项 | 新增 | 未记录 | • Embedding<br>• text-embedding-3-large<br>• $0.13<br>• -<br>• - |
| tables › 第 19 项 › rows › 第 6 项 | 新增 | 未记录 | • Embedding<br>• text-embedding-ada-002<br>• $0.10<br>• -<br>• - |
| tables › 第 19 项 › rows › 第 7 项 | 新增 | 未记录 | • Moderation<br>• omni-moderation-latest<br>• Free<br>• -<br>• - |
| tables › 第 20 项 › headers | 新增 | 未记录 | • Category<br>• Model<br>• Input<br>• Output<br>• Cached input |
| tables › 第 20 项 › heading | 新增 | 未记录 | Grouped Pricing Table data |
| tables › 第 20 项 › rows › 第 1 项 | 新增 | 未记录 | • Codex<br>• gpt-5.3-codex<br>• $3.50<br>• $28.00<br>• $0.35 |
| tables › 第 21 项 › headers | 新增 | 未记录 | • Model<br>• Training<br>• Input<br>• Output<br>• Cached input |
| tables › 第 21 项 › heading | 新增 | 未记录 | Pricing Table data |
| tables › 第 21 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-4.1-2025-04-14<br>• $25.00<br>• $3.00<br>• $12.00<br>• $0.75 |
| tables › 第 21 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.80<br>• $3.20<br>• $0.20 |
| tables › 第 21 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-4o-2024-08-06<br>• $25.00<br>• $3.75<br>• $15.00<br>• $1.875 |
| tables › 第 21 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.30<br>• $1.20<br>• $0.15 |
| tables › 第 22 项 › headers | 新增 | 未记录 | • Model<br>• Training<br>• Input<br>• Output<br>• Cached input |
| tables › 第 22 项 › heading | 新增 | 未记录 | Pricing Table data |
| tables › 第 22 项 › rows › 第 1 项 | 新增 | 未记录 | • gpt-4.1-2025-04-14<br>• $25.00<br>• $1.50<br>• $6.00<br>• $0.50 |
| tables › 第 22 项 › rows › 第 2 项 | 新增 | 未记录 | • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.40<br>• $1.60<br>• $0.10 |
| tables › 第 22 项 › rows › 第 3 项 | 新增 | 未记录 | • gpt-4o-2024-08-06<br>• $25.00<br>• $2.225<br>• $12.50<br>• $0.90 |
| tables › 第 22 项 › rows › 第 4 项 | 新增 | 未记录 | • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.15<br>• $0.60<br>• $0.075 |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl "https://api.openai.com/v1/responses" \ |
| capability mentions | 新增 | 未记录 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>With the OpenAI API, you can use a [large language model](https://developers.openai.com/api/docs/models) to generate text from a prompt, as you might using [ChatGPT](https://chatgpt.com). Models can generate almost any kind of text response—like code, mathematical equations, structured JSON data, or human-like prose.</li><li>**The `output` array often has more than one item in it!** It can contain tool calls, data about reasoning tokens generated by [reasoning models](https://developers.openai.com/api/docs/guides/reasoning), and other items. It is not safe to assume that the model's text output is present at `output[0].content[0].text`.</li><li>In addition to plain text, you can also have the model return structured data in JSON format—this feature is called [**Structured Outputs**](https://developers.openai.com/api/docs/guides/structured-outputs).</li><li>OpenAI has many different [models](https://developers.openai.com/api/docs/models) and several APIs to choose from. [Reasoning models](https://developers.openai.com/api/docs/guides/reasoning), like [`gpt-6-astra`](https://developers.openai.com/api/docs/models/gpt-6-astra), behave differently from chat models and respond better to different prompts. One important note is that reasoning models perform better and demonstrate higher intelligence when used with the Responses API.</li><li>If you're building any text generation app, we recommend using the Responses API over the older Chat Completions API. And if you're using a reasoning model, it's especially useful to [migrate to Responses](https://developers.openai.com/api/docs/guides/migrate-to-responses).</li><li>reasoning: { effort: "low" },</li><li>reasoning={"effort": "low"},</li><li>Reasoning: responses.ReasoningParam{</li><li>Effort: responses.ReasoningEffortLow,</li><li>import com.openai.models.Reasoning;</li><li>import com.openai.models.ReasoningEffort;</li><li>.reasoning(Reasoning.builder().effort(ReasoningEffort.LOW).build())</li><li>ReasoningOptions = new ResponseReasoningOptions</li><li>ReasoningEffortLevel = ResponseReasoningEffortLevel.Low,</li><li>reasoning: { effort: :low },</li><li>"reasoning": {"effort": "low"},</li><li>[Generate JSON data with Structured Outputs</li><li>Ensure JSON data emitted from a model conforms to a JSON schema.](https://developers.openai.com/api/docs/guides/structured-outputs)</li></ul></details> |
| excerpt | 新增 | 未记录 | # Text generation<br>&gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>With the OpenAI API, you can use a [large language model](https://developers.openai.com/api/docs/models) to generate text from a prompt, as you might using [ChatGPT](https://chatgpt.com). Models can generate almost any kind of text response—like code, mathematical equations, structured JSON data, or human-like prose.<br>Use the [Responses API](https://developers.openai.com/api/reference/resources/responses) for direct model requests like this text-generation call.<br>Generate text from a simple prompt<br>```javascript<br>import OpenAI from "openai";<br>const client = new OpenAI();<br>const response = await client.responses.create({<br>model: "gpt-6-astra",<br>input: "Write a one-sentence bedtime story about a unicorn.",<br>});<br>console.log(response.output_text);<br>```<br>```python<br>from openai import OpenAI<br>client = OpenAI()<br>response = client.responses.create(<br>model="gpt-6-astra",<br>input="Write a one-sentence bedtime story about a unicorn.",<br>)<br>print(response.output_text)<br>```<br>```go<br>package main<br>import (<br>"context"<br>"fmt"<br>"github.com/openai/openai-go/v3"<br>"github.com/openai/openai-go/v3/responses"<br>)<br>func main() {<br>client := openai.NewClient()<br>resp, err := client.Responses.New(context.TODO(), responses.ResponseNewParams{<br>Model: "gpt-6-astra",<br>Input: responses.ResponseNewParamsInputUnion{OfString: openai.String("Say this is a test")},<br>})<br>if err != nil {<br>panic(err.Error())<br>}<br>fmt.Println(resp.OutputText())<br>}<br>```<br>```java<br>import com.openai.client.OpenAIClient;<br>import com.openai.client.okhttp.OpenAIOkHttpClient;<br>import com.openai.models.responses.Response;<br>import com.openai.models.responses.ResponseCreateParams;<br>public class Main {<br>public static void main(String[] args) {<br>OpenAIClient client = OpenAIOkHttpClient.fromEnv();<br>ResponseCreateParams params =<br>ResponseCreateParams.builder().input("Say this is a test").model("gpt-6-astra").build();<br>Response response = client.responses().create(params);<br>response.output().stream()<br>.flatMap(item -&gt; item.message().stream())<br>.flatMap(message -&gt; message.content().stream())<br>.flatMap(content -&gt; content.outputText().stream())<br>.forEach(outputText -&gt; System.out.println(outputText.text()));<br>}<br>}<br>```<br>```csharp<br>using OpenAI.Responses;<br>#pragma warning disable OPENAI001<br>string key = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;<br>ResponsesClient client = new(key);<br>ResponseResult response = await client.CreateResponseAsync(<br>"gpt-6-astra",<br>"Say 'this is a test.'"<br>);<br>Console.WriteLine($"[ASSISTANT]: {response.GetOutputText()}");<br>```<br>```ruby<br>require "openai"<br>openai = OpenAI::Client.new<br>response = openai.responses.create(<br>model: "gpt-6-astra",<br>input: "Write a one-sentence bedtime story about a unicorn."<br>)<br>puts(response.output_text)<br>```<br>```bash<br>openai responses create \<br>--model "gpt-6-astra" \<br>--input "Write a one-sentence bedtime story about a unicorn." \<br>--raw-output \<br>--transform 'output.#(type=="message").content.0.text'<br>```<br>```bash<br>curl "https://api.openai.com/v1/responses" \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $OPENAI_API_KEY" \<br>-d '{<br>"model": "gpt-6-astra",<br>"input": "Write a one-sentence bedtime story about a unicorn."<br>}'<br>```<br>An array of content generated by the model is in the `output` property of the response. In this simple example, we have just one output which looks like this:<br>```json |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • gpt-5.5-2026-04-23<br>• gpt-6-astra |
| plan or price mentions | 新增 | 未记录 | • Console.WriteLine($"[ASSISTANT]: {response.GetOutputText()}");<br>• -H "Authorization: Bearer $OPENAI_API_KEY" \ |
| scope | 新增 | 未记录 | api |
| source ref | 新增 | 未记录 | openai-responses-api |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录  › headers | 新增 | 未记录 | • developer<br>• user<br>• assistant |
| tables › 记录  › heading | 新增 | 未记录 | 空字符串 |
| tables › 记录  › rows › 记录 `developer` messages are instructions provided by the application developer, prioritized ahead of user messages. | 新增 | 未记录 | • `developer` messages are instructions provided by the application developer, prioritized ahead of user messages.<br>• `user` messages are instructions provided by an end user, prioritized behind developer messages.<br>• Messages generated by the model have the `assistant` role. |
| title | 新增 | 未记录 | 明确未知 |

#### 来源 / openai-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • curl "https://api.openai.com/v1/responses" \ |
| capability mentions | 新增 | 未记录 | 列表（49 项）<details><summary>展开完整内容</summary><ul><li>- For a question that needs several sources, use a reasoning model such as `gpt-6-astra`. It can refine its searches as it reads results. Use [background mode](https://developers.openai.com/api/docs/guides/background) for a request that might take several minutes.</li><li>&#124; Multi-step research or long-running reporting &#124; `gpt-6-astra` with `high` or `xhigh` reasoning &#124; Use background mode for reports that can take several minutes &#124;</li><li>`return_token_budget` controls how much web search result content the tool can return during a Responses API search run with GPT-5+ reasoning models. Keep the default for most requests. Set it to `unlimited` only for high-effort research or evaluation runs that need to inspect many pages and might otherwise stop at the standard returned-token cap.</li><li>This parameter applies only to the hosted Responses API `web_search` tool with GPT-5+ reasoning web search. It does not change the search context window, and it does not apply to non-reasoning web search, legacy Search API paths, container web search, Chat Completions search models, or `web_search_preview`. Only `default` and `unlimited` are supported values; `null`, numbers, and other strings are rejected.</li><li>reasoning: { effort: "xhigh" },</li><li>"Be analytical, avoid generalities, and ensure that each section supports data-backed reasoning that could inform healthcare policy or financial modeling.",</li><li>reasoning={"effort": "xhigh"},</li><li>Be analytical, avoid generalities, and ensure that each section supports data-backed reasoning that could inform healthcare policy or financial modeling.""",</li><li>Reasoning: shared.ReasoningParam{Effort: shared.ReasoningEffortXhigh},</li><li>import com.openai.models.Reasoning;</li><li>import com.openai.models.ReasoningEffort;</li><li>.reasoning(Reasoning.builder().effort(ReasoningEffort.XHIGH).build())</li><li>reasoning: { effort: :xhigh },</li><li>"reasoning": { "effort": "xhigh" },</li><li>"input": "Research the economic impact of semaglutide on global healthcare systems.\n\nDo:\n- Include specific figures, trends, statistics, and measurable outcomes.\n- Prioritize reliable, up-to-date sources: peer-reviewed research, health organizations (e.g., WHO, CDC), regulatory agencies, or pharmaceutical earnings reports.\n- Include inline citations and return all source metadata.\n\nBe analytical, avoid generalities, and ensure that each section supports data-backed reasoning that could in</li><li>reasoning: { effort: "low" },</li><li>reasoning={"effort": "low"},</li><li>Reasoning: shared.ReasoningParam{Effort: shared.ReasoningEffortLow},</li><li>.reasoning(Reasoning.builder().effort(ReasoningEffort.LOW).build())</li><li>reasoning: { effort: :low },</li><li>"reasoning": { "effort": "low" },</li><li>## Image search results</li><li>Web search can return image results alongside regular text results. Use image search when your application needs current or web-grounded visuals, such as product photos, landmarks, places, events, or visual references.</li><li>To use image search, set `search_content_types` to include `image`. Add `text` when you also want supporting text results that help the model summarize, rank, or explain the retrieved images.</li><li>Use `image_settings` to control image-specific behavior:</li><li>- `max_results`: Request a positive number of image results.</li><li>- `caption`: Ask for short image descriptions when available.</li><li>To inspect raw image results, include `web_search_call.results` in the request and read `web_search_call.results[]` from the response. Image results are returned separately from the assistant message, so parse the `web_search_call` item directly when your application needs the URLs or metadata.</li><li>Search for images</li><li>search_content_types: ["image", "text"],</li><li>image_settings: {</li><li>"Search for recent images and supporting text sources about the Golden Gate Bridge at sunset.",</li><li>"search_content_types": ["image", "text"],</li><li>"image_settings": {</li><li>input="Search for recent images and supporting text sources about the Golden Gate Bridge at sunset.",</li><li>"search_content_types": []string{"image", "text"},</li><li>"image_settings": map[string]any{"max_results": 3, "caption": true},</li><li>Input: responses.ResponseNewParamsInputUnion{OfString: openai.String("Search for recent images and supporting text sources about the Golden Gate Bridge at sunset.")},</li><li>"Search for recent images and supporting text sources about the Golden Gate Bridge at sunset.")</li><li>"search_content_types", JsonValue.from(List.of("image", "text")))</li><li>"image_settings", JsonValue.from(Map.of("max_results", 3, "caption", true)))</li><li>input: "Search for recent images and supporting text sources about the Golden Gate Bridge at sunset.",</li><li>"input": "Search for recent images and supporting text sources about the Golden Gate Bridge at sunset."</li><li>Each `image_result` includes:</li><li>- `image_url`: The canonical image URL for the result.</li><li>- `source_website_url`: The page where the image was found.</li><li>"type": "image_result",</li><li>"image_url": "https://cdn.example/golden-gate-sunset.jpg",</li><li>- [`gpt-5.4`](https://developers.openai.com/api/docs/models/gpt-5.4) with reasoning effort set to `none` may produce lower-quality results.</li></ul></details> |
| excerpt | 新增 | 未记录 | # Web search<br>&gt; For the complete documentation index, see [llms.txt](/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.<br>Web search allows models to access up-to-date information from the internet and provide answers with sourced citations. To enable this, use the web search tool in the Responses API or, in some cases, Chat Completions.<br>Choose a search workflow based on the question you need to answer.<br>- For a quick lookup, ask a model to search for a specific fact and cite its source.<br>- For a question that needs several sources, use a reasoning model such as `gpt-6-astra`. It can refine its searches as it reads results. Use [background mode](https://developers.openai.com/api/docs/guides/background) for a request that might take several minutes.<br>## Choose an integration<br>&#124; Use case &#124; Recommended path &#124; Notes &#124;<br>&#124; --------------------------------------------- &#124; -------------------------------------------------------------------------------------------------------- &#124; ----------------------------------------------------------------------------------------------------------- &#124;<br>&#124; New web search integration &#124; Responses API with `web_search` and `gpt-6-astra` &#124; Supports hosted web search controls such as filters, sources, live-access control, and longer research runs &#124;<br>&#124; Existing Chat Completions search integration &#124; Chat Completions with `gpt-5-search-api` &#124; Use this only when you need to preserve a Chat Completions integration &#124;<br>&#124; Multi-step research or long-running reporting &#124; `gpt-6-astra` with `high` or `xhigh` reasoning &#124; Use background mode for reports that can take several minutes &#124;<br>Using the [Responses API](https://developers.openai.com/api/reference/resources/responses), you can enable web search by configuring it in the `tools` array in an API request to generate content. Like any other tool, the model can choose to search the web or not based on the content of the input prompt.<br>For new Responses API integrations, use `{ "type": "web_search" }`. The earlier `web_search_preview` tool remains available for legacy integrations, but it does not support newer controls such as `filters`, `external_web_access`, and `return_token_budget`.<br>Web search tool example<br>```javascript<br>import OpenAI from "openai";<br>const client = new OpenAI();<br>const response = await client.responses.create({<br>model: "gpt-6-astra",<br>tools: [{ type: "web_search" }],<br>input: "What was a positive news story from today?",<br>});<br>console.log(response.output_text);<br>```<br>```python<br>from openai import OpenAI<br>client = OpenAI()<br>response = client.responses.create(<br>model="gpt-6-astra",<br>tools=[{"type": "web_search"}],<br>input="What was a positive news story from today?",<br>)<br>print(response.output_text)<br>```<br>```go<br>package main<br>import (<br>"context"<br>"fmt"<br>"github.com/openai/openai-go/v3"<br>"github.com/openai/openai-go/v3/responses"<br>)<br>func main() {<br>client := openai.NewClient()<br>response, err := client.Responses.New(context.Background(), responses.ResponseNewParams{<br>Model: "gpt-6-astra",<br>Tools: []responses.ToolUnionParam{<br>responses.ToolParamOfWebSearch(responses.WebSearchToolTypeWebSearch),<br>},<br>Input: responses.ResponseNewParamsInputUnion{OfString: openai.String("What was a positive news story from today?")},<br>})<br>if err != nil {<br>panic(err)<br>}<br>fmt.Println(response.OutputText())<br>}<br>```<br>```java<br>import com.openai.client.OpenAIClient;<br>import com.openai.client.okhttp.OpenAIOkHttpClient;<br>import com.openai.models.responses.ResponseCreateParams;<br>import com.openai.models.responses.WebSearchTool;<br>ResponseCreateParams params =<br>ResponseCreateParams.builder()<br>.model("gpt-6-astra")<br>.input("What was a positive news story from today?")<br>.addTool(WebSearchTool.builder().type(WebSearchTool.Type.WEB_SEARCH).build())<br>.build();<br>client.responses().create(params).output().stream()<br>.flatMap(item -&gt; item.message().stream())<br>.flatMap(message -&gt; message.content().stream())<br>.flatMap(content -&gt; content.outputText().stream())<br>.forEach(text -&gt; System.out.println(text.text()));<br>```<br>```csharp<br>using OpenAI.Responses;<br>#pragma warning disable OPENAI001<br>string key = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;<br>ResponsesClient client = new(key);<br>CreateResponseOptions options = new() { Model = "gpt-6-astra" };<br>options.Tools.Add(ResponseTool.CreateWebSearchTool());<br>options.InputItems.Add(<br>ResponseItem.CreateUserMessageItem("What was a positive news story from today?")<br>);<br>ResponseResult response = await client.CreateResponseAsync(options);<br>Console.WriteLine(response.GetOutputText());<br>```<br>```ruby<br>require "openai"<br>openai = OpenAI::Client.new<br>response = openai.responses.create(<br>model: "gpt-6-astra",<br>tools: [{ type: "web_search" }],<br>input: "What was a positive news story from today?"<br>)<br>puts(response.output_text)<br>```<br>```bash<br>curl "https://api.openai.com/v1/responses" \ |
| extraction | 新增 | 未记录 | html |
| model id mentions | 新增 | 未记录 | • gpt-4o-mini-search-preview<br>• gpt-4o-search-preview<br>• gpt-5<br>• GPT-5<br>• gpt-5-search-api<br>• gpt-5.4<br>• gpt-6-astra<br>• gpt-model-snapshots<br>• o4-mini |
| plan or price mentions | 新增 | 未记录 | • -H "Authorization: Bearer $OPENAI_API_KEY" \<br>• throw new Error(`Research response ended with status ${response.status}`); |
| scope | 新增 | 未记录 | capability |
| source ref | 新增 | 未记录 | openai-web-search |
| structured records | 新增 | 未记录 | 空列表 |
| tables › 记录  › headers | 新增 | 未记录 | • API Availability<br>• Rate limits<br>• Notes |
| tables › 记录  › heading | 新增 | 未记录 | 空字符串 |
| tables › 记录  › rows › 记录 [Responses](https://developers.openai.com/api/reference/resources/responses) [Chat Completions](https://developers.openai.com/api/reference/resources/chat) [Assistants](https://developers.openai.com/api/reference/resources/beta/subresources/assistants) | 新增 | 未记录 | • [Responses](https://developers.openai.com/api/reference/resources/responses) [Chat Completions](https://developers.openai.com/api/reference/resources/chat) [Assistants](https://developers.openai.com/api/reference/resources/beta/subresources/assistants)<br>• Same as tiered rate limits for underlying [model](https://developers.openai.com/api/docs/models) used with the tool.<br>• [Pricing](https://developers.openai.com/api/docs/pricing#built-in-tools) [ZDR and data residency](https://developers.openai.com/api/docs/guides/your-data) |
| tables › 记录 Chat Completions API › headers | 新增 | 未记录 | • Model<br>• Context window<br>• Limitation |
| tables › 记录 Chat Completions API › heading | 新增 | 未记录 | Chat Completions API |
| tables › 记录 Chat Completions API › rows › 记录 `gpt-5-search-api` | 新增 | 未记录 | • `gpt-5-search-api`<br>• 200k<br>• Uses the Chat Completions search model path |
| tables › 记录 Choose an integration › headers | 新增 | 未记录 | • Use case<br>• Recommended path<br>• Notes |
| tables › 记录 Choose an integration › heading | 新增 | 未记录 | Choose an integration |
| tables › 记录 Choose an integration › rows › 记录 Existing Chat Completions search integration | 新增 | 未记录 | • Existing Chat Completions search integration<br>• Chat Completions with `gpt-5-search-api`<br>• Use this only when you need to preserve a Chat Completions integration |
| tables › 记录 Choose an integration › rows › 记录 Multi-step research or long-running reporting | 新增 | 未记录 | • Multi-step research or long-running reporting<br>• `gpt-6-astra` with `high` or `xhigh` reasoning<br>• Use background mode for reports that can take several minutes |
| tables › 记录 Choose an integration › rows › 记录 New web search integration | 新增 | 未记录 | • New web search integration<br>• Responses API with `web_search` and `gpt-6-astra`<br>• Supports hosted web search controls such as filters, sources, live-access control, and longer research runs |
| tables › 记录 Migrating from legacy web search › headers | 新增 | 未记录 | • If you use<br>• Recommended path<br>• Notes |
| tables › 记录 Migrating from legacy web search › heading | 新增 | 未记录 | Migrating from legacy web search |
| tables › 记录 Migrating from legacy web search › rows › 记录 Chat Completions search integrations | 新增 | 未记录 | • Chat Completions search integrations<br>• Use `gpt-5-search-api`, or migrate to Responses `web_search` for more tool controls and optional search<br>• Chat Completions search models always search before responding; Responses search is a tool |
| tables › 记录 Migrating from legacy web search › rows › 记录 `gpt-4o-search-preview` or `gpt-4o-mini-search-preview` | 新增 | 未记录 | • `gpt-4o-search-preview` or `gpt-4o-mini-search-preview`<br>• Migrate to Responses `web_search`, or use `gpt-5-search-api` if you must stay on Chat Completions<br>• The preview search models are deprecated and shut down on 2026-07-23 |
| tables › 记录 Migrating from legacy web search › rows › 记录 `o4-mini` in Responses | 新增 | 未记录 | • `o4-mini` in Responses<br>• Migrate to a supported reasoning model with `web_search`<br>• [The model shut down on October 23, 2026](https://developers.openai.com/api/docs/deprecations#2026-04-22-legacy-gpt-model-snapshots) |
| tables › 记录 Migrating from legacy web search › rows › 记录 `web_search_preview` in Responses | 新增 | 未记录 | • `web_search_preview` in Responses<br>• Migrate to `web_search`<br>• `web_search` supports newer controls such as `filters`, `external_web_access`, and `return_token_budget` |
| tables › 记录 Run longer web research › headers | 新增 | 未记录 | • Value<br>• Behavior |
| tables › 记录 Run longer web research › heading | 新增 | 未记录 | Run longer web research |
| tables › 记录 Run longer web research › rows › 记录 `default` | 新增 | 未记录 | • `default`<br>• Uses the standard returned-token budget for web search results. This is the same behavior as omitting `return_token_budget`. |
| tables › 记录 Run longer web research › rows › 记录 `unlimited` | 新增 | 未记录 | • `unlimited`<br>• Removes the default returned-token budget for the web search run. |
| title | 新增 | 未记录 | 明确未知 |

### Provider / openai

#### 档案

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| profile › aliases › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 适配器来源登记将 Provider 标识为 OpenAI API。 |
| profile › aliases › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| profile › aliases | 新增 | 未记录 | • OpenAI API |
| profile › docs › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI API 官方模型文档。 |
| profile › docs › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| profile › docs › overview | 新增 | 未记录 | https://developers.openai.com/api/docs/models |
| profile › 类别（kind） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该官方 API 目录由 OpenAI 发布。 |
| profile › 类别（kind） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| profile › 类别（kind） | 新增 | 未记录 | first_party |
| profile › 名称（name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 来源为 OpenAI 官方 API 模型目录。 |
| profile › 名称（name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| profile › 名称（name） | 新增 | 未记录 | OpenAI |

### 待核对项目

#### 项目 / coverage-gap-02

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | account_scoped |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| evidence › 记录 openai-models › assertion | 新增 | 未记录 | account_scoped |
| evidence › 记录 openai-models › source ref | 新增 | 未记录 | openai-models |
| ID（id） | 新增 | 未记录 | coverage-gap-02 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 账号可用模型清单：官方接口说明表明清单按凭证/账号返回；本采集器不使用凭证调用。 |

#### 项目 / coverage-gap-03

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-list-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-models-list-api › source ref | 新增 | 未记录 | openai-models-list-api |
| evidence › 记录 openai-responses-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-responses-api › source ref | 新增 | 未记录 | openai-responses-api |
| ID（id） | 新增 | 未记录 | coverage-gap-03 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | API Host、Route 与 Method：API 文档快照与通用端点线索已保留；尚未规范映射到 Provider/Service/Route，也不从通用协议推断逐模型支持。 |

#### 项目 / coverage-gap-04

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-audio-api › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-audio-api › source ref | 新增 | 未记录 | openai-audio-api |
| evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| ID（id） | 新增 | 未记录 | coverage-gap-04 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | Provider/Service 独立能力：能力文档片段已保留；尚未映射到独立 Service 或明确关联的 Offering。 |

#### 项目 / coverage-gap-05

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| ID（id） | 新增 | 未记录 | coverage-gap-05 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型价格与计量条件：价格来源的表格和原始金额线索已保留；币种、计量单位、阈值、折扣及模型适用范围尚未映射成 PriceRule。 |

#### 项目 / coverage-gap-06

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| evidence › 记录 openai-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-models › source ref | 新增 | 未记录 | openai-models |
| ID（id） | 新增 | 未记录 | coverage-gap-06 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型上下文与最大输出：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-07

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| evidence › 记录 openai-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-models › source ref | 新增 | 未记录 | openai-models |
| ID（id） | 新增 | 未记录 | coverage-gap-07 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型输入/输出模态与限制：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-08

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| evidence › 记录 openai-models › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-models › source ref | 新增 | 未记录 | openai-models |
| ID（id） | 新增 | 未记录 | coverage-gap-08 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 逐模型发布日期与生命周期：通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。 |

#### 项目 / coverage-gap-09

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | not_structured |
| evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| ID（id） | 新增 | 未记录 | coverage-gap-09 |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 计划价格与资格条件：计划来源虽已登记，具体价格、周期、市场/账号资格及模型权益仍需按来源逐项核验；候选不推断其覆盖范围。 |

#### 项目 / openai-chatgpt-plan-row-unparsed-api-key

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐名称来自动态 PricingCard；需核对价格与周期字段。 |
| evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | openai-chatgpt-plan-row-unparsed-api-key |
| 类别（kind） | 新增 | 未记录 | unparsed_fact |
| message | 新增 | 未记录 | 官方定价页列出新套餐“API Key”，但无法从卡片字段确认计费周期或销售方式；暂未生成套餐价格记录。 |
| subject ref | 新增 | 未记录 | global/chatgpt-api-key |

#### 项目 / openai-chatgpt-plan-scope-limited

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 页面明确标注 Codex pricing plans，并将 ChatGPT 功能描述为方案权益的一部分。 |
| evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | openai-chatgpt-plan-scope-limited |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | Learn 定价页说明的是 ChatGPT 与 Codex 方案权益，不承诺覆盖 ChatGPT 全部订阅目录；未出现在此页的已有套餐应保留并人工核对。 |

#### 项目 / openai-deprecated-chatgpt-image-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-chatgpt-image-latest |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/chatgpt-image-latest |

#### 项目 / openai-deprecated-gpt-4.1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4.1-mini |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4.1-mini |

#### 项目 / openai-deprecated-gpt-4.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4.1 |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4.1 |

#### 项目 / openai-deprecated-gpt-4o-mini-transcribe

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4o-mini-transcribe |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4o-mini-transcribe |

#### 项目 / openai-deprecated-gpt-4o-mini-tts

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4o-mini-tts |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4o-mini-tts |

#### 项目 / openai-deprecated-gpt-4o-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4o-mini |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4o-mini |

#### 项目 / openai-deprecated-gpt-4o-transcribe-diarize

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4o-transcribe-diarize |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4o-transcribe-diarize |

#### 项目 / openai-deprecated-gpt-4o-transcribe

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4o-transcribe |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4o-transcribe |

#### 项目 / openai-deprecated-gpt-4o

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-4o |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-4o |

#### 项目 / openai-deprecated-gpt-5-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-5-mini |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-5-mini |

#### 项目 / openai-deprecated-gpt-5-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-5-nano |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-5-nano |

#### 项目 / openai-deprecated-gpt-5-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-5-pro |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-5-pro |

#### 项目 / openai-deprecated-gpt-5.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-5.1 |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-5.1 |

#### 项目 / openai-deprecated-gpt-5.3-codex

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-5.3-codex |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-5.3-codex |

#### 项目 / openai-deprecated-gpt-5.4-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-5.4-nano |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-5.4-nano |

#### 项目 / openai-deprecated-gpt-5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-5 |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-5 |

#### 项目 / openai-deprecated-gpt-audio-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-audio-mini |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-audio-mini |

#### 项目 / openai-deprecated-gpt-audio

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-audio |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-audio |

#### 项目 / openai-deprecated-gpt-daybreak-blue-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-daybreak-blue-latest |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-daybreak-blue-latest |

#### 项目 / openai-deprecated-gpt-daybreak-red-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-daybreak-red-latest |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-daybreak-red-latest |

#### 项目 / openai-deprecated-gpt-image-1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-image-1-mini |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-image-1-mini |

#### 项目 / openai-deprecated-gpt-image-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-image-1.5 |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-image-1.5 |

#### 项目 / openai-deprecated-gpt-realtime-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-realtime-mini |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-realtime-mini |

#### 项目 / openai-deprecated-gpt-realtime

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-gpt-realtime |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/gpt-realtime |

#### 项目 / openai-deprecated-o3-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-o3-pro |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/o3-pro |

#### 项目 / openai-deprecated-o3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-o3 |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/o3 |

#### 项目 / openai-deprecated-tts-1-hd

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-tts-1-hd |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/tts-1-hd |

#### 项目 / openai-deprecated-tts-1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-tts-1 |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/tts-1 |

#### 项目 / openai-deprecated-whisper-1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | Deprecated |
| evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | openai-deprecated-whisper-1 |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。 |
| subject ref | 新增 | 未记录 | global/whisper-1 |

### 市场 / global

#### Capability / code-interpreter

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | OpenAI Responses API 提供 Code Interpreter。 |
| ID（id） › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| ID（id） | 新增 | 未记录 | code-interpreter |
| 类别（kind） › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | Code Interpreter 是 Responses API 内置工具。 |
| 类别（kind） › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| 类别（kind） | 新增 | 未记录 | code_execution |
| links › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | 链接指向官方 Code Interpreter 文档。 |
| links › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| links › documentation | 新增 | 未记录 | https://developers.openai.com/api/docs/guides/tools-code-interpreter |

#### Capability / code-interpreter › Operation / code-interpreter

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | 官方 Code Interpreter 文档展示 Responses input、容器文件输入及代码执行结果。 |
| ID（id） › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| ID（id） | 新增 | 未记录 | code-interpreter |
| 输入（input） › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | 官方请求示例通过 Responses input 提交提示词。 |
| 输入（input） › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | 官方 Code Interpreter 文档展示 Responses input、容器文件输入及代码执行结果。 |
| 类别（kind） › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| 类别（kind） | 新增 | 未记录 | code_execution |
| 输出（output） › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | 官方文档展示 code_interpreter_call、响应文本及生成文件的 container/file 引用。 |
| 输出（output） › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • output[].type=code_interpreter_call<br>• output[].container_id<br>• output[].code<br>• output[].outputs[]<br>• output[].status<br>• output_text<br>• container_file_citation.container_id<br>• container_file_citation.file_id<br>• container_file_citation.filename |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 openai-code-interpreter › assertion | 新增 | 未记录 | Parameter names and enumerated values are extracted from the captured official API guide. |
| 参数（parameters） › evidence › 记录 openai-code-interpreter › source ref | 新增 | 未记录 | openai-code-interpreter |
| 参数（parameters） › 记录 tools[].container.file_ids[] › 名称（name） | 新增 | 未记录 | tools[].container.file_ids[] |
| 参数（parameters） › 记录 tools[].container.file_ids[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].container.file_ids[] › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].container.file_ids |
| 参数（parameters） › 记录 tools[].container.file_ids[] › 类型（type） | 新增 | 未记录 | array |
| 参数（parameters） › 记录 tools[].container.memory_limit › 默认值（default） | 新增 | 未记录 | 1g |
| 参数（parameters） › 记录 tools[].container.memory_limit › 可选值（enum） | 新增 | 未记录 | • 4g<br>• 1g<br>• 16g<br>• 64g |
| 参数（parameters） › 记录 tools[].container.memory_limit › 名称（name） | 新增 | 未记录 | tools[].container.memory_limit |
| 参数（parameters） › 记录 tools[].container.memory_limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].container.memory_limit › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].container.memory_limit |
| 参数（parameters） › 记录 tools[].container.memory_limit › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].container.type › 可选值（enum） | 新增 | 未记录 | • auto |
| 参数（parameters） › 记录 tools[].container.type › 名称（name） | 新增 | 未记录 | tools[].container.type |
| 参数（parameters） › 记录 tools[].container.type › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].container.type › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].container.type |
| 参数（parameters） › 记录 tools[].container.type › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • code_interpreter |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • body.tools[].type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| routes | 新增 | 未记录 | 空列表 |

#### Capability / file_search-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | OpenAI 官方 file_search 指南展示 Responses API 工具输入、参数和输出。 |
| ID（id） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| ID（id） | 新增 | 未记录 | file_search-responses |
| 类别（kind） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | OpenAI 官方 file_search 指南展示 Responses API 工具输入、参数和输出。 |
| 类别（kind） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| 类别（kind） | 新增 | 未记录 | file_search |
| links › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 链接指向 OpenAI 官方工具指南。 |
| links › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| links › documentation | 新增 | 未记录 | https://developers.openai.com/api/docs/guides/tools-file-search |

#### Capability / file_search-responses › Operation / file_search-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | OpenAI 官方 file_search 指南展示 Responses API 工具输入、参数和输出。 |
| ID（id） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| ID（id） | 新增 | 未记录 | file_search-responses |
| 输入（input） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 输入字段从官方 Responses 请求示例映射。 |
| 输入（input） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | OpenAI 官方 file_search 指南展示 Responses API 工具输入、参数和输出。 |
| 类别（kind） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| 类别（kind） | 新增 | 未记录 | file_search |
| 输出（output） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 输出字段从官方工具调用与 Responses 返回示例映射。 |
| 输出（output） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • output[].type=file_search_call<br>• output[].id<br>• output[].status<br>• output[].queries[]<br>• output[].search_results[]<br>• output[].type=message<br>• output[].content[].type=output_text<br>• output[].content[].text<br>• output[].content[].annotations[].type=file_citation<br>• output[].content[].annotations[].file_id<br>• output[].content[].annotations[].filename<br>• output[].content[].annotations[].index |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 工具参数和值域从本轮捕获的官方指南中映射；未在来源中出现的字段不生成。 |
| 参数（parameters） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| 参数（parameters） › 记录 include[] › 可选值（enum） | 新增 | 未记录 | • file_search_call.results |
| 参数（parameters） › 记录 include[] › 名称（name） | 新增 | 未记录 | include[] |
| 参数（parameters） › 记录 include[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include[] › 参数路径（route_mappings） | 新增 | 未记录 | • /include/* |
| 参数（parameters） › 记录 include[] › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].filters › 名称（name） | 新增 | 未记录 | tools[].filters |
| 参数（parameters） › 记录 tools[].filters › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].filters › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/filters |
| 参数（parameters） › 记录 tools[].filters › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 tools[].max_num_results › 名称（name） | 新增 | 未记录 | tools[].max_num_results |
| 参数（parameters） › 记录 tools[].max_num_results › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].max_num_results › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/max_num_results |
| 参数（parameters） › 记录 tools[].max_num_results › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • file_search |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 名称（name） | 新增 | 未记录 | tools[].vector_store_ids[] |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/vector_store_ids/* |
| 参数（parameters） › 记录 tools[].vector_store_ids[] › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 responses › callability › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 官方文档示例证明已记录调用方式，不代表本项目执行过实时 API 调用。 |
| routes › 记录 responses › callability › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| routes › 记录 responses › documentation › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | Route 文档链接指向对应官方工具指南。 |
| routes › 记录 responses › documentation › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › documentation | 新增 | 未记录 | https://developers.openai.com/api/docs/guides/tools-file-search |
| routes › 记录 responses › endpoint ref › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 工具通过 OpenAI API Responses 端点调用。 |
| routes › 记录 responses › endpoint ref › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › endpoint ref | 新增 | 未记录 | openai-api |
| routes › 记录 responses › ID（id） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 官方工具示例调用 Responses API。 |
| routes › 记录 responses › ID（id） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| routes › 记录 responses › HTTP 方法（method） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | Responses API 工具调用使用 POST。 |
| routes › 记录 responses › HTTP 方法（method） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 responses › operation kind › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | Responses 工具类型为 file_search。 |
| routes › 记录 responses › operation kind › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › operation kind | 新增 | 未记录 | file_search |
| routes › 记录 responses › API 路径（path_template） › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 官方示例使用 POST /v1/responses。 |
| routes › 记录 responses › API 路径（path_template） › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| routes › 记录 responses › protocol › evidence › 记录 openai-file-search › assertion | 新增 | 未记录 | 官方工具指南使用 Responses API。 |
| routes › 记录 responses › protocol › evidence › 记录 openai-file-search › source ref | 新增 | 未记录 | openai-file-search |
| routes › 记录 responses › protocol | 新增 | 未记录 | responses |

#### Capability / image_generation-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | OpenAI 官方 image_generation 指南展示 Responses API 工具输入、参数和输出。 |
| ID（id） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| ID（id） | 新增 | 未记录 | image_generation-responses |
| 类别（kind） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | OpenAI 官方 image_generation 指南展示 Responses API 工具输入、参数和输出。 |
| 类别（kind） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| 类别（kind） | 新增 | 未记录 | image_generation |
| links › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 链接指向 OpenAI 官方工具指南。 |
| links › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| links › documentation | 新增 | 未记录 | https://developers.openai.com/api/docs/guides/image-generation?generate-images-api=responses |

#### Capability / image_generation-responses › Operation / image_generation-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | OpenAI 官方 image_generation 指南展示 Responses API 工具输入、参数和输出。 |
| ID（id） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| ID（id） | 新增 | 未记录 | image_generation-responses |
| 输入（input） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 输入字段从官方 Responses 请求示例映射。 |
| 输入（input） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| 输入（input） › 记录 image › 类别（kind） | 新增 | 未记录 | image |
| 输入（input） › 记录 image › 名称（name） | 新增 | 未记录 | image |
| 输入（input） › 记录 image › 是否必填（required） | 新增 | 未记录 | 否 |
| 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | OpenAI 官方 image_generation 指南展示 Responses API 工具输入、参数和输出。 |
| 类别（kind） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| 类别（kind） | 新增 | 未记录 | image_generation |
| 输出（output） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 输出字段从官方工具调用与 Responses 返回示例映射。 |
| 输出（output） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • output[].type=image_generation_call<br>• output[].id<br>• output[].status<br>• output[].result<br>• output[].revised_prompt |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 工具参数和值域从本轮捕获的官方指南中映射；未在来源中出现的字段不生成。 |
| 参数（parameters） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| 参数（parameters） › 记录 tools[].action › 可选值（enum） | 新增 | 未记录 | • auto<br>• generate<br>• edit |
| 参数（parameters） › 记录 tools[].action › 名称（name） | 新增 | 未记录 | tools[].action |
| 参数（parameters） › 记录 tools[].action › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].action › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/action |
| 参数（parameters） › 记录 tools[].action › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].background › 可选值（enum） | 新增 | 未记录 | • auto<br>• transparent<br>• opaque |
| 参数（parameters） › 记录 tools[].background › 名称（name） | 新增 | 未记录 | tools[].background |
| 参数（parameters） › 记录 tools[].background › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].background › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/background |
| 参数（parameters） › 记录 tools[].background › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].model › 名称（name） | 新增 | 未记录 | tools[].model |
| 参数（parameters） › 记录 tools[].model › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].model › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/model |
| 参数（parameters） › 记录 tools[].model › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].output_compression › 最大值（max） | 新增 | 未记录 | 100 |
| 参数（parameters） › 记录 tools[].output_compression › 最小值（min） | 新增 | 未记录 | 0 |
| 参数（parameters） › 记录 tools[].output_compression › 名称（name） | 新增 | 未记录 | tools[].output_compression |
| 参数（parameters） › 记录 tools[].output_compression › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].output_compression › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/output_compression |
| 参数（parameters） › 记录 tools[].output_compression › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 tools[].output_format › 可选值（enum） | 新增 | 未记录 | • png<br>• webp<br>• jpeg |
| 参数（parameters） › 记录 tools[].output_format › 名称（name） | 新增 | 未记录 | tools[].output_format |
| 参数（parameters） › 记录 tools[].output_format › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].output_format › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/output_format |
| 参数（parameters） › 记录 tools[].output_format › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].partial_images › 最大值（max） | 新增 | 未记录 | 3 |
| 参数（parameters） › 记录 tools[].partial_images › 最小值（min） | 新增 | 未记录 | 0 |
| 参数（parameters） › 记录 tools[].partial_images › 名称（name） | 新增 | 未记录 | tools[].partial_images |
| 参数（parameters） › 记录 tools[].partial_images › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].partial_images › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/partial_images |
| 参数（parameters） › 记录 tools[].partial_images › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 tools[].quality › 可选值（enum） | 新增 | 未记录 | • auto<br>• low<br>• medium<br>• high<br>• xhigh<br>• max |
| 参数（parameters） › 记录 tools[].quality › 名称（name） | 新增 | 未记录 | tools[].quality |
| 参数（parameters） › 记录 tools[].quality › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].quality › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/quality |
| 参数（parameters） › 记录 tools[].quality › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].size › 名称（name） | 新增 | 未记录 | tools[].size |
| 参数（parameters） › 记录 tools[].size › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].size › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/size |
| 参数（parameters） › 记录 tools[].size › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • image_generation |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 responses › callability › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 官方文档示例证明已记录调用方式，不代表本项目执行过实时 API 调用。 |
| routes › 记录 responses › callability › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| routes › 记录 responses › documentation › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | Route 文档链接指向对应官方工具指南。 |
| routes › 记录 responses › documentation › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › documentation | 新增 | 未记录 | https://developers.openai.com/api/docs/guides/image-generation?generate-images-api=responses |
| routes › 记录 responses › endpoint ref › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 工具通过 OpenAI API Responses 端点调用。 |
| routes › 记录 responses › endpoint ref › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › endpoint ref | 新增 | 未记录 | openai-api |
| routes › 记录 responses › ID（id） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 官方工具示例调用 Responses API。 |
| routes › 记录 responses › ID（id） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| routes › 记录 responses › HTTP 方法（method） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | Responses API 工具调用使用 POST。 |
| routes › 记录 responses › HTTP 方法（method） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 responses › operation kind › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | Responses 工具类型为 image_generation。 |
| routes › 记录 responses › operation kind › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › operation kind | 新增 | 未记录 | image_generation |
| routes › 记录 responses › API 路径（path_template） › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 官方示例使用 POST /v1/responses。 |
| routes › 记录 responses › API 路径（path_template） › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| routes › 记录 responses › protocol › evidence › 记录 openai-image-generation › assertion | 新增 | 未记录 | 官方工具指南使用 Responses API。 |
| routes › 记录 responses › protocol › evidence › 记录 openai-image-generation › source ref | 新增 | 未记录 | openai-image-generation |
| routes › 记录 responses › protocol | 新增 | 未记录 | responses |

#### Capability / web_search-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | OpenAI 官方 web_search 指南展示 Responses API 工具输入、参数和输出。 |
| ID（id） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| ID（id） | 新增 | 未记录 | web_search-responses |
| 类别（kind） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | OpenAI 官方 web_search 指南展示 Responses API 工具输入、参数和输出。 |
| 类别（kind） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| 类别（kind） | 新增 | 未记录 | web_search |
| links › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 链接指向 OpenAI 官方工具指南。 |
| links › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| links › documentation | 新增 | 未记录 | https://developers.openai.com/api/docs/guides/tools-web-search?api-mode=responses |

#### Capability / web_search-responses › Operation / web_search-responses

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | OpenAI 官方 web_search 指南展示 Responses API 工具输入、参数和输出。 |
| ID（id） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| ID（id） | 新增 | 未记录 | web_search-responses |
| 输入（input） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 输入字段从官方 Responses 请求示例映射。 |
| 输入（input） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | OpenAI 官方 web_search 指南展示 Responses API 工具输入、参数和输出。 |
| 类别（kind） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| 类别（kind） | 新增 | 未记录 | web_search |
| 输出（output） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 输出字段从官方工具调用与 Responses 返回示例映射。 |
| 输出（output） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>output[].type=web_search_call</li><li>output[].id</li><li>output[].status</li><li>output[].action.type</li><li>output[].action.query</li><li>output[].action.sources[]</li><li>output[].results[]</li><li>output[].type=message</li><li>output[].content[].type=output_text</li><li>output[].content[].text</li><li>output[].content[].annotations[].type=url_citation</li><li>output[].content[].annotations[].url</li><li>output[].content[].annotations[].title</li><li>output[].content[].annotations[].start_index</li><li>output[].content[].annotations[].end_index</li></ul></details> |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 工具参数和值域从本轮捕获的官方指南中映射；未在来源中出现的字段不生成。 |
| 参数（parameters） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| 参数（parameters） › 记录 include[] › 可选值（enum） | 新增 | 未记录 | • web_search_call.action.sources<br>• web_search_call.results |
| 参数（parameters） › 记录 include[] › 名称（name） | 新增 | 未记录 | include[] |
| 参数（parameters） › 记录 include[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include[] › 参数路径（route_mappings） | 新增 | 未记录 | • /include/* |
| 参数（parameters） › 记录 include[] › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].external_web_access › 名称（name） | 新增 | 未记录 | tools[].external_web_access |
| 参数（parameters） › 记录 tools[].external_web_access › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].external_web_access › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/external_web_access |
| 参数（parameters） › 记录 tools[].external_web_access › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 名称（name） | 新增 | 未记录 | tools[].filters.allowed_domains[] |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/filters/allowed_domains/* |
| 参数（parameters） › 记录 tools[].filters.allowed_domains[] › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].filters.blocked_domains[] › 名称（name） | 新增 | 未记录 | tools[].filters.blocked_domains[] |
| 参数（parameters） › 记录 tools[].filters.blocked_domains[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].filters.blocked_domains[] › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/filters/blocked_domains/* |
| 参数（parameters） › 记录 tools[].filters.blocked_domains[] › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].filters › 名称（name） | 新增 | 未记录 | tools[].filters |
| 参数（parameters） › 记录 tools[].filters › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].filters › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/filters |
| 参数（parameters） › 记录 tools[].filters › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 tools[].image_settings.caption › 名称（name） | 新增 | 未记录 | tools[].image_settings.caption |
| 参数（parameters） › 记录 tools[].image_settings.caption › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].image_settings.caption › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/image_settings/caption |
| 参数（parameters） › 记录 tools[].image_settings.caption › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 tools[].image_settings.max_results › 名称（name） | 新增 | 未记录 | tools[].image_settings.max_results |
| 参数（parameters） › 记录 tools[].image_settings.max_results › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].image_settings.max_results › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/image_settings/max_results |
| 参数（parameters） › 记录 tools[].image_settings.max_results › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 tools[].image_settings › 名称（name） | 新增 | 未记录 | tools[].image_settings |
| 参数（parameters） › 记录 tools[].image_settings › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].image_settings › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/image_settings |
| 参数（parameters） › 记录 tools[].image_settings › 类型（type） | 新增 | 未记录 | object |
| 参数（parameters） › 记录 tools[].search_content_types[] › 可选值（enum） | 新增 | 未记录 | • text<br>• image |
| 参数（parameters） › 记录 tools[].search_content_types[] › 名称（name） | 新增 | 未记录 | tools[].search_content_types[] |
| 参数（parameters） › 记录 tools[].search_content_types[] › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].search_content_types[] › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/search_content_types/* |
| 参数（parameters） › 记录 tools[].search_content_types[] › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].search_context_size › 可选值（enum） | 新增 | 未记录 | • low<br>• medium<br>• high |
| 参数（parameters） › 记录 tools[].search_context_size › 名称（name） | 新增 | 未记录 | tools[].search_context_size |
| 参数（parameters） › 记录 tools[].search_context_size › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].search_context_size › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/search_context_size |
| 参数（parameters） › 记录 tools[].search_context_size › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 新增 | 未记录 | • web_search |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 新增 | 未记录 | tools[].type |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/type |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 tools[].user_location › 名称（name） | 新增 | 未记录 | tools[].user_location |
| 参数（parameters） › 记录 tools[].user_location › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 tools[].user_location › 参数路径（route_mappings） | 新增 | 未记录 | • /tools/*/user_location |
| 参数（parameters） › 记录 tools[].user_location › 类型（type） | 新增 | 未记录 | object |
| routes › 记录 responses › callability › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 官方文档示例证明已记录调用方式，不代表本项目执行过实时 API 调用。 |
| routes › 记录 responses › callability › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › callability | 新增 | 未记录 | documented_only |
| routes › 记录 responses › documentation › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | Route 文档链接指向对应官方工具指南。 |
| routes › 记录 responses › documentation › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › documentation | 新增 | 未记录 | https://developers.openai.com/api/docs/guides/tools-web-search?api-mode=responses |
| routes › 记录 responses › endpoint ref › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 工具通过 OpenAI API Responses 端点调用。 |
| routes › 记录 responses › endpoint ref › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › endpoint ref | 新增 | 未记录 | openai-api |
| routes › 记录 responses › ID（id） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 官方工具示例调用 Responses API。 |
| routes › 记录 responses › ID（id） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › ID（id） | 新增 | 未记录 | responses |
| routes › 记录 responses › HTTP 方法（method） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | Responses API 工具调用使用 POST。 |
| routes › 记录 responses › HTTP 方法（method） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 responses › operation kind › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | Responses 工具类型为 web_search。 |
| routes › 记录 responses › operation kind › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › operation kind | 新增 | 未记录 | web_search |
| routes › 记录 responses › API 路径（path_template） › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 官方示例使用 POST /v1/responses。 |
| routes › 记录 responses › API 路径（path_template） › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › API 路径（path_template） | 新增 | 未记录 | /responses |
| routes › 记录 responses › protocol › evidence › 记录 openai-web-search › assertion | 新增 | 未记录 | 官方工具指南使用 Responses API。 |
| routes › 记录 responses › protocol › evidence › 记录 openai-web-search › source ref | 新增 | 未记录 | openai-web-search |
| routes › 记录 responses › protocol | 新增 | 未记录 | responses |

#### API endpoint / openai-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 openai-models-list-api › assertion | 新增 | 未记录 | OpenAI API 使用全球 Host。 |
| api region › evidence › 记录 openai-models-list-api › source ref | 新增 | 未记录 | openai-models-list-api |
| api region | 新增 | 未记录 | 全球 |
| API 地址（base_url） › evidence › 记录 openai-models-list-api › assertion | 新增 | 未记录 | 官方 Models API 示例的 Host 去除资源路径后为 API Base URL。 |
| API 地址（base_url） › evidence › 记录 openai-models-list-api › source ref | 新增 | 未记录 | openai-models-list-api |
| API 地址（base_url） | 新增 | 未记录 | https://api.openai.com/v1 |
| documentation › evidence › 记录 openai-models-list-api › assertion | 新增 | 未记录 | 来源为 OpenAI Models API 官方参考。 |
| documentation › evidence › 记录 openai-models-list-api › source ref | 新增 | 未记录 | openai-models-list-api |
| documentation | 新增 | 未记录 | https://developers.openai.com/api/reference/resources/models/methods/list |
| ID（id） › evidence › 记录 openai-models-list-api › assertion | 新增 | 未记录 | OpenAI Models API 参考用于确认 API Host。 |
| ID（id） › evidence › 记录 openai-models-list-api › source ref | 新增 | 未记录 | openai-models-list-api |
| ID（id） | 新增 | 未记录 | openai-api |

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI API 当前采集范围为全球账号市场。 |
| ID（id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| ID（id） | 新增 | 未记录 | global |
| 名称（name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 适配器按来源登记的 global 市场建立 Service。 |
| 名称（name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 名称（name） | 新增 | 未记录 | 国际市场 |

#### Model / babbage-002

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | babbage-002 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | babbage-002 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / chat-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | Chat Latest |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | chat-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / chatgpt-4o-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | ChatGPT-4o |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | chatgpt-4o-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / chatgpt-image-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | chatgpt-image-latest |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 chatgpt-image-latest › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 chatgpt-image-latest › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:15 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:16 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:11 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:12 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:15 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:15 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:16 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:16 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:11 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:11 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 16.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:12 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 chatgpt-image-latest 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:12 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 chatgpt-image-latest › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.63 |
| prices › 记录 chatgpt-image-latest › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 chatgpt-image-latest › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 chatgpt-image-latest › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | chatgpt-image-latest |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | chatgpt-image-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / codex-mini-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | codex-mini-latest |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | codex-mini-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / computer-use-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | computer-use-preview |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | computer-use-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / davinci-002

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | davinci-002 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | davinci-002 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-3.5-turbo

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-3.5 Turbo |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-3.5-turbo |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4-turbo-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4 Turbo Preview |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4-turbo-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4-turbo

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4 Turbo |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4-turbo |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4.1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4.1 Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-4.1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:11 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:11 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:7 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:11 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:11 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 1.60 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:11 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:11 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:7 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:7 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.70 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 2.80 |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.175 |
| prices › 记录 gpt-4.1-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-4.1-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4.1-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4.1-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-4.1-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4.1 nano |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4.1-nano |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4.1 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-4.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:10 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Batch token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:10 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:6 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:10 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:10 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Batch token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:10 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Batch token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:10 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:6 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4.1 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:6 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 3.50 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 14.00 |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.875 |
| prices › 记录 gpt-4.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-4.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4.1 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4.1 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4.1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-4.5-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4.5 Preview |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4.5-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4o-audio-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Audio |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-audio-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4o-mini-audio-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Mini Audio |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini-audio-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4o-mini-realtime-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Mini Realtime |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini-realtime-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4o-mini-search-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Mini Search Preview |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini-search-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4o-mini-transcribe

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Mini Transcribe |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini-transcribe |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-4o-mini-tts

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Mini TTS |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-4o-mini-tts › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini-tts › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini-tts 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:25 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini-tts 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:26 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini-tts 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:25 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini-tts 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:25 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 12.00 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini-tts 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:26 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini-tts 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:26 |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini-tts › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-4o-mini-tts › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-4o-mini-tts › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini-tts › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini-tts |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini-tts |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-4o-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-4o-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:13 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:13 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:9 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:13 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:13 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.15 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.075 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:13 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:13 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.075 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.30 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:9 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:9 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-4o-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-4o-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-4o-realtime-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Realtime |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-realtime-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4o-search-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Search Preview |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-search-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-4o-transcribe-diarize

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Transcribe Diarize |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-transcribe-diarize |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-4o-transcribe

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o Transcribe |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o-transcribe |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-4o

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-4o |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-4o › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:12 |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Batch token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:12 |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:8 |
| prices › 记录 gpt-4o › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:12 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:12 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Batch token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:12 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Batch token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:12 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:8 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-4o 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:8 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 4.25 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 17.00 |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-4o › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 2.125 |
| prices › 记录 gpt-4o › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-4o › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-4o › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-4o |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-5-chat-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5 Chat |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-chat-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5-codex

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5-Codex |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-codex |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5 Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:7 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:7 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Flex token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:6 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:5 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:7 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:7 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.025 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:7 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:7 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0125 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Flex token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:6 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Flex token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:6 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0125 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:5 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:5 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 0.45 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 3.60 |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-mini › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.045 |
| prices › 记录 gpt-5-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-5-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5 nano |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5-nano › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-nano › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:8 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Batch token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:8 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Flex token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:7 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:8 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:8 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.005 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Batch token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:8 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Batch token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:8 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.025 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0025 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Flex token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:7 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-nano 列出 Flex token 价格。 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:7 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.025 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-nano › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0025 |
| prices › 记录 gpt-5-nano › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5-nano › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-nano › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-nano |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-nano |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-5-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5 Pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:9 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:9 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:9 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:9 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 120.00 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:9 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:9 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 60.00 |
| prices › 记录 gpt-5-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5-pro |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-5.1-chat-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.1 Chat |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.1-chat-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5.1-codex-max

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.1-Codex-Max |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.1-codex-max |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5.1-codex-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.1-Codex Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.1-codex-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5.1-codex

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.1-Codex |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.1-codex |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.1 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.1 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:5 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Batch token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:5 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Flex token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:4 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:3 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:5 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:5 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Batch token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:5 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Batch token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:5 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0625 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Flex token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:4 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Flex token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:4 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0625 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:3 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.1 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:3 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.1 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.1 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.1 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-5.2-chat-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.2 Chat |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.2-chat-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5.2-codex

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.2-Codex |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.2-codex |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5.2-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.2 Pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.2-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:4 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:4 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:4 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:4 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 21.00 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 168.00 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:4 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:4 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 10.50 |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 84.00 |
| prices › 记录 gpt-5.2-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.2-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.2-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.2-pro |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.2 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Batch token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Flex token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:2 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.75 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 14.00 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.175 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Batch token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Batch token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.875 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 7.00 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0875 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Flex token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Flex token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:3 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.875 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 7.00 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0875 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:2 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.2 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:2 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 3.50 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 28.00 |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.2 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.35 |
| prices › 记录 gpt-5.2 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.2 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.2 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.2 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.2 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.3-chat-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.3 Chat |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.3-chat-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-5.3-codex

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.3-Codex |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.3-codex |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-5.4-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.4 Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.4-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.75 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 4.50 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.075 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.375 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 2.25 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0375 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.375 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 2.25 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0375 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-mini 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:1 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 1.50 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 9.00 |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-mini › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.15 |
| prices › 记录 gpt-5.4-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.4-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.4-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.4 nano |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.4-nano › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-nano › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-nano 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:2 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-nano › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 gpt-5.4-nano › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.4-nano › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-nano › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4-nano |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4-nano |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-5.4-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.4 Pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.4-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 180.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 60.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 270.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 90.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 135.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4-pro 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:12 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 90.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4-pro › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 135.00 |
| prices › 记录 gpt-5.4-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.4-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4-pro |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.4

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.4 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.4 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:10 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 22.50 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Batch token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.13 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 11.25 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Flex token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:11 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.13 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 11.25 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:10 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.4 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:10 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.4 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.4 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.4 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.4 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.4 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.5-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.5 Pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.5-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Flex token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 180.00 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 60.00 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 270.00 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Batch token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 90.00 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Flex token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5-pro 列出 Flex token 价格。 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:10 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5-pro › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 90.00 |
| prices › 记录 gpt-5.5-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.5-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.5-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.5-pro |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.5 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Batch token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Flex token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 45.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Batch token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Batch token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 22.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Flex token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Flex token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 22.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.5 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:9 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 12.50 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 75.00 |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.5 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.5 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.5 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.6-cyber

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.6 Cyber |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.6-cyber › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-cyber › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-cyber 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-cyber 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-cyber 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] | 新增 | 未记录 | 31.25 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] | 新增 | 未记录 | 15.625 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 12.50 |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 75.00 |
| prices › 记录 gpt-5.6-cyber › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.6-cyber › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-cyber › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-cyber |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-cyber |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.6-luna

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.6 Luna |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.6-luna › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-luna › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 1.20 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 1.80 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 0.04 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 0.90 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 0.90 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-luna 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:8 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 2.40 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.04 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 3.60 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 0.08 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-5.6-luna › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.6-luna › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-luna › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-luna |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-luna |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.6-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.6 Sol |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.6-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-sol › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:10/row:1 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:6 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 40.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 16.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 60.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 1.60 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 40.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:10/row:1 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:10/row:1 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.6-sol › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.6-sol › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-sol › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-sol |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-sol |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5.6-terra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5.6 Terra |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5.6-terra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-terra › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 12.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 18.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Batch token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 6.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 9.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Flex token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 6.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 9.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5.6-terra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:7 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 24.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 36.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5.6-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5.6-terra › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5.6-terra › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5.6-terra › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-terra |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5.6-terra |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-5 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:6 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Batch token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:6 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Flex token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:5 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:4 |
| prices › 记录 gpt-5 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:6 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:6 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Batch token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:6 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Batch token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:6 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0625 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Flex token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:5 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Flex token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:5 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.0625 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:4 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-5 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:4 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-5 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-5 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-6-astra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-6 Astra |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-6-astra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-astra › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Batch token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Flex token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Ultrafast pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #ultrafast-pricing-data/table:9/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 50.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 12.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 75.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 50.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Batch token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Batch token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 6.25 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 12.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 37.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 12.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Flex token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Flex token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 6.25 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 12.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 37.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 12.50 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 100.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 50.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 40.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 150.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 50.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 100.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | ultrafast |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Ultrafast pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #ultrafast-pricing-data/table:9/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-astra 列出 Ultrafast pricing data token 价格。 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #ultrafast-pricing-data/table:9/row:1 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 60.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 300.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 6.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 | 新增 | 未记录 | 75.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 | 新增 | 未记录 | 150.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 | 新增 | 未记录 | 120.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 | 新增 | 未记录 | 450.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 | 新增 | 未记录 | 12.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 | 新增 | 未记录 | 150.00 |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-astra › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 | 新增 | 未记录 | 300.00 |
| prices › 记录 gpt-6-astra › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-6-astra › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-astra › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-astra |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-astra |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-6-luna

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-6 Luna |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-6-luna › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-luna › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Batch token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Flex token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 0.75 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Batch token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Batch token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.005 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 0.0625 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 0.375 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Flex token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Flex token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.005 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 0.0625 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 0.375 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 0.01 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 0.125 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-luna 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:4 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 1.50 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 0.04 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-luna › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6-luna › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-6-luna › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-luna › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-luna |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-luna |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-6-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-6 Sol |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-6-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-sol › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:5 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-6-sol › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-6-sol › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-sol › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-sol |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-sol |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-6.1-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-6.1 Sol |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-6.1-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-sol › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 5 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Ultrafast pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 5 项 › locator | 新增 | 未记录 | #ultrafast-pricing-data/table:9/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › evidence › 第 5 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Batch token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Flex token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | ultrafast |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Ultrafast pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #ultrafast-pricing-data/table:9/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-sol 列出 Ultrafast pricing data token 价格。 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #ultrafast-pricing-data/table:9/row:2 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 1 项 | 新增 | 未记录 | 12.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 2 项 | 新增 | 未记录 | 60.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 3 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 4 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 5 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 6 项 | 新增 | 未记录 | 24.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 7 项 | 新增 | 未记录 | 90.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 8 项 | 新增 | 未记录 | 1.20 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 9 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-sol › 价格信息（pricing） › 第 5 项 › rates › 第 10 项 | 新增 | 未记录 | 60.00 |
| prices › 记录 gpt-6.1-sol › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-6.1-sol › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-sol › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6.1-sol |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6.1-sol |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-6.1-terra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-6.1 Terra |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-6.1-terra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-terra › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Batch token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:3/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Flex token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:5/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:1/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 6 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 7 项 | 新增 | 未记录 | 7.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 8 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 9 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 1 项 › rates › 第 10 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Batch token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Batch token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:3/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.025 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 4 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 5 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 6 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 7 项 | 新增 | 未记录 | 3.75 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 8 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 9 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 2 项 › rates › 第 10 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Flex token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Flex token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:5/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.025 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 4 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 5 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 6 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 7 项 | 新增 | 未记录 | 3.75 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 8 项 | 新增 | 未记录 | 0.05 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 9 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 3 项 › rates › 第 10 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6.1-terra 列出 Fast pricing data token 价格。 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:7/row:3 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 4 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 5 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 6 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 7 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 8 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 9 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 上下文长度（context） | 新增 | 未记录 | long |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6.1-terra › 价格信息（pricing） › 第 4 项 › rates › 第 10 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-6.1-terra › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-6.1-terra › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6.1-terra › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6.1-terra |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6.1-terra |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-audio-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Audio-1.5 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-audio-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-1.5 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:19 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:20 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:19 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:19 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 64.00 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:20 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:20 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-audio-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-audio-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-1.5 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-audio-1.5 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-audio-1.5 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-audio-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Audio Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-audio-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:21 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:22 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:21 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:21 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:22 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:22 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 2.40 |
| prices › 记录 gpt-audio-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-audio-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-audio-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-audio-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-audio

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Audio |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-audio › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:23 |
| prices › 记录 gpt-audio › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:24 |
| prices › 记录 gpt-audio › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:23 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:23 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 64.00 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:24 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-audio 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:24 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-audio › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-audio › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-audio › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-audio › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-audio |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-audio |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-daybreak-blue-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | Daybreak Blue |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-daybreak-blue-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-daybreak-red-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | Daybreak Red |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-daybreak-red-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-image-1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-1 Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-image-1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:13 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:14 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:9 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:10 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:13 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:13 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:14 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:14 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.20 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:9 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:9 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.13 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:10 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:10 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1-mini › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.10 |
| prices › 记录 gpt-image-1-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-image-1-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-1-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-1-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-image-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-1.5 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-image-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1.5 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:11 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:12 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:7 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:8 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:11 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:11 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:12 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:12 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:7 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:7 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 16.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:8 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:8 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-1.5 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.63 |
| prices › 记录 gpt-image-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-image-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-1.5 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-1.5 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-1.5 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-image-1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-1 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / gpt-image-2.5-flare

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-2.5 Flare |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-image-2.5-flare › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-flare › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:7 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:8 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:5 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:6 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:7 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:7 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:8 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:8 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:5 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:5 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:6 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:6 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-flare › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-image-2.5-flare › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-image-2.5-flare › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-flare › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.5-flare |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.5-flare |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-image-2.5-sunburst

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-2.5 Sunburst |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-image-2.5-sunburst › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-sunburst › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:5 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:6 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:3 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:4 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:5 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:5 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:6 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:6 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:3 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:3 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:4 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.5-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:4 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.5-sunburst › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-image-2.5-sunburst › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-image-2.5-sunburst › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.5-sunburst › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.5-sunburst |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.5-sunburst |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-image-2.6-flare

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-2.6 Flare |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-image-2.6-flare › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-flare › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:3 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:4 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:3 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:3 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:4 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-flare 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:4 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-flare › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-image-2.6-flare › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-image-2.6-flare › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-flare › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.6-flare |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.6-flare |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-image-2.6-sunburst

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-2.6 Sunburst |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-image-2.6-sunburst › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-sunburst › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:1 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:2 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:1 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:1 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:2 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2.6-sunburst 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:2 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2.6-sunburst › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-image-2.6-sunburst › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-image-2.6-sunburst › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2.6-sunburst › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.6-sunburst |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2.6-sunburst |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-image-2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Image-2 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-image-2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:9 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:10 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:1 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:2 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:9 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:9 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 30.00 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:10 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:14/row:10 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 1.25 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:1 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:1 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_image |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 15.00 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:2 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-image-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:15/row:2 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 2.50 |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-image-2 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 0.625 |
| prices › 记录 gpt-image-2 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-image-2 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-image-2 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-image-2 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-live-1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Live 1 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-live-1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-live-transcribe

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Live-Transcribe |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-live-transcribe |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-oss-120b

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | gpt-oss-120b |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-oss-120b |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-oss-20b

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | gpt-oss-20b |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-oss-20b |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime-1.5 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-realtime-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-1.5 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:10 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:11 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:12 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:10 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:10 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 64.00 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_audio |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:11 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:11 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 16.00 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:12 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-1.5 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:12 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-1.5 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-realtime-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-realtime-1.5 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-1.5 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-1.5 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-1.5 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime-2.1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime-2.1 Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-realtime-2.1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:4 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:5 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:6 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:4 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:4 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_audio |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.30 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:5 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:5 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 2.40 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.06 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:6 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:6 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.08 |
| prices › 记录 gpt-realtime-2.1-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-realtime-2.1-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-2.1-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-2.1-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime-2.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime-2.1 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-realtime-2.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:1 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:2 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:3 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:1 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:1 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 64.00 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_audio |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:2 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:2 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 24.00 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:3 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2.1 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:3 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2.1 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-realtime-2.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-realtime-2.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2.1 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-2.1 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-2.1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime-2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime-2 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-realtime-2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:7 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:8 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:9 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:7 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:7 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 64.00 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_audio |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:8 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:8 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 24.00 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:9 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-2 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:9 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-2 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-realtime-2 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-realtime-2 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-2 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-2 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-2 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime Mini |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-realtime-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-mini › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:13 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:14 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:15 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:13 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:13 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_audio |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.30 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:14 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:14 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.60 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 2.40 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.06 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:15 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime-mini 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:15 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 0.80 |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime-mini › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.08 |
| prices › 记录 gpt-realtime-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-realtime-mini › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime-mini › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-mini |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-realtime-translate

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime-Translate |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-translate |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime-whisper

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime-Whisper |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime-whisper |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Realtime |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-realtime › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:16 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:17 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:18 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:16 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:16 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_audio |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 32.00 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output_audio |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 64.00 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_audio |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:17 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:17 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 16.00 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 0.40 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:18 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-realtime 列出 Grouped Pricing Table data token 价格。 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #grouped-pricing-table-data/table:13/row:18 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 5.00 |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read_image |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-realtime › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 gpt-realtime › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-realtime › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-realtime › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-realtime |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / gpt-transcribe

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Transcribe |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-transcribe |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / o1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o1-mini |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o1-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / o1-preview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o1 Preview |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o1-preview |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / o1-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o1-pro |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o1-pro |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / o1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o1 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / o3-deep-research

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o3-deep-research |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o3-deep-research |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / o3-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o3-mini |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o3-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / o3-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o3-pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 o3-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3-pro › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:14 |
| prices › 记录 o3-pro › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3-pro 列出 Batch token 价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:14 |
| prices › 记录 o3-pro › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:14 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3-pro 列出 Standard pricing data token 价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:14 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 20.00 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 80.00 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3-pro 列出 Batch token 价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:14 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3-pro 列出 Batch token 价格。 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:14 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 10.00 |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 40.00 |
| prices › 记录 o3-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 o3-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o3-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o3-pro |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / o3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o3 |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 o3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Standard pricing data token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:15 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Batch token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | #batch/table:4/row:15 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 3 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Flex token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 3 项 › locator | 新增 | 未记录 | #flex/table:6/row:8 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 3 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 4 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Fast pricing data token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 4 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:10 |
| prices › 记录 o3 › 价格信息（pricing） › evidence › 第 4 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | standard |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Standard pricing data token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:15 |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Standard pricing data token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #standard-pricing-data/table:2/row:15 |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 2.00 |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 8.00 |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.50 |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | batch |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Batch token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:15 |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Batch token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #batch/table:4/row:15 |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | flex |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Flex token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:8 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Flex token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #flex/table:6/row:8 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 1 项 | 新增 | 未记录 | 1.00 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 2 项 | 新增 | 未记录 | 4.00 |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 3 项 › rates › 第 3 项 | 新增 | 未记录 | 0.25 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | service_tier |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | fast |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | #pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Fast pricing data token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:10 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | OpenAI 官方定价表为 o3 列出 Fast pricing data token 价格。 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | #fast-pricing-data/table:8/row:10 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 1 项 | 新增 | 未记录 | 3.50 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 2 项 | 新增 | 未记录 | 14.00 |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 o3 › 价格信息（pricing） › 第 4 项 › rates › 第 3 项 | 新增 | 未记录 | 0.875 |
| prices › 记录 o3 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 o3 › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 o3 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o3 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o3 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / o4-mini-deep-research

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o4-mini-deep-research |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o4-mini-deep-research |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / o4-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | o4-mini |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | o4-mini |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / omni-moderation-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | omni-moderation |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | omni-moderation-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / text-embedding-3-large

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | text-embedding-3-large |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | text-embedding-3-large |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / text-embedding-3-small

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | text-embedding-3-small |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | text-embedding-3-small |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / text-embedding-ada-002

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | text-embedding-ada-002 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | text-embedding-ada-002 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / text-moderation-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | text-moderation |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | text-moderation-latest |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / text-moderation-stable

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | text-moderation-stable |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | text-moderation-stable |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Shut down。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_historical |

#### Model / tts-1-hd

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | TTS-1 HD |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | tts-1-hd |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / tts-1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | TTS-1 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | tts-1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Model / whisper-1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | Whisper |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | whisper-1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | unknown |

#### Plan / chatgpt-business-standard

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方列出 Business 每席位月付价与年付每月单价；年费按每月价格乘 12。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 第 1 项 › billing period | 新增 | 未记录 | month |
| billing options › 第 1 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 25 |
| billing options › 第 1 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| billing options › 第 2 项 › billing period | 新增 | 未记录 | year |
| billing options › 第 2 项 › subscription fee › 金额（amount） | 新增 | 未记录 | 240 |
| billing options › 第 2 项 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Business 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-business-standard |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Business。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Business |

#### Plan / chatgpt-enterprise

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方列出 Enterprise &amp; Edu 并引导联系销售，未公开固定价格。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | custom |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Enterprise &amp; Edu 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-enterprise |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Enterprise &amp; Edu。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Enterprise &amp; Edu |

#### Plan / chatgpt-free

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方将 Free 列为免费套餐。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 0 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Free 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-free |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Free。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Free |

#### Plan / chatgpt-go

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方定价页列出 Go 的美元月费。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 8 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Go 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-go |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Go。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Go |

#### Plan / chatgpt-plus

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方定价页列出 Plus 的美元月费。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 20 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Plus 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-plus |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Plus。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Plus |

#### Plan / chatgpt-pro-100

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方定价页列出 Pro $100 美元月费。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 100 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Pro 100 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-pro-100 |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Pro 100。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Pro 100 |

#### Plan / chatgpt-pro-200

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方定价页列出 Pro $200 美元月费。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 200 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Pro 200 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-pro-200 |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Pro 200。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Pro 200 |

#### Plan / chatgpt-pro-500

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| billing options › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方定价页列出 Pro $500 美元月费。 |
| billing options › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| billing options › 记录 0 › billing period | 新增 | 未记录 | month |
| billing options › 记录 0 › subscription fee › 金额（amount） | 新增 | 未记录 | 500 |
| billing options › 记录 0 › subscription fee › 币种（currency） | 新增 | 未记录 | USD |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | OpenAI ChatGPT 定价页列出 Pro 500 套餐。 |
| ID（id） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| ID（id） | 新增 | 未记录 | chatgpt-pro-500 |
| links › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 套餐详情链接指向 OpenAI 官方定价页。 |
| links › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| links › official | 新增 | 未记录 | https://learn.chatgpt.com/docs/pricing?site_locale=en |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › assertion | 新增 | 未记录 | 官方套餐名称为 Pro 500。 |
| 名称（name） › evidence › 记录 openai-chatgpt-pricing › source ref | 新增 | 未记录 | openai-chatgpt-pricing |
| 名称（name） | 新增 | 未记录 | Pro 500 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `openai-models` · OpenAI API 模型指南（含产品范围说明） | https://developers.openai.com/api/docs/models.md | 2026-11-05T08:15:44.252Z | 200 | `sha256:f22d31baeda4a5876c300f7c3e60206202a6ce53ab8a37affdbe3c809cb8dce5` |
| global | `openai-models-all` · OpenAI 通用完整模型目录与状态标签 | https://developers.openai.com/api/docs/models/all | 2026-11-05T08:15:44.303Z | 200 | `sha256:eaa5697e66e6151362755934e8fb8381fb567f482e09a5a7e1ed9e3724858ca5` |
| global | `openai-pricing` · OpenAI API 模型与功能定价 | https://developers.openai.com/api/docs/pricing.md | 2026-11-05T04:13:48.701Z | 200 | `sha256:1f9a509962f12837f19a252394b480a8d20e40e2e67103a18662a6f31922b7c5` |
| global | `openai-models-list-api` · OpenAI Models API 清单端点说明（调用需账号 API Key） | https://developers.openai.com/api/reference/resources/models/methods/list | 2026-11-05T04:13:48.742Z | 200 | `sha256:ba65a9a1ae1f860f8a6e518b818787c7bc40e605523ef02f462965da86c5e698` |
| global | `openai-responses-api` · OpenAI Responses API 通用端点文档 | https://developers.openai.com/api/docs/guides/text | 2026-11-05T04:13:48.818Z | 200 | `sha256:05dc04c0cec1b95dc20f27748c7ecd9f3e2b9e3418cf5b3a4f329ef16aa550d7` |
| global | `openai-web-search` · OpenAI Responses API Web Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-web-search.md?api-mode=responses | 2026-11-05T04:13:48.776Z | 200 | `sha256:70fed9d622dbfc7a9671ecba9fa4b87141abd15d6ea4f8b5b1a2c0f7262ab6f0` |
| global | `openai-file-search` · OpenAI Responses API File Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-file-search.md | 2026-11-05T04:13:48.903Z | 200 | `sha256:10570ded7ae3dfcf104e95e6def3b45648b74ad2442b8c9b25856c20d5047dda` |
| global | `openai-code-interpreter` · OpenAI Responses API Code Interpreter 输入与输出 | https://developers.openai.com/api/docs/guides/tools-code-interpreter | 2026-11-05T04:13:48.868Z | 200 | `sha256:7cc917e3870d5c990a7e720e560fcd9fa91eb7687da67f388859ae89c8194851` |
| global | `openai-image-generation` · OpenAI Responses API Image Generation 工具文档 | https://developers.openai.com/api/docs/guides/image-generation.md?generate-images-api=responses | 2026-11-05T04:13:48.946Z | 200 | `sha256:dd60b94e4db52451363c77ed462e3b64cda95893849473fc1711235a0e65da78` |
| global | `openai-audio-api` · OpenAI Audio API 通用能力与端点文档 | https://developers.openai.com/api/docs/guides/audio | 2026-11-05T04:13:48.936Z | 200 | `sha256:306f3d9fb7bab2d692a1ee37d261e531e9ddbd4f5030890921b5080d60b5af30` |
| global | `openai-chatgpt-pricing` · OpenAI ChatGPT 与 Codex 套餐定价 | https://learn.chatgpt.com/docs/pricing.md?site_locale=en | 2026-11-05T08:15:44.768Z | 200 | `sha256:a0c502cccae440c42e790e4fec0a3733d670328dce9eb2d3904d1bce647cb246` |

## openai 专属证据与核对说明

### OpenAI 官方通用资料采集候选

- 来源快照：11 份
- 文档观察：11 份；模型 ID 提及：277 条
- 已生成 Offering：104 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- GET /v1/models 返回认证账号可见范围，不调用需 Key 的真实接口。
- 公开模型文档混有 API、ChatGPT、预览/弃用与推荐模型范围；候选只记录文档 ID 提及，不能用它充当可调用全集。
- 模型目录和价格按精确 Provider 模型 ID 记录；规范模型规格由维护者手工维护。
