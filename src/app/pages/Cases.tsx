import { motion } from "motion/react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { FilterChip } from "../components/FilterChip";
import { DiagonalShards } from "../components/DiagonalShards";

type FilterType = "All" | "Event-Tech" | "Enterprise" | "AI" | "Venture" | "Platform";

const filters: FilterType[] = ["All", "Event-Tech", "Enterprise", "AI", "Venture", "Platform"];

const cases = [
  { id: 1, category: "Event-Tech" as const, title: "Major Sports Event Participant OS", client: "Anonymized international event environment", description: "Participant registration, personal schedules, daily plans, reporting, access-related data structures, and organizer dashboards for a fixed-date event environment where reliability mattered more than presentation", metrics: ["1,700+ daily plans", "6,700+ exports", "4,700+ program items"], geography: "Sports / Event operations" },
  { id: 2, category: "Platform" as const, title: "Professional Club Fan Ecosystem", client: "Anonymized professional sports organization", description: "A unified digital layer connecting fan accounts, CRM logic, loyalty mechanics, ticketing-related flows, online store touchpoints, and operational integrations across multiple systems", metrics: ["178K+ fan-base scope", "CRM workflows", "Multiple integrations"], geography: "Sports / Fan engagement" },
  { id: 3, category: "Enterprise" as const, title: "Sports Education ERP", client: "Anonymized national sports education network", description: "ERP and operational accounting workflows for schools, coaches, facilities, inventory, parent interfaces, management accounts, and practical reporting for non-technical users", metrics: ["1,300+ schools scope", "2,400+ coaches scope", "5,000+ elements"], geography: "Education / Sports infrastructure" },
  { id: 4, category: "AI" as const, title: "AI Video Analysis Tool", client: "Applied sports AI case", description: "Video-stream analysis workflow designed to support coaches and athletes with recognition logic, mobile interaction, and practical performance feedback in training and preparation scenarios", metrics: ["Video AI layer", "Mobile workflow", "Coach support"], geography: "Sports AI" },
  { id: 5, category: "Enterprise" as const, title: "Corporate Sports Platform", client: "Anonymized corporate platform case", description: "Employee engagement platform for internal sports activities, event calendars, participation flows, challenges, training preparation, team tracking, and communication mechanics", metrics: ["Engagement mechanics", "Event calendar", "Team activity tracking"], geography: "Corporate operations" },
  { id: 6, category: "Platform" as const, title: "Sports School Training System", client: "Anonymized training infrastructure case", description: "Training plan generation, coach tools, parent and athlete interfaces, group structures, preparation-element databases, and seasonal update logic for sports schools", metrics: ["Coach dashboard", "Parent interface", "Training plans"], geography: "Sports education" },
  { id: 7, category: "Venture" as const, title: "CVC Launch Infrastructure", client: "Confidential corporate group", description: "CVC mandate, investment policy, startup warehouse, scouting sprint, IC materials, KPI framework, reporting rhythm, budget logic, and data room structure for a corporate venture program", metrics: ["Mandate", "Startup warehouse", "IC process"], geography: "CVC / Corporate venture" },
  { id: 8, category: "Venture" as const, title: "P3 Fund Operating Layer", client: "Internal platform layer", description: "Founder intake, LP private access, dealflow CRM, research notes, controlled data rooms, portfolio operations, and AI-assisted workflows connected into one operating layer", metrics: ["Founder intake", "LP access", "Data room"], geography: "Fund OS / Platform" },
];

export function Cases() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get("q") ?? "").trim();
  const normalizedQuery = searchQuery.toLowerCase();
  const hasQuery = normalizedQuery.length > 0;

  const filteredCases = cases.filter((caseItem) => {
    const matchesFilter = activeFilter === "All" || caseItem.category === activeFilter;
    if (!hasQuery) return matchesFilter;
    const searchableText = [caseItem.title, caseItem.client, caseItem.description, caseItem.geography, caseItem.category, ...caseItem.metrics].join(" ").toLowerCase();
    return matchesFilter && searchableText.includes(normalizedQuery);
  });

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 sm:mb-16">
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-foreground/70" /><span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Selected work</span></div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight">Anonymized Case Notes</h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl">A public proof layer across software delivery, sports and event-tech, ERP workflows, AI tooling, CVC design, and fund operating infrastructure. Sensitive client names and logos are kept out of the public site unless explicitly cleared</p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12">{filters.map((filter) => <FilterChip key={filter} onClick={() => setActiveFilter(filter)} active={activeFilter === filter}>{filter}</FilterChip>)}</div>

        {filteredCases.length === 0 ? <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8 sm:p-10 text-center"><p className="text-[16px] sm:text-[18px] text-foreground/80 font-light">No cases found</p><p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light mt-2">{hasQuery ? `Try a different search term. Current query: "${searchQuery}"` : "Try adjusting the filters."}</p></motion.div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">{filteredCases.map((caseItem, index) => <motion.div key={caseItem.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500 group"><div className="flex items-center justify-between gap-4 mb-6"><span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-light uppercase tracking-wider bg-blue-500/10 text-blue-400/80 border border-blue-500/20"><div className="w-1 h-1 rounded-full bg-current" />{caseItem.category}</span><span className="text-[11px] sm:text-[12px] text-muted-foreground/50 font-light text-right">{caseItem.geography}</span></div><h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-2 group-hover:text-foreground/95 transition-colors">{caseItem.title}</h3><p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light mb-4">{caseItem.client}</p><p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">{caseItem.description}</p><div className="flex flex-wrap gap-2">{caseItem.metrics.map((metric) => <span key={metric} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[11px] sm:text-[12px] text-muted-foreground/60 font-light">{metric}</span>)}</div></motion.div>)}</div>}

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 sm:mt-16 text-center"><p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light leading-relaxed max-w-2xl mx-auto">Public case notes are intentionally anonymized. Specific client names, logos, screenshots, budgets, and documents are shared only through controlled private materials where appropriate</p></motion.div>
      </div>
    </div>
  );
}