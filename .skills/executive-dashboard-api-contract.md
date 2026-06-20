# Ariyo Executive Dashboard API Contract

## Core Contract

Ariyo Executive Dashboard API Contract is not a backend wishlist, chart-data dump, analytics shortcut, or temporary reporting endpoint list.

It is the governed API contract that defines how Ariyo's Executive Dashboard receives, redacts, aggregates, explains, exports, and validates executive-level operating data across product execution, AI Employee performance, workflow health, Marketplace health, enterprise readiness, customer success, revenue/fundraising, runway, release readiness, trust, risk, owner actions, board reporting, and investor-safe views.

The Executive Dashboard must not be powered by scattered page-specific queries.

The Executive Dashboard must be powered by stable, typed, permission-aware, evidence-backed, auditable, redaction-aware API contracts.

---

## 1. Purpose

This skill defines the API contract required to implement the Ariyo Executive Dashboard as a real product surface after the `executive-dashboard-mockup-spec.md` and `executive-dashboard-demo-data-pack.md` files.

It tells Codex, backend engineers, frontend engineers, product owners, operators, and AI-assisted builders:

- which endpoints must exist,
- which response shapes must be stable,
- which fields are safe for different audiences,
- how investor-safe and board-ready redaction works,
- how evidence references are attached,
- how KPI status is explained,
- how owner actions are represented,
- how export payloads are generated,
- how mock API data migrates to production backend,
- and how the dashboard avoids becoming a disconnected analytics screen.

---

## 2. Related Skills

Codex must read these skills before implementing this contract:

1. `codex-execution-master-prompt.md`
2. `mockup-implementation-roadmap.md`
3. `frontend-implementation-sprint-plan.md`
4. `mvp-build-scope-lock.md`
5. `executive-kpi-scorecard-system.md`
6. `executive-dashboard-mockup-spec.md`
7. `executive-dashboard-demo-data-pack.md`
8. `frontend-demo-data-implementation-guide.md`
9. `frontend-api-mock-layer-plan.md`
10. `backend-api-contract-review.md`
11. `api-contracts.md`
12. `domain-model.md`
13. `backend-architecture.md`
14. `observability-analytics-events.md`
15. `enterprise-account-governance.md`
16. `data-governance-privacy.md`
17. `security-threat-model.md`
18. `board-investor-governance-rhythm.md`
19. `investor-data-room-index.md`
20. `production-release-gate-checklist.md`

If there is a conflict, this file governs only the Executive Dashboard API surface, while security, privacy, and release gates still override unsafe implementation choices.

---

## 3. API Design Principles

### 3.1 Stable Executive Contract

Executive dashboard APIs must be stable and aggregate-oriented. They must not expose raw operational internals unless the caller has permission and the field is explicitly approved.

### 3.2 Evidence-Backed Metrics

Every KPI shown to executives must be traceable to at least one evidence reference.

A KPI without evidence is a draft signal, not an executive signal.

### 3.3 Permission-Aware Responses

The same endpoint may return different field visibility depending on user role, workspace, data-room permission, board mode, investor-safe mode, and redaction policy.

### 3.4 No Vanity Metrics

The API must not return values that appear impressive but do not map to Ariyo's operating decisions.

### 3.5 Frontend-Ready Shape

Responses must be usable by dashboard components without heavy frontend transformation. The frontend may format, group, and visualize. It must not invent business meaning.

### 3.6 Backend Migration Safety

Mock responses, demo fixtures, and production responses must share the same envelope, field names, status model, and error model.

---

## 4. Standard Response Envelope

All Executive Dashboard API responses must use Ariyo's governed response envelope.

```ts
type AriyoApiResponse<T> = {
  data: T;
  meta: {
    requestId: string;
    generatedAt: string;
    workspaceId: string;
    organizationId: string;
    viewerRole: AriyoViewerRole;
    visibilityMode: ExecutiveDashboardVisibilityMode;
    dataFreshness: DataFreshnessSummary;
    redactionApplied: boolean;
    evidencePolicy: EvidencePolicySummary;
  };
  warnings?: AriyoApiWarning[];
};
```

