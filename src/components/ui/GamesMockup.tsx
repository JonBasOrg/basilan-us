"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

// Phone device frame that wraps a real game screenshot.
export function GamesMockup({
  src,
  alt = "Classic Games Collection on Android",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24, rotateX: 8 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative mx-auto w-[clamp(220px,60vw,280px)]">
        {/* device body */}
        <div className="relative rounded-[2.4rem] border border-ink-600 bg-ink-900 p-3 shadow-lift">
          <div className="rounded-[1.9rem] border border-ink-700/70 bg-ink-950 overflow-hidden">
            <div className="relative aspect-[9/19] w-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="280px"
                className="object-cover object-top"
              />
            </div>
          </div>
          {/* speaker / cam */}
          <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink-700" />
        </div>
        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-radial-accent blur-2xl" />
      </div>
    </motion.div>
  );
}

export function GamesGlyph() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl2 border border-ink-600 bg-ink-850 text-accent">
      <Gamepad2 className="h-4.5 w-4.5" />
    </span>
  );
}
