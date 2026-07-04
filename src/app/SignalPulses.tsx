"use client";

import { useEffect, useRef } from "react";

// Ambient background motion: small light pulses that occasionally travel
// one grid cell-run at a time along the field-grid lines, like a signal
// moving through the automation systems the page is about. Canvas (not
// CSS) because each pulse needs a randomized path/speed/lifetime rather
// than a fixed loop — a handful of identical CSS keyframes would read as
// mechanical repetition within a few cycles.
const CELL = 64;
const MAX_PULSES = 4;
const PRIMARY = "oklch(0.42 0.11 160";
const ACCENT = "oklch(0.88 0.07 60";

type Pulse = {
  originX: number;
  originY: number;
  axis: "x" | "y";
  dir: 1 | -1;
  length: number;
  progress: number;
  speed: number;
  color: string;
};

export function SignalPulses() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let offsetX = 0;
    let offsetY = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Align the pulse grid to the real .field-grid lines, which sit at
      // a negative, viewport-relative offset for its own parallax drift.
      const rect = document.querySelector(".field-grid")?.getBoundingClientRect();
      offsetX = rect ? (((rect.left % CELL) + CELL) % CELL) : 0;
      offsetY = rect ? (((rect.top % CELL) + CELL) % CELL) : 0;
    }
    resize();
    window.addEventListener("resize", resize);

    let pulses: Pulse[] = [];
    let nextSpawnAt = 0;
    let raf = 0;
    let lastTime = performance.now();

    function spawnPulse(now: number) {
      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);
      const axis: "x" | "y" = Math.random() < 0.5 ? "x" : "y";
      pulses.push({
        originX: offsetX + Math.floor(Math.random() * cols) * CELL,
        originY: offsetY + Math.floor(Math.random() * rows) * CELL,
        axis,
        dir: Math.random() < 0.5 ? 1 : -1,
        length: 2 + Math.floor(Math.random() * 3),
        progress: 0,
        speed: 0.55 + Math.random() * 0.45,
        color: Math.random() < 0.8 ? PRIMARY : ACCENT,
      });
      nextSpawnAt = now + 1400 + Math.random() * 1800;
    }

    function tick(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      ctx!.clearRect(0, 0, width, height);

      if (now >= nextSpawnAt && pulses.length < MAX_PULSES) {
        spawnPulse(now);
      }

      pulses = pulses.filter((p) => p.progress < p.length);
      ctx!.globalCompositeOperation = "lighter";
      for (const p of pulses) {
        p.progress += p.speed * dt;
        const travelled = Math.min(p.progress, p.length) * CELL * p.dir;
        const cx = p.axis === "x" ? p.originX + travelled : p.originX;
        const cy = p.axis === "y" ? p.originY + travelled : p.originY;
        const life = Math.min(p.progress, p.length) / p.length;
        const fade = Math.sin(life * Math.PI);
        const glowRadius = 22;

        const gradient = ctx!.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
        gradient.addColorStop(0, `${p.color} / ${0.6 * fade})`);
        gradient.addColorStop(1, `${p.color} / 0)`);
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(cx, cy, glowRadius, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        lastTime = performance.now();
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
