import { motion } from "motion/react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { FilterChip } from "../components/FilterChip";
import { DiagonalShards } from "../components/DiagonalShards";

type FilterType = "All" | "CVC" | "Founder" | "Fund" | "Platform" | "Exit";

export function Cases() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get("q") ?? "").trim();
  const normalizedQuery = searchQuery.toLowerCase();
  const hasQuery = normalizedQuery.length > 0;

  const cases = [
    { id: 1, category: "CVC" as const, title: "CVC Launch Case", client: "Confidential corporate group", description: "How we helped a corporate group translate strategic priorities into a venture mandate, pipeline sprint, IC process, budget logic, and board-level reporting rhythm.", metrics: ["Mandate designed", "Pipeline sprint", "IC-ready process"], geography: "Russia/CIS → Global" },
    { id: 2, category: "Founder" as const, title: "Founder Packaging Case", client: "Confidential CIS founder", description: "How we prepared a technical founder for international fundraising by rebuilding the narrative, data room, investor memo, diligence Q&A, and market-entry logic.", metrics: ["Investor-grade deck", "Data room", "Warm-intro map"], geography: "CIS → US/MENA" },
    { id: 3, category: "Fund" as const, title: "Fund Formation Case", client: "Confidential LP group", description: "How we structured a launch package for a BVI + Delaware venture fund stack, including LP onboarding, governance, reporting, legal coordination, and operating model.", metrics: ["BVI + Delaware stack", "LP data room", "Governance pack"], geography: "BVI / Delaware" },
    { id: 4, category: "Platform" as const, title: "AI Fund OS Case", client: "Internal platform layer", description: "How our platform improves sourcing, scoring, due diligence, IC preparation, portfolio monitoring, LP reporting, and exit-readiness workflows across multiple vehicles.", metrics: ["Sourcing workflow", "IC memos", "LP reporting"], geography: "Global" },
    { id: 5, category: "Exit" as const, title: "Exit Readiness Case", client: "Confidential portfolio candidate", description: "How we prepared a founder for follow-on financing and strategic buyer conversations by cleaning the data room, mapping buyers, shaping the Series A/B narrative, and documenting pilot evidence.", metrics: ["Buyer map", "Diligence pack", "Next-round narrative"], geography: "CIS → US/EU" }
  ];

  const filteredCases = cases.filter((caseItem) => {
    const matchesFilter = activeFilter === "All" || caseItem.category === activeFilter;
    if (!hasQuery) return matchesFilter;
    const searchableText = [caseItem.title, caseItem.client, caseItem.description, caseItem.geography, caseItem.category, ...caseItem.metrics].join(" ").toLowerCase();
    return matchesFilter && searchableText.includes(normalizedQuery);
  });

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 sm:mb-16"><div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden"><DiagonalShards /><div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12"><div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Proof patterns</span></div><h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight">Case Studies</h1><p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl">Selected proof patterns across CVC launch, founder packaging, fund formation, AI-enabled venture operations, and exit readiness. Some details are anonymized per client request.</p></div></div></motion.div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12">{(["All", "CVC", "Founder", "Fund", "Platform", "Exit"] as FilterType[]).map((filter) => <FilterChip key={filter} onClick={() => setActiveFilter(filter)} active={activeFilter === filter}>{filter}</FilterChip>)}</div>
        {filteredCases.length === 0 ? <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8 sm:p-10 text-center"><p className="text-[16px] sm:text-[18px] text-foreground/80 font-light">No cases found</p><p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light mt-2">{hasQuery ? `Try a different search term. Current query: "${searchQuery}"` : "Try adjusting the filters."}</p></motion.div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">{filteredCases.map((caseItem, index) => <motion.div key={caseItem.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500 group"><div className="flex items-center justify-between gap-4 mb-6"><span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-light uppercase tracking-wider bg-blue-500/10 text-blue-400/80 border border-blue-500/20"><div className="w-1 h-1 rounded-full bg-current" />{caseItem.category}</span><span className="text-[11px] sm:text-[12px] text-muted-foreground/50 font-light text-right">{caseItem.geography}</span></div><h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-2 group-hover:text-foreground/95 transition-colors">{caseItem.title}</h3><p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light mb-4">{caseItem.client}</p><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">{caseItem.description}</p><div className="flex flex-wrap gap-2">{caseItem.metrics.map((metric) => <span key={metric} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[11px] sm:text-[12px] text-muted-foreground/60 font-light">{metric}</span>)}</div></motion.div>)}</div>}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 sm:mt-16 text-center"><p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light leading-relaxed max-w-2xl mx-auto">Metrics are illustrative and reflect results achieved during engagement period. Client names withheld per NDA. Past performance does not guarantee future results.</p></motion.div>
      </div>
    </div>
  );
}
