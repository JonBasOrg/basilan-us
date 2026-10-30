import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { expertise } from "@/content/enterprise";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Expertise() {
  if (!expertise.length) return null;

  return <section className="section scroll-mt-24 bg-ink-900/30" id="expertise">
    <div className="container-x">
      <SectionHeading eyebrow="What I work on" title="Expertise in practice." description="The capabilities and technologies behind my projects." />
      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
        {expertise.map(area => {
          const supporting = area.projectSlugs.flatMap(slug => {
            const project = projects.find(candidate => candidate.slug === slug);
            return project ? [project] : [];
          });
          return <Reveal key={area.id} className="surface flex h-full flex-col rounded-xl3 p-7 sm:p-8">
            <h3 className="font-display text-2xl text-chalk">{area.title}</h3>
            <p className="mt-4 leading-relaxed text-chalk-muted">{area.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${area.title} technologies`}>
              {area.technologies.map(technology => <li key={technology} className="rounded-full border border-ink-700 bg-ink-850 px-3 py-1 text-xs text-chalk-muted">{technology}</li>)}
            </ul>
            {supporting.length > 0 && <ul className="mt-6 space-y-3 border-t border-ink-700/60 pt-5">
              {supporting.map(project => <li key={project.slug}>
                <Link href={project.caseStudy ?? `/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm text-accent hover:text-chalk">
                  {project.name}<ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </Link>
              </li>)}
            </ul>}
          </Reveal>;
        })}
      </div>
    </div>
  </section>;
}
