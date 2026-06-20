# Ariyo Observability & Analytics Events Skill

## Status

Production skill.

This skill defines Ariyo's unified observability, analytics, telemetry, and event taxonomy system.

It must be used by product, frontend, backend, AI, workflow, billing, security, customer success, growth, and operations teams whenever they add product behavior, AI employee behavior, workflow execution, integrations, billing flows, admin controls, or operational systems.

## Purpose

Ariyo is an AI Employee Operating System.

Ariyo cannot be managed professionally if its behavior is invisible.

This skill defines how Ariyo must observe:

- product usage
- user activation
- AI employee behavior
- AI model calls
- workflow execution
- knowledge retrieval
- integration activity
- human review decisions
- permissions and admin changes
- billing and usage
- cost behavior
- customer health
- security-sensitive activity
- reliability and incidents
- errors and degraded states
- growth funnels
- retention and expansion signals

The goal is not to collect more data.

The goal is to collect the right data, safely, consistently, and actionably.

## Related Skills

This skill depends on and must not contradict:

- `product-strategy.md`
- `product-analytics-growth.md`
- `ai-employee-architecture.md`
- `model-provider-strategy.md`
- `ai-cost-control.md`
- `knowledge-rag.md`
- `workflow-automation.md`
- `integration-ecosystem.md`
- `human-review-governance.md`
- `admin-permissions.md`
- `onboarding-activation.md`
- `customer-success-playbooks.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `quality-assurance-system.md`
- `reliability-sla.md`
- `deployment-ops.md`
- `api-contracts.md`
- `backend-architecture.md`
- `frontend-state-data.md`
- `frontend-performance.md`
- `frontend-copywriting.md`

## Core Contract

Ariyo observability is not logging everything.

Ariyo observability is the disciplined system that makes product value, AI behavior, workflow execution, customer health, reliability, cost, security, and business outcomes visible without exposing sensitive data or violating trust.

Every important Ariyo action must be measurable, explainable, attributable, debuggable, privacy-safe, and connected to a business question.

If Ariyo cannot observe it, Ariyo cannot safely improve it.

If Ariyo observes it unsafely, Ariyo breaks trust.

## Non-Negotiable Rules

1. No raw secrets in telemetry.
2. No raw access tokens in telemetry.
3. No raw prompts in default analytics.
4. No raw customer documents in analytics.
5. No raw customer conversations in analytics.
6. No sensitive PII in event properties unless explicitly classified, minimized, protected, and approved.
7. Every event must have a clear owner.
8. Every event must answer a product, operational, growth, safety, cost, or reliability question.
9. Every event must have a stable name and schema.
10. Every event must be organization-scoped where relevant.
11. Every AI execution must be traceable without leaking sensitive content.
12. Every workflow execution must be debuggable across queues, tools, retries, integrations, and review gates.
13. Every security-sensitive action must generate an audit event.
14. Every billing-impacting action must generate a usage/cost event.
15. Every incident-impacting failure must generate operational telemetry.
16. Event naming must be consistent across frontend, backend, workers, and AI services.
17. Analytics must never become a shadow database of customer content.
18. Observability must support customer trust, not surveillance.

## Observability Layers

Ariyo must separate these layers:

| Layer | Purpose | Example |
| --- | --- | --- |
| Product analytics | Understand user behavior and adoption | `employee_hired` |
| Operational logs | Debug system behavior | queue retry logs |
| Distributed traces | Follow one request/execution across services | workflow trace |
| Metrics | Monitor system health and performance | latency p95 |
| Audit logs | Prove sensitive actions | role changed |
| Security events | Detect abuse and threats | suspicious token reuse |
| AI telemetry | Understand model behavior, cost, latency, safety | model call completed |
| Business outcome events | Measure customer value | ticket resolved by AI |
| Cost events | Attribute usage and margin impact | workflow AI cost incurred |
| Reliability events | Detect incidents and degraded service | integration degraded |

These layers may share correlation IDs, but they must not be treated as identical.

## Event Taxonomy Overview

Ariyo event taxonomy must include these families:

```text
product.*
activation.*
employee.*
ai.*
rag.*
workflow.*
integration.*
review.*
admin.*
billing.*
cost.*
security.*
reliability.*
quality.*
customer_success.*
growth.*
system.*
```

Internal code may use snake_case event names, but documentation must make the family clear.

Recommended naming format:

```text
<domain>_<object>_<action>
```

Examples:

```text
employee_hired
employee_deployed
workflow_run_started
workflow_run_completed
ai_model_call_completed
rag_retrieval_completed
integration_connection_failed
review_request_approved
billing_plan_upgraded
security_login_failed
reliability_provider_degraded
```

Do not use vague event names:

```text
clicked
submitted
success
failed
done
used_ai
opened_page
error_happened
```

## Event Naming Rules

### Use Past-Tense Facts

Events must describe what happened, not what the UI intended.

Good:

```text
employee_hired
plan_upgraded
knowledge_source_synced
review_request_rejected
```

Bad:

```text
hire_employee_click
upgrade_button_click
sync_attempt
reject_modal_opened
```

UI interaction events are allowed only when they answer a real product question.

### Use Domain Language

Ariyo is not a generic SaaS dashboard.

Use Ariyo concepts:

- AI employee
- workflow
- knowledge source
- review gate
- deployment
- integration connection
- outcome
- cost budget
- organization
- workspace

Do not reduce core Ariyo concepts to generic names like bot, chat, page, card, modal, item, or thing.

### Keep Names Stable

Event names are contracts.

Once a name is used in dashboards, billing, customer success, or alerts, it must not be renamed casually.

If replacement is required:

1. create new event name
2. dual-write temporarily
3. migrate dashboards
4. deprecate old event
5. document removal date

## Global Event Envelope

Every analytics event must include a common envelope where applicable.

```json
{
  "event_name": "workflow_run_completed",
  "event_version": 1,
  "occurred_at": "2026-06-18T10:30:00Z",
  "environment": "production",
  "source": "backend",
  "request_id": "req_...",
  "trace_id": "trc_...",
  "organization_id": "org_...",
  "workspace_id": "wrk_...",
  "actor_type": "user|system|ai_employee|integration|support",
  "actor_id": "usr_...",
  "plan_tier": "basic|pro|smart",
  "session_id": "ses_...",
  "properties": {}
}
```

### Required Global Fields

| Field | Required | Notes |
| --- | --- | --- |
| `event_name` | Yes | Stable event name |
| `event_version` | Yes | Increment when schema changes |
| `occurred_at` | Yes | Server timestamp preferred |
| `environment` | Yes | `production`, `staging`, `development` |
| `source` | Yes | `frontend`, `backend`, `worker`, `ai_gateway`, `webhook`, `system` |
| `request_id` | When available | For request correlation |
| `trace_id` | When available | For cross-service trace |
| `organization_id` | For org-scoped events | Never omit for tenant behavior |
| `workspace_id` | When relevant | Workspace boundary |
| `actor_type` | Yes | User/system/AI/integration/support |
| `actor_id` | When safe | Internal ID only, not email |
| `plan_tier` | When available | Basic/Pro/Smart |
| `properties` | Yes | Event-specific payload |

## ID and Correlation Rules

Ariyo must support debugging across distributed systems.

Use:

| ID | Purpose |
| --- | --- |
| `request_id` | One inbound HTTP/API request |
| `trace_id` | Cross-service operation trace |
| `run_id` | Workflow run |
| `step_id` | Workflow step |
| `employee_id` | AI employee |
| `conversation_id` | Conversation/session with AI employee |
| `model_call_id` | One AI model call |
| `tool_call_id` | One AI tool call |
| `retrieval_id` | One RAG retrieval operation |
| `sync_job_id` | One integration sync job |
| `review_request_id` | One human review item |
| `billing_usage_id` | One billing usage record |
| `incident_id` | One reliability/security incident |

Never rely on page URL alone to debug Ariyo behavior.

## Privacy and Data Governance Rules

Analytics must follow `data-governance-privacy.md`.

### Allowed by Default

- internal IDs
- plan tier
- feature flags
- counts
- durations
- statuses
- result categories
- error codes
- model profile names
- cost values
- token counts
- outcome categories
- integration provider name
- workflow type
- employee role/type
- safety decision categories

### Not Allowed by Default

- raw prompts
- raw model outputs
- raw customer documents
- raw chat transcripts
- customer email addresses
- phone numbers
- access tokens
- API keys
- OAuth refresh tokens
- file contents
- payment card details
- medical/legal/financial sensitive details
- user-entered secrets
- raw webhook payloads

### Sensitive Debug Data

If sensitive debug capture is ever needed, it must be:

1. off by default
2. time-limited
3. organization-approved where applicable
4. access-controlled
5. redacted
6. encrypted
7. audited
8. automatically expired
9. excluded from general analytics tools

## Plan-Aware Observability

Ariyo has Basic, Pro, and Smart plans.

Observability must understand plan boundaries.

| Plan | Observability Product Behavior |
| --- | --- |
| Basic | Essential usage, activation, cost guardrails, errors, basic health |
| Pro | Detailed workflow, employee, cost, integration, and outcome analytics |
| Smart | Advanced AI execution, optimization, predictive cost, quality, health, and ROI telemetry |

Plan-aware observability does not mean weaker internal safety on Basic.

Internally, Ariyo must still collect enough operational telemetry to secure, debug, and protect all customers.

Customer-facing dashboards may differ by plan.

## Product Analytics Events

Product analytics events measure adoption and product behavior.

### Core Product Events

```text
organization_created
workspace_created
user_invited
user_joined_organization
user_completed_profile
first_dashboard_viewed
feature_discovered
feature_used
empty_state_viewed
upgrade_prompt_viewed
upgrade_prompt_clicked
```

### Product Event Properties

Use:

```json
{
  "entry_point": "onboarding|dashboard|employee_detail|settings",
  "feature_key": "knowledge_sources",
  "surface": "web|mobile_web|api",
  "plan_tier": "basic",
  "is_first_time": true
}
```

Do not over-track meaningless UI clicks.

## Activation Events

Activation is central to Ariyo.

Events must support the onboarding and activation model in `onboarding-activation.md`.

### Activation Funnel Events

```text
activation_started
organization_profile_completed
business_goal_selected
recommended_employee_viewed
employee_template_selected
employee_hired
knowledge_source_connected
channel_connected
review_mode_configured
deploy_readiness_check_started
deploy_readiness_check_passed
employee_deployed
first_ai_output_generated
first_ai_output_reviewed
first_value_moment_reached
activation_completed
activation_stalled
activation_recovered
```

### Activation Metrics

Ariyo must measure:

- signup to first employee hired
- signup to first knowledge source connected
- signup to first channel connected
- signup to first deployed employee
- signup to first useful output
- percentage reaching first value moment
- stalled onboarding rate
- recovery rate
- activation by plan
- activation by use case
- activation by employee template

### First Value Moment Rule

`first_value_moment_reached` must not fire just because the user clicked a button.

It must fire only when Ariyo produces a meaningful, user-visible output tied to the user's selected business goal.

## AI Employee Events

AI employee events measure creation, configuration, deployment, performance, trust, and outcomes.

### AI Employee Lifecycle Events

```text
employee_template_viewed
employee_template_selected
employee_hired
employee_configured
employee_policy_updated
employee_knowledge_assigned
employee_channel_assigned
employee_workflow_assigned
employee_review_mode_updated
employee_test_run_started
employee_test_run_completed
employee_deployed
employee_paused
employee_resumed
employee_archived
employee_failed
```

### AI Employee Outcome Events

```text
employee_task_started
employee_task_completed
employee_task_failed
employee_task_escalated
employee_task_required_review
employee_task_approved
employee_task_rejected
employee_task_corrected
employee_outcome_verified
employee_trust_score_changed
```

### AI Employee Properties

```json
{
  "employee_id": "emp_...",
  "employee_type": "support|sales|operations|content|finance|custom",
  "template_id": "tpl_...",
  "deployment_status": "draft|testing|active|paused|archived",
  "review_mode": "automatic|review_required|high_risk_review",
  "assigned_channels_count": 2,
  "assigned_knowledge_sources_count": 3,
  "assigned_workflows_count": 1
}
```

## AI Model Execution Events

AI model events must follow `model-provider-strategy.md` and `ai-cost-control.md`.

### Model Call Events

```text
ai_model_call_started
ai_model_call_completed
ai_model_call_failed
ai_model_call_retried
ai_model_call_timed_out
ai_model_call_fallback_used
ai_model_call_downgraded
ai_model_call_upgraded
ai_model_call_blocked_by_policy
ai_model_call_blocked_by_budget
```

### Model Call Properties

```json
{
  "model_call_id": "mc_...",
  "provider_key": "openai|anthropic|local|custom",
  "model_profile": "basic_fast|pro_balanced|smart_reasoning",
  "task_type": "classification|drafting|reasoning|tool_planning|summarization|retrieval_answer",
  "input_tokens": 1200,
  "output_tokens": 340,
  "cached_input_tokens": 800,
  "latency_ms": 1800,
  "cost_usd": 0.0142,
  "fallback_used": false,
  "safety_filter_result": "passed|blocked|review_required",
  "structured_output_valid": true,
  "retry_count": 0
}
```

### AI Quality Events

```text
ai_output_generated
ai_output_validated
ai_output_failed_validation
ai_output_corrected_by_user
ai_output_marked_helpful
ai_output_marked_unhelpful
ai_output_flagged
ai_output_safety_blocked
ai_output_hallucination_reported
```

### Prompt Observability Rule

Default analytics must not store raw prompts.

Instead capture:

- prompt template ID
- prompt version
- task type
- employee type
- policy profile
- model profile
- token count
- safety result
- output validation status
- user feedback category

## RAG and Knowledge Events

RAG events must follow `knowledge-rag.md`.

### Knowledge Source Events

```text
knowledge_source_added
knowledge_source_connected
knowledge_source_sync_started
knowledge_source_sync_completed
knowledge_source_sync_failed
knowledge_source_partially_synced
knowledge_source_deleted
knowledge_source_permission_changed
knowledge_source_outdated
```

### Retrieval Events

```text
rag_retrieval_started
rag_retrieval_completed
rag_retrieval_failed
rag_no_relevant_context_found
rag_context_filtered_by_permission
rag_context_filtered_by_freshness
rag_context_used_in_answer
rag_answer_failed_grounding_check
rag_answer_passed_grounding_check
```

### Retrieval Properties

```json
{
  "retrieval_id": "ret_...",
  "employee_id": "emp_...",
  "knowledge_source_count": 4,
  "candidate_chunks_count": 42,
  "used_chunks_count": 5,
  "permission_filtered_count": 3,
  "freshness_filtered_count": 1,
  "retrieval_latency_ms": 420,
  "grounding_score_bucket": "high|medium|low",
  "answer_grounded": true
}
```

Do not log raw retrieved chunks in analytics.

## Workflow Events

Workflow events must follow `workflow-automation.md`.

### Workflow Lifecycle Events

```text
workflow_created
workflow_updated
workflow_enabled
workflow_disabled
workflow_deleted
workflow_run_started
workflow_run_completed
workflow_run_failed
workflow_run_cancelled
workflow_run_retried
workflow_run_timed_out
workflow_run_paused_for_review
workflow_run_resumed_after_review
```

### Workflow Step Events

```text
workflow_step_started
workflow_step_completed
workflow_step_failed
workflow_step_retried
workflow_step_skipped
workflow_step_blocked_by_policy
workflow_step_blocked_by_budget
workflow_step_blocked_by_permission
```

### Workflow Properties

```json
{
  "workflow_id": "wf_...",
  "run_id": "run_...",
  "workflow_type": "support_triage|lead_qualification|content_generation|custom",
  "trigger_type": "manual|scheduled|webhook|channel_message|integration_event",
  "step_count": 6,
  "completed_step_count": 6,
  "retry_count": 1,
  "duration_ms": 12400,
  "status": "completed",
  "requires_review": false,
  "cost_usd": 0.081,
  "outcome_category": "resolved|escalated|created_draft|updated_record|failed"
}
```

## Integration Events

Integration events must follow `integration-ecosystem.md`.

### Connection Events

```text
integration_provider_viewed
integration_connection_started
integration_connection_completed
integration_connection_failed
integration_connection_reauthorized
integration_connection_revoked
integration_connection_disconnected
integration_connection_degraded
integration_connection_recovered
```

### Sync Events

```text
integration_sync_queued
integration_sync_started
integration_sync_completed
integration_sync_partially_completed
integration_sync_failed
integration_sync_retried
integration_sync_paused
integration_sync_resumed
```

### Webhook Events

```text
webhook_received
webhook_signature_verified
webhook_signature_failed
webhook_duplicate_ignored
webhook_event_processed
webhook_event_failed
webhook_dead_lettered
```

### Integration Properties

```json
{
  "provider_key": "google_drive|slack|hubspot|stripe|whatsapp|custom_api",
  "connection_id": "conn_...",
  "sync_job_id": "sync_...",
  "auth_method": "oauth|api_key|webhook|service_account",
  "resource_type": "file|contact|ticket|message|order|calendar_event",
  "records_processed": 240,
  "records_failed": 3,
  "rate_limited": false,
  "latency_ms": 3200
}
```

Do not log provider tokens, raw webhook payloads, or raw external records.

## Human Review Events

Human review events must follow `human-review-governance.md`.

### Review Events

```text
review_request_created
review_request_viewed
review_request_approved
review_request_rejected
review_request_edited
review_request_expired
review_request_escalated
review_decision_audited
```

### Review Properties

```json
{
  "review_request_id": "rev_...",
  "employee_id": "emp_...",
  "workflow_id": "wf_...",
  "risk_level": "low|medium|high|critical",
  "action_type": "send_message|update_crm|refund|publish|delete|export",
  "decision": "approved|rejected|edited|expired",
  "review_latency_ms": 84000,
  "reviewer_role": "owner|admin|reviewer",
  "auto_action_blocked": true
}
```

## Admin and Permission Events

Admin events must follow `admin-permissions.md`.

### Admin Events

```text
role_assigned
role_removed
permission_granted
permission_revoked
member_invited
member_removed
workspace_access_changed
employee_access_changed
billing_admin_changed
policy_updated
api_key_created
api_key_revoked
audit_log_exported
```

These events must also be part of audit logs.

### Admin Properties

```json
{
  "target_user_id": "usr_...",
  "role": "owner|admin|member|reviewer|billing_admin",
  "permission_key": "employee.deploy",
  "resource_type": "organization|workspace|employee|integration|billing",
  "resource_id": "emp_...",
  "changed_by_actor_type": "user",
  "requires_audit": true
}
```

## Billing and Cost Events

Billing events must follow `monetization-billing.md` and `ai-cost-control.md`.

### Billing Events

```text
billing_plan_viewed
billing_plan_selected
billing_plan_upgraded
billing_plan_downgraded
billing_plan_cancelled
billing_checkout_started
billing_checkout_completed
billing_checkout_failed
invoice_created
invoice_paid
invoice_payment_failed
usage_limit_reached
usage_limit_warning_sent
```

### AI Cost Events

```text
ai_budget_created
ai_budget_updated
ai_budget_warning_triggered
ai_budget_exceeded
ai_usage_recorded
ai_cost_attributed
ai_cost_anomaly_detected
ai_cost_throttling_started
ai_cost_throttling_ended
model_downgrade_applied
model_upgrade_applied
cache_hit_recorded
cache_miss_recorded
```

### Cost Properties

```json
{
  "billing_plan": "basic|pro|smart",
  "budget_period": "daily|monthly|custom",
  "budget_limit_usd": 100,
  "budget_used_usd": 76.42,
  "cost_usd": 0.052,
  "cost_category": "model_call|embedding|reranking|workflow|integration|storage",
  "attribution_type": "employee|workflow|organization|user|integration",
  "attribution_id": "emp_...",
  "throttling_applied": false
}
```

## Security Events

Security events must follow `security-threat-model.md`.

### Security Event Families

```text
security_login_succeeded
security_login_failed
security_mfa_required
security_mfa_failed
security_password_changed
security_session_revoked
security_suspicious_activity_detected
security_rate_limit_triggered
security_permission_denied
security_token_rotated
security_api_key_created
security_api_key_revoked
security_webhook_signature_failed
security_sensitive_export_requested
security_sensitive_export_completed
security_support_access_requested
security_support_access_granted
security_support_access_revoked
```

### Security Event Rules

Security events must:

- be immutable where possible
- include actor and target context
- include organization scope
- include reason codes
- be queryable by incident responders
- be protected from tampering
- avoid sensitive payloads
- support alerting

### Security Properties

```json
{
  "risk_level": "low|medium|high|critical",
  "reason_code": "permission_denied|invalid_signature|rate_limit|anomaly|suspicious_ip",
  "ip_country": "DE",
  "auth_method": "password|sso|api_key|oauth",
  "resource_type": "integration|billing|employee|knowledge_source",
  "resource_id": "res_...",
  "action_allowed": false
}
```

Do not log full IP if privacy policy forbids it; use policy-approved IP handling.

## Reliability Events

Reliability events must follow `reliability-sla.md`.

### Reliability Events

```text
service_degraded
service_recovered
provider_degraded
provider_recovered
queue_backlog_detected
queue_backlog_recovered
error_budget_warning_triggered
incident_created
incident_updated
incident_resolved
rollback_started
rollback_completed
status_page_updated
sla_breach_detected
```

### Reliability Properties

```json
{
  "service_key": "api|worker|ai_gateway|rag|billing|integrations|web_app",
  "severity": "sev1|sev2|sev3|sev4",
  "incident_id": "inc_...",
  "affected_plan_tiers": ["pro", "smart"],
  "affected_regions": ["eu-central"],
  "degraded_capability": "model_calls|workflow_runs|knowledge_sync",
  "duration_ms": 540000,
  "customer_visible": true
}
```

## Customer Success Events

Customer success events must follow `customer-success-playbooks.md`.

### Customer Health Events

```text
customer_health_score_calculated
customer_health_score_decreased
customer_health_score_increased
customer_risk_detected
customer_risk_resolved
customer_success_playbook_started
customer_success_playbook_completed
expansion_signal_detected
renewal_risk_detected
roi_report_generated
```

### Customer Success Properties

```json
{
  "health_score": 82,
  "previous_health_score": 68,
  "risk_type": "low_activation|low_usage|high_errors|cost_concern|trust_issue|knowledge_gap",
  "playbook_key": "activation_recovery|trust_recovery|cost_optimization|expansion_readiness",
  "outcome": "recovered|expanded|no_change|churned",
  "primary_employee_type": "support"
}
```

## Growth Events

Growth events must be tied to product value, not vanity.

### Growth Events

```text
referral_invite_sent
referral_signup_completed
template_shared
template_imported
marketplace_employee_viewed
marketplace_employee_installed
upgrade_prompt_viewed
upgrade_prompt_clicked
upgrade_completed
expansion_recommendation_viewed
expansion_recommendation_accepted
```

### Growth Metrics

Ariyo may measure:

- conversion by plan
- activation by source
- upgrade prompts by trigger
- template adoption
- marketplace conversion
- invited user activation
- expansion readiness
- employee adoption per organization

Do not optimize growth by hiding cost, risk, or AI limitations.

## Quality Events

Quality events must follow `quality-assurance-system.md`.

```text
quality_gate_started
quality_gate_passed
quality_gate_failed
release_blocked_by_quality
ai_eval_run_started
ai_eval_run_completed
ai_eval_case_failed
regression_detected
regression_resolved
```

Quality event properties:

```json
{
  "quality_gate": "security|performance|ai_eval|workflow_e2e|billing|permissions",
  "release_id": "rel_...",
  "score": 94,
  "threshold": 90,
  "blocking": true,
  "failed_cases_count": 2
}
```

## Metrics Catalog

Ariyo must maintain metric definitions, not just event names.

### Product Metrics

| Metric | Definition |
| --- | --- |
| Activation rate | Organizations reaching first value moment / organizations created |
| Time to first value | Time from signup to `first_value_moment_reached` |
| Employee deployment rate | Organizations with at least one deployed AI employee |
| Workflow adoption rate | Organizations with at least one active workflow |
| Knowledge connection rate | Organizations with at least one synced knowledge source |
| Channel connection rate | Organizations with at least one connected channel |

### AI Metrics

| Metric | Definition |
| --- | --- |
| Model latency p95 | p95 latency for model calls by model profile |
| Model failure rate | failed calls / total calls |
| Fallback rate | fallback calls / total calls |
| Structured output validity | valid structured outputs / total structured calls |
| Safety block rate | blocked AI outputs / total outputs |
| User correction rate | user-corrected outputs / total outputs |
| Helpful feedback rate | helpful outputs / rated outputs |

### Workflow Metrics

| Metric | Definition |
| --- | --- |
| Workflow completion rate | completed runs / started runs |
| Workflow failure rate | failed runs / started runs |
| Review interruption rate | runs paused for review / started runs |
| Retry rate | retried steps / total steps |
| Automation outcome rate | verified outcomes / workflow runs |

### Cost Metrics

| Metric | Definition |
| --- | --- |
| AI cost per organization | AI spend attributed to org |
| AI cost per employee | AI spend attributed to AI employee |
| AI cost per workflow | AI spend attributed to workflow |
| Cost per verified outcome | AI cost / verified business outcomes |
| Budget utilization | used budget / budget limit |
| Cache savings | estimated avoided cost from cache hits |
| Gross margin risk | customers exceeding expected cost envelope |

### Reliability Metrics

| Metric | Definition |
| --- | --- |
| API availability | successful API requests / total requests |
| Workflow availability | successful workflow starts / requested starts |
| AI gateway availability | successful model calls / attempted model calls |
| Integration sync availability | successful syncs / attempted syncs |
| Queue age p95 | p95 age of pending jobs |
| Error budget burn | consumed error budget rate |

### Customer Success Metrics

| Metric | Definition |
| --- | --- |
| Health score | Composite customer success score |
| Expansion readiness | Score based on value, usage, trust, and capacity |
| Renewal risk | Risk score based on adoption, errors, support, and value |
| ROI evidence count | Number of verified value events available |

## Event Schema Governance

Ariyo must maintain an event registry.

Each event must document:

- event name
- domain
- owner
- description
- trigger condition
- source
- required properties
- optional properties
- privacy classification
- retention policy
- destinations
- dashboards using it
- alerts using it
- version
- deprecation status

Example:

```yaml
event_name: workflow_run_completed
domain: workflow
owner: product_analytics
source: backend
trigger: A workflow run reaches completed state.
privacy_classification: internal_operational
retention: 24_months
destinations:
  - product_analytics
  - operational_metrics
  - customer_health
