# Ariyo Frontend Demo Data Implementation Guide

## Core Contract

Ariyo Frontend Demo Data Implementation Guide is not a random mock-data file, placeholder dataset, or temporary frontend shortcut.

It is the governed implementation guide that tells Codex, frontend engineers, product designers, product owners, and AI-assisted builders how to convert Ariyo's Demo Data Seed Pack into a typed, reusable, localized, state-aware, page-ready, component-ready frontend data layer for the Ariyo MVP, investor demo, customer demo, enterprise pilot demo, and marketplace alpha demo.

If demo data is inconsistent, the product feels unfinished.
If demo data is untyped, Codex will improvise.
If demo data is not mapped to surfaces, UI implementation becomes fragmented.
If localized demo data does not obey RTL/LTR law, the interface cannot be trusted for Persian, Arabic, English, or European-language launches.

Codex must treat this guide as the implementation contract for all frontend demo data used before production APIs are available.

---

## 1. Purpose

This guide defines how Ariyo demo data must be implemented inside the frontend codebase.

It connects:

- `demo-data-seed-pack.md`
- `mvp-demo-flow-script.md`
- `mvp-build-scope-lock.md`
- `frontend-implementation-sprint-plan.md`
- `codex-execution-master-prompt.md`
- `figma-design-system-brief.md`
- all MVP mockup specifications
- all product-surface specifications
- all RTL/LTR localization rules

The goal is to ensure that every MVP page has consistent, realistic, reusable, typed data without forcing Codex to invent content during implementation.

---

## 2. Non-Negotiable Demo Data Rules

Codex must obey these rules before implementing any UI page:

1. Do not hardcode page-specific fake data inside components.
2. Do not use lorem ipsum.
3. Do not invent new company names, AI Employees, users, templates, incidents, approvals, or metrics unless the seed pack explicitly requires a missing state.
4. Do not duplicate the same data model in multiple files.
5. Do not create UI-only objects that cannot be reused across pages.
6. Do not mix Persian/Arabic RTL data with English LTR layout behavior.
7. Do not make demo metrics look impossibly perfect.
8. Do not use production API assumptions unless `api-contracts.md` supports them.
9. Do not expose sensitive-looking fake secrets, keys, tokens, or real company data.
10. Do not block MVP implementation waiting for backend APIs.

---

## 3. Required Frontend Data Architecture

Codex must implement demo data using a layered structure.

Recommended structure:

```txt
src/
  lib/
    demo-data/
      index.ts
      types.ts
      demoCompany.ts
      demoUsers.ts
      demoWorkspaces.ts
      demoAiEmployees.ts
      demoWorkflows.ts
      demoMarketplaceTemplates.ts
      demoApprovals.ts
      demoIncidents.ts
      demoAuditLogs.ts
      demoMetrics.ts
      demoPricing.ts
      demoNotifications.ts
      demoTrustCenter.ts
      demoLaunchReadiness.ts
      demoCustomerSuccess.ts
      demoLocalization.ts
      selectors.ts
      mockApi.ts
      stateScenarios.ts
```

Minimum acceptable MVP structure:

```txt
src/lib/demo-data/
  index.ts
  types.ts
  demoData.ts
  selectors.ts
  mockApi.ts
  stateScenarios.ts
```

Codex may choose the compact structure for MVP speed, but must keep types, selectors, and mock API separate.

---

## 4. Canonical File Responsibilities

### `types.ts`

Owns all TypeScript types for demo data.

Must include at minimum:

- `DemoLocale`
- `Direction`
- `DemoCompany`
- `DemoWorkspace`
- `DemoUser`
- `DemoRole`
- `DemoAiEmployee`
- `DemoWorkflow`
- `DemoTemplate`
- `DemoApproval`
- `DemoIncident`
- `DemoAuditLog`
- `DemoMetric`
- `DemoPricingPlan`
- `DemoNotification`
- `DemoTrustEvidence`
- `DemoLaunchGate`
- `DemoCustomerAccount`
- `DemoStateScenario`

### `demoData.ts` or domain files

