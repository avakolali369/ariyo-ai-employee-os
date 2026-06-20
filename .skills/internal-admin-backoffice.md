# Ariyo Internal Admin & Backoffice Skill

## 1. Purpose

This skill defines the internal admin and backoffice operating system for Ariyo.

It governs how authorized Ariyo team members manage organizations, users, plans, billing support, feature flags, impersonation, trust operations, support tools, moderation, marketplace operations, AI employee supervision, and executive-level operational KPIs.

The internal admin is not a customer-facing product surface.

It is a privileged operational control plane and must be treated as a high-risk system.

---

## 2. Core Contract

Ariyo Internal Admin is not a hidden dashboard for shortcuts.

Ariyo Internal Admin is the secure backoffice control plane that allows authorized internal operators to support customers, protect the platform, investigate issues, manage operational risk, control rollout, resolve billing and trust problems, and monitor the health of the business.

Every internal admin action must be permission-scoped, purpose-bound, audited, reversible where possible, privacy-aware, customer-safe, and explainable later.

Ariyo must never give internal users uncontrolled power over customer organizations, AI employees, billing, data, permissions, or security controls.

---

## 3. Strategic Role in Ariyo

The internal admin backoffice exists to support:

- customer support operations
- trust and safety operations
- billing and finance support
- enterprise onboarding
- feature rollout and experimentation
- plan and entitlement support
- AI employee troubleshooting
- workflow and integration diagnostics
- marketplace and partner governance
- incident response
- security investigation
- executive visibility
- revenue operations
- customer success operations

It must not become:

- a replacement for product quality
- a bypass for proper backend controls
- an untracked customer data viewer
- a manual patching console
- a dangerous super-admin interface
- a place where support agents can change anything without audit

---

## 4. Dependencies

This skill depends on and must stay consistent with:

