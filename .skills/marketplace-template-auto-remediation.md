# Ariyo Marketplace Template Auto Remediation Skill

## 1. Core Contract

Ariyo Marketplace Template Auto Remediation is not automatic retry logic.

It is the governed recovery, repair, rollback, rerouting, reconnection, refresh, approval, escalation, and customer-protection system that helps installed Marketplace templates recover from operational degradation without creating new safety, privacy, compliance, cost, or business-risk failures.

Ariyo may automate remediation only when the action is safe, reversible, permission-scoped, cost-bounded, explainable, auditable, and compatible with the customer's governance settings.

Ariyo must never silently “fix” a template by expanding access, bypassing approvals, changing business logic, increasing spend, weakening policy, leaking data, hiding incidents, or changing customer outcomes without authorization.

---

## 2. Purpose

This skill defines how Ariyo detects and remediates template failures after installation.

It connects Marketplace template health monitoring with controlled recovery workflows so that customers are protected from broken integrations, model degradation, dependency drift, stale knowledge, cost anomalies, feature flag issues, permission mismatches, failed workflows, unsafe outputs, vendor incidents, and version incompatibilities.

Auto remediation must reduce operational burden while preserving enterprise trust.

---

## 3. Related Ariyo Skills

This skill depends on and must remain consistent with:

- `marketplace-template-health-monitoring.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-installation-entitlements.md`
- `marketplace-template-migration-portability.md`
- `marketplace-internal-template-governance.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-data-residency-region-controls.md`
- `ai-agent-incident-response.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-permissions-runtime.md`
- `ai-cost-control.md`
- `reliability-sla.md`
- `feature-flags-rollout-system.md`
- `workflow-automation.md`
- `human-review-governance.md`

---

## 4. Remediation Philosophy

Auto remediation in Ariyo must follow these priorities:

1. Protect customer data.
2. Protect customer business operations.
3. Protect safety and compliance boundaries.
4. Restore service only inside existing permissions.
5. Avoid uncontrolled cost expansion.
6. Preserve audit evidence.
7. Communicate customer-impacting changes.
8. Escalate to humans when uncertainty is high.
9. Prefer reversible changes over irreversible repair.
10. Prefer degraded-safe mode over unsafe recovery.

The system should remediate automatically only when confidence is high and blast radius is low.

---

## 5. What Auto Remediation Can Handle

Ariyo may support automated remediation for:

- Temporary tool failures
- Transient API timeouts
- Rate limit backoff
- Broken integration token refresh
- Integration reconnect prompts
- Expired OAuth grants
- Model provider outage routing
- Model profile fallback
- Feature flag rollback
- Bad template version rollback
- Stale knowledge source refresh
- Failed vector index rebuild
- Missing dependency detection
- Workflow retry with idempotency protection
- Queue replay after outage
- Cost spike containment
- Permission drift detection
- Region mismatch blocking
- Vendor degradation isolation
- Unsafe output suppression
- Customer notification generation
- Health score recovery tracking

Ariyo must not automatically perform high-risk remediation without approvals.

---

## 6. What Auto Remediation Must Not Do

Ariyo must not automatically:

- Grant new permissions
- Connect a new integration without authorization
- Change billing plan
- Upgrade a customer from Basic to Pro or Smart
- Install a replacement paid asset
- Move data to a new region
- Route data to a disallowed model provider
- Disable safety policies
- Bypass compliance constraints
- Edit legal, financial, medical, HR, or customer-facing decisions without review
- Modify customer business records without approval
- Delete customer data as a “fix”
- Hide incidents from customers or internal operators
- Alter creator payout logic
- Remove audit logs
- Retry non-idempotent actions blindly
- Re-enable suspended assets
- Restore assets blocked by policy enforcement
- Override enterprise private catalog restrictions

---

## 7. Remediation Objects

### 7.1 TemplateRemediationCase

Represents a detected issue and its remediation lifecycle.

Required fields:

- `id`
- `organization_id`
- `workspace_id`
- `template_id`
- `installation_id`
- `asset_type`
- `detected_by`
- `health_signal_ids`
- `failure_category`
- `severity`
- `customer_impact_level`
- `risk_level`
- `status`
- `allowed_actions`
- `blocked_actions`
- `selected_action`
- `approval_required`
- `approval_state`
- `rollback_available`
- `cost_guardrail_state`
- `region_guardrail_state`
- `permission_guardrail_state`
- `created_at`
- `updated_at`
- `resolved_at`

