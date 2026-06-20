# Ariyo Enterprise Admin Mockup Specification

## Core Contract

Ariyo Enterprise Admin Mockup Specification is not a generic admin settings page.

It is the governed mockup specification for the enterprise control surface where organization owners, workspace admins, security teams, compliance leads, IT operators, finance stakeholders, and executive sponsors configure, govern, audit, approve, restrict, monitor, and scale Ariyo across an enterprise account.

The Enterprise Admin experience must make Ariyo feel like an enterprise-grade AI Employee Operating System with accountable governance, not a lightweight SaaS settings panel, chatbot permission screen, plugin manager, or marketplace toggle page.

If Ariyo cannot be governed from the Enterprise Admin surface, Ariyo is not enterprise-ready.

---

## 1. Purpose

The purpose of this mockup specification is to define the first high-fidelity Enterprise Admin surface for Ariyo.

This surface must prove that Ariyo can be trusted by serious organizations before it asks those organizations to deploy AI Employees, install Marketplace templates, connect sensitive systems, or automate work.

The mockup must show that an enterprise can answer the following questions:

- Who has access to Ariyo?
- Which workspaces exist?
- Which AI Employees are allowed to operate?
- Which users can create, install, approve, pause, or delete AI Employees?
- Which Marketplace templates are allowed, blocked, private, certified, or pending review?
- Which data regions, integrations, tools, models, memories, and knowledge sources are allowed?
- Which actions require approval?
- Which policies are active?
- Which risks, incidents, exceptions, and audit events exist?
- Which compliance evidence can be exported?
- Which plans, costs, limits, and entitlements are active?

The page must communicate enterprise governance through visible structure, not hidden settings.

---

## 2. Product Positioning

Enterprise Admin is the trust center inside the product.

It sits above individual dashboards, builders, templates, workflows, users, and AI Employee detail pages.

It is not a place where admins merely configure UI preferences.

It is the command center for operating Ariyo safely across a company.

### Enterprise Admin must communicate

- Control without friction.
- Governance without fear.
- Compliance without bureaucracy.
- AI deployment with human accountability.
- Marketplace freedom with enterprise guardrails.
- Automation scale with policy boundaries.
- Security posture with clear evidence.
- Cost visibility with plan-aware controls.

### Enterprise Admin must not communicate

- A scattered settings area.
- A consumer-style account page.
- A confusing security console.
- A developer-only configuration surface.
- A marketplace moderation backoffice.
- A billing page disguised as governance.
- A compliance page with no operational controls.

---

## 3. Primary Users

### 3.1 Organization Owner

The Organization Owner is accountable for the entire Ariyo account.

They need account-wide visibility, workspace governance, billing awareness, policy controls, user management, and executive-level confidence.

### 3.2 Enterprise Admin

The Enterprise Admin manages users, roles, workspaces, SSO, SCIM, access controls, approval flows, and policy enforcement.

They need precise controls and safe defaults.

### 3.3 Security Admin

The Security Admin reviews permissions, integrations, audit logs, data access, incidents, model usage, marketplace risks, and policy exceptions.

They need risk clarity and exportable evidence.

### 3.4 Compliance Lead

The Compliance Lead needs audit reports, data residency, policy history, review logs, user access evidence, approval evidence, incident evidence, and trust labels.

They need proof, not just summaries.

### 3.5 IT / Identity Admin

The IT Admin configures SSO, SCIM, directory sync, identity provider settings, domain verification, user provisioning, and access lifecycle automation.

They need clear state, sync status, and error recovery.

### 3.6 Finance / Procurement Admin

The Finance Admin reviews plan usage, cost controls, template purchases, marketplace spend, invoices, seats, limits, and upgrade implications.

They need usage explainability and predictable controls.

### 3.7 Executive Sponsor

The Executive Sponsor needs high-level confidence that Ariyo is governed, adopted, safe, valuable, and ready to scale.

They need the enterprise posture summary, not deep configuration.

---

## 4. Surface Placement

Enterprise Admin must be accessible from the main app shell but clearly separated from operational user surfaces.

Recommended navigation placement:

