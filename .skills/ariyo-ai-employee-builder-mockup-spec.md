# Ariyo AI Employee Builder Mockup Specification Skill

## 1. Core Contract

Ariyo AI Employee Builder Mockup Specification is not a prompt form.

It is the governed mockup specification for the most important creation surface in Ariyo: the place where a customer designs, configures, tests, governs, simulates, approves, launches, and improves an AI Employee.

The AI Employee Builder must make Ariyo feel like an operating system for digital employees, not a chatbot builder, workflow automation form, agent playground, prompt library, or no-code widget.

A customer must be able to understand five things immediately:

1. What job this AI Employee will do.
2. What knowledge, tools, workflows, memory, and permissions it will use.
3. What risks, costs, and governance controls apply.
4. How it behaves in simulation before production.
5. What is required before it can safely go live.

Ariyo must make AI Employee creation powerful, understandable, governed, reversible, and confidence-building.

---

## 2. Mandatory Global RTL/LTR Layout Law

This specification must obey the Ariyo Global RTL/LTR Layout Law.

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to:

- builder shell
- stepper/wizard
- side panels
- cards
- tabs
- configuration forms
- text areas
- prompt/role editors
- tool permission selectors
- knowledge source selectors
- memory configuration
- policy warnings
- approval panels
- simulation chat/test surfaces
- result comparison views
- cost/risk estimates
- launch checklist
- modals
- drawers
- breadcrumbs
- progress indicators
- mobile layouts
- responsive states

### 2.1 RTL Builder Behavior

For Persian and Arabic:

- the main navigation and builder sidebar appear on the right
- the primary configuration flow starts from the right
- stepper progression uses RTL reading order
- section headers, helper text, form labels, descriptions, warnings, and empty states are right-aligned
- text input direction defaults to RTL for Persian/Arabic content
- code snippets, JSON, API examples, logs, technical identifiers, and model/tool IDs remain LTR with correct isolation
- directional icons are mirrored when semantically directional
- drawer panels open from the right unless tied to a specific component context
- simulation transcript bubbles align according to speaker and locale, while overall interface remains RTL
- approval and launch actions align to the right

### 2.2 LTR Builder Behavior

For English and European languages:

- the main navigation and builder sidebar appear on the left
- the primary configuration flow starts from the left
- stepper progression uses LTR reading order
- labels, descriptions, warnings, and empty states are left-aligned
- text input direction defaults to LTR
- drawers open from the left or standard product convention
- approval and launch actions follow LTR product convention

### 2.3 Bidirectional Content Rule

Ariyo must support mixed-language content safely.

Examples:

- Persian UI with English integration names
- Arabic UI with English model IDs
- English UI with Persian customer examples
- RTL business instructions containing LTR product names
- JSON/tool schemas shown inside RTL experiences

All mixed-direction text must use proper bidirectional isolation so layout does not break.

---

## 3. Strategic Purpose

The AI Employee Builder is the product surface where Ariyo's core promise becomes tangible.

It must communicate that AI Employees are not random assistants. They are governed digital workers with:

- job scope
- role clarity
- tool access
- knowledge boundaries
- memory rules
- workflow responsibilities
- safety controls
- approval requirements
- cost policies
- observability
- lifecycle ownership
- measurable outcomes

This surface must serve:

- founder-led demo
- investor demo
- enterprise buyer demo
- product onboarding
- internal admin configuration
- creator/template adaptation
- customer implementation
- partner-led setup
- governance review
- production readiness

---

## 4. Primary User Roles

### 4.1 Business Builder

A non-technical customer who wants to create an AI Employee for a specific business function.

Needs:

- guided creation
- templates
- plain-language setup
- outcome definition
- safe defaults
- preview before launch

### 4.2 Operations Admin

A user responsible for workflows, approvals, and operational fit.

Needs:

- workflow mapping
- ownership
- escalation rules
- task boundaries
- handoff logic

### 4.3 Enterprise Admin

A user responsible for security, policy, access, data, governance, and audit.

Needs:

- permissions
- policy decisions
- data access boundaries
- approval gates
- audit trails
- rollback controls

### 4.4 AI Lead / Builder Expert

