"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

const navItems = site.nav;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled
          ? "border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="group flex items-baseline gap-2"
          aria-label={`${site.name} — home`}
        >
          <span className="font-display text-lg font-semibold tracking-tight text-chalk">
            Jon-jon
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-accent">
            Basilan
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active ? "text-chalk" : "text-chalk-muted hover:text-chalk"
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                  />
                )}
              </Link>
            );
          })}
          <a
            href={`mailto:${site.email}`}
            className="btn-ghost ml-3 !px-5 !py-2 text-xs"
          >
            Contact
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-chalk md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-ink-950/98 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col gap-1 pt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-ink-700/60 py-5 font-display text-2xl text-chalk"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8">
                <a href={`mailto:${site.email}`} className="btn-primary w-full">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-10 text-sm text-chalk-faint">{site.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
