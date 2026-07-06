"use client";

import { useEffect, useRef } from "react";

/**
 * The Live Wire: one continuous SVG path threading every [data-wire-node]
 * anchor on the page, drawn by scroll, with a pulse of light (the "lead")
 * travelling along it. Stations ([data-station]) ignite when the pulse
 * reaches their anchor and dim again if it scrubs back above them, so the
 * whole page shares a single scroll-synced source of truth.
 *
 * The path is built client-side from measured anchor positions (re-built
 * on any size change via ResizeObserver), so it stays correct across
 * viewports, font loading, and the voice-agent iframe growing in.
 *
 * Fallbacks: with reduced motion or no JS the route renders fully drawn,
 * the pulse stays hidden, and stations keep their default (visible)
 * styling — nothing on the page is gated on this component.
 */

const SAMPLES = 240;
// The pulse tracks the point 62% down the viewport: station copy sits at
// a comfortable reading height at the exact moment its node ignites.
const FOCUS = 0.62;
const LERP = 0.085;

export function Wire() {
  const svgRef = useRef<SVGSVGElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const drawRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const route = routeRef.current;
    const draw = drawRef.current;
    const pulse = pulseRef.current;
    const root = svg?.closest<HTMLElement>("[data-wire-root]");
    if (!svg || !route || !draw || !pulse || !root) return;

    const anchors = Array.from(
      root.querySelectorAll<HTMLElement>("[data-wire-node]"),
    );
    if (anchors.length < 2) return;
    const stations = anchors.map((a) =>
      a.closest<HTMLElement>("[data-station]"),
    );

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let totalLength = 0;
    let anchorYs: number[] = [];
    let startY = 0;
    let endY = 0;
    let rootTopDoc = 0;
    // Monotonic y → path-length lookup, sampled once per measure. The
    // S-curves make arc length nonlinear in y, and the pulse must align
    // with a station's *vertical* position, not its length fraction.
    let samples: { l: number; y: number }[] = [];

    function measure() {
      const rootBox = root!.getBoundingClientRect();
      rootTopDoc = rootBox.top + window.scrollY;
      const pts = anchors.map((a) => {
        const b = a.getBoundingClientRect();
        return {
          x: b.left - rootBox.left + b.width / 2,
          y: b.top - rootBox.top + b.height / 2,
        };
      });
      // The lateral sweep between anchors must start BELOW the source
      // anchor's own content (its station, or its section for the hero
      // start node) — a curve leaving at the anchor's y crosses that
      // block's text, since copy extends below the node.
      const clearYs = anchors.map((a, i) => {
        const owner = stations[i] ?? a.closest("section");
        if (!owner) return pts[i].y;
        return owner.getBoundingClientRect().bottom - rootBox.top + 28;
      });
      svg!.setAttribute("width", String(root!.clientWidth));
      svg!.setAttribute("height", String(root!.offsetHeight));

      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        // Straight drop until clear of the source block (capped so at
        // least the last 28% of the segment remains for the curve).
        const clear = Math.min(
          Math.max(clearYs[i - 1], a.y),
          a.y + 0.72 * (b.y - a.y),
        );
        if (clear > a.y + 1) {
          d += ` L ${a.x.toFixed(1)} ${clear.toFixed(1)}`;
        }
        const my = ((clear + b.y) / 2).toFixed(1);
        d += ` C ${a.x.toFixed(1)} ${my}, ${b.x.toFixed(1)} ${my}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      }
      route!.setAttribute("d", d);
      draw!.setAttribute("d", d);

      totalLength = draw!.getTotalLength();
      anchorYs = pts.map((p) => p.y);
      startY = pts[0].y;
      endY = pts[pts.length - 1].y;

      samples = [];
      for (let i = 0; i <= SAMPLES; i++) {
        const l = (totalLength * i) / SAMPLES;
        samples.push({ l, y: draw!.getPointAtLength(l).y });
      }

      if (reduced) return;
      draw!.style.strokeDasharray = `${totalLength}`;
    }

    function lengthAtY(y: number): number {
      if (y <= samples[0].y) return samples[0].l;
      for (let i = 1; i < samples.length; i++) {
        if (samples[i].y >= y) {
          const a = samples[i - 1];
          const b = samples[i];
          const t = b.y === a.y ? 0 : (y - a.y) / (b.y - a.y);
          return a.l + t * (b.l - a.l);
        }
      }
      return totalLength;
    }

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(root);

    if (reduced) {
      // Route stays fully drawn (no dasharray was set), pulse hidden.
      return () => ro.disconnect();
    }

    root.classList.add("bw-active");

    let current = 0; // starts at 0 so first paint draws the wire down to the fold
    let raf = 0;

    function frame() {
      raf = requestAnimationFrame(frame);
      if (totalLength === 0 || samples.length === 0) return;

      const vh = window.innerHeight;
      const focusY = window.scrollY + vh * FOCUS - rootTopDoc;
      // Compress the map so the pulse reaches the terminal node exactly at
      // maximum scroll even when the last node sits close to the page end.
      const maxFocusY =
        document.documentElement.scrollHeight - vh + vh * FOCUS - rootTopDoc - 4;
      const effEndY = Math.min(endY, maxFocusY);
      const span = Math.max(1, effEndY - startY);
      const n = Math.min(1, Math.max(0, (focusY - startY) / span));
      const target = lengthAtY(startY + n * (endY - startY));

      const delta = target - current;
      if (Math.abs(delta) < 0.35) {
        current = target;
      } else {
        current += delta * LERP;
      }

      draw!.style.strokeDashoffset = `${Math.max(0, totalLength - current)}`;
      const p = draw!.getPointAtLength(current);
      pulse!.style.transform = `translate(${p.x}px, ${p.y}px)`;

      for (let i = 0; i < stations.length; i++) {
        const st = stations[i];
        if (!st) continue;
        st.classList.toggle("bw-lit", p.y >= anchorYs[i] - 8);
      }
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      root.classList.remove("bw-active");
    };
  }, []);

  return (
    <div className="bw-canvas" aria-hidden="true">
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg">
        <path ref={routeRef} className="bw-route" />
        <path ref={drawRef} className="bw-draw" />
      </svg>
      <div ref={pulseRef} className="bw-pulse" />
    </div>
  );
}
