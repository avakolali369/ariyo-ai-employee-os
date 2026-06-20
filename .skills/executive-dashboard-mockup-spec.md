# Ariyo Executive Dashboard Mockup Specification

## Core Contract

Ariyo Executive Dashboard Mockup Specification is not a generic leadership analytics page, vanity metric wall, investor slide, or board reporting screenshot.

It is the governed mockup specification for the executive command surface where founders, operators, board members, investors, executive sponsors, product leaders, finance owners, customer leaders, and governance stakeholders understand whether Ariyo is progressing toward a credible, enterprise-ready AI Employee Operating System.

The Executive Dashboard must compress Ariyo's most important operating truth into a single board-ready surface: product progress, AI Employee performance, Marketplace health, enterprise readiness, customer success, revenue momentum, runway discipline, release readiness, governance risk, investor confidence, and owner accountability.

Codex must implement this dashboard as a decision surface, not as a decorative chart page.

---

## Relationship to Existing Skills

This mockup specification must be read after:

1. `master-skill-index-map.md`
2. `product-surface-map.md`
3. `codex-execution-master-prompt.md`
4. `mockup-implementation-roadmap.md`
5. `figma-design-system-brief.md`
6. `frontend-implementation-sprint-plan.md`
7. `executive-kpi-scorecard-system.md`
8. `board-investor-governance-rhythm.md`
9. `post-funding-operating-plan.md`
10. `production-release-gate-checklist.md`

It must inform and reuse patterns from:

- `ariyo-dashboard-mockup-spec.md`
- `ariyo-launch-readiness-command-center-mockup-spec.md`
- `ariyo-customer-success-console-mockup-spec.md`
- `ariyo-internal-ops-command-center-mockup-spec.md`
- `post-pilot-investor-proof-pack.md`
- `investor-data-room-index.md`
- `fundraising-weekly-update-template.md`

---

## Purpose

The Executive Dashboard exists to answer six leadership questions quickly:

1. Are we building the right product at the right pace?
2. Are AI Employees delivering measurable customer outcomes?
3. Are customers adopting Ariyo and moving toward expansion?
4. Are Marketplace, Enterprise, Trust, and Release systems healthy enough to scale?
5. Are runway, team capacity, and investor commitments aligned with execution?
6. What decisions must leadership make this week?

The page must show:

- Current company operating state.
- Direction of progress.
- Major risks.
- Owners of critical work.
- Evidence behind claims.
- What changed since the last executive review.
- What needs board, investor, or founder action.

---

## Primary Users

### Founder / CEO

Needs fast clarity on company progress, risks, investor readiness, customer momentum, and next decisions.

### COO / Operator

Needs execution health, owner accountability, release gates, blockers, and operating cadence.

### Product Leader

Needs product execution, adoption, feature readiness, customer proof, and priority conflicts.

### CTO / Engineering Lead

Needs frontend/backend/API readiness, reliability, observability, security, and delivery risks.

### Customer Success Lead

Needs onboarding, adoption, health score, renewal/expansion signals, pilot evidence, and escalations.

### Finance Owner

Needs runway, spend, plan performance, AI cost exposure, revenue pipeline, and fundraising readiness.

### Investor / Board Viewer

Needs a restricted board-ready view with clear progress, evidence, risks, and asks without exposing unnecessary operational details.

---

## Dashboard Modes

The Executive Dashboard must support multiple modes. Codex must not hardcode one generic view.

### 1. Founder Operating Mode

Shows the most complete operational picture.

Includes:

- Current week operating score.
- Product progress.
- Customer traction.
- Launch readiness.
- Investor pipeline.
- Runway.
- Critical risks.
- Founder decisions.

### 2. Board Review Mode

A cleaner quarterly/monthly view for board or advisor meetings.

Includes:

- KPI summary.
- Strategic progress.
- Major risks.
- Use of funds.
- Customer proof.
- Investor/fundraising status.
- Board decisions needed.

### 3. Investor Snapshot Mode

A restricted view suitable for investor updates.

Includes:

- Momentum narrative.
- Traction metrics.
- Product progress.
- Pilot/customer proof.
- Fundraising pipeline health.
- Key asks.

