import {
  BadgeCheckIcon,
  BotIcon,
  LayoutDashboardIcon,
  ShieldCheckIcon,
  StoreIcon,
  WorkflowIcon,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { useDirection } from "@/lib/i18n/direction-provider";

const navItems = [
  {
    label: "Dashboard",
    to: "/app/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    label: "AI Employees",
    to: "/app/ai-employees/new",
    icon: BotIcon,
  },
  {
    label: "Workflows",
    to: "/app/workflows/wf_lead_response/builder",
    icon: WorkflowIcon,
  },
  {
    label: "Marketplace",
    to: "/app/marketplace",
    icon: StoreIcon,
  },
  {
    label: "Admin",
    to: "/app/admin",
    icon: ShieldCheckIcon,
  },
];

export function AppShell() {
  const { direction } = useDirection();

  return (
    <div className="app-shell" dir={direction}>
      <aside className="app-shell__sidebar" aria-label="Ariyo app navigation">
        <div className="app-shell__brand">
          <BadgeCheckIcon aria-hidden="true" />
          <div>
            <strong>Ariyo</strong>
            <span>AI Employee OS</span>
          </div>
        </div>
        <nav className="app-shell__nav">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink key={item.to} className="app-shell__nav-link" to={item.to}>
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
      <div className="app-shell__content">
        <header className="app-shell__topbar">
          <div>
            <span className="app-shell__eyebrow">Novara Group</span>
            <strong>Revenue Operations workspace</strong>
          </div>
          <Badge variant="info">Mock API</Badge>
        </header>
        <main className="app-shell__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
