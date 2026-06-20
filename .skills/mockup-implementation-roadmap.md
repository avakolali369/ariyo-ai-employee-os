# Ariyo Mockup Implementation Roadmap

## Core Contract

Ariyo Mockup Implementation Roadmap is not a design wishlist, task list, or Figma checklist.

It is the governed execution roadmap that tells Codex, frontend engineers, product designers, product owners, and AI-assisted builders the exact order in which Ariyo skills and mockup specifications must be read, interpreted, implemented, reused, validated, and converted into production-ready product surfaces.

Codex must not execute Ariyo skills alphabetically. Codex must execute them according to dependency, product surface priority, enterprise readiness, component reuse, governance risk, and demo value.

## Non-Negotiable Global Layout Law

- Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.
- English and European LTR interfaces must be LTR and left-aligned across all UI elements.
- This law applies to public pages, dashboards, admin consoles, marketplace flows, creator/partner portals, notifications, reports, modals, tables, sidebars, cards, forms, charts, empty states, error states, and every mockup handoff.
- If a component is reused across locales, it must support direction-aware spacing, icon order, table alignment, breadcrumb order, form label alignment, navigation placement, and reading flow.

## Codex Execution Protocol

Codex must follow this protocol before changing any Ariyo UI, frontend route, component, schema, API contract, or mockup implementation:

1. Load this roadmap first.
2. Load `master-skill-index-map.md` to understand the global skill map.
3. Load `product-surface-map.md` to understand which surface is being implemented.
4. Load the relevant mockup spec for the surface.
5. Load the foundational frontend skills before writing UI code.
6. Load backend/API/domain skills before wiring live data.
7. Load governance, privacy, security, and enterprise skills before exposing admin, approval, marketplace, or AI Employee controls.
8. Implement smallest useful product slice first, then expand states, roles, integrations, analytics, and compliance layers.
9. Validate RTL/LTR behavior before declaring any screen complete.
10. Produce an implementation note listing which skills were used and which gates passed.

## Codex Stop Rules

Codex must stop or request a product decision when any of the following occurs:

- A UI surface requires a permission model not defined in the loaded skills.
- A workflow performs irreversible or high-risk actions without approval gates.
- Marketplace install, template publishing, billing, payout, procurement, or enterprise policy behavior is ambiguous.
- A screen contains English-only layout assumptions that break Persian/Farsi or Arabic RTL.
- A mockup introduces ungrounded claims about security, compliance, AI accuracy, automation success, certification, uptime, or ROI.
- A feature bypasses audit logs, evidence collection, owner assignment, or rollback/versioning expectations.

## Execution Waves

The following waves define the practical implementation order for Codex. Each wave can produce branches, tickets, Figma frames, reusable components, frontend routes, backend contracts, or test plans.

### Wave 0 — Readiness and Governance Setup

Goal: make Codex understand Ariyo before implementation starts.

- Read global maps and product contracts.
- Confirm the target product surface and route group.
- Identify whether the work is public website, app shell, AI Employee, marketplace, enterprise admin, creator/partner, customer success, or internal ops.
- Confirm localization direction: RTL for Persian/Farsi and Arabic; LTR for English and European languages.

### Wave 1 — Design System and App Shell

Goal: create the reusable base before individual screens.

- Tokens: spacing, radius, typography, elevation, density, status colors, semantic intent, and responsive behavior.
- Layout primitives: shell, sidebar, topbar, container, grid, card, table, tabs, drawer, modal, command bar, page header, section header.
- Direction-aware utilities: `dir`, logical CSS properties, icon mirroring, table alignment, breadcrumbs, form label alignment, menu placement, chart legends.
- Accessibility primitives: keyboard flow, focus states, landmark roles, aria labels, reduced motion, readable contrast.

### Wave 2 — Public Conversion Surfaces

Goal: validate positioning, pricing, trust, and conversion before deep product build.

Implementation order:
1. `ariyo-landing-page-mockup-spec.md`
2. `ariyo-pricing-page-mockup-spec.md`
3. `ariyo-trust-center-mockup-spec.md`

### Wave 3 — Core Product Surfaces

Goal: implement the product experience that proves Ariyo is an AI Employee Operating System.

Implementation order:
1. `ariyo-dashboard-mockup-spec.md`
2. `ariyo-ai-employee-builder-mockup-spec.md`
3. `ariyo-ai-employee-detail-mockup-spec.md`
4. `ariyo-workflow-builder-mockup-spec.md`