- Main sidebar item: `Admin`
- Secondary label: `Enterprise Controls`
- Restricted visibility: admins only
- Header breadcrumb: `Organization / Enterprise Admin`

### Related surfaces

- Main Dashboard
- AI Employee Detail
- AI Employee Builder
- Workflow Builder
- Marketplace Homepage
- Template Detail
- Creator Portal
- Trust Center
- Billing
- Audit Reports
- Internal Operations Command Center

Enterprise Admin must connect to these surfaces through contextual links and policy references.

---

## 5. Global RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be fully RTL and right-aligned across all UI elements.

English and European LTR interfaces must be fully LTR and left-aligned across all UI elements.

This applies to:

- Sidebar navigation
- Top navigation
- Breadcrumbs
- Headings
- Cards
- Tables
- Tabs
- Forms
- Select menus
- Empty states
- Error states
- Confirmation dialogs
- Approval flows
- Audit timelines
- Policy editors
- Charts and legends
- Tooltip placement
- Drawer direction
- Modal alignment
- Button order
- Toasts and banners
- Marketplace controls
- SSO/SCIM configuration
- Compliance exports

### RTL requirements

For Persian and Arabic:

- Primary navigation begins from the right.
- Sidebar anchors to the right side unless the product shell globally defines an alternate RTL pattern.
- Tables align row labels and text to the right.
- Numeric values may remain directionally neutral but must visually fit RTL layout.
- Primary CTA order follows RTL reading flow.
- Drawer panels open from the right unless context demands otherwise.
- Icons that imply direction must be mirrored when semantically directional.
- Timelines flow right-to-left when used as narrative sequences.

### LTR requirements

For English and European languages:

- Primary navigation begins from the left.
- Sidebar anchors to the left.
- Tables align row labels and text to the left.
- CTA order follows LTR reading flow.
- Drawer panels open from the right only when that matches the product pattern.
- Timelines flow left-to-right.

If any mockup instruction conflicts with this layout law, the layout law wins.

---

## 6. Page-Level Mockup Goal

The Enterprise Admin mockup must prove that Ariyo can be deployed inside a serious organization with appropriate controls.

The first view must make the viewer immediately understand:

1. This organization has multiple workspaces.
2. AI Employees are governed entities.
3. Marketplace templates are controlled before installation.
4. Policies and approvals shape what AI can do.
5. Audit and compliance evidence exist.
6. Admins can see risk and act quickly.
7. Ariyo is ready for enterprise procurement conversations.

---

## 7. Information Architecture

Enterprise Admin should use a left/right localized navigation model with a primary overview and dedicated sections.

### Recommended tabs or side-nav sections

1. Overview
2. Organization & Workspaces
3. Users & Roles
4. SSO & Directory Sync
5. Policies
6. Approvals
7. AI Employee Controls
8. Marketplace Controls
9. Integrations & Data Access
10. Data Residency
11. Audit Logs
12. Compliance Evidence
13. Incidents & Exceptions
14. Billing & Entitlements
15. Settings

### Design principle

Do not overload the first page with every setting.

Use an executive overview followed by clear control areas.

---

## 8. Enterprise Admin Overview Layout

### 8.1 Header

The header must clearly identify the governed organization.

Required elements:

- Organization name
- Plan tier
- Enterprise status badge
- Security posture badge
- Last policy review date
- Primary CTA: `Review Open Risks`
- Secondary CTA: `Export Evidence`
- Overflow menu: account settings, support, documentation

Example header structure:

- `Ariyo Enterprise Admin`
- `Acme Group · Enterprise · 8 workspaces · 426 users`
- Badges:
  - `SSO active`
  - `SCIM synced`
  - `Private catalog enabled`
  - `3 policy exceptions`

### 8.2 Enterprise Posture Summary Cards

Top-level cards must summarize the state of the account.

Required cards:

1. Active AI Employees
2. Workflows in Production
3. Open Approvals
4. Policy Exceptions
5. Marketplace Installs Pending Review
6. Monthly AI Cost / Budget
7. Audit Events This Week
8. Compliance Evidence Status

Each card must include:

- Label
- Numeric value
- Status indicator
- Trend or timestamp
- Link to detail section

