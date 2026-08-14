import { motion } from "framer-motion";
import { Network, ServerCog, DatabaseZap, KeyRound, Zap, Gauge } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/content.js";

const ICONS = [Network, ServerCog, DatabaseZap, KeyRound, Zap, Gauge];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// services"
          title="How I can help"
          subtitle="Backend engineering, from the first schema to production monitoring."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 transition-colors hover:border-[var(--color-cyan)]/30"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-cyan)]/15 to-[var(--color-violet)]/15 text-[var(--color-cyan)]">
                  <Icon size={19} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
