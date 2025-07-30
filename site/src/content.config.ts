// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    repo: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { portfolio: portfolioCollection };
