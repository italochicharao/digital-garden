export const SITE_NAME = '[NOME DO SITE]';
export const SITE_TAGLINE = 'arquivo de conhecimento pessoal';
export const SITE_LOCATION = 'São Paulo, Brasil';

export const CATEGORIES = [
  { slug: 'contabilidade', label: 'Contabilidade' },
  { slug: 'direito', label: 'Direito' },
  { slug: 'cinema', label: 'Cinema' },
  { slug: 'arte', label: 'Arte' },
  { slug: 'musica', label: 'Música' },
  { slug: 'notas', label: 'Notas' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);

export function getCategoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
