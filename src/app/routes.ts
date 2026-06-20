export type RouteSurface =
  | "public"
  | "app"
  | "marketplace"
  | "admin"
  | "trust"
  | "launch"
  | "creator"
  | "partner"
  | "ops";

export type AriyoRoute = {
  path: string;
  title: string;
  surface: RouteSurface;
  mode: "skeleton" | "foundation";
  mvpStatus: "locked" | "demo-preview" | "deferred";
  description: string;
};

export const ariyoRoutes: AriyoRoute[] = [
  {
    path: "/",
    title: "Landing Page",
    surface: "public",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Public conversion route reserved for Sprint 1.",
  },
  {
    path: "/pricing",
    title: "Pricing Page",
    surface: "public",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Plan and packaging route reserved for Sprint 1.",
  },
  {
    path: "/trust",
    title: "Trust Center Preview",
    surface: "trust",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Trust posture route reserved for a later MVP sprint.",
  },
  {
    path: "/app/dashboard",
    title: "Main Dashboard",
    surface: "app",
    mode: "foundation",
    mvpStatus: "locked",
    description: "Authenticated command surface route skeleton.",
  },
  {
    path: "/app/ai-employees/new",
    title: "AI Employee Builder",
    surface: "app",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Governed builder route skeleton.",
  },
  {
    path: "/app/ai-employees/:id",
    title: "AI Employee Detail",
    surface: "app",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "AI Employee operations route skeleton.",
  },
  {
    path: "/app/workflows/:id/builder",
    title: "Workflow Builder",
    surface: "app",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Workflow orchestration route skeleton.",
  },
  {
    path: "/app/marketplace",
    title: "Marketplace Homepage",
    surface: "marketplace",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Template discovery route skeleton.",
  },
  {
    path: "/app/marketplace/templates/:id",
    title: "Template Detail",
    surface: "marketplace",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Template install decision route skeleton.",
  },
  {
    path: "/app/admin",
    title: "Enterprise Admin Preview",
    surface: "admin",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Enterprise governance route skeleton.",
  },
  {
    path: "/internal/launch-readiness",
    title: "Launch Readiness Command Center",
    surface: "launch",
    mode: "skeleton",
    mvpStatus: "locked",
    description: "Release gate command route skeleton.",
  },
  {
    path: "/creator",
    title: "Creator Portal Preview",
    surface: "creator",
    mode: "skeleton",
    mvpStatus: "demo-preview",
    description: "Post-core demo route placeholder only.",
  },
  {
    path: "/partner",
    title: "Partner Portal Preview",
    surface: "partner",
    mode: "skeleton",
    mvpStatus: "demo-preview",
    description: "Post-core demo route placeholder only.",
  },
  {
    path: "/internal/ops",
    title: "Internal Ops Preview",
    surface: "ops",
    mode: "skeleton",
    mvpStatus: "demo-preview",
    description: "Internal operations preview placeholder only.",
  },
];

export function getRouteByPath(path: string): AriyoRoute | undefined {
  return ariyoRoutes.find((route) => route.path === path);
}
