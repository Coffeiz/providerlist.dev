import type { CapturedDocument } from '../document-set.ts';

export type AlibabaApiProtocol = 'openai' | 'anthropic';

export interface AlibabaApiEndpointFact {
  readonly service_id: 'cn' | 'global';
  readonly id: string;
  readonly protocol: AlibabaApiProtocol;
  readonly base_url: string;
  readonly api_region: string;
  readonly region_code: string;
  readonly source_id: string;
  readonly locator: string;
}

export interface AlibabaApiRouteFact {
  readonly service_id: 'cn' | 'global';
  readonly endpoint_id: string;
  readonly protocol: AlibabaApiProtocol | 'responses';
  readonly method: string;
  readonly path: string;
  readonly provider_model_ids: readonly string[];
  readonly source_id: string;
  readonly locator: string;
}

export interface AlibabaApiFacts {
  readonly endpoints: readonly AlibabaApiEndpointFact[];
  readonly routes: readonly AlibabaApiRouteFact[];
  readonly review_items: readonly { readonly source_id: string; readonly locator: string; readonly message: string }[];
}

/** Plan endpoints use dedicated hosts and must remain separate from PAYG Workspace endpoints. */
export function extractAlibabaTokenPlanEndpoints(documents: readonly CapturedDocument[]): AlibabaApiEndpointFact[] {
  const facts: AlibabaApiEndpointFact[] = [];
  const sources = [
    { id: 'alibaba-api-compatibility', service_id: 'cn' as const },
    { id: 'alibaba-global-api-base-url', service_id: 'global' as const },
  ];
  for (const configured of sources) {
    const document = documents.find(({ source }) => source.id === configured.id);
    if (!document) continue;
    const body = document.body.replace(/\\/g, '');
    const urlPattern = /https:\/\/token-plan\.([a-z0-9-]+)\.maas\.aliyuncs\.com(\/[^\s"'<>)]*)/gi;
    for (const match of body.matchAll(urlPattern)) {
      const regionCode = match[1]?.toLowerCase();
      const suffix = match[2]?.replace(/[.,;]+$/, '');
      const protocol: AlibabaApiProtocol | undefined = suffix === '/compatible-mode/v1' ? 'openai'
        : suffix === '/apps/anthropic' ? 'anthropic' : undefined;
      if (!regionCode || !REGIONS[regionCode] || !protocol) continue;
      const regionPart = regionCode === 'ap-southeast-1' ? 'sg' : regionCode;
      const id = configured.service_id === 'cn'
        ? `cn-token-plan-${protocol}`
        : `global-${regionPart}-token-plan-${protocol}`;
      facts.push({
        service_id: configured.service_id,
        id,
        protocol,
        base_url: match[0]!.replace(/[.,;]+$/, ''),
        api_region: REGIONS[regionCode]!,
        region_code: regionCode,
        source_id: configured.id,
        locator: '#token-plan',
      });
    }
  }
  return [...new Map(facts.map((endpoint) => [`${endpoint.service_id}/${endpoint.id}`, endpoint])).values()];
}

const REGIONS: Readonly<Record<string, string>> = {
  'cn-beijing': '华北2（北京）',
  'ap-southeast-1': '新加坡',
  'ap-northeast-1': '日本（东京）',
  'eu-central-1': '德国（法兰克福）',
  'us-east-1': '美国（弗吉尼亚）',
  'cn-hongkong': '中国香港',
};

function text(value: string): string {
  return value.replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ').trim();
}

function rows(table: string): { readonly html: string; readonly cells: readonly string[] }[] {
  return [...table.matchAll(/<tr\b[\s\S]*?<\/tr>/gi)].map((row) => {
    const html = row[0] ?? '';
    const cells = [...html.matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/gi)].map((cell) => text(cell[1] ?? ''));
    return { html, cells };
  });
}

function endpointId(serviceId: 'cn' | 'global', regionCode: string, protocol: AlibabaApiProtocol): string {
  const regionPart = regionCode === 'cn-beijing' ? 'cn' : regionCode.split('-').at(0) === 'cn' ? 'hk'
    : regionCode === 'ap-southeast-1' ? 'sg' : regionCode === 'ap-northeast-1' ? 'jp'
      : regionCode === 'eu-central-1' ? 'de' : regionCode === 'us-east-1' ? 'us' : regionCode.replaceAll('-', '-');
  if (serviceId === 'cn' && regionCode === 'cn-beijing') return `cn-${protocol}`;
  return serviceId === 'cn' ? `${regionPart}-${protocol}` : `global-${regionPart}-${protocol}`;
}

function parseEndpointUrls(
  html: string,
  serviceId: 'cn' | 'global',
  sourceId: string,
  locator: string,
  reviewItems: { source_id: string; locator: string; message: string }[],
): AlibabaApiEndpointFact[] {
  const facts: AlibabaApiEndpointFact[] = [];
  const normalized = html.replace(/\\/g, '');
  const urlPattern = /https:\/\/\{WorkspaceId\}\.([a-z0-9-]+)\.maas\.aliyuncs\.com(\/[^\s"'<>)]*)/gi;
  for (const match of normalized.matchAll(urlPattern)) {
    const regionCode = match[1]?.toLowerCase();
    const suffix = match[2]?.replace(/[.,;]+$/, '');
    if (!regionCode || !suffix || !REGIONS[regionCode]) {
      reviewItems.push({ source_id: sourceId, locator, message: `无法识别 Workspace Base URL：${match[0] ?? ''}` });
      continue;
    }
    if (suffix === '/api/v1' || /trial|token-plan|coding/i.test(new URL(`https://x${suffix}`).pathname)) continue;
    const protocol: AlibabaApiProtocol | undefined = suffix === '/compatible-mode/v1' ? 'openai'
      : suffix === '/apps/anthropic' ? 'anthropic' : undefined;
    if (!protocol) continue;
    if (serviceId === 'global' && regionCode === 'cn-beijing') continue;
    const id = endpointId(serviceId, regionCode, protocol);
    facts.push({ service_id: serviceId, id, protocol, base_url: match[0]!.replace(/[.,;]+$/, ''), api_region: REGIONS[regionCode]!, region_code: regionCode, source_id: sourceId, locator });
  }
  return facts;
}

function extractCnEndpoints(document: CapturedDocument, reviewItems: { source_id: string; locator: string; message: string }[]): AlibabaApiEndpointFact[] {
  const sectionStart = document.body.indexOf('### 按量计费');
  if (sectionStart < 0) {
    reviewItems.push({ source_id: document.source.id, locator: '#mt-payg-h', message: '未找到按量计费端点表，不能把套餐端点映射为按量端点。' });
    return [];
  }
  const tail = document.body.slice(sectionStart);
  const table = tail.match(/<table\b[\s\S]*?<\/table>/i)?.[0];
  if (!table) {
    reviewItems.push({ source_id: document.source.id, locator: '#mt-payg-h', message: '按量计费章节缺少结构化端点表。' });
    return [];
  }
  const endpoints: AlibabaApiEndpointFact[] = [];
  for (const [rowIndex, row] of rows(table).entries()) {
    const protocolText = row.cells[0] ?? '';
    const protocol: AlibabaApiProtocol | undefined = /OpenAI/i.test(protocolText) ? 'openai' : /Anthropic/i.test(protocolText) ? 'anthropic' : undefined;
    if (!protocol) continue;
    const valueCell = [...row.html.matchAll(/<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)][1]?.[1] ?? '';
    endpoints.push(...parseEndpointUrls(valueCell, 'cn', document.source.id, `#mt-payg-h/row/${rowIndex + 1}`, reviewItems));
  }
  return endpoints;
}

function extractGlobalEndpoints(document: CapturedDocument, reviewItems: { source_id: string; locator: string; message: string }[]): AlibabaApiEndpointFact[] {
  const heading = /<h[1-6]\b[^>]*id=["']workspace-dedicated-domain["'][^>]*>/i.exec(document.body);
  if (!heading || heading.index === undefined) {
    reviewItems.push({ source_id: document.source.id, locator: '#workspace-dedicated-domain', message: '未找到 Workspace 专属域名章节。' });
    return [];
  }
  const tail = document.body.slice(heading.index);
  const table = tail.match(/<table\b[\s\S]*?<\/table>/i)?.[0];
  if (!table) {
    reviewItems.push({ source_id: document.source.id, locator: '#workspace-dedicated-domain', message: 'Workspace 专属域名章节缺少端点表。' });
    return [];
  }
  const endpoints: AlibabaApiEndpointFact[] = [];
  for (const [rowIndex, row] of rows(table).entries()) {
    if (rowIndex === 0) continue;
    if (/China\s*\(Beijing\)/i.test(row.cells[0] ?? '')) continue;
    const protocolCells: readonly [number, AlibabaApiProtocol][] = [[1, 'openai'], [2, 'anthropic']];
    for (const [column, protocol] of protocolCells) {
      const valueCell = [...row.html.matchAll(/<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)][column]?.[1] ?? '';
      const parsed = parseEndpointUrls(valueCell, 'global', document.source.id, `#workspace-dedicated-domain/row/${rowIndex + 1}`, reviewItems);
      endpoints.push(...parsed.filter((endpoint) => endpoint.protocol === protocol));
      if (valueCell.includes('WorkspaceId') && !parsed.some((endpoint) => endpoint.protocol === protocol)) {
        reviewItems.push({ source_id: document.source.id, locator: `#workspace-dedicated-domain/row/${rowIndex + 1}`, message: `无法把${protocol} Workspace URL 解析为已知区域端点。` });
      }
    }
  }
  return endpoints;
}

function extractRoutes(
  document: CapturedDocument,
  endpoints: readonly AlibabaApiEndpointFact[],
  reviewItems: { source_id: string; locator: string; message: string }[],
): AlibabaApiRouteFact[] {
  const body = text(document.body).replace(/\\/g, '');
  // A model mention elsewhere on a large API page does not prove support in
  // every region. Associate model IDs only when the same code sample contains
  // both the region-specific Workspace host and an explicit model field.
  const exampleModelsByRegion = new Map<string, Set<string>>();
  for (const sample of document.body.matchAll(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi)) {
    const sampleText = text(sample[1] ?? '').replace(/\\/g, '');
    const regions = [...new Set([...sampleText.matchAll(/\{WorkspaceId\}\.([a-z0-9-]+)\.maas\.aliyuncs\.com/gi)].map((match) => match[1]!.toLowerCase()))];
    const modelIds = [...new Set([...sampleText.matchAll(/\bmodel\s*[:=]\s*["'`]?((?:qwen[0-9][A-Za-z0-9_.-]*|qwen-[A-Za-z0-9][A-Za-z0-9_./-]*|deepseek[-/][A-Za-z0-9_.-]+|kimi(?:[-/][A-Za-z0-9_.-]+)*|glm[-/][A-Za-z0-9_.-]+))/gi)].map((match) => match[1]!))];
    for (const region of regions) {
      const current = exampleModelsByRegion.get(region) ?? new Set<string>();
      modelIds.forEach((modelId) => current.add(modelId));
      exampleModelsByRegion.set(region, current);
    }
  }
  const routes: AlibabaApiRouteFact[] = [];
  const requestPattern = /POST\s+https:\/\/\{WorkspaceId\}\.([a-z0-9-]+)\.maas\.aliyuncs\.com(\/[^\s"'<>`)]+)/gi;
  for (const match of body.matchAll(requestPattern)) {
    const regionCode = match[1]?.toLowerCase();
    const fullPath = match[2]?.replace(/[.,;]+$/, '');
    if (!regionCode || !fullPath) continue;
    const protocol: AlibabaApiRouteFact['protocol'] | undefined = fullPath.endsWith('/chat/completions') ? 'openai'
      : fullPath.endsWith('/compatible-mode/v1/responses') ? 'responses'
        : fullPath.endsWith('/apps/anthropic/v1/messages') ? 'anthropic' : undefined;
    if (!protocol) continue;
    const routePath = protocol === 'openai' ? '/chat/completions' : protocol === 'responses' ? '/responses' : '/v1/messages';
    const endpointProtocol = protocol === 'responses' ? 'openai' : protocol;
    const sourceMatches = endpoints.filter((endpoint) => endpoint.protocol === endpointProtocol && endpoint.region_code === regionCode);
    const exampleModelIds = [...(exampleModelsByRegion.get(regionCode) ?? [])];
    const serviceIds = new Set(sourceMatches.map(({ service_id }) => service_id));
    const marketIsAmbiguous = serviceIds.size > 1;
    const providerModelIds = marketIsAmbiguous ? [] : exampleModelIds;
    if (marketIsAmbiguous && exampleModelIds.length) {
      reviewItems.push({
        source_id: document.source.id,
        locator: `#${regionCode}/request`,
        message: `官方代码示例列出 ${regionCode} 的精确 model ID，但该 Workspace Endpoint 同时映射到多个账号市场 Service；Route 市场归属待核对。`,
      });
    } else if (sourceMatches.length && providerModelIds.length === 0) {
      reviewItems.push({
        source_id: document.source.id,
        locator: `#${regionCode}/request`,
        message: `官方文档列出 ${regionCode} Route，但没有在同一区域的代码示例中找到精确 model ID；保留为未关联模型的 Route 线索。`,
      });
    }
    for (const endpoint of sourceMatches) {
      routes.push({
        service_id: endpoint.service_id,
        endpoint_id: endpoint.id,
        protocol,
        method: 'POST',
        path: routePath,
        provider_model_ids: providerModelIds,
        source_id: document.source.id,
        locator: document.source.id === 'alibaba-openai-chat-api' ? '#http-request' : '#http-request-url',
      });
    }
  }
  return [...new Map(routes.map((route) => [`${route.service_id}/${route.endpoint_id}/${route.protocol}/${route.path}`, route])).values()];
}

export function extractAlibabaApiFacts(documents: readonly CapturedDocument[]): AlibabaApiFacts {
  const reviewItems: { source_id: string; locator: string; message: string }[] = [];
  const byId = new Map(documents.map((document) => [document.source.id, document]));
  const endpoints = [
    ...(byId.has('alibaba-api-compatibility') ? extractCnEndpoints(byId.get('alibaba-api-compatibility')!, reviewItems) : []),
    ...(byId.has('alibaba-global-api-base-url') ? extractGlobalEndpoints(byId.get('alibaba-global-api-base-url')!, reviewItems) : []),
  ];
  const uniqueEndpoints = [...new Map(endpoints.map((endpoint) => [`${endpoint.service_id}/${endpoint.id}`, endpoint])).values()];
  const routes = [
    ...(byId.has('alibaba-openai-chat-api') ? extractRoutes(byId.get('alibaba-openai-chat-api')!, uniqueEndpoints, reviewItems) : []),
    ...(byId.has('alibaba-openai-responses-api') ? extractRoutes(byId.get('alibaba-openai-responses-api')!, uniqueEndpoints, reviewItems) : []),
    ...(byId.has('alibaba-anthropic-messages-api') ? extractRoutes(byId.get('alibaba-anthropic-messages-api')!, uniqueEndpoints, reviewItems) : []),
  ];
  if (!byId.has('alibaba-openai-chat-api')) reviewItems.push({ source_id: 'alibaba-openai-chat-api', locator: '#http-request', message: '未采集 OpenAI 兼容 Chat 官方 Route 文档。' });
  if (!byId.has('alibaba-anthropic-messages-api')) reviewItems.push({ source_id: 'alibaba-anthropic-messages-api', locator: '#http-request-url', message: '未采集 Anthropic Messages 官方 Route 文档。' });
  const uniqueReviewItems = [...new Map(reviewItems.map((item) => [
    `${item.source_id}\u0000${item.locator}\u0000${item.message}`,
    item,
  ])).values()];
  return { endpoints: uniqueEndpoints, routes, review_items: uniqueReviewItems };
}