Owns the raw seed data.

Must not contain JSX.
Must not contain component logic.
Must not contain styling rules.
Must not contain API client calls.

### `selectors.ts`

Owns derived data.

Examples:

- get dashboard metrics
- get active AI Employees
- get pending approvals
- get marketplace recommendations
- get launch blockers
- get customer success risk accounts
- get templates compatible with plan
- get templates blocked by region
- get incident severity summary

### `mockApi.ts`

Owns async mock functions.

Examples:

```ts
export async function getDashboardDemoData() {}
export async function getAiEmployeeDetailDemoData(id: string) {}
export async function getMarketplaceTemplatesDemoData() {}
export async function getTemplateDetailDemoData(id: string) {}
export async function getEnterpriseAdminDemoData() {}
```

Mock API functions must return promises to allow future replacement by real API calls.

### `stateScenarios.ts`

Owns loading, empty, error, blocked, and degraded-state examples.

Must support:

- default demo state
- empty workspace state
- first AI Employee state
- pending approval state
- incident active state
- plan-limited state
- region-blocked state
- permission-blocked state
- enterprise-review state
- launch-blocked state

---

## 5. Global RTL/LTR Data Law

Persian/Farsi and Arabic demo data must render through RTL layouts and right-aligned UI elements.

English and European-language demo data must render through LTR layouts and left-aligned UI elements.

This applies to:

- navigation labels
- headings
- descriptions
- cards
- tables
- forms
- empty states
- error states
- modals
- tooltips
- dashboard metrics
- marketplace templates
- pricing cards
- audit logs
- notifications
- launch readiness messages
- Trust Center evidence labels
- Customer Success account summaries

Codex must implement locale direction through a single source of truth, not scattered conditional classes.

Recommended type:

```ts
export type DemoLocale = 'en' | 'fa' | 'ar';
export type Direction = 'ltr' | 'rtl';

export const localeDirections: Record<DemoLocale, Direction> = {
  en: 'ltr',
  fa: 'rtl',
  ar: 'rtl',
};
```

Recommended helper:

```ts
export function getDirection(locale: DemoLocale): Direction {
  return localeDirections[locale] ?? 'ltr';
}
```

For future European locales such as German, French, Spanish, Italian, Dutch, or Swedish, direction must remain `ltr`.

---

## 6. Required Demo Company Seed

Codex must use one coherent sample company unless explicitly implementing multi-account Customer Success or Marketplace scenarios.

Recommended primary company:

```ts
const demoCompany = {
  id: 'company-nova-retail',
  name: 'Nova Retail Group',
  industry: 'Retail Operations',
  size: 'Mid-market',
  region: 'EU',
  plan: 'Pro',
  workspaceCount: 3,
  aiEmployeeCount: 8,
  workflowCount: 14,
  marketplaceInstalledAssets: 6,
};
```

Persian localized display may use:

```txt
گروه خرده‌فروشی نوا
```

Arabic localized display may use:

```txt
مجموعة نوفا للتجزئة
```

Never change IDs across locales.
Only display labels change.

---

## 7. Required Demo Users

Minimum users:

1. Founder / Owner
2. Operations Manager
3. Customer Support Lead
4. Finance Manager
5. Security Admin
6. Marketplace Creator
7. Partner Consultant
8. Customer Success Manager

Each user must include:

- id
- name
- role
- department
- email
- avatar initials
- permission level
- workspace access
- locale preference
- last active

Do not use real people.
Do not use real email domains except safe example domains.
Use `example.com` or internal demo domains.

---

## 8. Required AI Employee Seed

Minimum AI Employees for MVP:

1. Support Triage Specialist
2. Sales Follow-up Assistant
3. Finance Document Reviewer
4. Marketplace Template Analyst
5. Customer Success Risk Monitor
6. Workflow Quality Auditor
7. Compliance Evidence Assistant
8. Launch Readiness Coordinator

Each AI Employee must include:

- id
- name
- role
- status
- plan availability
- owner
- workspace
- health score
- outcome score
- risk level
- cost estimate
- active workflows
- connected tools
- knowledge sources
- memory status
- permission scope
- last run
- version
- pending approvals
- incidents

Status enum:

```ts
type AiEmployeeStatus =
  | 'draft'
  | 'simulation'
  | 'pending_approval'
  | 'active'
  | 'paused'
  | 'needs_review'
  | 'incident_locked';
```

---

## 9. Required Workflow Seed

Minimum workflows:

1. Support Ticket Intake
2. Lead Qualification Follow-up
3. Invoice Review
4. Marketplace Template Review
5. Weekly Customer Health Scan
6. Compliance Evidence Collection
7. Launch Readiness Gate Review
8. Incident Escalation Workflow

Each workflow must include:

- id
- name
- trigger
- steps
- assigned AI Employees
- human approval gates
- connected tools
- status
- run count
- success rate
- average duration
- last run
- risk level
- cost estimate
- version
- rollout stage

Workflow status enum:

```ts
type WorkflowStatus =
  | 'draft'
  | 'simulation'
  | 'pending_approval'
  | 'active'
  | 'degraded'
  | 'paused'
  | 'failed';
```

---

## 10. Required Marketplace Template Seed

Minimum marketplace templates:

1. Support Triage AI Employee
2. Sales Follow-up Workflow
3. Finance Review Pack
4. Customer Health Monitor
5. Compliance Evidence Collector
6. Launch Readiness Command Pack
7. Marketplace Quality Reviewer
8. Persian Customer Support Localization Pack
9. Arabic Enterprise Trust Pack
10. Retail Operations AI Team

Each template must include:

- id
- name
- category
- type
- creator
- trust labels
- certification status
- price model
- plan compatibility
- region compatibility
- required permissions
- dependencies
- rating
- install count
- outcome claims
- support SLA
- last updated
- version
- install eligibility

Trust labels may include:

- Verified Creator
- Enterprise Ready
- Region Compatible
- Low Permission Risk
- Human Review Required
- Certified Template
- Data Residency Aware
- Governance Tested

---

## 11. Required Approval Seed

Minimum approval items:

- AI Employee launch approval
- Workflow production rollout approval
- Marketplace template install approval
- Data source access approval
- High-cost usage approval
- Region compatibility exception
- Policy override request
- Incident closure approval

Each approval must include:

- id
- title
- type
- requested by
- owner
- status
- priority
- due date
- affected surface
- evidence links
- decision options
- audit status

---

## 12. Required Incident Seed

Minimum incidents:

1. Workflow degradation
2. Template install blocked by permission policy
3. AI Employee cost spike
4. Data source connection failure
5. Marketplace trust review delay
6. Customer success risk escalation

Each incident must include:

- id
- title
- severity
- status
- affected systems
- owner
- opened at
- updated at
- resolution target
- customer impact
- linked AI Employee
- linked workflow
- linked template
- audit trail

Severity enum:

```ts
type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';
```

---

## 13. Required Dashboard Metrics Seed

Dashboard must have realistic metrics:

- AI Employees active
- workflows running
- pending approvals
- unresolved incidents
- monthly AI cost estimate
- outcome score
- success rate
- risk trend
- marketplace recommendations
- launch readiness score

Metrics must not all be green.
There must be at least one warning and one pending decision to make the UI credible.

---

## 14. Required Pricing Seed

Pricing must include:

- Basic
- Pro
- Smart
- Enterprise

Each plan must include:

- plan id
- display name
- headline
- target buyer
- monthly price placeholder or sales-assisted label
- AI Employee allowance
- workflow allowance
- marketplace access
- governance controls
- support level
- usage controls
- recommended flag
- CTA
- limitations

Do not invent final real pricing if strategy is not locked.
Use placeholder-friendly language such as:

- Starting package
- Team package
- Advanced operating package
- Contact sales

---

## 15. Required Trust Center Seed

Trust Center demo data must include:

- security posture cards
- privacy commitments
- data residency controls
- marketplace trust rules
- AI governance controls
- uptime status
- incident transparency
- compliance evidence request
- audit readiness summary