Must not expose confidential customer names unless permission level allows it.

### 4. Post-Funding Operating Mode

Shows whether capital is converting into progress.

Includes:

- Hiring progress.
- Milestone delivery.
- Burn/runway.
- Product release progress.
- Customer commitments.
- Investor update readiness.

### 5. Pre-Launch Readiness Mode

Shows whether Ariyo is ready for MVP, pilot, beta, enterprise pilot, or production launch.

Includes:

- Release gate status.
- Blockers.
- Evidence completeness.
- Owners.
- Rollback readiness.
- Trust/compliance readiness.

---

## Required Page Structure

The Executive Dashboard should use a premium enterprise layout, not a crowded analytics wall.

### Global App Shell

Reuse app shell rules from:

- `ariyo-dashboard-mockup-spec.md`
- `figma-design-system-brief.md`
- `frontend-components.md`
- `frontend-responsive.md`

Required shell elements:

- Left sidebar navigation.
- Top bar with workspace selector.
- Mode selector.
- Date range selector.
- Export button.
- Last updated timestamp.
- Evidence freshness indicator.
- Permission-aware viewer badge.

### Page Header

Header must include:

- Title: `Executive Dashboard`
- Subtitle: concise operating status sentence.
- Current review period.
- Health status: `On Track`, `At Risk`, `Blocked`, or `Review Needed`.
- Primary CTA: `Open Weekly Review`
- Secondary CTA: `Export Board Snapshot`

Example status sentence:

> Ariyo is progressing toward MVP pilot readiness, with strong product execution and customer evidence, but backend contract migration and enterprise approval workflows require owner decisions this week.

---

## Above-the-Fold Executive Summary

The first screen must show a concise operating truth.

### Required Summary Cards

1. **Company Operating Score**
   - Composite score from 0–100.
   - Status label.
   - Change from last week.
   - Source: KPI Scorecard.

2. **Release Readiness**
   - MVP readiness percentage.
   - Pilot readiness percentage.
   - Production readiness status.
   - Top blocker.

3. **Customer Evidence**
   - Active pilots.
   - Accounts showing outcome proof.
   - At-risk accounts.
   - Expansion signals.

4. **Revenue & Fundraising**
   - Pipeline status.
   - Investor conversations active.
   - Data room readiness.
   - Runway months.

5. **Governance & Trust**
   - Open risks.
   - Compliance evidence completeness.
   - Policy exceptions.
   - Incident status.

6. **Owner Decisions Needed**
   - Count of open executive decisions.
   - Highest severity decision.
   - Owner.
   - Due date.

### UX Rules

- Each card must have one metric, one status, one trend, one evidence source, and one action.
- Avoid large decorative charts above the fold.
- The summary must be readable in under 60 seconds.
- Each card must link to its source surface or detail drawer.

---

## KPI Card System

Every KPI card must follow a consistent pattern.

### KPI Card Fields

- KPI name.
- Current value.
- Target value.
- Trend direction.
- Status.
- Time period.
- Owner.
- Evidence source.
- Last updated.
- Drill-down action.

### KPI Statuses

Use the following status model:

- `Healthy`
- `Watch`
- `At Risk`
- `Blocked`
- `Unknown`

### KPI Categories

The dashboard must group KPIs into these categories:

1. Product Execution
2. AI Employee Performance
3. Workflow Operations
4. Marketplace Health
5. Enterprise Readiness
6. Customer Success
7. Revenue & Fundraising
8. Runway & Finance
9. Trust, Compliance & Risk
10. Reliability & Operations
11. Team Capacity
12. Release Readiness

---

## Section 1: Product Execution Panel

This section shows whether Ariyo is building toward the locked MVP and product roadmap.

### Required Metrics

- MVP scope completion.
- Sprint completion rate.
- Critical surface completion.
- Design system component readiness.
- Codex work unit pass rate.
- Open frontend blockers.
- Backend contract alignment.

### Required UI Components

- Progress strip by sprint.
- Surface readiness grid.
- Blocker list.
- Owner assignment chips.
- Link to `frontend-implementation-sprint-plan.md` execution order.

