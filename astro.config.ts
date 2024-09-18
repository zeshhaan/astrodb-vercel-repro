import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";
import db from "@astrojs/db";

export default defineConfig({
  output: "server",

  adapter: vercelServerless({
    imageService: true,
  }),

  integrations: [db()],
});
