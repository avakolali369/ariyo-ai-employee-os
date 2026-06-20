# Ariyo Product Analytics & Growth Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Senior Product Analytics Lead, Growth Architect, Revenue Strategist, Experimentation Lead, and AI Product Measurement Guardian for Ariyo.

Audience:  
Codex Agents, AI-assisted development tools, product engineers, growth engineers, product managers, analytics engineers, and founders building Ariyo.

Priority:  
Non-negotiable.

Dependencies:

- product-strategy.md
- ai-employee-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- backend-architecture.md
- frontend-design.md
- frontend-copywriting.md
- frontend-state-data.md
- frontend-testing.md
- frontend-performance.md
- coding-standards.md

If conflicts exist:

- product-strategy.md wins for product positioning, customer, market, and value logic.
- ai-employee-architecture.md wins for AI employee lifecycle and role-based behavior.
- knowledge-rag.md wins for knowledge quality, retrieval, citations, and freshness.
- workflow-automation.md wins for automation execution lifecycle.
- ai-safety-evaluation.md wins for safety, risk, evaluation, and release gates.
- backend-architecture.md wins for backend ownership, event durability, data integrity, and system architecture.
- frontend-copywriting.md wins for user-facing analytics copy.
- product-analytics-growth.md wins for metrics, funnels, instrumentation, growth loops, experimentation, monetization analysis, and decision-making behavior.

Analytics that are easy to track but do not improve decisions are not acceptable.

Growth that increases usage while reducing trust is not acceptable.

Ariyo must measure product truth, not vanity activity.

---

# Purpose

This skill defines how Ariyo must measure product value, customer activation, AI employee performance, knowledge quality, automation success, revenue growth, retention, expansion, and trust.

Ariyo analytics must help teams answer:

```text
Are users reaching value quickly?

Are organizations successfully deploying AI employees?

Are AI employees completing useful work?

Are users trusting the output?

Are knowledge sources improving answer quality?

Are workflows saving time safely?

Are costs controlled?

Are customers retaining, expanding, and inviting teammates?

Which product changes improve business outcomes?
```

Ariyo analytics must not become a pile of disconnected events.

Ariyo growth must not become dark patterns, spam, fake urgency, misleading ROI, or unsafe automation expansion.

---

# Core Analytics Principle

Ariyo analytics must measure the journey from setup to trusted business outcome.

The most important unit is not a click.

The most important unit is a verified AI employee outcome.

Ariyo should measure:

```text
setup progress

knowledge readiness

employee deployment

workflow execution

human review

successful task completion

AI cost efficiency

trust and safety outcomes

retention and expansion
```

Do not optimize for raw usage if usage does not produce trusted value.

---

# Core Growth Principle

Ariyo growth must come from demonstrated operational value.

Ariyo should grow because customers see:

```text
faster response time

less repetitive work

higher operational coverage

better knowledge consistency

safer automation

clear ROI

measurable employee performance

controlled AI cost
```

Growth must be evidence-based.

Do not create artificial urgency, fake scarcity, misleading AI claims, or unclear pricing pressure.

---

# Product Measurement Mission

Ariyo must make the value of AI employees visible and measurable.

The product should help users understand:

```text
what employees are active

what work they completed

what needed review

what failed

what was escalated

what knowledge was used

what cost was incurred

what business value was created

what should be improved next
```

If users cannot see whether Ariyo is working, they will not trust it.

---

# North Star Metric

Ariyo's North Star Metric should represent trusted AI employee value.

Recommended North Star:

```text
Weekly Verified AI Employee Outcomes
```

Definition:

```text
The number of AI employee tasks completed in a week that meet success criteria, respect permissions and safety gates, and are either approved by humans or successfully completed under an allowed automation policy.
```

This metric is better than:

```text
messages generated

prompts sent

employees created

sessions started

logins

API calls
```

because it measures useful work, not raw activity.

---

# Supporting North Star Metrics

Track supporting metrics to explain the North Star.

```text
Activated organizations

Employees deployed per organization

Weekly active employees

Successful workflow executions

Human approval rate

Escalation rate

Knowledge-backed answer rate

Citation coverage rate

AI cost per verified outcome

Time saved estimate

Retention by activated organizations
```

These metrics explain whether value is growing safely and efficiently.

---

# Activation Definition

Ariyo activation must be tied to meaningful product value.

