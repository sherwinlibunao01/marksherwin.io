import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import { FWire } from "./FWire";
import { DecodeValue } from "../DecodeValue";
import { StaggerGroup } from "../StaggerGroup";
import "./fd.css";
import {
  caseStudies,
  contactEmail,
  facebookUrl,
  faqs,
  fullName,
  ghlAutomations,
  howItWorks,
  linkedinUrl,
  outcomes,
  voiceAiPoints,
  voiceAiUrl,
} from "../content";

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

// A/B variant: keep it out of search indexes so it never competes with "/".
export const metadata: Metadata = {
  title: `${fullName} — A×D`,
  description:
    "Automation systems for businesses that hate dropped leads. GoHighLevel, Zapier, n8n, and voice AI wired into one working system.",
  robots: { index: false },
};

// Short row headlines; fix + benefit come straight from A's copy.
const rowHeads = [
  "Every lead lands in one system.",
  "Hot leads never wait in line.",
  "A reply in seconds, not days.",
  "Booked, reminded, followed up.",
];
const rowRefs = ["capture.log", "qualify.log", "respond.log", "book.log"];
// F-only: each stage presses the pain first, then lands the automation
// as the definite fix (the fix line is the stage's shared detail copy).
const rowPains = [
  "An after-hours call that hits voicemail doesn't wait for morning. It dials your competitor next.",
  "A ready-to-buy lead buried under tire-kickers gets the same slow reply as everyone else, then buys from whoever treated them like a priority.",
  "By the time “we’ll get back to you tomorrow” happens, the lead has already booked with someone faster.",
  "A lead that says yes but never lands on the calendar quietly turns back into a no, and nobody notices until the month is slow.",
];

