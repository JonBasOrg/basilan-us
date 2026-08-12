"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

const words = site.positioning;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-radial-accent" />
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="eyebrow">
            Engineer · Builder · Technologist
          </span>

          <h1 className="mt-6 font-display text-display-xl text-balance">
            I build systems that{" "}
            <span className="text-accent">solve real problems.</span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-chalk-muted sm:text-xl"
          >
            {words.map((w, i) => (
              <span key={w} className="inline-flex items-center">
                {w}
                {i < words.length - 1 && (
                  <span className="ml-3 text-ink-600">/</span>
                )}
              </span>
            ))}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/projects" className="btn-primary">
              Explore my work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-ghost">
              About me
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-chalk-muted transition-colors hover:text-accent"
            >
              View résumé <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
