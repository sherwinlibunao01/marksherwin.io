---
target: src/app/page.tsx (homepage, full page)
total_score: 25
p0_count: 1
p1_count: 2
timestamp: 2026-07-04T18-52-33Z
slug: src-app-page-tsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Status dots, boot sequence, decode animation all work; undercut by the automation-stack overlap making state momentarily ambiguous |
| 2 | Match Between System / Real World | 3/4 | Pain/fix copy is concrete and business-owner-legible; terminal jargon is flavor, not an obstacle |
| 3 | User Control and Freedom | 2/4 | No mobile nav below `sm:` — no way to jump to Voice AI/Contact except scrolling the whole page |
| 4 | Consistency and Standards | 3/4 | Very consistent visual system; "Book a call" CTA label doesn't match what it actually does (mailto, not a calendar) |
| 5 | Error Prevention | 2/4 | Retell iframe has no failure/loading state |
| 6 | Recognition Rather Than Recall | 3/4 | Progress dots and panel labels persist context well while scrolling |
| 7 | Flexibility and Efficiency of Use | 2/4 | No skip/jump option past the ~450vh pinned automation stack; no mobile shortcuts |
| 8 | Aesthetic and Minimalist Design | 3/4 | Disciplined and restrained; docked for recurring numbering + the stack's transition clutter |
| 9 | Error Recovery | 1/4 | Zero error states anywhere — iframe failure is silently invisible |
| 10 | Help and Documentation | 3/4 | FAQ genuinely answers real buyer objections in plain language |
| **Total** | | **25/40** | **Acceptable** |

#### Anti-Patterns Verdict

**LLM assessment**: Would not read as "AI made this" on first glance — no rounded-pills, no backdrop-blur nav, no dark-mode-default, no cream/beige neutral, no glassmorphism, no gradient text. The pine-green/pale-clay terminal-blueprint conceit is load-bearing (ties to the actual pitch), not decorative. Two anti-references leak through in disguise: the hero's `metrics.log` panel is the "three-stat hero-metric row" wearing a terminal skin (three unsourced claims, no case study anywhere), and numbered `01/02/03` scaffolding appears independently in two different sections (How It Works' 4 stages, and the automation stack's 6 cards).

**Deterministic scan**: Static source scan (`detect.mjs` against `src/app`) found 0 issues — it can't see computed/rendered styles. The **browser-runtime detector** (injected into the live page) found 7: 6× `gpt-thin-border-wide-shadow` (1px border + 60px shadow blur), all matching the *exact same selector* — the `AutomationStack` card wrapper (`shadow-[0_30px_60px_-32px_rgba(...)]`) — meaning this is one design decision repeated across 6 card instances, not 6 separate mistakes. It's still a real hit worth acting on: thin-border-plus-wide-soft-shadow is specifically named in this project's own anti-reference list ("soft drop shadows on every card"), and it slipped back in on the one component demonstrating engineering depth. The LLM review did not catch this specific combination — a genuine case of the detector finding something the design pass missed. It also flagged `single-font` (computed font-family at `<body>` resolves to the `-apple-system/SF Pro Display` fallback stack, not the intended Inter/Space Grotesk/Plex Mono system) — worth verifying whether any actual visible text inherits this un-overridden default rather than the deliberate type system.

**Visual overlays**: Injection succeeded and the detector ran live in the page (confirmed via console output), but the scan's own background live-server has since been stopped per protocol, so there is no persistent overlay currently open in your browser — the findings above are the full captured console output.

#### Overall Impression

