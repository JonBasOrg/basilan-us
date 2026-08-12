import { Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Contact",
  description: `Get in touch with Jon-jon Basilan at ${site.email}.`,
  alternates: { canonical: "https://basilan.us/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-tight pb-0 pt-32">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Contact</span>
            <h1 className="mt-5 font-display text-display-lg text-balance">
              Have something interesting in mind?
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-chalk-muted">
              I'm happy to talk through infrastructure, automation, AI
              experiments, or product ideas. The fastest way to reach me is email.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="mx-auto max-w-xl">
            <a
              href={`mailto:${site.email}`}
              className="surface group flex items-center justify-between gap-6 rounded-xl3 p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl2 border border-accent/30 bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-chalk-faint">Email</p>
                  <p className="font-display text-xl text-chalk transition-colors group-hover:text-accent">
                    {site.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-chalk-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <p className="mt-6 text-center text-sm text-chalk-faint">
              Prefer a project link instead? Visit{" "}
              <a href="https://invest.basilan.us" target="_blank" rel="noopener noreferrer" className="link-underline text-chalk-muted hover:text-accent">
                invest.basilan.us
              </a>{" "}
              or{" "}
              <a href="https://games.basilan.us" target="_blank" rel="noopener noreferrer" className="link-underline text-chalk-muted hover:text-accent">
                games.basilan.us
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
