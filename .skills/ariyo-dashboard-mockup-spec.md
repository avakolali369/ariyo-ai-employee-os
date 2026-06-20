# Ariyo Dashboard Mockup Specification Skill

## 1. Core Contract

Ariyo Dashboard Mockup Specification is not a generic SaaS dashboard layout.

It is the governed mockup specification for the primary in-product command surface where customers understand, manage, monitor, and improve their AI Employees, workflows, outcomes, approvals, alerts, marketplace suggestions, governance posture, and operational health.

The dashboard must show Ariyo as an AI Employee Operating System, not as a chatbot panel, automation list, prompt library, or analytics-only product.

The dashboard must help a customer answer five questions within seconds:

1. What AI Employees do we have?
2. What work are they doing?
3. Are they producing measurable outcomes?
4. What needs human attention or approval?
5. Are we safe, governed, and on track?

Ariyo must make the dashboard executive-readable, operator-actionable, admin-governed, and role-aware.

---

## 2. Mandatory Global RTL/LTR Layout Law

This specification must obey the Ariyo Global RTL/LTR Layout Law.

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to:

- page shell
- sidebar navigation
- top navigation
- cards
- tables
- charts
- badges
- forms
- modals
- drawers
- alerts
- empty states
- onboarding hints
- tooltips
- timeline components
- approval queues
- marketplace recommendation cards
- AI Employee cards
- notification panels
- mobile layouts
- responsive breakpoints

### 2.1 RTL Dashboard Behavior

For Persian and Arabic:

- sidebar appears on the right
- primary reading flow starts from the right
- card text is right-aligned
- tables start from the right
- action buttons align to the right unless intentionally grouped
- timeline direction follows RTL logic
- icons with directionality must be mirrored when semantically directional
- breadcrumbs flow right to left
- drawer panels open from the right unless the action context requires otherwise
- numeric metrics may remain visually stable, but labels and explanation text remain RTL
- charts must keep data integrity while legends, labels, tooltips, and annotations follow RTL

### 2.2 LTR Dashboard Behavior

For English and European languages:

- sidebar appears on the left
- primary reading flow starts from the left
- card text is left-aligned
- tables start from the left
- action buttons align to the left or standard LTR product conventions
- timeline direction follows LTR logic
- breadcrumbs flow left to right
- drawer panels open from the left or right depending on product convention, but content remains LTR

### 2.3 Implementation Rule

Do not hard-code left/right in reusable components.

Use logical properties:

- `inline-start`
- `inline-end`
- `margin-inline-start`
- `margin-inline-end`
- `padding-inline-start`
- `padding-inline-end`
- `border-inline-start`
- `border-inline-end`
- `text-align: start`
- `text-align: end`

The mockup must explicitly show both RTL and LTR layout examples for the main dashboard shell.

---

## 3. Strategic Purpose

The dashboard is Ariyo's daily operating cockpit.

It is the first screen a customer sees after entering the product. It must communicate:

- AI Employees are working
- business outcomes are measurable
- risky actions require governance
- workflows are visible
- approvals are under control
- marketplace suggestions are relevant
- customer progress is clear
- trust and safety are active
- Ariyo is an operating system for AI work

The dashboard should not overload users with every system Ariyo has. It should summarize and guide.

---

## 4. Primary Audiences

### 4.1 Founder / Business Owner

Needs:

- quick business value summary
- active AI Employees
- tasks completed
- time/cost saved
- risks and approvals
- upgrade suggestions

### 4.2 Operations Manager

Needs:

- workflow status
- failed automations
- team workload reduction
- task queues
- approvals
- escalations

### 4.3 AI Employee Manager

Needs:

- AI Employee performance
- run success rate
- tool usage
- memory/knowledge health
- prompt/version changes
- model/provider status

### 4.4 Enterprise Admin

Needs:

- governance posture
- policy violations
- permissions
- marketplace installs
- audit status
- region/data controls

### 4.5 Customer Success / Ariyo Internal Operator

Needs:

- customer health signals
- adoption progress
- launch readiness
- support risk
- expansion readiness

---

## 5. Dashboard Product Positioning

The dashboard headline must avoid generic SaaS language.

Bad examples:

- Dashboard
- Overview
- Welcome back
- Your workspace

Better examples:

- Your AI Workforce Command Center
- AI Employees at Work
- Today's AI Operations
- Work, Outcomes, and Governance in One Place

Preferred default for English:

> AI Employees at Work

Preferred default for Persian:

> کارمندان هوش مصنوعی در حال انجام کار

Preferred subtitle:

> Monitor work, outcomes, approvals, risks, and opportunities across your AI workforce.

Persian subtitle:

> وضعیت کارها، نتایج، تأییدیه‌ها، ریسک‌ها و فرصت‌های تیم هوش مصنوعی خود را در یک نمای مرکزی ببینید.

---

## 6. Dashboard Information Architecture

The first dashboard mockup must include the following zones:

1. App Shell
2. Top Status Bar
3. Primary Summary Strip
4. AI Employee Overview
5. Outcome Intelligence Panel
6. Workflow & Automation Status
7. Approvals & Human Review Queue
8. Alerts & Risk Watch
9. Marketplace Recommendations
10. Governance & Trust Status
11. Quick Actions
12. Activity Timeline

---

## 7. App Shell Mockup Requirements

### 7.1 Desktop Shell

The desktop shell must include:

- sidebar navigation
- top bar
- workspace selector
- plan badge
- search/command palette entry
- notification icon
- user/profile menu
- main content area
- optional right/left contextual drawer depending on locale

### 7.2 Sidebar Navigation

Primary navigation items:

- Dashboard
- AI Employees
- Workflows
- Knowledge
- Marketplace
- Approvals
- Outcomes
- Governance
- Reports
- Settings

Enterprise additions:

- Admin Console
- Audit Logs
- Policies
- Vendors
- Private Catalog

Creator/partner additions should not appear in customer dashboard unless the user has those roles.

### 7.3 Navigation Hierarchy

Dashboard must be level 1.

AI Employees, Marketplace, Governance, and Outcomes must be visible because they define Ariyo's differentiation.

Billing, support, and advanced administration may be secondary.

---

## 8. Top Status Bar

The top status bar must show:

- workspace name
- plan: Basic / Pro / Smart / Enterprise
- environment: Production / Sandbox / Demo
- system health badge
- AI budget status
- pending approvals count
- notification center

Example:

> Workspace: Diba Denim | Plan: Pro | Environment: Production | Health: Stable | Pending approvals: 3

Persian RTL example:

> فضای کاری: دیبا دنیم | پلن: Pro | محیط: Production | سلامت: پایدار | تأییدیه‌های در انتظار: ۳

---

## 9. Primary Summary Strip

This is the first dashboard content block.

It must include 4 to 6 metric cards.

Recommended default cards:

1. Active AI Employees
2. Tasks Completed
3. Outcomes Achieved
4. Pending Approvals
5. Workflow Health
6. AI Cost Status

### 9.1 Metric Card Rules

Each metric card must include:

- label
- value
- trend
- short explanation
- status indicator
- optional CTA

Example:

- Active AI Employees: 7
- Tasks Completed Today: 184
- Outcomes Achieved: 12
- Pending Human Reviews: 3
- Workflow Health: 96%
- AI Cost Status: Within Budget

### 9.2 Avoid Vanity Metrics

Do not make the main dashboard depend on:

- number of prompts generated
- number of chats
- raw token usage without value context
- vague productivity percentage
- unverified ROI

Metrics must connect to work, outcomes, safety, or governance.

---

## 10. AI Employee Overview Section

This section shows the customer's AI workforce.

### 10.1 AI Employee Card

Each AI Employee card must include:

- avatar/icon
- AI Employee name
- role/function
- current status
- tasks completed
- success rate
- last activity
- risk/approval badge
- outcome contribution
- quick action menu

Example roles:

- Sales Assistant
- Customer Support Agent
- Finance Analyst
- Content Strategist
- Workflow Operator
- Compliance Reviewer

### 10.2 Status States

AI Employee states:

- Active
- Waiting for approval
- Needs attention
- Paused
- Degraded
- Setup incomplete
- In sandbox
- Disabled by policy

### 10.3 Card Actions

Actions:

- View details
- Review tasks
- Open approvals
- Edit configuration
- Pause
- Run simulation
- View audit trail

Dangerous actions must not be primary buttons.

---

## 11. Outcome Intelligence Panel

This panel is a differentiator.

It must show that Ariyo measures real value, not activity.

### 11.1 Required Data

