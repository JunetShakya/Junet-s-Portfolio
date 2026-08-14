// import React from "react";
// import FrontendImg from "../../assets/img/FD.png";
// import BackendImg from "../../assets/img/BD.png";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";

const focus = [
  "Laravel",
  "PHP",
  "Node.js",
  "React",
  "MySQL",
  "Redis",
  "Docker",
  "REST APIs",
];

const timeline = [
  {
    year: "2021",
    title: "Started backend fundamentals",
    desc: "Learned PHP, MySQL and core API design principles.",
  },
  {
    year: "2023/12/12 – 2024/06/12",
    title: "Laravel Developer Intern — Studio Matrix",
    desc: "Developed and maintained backend functionalities, including vendor management, product listings, order processing, and user authentication.",
  },
  {
    year: "2025/09/26 – 2026/04/10",
    title: "Joined Amnil Technologies",
    desc: `Developed and maintained digital account opening systems for Global IME Bank, Machhapuchchhre Bank, and Citizens Bank.
          Built secure backend services using Laravel and RESTful APIs to streamline customer onboarding and account creation processes.
          Developed secure REST APIs with JWT authentication.
          Designed and optimized API endpoints for high-performance and reliable banking operations.
          Collaborated with frontend developers to integrate backend APIs.`,
  },
  {
    year: "Now",
    title: "Building Padma Vajra",
    desc: "Architecting a full booking platform with auth, admin tooling and email systems.",
  },
];
export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// about"
          title="Backend-first, product-minded"
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              I'm a backend-leaning full-stack developer focused on building
              systems that stay dependable under real traffic. My work spans API
              architecture, authentication, database design and performance
              tuning — most recently on digital banking infrastructure at Amnil
              Technologies.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              I follow structured patterns — repository interfaces, API
              versioning, role-based access with Spatie, and token auth via
              Sanctum — because maintainable systems compound in value over
              time. Outside of work, I'm building Padma Vajra, a full-scale
              booking platform, end to end.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-[var(--color-text-muted)]"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-6">
            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-[var(--color-cyan)] via-[var(--color-border)] to-transparent" />
            <div className="space-y-9">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-cyan)] bg-[var(--color-bg)]" />
                  <p className="font-mono text-xs text-[var(--color-cyan)]">
                    {t.year}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold">
                    {t.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
