import type { DemoLocale, Direction } from "@/lib/i18n/direction";

export type PlanTier = "Basic" | "Pro" | "Smart" | "Enterprise";
export type RiskLevel = "Low" | "Medium" | "High" | "Critical";
export type OperationalStatus =
  | "Active"
  | "Needs Review"
  | "Simulation Only"
  | "Pending Approval"
  | "Blocked"
  | "Ready"
  | "Ready with constraints"
  | "Needs evidence updates";

export type DemoCompany = {
  complianceProfile: string[];
  dataResidency: string;
  employeeCount: number;
  headquarters: string;
  id: string;
  industry: string;
  name: string;
  plan: PlanTier;
  primaryWorkspace: string;
  region: string;
  status: string;
  workspaceCount: number;
};

export type DemoWorkspace = {
  activeAiEmployees: number;
  activeWorkflows: number;
  id: string;
  monthlyAiCost: number;
  name: string;
  owner: string;
  plan: PlanTier;
  primaryOutcome: string;
  riskStatus: RiskLevel;
};

export type DemoUser = {
  direction: Direction;
  email: string;
  id: string;
  locale: DemoLocale;
  name: string;
  permissions: string[];
  role: string;
  team: string;
};

export type DemoAiEmployee = {
  health: number;
  id: string;
  knowledgeSources: string[];
  lastReviewed: string;
  memoryScope: string;
  monthlyCost: number;
  name: string;
  nextReviewDue: string;
  outcomeMetric: string;
  owner: string;
  planRequired: PlanTier;
  primaryOutcome: string;
  riskLevel: RiskLevel;
  status: OperationalStatus;
  tools: string[];
  version: string;
  workspace: string;
};

export type DemoWorkflow = {
  assignedAiEmployees: string[];
  avgRuntime: string;
  businessOutcome: string;
  humanApprovalRequired: boolean;
  id: string;
  lastRun: string;
  monthlyRuns: number;
  name: string;
  owner: string;
  riskLevel: RiskLevel;
  status: OperationalStatus;
  steps: number;
  successRate: number;
  trigger: string;
  workspace: string;
};

export type DemoMarketplaceTemplate = {
  category: string;
  creator: string;
  id: string;
  installs: number;
  name: string;
  outcomes: string[];
  permissionRisk: RiskLevel;
  planRequired: PlanTier;
  pricing: string;
  rating: number;
  regionCompatibility: string[];
  reviews: number;
  shortDescription: string;
  trustLabel: string;
  type: string;
};

export type DemoApproval = {
  approver: string;
  decisionOptions: string[];
  dueAt: string;
  id: string;
  reason: string;
  requestedAt: string;
  requester: string;
  riskLevel: RiskLevel;
  status: string;
  title: string;
};

export type DemoIncident = {
  affectedAiEmployee: string;
  affectedSurface: string;
  auditAvailable: boolean;
  customerImpact: string;
  detectedAt: string;
  id: string;
  nextAction: string;
  owner: string;
  severity: RiskLevel;
  status: string;
  title: string;
};

export type DemoAuditLog = {
  action: string;
  actor: string;
  evidence: string;
  id: string;
  object: string;
  result: string;
  riskLevel: RiskLevel;
  timestamp: string;
};

export type DemoPricingPlan = {
  aiEmployees: string;
  audience: string;
  bestFor: string;
  governance: string;
  marketplace: string;
  name: PlanTier;
  priceLabel: string;
  support: string;
  workflows: string;
};

export type DemoLaunchGate = {
  name: string;
  score: number;
  status: OperationalStatus;
};

export type DemoScenario =
  | "default"
  | "loading"
  | "empty"
  | "error"
  | "permission_blocked"
  | "plan_limited"
  | "region_blocked"
  | "approval_required"
  | "degraded";