### 4.1 Error Envelope

```ts
type AriyoApiError = {
  error: {
    code: string;
    message: string;
    severity: 'info' | 'warning' | 'blocking' | 'critical';
    retryable: boolean;
    fieldErrors?: Record<string, string[]>;
    requiredPermission?: string;
    supportReference?: string;
  };
  meta: {
    requestId: string;
    generatedAt: string;
  };
};
```

---

## 5. Executive Dashboard Visibility Modes

The dashboard must support different views without duplicating API logic.

```ts
type ExecutiveDashboardVisibilityMode =
  | 'internal_operating'
  | 'founder'
  | 'board'
  | 'investor_safe'
  | 'enterprise_buyer_safe'
  | 'redacted_demo';
```

### 5.1 Internal Operating Mode

Used by founders and internal operators. May include full risk details, owner assignments, unresolved blockers, raw trend context, and internal notes.

### 5.2 Founder Mode

Used by founders and executive operators. May include sensitive context but should default to decision-ready summaries.

### 5.3 Board Mode

Used for board/advisor review. Must include decision points, KPI status, risk summary, owner actions, capital/runway status, and evidence references.

### 5.4 Investor-Safe Mode

Used for external investor sharing. Must redact sensitive customer names, internal compensation details, security-sensitive evidence, non-public incidents, detailed revenue pipeline notes, and private legal commentary.

### 5.5 Enterprise-Buyer-Safe Mode

Used for enterprise buyer due diligence. Must emphasize trust, compliance, uptime, governance, customer outcomes, and product readiness while redacting investor/fundraising details.

### 5.6 Redacted Demo Mode

Used in public demos. Must use synthetic data only.

---

## 6. Core Endpoint Family

### 6.1 Dashboard Overview

```http
GET /api/executive-dashboard/overview
```

#### Query Parameters

```ts
type ExecutiveDashboardOverviewQuery = {
  workspaceId: string;
  period: '7d' | '30d' | '90d' | 'quarter' | 'ytd';
  visibilityMode: ExecutiveDashboardVisibilityMode;
  locale?: 'en' | 'fa' | 'ar' | 'de' | 'fr' | 'es' | 'it';
};
```

#### Response

```ts
type ExecutiveDashboardOverviewResponse = {
  companyOperatingScore: CompanyOperatingScore;
  readinessStrip: ReleaseReadinessStrip;
  summaryNarrative: ExecutiveNarrativeSummary;
  criticalRisks: ExecutiveRiskCard[];
  ownerActionsDue: OwnerAction[];
  kpiGroups: ExecutiveKpiGroup[];
  investorSnapshot?: InvestorSnapshot;
  boardExportAvailability: ExportAvailability;
};
```

### Required Behavior

- Must return the top-level state of Ariyo in one payload.
- Must not require the frontend to call eight domain APIs before rendering the first screen.
- Must include enough data for skeleton, loaded, degraded, and redacted states.

---

## 7. KPI Group Endpoints

### 7.1 Product Execution KPIs

```http
GET /api/executive-dashboard/kpis/product-execution
```

Returns product milestone progress, sprint completion, UI implementation progress, release readiness, blockers, and Codex execution progress.

### 7.2 AI Employee KPIs

```http
GET /api/executive-dashboard/kpis/ai-employees
```

Returns AI Employee count, active employees, successful runs, intervention rate, incident count, cost per outcome, governance coverage, and launch status.

### 7.3 Workflow KPIs

```http
GET /api/executive-dashboard/kpis/workflows
```

Returns workflow activation, completion rate, approval bottlenecks, failed runs, retry rate, human escalation rate, and version adoption.

### 7.4 Marketplace KPIs

```http
GET /api/executive-dashboard/kpis/marketplace
```

Returns template count, certified templates, install attempts, blocked installs, trust label coverage, creator activity, private catalog readiness, and marketplace quality score.

### 7.5 Enterprise Readiness KPIs

```http
GET /api/executive-dashboard/kpis/enterprise-readiness
```

Returns SSO readiness, SCIM readiness, policy engine status, audit readiness, approval workflow readiness, data residency readiness, and enterprise pilot readiness.

