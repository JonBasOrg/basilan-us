"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LineChart, ShieldCheck, Bot, Activity } from "lucide-react";

// A stylized, fully synthetic representation of a trading research dashboard.
// Contains NO real account data, positions, P&L, or credentials.
export function TradingMockup() {
  const reduce = useReducedMotion();
  const bars = [38, 52, 44, 61, 49, 72, 58, 83, 67, 91, 74, 80];

  return (
    <div className="relative">
      <div className="surface overflow-hidden rounded-xl3 p-2 shadow-lift">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-ink-700/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="ml-3 font-mono text-xs text-chalk-faint">
            invest.basilan.us — Research
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider2 text-accent">
            <ShieldCheck className="h-3 w-3" /> Paper-only
          </span>
        </div>

        <div className="grid gap-3 p-4 md:grid-cols-[1.4fr_1fr]">
          {/* main panel */}
          <div className="rounded-xl2 border border-ink-700/60 bg-ink-900/70 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs text-chalk-faint">Regime signal</p>
                <p className="font-display text-2xl text-chalk">Neutral</p>
              </div>
              <span className="rounded-full border border-steel/30 bg-steel/10 px-3 py-1 text-xs text-steel-soft">
                Confidence 62%
              </span>
            </div>

            {/* synthetic chart */}
            <div className="mt-4 flex h-28 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent-deep/40 to-accent/80"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  whileInView={reduce ? undefined : { height: `${h}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-chalk-faint">
              <LineChart className="h-3.5 w-3.5" /> Strategy research · backtest · paper
            </div>
          </div>

          {/* side metrics */}
          <div className="flex flex-col gap-3">
            <MiniTile
              icon={<Bot className="h-4 w-4 text-accent" />}
              label="AI analysis"
              value="Multi-agent"
            />
            <MiniTile
              icon={<Activity className="h-4 w-4 text-accent" />}
              label="Paper simulation"
              value="Simulated"
            />
            <MiniTile
              icon={<ShieldCheck className="h-4 w-4 text-accent" />}
              label="Risk controls"
              value="Enforced"
            />
          </div>
        </div>
      </div>

      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-radial-accent blur-2xl" />
    </div>
  );
}

function MiniTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl2 border border-ink-700/60 bg-ink-900/70 px-4 py-3">
      <div className="flex items-center gap-2.5">
        {icon}
        <span className="text-xs text-chalk-muted">{label}</span>
      </div>
      <span className="font-mono text-xs text-chalk">{value}</span>
    </div>
  );
}
