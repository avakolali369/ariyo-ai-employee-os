# Ariyo Executive Dashboard Release Gate

## Core Contract

Ariyo Executive Dashboard Release Gate is not a generic launch checklist, QA note, or executive dashboard approval memo.

It is the governed release-decision system that determines whether the Ariyo Executive Dashboard is allowed to be used in internal leadership reviews, board meetings, investor-safe reviews, enterprise executive business reviews, and production customer environments.

The Executive Dashboard must not be released because it looks complete.

It may be released only when its data, permissions, redaction behavior, evidence references, export flows, RTL/LTR behavior, accessibility, performance, and operating interpretation are safe enough for executive decision-making.

---

## Why This Gate Exists

The Executive Dashboard compresses Ariyo's operating truth into one surface. That makes it powerful, but also risky.

If it shows the wrong metric, hides the wrong risk, leaks investor-sensitive data, exposes customer-sensitive evidence, misrepresents release readiness, or breaks in RTL, it can damage trust with founders, operators, board members, investors, enterprise buyers, and customers.

This release gate protects Ariyo from shipping an executive surface that is visually impressive but operationally unsafe.

---

## Required Source Skills

Codex must read these skills before implementing or approving this gate:

1. `executive-kpi-scorecard-system.md`
2. `executive-dashboard-mockup-spec.md`
3. `executive-dashboard-demo-data-pack.md`
4. `executive-dashboard-api-contract.md`
5. `executive-dashboard-frontend-implementation-plan.md`
6. `executive-dashboard-test-plan.md`
7. `frontend-api-mock-layer-plan.md`
8. `backend-api-contract-review.md`
9. `production-readiness-gap-audit.md`
10. `production-release-gate-checklist.md`
11. `board-investor-governance-rhythm.md`
12. `investor-data-room-index.md`
13. `data-governance-privacy.md`
14. `security-threat-model.md`
15. `enterprise-readiness.md`
16. `frontend-responsive.md`
17. `frontend-components.md`
18. `frontend-testing.md`
19. `frontend-performance.md`
20. `codex-execution-master-prompt.md`

Codex must not implement this release gate in isolation.

---

## Release Modes Covered

This gate must support five release modes.

### 1. Internal Operating Review Mode

Used by founders and internal operators.

Allowed content:
- Full operational KPIs
- Owner actions
- release readiness
- runway and finance summaries
- customer risk summaries
- internal blockers
- incident/risk summaries

Required protections:
- role-based access
- audit log for export
- no public sharing
- clear timestamp/freshness indicators

### 2. Board Review Mode

Used for board/advisor review.

Allowed content:
- board-ready KPIs
- investor-safe traction metrics
- runway summary
- risk register summary
- decision requests
- evidence links with controlled access

Required protections:
- redacted sensitive customer names when required
- explicit data freshness
- export watermark
- board packet versioning

### 3. Investor-Safe Mode

Used for fundraising and investor follow-up.

Allowed content:
- traction summary
- pilot proof summary
- anonymized customer proof when needed
- pipeline highlights where appropriate
- product/release progress
- selected governance and trust signals

Forbidden content:
- raw customer data
- internal salaries or non-approved finance detail
- unapproved customer names
- unresolved security incidents unless explicitly approved
- internal board-level conflicts
- unredacted revenue pipeline by investor name

### 4. Enterprise EBR Mode

Used for customer executive business reviews.

Allowed content:
- customer-specific outcomes
- AI Employee adoption
- workflow performance
- success plan progress
- risk and support summary
- next quarter recommendations

Required protections:
- strict tenant scoping
- no cross-customer leakage
- customer-specific permission checks
- audit trail for export

### 5. Production Customer Admin Mode

Used inside production customer accounts.

Allowed content:
- account-specific executive summary
- workspace readiness
- AI Employee operational health
- governance status
- billing/usage summary
- admin action items

Required protections:
- workspace and organization scoping
- role-based permission checks
- no investor or internal Ariyo metrics

---

## Release Decision Levels

Every Executive Dashboard release must end in one of these decisions.

| Decision | Meaning | Release Allowed? |
|---|---|---:|
| `BLOCKED` | Critical safety, data, permission, or correctness issue exists | No |
| `CONDITIONAL` | Non-critical issues exist; limited release allowed with mitigation | Limited |
| `READY_INTERNAL` | Safe for internal operator use | Internal only |
| `READY_BOARD` | Safe for board/advisor review | Board only |
| `READY_INVESTOR_SAFE` | Safe for controlled investor sharing | Investor-safe only |
| `READY_ENTERPRISE_EBR` | Safe for customer executive review | Customer-scoped only |
| `READY_PRODUCTION` | Safe for production use under governed permissions | Yes |

Codex must never mark a release as `READY_PRODUCTION` if any `P0` or `P1` gate fails.