A visually disciplined, genuinely differentiated site — the terminal/systems-log metaphor is doing real work, not just decorating. It's held back by one real interaction bug in its most important proof section, a couple of anti-reference habits creeping back in disguise, and a conversion path that doesn't practice what it sells (a "book a call" button that's actually a cold email). The single biggest opportunity: fix the automation-stack crossfade math (confirmed against the actual formula in the code, not just a visual impression) and replace the mailto "booking" with a real scheduling embed — those two changes alone would move this from "acceptable" toward "good."

#### What's Working

- **The terminal/systems-log conceit is load-bearing.** Mono-font panel labels, the pulsing status dot, and the character-scramble metric reveal reinforce the actual pitch ("I build systems that run reliably") through the interface itself.
- **Dual-audience copywriting genuinely works.** "A ringing phone nobody answers is a lead calling your competitor next" reads instantly for a busy clinic owner, while naming GoHighLevel/Zapier/n8n/Retell AI/MCP servers satisfies a technical evaluator — in the same sentence-level unit.
- **Accessibility fundamentals are intact.** Skip-to-content link, native focus rings preserved, semantic `<details>/<summary>` for FAQ, `prefers-reduced-motion` respected across every animated layer.

#### Priority Issues

**[P0] AutomationStack text overlap during scroll transitions** — `src/app/AutomationStack.tsx`, the opacity formula (`isFuture ? 1 - offset*1.6 : 1 - |offset|*0.45`). Confirmed by working the math against the actual code: when card i+1 reaches full opacity (offset=0), card i is simultaneously still at 55% opacity (offset=-1) and has barely moved (`translateY(-14px) scale(0.98)`) — headlines and pain/fix copy visibly overlap for a real stretch of the scroll, worse on narrow/mobile widths. This is the page's one concrete "proof" section — the worst place for a visible bug, and the exact section a technical evaluator scrutinizes hardest.
*Fix*: steepen both fade curves so past/future opacity don't both sit above ~50% at once, and tighten the crossover band.
*Command*: `/impeccable polish`

**[P1] No mobile navigation** — `page.tsx`, nav links wrapped in `hidden sm:flex` with no replacement below 640px. A phone visitor's only route to Voice AI or Contact is scrolling past hero → about → offers → 4-stage grid → the ~450vh pinned stack.
*Fix*: add a minimal on-brand mobile menu.
*Command*: `/impeccable layout`

**[P1] "Book a call" CTA is a mailto link, not a booking mechanism** — the hero's primary button anchors to `#contact`, whose only action is `mailto:`. No calendar embed anywhere, which undercuts "every path leads to booking a call" and reads as "doesn't use his own product" to a technical evaluator.
*Fix*: embed a real scheduling widget as the primary action; keep email secondary.
*Command*: `/impeccable clarify`

**[P2] Automation cards use the "thin border + wide soft shadow" combo** — detector-confirmed, 6/6 instances, `shadow-[0_30px_60px_-32px_rgba(20,40,30,0.35)]` on `AutomationStack.tsx`'s card wrapper. This directly contradicts this project's own anti-reference ("soft drop shadows on every card") and is exactly the kind of tell a sharp visitor clocks. Missed by the design review, caught by the detector.
*Fix*: drop the soft shadow blur radius substantially or replace with a hard-edged/no-shadow treatment consistent with the rest of the site's flat bordered panels.
*Command*: `/impeccable quieter`

**[P2] Hero's three metrics are unsourced** — `24/7`, `<60s`, `10+ hrs` presented as bare fact with no footnote, case study, or testimonial anywhere on the site to back them.
*Fix*: attach a source per stat, or reframe as qualitative capability statements until real client numbers exist.
*Command*: `/impeccable clarify`

**[P3] Toolkit's "Capabilities" group breaks its own chunking discipline** — 10 flat tag items vs. 4-6 in every sibling group (Platforms, AI stack, Industries).
*Fix*: split into two sub-groups of ~5.
*Command*: `/impeccable distill`

#### Persona Red Flags

**Casey (Distracted Mobile User)**: no mobile nav (P1); the card-overlap bug is worse on a phone since there's less width to separate the two text columns; faces the full ~450vh pinned-stack scroll distance on a small thumb-scroll budget before reaching Voice AI.

**Riley (Deliberate Stress Tester)**: scrubbing back and forth through the automation stack reproduces the overlap glitch in either direction; scrolling fast and stopping abruptly shows a visible rubber-band catch-up as the lerp chases the raw scroll target.

**Non-technical local business owner**: the real red flag is trust, not visuals — three unverified hero stats, zero testimonials/case studies/client logos anywhere, and a "Book a call" button that's actually a cold email to a Gmail address.

**Technical evaluator**: will hit the AutomationStack bug immediately since it's the section demonstrating engineering depth; the mailto-only conversion path on a GHL-automation seller's own site reads as ironic to this audience specifically.

#### Minor Observations

- Ghost page-numerals behind each automation card read slightly clipped at some widths.
- The Retell orb widget's default gradient sphere is the single most "generic AI product" visual on the page — ironically inside the section meant to be the standout proof (third-party widget, outside Mark's control).
- "STATUS: ACCEPTING NEW BUILDS" is a static hardcoded string, not a real availability flag — will read as stale to a return visitor eventually.
- Footer and Contact section both repeat identical LinkedIn/Facebook links — harmless redundancy.
- `single-font` detector hit at `<body>` level (resolves to the SF Pro Display system fallback, not the intended type system) — worth a quick check that no actual visible text silently falls through to it.

#### Questions to Consider

- If "every path leads to booking a call" is a stated design principle, why does the mechanism resolve to a cold email — on a site whose entire pitch is automating booking and calendars for a living?
- The numbered-scaffolding pattern appears twice independently — deliberate reinforcing motif, or did two sections default to the same crutch separately?
- The three headline stats have no source anywhere — what happens to a skeptical buyer's trust the instant they notice the numbers are unlabeled?
