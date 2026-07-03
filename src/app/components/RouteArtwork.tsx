import { useLocation } from "react-router";

type ArtworkKind = "network" | "capital" | "stack" | "mission" | "passport" | "score" | "vault" | "proof" | "trust";
type NodePoint = [string, number, number];

const artworkByPath: Record<string, { kind: ArtworkKind; label: string }> = {
  "/": { kind: "network", label: "Venture Network Map" },
  "/lps": { kind: "capital", label: "LP Capital Cockpit" },
  "/fund": { kind: "stack", label: "Fund Stack" },
  "/cvc": { kind: "mission", label: "CVC Mission Control" },
  "/founders": { kind: "passport", label: "Founder Passport" },
  "/founder-readiness-score": { kind: "score", label: "Founder Scorecard" },
  "/data-room": { kind: "vault", label: "LP Data Room Vault" },
  "/cases": { kind: "proof", label: "Proof Wall" },
  "/trust-center": { kind: "trust", label: "Trust Layer Map" },
};

const nodes: NodePoint[] = [["LPs", 35, 16], ["CVCs", 72, 25], ["Founders", 78, 68], ["Co-invest", 24, 72], ["Exits", 50, 86], ["Strategics", 18, 40]];
const fundLayers = ["LPs", "Vehicles", "GP Platform", "Fund OS", "Founders", "Reporting"];
const mission = ["Mandate", "Governance", "Budget", "Pipeline", "First IC"];
const passport = ["Diagnostic", "Packaging", "Data Room", "Market Entry", "Fundraising", "Exit"];
const trust = ["KYC", "AML", "Source", "Conflicts", "IC Archive", "Reporting"];

function Badge({ text, x, y }: { text: string; x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}><rect x="-42" y="-13" width="84" height="26" rx="13" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.14)" /><text textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,.72)" fontSize="9" fontFamily="Inter, system-ui">{text}</text></g>;
}

function Network() {
  return <svg viewBox="0 0 320 240" className="h-full w-full"><defs><radialGradient id="networkGlow"><stop offset="0" stopColor="rgba(125,178,255,.55)"/><stop offset="1" stopColor="rgba(125,178,255,0)"/></radialGradient></defs><circle cx="160" cy="120" r="42" fill="url(#networkGlow)"/><circle cx="160" cy="120" r="31" fill="rgba(11,16,28,.72)" stroke="rgba(125,178,255,.35)"/><text x="160" y="116" textAnchor="middle" fill="rgba(255,255,255,.78)" fontSize="10">AI Fund</text><text x="160" y="130" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="9">OS</text>{nodes.map(([name, x, y]) => { const sx = x * 3.2; const sy = y * 2.4; return <g key={name}><line x1="160" y1="120" x2={sx} y2={sy} stroke="rgba(125,178,255,.2)"/><Badge text={name} x={sx} y={sy}/></g>; })}</svg>;
}

function Capital() {
  const rows = [["DAO", "$10K+", "Light"], ["Classic", "$500K+", "Reserve"], ["CVC", "$2M+", "Mandate"], ["Mono-LP", "$10M+", "Custom"]];
  return <svg viewBox="0 0 320 240" className="h-full w-full"><rect x="34" y="28" width="252" height="184" rx="24" fill="rgba(255,255,255,.045)" stroke="rgba(251,191,36,.22)"/><text x="56" y="58" fill="rgba(251,191,36,.7)" fontSize="10" letterSpacing="2">CAPITAL COCKPIT</text>{rows.map((r,i)=><g key={r[0]} transform={`translate(52 ${82+i*30})`}><rect width="216" height="22" rx="11" fill="rgba(255,255,255,.055)"/><text x="12" y="14" fill="rgba(255,255,255,.78)" fontSize="10">{r[0]}</text><text x="96" y="14" fill="rgba(255,255,255,.55)" fontSize="10">{r[1]}</text><text x="160" y="14" fill="rgba(255,255,255,.45)" fontSize="10">{r[2]}</text></g>)}</svg>;
}

function Stack() {
  return <svg viewBox="0 0 320 240" className="h-full w-full">{fundLayers.map((l,i)=><g key={l} transform={`translate(${52+i*14} ${42+i*25})`}><rect width="190" height="30" rx="10" fill={`rgba(167,139,250,${0.16-i*0.012})`} stroke="rgba(255,255,255,.12)"/><text x="16" y="19" fill="rgba(255,255,255,.72)" fontSize="10">{l}</text></g>)}<path d="M250 70 C282 100 282 150 250 180" fill="none" stroke="rgba(251,191,36,.28)"/><circle cx="250" cy="70" r="5" fill="rgba(251,191,36,.55)"/><circle cx="250" cy="180" r="5" fill="rgba(251,191,36,.55)"/></svg>;
}

function Mission() {
  return <svg viewBox="0 0 320 240" className="h-full w-full"><circle cx="160" cy="120" r="76" fill="none" stroke="rgba(248,113,113,.2)"/><circle cx="160" cy="120" r="42" fill="rgba(248,113,113,.08)" stroke="rgba(248,113,113,.22)"/><line x1="160" y1="44" x2="160" y2="196" stroke="rgba(248,113,113,.14)"/><line x1="84" y1="120" x2="236" y2="120" stroke="rgba(248,113,113,.14)"/>{mission.map((m,i)=><Badge key={m} text={m} x={[160,230,205,115,90][i]} y={[44,102,178,178,102][i]}/>)}</svg>;
}

