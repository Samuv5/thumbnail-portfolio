// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://samuv5.github.io",
  base: "/thumbnail-portfolio/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
