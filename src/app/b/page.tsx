import type { Metadata } from "next";
import { Bricolage_Grotesque, Martian_Mono } from "next/font/google";
import { Wire } from "./Wire";
import "./wire.css";
import {
  contactEmail,
  facebookUrl,
  faqs,
  fullName,
  ghlAutomations,
  linkedinUrl,
  voiceAiUrl,
} from "../content";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bw-display",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-bw-mono",
});

// A/B variant: keep it out of search indexes so it never competes with "/".
export const metadata: Metadata = {
  title: `${fullName} — B`,
  description:
    "Automation systems for businesses that hate dropped leads. GoHighLevel, Zapier, n8n, and voice AI wired into one working system.",
  robots: { index: false },
};

// One headline per station; the supporting line carries the substance
// (condensed from the same mechanism copy variant A explains at length).
const stations = [
  {
    k: "01 / captured · 24/7",
    h: "Every missed call, form fill, and DM lands in one system.",
    d: "Instead of five separate inboxes nobody checks in time. Nothing slips, even after hours or on weekends.",
    side: "left",
  },
  {
    k: "02 / qualified",
    h: "AI tags intent and urgency the moment a lead arrives.",
    d: "Hot leads and casual browsers never get treated the same, so your time goes to people ready to buy.",
    side: "right",
  },
  {
    k: "03 / answered · <60s",
    h: "A reply in seconds, while the interest is still hot.",
    d: "SMS, email, or the voice agent answers immediately, not the next business day. Whoever replies first usually wins the job.",
    side: "left",
  },
  {
    k: "04 / booked",
    h: "Straight onto the calendar. Follow-up runs until it happens.",
    d: "Appointments book themselves, reminders cut no-shows, and anyone who stalls enters automatic follow-up.",
    side: "right",
  },
];

export default function VariantB() {
  return (
    <div
      className={`${display.variable} ${mono.variable} bw`}
      data-wire-root
    >
      <Wire />

      <header className="bw-top">
        <span>{fullName}</span>
        <nav>
          <a href="/">A</a>
          <a href="/d">D</a>
          <a href="/e">A&times;B</a>
          <a href={`mailto:${contactEmail}`}>email</a>
        </nav>
      </header>

      <main>
        <section className="bw-hero">
          <span className="bw-node-start" data-wire-node aria-hidden="true" />
          <h1>
            <span className="bw-mask">
              <span>Zero dropped</span>
            </span>
            <span className="bw-mask">
              <span className="bw-alt">leads.</span>
            </span>
          </h1>
          <p className="bw-sub">
            GoHighLevel, Zapier, n8n, custom APIs, and AI agents wired into one
            working system. From lean teams to enterprise operations: capture,
            qualify, and book without adding headcount.
          </p>
          <div className="bw-ctas">
            <a className="bw-btn" href={`mailto:${contactEmail}`}>
              Email me
            </a>
            <a className="bw-ghost" href="#voice">
              Hear the voice agent
            </a>
          </div>
          <p className="bw-cue">scroll: watch one lead travel the system</p>
        </section>

        {stations.map((s) => (
          <section
            key={s.k}
            data-station
            className={`bw-station${s.side === "right" ? " bw-right" : ""}`}
          >
            <span className="bw-node" data-wire-node aria-hidden="true" />
            <div>
              <p className="bw-k">{s.k}</p>
              <h2>{s.h}</h2>
              <p className="bw-d">{s.d}</p>
            </div>
          </section>
        ))}

        <section data-station className="bw-station">
          <span className="bw-node" data-wire-node aria-hidden="true" />
          <div>
            <p className="bw-k">05 / built to repeat</p>
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
            <p className="bw-k">live / the voice that answers</p>
            <h2>Talk to it yourself.</h2>
            <p className="bw-d">
              Built on Retell AI: it answers missed calls, qualifies new leads,
              sends clean CRM notes, and works after hours.
            </p>
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
            <p className="bw-k">faq / straight answers</p>
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
            <p className="bw-k">end of the line / your turn</p>
            <h2>Build the workflow once.</h2>
            <div className="bw-endrow">
              <img
                src="/mark-sherwin-field-portrait.jpg"
                alt={fullName}
                className="bw-face"
              />
              <p className="bw-d">
                I&rsquo;m {fullName}. I design and wire the automation layer
                between a business&rsquo;s tools, working as one system instead
                of a pile of disconnected steps.
              </p>
            </div>
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
