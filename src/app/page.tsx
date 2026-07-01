const projects = [
  {
    name: "Lead response engine",
    detail: "New leads routed, tagged, and followed up before they go cold.",
    result: "Reply in under 60 seconds",
  },
  {
    name: "Booking automation",
    detail: "Forms, calendars, reminders, and pipeline stages connected end to end.",
    result: "Fewer missed appointments",
  },
  {
    name: "AI client intake",
    detail: "Voice AI captures details, qualifies leads, and sends clean notes to the CRM.",
    result: "24/7 lead capture",
  },
];

const outcomes = [
  {
    value: "24/7",
    label: "lead capture",
  },
  {
    value: "<60s",
    label: "speed to lead",
  },
  {
    value: "10+ hrs",
    label: "saved weekly",
  },
];

const offers = [
  "Turn missed calls and form fills into booked opportunities.",
  "Connect GoHighLevel, Zapier, n8n, webhooks, and AI into one clean system.",
  "Automate follow-ups, reminders, handoffs, and client onboarding.",
];

const ghlAutomations = [
  {
    name: "Missed call text back",
    detail: "Instant SMS replies when a customer calls and no one answers.",
    outcome: "Recover lost leads",
  },
  {
    name: "Speed-to-lead follow-up",
    detail: "New inquiries get tagged, assigned, and contacted automatically.",
    outcome: "Book while interest is hot",
  },
  {
    name: "Appointment reminders",
    detail: "SMS and email reminders before visits, calls, estimates, or consultations.",
    outcome: "Reduce no-shows",
  },
  {
    name: "Review generation",
    detail: "Happy customers receive clean review requests after the job is completed.",
    outcome: "Grow local trust",
  },
  {
    name: "Lead reactivation",
    detail: "Old leads and past customers get smart follow-up campaigns.",
    outcome: "Create repeat revenue",
  },
  {
    name: "Pipeline automation",
    detail: "Deals move through stages with tasks, notifications, and handoffs.",
    outcome: "Stay organized",
  },
];

const skills = [
  "GoHighLevel workflows",
  "Zapier automations",
  "n8n workflows",
  "CRM pipeline setup",
  "Lead capture systems",
  "Appointment booking",
  "Email and SMS follow-up",
  "Webhook integrations",
  "API connections",
  "Form automation",
  "Client onboarding flows",
  "AI-powered workflows",
];