### 8.3 Risk & Action Panel

A prominent panel must show the most important governance actions.

Examples:

- `2 templates require security review`
- `1 workflow attempted restricted data access`
- `4 users pending SCIM deactivation`
- `AI Employee: Sales Analyst exceeded monthly cost threshold`
- `Policy update available for external tool usage`

Each item must support:

- Severity
- Owner
- Due date
- Required action
- Link to review drawer

### 8.4 Governance Health Score

The dashboard should include a governance health score, but it must not be gamified.

Recommended label:

`Enterprise Governance Health`

Inputs:

- SSO status
- SCIM sync health
- Policy coverage
- Approval backlog
- Open incidents
- Audit completeness
- Marketplace restrictions
- Data residency controls
- Cost controls

Avoid vague scores without explainability.

---

## 9. Organization & Workspace Governance

This section defines how admins manage the account structure.

### Required elements

- Organization profile
- Verified domains
- Workspace list
- Workspace owners
- Workspace risk level
- Workspace plan/entitlement scope
- Workspace data region
- Workspace policy inheritance
- Workspace marketplace access
- Workspace AI Employee count
- Workspace cost usage

### Workspace table columns

- Workspace name
- Owner
- Region
- Users
- AI Employees
- Active workflows
- Marketplace access
- Policy set
- Risk status
- Last activity
- Actions

### Workspace detail drawer

When selecting a workspace, show:

- Owners
- Active users
- Active AI Employees
- Installed templates
- Allowed integrations
- Policy overrides
- Approval rules
- Audit events
- Cost usage
- Data region
- Risk summary

### Forbidden patterns

- Do not hide workspaces in a flat dropdown only.
- Do not make policy inheritance unclear.
- Do not allow dangerous overrides without visible warning.
- Do not treat workspace governance as simple folder management.

---

## 10. Users & Roles

Users & Roles must prove that Ariyo has enterprise-grade access control.

### Required elements

- User directory table
- Role assignment
- Workspace membership
- Status: active, invited, suspended, deprovisioned
- Last login
- MFA/SSO status
- SCIM source status
- Permission summary
- Risk flags
- Bulk actions

### Required roles

Minimum role model:

- Organization Owner
- Enterprise Admin
- Security Admin
- Compliance Admin
- Finance Admin
- Workspace Admin
- AI Employee Manager
- Workflow Builder
- Marketplace Buyer
- Marketplace Reviewer
- Creator Admin
- Viewer

### Role detail drawer

Each role must show:

- Permissions granted
- Permissions denied
- Workspace scope
- Marketplace permissions
- AI Employee permissions
- Approval permissions
- Audit visibility
- Billing visibility
- Whether role is system-managed or custom

### Permission categories

- Account
- Workspaces
- Users
- AI Employees
- Workflows
- Knowledge sources
- Integrations
- Marketplace
- Templates
- Policies
- Approvals
- Audit logs
- Billing
- Compliance evidence

### User risk indicators

Examples:

- `External domain`
- `Privileged role`
- `No recent login`
- `Pending SCIM deactivation`
- `Manual role override`
- `Access to restricted workspace`

---

## 11. SSO & SCIM Directory Sync

This section must support enterprise identity confidence.

### Required states

- Not configured
- SSO configured but not enforced
- SSO enforced
- SCIM connected
- SCIM sync healthy
- SCIM degraded
- SCIM failed
- Domain verified
- Domain verification pending

### Required panels

1. Identity Provider Setup
2. Domain Verification
3. SSO Enforcement
4. SCIM Provisioning
5. Directory Groups Mapping
6. Sync Logs
7. Error Recovery

### Required fields

- Identity provider name
- Metadata URL
- Entity ID
- SSO URL
- Certificate status
- Domain verification token
- SCIM token status
- Last sync time
- Users synced
- Groups synced
- Failed sync objects

### UX requirements

- Mask sensitive tokens.
- Provide copy buttons only for safe fields.
- Require confirmation before regenerating tokens.
- Show last sync status prominently.
- Separate setup from live enforcement.
- Provide test connection actions.

---

