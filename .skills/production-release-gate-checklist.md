# Ariyo Production Release Gate Checklist

## Core Contract

Ariyo Production Release Gate Checklist is not a generic launch checklist, project-management checklist, QA list, or investor-demo readiness note.

It is the governed release-decision system that determines whether Ariyo is allowed to move from demo to internal alpha, private pilot, public beta, enterprise pilot, marketplace alpha, and production launch.

Ariyo must not confuse feature completion with release readiness.

A release is only allowed when the product surface, backend contract, AI Employee runtime behavior, governance controls, trust posture, observability, privacy, accessibility, localization, customer support path, rollback plan, and owner accountability have all passed their required gates.

If a critical gate fails, Codex must stop release implementation and report the blocker.

---

## 1. Purpose

This checklist converts Ariyo's production readiness system into actionable release gates.

It should be used after:

1. `master-skill-index-map.md`
2. `product-surface-map.md`
3. `mockup-implementation-roadmap.md`
4. `codex-execution-master-prompt.md`
5. `frontend-implementation-sprint-plan.md`
6. `mvp-build-scope-lock.md`
7. `backend-api-contract-review.md`
8. `production-readiness-gap-audit.md`

This file exists to answer one question:

> Is Ariyo allowed to release this build to this audience, in this mode, with this risk level?

---

## 2. Release Modes

Ariyo uses staged release modes. Each mode has a different standard.

| Release Mode | Audience | Main Goal | Risk Tolerance | Required Confidence |
|---|---:|---|---|---|
| Design Prototype | Internal product/design | Validate information architecture | Medium | Visual and narrative coherence |
| Investor Demo | Investors/advisors | Show category, product story, and traction path | Medium | Demo coherence and credibility |
| Internal Alpha | Ariyo internal team | Validate flows, demo data, and operating model | Medium-low | Core UI and mock API stability |
| MVP Private Pilot | Selected friendly customers | Validate usefulness and onboarding | Low | Working core flows and safe constraints |
| Enterprise Pilot | Enterprise evaluators | Validate governance, trust, and admin readiness | Very low | Auditability, permissions, evidence, admin controls |
| Marketplace Alpha | Selected creators/partners/customers | Validate template discovery, detail, install, review | Low | Trust, entitlement, review, and install safety |
| Public Beta | Broader controlled audience | Validate acquisition, onboarding, activation, support | Low | Reliability, support, observability, pricing clarity |
| Production Launch | Paying customers | Operate live customer value | Very low | Full operational readiness |

---

## 3. Release Decision Levels

Ariyo release decisions must use one of five outcomes.

### 3.1 Pass

All critical and high gates are satisfied. Release may proceed.

### 3.2 Conditional Pass

Release may proceed only with explicit documented limitations, owner assignment, monitoring, and rollback path.

Allowed for:

- Design Prototype
- Investor Demo
- Internal Alpha
- Limited Marketplace Alpha

Not allowed for:

- Enterprise Pilot
- Production Launch

### 3.3 Partial Pass

Only a subset of surfaces is allowed. The release must be scoped down.

Example:

- Landing + Pricing + Dashboard may be shown.
- Marketplace install may remain disabled.
- Enterprise Admin may be preview-only.

### 3.4 Blocked

A critical issue prevents release.

### 3.5 Abort

The build is unsafe, misleading, unstable, or non-compliant enough that release work must stop until remediation is complete.

---

## 4. Severity Model

| Severity | Meaning | Release Impact |
|---|---|---|
| Critical | Security, privacy, financial, compliance, permission, trust, or destructive-action risk | Blocks pilot, beta, and production |
| High | Core flow broken, misleading claim, broken entitlement, major UX failure | Blocks MVP/pilot unless explicitly scoped out |
| Medium | Non-critical UX, copy, component, state, or edge-case gap | May allow conditional pass |
| Low | Cosmetic or polish issue | Does not block release |
| Informational | Improvement note | Track for later |

---

## 5. Non-Negotiable Global Release Laws

### 5.1 RTL/LTR Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This applies to:

- Public website
- App shell
- Dashboard
- AI Employee Builder
- AI Employee Detail
- Workflow Builder
- Marketplace
- Template Detail
- Enterprise Admin
- Trust Center
- Creator Portal
- Partner Portal
- Customer Success Console
- Internal Ops Command Center
- Pricing
- Launch Readiness Command Center
- Notifications
- Reports
- Empty/loading/error states
- Tables, forms, drawers, modals, charts, filters, cards, timelines, and breadcrumbs

