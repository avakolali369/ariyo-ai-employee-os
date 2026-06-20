# Ariyo Production Readiness Gap Audit

## Core Contract

Ariyo Production Readiness Gap Audit is not a generic QA checklist, launch checklist, or risk register.

It is the governed audit layer that compares Ariyo's current MVP/demo implementation plan against what is required for a production-ready, enterprise-trustworthy, secure, observable, compliant, scalable, supportable, localized, and commercially credible AI Employee Operating System.

Ariyo must not confuse demo readiness with production readiness.

Ariyo may demo surfaces before they are production-complete, but it must explicitly label every gap, owner, blocker, risk severity, required evidence, and launch gate before moving toward production use.

---

## 1. Purpose

This skill exists to help Codex, founders, frontend engineers, backend engineers, AI engineers, designers, operators, security reviewers, enterprise stakeholders, customer success teams, and launch owners answer one question:

**What is still missing before Ariyo can move from MVP/demo to real production deployment?**

This file must be used after:

1. `master-skill-index-map.md`
2. `product-surface-map.md`
3. `mockup-implementation-roadmap.md`
4. `codex-execution-master-prompt.md`
5. `figma-design-system-brief.md`
6. `frontend-implementation-sprint-plan.md`
7. `mvp-build-scope-lock.md`
8. `mvp-demo-flow-script.md`
9. `demo-data-seed-pack.md`
10. `frontend-demo-data-implementation-guide.md`
11. `frontend-api-mock-layer-plan.md`
12. `backend-api-contract-review.md`

This audit does not replace those files. It validates whether their outputs are ready to become production surfaces.

---

## 2. Production Readiness Principle

Ariyo production readiness requires the product to be:

- usable by real customers;
- safe under predictable misuse;
- secure under enterprise review;
- observable during failures;
- auditable after decisions;
- governable by admins;
- localizable for RTL and LTR markets;
- supportable by internal teams;
- explainable to buyers and users;
- recoverable after incidents;
- scalable across workspaces and plans;
- aligned with pricing, billing, permissions, and customer success;
- consistent across frontend, mock API, backend contracts, data model, demo narrative, and trust claims.

If a surface cannot satisfy these requirements, it may still be demoed, but it must not be marketed as production-ready.

---

## 3. Readiness Classification

Every system, page, component, API, workflow, template, control, and claim must be assigned one of these statuses.

| Status | Meaning | Can demo? | Can pilot? | Can production launch? |
|---|---|---:|---:|---:|
| `Production Ready` | Fully implemented, tested, secured, monitored, documented, and supportable | Yes | Yes | Yes |
| `Pilot Ready` | Safe for limited controlled customers with manual oversight | Yes | Yes | No broad launch |
| `Demo Ready` | Credible for investor/customer demo using mock or controlled data | Yes | No | No |
| `Design Ready` | Spec and design are complete, implementation not done | Prototype only | No | No |
| `Blocked` | Critical unknown, missing dependency, security issue, or contract conflict | No | No | No |
| `Deferred` | Intentionally out of MVP or production scope | Maybe as narrative | No | No |

Codex must never upgrade a status without evidence.

---

## 4. Severity Model

| Severity | Definition | Required action |
|---|---|---|
| `P0` | Blocks production, pilot, or enterprise trust | Stop launch path until fixed |
| `P1` | Blocks credible MVP usage or serious demo | Fix before MVP demo/pilot |
| `P2` | Causes friction, support load, or incomplete experience | Schedule in next sprint |
| `P3` | Nice-to-have polish or future scale improvement | Defer safely |

P0 and P1 items require an owner, due date, evidence artifact, and retest decision.

---

## 5. Audit Object Format

Codex must record every finding using this structure.

```ts
type ProductionReadinessGap = {
  id: string;
  title: string;
  domain: 'frontend' | 'backend' | 'ai-runtime' | 'marketplace' | 'enterprise' | 'security' | 'compliance' | 'data' | 'observability' | 'ux' | 'support' | 'growth' | 'localization' | 'operations';
  relatedSkills: string[];
  relatedSurface?: string;
  currentStatus: 'Production Ready' | 'Pilot Ready' | 'Demo Ready' | 'Design Ready' | 'Blocked' | 'Deferred';
  targetStatus: 'Production Ready' | 'Pilot Ready' | 'Demo Ready';
  severity: 'P0' | 'P1' | 'P2' | 'P3';
  ownerRole: string;
  evidenceRequired: string[];
  acceptanceCriteria: string[];
  stopRule?: string;
  codexAction: 'build' | 'fix' | 'verify' | 'defer' | 'escalate' | 'document';
};
```

