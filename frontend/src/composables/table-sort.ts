import { computed, ref, type ComputedRef } from 'vue';

export type SortDirection = 'asc' | 'desc';

function isNumericString(value: string): boolean {
  return /^-?\d+(?:\.\d+)?$/.test(value);
}

function compareNumericStrings(left: string, right: string): number {
  const [leftWhole = '0', leftFraction = ''] = left.replace(/^-/, '').split('.');
  const [rightWhole = '0', rightFraction = ''] = right.replace(/^-/, '').split('.');
  const leftNegative = left.startsWith('-');
  const rightNegative = right.startsWith('-');
  if (leftNegative !== rightNegative) return leftNegative ? -1 : 1;
  const wholeOrder = leftWhole.length - rightWhole.length || leftWhole.localeCompare(rightWhole);
  const fractionLength = Math.max(leftFraction.length, rightFraction.length);
  const fractionOrder = leftFraction.padEnd(fractionLength, '0').localeCompare(rightFraction.padEnd(fractionLength, '0'));
  const order = wholeOrder || fractionOrder;
  return leftNegative ? -order : order;
}

function compareValues(left: unknown, right: unknown): number {
  if (typeof left === 'number' && typeof right === 'number') return left - right;
  if (typeof left === 'boolean' && typeof right === 'boolean') return Number(left) - Number(right);
  const leftText = String(left);
  const rightText = String(right);
  if (isNumericString(leftText) && isNumericString(rightText)) return compareNumericStrings(leftText, rightText);
  return leftText.localeCompare(rightText, undefined, { numeric: true, sensitivity: 'base' });
}

export function sortItems<T>(items: readonly T[], key: string | null, direction: SortDirection, getValue: (item: T, key: string) => unknown): readonly T[] {
  if (!key) return items;
  const sign = direction === 'asc' ? 1 : -1;
  return items.map((item, index) => ({ item, index, value: getValue(item, key) }))
    .sort((left, right) => {
      const leftMissing = isMissing(left.value);
      const rightMissing = isMissing(right.value);
      if (leftMissing || rightMissing) {
        if (leftMissing !== rightMissing) return leftMissing ? 1 : -1;
        return left.index - right.index;
      }
      return compareValues(left.value, right.value) * sign || left.index - right.index;
    })
    .map(({ item }) => item);
}

function isMissing(value: unknown): boolean {
  if (value === null || value === undefined || value === '') return true;
  if (typeof value !== 'string') return false;
  return ['未披露', '未取得可信价格', '未知', 'Unknown', 'No trustworthy price available']
    .includes(value.trim());
}

export function useTableSort<T>(
  getItems: () => readonly T[],
  getValue: (item: T, key: string) => unknown,
): {
  activeSortKey: ComputedRef<string | null>;
  direction: ComputedRef<SortDirection>;
  sortedItems: ComputedRef<readonly T[]>;
  toggleSort: (key: string) => void;
} {
  const sortKey = ref<string | null>(null);
  const sortDirection = ref<SortDirection>('asc');

  function toggleSort(key: string): void {
    if (sortKey.value !== key) {
      sortKey.value = key;
      sortDirection.value = 'asc';
    } else if (sortDirection.value === 'asc') {
      sortDirection.value = 'desc';
    } else {
      sortKey.value = null;
      sortDirection.value = 'asc';
    }
  }

  const sortedItems = computed<readonly T[]>(() => {
    const items = getItems();
    return sortItems(items, sortKey.value, sortDirection.value, getValue);
  });

  return {
    activeSortKey: computed(() => sortKey.value),
    direction: computed(() => sortDirection.value),
    sortedItems,
    toggleSort,
  };
}