### Wave 4 — Marketplace Surfaces

Goal: implement trusted discovery, evaluation, installation, creator supply, and partner operations.

Implementation order:
1. `ariyo-marketplace-homepage-mockup-spec.md`
2. `ariyo-template-detail-mockup-spec.md`
3. `ariyo-creator-portal-mockup-spec.md`
4. `ariyo-partner-portal-mockup-spec.md`

### Wave 5 — Enterprise and Internal Operating Surfaces

Goal: make Ariyo governable, supportable, auditable, and launch-ready.

Implementation order:
1. `ariyo-enterprise-admin-mockup-spec.md`
2. `ariyo-customer-success-console-mockup-spec.md`
3. `ariyo-internal-ops-command-center-mockup-spec.md`
4. `ariyo-launch-readiness-command-center-mockup-spec.md`

## Cross-Surface Component Reuse Order

Codex must implement reusable components in this order before duplicating screen-specific UI:

1. App shell and route layout.
2. Header/topbar/sidebar/navigation primitives.
3. Page header and breadcrumb system.
4. Metric cards and KPI rows.
5. Status badges and trust labels.
6. Risk/health/readiness score cards.
7. Data table with filters, sorting, pagination, empty/error states, and RTL/LTR support.
8. Command bar and primary/secondary CTA pattern.
9. Drawer, modal, confirmation dialog, and side panel patterns.
10. Tabs and segmented controls.
11. Timeline and activity feed.
12. Approval queue components.
13. Evidence center components.
14. Policy/rule cards.
15. Install/launch/readiness checklist components.
16. Template/AI Employee cards.
17. Pricing and plan comparison components.
18. Analytics event wrappers.
19. Audit log viewer.
20. Responsive mobile page shell.

## Surface Implementation Routes

| Surface | Suggested Route | Role | Primary Spec |
|---|---:|---|---|
| Landing Page | `/` or `/home` | Public conversion | `ariyo-landing-page-mockup-spec.md` |
| Pricing | `/pricing` | Public conversion and sales-assisted pricing | `ariyo-pricing-page-mockup-spec.md` |
| Trust Center | `/trust` and `/status` | Public trust and enterprise procurement | `ariyo-trust-center-mockup-spec.md` |
| Dashboard | `/app` or `/app/dashboard` | Customer command center | `ariyo-dashboard-mockup-spec.md` |
| AI Employee Builder | `/app/ai-employees/new` | AI Employee creation | `ariyo-ai-employee-builder-mockup-spec.md` |
| AI Employee Detail | `/app/ai-employees/:id` | AI Employee operations | `ariyo-ai-employee-detail-mockup-spec.md` |
| Workflow Builder | `/app/workflows/:id/builder` | AI + human workflow design | `ariyo-workflow-builder-mockup-spec.md` |
| Marketplace Home | `/app/marketplace` | Template discovery | `ariyo-marketplace-homepage-mockup-spec.md` |
| Template Detail | `/app/marketplace/templates/:id` | Install decision | `ariyo-template-detail-mockup-spec.md` |
| Enterprise Admin | `/app/admin` | Governance and enterprise controls | `ariyo-enterprise-admin-mockup-spec.md` |
| Creator Portal | `/creator` or `/app/creator` | Template supply and creator operations | `ariyo-creator-portal-mockup-spec.md` |
| Partner Portal | `/partner` or `/app/partner` | Implementation partner operations | `ariyo-partner-portal-mockup-spec.md` |
| Customer Success Console | `/internal/customer-success` | CSM operations | `ariyo-customer-success-console-mockup-spec.md` |
| Internal Ops Command Center | `/internal/ops` | Operational command center | `ariyo-internal-ops-command-center-mockup-spec.md` |
| Launch Readiness | `/internal/launch-readiness` | Launch gates and evidence | `ariyo-launch-readiness-command-center-mockup-spec.md` |

## Complete Skill Execution Order for Codex

This is the canonical execution order. Codex must use this order when bootstrapping the Ariyo project, generating tickets, planning branches, building mockups, or mapping feature dependencies.

### 00 Codex Governance & Master Maps

1. `.skills/business-context.md`
2. `.skills/master-skill-index-map.md`
3. `.skills/product-surface-map.md`
4. `.skills/ariyo-core-product-mockup-brief.md`
5. `.skills/mockup-implementation-roadmap.md`
6. `.skills/product-strategy.md`
7. `.skills/product-requirements-mvp.md`
8. `.skills/roadmap-execution-plan.md`
9. `.skills/platform-operating-model.md`
10. `.skills/platform-investor-enterprise-narrative.md`
11. `.skills/platform-final-readiness-checklist.md`
12. `.skills/platform-launch-readiness-command-center.md`

