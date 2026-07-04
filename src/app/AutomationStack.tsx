"use client";

import { useEffect, useRef, useState } from "react";

type Automation = {
  name: string;
  problem: string;
  detail: string;
  outcome: string;
};

// Scroll distance (in vh) allotted per card-to-card transition. Total
// pinned scroll room scales with automations.length so adding/removing
// cards keeps the same pacing per card.
const SEGMENT_VH = 70;

export function AutomationStack({
  automations,
  title,
  subtitle,
}: {
  automations: Automation[];
  title: string;
  subtitle: string;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { current: 0 };
    const smoothed = { current: 0 };

    // Progress is derived from how far the page has scrolled through this
    // section's own pinned height — never intercepted or force-scrolled,
    // so the user can always scroll straight past. A lerp (skipped under
    // reduced motion) smooths the raw scroll signal instead of relying on
    // a CSS transition, which would otherwise fight this per-frame update.
    function computeTarget() {
      const rect = stage!.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const consumed = Math.min(Math.max(-rect.top, 0), scrollable);
      target.current = (consumed / scrollable) * (automations.length - 1);
    }

    computeTarget();
    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", computeTarget);

    let raf = 0;
    function tick() {
      smoothed.current += (target.current - smoothed.current) * (reduceMotion ? 1 : 0.12);
      setProgress(smoothed.current);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", computeTarget);
    };
  }, [automations.length]);

  return (
    <div
      ref={stageRef}
      className="relative"
      style={{ height: `calc(100vh + ${(automations.length - 1) * SEGMENT_VH}vh)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-start pt-24 sm:pt-28">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2
              className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>
            <p className="max-w-sm text-[var(--c-muted)]">{subtitle}</p>
          </div>
          <div className="relative" style={{ height: "min(58vh, 540px)" }}>
            {automations.map((automation, i) => {
              const offset = i - progress;
              const isPast = offset < 0;
              const isFuture = offset > 0;
              // Continuous on both sides of 0 (no branch on an exact
              // match, since offset is now a float that rarely lands on
              // an integer). Both curves reach 0 well before |offset|
              // hits 1: since the incoming card's own top z-index layer
              // is itself translucent mid-fade, an outgoing card left at
              // high opacity underneath it bleeds through as visible
              // double-exposed text, not just a hidden lower layer.
              const opacity = isFuture
                ? Math.max(0, 1 - offset * 1.6)
                : Math.max(0, 1 - Math.abs(offset) * 2);
              const style: React.CSSProperties = {
                zIndex: 100 - Math.round(Math.abs(offset) * 10),
                transform: isPast
                  ? `translateY(${Math.max(offset, -3) * 14}px) scale(${1 + Math.max(offset, -3) * 0.02})`
                  : isFuture
                    ? `translateY(${Math.min(offset, 2) * 26}px) scale(${1 - Math.min(offset, 2) * 0.03})`
                    : "translateY(0) scale(1)",
                opacity,
                pointerEvents: Math.abs(offset) < 0.5 ? "auto" : "none",
              };
              return (
                <div key={automation.name} className="absolute inset-x-0 top-8" style={style}>
                  <div className="relative overflow-hidden border border-[var(--c-line)] bg-[var(--c-bg)] p-8 sm:p-12">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-4 -top-10 select-none text-[9rem] leading-none text-[var(--c-surface)] sm:text-[12rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative flex flex-col gap-6">
                      <span
                        className="text-xs text-[var(--c-primary)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {String(i + 1).padStart(2, "0")} / {String(automations.length).padStart(2, "0")}
                      </span>
                      <h3
                        className="max-w-2xl text-3xl tracking-[-0.02em] sm:text-5xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {automation.name}
                      </h3>
                      <div className="grid max-w-2xl gap-6 sm:grid-cols-2">
                        <div>
                          <p
                            className="text-xs text-[var(--c-muted)]"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {"// the pain"}
                          </p>
                          <p className="mt-2 text-base leading-7 text-[var(--c-ink)] sm:text-lg">
                            {automation.problem}
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-xs text-[var(--c-primary)]"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {"// the fix"}
                          </p>
                          <p className="mt-2 text-base leading-7 text-[var(--c-muted)] sm:text-lg">
                            {automation.detail}
                          </p>
                        </div>
                      </div>
                      <span
                        className="w-fit rounded-[2px] bg-[var(--c-accent)] px-4 py-2 text-sm text-[var(--c-accent-ink)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        &#8594; {automation.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center gap-2">
            {automations.map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="h-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  width: i === Math.round(progress) ? 28 : 8,
                  backgroundColor: i === Math.round(progress) ? "var(--c-primary)" : "var(--c-line)",
                }}
              />
            ))}
            <span
              className="ml-3 text-xs text-[var(--c-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              scroll to continue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
