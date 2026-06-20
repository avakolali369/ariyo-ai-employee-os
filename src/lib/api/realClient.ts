import type { AriyoApiClient } from "@/lib/api/types";

function notConnected(): never {
  throw new Error("Real API client is not connected during Sprint 0.");
}

export const realApiClient: AriyoApiClient = {
  dashboard: {
    getDashboardOverview: async () => notConnected(),
  },
  pricing: {
    getPricingPlans: async () => notConnected(),
  },
  launchReadiness: {
    getLaunchReadinessOverview: async () => notConnected(),
  },
};
