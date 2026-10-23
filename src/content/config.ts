import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Optional full <title> for search results (used verbatim). The H1 still uses `title`. */
    seoTitle: z.string().optional(),
    pubDate: z.date(),
    author: z.string().default('B2B Solutions'),
    category: z.string(),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