- `admin-permissions.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `billing-monetization.md` or `monetization-billing.md`
- `pricing-packaging-strategy.md`
- `ai-cost-control.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `customer-success-playbooks.md`
- `customer-lifecycle-automation.md`
- `sales-crm-pipeline-system.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `operations-command-center.md`
- `ai-safety-evaluation.md`
- `human-review-governance.md`
- `integration-ecosystem.md`
- `ecosystem-marketplace-economy.md`

---

## 5. Backoffice Philosophy

Internal admin should follow five principles.

### 5.1 Least Internal Power

Every internal role receives only the minimum privileges needed.

Support should not automatically see sensitive customer data.

Finance should not automatically access AI conversation content.

Trust and safety should not automatically modify billing.

Engineering should not automatically impersonate customers.

### 5.2 Purpose-Bound Access

Sensitive actions require a purpose.

Examples:

- support investigation
- billing correction
- customer-requested assistance
- fraud review
- security incident
- enterprise onboarding
- data export request
- refund review
- marketplace moderation

A purpose must be recorded before sensitive access is granted.

### 5.3 Full Auditability

Every privileged action must generate an immutable audit event.

Audit events must include:

- actor
- role
- action
- target object
- organization
- reason
- timestamp
- before state where relevant
- after state where relevant
- approval reference where relevant
- request ID
- IP/device/session metadata where appropriate

### 5.4 Safe Intervention

Internal users may help customers, but they must not silently change customer reality.

Changes should be:

- visible to the customer when appropriate
- reversible where possible
- confirmed for high-impact actions
- subject to approval for high-risk actions
- logged permanently

### 5.5 Operational Intelligence

Backoffice must not only show records.

It must surface advanced KPIs, risks, anomalies, next actions, and customer/business health.

---

## 6. Internal Admin User Roles

### 6.1 Support Agent

May view basic account and ticket context.

May help with common issues.

Must not access sensitive organization data unless approved.

### 6.2 Senior Support Agent

May perform limited plan, onboarding, and troubleshooting operations.

May trigger support-approved retries.

May request elevated access.

### 6.3 Customer Success Manager

May view customer health, adoption, lifecycle state, AI employee usage summaries, and expansion signals.

Must not access raw sensitive customer content by default.

### 6.4 Billing Operator

May view invoices, payments, subscriptions, credits, refunds, taxes, and reconciliation state.

Must not alter plan entitlements without policy-controlled workflow.

### 6.5 Finance Admin

May access revenue, payouts, commissions, accounting exports, reconciliation, and financial controls.

Must not view sensitive AI content.

### 6.6 Trust & Safety Operator

May investigate abuse, unsafe AI behavior, prohibited content, suspicious integrations, and marketplace violations.

May suspend risky resources according to policy.

### 6.7 Security Operator

May investigate security events, access logs, suspicious sessions, API abuse, token anomalies, integration abuse, and tenant isolation alerts.

### 6.8 Marketplace Reviewer

May review, approve, reject, suspend, or flag marketplace assets and creators.

### 6.9 Product Operator

May view product metrics, feature adoption, experiments, and rollout status.

May manage feature flags only with proper authorization.

### 6.10 Engineering Operator

May access technical diagnostics, job traces, logs, errors, queue state, provider state, and operational tooling.

Must not use production customer data casually.

### 6.11 Executive Viewer

May view aggregated business, revenue, reliability, security, customer health, and KPI dashboards.

Must not have operational write permissions by default.

### 6.12 Super Admin

Highly restricted.

Must require strong authentication, step-up verification, approval, and enhanced audit.

Super admin access should be rare, temporary, and reviewed.

---

## 7. Internal Admin Permission Model

Permissions must be expressed as explicit capabilities.

Examples:

```text
organization.read.summary
organization.read.sensitive
organization.update.status
organization.suspend
organization.restore
user.read.summary
user.update.role
user.disable
billing.read
billing.refund.request
billing.refund.approve
billing.credit.apply
subscription.update
entitlement.override.request
entitlement.override.approve
feature_flag.read
feature_flag.update
support.impersonation.request
support.impersonation.start
support.impersonation.stop
security.event.read
security.action.block_session
trust.asset.suspend
marketplace.asset.review
marketplace.asset.publish
ai_employee.read.summary
ai_employee.pause
ai_employee.resume
workflow.retry
integration.reauth_request
knowledge.reindex
```

Permissions must be:

- role-scoped
- organization-scoped where relevant
- purpose-scoped for sensitive actions
- time-boxed for elevated access
- auditable
- revocable

---

## 8. Core Backoffice Modules

### 8.1 Organization Management

Must support:

- organization search
- organization profile
- plan and entitlement summary
- lifecycle stage
- risk status
- billing status
- security status
- AI employee count
- workflow count
- integrations connected
- knowledge sources connected
- health score
- recent incidents
- support history
- admin users
- audit summary

Operators must not see sensitive content by default.

### 8.2 User Management

Must support:

- user search
- role overview
- organization memberships
- session status
- login history summary
- MFA status
- invitation status
- deactivation
- role change requests
- access risk flags

High-risk user actions must require reason and audit.

### 8.3 Plan & Entitlement Management

Must support:

- current plan
- Basic / Pro / Smart entitlement map
- add-ons
- trial status
- usage limits
- overage rules
- feature gates
- manual override history
- entitlement conflict detection
- upgrade/downgrade state

Manual entitlement overrides require approval.

### 8.4 Billing Support

Must support:

- invoices
- payment status
- failed payments
- refunds
- credits
- tax status
- plan changes
- billing contacts
- payment provider references
- reconciliation status
- disputes

Billing actions must reconcile with payment provider state.

### 8.5 AI Employee Operations

Must support:

- AI employee status
- plan tier
- model profile
- cost usage
- tool permissions
- workflow assignments
- knowledge access
- review mode
- safety events
- failed tasks
- paused state
- deployment status
- audit log

Operators may pause AI employees in safety, cost, or incident scenarios.

### 8.6 Workflow Operations

Must support:

- workflow health
- execution history
- queue status
- retries
- failures
- idempotency state
- integration dependencies
- human review dependencies
- cost per execution
- average latency
- success rate

Manual retry must be policy-controlled.

### 8.7 Integration Operations

Must support:

- provider status
- connected organizations
- degraded providers
- webhook failures
- sync failures
- reauthorization needed
- rate-limit events
- token health without exposing secrets
- disconnect state
- action failure history

Secrets must never be visible in backoffice UI.

### 8.8 Knowledge/RAG Operations

Must support:

- source health
- indexing status
- stale content
- failed ingestion
- permission mismatch warnings
- retrieval quality signals
- citation coverage
- hallucination reports
- reindex action
- content freshness

Support must not browse customer knowledge content unless purpose-bound and permitted.

### 8.9 Support Tools

Must support:

- ticket context
- customer timeline
- known issues
- playbook suggestions
- recommended reply drafts
- escalation routing
- customer-safe diagnostics
- permission-safe context sharing
- support notes

Support AI assistant must be grounded and cannot invent product states.

### 8.10 Trust & Safety Tools

Must support:

- abuse reports
- unsafe AI output reports
- suspicious automation
- malicious integrations
- marketplace violations
- spam patterns
- account takeover risk
- policy enforcement actions

### 8.11 Feature Flags & Rollout Controls

Must support:

- flag listing
- flag owner
- affected plans
- affected organizations
- rollout percentage
- experiment linkage
- kill switch
- rollback action
- audit trail
- expiry date

Every feature flag must have owner, purpose, expiry, and rollback plan.

### 8.12 Moderation & Policy Enforcement

Must support:

- policy cases
- violation type
- evidence references
- enforcement action
- appeal status
- customer communication status
- repeat offender tracking

### 8.13 Marketplace Governance

Must support:

- creator verification
- asset review
- listing quality score
- install risk
- refund/dispute status
- payout hold
- violation history
- trust badges
- ranking moderation

### 8.14 Internal Notes

Internal notes must be:

- structured
- timestamped
- author-attributed
- non-destructive
- private to internal roles
- excluded from AI training unless explicitly allowed by policy

---

## 9. Secure Impersonation

Impersonation is high risk.

Ariyo must prefer customer-safe diagnostic views over impersonation.

Impersonation may only be used when:

- customer requests help
- issue cannot be diagnosed otherwise
- operator has permission
- reason is recorded
- session is time-limited
- sensitive areas are masked by default
- all actions are audited
- high-risk actions are blocked or require customer confirmation

Impersonation must show a visible banner:

```text
You are viewing this organization as an internal Ariyo operator.
All actions are audited.
High-risk changes are restricted.
```

Forbidden impersonation patterns:

```text
silent impersonation
unlimited impersonation
impersonation without reason
impersonation without audit
support agents seeing secrets
internal users changing billing during impersonation without approval
internal users sending customer messages as the customer without disclosure
```

---

## 10. Advanced Level KPI System

This section defines advanced KPI requirements for the internal admin backoffice.

The goal is not to display more numbers.

The goal is to help Ariyo operators and leaders understand what is healthy, what is risky, what is growing, what is blocked, what needs intervention, and what action should happen next.

### 10.1 KPI Design Principles

Every advanced KPI must have:

- name
- definition
- owner
- source events
- calculation method
- refresh cadence
- segmentation
- healthy threshold
- warning threshold
- critical threshold
- drill-down path
- recommended action
- privacy classification
- plan relevance
- trend direction

### 10.2 KPI Levels

#### Level 1: Executive KPIs

High-level business health.

Used by founders, executives, and leadership.

#### Level 2: Operational KPIs

Team-level metrics for support, success, sales, finance, product, security, and engineering.

#### Level 3: Entity KPIs

Organization, user, AI employee, workflow, integration, marketplace asset, and provider-level diagnostics.

#### Level 4: Action KPIs

Metrics tied to a specific intervention or automation.

Example:

- reindex knowledge source
- pause AI employee
- retry workflow
- escalate ticket
- approve refund
- rotate provider
- request customer reauthorization

---

## 11. Advanced KPI Categories

### 11.1 Customer Health KPIs

Must include:

```text
customer_health_score
activation_score
adoption_score
time_to_first_value
active_ai_employees
deployed_ai_employees
successful_ai_outcomes
failed_ai_outcomes
human_review_completion_rate
knowledge_source_health
integration_health_score
workflow_success_rate
support_ticket_burden
customer_risk_score
expansion_readiness_score
renewal_confidence_score
```

Customer health score must combine:

- activation progress
- AI employee deployment
- usage quality
- outcome completion
- cost stability
- review reliability
- workflow health
- support load
- billing status
- lifecycle stage

### 11.2 AI Employee Operational KPIs

Must include:

```text
ai_employee_success_rate
ai_employee_failure_rate
ai_employee_task_volume
ai_employee_cost_per_outcome
ai_employee_average_latency
ai_employee_review_dependency_rate
ai_employee_tool_error_rate
ai_employee_policy_violation_rate
ai_employee_pause_rate
ai_employee_reactivation_rate
ai_employee_value_score
```

The AI employee value score must not be based only on messages.

It must include measurable business outcomes.

### 11.3 Workflow Reliability KPIs

Must include:

```text
workflow_execution_success_rate
workflow_retry_rate
workflow_failure_rate
workflow_average_duration
workflow_p95_duration
workflow_queue_delay
workflow_stuck_execution_count
workflow_idempotency_conflict_count
workflow_manual_intervention_rate
workflow_customer_visible_failure_rate
```

### 11.4 AI Cost KPIs

Must include:

```text
ai_cost_total
ai_cost_per_organization
ai_cost_per_ai_employee
ai_cost_per_workflow
ai_cost_per_successful_outcome
ai_cost_per_plan
ai_cost_margin_ratio
ai_budget_utilization
ai_cost_anomaly_count
smart_plan_high_cost_accounts
model_downgrade_events
cache_hit_rate
retrieval_cost_per_answer
```

Critical KPI:

```text
ai_cost_per_successful_outcome
```

This reveals whether AI spend creates real value.

### 11.5 Revenue KPIs

Must include:

```text
mrr
arr
new_mrr
expansion_mrr
contraction_mrr
churned_mrr
net_revenue_retention
gross_revenue_retention
average_revenue_per_account
trial_to_paid_conversion
basic_to_pro_upgrade_rate
pro_to_smart_upgrade_rate
smart_plan_retention_rate
refund_rate
payment_failure_rate
```

### 11.6 Sales & Pipeline KPIs

Must include:

```text
lead_to_demo_rate
demo_to_pilot_rate
pilot_to_paid_rate
sales_cycle_length
pipeline_value
weighted_pipeline_value
deal_health_score
win_rate
loss_reason_distribution
pricing_objection_rate
trust_objection_rate
security_review_block_rate
```

### 11.7 Support KPIs

Must include:

```text
first_response_time
resolution_time
support_ticket_volume
support_ticket_rate_per_customer
support_deflection_rate
ai_support_resolution_rate
escalation_rate
reopened_ticket_rate
support_csat
support_cost_per_account
known_issue_ticket_share
```

### 11.8 Trust & Security KPIs

Must include:

```text
security_alert_count
critical_security_alert_count
suspicious_login_rate
api_abuse_rate
blocked_action_count
tenant_boundary_violation_attempts
secrets_exposure_incidents
integration_token_risk_count
high_risk_impersonation_sessions
policy_enforcement_count
mean_time_to_detect
mean_time_to_respond
mean_time_to_resolve
```

### 11.9 Reliability KPIs

Must include:

```text
system_uptime
api_availability
ai_provider_availability
workflow_availability
integration_availability
incident_count
severity_1_incidents
severity_2_incidents
mttr
rto_compliance
rpo_compliance
degraded_mode_duration
status_page_update_latency
```

### 11.10 Product Activation KPIs

Must include:

```text
signup_to_workspace_created
workspace_to_first_ai_employee_hired
first_ai_employee_to_first_value
knowledge_connected_rate
channel_connected_rate
review_mode_configured_rate
activation_completion_rate
onboarding_dropoff_rate
recommended_next_action_completion_rate
```

### 11.11 Marketplace KPIs

Must include:

```text
marketplace_asset_count
approved_asset_count
rejected_asset_count
install_rate
paid_install_rate
asset_refund_rate
creator_payout_volume
marketplace_gmv
platform_take_rate
asset_quality_score
creator_quality_score
marketplace_trust_incident_count
```

### 11.12 GEO/API Growth KPIs

Must include:

```text
geo_api_usage
geo_visibility_checks
geo_optimization_jobs
geo_visibility_improvement_rate
geo_query_monitoring_count
geo_competitor_displacement_count
geo_alert_open_rate
geo_api_conversion_to_paid
smart_geo_feature_adoption
```

### 11.13 Finance & Accounting KPIs

Must include:

```text
invoice_error_rate
refund_approval_time
reconciliation_gap_count
unreconciled_payment_amount
failed_payout_count
commission_pending_amount
tax_data_completeness
accounting_export_success_rate
cash_collected
cash_at_risk
```

---

## 12. Advanced KPI Health Scoring

Ariyo should use composite scoring for complex operational states.

### 12.1 Customer Health Score Formula Inputs

Customer health score should include:

```text
activation_progress
ai_employee_outcome_success
workflow_reliability
knowledge_health
integration_health
support_burden
billing_status
cost_stability
usage_trend
review_completion
security_risk
expansion_signal
```

Score range:

```text
0-39 = critical
40-59 = at risk
60-79 = stable
80-100 = healthy
```

### 12.2 Deal Health Score Inputs

```text
buyer_pain_clarity
demo_completed
pilot_defined
security_review_status
budget_confirmed
decision_timeline
executive_sponsor
plan_fit
trust_objections
next_step_scheduled
```

### 12.3 AI Employee Value Score Inputs

```text
successful_outcomes
manual_work_reduced
review_pass_rate
cost_per_outcome
latency
customer_feedback
repeated_use
workflow_dependency
safety_events
```

### 12.4 Marketplace Asset Quality Score Inputs

```text
install_success_rate
configuration_success_rate
refund_rate
support_ticket_rate
customer_rating
security_review_status
creator_response_time
policy_violation_count
business_outcome_evidence
```

---

## 13. KPI Dashboard Requirements

### 13.1 Executive Overview

Must show:

- MRR / ARR
- NRR / GRR
- activation rate
- AI employee value delivered
- customer health distribution
- churn risk
- expansion readiness
- AI cost margin
- incident health
- security risk
- top operational risks
- top revenue opportunities

### 13.2 Support Command View

Must show:

- ticket queues
- high-risk tickets
- SLA breaches
- known issue clusters
- AI support deflection
- customer health context
- escalation paths

### 13.3 Customer Success View

Must show:

- customer health
- lifecycle stage
- adoption gaps
- expansion signals
- renewal risk
- playbook recommendations

### 13.4 Finance View

Must show:

- invoice issues
- failed payments
- refund queue
- reconciliation gaps
- payout queue
- revenue metrics
- AI cost margin

### 13.5 Security & Trust View

Must show:

- critical alerts
- suspicious sessions
- high-risk impersonation
- policy enforcement cases
- integration risk
- unresolved incidents

### 13.6 Product Operations View

Must show:

- feature adoption
- experiment status
- activation funnel
- product friction
- release impact
- bug clusters
- usage by plan

### 13.7 Marketplace Operations View

Must show:

- pending reviews
- asset performance
- creator quality
- payout issues
- fraud signals
- marketplace growth

---

## 14. KPI Event Sources

Advanced KPI calculations must be based on approved events from:

- product analytics
- billing system
- payment provider
- AI execution logs
- workflow execution logs
- integration sync logs
- support tickets
- customer success playbooks
- sales CRM
- lifecycle automation
- security events
- reliability incidents
- marketplace events
- finance reconciliation
- legal consent logs
- feature flag exposure

KPI systems must not rely on manual spreadsheet edits.

---

## 15. KPI Drill-Down Rules

Every KPI should support drill-down.

Example:

```text
High AI cost
  -> affected organizations
  -> affected AI employees
  -> affected workflows
  -> model/provider usage
  -> cache hit rate
  -> failed/retried executions
  -> recommended action
