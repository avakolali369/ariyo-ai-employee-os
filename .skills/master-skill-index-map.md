# Ariyo Master Skill Index & Execution Map

## Core Contract

Ariyo Master Skill Index & Execution Map is not a directory of Markdown files.

It is the governing map that connects every Ariyo skill to product strategy, product surfaces, engineering domains, AI Employee operations, Marketplace systems, Enterprise governance, Customer Success, Revenue Operations, Trust & Safety, and launch execution.

Ariyo must use this map to prevent disconnected execution. Every mockup, code task, product decision, sales narrative, enterprise workflow, marketplace feature, and launch gate should know which skills it depends on and which skills constrain it.

## Scope

This index maps **124 core Ariyo skills** currently present in `.skills/`.

This file is a meta-skill: it does not replace any skill. It tells humans and AI coding agents when to use each skill, how skills depend on each other, and how to sequence product execution.

## How to Use This Map

- Use this file before creating mockups, building features, writing specs, planning sprints, preparing investor material, or setting launch gates.
- For UI work, pair this file with the next recommended file: `product-surface-map.md`.
- For implementation work, load the relevant domain skill plus its upstream governance, security, data, and observability skills.
- For product prioritization, use the MVP / Demo / Marketplace Alpha / Enterprise Alpha cuts below.
- For enterprise readiness, do not rely only on product skills; also load security, privacy, compliance, admin, audit, support, and customer success skills.

## Strategic Phase Map

| Phase | Name | Purpose | Anchor Skills |
| --- | --- | --- | --- |
| Phase 0 | Strategic Definition | Define why Ariyo exists, who buys it, what the product category is, and how it is positioned. | business-context.md, product-strategy.md, brand-messaging-system.md, product-requirements-mvp.md |
| Phase 1 | Product & UI Foundation | Create the first believable product experience, visual system, responsive behavior, frontend standards, and component language. | frontend-design.md, frontend-components.md, frontend-responsive.md, frontend-copywriting.md, frontend-state-data.md |
| Phase 2 | Core Platform Architecture | Define domain, API, backend, RAG, workflow automation, deployment, quality, reliability, and observability foundations. | domain-model.md, api-contracts.md, backend-architecture.md, knowledge-rag.md, workflow-automation.md |
| Phase 3 | AI Employee Runtime | Build the AI Employee operating layer: agents, permissions, memory, model strategy, safety, evaluation, simulation, observability, incident response, and versioning. | ai-employee-architecture.md, ai-agent-permissions-runtime.md, ai-agent-memory-context.md, ai-agent-evaluation-benchmarking.md |
| Phase 4 | Marketplace Foundation | Turn AI Employees, templates, integrations, knowledge packs, and agent teams into a governed marketplace economy. | ai-employee-marketplace.md, agent-marketplace-template-builder.md, ecosystem-marketplace-economy.md, monetization-billing.md |
| Phase 5 | Marketplace Trust, Governance & Commerce | Control review, ranking, discovery, installation, billing, payouts, disputes, enforcement, trust labels, and certification. | ai-agent-template-review-governance.md, template-quality-ranking-system.md, marketplace-installation-entitlements.md, marketplace-billing-payouts.md |
| Phase 6 | Enterprise Marketplace Controls | Support procurement, vendor management, audit reports, compliance evidence, data residency, private catalogs, and internal templates. | marketplace-enterprise-procurement.md, marketplace-enterprise-vendor-management.md, marketplace-compliance-evidence-center.md |
| Phase 7 | Marketplace Operations & Growth | Operate support, demo environments, localization, notifications, search quality, creator success, partner operations, and community growth. | marketplace-customer-support-operations.md, marketplace-sandbox-demo-environments.md, marketplace-localization-internationalization.md |
| Phase 8 | Enterprise Governance & Delivery | Give enterprise customers account structure, SSO/SCIM, policy engine, approvals, implementation methodology, training, change management, health scoring, renewals, and EBRs. | enterprise-account-governance.md, enterprise-sso-scim-directory-sync.md, enterprise-workspace-policy-engine.md, enterprise-implementation-methodology.md |
| Phase 9 | Final Launch & Company Operating Model | Align readiness gates, company operating model, investor/enterprise narrative, launch command center, rollback, and post-launch monitoring. | platform-final-readiness-checklist.md, platform-operating-model.md, platform-launch-readiness-command-center.md |

