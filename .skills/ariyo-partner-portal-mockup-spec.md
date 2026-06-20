# Ariyo Partner Portal Mockup Specification

## Core Contract

Ariyo Partner Portal Mockup Specification is not a generic partner dashboard, reseller console, or implementation tracker.

It is the governed mockup specification for the enterprise partner operating surface where certified implementation partners, agencies, solution providers, system integrators, consultants, marketplace partners, regional partners, and internal partner managers manage customer deployments, private catalog requests, enterprise implementation work, certification status, revenue attribution, support escalation, compliance evidence, co-selling opportunities, and Marketplace success.

The Partner Portal must make Ariyo feel like a serious enterprise ecosystem for deploying and scaling AI Employees, not a loose partner program, affiliate dashboard, or template reseller page.

---

## 1. Purpose

The Ariyo Partner Portal mockup defines the product surface where external and internal partners operate inside Ariyo's ecosystem without compromising customer trust, enterprise governance, compliance, privacy, or platform quality.

This mockup must help the viewer understand how Ariyo partners:

- Discover assigned customer accounts.
- Manage implementation projects.
- Request access to private catalogs and enterprise workspaces.
- Submit marketplace assets and partner bundles.
- Track deployment health and customer adoption.
- Resolve customer implementation blockers.
- Escalate support and trust issues.
- Manage certification and partner quality status.
- Understand revenue, payouts, co-selling attribution, and commercial performance.
- Work within enterprise policy boundaries.

The page must communicate that Ariyo partners are trusted operators inside a governed AI Employee ecosystem.

---

## 2. Primary Audiences

### 2.1 External Partner Users

- Certified Ariyo implementation partners.
- Marketplace solution partners.
- Enterprise consultants.
- Regional deployment partners.
- System integrators.
- Agencies building AI Employee teams for customers.
- Training and enablement partners.

### 2.2 Internal Ariyo Users

- Partner operations managers.
- Customer success managers.
- Enterprise implementation leads.
- Marketplace operations teams.
- Trust and safety reviewers.
- Revenue operations.
- Finance and payout operations.
- Support escalation teams.

### 2.3 Enterprise Stakeholders Indirectly Affected

- Enterprise buyers.
- Customer admins.
- Security reviewers.
- Procurement stakeholders.
- Compliance teams.
- Executive sponsors.

---

## 3. Strategic Design Goal

The Partner Portal must show that Ariyo can scale through partners without losing governance.

The mockup must answer four questions immediately:

1. **What customers or deployments is this partner responsible for?**
2. **What work needs attention now?**
3. **What is the partner allowed to access or change?**
4. **How does Ariyo measure partner quality, trust, and outcomes?**

The page must balance partner empowerment with enterprise-grade control.

---

## 4. Required Product Positioning

The Partner Portal must position Ariyo as:

- An AI Employee Operating System.
- A governed enterprise deployment platform.
- A trusted Marketplace ecosystem.
- A partner-enabled implementation network.
- A measurable outcome platform.
- A platform where partner actions are auditable, permissioned, and quality-scored.

It must not position Ariyo as:

- A reseller marketplace.
- A freelancer portal.
- A basic affiliate dashboard.
- A loose service marketplace.
- A template-selling storefront.
- A casual AI automation community.

---

## 5. Global RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to every Partner Portal surface, including navigation, dashboard cards, tables, filters, empty states, modals, drawers, charts, form labels, input alignment, icons, breadcrumbs, dropdowns, step indicators, activity timelines, approval panels, revenue tables, customer lists, support tickets, and compliance evidence views.

If any other instruction conflicts with this law, this law wins for localization, internationalization, alignment, and bidirectional layout behavior.

### 5.1 RTL Requirements

For Persian/Farsi and Arabic:

- Sidebar appears on the right unless product strategy intentionally uses a mirrored shell.
- Primary content flows right to left.
- Table columns order from right to left.
- Status badges align to the right edge of their containers.
- Form labels, helper text, validation errors, and placeholders are right-aligned.
- Breadcrumbs, tabs, pagination, timelines, and progress steps are mirrored.
- Icons that imply direction must be mirrored where appropriate.
- Chart labels and legends must respect RTL reading order.
- Drawer panels should open from the right unless the action context requires otherwise.

### 5.2 LTR Requirements

For English and European LTR languages:

- Sidebar appears on the left.
- Primary content flows left to right.
- Table columns order from left to right.
- Form labels, helper text, validation errors, and placeholders are left-aligned.
- Breadcrumbs, tabs, pagination, timelines, and progress steps follow LTR order.
- Drawer panels should open from the right only when consistent with the LTR app shell convention.

---

## 6. Product Surface Name

Recommended surface name:

**Partner Portal**

Optional labels:

- Partner Workspace
- Partner Operations
- Partner Command Center
- Partner Success Console

Avoid:

- Seller Dashboard
- Affiliate Center
- Reseller Portal
- Vendor Panel
- Freelancer Workspace

---

## 7. Recommended Route Structure

```txt
/partners
/partners/overview
/partners/customers
/partners/customers/:customerId
/partners/deployments
/partners/deployments/:deploymentId
/partners/private-catalog
/partners/marketplace-assets
/partners/implementation
/partners/implementation/:projectId
/partners/certification
/partners/support
/partners/revenue
/partners/profile
/partners/settings
```

Enterprise-specific deep links:

```txt
/enterprise/:accountId/partner-access
/enterprise/:accountId/private-catalog/partner-requests
/enterprise/:accountId/implementation/partner-projects
```

Internal operations deep links:

```txt
/internal/partner-ops
/internal/partner-ops/:partnerId
/internal/partner-ops/reviews
/internal/partner-ops/escalations
```

---

## 8. Primary Mockup Screens

The first Partner Portal mockup package should include these screens:

1. Partner Portal Overview
2. Customer Deployments
3. Customer Deployment Detail
4. Implementation Project Board
5. Private Catalog Requests
6. Marketplace Asset Performance
7. Partner Certification & Trust Score
8. Support Escalations
9. Revenue & Payouts
10. Partner Profile & Team Access

The first visual mockup can focus on screens 1, 2, 4, 5, and 7.

---

## 9. Partner Portal Overview Screen

### 9.1 Purpose

The overview screen is the partner's daily command center.

It must show:

- Assigned customers.
- Active implementations.
- At-risk deployments.
- Pending approvals.
- Support escalations.
- Marketplace asset performance.
- Partner quality score.
- Certification status.
- Revenue summary.

### 9.2 Header

Required elements:

- Page title: `Partner Portal`
- Partner organization name.
- Partner tier badge.
- Certification status badge.
- Trust score badge.
- Primary CTA: `Start implementation` or `Submit template`
- Secondary CTA: `Request enterprise access`

Example header content:

```txt
Partner Portal
Certified Solutions Partner · Enterprise Implementation Tier
Trust Score: 94 / 100 · 12 active deployments
```

### 9.3 Top Summary Cards

Required cards:

1. Active customer deployments
2. At-risk deployments
3. Pending partner actions
4. Marketplace installs attributed
5. Partner quality score
6. Revenue this period

Each card must have:

- Label
- Value
- Trend
- Status indicator
- Drill-down action

Example:

```txt
Active Deployments
18
+4 this month
View customers
```

### 9.4 Priority Work Queue

A prominent queue must show the most important partner actions.

Recommended columns:

- Priority
- Customer
- Action needed
- Due date
- Owner
- Risk
- Status
- CTA

Example rows:

- Approve implementation plan for Acme Finance.
- Complete data residency review for Gulf Retail Group.
- Resolve failed integration test for Diba Denim.
- Submit evidence for certification renewal.
- Respond to enterprise private catalog request.

### 9.5 Partner Health Strip

Show partner health as a compact trust/quality system:

- Delivery quality
- Support responsiveness
- Customer satisfaction
- Template quality
- Compliance readiness
- Escalation rate

