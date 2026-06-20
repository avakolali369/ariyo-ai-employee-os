# Ariyo Frontend API Mock Layer Plan

## Core Contract

Ariyo Frontend API Mock Layer Plan is not a temporary fake backend, hardcoded component shortcut, or throwaway demo utility.

It is the governed implementation plan that tells Codex, frontend engineers, product designers, backend engineers, QA reviewers, and AI-assisted builders how to create a realistic, typed, state-aware, latency-aware, error-aware, localized, replaceable API mock layer for Ariyo's MVP product surfaces.

The mock API layer must let Ariyo build, demo, test, and validate the frontend before the production backend is complete, without creating fake product behavior that will later need to be rewritten from scratch.

Codex must build the mock API as a migration bridge to the real backend, not as a disconnected frontend hack.

---

## 1. Purpose

This skill defines how the Ariyo frontend should expose and consume mock API contracts during MVP implementation.

It must support:

- Landing and Pricing surfaces where public content may be static or mock-driven.
- Authenticated App Shell and Dashboard.
- AI Employee Builder.
- AI Employee Detail.
- Workflow Builder.
- Marketplace Homepage.
- Template Detail.
- Enterprise Admin preview.
- Trust Center preview.
- Customer Success Console.
- Internal Ops Command Center.
- Launch Readiness Command Center.
- Demo flow and investor/customer walkthroughs.

The mock layer must provide the same mental model as a real API:

- typed request inputs;
- typed response objects;
- predictable status codes;
- realistic latency;
- loading states;
- empty states;
- error states;
- blocked/permission states;
- optimistic update behavior;
- audit-like mutation results;
- future migration path to backend endpoints.

---

## 2. Non-Negotiable Rules

### 2.1 Do Not Hardcode Data Inside Components

Codex must not put demo data directly inside page components, cards, tables, charts, modals, drawers, or forms.

All demo records must flow through the mock API layer or selectors connected to the demo data layer.

### 2.2 Mock API Must Be Typed

Every endpoint must have explicit types for:

- request input;
- response payload;
- success result;
- error result;
- loading state;
- permission-denied state;
- validation error state where applicable.

### 2.3 Mock API Must Be Replaceable

A real backend client must be able to replace the mock client without rewriting product UI.

Ariyo must preserve stable API client function names, response shapes, domain types, and error shapes.

### 2.4 No Fake Success-Only Product

Codex must implement both happy paths and operational friction:

- slow request;
- failed request;
- permission denied;
- plan limit reached;
- approval required;
- compliance blocked;
- region blocked;
- dependency missing;
- validation error;
- partial data;
- empty workspace;
- degraded system state.

### 2.5 RTL/LTR Law

Persian/Farsi and Arabic UI surfaces must be RTL and right-aligned across all elements.

English and European LTR UI surfaces must be LTR and left-aligned across all elements.

This applies to:

- API-provided labels;
- localized titles;
- empty states;
- validation errors;
- toast messages;
- modal copy;
- table column alignment;
- timeline alignment;
- drawer placement;
- form labels;
- metric cards;
- charts and legends;
- page-level navigation.

If an API response includes localized copy, the consuming UI must render direction based on the active locale, not based on the text content alone.

---

## 3. Required File Structure

Codex must create the mock API layer using this structure unless the project already has an equivalent convention.

```txt
src/
  lib/
    api/
      client.ts
      mockClient.ts
      realClient.ts
      types.ts
      errors.ts
      latency.ts
      state.ts
      endpoints/
        auth.ts
        dashboard.ts
        aiEmployees.ts
        workflows.ts
        marketplace.ts
        templates.ts
        enterpriseAdmin.ts
        trustCenter.ts
        customerSuccess.ts
        internalOps.ts
        launchReadiness.ts
        pricing.ts
      handlers/
        mswHandlers.ts
      fixtures/
        index.ts
      selectors/
        index.ts
```

If the project does not use `src/lib`, Codex may adapt to the existing structure, but it must keep the same logical boundaries.

---

## 4. API Client Boundary

