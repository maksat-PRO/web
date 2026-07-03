import { Link } from "react-router";
import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

export function CVC() {
  const problems = [
    "Future business scouting beyond internal R&D",
    "Strategic M&A and partnership pipeline",
    "Startup pilots connected to real business units",
    "Sector intelligence and board-level innovation reporting",
  ];

  const sprint = [
    { stage: "01", title: "Mandate & Thesis", outcome: "Strategic priorities, target sectors, geography, check logic, and decision rights." },
    { stage: "02", title: "Governance & IC", outcome: "Investment committee rhythm, approval gates, conflict rules, and reporting cadence." },
    { stage: "03", title: "Budget & Operating Model", outcome: "Capital allocation, OPEX, team roles, legal coordination, and dashboard structure." },
    { stage: "04", title: "Pipeline Sprint", outcome: "Startup warehouse, scoring framework, founder outreach, and first shortlist." },
    { stage: "05", title: "First IC Package", outcome: "IC memos, risk register, pilot/investment recommendations, and next actions." },
  ];

  const deliverables = [
    "CVC mandate and investment policy",
    "Startup warehouse and sourcing dashboard",
    "IC memo templates and decision log",
    "KPI dashboard and reporting pack",
    "Data room and compliance checklist",
    "Pilot-to-investment operating workflow",
  ];

  const fit = ["Financial groups", "Infrastructure and real estate groups", "Sports, wellness, and human-performance platforms", "Logistics and mobility operators", "AI-enabled services and regulated industries"];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">CVC Programs</span></div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">Build your future business pipeline through corporate venture</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">We help corporate groups launch a dedicated venture function that connects strategic priorities to startup scouting, pilots, investment governance, and long-term business-building options.</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4"><PillButton variant="primary" className="w-full sm:w-auto justify-center">Start CVC launch sprint</PillButton><Link to="/platform" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">See Fund OS →</Link></div>
            </div>
          </div>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24">
          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-8"><h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mb-6">What a CVC program solves</h2><div className="space-y-3">{problems.map((item) => <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" /><span>{item}</span></div>)}</div></div>
          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-8"><h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mb-6">Best fit</h2><div className="space-y-3">{fit.map((item) => <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" /><span>{item}</span></div>)}</div></div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">90-Day CVC Launch Sprint</h2>
          <div className="space-y-4 sm:space-y-5">{sprint.map((step, index) => <motion.div key={step.stage} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><div className="md:col-span-2 text-[12px] text-muted-foreground/42 font-light uppercase tracking-wider">Step {step.stage}</div><div className="md:col-span-4 text-[20px] sm:text-[24px] text-foreground/90 font-light tracking-tight">{step.title}</div><div className="md:col-span-6 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{step.outcome}</div></motion.div>)}</div>
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">What the corporate gets</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">A practical venture operating package that can be reviewed by executives, legal, finance, business units, and investment committee members.</p></div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">{deliverables.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
