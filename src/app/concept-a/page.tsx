import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import {
  contactEmail,
  fullName,
  ghlAutomations,
  offers,
  outcomes,
  projects,
  skills,
  voiceAiPoints,
  voiceAiUrl,
} from "../content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const nav = [
  { href: "#work", label: "Work" },
  { href: "#automations", label: "Automations" },
  { href: "#voice-ai", label: "Voice AI" },
  { href: "#contact", label: "Contact" },
];

export default function ConceptA() {
  return (
    <div
      className={`${fraunces.variable} ${inter.variable} concept-a min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--c-primary)] focus:px-4 focus:py-2 focus:text-[var(--c-primary-ink)]"
      >
        Skip to content
      </a>

      <header className="border-b border-[var(--c-line)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#main"
            className="text-[0.95rem] tracking-tight text-[var(--c-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {fullName}
          </a>
          <nav className="flex items-center gap-5 text-sm text-[var(--c-muted)] sm:gap-7">
            <div className="hidden items-center gap-7 sm:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-300 hover:text-[var(--c-ink)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-[2px] bg-[var(--c-primary)] px-4 py-2 text-[var(--c-primary-ink)] transition-transform duration-300 ease-out hover:-translate-y-px"
            >
              Work together
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:px-10 sm:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="text-sm text-[var(--c-muted)]">Automation &amp; AI systems</p>
              <h1
                className="mt-5 text-wrap-balance text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.02] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
              >
                Systems that answer
                <br />
                <em className="italic">before the lead goes cold.</em>
              </h1>
              <p
                className="mt-8 max-w-xl text-pretty text-lg leading-8 text-[var(--c-muted)]"
                style={{ textWrap: "pretty" }}
              >
                I design and build the automation layer behind busy service businesses —
                GoHighLevel, Zapier, n8n, and voice AI wired together so replies go out in
                seconds, not days.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#contact"
                  className="rounded-[2px] bg-[var(--c-primary)] px-6 py-3.5 text-sm font-medium text-[var(--c-primary-ink)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
                >
                  Book a call
                </a>
                <a
                  href="#voice-ai"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--c-ink)]"
                >
                  Talk to the Voice AI
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>

              <dl className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--c-line)] pt-6 text-sm">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="flex items-baseline gap-2">
                    <dt className="font-medium text-[var(--c-ink)]">{outcome.value}</dt>
                    <dd className="text-[var(--c-muted)]">{outcome.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[3px] bg-[var(--c-surface)]" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] border border-[var(--c-line)]">
                <Image
                  src="/mark-sherwin-portrait.jpg"
                  alt={fullName}
                  fill
                  sizes="(min-width: 1024px) 380px, 60vw"
                  className="object-cover grayscale-[15%]"
                  priority
                />
              </div>
              <p className="mt-4 text-sm text-[var(--c-muted)]">
                Based remotely · working with local service businesses across the US
              </p>
            </div>
          </div>
        </section>

        {/* How I help */}
        <section className="border-t border-[var(--c-line)] bg-[var(--c-surface)] px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2
              className="reveal text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
            >
              Less chasing.
              <br />
              More closing.
            </h2>
            <ul className="divide-y divide-[var(--c-line)]">
              {offers.map((offer) => (
                <li
                  key={offer}
                  className="reveal py-6 text-xl leading-8 text-[var(--c-ink)] first:pt-0 sm:text-2xl"
                >
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Automations */}
        <section id="automations" className="scroll-mt-20 px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-6">
              <h2
                className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Automations built for local growth
              </h2>
              <p className="max-w-sm text-[var(--c-muted)]">
                Practical workflows for clinics, agencies, real estate, and home services —
                more booked conversations, less manual admin.
              </p>
            </div>
            <div className="border-t border-[var(--c-line)]">
              {ghlAutomations.map((automation) => (
                <div
                  key={automation.name}
                  className="reveal grid gap-2 border-b border-[var(--c-line)] py-6 transition-colors duration-300 hover:bg-[var(--c-surface)] sm:grid-cols-[1fr_1.4fr_auto] sm:items-center sm:gap-8 sm:px-4"
                >
                  <p
                    className="text-xl tracking-[-0.005em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {automation.name}
                  </p>
                  <p className="text-[var(--c-muted)]">{automation.detail}</p>
                  <span className="w-fit rounded-[2px] bg-[var(--c-accent)] px-3 py-1.5 text-xs font-medium text-[var(--c-accent-ink)] sm:justify-self-end">
                    {automation.outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="scroll-mt-20 border-t border-[var(--c-line)] bg-[var(--c-surface)] px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2
              className="reveal mb-12 text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Selected builds
            </h2>
            <div className="divide-y divide-[var(--c-line)] border-y border-[var(--c-line)]">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="reveal group grid gap-2 py-8 transition-colors duration-300 sm:grid-cols-[1.2fr_1.4fr_0.8fr] sm:items-baseline sm:gap-8"
                >
                  <p
                    className="text-2xl tracking-[-0.01em] transition-colors duration-300 group-hover:text-[var(--c-primary)] sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.name}
                  </p>
                  <p className="text-[var(--c-muted)]">{project.detail}</p>
                  <p className="text-sm font-medium text-[var(--c-ink)] sm:justify-self-end">
                    {project.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Voice AI */}
        <section id="voice-ai" className="scroll-mt-20 px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[3px] border border-[var(--c-line)]">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="reveal bg-[var(--c-primary)] p-8 text-[var(--c-primary-ink)] sm:p-12">
                <p className="text-sm opacity-70">Featured build</p>
                <h2
                  className="mt-4 text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.05] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
                >
                  A voice agent that never lets a call go unanswered.
                </h2>
                <p className="mt-6 max-w-md leading-7 opacity-80">
                  Built on Retell AI — answers, qualifies, and collects lead details while
                  your team stays focused on the work in front of them.
                </p>
                <ul className="mt-8 space-y-3">
                  {voiceAiPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm opacity-90">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--c-surface)] p-4 sm:p-6">
                <div className="overflow-hidden rounded-[3px] border border-[var(--c-line)] bg-white">
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
              className="reveal mb-10 text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Toolkit
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="reveal">
                  <p className="text-sm text-[var(--c-muted)]">{group}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-[2px] border border-[var(--c-line)] px-3 py-1.5 text-sm text-[var(--c-ink)] transition-colors duration-300 hover:border-[var(--c-primary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
              <p className="text-sm text-[var(--c-muted)]">Contact</p>
              <h2
                className="mt-4 max-w-2xl text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-display)", textWrap: "balance" }}
              >
                Build the workflow once.
              </h2>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="w-fit rounded-[2px] bg-[var(--c-primary)] px-6 py-3.5 text-sm font-medium text-[var(--c-primary-ink)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              {contactEmail}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
