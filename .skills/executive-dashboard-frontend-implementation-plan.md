# Ariyo Executive Dashboard Frontend Implementation Plan

## Core Contract

Ariyo Executive Dashboard Frontend Implementation Plan is not a generic frontend task list, dashboard implementation note, chart backlog, or component checklist.

It is the governed implementation plan that tells Codex, frontend engineers, product designers, product owners, and AI-assisted builders how to convert the Ariyo Executive Dashboard Mockup Specification, Executive KPI Scorecard System, Executive Dashboard Demo Data Pack, and Executive Dashboard API Contract into production-grade frontend routes, components, hooks, selectors, mock API integrations, redaction modes, board export UI, investor-safe views, RTL/LTR behavior, and acceptance-tested work units.

Codex must implement the Executive Dashboard as a board-ready command surface, not as a wall of metrics.

---

## 1. Purpose

This skill defines the execution path for building the Ariyo Executive Dashboard frontend surface.

It exists to prevent the following failures:

- Building KPI cards before the API contract is understood.
- Building charts without evidence, owner, trend, and action context.
- Building executive analytics that cannot be safely shown to investors or board members.
- Building a dashboard that looks polished but cannot support real operating decisions.
- Building frontend mock data that cannot later migrate to backend APIs.
- Building English-only layouts that break in Persian/Farsi or Arabic.
- Building components that are not reusable across Customer Success, Internal Ops, Launch Readiness, and Enterprise Admin surfaces.

The Executive Dashboard must become the top-level operating view for founders, board members, investors, executive operators, product leaders, finance owners, customer leaders, and governance stakeholders.

---

## 2. Required Upstream Skills

Codex must read these skills before implementing this surface:

1. `codex-execution-master-prompt.md`
2. `master-skill-index-map.md`
3. `mockup-implementation-roadmap.md`
4. `frontend-implementation-sprint-plan.md`
5. `figma-design-system-brief.md`
6. `executive-kpi-scorecard-system.md`
7. `executive-dashboard-mockup-spec.md`
8. `executive-dashboard-demo-data-pack.md`
9. `executive-dashboard-api-contract.md`
10. `frontend-demo-data-implementation-guide.md`
11. `frontend-api-mock-layer-plan.md`
12. `backend-api-contract-review.md`
13. `production-readiness-gap-audit.md`
14. `production-release-gate-checklist.md`
15. `board-investor-governance-rhythm.md`
16. `post-funding-operating-plan.md`

Codex must not implement this page in isolation.

---

## 3. Implementation Goal

The frontend implementation must deliver a dashboard that lets an executive answer these questions in less than 60 seconds:

- Is Ariyo on track?
- Which part of the company is healthy?
- Which part is blocked?
- Which launch or release gate is at risk?
- Which KPI changed materially?
- Which owner must act next?
- What evidence supports the dashboard state?
- What can be safely shared with investors, board members, or enterprise stakeholders?
- What must remain internal-only?
- What is the next executive decision?

---

## 4. Route Architecture

### 4.1 Primary Route

Recommended route:

```txt
/app/executive
```

Alternative if the app already uses dashboard grouping:

```txt
/app/dashboard/executive
```

### 4.2 Secondary Routes

The first implementation may include route placeholders for:

```txt
/app/executive/board-export
/app/executive/investor-snapshot
/app/executive/risk-register
/app/executive/owner-actions
/app/executive/release-readiness
```

These can initially render composed sections from the main dashboard rather than fully independent pages.

### 4.3 Route Guard

This surface must be permission-aware.

Allowed roles:

- Founder
- Owner
- Executive Admin
- Board Viewer
- Investor Viewer, restricted mode only
- Finance Owner, finance subset
- Product Lead, product subset
- Customer Success Lead, customer subset
- Governance Lead, trust/risk subset

Forbidden behavior:

- Do not expose full internal dashboard to investor users.
- Do not expose raw customer-sensitive data in board/investor mode.
- Do not show internal risk owner names in investor-safe mode unless explicitly permitted.

