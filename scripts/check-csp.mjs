// Guardrail: the CSP in vercel.json must allow every inline script in our HTML pages.
// `node scripts/check-csp.mjs --write` refreshes the hash; without it, a mismatch fails CI.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const pages = ["index.html", "404.html", "kiro-harness.html"];
const hashes = new Set();
for (const page of pages) {
  const html = readFileSync(page, "utf8").replace(/\r\n/g, "\n"); // browsers hash LF-normalized text
  for (const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    hashes.add(`'sha256-${createHash("sha256").update(m[1]).digest("base64")}'`);
  }
}

const cfg = JSON.parse(readFileSync("vercel.json", "utf8"));
const header = cfg.headers[0].headers.find((h) => h.key === "Content-Security-Policy");
const missing = [...hashes].filter((h) => !header.value.includes(h));
if (!missing.length) {
  console.log(`CSP allows all ${hashes.size} inline script(s) ✓`);
} else if (process.argv.includes("--write")) {
  header.value = header.value.replace(/script-src [^;]+/, `script-src 'self' ${[...hashes].join(" ")}`);
  writeFileSync("vercel.json", JSON.stringify(cfg, null, 2) + "\n");
  console.log(`CSP updated → ${[...hashes].join(" ")}`);
} else {
  console.error(`CSP is stale. Missing ${missing.join(" ")} (run: npm run fix:csp)`);
  process.exit(1);
}
