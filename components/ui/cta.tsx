import { cn } from "@/lib/utils";

export function PrimaryCta({ className = "", href = "#contato" }: { className?: string; href?: string }) {
  return (
    <a className={cn("ee-cta", className)} href={href}>
      <span>solicitar diagnóstico</span>
      <span className="ee-cta__knob" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7" /></svg>
      </span>
    </a>
  );
}
