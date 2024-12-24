import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const BASE = 'dev-tips';

// https://astro.build/config
export default defineConfig({
  site: 'https://tritdm121099.github.io',
  base: 'dev-tips',
  integrations: [
    starlight({
      title: "Dev tips",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Typescript",
          autogenerate: { directory: "typescript" },
        },
        {
          label: "Postgresql",
          autogenerate: { directory: "postgresql" },
        },
        {
          label: "Browser Devtools",
          autogenerate: { directory: "browser-devtool" },
        },
      ],
    }),
  ],
});
