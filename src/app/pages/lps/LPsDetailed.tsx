import { Link } from "react-router";
import { motion } from "motion/react";
import { PillButton } from "../../components/PillButton";
import { DiagonalShards } from "../../components/DiagonalShards";
import { focusCards, pathCards } from "./lpCards";

const workProducts = ["Portfolio memo", "Pipeline shortlist", "Diligence workstream", "Reporting workspace", "Structure readiness pack", "Quarterly update pack"];

const Grid = ({ items, five = false }: { items: { title: string; text: string }[]; five?: boolean }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 ${five ? "xl:grid-cols-5" : "xl:grid-cols-4"} gap-4 sm:gap-5`}>
    {items.map((item, index) => (
      <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6">
        <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">{String(index + 1).padStart(2, "0")}</div>
        <h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-3 leading-tight">{item.title}</h3>
        <p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{item.text}</p>
      </motion.div>
    ))}
  </div>
);

export function LPsDetailed() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <section className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden mb-16 sm:mb-20 lg:mb-24">
          <DiagonalShards />
          <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
            <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">For LPs and family offices</span>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mt-5 mb-6 leading-tight max-w-4xl">Build venture exposure without building an internal VC team.</h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-4">maksat.PRO gives private capital a controlled operating path from thesis to pipeline, diligence, reporting, governance, and future vehicle readiness.</p>
            <p className="text-[13px] sm:text-[15px] text-foreground/78 font-light leading-relaxed max-w-3xl mb-8">Focused on sports, wellness, longevity, human performance, and AI-enabled venture operations.</p>
            <div className="flex flex-wrap gap-3"><PillButton to="/contact?interest=lp-materials" variant="primary">Request LP memo</PillButton><PillButton to="/contact?interest=lp-portfolio-setup" variant="secondary">Start portfolio setup</PillButton><Link to="/trust-center" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">Review trust model →</Link></div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Thesis focus</span><h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-light tracking-tight text-foreground/90 mt-3 mb-8 max-w-4xl">A focused thesis, not generic startup exposure.</h2><Grid items={focusCards} five /></section>
        <section className="mb-16 sm:mb-20 lg:mb-24"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">LP paths</span><h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-light tracking-tight text-foreground/90 mt-3 mb-8 max-w-4xl">Four entry points, one disciplined process.</h2><Grid items={pathCards} /></section>
        <section className="mb-16 sm:mb-20 lg:mb-24 rounded-[26px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Work products</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">What makes the mandate tangible.</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{workProducts.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div></section>
        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"><div className="lg:col-span-7"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Ready to review the LP memo?</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">The best next step is a short fit call and memo request. After that we define reporting depth, data-room access, and the first scouting sprint.</p></div><div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3"><PillButton to="/contact?interest=lp-materials" variant="primary">Request LP memo</PillButton><PillButton to="/contact?interest=lp-portfolio-setup" variant="secondary">Start setup</PillButton></div></div></section>
      </div>
    </div>
  );
}
