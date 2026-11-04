import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';

// `new URL(...).pathname` 不会解码百分号：仓库路径里含非 ASCII 字符时
// （例如本地检出目录名是中文）会得到 `%E6%96%87...` 这种错误路径。
// 必须用 fileURLToPath 解码。
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(root, 'frontend', 'dist');
const datasetRoot = path.join(root, 'dist', 'assets', 'datasets');
const siteOrigin = 'https://providerlist.dev';

const readJson = async (name) => JSON.parse(await fs.readFile(path.join(datasetRoot, name), 'utf8'));
const htmlEscape = (value) => String(value ?? '').replace(/[&<>"']/gu, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));
const jsonForHtml = (value) => JSON.stringify(value).replace(/</gu, '\\u003c');
const pageUrl = (pathname) => `${siteOrigin}${pathname.endsWith('/') ? pathname : `${pathname}/`}`;
const marketLabel = (market) => ({ cn: 'China', global: 'Global' })[market] ?? market;

function pageDocument(template, { title, description, canonical, content, structuredData }) {
  const meta = [
    `<title>${htmlEscape(title)}</title>`,
    `<meta name="description" content="${htmlEscape(description)}" />`,
    `<link rel="canonical" href="${htmlEscape(canonical)}" />`,
    `<meta property="og:title" content="${htmlEscape(title)}" />`,
    `<meta property="og:description" content="${htmlEscape(description)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${htmlEscape(canonical)}" />`,
    '<meta name="twitter:card" content="summary" />',
    `<script type="application/ld+json">${jsonForHtml(structuredData)}</script>`,
  ].join('\n    ');
  return template
    .replace('<html lang="zh-CN"', '<html lang="en"')
    .replace(/<title>[\s\S]*?<\/title>/u, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>/u, '')
    .replace('</head>', `    ${meta}\n  </head>`)
    .replace('<div id="app"></div>', `<div id="app">${content}</div>`);
}

function listItem(href, title, detail = '') {
  return `<li><a href="${htmlEscape(href)}">${htmlEscape(title)}</a>${detail ? ` <span>${htmlEscape(detail)}</span>` : ''}</li>`;
}

function webPageData({ title, description, canonical, breadcrumbs = [], entity }) {
  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonical,
    isPartOf: { '@type': 'WebSite', name: 'ProviderList', url: `${siteOrigin}/` },
  };
  if (breadcrumbs.length) page.breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: crumb.url })),
  };
  return entity ? { '@context': 'https://schema.org', '@graph': [page, entity] } : page;
}

async function writePage(template, pathname, page) {
  const target = path.join(outputRoot, pathname.replace(/^\/+|\/+$/gu, ''), 'index.html');
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, pageDocument(template, page));
}

function modelPath(model) {
  const slug = model.id.slice(`${model.developer_id}/`.length);
  return `/models/${encodeURIComponent(model.developer_id)}/${slug.split('/').map(encodeURIComponent).join('/')}/`;
}

