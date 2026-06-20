# Ariyo Customer Success Console Mockup Specification

## Core Contract

Ariyo Customer Success Console Mockup Specification is not a generic CRM dashboard, support queue, or customer-health table.

It is the governed mockup specification for the internal and enterprise-facing Customer Success operating surface where Ariyo customer success managers, implementation leads, support operators, renewal owners, partner managers, executives, and AI-assisted success teams understand customer health, onboarding progress, AI Employee adoption, workflow usage, business outcomes, risks, renewals, expansion opportunities, success playbooks, escalations, trust issues, and executive business review readiness.

The Customer Success Console must make Ariyo feel like a serious operating platform with measurable customer outcomes, not a SaaS tool with passive usage charts.

---

## 1. Purpose

This mockup specification defines the first high-confidence design for Ariyo's Customer Success Console.

The page must help Ariyo operators answer:

- Which customers are healthy, at risk, expanding, blocked, or under-adopted?
- Which AI Employees are producing measurable outcomes?
- Which workflows are active, stalled, failing, or waiting for approval?
- Which customers need onboarding help, governance review, trust support, renewal action, or executive attention?
- Which success playbook should run next?
- Which Marketplace templates, partner services, or enterprise features should be recommended?
- Which accounts require human escalation rather than automated outreach?

This surface converts product activity into customer success action.

---

## 2. Strategic Role in Ariyo

The Customer Success Console connects these Ariyo domains:

- Customer lifecycle automation
- Customer success playbooks
- Enterprise customer health scoring
- Enterprise renewal and expansion
- Enterprise adoption success insights
- Executive business review
- Marketplace customer support operations
- Operations command center
- Product analytics and growth
- Observability and analytics events
- AI Employee architecture
- Workflow automation
- Pricing and packaging
- Marketplace recommendations
- Trust center and public status
- Compliance evidence
- Partner operations

It must not be treated as a separate back-office tool. It is the operating cockpit for making customers successful with AI Employees.

---

## 3. Primary Users

### Customer Success Manager

Needs to know customer health, adoption, blockers, playbooks, next actions, risks, renewals, and executive readiness.

### Implementation Lead

Needs onboarding progress, integration status, workflow rollout, training status, sandbox/demo progress, and deployment blockers.

### Support Operator

Needs escalations, incidents, tickets, SLA signals, affected AI Employees, customer communications, and root-cause context.

### Renewal / Expansion Owner

Needs renewal stage, usage depth, value delivered, expansion potential, product gaps, risk level, stakeholder engagement, and recommended plan changes.

### Partner Manager

Needs partner-assisted deployments, private catalog requests, implementation quality, escalations, customer outcomes, and partner attribution.

### Executive / Leadership

Needs portfolio health, revenue risk, expansion pipeline, enterprise readiness, strategic accounts, launch readiness, and customer outcome evidence.

### AI Success Assistant

May suggest next actions, summarize risks, draft outreach, recommend playbooks, identify low adoption patterns, and prepare QBR evidence — but must not override human judgment for sensitive account decisions.

---

## 4. Page Position in Product Surface Map

The Customer Success Console belongs to Ariyo's internal and success operations surfaces.

It connects to:

- Dashboard
- Operations Command Center
- Internal Admin Backoffice
- Enterprise Account Governance
- Customer Lifecycle Automation
- Enterprise Customer Health Scoring
- Enterprise Renewal Expansion System
- Enterprise Executive Business Review
- Marketplace Customer Support Operations
- Partner Portal
- Trust Center
- Sales CRM Pipeline
- Revenue Operations System

It should not be placed inside the normal customer-facing workspace navigation unless the user is an internal Ariyo operator or a customer-side success administrator.

---

## 5. Main Mockup Goal

The first mockup must show a premium, operational, enterprise-ready success console with:

1. Portfolio-level account health
2. Customer segmentation and prioritization
3. Health score reasoning
4. Onboarding progress
5. AI Employee adoption and outcome metrics
6. Workflow reliability and blockers
7. Renewal and expansion signals
8. Risk alerts and escalations
9. Success playbooks and next actions
10. Executive review readiness
11. Marketplace and partner success signals
12. Trust/compliance/support visibility

The design must make the CSM feel in control, not overloaded.

---

## 6. Required Information Architecture

The Customer Success Console should include these primary navigation areas:

- Portfolio Overview
- Accounts
- Onboarding
- Adoption
- Health
- Risks
- Playbooks
- Renewals
- Expansion
- QBR / EBR
- Support Escalations
- Marketplace Adoption
- Partner-Assisted Accounts
- Reports
- Settings

The first mockup may focus on Portfolio Overview, but must make adjacent surfaces visible through navigation and contextual links.

---

## 7. Main Layout Structure

### Recommended Desktop Layout

- Left sidebar: internal success navigation
- Top bar: global search, account segment filter, date range, owner filter, notifications, user profile
- Main canvas: portfolio health and action prioritization
- Right insight rail: AI-suggested actions, urgent risks, playbook recommendations, upcoming renewals
- Optional bottom drawer: selected account preview

### Main Zones

1. Page title and filters
2. Portfolio summary cards
3. Priority accounts table / board
4. Health trend visualization
5. Onboarding/adoption funnel
6. Risk and escalation panel
7. Renewal/expansion panel
8. Playbook action queue
9. AI-generated success insights

---

## 8. Header Requirements

The page header should include:

- Title: `Customer Success Console`
- Subtitle: `Monitor customer health, adoption, outcomes, renewals, risks, and success actions.`
- Global account search
- Segment filter
- Plan filter: Basic / Pro / Smart / Enterprise
- Owner filter
- Region filter
- Date range selector
- Export report action
- Create playbook action
- Prepare EBR action

Do not overload the header with too many buttons. Use a primary action and a secondary overflow menu.

---

## 9. Portfolio Summary Cards

The top summary area should include cards for:

- Active customers
- Healthy accounts
- At-risk accounts
- Accounts in onboarding
- Renewal due soon
- Expansion-ready accounts
- Open escalations
- Average AI Employee adoption
- Outcome value delivered
- Marketplace adoption rate

Each card should support:

- Current value
- Trend indicator
- Change over selected period
- Status color or severity
- Link to filtered detail view

Avoid vanity metrics. Every metric must lead to an operational decision.

---

## 10. Customer Health Score System

The mockup must show that health score is explainable.

Health score should combine:

- Product usage
- AI Employee activation
- Workflow completion rate
- Outcome achievement
- User adoption
- Onboarding progress
- Support burden
- Incident history
- Governance blockers
- Marketplace adoption
- Stakeholder engagement
- Renewal proximity
- Billing/payment risk
- Partner implementation quality
- Data/integration completeness

Health score must never appear as a magic number without explanation.

### Required Health Score States

- Excellent
- Healthy
- Watch
- At Risk
- Critical
- Unknown / insufficient data

### Health Score Details

For each customer row or detail drawer, show:

- Score
- Score trend
- Top positive drivers
- Top negative drivers
- Recommended next action
- Confidence level
- Last updated timestamp

---

## 11. Priority Account Table

The central table or board should show prioritized customer accounts.

Required columns:

- Account name
- Segment
- Plan
- Owner
- Health score
- Health trend
- Adoption stage
- Active AI Employees
- Workflow success rate
- Outcome progress
- Renewal date
- Expansion signal
- Open risks
- Next action

Optional columns:

- Region
- Marketplace installs
- Partner involved
- Support SLA status
- Executive sponsor
- Last touch
- QBR readiness

Rows must be scannable and action-oriented.

---

## 12. Account Row States

Each customer row must support:

- Healthy
- At risk
- Critical
- New onboarding
- Expansion opportunity
- Renewal pending
- Support escalation
- Governance blocked
- Payment/billing issue
- Low adoption
- High outcome value
- Partner-managed
- Enterprise review active

