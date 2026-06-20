# Ariyo Workflow Builder Mockup Specification

## 1. Core Contract

Ariyo Workflow Builder Mockup Specification is not a drag-and-drop automation canvas brief.

It is the governed mockup specification for the product surface where customers design, simulate, approve, version, launch, monitor, and improve workflows that coordinate AI Employees, humans, tools, integrations, knowledge sources, permissions, approvals, error handling, and business outcomes.

The Workflow Builder must make Ariyo feel like an operating system for accountable AI work, not a generic automation builder, Zapier clone, chatbot flow, or visual programming playground.

Every workflow shown in the mockup must be understandable, governable, testable, reversible, cost-aware, permission-scoped, versioned, and tied to a measurable business outcome.

---

## 2. Global RTL / LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to the entire Workflow Builder surface, including sidebar navigation, canvas direction, node labels, step panels, forms, breadcrumbs, tabs, empty states, tooltips, modals, approval panels, simulation output, validation messages, activity logs, tables, code-like summaries, and mobile layouts.

If the interface locale is Persian or Arabic:

- primary navigation appears on the right side when using side navigation;
- page headings, labels, descriptions, tables, chips, cards, field groups, timelines, and alerts align right;
- workflow reading direction should support right-to-left comprehension;
- directional icons must be mirrored where meaning depends on direction;
- timeline and step progression should be visually understandable in RTL;
- English technical identifiers, API names, integration names, and code snippets may remain LTR inside RTL containers.

If the interface locale is English or a European LTR language:

- primary navigation appears on the left side when using side navigation;
- page headings, labels, descriptions, tables, chips, cards, field groups, timelines, and alerts align left;
- workflow reading direction defaults to left-to-right;
- directional icons follow LTR conventions.

---

## 3. Purpose of This Mockup

The Workflow Builder mockup must demonstrate how a customer creates a business workflow that uses one or more AI Employees safely.

It must answer these questions quickly:

1. What business process is this workflow automating or augmenting?
2. Which AI Employees are involved?
3. What triggers the workflow?
4. What tools and integrations are used?
5. Where does a human approve, review, or intervene?
6. What can go wrong?
7. How will Ariyo simulate the workflow before launch?
8. How will Ariyo measure outcomes after launch?
9. What governance, permissions, cost limits, and safety controls apply?
10. How does the customer move from draft to production confidently?

---

## 4. Primary User Roles

### 4.1 Business Operator

Wants to automate or improve a business process without understanding engineering implementation.

Needs:

- guided workflow creation;
- plain-language step descriptions;
- outcome definition;
- approval visibility;
- safe testing;
- operational confidence.

### 4.2 AI Employee Manager

Owns AI Employee behavior and performance.

Needs:

- AI Employee assignment per workflow step;
- capability checks;
- model/profile compatibility;
- outcome tracking;
- risk and cost visibility.

### 4.3 Admin / Governance Owner

Controls policy, permissions, compliance, and production access.

Needs:

- policy validation;
- permission review;
- approval gates;
- audit trail;
- launch readiness;
- rollback controls.

### 4.4 Developer / Integration Owner

Configures APIs, webhooks, connectors, and advanced logic.

Needs:

- integration mapping;
- tool schema visibility;
- webhook/test payloads;
- error handling;
- advanced configuration;
- logs and diagnostics.

### 4.5 Executive / Department Owner

Needs to understand value and risk without low-level workflow editing.

Needs:

- business outcome summary;
- cost estimate;
- risk rating;
- launch status;
- expected ROI or efficiency gain.

---

## 5. Page Identity

### Page Name

Workflow Builder

### Product Area

Customer App → Automation & Operations → Workflow Builder

### Primary Route Pattern

`/workflows/new`

`/workflows/{workflowId}/builder`

### Related Surfaces

- Dashboard
- AI Employee Builder
- AI Employee Detail
- Workflow Detail
- Simulation Lab
- Approval Queue
- Enterprise Admin Policy Engine
- Integration Settings
- Marketplace Template Detail
- Audit Log
- Launch Readiness Command Center

---

## 6. Strategic Mockup Goal

This page must prove that Ariyo can coordinate AI Employees inside real business workflows with enterprise-grade governance.

