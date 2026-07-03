import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { PageSignature } from "./PageSignature";
import { RouteArtwork } from "./RouteArtwork";

const classForPath = (path: string) => {
  if (path === "/") return "route-home";
  if (path === "/lps") return "route-lps";
  if (path === "/founders") return "route-founders";
  if (path === "/platform") return "route-platform";
  if (path === "/cvc") return "route-cvc";
  if (path === "/fund") return "route-fund";
  if (path === "/data-room") return "route-data-room";
  if (path === "/founder-readiness-score") return "route-founder-score";
  if (path === "/cvc-launch-pack") return "route-cvc-pack";
  if (path === "/track-record") return "route-track-record";
  if (path === "/cases") return "route-cases";
  if (path === "/insights") return "route-insights";
  if (path === "/trust-center") return "route-trust";
  if (path === "/contact") return "route-contact";
  return "route-default";
};

export function Root() {
  const location = useLocation();
  const routeClass = classForPath(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
        <PageSignature />
        <div className="absolute inset-0 bay-noise opacity-80" />
        <div
          className="absolute -top-56 left-1/2 h-[620px] w-[980px] -translate-x-1/2 opacity-80 blur-3xl"
          style={{ background: "var(--glow-subtle)" }}
        />
        <div className="absolute left-[-18%] top-[18%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[-16%] top-[8%] h-[460px] w-[460px] rounded-full bg-teal-400/10 blur-[105px]" />
        <div className="absolute bottom-[-22%] left-[32%] h-[560px] w-[560px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
      </div>
      <ScrollProgress />
      <Header />
      <main className={`flex-1 relative z-10 ${routeClass}`}>
        <RouteArtwork />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}