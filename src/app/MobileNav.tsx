"use client";

import { useState } from "react";

export function MobileNav({ nav }: { nav: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
      >
        <span
          className="h-px w-5 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }}
        />
        <span
          className="h-px w-5 bg-current transition-opacity duration-200"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="h-px w-5 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-20 mt-3 w-48 border border-[var(--c-line)] bg-[var(--c-bg)] text-sm text-[var(--c-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[var(--c-line)] px-4 py-3 transition-colors duration-300 hover:text-[var(--c-ink)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-[var(--c-ink)] transition-colors duration-300 hover:text-[var(--c-primary)]"
          >
            Work together
          </a>
        </div>
      )}
    </div>
  );
}
