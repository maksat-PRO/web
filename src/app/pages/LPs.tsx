import { Link } from "react-router";
import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { DiagonalShards } from "../components/DiagonalShards";

export function LPs() {
  const paths = [
    ["Individual Venture Office", "For one LP or family office that wants controlled venture exposure."],
    ["Club Deal Readiness", "For shared opportunity review before any deal wrapper is selected."],
    ["CVC Portfolio Office", "For corporate groups that need scouting, pilots, governance, and board materials."],
    ["Fund Formation Readiness", "For future specialized vehicles once thesis and LP demand are ready."],
  ];

  const focus = ["Sports infrastructure", "Wellness", "Longevity", "Human performance", "AI-enabled venture operations"];
  const outputs = ["LP Portfolio Memo", "Pipeline Shortlist", "Diligence Workstream", "Reporting Workspace", "Structure Readiness Pack"];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 sm:mb-20 lg:mb-24">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">For LPs and family offices</span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mt-5 mb-6 leading-tight max-w-4xl">Start with a venture office mandate.</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-4">maksat.PRO helps LPs and family offices move from venture interest to an executable private portfolio process: thesis, deal flow, diligence, approval workflow, data room, and reporting.</p>
              <p className="text-[13px] sm:text-[15px] text-foreground/78 font-light leading-relaxed max-w-3xl mb-8">Focused on sports, wellness, longevity, human performance, and AI-enabled venture operations.</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4"><PillButton to="/contact?interest=lp-portfolio-setup" variant="primary" className="w-full sm:w-auto justify-center">Start portfolio setup</PillButton><PillButton to="/contact?interest=lp-materials" variant="secondary" className="w-full sm:w-auto justify-center">Request LP memo</PillButton><Link to="/trust-center" className="text-[13px] text-muted-foreground/60 hover:text-foreground/85 transition-colors">Review trust model →</Link></div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16 sm:mb-20 lg:mb-24"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Thesis focus</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">The LP mandate is built around a focused venture thesis.</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">{focus.map((item) => <div key={item} className="rounded-[20px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-5 text-[14px] text-foreground/84 font-light">{item}</div>)}</div></section>

        <section className="mb-16 sm:mb-20 lg:mb-24"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Choose your LP path</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">Four entry points, one disciplined process.</h2><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">{paths.map(([title, desc], index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] sm:rounded-[26px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6"><div className="text-[11px] text-muted-foreground/42 font-light uppercase tracking-wider mb-4">Path {String(index + 1).padStart(2, "0")}</div><h3 className="text-[20px] sm:text-[23px] font-light tracking-tight text-foreground/90 mb-3 leading-tight">{title}</h3><p className="text-[13px] sm:text-[14px] text-muted-foreground/68 font-light leading-relaxed">{desc}</p></motion.div>)}</div></section>

        <section className="rounded-[26px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10"><span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Outputs</span><h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">What the LP can request.</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">{outputs.map((item) => <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">{item}</div>)}</div></section>
      </div>
    </div>
  );
}
