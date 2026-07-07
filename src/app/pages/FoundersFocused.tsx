import { Link } from "react-router";
import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

export function FoundersFocused() {
  const focus = ["Sports", "Wellness", "Longevity", "Human performance", "Enabling AI infrastructure"];
  const steps = ["Founder diagnostic", "Investment packaging", "Data room", "Market entry", "Exit readiness"];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">For founders and projects</span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mt-5 mb-6 leading-tight max-w-4xl">Founder readiness for global venture markets.</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-4">We prepare founder materials, data rooms, market-entry logic, diligence answers, and next-step investor narrative.</p>
              <p className="text-[13px] sm:text-[15px] text-foreground/78 font-light leading-relaxed max-w-3xl mb-8">We work with founders in sports, wellness, longevity, human performance and enabling AI infrastructure.</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4"><PillButton to="/contact?interest=founder" variant="primary">Submit founder materials</PillButton><Link to="/cases" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">See proof patterns →</Link></div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Founder focus</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">Where we focus founder readiness.</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">{focus.map((item) => <div key={item} className="rounded-[20px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-5 text-[14px] text-foreground/84 font-light">{item}</div>)}</div></section>

        <section className="rounded-[26px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Founder readiness</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">A process before introductions.</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">{steps.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div></section>
      </div>
    </div>
  );
}