Use clear status chips, not vague icons.

---

## 13. Account Preview Drawer

Clicking a customer should open an account preview drawer.

Required sections:

- Account summary
- Health explanation
- Active AI Employees
- Key workflows
- Outcome metrics
- Open risks
- Recent incidents
- Renewal status
- Expansion recommendations
- Current success playbook
- Key contacts
- Last communication
- Recommended next actions

The drawer should allow quick decisions without navigating away.

---

## 14. Customer Detail Link

The mockup should imply a full customer detail page with tabs:

- Overview
- Adoption
- AI Employees
- Workflows
- Outcomes
- Users
- Marketplace
- Support
- Risks
- Governance
- Billing
- Renewal
- Expansion
- Timeline
- EBR

The first mockup does not need full detail pages, but it must define how the console links into them.

---

## 15. Onboarding Management

The console must show onboarding status across customers.

Required onboarding stages:

1. Contract signed
2. Workspace created
3. Admin invited
4. SSO/SCIM configured
5. Data sources connected
6. First AI Employee created
7. First workflow launched
8. Governance configured
9. Team trained
10. Outcome tracking enabled
11. First value reached
12. Onboarding complete

Each stage should include:

- Completion percentage
- Owner
- Blocker status
- Due date
- Risk level
- Next step

---

## 16. Adoption Insights

Adoption should not mean login count only.

The mockup must include adoption signals such as:

- Active users
- Activated admins
- AI Employees created
- AI Employees launched
- Workflows created
- Workflows run successfully
- Marketplace templates installed
- Human approval participation
- Knowledge sources connected
- Integration usage
- Repeated weekly usage
- Outcome tracking completeness

Show adoption as a journey, not a bar chart alone.

---

## 17. AI Employee Success Section

The console should summarize AI Employee performance by account.

Required signals:

- Number of AI Employees active
- Number in draft
- Number pending approval
- Number paused
- Number failing or degraded
- Most valuable AI Employee
- Lowest performing AI Employee
- Costliest AI Employee
- Highest-risk AI Employee
- Most adopted AI Employee

This section should help CSMs guide customers toward value.

---

## 18. Outcome Intelligence Section

Ariyo must connect success to outcomes.

Required outcome indicators:

- Time saved
- Tasks completed
- Escalations reduced
- Response time improved
- Revenue influenced
- Cost controlled
- Compliance evidence generated
- Support deflection
- Workflow throughput
- Adoption milestone reached

The design must distinguish between:

- Measured outcomes
- Estimated outcomes
- Customer-reported outcomes
- AI-suggested outcomes
- Unverified claims

Never present estimates as guaranteed ROI.

---

## 19. Renewal and Expansion Panel

The console must show renewal and expansion context.

Required fields:

- Renewal date
- Contract value
- Plan
- Usage vs entitlement
- Adoption depth
- Outcome evidence
- Sponsor engagement
- Support burden
- Expansion signal
- Churn risk
- Recommended renewal action

Expansion signals may include:

- More departments using Ariyo
- Workflow volume increasing
- Marketplace template adoption
- Need for Smart plan
- Governance scale requirements
- Additional integrations
- Partner services need
- Multi-region requirements

---

## 20. Risk Watch Panel

Risk watch must surface operational and commercial risks.

Risk categories:

- Low adoption
- Failed onboarding
- Workflow failures
- AI Employee incidents
- Governance blockers
- Security review delay
- Support escalation
- Billing issue
- Renewal risk
- Executive sponsor inactive
- Marketplace install failure
- Integration outage
- Region/data residency concern
- Partner delivery issue

Each risk must show:

- Severity
- Account affected
- Root cause summary
- Owner
- Recommended action
- Due date
- Escalation path

---

## 21. Success Playbook Queue

The console must include an action queue driven by playbooks.

Example playbooks:

- New Enterprise Onboarding
- First AI Employee Activation
- Low Adoption Recovery
- Workflow Failure Recovery
- Governance Review Preparation
- Marketplace Adoption Boost
- Renewal Readiness
- Expansion Discovery
- Executive Business Review
- Support Escalation Recovery
- Partner Implementation Check
- Smart Plan Upsell Readiness

Each playbook card should show:

- Account
- Trigger reason
- Suggested next action
- Owner
- Deadline
- Confidence
- Automation eligibility
- Human review requirement

---

## 22. AI-Assisted Success Recommendations

The console may include AI-generated recommendations, but must clearly label them.

Allowed AI suggestions:

- Summarize account health
- Identify adoption blockers
- Recommend a playbook
- Draft outreach copy
- Prepare QBR notes
- Suggest Marketplace templates
- Suggest training content
- Highlight renewal risks
- Detect silent churn patterns
- Summarize support incidents

Not allowed without human confirmation:

- Sending customer communications
- Changing account plan
- Modifying pricing
- Promising ROI
- Changing governance settings
- Closing escalations
- Updating health status manually
- Offering legal/compliance commitments

---

## 23. Executive Business Review Readiness

The console should show EBR/QBR readiness for strategic accounts.

Required readiness checklist:

- Outcome evidence available
- Usage trend available
- AI Employee performance summary
- Workflow impact summary
- Marketplace adoption summary
- Support/escalation summary
- Renewal context
- Expansion opportunities
- Executive sponsor identified
- Risks and asks documented
- Slide/report export ready

The interface should support preparing executive review material without requiring manual data hunting.

---

## 24. Marketplace Adoption Section

Because Ariyo includes a Marketplace, the console must track Marketplace adoption.

Required metrics:

- Templates installed
- Templates active
- Templates abandoned
- Install failures
- Most used templates
- Highest outcome templates
- Certified template adoption
- Private catalog usage
- Marketplace support requests
- Template review/reputation issues

This section should help CSMs recommend relevant templates safely.

---

## 25. Partner-Assisted Account Section

If a partner is involved, the console should show partner context.

Required fields:

- Partner name
- Certification level
- Implementation status
- Open tasks
- Customer satisfaction signal
- Delivery risk
- Revenue attribution
- Support escalations
- Marketplace assets involved
- Private catalog requests

Partner information must not expose confidential partner commercial terms to unauthorized users.

---

## 26. Support and Escalation Section

The console must connect support data to customer health.

Required signals:

- Open tickets
- Escalated tickets
- SLA risk
- Incident involvement
- Support sentiment
- Repeated issue categories
- AI Employee affected
- Workflow affected
- Customer impact
- Resolution owner

Support issues must feed health score and playbook recommendations.

---

## 27. Trust, Security, and Compliance Signals

Enterprise customers often need trust support.

The console should show:

- Security review status
- Compliance evidence requests
- Data residency requirements
- Legal review status
- DPA / policy request status
- Trust Center access
- Audit report request
- Enterprise procurement blocker
- Marketplace compliance evidence needs

This section should not expose sensitive documents unless the user role permits it.

---

## 28. Required Visual Hierarchy

The design should prioritize:

1. What needs attention now?
2. Which accounts are at risk?
3. Which accounts are expanding?
4. Which accounts are blocked?
5. Which actions should the CSM take today?
6. Which outcomes can be proven?
7. Which customers are ready for renewal or executive review?

Avoid making the page a dense reporting dashboard with no action prioritization.

---

## 29. Component Requirements

Required components:

- Page shell
- Account search
- Filter bar
- Summary metric cards
- Health score badge
- Health trend sparkline
- Account table
- Priority board
- Risk cards
- Playbook cards
- Action queue
- Account preview drawer
- Timeline component
- Segment chips
- Plan badges
- Owner avatars
- Status chips
- Confidence badge
- AI suggestion card
- Export/report button
- Empty states
- Loading states
- Error states
- Permission-blocked states

All components must follow Ariyo design, responsive, accessibility, and RTL/LTR laws.

---

