import { projects } from "@/content/projects";
import { statusDot } from "@/content/projects";
import { cn } from "@/lib/utils";

const featured = projects.filter((p) => p.status === "Live" || p.status === "Published" || p.status === "Coming Soon");

export function StatusStrip() {
  return (
    <div className="border-y border-ink-700/50 bg-ink-900/40">
      <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-3 py-3 text-xs">
        <span className="font-mono uppercase tracking-wider2 text-chalk-faint">
          Status
        </span>
        {featured.map((p) => {
          const displayStatus = p.status;
          return (
            <span key={p.slug} className="inline-flex items-center gap-2 text-chalk-muted">
              <span className={cn("h-1.5 w-1.5 rounded-full", statusDot[displayStatus])} />
              <span className="text-chalk">{p.name.replace(" Collection", "")}</span>
              <span className="text-chalk-faint">· {displayStatus}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