const voiceAiUrl =
  "https://agent.retellai.com/orb/agent_dd540600e9a86a7de5a9bdd7a6?token=be40d9a1c4ee510cc72a088bcc9f89d3";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#111111]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a className="text-sm font-medium tracking-tight transition-opacity hover:opacity-60" href="#hero">
            Mark Sherwin Libunao
          </a>
          <div className="flex items-center gap-5 text-xs text-black/55">
            <a className="transition-colors hover:text-black" href="#ghl">
              GHL
            </a>
            <a className="transition-colors hover:text-black" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-black" href="#voice-ai">
              Voice AI
            </a>
            <a className="transition-colors hover:text-black" href="#skills">
              Skills
            </a>
            <a className="transition-colors hover:text-black" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium text-black/50">Automation portfolio</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-black sm:text-7xl lg:text-8xl">
              Mark Sherwin Libunao
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-black/58 sm:text-2xl sm:leading-9">
              I build automation systems that help businesses capture leads, reply faster, and book more work.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black/85"
                href="#contact"
              >
                Work together
              </a>
              <a
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/[0.03]"
                href="#voice-ai"
              >
                Try Voice AI
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,245,247,0.95),transparent_48%)]" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="flex items-center justify-between text-xs text-black/40">
                <span>Growth stack</span>
                <span>AI ready</span>
              </div>

              <div className="space-y-3">
                {["Capture", "Qualify", "Book"].map((item, index) => (
                  <div
                    className="group flex items-center justify-between rounded-2xl border border-black/[0.06] bg-[#fbfbfd] p-4 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
                    key={item}
                  >
                    <div>
                      <p className="text-sm font-medium">{item}</p>
                      <p className="mt-1 text-xs text-black/45">Connected</p>
                    </div>
                    <div className="h-2 w-24 rounded-full bg-black/[0.08]">
                      <div
                        className="h-full rounded-full bg-black transition-all duration-700 group-hover:w-full"
                        style={{ width: `${64 + index * 12}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-black p-5 text-white">
                <p className="text-xs text-white/45">Outcome</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">More booked leads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <div className="border-b border-black/[0.08] pb-8 md:border-b-0 md:pb-0" key={outcome.label}>
              <p className="text-5xl font-semibold tracking-tight text-black">{outcome.value}</p>
              <p className="mt-3 text-sm text-black/48">{outcome.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-black/45">How I help</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Less chasing. More closing.
            </h2>
          </div>
          <div className="space-y-4">
            {offers.map((offer) => (
              <div
                className="rounded-[1.5rem] border border-black/[0.08] bg-white p-6 text-lg leading-8 text-black/68 shadow-[0_18px_70px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:text-black"
                key={offer}
              >
                {offer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ghl" className="scroll-mt-20 border-t border-black/[0.06] bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-medium text-black/45">GoHighLevel systems</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Automations built for local growth.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/56">
              Practical workflows for service businesses, clinics, agencies, real estate teams, home services, and
              local operators who need more booked conversations without more manual admin.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ghlAutomations.map((automation) => (
              <article
                className="rounded-[1.5rem] border border-black/[0.08] bg-[#fbfbfd] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(0,0,0,0.07)]"
                key={automation.name}
              >
                <p className="mb-8 w-fit rounded-full bg-white px-3 py-1 text-xs text-black/45">
                  {automation.outcome}
                </p>
                <h3 className="text-xl font-semibold tracking-tight">{automation.name}</h3>
                <p className="mt-3 text-sm leading-6 text-black/52">{automation.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-t border-black/[0.06] bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Projects</h2>
            <p className="hidden text-sm text-black/45 sm:block">Selected automation builds</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="rounded-[1.5rem] border border-black/[0.08] bg-[#fbfbfd] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(0,0,0,0.07)]"
                key={project.name}
              >
                <p className="mb-8 w-fit rounded-full bg-white px-3 py-1 text-xs text-black/45">
                  {project.result}
                </p>
                <p className="text-xl font-semibold tracking-tight">{project.name}</p>
                <p className="mt-3 text-sm leading-6 text-black/52">{project.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="voice-ai" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-black text-white lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 sm:p-12">
            <p className="text-sm text-white/45">Featured build</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Voice AI agent for instant conversations.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">
              A Retell AI voice agent that can answer, qualify, and collect lead details while your team stays focused.
            </p>
            <a
              className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/88"
              href={voiceAiUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in new tab
            </a>
          </div>
          <div className="border-t border-white/10 bg-white/[0.04] p-4 sm:p-6 lg:border-l lg:border-t-0">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
              <iframe
                className="h-[620px] w-full bg-white"
                src={voiceAiUrl}
                title="Retell Voice AI agent demo"
                allow="microphone; autoplay; clipboard-write"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["Answers missed calls", "Qualifies new leads", "Sends clean CRM notes", "Works after hours"].map(
                (item) => (
                  <div className="flex items-center justify-between rounded-2xl bg-white/[0.08] p-4" key={item}>
                    <span className="text-sm text-white/72">{item}</span>
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Skills</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-full border border-black/[0.08] bg-white px-5 py-3 text-sm text-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-0.5 hover:text-black"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black px-6 py-24 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-white/45">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Build the workflow once.
            </h2>
          </div>
          <a
            className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/88"
            href="mailto:mark@example.com"
          >
            mark@example.com
          </a>
        </div>
      </section>
    </main>
  );
}