### 01 Frontend Foundation & Design System

13. `.skills/project-structure.md`
14. `.skills/coding-standards.md`
15. `.skills/frontend-design.md`
16. `.skills/frontend-components.md`
17. `.skills/frontend-responsive.md`
18. `.skills/frontend-motion.md`
19. `.skills/frontend-copywriting.md`
20. `.skills/frontend-state-data.md`
21. `.skills/frontend-forms-validation.md`
22. `.skills/frontend-testing.md`
23. `.skills/frontend-performance.md`

### 02 Product Domain, API & Backend Foundation

24. `.skills/domain-model.md`
25. `.skills/api-contracts.md`
26. `.skills/backend-architecture.md`
27. `.skills/knowledge-rag.md`
28. `.skills/workflow-automation.md`
29. `.skills/integration-ecosystem.md`
30. `.skills/deployment-ops.md`

### 03 AI Employee Core Runtime

31. `.skills/ai-employee-architecture.md`
32. `.skills/prompt-tool-orchestration.md`
33. `.skills/model-provider-strategy.md`
34. `.skills/ai-cost-control.md`
35. `.skills/ai-agent-permissions-runtime.md`
36. `.skills/ai-agent-memory-context.md`
37. `.skills/multi-agent-orchestration-system.md`
38. `.skills/agent-team-templates.md`
39. `.skills/ai-agent-simulation-sandbox.md`
40. `.skills/ai-agent-evaluation-benchmarking.md`
41. `.skills/ai-agent-observability-tracing.md`
42. `.skills/ai-agent-versioning-change-management.md`
43. `.skills/ai-agent-incident-response.md`

### 04 Safety, Governance, Privacy & Risk

44. `.skills/ai-safety-evaluation.md`
45. `.skills/human-review-governance.md`
46. `.skills/admin-permissions.md`
47. `.skills/quality-assurance-system.md`
48. `.skills/data-governance-privacy.md`
49. `.skills/security-threat-model.md`
50. `.skills/compliance-legal-risk.md`
51. `.skills/enterprise-readiness.md`
52. `.skills/legal-pages-policy-system.md`
53. `.skills/trust-center-public-status.md`
54. `.skills/reliability-sla.md`
55. `.skills/observability-analytics-events.md`
56. `.skills/feature-flags-rollout-system.md`

### 05 Monetization, Growth, Sales & Finance

57. `.skills/pricing-packaging-strategy.md`
58. `.skills/monetization-billing.md`
59. `.skills/product-analytics-growth.md`
60. `.skills/website-conversion-system.md`
61. `.skills/conversion-experimentation-system.md`
62. `.skills/sales-crm-pipeline-system.md`
63. `.skills/revenue-operations-system.md`
64. `.skills/finance-accounting-controls.md`
65. `.skills/brand-messaging-system.md`
66. `.skills/content-marketing-engine.md`
67. `.skills/community-partner-growth.md`
68. `.skills/launch-go-to-market.md`
69. `.skills/sales-demo-playbook.md`
70. `.skills/investor-fundraising-deck.md`

### 06 Customer Lifecycle, Support & Education

71. `.skills/onboarding-activation.md`
72. `.skills/customer-lifecycle-automation.md`
73. `.skills/customer-success-playbooks.md`
74. `.skills/customer-education-academy.md`
75. `.skills/knowledge-base-support-system.md`

### 07 Marketplace Core Economy & Template Supply

76. `.skills/ai-employee-marketplace.md`
77. `.skills/ecosystem-marketplace-economy.md`
78. `.skills/agent-marketplace-template-builder.md`
79. `.skills/ai-agent-template-review-governance.md`
80. `.skills/template-quality-ranking-system.md`
81. `.skills/marketplace-search-recommendation-engine.md`
82. `.skills/marketplace-installation-entitlements.md`
83. `.skills/marketplace-billing-payouts.md`
84. `.skills/marketplace-dispute-resolution.md`
85. `.skills/marketplace-trust-safety-operations.md`
86. `.skills/marketplace-policy-enforcement-rules.md`
87. `.skills/marketplace-creator-success-system.md`
88. `.skills/marketplace-partner-operations.md`