---

## 6. Global Readiness Domains

Production readiness must be audited across these domains:

1. Product surface readiness
2. Frontend implementation readiness
3. Backend/API readiness
4. AI Employee runtime readiness
5. Workflow execution readiness
6. Marketplace readiness
7. Enterprise governance readiness
8. Permissions and policy readiness
9. Data governance and privacy readiness
10. Security readiness
11. Compliance/legal readiness
12. Observability and incident readiness
13. Reliability and SLA readiness
14. Billing and entitlement readiness
15. Customer success readiness
16. Support readiness
17. Demo-to-production consistency
18. Localization and RTL/LTR readiness
19. Accessibility readiness
20. Launch operations readiness

---

## 7. Product Surface Gap Audit

### 7.1 Landing Page

Required production checks:

- Hero claim must be accurate and not overpromise autonomous AI behavior.
- CTA paths must connect to real or clearly staged flows.
- Pricing, trust, and marketplace claims must match actual implementation.
- SEO/GEO content must not imply unavailable integrations or certifications.
- RTL/LTR variants must preserve visual hierarchy.
- Analytics events must track CTA, scroll, plan interest, and demo intent.

Common gaps:

- Product claims exceed MVP implementation.
- Marketplace presented as fully operational when only demo-ready.
- Trust badges shown without evidence source.
- CTA sends users into incomplete surfaces.

Launch gate:

Landing page may go public only when all claims are mapped to implemented, demo, or future-state labels.

### 7.2 Pricing Page

Required production checks:

- Basic, Pro, Smart, and Enterprise plans must match entitlement logic.
- Usage limits must map to `ai-cost-control.md` and `monetization-billing.md`.
- Marketplace access rules must be reflected in UI and API.
- Upgrade/downgrade states must be defined.
- Enterprise contact flow must be functional.

Common gaps:

- Pricing UI is ready but billing engine is not.
- Plan names exist but permission boundaries are not enforced.
- Usage costs are shown without backend usage tracking.

Launch gate:

No paid self-serve launch until entitlement, billing, and usage enforcement are implemented or explicitly disabled.

### 7.3 Main Dashboard

Required production checks:

- Dashboard metrics must come from real API or labeled demo data.
- Alerts must link to actionable resolution paths.
- AI Employee health must use defined calculation logic.
- Empty states must guide first-time setup.
- Cards must not display fake outcome improvements in production mode.

Common gaps:

- Demo data remains hardcoded in production build.
- Dashboard cards do not map to backend event definitions.
- Status indicators are visual only and not auditable.

Launch gate:

Dashboard may launch only when every metric has a documented source, fallback, and empty/error state.

### 7.4 AI Employee Builder

Required production checks:

- Role, outcome, data source, tools, memory, permission, and simulation steps must be enforced.
- Risky capabilities must trigger review or approval.
- Simulation must be marked as simulation and not treated as real behavior guarantee.
- Cost estimation must not pretend exact pricing unless calculated.
- Launch button must be disabled until required gates pass.

Common gaps:

- Builder allows unsafe production launch without review.
- Permissions are selected visually but not enforced in runtime.
- Simulation uses fake outputs without audit labels.

Launch gate:

No AI Employee may be launched unless permissions, tool access, policy controls, audit logging, and owner assignment are complete.

### 7.5 AI Employee Detail

Required production checks:

- Activity log must be traceable.
- Cost, version, memory, tools, incidents, and approvals must be real or explicitly mocked.
- Pause, rollback, escalation, and owner controls must exist.
- Admin visibility must respect permission rules.

Common gaps:

- Detail page shows observability before tracing exists.
- Version history exists in UI but not in backend contract.
- Incident states are not tied to response playbooks.

Launch gate:

AI Employee detail may be production-enabled only with traceability, owner controls, pause/disable state, and audit log.

### 7.6 Workflow Builder

Required production checks:

- Trigger, step, condition, tool, human approval, AI Employee assignment, and error state must be typed.
- Workflow versioning must be defined.
- Simulation must not modify production data.
- Publish must require validation.
- Rollback behavior must exist.

Common gaps:

