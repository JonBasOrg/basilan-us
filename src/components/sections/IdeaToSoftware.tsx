import { ideaToSoftware } from "@/content/currently-building";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown } from "lucide-react";

export function IdeaToSoftware() {
  return (
    <section className="section bg-ink-900/30">
      <div className="container-x">
        <Reveal className="max-w-prose">
          <span className="eyebrow">How I work</span>
          <h2 className="mt-4 font-display text-display-md text-balance">
            Ideas → Working software
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-chalk-muted">
            I enjoy the entire process — finding a problem, experimenting with an
            idea, building something useful, putting it into the world, and
            improving it. AI-assisted development helps me move faster, but the
            discipline is the same: ship something real, then make it better.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl3 border border-ink-700/60 bg-ink-700/40 md:grid-cols-2 lg:grid-cols-3">
          {ideaToSoftware.map((step, i) => (
            <Reveal
              key={step.key}
              delay={i * 0.05}
              className="group relative bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-850"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < ideaToSoftware.length - 1 && (
                  <ArrowDown className="h-4 w-4 text-ink-600 transition-transform duration-500 group-hover:translate-y-1 lg:hidden" />
                )}
              </div>
              <h3 className="mt-6 font-display text-2xl text-chalk">{step.label}</h3>
              <p className="mt-2 text-pretty text-chalk-muted">{step.blurb}</p>
              {i < ideaToSoftware.length - 1 && (
                <div className="absolute right-8 top-10 hidden text-ink-600 lg:block">
                  <ArrowDown className="h-4 w-4 rotate-[225deg]" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