### 7.6 Customer Success KPIs

```http
GET /api/executive-dashboard/kpis/customer-success
```

Returns pilot health, onboarding stage, adoption trend, customer risk, renewal/expansion signals, support escalations, and EBR readiness.

### 7.7 Revenue & Fundraising KPIs

```http
GET /api/executive-dashboard/kpis/revenue-fundraising
```

Returns pipeline, investor stage counts, committed interest, data room engagement, outbound progress, objection themes, and funding close readiness.

### 7.8 Runway & Finance KPIs

```http
GET /api/executive-dashboard/kpis/runway-finance
```

Returns runway, burn trend, AI cost exposure, cost controls, budget status, hiring plan readiness, and post-funding operating readiness.

### 7.9 Trust, Risk & Compliance KPIs

```http
GET /api/executive-dashboard/kpis/trust-risk-compliance
```

Returns security posture, incident status, compliance evidence status, audit log coverage, public status health, privacy readiness, and trust center freshness.

---

## 8. KPI Object Model

```ts
type ExecutiveKpi = {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  trend: 'up' | 'down' | 'flat' | 'unknown';
  trendLabel?: string;
  status: 'healthy' | 'watch' | 'at_risk' | 'blocked' | 'unknown';
  priority: 'low' | 'medium' | 'high' | 'critical';
  period: string;
  ownerId?: string;
  evidenceRefs: EvidenceRef[];
  explanation: string;
  decisionRequired: boolean;
  redactionLevel: RedactionLevel;
};
```

### 8.1 KPI Group

```ts
type ExecutiveKpiGroup = {
  id: string;
  title: string;
  summary: string;
  status: 'healthy' | 'watch' | 'at_risk' | 'blocked' | 'unknown';
  kpis: ExecutiveKpi[];
  topRisk?: ExecutiveRiskCard;
  nextAction?: OwnerAction;
};
```

---

## 9. Company Operating Score

```ts
type CompanyOperatingScore = {
  score: number;
  label: 'excellent' | 'healthy' | 'watch' | 'at_risk' | 'blocked';
  explanation: string;
  drivers: {
    positive: string[];
    negative: string[];
  };
  evidenceRefs: EvidenceRef[];
  lastReviewedAt: string;
};
```

### Required Rule

The score must not be a hidden black-box score. It must include drivers and evidence references.

---

## 10. Release Readiness Strip

```ts
type ReleaseReadinessStrip = {
  currentMode: 'mvp_demo' | 'internal_alpha' | 'private_pilot' | 'enterprise_pilot' | 'public_beta' | 'production';
  readinessPercent: number;
  gates: ReleaseGateSummary[];
  blockers: ReleaseBlocker[];
  nextGate: string;
  launchDecision: 'not_ready' | 'ready_with_risks' | 'ready' | 'blocked';
};
```

### Required Gate Families

- Product Surface Gate
- Design System Gate
- Frontend Implementation Gate
- Backend API Gate
- AI Employee Runtime Gate
- Marketplace Gate
- Enterprise Governance Gate
- Security & Privacy Gate
- Observability & Reliability Gate
- Localization & RTL/LTR Gate
- Customer Support Gate
- Investor/Board Reporting Gate

---

## 11. Owner Actions Endpoint

```http
GET /api/executive-dashboard/owner-actions
```

```ts
type OwnerAction = {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  ownerName: string;
  dueDate: string;
  status: 'not_started' | 'in_progress' | 'waiting' | 'done' | 'blocked';
  severity: 'low' | 'medium' | 'high' | 'critical';
  relatedKpiIds: string[];
  relatedRiskIds: string[];
  evidenceRefs: EvidenceRef[];
  nextDecision?: string;
};
```

### Required Behavior

- Every critical risk must have at least one owner action.
- Owner actions must not be hidden in free-text notes.
- The dashboard must be able to sort owner actions by severity, due date, and domain.

---

## 12. Risk Register Endpoint

```http
GET /api/executive-dashboard/risks
```

