"use client";

import { useEffect, useRef } from "react";

/**
 * F's take on B's Live Wire: identical scroll-synced lead, ignition, and
 * docking mechanics, but the path is a ledger serpentine instead of B's
 * S-curves. The wire runs down the numeral gutter and, at every row
 * boundary, glides across the page and back — through the horizontal
 * padding bands just above (ABOVE px) and below (BELOW px) the boundary,
 * where no text ever sits — before dropping to the next stage's node.
 *
 * Horizontal runs share a single y, so the y→length lookup snaps the
 * target across a glide the instant scroll crosses that boundary; the
 * lerp is what turns that snap into the visible left-to-right slide.
 *
 * Fallbacks match Wire.tsx: reduced motion / no JS render the route
 * fully drawn with the pulse hidden, and nothing on the page is gated
 * on this component.
 */

const SAMPLES = 420;
// The pulse tracks the point 62% down the viewport (same as /b).
const FOCUS = 0.62;
const LERP = 0.085;
const ELBOW = 24; // corner radius where the wire turns
const ABOVE = 44; // glide-right band sits this far above a row boundary
const BELOW = 40; // glide-left band sits this far below it

export function FWire() {
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
      svg!.setAttribute("width", String(root!.clientWidth));
      svg!.setAttribute("height", String(root!.offsetHeight));

      // Serpentine: every anchor shares the gutter x; mirror it for the
      // right rail. Between consecutive stations, sweep right through the
      // source row's bottom padding, drop past the boundary, sweep back
      // left through the next row's top padding, then fall to its node.
      const xL = pts[0].x;
      const xR = rootBox.width - xL;
      let d = `M ${xL.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const st = stations[i];
        const boundary = st
          ? st.getBoundingClientRect().bottom - rootBox.top
          : (pts[i].y + pts[i + 1].y) / 2;
        const a = boundary - ABOVE;
        const b = boundary + BELOW;
        d +=
          ` L ${xL.toFixed(1)} ${(a - ELBOW).toFixed(1)}` +
          ` Q ${xL.toFixed(1)} ${a.toFixed(1)} ${(xL + ELBOW).toFixed(1)} ${a.toFixed(1)}` +
          ` L ${(xR - ELBOW).toFixed(1)} ${a.toFixed(1)}` +
          ` Q ${xR.toFixed(1)} ${a.toFixed(1)} ${xR.toFixed(1)} ${(a + ELBOW).toFixed(1)}` +
          ` L ${xR.toFixed(1)} ${(b - ELBOW).toFixed(1)}` +
          ` Q ${xR.toFixed(1)} ${b.toFixed(1)} ${(xR - ELBOW).toFixed(1)} ${b.toFixed(1)}` +
          ` L ${(xL + ELBOW).toFixed(1)} ${b.toFixed(1)}` +
          ` Q ${xL.toFixed(1)} ${b.toFixed(1)} ${xL.toFixed(1)} ${(b + ELBOW).toFixed(1)}` +
          ` L ${xL.toFixed(1)} ${pts[i + 1].y.toFixed(1)}`;
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

    let current = 0;
    let raf = 0;

    function frame() {
      raf = requestAnimationFrame(frame);
      if (totalLength === 0 || samples.length === 0) return;

      const vh = window.innerHeight;
      const focusY = window.scrollY + vh * FOCUS - rootTopDoc;
      // Compress the map so the pulse docks at the terminal node exactly
      // at maximum scroll (same trick as /b).
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