### Decision Questions

- Which surface is blocking MVP readiness?
- Which component must be built next?
- Which Codex work units failed acceptance gates?
- Which product surface is overbuilt relative to MVP scope?

---

## Section 2: AI Employee Performance Panel

This section shows whether AI Employees are delivering accountable value.

### Required Metrics

- Active AI Employees.
- AI Employee success rate.
- Outcome completion rate.
- Human escalation rate.
- Approval required ratio.
- Failed/suspended runs.
- Average cost per successful outcome.
- Governance exception count.

### Required UI Components

- AI Employee performance table.
- Top performing AI Employees.
- At-risk AI Employees.
- Cost-to-outcome mini chart.
- Governance alert indicators.

### Drill-Down Links

Each AI Employee should link to:

- AI Employee Detail page.
- Run history.
- Incidents.
- Permissions.
- Version history.

---

## Section 3: Workflow Operations Panel

This section shows whether workflows are functioning as operational systems.

### Required Metrics

- Active workflows.
- Workflow completion rate.
- Blocked workflows.
- Manual approval wait time.
- Tool/integration failures.
- Simulation pass rate.
- Workflow version drift.

### Required UI Components

- Workflow health table.
- Approval bottleneck chart.
- Error type breakdown.
- Simulation readiness indicator.
- Launch/rollback status badges.

### Decision Questions

- Which workflow produces the most customer value?
- Which workflow needs redesign?
- Which approval gate is slowing execution?
- Which integrations create the most failures?

---

## Section 4: Marketplace Health Panel

This section shows whether the Marketplace is credible, trusted, and useful.

### Required Metrics

- Published templates.
- Certified templates.
- Installed templates.
- Template conversion rate.
- Template trust score average.
- Failed install attempts.
- Private catalog requests.
- Creator/partner active count.

### Required UI Components

- Marketplace health overview.
- Top templates.
- At-risk templates.
- Certification pipeline.
- Trust label coverage.
- Install compatibility alerts.

### Decision Questions

- Which templates drive adoption?
- Which templates need certification?
- Which marketplace risks affect enterprise readiness?
- Which partner assets should be promoted or paused?

---

## Section 5: Enterprise Readiness Panel

This section shows whether Ariyo can survive enterprise diligence.

### Required Metrics

- Enterprise admin readiness.
- SSO/SCIM readiness.
- Policy engine readiness.
- Approval workflow readiness.
- Audit log completeness.
- Data residency readiness.
- Compliance evidence completeness.
- Vendor review readiness.

### Required UI Components

- Enterprise readiness score.
- Compliance evidence checklist.
- Policy readiness matrix.
- Audit event coverage table.
- Enterprise blockers list.

### Decision Questions

- Which enterprise gate blocks pilot readiness?
- Which compliance evidence is missing?
- Which admin control must be built before enterprise demos?
- Which risks require legal/security owner review?

---

## Section 6: Customer Success Panel

This section shows customer adoption and expansion health.

### Required Metrics

- Active pilot accounts.
- Onboarding completion.
- Health score average.
- Accounts at risk.
- Outcome proof accounts.
- Renewal readiness.
- Expansion opportunities.
- Open escalations.

### Required UI Components

- Customer health table.
- Account risk cards.
- Onboarding progress strip.
- Expansion opportunity list.
- Success playbook status.

### Decision Questions

- Which customer needs executive attention?
- Which pilot has usable proof?
- Which customer is stuck before activation?
- Which signal supports fundraising or sales proof?

---

## Section 7: Revenue & Fundraising Panel

This section connects traction to fundraising and sales readiness.

### Required Metrics

- Investor pipeline by stage.
- Active investor conversations.
- Data room readiness.
- Fundraising weekly update readiness.
- Sales pipeline value.
- Enterprise opportunities.
- Proof pack completeness.
- Objection readiness.

### Required UI Components

- Investor pipeline strip.
- Sales pipeline summary.
- Data room freshness card.
- Fundraising update status.
- Top investor asks.
- Objection heatmap.

### Drill-Down Links

