import { motion } from "motion/react";
import { Link } from "react-router";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

export function Fund() {
  const thesis = [
    ["Sports as infrastructure", "We look beyond apps: clubs, leagues, federations, facilities, media, fan engagement, analytics, participation, and operating systems."],
    ["Wellness and longevity", "Recovery, diagnostics-adjacent products, preventive health, habit systems, corporate wellness, healthy aging, and measurable consumer outcomes."],
    ["Human performance", "Training intelligence, coaching tools, rehabilitation, athlete development, neuro-performance, sleep, nutrition, and data-driven improvement."],
    ["AI-native venture operations", "The platform layer that makes sourcing, scoring, diligence, IC preparation, LP reporting, and portfolio monitoring repeatable."],
  ];

  const vehicles = [
    [
      "LP Venture Office",
      "Available now",
      "A service/advisory mandate for one LP or family office before any long-term vehicle is selected.",
      "Thesis, pipeline, diligence process, reporting workspace, memo archive, and structure-readiness plan.",
    ],
    [
      "CVC Program",
      "Available now",
      "A corporate venture function for groups that need future-business scouting, pilots, governance, and board reporting.",
      "90-day launch sprint, startup warehouse, pilot workflow, IC materials, budget model, and strategic KPI dashboard.",
    ],
    [
      "Club Deal / SPV Readiness",
      "Deal-by-deal",
      "A controlled path for reviewing specific opportunities before a legal wrapper is formed by counsel.",
      "Deal memo, risk map, data-room review, allocation logic, co-investor notes, and reporting template.",
    ],
    [
      "Classic Fund Readiness",
      "Counsel-led",
      "Preparation for a future specialized fund once thesis, LP demand, partners, governance, and economics are ready.",
      "Fund model, LP materials, onboarding map, data room, operating budget, reporting model, and counsel coordination.",
    ],
  ];

  const commercialServices = [
    ["CVC Launch Sprint", "90 days", "Mandate, governance, budget, thesis, startup warehouse, pilot logic, and first IC package."],
    ["Startup Scouting Sprint", "4–8 weeks", "Sourcing lanes, longlist, founder outreach, interviews, scoring, shortlist, red flags, and next-step recommendations."],
    ["Due Diligence as a Service", "Per opportunity", "Data-room review, founder references, market notes, technical review, risk map, memo, and IC-ready recommendation."],
    ["Founder Readiness Sprint", "4–6 weeks", "Narrative, deck logic, data room, investor Q&A, market-entry path, target investor map, and diligence cleanup."],
    ["Fund Formation Readiness", "8–12 weeks", "Structure options, LP data room, operating model, reporting logic, onboarding checklist, and counsel coordination."],
    ["Venture Office as a Service", "Monthly", "Pipeline operations, memo workflow, LP reporting, founder tracking, portfolio monitoring, and platform rhythm."],
  ];

  const boundaries = [
    "The website does not make a public securities offering.",
    "We do not guarantee investment, fundraising, introductions, returns, exits, or valuation outcomes.",
    "Formal fund, SPV, CVC, or mono-LP structures require legal, tax, sanctions, KYC/AML, and jurisdiction-specific review.",
    "Partner access is used after readiness and fit review; it is not sold as a standalone introduction product.",
    "Technology delivery experience is a proof layer, not the main commercial positioning.",
    "Community-style or pooled access is handled only through controlled materials and jurisdiction-specific review.",
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Thesis & vehicles</span>
              </div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">
                Specialized venture portfolios start with a thesis, not with a wrapper.
              </h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">
                maksat.PRO builds the operating path toward CVC programs, LP venture offices, SPVs, club deals, and future funds in sports, wellness, longevity, and human performance. The structure follows the mandate, evidence, and professional review.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <PillButton to="/contact?interest=lp-materials" variant="primary" className="w-full sm:w-auto justify-center">Request LP memo</PillButton>
                <PillButton to="/cvc" variant="secondary" className="w-full sm:w-auto justify-center">Review CVC path</PillButton>
                <Link to="/trust-center" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">Trust model →</Link>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Investment thesis</span>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light tracking-tight text-foreground/90 mt-3 mb-4 max-w-3xl">
            A focused thesis for the future of sport, wellness, and measurable performance.
          </h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/62 font-light leading-relaxed max-w-3xl mb-8 sm:mb-12">
            This thesis is broad enough to capture large markets, but narrow enough to give LPs, CVCs, founders, and co-investors a clear reason to engage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {thesis.map(([title, description], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8">
                <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">Area {String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/92 mb-3">{title}</h3>
                <p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Vehicle ladder</span>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light tracking-tight text-foreground/90 mt-3 mb-4 max-w-3xl">
            Four vehicle paths, one operating standard.
          </h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/62 font-light leading-relaxed max-w-3xl mb-8 sm:mb-12">
            The ladder makes it clear which services can be delivered now and which structures require counsel, governance, and formal documentation.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {vehicles.map(([title, stage, audience, scope], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-3">{stage}</div>
                    <h3 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/92 leading-tight">{title}</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-muted-foreground/60 font-light whitespace-nowrap">
                    Path {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">{audience}</p>
                <div>
                  <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">Core work</div>
                  <p className="text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">{scope}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Commercial services</span>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light tracking-tight text-foreground/90 mt-3 mb-8 sm:mb-12">
            Services that can be sold before management fees exist.
          </h2>
          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] overflow-hidden">
            <div className="divide-y divide-white/[0.04]">
              {commercialServices.map(([title, duration, outcome], index) => (
                <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="grid grid-cols-1 md:grid-cols-[220px_140px_1fr] gap-3 md:gap-8 p-5 sm:p-6">
                  <div className="text-[16px] sm:text-[18px] text-foreground/88 font-light">{title}</div>
                  <div className="text-[12px] text-muted-foreground/48 font-light uppercase tracking-wider">{duration}</div>
                  <div className="text-[13px] sm:text-[14px] text-muted-foreground/72 font-light leading-relaxed">{outcome}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24 rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Boundaries</span>
              <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4">
                Strong positioning also says what we do not do.
              </h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">
                This prevents the market from reading the platform as a broker, a public offering, or a software development vendor.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {boundaries.map((item) => (
                <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">The first conversion is a qualified memo request.</h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">
                A serious LP or corporate group can review the thesis, the vehicle ladder, the service products, and the compliance boundaries before any call.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
              <PillButton to="/contact?interest=lp-materials" variant="primary">Request LP memo</PillButton>
              <PillButton to="/contact?interest=cvc" variant="secondary">Discuss CVC</PillButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
