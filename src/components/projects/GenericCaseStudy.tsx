import type { Project } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { TechList, CaseStudyHero, CaseStudyCTA } from "./CaseStudyShell";

export function GenericCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyHero project={project} />

      <section className="section">
        <div className="container-x max-w-prose">
          <Reveal>
            <h2 className="font-display text-display-md text-balance">Overview</h2>
            <p className="mt-5 text-pretty leading-relaxed text-chalk-muted">
              {project.description}
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <span className="eyebrow">Technology</span>
            <div className="mt-4">
              <TechList items={project.technologies} />
            </div>
          </Reveal>
        </div>
      </section>

      <CaseStudyCTA project={project} />
    </>
  );
}