### 7.2 RemediationAction

Represents one recovery action.

Examples:

- `safe_retry`
- `exponential_backoff`
- `token_refresh`
- `integration_reconnect_request`
- `model_fallback`
- `model_reroute`
- `feature_flag_rollback`
- `template_version_rollback`
- `knowledge_refresh`
- `vector_index_rebuild`
- `queue_replay`
- `pause_template`
- `degraded_mode_enable`
- `notify_admin`
- `escalate_to_human`
- `open_incident`
- `block_execution`

Required fields:

- `id`
- `case_id`
- `action_type`
- `risk_level`
- `preconditions`
- `expected_effect`
- `side_effects`
- `requires_approval`
- `approval_policy_id`
- `rollback_plan`
- `cost_estimate`
- `region_effect`
- `permission_effect`
- `execution_status`
- `result`
- `error`
- `created_at`
- `executed_at`

### 7.3 RemediationPolicy

Defines what the system may do automatically.

Required fields:

- `id`
- `organization_id`
- `scope`
- `plan`
- `asset_categories`
- `allowed_auto_actions`
- `approval_required_actions`
- `forbidden_actions`
- `max_retry_count`
- `max_cost_delta_percent`
- `max_runtime_extension_seconds`
- `allowed_model_fallbacks`
- `allowed_region_fallbacks`
- `allowed_vendor_fallbacks`
- `notification_policy`
- `human_escalation_policy`
- `enabled`

### 7.4 RemediationEvidence

Stores evidence for audit and trust.

Required fields:

- `id`
- `case_id`
- `signal_snapshot`
- `dependency_snapshot`
- `permission_snapshot`
- `cost_snapshot`
- `region_snapshot`
- `model_profile_snapshot`
- `action_log`
- `approval_log`
- `rollback_log`
- `customer_notifications`
- `operator_notes`
- `retention_until`

---

## 8. Failure Categories

Ariyo must classify remediation cases into clear categories.

### 8.1 Integration Failure

Examples:

- OAuth expired
- API key revoked
- Webhook endpoint failing
- Third-party API timeout
- Integration schema changed
- Rate limit reached
- Vendor outage

Possible remediation:

- token refresh
- reconnect request
- webhook retry
- exponential backoff
- vendor fallback if approved
- queue pause
- admin notification

### 8.2 Model Provider Failure

Examples:

- provider outage
- latency spike
- quality degradation
- model deprecation
- context limit mismatch
- tool-call regression
- blocked region

Possible remediation:

- fallback to approved model profile
- reduce context size
- route to allowed provider
- pause high-risk tasks
- open incident
- notify customer admin

### 8.3 Knowledge Failure

Examples:

- stale source
- failed ingestion
- vector index corruption
- missing citations
- outdated policy document
- broken connector

Possible remediation:

- source refresh
- index rebuild
- connector reconnect
- knowledge source quarantine
- retrieval fallback
- human review request

### 8.4 Workflow Failure

Examples:

- failed step
- non-idempotent retry risk
- queue backlog
- tool timeout
- invalid state transition
- missing approval

Possible remediation:

- safe retry
- queue replay
- pause workflow
- request approval
- rollback last step
- escalate to operator

### 8.5 Cost Anomaly

Examples:

- token spike
- tool usage spike
- unexpected paid API usage
- repeated retry loop
- Smart-level behavior inside Basic policy
- creator template causing cost overrun

Possible remediation:

- stop retry loop
- enable budget cap
- switch to cheaper approved model
- reduce context
- pause template
- notify admin
- require approval for further execution

### 8.6 Permission Drift

Examples:

- permission removed
- role changed
- template requesting new permission
- integration scope changed
- user removed from workspace

Possible remediation:

- block affected action
- request new authorization
- reduce capability mode
- notify admin
- pause installation

### 8.7 Region or Compliance Drift

Examples:

- provider region changed
- vendor subprocessor changed
- backup region no longer allowed
- customer region policy changed
- asset newly blocked by compliance rule