## Domain Index

### 01. Business, Product Strategy & Market Narrative — 15 skills

1. `.skills/business-context.md`
2. `.skills/product-strategy.md`
3. `.skills/product-requirements-mvp.md`
4. `.skills/roadmap-execution-plan.md`
5. `.skills/brand-messaging-system.md`
6. `.skills/content-marketing-engine.md`
7. `.skills/community-partner-growth.md`
8. `.skills/launch-go-to-market.md`
9. `.skills/sales-demo-playbook.md`
10. `.skills/investor-fundraising-deck.md`
11. `.skills/platform-investor-enterprise-narrative.md`
12. `.skills/pricing-packaging-strategy.md`
13. `.skills/website-conversion-system.md`
14. `.skills/conversion-experimentation-system.md`
15. `.skills/product-analytics-growth.md`

### 02. Frontend, UX, Design System & Client Engineering — 11 skills

1. `.skills/frontend-design.md`
2. `.skills/frontend-components.md`
3. `.skills/frontend-responsive.md`
4. `.skills/frontend-motion.md`
5. `.skills/frontend-copywriting.md`
6. `.skills/frontend-state-data.md`
7. `.skills/frontend-forms-validation.md`
8. `.skills/frontend-testing.md`
9. `.skills/frontend-performance.md`
10. `.skills/coding-standards.md`
11. `.skills/project-structure.md`

### 03. Core Platform Architecture, Backend, API & Engineering Operations — 12 skills

1. `.skills/domain-model.md`
2. `.skills/api-contracts.md`
3. `.skills/backend-architecture.md`
4. `.skills/knowledge-rag.md`
5. `.skills/workflow-automation.md`
6. `.skills/deployment-ops.md`
7. `.skills/feature-flags-rollout-system.md`
8. `.skills/reliability-sla.md`
9. `.skills/observability-analytics-events.md`
10. `.skills/operations-command-center.md`
11. `.skills/internal-admin-backoffice.md`
12. `.skills/quality-assurance-system.md`

### 04. Security, Privacy, Compliance, Legal, Trust & Enterprise Readiness — 8 skills

1. `.skills/security-threat-model.md`
2. `.skills/data-governance-privacy.md`
3. `.skills/compliance-legal-risk.md`
4. `.skills/legal-pages-policy-system.md`
5. `.skills/trust-center-public-status.md`
6. `.skills/enterprise-readiness.md`
7. `.skills/admin-permissions.md`
8. `.skills/human-review-governance.md`

### 05. AI Employee Core, Agent Runtime & AI Operations — 14 skills

1. `.skills/ai-employee-architecture.md`
2. `.skills/ai-safety-evaluation.md`
3. `.skills/model-provider-strategy.md`
4. `.skills/ai-cost-control.md`
5. `.skills/prompt-tool-orchestration.md`
6. `.skills/ai-agent-permissions-runtime.md`
7. `.skills/ai-agent-memory-context.md`
8. `.skills/ai-agent-evaluation-benchmarking.md`
9. `.skills/ai-agent-simulation-sandbox.md`
10. `.skills/ai-agent-incident-response.md`
11. `.skills/ai-agent-observability-tracing.md`
12. `.skills/ai-agent-versioning-change-management.md`
13. `.skills/multi-agent-orchestration-system.md`
14. `.skills/agent-team-templates.md`

### 06. Marketplace Foundation, Templates, Monetization & Ecosystem — 13 skills

