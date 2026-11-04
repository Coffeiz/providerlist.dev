export interface PriceEntryView {
  readonly id: string;
  readonly label?: string;
  readonly value?: string;
  readonly nativeValue?: string;
  readonly originalValue?: string;
  readonly qualifier?: string;
  readonly cache?: boolean;
  readonly unsupported?: boolean;
}
