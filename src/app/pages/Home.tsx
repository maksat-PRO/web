import { PillButton } from "../components/PillButton";
import { ProofChip } from "../components/ProofChip";
import { DiagonalShards } from "../components/DiagonalShards";
import { DashboardPreview, ProgramTimeline } from "../components/DesignWidgets";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Home() {
  const audiencePaths = [
    { label: "For LPs & family offices", title: "Build venture exposure without building an internal VC team", description: "A controlled path from thesis to pipeline, diligence, reporting, and structure readiness for private venture portfolios.", link: "/lps", linkLabel: "Review LP path →" },
    { label: "For corporate groups", title: "Launch a CVC function tied to future business lines", description: "A 90-day operating sprint for strategic thesis, governance, startup scouting, pilot logic, first IC materials, and board reporting.", link: "/cvc", linkLabel: "Build CVC →" },
    { label: "For founders", title: "Become globally investable before asking for capital", description: "Founder readiness, data room, narrative, market-entry logic, diligence preparation, and curated access to relevant capital and pilots.", link: "/founders", linkLabel: "Founder readiness →" },
  ];

  const thesisAreas = [
    ["Sports infrastructure", "Clubs, leagues, federations, facilities, fan engagement, analytics, media, participation, and operating software."],
    ["Wellness", "Recovery, corporate wellness, habit systems, diagnostics-adjacent tools, and measurable consumer outcomes."],
    ["Longevity", "Healthy aging, prevention, recovery, biomarker-driven products, clinical-adjacent workflows, and durable behavior change."],
    ["Human performance", "AI, data, training, recovery, diagnostics, and performance systems for athletes, teams, operators, and everyday high performers."],
    ["AI-enabled venture operations", "The operating layer for sourcing, scoring, diligence, IC materials, data rooms, LP reporting, and portfolio monitoring."],
  ];

  const programs = [
    { title: "CVC Launch Sprint", duration: "90 days", outcome: "Mandate, thesis, governance, budget, startup warehouse, pilot logic, first IC package, and board materials." },
    { title: "LP Venture Office", duration: "30–45 days", outcome: "LP profile, portfolio thesis, reporting workspace, first sourcing lanes, and operating mandate." },
    { title: "Founder Readiness Sprint", duration: "4–6 weeks", outcome: "Diagnostic, data room, investor narrative, target map, diligence Q&A, and market-entry path." },
    { title: "Scouting & Diligence Sprint", duration: "4–8 weeks", outcome: "Longlist, founder calls, scoring, shortlist, risk notes, memo drafts, and next-step recommendations." },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative max-w-[1200px] w-full">
          <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-gradient-to-br from-[#1a1d26]/80 via-[#12141a]/90 to-[#1a1d26]/80 border border-white/[0.06] backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <DiagonalShards />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/70 font-light uppercase tracking-wider">Venture platform for LPs, CVCs, and global founders</span></div>
                <h1 className="text-[34px] sm:text-[44px] lg:text-[58px] leading-[1.06] tracking-[-0.045em] mb-5 sm:mb-6"><span className="text-foreground/95 font-light block">CVC programs and specialized venture portfolios in sports, wellness, longevity, and human performance.</span></h1>
                <p className="text-[14px] sm:text-[16px] text-muted-foreground/72 font-light tracking-tight mb-8 sm:mb-10 leading-relaxed max-w-2xl">maksat.PRO builds the operating layer between strategic capital, high-potential founders, and Silicon Valley venture access: thesis design, AI-enabled venture operations, founder readiness, diligence, governance, data rooms, and reporting.</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-14"><PillButton to="/cvc" variant="primary" icon={<div className="w-2 h-2 rounded-full bg-foreground/60" />} className="w-full sm:w-auto justify-center">Build a CVC program</PillButton><PillButton to="/lps" variant="secondary" className="w-full sm:w-auto justify-center">Review LP path</PillButton><Link to="/trust-center" className="text-[13px] text-muted-foreground/65 hover:text-foreground/90 transition-colors">Review trust model →</Link></div>
                <div className="flex flex-wrap gap-2 sm:gap-3"><ProofChip>CVC launch</ProofChip><ProofChip>LP venture office</ProofChip><ProofChip>Founder readiness</ProofChip><ProofChip>AI-enabled venture operations</ProofChip></div>
              </div>
              <div className="lg:col-span-5"><DashboardPreview /></div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20"><div className="flex flex-col gap-3 mb-8 sm:mb-12"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Who we serve</span><h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">One platform, three clear entry points.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">LPs, corporate groups, and founders enter through specific processes, while every path shares the same discipline: evidence, governance, reporting, and structured access.</p></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">{audiencePaths.map((path, index) => <motion.div key={path.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><Link to={path.link} className="group block h-full"><div className="h-full rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/55 via-[#12141a]/65 to-[#1a1d26]/55 border border-white/[0.06] p-7 sm:p-8 hover:border-white/[0.12] transition-all duration-500"><div className="text-[11px] text-muted-foreground/45 font-light uppercase tracking-wider mb-4">{path.label}</div><h3 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/92 mb-4 leading-tight">{path.title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/65 font-light leading-relaxed mb-8">{path.description}</p><div className="text-[13px] text-muted-foreground/50 font-light group-hover:text-muted-foreground/75 transition-colors">{path.linkLabel}</div></div></Link></motion.div>)}</div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16"><div className="flex flex-col gap-3 mb-8 sm:mb-12"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Investment thesis</span><h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">A focused thesis where sport becomes health, longevity, data, and performance infrastructure.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">We use sport as an entry point into broader markets: wellness, longevity, human performance, and AI-enabled venture operations.</p></div><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">{thesisAreas.map(([title, description], index) => <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">Thesis {String(index + 1).padStart(2, "0")}</div><h3 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/92 mb-3">{title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{description}</p></motion.div>)}</div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 mb-16"><div className="rounded-[30px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8"><div><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Operating workstreams</span><h2 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mt-3 mb-3">What can be sold and delivered before management fees exist.</h2><p className="text-[14px] text-muted-foreground/60 font-light max-w-2xl leading-relaxed">CVC launch, LP venture office, founder readiness, scouting, diligence, and AI-enabled venture operations.</p></div><Link to="/fund" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">Review thesis & vehicles →</Link></div><ProgramTimeline items={programs} /></div></section>
    </div>
  );
}
