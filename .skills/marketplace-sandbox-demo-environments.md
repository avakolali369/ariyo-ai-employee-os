# Ariyo Marketplace Sandbox & Demo Environments Skill

## Core Contract

Ariyo Marketplace Sandbox & Demo Environments is not a preview modal.

It is the governed try-before-install, safe-simulation, isolated-execution, demo-data, proof-of-concept, partner-demo, enterprise-validation, and customer-confidence system that lets customers evaluate Marketplace assets without exposing real business data, triggering unsafe automation, spending uncontrolled AI budget, or changing production systems.

Ariyo must let customers understand how a template behaves before they install it.

Ariyo must never let a demo environment become a hidden production environment.

---

## 1. Purpose

This skill defines how Ariyo should design, build, govern, and operate sandbox and demo environments for Marketplace assets, including:

- AI Employee templates
- Agent Team templates
- Workflow templates
- Knowledge packs
- GEO templates
- Integration bundles
- Private catalog assets
- Internal enterprise templates
- Partner solutions
- Certified Marketplace assets
- Enterprise proof-of-concept environments

The sandbox system must help customers answer:

1. What does this asset do?
2. What data does it need?
3. What outputs does it produce?
4. What tools might it call?
5. What permissions would it require in production?
6. What cost range should be expected?
7. What risks should be reviewed?
8. What business outcome might it support?
9. What would installation require?
10. What happens if the asset fails?

The sandbox must reduce uncertainty before install.

It must not bypass install governance.

---

## 2. Strategic Role in Ariyo

Sandbox and demo environments support:

- Marketplace conversion
- Enterprise procurement confidence
- Creator template quality
- Partner pre-sales demos
- Internal sales demonstrations
- Customer training
- Simulation before activation
- Safe proof-of-concept workflows
- Security and compliance review
- Template benchmarking
- Outcome expectation setting
- Support and troubleshooting reproduction

Ariyo Marketplace must not ask customers to blindly trust an AI automation asset.

Customers should be able to test safely first.

---

## 3. Related Ariyo Skills

This skill depends on and must coordinate with:

- `marketplace-installation-entitlements.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-certification-program.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-customer-support-operations.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-internal-template-governance.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-data-residency-region-controls.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-observability-tracing.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `human-review-governance.md`
- `enterprise-implementation-methodology.md`
- `enterprise-customer-training-certification.md`

Sandbox behavior must never conflict with Marketplace trust, permissions, billing, evidence, region, or policy controls.

---

## 4. Sandbox Principles

### 4.1 Safe by Default

Sandbox environments must default to:

- No production writes
- No real external side effects
- No live customer data unless explicitly authorized
- No uncontrolled tool execution
- No irreversible actions
- No production billing events
- No hidden integrations
- No unsafe model routing
- No creator access to customer sandbox content without permission

### 4.2 Demo Must Be Honest

A sandbox must not exaggerate template capability.

Demo outputs must clearly indicate:

- simulated data
- simulated integrations
- mocked tool calls
- estimated costs
- assumed configuration
- production requirements
- limitations
- known risks

### 4.3 Simulation Before Production

Every complex Marketplace asset should support sandbox simulation before production activation when technically feasible.

### 4.4 Customer Control

Customers must understand what is simulated, what is real, what is stored, and what will happen if they proceed to install.

### 4.5 Reversible Exploration

Sandbox sessions should be resettable, exportable where appropriate, and disposable.

---

## 5. Sandbox Environment Types

Ariyo should support multiple sandbox/demo types.

### 5.1 Static Demo

A read-only guided preview.

Used for:

- simple templates
- public listing demos
- visual walkthroughs
- example outputs
- marketplace education

Must not execute AI workflows.

### 5.2 Interactive Demo

A user can interact with a template using demo data and constrained AI execution.

Used for:

- AI Employee previews
- workflow explanations
- customer education
- template comparison

### 5.3 Simulation Sandbox

A controlled execution environment that runs the asset logic against synthetic or approved sample data.

Used for:

- pre-install confidence
- quality review
- creator testing
- enterprise validation

### 5.4 Integration Mock Sandbox

A sandbox with mocked third-party integrations.

Used for:

- CRM templates
- finance workflows
- support desk workflows
- marketing automation
- procurement workflows

### 5.5 Connected Sandbox

A customer-authorized sandbox connected to limited, non-production customer systems.

Used for:

- enterprise proof-of-concept
- technical validation
- implementation pilots

Must require stronger controls.

### 5.6 Private Catalog Demo

A sandbox for internal or private catalog assets.

Used for:

- department approvals
- governance review
- internal template testing

### 5.7 Partner Demo Environment

A partner-controlled demo environment governed by Ariyo policy.

Used for:

- implementation partner demos
- vertical solution demos
- customer pre-sales

### 5.8 Sales Demo Environment

An internal Ariyo demo environment optimized for sales and executive demonstrations.

Must use accurate claims and controlled data.

### 5.9 Training Sandbox

A sandbox used for customer enablement and certification exercises.

### 5.10 Support Reproduction Sandbox

A temporary environment used to reproduce customer issues without exposing production data unnecessarily.

---

## 6. Core Objects

### 6.1 SandboxEnvironment

Represents a demo or sandbox container.

Required fields:

- `id`
- `organization_id`
- `workspace_id`
- `asset_id`
- `asset_version_id`
- `environment_type`
- `status`
- `data_mode`
- `execution_mode`
- `region`
- `owner_user_id`
- `created_by`
- `expires_at`
- `reset_policy`
- `retention_policy`
- `permissions_profile_id`
- `cost_limit_id`
- `created_at`
- `updated_at`

### 6.2 SandboxSession

Represents a user interaction session.

Required fields:

- `id`
- `sandbox_environment_id`
- `user_id`
- `session_status`
- `started_at`
- `ended_at`
- `actions_taken`
- `outputs_generated`
- `warnings_shown`
- `estimated_cost`
- `conversion_intent`

### 6.3 DemoDataSet

Represents synthetic or approved demo data.

Required fields:

- `id`
- `name`
- `industry`
- `use_case`
- `data_classification`
- `region_compatibility`
- `contains_personal_data`
- `synthetic_status`
- `approved_for_public_demo`
- `approved_for_partner_demo`
- `created_at`
- `expires_at`

### 6.4 SandboxPermissionProfile

Defines what the sandbox may do.

Required fields:

- `id`
- `allowed_tools`
- `blocked_tools`
- `allowed_integrations`
- `blocked_integrations`
- `write_actions_allowed`
- `external_calls_allowed`
- `human_approval_required`
- `max_ai_budget`
- `max_runtime_seconds`
- `data_export_allowed`

### 6.5 SandboxSimulationResult

Represents simulation outcome.

Required fields:

- `id`
- `sandbox_environment_id`
- `asset_id`
- `asset_version_id`
- `status`
- `success_rate`
- `output_quality_score`
- `safety_score`
- `cost_estimate`
- `permission_findings`
- `dependency_findings`
- `region_findings`
- `install_readiness_decision`
- `created_at`

### 6.6 DemoConversionProfile

Represents whether demo experience led to qualified installation intent.

Required fields:

- `asset_id`
- `demo_views`
- `interactive_sessions`
- `simulation_runs`
- `install_preview_started`
- `install_started`
- `install_completed`
- `conversion_quality_score`

---

## 7. Sandbox Status Model

Valid statuses:

- `draft`
- `available`
- `initializing`
- `active`
- `paused`
- `expired`
- `resetting`
- `failed`
- `archived`
- `blocked_by_policy`
- `blocked_by_region`
- `blocked_by_entitlement`
- `blocked_by_security`

No sandbox may run when its status is blocked, expired, archived, or failed.

---

## 8. Data Modes

### 8.1 Synthetic Data

Preferred default.

Characteristics:

- no real customer data
- generated examples
- safe for public demos
- reusable across sessions
- clearly labeled

### 8.2 Sample Data

Customer or Ariyo-provided sample data.

Must be:

- approved
- classified
- scoped
- optionally redacted
- retention-limited

### 8.3 Customer Sandbox Data

Data from a customer-controlled non-production environment.

Requires:

- explicit authorization
- workspace policy approval
- region compatibility
- retention controls
- audit logging

### 8.4 Production Data Snapshot

Should be avoided by default.

Allowed only when:

- customer explicitly authorizes it
- data is minimized
- sensitive fields are redacted where possible
- access is logged
- retention is short
- policy permits it

### 8.5 No Data Demo

Used when the template can demonstrate behavior without data.

---

## 9. Execution Modes

### 9.1 Read-Only Preview

No AI execution.

### 9.2 Simulated AI Output

Pre-generated or deterministic sample output.

### 9.3 Constrained AI Execution

AI runs with limits:

- low budget
- no external writes
- no sensitive data exposure
- safe prompt boundaries
- tool restrictions

### 9.4 Mock Tool Execution

Tool calls are simulated and logged as mock actions.

### 9.5 Dry Run Workflow

Workflow logic runs without side effects.

### 9.6 Human-Approved Sandbox Execution

Higher-risk actions require approval before running.

---

## 10. Try-Before-Install Flow

A recommended flow:

1. Customer opens marketplace asset page.
2. Ariyo shows trust labels, certification, permissions, cost estimate, and sandbox availability.
3. Customer chooses `Try in Sandbox`.
4. Ariyo creates or loads sandbox environment.
5. Customer selects demo data or approved sample data.
6. Ariyo shows sandbox boundaries.
7. Customer runs guided scenario.
8. Ariyo displays outputs, tool-call simulation, cost estimate, and limitations.
9. Ariyo generates install readiness summary.
10. Customer proceeds to install preview or exits.

Sandbox-to-install transition must never skip install gates.

---

## 11. Demo Scenario Design

Each asset should define demo scenarios.

A scenario should include:

- name
- business context
- target persona
- demo dataset
- expected inputs
- expected outputs
- mocked integrations
- measurable outcome
- estimated runtime
- estimated AI cost
- known limitations
- install requirements

Example scenario types:

- Sales lead qualification
- Customer support triage
- Invoice exception detection
- GEO content optimization
- CRM follow-up generation
- Internal knowledge Q&A
- Procurement approval workflow
- HR onboarding assistant
- Finance reconciliation review

---

## 12. Enterprise POC Environments

Enterprise proof-of-concept environments require stronger governance.

Requirements:

- named executive sponsor
- technical owner
- security owner
- scope definition
- success criteria
- data boundary
- approved integrations
- duration limit
- cost limit
- support owner
- production conversion plan
- decommission plan

Enterprise POC must not become unmanaged shadow production.

---

## 13. Partner Demo Governance

Partners may demo Marketplace assets only when:

- partner is approved
- asset is approved for partner demo
- demo claims match approved listing claims
- customer data is not imported without authorization
- partner cannot change trust labels
- partner cannot hide limitations
- partner cannot imply certification that does not exist
- Ariyo can audit demo activity

Partner demo misconduct must affect Partner Trust Score.

---

## 14. Creator Sandbox Tools

Creators should be able to test templates before submitting them.

Creator sandbox should support:

- demo data selection
- validation runs
- dependency checks
- permission preview
- cost preview
- output quality review
- safety checks
- simulation logs
- submission readiness checklist

Creator sandbox must not give creators access to customer data.

---

## 15. Customer Training Sandbox

Training sandbox must support:

- role-specific lessons
- guided exercises
- safe mistakes
- resettable states
- certification labs
- admin scenarios
- AI Employee manager scenarios
- Marketplace install simulations
- policy approval simulations

Training environments should integrate with customer certification and enablement progress.

---

## 16. Sandbox Permission Boundaries

Sandbox permissions must be narrower than production permissions unless explicitly approved.

Default restrictions:

- no live email send
- no CRM writes
- no billing changes
- no external ticket creation
- no contract generation with legal effect
- no user provisioning
- no marketplace purchase
- no live data deletion
- no irreversible workflow triggers
- no production webhook dispatch

Allowed safe actions:

- mock tool calls
- read synthetic data
- create sandbox-only records
- generate sample outputs
- estimate cost
- preview permissions
- simulate approval flows

---

## 17. Cost Controls

Sandbox environments must control AI and infrastructure cost.

Controls:

- per-session AI token budget
- per-environment monthly budget
- maximum simulation runs
- maximum runtime
- model tier limits
- expensive tool call blocking
- model rerouting for demos
- cost warnings
- demo abuse detection

Sandbox cost must not unexpectedly bill customers unless explicitly stated.

---

## 18. Plan-Aware Sandbox Rules

### 18.1 Basic

Basic plan should support:

- public static demos
- limited interactive demos
- synthetic data only by default
- low-cost model execution
- no connected sandbox by default
- no advanced enterprise POC workflows

Goal: help customers understand value safely and simply.

### 18.2 Pro

Pro plan should support:

- interactive demos
- workflow dry runs
- integration mock sandboxes
- team demos
- template comparison
- limited sample data sandbox
- controlled install preview

Goal: help operational teams evaluate workflows before installation.

### 18.3 Smart

Smart plan should support:

- advanced simulation sandbox
- connected non-production environments
- enterprise POC workflows
- multi-agent demo execution
- private catalog sandbox
- region-aware validation
- approval workflow simulation
- detailed outcome and cost projections

Goal: help advanced customers validate complex AI Employee systems safely.

---

## 19. Region and Residency Controls

Sandbox environment must respect:

- customer region policy
- asset region compatibility
- data storage region
- processing region
- model provider region
- integration region
- backup region
- support access region

If region compatibility fails, Ariyo must block sandbox execution or switch to a compliant demo mode.

---

## 20. Privacy Requirements

Sandbox privacy rules:

- synthetic data preferred
- no customer data in public demos
- data minimization
- automatic expiration
- redaction controls
- access logs
- consent where required
- creator data isolation
- partner data isolation
- no training on customer sandbox data unless explicitly allowed

---

## 21. Security Requirements

Sandbox environments must enforce:

- isolation between customers
- isolation between creators and customers
- sandbox-only secrets
- no production credential exposure
- scoped tokens
- no persistent unauthorized data
- rate limits
- abuse detection
- audit logging
- secure teardown

Sandbox escape is a critical security risk.

---

## 22. Compliance Requirements

Sandbox records should support evidence for:

- data handling
- permission boundaries
- region compatibility
- customer authorization
- production readiness
- security review
- procurement review
- internal governance review

For enterprise customers, Ariyo should include sandbox results in implementation and procurement evidence packages when appropriate.

---

## 23. Demo Claim Governance

Demo screens must not claim:

- guaranteed ROI
- guaranteed compliance
- guaranteed automation success
- full production equivalence
- certification when uncertified
- vendor approval when not approved
- enterprise readiness when not certified
- no risk when risk exists

Demos must show limitations clearly.

---

## 24. Install Preview Integration

After sandbox use, Ariyo should offer install preview.

Install preview must include:

- required permissions
- dependencies
- data access
- estimated cost
- region compatibility
- entitlement compatibility
- approval requirements
- billing impact
- governance risks
- rollback options

Sandbox success must not equal install approval.

---

## 25. Trust Label Integration

Sandbox availability may affect trust labels, but must be truthful.

Possible labels:

- `Sandbox Available`
- `Interactive Demo Available`
- `Synthetic Demo Data`
- `Integration Mock Demo`
- `Enterprise POC Ready`
- `Simulation Passed`
- `Demo Only - Not Production Equivalent`
- `Connected Sandbox Requires Approval`

Labels must expire or update when sandbox behavior changes.

---

## 26. Ranking and Merchandising Integration

Sandbox quality can inform Marketplace ranking only when measured responsibly.

Positive signals:

- high sandbox completion rate
- install preview after sandbox
- successful simulation rate
- low confusion rate
- low support questions after sandbox
- strong outcome understanding

Negative signals:

- sandbox abandonment
- frequent demo failure
- mismatch between demo and production behavior
- high misleading claim reports
- frequent sandbox errors

Paid promotion must not hide sandbox limitations.

---

## 27. Observability Events

Required events:

- `sandbox_environment_created`
- `sandbox_environment_initialized`
- `sandbox_environment_failed`
- `sandbox_environment_expired`
- `sandbox_session_started`
- `sandbox_session_completed`
- `sandbox_session_abandoned`
- `sandbox_demo_data_selected`
- `sandbox_simulation_started`
- `sandbox_simulation_completed`
- `sandbox_simulation_failed`
- `sandbox_tool_call_mocked`
- `sandbox_permission_warning_shown`
- `sandbox_cost_warning_shown`
- `sandbox_region_blocked`
- `sandbox_install_preview_started`
- `sandbox_install_started`
- `sandbox_feedback_submitted`
- `sandbox_reset_requested`
- `sandbox_policy_violation_detected`

---

## 28. KPIs

### 28.1 Sandbox Activation Rate

Percentage of asset page visitors who start sandbox.

### 28.2 Sandbox Completion Rate

Percentage of sandbox sessions completed.

### 28.3 Sandbox-to-Install Preview Rate

Percentage of sandbox users who start install preview.

### 28.4 Sandbox-to-Install Rate

Percentage of sandbox users who complete installation.

### 28.5 Demo Clarity Score

How clearly customers understand the asset after sandbox.

### 28.6 Simulation Pass Rate

Percentage of sandbox simulations that complete successfully.

### 28.7 Sandbox Error Rate

Percentage of sessions with technical errors.

### 28.8 Misleading Demo Report Rate

Frequency of customer reports that demo misrepresented production behavior.

### 28.9 Sandbox Support Deflection Rate

Reduction in pre-install support questions due to sandbox clarity.

### 28.10 POC-to-Production Conversion Rate

Enterprise POCs that convert to production.

### 28.11 Sandbox Cost per Qualified Install

Sandbox cost divided by qualified installations.

### 28.12 Unsafe Sandbox Block Rate

Blocked unsafe sandbox actions.

---

## 29. API Contract

### 29.1 Create Sandbox Environment

`POST /api/v1/marketplace/assets/{asset_id}/sandbox/environments`

Request:

```json
{
  "asset_version_id": "version_123",
  "environment_type": "simulation_sandbox",
  "data_mode": "synthetic",
  "region": "eu-central",
  "scenario_id": "scenario_sales_qualification",
  "requested_permissions_profile": "default_safe"
}
```

Response:

```json
{
  "sandbox_environment_id": "sandbox_123",
  "status": "initializing",
  "expires_at": "2026-06-20T10:00:00Z",
  "warnings": [],
  "next_action": "start_session"
}
```

### 29.2 Start Sandbox Session

`POST /api/v1/sandbox/environments/{sandbox_environment_id}/sessions`

Response:

```json
{
  "sandbox_session_id": "session_123",
  "status": "active",
  "data_mode": "synthetic",
  "execution_mode": "constrained_ai_execution",
  "boundaries": [
    "No production writes",
    "Mocked CRM calls",
    "Synthetic customer data"
  ]
}
```

### 29.3 Run Simulation

`POST /api/v1/sandbox/sessions/{sandbox_session_id}/simulate`

Request:

```json
{
  "scenario_id": "scenario_sales_qualification",
  "inputs": {
    "lead_source": "demo_webinar",
    "industry": "B2B SaaS"
  }
}
```

Response:

```json
{
  "simulation_result_id": "sim_123",
  "status": "completed",
  "output_summary": "The template qualified 8 sample leads and recommended 3 follow-up workflows.",
  "mock_tool_calls": [
    {
      "tool": "crm.create_task",
      "mode": "mocked",
      "result": "would_create_3_tasks"
    }
  ],
  "estimated_cost": {
    "currency": "USD",
    "amount": 0.12
  },
  "install_readiness_decision": "ready_with_permissions_review"
}
```

### 29.4 Get Install Preview from Sandbox

`GET /api/v1/sandbox/environments/{sandbox_environment_id}/install-preview`

Response:

```json
{
  "asset_id": "asset_123",
  "asset_version_id": "version_123",
  "required_permissions": ["crm.read", "crm.write_task"],
  "required_integrations": ["salesforce"],
  "estimated_monthly_cost": {
    "min": 25,
    "max": 120,
    "currency": "USD"
  },
  "approval_required": true,
  "region_compatible": true,
  "risk_level": "medium"
}
```

### 29.5 Submit Sandbox Feedback

`POST /api/v1/sandbox/sessions/{sandbox_session_id}/feedback`

Request:

```json
{
  "clarity_score": 5,
  "confidence_score": 4,
  "install_intent": "likely",
  "comments": "The demo made permissions clear. Need more finance examples."
}
```

---

## 30. Webhooks

Recommended webhooks:

- `sandbox.created`
- `sandbox.ready`
- `sandbox.failed`
- `sandbox.expired`
- `sandbox.session.completed`
- `sandbox.simulation.completed`
- `sandbox.install_preview.started`
- `sandbox.policy_blocked`
- `sandbox.feedback.submitted`
- `sandbox.enterprise_poc.created`
- `sandbox.enterprise_poc.completed`

---

## 31. Frontend Requirements

Marketplace UI must show:

- `Try in Sandbox` CTA
- sandbox type label
- demo data disclosure
- execution boundary explanation
- permission preview
- simulated tool-call timeline
- cost estimate
- output examples
- limitations panel
- install readiness summary
- proceed-to-install-preview CTA
- reset sandbox action
- feedback prompt

Enterprise UI must show:

- POC scope
- approved data sources
- governance approvals
- sandbox logs
- risk findings
- POC success criteria
- production readiness status

---

## 32. Backend Requirements

Backend must provide:

- sandbox lifecycle service
- simulation execution service
- demo data registry
- permission boundary engine
- mock integration service
- cost limiting engine
- region compatibility checks
- policy enforcement
- session logging
- teardown worker
- sandbox observability pipeline
- install preview bridge
- enterprise POC records

---

## 33. AI Sandbox Assistant

Ariyo may include an AI Sandbox Assistant to help users:

- choose a demo scenario
- understand outputs
- interpret tool calls
- compare sandbox and production behavior
- summarize risks
- explain required permissions
- prepare install preview
- generate POC notes

The assistant must not:

- hide limitations
- claim production success from sandbox alone
- recommend bypassing approvals
- ask for unnecessary sensitive data
- fabricate integration behavior

---

## 34. Support Use Cases

Support teams may use sandbox environments to:

- reproduce asset issues
- test fixes
- compare template versions
- validate auto-remediation
- prepare customer guidance

Support sandbox must not expose production data unless authorized.

---

## 35. Abuse Prevention

Ariyo must prevent:

- free sandbox abuse for unlimited AI usage
- extraction of template logic beyond allowed visibility
- competitor scraping of demo behavior
- partner misrepresentation
- fake demo completion manipulation
- hidden production use
- sandbox data exfiltration
- sandbox-to-production permission escalation

Controls:

- rate limits
- identity checks
- session limits
- cost limits
- watermarking where appropriate
- anomaly detection
- partner audit logs
- creator IP protection

---

## 36. Sandbox Retention

Default retention rules:

- public demo sessions: short retention
- synthetic demo logs: longer retention allowed
- customer sample data: short retention
- enterprise POC evidence: contract-defined retention
- support reproduction environments: case-defined retention

Customers must be able to request deletion of eligible sandbox data.

---

## 37. Sandbox Teardown

Every sandbox must have teardown behavior.

Teardown should remove or archive:

- temporary records
- tokens
- mock integration state
- generated outputs
- sample data
- logs according to retention policy
- cached model outputs where applicable

Teardown failure must be treated as operational risk.

---

## 38. Quality Gates

A sandbox should not be published for an asset unless:

- demo scenario is clear
- demo data is approved
- permissions are constrained
- outputs are accurate enough
- limitations are shown
- cost controls are active
- region checks pass
- trust labels are accurate
- abuse prevention controls exist

---

## 39. Sandbox Failure Handling

If sandbox fails, Ariyo must:

- show customer-friendly error
- explain whether the asset itself failed or sandbox infrastructure failed
- log failure reason
- notify creator/operator when relevant
- avoid counting failed sandbox as production asset failure unless correlated
- provide alternate static demo if available

---

## 40. Enterprise Governance Controls

Enterprise admins should be able to control:

- who can start sandboxes
- which data modes are allowed
- whether connected sandbox is allowed
- whether partner demos are allowed
- sandbox region restrictions
- sandbox budget limits
- sandbox retention
- sandbox approval requirements
- sandbox audit export

---

## 41. Forbidden Patterns

Ariyo must never:

- let demo environments write to production by default
- use real customer data in public demos
- hide that integrations are mocked
- convert sandbox success into automatic production install approval
- allow unlimited free AI execution through demos
- let creators access customer sandbox data without permission
- allow partner demos to exaggerate certification or trust
- ignore region policy in sandbox
- retain sample data indefinitely by default
- run high-risk automation in sandbox without guardrails
- present synthetic results as real customer outcomes
- bypass billing or entitlement checks through sandbox
- use sandbox as shadow production
- let users export sensitive sandbox data without permission

---

## 42. Golden Rule

Ariyo sandbox environments must make Marketplace assets easier to understand and safer to adopt.

They must never make risky assets easier to misuse.
