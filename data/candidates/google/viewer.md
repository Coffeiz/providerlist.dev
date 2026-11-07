# google 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `google` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-07T03:43:15.727Z |
| 前一候选指纹 | `sha256:5df01a739c762090aeaeb1b485fdeeabbf52e4a5c6c0f3a92ea3d7e3ba2e0749` |
| 本次候选指纹 | `sha256:4fb242975980bc87fc1c9b3301d7284e84fd1a403340ba75bce1ca418b803949` |
| 来源快照 | 17 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 14 项，更新 31 项，缺席待核实 130 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 google-generate-content-api › record count | 更新 | 4 | 2 |
| 记录 google-google-maps › note | 更新 | 官方文档结构未匹配预期，缺少字段标记：enable_widget；不生成不完整 Capability。 | 官方文档结构未匹配预期，缺少字段标记：enable_widget, place_citation；不生成不完整 Capability。 |
| 记录 google-google-search › note | 更新 | 已按官方能力文档与 GenerateContent API Schema 映射 web_search 已披露的输入、输出和参数。 | 官方文档结构未匹配预期，缺少字段标记：google_search_call, google_search_result, url_citation, search_suggestions；不生成不完整 Capability。 |
| 记录 google-google-search › record count | 更新 | 1 | 0 |
| 记录 google-google-search › 状态（status） | 更新 | complete | not_parsed |
| 记录 google-url-context › note | 更新 | 已按官方能力文档与 GenerateContent API Schema 映射 web_fetch 已披露的输入、输出和参数。 | 官方文档结构未匹配预期，缺少字段标记：url_citation, url_context_result, start_index, end_index；不生成不完整 Capability。 |
| 记录 google-url-context › record count | 更新 | 1 | 0 |
| 记录 google-url-context › 状态（status） | 更新 | complete | not_parsed |

### 文档观察

#### 来源 / google-api-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）："model": "gemini-flash-latest", | 差异片段（新增；相同内容已省略）："model": "gemini-3.8-flash", |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：gemini-flash-latest | 差异项（新增；相同内容已省略）：gemini-3.8-flash |

#### 来源 / google-batch-api-schema

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：Optional. The source text to be edited or rewritten via voice instructions. When provided in `SMART` mode, the model evaluates the audio input against this text and emits the complete replacement text in the candidate response rather than appending to it. |

#### 来源 / google-files-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：![](https://www.gstatic.com/cloud-cms/def39b91d11c6d080f235056ad4d90ee.png)In this diagram, the dotted line from *Documents* to *Embedding model* | 差异项（新增；相同内容已省略）：![The indexing and querying process of File Search](https://www.gstatic.com/cloud-cms/def39b91d11c6d080f235056ad4d90ee.png)In this diagram, the dotted line from *Documents* to *Embedding model* |

#### 来源 / google-generate-content-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：- `END_SENSITIVITY_LOW`: Automatic detection ends speech less often. | 差异项（新增；相同内容已省略）：Optional. The source text to be edited or rewritten via voice instructions. When provided in `SMART` mode, the model evaluates the audio input against this text and emits the complete replacement text in the candidate response rather than appending to it. |

