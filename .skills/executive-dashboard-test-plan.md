# Ariyo Executive Dashboard Test Plan

## Core Contract

Ariyo Executive Dashboard Test Plan is not a generic QA checklist, dashboard smoke test, chart verification note, or frontend bug list.

It is the governed test plan that tells Codex, frontend engineers, QA reviewers, product owners, executive stakeholders, and AI-assisted builders how to validate the Ariyo Executive Dashboard as a board-ready, investor-safe, permission-aware, evidence-backed, localized, exportable, and trustworthy executive command surface.

If the Executive Dashboard can show the wrong number, leak the wrong evidence, hide the wrong risk, mislead an investor, break in RTL, or export an unsafe board report, it is not ready.

---

## 1. Purpose

The Executive Dashboard compresses the operating truth of Ariyo into a single leadership surface. It aggregates product execution, AI Employee performance, workflow health, Marketplace health, enterprise readiness, customer success, revenue and fundraising, runway, release readiness, trust, risk, owner actions, board reporting, and investor-safe summaries.

This test plan ensures that the surface is not only visually correct, but also operationally safe.

The plan validates:

- API response handling
- selector correctness
- KPI calculation and formatting
- redaction and permission behavior
- investor-safe and board-ready modes
- RTL/LTR layout behavior
- loading, empty, error, stale, and blocked states
- export workflows
- accessibility
- responsive behavior
- evidence references
- owner action integrity
- risk visibility
- Codex implementation acceptance

---

## 2. Source Skills Codex Must Read First

Codex must read these skills before implementing or testing this surface:

1. `codex-execution-master-prompt.md`
2. `mockup-implementation-roadmap.md`
3. `mvp-build-scope-lock.md`
4. `figma-design-system-brief.md`
5. `frontend-implementation-sprint-plan.md`
6. `executive-kpi-scorecard-system.md`
7. `executive-dashboard-mockup-spec.md`
8. `executive-dashboard-demo-data-pack.md`
9. `executive-dashboard-api-contract.md`
10. `executive-dashboard-frontend-implementation-plan.md`
11. `frontend-testing.md`
12. `frontend-responsive.md`
13. `frontend-state-data.md`
14. `frontend-components.md`
15. `frontend-performance.md`
16. `observability-analytics-events.md`
17. `data-governance-privacy.md`
18. `admin-permissions.md`
19. `enterprise-account-governance.md`
20. `production-release-gate-checklist.md`

Codex must not test this surface in isolation from permission, evidence, and redaction rules.

---

## 3. Testing Principles

### 3.1 Executive truth over visual polish

The dashboard must be tested for whether it communicates the right operating truth, not only whether the layout looks correct.

### 3.2 No unsafe investor view

Investor-safe mode must never expose confidential customer names, internal incidents, unrestricted risk notes, sensitive financial details, raw audit evidence, or non-shareable operational metadata.

### 3.3 No silent data failure

If API data is missing, stale, blocked, or partially failed, the dashboard must show a clear state and not invent values.

### 3.4 No directionality ambiguity

Persian and Arabic interfaces must be fully RTL and right-aligned. English and European LTR interfaces must be fully LTR and left-aligned.

### 3.5 Evidence must be traceable

Every critical KPI, risk, owner action, release gate, and investor snapshot item must be traceable to an evidence reference or explainable source.

---

## 4. Test Matrix Overview

| Test Group | Required? | Blocks Release? |
|---|---:|---:|
| API contract tests | Yes | Yes |
| Selector and aggregation tests | Yes | Yes |
| Redaction tests | Yes | Yes |
| Permission mode tests | Yes | Yes |
| RTL/LTR tests | Yes | Yes |
| Loading/empty/error states | Yes | Yes |
| Export flow tests | Yes | Yes |
| Accessibility tests | Yes | Yes |
| Responsive tests | Yes | Yes |
| Analytics event tests | Yes | No, unless broken globally |
| Visual regression tests | Recommended | No, unless major layout break |
| Performance tests | Yes | Yes for severe regression |

