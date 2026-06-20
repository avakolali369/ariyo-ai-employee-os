import type { DemoScenario } from "@/lib/demo-data/types";

export type DemoStateScenario = {
  code: DemoScenario;
  title: string;
  description: string;
  actionLabel?: string;
};

export const demoStateScenarios: Record<DemoScenario, DemoStateScenario> = {
  default: {
    code: "default",
    title: "Default demo state",
    description: "Canonical Novara Group data with active work and governed friction.",
  },
  loading: {
    code: "loading",
    title: "Loading",
    description: "Checking policy compatibility...",
  },
  empty: {
    code: "empty",
    title: "No AI Employees yet",
    description: "Create your first governed AI Employee or start from a certified Marketplace template.",
    actionLabel: "Create AI Employee",
  },
  error: {
    code: "error",
    title: "Could not load this surface",
    description: "The current view is safe. Retry the request before changing data.",
    actionLabel: "Retry",
  },
  permission_blocked: {
    code: "permission_blocked",
    title: "You do not have permission to view this surface",
    description: "Ask a workspace admin to grant access or request temporary review permission.",
    actionLabel: "Request access",
  },
  plan_limited: {
    code: "plan_limited",
    title: "Plan upgrade required",
    description: "This governed capability requires a Smart or Enterprise workspace.",
    actionLabel: "Review plan",
  },
  region_blocked: {
    code: "region_blocked",
    title: "Template blocked by data residency policy",
    description: "This template is not compatible with the workspace EU-Central residency rule.",
    actionLabel: "View compliant alternatives",
  },
  approval_required: {
    code: "approval_required",
    title: "Approval required",
    description: "This action needs security admin approval before launch.",
    actionLabel: "Request approval",
  },
  degraded: {
    code: "degraded",
    title: "Service degraded",
    description: "Ariyo can show existing data while the mock service recovers.",
    actionLabel: "Check status",
  },
};