The visual message should be:

> “You can design AI-powered work here, but Ariyo will not let you launch unsafe, unclear, untested, unapproved, or uncontrolled automation.”

---

## 7. Main Layout Architecture

### 7.1 Desktop Layout

Recommended structure:

1. App shell sidebar
2. Top workflow header
3. Workflow status bar
4. Central workflow canvas
5. Step configuration panel
6. Right/left contextual intelligence rail depending on locale
7. Bottom simulation / validation drawer

For LTR:

- global sidebar: left;
- canvas: center;
- configuration/intelligence panel: right;
- progression: left to right.

For RTL:

- global sidebar: right;
- canvas: center;
- configuration/intelligence panel: left or mirrored according to product convention;
- progression: right to left or clearly mirrored for reading comprehension.

### 7.2 Tablet Layout

- Sidebar collapses into icon rail or top drawer.
- Canvas remains primary.
- Step settings become slide-over panel.
- Simulation drawer remains accessible via bottom sticky bar.

### 7.3 Mobile Layout

Workflow builder should not attempt full complex canvas editing on small screens unless simplified.

Mobile experience should support:

- viewing workflow summary;
- editing basic fields;
- approving/rejecting launch;
- checking simulation results;
- pausing workflow;
- viewing incidents;
- not full node-heavy construction unless using guided step list mode.

---

## 8. Required Page Sections

### 8.1 Workflow Header

The header must include:

- workflow name;
- status badge: Draft, Simulation Required, Review Required, Ready to Launch, Live, Paused, Failed, Deprecated;
- owner/team;
- workspace/department;
- plan badge: Basic, Pro, Smart;
- version indicator;
- last edited timestamp;
- primary actions.

Primary actions:

- Save Draft
- Run Simulation
- Request Approval
- Launch
- Pause
- Roll Back
- View Audit Log

Forbidden:

- launching from the header without validation;
- hiding production risk behind a simple “Publish” button;
- showing approval state as decoration without blocking unsafe launch.

---

### 8.2 Workflow Objective Card

This card explains the business purpose.

Fields:

- Workflow purpose
- Business outcome
- Success metric
- Expected frequency
- Department owner
- Customer/customer-data impact
- Human oversight level

Example copy:

> “This workflow reviews inbound enterprise leads, enriches company context, assigns a sales AI Employee, drafts a personalized response, and waits for human approval before sending.”

The mockup must show that workflow building begins with an outcome, not with a trigger.

---

### 8.3 Trigger Section

Trigger types:

- Manual trigger
- Scheduled trigger
- Event-based trigger
- Webhook trigger
- CRM event
- Marketplace template trigger
- Customer lifecycle trigger
- Support ticket trigger
- File/document upload trigger
- Email/message trigger
- Approval completion trigger

Trigger card must show:

- trigger name;
- source app/integration;
- frequency;
- sample event;
- required permissions;
- data sensitivity;
- failure behavior.

Basic plan:

- manual and simple scheduled triggers.

Pro plan:

- integrations, events, webhooks, approval triggers.

Smart plan:

- advanced event orchestration, multi-agent triggers, predictive triggers, cross-workspace triggers with governance.

---

### 8.4 Workflow Canvas

The canvas must show workflow steps as accountable units.

Each node/step must include:

- step name;
- step type;
- assigned AI Employee or human owner;
- tool/integration dependency;
- risk badge;
- cost estimate indicator;
- approval requirement;
- validation state;
- error handling state.

Step types:

- Trigger
- AI Employee Task
- Human Approval
- Tool Action
- Data Lookup
- Knowledge Retrieval
- Decision Branch
- Notification
- Wait/Delay
- Condition
- Webhook/API Call
- Marketplace Template Step
- End State

Canvas must support:

- zoom;
- grouping;
- step numbering;
- branch labels;
- warning overlays;
- validation badges;
- simulation replay path.

Canvas must not become decorative. Every visual element must convey operational meaning.

---

### 8.5 Step Configuration Panel

When a step is selected, a configuration panel opens.

Panel sections:

1. Step Summary
2. Assigned Actor
3. Inputs
4. Outputs
5. Tools & Integrations
6. Knowledge & Memory Access
7. Permissions
8. Policy Constraints
9. Cost Limits
10. Error Handling
11. Simulation Test Case
12. Audit Metadata

For AI Employee Task steps:

- assigned AI Employee;
- role in this workflow;
- task prompt/objective;
- allowed tools;
- disallowed actions;
- memory access;
- knowledge sources;
- model profile;
- confidence threshold;
- human review rule;
- fallback behavior.

For Tool Action steps:

- integration;
- action;
- required fields;
- permission scope;
- idempotency behavior;
- retry policy;
- failure mode;
- audit event.

---

### 8.6 AI Employee Assignment Panel

This panel shows which AI Employee performs a step.

Required elements:

- employee avatar/icon;
- employee name;
- role title;
- capability match score;
- governance status;
- cost profile;
- tool permissions;
- current workload;
- recent performance;
- risk warnings.

Example:

> “Sales Development AI — Good fit for lead qualification. Missing permission: CRM write access. Human approval required before outbound email.”

The mockup should make AI Employees feel like operational roles, not model aliases.

---

### 8.7 Human Approval Gates

Approval nodes must be visually distinct.

Approval gate fields:

- approver role;
- approver group;
- SLA;
- escalation path;
- approval criteria;
- evidence required;
- what happens if rejected;
- what happens if expired.

Approval types:

- launch approval;
- data access approval;
- outbound communication approval;
- billing/cost approval;
- marketplace asset install approval;
- security approval;
- legal/procurement approval;
- high-risk automation approval.

The mockup must show that approvals are operational checkpoints, not comments.

---

### 8.8 Governance & Policy Rail

A persistent rail should show:

- policy compliance score;
- blocked policies;
- warnings;
- required approvals;
- data sensitivity;
- region compatibility;
- model/provider restrictions;
- marketplace dependency status;
- audit readiness;
- production readiness.

Status types:

- Pass
- Warning
- Blocked
- Approval Required
- Simulation Required
- Admin Override Required

Example warning:

> “This workflow sends external emails. Enterprise policy requires human approval before first production run.”

---

### 8.9 Simulation Drawer

Simulation is mandatory before production launch.

Simulation drawer sections:

1. Test Scenario
2. Sample Input
3. Expected Output
4. Step-by-Step Replay
5. AI Employee Reasoning Summary
6. Tool Calls
7. Policy Checks
8. Cost Estimate
9. Failure Cases
10. Launch Recommendation

Simulation statuses:

- Not Run
- Passed
- Passed with Warnings
- Failed
- Blocked by Policy
- Needs Human Review

The mockup must show simulation output as evidence, not just a success toast.

---

### 8.10 Error Handling & Recovery

Each workflow must define failure behavior.

Required error handling options:

- retry;
- skip;
- pause workflow;
- notify owner;
- escalate to human;
- use fallback AI Employee;
- reroute model;
- reconnect integration;
- rollback last action;
- create support case;
- open incident.

Show error handling visually on the canvas and in the configuration panel.

---

### 8.11 Versioning & Change Management

The builder must support version control.

Required elements:

- current version;
- draft version;
- production version;
- compare changes;
- change summary;
- reviewer comments;
- rollback target;
- migration impact;
- dependency changes;
- approval history.

Actions:

- Save as Draft
- Compare to Live
- Request Review
- Promote to Production
- Roll Back
- Archive Version

---

### 8.12 Cost & Usage Estimate

Show cost before launch.

Metrics:

- estimated monthly runs;
- estimated AI cost;
- integration cost risk;
- tool/API usage;
- plan limit usage;
- cost per successful run;
- budget policy status;
- expected ROI/efficiency signal.

Basic:

- simple cost estimate.

Pro:

- workflow-level budget controls.

Smart:

- cost forecasting, anomaly detection, model routing optimization, approval gates.

---

### 8.13 Production Launch Checklist

Before launch, show checklist:

- Objective defined
- Trigger configured
- AI Employee assigned
- Tools connected
- Knowledge sources verified
- Permissions approved
- Cost limits set
- Error handling defined
- Human approval gates configured
- Simulation passed
- Policy checks passed
- Owner assigned
- Rollback path ready
- Audit logging enabled

