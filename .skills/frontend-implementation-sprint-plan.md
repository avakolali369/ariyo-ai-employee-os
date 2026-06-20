# Ariyo Frontend Implementation Sprint Plan

## Core Contract

Ariyo Frontend Implementation Sprint Plan is not a generic agile plan, Jira backlog, or UI delivery checklist.

It is the governed frontend execution plan that converts Ariyo's 145-skill operating system, Codex Execution Master Prompt, Figma Design System Brief, Mockup Implementation Roadmap, Product Surface Map, and Mockup Specifications into ordered, dependency-aware, Codex-ready implementation sprints.

Codex and frontend engineers must use this plan to determine what to build first, which skills to read before coding, which components to reuse, which surfaces are blocked, which acceptance gates apply, and how to keep Ariyo enterprise-grade across RTL/LTR, accessibility, security, observability, governance, and product quality.

Ariyo must not be implemented as isolated pages.

Ariyo must be implemented as a coherent product system.

---

## 1. Purpose

This file defines the frontend delivery sequence for Ariyo.

It answers:

- Which Ariyo skills should Codex read before each sprint?
- Which product surfaces should be implemented first?
- Which reusable components must be created before pages?
- Which mockups are allowed to become code?
- Which launch gates must pass before a sprint is considered done?
- Which RTL/LTR, accessibility, governance, and enterprise-readiness rules apply to every sprint?
- How should Codex report progress after each work unit?

This plan exists to prevent four common failures:

1. Building impressive UI before the design system is stable.
2. Building pages before shared app-shell, tables, forms, cards, and state components exist.
3. Building marketplace and enterprise flows without governance, permissions, audit, and trust rules.
4. Allowing Codex to execute files alphabetically instead of by dependency and product value.

---

## 2. Non-Negotiable Implementation Laws

### 2.1 Execution Order Law

Codex must follow this sprint plan and the `codex-execution-master-prompt.md` file.

Codex must not execute files alphabetically.

Codex must not start with a random page just because it is visually attractive.

Codex must execute in this order:

1. Foundation.
2. Design system.
3. App shell.
4. Public surfaces.
5. Main dashboard.
6. AI Employee core.
7. Workflow core.
8. Marketplace core.
9. Enterprise governance.
10. Trust surfaces.
11. Creator/Partner surfaces.
12. Customer Success/Internal Ops.
13. Launch readiness.
14. Hardening.

### 2.2 System-First Law

Codex must build reusable primitives before final surfaces.

A page cannot be considered implemented if it duplicates buttons, cards, tables, forms, tabs, drawers, modals, status badges, permission labels, risk cards, or layout primitives that should be shared.

### 2.3 RTL/LTR Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This applies to:

- Layout direction.
- Text alignment.
- Sidebar placement.
- Breadcrumb direction.
- Table column flow.
- Form label alignment.
- Icon direction.
- Drawer direction.
- Modal content alignment.
- Timeline direction.
- Navigation order.
- Chart labels where applicable.
- Empty states.
- Toasts and notifications.
- Marketplace cards.
- Admin panels.
- Command centers.

No sprint is complete until RTL/LTR behavior is verified.

### 2.4 Enterprise Seriousness Law

Ariyo must not look like:

- A chatbot wrapper.
- A prompt library.
- A casual template gallery.
- A generic automation builder.
- A generic SaaS dashboard.
- A toy AI interface.

Ariyo must look like:

- An AI Employee Operating System.
- A trusted enterprise marketplace.
- A governable operating platform.
- A measurable business-outcome system.
- A serious product for managers, operators, admins, partners, and enterprise buyers.

### 2.5 State Completeness Law

Every implemented surface must include:

- Default state.
- Empty state.
- Loading state.
- Error state.
- Permission-denied state.
- Plan-limited state.
- Suspended/blocked state when relevant.
- Success/confirmation state.
- RTL state.
- Mobile state.

### 2.6 Governance Visibility Law

Every surface that creates, installs, launches, approves, modifies, or escalates AI work must expose:

- Owner.
- Risk level.
- Permissions.
- Auditability.
- Approval status.
- Cost impact where relevant.
- Evidence where relevant.
- Version or change state where relevant.

---

## 3. Required Inputs Before Frontend Execution

Codex must read these files before starting any sprint:

1. `codex-execution-master-prompt.md`
2. `mockup-implementation-roadmap.md`
3. `figma-design-system-brief.md`
4. `master-skill-index-map.md`
5. `product-surface-map.md`
6. `ariyo-core-product-mockup-brief.md`
7. `frontend-design.md`
8. `frontend-components.md`
9. `frontend-responsive.md`
10. `frontend-motion.md`
11. `frontend-copywriting.md`
12. `coding-standards.md`
13. `project-structure.md`
14. `frontend-state-data.md`
15. `frontend-forms-validation.md`
16. `frontend-testing.md`
17. `frontend-performance.md`

