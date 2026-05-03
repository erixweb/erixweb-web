import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";


import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: cloudflare({
    mode: "directory",
  }),

  vite: {
    plugins: [tailwindcss({ config: "./tailwind.config.cjs" })],
    build: {
      cssCodeSplit: false,
    },
  },
  i18n: {
    locales: ["en", "ca"],
    defaultLocale: "ca",
  },
});