---

## 5. API Contract Tests

The Executive Dashboard must use stable API contracts defined in `executive-dashboard-api-contract.md`.

### 5.1 Standard response envelope

Test that every endpoint supports:

- `data`
- `meta`
- `permissions`
- `visibilityMode`
- `evidenceRefs`
- `generatedAt`
- `freshness`
- `warnings`
- `errors`

### 5.2 Required endpoint families

Test endpoint integration for:

- dashboard overview
- KPI groups
- company operating score
- release readiness strip
- owner actions
- risk register
- investor snapshot
- board export
- evidence references
- redaction metadata

### 5.3 API failure handling

Each endpoint must be tested for:

- success
- partial success
- unauthorized
- forbidden
- missing data
- stale data
- server error
- timeout
- malformed payload
- blocked by redaction policy

### 5.4 Contract drift detection

Codex must fail the work unit if frontend types diverge from API contract fields.

Forbidden:

- silently accepting unknown critical fields
- hardcoding KPI values outside seed data or API mock layer
- displaying `undefined`, `null`, `NaN`, or raw error objects
- using chart data without source metadata

---

## 6. Selector Tests

Selectors convert raw executive data into UI-ready values.

Required selector tests:

- KPI group selector
- company operating score selector
- release readiness selector
- owner action selector
- risk severity selector
- investor snapshot selector
- board export selector
- redacted view selector
- localized label selector
- RTL/LTR formatting selector

### 6.1 KPI aggregation tests

Validate:

- counts
- percentages
- status labels
- trend direction
- prior-period comparison
- threshold classification
- severity classification
- freshness flags

### 6.2 Evidence selector tests

Every critical KPI card must expose:

- evidence ID
- evidence type
- evidence freshness
- permission visibility
- source surface

### 6.3 Stale data tests

Selectors must mark stale data when:

- `generatedAt` is older than allowed threshold
- evidence source is outdated
- release gate data is incomplete
- investor snapshot references old proof

---

## 7. Redaction and Permission Tests

This is a release-blocking group.

### 7.1 Visibility modes

Test all required modes:

- internal executive mode
- board mode
- investor-safe mode
- advisor mode
- department owner mode
- read-only observer mode

### 7.2 Redaction expectations

Investor-safe mode must redact:

- customer names unless approved
- sensitive revenue details
- internal incident notes
- legal/compliance unresolved details
- employee-specific notes
- private investor pipeline data
- raw logs
- unapproved pilot quotes
- confidential data room references

Board mode may show more detail but must still respect confidentiality flags.

### 7.3 Permission boundary tests

Test that unauthorized users cannot:

- view restricted KPI groups
- access board export
- open evidence details
- view investor notes
- view sensitive risks
- download reports
- change visibility mode
- approve release gates
- assign owner actions

### 7.4 Redaction metadata tests

When something is redacted, the UI must show a professional explanation:

- “Restricted”
- “Investor-safe view”
- “Board-only detail”
- “Requires admin permission”
- “Evidence hidden by privacy policy”

Forbidden:

- blank gaps without explanation
- leaking raw values in tooltips
- exposing sensitive data in DOM text when visually hidden
- exposing sensitive values in analytics events

---

## 8. Mode Switching Tests

The dashboard must support controlled mode switching.

Test transitions between:

- Internal → Board
- Board → Investor-safe
- Investor-safe → Internal
- Internal → Department owner
- Read-only → attempted restricted mode

Required validations:

- mode label updates
- data is reselected, not merely hidden visually
- redacted values are removed from render tree
- export mode matches selected visibility
- analytics event logs mode switch safely
- URL state does not leak restricted information

---

## 9. UI Component Tests

Required component test coverage:

- `ExecutiveDashboardPage`
- `ExecutiveDashboardHeader`
- `VisibilityModeSwitcher`
- `OperatingScoreCard`
- `KpiCard`
- `KpiGroupPanel`
- `ReleaseReadinessStrip`
- `OwnerActionCenter`
- `RiskPanel`
- `InvestorSnapshotPanel`
- `BoardExportPanel`
- `EvidenceReferenceBadge`
- `RedactedValue`
- `StaleDataNotice`
- `ExecutiveDashboardSkeleton`
- `ExecutiveDashboardErrorState`
- `ExecutiveDashboardEmptyState`

Each component must support:

- default state
- loading state
- empty state
- error state
- stale data state
- redacted state
- RTL state
- responsive state

---

## 10. Loading, Empty, Error, and Blocked States

### 10.1 Loading state

Must show skeletons that preserve layout stability.

Must not show stale values as if current unless explicitly labeled.

### 10.2 Empty state

Must explain why data is empty:

- no pilot data yet
- no investor snapshot yet
- no release gates created
- no owner actions assigned
- no marketplace data available
- no revenue data connected

### 10.3 Error state

Must show:

- user-safe explanation
- retry action when appropriate
- fallback state if partial data exists
- support/admin hint if permission-related

### 10.4 Blocked state

Must show when:

- user lacks permission
- data is redacted
- evidence source is restricted
- backend contract unavailable
- release mode is locked

---

## 11. RTL/LTR Layout Tests

This group is release-blocking.

### 11.1 Global layout law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

### 11.2 RTL test checklist

Test Persian and Arabic modes for:

- page shell direction
- sidebar position
- dashboard header alignment
- KPI card alignment
- tables and numeric columns
- chart labels
- trend arrows
- badges
- filters
- dropdowns
- modals
- tooltips
- export preview
- empty/error states
- owner action list
- risk panels

### 11.3 LTR test checklist

Test English and European language modes for:

- page shell direction
- left-aligned UI text
- left-to-right navigation
- table columns
- mode switcher
- cards and panels
- export layouts

### 11.4 Numeric and mixed-language rules

Numbers may remain neutral or locale-formatted, but labels, reading order, component layout, and alignment must follow locale direction.

Mixed English terms inside Persian/Arabic UI must not break RTL layout.

---

## 12. Responsive Tests

Test breakpoints:

- desktop wide
- desktop standard
- tablet landscape
- tablet portrait
- mobile large
- mobile small

Required behavior:

- KPI cards wrap predictably
- executive summary remains visible
- release readiness strip is not hidden
- risk panel remains accessible
- owner actions remain actionable
- visibility mode is never buried
- export action remains clear but permission-controlled
- tables collapse into readable cards when needed

Forbidden:

- horizontal scroll for primary content except controlled data tables
- clipped KPI values
- hidden risk labels
- inaccessible mode switcher
- broken RTL responsive order

---

## 13. Board Export Flow Tests

Board export is sensitive and release-blocking.

Test:

- export availability by permission
- export mode selection
- redaction applied before export
- evidence references included or summarized according to mode
- stale data warnings included
- date/time generated
- owner actions included
- open risks included
- release readiness included
- investor-safe export excludes restricted details

Export formats may include:

- PDF-ready view
- shareable board summary
- investor-safe snapshot
- internal executive packet

Forbidden:

- exporting internal-only values in investor-safe mode
- exporting hidden DOM content
- export without generated timestamp
- export without visibility label
- export without data freshness indicator

---

## 14. Accessibility Tests

Required checks:

- keyboard navigation
- focus order
- ARIA labels for charts and status badges
- color-independent status communication
- sufficient contrast
- screen-reader summaries for KPI cards
- accessible tooltips
- accessible modal behavior
- accessible mode switcher
- accessible export flow
- RTL screen-reader ordering sanity

Charts must include text alternatives.

Critical status indicators must not rely on color only.

---

## 15. Analytics Event Tests

Validate that events are emitted for:

- dashboard viewed
- visibility mode changed
- KPI group opened
- risk panel opened
- evidence reference opened
- board export started
- board export completed
- board export blocked
- owner action opened
- stale data warning viewed
- retry clicked

Events must not include sensitive redacted values.

---

## 16. Performance Tests

Required performance checks:

- dashboard initial render under acceptable threshold
- skeleton displays quickly
- large KPI payload does not freeze UI
- mode switching does not refetch unnecessarily unless required
- export preview does not block the main UI
- charts lazy-load when appropriate
- no unnecessary re-render loops in KPI cards

Performance regressions that make executive review feel unreliable block release.

---

## 17. Security and Privacy Tests

Test:

- no restricted data in client logs
- no restricted data in analytics payloads
- no restricted data in URL params
- no restricted data in browser title
- no restricted data in local storage unless explicitly approved
- no sensitive evidence in exported investor-safe mode
- permission denied states are professional and non-revealing

---

## 18. Codex Work Unit Sequence

Codex must implement and test in this order:

1. Read required source skills.
2. Confirm route and component structure.
3. Implement or verify API types.
4. Implement or verify mock API scenario support.
5. Implement selectors.
6. Write selector tests.
7. Implement components.
8. Write component state tests.
9. Implement redaction behavior.
10. Write redaction tests.
11. Implement RTL/LTR behavior.
12. Write RTL/LTR tests.
13. Implement export flow.
14. Write export tests.
15. Implement accessibility improvements.
16. Run accessibility checks.
17. Run responsive checks.
18. Generate work unit report.

Codex must not skip selector and redaction tests.

---

## 19. Required Test Files

Recommended files:

```txt
src/features/executive-dashboard/__tests__/selectors.test.ts
src/features/executive-dashboard/__tests__/redaction.test.ts
src/features/executive-dashboard/__tests__/permissions.test.ts
src/features/executive-dashboard/__tests__/mode-switching.test.tsx
src/features/executive-dashboard/__tests__/export-flow.test.tsx
src/features/executive-dashboard/__tests__/rtl-ltr.test.tsx
src/features/executive-dashboard/__tests__/states.test.tsx
src/features/executive-dashboard/__tests__/accessibility.test.tsx
src/features/executive-dashboard/__tests__/responsive-behavior.test.tsx
src/features/executive-dashboard/__tests__/analytics-events.test.ts
```

If the project uses a different test structure, Codex may adapt names but must preserve coverage.

---

## 20. Acceptance Gates

The Executive Dashboard test plan passes only if:

- API contract tests pass.
- Selector tests pass.
- Permission tests pass.
- Redaction tests pass.
- Mode switching tests pass.
- Board export tests pass.
- RTL/LTR tests pass.
- Loading/empty/error/blocked states pass.
- Accessibility baseline passes.
- Responsive baseline passes.
- Sensitive data is not leaked through DOM, analytics, exports, or URLs.
- Work Unit Report is generated.

---

## 21. Codex Stop Rules

Codex must stop and report if:

- API contract is unclear.
- redaction behavior is ambiguous.
- permission model conflicts with UI requirement.
- investor-safe mode could leak sensitive data.
- board export could include restricted values.
- RTL/LTR behavior is not testable.
- mock data does not support required scenarios.
- selector logic requires business assumptions not defined in source skills.
- tests cannot be run or verified.

---

## 22. Work Unit Report Format

Codex must report:

```md
# Executive Dashboard Test Work Unit Report

## Scope
- Files changed:
- Tests added:
- Components covered:
- Selectors covered:

## Source Skills Read
- ...

## Test Results
- API contract:
- Selectors:
- Redaction:
- Permissions:
- RTL/LTR:
- Export:
- Accessibility:
- Responsive:

## Risks Found
- ...

## Blockers
- ...

## Deferred Items
- ...

## Acceptance Gate Status
- Pass / Fail / Partial
```

---

## Golden Rule

The Executive Dashboard is allowed to simplify complexity, but it is never allowed to distort truth.