If any design or code violates this law, the release cannot pass localization readiness.

### 5.2 No Fake Production Claims

Ariyo must never claim production security, compliance, integrations, uptime, certifications, or enterprise readiness that is not implemented, evidenced, or explicitly marked as preview.

### 5.3 No Hidden Critical Risk

Any critical security, permission, privacy, billing, or data access issue must be surfaced as a release blocker.

### 5.4 No Alphabetical Execution

Codex must not execute skill files alphabetically. It must follow the execution sequence defined by:

- `codex-execution-master-prompt.md`
- `mockup-implementation-roadmap.md`
- `frontend-implementation-sprint-plan.md`
- `mvp-build-scope-lock.md`
- this release checklist

### 5.5 No Demo-to-Production Drift

Demo data, mock APIs, frontend state, backend API contracts, and production behavior must remain aligned.

---

## 6. Required Release Gate Object

Every release gate review must produce this object.

```ts
export type AriyoReleaseGateResult = {
  releaseMode: 'design-prototype' | 'investor-demo' | 'internal-alpha' | 'mvp-private-pilot' | 'enterprise-pilot' | 'marketplace-alpha' | 'public-beta' | 'production-launch';
  decision: 'pass' | 'conditional-pass' | 'partial-pass' | 'blocked' | 'abort';
  reviewedSurfaces: string[];
  criticalBlockers: ReleaseBlocker[];
  highBlockers: ReleaseBlocker[];
  acceptedLimitations: ReleaseLimitation[];
  evidenceLinks: string[];
  owners: string[];
  rollbackPlan: string;
  nextReviewDate?: string;
};
```

Codex must include this object structure when generating release readiness reports.

---

## 7. Master Release Gate Checklist

### 7.1 Product Scope Gate

Ariyo may not release if the scope is unclear.

Required checks:

- [ ] Release mode is explicitly selected.
- [ ] MVP scope is aligned with `mvp-build-scope-lock.md`.
- [ ] Deferred items are not presented as live functionality.
- [ ] Demo-only surfaces are visibly marked where appropriate.
- [ ] Enterprise-only features are not exposed to Basic/Pro users unless preview-gated.
- [ ] Marketplace install flows are scoped according to entitlement readiness.
- [ ] Trust, billing, AI runtime, and admin claims match actual implementation.

Blocking conditions:

- A demo-only capability is shown as production-ready.
- A deferred capability is wired as if live.
- The product appears broader than what support, governance, or backend can handle.

---

### 7.2 Design System Gate

Required checks:

- [ ] Design tokens are defined and reusable.
- [ ] Typography scale is defined for desktop, tablet, and mobile.
- [ ] Spacing system is consistent.
- [ ] Core components are implemented from `figma-design-system-brief.md`.
- [ ] Cards, tables, forms, modals, drawers, tabs, filters, badges, and timelines are reusable.
- [ ] Status colors are consistent and accessible.
- [ ] Trust, risk, approval, warning, error, success, and blocked states use consistent treatment.
- [ ] RTL/LTR component variants exist.
- [ ] Components support loading, empty, error, blocked, restricted, and permission-denied states.

Blocking conditions:

- Screens are built as one-off layouts with no reusable system.
- RTL variants are missing.
- Critical status states are visually ambiguous.

---

### 7.3 Frontend Implementation Gate

Required checks:

- [ ] App shell is stable.
- [ ] Routing is consistent.
- [ ] Navigation hierarchy matches Product Surface Map.
- [ ] Demo data is loaded through governed data layer, not scattered constants.
- [ ] Mock API layer is used instead of hardcoded page behavior.
- [ ] Type contracts are centralized.
- [ ] Page states are implemented.
- [ ] Responsive behavior is validated.
- [ ] Accessibility baseline is satisfied.
- [ ] Component reuse follows roadmap.
- [ ] Codex work unit reports are produced for implemented surfaces.

Blocking conditions:

- UI relies on hardcoded state inside components.
- Major pages lack loading/error/empty states.
- API and UI types drift.

---

### 7.4 Backend/API Contract Gate

Required checks:

- [ ] API endpoint families have a reviewed contract.
- [ ] Response envelope is consistent.
- [ ] Error model is consistent.
- [ ] Permission errors are distinct from validation errors.
- [ ] Audit events are defined for sensitive actions.
- [ ] Mock API maps cleanly to real backend APIs.
- [ ] Pagination/filtering/search contracts are defined.
- [ ] Mutation behavior is defined.
- [ ] Optimistic updates are safe and reversible.
- [ ] Data ownership and workspace scoping are explicit.

Blocking conditions:

- Frontend depends on data that backend cannot support.
- Sensitive actions have no audit trail.
- Permission model is unclear.

---

### 7.5 AI Employee Runtime Gate

Required checks:

- [ ] AI Employee status model is defined.
- [ ] AI Employee permissions are visible and enforceable.
- [ ] AI Employee memory/context settings are visible and governed.
- [ ] Tool access is scoped.
- [ ] Simulation mode is separate from production mode.
- [ ] Launch checklist exists.
- [ ] Risk labels exist for risky capabilities.
- [ ] Human approval gates exist where needed.
- [ ] Runtime events are observable.
- [ ] Pausing/disabling AI Employee behavior is available in appropriate release modes.

Blocking conditions:

- AI Employee can appear to act without permission or oversight.
- Simulation and production states are visually confused.
- Users cannot understand what an AI Employee can access or do.

---

### 7.6 Workflow Gate

Required checks:

- [ ] Workflow trigger model is clear.
- [ ] Step order is understandable.
- [ ] AI Employee assignments are visible.
- [ ] Human approval gates are visible.
- [ ] Error handling is visible.
- [ ] Workflow versioning is represented.
- [ ] Simulation/run preview is available where required.
- [ ] Production rollout state is explicit.
- [ ] Workflow risk level is visible.

Blocking conditions:

- Workflow appears to run production actions without approval.
- Failed steps have no remediation path.
- Versioning is absent for production workflows.

---

### 7.7 Marketplace Gate

Required checks:

- [ ] Marketplace discovery works for demo scope.
- [ ] Template cards show trust, compatibility, plan, and category signals.
- [ ] Template Detail page includes permissions, dependencies, pricing, region compatibility, and approval state.
- [ ] Install eligibility is visible.
- [ ] Blocked install states are implemented.
- [ ] Private catalog and enterprise restrictions are represented.
- [ ] Creator/partner claims are not overstated.
- [ ] Marketplace trust labels are consistent.
- [ ] Template install cannot bypass governance.

Blocking conditions:

- Template can be installed without permission awareness.
- Pricing/plan eligibility is unclear.
- Region or data-access constraints are missing for enterprise release.

---

### 7.8 Enterprise Governance Gate

Required checks:

- [ ] Enterprise Admin overview exists.
- [ ] Organization/workspace governance is clear.
- [ ] Users and roles are visible.
- [ ] SSO/SCIM state is clearly live, preview, or disabled.
- [ ] Policy engine preview or implementation is properly scoped.
- [ ] Approval workflows are visible.
- [ ] Marketplace controls exist.
- [ ] Audit log exists.
- [ ] Data residency controls are represented appropriately.
- [ ] Compliance evidence access is clear.

Blocking conditions:

- Enterprise release claims admin control without showing governance controls.
- Audit trail is absent.
- User roles are unclear.

---

### 7.9 Security and Privacy Gate

Required checks:

- [ ] Auth state assumptions are explicit.
- [ ] Permission boundaries are visible.
- [ ] Sensitive data is not exposed in demo data.
- [ ] Audit events exist for sensitive operations.
- [ ] Destructive actions require confirmation.
- [ ] Data access levels are visible.
- [ ] Marketplace install permissions are explicit.
- [ ] Trust Center claims are evidence-based.
- [ ] Legal/policy links are available where needed.

Blocking conditions:

- Sensitive demo data appears real or personal.
- Permission boundaries are missing.
- Trust claims exceed implemented controls.

---

### 7.10 Observability and Reliability Gate

Required checks:

- [ ] Runtime health states exist.
- [ ] Incident states exist.
- [ ] Error states are actionable.
- [ ] Status/uptime is scoped correctly.
- [ ] Internal Ops Command Center shows queues and owners.
- [ ] Logs/audit trail are represented.
- [ ] Launch Readiness Command Center shows blockers and evidence.
- [ ] Critical flows have monitoring assumptions.