- Investor CRM Pipeline.
- Fundraising Weekly Update.
- Investor Data Room Index.
- Post-Pilot Investor Proof Pack.
- Fundraising Close Plan.

---

## Section 8: Runway & Finance Panel

This section shows capital discipline and burn-to-progress accountability.

### Required Metrics

- Runway months.
- Monthly burn.
- AI provider cost exposure.
- Cost per successful AI Employee outcome.
- Hiring plan progress.
- Budget variance.
- Use-of-funds progress.
- Revenue collected or committed.

### Required UI Components

- Runway card.
- Burn trend mini-chart.
- Cost exposure table.
- Use-of-funds tracker.
- Hiring progress card.
- Budget variance warnings.

### Decision Questions

- Is burn converting into product/customer progress?
- Which cost category needs intervention?
- Which hiring decision is blocked?
- Which cost trend threatens runway?

---

## Section 9: Trust, Compliance & Risk Panel

This section consolidates risk and governance posture.

### Required Metrics

- Open high-severity risks.
- Incidents open.
- Policy exceptions.
- Compliance evidence completeness.
- Security review readiness.
- Data privacy gaps.
- Audit log coverage.
- Marketplace trust incidents.

### Required UI Components

- Risk register summary.
- Severity heatmap.
- Evidence completeness checklist.
- Incident status list.
- Owner action list.

### Decision Questions

- Which risk needs executive escalation?
- Which compliance gap blocks enterprise readiness?
- Which marketplace trust issue needs policy action?
- Which incident needs customer communication?

---

## Section 10: Release Readiness Strip

The dashboard must include a visible release readiness strip near the top or sticky lower header.

### Required Release Modes

- Internal Alpha
- MVP Demo
- Private Pilot
- Enterprise Pilot
- Marketplace Alpha
- Public Beta
- Production Launch

### Required Fields

- Readiness percentage.
- Gate status.
- Number of blockers.
- Highest severity blocker.
- Owner.
- Evidence completeness.
- Next decision date.

### Gate Statuses

- `Ready`
- `Ready with Watch Items`
- `Blocked`
- `Not Assessed`
- `Deferred`

---

## Section 11: Owner Action Center

The Executive Dashboard must not only show metrics. It must tell leaders what to do.

### Required Owner Action Fields

- Action title.
- Severity.
- Owner.
- Due date.
- Source signal.
- Linked surface.
- Decision required.
- Evidence required.
- Status.

### Owner Action Categories

- Product decision.
- Customer escalation.
- Investor follow-up.
- Security/compliance review.
- Release blocker.
- Hiring/capacity decision.
- Budget decision.
- Marketplace intervention.

---

## Section 12: Board-Ready Export

The dashboard must support a board-ready export state.

### Export Types

- Board snapshot PDF.
- Investor update summary.
- Weekly operating review.
- Release readiness report.
- Pilot proof summary.
- Risk summary.

### Export Rules

- Export must include date and data freshness.
- Export must show evidence sources.
- Export must not include internal-only notes unless permission allows.
- Export must redact sensitive customer names when required.
- Export must include unresolved decisions and owners.

---

## Data Model Requirements

Codex must use typed data from the demo data and mock API layer.

### Required Types

```ts
type ExecutiveKpiStatus = 'healthy' | 'watch' | 'at_risk' | 'blocked' | 'unknown';

type ExecutiveKpi = {
  id: string;
  category: string;
  name: string;
  currentValue: number | string;
  targetValue?: number | string;
  unit?: string;
  trend: 'up' | 'down' | 'flat' | 'unknown';
  status: ExecutiveKpiStatus;
  ownerId: string;
  evidenceSourceIds: string[];
  lastUpdatedAt: string;
  drilldownHref?: string;
};

type ExecutiveAction = {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  ownerId: string;
  dueDate: string;
  sourceSignal: string;
  decisionRequired: string;
  evidenceRequired?: string;
  status: 'open' | 'in_review' | 'blocked' | 'done';
};
```

### Data Sources

Use data patterns from:

- `demo-data-seed-pack.md`
- `frontend-demo-data-implementation-guide.md`
- `frontend-api-mock-layer-plan.md`
- `backend-api-contract-review.md`
- `executive-kpi-scorecard-system.md`

