"use client";

import { useMemo, useState } from "react";
import { portfolioTags, selectProjects, type Project, type PortfolioSort } from "@/lib/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [tags, setTags] = useState<string[]>([]);
  const [technology, setTechnology] = useState("");
  const [category, setCategory] = useState("");
  const categories = Array.from(new Set(projects.filter(p => p.kind === "employer").map(p => p.category)));
  const [kind, setKind] = useState<"all" | Project["kind"]>("all");
  const [sort, setSort] = useState<PortfolioSort>("importance");
  const technologies = useMemo(() => Array.from(new Set(projects.flatMap(project => project.technologies))).sort(), [projects]);
  const visible = useMemo(() => selectProjects(projects, {tags, technology, kind, sort, category}), [projects, tags, technology, kind, sort, category]);
  const toggleTag = (tag: string) => setTags(current => current.includes(tag) ? current.filter(item => item !== tag) : [...current, tag]);
  const control = "rounded border border-ink-600 bg-ink-900 px-3 py-2 text-sm text-chalk";
  return <>
    {projects.some(project => project.approval === "pending") && <p role="note" className="mb-6 rounded border border-accent/40 p-4 text-accent">Local content review preview — includes unapproved drafts. Not for publication.</p>}
    <fieldset className="mb-6">
      <legend className="mb-3 text-sm text-chalk-muted">Filter by topic (matches all selected topics)</legend>
      <div className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={tags.length === 0} onClick={() => setTags([])} className={control}>All topics</button>
        {portfolioTags.map(tag => <button key={tag} type="button" aria-pressed={tags.includes(tag)} onClick={() => toggleTag(tag)} className={cn(control, tags.includes(tag) && "border-accent text-accent")}>{tag}</button>)}
      </div>
    </fieldset>
    <div className="mb-8 flex flex-wrap gap-4">
      <label className="grid gap-2 text-sm" htmlFor="portfolio-category">Category<select id="portfolio-category" className={control} value={category} onChange={event => setCategory(event.target.value)}><option value="">All categories</option>{categories.map(item => <option key={item}>{item}</option>)}</select></label>
      <label className="grid gap-2 text-sm" htmlFor="portfolio-technology">Technology<select id="portfolio-technology" className={control} value={technology} onChange={event => setTechnology(event.target.value)}><option value="">All technologies</option>{technologies.map(item => <option key={item}>{item}</option>)}</select></label>
      <label className="grid gap-2 text-sm" htmlFor="portfolio-kind">Project type<select id="portfolio-kind" className={control} value={kind} onChange={event => setKind(event.target.value as typeof kind)}><option value="all">All projects</option><option value="personal">Personal</option><option value="employer">Employer</option></select></label>
      <label className="grid gap-2 text-sm" htmlFor="portfolio-sort">Sort projects<select id="portfolio-sort" className={control} value={sort} onChange={event => setSort(event.target.value as PortfolioSort)}><option value="importance">Importance</option><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></label>
      <button type="button" className={control} onClick={() => {setTags([]); setTechnology(""); setCategory(""); setKind("all"); setSort("importance");}}>Reset filters</button>
    </div>
    <p aria-live="polite" className="mb-4 text-sm text-chalk-muted">{visible.length} project{visible.length === 1 ? "" : "s"}</p>
    {!visible.length && <p className="text-chalk-muted">No projects match these filters. Try fewer topics or reset filters.</p>}
    {(["employer", "personal"] as const).map(group => {
      const rows=visible.filter(p => p.kind===group);
      return rows.length ? <section key={group} className="mb-14" aria-label={group === "employer" ? "Enterprise projects" : "Personal projects"}>
        <h2 className="mb-6 font-display text-2xl">{group === "employer" ? "Enterprise projects" : "Personal projects"}</h2>
        <RevealGroup key={JSON.stringify({group,tags, technology, kind, sort,category})} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rows.map((project,index)=><Reveal key={project.id} as="div" className="h-full"><ProjectCard project={project} index={index} emphasize={false} /></Reveal>)}
        </RevealGroup>
      </section> : null;
    })}
  </>;
}