#### 来源 / google-google-maps

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：# Specifies the API revision to avoid breaking changes when they become default<br>-H "Api-Revision: 2026-05-20" \ | 差异项（新增；相同内容已省略）：This structured data is essential for verifying claims and building a rich<br>These images show the minimum requirements for displaying the sources and Google<br>* A [Google Maps favicon](https://www.google.com/images/branding/product/ico/web_maps_icon_32dp.ico)<br>* A photo from the source URL (`og:image`). |
| excerpt | 更新 | 差异片段（删除 59 项）<details><summary>展开完整差异</summary><ul><li># This will only work for SDK newer than 2.0.0</li><li>interaction = client.interactions.create(</li><li>model="gemini-3.8-flash",</li><li>input="What are the best Italian restaurants within a 15-minute walk from here?",</li><li>tools=[{</li><li>"type": "google_maps",</li><li>"latitude": 34.050481,</li><li>"longitude": -118.248526</li><li>}]</li><li># Print the model's text response and annotations</li><li>for step in interaction.steps:</li><li>if step.type == "model_output":</li><li>for content_block in step.content:</li><li>if content_block.type == "text":</li><li>print(content_block.text)</li><li>if content_block.annotations:</li><li>print("\nSources:")</li><li>for annotation in content_block.annotations:</li><li>if annotation.type == "place_citation":</li><li>print(f" - {annotation.name}: {annotation.url}")</li><li>// This will only work for SDK newer than 2.0.0</li><li>async function main() {</li><li>const interaction = await ai.interactions.create({</li><li>input: "What are the best Italian restaurants within a 15-minute walk from here?",</li><li>tools: [{</li><li>type: "google_maps",</li><li>longitude: -118.248526</li><li>}]</li><li>// Print the model's text response and annotations</li><li>for (const step of interaction.steps) {</li><li>if (step.type === 'model_output') {</li><li>for (const contentBlock of step.content &#124;&#124; []) {</li><li>if (contentBlock.type === 'text') {</li><li>console.log(contentBlock.text);</li><li>if (contentBlock.annotations) {</li><li>console.log("\nSources:");</li><li>for (const annotation of contentBlock.annotations) {</li><li>if (annotation.type === 'place_citation') {</li><li>console.log(` - {annotation.name}: {annotation.url}`);</li><li>}</li><li>}</li><li>}</li><li>}</li><li>await main();</li><li>{% tab label="Java" %}</li><li>```java</li><li>import com.google.genai.Client;</li><li>import com.google.genai.gaos.models.interactions.Annotation;</li><li>import com.google.genai.gaos.models.interactions.Content;</li><li>import com.google.genai.gaos.models.interactions.CreateModelInteraction;</li><li>import com.google.genai.gaos.models.interactions.GoogleMaps;</li><li>import com.google.genai.gaos.models.interactions.Interaction;</li><li>import com.google.genai.gaos.models.interactions.InteractionsInput;</li><li>import com.google.genai.gaos.models.interactions.Model;</li><li>import com.google.genai.gaos.models.interactions.ModelOutputStep;</li><li>import com.google.genai.gaos.models.interactions.PlaceCitation;</li><li>import com.google.genai.gaos.models.interactions.Step;</li><li>import com.google.genai.gaos.models.interactions.TextContent;</li><li>import com.google.genai.gaos.models.operations.CreateInteractionRequestBody;</li></ul></details> | 差异片段（新增 59 项）<details><summary>展开完整差异</summary><ul><li>from google.genai import types</li><li>prompt = "What are the best Italian restaurants within a 15-minute walk from here?"</li><li>response = client.models.generate_content(</li><li>model='gemini-3.8-flash',</li><li>contents=prompt,</li><li>config=types.GenerateContentConfig(</li><li># Turn on grounding with Google Maps</li><li>tools=[types.Tool(google_maps=types.GoogleMaps())],</li><li># Optionally provide the relevant location context (this is in Los Angeles)</li><li>tool_config=types.ToolConfig(retrieval_config=types.RetrievalConfig(</li><li>lat_lng=types.LatLng(</li><li>latitude=34.050481, longitude=-118.248526))),</li><li>),</li><li>print("Generated Response:")</li><li>print(response.text)</li><li>if grounding := response.candidates[0].grounding_metadata:</li><li>if grounding.grounding_chunks:</li><li>print('-' * 40)</li><li>print("Sources:")</li><li>for chunk in grounding.grounding_chunks:</li><li>print(f'- [{chunk.maps.title}]({chunk.maps.uri})')</li><li>async function generateContentWithMapsGrounding() {</li><li>const response = await ai.models.generateContent({</li><li>contents: "What are the best Italian restaurants within a 15-minute walk from here?",</li><li>config: {</li><li>// Turn on grounding with Google Maps</li><li>tools: [{ googleMaps: {} }],</li><li>toolConfig: {</li><li>retrievalConfig: {</li><li>// Optionally provide the relevant location context (this is in Los Angeles)</li><li>latLng: {</li><li>longitude: -118.248526,</li><li>},</li><li>},</li><li>},</li><li>},</li><li>console.log("Generated Response:");</li><li>console.log(response.text);</li><li>const grounding = response.candidates[0]?.groundingMetadata;</li><li>if (grounding?.groundingChunks) {</li><li>console.log("-".repeat(40));</li><li>console.log("Sources:");</li><li>for (const chunk of grounding.groundingChunks) {</li><li>if (chunk.maps) {</li><li>console.log(`- [${chunk.maps.title}](${chunk.maps.uri})`);</li><li>generateContentWithMapsGrounding();</li><li>{% tab label="REST" %}</li><li>```shell</li><li>curl -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent' \</li><li>-H 'Content-Type: application/json' \</li><li>-H "x-goog-api-key: ${GEMINI_API_KEY}" \</li><li>-d '{</li><li>"contents": [{</li><li>"role": "user",</li><li>"parts": [{</li><li>"text": "What are the best Italian restaurants within a 15-minute walk from here?"</li><li>}]</li><li>}],</li><li>"tools": [{"googleMaps": {}}],</li></ul></details> |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：-H "x-goog-api-key: $GEMINI_API_KEY" \<br>console.log(` - ${annotation.name}: ${annotation.url}`);<br>prompt = "Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner."<br>input: "Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner.",<br>"Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner.";<br>prompt := "Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner."<br>"input": "Plan a day in San Francisco for me. I want to see the Golden Gate Bridge, visit a museum, and have a nice dinner.", | 差异项（新增；相同内容已省略）：console.log(`- [${chunk.maps.title}](${chunk.maps.uri})`);<br>-H "x-goog-api-key: ${GEMINI_API_KEY}" \<br>* A [Google Maps favicon](https://www.google.com/images/branding/product/ico/web_maps_icon_32dp.ico) |