- outcomes completed
- active success goals
- outcome confidence
- time saved estimate
- cost avoided estimate
- revenue influenced estimate
- customer-confirmed outcomes
- low-confidence warnings

### 11.2 Example Panel

Title:

> Business Outcomes

Cards:

- 12 outcomes completed this week
- 4 workflows improved
- 27 customer tickets resolved by AI Employees
- 3 approvals reduced manual risk
- ROI confidence: Medium

### 11.3 Confidence Rule

Never show ROI as absolute truth unless evidence supports it.

Use confidence labels:

- Estimated
- Customer confirmed
- Low confidence
- Verified by workflow evidence
- Needs review

---

## 12. Workflow & Automation Status Section

This section shows operational reliability.

### 12.1 Required Components

- workflow status list
- success/failure indicators
- last run
- next scheduled run
- owner
- linked AI Employee
- automation risk level
- retry/remediation status

### 12.2 Workflow States

- Running normally
- Waiting for input
- Waiting for approval
- Failed
- Degraded
- Paused by policy
- Auto-remediation active
- Needs reconnect

### 12.3 Dashboard Display

Use a compact table or grouped cards.

Columns:

- Workflow
- AI Employee
- Status
- Last Run
- Outcome
- Attention Needed

RTL/LTR table alignment must follow global layout law.

---

## 13. Approvals & Human Review Queue

This section shows governed human-in-the-loop control.

### 13.1 Required Approval Types

- AI action approval
- Marketplace install approval
- Workflow change approval
- Policy exception approval
- High-cost run approval
- External message approval
- Data access approval
- Tool permission approval

### 13.2 Approval Card

Each approval item must include:

- request title
- requester
- AI Employee/template involved
- risk level
- reason for approval
- evidence summary
- deadline/SLA
- approve/reject/review buttons

### 13.3 Button Safety

Approval buttons must not be visually casual.

Primary actions:

- Review details
- Approve
- Reject
- Request changes

For high-risk approvals, default CTA should be Review Details, not Approve.

---

## 14. Alerts & Risk Watch

This section protects trust.

### 14.1 Alert Categories

- failed workflow
- policy violation
- permission drift
- AI safety warning
- model/provider degradation
- cost anomaly
- marketplace asset issue
- integration broken
- security event
- pending renewal/procurement risk

### 14.2 Severity Levels

- Info
- Notice
- Warning
- Critical
- Blocked

### 14.3 Alert Card Requirements

Each alert must include:

- severity
- affected object
- reason
- customer impact
- recommended next action
- owner
- timestamp

Avoid vague alerts like "Something went wrong."

---

## 15. Marketplace Recommendations Section

The dashboard should surface Marketplace value without becoming an ad surface.

### 15.1 Recommendation Principles

Recommendations must be:

- relevant to customer goals
- plan-aware
- trust-label-aware
- region-compatible
- policy-compatible
- installable or clearly blocked
- explainable

### 15.2 Recommendation Card

Each card must include:

- template name
- category
- trust labels
- plan fit
- outcome promise
- setup effort
- install/sandbox CTA
- explanation: "Recommended because..."

### 15.3 Forbidden Recommendation Behavior

Do not recommend solely because:

- paid placement
- raw popularity
- high commission
- creator influence
- newness
- internal preference

Sponsored recommendations must be labeled.

---

## 16. Governance & Trust Status Section

This section makes Ariyo enterprise-ready.

### 16.1 Required Indicators

- policies active
- pending policy exceptions
- audit health
- data residency status
- marketplace catalog restrictions
- SSO/SCIM status
- approvals enabled
- trust/safety status
- unresolved compliance evidence

### 16.2 Visual Treatment

This section should look calm, serious, and operational.

Avoid fear-based design.

Use concise statuses:

- Protected
- Needs review
- Policy blocked
- Evidence missing
- Ready
- Incomplete

---

## 17. Quick Actions

Quick actions must match role and permissions.

### 17.1 Customer Operator Actions

- Create AI Employee
- Build workflow
- Install template
- Review approvals
- Connect integration
- Invite teammate

### 17.2 Admin Actions

- Configure policy
- Review audit log
- Manage marketplace access
- Set approval rules
- Configure SSO/SCIM

### 17.3 Creator/Partner Actions

These should not appear unless user has creator/partner role.

---

## 18. Activity Timeline

