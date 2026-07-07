import { Link } from "react-router";

export function Footer() {
  const primaryLinks = [
    { to: "/lps", label: "LPs" },
    { to: "/cvc", label: "CVC" },
    { to: "/fund", label: "Thesis" },
    { to: "/platform", label: "Fund OS" },
    { to: "/founders", label: "Founders" },
    { to: "/contact", label: "Contact" },
  ];

  const resourceLinks = [
    { to: "/track-record", label: "Track Record" },
    { to: "/data-room", label: "Data Room" },
    { to: "/cases", label: "Cases" },
    { to: "/insights", label: "Insights" },
  ];

  const legalLinks = [
    { to: "/trust-center", label: "Trust Center" },
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
  ];

  const renderLinks = (links: { to: string; label: string }[]) => (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <Link key={link.to} to={link.to} className="hover:text-foreground/80 transition-colors">
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="text-[15px] tracking-tight text-foreground/72 mb-2">maksat.PRO</div>
            <div className="text-[12px] text-muted-foreground/50 font-light leading-relaxed max-w-[360px]">
              Venture platform for CVC programs, specialized portfolios, founder readiness, and AI-enabled fund operations.
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[12px] sm:text-[13px] text-muted-foreground/60 font-light">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/35 mb-3">Main</div>
              {renderLinks(primaryLinks)}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/35 mb-3">Resources</div>
              {renderLinks(resourceLinks)}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/35 mb-3">Legal</div>
              {renderLinks(legalLinks)}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-[11px] text-muted-foreground/38 font-light leading-relaxed">
          © 2026 maksat.PRO. Information on this website is for general informational purposes only and does not constitute an offer to sell securities or a solicitation to buy securities.
        </div>
      </div>
    </footer>
  );
}
