// Guardrail: the CSP in vercel.json must allow exactly the inline theme script in index.html.
// `node scripts/check-csp.mjs --write` refreshes the hash; without it, a mismatch fails CI.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8").replace(/\r\n/g, "\n"); // browsers hash LF-normalized text
const inline = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
if (inline === undefined) throw new Error("inline theme script not found");
const hash = `'sha256-${createHash("sha256").update(inline).digest("base64")}'`;

const cfg = JSON.parse(readFileSync("vercel.json", "utf8"));
const header = cfg.headers[0].headers.find((h) => h.key === "Content-Security-Policy");
if (header.value.includes(hash)) {
  console.log("CSP hash matches inline script ✓");
} else if (process.argv.includes("--write")) {
  header.value = header.value.replace(/'sha256-[^']+'/, hash);
  writeFileSync("vercel.json", JSON.stringify(cfg, null, 2) + "\n");
  console.log(`CSP updated → ${hash}`);
} else {
  console.error(`CSP is stale. Expected ${hash} in vercel.json (run: npm run fix:csp)`);
  process.exit(1);
}
