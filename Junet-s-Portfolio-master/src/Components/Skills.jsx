import { motion } from "framer-motion";
import { Server, Database, Boxes, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data/content.js";

const ICONS = { Backend: Server, Database: Database, DevOps: Boxes, Tools: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// skills"
          title="What I work with"
          subtitle="A focused toolkit for building and operating backend systems end to end."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items], i) => {
            const Icon = ICONS[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass group rounded-2xl p-6 transition-colors hover:border-[var(--color-cyan)]/30"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-cyan)]/15 to-[var(--color-violet)]/15 text-[var(--color-cyan)]">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-base font-semibold">{category}</h3>
                <div className="mt-5 space-y-3.5">
                  {items.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-[var(--color-text-muted)]">{s.name}</span>
                        <span className="font-mono text-[var(--color-text-faint)]">{s.level}%</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
