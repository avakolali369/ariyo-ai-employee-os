# Ariyo MVP Build Scope Lock

## Core Contract

Ariyo MVP Build Scope Lock is not a roadmap, backlog, wishlist, or feature-priority brainstorm.

It is the governed scope boundary that tells Codex, frontend engineers, product designers, founders, operators, and AI-assisted builders exactly what Ariyo must build for the first credible MVP, what may appear only as a mock/demo surface, what must remain deferred, and what must never be built during the MVP cycle.

Codex must not treat all Ariyo skills as equally buildable.

Codex must build only the locked MVP surfaces, read supporting skills as constraints, use mock/demo implementation where required, and defer everything outside the MVP lock until an explicit post-MVP unlock is approved.

---

## 1. Purpose

This file locks Ariyo's first implementation scope so the project does not collapse under its own ambition.

Ariyo now has a large skill system covering frontend, AI Employees, Marketplace, enterprise readiness, trust, operations, growth, revenue, and mockup specifications. That system is intentionally broad. The MVP must be intentionally narrow.

The purpose of this file is to:

- prevent Codex from trying to build all 146+ skills as product features at once;
- define the exact MVP product surfaces;
- define what must be real, what can be mocked, and what must be deferred;
- preserve enterprise-grade credibility without overbuilding enterprise infrastructure too early;
- keep the first build investor-demo-ready, customer-demo-ready, and technically extendable;
- enforce RTL/LTR behavior from the first implementation;
- establish a strict acceptance gate before any feature enters the MVP.

---

## 2. Non-Negotiable MVP Rule

The Ariyo MVP is not the full Ariyo platform.

The Ariyo MVP is the smallest credible version of the AI Employee Operating System that can demonstrate:

1. a serious product narrative;
2. a governed AI Employee creation flow;
3. a dashboard for operating AI Employees;
4. a workflow builder showing AI/human/tool coordination;
5. a Marketplace discovery and template decision flow;
6. enterprise trust and governance posture;
7. pricing/package clarity;
8. readiness to launch or pilot.

If a feature does not support one of these eight outcomes, it does not belong in MVP build scope.

---

## 3. Global RTL/LTR Layout Law

This law applies to every MVP page, component, form, table, state, modal, notification, chart, navigation surface, and handoff artifact.

- Persian/Farsi interfaces must be RTL and right-aligned across all UI elements.
- Arabic interfaces must be RTL and right-aligned across all UI elements.
- English interfaces must be LTR and left-aligned across all UI elements.
- European LTR language interfaces must be LTR and left-aligned across all UI elements.
- Direction must affect layout, navigation, icon placement, text alignment, table scanning, form labels, drawers, breadcrumbs, sidebars, timeline direction, stepper direction, empty states, modals, tooltips, and toast placement.
- Codex must never hard-code English-first alignment into reusable components.
- Every reusable component must support `dir="rtl"` and `dir="ltr"` behavior.

If any skill conflicts with this law, this law wins.

---

## 4. MVP Build Modes

Codex must classify every implementation request into one of these modes.

### 4.1 Build Real

A surface is Build Real when it must be implemented as a working frontend product surface with real state handling, reusable components, typed mock data, responsive behavior, and interaction flows.

Build Real does not mean production backend must already exist. It means the frontend must be structured so real APIs can replace mock data later.

### 4.2 Demo Real

A surface is Demo Real when it must look and behave credibly for investor, customer, and internal demos, but may use seeded demo data, controlled states, mocked API responses, and non-production integrations.

### 4.3 Read as Constraint

A skill is Read as Constraint when Codex must read it to understand rules, security posture, business logic, copy, governance, or future extensibility, but must not build a dedicated surface for it in MVP.

### 4.4 Defer

A skill is Defer when it must not be built during MVP unless explicitly unlocked. Deferred does not mean unimportant. It means the feature belongs to a later phase.

### 4.5 Forbidden During MVP

A behavior is Forbidden when building it would increase risk, confuse the product, overpromise capabilities, or create compliance/security exposure.

---

## 5. MVP Product Surfaces Locked for Build

The MVP includes exactly these primary product surfaces:

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

These are the only first-wave surfaces Codex may implement as page-level product experiences.

Creator Portal, Partner Portal, Customer Success Console, and Internal Ops Command Center may be implemented only as demo routes or limited preview shells after the core MVP surfaces are complete.

