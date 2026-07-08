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
    { label: "For founders", title: "Prepare for strategic capital, pilots, and Silicon Valley fundraising", description: "Founder readiness, data room, narrative, market-entry logic, diligence preparation, target mapping, and structured outreach preparation.", link: "/founders", linkLabel: "Founder readiness →" },
  ];

  const buildAreas = [
    { title: "CVC programs", text: "Mandate, governance, startup warehouse, pilot pipeline, IC materials, and board reporting for corporate venture functions." },
    { title: "Dedicated portfolios", text: "Private venture office setup for family offices and strategic LPs: thesis, pipeline, diligence rhythm, reporting, and structure readiness." },
    { title: "Founder readiness", text: "Data room, narrative, market-entry logic, diligence Q&A, target mapping, and materials before fundraising or strategic conversations." },
    { title: "AI scouting", text: "AI-assisted sourcing, scoring, research notes, pipeline management, memo workflow, and portfolio monitoring inside the operating platform." },
  ];

  const thesisAreas = [
    ["Sports infrastructure", "Clubs, leagues, federations, facilities, fan engagement, analytics, media, participation, and operating software."],
    ["Wellness", "Recovery, corporate wellness, habit systems, diagnostics-adjacent tools, and measurable consumer outcomes."],
    ["Longevity", "Healthy aging, prevention, recovery, biomarker-driven products, clinical-adjacent workflows, and durable behavior change."],
    ["Human performance", "AI, data, training, recovery, diagnostics, and performance systems for athletes, teams, operators, and everyday high performers."],
    ["AI-enabled venture operations", "The operating layer for sourcing, scoring, diligence, IC materials, data rooms, LP reporting, and portfolio monitoring."],
  ];

  const whyNow = [
    "Sports is expanding into health, wellness, data, insurance-adjacent models, media, recovery, and measurable human performance.",
    "Corporate groups need a disciplined way to see future businesses before internal R&D or M&A can act.",
    "Family offices and strategic LPs want venture exposure without building a full internal VC team.",
    "Founders from emerging markets need cleaner packaging, compliance readiness, and global market-entry logic before capital conversations.",
  ];

  const programs = [
    { title: "Diagnostic", duration: "1–2 weeks", outcome: "Clarify audience, mandate, thesis, readiness gaps, governance needs, and required materials." },
    { title: "Mandate & setup", duration: "2–6 weeks", outcome: "Build the operating workspace, data room logic, decision process, roles, reporting cadence, and first workplan." },
    { title: "Pipeline & diligence", duration: "4–8 weeks", outcome: "Source, screen, interview, score, and prepare founders or targets for memo-ready review." },
    { title: "IC / reporting rhythm", duration: "Ongoing", outcome: "Run decision packs, risk notes, pilot recommendations, allocation logic, and stakeholder reporting." },
  ];

  const trustPoints = [
    "No public offering or standalone introduction-selling",
    "KYC/AML, sanctions, source-of-funds, and eligibility review before private access",
    "Documented governance: IC materials, decision logs, allocation logic, and conflict notes",
    "Separated public site, internal tools, client workspaces, staging, and data-room access",
  ];

  const selectedExamples = [
    { title: "CVC launch infrastructure", tag: "Corporate venture", text: "Mandate, investment policy, startup warehouse, scouting sprint, IC materials, KPI framework, reporting rhythm, and data room structure." },
    { title: "P3 fund operating layer", tag: "Fund OS", text: "Founder intake, LP private access, dealflow CRM, research notes, controlled data rooms, portfolio operations, and AI-assisted workflows." },
    { title: "Sports education ERP", tag: "Sports infrastructure", text: "Operational workflows for schools, coaches, facilities, inventory, parent interfaces, management accounts, and practical reporting." },
    { title: "AI video analysis tool", tag: "Sports AI", text: "Video-stream analysis workflow for coaches and athletes with recognition logic, mobile interaction, and performance feedback scenarios." },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative max-w-[1200px] w-full">
          <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-gradient-to-br from-[#1a1d26]/80 via-[#12141a]/90 to-[#1a1d26]/80 border border-white/[0.06] backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <DiagonalShards />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/70 font-light uppercase tracking-wider">Venture platform for LPs, CVCs, and founders</span></div>
                <h1 className="text-[34px] sm:text-[44px] lg:text-[58px] leading-[1.06] tracking-[-0.045em] mb-5 sm:mb-6"><span className="text-foreground/95 font-light block">maksat.PRO is a venture platform building specialised venture portfolios and CVC programs in sports, wellness, longevity and human performance.</span></h1>
                <p className="text-[14px] sm:text-[16px] text-muted-foreground/72 font-light tracking-tight mb-8 sm:mb-10 leading-relaxed max-w-2xl">We help strategic capital and family offices from emerging markets build venture exposure through AI-driven scouting, founder readiness, CVC pilots, and Silicon Valley partner access.</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8"><PillButton to="/lps" variant="primary" className="w-full sm:w-auto justify-center">For LPs & Family Offices</PillButton><PillButton to="/cvc" variant="secondary" className="w-full sm:w-auto justify-center">For Corporates / CVC</PillButton><PillButton to="/founders" variant="secondary" className="w-full sm:w-auto justify-center">For Founders</PillButton></div>
                <div className="mb-10 sm:mb-14"><Link to="/trust-center" className="text-[13px] text-muted-foreground/65 hover:text-foreground/90 transition-colors">Review trust model →</Link></div>
                <div className="flex flex-wrap gap-2 sm:gap-3"><ProofChip>CVC launch</ProofChip><ProofChip>LP venture office</ProofChip><ProofChip>Founder readiness</ProofChip><ProofChip>AI-enabled venture operations</ProofChip></div>
              </div>
              <div className="lg:col-span-5"><DashboardPreview /></div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20"><div className="flex flex-col gap-3 mb-8 sm:mb-12"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Who we serve</span><h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">One platform, three clear entry points.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">LPs, corporate groups, and founders enter through specific processes, while every path shares the same discipline: evidence, governance, reporting, and structured access.</p></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">{audiencePaths.map((path, index) => <motion.div key={path.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><Link to={path.link} className="group block h-full"><div className="h-full rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/55 via-[#12141a]/65 to-[#1a1d26]/55 border border-white/[0.06] p-7 sm:p-8 hover:border-white/[0.12] transition-all duration-500"><div className="text-[11px] text-muted-foreground/45 font-light uppercase tracking-wider mb-4">{path.label}</div><h3 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/92 mb-4 leading-tight">{path.title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/65 font-light leading-relaxed mb-8">{path.description}</p><div className="text-[13px] text-muted-foreground/50 font-light group-hover:text-muted-foreground/75 transition-colors">{path.linkLabel}</div></div></Link></motion.div>)}</div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16"><div className="flex flex-col gap-3 mb-8 sm:mb-12"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">What we build</span><h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">CVC programs, dedicated portfolios, founder readiness, and AI scouting.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">The legal wrapper comes later. First we build the operating discipline: thesis, pipeline, data room, diligence, governance, reporting, and trusted access controls.</p></div><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">{buildAreas.map((item, index) => <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-7"><div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">Build {String(index + 1).padStart(2, "0")}</div><h3 className="text-[22px] sm:text-[25px] font-light tracking-tight text-foreground/92 mb-3 leading-tight">{item.title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{item.text}</p></motion.div>)}</div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16"><div className="rounded-[30px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"><div className="lg:col-span-5"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Why now</span><h2 className="text-[28px] sm:text-[36px] font-light tracking-tight text-foreground/90 mt-3 mb-4 leading-tight">Sport, wellness, longevity, and performance are becoming private-market infrastructure themes.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed">The opportunity is no longer only in clubs or consumer apps. It is moving into data, recovery, prevention, participation, corporate wellness, media, and measurable human performance.</p></div><div className="lg:col-span-7 grid grid-cols-1 gap-3 sm:gap-4">{whyNow.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div></div></div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16"><div className="flex flex-col gap-3 mb-8 sm:mb-12"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Investment thesis</span><h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">A focused thesis where sport becomes health, longevity, data, and performance infrastructure.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">We use sport as an entry point into broader markets: wellness, longevity, human performance, and AI-enabled venture operations.</p></div><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">{thesisAreas.map(([title, description], index) => <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">Thesis {String(index + 1).padStart(2, "0")}</div><h3 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/92 mb-3">{title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{description}</p></motion.div>)}</div><div className="mt-8"><Link to="/thesis" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">Review full thesis →</Link></div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16"><div className="rounded-[30px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8"><div><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">How we work</span><h2 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mt-3 mb-3">A stage-gated process before structure, capital, or introductions.</h2><p className="text-[14px] text-muted-foreground/60 font-light max-w-2xl leading-relaxed">Every mandate starts with evidence, roles, documents, access controls, and decision discipline.</p></div><Link to="/trust-center" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">Review governance →</Link></div><ProgramTimeline items={programs} /></div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"><div className="lg:col-span-5 rounded-[26px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-8"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Trust & governance</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4 leading-tight">Compliance, data rooms, IC discipline, reporting, and partner roles.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed mb-6">The public site is not an offering. Private access is controlled by eligibility, compliance review, and structure-specific documents.</p><Link to="/trust-center" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">Open Trust Center →</Link></div><div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">{trustPoints.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div></div></section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 mb-16"><div className="flex flex-col gap-3 mb-8 sm:mb-12"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Selected pipeline / case examples</span><h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">Operating proof without return promises.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">Public examples are anonymized and focus on operating patterns: documents, workflows, infrastructure, and readiness signals.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">{selectedExamples.map((item, index) => <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><div className="text-[11px] text-blue-400/80 font-light uppercase tracking-wider mb-4">{item.tag}</div><h3 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/92 mb-3 leading-tight">{item.title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{item.text}</p></motion.div>)}</div><div className="mt-8"><Link to="/cases" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">View all case notes →</Link></div></section>
    </div>
  );
}