async function main() {
  const template = await fs.readFile(path.join(outputRoot, 'index.html'), 'utf8');
  const [catalog, modelRegistry, providerIndex] = await Promise.all([
    readJson('catalog-current.json'),
    readJson('models.json'),
    readJson('providers.json'),
  ]);
  const models = modelRegistry.models ?? [];
  const modelById = new Map(models.map((model) => [model.id, model]));
  const providerDocs = new Map();
  await Promise.all((providerIndex.providers ?? []).map(async (summary) => {
    providerDocs.set(summary.id, await readJson(`providers/${summary.id}.json`));
  }));
  const modelProviders = new Map();
  for (const offering of catalog.offerings ?? []) {
    if (!offering.model_ref || !modelById.has(offering.model_ref)) continue;
    const matches = modelProviders.get(offering.model_ref) ?? [];
    matches.push({ providerId: offering.provider_id, serviceId: offering.service_id, modelId: offering.id, status: offering.status ?? 'unknown' });
    modelProviders.set(offering.model_ref, matches);
  }

  const urls = new Map();
  const addUrl = (url, modified) => urls.set(url, modified ? new Date(modified).toISOString().slice(0, 10) : undefined);
  addUrl(pageUrl('/providers'));
  addUrl(pageUrl('/models'));
  addUrl(pageUrl('/docs/api'));

  const providerItems = (providerIndex.providers ?? []).map((provider) => {
    const href = `/providers/${encodeURIComponent(provider.id)}/`;
    const markets = (provider.account_markets ?? []).map(marketLabel).join(' / ');
    const document = providerDocs.get(provider.id);
    const modelCount = (document?.services ?? []).reduce((total, service) => total + (service.offerings?.length ?? 0), 0);
    addUrl(pageUrl(href), document?.updated_at);
    return listItem(href, provider.name, `${markets} · ${modelCount} model supply records`);
  }).join('\n');
  const providersPage = {
    title: 'AI Providers, API access and pricing — ProviderList',
    description: 'Browse AI Providers by market, API access, current model supply, capabilities, and pricing.',
    canonical: pageUrl('/providers'),
    content: `<main class="pl-container pl-page"><header><h1>AI Providers</h1><p>${htmlEscape(providerIndex.providers?.length ?? 0)} Providers in the current catalog</p></header><ul>${providerItems}</ul></main>`,
    structuredData: webPageData({
      title: 'AI Providers',
      description: 'Browse current AI Provider supply and API access.',
      canonical: pageUrl('/providers'),
      entity: {
        '@type': 'SoftwareApplication',
        name: 'ProviderList',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        url: pageUrl('/providers'),
        description: 'A public directory of AI Providers, current model supply, API access, capabilities, and pricing.',
      },
    }),
  };
  await writePage(template, '/providers', providersPage);

  const faqItems = [
    ['Do public API requests require authentication?', 'No. The public API serves read-only JSON and does not accept writes.'],
    ['What is the difference between the Model and Offering lists?', 'The Model list describes canonical models. The Offering list describes reviewed Provider supply. A model in the registry is not necessarily currently available from a Provider.'],
    ['Does “active” mean the API has been tested?', 'No. Supply status is based on public sources and does not confirm live account eligibility or successful API calls.'],
  ];
  const faqTitle = 'Public API — ProviderList';
  const faqDescription = 'Read the ProviderList public API reference, endpoint list, response schemas, and common questions.';
  await writePage(template, '/docs/api', {
    title: faqTitle,
    description: faqDescription,
    canonical: pageUrl('/docs/api'),
    content: `<main class="pl-container pl-page"><header><h1>Public API</h1><p>${htmlEscape(faqDescription)}</p></header><ul>${listItem('/v1/manifest.json', 'Release manifest')}${listItem('/v1/models.json', 'Canonical Model registry')}${listItem('/v1/offerings.json', 'Reviewed Provider offerings')}${listItem('/v1/providerlist.json', 'Custom ProviderList JSON')}</ul><section><h2>Frequently asked questions</h2>${faqItems.map(([question, answer]) => `<article><h3>${htmlEscape(question)}</h3><p>${htmlEscape(answer)}</p></article>`).join('')}</section></main>`,
    structuredData: webPageData({
      title: faqTitle,
      description: faqDescription,
      canonical: pageUrl('/docs/api'),
      entity: {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    }),
  });

  for (const summary of providerIndex.providers ?? []) {
    const document = providerDocs.get(summary.id);
    if (!document) continue;
    const provider = document.provider;
    const href = `/providers/${encodeURIComponent(summary.id)}/`;
    const canonical = pageUrl(href);
    const title = `${provider.name} API access, models and pricing — ProviderList`;
    const description = `Browse ${provider.name} API access, current model supply, markets, and published pricing on ProviderList.`;
    const marketSections = (document.services ?? []).map((service) => {
      const items = (service.offerings ?? []).map((offering) => {
        const model = modelById.get(offering.model_ref);
        const modelHref = model ? modelPath(model) : '';
        return `<li>${modelHref ? `<a href="${htmlEscape(modelHref)}">${htmlEscape(offering.id)}</a>` : `<code>${htmlEscape(offering.id)}</code>`} <span>${htmlEscape(offering.status ?? 'unknown')}${model ? ` · ${htmlEscape(model.name)}` : ''}</span></li>`;
      }).join('\n');
      return `<section><h2>${htmlEscape(marketLabel(service.id))} market</h2><p>${(service.offerings ?? []).length} model offerings</p><ul>${items}</ul></section>`;
    }).join('\n');
    const canonicalPage = pageUrl(href);
    await writePage(template, href, {
      title,
      description,
      canonical,
      content: `<main class="pl-container pl-page"><header><h1>${htmlEscape(provider.name)}</h1><p>${htmlEscape(provider.kind)} · ${htmlEscape((summary.account_markets ?? []).map(marketLabel).join(' / '))}</p><p>${htmlEscape(description)}</p></header>${marketSections}</main>`,
      structuredData: webPageData({ title, description, canonical: canonicalPage, breadcrumbs: [{ name: 'Providers', url: pageUrl('/providers') }, { name: provider.name, url: canonicalPage }] }),
    });
  }

  const modelItems = models.map((model) => {
    const href = modelPath(model);
    addUrl(pageUrl(href), model.updated_at);
    return listItem(href, model.name, `${model.developer_name} · ${model.type ?? 'Other'} · ${model.id}`);
  }).join('\n');
  await writePage(template, '/models', {
    title: 'AI model directory and pricing — ProviderList',
    description: 'Compare current AI model supply, Provider IDs, context limits, modalities, and pricing.',
    canonical: pageUrl('/models'),
    content: `<main class="pl-container pl-page"><header><h1>AI model directory</h1><p>${models.length} canonical models</p></header><ul>${modelItems}</ul></main>`,
    structuredData: webPageData({ title: 'AI model directory', description: 'Browse canonical AI models and their current Provider availability.', canonical: pageUrl('/models') }),
  });

  const types = [...new Set(models.map((model) => model.type ?? 'unknown'))].sort();
  for (const type of types) {
    const typeModels = models.filter((model) => (model.type ?? 'unknown') === type);
    const href = `/types/${encodeURIComponent(type)}/`;
    addUrl(pageUrl(href));
    const items = typeModels.map((model) => listItem(modelPath(model), model.name, `${model.developer_name} · ${model.id}`)).join('\n');
    const title = `${type} AI models and Providers — ProviderList`;
    const description = `Browse currently listed ${type} AI models, their specifications, and Provider availability.`;
    await writePage(template, href, {
      title,
      description,
      canonical: pageUrl(href),
      content: `<main class="pl-container pl-page"><header><h1>${htmlEscape(type)} models</h1><p>${typeModels.length} models in this type</p></header><ul>${items}</ul></main>`,
      structuredData: webPageData({ title, description, canonical: pageUrl(href), breadcrumbs: [{ name: 'Models', url: pageUrl('/models') }, { name: type, url: pageUrl(href) }] }),
    });
  }

  for (const model of models) {
    const href = modelPath(model);
    const canonical = pageUrl(href);
    const title = `${model.name} by ${model.developer_name} — ProviderList`;
    const supply = modelProviders.get(model.id) ?? [];
    const description = `View ${model.name} specifications and current Provider availability, model IDs, and pricing.`;
    const limits = model.limits ?? {};
    const modality = model.modalities ?? {};
    const facts = [
      model.type ? `<dt>Type</dt><dd>${htmlEscape(model.type)}</dd>` : '',
      model.release_date ? `<dt>Release date</dt><dd>${htmlEscape(model.release_date)}</dd>` : '',
      limits.context != null ? `<dt>Context limit</dt><dd>${htmlEscape(limits.context)}</dd>` : '',
      limits.input != null ? `<dt>Input limit</dt><dd>${htmlEscape(limits.input)}</dd>` : '',
      limits.output != null ? `<dt>Output limit</dt><dd>${htmlEscape(limits.output)}</dd>` : '',
      modality.input?.length ? `<dt>Input modalities</dt><dd>${htmlEscape(modality.input.join(', '))}</dd>` : '',
      modality.output?.length ? `<dt>Output modalities</dt><dd>${htmlEscape(modality.output.join(', '))}</dd>` : '',
    ].join('');
    const offers = supply.map((entry) => {
      const provider = providerIndex.providers.find((item) => item.id === entry.providerId);
      const providerHref = `/providers/${encodeURIComponent(entry.providerId)}/?service=${encodeURIComponent(entry.serviceId)}`;
      return listItem(providerHref, provider?.name ?? entry.providerId, `${marketLabel(entry.serviceId)} · ${entry.modelId} · ${entry.status}`);
    }).join('\n');
    const content = `<main class="pl-container pl-page"><nav><a href="/types/${encodeURIComponent(model.type ?? 'unknown')}/">← ${htmlEscape(model.type ?? 'Other')} models</a></nav><header><h1>${htmlEscape(model.name)}</h1><p>${htmlEscape(model.developer_name)} · ${htmlEscape(model.type ?? 'Other')} · <code>${htmlEscape(model.id)}</code></p></header><section><h2>Model specifications</h2><dl>${facts}</dl></section><section><h2>Current Provider supply</h2><p>${supply.length} supply records</p><ul>${offers}</ul></section></main>`;
    await writePage(template, href, {
      title,
      description,
      canonical,
      content,
      structuredData: webPageData({
        title,
        description,
        canonical,
        breadcrumbs: [{ name: 'Models', url: pageUrl('/models') }, { name: model.name, url: canonical }],
        entity: {
          '@type': 'Product',
          name: model.name,
          description,
          category: model.type ?? 'AI model',
          brand: { '@type': 'Brand', name: model.developer_name },
          url: canonical,
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Model ID', value: model.id },
            ...(limits.context != null ? [{ '@type': 'PropertyValue', name: 'Context limit', value: limits.context }] : []),
          ],
        },
      }),
    });
  }

  const lastmod = catalog.generated_at ? new Date(catalog.generated_at).toISOString().slice(0, 10) : undefined;
  for (const [url, modified] of urls) if (!modified && lastmod) urls.set(url, lastmod);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...urls].map(([url, modified]) => `  <url><loc>${htmlEscape(url)}</loc>${modified ? `<lastmod>${modified}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`;
  await fs.writeFile(path.join(outputRoot, 'sitemap.xml'), sitemap);
  await fs.writeFile(path.join(outputRoot, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`);
  console.log(`Pre-rendered ${providerIndex.providers?.length ?? 0} Providers, ${models.length} Models, ${types.length} type pages; sitemap has ${urls.size} URLs.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
