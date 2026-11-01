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
    { date: "2026-11", title: "Harnessing my own portfolio like an agent", excerpt: "Guardrails, 45 end-to-end tests, Lighthouse evals, and a human approval gate before anything reaches production.", url: "https://github.com/n0zzzy/russelcarlo-portfolio", tags: ["ci/cd", "devops"] },
    { date: "2026-10", title: "Linaw: an AI safe space where safety runs before the AI", excerpt: "Local crisis check, names masked in the browser, zero storage. 4th place at EdTek Con 2026.", url: "/linaw", tags: ["case study", "safety"] },
    { date: "2026-10", title: "4th place at the EdTek Con 2026 AI Hackathon", excerpt: "Representing NU Fairview with Linaw, a privacy-first AI anti-bullying companion.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7518483801849651200/", tags: ["hackathon", "linkedin"] },
    { date: "2026-09", title: "Seven AI agents, one orchestrator, and a human gate", excerpt: "How permission boundaries and an APPROVE DEPLOY step took a plain-English request to a live AWS app.", url: "/kiro-harness", tags: ["case study", "kiro"] },
    { date: "2026-09", title: "2nd place at the Kiro Agent Orchestration Hackathon", excerpt: "AI Playgrounds at eCloudvalley Philippines, BGC.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7502561620263481344/", tags: ["hackathon", "linkedin"] },
    { date: "2026-08", title: "Rank 1 overall at the AWS QuickQuest Finale", excerpt: "Team EPIC 2's AI deployment-checklist bot on Amazon Quick Suite, plus Best Technical Solution.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7496833769048276992/", tags: ["hackathon", "aws"] },
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