Trust Center demo data must not falsely claim certifications that Ariyo has not actually earned.
Use wording such as:

- Designed for SOC 2 readiness
- Enterprise evidence center preview
- Compliance review workflow
- Security controls roadmap

Never claim active certifications unless verified outside this demo data system.

---

## 16. Required Launch Readiness Seed

Launch readiness data must include:

- readiness score
- launch gates
- blockers
- owners
- evidence status
- timeline
- demo readiness
- MVP readiness
- enterprise pilot readiness
- marketplace alpha readiness

Minimum gates:

1. Product Surface Complete
2. Design System Complete
3. Dashboard Demo Ready
4. AI Employee Builder Demo Ready
5. Workflow Demo Ready
6. Marketplace Demo Ready
7. Enterprise Admin Preview Ready
8. Trust Center Preview Ready
9. RTL/LTR Verified
10. Demo Script Approved

---

## 17. Required Customer Success Seed

Customer Success console must include multiple accounts:

- healthy account
- onboarding account
- at-risk account
- expansion-ready account
- enterprise review account

Each account must include:

- id
- company name
- plan
- health score
- adoption score
- active AI Employees
- active workflows
- risk flags
- renewal date
- expansion opportunity
- CSM owner
- next best action

---

## 18. Required Audit Log Seed

Audit logs must include realistic events:

- user invited
- role changed
- AI Employee launched
- workflow approved
- template installed
- permission requested
- policy override denied
- incident closed
- evidence exported
- data residency setting updated

Each audit log must include:

- id
- timestamp
- actor
- action
- target
- risk level
- workspace
- evidence id
- IP placeholder

Use fake IP ranges reserved for documentation where needed.

---

## 19. Mock API Contract

Codex must expose demo data through mock API functions.

Recommended pattern:

```ts
const DEMO_DELAY_MS = 250;

function withDelay<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), DEMO_DELAY_MS);
  });
}

export function getDemoDashboard() {
  return withDelay(selectDashboardData());
}
```

Mock API must support future replacement by real API clients.

Do not import React into mock API files.

---

## 20. Selector Contract

Selectors must derive page-specific data from canonical seed objects.

Examples:

```ts
export function selectActiveAiEmployees() {}
export function selectPendingApprovals() {}
export function selectDashboardMetrics() {}
export function selectMarketplaceRecommendations(planId: string) {}
export function selectTemplateInstallEligibility(templateId: string, workspaceId: string) {}
export function selectLaunchReadinessSummary() {}
```

Selectors must not mutate original data.

---

## 21. State Scenario Contract

Every MVP surface must support:

- default
- loading
- empty
- error
- permission blocked
- plan limited
- region blocked
- approval required
- degraded

Recommended type:

```ts
type DemoScenario =
  | 'default'
  | 'loading'
  | 'empty'
  | 'error'
  | 'permission_blocked'
  | 'plan_limited'
  | 'region_blocked'
  | 'approval_required'
  | 'degraded';
```

Codex must not build only the happy path.

---

## 22. Component Data Mapping

### Dashboard Components

Use:

- AI Employee summaries
- workflow summaries
- approval summaries
- incident summaries
- metrics
- notifications
- marketplace recommendations

### AI Employee Builder

Use:

- user roles
- available tools
- knowledge sources
- policy profiles
- simulation scenarios
- launch readiness gates

### AI Employee Detail

Use:

- AI Employee object
- workflows
- incidents
- cost metrics
- audit logs
- version history

### Workflow Builder

Use:

- workflow object
- step templates
- AI Employees
- tools
- approvals
- simulation outcomes

### Marketplace Homepage

Use:

- templates
- categories
- trust labels
- recommendations
- plan compatibility

### Template Detail

Use:

- template object
- install eligibility
- permissions
- dependencies
- reviews
- trust labels
- region compatibility

### Enterprise Admin

Use:

- users
- roles
- policies
- approvals
- audit logs
- marketplace controls
- data residency settings

### Trust Center

Use:

- trust evidence
- uptime status
- incident transparency
- compliance readiness