Codex must summarize what it learned from these files before generating implementation code.

---

## 4. Sprint Overview

Ariyo frontend implementation should be executed in 14 governed sprints.

| Sprint | Name | Main Output | Dependency Level |
|---|---|---|---|
| 0 | Repository & Execution Setup | Project structure, tooling, routing, base app shell readiness | Critical |
| 1 | Design System Foundation | Tokens, layout primitives, buttons, typography, cards, tables, forms | Critical |
| 2 | Public Conversion Surfaces | Landing page, pricing page, trust cues | High |
| 3 | Product App Shell & Dashboard | Authenticated shell, sidebar, topbar, main dashboard | Critical |
| 4 | AI Employee Builder | AI Employee creation flow, simulation, launch checklist | Critical |
| 5 | AI Employee Detail | AI Employee management, outcomes, memory, tools, governance | Critical |
| 6 | Workflow Builder | Workflow canvas, steps, approvals, simulation, rollout | Critical |
| 7 | Marketplace Discovery | Marketplace homepage, search, filters, recommendation cards | High |
| 8 | Template Detail & Install | Template detail, permissions, eligibility, approval, install states | High |
| 9 | Enterprise Admin | Workspace governance, users, roles, SSO/SCIM, policies, audit | Critical |
| 10 | Trust Center | Public/enterprise trust, compliance evidence, status, data residency | High |
| 11 | Creator & Partner Portals | Creator portal, partner portal, certification, submissions, revenue | Medium |
| 12 | Customer Success & Internal Ops | CS console, ops command center, risk and escalation views | Medium |
| 13 | Launch Readiness | Launch readiness command center, gates, evidence, blockers | High |
| 14 | Hardening & Release Quality | Accessibility, performance, security, tests, observability, docs | Critical |

---

## 5. Sprint 0 — Repository & Execution Setup

### Objective

Prepare the frontend repository so all later implementation can be consistent, typed, testable, and Codex-friendly.

### Required Skills

- `codex-execution-master-prompt.md`
- `mockup-implementation-roadmap.md`
- `project-structure.md`
- `coding-standards.md`
- `frontend-state-data.md`
- `frontend-testing.md`
- `frontend-performance.md`
- `deployment-ops.md`
- `observability-analytics-events.md`

### Deliverables

- Frontend app structure.
- Route structure.
- Environment configuration pattern.
- Shared constants.
- Type definitions.
- Mock data folder.
- Component folder conventions.
- Page folder conventions.
- Feature module conventions.
- Test folder conventions.
- Analytics event naming conventions.
- Error boundary structure.
- Basic i18n/locale direction helper.

### Codex Tasks

1. Create or verify project structure.
2. Add route groups for public, app, marketplace, admin, creator, partner, ops, trust, and launch surfaces.
3. Add design-system folder and component inventory placeholders.
4. Add shared mock data and fixtures.
5. Add locale direction utility:
   - `fa` and `ar` => `rtl`.
   - English and European languages => `ltr`.
6. Add base error boundaries.
7. Add test setup.
8. Add accessibility linting rules where available.

### Acceptance Gate

Sprint 0 passes only if Codex can answer:

- Where do shared components live?
- Where do surfaces live?
- Where do mock data fixtures live?
- How is RTL/LTR detected?
- How are analytics events named?
- How are tests organized?
- How will future sprints avoid duplicate components?

---

## 6. Sprint 1 — Design System Foundation

### Objective

Build the reusable UI system before building final product pages.

### Required Skills

- `figma-design-system-brief.md`
- `frontend-design.md`
- `frontend-components.md`
- `frontend-responsive.md`
- `frontend-motion.md`
- `frontend-copywriting.md`
- `frontend-forms-validation.md`
- `frontend-testing.md`
- `frontend-performance.md`

### Deliverables

#### 6.1 Tokens

- Color tokens.
- Status tokens.
- Risk tokens.
- Trust tokens.
- Spacing tokens.
- Radius tokens.
- Shadow/elevation tokens.
- Typography tokens.
- Motion tokens.
- Layout tokens.
- RTL/LTR spacing aliases.

#### 6.2 Core Components

- Button.
- Icon button.
- Badge.
- Status badge.
- Trust label.
- Risk badge.
- Plan badge.
- Card.
- Metric card.
- Decision card.
- Surface header.
- Page header.
- Section header.
- Tabs.
- Drawer.
- Modal.
- Toast.
- Tooltip.
- Empty state.
- Loading skeleton.
- Error state.
- Permission denied state.
- Plan limit state.