This must not feel punitive. It should feel like a quality improvement system.

---

## 10. Customer Deployments Screen

### 10.1 Purpose

This screen lets partners see all customer accounts, deployments, and responsibilities assigned to them.

### 10.2 Required Filters

- Customer status
- Deployment phase
- Plan: Basic / Pro / Smart / Enterprise
- Region
- Industry
- Partner role
- Risk status
- Owner
- Last activity
- Go-live date

### 10.3 Deployment Table

Required columns:

- Customer
- Plan
- Region
- Deployment phase
- AI Employees live
- Workflows live
- Health
- Risk
- Next milestone
- Partner owner
- Last update
- Actions

### 10.4 Deployment Phases

Supported phases:

- Discovery
- Solution design
- Sandbox
- Implementation
- Governance review
- Pilot
- Production launch
- Optimization
- Renewal/expansion

### 10.5 Row Actions

- Open deployment
- View implementation plan
- Request access
- Escalate issue
- Add note
- Upload evidence
- Schedule review

---

## 11. Customer Deployment Detail Screen

### 11.1 Purpose

This screen shows one customer deployment and the partner's allowed operational scope.

### 11.2 Required Sections

- Customer summary
- Deployment phase
- Assigned partner team
- Customer stakeholders
- AI Employees deployed
- Workflows deployed
- Open risks
- Governance requirements
- Implementation milestones
- Support tickets
- Audit trail
- Partner access scope

### 11.3 Access Scope Panel

The access scope panel is essential.

It must show:

- What the partner can view.
- What the partner can edit.
- What requires customer approval.
- What requires Ariyo review.
- What is blocked by policy.

Example:

| Area | Partner Permission | Requires Approval | Notes |
|---|---:|---:|---|
| Workflow configuration | Edit | Yes | Customer admin approval required before production. |
| Knowledge sources | View metadata only | Yes | No raw documents unless granted. |
| AI Employee policy | Suggest changes | Yes | Enterprise admin must approve. |
| Billing | No access | N/A | Hidden from partner. |

---

## 12. Implementation Project Board

### 12.1 Purpose

The implementation board is where partners manage delivery execution.

### 12.2 Recommended View Modes

- Kanban
- Timeline
- Checklist
- Milestone view
- Risk register

### 12.3 Kanban Columns

- Intake
- Design
- Build
- Review
- Pilot
- Launch
- Optimize

### 12.4 Task Card Requirements

Each task card must include:

- Task title
- Customer
- Owner
- Due date
- Required approval
- Risk level
- Dependency
- Related AI Employee
- Related workflow
- Evidence requirement

### 12.5 Implementation Milestone Checklist

Required milestones:

1. Business outcome confirmed
2. Workspace created
3. Data sources reviewed
4. AI Employee roles defined
5. Workflow scope approved
6. Permissions reviewed
7. Simulation completed
8. Security/compliance evidence attached
9. Customer admin approval received
10. Production launch approved
11. Post-launch monitoring enabled
12. Success review scheduled

---

## 13. Private Catalog Requests

### 13.1 Purpose

This screen lets partners request, submit, or manage private catalog assets for enterprise customers.

### 13.2 Required Request Types

- Add template to private catalog
- Build customer-specific template
- Request partner access to customer catalog
- Submit implementation bundle
- Request regional compliance review
- Request enterprise approval

### 13.3 Request Table Columns

- Request
- Customer
- Template/bundle
- Region
- Status
- Reviewer
- Risk level
- Required evidence
- Last update
- CTA

### 13.4 Statuses

- Draft
- Submitted
- Customer review
- Ariyo review
- Security review
- Compliance review
- Approved
- Rejected
- Needs changes
- Published to private catalog

### 13.5 Private Catalog Guardrail

The UI must make it clear that partners cannot bypass enterprise catalog controls.

Forbidden patterns:

- One-click publish to customer workspace without review.
- Hidden permission changes.
- Ambiguous access requests.
- Partner-controlled customer approvals.

---

## 14. Marketplace Asset Performance

