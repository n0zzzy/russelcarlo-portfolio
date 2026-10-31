/*
 * ✏️  YOUR CONTENT LIVES HERE.
 *
 * Fill these in and remove `placeholder: true` from an entry to publish it.
 * Entries marked `placeholder: true` stay hidden on the live site.
 * To preview everything (placeholders included), open: /?draft
 * A section with no published entries is hidden automatically.
 */
window.CONTENT = {
  // ~/logs: short build logs / blog posts. `url` can point to LinkedIn, Medium, dev.to, etc.
  logs: [
    { date: "2026-10", title: "What I learned putting a human gate in front of seven AI agents", excerpt: "Why the approve-deploy step mattered more than the prompts.", url: "#", tags: ["harness", "kiro"], placeholder: true },
    { date: "2026-09", title: "Haiku for routing, Sonnet for thinking: picking models per agent role", excerpt: "Cost, latency, and where reasoning actually pays off.", url: "#", tags: ["models", "cost"], placeholder: true },
    { date: "2026-08", title: "How team EPIC 2 won Rank 1 at the AWS QuickQuest Finale", excerpt: "From a messy checklist to an AI release partner in one build night.", url: "#", tags: ["hackathon", "aws"], placeholder: true },
  ],

  // ~/history: experience, orgs, roles. Newest first.
  history: [
    { when: "2026 — now", role: "Your role", org: "Company / org / student group", note: "One line on what you shipped or owned.", placeholder: true },
    { when: "2025 — 2026", role: "Your role", org: "Company / org / student group", note: "One line on what you shipped or owned.", placeholder: true },
  ],

  // ~/reviews: endorsements from teammates, mentors, coaches.
  reviews: [
    { name: "Teammate name", title: "Role · where you worked together", quote: "A short quote about working with you.", placeholder: true },
    { name: "Mentor or coach", title: "Role · organization", quote: "A short quote about working with you.", placeholder: true },
  ],

  // ~/network: communities, orgs, programs you are part of.
  network: [
    { name: "Community name", role: "member / volunteer / speaker", url: "#", placeholder: true },
    { name: "Community name", role: "member / volunteer / speaker", url: "#", placeholder: true },
  ],

  // ~/uses: your setup. Values marked "TODO" are hidden on the live site.
  uses: {
    editors: ["VS Code", "Kiro"],
    agents: ["Claude Code", "Codex", "OpenCode"],
    models: ["OpenRouter", "Ollama (local)"],
    cloud: ["AWS", "Azure", "Vercel"],
    machine: ["TODO: laptop / desktop"],
    desk: ["TODO: monitor, keyboard, mouse"],
  },
};
