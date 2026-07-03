import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Advisory } from "./pages/Advisory";
import { Fund } from "./pages/Fund";
import { LPs } from "./pages/LPs";
import { Founders } from "./pages/Founders";
import { Platform } from "./pages/Platform";
import { CVC } from "./pages/CVC";
import { DataRoom } from "./pages/DataRoom";
import { FounderReadinessScore } from "./pages/FounderReadinessScore";
import { CVCLaunchPack } from "./pages/CVCLaunchPack";
import { Insights } from "./pages/Insights";
import { TrustCenter } from "./pages/TrustCenter";
import { TrackRecord } from "./pages/TrackRecord";
import { Cases } from "./pages/Cases";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "advisory", Component: Advisory },
      { path: "fund", Component: Fund },
      { path: "lps", Component: LPs },
      { path: "founders", Component: Founders },
      { path: "platform", Component: Platform },
      { path: "cvc", Component: CVC },
      { path: "data-room", Component: DataRoom },
      { path: "founder-readiness-score", Component: FounderReadinessScore },
      { path: "cvc-launch-pack", Component: CVCLaunchPack },
      { path: "insights", Component: Insights },
      { path: "trust-center", Component: TrustCenter },
      { path: "track-record", Component: TrackRecord },
      { path: "cases", Component: Cases },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
    ],
  },
]);