function Passport() {
  return <svg viewBox="0 0 320 240" className="h-full w-full"><rect x="70" y="24" width="180" height="192" rx="18" fill="rgba(45,212,191,.08)" stroke="rgba(45,212,191,.24)"/><text x="92" y="58" fill="rgba(45,212,191,.72)" fontSize="10" letterSpacing="2">GLOBAL PASSPORT</text><circle cx="160" cy="100" r="30" fill="none" stroke="rgba(45,212,191,.25)"/><path d="M132 154 H188 M124 176 H196" stroke="rgba(255,255,255,.22)"/>{passport.map((p,i)=><text key={p} x={92+(i%2)*80} y={148+Math.floor(i/2)*24} fill="rgba(255,255,255,.58)" fontSize="9">{p}</text>)}</svg>;
}

function Score() {
  const bars: [string, number][] = [["Founder", 86], ["Market", 78], ["Tech", 82], ["Compliance", 70], ["Exit", 84]];
  return <svg viewBox="0 0 320 240" className="h-full w-full"><rect x="44" y="28" width="232" height="184" rx="24" fill="rgba(255,255,255,.045)" stroke="rgba(45,212,191,.2)"/><text x="68" y="58" fill="rgba(45,212,191,.72)" fontSize="10" letterSpacing="2">READINESS SCORE</text><text x="222" y="82" fill="rgba(255,255,255,.82)" fontSize="36" textAnchor="middle">84</text>{bars.map(([b,v],i)=><g key={b} transform={`translate(68 ${92+i*22})`}><text y="10" fill="rgba(255,255,255,.55)" fontSize="9">{b}</text><rect x="78" y="2" width="110" height="8" rx="4" fill="rgba(255,255,255,.08)"/><rect x="78" y="2" width={v*1.1} height="8" rx="4" fill="rgba(45,212,191,.45)"/></g>)}</svg>;
}

function Vault() {
  const folders = ["Memo", "Deck", "Terms", "Governance", "Compliance", "Reporting"];
  return <svg viewBox="0 0 320 240" className="h-full w-full"><rect x="62" y="38" width="196" height="156" rx="24" fill="rgba(34,197,94,.07)" stroke="rgba(34,197,94,.22)"/><circle cx="160" cy="116" r="42" fill="none" stroke="rgba(34,197,94,.22)"/><path d="M142 112 v-14 a18 18 0 0 1 36 0 v14" fill="none" stroke="rgba(34,197,94,.45)"/><rect x="136" y="112" width="48" height="34" rx="8" fill="rgba(34,197,94,.14)" stroke="rgba(34,197,94,.3)"/>{folders.map((f,i)=><text key={f} x={86+(i%2)*92} y={58+Math.floor(i/2)*62} fill="rgba(255,255,255,.52)" fontSize="9">{f}</text>)}</svg>;
}

function Proof() {
  const cards = ["CVC", "Founder", "Fund", "AI OS", "Exit"];
  return <svg viewBox="0 0 320 240" className="h-full w-full">{cards.map((c,i)=><g key={c} transform={`translate(${44+(i%2)*118} ${34+Math.floor(i/2)*58+(i%2)*12})`}><rect width={i===4?180:100} height="46" rx="14" fill="rgba(244,114,182,.09)" stroke="rgba(244,114,182,.22)"/><text x="16" y="27" fill="rgba(255,255,255,.68)" fontSize="10">{c}</text></g>)}</svg>;
}

function Trust() {
  return <svg viewBox="0 0 320 240" className="h-full w-full"><circle cx="160" cy="120" r="38" fill="rgba(34,197,94,.08)" stroke="rgba(34,197,94,.25)"/><text x="160" y="124" textAnchor="middle" fill="rgba(255,255,255,.72)" fontSize="10">Trust Layer</text>{trust.map((t,i)=>{const a=(i/trust.length)*Math.PI*2-Math.PI/2; const x=160+Math.cos(a)*92; const y=120+Math.sin(a)*70; return <g key={t}><line x1="160" y1="120" x2={x} y2={y} stroke="rgba(34,197,94,.18)"/><Badge text={t} x={x} y={y}/></g>;})}</svg>;
}

function Drawing({ kind }: { kind: ArtworkKind }) {
  if (kind === "network") return <Network />;
  if (kind === "capital") return <Capital />;
  if (kind === "stack") return <Stack />;
  if (kind === "mission") return <Mission />;
  if (kind === "passport") return <Passport />;
  if (kind === "score") return <Score />;
  if (kind === "vault") return <Vault />;
  if (kind === "proof") return <Proof />;
  return <Trust />;
}

export function RouteArtwork() {
  const { pathname } = useLocation();
  const config = artworkByPath[pathname];
  if (!config) return null;
  return (
    <div className="route-artwork pointer-events-none absolute right-4 top-28 z-[0] hidden h-[260px] w-[360px] opacity-70 xl:block 2xl:right-[calc((100vw-1240px)/2)]" aria-hidden="true">
      <div className="absolute inset-0 rounded-[32px] border border-white/[0.06] bg-background/20 shadow-[0_24px_90px_rgba(0,0,0,.28)] backdrop-blur-xl" />
      <div className="relative h-full w-full p-4">
        <div className="mb-1 pl-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground/45">{config.label}</div>
        <Drawing kind={config.kind} />
      </div>
    </div>
  );
}