```

Example:

```text
Customer health declining
  -> lifecycle stage
  -> failed activation steps
  -> support tickets
  -> usage trend
  -> AI outcome quality
  -> billing risk
  -> next best action
```

---

## 16. Backoffice Action Framework

Every action must define:

- action name
- allowed roles
- required permission
- required reason
- customer visibility
- approval requirement
- reversibility
- audit event
- notification requirement
- risk level

### 16.1 Low-Risk Actions

Examples:

- resend invitation
- trigger customer-safe diagnostic
- request reauthorization from customer
- add internal note
- mark ticket category

### 16.2 Medium-Risk Actions

Examples:

- retry failed workflow
- trigger knowledge reindex
- apply small billing credit
- pause non-critical automation
- update support contact

### 16.3 High-Risk Actions

Examples:

- impersonate user
- change plan entitlements
- issue refund
- suspend organization
- pause AI employee
- restore organization
- apply feature flag override
- approve marketplace asset

High-risk actions require:

- step-up authentication
- reason
- approval or policy validation
- audit
- customer notification when appropriate

### 16.4 Critical Actions

Examples:

- delete organization data
- export customer data
- rotate security keys
- disable integration globally
- apply global kill switch
- manually change financial reconciliation state

Critical actions require multi-person approval.

---

## 17. Backoffice AI Assistant Rules

Ariyo may include an internal AI assistant for operators.

The assistant may:

- summarize account health
- explain incidents
- suggest next actions
- draft customer-safe replies
- summarize tickets
- detect anomalies
- recommend playbooks
- explain KPI movement

The assistant must not:

- take privileged action without explicit approval
- reveal sensitive data beyond operator permission
- invent operational state
- override policy
- modify billing
- change entitlements
- impersonate users
- access secrets
- execute security actions without human authorization

All AI assistant recommendations must be grounded in approved backoffice data.

---

## 18. Internal Admin API Requirements

### 18.1 Organization Summary

```http
GET /internal/admin/organizations/{organization_id}/summary
```

Returns safe operational summary.

### 18.2 Organization KPI Snapshot

```http
GET /internal/admin/organizations/{organization_id}/kpis
```

Returns customer health, AI value, cost, revenue, support, reliability, and risk KPIs.

### 18.3 Advanced KPI Catalog

```http
GET /internal/admin/kpis/catalog
```

Returns definitions, owners, thresholds, and data sources.

### 18.4 KPI Drilldown

```http
GET /internal/admin/kpis/{kpi_key}/drilldown
```

Query parameters:

```text
organization_id
plan
time_range
segment
severity
```

### 18.5 Backoffice Action Request

```http
POST /internal/admin/actions
```

Request:

```json
{
  "action_key": "workflow.retry",
  "target_type": "workflow_execution",
  "target_id": "wex_123",
  "organization_id": "org_123",
  "reason": "Customer-reported workflow failure after integration outage.",
  "requested_by": "usr_internal_123"
}
```

### 18.6 Impersonation Session

```http
POST /internal/admin/impersonation/sessions
```

Must require elevated permission and reason.

### 18.7 Feature Flag Override

```http
POST /internal/admin/feature-flags/{flag_key}/overrides
```

Must require owner or approval.

---

## 19. Backoffice UI Requirements

### 19.1 Visual Hierarchy

Backoffice UI must prioritize:

1. risk
2. customer impact
3. revenue impact
4. operational urgency
5. allowed next actions

### 19.2 Context Panels

Every entity page should include:

- summary
- health
- risk
- plan
- lifecycle
- recent events
- available actions
- audit history
- notes

### 19.3 Sensitive Data Masking

Sensitive fields must be masked by default.

Examples:

- email can be visible when needed
- tokens are never visible
- payment details are masked
- customer content is hidden unless permitted
- AI conversations are summarized unless purpose-bound access is granted

### 19.4 Warning States

High-risk states must be visually explicit.

Examples:

- suspended organization
- failed payment
- security alert
- AI employee paused
- Smart plan cost anomaly
- integration degraded
- customer at renewal risk

### 19.5 Action Confirmation

High-risk actions need confirmation with consequences.

Example:

```text
Pausing this AI employee may stop customer workflows that depend on it.
This action will be audited and visible to authorized internal operators.
```

---

## 20. Plan-Aware Backoffice Rules

Backoffice must understand Basic, Pro, and Smart.

### 20.1 Basic Accounts

Common support areas:

- onboarding issues
- plan limits
- upgrade education
- basic AI employee setup
- billing questions

### 20.2 Pro Accounts

Common support areas:

- workflow reliability
- integrations
- team permissions
- cost controls
- activation and adoption
- business value reporting

### 20.3 Smart Accounts

Common support areas:

- advanced automation
- high AI cost control
- GEO API visibility
- deeper RAG usage
- Smart feature adoption
- enterprise-like governance
- advanced KPI review

Smart accounts must receive advanced cost, reliability, and value monitoring.

---

## 21. Security Requirements

Backoffice must enforce:

- SSO/MFA for internal users
- role-based access control
- least privilege
- step-up authentication
- IP/device/session risk checks
- audit logging
- sensitive data masking
- approval workflows
- session expiration
- action rate limits
- anomaly detection
- separation of duties
- break-glass controls

Break-glass access must be:

- rare
- time-limited
- approved
- heavily audited
- reviewed after use

---

## 22. Privacy Requirements

Backoffice must follow privacy-by-design.

Internal users must not browse customer data out of curiosity.

Sensitive data access must have:

- reason
- permission
- audit
- minimal exposure
- retention controls
- masking where possible

Backoffice analytics must avoid exposing:

- raw customer documents
- raw secrets
- full payment data
- sensitive AI conversation content
- unnecessary personal data

---

## 23. Audit Requirements

Audit logs must be immutable.

Audit records must support:

- internal review
- customer trust inquiries
- security incident analysis
- legal requests
- enterprise audit exports
- compliance evidence

Audit log categories:

```text
admin_login
admin_view_sensitive_data
admin_action_requested
admin_action_approved
admin_action_executed
admin_action_failed
impersonation_started
impersonation_stopped
billing_changed
entitlement_changed
feature_flag_changed
organization_suspended
organization_restored
ai_employee_paused
workflow_retried
security_action_taken
marketplace_asset_moderated
```

---

## 24. Observability Requirements

Backoffice itself must be observable.

Track:

- admin usage
- failed admin actions
- high-risk actions
- impersonation sessions
- support efficiency
- KPI refresh failures
- permission denials
- suspicious internal behavior
- sensitive data views
- backoffice latency
- API errors

---

## 25. Testing Requirements

Must test:

- role permissions
- forbidden access
- sensitive data masking
- audit events
- impersonation restrictions
- approval workflows
- feature flag changes
- billing action restrictions
- refund flow
- suspension/restore flow
- KPI calculation accuracy
- KPI threshold alerts
- drilldown correctness
- AI assistant permission boundaries
- backoffice API security
- customer data privacy

---

## 26. Internal Admin Definition of Done

A backoffice feature is done only when:

- permission is defined
- risk level is defined
- audit event exists
- sensitive fields are masked
- action confirmation exists when needed
- error states are safe
- tests exist
- analytics events exist
- documentation exists
- rollback path exists for dangerous actions
- customer impact is understood

---

## 27. Forbidden Patterns

Never allow:

```text
unrestricted super admin
silent customer impersonation
viewing customer secrets
showing raw provider tokens
manual billing changes without audit
manual entitlement changes without approval
feature flags without owner or expiry
customer data browsing without reason
support agents changing security settings casually
internal AI assistant taking privileged actions automatically
KPI dashboards without definitions
metrics without data sources
metrics that cannot be drilled into
customer health scores based only on usage volume
AI success metrics based only on message count
sensitive action without audit trail
refunds without reconciliation
organization suspension without reason
manual database edits as backoffice workflow
```

---

## 28. Golden Rule

The internal admin backoffice must make Ariyo safer, faster, more trustworthy, and more operationally intelligent.

It must never become an uncontrolled shortcut around product, security, privacy, finance, or customer trust.

---

## 29. Final Rule

When building any Ariyo internal admin feature, ask:

```text
Who is allowed to see this?
Who is allowed to do this?
Why are they doing it?
What customer or business risk exists?
What KPI does this improve?
What audit evidence will exist later?
Can this action be safely reversed?
```

If these questions are not answered, the feature is not ready.
