import { Link } from "react-router";
import { motion } from "motion/react";
import { Lock, FileText, ShieldCheck, BarChart3 } from "lucide-react";
import { DiagonalShards } from "../components/DiagonalShards";

export function DataRoom() {
  const sections = [
    {
      icon: FileText,
      title: "Fund Materials",
      items: ["Fund memo", "LP deck", "Indicative terms", "Portfolio construction note", "Co-investment overview"],
    },
    {
      icon: ShieldCheck,
      title: "Legal & Compliance",
      items: ["KYC / AML process", "Sanctions screening note", "Source-of-funds process", "Structure-specific disclaimers", "Eligibility checklist"],
    },
    {
      icon: BarChart3,
      title: "Governance & Reporting",
      items: ["IC process", "Allocation policy", "Conflict-management policy", "Quarterly report template", "LPAC / advisory committee mechanics"],
    },
  ];

  const accessSteps = [
    "Confirm LP profile and investment mandate",
    "Complete eligibility, KYC/AML, sanctions, and source-of-funds review",
    "Receive access to structure-specific materials and data room folders",
    "Schedule follow-up session on allocation, governance, and next steps",
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5"><Lock className="w-4 h-4 text-foreground/55" strokeWidth={1.5} /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Private LP access</span></div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">LP Data Room</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">A controlled-access workspace for fund memos, LP decks, indicative terms, governance materials, reporting templates, and compliance documents. Access is provided only after eligibility and compliance review</p>
              <div className="flex flex-wrap gap-3 sm:gap-4"><Link to="/contact?interest=lp-data-room" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 sm:px-6 sm:py-3 text-[13px] sm:text-[14px] text-foreground/95 font-light hover:bg-white/15 transition-colors w-full sm:w-auto">Request data room access</Link><Link to="/lps" className="inline-flex items-center justify-center rounded-full border border-white/5 px-5 py-2.5 sm:px-6 sm:py-3 text-[13px] sm:text-[14px] text-muted-foreground/80 font-light hover:bg-white/5 hover:text-foreground/90 transition-colors w-full sm:w-auto">Review LP thesis</Link></div>
            </div>
          </div>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {sections.map((section, index) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8">
              <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6"><section.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} /></div>
              <h2 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/90 mb-5">{section.title}</h2>
              <div className="space-y-3">{section.items.map((item) => <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" /><span>{item}</span></div>)}</div>
            </motion.div>
          ))}
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Access workflow</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">The public site does not expose private fund documents. Each LP receives access only to materials relevant to their structure, jurisdiction, and eligibility status</p></div>
            <div className="lg:col-span-7 space-y-4">{accessSteps.map((step, index) => <div key={step} className="grid grid-cols-[48px_1fr] gap-4 rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5"><div className="text-[12px] text-muted-foreground/40 font-light uppercase tracking-wider">0{index + 1}</div><div className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{step}</div></div>)}</div>
          </div>
        </section>

        <p className="mt-10 text-[10px] sm:text-[11px] text-muted-foreground/40 font-light text-center leading-relaxed max-w-3xl mx-auto">Data room access does not constitute an offer to sell securities or a solicitation to buy securities. Any participation is subject to final documents, investor eligibility, KYC/AML, sanctions screening, tax/legal review, and jurisdiction-specific restrictions</p>
      </div>
    </div>
  );
}
