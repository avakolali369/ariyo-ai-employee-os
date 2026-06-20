# Ariyo AI Employee Detail Mockup Specification

## Core Contract

Ariyo AI Employee Detail Mockup Specification is not an agent profile page.

It is the governed mockup specification for the operational command surface where a customer understands, monitors, audits, improves, pauses, escalates, updates, and governs a specific AI Employee after it has been created or launched.

The AI Employee Detail page must make one digital employee feel alive as an accountable operating unit: measurable, governable, observable, safe, cost-aware, versioned, and tied to real business outcomes.

Ariyo must never present an AI Employee as a black box.

---

## 1. Purpose

This mockup spec defines the product surface for managing one AI Employee in Ariyo.

The page must answer these questions within seconds:

1. What is this AI Employee responsible for?
2. Is it healthy?
3. Is it producing business outcomes?
4. What is it allowed to do?
5. What tools, knowledge, memory, and workflows does it use?
6. What risks, approvals, incidents, or policy issues need attention?
7. What changed recently?
8. What should the user do next?

---

## 2. Primary Users

### Customer Roles

- Workspace admin
- AI Employee manager
- Department owner
- Operations lead
- Governance reviewer
- Security/compliance reviewer
- Finance/procurement reviewer
- Executive sponsor

### Internal Ariyo Roles

- Customer Success Manager
- Support operator
- Implementation consultant
- Trust & Safety operator
- Product analyst
- Incident responder

---

## 3. Required Layout Direction Law

### Global RTL/LTR Requirement

Persian/Farsi and Arabic interfaces must be fully RTL and right-aligned across every UI element.

English and European LTR interfaces must be fully LTR and left-aligned across every UI element.

This applies to:

- Navigation
- Sidebar
- Breadcrumbs
- Cards
- Tables
- Charts
- Timelines
- Tabs
- Buttons
- Empty states
- Tooltips
- Modals
- Drawers
- Forms
- Approval flows
- Incident panels
- Version history
- Audit logs
- Mobile layouts

RTL must not simply mirror text. The complete information architecture must feel native for Persian and Arabic users.

---

## 4. Page Position in Product Navigation

Recommended route:

```txt
/app/ai-employees/:employeeId
```

Alternative enterprise route:

```txt
/app/:workspaceId/ai-employees/:employeeId
```

Navigation path:

```txt
Dashboard → AI Employees → AI Employee Detail
```

For RTL locales:

```txt
داشبورد ← کارمندان هوش مصنوعی ← جزئیات کارمند هوش مصنوعی
```

---

## 5. Page Structure

The page should use a high-density but calm enterprise dashboard layout.

### Desktop Layout

```txt
┌─────────────────────────────────────────────────────────────┐
│ Global App Header                                            │
├───────────────┬─────────────────────────────────────────────┤
│ Sidebar       │ AI Employee Detail Header                    │
│ Navigation    ├─────────────────────────────────────────────┤
│               │ Health / Outcome / Cost / Risk Summary       │
│               ├─────────────────────────────────────────────┤
│               │ Main Tabs                                    │
│               ├───────────────────────┬─────────────────────┤
│               │ Primary Content Area   │ Right Insight Rail  │
│               │                       │ / Context Rail       │
└───────────────┴───────────────────────┴─────────────────────┘
```

For RTL, the sidebar and insight rail positions must mirror naturally:

```txt
┌─────────────────────────────────────────────────────────────┐
│ Global App Header                                            │
├─────────────────────────────────────────────┬───────────────┤
│ AI Employee Detail Header                    │ Sidebar       │
├─────────────────────────────────────────────┤ Navigation    │
│ Health / Outcome / Cost / Risk Summary       │               │
├─────────────────────────────────────────────┤               │
│ Main Tabs                                    │               │
├─────────────────────┬───────────────────────┤               │
│ Context Rail         │ Primary Content Area  │               │
└─────────────────────┴───────────────────────┴───────────────┘
```

---

## 6. Header Requirements

### Header Elements

- AI Employee avatar or role icon
- Name
- Role title
- Department/workspace
- Status badge
- Plan badge: Basic / Pro / Smart
- Health indicator
- Last active timestamp
- Owner
- Primary CTA
- Secondary actions menu

