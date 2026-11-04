/**
 * 公开 API 端点清单。
 *
 * 这里的每一条都对应**真实发布**的静态产物——页面上的路径都能直接请求到。
 * 清单放在数据层而不是写死在模板里：页面只负责渲染，
 * 端点增删时不会出现「文档说有、产物里没有」。
 *
 * 语义约定（见 docs/architecture.md）：
 * - 全部只读，GET 即用，无鉴权。
 * - 响应是公开稳定契约；站点内部索引位于 `/assets/datasets/`，不属于 API。
 * - `/v1/*.json` 必须是 JSON；不存在时返回 404，而不是 SPA 的 index.html。
 */

export interface ApiEndpoint {
  /** 相对站点根的路径。 */
  readonly path: string;
  /** 用途标签——一句话说明这条路由给谁用。 */
  readonly title: string;
  /**
   * 只在对应产物存在时才展示。
   *
   * 参考汇率是**可选派生层**：没有快照就没有这条路由，
   * 摆一个必然 404 的入口比不摆更糟。
   */
  readonly requiresFx?: boolean;
}

/** 页面首屏展示的端点。其余端点见 `/v1/manifest.json` 的 files 清单。 */
export const API_ENDPOINTS: readonly ApiEndpoint[] = [
  { title: '单个服务商', path: '/v1/providers/{provider_id}.json' },
  { title: '完整规范模型目录', path: '/v1/models.json' },
  { title: '按类型模型列表', path: '/v1/models/type/{type}.json' },
  { title: '所有类型模型列表', path: '/v1/models/type/all.json' },
  { title: '单个规范模型', path: '/v1/models/{developer_id}/{model_slug}.json' },
  { title: '供应项列表', path: '/v1/offerings.json' },
  { title: '参考汇率', path: '/v1/fx.json', requiresFx: true },
  { title: '服务商与供应项 Schema', path: '/v1/schema/public-provider.schema.json' },
  { title: '发布清单', path: '/v1/manifest.json' },
];

export interface ApiSchema {
  readonly path: string;
  readonly title: string;
}

/** 随产物一起发布的公开 JSON Schema。 */
export const API_SCHEMAS: readonly ApiSchema[] = [
  { title: '服务商 JSON', path: '/v1/schema/public-provider.schema.json' },
  { title: '规范模型注册表', path: '/v1/schema/model-registry.schema.json' },
  { title: '单个规范模型', path: '/v1/schema/model.schema.json' },
  { title: '模型列表', path: '/v1/schema/model-list.schema.json' },
  { title: '供应项列表', path: '/v1/schema/offering-list.schema.json' },
  { title: 'Manifest', path: '/v1/schema/manifest.schema.json' },
  { title: '参考汇率', path: '/v1/schema/fx-reference.schema.json' },
];
