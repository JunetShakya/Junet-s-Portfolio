import { motion } from "framer-motion";
import { GitBranch, Star, GitFork } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { stats } from "../data/content.js";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

const repos = [
  { name: "padma-vajra", desc: "Laravel + React booking platform", stars: 12, forks: 3 },
  { name: "laravel-api-kit", desc: "Reusable repository + resource scaffolding", stars: 34, forks: 9 },
  { name: "growstro-pos", desc: "Multi-tenant restaurant POS system", stars: 8, forks: 2 },
];

export default function GithubStats() {
  const weeks = 26;
  const cells = Array.from({ length: weeks * 7 }, () => Math.floor(Math.random() * 5));

  return (
    <section id="stats" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// github"
          title="Open-source activity"
          subtitle="A snapshot of recent contributions and repository highlights."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] text-[var(--color-text-faint)]">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass mt-6 rounded-2xl p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)]">
              <GithubIcon size={14} /> contribution graph
            </p>
            <p className="font-mono text-[11px] text-[var(--color-text-faint)]">last 6 months</p>
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto pb-2">
            {cells.map((v, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-[2px]"
                style={{
                  background:
                    v === 0
                      ? "rgba(148,163,184,0.08)"
                      : `rgba(69, 224, 208, ${0.18 + v * 0.2})`,
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {repos.map((r, i) => (
            <motion.a
              key={r.name}
              href="https://github.com/junetshakya"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass block rounded-2xl p-5 transition-colors hover:border-[var(--color-cyan)]/30"
            >
              <p className="flex items-center gap-2 font-mono text-sm text-[var(--color-cyan)]">
                <GitBranch size={14} /> {r.name}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{r.desc}</p>
              <div className="mt-4 flex items-center gap-4 font-mono text-xs text-[var(--color-text-faint)]">
                <span className="flex items-center gap-1"><Star size={13} /> {r.stars}</span>
                <span className="flex items-center gap-1"><GitFork size={13} /> {r.forks}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
