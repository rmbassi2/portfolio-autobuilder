import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: "https://rmbassi2.github.io/portfolio-autobuilder",
  trailingSlash: "always",
});
