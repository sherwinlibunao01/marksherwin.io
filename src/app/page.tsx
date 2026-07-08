// "/" now shows the same "Field Ledger" page as "/f" — the definitive,
// most current version of the portfolio. Metadata for "/" comes from
// RootLayout (src/app/layout.tsx); "/f" keeps its own noindexed metadata
// (src/app/f/page.tsx) so it never competes with "/" as a duplicate URL.
export { default } from "./f/page";