#### 来源 / google-google-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：-H "Api-Revision: 2026-05-20" \ | 差异项（新增；相同内容已省略）：`groundingMetadata` field. This structured data is essential for verifying<br>debugging and understanding the model's reasoning process.<br>The API returns structured citation data, giving you complete control over how |
| excerpt | 更新 | 差异片段（删除 64 项）<details><summary>展开完整差异</summary><ul><li>interaction = client.interactions.create(</li><li>input="Who won the euro 2024?",</li><li>tools=[{"type": "google_search"}]</li><li>print(interaction.output_text)</li><li>const client = new GoogleGenAI({});</li><li>const interaction = await client.interactions.create({</li><li>input: "Who won the euro 2024?",</li><li>tools: [{ type: "google_search" }]</li><li>console.log(interaction.output_text);</li><li>```</li><li>{% /tab %}</li><li>{% tab label="Java" %}</li><li>```java</li><li>import com.google.genai.Client;</li><li>import com.google.genai.gaos.models.interactions.CreateModelInteraction;</li><li>import com.google.genai.gaos.models.interactions.GoogleSearch;</li><li>import com.google.genai.gaos.models.interactions.Interaction;</li><li>import com.google.genai.gaos.models.interactions.InteractionsInput;</li><li>import com.google.genai.gaos.models.interactions.Model;</li><li>import com.google.genai.gaos.models.operations.CreateInteractionRequestBody;</li><li>import java.util.Arrays;</li><li>Client client = new Client();</li><li>CreateModelInteraction params =</li><li>CreateModelInteraction.builder()</li><li>.model(Model.of("gemini-3.8-flash"))</li><li>.input(InteractionsInput.of("Who won the euro 2024?"))</li><li>.tools(Arrays.asList(GoogleSearch.builder().build()))</li><li>.build();</li><li>Interaction interaction =</li><li>client.interactions.create(CreateInteractionRequestBody.of(params)).interaction().get();</li><li>System.out.println(interaction.outputText().orElse(""));</li><li>{% tab label="Go" %}</li><li>```go</li><li>package main</li><li>import (</li><li>"context"</li><li>"fmt"</li><li>"log"</li><li>"google.golang.org/genai"</li><li>"google.golang.org/genai/interactions/models/interactions"</li><li>"google.golang.org/genai/interactions/models/operations"</li><li>)</li><li>func main() {</li><li>ctx := context.Background()</li><li>client, err := genai.NewClient(ctx, nil)</li><li>if err != nil {</li><li>log.Fatal(err)</li><li>}</li><li>resp, err := client.Interactions.Create(ctx, operations.CreateInteractionRequest{</li><li>Body: operations.NewCreateInteractionRequestBody(</li><li>interactions.CreateModelInteraction{</li><li>Model: interactions.Model("gemini-3.8-flash"),</li><li>Input: interactions.NewInteractionsInput("Who won the euro 2024?"),</li><li>Tools: []interactions.Tool{</li><li>interactions.NewTool(interactions.GoogleSearch{}),</li><li>},</li><li>},</li><li>),</li><li>})</li><li>if err != nil {</li><li>log.Fatal(err)</li><li>fmt.Println(resp.Interaction.GetOutputText())</li><li>{% tab label="REST" %}</li><li>```shell</li></ul></details> | 差异片段（新增 64 项）<details><summary>展开完整差异</summary><ul><li>from google.genai import types</li><li>grounding_tool = types.Tool(</li><li>google_search=types.GoogleSearch()</li><li>)</li><li>config = types.GenerateContentConfig(</li><li>tools=[grounding_tool]</li><li>)</li><li>response = client.models.generate_content(</li><li>contents="Who won the euro 2024?",</li><li>config=config,</li><li>print(response.text)</li><li>const ai = new GoogleGenAI({});</li><li>const groundingTool = {</li><li>googleSearch: {},</li><li>};</li><li>const config = {</li><li>tools: [groundingTool],</li><li>};</li><li>const response = await ai.models.generateContent({</li><li>contents: "Who won the euro 2024?",</li><li>config,</li><li>console.log(response.text);</li><li>{% tab label="REST" %}</li><li>```shell</li><li>curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent" \</li><li>-H "x-goog-api-key: $GEMINI_API_KEY" \</li><li>-H "Content-Type: application/json" \</li><li>-X POST \</li><li>-d '{</li><li>"contents": [</li><li>{</li><li>"parts": [</li><li>{"text": "Who won the euro 2024?"}</li><li>]</li><li>],</li><li>"tools": [</li><li>{</li><li>"google_search": {}</li><li>]</li><li>}'</li><li>{% /tabs %}</li><li>You can learn more by trying the [Search tool</li><li>notebook](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Search_Grounding.ipynb).</li><li>## How grounding with Google Search works {% id="how-grounding-with-google-search-works" %}</li><li>When you enable the `google_search` tool, the model handles the entire workflow</li><li>of searching, processing, and citing information automatically.</li><li>![](https://www.gstatic.com/cloud-cms/0c893db002557e538dbe4c9afe8f5abf.png)</li><li>1. **User Prompt:** Your application sends a user's prompt to the Gemini API</li><li>with the `google_search` tool enabled.</li><li>2. **Prompt Analysis:** The model analyzes the prompt and determines if a</li><li>Google Search can improve the answer.</li><li>3. **Google Search:** If needed, the model automatically generates one or</li><li>multiple search queries and executes them.</li><li>4. **Search Results Processing:** The model processes the search results,</li><li>synthesizes the information, and formulates a response.</li><li>5. **Grounded Response:** The API returns a final, user-friendly response that</li><li>is grounded in the search results. This response includes the model's text</li><li>answer and `groundingMetadata` with the search queries, web results, and</li><li>citations.</li><li>## Understanding the grounding response {% id="understanding-the-grounding-response" %}</li><li>When a response is successfully grounded, the response includes a</li><li>`groundingMetadata` field. This structured data is essential for verifying</li><li>claims and building a rich citation experience in your application.</li><li>```json</li></ul></details> |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：console.log(` [${annotation.title}](${annotation.url})`);<br>console.log(` Cited text: "${citedText}"`); | 差异项（新增；相同内容已省略）：return `[${i + 1}](${uri})`; |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 Gemini 3.1 Flash-Lite | 新增 | 未记录 | • Gemini 3.1 Flash-Lite<br>• ✔️ |
| tables › 记录 Supported models  {% id="supported-models" %} › rows › 记录 Gemini 3.1 Flash-Lite Preview | 新增 | 未记录 | • Gemini 3.1 Flash-Lite Preview<br>• ✔️ |

#### 来源 / google-live-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：* Optional. The source text to be edited or rewritten via voice instructions. When provided in `SMART` mode, the model evaluates the audio input against this text and emits the complete replacement text in the candidate response rather than appending to it. |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：* `bool`<br>* Optional. If enabled (the default), detected voice and text input count as activity. If disabled, the client must send activity signals.<br>---<br>* `startOfSpeechSensitivity` | 差异片段（新增；相同内容已省略）：* `sourceText`<br>* `string`<br>* Optional. The source text to be edited or rewritten via voice instructions. When provided in `SMART` mode, the model evaluates the audio input against this text and emits the complete replacement text in the candidate response rather than appending to it.<br>--- |

#### 来源 / google-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-omni-1.2-flash |

#### 来源 / google-openai-compatibility

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：to avoid service interruptions. Video generation with `gemini-omni-1.1-flash` is | 差异项（新增；相同内容已省略）：to avoid service interruptions. Video generation with `gemini-omni-1.2-flash` is |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：gemini-omni-1.1-flash | 差异项（新增；相同内容已省略）：gemini-omni-1.2-flash |

#### 来源 / google-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：Our next-generation video generation and editing model, now generally available<br>* $1.50 (text / image / video / audio)<br>* $10.80 (audio) through December 31, 2026.<br>$21.60 (audio) starting January 1, 2027.<br>Equivalent to $0.0027 per 10s audio{% sup /%} through December 31, 2026. | 差异项（新增；相同内容已省略）：Our next-generation video generation and editing model supporting up to 15<br>seconds of video generation and editing with native audio, now generally<br>* $1.50 (text / image / video)<br>$12.00 (video){% sup %}*{% /sup %}<br>Previous generation video generation and editing model. Effective December 3, |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gemini-omni-1.2-flash |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：* $1.50 (text / image / video / audio)<br>Equivalent to $0.00225 per 10s audio{% sup /%} starting January 1, 2027.<br>* $0.90 (text) through December 31, 2026.<br>$1.80 (text) starting January 1, 2027.<br>* $16.20 (audio) through December 31, 2026.<br>$32.40 (audio) starting January 1, 2027. | 差异项（新增；相同内容已省略）：* $1.50 (text / image / video)<br>$12.00 (video){% sup %}*{% /sup %}<br>pricing ($12.00 per 1M tokens), this equates to an effective price of<br>approximately $0.07 per second (~$0.70 for a 10s clip, ~$1.04 for a 15s clip;<br>$0.023/s for 360p at 1,931 tokens/s; $0.104/s for 1080p with upsampling at 8,688<br>tokens/s; and $0.209/s for 4K with upsampling at 17,376 tokens/s). |

#### 来源 / google-url-context

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：# Specifies the API revision to avoid breaking changes when they become default<br>-H "Api-Revision: 2026-05-20" \ | 差异项（新增；相同内容已省略）：无 |
| excerpt | 更新 | 差异片段（删除 58 项）<details><summary>展开完整差异</summary><ul><li>## Compare two pages {% class="hide-from-toc" id="get-started" %}</li><li># This will only work for SDK newer than 2.0.0</li><li>interaction = client.interactions.create(</li><li>model="gemini-3.8-flash",</li><li>input=f"Compare the ingredients and cooking times from the recipes at {url1} and {url2}",</li><li>tools=[{"type": "url_context"}]</li><li># Print the model's text response and its source annotations</li><li>for step in interaction.steps:</li><li>if step.type == "model_output":</li><li>for content_block in step.content:</li><li>if content_block.type == "text":</li><li>print(content_block.text)</li><li>if content_block.annotations:</li><li>print("\nSources:")</li><li>for annotation in content_block.annotations:</li><li>if annotation.type == "url_citation":</li><li>print(f" - {annotation.title}: {annotation.url}")</li><li>// This will only work for SDK newer than 2.0.0</li><li>const client = new GoogleGenAI({});</li><li>const interaction = await client.interactions.create({</li><li>input: "Compare the ingredients and cooking times from the recipes at https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592 and https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/",</li><li>tools: [{ type: "url_context" }]</li><li>// Print the model's text response and its source annotations</li><li>for (const step of interaction.steps) {</li><li>if (step.type === 'model_output') {</li><li>for (const contentBlock of step.content &#124;&#124; []) {</li><li>if (contentBlock.type === 'text') {</li><li>console.log(contentBlock.text);</li><li>if (contentBlock.annotations) {</li><li>console.log("\nSources:");</li><li>for (const annotation of contentBlock.annotations) {</li><li>if (annotation.type === 'url_citation') {</li><li>console.log(` - ${annotation.title}: ${annotation.url}`);</li><li>}</li><li>}</li><li>}</li><li>}</li><li>}</li><li>}</li><li>}</li><li>{% tab label="Go" %}</li><li>```go</li><li>package main</li><li>import (</li><li>"context"</li><li>"fmt"</li><li>"log"</li><li>"google.golang.org/genai"</li><li>"google.golang.org/genai/interactions/models/interactions"</li><li>"google.golang.org/genai/interactions/models/operations"</li><li>)</li><li>func main() {</li><li>ctx := context.Background()</li><li>client, err := genai.NewClient(ctx, nil)</li><li>if err != nil {</li><li>log.Fatal(err)</li><li>url1 := "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592"</li><li>url2 := "https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/"</li></ul></details> | 差异片段（新增 58 项）<details><summary>展开完整差异</summary><ul><li>from google.genai.types import Tool, GenerateContentConfig</li><li>model_id = "gemini-3.8-flash"</li><li>tools = [</li><li>{"url_context": {}},</li><li>]</li><li>response = client.models.generate_content(</li><li>model=model_id,</li><li>contents=f"Compare the ingredients and cooking times from the recipes at {url1} and {url2}",</li><li>config=GenerateContentConfig(</li><li>tools=tools,</li><li>)</li><li>for each in response.candidates[0].content.parts:</li><li>print(each.text)</li><li># For verification, you can inspect the metadata to see which URLs the model retrieved</li><li>print(response.candidates[0].url_context_metadata)</li><li>const ai = new GoogleGenAI({});</li><li>const response = await ai.models.generateContent({</li><li>contents: [</li><li>"Compare the ingredients and cooking times from the recipes at https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592 and https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/",</li><li>],</li><li>config: {</li><li>tools: [{urlContext: {}}],</li><li>},</li><li>console.log(response.text);</li><li>// For verification, you can inspect the metadata to see which URLs the model retrieved</li><li>console.log(response.candidates[0].urlContextMetadata)</li><li>{% tab label="REST" %}</li><li>```shell</li><li>curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent" \</li><li>-H "x-goog-api-key: $GEMINI_API_KEY" \</li><li>-H "Content-Type: application/json" \</li><li>-d '{</li><li>"contents": [</li><li>{</li><li>"parts": [</li><li>{"text": "Compare the ingredients and cooking times from the recipes at https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592 and https://www.allrecipes.com/recipe/21151/simple-whole-roast-chicken/"}</li><li>]</li><li>],</li><li>"tools": [</li><li>{</li><li>"url_context": {}</li><li>}</li><li>]</li><li>}' &gt; result.json</li><li>cat result.json</li><li>```</li><li>{% /tab %}</li><li>{% /tabs %}</li><li>## How it works {% id="how-it-works" %}</li><li>The URL Context tool uses a two-step retrieval process to</li><li>balance speed, cost, and access to fresh data. When you provide a URL, the tool</li><li>first attempts to fetch the content from an internal index cache. This acts as a</li><li>highly optimized cache. If a URL is not available in the index (for example, if</li><li>it's a very new page), the tool automatically falls back to do a live fetch.</li><li>This directly accesses the URL to retrieve its content in real-time.</li><li>## Combining with other tools {% id="code-examples-with-search" %}</li><li>You can combine the URL context tool with other tools to create more powerful</li><li>workflows.</li></ul></details> |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：console.log(` - ${annotation.title}: ${annotation.url}`); | 差异项（新增；相同内容已省略）：无 |

### 待核对项目

#### 项目 / google-google-maps-io-not-parsed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 google-google-maps › assertion | 更新 | 未发现必要结构标记：enable_widget。 | 未发现必要结构标记：enable_widget, place_citation。 |

#### 项目 / google-google-search-io-not-parsed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 google-google-search › assertion | 新增 | 未记录 | 未发现必要结构标记：google_search_call, google_search_result, url_citation, search_suggestions。 |
| evidence › 记录 google-google-search › source ref | 新增 | 未记录 | google-google-search |
| ID（id） | 新增 | 未记录 | google-google-search-io-not-parsed |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 未能从已登记的官方文档完整确认 web_search 的输入/输出结构；检查文档变更后再更新映射。 |
| subject ref | 新增 | 未记录 | global/web_search |

#### 项目 / google-url-context-io-not-parsed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 google-url-context › assertion | 新增 | 未记录 | 未发现必要结构标记：url_citation, url_context_result, start_index, end_index。 |
| evidence › 记录 google-url-context › source ref | 新增 | 未记录 | google-url-context |
| ID（id） | 新增 | 未记录 | google-url-context-io-not-parsed |
| 类别（kind） | 新增 | 未记录 | incomplete_coverage |
| message | 新增 | 未记录 | 未能从已登记的官方文档完整确认 web_fetch 的输入/输出结构；检查文档变更后再更新映射。 |
| subject ref | 新增 | 未记录 | global/web_fetch |

### 市场 / global

#### Capability / google-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_search tool. | 未记录 |
| ID（id） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| ID（id） › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_search tool. | 未记录 |
| ID（id） › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| ID（id） | 缺席待核实 | google-search | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_search tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 类别（kind） › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_search tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| 类别（kind） | 缺席待核实 | web_search | 未记录 |
| links › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | 链接指向 Google 官方能力文档。 | 未记录 |
| links › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| links › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：链接指向 Google 官方能力文档。 | 未记录 |
| links › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| links › documentation | 缺席待核实 | https://aistudio.google.com/docs/google-search?generate-content=true&amp;hl=en | 未记录 |

#### Capability / google-search › Operation / google-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_search tool. | 未记录 |
| ID（id） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| ID（id） › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_search tool. | 未记录 |
| ID（id） › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| ID（id） | 缺席待核实 | google-search | 未记录 |
| 输入（input） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Official GenerateContent examples submit the search prompt through contents. | 未记录 |
| 输入（input） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 输入（input） › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：Official GenerateContent examples submit the search prompt through contents. | 未记录 |
| 输入（input） › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| 输入（input） › 记录 contents › 类别（kind） | 缺席待核实 | text | 未记录 |
| 输入（input） › 记录 contents › 名称（name） | 缺席待核实 | contents | 未记录 |
| 输入（input） › 记录 contents › 是否必填（required） | 缺席待核实 | 是 | 未记录 |
| 输入（input） › 记录 input › 类别（kind） | 缺席待核实 | text | 未记录 |
| 输入（input） › 记录 input › 名称（name） | 缺席待核实 | input | 未记录 |
| 输入（input） › 记录 input › 是否必填（required） | 缺席待核实 | 是 | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_search tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 类别（kind） › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_search tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| 类别（kind） | 缺席待核实 | web_search | 未记录 |
| 输出（output） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | 官方 GroundingMetadata 响应示例列出搜索查询、搜索入口、网页来源和文本依据字段。 | 未记录 |
| 输出（output） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 输出（output） › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：官方 GroundingMetadata 响应示例列出搜索查询、搜索入口、网页来源和文本依据字段。 | 未记录 |
| 输出（output） › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| 输出（output） › 记录 0 › fields | 缺席待核实 | 列表（19 项）<details><summary>展开完整内容</summary><ul><li>steps[].type=google_search_call</li><li>steps[].arguments.queries[]</li><li>steps[].type=google_search_result</li><li>steps[].result[].search_suggestions</li><li>steps[].content[].annotations[].type=url_citation</li><li>steps[].content[].annotations[].url</li><li>steps[].content[].annotations[].title</li><li>steps[].content[].annotations[].start_index</li><li>steps[].content[].annotations[].end_index</li><li>candidates[].content.parts[].text</li><li>candidates[].groundingMetadata.searchEntryPoint.renderedContent</li><li>candidates[].groundingMetadata.searchEntryPoint.sdkBlob</li><li>candidates[].groundingMetadata.groundingChunks[].web.uri</li><li>candidates[].groundingMetadata.groundingChunks[].web.title</li><li>candidates[].groundingMetadata.groundingSupports[].segment</li><li>candidates[].groundingMetadata.groundingSupports[].groundingChunkIndices[]</li><li>candidates[].groundingMetadata.groundingSupports[].confidenceScores[]</li><li>candidates[].groundingMetadata.webSearchQueries[]</li><li>candidates[].groundingMetadata.imageSearchQueries[]</li></ul></details> | 未记录 |
| 输出（output） › 记录 0 › 类别（kind） | 缺席待核实 | structured | 未记录 |
| 参数（parameters） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Parameter names and optional fields are included when present in the captured official File Search guide or GenerateContent schema. | 未记录 |
| 参数（parameters） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 参数（parameters） › evidence › 记录 google-google-search › assertion | 缺席待核实 | 能力文档确认此工具适用：Parameter names and optional fields are included when present in the captured official File Search guide or GenerateContent schema. | 未记录 |
| 参数（parameters） › evidence › 记录 google-google-search › source ref | 缺席待核实 | google-google-search | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.imageSearch › 名称（name） | 缺席待核实 | tools[].googleSearch.searchTypes.imageSearch | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.imageSearch › 是否必填（required） | 缺席待核实 | 否 | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.imageSearch › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].googleSearch.searchTypes.imageSearch | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.imageSearch › 类型（type） | 缺席待核实 | object | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.webSearch › 名称（name） | 缺席待核实 | tools[].googleSearch.searchTypes.webSearch | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.webSearch › 是否必填（required） | 缺席待核实 | 否 | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.webSearch › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].googleSearch.searchTypes.webSearch | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.searchTypes.webSearch › 类型（type） | 缺席待核实 | object | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.endTime › 名称（name） | 缺席待核实 | tools[].googleSearch.timeRangeFilter.endTime | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.endTime › 是否必填（required） | 缺席待核实 | 否 | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.endTime › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].googleSearch.timeRangeFilter.endTime | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.endTime › 类型（type） | 缺席待核实 | string | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.startTime › 名称（name） | 缺席待核实 | tools[].googleSearch.timeRangeFilter.startTime | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.startTime › 是否必填（required） | 缺席待核实 | 否 | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.startTime › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].googleSearch.timeRangeFilter.startTime | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch.timeRangeFilter.startTime › 类型（type） | 缺席待核实 | string | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch › 名称（name） | 缺席待核实 | tools[].googleSearch | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch › 是否必填（required） | 缺席待核实 | 否 | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].googleSearch | 未记录 |
| 参数（parameters） › 记录 tools[].googleSearch › 类型（type） | 缺席待核实 | object | 未记录 |
| 参数（parameters） › 记录 tools[].search_types[] › 名称（name） | 缺席待核实 | tools[].search_types[] | 未记录 |
| 参数（parameters） › 记录 tools[].search_types[] › 是否必填（required） | 缺席待核实 | 否 | 未记录 |
| 参数（parameters） › 记录 tools[].search_types[] › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].search_types | 未记录 |
| 参数（parameters） › 记录 tools[].search_types[] › 类型（type） | 缺席待核实 | array | 未记录 |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 缺席待核实 | • google_search | 未记录 |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 缺席待核实 | tools[].type | 未记录 |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 缺席待核实 | 是 | 未记录 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].type | 未记录 |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 缺席待核实 | string | 未记录 |
| routes | 缺席待核实 | 空列表 | 未记录 |

