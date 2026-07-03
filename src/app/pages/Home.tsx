import { PillButton } from "../components/PillButton";
import { ProofChip } from "../components/ProofChip";
import { DiagonalShards } from "../components/DiagonalShards";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Home() {
  const platformPillars = [
    {
      label: "For corporates",
      title: "CVC programs",
      description:
        "We design and operate corporate venture programs that turn strategic priorities into a managed startup pipeline, investment process, and governance rhythm.",
      link: "/advisory",
      linkLabel: "Build a CVC program →",
    },
    {
      label: "For LPs",
      title: "Fund access",
      description:
        "We offer a ladder of structures from DAO-style access to classic BVI funds and dedicated mono-LP vehicles managed through our Delaware platform.",
      link: "/fund",
      linkLabel: "View LP offers →",
    },
    {
      label: "For founders",
      title: "Global venture bridge",
      description:
        "We help technical founders from CIS and adjacent ecosystems package, de-risk, and enter MENA, US, and EU venture corridors.",
      link: "/cases",
      linkLabel: "See focus areas →",
    },
  ];

  const operatingModel = [
    "AI-enabled sourcing and founder intelligence",
    "Stage-gated due diligence and investment memos",
    "CVC, fund, and SPV operating workflows",
    "Compliance-aware data room and reporting discipline",
  ];

  const lpOffers = [
    {
      title: "DAO Fund Access",
      ticket: "$5K–$100K",
      structure: "Pooled access for smaller LPs",
    },
    {
      title: "Custom CVC Program",
      ticket: "From $2M",
      structure: "Corporate venture mandate for Russia/CIS and selected markets",
    },
    {
      title: "Classic VC Fund",
      ticket: "$500K–$2M",
      structure: "BVI fund with Delaware management company",
    },
    {
      title: "Dedicated Mono-LP Fund",
      ticket: "From $10M",
      structure: "Bespoke BVI fund for a single strategic LP",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(88, 91, 112, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-[1200px] w-full"
        >
          <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-gradient-to-br from-[#1a1d26]/80 via-[#12141a]/90 to-[#1a1d26]/80 border border-white/[0.06] backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <DiagonalShards />

            <div className="relative px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
              <div className="max-w-[820px]">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                  <span className="text-[12px] sm:text-[13px] text-muted-foreground/70 font-light uppercase tracking-wider">
                    Venture platform for CVCs, funds, and founders
                  </span>
                </div>

                <h1 className="text-[36px] sm:text-[44px] lg:text-[58px] leading-[1.08] tracking-[-0.03em] mb-5 sm:mb-6">
                  <span className="text-foreground/95 font-light block">
                    We build venture portfolios
                  </span>
                  <span className="text-foreground/95 font-light block">
                    around global deal flow,
                  </span>
                  <span className="text-foreground/95 font-light block">
                    AI operations, and disciplined capital
                  </span>
                </h1>

                <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light tracking-tight mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                  maksat.PRO is a venture management platform connecting LP capital, corporate venture mandates, and high-conviction founders from CIS and adjacent technical ecosystems to MENA, US, and EU commercialization corridors.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
                  <PillButton
                    variant="primary"
                    icon={<div className="w-2 h-2 rounded-full bg-foreground/60" />}
                    className="w-full sm:w-auto justify-center"
                  >
                    Start a conversation
                  </PillButton>

                  <span className="text-[12px] sm:text-[13px] text-muted-foreground/40 font-light">or</span>

                  <PillButton
                    variant="secondary"
                    icon={<div className="w-2 h-2 rounded-full bg-foreground/40" />}
                    className="w-full sm:w-auto justify-center"
                  >
                    View LP offers
                  </PillButton>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <ProofChip>CVC launch</ProofChip>
                  <ProofChip>BVI + Delaware fund stack</ProofChip>
                  <ProofChip>AI Fund OS</ProofChip>
                  <ProofChip>Stage-gated execution</ProofChip>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-3 mb-8 sm:mb-12">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">
            What we operate
          </span>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-light tracking-tight text-foreground/90 max-w-3xl leading-tight">
            One platform, multiple capital strategies.
          </h2>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground/65 font-light leading-relaxed max-w-3xl">
            We are not a single-product fund. We operate a shared venture infrastructure layer: sourcing, diligence, legal launch coordination, investment committee materials, reporting, and portfolio support across CVC mandates and private fund vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {platformPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={pillar.link} className="group block h-full">
                <div className="h-full rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/55 via-[#12141a]/65 to-[#1a1d26]/55 border border-white/[0.06] p-7 sm:p-8 hover:border-white/[0.12] transition-all duration-500">
                  <div className="text-[11px] text-muted-foreground/45 font-light uppercase tracking-wider mb-4">
                    {pillar.label}
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-light tracking-tight text-foreground/92 mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-muted-foreground/65 font-light leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                  <div className="text-[13px] text-muted-foreground/50 font-light group-hover:text-muted-foreground/75 transition-colors">
                    {pillar.linkLabel}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">
                Platform engine
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-4 leading-tight">
                AI-enabled Fund OS for repeatable venture work.
              </h2>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground/65 font-light leading-relaxed">
                Our internal operating system is designed to make sourcing, diligence, IC preparation, LP reporting, and portfolio monitoring faster, more auditable, and easier to share across portfolios.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {operatingModel.map((item) => (
                <div key={item} className="p-5 rounded-[18px] bg-white/[0.025] border border-white/[0.05]">
                  <p className="text-[13px] sm:text-[14px] text-foreground/80 font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-8 sm:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <h3 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mb-3">
                Four ways to work with us
              </h3>
              <p className="text-[14px] text-muted-foreground/60 font-light max-w-2xl leading-relaxed">
                LPs and strategic partners can enter through the structure that matches their capital size, governance needs, and desired level of control.
              </p>
            </div>
            <Link
              to="/fund"
              className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors"
            >
              See full terms →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {lpOffers.map((offer) => (
              <Link key={offer.title} to="/fund" className="group">
                <div className="h-full p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                  <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-3">
                    {offer.ticket}
                  </div>
                  <h4 className="text-[17px] font-light text-foreground/88 mb-3 group-hover:text-foreground/95 transition-colors">
                    {offer.title}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light leading-relaxed">
                    {offer.structure}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8 mb-16">
        <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light text-center leading-relaxed">
          Information on this website is provided for general informational purposes only and does not constitute investment, legal, tax, or other professional advice. Any fund, DAO, CVC, or mono-LP structure is subject to legal, tax, compliance, sanctions, KYC/AML, and jurisdiction-specific review. No offer to sell securities or solicitation to buy securities is made through this website. Final terms are set only in duly executed agreements and offering documents.
        </p>
      </section>
    </div>
  );
}
