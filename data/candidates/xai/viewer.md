# xai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-27T05:51:00.774Z |
| 前一候选指纹 | `sha256:081e5b6537cfb8f2a2556f014eb8c431bd52c3b2b263ec2e8a2ab71031e2cb82` |
| 本次候选指纹 | `sha256:69717b162ea85ce2dd8aa76fc36fe4b17a6ec4aa02442124c0886ebb7c77f7b3` |
| 来源快照 | 25 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 34 项，更新 31 项，缺席待核实 2 项。

## 字段变化

### 文档观察

#### 来源 / xai-batch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除 16 项）<details><summary>展开完整差异</summary><ul><li>curl -X POST https://api.x.ai/v1/batches \\</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \\</li><li>const response = await fetch(\`https://api.x.ai/v1/batches/\${batchId}/requests\`, {</li><li>curl https://api.x.ai/v1/batches/{batch_id} \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}\`,</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/results?limit=100" \\</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/results?limit=100&amp;pagination_token={token}" \\</li><li>const url = new URL(\`https://api.x.ai/v1/batches/\${batchId}/results\`);</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}:cancel \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}:cancel\`,</li><li>curl "https://api.x.ai/v1/batches?limit=20" \\</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/requests?limit=50" \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}/requests?limit=50\`,</li><li>curl -s "https://api.x.ai/v1/batches/{batch_id}/results?limit=100" \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}/results?limit=100\`,</li><li>curl -X POST https://api.x.ai/v1/files \\</li></ul></details> | 差异项（新增 16 项）<details><summary>展开完整差异</summary><ul><li>curl -X POST https://api.x.ai/v1/batches \</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \</li><li>const response = await fetch(`https://api.x.ai/v1/batches/${batchId}/requests`, {</li><li>curl https://api.x.ai/v1/batches/{batch_id} \</li><li>`https://api.x.ai/v1/batches/${batchId}`,</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/results?limit=100" \</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/results?limit=100&amp;pagination_token={token}" \</li><li>const url = new URL(`https://api.x.ai/v1/batches/${batchId}/results`);</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}:cancel \</li><li>`https://api.x.ai/v1/batches/${batchId}:cancel`,</li><li>curl "https://api.x.ai/v1/batches?limit=20" \</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/requests?limit=50" \</li><li>`https://api.x.ai/v1/batches/${batchId}/requests?limit=50`,</li><li>curl -s "https://api.x.ai/v1/batches/{batch_id}/results?limit=100" \</li><li>`https://api.x.ai/v1/batches/${batchId}/results?limit=100`,</li><li>curl -X POST https://api.x.ai/v1/files \</li></ul></details> |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：curl -X POST https://api.x.ai/v1/batches \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>Authorization: \`Bearer \${process.env.XAI_API_KEY}\`,<br>console.log(\`Created batch: \${batch.batch_id}\`);<br>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\ | 差异片段（新增；相同内容已省略）：curl -X POST https://api.x.ai/v1/batches \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>Authorization: `Bearer ${process.env.XAI_API_KEY}`,<br>console.log(`Created batch: ${batch.batch_id}`);<br>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \ |
| plan or price mentions | 更新 | 差异项（删除 39 项）<details><summary>展开完整差异</summary><ul><li>-H "Authorization: Bearer $XAI_API_KEY" \\</li><li>Authorization: \`Bearer \${process.env.XAI_API_KEY}\`,</li><li>console.log(\`Created batch: \${batch.batch_id}\`);</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \\</li><li>const response = await fetch(\`https://api.x.ai/v1/batches/\${batchId}/requests\`, {</li><li>if (!response.ok) throw new Error(\`Failed to add requests: \${await response.text()}\`);</li><li>console.log(\`Added \${batchRequests.length} requests to batch\`);</li><li>\`https://api.x.ai/v1/batches/\${batchId}\`,</li><li>{ headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` } }</li><li>console.log(\`Progress: \${completed}/\${num_requests} complete, \${num_pending} pending\`);</li><li>const url = new URL(\`https://api.x.ai/v1/batches/\${batchId}/results\`);</li><li>headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` },</li><li>console.log(\`Successfully processed: \${allSucceeded.length} requests\`);</li><li>console.log(\`[\${result.batch_request_id}] \${content}\`);</li><li>if (tokens != null) console.log(\` Tokens used: \${tokens}\`);</li><li>console.log(\`\\nFailed: \${allFailed.length} requests\`);</li><li>console.log(\`[\${result.batch_request_id}] Error: \${result.error_message}\`);</li><li>\`https://api.x.ai/v1/batches/\${batchId}:cancel\`,</li><li>{ method: "POST", headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` } }</li><li>console.log(\`Cancelled batch: \${cancelledBatch.batch_id}\`);</li><li>console.log(\`Completed before cancellation: \${cancelledBatch.state.num_success} requests\`);</li><li>console.log(\`\${batch.name} (\${batch.batch_id}): \${status}\`);</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/requests?limit=50" \\</li><li>\`https://api.x.ai/v1/batches/\${batchId}/requests?limit=50\`,</li><li>console.log(\`Request \${req.batch_request_id}: \${req.state}\`);</li><li>\`https://api.x.ai/v1/batches/\${batchId}/results?limit=100\`,</li><li>console.log(\`Total cost: $\${(totalTicks / 1e10).toFixed(4)}\`);</li><li>const headers = { "Content-Type": "application/json", Authorization: \`Bearer \${process.env.XAI_API_KEY}\` };</li><li>const batchRes = await fetch(\`\${BASE_URL}/batches\`, {</li><li>console.log(\`Batch created: \${batchId}\`);</li><li>const response = await fetch(\`\${BASE_URL}/batches/\${batchId}/requests\`, {</li><li>console.log(\`Added \${feedbackData.length} requests\`);</li><li>const statusRes = await fetch(\`\${BASE_URL}/batches/\${batchId}\`, { headers });</li><li>console.log(\` \${num_success + num_error}/\${num_requests} complete\`);</li><li>const resultsRes = await fetch(\`\${BASE_URL}/batches/\${batchId}/results?limit=100\`, { headers });</li><li>console.log(\`[\${sentiment.toUpperCase()}] \${originalText.slice(0, 50)}...\`);</li><li>console.log(\`[\${result.batch_request_id}] \${result.error_message}\`);</li><li>console.log(\`\\nTotal cost: $\${(totalTicks / 1e10).toFixed(4)}\`);</li><li>print("\\nTotal cost: $%.4f" % cost_usd)</li></ul></details> | 差异项（新增 39 项）<details><summary>展开完整差异</summary><ul><li>-H "Authorization: Bearer $XAI_API_KEY" \</li><li>Authorization: `Bearer ${process.env.XAI_API_KEY}`,</li><li>console.log(`Created batch: ${batch.batch_id}`);</li><li>curl -X POST https://api.x.ai/v1/batches/{batch_id}/requests \</li><li>const response = await fetch(`https://api.x.ai/v1/batches/${batchId}/requests`, {</li><li>if (!response.ok) throw new Error(`Failed to add requests: ${await response.text()}`);</li><li>console.log(`Added ${batchRequests.length} requests to batch`);</li><li>`https://api.x.ai/v1/batches/${batchId}`,</li><li>{ headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` } }</li><li>console.log(`Progress: ${completed}/${num_requests} complete, ${num_pending} pending`);</li><li>const url = new URL(`https://api.x.ai/v1/batches/${batchId}/results`);</li><li>headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },</li><li>console.log(`Successfully processed: ${allSucceeded.length} requests`);</li><li>console.log(`[${result.batch_request_id}] ${content}`);</li><li>if (tokens != null) console.log(` Tokens used: ${tokens}`);</li><li>console.log(`\nFailed: ${allFailed.length} requests`);</li><li>console.log(`[${result.batch_request_id}] Error: ${result.error_message}`);</li><li>`https://api.x.ai/v1/batches/${batchId}:cancel`,</li><li>{ method: "POST", headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` } }</li><li>console.log(`Cancelled batch: ${cancelledBatch.batch_id}`);</li><li>console.log(`Completed before cancellation: ${cancelledBatch.state.num_success} requests`);</li><li>console.log(`${batch.name} (${batch.batch_id}): ${status}`);</li><li>curl "https://api.x.ai/v1/batches/{batch_id}/requests?limit=50" \</li><li>`https://api.x.ai/v1/batches/${batchId}/requests?limit=50`,</li><li>console.log(`Request ${req.batch_request_id}: ${req.state}`);</li><li>`https://api.x.ai/v1/batches/${batchId}/results?limit=100`,</li><li>console.log(`Total cost: $${(totalTicks / 1e10).toFixed(4)}`);</li><li>const headers = { "Content-Type": "application/json", Authorization: `Bearer ${process.env.XAI_API_KEY}` };</li><li>const batchRes = await fetch(`${BASE_URL}/batches`, {</li><li>console.log(`Batch created: ${batchId}`);</li><li>const response = await fetch(`${BASE_URL}/batches/${batchId}/requests`, {</li><li>console.log(`Added ${feedbackData.length} requests`);</li><li>const statusRes = await fetch(`${BASE_URL}/batches/${batchId}`, { headers });</li><li>console.log(` ${num_success + num_error}/${num_requests} complete`);</li><li>const resultsRes = await fetch(`${BASE_URL}/batches/${batchId}/results?limit=100`, { headers });</li><li>console.log(`[${sentiment.toUpperCase()}] ${originalText.slice(0, 50)}...`);</li><li>console.log(`[${result.batch_request_id}] ${result.error_message}`);</li><li>console.log(`\nTotal cost: $${(totalTicks / 1e10).toFixed(4)}`);</li><li>print("\nTotal cost: $%.4f" % cost_usd)</li></ul></details> |

#### 来源 / xai-code-execution

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\ | 差异项（新增；相同内容已省略）：curl https://api.x.ai/v1/responses \ |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\\n\\nServer Side Tool Calls:") | 差异项（新增；相同内容已省略）：print(f"\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\n\nServer Side Tool Calls:") |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\ | 差异片段（新增；相同内容已省略）：curl https://api.x.ai/v1/responses \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \ |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：-H "Authorization: Bearer $XAI_API_KEY" \\ | 差异项（新增；相同内容已省略）：-H "Authorization: Bearer $XAI_API_KEY" \ |

#### 来源 / xai-collections-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\ | 差异项（新增；相同内容已省略）：curl https://api.x.ai/v1/responses \ |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\\n\\nTool Calls:") | 差异项（新增；相同内容已省略）：print(f"\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\n\nTool Calls:") |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：-H "Authorization: Bearer $XAI_API_KEY" \\ | 差异项（新增；相同内容已省略）：-H "Authorization: Bearer $XAI_API_KEY" \ |

#### 来源 / xai-files-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：curl https://api.x.ai/v1/files \\<br>const response = await fetch(\`https://api.x.ai/v1/files?\${params}\`, {<br>curl https://api.x.ai/v1/files/file-abc123 \\<br>curl https://api.x.ai/v1/files/file-abc123/content \\<br>curl -X DELETE https://api.x.ai/v1/files/file-abc123 \\ | 差异项（新增；相同内容已省略）：curl https://api.x.ai/v1/files \<br>const response = await fetch(`https://api.x.ai/v1/files?${params}`, {<br>curl https://api.x.ai/v1/files/file-abc123 \<br>curl https://api.x.ai/v1/files/file-abc123/content \<br>curl -X DELETE https://api.x.ai/v1/files/file-abc123 \ |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` },<br>curl https://api.x.ai/v1/files \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>-F file=@/path/to/your/document.pdf \\<br>content = b"This is my document content.\\nIt can span multiple lines." | 差异片段（新增；相同内容已省略）：headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },<br>curl https://api.x.ai/v1/files \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>-F file=@/path/to/your/document.pdf \<br>content = b"This is my document content.\nIt can span multiple lines." |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：headers: { Authorization: \`Bearer \${process.env.XAI_API_KEY}\` },<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>console.log(\`File: \${file.filename} (ID: \${file.id})\`);<br>const response = await fetch(\`https://api.x.ai/v1/files?\${params}\`, {<br>console.log(\`Total files: \${allFiles.length}\`); | 差异项（新增；相同内容已省略）：headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` },<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>console.log(`File: ${file.filename} (ID: ${file.id})`);<br>const response = await fetch(`https://api.x.ai/v1/files?${params}`, {<br>console.log(`Total files: ${allFiles.length}`); |

#### 来源 / xai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：&#124; Below 200k &#124; $4.00 / 1M &#124; $1.00 / 1M &#124; $12.00 / 1M &#124;<br>&#124; Above 200k &#124; $6.00 / 1M &#124; $1.50 / 1M &#124; $18.00 / 1M &#124;<br>Long-context rates apply once a request's prompt exceeds 200k tokens. Cursor bills its own fast variant through your Cursor plan.<br>For `grok-4.7` this is $2.20 / $0.55 / $6.60 per 1M tokens (input / cached input / output) below 200k prompt tokens, and $4.40 / $1.10 / $13.20 above. The 1.1x multiplier applies to input, output, and cached input tokens, including long-context rates. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier. See the [Regional Endpoints documentation](/developers/advanced-api-usage/regions) for the scope of the US processing and storage guarantee. | 差异片段（新增；相同内容已省略）：&#124; \&lt; 200k &#124; $4.00 / 1M &#124; $1.00 / 1M &#124; $12.00 / 1M &#124;<br>&#124; ≥ 200k &#124; $6.00 / 1M &#124; $1.50 / 1M &#124; $18.00 / 1M &#124;<br>Long-context rates apply once a request's prompt reaches 200k tokens. Cursor bills its own fast variant through your Cursor plan.<br>For `grok-4.7` this is $2.20 / $0.55 / $6.60 per 1M tokens (input / cached input / output) below 200k prompt tokens, and $4.40 / $1.10 / $13.20 from 200k. The 1.1x multiplier applies to input, output, and cached input tokens, including long-context rates. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier. See the [Regional Endpoints documentation](/developers/advanced-api-usage/regions) for the scope of the US processing and storage guarantee. |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：&#124; Below 200k &#124; $4.00 / 1M &#124; $1.00 / 1M &#124; $12.00 / 1M &#124;<br>&#124; Above 200k &#124; $6.00 / 1M &#124; $1.50 / 1M &#124; $18.00 / 1M &#124;<br>Long-context rates apply once a request's prompt exceeds 200k tokens. Cursor bills its own fast variant through your Cursor plan.<br>For `grok-4.7` this is $2.20 / $0.55 / $6.60 per 1M tokens (input / cached input / output) below 200k prompt tokens, and $4.40 / $1.10 / $13.20 above. The 1.1x multiplier applies to input, output, and cached input tokens, including long-context rates. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier. See the [Regional Endpoints documentation](/developers/advanced-api-usage/regions) for the scope of the US processing and storage guarantee | 差异项（新增；相同内容已省略）：&#124; \&lt; 200k &#124; $4.00 / 1M &#124; $1.00 / 1M &#124; $12.00 / 1M &#124;<br>&#124; ≥ 200k &#124; $6.00 / 1M &#124; $1.50 / 1M &#124; $18.00 / 1M &#124;<br>Long-context rates apply once a request's prompt reaches 200k tokens. Cursor bills its own fast variant through your Cursor plan.<br>For `grok-4.7` this is $2.20 / $0.55 / $6.60 per 1M tokens (input / cached input / output) below 200k prompt tokens, and $4.40 / $1.10 / $13.20 from 200k. The 1.1x multiplier applies to input, output, and cached input tokens, including long-context rates. [Prompt caching](/developers/advanced-api-usage/prompt-caching) discounts are applied before the multiplier. See the [Regional Endpoints documentation](/developers/advanced-api-usage/regions) for the scope of the US processing and storage guara |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › rows › 记录 Above 200k | 缺席待核实 | • Above 200k<br>• $6.00 / 1M<br>• $1.50 / 1M<br>• $18.00 / 1M | 未记录 |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › rows › 记录 Below 200k | 缺席待核实 | • Below 200k<br>• $4.00 / 1M<br>• $1.00 / 1M<br>• $12.00 / 1M | 未记录 |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › rows › 记录 \&lt; 200k | 新增 | 未记录 | • \&lt; 200k<br>• $4.00 / 1M<br>• $1.00 / 1M<br>• $12.00 / 1M |
| tables › 记录 Grok 4.7 Fast pricing (Cursor and Grok Build only) › rows › 记录 ≥ 200k | 新增 | 未记录 | • ≥ 200k<br>• $6.00 / 1M<br>• $1.50 / 1M<br>• $18.00 / 1M |

#### 来源 / xai-regions

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除 3 项）<details><summary>展开完整差异</summary><ul><li>&gt; The US endpoint currently serves two models, `grok-4.7` and `grok-4.6`, and none of the image generation, video generation, or voice APIs. Token usage costs 10% more than on the global endpoint. The US guarantee covers API request handling, inference, moderation, and retained request data. It does not cover Files, Collections, server-side tools, or the network path from your systems to SpaceXSI. See [What the guarantee covers](#what-the-guarantee-covers).</li><li>If a request for a globally available model returns this error, confirm that your client is calling the intended endpoint before troubleshooting model access. The image generation, video generation, and voice APIs are not served by the US endpoint; use the global endpoint for those.</li><li>The image generation, video generation, and voice APIs are not served by the US endpoint. [Files](/developers/files), [Collections](/developers/files/collections), and server-side tools such as [web search](/developers/tools/web-search), [X search](/developers/tools/x-search), and [code execution](/developers/tools/code-execution) still work on the US endpoint, but they are outside the US guarantee and may process data outside the United States. If your requirements cover these features as well,</li></ul></details> | 差异项（新增 3 项）<details><summary>展开完整差异</summary><ul><li>&gt; The US endpoint currently serves two models, `grok-4.7` and `grok-4.6`, and none of the image generation or video generation APIs. Token usage costs 10% more than on the global endpoint. The US guarantee covers API request handling, inference, moderation, and retained request data. It does not cover Files, Collections, server-side tools, or the network path from your systems to SpaceXSI. See [What the guarantee covers](#what-the-guarantee-covers).</li><li>If a request for a globally available model returns this error, confirm that your client is calling the intended endpoint before troubleshooting model access. The image generation and video generation APIs are not served by the US endpoint; use the global endpoint for those.</li><li>The image generation and video generation APIs are not served by the US endpoint. [Files](/developers/files), [Collections](/developers/files/collections), and server-side tools such as [web search](/developers/tools/web-search), [X search](/developers/tools/x-search), and [code execution](/developers/tools/code-execution) still work on the US endpoint, but they are outside the US guarantee and may process data outside the United States. If your requirements cover these features as well, avoid t</li></ul></details> |
| excerpt | 更新 | 差异片段（删除 3 项）<details><summary>展开完整差异</summary><ul><li>&gt; The US endpoint currently serves two models, `grok-4.7` and `grok-4.6`, and none of the image generation, video generation, or voice APIs. Token usage costs 10% more than on the global endpoint. The US guarantee covers API request handling, inference, moderation, and retained request data. It does not cover Files, Collections, server-side tools, or the network path from your systems to SpaceXSI. See [What the guarantee covers](#what-the-guarantee-covers).</li><li>If a request for a globally available model returns this error, confirm that your client is calling the intended endpoint before troubleshooting model access. The image generation, video generation, and voice APIs are not served by the US endpoint; use the global endpoint for those.</li><li>The image generation, video generation, and voice APIs are not served by the US endpoint. [Files](/developers/files), [Collections](/developers/files/collections), and server-side tools such as [web search](/developers/tools/web-search), [X search](/developers/tools/x-search), and [code execution](/developers/tools/code-execution) still work on the US endpoint, but they are outside the US guarantee and may process data outside the United States. If your requirements cover these features as well, avoid them when calling the US endpoint, or contact [support@x.ai](mailto:support@x.ai) to discuss your configuration.</li></ul></details> | 差异片段（新增 3 项）<details><summary>展开完整差异</summary><ul><li>&gt; The US endpoint currently serves two models, `grok-4.7` and `grok-4.6`, and none of the image generation or video generation APIs. Token usage costs 10% more than on the global endpoint. The US guarantee covers API request handling, inference, moderation, and retained request data. It does not cover Files, Collections, server-side tools, or the network path from your systems to SpaceXSI. See [What the guarantee covers](#what-the-guarantee-covers).</li><li>If a request for a globally available model returns this error, confirm that your client is calling the intended endpoint before troubleshooting model access. The image generation and video generation APIs are not served by the US endpoint; use the global endpoint for those.</li><li>The image generation and video generation APIs are not served by the US endpoint. [Files](/developers/files), [Collections](/developers/files/collections), and server-side tools such as [web search](/developers/tools/web-search), [X search](/developers/tools/x-search), and [code execution](/developers/tools/code-execution) still work on the US endpoint, but they are outside the US guarantee and may process data outside the United States. If your requirements cover these features as well, avoid them when calling the US endpoint, or contact [support@x.ai](mailto:support@x.ai) to discuss your configuration.</li></ul></details> |

#### 来源 / xai-speech-to-speech

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：const confirmation = \`CONF\${Math.floor(Math.random() * 9000) + 1000}\`;<br>console.log(\`Function called: \${functionName\} with args:\`, args);<br>console.error(\`Unknown function: \${functionName\}\`); | 差异项（新增；相同内容已省略）：const confirmation = `CONF${Math.floor(Math.random() * 9000) + 1000}`;<br>console.log(`Function called: ${functionName} with args:`, args);<br>console.error(`Unknown function: ${functionName}`); |

#### 来源 / xai-tool-streaming-sync

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\ | 差异项（新增；相同内容已省略）：curl https://api.x.ai/v1/responses \ |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：print(f"\\nCalling tool: {tool_call.function.name}")<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True) | 差异项（新增；相同内容已省略）：print(f"\nCalling tool: {tool_call.function.name}")<br>print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>In the Responses API, X Search and attachment search calls appear as `custom_tool_call` items with the tool's name and input, but not its output. |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：console.log(\`Calling tool: \${part.toolName}\`);<br>console.log(\`Citation: \${part.url}\`);<br>print(f"\\nCalling tool: {tool_call.function.name}")<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\\n\\nFinal Response:")<br>print("\\nCitations:", response.citations)<br>console.log('\\nCitations:'); | 差异片段（新增；相同内容已省略）：console.log(`Calling tool: ${part.toolName}`);<br>console.log(`Citation: ${part.url}`);<br>print(f"\nCalling tool: {tool_call.function.name}")<br>print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\n\nFinal Response:")<br>print("\nCitations:", response.citations)<br>console.log('\nCitations:'); |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：console.log(\`Calling tool: \${part.toolName}\`);<br>console.log(\`Citation: \${part.url}\`);<br>-H "Authorization: Bearer $XAI_API_KEY" \\ | 差异项（新增；相同内容已省略）：console.log(`Calling tool: ${part.toolName}`);<br>console.log(`Citation: ${part.url}`);<br>-H "Authorization: Bearer $XAI_API_KEY" \ |
| tables › 记录 Responses API › rows › 记录 `"attachment_search"` | 新增 | 未记录 | • `"attachment_search"`<br>• Added when you [attach files](/developers/files)<br>• Not returned in Responses API |
| tables › 记录 Responses API › rows › 记录 `"x_search"` | 新增 | 未记录 | • `"x_search"`<br>• `"x_search"`<br>• Not returned in Responses API |

#### 来源 / xai-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\ | 差异项（新增；相同内容已省略）：无 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>The Vercel AI SDK does not yet expose `enableImageSearch`; the examples below use the Responses API and xAI Python SDK. | 差异项（新增；相同内容已省略）：print(f"\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>prompt: 'Show me images of Starship on the launch pad.',<br>enableImageSearch: true, |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>print(f"\\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\\n\\nFinal Response:")<br>print("\\n\\nCitations:") | 差异片段（新增；相同内容已省略）：curl https://api.x.ai/v1/responses \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>print(f"\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")<br>print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)<br>print("\n\nFinal Response:")<br>print("\n\nCitations:") |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：-H "Authorization: Bearer $XAI_API_KEY" \\ | 差异项（新增；相同内容已省略）：无 |
| tables › 记录 Set the User's Location › headers | 新增 | 未记录 | • Field<br>• xAI SDK parameter<br>• Description |
| tables › 记录 Set the User's Location › heading | 新增 | 未记录 | Set the User's Location |
| tables › 记录 Set the User's Location › rows › 记录 `city` | 新增 | 未记录 | • `city`<br>• `user_location_city`<br>• City name |
| tables › 记录 Set the User's Location › rows › 记录 `country` | 新增 | 未记录 | • `country`<br>• `user_location_country`<br>• Two-letter ISO 3166-1 alpha-2 country code, such as `US` |
| tables › 记录 Set the User's Location › rows › 记录 `region` | 新增 | 未记录 | • `region`<br>• `user_location_region`<br>• Region or state name |
| tables › 记录 Set the User's Location › rows › 记录 `timezone` | 新增 | 未记录 | • `timezone`<br>• `user_location_timezone`<br>• IANA time zone, such as `America/Chicago` |
| tables › 记录 Web Search Parameters › rows › 记录 `user_location` | 新增 | 未记录 | • `user_location`<br>• The user's approximate location, used to localize search results. See [Set the User's Location](#set-the-users-location) |

#### 来源 / xai-x-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\ | 差异项（新增；相同内容已省略）：curl https://api.x.ai/v1/responses \ |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：curl https://api.x.ai/v1/responses \\<br>-H "Content-Type: application/json" \\<br>-H "Authorization: Bearer $XAI_API_KEY" \\<br>&#124; `allowed_x_handles` &#124; array of strings &#124; Only consider posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) &#124;<br>&#124; `excluded_x_handles` &#124; array of strings &#124; Ignore posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) &#124; | 差异片段（新增；相同内容已省略）：curl https://api.x.ai/v1/responses \<br>-H "Content-Type: application/json" \<br>-H "Authorization: Bearer $XAI_API_KEY" \<br>&#124; `allowed_x_handles` &#124; array of strings &#124; Only consider posts from these handles, written without the `@` (max 20) &#124;<br>&#124; `excluded_x_handles` &#124; array of strings &#124; Ignore posts from these handles, written without the `@` (max 20) &#124; |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：-H "Authorization: Bearer $XAI_API_KEY" \\ | 差异项（新增；相同内容已省略）：无 |
| tables › 记录 X Search Parameters › rows › 记录 `allowed_x_handles` | 更新 | 差异项（删除；相同内容已省略）：Only consider posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) | 差异项（新增；相同内容已省略）：Only consider posts from these handles, written without the `@` (max 20) |
| tables › 记录 X Search Parameters › rows › 记录 `excluded_x_handles` | 更新 | 差异项（删除；相同内容已省略）：Ignore posts from these handles, written without the `@` (max 20; 10 in the Vercel AI SDK) | 差异项（新增；相同内容已省略）：Ignore posts from these handles, written without the `@` (max 20) |

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
| global | `xai-subscription-pricing` · xAI X Subscription 套餐周期、价格与用量倍率 | https://docs.x.ai/x-subscription/pricing | 2026-11-27T05:50:57.214Z | 200 | `sha256:1c317f26e6820635b393c4ff3bf4da97d066d441dfaeb26c2ad2f4a0f00763d5` |
| global | `xai-models` · xAI Grok 与多模态模型目录 | https://docs.x.ai/developers/models | 2026-11-27T05:50:57.069Z | 200 | `sha256:9daf6f775aec001252736f8243a7f6d33c04fe66639b2b539ba1ddee81d6421d` |
| global | `xai-pricing` · xAI xAI API 模型与功能定价 | https://docs.x.ai/developers/pricing | 2026-11-27T05:50:57.306Z | 200 | `sha256:280b255e46f960af5780ff6f508c9a80af996715e677da61a38744f8f63794ce` |
| global | `xai-models-api` · xAI Inference API 模型清单端点（调用需账号 API Key） | https://docs.x.ai/developers/rest-api-reference/inference/models | 2026-11-27T05:50:57.303Z | 200 | `sha256:fa8ebbc9bda427b4a9eabd3e3cdf8ede1546b664d2686105a80de1d72ba0513b` |
| global | `xai-chat-completions` · xAI Chat Completions API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions | 2026-11-27T05:50:57.758Z | 200 | `sha256:6e0fc6cee129b0511520035eb31b756b94898a3cef46e2fe9873463c5484b4a5` |
| global | `xai-responses` · xAI Responses API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/responses | 2026-11-27T05:50:57.411Z | 200 | `sha256:c3df54cc89e58d274ce0d5bedd348994d96e415654388898b1e1f7765e35087a` |
| global | `xai-images-api` · xAI Images API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/images | 2026-11-27T05:50:57.841Z | 200 | `sha256:e8ff958abc419b52ffc75f6c7b852976f27994ecf099fbc95b79ce2a56bcff2a` |
| global | `xai-videos-api` · xAI Videos API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 2026-11-27T05:50:58.087Z | 200 | `sha256:43b8c3d4bc01ab3aa4927c2c17b18d85687371364d8d0436437b9dd8d5494587` |
| global | `xai-batch-api` · xAI Batch API 文档 | https://docs.x.ai/developers/advanced-api-usage/batch-api | 2026-11-27T05:50:58.245Z | 200 | `sha256:dc3fdc731795f0aedc55f277f847461501ac7f06f574b696cb39cc7580b4fb41` |
| global | `xai-batches-api-reference` · xAI Batches REST API Schema | https://docs.x.ai/developers/rest-api-reference/inference/batches | 2026-11-27T05:50:58.174Z | 200 | `sha256:061f8d496e68551d144d10ef50d07bdfe32f115ef6917da31d6de0154d63bc94` |
| global | `xai-files-api` · xAI Files API 管理文档 | https://docs.x.ai/developers/files/managing-files | 2026-11-27T05:50:58.330Z | 200 | `sha256:c86d7cc39c29cc19a920faa5121ad2fd0fb52b6f3ed489beb12edf4e7f285f5e` |
| global | `xai-collections-api` · xAI Collections 管理 API 参考 | https://docs.x.ai/developers/rest-api-reference/collections/collection | 2026-11-27T05:50:58.723Z | 200 | `sha256:f69cd4a1c6083248f482da1f402c0015cf4da0840c1fa03211daee777e8cef5c` |
| global | `xai-tools-overview` · xAI 服务端工具总览 | https://docs.x.ai/developers/tools/overview | 2026-11-27T05:50:58.807Z | 200 | `sha256:4454ac7fb13009472a45550f4cd29bf7800dcf146b6ae85c65645077d13a2da8` |
| global | `xai-web-search` · xAI Web Search 工具文档 | https://docs.x.ai/developers/tools/web-search | 2026-11-27T05:50:58.819Z | 200 | `sha256:cb55a676213b9151df53401dab5dab2e028919b4776dc1696f5ac789bd14fdd4` |
| global | `xai-x-search` · xAI X Search 工具文档 | https://docs.x.ai/developers/tools/x-search | 2026-11-27T05:50:58.938Z | 200 | `sha256:4ab4e97ac3a1f1bf1922d6423e573743193b866c4d82b9b98f35e77dfd70ef27` |
| global | `xai-collections-search` · xAI Collections Search 工具与 Responses API 文件搜索 | https://docs.x.ai/developers/tools/collections-search | 2026-11-27T05:50:58.908Z | 200 | `sha256:ed4a166dab07239999ad6837bbfada3463373d1014e4a022901b1441a74ad0b5` |
| global | `xai-code-execution` · xAI Code Execution 工具输入与处理说明 | https://docs.x.ai/developers/tools/code-execution | 2026-11-27T05:50:59.483Z | 200 | `sha256:b87363c93b4b16d69eed591fec7739f4272b33a9a8c338b7a5bc427675017c0d` |
| global | `xai-tool-streaming-sync` · xAI 服务端工具调用输入与结果输出方式 | https://docs.x.ai/developers/tools/streaming-and-sync | 2026-11-27T05:50:59.023Z | 200 | `sha256:c4e07ed336af6c9cff2974a3a5fe1813b435432adffce63bfa4c09d3e8c26c9d` |
| global | `xai-voice` · xAI Voice API 通用能力与价格说明 | https://docs.x.ai/developers/model-capabilities/audio/voice | 2026-11-27T05:50:59.752Z | 200 | `sha256:119aa6307beda51e7737c8d448929424befe561acda3af7f28a9bf1f67fd745b` |
| global | `xai-speech-to-speech` · xAI Speech-to-Speech WebSocket 协议与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech | 2026-11-27T05:50:59.638Z | 200 | `sha256:718ad06e566f442345daed3a6da163e0b5dc518f1f331f1de6dd4cec50279690` |
| global | `xai-speech-to-text` · xAI Speech-to-Text 默认模型与接口 | https://docs.x.ai/developers/models/speech-to-text | 2026-11-27T05:50:59.881Z | 200 | `sha256:4ac70847490171af8298df5dc681984ebee2c1f8c8fd684ed44de4ac21fbaf6c` |
| global | `xai-speech-to-text-guide` · xAI Speech-to-Text 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text | 2026-11-27T05:51:00.035Z | 200 | `sha256:0bfa698d0c9c2cb236ce00d1f0a51463605d33b745c2c01c1950933e9812be83` |
| global | `xai-text-to-speech` · xAI Text-to-Speech 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/text-to-speech | 2026-11-27T05:51:00.667Z | 200 | `sha256:c524ce270c69eace531ebeeb3f32347b714ee00a65eabf5f975ece9f7c1d0410` |
| global | `xai-regions` · xAI 区域端点与模型可用范围 | https://docs.x.ai/developers/advanced-api-usage/regions | 2026-11-27T05:51:00.122Z | 200 | `sha256:bda56ec61a32bdb00620898f0e23eafb48f391bb70646331a367ca8fd5cf06f5` |
| global | `xai-imagine` · xAI Imagine API 图像与视频能力说明 | https://docs.x.ai/developers/model-capabilities/imagine | 2026-11-27T05:51:00.774Z | 200 | `sha256:11f0ab3edcbd12cede027388a296aab92016f7705e4cc50e7ea40cd066d617e9` |

## xai 专属证据与核对说明

### xAI 官方通用资料采集候选

- 来源快照：25 份
- 文档观察：25 份；模型 ID 提及：94 条
- 已生成 Offering：9 个

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