required_properties:
  - workflow_id
  - run_id
  - workflow_type
  - duration_ms
  - status
  - cost_usd
```

## Event Versioning

When adding optional properties, keep the same version.

When changing meaning or removing/renaming required properties, increment `event_version`.

Never silently change metric semantics.

## Data Destinations

Different telemetry belongs in different systems.

| Destination | Data Type |
| --- | --- |
| Product analytics | Privacy-safe product events |
| Data warehouse | Governed event history and business metrics |
| APM/tracing | Request traces and performance data |
| Logging system | Operational logs |
| Audit log store | Sensitive/admin/security actions |
| Billing ledger | Cost and usage events |
| Security SIEM | Security signals and incident events |
| Customer dashboard | Customer-facing aggregated metrics |

Do not send all data to all tools.

## Customer-Facing Analytics

Customer-facing analytics must be useful and safe.

Examples:

- tasks completed by AI employees
- time saved estimate
- workflows completed
- support tickets resolved
- drafts generated
- escalations avoided
- AI cost by employee
- knowledge gaps detected
- review decisions
- employee performance
- integration health

Do not show:

- raw internal model prompts
- hidden safety scores without explanation
- sensitive debug traces
- internal provider error details
- other tenants' aggregated data when re-identification is possible

## Internal Dashboards

Ariyo must maintain these dashboards:

### Executive Product Dashboard

- activation rate
- first value time
- employee deployment rate
- workflow adoption
- retention
- expansion readiness
- AI cost per customer
- gross margin risk

### AI Operations Dashboard

- model latency
- model error rate
- fallback rate
- safety block rate
- validation failure rate
- token usage
- cost by model profile
- provider degradation

### Workflow Operations Dashboard

- workflow runs
- failure rate
- queue backlog
- retry rate
- review pause rate
- run duration
- outcome rate

### Customer Health Dashboard

- health score
- risk segments
- activation gaps
- cost concerns
- trust issues
- knowledge gaps
- expansion signals

### Security Dashboard

- failed logins
- permission denied spikes
- suspicious activity
- API key changes
- webhook signature failures
- sensitive exports
- support access

### Reliability Dashboard

- SLA/SLO status
- incident count
- error budget
- service degradation
- queue health
- integration health
- provider health

## Alerting Rules

Analytics is not enough.

Some events must trigger alerts.

### Alert Categories

| Alert | Example Trigger |
| --- | --- |
| Security | spike in permission denied events |
| Cost | customer exceeds 80% Smart budget early |
| Reliability | queue age p95 exceeds threshold |
| AI quality | validation failure rate spikes |
| RAG | grounding failure rate spikes |
| Integration | webhook signature failures spike |
| Billing | payment failure spike |
| Customer success | high-value customer health drops sharply |

Alerts must include:

- severity
- owner
- runbook link
- customer impact
- affected plan tiers
- affected services
- trace/dashboard links

## Frontend Instrumentation Rules

Frontend may track:

- page/surface view events with purpose
- onboarding progression
- feature discovery
- empty states
- user-initiated product actions
- error boundary events
- performance metrics
- upgrade prompts

Frontend must not track:

- secrets
- raw prompt text
- raw document text
- access tokens
- full conversation text
- hidden form values containing sensitive information

Frontend must use a typed analytics wrapper.

Do not call analytics tools directly inside random components.

Recommended frontend pattern:

```ts
analytics.track('employee_hired', {
  employee_type: employee.type,
  template_id: employee.templateId,
  source: 'onboarding',
});
```

Bad pattern:

```ts
window.analytics.track('clicked', formData);
```

## Backend Instrumentation Rules

Backend must be source of truth for:

- billing usage
- AI cost
- workflow execution
- review decisions
- integration sync
- permission changes
- security events
- audit logs
- AI model calls
- RAG retrieval

Frontend events alone must never drive billing, audit, security, or critical analytics.

## Worker and Queue Observability

Celery/background jobs must emit:

```text
job_queued
job_started
job_completed
job_failed
job_retried
job_dead_lettered
job_cancelled
```

Properties:

```json
{
  "job_type": "knowledge_sync|workflow_run|webhook_processing|billing_reconciliation",
  "queue_name": "default|ai|integrations|billing",
  "attempt": 2,
  "max_attempts": 5,
  "duration_ms": 14000,
  "error_code": "provider_rate_limited"
}
```

## Error Taxonomy

Errors must use stable codes.

Examples:

```text
AUTH_PERMISSION_DENIED
AUTH_SESSION_EXPIRED
AI_PROVIDER_TIMEOUT
AI_OUTPUT_VALIDATION_FAILED
RAG_NO_CONTEXT_FOUND
WORKFLOW_STEP_FAILED
INTEGRATION_RATE_LIMITED
BILLING_PAYMENT_FAILED
SECURITY_WEBHOOK_SIGNATURE_INVALID
QUEUE_JOB_EXHAUSTED
```

Do not use raw exception strings as analytics properties.

## Debug Trace Requirements

For a failed workflow run, Ariyo must be able to answer:

- Which organization?
- Which workspace?
- Which AI employee?
- Which workflow?
- Which run?
- Which step failed?
- Which tool or integration was involved?
- Which model profile was used?
- Was fallback attempted?
- Was review required?
- Was permission denied?
- Was budget exceeded?
- Was provider degraded?
- Was retry attempted?
- What user-facing message was shown?

Without exposing sensitive content.

## Event Retention Rules

Retention must follow `data-governance-privacy.md`.

Default guidance:

| Data Type | Suggested Retention |
| --- | --- |
| Product analytics | 24 months unless policy differs |
| Aggregated metrics | Longer if anonymized/aggregated |
| Audit logs | According to customer plan/legal requirement |
| Security events | According to security policy |
| Raw operational logs | Shorter, e.g. 30-90 days |
| Billing ledger | According to finance/legal requirement |
| Sensitive debug captures | Short, time-limited, explicit expiry |

Do not treat all telemetry as permanently retainable.

## Customer Data Export and Deletion

Ariyo must know which telemetry is:

- customer-owned
- operational metadata
- billing record
- audit record
- anonymized aggregate
- security record

Deletion/export behavior must be defined per category.

Do not delete legally required billing or security audit records without policy.

Do not retain personal data longer than justified.

## Event Testing

Events must be tested.

### Required Tests

- event fires when expected
- event does not fire when action fails
- required properties exist
- no forbidden fields are included
- event version is correct
- organization scope is present
- billing events are server-side
- security events are audit-safe
- AI events do not include raw prompts by default
- RAG events do not include raw chunks
- workflow events include run correlation IDs

## Release Gate Requirements

A feature is not production-ready if:

- important actions are invisible
- events are unnamed or inconsistent
- billing usage is not attributed
- AI cost is not observable
- workflow failure cannot be traced
- security-sensitive actions are not audited
- customer-facing value cannot be measured
- event privacy classification is missing
- dashboards/alerts are not updated for critical systems

## Forbidden Observability Patterns

Never do these:

```text
log everything
send raw prompts to analytics
send raw customer documents to analytics
store access tokens in logs
store API keys in logs
track UI clicks without a question
use vague event names like success or clicked
use frontend events for billing truth
use analytics as audit log
use audit log as product analytics
omit organization_id on tenant-scoped events
log raw webhook payloads by default
log payment card data
log full conversation text by default
change event meaning silently
build dashboards from unstable events
use raw exception messages as public error analytics
send all telemetry to third-party tools without classification
retain sensitive debug data forever
show internal telemetry directly to customers
create metrics without definitions
optimize growth from vanity metrics alone
```

## Golden Rule

Ariyo must make the invisible work of AI employees visible enough to trust, debug, improve, price, secure, and scale.

But Ariyo must never use observability as an excuse to collect unsafe data.

## Final Rule

If a feature affects customer value, AI behavior, cost, security, reliability, billing, governance, or retention, it must ship with explicit events, metrics, dashboards or traces, privacy classification, and ownership.

No invisible production behavior.
