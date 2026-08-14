import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="// experience" title="Where I've worked" />

        <div className="relative pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-cyan)] via-[var(--color-violet)]/40 to-transparent" />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-10 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-cyan)]/50 bg-[var(--color-surface)] text-[var(--color-cyan)]">
                  <Briefcase size={14} />
                </span>
                <div className="glass rounded-2xl p-6 transition-colors hover:border-[var(--color-cyan)]/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-[var(--color-text-faint)]">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-cyan)]">{e.company}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-[var(--color-text-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