An organization is not activated just because it signed up.

Recommended activation definition:

```text
An organization is activated when it hires an AI employee, connects at least one relevant knowledge source or business context, deploys the employee to a channel or workflow, and receives at least one successful AI employee outcome.
```

A lighter early activation milestone may be:

```text
Employee hired + setup completed + ready to deploy
```

But the stronger activation milestone must involve real outcome.

---

# First Time To Value

Ariyo's product strategy requires First Time To Value under 5 minutes.

Measure:

```text
time from signup to first employee hired

time from signup to first setup completed

time from signup to first source connected

time from signup to first ready-to-deploy state

time from signup to first deployment

time from signup to first verified outcome
```

Do not only measure account creation.

Measure where users become blocked.

---

# Activation Funnel

The primary activation funnel should be:

```text
1. User signs up
2. Organization/workspace created
3. User selects business goal or employee category
4. User hires AI employee
5. User provides business context
6. User connects knowledge source or skips with clear reason
7. User chooses channel/workflow
8. Setup readiness completed
9. Employee deployed or review mode enabled
10. First task executed
11. First task approved or completed
12. First verified outcome recorded
```

Each step must have:

```text
event

timestamp

organization scope

user role

source surface

failure reason when blocked

recovery path when applicable
```

---

# Activation Drop-Off Analysis

For each activation step, measure:

```text
conversion rate

median time to next step

p90 time to next step

error rate

abandonment rate

permission denial rate

mobile completion rate

source/channel by segment

recovery rate after error
```

Do not treat all drop-offs equally.

A user who drops because of missing permissions has a different problem than a user confused by copy.

---

# Activation Blocker Taxonomy

Use consistent blocker reasons.

```text
missing_permission

missing_business_context

missing_knowledge_source

missing_channel

source_sync_failed

integration_failed

validation_error

billing_limit

unsupported_use_case

user_abandoned

technical_error

safety_blocked

needs_human_review
```

Blocker reasons must be specific enough to drive product decisions.

---

# AI Employee Success Metrics

Each AI employee should have a measurable success profile.

Track:

```text
employee_hired_count

employee_setup_completed_rate

employee_deployed_rate

weekly_active_employee_rate

tasks_assigned

tasks_completed

tasks_failed

tasks_escalated

tasks_reviewed

tasks_approved

tasks_rejected

average_review_time

average_response_time

knowledge_backed_rate

citation_coverage_rate

policy_block_rate

fallback_rate

human_edit_rate

estimated_time_saved

ai_cost_per_task

ai_cost_per_verified_outcome
```

Do not measure AI employee success only by number of generated responses.

---

# AI Employee Lifecycle Metrics

Measure each lifecycle state.

```text
marketplace_viewed

employee_hired

employee_config_started

employee_config_completed

employee_ready_to_deploy

employee_deploy_started

employee_deploy_failed

employee_active

employee_paused

employee_needs_review

employee_archived
```

Every lifecycle transition should have:

```text
previous_state

next_state

actor_type

actor_id when safe

reason

source

organization_id

employee_id

timestamp
```

Lifecycle events are business-critical.

---

# Knowledge Source Metrics

Knowledge is a core driver of AI employee quality.

Track:

```text
knowledge_source_connected

knowledge_source_sync_started

knowledge_source_sync_completed

knowledge_source_sync_failed

knowledge_source_ready

knowledge_source_outdated

knowledge_source_removed

retrieval_success_rate

retrieval_empty_rate

retrieval_low_confidence_rate

citation_coverage_rate

answer_grounded_rate

source_freshness_age

source_usage_by_employee

source_usage_by_workflow
```

Do not optimize for number of connected sources alone.

Optimize for useful, fresh, permission-safe knowledge usage.

---

# Retrieval Quality Metrics

For RAG and knowledge retrieval, track:

```text
retrieval_attempted

retrieval_result_count

retrieval_top_score

retrieval_confidence_band

retrieval_empty

retrieval_permission_filtered_count

retrieval_source_freshness

retrieval_cited_in_answer

retrieval_used_by_model

retrieval_rejected_by_safety_gate
```

Avoid logging raw confidential content.

Measure metadata and quality signals.

---

# Hallucination and Grounding Metrics

Track signals related to answer quality.