The frontend must call domain client functions, not fixtures directly.

### Required Client Interface

```ts
export interface AriyoApiClient {
  auth: AuthApi;
  dashboard: DashboardApi;
  aiEmployees: AIEmployeesApi;
  workflows: WorkflowsApi;
  marketplace: MarketplaceApi;
  templates: TemplatesApi;
  enterpriseAdmin: EnterpriseAdminApi;
  trustCenter: TrustCenterApi;
  customerSuccess: CustomerSuccessApi;
  internalOps: InternalOpsApi;
  launchReadiness: LaunchReadinessApi;
  pricing: PricingApi;
}
```

### Required Client Switch

The app must support a single configuration flag:

```ts
const API_MODE = 'mock' | 'real';
```

During MVP frontend implementation, default to `mock`.

When backend contracts become available, Codex must create `realClient.ts` without changing page-level code.

---

## 5. Standard Response Shape

All mock endpoints must return one of these shapes:

```ts
type ApiSuccess<T> = {
  ok: true;
  data: T;
  meta?: ApiMeta;
};

type ApiFailure = {
  ok: false;
  error: ApiError;
  meta?: ApiMeta;
};

type ApiResult<T> = ApiSuccess<T> | ApiFailure;
```

### Standard Meta

```ts
type ApiMeta = {
  requestId: string;
  servedBy: 'mock' | 'real';
  latencyMs: number;
  scenario?: MockScenarioKey;
  generatedAt: string;
};
```

### Standard Error

```ts
type ApiError = {
  code:
    | 'VALIDATION_ERROR'
    | 'NOT_FOUND'
    | 'PERMISSION_DENIED'
    | 'PLAN_LIMIT_REACHED'
    | 'APPROVAL_REQUIRED'
    | 'REGION_BLOCKED'
    | 'COMPLIANCE_BLOCKED'
    | 'DEPENDENCY_MISSING'
    | 'CONFLICT'
    | 'RATE_LIMITED'
    | 'SERVICE_DEGRADED'
    | 'UNKNOWN_ERROR';
  title: string;
  message: string;
  fieldErrors?: Record<string, string>;
  actionLabel?: string;
  supportReference?: string;
};
```

---

## 6. Mock Scenario System

Codex must implement scenario controls so every surface can be tested without rewriting data.

### Required Scenarios

```ts
type MockScenarioKey =
  | 'happy-path'
  | 'empty-workspace'
  | 'loading-slow'
  | 'service-degraded'
  | 'permission-denied'
  | 'plan-limit-reached'
  | 'approval-required'
  | 'region-blocked'
  | 'compliance-blocked'
  | 'dependency-missing'
  | 'validation-error'
  | 'partial-data';
```

### Scenario Source

Codex may read the scenario from:

- environment variable;
- URL query param;
- local development panel;
- storybook control;
- mock API configuration.

A recommended URL pattern:

```txt
?demoScenario=permission-denied
```

---

## 7. Latency Rules

Mock API must simulate latency without making the UI painful.

### Default Latency

- normal read request: 250–600ms;
- dashboard aggregate: 600–900ms;
- simulation run: 1000–1800ms;
- mutation request: 400–900ms;
- evidence export: 1200–2200ms;
- service degraded: 1800–3000ms.

### Rule

Codex must not use zero-latency mocks for all requests because that hides loading and skeleton state bugs.

---

## 8. Domain Endpoint Plan

## 8.1 Auth and Workspace

Required endpoints:

```ts
getCurrentUser()
getCurrentWorkspace()
switchWorkspace(workspaceId)
getUserPermissions()
```

Must support:

- owner;
- admin;
- manager;
- operator;
- creator;
- partner;
- customer success manager;
- internal ops;
- viewer.

Mock responses must include plan, locale, direction, role, permissions, and workspace context.

---

## 8.2 Dashboard

Required endpoints:

```ts
getDashboardOverview()
getDashboardMetrics()
getDashboardActivity()
getDashboardAlerts()
getDashboardRecommendations()
```

Must power:

