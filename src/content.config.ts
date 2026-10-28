import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    imagen: z.string().optional(),
    resumen: z.string(),
    categoria: z.string().default('Comunicado'),
  }),
});

export const collections = { noticias };
