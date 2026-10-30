import { projects } from "@/content/projects";
import { PortfolioGrid } from "@/components/projects/PortfolioGrid";


export default function ProjectsPage() {
  return <>
    <section className="section-tight pb-0 pt-32"><div className="container-x">
      <span className="eyebrow">Projects</span><h1 className="mt-5 font-display text-display-lg">Selected work &amp; personal projects.</h1><p className="mt-6 max-w-prose text-xl text-chalk-muted">Infrastructure, security, automation, and independently built products. Explore by topic, technology, or project type.</p>
    </div></section>
    <section className="section"><div className="container-x"><PortfolioGrid projects={projects} /></div></section>
  </>;
}
