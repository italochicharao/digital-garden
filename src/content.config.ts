import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date().optional(),
  summary: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

function categoryCollection(folder: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./content/${folder}` }),
    schema: entrySchema,
  });
}

export const collections = {
  contabilidade: categoryCollection('contabilidade'),
  direito: categoryCollection('direito'),
  cinema: categoryCollection('cinema'),
  arte: categoryCollection('arte'),
  musica: categoryCollection('musica'),
  notas: categoryCollection('notas'),
};
