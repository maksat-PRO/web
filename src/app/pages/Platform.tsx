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

  const workflows = [
    "Deal-flow intake and founder intelligence",
    "AI-assisted memo generation and comparison",
    "Diligence task management and evidence tracking",
    "IC agenda, voting, approvals, and decision archive",
    "LP reporting and co-investment pipeline visibility",
    "Portfolio monitoring, follow-on signals, and exit preparation",
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Platform / Fund OS</span></div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">A repeatable operating system for venture work</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">maksat.PRO is designed as more than a management company. It is a shared venture infrastructure layer for sourcing, scoring, due diligence, IC preparation, reporting, portfolio support, and exit readiness across CVCs, funds, SPVs, DAO-style access, and mono-LP mandates.</p>
              <Link to="/contact" className="text-[13px] text-foreground/82 hover:text-foreground transition-colors">Discuss platform scope →</Link>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Operating Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules.map((module, index) => (
              <motion.div key={module.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8">
                <div className="text-[11px] text-muted-foreground/42 font-light uppercase tracking-wider mb-4">Module {String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-3">{module.title}</h3>
                <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Why it matters</h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">Great venture work is not only access. It is discipline: the ability to see more founders, evaluate consistently, document decisions, manage conflicts, support portfolio companies, and report to LPs with evidence.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {workflows.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