---

## 6. MVP Build-Real Skill Lock

These skills are required for the first MVP implementation and must be read in order.

| # | Skill | Scope Lock | Codex Mode | MVP Output |
|---:|---|---|---|---|
| 1 | `master-skill-index-map.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 2 | `product-surface-map.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 3 | `codex-execution-master-prompt.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 4 | `mockup-implementation-roadmap.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 5 | `figma-design-system-brief.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 6 | `frontend-implementation-sprint-plan.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 7 | `business-context.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 8 | `brand-messaging-system.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 9 | `product-strategy.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 10 | `product-requirements-mvp.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 11 | `domain-model.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 12 | `project-structure.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 13 | `coding-standards.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 14 | `frontend-design.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 15 | `frontend-components.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 16 | `frontend-responsive.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 17 | `frontend-motion.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 18 | `frontend-copywriting.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 19 | `frontend-state-data.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 20 | `frontend-forms-validation.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 21 | `frontend-testing.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 22 | `frontend-performance.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 23 | `backend-architecture.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 24 | `api-contracts.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 25 | `data-governance-privacy.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 26 | `security-threat-model.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 27 | `compliance-legal-risk.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 28 | `model-provider-strategy.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 29 | `ai-cost-control.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 30 | `ai-employee-architecture.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 31 | `ai-agent-permissions-runtime.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 32 | `ai-agent-memory-context.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 33 | `ai-agent-evaluation-benchmarking.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 34 | `ai-agent-simulation-sandbox.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 35 | `ai-agent-observability-tracing.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 36 | `ai-agent-incident-response.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 37 | `ai-agent-versioning-change-management.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 38 | `multi-agent-orchestration-system.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 39 | `workflow-automation.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 40 | `knowledge-rag.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 41 | `integration-ecosystem.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 42 | `human-review-governance.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 43 | `quality-assurance-system.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 44 | `reliability-sla.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 45 | `observability-analytics-events.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 46 | `deployment-ops.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 47 | `feature-flags-rollout-system.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 48 | `admin-permissions.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 49 | `onboarding-activation.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 50 | `pricing-packaging-strategy.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 51 | `monetization-billing.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 52 | `website-conversion-system.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 53 | `product-analytics-growth.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 54 | `ariyo-landing-page-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 55 | `ariyo-pricing-page-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 56 | `ariyo-dashboard-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 57 | `ariyo-ai-employee-builder-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 58 | `ariyo-ai-employee-detail-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 59 | `ariyo-workflow-builder-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 60 | `ariyo-marketplace-homepage-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 61 | `ariyo-template-detail-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 62 | `ariyo-enterprise-admin-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 63 | `ariyo-trust-center-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |
| 64 | `ariyo-launch-readiness-command-center-mockup-spec.md` | MVP Build | Build Real / Read as Constraint | Working product surface, component, state, or hard rule |

---

## 7. Demo-Real Skill Lock

These skills may appear as credible demo surfaces, preview routes, seeded data, or limited internal/admin flows, but must not become full product systems during MVP.

| # | Skill | Scope Lock | Codex Mode | MVP Output |
|---:|---|---|---|---|
| 1 | `ai-employee-marketplace.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 2 | `agent-team-templates.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 3 | `agent-marketplace-template-builder.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 4 | `ai-agent-template-review-governance.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 5 | `template-quality-ranking-system.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 6 | `marketplace-search-recommendation-engine.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 7 | `marketplace-installation-entitlements.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 8 | `marketplace-billing-payouts.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 9 | `marketplace-trust-safety-operations.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 10 | `marketplace-policy-enforcement-rules.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 11 | `marketplace-creator-success-system.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 12 | `marketplace-partner-operations.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 13 | `marketplace-enterprise-procurement.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 14 | `marketplace-enterprise-vendor-management.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 15 | `marketplace-enterprise-audit-reports.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 16 | `marketplace-compliance-evidence-center.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 17 | `marketplace-regulatory-compliance-matrix.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 18 | `marketplace-data-residency-region-controls.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 19 | `marketplace-private-catalog-controls.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 20 | `marketplace-template-dependency-registry.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 21 | `marketplace-template-health-monitoring.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 22 | `marketplace-template-trust-labeling-system.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 23 | `marketplace-customer-review-reputation-system.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 24 | `marketplace-merchandising-promotion-system.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 25 | `marketplace-search-quality-analytics.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 26 | `marketplace-notification-communication-system.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 27 | `marketplace-sandbox-demo-environments.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 28 | `marketplace-localization-internationalization.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 29 | `ariyo-creator-portal-mockup-spec.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 30 | `ariyo-partner-portal-mockup-spec.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 31 | `ariyo-customer-success-console-mockup-spec.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |
| 32 | `ariyo-internal-ops-command-center-mockup-spec.md` | MVP Demo | Demo Real | Controlled demo surface, preview card, mock data, or limited route |