## 12. Policy Engine Surface

The policy engine is the heart of Enterprise Admin.

It must show that Ariyo can govern AI behavior, data access, marketplace installs, workflow approvals, tool usage, model usage, cost thresholds, and region restrictions.

### Policy categories

1. AI Employee Creation Policies
2. AI Employee Runtime Policies
3. Workflow Policies
4. Human Review Policies
5. Tool & Integration Policies
6. Knowledge & Data Policies
7. Marketplace Install Policies
8. Template Certification Policies
9. Model Provider Policies
10. Cost Control Policies
11. Data Residency Policies
12. Incident Escalation Policies
13. Audit & Evidence Policies

### Policy list columns

- Policy name
- Category
- Scope
- Status
- Enforcement mode
- Last updated
- Owner
- Exceptions
- Actions

### Enforcement modes

- Monitor only
- Warn
- Require approval
- Block
- Auto-remediate

### Policy editor requirements

The policy editor must be structured, not a raw JSON-only editor.

Required layout:

- Policy name
- Description
- Scope selector
- Conditions
- Actions
- Approval requirements
- Exception handling
- Notifications
- Audit logging
- Test/simulate button
- Version history
- Publish controls

### Policy simulation

Before publishing, admins must be able to test a policy.

Simulation should show:

- What would be allowed
- What would be warned
- What would require approval
- What would be blocked
- Which users/workspaces/AI Employees/templates are affected
- Estimated impact

---

## 13. Approval Workflows

Approvals must be treated as a core enterprise control, not an afterthought.

### Approval categories

- AI Employee launch approval
- Workflow production approval
- Marketplace template install approval
- External integration approval
- Restricted data source approval
- High-cost action approval
- Policy exception approval
- Model provider change approval
- Region override approval
- Incident remediation approval

### Approval queue columns

- Request type
- Request title
- Requested by
- Workspace
- Risk level
- Required approvers
- SLA / due date
- Status
- Actions

### Approval drawer

Each approval must show:

- Request summary
- Business justification
- Risk assessment
- Permissions requested
- Data involved
- Cost impact
- Region impact
- Policy match
- Evidence attachments
- Comments
- Approve / reject / request changes
- Audit trail

### Approval states

- Draft
- Submitted
- Pending review
- Needs changes
- Approved
- Rejected
- Expired
- Auto-approved
- Escalated

---

## 14. AI Employee Controls

This section governs AI Employees across the enterprise.

### Required elements

- AI Employee inventory
- Status summary
- Workspace ownership
- Risk level
- Connected tools
- Knowledge sources
- Memory status
- Monthly cost
- Review status
- Last incident
- Version
- Production status

### AI Employee table columns

- Name
- Role
- Workspace
- Owner
- Status
- Risk
- Tools
- Knowledge
- Cost
- Outcomes
- Last run
- Version
- Actions

### Enterprise-level actions

- Pause AI Employee
- Require review
- Reassign owner
- Restrict tools
- Disable memory
- Export audit log
- Change policy set
- Open detail page

### Risk badges

- Low risk
- Medium risk
- High risk
- Restricted data access
- External tool access
- Cost threshold exceeded
- Policy exception active
- Human review required

---

## 15. Marketplace Controls

Marketplace Controls must support enterprise-safe discovery and installation.

### Required controls

- Enable/disable public marketplace access
- Enable private catalog
- Enable partner catalog
- Require approval for installs
- Restrict template categories
- Restrict uncertified templates
- Restrict regions
- Restrict creators/partners
- Restrict paid templates
- Restrict templates with high-risk permissions
- Allow only certified templates

### Marketplace control sections

1. Marketplace Access
2. Private Catalog
3. Approved Templates
4. Blocked Templates
5. Pending Reviews
6. Creator/Partner Trust
7. Category Restrictions
8. Install Approval Rules
9. Template Risk Thresholds
10. Audit & Evidence

### Template review queue

Columns:

- Template name
- Creator
- Category
- Trust label
- Permission risk
- Data region
- Price impact
- Requested by
- Workspace
- Status
- Actions

### Template review drawer

Must show:

- Overview
- Permissions
- Dependencies
- Data access
- Model/provider use
- Cost impact
- Region compatibility
- Reviews/reputation
- Certification status
- Policy match
- Approve / block / request changes

---

## 16. Integrations & Data Access

Enterprise Admin must show which systems Ariyo can access.

### Integration inventory columns

- Integration
- Provider
- Workspace scope
- Connected by
- Permission level
- Data type
- Status
- Last sync
- Risk level
- Actions

### Integration detail drawer

Must show:

- OAuth scopes or API permissions
- Connected AI Employees
- Connected workflows
- Connected templates
- Data accessed
- Last activity
- Policy restrictions
- Audit events
- Revoke access

### Data access categories

- CRM
- Accounting
- Email
- Calendar
- Docs/Drive
- Support desk
- Analytics
- Databases
- Internal APIs
- Knowledge bases
- Custom tools

---

## 17. Data Residency & Region Controls

Data residency must be visible for enterprise buyers.

### Required elements

- Default organization region
- Workspace-specific region
- Template region compatibility
- Knowledge source region
- Model provider region
- Audit data region
- Backup/retention region
- Exception list

### Region control states

- Allowed
- Restricted
- Requires approval
- Blocked
- Unknown
- Not applicable

### Region compatibility display

For each workspace or template, show:

- Current region
- Required region
- Compatible services
- Incompatible services
- Data transfer warnings
- Policy references

---

## 18. Audit Logs

Audit Logs must be enterprise-grade and searchable.

### Required filters

- Date range
- User
- Workspace
- AI Employee
- Workflow
- Template
- Policy
- Approval
- Integration
- Severity
- Event type
- Region

### Required columns

- Timestamp
- Actor
- Event
- Resource
- Workspace
- Severity
- IP / source
- Policy reference
- Outcome
- Actions

### Audit event examples

- User role changed
- SSO setting changed
- SCIM sync failed
- AI Employee launched
- AI Employee paused
- Workflow published
- Marketplace template installed
- Template blocked
- Policy exception approved
- Integration connected
- Restricted data access blocked
- Evidence exported

### Export requirements

- CSV
- JSON
- PDF summary
- Date range selection
- Evidence bundle export
- Redaction controls

---

## 19. Compliance Evidence Center

Compliance evidence must be integrated into Enterprise Admin.

### Evidence categories

- Access control evidence
- SSO/SCIM evidence
- Policy configuration evidence
- Approval evidence
- AI Employee inventory evidence
- Workflow inventory evidence
- Marketplace install evidence
- Template review evidence
- Data residency evidence
- Audit log exports
- Incident evidence
- Cost governance evidence

### Evidence card fields

- Evidence name
- Category
- Status
- Last generated
- Owner
- Export format
- Scope
- Retention period

### Evidence states

- Ready
- Generating
- Needs review
- Outdated
- Failed
- Restricted

---

## 20. Incidents & Exceptions

Enterprise Admin must show operational risk.

### Incident types

- AI Employee behavior incident
- Policy violation
- Data access violation
- Tool failure
- Integration failure
- Cost anomaly
- Marketplace template issue
- Security concern
- Model provider issue
- Compliance exception

### Incident table columns

- Incident ID
- Type
- Severity
- Resource
- Workspace
- Owner
- Status
- Opened
- Last updated
- Actions

### Exception types

- Policy exception
- Region exception
- Cost exception
- Marketplace exception
- Integration exception
- Approval bypass exception
- Data access exception

### Exception requirements

Every exception must show:

- Business justification
- Approver
- Expiry date
- Scope
- Risk level
- Audit trail
- Revocation action

---

## 21. Billing & Entitlements

Billing must be connected to governance but not dominate the page.

### Required elements

- Plan tier
- Seats
- Active users
- AI Employee limits
- Workflow limits
- Marketplace entitlements
- Private catalog status
- Enterprise features
- Current month usage
- Budget controls
- Cost alerts
- Invoices link

### Entitlement table columns

- Feature
- Included
- Used
- Limit
- Status
- Upgrade impact

### Cost governance controls

