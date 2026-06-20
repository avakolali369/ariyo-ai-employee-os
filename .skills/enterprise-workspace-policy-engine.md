# Ariyo Enterprise Workspace Policy Engine Skill

## Core Contract

Ariyo Enterprise Workspace Policy Engine is not a list of toggles in an admin panel.

It is the governed policy decision, inheritance, enforcement, exception, approval, audit, and simulation system that controls what users, teams, AI Employees, templates, workflows, marketplace assets, integrations, data sources, tools, model providers, regions, billing actions, and automation capabilities may do inside each organization, workspace, department, and enterprise boundary.

Ariyo must let enterprise customers delegate work without delegating uncontrolled risk.

Every policy decision must be explainable, inherited correctly, enforceable at runtime, auditable after the fact, overrideable only through approved governance, and safe by default.

---

## Why This Skill Exists

Enterprise customers do not operate as one flat account.

They have organizations, subsidiaries, departments, teams, workspaces, roles, projects, regions, budgets, approval chains, compliance policies, data access boundaries, procurement rules, security controls, and internal risk models.

Ariyo must support this complexity without becoming confusing.

The Workspace Policy Engine exists to make enterprise governance programmable and predictable across:

- AI Employee actions
- human user permissions
- workspace-level settings
- department-level restrictions
- marketplace installation rules
- private catalog access
- data access and knowledge source permissions
- tool and integration access
- model provider usage
- cost and budget limits
- data residency and region restrictions
- approval workflows
- automation capabilities
- audit and reporting requirements
- incident containment behavior

---

## Related Skills

This skill must work with:

- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `admin-permissions.md`
- `ai-agent-permissions-runtime.md`
- `human-review-governance.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-installation-entitlements.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-audit-reports.md`
- `workflow-automation.md`
- `observability-analytics-events.md`
- `reliability-sla.md`

---

## Policy Philosophy

Ariyo enterprise policy must follow these principles:

1. **Deny unsafe by default**  
   When policy is ambiguous, Ariyo should prefer a safe block or approval requirement.

2. **Inherit predictably**  
   Organization policy must flow into workspaces unless explicitly overridden by allowed governance.

3. **Explain every decision**  
   Admins must understand why an action was allowed, denied, limited, or escalated.

4. **Separate visibility from capability**  
   A user may see an asset without being allowed to install, run, modify, export, or share it.

5. **Separate human rights from AI rights**  
   AI Employees must not automatically inherit all permissions of the user who created them.

6. **Respect data classification**  
   Policies must change behavior based on public, internal, confidential, regulated, or restricted data.

7. **Require approval for risk elevation**  
   Actions that increase security, privacy, cost, compliance, or operational risk should require approval.

8. **Audit policy changes and policy decisions**  
   Ariyo must log both policy configuration changes and runtime enforcement outcomes.

9. **Support enterprise exceptions without chaos**  
   Exceptions must be scoped, justified, time-limited, reviewed, and revocable.

10. **Make policy testable before rollout**  
   Admins must be able to simulate policy impact before applying changes.

---

## Core Policy Objects

### EnterprisePolicy

The top-level policy bundle for an organization.

Fields:

- `policy_id`
- `organization_id`
- `name`
- `description`
- `status`
- `scope`
- `policy_type`
- `priority`
- `conditions`
- `rules`
- `exceptions`
- `inheritance_mode`
- `enforcement_mode`
- `approval_requirements`
- `created_by`
- `approved_by`
- `effective_at`
- `expires_at`
- `last_reviewed_at`
- `version`
- `audit_metadata`

### WorkspacePolicyProfile

Defines active policies for a workspace.

Fields:

- `workspace_id`
- `organization_id`
- `department_id`
- `inherited_policies`
- `workspace_overrides`
- `blocked_overrides`
- `allowed_exceptions`
- `active_policy_version`
- `last_policy_sync_at`
- `policy_health_status`

### PolicyDecision

Runtime decision produced by the engine.

Fields:

- `decision_id`
- `request_id`
- `actor_type`
- `actor_id`
- `workspace_id`
- `action`
- `resource_type`
- `resource_id`
- `decision`
- `reason_codes`
- `matched_policies`
- `matched_conditions`
- `required_approvals`
- `allowed_scope`
- `limitations`
- `expires_at`
- `evidence_links`
- `created_at`

Allowed decision values:

- `allow`
- `allow_with_limits`
- `require_approval`
- `require_human_review`
- `deny`
- `deny_and_alert`
- `quarantine`
- `defer_to_admin`

