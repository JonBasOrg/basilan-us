import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile, expertiseAreas, techGroups } from "@/content/experience";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";

export const metadata = {
  title: "Experience",
  description:
    "An interactive view of Jon-jon Basilan's engineering background, expertise, and selected projects.",
  alternates: { canonical: "https://basilan.us/experience" },
};

export default function ExperiencePage() {
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <>
      <section className="section-tight pb-0 pt-32">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Experience</span>
            <h1 className="mt-5 font-display text-display-lg text-balance">
              A builder's background.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-chalk-muted">
              {profile.summary}
            </p>
            <p className="mt-6 text-sm text-chalk-faint">
              This page summarizes my background from publicly documented work.
              It intentionally avoids listing employers, dates, or certifications
              that aren't verified here. A downloadable résumé can be added when
              a sanitized copy is available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Expertise" title="Where I do the work." />
          <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
            {expertiseAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.06} className="surface p-7">
                <h3 className="font-display text-xl text-chalk">{area.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-chalk-muted">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="section bg-ink-900/30">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technology"
            title="Tools I reach for."
            description="Listed only where supported by documented project history — capabilities, not a keyword list."
          />
          <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techGroups.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.04} className="surface p-7">
                <h3 className="font-display text-lg text-accent">{group.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-700 bg-ink-850 px-2.5 py-1 text-xs text-chalk-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Selected projects as evidence */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Selected work"
            title="Proof, not promises."
            description="The clearest record of what I build is the work itself."
          />
          <Reveal className="mt-12 grid gap-5 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={p.caseStudy ?? p.url ?? "#"}
                  className="surface group flex h-full flex-col gap-3 rounded-xl3 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <StatusBadge status={p.status} />
                    <span className="text-xs text-chalk-faint">{p.year}</span>
                  </div>
                  <h3 className="font-display text-2xl text-chalk transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="text-pretty text-chalk-muted">{p.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm text-accent">
                    View case study <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Résumé download placeholder */}
      <section className="section-tight">
        <div className="container-x">
          <Reveal className="surface flex flex-col items-start gap-5 rounded-xl3 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl text-chalk">Résumé</h2>
              <p className="mt-2 max-w-prose text-chalk-muted">
                A downloadable PDF can be added here once a sanitized, approved
                copy is available. Until then, this page is the living version.
              </p>
            </div>
            <span className="btn-ghost shrink-0 cursor-not-allowed opacity-60">
              <Download className="h-4 w-4" /> Coming soon
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
