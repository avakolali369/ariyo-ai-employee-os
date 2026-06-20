import { createScenarioError } from "@/lib/api/errors";
import { waitForMockLatency } from "@/lib/api/latency";
import { getMockScenarioFromLocation } from "@/lib/api/state";
import type { ApiMeta, ApiResult, AriyoApiClient } from "@/lib/api/types";
import {
  selectDashboardOverview,
  selectLaunchReadinessSummary,
  selectPricingPlans,
} from "@/lib/demo-data/selectors";

function createMeta(latencyMs: number): ApiMeta {
  return {
    generatedAt: new Date().toISOString(),
    latencyMs,
    requestId: `mock_${crypto.randomUUID()}`,
    scenario: getMockScenarioFromLocation(),
    servedBy: "mock",
  };
}

async function withMockResponse<T>(data: T): Promise<ApiResult<T>> {
  const scenario = getMockScenarioFromLocation();
  const latencyMs = scenario === "loading-slow" ? 1200 : 300;

  await waitForMockLatency(latencyMs);

  const error = createScenarioError(scenario);
  const meta = createMeta(latencyMs);

  if (error) {
    return {
      ok: false,
      error,
      meta,
    };
  }

  return {
    ok: true,
    data,
    meta,
  };
}

export const mockApiClient: AriyoApiClient = {
  dashboard: {
    getDashboardOverview: () => withMockResponse(selectDashboardOverview()),
  },
  pricing: {
    getPricingPlans: () => withMockResponse(selectPricingPlans()),
  },
  launchReadiness: {
    getLaunchReadinessOverview: () => withMockResponse(selectLaunchReadinessSummary()),
  },
};
