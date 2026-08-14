import SectionHeading from "./SectionHeading.jsx";
import { techStack } from "../data/content.js";

export default function TechStack() {
  const row = [...techStack, ...techStack];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// stack" title="Technologies I reach for" center />
      </div>

      <div className="relative overflow-hidden border-y border-[var(--color-border)] bg-white/[0.015] py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-4">
          {row.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 font-mono text-sm text-[var(--color-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
