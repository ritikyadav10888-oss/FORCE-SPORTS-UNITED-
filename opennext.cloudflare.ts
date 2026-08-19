import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // Call Next directly so OpenNext never recurses into `npm run build`.
  buildCommand: "npx next build",
};
