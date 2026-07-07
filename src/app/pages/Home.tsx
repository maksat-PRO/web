import { PillButton } from "../components/PillButton";
import { ProofChip } from "../components/ProofChip";
import { DiagonalShards } from "../components/DiagonalShards";
import { DashboardPreview, ProgramTimeline, VentureOrbit } from "../components/DesignWidgets";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Home() {
  const platformPillars = [
    {
      label: "For LPs",
      title: "Private venture portfolio setup",
      description: "A staged mandate to define the thesis, build a pipeline, run diligence, prepare IC materials, and set up reporting before any formal fund or SPV commitment.",
      link: "/lps",
      linkLabel: "Follow the LP path →",
    },
    {
      label: "For corporates",
      title: "CVC launch sprint",
      description: "A practical launch path for groups that need startup scouting, pilot logic, governance, budget, IC process, and board-level reporting.",
      link: "/cvc",
      linkLabel: "Launch CVC →",
    },
    {
      label: "For founders",
      title: "Investor-readiness pipeline",
      description: "We package selected founders for international diligence: narrative, data room, compliance readiness, market-entry logic, and partner introductions.",
      link: "/founders",
      linkLabel: "Founder readiness →",
    },
  ];

  const programs = [
    { title: "LP Portfolio Setup", duration: "30–45 days", outcome: "LP profile, thesis, governance choices, service/advisory mandate, reporting workspace, and pipeline criteria." },
    { title: "Startup Scouting Sprint", duration: "4–8 weeks", outcome: "Longlist, founder intake, scoring, shortlist, first conversations, red flags, and fit notes for the LP thesis." },
    { title: "Due Diligence as a Service", duration: "Per deal", outcome: "Investment memo, data-room review, risk map, founder references, market notes, and IC-ready recommendation." },
    { title: "CVC Launch Sprint", duration: "90 days", outcome: "Mandate, governance, budget, strategic thesis, first scouting sprint, pilot logic, and board materials." },
    { title: "Fund Formation Readiness", duration: "8–12 weeks", outcome: "Counsel coordination, structure options, LP onboarding materials, reporting model, and data-room preparation." },
  ];

  const lpOffers = [
    { title: "Individual LP Venture Office", ticket: "Advisory / setup mandate", structure: "A dedicated workstream for one LP or family office.", link: "/lps" },
    { title: "Club Deal / SPV Readiness", ticket: "Deal-by-deal logic", structure: "Pipeline, diligence, memo, allocation, and reporting support.", link: "/lps" },
    { title: "CVC Launch", ticket: "Corporate mandate", structure: "Strategic scouting, pilots, IC process, and board reporting.", link: "/cvc" },
    { title: "Classic Fund Readiness", ticket: "Subject to counsel", structure: "Preparation for future fund, LP materials, and operating model.", link: "/fund" },
  ];

  const trustItems = [
    "No public securities offering through the website",
    "Service/advisory work before formal fund formation",
    "KYC/AML and source-of-funds review before onboarding",
    "LP approval, IC memos, and reporting workspace by design",
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20" style={{ background: "radial-gradient(circle at 50% 0%, rgba(88, 91, 112, 0.15) 0%, transparent 70%)" }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative max-w-[1200px] w-full">
          <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-gradient-to-br from-[#1a1d26]/80 via-[#12141a]/90 to-[#1a1d26]/80 border border-white/[0.06] backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <DiagonalShards />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                  <span className="text-[12px] sm:text-[13px] text-muted-foreground/70 font-light uppercase tracking-wider">Venture office for LPs, family offices, and corporate groups</span>
                </div>
                <h1 className="text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.12] tracking-[-0.03em] mb-5 sm:mb-6">
                  <span className="text-foreground/95 font-light block">maksat.PRO turns venture interest into</span>
                  <span className="text-foreground/95 font-light block">an executable portfolio mandate</span>
                </h1>
                <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light tracking-tight mb-8 sm:mb-10 leading-relaxed max-w-2xl">For corporations, family offices, and LPs: thesis design, startup scouting, due diligence, IC materials, data room, reporting — and a legally reviewed path toward SPVs, CVC programs, or a future fund</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
                  <PillButton to="/lps" variant="primary" icon={<div className="w-2 h-2 rounded-full bg-foreground/60" />} className="w-full sm:w-auto justify-center">Build LP portfolio</PillButton>
                  <PillButton to="/contact?interest=lp-materials" variant="secondary" className="w-full sm:w-auto justify-center">Request LP memo</PillButton>
                  <Link to="/trust-center" className="text-[13px] text-muted-foreground/65 hover:text-foreground/90 transition-colors">Review trust model →</Link>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <ProofChip>LP portfolio setup</ProofChip><ProofChip>Scouting + DD</ProofChip><ProofChip>Reporting workspace</ProofChip><ProofChip>Counsel-ready process</ProofChip>
                </div>
              </div>
              <div className="lg:col-span-5"><DashboardPreview /></div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-3 mb-8 sm:mb-12">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">LP operating path</span>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">A clear path from thesis to portfolio.</h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">Capital partners move through a defined working process: align the mandate, test deal flow, review diligence, approve next steps, and formalize the correct legal wrapper when the structure is ready.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {platformPillars.map((pillar, index) => (
            <motion.div key={pillar.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Link to={pillar.link} className="group block h-full">
                <div className="h-full rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/55 via-[#12141a]/65 to-[#1a1d26]/55 border border-white/[0.06] p-7 sm:p-8 hover:border-white/[0.12] transition-all duration-500">
                  <div className="text-[11px] text-muted-foreground/45 font-light uppercase tracking-wider mb-4">{pillar.label}</div>
                  <h3 className="text-[26px] sm:text-[30px] font-light tracking-tight text-foreground/92 mb-4 leading-tight">{pillar.title}</h3>
                  <p className="text-[13px] sm:text-[14px] text-muted-foreground/65 font-light leading-relaxed mb-8">{pillar.description}</p>
                  <div className="text-[13px] text-muted-foreground/50 font-light group-hover:text-muted-foreground/75 transition-colors">{pillar.linkLabel}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-[30px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">LP journey</span>
              <h2 className="text-[28px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4 leading-tight">Every LP conversation should lead to a clear next document.</h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">The process builds toward a portfolio setup mandate, data-room access, a defined thesis, and deal-flow evidence.</p>
            </div>
            <div className="lg:col-span-7"><VentureOrbit /></div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-[30px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Commercial services before fund formation</span>
              <h2 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mt-3 mb-3">What we can sell and deliver now.</h2>
              <p className="text-[14px] text-muted-foreground/60 font-light max-w-2xl leading-relaxed">Before a permanent vehicle is formed, maksat.PRO can work through advisory, venture office, scouting, due diligence, reporting, and setup mandates.</p>
            </div>
            <Link to="/lps" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">View LP path →</Link>
          </div>
          <ProgramTimeline items={programs} />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <h3 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mb-3">Four ways to start</h3>
              <p className="text-[14px] text-muted-foreground/60 font-light max-w-2xl leading-relaxed">The first paid step is a focused working mandate. Each entry point can later connect to an SPV, CVC, fund, or mono-LP vehicle after legal review.</p>
            </div>
            <Link to="/fund" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">See setup options →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {lpOffers.map((offer) => (
              <Link key={offer.title} to={offer.link} className="group">
                <div className="h-full p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                  <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-3">{offer.ticket}</div>
                  <h4 className="text-[17px] font-light text-foreground/88 mb-3 group-hover:text-foreground/95 transition-colors">{offer.title}</h4>
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light leading-relaxed">{offer.structure}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Trust before pitch</span>
              <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4">Designed for LP control and clarity.</h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">The first conversion is an LP memo request: review the process, discuss fit, and define the mandate.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {trustItems.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8 mb-16">
        <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light text-center leading-relaxed">Information on this website is provided for general informational purposes only and does not constitute investment, legal, tax, or other professional advice. Any fund, SPV, CVC, DAO-style, club-deal, or mono-LP structure is subject to legal, tax, compliance, sanctions, KYC/AML, and jurisdiction-specific review. No offer to sell securities or solicitation to buy securities is made through this website. Final terms are set only in duly executed agreements and offering documents.</p>
      </section>
    </div>
  );
}
