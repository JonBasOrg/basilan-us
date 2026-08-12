import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <header className="relative overflow-hidden border-b border-ink-700/50 pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-radial-accent" />
      </div>
      <div className="container-x pb-16">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-chalk-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
        </Reveal>
        <Reveal delay={0.05} className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} pulse={project.status === "Live" || project.status === "Published"} />
            <span className="text-xs uppercase tracking-wider2 text-chalk-faint">
              {project.category} · {project.year}
            </span>
          </div>
          <h1 className="mt-5 font-display text-display-lg text-balance">
            {project.name}
          </h1>
          <p className="mt-5 max-w-prose text-pretty text-xl leading-relaxed text-chalk-muted">
            {project.tagline}
          </p>
        </Reveal>
      </div>
    </header>
  );
}

export function CaseStudyCTA({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="section-tight">
      <div className="container-x">
        <Reveal className="surface relative overflow-hidden rounded-xl3 px-8 py-14 text-center sm:px-16 py-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-display-md text-balance">
              Explore {project.name}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target={project.hub ? "_blank" : undefined}
                  rel={project.hub ? "noopener noreferrer" : undefined}
                  className="btn-primary"
                >
                  {project.hub ? "Open" : "Open project"} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.googlePlay && (
                <a
                  href={project.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Get it on Google Play <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <Link href="/projects" className="btn-ghost">
                Back to projects
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TechList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-ink-700 bg-ink-850 px-3 py-1 text-xs text-chalk-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