#### 6.3 Form Components

- Text input.
- Textarea.
- Select.
- Multi-select.
- Checkbox.
- Radio group.
- Toggle.
- Date/time input.
- File upload.
- Search input.
- Filter controls.
- Validation message.
- Field group.
- Form footer.

#### 6.4 Data Display Components

- Table.
- Data table with filters.
- List row.
- Timeline.
- Activity feed.
- Audit log row.
- Metric trend.
- Usage meter.
- Progress bar.
- Readiness score.
- Health score.
- Cost meter.

#### 6.5 Navigation Components

- Public header.
- Public footer.
- App shell.
- Sidebar.
- Topbar.
- Breadcrumb.
- Context rail.
- Command palette placeholder.
- Mobile navigation.

### Codex Tasks

1. Implement tokens and theme foundations.
2. Implement primitive components first.
3. Implement composed enterprise components.
4. Implement stories or examples if the repository supports them.
5. Add RTL/LTR variants for navigation, forms, tables, drawers, and cards.
6. Add unit tests for component behavior.
7. Add visual or snapshot tests where practical.

### Acceptance Gate

No page sprint can start until these components exist:

- Button.
- Card.
- Badge.
- Table.
- Form field.
- Modal.
- Drawer.
- Tabs.
- App shell.
- Empty state.
- Loading state.
- Error state.
- RTL/LTR utility.

---

## 7. Sprint 2 — Public Conversion Surfaces

### Objective

Build the first public-facing surfaces that explain Ariyo and support customer, investor, and enterprise buyer understanding.

### Required Skills

- `ariyo-landing-page-mockup-spec.md`
- `ariyo-pricing-page-mockup-spec.md`
- `brand-messaging-system.md`
- `website-conversion-system.md`
- `pricing-packaging-strategy.md`
- `conversion-experimentation-system.md`
- `content-marketing-engine.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`

### Surfaces

1. Landing page.
2. Pricing page.
3. Public trust preview modules.
4. CTA flows.
5. Lead/demo request surface.

### Deliverables

- Landing hero.
- AI Employee OS explanation.
- Product pillars.
- Marketplace preview.
- Enterprise governance preview.
- Use cases.
- Trust cues.
- Pricing cards.
- Basic/Pro/Smart/Enterprise comparison.
- FAQ.
- Demo CTA.
- Contact sales CTA.
- Analytics events.
- SEO/GEO metadata placeholders.

### Codex Tasks

1. Implement public layout.
2. Implement landing page from spec.
3. Implement pricing page from spec.
4. Reuse design-system components.
5. Add localization-ready text structure.
6. Add RTL/LTR variants.
7. Add analytics events for CTA clicks, pricing toggles, FAQ opens, plan comparison interaction, and demo request starts.

### Acceptance Gate

Sprint 2 passes only if:

- Ariyo is clearly positioned as AI Employee Operating System.
- The page does not resemble a chatbot product.
- Pricing explains controlled AI operating capacity.
- Basic/Pro/Smart distinction is understandable.
- Enterprise CTA is serious and procurement-ready.
- RTL/LTR variants work.

---

## 8. Sprint 3 — Product App Shell & Main Dashboard

### Objective

Build the authenticated app foundation and main command dashboard.

### Required Skills

- `ariyo-dashboard-mockup-spec.md`
- `frontend-components.md`
- `frontend-state-data.md`
- `admin-permissions.md`
- `observability-analytics-events.md`
- `operations-command-center.md`

### Surfaces

1. Authenticated app shell.
2. Main dashboard.
3. Quick actions.
4. Activity timeline.
5. Alerts panel.
6. Marketplace suggestions panel.
7. Governance status preview.

### Deliverables

- Sidebar navigation.
- Topbar.
- Workspace switcher placeholder.
- AI Employee overview cards.
- Outcome intelligence cards.
- Workflow status summary.
- Approval queue preview.
- Alerts/risk watch.
- Marketplace recommendations.
- Activity timeline.
- Quick actions.
- Responsive app shell.

### Codex Tasks

1. Implement app shell.
2. Implement dashboard layout.
3. Create dashboard mock data.
4. Create reusable AI Employee card component.
5. Create reusable workflow status component.
6. Create reusable approval queue component.
7. Create reusable alert card component.
8. Add role-based visibility placeholders.
9. Add RTL/LTR app-shell behavior.

### Acceptance Gate

Dashboard must make Ariyo feel like an operating command surface.

It must not feel like:

- A metric-only analytics page.
- A chatbot inbox.
- A task management dashboard.
- A generic SaaS homepage after login.

---

## 9. Sprint 4 — AI Employee Builder

### Objective

Build the primary AI Employee creation flow.

### Required Skills

