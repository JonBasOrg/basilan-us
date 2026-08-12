import Image from "next/image";
import type { Project } from "@/content/projects";
import { GamesMockup } from "@/components/ui/GamesMockup";
import { Reveal } from "@/components/ui/Reveal";
import { TechList, CaseStudyHero, CaseStudyCTA } from "./CaseStudyShell";
import { Gamepad2, Smartphone, Globe, ShieldCheck } from "lucide-react";

const games = [
  "Tic-Tac-Toe",
  "Minesweeper",
  "Sudoku",
  "Klondike Solitaire",
  "2048",
  "Four in a Row",
  "Snake",
  "Checkers",
  "Chess",
  "Tetris",
  "Memory Match",
];

const pillars = [
  {
    icon: Gamepad2,
    title: "Eleven classic games",
    body: "Board, card, and puzzle favorites — each built as an isolated module so the library can keep growing without breaking what already works.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "No ads, no analytics, no accounts. Progress and statistics stay on your device. The optional photo mode only ever sees pictures you pick.",
  },
  {
    icon: Smartphone,
    title: "Built for Android",
    body: "A native Flutter app with a responsive layout that feels right on phones and tablets alike.",
  },
  {
    icon: Globe,
    title: "Play anywhere",
    body: "Available on Google Play and coming soon as a browser version at games.basilan.us.",
  },
];

export function ClassicGamesCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyHero project={project} />

      {/* Hero device + screenshots */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <GamesMockup src="/projects/classic-games/hero.jpg" />
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <span className="eyebrow"><Gamepad2 className="h-3.5 w-3.5" /> Why I built it</span>
            <h2 className="font-display text-display-md text-balance">
              The games you remember, rebuilt for today.
            </h2>
            <p className="text-pretty leading-relaxed text-chalk-muted">
              I wanted a clean, friendly place to play the classics without ads,
              accounts, or distractions — and a real product to practice
              building polished, offline-first mobile software. The result is a
              small library that respects your time and your privacy.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {["Offline play", "Local progress", "Responsive UI", "No tracking"].map((f) => (
                <div key={f} className="surface flex items-center gap-2 p-3 text-sm text-chalk-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {f}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-ink-900/30">
        <div className="container-x">
          <Reveal className="max-w-prose">
            <span className="eyebrow">Screens</span>
            <h2 className="mt-4 font-display text-display-md text-balance">A look inside</h2>
          </Reveal>
          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.gallery?.map((src, i) => (
              <Reveal key={src} delay={i * 0.05} className="surface overflow-hidden rounded-xl2">
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src={src}
                    alt={`Classic Games screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Games list */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-prose">
            <span className="eyebrow">The collection</span>
            <h2 className="mt-4 font-display text-display-md text-balance">
              Games included
            </h2>
            <p className="mt-5 text-pretty text-lg text-chalk-muted">
              Each game is a self-contained module with its own engine and rules.
            </p>
          </Reveal>
          <Reveal className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((g, i) => (
              <Reveal key={g} delay={i * 0.03} className="surface flex items-center gap-3 p-4">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-chalk">{g}</span>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-ink-900/30">
        <div className="container-x">
          <Reveal className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="surface flex flex-col gap-3 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl2 border border-accent/30 bg-accent/10 text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg text-chalk">{p.title}</h3>
                <p className="text-pretty text-sm text-chalk-muted">{p.body}</p>
              </Reveal>
            ))}
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
              The app is written in Dart with Flutter for a single, native
              codebase across Android devices, using local-first storage for
              preferences and progress. Game logic lives in isolated, testable
              modules.
            </p>
          </Reveal>
        </div>
      </section>

      <CaseStudyCTA project={project} />
    </>
  );
}