### 08 Marketplace Enterprise Controls & Compliance

89. `.skills/marketplace-enterprise-procurement.md`
90. `.skills/marketplace-enterprise-vendor-management.md`
91. `.skills/marketplace-enterprise-audit-reports.md`
92. `.skills/marketplace-compliance-evidence-center.md`
93. `.skills/marketplace-regulatory-compliance-matrix.md`
94. `.skills/marketplace-data-residency-region-controls.md`
95. `.skills/marketplace-private-catalog-controls.md`
96. `.skills/marketplace-internal-template-governance.md`
97. `.skills/marketplace-template-migration-portability.md`
98. `.skills/marketplace-template-dependency-registry.md`

### 09 Marketplace Quality, Health & Intelligence

99. `.skills/marketplace-template-health-monitoring.md`
100. `.skills/marketplace-template-auto-remediation.md`
101. `.skills/marketplace-template-outcome-intelligence.md`
102. `.skills/marketplace-template-lifecycle-optimization.md`
103. `.skills/marketplace-template-experimentation-system.md`
104. `.skills/marketplace-template-quality-benchmarking.md`
105. `.skills/marketplace-template-certification-program.md`
106. `.skills/marketplace-template-trust-labeling-system.md`
107. `.skills/marketplace-customer-review-reputation-system.md`
108. `.skills/marketplace-merchandising-promotion-system.md`
109. `.skills/marketplace-search-quality-analytics.md`
110. `.skills/marketplace-creator-community-program.md`
111. `.skills/marketplace-customer-support-operations.md`
112. `.skills/marketplace-sandbox-demo-environments.md`
113. `.skills/marketplace-localization-internationalization.md`
114. `.skills/marketplace-notification-communication-system.md`

### 10 Enterprise Account Governance & Success

115. `.skills/enterprise-account-governance.md`
116. `.skills/enterprise-sso-scim-directory-sync.md`
117. `.skills/enterprise-workspace-policy-engine.md`
118. `.skills/enterprise-approval-workflows.md`
119. `.skills/enterprise-implementation-methodology.md`
120. `.skills/enterprise-professional-services-system.md`
121. `.skills/enterprise-customer-training-certification.md`
122. `.skills/enterprise-change-management-system.md`
123. `.skills/enterprise-customer-health-scoring.md`
124. `.skills/enterprise-renewal-expansion-system.md`
125. `.skills/enterprise-adoption-success-insights.md`
126. `.skills/enterprise-executive-business-review.md`

### 11 Internal Operations & Backoffice

127. `.skills/operations-command-center.md`
128. `.skills/internal-admin-backoffice.md`

### 12 Mockup Specs: Public, App, Marketplace, Enterprise & Ops

129. `.skills/ariyo-landing-page-mockup-spec.md`
130. `.skills/ariyo-pricing-page-mockup-spec.md`
131. `.skills/ariyo-dashboard-mockup-spec.md`
132. `.skills/ariyo-ai-employee-builder-mockup-spec.md`
133. `.skills/ariyo-ai-employee-detail-mockup-spec.md`
134. `.skills/ariyo-workflow-builder-mockup-spec.md`
135. `.skills/ariyo-marketplace-homepage-mockup-spec.md`
136. `.skills/ariyo-template-detail-mockup-spec.md`
137. `.skills/ariyo-enterprise-admin-mockup-spec.md`
138. `.skills/ariyo-trust-center-mockup-spec.md`
139. `.skills/ariyo-creator-portal-mockup-spec.md`
140. `.skills/ariyo-partner-portal-mockup-spec.md`
141. `.skills/ariyo-customer-success-console-mockup-spec.md`
142. `.skills/ariyo-internal-ops-command-center-mockup-spec.md`
143. `.skills/ariyo-launch-readiness-command-center-mockup-spec.md`

## Codex Branching Strategy

Codex should avoid one giant implementation branch. Use this branch sequence:

- `phase-00-skill-loader` — Load maps, route conventions, and global RTL/LTR law.
- `phase-01-design-system` — Create reusable design system, app shell, localization primitives, and shared states.
- `phase-02-public-surfaces` — Build landing, pricing, and trust center mockups.
- `phase-03-core-app` — Build dashboard, AI Employee builder/detail, and workflow builder.
- `phase-04-marketplace` — Build marketplace homepage, template detail, creator portal, and partner portal.
- `phase-05-enterprise-ops` — Build enterprise admin, customer success, internal ops, and launch readiness.
- `phase-06-data-wiring` — Connect routes to API contracts, mock data, events, and state models.
- `phase-07-hardening` — Add testing, accessibility, responsive, performance, audit, security, localization, and readiness gates.

