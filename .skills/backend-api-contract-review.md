# Ariyo Backend API Contract Review

## Core Contract

Ariyo Backend API Contract Review is not an API wishlist, backend backlog, or endpoint brainstorming document.

It is the governed review layer that ensures Ariyo's frontend mock API, demo data, product surfaces, backend architecture, domain model, API contracts, security model, permission runtime, enterprise governance, marketplace operations, and Codex implementation sequence all speak the same contract language before production backend work begins.

Ariyo must not allow the frontend, mock layer, backend, and product narrative to drift into four different products.

Codex must use this review before replacing mock APIs with production APIs.

---

## 1. Purpose

This skill defines how Ariyo reviews, validates, reconciles, and approves backend API contracts before implementation or migration from mock API to real backend services.

It exists to protect Ariyo from:

- frontend/backend contract drift;
- demo data that cannot map to real entities;
- UI states that have no backend state source;
- backend endpoints that ignore product-surface needs;
- permission models that do not match UI affordances;
- marketplace install flows without entitlement boundaries;
- AI Employee runtime APIs without governance and auditability;
- enterprise admin surfaces without policy-backed contracts;
- Trust Center evidence that cannot be generated from real systems;
- Codex implementing endpoints out of order;
- fake MVP behavior that later requires a full rewrite.

This review must happen after:

1. `demo-data-seed-pack.md`
2. `frontend-demo-data-implementation-guide.md`
3. `frontend-api-mock-layer-plan.md`
4. `api-contracts.md`
5. `backend-architecture.md`
6. `domain-model.md`
7. `ai-agent-permissions-runtime.md`
8. `admin-permissions.md`
9. `data-governance-privacy.md`
10. `security-threat-model.md`

It must happen before production backend implementation for MVP surfaces.

---

## 2. Non-Negotiable Review Rule

No Ariyo production API may be implemented until it has been reviewed against:

- product surface requirement;
- frontend mock API shape;
- domain model entity;
- permission model;
- audit log requirement;
- error model;
- loading/empty/blocked state behavior;
- localization and RTL/LTR metadata where relevant;
- demo data migration path;
- backend ownership boundary;
- security/privacy classification;
- versioning and future extensibility.

If any item is unknown, Codex must stop and produce a contract gap report instead of inventing backend behavior.

---

## 3. Required Source Skills

Codex must read these files before applying this skill:

### 3.1 Contract and Architecture Sources

- `backend-architecture.md`
- `api-contracts.md`
- `domain-model.md`
- `project-structure.md`
- `coding-standards.md`
- `deployment-ops.md`
- `reliability-sla.md`
- `observability-analytics-events.md`

### 3.2 Product Surface Sources

- `product-surface-map.md`
- `mvp-build-scope-lock.md`
- `frontend-implementation-sprint-plan.md`
- `mockup-implementation-roadmap.md`
- all MVP mockup spec files

### 3.3 AI Employee Sources

- `ai-employee-architecture.md`
- `workflow-automation.md`
- `knowledge-rag.md`
- `ai-agent-memory-context.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-incident-response.md`
- `ai-agent-simulation-sandbox.md`

### 3.4 Governance, Security, and Trust Sources