### PolicyException

A scoped, reviewed exception.

Fields:

- `exception_id`
- `policy_id`
- `scope_type`
- `scope_id`
- `requested_by`
- `approved_by`
- `justification`
- `risk_assessment`
- `controls_added`
- `expires_at`
- `review_required_at`
- `status`
- `usage_count`
- `last_used_at`

### PolicySimulation

Pre-deployment impact preview.

Fields:

- `simulation_id`
- `proposed_policy_version`
- `affected_workspaces`
- `affected_users`
- `affected_ai_employees`
- `affected_marketplace_assets`
- `new_denies`
- `new_approvals_required`
- `new_allows`
- `risk_delta`
- `recommended_changes`
- `created_by`
- `created_at`

---

## Policy Scope Model

Ariyo must support policy scope at multiple levels.

### Organization Level

Used for global enterprise rules.

Examples:

- Only approved model providers may be used.
- Marketplace installs require procurement approval.
- Restricted data may not leave EU region.
- Smart-plan autonomous actions require human review.
- Only verified private catalog assets can be installed.

### Department Level

Used for functional governance.

Examples:

- Finance workspaces require approval for external data exports.
- HR workspaces block templates that process sensitive employee data unless certified.
- Legal workspaces require evidence retention for all AI-assisted outputs.
- Sales workspaces can use CRM integrations but cannot trigger billing actions.

### Workspace Level

Used for operational control.

Examples:

- This workspace can use a specific integration.
- This workspace may install only approved templates.
- This workspace has a monthly AI spend cap.
- This workspace can run background automations only during business hours.

### Team Level

Used for team-specific restrictions.

Examples:

- Customer support team can run support templates but cannot publish marketplace assets.
- RevOps team can use CRM automation but cannot modify finance controls.

### User Level

Used for personal permissions.

Examples:

- User can approve workflow executions under $500 impact.
- User cannot create autonomous AI Employees.

### AI Employee Level

Used for AI-specific runtime limits.

Examples:

- AI Employee may read CRM records but cannot update them.
- AI Employee may draft emails but cannot send them without approval.
- AI Employee may search knowledge base but cannot access restricted HR documents.

### Marketplace Asset Level

Used for install/use restrictions.

Examples:

- Asset may be installed only in Pro and Smart plans.
- Asset requires security approval before install.
- Asset is blocked in a specific region.

---

## Policy Inheritance Rules

Policy inheritance must be explicit.

Recommended inheritance hierarchy:

```text
Enterprise Account
  -> Organization
    -> Department
      -> Workspace
        -> Team
          -> User
            -> AI Employee
```

### Inheritance Modes

Supported modes:

- `strict_inherit`
- `inherit_with_allowed_overrides`
- `inherit_with_approval_overrides`
- `workspace_isolated`
- `department_isolated`

### Conflict Resolution

When policies conflict:

1. Deny beats allow.
2. Require approval beats allow.
3. Region/compliance restriction beats convenience.
4. Security restriction beats marketplace promotion.
5. Data classification restriction beats role permission.
6. Organization-level strict policy beats workspace override.
7. More specific deny beats broader allow.
8. Time-limited exception beats default deny only inside its scope.

### Override Governance

Overrides must include:

- justification
- owner
- approver
- expiry date
- affected scope
- risk classification
- fallback behavior
- audit trail

Forbidden override behavior:

- permanent exception without review
- silent workspace override of organization restriction
- AI-generated exception without human approval
- override without audit event

---

## Policy Domains

### 1. AI Employee Permission Policy

Controls what AI Employees may do.

Rules may include:

- create AI Employee
- clone AI Employee
- install AI Employee template
- run AI Employee manually
- run AI Employee on schedule
- run AI Employee autonomously
- approve AI Employee output
- allow AI Employee tool use
- allow AI Employee external communication
- allow AI Employee financial action
- allow AI Employee customer-facing action

Example policy:

```json
{
  "policy_type": "ai_employee_permission",
  "scope": "workspace",
  "rules": [
    {
      "action": "ai_employee.send_external_email",
      "decision": "require_human_review",
      "conditions": {
        "data_classification": ["confidential", "regulated"],
        "recipient_domain": "external"
      }
    }
  ]
}
```

### 2. Marketplace Policy

Controls marketplace visibility, install, update, and usage.

Rules may include:

- allow public marketplace browsing
- allow template install
- allow paid marketplace purchase
- allow sponsored asset visibility
- allow private catalog only
- require procurement approval
- require security review
- require certification
- block specific vendors
- block specific categories
- allow internal-only templates

### 3. Data Access Policy

Controls data source access.

Rules may include:

- public knowledge access
- internal document access
- restricted knowledge access
- customer data access
- HR data access
- financial data access
- regulated data access
- export restrictions
- retention restrictions
- redaction requirements

### 4. Tool and Integration Policy

Controls connected tools.

Rules may include:

- allow read-only CRM access
- block write access to CRM
- require approval for billing system actions
- require admin approval for new integration
- block integrations without vendor approval
- block tools outside region policy

### 5. Model Provider Policy

Controls model routing and provider usage.

Rules may include:

- approved model providers
- blocked model providers
- plan-specific providers
- region-compatible providers
- data-class-specific providers
- max cost per task
- allow fallback provider
- require human review for high-impact model output

### 6. Workflow Automation Policy

Controls workflow behavior.

Rules may include:

- allow scheduled runs
- allow webhook-triggered runs
- block autonomous workflows
- require approval before external side effects
- pause automation after incident
- enforce business-hour execution
- require dry run before production run

### 7. Approval Policy

Controls review and approval chains.

Rules may include:

- approval required for new AI Employee
- approval required for template install
- approval required for spend over threshold
- approval required for external communication
- approval required for sensitive data access
- approval required for region exception

### 8. Cost Policy

Controls spend and usage.

Rules may include:

- monthly workspace budget
- daily AI token budget
- max run cost
- max template cost
- approval threshold
- cost center assignment
- budget owner approval
- Smart-plan advanced model limits

### 9. Security Policy

Controls security-sensitive actions.

Rules may include:

- block public sharing
- require MFA for admins
- require SSO for enterprise accounts
- block personal email users
- require service account ownership
- block unmanaged integrations
- require secret rotation
- block high-risk automation

### 10. Compliance Policy

Controls compliance-sensitive behavior.

Rules may include:

- retention requirements
- deletion requirements
- evidence capture requirements
- audit logging requirements
- regional data handling
- DPA-required vendors
- subprocessor approval
- regulated output labeling

---

## Plan-Aware Policy Rules

### Basic

Basic should be safe and simple.

Policy behavior:

- limited workspace structure
- simple role model
- no complex delegated administration
- no advanced autonomous AI actions
- limited marketplace installs
- strict default cost controls
- minimal policy customization
- strong defaults over granular controls

Basic must not expose enterprise policy complexity.

### Pro

Pro should support teams and operations.

Policy behavior:

- workspace-level policy controls
- team-level role mapping
- marketplace install restrictions
- integration permission controls
- approval flows for risky actions
- moderate AI Employee governance
- cost center support
- basic audit exports

Pro must support operational scale without full enterprise overhead.

### Smart

Smart should support enterprise-grade governance.

Policy behavior:

- full policy inheritance
- organization/department/workspace policy hierarchy
- advanced approval chains
- marketplace private catalog controls
- model provider policies
- data residency rules
- cost governance
- exception workflows
- policy simulation
- access review
- audit evidence packages
- AI-assisted policy analysis

Smart must be the full governance layer.

---

## Policy Decision Engine

The Policy Decision Engine must evaluate requests before sensitive actions occur.

Input:

- actor
- role
- group memberships
- workspace
- organization
- requested action
- target resource
- data classification
- marketplace asset metadata
- vendor status
- region profile
- billing impact
- model provider
- integration permissions
- approval context
- incident state
- active exceptions

Output:

- decision
- reason codes
- limitations
- required approvals
- allowed scope
- audit record

Example decision response:

```json
{
  "decision_id": "pd_123",
  "decision": "require_approval",
  "action": "marketplace.install_asset",
  "resource_type": "marketplace_asset",
  "resource_id": "asset_456",
  "reason_codes": [
    "ASSET_REQUIRES_SECURITY_APPROVAL",
    "WORKSPACE_RESTRICTED_TO_PRIVATE_CATALOG",
    "VENDOR_NOT_APPROVED_FOR_DEPARTMENT"
  ],
  "required_approvals": [
    "workspace_admin",
    "security_admin",
    "procurement_owner"
  ],
  "limitations": {
    "install_allowed_after_approval": true,
    "autonomous_runs_allowed": false
  }
}
```

---

## Policy Conditions

