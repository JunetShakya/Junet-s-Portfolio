import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55 }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      <p className="font-mono text-xs tracking-wider text-[var(--color-cyan)]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-xl text-[15px] text-[var(--color-text-muted)] ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
