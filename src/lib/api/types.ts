import type { DemoScenario } from "@/lib/demo-data/types";

export type MockScenarioKey =
  | "happy-path"
  | "empty-workspace"
  | "loading-slow"
  | "service-degraded"
  | "permission-denied"
  | "plan-limit-reached"
  | "approval-required"
  | "region-blocked"
  | "compliance-blocked"
  | "dependency-missing"
  | "validation-error"
  | "partial-data";

export type ApiMeta = {
  generatedAt: string;
  latencyMs: number;
  requestId: string;
  scenario?: MockScenarioKey | DemoScenario;
  servedBy: "mock" | "real";
};

export type ApiErrorCode =
  | "VALIDATION_ERROR"
  | "NOT_FOUND"
  | "PERMISSION_DENIED"
  | "PLAN_LIMIT_REACHED"
  | "APPROVAL_REQUIRED"
  | "REGION_BLOCKED"
  | "COMPLIANCE_BLOCKED"
  | "DEPENDENCY_MISSING"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "SERVICE_DEGRADED"
  | "UNKNOWN_ERROR";

export type ApiError = {
  actionLabel?: string;
  code: ApiErrorCode;
  fieldErrors?: Record<string, string>;
  message: string;
  supportReference?: string;
  title: string;
};

export type ApiSuccess<T> = {
  data: T;
  meta?: ApiMeta;
  ok: true;
};

export type ApiFailure = {
  error: ApiError;
  meta?: ApiMeta;
  ok: false;
};

export type ApiResult<T> = ApiFailure | ApiSuccess<T>;

export type AriyoApiClient = {
  dashboard: {
    getDashboardOverview: () => Promise<ApiResult<unknown>>;
  };
  pricing: {
    getPricingPlans: () => Promise<ApiResult<unknown>>;
  };
  launchReadiness: {
    getLaunchReadinessOverview: () => Promise<ApiResult<unknown>>;
  };
};
