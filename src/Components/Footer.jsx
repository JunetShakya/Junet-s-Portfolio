import { Mail, TerminalSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 font-display text-sm font-semibold">
          <TerminalSquare size={16} className="text-[var(--color-cyan)]" />
          junet<span className="text-[var(--color-cyan)]">.</span>dev
        </div>
        <p className="font-mono text-xs text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} Junet Shakya — built with React & Laravel-grade care.
        </p>
        <div className="flex items-center gap-4 text-[var(--color-text-faint)]">
          <a href="https://github.com/junetshakya" target="_blank" rel="noreferrer" className="focus-ring transition-colors hover:text-[var(--color-cyan)]" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="focus-ring transition-colors hover:text-[var(--color-cyan)]" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
          <a href="mailto:shakyajunet@gmail.com" className="focus-ring transition-colors hover:text-[var(--color-cyan)]" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
