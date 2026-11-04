import { computed, onBeforeUnmount, onMounted, ref, type ComponentPublicInstance } from 'vue';
import { defaultRangeExtractor, useWindowVirtualizer, type Range } from '@tanstack/vue-virtual';

/** 窗口滚动的动态行高虚拟列表；占位高度保留在正常文档流中。 */
export function useWindowRows(options: {
  count: () => number;
  key: (index: number) => string | number;
  estimate: number;
  threshold: number;
}) {
  const root = ref<HTMLElement | null>(null);
  const margin = ref(0);
  const printing = ref(false);
  const focused = ref<number | null>(null);
  const enabled = computed(() => options.count() >= options.threshold && !printing.value);
  const keys = computed(() => Array.from({ length: options.count() }, (_, index) => options.key(index)));
  const virtualizer = useWindowVirtualizer<HTMLElement>(computed(() => {
    const itemKeys = keys.value;
    return ({
    count: options.count(),
    getItemKey: (index: number) => itemKeys[index] ?? index,
    estimateSize: () => options.estimate,
    overscan: 12,
    scrollMargin: margin.value,
    enabled: enabled.value,
    initialRect: { width: window.innerWidth, height: window.innerHeight },
    rangeExtractor: (range: Range) => {
      const indexes = defaultRangeExtractor(range);
      if (focused.value !== null && focused.value < options.count() && !indexes.includes(focused.value)) {
        const start = Math.min(focused.value, indexes[0] ?? focused.value);
        const end = Math.max(focused.value, indexes.at(-1) ?? focused.value);
        return Array.from({ length: end - start + 1 }, (_, index) => start + index);
      }
      return indexes;
    },
  });
  }));
  const rows = computed(() => enabled.value
    ? virtualizer.value.getVirtualItems().map((item) => ({ index: item.index, key: options.key(item.index) }))
    : Array.from({ length: options.count() }, (_, index) => ({ index, key: options.key(index) })));
  const paddingTop = computed(() => enabled.value
    ? Math.max(0, (virtualizer.value.getVirtualItems()[0]?.start ?? margin.value) - margin.value) : 0);
  const paddingBottom = computed(() => {
    if (!enabled.value) return 0;
    const last = virtualizer.value.getVirtualItems().at(-1);
    return Math.max(0, virtualizer.value.getTotalSize() - ((last?.end ?? margin.value) - margin.value));
  });
  let observer: ResizeObserver | undefined;
  let frame = 0;
  function refreshMargin(): void {
    frame = 0;
    if (root.value) margin.value = root.value.getBoundingClientRect().top + window.scrollY;
  }
  function scheduleMargin(): void {
    if (!frame) frame = requestAnimationFrame(refreshMargin);
  }
  function onFind(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'f') printing.value = true;
  }
  function beforePrint(): void { printing.value = true; }
  function afterPrint(): void { printing.value = false; }
  function onFocus(event: FocusEvent): void {
    const element = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-index]') : null;
    focused.value = element ? Number(element.dataset.index) : null;
  }
  function onBlur(event: FocusEvent): void {
    if (!(event.relatedTarget instanceof Node) || !root.value?.contains(event.relatedTarget)) focused.value = null;
  }
  function measure(element: Element | ComponentPublicInstance | null): void {
    if (!enabled.value) return;
    virtualizer.value.measureElement(element instanceof HTMLElement ? element : null);
  }
  onMounted(() => {
    refreshMargin();
    observer = new ResizeObserver(scheduleMargin);
    if (root.value) {
      observer.observe(root.value);
      const page = root.value.closest('.pl-page');
      if (page) observer.observe(page);
      root.value.addEventListener('focusin', onFocus);
      root.value.addEventListener('focusout', onBlur);
    }
    window.addEventListener('scroll', scheduleMargin, { passive: true });
    window.addEventListener('resize', scheduleMargin, { passive: true });
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('keydown', onFind);
    window.addEventListener('afterprint', afterPrint);
  });
  onBeforeUnmount(() => {
    observer?.disconnect();
    if (frame) cancelAnimationFrame(frame);
    root.value?.removeEventListener('focusin', onFocus);
    root.value?.removeEventListener('focusout', onBlur);
    window.removeEventListener('scroll', scheduleMargin);
    window.removeEventListener('resize', scheduleMargin);
    window.removeEventListener('beforeprint', beforePrint);
    window.removeEventListener('keydown', onFind);
    window.removeEventListener('afterprint', afterPrint);
  });
  return { root, rows, paddingTop, paddingBottom, measure, enabled };
}
