// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://app.netlify.com/sites/zesty-bombolone-2e29a5/",
  integrations: [preact()]
});