- `admin-permissions.md`
- `human-review-governance.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `trust-center-public-status.md`

### 3.5 Marketplace Sources

- `ai-employee-marketplace.md`
- `marketplace-installation-entitlements.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-private-catalog-controls.md`

### 3.6 Frontend Mock Sources

- `demo-data-seed-pack.md`
- `frontend-demo-data-implementation-guide.md`
- `frontend-api-mock-layer-plan.md`
- `figma-design-system-brief.md`
- `frontend-state-data.md`
- `frontend-forms-validation.md`
- `frontend-testing.md`

---

## 4. API Contract Review Object

Every endpoint or backend action must be reviewed using this object:

```ts
type ApiContractReview = {
  contractId: string
  surface: string
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  purpose: string
  ownerDomain: string
  productSurfaceSource: string[]
  frontendMockSource: string[]
  domainEntities: string[]
  requestShape: Record<string, unknown>
  responseShape: Record<string, unknown>
  permissionRequired: string[]
  auditEventRequired: string
  privacyClassification: 'public' | 'internal' | 'customer_confidential' | 'sensitive' | 'regulated'
  localizationImpact: 'none' | 'copy' | 'layout' | 'currency' | 'region' | 'timezone'
  rtlLtrImpact: boolean
  errorCodes: string[]
  emptyState: string
  loadingState: string
  blockedState: string
  observabilityEvents: string[]
  migrationRisk: 'low' | 'medium' | 'high' | 'critical'
  approvalStatus: 'draft' | 'review_required' | 'approved' | 'blocked'
}
```

Codex must not ship an endpoint without filling this review object or an equivalent structured report.

---

## 5. Standard API Response Contract

All Ariyo APIs should return predictable response envelopes unless a specific transport requires otherwise.

```ts
type AriyoApiResponse<T> = {
  ok: boolean
  data: T | null
  error: AriyoApiError | null
  meta: AriyoApiMeta
}

type AriyoApiError = {
  code: string
  message: string
  userMessage?: string
  severity: 'info' | 'warning' | 'error' | 'critical'
  retryable: boolean
  correlationId: string
  docsUrl?: string
}

