import Image from "next/image";
import type { Project } from "@/lib/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { TechList, CaseStudyHero, CaseStudyCTA } from "./CaseStudyShell";

export function GenericCaseStudy({ project }: { project: Project }) {

  return (
    <>
      <CaseStudyHero project={project} />

      <section className="section">
        <div className="container-x max-w-prose">
          {project.approval === "pending" && <p role="note" className="mb-8 rounded border border-accent/40 p-4 text-accent">Local review draft — awaiting approval for public display.</p>}
          <dl className="mb-10 grid gap-4 text-sm sm:grid-cols-2">
            <div><dt className="text-chalk-faint">Project context</dt><dd>{project.kind === "employer" ? "Employer project" : "Personal project"}</dd></div>

          </dl>
          <Reveal>

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
          {!!project.gallery?.length && <Reveal className="mt-10">
            <h2 className="font-display text-display-md">Project images</h2>
            <div className="mt-5 grid gap-4">{project.gallery.map((image, index) => <Image key={image} src={image} alt={`${project.name} — screenshot ${index + 1}`} width={1200} height={800} className="h-auto w-full rounded-lg" />)}</div>
          </Reveal>}

        </div>
      </section>

      <CaseStudyCTA project={project} />
    </>
  );
}
