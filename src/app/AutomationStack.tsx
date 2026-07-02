"use client";

import { useEffect, useRef, useState } from "react";

type Automation = {
  name: string;
  detail: string;
  outcome: string;
};

const ADVANCE_THRESHOLD = 70;

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cooldownMs = reduceMotion ? 0 : 500;

    let accum = 0;
    let cooling = false;
    let touchStartY = 0;

    // Zone check uses the CURRENT (pre-scroll) geometry, with a margin
    // before the true lock point. A single wheel/touch event carries
    // whatever delta the input device produced — sometimes large — so we
    // start intercepting a bit early and forcibly snap the document to
    // the exact locked frame, rather than trusting native scroll to land
    // on it. That guarantees the section can't be scrolled past in one
    // big jump.
    const ENTRY_MARGIN = 500;

    function zoneState() {
      const rect = stage!.getBoundingClientRect();
      const notYetVisible = rect.top > ENTRY_MARGIN;
      const fullyPassed = rect.bottom < 0;
      return { rect, notYetVisible, fullyPassed };
    }

    function lockTo(rect: DOMRect) {
      const target = Math.round(window.scrollY + rect.top);
      if (Math.abs(window.scrollY - target) > 0.5) {
        window.scrollTo(0, target);
      }
    }

    function step(dir: 1 | -1) {
      if (cooling) return;
      const atStart = activeIndexRef.current === 0;
      const atEnd = activeIndexRef.current === automations.length - 1;
      if ((dir === 1 && atEnd) || (dir === -1 && atStart)) return;
      setActiveIndex((idx) => Math.min(automations.length - 1, Math.max(0, idx + dir)));
      cooling = true;
      window.setTimeout(() => {
        cooling = false;
      }, cooldownMs);
    }

    function onWheel(e: WheelEvent) {
      const { rect, notYetVisible, fullyPassed } = zoneState();
      if (notYetVisible || fullyPassed) return;

      const atStart = activeIndexRef.current === 0;
      const atEnd = activeIndexRef.current === automations.length - 1;
      if (atEnd && e.deltaY > 0) return;
      if (atStart && e.deltaY < 0) return;

      e.preventDefault();
      lockTo(rect);
      accum += e.deltaY;
      if (Math.abs(accum) >= ADVANCE_THRESHOLD) {
        step(accum > 0 ? 1 : -1);
        accum = 0;
      }
    }

    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
    }

    function onTouchMove(e: TouchEvent) {
      const { rect, notYetVisible, fullyPassed } = zoneState();
      if (notYetVisible || fullyPassed) return;

      const dy = touchStartY - e.touches[0].clientY;
      const atStart = activeIndexRef.current === 0;
      const atEnd = activeIndexRef.current === automations.length - 1;
      if (atEnd && dy > 0) return;
      if (atStart && dy < 0) return;

      e.preventDefault();
      lockTo(rect);
      if (Math.abs(dy) >= ADVANCE_THRESHOLD) {
        step(dy > 0 ? 1 : -1);
        touchStartY = e.touches[0].clientY;
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [automations.length]);

  return (
    <div ref={stageRef} className="relative" style={{ height: "calc(100vh + 500px)" }}>
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
          <div className="relative" style={{ height: "min(52vh, 480px)" }}>
            {automations.map((automation, i) => {
              const offset = i - activeIndex;
              const isPast = offset < 0;
              const isFuture = offset > 0;
              const style: React.CSSProperties = {
                zIndex: 100 - Math.abs(offset),
                transform: isPast
                  ? `translateY(${Math.max(offset, -3) * 14}px) scale(${1 + Math.max(offset, -3) * 0.02})`
                  : isFuture
                    ? `translateY(${Math.min(offset, 2) * 26}px) scale(${1 - Math.min(offset, 2) * 0.03})`
                    : "translateY(0) scale(1)",
                opacity: offset === 0 ? 1 : isPast ? Math.max(0, 0.55 - Math.abs(offset) * 0.25) : 0,
                pointerEvents: offset === 0 ? "auto" : "none",
              };
              return (
                <div
                  key={automation.name}
                  className="absolute inset-x-0 top-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={style}
                >
                  <div className="relative overflow-hidden border border-[var(--c-line)] bg-[var(--c-bg)] p-8 shadow-[0_30px_60px_-32px_rgba(20,40,30,0.35)] sm:p-12">
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
                      <div className="max-w-2xl">
                        <h3
                          className="text-3xl tracking-[-0.02em] sm:text-5xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {automation.name}
                        </h3>
                        <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--c-muted)] sm:text-xl">
                          {automation.detail}
                        </p>
                      </div>
                      <span
                        className="w-fit rounded-[2px] bg-[var(--c-accent)] px-4 py-2 text-sm text-[var(--c-accent-ink)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {automation.outcome}
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
                  width: i === activeIndex ? 28 : 8,
                  backgroundColor: i === activeIndex ? "var(--c-primary)" : "var(--c-line)",
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