### 14.1 Purpose

Partners need to see how their Marketplace assets perform, but the design must avoid vanity-only metrics.

### 14.2 Required Metrics

- Views
- Installs
- Qualified installs
- Active deployments
- Outcome score
- Customer satisfaction
- Review score
- Support burden
- Incident count
- Churn/ uninstall rate
- Revenue attribution

### 14.3 Template Performance Table

Columns:

- Asset name
- Type
- Trust label
- Certification level
- Installs
- Active deployments
- Outcome score
- Support tickets
- Revenue
- Health
- Actions

### 14.4 Recommended CTA Actions

- Improve listing
- View reviews
- Check health issues
- Submit update
- Request certification
- Open support trend

---

## 15. Partner Certification & Trust Score

### 15.1 Purpose

This screen shows whether a partner is trusted enough to operate in Ariyo's enterprise ecosystem.

### 15.2 Certification Levels

Recommended labels:

- Registered Partner
- Certified Builder
- Certified Implementation Partner
- Enterprise Implementation Partner
- Regional Compliance Partner
- Strategic Partner

### 15.3 Trust Score Dimensions

- Delivery quality
- Customer outcome performance
- Support responsiveness
- Compliance readiness
- Marketplace asset quality
- Incident history
- Review quality
- Documentation quality
- Training completion
- Policy adherence

### 15.4 Trust Score UI

The Trust Score should be visually clear but not gamified.

Required elements:

- Current score
- Status badge
- Improvement recommendations
- Expiring requirements
- Required evidence
- Certification renewal date
- Recent trust events

### 15.5 Example Copy

```txt
Your partner trust score is strong.
Two enterprise certification requirements expire in 21 days.
Complete evidence renewal to keep Enterprise Implementation Partner status active.
```

---

## 16. Support Escalations

### 16.1 Purpose

Partners need a controlled channel to escalate customer issues without bypassing customer governance or Ariyo support triage.

### 16.2 Required Sections

- Open escalations
- Customer-impacting blockers
- Security/compliance escalations
- Marketplace asset issues
- Partner support requests
- SLA status
- Resolution history

### 16.3 Escalation Form Requirements

Fields:

- Customer
- Deployment
- Issue type
- Severity
- Customer impact
- Related AI Employee
- Related workflow
- Evidence attached
- Steps already taken
- Requested action
- Partner contact

### 16.4 Severity Levels

- Low
- Medium
- High
- Critical
- Security-critical
- Compliance-critical

### 16.5 Guardrails

The form must prevent vague escalations.

Required evidence should be mandatory for high, critical, security-critical, and compliance-critical issues.

---

## 17. Revenue & Payouts

### 17.1 Purpose

Partners need commercial clarity without turning the portal into an affiliate dashboard.

### 17.2 Required Metrics

- Marketplace revenue
- Implementation revenue attribution
- Subscription influence
- Payout status
- Pending payouts
- Disputed payouts
- Refund adjustments
- Enterprise deal attribution
- Region/tax status

### 17.3 Payout Table

Columns:

- Period
- Source
- Customer/template
- Gross amount
- Adjustments
- Net payout
- Status
- Expected date
- Evidence/contract reference

### 17.4 Revenue Guardrail

Revenue UI must be secondary to customer success, trust, and implementation quality.

Do not make the Partner Portal feel like a commission-maximization product.

---

## 18. Partner Profile & Team Access

### 18.1 Purpose

The partner organization must manage its own team while respecting Ariyo platform and enterprise account permissions.

### 18.2 Required Sections

- Partner organization profile
- Team members
- Roles
- Certifications
- Regions served
- Industries served
- Marketplace assets
- Enterprise eligibility
- Payout profile
- Security requirements
- Audit history

### 18.3 Partner Team Roles

Recommended roles:

- Partner Owner
- Partner Admin
- Implementation Lead
- Solution Architect
- Marketplace Creator
- Support Specialist
- Revenue Viewer
- Compliance Contact

### 18.4 Access Controls

