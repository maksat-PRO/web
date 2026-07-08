import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { CheckCircle2 } from "lucide-react";
import { DiagonalShards } from "../components/DiagonalShards";

export function Advisory() {
  const capabilities = [
    {
      title: "CVC Launch & Operations",
      description: "We help corporate groups create a venture function with a mandate, thesis, budget, IC rhythm, reporting model, and startup pipeline",
      deliverables: ["CVC mandate", "Pipeline sprint", "IC materials", "Governance calendar"],
    },
    {
      title: "Fund Formation Support",
      description: "We coordinate the launch package for private fund structures with counsel, administrators, banking, KYC/AML, and LP data room workflows",
      deliverables: ["Launch roadmap", "Document checklist", "Data room", "LP onboarding process"],
    },
    {
      title: "AI Fund OS Implementation",
      description: "We build operational workflows for sourcing, scoring, memo generation, founder tracking, portfolio monitoring, and LP reporting",
      deliverables: ["Deal-flow database", "AI memo workflow", "IC dashboard", "Reporting templates"],
    },
    {
      title: "Venture Due Diligence",
      description: "We run evidence-based diligence for founders, CVC targets, co-investments, and cross-border commercialization opportunities",
      deliverables: ["Founder assessment", "Market memo", "Technical review", "Risk register"],
    },
  ];

  const process = [
    { stage: "01", title: "Mandate", duration: "1–2 weeks", detail: "Define capital, governance, geography, thesis, and decision rights" },
    { stage: "02", title: "Setup", duration: "2–6 weeks", detail: "Build operating model, data room, reporting, and legal coordination path" },
    { stage: "03", title: "Pipeline", duration: "4–8 weeks", detail: "Source, screen, and prioritize founders or targets for the first IC" },
    { stage: "04", title: "Execution", duration: "Ongoing", detail: "Run IC, diligence, portfolio support, reporting, and follow-on workflows" },
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
                  Advisory & venture operations
                </span>
              </div>

              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">
                We turn venture ambition into an operating system
              </h1>

              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">
                maksat.PRO works with corporates, family offices, LPs, and founders to design CVC programs, launch fund structures, build AI-enabled venture workflows, and execute stage-gated due diligence
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <PillButton variant="primary" className="w-full sm:w-auto justify-center">
                  Build a mandate
                </PillButton>
                <PillButton variant="secondary" className="w-full sm:w-auto justify-center">
                  Review platform scope
                </PillButton>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            Core Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500"
              >
                <h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-3">
                  {capability.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">
                  {capability.description}
                </p>

                <div className="space-y-2">
                  <div className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider mb-3">
                    Typical Deliverables
                  </div>
                  {capability.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-foreground/40" strokeWidth={1.5} />
                      <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            Stage-Gated Process
          </h2>

          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((phase, index) => (
                <div key={phase.stage}>
                  <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-2">
                    Stage {phase.stage}
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-light tracking-tight text-foreground/85 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light mb-3">
                    {phase.duration}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground/55 font-light leading-relaxed">
                    {phase.detail}
                  </p>
                  {index < 3 && (
                    <div className="mt-4 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-6 sm:mb-8">
            Geographic Corridors
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { region: "CIS", priority: "Source", description: "Technical founders and overlooked venture assets" },
              { region: "MENA", priority: "Launch", description: "Corporate demand, family offices, and market entry" },
              { region: "United States", priority: "Scale", description: "Accelerators, venture networks, and commercialization" },
              { region: "EU", priority: "Bridge", description: "Compliance, market access, and strategic partnerships" },
            ].map((geo) => (
              <div
                key={geo.region}
                className="p-5 sm:p-6 rounded-[18px] sm:rounded-[20px] bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-2">
                  {geo.priority}
                </div>
                <h3 className="text-[16px] sm:text-[18px] font-light text-foreground/85 mb-2">
                  {geo.region}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light">
                  {geo.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