1. `.skills/ai-employee-marketplace.md`
2. `.skills/agent-marketplace-template-builder.md`
3. `.skills/ecosystem-marketplace-economy.md`
4. `.skills/monetization-billing.md`
5. `.skills/finance-accounting-controls.md`
6. `.skills/sales-crm-pipeline-system.md`
7. `.skills/revenue-operations-system.md`
8. `.skills/integration-ecosystem.md`
9. `.skills/onboarding-activation.md`
10. `.skills/customer-lifecycle-automation.md`
11. `.skills/customer-education-academy.md`
12. `.skills/knowledge-base-support-system.md`
13. `.skills/customer-success-playbooks.md`

### 07. Marketplace Review, Ranking, Discovery, Install & Commercial Operations — 14 skills

1. `.skills/ai-agent-template-review-governance.md`
2. `.skills/template-quality-ranking-system.md`
3. `.skills/marketplace-search-recommendation-engine.md`
4. `.skills/marketplace-installation-entitlements.md`
5. `.skills/marketplace-billing-payouts.md`
6. `.skills/marketplace-dispute-resolution.md`
7. `.skills/marketplace-trust-safety-operations.md`
8. `.skills/marketplace-policy-enforcement-rules.md`
9. `.skills/marketplace-creator-success-system.md`
10. `.skills/marketplace-partner-operations.md`
11. `.skills/marketplace-customer-review-reputation-system.md`
12. `.skills/marketplace-merchandising-promotion-system.md`
13. `.skills/marketplace-search-quality-analytics.md`
14. `.skills/marketplace-creator-community-program.md`

### 08. Marketplace Enterprise Governance, Compliance, Regions & Private Catalogs — 8 skills

1. `.skills/marketplace-enterprise-procurement.md`
2. `.skills/marketplace-enterprise-vendor-management.md`
3. `.skills/marketplace-enterprise-audit-reports.md`
4. `.skills/marketplace-compliance-evidence-center.md`
5. `.skills/marketplace-regulatory-compliance-matrix.md`
6. `.skills/marketplace-data-residency-region-controls.md`
7. `.skills/marketplace-private-catalog-controls.md`
8. `.skills/marketplace-internal-template-governance.md`

### 09. Marketplace Template Lifecycle, Health, Portability, Certification & Outcomes — 10 skills

1. `.skills/marketplace-template-migration-portability.md`
2. `.skills/marketplace-template-dependency-registry.md`
3. `.skills/marketplace-template-health-monitoring.md`
4. `.skills/marketplace-template-auto-remediation.md`
5. `.skills/marketplace-template-outcome-intelligence.md`
6. `.skills/marketplace-template-lifecycle-optimization.md`
7. `.skills/marketplace-template-experimentation-system.md`
8. `.skills/marketplace-template-quality-benchmarking.md`
9. `.skills/marketplace-template-certification-program.md`
10. `.skills/marketplace-template-trust-labeling-system.md`

### 10. Marketplace Support, Sandbox, Localization & Communications — 4 skills

1. `.skills/marketplace-customer-support-operations.md`
2. `.skills/marketplace-sandbox-demo-environments.md`
3. `.skills/marketplace-localization-internationalization.md`
4. `.skills/marketplace-notification-communication-system.md`

### 11. Enterprise Account Governance, Implementation, Success & Expansion — 12 skills

1. `.skills/enterprise-account-governance.md`
2. `.skills/enterprise-sso-scim-directory-sync.md`
3. `.skills/enterprise-workspace-policy-engine.md`
4. `.skills/enterprise-approval-workflows.md`
5. `.skills/enterprise-implementation-methodology.md`
6. `.skills/enterprise-professional-services-system.md`
7. `.skills/enterprise-customer-training-certification.md`
8. `.skills/enterprise-change-management-system.md`
9. `.skills/enterprise-customer-health-scoring.md`
10. `.skills/enterprise-renewal-expansion-system.md`
11. `.skills/enterprise-adoption-success-insights.md`
12. `.skills/enterprise-executive-business-review.md`

