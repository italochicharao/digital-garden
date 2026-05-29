export function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

export function getReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function isCategorySlug(slug: string): boolean {
  return [
    'contabilidade',
    'direito',
    'cinema',
    'arte',
    'musica',
    'notas',
  ].includes(slug);
}
