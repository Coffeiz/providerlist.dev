/** 将官方 Markdown 抓取地址映射为同一路径的用户可读文档页面 URL。 */
export function readableDocumentationUrl(url: string): string;
export function readableDocumentationUrl(url: undefined): undefined;
export function readableDocumentationUrl(url: string | undefined): string | undefined;
export function readableDocumentationUrl(url: string | undefined): string | undefined {
  return url?.replace(/\.md(?=([?#]|$))/i, '');
}