---

## 8. Enterprise Demo Constraint Lock

These skills are crucial to enterprise credibility, but most should be implemented as governance signals, settings previews, readiness cards, audit placeholders, and Trust Center/Enterprise Admin content during MVP.

| # | Skill | Scope Lock | Codex Mode | MVP Output |
|---:|---|---|---|---|
| 1 | `enterprise-readiness.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 2 | `enterprise-account-governance.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 3 | `enterprise-sso-scim-directory-sync.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 4 | `enterprise-workspace-policy-engine.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 5 | `enterprise-approval-workflows.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 6 | `enterprise-implementation-methodology.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 7 | `enterprise-professional-services-system.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 8 | `enterprise-customer-training-certification.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 9 | `enterprise-change-management-system.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 10 | `enterprise-customer-health-scoring.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 11 | `enterprise-renewal-expansion-system.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 12 | `enterprise-adoption-success-insights.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |
| 13 | `enterprise-executive-business-review.md` | Enterprise Constraint | Read as Constraint / Demo Real | Governance preview, trust signal, enterprise proof, or limited admin state |

---

## 9. Deferred Skill Lock

These skills are deferred from MVP build. Codex may read them for context only if a build-real or demo-real surface explicitly references them.

| # | Skill | Scope Lock | Codex Mode | MVP Output |
|---:|---|---|---|---|
| 1 | `community-partner-growth.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 2 | `content-marketing-engine.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 3 | `conversion-experimentation-system.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 4 | `customer-education-academy.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 5 | `customer-lifecycle-automation.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 6 | `customer-success-playbooks.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 7 | `ecosystem-marketplace-economy.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 8 | `finance-accounting-controls.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 9 | `internal-admin-backoffice.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 10 | `investor-fundraising-deck.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 11 | `knowledge-base-support-system.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 12 | `launch-go-to-market.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 13 | `legal-pages-policy-system.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 14 | `marketplace-creator-community-program.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 15 | `marketplace-customer-support-operations.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 16 | `marketplace-dispute-resolution.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 17 | `marketplace-internal-template-governance.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 18 | `marketplace-template-auto-remediation.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 19 | `marketplace-template-certification-program.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 20 | `marketplace-template-experimentation-system.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 21 | `marketplace-template-lifecycle-optimization.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 22 | `marketplace-template-migration-portability.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 23 | `marketplace-template-outcome-intelligence.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 24 | `marketplace-template-quality-benchmarking.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 25 | `operations-command-center.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 26 | `platform-final-readiness-checklist.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 27 | `platform-investor-enterprise-narrative.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 28 | `platform-launch-readiness-command-center.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 29 | `platform-operating-model.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 30 | `prompt-tool-orchestration.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 31 | `revenue-operations-system.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 32 | `roadmap-execution-plan.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 33 | `sales-crm-pipeline-system.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 34 | `sales-demo-playbook.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |
| 35 | `trust-center-public-status.md` | Deferred | Do Not Build in MVP | No dedicated MVP surface unless explicitly unlocked |

---

## 10. Uncategorized / Newly Added Skill Handling

If a skill exists in `.skills/` but is not classified above, Codex must treat it as **Read as Constraint** by default and must not create a new product surface for it.

Current uncategorized skills before this file was added:

1. `ai-safety-evaluation.md`
2. `ariyo-core-product-mockup-brief.md`

After this file is added, `mvp-build-scope-lock.md` itself must be treated as a top-level governing file and read before any implementation sprint begins.

---

## 11. Codex Boot Sequence for MVP

Codex must start every MVP implementation session by reading these files in this order:

1. `codex-execution-master-prompt.md`
2. `master-skill-index-map.md`
3. `product-surface-map.md`
4. `mockup-implementation-roadmap.md`
5. `mvp-build-scope-lock.md`
6. `figma-design-system-brief.md`
7. `frontend-implementation-sprint-plan.md`
8. `project-structure.md`
9. `coding-standards.md`
10. `frontend-design.md`
11. `frontend-components.md`
12. `frontend-responsive.md`
13. `frontend-state-data.md`
14. `frontend-forms-validation.md`
15. `frontend-testing.md`
16. `frontend-performance.md`

Only after this boot sequence may Codex begin page-level implementation.

---

## 12. MVP Page Implementation Order

Codex must implement MVP pages in this order:

### Sprint A — Public Foundation

1. Landing Page from `ariyo-landing-page-mockup-spec.md`
2. Pricing Page from `ariyo-pricing-page-mockup-spec.md`
3. Trust Center Preview from `ariyo-trust-center-mockup-spec.md`

### Sprint B — App Foundation

4. App Shell from `product-surface-map.md`, `figma-design-system-brief.md`, and `frontend-components.md`
5. Main Dashboard from `ariyo-dashboard-mockup-spec.md`

### Sprint C — AI Employee Core

6. AI Employee Builder from `ariyo-ai-employee-builder-mockup-spec.md`
7. AI Employee Detail from `ariyo-ai-employee-detail-mockup-spec.md`

### Sprint D — Workflow Core

8. Workflow Builder from `ariyo-workflow-builder-mockup-spec.md`

### Sprint E — Marketplace Core

9. Marketplace Homepage from `ariyo-marketplace-homepage-mockup-spec.md`
10. Template Detail from `ariyo-template-detail-mockup-spec.md`

### Sprint F — Enterprise Credibility

11. Enterprise Admin Preview from `ariyo-enterprise-admin-mockup-spec.md`
12. Launch Readiness Command Center from `ariyo-launch-readiness-command-center-mockup-spec.md`

### Sprint G — Optional Demo Previews

13. Creator Portal Preview from `ariyo-creator-portal-mockup-spec.md`
14. Partner Portal Preview from `ariyo-partner-portal-mockup-spec.md`
15. Customer Success Console Preview from `ariyo-customer-success-console-mockup-spec.md`
16. Internal Ops Command Center Preview from `ariyo-internal-ops-command-center-mockup-spec.md`

Sprint G must not begin until Sprint A through Sprint F are complete.

---

## 13. MVP Component Implementation Order

Before pages are implemented, Codex must create or confirm these reusable component groups:

1. Layout primitives: page shell, grid, stack, section, container, split panel.
2. Navigation: top nav, sidebar, breadcrumbs, tabs, mobile nav, command menu.
3. Typography: heading, body, caption, metadata, code, metric label.
4. Buttons and actions: primary, secondary, tertiary, danger, ghost, split action.
5. Forms: input, textarea, select, combobox, checkbox, radio, switch, stepper.
6. Data display: table, card, metric, badge, tag, status pill, timeline.
7. Feedback: toast, inline alert, empty state, loading skeleton, error boundary.
8. Overlays: modal, drawer, popover, tooltip, confirmation dialog.
9. AI Employee components: employee card, health badge, role summary, memory badge, tool list, permission matrix.
10. Workflow components: trigger block, step node, approval gate, error path, simulation result.
11. Marketplace components: template card, trust label, compatibility badge, install CTA, review summary.
12. Enterprise components: policy card, audit event, approval queue, compliance evidence, workspace selector.
13. Readiness components: readiness score, gate board, blocker card, owner badge, evidence link.
14. RTL/LTR variants for every component.

Codex must not build page-specific components when a reusable system component can be used.

---

## 14. MVP Data Model Lock

The MVP may use typed mock data for all surfaces, but data must be shaped like production data.

Required mock domains:

- AI Employees
- AI Employee roles
- AI Employee health
- Workflows
- Workflow runs
- Approvals
- Marketplace templates
- Template trust labels
- Template compatibility
- Install eligibility
- Workspaces
- Users and roles
- Policies
- Audit events
- Incidents
- Readiness gates
- Pricing plans
- Usage and cost
- Customer/account health

Mock data must never be random placeholder noise. It must support credible demos.

---

## 15. MVP Backend Boundary

