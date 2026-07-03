import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

export function Fund() {
  const offers = [
    {
      title: "DAO Fund Access",
      ticket: "$5,000–$100,000",
      audience: "For smaller LPs who want early access to our shared venture pipeline without creating a dedicated vehicle.",
      structure: "Pooled DAO-style fund access through a managed community investment wrapper and standardized onboarding.",
      setupFee: "2% of subscribed capital, minimum $250, capped at $2,000",
      managementFee: "3% p.a. on committed or subscribed capital, subject to final documents",
      bestFor: ["Smaller tickets", "Community access", "Learning-by-participation", "Deal-flow exposure"],
    },
    {
      title: "Custom CVC Program",
      ticket: "From $2,000,000",
      audience: "For corporate groups that want their own venture arm, startup scouting engine, IC process, and strategic portfolio.",
      structure: "Dedicated CVC mandate, available in Russia/CIS and selected markets; for Russia/CIS the legal wrapper may be structured as a trust investment partnership or equivalent counsel-approved vehicle.",
      setupFee: "$100,000–$150,000 for launch architecture, legal coordination, operating model, data room, and first pipeline sprint",
      managementFee: "3% p.a. of program capital, with a $15,000/month operating minimum",
      bestFor: ["Strategic innovation", "Corporate M&A pipeline", "Sector scouting", "Board-level reporting"],
    },
    {
      title: "Classic VC Fund Access",
      ticket: "$500,000–$2,000,000",
      audience: "For LPs who want exposure to a classic venture fund with institutional documentation and portfolio construction.",
      structure: "BVI fund vehicle with Delaware management company / GP platform, subject to final counsel, admin, and banking onboarding.",
      setupFee: "1% of commitment, minimum $5,000, capped at $20,000",
      managementFee: "2% p.a. during the investment period, with step-down mechanics defined in the fund documents",
      bestFor: ["Classic LP participation", "Diversified venture exposure", "Quarterly reporting", "Co-investment optionality"],
    },
    {
      title: "Dedicated Mono-LP Fund",
      ticket: "From $10,000,000",
      audience: "For a family office, corporate group, or strategic investor that wants a bespoke fund built around its own mandate.",
      structure: "Dedicated BVI mono-LP fund with Delaware management company / GP platform, custom mandate, reporting, and governance package.",
      setupFee: "From $200,000 for vehicle formation, fund documents, onboarding, operating model, and launch coordination",
      managementFee: "2% p.a., with a $200,000/year minimum management fee",
      bestFor: ["Full mandate control", "Custom geography/thesis", "Priority allocation", "Dedicated reporting"],
    },
  ];

  const thesisPoints = [
    {
      title: "CIS technical talent, global packaging",
      description:
        "We source from under-commercialized technical ecosystems and help founders become investable for international capital and partners.",
    },
    {
      title: "MENA, US, and EU commercialization corridors",
      description:
        "We focus on markets where corporate buyers, family offices, accelerators, and strategic capital can accelerate adoption.",
    },
    {
      title: "AI-enabled venture operations",
      description:
        "Our Fund OS supports sourcing, scoring, memo generation, IC workflows, portfolio monitoring, and LP reporting.",
    },
  ];

  const fundStack = [
    { label: "Management layer", value: "maksat.PRO venture platform and Delaware management company stack" },
    { label: "Fund layer", value: "BVI, CVC, DAO-style, SPV, or mono-LP structures depending on ticket and mandate" },
    { label: "Operating layer", value: "Sourcing, due diligence, legal coordination, reporting, and portfolio support" },
    { label: "Compliance layer", value: "KYC/AML, sanctions screening, data room discipline, and jurisdiction-specific counsel review" },
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
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">
                  Capital products
                </span>
              </div>

              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">
                Four entry points into the maksat.PRO venture platform
              </h1>

              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">
                We structure access by capital size and governance need: small-ticket pooled access, custom CVC mandates, classic venture fund participation, and bespoke mono-LP vehicles.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <PillButton variant="primary" className="w-full sm:w-auto justify-center">
                  Discuss allocation
                </PillButton>
                <PillButton variant="secondary" className="w-full sm:w-auto justify-center">
                  Request LP materials
                </PillButton>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-4">
            LP Product Ladder
          </h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/60 font-light leading-relaxed max-w-3xl mb-8 sm:mb-12">
            The numbers below are indicative commercial terms for discussion. Final economics, legal wrappers, eligibility, and timing depend on counsel, administrator, banking, tax, KYC/AML, and jurisdiction-specific review.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-3">
                      {offer.ticket}
                    </div>
                    <h3 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/92 leading-tight">
                      {offer.title}
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-muted-foreground/60 font-light whitespace-nowrap">
                    Offer {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">
                  {offer.audience}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">
                      Structure
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">
                      {offer.structure}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">
                      Setup fee
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">
                      {offer.setupFee}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">
                      Management fee
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">
                      {offer.managementFee}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {offer.bestFor.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[11px] sm:text-[12px] text-muted-foreground/60 font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-4">
            Investment Thesis
          </h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/60 font-light leading-relaxed max-w-3xl mb-8 sm:mb-12">
            We combine access to overlooked technical founder ecosystems with international capital formation, corporate demand, and a repeatable operating system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {thesisPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8"
              >
                <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">
                  Thesis {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-light tracking-tight text-foreground/90 mb-3">
                  {point.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            Platform Stack
          </h2>

          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] overflow-hidden">
            <div className="divide-y divide-white/[0.04]">
              {fundStack.map((row, index) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 p-5 sm:p-6"
                >
                  <div className="text-[12px] sm:text-[13px] text-muted-foreground/50 font-light uppercase tracking-wider">
                    {row.label}
                  </div>
                  <div className="md:col-span-2 text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">
                    {row.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            What We Look For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-[22px] sm:rounded-[24px] bg-white/[0.02] border border-white/[0.04] p-6 sm:p-8">
              <h3 className="text-[18px] sm:text-[20px] font-light tracking-tight text-foreground/85 mb-6">
                Founder Profile
              </h3>
              <div className="space-y-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                <p>• Technical founders with real domain expertise and global ambition</p>
                <p>• Teams from CIS or adjacent ecosystems that need international packaging</p>
                <p>• Evidence of product demand: revenue, pilots, LOIs, or strategic pull</p>
                <p>• Willingness to operate in compliance-first and investor-ready mode</p>
              </div>
            </div>

            <div className="rounded-[22px] sm:rounded-[24px] bg-white/[0.02] border border-white/[0.04] p-6 sm:p-8">
              <h3 className="text-[18px] sm:text-[20px] font-light tracking-tight text-foreground/85 mb-6">
                Capital Fit
              </h3>
              <div className="space-y-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                <p>• Strategic CVC mandates with clear corporate demand</p>
                <p>• LPs seeking structured access rather than one-off angel deals</p>
                <p>• Co-investors and accelerators that can help de-risk expansion</p>
                <p>• Family offices and corporates comfortable with staged deployment</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light leading-relaxed max-w-3xl mx-auto">
            Investment, setup, and management fee terms are indicative and non-binding. This page is not an offer to sell securities, a solicitation to buy securities, or legal, tax, or investment advice. Any investment opportunity is subject to final fund documents, investor eligibility, jurisdictional restrictions, KYC/AML, sanctions screening, and professional review.
          </p>
        </div>
      </div>
    </div>
  );
}
