import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import { Wire } from "../b/Wire";
import { DecodeValue } from "../DecodeValue";
import "../b/wire.css";
import "./mix.css";
import {
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
  title: `${fullName} — A×B`,
  description:
    "Automation systems for businesses that hate dropped leads. GoHighLevel, Zapier, n8n, and voice AI wired into one working system.",
  robots: { index: false },
};

// Short station headlines; detail + benefit come straight from A's copy.
const stationHeads = [
  "Every lead lands in one system.",
  "Hot leads never wait in line.",
  "A reply in seconds, not days.",
  "Booked, reminded, followed up.",
];

export default function VariantE() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} bw ew`}
      data-wire-root
    >
      <div className="field-grid" aria-hidden="true">
        <div className="field-glow" />
      </div>
      <Wire />

      <header className="bw-top">
        <span>{fullName}</span>
        <nav>
          <a href="/">A</a>
          <a href="/b">B</a>
          <a href="/d">D</a>
          <a href="/f">A&times;D</a>
          <a href={`mailto:${contactEmail}`}>email</a>
        </nav>
      </header>

      <main>
        <section className="ew-hero">
          <span className="bw-node-start" data-wire-node aria-hidden="true" />
          <div className="ew-hero-grid">
            <div>
              <p
                className="ew-status boot-in"
                style={{ "--i": 0 } as React.CSSProperties}
              >
                <span className="status-dot ew-dot" />
                STATUS: ACCEPTING NEW BUILDS
                <span className="caret" aria-hidden="true" />
              </p>
              <h1 className="boot-in" style={{ "--i": 1 } as React.CSSProperties}>
                Zero dropped leads.
              </h1>
              <p
                className="bw-sub boot-in"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                GoHighLevel, Zapier, n8n, custom APIs, and AI agents wired into
                one working system. From lean teams to enterprise operations:
                capture, qualify, and book without adding headcount.
              </p>
              <div
                className="bw-ctas boot-in"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                <a className="bw-btn" href={`mailto:${contactEmail}`}>
                  Email me
                </a>
                <a className="bw-ghost" href="#voice">
                  Talk to the Voice AI
                </a>
              </div>
              <p className="bw-cue">scroll: watch one lead travel the system</p>
            </div>

            <div
              className="ew-hero-col boot-in"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              <div className="ew-panel">
                <div className="ew-panel-head">
                  <span>profile.img</span>
                  <span className="ew-badge">
                    <span className="status-dot ew-dot" />
                    verified
                  </span>
                </div>
                <div className="ew-panel-body">
                  <img
                    src="/mark-sherwin-field-portrait.jpg"
                    alt={fullName}
                    className="ew-portrait"
                  />
                </div>
                <div className="ew-panel-foot">
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

              <div className="ew-panel">
                <div className="ew-panel-head">
                  <span>targets.log</span>
                  <span className="ew-badge">
                    <span className="status-dot ew-dot" />
                    by design
                  </span>
                </div>
                <div>
                  {outcomes.map((outcome) => (
                    <div key={outcome.label} className="ew-metric">
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
          <section
            key={stage.step}
            data-station
            className={`bw-station${i % 2 === 1 ? " bw-right" : ""}`}
          >
            <span className="bw-node" data-wire-node aria-hidden="true" />
            <div>
              <p className="bw-k">
                {stage.step} / {stage.name}
              </p>
              <h2>{stationHeads[i]}</h2>
              <p className="bw-d">{stage.detail}</p>
              <p className="ew-benefit">{stage.benefit}</p>
            </div>
          </section>
        ))}

        <section data-station className="bw-station">
          <span className="bw-node" data-wire-node aria-hidden="true" />
          <div>
            <p className="bw-k">automations.log / built to repeat</p>
            <h2>The workflows I wire most.</h2>
            <ul className="bw-list">
              {ghlAutomations.map((a) => (
                <li key={a.name}>
                  <div className="bw-list-row">
                    <span className="bw-list-name">{a.name}</span>
                    <span className="bw-list-out">{a.outcome}</span>
                  </div>
                  <p className="bw-list-d">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="voice"
          data-station
          className="bw-station bw-right bw-voice"
        >
          <span className="bw-node" data-wire-node aria-hidden="true" />
          <div>
            <p className="bw-k">voice-agent.sys / online</p>
            <h2>A voice agent that never lets a call go unanswered.</h2>
            <p className="bw-d">
              Built on Retell AI: it answers, qualifies, and collects lead
              details while your team stays focused on the work in front of
              them.
            </p>
            <ul className="ew-points">
              {voiceAiPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="bw-orb">
              <iframe
                loading="lazy"
                src={voiceAiUrl}
                title="Retell voice AI agent, live demo"
                allow="microphone; autoplay; clipboard-write"
              />
            </div>
            <p className="bw-d bw-fallback">
              The demo streams audio. No audio right now? Email me and
              I&rsquo;ll send a recorded walkthrough.
            </p>
          </div>
        </section>

        <section data-station className="bw-station">
          <span className="bw-node" data-wire-node aria-hidden="true" />
          <div>
            <p className="bw-k">faq.log / answered</p>
            <h2>What buyers ask first.</h2>
            <div className="bw-faq">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span className="bw-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section data-station className="bw-station bw-end">
          <span className="bw-node" data-wire-node aria-hidden="true" />
          <div>
            <p className="bw-k">contact.init() / your turn</p>
            <h2>Build the workflow once.</h2>
            <p className="bw-d">
              I&rsquo;m {fullName}. I design and wire the automation layer
              between a business&rsquo;s tools: GoHighLevel, Zapier, n8n,
              custom APIs, and AI agents, working together as one system.
            </p>
            <div className="bw-ctas">
              <a className="bw-btn" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
            <p className="bw-links">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn &#8599;
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook &#8599;
              </a>
            </p>
            <p className="bw-tools">
              GoHighLevel · Zapier · n8n · Retell AI · Claude · GPT · Gemini ·
              MCP servers · webhooks &amp; custom APIs
            </p>
          </div>
        </section>
      </main>

      <footer className="bw-foot">
        <span>
          &copy; {new Date().getFullYear()} {fullName}
        </span>
        <span>GoHighLevel · Zapier · n8n · Retell AI</span>
      </footer>
    </div>
  );
}
