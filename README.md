# russelcarlo.vercel.app

Portfolio of **Russel Carlo**: AI agents · Cloud · DevOps. Live at **https://russelcarlo.vercel.app**

Static site with no build step (HTML, CSS, vanilla JS), harnessed like an agent:

| Gate | What runs |
|---|---|
| Guardrails | `html-validate`, CSP hash check, broken-link check |
| Tests | Playwright end-to-end on desktop + mobile (`npm run test:e2e`) |
| Evals | Lighthouse budgets: perf ≥ 90, a11y / best practices / SEO ≥ 95 |
| Human gate | Preview deploy on every push; production needs approval |

Features: interactive agent-harness demo (8 scenarios + free-text router), a Kiro case study page, synthesized sound effects (off by default), content sections driven by `content.js` (preview drafts at `/?draft`), `n0zzzy shell` (press <kbd>`</kbd>), a wolf that follows your cursor (click it to release it), system / light / dark themes, PWA manifest, strict security headers.

```bash
npm ci
npm test          # validate + CSP check + e2e
npm run fix:csp   # after editing the inline theme script
```