```ts
type ExecutiveRiskCard = {
  id: string;
  title: string;
  domain:
    | 'product'
    | 'ai_employee'
    | 'workflow'
    | 'marketplace'
    | 'enterprise'
    | 'customer_success'
    | 'revenue'
    | 'runway'
    | 'security'
    | 'compliance'
    | 'operations'
    | 'fundraising';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'mitigating' | 'accepted' | 'resolved' | 'blocked';
  summary: string;
  impact: string;
  ownerId: string;
  nextActionId?: string;
  evidenceRefs: EvidenceRef[];
  visibility: ExecutiveDashboardVisibilityMode[];
};
```

---

## 13. Investor Snapshot Endpoint

```http
GET /api/executive-dashboard/investor-snapshot
```

```ts
type InvestorSnapshot = {
  fundraisingStage: 'not_started' | 'warmup' | 'active_outreach' | 'diligence' | 'term_ready' | 'closing' | 'post_close';
  pipelineCounts: Record<string, number>;
  topProofPoints: ProofPoint[];
  topObjections: InvestorObjectionSummary[];
  dataRoomFreshness: DataRoomFreshnessSummary;
  weeklyUpdateStatus: 'draft_needed' | 'ready' | 'sent' | 'stale';
  redactionApplied: boolean;
};
```

### Required Rule

Investor snapshot must never leak internal-only financial, customer, security, or legal data in investor-safe mode.

---

## 14. Board Export Endpoint

```http
POST /api/executive-dashboard/exports/board-pack
```

### Request

```ts
type BoardPackExportRequest = {
  workspaceId: string;
  period: 'month' | 'quarter' | 'custom';
  customRange?: {
    startDate: string;
    endDate: string;
  };
  visibilityMode: 'board' | 'investor_safe';
  includeSections: BoardPackSection[];
  redactSensitiveData: boolean;
  locale?: string;
};
```

### Response

```ts
type BoardPackExportResponse = {
  exportId: string;
  status: 'queued' | 'generating' | 'ready' | 'failed';
  fileName?: string;
  downloadUrl?: string;
  expiresAt?: string;
  warnings?: AriyoApiWarning[];
};
```

### Required Export Sections

- Executive Summary
- KPI Scorecard
- Release Readiness
- Customer/Pilot Evidence
- Revenue/Fundraising Snapshot
- Risk Register
- Owner Actions
- Product Milestones
- Trust/Compliance Status
- Runway/Use of Funds
- Decisions Requested

---

## 15. Evidence Reference Model

```ts
type EvidenceRef = {
  id: string;
  type:
    | 'pilot_metric'
    | 'customer_quote'
    | 'audit_log'
    | 'release_gate'
    | 'incident_record'
    | 'data_room_doc'
    | 'support_ticket'
    | 'workflow_run'
    | 'ai_employee_run'
    | 'marketplace_event'
    | 'financial_record'
    | 'investor_interaction';
  title: string;
  source: string;
  confidence: 'low' | 'medium' | 'high' | 'verified';
  visibility: ExecutiveDashboardVisibilityMode[];
  createdAt: string;
  redactedTitle?: string;
};
```

### Evidence Rules

- Evidence must be real, traceable, or explicitly marked as demo/synthetic.
- Investor-safe evidence must be redacted by default.
- Critical KPIs and risks must not appear without evidence references.

---

## 16. Redaction Model

```ts
type RedactionLevel =
  | 'public'
  | 'investor_safe'
  | 'enterprise_buyer_safe'
  | 'board_only'
  | 'founder_only'
  | 'internal_confidential'
  | 'security_sensitive'
  | 'legal_sensitive';
```

### Required Redactions

In investor-safe mode, redact:

- customer names unless approved,
- individual salaries and compensation,
- unreleased security incidents,
- private legal terms,
- detailed unclosed investor commitments,
- sensitive data residency details,
- internal risk notes,
- unverified claims,
- raw logs,
- private support tickets.

---

## 17. Localization & RTL/LTR Contract

All Executive Dashboard API responses that return display text must support locale-aware text.

```ts
type LocalizedText = {
  en: string;
  fa?: string;
  ar?: string;
  de?: string;
  fr?: string;
  es?: string;
  it?: string;
};
```

