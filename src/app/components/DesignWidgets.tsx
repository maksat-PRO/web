import { motion } from "motion/react";

export function VentureOrbit() {
  const nodes = ["LPs", "CVCs", "Founders", "Co-investors", "Accelerators", "Exits"];
  return (
    <div className="venture-orbit relative mx-auto aspect-square w-full max-w-[520px] rounded-full border border-white/[0.08] bg-white/[0.025] shadow-[0_32px_110px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
      <div className="absolute inset-[12%] rounded-full border border-white/[0.06]" />
      <div className="absolute inset-[24%] rounded-full border border-white/[0.05]" />
      <div className="orbit-signal" />
      <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/[0.12] bg-background/70 text-center shadow-[0_0_70px_rgba(96,165,250,0.18)] backdrop-blur-2xl">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/45">Core</div>
          <div className="mt-1 text-[15px] font-light text-foreground/92">AI Fund OS</div>
        </div>
      </div>
      {nodes.map((node, index) => {
        const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 39;
        const y = 50 + Math.sin(angle) * 39;
        return (
          <motion.div
            key={node}
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index }}
            className="absolute grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/[0.09] bg-white/[0.045] text-center text-[11px] text-foreground/82 shadow-[0_12px_46px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {node}
          </motion.div>
        );
      })}
    </div>
  );
}

export function ProgramTimeline({ items }: { items: { title: string; duration: string; outcome?: string }[] }) {
  return (
    <div className="program-timeline relative space-y-4">
      <div className="absolute left-[22px] top-5 bottom-5 hidden w-px bg-gradient-to-b from-transparent via-white/[0.16] to-transparent sm:block" />
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className="relative grid grid-cols-1 gap-4 rounded-[22px] border border-white/[0.07] bg-white/[0.03] p-5 backdrop-blur-xl sm:grid-cols-[56px_1fr_160px] sm:items-center"
        >
          <div className="hidden h-11 w-11 place-items-center rounded-full border border-white/[0.1] bg-background/70 text-[12px] text-muted-foreground/60 sm:grid">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3 className="text-[19px] font-light tracking-[-0.03em] text-foreground/90">{item.title}</h3>
            {item.outcome && <p className="mt-2 text-[13px] font-light leading-relaxed text-muted-foreground/66">{item.outcome}</p>}
          </div>
          <div className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-center text-[12px] font-light text-muted-foreground/62">{item.duration}</div>
        </motion.div>
      ))}
    </div>
  );
}

export function ScoreMeter({ score = 84, label = "Investor-ready" }: { score?: number; label?: string }) {
  const pct = Math.max(0, Math.min(100, score));
  return (
    <div className="score-meter rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/45">Readiness</div>
          <div className="mt-2 text-[28px] font-light tracking-[-0.05em] text-foreground/92">{label}</div>
        </div>
        <div className="text-[48px] font-light tracking-[-0.08em] text-foreground/90">{pct}</div>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-400/80 via-cyan-300/80 to-teal-300/80" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground/40">
        <span>Early</span><span>Build</span><span>Package</span><span>Ready</span>
      </div>
    </div>
  );
}

export function DashboardPreview() {
  const rows = [
    ["Founder signal", "High", "82"],
    ["CVC pull", "Active", "76"],
    ["Compliance fit", "Review", "68"],
    ["Exit optionality", "Strong", "84"],
  ];
  return (
    <div className="dashboard-preview rounded-[30px] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.36)] backdrop-blur-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/45">Live workspace</div>
          <div className="mt-1 text-[20px] font-light tracking-[-0.04em] text-foreground/90">Fund OS dashboard</div>
        </div>
        <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-200/80">Signal active</div>
      </div>
      <div className="space-y-3">
        {rows.map(([name, status, value]) => (
          <div key={name} className="grid grid-cols-[1fr_76px_42px] items-center gap-3 rounded-[16px] border border-white/[0.05] bg-background/30 p-3">
            <div className="text-[13px] text-muted-foreground/72">{name}</div>
            <div className="text-[12px] text-muted-foreground/52">{status}</div>
            <div className="text-right text-[13px] text-foreground/84">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExecutiveMemoPreview() {
  return (
    <div className="memo-preview rounded-[30px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-2xl">
      <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-5">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/45">Board memo</div>
          <div className="mt-1 text-[22px] font-light tracking-[-0.04em] text-foreground/90">CVC launch pack</div>
        </div>
        <div className="text-[12px] text-muted-foreground/45">90 days</div>
      </div>
      {['Mandate', 'Governance', 'Pipeline', 'First IC'].map((item, index) => (
        <div key={item} className="mb-3 grid grid-cols-[40px_1fr] gap-3 rounded-[16px] border border-white/[0.05] bg-background/28 p-3 last:mb-0">
          <div className="text-[11px] text-muted-foreground/38">0{index + 1}</div>
          <div className="text-[13px] text-muted-foreground/72">{item}</div>
        </div>
      ))}
    </div>
  );
}