Policies should support condition expressions.

Condition types:

- actor role
- actor group
- actor department
- workspace type
- workspace region
- plan type
- template risk tier
- asset certification status
- data classification
- vendor status
- integration type
- tool permission level
- model provider
- action impact
- cost threshold
- time window
- incident state
- approval status
- customer environment

Example:

```json
{
  "conditions": {
    "actor.role": ["workspace_admin"],
    "asset.certification_level": ["enterprise_ready"],
    "asset.region_profile.compatible": true,
    "data.classification": { "not_in": ["regulated"] },
    "cost.estimated_monthly": { "lte": 500 }
  }
}
```

---

## Approval Policy Integration

The policy engine must trigger approvals when needed.

Approval types:

- admin approval
- security approval
- legal approval
- finance approval
- procurement approval
- data owner approval
- workspace owner approval
- department owner approval
- human review approval

Approval should be required for:

- installing high-risk marketplace assets
- granting AI Employee write access
- connecting sensitive integrations
- overriding region controls
- exceeding budget thresholds
- enabling autonomous actions
- accessing restricted data
- publishing internal templates
- modifying organization policy

---

## AI Employee Policy Controls

AI Employees require special controls.

Policy must define:

- who can create AI Employees
- who can install AI Employee templates
- allowed AI Employee categories
- allowed tools
- allowed knowledge sources
- allowed memory scopes
- allowed autonomous actions
- allowed external communication
- allowed workflow triggers
- allowed model providers
- allowed budget
- allowed operating hours
- allowed escalation paths

AI Employee permissions must be explicit, not implied.

Forbidden behavior:

- AI Employee inherits full creator permissions by default
- AI Employee can self-escalate privileges
- AI Employee can approve its own actions
- AI Employee can bypass workspace policy
- AI Employee can install marketplace assets autonomously

---

## Marketplace Policy Controls

The policy engine must control Marketplace usage across enterprise contexts.

Policy surfaces:

- browse marketplace
- search marketplace
- view public assets
- view sponsored assets
- install free assets
- purchase paid assets
- install internal templates
- request asset approval
- add asset to private catalog
- update installed asset
- uninstall asset
- review asset
- publish internal asset
- promote private asset to public marketplace

Policy should consider:

- asset risk score
- creator trust score
- certification status
- trust labels
- vendor status
- compliance evidence
- data residency
- pricing and billing impact
- dependency graph
- health status
- incident history

---

## Data Classification Policy

Ariyo must support policy behavior based on data class.

Recommended classes:

- `public`
- `internal`
- `confidential`
- `restricted`
- `regulated`
- `customer_sensitive`
- `employee_sensitive`
- `financial_sensitive`
- `legal_sensitive`

Example rules:

- public data may be used by approved templates
- confidential data requires workspace approval
- restricted data requires data owner approval
- regulated data requires Smart plan and compliance controls
- employee sensitive data blocks external model providers unless approved
- financial sensitive data requires audit logging and approval before action

---

## Region and Residency Policy

Policy must integrate with region controls.

Rules may include:

- workspace region lock
- model provider region restrictions
- vendor region restrictions
- backup region restrictions
- telemetry region restrictions
- support access region restrictions
- cross-border transfer blocking
- region-specific marketplace catalog

Example:

```json
{
  "policy_type": "region_control",
  "rules": [
    {
      "data_classification": "regulated",
      "allowed_processing_regions": ["EU"],
      "decision": "deny_if_region_incompatible"
    }
  ]
}
```

---

## Cost and Budget Policy

Enterprise customers need cost governance.

Policy must support:

- workspace budget
- department budget
- template budget
- AI Employee budget
- model provider budget
- cost per run limit
- cost per month limit
- approval threshold
- anomaly alerts
- auto-pause on budget breach

Example:

```json
{
  "policy_type": "cost_control",
  "scope": "workspace",
  "rules": [
    {
      "monthly_budget_usd": 2000,
      "approval_required_above_usd": 500,
      "auto_pause_at_percent": 120
    }
  ]
}
```

---

## Policy Simulation

Admins must be able to simulate policy changes.

Simulation should show:

- users affected
- AI Employees affected
- marketplace installs blocked
- workflows paused
- integrations restricted
- approvals newly required
- cost changes
- compliance impact
- risk reduction
- unintended lockouts

Simulation outputs must be understandable.

Example:

