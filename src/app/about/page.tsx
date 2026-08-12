import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile, expertiseAreas } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "About",
  description: profile.summary,
  alternates: { canonical: "https://basilan.us/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-tight pb-0 pt-32">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">About</span>
            <h1 className="mt-5 font-display text-display-lg text-balance">
              {profile.name}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-chalk-muted">
              {profile.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-x max-w-prose">
          <Reveal className="space-y-6 text-pretty text-lg leading-relaxed text-chalk-muted">
            {profile.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Expertise areas */}
      <section className="section bg-ink-900/30">
        <div className="container-x">
          <SectionHeading
            eyebrow="What I do"
            title="Breadth with real depth."
            description="I work across infrastructure, automation, and product — but I lead with solving the problem, not the résumé."
          />
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

      {/* CTA */}
      <section className="section-tight">
        <div className="container-x">
          <Reveal className="surface flex flex-col items-start gap-6 rounded-xl3 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div>
              <h2 className="font-display text-display-md text-balance">
                See the work.
              </h2>
              <p className="mt-3 max-w-prose text-chalk-muted">
                The projects page is the best proof of what I build.
              </p>
            </div>
            <Link href="/projects" className="btn-primary shrink-0">
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