The MVP frontend must be API-ready but does not require full backend completion.

Codex may implement:

- typed service adapters;
- mock API functions;
- local fixtures;
- state stores;
- route loaders;
- schema definitions;
- API contract placeholders;
- optimistic UI patterns where safe.

Codex must not implement:

- real payment collection;
- real marketplace payouts;
- real enterprise SSO/SCIM provisioning;
- real data residency enforcement;
- real compliance evidence vault;
- real external customer data ingestion;
- real autonomous AI execution against customer systems;
- irreversible production actions.

---

## 16. Security, Privacy, and Governance MVP Boundary

MVP must look enterprise credible without pretending full compliance certification exists.

Allowed:

- compliance posture cards;
- evidence request flow mock;
- audit log preview;
- policy preview;
- approval gates;
- permission review UI;
- risk labels;
- region compatibility indicators;
- incident transparency mock;
- Trust Center preview.

Forbidden:

- claiming certifications that have not been obtained;
- claiming legal guarantees without review;
- presenting simulated controls as live production controls;
- storing real sensitive customer data in demo fixtures;
- enabling irreversible actions without confirmation and audit trail.

---

## 17. Marketplace MVP Boundary

MVP Marketplace must prove discovery, trust, compatibility, and install decision quality.

Build Real:

- Marketplace homepage discovery;
- search and filters using mock data;
- template cards;
- trust labels;
- Template Detail page;
- install eligibility preview;
- permissions preview;
- pricing/plan compatibility;
- region compatibility;
- approval-required install states.

Demo Only:

- creator publishing;
- partner operations;
- payout details;
- dispute resolution;
- advanced ranking;
- certification program;
- template auto-remediation;
- deep experimentation.

Defer:

- real payouts;
- real dispute case management;
- full creator economy;
- full private catalog provisioning;
- full enterprise procurement workflow.

---

## 18. AI Employee MVP Boundary

MVP AI Employee experience must prove that Ariyo is an operating system for accountable AI work.

Build Real:

- AI Employee Builder;
- role and outcome definition;
- knowledge source selection mock;
- tool selection mock;
- memory/context settings mock;
- permission scope preview;
- simulation panel;
- review and launch checklist;
- AI Employee Detail;
- health/outcome/cost/governance summary;
- versions and audit preview.

Demo Only:

- live model orchestration;
- real third-party tool execution;
- advanced autonomous runtime;
- multi-agent team execution;
- incident auto-remediation.

Defer:

- production-grade agent runtime;
- real enterprise data ingestion;
- autonomous actions against live systems;
- advanced agent marketplace installation automation.

---

## 19. Workflow MVP Boundary

MVP Workflow Builder must show accountable coordination between humans, AI Employees, tools, approvals, and outcomes.

Build Real:

- workflow canvas or structured builder;
- triggers;
- steps;
- AI Employee assignment;
- approval gates;
- simulation panel;
- error path preview;
- version and launch checklist;
- cost estimate preview.

Demo Only:

- live workflow execution;
- external tool execution;
- advanced branching;
- real event streaming.

Defer:

- production workflow engine;
- high-scale orchestration;
- full integration marketplace execution.

---

## 20. Enterprise MVP Boundary

Enterprise MVP exists to communicate credibility, not to deliver full enterprise infrastructure.

Build Real / Demo Real:

- Enterprise Admin Preview;
- workspace settings;
- user/role mock table;
- policy engine preview;
- approval queue preview;
- marketplace controls preview;
- audit logs preview;
- Trust Center preview;
- Launch Readiness Command Center.

Defer:

- real SSO/SCIM;
- real procurement flows;
- real compliance vault;
- real custom legal workflow;
- real workspace policy enforcement at runtime.

---

## 21. MVP Acceptance Gates

A feature may enter MVP only if it passes all gates below.

### Gate 1 — Product Value

The feature must support one of the eight MVP outcomes defined in Section 2.

### Gate 2 — Surface Clarity

The feature must belong to one of the 12 locked MVP product surfaces.

### Gate 3 — Reusable Component Fit

The feature must use or extend the Design System.

### Gate 4 — RTL/LTR Compliance

The feature must work in RTL and LTR layouts.

### Gate 5 — Demo Credibility

The feature must make the product clearer, more credible, or more valuable in a demo.

### Gate 6 — Risk Containment

