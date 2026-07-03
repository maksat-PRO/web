const items = {
  dao: [
    "Quarterly platform updates and portfolio-level reporting",
    "Access to curated pipeline visibility, subject to eligibility and confidentiality",
    "Community and learning layer around venture process, founder evaluation, and market corridors",
    "Selected co-invest visibility where capacity, eligibility, and allocation policy allow",
    "No control over mandate, allocation, IC decisions, or portfolio construction",
  ],
  timeline: [
    "Current stage: LP fit conversations and onboarding preparation",
    "First close target: subject to commitments, counsel, administrator, banking, and onboarding readiness",
    "Investment period: defined in final documents, with staged deployment through sourcing and IC cadence",
    "Capital calls: per final fund documents and selected structure",
    "Reporting cadence: quarterly LP updates, dashboard materials, and annual fund review",
    "Next LP onboarding window: introductory calls and data-room access by invitation after fit review",
  ],
};

const List = ({ values }: { values: string[] }) => (
  <div className="space-y-3">
    {values.map((item) => (
      <div key={item} className="flex gap-3 text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
        <span>{item}</span>
      </div>
    ))}
  </div>
);

export function LpReadinessAdditions() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20 lg:mb-24">
      <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-8">
        <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">DAO / smaller LP</span>
        <h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mt-3 mb-6">What smaller LPs receive</h2>
        <List values={items.dao} />
      </div>
      <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-6 sm:p-8">
        <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Classic fund timeline</span>
        <h2 className="text-[24px] sm:text-[30px] font-light tracking-tight text-foreground/90 mt-3 mb-6">Current stage and cadence</h2>
        <List values={items.timeline} />
      </div>
    </section>
  );
}