#### Capability / url-context

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| ID（id） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| ID（id） › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| ID（id） › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| ID（id） | 缺席待核实 | url-context | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 类别（kind） › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| 类别（kind） | 缺席待核实 | web_fetch | 未记录 |
| links › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | 链接指向 Google 官方能力文档。 | 未记录 |
| links › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| links › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：链接指向 Google 官方能力文档。 | 未记录 |
| links › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| links › documentation | 缺席待核实 | https://aistudio.google.com/docs/url-context?generate-content=true&amp;hl=en | 未记录 |

#### Capability / url-context › Operation / url-context

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| ID（id） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| ID（id） › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| ID（id） › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| ID（id） | 缺席待核实 | url-context | 未记录 |
| 输入（input） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Official requests provide the question and URLs to read in contents. | 未记录 |
| 输入（input） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 输入（input） › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：Official requests provide the question and URLs to read in contents. | 未记录 |
| 输入（input） › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| 输入（input） › 记录 contents › 类别（kind） | 缺席待核实 | text | 未记录 |
| 输入（input） › 记录 contents › 名称（name） | 缺席待核实 | contents | 未记录 |
| 输入（input） › 记录 contents › 是否必填（required） | 缺席待核实 | 是 | 未记录 |
| 输入（input） › 记录 input › 类别（kind） | 缺席待核实 | text | 未记录 |
| 输入（input） › 记录 input › 名称（name） | 缺席待核实 | input | 未记录 |
| 输入（input） › 记录 input › 是否必填（required） | 缺席待核实 | 是 | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 类别（kind） › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：Google official documentation defines the Gemini web_fetch tool. | 未记录 |
| 类别（kind） › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| 类别（kind） | 缺席待核实 | web_fetch | 未记录 |
| 输出（output） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | 官方响应示例列出文本引用以及 URL 检索状态和 retrieved URL 元数据。 | 未记录 |
| 输出（output） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 输出（output） › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：官方响应示例列出文本引用以及 URL 检索状态和 retrieved URL 元数据。 | 未记录 |
| 输出（output） › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| 输出（output） › 记录 0 › fields | 缺席待核实 | • steps[].type=url_context_result<br>• steps[].url_context_result.url<br>• steps[].url_context_result.status<br>• steps[].content[].annotations[].type=url_citation<br>• steps[].content[].annotations[].url<br>• steps[].content[].annotations[].title<br>• steps[].content[].annotations[].start_index<br>• steps[].content[].annotations[].end_index<br>• candidates[].content.parts[].text<br>• candidates[].urlContextMetadata.urlMetadata[].retrievedUrl<br>• candidates[].urlContextMetadata.urlMetadata[].urlRetrievalStatus | 未记录 |
| 输出（output） › 记录 0 › 类别（kind） | 缺席待核实 | structured | 未记录 |
| 参数（parameters） › evidence › 记录 google-generate-content-api › assertion | 缺席待核实 | Parameter names and optional fields are included when present in the captured official File Search guide or GenerateContent schema. | 未记录 |
| 参数（parameters） › evidence › 记录 google-generate-content-api › source ref | 缺席待核实 | google-generate-content-api | 未记录 |
| 参数（parameters） › evidence › 记录 google-url-context › assertion | 缺席待核实 | 能力文档确认此工具适用：Parameter names and optional fields are included when present in the captured official File Search guide or GenerateContent schema. | 未记录 |
| 参数（parameters） › evidence › 记录 google-url-context › source ref | 缺席待核实 | google-url-context | 未记录 |
| 参数（parameters） › 记录 tools[].type › 可选值（enum） | 缺席待核实 | • url_context | 未记录 |
| 参数（parameters） › 记录 tools[].type › 名称（name） | 缺席待核实 | tools[].type | 未记录 |
| 参数（parameters） › 记录 tools[].type › 是否必填（required） | 缺席待核实 | 是 | 未记录 |
| 参数（parameters） › 记录 tools[].type › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].type | 未记录 |
| 参数（parameters） › 记录 tools[].type › 类型（type） | 缺席待核实 | string | 未记录 |
| 参数（parameters） › 记录 tools[].urlContext › 名称（name） | 缺席待核实 | tools[].urlContext | 未记录 |
| 参数（parameters） › 记录 tools[].urlContext › 是否必填（required） | 缺席待核实 | 否 | 未记录 |
| 参数（parameters） › 记录 tools[].urlContext › 参数路径（route_mappings） | 缺席待核实 | • body.tools[].urlContext | 未记录 |
| 参数（parameters） › 记录 tools[].urlContext › 类型（type） | 缺席待核实 | object | 未记录 |
| routes | 缺席待核实 | 空列表 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `google-models` · Google Gemini API 模型指南 | https://aistudio.google.com/docs/models?hl=en | 2026-11-07T03:43:14.809Z | 200 | `sha256:3875002d6dc17c07ec9c08821e2be8b1b679384213ab3a8e994669696eadac58` |
| global | `google-pricing` · Google Gemini Developer API 定价 | https://aistudio.google.com/docs/pricing?hl=en | 2026-11-07T03:43:14.841Z | 200 | `sha256:ad2140dd935ccca0a66bb70f7c1b59b5e4c74d6180b599a8c32e0dcf4a422a2e` |
| global | `google-models-api` · Google models.list / models.get API 参考（实际清单需 API Key） | https://aistudio.google.com/api-reference/models?hl=en | 2026-11-07T03:43:14.893Z | 200 | `sha256:7845018f98cf4dfed4bf945d1201c89fb8f7243fcf9da5661e2bda05bd5417c3` |
| global | `google-api-overview` · Google Gemini API 通用端点与能力概览 | https://aistudio.google.com/api-reference?hl=en | 2026-11-07T03:43:14.896Z | 200 | `sha256:1cc411951b3d4e4eaa06d31cfec6960ec26541f3174e4bda20055252389be857` |
| global | `google-generate-content-api` · Google Gemini GenerateContent 工具配置与 API Schema | https://aistudio.google.com/api-reference/generate-content?hl=en | 2026-11-07T03:43:14.985Z | 200 | `sha256:fba7832d0e5bdc47d3cce869ac078798fb2e493f7f839616e43fa31b2159a441` |
| global | `google-batch` · Google Gemini API Batch 模式与计费说明 | https://aistudio.google.com/docs/batch-api | 2026-11-07T03:43:14.976Z | 200 | `sha256:50ad238b451c0d9461150e6b65c4b0693081bf8ca42270e853bcd947dd23bcef` |
| global | `google-batch-api-schema` · Google Gemini API Batch 请求与响应 Schema | https://aistudio.google.com/api-reference/batch-api?hl=en | 2026-11-07T03:43:15.121Z | 200 | `sha256:708bdd36cea09063ed02ff39e78d2af4062739063d1971064a469b2ddf3dce6f` |
| global | `google-tools` · Google Gemini API 内置工具与能力说明 | https://aistudio.google.com/docs/tools?hl=en | 2026-11-07T03:43:15.042Z | 200 | `sha256:d769848638bd05137b98dce445ea49a9c4e603dee79cf6c545cb2b17d3723c49` |
| global | `google-code-execution` · Google Gemini API Code execution 输入与结果格式 | https://aistudio.google.com/docs/code-execution | 2026-11-07T03:43:15.246Z | 200 | `sha256:c00126b448f5b9fc20c0649d5216dcd04ee0a4923e4fe316cd52b6fd1e4123b3` |
| global | `google-google-search` · Google Gemini API Grounding with Google Search 输入与响应 | https://aistudio.google.com/docs/google-search?generate-content=true&amp;hl=en | 2026-11-07T03:43:15.191Z | 200 | `sha256:9fd8381158dac82d8964966232e06f50b6fc12cda5009dde418bae8a360197d9` |
| global | `google-google-maps` · Google Gemini API Grounding with Google Maps 输入与响应 | https://aistudio.google.com/docs/maps-grounding?generate-content=true&amp;hl=en | 2026-11-07T03:43:15.330Z | 200 | `sha256:94db7945641290cd2c6a3892f15b76b1123f3149d5a584814192817bba4422df` |
| global | `google-url-context` · Google Gemini API URL Context 输入与响应 | https://aistudio.google.com/docs/url-context?generate-content=true&amp;hl=en | 2026-11-07T03:43:15.379Z | 200 | `sha256:45a4cfa5893c8bbfc5acaf90959d255cc3402e4c267ac7d9ed68a4c850c486ba` |
| global | `google-openai-compatibility` · Google Gemini API OpenAI 兼容接口 | https://aistudio.google.com/docs/openai?hl=en | 2026-11-07T03:43:15.439Z | 200 | `sha256:f0c165e0811edb6be1504eab67eefaebc89b7002f03bc3058ece967d71aa0193` |
| global | `google-live-api` · Google Gemini API Live WebSocket 接口参考 | https://aistudio.google.com/api-reference/live | 2026-11-07T03:43:15.436Z | 200 | `sha256:18c186480780cb7dcd72e3915fbd85c8c960738e163c2ffb7416f2cb212fac8e` |
| global | `google-billing` · Google Gemini API Free/Paid 层级与付款方式 | https://aistudio.google.com/docs/billing?hl=en | 2026-11-07T03:43:15.499Z | 200 | `sha256:8500c149cec177f6c2712cf966470b4c6e68a3d07038105b5e29b19361bc3f16` |
| global | `google-consumer-plans-us` · Google Google One 美国 Google AI 订阅计划 | https://one.google.com/about/plans?hl=en_US | 2026-11-07T03:43:15.648Z | 200 | `sha256:c27049d369bdf1965b25bb69acbcfe47fdc4e8adff19ea1cd892eef5c2ff6871` |
| global | `google-files-api` · Google Gemini API Files 与 File Search API | https://aistudio.google.com/docs/file-search?hl=en | 2026-11-07T03:43:15.727Z | 200 | `sha256:30d9803bff0df4d06cc0daef6db52cd9af217f9f7b05ff5b86c652ebcc7cae61` |

## google 专属证据与核对说明

### Google Gemini API 官方通用资料采集候选

- 来源快照：17 份
- 文档观察：17 份；模型 ID 提及：173 条
- 已生成 Offering：0 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- models.list 需要 API Key 且按项目/API 权限列出账号可见模型；不使用凭证调用。
- Gemini Developer API 与 Vertex AI Model Garden 是不同服务与授权面；只采集已登记的 Gemini Developer API 来源。
- 模型指南、定价页与模型清单接口覆盖范围不同；价格页提及不能证明当前供应，API 行为示例不能证明逐模型能力。
- Batch 是请求处理模式与折扣，不是订阅 Plan，也不单独构成模型 Offering。
