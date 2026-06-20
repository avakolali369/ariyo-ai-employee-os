# Ariyo Codex Execution Master Prompt

## Core Contract

Ariyo Codex Execution Master Prompt is not a normal instruction file, README, or task checklist.

It is the governing execution prompt for Codex and AI-assisted builders. It tells Codex how to read Ariyo's `.skills` package, which files to load first, which files must govern implementation, which files are only supporting contracts, which files define mockup order, when to stop, how to report progress, and how to avoid disconnected execution.

Codex must not execute Ariyo skills alphabetically.

Codex must execute Ariyo skills according to dependency, product-surface priority, enterprise readiness, component reuse, governance risk, launch value, and implementation sequence.

---

## 1. How Codex Must Use This File

When Codex receives the Ariyo project and this `.skills` package, Codex must perform the following sequence before editing product code:

1. Read this file first.
2. Read `master-skill-index-map.md` second.
3. Read `mockup-implementation-roadmap.md` third.
4. Read `product-surface-map.md` fourth.
5. Read `ariyo-core-product-mockup-brief.md` fifth.
6. Read the relevant wave for the task at hand.
7. Read the exact mockup spec or implementation skill for the target surface.
8. Inspect the existing repository before making assumptions.
9. Produce a concise execution plan before changing code.
10. Implement only the requested scope unless dependencies force a small supporting change.
11. Report what changed, what files were touched, what risks remain, and what should be implemented next.

Codex must treat this file as the highest-level execution router, but not as a substitute for the detailed skill contracts.

---

## 2. Non-Negotiable Codex Rules

### 2.1 Do Not Execute Alphabetically

Alphabetical order is forbidden for implementation.

Alphabetical lists are acceptable only for README display, inventory review, or completeness checks.

Implementation must follow the execution order in this file.

### 2.2 Do Not Skip Foundation Files

Before implementing any product surface, Codex must confirm it has loaded:

- `master-skill-index-map.md`
- `mockup-implementation-roadmap.md`
- `product-surface-map.md`
- `ariyo-core-product-mockup-brief.md`
- `frontend-design.md`
- `frontend-components.md`
- `frontend-responsive.md`
- `frontend-copywriting.md`
- `coding-standards.md`
- `project-structure.md`

### 2.3 Do Not Treat Mockups as Static Images

Ariyo mockup specs are product contracts.

Codex must translate them into reusable components, routes, states, data structures, accessibility behavior, responsive behavior, RTL/LTR behavior, and analytics events.

### 2.4 Do Not Build Toy AI UI

Ariyo must not look like:

- a chatbot wrapper
- a prompt library
- a Zapier clone
- a plugin store
- a generic AI dashboard
- a sci-fi agent playground
- a casual template gallery

Ariyo must look like an enterprise-grade AI Employee Operating System.

### 2.5 Do Not Ignore Governance

If a UI surface includes AI Employees, workflows, templates, marketplace installation, enterprise controls, customer data, approvals, audit logs, cost controls, or security-sensitive actions, Codex must include governance cues.

Governance cues may include:

- permission scope
- approval state
- audit visibility
- policy status
- region/data residency compatibility
- trust label
- risk level
- cost estimate
- owner assignment
- evidence link
- incident/escalation state

---

## 3. Global RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to every Ariyo product surface, public page, dashboard, admin console, marketplace flow, creator portal, partner portal, customer portal, mockup specification, component, notification, report, and frontend implementation.

If any other instruction conflicts with this law, this law wins for localization, internationalization, alignment, and bidirectional layout behavior.

### Codex RTL/LTR Implementation Requirements

Codex must use logical layout properties wherever possible:

```text
margin-inline-start
margin-inline-end
padding-inline-start
padding-inline-end
inset-inline-start
inset-inline-end
border-inline-start
border-inline-end
text-align: start
text-align: end
```

Codex must avoid hardcoded left/right alignment except when drawing direction-specific illustrations or when the design explicitly requires physical direction.

Codex must verify:

- navigation flips correctly in RTL
- sidebars move to the correct side in RTL
- icons with directional meaning are mirrored or replaced
- tables align numeric and textual content correctly
- timeline and stepper direction is locale-aware
- modals, drawers, forms, cards, filters, and empty states obey locale direction
- charts remain readable in both RTL and LTR
- keyboard focus order remains logical
- screen reader labels remain natural in both language directions

