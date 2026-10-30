import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  const featured = projects.filter((p) => p.kind === "employer" && p.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const personal = projects.filter((p) => p.kind === "personal")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return <>
    <Hero />
    <section className="section" id="selected-projects" aria-label="Featured enterprise projects">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Selected projects" title="Systems behind the work." description="Cloud infrastructure, data platforms, security, and automation — explored through the projects themselves." />
          <Reveal className="shrink-0"><Link href="/projects" className="btn-ghost">All projects <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        {featured.length > 0 ? <RevealGroup className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map(project => <Reveal key={project.slug} className="h-full"><ProjectCard project={project} emphasize={false} /></Reveal>)}
        </RevealGroup> : <p className="mt-8 text-chalk-muted">Enterprise project stories are awaiting publication approval. Explore my personal projects below.</p>}
      </div>
    </section>
    <section className="section bg-ink-900/30" id="personal-projects">
      <div className="container-x">
        <SectionHeading eyebrow="Personal projects" title="Built out of curiosity." description="Independent products and experiments, from trading research to classic games." />
        <RevealGroup className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {personal.map(project => <Reveal key={project.slug} className="h-full"><ProjectCard project={project} emphasize={false} /></Reveal>)}
        </RevealGroup>
      </div>
    </section>
    <section className="section-tight">
      <div className="container-x">
        <Reveal className="surface rounded-xl3 px-8 py-14 text-center sm:px-16">
          <span className="eyebrow justify-center">Let's connect</span>
          <h2 className="mt-4 font-display text-display-md">Have something interesting in mind?</h2>
          <p className="mx-auto mt-5 max-w-prose text-lg text-chalk-muted">Let's talk about infrastructure, automation, or your next project.</p>
          <Link href="/contact" className="btn-primary mt-8">Get in touch <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  </>;
}