```text
unsupported_answer_blocked

low_confidence_escalated

citation_missing_blocked

answer_rejected_by_reviewer

answer_edited_by_reviewer

answer_reported_by_user

answer_marked_inaccurate

answer_marked_helpful

source_not_found_fallback
```

These metrics must feed evaluation and product improvement.

Do not hide quality failures.

---

# Workflow Automation Metrics

Workflow metrics must measure safe execution, not just automation volume.

Track:

```text
workflow_created

workflow_draft_saved

workflow_published

workflow_paused

workflow_triggered

workflow_execution_started

workflow_execution_completed

workflow_execution_failed

workflow_execution_blocked

workflow_execution_escalated

workflow_execution_retried

workflow_step_completed

workflow_step_failed

workflow_human_approval_requested

workflow_human_approved

workflow_human_rejected
```

Automation value must be measured with safety outcomes.

---

# Workflow Success Metrics

For workflows, track:

```text
completion_rate

failure_rate

blocked_rate

escalation_rate

approval_rate

average_execution_time

average_review_time

retry_success_rate

idempotency_conflict_rate

manual_override_rate

estimated_time_saved

ai_cost_per_execution
```

Do not call a workflow successful if it completed unsafely, without required review, or with missing knowledge.

---

# Human Review Metrics

Human review is a trust feature.

Track:

```text
review_required_count

review_requested_count

review_approved_count

review_rejected_count

review_edited_count

review_timeout_count

average_review_time

reviewer_role

review_reason

risk_level

confidence_band
```

Review metrics help decide when an AI employee may earn more autonomy.

---

# Autonomy Upgrade Metrics

AI employee autonomy must be earned.

Before increasing autonomy, analyze:

```text
approval rate

rejection rate

human edit rate

escalation rate

safety block rate

knowledge grounded rate

policy violation rate

user trust signals

cost per outcome

recent incident count
```

Do not increase autonomy based only on usage volume.

---

# Trust Metrics

Ariyo must measure trust explicitly.

Track:

```text
answer_approved

answer_rejected

answer_edited

answer_reported

employee_paused_by_user

automation_disabled_by_user

source_removed_after_bad_answer

permission_denied_events

safety_block_events

manual_override_events

support_contact_after_failure

billing_dispute_signal
```

Trust is a product metric.

Not just a support issue.

---

# Safety Metrics

Safety metrics must be first-class.

Track:

```text
policy_block_rate

unsafe_tool_call_blocked

prompt_injection_detected

retrieval_injection_detected

permission_violation_blocked

unknown_status_safe_fallback

high_risk_action_review_required

high_risk_action_blocked

raw_error_hidden

server_confirmation_waited
```

Safety metrics should appear in internal dashboards.

Do not hide them because they look negative.

---

# AI Cost Metrics

AI cost must be measurable and explainable.

Track:

```text
ai_cost_total

ai_cost_by_employee

ai_cost_by_workflow

ai_cost_by_organization

ai_cost_by_model

ai_cost_by_channel

ai_cost_per_task

ai_cost_per_verified_outcome

ai_cost_per_approved_answer

ai_cost_per_escalation

ai_cost_per_failed_task

token_usage_input

token_usage_output

retrieval_cost

embedding_cost

reranking_cost

background_job_cost
```

Do not show cost without context.

Users need to understand value per cost.

---

# Value Metrics

Track product value, not only usage.

Potential value metrics:

```text
estimated_time_saved

manual_tasks_avoided

average_response_time_reduced

review_queue_reduced

knowledge_answer_consistency

workflow_completion_improvement

support_volume_deflected

customer_response_coverage

team_adoption_rate
```

If a value metric is estimated, label it as estimated.

Do not overclaim ROI.

---

# Revenue Metrics

Ariyo monetization analysis should track:

```text
trial_started

trial_activated

trial_to_paid_conversion

subscription_created

subscription_upgraded

subscription_downgraded

subscription_cancelled

payment_failed

invoice_paid

invoice_failed

monthly_recurring_revenue

annual_recurring_revenue

average_revenue_per_account

net revenue retention

gross revenue retention

expansion revenue

contraction revenue

churned revenue
```

Revenue metrics must be reconciled with billing provider/server truth.

Do not derive billing truth from frontend events.

---

# Usage-Based Monetization Metrics

If Ariyo prices by usage, track:

```text
included_employee_limit_used

included_task_limit_used

included_ai_cost_limit_used

overage_warning_shown

overage_limit_reached

upgrade_prompt_viewed

upgrade_prompt_clicked

usage_reset_date

limit_blocked_action

limit_soft_warning
```

Usage limits must be transparent.

Do not surprise users with hidden usage costs.

---

# Expansion Metrics

Expansion should be driven by demonstrated value.

Track expansion signals:

```text
second_employee_hired

third_employee_hired

new_channel_connected

new_workflow_published

additional_team_member_invited

knowledge_sources_expanded

plan_limit_reached

high_usage_account

high_verified_outcome_count

admin_viewed_roi_report

billing_upgrade_clicked
```

Expansion prompts should be contextual and honest.

---

# Retention Metrics

Track organization retention, not just user retention.

Recommended cohorts:

```text
organizations activated in week N

organizations with first employee deployed

organizations with first verified outcome

organizations with at least one weekly active employee

organizations with two or more deployed employees

organizations with knowledge-backed outcomes

organizations with workflow automation enabled
```

Measure:

```text
week 1 retention

week 4 retention

week 8 retention

week 12 retention

monthly active organization rate

weekly active employee rate

workflow recurrence rate
```

Retention should be tied to operational value.

---

# Engagement Metrics

Engagement should measure meaningful product interaction.

Good engagement metrics:

```text
employee performance viewed

workflow execution reviewed

knowledge source updated

answer approved

answer edited

workflow improved

team member invited

ROI report viewed

AI cost reviewed
```

Weak engagement metrics:

```text
page views only

random clicks

sessions only

hover events

scroll depth in app UI
```

Track weak metrics only when tied to a specific decision.

---

# Marketplace Metrics

The employee marketplace is a conversion surface.

Track:

```text
marketplace_viewed

employee_category_viewed

employee_card_viewed

employee_profile_viewed

employee_hire_clicked

employee_hired

employee_hire_failed

marketplace_search_used

marketplace_filter_used

filtered_empty_seen

recommended_employee_clicked
```

Measure:

```text
category conversion

card-to-profile conversion

profile-to-hire conversion

hire-to-deploy conversion

recommended employee performance
```

Do not optimize marketplace for hype clicks.

Optimize for successful deployment and retention.

---

# Team Adoption Metrics

Ariyo should become a team operating system, not a single-user toy.

Track:

```text
member_invited

member_joined

member_role_changed

member_assigned_review

review_completed_by_member

employee_shared_with_team

workflow_shared_with_team

admin_created

viewer_created
```

Measure:

```text
invitation conversion

multi-member activation rate

review participation rate

admin adoption

team retention uplift
```

Team adoption can be a growth loop.

---

# Growth Loops

Ariyo growth should come from loops that create real value.

## Employee Deployment Loop

```text
Hire employee
→ complete setup
→ deploy safely
→ see verified outcome
→ hire another employee
```

## Knowledge Quality Loop

```text
Connect source
→ employee answers better
→ user sees source usage
→ user adds more sources
→ answer quality improves
```

## Workflow Automation Loop

```text
Manual repetitive task found
→ workflow created
→ executions reviewed
→ workflow trusted
→ more workflows published
```

## Team Review Loop

```text
AI employee needs review
→ teammate invited
→ review completed
→ trust increases
→ more automation enabled
```

## ROI Reporting Loop

```text
AI employee completes work
→ ROI/cost visible
→ admin sees value
→ upgrade/expand justified
```

Growth loops must be safe, measurable, and transparent.

---

# Growth Guardrails

Ariyo must not grow by harming user trust.

Forbidden growth tactics:

```text
fake urgency

fake scarcity

misleading AI claims

hidden AI costs

dark-pattern upgrades

unclear cancellation

automatic deployment without consent

unreviewed high-risk automation

spam invitations

misleading ROI estimates

hiding safety failures

celebrating unsafe volume
```

Growth must be aligned with trust.

---

# Instrumentation Principle

Instrumentation must be designed before or during feature development.

Do not add analytics randomly after the feature is built.

Every major feature should define:

```text
success metric

activation step

failure reasons

events

properties

privacy constraints

owner

expected dashboard

decision it supports
```

Events without decisions become noise.

---

# Event Naming Rule

Use consistent snake_case event names.

Preferred pattern:

```text
object_action
```

or:

```text
object_state_changed
```

Examples:

```text
employee_hired

employee_setup_completed

employee_deployment_started

employee_deployment_failed

knowledge_source_connected

knowledge_source_sync_completed

workflow_published

workflow_execution_completed

answer_approved

answer_rejected

billing_upgrade_clicked

ai_cost_report_viewed
```

Avoid vague names:

```text
clicked

submitted

opened

used_ai

sent_prompt

success

failed
```

Event names must communicate product meaning.

---

# Event Property Rule

Events should include useful, safe properties.

Common safe properties:

```text
event_id

timestamp

organization_id

workspace_id

user_id when allowed

user_role

plan_id

source_surface

employee_id

employee_type

workflow_id

knowledge_source_type

channel_type

risk_level

review_mode

confidence_band

result_state

failure_reason

latency_ms

ai_cost_estimate
```

Do not include raw confidential content.

---

# Sensitive Data Analytics Rule

Never send sensitive data to analytics.

Forbidden analytics properties:

```text
auth tokens

API keys

raw customer messages

raw knowledge source content

full documents

payment card data

integration secrets

raw prompt text

raw model response text

private file contents

backend stack traces

personal data unless explicitly approved
```

Use safe metadata and IDs.

---

# Client vs Server Event Rule

Use the correct source of truth.

Client events are useful for:

```text
views

clicks

form start

navigation

filter usage

empty state exposure

upgrade prompt exposure
```

Server events are required for:

```text
billing truth

employee deployed

workflow executed

knowledge sync completed

answer sent

human approval persisted

permission change

integration connected

AI cost recorded
```

Do not rely on frontend events for backend truth.

---

# Event Idempotency Rule

Critical events must avoid duplication.

Use stable identifiers for:

```text
workflow execution event

employee lifecycle transition

billing event

knowledge sync event

AI task completion

human review decision
```

Duplicate analytics can corrupt product decisions.

---

# Event Timing Rule

Track event timing precisely enough to measure funnels.

Important timestamps:

```text
created_at

started_at

completed_at

failed_at

review_requested_at

review_completed_at

synced_at

deployed_at

first_value_at
```

Do not infer time-to-value from unrelated events.

---

# Failure Reason Rule

Every failed critical operation should produce a structured failure reason.

Examples:

```text
validation_failed

permission_denied

billing_limit_reached

source_sync_failed

integration_auth_failed

model_output_blocked

low_confidence

missing_knowledge

tool_call_failed

network_error

server_error

unknown_error
```

Failure reasons must be typed and consistent.

---

# Analytics Schema Ownership

Analytics schemas should be owned and versioned.

Each event should define:

```text
event name

when it fires

source of truth

required properties

optional properties

privacy notes

example payload

owner

dashboard usage
```

Do not let event schemas emerge accidentally.

---

# Analytics Data Quality Rule

Analytics data must be trustworthy.

Monitor:

```text
missing required properties

duplicate events

unexpected event volume

event drop rate

client/server mismatch

unknown enum values

schema version drift

timezone issues

organization scope missing
```

Bad analytics creates bad product decisions.

---

# Segmentation Rule

Segment metrics by meaningful dimensions.

Useful segments:

```text
organization size

plan

industry

employee type

channel type

knowledge source type

review mode

autonomy level

user role

first employee category

activation cohort

source of signup

region/language when relevant
```

Do not segment by sensitive personal attributes unless explicitly approved and legally appropriate.

---

# Cohort Rule

Use cohorts for retention and activation analysis.

Recommended cohorts:

```text
signup week

first employee hired week

first deployment week

first verified outcome week

first workflow published week

first billing conversion month
```

Activation-based cohorts are often more meaningful than signup cohorts.

---

# Dashboard Architecture

Ariyo should have internal dashboards for:

```text
executive overview

activation funnel

AI employee performance

knowledge quality

workflow automation

safety and evaluation

AI cost efficiency

revenue and monetization

retention and expansion

experiment results
```

Dashboards must answer decisions, not just display charts.

---

# Executive Dashboard

Executive dashboard should show:

```text
activated organizations

weekly verified AI employee outcomes

weekly active employees

retention by activated cohort

MRR/ARR if monetized

AI cost margin

safety block rate

customer expansion signals

top activation blockers

major incidents
```

Keep it concise.

Leadership dashboards should not drown in operational detail.

---

# Activation Dashboard

Activation dashboard should show:

```text
signup to first value funnel

step conversion

median time per step

p90 time per step

blocker reasons

source/channel completion rate

mobile vs desktop completion

role-based permission blockers

first employee category performance
```

Activation dashboard must help improve onboarding.

---

# AI Employee Dashboard

AI employee dashboard should show:

```text
employees hired

employees deployed

weekly active employees

verified outcomes

tasks completed

tasks failed

review approval rate

escalation rate

AI cost per outcome

knowledge-backed rate

best and worst performing employee categories
```

This dashboard should connect product value to employee architecture.

---

# Knowledge Dashboard

Knowledge dashboard should show:

```text
sources connected

sources ready

sync failure rate

retrieval success rate

retrieval empty rate

citation coverage

stale source count

source usage by employee

source usage by workflow

knowledge-related answer rejection rate
```

Knowledge quality is a product growth lever.

---

# Workflow Dashboard

Workflow dashboard should show:

```text
workflows created

workflows published

workflow executions

execution success rate

execution failure rate

approval rate

blocked execution rate

average execution time

estimated time saved

cost per execution
```

Automation metrics must include safety and review outcomes.

---

# Safety Dashboard

Safety dashboard should show:

```text
policy blocks

prompt injection detections

unsafe tool calls blocked

low confidence escalations

review rejection rate

answer report rate

incident count

rollback count

employee autonomy changes

quality gate failures
```

Safety must be visible to product and engineering leadership.

---

# Revenue Dashboard

Revenue dashboard should show:

```text
trial starts

activated trials

trial to paid conversion

MRR

ARR

ARPA

expansion revenue

contraction revenue

churned revenue

AI cost margin

plan limit conversion

upgrade funnel
```

Revenue analysis must connect to product value and AI cost.

---

# Experimentation Principle

Experiments must test product hypotheses, not random UI preferences.

Good hypothesis:

```text
If we recommend the first AI employee based on business goal, more organizations will reach ready-to-deploy within 5 minutes without increasing deployment failure rate.
```

Bad hypothesis:

```text
Maybe blue button converts better.
```

Ariyo experiments must include safety guardrails.

---

# Experiment Design Rule

Every experiment must define:

```text
hypothesis

primary metric

guardrail metrics

segment

eligibility

start condition

stop condition

success criteria

failure criteria

rollback plan

owner
```

Do not run experiments that cannot be interpreted.

---

# Experiment Guardrail Metrics

Common guardrails:

```text
deployment failure rate

review rejection rate

policy block rate

AI cost per outcome

support contact rate

billing cancellation signal

activation quality

retention after activation

error rate

latency
```

A conversion gain is not success if trust decreases.

---

# Experiment Release Rule

Do not roll out an experiment globally if:

```text
critical errors increased

high-risk unsafe actions increased

AI cost became inefficient

review rejection increased materially

retention decreased

billing confusion increased

support complaints increased

safety incidents occurred
```

Growth must respect product trust.

---

# In-Product Analytics UI Rule

User-facing analytics must be clear and honest.

Ariyo should show users:

```text
employee performance

completed tasks

review queue

AI cost

time saved estimates

workflow outcomes

knowledge source usage

failure and escalation history
```

Do not hide failures from customers.

Failures are opportunities for trust and improvement.

---

# User-Facing Metric Copy Rule

Analytics copy must be calm and precise.

Good:

```text
This employee completed 42 tasks this week.

12 responses needed review.

AI cost is estimated for the selected period.

Not enough data to show a trend yet.
```

Bad:

```text
Massive productivity unlocked!

Your AI crushed it!

Infinite ROI!

99% autonomous!
```

Do not overclaim.

---

# ROI Reporting Rule

ROI reports must distinguish measured, estimated, and unavailable values.

Use labels:

```text
Measured

Estimated

Not enough data

Unavailable
```

Do not present estimated time saved as exact truth.

Do not fabricate cost savings.

---

# AI Cost Reporting Rule

AI cost reports must show:

```text
period

currency

estimate vs final

employee breakdown

workflow breakdown when useful

trend

cost drivers

failed task cost when relevant

cost per verified outcome
```

Cost without value context can create fear.

Value without cost context can create mistrust.

Show both.

---

# Funnel Event Examples

## Employee Hire Funnel

