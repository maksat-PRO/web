import { Link } from "react-router";
import { motion } from "motion/react";
import { DiagonalShards } from "../components/DiagonalShards";

export function Insights() {
  const notes = [
    {
      tag: "Founder readiness",
      title: "How technical founders become globally investable",
      description: "Packaging, data rooms, compliance discipline, market-entry narrative, source-of-funds clarity, and trusted access for founders from high-friction ecosystems",
      status: "Public note",
      link: "/founder-readiness-score",
    },
    {
      tag: "Corporate venture",
      title: "How to launch a CVC program in 90 days",
      description: "A practical framework for corporate groups: mandate, thesis, governance, budget, pipeline sprint, first IC package, and executive reporting rhythm",
      status: "Framework",
      link: "/cvc-launch-pack",
    },
    {
      tag: "Fund OS",
      title: "What an AI-native venture operating system should contain",
      description: "Founder intake, LP access, dealflow CRM, research notes, IC materials, data rooms, portfolio updates, and agent-assisted workflows in one operating layer",
      status: "Platform note",
      link: "/platform",
    },
    {
      tag: "LP materials",
      title: "How private fund materials should be structured",
      description: "LP memo, setup logic, operating budget, reporting cadence, portfolio construction, risk logic, legal boundaries, and data room access by investor type",
      status: "Private-ready",
      link: "/lps",
    },
    {
      tag: "CVC research",
      title: "Startup warehouse as a corporate future-business engine",
      description: "How a corporate group can use scouting, thesis maps, founder interviews, pilots, and IC-ready notes to identify businesses for a 5-10 year horizon",
      status: "Research note",
      link: "/cvc",
    },
    {
      tag: "Exit readiness",
      title: "Preparing companies before Series A/B or strategic sale",
      description: "Buyer maps, diligence cleanup, strategic narrative, proof of pilots, cap table review, and next-round positioning before the market asks for it",
      status: "Field note",
      link: "/cases",
    },
  ];

  const library = [
    ["Public", "Field notes, founder checklists, CVC frameworks, operating principles, anonymized case notes, and platform explanations"],
    ["Private", "LP decks, fund economics, CVC launch packs, budgets, detailed case materials, data room indexes, and partner-specific memos"],
    ["Internal", "Sensitive client files, raw founder lists, investment notes, financial schedules, contracts, legal drafts, and unapproved working materials"],
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
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">Working notes from product, AI and venture infrastructure</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl">This library is the public edge of our internal research base: founder readiness, CVC launch, LP materials, fund operations, data rooms, AI-assisted workflows, due diligence, and exit preparation. We publish selectively when a note is useful enough to help founders, LPs, corporate groups, or co-investors make better decisions</p>
            </div>
          </div>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {notes.map((note, index) => (
            <motion.div key={note.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-5"><span className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider">{note.tag}</span><span className="text-[11px] text-blue-400/80 font-light">{note.status}</span></div>
              <h2 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/90 mb-4 leading-tight">{note.title}</h2>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">{note.description}</p>
              <Link to={note.link} className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">Related resource →</Link>
            </motion.div>
          ))}
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Public, private and internal layers</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">Not every document belongs on a public website. The site should show expertise, process and proof, while sensitive client names, budgets, legal materials and raw investment work stay controlled</p></div>
            <div className="lg:col-span-7 grid grid-cols-1 gap-3 sm:gap-4">{library.map(([label, text]) => <div key={label} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5"><div className="text-[12px] text-muted-foreground/45 font-light uppercase tracking-wider mb-2">{label}</div><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{text}</p></div>)}</div>
          </div>
        </section>

        <section className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5"><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mb-4">Editorial principles</h2><p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">We do not publish generic venture thought leadership. Each field note should be based on real operating patterns and be useful for a founder, LP, corporate group, or co-investor</p></div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">{principles.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div>
          </div>
        </section>
      </div>
    </div>
  );
}