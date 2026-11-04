import { cpSync, existsSync, readFileSync, rmSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { handleCustomQuery } from '../apps/worker/src/custom-query.ts';

/**
 * Demo 站点配置。
 *
 * 站点私有数据集与稳定公开 API 分开发布。这里用 vite 中间件分别挂载
 * `dist/assets/datasets/**` 和 `dist/v1/**`，
 * 让前端在开发态也能读到真实构建产物。
 *
 * 构建态则由 `providerlist-catalog-copy` 把同一份产物复制进站点产物目录，
 * 使 `frontend/dist` 自包含——否则部署后站点会 404 并渲染成空列表。
 */
const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const catalogDist = `${repoRoot}dist`;
const siteDist = fileURLToPath(new URL('./dist', import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'providerlist-catalog-copy',
      apply: 'build',
      closeBundle() {
        const source = `${catalogDist}/v1`;
        const datasetSource = `${catalogDist}/assets/datasets`;
        if (!existsSync(source) || !existsSync(datasetSource)) {
          this.error(
            '未找到 catalog/API 构建产物。请先在仓库根目录运行 `pnpm build:catalog`。',
          );
          return;
        }
        const target = `${siteDist}/v1`;
        rmSync(target, { recursive: true, force: true });
        cpSync(source, target, { recursive: true });
        const datasetTarget = `${siteDist}/assets/datasets`;
        rmSync(datasetTarget, { recursive: true, force: true });
        cpSync(datasetSource, datasetTarget, { recursive: true });
      },
    },
    {
      name: 'providerlist-catalog-dev',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const requestUrl = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
          if (requestUrl.pathname !== '/v1/providerlist.json') {
            next();
            return;
          }

          try {
            const request = new Request(requestUrl, {
              method: req.method ?? 'GET',
              headers: req.headers as HeadersInit,
            });
            const response = await handleCustomQuery(request, {
              async fetch(assetRequest) {
                const assetUrl = new URL(assetRequest.url);
                const assetPath = resolve(catalogDist, `.${decodeURIComponent(assetUrl.pathname)}`);
                if (!assetPath.startsWith(`${resolve(catalogDist)}${sep}`)) {
                  return new Response(null, { status: 404 });
                }
                if (!existsSync(assetPath)) {
                  return new Response(null, { status: 404 });
                }
                return new Response(readFileSync(assetPath), {
                  headers: { 'content-type': 'application/json; charset=utf-8' },
                });
              },
            });

            res.statusCode = response.status;
            response.headers.forEach((value, key) => res.setHeader(key, value));
            if (response.body) {
              res.end(Buffer.from(await response.arrayBuffer()));
            } else {
              res.end();
            }
          } catch (cause) {
            next(cause instanceof Error ? cause : new Error('Failed to serve the local ProviderList API.'));
          }
        });

        const serveStatic = (mount: string, sourceRoot: string) => server.middlewares.use(mount, (req, res, next) => {
          const url = req.url ?? '';
          const filePath = `${sourceRoot}${url.split('?')[0] ?? ''}`;
          if (!filePath.startsWith(catalogDist)) {
            next();
            return;
          }
          if (!existsSync(filePath)) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: { code: 'not_found', message: filePath } }));
            return;
          }
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(readFileSync(filePath));
        });
        serveStatic('/v1', `${catalogDist}/v1`);
        serveStatic('/assets/datasets', `${catalogDist}/assets/datasets`);
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5178,
    host: '127.0.0.1',
    // 开发服务器可能被通过域名访问（如 devserver 上的 myhome.coffeiz.space）。
    // Vite 6 默认只允许 localhost 与 IP，域名请求会被 host 校验拦下并返回 403。
    // 这里显式放行开发域名；生产构建不受影响。
    allowedHosts: ['myhome.coffeiz.space'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