- `ariyo-ai-employee-builder-mockup-spec.md`
- `ai-employee-architecture.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-safety-evaluation.md`
- `human-review-governance.md`
- `model-provider-strategy.md`
- `ai-cost-control.md`

### Surfaces

1. Builder start.
2. Role definition.
3. Outcome definition.
4. Knowledge/data sources.
5. Tools/integrations.
6. Memory/context.
7. Behavior/tone.
8. Governance/policies.
9. Cost and plan impact.
10. Simulation lab.
11. Review and launch checklist.

### Deliverables

- Builder shell.
- Stepper/wizard.
- Role definition form.
- Outcome definition form.
- Knowledge connector cards.
- Tool selection cards.
- Permission scope matrix.
- Memory configuration.
- Policy/governance panel.
- Cost estimate panel.
- Simulation drawer.
- Review checklist.
- Launch CTA states.

### Codex Tasks

1. Implement builder route.
2. Implement wizard state model.
3. Implement form sections.
4. Implement permission matrix.
5. Implement simulation mock state.
6. Implement blocked/needs-review states.
7. Implement Basic/Pro/Smart feature differences.
8. Implement RTL/LTR variants.

### Acceptance Gate

Builder must not look like a prompt form.

It must clearly show:

- What the AI Employee is responsible for.
- What outcomes it is measured by.
- What knowledge it can access.
- What tools it can use.
- What permissions it has.
- What risks exist.
- What it costs.
- Who must approve it.
- Whether it is ready to launch.

---

## 10. Sprint 5 — AI Employee Detail

### Objective

Build the management surface for a specific AI Employee.

### Required Skills

- `ariyo-ai-employee-detail-mockup-spec.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-incident-response.md`
- `ai-agent-memory-context.md`
- `ai-agent-permissions-runtime.md`
- `product-analytics-growth.md`
- `reliability-sla.md`

### Surfaces

1. AI Employee overview.
2. Outcomes.
3. Runs/activity.
4. Knowledge and memory.
5. Tools and workflows.
6. Permissions and governance.
7. Cost and usage.
8. Versions.
9. Incidents and risk.
10. Audit log.

### Deliverables

- AI Employee detail header.
- Health/outcome/cost/risk summary.
- Tab structure.
- Outcome table.
- Activity timeline.
- Memory panel.
- Tool permission table.
- Cost usage chart placeholder.
- Version history.
- Incident list.
- Audit log.
- Pause/escalate/edit actions.

### Codex Tasks

1. Implement detail route.
2. Implement detail layout.
3. Implement tabs.
4. Implement outcome and activity mock data.
5. Implement audit and incident states.
6. Implement permission-based actions.
7. Implement RTL/LTR variants.

### Acceptance Gate

The AI Employee must feel like an accountable operating unit.

The page must show:

- Health.
- Outcomes.
- Activity.
- Risk.
- Cost.
- Governance.
- Versions.
- Auditability.

---

## 11. Sprint 6 — Workflow Builder

### Objective

Build the workflow creation and orchestration surface.

### Required Skills

- `ariyo-workflow-builder-mockup-spec.md`
- `workflow-automation.md`
- `multi-agent-orchestration-system.md`
- `integration-ecosystem.md`
- `api-contracts.md`
- `human-review-governance.md`
- `feature-flags-rollout-system.md`
- `ai-agent-simulation-sandbox.md`

### Surfaces

1. Workflow canvas.
2. Trigger configuration.
3. Step configuration.
4. AI Employee assignment.
5. Human approval gates.
6. Tool/integration steps.
7. Simulation drawer.
8. Versioning.
9. Error handling.
10. Production rollout.

### Deliverables

- Canvas layout.
- Step cards.
- Trigger card.
- AI Employee assignment selector.
- Human approval gate component.
- Tool step component.
- Simulation drawer.
- Error handling panel.
- Version history panel.
- Launch checklist.

### Codex Tasks

1. Implement workflow builder route.
2. Implement canvas skeleton.
3. Implement step configuration panel.
4. Implement approval gate component.
5. Implement simulation state.
6. Implement rollout states.
7. Add responsive alternatives for non-canvas screen sizes.
8. Add RTL/LTR variants.

### Acceptance Gate

Workflow Builder must not look like a Zapier clone.

It must show AI Employees, humans, tools, approvals, evidence, risk, and outcomes as one coordinated operating system.

---

## 12. Sprint 7 — Marketplace Discovery

### Objective

Build the Marketplace homepage and discovery experience.

### Required Skills

- `ariyo-marketplace-homepage-mockup-spec.md`
- `ai-employee-marketplace.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-merchandising-promotion-system.md`
- `marketplace-search-quality-analytics.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-quality-benchmarking.md`

