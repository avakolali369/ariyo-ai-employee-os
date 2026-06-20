# Ariyo Product Surface Map

## 1. Core Contract

Ariyo Product Surface Map is not a sitemap.

It is the governed product-surface, navigation, role-based experience, page hierarchy, interaction-priority, mockup-readiness, MVP-cut, demo-cut, enterprise-cut, and implementation map that translates Ariyo's 124 core skills and Master Skill Index into visible product experiences.

Ariyo must not design screens before it understands which surface they belong to, which user role they serve, which business outcome they support, which governance rules apply, which skill contracts inform them, and which launch phase needs them.

This map exists to prevent beautiful but disconnected mockups.

---

## 2. Purpose

This skill defines how Ariyo should organize product surfaces before mockup, design, frontend implementation, investor demo, enterprise demo, marketplace launch, and internal operations rollout.

It answers:

- What are Ariyo's real product surfaces?
- Which surfaces are public, customer-facing, creator-facing, partner-facing, enterprise-facing, or internal?
- Which surfaces are needed for MVP?
- Which surfaces are needed for investor demo?
- Which surfaces are needed for enterprise sales demo?
- Which surfaces are needed for marketplace alpha?
- Which surfaces are needed for production launch?
- Which skills power each surface?
- Which pages should be mocked first?
- Which surfaces should not be built too early?

---

## 3. Relationship to Master Skill Index

`master-skill-index-map.md` explains how Ariyo's skills connect to product strategy, engineering domains, AI systems, marketplace systems, enterprise governance, and launch execution.

`product-surface-map.md` translates that architecture into visible surfaces:

```text
Master Skill Index
  -> Product Domains
  -> Product Surfaces
  -> Page Hierarchy
  -> Navigation
  -> Mockup Priorities
  -> Frontend Implementation Order
```

Ariyo must treat this file as the bridge between strategy and interface.

---

## 4. Surface Taxonomy

Ariyo has ten major product surface families:

1. Public & Growth Surfaces
2. Core Customer App Surfaces
3. AI Employee Builder Surfaces
4. Workflow, Knowledge & Integration Surfaces
5. Marketplace Surfaces
6. Creator & Partner Surfaces
7. Enterprise Admin & Governance Surfaces
8. Trust, Compliance & Security Surfaces
9. Customer Success, Support & Revenue Surfaces
10. Internal Operations & Launch Surfaces

Each family may include multiple apps, pages, modals, dashboards, command centers, and operational flows.

---

## 5. Role Model

Ariyo surfaces must be designed by role, not only by feature.

### 5.1 Public Visitor

A public visitor evaluates Ariyo before sign-up.

Primary surfaces:

- Website homepage
- Pricing page
- Use case pages
- Marketplace preview
- Trust center preview
- Demo request page
- Investor/enterprise narrative pages

### 5.2 Founder / Business Owner

A founder or business owner wants measurable business value quickly.

Primary surfaces:

- Main dashboard
- AI Employee catalog
- AI Employee builder
- Outcome dashboard
- Marketplace template detail
- Billing and plan management

### 5.3 Team Manager

A team manager manages daily work and AI Employee performance.

Primary surfaces:

- Team workspace
- AI Employee performance view
- Workflow dashboard
- Task and outcome view
- Alerts and approvals
- Training and enablement pages

### 5.4 AI Employee Builder

A builder configures AI Employees, workflows, knowledge, prompts, tools, memory, permissions, and evaluations.

Primary surfaces:

- AI Employee Builder Studio
- Agent Team Builder
- Workflow Builder
- Knowledge/RAG setup
- Tool permission setup
- Simulation sandbox
- Evaluation and test console

### 5.5 Marketplace Customer

A marketplace customer discovers, evaluates, installs, monitors, and reviews Marketplace assets.

Primary surfaces:

- Marketplace homepage
- Search and discovery
- Category pages
- Template detail
- Install preview
- Sandbox demo
- Installed asset health
- Review and reputation

### 5.6 Creator

A creator builds, publishes, improves, monetizes, and supports Marketplace assets.

Primary surfaces:

- Creator portal
- Template builder
- Submission review status
- Quality dashboard
- Earnings dashboard
- Support cases
- Certification and education

### 5.7 Partner

A partner implements, co-sells, supports, and services customers.

Primary surfaces:

- Partner portal
- Partner profile
- Service listing management
- Customer delivery workspace
- Referral/co-sell dashboard
- Partner quality dashboard

### 5.8 Enterprise Admin

An enterprise admin controls account governance, policies, identity, permissions, approvals, compliance, catalogs, and audits.

Primary surfaces:

- Enterprise admin console
- Organization and workspace management
- User and role management
- SSO/SCIM setup
- Policy engine
- Approval workflows
- Audit reports
- Private catalog controls

### 5.9 Security / Compliance / Procurement Buyer

This role evaluates risk and purchasing readiness.

Primary surfaces:

- Trust center
- Compliance evidence center
- Vendor management
- Procurement workflow
- Data residency controls
- Audit reports
- Regulatory compliance matrix

### 5.10 Ariyo Operator

Internal Ariyo teams operate product, marketplace, safety, support, launch, revenue, and customer success.

Primary surfaces:

- Internal admin/backoffice
- Operations command center
- Trust & safety console
- Support operations console
- Revenue operations dashboard
- Customer health dashboard
- Launch readiness command center

---

## 6. Product Surface Families

## 6.1 Public Website & Growth Surface

### Purpose

Explain Ariyo, convert demand, build trust, and support investor/enterprise storytelling.

### Primary Pages

- Homepage
- Product overview
- AI Employee OS page
- Marketplace page
- Enterprise page
- Pricing page
- Security and trust page
- Use case pages
- Demo request page
- Contact sales page
- Creator/partner landing page
- Investor narrative page

### Primary Skills

- `brand-messaging-system.md`
- `website-conversion-system.md`
- `pricing-packaging-strategy.md`
- `platform-investor-enterprise-narrative.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `content-marketing-engine.md`
- `launch-go-to-market.md`

### Mockup Priority

High.

Ariyo needs a premium website mockup early because it anchors investor, customer, partner, and internal confidence.

### Must Show

- Ariyo as AI Employee Operating System
- Business outcome promise
- Basic / Pro / Smart packaging
- Marketplace flywheel
- Enterprise governance credibility
- Trust and safety posture

### Must Avoid

- Generic AI assistant language
- Overclaiming autonomy
- Hiding governance complexity
- Presenting marketplace as simple template store

---

## 6.2 Core Customer App Shell

### Purpose

Provide the main authenticated experience for customers operating Ariyo.

### Primary Pages

- Home dashboard
- AI Employees
- Workflows
- Marketplace
- Outcomes
- Alerts
- Approvals
- Knowledge
- Integrations
- Team
- Settings

### Navigation Model

```text
Ariyo App
  Dashboard
  AI Employees
  Workflows
  Knowledge
  Marketplace
  Outcomes
  Alerts
  Approvals
  Team
  Settings