Possible remediation:

- block execution
- route only if approved region exists
- notify compliance owner
- require review
- open compliance case

### 8.8 Safety or Policy Failure

Examples:

- unsafe output spike
- policy violation
- harmful automation attempt
- banned template behavior
- suspicious creator update

Possible remediation:

- suppress output
- pause template
- open incident
- route to human review
- block asset update
- notify trust and safety

---

## 9. Remediation Severity Levels

### Severity 0 — Preventive

No customer impact yet. System detected early risk.

Allowed actions:

- warning
- dependency refresh
- low-risk health check
- admin notification

### Severity 1 — Minor Degradation

Template still works but quality or latency is degraded.

Allowed actions:

- safe retry
- backoff
- knowledge refresh
- approved model fallback

### Severity 2 — Functional Failure

Template cannot complete core workflow for some users.

Allowed actions:

- reconnect request
- queue pause
- rollback safe version
- incident creation if repeated

### Severity 3 — Business Impact

Customer operations are affected.

Allowed actions:

- pause risky actions
- notify admins
- rollback
- human escalation
- incident response

### Severity 4 — Safety, Security, Compliance, or Financial Risk

High-risk scenario.

Allowed actions:

- block execution
- pause asset
- preserve evidence
- alert Trust & Safety
- require human approval
- open incident

---

## 10. Remediation Decision Model

Ariyo must evaluate every remediation action before execution.

Decision inputs:

- template health score
- customer impact level
- action risk level
- customer plan
- entitlement status
- permission boundary
- data class involved
- region policy
- cost policy
- model policy
- vendor status
- creator trust score
- asset trust score
- dependency state
- incident history
- rollback availability
- human approval requirements

Decision output:

- `auto_execute`
- `execute_after_admin_approval`
- `execute_after_ariyo_review`
- `notify_only`
- `pause_and_escalate`
- `block_execution`
- `open_incident`

---

## 11. Safe Retry Rules

Ariyo may retry automatically only when:

- The action is idempotent.
- The retry will not duplicate customer-facing side effects.
- The retry will not duplicate billing, email sends, CRM updates, payments, support tickets, or legal records.
- The template has retry budget remaining.
- The retry does not exceed customer cost policy.
- The retry does not violate rate limits.
- The retry does not cross region boundaries.
- The retry does not require new permissions.

Retry must use bounded exponential backoff.

Forbidden retry patterns:

- infinite retry loops
- retrying failed payments without authorization
- retrying outbound messages without deduplication
- retrying destructive workflow steps
- retrying high-risk automations after policy violation

---

## 12. Model Rerouting Rules

Model rerouting must be controlled by `ModelProfileRegistry` and customer policy.

Ariyo may reroute to another model only when:

- The replacement model is approved for the customer plan.
- The provider is allowed by region and compliance settings.
- The replacement model supports required tool behavior.
- The replacement model supports required context and output constraints.
- Cost delta is within policy.
- Safety classification is equal or better.
- Customer data is not sent to a disallowed provider.
- Output quality threshold can be maintained.

Model rerouting must not silently downgrade safety.

Model rerouting must be logged with:

- original model
- fallback model
- reason
- expected behavior difference
- cost impact
- region impact
- customer-visible impact

---

## 13. Integration Reconnect Flows

When an integration breaks, Ariyo must distinguish between:

- temporary vendor outage
- expired credential
- revoked access
- permission scope change
- schema change
- customer admin action required
- vendor policy change

Auto remediation may refresh tokens only if refresh is already authorized.

If reauthorization is required, Ariyo must show:

- affected template
- affected workflows
- affected permissions
- affected users or departments
- last successful run
- business impact
- requested scopes
- security explanation
- option to reconnect, pause, or uninstall

Ariyo must not reconnect using another user's credentials without explicit authorization.

---

## 14. Knowledge Refresh Rules

Ariyo may refresh knowledge automatically when:

- source connector is authorized
- refresh schedule allows it
- data class is permitted
- customer plan supports it
- refresh cost is within budget
- source region is allowed
- source has not been marked unsafe

Ariyo must not refresh restricted knowledge sources after permission removal.

If the template used stale knowledge, Ariyo should:

- mark affected runs
- refresh index
- rerun validation if necessary
- notify admin if business impact occurred
- preserve old retrieval evidence

---

## 15. Feature Flag Rollback

Ariyo may roll back feature flags when:

- a new feature causes template failure
- a rollout is associated with incident signals
- customer impact exceeds threshold
- rollback is known safe
- rollback does not remove required compliance controls

Feature flag rollback must be scoped by:

- organization
- workspace
- plan
- template
- asset version
- cohort
- region
- customer segment

Feature flag rollback must not disable security, privacy, audit, or compliance features.

---

## 16. Template Version Rollback

Template version rollback may occur when:

- latest version fails health checks
- dependency compatibility breaks
- safety evaluation regresses
- cost behavior becomes abnormal
- customer workflows fail after update
- creator update is suspended

Rollback requirements:

- prior version exists
- prior version is still policy-compliant
- dependencies are compatible
- migration reversal is possible
- customer data schema remains compatible
- rollback is logged
- affected admins are notified

Ariyo must not roll back to a version with known security or compliance violations.

---

## 17. Degraded Safe Mode

When full remediation is unsafe, Ariyo should consider degraded safe mode.

Examples:

- Read-only mode
- Draft-only mode
- Human approval required for sends
- Disable external actions
- Disable high-cost model calls
- Disable write tools
- Use cached knowledge with warning
- Pause only affected workflow branch
- Continue low-risk functions

Degraded safe mode must be clearly labeled in the UI.

---

## 18. Human Escalation Rules

Ariyo must escalate to humans when:

- severity is high
- confidence is low
- customer impact is significant
- action is irreversible
- new permission is required
- cost increase is material
- compliance status is uncertain
- sensitive data is involved
- payment, legal, HR, medical, security, or financial decisions are affected
- policy violation is detected
- remediation would change business logic

Escalation targets:

- customer admin
- workspace owner
- Ariyo support operator
- Ariyo trust and safety
- creator support
- enterprise compliance owner
- partner manager
- incident commander

---

## 19. Customer Notification Rules

Customer communication must be proportional to impact.

Notify customer admins when:

- template is paused
- degraded safe mode is enabled
- model fallback changes behavior or cost
- integration reconnect is required
- rollback occurs
- customer data may be affected
- incident is opened
- compliance block occurs
- billing/cost anomaly is contained

Notification must include:

- what happened
- what Ariyo did
- what customer needs to do
- affected templates/workflows
- estimated impact
- remediation status
- rollback state
- audit link

---

## 20. Creator Notification Rules

Creators should be notified when their asset causes or experiences:

- repeated installation failures
- dependency drift
- broken integration contract
- cost anomaly
- policy risk
- safety regression
- high uninstall after failure
- auto rollback
- asset pause
- ranking penalty

Creators must not receive customer confidential data unless authorized.

---

## 21. Plan-Specific Remediation Rules

### 21.1 Basic

Basic remediation must be simple and low-risk.

Allowed by default:

- safe retry
- low-cost backoff
- reconnect prompt
- pause template
- notify user/admin
- simple rollback

Restricted:

- advanced model routing
- complex workflow replay
- high-cost remediation
- multi-agent self-repair
- automated cross-system changes

Basic must prefer safety over continuity.

### 21.2 Pro

Pro remediation supports operational workflows.

Allowed with policy:

- workflow step retry
- integration reconnect flow
- feature flag rollback
- knowledge refresh
- approved model fallback
- queue replay
- department admin notification

Pro must preserve operational continuity while respecting approval gates.

### 21.3 Smart

Smart remediation supports advanced automation.

Allowed with strong governance:

- multi-step remediation plans
- model rerouting
- simulation before repair
- cost-aware optimization
- multi-agent diagnosis
- advanced rollback
- impact analysis
- auto-generated incident summaries
- human-in-the-loop escalation

Smart must remain highly controlled because its automation power is higher.

---

## 22. Remediation API Contract

### 22.1 Create Remediation Case