- Visual builder does not match backend execution model.
- Approval gates are represented visually but not enforced.
- Error handling is not designed before production rollout.

Launch gate:

Workflow Builder may launch only when execution, simulation, validation, versioning, and rollback contracts are implemented.

### 7.7 Marketplace Homepage

Required production checks:

- Search, category, recommendations, certification labels, pricing, and compatibility filters must use consistent template schema.
- Sponsored/promoted content must be clearly labeled.
- Private catalog controls must respect workspace policy.
- Region and plan filters must be enforced.

Common gaps:

- Marketplace cards imply installability for unavailable templates.
- Trust labels are decorative.
- Recommendations are static but appear personalized.

Launch gate:

Marketplace discovery may launch only when template visibility, eligibility, trust labels, and install states are accurate.

### 7.8 Template Detail

Required production checks:

- Install eligibility, permissions, dependencies, region compatibility, plan compatibility, pricing, reviews, versions, and support must be consistent.
- Install CTA must be blocked when policy, plan, region, or approval rules fail.
- Permission risks must be explicit.

Common gaps:

- Install button exists before installation workflow is safe.
- Dependencies are described but not validated.
- Region compatibility is not enforced.

Launch gate:

No template can be installable until entitlement, dependency, permissions, policy, approval, and audit checks are implemented.

### 7.9 Enterprise Admin

Required production checks:

- Users, roles, policies, SSO/SCIM, workspace controls, marketplace restrictions, audit logs, and approvals must be connected.
- Admin actions must be permission-guarded.
- Dangerous settings must require confirmation and audit.

Common gaps:

- Admin UI exists without real role enforcement.
- Policy settings are stored but not enforced at runtime.
- Audit logs are not immutable or complete.

Launch gate:

Enterprise Admin may pilot only when core RBAC, workspace policy, audit log, and high-risk confirmation flows are implemented.

### 7.10 Trust Center

Required production checks:

- Security, privacy, uptime, compliance, data residency, marketplace trust, and AI governance claims must be evidence-backed.
- Public status must not be fake in production.
- Evidence request flow must be real or clearly gated.

Common gaps:

- Compliance badges are shown before certification.
- Status uptime is static.
- Trust claims are unsupported.

Launch gate:

Trust Center may go public only after unsupported claims are removed or labeled as planned.

---

## 8. Backend/API Gap Audit

Backend readiness must be checked against:

- `backend-architecture.md`
- `domain-model.md`
- `api-contracts.md`
- `backend-api-contract-review.md`
- `frontend-api-mock-layer-plan.md`
- `frontend-demo-data-implementation-guide.md`

Required backend production gates:

1. Authenticated request boundary exists.
2. Workspace scoping is enforced server-side.
3. RBAC is enforced server-side.
4. API response envelope is consistent.
5. Error model matches frontend states.
6. Pagination, filtering, sorting, and search contracts are defined.
7. Mutation endpoints are idempotent or safely retryable.
8. Audit events are written for sensitive actions.
9. Usage and cost events are recorded.
10. API contracts have tests.

P0 backend gaps:

- Client-only permissions.
- Mock API behavior differs from backend contract.
- Missing tenant/workspace isolation.
- Missing audit trail for launch, install, policy, permission, and billing actions.
- AI Employee actions not tied to owner/workspace/user identity.

---

## 9. Security Gap Audit

Security readiness must be checked against:

- `security-threat-model.md`
- `data-governance-privacy.md`
- `ai-agent-permissions-runtime.md`
- `admin-permissions.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`

Required security production gates:

1. Authentication model is implemented.
2. Authorization model is enforced server-side.
3. Tenant isolation is tested.
4. Sensitive data is not exposed in logs.
5. Tool permissions are scoped.
6. AI Employee access is least-privilege.
7. Admin actions are audited.
8. Marketplace installs require permission review.
9. Secrets are not stored in frontend.
10. Incident response process exists.

P0 security gaps:

- Any frontend-only security control.
- Tool execution without permission checks.
- Cross-workspace data leakage risk.
- Missing revoke/disable control for AI Employee runtime.
- Missing audit on sensitive operations.

---

## 10. AI Employee Runtime Gap Audit

AI runtime readiness must be checked against:

- `ai-employee-architecture.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-incident-response.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-versioning-change-management.md`
- `multi-agent-orchestration-system.md`

Required AI runtime production gates:

1. Every AI Employee has owner, workspace, role, goal, permissions, tools, and policy profile.
2. Every run is traceable.
3. Every tool call is logged.
4. Memory scope is explicit.
5. Retrieval sources are listed.
6. Simulation is separated from production.
7. Risky actions require approval.
8. Runtime can pause/disable an AI Employee.
9. Versioning and rollback exist.
10. Incident escalation exists.

P0 AI runtime gaps:

- No trace logs.
- No permission-bound tool execution.
- No human approval for high-risk actions.
- No owner accountability.
- No version rollback.

---

## 11. Marketplace Gap Audit

Marketplace readiness must be checked against all marketplace skills, especially:

- `ai-employee-marketplace.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-template-review-governance.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-migration-portability.md`

Required marketplace production gates:

1. Template schema is defined.
2. Template install eligibility is enforced.
3. Template dependencies are validated.
4. Template permissions are reviewed.
5. Template version lifecycle exists.
6. Trust labels are evidence-backed.
7. Private catalog rules are enforced.
8. Marketplace search respects policy visibility.
9. Customer reviews are moderated.
10. Creator/partner ownership is tracked.

P0 marketplace gaps:

- Templates can be installed without permission review.
- Trust labels are not backed by evidence.
- Private catalog policy is ignored.
- Template dependency failures are not blocked.
- Marketplace content violates policy or compliance rules.

---

## 12. Enterprise Governance Gap Audit

Enterprise readiness must be checked against:

- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `enterprise-implementation-methodology.md`
- `enterprise-professional-services-system.md`
- `enterprise-customer-training-certification.md`
- `enterprise-change-management-system.md`
- `enterprise-customer-health-scoring.md`
- `enterprise-renewal-expansion-system.md`
- `enterprise-adoption-success-insights.md`
- `enterprise-executive-business-review.md`

Required enterprise production gates:

1. Enterprise workspaces are isolated.
2. Workspace policies are enforced.
3. Admin actions are audited.
4. Approval workflows are enforceable.
5. SSO/SCIM is either implemented or clearly deferred.
6. Enterprise roles are documented.
7. Marketplace controls exist.
8. Evidence export exists.
9. Customer success data is workspace-scoped.
10. EBR metrics come from defined sources.

P0 enterprise gaps:

- Enterprise controls appear in UI but do not enforce behavior.
- SSO/SCIM claims exist without implementation or planned label.
- Approval actions are not auditable.
- Admin role boundaries are unclear.

---

## 13. Observability and Incident Gap Audit

Readiness must be checked against:

- `observability-analytics-events.md`
- `reliability-sla.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-incident-response.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`
- `platform-launch-readiness-command-center.md`

Required production gates:

1. Frontend events are tracked.
2. Backend request logs exist.
3. AI runs are traced.
4. Tool calls are traced.
5. Errors map to incident categories.
6. Internal Ops Command Center has actionable queues.
7. Incident severity model exists.
8. Escalation owners are defined.
9. Public status is not fake.
10. Launch readiness blockers are visible.

P0 observability gaps:

- No traceability for AI Employee actions.
- No runtime health signal.
- No escalation path for incidents.
- No audit evidence for production launch.

---

## 14. Data Governance and Privacy Gap Audit

Required checks:

1. Data classification exists.
2. Customer data is workspace-scoped.
3. Memory scope is explicit.
4. Retention rules exist.
5. Export/delete behavior is defined.
6. Audit logs avoid sensitive payload leakage.
7. Region/data residency claims are true.
8. Knowledge sources are permissioned.
9. Demo data cannot leak into production mode.
10. Legal pages match actual data behavior.

P0 data gaps:

- Production build ships demo data as if real.
- Region claims are unsupported.
- Memory stores sensitive data without controls.
- Knowledge retrieval ignores permissions.

---

## 15. UX, Accessibility, and Localization Gap Audit

Required checks:

1. Every MVP page has empty/loading/error/blocked states.
2. Keyboard navigation works for major flows.
3. Forms have validation and error messaging.
4. Tables support responsive behavior.
5. Critical actions have confirmation.
6. Components support RTL and LTR.
7. Persian and Arabic UI is RTL and right-aligned.
8. English and European language UI is LTR and left-aligned.
9. Numbers, dates, currency, and status labels support localization.
10. Copy does not overpromise capabilities.

P0 UX/localization gaps:

- RTL pages use LTR layout or alignment.
- Critical action lacks confirmation.
- Blocked permission state is not shown.
- Empty states do not guide setup.

---

## 16. Billing and Entitlement Gap Audit

Required checks:

1. Plan limits are defined.
2. Entitlements are enforced in backend or disabled in production.
3. Usage metering is defined.
4. AI cost controls are visible and enforceable.
5. Marketplace pricing is scoped.
6. Upgrade prompts do not block critical safety flows.
7. Billing state supports trial, active, past due, canceled, enterprise contract.
8. Invoice/export path is defined or deferred.

P0 billing gaps:

- UI shows paid plans without entitlement enforcement.
- AI usage costs are displayed without metering.
- Marketplace paid installs are allowed without billing contract.

---

## 17. Customer Success and Support Gap Audit

Required checks:

1. Customer success health scoring is defined.
2. Support escalation path exists.
3. Incidents connect to account impact.
4. Onboarding states are visible.
5. EBR metrics are grounded.
6. Renewal/expansion signals do not overstate value.
7. Marketplace and partner support responsibility is clear.
8. Internal notes and customer-visible notes are separated.

P0 CS/support gaps:

- Customer risk is shown but not actionable.
- Support ownership for Marketplace templates is unclear.
- EBR metrics are fake or ungrounded.

---

## 18. Codex Production Readiness Execution Protocol

When Codex uses this file, it must execute in this order:

1. Read `codex-execution-master-prompt.md`.
2. Read `mvp-build-scope-lock.md`.
3. Read `frontend-implementation-sprint-plan.md`.
4. Read `backend-api-contract-review.md`.
5. Read this file.
6. For each MVP surface, produce a Production Readiness Gap Report.
7. Do not build production behavior until P0 and P1 blockers are labeled.
8. Do not mark any surface production-ready without evidence.

---

## 19. Required Output: Production Readiness Gap Report

Codex must output this after every audit pass:

```md
# Production Readiness Gap Report: [Surface/System]

## Summary
- Current readiness status:
- Target readiness status:
- P0 blockers:
- P1 blockers:
- Recommended next action:

## Findings
| ID | Severity | Domain | Gap | Owner | Required Evidence | Status |
|---|---|---|---|---|---|---|

## Stop Rules Triggered
- ...

## Required Fixes Before Production
- ...

## Safe to Demo?
Yes/No, because...

## Safe to Pilot?
Yes/No, because...

## Safe for Production?
Yes/No, because...
```

---

## 20. Stop Rules

Codex must stop and escalate if any of these are true:

- A production surface depends on fake data without labels.
- A security-sensitive control is frontend-only.
- A permission, policy, or approval state is shown but not enforced.
- A marketplace template can be installed without eligibility checks.
- An AI Employee can run tools without scoped permissions.
- A pricing or billing claim cannot be enforced.
- A trust/compliance claim lacks evidence.
- RTL/LTR layout law is violated.
- A backend contract conflicts with frontend mock behavior.
- A P0 blocker is unresolved.

---

## 21. Global RTL/LTR Production Rule

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to:

- page layout;
- navigation;
- sidebars;
- tables;
- dashboards;
- cards;
- forms;
- modals;
- charts;
- timelines;
- filters;
- search;
- onboarding;
- marketplace cards;
- pricing tables;
- Trust Center evidence;
- admin settings;
- support consoles;
- launch readiness boards;
- audit reports;
- exports.

No production surface may pass readiness review if bidirectional layout behavior is missing.

---

## 22. MVP Production Reality Lock

For the first production path, Ariyo should treat these as target production/pilot surfaces:

1. Landing Page
2. Pricing Page
3. App Shell
4. Main Dashboard
5. AI Employee Builder
6. AI Employee Detail
7. Workflow Builder
8. Marketplace Homepage
9. Template Detail
10. Enterprise Admin Preview
11. Trust Center Preview
12. Launch Readiness Command Center

Everything outside this scope should be treated as:

- design-ready;
- demo-only;
- deferred;
- or operational constraint.

Codex must not expand MVP scope without updating `mvp-build-scope-lock.md`.

---

## 23. Golden Rule

Ariyo may demo ambition, but it must ship accountability.

A surface is not production-ready because it looks complete.

A surface is production-ready only when it is secure, governed, observable, auditable, localized, supportable, evidence-backed, contract-aligned, and safe for real customer use.