```

### Primary Skills

- `frontend-design.md`
- `frontend-components.md`
- `frontend-responsive.md`
- `frontend-motion.md`
- `frontend-state-data.md`
- `frontend-forms-validation.md`
- `frontend-performance.md`
- `frontend-testing.md`
- `project-structure.md`
- `coding-standards.md`

### Mockup Priority

Very high.

This is the first real SaaS surface customers will remember.

### Must Show

- AI Employees as operational workers, not chatbots
- Work status and outcomes
- Clear alerts and approvals
- Marketplace value without overwhelming the customer
- Simple path from dashboard to action

---

## 6.3 Main Dashboard Surface

### Purpose

Show the state of the customer's AI workforce and business outcomes.

### Primary Widgets

- Active AI Employees
- Today's outcomes
- Open approvals
- Workflow runs
- Cost usage
- Incidents and alerts
- Marketplace recommendations
- Health score
- Success milestones

### Primary Skills

- `observability-analytics-events.md`
- `operations-command-center.md`
- `product-analytics-growth.md`
- `enterprise-customer-health-scoring.md`
- `enterprise-adoption-success-insights.md`
- `ai-cost-control.md`
- `reliability-sla.md`

### Mockup Priority

Very high.

### First Mockup Version

A clean executive/operator dashboard with:

- AI Employee status cards
- Outcome cards
- Cost and safety indicators
- Open action queue
- Recommended next steps

---

## 6.4 AI Employee Builder Studio

### Purpose

Let users create, configure, test, and deploy AI Employees.

### Primary Pages

- Builder landing
- Role definition
- Instructions and behavior
- Tool permissions
- Knowledge sources
- Workflow connections
- Memory/context settings
- Model profile
- Safety rules
- Simulation
- Evaluation
- Deployment review

### Primary Skills

- `ai-employee-architecture.md`
- `prompt-tool-orchestration.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-incident-response.md`
- `multi-agent-orchestration-system.md`

### Mockup Priority

Very high.

This is Ariyo's core product differentiation.

### Must Show

- AI Employee role clarity
- Permission-scoped tool access
- Simulation before activation
- Human review for risky actions
- Versioning and rollback
- Cost and safety boundaries

### Must Avoid

- A generic prompt form
- Chat-only product framing
- Hidden permissions
- Unclear deployment risk

---

## 6.5 Agent Team & Multi-Agent Orchestration Surface

### Purpose

Let advanced users design teams of AI Employees working together.

### Primary Pages

- Team template gallery
- Team builder canvas
- Supervisor configuration
- Specialist agent setup
- Handoff rules
- Shared memory boundaries
- Tool permissions
- Evaluation scenarios
- Deployment and rollback

### Primary Skills

- `multi-agent-orchestration-system.md`
- `agent-team-templates.md`
- `ai-agent-template-review-governance.md`
- `agent-marketplace-template-builder.md`
- `ai-safety-evaluation.md`
- `human-review-governance.md`

### Mockup Priority

Medium-high.

This is excellent for Smart plan and investor demo, but should not block the MVP dashboard and single AI Employee builder.

---

## 6.6 Workflow Automation Surface

### Purpose

Allow customers to connect AI Employees to real business workflows.

### Primary Pages

- Workflow list
- Workflow builder
- Trigger setup
- Action setup
- Approval gates
- Run history
- Error handling
- Simulation
- Automation logs

### Primary Skills

- `workflow-automation.md`
- `frontend-forms-validation.md`
- `integration-ecosystem.md`
- `api-contracts.md`
- `backend-architecture.md`
- `reliability-sla.md`
- `observability-analytics-events.md`

### Mockup Priority

High.

Workflow automation proves Ariyo is operational infrastructure, not just AI chat.

---

## 6.7 Knowledge & RAG Surface

### Purpose

Manage customer knowledge sources, retrieval, freshness, access, and evidence.

### Primary Pages

- Knowledge sources
- Upload/import flows
- Source permissions
- Retrieval settings
- RAG diagnostics
- Knowledge freshness
- Citation/evidence view
- Memory and context boundaries

### Primary Skills

- `knowledge-rag.md`
- `ai-agent-memory-context.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`

### Mockup Priority

Medium-high.

Essential for Enterprise demo, but may be simplified in early mockups.

---

## 6.8 Integration Surface

### Purpose

Let customers connect tools and data sources safely.

### Primary Pages

- Integration catalog
- Connected apps
- Permission review
- Integration health
- Reconnect flows
- Integration logs
- Region and vendor controls

### Primary Skills

- `integration-ecosystem.md`
- `api-contracts.md`
- `ai-agent-permissions-runtime.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-health-monitoring.md`
- `security-threat-model.md`

### Mockup Priority

Medium.

Should appear in the AI Employee Builder and Enterprise Admin flows.

---

## 6.9 Marketplace Customer Surface

### Purpose

Help customers discover, evaluate, install, monitor, review, and govern Marketplace assets.

### Primary Pages

- Marketplace homepage
- Search results
- Category pages
- Featured collections
- Template detail page
- Trust labels
- Certification badges
- Reviews and reputation
- Sandbox/demo preview
- Install preview
- Installed assets
- Asset health
- Support and disputes

### Primary Skills

- `ai-employee-marketplace.md`
- `ecosystem-marketplace-economy.md`
- `marketplace-search-recommendation-engine.md`
- `template-quality-ranking-system.md`
- `marketplace-installation-entitlements.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-sandbox-demo-environments.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-customer-support-operations.md`

### Mockup Priority

Very high.

Ariyo Marketplace is a major strategic differentiator.

### First Mockup Pages

1. Marketplace homepage
2. Search results
3. Template detail
4. Install preview
5. Installed asset health

### Must Show

- Trust labels
- Plan fit
- Pricing and entitlement clarity
- Reviews and verified outcomes
- Sandbox before install
- Region and data access warnings

---

## 6.10 Marketplace Template Detail Surface

### Purpose

Convert interest into informed, safe installation.

### Required Sections

- Hero summary
- Use case
- Plan compatibility
- Pricing/licensing
- Trust labels
- Certification status
- Required permissions
- Required integrations
- Data access
- Region compatibility
- Demo/sandbox
- Reviews and outcomes
- Creator information
- Support details
- Install CTA

### Primary Skills

- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-installation-entitlements.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-compliance-evidence-center.md`