- Monthly AI budget
- Per-workspace budget
- Per-AI-Employee budget
- Marketplace spend approval
- High-cost action approval
- Cost anomaly alerts

---

## 22. Basic / Pro / Smart Behavior

Enterprise Admin must adapt by plan without confusing users.

### Basic

Basic should show simplified governance.

Available:

- Basic users/roles
- Simple workspace settings
- Basic AI Employee inventory
- Basic cost limits
- Basic marketplace restrictions
- Basic audit logs

Limited or hidden:

- Advanced policy engine
- SCIM
- Private catalog
- Advanced compliance exports
- Multi-region controls
- Advanced approval workflows

### Pro

Pro should show team and operations governance.

Available:

- Role management
- Workspace controls
- Approval workflows
- Marketplace install review
- AI Employee controls
- Integration controls
- Audit logs
- Cost controls
- Basic evidence exports

Limited:

- Advanced SCIM
- Enterprise policy inheritance
- Custom evidence bundles
- Advanced data residency controls

### Smart / Enterprise

Smart or Enterprise must show the full governance surface.

Available:

- SSO enforcement
- SCIM directory sync
- Advanced policy engine
- Private catalog
- Region controls
- Compliance evidence center
- Advanced audit exports
- Custom roles
- Exception management
- Enterprise approvals
- Vendor/procurement controls
- Trust center evidence

---

## 23. Required Mockup Screens

The first Enterprise Admin mockup package should include the following screens.

### Screen 1: Enterprise Admin Overview

Purpose: show governance posture and urgent admin actions.

Must include:

- Organization header
- Posture cards
- Governance health
- Open risks
- Approval summary
- Marketplace review summary
- Audit/compliance quick access

### Screen 2: Users & Roles

Purpose: show access governance.

Must include:

- User table
- Role filters
- SCIM status
- Role drawer
- Bulk actions

### Screen 3: Policy Engine

Purpose: show enterprise-grade policy control.

Must include:

- Policy list
- Enforcement mode
- Policy editor preview
- Simulation drawer

### Screen 4: Approvals Queue

Purpose: show human review governance.

Must include:

- Approval table
- Severity
- Due date
- Approval drawer
- Comment trail

### Screen 5: Marketplace Controls

Purpose: show safe template deployment.

Must include:

- Access controls
- Private catalog
- Pending reviews
- Template risk drawer

### Screen 6: Audit & Evidence

Purpose: show enterprise proof.

Must include:

- Audit filters
- Audit table
- Evidence cards
- Export panel

---

## 24. Component Requirements

### Required components

- Enterprise app shell
- Admin sidebar
- Organization header
- Governance posture cards
- Risk alert cards
- Data tables
- Status badges
- Policy cards
- Approval queue
- Detail drawers
- Confirmation modals
- Role matrix
- Permission table
- Region compatibility matrix
- Evidence cards
- Audit timeline
- Export panel
- Empty states
- Error states
- Loading skeletons

### Table requirements

Tables must support:

- Sorting
- Filtering
- Search
- Bulk selection
- Row actions
- Status badges
- Sticky header
- Responsive collapse pattern
- Accessible keyboard navigation

### Drawer requirements

Drawers must include:

- Clear title
- Summary
- Risk indicators
- Detailed metadata
- Actions
- Audit trail
- Close action
- RTL/LTR-aware side opening

---

## 25. Visual Direction

The Enterprise Admin surface must feel serious, calm, and trustworthy.

### Visual principles

- Enterprise-grade spacing
- Calm neutral surfaces
- Clear hierarchy
- Dense but readable tables
- Controlled accent usage
- Strong status differentiation
- No playful agent avatars as primary governance elements
- No cartoon-like illustrations
- No gamified compliance visuals

### Recommended visual tone

- Professional
- Secure
- Operational
- Executive-friendly
- High-information
- Minimal but not empty
- Trust-first

### Avoid

- Overly colorful dashboards
- Consumer app styling
- Overuse of gradients
- Toy-like cards
- Floating chatbot UI as primary visual metaphor
- Hidden critical controls

---

## 26. Copywriting Rules

Enterprise Admin copy must be precise and accountable.

### Good copy examples