## Mock Data Implementation Order

1. Organization, workspace, user, role, and permission fixtures.
2. AI Employee fixtures: role, status, health, outcomes, tools, memory, versions, incidents, costs.
3. Workflow fixtures: triggers, steps, approvals, errors, simulations, versions, rollout state.
4. Marketplace fixtures: templates, creators, trust labels, reviews, pricing, regions, dependencies, install eligibility.
5. Enterprise admin fixtures: policies, SSO/SCIM state, approvals, audit logs, compliance evidence, data residency.
6. Customer success fixtures: accounts, health score, adoption, onboarding, renewal, expansion, risk, playbooks.
7. Internal ops fixtures: incidents, queues, escalations, runtime health, marketplace health, blockers, launch gates.
8. Public fixtures: pricing tiers, FAQs, trust posture, public status, case proof, landing page claims.

## Definition of Done for Any Mockup Implementation

- [ ] The surface maps to one and only one primary mockup spec.
- [ ] The page uses shared design-system components instead of one-off UI wherever possible.
- [ ] The UI includes empty, loading, error, blocked, permission-denied, and success states when relevant.
- [ ] The UI has Basic, Pro, Smart, and Enterprise behavior where the source skill requires it.
- [ ] All navigation, forms, tables, cards, tabs, drawers, modals, tooltips, and CTAs support RTL for Persian/Farsi and Arabic and LTR for English/European languages.
- [ ] High-risk actions have confirmation, approval, owner, evidence, audit, or rollback patterns.
- [ ] Analytics events are named and placed at meaningful decision points.
- [ ] Security, privacy, compliance, and governance claims are grounded in the relevant skills.
- [ ] The surface can be shown in investor demo, enterprise sales demo, or internal readiness review without contradicting Ariyo positioning.
- [ ] Codex outputs a final implementation note listing files changed, skills used, open risks, and next recommended branch.

## RTL/LTR Implementation Checklist

- [ ] Use `dir="rtl"` for Persian/Farsi and Arabic root surfaces or localized containers.
- [ ] Use `dir="ltr"` for English and European language surfaces.
- [ ] Prefer logical CSS properties: `margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `border-inline-end`.
- [ ] Mirror directional icons, chevrons, arrows, progress flows, side panels, drawers, breadcrumbs, and navigation order.
- [ ] Right-align Arabic/Persian labels, values, table headers, table cells, form labels, helper text, and card content unless numeric/accounting data requires locale-specific handling.
- [ ] Left-align English/European UI text, labels, values, cards, tables, forms, and navigation content.
- [ ] Place primary reading flow and hierarchy according to language direction.
- [ ] Test responsive mobile layouts separately for RTL and LTR.

## Product Risk Gates

| Risk Area | Required Gate |
|---|---|
| AI Employee creation | Requires simulation, review, permission scope, cost estimate, and launch checklist. |
| Workflow launch | Requires trigger validation, approval gates, error handling, versioning, and rollback. |
| Marketplace install | Requires trust labels, install eligibility, permissions, dependencies, region compatibility, and approval path. |
| Enterprise admin changes | Requires audit log, owner, policy impact preview, and confirmation. |
| Pricing and billing | Requires plan boundaries, usage disclosure, AI cost messaging, and upgrade/downgrade states. |
| Trust/compliance claims | Requires evidence, source owner, timestamp, and no unverified certification claims. |
| Internal ops actions | Requires owner, escalation path, evidence trail, and status history. |

## Acceptance Output Format for Codex

After implementing any surface, Codex should return this short implementation report:

```text
Surface implemented: <surface name>
Primary mockup spec used: <file>
Supporting skills loaded: <files>
Routes changed: <routes>
Components created/reused: <components>
Mock data added: <fixtures>
RTL/LTR status: passed / needs review
Accessibility status: passed / needs review
Governance gates: passed / needs decision
Known gaps: <gaps>
Next branch: <branch>
```

## Golden Rule

Codex must build Ariyo as an operating system for accountable AI Employees, not as a collection of disconnected pages. Every screen must clarify who owns the work, what the AI Employee is doing, what business outcome is expected, what evidence supports the decision, what governance applies, what risk exists, and what the user should do next.
