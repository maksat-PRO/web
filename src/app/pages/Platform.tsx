import { Link } from "react-router";
import { motion } from "motion/react";
import { DiagonalShards } from "../components/DiagonalShards";

export function Platform() {
  const modules = [
    { title: "Sourcing", description: "Founder discovery, ecosystem mapping, referral tracking, and signal capture across CIS, MENA, US, and EU corridors." },
    { title: "Scoring", description: "Structured founder, market, traction, technical, compliance, and strategic-fit scoring before IC escalation." },
    { title: "Due Diligence", description: "Diligence checklists, founder Q&A, legal and cap table review, technical assessment, market memo, and risk register." },
    { title: "IC Workflow", description: "Investment memos, committee packs, decision logs, conditions precedent, approval status, and allocation notes." },
    { title: "LP Reporting", description: "Quarterly updates, portfolio dashboard, capital deployment tracking, reserve planning, and data-room evidence." },
    { title: "Portfolio Support", description: "Market-entry tasks, CVC pilot tracking, follow-on fundraising support, founder packaging, and exit-readiness roadmap." },
  ];

  const scoring = [
    { factor: "Founder Signal", description: "Prior execution, technical depth, reputation, resilience, and ability to recruit." },
    { factor: "Market Demand", description: "Customer pull, budget owner clarity, urgency, and size of commercial corridor." },
    { factor: "Technical Depth", description: "Product defensibility, engineering quality, data advantage, and hard-to-copy know-how." },
    { factor: "Compliance Fit", description: "Cap table, legal structure, sanctions exposure, KYC/AML readiness, and capital-source story." },
    { factor: "Global Readiness", description: "Ability to operate in MENA, US, and EU markets with credible positioning and documentation." },
    { factor: "CVC Pull", description: "Clear fit with strategic buyers, pilot sponsors, distribution partners, or future acquirers." },
    { factor: "Exit Optionality", description: "Path to follow-on financing, strategic acquisition, or defensible scale outcome." },
  ];

  const programs = [
    { title: "Founder Readiness Sprint", duration: "4–6 weeks", outcome: "Diagnostic, packaging, data room, investor memo, and market-entry plan." },
    { title: "CVC Launch Sprint", duration: "90 days", outcome: "Mandate, governance, budget, pipeline sprint, first IC package, and dashboard." },
    { title: "Fund Formation Sprint", duration: "8–12 weeks", outcome: "Structure plan, counsel coordination, LP onboarding, data room, and reporting setup." },
    { title: "LP Onboarding Sprint", duration: "2–4 weeks", outcome: "Fit assessment, eligibility, KYC/AML, allocation logic, and reporting access." },
    { title: "Exit Readiness Sprint", duration: "Ongoing", outcome: "Strategic buyer map, next-round narrative, co-investor readiness, and acquisition logic." },
  ];

  const corridors = ["CIS / post-Soviet technical ecosystems", "Kazakhstan and Central Asia", "Cyprus and UAE founder relocation hubs", "European bridge cities", "Silicon Valley commercialization layer", "MENA strategic customer corridor"];

  const workflows = ["Deal-flow intake and founder intelligence", "AI-assisted memo generation and comparison", "Diligence task management and evidence tracking", "IC agenda, voting, approvals, and decision archive", "LP reporting and co-investment pipeline visibility", "Portfolio monitoring, follow-on signals, and exit preparation"];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden"><DiagonalShards /><div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12"><div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Platform / Fund OS</span></div><h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">A repeatable operating system for venture work</h1><p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">maksat.PRO is designed as more than a management company. It is a shared venture infrastructure layer for sourcing, scoring, due diligence, IC preparation, reporting, portfolio support, and exit readiness across CVCs, funds, SPVs, DAO-style access, and mono-LP mandates.</p><Link to="/contact" className="text-[13px] text-foreground/82 hover:text-foreground transition-colors">Discuss platform scope →</Link></div></div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Operating Modules</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{modules.map((module, index) => <motion.div key={module.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><div className="text-[11px] text-muted-foreground/42 font-light uppercase tracking-wider mb-4">Module {String(index + 1).padStart(2, "0")}</div><h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-3">{module.title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{module.description}</p></motion.div>)}</div></section>

        <section className="mb-16 sm:mb-20 lg:mb-24 rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"><div className="lg:col-span-4"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Thesis + scoring</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4">Investment Readiness Score</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">We look for overlooked technical alpha where founder quality, market demand, global readiness, compliance fit, and exit optionality can compound. This is an internal assessment framework, not a guarantee of investment.</p></div><div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">{scoring.map((item) => <div key={item.factor} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5"><h3 className="text-[16px] text-foreground/86 font-light mb-2">{item.factor}</h3><p className="text-[12px] sm:text-[13px] text-muted-foreground/65 font-light leading-relaxed">{item.description}</p></div>)}</div></div></section>

        <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Programs and Sprints</h2><div className="space-y-4 sm:space-y-5">{programs.map((program, index) => <motion.div key={program.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><div className="md:col-span-2 text-[12px] text-muted-foreground/42 font-light uppercase tracking-wider">{program.duration}</div><div className="md:col-span-4 text-[20px] sm:text-[24px] text-foreground/90 font-light tracking-tight">{program.title}</div><div className="md:col-span-6 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{program.outcome}</div></motion.div>)}</div></section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24"><div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-8"><h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mb-4">Sourcing Corridors</h2><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">We source from high-friction technical ecosystems and relocation hubs where strong founders often have product depth but need international packaging, compliance readiness, and trusted access to global capital.</p><div className="space-y-3">{corridors.map((item) => <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" /><span>{item}</span></div>)}</div></div><div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-8"><h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mb-4">Why it matters</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed mb-6">Great venture work is not only access. It is discipline: the ability to see more founders, evaluate consistently, document decisions, manage conflicts, support portfolio companies, and report to LPs with evidence.</p><div className="space-y-3">{workflows.map((item) => <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" /><span>{item}</span></div>)}</div></div></section>
      </div>
    </div>
  );
}
