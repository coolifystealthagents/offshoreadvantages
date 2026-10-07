export type EditorialSource = { slug: string; title: string; image?: string };
export type EditorialImage = { src: string; alt: string };
export type EditorialRecord = { slug: string; title: string };
export const EDITORIAL_IMAGE_CACHE_CONTROL: string;
export function findEditorialRecord<T extends EditorialRecord>(slug: string, records: readonly T[]): T | undefined;
export function resolveEditorialImagePolicy(source: EditorialSource): EditorialImage;
export function imageResponseOptions(): {
  width: number;
  height: number;
  headers: Record<string, string>;
};
