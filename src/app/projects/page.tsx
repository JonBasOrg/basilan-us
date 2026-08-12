"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { RevealGroup, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = [
  "All",
  "AI",
  "Trading",
  "Games",
  "Automation",
  "Web",
  "Experiments",
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <section className="section-tight pb-0 pt-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Projects"
            title="Everything I'm building."
            description="Products, experiments, and tools — each one a real system, not a mockup. Filter by what you're curious about."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          {/* filter bar */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all duration-300",
                  active === f
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-ink-600 text-chalk-muted hover:border-ink-600 hover:text-chalk"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <RevealGroup
            key={active}
            className="grid gap-6 md:grid-cols-2"
          >
            {visible.map((p, i) => (
              <Reveal as="div" key={p.slug} className={p.featured ? "md:col-span-2" : ""}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
