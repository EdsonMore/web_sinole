import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    imagenes: z.array(z.string()).nullish().transform((v) => v ?? []),
    resumen: z.string(),
    enlaces_redes: z.array(z.string().url().startsWith('https://')).nullish().transform((v) => v ?? []),
    categoria: z.string().default('Comunicado'),
  }),
});

export const collections = { noticias };
