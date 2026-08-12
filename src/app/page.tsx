import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Cpu, TrendingUp, Gamepad2 } from "lucide-react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { currentlyBuilding, ideaToSoftware } from "@/content/currently-building";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { TradingMockup } from "@/components/ui/TradingMockup";
import { GamesMockup } from "@/components/ui/GamesMockup";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusStrip } from "@/components/layout/StatusStrip";
import { Hero } from "@/components/sections/Hero";
import { IdeaToSoftware } from "@/components/sections/IdeaToSoftware";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";

export default function HomePage() {
  const featured = projects
    .filter((p) => p.featured && p.slug !== "classic-games-web")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const trading = projects.find((p) => p.slug === "trading-platform")!;
  const games = projects.find((p) => p.slug === "classic-games")!;

  return (
    <>
      <Hero />
      <StatusStrip />

      {/* Selected work */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Real things, built and shipped."
              description="A few of the systems I've designed, built, and continue to improve."
            />
            <Reveal className="shrink-0">
              <Link href="/projects" className="btn-ghost">
                All projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal as="div" key={p.slug}>
                <ProjectCard project={p} index={i} emphasize={false} />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Trading platform feature */}
      <section className="section bg-ink-900/30">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <TrendingUp className="h-3.5 w-3.5" /> Flagship · Trading
            </span>
            <h2 className="mt-4 font-display text-display-md text-balance">
              {trading.name}
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-chalk-muted">
              {trading.description}
            </p>
            <ul className="mt-6 space-y-3 text-chalk-muted">
              {[
                "AI-assisted market analysis and multi-agent research",
                "Strategy testing, backtesting, and paper trading",
                "Read-only broker market-data integration",
                "Deterministic risk controls — paper-only by design",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={trading.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open Trading Dashboard <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/projects/trading-platform" className="btn-ghost">
                Read the case study
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TradingMockup />
          </Reveal>
        </div>
      </section>

      {/* Classic games feature */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <GamesMockup src="/projects/classic-games/hero.jpg" />
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <span className="eyebrow">
              <Gamepad2 className="h-3.5 w-3.5" /> Flagship · Games
            </span>
            <h2 className="mt-4 font-display text-display-md text-balance">
              {games.name}
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-chalk-muted">
              {games.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Tic-Tac-Toe", "Minesweeper", "Sudoku", "Solitaire", "2048", "Chess", "Tetris", "Snake", "Checkers", "Connect Four", "Memory Match"].map(
                (g) => (
                  <span
                    key={g}
                    className="rounded-full border border-ink-700 bg-ink-850 px-3 py-1 text-xs text-chalk-muted"
                  >
                    {g}
                  </span>
                )
              )}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://games.basilan.us"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Play in browser <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/projects/classic-games" className="btn-ghost">
                Read the case study
              </Link>
            </div>
            {games.googlePlay ? (
              <a
                href={games.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-chalk-muted hover:text-accent"
              >
                Get it on Google Play <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-chalk-faint">
                <Sparkles className="h-3.5 w-3.5" /> Google Play submission in progress
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <IdeaToSoftware />
      <CurrentlyBuilding />

      {/* Contact CTA */}
      <section className="section-tight">
        <div className="container-x">
          <Reveal className="surface relative overflow-hidden rounded-xl3 px-8 py-14 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-radial-accent" />
            <div className="relative">
              <span className="eyebrow justify-center">Let's build</span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-display-md text-balance">
                Have something interesting in mind?
              </h2>
              <p className="mx-auto mt-5 max-w-prose text-pretty text-lg text-chalk-muted">
                I'm always happy to talk through infrastructure, automation, AI
                experiments, or product ideas.
              </p>
              <a href={`mailto:${site.email}`} className="btn-primary mt-8">
                {site.email} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
