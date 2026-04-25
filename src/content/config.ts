import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('B2B Solutions'),
    category: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
