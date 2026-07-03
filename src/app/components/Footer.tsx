import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-[15px] tracking-tight text-foreground/70">maksat.PRO</span>
            <span className="text-[12px] text-muted-foreground/50 font-light">Venture platform · CVC · Funds · AI Fund OS</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[12px] sm:text-[13px] text-muted-foreground/60">
            <Link to="/lps" className="hover:text-foreground/80 transition-colors">LPs</Link>
            <Link to="/founders" className="hover:text-foreground/80 transition-colors">Founders</Link>
            <Link to="/platform" className="hover:text-foreground/80 transition-colors">Platform</Link>
            <Link to="/fund" className="hover:text-foreground/80 transition-colors">LP Offers</Link>
            <Link to="/trust-center" className="hover:text-foreground/80 transition-colors">Trust Center</Link>
            <Link to="/privacy" className="hover:text-foreground/80 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground/80 transition-colors">Terms</Link>
            <span className="text-muted-foreground/40">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