```text
marketplace_viewed
employee_card_viewed
employee_profile_viewed
employee_hire_clicked
employee_hired
employee_setup_started
employee_setup_completed
employee_ready_to_deploy
employee_deployment_started
employee_active
first_verified_outcome_recorded
```

## Knowledge Source Funnel

```text
knowledge_source_add_clicked
knowledge_source_type_selected
knowledge_source_connection_started
knowledge_source_connected
knowledge_source_sync_started
knowledge_source_ready
knowledge_source_used_in_answer
```

## Workflow Funnel

```text
workflow_create_clicked
workflow_draft_created
workflow_trigger_configured
workflow_action_configured
workflow_review_policy_configured
workflow_published
workflow_execution_completed
```

## Billing Funnel

```text
upgrade_prompt_viewed
upgrade_prompt_clicked
plan_selected
checkout_started
checkout_completed
subscription_created
subscription_upgrade_confirmed
```

---

# Event Example Contract

Example event:

```json
{
  "event_name": "employee_deployment_failed",
  "event_id": "evt_123",
  "timestamp": "2026-06-17T12:00:00Z",
  "organization_id": "org_123",
  "workspace_id": "workspace_123",
  "user_role": "admin",
  "employee_id": "employee_123",
  "employee_type": "customer_support",
  "channel_type": "website_chat",
  "failure_reason": "missing_knowledge_source",
  "risk_level": "medium",
  "source_surface": "deploy_employee_dialog"
}
```

Do not include raw prompts, customer messages, secrets, or source content.

---

# Analytics Engineering Requirements

Ariyo analytics infrastructure should support:

```text
client events

server events

schema validation

event versioning

deduplication

organization scoping

user role context

privacy filtering

PII controls

data warehouse readiness

dashboard readiness

experiment attribution
```

Analytics architecture must be reliable enough for product decisions.

---

# Frontend Instrumentation Rule

Frontend code may track:

```text
viewed surfaces

clicked actions

started forms

changed filters

opened dialogs

saw empty states

saw errors

clicked retry

clicked upgrade prompt
```

Frontend must not claim final backend outcomes.

Bad:

```text
frontend emits employee_active before server confirms
```

Good:

```text
frontend emits employee_deployment_started
server emits employee_active
```

---

# Backend Instrumentation Rule

Backend must track durable business outcomes.

Backend-owned events:

```text
employee_hired

employee_deployed

employee_active

workflow_execution_completed

knowledge_source_sync_completed

answer_sent

answer_blocked

billing_subscription_created

billing_invoice_paid

permission_changed
```

Server events must be idempotent and auditable.

---

# Growth Engineering Guardrail

Growth engineering must not bypass product safety.

Forbidden:

```text
skipping review to increase activation

hiding setup requirements

showing fake success states

making upgrade prompts block recovery

auto-enabling workflows

defaulting automatic replies on

showing misleading ROI

instrumenting sensitive content
```

Growth must improve the path to real value.

---

# Decision Metrics Rule

Each metric should support a decision.

Examples:

```text
If source_sync_failed is high:
improve sync reliability and error recovery.

If employee_hired is high but employee_deployed is low:
improve setup and readiness flow.

If deployment is high but verified outcomes are low:
improve employee quality, knowledge, and workflows.

If usage is high but retention is low:
check trust, ROI, cost, and outcome quality.

If AI cost per outcome is high:
optimize prompts, retrieval, model routing, or workflow design.
```

Metrics without decisions should be removed or deprioritized.

---

# Metrics Hierarchy

Use this hierarchy:

```text
1. Business outcome metrics
2. Product value metrics
3. Trust and safety metrics
4. Activation and lifecycle metrics
5. Engagement metrics
6. Operational performance metrics
7. Diagnostic UI interaction metrics
```

Do not let click metrics dominate product strategy.

---

# Leading and Lagging Indicators

Use both.

Leading indicators:

```text
setup completed

source connected

employee ready to deploy

first workflow published

first review completed
```

Lagging indicators:

```text
retention

expansion

verified outcomes

revenue

churn

NPS or satisfaction if collected
```

Leading indicators help improve product before revenue changes.

---

# Alerting Rule

Create alerts for critical metric changes.

Alert candidates:

```text
deployment failure spike

knowledge sync failure spike

workflow execution failure spike

policy block spike

AI cost spike

billing failure spike

activation conversion drop

answer rejection spike

retrieval empty spike

latency spike
```

Alerts must be actionable.

