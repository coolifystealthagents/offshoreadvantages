import { resolveEditorialImagePolicy } from './editorial-image-policy.mjs';

export type EditorialImage = {
  src: string;
  alt: string;
};

export function resolveEditorialImage({
  slug,
  title,
  image,
}: {
  slug: string;
  title: string;
  image?: string;
}): EditorialImage {
  return resolveEditorialImagePolicy({ slug, title, image });
}