### Example English Copy

```txt
Mina — Sales Qualification AI Employee
Qualifies inbound leads, updates CRM, drafts follow-up messages, and escalates high-intent opportunities.
```

### Example Persian Copy

```txt
مینا — کارمند هوش مصنوعی ارزیابی فروش
لیدهای ورودی را بررسی می‌کند، CRM را به‌روزرسانی می‌کند، پیام پیگیری می‌نویسد و فرصت‌های مهم را ارجاع می‌دهد.
```

### Primary CTAs

For active employees:

- Run simulation
- Review performance
- Edit employee
- Pause employee

For draft employees:

- Continue setup
- Run safety check
- Request approval

For paused employees:

- Resume employee
- Review pause reason

For incident state:

- View incident
- Keep paused
- Start remediation

---

## 7. Summary Cards

The top summary row must show the operating state of the AI Employee.

### Required Cards

1. Health Score
2. Outcome Progress
3. Workflow Success Rate
4. Cost This Month
5. Open Approvals
6. Risk / Policy Status

### Card Behavior

Each card must include:

- Label
- Current value
- Trend
- Severity state
- Short explanation
- Click-through destination

Example:

```txt
Health Score
92 / 100
Stable this week
No critical dependency or policy issues detected.
```

For RTL:

```txt
امتیاز سلامت
۹۲ از ۱۰۰
این هفته پایدار
مشکل بحرانی در وابستگی‌ها یا سیاست‌ها شناسایی نشده است.
```

---

## 8. Main Tabs

The detail page should use tabs to avoid overwhelming the user.

### Required Tabs

1. Overview
2. Outcomes
3. Runs & Activity
4. Knowledge & Memory
5. Tools & Workflows
6. Permissions & Governance
7. Cost & Usage
8. Versions
9. Incidents & Risk
10. Audit Log

For Basic, some tabs may be simplified.

For Smart, advanced tabs can show richer telemetry and governance.

---

## 9. Overview Tab

The Overview tab is the executive operational summary.

### Required Sections

- What this AI Employee does
- Current status
- Outcome summary
- Recent activity
- Next recommended actions
- Risks and blockers
- Connected workflows
- Connected tools
- Knowledge freshness
- Owner and reviewers

### Key UX Rule

The Overview must not become an analytics dump. It must tell the user whether the AI Employee is working, why that conclusion is credible, and what to do next.

---

## 10. Outcomes Tab

The Outcomes tab shows whether the AI Employee is creating business value.

### Required Metrics

- Claimed outcome
- Measured outcome
- Outcome completion rate
- Before/after comparison
- Customer-confirmed value
- Time saved
- Cost per successful outcome
- Failed or negative outcomes
- Outcome confidence

### Example Outcome Card

```txt
Lead Qualification Outcome
Goal: Reduce manual review time by 40%
Current result: 32% reduction
Confidence: Medium
Next action: Review CRM field mapping and qualification rules.
```

---

## 11. Runs & Activity Tab

This tab shows operational execution history.

### Required Table Columns

- Run ID
- Trigger
- Workflow
- Status
- Duration
- Cost
- Output quality
- Human intervention
- Policy result
- Timestamp

### Required Filters

- Status
- Date range
- Workflow
- Trigger type
- Cost range
- Human reviewed
- Failed runs
- Policy-blocked runs

### Run Detail Drawer

Clicking a run opens a side drawer with:

- Input summary
- Reasoning summary, if available and safe to expose
- Tool calls
- Data sources used
- Output
- Policy checks
- Cost
- Reviewer decision
- Retry/remediation actions

Never expose sensitive chain-of-thought. Use safe summaries and traces.

---

## 12. Knowledge & Memory Tab

This tab shows the AI Employee's knowledge and context sources.

### Required Sections

- Connected knowledge bases
- File sources
- CRM/data sources
- Memory profile
- Context rules
- Freshness status
- Last sync
- Stale knowledge warnings
- Sensitive data indicators
- Access boundaries

### Required Actions

- Refresh knowledge
- Add source
- Remove source
- Review stale items
- View access scope
- Run knowledge simulation

---

## 13. Tools & Workflows Tab

