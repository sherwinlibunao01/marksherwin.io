"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals its children with a per-item stagger the first time the group
 * scrolls into view. Uses IntersectionObserver (fires once, then
 * unobserves) rather than scroll-timeline CSS so delay-based stagger is
 * reliable across browsers. Children must carry `.stagger-item` and an
 * inline `--i` custom property for their position in the sequence — see
 * `.stagger-item` in globals.css for the transition itself.
 */
export function StaggerGroup({
  children,
  className,
  as: Tag = "div",
  "data-station": dataStation,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul";
  /** Marks the group as a wire station so Wire.tsx can ignite it. */
  "data-station"?: string;
}) {
  const ref = useRef<HTMLDivElement & HTMLUListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} data-station={dataStation}>
      {children}
    </Tag>
  );
}
