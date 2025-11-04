// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.imokuri.com",
  integrations: [
    starlight({
      title: "IMOKURI Docs",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/IMOKURI" },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato" },
          light: { flavor: "latte" },
        }),
      ],
    }),
  ],
});
