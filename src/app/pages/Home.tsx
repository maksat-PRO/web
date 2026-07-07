import { PillButton } from "../components/PillButton";
import { ProofChip } from "../components/ProofChip";
import { DiagonalShards } from "../components/DiagonalShards";
import { DashboardPreview, ProgramTimeline, VentureOrbit } from "../components/DesignWidgets";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Home() {
  const audiencePaths = [
    {
      label: "For LPs & family offices",
      title: "Build venture exposure without building an internal VC team",
      description:
        "A controlled path from thesis to pipeline, diligence, reporting, and structure readiness for private venture portfolios.",
      link: "/lps",
      linkLabel: "Review LP path →",
    },
    {
      label: "For corporate groups",
      title: "Launch a CVC function tied to future business lines",
      description:
        "A 90-day operating sprint for strategic thesis, governance, startup scouting, pilot logic, first IC materials, and board reporting.",
      link: "/cvc",
      linkLabel: "Build CVC →",
    },
    {
      label: "For founders",
      title: "Become globally investable before asking for capital",
      description:
        "Founder readiness, data room, narrative, market-entry logic, diligence preparation, and curated access to relevant capital and pilots.",
      link: "/founders",
      linkLabel: "Founder readiness →",
    },
  ];

  const thesisAreas = [
    ["Human performance", "AI, data, training, recovery, diagnostics, and performance systems for athletes, teams, operators, and everyday high performers."],
    ["Sports & fan infrastructure", "Clubs, leagues, federations, facilities, fan engagement, analytics, media, participation, and operating software."],
    ["Wellness & longevity", "Preventive health, recovery, corporate wellness, healthy aging, diagnostics-adjacent tools, and habit-forming consumer platforms."],
    ["AI venture operations", "The internal Fund OS layer: sourcing, scoring, diligence, IC materials, data rooms, LP reporting, and portfolio monitoring."],
  ];

  const operatingStack = [
    ["01", "Mandate", "Define the LP, CVC, or founder objective, decision rights, risk limits, geography, thesis, and expected output."],
    ["02", "Evidence", "Run founder intake, scouting, interviews, scoring, red-flag review, and proof collection before any serious recommendation."],
    ["03", "Governance", "Prepare memos, data rooms, IC materials, conflict notes, allocation logic, reporting cadence, and counsel-ready structure maps."],
    ["04", "Access", "Use partner networks and warm processes only after readiness is clear. No paid-intro positioning and no fundraising guarantees."],
  ];

  const programs = [
    { title: "CVC Launch Sprint", duration: "90 days", outcome: "Mandate, thesis, governance, budget, startup warehouse, pilot logic, first IC package, and board materials." },
    { title: "LP Venture Office", duration: "30–45 days", outcome: "LP profile, portfolio thesis, reporting workspace, first sourcing lanes, and setup/advisory mandate." },
    { title: "Founder Readiness Sprint", duration: "4–6 weeks", outcome: "Diagnostic, data room, investor narrative, target map, diligence Q&A, and market-entry path." },
    { title: "Scouting & DD Sprint", duration: "4–8 weeks", outcome: "Longlist, founder calls, scoring, shortlist, risk notes, memo drafts, and next-step recommendations." },
    { title: "Fund / SPV Readiness", duration: "8–12 weeks", outcome: "Counsel coordination, structure options, LP materials, onboarding checklist, and reporting model." },
  ];

  const trustItems = [
    "No public securities offering or fundraising guarantee through the website",
    "Advisory/setup work is separated from future fund or SPV formation",
    "KYC/AML, sanctions, source-of-funds, and eligibility review before formal onboarding",
    "LP/CVC decisions are documented through memos, dashboards, IC logs, and reporting packs",
    "Partner access is used as a validation layer, not as a substitute for governance",
    "Development history is presented only as operating proof, not as the core service",
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[620px] opacity-25" style={{ background: "radial-gradient(circle at 50% 0%, rgba(125, 178, 255, 0.18) 0%, transparent 70%)" }} />
        </div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative max-w-[1200px] w-full">
          <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-gradient-to-br from-[#1a1d26]/80 via-[#12141a]/90 to-[#1a1d26]/80 border border-white/[0.06] backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <DiagonalShards />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                  <span className="text-[12px] sm:text-[13px] text-muted-foreground/70 font-light uppercase tracking-wider">
                    Venture platform for LPs, CVCs, and global founders
                  </span>
                </div>

                <h1 className="text-[34px] sm:text-[44px] lg:text-[58px] leading-[1.06] tracking-[-0.045em] mb-5 sm:mb-6">
                  <span className="text-foreground/95 font-light block">
                    CVC programs and specialized venture portfolios in sports, wellness, longevity, and human performance.
                  </span>
                </h1>

                <p className="text-[14px] sm:text-[16px] text-muted-foreground/72 font-light tracking-tight mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                  maksat.PRO builds the operating layer between strategic capital, high-potential founders, and Silicon Valley venture access: thesis design, AI-enabled scouting, founder readiness, diligence, governance, data rooms, and reporting.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
                  <PillButton to="/cvc" variant="primary" icon={<div className="w-2 h-2 rounded-full bg-foreground/60" />} className="w-full sm:w-auto justify-center">
                    Build a CVC program
                  </PillButton>
                  <PillButton to="/lps" variant="secondary" className="w-full sm:w-auto justify-center">
                    Review LP path
                  </PillButton>
                  <Link to="/trust-center" className="text-[13px] text-muted-foreground/65 hover:text-foreground/90 transition-colors">
                    Review trust model →
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <ProofChip>CVC launch</ProofChip>
                  <ProofChip>LP venture office</ProofChip>
                  <ProofChip>Founder readiness</ProofChip>
                  <ProofChip>AI Fund OS</ProofChip>
                </div>
              </div>

              <div className="lg:col-span-5">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-3 mb-8 sm:mb-12">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Who we serve</span>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">
            One platform, three clear entry points.
          </h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">
            LPs, corporate groups, and founders each enter through a specific process, while every path shares the same discipline: evidence, governance, reporting, and structured access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {audiencePaths.map((path, index) => (
            <motion.div key={path.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <Link to={path.link} className="group block h-full">
                <div className="h-full rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/55 via-[#12141a]/65 to-[#1a1d26]/55 border border-white/[0.06] p-7 sm:p-8 hover:border-white/[0.12] transition-all duration-500">
                  <div className="text-[11px] text-muted-foreground/45 font-light uppercase tracking-wider mb-4">{path.label}</div>
                  <h3 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/92 mb-4 leading-tight">{path.title}</h3>
                  <p className="text-[13px] sm:text-[14px] text-muted-foreground/65 font-light leading-relaxed mb-8">{path.description}</p>
                  <div className="text-[13px] text-muted-foreground/50 font-light group-hover:text-muted-foreground/75 transition-colors">{path.linkLabel}</div>
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
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Positioning</span>
              <h2 className="text-[28px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4 leading-tight">
                Not just a fund. A venture operating layer.
              </h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">
                A new fund without exits is hard to trust. A disciplined platform with clear work products, partner access, founder readiness, and CVC execution is easier to evaluate before capital is committed.
              </p>
            </div>
            <div className="lg:col-span-7">
              <VentureOrbit />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col gap-3 mb-8 sm:mb-12">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Investment thesis</span>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">
            A focused thesis where sport becomes health, data, and performance infrastructure.
          </h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">
            We use sport as an entry point into broader human-performance markets: wellness, longevity, recovery, participation, analytics, infrastructure, and AI-enabled operating systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {thesisAreas.map(([title, description], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8">
              <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">Thesis {String(index + 1).padStart(2, "0")}</div>
              <h3 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/92 mb-3">{title}</h3>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-[30px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Operating model</span>
              <h2 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mt-3 mb-3">
                The process creates trust before the vehicle.
              </h2>
              <p className="text-[14px] text-muted-foreground/60 font-light max-w-2xl leading-relaxed">
                Each mandate starts as a defined working process. Fund, SPV, mono-LP, or CVC structures come only when the thesis, governance, and professional review are ready.
              </p>
            </div>
            <Link to="/platform" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">
              See Fund OS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {operatingStack.map(([step, title, description]) => (
              <div key={title} className="rounded-[20px] bg-white/[0.025] border border-white/[0.05] p-5">
                <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-3">{step}</div>
                <h3 className="text-[19px] font-light tracking-tight text-foreground/90 mb-3">{title}</h3>
                <p className="text-[13px] text-muted-foreground/65 font-light leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-[30px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Programs</span>
              <h2 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mt-3 mb-3">What can be sold and delivered now.</h2>
              <p className="text-[14px] text-muted-foreground/60 font-light max-w-2xl leading-relaxed">
                These are advisory, setup, scouting, diligence, and platform workstreams. They generate concrete work products before any management fee from a formal portfolio exists.
              </p>
            </div>
            <Link to="/fund" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors">
              Review thesis & vehicles →
            </Link>
          </div>
          <ProgramTimeline items={programs} />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Trust before pitch</span>
              <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4">
                Clear boundaries make the platform credible.
              </h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">
                The platform is designed to make boundaries clear: we do not sell introductions, do not promise fundraising outcomes, and use technology history as operating proof rather than the core offer.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {trustItems.map((item) => (
                <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8 mb-16">
        <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light text-center leading-relaxed">
          Information on this website is provided for general informational purposes only and does not constitute investment, legal, tax, or other professional advice. Any fund, SPV, CVC, club-deal, community-style, or mono-LP structure is subject to legal, tax, compliance, sanctions, KYC/AML, and jurisdiction-specific review. No offer to sell securities or solicitation to buy securities is made through this website. Final terms are set only in duly executed agreements and offering documents.
        </p>
      </section>
    </div>
  );
}