Blocking conditions:

- Incidents have no owner or escalation path.
- Reliability claims lack status model.
- Internal Ops cannot see critical runtime issues.

---

### 7.11 Billing, Entitlement, and Pricing Gate

Required checks:

- [ ] Pricing plans are clear.
- [ ] Basic/Pro/Smart behavior is represented consistently.
- [ ] Enterprise plan is sales-assisted if not self-serve.
- [ ] Plan limits are understandable.
- [ ] Usage/cost messaging is clear.
- [ ] Marketplace access differs by plan where applicable.
- [ ] Install eligibility respects plan entitlements.
- [ ] Billing state does not pretend production payment exists unless implemented.

Blocking conditions:

- Paid capabilities are exposed without entitlement model.
- Pricing claims contradict product behavior.
- Usage costs are hidden or misleading.

---

### 7.12 Localization and RTL/LTR Gate

Required checks:

- [ ] Locale switch assumptions are defined.
- [ ] Persian/Farsi UI is RTL and right-aligned.
- [ ] Arabic UI is RTL and right-aligned.
- [ ] English UI is LTR and left-aligned.
- [ ] European LTR languages are LTR and left-aligned.
- [ ] Icons, chevrons, breadcrumbs, sidebars, drawers, timelines, and progress indicators mirror correctly in RTL.
- [ ] Tables align numbers, labels, and actions correctly.
- [ ] Forms place labels, helper text, validation errors, and actions correctly.
- [ ] Mixed-language content behaves correctly.
- [ ] Demo data includes localized examples where required.

Blocking conditions:

- Arabic or Persian UI is left-aligned.
- English or European UI is right-aligned without explicit reason.
- Navigation direction does not mirror in RTL.

---

### 7.13 Accessibility Gate

Required checks:

- [ ] Keyboard navigation works for core actions.
- [ ] Focus states are visible.
- [ ] Buttons and links are distinguishable.
- [ ] Form labels are present.
- [ ] Status badges are not color-only.
- [ ] Tables are readable.
- [ ] Modals/drawers have clear close and confirm actions.
- [ ] Error messages are actionable.
- [ ] Text contrast is acceptable.
- [ ] Responsive layout remains usable.

Blocking conditions:

- Critical actions cannot be reached by keyboard.
- Error and warning states are color-only.
- Form validation is unclear.

---

### 7.14 Support and Customer Success Gate

Required checks:

- [ ] Support path exists for blocked installs and incidents.
- [ ] Customer Success Console has account health, onboarding, adoption, renewal, and risk views.
- [ ] Enterprise customers have escalation path.
- [ ] Marketplace support boundaries are represented.
- [ ] Trust/support contact flows are clear.
- [ ] Demo script includes support narrative.

Blocking conditions:

- User can enter a blocked or risky state with no support path.
- Enterprise support expectations are implied but not represented.

---

### 7.15 Demo and Narrative Gate

Required checks:

- [ ] Demo flow follows `mvp-demo-flow-script.md`.
- [ ] Demo data follows `demo-data-seed-pack.md`.
- [ ] Product narrative is consistent across Landing, Dashboard, Builder, Marketplace, Admin, and Trust Center.
- [ ] Demo does not rely on hidden manual transitions.
- [ ] Claims are bounded by MVP scope.
- [ ] Investor, customer, and enterprise demo variants are clear.

Blocking conditions:

- Demo tells a bigger story than product surfaces support.
- Product appears as chatbot/prompt library instead of operating system.
- Demo data contradicts the UI state.

---

## 8. Release Mode Specific Gates

### 8.1 Design Prototype Gate

Minimum pass criteria:

- [ ] Landing page mockup is coherent.
- [ ] Dashboard mockup is coherent.
- [ ] AI Employee Builder mockup is coherent.
- [ ] Marketplace and Enterprise Admin previews are directionally clear.
- [ ] Design system direction is consistent.
- [ ] RTL/LTR rules are represented.

Allowed limitations:

- Backend not implemented.
- Mock data can be static.
- Some flows can be prototype-only.

Not allowed:

- Fake security/compliance claims.
- Inconsistent product story.

---

### 8.2 Investor Demo Gate