---

## 4. Codex Execution Modes

Codex must identify the requested work mode before editing:

| Mode | When to Use | Required Inputs |
|---|---|---|
| Foundation Mode | Project setup, design system, components, architecture | Waves 0-2 |
| Product Surface Mode | Building a page or app surface | Waves 0-2 + relevant mockup spec |
| AI Employee Mode | AI runtime, permissions, memory, evaluation, simulation | Waves 0-3 |
| Marketplace Mode | Template discovery, installation, billing, trust, creator/partner | Waves 0-2 + Wave 5 + relevant marketplace surface |
| Enterprise Mode | Admin, policies, approvals, SSO, compliance, procurement | Waves 0-2 + Wave 7 + relevant enterprise surface |
| Launch Mode | Readiness, blockers, evidence, launch decisions | Waves 0, 2, 7, and launch readiness specs |
| Debug/Fix Mode | Fixing a bug in an existing surface | Relevant file only + nearest governing specs |
| Refactor Mode | Improving code structure without feature changes | coding/project/frontend/performance/testing skills |

---

## 5. Codex Stop Rules

Codex must stop and report instead of continuing when:

1. The requested feature conflicts with a governing skill.
2. The repository structure contradicts `project-structure.md` and the change would be large.
3. A required API contract is missing or ambiguous.
4. A requested action would bypass approval, audit, security, privacy, or enterprise governance.
5. A UI cannot support RTL/LTR correctly without restructuring core layout.
6. The implementation would require credentials, secrets, private keys, production data, or irreversible actions.
7. The user asks for broad implementation but the repo is missing the required app shell or design system.
8. Tests cannot be run and the change affects critical flows.

When stopping, Codex must state:

- blocker
- affected skill contract
- recommended safe next action
- minimal unblock plan

---

## 6. Required Codex Output After Every Work Unit

After each implementation, Codex must report:

```text
What I implemented:
- ...

Files changed:
- ...

Skills used:
- ...

RTL/LTR status:
- ...

Governance/security status:
- ...

States covered:
- loading
- empty
- error
- blocked
- permission denied
- success

Tests/checks run:
- ...

Known gaps:
- ...

Recommended next step:
- ...
```

Codex must never claim production readiness without evidence.

---

## 7. Complete Skill Execution Order

The following order governs Codex execution. Codex may skip unrelated waves only when the task is narrow, but it must never violate dependency order inside a surface.

### Wave 0 — Codex Boot, Orientation, and Non-Negotiable Rules

| Order | Skill | Codex Purpose |
|---:|---|---|
| 1 | `.skills/codex-execution-master-prompt.md` | Load this master prompt first; it governs every following action. |
| 2 | `.skills/master-skill-index-map.md` | Orient Codex on dependency, product surface priority, and mockup execution context. |
| 3 | `.skills/mockup-implementation-roadmap.md` | Orient Codex on dependency, product surface priority, and mockup execution context. |
| 4 | `.skills/product-surface-map.md` | Orient Codex on dependency, product surface priority, and mockup execution context. |
| 5 | `.skills/ariyo-core-product-mockup-brief.md` | Orient Codex on dependency, product surface priority, and mockup execution context. |
| 6 | `.skills/business-context.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 7 | `.skills/product-strategy.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 8 | `.skills/product-requirements-mvp.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 9 | `.skills/roadmap-execution-plan.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 10 | `.skills/platform-operating-model.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 11 | `.skills/platform-investor-enterprise-narrative.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 12 | `.skills/platform-final-readiness-checklist.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 13 | `.skills/platform-launch-readiness-command-center.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |

### Wave 1 — Frontend Foundation, Design System, and Project Structure

| Order | Skill | Codex Purpose |
|---:|---|---|
| 14 | `.skills/coding-standards.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 15 | `.skills/project-structure.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 16 | `.skills/frontend-design.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 17 | `.skills/frontend-components.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 18 | `.skills/frontend-responsive.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 19 | `.skills/frontend-motion.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 20 | `.skills/frontend-copywriting.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 21 | `.skills/frontend-state-data.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 22 | `.skills/frontend-forms-validation.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 23 | `.skills/frontend-testing.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 24 | `.skills/frontend-performance.md` | Establish frontend, component, responsive, accessibility, and code standards before UI implementation. |
| 25 | `.skills/feature-flags-rollout-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 26 | `.skills/deployment-ops.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |

### Wave 2 — Core Product Architecture and Contracts

| Order | Skill | Codex Purpose |
|---:|---|---|
| 27 | `.skills/domain-model.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 28 | `.skills/api-contracts.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 29 | `.skills/backend-architecture.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 30 | `.skills/admin-permissions.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 31 | `.skills/integration-ecosystem.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 32 | `.skills/knowledge-rag.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 33 | `.skills/workflow-automation.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 34 | `.skills/prompt-tool-orchestration.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 35 | `.skills/model-provider-strategy.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 36 | `.skills/ai-cost-control.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 37 | `.skills/observability-analytics-events.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 38 | `.skills/reliability-sla.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 39 | `.skills/security-threat-model.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 40 | `.skills/data-governance-privacy.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 41 | `.skills/compliance-legal-risk.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 42 | `.skills/legal-pages-policy-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 43 | `.skills/quality-assurance-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |

### Wave 3 — AI Employee Runtime, Agent Governance, and Safety

| Order | Skill | Codex Purpose |
|---:|---|---|
| 44 | `.skills/ai-employee-architecture.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 45 | `.skills/ai-agent-permissions-runtime.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 46 | `.skills/ai-agent-memory-context.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 47 | `.skills/ai-agent-evaluation-benchmarking.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 48 | `.skills/ai-agent-simulation-sandbox.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 49 | `.skills/ai-agent-incident-response.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 50 | `.skills/ai-agent-observability-tracing.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 51 | `.skills/ai-agent-versioning-change-management.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 52 | `.skills/multi-agent-orchestration-system.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 53 | `.skills/agent-team-templates.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 54 | `.skills/agent-marketplace-template-builder.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 55 | `.skills/ai-agent-template-review-governance.md` | Govern AI Employee behavior, runtime, permissions, memory, evaluation, safety, and lifecycle. |
| 56 | `.skills/human-review-governance.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 57 | `.skills/ai-safety-evaluation.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |

### Wave 4 — Product Growth, Revenue, GTM, and Customer Operations

| Order | Skill | Codex Purpose |
|---:|---|---|
| 58 | `.skills/pricing-packaging-strategy.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 59 | `.skills/monetization-billing.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 60 | `.skills/finance-accounting-controls.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 61 | `.skills/product-analytics-growth.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 62 | `.skills/onboarding-activation.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 63 | `.skills/customer-lifecycle-automation.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 64 | `.skills/customer-success-playbooks.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 65 | `.skills/customer-education-academy.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 66 | `.skills/knowledge-base-support-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 67 | `.skills/brand-messaging-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 68 | `.skills/content-marketing-engine.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 69 | `.skills/community-partner-growth.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 70 | `.skills/website-conversion-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 71 | `.skills/conversion-experimentation-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 72 | `.skills/sales-crm-pipeline-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 73 | `.skills/revenue-operations-system.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 74 | `.skills/sales-demo-playbook.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 75 | `.skills/investor-fundraising-deck.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 76 | `.skills/launch-go-to-market.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 77 | `.skills/operations-command-center.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |
| 78 | `.skills/internal-admin-backoffice.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |

### Wave 5 — Marketplace Core, Template Economy, and Trust Operations

| Order | Skill | Codex Purpose |
|---:|---|---|
| 79 | `.skills/ai-employee-marketplace.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 80 | `.skills/ecosystem-marketplace-economy.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 81 | `.skills/marketplace-search-recommendation-engine.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 82 | `.skills/marketplace-installation-entitlements.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 83 | `.skills/marketplace-billing-payouts.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 84 | `.skills/marketplace-dispute-resolution.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 85 | `.skills/marketplace-trust-safety-operations.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 86 | `.skills/marketplace-policy-enforcement-rules.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 87 | `.skills/marketplace-creator-success-system.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 88 | `.skills/marketplace-partner-operations.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 89 | `.skills/marketplace-customer-support-operations.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 90 | `.skills/marketplace-creator-community-program.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 91 | `.skills/marketplace-customer-review-reputation-system.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 92 | `.skills/marketplace-merchandising-promotion-system.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 93 | `.skills/marketplace-search-quality-analytics.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 94 | `.skills/marketplace-notification-communication-system.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 95 | `.skills/template-quality-ranking-system.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 96 | `.skills/marketplace-template-dependency-registry.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 97 | `.skills/marketplace-template-health-monitoring.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 98 | `.skills/marketplace-template-auto-remediation.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 99 | `.skills/marketplace-template-outcome-intelligence.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 100 | `.skills/marketplace-template-lifecycle-optimization.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 101 | `.skills/marketplace-template-experimentation-system.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 102 | `.skills/marketplace-template-quality-benchmarking.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 103 | `.skills/marketplace-template-certification-program.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 104 | `.skills/marketplace-template-trust-labeling-system.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 105 | `.skills/marketplace-template-migration-portability.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |

### Wave 6 — Marketplace Enterprise Controls

| Order | Skill | Codex Purpose |
|---:|---|---|
| 106 | `.skills/marketplace-enterprise-procurement.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 107 | `.skills/marketplace-enterprise-vendor-management.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 108 | `.skills/marketplace-enterprise-audit-reports.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 109 | `.skills/marketplace-compliance-evidence-center.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 110 | `.skills/marketplace-regulatory-compliance-matrix.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 111 | `.skills/marketplace-data-residency-region-controls.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 112 | `.skills/marketplace-private-catalog-controls.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 113 | `.skills/marketplace-internal-template-governance.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 114 | `.skills/marketplace-sandbox-demo-environments.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |
| 115 | `.skills/marketplace-localization-internationalization.md` | Govern Marketplace behavior, trust, installation, template quality, and enterprise controls. |

### Wave 7 — Enterprise Readiness and Enterprise Customer Success

| Order | Skill | Codex Purpose |
|---:|---|---|
| 116 | `.skills/enterprise-readiness.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 117 | `.skills/enterprise-account-governance.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 118 | `.skills/enterprise-sso-scim-directory-sync.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 119 | `.skills/enterprise-workspace-policy-engine.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 120 | `.skills/enterprise-approval-workflows.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 121 | `.skills/enterprise-implementation-methodology.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 122 | `.skills/enterprise-professional-services-system.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 123 | `.skills/enterprise-customer-training-certification.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 124 | `.skills/enterprise-change-management-system.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 125 | `.skills/enterprise-customer-health-scoring.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 126 | `.skills/enterprise-renewal-expansion-system.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 127 | `.skills/enterprise-adoption-success-insights.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 128 | `.skills/enterprise-executive-business-review.md` | Govern enterprise readiness, account controls, implementation, adoption, renewal, and executive review. |
| 129 | `.skills/trust-center-public-status.md` | Read as supporting contract for product, engineering, business, trust, operations, or GTM behavior. |

### Wave 8 — First UI Mockup and Product Surface Implementation Order

| Order | Skill | Codex Purpose |
|---:|---|---|
| 130 | `.skills/ariyo-landing-page-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 131 | `.skills/ariyo-pricing-page-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 132 | `.skills/ariyo-dashboard-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 133 | `.skills/ariyo-ai-employee-builder-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 134 | `.skills/ariyo-ai-employee-detail-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 135 | `.skills/ariyo-workflow-builder-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 136 | `.skills/ariyo-marketplace-homepage-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 137 | `.skills/ariyo-template-detail-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 138 | `.skills/ariyo-enterprise-admin-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 139 | `.skills/ariyo-trust-center-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 140 | `.skills/ariyo-creator-portal-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 141 | `.skills/ariyo-partner-portal-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 142 | `.skills/ariyo-customer-success-console-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 143 | `.skills/ariyo-internal-ops-command-center-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |
| 144 | `.skills/ariyo-launch-readiness-command-center-mockup-spec.md` | Implement or review the corresponding product surface mockup only after prerequisite foundations are loaded. |

---

## 8. UI Surface Implementation Order

When the user asks to build Ariyo UI, Codex must prioritize surfaces in this order:

1. Public Landing Page
2. Pricing Page
3. App Shell and Main Dashboard
4. AI Employee Builder
5. AI Employee Detail
6. Workflow Builder
7. Marketplace Homepage
8. Template Detail
9. Enterprise Admin
10. Trust Center / Public Status
11. Creator Portal
12. Partner Portal
13. Customer Success Console
14. Internal Ops Command Center
15. Launch Readiness Command Center

This order maximizes narrative clarity, component reuse, investor-demo value, enterprise-demo value, and implementation dependency correctness.

---

## 9. Reusable Component Priority for Codex

Codex must build components in this order before page-specific polishing:

1. App shell
2. Header/nav
3. Sidebar
4. Page container
5. Section header
6. Metric card
7. Status badge
8. Trust label
9. Plan badge
10. Risk badge
11. Data table
12. Filter bar
13. Search input
14. Empty state
15. Loading skeleton
16. Error state
17. Permission denied state
18. Approval queue item
19. Activity timeline
20. Audit log row
21. Cost estimate panel
22. Policy status panel
23. Template card
24. AI Employee card
25. Workflow step card
26. Drawer
27. Modal
28. Toast/notification
29. Form field group
30. Responsive layout wrapper
31. Locale-aware RTL/LTR layout wrapper

Codex must prefer reusable primitives over one-off UI.

---

## 10. Page State Matrix

Every implemented surface must include, where relevant:

| State | Required? | Notes |
|---|---:|---|
| Default populated | Yes | Must show realistic Ariyo data |
| Empty | Yes | Must explain what to do next |
| Loading | Yes | Use skeletons, not full-page spinners for content pages |
| Error | Yes | Must include recovery action |
| Permission denied | Yes for admin/enterprise/governance surfaces | Must be polite and auditable |
| Blocked by policy | Yes for AI/marketplace/enterprise surfaces | Must show reason and owner |
| Approval pending | Yes for governed actions | Must show approver and timeline |
| Cost warning | Yes for AI usage surfaces | Must explain budget impact |
| Region incompatibility | Yes for marketplace/data surfaces | Must show compatible alternatives |
| Success | Yes | Must show next best action |

---

## 11. Ariyo Mock Data Rules

Codex must use realistic but fictional demo data.

Allowed fictional demo entities:

```text
Acme Manufacturing
NovaCare Clinics
BlueRiver Logistics
Atlas Retail Group
Helio Finance Ops
Diba Denim
```

Recommended fictional AI Employee names:

```text
Finance Reconciliation AI Employee
Sales Follow-up AI Employee
Customer Onboarding AI Employee
Content GEO Optimizer AI Employee
Marketplace Template Reviewer AI Employee
Procurement Intake AI Employee
Support Triage AI Employee
```

Do not use real customer private data.

Do not imply certifications, compliance status, uptime, or revenue numbers unless marked as demo data.

---

## 12. Codex Acceptance Gates

Before considering any page or component complete, Codex must verify:

- It follows the relevant skill contract.
- It follows the execution order.
- It uses reusable components.
- It supports desktop, tablet, and mobile layouts.
- It supports RTL and LTR behavior.
- It includes loading, empty, error, and blocked states where relevant.
- It does not rely only on color to communicate status.
- It includes accessible labels and semantic structure.
- It avoids AI gimmicks and visual noise.
- It includes governance cues for sensitive actions.
- It includes realistic demo data.
- It avoids hardcoded copy that conflicts with copywriting rules.
- It does not claim unsupported enterprise readiness.

---

## 13. Codex Branching Strategy

When implementing, Codex should split work into safe branches or commits by surface:

```text
feat/design-system-foundation
feat/public-landing-pricing
feat/app-shell-dashboard
feat/ai-employee-builder
feat/ai-employee-detail
feat/workflow-builder
feat/marketplace-discovery
feat/template-detail-install
feat/enterprise-admin
feat/trust-center
feat/creator-partner-portals
feat/customer-success-console
feat/internal-ops-command-center
feat/launch-readiness-command-center
```

Do not mix unrelated surfaces in one change.

---

## 14. Codex File Reading Protocol

When a task targets a specific file or page, Codex must read:

1. This master prompt.
2. The Master Skill Index.
3. The Mockup Implementation Roadmap.
4. The Product Surface Map.
5. The relevant frontend/design standards.
6. The relevant domain skill.
7. The relevant mockup spec.
8. Nearby files in the repository.

Codex must then produce an execution plan before editing.

---

## 15. Golden Rule

Codex succeeds when Ariyo becomes easier to understand, safer to operate, more credible to enterprise buyers, more consistent across surfaces, easier to maintain, and more ready for real implementation.

Codex fails when it produces attractive but disconnected UI, generic SaaS screens, ungoverned AI flows, marketplace shortcuts, enterprise theater, or locale-broken layouts.