---

## Required API Contracts

Codex may mock these endpoints during MVP, but must keep the contracts replaceable by real backend APIs.

### Executive Dashboard Endpoints

- `GET /api/executive/summary`
- `GET /api/executive/kpis`
- `GET /api/executive/actions`
- `GET /api/executive/release-readiness`
- `GET /api/executive/customer-proof`
- `GET /api/executive/investor-snapshot`
- `GET /api/executive/risk-register`
- `GET /api/executive/board-export-preview`

### API Response Requirements

All endpoints must follow Ariyo's standard response envelope:

```ts
type AriyoApiResponse<T> = {
  data: T;
  meta: {
    requestId: string;
    generatedAt: string;
    freshness: 'live' | 'recent' | 'stale' | 'mock';
  };
  errors?: AriyoApiError[];
};
```

---

## Component Inventory

The Executive Dashboard should reuse components from the Figma design system.

### Required Components

- Executive summary card.
- KPI card.
- KPI category section.
- Release readiness strip.
- Risk panel.
- Owner action table.
- Evidence link chip.
- Trend indicator.
- Status badge.
- Board export button.
- Mode selector.
- Date range selector.
- Data freshness badge.
- Permission badge.
- Drill-down drawer.
- Confidentiality warning.

### Forbidden Components

- Decorative metric tiles without action.
- Charts without targets.
- Status colors without labels.
- Investor-facing data without permission control.
- Fake proof quotes with no evidence source.
- Charts that imply precision where data is mock/demo.

---

## Visual Design Rules

The dashboard must feel:

- Executive.
- Calm.
- Dense but readable.
- Enterprise-safe.
- Board-ready.
- Evidence-backed.
- Operationally serious.

Avoid:

- Neon startup dashboards.
- Overanimated analytics.
- Consumer gamification.
- Generic admin styling.
- Dark-only crypto dashboard aesthetics.
- Charts that compete for attention.

---

## Interaction Rules

### Drill-Down Behavior

Every major KPI must support one of:

- Open source surface.
- Open detail drawer.
- Open evidence record.
- Open owner action.
- Open export preview.

### Decision Behavior

If a KPI is `Blocked` or `At Risk`, the dashboard must show:

- Reason.
- Owner.
- Due date.
- Required evidence.
- Decision needed.

### Evidence Behavior

Every claim-like metric must show evidence source.

Examples:

- Pilot proof.
- Data room readiness.
- Release readiness.
- Compliance completeness.
- Investor pipeline status.
- Customer expansion signal.

---

## Empty, Loading, Error, and Blocked States

### Empty State

Use when no KPI data exists yet.

Message should explain:

- What data is missing.
- Which setup step is required.
- Which skill or surface feeds this section.

### Loading State

Use skeletons that preserve dashboard layout.

### Error State

Show:

- Error message.
- Source endpoint.
- Retry action.
- Fallback mock state if allowed.

### Blocked State

Use when the viewer lacks permission.

Show:

- Permission reason.
- Request access action.
- Redacted preview when appropriate.

---

## Permission and Confidentiality Rules

The Executive Dashboard must not expose everything to every user.

### Access Levels

- Founder Full Access
- Executive Operator Access
- Board Viewer Access
- Investor Snapshot Access
- Finance Access
- Product/Engineering Access
- Customer Success Access

### Redaction Rules

Investor Snapshot Access must redact:

- Sensitive customer names unless approved.
- Internal incident notes.
- Unannounced fundraising terms.
- Confidential employee data.
- Security vulnerabilities.
- Raw legal notes.

Board Viewer Access may see more, but must still respect confidentiality.

---

## RTL/LTR Layout Law

This page must obey Ariyo's global RTL/LTR law.

### Persian and Arabic

For Persian/Farsi and Arabic interfaces:

- Entire page direction must be RTL.
- Sidebar must mirror to the right unless product shell policy explicitly keeps navigation fixed for bilingual enterprise accounts.
- Text, labels, headings, tables, cards, filters, dropdowns, tabs, breadcrumbs, status explanations, CTAs, forms, drawers, modals, and charts must be right-aligned.
- Numeric values may remain visually readable using locale-aware formatting.
- Trend arrows and directional icons must mirror when directional meaning exists.
- Timeline and progress flows must use RTL ordering when representing UI sequence.

### English and European LTR Languages

For English and European LTR interfaces:

- Entire page direction must be LTR.
- Text, labels, headings, tables, cards, filters, dropdowns, tabs, breadcrumbs, status explanations, CTAs, forms, drawers, modals, and charts must be left-aligned.
- Timeline and progress flows must use LTR ordering.

### Conflict Rule

If any other instruction conflicts with this law, the RTL/LTR law wins for localization, internationalization, alignment, component mirroring, and bidirectional layout behavior.

---

## Responsive Requirements

### Desktop

Desktop is the primary layout.

Required:

- Multi-column KPI cards.
- Sticky release readiness strip.
- Side navigation.
- Drill-down drawers.
- Export controls.

### Tablet

Tablet must prioritize:

- Executive summary.
- Release readiness.
- Owner actions.
- KPI category accordion.

### Mobile

Mobile is review-only, not full analysis.

Required:

- Summary cards stacked.
- Critical actions first.
- KPI categories collapsed.
- Export disabled or simplified.
- No dense tables without mobile card alternative.

---

## Analytics Events

Track the following events:

- `executive_dashboard_viewed`
- `executive_mode_changed`
- `executive_kpi_drilled_down`
- `executive_action_opened`
- `executive_release_gate_opened`
- `executive_board_export_generated`
- `executive_investor_snapshot_viewed`
- `executive_risk_panel_opened`
- `executive_evidence_source_opened`
- `executive_redacted_view_accessed`

Each event must include:

- User role.
- Workspace ID.
- Mode.
- Date range.
- Locale.
- Direction (`rtl` or `ltr`).
- Surface ID.

---

## Acceptance Criteria

The Executive Dashboard mockup is accepted only if:

1. It reads as an executive command surface, not a generic analytics page.
2. It shows company-level truth in the first screen.
3. It includes KPI categories from the Executive KPI Scorecard System.
4. It includes owner actions and decision requirements.
5. It links metrics to evidence sources.
6. It supports board-ready and investor snapshot modes.
7. It includes release readiness visibility.
8. It includes permission and redaction behavior.
9. It supports desktop, tablet, and mobile states.
10. It fully obeys the RTL/LTR layout law.
11. It can be built by Codex using demo data and mock API contracts.
12. It avoids vanity metrics and decorative charts.

---

## Codex Execution Rules

Codex must:

1. Read `executive-kpi-scorecard-system.md` first.
2. Read `figma-design-system-brief.md` second.
3. Read `frontend-demo-data-implementation-guide.md` third.
4. Read `frontend-api-mock-layer-plan.md` fourth.
5. Read this file fifth.
6. Build typed data contracts before UI composition.
7. Build reusable KPI and action components before the page.
8. Implement permission states before investor snapshot mode.
9. Implement RTL/LTR before final acceptance.
10. Generate a work unit report after implementation.

Codex must not:

- Hardcode disconnected metrics.
- Invent investor/customer proof.
- Build charts without evidence or targets.
- Expose redacted data to investor view.
- Ignore release gates.
- Skip owner action logic.
- Treat mock data as production truth.

---

## Work Unit Report Format

After implementing this surface, Codex must report:

```md
# Executive Dashboard Work Unit Report

## Implemented
- Components:
- Data contracts:
- API mocks:
- Page states:
- RTL/LTR support:

## Evidence Sources Used
- Skills read:
- Data fixtures used:
- API contracts used:

## Acceptance Criteria Results
- Passed:
- Failed:
- Needs review:

## Risks
- Product risks:
- Security/privacy risks:
- Data risks:
- UX risks:

## Next Actions
- Owner:
- Due date:
- Blocking issues:
```

---

## Golden Rule

The Executive Dashboard must help Ariyo leaders make better decisions faster.

If the dashboard shows metrics but does not clarify decisions, owners, evidence, risk, and next actions, it has failed.