`POST /api/v1/marketplace/remediation/cases`

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "template_id": "tpl_789",
  "installation_id": "inst_101",
  "failure_category": "integration_failure",
  "severity": "severity_2",
  "health_signal_ids": ["sig_1", "sig_2"]
}
```

Response:

```json
{
  "case_id": "rem_001",
  "status": "evaluating",
  "customer_impact_level": "moderate",
  "approval_required": false
}
```

### 22.2 Evaluate Remediation Options

`POST /api/v1/marketplace/remediation/cases/{case_id}/evaluate`

Response:

```json
{
  "case_id": "rem_001",
  "recommended_action": "safe_retry",
  "allowed_actions": ["safe_retry", "pause_template", "notify_admin"],
  "blocked_actions": [
    {
      "action": "grant_new_permission",
      "reason": "New permissions require admin authorization."
    }
  ],
  "decision": "auto_execute"
}
```

### 22.3 Execute Remediation Action

`POST /api/v1/marketplace/remediation/cases/{case_id}/actions`

Request:

```json
{
  "action_type": "safe_retry",
  "idempotency_key": "retry_abc_123"
}
```

Response:

```json
{
  "action_id": "act_001",
  "status": "executed",
  "result": "workflow_step_retried_successfully",
  "rollback_available": true
}
```

### 22.4 Request Approval

`POST /api/v1/marketplace/remediation/cases/{case_id}/approval-request`

Request:

```json
{
  "requested_action": "model_reroute",
  "reason": "Primary provider outage",
  "estimated_cost_delta_percent": 8,
  "fallback_model_profile_id": "model_profile_approved_002"
}
```

### 22.5 Rollback Remediation

`POST /api/v1/marketplace/remediation/cases/{case_id}/rollback`

Request:

```json
{
  "reason": "Remediation caused degraded output quality",
  "rollback_scope": "this_installation"
}
```

---

## 23. Webhooks

Ariyo should emit:

- `marketplace.remediation.case.created`
- `marketplace.remediation.case.evaluated`
- `marketplace.remediation.action.executed`
- `marketplace.remediation.action.blocked`
- `marketplace.remediation.approval.requested`
- `marketplace.remediation.approval.approved`
- `marketplace.remediation.approval.rejected`
- `marketplace.remediation.rollback.started`
- `marketplace.remediation.rollback.completed`
- `marketplace.remediation.escalated`
- `marketplace.remediation.customer_notified`
- `marketplace.remediation.creator_notified`
- `marketplace.remediation.incident_opened`
- `marketplace.remediation.degraded_mode.enabled`
- `marketplace.remediation.case.resolved`

---

## 24. Observability Events

Track:

- `template_failure_detected`
- `remediation_case_created`
- `remediation_policy_loaded`
- `remediation_options_scored`
- `remediation_action_selected`
- `remediation_auto_executed`
- `remediation_requires_approval`
- `remediation_blocked_by_policy`
- `safe_retry_started`
- `safe_retry_succeeded`
- `safe_retry_failed`
- `integration_reconnect_requested`
- `model_fallback_selected`
- `feature_flag_rollback_applied`
- `template_version_rollback_applied`
- `knowledge_refresh_completed`
- `degraded_mode_enabled`
- `human_escalation_created`
- `incident_linked_to_template`
- `customer_notification_sent`
- `remediation_case_resolved`

Each event must include organization, workspace, template, installation, plan, severity, action, policy decision, and correlation IDs.

---

## 25. Frontend Requirements

### 25.1 Customer Admin UI

Must show:

- active remediation cases
- affected templates
- severity
- customer impact
- action taken
- approval needed
- rollback option
- audit evidence link
- recommended next step

### 25.2 Installation Health UI

Must show:

- healthy
- degraded
- recovering
- paused
- blocked
- approval required
- incident linked

### 25.3 Approval Modal

Must explain:

- why remediation is needed
- what action will happen
- what data is affected
- what permissions are used
- cost impact
- region impact
- rollback availability
- risk level

### 25.4 Creator Dashboard

Must show anonymized template-level health issues:

- failure categories
- remediation actions
- repeated dependency issues
- version rollback count
- customer impact summary without confidential data

### 25.5 Internal Operator Console

Must show:

- remediation queue
- policy blockers
- high-risk cases
- incident correlations
- customer impact
- asset/creator/vendor risk context
- evidence timeline

---

## 26. Backend Requirements

Ariyo backend must include:

- Remediation policy engine
- Case lifecycle service
- Action executor
- Approval workflow engine
- Rollback orchestrator
- Dependency graph integration
- Health monitoring integration
- Feature flag integration
- Model profile registry integration
- Cost guardrail integration
- Region guardrail integration
- Permission runtime integration
- Audit evidence store
- Notification service
- Incident response bridge
- Human escalation bridge

All remediation actions must be idempotent where possible.

High-risk actions must use transactional state management and rollback plans.

---

## 27. AI Remediation Assistant Rules

Ariyo may provide an AI Remediation Assistant that:

- summarizes failures
- suggests remediation options
- explains risk
- generates customer notifications
- drafts incident summaries
- identifies likely root cause
- maps dependencies
- recommends rollback
- prepares approval explanations

The assistant must not:

- execute high-risk actions without authorization
- grant permissions
- change billing
- hide uncertainty
- override policy
- invent root cause
- omit customer impact
- remove evidence
- downplay incidents

The assistant must clearly distinguish:

- confirmed facts
- likely causes
- uncertain hypotheses
- recommended actions
- forbidden actions

---

## 28. Security and Privacy Rules

Auto remediation must:

- preserve least privilege
- use existing authorization only
- avoid credential exposure
- never log secrets
- avoid cross-tenant data access
- preserve region boundaries
- preserve audit logs
- redact sensitive data from notifications
- require approval for new data flows
- respect customer retention policies

Security-related remediation must be treated as incident-adjacent by default.

---

## 29. Compliance Rules

Auto remediation must respect:

- customer compliance policies
- regulatory matrix decisions
- evidence center requirements
- vendor approval status
- private catalog rules
- data residency controls
- procurement restrictions
- retention policies
- audit reporting requirements

If compliance state is uncertain, remediation must pause and escalate.

---

## 30. Advanced KPIs

Ariyo should track:

- Mean Time to Detect Template Failure
- Mean Time to Remediate
- Auto Remediation Success Rate
- Auto Remediation Rollback Rate
- Human Escalation Rate
- Safe Retry Success Rate
- Reconnect Completion Rate
- Model Fallback Success Rate
- Remediation-Induced Incident Rate
- Cost Saved by Auto Remediation
- Cost Added by Auto Remediation
- Customer Impact Avoided
- Template Health Recovery Rate
- Repeated Failure Rate by Template
- Creator Remediation Burden
- Proactive Remediation Rate
- Policy-Blocked Remediation Rate
- Approval Latency
- False Positive Remediation Rate
- Customer Trust Impact Score

---

## 31. Testing Requirements

Ariyo must test:

- idempotent retries
- non-idempotent retry blocking
- model fallback limits
- region-blocked fallback
- permission drift blocking
- integration reconnect flow
- knowledge refresh
- index rebuild
- feature flag rollback
- template version rollback
- degraded safe mode
- customer notification accuracy
- approval workflow
- rollback workflow
- incident creation
- audit evidence integrity
- Basic/Pro/Smart policy differences

---

## 32. Forbidden Patterns

Never implement:

- automatic permission expansion
- silent model provider change that violates policy
- silent region change
- silent paid plan upgrade
- infinite retry loops
- duplicate external side effects
- hidden remediation logs
- customer-impacting repair without notification
- remediation that disables security controls
- auto-fix that hides creator quality problems
- rollback to unsafe versions
- remediation that bypasses private catalog rules
- remediation that ignores vendor suspension
- AI-generated root cause presented as fact without evidence
- deleting evidence to “resolve” a case

---

## 33. Acceptance Checklist

A remediation system is acceptable only if:

- Every action has a policy decision.
- Every action has an audit trail.
- High-risk actions require approval.
- Unsafe actions are blocked.
- Retry logic is bounded and idempotent-aware.
- Cost impact is checked.
- Region impact is checked.
- Permission impact is checked.
- Rollback exists where appropriate.
- Customers are notified when impact is material.
- Incidents are opened when severity requires it.
- AI assistance cannot bypass governance.
- Basic, Pro, and Smart behavior is different and intentional.

---

## 34. Golden Rule

If Ariyo cannot safely explain, authorize, bound, audit, and roll back a remediation action, Ariyo must not automate it.