### Surfaces

1. Marketplace homepage.
2. Search.
3. Category browsing.
4. Filters.
5. Featured collections.
6. Recommended templates.
7. Private catalog.
8. Certified templates.
9. Sponsored/promoted placements.

### Deliverables

- Marketplace shell.
- Search input.
- Filter bar.
- Category chips.
- Template card.
- Trust labels.
- Plan compatibility badge.
- Region compatibility badge.
- Featured collection module.
- Private catalog module.
- Empty search state.

### Codex Tasks

1. Implement marketplace homepage route.
2. Implement search/filter UI.
3. Implement template card variants.
4. Implement featured/recommended/private catalog modules.
5. Implement Basic/Pro/Smart behavior.
6. Implement analytics events.
7. Add RTL/LTR variants.

### Acceptance Gate

Marketplace must feel like a trusted enterprise ecosystem, not a prompt shop.

---

## 13. Sprint 8 — Template Detail & Install

### Objective

Build the decision surface for evaluating and installing Marketplace templates.

### Required Skills

- `ariyo-template-detail-mockup-spec.md`
- `marketplace-installation-entitlements.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-certification-program.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-billing-payouts.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-compliance-evidence-center.md`

### Surfaces

1. Template detail.
2. Trust and compatibility section.
3. Permissions and data access.
4. Pricing/cost impact.
5. Reviews.
6. Dependencies.
7. Demo/sandbox preview.
8. Install eligibility.
9. Approval flow.
10. Installed/update/uninstall states.

### Deliverables

- Template hero.
- Trust label stack.
- Permission risk matrix.
- Dependency list.
- Compatibility panel.
- Region panel.
- Pricing panel.
- Review section.
- Install decision rail.
- Install CTA states.
- Approval request modal.
- Blocked states.

### Codex Tasks

1. Implement template detail route.
2. Implement decision rail.
3. Implement permission and compatibility matrices.
4. Implement install CTA state machine.
5. Implement approval request flow.
6. Implement installed/update/uninstall states.
7. Add analytics events.
8. Add RTL/LTR variants.

### Acceptance Gate

Template Detail must help customers make safe deployment decisions, not just click install.

---

## 14. Sprint 9 — Enterprise Admin

### Objective

Build enterprise governance and organization administration surfaces.

### Required Skills

- `ariyo-enterprise-admin-mockup-spec.md`
- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `admin-permissions.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-audit-reports.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`

### Surfaces

1. Enterprise Admin overview.
2. Organization and workspace governance.
3. Users and roles.
4. SSO/SCIM.
5. Policy engine.
6. Approvals.
7. AI Employee controls.
8. Marketplace controls.
9. Integrations/data access.
10. Data residency.
11. Audit logs.
12. Compliance evidence.
13. Billing and entitlements.

### Deliverables

- Enterprise Admin shell.
- User table.
- Role matrix.
- Policy cards.
- Approval workflow builder/list.
- SSO/SCIM settings panel.
- Marketplace control matrix.
- Data residency selector.
- Audit log table.
- Compliance evidence list.
- Billing entitlement summary.

### Codex Tasks

1. Implement enterprise admin route group.
2. Implement user and role management screens.
3. Implement policy engine UI.
4. Implement approvals UI.
5. Implement SSO/SCIM placeholder UI.
6. Implement marketplace controls.
7. Implement audit/evidence tables.
8. Add RTL/LTR variants.

### Acceptance Gate

If Ariyo cannot be governed from this surface, it is not enterprise-ready.

---

## 15. Sprint 10 — Trust Center

### Objective

Build public and enterprise trust surfaces.

### Required Skills