The feature must not create unsupported legal, security, payment, privacy, or compliance claims.

### Gate 7 — API Readiness

The feature must be structured so mock data can later be replaced with real APIs.

### Gate 8 — Testability

The feature must have testable states: default, empty, loading, error, success, blocked, permission denied where relevant.

---

## 22. Codex Stop Rules

Codex must stop and report instead of continuing if:

- a task requires building a deferred skill as a production feature;
- a page is requested before its dependencies are implemented;
- a component lacks RTL/LTR behavior;
- a feature requires real payment, real SSO, real payouts, or real customer data;
- a feature makes unsupported compliance or legal claims;
- a feature requires real autonomous action against customer systems;
- scope expands beyond the 12 locked MVP product surfaces;
- the request conflicts with this MVP Build Scope Lock.

---

## 23. Codex Work Unit Report Format

After every implementation work unit, Codex must report:

```text
Work Unit:
Implemented:
Skills Read:
MVP Scope Classification:
Components Created/Reused:
Routes Added/Changed:
Mock Data Added/Changed:
RTL/LTR Verified:
States Covered:
Tests/Checks Added:
Deferred Items:
Risks/Questions:
Next Recommended Work Unit:
```

Codex must never report a feature as complete if RTL/LTR behavior was not checked.

---

## 24. MVP Definition of Done

The MVP is done when all of the following are true:

- Landing Page is implemented.
- Pricing Page is implemented.
- App Shell is implemented.
- Main Dashboard is implemented.
- AI Employee Builder is implemented.
- AI Employee Detail is implemented.
- Workflow Builder is implemented.
- Marketplace Homepage is implemented.
- Template Detail is implemented.
- Enterprise Admin Preview is implemented.
- Trust Center Preview is implemented.
- Launch Readiness Command Center is implemented.
- All locked pages support desktop, tablet, and mobile layouts.
- All locked pages support RTL and LTR behavior.
- All locked pages use typed mock data.
- All critical states are represented.
- No unsupported compliance, payment, or enterprise claims are made.
- The design system is reused consistently.
- The demo flow can be completed from public website to app dashboard to AI Employee creation to Marketplace evaluation.

---

## 25. MVP Demo Flow Lock

The first credible demo must follow this path:

1. Visitor lands on Ariyo Landing Page.
2. Visitor understands AI Employee Operating System positioning.
3. Visitor views Pricing Page and understands Basic/Pro/Smart/Enterprise.
4. Visitor enters the App Dashboard.
5. Visitor sees AI Employees, outcomes, risks, approvals, and Marketplace recommendations.
6. Visitor creates an AI Employee in Builder.
7. Visitor reviews an AI Employee Detail page.
8. Visitor builds or previews a workflow.
9. Visitor opens Marketplace Homepage.
10. Visitor evaluates a Template Detail page.
11. Visitor sees enterprise controls in Enterprise Admin Preview.
12. Visitor sees Trust Center Preview.
13. Visitor sees Launch Readiness Command Center.

This demo flow is the first MVP north star.

---

## 26. Forbidden MVP Patterns

Codex must avoid these patterns:

- building all skills as pages;
- making Ariyo look like a chatbot UI;
- making Ariyo look like a prompt library;
- making Ariyo look like a generic automation clone;
- using placeholder lorem ipsum where strategic demo copy is needed;
- hard-coding LTR layout;
- adding complex features before the core demo flow works;
- building enterprise infrastructure beyond preview/demo scope;
- adding real money movement;
- adding real customer-data ingestion;
- claiming certifications not earned;
- hiding risk, permissions, cost, or governance behind vague labels.

---

## 27. Post-MVP Unlock Criteria

A deferred skill can be unlocked only when:

1. the MVP Definition of Done is complete;
2. the skill supports a paying customer, enterprise pilot, investor milestone, compliance requirement, or revenue-critical workflow;
3. the required dependencies are already implemented;
4. the design system has a component path for it;
5. the backend/API boundary is clear;
6. security/privacy risk is understood;
7. RTL/LTR behavior is specified;
8. an owner accepts the scope.

---

## 28. Golden Rule

Build the smallest version of Ariyo that proves the category.

Do not build the full platform first.

Do not build disconnected features.

Do not build beyond the scope lock.

Do build the system foundation that makes the full platform inevitable.
