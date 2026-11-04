<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { t } from '../i18n';
import { readPointerCapability, supportsFloatingScrollbar, watchPointerCapability } from '../composables/viewport';

let observer: MutationObserver | undefined;
let activeScrollWrapper: HTMLElement | null = null;
let floatingScrollbar: HTMLDivElement | null = null;
let animationFrame = 0;
let stickyHeader: HTMLDivElement | null = null;
let activeHeaderTable: HTMLTableElement | null = null;
let stopWatchingPointer: (() => void) | null = null;

function stickyTop(): number {
  return document.querySelector('.app-header-inner')?.getBoundingClientRect().bottom ?? 0;
}

function renderStickyHeader(wrapper: HTMLElement, table: HTMLTableElement): void {
  if (!stickyHeader) return;
  if (activeHeaderTable !== table) {
    const clone = table.cloneNode(false) as HTMLTableElement;
    table.querySelectorAll(':scope > colgroup, :scope > thead').forEach((part) => clone.append(part.cloneNode(true)));
    clone.setAttribute('aria-hidden', 'true');
    clone.style.width = `${table.scrollWidth}px`;
    clone.style.minWidth = `${table.scrollWidth}px`;
    clone.style.tableLayout = 'fixed';
    const cells = clone.querySelectorAll<HTMLTableCellElement>('thead tr:first-child th');
    table.querySelectorAll<HTMLTableCellElement>('thead tr:first-child th').forEach((cell, index) => {
      const target = cells[index];
      if (target) target.style.width = `${cell.getBoundingClientRect().width}px`;
    });
    stickyHeader.replaceChildren(clone);
    activeHeaderTable = table;
  }
  const rect = wrapper.getBoundingClientRect();
  const top = stickyTop();
  const headerHeight = table.querySelector('thead')?.getBoundingClientRect().height ?? 0;
  const availableHeight = Math.max(0, table.getBoundingClientRect().bottom - top);
  const visibleHeight = Math.min(headerHeight, availableHeight);
  stickyHeader.style.top = `${top}px`;
  stickyHeader.style.left = `${rect.left}px`;
  stickyHeader.style.width = `${wrapper.clientWidth}px`;
  stickyHeader.style.height = `${visibleHeight}px`;
  stickyHeader.style.display = 'block';
  const clone = stickyHeader.firstElementChild as HTMLTableElement | null;
  if (clone) clone.style.transform = `translate(-${wrapper.scrollLeft}px, ${visibleHeight - headerHeight}px)`;
}

function activateStickyHeaderSort(event: MouseEvent): void {
  if (!(event.target instanceof Element) || !stickyHeader?.contains(event.target)) return;
  const sourceButton = event.target.closest<HTMLButtonElement>('.pl-table-sort-button');
  if (!sourceButton) return;

  const clonedHeader = sourceButton.closest('th');
  const clonedHeaders = stickyHeader.querySelectorAll('thead tr:first-child th');
  const index = clonedHeader ? [...clonedHeaders].indexOf(clonedHeader) : -1;
  if (index < 0) return;

  activeHeaderTable
    ?.querySelectorAll<HTMLTableCellElement>('thead tr:first-child th')[index]
    ?.querySelector<HTMLButtonElement>('.pl-table-sort-button')
    ?.click();
}

function renderFloatingScrollbar(wrapper: HTMLElement, table: HTMLTableElement): void {
  if (!floatingScrollbar) return;
  const wrapperRect = wrapper.getBoundingClientRect();
  const content = floatingScrollbar.firstElementChild as HTMLDivElement | null;
  if (content) content.style.width = `${table.scrollWidth}px`;
  floatingScrollbar.style.left = `${wrapperRect.left}px`;
  floatingScrollbar.style.width = `${wrapper.clientWidth}px`;
  floatingScrollbar.style.display = 'block';

  if (activeScrollWrapper !== wrapper || floatingScrollbar.scrollLeft !== wrapper.scrollLeft) {
    floatingScrollbar.scrollLeft = wrapper.scrollLeft;
  }
  activeScrollWrapper = wrapper;
}