- `ariyo-trust-center-mockup-spec.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `reliability-sla.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`

### Surfaces

1. Public Trust Center.
2. Public Status.
3. Security posture.
4. Privacy/data governance.
5. Compliance evidence.
6. AI governance.
7. Marketplace trust.
8. Evidence request flow.
9. Enterprise trust portal preview.

### Deliverables

- Trust hero.
- Security section.
- Compliance cards.
- Status component.
- Incident history.
- Evidence request form.
- Policy/legal links.
- Data residency summary.
- AI governance summary.
- Marketplace trust summary.

### Codex Tasks

1. Implement trust center route.
2. Implement public status UI.
3. Implement evidence request flow.
4. Implement compliance cards.
5. Implement incident/status components.
6. Add analytics events.
7. Add RTL/LTR variants.

### Acceptance Gate

Trust Center must make Ariyo credible before a sales call and auditable during procurement.

---

## 16. Sprint 11 — Creator & Partner Portals

### Objective

Build ecosystem operating surfaces for creators and partners.

### Required Skills

- `ariyo-creator-portal-mockup-spec.md`
- `ariyo-partner-portal-mockup-spec.md`
- `marketplace-creator-success-system.md`
- `marketplace-creator-community-program.md`
- `marketplace-partner-operations.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-billing-payouts.md`

### Surfaces

1. Creator Portal overview.
2. Asset library.
3. Create template.
4. Submission wizard.
5. Review status.
6. Quality/trust dashboard.
7. Analytics.
8. Revenue/payouts.
9. Partner Portal overview.
10. Customer deployments.
11. Implementation board.
12. Private catalog requests.
13. Partner certification.
14. Support escalations.

### Deliverables

- Creator shell.
- Asset table.
- Submission wizard.
- Review status tracker.
- Creator analytics cards.
- Revenue/payout summary.
- Partner deployment board.
- Private catalog request list.
- Partner certification panel.
- Support escalation list.

### Codex Tasks

1. Implement creator route group.
2. Implement partner route group.
3. Reuse marketplace and table components.
4. Implement status trackers.
5. Implement revenue/payout placeholders.
6. Implement certification and trust status.
7. Add RTL/LTR variants.

### Acceptance Gate

Creator/Partner surfaces must feel like enterprise ecosystem operations, not seller dashboards.

---

## 17. Sprint 12 — Customer Success & Internal Ops

### Objective

Build internal operating surfaces for customer health and platform operations.

### Required Skills

- `ariyo-customer-success-console-mockup-spec.md`
- `ariyo-internal-ops-command-center-mockup-spec.md`
- `customer-success-playbooks.md`
- `enterprise-customer-health-scoring.md`
- `enterprise-renewal-expansion-system.md`
- `enterprise-adoption-success-insights.md`
- `enterprise-executive-business-review.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`
- `quality-assurance-system.md`
- `marketplace-customer-support-operations.md`

### Surfaces

1. Customer Success Console.
2. Account health.
3. Onboarding progress.
4. Adoption and outcomes.
5. Renewal and expansion.
6. Risk watch.
7. Success playbooks.
8. EBR readiness.
9. Internal Ops Command Center.
10. Incidents.
11. Runtime health.
12. Marketplace health.
13. Support escalations.
14. Trust and safety queues.

### Deliverables

- CS console shell.
- Health scoring table.
- Onboarding progress cards.
- Renewal/expansion pipeline view.
- Risk watch panel.
- Playbook panel.
- EBR readiness panel.
- Ops command dashboard.
- Incident board.
- Queue list.
- Escalation detail drawer.

### Codex Tasks

1. Implement CS console route.
2. Implement internal ops route.
3. Implement account health cards/tables.
4. Implement incident and escalation components.
5. Implement queue triage patterns.
6. Add analytics and audit events.
7. Add RTL/LTR variants.

### Acceptance Gate

These surfaces must convert operational noise into accountable decisions.

---

## 18. Sprint 13 — Launch Readiness

### Objective

Build the command center for launch, pilot, demo, and enterprise readiness decisions.

### Required Skills

- `ariyo-launch-readiness-command-center-mockup-spec.md`
- `platform-launch-readiness-command-center.md`
- `platform-final-readiness-checklist.md`
- `roadmap-execution-plan.md`
- `launch-go-to-market.md`
- `enterprise-readiness.md`
- `investor-fundraising-deck.md`
- `sales-demo-playbook.md`
- `platform-investor-enterprise-narrative.md`

### Surfaces

1. Launch mode selector.
2. Readiness score.
3. Gate board.
4. Blockers.
5. Decision queue.
6. Evidence center.
7. Owner accountability.
8. Timeline.
9. Exportable launch report.

### Deliverables

- Readiness dashboard.
- Gate cards.
- Blocker table.
- Decision queue.
- Evidence list.
- Owner matrix.
- Timeline view.
- Launch report preview.
- Export action placeholder.

### Codex Tasks

1. Implement launch readiness route.
2. Implement readiness scoring UI.
3. Implement gate board.
4. Implement blocker and decision queue.
5. Implement evidence center.
6. Implement export/report preview.
7. Add RTL/LTR variants.

### Acceptance Gate

Every launch risk must have:

- Owner.
- Evidence.
- Decision path.
- Status.
- Next action.

---

## 19. Sprint 14 — Hardening & Release Quality

### Objective

Make Ariyo production-ready across quality, performance, accessibility, security, observability, localization, and maintainability.

### Required Skills

- `frontend-testing.md`
- `frontend-performance.md`
- `frontend-responsive.md`
- `frontend-forms-validation.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `quality-assurance-system.md`
- `deployment-ops.md`

### Deliverables

