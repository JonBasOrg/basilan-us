import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "404 — Page not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
        <div className="absolute left-1/2 top-1/3 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-radial-accent" />
      </div>
      <div className="container-x text-center">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest2 text-accent">
            Error 404
          </p>
          <h1 className="mx-auto mt-6 max-w-2xl font-display text-display-lg text-balance">
            This page took a wrong turn.
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-pretty text-lg text-chalk-muted">
            Sometimes a link breaks, or a page was moved. The good stuff is still
            here — let's get you back on track.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home className="h-4 w-4" /> Back home
            </Link>
            <Link href="/projects" className="btn-ghost">
              <ArrowLeft className="h-4 w-4" /> View projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
