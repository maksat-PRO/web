import { motion } from "motion/react";
import { Link } from "react-router";
import { DiagonalShards } from "../components/DiagonalShards";
import { SignalCard } from "../components/SignalCard";
import { ScoreMeter } from "../components/DesignWidgets";

export function FounderReadinessScore() {
  const scoreFactors = [
    { title: "Founder Signal", weight: "20%", checks: ["Prior execution", "Technical depth", "Ability to recruit", "Reputation and references"] },
    { title: "Market Demand", weight: "20%", checks: ["Customer pull", "Revenue or pilots", "Urgency and budget owner", "Market expansion potential"] },
    { title: "Technical Depth", weight: "15%", checks: ["Product defensibility", "Engineering quality", "Data advantage", "Hard-to-copy know-how"] },
    { title: "Compliance Fit", weight: "15%", checks: ["Clean cap table", "Legal structure", "KYC/AML readiness", "Sanctions and capital-source review"] },
    { title: "Global Readiness", weight: "15%", checks: ["English investor materials", "Data room", "MENA / US / EU positioning", "International operating discipline"] },
    { title: "Exit Optionality", weight: "15%", checks: ["Strategic buyer map", "Next-round investor map", "Corporate pilot evidence", "Acquisition narrative"] },
  ];
  const intake = ["Company deck", "Cap table", "Financial snapshot", "Product demo / credentials", "Customer or pilot evidence", "Legal entity structure", "Founder bio and prior exits", "Target geography and use of funds"];
  const bands = [
    { range: "80–100", label: "Investor-ready", description: "Ready for curated investor conversations after final diligence and legal review." },
    { range: "60–79", label: "Packaging-ready", description: "Strong enough to begin packaging; needs data room, memo, or positioning cleanup." },
    { range: "40–59", label: "Preparation stage", description: "Potential signal exists, but proof, legal, market, or traction gaps should be closed first." },
    { range: "0–39", label: "Too early / high friction", description: "Not ready for international capital; focus on traction, structure, or founder-market proof." },
  ];
  const handlePrint = () => window.print();

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden"><DiagonalShards /><div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10 lg:px-12 py-10 sm:py-12 items-center"><div className="lg:col-span-7"><div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Downloadable founder memo</span></div><h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">Founder Readiness Score</h1><p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">A practical intake memo and checklist for founders who want to understand how close they are to international fundraising, CVC pilots, co-investment, and strategic exit conversations</p><div className="flex flex-wrap gap-3 sm:gap-4 print:hidden"><button onClick={handlePrint} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 sm:px-6 sm:py-3 text-[13px] sm:text-[14px] text-foreground/95 font-light hover:bg-white/15 transition-colors w-full sm:w-auto">Print / save as PDF</button><Link to="/founders" className="inline-flex items-center justify-center rounded-full border border-white/5 px-5 py-2.5 sm:px-6 sm:py-3 text-[13px] sm:text-[14px] text-muted-foreground/80 font-light hover:bg-white/5 hover:text-foreground/90 transition-colors w-full sm:w-auto">Submit founder application</Link></div></div><div className="lg:col-span-5"><ScoreMeter score={84} label="Packaging-ready" /></div></div></div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Scoring framework</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{scoreFactors.map((factor) => <SignalCard key={factor.title} eyebrow={`Weight ${factor.weight}`} title={factor.title}><div className="space-y-3">{factor.checks.map((item) => <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" /><span>{item}</span></div>)}</div></SignalCard>)}</div></section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24"><SignalCard eyebrow="Checklist" title="Founder intake checklist"><div className="space-y-3">{intake.map((item) => <label key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-white/[0.03]" /><span>{item}</span></label>)}</div></SignalCard><SignalCard eyebrow="Readiness bands" title="Score bands"><div className="space-y-4">{bands.map((band) => <div key={band.range} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5"><div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-2">{band.range}</div><h3 className="text-[17px] text-foreground/86 font-light mb-2">{band.label}</h3><p className="text-[12px] sm:text-[13px] text-muted-foreground/65 font-light leading-relaxed">{band.description}</p></div>)}</div></SignalCard></section>

        <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light text-center leading-relaxed max-w-3xl mx-auto">This score is an internal readiness framework for founder intake and is not an investment decision, valuation opinion, legal advice, or fundraising guarantee</p>
      </div>
    </div>
  );
}