- Full responsive QA pass.
- RTL/LTR QA pass.
- Accessibility QA pass.
- Performance QA pass.
- Critical user journey tests.
- Error-state tests.
- Permission-state tests.
- Analytics event verification.
- Security/privacy UI check.
- Build/deployment readiness.

### Codex Tasks

1. Add unit tests for reusable components.
2. Add integration tests for key surfaces.
3. Add accessibility checks.
4. Verify loading/empty/error states.
5. Verify RTL/LTR across all surfaces.
6. Verify responsive behavior.
7. Verify analytics event coverage.
8. Verify no duplicate component patterns.
9. Generate final implementation report.

### Acceptance Gate

Ariyo frontend cannot be released until:

- All critical routes load.
- No critical UI state is missing.
- RTL/LTR works.
- Forms validate correctly.
- Tables are accessible.
- Permissions are visible.
- Risk states are visible.
- Audit/evidence states are present.
- Key analytics events are emitted.
- Performance is acceptable.

---

## 20. Complete Frontend Page Implementation Order

Codex must implement product surfaces in this exact order unless a human owner explicitly changes priority.

1. Public layout.
2. Landing page.
3. Pricing page.
4. Authenticated app shell.
5. Main dashboard.
6. AI Employee Builder.
7. AI Employee Detail.
8. Workflow Builder.
9. Marketplace homepage.
10. Template Detail.
11. Enterprise Admin.
12. Trust Center.
13. Creator Portal.
14. Partner Portal.
15. Customer Success Console.
16. Internal Ops Command Center.
17. Launch Readiness Command Center.
18. Hardening pass.

---

## 21. Complete Component Implementation Order

Codex must implement shared components in this order.

1. Tokens and theme.
2. Typography.
3. Layout primitives.
4. Button.
5. Badge/status/risk/trust labels.
6. Card.
7. Metric card.
8. Form field.
9. Search/filter controls.
10. Table.
11. Tabs.
12. Modal.
13. Drawer.
14. Toast.
15. Empty/loading/error states.
16. App shell.
17. Sidebar/topbar.
18. Breadcrumb.
19. Context rail.
20. AI Employee card.
21. Outcome card.
22. Workflow step card.
23. Approval queue component.
24. Permission matrix.
25. Trust label stack.
26. Template card.
27. Readiness score.
28. Health score.
29. Audit log row.
30. Incident card.
31. Timeline.
32. Evidence card.
33. Cost usage meter.
34. Plan comparison table.
35. RTL/LTR variants for all directional components.

---

## 22. Mock Data Implementation Order

Mock data must be created before final pages so Codex can build realistic states.

1. Users and roles.
2. Workspaces.
3. Plans: Basic, Pro, Smart, Enterprise.
4. AI Employees.
5. AI Employee outcomes.
6. AI Employee runs/activity.
7. AI Employee memory sources.
8. Tools/integrations.
9. Workflows.
10. Workflow steps.
11. Approvals.
12. Incidents.
13. Alerts.
14. Marketplace templates.
15. Trust labels.
16. Template reviews.
17. Template dependencies.
18. Template permissions.
19. Creator assets.
20. Partner deployments.
21. Customer accounts.
22. Health scores.
23. Support escalations.
24. Launch gates.
25. Evidence items.
26. Pricing plans.
27. Usage/cost summaries.

Mock data must include both safe and risky scenarios.

---

## 23. Codex Work Unit Output Format

After each work unit, Codex must report:

```markdown
## Work Unit Report

### Implemented
- ...

### Files Changed
- ...

### Skills Used
- ...

### Components Reused
- ...

### New Components Added
- ...

### States Covered
- Default
- Empty
- Loading
- Error
- Permission denied
- Plan limited
- RTL
- Mobile

### Risks / Open Questions
- ...

### Tests Added or Needed
- ...

### Next Recommended Work Unit
- ...
```

Codex must not omit `Skills Used`.

Codex must not omit RTL/LTR coverage.

Codex must not claim completion if only happy-path UI is implemented.

---

## 24. Sprint Definition of Done

A sprint is done only if all of the following are true:

- Required skills were read.
- All sprint deliverables were implemented or explicitly marked out of scope.
- Shared components were reused.
- No duplicate component patterns were created without reason.
- All required page states exist.
- RTL/LTR works.
- Mobile layout works.
- Accessibility basics are satisfied.
- Permission and plan states are visible.
- Analytics events are named.
- Tests are added or documented.
- Known risks are documented.
- Next sprint dependencies are clear.

---

## 25. Global Acceptance Gates

### Product Gate

Does this surface make Ariyo feel like an AI Employee Operating System?

### Enterprise Gate

Can an enterprise admin, security reviewer, or procurement stakeholder trust this surface?

### Marketplace Gate

Does this surface help safe discovery, evaluation, installation, or management of templates?