Partner users must only see customer data and workspace actions explicitly granted to them.

---

## 19. Navigation Architecture

### 19.1 Sidebar Items

Recommended Partner Portal sidebar:

- Overview
- Customers
- Deployments
- Implementation
- Private Catalog
- Marketplace Assets
- Certification
- Support
- Revenue
- Profile
- Settings

### 19.2 Top Bar Elements

- Global search
- Customer switcher
- Partner organization switcher
- Notifications
- Escalations badge
- Language switcher
- User profile

### 19.3 Breadcrumbs

Example:

```txt
Partner Portal / Customers / Diba Denim / Implementation Plan
```

For RTL, breadcrumb order and alignment must mirror appropriately.

---

## 20. Component Requirements

### 20.1 Required Components

- Partner summary cards
- Customer deployment table
- Implementation kanban board
- Milestone checklist
- Risk badges
- Certification status badge
- Trust score module
- Private catalog request cards
- Support escalation form
- Revenue summary chart
- Payout table
- Access scope matrix
- Evidence upload component
- Activity timeline
- Approval status chips
- Notification center

### 20.2 Status Badge System

Recommended statuses:

- Healthy
- Needs attention
- At risk
- Blocked
- Pending approval
- In review
- Approved
- Rejected
- Suspended
- Certification required

### 20.3 Risk Badge System

Recommended risk levels:

- Low
- Medium
- High
- Critical
- Compliance
- Security
- Data residency
- Customer impact

---

## 21. Basic / Pro / Smart Behavior

### 21.1 Basic

Basic partner-facing behavior should be limited.

May include:

- Simple partner profile.
- Limited customer visibility.
- Basic template submissions.
- Basic support requests.
- No enterprise private catalog controls.
- No advanced customer deployment analytics.

### 21.2 Pro

Pro partner behavior may include:

- Customer deployment list.
- Implementation board.
- Marketplace asset performance.
- Private catalog requests.
- Certification dashboard.
- Support escalation.
- Revenue/payout summary.

### 21.3 Smart / Enterprise

Smart/Enterprise partner behavior may include:

- Enterprise customer implementations.
- Advanced access scope controls.
- Partner quality scoring.
- Compliance evidence center.
- Private catalog governance.
- Region-aware controls.
- Co-selling attribution.
- Advanced support SLA workflows.
- Enterprise certification requirements.

---

## 22. Empty States

### 22.1 No Customers Assigned

```txt
No customer deployments assigned yet.
Once Ariyo or an enterprise customer grants your partner team access, deployments will appear here.
```

CTA: `View partner certification requirements`

### 22.2 No Marketplace Assets

```txt
You have not published any Marketplace assets yet.
Create a template, complete quality checks, and submit it for Ariyo review.
```

CTA: `Create marketplace asset`

### 22.3 No Escalations

```txt
No active escalations.
Your customer deployments currently have no unresolved partner-raised blockers.
```

CTA: `View deployment health`

---

## 23. Loading States

Loading states must be specific, not generic.

Examples:

- Loading customer deployments.
- Checking partner permissions.
- Fetching implementation milestones.
- Loading private catalog requests.
- Calculating trust score.
- Loading payout records.

Skeletons must respect RTL/LTR alignment.

---

## 24. Error States

### 24.1 Permission Error

```txt
You do not have access to this customer deployment.
Request access from the customer admin or Ariyo Partner Operations.
```

### 24.2 Certification Required

```txt
Enterprise deployment access requires active Enterprise Implementation Partner certification.
Complete the required certification steps to request access.
```

### 24.3 Region Restriction

```txt
This customer workspace is restricted to approved regional partners.
Your organization is not currently approved for this region.
```

### 24.4 Suspended Partner State

```txt
Your partner account is temporarily restricted.
Marketplace publishing and new customer access are paused until outstanding trust and compliance issues are resolved.
```

---

## 25. Accessibility Requirements

