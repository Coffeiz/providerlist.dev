/**
 * Vue SFC 类型的全局声明。
 * 让 `vue-tsc` 能识别 `*.vue` 模块并对模板做类型检查。
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}
