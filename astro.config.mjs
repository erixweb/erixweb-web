import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";


import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss({ config: "./tailwind.config.cjs" })],
  },
  i18n: {
    locales: ["en", "ca"],
    defaultLocale: "ca",
  },
});