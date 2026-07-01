"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const target = useRef({ x: 50, y: 40 });
  const current = useRef({ x: 50, y: 40 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = document.querySelector<HTMLElement>(".mouse-glow");
    if (!el) return;

    function onMove(e: MouseEvent) {
      target.current.x = (e.clientX / window.innerWidth) * 100;
      target.current.y = (e.clientY / window.innerHeight) * 100;
    }
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    function tick() {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      el!.style.setProperty("--mx", `${current.current.x}%`);
      el!.style.setProperty("--my", `${current.current.y}%`);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
