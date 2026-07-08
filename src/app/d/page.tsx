import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { StaggerGroup } from "../StaggerGroup";
import "./ledger.css";
import {
  contactEmail,
  facebookUrl,
  fullName,
  linkedinUrl,
  voiceAiUrl,
} from "../content";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lg-sans",
});

// A/B variant: keep it out of search indexes so it never competes with "/".
export const metadata: Metadata = {
  title: `${fullName} — D`,
  description:
    "Automation, not admin. GoHighLevel, Zapier, n8n, and voice AI wired into one working system.",
  robots: { index: false },
};

export default function VariantD() {
  return (
    <div className={`${sans.variable} lgx`}>
      <header className="lg-top">
        <span>{fullName}</span>
        <nav>
          <a href="/">A</a>
          <a href="/b">B</a>
          <a href="/e">A&times;B</a>
          <a href="/f">A&times;D</a>
          <a href={`mailto:${contactEmail}`}>email</a>
        </nav>
      </header>

      <main>
        <StaggerGroup className="lg-row">
          <span className="lg-m">
            <span className="lg-num" style={{ "--i": 0 } as React.CSSProperties}>
              01
            </span>
          </span>
          <div>
            <span className="lg-m">
              <h1 style={{ "--i": 1 } as React.CSSProperties}>
                Automation, <em>not admin.</em>
              </h1>
            </span>
            <p className="lg-d lg-soft" style={{ "--i": 2 } as React.CSSProperties}>
              GoHighLevel, Zapier, n8n, and voice AI. One system, zero
              busywork.
            </p>
            <div className="lg-ctas lg-soft" style={{ "--i": 3 } as React.CSSProperties}>
              <a className="lg-btn" href={`mailto:${contactEmail}`}>
                Email me
              </a>
              <a className="lg-ghost" href="#voice">
                Hear the voice agent
              </a>
            </div>
          </div>
        </StaggerGroup>

        <StaggerGroup className="lg-row">
          <span className="lg-m">
            <span className="lg-num" style={{ "--i": 0 } as React.CSSProperties}>
              24/7
            </span>
          </span>
          <div>
            <span className="lg-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                Captured around the clock.
              </h2>
            </span>
            <p className="lg-d lg-soft" style={{ "--i": 2 } as React.CSSProperties}>
              Every missed call, form fill, and DM lands in one system, even
              after hours.
            </p>
          </div>
        </StaggerGroup>

        <StaggerGroup className="lg-row">
          <span className="lg-m">
            <span className="lg-num" style={{ "--i": 0 } as React.CSSProperties}>
              60s
            </span>
          </span>
          <div>
            <span className="lg-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                Answered in under a minute.
              </h2>
            </span>
            <p className="lg-d lg-soft" style={{ "--i": 2 } as React.CSSProperties}>
              Speed to lead wins the job. Whoever replies first usually books
              it.
            </p>
          </div>
        </StaggerGroup>

        <StaggerGroup className="lg-row">
          <span className="lg-m">
            <span className="lg-num" style={{ "--i": 0 } as React.CSSProperties}>
              0
            </span>
          </span>
          <div>
            <span className="lg-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                Dropped leads.
              </h2>
            </span>
            <p className="lg-d lg-soft" style={{ "--i": 2 } as React.CSSProperties}>
              Qualified by AI, booked on the calendar, followed up
              automatically until they show.
            </p>
          </div>
        </StaggerGroup>

        <StaggerGroup className="lg-row" as="div">
          <span className="lg-m">
            <span className="lg-num" style={{ "--i": 0 } as React.CSSProperties}>
              Live
            </span>
          </span>
          <div id="voice">
            <span className="lg-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                Hear the voice that answers.
              </h2>
            </span>
            <div className="lg-orb lg-soft" style={{ "--i": 2 } as React.CSSProperties}>
              <iframe
                loading="lazy"
                src={voiceAiUrl}
                title="Retell voice AI agent, live demo"
                allow="microphone; autoplay; clipboard-write"
              />
            </div>
            <p
              className="lg-d lg-fallback lg-soft"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              The demo streams audio. No audio right now? Email me and
              I&rsquo;ll send a recorded walkthrough.
            </p>
          </div>
        </StaggerGroup>

        <StaggerGroup className="lg-row">
          <span className="lg-m">
            <span className="lg-num" style={{ "--i": 0 } as React.CSSProperties}>
              1&times;
            </span>
          </span>
          <div>
            <span className="lg-m">
              <h2 style={{ "--i": 1 } as React.CSSProperties}>
                Build the workflow <em>once.</em>
              </h2>
            </span>
            <div className="lg-endrow lg-soft" style={{ "--i": 2 } as React.CSSProperties}>
              <img
                src="/mark-sherwin-field-portrait.jpg"
                alt={fullName}
                className="lg-face"
              />
              <p className="lg-d">
                I&rsquo;m {fullName}. I design and wire these systems for
                clinics, agencies, and local teams.
              </p>
            </div>
            <div className="lg-ctas lg-soft" style={{ "--i": 3 } as React.CSSProperties}>
              <a className="lg-btn" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
            <p className="lg-links lg-soft" style={{ "--i": 4 } as React.CSSProperties}>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn &#8599;
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook &#8599;
              </a>
            </p>
          </div>
        </StaggerGroup>
      </main>

      <footer className="lg-foot">
        <span>
          &copy; {new Date().getFullYear()} {fullName}
        </span>
        <span>GoHighLevel · Zapier · n8n · Retell AI</span>
      </footer>
    </div>
  );
}