This tab shows what the AI Employee can do.

### Required Sections

- Connected tools
- Integration permissions
- Workflow triggers
- Workflow steps
- Tool risk level
- Last successful tool call
- Broken integrations
- Dependency drift

### Required Actions

- Reconnect integration
- Test tool
- Disable tool
- Edit workflow
- View dependency registry
- Run workflow simulation

---

## 14. Permissions & Governance Tab

This is one of the most important Enterprise surfaces.

### Required Sections

- Role permissions
- Tool permissions
- Data permissions
- Marketplace asset permissions
- Workspace policy inheritance
- Approval requirements
- Human review rules
- Region/data residency rules
- Cost limits
- Model provider rules
- Exceptions

### Required UX

The user must be able to see:

- What the AI Employee is allowed to do
- Why it is allowed
- Who approved it
- Which policy controls it
- What changed recently
- What requires approval before launch or update

---

## 15. Cost & Usage Tab

This tab explains cost clearly.

### Required Sections

- Monthly cost
- Cost by workflow
- Cost by model provider
- Cost by tool/integration
- Cost per successful outcome
- Forecasted cost
- Budget limit
- Cost anomalies
- Plan limits
- Upgrade prompts, if appropriate

### Design Rule

Cost must be shown as operational intelligence, not just billing usage.

---

## 16. Versions Tab

This tab manages change over time.

### Required Sections

- Current version
- Version history
- Prompt/config changes
- Policy changes
- Tool changes
- Knowledge changes
- Model profile changes
- Evaluation score by version
- Rollback eligibility
- Deployment status

### Required Actions

- Compare versions
- Promote version
- Roll back
- Request approval
- View change log
- Run regression simulation

---

## 17. Incidents & Risk Tab

This tab shows whether the AI Employee is safe and reliable.

### Required Sections

- Active incidents
- Resolved incidents
- Risk score
- Unsafe output events
- Policy blocks
- Dependency failures
- Cost anomalies
- Customer-impacting failures
- Remediation history
- Escalation status

### Required Actions

- Start remediation
- Escalate to human review
- Pause employee
- Create support case
- Open incident report

---

## 18. Audit Log Tab

This tab must be enterprise-grade.

### Required Columns

- Timestamp
- Actor
- Action
- Object changed
- Before/after summary
- Approval reference
- Policy decision
- IP/device, when relevant
- Export status

### Required Actions

- Export audit log
- Filter by actor
- Filter by action
- Filter by date
- Filter by approval
- Filter by incident

---

## 19. Right / Context Rail

The context rail must help the user decide what matters now.

### Required Widgets

- Recommended next action
- Open blockers
- Owner and reviewers
- Health explanation
- Upcoming renewal or review date
- Related marketplace templates
- Related support articles
- Governance reminders

For RTL, this rail should appear on the left side of the main content unless product-specific layout constraints require otherwise.

---

## 20. Status Model

### Allowed Statuses

- Draft
- Awaiting approval
- Approved
- Active
- Degraded
- Paused
- Incident
- Suspended
- Deprecated
- Archived

Each status must have:

- Color/state token
- Explanation
- Allowed actions
- Forbidden actions
- User-facing message

---

## 21. Basic / Pro / Smart Behavior

### Basic

- Simplified overview
- Fewer tabs
- Limited tools
- Lower automation risk
- Simple cost view
- No advanced governance unless required
- Strong guided recommendations

### Pro

- Workflow and team operations visible
- Approval queue visible
- Integration health visible
- Department-level reporting
- Expanded cost and outcome intelligence

### Smart

- Full governance
- Advanced simulations
- Model routing
- Memory governance
- Detailed audit
- Advanced outcome intelligence
- Incident and remediation automation
- Enterprise-ready controls

---

## 22. Empty States

Required empty states:

- No runs yet
- No outcomes measured yet
- No tools connected
- No knowledge sources connected
- No approvals required
- No incidents
- No versions beyond draft
- No audit events

Empty states must be helpful and action-oriented.

Example:

```txt
No outcomes measured yet
Run this AI Employee in simulation or connect an outcome metric to start measuring business value.
```

---

## 23. Loading States

Use skeleton loading for:

- Header
- Summary cards
- Tables
- Charts
- Timelines
- Context rail

