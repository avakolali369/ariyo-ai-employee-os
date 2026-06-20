import {
  demoAiEmployees,
  demoApprovals,
  demoCompany,
  demoIncidents,
  demoLaunchGates,
  demoMarketplaceTemplates,
  demoPricingPlans,
  demoUsers,
  demoWorkflows,
  demoWorkspaces,
} from "@/lib/demo-data/demoData";
import { getLocalizedDemoCopy } from "@/lib/demo-data/demoLocalization";
import type { DemoLocale, Direction } from "@/lib/i18n/direction";
import { getDirection } from "@/lib/i18n/direction";

export function selectDashboardOverview() {
  return {
    company: demoCompany,
    metrics: {
      activeAiEmployees: demoAiEmployees.filter((employee) => employee.status === "Active").length,
      activeWorkflows: demoWorkflows.filter((workflow) => workflow.status === "Active").length,
      pendingApprovals: demoApprovals.filter((approval) => approval.status !== "Approved").length,
      openIncidents: demoIncidents.filter((incident) => incident.status !== "Resolved").length,
      monthlyAiCost: demoWorkspaces.reduce((total, workspace) => total + workspace.monthlyAiCost, 0),
      readinessScore: Math.round(
        demoLaunchGates.reduce((total, gate) => total + gate.score, 0) / demoLaunchGates.length,
      ),
    },
    aiEmployees: demoAiEmployees,
    workflows: demoWorkflows,
    approvals: demoApprovals,
    incidents: demoIncidents,
    recommendations: demoMarketplaceTemplates,
  };
}

export function selectCurrentUser(locale: DemoLocale = "en-DE") {
  return demoUsers.find((user) => user.locale === locale) ?? demoUsers[0];
}

export function selectMarketplaceRecommendations(plan: string, region: string) {
  return demoMarketplaceTemplates.filter(
    (template) =>
      (template.planRequired === plan || plan === "Smart" || plan === "Enterprise") &&
      template.regionCompatibility.includes(region),
  );
}

export function selectPricingPlans() {
  return demoPricingPlans;
}

export function selectLaunchReadinessSummary() {
  return {
    overallScore: 84,
    mode: "Enterprise Pilot",
    status: "Conditionally ready",
    openBlockers: 4,
    criticalBlockers: 0,
    gates: demoLaunchGates,
  };
}

export function selectLocalizedShell(locale: DemoLocale | string): {
  copy: ReturnType<typeof getLocalizedDemoCopy>;
  direction: Direction;
} {
  return {
    copy: getLocalizedDemoCopy(locale),
    direction: getDirection(locale),
  };
}