---

## 5. Folder Structure

Codex should implement using a modular feature folder.

Recommended structure:

```txt
src/
  app/
    executive/
      page.tsx
      loading.tsx
      error.tsx
  features/
    executive-dashboard/
      components/
        ExecutiveDashboardShell.tsx
        ExecutiveHeader.tsx
        ExecutiveModeSwitcher.tsx
        CompanyOperatingScoreCard.tsx
        KpiCard.tsx
        KpiCardGrid.tsx
        ReleaseReadinessStrip.tsx
        ProductExecutionPanel.tsx
        AiEmployeePerformancePanel.tsx
        WorkflowHealthPanel.tsx
        MarketplaceHealthPanel.tsx
        EnterpriseReadinessPanel.tsx
        CustomerSuccessPanel.tsx
        RevenueFundraisingPanel.tsx
        RunwayFinancePanel.tsx
        TrustRiskPanel.tsx
        OwnerActionCenter.tsx
        RiskRegisterPreview.tsx
        InvestorSnapshotPanel.tsx
        BoardExportPanel.tsx
        EvidenceLinkList.tsx
        RedactionBadge.tsx
        TrendIndicator.tsx
        KpiStatusBadge.tsx
        ExecutiveSectionCard.tsx
      hooks/
        useExecutiveDashboard.ts
        useExecutiveDashboardMode.ts
        useExecutiveDashboardFilters.ts
        useExecutiveDashboardExport.ts
      selectors/
        executiveDashboardSelectors.ts
      api/
        executiveDashboardClient.ts
        executiveDashboardMockClient.ts
      types/
        executiveDashboardTypes.ts
      utils/
        redaction.ts
        scoreFormatting.ts
        executiveStatus.ts
        exportFormatting.ts
      __tests__/
        executiveDashboard.selectors.test.ts
        executiveDashboard.redaction.test.ts
        executiveDashboard.rtl-ltr.test.ts
```

The implementation may adapt the folder names to the existing project structure, but the separation of route, feature, components, hooks, selectors, API, types, and tests must remain.

---

## 6. Required Data Contract Integration

The frontend must consume a single dashboard contract rather than scattered independent hardcoded arrays.

Required client function:

```ts
getExecutiveDashboard(input: ExecutiveDashboardRequest): Promise<ExecutiveDashboardResponse>
```

Required request dimensions:

```ts
type ExecutiveDashboardMode =
  | "internal"
  | "board"
  | "investor_safe"
  | "enterprise_summary";

type ExecutiveDashboardRequest = {
  mode: ExecutiveDashboardMode;
  period: "week" | "month" | "quarter";
  locale: "en" | "fa" | "ar";
  workspaceId?: string;
  includeEvidence?: boolean;
  includeOwnerActions?: boolean;
  includeRedactedFields?: boolean;
};
```

Required response groups:

```ts
type ExecutiveDashboardResponse = {
  meta: DashboardMeta;
  operatingScore: CompanyOperatingScore;
  releaseReadiness: ReleaseReadinessSummary;
  kpiGroups: ExecutiveKpiGroup[];
  ownerActions: OwnerAction[];
  riskRegister: ExecutiveRisk[];
  investorSnapshot: InvestorSnapshot;
  boardExport: BoardExportSummary;
  evidenceRefs: EvidenceRef[];
  redaction: RedactionSummary;
};
```

Codex must not invent a shape that conflicts with `executive-dashboard-api-contract.md`.

---

## 7. Mock API Integration

During MVP and demo implementation, Codex must wire the dashboard to the mock API layer from `frontend-api-mock-layer-plan.md`.

Required behavior:

- Simulate loading state.
- Simulate empty state.
- Simulate partial data state.
- Simulate risk spike state.
- Simulate board-safe redaction.
- Simulate investor-safe redaction.
- Simulate API error state.
- Simulate stale data warning.
- Simulate evidence unavailable warning.

Forbidden behavior:

- Do not hardcode KPI values inside UI components.
- Do not duplicate demo data in component files.
- Do not silently show internal-only fields in restricted modes.
- Do not make charts depend on random generated values.

---

## 8. Required Page Layout

### 8.1 Desktop Layout

Desktop page structure:

1. Executive Header
2. Mode Switcher
3. Company Operating Score
4. Release Readiness Strip
5. KPI Group Grid
6. Risk & Owner Action Row
7. Investor Snapshot / Board Export Row
8. Evidence / Audit Footer

### 8.2 Tablet Layout

Tablet structure:

- Header remains sticky.
- Mode switcher becomes segmented control.
- KPI groups become two-column cards.
- Risk and owner action panels stack vertically.
- Export controls remain accessible.

### 8.3 Mobile Layout

Mobile structure:

- Dashboard must remain readable, not chart-heavy.
- KPI cards become stacked summaries.
- Owner actions must appear before secondary charts.
- Risk register must be collapsible.
- Evidence links must open in drawer or detail section.

Mobile must prioritize decision visibility over dense analytics.

---

## 9. Required Components

### 9.1 ExecutiveDashboardShell

Responsibilities:

- Controls page layout.
- Applies locale direction.
- Applies role/mode redaction.
- Owns high-level loading/error/empty handling.
- Composes all major dashboard sections.

Must not:

- Format individual KPI math.
- Contain raw demo data.
- Contain backend-specific transformations.

### 9.2 ExecutiveHeader

Must show:

- Dashboard title.
- Reporting period.
- Last updated timestamp.
- Data freshness status.
- User-visible mode label.
- Export action.
- Evidence status.

### 9.3 ExecutiveModeSwitcher

Modes:

- Internal
- Board
- Investor-safe
- Enterprise summary

Behavior:

- Changing mode must update visible data, redaction, and export options.
- Mode changes must not require full page reload.
- Mode changes must be trackable as analytics events.

### 9.4 CompanyOperatingScoreCard

Must include:

- Overall score.
- Status label.
- Directional trend.
- Top contributors.
- Top risks.
- Evidence count.
- Owner if action required.

Do not show a score without explanation.

### 9.5 KpiCard

Each KPI card must include:

- Metric label.
- Current value.
- Previous period comparison.
- Trend.
- Status.
- Owner, if relevant.
- Evidence link count.
- Redaction badge, if restricted.
- Tooltip or context note.

Forbidden KPI card patterns:

- Value-only card.
- Chart-only card.
- Color-only status.
- Unexplained percentage.
- KPI without time window.

### 9.6 ReleaseReadinessStrip

Must show:

- MVP readiness.
- Investor demo readiness.
- Enterprise pilot readiness.
- Marketplace alpha readiness.
- Production readiness.

Each gate must show:

- Status.
- Blocking count.
- Owner.
- Next action.
- Evidence link.

### 9.7 OwnerActionCenter

Must show:

- High-priority owner actions.
- Decision needed.
- Owner.
- Due date.
- Related KPI/risk.
- Evidence.
- Escalation level.

This is one of the most important components. Ariyo must not build an executive dashboard that only informs and does not drive action.

### 9.8 RiskRegisterPreview

Must show:

- Risk title.
- Severity.
- Domain.
- Owner.
- Status.
- Last updated.
- Mitigation action.

Investor-safe mode must hide sensitive operational details.

### 9.9 InvestorSnapshotPanel

Must show:

- Traction signals.
- Pilot proof signals.
- Product progress.
- Release readiness.
- Fundraising pipeline summary.
- Key asks.
- Investor-safe evidence references.

Must not show:

- Confidential customer names unless explicitly allowed.
- Internal runway stress unless in approved mode.
- Unreviewed metrics.

### 9.10 BoardExportPanel

Must support:

- Preview export.
- Export section selection.
- Redaction mode selection.
- Timestamped export record.
- Evidence list inclusion.

Initial implementation may mock the export file generation, but the UI must show the intended export flow.

---

## 10. Required KPI Groups

