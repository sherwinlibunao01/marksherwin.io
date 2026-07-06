"use client";

import { useEffect, useRef } from "react";

/**
 * Marks the hand-off at the end of the hero boot sequence: a line of
 * signal draws down the hero's left margin, a streak of light travels
 * along it, and its arrival ignites the seam into the section below.
 * One-time, load-triggered — chained after `.boot-in` finishes rather
 * than re-triggered by scroll (see globals.css for exact timings).
 *
 * Measures the hero <section>'s own rendered height once (and on
 * resize) so the streak can travel a real pixel distance via
 * `transform: translateY()` instead of animating a layout-driving
 * `top`/`height` percentage.
 */
export function SignalDrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = ref.current?.parentElement;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function measure() {
      section!.style.setProperty("--drop-h", `${section!.offsetHeight}px`);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={ref} aria-hidden="true">
      <div className="signal-drop-line" />
      <div className="signal-drop-streak" />
      <div className="signal-drop-impact" />
      <div className="signal-seam" />
    </div>
  );
}