### 12. Final Platform Operating Model & Launch Readiness — 3 skills

1. `.skills/platform-final-readiness-checklist.md`
2. `.skills/platform-operating-model.md`
3. `.skills/platform-launch-readiness-command-center.md`

## Product Surface Map Preview

This is the bridge from skills to mockups. A dedicated `product-surface-map.md` should turn these surfaces into navigation, information architecture, and first-screen mockup priorities.

| Surface | What It Must Prove | Primary Skills |
| --- | --- | --- |
| Public Website | positioning, trust, pricing, conversion, narrative | website-conversion-system.md, brand-messaging-system.md, pricing-packaging-strategy.md, platform-investor-enterprise-narrative.md |
| Pricing Page | plan logic, packaging, upgrade gates, billing clarity | pricing-packaging-strategy.md, monetization-billing.md, marketplace-billing-payouts.md, ai-cost-control.md |
| Main App Dashboard | AI employee overview, outcomes, health, alerts, tasks | ai-employee-architecture.md, product-analytics-growth.md, enterprise-adoption-success-insights.md, marketplace-template-health-monitoring.md |
| AI Employee Builder | agent setup, tools, permissions, memory, evaluation, simulation | ai-agent-permissions-runtime.md, ai-agent-memory-context.md, ai-agent-simulation-sandbox.md, prompt-tool-orchestration.md |
| Marketplace Home | discovery, ranking, search, categories, trust labels | marketplace-search-recommendation-engine.md, template-quality-ranking-system.md, marketplace-template-trust-labeling-system.md |
| Template Detail Page | install preview, trust labels, certification, reviews, dependencies, evidence | marketplace-installation-entitlements.md, marketplace-template-dependency-registry.md, marketplace-customer-review-reputation-system.md |
| Enterprise Admin | account hierarchy, policy engine, SSO/SCIM, approvals, audit | enterprise-account-governance.md, enterprise-sso-scim-directory-sync.md, enterprise-workspace-policy-engine.md, enterprise-approval-workflows.md |
| Creator Portal | builder, review, certification, revenue, community, quality coaching | agent-marketplace-template-builder.md, marketplace-creator-success-system.md, marketplace-template-certification-program.md |
| Partner Portal | services, partner profile, co-selling, delivery, SLAs | marketplace-partner-operations.md, enterprise-professional-services-system.md |
| Trust Center | public status, compliance evidence, data residency, legal pages | trust-center-public-status.md, marketplace-compliance-evidence-center.md, marketplace-data-residency-region-controls.md |
| Internal Ops Command Center | incidents, launch, support, quality, operations | operations-command-center.md, platform-launch-readiness-command-center.md, marketplace-customer-support-operations.md |
| Customer Success Console | health score, renewals, adoption, EBR | enterprise-customer-health-scoring.md, enterprise-renewal-expansion-system.md, enterprise-executive-business-review.md |

## Execution Cuts

### MVP Cut

Use this cut when building the first working Ariyo product slice. The goal is not a full marketplace or full enterprise suite; the goal is a credible AI Employee OS that can be demonstrated, tested, and sold into early design partners.

- `.skills/business-context.md`
- `.skills/product-strategy.md`
- `.skills/product-requirements-mvp.md`
- `.skills/frontend-design.md`
- `.skills/frontend-components.md`
- `.skills/domain-model.md`
- `.skills/api-contracts.md`
- `.skills/backend-architecture.md`
- `.skills/ai-employee-architecture.md`
- `.skills/ai-agent-permissions-runtime.md`
- `.skills/ai-safety-evaluation.md`
- `.skills/knowledge-rag.md`
- `.skills/workflow-automation.md`
- `.skills/pricing-packaging-strategy.md`
- `.skills/website-conversion-system.md`
- `.skills/onboarding-activation.md`
- `.skills/observability-analytics-events.md`
- `.skills/security-threat-model.md`
- `.skills/data-governance-privacy.md`
- `.skills/deployment-ops.md`

