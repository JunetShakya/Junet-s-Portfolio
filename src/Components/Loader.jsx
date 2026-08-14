import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-sm text-[var(--color-cyan)]"
          >
            <span className="text-[var(--color-text-faint)]">$</span> booting
            <span className="animate-blink">_</span>
          </motion.div>
          <div className="h-px w-40 overflow-hidden bg-[var(--color-border)]">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