- All status indicators must include text labels, not color alone.
- Tables must support keyboard navigation.
- Filters must be accessible and screen-reader friendly.
- Kanban tasks must have accessible list alternatives.
- Charts must include table summaries.
- Evidence upload must support clear validation and progress states.
- RTL layouts must not break keyboard order.
- Modals and drawers must trap focus correctly.

---

## 26. Analytics Events

Recommended events:

```txt
partner_portal_viewed
partner_customer_deployment_opened
partner_access_request_started
partner_access_request_submitted
partner_implementation_task_created
partner_implementation_task_completed
partner_private_catalog_request_started
partner_private_catalog_request_submitted
partner_marketplace_asset_opened
partner_template_update_submitted
partner_support_escalation_started
partner_support_escalation_submitted
partner_certification_requirement_opened
partner_revenue_report_viewed
partner_payout_detail_opened
partner_trust_score_viewed
```

Each event should include:

- Partner ID
- Partner role
- Customer ID where applicable
- Deployment ID where applicable
- Region
- Plan
- Language direction
- Permission level
- Risk level where applicable

---

## 27. Frontend Handoff Requirements

The mockup handoff must include:

- Desktop layout.
- Tablet layout.
- Mobile layout.
- RTL version.
- LTR version.
- Sidebar behavior.
- Table responsiveness.
- Kanban fallback behavior.
- Drawer/modal specs.
- Empty states.
- Error states.
- Loading states.
- Permission states.
- Suspended/restricted states.
- Component inventory.
- Design tokens.
- Analytics event map.
- Accessibility notes.

---

## 28. Security and Privacy Requirements

The Partner Portal must never expose customer data beyond the partner's explicit access scope.

Required design principles:

- Show access boundaries clearly.
- Show when customer approval is required.
- Hide sensitive customer data by default.
- Do not expose raw knowledge documents unless explicitly allowed.
- Do not expose billing unless partner role allows it.
- Log partner actions in audit trails.
- Require evidence for high-risk actions.
- Show restricted states clearly.

---

## 29. Forbidden Patterns

Do not design the Partner Portal as:

- A simple affiliate dashboard.
- A revenue-first partner portal.
- A template seller storefront.
- A freelancer dashboard.
- A generic support portal.
- A CRM clone.
- A project board with no governance.
- A private catalog bypass mechanism.
- A customer data backdoor.
- A gamified partner leaderboard.

Do not allow:

- Unreviewed customer access.
- One-click enterprise deployment changes by partners.
- Hidden permission elevation.
- Partner-controlled customer approval.
- Vague compliance status.
- Ambiguous trust score meaning.

---

## 30. Mockup Acceptance Criteria

The mockup is acceptable only if it clearly shows:

- What the partner is responsible for.
- Which customers and deployments are assigned.
- What work needs attention.
- What permissions the partner has.
- What actions require approval.
- What customer data is restricted.
- How implementation work is managed.
- How private catalog requests are governed.
- How partner quality and certification are measured.
- How support escalations work.
- How revenue and payouts are visible without dominating the product.
- How RTL and LTR layouts behave.

---

## 31. Relationship to Other Ariyo Skills

This mockup specification depends on:

- `marketplace-partner-operations.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-installation-entitlements.md`
- `marketplace-creator-success-system.md`
- `marketplace-billing-payouts.md`
- `marketplace-compliance-evidence-center.md`
- `enterprise-implementation-methodology.md`
- `enterprise-professional-services-system.md`
- `enterprise-account-governance.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `trust-center-public-status.md`
- `product-surface-map.md`
- `ariyo-core-product-mockup-brief.md`

It should inform:

- Partner Portal frontend implementation.
- Partner Operations internal admin surfaces.
- Enterprise private catalog workflows.
- Marketplace partner onboarding.
- Implementation partner certification.
- Revenue attribution and partner payout operations.

---

## 32. Golden Rule

The Partner Portal must help partners scale Ariyo responsibly.

If the mockup helps partners sell more but does not help customers deploy safely, improve outcomes, respect permissions, and preserve enterprise trust, the mockup is wrong.