### Investor / Enterprise Demo Cut

Use this cut when creating mockups, sales demos, or investor narrative artifacts that must show the product vision without requiring the full backend to exist.

- `.skills/platform-investor-enterprise-narrative.md`
- `.skills/website-conversion-system.md`
- `.skills/sales-demo-playbook.md`
- `.skills/ai-employee-architecture.md`
- `.skills/agent-team-templates.md`
- `.skills/ai-agent-simulation-sandbox.md`
- `.skills/marketplace-search-recommendation-engine.md`
- `.skills/marketplace-sandbox-demo-environments.md`
- `.skills/enterprise-account-governance.md`
- `.skills/enterprise-workspace-policy-engine.md`
- `.skills/trust-center-public-status.md`
- `.skills/platform-final-readiness-checklist.md`

### Marketplace Alpha Cut

Use this cut when launching a controlled marketplace with template creation, review, search, installation, billing, support, health monitoring, and trust operations.

- `.skills/ai-employee-marketplace.md`
- `.skills/agent-marketplace-template-builder.md`
- `.skills/ai-agent-template-review-governance.md`
- `.skills/template-quality-ranking-system.md`
- `.skills/marketplace-search-recommendation-engine.md`
- `.skills/marketplace-installation-entitlements.md`
- `.skills/marketplace-billing-payouts.md`
- `.skills/marketplace-template-dependency-registry.md`
- `.skills/marketplace-template-health-monitoring.md`
- `.skills/marketplace-trust-safety-operations.md`
- `.skills/marketplace-policy-enforcement-rules.md`
- `.skills/marketplace-customer-support-operations.md`

### Enterprise Alpha Cut

Use this cut when selling to or piloting with an enterprise customer that requires governance, SSO/SCIM, approvals, procurement, vendor risk, audit evidence, and implementation methodology.

- `.skills/enterprise-account-governance.md`
- `.skills/enterprise-sso-scim-directory-sync.md`
- `.skills/enterprise-workspace-policy-engine.md`
- `.skills/enterprise-approval-workflows.md`
- `.skills/marketplace-enterprise-procurement.md`
- `.skills/marketplace-enterprise-vendor-management.md`
- `.skills/marketplace-enterprise-audit-reports.md`
- `.skills/marketplace-compliance-evidence-center.md`
- `.skills/marketplace-data-residency-region-controls.md`
- `.skills/enterprise-implementation-methodology.md`
- `.skills/enterprise-customer-training-certification.md`
- `.skills/enterprise-customer-health-scoring.md`

## Dependency Rules

### Universal Skill Stack

Every serious Ariyo task should start from this baseline:

- `.skills/business-context.md`
- `.skills/product-strategy.md`
- `.skills/domain-model.md`
- `.skills/api-contracts.md`
- `.skills/coding-standards.md`
- `.skills/project-structure.md`
- `.skills/security-threat-model.md`
- `.skills/data-governance-privacy.md`
- `.skills/observability-analytics-events.md`

### Frontend Task Stack

- `.skills/frontend-design.md`
- `.skills/frontend-components.md`
- `.skills/frontend-responsive.md`
- `.skills/frontend-motion.md`
- `.skills/frontend-copywriting.md`
- `.skills/frontend-state-data.md`
- `.skills/frontend-forms-validation.md`
- `.skills/frontend-testing.md`
- `.skills/frontend-performance.md`

### AI Employee Task Stack

- `.skills/ai-employee-architecture.md`
- `.skills/prompt-tool-orchestration.md`
- `.skills/ai-agent-permissions-runtime.md`
- `.skills/ai-agent-memory-context.md`
- `.skills/ai-safety-evaluation.md`
- `.skills/ai-agent-evaluation-benchmarking.md`
- `.skills/ai-agent-simulation-sandbox.md`
- `.skills/ai-agent-observability-tracing.md`
- `.skills/ai-agent-incident-response.md`
- `.skills/ai-agent-versioning-change-management.md`