A power user who configures model behavior, prompts, tools, memory, tests, and evaluation.

Needs:

- advanced configuration
- simulation
- evaluation
- model routing
- safety review
- versioning

### 4.5 Partner / Implementer

A partner configuring AI Employees for a customer.

Needs:

- customer authorization
- sandbox mode
- delivery checklist
- implementation evidence
- handoff package

---

## 5. Builder Experience Principles

The builder must follow these principles:

1. **Job-first, not prompt-first** — start with the work the AI Employee performs.
2. **Outcome-first, not feature-first** — define measurable business value early.
3. **Governed by default** — permissions, tools, memory, and actions must be explicit.
4. **Simulation before production** — every meaningful AI Employee must be tested before launch.
5. **Explain risk in plain language** — users must understand why a control exists.
6. **Progressive complexity** — Basic is simple, Pro is operational, Smart is advanced.
7. **No hidden autonomy** — every automated action must have visible scope and limits.
8. **Audit everything important** — configuration changes must be traceable.
9. **Localization-aware design** — RTL/LTR behavior must be designed, not patched later.
10. **Production readiness over speed** — Ariyo must prevent unsafe launch.

---

## 6. Required Mockup Screens

The first mockup set should include these screens.

### 6.1 AI Employee Builder Landing / Start Screen

Purpose: help the user choose how to create an AI Employee.

Required sections:

- page title: “Create an AI Employee”
- short explanation of what an AI Employee is
- creation options:
  - Start from template
  - Build from scratch
  - Import from Marketplace template
  - Ask Ariyo to recommend one
- recommended templates based on business goal
- plan-aware callouts for Basic / Pro / Smart
- trust note: “You can simulate before launch”
- CTA: “Start building”

States:

- first-time user
- returning user
- enterprise admin restricted user
- private catalog-only organization
- no permission to create

### 6.2 Role & Job Definition Screen

Purpose: define what the AI Employee is hired to do.

Required fields:

- AI Employee name
- department / team
- job title
- job description
- business goal
- success metrics
- what this AI Employee should do
- what it must not do
- primary users it serves
- escalation owner

Required UI patterns:

- job card preview
- role clarity score
- ambiguity warnings
- suggested improvements
- examples by department

Acceptance criteria:

- user can understand the role without reading a long prompt
- unclear roles trigger warning states
- forbidden responsibilities can be explicitly listed

### 6.3 Outcome Definition Screen

Purpose: define measurable success before configuring behavior.

Required elements:

- claimed outcome
- measurable metric
- baseline value
- target value
- time horizon
- confidence level
- data source for measurement
- owner responsible for outcome validation

Examples:

- reduce support response time
- qualify leads faster
- create weekly reports
- detect compliance gaps
- generate campaign briefs
- triage invoices

Required UI:

- outcome card
- “how success will be measured” explanation
- confidence indicator
- missing baseline warning
- “start without baseline” controlled option

### 6.4 Knowledge & Data Sources Screen

Purpose: configure what the AI Employee knows.

Required source types:

- uploaded documents
- knowledge base articles
- internal policies
- website pages
- connected data sources
- CRM data
- support tickets
- spreadsheets
- private catalog knowledge packs
- marketplace knowledge packs

Required controls:

- source freshness
- source owner
- access level
- sensitivity classification
- sync frequency
- region/storage policy
- allowed use
- excluded use

UI must show:

- knowledge source list
- freshness badges
- sensitive data warning
- missing source warning
- RAG readiness indicator
- source preview
- source permission explanation

### 6.5 Tools & Integrations Screen

Purpose: define what the AI Employee can do.

Required tool categories:

- read-only tools
- draft-only tools
- approval-required tools
- automated action tools
- admin-only tools
- external integrations

Examples:

- Gmail
- Calendar
- CRM
- Slack/Teams
- Notion/Docs
- accounting tools
- ticketing systems
- internal APIs
- marketplace tools

Required UI:

- tool cards
- permission level selector
- action scope
- approval requirement
- cost impact
- risk level
- test connection
- dependency status

Forbidden UX:

- one-click broad access without explanation
- vague permission labels like “full access” without scope
- hiding write/delete/send capabilities

