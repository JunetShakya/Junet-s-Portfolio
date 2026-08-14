import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

const COMMAND = "php artisan serve --backend=production-ready";

function useTypewriter(text, speed = 38, startDelay = 900) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let timeout;
    const start = setTimeout(() => {
      const tick = () => {
        i += 1;
        setOut(text.slice(0, i));
        if (i < text.length) timeout = setTimeout(tick, speed);
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);
  return out;
}

export default function Hero() {
  const typed = useTypewriter(COMMAND);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 animate-float-slow rounded-full bg-[var(--color-cyan)]/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 animate-float rounded-full bg-[var(--color-violet)]/10 blur-[110px]" />

      {/* floating code fragments */}
      {[
        { text: "{ status: 200 }", top: "18%", left: "6%", delay: 0 },
        { text: "SELECT * FROM users", top: "70%", left: "4%", delay: 1.2 },
        { text: "await redis.get()", top: "30%", left: "84%", delay: 0.6 },
        { text: "try { … } catch", top: "72%", left: "82%", delay: 1.8 },
      ].map((f, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.4 + f.delay, duration: 1 }}
          style={{ top: f.top, left: f.left }}
          className="pointer-events-none absolute hidden animate-float-slow select-none font-mono text-xs text-[var(--color-text-faint)] md:block"
        >
          {f.text}
        </motion.span>
      ))}

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-[var(--color-text-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)]" />
            Available for backend engineering roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Junet Shakya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-display text-xl font-medium text-gradient sm:text-2xl"
          >
            Backend Software Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--color-text-muted)]"
          >
            I design and build reliable server-side systems — from
            authentication and API architecture to database performance — using
            Laravel, Node.js, and MySQL. Currently shipping backend services in
            digital banking at Amnil Technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)] px-5 py-3 text-sm font-semibold text-[#04140f] transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/Junet_ShakyaCV.pdf"
              download="Junet_Shakya_CV.pdf"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-white/[0.07]"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="focus-ring inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex items-center gap-4 text-[var(--color-text-faint)]"
          >
            <a
              href="https://github.com/junetshakya"
              target="_blank"
              rel="noreferrer"
              className="focus-ring transition-colors hover:text-[var(--color-cyan)]"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="focus-ring transition-colors hover:text-[var(--color-cyan)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </div>

        {/* Signature terminal panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glow-cyan relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 shadow-2xl"
        >
          <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f36f5c]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f0b479]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#45e0d0]/70" />
            <span className="ml-3 font-mono text-[11px] text-[var(--color-text-faint)]">
              ~/junet-shakya/backend
            </span>
          </div>
          <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed">
            <p className="text-[var(--color-text-faint)]">
              <span className="text-[var(--color-cyan)]">➜</span> ~ {typed}
              <span className="animate-blink">▍</span>
            </p>
            <p className="text-[var(--color-text-muted)]">
              Starting Laravel development server…
            </p>
            <p>
              <span className="text-[var(--color-cyan)]">✓</span>{" "}
              <span className="text-[var(--color-text-muted)]">
                Route [POST] /api/v1/auth/login registered
              </span>
            </p>
            <p>
              <span className="text-[var(--color-cyan)]">✓</span>{" "}
              <span className="text-[var(--color-text-muted)]">
                Connected to MySQL — 4ms
              </span>
            </p>
            <p>
              <span className="text-[var(--color-cyan)]">✓</span>{" "}
              <span className="text-[var(--color-text-muted)]">
                Redis cache warmed — 12 keys
              </span>
            </p>
            <p>
              <span className="text-[var(--color-violet)]">⚡</span>{" "}
              <span className="text-[var(--color-text-muted)]">
                Server ready at{" "}
              </span>
              <span className="text-[var(--color-cyan)]">
                http://127.0.0.1:8000
              </span>
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--color-border)] pt-4 text-[11px]">
              {[
                ["Uptime", "99.9%"],
                ["Avg. latency", "48ms"],
                ["Coverage", "87%"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-white/[0.03] px-2.5 py-2">
                  <p className="text-[var(--color-text-faint)]">{k}</p>
                  <p className="mt-0.5 font-semibold text-[var(--color-text)]">
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