### Mockup Priority

Very high.

This page should be one of the first visual mockups.

---

## 6.11 Marketplace Creator Portal

### Purpose

Let creators build, submit, improve, monetize, support, and grow Marketplace assets.

### Primary Pages

- Creator dashboard
- Template builder
- Submission checklist
- Review status
- Quality score
- Certification status
- Earnings and payouts
- Support cases
- Creator education
- Community

### Primary Skills

- `agent-marketplace-template-builder.md`
- `marketplace-creator-success-system.md`
- `marketplace-creator-community-program.md`
- `marketplace-billing-payouts.md`
- `marketplace-template-quality-benchmarking.md`
- `marketplace-template-lifecycle-optimization.md`
- `marketplace-template-certification-program.md`

### Mockup Priority

Medium.

Important for marketplace supply, but customer and enterprise surfaces come first.

---

## 6.12 Partner Portal Surface

### Purpose

Let partners deliver services, co-sell, manage customers, and track quality.

### Primary Pages

- Partner dashboard
- Partner profile
- Service listings
- Customer engagements
- Co-sell/referral tracking
- Delivery quality dashboard
- Revenue and commissions
- Disputes and support

### Primary Skills

- `marketplace-partner-operations.md`
- `community-partner-growth.md`
- `sales-crm-pipeline-system.md`
- `revenue-operations-system.md`
- `enterprise-professional-services-system.md`

### Mockup Priority

Low-medium.

Build after core marketplace and enterprise admin surfaces.

---

## 6.13 Enterprise Admin Console

### Purpose

Give enterprise customers centralized governance, identity, policies, approvals, private catalog, audit, billing, security, and compliance controls.

### Primary Pages

- Organization overview
- Workspaces and departments
- Users and groups
- Roles and permissions
- SSO/SCIM
- Policy engine
- Approval workflows
- Private catalog
- Vendor management
- Audit reports
- Data residency
- Billing/procurement

### Primary Skills

- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `admin-permissions.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-data-residency-region-controls.md`

### Mockup Priority

Very high for Enterprise demo.

### Must Show

- Policy inheritance
- Approval governance
- Identity control
- Marketplace restrictions
- Audit readiness
- Data residency controls

---

## 6.14 Trust Center & Compliance Surfaces

### Purpose

Make Ariyo trustworthy for enterprise buyers, security teams, procurement, legal, and customers.

### Public Surfaces

- Public trust center
- Status page
- Security overview
- Privacy overview
- Compliance overview
- AI safety overview
- Legal pages

### Authenticated Surfaces

- Compliance evidence center
- Security questionnaires
- Vendor evidence
- Audit exports
- Data residency controls
- Regulatory matrix
- Trust package builder

### Primary Skills

- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `compliance-legal-risk.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `ai-safety-evaluation.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-enterprise-audit-reports.md`

### Mockup Priority

High.

Trust surfaces support enterprise sales and investor confidence.

---

## 6.15 Billing, Pricing & Revenue Surfaces

### Purpose

Manage pricing, billing, invoices, usage, marketplace purchases, payouts, revenue operations, and financial controls.

### Customer Pages

- Plan and billing
- Usage and AI cost
- Marketplace purchases
- Invoice history
- Upgrade/downgrade
- Cost alerts

### Internal Pages

- Revenue operations dashboard
- Billing exceptions
- Marketplace ledger
- Payout review
- Refund/dispute tracking
- Finance exports

### Primary Skills

- `pricing-packaging-strategy.md`
- `monetization-billing.md`
- `ai-cost-control.md`
- `marketplace-billing-payouts.md`
- `finance-accounting-controls.md`
- `revenue-operations-system.md`
- `enterprise-renewal-expansion-system.md`

### Mockup Priority

Medium-high.

Cost and billing visibility are especially important for Smart and Enterprise.

---

## 6.16 Customer Success Surface

### Purpose

Help Ariyo and customers understand adoption, value, risk, renewal, and expansion.

### Primary Pages

- Customer health dashboard
- Adoption insights
- Outcome intelligence
- EBR/QBR builder
- Renewal and expansion dashboard
- Training progress
- Customer success playbooks

### Primary Skills

- `customer-success-playbooks.md`
- `enterprise-customer-health-scoring.md`
- `enterprise-adoption-success-insights.md`
- `enterprise-executive-business-review.md`
- `enterprise-renewal-expansion-system.md`
- `enterprise-customer-training-certification.md`
- `marketplace-template-outcome-intelligence.md`

### Mockup Priority

Medium-high.

Important for Enterprise narrative and retention.

---

## 6.17 Support & Operations Surface

### Purpose

Operate customer issues, marketplace support, incidents, health monitoring, and internal escalations.

### Primary Pages

- Support queue
- Case detail
- Severity dashboard
- Marketplace asset issue triage
- Creator escalation
- Incident center
- Auto-remediation actions
- Knowledge base management

### Primary Skills

- `marketplace-customer-support-operations.md`
- `knowledge-base-support-system.md`
- `customer-lifecycle-automation.md`
- `ai-agent-incident-response.md`
- `marketplace-template-auto-remediation.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`

### Mockup Priority

Medium.

Support surfaces should be included in operations mockups, not necessarily in early public demo.

---

## 6.18 Internal Admin & Backoffice Surface

### Purpose

Let Ariyo operators manage accounts, customers, marketplace, incidents, policies, finance, and trust operations.

### Primary Pages

- Internal account lookup
- Customer workspace view
- Marketplace admin
- Creator/vendor admin
- Trust & safety queue
- Billing exceptions
- Support escalations
- Feature flags
- Launch command center

### Primary Skills

- `internal-admin-backoffice.md`
- `admin-permissions.md`
- `operations-command-center.md`
- `feature-flags-rollout-system.md`
- `quality-assurance-system.md`
- `platform-operating-model.md`
- `platform-launch-readiness-command-center.md`

### Mockup Priority

Low-medium.

Mock selectively for launch command and trust/safety credibility.

---

## 7. Top-Level Navigation Architecture

Ariyo should not use one universal navigation for every role.

### 7.1 Customer App Navigation

```text
Dashboard
AI Employees
Workflows
Knowledge
Marketplace
Outcomes
Alerts
Approvals
Team
Settings
```

### 7.2 Enterprise Admin Navigation

```text
Overview
Organization
Workspaces
Users & Groups
Roles & Permissions
Policies
Approvals
Identity
Private Catalog
Security & Compliance
Audit Reports
Billing & Procurement
```

### 7.3 Marketplace Navigation

```text
Discover
Categories
Search
Collections
Certified
For Your Plan
Installed
Reviews
Support
```

### 7.4 Creator Portal Navigation

```text
Dashboard
Templates
Submissions
Quality
Certification
Earnings
Support
Education
Community
Settings
```

### 7.5 Partner Portal Navigation

```text
Dashboard
Profile
Services
Customers
Co-Sell
Referrals
Delivery
Revenue
Support
```

### 7.6 Internal Ops Navigation

```text
Command Center
Customers
Marketplace
Creators
Partners
Trust & Safety
Support
Revenue
Incidents
Launch
Admin
```

---

## 8. First Mockup Priority Set

Ariyo should not mock all surfaces at once.

The first mockup package should include only the surfaces that tell the strongest product story.

### Priority 1 Mockups

1. Public Landing Page
2. Main Customer Dashboard
3. AI Employee Builder Studio
4. Marketplace Homepage
5. Marketplace Template Detail Page
6. Enterprise Admin Console Overview

### Priority 2 Mockups

7. Workflow Builder
8. Knowledge/RAG Setup
9. Marketplace Install Preview
10. Trust Center / Compliance Evidence Page
11. Customer Health Dashboard
12. Creator Portal Dashboard

### Priority 3 Mockups

13. Partner Portal
14. Revenue/Billing Dashboard
15. Support Operations Console
16. Launch Readiness Command Center
17. Internal Backoffice
18. Enterprise EBR Builder

---

## 9. MVP Product Surface Cut

For an MVP that proves Ariyo's core product, build:

- Public website
- Customer dashboard
- AI Employee builder
- Workflow setup
- Knowledge upload/source setup
- Basic integrations
- Marketplace browse and template detail
- Basic install preview
- Billing/plan page
- Basic admin settings

MVP does not need:

- Full creator economy
- Full partner portal
- Full enterprise procurement
- Full private catalog
- Full certification program
- Full launch command center

---

## 10. Investor Demo Surface Cut

For investor demo, show:

- Website narrative
- Main dashboard
- AI Employee builder
- Marketplace template detail
- Outcome intelligence
- Enterprise admin overview
- Marketplace flywheel view
- Trust and safety posture
- Revenue model page

The investor demo must prove:

- Category clarity
- Product depth
- Marketplace defensibility
- Enterprise seriousness
- Revenue potential
- Governance maturity

---

## 11. Enterprise Sales Demo Surface Cut

For enterprise sales, show:

- Enterprise landing page
- AI Employee builder
- Workflow automation
- Enterprise admin console
- SSO/SCIM view
- Policy engine
- Approval workflows
- Private catalog
- Audit reports
- Trust center
- Customer health and EBR outputs

Enterprise buyers must see control before excitement.

---

## 12. Marketplace Alpha Surface Cut

For Marketplace alpha, show:

- Marketplace homepage
- Search and categories
- Template detail
- Trust labels
- Reviews
- Sandbox demo
- Install preview
- Installed asset health
- Creator portal basics
- Support routing

Marketplace alpha must be trust-first, not volume-first.

---

## 13. Smart Plan Surface Cut

Smart plan should emphasize:

- Multi-agent orchestration
- Advanced builder controls
- Private catalog
- Enterprise policies
- AI cost control
- Advanced marketplace assets
- Outcome intelligence
- EBR reporting
- Advanced support and health monitoring

Smart surfaces should feel powerful but governed.

---

## 14. Basic Plan Surface Cut

Basic plan should emphasize:

- Simple dashboard
- Easy AI Employee setup
- Low-risk templates
- Limited marketplace assets
- Simple billing
- Basic outcomes
- Guided recommendations

Basic surfaces should not expose enterprise complexity too early.

---

## 15. Pro Plan Surface Cut

Pro plan should emphasize:

- Team workflows
- More integrations
- Marketplace productivity templates
- Approval flows
- Team dashboard
- Advanced usage analytics
- Better support

Pro surfaces should bridge simplicity and operational depth.

---

## 16. UI Design Principles for Mockups

### 16.1 Product Language

Use language like:

- AI Employee
- Outcome
- Workflow
- Approval
- Knowledge
- Trust
- Marketplace Asset
- Installed Template
- Governance
- Health

Avoid language like:

- Bot
- Generic assistant
- Prompt toy
- Magic automation
- Unlimited AI
- Fully autonomous without review

### 16.2 Visual Hierarchy

Ariyo UI should make these states visible:

- What is working
- What needs approval
- What is risky
- What creates value
- What costs money
- What is installed
- What changed
- What is blocked

### 16.3 Enterprise Tone

The UI should feel:

- Premium
- Calm
- Operational
- Trustworthy
- Data-driven
- Governance-aware
- Outcome-oriented

Not:

- Toy-like
- Overly flashy
- Chatbot-centric
- Crypto-marketplace-like
- Consumer-only

---

## 17. Page Hierarchy Standards

Each major page should define:

- Primary user
- Primary job-to-be-done
- Primary CTA
- Secondary actions
- Required trust indicators
- Required empty state
- Required loading state
- Required error state
- Required audit/log trail
- Required role-based restrictions
- Required mobile behavior

---

## 18. Mockup Brief Template

Every Ariyo mockup should include:

```text
Surface name:
User role:
Business outcome:
Primary action:
Secondary actions:
Key data shown:
Governance requirements:
Trust indicators:
Risk states:
Empty state:
Success state:
Failure state:
Upgrade state:
Skills referenced:
Priority tier:
Launch phase:
```

---

## 19. Suggested First Mockup Briefs

### 19.1 Landing Page Brief

Goal: explain Ariyo as AI Employee OS.

Must include:

- Hero
- Category definition
- Product modules
- Marketplace flywheel
- Enterprise trust
- Pricing entry
- CTA

### 19.2 Customer Dashboard Brief

Goal: show daily command of AI Employees.

Must include:

- AI Employee status
- Outcomes
- Cost
- Alerts
- Approvals
- Marketplace recommendations

### 19.3 AI Employee Builder Brief

Goal: show how a customer creates an operational AI Employee.

Must include:

- Role setup
- Knowledge
- Tools
- Permissions
- Simulation
- Evaluation
- Deployment

### 19.4 Marketplace Template Detail Brief

Goal: show safe template evaluation.

Must include:

- Trust labels
- Reviews
- Demo
- Permissions
- Pricing
- Install preview

### 19.5 Enterprise Admin Brief

Goal: show enterprise control.

Must include:

- Workspaces
- Users
- Policies
- Approvals
- Private catalog
- Audit

---

## 20. Surface Dependency Rules

Ariyo must not design a surface without checking related skills.

Examples:

- Template detail requires trust labels, certification, reviews, installation entitlements, dependency registry, and billing rules.
- AI Employee Builder requires architecture, permissions, memory, evaluation, simulation, safety, cost, and versioning skills.
- Enterprise Admin requires account governance, SSO/SCIM, policy engine, approval workflows, audit reports, and admin permissions.
- Public website requires narrative, pricing, brand messaging, legal pages, trust center, and conversion system.
- Customer dashboard requires observability, outcomes, health score, cost control, reliability, and customer success skills.

---

## 21. Product Surface Ownership

Each surface must have an owner.

Recommended ownership:

- Public website: Growth + Product Marketing
- Customer app shell: Product + Frontend
- AI Employee builder: Product + AI Platform
- Workflow builder: Product + Automation
- Knowledge/RAG: AI Platform + Data Governance
- Marketplace: Marketplace Product
- Creator portal: Marketplace + Creator Success
- Partner portal: Partnerships + Revenue Ops
- Enterprise admin: Enterprise Product + Security
- Trust center: Security + Legal + Product
- Customer success surfaces: CS + Product Analytics
- Internal ops: Operations + Product + Engineering

---

## 22. Forbidden Product Surface Patterns

Ariyo must not:

- Design mockups from aesthetics before product architecture.
- Hide risky permissions behind beautiful CTAs.
- Present Marketplace assets without trust labels.
- Present AI Employees as unrestricted autonomous workers.
- Let Enterprise Admin feel like an afterthought.
- Treat billing, cost, and governance as settings buried after launch.
- Create separate portals with inconsistent design systems.
- Mock creator growth surfaces before customer trust surfaces.
- Use public website claims that product surfaces cannot support.
- Build internal tools that bypass audit and governance.

---

## 23. Golden Rule

Ariyo product surfaces must make the platform understandable, governable, valuable, and trustworthy.

Every surface should answer one question clearly:

```text
What can this user safely do here, and what value does it create?
```