function update(): void {
  animationFrame = 0;
  if (!floatingScrollbar) return;

  const tables = [...document.querySelectorAll<HTMLElement>('.pl-table-wrap')]
    .map((wrapper) => ({ wrapper, table: wrapper.querySelector<HTMLTableElement>('.pl-table') }))
    .filter((item): item is { wrapper: HTMLElement; table: HTMLTableElement } => item.table !== null);

  const top = stickyTop();
  const headerCandidate = tables.find(({ table }) => {
    const head = table.querySelector('thead')?.getBoundingClientRect();
    return head && head.top < top && table.getBoundingClientRect().bottom > top;
  });
  if (headerCandidate) renderStickyHeader(headerCandidate.wrapper, headerCandidate.table);
  else if (stickyHeader) {
    stickyHeader.style.display = 'none';
    activeHeaderTable = null;
  }

  const scrollCandidate = tables.find(({ wrapper, table }) => {
    const rect = wrapper.getBoundingClientRect();
    return table.scrollWidth > wrapper.clientWidth + 1
      && rect.top < window.innerHeight
      && rect.bottom > window.innerHeight;
  });

  // 触摸设备不挂浮条：它紧贴视口下缘（Safari 原生底栏的遮挡边缘），
  // 会让 Safari 把底栏画成实色 color extension；且 iOS 不渲染
  // ::-webkit-scrollbar 定制样式，滑块不显示，只剩一条纯色带。
  if (scrollCandidate && supportsFloatingScrollbar(readPointerCapability())) {
    renderFloatingScrollbar(scrollCandidate.wrapper, scrollCandidate.table);
  } else {
    floatingScrollbar.style.display = 'none';
    activeScrollWrapper = null;
  }
}

function scheduleUpdate(): void {
  if (animationFrame) return;
  animationFrame = requestAnimationFrame(update);
}

function refreshLayout(): void {
  activeHeaderTable = null;
  scheduleUpdate();
}

function syncOnScroll(event: Event): void {
  // 捕获阶段先同步拖动值，避免 update 用表格旧位置重置滚动条。
  if (event.target === floatingScrollbar) syncTableFromFloatingScrollbar();
  if (animationFrame) cancelAnimationFrame(animationFrame);
  update();
}

function syncTableFromFloatingScrollbar(): void {
  if (activeScrollWrapper && floatingScrollbar) {
    activeScrollWrapper.scrollLeft = floatingScrollbar.scrollLeft;
  }
}

onMounted(() => {
  stickyHeader = document.createElement('div');
  stickyHeader.className = 'pl-table-sticky-head';
  stickyHeader.setAttribute('aria-hidden', 'true');
  stickyHeader.addEventListener('click', activateStickyHeaderSort);
  document.body.append(stickyHeader);
  floatingScrollbar = document.createElement('div');
  floatingScrollbar.className = 'pl-table-floating-scroll';
  floatingScrollbar.setAttribute('role', 'region');
  floatingScrollbar.setAttribute('aria-label', t('横向滚动表格'));
  floatingScrollbar.tabIndex = 0;
  // 挂载即隐藏：默认 display 是 block，若等首次 update() 才隐藏，
  // 那一帧浮条就压在视口下缘——足以让 Safari 对底栏做实色延伸。
  floatingScrollbar.style.display = 'none';
  const content = document.createElement('div');
  content.className = 'pl-table-floating-scroll-content';
  content.setAttribute('aria-hidden', 'true');
  floatingScrollbar.append(content);
  floatingScrollbar.addEventListener('scroll', syncTableFromFloatingScrollbar, { passive: true });
  document.body.append(floatingScrollbar);

  document.addEventListener('scroll', syncOnScroll, { passive: true, capture: true });
  window.addEventListener('resize', refreshLayout, { passive: true });
  observer = new MutationObserver((records) => {
    if (records.some((record) => record.target instanceof Element && record.target.closest('thead, colgroup'))) {
      activeHeaderTable = null;
    }
    scheduleUpdate();
  });
  observer.observe(document.querySelector('#main') ?? document.body, { childList: true, subtree: true });
  // 混合设备接入鼠标后，浮条应当立刻可用，不必等刷新页面。
  stopWatchingPointer = watchPointerCapability(refreshLayout);
  refreshLayout();
});

onBeforeUnmount(() => {
  document.removeEventListener('scroll', syncOnScroll, true);
  window.removeEventListener('resize', refreshLayout);
  observer?.disconnect();
  stickyHeader?.removeEventListener('click', activateStickyHeaderSort);
  stickyHeader?.remove();
  if (animationFrame) cancelAnimationFrame(animationFrame);
  floatingScrollbar?.removeEventListener('scroll', syncTableFromFloatingScrollbar);
  floatingScrollbar?.remove();
  stopWatchingPointer?.();
});
</script>

<template></template>