- `3 policy exceptions require review`
- `SSO is enforced for verified domains`
- `Marketplace installs require approval for this workspace`
- `This AI Employee has access to restricted CRM fields`
- `Export evidence bundle for the selected date range`
- `SCIM sync failed for 4 users`

### Bad copy examples

- `Everything looks awesome`
- `Your AI is safe`
- `Magic automation controls`
- `Install anything instantly`
- `Compliance made easy`
- `Risk-free AI`

### Copy requirements

- Use specific nouns.
- Avoid exaggerated claims.
- Explain consequences.
- Make risky actions explicit.
- Use human-readable policy names.
- Provide short help text where needed.

---

## 27. Interaction Requirements

### Critical actions must require confirmation

Examples:

- Disable SSO enforcement
- Regenerate SCIM token
- Delete workspace
- Suspend user
- Remove admin role
- Pause AI Employee
- Block Marketplace category
- Publish policy
- Approve high-risk template
- Export sensitive audit evidence

### Confirmation modal must show

- Action name
- Affected resources
- Risk level
- Reversibility
- Required permissions
- Confirmation CTA
- Cancel CTA

### Inline editing rules

Inline editing is allowed only for low-risk metadata.

Policy, role, SSO, SCIM, marketplace, data residency, and permission changes must open a structured editor or confirmation flow.

---

## 28. Responsive Requirements

### Desktop

Desktop is the primary Enterprise Admin experience.

Required:

- Full sidebar
- Dense tables
- Multi-column overview
- Drawers
- Filters
- Export controls

### Tablet

Tablet must support review and lightweight action.

Required:

- Collapsible sidebar
- Scrollable tables
- Card/table hybrid
- Drawer or full-screen detail panel

### Mobile

Mobile must support emergency review, not full policy editing.

Required:

- Governance overview
- Open risks
- Approval queue
- Incident list
- User search
- Critical action review
- Full policy editing may be disabled or simplified

### Mobile restrictions

Do not force complex policy editing onto small screens.

Use read/review/approve flows for mobile unless absolutely necessary.

---

## 29. Empty, Loading, Error, and Blocked States

### Empty states

Must be informative and enterprise-specific.

Examples:

- `No policy exceptions are open.`
- `No templates are pending review.`
- `No SCIM errors were found in the last 24 hours.`
- `No evidence bundles have been generated yet.`

### Loading states

Use skeletons for:

- Tables
- Summary cards
- Policy lists
- Audit logs
- Evidence exports

### Error states

Must explain:

- What failed
- Whether data is stale
- What the admin can do
- Whether support should be contacted

### Blocked states

Blocked states must show:

- Required plan
- Required role
- Required policy permission
- Required workspace access
- Contact/admin escalation path

---

## 30. Analytics Events

The mockup must define measurable interactions.

### Required events

- `enterprise_admin_viewed`
- `admin_overview_risk_clicked`
- `workspace_opened`
- `user_role_changed`
- `role_detail_viewed`
- `sso_configuration_started`
- `scim_sync_error_viewed`
- `policy_created`
- `policy_simulated`
- `policy_published`
- `approval_opened`
- `approval_decision_submitted`
- `ai_employee_admin_action_clicked`
- `marketplace_control_changed`
- `template_review_decision_submitted`
- `audit_log_filtered`
- `evidence_export_started`
- `incident_opened`
- `exception_created`
- `cost_limit_changed`

### Event properties

Each event should include:

- organization_id
- workspace_id when applicable
- actor_role
- surface
- action_type
- resource_type
- resource_id
- risk_level when applicable
- policy_id when applicable
- plan_tier
- locale
- layout_direction

---

## 31. Accessibility Requirements

Enterprise Admin must be accessible to power users and compliance operators.

### Requirements

- Keyboard navigable tables
- Visible focus states
- ARIA labels for controls
- Screen-reader-friendly status badges
- Non-color-only risk indicators
- Table captions
- Error messages tied to fields
- Confirmation modal focus trapping
- Sufficient contrast
- RTL screen reader testing for Persian/Arabic
- LTR screen reader testing for English/European languages

---

## 32. Security and Privacy Requirements

