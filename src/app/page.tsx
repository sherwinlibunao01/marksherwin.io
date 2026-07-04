import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { AutomationStack } from "./AutomationStack";
import { MouseGlow } from "./MouseGlow";
import { SignalPulses } from "./SignalPulses";
import { StaggerGroup } from "./StaggerGroup";
import { DecodeValue } from "./DecodeValue";
import {
  contactEmail,
  facebookUrl,
  faqs,
  fullName,
  ghlAutomations,
  howItWorks,
  linkedinUrl,
  offers,
  outcomes,
  skills,
  voiceAiPoints,
  voiceAiUrl,
} from "./content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const nav = [
  { href: "#automations", label: "Automations" },
  { href: "#voice-ai", label: "Voice AI" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} relative min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="field-grid" aria-hidden="true">
        <div className="field-glow" />
      </div>
      <div className="mouse-glow" aria-hidden="true" />
      <div className="ignition-surge" aria-hidden="true" />
      <SignalPulses />
      <MouseGlow />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--c-primary)] focus:px-4 focus:py-2 focus:text-[var(--c-primary-ink)]"
      >
        Skip to content
      </a>

      <header className="relative z-10 border-b border-[var(--c-line)] bg-[var(--c-bg)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#main"
            className="text-[0.95rem] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {fullName}
          </a>
          <nav
            className="flex items-center gap-5 text-sm text-[var(--c-muted)] sm:gap-7"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <div className="hidden items-center gap-7 sm:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative py-1 transition-colors duration-300 hover:text-[var(--c-ink)]"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[var(--c-primary)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-[2px] bg-[var(--c-primary)] px-4 py-2 text-[var(--c-primary-ink)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:shadow-[0_10px_30px_-10px_var(--c-primary)] active:scale-95"
            >
              Work together
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="relative z-10">
        {/* Hero — boot sequence: status line, headline, subhead, CTAs,
            metrics panel stagger in on first load, not on scroll. */}
        <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 sm:px-10 sm:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-start">
            <div>
              <p
                className="boot-in inline-flex items-center gap-2.5 text-xs text-[var(--c-muted)]"
                style={{ fontFamily: "var(--font-mono)", "--i": 0 } as React.CSSProperties}
              >
                <span className="status-dot inline-flex h-1.5 w-1.5 rounded-full bg-[var(--c-primary)] text-[var(--c-primary)]" />
                STATUS: ACCEPTING NEW BUILDS
                <span className="caret" aria-hidden="true" />
              </p>
              <h1
                className="boot-in mt-6 text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.03] tracking-[-0.03em] text-wrap-balance"
                style={{ fontFamily: "var(--font-display)", textWrap: "balance", "--i": 1 } as React.CSSProperties}
              >
                Automation systems for businesses that hate dropped leads.
              </h1>
              <p
                className="boot-in mt-7 max-w-xl text-pretty text-lg leading-8 text-[var(--c-muted)]"
                style={{ textWrap: "pretty", "--i": 2 } as React.CSSProperties}
              >
                GoHighLevel, Zapier, n8n, custom APIs, and AI agents wired into one working
                system — from lean teams to enterprise operations, capture, qualify, and
                book without adding headcount.
              </p>
              <div
                className="boot-in mt-9 flex flex-wrap items-center gap-4"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                <a
                  href="#contact"
                  className="rounded-[2px] bg-[var(--c-primary)] px-6 py-3.5 text-sm font-medium text-[var(--c-primary-ink)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--c-primary)] active:scale-95"
                >
                  Book a call
                </a>
                <a
                  href="#voice-ai"
                  className="rounded-[2px] border border-[var(--c-line)] px-6 py-3.5 text-sm font-medium text-[var(--c-ink)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[var(--c-primary)] active:scale-95"
                >
                  Talk to the Voice AI
                </a>
              </div>
            </div>

            <div
              className="boot-in flex flex-col gap-6"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              <div className="border border-[var(--c-line)] bg-[var(--c-surface)]">
                <div
                  className="flex items-center justify-between border-b border-[var(--c-line)] px-4 py-2.5 text-xs text-[var(--c-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <span>profile.img</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="status-dot inline-flex h-1.5 w-1.5 rounded-full bg-[var(--c-primary)] text-[var(--c-primary)]" />
                    verified
                  </span>
                </div>
                <div className="p-4">
                  <img
                    src="/mark-sherwin-field-portrait.jpg"
                    alt={fullName}
                    className="w-full border border-[var(--c-line)] object-cover"
                  />
                </div>
                <div
                  className="flex items-center gap-5 border-t border-[var(--c-line)] px-4 py-3 text-xs text-[var(--c-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-[var(--c-primary)]"
                  >
                    LinkedIn &#8599;
                  </a>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-[var(--c-primary)]"
                  >
                    Facebook &#8599;
                  </a>
                </div>
              </div>

              <div className="border border-[var(--c-line)] bg-[var(--c-surface)]">
                <div
                  className="flex items-center justify-between border-b border-[var(--c-line)] px-4 py-2.5 text-xs text-[var(--c-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <span>metrics.log</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="status-dot inline-flex h-1.5 w-1.5 rounded-full bg-[var(--c-primary)] text-[var(--c-primary)]" />
                    live
                  </span>
                </div>
                <div className="divide-y divide-[var(--c-line)]">
                  {outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="flex items-center justify-between px-4 py-4"
                    >
                      <span className="text-sm text-[var(--c-muted)]">{outcome.label}</span>
                      <span
                        className="text-lg tracking-tight"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        <DecodeValue value={outcome.value} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About — the builder behind the systems. */}
        <section className="border-t border-[var(--c-line)] px-6 py-20 sm:px-10 sm:py-28">
          <div className="reveal mx-auto max-w-3xl">
            <p
              className="text-xs text-[var(--c-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              about.init()
            </p>
            <h2
              className="mt-4 text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.02em] text-wrap-balance"
              style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
            >
              The builder behind the systems.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-[var(--c-muted)]">
              I&apos;m {fullName} — I design and wire up the automation layer that
              sits between a business&apos;s tools: GoHighLevel, Zapier, n8n,
              custom APIs, and AI agents, working together as one system
              instead of a pile of disconnected steps.
            </p>
          </div>
        </section>

        {/* How I help */}
        <section className="border-t border-[var(--c-line)] bg-[var(--c-surface)] px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2
              className="reveal text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
            >
              Less chasing. More closing.
            </h2>
            <StaggerGroup as="ul" className="space-y-4">
              {offers.map((offer, i) => (
                <li
                  key={offer}
                  className="stagger-item border border-[var(--c-line)] bg-[var(--c-bg)] p-6 text-lg leading-8 text-[var(--c-ink)] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--c-primary)]"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {offer}
                </li>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* How it works — the mechanism behind the numbers */}
        <section className="px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-14 max-w-2xl">
              <h2
                className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How it actually generates leads
              </h2>
              <p className="mt-4 text-lg leading-7 text-[var(--c-muted)]">
                Not a black box — four concrete stages that hold up whether you&apos;re a
                two-person team or a multi-location enterprise.
              </p>
            </div>
            <div className="trace-line mb-px" aria-hidden="true" />
            <StaggerGroup className="grid gap-px overflow-hidden border border-[var(--c-line)] bg-[var(--c-line)] sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((stage, i) => (
                <div
                  key={stage.step}
                  className="stagger-item flex flex-col gap-4 bg-[var(--c-bg)] p-6"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span
                    className="text-xs text-[var(--c-primary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stage.step}
                  </span>
                  <p
                    className="text-lg tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stage.name}
                  </p>
                  <p className="text-sm leading-6 text-[var(--c-muted)]">{stage.detail}</p>
                  <p className="mt-auto border-t border-[var(--c-line)] pt-4 text-sm leading-6 text-[var(--c-ink)]">
                    {stage.benefit}
                  </p>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Automations — pipeline visualization */}
        <section id="automations" className="scroll-mt-20">
          <AutomationStack
            automations={ghlAutomations}
            title="Automations built to scale revenue teams"
            subtitle="Practical workflows for sales teams, agencies, and multi-location or enterprise operations — more booked conversations, less manual admin."
          />
        </section>


        {/* Voice AI */}
        <section id="voice-ai" className="scroll-mt-20 px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl border border-[var(--c-line)]">
            <div
              className="flex items-center justify-between border-b border-[var(--c-line)] bg-[var(--c-surface)] px-5 py-2.5 text-xs text-[var(--c-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span>voice-agent.sys</span>
              <span className="flex items-center gap-1.5">
                <span className="status-dot inline-flex h-1.5 w-1.5 rounded-full bg-[var(--c-primary)] text-[var(--c-primary)]" />
                online
              </span>
            </div>
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="reveal p-8 sm:p-12">
                <p className="text-sm text-[var(--c-muted)]">Featured build</p>
                <h2
                  className="mt-4 text-[clamp(1.85rem,3.2vw,2.5rem)] leading-[1.08] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
                >
                  A voice agent that never lets a call go unanswered.
                </h2>
                <p className="mt-6 max-w-md leading-7 text-[var(--c-muted)]">
                  Built on Retell AI — answers, qualifies, and collects lead details while
                  your team stays focused on the work in front of them.
                </p>
                <ul className="mt-8 space-y-2.5">
                  {voiceAiPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm text-[var(--c-ink)]"
                    >
                      <span
                        className="text-[var(--c-muted)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        &gt;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[var(--c-line)] bg-[var(--c-surface)] p-4 sm:border-l sm:border-t-0 sm:p-6">
                <div className="overflow-hidden border border-[var(--c-line)] bg-white">
                  <iframe
                    className="h-[560px] w-full bg-white"
                    src={voiceAiUrl}
                    title="Retell Voice AI agent demo"
                    allow="microphone; autoplay; clipboard-write"
                  />
                </div>
                <p className="mt-3 text-xs text-[var(--c-muted)]">
                  Live demo — this widget streams audio; if you can&apos;t use audio right now,
                  email me and I&apos;ll send a recorded walkthrough instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-[var(--c-line)] px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2
              className="reveal mb-10 text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Toolkit
            </h2>
            <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([group, items], i) => (
                <div
                  key={group}
                  className="stagger-item border border-[var(--c-line)] p-6"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <p
                    className="text-xs text-[var(--c-muted)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {`// ${group.toLowerCase()}`}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-sm text-[var(--c-ink)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--c-line)] px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="reveal border border-[var(--c-line)] bg-[var(--c-surface)]">
              <div
                className="flex items-center justify-between border-b border-[var(--c-line)] px-4 py-2.5 text-xs text-[var(--c-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>faq.log</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="status-dot inline-flex h-1.5 w-1.5 rounded-full bg-[var(--c-primary)] text-[var(--c-primary)]" />
                  answered
                </span>
              </div>
              <div className="divide-y divide-[var(--c-line)]">
                {faqs.map((item) => (
                  <details key={item.question} className="group px-5 py-5 sm:px-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base text-[var(--c-ink)] marker:content-none sm:text-lg">
                      {item.question}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl text-[var(--c-muted)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--c-muted)] sm:text-base">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-[var(--c-line)] bg-[var(--c-surface)] px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="reveal mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs text-[var(--c-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                contact.init()
              </p>
              <h2
                className="mt-4 max-w-2xl text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
              >
                Build the workflow once.
              </h2>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="w-fit rounded-[2px] bg-[var(--c-primary)] px-6 py-3.5 text-sm font-medium text-[var(--c-primary-ink)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--c-primary)] active:scale-95"
            >
              {contactEmail}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[var(--c-line)] px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--c-muted)] sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {fullName}
          </span>
          <div className="flex items-center gap-6">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[var(--c-primary)]"
            >
              LinkedIn &#8599;
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[var(--c-primary)]"
            >
              Facebook &#8599;
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