### Marketplace Task Stack

- `.skills/ai-employee-marketplace.md`
- `.skills/agent-marketplace-template-builder.md`
- `.skills/ai-agent-template-review-governance.md`
- `.skills/template-quality-ranking-system.md`
- `.skills/marketplace-search-recommendation-engine.md`
- `.skills/marketplace-installation-entitlements.md`
- `.skills/marketplace-billing-payouts.md`
- `.skills/marketplace-template-dependency-registry.md`
- `.skills/marketplace-template-health-monitoring.md`
- `.skills/marketplace-trust-safety-operations.md`
- `.skills/marketplace-customer-support-operations.md`

### Enterprise Governance Task Stack

- `.skills/enterprise-account-governance.md`
- `.skills/enterprise-sso-scim-directory-sync.md`
- `.skills/enterprise-workspace-policy-engine.md`
- `.skills/enterprise-approval-workflows.md`
- `.skills/enterprise-readiness.md`
- `.skills/marketplace-enterprise-procurement.md`
- `.skills/marketplace-enterprise-audit-reports.md`
- `.skills/marketplace-compliance-evidence-center.md`

### Launch Task Stack

- `.skills/platform-final-readiness-checklist.md`
- `.skills/platform-operating-model.md`
- `.skills/platform-launch-readiness-command-center.md`
- `.skills/reliability-sla.md`
- `.skills/operations-command-center.md`
- `.skills/ai-agent-incident-response.md`
- `.skills/marketplace-customer-support-operations.md`
- `.skills/launch-go-to-market.md`

## Mockup Readiness Logic

Do not create the first high-fidelity mockup directly from the 124 skills. First reduce them into product surfaces and user journeys.

Recommended next sequence:

1. `master-skill-index-map.md` — completed by this file.
2. `product-surface-map.md` — convert the skill universe into product surfaces, navigation, page hierarchy, and role-based apps.
3. `ariyo-core-product-mockup-brief.md` — define the exact first mockup package and success criteria.
4. Landing Page / Investor Narrative mockup.
5. Main App Dashboard mockup.
6. AI Employee Builder mockup.
7. Marketplace Home + Template Detail mockup.
8. Enterprise Admin / Governance mockup.

## Skill-to-Execution Decision Matrix

| Task Type | Required Skill Stack |
| --- | --- |
| Create a public website section | website-conversion-system.md, brand-messaging-system.md, frontend-copywriting.md, platform-investor-enterprise-narrative.md |
| Design a dashboard | frontend-design.md, frontend-components.md, frontend-state-data.md, product-analytics-growth.md |
| Build an AI Employee feature | ai-employee-architecture.md, ai-agent-permissions-runtime.md, prompt-tool-orchestration.md, ai-safety-evaluation.md |
| Add marketplace search | marketplace-search-recommendation-engine.md, template-quality-ranking-system.md, marketplace-search-quality-analytics.md |
| Add template installation | marketplace-installation-entitlements.md, marketplace-template-dependency-registry.md, marketplace-template-health-monitoring.md |
| Add creator workflow | agent-marketplace-template-builder.md, marketplace-creator-success-system.md, ai-agent-template-review-governance.md |
| Add enterprise governance | enterprise-account-governance.md, enterprise-workspace-policy-engine.md, enterprise-approval-workflows.md |
| Add SSO / SCIM | enterprise-sso-scim-directory-sync.md, admin-permissions.md, security-threat-model.md |
| Add billing or payout | monetization-billing.md, marketplace-billing-payouts.md, finance-accounting-controls.md |
| Prepare launch | platform-final-readiness-checklist.md, platform-launch-readiness-command-center.md, platform-operating-model.md |

## Priority Tiers

### P0 — Must Exist Before Any Credible Demo