```text
This policy change will:
- block 12 public marketplace assets in Sales workspace
- require approval for 4 AI Employees that send external emails
- pause 2 workflows using an unapproved CRM integration
- reduce region compliance risk for EU workspaces
- create 1 possible admin lockout risk
```

---

## Policy Rollout

Policy rollout modes:

- `draft`
- `simulate_only`
- `monitor_only`
- `warn_only`
- `enforce_soft`
- `enforce_strict`
- `rollback`

### Monitor Only

Ariyo logs violations but does not block.

### Warn Only

Ariyo warns users before action.

### Enforce Soft

Ariyo requires approval or limits action.

### Enforce Strict

Ariyo blocks action.

---

## Policy Change Governance

Policy changes must include:

- policy diff
- risk summary
- affected scopes
- approval status
- rollout mode
- rollback plan
- review date
- owner
- audit event

High-risk changes require approval.

High-risk examples:

- disabling SSO requirement
- allowing external data export
- allowing autonomous AI action
- allowing public marketplace installs
- changing region restrictions
- expanding model provider access
- increasing cost limits
- disabling audit logging

---

## Policy Audit Requirements

Ariyo must log:

- policy created
- policy updated
- policy deleted
- policy enabled
- policy disabled
- exception requested
- exception approved
- exception denied
- exception expired
- policy simulated
- policy decision allow
- policy decision deny
- policy decision require approval
- policy rollback

Audit events must include:

- actor
- scope
- policy version
- previous value
- new value
- reason
- approval reference
- timestamp
- request id

---

## Frontend Requirements

### Admin Policy Console

Must show:

- active policies
- inherited policies
- workspace overrides
- policy conflicts
- exceptions
- simulation results
- pending approvals
- audit trail
- policy health

### Policy Builder

Must support:

- templates for common policies
- condition builder
- rule preview
- affected resource preview
- simulation before publish
- plain-language summary
- rollback action

### Workspace Policy View

Must show:

- what the workspace can do
- what is blocked
- what requires approval
- what is inherited
- what is overridden
- who owns policy
- when policy was last reviewed

### User-Facing Denial UX

When action is blocked, show:

- clear reason
- policy name
- action blocked
- possible next steps
- request approval button when allowed
- admin contact when relevant

Do not show sensitive internal policy details to unauthorized users.

---

## Backend Requirements

Ariyo must implement:

- policy storage
- policy versioning
- policy decision engine
- inheritance resolver
- conflict resolver
- exception manager
- approval integration
- policy simulation engine
- audit logger
- enforcement middleware
- caching layer
- policy health monitor
- policy rollback engine

Policy decisions must be fast and consistent.

Recommended behavior:

- cache compiled policies
- invalidate cache on policy change
- log every high-risk decision
- use deterministic decision ordering
- protect against partial policy application

---

## API Contract

### Create Policy

`POST /api/v1/enterprise/policies`

Request:

```json
{
  "organization_id": "org_123",
  "scope_type": "workspace",
  "scope_id": "ws_456",
  "policy_type": "marketplace_install",
  "name": "Require security approval for high-risk assets",
  "enforcement_mode": "enforce_soft",
  "rules": [
    {
      "conditions": {
        "asset.risk_tier": ["high", "critical"]
      },
      "decision": "require_approval",
      "required_approvals": ["security_admin"]
    }
  ]
}
```

Response:

```json
{
  "policy_id": "pol_123",
  "status": "draft",
  "version": 1
}
```

### Evaluate Policy

`POST /api/v1/enterprise/policies/evaluate`

Request:

```json
{
  "actor_id": "user_123",
  "actor_type": "user",
  "workspace_id": "ws_456",
  "action": "marketplace.install_asset",
  "resource_type": "marketplace_asset",
  "resource_id": "asset_789",
  "context": {
    "estimated_monthly_cost_usd": 250,
    "data_classification": "confidential"
  }
}
```

Response:

```json
{
  "decision": "require_approval",
  "reason_codes": ["CONFIDENTIAL_DATA", "MARKETPLACE_INSTALL_POLICY"],
  "required_approvals": ["workspace_owner", "security_admin"],
  "matched_policies": ["pol_123"]
}
```

### Simulate Policy

`POST /api/v1/enterprise/policies/simulate`

Request:

```json
{
  "organization_id": "org_123",
  "policy_draft": {
    "policy_type": "model_provider_control",
    "rules": [
      {
        "conditions": {
          "data_classification": ["regulated"]
        },
        "decision": "deny",
        "blocked_model_providers": ["unapproved_provider"]
      }
    ]
  }
}
```

