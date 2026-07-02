"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "01<>/■□▪▫#$%&+-*";

/**
 * Terminal-style "decode" effect: scrambles through random characters
 * before settling on the real value, once, when scrolled into view.
 * Fixed-width glyphs keep layout stable mid-scramble. Reduced-motion
 * users see the final value immediately.
 */
export function DecodeValue({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const duration = 550;
        const start = performance.now();

        function tick(now: number) {
          const elapsed = now - start;
          const progress = Math.min(1, elapsed / duration);
          const settleCount = Math.floor(progress * value.length);

          let next = "";
          for (let i = 0; i < value.length; i++) {
            const char = value[i];
            if (char === " " || char === "/") {
              next += char;
            } else if (i < settleCount) {
              next += char;
            } else {
              next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
          }
          setDisplay(next);

          if (progress < 1) {
            raf = requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        }
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="decode-value" aria-label={value}>
      {display}
    </span>
  );
}
