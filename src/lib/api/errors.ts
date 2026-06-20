import type { ApiError, ApiErrorCode, MockScenarioKey } from "@/lib/api/types";

const scenarioErrorMap: Partial<Record<MockScenarioKey, ApiErrorCode>> = {
  "permission-denied": "PERMISSION_DENIED",
  "plan-limit-reached": "PLAN_LIMIT_REACHED",
  "approval-required": "APPROVAL_REQUIRED",
  "region-blocked": "REGION_BLOCKED",
  "compliance-blocked": "COMPLIANCE_BLOCKED",
  "dependency-missing": "DEPENDENCY_MISSING",
  "service-degraded": "SERVICE_DEGRADED",
  "validation-error": "VALIDATION_ERROR",
};

export function createScenarioError(scenario: MockScenarioKey): ApiError | null {
  const code = scenarioErrorMap[scenario];

  if (!code) {
    return null;
  }

  return {
    code,
    title: code.replaceAll("_", " ").toLowerCase(),
    message: "The mock API returned a governed non-happy-path state for UI validation.",
    actionLabel: "Review state",
    supportReference: `mock-${scenario}`,
  };
}
