import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { CATEGORY_SLUGS, type CategorySlug } from '../consts';

export type ArticleEntry = CollectionEntry<CategorySlug> & {
  data: {
    title: string;
    date: Date;
    summary: string;
    tags?: string[];
  };
};

export function isArticle(
  entry: CollectionEntry<CategorySlug>,
): entry is ArticleEntry {
  return entry.id !== '_index' && entry.data.date instanceof Date;
}

export async function getCategoryArticles(category: CategorySlug) {
  const entries = await getCollection(category);
  return entries
    .filter(isArticle)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getAllArticles() {
  const all = await Promise.all(
    CATEGORY_SLUGS.map(async (slug) => {
      const articles = await getCategoryArticles(slug);
      return articles.map((entry) => ({
        ...entry,
        category: slug,
      }));
    }),
  );
  return all.flat().sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getCategoryIndex(category: CategorySlug) {
  const entry = await getEntry(category, '_index');
  return entry?.data ?? null;
}

export function toListItem(
  entry: ArticleEntry & { category?: CategorySlug },
  category: CategorySlug,
) {
  return {
    slug: entry.id,
    title: entry.data.title,
    date: entry.data.date,
    category,
  };
}