---

## Severity Model

### P0 — Hard Blocker

A P0 blocks every release mode.

Examples:
- incorrect KPI calculation
- cross-tenant data leak
- redaction failure
- board export includes forbidden data
- investor-safe mode exposes internal confidential data
- customer EBR mode shows another customer's data
- permission bypass
- severe RTL/LTR layout break that changes meaning or hides controls
- broken release readiness status

### P1 — Release Blocker for External Use

A P1 blocks board, investor, enterprise, and production use, but may allow internal testing.

Examples:
- missing evidence references
- stale data without warning
- export watermark missing
- inaccessible critical components
- incomplete blocked/error states
- owner action mismatch
- unclear source of truth for metric

### P2 — Conditional Release Issue

A P2 may allow limited release if documented.

Examples:
- minor visual inconsistency
- secondary tooltip missing
- non-critical analytics event missing
- minor mobile layout issue for a non-core view

### P3 — Backlog Improvement

A P3 does not block release.

Examples:
- polishing copy
- improving chart microcopy
- adding secondary filters
- optional animation improvements

---

## Gate 1 — Product Scope Gate

The dashboard must match the approved scope.

Required:
- dashboard mode selector is implemented
- KPI sections match `executive-kpi-scorecard-system.md`
- UI matches `executive-dashboard-mockup-spec.md`
- build sequence follows `executive-dashboard-frontend-implementation-plan.md`
- no unapproved executive features are added
- no vanity metric panels are introduced
- board/investor/customer modes are not mixed

Block release if:
- Codex adds metrics without a defined KPI contract
- page contains decorative analytics with no decision value
- board/investor/customer modes share unsafe data

---

## Gate 2 — API Contract Gate

The dashboard must follow the API contract.

Required:
- standard response envelope is used
- standard error envelope is used
- all endpoints match `executive-dashboard-api-contract.md`
- timestamps and freshness are visible
- evidence refs are typed
- redaction metadata is returned where needed
- mode-specific API behavior is implemented
- mock API and real API migration path are aligned

Required endpoint families:
- `/executive-dashboard/overview`
- `/executive-dashboard/kpis`
- `/executive-dashboard/release-readiness`
- `/executive-dashboard/owner-actions`
- `/executive-dashboard/risks`
- `/executive-dashboard/investor-snapshot`
- `/executive-dashboard/board-export`
- `/executive-dashboard/evidence`

Block release if:
- frontend expects fields not in the contract
- API returns untyped or ambiguous KPI data
- redaction mode is determined only in the frontend
- export endpoint bypasses permission checks

---

## Gate 3 — KPI Correctness Gate

Every KPI must be correct, explainable, and evidence-backed.

Required for every KPI:
- stable KPI key
- label
- description
- current value
- previous value where applicable
- unit
- trend direction
- health status
- owner
- source system
- timestamp
- evidence reference
- allowed visibility modes

KPI groups that must pass:
- Company Operating Score
- Product Execution
- AI Employee Performance
- Workflow Operations
- Marketplace Health
- Enterprise Readiness
- Customer Success
- Revenue/Fundraising
- Runway/Finance
- Trust/Risk
- Release Readiness

Block release if:
- KPI math is not traceable
- trend direction is inverted
- score color conflicts with severity
- owner is missing
- KPI is shown without freshness
- KPI is visible in a mode where it should be redacted

---

## Gate 4 — Permission & Visibility Gate

The dashboard must enforce access by role and mode.

Required roles:
- Founder
- Executive Operator
- Finance Owner
- Product Lead
- Customer Success Lead
- Board Viewer
- Investor Viewer
- Enterprise Executive Viewer
- Customer Admin
- Read-Only Auditor

Required checks:
- role can access route
- role can access selected mode
- role can export data
- role can view evidence references
- role can see finance/runway data
- role can see customer names
- role can see investor pipeline details
- role can see internal risks

Block release if:
- investor viewer can access internal mode
- board viewer sees unapproved raw customer data
- customer admin sees Ariyo company metrics
- exported report ignores visibility mode

---

## Gate 5 — Redaction Gate

Redaction must be enforced consistently across UI, API, export, and evidence links.

Required redaction states:
- `none`
- `partial`
- `customer_anonymized`
- `finance_summary_only`
- `risk_summary_only`
- `evidence_hidden`
- `investor_safe`
- `board_safe`
- `customer_scoped`

Required behavior:
- redacted fields must show intentional replacement text
- hidden evidence must explain why it is hidden
- exports must match current redaction mode
- screenshots must not reveal hidden data through tooltips or alternate states
- redaction must be tested with fixtures

Block release if:
- redaction is visual-only
- hidden values remain in DOM data attributes
- tooltips expose redacted values
- export includes unredacted fields

---

## Gate 6 — Board Export Gate

Board export must be safe, accurate, and versioned.

