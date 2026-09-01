import { readFileSync, writeFileSync, existsSync } from "node:fs";

const files = [
  ".open-next/server-functions/default/handler.mjs",
  ".open-next/worker.js",
];

for (const file of files) {
  if (!existsSync(file)) continue;
  let code = readFileSync(file, "utf8");
  if (!code.includes("cloudflare:sockets")) continue;

  if (!code.includes("globalThis.__cloudflareSockets")) {
    code = `import * as __cloudflareSockets from "cloudflare:sockets";
globalThis.__cloudflareSockets = __cloudflareSockets;
${code}`;
  }

  code = code.replace(/require\(["']cloudflare:sockets["']\)/g, "globalThis.__cloudflareSockets");
  writeFileSync(file, code);
  console.log(`Patched ${file} for cloudflare:sockets`);
}