### Customer Success Console

Use:

- customer accounts
- health scores
- renewal dates
- success playbooks
- escalation items

### Internal Ops Command Center

Use:

- incidents
- queues
- runtime health
- launch readiness
- customer risks

---

## 23. Localization Data Contract

Codex must keep text localized through a dictionary or content map.

Minimum structure:

```ts
export const demoCopy = {
  en: {
    dashboardTitle: 'AI Employee Command Center',
  },
  fa: {
    dashboardTitle: 'مرکز فرماندهی کارمندان هوش مصنوعی',
  },
  ar: {
    dashboardTitle: 'مركز قيادة موظفي الذكاء الاصطناعي',
  },
};
```

Do not hardcode Persian or Arabic copy inside components without locale handling.

---

## 24. Codex Implementation Order

Codex must implement demo data in this order:

1. `types.ts`
2. `demoLocalization.ts`
3. `demoCompany.ts`
4. `demoUsers.ts`
5. `demoWorkspaces.ts`
6. `demoAiEmployees.ts`
7. `demoWorkflows.ts`
8. `demoMarketplaceTemplates.ts`
9. `demoApprovals.ts`
10. `demoIncidents.ts`
11. `demoAuditLogs.ts`
12. `demoMetrics.ts`
13. `demoPricing.ts`
14. `demoTrustCenter.ts`
15. `demoLaunchReadiness.ts`
16. `demoCustomerSuccess.ts`
17. `demoNotifications.ts`
18. `stateScenarios.ts`
19. `selectors.ts`
20. `mockApi.ts`
21. `index.ts`
22. page integration
23. component integration
24. state validation
25. RTL/LTR validation

---

## 25. Codex Stop Rules

Codex must stop and report if:

- a page needs data not defined by this guide or seed pack
- a component uses hardcoded fake data
- Persian or Arabic UI is not RTL/right-aligned
- English or European UI is not LTR/left-aligned
- a Trust Center claim implies unverified certification
- a pricing value appears final without approval
- a metric looks unrealistic or unsupported
- a Marketplace install flow lacks permission or region checks
- an AI Employee action lacks governance context
- a Launch Readiness decision lacks owner or evidence

---

## 26. Work Unit Report Format

After implementing demo data, Codex must report:

```md
## Demo Data Work Unit Report

### Files Created
- ...

### Files Updated
- ...

### Data Domains Implemented
- ...

### Selectors Added
- ...

### Mock API Functions Added
- ...

### Page Surfaces Connected
- ...

### RTL/LTR Validation
- Persian/Farsi: pass/fail
- Arabic: pass/fail
- English/European LTR: pass/fail

### Risks / Gaps
- ...

### Next Recommended Work Unit
- ...
```

---

## 27. Acceptance Criteria

This implementation is accepted only if:

- all demo data is typed
- no MVP page uses random inline mock data
- selectors derive page-ready data
- mock API returns promise-based responses
- loading/error/empty/blocked states exist
- Persian and Arabic demo data supports RTL/right alignment
- English and European-language demo data supports LTR/left alignment
- Trust Center claims are safe
- pricing claims are non-final unless approved
- Marketplace data includes compatibility and permissions
- AI Employee data includes governance, cost, and outcome context
- Launch Readiness data includes owners, gates, blockers, evidence, and score

---

## 28. Forbidden Patterns

Codex must not:

- create `const cards = [...]` inside page components as the only data source
- mix demo data with Tailwind classes
- use lorem ipsum
- use real customer/company names
- use fake security certifications as if they are real
- use perfect 100% success metrics everywhere
- build demo data in a way that cannot be replaced by API responses
- ignore RTL/LTR rules
- create one-off data shapes per component
- use untyped `any` data structures
- duplicate IDs across domains

---

## 29. Golden Rule

Ariyo demo data must make the MVP feel like a coherent operating company is already using the product.

Every demo object must support a product story.
Every product story must map to a UI surface.
Every UI surface must map to a skill contract.
Every skill contract must remain executable by Codex without invention.