type AriyoApiMeta = {
  requestId: string
  correlationId: string
  generatedAt: string
  locale?: string
  direction?: 'rtl' | 'ltr'
  pagination?: {
    cursor?: string
    hasMore: boolean
    totalEstimate?: number
  }
  permissions?: {
    canView: boolean
    canEdit: boolean
    canApprove: boolean
    canDelete: boolean
    blockedReason?: string
  }
}
```

### Review Requirement

When reviewing an endpoint, Codex must verify:

- success response matches the frontend mock layer;
- errors match UI states;
- permission metadata can drive disabled, hidden, and blocked actions;
- pagination is explicit for lists;
- locale and direction metadata are available when UI text/layout depends on API response;
- correlation IDs exist for support, audit, and incident investigation.

---

## 6. Global RTL/LTR API Rule

Ariyo UI alignment is a frontend and design-system responsibility, but backend contracts must support localization metadata when responses contain display text, locale-sensitive labels, or region-specific data.

### Law

- Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.
- English and European LTR interfaces must be LTR and left-aligned across all UI elements.

### Backend Contract Implication

Any endpoint that returns display-ready copy, localized labels, template descriptions, policy names, notification text, status labels, pricing text, evidence labels, or region-specific content must support:

```ts
type LocalizationMeta = {
  locale: 'fa-IR' | 'ar' | 'en-US' | 'en-GB' | string
  direction: 'rtl' | 'ltr'
  translated: boolean
  fallbackLocale?: string
}
```

Codex must not hardcode UI alignment from backend data. It must use locale and direction metadata plus frontend layout rules.

---

## 7. Endpoint Families for MVP Contract Review

The MVP backend contract review must cover these endpoint families first.

### 7.1 Public Website and Pricing

Required endpoints:

- `GET /public/pricing`
- `GET /public/trust-summary`
- `GET /public/marketplace-highlights`
- `POST /public/demo-request`
- `POST /public/contact-sales`

Review focus:

- public-safe response data;
- pricing package consistency with Basic/Pro/Smart/Enterprise;
- localized copy support;
- lead capture validation;
- analytics event compatibility;
- no leakage of internal trust/compliance data.

### 7.2 App Shell and Current Workspace

Required endpoints:

- `GET /me`
- `GET /workspaces`
- `GET /workspaces/:workspaceId`
- `GET /workspaces/:workspaceId/navigation`
- `GET /workspaces/:workspaceId/permissions`

Review focus:

- role-aware navigation;
- plan-aware feature visibility;
- workspace context;
- locale and direction;
- user permissions;
- enterprise policy constraints.

### 7.3 Dashboard

Required endpoints:

- `GET /workspaces/:workspaceId/dashboard/summary`
- `GET /workspaces/:workspaceId/dashboard/ai-employees`
- `GET /workspaces/:workspaceId/dashboard/workflows`
- `GET /workspaces/:workspaceId/dashboard/approvals`
- `GET /workspaces/:workspaceId/dashboard/alerts`
- `GET /workspaces/:workspaceId/dashboard/recommendations`

Review focus:

- dashboard cards can load independently;
- error states are per section, not whole page only;
- outcome metrics match demo data and real domain model;
- approvals include owner and due date;
- alerts include severity, source, and action path;
- marketplace recommendations include compatibility flags.

### 7.4 AI Employee Builder

Required endpoints:

- `POST /workspaces/:workspaceId/ai-employees/drafts`
- `GET /workspaces/:workspaceId/ai-employees/drafts/:draftId`
- `PATCH /workspaces/:workspaceId/ai-employees/drafts/:draftId`
- `POST /workspaces/:workspaceId/ai-employees/drafts/:draftId/simulate`
- `POST /workspaces/:workspaceId/ai-employees/drafts/:draftId/review`
- `POST /workspaces/:workspaceId/ai-employees/drafts/:draftId/launch`

Review focus:

- builder step persistence;
- draft validation;
- role definition;
- tools and knowledge access;
- permission gates;
- simulation results;
- human review requirements;
- launch checklist;
- audit trail.

### 7.5 AI Employee Detail

Required endpoints:

- `GET /workspaces/:workspaceId/ai-employees/:employeeId`
- `GET /workspaces/:workspaceId/ai-employees/:employeeId/outcomes`
- `GET /workspaces/:workspaceId/ai-employees/:employeeId/activity`
- `GET /workspaces/:workspaceId/ai-employees/:employeeId/memory`
- `GET /workspaces/:workspaceId/ai-employees/:employeeId/tools`
- `GET /workspaces/:workspaceId/ai-employees/:employeeId/versions`
- `GET /workspaces/:workspaceId/ai-employees/:employeeId/incidents`
- `PATCH /workspaces/:workspaceId/ai-employees/:employeeId/settings`
- `POST /workspaces/:workspaceId/ai-employees/:employeeId/pause`
- `POST /workspaces/:workspaceId/ai-employees/:employeeId/resume`

Review focus:

- sensitive memory visibility;
- permission-based actions;
- pause/resume auditability;
- version history;
- incident linkage;
- cost and usage metrics;
- governance state.

### 7.6 Workflow Builder

Required endpoints:

- `POST /workspaces/:workspaceId/workflows/drafts`
- `GET /workspaces/:workspaceId/workflows/drafts/:draftId`
- `PATCH /workspaces/:workspaceId/workflows/drafts/:draftId`
- `POST /workspaces/:workspaceId/workflows/drafts/:draftId/simulate`
- `POST /workspaces/:workspaceId/workflows/drafts/:draftId/launch`
- `GET /workspaces/:workspaceId/workflows/:workflowId`
- `GET /workspaces/:workspaceId/workflows/:workflowId/runs`

Review focus:

- trigger schema;
- step schema;
- AI Employee assignment;
- human approval gates;
- error path design;
- rollout state;
- versioning;
- simulation logs.

### 7.7 Marketplace Homepage

Required endpoints:

- `GET /marketplace/home`
- `GET /marketplace/search`
- `GET /marketplace/categories`
- `GET /marketplace/recommendations`
- `GET /marketplace/private-catalog`

Review focus:

- search and filter query shape;
- trust labels;
- plan compatibility;
- region compatibility;
- private catalog visibility;
- sponsored/promoted template disclosure;
- enterprise policy restrictions.

### 7.8 Template Detail and Install

Required endpoints:

- `GET /marketplace/templates/:templateId`
- `GET /marketplace/templates/:templateId/eligibility`
- `GET /marketplace/templates/:templateId/permissions`
- `GET /marketplace/templates/:templateId/dependencies`
- `POST /marketplace/templates/:templateId/install-preview`
- `POST /marketplace/templates/:templateId/install-request`
- `POST /marketplace/templates/:templateId/install`
- `POST /marketplace/templates/:templateId/uninstall`

Review focus:

- install eligibility;
- approval requirement;
- permissions preview;
- data access disclosure;
- dependencies;
- region restrictions;
- pricing impact;
- installed/blocked states;
- auditability.

### 7.9 Enterprise Admin

Required endpoints:

- `GET /enterprise/:orgId/admin/overview`
- `GET /enterprise/:orgId/users`
- `GET /enterprise/:orgId/roles`
- `GET /enterprise/:orgId/policies`
- `PATCH /enterprise/:orgId/policies/:policyId`
- `GET /enterprise/:orgId/approvals`
- `POST /enterprise/:orgId/approvals/:approvalId/approve`
- `POST /enterprise/:orgId/approvals/:approvalId/reject`
- `GET /enterprise/:orgId/audit-logs`
- `GET /enterprise/:orgId/sso-scim/status`

Review focus:

- role-based access;
- policy enforcement;
- approval workflow;
- audit logs;
- SSO/SCIM status;
- marketplace controls;
- data residency;
- enterprise compliance evidence.

### 7.10 Trust Center and Evidence

Required endpoints:

- `GET /trust/status`
- `GET /trust/security-posture`
- `GET /trust/compliance-evidence`
- `GET /trust/incidents`
- `POST /trust/evidence-request`
- `GET /trust/data-residency`

Review focus:

- public vs private evidence boundary;
- uptime/status source of truth;
- incident disclosure rules;
- evidence request approval;
- enterprise-only documents;
- no unsupported compliance claims.

### 7.11 Customer Success Console

Required endpoints:

- `GET /internal/customer-success/accounts`
- `GET /internal/customer-success/accounts/:accountId`
- `GET /internal/customer-success/accounts/:accountId/health`
- `GET /internal/customer-success/accounts/:accountId/playbooks`
- `GET /internal/customer-success/accounts/:accountId/risks`
- `GET /internal/customer-success/accounts/:accountId/renewal`
- `GET /internal/customer-success/accounts/:accountId/ebr`

Review focus:

- internal-only permissions;
- health score explainability;
- renewal and expansion signals;
- risk ownership;
- playbook actionability;
- customer privacy.

### 7.12 Internal Ops Command Center

Required endpoints:

- `GET /internal/ops/overview`
- `GET /internal/ops/incidents`
- `GET /internal/ops/queues`
- `GET /internal/ops/runtime-health`
- `GET /internal/ops/marketplace-health`
- `GET /internal/ops/customer-risk`
- `POST /internal/ops/incidents/:incidentId/assign`
- `POST /internal/ops/incidents/:incidentId/escalate`

Review focus:

- internal-only access;
- incident ownership;
- severity rules;
- auditability;
- operational metrics;
- trust and support escalation linkage.

### 7.13 Launch Readiness

Required endpoints:

- `GET /internal/launch-readiness/summary`
- `GET /internal/launch-readiness/gates`
- `GET /internal/launch-readiness/blockers`
- `GET /internal/launch-readiness/evidence`
- `POST /internal/launch-readiness/blockers/:blockerId/resolve`
- `POST /internal/launch-readiness/report/export`

Review focus:

- readiness score source;
- gate ownership;
- blocker evidence;
- launch report generation;
- audit trail;
- go/no-go decision path.

---

## 8. Contract Drift Detection

Codex must detect drift between these layers:

| Layer | Drift Example | Required Action |
|---|---|---|
| Mock data vs domain model | `aiEmployee.status = "great"` but real status enum lacks it | Normalize enum or report gap |
| UI state vs API state | UI has blocked install but API has no blocked reason | Add blocked reason contract |
| Frontend mock vs backend | Mock returns nested owner object, backend returns ownerId only | Choose and document one contract |
| Permission model vs UI | UI shows Approve but API lacks approval permission | Add permission metadata |
| Audit requirement vs endpoint | Pause AI Employee has no audit event | Block contract |
| Pricing page vs billing API | Plan labels differ | Align pricing package enum |
| Trust Center vs compliance API | UI claims certification not in evidence store | Remove claim or add evidence source |

Codex must output a drift report before implementation when drift exists.

---

## 9. API Error Model Review

Every endpoint must define errors that map to UI states.

### Standard Error Codes

- `UNAUTHORIZED`
- `FORBIDDEN`
- `NOT_FOUND`
- `VALIDATION_ERROR`
- `PLAN_LIMIT_REACHED`
- `POLICY_BLOCKED`
- `APPROVAL_REQUIRED`
- `REGION_RESTRICTED`
- `DEPENDENCY_MISSING`
- `TEMPLATE_UNSAFE`
- `RUNTIME_UNAVAILABLE`
- `SIMULATION_FAILED`
- `INSTALL_FAILED`
- `RATE_LIMITED`
- `CONFLICT`
- `INTERNAL_ERROR`

### Review Rule

Codex must verify that each error has:

- user-safe message;
- technical message where needed;
- retryability;
- severity;
- correlation ID;
- UI state mapping;
- analytics event;
- audit event where relevant.

---

## 10. Permission and Policy Contract Review

Every action endpoint must answer three questions:

1. Who can do this?
2. Under what policy constraints?
3. What audit event is created?

### Permission Metadata Pattern

```ts
type ActionPermission = {
  action: string
  allowed: boolean
  requiredRole?: string
  blockedByPolicy?: string
  requiresApproval?: boolean
  approvalType?: string
  blockedReason?: string
}
```

### Required Use Cases

- install template;
- approve workflow;
- launch AI Employee;
- pause AI Employee;
- change policy;
- connect integration;
- request trust evidence;
- export report;
- change billing plan;
- invite user;
- modify role.

Codex must not rely only on frontend role checks. Backend must be the enforcement source.

---

## 11. Audit Event Contract Review

Any high-impact action must emit an audit event.

### Standard Audit Event Fields

```ts
type AuditEvent = {
  id: string
  actorId: string
  actorType: 'user' | 'system' | 'ai_employee' | 'partner' | 'admin'
  action: string
  targetType: string
  targetId: string
  workspaceId?: string
  orgId?: string
  timestamp: string
  ipAddress?: string
  userAgent?: string
  before?: Record<string, unknown>
  after?: Record<string, unknown>
  reason?: string
  correlationId: string
}
```

### Required Audit Events

- AI Employee created;
- AI Employee launched;
- AI Employee paused/resumed;
- workflow launched;
- workflow approval decision;
- template install requested;
- template installed/uninstalled;
- policy changed;
- role changed;
- integration connected/disconnected;
- evidence requested;
- incident escalated;
- launch blocker resolved.

---

## 12. Observability Contract Review

Every endpoint must support observability appropriate to its risk.

### Required Observability Dimensions

- request count;
- latency;
- error rate;
- permission denial rate;
- policy blocked rate;
- retry rate;
- endpoint-specific business event;
- correlation ID;
- user/workspace/org context;
- plan tier;
- locale and region where relevant.

High-risk endpoints must additionally support:

- audit trail;
- incident linkage;
- escalation metadata;
- anomaly flags;
- cost impact.

---

## 13. Backend Migration Gates

Mock API can be replaced by real API only when these gates pass:

### Gate 1: Shape Match

Real API response shape matches mock response shape or documented adapter exists.

### Gate 2: State Match

Real API supports loading, empty, error, blocked, approval-required, plan-limited, region-restricted, and permission-denied states used by UI.

### Gate 3: Permission Match

Backend enforces every action the UI exposes.

### Gate 4: Audit Match

Every high-impact action emits an audit event.

### Gate 5: Observability Match

Endpoint has metrics, logs, correlation IDs, and error reporting.

### Gate 6: Security Match

Endpoint follows data classification, privacy, and tenancy boundaries.

### Gate 7: Localization Match

Endpoint supports locale, direction, region, timezone, and currency metadata where relevant.

### Gate 8: Test Match

Contract tests pass against mock and real clients.

Codex must not migrate an endpoint to real backend until these gates pass.

---

## 14. Contract Test Requirements

Each endpoint family must have contract tests.

### Test Categories

- success response shape;
- validation error;
- unauthorized;
- forbidden;
- policy blocked;
- approval required;
- plan limit reached;
- region restricted;
- empty state;
- pagination;
- audit event emitted;
- analytics event emitted;
- RTL/LTR metadata when applicable.

### Suggested Structure

```txt
src/contracts/
  api/
    aiEmployees.contract.test.ts
    workflows.contract.test.ts
    marketplace.contract.test.ts
    enterpriseAdmin.contract.test.ts
    trustCenter.contract.test.ts
    dashboard.contract.test.ts