- `.skills/business-context.md`
- `.skills/product-strategy.md`
- `.skills/brand-messaging-system.md`
- `.skills/frontend-design.md`
- `.skills/frontend-components.md`
- `.skills/ai-employee-architecture.md`
- `.skills/domain-model.md`
- `.skills/api-contracts.md`
- `.skills/website-conversion-system.md`
- `.skills/sales-demo-playbook.md`

### P1 — Must Exist Before Product Alpha

- `.skills/backend-architecture.md`
- `.skills/knowledge-rag.md`
- `.skills/workflow-automation.md`
- `.skills/ai-agent-permissions-runtime.md`
- `.skills/ai-agent-memory-context.md`
- `.skills/ai-safety-evaluation.md`
- `.skills/security-threat-model.md`
- `.skills/data-governance-privacy.md`
- `.skills/observability-analytics-events.md`
- `.skills/deployment-ops.md`
- `.skills/onboarding-activation.md`

### P2 — Must Exist Before Marketplace Alpha

- `.skills/ai-employee-marketplace.md`
- `.skills/agent-marketplace-template-builder.md`
- `.skills/ai-agent-template-review-governance.md`
- `.skills/template-quality-ranking-system.md`
- `.skills/marketplace-search-recommendation-engine.md`
- `.skills/marketplace-installation-entitlements.md`
- `.skills/marketplace-billing-payouts.md`
- `.skills/marketplace-template-dependency-registry.md`
- `.skills/marketplace-template-health-monitoring.md`
- `.skills/marketplace-trust-safety-operations.md`
- `.skills/marketplace-policy-enforcement-rules.md`
- `.skills/marketplace-customer-support-operations.md`

### P3 — Must Exist Before Enterprise Alpha

- `.skills/enterprise-account-governance.md`
- `.skills/enterprise-sso-scim-directory-sync.md`
- `.skills/enterprise-workspace-policy-engine.md`
- `.skills/enterprise-approval-workflows.md`
- `.skills/marketplace-enterprise-procurement.md`
- `.skills/marketplace-enterprise-vendor-management.md`
- `.skills/marketplace-enterprise-audit-reports.md`
- `.skills/marketplace-compliance-evidence-center.md`
- `.skills/marketplace-data-residency-region-controls.md`
- `.skills/enterprise-implementation-methodology.md`
- `.skills/enterprise-customer-training-certification.md`
- `.skills/enterprise-customer-health-scoring.md`

### P4 — Must Exist Before Full Launch

- `.skills/platform-final-readiness-checklist.md`
- `.skills/platform-operating-model.md`
- `.skills/platform-launch-readiness-command-center.md`
- `.skills/marketplace-localization-internationalization.md`
- `.skills/marketplace-notification-communication-system.md`
- `.skills/enterprise-renewal-expansion-system.md`
- `.skills/enterprise-executive-business-review.md`

## Governance Notes

- Product decisions should not be made from UI skills alone. They must reference product, data, security, AI safety, and business context skills.
- Marketplace decisions should not be made from growth or revenue skills alone. They must reference trust, safety, policy enforcement, installation, dependency, and support skills.
- Enterprise decisions should not be made from feature requirements alone. They must reference account governance, SSO/SCIM, policy engine, approvals, audit, procurement, compliance, and implementation skills.
- AI Employee decisions should not be made from model capability alone. They must reference permissions, memory, evaluation, simulation, observability, incident response, versioning, and cost control.
- Launch decisions should not be made from product readiness alone. They must reference reliability, security, support, GTM, revenue, AI safety, marketplace operations, customer success, and rollback readiness.

## Recommended Next Skill

`product-surface-map.md`

That file should convert this master index into concrete product surfaces, navigation groups, page hierarchy, role-specific experiences, and mockup priorities.

## Golden Rule

If a feature cannot be traced back to a skill, a domain, a product surface, a governance owner, a customer outcome, and a launch priority, it is not ready to design, sell, build, or launch.