Required export formats:
- executive PDF-style summary or export-ready HTML
- board packet summary
- investor-safe snapshot
- customer EBR summary where applicable

Required export metadata:
- generated by
- generated at
- data freshness window
- visibility mode
- redaction mode
- version number
- source filters
- included evidence refs
- omitted sections
- confidentiality label

Required export states:
- generating
- generated
- failed
- blocked by permission
- blocked by missing data
- redaction warning

Block release if:
- export can be generated by unauthorized role
- export has no confidentiality label
- export has no freshness window
- export differs from UI without explanation
- export contains hidden data

---

## Gate 7 — Investor-Safe Mode Gate

Investor-safe mode must be explicitly safe for external fundraising review.

Required:
- investor-safe route or mode is clear
- customer-sensitive data is anonymized or approved
- finance data is summary-level unless approved
- internal risks are summarized without operationally sensitive details
- investor pipeline data is hidden unless intentionally included
- evidence links require controlled access
- data room references are permission-aware

Block release if:
- investor-safe mode exposes raw customer records
- internal owner notes appear
- unresolved incidents are visible without approved framing
- data room links are public or uncontrolled

---

## Gate 8 — Customer/Enterprise Mode Gate

Customer-facing executive mode must be tenant-safe.

Required:
- strict organization and workspace scoping
- no Ariyo internal company KPIs
- customer-specific AI Employee performance
- customer-specific workflow outcomes
- customer-specific risks and next actions
- EBR-ready export
- support/escalation status where applicable

Block release if:
- any cross-customer data appears
- customer sees internal investor/fundraising data
- customer sees internal risk notes not approved for EBR
- evidence refs include other tenants

---

## Gate 9 — Evidence Reference Gate

Every executive claim must connect to evidence.

Required evidence ref types:
- metric source
- pilot evidence
- customer success evidence
- release gate evidence
- trust/compliance evidence
- incident evidence
- revenue/fundraising evidence
- data room artifact
- board decision record

Required evidence fields:
- id
- label
- source
- owner
- visibility
- freshness
- redaction mode
- linked surface

Block release if:
- executive claim has no evidence ref
- evidence link violates role permission
- evidence is stale and not marked stale
- evidence status conflicts with KPI status

---

## Gate 10 — UX & Interpretation Gate

The dashboard must make executive interpretation clear.

Required:
- no ambiguous score colors
- every risk status has a legend or explanation
- every KPI has a description or tooltip
- every owner action has a next step
- every blocked item has a resolution path
- every mode has a visible purpose
- every stale value is clearly marked
- every hidden value explains visibility restriction

Block release if:
- dashboard can be interpreted as healthier than it is
- red/amber/green states are inconsistent
- owner actions are vague
- release readiness appears ready while blockers exist

---

## Gate 11 — RTL/LTR Release Gate

This gate is mandatory.

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

Required RTL/LTR checks:
- route direction is set from locale
- text alignment follows locale direction
- sidebar mirrors correctly
- tables mirror correctly
- KPI cards align correctly
- charts preserve numeric meaning
- trend arrows do not invert incorrectly
- risk panels preserve severity meaning
- modals and drawers open from the correct side
- tooltips align correctly
- export output follows selected locale direction
- icons that imply direction are mirrored only when semantically correct

Block release if:
- Persian or Arabic UI is left-aligned
- English or European UI is right-aligned
- RTL layout hides export, owner action, or risk controls
- mirrored chart changes metric meaning
- export ignores selected locale direction

---

## Gate 12 — Accessibility Gate

Required:
- keyboard navigation works
- focus states are visible
- mode selector is accessible
- charts have text alternatives
- status colors have text labels
- export flow is screen-reader understandable
- tables use semantic structure
- dialogs trap focus correctly
- touch targets meet minimum size
- reduced motion is respected

Block release if:
- dashboard cannot be navigated by keyboard
- status depends on color only
- export modal is inaccessible
- critical KPI cards are not screen-reader readable

---

## Gate 13 — Responsive Gate

Required breakpoints:
- desktop executive review
- laptop operator mode
- tablet review mode
- mobile read-only snapshot

Required behavior:
- desktop shows full command layout
- tablet preserves decision sections
- mobile uses stacked read-only summary unless explicitly interactive
- export flow works on desktop and tablet
- investor-safe snapshot is readable on mobile

Block release if:
- mobile hides critical redaction warning
- tablet breaks mode selector
- export CTA overlaps data
- KPI status is unreadable on smaller screens

---

## Gate 14 — Performance Gate

Required:
- dashboard loads with skeleton states
- no blocking page load for export-only data
- heavy chart rendering is controlled
- API calls are grouped or cached where appropriate
- mode changes do not reload the whole page unnecessarily
- board export generation shows progress

