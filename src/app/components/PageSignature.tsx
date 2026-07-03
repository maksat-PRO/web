import { useLocation } from "react-router";

const signatures: Record<string, { label: string; tone: string; accent: string; secondary: string; kind: string }> = {
  "/": { label: "COMMAND\nCENTER", tone: "right-[-8%] top-[6%]", accent: "rgba(125,178,255,.18)", secondary: "rgba(45,212,191,.12)", kind: "orbit" },
  "/lps": { label: "CAPITAL\nCOCKPIT", tone: "left-[-10%] top-[12%]", accent: "rgba(251,191,36,.18)", secondary: "rgba(125,178,255,.11)", kind: "bars" },
  "/founders": { label: "GLOBAL\nPASSPORT", tone: "right-[-9%] top-[10%]", accent: "rgba(45,212,191,.18)", secondary: "rgba(167,139,250,.11)", kind: "stamp" },
  "/platform": { label: "FUND\nOS", tone: "right-[-7%] top-[9%]", accent: "rgba(96,165,250,.2)", secondary: "rgba(45,212,191,.11)", kind: "grid" },
  "/cvc": { label: "MISSION\nCONTROL", tone: "right-[-12%] top-[12%]", accent: "rgba(248,113,113,.18)", secondary: "rgba(251,191,36,.12)", kind: "radar" },
  "/fund": { label: "CAPITAL\nSTACK", tone: "left-[-9%] top-[10%]", accent: "rgba(167,139,250,.18)", secondary: "rgba(251,191,36,.1)", kind: "stack" },
  "/data-room": { label: "SECURE\nVAULT", tone: "right-[-8%] top-[8%]", accent: "rgba(34,197,94,.16)", secondary: "rgba(96,165,250,.1)", kind: "vault" },
  "/founder-readiness-score": { label: "SCORE\nCARD", tone: "right-[-7%] top-[9%]", accent: "rgba(45,212,191,.18)", secondary: "rgba(96,165,250,.1)", kind: "score" },
  "/cvc-launch-pack": { label: "BOARD\nMEMO", tone: "right-[-10%] top-[8%]", accent: "rgba(248,113,113,.16)", secondary: "rgba(251,191,36,.1)", kind: "memo" },
  "/cases": { label: "PROOF\nWALL", tone: "left-[-8%] top-[10%]", accent: "rgba(244,114,182,.16)", secondary: "rgba(96,165,250,.1)", kind: "wall" },
  "/insights": { label: "FIELD\nNOTES", tone: "left-[-7%] top-[10%]", accent: "rgba(250,204,21,.18)", secondary: "rgba(244,114,182,.1)", kind: "paper" },
  "/trust-center": { label: "TRUST\nLAYER", tone: "right-[-8%] top-[10%]", accent: "rgba(34,197,94,.16)", secondary: "rgba(96,165,250,.1)", kind: "vault" },
  "/contact": { label: "OPEN\nCHANNEL", tone: "right-[-8%] top-[9%]", accent: "rgba(125,178,255,.16)", secondary: "rgba(34,197,94,.1)", kind: "signal" },
};

export function PageSignature() {
  const { pathname } = useLocation();
  const sig = signatures[pathname] ?? { label: "MAKSAT\nPRO", tone: "right-[-8%] top-[10%]", accent: "rgba(125,178,255,.14)", secondary: "rgba(45,212,191,.08)", kind: "grid" };
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute ${sig.tone} whitespace-pre-line text-[72px] sm:text-[110px] lg:text-[152px] leading-[.78] tracking-[-.08em] font-extralight opacity-[.11] select-none`} style={{ color: sig.accent }}>{sig.label}</div>
      <div className="absolute -top-24 left-1/2 h-[540px] w-[880px] -translate-x-1/2 blur-3xl" style={{ background: `radial-gradient(circle at 50% 50%, ${sig.accent}, transparent 68%)` }} />
      <div className="absolute bottom-[-18%] right-[-10%] h-[520px] w-[520px] rounded-full blur-[120px]" style={{ background: sig.secondary }} />
      <div className="absolute inset-0 opacity-[.16]" style={{ backgroundImage: `linear-gradient(${sig.accent} 1px, transparent 1px), linear-gradient(90deg, ${sig.accent} 1px, transparent 1px)`, backgroundSize: sig.kind === "bars" ? "96px 42px" : sig.kind === "grid" ? "42px 42px" : "72px 72px", maskImage: "radial-gradient(circle at 50% 18%, black, transparent 72%)" }} />
      <div className="absolute right-[8%] top-[24%] h-[360px] w-[360px] rounded-full opacity-[.35] blur-[1px]" style={{ background: sig.kind === "radar" || sig.kind === "vault" ? `radial-gradient(circle, transparent 41%, ${sig.accent} 42% 43%, transparent 44%), repeating-conic-gradient(from 0deg, ${sig.secondary} 0 4deg, transparent 4deg 18deg)` : `conic-gradient(from 120deg, transparent, ${sig.accent}, transparent 42%, ${sig.secondary}, transparent 72%)` }} />
    </div>
  );
}