Codex must implement these groups from the Executive KPI Scorecard System:

1. Company Operating Score
2. Product Execution
3. AI Employee Performance
4. Workflow Operations
5. Marketplace Health
6. Enterprise Readiness
7. Customer Success
8. Revenue / Fundraising
9. Runway / Finance
10. Trust / Risk
11. Release Readiness
12. Team Capacity

Each group must have at least:

- Group title.
- Group status.
- 3 to 6 KPI cards.
- Summary insight.
- Owner or owning team.
- Evidence references.

---

## 11. Required States

Each major dashboard section must support:

- Loading
- Empty
- Partial data
- Healthy
- Warning
- Critical
- Stale data
- Permission restricted
- Error

Codex must not implement only the happy path.

---

## 12. RTL/LTR Global Layout Law

This dashboard must obey the Ariyo global localization rule:

- Persian/Farsi UI must use RTL direction and right-aligned layout behavior.
- Arabic UI must use RTL direction and right-aligned layout behavior.
- English UI must use LTR direction and left-aligned layout behavior.
- European LTR languages must use LTR direction and left-aligned layout behavior.

This applies to:

- App shell
- Header
- KPI cards
- Charts
- Tables
- Action lists
- Risk panels
- Export panels
- Tooltips
- Drawers
- Modals
- Empty states
- Error states
- Evidence lists
- Date/time alignment
- Numeric labels
- Segmented controls
- Navigation labels

Codex must not simply translate labels while leaving layout direction unchanged.

### 12.1 Direction-Aware Implementation

The implementation should expose a utility:

```ts
function getTextDirection(locale: string): "rtl" | "ltr" {
  return ["fa", "ar", "ur"].includes(locale) ? "rtl" : "ltr";
}
```

The dashboard root must apply:

```tsx
<section dir={direction} className={direction === "rtl" ? "text-right" : "text-left"}>
```

All layout components must use logical CSS properties where possible:

- `margin-inline-start`
- `margin-inline-end`
- `padding-inline-start`
- `padding-inline-end`
- `inset-inline-start`
- `inset-inline-end`

Avoid hardcoded `left` and `right` unless mirrored intentionally.

---

## 13. Redaction & Visibility Modes

### 13.1 Internal Mode

Can show:

- Full KPI detail.
- Owner names.
- Internal risks.
- Runway details.
- Customer-sensitive signals if permitted internally.
- Evidence links.
- Operational blockers.

### 13.2 Board Mode

Can show:

- Company-level metrics.
- Major risks.
- Owner accountability.
- Financial summary.
- Customer proof, with customer permission rules.
- Release readiness.

Must reduce noise.

### 13.3 Investor-Safe Mode

Can show:

- Reviewed traction signals.
- Approved pilot proof.
- Public or permission-safe customer evidence.
- Product progress.
- High-level release readiness.
- Fundraising progress, if appropriate.

Must not show:

- Unapproved customer names.
- Raw logs.
- Internal incident detail.
- Sensitive security findings.
- Detailed runway stress.
- Confidential contracts.

### 13.4 Enterprise Summary Mode

Can show:

- Enterprise readiness.
- Trust posture.
- Reliability summary.
- Marketplace governance summary.
- Customer success evidence.
- Deployment readiness.

Must not show fundraising data.

---

## 14. Hooks

### 14.1 useExecutiveDashboard

Responsibilities:

- Fetch dashboard data.
- Handle loading, error, retry, stale states.
- Accept mode, period, locale, and workspace context.
- Return normalized dashboard response.

### 14.2 useExecutiveDashboardMode

Responsibilities:

- Track selected mode.
- Persist last selected mode per user where appropriate.
- Enforce allowed modes based on user permission.
- Trigger analytics event on mode switch.

### 14.3 useExecutiveDashboardFilters

Responsibilities:

- Handle reporting period.
- Handle domain filters.
- Handle owner filters.
- Handle severity filters.

### 14.4 useExecutiveDashboardExport

Responsibilities:

- Build export request.
- Select export mode.
- Handle export preview.
- Trigger export event.
- Render error state if export unavailable.

---

## 15. Selectors

Selectors must transform API data into UI-ready models without changing the underlying meaning.

Required selectors:

- `selectOperatingScoreSummary`
- `selectKpiGroupsForMode`
- `selectVisibleOwnerActions`
- `selectVisibleRisks`
- `selectReleaseReadinessGates`
- `selectInvestorSafeSnapshot`
- `selectBoardExportSections`
- `selectEvidenceRefsByDomain`
- `selectDashboardWarnings`
- `selectStaleDataWarnings`

Selectors must be tested.

---

## 16. Formatting Rules

Use consistent formatting helpers:

- Percentages
- Currency
- Runway months
- Score values
- Trend values
- Dates
- Relative timestamps
- Risk severity labels
- Readiness status
- Evidence counts

Do not format values manually in component bodies.

---

## 17. Analytics Events

Required events:

- `executive_dashboard_viewed`
- `executive_dashboard_mode_changed`
- `executive_kpi_group_opened`
- `executive_kpi_evidence_opened`
- `executive_risk_opened`
- `executive_owner_action_opened`
- `executive_release_gate_opened`
- `executive_investor_snapshot_viewed`
- `executive_board_export_previewed`
- `executive_board_export_requested`
- `executive_redacted_field_seen`
- `executive_dashboard_error_seen`

Each event should include:

- mode
- locale
- period
- role
- domain
- entity id, when relevant
- timestamp

---

## 18. Accessibility Requirements

The dashboard must support:

- Keyboard navigation.
- Screen-reader labels for KPI cards.
- Non-color-only status indicators.
- Visible focus states.
- Accessible chart summaries.
- Proper headings hierarchy.
- Reduced motion support.
- High contrast for risk/status badges.
- RTL screen-reader compatibility.

Every chart or visual metric must have a text summary.

---

## 19. Responsive Rules

### Desktop

- Dense but readable.
- Multi-column KPI cards.
- Side-by-side risk/action panels.
- Export controls visible.

### Tablet

- Two-column KPI grid.
- Collapsible evidence panels.
- Sticky mode controls.

### Mobile

- Single-column executive decision feed.
- Priority order: operating score, release readiness, owner actions, risks, KPI groups, investor snapshot, export.
- Do not force horizontal chart scroll unless unavoidable.

---

## 20. Component Reuse Targets

These components should be designed for reuse across other Ariyo surfaces:

- `KpiCard`
- `KpiStatusBadge`
- `TrendIndicator`
- `EvidenceLinkList`
- `OwnerActionCard`
- `RiskBadge`
- `RiskRegisterPreview`
- `ReleaseReadinessStrip`
- `BoardExportPanel`
- `RedactionBadge`
- `ExecutiveSectionCard`

Codex must not create one-off styling that cannot be reused.

---

## 21. Testing Plan

Minimum tests:

### Unit Tests

- selectors return mode-safe data.
- redaction hides sensitive fields.
- score formatting is consistent.
- KPI status mapping is correct.
- stale data warnings render correctly.

### Component Tests

- KPI card renders all required states.
- owner action center handles empty and critical states.
- release readiness strip renders blocked gates.
- investor-safe mode hides internal-only data.
- board export preview respects selected sections.

### RTL/LTR Tests

- `fa` locale renders `dir="rtl"`.
- `ar` locale renders `dir="rtl"`.
- `en` locale renders `dir="ltr"`.
- alignment changes with direction.
- icon/action placement mirrors correctly.

### Integration Tests

- page fetches data through mock client.
- loading state appears.
- error state appears.
- mode switch changes visible data.
- export preview opens.

---

## 22. Codex Work Unit Sequence

Codex must implement in this order:

### Work Unit 1 — Types

Create `executiveDashboardTypes.ts` based on API contract.

Acceptance:

- No `any` for core dashboard objects.
- Modes are explicit unions.
- Redaction and evidence references are modeled.

