import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import logoUrl from "../../assets/logo.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const hasActiveSearch = searchValue.trim().length > 0;
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 120], [0.72, 0.94]);
  const headerScale = useTransform(scrollY, [0, 120], [1, 0.985]);

  useEffect(() => { if (searchOpen) requestAnimationFrame(() => inputRef.current?.focus()); }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (searchWrapRef.current && !searchWrapRef.current.contains(target)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [searchOpen]);

  useEffect(() => {
    if (location.pathname.startsWith("/cases")) setSearchValue(new URLSearchParams(location.search).get("q") ?? "");
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchValue.trim();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    const queryString = params.toString();
    navigate(queryString ? `/cases?${queryString}` : "/cases");
    setSearchOpen(false);
  };

  const navLinks = [
    { to: "/lps", label: "LPs" },
    { to: "/cvc", label: "CVC" },
    { to: "/fund", label: "Thesis" },
    { to: "/platform", label: "Fund OS" },
    { to: "/founders", label: "Founders" },
    { to: "/track-record", label: "Track" },
    { to: "/trust-center", label: "Trust" },
    { to: "/contact", label: "Request memo" },
  ];

  const isActive = (to: string) => to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
        <motion.div className="relative max-w-[1240px] mx-auto" style={{ scale: headerScale }}>
          <motion.div className="absolute inset-0 rounded-[26px] border border-white/[0.075] bg-background/70 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl" style={{ opacity: headerOpacity }} />
          <div className="relative px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-3 group min-w-0">
              <div className="relative h-10 w-10 shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.28)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-transparent to-teal-300/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src={logoUrl} alt="maksat.PRO" className="relative h-full w-full object-contain" loading="eager" />
              </div>
              <div className="min-w-0">
                <div className="text-[14px] sm:text-[16px] leading-tight tracking-[-0.025em] text-foreground/95 transition-colors group-hover:text-foreground truncate">maksat.PRO</div>
                <div className="hidden sm:block text-[11px] leading-tight text-muted-foreground/58 font-light truncate">CVC · Specialized portfolios · Fund OS</div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] p-1 backdrop-blur-xl">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link key={link.to} to={link.to} className={`relative px-3 py-2 rounded-full text-[12px] font-light transition-colors duration-300 ${active ? "text-foreground/95" : "text-muted-foreground/62 hover:text-foreground/88"}`}>
                    {active && <motion.span layoutId="activeNavPill" className="absolute inset-0 rounded-full bg-white/[0.075] border border-white/[0.065] shadow-[0_8px_26px_rgba(0,0,0,0.22)]" transition={{ type: "spring", bounce: 0.18, duration: 0.55 }} />}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative flex items-center" ref={searchWrapRef}>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.form initial={{ width: 0, opacity: 0, marginRight: 0 }} animate={{ width: 240, opacity: 1, marginRight: 8 }} exit={{ width: 0, opacity: 0, marginRight: 0 }} transition={{ duration: 0.22, ease: "easeOut" }} className="absolute right-11 top-1/2 z-[999] h-10 -translate-y-1/2 overflow-hidden rounded-full bg-background/90 border border-white/[0.1] backdrop-blur-xl focus-within:ring-1 focus-within:ring-white/20 sm:static sm:right-auto sm:top-auto sm:translate-y-0" style={{ maxWidth: "clamp(168px, 48vw, 240px)" }} onSubmit={handleSearchSubmit}>
                      <input ref={inputRef} value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setSearchOpen(false); }} placeholder="Search cases..." className="w-full h-full box-border rounded-full bg-transparent text-[13px] text-foreground/90 placeholder:text-muted-foreground/48 px-[18px] py-[5px] focus:outline-none transition-colors" aria-label="Search cases" />
                    </motion.form>
                  )}
                </AnimatePresence>
                <button className={`touch-target flex items-center justify-center rounded-full border transition-all duration-300 ${hasActiveSearch ? "bg-white/[0.09] border-white/[0.16] text-foreground/95" : "bg-white/[0.025] border-white/[0.055] text-muted-foreground/75 hover:bg-white/[0.06] hover:text-foreground/90"}`} aria-label="Search" onClick={() => setSearchOpen((open) => !open)}>
                  <Search className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <Link to="/contact?interest=lp-materials" className="hidden sm:inline-flex items-center rounded-full border border-white/[0.07] bg-white/[0.04] px-4 py-2 text-[12px] font-light text-foreground/84 hover:bg-white/[0.07] transition-colors">LP memo</Link>
              <button className="touch-target flex items-center justify-center rounded-full border border-white/[0.055] bg-white/[0.025] text-muted-foreground/78 hover:bg-white/[0.06] hover:text-foreground/92 transition-all duration-300" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-4 h-4" strokeWidth={1.5} /> : <Menu className="w-4 h-4" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }} className="fixed inset-0 z-40 bg-background/78 backdrop-blur-3xl px-5" onClick={() => setMenuOpen(false)}>
            <div className="absolute inset-0 bay-noise opacity-40" />
            <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[80px]" />
            <div className="relative flex min-h-screen items-center justify-center py-28">
              <motion.nav initial={{ opacity: 0, y: 22, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 22, scale: 0.98 }} transition={{ delay: 0.08, duration: 0.38 }} className="w-full max-w-[760px] rounded-[32px] border border-white/[0.08] bg-white/[0.035] p-4 sm:p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl" onClick={(event) => event.stopPropagation()}>
                <div className="mb-4 px-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground/45 font-light">Navigation</div>
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const active = isActive(link.to);
                    return (
                      <motion.div key={link.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.14 + index * 0.045 }}>
                        <Link to={link.to} onClick={() => setMenuOpen(false)} className={`group flex items-center justify-between rounded-[22px] px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-300 ${active ? "bg-white/[0.075] text-foreground/95" : "text-foreground/62 hover:bg-white/[0.05] hover:text-foreground/92"}`}>
                          <span className="text-[27px] sm:text-[42px] font-light tracking-[-0.055em] leading-none">{link.label}</span>
                          <span className="text-[13px] text-muted-foreground/45 group-hover:text-muted-foreground/70 transition-colors">0{index + 1}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