Launch button must remain disabled until mandatory checks pass.

---

## 9. Empty States

### No Workflow Yet

Message:

> “Start with the business outcome you want Ariyo to operate.”

Actions:

- Build from scratch
- Start from Marketplace template
- Use AI setup assistant
- Import existing workflow

### No AI Employee Assigned

Message:

> “Assign an AI Employee to make this step accountable.”

Actions:

- Choose existing AI Employee
- Create new AI Employee
- Use recommended employee

### No Simulation Run

Message:

> “Simulation is required before production launch.”

Action:

- Run first simulation

---

## 10. Loading States

Use skeletons for:

- canvas loading;
- integration validation;
- policy checks;
- simulation run;
- version compare;
- cost estimate;
- AI recommendation.

Do not use vague spinners for long-running simulations. Show progress by phase.

Example simulation phases:

1. Preparing test data
2. Checking permissions
3. Running AI Employee steps
4. Simulating tool calls
5. Evaluating policies
6. Estimating cost
7. Generating launch recommendation

---

## 11. Error States

Error states must be actionable.

Examples:

- Missing integration permission
- Policy blocks outbound action
- AI Employee lacks tool access
- Knowledge source unavailable
- Region restriction conflict
- Cost limit exceeded
- Approval route missing
- Simulation failed
- Version conflict

Each error must show:

- what failed;
- why it matters;
- who can fix it;
- recommended action;
- whether launch is blocked.

---

## 12. Plan-Aware Behavior

### Basic

Basic Workflow Builder should feel simple and safe.

Allowed:

- manual workflows;
- simple scheduled workflows;
- limited steps;
- basic AI Employee assignment;
- simple simulation;
- basic cost visibility;
- limited integrations;
- no advanced branching unless enabled.

Design tone:

- guided;
- minimal;
- non-intimidating.

### Pro

Pro Workflow Builder supports operational teams.

Allowed:

- multi-step workflows;
- integrations;
- approvals;
- branches;
- team ownership;
- versioning;
- workflow analytics;
- policy checks;
- customer success workflows.

Design tone:

- powerful but manageable.

### Smart

Smart Workflow Builder supports advanced AI operations.

Allowed:

- multi-agent workflows;
- advanced branching;
- predictive triggers;
- model routing;
- deep simulation;
- policy automation;
- auto-remediation;
- enterprise approvals;
- advanced observability;
- cost optimization.

Design tone:

- command-center grade;
- enterprise-safe;
- highly intelligent.

---

## 13. Navigation Requirements

Primary builder navigation:

- Overview
- Canvas
- Steps
- Simulation
- Approvals
- Versions
- Runs
- Settings

Secondary navigation:

- Integrations
- AI Employees
- Policies
- Audit Log
- Marketplace Templates

The user must always know:

- where they are;
- whether the workflow is draft/live;
- what blocks launch;
- what next action matters.

---

## 14. Component Requirements

Required components:

- WorkflowCanvas
- WorkflowNode
- TriggerNode
- AIEmployeeStepNode
- HumanApprovalNode
- ToolActionNode
- DecisionBranchNode
- WorkflowHeader
- WorkflowStatusBadge
- StepConfigPanel
- PolicyRail
- SimulationDrawer
- LaunchChecklist
- VersionCompareModal
- CostEstimateCard
- ErrorHandlingPanel
- ApprovalGateCard
- DependencyWarningCard
- AuditTrailDrawer
- PlanLimitBanner
- RTLLayoutWrapper

Components must support:

- responsive layouts;
- keyboard navigation;
- accessible labels;
- RTL mirroring;
- loading/error/empty states;
- permission-based visibility.

---

## 15. Visual Direction

The page should feel:

- operational;
- precise;
- enterprise-ready;
- calm;
- intelligent;
- safe;
- not overly playful.

Visual motifs:

- workflow as operating system;
- AI Employees as accountable actors;
- policies as guardrails;
- simulation as evidence;
- launch as controlled production movement.

Avoid:

- colorful toy-like automation builders;
- excessive gradients;
- cartoon agents;
- meaningless node animations;
- black-box AI magic visuals.