- AI Employee summary;
- workflow health;
- outcomes;
- approvals;
- alerts;
- marketplace suggestions;
- governance status;
- cost snapshot.

Dashboard data must connect to the same AI Employee, Workflow, Template, Incident, and Approval records used on detail pages.

---

## 8.3 AI Employees

Required endpoints:

```ts
listAIEmployees(params)
getAIEmployee(employeeId)
createAIEmployee(input)
updateAIEmployee(employeeId, input)
simulateAIEmployee(employeeId, scenario)
launchAIEmployee(employeeId)
pauseAIEmployee(employeeId)
archiveAIEmployee(employeeId)
getAIEmployeeRuns(employeeId)
getAIEmployeeMemory(employeeId)
getAIEmployeePermissions(employeeId)
getAIEmployeeVersions(employeeId)
```

Must support:

- draft;
- simulation;
- review required;
- active;
- paused;
- degraded;
- incident open;
- archived.

Mutations must return audit-like results with timestamp, actor, and next recommended action.

---

## 8.4 Workflows

Required endpoints:

```ts
listWorkflows(params)
getWorkflow(workflowId)
createWorkflow(input)
updateWorkflow(workflowId, input)
simulateWorkflow(workflowId, scenario)
launchWorkflow(workflowId)
pauseWorkflow(workflowId)
getWorkflowRuns(workflowId)
getWorkflowVersions(workflowId)
getWorkflowErrors(workflowId)
```

Must support:

- trigger validation;
- step validation;
- AI Employee assignment;
- tool dependency check;
- approval gate preview;
- simulation output;
- production launch checklist.

---

## 8.5 Marketplace Homepage

Required endpoints:

```ts
searchMarketplaceTemplates(params)
getMarketplaceCollections()
getMarketplaceCategories()
getRecommendedTemplates(context)
getPrivateCatalogTemplates(workspaceId)
```

Must support:

- search;
- filters;
- featured collections;
- certified templates;
- private catalog;
- promoted templates;
- plan-aware recommendations;
- region-aware results.

---

## 8.6 Template Detail

Required endpoints:

```ts
getTemplate(templateId)
getTemplateInstallEligibility(templateId, workspaceId)
getTemplateReviews(templateId)
getTemplateVersions(templateId)
getTemplateDependencies(templateId)
requestTemplateApproval(templateId)
installTemplate(templateId, input)
uninstallTemplate(templateId)
```

Must support:

- installable;
- approval required;
- plan upgrade required;
- permission denied;
- region blocked;
- dependency missing;
- already installed;
- update available.

---

## 8.7 Enterprise Admin

Required endpoints:

```ts
getEnterpriseOverview()
getUsersAndRoles()
updateUserRole(userId, role)
getPolicies()
updatePolicy(policyId, input)
getApprovalQueue()
approveRequest(requestId)
rejectRequest(requestId)
getSSOSettings()
getSCIMSettings()
getMarketplaceControls()
getAuditLogs(params)
getComplianceEvidence()
```

Must support:

- policy enforcement;
- role-based restrictions;
- approval workflow;
- audit evidence;
- enterprise plan preview;
- SSO/SCIM configuration states.

---

## 8.8 Trust Center

Required endpoints:

```ts
getTrustOverview()
getSecurityPosture()
getComplianceEvidencePublic()
getStatusSummary()
getIncidentHistory()
requestEvidenceAccess(input)
getDataResidencySummary()
```

Must support:

- public mode;
- enterprise gated mode;
- evidence request pending;
- incident active;
- degraded service;
- all systems operational.

---

## 8.9 Customer Success Console

Required endpoints:

```ts
listCustomerAccounts(params)
getCustomerAccount(accountId)
getCustomerHealth(accountId)
getCustomerAdoption(accountId)
getCustomerRisks(accountId)
getCustomerSuccessPlaybooks(accountId)
getRenewalExpansionSignals(accountId)
createSuccessTask(input)
```

Must support:

- health score;
- onboarding progress;
- adoption metrics;
- renewal risk;
- expansion signal;
- support escalation;
- executive business review readiness.