```

Contract tests must protect both frontend expectations and backend behavior.

---

## 15. Codex Execution Protocol

When Codex is asked to implement or review backend API work, it must follow this sequence:

1. Read `codex-execution-master-prompt.md`.
2. Read `mvp-build-scope-lock.md`.
3. Read `frontend-api-mock-layer-plan.md`.
4. Read `frontend-demo-data-implementation-guide.md`.
5. Read `api-contracts.md`.
6. Read `backend-architecture.md`.
7. Read `domain-model.md`.
8. Read this file.
9. Identify the endpoint family.
10. Fill the API Contract Review Object.
11. Compare mock API with intended real API.
12. Report contract drift.
13. Propose schema alignment.
14. Define tests.
15. Implement only after contract approval.

---

## 16. Work Unit Report Format

After each API contract review work unit, Codex must output:

```md
# API Contract Review Report

## Endpoint Family

## Endpoints Reviewed

## Source Skills Read

## Mock API Shape

## Proposed Backend Shape

## Drift Found

## Permission Review

## Audit Review

## Error Model Review

## Observability Review

## Localization / RTL-LTR Review

## Security / Privacy Review

## Required Contract Tests

## Approved / Blocked / Needs Decision

## Next Required Action
```

---

## 17. Stop Rules

Codex must stop and ask for a decision or produce a gap report when:

- endpoint ownership is unclear;
- domain entity does not exist;
- response shape conflicts with mock layer;
- permissions cannot be enforced;
- audit event is missing;
- error states are undefined;
- UI requires data the backend cannot provide;
- backend exposes sensitive data not needed by UI;
- localization or region behavior is unclear;
- enterprise policy changes are not auditable;
- marketplace install path lacks entitlement logic;
- AI Employee launch lacks review and governance gates;
- Trust Center evidence cannot be backed by source data.

---

## 18. Forbidden Backend Contract Patterns

Do not allow:

- endpoints returning arbitrary untyped JSON;
- UI-only permission enforcement;
- silent failures;
- fake success responses for high-risk actions;
- public endpoints exposing internal evidence;
- install endpoints without permission preview;
- AI Employee runtime endpoints without audit/correlation IDs;
- pricing endpoints that contradict plan packaging;
- marketplace templates without trust, dependency, and region metadata;
- localized UI copy with no locale/direction metadata;
- hardcoded demo-only response shapes that cannot migrate to real backend;
- backend work that ignores `mvp-build-scope-lock.md`.

---

## 19. MVP API Contract Priority

### Priority 0: Must Review First

1. app shell/current user/workspace;
2. dashboard summary;
3. AI Employee builder drafts;
4. AI Employee detail;
5. workflow builder drafts;
6. marketplace home/search;
7. template detail/install preview;
8. enterprise admin overview;
9. trust center summary;
10. launch readiness summary.

### Priority 1: Review After MVP Core

1. customer success console;
2. internal ops command center;
3. creator portal;
4. partner portal;
5. billing and entitlement details;
6. audit export;
7. incident escalation.

### Priority 2: Defer Unless Needed

1. full revenue operations;
2. full certification workflows;
3. advanced marketplace experimentation;
4. advanced template lifecycle optimization;
5. enterprise procurement workflows;
6. full partner payout automation.

---

## 20. Golden Rule

Ariyo backend APIs must make the frontend more truthful, not merely more connected.

If a production API makes the UI faster but less governed, less auditable, less permission-aware, less localized, or less enterprise-ready, the contract is not approved.