Minimum pass criteria:

- [ ] Product category is clear in first 60 seconds.
- [ ] Landing, Dashboard, Builder, Workflow, Marketplace, Enterprise Admin, and Trust Center tell one story.
- [ ] Demo data is coherent.
- [ ] Outcome metrics are plausible and labeled as demo data if needed.
- [ ] Pricing narrative is clear.
- [ ] Enterprise readiness narrative is evidence-aware.
- [ ] No production claims are overstated.

Allowed limitations:

- Mock APIs.
- Preview-only enterprise controls.
- Simulated runtime events.

Not allowed:

- Claiming live customers, certifications, uptime, integrations, or revenue unless true.

---

### 8.3 Internal Alpha Gate

Minimum pass criteria:

- [ ] Core frontend routes work.
- [ ] Demo data layer works.
- [ ] Mock API layer works.
- [ ] Loading/error/empty states exist.
- [ ] Main dashboard works.
- [ ] AI Employee Builder works in demo mode.
- [ ] Marketplace discovery and template detail work in demo mode.
- [ ] Enterprise Admin preview exists.
- [ ] Internal Ops and Launch Readiness surfaces can show blockers.

Allowed limitations:

- Backend not complete.
- Some mutations simulated.
- Some enterprise controls preview-only.

Not allowed:

- Scattered hardcoded state.
- Broken app shell.
- RTL/LTR violations on core surfaces.

---

### 8.4 MVP Private Pilot Gate

Minimum pass criteria:

- [ ] Product scope is locked.
- [ ] Core user journey is complete.
- [ ] AI Employee creation is safely scoped.
- [ ] Workflow simulation is clearly separated from production execution unless backend-ready.
- [ ] Marketplace install is either safe or gated.
- [ ] Enterprise Admin controls are available or clearly preview-labeled.
- [ ] Trust Center is accurate.
- [ ] Support/escalation path exists.
- [ ] Logs/audit assumptions are clear.
- [ ] Privacy and permission boundaries are visible.

Not allowed:

- Users believing a simulated AI Employee is operating live without guardrails.
- Marketplace install without approval/permission awareness.
- No rollback or pause plan.

---

### 8.5 Enterprise Pilot Gate

Minimum pass criteria:

- [ ] Enterprise Admin is credible and permission-aware.
- [ ] SSO/SCIM status is correctly labeled.
- [ ] Policy engine behavior is represented accurately.
- [ ] Approval workflows exist.
- [ ] Audit log exists.
- [ ] Compliance evidence center is accurate.
- [ ] Trust Center has evidence request flow.
- [ ] Data residency model is represented correctly.
- [ ] Security and privacy review has no critical blockers.
- [ ] Support escalation path exists.

Not allowed:

- Preview controls presented as enforced controls.
- Missing auditability for sensitive actions.
- Ambiguous data residency or access claims.

---

### 8.6 Marketplace Alpha Gate

Minimum pass criteria:

- [ ] Marketplace homepage works.
- [ ] Template detail works.
- [ ] Creator Portal core flows exist.
- [ ] Partner Portal preview exists if partner-assisted flow is shown.
- [ ] Trust labels are consistent.
- [ ] Template review status is visible.
- [ ] Install eligibility is clear.
- [ ] Permission and dependency review are visible.
- [ ] Blocked install states exist.
- [ ] Marketplace support path exists.

Not allowed:

- Unreviewed templates appearing certified.
- Install CTA bypassing permissions.
- Creator monetization claims without payout rules.

---

### 8.7 Public Beta Gate

Minimum pass criteria:

- [ ] Landing and pricing are accurate.
- [ ] Signup/onboarding path is coherent.
- [ ] Core MVP surfaces are stable.
- [ ] Support path is visible.
- [ ] Privacy/legal links exist.
- [ ] Analytics events are implemented for core funnels.
- [ ] Major accessibility and localization gaps are resolved.
- [ ] Internal Ops can monitor critical incidents.
- [ ] Launch Readiness report is pass or conditional pass.

Not allowed:

- Broken onboarding.
- Unsupported payment/plan claims.
- Major trust or privacy ambiguity.

---

### 8.8 Production Launch Gate

Minimum pass criteria:

- [ ] No critical blockers.
- [ ] No unresolved high blockers without signed exception.
- [ ] Backend contracts implemented.
- [ ] Auth, permissions, and workspace scoping are enforced.
- [ ] AI Employee runtime is observable and controllable.
- [ ] Audit logging is implemented for sensitive actions.
- [ ] Billing/entitlement behavior is accurate.
- [ ] Support, incident, and rollback paths are operational.
- [ ] Trust Center claims are evidence-backed.
- [ ] Launch Readiness Command Center shows pass.
- [ ] Production monitoring is active.
- [ ] Release owner signs off.

Not allowed:

- Critical security/privacy/compliance gaps.
- Fake production readiness.
- No rollback plan.
- No incident response plan.

---

## 9. Surface-by-Surface Release Checklist

### 9.1 Landing Page

- [ ] Category is clear.
- [ ] AI Employee Operating System message is clear.
- [ ] Marketplace message is clear.
- [ ] Enterprise trust cues are accurate.
- [ ] CTA paths are correct.
- [ ] Pricing/Contact paths are correct.
- [ ] RTL/LTR behavior works.

### 9.2 Pricing Page

- [ ] Basic/Pro/Smart/Enterprise are clear.
- [ ] Usage limits are accurate.
- [ ] AI cost language is honest.
- [ ] Marketplace access by plan is clear.
- [ ] Enterprise CTA is appropriate.
- [ ] RTL/LTR behavior works.

### 9.3 Dashboard

- [ ] AI Employee summary is clear.
- [ ] Outcome metrics are coherent.
- [ ] Workflow status is visible.
- [ ] Approval queue is visible.
- [ ] Alerts are actionable.
- [ ] Marketplace recommendations are safe.
- [ ] Governance state is visible.
- [ ] RTL/LTR behavior works.

### 9.4 AI Employee Builder

- [ ] Role/job definition works.
- [ ] Outcomes are defined.
- [ ] Knowledge/tools/memory/permissions are visible.
- [ ] Simulation is clear.
- [ ] Launch checklist exists.
- [ ] Safety/governance review exists.
- [ ] RTL/LTR behavior works.

### 9.5 AI Employee Detail

- [ ] Health state is visible.
- [ ] Outcomes are visible.
- [ ] Activity/runs are visible.
- [ ] Knowledge/memory/tools are visible.
- [ ] Permissions/governance are visible.
- [ ] Cost/usage is visible.
- [ ] Version/incident/audit views exist.
- [ ] RTL/LTR behavior works.

### 9.6 Workflow Builder

- [ ] Trigger is clear.
- [ ] Steps are clear.
- [ ] AI Employee assignment is clear.
- [ ] Approval gates exist.
- [ ] Simulation exists.
- [ ] Error handling exists.
- [ ] Versioning exists.
- [ ] RTL/LTR behavior works.

### 9.7 Marketplace Homepage

- [ ] Search works.
- [ ] Filters work.
- [ ] Categories are clear.
- [ ] Featured collections are credible.
- [ ] Trust labels are consistent.
- [ ] Private catalog state is represented.
- [ ] RTL/LTR behavior works.

### 9.8 Template Detail

- [ ] Overview is clear.
- [ ] Pricing is clear.
- [ ] Permissions are clear.
- [ ] Dependencies are clear.
- [ ] Region compatibility is clear.
- [ ] Install eligibility is clear.
- [ ] Approval flow is clear.
- [ ] RTL/LTR behavior works.

### 9.9 Enterprise Admin

- [ ] Workspace governance is visible.
- [ ] Users/roles are visible.
- [ ] SSO/SCIM status is accurate.
- [ ] Policy engine is visible.
- [ ] Approval workflows are visible.
- [ ] Audit/compliance views are visible.
- [ ] Marketplace controls are visible.
- [ ] RTL/LTR behavior works.

### 9.10 Trust Center

- [ ] Security posture is accurate.
- [ ] Compliance evidence is accurate.
- [ ] Incident/status is scoped correctly.
- [ ] Data governance is clear.
- [ ] Evidence request path exists.
- [ ] Public vs enterprise evidence is separated.
- [ ] RTL/LTR behavior works.

### 9.11 Creator Portal

- [ ] Asset library is clear.
- [ ] Submission/review flow is clear.
- [ ] Trust labels and certification are clear.
- [ ] Performance/visibility are clear.
- [ ] Revenue/payout states are scoped.
- [ ] Support path exists.
- [ ] RTL/LTR behavior works.