Response:

```json
{
  "simulation_id": "sim_123",
  "affected_workspaces": 8,
  "affected_ai_employees": 17,
  "new_blocks": 5,
  "new_approvals_required": 12,
  "risk_delta": "reduced",
  "warnings": ["Two workflows may stop running without approved fallback model"]
}
```

### Request Exception

`POST /api/v1/enterprise/policies/{policy_id}/exceptions`

Request:

```json
{
  "scope_type": "workspace",
  "scope_id": "ws_456",
  "justification": "Temporary exception for migration project",
  "expires_at": "2026-09-30T23:59:59Z",
  "requested_controls": ["daily_audit_report", "manual_review"]
}
```

---

## Webhooks

Ariyo should emit:

- `enterprise.policy.created`
- `enterprise.policy.updated`
- `enterprise.policy.enabled`
- `enterprise.policy.disabled`
- `enterprise.policy.simulated`
- `enterprise.policy.rollback_started`
- `enterprise.policy.exception_requested`
- `enterprise.policy.exception_approved`
- `enterprise.policy.exception_denied`
- `enterprise.policy.decision.denied`
- `enterprise.policy.decision.approval_required`
- `enterprise.policy.violation.detected`

---

## Observability Events

Track:

- `policy_decision_evaluated`
- `policy_decision_denied`
- `policy_decision_allowed_with_limits`
- `policy_approval_required`
- `policy_exception_used`
- `policy_conflict_detected`
- `policy_simulation_run`
- `policy_rollout_started`
- `policy_rollout_completed`
- `policy_rollback_completed`
- `policy_cache_invalidated`
- `workspace_policy_drift_detected`

---

## Advanced KPIs

Ariyo should measure:

- Policy Decision Latency
- Policy Denial Rate
- Approval Requirement Rate
- Policy Exception Rate
- Expired Exception Count
- Workspace Policy Drift Rate
- Policy Conflict Rate
- Unreviewed Policy Count
- High-Risk Action Block Rate
- Policy Simulation Adoption Rate
- Policy Rollback Rate
- Marketplace Install Block Accuracy
- AI Employee Risk Reduction Rate
- Region Policy Violation Rate
- Budget Policy Breach Rate
- Admin Lockout Prevention Rate

---

## AI Policy Governance Assistant

Ariyo may include an AI assistant to help admins understand and create policies.

The assistant may:

- explain policy decisions
- summarize policy impact
- suggest safer policy defaults
- detect policy conflicts
- recommend approval chains
- draft policy descriptions
- compare policy versions
- explain denial messages
- identify risky exceptions

The assistant must not:

- silently activate policies
- approve exceptions
- weaken security controls without approval
- create hidden policies
- override enterprise restrictions
- hide risky impact
- provide legal guarantees

---

## Security and Privacy Rules

Policy engine must be protected.

Rules:

- policy modification requires admin permission
- high-risk policy changes require approval
- policy decision logs must be tamper-evident
- policy data must be access-controlled
- user-facing messages must avoid leaking sensitive details
- policy exceptions must expire
- policy cache must invalidate safely
- service accounts must be governed
- break-glass access must be logged

---

## Failure Modes

Ariyo must handle:

- policy service unavailable
- policy cache stale
- conflicting policies
- admin lockout risk
- SCIM group mismatch
- orphaned workspace owner
- expired exception still active
- policy rollout breaks workflows
- region policy blocks critical task
- model provider fallback denied

Default fallback:

- for high-risk actions: deny or require approval
- for low-risk read-only actions: allow if cached policy is valid
- for admin policy changes: block until policy service is healthy

---

## Forbidden Patterns

Ariyo must never:

- allow workspace policies to silently override organization restrictions
- let AI Employees bypass policy engine
- allow policy exceptions without expiry
- hide policy denial reasons from admins
- expose sensitive policy internals to unauthorized users
- allow marketplace install without policy evaluation
- allow model provider usage without policy evaluation
- allow unlogged policy changes
- allow privilege escalation through group sync mismatch
- allow permanent break-glass access without review
- use policy as marketing language without enforcement
- ignore data classification in policy decisions
- ignore region controls during policy evaluation
- rely only on frontend checks

---

## Golden Rule

Enterprise customers should feel that Ariyo can adapt to their governance model without becoming a governance risk.

If a policy decision cannot be explained, audited, enforced, and safely rolled back, it should not be trusted.
