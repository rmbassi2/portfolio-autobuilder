import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    repo: z.string().optional(),
    screenshot: z.string().optional(),
  }),
});

export const collections = {
  portfolio: projects,
};