### 6.6 Memory & Context Screen

Purpose: define what the AI Employee remembers and how it uses context.

Required memory options:

- no persistent memory
- task memory
- customer/workspace memory
- team memory
- long-term governed memory

Required controls:

- what can be remembered
- what must never be remembered
- retention period
- deletion rules
- review requirement
- sensitive data exclusion
- memory owner
- memory audit

UI must include:

- memory boundary diagram
- retention selector
- privacy warning
- memory examples
- reset memory action
- export memory summary

### 6.7 Behavior, Tone & Instructions Screen

Purpose: configure how the AI Employee communicates and decides.

Required fields:

- working style
- tone
- escalation behavior
- uncertainty behavior
- refusal behavior
- customer-facing vs internal-facing mode
- language/localization behavior
- response length preference
- evidence/citation requirement
- approval request style

Required UI:

- live preview
- example conversation cards
- behavior presets
- warning when tone conflicts with job type
- customer-facing risk indicator

Localization requirement:

- Persian/Arabic behavior examples must be RTL and culturally natural
- English/European examples must be LTR

### 6.8 Policy, Permissions & Governance Screen

Purpose: ensure the AI Employee obeys enterprise controls.

Required controls:

- workspace policy inheritance
- role-based access
- tool permission limits
- data access boundaries
- marketplace restrictions
- model/provider restrictions
- region restrictions
- approval requirements
- audit logging
- emergency pause
- allowed users
- allowed departments

Required UI:

- policy decision panel
- inherited policy list
- blocked configuration explanations
- exception request flow
- approval preview
- governance readiness score

Must integrate with:

- enterprise-account-governance
- enterprise-workspace-policy-engine
- enterprise-approval-workflows
- ai-agent-permissions-runtime
- human-review-governance

### 6.9 Cost, Plan & Model Routing Screen

Purpose: explain plan compatibility and expected cost.

Required elements:

- Basic / Pro / Smart plan fit
- model profile selection
- expected monthly usage
- estimated cost range
- cost controls
- budget limits
- fallback model behavior
- high-cost action warnings
- Smart-only capabilities

UI must show:

- plan badge
- cost forecast
- budget slider
- model routing explanation
- “why this model” tooltip
- cost anomaly warning preview

Plan behavior:

- Basic: simple defaults, limited tools, low cost, safe boundaries
- Pro: operational workflows, integrations, team use, approval support
- Smart: advanced model routing, multi-agent capability, deeper memory, advanced governance

### 6.10 Simulation & Test Lab Screen

Purpose: test the AI Employee before production.

Required simulation modes:

- sample conversation
- workflow simulation
- tool-call dry run
- approval simulation
- escalation simulation
- failure simulation
- cost simulation
- policy violation simulation
- customer-facing simulation

Required UI:

- test scenario builder
- simulation transcript
- expected vs actual behavior
- tool call preview
- risk flags
- pass/fail criteria
- retry/improve suggestions
- save scenario
- submit for review

Acceptance criteria:

- launch cannot proceed when critical simulation fails
- failed tests provide actionable fix suggestions
- simulation output must be clearly marked as non-production

### 6.11 Review & Launch Checklist Screen

Purpose: decide whether the AI Employee can go live.

Required checklist groups:

- role clarity
- outcome definition
- knowledge readiness
- tool permissions
- memory controls
- policy compliance
- cost controls
- simulation results
- owner assignment
- approval status
- rollback plan
- monitoring readiness

Required actions:

- Save draft
- Request review
- Run simulation
- Fix blockers
- Launch to sandbox
- Launch to production
- Schedule launch

Status levels:

- Draft
- Needs configuration
- Needs simulation
- Needs approval
- Ready for sandbox
- Ready for production
- Blocked
- Launched

### 6.12 Post-Launch Monitoring Preview

Purpose: show what happens after launch.

Required cards:

- first 24h watch
- runtime health
- outcome tracking
- approval queue
- cost watch
- incident watch
- customer feedback
- governance audit
- rollback button

This makes the builder feel connected to operations, not just creation.

---

## 7. Primary Layout Structure

The builder should use a three-zone layout on desktop.

### 7.1 Navigation / Step Zone