---

## 8.10 Internal Ops Command Center

Required endpoints:

```ts
getOpsOverview()
getRuntimeHealth()
getIncidentQueue()
getSupportEscalations()
getMarketplaceHealth()
getTemplateHealth()
getCustomerRiskQueue()
assignOpsOwner(itemId, ownerId)
resolveIncident(incidentId, input)
```

Must support:

- incident triage;
- owner assignment;
- queue filtering;
- risk severity;
- audit trail;
- launch blocker linkage.

---

## 8.11 Launch Readiness

Required endpoints:

```ts
getLaunchReadinessOverview(mode)
getLaunchGates(mode)
getLaunchBlockers(mode)
getLaunchEvidence(mode)
getLaunchDecisionQueue(mode)
updateLaunchGate(gateId, input)
exportLaunchReport(mode)
```

Must support launch modes:

- MVP readiness;
- investor demo readiness;
- enterprise pilot readiness;
- marketplace alpha readiness;
- trust/compliance readiness;
- localization readiness.

---

## 8.12 Pricing

Required endpoints:

```ts
getPricingPlans(locale)
getPlanComparison(locale)
getUsageEstimate(input)
getPlanEligibility(workspaceId)
```

Must support:

- Basic;
- Pro;
- Smart;
- Enterprise;
- monthly/yearly toggle;
- plan limit warnings;
- AI usage messaging;
- marketplace access by plan;
- governance controls by plan.

---

## 9. Mock API Implementation Strategy

Codex should choose one of these strategies depending on project setup.

### Option A: Local Function Mock Client

Best for fastest MVP implementation.

- Use typed async functions.
- Add latency helpers.
- Import fixtures from demo data.
- Return `ApiResult<T>`.

### Option B: MSW Mock Service Worker

Best when the project needs browser-level request simulation.

- Define REST handlers or GraphQL handlers.
- Keep endpoint shapes close to future backend.
- Use fixtures and scenario switch.
- Allow network inspector visibility.

### Option C: Hybrid

Recommended for Ariyo.

- Page components call domain client functions.
- Domain client can use local fixtures during early MVP.
- MSW can be added for integration testing and Storybook.
- Real client later implements the same `AriyoApiClient` interface.

---

## 10. Optimistic Update Rules

Codex may implement optimistic UI only for safe actions:

- assigning owner;
- marking notification read;
- saving draft configuration;
- toggling local filters;
- adding comment;
- updating non-critical metadata.

Codex must not optimistically finalize:

- launching AI Employee;
- installing template;
- approving enterprise request;
- changing policy;
- changing role;
- exporting compliance evidence;
- resolving incident;
- changing billing plan.

These require server confirmation, even in mock mode.

---

## 11. Loading, Empty, Error, Blocked State Contract

Every page that uses mock API must implement these states:

1. loading;
2. success with data;
3. empty but valid;
4. error recoverable;
5. permission denied;
6. plan blocked;
7. compliance/region blocked where relevant;
8. partial data where relevant.

Codex must not mark a page complete if it only supports the success state.

---

## 12. Future Backend Migration Path

The mock API layer must prepare for backend migration in four phases.

### Phase 1: Frontend Mock

- local typed fixtures;
- client functions;
- state scenarios;
- mock latency;
- UI states.

### Phase 2: Contract Review

- compare mock endpoint names to `api-contracts.md`;
- identify missing backend requirements;
- document shape differences.

### Phase 3: Real API Adapter

- create `realClient.ts`;
- preserve function names;
- map backend errors into `ApiError`;
- keep UI unchanged.

### Phase 4: Mock Retained for Testing

- keep mock client for demos, tests, Storybook, and degraded development;
- do not delete the mock layer after backend integration.

---

## 13. Codex Execution Order

When implementing this skill, Codex must read these files first:

1. `codex-execution-master-prompt.md`
2. `mockup-implementation-roadmap.md`
3. `mvp-build-scope-lock.md`
4. `frontend-implementation-sprint-plan.md`
5. `demo-data-seed-pack.md`
6. `frontend-demo-data-implementation-guide.md`
7. `api-contracts.md`
8. `frontend-state-data.md`
9. `frontend-forms-validation.md`
10. `frontend-testing.md`
11. current file: `frontend-api-mock-layer-plan.md`

Codex must not implement mock endpoints before the demo data layer exists.

---

## 14. Page-to-Endpoint Mapping

| Product Surface | Required API Domains |
|---|---|
| Landing Page | pricing, trustCenter optional |
| Pricing Page | pricing, planEligibility |
| Dashboard | dashboard, aiEmployees, workflows, marketplace, enterpriseAdmin |
| AI Employee Builder | aiEmployees, workflows, enterpriseAdmin |
| AI Employee Detail | aiEmployees, workflows, internalOps |
| Workflow Builder | workflows, aiEmployees, enterpriseAdmin |
| Marketplace Homepage | marketplace, templates, pricing |
| Template Detail | templates, marketplace, enterpriseAdmin |
| Enterprise Admin | enterpriseAdmin, trustCenter, pricing |
| Trust Center | trustCenter, internalOps optional |
| Customer Success Console | customerSuccess, dashboard, internalOps |
| Internal Ops Command Center | internalOps, customerSuccess, trustCenter |
| Launch Readiness Command Center | launchReadiness, internalOps, trustCenter |

---

## 15. Security and Privacy Rules

Mock data must not include:

- real customer names;
- real emails;
- real access tokens;
- real secrets;
- real invoices;
- real health data;
- real API keys;
- real personal identification data.

All mock customer identities must be fictional but realistic.

Mock API must not train the product team into unsafe patterns.

---

## 16. Testing Requirements

Codex must create tests for:

- successful endpoint response;
- permission denied response;
- validation error response;
- plan blocked response;
- loading state hook behavior;
- selector consistency;
- fixture relationship integrity;
- RTL/LTR render direction where locale changes response copy.

Recommended test categories:

```txt
api/mockClient.test.ts
api/selectors.test.ts
api/stateScenarios.test.ts
pages/dashboard.api-state.test.tsx
pages/template-detail.api-state.test.tsx
```

---

## 17. Storybook and Design Review Support

If Storybook exists, Codex should create state stories for major surfaces:

- Dashboard / Happy Path;
- Dashboard / Empty Workspace;
- Dashboard / Service Degraded;
- AI Employee Builder / Validation Error;
- Template Detail / Approval Required;
- Template Detail / Region Blocked;
- Enterprise Admin / Permission Denied;
- Trust Center / Incident Active;
- Launch Readiness / Blockers Open;
- RTL Persian View;
- LTR English View.

---

## 18. Acceptance Criteria

This skill is complete only when:

- API client interface exists;
- mock client exists;
- typed response shape exists;
- standard error shape exists;
- latency helper exists;
- scenario system exists;
- key domain endpoints exist;
- demo data is not hardcoded in components;
- at least one page uses the mock API through a client function;
- loading, empty, error, blocked states can be triggered;
- migration path to real API is documented;
- RTL/LTR behavior remains locale-aware;
- tests or test plan exist.

---

## 19. Forbidden Patterns

Codex must not:

- hardcode arrays inside page files;
- use one giant `mockData.ts` without domain boundaries;
- make every request return instantly;
- make every request succeed;
- represent enterprise permissions as a boolean only;
- ignore plan limits;
- ignore region/data residency constraints;
- ignore approvals;
- use inconsistent IDs across surfaces;
- create UI-specific response shapes that cannot become real API contracts;
- use fake copy that makes Ariyo look like a chatbot or prompt store;
- skip RTL/LTR layout validation.

---

## 20. Golden Rule

The mock API layer must make Ariyo faster to build without making Ariyo less real.

If a mock hides a product risk, it is a bad mock.

If a mock creates a frontend dependency that the backend cannot support, it is a bad mock.

If a mock makes the demo feel coherent, testable, replaceable, localized, and enterprise-ready, it is doing its job.
