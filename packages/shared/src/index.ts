/**
 * 前端与流水线共用的领域逻辑入口。
 *
 * 两块内容各有自己的领域边界，所以根入口只给**命名空间**，
 * 不把两边的符号平铺到同一层——
 * 否则 `import { … } from '@providerlist/shared'` 迟早会撞名。
 *
 * 需要具体能力时直接用子路径：
 * - `@providerlist/shared/pricing/units`
 */
export * as pricing from './pricing/index.ts';
export * as capabilities from './capabilities/index.ts';