## 30. Empty States

Required empty states:

- No customers yet
- No accounts assigned to this CSM
- No risks detected
- No playbooks active
- No renewal data available
- No adoption data available
- No Marketplace installs
- No support escalations
- No EBR-ready accounts

Empty states must guide the operator toward meaningful setup or data connection.

---

## 31. Loading States

Loading states should appear for:

- Portfolio summary
- Health score computation
- Account table
- AI recommendations
- Playbook queue
- EBR readiness
- Renewal data
- Marketplace usage
- Support escalation data

Use skeletons, not spinners only.

---

## 32. Error States

Required error states:

- Health score unavailable
- Analytics pipeline delayed
- CRM sync failed
- Billing data unavailable
- Support system unavailable
- Marketplace usage sync failed
- Permission denied
- Account not found
- AI recommendation failed

Errors must explain operational impact and next action.

---

## 33. Permission and Role States

Different internal users should see different data.

### CSM

Can view assigned accounts, health, playbooks, adoption, renewal context, and support summary.

### CS Leader

Can view all portfolio accounts, team workload, risk distribution, renewal risk, and expansion pipeline.

### Support Operator

Can view escalations, incidents, support-related health impact, and customer context.

### Finance / RevOps

Can view renewal, billing, plan, entitlement, expansion, and revenue risk data.

### Partner Manager

Can view partner-assisted accounts and partner performance.

### Executive

Can view aggregated portfolio and strategic account views, with sensitive details restricted.

The mockup should represent role-aware visibility through labels, disabled controls, or permission notices.

---

## 34. Basic / Pro / Smart Behavior

### Basic

- Simple account health
- Basic onboarding checklist
- Limited adoption metrics
- Manual playbooks
- Basic renewal reminder
- No advanced AI recommendations

### Pro

- Full adoption dashboard
- Workflow and AI Employee health
- Playbook automation
- Renewal risk signals
- Marketplace adoption signals
- Support escalation visibility

### Smart

- AI-assisted health reasoning
- Predictive churn signals
- Expansion recommendations
- Automated playbook suggestions
- EBR auto-prep
- Cross-account benchmarking
- Governance-aware success recommendations
- Advanced partner/customer segmentation

The mockup must make plan boundaries clear without making lower tiers feel broken.

---

## 35. RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This applies to:

- Sidebar position
- Navigation flow
- Table column order
- Cards
- Charts
- Drawer direction
- Timeline direction
- Form labels
- Buttons
- Icons
- Empty states
- Tooltips
- Modals
- Toasts
- Data visualizations
- Exported reports

For RTL languages, primary navigation may mirror to the right side when appropriate, and account tables should preserve logical reading order for RTL users.

For LTR languages, all alignment and reading flow must remain left-aligned.

If any mockup, component, or frontend instruction conflicts with this rule, this RTL/LTR law wins.

---

## 36. Responsive Requirements

### Desktop

Full console with sidebar, tables, right insight rail, drawer, and dense data views.

### Tablet

Condensed sidebar, card/table hybrid, collapsible insight rail, sticky filters.

### Mobile

Mobile should prioritize alerts, assigned accounts, next actions, and account preview. Dense portfolio analytics may be simplified.

Mobile must not attempt to show the full enterprise table without progressive disclosure.

---

## 37. Data Visualization Requirements

Allowed visualizations:

- Health distribution
- Adoption funnel
- Renewal timeline
- Risk trend
- Outcome trend
- AI Employee activation trend
- Workflow success trend
- Support escalation trend
- Marketplace adoption trend
- Segment comparison

Charts must include labels, legends, accessible values, and explanatory captions.

Do not use decorative charts that do not guide action.

---

## 38. Analytics Events

Track these events:

- `cs_console_viewed`
- `cs_filter_applied`
- `cs_account_opened`
- `cs_health_explanation_viewed`
- `cs_playbook_started`
- `cs_playbook_completed`
- `cs_risk_acknowledged`
- `cs_risk_escalated`
- `cs_ebr_prepared`
- `cs_renewal_account_viewed`
- `cs_expansion_signal_viewed`
- `cs_ai_recommendation_accepted`
- `cs_ai_recommendation_dismissed`
- `cs_marketplace_adoption_viewed`
- `cs_partner_account_viewed`
- `cs_report_exported`

Events must include account ID, user role, segment, plan, region, and timestamp where permitted.

---

## 39. Security and Privacy Rules

The console may contain sensitive customer data.

Must enforce:

- Role-based access
- Account assignment restrictions
- Audit logging for sensitive views
- No unnecessary PII exposure
- No raw customer secrets
- No unrestricted export
- Redaction for executive summaries when needed
- Permission-aware partner visibility
- Secure handling of support and compliance data

Never expose customer-specific security/compliance evidence to unauthorized roles.

---

## 40. Accessibility Requirements

The mockup must support:

- Keyboard navigation
- Screen reader labels
- Accessible table navigation
- High contrast states
- Focus indicators
- Non-color-only risk indicators
- Descriptive chart labels
- Responsive zoom
- Reduced motion
- Clear form labels
- Error messages tied to fields

Enterprise operations surfaces must be accessible by default.

---

## 41. Motion Requirements

Motion should be subtle and operational:

- Drawer slide-in
- Filter transitions
- Table row highlight
- Risk escalation confirmation
- Playbook progress update
- AI recommendation reveal
- Report generation state

Do not use playful, distracting, or consumer-style animation.

---

## 42. Frontend Handoff Requirements

The mockup spec must be translatable into frontend work.

Handoff should include:

- Page route
- Component map
- Responsive breakpoints
- Data contracts
- Role states
- Empty/loading/error states
- Analytics events
- Permission model
- RTL/LTR behavior
- Accessibility checklist
- Feature flag assumptions
- API dependencies
- Mock data definitions

Suggested route:

`/internal/customer-success`

Suggested related routes:

- `/internal/customer-success/accounts/:accountId`
- `/internal/customer-success/playbooks`
- `/internal/customer-success/renewals`
- `/internal/customer-success/risks`
- `/internal/customer-success/reports`

---

## 43. Suggested Mock Data

Use realistic but fictional data:

- Customer: `Nova Manufacturing Group`
- Customer: `HelioCare Clinics`
- Customer: `Atlas Legal Partners`
- Customer: `BlueRiver Logistics`
- Customer: `Orion Retail Holdings`

Example AI Employees:

- Sales Follow-up Employee
- Support Triage Employee
- Compliance Evidence Assistant
- Finance Reconciliation Employee
- Marketplace Recommendation Employee

Example statuses:

- Healthy
- At Risk
- Renewal due in 42 days
- Governance blocked
- Workflow success rate 91%
- First value reached
- Support escalation open
- Expansion signal detected

---

## 44. Forbidden Patterns

Do not design the Customer Success Console as:

- A generic CRM dashboard
- A support-ticket inbox only
- A passive BI report
- A vanity metrics board
- A sales-only pipeline view
- A customer list with health colors but no explanation
- An AI black-box recommendation page
- A consumer-style admin panel
- A dense spreadsheet with no prioritization
- A renewal dashboard disconnected from product outcomes

---

## 45. Mockup Acceptance Criteria

The mockup is acceptable only if:

- A CSM can identify priority accounts within 10 seconds
- Health scores are explainable
- Risks have owners and next actions
- Renewal and expansion signals are visible
- Onboarding progress is actionable
- AI Employee adoption and outcomes are represented
- Support and governance issues affect account health
- Playbooks are visible and actionable
- Enterprise seriousness is clear
- RTL/LTR behavior is explicitly supported
- Frontend handoff is possible without guessing

---

## 46. Golden Rule

The Ariyo Customer Success Console must not simply show what customers did.

It must show what Ariyo should do next to make each customer successful, safe, renewed, expanded, and measurably valuable.
