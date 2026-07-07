import { motion } from "motion/react";
import { Link } from "react-router";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

export function Fund() {
  const offers = [
    [
      "Venture Office as a Service",
      "Available now",
      "For LPs and family offices that want to start with process, visibility, and control.",
      "Thesis design, pipeline setup, founder intake, diligence workflow, memo templates, reporting workspace, and weekly operating rhythm.",
      "Service / advisory mandate",
      ["LP-first process", "No rushed vehicle", "Concrete outputs"],
    ],
    [
      "Startup Scouting Sprint",
      "4–8 weeks",
      "For LPs, CVCs, and strategic buyers that need a qualified founder pipeline.",
      "Sourcing lanes, longlist, founder interviews, scoring, shortlist, red flags, and next-step recommendations.",
      "Scouting service",
      ["Founder access", "Shortlist", "Fit scoring"],
    ],
    [
      "Due Diligence as a Service",
      "Per opportunity",
      "For serious opportunities that require structured review before any decision.",
      "Data-room review, founder references, market notes, risk map, memo, IC package, and recommendation.",
      "Deal-level diligence",
      ["Risk map", "Memo", "IC-ready"],
    ],
    [
      "Fund Formation Readiness",
      "Counsel-led stage",
      "For LPs and sponsors preparing a future fund, SPV, CVC, club-deal, or mono-LP structure.",
      "Structure options, operating model, LP data room, onboarding map, reporting logic, and counsel coordination.",
      "Readiness workstream",
      ["Data room", "Governance", "Reporting"],
    ],
  ];

  const thesis = [
    ["Technical founder flow", "We focus on founders from under-commercialized technical ecosystems who need global packaging and market-entry support."],
    ["Cross-border commercialization", "We prepare companies for MENA, US, and EU conversations with strategic partners, accelerators, and co-investors."],
    ["AI-enabled venture operations", "Our Fund OS supports sourcing, scoring, memo workflows, IC materials, portfolio monitoring, and reporting."],
  ];

  const stack = [
    ["Service layer", "Venture office, startup scouting, due diligence, reporting, and setup mandates that can be delivered before a formal vehicle exists"],
    ["Structure layer", "SPV, CVC, club-deal, fund, or mono-LP options considered only after professional legal, tax, and jurisdiction review"],
    ["Operating layer", "Founder intake, pipeline dashboard, scoring, data-room discipline, memo archive, and portfolio monitoring"],
    ["Governance layer", "LP review, IC materials, conflict notes, allocation logic, and reporting cadence"],
  ];

  return <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12"><div className="max-w-[1200px] mx-auto">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24"><div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden"><DiagonalShards /><div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12"><div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/60" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Setup options</span></div><h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">Start with services. Formalize the structure later.</h1><p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">Before a classic fund, CVC, SPV, club-deal, or mono-LP vehicle is formed, maksat.PRO can deliver the operating work: thesis, scouting, diligence, memo preparation, reporting, data room, and governance setup.</p><div className="flex flex-wrap items-center gap-3 sm:gap-4"><PillButton to="/contact?interest=lp-portfolio-setup" variant="primary" className="w-full sm:w-auto justify-center">Start portfolio setup</PillButton><PillButton to="/contact?interest=lp-materials" variant="secondary" className="w-full sm:w-auto justify-center">Request LP memo</PillButton><Link to="/lps" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">See LP journey →</Link></div></div></div></motion.div>

    <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-4">Commercial services we can deliver now</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/60 font-light leading-relaxed max-w-3xl mb-8 sm:mb-12">These are operating and advisory workstreams. Final vehicle economics, documents, eligibility, and timing are decided separately with professional counsel.</p><div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">{offers.map(([title,timing,audience,scope,commercial,bestFor], index) => <motion.div key={title as string} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500"><div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6"><div><div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-3">{timing as string}</div><h3 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/92 leading-tight">{title as string}</h3></div><div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-muted-foreground/60 font-light whitespace-nowrap">Option {String(index + 1).padStart(2, "0")}</div></div><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">{audience as string}</p><div className="space-y-4 mb-6">{[["Scope", scope], ["Commercial form", commercial]].map(([label, value]) => <div key={label as string}><div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">{label as string}</div><p className="text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">{value as string}</p></div>)}</div><div className="flex flex-wrap gap-2">{(bestFor as string[]).map((item) => <span key={item} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[11px] sm:text-[12px] text-muted-foreground/60 font-light">{item}</span>)}</div></motion.div>)}</div></section>

    <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-4">Investment Thesis</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">{thesis.map(([title, description], index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"><div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">Thesis {String(index + 1).padStart(2, "0")}</div><h3 className="text-[20px] sm:text-[22px] font-light tracking-tight text-foreground/90 mb-3">{title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{description}</p></motion.div>)}</div></section>
    <section className="mb-16 sm:mb-20 lg:mb-24"><h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">Platform Stack</h2><div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] overflow-hidden"><div className="divide-y divide-white/[0.04]">{stack.map(([label, value], index) => <motion.div key={label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 p-5 sm:p-6"><div className="text-[12px] sm:text-[13px] text-muted-foreground/50 font-light uppercase tracking-wider">{label}</div><div className="md:col-span-2 text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">{value}</div></motion.div>)}</div></div></section>
    <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"><div className="lg:col-span-7"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">The first conversion is a memo request.</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">A qualified LP should leave this page understanding the next step: request the LP memo, review the process, and define the scope of a venture office or setup mandate.</p></div><div className="lg:col-span-5 flex lg:justify-end"><PillButton to="/contact?interest=lp-materials" variant="primary">Request LP memo</PillButton></div></div></section>
  </div></div>;
}