Timeline shows what happened recently.

Events:

- AI Employee completed task
- Workflow ran
- Approval requested
- Approval granted/rejected
- Template installed
- Policy changed
- Alert resolved
- Marketplace recommendation accepted
- Outcome achieved

Timeline must be filterable by:

- AI Employee
- workflow
- approval
- alert
- marketplace
- governance
- outcome

---

## 19. Dashboard States

Mockup must include states for:

1. New customer empty state
2. Basic customer with one AI Employee
3. Pro customer with workflows and marketplace suggestions
4. Smart customer with advanced AI, governance, and outcomes
5. Enterprise customer with approvals, policies, and audit
6. Risk state with critical alerts
7. Loading state
8. Permission-restricted view
9. Sandbox/demo environment view
10. Mobile responsive view

---

## 20. Empty State Design

New customer dashboard must not feel empty.

It should guide setup:

- Create your first AI Employee
- Choose a starter template
- Connect your first integration
- Define your first outcome
- Invite your team

Empty state headline:

> Build your first AI Employee workspace

Persian:

> اولین فضای کاری کارمندان هوش مصنوعی خود را بسازید

CTA hierarchy:

1. Create AI Employee
2. Explore Marketplace templates
3. Watch quick demo

---

## 21. Plan-Aware Dashboard Behavior

### 21.1 Basic

Dashboard should emphasize:

- simple setup
- first AI Employee
- limited workflows
- low-risk tasks
- safe templates
- clear upgrade path

Hide or simplify:

- advanced governance
- complex marketplace controls
- enterprise audit
- multi-agent orchestration

### 21.2 Pro

Dashboard should emphasize:

- team workflows
- integrations
- approvals
- marketplace templates
- measurable operations
- department-level value

### 21.3 Smart

Dashboard should emphasize:

- advanced AI Employees
- multi-agent systems
- outcome intelligence
- governance signals
- cost controls
- marketplace automation
- advanced insights

### 21.4 Enterprise

Dashboard should emphasize:

- policy posture
- audit readiness
- workspace governance
- approvals
- SSO/SCIM
- private catalog
- data residency
- trust evidence

---

## 22. Responsive Behavior

### 22.1 Desktop

Use full layout:

- persistent sidebar
- summary strip
- two-column or three-column dashboard sections
- charts/tables visible
- side drawers available

### 22.2 Tablet

Use collapsible sidebar.

Cards stack in two columns.

Approvals and alerts should stay visible above fold.

### 22.3 Mobile

Use bottom navigation or compact top navigation.

Priority order:

1. alerts/approvals needing action
2. AI Employee status
3. outcome summary
4. workflow status
5. marketplace suggestions

Mobile must obey RTL/LTR law.

For Persian/Arabic, mobile navigation direction and icon placement must support RTL reading flow.

---

## 23. Visual Direction

The dashboard should feel:

- premium
- calm
- enterprise-ready
- operational
- intelligent
- trustworthy
- modern
- not playful
- not crypto-like
- not chatbot-like

### 23.1 Visual Metaphor

Use the metaphor of an operating cockpit for AI work.

Avoid sci-fi robot-heavy visuals.

Use:

- structured cards
- status indicators
- subtle depth
- clean information hierarchy
- calm badges
- precise iconography
- workflow lines only when useful

---

## 24. Component Requirements

Core components:

- AppShell
- SidebarNav
- TopStatusBar
- WorkspaceSelector
- PlanBadge
- MetricCard
- AIEmployeeCard
- OutcomePanel
- WorkflowStatusTable
- ApprovalQueue
- AlertCard
- MarketplaceRecommendationCard
- GovernanceStatusCard
- ActivityTimeline
- QuickActionButton
- StatusBadge
- RiskBadge
- ConfidenceBadge
- EmptyState
- CommandPaletteTrigger
- NotificationCenter

All components must support:

- RTL/LTR
- dark/light readiness
- responsive layout
- accessibility
- keyboard navigation
- loading state
- empty state
- error state
- permission-restricted state

---

## 25. Data Objects Shown in Mockup

Suggested mock data:

### 25.1 AI Employees

- Sales Follow-up Assistant
- Customer Support Agent
- Finance Document Analyst
- Content Operations Strategist
- Compliance Review Assistant

### 25.2 Workflows