### Global RTL/LTR Law

- Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.
- English and European LTR interfaces must be LTR and left-aligned across all UI elements.
- The API may return locale metadata, but alignment is enforced by frontend layout logic.
- API responses must not hardcode layout direction into text values.

```ts
type LocaleLayoutMeta = {
  locale: string;
  direction: 'rtl' | 'ltr';
  textAlignment: 'right' | 'left';
};
```

---

## 18. Mock API Migration Path

### Phase 1: Static Demo Data

Use `executive-dashboard-demo-data-pack.md` and `frontend-demo-data-implementation-guide.md` to build static data fixtures.

### Phase 2: Mock API Layer

Use `frontend-api-mock-layer-plan.md` to expose executive dashboard responses through mock endpoints.

### Phase 3: Backend Contract Review

Use `backend-api-contract-review.md` to validate response envelopes, field names, permission behavior, and error states.

### Phase 4: Production API Integration

Replace mock endpoint sources without changing component contracts.

### Phase 5: Observability & Audit

Add request logging, export audit logs, evidence-access logs, and redaction audit records.

---

## 19. Endpoint Acceptance Gates

Codex must not mark this API complete unless:

- all endpoint response shapes are typed,
- all KPI cards have evidence refs,
- all visibility modes are represented,
- investor-safe redaction is tested,
- board export supports queued/ready/failed states,
- loading/empty/error/blocked states exist,
- mock and production contracts share field names,
- frontend components do not invent business logic,
- localization metadata is available,
- RTL/LTR law is preserved,
- sensitive fields are not exposed in redacted modes,
- and API errors follow the governed error envelope.

---

## 20. Codex Execution Protocol

When implementing this contract, Codex must follow this order:

1. Read `codex-execution-master-prompt.md`.
2. Read `executive-kpi-scorecard-system.md`.
3. Read `executive-dashboard-mockup-spec.md`.
4. Read `executive-dashboard-demo-data-pack.md`.
5. Create or update TypeScript types.
6. Create mock endpoint fixtures.
7. Create selectors for dashboard components.
8. Implement overview endpoint first.
9. Implement KPI group endpoints second.
10. Implement risk and owner action endpoints third.
11. Implement investor snapshot endpoint fourth.
12. Implement board export endpoint last.
13. Add redaction tests.
14. Add RTL/LTR locale test cases.
15. Report contract coverage.

---

## 21. Codex Stop Rules

Codex must stop and report if:

- executive metrics are requested without evidence refs,
- investor-safe mode exposes sensitive data,
- board export is implemented as a static screenshot only,
- KPI status is calculated in UI components without a contract,
- API responses do not use Ariyo's envelope,
- redaction behavior is undefined,
- owner actions are free-text only,
- risk severity is missing,
- RTL/LTR behavior is ignored,
- or frontend and backend contracts diverge.

---

## 22. Work Unit Report Format

After implementing or updating this API contract, Codex must report:

```md
# Executive Dashboard API Contract Work Unit Report

## Implemented Endpoints
- ...

## Types Added or Updated
- ...

## Mock Data Sources Used
- ...

## Redaction Modes Tested
- ...

## Evidence Coverage
- ...

## RTL/LTR Coverage
- ...

## Open Contract Risks
- ...

## Next Backend Migration Step
- ...
```

---

## 23. Forbidden Patterns

Ariyo must not:

- expose raw internal data directly to the Executive Dashboard,
- build one-off endpoints per chart without a domain contract,
- calculate investor-safe redaction only in the frontend,
- use demo-only API shapes that cannot migrate to backend,
- display KPI values with no evidence refs,
- display risks without owners,
- export board reports without redaction controls,
- make the Executive Dashboard a vanity dashboard,
- or treat dashboard data as separate from product, customer, marketplace, enterprise, and investor operating systems.

---

## 24. Golden Rule

The Executive Dashboard API must make Ariyo's operating truth visible, governed, evidence-backed, redaction-safe, board-ready, investor-safe, and frontend-implementable.

If the API makes the dashboard look impressive but not trustworthy, the API has failed.
