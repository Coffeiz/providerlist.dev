/**
 * 视口与指针能力判定。
 *
 * 判定逻辑与 DOM 分离：纯函数可以单测，不依赖浏览器环境。
 * 读取媒体查询的部分做环境守卫，便于在 Node 测试里直接引入本模块。
 *
 * MediaQueryList 是「活」的——`.matches` 随环境变化而更新，
 * 因此可以缓存实例反复读取，不必在每次滚动帧里重建查询。
 */

/** 指针能力快照。 */
export interface PointerCapability {
  /** `(hover: hover)` —— 指针能悬停。 */
  hover: boolean;
  /** `(any-pointer: fine)` —— 存在精确指针（鼠标、触控板）。 */
  anyFine: boolean;
}

const HOVER_QUERY = '(hover: hover)';
const ANY_FINE_QUERY = '(any-pointer: fine)';

let cachedHover: MediaQueryList | null = null;
let cachedAnyFine: MediaQueryList | null = null;

function matchMediaSafe(query: string): MediaQueryList | null {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return null;
  return window.matchMedia(query);
}

function hoverQuery(): MediaQueryList | null {
  cachedHover ??= matchMediaSafe(HOVER_QUERY);
  return cachedHover;
}

function anyFineQuery(): MediaQueryList | null {
  cachedAnyFine ??= matchMediaSafe(ANY_FINE_QUERY);
  return cachedAnyFine;
}

/**
 * 读取当前设备的指针能力。
 *
 * 用 `any-pointer` 而不是 `pointer`：iPad 外接触控板时主指针仍是触摸，
 * 但用户确实有精确指针可用，浮条对他有价值。
 */
export function readPointerCapability(): PointerCapability {
  return {
    hover: hoverQuery()?.matches ?? false,
    anyFine: anyFineQuery()?.matches ?? false,
  };
}

/**
 * 是否应该提供「横向滚动浮条」。
 *
 * 浮条是压在视口下缘的 `position: fixed` 元素，只有精确指针设备才需要它：
 * 桌面端表格宽于视口时，表格自身的横向滚动条在视口之外，
 * 用户需要一个始终可见、可拖动的抓手。
 *
 * 纯触摸设备不挂，两个独立原因：
 *
 * 1. **它没有功能价值。** iOS Safari 自 iOS 14 起、Android Chrome 移动端
 *    都不再渲染 `::-webkit-scrollbar` 定制样式，滑块根本不画。
 *    浮条只剩一条 14px 高的纯背景色带，横在内容底部像渲染错误。
 * 2. **它会污染 Safari 原生底栏。** 浮条紧贴视口下缘，属于 Safari
 *    地址栏的遮挡边缘。视口边缘附近存在 fixed / sticky 视口约束元素时，
 *    Safari 会放弃 blur scroll-edge effect，改用实色 color extension，
 *    底部原生栏于是被涂成一块与站点底色不一致的色块
 *    （WebKit Bug 301756）。这层「底色」不是网页能直接画出来的，
 *    只能靠让出遮挡边缘来避免。
 *
 * 触摸端本来就能直接横向滑动表格容器，浮条没有替代价值。
 */
export function supportsFloatingScrollbar(capability: PointerCapability): boolean {
  return capability.hover && capability.anyFine;
}

/**
 * 订阅指针能力变化。
 *
 * 混合设备（iPad 外接鼠标、触屏笔记本）接入精确指针后，
 * 浮条应当立刻可用——否则用户要等刷新页面才能拿到横向滚动抓手。
 * 返回取消订阅函数。
 */
export function watchPointerCapability(onChange: () => void): () => void {
  const queries = [hoverQuery(), anyFineQuery()].filter(
    (query): query is MediaQueryList => query !== null,
  );
  for (const query of queries) query.addEventListener('change', onChange);
  return () => {
    for (const query of queries) query.removeEventListener('change', onChange);
  };
}