### Work Unit 2 — Demo Data Adapter

Connect to `executive-dashboard-demo-data-pack.md` through the frontend demo data layer.

Acceptance:

- No hardcoded data in components.
- Data supports all modes.
- Data supports at least three scenarios: healthy, warning, critical.

### Work Unit 3 — Mock API Client

Create `executiveDashboardMockClient.ts`.

Acceptance:

- Simulates latency.
- Supports errors.
- Supports stale data.
- Supports redaction modes.

### Work Unit 4 — Selectors

Create dashboard selectors.

Acceptance:

- Tested.
- Mode-aware.
- No UI rendering logic inside selectors.

### Work Unit 5 — Core Components

Build reusable primitives:

- `KpiCard`
- `TrendIndicator`
- `KpiStatusBadge`
- `EvidenceLinkList`
- `RedactionBadge`
- `ExecutiveSectionCard`

Acceptance:

- Supports RTL/LTR.
- Supports states.
- Reusable outside Executive Dashboard.

### Work Unit 6 — Dashboard Sections

Build panels:

- `CompanyOperatingScoreCard`
- `ReleaseReadinessStrip`
- `KpiCardGrid`
- `OwnerActionCenter`
- `RiskRegisterPreview`
- `InvestorSnapshotPanel`
- `BoardExportPanel`

Acceptance:

- Uses shared primitives.
- Handles empty/loading/error/permission states.

### Work Unit 7 — Route & Shell

Build route and `ExecutiveDashboardShell`.

Acceptance:

- Mode switch works.
- Period filter works.
- Loading/error boundaries work.
- Layout is responsive.

### Work Unit 8 — Export Flow

Build board export preview and request UI.

Acceptance:

- Export mode visible.
- Redaction visible.
- Export can be mocked.
- Export event tracked.

### Work Unit 9 — Test & QA

Add tests for selectors, redaction, RTL/LTR, loading/error, and mode switching.

Acceptance:

- Key tests pass.
- No known unsafe redaction leaks.
- RTL/LTR validated.

### Work Unit 10 — Handoff Report

Codex must produce an implementation report.

Required report:

```md
# Executive Dashboard Frontend Implementation Report

## Implemented Routes
## Implemented Components
## Implemented Hooks
## Implemented Selectors
## Data Source Used
## Modes Supported
## States Supported
## RTL/LTR Validation
## Redaction Validation
## Tests Added
## Known Gaps
## Next Recommended Work Unit
```

---

## 23. Acceptance Gates

The implementation is accepted only if:

- It reads from typed data source or mock API.
- It supports internal, board, investor-safe, and enterprise summary modes.
- It supports RTL/LTR.
- It renders KPI groups with context, not just values.
- It renders release readiness.
- It renders owner actions.
- It renders risk register preview.
- It renders investor snapshot.
- It supports board export preview.
- It handles loading, empty, error, stale, restricted states.
- It prevents obvious data leaks in restricted modes.
- It has tests for selectors and redaction.
- It follows Figma Design System Brief.
- It produces a Codex implementation report.

---

## 24. Forbidden Patterns

Codex must not:

- Build static screenshot UI.
- Hardcode KPI values inside components.
- Ignore redaction modes.
- Ignore RTL/LTR.
- Build a dashboard that is only a chart grid.
- Display sensitive customer or investor data in safe modes.
- Build export as a fake button with no intended flow.
- Create non-reusable KPI card components.
- Use color as the only indicator of status.
- Skip loading/error/empty states.
- Invent backend fields not in the API contract.
- Replace executive decisions with decorative analytics.

---

## 25. Done Means

Done means the Executive Dashboard frontend can be used in a product demo, internal operating review, board-style view, and investor-safe preview with realistic data, safe redaction, clear owner actions, release readiness visibility, evidence references, responsive layout, RTL/LTR behavior, and a credible path to production backend integration.

Done does not mean every chart is production-backed.

Done means the surface is structurally correct, evidence-aware, implementation-ready, and safe to evolve.

