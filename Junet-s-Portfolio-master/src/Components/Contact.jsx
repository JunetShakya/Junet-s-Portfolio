import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// contact"
          title="Let's build something"
          subtitle="Open to backend engineering roles and freelance API/Laravel work."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "shakyajunet@gmail.com", href: "mailto:shakyajunet@gmail.com" },
              { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/junetshakya", href: "https://linkedin.com" },
              { icon: GithubIcon, label: "GitHub", value: "github.com/junetshakya", href: "https://github.com/junetshakya" },
              { icon: MapPin, label: "Location", value: "Lalitpur,Jyatha", href: null },
            ].map((c) => (
              <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-cyan)]/15 to-[var(--color-violet)]/15 text-[var(--color-cyan)]">
                  <c.icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] text-[var(--color-text-faint)]">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="focus-ring truncate text-sm font-medium hover:text-[var(--color-cyan)]">
                      {c.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            {sent ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 size={34} className="text-[var(--color-cyan)]" />
                <p className="font-display text-lg font-semibold">Message sent</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Thanks, {form.name.split(" ")[0] || "there"} — I'll reply within a couple of days.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[11px] text-[var(--color-text-faint)]">Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-3.5 py-2.5 text-sm outline-none placeholder:text-[var(--color-text-faint)]"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[11px] text-[var(--color-text-faint)]">Email</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-3.5 py-2.5 text-sm outline-none placeholder:text-[var(--color-text-faint)]"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[11px] text-[var(--color-text-faint)]">Message</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="focus-ring w-full resize-none rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-3.5 py-2.5 text-sm outline-none placeholder:text-[var(--color-text-faint)]"
                    placeholder="Tell me about the role or project…"
                  />
                </label>
                <button
                  type="submit"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)] px-5 py-3 text-sm font-semibold text-[#04140f] transition-transform hover:scale-[1.02]"
                >
                  Send message <Send size={15} />
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
