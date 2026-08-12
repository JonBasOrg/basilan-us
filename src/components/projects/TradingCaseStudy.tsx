import type { Project } from "@/content/projects";
import { TradingMockup } from "@/components/ui/TradingMockup";
import { Reveal } from "@/components/ui/Reveal";
import { TechList, CaseStudyHero, CaseStudyCTA } from "./CaseStudyShell";
import { ShieldCheck, Bot, LineChart, Cpu, Activity, Bell } from "lucide-react";

const sections = [
  {
    id: "idea",
    title: "The idea",
    body: "Markets are noisy and full of opinions. I wanted a private space to study them on my own terms — to test ideas with real discipline, keep the research honest, and separate genuine edge from wishful thinking. The result is a personal research lab, not a product sold to anyone.",
  },
  {
    id: "problem",
    title: "The problem",
    body: "Most tooling either hides the reasoning behind a black box or drowns you in raw data. I wanted something in between: clear signals, explainable logic, and guardrails that keep experiments safe while I learn what actually works.",
  },
  {
    id: "what",
    title: "What I built",
    body: "A local-first dashboard that pulls read-only market data, runs strategy research and backtesting, and simulates paper trades with enforced risk controls. It is deliberately paper-only — no live brokerage orders are placed by the system.",
  },
];

const features = [
  { icon: LineChart, title: "AI-assisted market analysis", body: "Multi-agent workflows summarize context and surface study candidates — always as research, never as instructions." },
  { icon: Bot, title: "Strategy research & backtesting", body: "Regime-gated strategies tested against historical data with conservative, explainable scoring." },
  { icon: Cpu, title: "Paper trading engine", body: "Simulated fills and monitored positions starting from a fixed test balance, with strict stop/target logic." },
  { icon: ShieldCheck, title: "Deterministic risk controls", body: "Position limits, exposure caps, and a kill-switch hierarchy. Hard safety rules never depend on the AI layer." },
  { icon: Activity, title: "Read-only broker integration", body: "Market and account data arrive through read-only APIs. The system cannot submit live orders." },
  { icon: Bell, title: "Monitoring & alerts", body: "Scheduled checks and Telegram notifications keep the research loop running without constant manual attention." },
];

export function TradingCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyHero project={project} />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <TradingMockup />
          </Reveal>
          <Reveal delay={0.1} className="space-y-8">
            {sections.map((s) => (
              <div key={s.id}>
                <h2 className="font-display text-2xl text-chalk">{s.title}</h2>
                <p className="mt-3 text-pretty leading-relaxed text-chalk-muted">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How it works — public-safe, no secrets */}
      <section className="section bg-ink-900/30">
        <div className="container-x">
          <Reveal className="max-w-prose">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display text-display-md text-balance">
              A safe research loop
            </h2>
            <p className="mt-5 text-pretty text-lg text-chalk-muted">
              Data flows in read-only, research runs locally, and every action
              stays inside a paper environment. Credentials and keys live only on
              the local machine — nothing sensitive is published or exposed.
            </p>
          </Reveal>

          <Reveal className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.05}
                className="surface flex flex-col gap-3 p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl2 border border-accent/30 bg-accent/10 text-accent">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg text-chalk">{f.title}</h3>
                <p className="text-pretty text-sm text-chalk-muted">{f.body}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* AI + automation */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <span className="eyebrow"><Bot className="h-3.5 w-3.5" /> AI & automation</span>
            <h2 className="mt-4 font-display text-display-md text-balance">
              AI assists. Rules decide.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-pretty leading-relaxed text-chalk-muted">
            <p>
              Independent AI workers help with market-context summarization,
              candidate research, and coaching-style notes on closed paper
              trades. They are observational only.
            </p>
            <p>
              The final decisions — entries, exits, sizing, and risk — are made
              by deterministic code and explicit controls. The AI layer can
              suggest and explain, but it cannot relax a stop, submit an order, or
              change the safety posture. This separation is the whole point of the
              design.
            </p>
            <p>
              Automation handles the repetitive loop: scheduled research
              refreshes, monitoring, and notifications — so the lab keeps working
              even when I'm not watching it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Research & improvement */}
      <section className="section bg-ink-900/30">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal className="space-y-5 text-pretty leading-relaxed text-chalk-muted">
            <h2 className="font-display text-display-md text-chalk">Strategy & research</h2>
            <p>
              Several strategy styles are explored in parallel — from
              broad-universe, regime-gated approaches to more focused momentum and
              volatility research. Each is backtested, paper-tested, and tracked
              with conservative readiness gates before it earns any trust.
            </p>
            <p>
              Performance is treated as a hypothesis to be challenged, not a
              number to be advertised. Small samples are labeled inconclusive, and
              no claims of guaranteed results are ever made.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-pretty leading-relaxed text-chalk-muted">
            <h2 className="font-display text-display-md text-chalk">Always improving</h2>
            <p>
              The platform is a living experiment. New strategies, better
              research tooling, and tighter controls are added over time, with
              each change validated before it can affect anything.
            </p>
            <p>
              It remains a personal research environment — a place to learn how
              markets behave and how automation can help, without risking real
              capital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="section">
        <div className="container-x max-w-prose">
          <Reveal>
            <span className="eyebrow">Technology</span>
            <h2 className="mt-4 font-display text-display-md text-balance">Built with</h2>
            <div className="mt-8">
              <TechList items={project.technologies} />
            </div>
            <p className="mt-8 text-pretty leading-relaxed text-chalk-muted">
              The system is implemented in Python for research, data, and
              automation, with a web dashboard for exploration. Market data is
              integrated read-only, and automation runs through scheduled jobs
              with monitoring and alerting.
            </p>
          </Reveal>
        </div>
      </section>

      <CaseStudyCTA project={project} />
    </>
  );
}
