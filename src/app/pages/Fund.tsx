import { PillButton } from "../components/PillButton";

export function Fund() {
  const thesis = [
    "Sports infrastructure",
    "Wellness",
    "Longevity",
    "Human performance",
    "AI-enabled venture operations",
  ];

  const vehicles = [
    "LP Venture Office",
    "CVC Program",
    "Club Deal / SPV Readiness",
    "Classic Fund Readiness",
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <section className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] p-8 sm:p-12 mb-16">
          <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">Thesis & vehicles</span>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mt-5 mb-6 leading-tight max-w-4xl">
            Specialized venture portfolios start with a thesis, not with a wrapper.
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-3xl mb-8">
            maksat.PRO builds the operating path toward CVC programs, LP venture offices, SPVs, club deals, and future funds in sports, wellness, longevity, and human performance. The platform is supported by AI-enabled venture operations.
          </p>
          <div className="flex flex-wrap gap-3">
            <PillButton to="/contact?interest=lp-materials" variant="primary">Request LP memo</PillButton>
            <PillButton to="/cvc" variant="secondary">Review CVC path</PillButton>
          </div>
        </section>

        <section className="mb-16">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Investment thesis</span>
          <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">
            A focused thesis for the future of sport, wellness, longevity, and measurable performance.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {thesis.map((item) => (
              <div key={item} className="rounded-[22px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 text-[15px] text-foreground/88 font-light">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] bg-gradient-to-br from-[#1a1d26]/45 via-[#12141a]/55 to-[#1a1d26]/45 border border-white/[0.06] p-8 sm:p-10">
          <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">Vehicle ladder</span>
          <h2 className="text-[26px] sm:text-[34px] font-light tracking-tight text-foreground/90 mt-3 mb-8">Four vehicle paths, one operating standard.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vehicles.map((item) => (
              <div key={item} className="rounded-[18px] bg-white/[0.025] border border-white/[0.05] p-5 text-[14px] text-muted-foreground/72 font-light">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
