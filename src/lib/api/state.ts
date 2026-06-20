import type { MockScenarioKey } from "@/lib/api/types";

export function getMockScenarioFromLocation(search = window.location.search): MockScenarioKey {
  const params = new URLSearchParams(search);
  const scenario = params.get("demoScenario");

  switch (scenario) {
    case "empty-workspace":
    case "loading-slow":
    case "service-degraded":
    case "permission-denied":
    case "plan-limit-reached":
    case "approval-required":
    case "region-blocked":
    case "compliance-blocked":
    case "dependency-missing":
    case "validation-error":
    case "partial-data":
      return scenario;
    default:
      return "happy-path";
  }
}