Do not create noisy alerts that nobody owns.

---

# Data Freshness Rule

Dashboards must indicate freshness where relevant.

Examples:

```text
Updated 12 minutes ago

Data may be delayed up to 1 hour

Final billing data available after invoice closes
```

Do not present stale data as real-time.

---

# Metric Definition Rule

Every important metric must have a written definition.

Define:

```text
name

plain-English meaning

formula

included events

excluded events

time window

source of truth

known limitations

owner
```

Metric ambiguity creates team confusion.

---

# Metric Naming Rule

Use names that are precise.

Good:

```text
weekly_verified_ai_employee_outcomes

employee_deployment_rate

knowledge_backed_answer_rate

ai_cost_per_verified_outcome

activated_organization_retention
```

Bad:

```text
usage

success

activity

AI score

engagement
```

unless clearly defined.

---

# Product Analytics Review Checklist

Before shipping a major feature, verify:

```text
Is the success metric defined?

Is the activation or adoption step defined?

Are critical events named consistently?

Are event properties safe and useful?

Are backend truth events server-owned?

Are failure reasons structured?

Are permissions and organization scope included where needed?

Are sensitive values excluded?

Are safety guardrails measured?

Are AI cost implications measured?

Are user-facing metrics honest?

Are dashboard needs clear?

Are tests or event schema checks added when needed?
```

If any answer is no, instrumentation is incomplete.

---

# Growth Review Checklist

Before shipping a growth change, verify:

```text
Does it reduce time to real value?

Does it preserve user trust?

Does it avoid dark patterns?

Does it avoid fake urgency?

Does it avoid misleading AI claims?

Does it avoid unsafe automation expansion?

Does it include guardrail metrics?

Does it support rollback?

Does it respect billing transparency?

Does it support mobile and accessibility?

Does it avoid collecting sensitive data?
```

Growth that damages trust is not acceptable.

---

# Experiment Review Checklist

Before launching an experiment, verify:

```text
Is the hypothesis clear?

Is the primary metric defined?

Are guardrail metrics defined?

Is the audience defined?

Is the experiment safe for high-risk workflows?

Is rollback possible?

Are events already instrumented?

Is success criteria known before launch?

Will results be interpretable?

Does it avoid misleading users?
```

Do not experiment blindly on high-risk AI behavior.

---

# Product Analytics Decision Tree

Ask:

### Is this a user-facing feature?

Define the success metric and failure states.

### Is this part of onboarding?

Instrument activation funnel steps.

### Is this AI employee behavior?

Track lifecycle, outcome, review, safety, cost, and knowledge usage.

### Is this knowledge-related?

Track sync, retrieval, freshness, citation, and quality.

### Is this workflow-related?

Track trigger, execution, approval, failure, retry, and completion.

### Is this billing-related?

Use backend billing truth and avoid sensitive analytics.

### Is this growth-related?

Define hypothesis, primary metric, guardrails, and rollback.

### Is this sensitive?

Do not collect raw content or secrets.

### Is this metric actionable?

If not, reconsider tracking it.

---

# Forbidden Analytics Patterns

Never ship:

```text
vanity metrics as primary success

raw prompts in analytics

raw model responses in analytics

knowledge source content in analytics

customer messages in analytics

billing secrets in analytics

tokens or API keys in analytics

frontend events used as billing truth

frontend events used as deployment truth

employee active event before server confirmation

workflow completed before server confirmation

AI cost shown without source of truth

ROI overclaims

fake time saved

usage volume celebrated without quality

safety failures hidden from dashboards

unknown event properties

unversioned critical events

event names like clicked or success

experiments without guardrail metrics

growth prompts that block recovery

dark-pattern upgrade flows

instrumentation added without purpose
```

---

# Ariyo Product Analytics Golden Rule

Measure what proves trusted business value.

Not what merely proves activity.

---

# Senior Growth Rule

Do not optimize Ariyo for more AI usage.

Optimize Ariyo for more trusted, measurable, cost-efficient AI employee outcomes.

---

# Final Rule

Ariyo product analytics and growth are production-ready only when metrics are tied to business value, activation measures real outcomes, AI employee performance is measurable, knowledge quality is visible, workflows are evaluated safely, AI cost is transparent, revenue metrics are server-truthful, experiments include guardrails, sensitive data is protected, and every tracked event supports a meaningful product decision.