### Governance Gate

Are permissions, approvals, evidence, owners, audit, and risk visible where relevant?

### Cost Gate

Is usage or cost impact visible where relevant?

### Localization Gate

Does the surface correctly support Persian/Arabic RTL and English/European LTR?

### Reuse Gate

Did the implementation reuse the design system instead of inventing page-specific UI?

### State Gate

Are default, empty, loading, error, permission, plan-limited, blocked, RTL, and mobile states covered?

---

## 26. Forbidden Frontend Execution Patterns

Codex must not:

- Build pages before shared components.
- Build final UI before reading the relevant mockup spec.
- Ignore `codex-execution-master-prompt.md`.
- Ignore `mockup-implementation-roadmap.md`.
- Ignore `figma-design-system-brief.md`.
- Use alphabetical skill order.
- Hard-code LTR assumptions.
- Build Persian or Arabic UI as left-aligned.
- Build English or European UI as right-aligned.
- Hide governance states in advanced settings only.
- Treat permission and risk states as optional.
- Build only happy-path flows.
- Use dummy lorem ipsum where product-specific copy is required.
- Create duplicate components without checking the design system.
- Make Ariyo look like a chatbot wrapper.
- Make Marketplace look like a prompt library.
- Make Enterprise Admin look like a generic settings page.
- Treat Trust Center as marketing fluff.

---

## 27. Recommended Branching Strategy

Use one branch per sprint or surface group.

Suggested branch names:

- `sprint-00-repo-foundation`
- `sprint-01-design-system`
- `sprint-02-public-surfaces`
- `sprint-03-dashboard-shell`
- `sprint-04-ai-employee-builder`
- `sprint-05-ai-employee-detail`
- `sprint-06-workflow-builder`
- `sprint-07-marketplace-discovery`
- `sprint-08-template-detail-install`
- `sprint-09-enterprise-admin`
- `sprint-10-trust-center`
- `sprint-11-creator-partner-portals`
- `sprint-12-cs-ops-consoles`
- `sprint-13-launch-readiness`
- `sprint-14-hardening-release`

Each pull request must include:

- Skills used.
- Screens implemented.
- Components reused.
- RTL/LTR status.
- Accessibility notes.
- Test status.
- Known limitations.

---

## 28. Minimum Viable Frontend Cut

The MVP frontend cut includes:

1. Landing page.
2. Pricing page.
3. App shell.
4. Dashboard.
5. AI Employee Builder.
6. AI Employee Detail.
7. Workflow Builder basic mode.
8. Marketplace homepage basic mode.
9. Template detail/install decision basic mode.
10. Enterprise Admin overview.
11. Trust Center public page.
12. Launch Readiness Command Center.

Everything else can be phased after MVP if needed.

---

## 29. Investor Demo Cut

The investor demo cut includes:

1. Landing page.
2. Pricing narrative.
3. Dashboard.
4. AI Employee Builder.
5. AI Employee Detail.
6. Workflow Builder.
7. Marketplace homepage.
8. Template Detail.
9. Enterprise Admin overview.
10. Trust Center.
11. Launch Readiness Command Center.

Investor demo must emphasize:

- Category creation.
- AI Employee OS.
- Marketplace ecosystem.
- Enterprise governance.
- Monetization paths.
- Trust and compliance.
- Launch readiness.

---

## 30. Enterprise Sales Demo Cut

The enterprise sales demo cut includes:

1. Dashboard.
2. AI Employee Builder with governance.
3. AI Employee Detail with audit.
4. Workflow Builder with approvals.
5. Marketplace Template Detail with permissions.
6. Enterprise Admin.
7. Trust Center.
8. Customer Success Console.
9. Launch Readiness Command Center.

Enterprise demo must emphasize:

- Control.
- Governance.
- Security.
- Compliance.
- Auditability.
- Cost visibility.
- Role-based access.
- Data residency.
- Approval workflows.

---

## 31. Marketplace Alpha Cut

The marketplace alpha cut includes:

1. Marketplace homepage.
2. Search and filters.
3. Template cards.
4. Template Detail.
5. Install eligibility.
6. Permission matrix.
7. Trust labels.
8. Creator Portal asset library.
9. Submission wizard.
10. Basic Creator analytics.

Marketplace alpha must emphasize:

- Safe discovery.
- Trust signals.
- Compatibility.
- Controlled installation.
- Creator quality.
- Enterprise readiness.

---

## 32. Golden Rule

Frontend implementation must make Ariyo feel inevitable, governable, useful, serious, and scalable.

Codex must implement Ariyo as an operating platform, not as a collection of screens.

Every sprint must move Ariyo closer to a product that can be designed, demoed, sold, governed, launched, and trusted.
