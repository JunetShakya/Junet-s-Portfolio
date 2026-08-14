import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { testimonials } from "../data/content.js";

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// testimonials" title="What people say" center />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6"
            >
              <Quote size={20} className="text-[var(--color-cyan)]/60" />
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-violet)]/20 font-display text-xs font-semibold text-[var(--color-text)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-faint)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
