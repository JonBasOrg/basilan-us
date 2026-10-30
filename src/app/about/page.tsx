import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { about } from "@/content/enterprise";
import { site } from "@/content/site";
import { Expertise } from "@/components/sections/Expertise";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "About",
  description: about.summary || "Meet Jon-jon Basilan and explore the work behind his projects.",
  alternates: { canonical: "https://basilan.us/about" },
};

export default function AboutPage() {
  return <>
    <section className="section-tight pb-0 pt-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">About me</span>
          <h1 className="mt-5 font-display text-display-lg text-balance">{site.name}</h1>
          {about.summary && <p className="mt-6 text-xl leading-relaxed text-chalk-muted">{about.summary}</p>}
        </Reveal>
      </div>
    </section>
    {about.paragraphs.length > 0 && <section className="section">
      <div className="container-x">
        <Reveal className="max-w-3xl space-y-6 text-pretty text-lg leading-relaxed text-chalk-muted">
          {about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>
      </div>
    </section>}
    <Expertise />
    <section className="section-tight">
      <div className="container-x">
        <Reveal className="surface flex flex-col items-start gap-6 rounded-xl3 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div><h2 className="font-display text-display-md">See the work.</h2><p className="mt-3 text-chalk-muted">Explore the systems, tools, and products I build.</p></div>
          <Link href="/projects" className="btn-primary shrink-0">Explore projects <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  </>;
}