### Sensitive information handling

The mockup must not expose sensitive secrets casually.

Mask:

- API keys
- SCIM tokens
- OAuth tokens
- Certificates
- Personal identifiers where not needed
- Restricted audit payloads

### Permission-aware visibility

Not every admin sees every control.

Examples:

- Finance Admin can see billing but not sensitive audit payloads.
- Security Admin can see audit and incidents but not invoices unless granted.
- Workspace Admin cannot modify organization-wide SSO.
- Compliance Admin can export evidence but not launch AI Employees.

---

## 33. Frontend Handoff Requirements

The mockup must be ready for implementation.

### Required deliverables

- Desktop design
- Tablet design
- Mobile review design
- RTL Persian/Arabic variants
- LTR English variant
- Component inventory
- State inventory
- Role visibility matrix
- Data model notes
- Analytics event list
- Empty/loading/error states
- Confirmation modal examples
- Policy editor states
- Approval drawer states
- Table behavior notes

### Engineering notes

Frontend implementation must support:

- Role-based rendering
- Feature flag visibility
- Plan-aware entitlements
- Locale-aware layout direction
- Policy status badges
- Table virtualization for large accounts
- Audit log pagination
- Export job state
- Error retry flows
- Responsive table alternatives

---

## 34. Demo Data Requirements

The mockup should include realistic enterprise demo data.

### Example organization

`Acme Group`

### Example workspaces

- Sales Operations
- Customer Support
- Finance Automation
- HR Operations
- Executive Analytics
- Marketplace Review Lab

### Example AI Employees

- Sales Pipeline Analyst
- Support Triage Assistant
- Invoice Review Specialist
- Customer Health Monitor
- Renewal Risk Analyst

### Example Marketplace templates

- Support Ticket Triage Team
- CRM Enrichment Workflow
- Invoice Exception Reviewer
- Renewal Expansion Assistant
- GEO Content Optimization Pack

### Example incidents

- Restricted data access attempt blocked
- Cost threshold exceeded
- SCIM deprovisioning delay
- Marketplace template review expired

---

## 35. Acceptance Criteria

The Enterprise Admin mockup is acceptable only if it meets all criteria below.

### Product criteria

- It clearly shows enterprise governance.
- It connects users, roles, policies, AI Employees, workflows, marketplace, audit, and compliance.
- It does not feel like generic settings.
- It supports the enterprise sales narrative.
- It supports procurement/security review confidence.

### UX criteria

- Critical actions are visible but safe.
- Tables are dense but readable.
- Policies are understandable.
- Approval flows are actionable.
- Audit and evidence flows are clear.
- Plan differences are visible but not disruptive.

### Localization criteria

- Persian/Farsi and Arabic are fully RTL and right-aligned.
- English and European LTR languages are fully LTR and left-aligned.
- Directional icons and drawers respect locale direction.
- Tables, forms, buttons, timelines, modals, and menus obey the global layout law.

### Engineering criteria

- Components are implementable.
- States are defined.
- Data requirements are clear.
- Analytics events are defined.
- Role-based visibility is specified.
- Security-sensitive elements are masked.

---

## 36. Forbidden Patterns

Ariyo must not use the following patterns for Enterprise Admin:

- Generic settings sidebar with hidden governance.
- One giant permissions checklist with no explanation.
- Policy editor that requires raw JSON for normal admins.
- Marketplace install controls hidden inside billing.
- Audit logs without filtering and export.
- Compliance evidence without timestamp, owner, and scope.
- SSO/SCIM setup with no test or sync status.
- Dangerous actions without confirmation.
- Gamified governance scores.
- Toy-like AI avatars as admin metaphors.
- English-only layout assumptions.
- RTL interfaces with left-aligned Persian/Arabic content.
- LTR interfaces with right-aligned English/European content.

---

## 37. Golden Rule

Ariyo Enterprise Admin must make enterprise buyers feel that AI Employees can be deployed at scale without losing control.

Every screen, table, card, modal, policy, approval, audit log, and CTA must answer one question:

`Can this organization safely operate AI Employees as accountable digital workers?`

If the answer is not visible, the mockup is not ready.
