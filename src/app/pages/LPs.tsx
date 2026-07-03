import { Link } from "react-router";
import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

export function LPs() {
  const reasons = [
    {
      title: "Proprietary founder access",
      description:
        "We focus on technical founders from CIS and post-Soviet ecosystems who may have strong products, prior exits, or deep local traction, but need international packaging and trusted access.",
    },
    {
      title: "Prior-exit founders that need global packaging",
      description:
        "Some founders already built meaningful companies locally. We help them become understandable, diligence-ready, and credible for international capital and strategic partners.",
    },
    {
      title: "Bridge to MENA, US, and EU commercialization",
      description:
        "Our operating thesis is built around corridors where founders can find corporate buyers, family offices, accelerators, co-investors, and exit-relevant partners.",
    },
    {
      title: "AI-enabled Fund OS",
      description:
        "We use internal workflows to structure sourcing, scoring, due diligence, IC preparation, memo generation, portfolio monitoring, and LP reporting.",
    },
    {
      title: "Shared platform economics",
      description:
        "LPs benefit from a platform model where sourcing, diligence, reporting, and portfolio support are reused across CVCs, classic funds, DAO-style access, SPVs, and mono-LP mandates.",
    },
    {
      title: "Co-investment optionality",
      description:
        "Larger eligible LPs may receive curated co-investment opportunities alongside the platform, subject to capacity, allocation policy, conflicts review, and compliance approval.",
    },
    {
      title: "Compliance-first onboarding",
      description:
        "We apply KYC, AML, sanctions screening, source-of-funds review, data room discipline, and jurisdiction-specific counsel review before any formal capital process.",
    },
  ];

  const portfolioConstruction = [
    {
      product: "DAO Fund Access",
      targetSize: "$5M target",
      lpTicket: "$5K–$100K LP ticket",
      stage: "Early access / SPV-style",
      companies: "20–40 exposures",
      reserve: "Light reserves",
    },
    {
      product: "Classic VC Fund",
      targetSize: "$10M–$20M target",
      lpTicket: "$500K–$2M LP ticket",
      stage: "Seed–Series A",
      companies: "20–30 companies",
      reserve: "Follow-on reserve",
    },
    {
      product: "Custom CVC Program",
      targetSize: "From $2M",
      lpTicket: "Corporate mandate",
      stage: "Strategic pilots + investments",
      companies: "10–20 scouted / 3–7 invested",
      reserve: "Per mandate",
    },
    {
      product: "Dedicated Mono-LP Fund",
      targetSize: "From $10M",
      lpTicket: "Single LP",
      stage: "Custom mandate",
      companies: "Custom",
      reserve: "Custom",
    },
  ];

  const governance = [
    "Quarterly LP reports and portfolio updates",
    "Capital account statements",
    "Pipeline and portfolio dashboard",
    "IC memos archive",
    "Annual fund review and forward-looking reserve planning",
    "Conflict-of-interest policy",
    "LPAC / advisory committee mechanics for larger structures",
    "Co-investment allocation policy",
    "Data room with legal, tax, compliance, KYC, AML, and fund documents",
  ];

  const risks = [
    "Founder and execution risk",
    "Sanctions and source-of-funds risk",
    "Jurisdiction and cross-border structuring risk",
    "Follow-on financing and valuation risk",
    "Exit timing and liquidity risk",
    "Currency and cross-border transfer risk",
    "Concentration and allocation risk",
    "Conflicts between CVCs, the fund, DAO-style access, SPVs, and mono-LP vehicles",
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">
                  For LPs and strategic capital
                </span>
              </div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">
                Access a venture platform built for overlooked technical alpha
              </h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">
                We give LPs structured access to founders who need more than capital: international packaging, compliance discipline, market entry support, and credible bridges into MENA, US, and EU venture ecosystems.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <PillButton variant="primary" className="w-full sm:w-auto justify-center">
                  Request LP materials
                </PillButton>
                <Link to="/fund" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">
                  View product ladder →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            Why LPs Back Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"
              >
                <h3 className="text-[20px] sm:text-[23px] font-light tracking-tight text-foreground/90 mb-3">
                  {reason.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            Portfolio Construction Logic
          </h2>
          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] overflow-hidden">
            <div className="hidden xl:grid grid-cols-6 gap-4 px-6 py-4 border-b border-white/[0.05] text-[11px] text-muted-foreground/42 font-light uppercase tracking-wider">
              <div>Product</div>
              <div>Target size</div>
              <div>Ticket</div>
              <div>Stage</div>
              <div>Target companies</div>
              <div>Reserve logic</div>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {portfolioConstruction.map((row, index) => (
                <motion.div
                  key={row.product}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 p-5 sm:p-6"
                >
                  <div>
                    <div className="xl:hidden text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">Product</div>
                    <div className="text-[16px] sm:text-[18px] text-foreground/88 font-light">{row.product}</div>
                  </div>
                  <div><div className="xl:hidden text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">Target size</div><div className="text-[13px] text-muted-foreground/72 font-light">{row.targetSize}</div></div>
                  <div><div className="xl:hidden text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">Ticket</div><div className="text-[13px] text-muted-foreground/72 font-light">{row.lpTicket}</div></div>
                  <div><div className="xl:hidden text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">Stage</div><div className="text-[13px] text-muted-foreground/72 font-light">{row.stage}</div></div>
                  <div><div className="xl:hidden text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">Target companies</div><div className="text-[13px] text-muted-foreground/72 font-light">{row.companies}</div></div>
                  <div><div className="xl:hidden text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">Reserve logic</div><div className="text-[13px] text-muted-foreground/72 font-light">{row.reserve}</div></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24">
          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-8">
            <h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mb-6">
              LP Reporting & Governance
            </h2>
            <div className="space-y-3">
              {governance.map((item) => (
                <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-8">
            <h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mb-6">
              Risk Management Lens
            </h2>
            <div className="space-y-3 mb-8">
              {risks.map((item) => (
                <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[12px] sm:text-[13px] text-muted-foreground/50 font-light leading-relaxed">
              Risk controls are implemented through investment memos, IC process, legal review, source-of-funds checks, allocation policies, and staged deployment. No risk control eliminates investment risk.
            </p>
          </div>
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">
                Co-investment engine for selected LPs
              </h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">
                LPs may receive curated co-investment opportunities alongside the fund, subject to allocation policy, eligibility, available capacity, conflicts review, and compliance approval.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link to="/contact" className="text-[13px] text-foreground/82 hover:text-foreground transition-colors">
                Discuss LP fit →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
