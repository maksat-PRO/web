import { Link } from "react-router";
import { motion } from "motion/react";
import { DiagonalShards } from "../components/DiagonalShards";
import { SignalCard } from "../components/SignalCard";
import { DashboardPreview, ProgramTimeline, ScoreMeter } from "../components/DesignWidgets";

export function Platform() {
  const modules = [
    { title: "Sourcing", description: "Founder discovery, ecosystem maps, referral tracking, founder intake, and signal capture across sports, wellness, longevity, and human-performance corridors" },
    { title: "Scoring", description: "Structured review across founder quality, market pull, traction, technical depth, compliance fit, global readiness, CVC pull, and exit optionality" },
    { title: "Due Diligence", description: "Diligence checklists, founder Q&A, legal and cap table review, technical assessment, market memo, risk register, and evidence archive" },
    { title: "IC Workflow", description: "Investment memos, committee packs, decision logs, conditions precedent, approval status, allocation notes, and conflict tracking" },
    { title: "LP / CVC Reporting", description: "Portfolio dashboards, quarterly updates, capital deployment tracking, strategic KPI reporting, pilot progress, reserve planning, and data-room evidence" },
    { title: "Founder Support", description: "Market-entry tasks, CVC pilot tracking, follow-on readiness, investor narrative, technical diligence preparation, and exit-readiness roadmap" },
  ];
  const scoring = ["Founder Signal", "Market Demand", "Technical Depth", "Compliance Fit", "Global Readiness", "CVC Pull", "Exit Optionality", "Reporting Quality"];
  const programs = [
    { title: "CVC Launch Sprint", duration: "90 days", outcome: "Mandate, governance, budget, pipeline sprint, first IC package, and board dashboard" },
    { title: "LP Venture Office Sprint", duration: "30–45 days", outcome: "LP profile, thesis, reporting workspace, first sourcing lanes, and setup mandate" },
    { title: "Founder Readiness Sprint", duration: "4–6 weeks", outcome: "Diagnostic, packaging, data room, investor memo, market-entry plan, and diligence Q&A" },
    { title: "Scouting & Diligence Sprint", duration: "4–8 weeks", outcome: "Founder longlist, interviews, scoring, shortlist, risk notes, and memo drafts" },
    { title: "Exit Readiness Sprint", duration: "Ongoing", outcome: "Strategic buyer map, next-round narrative, co-investor readiness, and acquisition logic" },
  ];
  const workflows = ["Deal-flow intake and founder intelligence", "Memo drafting and comparison", "Diligence task management and evidence tracking", "IC agenda, voting, approvals, and decision archive", "LP and CVC reporting with clear status logic", "Portfolio monitoring, follow-on signals, and exit preparation"];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden"><DiagonalShards /><div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10 lg:px-12 py-10 sm:py-12 items-center"><div className="lg:col-span-7"><div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">AI-enabled venture operations</span></div><h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">A shared operating system for venture work</h1><p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">AI-enabled venture operations is the internal infrastructure layer that supports sourcing, scoring, diligence, IC preparation, CVC pilot tracking, data rooms, LP reporting, portfolio support, and exit readiness</p><Link to="/contact?interest=platform" className="text-[13px] text-foreground/82 hover:text-foreground transition-colors">Discuss platform scope →</Link></div><div className="lg:col-span-5"><DashboardPreview /></div></div></div>
        </motion.div>
        <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Operating Modules</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{modules.map((module, index) => <SignalCard key={module.title} eyebrow={`Module ${String(index + 1).padStart(2, "0")}`} title={module.title} description={module.description} />)}</div></section>
        <section className="mb-16 sm:mb-20 lg:mb-24 rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"><div className="lg:col-span-4"><ScoreMeter score={84} label="Ready for IC" /></div><div className="lg:col-span-8"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Scoring discipline</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4">Readiness is assessed before access is activated</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed mb-6">We look for overlooked technical alpha where founder quality, market pull, global readiness, compliance fit, and exit optionality can compound. This is an internal assessment framework, not an investment promise</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">{scoring.map((factor) => <div key={factor} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] text-muted-foreground/70 font-light">{factor}</div>)}</div></div></div></section>
        <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Programs and Sprints</h2><ProgramTimeline items={programs} /></section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24"><SignalCard eyebrow="Operating discipline" title="Why it matters" description="Great venture work is not only access. It is discipline: the ability to see more founders, evaluate consistently, document decisions, manage conflicts, support portfolio companies, and report to LPs with evidence."><div className="space-y-3">{workflows.map((item) => <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" /><span>{item}</span></div>)}</div></SignalCard><SignalCard eyebrow="Positioning" title="Platform as proof" description="The public story remains CVC, LP portfolios, founder readiness, and specialized venture exposure. AI-enabled venture operations makes those workstreams repeatable, auditable, and reportable." /></section>
      </div>
    </div>
  );
}
