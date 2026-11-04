import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const DATE_REPORT = /^(\d{4}-\d{2}-\d{2})(?:-(\d+))?\.md$/u;

/** Reuse a candidate's report name, or allocate the next date-based name. */
export async function datedReviewMarkdownPath(
  reviewsDir: string,
  observedAt: string,
  existingFile?: string,
): Promise<string> {
  if (existingFile && path.basename(existingFile) === existingFile && DATE_REPORT.test(existingFile)) {
    return path.join(reviewsDir, existingFile);
  }
  const date = observedAt.slice(0, 10);
  const parsedDate = new Date(`${date}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(date) || Number.isNaN(parsedDate.valueOf()) || parsedDate.toISOString().slice(0, 10) !== date) {
    throw new Error(`无法从候选观察时间生成日期报告文件名：${observedAt}`);
  }
  await mkdir(reviewsDir, { recursive: true });
  const names = new Set(await readdir(reviewsDir));
  if (!names.has(`${date}.md`)) return path.join(reviewsDir, `${date}.md`);
  for (let index = 2; index < 10_000; index += 1) {
    const filename = `${date}-${index}.md`;
    if (!names.has(filename)) return path.join(reviewsDir, filename);
  }
  throw new Error(`日期 ${date} 的 review 文件编号空间已耗尽`);
}
