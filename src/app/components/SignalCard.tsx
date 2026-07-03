import { ReactNode } from "react";
import { motion } from "motion/react";

interface SignalCardProps {
  eyebrow?: string;
  title: string;
  description?: string;
  index?: string;
  metric?: string;
  status?: string;
  children?: ReactNode;
  className?: string;
}

export function SignalCard({ eyebrow, title, description, index, metric, status, children, className = "" }: SignalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`signal-card group relative overflow-hidden rounded-[24px] border border-white/[0.075] bg-white/[0.035] p-6 sm:p-7 backdrop-blur-2xl ${className}`}
    >
      <div className="signal-card-line" />
      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/45 font-light">
            {eyebrow ?? index ?? "Signal"}
          </div>
          {(metric || status) && (
            <div className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1 text-[11px] text-muted-foreground/60 font-light">
              {metric ?? status}
            </div>
          )}
        </div>
        <h3 className="mb-3 text-[20px] sm:text-[24px] font-light tracking-[-0.035em] text-foreground/92 leading-tight">
          {title}
        </h3>
        {description && <p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </motion.div>
  );
}
