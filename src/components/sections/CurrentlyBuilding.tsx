import { currentlyBuilding } from "@/content/currently-building";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const dotColor: Record<string, string> = {
  building: "bg-accent",
  research: "bg-steel",
  planning: "bg-chalk-faint",
};

export function CurrentlyBuilding() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-prose">
          <span className="eyebrow">In motion</span>
          <h2 className="mt-4 font-display text-display-md text-balance">
            Currently building
          </h2>
          <p className="mt-5 text-pretty text-lg text-chalk-muted">
            A few things on my workbench right now. The site stays alive because
            the work does.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-4 md:grid-cols-3">
          {currentlyBuilding.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="surface flex flex-col gap-4 p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className={cn("h-2 w-2 rounded-full", dotColor[item.status])} />
                <span className="text-xs uppercase tracking-wider2 text-chalk-faint">
                  {item.status}
                </span>
              </div>
              <h3 className="font-display text-xl text-chalk">{item.title}</h3>
              <p className="text-pretty text-chalk-muted">{item.note}</p>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
