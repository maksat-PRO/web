import { Link } from "react-router";
import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { ProofChip } from "../components/ProofChip";

const timeline = [
  {
    year: "2016",
    title: "Product engineering foundation",
    text: "maksat.PRO started as a hands-on software delivery team building web, mobile, backend, dashboards, integrations, and operational tools for demanding client environments.",
  },
  {
    year: "2017-2019",
    title: "Sports and event-tech delivery",
    text: "The team worked on technology projects connected with sports, events, participant operations, schedules, reporting, access logic, and championship-level execution environments.",
  },
  {
    year: "2020-2022",
    title: "From development team to platform delivery",
    text: "The company expanded into product ownership, ERP workflows, sports training tools, participant accounts, mobile products, and management dashboards.",
  },
  {
    year: "2023-2024",
    title: "Infrastructure-heavy products",
    text: "The work moved toward enterprise systems, data-heavy workflows, applied AI tools, OSINT logic, and documentation-led delivery for more complex organizations.",
  },
  {
    year: "2025-2026",
    title: "AI-native venture infrastructure",
    text: "maksat.PRO converted its delivery experience into Fund OS, founder intake, LP access, CVC launch packs, data rooms, research workflows, and portfolio operations.",
  },
];

const metrics = [
  ["2016", "Founded"],
  ["500+", "Projects delivered"],
  ["1M+", "Users reached"],
  ["P3", "Operating platform"],
];

const proof = [
  "Product engineering",
  "Sports and event-tech",
  "ERP and dashboards",
  "Applied AI tools",
  "CVC and Fund OS",
  "Research workflows",
];

export function TrackRecord() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/80 to-[#1a1d26]/70 border border-white/[0.06] p-8 sm:p-12 lg:p-14 overflow-hidden relative">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-400/10 blur-[90px]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Track Record</span>
              <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-light tracking-[-0.055em] text-foreground/95 mt-4 mb-6 leading-[0.98]">
                Built on delivery experience since 2016.
              </h1>
              <p className="text-[15px] sm:text-[17px] text-muted-foreground/68 font-light leading-relaxed max-w-3xl">
                The company started as a product engineering team and gradually evolved into a venture infrastructure platform for LPs, CVC programs, founders, data rooms, and AI-assisted operating workflows.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-end">
              {proof.map((item) => <ProofChip key={item}>{item}</ProofChip>)}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(([value, label], index) => (
            <motion.div key={value} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] bg-white/[0.025] border border-white/[0.055] p-6">
              <div className="text-[34px] sm:text-[42px] font-light tracking-[-0.055em] text-foreground/92 mb-2">{value}</div>
              <div className="text-[12px] text-muted-foreground/55 font-light uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-[28px] bg-gradient-to-br from-[#1a1d26]/55 via-[#12141a]/65 to-[#1a1d26]/55 border border-white/[0.06] p-7 sm:p-8">
              <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Company evolution</span>
              <h2 className="text-[28px] sm:text-[34px] font-light tracking-tight text-foreground/92 mt-3 mb-4 leading-tight">From software delivery to AI-native venture infrastructure.</h2>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground/66 font-light leading-relaxed mb-6">
                Public materials intentionally generalize sensitive client names. Specific references, logos, documents, and screenshots belong in controlled materials where disclosure is appropriate.
              </p>
              <PillButton to="/cases" variant="secondary">View case notes</PillButton>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {timeline.map((item, index) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-7 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <div className="text-[13px] text-muted-foreground/45 font-light uppercase tracking-wider min-w-[92px]">{item.year}</div>
                  <div>
                    <h3 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/92 mb-3">{item.title}</h3>
                    <p className="text-[14px] sm:text-[15px] text-muted-foreground/66 font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 mb-12">
        <div className="rounded-[30px] bg-white/[0.025] border border-white/[0.06] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Positioning</span>
            <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/92 mt-3 mb-3">AI-native venture infrastructure, grounded in product engineering.</h2>
            <p className="text-[14px] text-muted-foreground/62 font-light leading-relaxed max-w-3xl">This track record layer makes the website feel like a real operating company: dates, stages, proof points, and a clear bridge from engineering to fund and platform infrastructure.</p>
          </div>
          <Link to="/contact" className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors shrink-0">Request private materials →</Link>
        </div>
      </section>
    </div>
  );
}