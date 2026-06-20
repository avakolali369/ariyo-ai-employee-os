# Ariyo Feature Flags & Rollout System Skill

## 1. Purpose

This skill defines the official feature flag, rollout, enablement, kill switch, experiment gating, entitlement-aware access, and rollback system for Ariyo.

Ariyo is an AI Employee Operating System. A new feature in Ariyo can affect customer data, AI employee behavior, workflows, integrations, billing, marketplace assets, customer trust, security posture, cost, and revenue. Therefore Ariyo must not release features as simple frontend toggles.

Ariyo must release features through a governed rollout system that allows the team to progressively enable, monitor, pause, disable, roll back, and audit every meaningful capability.

This file is the operating contract for product managers, engineers, AI agents, Codex, designers, QA, support, customer success, security, and internal operators when building or changing feature flags and rollout behavior.

---

## 2. Core Contract

Ariyo feature flags are not temporary if-statements.

Ariyo feature flags are controlled operational gates that decide who can access a capability, when it becomes available, under what conditions it may run, how risk is limited, how performance and cost are monitored, how rollback works, and who is accountable for the change.

Every meaningful Ariyo capability must be safely releasable, safely observable, safely reversible, and safely auditable.

No risky feature may be shipped directly to all customers without a rollout plan, ownership, monitoring, fallback, support readiness, and kill switch strategy.

---

## 3. Dependencies

This skill must align with:

- `product-strategy.md`
- `roadmap-execution-plan.md`
- `product-requirements-mvp.md`
- `admin-permissions.md`
- `monetization-billing.md`
- `pricing-packaging-strategy.md`
- `ai-cost-control.md`
- `model-provider-strategy.md`
- `ai-safety-evaluation.md`
- `workflow-automation.md`
- `integration-ecosystem.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `quality-assurance-system.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`
- `customer-lifecycle-automation.md`
- `customer-success-playbooks.md`
- `website-conversion-system.md`
- `conversion-experimentation-system.md`

---

## 4. What Must Be Controlled by Feature Flags

Ariyo must use feature flags or rollout gates for:

1. New AI employee capabilities.
2. New AI tools.
3. New workflow automation behavior.
4. New model provider routes.
5. New RAG retrieval behavior.
6. New integrations.
7. New billing or entitlement logic.
8. New marketplace install behavior.
9. New admin permissions.
10. New customer-facing plan packaging.
11. New public website conversion experiments.
12. New internal admin tools.
13. New command center views.
14. New security-sensitive actions.
15. New automated lifecycle communications.
16. New AI cost-control rules.
17. New human review bypasses or escalation rules.
18. New file upload, ingestion, or indexing behavior.
19. New API endpoints exposed to customers or partners.
20. New compliance, trust, or legal-page flows.

Ariyo may ship simple low-risk UI copy or layout changes without a flag, but any change that affects business behavior, risk, cost, reliability, permissions, privacy, billing, or AI behavior must be controlled.

---

## 5. Feature Flag Philosophy

Ariyo uses feature flags to:

- Separate deploy from release.
- Reduce blast radius.
- Support plan-based packaging.
- Enable customer-specific rollout.
- Enable beta programs.
- Support experiments safely.
- Protect reliability during incidents.
- Pause expensive or risky AI behavior.
- Disable compromised integrations.
- Allow rollback without redeployment.
- Protect customers from incomplete features.
- Give internal teams operational control.
- Support enterprise-specific enablement.
- Support support-led recovery.

Ariyo must not use feature flags as a substitute for quality. A bad feature hidden behind a flag is still bad software if the flag is not owned, documented, monitored, and removable.

---

## 6. Flag Categories

### 6.1 Product Capability Flags

These control visible product features.

Examples:

- `ai_employee.marketplace.enabled`
- `workflow.builder.enabled`
- `geo_api.visibility_tracking.enabled`
- `command_center.customer_health.enabled`
- `academy.certifications.enabled`

Used for:

- Plan packaging
- MVP staging
- Beta access
- Customer-specific enablement
- Gradual rollout

---

### 6.2 Entitlement Flags

These control whether a plan or add-on includes a capability.

Examples:

- `plan.basic.max_ai_employees`
- `plan.pro.workflow_automation.enabled`
- `plan.smart.advanced_reasoning.enabled`
- `addon.geo_api.enabled`

Rules:

- Entitlement flags must be enforced on the backend.
- Frontend may only use entitlement flags for display and UX guidance.
- Entitlement flags must align with billing records.
- Entitlement overrides must be audited.

---

### 6.3 Experiment Flags

These control controlled experiments.

Examples:

- `pricing_page.smart_positioning.variant_b`
- `homepage.hero_category_test.variant_ai_employee`
- `signup.first_employee_recommendation.variant_b`

Rules:

- Every experiment flag must have a hypothesis.
- Every experiment flag must have guardrail metrics.
- Every experiment flag must have an end date or review date.
- Experiments must not alter legal, privacy, or security claims without review.

---

### 6.4 Operational Kill Switches

These disable risky or failing capabilities immediately.

Examples:

- `kill.ai_tool_execution.global`
- `kill.provider.deepseek.route`
- `kill.integration.webhooks.shopify`
- `kill.workflow_auto_execution.smart`
- `kill.file_ingestion.large_pdf`

Rules:

- Kill switches must be simple, fast, and reliable.
- Kill switches must be accessible only to authorized operators.
- Kill switch activation must be audited.
- Kill switch behavior must be tested.
- Kill switches must not depend on the failing subsystem.

---

### 6.5 Security Flags

These control sensitive security behavior.

Examples:

- `security.require_mfa_for_admins.enabled`
- `security.block_export_for_risk_accounts.enabled`
- `security.enforce_strict_csp.enabled`
- `security.webhook_signature_v2.enabled`

Rules:

- Security flags must default to safe behavior.
- Security flags must never weaken protections for convenience unless explicitly approved.
- Security overrides must expire.
- Security flag changes must alert security owners.

---

### 6.6 AI Behavior Flags

These control AI behavior, model routing, tool use, and reasoning depth.

Examples:

- `ai.model_router.v2.enabled`
- `ai.employee.smart_reasoning.enabled`
- `ai.tool_use.email_send.enabled`
- `ai.rag.hybrid_retrieval.enabled`
- `ai.review_required.high_risk_outputs.enabled`

Rules:

- AI behavior flags must be connected to evaluation results.
- AI behavior flags must be observable by model, customer, employee, and plan.
- AI behavior flags must support fast rollback.
- AI behavior flags must not bypass safety policies.

---

### 6.7 Integration Flags

These control integrations and provider-specific behavior.

Examples:

- `integration.google_drive.sync.enabled`
- `integration.whatsapp.outbound.enabled`
- `integration.hubspot.writeback.enabled`
- `integration.stripe.customer_portal.enabled`

Rules:

- Integration flags must include provider health awareness.
- Integration write actions must be separately gated from read actions.
- Integration flags must respect organization scopes.
- Integration failures must degrade gracefully.

---

### 6.8 Marketplace Flags

These control marketplace availability, monetization, listing behavior, ranking, install rules, and creator payouts.

Examples:

- `marketplace.public_listing.enabled`
- `marketplace.creator_payouts.enabled`
- `marketplace.smart_only_bundles.enabled`
- `marketplace.sponsored_rankings.enabled`

Rules:

- Marketplace flags must protect customer trust.
- Paid asset access must align with billing and entitlement records.
- Ranking experiments must not hide security or trust warnings.

---

### 6.9 Internal Admin Flags

These control backoffice tools.

Examples:

- `admin.impersonation.enabled`
- `admin.billing_adjustment.enabled`
- `admin.customer_health_drilldown.enabled`
- `admin.trust_document_access.enabled`

Rules:

- Internal admin flags must be permission-scoped.
- Internal admin flags must have audit logging.
- Impersonation and sensitive access must require reason capture.
- Internal admin features must never become public by accident.

---

## 7. Flag Object Model

Ariyo must model feature flags as first-class operational objects.

### 7.1 FeatureFlag

```json
{
  "id": "flag_01HZX...",
  "key": "ai.employee.smart_reasoning.enabled",
  "name": "Smart Reasoning for AI Employees",
  "description": "Enables deeper reasoning mode for Smart plan AI employees.",
  "category": "ai_behavior",
  "status": "active",
  "default_value": false,
  "current_value": true,
  "risk_level": "high",
  "owner_team": "ai_platform",
  "owner_user_id": "user_123",
  "created_at": "2026-06-18T10:00:00Z",
  "updated_at": "2026-06-18T10:30:00Z",
  "review_by": "2026-07-18T00:00:00Z"
}
```

### 7.2 FlagRule

```json
{
  "id": "rule_01HZX...",
  "flag_key": "ai.employee.smart_reasoning.enabled",
  "priority": 10,
  "conditions": {
    "plan": ["smart"],
    "organization_ids": ["org_123"],
    "environment": ["production"],
    "customer_health_status": ["healthy", "neutral"]
  },
  "value": true,
  "rollout_percentage": 25,
  "created_by": "user_456",
  "reason": "Smart beta rollout to selected healthy accounts"
}
```

### 7.3 FlagEvaluation

```json
{
  "flag_key": "ai.employee.smart_reasoning.enabled",
  "subject_type": "organization",
  "subject_id": "org_123",
  "value": true,
  "matched_rule_id": "rule_01HZX...",
  "reason": "plan_and_beta_rule_match",
  "evaluated_at": "2026-06-18T10:31:00Z",
  "evaluation_context_hash": "ctx_abc123"
}
```

### 7.4 RolloutPlan

```json
{
  "id": "rollout_01HZX...",
  "flag_key": "ai.rag.hybrid_retrieval.enabled",
  "stage": "beta",
  "strategy": "percentage_then_plan",
  "target_segments": ["pro", "smart"],
  "start_percentage": 5,
  "current_percentage": 25,
  "next_step_percentage": 50,
  "success_metrics": [
    "rag_answer_acceptance_rate",
    "retrieval_latency_p95",
    "support_ticket_rate"
  ],
  "guardrail_metrics": [
    "citation_error_rate",
    "model_cost_per_answer",
    "security_incidents"
  ],
  "rollback_triggers": [
    "citation_error_rate > 2%",
    "retrieval_latency_p95 > 4000ms",
    "model_cost_per_answer > target * 1.5"
  ]
}
```

### 7.5 FlagAuditLog

```json
{
  "id": "audit_01HZX...",
  "flag_key": "workflow.auto_execute.enabled",
  "action": "updated_rule",
  "actor_user_id": "user_789",
  "actor_role": "platform_admin",
  "reason": "Disable auto execution for incident investigation",
  "before": { "current_value": true },
  "after": { "current_value": false },
  "ip_address": "203.0.113.10",
  "created_at": "2026-06-18T11:00:00Z"
}
```

---

## 8. Flag Lifecycle

Feature flags must move through clear lifecycle states.

```text
proposed
approved
implemented
internal_testing
dogfood
private_beta
public_beta
gradual_rollout
general_availability
monitoring
retiring
removed
paused
killed
```

### 8.1 Proposed

A flag is proposed when a new feature requires controlled release.

Required:

- Feature description
- Owner
- Risk level
- Target customers
- Required metrics
- Rollout strategy
- Rollback plan

### 8.2 Approved

Approval requires:

- Product owner approval
- Engineering owner approval
- Security review for sensitive flags
- Data/privacy review for data-handling flags
- Billing review for entitlement flags
- Support readiness for customer-facing changes

### 8.3 Implemented

Implementation requires:

- Backend enforcement where needed
- Frontend display logic where needed
- Observability events
- Tests
- Audit logs for changes
- Default-safe behavior

### 8.4 Internal Testing

Feature is visible only to internal Ariyo users.

Allowed for:

- Product validation
- QA
- Security review
- Demo preparation
- Operational readiness

### 8.5 Dogfood

Feature is used by Ariyo internally under real conditions.

Required:

- Internal feedback
- Incident monitoring
- Performance monitoring
- Cost monitoring

### 8.6 Private Beta

Feature is enabled for selected customers.

Required:

- Customer consent if feature is experimental
- Success criteria
- Support plan
- Customer feedback loop
- Rollback path

### 8.7 Public Beta

Feature is visible to a broader group but still labeled as beta where appropriate.

Required:

- Clear beta messaging
- Known limitations
- Support documentation
- Monitoring dashboard

### 8.8 Gradual Rollout

Feature is enabled by percentage, segment, plan, geography, customer health, or manual allowlist.

Required:

- Automated metrics
- Guardrails
- Rollback triggers
- Owner monitoring

### 8.9 General Availability

Feature is stable, documented, supported, and available to entitled customers.

Required:

- Documentation
- Support training
- Billing/entitlement alignment
- Security and privacy acceptance
- Quality gates passed

### 8.10 Retiring

Feature flag is no longer needed.

Required:

- Code cleanup plan
- Migration plan
- Customer communication if behavior changes
- Removal PR

### 8.11 Removed

Feature flag and dead branches are removed.

Required:

- No references remain
- Tests updated
- Documentation updated
- Audit log retained

### 8.12 Paused

Rollout is stopped but feature remains available to already-enabled customers unless specifically disabled.

Used when:

- Metrics are unclear
- Support volume increases
- Cost exceeds forecast
- Customer feedback needs review

### 8.13 Killed

Feature is disabled quickly due to incident, severe risk, or policy violation.

Required:

- Incident record
- Customer impact assessment
- Postmortem if serious
- Re-enable approval

---

## 9. Rollout Strategies

### 9.1 Internal Only

Used for early validation.

Targets:

- Ariyo staff
- QA team
- specific internal workspaces

### 9.2 Allowlist Rollout

Used for specific customers.

Targets:

- Organization IDs
- Workspace IDs
- Pilot customers
- Enterprise accounts
- trusted beta customers

### 9.3 Percentage Rollout

Used for gradual exposure.

Rules:

- Must be deterministic by organization ID.
- Must not randomly expose different users in the same organization to incompatible behavior.
- Must support rollback to previous percentage.

### 9.4 Plan-Based Rollout

Used for Basic, Pro, Smart packaging.

Examples:

- Basic receives simplified AI employee setup.
- Pro receives workflow automation.
- Smart receives advanced reasoning and GEO API monitoring.

### 9.5 Segment-Based Rollout

Used for:

- industry segment
- company size
- region
- lifecycle stage
- customer health
- acquisition channel
- beta cohort

### 9.6 Customer-Specific Enablement

Used for:

- enterprise contract commitments
- pilot programs
- special onboarding
- support recovery
- partner demos

Must include:

- reason
- expiry date where appropriate
- approval
- audit log

### 9.7 Risk-Based Rollout

Used when feature risk varies by customer.

Example conditions:

- Healthy customers before at-risk customers
- Low-volume workspaces before high-volume workspaces
- Read-only mode before write mode
- Human review required before auto-execution

### 9.8 Geographic Rollout

Used when legal, latency, infrastructure, or payment differences matter.

Must consider:

- data residency
- local payment providers
- language support
- support availability
- compliance constraints

### 9.9 Enterprise Contract Rollout

Used for enterprise accounts with custom requirements.

Must include:

- contract alignment
- admin visibility
- support readiness
- SLA impact
- trust documentation

### 9.10 Emergency Rollback

Used when production safety is at risk.

Must support:

- immediate disable
- queued task pause
- provider route switch
- read-only fallback
- customer-facing degraded state
- audit and incident record

---

## 10. Basic / Pro / Smart Rollout Rules

Ariyo plan tiers must be controlled through entitlements, not vague frontend visibility.

### 10.1 Basic

Basic must be simple, safe, and useful.

Basic rollout rules:

- Basic gets stable features only.
- Basic must not receive high-cost experimental AI features by default.
- Basic must have stricter usage limits.
- Basic may receive previews but not full advanced functionality unless used as upgrade education.
- Basic flags should prioritize activation and first value.

Basic feature examples:

- First AI employee setup
- Limited knowledge upload
- Basic AI employee configuration
- Basic analytics
- Basic support articles
- Basic marketplace browsing
- Limited workflow templates

Basic must not include:

- full advanced reasoning
- high-volume GEO tracking
- complex automation without review
- custom provider routing
- enterprise controls
- unlimited integration sync

### 10.2 Pro

Pro must support real operational use.

Pro rollout rules:

- Pro receives workflow and integration features after internal validation.
- Pro can receive beta access for operational features.
- Pro must have practical admin controls.
- Pro gets stronger reporting and cost controls than Basic.

Pro feature examples:

- Multiple AI employees
- Workflow automation
- Integration sync
- Team permissions
- Human review queues
- Pro analytics
- Moderate GEO monitoring
- Marketplace installs
- Advanced support flows

Pro must not automatically receive:

- enterprise-only trust controls
- full Smart reasoning depth
- highest-cost model routes
- unrestricted automation

### 10.3 Smart

Smart must feel premium, intelligent, and full-option while still governed.

Smart rollout rules:

- Smart receives advanced capabilities first after internal validation.
- Smart can access deeper reasoning and richer automation.
- Smart must have the strongest cost, safety, and visibility controls.
- Smart may receive advanced beta features when customer health is acceptable.
- Smart must never mean unlimited, unmonitored, or unsafe.

Smart feature examples:

- Advanced AI employee orchestration
- Smart reasoning modes
- Advanced GEO API monitoring
- Predictive analytics
- Advanced lifecycle automation
- Advanced command center views
- More marketplace capabilities
- Better provider routing
- Advanced cost forecasting
- Advanced workflow branching
- Higher limits
- Enhanced support and success insights

Smart flags must include:

- budget guardrails
- anomaly detection
- rollback triggers
- customer health awareness
- security monitoring
- support readiness

---

## 11. Entitlements vs Feature Flags

Ariyo must separate entitlements from feature flags.

### 11.1 Entitlements

Entitlements answer:

```text
Is this customer allowed to use this capability according to plan, subscription, add-on, contract, or admin grant?
```

### 11.2 Feature Flags

Feature flags answer:

```text
Is this capability currently enabled for this customer under rollout, risk, experiment, operational, or support conditions?
```

### 11.3 Required Access Decision

A capability is available only when:

```text
subscription_active = true
AND entitlement_allowed = true
AND feature_flag_enabled = true
AND permission_allowed = true
AND security_policy_allowed = true
AND customer_state_allowed = true
```

Frontend may show:

- available
- upgrade required
- coming soon
- beta available
- request access
- disabled by admin
- temporarily unavailable

Backend must enforce final access.

---

## 12. Customer-Specific Enablement

Customer-specific enablement must be used carefully.

Allowed reasons:

- beta program
- enterprise contract
- pilot success plan
- migration support
- customer recovery
- strategic account
- partner implementation
- internal demo

Required fields:

```json
{
  "organization_id": "org_123",
  "flag_key": "geo_api.visibility_tracking.enabled",
  "enabled": true,
  "reason": "Smart pilot customer",
  "approved_by": "user_456",
  "expires_at": "2026-09-01T00:00:00Z",
  "customer_visible": true,
  "support_notes": "Customer has agreed to beta visibility tracking limits."
}
```

Rules:

- Customer-specific enablement must be visible to support and customer success.
- Temporary grants must have expiry dates.
- Contractual grants must map to contract terms.
- Manual overrides must not bypass billing unless approved.

---

## 13. Feature Flag Evaluation Context

Every feature flag evaluation must consider context.

Required context fields:

```json
{
  "environment": "production",
  "organization_id": "org_123",
  "workspace_id": "ws_123",
  "user_id": "user_123",
  "plan": "smart",
  "subscription_status": "active",
  "role": "admin",
  "permissions": ["ai_employee.manage", "workflow.create"],
  "customer_health_status": "healthy",
  "region": "eu",
  "feature_channel": "web_app",
  "ai_employee_id": "emp_123",
  "risk_level": "medium"
}
```

Rules:

- Feature evaluation must be deterministic.
- Same context must produce same result unless flag rules changed.
- Evaluation must support debugging.
- Sensitive context must not be logged raw if privacy-sensitive.

---

## 14. Rollout Gates

Ariyo must use rollout gates before enabling major capabilities.

### 14.1 Product Gate

Questions:

- Is the feature aligned with Ariyo positioning?
- Does it support Basic, Pro, or Smart clearly?
- Is the customer value measurable?
- Is the upgrade logic clear?

### 14.2 Design Gate

Questions:

- Is the feature understandable?
- Are empty/loading/error states complete?
- Are plan limits clear?
- Is upgrade messaging fair?
- Is the UI mobile-friendly?

### 14.3 Engineering Gate

Questions:

- Is backend enforcement implemented?
- Are APIs versioned where needed?
- Are migrations safe?
- Are tests passing?
- Is rollback possible?

### 14.4 AI Safety Gate

Questions:

- Does this change alter AI behavior?
- Has the behavior passed evals?
- Is human review required?
- Are tool calls constrained?
- Are hallucination and unsafe output risks controlled?

### 14.5 Security Gate

Questions:

- Does this expose sensitive data?
- Does this affect permissions?
- Does this affect authentication or sessions?
- Does this create IDOR or tenant isolation risk?
- Is audit logging complete?

### 14.6 Privacy Gate

Questions:

- Does this collect new data?
- Does this expose user or customer data?
- Does this affect retention or export?
- Does this require consent?
- Does this affect subprocessors?

### 14.7 Cost Gate

Questions:

- Does this increase AI, storage, sync, provider, or compute cost?
- Is cost attributed?
- Are budgets enforced?
- Are throttles configured?
- Is Smart allowed to spend more under guardrails?

### 14.8 Reliability Gate

Questions:

- Does this add new failure modes?
- Are timeouts and retries configured?
- Is degraded mode defined?
- Is the queue impact understood?
- Are alerts configured?

### 14.9 Support Gate

Questions:

- Does support know how to explain this feature?
- Is help documentation ready?
- Are known issues documented?
- Are customer-facing errors clear?

### 14.10 Revenue Gate

Questions:

- Does this affect conversion, plan value, expansion, or retention?
- Is entitlement logic correct?
- Are billing events tracked?
- Are downgrade and cancellation implications clear?

---

## 15. Kill Switch System

Ariyo must have kill switches for every high-risk subsystem.

### 15.1 Global Kill Switches

Examples:

```text
kill.ai_execution.global
kill.workflow_execution.global
kill.integration_write_actions.global
kill.file_ingestion.global
kill.marketplace_installs.global
kill.billing_changes.global
kill.admin_impersonation.global
```

### 15.2 Scoped Kill Switches

Examples:

```text
kill.ai_execution.organization.org_123
kill.workflow_execution.plan.smart
kill.integration.provider.google_drive
kill.model_provider.openai.gpt_route
kill.geo_api.visibility_tracking
```

### 15.3 Kill Switch Requirements

Kill switches must:

- Be fast to activate.
- Be backend-enforced.
- Be visible in operations command center.
- Trigger alerts.
- Create audit logs.
- Support customer communication when impact is visible.
- Support safe fallback where possible.

### 15.4 Kill Switch Fallback Modes

Supported fallback modes:

```text
disable_feature
read_only
manual_review_required
queue_pause
safe_model_route
basic_mode
cached_response_only
admin_only
support_contact_required
```

---

## 16. Rollback Requirements

Every rollout must define rollback.

Rollback plan must include:

- What flag to disable
- What customer impact occurs
- Whether data migration rollback is needed
- Whether queued jobs must pause
- Whether customer communication is required
- Whether support scripts are ready
- Whether billing impact exists
- Whether incident response is required

Rollback must not rely only on redeployment.

---

## 17. Observability & Events

Ariyo must track flag usage and impact.

### 17.1 Required Events

```text
feature_flag.created
feature_flag.updated
feature_flag.enabled
feature_flag.disabled
feature_flag.rule_added
feature_flag.rule_removed
feature_flag.evaluated
feature_flag.rollout_started
feature_flag.rollout_paused
feature_flag.rollout_advanced
feature_flag.rollout_rolled_back
feature_flag.killed
feature_flag.restored
feature_flag.retired
feature_flag.removed
```

### 17.2 Event Properties

```json
{
  "flag_key": "ai.rag.hybrid_retrieval.enabled",
  "category": "ai_behavior",
  "environment": "production",
  "organization_id": "org_123",
  "plan": "pro",
  "matched_rule_id": "rule_123",
  "value": true,
  "rollout_stage": "gradual_rollout",
  "actor_user_id": "user_456",
  "reason": "advance rollout from 25 to 50 percent"
}
```

### 17.3 Dashboards

Ariyo must expose dashboards for:

- Active flags
- Flags by risk level
- Rollout stage
- Customer exposure
- Plan exposure
- Failure rate by flag
- Cost impact by flag
- Conversion impact by flag
- Support tickets by flag
- Incidents connected to flags
- Stale flags
- Flags without owner
- Flags without review date

---

## 18. Advanced KPI System

Feature rollout success must be measured through advanced KPIs.

### 18.1 Rollout Health KPIs

```text
rollout_success_rate
rollback_rate
kill_switch_activation_rate
average_time_to_disable_feature
stale_flag_count
flags_without_owner
flags_without_review_date
high_risk_flags_in_ga
```

### 18.2 Product Impact KPIs

```text
activation_lift_by_flag
feature_adoption_rate
feature_repeat_usage_rate
time_to_first_value_by_variant
upgrade_conversion_lift
smart_plan_feature_engagement
```

### 18.3 Reliability KPIs

```text
error_rate_by_flag
latency_p95_by_flag
queue_backlog_by_flag
incident_count_by_flag
customer_impact_minutes_by_flag
degraded_mode_activation_count
```

### 18.4 AI Safety KPIs

```text
unsafe_output_rate_by_flag
human_review_escalation_rate_by_flag
tool_call_failure_rate_by_flag
ai_cost_per_successful_task_by_flag
model_fallback_rate_by_flag
rag_citation_error_rate_by_flag
```

### 18.5 Revenue KPIs

```text
trial_to_paid_lift_by_experiment
basic_to_pro_upgrade_lift
pro_to_smart_upgrade_lift
expansion_revenue_assisted_by_feature
churn_risk_change_by_rollout
revenue_at_risk_under_kill_switch
```

### 18.6 Support KPIs

```text
support_ticket_rate_by_feature
confusion_rate_by_feature
help_article_view_rate_by_flag
support_resolution_time_by_flag
customer_complaint_rate_by_rollout_stage
```

### 18.7 Security & Privacy KPIs

```text
sensitive_access_flags_count
security_override_count
privacy_review_required_flags
flag_changes_by_privileged_admin
unauthorized_flag_access_attempts
```

### 18.8 Cost KPIs

```text
ai_cost_delta_by_flag
provider_cost_delta_by_rollout
storage_cost_delta_by_feature
sync_cost_delta_by_integration_flag
cost_per_activated_customer_by_variant
```

---

## 19. API Contract

### 19.1 List Feature Flags

```http
GET /api/internal/feature-flags
Authorization: Bearer <token>
```

Response:

```json
{
  "data": [
    {
      "key": "geo_api.visibility_tracking.enabled",
      "category": "product_capability",
      "status": "active",
      "risk_level": "medium",
      "owner_team": "growth_platform",
      "rollout_stage": "private_beta",
      "default_value": false
    }
  ]
}
```

### 19.2 Evaluate Feature Flag

```http
POST /api/feature-flags/evaluate
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "flag_key": "geo_api.visibility_tracking.enabled",
  "context": {
    "organization_id": "org_123",
    "user_id": "user_123",
    "plan": "smart",
    "environment": "production"
  }
}
```

Response:

```json
{
  "flag_key": "geo_api.visibility_tracking.enabled",
  "enabled": true,
  "value": true,
  "reason": "smart_plan_beta_allowlist",
  "matched_rule_id": "rule_123"
}
```

### 19.3 Create Feature Flag

```http
POST /api/internal/feature-flags
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "key": "workflow.builder.v2.enabled",
  "name": "Workflow Builder V2",
  "description": "New visual workflow builder for Pro and Smart plans.",
  "category": "product_capability",
  "risk_level": "high",
  "default_value": false,
  "owner_team": "workflow_platform",
  "review_by": "2026-08-01T00:00:00Z"
}
```

Response:

```json
{
  "id": "flag_123",
  "key": "workflow.builder.v2.enabled",
  "status": "proposed"
}
```

### 19.4 Update Rollout Rule

```http
POST /api/internal/feature-flags/{flag_key}/rules
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "priority": 10,
  "conditions": {
    "plan": ["pro", "smart"],
    "environment": ["production"]
  },
  "value": true,
  "rollout_percentage": 25,
  "reason": "Advance rollout after successful beta"
}
```

Response:

```json
{
  "rule_id": "rule_456",
  "flag_key": "workflow.builder.v2.enabled",
  "status": "active"
}
```

### 19.5 Activate Kill Switch

```http
POST /api/internal/kill-switches/{key}/activate
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "reason": "High error rate in workflow auto execution",
  "scope": {
    "plan": "smart"
  },
  "fallback_mode": "manual_review_required",
  "incident_id": "inc_123"
}
```

Response:

```json
{
  "kill_switch_key": "kill.workflow_auto_execution.smart",
  "status": "active",
  "activated_at": "2026-06-18T12:00:00Z"
}
```

---

## 20. Frontend Requirements

Frontend must:

- Read feature availability from backend-approved flag and entitlement state.
- Never rely only on local flag logic for protected capabilities.
- Show clear upgrade states.
- Show beta labels where appropriate.
- Show coming soon only if approved by product.
- Hide internal flags from customers.
- Avoid exposing sensitive rollout logic.
- Handle disabled states gracefully.
- Handle degraded mode gracefully.
- Avoid layout shift caused by late flag resolution.

Frontend must support customer-friendly states:

```text
available
not_in_plan
request_access
beta_enabled
coming_soon
temporarily_unavailable
disabled_by_admin
contact_support
```

---

## 21. Backend Requirements

Backend must:

- Enforce entitlements.
- Enforce permissions.
- Enforce security policies.
- Evaluate flags server-side for protected actions.
- Log sensitive flag changes.
- Support deterministic rollout bucketing.
- Support fast kill switches.
- Support caching with safe invalidation.
- Support offline-safe defaults.
- Prevent tenant leakage in evaluation context.

Backend must not:

- Trust frontend flag values.
- Allow direct feature use through API bypass.
- Allow expired beta grants to remain active.
- Use flags to bypass billing.
- Expose internal rules to customers.

---

## 22. Caching Rules

Feature flag evaluation must balance speed and safety.

Rules:

- Low-risk UI flags may be cached longer.
- Security flags must have short cache TTLs.
- Kill switches must bypass stale cache.
- Entitlement changes must invalidate cache.
- Plan changes must invalidate cache.
- Organization-specific overrides must invalidate cache.

Recommended TTLs:

```text
public_ui_flag: 5-15 minutes
product_capability_flag: 1-5 minutes
entitlement_flag: 30-120 seconds
security_flag: 0-60 seconds
kill_switch: immediate / no stale cache
```

---

## 23. Security & Privacy Rules

Feature flag system must be treated as sensitive infrastructure.

Rules:

- Admin access must require MFA.
- High-risk changes must require reason capture.
- Sensitive changes must be audited.
- Internal admin changes must be role-scoped.
- Customer data must not be embedded in flag keys.
- Evaluation context must avoid unnecessary PII.
- Flag APIs must be rate-limited.
- Flag changes must be protected from CSRF and session abuse.
- Kill switch actions must require elevated permission.

---

## 24. Experiment Integration

Feature flags can power experiments, but experiments must follow `conversion-experimentation-system.md`.

Experiment flags must include:

- hypothesis
- variant names
- target audience
- exposure rules
- success metric
- guardrail metrics
- start date
- review date
- decision rule

Experiment flags must not:

- Mislead customers.
- Change legal claims without approval.
- Randomize billing correctness.
- Introduce hidden price discrimination.
- Override accessibility requirements.

---

## 25. Release Management Integration

Every major release must include:

- feature flag list
- default states
- owner list
- rollout schedule
- rollback procedure
- customer segments
- monitoring dashboard
- support notes
- release notes

Release PRs must reference feature flags where relevant.

---

## 26. AI Agent / Codex Rules

AI agents and Codex working on Ariyo must follow these rules:

1. Do not add a risky feature without a rollout flag.
2. Do not create a flag without owner, category, risk level, and default value.
3. Do not use frontend-only flags for protected capabilities.
4. Do not bypass entitlement checks.
5. Do not remove a flag without verifying rollout state.
6. Do not create flags with vague names like `new_feature_enabled`.
7. Do not use flags to hide broken functionality permanently.
8. Do not default high-risk features to enabled.
9. Do not expose internal flag logic to customers.
10. Do not create AI behavior flags without evaluation hooks.

---

## 27. Naming Convention

Use structured names:

```text
<domain>.<capability>.<behavior>.<state>
```

Examples:

```text
ai.employee.smart_reasoning.enabled
workflow.builder.v2.enabled
integration.google_drive.incremental_sync.enabled
geo_api.visibility_tracking.enabled
billing.smart_plan_upgrade.enabled
marketplace.creator_payouts.enabled
admin.impersonation.enabled
kill.ai_tool_execution.global
```

Avoid:

```text
flag1
new_feature
test_mode
enable_thing
smart_stuff
beta_user
```

---

## 28. Flag Cleanup Policy

Feature flags create technical debt if unmanaged.

Rules:

- Every flag must have a review date.
- Every flag must have an owner.
- Temporary flags must have expiry criteria.
- Experiment flags must be removed after decision.
- GA flags must be retired if no longer needed.
- Stale flags must appear in Internal Admin.
- Dead code behind removed flags must be deleted.

Stale flag signals:

```text
no evaluation in 30 days
no owner
review date passed
experiment ended
feature is GA for all customers
flag never enabled
flag only used in dead code
```

---

## 29. Testing Requirements

Ariyo must test feature flags.

Required tests:

- default false behavior
- enabled behavior
- disabled behavior
- plan-based access
- organization allowlist
- percentage rollout determinism
- permission enforcement
- backend API enforcement
- frontend state display
- cache invalidation
- kill switch activation
- rollback behavior
- audit log creation
- experiment exposure consistency
- expired beta grant removal
- security-sensitive flag access control

---

## 30. Forbidden Patterns

Never do these:

```text
frontend-only protected feature flags
feature flags without owners
feature flags without review dates
high-risk features defaulted to true
billing access controlled only by UI flags
security controls disabled for convenience
AI tool execution enabled without safety evaluation
rollout without observability
rollout without rollback
kill switch dependent on failing subsystem
customer-specific grants without audit logs
manual overrides without reason capture
flags named vaguely
permanent beta flags with no cleanup
experiments without hypothesis
pricing experiments that mislead customers
plan access based only on localStorage
stale flags left in code forever
internal admin tools exposed through public routes
flag changes without audit trail
using flags to hide poor quality instead of fixing it
```

---

## 31. Done Definition

A feature flag or rollout system change is done only when:

- Flag object exists.
- Owner exists.
- Risk level exists.
- Default value is safe.
- Backend enforcement exists where required.
- Frontend UX is complete.
- Entitlement logic is aligned.
- Permissions are enforced.
- Observability events exist.
- Tests exist.
- Rollback path exists.
- Kill switch exists for high-risk features.
- Support notes exist for customer-facing features.
- Documentation is updated.
- Cleanup plan exists.

---

## 32. Golden Rule

Ariyo must be able to release powerful AI capabilities without betting the whole product on one deployment.

If a feature cannot be safely enabled, observed, limited, disabled, rolled back, and explained, it is not ready for production.

