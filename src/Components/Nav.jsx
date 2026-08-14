import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, TerminalSquare } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "stats", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => go("top")}
          className="focus-ring flex items-center gap-2 font-display text-sm font-semibold tracking-wide"
        >
          <TerminalSquare size={18} className="text-[var(--color-cyan)]" />
          junet<span className="text-[var(--color-cyan)]">.</span>dev
        </button>

        <nav className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`focus-ring relative rounded-full px-3.5 py-1.5 transition-colors ${
                active === l.id
                  ? "text-[var(--color-text)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-[var(--color-border)] bg-white/5"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="focus-ring rounded-full bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)] px-4 py-2 font-mono text-[13px] font-medium text-[#04140f] transition-transform hover:scale-[1.03]"
          >
            Let's talk
          </a>
        </div>

        <button
          className="focus-ring text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass-strong mt-3 flex flex-col gap-1 px-6 py-4 font-mono text-sm md:hidden"
        >
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="focus-ring rounded-lg px-2 py-2 text-left text-[var(--color-text-muted)] hover:bg-white/5 hover:text-[var(--color-text)]"
            >
              {l.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
