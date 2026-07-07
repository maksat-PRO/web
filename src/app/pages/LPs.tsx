import { Link } from "react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

const BulletList = ({ items }: { items: string[] }) => (
  <div className="space-y-3">
    {items.map((item) => (
      <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
        <span>{item}</span>
      </div>
    ))}
  </div>
);

const SectionCard = ({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) => (
  <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-8">
    {subtitle && <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">{subtitle}</span>}
    <h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mt-3 mb-6">{title}</h2>
    {children}
  </div>
);

export function LPs() {
  const lpPaths = [
    ["Individual Venture Office", "For one LP or family office", "Advisory scope", "Thesis, pipeline, diligence workflow, reporting, and operating setup.", "/contact?interest=lp-portfolio-setup", "Start setup"],
    ["Club Deal Readiness", "For shared opportunity review", "Deal-by-deal support", "Memo, risk notes, data-room review, allocation logic, and reporting support.", "/contact?interest=club-deal", "Request access"],
    ["CVC Portfolio Office", "For corporate groups", "Strategic mandate", "Startup scouting, pilot logic, governance, IC process, and board materials.", "/cvc", "Start CVC path"],
    ["Fund Formation Readiness", "For future structures", "Counsel-ready prep", "Structure options, data-room materials, onboarding logic, and reporting model.", "/fund", "Review options"],
  ];

  const first30Days = [
    "LP profile: goals, geography, sectors, decision process, and reporting expectations",
    "Portfolio thesis: founder profile, stage, sourcing lanes, value-add logic, and exclusion criteria",
    "Operating setup: workspace, reporting cadence, memo template, and data-room checklist",
    "Pipeline criteria: intake questions, scoring model, red flags, and shortlist format",
    "Commercial scope: advisory, venture office, scouting, or diligence service agreement",
  ];

  const decisionPath = [
    "Intro call and fit review",
    "Scope of work and portfolio setup mandate",
    "Thesis workshop and governance choices",
    "First scouting sprint and founder shortlist",
    "Deal-level diligence and memo",
    "LP review and structure-specific legal check",
    "Reporting, monitoring, and next sprint planning",
  ];

  const reasons = [
    ["Control before structure", "The LP sees the process, thesis, pipeline, and reporting model before choosing any long-term vehicle."],
    ["Founder access with context", "We focus on technical founders who need global packaging, market-entry support, and disciplined preparation."],
    ["Service model first", "The first commercial product is a practical mandate: scouting, diligence, reporting, and setup work."],
    ["International advisory layer", "External advisors and access partners can support positioning, founder readiness, and introductions where appropriate."],
    ["AI-enabled operating layer", "Fund OS supports sourcing, scoring, memo workflows, portfolio monitoring, and LP reporting."],
    ["Compliance-aware language", "The website does not make a public offer and does not promise returns. Formal steps require professional review."],
  ];

  const outputs = [
    ["LP Portfolio Memo", "A concise document covering profile, thesis, proposed mandate, first sourcing lanes, and next steps."],
    ["Pipeline Shortlist", "A curated founder list with fit notes, red flags, and recommended next actions."],
    ["DD Pack", "Memo, data-room review, market notes, founder references, risk map, and recommendation."],
    ["Reporting Workspace", "Dashboard structure, update template, memo archive, and monitoring logic."],
    ["Structure Readiness Pack", "Counsel-ready options, onboarding checklist, and document map."],
  ];

  const governance = [
    "LP review before serious deal execution where the mandate requires it",
    "Memo archive and rationale for each serious opportunity",
    "Pipeline dashboard with status, score, next step, owner, and risk notes",
    "Quarterly reporting pack and portfolio-level update",
    "Conflict and allocation policy for opportunities shared across mandates",
    "Data-room discipline for company, LP, and reporting materials",
    "Clear separation between advisory/setup services and future vehicle formation",
    "Professional legal and tax review before formal structures",
  ];

  const risks = [
    "Startup execution and market risk",
    "Compliance and onboarding risk",
    "Cross-border structuring risk",
    "Follow-on financing and valuation risk",
    "Exit timing and liquidity risk",
    "Concentration and allocation risk",
    "Conflicts between platform mandates",
    "Key-person and operating-capacity risk",
  ];

  const custom = [
    "Geography and sourcing corridors",
    "Investment thesis and excluded sectors",
    "Ticket size and reserve logic",
    "Approval, IC, observer, or reporting mechanics",
    "Deal-by-deal vs. portfolio-level review model",
    "Co-investment visibility and allocation rules",
    "Data-room and confidentiality level",
    "External counsel and tax review process",
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">For LPs and family offices</span></div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">Start with a venture office mandate</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">maksat.PRO helps LPs and family offices move from venture interest to an executable private portfolio process: thesis, deal flow, diligence, approval workflow, data room, and reporting. Formal structures come later, after fit review and professional guidance.</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4"><PillButton to="/contact?interest=lp-portfolio-setup" variant="primary" className="w-full sm:w-auto justify-center">Start portfolio setup</PillButton><PillButton to="/contact?interest=lp-materials" variant="secondary" className="w-full sm:w-auto justify-center">Request LP memo</PillButton><Link to="/trust-center" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">Review trust model →</Link></div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Choose your LP path</span><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mt-3 mb-4 max-w-3xl">Four entry points that lead to the same disciplined process.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl mb-8">The right path depends on the LP’s control needs, desired visibility, reporting expectations, and whether the goal is individual venture office work, club-deal support, CVC, or future fund readiness.</p><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">{lpPaths.map(([title, audience, ticket, desc, to, cta], i) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-[24px] sm:rounded-[26px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-7"><div className="text-[11px] text-muted-foreground/42 font-light uppercase tracking-wider mb-4">{ticket}</div><h3 className="text-[20px] sm:text-[23px] font-light tracking-tight text-foreground/90 mb-3 leading-tight">{title}</h3><div className="text-[12px] text-muted-foreground/50 font-light mb-4">{audience}</div><p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed mb-6">{desc}</p><Link to={to} className="text-[13px] text-foreground/82 hover:text-foreground transition-colors">{cta} →</Link></motion.div>)}</div></section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24"><SectionCard title="What LP receives in the first 30–45 days" subtitle="Concrete outputs"><BulletList items={first30Days} /></SectionCard><SectionCard title="The decision path" subtitle="From interest to operating mandate"><div className="space-y-4">{decisionPath.map((step, index) => <div key={step} className="grid grid-cols-[48px_1fr] gap-4 rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5"><div className="text-[12px] text-muted-foreground/40 font-light uppercase tracking-wider">0{index + 1}</div><div className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{step}</div></div>)}</div></SectionCard></section>

        <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Why this is credible for LPs</h2><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">{reasons.map(([title, description], i) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><h3 className="text-[20px] sm:text-[23px] font-light tracking-tight text-foreground/90 mb-3">{title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{description}</p></motion.div>)}</div></section>

        <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">What the LP can request</h2><div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] overflow-hidden"><div className="divide-y divide-white/[0.04]">{outputs.map(([title, description], index) => <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-8 p-5 sm:p-6"><div className="text-[16px] sm:text-[18px] text-foreground/88 font-light">{title}</div><div className="text-[13px] sm:text-[14px] text-muted-foreground/72 font-light leading-relaxed">{description}</div></motion.div>)}</div></div></section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24"><SectionCard title="LP Reporting & Governance"><BulletList items={governance} /></SectionCard><SectionCard title="Risk Management Lens"><BulletList items={risks} /><p className="text-[12px] sm:text-[13px] text-muted-foreground/50 font-light leading-relaxed mt-8">Risk controls are implemented through memos, review process, professional guidance, clear documentation, allocation policies, and staged execution. No risk control eliminates venture risk.</p></SectionCard></section>

        <section className="mb-16 sm:mb-20 lg:mb-24 rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"><div className="lg:col-span-5"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Custom mandate</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4">What can be customized</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">For larger LPs, the mandate can be designed around a specific thesis, geography, approval model, reporting depth, and future structure.</p></div><div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">{custom.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div></div></section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"><div className="lg:col-span-7"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Ready to review the LP memo?</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">The best next step is a short fit call and LP memo request. After that we can define the portfolio setup mandate, data-room access, and first scouting sprint.</p></div><div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3"><PillButton to="/contact?interest=lp-materials" variant="primary">Request LP memo</PillButton><PillButton to="/contact?interest=lp-portfolio-setup" variant="secondary">Start portfolio setup</PillButton></div></div></section>
      </div>
    </div>
  );
}
