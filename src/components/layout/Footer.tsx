import Link from "next/link";
import { site } from "@/content/site";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { label: "GitHub", href: site.social.github, show: !!site.social.github },
    { label: "Ko-fi", href: site.social.kofi, show: !!site.social.kofi },
    { label: "LinkedIn", href: site.social.linkedin, show: !!site.social.linkedin },
    { label: "X", href: site.social.x, show: !!site.social.x },
  ].filter((s) => s.show);

  return (
    <footer className="relative border-t border-ink-700/60 bg-ink-950">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-chalk">Jon-jon</span>
            <span className="font-display text-xl font-semibold text-accent">Basilan</span>
          </Link>
          <p className="mt-4 max-w-prose text-pretty text-chalk-muted">
            Engineer, builder, and technologist. I build systems that solve real
            problems — and keep making them better.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-chalk-muted transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider2 text-chalk-faint">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/projects" className="link-underline text-chalk-muted hover:text-chalk">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-underline text-chalk-muted hover:text-chalk">
                About
              </Link>
            </li>
            <li>
              <Link href="/experience" className="link-underline text-chalk-muted hover:text-chalk">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-underline text-chalk-muted hover:text-chalk">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider2 text-chalk-faint">
            Projects
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="https://invest.basilan.us"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-chalk-muted hover:text-chalk"
              >
                invest.basilan.us <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://games.basilan.us"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-chalk-muted hover:text-chalk"
              >
                games.basilan.us <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-chalk-muted hover:text-chalk"
                >
                  {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col gap-3 border-t border-ink-700/40 py-6 text-xs text-chalk-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Jon-jon Basilan. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
          There is always something being built.
        </p>
      </div>
    </footer>
  );
}
