import { Link } from "react-router";
import { motion } from "motion/react";
import { DiagonalShards } from "../components/DiagonalShards";

export function Insights() {
  const notes = [
    {
      tag: "Founder readiness",
      title: "How technical founders become globally investable",
      description: "A field note on packaging, data rooms, compliance discipline, market-entry narrative, and trusted access for founders from high-friction ecosystems.",
      status: "Draft topic",
      link: "/founder-readiness-score",
    },
    {
      tag: "Corporate venture",
      title: "How to launch a CVC program in 90 days",
      description: "A practical note for corporate groups: mandate, thesis, governance, budget, pipeline sprint, first IC package, and executive reporting rhythm.",
      status: "Draft topic",
      link: "/cvc-launch-pack",
    },
    {
      tag: "Fund OS",
      title: "How to prepare a startup for top-tier diligence",
      description: "A note on founder signal, technical diligence, market proof, source-of-funds clarity, cap table cleanup, and exit-readiness evidence.",
      status: "Draft topic",
      link: "/platform",
    },
  ];

  const principles = ["Tactical over generic", "Evidence-based", "Founder and LP useful", "No return promises", "Compliance-aware", "Written from real operating work"];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Insights / Field Notes</span></div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">Field notes from venture platform work</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl">A future home for practical notes on founder readiness, CVC launch, fund operations, cross-border commercialization, diligence, and exit preparation. We will publish selectively when a note is useful enough to help founders, LPs, or corporate venture teams make better decisions.</p>
            </div>
          </div>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {notes.map((note, index) => (
            <motion.div key={note.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-5"><span className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider">{note.tag}</span><span className="text-[11px] text-blue-400/80 font-light">{note.status}</span></div>
              <h2 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/90 mb-4 leading-tight">{note.title}</h2>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">{note.description}</p>
              <Link to={note.link} className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">Related resource →</Link>
            </motion.div>
          ))}
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Editorial principles</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">We will not publish generic venture thought leadership. Each field note should be based on real operating patterns and be useful for a founder, LP, corporate group, or co-investor.</p></div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">{principles.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