export default function VariantF() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} fdx`}
      data-wire-root
    >
      <div className="field-grid" aria-hidden="true">
        <div className="field-glow" />
      </div>
      <FWire />

      <header className="fd-top">
        <span>{fullName}</span>
        <nav>
          <a href="/">A</a>
          <a href="/b">B</a>
          <a href="/d">D</a>
          <a href="/e">A&times;B</a>
          <a href={`mailto:${contactEmail}`}>email</a>
        </nav>
      </header>

      <main>
        <section className="fd-row fd-hero" data-station="">
          <div className="fd-rail">
            <span className="fd-wnode" data-wire-node aria-hidden="true" />
            <span className="fd-m fd-slam">
              <span className="fd-num" style={{ "--i": 0 } as React.CSSProperties}>
                0
              </span>
            </span>
            <span
              className="fd-ref boot-in"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              dropped.total
            </span>
          </div>
          <div className="fd-hero-grid">
            <div>
              <p
                className="fd-status boot-in"
                style={{ "--i": 0 } as React.CSSProperties}
              >
                <span className="status-dot fd-dot" />
                STATUS: ACCEPTING NEW BUILDS
                <span className="caret" aria-hidden="true" />
              </p>
              <span className="fd-m">
                <h1 style={{ "--i": 1 } as React.CSSProperties}>
                  Zero dropped leads.
                </h1>
              </span>
              <p
                className="fd-d boot-in"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                GoHighLevel, Zapier, n8n, custom APIs, and AI agents wired into
                one working system. From lean teams to enterprise operations:
                capture, qualify, and book without adding headcount.
              </p>
              <div
                className="fd-ctas boot-in"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                <a className="fd-btn" href={`mailto:${contactEmail}`}>
                  Email me
                </a>
                <a className="fd-ghost" href="#voice">
                  Talk to the Voice AI
                </a>
              </div>
              <p
                className="fd-cue boot-in"
                style={{ "--i": 4 } as React.CSSProperties}
              >
                scroll:{" "}
                <span className="fd-cue-hl">
                  <span className="fd-cue-dot" aria-hidden="true" />
                  follow the lead
                  <svg
                    className="fd-scribble"
                    viewBox="0 0 120 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path pathLength={1} d="M2 7 C 18 3, 38 10, 58 6 S 96 8, 118 4" />
                    <path pathLength={1} d="M5 10 C 28 6, 52 11, 78 7 S 108 10, 115 7" />
                  </svg>
                </span>
              </p>
            </div>

            <div
              className="fd-col boot-in"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <div className="fd-panel">
                <div className="fd-panel-head">
                  <span>profile.img</span>
                  <span className="fd-badge">
                    <span className="status-dot fd-dot" />
                    verified
                  </span>
                </div>
                <div className="fd-panel-body">
                  <img
                    src="/mark-sherwin-field-portrait.jpg"
                    alt={fullName}
                    className="fd-portrait"
                  />
                </div>
                <div className="fd-panel-foot">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn &#8599;
                  </a>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook &#8599;
                  </a>
                </div>
              </div>

              <div className="fd-panel">
                <div className="fd-panel-head">
                  <span>targets.log</span>
                  <span className="fd-badge">
                    <span className="status-dot fd-dot" />
                    by design
                  </span>
                </div>
                <div>
                  {outcomes.map((outcome) => (
                    <div key={outcome.label} className="fd-metric">
                      <span>{outcome.label}</span>
                      <span>
                        <DecodeValue value={outcome.value} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {howItWorks.map((stage, i) => (
          <StaggerGroup
            key={stage.step}
            className="fd-row section-seam"
            data-station=""
          >
            <div className="fd-rail">
              <span className="fd-wnode" data-wire-node aria-hidden="true" />
              <span className="fd-m fd-slam">
                <span
                  className="fd-num"
                  style={{ "--i": 0 } as React.CSSProperties}
                >
                  {stage.step}
                </span>
              </span>
              <span
                className="fd-ref fd-soft"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                {rowRefs[i]}
              </span>
            </div>
            <div>
              <span className="fd-m">
                <h2 style={{ "--i": 1 } as React.CSSProperties}>
                  {rowHeads[i]}
                </h2>
              </span>
              <p
                className="fd-pain fd-soft"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                <span className="fd-tag fd-tag-leak">the leak</span>
                {rowPains[i]}
              </p>
              <p
                className="fd-fix fd-soft"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                <span className="fd-tag fd-tag-fix">the fix</span>
                {stage.detail}
              </p>
              <p
                className="fd-benefit fd-soft"
                style={{ "--i": 4 } as React.CSSProperties}
              >
                {stage.benefit}
              </p>
            </div>
          </StaggerGroup>
        ))}

        <StaggerGroup className="fd-row section-seam" data-station="">
          <div className="fd-rail">
            <span className="fd-wnode" data-wire-node aria-hidden="true" />
            <span className="fd-m fd-slam">
              <span className="fd-num" style={{ "--i": 0 } as React.CSSProperties}>
                6&times;
              </span>
            </span>
            <span
              className="fd-ref fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              automations.log
            </span>
          </div>
          <div>
            <span className="fd-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                The workflows I wire most.
              </h2>
            </span>
            <ul className="fd-list fd-soft" style={{ "--i": 2 } as React.CSSProperties}>
              {ghlAutomations.map((a) => (
                <li key={a.name}>
                  <div className="fd-list-row">
                    <span className="fd-list-name">{a.name}</span>
                    <span className="fd-list-out">{a.outcome}</span>
                  </div>
                  <p className="fd-list-pain">{a.problem}</p>
                  <p className="fd-list-d">
                    <span className="fd-tag fd-tag-fix">fix</span>
                    {a.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </StaggerGroup>

        <StaggerGroup className="fd-row section-seam" data-station="">
          <div className="fd-rail">
            <span className="fd-wnode" data-wire-node aria-hidden="true" />
            <span className="fd-m fd-slam">
              <span className="fd-num" style={{ "--i": 0 } as React.CSSProperties}>
                4&times;
              </span>
            </span>
            <span
              className="fd-ref fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              casefile.log
            </span>
          </div>
          <div>
            <span className="fd-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                Proof, not promises.
              </h2>
            </span>
            <p
              className="fd-d fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              Four systems I built from the ground up, still running in the
              field today. No pull-quotes, no reviews to take on faith. Just
              what shipped, and what changed because of it.
            </p>
            <div className="fd-cases">
              {caseStudies.map((c, i) => (
                <article
                  key={c.slug}
                  className={`fd-case stagger-item${c.feature ? " fd-case--feature" : ""}`}
                  style={{ "--i": i + 3 } as React.CSSProperties}
                >
                  <span className="fd-case-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="fd-case-head">
                    <span className="fd-case-ref">{c.ref}</span>
                    <span className="fd-case-outcome">{c.outcome}</span>
                  </div>
                  <h3>{c.name}</h3>
                  <p className="fd-case-niche">{c.niche}</p>
                  <p className="fd-case-line">
                    <span className="fd-tag fd-tag-build">build</span>
                    {c.built}
                  </p>
                  <p className="fd-case-line fd-case-result">
                    <span className="fd-tag fd-tag-fix">result</span>
                    {c.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </StaggerGroup>

        <StaggerGroup
          className="fd-row section-seam"
          as="div"
          data-station=""
        >
          <div className="fd-rail">
            <span className="fd-wnode" data-wire-node aria-hidden="true" />
            <span className="fd-m fd-slam">
              <span className="fd-num" style={{ "--i": 0 } as React.CSSProperties}>
                Live
              </span>
            </span>
            <span
              className="fd-ref fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              voice-agent.sys
            </span>
          </div>
          <div id="voice">
            <span className="fd-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                A voice agent that never lets a call go unanswered.
              </h2>
            </span>
            <p
              className="fd-d fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              Built on Retell AI: it answers, qualifies, and collects lead
              details while your team stays focused on the work in front of
              them.
            </p>
            <ul
              className="fd-points fd-soft"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              {voiceAiPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p
              className="fd-benefit fd-soft"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              Don&rsquo;t take my word for it. Press talk and interview it
              yourself.
            </p>
            <div
              className="fd-orb fd-panel fd-soft"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              <div className="fd-panel-head">
                <span>voice-demo.run</span>
                <span className="fd-badge">
                  <span className="status-dot fd-dot" />
                  online
                </span>
              </div>
              <iframe
                loading="lazy"
                src={voiceAiUrl}
                title="Retell voice AI agent, live demo"
                allow="microphone; autoplay; clipboard-write"
              />
            </div>
            <p
              className="fd-d fd-fallback fd-soft"
              style={{ "--i": 5 } as React.CSSProperties}
            >
              The demo streams audio. No audio right now? Email me and
              I&rsquo;ll send a recorded walkthrough.
            </p>
          </div>
        </StaggerGroup>

        <StaggerGroup className="fd-row section-seam" data-station="">
          <div className="fd-rail">
            <span className="fd-wnode" data-wire-node aria-hidden="true" />
            <span className="fd-m fd-slam">
              <span className="fd-num" style={{ "--i": 0 } as React.CSSProperties}>
                ?
              </span>
            </span>
            <span
              className="fd-ref fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              faq.log
            </span>
          </div>
          <div>
            <span className="fd-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                What buyers ask first.
              </h2>
            </span>
            <div
              className="fd-faq fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span className="fd-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </StaggerGroup>

        <StaggerGroup className="fd-row fd-drench" as="div" data-station="">
          <div className="fd-rail">
            <span className="fd-wnode" data-wire-node aria-hidden="true" />
            <span className="fd-m fd-slam">
              <span className="fd-num" style={{ "--i": 0 } as React.CSSProperties}>
                1&times;
              </span>
            </span>
            <span
              className="fd-ref fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              contact.init()
            </span>
          </div>
          <div>
            <span className="fd-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                Build the workflow <em>once.</em>
              </h2>
            </span>
            <div
              className="fd-endrow fd-soft"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              <img
                src="/mark-sherwin-field-portrait.jpg"
                alt={fullName}
                className="fd-face"
              />
              <p className="fd-d">
                I&rsquo;m {fullName}. I design and wire the automation layer
                between a business&rsquo;s tools, working together as one
                system.
              </p>
            </div>
            <p
              className="fd-d fd-soft"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              One email gets you a plain-language plan and a fixed quote for
              your exact leak. If automation won&rsquo;t fix it, I&rsquo;ll
              tell you that too.
            </p>
            <div
              className="fd-ctas fd-soft"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              <a className="fd-btn" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
            <p
              className="fd-links fd-soft"
              style={{ "--i": 5 } as React.CSSProperties}
            >
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn &#8599;
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook &#8599;
              </a>
            </p>
            <p
              className="fd-tools fd-soft"
              style={{ "--i": 6 } as React.CSSProperties}
            >
              GoHighLevel · Zapier · n8n · Retell AI · Claude · GPT · Gemini ·
              MCP servers · webhooks &amp; custom APIs
            </p>
          </div>
        </StaggerGroup>
      </main>

      <footer className="fd-foot">
        <span>
          &copy; {new Date().getFullYear()} {fullName}
        </span>
        <span>GoHighLevel · Zapier · n8n · Retell AI</span>
      </footer>
    </div>
  );
}