### 9.12 Partner Portal

- [ ] Customer deployments are visible.
- [ ] Implementation board is clear.
- [ ] Enterprise requests are visible.
- [ ] Partner certification is visible.
- [ ] Revenue/support escalation are scoped.
- [ ] RTL/LTR behavior works.

### 9.13 Customer Success Console

- [ ] Health scoring is visible.
- [ ] Onboarding/adoption are visible.
- [ ] Renewal/expansion are visible.
- [ ] Risks and playbooks are visible.
- [ ] EBR readiness is visible.
- [ ] Support escalations are visible.
- [ ] RTL/LTR behavior works.

### 9.14 Internal Ops Command Center

- [ ] Incidents are visible.
- [ ] Queues have owners.
- [ ] AI runtime health is visible.
- [ ] Marketplace/template health is visible.
- [ ] Customer risks are visible.
- [ ] Escalation path is visible.
- [ ] RTL/LTR behavior works.

### 9.15 Launch Readiness Command Center

- [ ] Readiness score exists.
- [ ] Gates are visible.
- [ ] Blockers have owners.
- [ ] Evidence exists.
- [ ] Timeline is clear.
- [ ] Release decision is auditable.
- [ ] RTL/LTR behavior works.

---

## 10. Codex Release Gate Execution Protocol

When Codex is asked to prepare or review a release, it must:

1. Read `codex-execution-master-prompt.md`.
2. Read `mvp-build-scope-lock.md`.
3. Read `production-readiness-gap-audit.md`.
4. Read this file.
5. Identify the requested release mode.
6. Identify surfaces included in release.
7. Run the relevant gates.
8. Classify blockers.
9. Produce a release gate result.
10. Stop if a critical blocker exists.

Codex must not proceed to production-ready implementation if this checklist returns `blocked` or `abort`.

---

## 11. Required Release Gate Report Format

Every release review must produce:

```md
# Ariyo Release Gate Report

## Release Mode

## Surfaces Reviewed

## Decision
Pass / Conditional Pass / Partial Pass / Blocked / Abort

## Critical Blockers

## High Blockers

## Accepted Limitations

## Required Remediation

## Owners

## Evidence

## Rollback Plan

## Next Review
```

---

## 12. Release Rollback Requirements

Every release mode beyond Design Prototype must define rollback.

Required rollback information:

- Release version
- Surfaces affected
- Feature flags involved
- Data changes involved
- User groups affected
- Rollback owner
- Rollback trigger
- Rollback steps
- Communication path
- Audit evidence

Blocking condition:

- No rollback path for pilot, beta, marketplace alpha, enterprise pilot, or production launch.

---

## 13. Owner Sign-Off Matrix

| Area | Required Owner |
|---|---|
| Product Scope | Product Owner |
| Frontend/UI | Frontend Lead |
| Design System | Design Lead |
| Backend/API | Backend Lead |
| Security/Privacy | Security or Privacy Owner |
| AI Employee Runtime | AI Platform Owner |
| Marketplace | Marketplace Owner |
| Enterprise Admin | Enterprise Product Owner |
| Customer Success | CS Lead |
| Internal Ops | Ops Lead |
| Pricing/Billing | Revenue/Finance Owner |
| Compliance/Legal | Legal/Compliance Owner |
| Final Release | Founder/Executive Owner |

For MVP Private Pilot, one person may temporarily hold multiple owner roles, but the roles must still be explicit.

---

## 14. Release Gate Stop Rules

Codex must stop and report if:

- A critical blocker exists.
- The release mode is unclear.
- MVP scope is unclear.
- Production claims exceed implementation.
- Backend/API contract is missing for a production flow.
- Permissions or auditability are missing for sensitive actions.
- RTL/LTR rules are violated on release surfaces.
- Trust Center claims are not evidence-backed.
- Marketplace install bypasses permission or entitlement logic.
- AI Employee production behavior is confused with simulation.
- No rollback plan exists for pilot/beta/production release.

---

## 15. Golden Rule

Ariyo does not pass a release gate because screens look complete.

Ariyo passes a release gate only when the product is understandable, governable, observable, safe, localized, supportable, auditable, and honest about what is live, what is simulated, what is preview-only, and what is deferred.
