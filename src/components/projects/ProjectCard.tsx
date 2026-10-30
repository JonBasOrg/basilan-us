import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Layers } from "lucide-react";
import type { Project } from "@/content/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TradingMockup } from "@/components/ui/TradingMockup";
import { GamesMockup } from "@/components/ui/GamesMockup";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,

  emphasize,
}: {
  project: Project;
  index?: number;
  emphasize?: boolean;
}) {
  const isWide = emphasize ?? project.featured;
  const href = project.caseStudy ?? project.url ?? "#";
  const external = !!project.url && !project.caseStudy;
  const displayStatus = project.status;

  return (
    <Link
      href={href}
      data-enterprise-card={project.kind === "employer" ? "true" : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group surface relative flex h-full flex-col overflow-hidden rounded-xl3 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift",
        isWide && "md:col-span-2"
      )}
    >
      {/* media */}
      <div className={cn("relative overflow-hidden border-b border-ink-700/60 bg-ink-900", project.kind === "employer" ? "h-16" : "aspect-[16/10]")}>
        {project.kind === "employer" ? <div className="absolute inset-0 flex items-center px-6 text-accent"><Layers aria-hidden="true" className="h-5 w-5" /></div> : project.useMockup === "trading" ? (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ink-900 to-ink-850 p-6">
            <TradingMockup />
          </div>
        ) : project.useMockup === "games" ? (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ink-900 to-ink-850 p-6">
            <GamesMockup
              src={project.image ?? "/projects/classic-games/hero.jpg"}
              className="scale-90"
            />
          </div>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-grid" />
        )}
        <div className="absolute right-4 top-4 z-10">
          <StatusBadge status={displayStatus} pulse={displayStatus === "Live" || displayStatus === "Published"} />
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        {project.approval === "pending" && <p className="mb-4 text-xs text-accent">Pending approval · Local review</p>}
        <div className="flex items-center gap-3 text-xs uppercase tracking-wider2 text-chalk-faint">
          <span>{project.category}</span>
          {project.year !== null && <><span className="h-1 w-1 rounded-full bg-ink-600" /><span>{project.year}</span></>}
        </div>
        <h3 className="mt-3 font-display text-2xl text-chalk transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-pretty text-chalk-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-700 bg-ink-850 px-2.5 py-1 text-[11px] text-chalk-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink-700/60 pt-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-accent">
            {project.caseStudy ? "View case study" : "Open project"}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
