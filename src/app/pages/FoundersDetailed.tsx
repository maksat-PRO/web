import { Link } from "react-router";
import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";
import { founderFocus } from "./FounderFocusCards";
import { readinessCards, founderOutputs } from "./FounderReadinessCards";

const Grid = ({ items }: { items: { title: string; text: string }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
    {items.map((item, index) => (
      <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="h-full min-h-[220px] rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-7 overflow-hidden">
        <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">{String(index + 1).padStart(2, "0")}</div>
        <h3 className="text-[20px] sm:text-[23px] font-light tracking-tight text-foreground/90 mb-3 leading-tight break-words">{item.title}</h3>
        <p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed break-words">{item.text}</p>
      </motion.div>
    ))}
  </div>
);

export function FoundersDetailed() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <section className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden mb-16 sm:mb-20 lg:mb-24">
          <DiagonalShards />
          <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
            <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">For founders and projects</span>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mt-5 mb-6 leading-tight max-w-4xl">Founder readiness for global venture markets.</h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-4">We help technical teams turn strong local traction into a cleaner global story: materials, data room, market-entry logic, evidence, and partner narrative.</p>
            <p className="text-[13px] sm:text-[15px] text-foreground/78 font-light leading-relaxed max-w-3xl mb-8">We work with founders in sports, wellness, longevity, human performance and enabling AI infrastructure.</p>
            <div className="flex flex-wrap gap-3"><PillButton to="/contact?interest=founder" variant="primary">Submit founder materials</PillButton><Link to="/cases" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">See proof patterns →</Link></div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Founder focus</span>
          <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-light tracking-tight text-foreground/90 mt-3 mb-8 max-w-4xl">Where we focus founder readiness.</h2>
          <Grid items={founderFocus} />
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Readiness program</span>
          <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-light tracking-tight text-foreground/90 mt-3 mb-8 max-w-4xl">A process before introductions.</h2>
          <Grid items={readinessCards} />
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24 rounded-[26px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Outputs</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">What founders receive.</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">{founderOutputs.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div></section>
        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"><div className="lg:col-span-7"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Ready to prepare your founder materials?</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">Send a deck or short company note. We review fit, readiness gaps, market path, and the clearest next-step package.</p></div><div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3"><PillButton to="/contact?interest=founder" variant="primary">Submit materials</PillButton></div></div></section>
      </div>
    </div>
  );
}