Never show layout jumps after data loads.

---

## 24. Error States

Required error states:

- Employee not found
- Permission denied
- Data temporarily unavailable
- Integration health unavailable
- Audit log unavailable
- Cost data unavailable
- Policy engine unavailable

Error states must explain whether the user can retry, contact admin, or open support.

---

## 25. Responsive Requirements

### Desktop

- Full sidebar
- Summary cards row
- Tabbed detail layout
- Context rail

### Tablet

- Collapsible sidebar
- Cards wrap into two columns
- Context rail becomes drawer

### Mobile

- Bottom navigation or compact header
- Cards stacked
- Tabs become segmented dropdown or horizontal scroll
- Tables become cards
- Critical actions remain sticky

RTL mobile must preserve natural thumb flow for Persian and Arabic users.

---

## 26. Visual Direction

The page should feel:

- Calm
- Trustworthy
- Enterprise-grade
- Operational
- Data-rich but not noisy
- Human-governed
- AI-native

Avoid:

- Chatbot-heavy layouts
- Neon AI gimmicks
- Overly playful avatars
- Unexplained charts
- Hidden risks
- Generic SaaS admin design

---

## 27. Component Requirements

Required components:

- Employee identity header
- Status badge
- Health score card
- Outcome card
- Cost card
- Approval card
- Risk card
- Tab system
- Run table
- Activity timeline
- Policy decision panel
- Permission matrix
- Version compare panel
- Incident card
- Audit log table
- Context rail
- Confirmation modal
- Approval drawer
- Simulation launcher

---

## 28. Analytics Events

Required events:

```txt
ai_employee_detail_viewed
ai_employee_tab_changed
ai_employee_run_opened
ai_employee_simulation_started
ai_employee_paused
ai_employee_resumed
ai_employee_edit_clicked
ai_employee_approval_requested
ai_employee_policy_panel_opened
ai_employee_cost_panel_opened
ai_employee_version_compared
ai_employee_incident_opened
ai_employee_audit_exported
```

Each event should include:

- employee_id
- workspace_id
- org_id
- user_role
- plan
- locale
- direction
- surface
- timestamp

---

## 29. Accessibility Requirements

- Full keyboard navigation
- Visible focus states
- ARIA labels for status, health, risk, and charts
- Screen-reader-friendly table summaries
- Non-color risk indicators
- Sufficient contrast
- Clear language
- RTL screen-reader compatibility

---

## 30. Security & Privacy Requirements

- Do not reveal hidden system prompts
- Do not reveal raw chain-of-thought
- Redact sensitive data in traces
- Enforce role-based visibility
- Hide restricted tools and sources
- Respect workspace policy engine
- Respect data residency and region controls
- Audit all sensitive actions

---

## 31. Frontend Handoff Requirements

Design handoff must include:

- Desktop mockup
- Tablet mockup
- Mobile mockup
- RTL variants
- LTR variants
- Component states
- Empty states
- Loading states
- Error states
- Confirmation modals
- Drawer states
- Approval flow states
- Incident states
- Design tokens
- Analytics event notes

---

## 32. Acceptance Criteria

This mockup is successful when:

- A customer understands what the AI Employee does within 5 seconds
- A manager can tell whether it is healthy within 10 seconds
- A governance reviewer can inspect permissions quickly
- A CSM can understand adoption and outcomes
- A support operator can find incidents and traces
- A finance reviewer can understand cost behavior
- An admin can pause, approve, or escalate safely
- RTL and LTR versions both feel native

---

## 33. Forbidden Patterns

Do not:

- Make this page look like a chatbot transcript
- Hide risk behind positive metrics
- Show cost without outcome context
- Show activity as if it equals success
- Allow unsafe actions without confirmation
- Expose sensitive traces to unauthorized users
- Mix RTL and LTR alignment incorrectly
- Bury approvals in secondary navigation
- Hide incident state
- Present AI Employee behavior as ungoverned magic

---

## 34. Golden Rule

The AI Employee Detail page must make every AI Employee feel accountable.

If the user cannot understand what the AI Employee does, whether it is working, what it costs, what it can access, what risks exist, and what to do next, the mockup has failed.