- Lead qualification follow-up
- Customer ticket triage
- Invoice review summary
- Weekly marketing content plan
- Marketplace template health check

### 25.3 Outcomes

- 38 qualified leads followed up
- 124 tickets triaged
- 9 invoices flagged for review
- 4 content plans approved
- 3 risky automations blocked

### 25.4 Alerts

- Gmail integration reconnect required
- High-cost AI run requires approval
- Marketplace template update available
- Policy exception pending review

---

## 26. Dashboard Copywriting Rules

Copy must be:

- clear
- operational
- outcome-oriented
- low-hype
- specific
- enterprise-safe

Avoid:

- magical AI claims
- absolute ROI without evidence
- vague productivity claims
- overpromising automation
- emotional fear-based alerts

Examples:

Bad:

> Your AI is crushing it.

Good:

> 4 AI Employees completed 184 tasks today with 96% workflow success.

Bad:

> Save 80% of your time instantly.

Good:

> Estimated 14 hours of manual work reduced this week. Confidence: medium.

---

## 27. Accessibility Requirements

Dashboard must support:

- WCAG-conscious contrast
- visible focus states
- keyboard navigation
- readable font sizes
- ARIA labels for status cards
- non-color-only status indicators
- reduced motion option
- screen reader-friendly metric labels
- accessible tables
- localized numeral support where appropriate

---

## 28. Analytics Events

Track events:

- `dashboard_viewed`
- `dashboard_metric_clicked`
- `ai_employee_card_opened`
- `workflow_status_opened`
- `approval_review_started`
- `approval_action_taken`
- `alert_opened`
- `marketplace_recommendation_clicked`
- `marketplace_template_sandbox_started`
- `quick_action_clicked`
- `governance_status_opened`
- `outcome_panel_opened`
- `dashboard_locale_direction_rendered`

Event payloads must include:

- organization_id
- workspace_id
- user_role
- plan
- locale
- direction: `rtl` or `ltr`
- surface_id
- permission_scope
- environment

Do not include sensitive customer content in analytics payloads.

---

## 29. Frontend Handoff Requirements

Mockup handoff must include:

- desktop RTL frame
- desktop LTR frame
- mobile RTL frame
- mobile LTR frame
- component list
- spacing rules
- state variants
- sample data
- navigation map
- responsive behavior
- accessibility notes
- motion notes
- analytics annotations
- empty/error/loading states

---

## 30. MVP Dashboard Cut

MVP mockup must include:

- app shell
- summary metrics
- AI Employee cards
- workflow status
- approvals queue
- alerts
- marketplace suggestions
- governance status lite
- RTL/LTR versions

Do not include every enterprise admin system in the first dashboard mockup.

---

## 31. Investor Demo Dashboard Cut

Investor version must emphasize:

- category clarity
- AI Employees doing work
- outcomes
- marketplace suggestions
- governance posture
- trust and safety
- revenue/plan hints

It should make Ariyo look like a platform company.

---

## 32. Enterprise Sales Demo Dashboard Cut

Enterprise version must emphasize:

- SSO/SCIM ready
- policy active
- approvals pending
- audit health
- private catalog
- data residency
- enterprise support
- outcome evidence

---

## 33. Mockup Acceptance Criteria

The dashboard mockup is acceptable only if:

- it clearly shows AI Employees as operational workers
- it shows outcomes, not only usage
- it includes human review and approvals
- it includes governance and trust posture
- it includes marketplace suggestions without feeling like ads
- it supports Basic/Pro/Smart differences
- it includes RTL and LTR layout rules
- it looks enterprise-ready
- it gives clear next actions
- it is implementable by frontend engineers

---

## 34. Forbidden Dashboard Patterns

Do not create:

- chatbot-first dashboard
- vague analytics dashboard
- decorative AI dashboard with no work state
- dashboard with fake ROI certainty
- dashboard without approvals
- dashboard without trust/governance cues
- dashboard with marketplace ads disguised as recommendations
- dashboard that ignores plan differences
- dashboard that only works in LTR
- dashboard that treats Persian/Arabic as translated English layout
- dashboard that hides risk
- dashboard that overwhelms Basic users with Enterprise controls
- dashboard that gives dangerous actions as primary buttons

---

## 35. Golden Rule

The Ariyo dashboard must show that AI Employees are not just configured.

They are working, measured, governed, improving, and accountable.