Block release if:
- dashboard feels frozen during load
- mode switch causes unsafe flash of unredacted data
- stale data appears before permission check completes

---

## Gate 15 — Analytics & Audit Gate

Required events:
- dashboard viewed
- mode changed
- KPI group opened
- evidence opened
- owner action clicked
- risk opened
- export started
- export completed
- export blocked
- redaction warning viewed
- permission denied

Required audit records:
- mode selected
- export generated
- evidence accessed
- redacted view requested
- board packet generated
- investor snapshot generated

Block release if:
- exports are not audited
- investor-safe snapshot is not logged
- evidence access is not logged

---

## Gate 16 — Security & Privacy Gate

Required:
- no sensitive data in client-only authorization logic
- no hidden raw data in front-end state for redacted views
- export endpoint validates permissions server-side
- evidence links require permission checks
- logs avoid sensitive payloads
- no customer-sensitive data in analytics events
- no investor confidential data in frontend error messages

Block release if:
- redacted data exists in client payload
- permission is enforced only by UI hiding
- exported file URL is guessable or public
- analytics sends customer or investor-sensitive data

---

## Gate 17 — Codex Work Unit Gate

Codex must complete work units in this order:

1. Read required source skills.
2. Validate API contract alignment.
3. Validate data fixtures and selectors.
4. Validate role and visibility matrix.
5. Validate redaction model.
6. Validate UI mode behavior.
7. Validate export behavior.
8. Validate RTL/LTR behavior.
9. Validate accessibility.
10. Validate analytics and audit events.
11. Generate release gate report.
12. Stop if any P0/P1 exists.

Codex must not continue to production release implementation if this gate fails.

---

## Required Release Gate Report

Codex must output this report after review:

```md
# Executive Dashboard Release Gate Report

## Release Mode Reviewed
- Mode:
- Reviewer:
- Date:
- Version:

## Decision
- Decision: BLOCKED / CONDITIONAL / READY_INTERNAL / READY_BOARD / READY_INVESTOR_SAFE / READY_ENTERPRISE_EBR / READY_PRODUCTION
- Rationale:

## Passed Gates
- [ ] Product Scope
- [ ] API Contract
- [ ] KPI Correctness
- [ ] Permission & Visibility
- [ ] Redaction
- [ ] Board Export
- [ ] Investor-Safe Mode
- [ ] Customer/Enterprise Mode
- [ ] Evidence References
- [ ] UX Interpretation
- [ ] RTL/LTR
- [ ] Accessibility
- [ ] Responsive
- [ ] Performance
- [ ] Analytics & Audit
- [ ] Security & Privacy

## Blockers
| Severity | Gate | Issue | Owner | Required Fix | Due |
|---|---|---|---|---|---|

## Conditional Items
| Severity | Gate | Issue | Accepted By | Mitigation |
|---|---|---|---|---|

## Evidence Reviewed
| Evidence | Source | Freshness | Visibility | Status |
|---|---|---|---|---|

## Export Safety Review
- Board export:
- Investor-safe export:
- Customer EBR export:

## RTL/LTR Review
- English/LTR:
- Persian/Farsi RTL:
- Arabic RTL:

## Final Sign-Off
- Product:
- Engineering:
- Security:
- Data/Privacy:
- Customer Success:
- Executive Owner:
```

---

## Required Sign-Off Matrix

| Area | Required Owner | Required Before |
|---|---|---|
| Product meaning | Product owner | All modes |
| KPI correctness | Data/product owner | All modes |
| API contract | Engineering owner | All modes |
| Permissions | Security/engineering owner | Board/investor/production |
| Redaction | Security/privacy owner | Board/investor/customer |
| Export safety | Product/security owner | Board/investor/customer |
| Customer evidence | Customer success owner | Customer/board/investor |
| Investor snapshot | Founder/fundraising owner | Investor mode |
| RTL/LTR | Design/frontend owner | Any localized release |
| Accessibility | Frontend/QA owner | All modes |
| Release decision | Executive owner | Final approval |

---

## Forbidden Release Patterns

Do not release if any of these are true:

- dashboard is visually complete but data is fake or inconsistent
- investor-safe mode is just internal mode with some hidden labels
- redaction is only done in CSS
- board export is manually assembled outside the system
- KPI values are not traceable to source data
- hidden fields remain in client state
- RTL is added after implementation as a patch
- export behavior differs from visible mode without explanation
- role permissions are assumed but not tested
- stale data appears fresh
- owner actions do not have owners
- release readiness shows green while blockers exist

---

## Final Rule

The Executive Dashboard is allowed to influence leadership, board, investor, or customer decisions only when it is safe to trust.

Trust requires correct data, clear context, safe permissions, strong redaction, auditable exports, accessible interaction, localized layout, and accountable owners.

If any of these are missing, Ariyo must not release the Executive Dashboard beyond controlled internal review.