Shows:

- current step
- completion status
- blockers
- warnings
- approval state
- save state

### 7.2 Main Configuration Zone

Shows:

- forms
- builders
- selectors
- previews
- recommendations
- validation feedback

### 7.3 Intelligence / Review Zone

Shows:

- Ariyo assistant suggestions
- risk summary
- cost summary
- readiness summary
- policy summary
- next best action

For RTL languages, the order must mirror appropriately while maintaining logical reading flow.

---

## 8. Navigation Model

Recommended navigation:

1. Start
2. Role
3. Outcomes
4. Knowledge
5. Tools
6. Memory
7. Behavior
8. Governance
9. Cost & Plan
10. Simulation
11. Review
12. Launch

The user should be able to:

- move step-by-step
- jump to completed steps
- see blocked steps
- save draft anytime
- exit safely
- duplicate an AI Employee
- import from template
- request help

---

## 9. Component Requirements

Required components:

- BuilderStepper
- AIEmployeeNameCard
- RoleDefinitionCard
- OutcomeMetricCard
- KnowledgeSourcePicker
- ToolPermissionCard
- MemoryBoundarySelector
- BehaviorPreviewPanel
- PolicyDecisionPanel
- CostForecastCard
- SimulationScenarioBuilder
- SimulationTranscript
- RiskFlagList
- ReadinessChecklist
- ApprovalStatusBanner
- LaunchGateCard
- PostLaunchWatchCard
- LocalizationDirectionProvider

Each component must support:

- RTL/LTR layout
- loading state
- empty state
- error state
- disabled state
- permission-denied state
- mobile state
- audit metadata where relevant

---

## 10. Visual Direction

The builder should feel:

- premium
- calm
- operational
- enterprise-ready
- intelligent
- not playful
- not developer-only
- not chatbot-like

Recommended style:

- clean surface hierarchy
- soft cards
- strong typography
- minimal but meaningful color
- clear status badges
- professional empty states
- restrained motion
- trustworthy warnings
- confident CTAs

Avoid:

- neon AI cliché visuals
- robot mascots as primary metaphor
- excessive gradients
- vague “magic” language
- overloaded forms
- hidden advanced settings

---

## 11. Copywriting Rules

Use job and business language before technical language.

Prefer:

- “What should this AI Employee be responsible for?”
- “Which actions require approval?”
- “What data can it use?”
- “How will you measure success?”
- “Test before launch”

Avoid:

- “Enter system prompt” as the primary action
- “Grant all permissions”
- “Let AI decide”
- “Autonomous mode” without governance context
- “Magic automation”

---

## 12. Empty States

Required empty states:

### 12.1 No Knowledge Sources

Message: “This AI Employee does not know your business yet.”

CTA: “Add knowledge source”

### 12.2 No Tools Connected

Message: “This AI Employee can answer, but cannot take action yet.”

CTA: “Connect a tool”

### 12.3 No Outcome Defined

Message: “Ariyo needs a success target before this AI Employee can be measured.”

CTA: “Define outcome”

### 12.4 Simulation Not Run

Message: “Run a simulation before production launch.”

CTA: “Start simulation”

### 12.5 Approval Required

Message: “This configuration requires approval before launch.”

CTA: “Request approval”

---

## 13. Error and Warning States

Critical warnings:

- broad tool access
- no human owner
- missing success metric
- sensitive data source without policy
- high estimated cost
- incompatible plan
- blocked region
- failed simulation
- missing approval
- unsafe memory setting
- model provider restricted
- unresolved dependency

Warnings must explain:

1. What is wrong
2. Why it matters
3. How to fix it
4. Whether launch is blocked

---

## 14. Responsive Behavior

### 14.1 Desktop

Use three-zone builder layout.

### 14.2 Tablet

Collapse intelligence/review zone into a drawer.

### 14.3 Mobile

Use single-column step flow with persistent bottom action bar.

Mobile must still show:

- current step
- blockers
- save status
- primary action
- RTL/LTR alignment

---

## 15. Analytics Events

Track:

- builder_started
- builder_template_selected
- ai_employee_role_defined
- outcome_defined
- knowledge_source_added
- tool_permission_configured
- memory_policy_selected
- governance_blocker_triggered
- cost_forecast_viewed
- simulation_started
- simulation_failed
- simulation_passed
- approval_requested
- launch_blocked
- sandbox_launch_started
- production_launch_started
- ai_employee_launched
- builder_abandoned
- builder_resumed

Each event must include:

- organization_id
- workspace_id
- plan
- locale
- direction
- user_role
- ai_employee_id
- builder_step
- risk_level where relevant
- blocker_count where relevant

---

## 16. Frontend Handoff Requirements

Mockup handoff must include:

- desktop RTL
- desktop LTR
- tablet RTL
- tablet LTR
- mobile RTL
- mobile LTR
- empty states
- loading states
- error states
- blocked launch state
- successful launch state
- permission-denied state
- approval-required state
- simulation pass/fail states

Design tokens must include:

- spacing
- typography
- direction-aware layout variables
- status colors
- semantic badges
- card elevation
- border radius
- form density
- mobile spacing

---

## 17. Accessibility Requirements

The builder must support:

- keyboard navigation
- visible focus states
- screen reader labels
- ARIA labels for steppers and status badges
- accessible error summaries
- readable contrast
- no color-only warnings
- accessible modals/drawers
- logical tab order in RTL and LTR
- form labels attached to inputs
- simulation transcripts readable by assistive technology

---

## 18. Security and Privacy Requirements

The mockup must visually communicate that:

- tools require explicit permission
- sensitive data is classified
- memory is controlled
- approvals are enforced
- audit logs exist
- production launch can be blocked
- rollback exists
- customer data is not casually exposed

Do not show fake security claims unless backed by product truth.

---

## 19. MVP Mockup Cut

The first mockup should include:

1. Start screen
2. Role definition
3. Knowledge sources
4. Tools & permissions
5. Governance summary
6. Simulation screen
7. Review & launch checklist

This is enough to demonstrate Ariyo's category-defining difference.

---

## 20. Investor Demo Cut

Investor demo should emphasize:

- AI Employee OS positioning
- role-based creation
- governance controls
- simulation before launch
- marketplace template import
- outcome measurement
- cost/readiness controls

---

## 21. Enterprise Buyer Demo Cut

Enterprise demo should emphasize:

- policy inheritance
- approval gates
- data access controls
- audit trail
- region/model restrictions
- launch readiness
- sandbox-first deployment
- rollback and monitoring

---

## 22. Basic / Pro / Smart Builder Behavior

### 22.1 Basic

- guided wizard
- fewer tools
- simple templates
- safe defaults
- low-cost model routing
- limited memory
- simple simulation
- no advanced multi-agent setup

### 22.2 Pro

- workflow-focused configuration
- team ownership
- integrations
- approval routing
- outcome tracking
- operational simulation
- marketplace template adaptation

### 22.3 Smart

- advanced model routing
- richer memory controls
- multi-agent/team setup
- deeper simulation
- enterprise policies
- cost optimization
- advanced governance
- production launch controls

---

## 23. Acceptance Criteria

The AI Employee Builder mockup is successful if:

- a non-technical buyer understands what an AI Employee is
- an enterprise admin trusts the governance model
- a designer can create the screen hierarchy
- a frontend engineer can identify components and states
- a founder can demo value in under five minutes
- the builder does not look like a generic chatbot setup
- RTL and LTR behavior are explicitly represented
- the launch flow feels safe, not casual
- simulation is central, not optional decoration
- permissions and data boundaries are visible

---

## 24. Forbidden Builder Patterns

Never design the builder to:

- launch production AI Employees without simulation
- hide permissions behind vague labels
- make prompts the first and only design object
- imply full autonomy without governance
- ignore cost estimates
- ignore plan limits
- ignore data residency
- ignore RTL/LTR behavior
- use chatbot metaphors as the main product model
- bury approval requirements
- allow unsafe memory defaults
- make error states unclear
- make blocked launch feel like a bug instead of a safety control

---

## 25. Golden Rule

The AI Employee Builder must feel like hiring, configuring, testing, governing, and launching a digital employee into a real business environment.

If the mockup feels like writing a prompt, it has failed.
