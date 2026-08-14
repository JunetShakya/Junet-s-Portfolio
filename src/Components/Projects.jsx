import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/content.js";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// projects"
          title="Featured work"
          subtitle="A selection of systems I've designed, built, and shipped."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group overflow-hidden rounded-2xl transition-colors hover:border-[var(--color-cyan)]/30"
            >
              <div
                className="relative flex h-44 items-center justify-center overflow-hidden"
                style={{ background: p.image }}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <Folder size={40} className="relative text-[var(--color-text)]/70 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-text-faint)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3.5 py-2 text-xs font-medium transition-colors hover:bg-white/[0.06]"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)] px-3.5 py-2 text-xs font-semibold text-[#04140f] transition-transform hover:scale-[1.03]"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