---

## 16. Motion & Interaction

Motion should support comprehension.

Allowed motion:

- node connection animation;
- validation scan;
- simulation replay step highlight;
- approval gate status transition;
- drawer open/close;
- branch expansion;
- policy warning reveal.

Forbidden motion:

- distracting particle effects;
- excessive bouncing;
- animation that hides blocked states;
- motion that reverses incorrectly in RTL.

---

## 17. Accessibility Requirements

The Workflow Builder must support:

- keyboard navigation;
- accessible node selection;
- screen-reader summaries for canvas;
- high contrast state badges;
- visible focus states;
- non-color-only warnings;
- reduced motion mode;
- RTL screen-reader order validation;
- readable labels on dense nodes.

Canvas must provide a list-mode alternative for accessibility and mobile.

---

## 18. Security & Privacy Requirements

The mockup must show security and privacy controls as first-class elements.

Required visibility:

- data sensitivity;
- tool permission scope;
- integration access;
- knowledge source access;
- audit logging;
- policy blockers;
- human review requirements;
- region compatibility;
- external action warnings;
- sensitive output warning.

Forbidden:

- hiding data access inside advanced settings;
- allowing production launch without permission review;
- showing AI Employee actions as risk-free;
- presenting external tool calls without audit trail.

---

## 19. Analytics Events

Track:

- workflow_builder_opened
- workflow_created
- workflow_trigger_selected
- workflow_step_added
- workflow_ai_employee_assigned
- workflow_tool_connected
- workflow_policy_warning_shown
- workflow_policy_blocked
- workflow_approval_gate_added
- workflow_simulation_started
- workflow_simulation_passed
- workflow_simulation_failed
- workflow_launch_requested
- workflow_approval_requested
- workflow_launched
- workflow_paused
- workflow_rollback_started
- workflow_version_compared
- workflow_cost_estimate_viewed
- workflow_error_handling_configured

Events must include:

- org_id;
- workspace_id;
- workflow_id;
- user_role;
- plan;
- locale;
- direction: rtl/ltr;
- risk_level;
- policy_status;
- version_id.

---

## 20. Frontend Handoff Requirements

Handoff must include:

- desktop mockup;
- tablet mockup;
- mobile/list-mode mockup;
- RTL variant;
- LTR variant;
- empty states;
- loading states;
- blocked launch state;
- simulation passed state;
- simulation failed state;
- approval required state;
- live workflow state;
- paused workflow state;
- version comparison modal;
- production launch confirmation modal;
- component inventory;
- responsive behavior notes;
- accessibility notes;
- analytics event map.

---

## 21. Mockup Acceptance Criteria

The Workflow Builder mockup is acceptable only if:

1. A non-technical buyer understands the workflow's business purpose.
2. A technical user understands the workflow's dependencies.
3. An admin understands the governance risks.
4. A CSM understands launch readiness.
5. A designer can create the page from the spec.
6. A frontend engineer can identify components and states.
7. Persian/Arabic RTL behavior is fully specified.
8. English/European LTR behavior is fully specified.
9. Simulation is visible as a required gate.
10. Production launch is blocked until readiness checks pass.
11. AI Employees are shown as accountable actors.
12. Human approvals are visible and operational.
13. Cost and permission risks are visible.
14. The page feels like Ariyo, not a generic automation tool.

---

## 22. Forbidden Workflow Builder Patterns

Never design the Workflow Builder as:

- a prompt-only form;
- a generic automation canvas;
- a Zapier-style flow without governance;
- a chatbot flow builder;
- a no-code toy interface;
- a developer-only tool;
- a black-box agent launcher;
- a page that allows launch without simulation;
- a page that hides permissions;
- a page that hides cost risk;
- a page that hides approval requirements;
- a page that ignores RTL/LTR behavior;
- a page where workflow success is measured only by execution count.

---

## 23. Golden Rule

Ariyo Workflow Builder must make AI-powered work design feel powerful, safe, accountable, and production-ready.

If the user cannot understand what the workflow does, who is accountable, what data it uses, what tools it can call, what it costs, what can go wrong, how it was tested, and who approved it, the mockup has failed.
